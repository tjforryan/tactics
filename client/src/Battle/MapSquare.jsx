import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { MAP_SELECT_SQUARE } from '../wsActionTypes';

const styles = {
  square: {
    gridArea: 'auto',
    backgroundColor: '#9a9a9a',
  },
  overlay: {
    height: '100%',
  },
};

const overlayMap = {
  attackable: 'rgba(255, 0, 0, 0.3)',
  destination: 'rgba(0, 0, 255, 0.3)',
  selected: 'rgba(120, 120, 255, 0.3)',
};

const MapSquare = ({ classes, dispatch, x, y, cell }) => (
  <div
    role="button"
    className={classes.square}
    onClick={() => { dispatch(MAP_SELECT_SQUARE, { x, y }); }}
  >
    <div
      className={classes.overlay}
      style={{
        backgroundColor: (cell.state && overlayMap[cell.state]) ? overlayMap[cell.state] : 'rgba(0, 0, 0, 0)',
      }}
    />
  </div>
);

MapSquare.propTypes = {
  classes: PropTypes.shape({
    map: PropTypes.string,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  cell: PropTypes.shape({
    state: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(MapSquare);
