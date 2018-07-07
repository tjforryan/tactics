import React, { Component } from 'react';
import MapSquare from './MapSquare';
import styled from 'styled-components';

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

const maxMapSize = 75;

const calculateSquareSize = (maxSize, numColumns, numRows) => maxSize / Math.max(numColumns, numRows)

export default styled(BattleMap)`
  background-color: red;
  height: ${props => calculateSquareSize(maxMapSize, props.grid[0].length, props.grid.length) * props.grid.length}vmin;
  width: ${props => calculateSquareSize(maxMapSize, props.grid[0].length, props.grid.length) * props.grid[0].length}vmin;
  display: grid;
  grid-gap: 2px 2px;
  /* Line below assumes all rows will be the same length */
  grid-template: repeat(${props => props.grid.length}, 1fr) / repeat(${props => props.grid[0].length}, 1fr);
  align-items: stretch;
  justify-items: stretch;
  align-content: center;
  justify-content: center;
  grid-auto-flow: column;
`;
