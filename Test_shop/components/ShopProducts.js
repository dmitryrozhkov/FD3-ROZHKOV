import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

import './ShopProducts.css';

class intShopProducts extends React.PureComponent {

  
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
    
    let productCategiry=this.props.products.items.map( (product, i) =>
    <NavLink to={"/product/"+product.code} className="PageLinkCategory" key={i}>{product.category}</NavLink>    
    );
    
    return (
      <div className='ProductsCategory'>      
        {productCategiry}
      </div>
    );

  }

}

const mapStateToProps = (state) => {
  return {
    // весь раздел Redux state под именем counters будет доступен
    // данному компоненту как this.props.products
    products: state.products,
  };
};

const ShopProducts = connect(mapStateToProps)(intShopProducts);

export default ShopProducts;