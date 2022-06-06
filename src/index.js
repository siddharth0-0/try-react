import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FavoritiesContextProvider } from './store/favorities-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoritiesContextProvider>
    <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
  </FavoritiesContextProvider>
);
