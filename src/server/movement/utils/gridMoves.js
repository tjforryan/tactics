const has = require('lodash/fp/has');
const range = require('lodash/fp/range');
const flatten = require('lodash/fp/flatten');

const { findMovesByDistance, movesToCoordinates } = require('./moves');

function calculateSpacesByDistance(
  startX,
  startY,
  minDistance,
  maxDistance,
  grid
) {
  const distances = range(minDistance, maxDistance + 1);
  const moves = flatten(distances.map(findMovesByDistance));
  const unvalidatedCoordinates = movesToCoordinates(startX, startY, moves);
  return unvalidatedCoordinates.filter(({ x, y }) => has(`[${y}][${x}]`, grid));
}

module.exports = {
  calculateSpacesByDistance
};
