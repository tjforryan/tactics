import React, { Component } from 'react';

import BattleMap from './BattleMap';

class Battle extends Component {
  constructor() {
    super();
    this.state = { map: null };
  }

  componentDidMount() {
    const socket = new WebSocket('ws://localhost:8080');
    socket.addEventListener('message', (event) => {
      try {
        const mapData = JSON.parse(event.data);

        console.info('Recieved map data: ', mapData);
        this.setState({
          map: mapData,
        });
      } catch (e) {
        console.error('Could not read map data!');
      }
    });
  }

  render() {
    // TODO: Surrounding UI
    const { map } = this.state;

    return (
      <div>
        {
          map
            ? (
              <BattleMap
                grid={map}
                maxSize={75}
              />
            )
            : 'Waiting for map data...'
        }
      </div>
    );
  }
}

export default Battle;
