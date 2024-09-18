import React from 'react';
import ReactDOM from 'react-dom/client'; // Usando a API do React 18
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

// Cria a raiz com React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
