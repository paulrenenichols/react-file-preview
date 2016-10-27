// core modules
import React, { Component }   from 'react';
import fetch                  from 'isomorphic-fetch';

import FilePreview            from '../components/FilePreview';

class App extends Component {

  constructor() {
    super();
    this.state = {
      files: []
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
        {this.state.files.map(function (fileInfo) {
          return <FilePreview {...fileInfo} />;
        })}
      </div>
    );
  }


}

export default App;
