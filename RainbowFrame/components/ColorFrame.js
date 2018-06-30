import React from 'react';
import PropTypes from 'prop-types';

class ColorFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired,
  };  
  
  render() {    
    var colors = this.props.colors
    var code = this.props.children
  
      
      for (var i=0; i<colors.length; i++) {
      
          code = <div key = {i} style={{border:"dashed 1.5px "+colors[i],padding:"6px"}}>
          {code}                
          </div>         
      }       
      return code
    
  }

}

export default ColorFrame;
