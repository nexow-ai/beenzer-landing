/**
 * The hero globe.
 *
 * The idea, in one sentence: scrolling drops the camera from orbit onto the
 * exact spot one real Beenzer was posted, and the dot map resolves as it
 * comes down. Sacrificed for it: textures, post-processing, stars, arcs. The
 * planet is dots, the pins are light, and the only solid object is the logo's
 * pin waiting at the end.
 *
 * Budget: three draw calls for the land (≈50k points, one per detail level),
 * one each for pins, stems, body, halo, the 3D pin and its ground rings.
 * Device pixel ratio capped at 2. The land mask is 6 KB gzipped and loads
 * after the headline has painted. The loop stops when the hero is off-screen
 * or the tab is hidden, and with prefers-reduced-motion it draws one frame.
 */
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  DoubleSide,
  ExtrudeGeometry,
  Group,
  LineSegments,
  Matrix4,
  Mesh,
  PerspectiveCamera,
  PlaneGeometry,
  Points,
  Quaternion,
  Scene,
  Shape,
  ShaderMaterial,
  SphereGeometry,
  Vector3,
  WebGLRenderer,
  BackSide,
  Path,
} from 'three';
import gsap from 'gsap';
import { LEVELS, TARGET, WORLD_POINTS, levelPoint, worldPoint } from '../lib/lattice.js';
import { PINS } from '../data/globe';

const RAD = Math.PI / 180;
const EARTH_KM = 6371;
const FOV = 30;

/** Camera height above the surface at the end, in globe radii: the shore of Lake Geneva. */
const ALT_END = 0.02;

/** Height that frames the whole planet: 94% of the height on a screen, a bit wider than a phone. */
function startAltitude(aspect: number, mobile: boolean) {
  const half = (FOV * RAD) / 2;
  const radius = mobile ? Math.atan(Math.tan(half) * aspect) * 1.12 : half * 0.94;
  return 1 / Math.sin(radius) - 1;
}

type RGB = [number, number, number];
const hex = (h: string): RGB => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255) as RGB;
const COLORS = {
  land: hex('#4a4a54'),
  landHot: hex('#16fd82'),
  pin: hex('#16fd82'),
  teal: hex('#1398b9'),
};

