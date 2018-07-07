import React, { Component } from 'react';
import styled from 'styled-components';

class MapSquare extends Component {
    render() {
      return (
        <div className={this.props.className}>
          <div className={'overlay'}/>
        </div>
      );
    }
  }

const overlayMap = {
  attackable: 'rgba(255, 0, 0, 0.3)',
  destination: 'rgba(0, 0, 255, 0.3)',
  selected: 'rgba(120, 120, 255, 0.3)',
}

export default styled(MapSquare)`
  grid-area: auto;
  background-color:#9a9a9a;
  .overlay {
    height: 100%;
    background-color: ${props => props.cell.state ? overlayMap[props.cell.state] : 'rgba(0, 0, 0, 0)'};
  }
`;