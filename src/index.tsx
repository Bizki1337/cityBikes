import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from 'core/store/configureStore';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
			<Provider store={configureStore()}>
        <App />
			</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
