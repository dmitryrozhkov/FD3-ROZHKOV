import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import chunks from 'array.chunk';
import { NavLink } from 'react-router-dom';

import './ProductId.css';

class intProductId extends React.PureComponent {

  render() {

    if (this.props.products.dataStatus!==1)
    return (
    <div id="floatingCirclesG">
      <div className="f_circleG" id="frotateG_01"></div>
      <div className="f_circleG" id="frotateG_02"></div>
      <div className="f_circleG" id="frotateG_03"></div>
      <div className="f_circleG" id="frotateG_04"></div>
      <div className="f_circleG" id="frotateG_05"></div>
      <div className="f_circleG" id="frotateG_06"></div>
      <div className="f_circleG" id="frotateG_07"></div>
      <div className="f_circleG" id="frotateG_08"></div>
    </div>
    )    
    
    let categoryId=parseInt(this.props.match.params.categorynum);
    console.log (categoryId)
    let productId=parseInt(this.props.match.params.productid);
    console.log (productId)
   
    let ProductData=this.props.products.items.find( c => c.code==categoryId );
    console.log (ProductData)
    let productsChunkArr = chunks(ProductData.products, 10)
    console.log (productsChunkArr)

    let myArr=productsChunkArr.find( (c,i) => (i+1)==productId );
    console.log (myArr)

    let productCategiry=chunks(ProductData.products, 10).map ( (product, i) =>
    <NavLink to={"/category"+ '/'+ProductData.code + '/' + (i+1)} className="NavigatorLink" key={i}>{i+1}</NavLink>
)

    return (
        <div> 
           
      <div>      
        {productCategiry}
      </div>
        <table border="1">
          <tbody>
            <tr>  
              <td>№</td>            
              <td>Наименование</td>
              <td>Цена</td>
              <td>Количество</td>             
              <td>Кнопки</td>                 
            </tr> 


             { myArr.map ((product, i) =>
                <tr key={i}>  
                <td> {i+1}</td>                                           
                <td> {product.name}</td>
                <td> {product.price} </td>                
                <td> {product.quantity}</td>               
                <td>
                    <button>Редактировать</button>
                    <button>Удалить</button>
                </td>                                             
                                                
                </tr>                              
            )}
         
          </tbody>
        </table>
        </div>
    )
    ;

  }

}

const mapStateToProps = (state) => {
  console.log (state)
    return {
      // весь раздел Redux state под именем products будет доступен
      // данному компоненту как this.props.products
      products: state.products,      
    };
  };  
  
const ProductId = connect(mapStateToProps)(intProductId);  
 
export default ProductId;

