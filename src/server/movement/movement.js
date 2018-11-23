const set = require('lodash/fp/set');
const cloneDeep = require('lodash/cloneDeep');

const { calculateSpacesByDistance } = require('./utils/gridMoves');

function meleeMovement(x, y, moveDistance, grid) {
  const moveableCoordinates = calculateSpacesByDistance(
    x,
    y,
    0,
    moveDistance,
    grid
  );

  const gridWithMoveable = moveableCoordinates.reduce(
    (currentGrid, { x, y }) => {
      const gridClone = cloneDeep(currentGrid);
      gridClone[y][x].state = 'destination';
      return gridClone;
    },
    grid
  );

  return set(`[${y}][${x}].state`, 'selected', gridWithMoveable);
}

module.exports = {
  meleeMovement
};
