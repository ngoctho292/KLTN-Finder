import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, } from 'react-router-dom'
<<<<<<< HEAD
import reduxConfig from './redux';
import { Provider } from 'react-redux';

const store = reduxConfig()
=======

>>>>>>> 2e5ab6911817722c5fc5b5f77742ebac528c557e
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter><App /></BrowserRouter>
);

