import React from 'react';

import './itemRow.css';

class ItemRow extends React.Component {
    constructor (props) {
      super (props);
      this.state ={class: "off",
                   goods: this.props.item};
      this.handleRowClick = this.handleRowClick.bind(this);
    }    

    handleRowClick () {          
        var className = (this.state.class==="off")?"on":"off";
        this.setState({class: className}); 
        this.props.cbShowCardItem(this.state.class, this.state.goods);        
      }    
      render () {
      return (
        <tr className={this.state.class} onClick = {this.handleRowClick}> 
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