import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      fio: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  state = {
    info: this.props.info,
  };

  componentWillReceiveProps = (newProps) => {    
    this.setState({info:newProps.info});
  };

  render() {

    console.log("MobileClient id="+this.state.info.id+" render");
    let countColor = this.props.color?"red":"black";    
    return (
      <div className='MobileClient'>
        <span className='MobileClientBalance' style={{color:countColor}}>{this.state.info.balance}</span>
        <span className='MobileClientFIO' style={{color:countColor}}>{this.state.info.fio}</span>        
      </div>
    );

  }

}

export default MobileClient;

 
