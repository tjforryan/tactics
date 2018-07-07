import React, { Component } from 'react';
import styled from 'styled-components';

import MapSquare from './MapSquare';

class BattleMap extends Component {
    render() {
      return (
        <div className={this.props.className}>
          {
            this.props.grid.map((row, i) =>
              row.map((cell, j) => 
                <MapSquare
                  key={`Row:_${i}_&_Column:_${j}`}
                  cell={cell}
                />
              )
            )
          }
        </div>
      );
    }
  }

const calculateSquareSize = (maxSize, numDimensionInterestedIn, numOtherDimension) =>
  maxSize / Math.max(numDimensionInterestedIn, numOtherDimension) * numDimensionInterestedIn

export default styled(BattleMap)`
  background-color: #000;

  position: absolute;

  /*
    Below calculates how much space each dimension should occupy.
    It will keep the map ratio and be as big as it can up to <maxMapSize>% in either direction.
  */
  height: ${props => calculateSquareSize(props.maxSize, props.grid.length, props.grid[0].length)}vmin;
  width: ${props => calculateSquareSize(props.maxSize, props.grid[0].length, props.grid.length)}vmin;

  /*
    Below uses the above logic to center the map in the screen.
    I want to find a neater way to do this, but this works at least...
  */
  top:  calc(calc(100vh - ${props => calculateSquareSize(props.maxSize, props.grid.length, props.grid[0].length)}vmin) / 2);
  left: calc(calc(100vw - ${props => calculateSquareSize(props.maxSize, props.grid[0].length, props.grid.length)}vmin) / 2);

  display: grid;
  grid-gap: 2px 2px;
  /* Line below assumes all rows will be the same length */
  grid-template: repeat(${props => props.grid.length}, 1fr) / repeat(${props => props.grid[0].length}, 1fr);
  align-items: stretch;
  justify-items: stretch;
  align-content: center;
  justify-content: center;
  grid-auto-flow: row;
`;
