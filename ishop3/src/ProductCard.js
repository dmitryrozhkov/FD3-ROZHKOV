import React from 'react';

import './ProductCard.css';

class ProductCard extends React.Component {  
    constructor (props) {      
      super (props);      
      this.state ={ 
        id: 555,
        picture:"виноград",
        label: "виноград",             
        price: 0,
        count: 345,
        link: 'https://goo.gl/haJuRU',
        code:5,
        priceIsEmpty: true,
        countIsEmpty: true,       
        saveIsEdit:false, 
        priceNewProductIsEmpty: true,
        labelNewProductIsEmpty:true,
        countNewProductIsEmpty: true,
        saveNewProductIsEdit: false,        
       }  
      }
      
      saveEdit = (EO) => {
      if (this.state.priceIsEmpty||this.state.countIsEmpty)  {     
      this.setState({       
                    saveIsEdit:true,                  
                    })
      }

      else {     
      this.props.cardProductId[0].price=this.state.price    
      this.props.cardProductId[0].count=this.state.count        
      this.props.cbSaveEdit(this.props.cardProductId)     
      this.setState({
                    priceIsEmpty: true,
                    countIsEmpty:true,
                    saveIsEdit:false,                     
                    })     
      }
    }
    
    cancelEdit = (EO) => {      
      this.props.cbCancelEdit() 
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

    changePriceProduct =(EO) => {   
          var priceEdited = Number(EO.target.value)         
            if (priceEdited>0) {
            this.setState({priceIsEmpty: false,                          
                           price:priceEdited,                          
                          })
          } 
          else {
          this.setState({                           
                        priceIsEmpty: true,         
                        saveIsEdit:false,
                        })
          }   
     }

     changeCountProduct =(EO) => {       
        var countEdited = Number(EO.target.value)
        if (countEdited>0) {
          this.setState({countIsEmpty: false,                        
                         count:countEdited,                         
                        })
        } 
        else {
        this.setState({                           
                         countIsEmpty: true,       
                         saveIsEdit:false,
                          })
        }
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
        this.props.cbSaveNewProduct(newProduct)
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

    render () {
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
            <h3>Цена: <input type="text" /*defaultValue={this.props.cardProductId[0].price}*/ onChange={this.changePriceProduct} /*style={{borderColor:priceColor}}*/ />
            {(this.state.priceIsEmpty&&this.state.saveIsEdit)?<div style={{color:'red', fontSize:'16px'}}>*введите положительное число</div>:null}
            </h3>
            <h3>Количество:<input type="text" /*defaultValue={this.props.cardProductId[0].count}*/ onChange={this.changeCountProduct} />
            {(this.state.countIsEmpty&&this.state.saveIsEdit)?<div style={{color:'red', fontSize:'16px'}}>*введите положительное число</div>:null}
            </h3>
            <button onClick={this.saveEdit} /*disabled={(this.state.priceIsEmpty)&&(this.state.saveIsEdit)}*/>сохранить</button>                                
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
      else return null
    }
      }    

    export default ProductCard ;

    