import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './components/context/UserContext.js'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <UserContextProvider>
          <App />
      </UserContextProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
