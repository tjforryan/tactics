module.exports = {
extends: 'airbnb',
  rules: {
    'no-console': [2, { 'allow': ['info', 'error'] }],
  },
  globals: {
    WebSocket: true, // On the client it is native
    it: true, // In the Jest tests
    document: true,
  }
};