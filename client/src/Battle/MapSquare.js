import React, { Component } from 'react';
import styled from 'styled-components';

class MapSquare extends Component {
    render() {
      return (
        <div className={this.props.className}>
        </div>
      );
    }
  }

export default styled(MapSquare)`
  grid-area: auto;
  background-color:#9a9a9a;
`;