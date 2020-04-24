import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

//https://docs.google.com/document/d/1cJrFlpiC-vUOLYGzGzFe6C6bQYuwEDauEgftfLWf0j8/edit

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