const clamp01 = (x: number) => Math.min(1, Math.max(0, x));
const smooth = (a: number, b: number, x: number) => {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
/** 0 → 1 over [a, b], hold, 1 → 0 over [c, d]. */
const band = (x: number, a: number, b: number, c: number, d: number) => smooth(a, b, x) * (1 - smooth(c, d, x));

/** Unit vector for a latitude and longitude, with lon 0 / lat 0 facing +z. */
function toVec(lat: number, lon: number, out = new Vector3()) {
  const phi = lat * RAD;
  const lam = lon * RAD;
  return out.set(Math.cos(phi) * Math.sin(lam), Math.sin(phi), Math.cos(phi) * Math.cos(lam));
}

export function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

// ---------- shaders ----------

const landVertex = /* glsl */ `
  #define LEVELS ${LEVELS.length + 1}
  attribute float aLevel;
  attribute float aSeed;
  uniform float uSizes[LEVELS];
  uniform float uMix[LEVELS];
  uniform float uCaps[LEVELS];
  uniform vec3 uTarget;
  uniform float uScale;
  uniform float uTime;
  uniform float uHotRadius;
  varying float vAlpha;
  varying float vHot;
  varying float vShade;

  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    int level = int(aLevel + 0.5);
    float ang = acos(clamp(dot(normalize(position), uTarget), -1.0, 1.0));
    float alpha = uMix[level];

    // Each finer level fills its cap as it fades in, with a soft rim, and the
    // coarser one gives way inside it.
    if (level > 0) {
      alpha *= 1.0 - smoothstep(uCaps[level] * 0.72, uCaps[level], ang);
    }
    if (level < LEVELS - 1) {
      float cap = uCaps[level + 1];
      alpha *= 1.0 - uMix[level + 1] * (1.0 - smoothstep(cap * 0.62, cap * 0.9, ang));
    }

    vec3 n = normalize(normalMatrix * position);
    vec3 v = normalize(-mv.xyz);
    alpha *= smoothstep(0.0, 0.3, dot(n, v));

    float px = uSizes[level] * uScale / -mv.z;
    // Below a pixel a dot shimmers; keep it a pixel and let it fade instead.
    alpha *= clamp(px / 1.2, 0.0, 1.0);
    gl_PointSize = clamp(px, 1.0, 48.0);

    vHot = 1.0 - smoothstep(0.0, uHotRadius, ang);
    vShade = 0.7 + 0.3 * sin(aSeed * 91.0 + uTime * (0.6 + aSeed));
    vAlpha = alpha;
    gl_Position = projectionMatrix * mv;
    // A dot nobody can see never reaches the rasteriser.
    if (alpha < 0.004) {
      gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      gl_PointSize = 0.0;
    }
  }
`;

const landFragment = /* glsl */ `
  uniform vec3 uColor;
  uniform vec3 uHotColor;
  varying float vAlpha;
  varying float vHot;
  varying float vShade;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.3, d) * vAlpha;
    if (a < 0.01) discard;
    vec3 col = mix(uColor * vShade, uHotColor, vHot * 0.85);
    gl_FragColor = vec4(col, a);
  }
`;

const pinVertex = /* glsl */ `
  attribute float aSeed;
  uniform float uTime;
  uniform float uPixel;
  uniform float uFade;
  varying float vAlpha;

  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vec3 n = normalize(normalMatrix * normalize(position));
    float facing = smoothstep(-0.1, 0.25, dot(n, normalize(-mv.xyz)));
    float pulse = 0.5 + 0.5 * sin(uTime * 2.2 + aSeed * 40.0);
    gl_PointSize = uPixel * (5.0 + 3.0 * pulse);
    vAlpha = facing * uFade * (0.65 + 0.35 * pulse);
    gl_Position = projectionMatrix * mv;
  }
`;

const pinFragment = /* glsl */ `
  uniform vec3 uColor;
  varying float vAlpha;

  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float core = smoothstep(0.45, 0.25, d);
    float glow = exp(-d * 3.5) * 0.7;
    float a = (core + glow) * vAlpha;
    if (a < 0.01) discard;
    gl_FragColor = vec4(mix(uColor, vec3(1.0), core * 0.35) * a, a);
  }
`;

const stemVertex = /* glsl */ `
  attribute float aTip;
  uniform float uFade;
  varying float vAlpha;

  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vec3 n = normalize(normalMatrix * normalize(position));
    vAlpha = smoothstep(-0.1, 0.25, dot(n, normalize(-mv.xyz))) * uFade * mix(0.15, 0.85, aTip);
    gl_Position = projectionMatrix * mv;
  }
`;

const stemFragment = /* glsl */ `
  uniform vec3 uColor;
  varying float vAlpha;
  void main() {
    gl_FragColor = vec4(uColor * vAlpha, vAlpha);
  }
`;

const bodyVertex = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vView = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`;

const bodyFragment = /* glsl */ `
  uniform vec3 uRim;
  uniform float uRimStrength;
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    float f = 1.0 - max(dot(vNormal, vView), 0.0);
    vec3 col = vec3(0.012, 0.014, 0.016) + uRim * pow(f, 3.0) * uRimStrength;
    gl_FragColor = vec4(col, 1.0);
  }
`;

const haloFragment = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uStrength;
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    float f = pow(max(0.0, 0.62 - dot(vNormal, vView)), 2.6);
    vec3 col = mix(uColorA, uColorB, smoothstep(-0.4, 0.6, vNormal.y));
    float a = f * uStrength;
    gl_FragColor = vec4(col * a, a);
  }
`;

const pinMeshVertex = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vView;
  varying float vY;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vView = normalize(-mv.xyz);
    vY = position.y;
    gl_Position = projectionMatrix * mv;
  }
`;

const pinMeshFragment = /* glsl */ `
  uniform vec3 uColor;
  uniform vec3 uDeep;
  uniform float uOpacity;
  varying vec3 vNormal;
  varying vec3 vView;
  varying float vY;
  void main() {
    vec3 light = normalize(vec3(-0.4, 0.8, 0.6));
    float diffuse = max(dot(vNormal, light), 0.0);
    float rim = pow(1.0 - abs(dot(vNormal, vView)), 2.0);
    vec3 col = mix(uDeep, uColor, 0.35 + 0.65 * diffuse);
    col += rim * 0.5 * uColor + pow(diffuse, 24.0) * 0.6;
    col *= 0.7 + 0.3 * smoothstep(0.0, 1.0, vY);
    gl_FragColor = vec4(col, uOpacity);
  }
