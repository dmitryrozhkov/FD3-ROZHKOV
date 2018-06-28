import React from 'react';
import ReactDOM from 'react-dom';

import App from "./app";

var sameText =
 "- Скажи-ка, дядя, ведь не даром <br/>\
Москва, спаленная пожаром,\
<br/>Французу отдана?<br/>Ведь были ж схватки боевые,<br/>\
Да, говорят, еще какие!<br/>\
Недаром помнит вся Россия<br/>\
Про день Бородина!"

ReactDOM.render(
<App text={sameText} />,
document.getElementById('container') 
);