import React from 'react';
import ReactDOM from 'react-dom';
import MapSquare from './MapSquare';

const MIN_PROPS = { cell: {} };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MapSquare {...MIN_PROPS} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
