import React, { Component } from 'react';

import dispatchToSocket from '../actions/dispatchToSocket';
import BattleMap from './BattleMap';

class Battle extends Component {
  constructor() {
    super();
    this.state = {
      map: null,
      dispatch: null
    };
  }

  componentDidMount() {
    const socket = new WebSocket('ws://localhost:8080');

    socket.addEventListener('message', event => {
      try {
        const mapData = JSON.parse(event.data);

        console.info('Received map data: ', mapData);
        this.setState({
          map: mapData
        });
      } catch (e) {
        console.error('Could not read map data!');
      }

      this.setState({
        dispatch: dispatchToSocket(socket)
      });
    });
  }

  render() {
    // TODO: Surrounding UI
    const { map, dispatch } = this.state;

    return (
      <div>
        {map ? (
          <BattleMap dispatch={dispatch} grid={map} maxSize={75} />
        ) : (
          'Waiting for map data...'
        )}
      </div>
    );
  }
}

export default Battle;
