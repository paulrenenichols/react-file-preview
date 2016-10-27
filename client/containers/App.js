// core modules
import React, { Component }   from 'react';
import fetch                  from 'isomorphic-fetch';

class App extends Component {

  constructor() {
    super();
    this.state = {
      files: {}
    };
  }

  componentDidMount() {
    var boundSetState = (obj) => { this.setState(obj); };
    fetch('/api/files')
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(function(files) {
        boundSetState({ files });
      });
  }

  render() {
    return (
      <div className={'appContainer'}>
        {JSON.stringify(this.state.files, null, 2)}
      </div>
    );
  }


}

export default App;
