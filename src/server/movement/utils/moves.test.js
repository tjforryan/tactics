const { findMovesByDistance, movesToCoordinates } = require('./moves');

describe('findMovesByDistance', () => {
  it('returns an array of x and y pairs of integers that sum to the received distance (0)', () => {
    expect(findMovesByDistance(0)).toEqual([{ x: 0, y: 0 }]);
  });

  it('returns an array of x and y pairs of integers that sum to the received distance (1)', () => {
    expect(findMovesByDistance(1)).toEqual([{ x: 0, y: 1 }, { x: 1, y: 0 }]);
  });

  it('returns an array of x and y pairs of integers that sum to the received distance (5)', () => {
    expect(findMovesByDistance(5)).toEqual([
      { x: 0, y: 5 },
      { x: 1, y: 4 },
      { x: 2, y: 3 },
      { x: 3, y: 2 },
      { x: 4, y: 1 },
      { x: 5, y: 0 }
    ]);
  });
});

describe('movesToCoordinates', () => {
  it('returns de-duped array of coordinates: new positions from distances travelled in each axis (no move)', () => {
    expect(movesToCoordinates(3, 3, [])).toEqual([]);
  });

  it('returns de-duped array of coordinates: new positions from distances travelled in each axis (empty move)', () => {
    expect(movesToCoordinates(3, 3, [{ x: 0, y: 0 }])).toEqual([
      { x: 3, y: 3 }
    ]);
  });

  it('returns de-duped array of coordinates: new positions from distances travelled in each axis (one move)', () => {
    expect(movesToCoordinates(3, 3, [{ x: 1, y: 2 }])).toEqual([
      { x: 4, y: 5 },
      { x: 4, y: 1 },
      { x: 2, y: 5 },
      { x: 2, y: 1 }
    ]);
  });

  it('returns de-duped array of coordinates: new positions from distances travelled in each axis (negative)', () => {
    expect(movesToCoordinates(3, 1, [{ x: 1, y: 2 }])).toEqual([
      { x: 4, y: 3 },
      { x: 4, y: -1 },
      { x: 2, y: 3 },
      { x: 2, y: -1 }
    ]);
  });

  it('returns de-duped array of coordinates: new positions from distances travelled in each axis (multiple moves)', () => {
    expect(movesToCoordinates(3, 3, [{ x: 1, y: 2 }, { x: 2, y: 1 }])).toEqual([
      { x: 4, y: 5 },
      { x: 4, y: 1 },
      { x: 2, y: 5 },
      { x: 2, y: 1 },
      { x: 5, y: 4 },
      { x: 5, y: 2 },
      { x: 1, y: 4 },
      { x: 1, y: 2 }
    ]);
  });
});
