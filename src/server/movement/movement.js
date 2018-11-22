const set = require('lodash/fp/set');

const { calculateSpacesByDistance } = require('./utils/gridMoves');

function meleeMovement(x, y, moveDistance, grid) {
  const gridWithSelected = set(`[${y}][${x}].state`, 'selected', grid);

  const moveableCoordinates = calculateSpacesByDistance(
    x,
    y,
    0,
    moveDistance,
    gridWithSelected
  );

  console.log('Moveable Coordinates => ', moveableCoordinates);
}

module.exports = {
  meleeMovement
};
