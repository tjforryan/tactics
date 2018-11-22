const range = require('lodash/fp/range');
const flatten = require('lodash/fp/flatten');
const uniqBy = require('lodash/fp/uniqBy');

function findMovesByDistance(distance) {
  const xValues = range(0, distance + 1);
  return xValues.map(val => ({ x: val, y: distance - val }));
}

function movesToCoordinates(startX, startY, moves) {
  return uniqBy(
    ({ x, y }) => `${x}|${y}`,
    flatten(
      moves.map(({ x, y }) => [
        { x: startX + x, y: startY + y },
        { x: startX + x, y: startY - y },
        { x: startX - x, y: startY + y },
        { x: startX - x, y: startY - y }
      ])
    )
  );
}

module.exports = {
  findMovesByDistance,
  movesToCoordinates
};
