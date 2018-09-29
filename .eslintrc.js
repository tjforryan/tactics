module.exports = {
extends: 'airbnb',
  rules: {
    'no-console': [2, { 'allow': ['info', 'error'] }],
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/require-default-props': 0,
    'object-curly-newline': ['error', { consistent: true }],
  },
  globals: {
    WebSocket: true, // On the client it is native
    it: true, // In the Jest tests
    document: true,
  },
};