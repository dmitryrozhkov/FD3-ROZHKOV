import React from 'react';

import {productsEvents} from './events';

import './ProductCard.css';

class ProductCard extends React.Component { 
    constructor (props) {      
      super (props);      
      this.state ={ 
        id: 555,
        picture:"виноград",
        label: "виноград",                  
        price: null,        
        count: 345,
        link: 'https://goo.gl/haJuRU',
        code:5,
        priceIsEmpty: false,
        countIsEmpty: false,       
        saveIsEdit:false, 
        priceNewProductIsEmpty: true,
        labelNewProductIsEmpty:true,
        countNewProductIsEmpty: true,
        saveNewProductIsEdit: false,
        priceIsChanged: false, 
        countIsChanged: false,        
       }  
      }
    
    saveEdit = (EO) => {    
        let re = /^[1-9]+?[0-9]*$/        
        let priceEdited = re.test (this.newPriceRef.value)
        let countEdited = re.test (this.newCountRef.value)     
        if (priceEdited&&countEdited) {
      this.setState({
        price:this.newPriceRef.value,
        count: this.newCountRef.value, 
        saveIsEdit:false,       
        priceIsEmpty: false,
        countIsEmpty: false,                      
        })
        this.props.cardProductId[0].price=this.newPriceRef.value   
        this.props.cardProductId[0].count=this.newCountRef.value        
        productsEvents.emit('ESaveEditClicked',this.props.cardProductId);
      }    
      else if (!priceEdited)      
               this.setState({       
                            priceIsEmpty: true,
                            countIsEmpty: false,     
                            saveIsEdit:true,                          
                            })      
      else if (!countEdited)      
               this.setState({      
                            priceIsEmpty: false,
                            countIsEmpty: true,     
                            saveIsEdit:true,                          
                            })  
      }  
      
   
    
    cancelEdit = (EO) => {  
      productsEvents.emit('ECancelClicked');
      this.setState({        
                    saveIsEdit:false,
                    saveNewProductIsEdit:false,
                    priceIsEmpty: true,
                    countIsEmpty: true,                   
                    priceNewProductIsEmpty: true,
                    labelNewProductIsEmpty:true,
                    countNewProductIsEmpty: true,                          
                   })     
    }   

    saveNewProduct = (EO) => {
      if (this.state.priceNewProductIsEmpty||this.state.labelNewProductIsEmpty||this.state.countNewProductIsEmpty)  {      
        this.setState({         
                      saveNewProductIsEdit:true,          
                      })
      }
      else {      
        var newProduct = {
                        id:this.state.id++,                        
                        label: this.state.label,
                        count: this.state.count,
                        price: this.state.price,
                        link: this.state.link,
                        picture:this.state.picture,
                        code:this.state.code++,
                       }    
        productsEvents.emit('ESaveNewProductClicked',newProduct);
        this.setState({
                      priceNewProductIsEmpty: true,
                      labelNewProductIsEmpty: true,
                      countNewProductIsEmpty: true,
                      saveNewProductIsEdit:false,        
                    })
      }
    }

    addedLabelProduct =(EO) => {   
       var re = /^[А-ЯЁ\s*\-*]+[А-ЯЁ]+$/i
       var labelNewProduct = re.test( EO.target.value)      
        if (labelNewProduct) {
        this.setState({
                      labelNewProductIsEmpty: false,                      
                      label:EO.target.value,                           
                      })
        } 
      else {
        this.setState({                           
                      labelNewProductIsEmpty: true,          
                      saveNewProductIsEdit:false,
                     })
      }      
    }

    addedPriceProduct =(EO) => {     
      var priceNewProductEdited = Number(EO.target.value)         
            if (priceNewProductEdited>0) {
            this.setState({
                          priceNewProductIsEmpty: false,                          
                          price:priceNewProductEdited,                           
                          })
            } 
          else {
            this.setState({                           
                          priceNewProductIsEmpty: true,          
                          saveNewProductIsEdit:false,
                         })
          }      
    } 
    
