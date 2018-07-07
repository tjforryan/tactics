const WebSocket = require('ws');

const wsPort = 8080;

const wss = new WebSocket.Server({ port: wsPort });

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

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    try {
      const receivedData = JSON.parse(message).data;
      console.log(`Parsed content: ${receivedData}`);
      ws.send(JSON.stringify({ something: 'new' }));
    } catch (e) {
      console.log('Errored with: ', e)
      ws.close(1003, 'Received data not supported!');
    }
  });

  ws.send(JSON.stringify(tempData));
});

console.log(`Listening using WS on port: ${wsPort}`)