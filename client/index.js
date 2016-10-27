import 'babel-polyfill';
import React                                    from 'react';
import { render }                               from 'react-dom';
import App                                      from './containers/App';

// Boot up the application
//
// Nothing here yet
import './styles/main.less';

render(
  <App/>
  ,
  document.getElementById('appBootElement')
);
