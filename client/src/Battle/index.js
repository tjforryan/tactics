import React, { Component } from 'react';
import BattleMap from './BattleMap';

const tempData = [
  [
    { something: 'meaningful' },
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
          <BattleMap grid={tempData}/>
        </div>
      );
    }
  }

export default Battle;
