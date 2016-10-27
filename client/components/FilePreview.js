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
    console.log(size);
    if (size > (1024 * 1024 * 1024)) {
      return `${Math.ceil(size / (1024 * 1024 * 1024))}GB`;
    }
    else if (Math.ceil(size > (1024 * 1024))) {
      return `${Math.ceil(size / (1024 * 1024))}MB`;
    }
    else if (Math.ceil(size > 1024)) {
      return `${Math.ceil(size / 1024)}KB`;
    }
    else {
      return `${size}Bytes`;
    }
  }

  render() {
    return (
      <div className={`file-preview ${this.props.showPreview ? 'full-screen' : ''}`}>
        <span className={'file-icon fa fa-file-image-o fa-3x'} />
        <span className={'file-details'}>
          <h1>{this.props.contentType}</h1>
          <div>
            <a href={this.props.url} download>{this.props.name}</a>
            <span>{this.generateSizeString(this.props.size)}</span>
          </div>
        </span>
        <div className={'hover-overlay'}>
          <span className={'file-icon fa fa-eye fa-2x'} />
          <a href={this.props.url} download className={'file-icon fa fa-download fa-2x'} />
        </div>
      </div>
    );
  }


}

export default FilePreview;
