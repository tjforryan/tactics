import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MapSquare from './MapSquare';

const BattleMap = ({ className, grid }) => (
  <div className={className}>
    {
      grid.map((row, i) => (
        row.map((cell, j) => (
          <MapSquare
            key={`Row:_${i}_&_Column:_${j}`} // eslint-disable-line react/no-array-index-key
            cell={cell}
          />
        ))
      ))
    }
  </div>
);

BattleMap.propTypes = {
  className: PropTypes.string.isRequired,
  grid: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        state: PropTypes.string,
      }),
    ),
  ).isRequired,
};

const calculateSquareSize = (maxSize, numDimensionInterestedIn, numOtherDimension) => (
  maxSize / Math.max(numDimensionInterestedIn, numOtherDimension) * numDimensionInterestedIn
);

export default styled(BattleMap)`
  background-color: #000;

  position: absolute;

  /*
    Below calculates how much space each dimension should occupy.
    It will keep the map ratio and be as big as it can up to <maxMapSize>% in either direction.
  */
  height: ${({ maxSize, grid }) => calculateSquareSize(maxSize, grid.length, grid[0].length)}vmin;
  width: ${({ maxSize, grid }) => calculateSquareSize(maxSize, grid[0].length, grid.length)}vmin;

  /*
    Below uses the above logic to center the map in the screen.
    I want to find a neater way to do this, but this works at least...
  */
  top:  calc(calc(100vh - ${({ maxSize, grid }) => calculateSquareSize(maxSize, grid.length, grid[0].length)}vmin) / 2);
  left: calc(calc(100vw - ${({ maxSize, grid }) => calculateSquareSize(maxSize, grid[0].length, grid.length)}vmin) / 2);

  display: grid;
  grid-gap: 2px 2px;
  /* Line below assumes all rows will be the same length */
  grid-template: repeat(${({ grid }) => grid.length}, 1fr) / repeat(${({ grid }) => grid[0].length}, 1fr);
  align-items: stretch;
  justify-items: stretch;
  align-content: center;
  justify-content: center;
  grid-auto-flow: row;
`;