    addedCountProduct =(EO) => {     
      var countNewProductEdited = Number(EO.target.value)         
            if (countNewProductEdited>0) {
            this.setState({
                          countNewProductIsEmpty: false,                          
                          count:countNewProductEdited,                           
                          })
            } 
          else {
            this.setState({                           
                          countNewProductIsEmpty: true,          
                          saveNewProductIsEdit:false,
                         })
          }      
    } 
    
  newPriceRef = null;

  setNewPriceRef = (ref) => {
    this.newPriceRef=ref;
    if ( this.newPriceRef ) {
    let newPrice=this.newPriceRef.value;     
      this.setState({price:newPrice}); 
      console.log (newPrice)
     }    
    }  
  

  newCountRef = null;

  setNewCountRef = (ref) => {
    this.newCountRef=ref; 
    if ( this.newCountRef ) {
    let newCount=this.newCountRef.value;
      this.setState({count:newCount});
    }   
  };

    render () {
      let priceColor = this.state.priceIsEmpty&&this.state.saveIsEdit?"red":"green";
      let countColor = this.state.countIsEmpty&&this.state.saveIsEdit?"red":"green";

      console.log(this.state.price)
      console.log(this.state.count)
      console.log ('render')
        if (this.props.cardWorkMode==1) {         
      return (        
        <div className = 'productCard'>
                        <h3><div>Картинка:</div><img src = {this.props.cardProductId[0].picture}/></h3>                                   
                        <h3>Наименование: {" " + this.props.cardProductId[0].label}</h3>
                        <h3>Цена:{" " + this.props.cardProductId[0].price}</h3>
                        <h3>Количество:{" " + this.props.cardProductId[0].count}</h3>                                                                      
        </div>
      )
    }
      else if (this.props.cardWorkMode==2) {         
        return (        
          <div className = 'productCard'>
            <h3><div>Картинка:</div><img src = {this.props.cardProductId[0].picture}/></h3>                                   
            <h3>Наименование: {" " + this.props.cardProductId[0].label}</h3>
            <h3>Цена: <input type="text" defaultValue={this.props.cardProductId[0].price} ref={this.setNewPriceRef} style={{borderColor:priceColor}} />
            {(this.state.priceIsEmpty&&this.state.saveIsEdit)?<div style={{color:'red', fontSize:'16px'}}>*введите целое положительное число</div>:null}
            </h3>
            <h3>Количество:<input type="text" defaultValue={this.props.cardProductId[0].count} ref={this.setNewCountRef} style={{borderColor:countColor}}/>
            {(this.state.countIsEmpty&&this.state.saveIsEdit)?<div style={{color:'red', fontSize:'16px'}}>*введите целое положительное число</div>:null}
            </h3>
            <button onClick={this.saveEdit}>сохранить</button>                                
            <button onClick={this.cancelEdit}>отмена</button>                                                                      
          </div>
        )
      }
      else if (this.props.cardWorkMode==3) {
        return (        
          <div className = 'productCard'>
            <h3><div>Картинка:</div></h3>                                   
            <h3>Наименование: <input type="text"  defaultValue={null} onChange={this.addedLabelProduct} />
            {(this.state.labelNewProductIsEmpty&&this.state.saveNewProductIsEdit)?<div style={{color:'red', fontSize:'16px'}}>*введите название товара на русском языке</div>:null}
            </h3>
            <h3>Цена: <input type="text" defaultValue={null} onChange={this.addedPriceProduct} />
            {(this.state.priceNewProductIsEmpty&&this.state.saveNewProductIsEdit)?<div style={{color:'red', fontSize:'16px'}}>*введите положительное число</div>:null}
            </h3>
            <h3>Количество:<input type="text"  defaultValue={null} onChange={this.addedCountProduct} />
            {(this.state.countNewProductIsEmpty&&this.state.saveNewProductIsEdit)?<div style={{color:'red', fontSize:'16px'}}>*введите положительное число</div>:null}
            </h3>
            <button onClick={this.saveNewProduct}>сохранить</button>                                
            <button onClick={this.cancelEdit}>отмена</button>                                                                      
          </div>
        )
      }
      else return null    }
      }    

    export default ProductCard ;

    