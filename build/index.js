import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import 'core-js';
import MyComponent from '../site/index'

ReactDOM.render(
  <MyComponent />,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('../app/index', () => {
    window.location.reload();
    // ReactDOM.render(
    //   <MyComponent />,
    //   document.getElementById('app')
    // )
  });
}