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

  const attackableCoordinates = calculateSpacesByDistance(
    x,
    y,
    moveDistance + 1,
    moveDistance + 1,
    grid
  );

  const gridWithAttackable = attackableCoordinates.reduce(
    (currentGrid, { x, y }) => {
      const gridClone = cloneDeep(currentGrid);
      gridClone[y][x].state = 'attackable';
      return gridClone;
    },
    gridWithMoveable
  );

  return set(`[${y}][${x}].state`, 'selected', gridWithAttackable);
}

module.exports = {
  meleeMovement
};
