import React from 'react';
import ReactDOM from 'react-dom';

import IshopBlock from "./ishopBlock";

let priceListArr = require('.././priceList.json'); 

ReactDOM.render(     
<IshopBlock items = {priceListArr} />, 
document.getElementById('container') 
);

  

  
