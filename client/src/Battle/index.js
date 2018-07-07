import React, { Component } from 'react';
import styled from 'styled-components';

import BattleMap from './BattleMap';

const tempData = [
  [
    {},
    {},
    {},
    {},
    {},
  ],
  [
    {
      state: 'attackable',
    },
    {
      state: 'destination',
    },
    {
      heroImage: 'sirHector.jpg', 
      state: 'selected',
    },
    {
      state: 'destination',
    },
    {
      state: 'attackable',
    },
  ],
  [
    {},
    {},
    {},
    {},
    {},
  ],
  [
    {},
    {},
    {},
    {},
    {},
  ],
  [
    {},
    {},
    {},
    {},
    {},
  ],
];

class Battle extends Component {
  render() {
    // TODO: Surrounding UI
    return (
      <div>
        <BattleMap
          grid={tempData}
          maxSize={75}
        />
      </div>
    );
  }
}

export default Battle;
