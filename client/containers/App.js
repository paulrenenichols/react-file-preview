// core modules
import React, { Component }   from 'react';
import fetch                  from 'isomorphic-fetch';

import FilePreview            from '../components/FilePreview';

class App extends Component {

  state = {
    files: [],
    showPreview: false,
    previewUrl: ''
  }

  constructor() {
    super();
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

  previewStyles() {
    return {
      background: `url("${this.state.previewUrl}") no-repeat center/70%`
    };
  }

  showPreview = (previewUrl) => {
    this.setState({
      previewUrl,
      showPreview: true
    });
  }

  hidePreview = () => {
    this.setState({
      previewUrl: '',
      showPreview: false
    });
  }

  render() {
    const showPreview = this.showPreview;
    return (
      <div className={'appContainer'}>
        {this.state.files.map(function (fileInfo) {
          return <FilePreview {...fileInfo} key={fileInfo.url} showPreview={showPreview} />;
        })}
        <div id={'preview'} style={this.previewStyles()} className={`${this.state.showPreview ? 'preview-active' : ''}`}>
          <div onClick={this.hidePreview}>X</div>
        </div>
      </div>
    );
  }


}

export default App;
