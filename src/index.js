import React from 'react';
import ReactDOM from 'react-dom';
// App
import App from './App';
// Styles
import GlobalStyle from './Global.style'

ReactDOM.render(
  <React.StrictMode>
    <App />
      <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('app')
);

