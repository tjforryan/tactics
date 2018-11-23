import React from 'react';
import ReactDOM from 'react-dom';
import MapSquare from './MapSquare';

const MIN_PROPS = { cell: {}, x: 1, y: 1 };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MapSquare {...MIN_PROPS} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
