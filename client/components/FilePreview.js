// core modules
import React, { Component,
                PropTypes }   from 'react';

class FilePreview extends Component {

  static propTypes = {
    contentType:  PropTypes.string,
    url:          PropTypes.string,
    name:         PropTypes.string,
    size:         PropTypes.number,
    showPreview:  PropTypes.bool,
  };

  static defaultProps = {
    contentType:  '',
    url:          '',
    name:         '',
    size:         0,
    showPreview:  false
  };

  constructor() {
    super();
  }

  generateSizeString(size) {
    if (size > (1024 ^ 3)) {
      return `${Math.ceil(size / (1024 ^ 3))}GB`;
    }
    else if (Math.ceil(size > (1024 ^ 2))) {
      return `${size / (1024 ^ 2)}MB`;
    }
    else if (Math.ceil(size > 1024)) {
      return `${size / 1024}KB`;
    }
    else {
      return `${size}Bytes`;
    }
  }

  render() {
    return (
      <div className={`file-preview ${this.props.showPreview ? 'full-screen' : ''}`}>
        <h1>{this.props.contentType}</h1>
        <div>
          <a key={this.props.url} href={this.props.url} download>{this.props.url}</a>
          <span>{this.generateSizeString(this.props.size)}</span>
        </div>
      </div>
    );
  }


}

export default FilePreview;
