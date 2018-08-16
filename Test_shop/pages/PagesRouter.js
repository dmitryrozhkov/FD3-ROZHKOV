import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {default as isoFetch} from 'isomorphic-fetch';


import combinedReducer from '../redux/reducers.js';
import {products_Setdata} from "../redux/productsAC";

import Page_About from './Page_About';
import ShopCompany from '../components/ShopCompany';
import ShopProducts from '../components/ShopProducts';
import ProductsInfo from '../components/ProductsInfo';
import ProductId from '../components/ProductId.js';



let store=createStore(combinedReducer);

class PagesRouter extends React.Component {


  fetchError = (errorMessage) => {
    console.error(errorMessage);
  };

  fetchSuccess = (loadedData) => {
    console.log(loadedData);
    console.log(typeof(loadedData.result));
    let myResponse=JSON.parse(loadedData.result);
    console.log(myResponse);    
    store.dispatch(products_Setdata(myResponse));
  };


  componentDidMount = () => {
    let ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";

    // отдельно создаём набор POST-параметров запроса
    let sp = new URLSearchParams();
    sp.append('f', 'READ');
    sp.append('n', 'ROZHKOV_TEST_SHOP');

    isoFetch(ajaxHandlerScript, { method: 'post', body: sp })
      .then( (response) => { // response - HTTP-ответ
          if (!response.ok) {
              let Err=new Error("fetch error " + response.status);
              Err.userMessage="Ошибка связи";
              throw Err; // дальше по цепочке пойдёт отвергнутый промис
          }
          else
              return response.json(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
      })
      .then( (data) => {
          try {
              this.fetchSuccess(data); // передаём полезные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
          }
          catch ( error ){
              this.fetchError(error.message); // если что-то пошло не так - дальше по цепочке пойдёт отвергнутый промис
          }
      })
      .catch( (error) => {
          this.fetchError(error.userMessage||error.message);
      });
  };
          
  render() {    

   return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={Page_About} />         
          <Route path="/company" component={ShopCompany} />          
          <Route path="/products" component={ShopProducts} />
          <Route path="/product/:category" component={ProductsInfo} />         
          <Route path="/category/:categorynum/:productid" component={ProductId} />
        </div>
      </Provider>
    );
    
  }

}

export default PagesRouter;
    

















