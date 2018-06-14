import React from 'react';

import './itemRow.css';

class ItemRow extends React.Component {
    constructor (props) {
      super (props);
      this.state ={
                   class: 'off',
                   goods: this.props.item};      
      this.itemClicked = this.itemClicked.bind(this);
    } 
    
    itemClicked = (EO) => {
      this.props.cbSelected(this.props.code, this.state.class, this.state.goods);         
    }      
      
      render () {       

      return (        
        <tr className={(this.props.selectedItemCode==this.props.code)?"on":"off"} onClick = {this.itemClicked}/*{this.handleRowClick}*/> 
                <td> {this.props.item.id}</td>                                
                <td> {this.props.item.label}</td>
                <td> {this.props.item.price}</td>
                <td> {this.props.item.count}</td>
                <td> {this.props.item.link}</td>                  
        </tr>      
      )
    }
      }
    

    export default ItemRow;