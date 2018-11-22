const WebSocket = require('ws');
const set = require('lodash/fp/set');

const { meleeMovement } = require('./movement/movement');

const { MAP_SELECT_SQUARE } = require('../wsActionTypes');

const wsPort = 8080;

const wss = new WebSocket.Server({ port: wsPort });

const tempData = [
  [{}, {}, {}, {}, {}],
  [
    {
      state: 'attackable'
    },
    {
      state: 'destination'
    },
    {
      heroImage: 'sirHector.jpg',
      state: 'selected'
    },
    {
      state: 'destination'
    },
    {
      state: 'attackable'
    }
  ],
  [{}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}]
];

const dispatchClient = ws => data => {
  ws.send(JSON.stringify(data));
};

const selectSquare = (dispatch, { x, y }) => {
  console.info();
  console.info(`SQUARE SELECTED! x:${x}, y:${y}`);
  console.info();

  dispatch(set(`[${y}][${x}].state`, 'selected', tempData));
  // meleeMovement(x, y, 2, tempData);
};

const actionMap = {
  [MAP_SELECT_SQUARE]: selectSquare
};

wss.on('connection', ws => {
  const dispatch = dispatchClient(ws);

  ws.on('message', message => {
    try {
      const receivedData = JSON.parse(message);
      const action = actionMap[receivedData.type];
      action(dispatch, receivedData.payLoad);
    } catch (e) {
      console.error('Errored with: ', e);
      ws.close(1003, 'Received data not supported!');
    }
  });

  dispatch(tempData);
});

console.info(`Listening using WS on port: ${wsPort}`);
