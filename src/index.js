import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/mdb.min.css';
import './index.css';
import App from './components/App';
import NavBar from './components/Navbar'
import HoverFX from './components/HoverFX'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <NavBar />
    <App />
    <HoverFX />
    </>
);