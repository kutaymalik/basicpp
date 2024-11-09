// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; // Provider'ı ekliyoruz
import { store } from './store/store';  // store'u ekliyoruz

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* App bileşenini Provider ile sarıyoruz */}
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
