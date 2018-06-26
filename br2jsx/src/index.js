import React from 'react';
import ReactDOM from 'react-dom';

import App from "./app";


ReactDOM.render(
<App text={<h2>- Скажи-ка, дядя, ведь не даром <br/>
Москва, спаленная пожаром,<br/>
Французу отдана?<br/>
Ведь были ж схватки боевые,<br/>
Да, говорят, еще какие!<br/>
Недаром помнит вся Россия<br/>
Про день Бородина!</h2>} />,
document.getElementById('container') 
);