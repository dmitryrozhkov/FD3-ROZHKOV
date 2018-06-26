import React from 'react';
import ReactDOM from 'react-dom';

import App from "./app";

var sameText = "Скажи-ка,<br />дядя, <br /> ведь недаром..."


ReactDOM.render(
    <App>{sameText}</App>,
document.getElementById('container') 
);