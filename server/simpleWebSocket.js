const WebSocket = require('ws');

const wsPort = 8080;

const wss = new WebSocket.Server({ port: wsPort });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log(`Whole message: ${message}`);
    console.log(`Message type: ${typeof message}`);
    console.log(`Parsed content: ${JSON.parse(message).data}`);
  });

  ws.send('something');
});

console.log(`Listening using WS on port: ${wsPort}`)