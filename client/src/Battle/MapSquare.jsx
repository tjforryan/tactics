import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { MAP_SELECT_SQUARE } from '../wsActionTypes'; 
  
const MapSquare = ({ className, dispatch, x, y }) => (
  <div
    className={className}
    onClick={() => { dispatch(MAP_SELECT_SQUARE, { x, y }) }}
  >
    <div className="overlay" />
  </div>
);

MapSquare.propTypes = {
  className: PropTypes.string.isRequired,
};

const overlayMap = {
  attackable: 'rgba(255, 0, 0, 0.3)',
  destination: 'rgba(0, 0, 255, 0.3)',
  selected: 'rgba(120, 120, 255, 0.3)',
};

export default styled(MapSquare)`
  grid-area: auto;
  background-color:#9a9a9a;
  .overlay {
    height: 100%;
    background-color: ${
      ({ cell }) => (cell.state && overlayMap[cell.state] ? overlayMap[cell.state] : 'rgba(0, 0, 0, 0)')
    };
  }
`;
