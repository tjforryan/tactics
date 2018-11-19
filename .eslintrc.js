module.exports = {
extends: 'airbnb',
  rules: {
    'no-console': [2, { 'allow': ['info', 'error'] }],
    "object-curly-newline": ["error", { "consistent": true }],
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/interactive-supports-focus": 0,
  },
  globals: {
    WebSocket: true, // On the client it is native
    it: true, // In the Jest tests
    document: true,
  }
};