import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './ShopCompany.css';

class intShopCompany extends React.PureComponent {
 

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

    return (
      <div>
      <h1>
        Компания &laquo;{this.props.products.companyName}&raquo;              
      </h1>
      У нас вы можете приобрести самые лучшие товары для бани и сауны 
      </div>  
    )
    ;

  }

}

const mapStateToProps = (state) => {
  return {
    // весь раздел Redux state под именем counters будет доступен
    // данному компоненту как this.props.counters
    products: state.products,
  };
};

//export default connect(mapStateToProps)(intMobileCompany);
const ShopCompany = connect(mapStateToProps)(intShopCompany);

export default ShopCompany;
