import React from 'react';
import PropTypes from 'prop-types';

import { MAP_SELECT_SQUARE } from '../wsActionTypes';

const overlayMap = {
  attackable: 'rgba(255, 0, 0, 0.3)',
  destination: 'rgba(0, 0, 255, 0.3)',
  selected: 'rgba(120, 120, 255, 0.3)',
};

const MapSquare = ({ dispatch, x, y, cell }) => (
  <div
    style={{ gridArea: 'auto', background: '#9a9a9a' }}
    onClick={() => { dispatch(MAP_SELECT_SQUARE, { x, y }); }}
  >
    <div
      style={{
        height: '100%',
        width: '100%',
        background: (
          (cell.state && overlayMap[cell.state])
            ? overlayMap[cell.state]
            : 'transparent'
        ),
      }}
    />
  </div>
);

MapSquare.propTypes = {
  dispatch: PropTypes.func,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  cell: PropTypes.shape({
    state: PropTypes.string,
  }),
};

export default MapSquare;
