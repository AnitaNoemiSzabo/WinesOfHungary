import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WinePage from './components/WinePage';
import RegionPage from './components/RegionPage';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <RegionPage/>
    <WinePage/>
  </React.StrictMode>,
  document.getElementById('root')
);


