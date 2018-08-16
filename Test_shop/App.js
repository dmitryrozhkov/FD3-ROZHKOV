"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import PagesRouter from './pages/PagesRouter';
import PagesLinks from './pages/PagesLinks';
import './App.css'; 

ReactDOM.render( 
  <BrowserRouter>
    <div className='Wrapper'>
      <PagesLinks />
      <PagesRouter />
    </div>
  </BrowserRouter>
, document.getElementById('container') );