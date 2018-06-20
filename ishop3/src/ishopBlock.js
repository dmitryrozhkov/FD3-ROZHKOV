import React from 'react';
import PropTypes from 'prop-types';

import ItemRow from "./itemRow";
import './ishopBlock.css';
import '../images/apple.png'
import '../images/pear.png'
import '../images/banan.png'
import '../images/plum.png'


 
 class IshopBlock extends React.Component { 
    constructor (props) {
      super (props);
      this.state ={isClicked: false,
                   goods: null,
                   selectedItemCode: null,
                   removeItemCode:null,
                   isRemoved:false,                   
                   items:this.props.items                   
                  };        
    } 

    //Устанавливаем типы props
    static propTypes = {      
      items:PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
          count: PropTypes.number.isRequired,
          code: PropTypes.number.isRequired,
          price: PropTypes.number.isRequired,
          link: PropTypes.string,
        })
      )     
    };

    //Устанавливаем дефолтное значение props
    static defaultProps = {
      items:[        
        {id:1, label:'слива', count:700, price:15, link: 'https://goo.gl/haJuRU', code:1, picture: '../images/plum.png'}      
      ]};    
    
      itemSelected = (code, row) => {        
        this.setState({selectedItemCode:code,                      
                       isClicked:true,
                       goods: row})     
      } 

      itemDelete = (code) => {
        console.log (code)
       var filteredList = this.state.items.filter((item)=>{
          return item.code!==code;
      });
       this.setState({items: filteredList, 
                      removeItemCode:code, 
                      isRemoved:true})
      }
      
  render () {   
            
      return (  
        <div>       
        <table border="1">
          <tbody>
            <tr>
              <td>№</td>
              <td>Наименование</td>
              <td>Цена</td>
              <td>Количество</td>
              <td>URL</td>                
            </tr>  
            {this.state.items.map ((item) =>
              <ItemRow key = {item.code} item={item}                                         
                                         cbSelected={this.itemSelected}
                                         cbDelete={this.itemDelete}
                                         code={item.code}
                                                                              
              />                                                  
      )}   
          </tbody>
        </table> 
        {this.state.isClicked&&                    
                                   <div className ={(this.state.selectedItemCode==this.state.removeItemCode)? "itemCardNone":"itemCard"}>
                                    <h3><div>Картинка:</div><img src = {this.state.goods.picture} /></h3>
                                    <h3>ID: {" "+this.state.goods.id}</h3>
                                    <h3>Наименование:{" "+this.state.goods.label}</h3>
                                    <h3>Цена:{" "+this.state.goods.price}</h3>
                                    <h3>Количество:{" "+this.state.goods.count}</h3>                                                                      
                                   </div>}
                                  
         
         </div>  
        
           ); 
      }        
    }
    
    export default IshopBlock;