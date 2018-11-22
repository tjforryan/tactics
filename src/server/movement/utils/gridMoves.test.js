const { calculateSpacesByDistance } = require('./gridMoves');

describe('calculateSpacesByDistance', () => {
  it('returns coordinates between min/max distance away inclusively (empty grid)', () => {
    const grid = [[]];

    expect(calculateSpacesByDistance(0, 0, 0, 0, grid)).toEqual([]);
  });

  it('returns coordinates between min/max distance away inclusively (empty move)', () => {
    const grid = [['0.0']];

    expect(calculateSpacesByDistance(0, 0, 0, 0, grid)).toEqual([
      { x: 0, y: 0 }
    ]);
  });

  it('returns coordinates between min/max distance away inclusively (adjacent)', () => {
    const grid = [
      ['0.0', '1.0', '2.0'],
      ['0.1', '1.1', '2.1'],
      ['0.2', '1.2', '2.2']
    ];

    expect(calculateSpacesByDistance(1, 1, 1, 1, grid)).toEqual([
      { x: 1, y: 2 },
      { x: 1, y: 0 },
      { x: 2, y: 1 },
      { x: 0, y: 1 }
    ]);
  });

  it('returns coordinates between min/max distance away inclusively (two distances)', () => {
    const grid = [
      ['0.0', '1.0', '2.0'],
      ['0.1', '1.1', '2.1'],
      ['0.2', '1.2', '2.2']
    ];

    expect(calculateSpacesByDistance(1, 1, 0, 1, grid)).toEqual([
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 1, y: 0 },
      { x: 2, y: 1 },
      { x: 0, y: 1 }
    ]);
  });

  it('returns coordinates between min/max distance away inclusively (two steps)', () => {
    const grid = [
      ['0.0', '1.0', '2.0', '3.0', '4.0'],
      ['0.1', '1.1', '2.1', '3.1', '4.1'],
      ['0.2', '1.2', '2.2', '3.2', '4.2'],
      ['0.3', '1.3', '2.3', '3.3', '4.3'],
      ['0.4', '1.4', '2.4', '3.4', '4.4']
    ];

    expect(calculateSpacesByDistance(2, 2, 2, 2, grid)).toEqual([
      { x: 2, y: 4 },
      { x: 2, y: 0 },
      { x: 3, y: 3 },
      { x: 3, y: 1 },
      { x: 1, y: 3 },
      { x: 1, y: 1 },
      { x: 4, y: 2 },
      { x: 0, y: 2 }
    ]);
  });

  it('returns coordinates between min/max distance away inclusively (multiple distances)', () => {
    const grid = [
      ['0.0', '1.0', '2.0', '3.0', '4.0'],
      ['0.1', '1.1', '2.1', '3.1', '4.1'],
      ['0.2', '1.2', '2.2', '3.2', '4.2'],
      ['0.3', '1.3', '2.3', '3.3', '4.3'],
      ['0.4', '1.4', '2.4', '3.4', '4.4']
    ];

    expect(calculateSpacesByDistance(2, 2, 0, 2, grid)).toEqual([
      { x: 2, y: 2 },
      { x: 2, y: 3 },
      { x: 2, y: 1 },
      { x: 3, y: 2 },
      { x: 1, y: 2 },
      { x: 2, y: 4 },
      { x: 2, y: 0 },
      { x: 3, y: 3 },
      { x: 3, y: 1 },
      { x: 1, y: 3 },
      { x: 1, y: 1 },
      { x: 4, y: 2 },
      { x: 0, y: 2 }
    ]);
  });
});
