import React from 'react';
import ReactDOM from 'react-dom';

import ProductsGrid from "./ProductsGrid";

let priceListArr = require('.././priceList.json'); 

ReactDOM.render(     
<ProductsGrid startProducts = {priceListArr}
              startCardWorkMode={0}             
/>, 
document.getElementById('container') 
);

  

  
