// The point lattices the hero globe is drawn from. Shared by
// scripts/build-globe.mjs, which decides which points are land, and the page,
// which turns the land mask back into positions. Both sides walk the same
// fixed-size grids in the same order, so one bit per candidate is enough.
//
// Five levels of detail, each about 2.6 times finer and smaller than the
// last, so the map resolves evenly as the camera comes down: the world,
// Europe, the Alps, western Switzerland, and the shore of Lake Geneva where
// the dive ends.

/**
 * Where the scroll dive ends: BEENZER #18, minted in Savigny, Switzerland, on
 * 2023-02-16 (its Arweave metadata, read 2026-10-20). Rounded to two decimals,
 * about 1 km, which is the post's own visibility radius: the exact point is
 * someone's room.
 */
export const TARGET = { lat: 46.54, lon: 6.72 };

/** Fibonacci lattice over the whole sphere. */
export const WORLD_POINTS = 90_000;

/** Hex grids in caps around TARGET: [radius, step] in degrees. */
export const LEVELS = [
  { radius: 25, step: 0.26 },
  { radius: 7.5, step: 0.1 },
  { radius: 2.6, step: 0.04 },
  { radius: 1, step: 0.016 },
].map(({ radius, step }) => ({
  radius,
  step,
  rows: 2 * Math.ceil((radius * 2) / step) + 1,
  cols: 2 * Math.ceil((radius / step) * 1.08) + 1,
}));

const GOLDEN = Math.PI * (3 - Math.sqrt(5));
const RAD = Math.PI / 180;

/**
 * Latitude and longitude, in degrees, of world point `i`.
 * @param {number} i
 * @returns {[number, number]}
 */
export function worldPoint(i) {
  const y = 1 - (i / (WORLD_POINTS - 1)) * 2;
  const lat = Math.asin(y) / RAD;
  let lon = ((i * GOLDEN) % (2 * Math.PI)) / RAD;
  if (lon > 180) lon -= 360;
  return [lat, lon];
}

/**
 * Latitude and longitude, in degrees, of point `i` (row-major) of a detail level.
 * @param {{ step: number, rows: number, cols: number }} level
 * @param {number} i
 * @returns {[number, number]}
 */
export function levelPoint(level, i) {
  const r = Math.floor(i / level.cols) - (level.rows - 1) / 2;
  const c = (i % level.cols) - (level.cols - 1) / 2;
  const lat = TARGET.lat + r * level.step * 0.866;
  // Keep the spacing even on the ground: longitude steps widen with latitude.
  const lonStep = level.step / Math.cos(lat * RAD);
  const shift = (r & 1) * lonStep * 0.5;
  return [lat, TARGET.lon + c * lonStep + shift];
}

/**
 * Great-circle distance between two [lat, lon] points, in degrees.
 * @param {[number, number]} a
 * @param {[number, number]} b
 * @returns {number}
 */
export function arcDegrees([lat1, lon1], [lat2, lon2]) {
  const a =
    Math.sin(((lat2 - lat1) * RAD) / 2) ** 2 +
    Math.cos(lat1 * RAD) * Math.cos(lat2 * RAD) * Math.sin(((lon2 - lon1) * RAD) / 2) ** 2;
  return (2 * Math.asin(Math.min(1, Math.sqrt(a)))) / RAD;
}
