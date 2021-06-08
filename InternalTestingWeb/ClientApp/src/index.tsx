import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App/App';
import { ProfileContextProvider } from './contexts/profileContext';

ReactDOM.hydrate(
  <React.StrictMode>
    <ProfileContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProfileContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
