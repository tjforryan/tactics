import React, { Component } from 'react';
import styled from 'styled-components';

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
      <div className={this.props.clasName}>
        <BattleMap
          grid={tempData}
          maxSize={75}
        />
      </div>
    );
  }
}

export default styled(Battle)`
  width: 100%;
  diplay: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;
