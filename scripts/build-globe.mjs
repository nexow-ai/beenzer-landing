// Writes public/globe/land.bin: which points of the hero globe's lattices
// (src/lib/lattice.js) are on land.
//
// World points are tested against Natural Earth 1:110m land, the detail
// levels against 1:50m land (both from world-atlas) minus the 1:10m lakes in
// scripts/data/lakes-alps.json, so Lake Geneva shows on the way down. The
// file is a bitmask, one bit per lattice candidate, the world first and then
// each level in order, least significant bit first.
//
// Run with `npm run globe`. The output is committed: the site build never
// runs this script.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { geoBounds, geoContains } from 'd3-geo';
import { feature } from 'topojson-client';
import { LEVELS, TARGET, WORLD_POINTS, arcDegrees, levelPoint, worldPoint } from '../src/lib/lattice.js';

const require = createRequire(import.meta.url);

/** A point test over many polygons that only looks at those whose bounds hold the point. */
function within(geometries) {
  const polygons = [];
  for (const g of geometries) {
    const parts = g.type === 'MultiPolygon' ? g.coordinates : [g.coordinates];
    for (const coordinates of parts) {
      const polygon = { type: 'Polygon', coordinates };
      const [[w, s], [e, n]] = geoBounds(polygon);
      polygons.push({ polygon, w, s, e, n });
    }
  }
  return ([lat, lon]) =>
    polygons.some(({ polygon, w, s, e, n }) => {
      if (lat < s || lat > n) return false;
      // Bounds that cross the antimeridian have w > e.
      if (w <= e ? lon < w || lon > e : lon < w && lon > e) return false;
      return geoContains(polygon, [lon, lat]);
    });
}

function land(name) {
  const topo = JSON.parse(readFileSync(require.resolve(`world-atlas/${name}`), 'utf8'));
  const collection = feature(topo, topo.objects.land);
  return within(collection.features ? collection.features.map((f) => f.geometry) : [collection.geometry]);
}

const onLand110 = land('land-110m.json');
const onLand50 = land('land-50m.json');
const lakes = JSON.parse(readFileSync(new URL('./data/lakes-alps.json', import.meta.url), 'utf8'));
const inLake = within(lakes.features.map((f) => f.geometry));
const target = [TARGET.lat, TARGET.lon];

const total = WORLD_POINTS + LEVELS.reduce((sum, level) => sum + level.rows * level.cols, 0);
const bits = new Uint8Array(Math.ceil(total / 8));
const set = (k) => (bits[k >> 3] |= 1 << (k & 7));
const counts = [0];

for (let i = 0; i < WORLD_POINTS; i++) {
  const point = worldPoint(i);
  // Antarctica reads as a white smear at this density, and the hero never looks at it.
  if (point[0] < -62 || !onLand110(point)) continue;
  set(i);
  counts[0]++;
}

let base = WORLD_POINTS;
for (const level of LEVELS) {
  let count = 0;
  for (let i = 0; i < level.rows * level.cols; i++) {
    const point = levelPoint(level, i);
    if (arcDegrees(target, point) > level.radius || !onLand50(point) || inLake(point)) continue;
    set(base + i);
    count++;
  }
  counts.push(count);
  base += level.rows * level.cols;
}

mkdirSync('public/globe', { recursive: true });
writeFileSync('public/globe/land.bin', bits);
console.log(`dots per level: ${counts.join(', ')}; ${(bits.length / 1024).toFixed(1)} KiB`);
