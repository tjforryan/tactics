import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import MapSquare from './MapSquare';

const styles = {
  map: {
    backgroundColor: '#000',
    position: 'absolute',
    display: 'grid',
    gridGap: '2px 2px',
    alignItems: 'stretch',
    justifyItems: 'stretch',
    alignContent: 'center',
    justifyContent: 'center',
    gridAutoFlow: 'row'
  }
};

const calculateSquareSize = (
  maxSize,
  numDimensionInterestedIn,
  numOtherDimension
) =>
  (maxSize / Math.max(numDimensionInterestedIn, numOtherDimension)) *
  numDimensionInterestedIn;

const BattleMap = ({ classes, grid, dispatch, maxSize }) => {
  /*
    Below calculates how much space each dimension should occupy.
    It will keep the map ratio and be as big as it can up to <maxMapSize>% in either direction.
  */
  const mapHeight = calculateSquareSize(maxSize, grid.length, grid[0].length);
  const mapWidth = calculateSquareSize(maxSize, grid[0].length, grid.length);

  return (
    <div
      className={classes.map}
      style={{
        height: `${mapHeight}vmin`,
        width: `${mapWidth}vmin`,
        /*
          Below uses the above logic to center the map in the screen.
          I want to find a neater way to do this, but this works at least...
        */
        top: `calc(calc(100vh - ${mapHeight}vmin) / 2)`,
        left: `calc(calc(100vw - ${mapWidth}vmin) / 2)`,
        /* Line below assumes all rows will be the same length */
        gridTemplate: `repeat(${grid.length}, 1fr) / repeat(${
          grid[0].length
        }, 1fr)`
      }}
    >
      {grid.map((row, y) =>
        row.map((cell, x) => (
          <MapSquare
            key={`Row:_${y}_&_Column:_${x}`} // eslint-disable-line react/no-array-index-key
            dispatch={dispatch}
            x={x}
            y={y}
            cell={cell}
          />
        ))
      )}
    </div>
  );
};

BattleMap.propTypes = {
  grid: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        state: PropTypes.string
      })
    )
  ).isRequired,
  classes: PropTypes.shape({
    map: PropTypes.string
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  maxSize: PropTypes.number.isRequired
};

export default withStyles(styles)(BattleMap);