`;

const ringVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const ringFragment = /* glsl */ `
  uniform vec3 uColor;
  uniform float uProgress;
  uniform float uOpacity;
  varying vec2 vUv;
  void main() {
    float d = length(vUv - 0.5) * 2.0;
    float r = uProgress;
    float ring = smoothstep(r - 0.06, r, d) * (1.0 - smoothstep(r, r + 0.012, d));
    float fill = (1.0 - smoothstep(0.0, r, d)) * 0.08;
    float a = (ring + fill) * (1.0 - uProgress) * uOpacity;
    if (a < 0.003) discard;
    gl_FragColor = vec4(uColor * a, a);
  }
`;

// ---------- geometry ----------

/**
 * One geometry per level of detail, the world lattice first and the finest
 * cap last, each built only when it is asked for.
 */
function landLevels(bits: Uint8Array): (() => BufferGeometry)[] {
  const on = (k: number) => (bits[k >> 3] & (1 << (k & 7))) !== 0;
  const v = new Vector3();
  const build = (points: [number, number][], level: number) => {
    const positions = new Float32Array(points.length * 3);
    const seeds = new Float32Array(points.length);
    points.forEach(([lat, lon], i) => {
      toVec(lat, lon, v);
      positions.set([v.x, v.y, v.z], i * 3);
      // Deterministic per point, so the shimmer pattern is stable between visits.
      seeds[i] = Math.abs((Math.sin((i + level * 1e5) * 12.9898) * 43758.5453) % 1);
    });
    const g = new BufferGeometry();
    g.setAttribute('position', new BufferAttribute(positions, 3));
    g.setAttribute('aLevel', new BufferAttribute(new Float32Array(points.length).fill(level), 1));
    g.setAttribute('aSeed', new BufferAttribute(seeds, 1));
    return g;
  };
  const world = () => {
    const points: [number, number][] = [];
    for (let i = 0; i < WORLD_POINTS; i++) if (on(i)) points.push(worldPoint(i));
    return build(points, 0);
  };
  let base = WORLD_POINTS;
  const caps = LEVELS.map((level, li) => {
    const start = base;
    base += level.rows * level.cols;
    return () => {
      const points: [number, number][] = [];
      for (let i = 0; i < level.rows * level.cols; i++) if (on(start + i)) points.push(levelPoint(level, i));
      return build(points, li + 1);
    };
  });
  return [world, ...caps];
}

/** The logo's pin as a solid: a teardrop with a hole, tip at the origin, one unit tall. */
function pinGeometry() {
  // Same proportions as the mark in Logo.astro (viewBox units / 66.5).
  const s = 1 / 66.5;
  const cy = (86.5 - 28) * s;
  const r = 25.6 * s;
  // The two straight sides are tangent to the head: alpha is measured at the
  // centre, between straight down and each tangent point.
  const alpha = Math.acos(r / cy);
  const left = Math.PI + (Math.PI / 2 - alpha);
  const right = -(Math.PI / 2 - alpha);
  const shape = new Shape();
  shape.moveTo(0, 0);
  shape.lineTo(r * Math.cos(left), cy + r * Math.sin(left));
  shape.absarc(0, cy, r, left, right, true);
  shape.lineTo(0, 0);
  const hole = new Path();
  hole.absarc(0, cy, 8.6 * s, 0, Math.PI * 2, false);
  shape.holes.push(hole);
  const g = new ExtrudeGeometry(shape, {
    depth: 0.12,
    bevelEnabled: true,
    bevelThickness: 0.035,
    bevelSize: 0.03,
    bevelSegments: 4,
    curveSegments: 48,
  });
  g.translate(0, 0, -0.06);
  return g;
}

// ---------- mount ----------

export interface GlobeHandle {
  destroy(): void;
}

export async function mountGlobe(stage: HTMLElement, section: HTMLElement): Promise<GlobeHandle | null> {
  const canvas = stage.querySelector<HTMLCanvasElement>('[data-globe]');
  if (!canvas || !webglAvailable()) {
    stage.classList.add('no-webgl');
    return null;
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const res = await fetch('/globe/land.bin');
  if (!res.ok) {
    stage.classList.add('no-webgl');
    return null;
  }
  const bits = new Uint8Array(await res.arrayBuffer());

  let renderer: WebGLRenderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch {
    stage.classList.add('no-webgl');
    return null;
  }
  renderer.setClearColor(0x000000, 0);

  // A software rasteriser (SwiftShader, llvmpipe) draws a frame in hundreds of
  // milliseconds: there, the globe only redraws when something moves.
  const gl = renderer.getContext();
  const debug = gl.getExtension('WEBGL_debug_renderer_info');
  const gpu = String(gl.getParameter(debug ? debug.UNMASKED_RENDERER_WEBGL : gl.RENDERER));
  const software = /swiftshader|llvmpipe|softpipe|software|basic render/i.test(gpu);

  // Resolution scale: lowered while frames run long, raised again when they recover.
  let quality = software ? 0.5 : 1;
  const dpr = () => Math.min(window.devicePixelRatio || 1, 2) * quality;
  renderer.setPixelRatio(dpr());

  const scene = new Scene();
  const camera = new PerspectiveCamera(FOV, 1, 0.0004, 20);
  const globe = new Group();
  scene.add(globe);

  const targetLocal = toVec(TARGET.lat, TARGET.lon);
  /** The globe's y rotation that brings the target to face the camera. */
  const ryTarget = -TARGET.lon * RAD;

  // Body: occludes the far side and carries a teal rim.
  const bodyMat = new ShaderMaterial({
    vertexShader: bodyVertex,
    fragmentShader: bodyFragment,
    uniforms: { uRim: { value: new Vector3(...COLORS.teal) }, uRimStrength: { value: 0.9 } },
  });
  const body = new Mesh(new SphereGeometry(0.996, 96, 64), bodyMat);
  globe.add(body);

  // Halo: the atmosphere, seen from outside only.
  const haloMat = new ShaderMaterial({
    vertexShader: bodyVertex,
    fragmentShader: haloFragment,
    uniforms: {
      uColorA: { value: new Vector3(...COLORS.teal) },
      uColorB: { value: new Vector3(...COLORS.pin) },
      uStrength: { value: 0.6 },
    },
    side: BackSide,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
  });
  const halo = new Mesh(new SphereGeometry(1.16, 64, 48), haloMat);
  scene.add(halo);

  // Land. Dot spacing per level, in radians: the world lattice, then each cap.
  const spacing = [Math.sqrt((4 * Math.PI) / WORLD_POINTS), ...LEVELS.map((l) => l.step * RAD)];
  const landMat = new ShaderMaterial({
    vertexShader: landVertex,
    fragmentShader: landFragment,
    uniforms: {
      uSizes: { value: spacing.map((sp, i) => sp * (i === spacing.length - 1 ? 0.46 : 0.52)) },
      uMix: { value: spacing.map((_, i) => (i === 0 ? 1 : 0)) },
      uTarget: { value: targetLocal.clone() },
      uCaps: { value: [Math.PI, ...LEVELS.map((l) => l.radius * RAD)] },
      uScale: { value: 1 },
      uTime: { value: 0 },
      uHotRadius: { value: 0.02 },
      uColor: { value: new Vector3(...COLORS.land) },
      uHotColor: { value: new Vector3(...COLORS.landHot) },
    },
    transparent: true,
    depthWrite: false,
  });
  const levels = landLevels(bits);
  const lands: (Points | null)[] = levels.map(() => null);
  const addLevel = (i: number) => {
    if (lands[i]) return;
    lands[i] = new Points(levels[i](), landMat);
    globe.add(lands[i]!);
  };
  addLevel(0);
  // The finer levels only show during the dive: build them while the browser is idle.
  const idle = (cb: () => void) =>
    'requestIdleCallback' in window ? requestIdleCallback(cb, { timeout: 2000 }) : setTimeout(cb, 150);
  let destroyed = false;
  const buildNext = (i: number) => {
    if (destroyed || i >= levels.length) return;
    addLevel(i);
    idle(() => buildNext(i + 1));
  };
  idle(() => buildNext(1));

  // Pins: a dot of light on a thin stem, for posts around the world.
  const pinCount = PINS.length;
  const heads = new Float32Array(pinCount * 3);
  const headSeeds = new Float32Array(pinCount);
  const stems = new Float32Array(pinCount * 6);
  const stemTips = new Float32Array(pinCount * 2);
  const pinHeights = PINS.map((_, i) => 0.035 + ((i * 37) % 11) * 0.004);
  const v = new Vector3();
  PINS.forEach(([lat, lon], i) => {
    toVec(lat, lon, v);
    stems.set([v.x, v.y, v.z], i * 6);
    v.multiplyScalar(1 + pinHeights[i]);
    heads.set([v.x, v.y, v.z], i * 3);
    stems.set([v.x, v.y, v.z], i * 6 + 3);
    stemTips.set([0, 1], i * 2);
    headSeeds[i] = (i * 0.618) % 1;
  });
  const headGeo = new BufferGeometry();
  headGeo.setAttribute('position', new BufferAttribute(heads, 3));
  headGeo.setAttribute('aSeed', new BufferAttribute(headSeeds, 1));
  const pinMat = new ShaderMaterial({
    vertexShader: pinVertex,
    fragmentShader: pinFragment,
    uniforms: {
      uTime: { value: 0 },
      uPixel: { value: dpr() },
      uFade: { value: 1 },
      uColor: { value: new Vector3(...COLORS.pin) },
    },
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
  });
  const pinPoints = new Points(headGeo, pinMat);
  globe.add(pinPoints);

  const stemGeo = new BufferGeometry();
  stemGeo.setAttribute('position', new BufferAttribute(stems, 3));
  stemGeo.setAttribute('aTip', new BufferAttribute(stemTips, 1));
  const stemMat = new ShaderMaterial({
    vertexShader: stemVertex,
    fragmentShader: stemFragment,
    uniforms: { uFade: { value: 1 }, uColor: { value: new Vector3(...COLORS.pin) } },
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
  });
  const stemLines = new LineSegments(stemGeo, stemMat);
  globe.add(stemLines);

  // The destination: the logo's pin, standing on the north shore of the lake.
  // Its frame: up is the ground normal, forward points south, toward the camera.
  const north = new Vector3(0, 1, 0).sub(targetLocal.clone().multiplyScalar(targetLocal.y)).normalize();
  const south = north.clone().negate();
  const east = new Vector3().crossVectors(north, targetLocal).normalize();
  const basis = new Matrix4().makeBasis(east, targetLocal, south);
  const frameQ = new Quaternion().setFromRotationMatrix(basis);

  const destination = new Group();
  destination.position.copy(targetLocal);
  destination.quaternion.copy(frameQ);
  globe.add(destination);

  const pinMeshMat = new ShaderMaterial({
    vertexShader: pinMeshVertex,
    fragmentShader: pinMeshFragment,
    uniforms: {
      uColor: { value: new Vector3(...COLORS.pin) },
      uDeep: { value: new Vector3(0.02, 0.32, 0.18) },
      uOpacity: { value: 1 },
    },
    transparent: true,
  });
  const pinMesh = new Mesh(pinGeometry(), pinMeshMat);
  const pinHolder = new Group();
  pinHolder.add(pinMesh);
  destination.add(pinHolder);

  const rings = [0, 1, 2].map(() => {
    const mat = new ShaderMaterial({
      vertexShader: ringVertex,
      fragmentShader: ringFragment,
      uniforms: {
        uColor: { value: new Vector3(...COLORS.pin) },
        uProgress: { value: 0 },
        uOpacity: { value: 0 },
      },
      transparent: true,
      depthWrite: false,
      blending: AdditiveBlending,
      side: DoubleSide,
    });
    const ring = new Mesh(new PlaneGeometry(1, 1), mat);
    // The plane lies on the ground: its normal is the frame's up.
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.00004;
    destination.add(ring);
    return ring;
  });

  // ---------- DOM hooks ----------

  const intro = stage.querySelector<HTMLElement>('[data-intro]');
  const beats = [...stage.querySelectorAll<HTMLElement>('[data-beat]')];
  const arrival = stage.querySelector<HTMLElement>('[data-arrival]');
  const cue = stage.querySelector<HTMLElement>('[data-cue]');
  const leader = stage.querySelector<SVGSVGElement>('svg.leader');
  const leaderLine = leader?.querySelector('line');
  const leaderDot = leader?.querySelector('circle');
  const anchor = { x: 0, y: 0 };
  const hud = {
    lat: stage.querySelector<HTMLElement>('[data-hud-lat]'),
    lon: stage.querySelector<HTMLElement>('[data-hud-lon]'),
    alt: stage.querySelector<HTMLElement>('[data-hud-alt]'),
  };

  // ---------- state ----------

  let width = 1;
  let height = 1;
  let mobile = false;
  const pointer = { x: 0, y: 0, sx: 0, sy: 0 };
  let altStart = 3;
  const cur = { alt: altStart, rx: 0, ry: 0, tilt: 0, ox: 0, oy: 0 };
  let spin = -0.5;
  let started = false;
  let time = 0;
  let visible = true;

  function resize() {
    width = stage.clientWidth;
    height = stage.clientHeight;
    mobile = width <= 820 || width / height < 0.9;
    altStart = startAltitude(width / height, mobile);
    if (!started) cur.alt = altStart;
    // The card's corner the leader line starts from (see .arrival in Hero.astro).
    if (arrival) {
      const w = arrival.offsetWidth;
      anchor.x = arrival.offsetLeft + (mobile ? w / 2 : w);
      anchor.y = arrival.offsetTop;
    }
    measure();
    renderer.setPixelRatio(dpr());
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    landMat.uniforms.uScale.value = (height * dpr()) / (2 * Math.tan((FOV * RAD) / 2));
    pinMat.uniforms.uPixel.value = dpr();
  }

  // Measured on resize, so the loop never forces a layout.
  let sectionTop = 0;
  let sectionSpan = 1;
  function measure() {
    sectionTop = section.offsetTop;
    sectionSpan = section.offsetHeight - window.innerHeight;
  }

  function progress() {
    return sectionSpan > 0 ? clamp01((window.scrollY - sectionTop) / sectionSpan) : 0;
  }

  /** Where everything wants to be at scroll progress p. The camera then chases it. */
  function goal(p: number) {
    const k = easeInOut(smooth(0.08, 0.86, p));
    const alt = altStart * (ALT_END / altStart) ** k;
    const turn = easeInOut(smooth(0.06, 0.62, p));
    const idleTilt = 0.32;
    return {
      alt,
      rx: lerp(idleTilt, TARGET.lat * RAD, turn),
      ry: lerp(spin, ryTarget, turn),
      // Pitch toward the horizon in the last stretch, looking north across the lake.
      tilt: 1.02 * smooth(0.5, 0.93, p),
      ox: mobile ? 0 : lerp(0.44, 0.2, smooth(0.04, 0.5, p)),
      oy: mobile ? lerp(0.3, 0.12, smooth(0.04, 0.5, p)) : 0,
    };
  }

  const popEase = gsap.parseEase('back.out(2.2)');
  const tmp = new Vector3();
  const lookAt = new Vector3();
  const headWorld = new Vector3();

  function place(dt: number, p: number) {
    const g = goal(p);
    // Damped follow, corrected for frame time: the camera has mass.
    const f = started ? 1 - Math.exp(-dt * 5.5) : 1;
    // Altitude chases in log space so the fall feels even from orbit to the ground.
    cur.alt = Math.exp(lerp(Math.log(cur.alt), Math.log(g.alt), f));
    cur.rx = lerp(cur.rx, g.rx, f);
    cur.ry = lerp(cur.ry, g.ry, f);
    cur.tilt = lerp(cur.tilt, g.tilt, f);
    cur.ox = lerp(cur.ox, g.ox, f);
    cur.oy = lerp(cur.oy, g.oy, f);

    const near = 1 - smooth(0.02, 0.4, p);
    pointer.sx = lerp(pointer.sx, pointer.x, 1 - Math.exp(-dt * 3));
    pointer.sy = lerp(pointer.sy, pointer.y, 1 - Math.exp(-dt * 3));
    globe.rotation.set(cur.rx + pointer.sy * 0.08 * near, cur.ry + pointer.sx * 0.12 * near, 0, 'XYZ');
    globe.updateMatrixWorld(true);

    // After the rotation the target faces +z: (0, 0, 1). Hang the camera above
    // it, pitched to the south, and keep looking at it all the way down.
    const t = cur.tilt;
    camera.position.set(0, -Math.sin(t) * cur.alt, 1 + Math.cos(t) * cur.alt);
    lookAt.set(0, 0, 1);
    camera.up.set(0, 1, 0);
    camera.lookAt(lookAt);
    camera.near = Math.max(0.00025, cur.alt * 0.02);
    camera.far = cur.alt + 3;
    camera.updateProjectionMatrix();
    // Shift the picture without skewing it: the globe sits right of the copy
    // (or above it on a phone), then centres. Positive ox moves it right, oy up.
    camera.projectionMatrix.elements[8] -= cur.ox;
    camera.projectionMatrix.elements[9] -= cur.oy;
    camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert();

    // Level of detail: a finer level fades in once the coarser one's dots are
    // 9 to 15 CSS pixels apart under the camera.
    const mix = landMat.uniforms.uMix.value as number[];
    const perRadian = landMat.uniforms.uScale.value / dpr() / cur.alt;
    for (let i = 1; i < mix.length; i++) mix[i] = smooth(9, 15, spacing[i - 1] * perRadian);
    mix.forEach((m, i) => {
      if (m > 0.001) addLevel(i);
      if (lands[i]) lands[i]!.visible = m > 0.001;
    });
    landMat.uniforms.uHotRadius.value = lerp(0.004, 0.06, smooth(0.02, 1.2, cur.alt));
    const far = smooth(0.12, 0.8, cur.alt);
    pinMat.uniforms.uFade.value = far;
    stemMat.uniforms.uFade.value = far;
    haloMat.uniforms.uStrength.value = 0.6 * smooth(0.08, 0.6, cur.alt);
    bodyMat.uniforms.uRimStrength.value = 0.9 * smooth(0.05, 0.5, cur.alt);
    halo.visible = cur.alt > 0.08;

    // The 3D pin grows in for the landing, at a constant size on screen.
    const land01 = smooth(0.7, 0.86, p);
    const pop = land01 < 1 ? popEase(land01) : 1;
    const pinSize = cur.alt * 0.085 * pop;
    pinHolder.visible = pop > 0.001;
    pinHolder.scale.setScalar(Math.max(pinSize, 1e-6));
    pinHolder.position.y = pinSize * (0.08 + 0.05 * Math.sin(time * 1.6));
    pinHolder.rotation.y = Math.sin(time * 0.7) * 0.35;
    rings.forEach((ring, i) => {
      const phase = (time * 0.32 + i / rings.length) % 1;
      const u = ring.material.uniforms;
      u.uProgress.value = phase;
      u.uOpacity.value = land01 * 0.7;
      ring.scale.setScalar(cur.alt * 0.9);
    });

    // Where the pin's head is on screen, for the card that points at it.
    if (p > 0.6) {
      headWorld.set(0, pinSize * 1.3, 0);
      destination.localToWorld(headWorld);
      tmp.copy(headWorld).project(camera);
      const x = ((tmp.x + 1) / 2) * width;
      const y = ((1 - tmp.y) / 2) * height;
      if (leaderLine && leaderDot) {
        leaderLine.setAttribute('x1', anchor.x.toFixed(1));
        leaderLine.setAttribute('y1', anchor.y.toFixed(1));
        leaderLine.setAttribute('x2', x.toFixed(1));
        leaderLine.setAttribute('y2', y.toFixed(1));
        leaderDot.setAttribute('cx', x.toFixed(1));
        leaderDot.setAttribute('cy', y.toFixed(1));
      }
    }
  }

  // Write a style only when it changes: the DOM side of the loop stays cheap.
  const last = new WeakMap<HTMLElement, string>();
  function show(el: HTMLElement | null, amount: number, lift = 24) {
    if (!el) return;
    const value = amount.toFixed(3);
    if (last.get(el) === value) return;
    last.set(el, value);
    el.style.opacity = value;
    el.style.transform = `translate3d(0, ${((1 - amount) * lift).toFixed(1)}px, 0)`;
    el.style.visibility = amount < 0.002 ? 'hidden' : 'visible';
    el.toggleAttribute('data-active', amount > 0.5);
  }

  function updateDom(p: number) {
    if (intro) {
      const out = smooth(0.015, 0.11, p);
      const value = out.toFixed(3);
      if (last.get(intro) !== value) {
        last.set(intro, value);
        intro.style.opacity = String(1 - out);
        intro.style.transform = `translate3d(0, ${(-out * 60).toFixed(1)}px, 0)`;
        intro.style.visibility = out > 0.998 ? 'hidden' : 'visible';
      }
    }
    show(cue ?? null, 1 - smooth(0.0, 0.04, p), 0);
    if (beats[0]) show(beats[0], band(p, 0.15, 0.2, 0.32, 0.37));
    if (beats[1]) show(beats[1], band(p, 0.41, 0.46, 0.58, 0.63));
    const arrived = smooth(0.78, 0.86, p);
    show(arrival, arrived, 36);
    if (leader) {
      const value = (smooth(0.84, 0.9, p) * 0.9).toFixed(3);
      if (last.get(leader as unknown as HTMLElement) !== value) {
        last.set(leader as unknown as HTMLElement, value);
        leader.style.opacity = value;
      }
    }

    // Read-out: what the camera is over, and how high.
    let lon = -cur.ry / RAD;
    lon = ((((lon + 180) % 360) + 360) % 360) - 180;
    const lat = cur.rx / RAD;
    const km = Math.round(cur.alt * EARTH_KM);
    if (hud.lat) hud.lat.textContent = `${Math.abs(lat).toFixed(2)}° ${lat >= 0 ? 'N' : 'S'}`;
    if (hud.lon) hud.lon.textContent = `${Math.abs(lon).toFixed(2)}° ${lon >= 0 ? 'E' : 'W'}`;
    if (hud.alt) hud.alt.textContent = km.toLocaleString('en-US');
  }

  let lastP = -1;
  let pointerMoved = false;

  function frame(dt: number) {
    const p = reduced ? 0 : progress();
    // On a software renderer, hold still unless the page moves: no idle spin,
    // no pulse, and no draw once the camera has settled.
    if (software && started) {
      const scrolled = Math.abs(p - lastP) > 1e-5;
      const settling = Math.abs(cur.alt / goal(p).alt - 1) > 0.002;
      if (!scrolled && !settling && !pointerMoved) return;
    }
    lastP = p;
    pointerMoved = false;
    if (!software) time += dt;
    // The idle spin slows to a stop as the dive begins.
    if (!reduced && !software) spin += dt * 0.045 * (1 - smooth(0, 0.08, p));
    // Keep the spin within half a turn of the target, so the dive always takes
    // the short way round. Shifting both by a full turn changes nothing on screen.
    if (spin > ryTarget + Math.PI) {
      spin -= Math.PI * 2;
      cur.ry -= Math.PI * 2;
    }
    landMat.uniforms.uTime.value = time;
    pinMat.uniforms.uTime.value = time;
    place(Math.min(dt, 0.05), p);
    updateDom(p);
    renderer.render(scene, camera);
    if (!started) {
      started = true;
      stage.classList.add('globe-ready');
    }
  }

  // ---------- loop ----------

  let lastTime = performance.now();
  let slow = 0;
  let fast = 0;
  const tick = () => {
    const now = performance.now();
    const dt = (now - lastTime) / 1000;
    lastTime = now;
    if (!visible) return;
    frame(dt);
    // Adaptive resolution: a second of long frames steps the pixel ratio
    // down, five seconds of smooth ones step it back up.
    if (software || dt > 0.25) return;
    slow = dt > 0.034 ? slow + dt : 0;
    fast = dt < 0.02 ? fast + dt : 0;
    if (slow > 1 && quality > 0.5) {
      quality = Math.max(0.5, quality * 0.75);
      slow = 0;
      resize();
    } else if (fast > 5 && quality < 1) {
      quality = Math.min(1, quality / 0.75);
      fast = 0;
      resize();
    }
  };

  resize();
  // Compile the shaders off the main thread where the browser allows it.
  try {
    await renderer.compileAsync(scene, camera);
  } catch {
    // Older browsers compile on first draw instead.
  }
  frame(0);

  const onResize = () => {
    resize();
    if (reduced) frame(0);
  };
  const onPointer = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    pointerMoved = !software;
  };
  window.addEventListener('resize', onResize);
  // Fonts and images above the fold can change the page's height after load.
  const sizes = new ResizeObserver(measure);
  sizes.observe(document.body);
  window.addEventListener('pointermove', onPointer, { passive: true });

  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    lastTime = performance.now();
  });
  io.observe(section);

  if (!reduced) gsap.ticker.add(tick);

  return {
    destroy() {
      destroyed = true;
      gsap.ticker.remove(tick);
      io.disconnect();
      sizes.disconnect();
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointer);
      scene.traverse((obj) => {
        const mesh = obj as Mesh;
        mesh.geometry?.dispose();
        (mesh.material as ShaderMaterial | undefined)?.dispose?.();
      });
      renderer.dispose();
    },
  };
}
