import React from 'react';

import './itemRow.css';

class ItemRow extends React.Component {
    constructor (props) {
      super (props);      
    } 
    
    itemClicked = (EO) => {
      this.props.cbSelected(this.props.code, this.props.item);
             
    }
    
    itemDeleteClicked = (EO) => {
      var strDelete=confirm('Вы действительно хотите удалить строку?')
      if (strDelete) {      
      this.props.cbDelete(this.props.code);
           
      }      
    }      
      
      render () {       

      return (        
        <tr className={(this.props.selectedItemCode==this.props.code)?"on":null} onClick = {this.itemClicked}> 
                <td> {this.props.item.id}</td>                                
                <td> {this.props.item.label}</td>
                <td> {this.props.item.price}</td>
                <td> {this.props.item.count}</td>
                <td> {this.props.item.link}<input type='button' value='удалить' onClick={this.itemDeleteClicked} /></td>                               
        </tr>   
      )
    }
      }    

    export default ItemRow;