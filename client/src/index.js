import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Battle from './Battle';

class App extends Component {
  render() {
    // TODO: Routing
    return (
      <div className="App">
        <Battle />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
