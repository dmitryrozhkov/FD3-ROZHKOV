import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from "./ProductCard";
import {productsEvents} from './events';

import './ProductsGrid.css';

 class ProductsGrid extends React.Component {  
    constructor (props) {
      super (props);       
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
        {id:444, label:'слива', count:700, price:15, link: 'https://goo.gl/haJuRU', code:1, picture: '../images/plum.png'}      
      ]};  
      
      state ={                 
        products:this.props.startProducts,
        cardWorkMode:this.props.startCardWorkMode,
        cardWorkMode:0,
        cardProductId:null,
        selectedProductId:null,
        deletedProductId:null,
        productIsClicked:false,
        productEditIsClicked:false,                                  
       };

       componentDidMount = () => {
        productsEvents.addListener('ECancelClicked',this.productCancelEdit);
        productsEvents.addListener('ESaveEditClicked',this.productSaveEdit);
        productsEvents.addListener('ESaveNewProductClicked',this.saveNewProduct);
      };
    
      componentWillUnmount = () => {
        productsEvents.removeListener('ECancelClicked',this.productCancelEdit);
        productsEvents.removeListener('ESaveEditClicked',this.productSaveEdit);
        productsEvents.removeListener('ESaveNewProductClicked',this.saveNewProduct);
      };

       productClicked = (EO) => {
         if ((this.state.cardWorkMode!==2)&&(this.state.cardWorkMode!==3)) {
        var filteredList = this.state.products.filter((product)=>{
          if (product.id==EO.currentTarget.getAttribute("data-product"))
        return product
        });         
        console.log ('Кликнут товар id: '+  EO.currentTarget.getAttribute("data-product"))
        this.setState({        
                      selectedProductId:EO.currentTarget.getAttribute("data-product"),
                      cardProductId: filteredList,
                      cardWorkMode:1,
                      productIsClicked:true,
                      productEditIsClicked:false,
                      })
                    }
       }
      
       productDeleteClicked = (EO) =>{        
        EO.stopPropagation()         
        console.log ("Удаление товара id = "+ EO.target.getAttribute("data-product"))   
        var strDelete=confirm('Вы действительно хотите удалить строку?')
        if (strDelete) {
        var deletedFilteredList = this.state.products.filter((product)=>{
          if (product.id==EO.target.getAttribute("data-product"))
          return null
          else return product
          });               
        this.setState({products: deletedFilteredList, 
                      cardWorkMode:0,
                     }) 
        }   
      }

      productEditClicked = (EO) => {
        EO.stopPropagation()        
        console.log ("Редактирование товара id = "+ EO.target.getAttribute("data-product"))
        var editedFilteredList = this.state.products.filter((product)=>{
          if (product.id==EO.target.getAttribute("data-product"))
        return product
        });
        this.setState({
                      cardProductId: editedFilteredList, 
                      cardWorkMode:2,
                      productEditIsClicked:true,
                      productIsClicked:false,
                      })    
      }

      productSaveEdit = (code) => {
        console.log (code)
        var editedProducts = this.state.products.map ((product) =>{
          if (product.id==code[0].id)
          product=code[0]
          return product
        })
        this.setState ({
                       products:editedProducts,
                       cardWorkMode:1,
                      })
      }

      productCancelEdit = () => {
        this.setState ({          
                       cardWorkMode:0,
                      })
      } 

      productAddClicked =() => {        
        this.setState ({          
                        cardWorkMode:3,
                      })
      }

      saveNewProduct = (code) => {
        var newList = this.state.products     
        console.log (code)
        console.log (newList)
        var newList_2 = [...newList, code]      
        this.setState ({                        
                        products:newList_2,                                            
                        cardWorkMode:0,
                      })
      }
      
  render () {          
          console.log (this.state.products)        
      return (  
        <div>       
        <table border="1">
          <tbody>
            <tr>              
              <td>Наименование</td>
              <td>Цена</td>
              <td>Количество</td>
              <td>URL</td>
              <td>Кнопки</td>                 
            </tr>  
            { this.state.products.map ((product) =>
            <tr data-product = {product.id} key = {product.code} className={((this.state.productIsClicked&&this.state.selectedProductId==product.id/*&&this.state.cardWorkMode==1*/)||(this.state.productEditIsClicked&&this.state.cardProductId[0].id==product.id))?"on":null} onClick = {this.productClicked} >                                             
              <td> {product.label}</td>
              <td> {product.price} </td>                
              <td> {product.count }</td>
              <td> {product.link} </td>
              <td>
                  <button  data-product = {product.id} onClick={this.productDeleteClicked} disabled={(this.state.cardWorkMode==2)||(this.state.cardWorkMode==3)}>удалить</button> 
            <button  data-product = {product.id} onClick={this.productEditClicked} disabled={(this.state.cardWorkMode==2)||(this.state.cardWorkMode==3)}>редактировать</button>                    
              </td>                                             
            </tr>                              
      )}   
          </tbody>
        </table>
         <ProductCard  
                       cardWorkMode = {this.state.cardWorkMode}
                       cardProductId = {this.state.cardProductId}                                        
        />  
        <button  className = "newProduct" onClick={this.productAddClicked} disabled={(this.state.cardWorkMode==2)||(this.state.cardWorkMode==3)}>новый</button>   
        </div>                                                                                      
                                                                                                                                           
        ); 
                
      }             
    }
  
    export default  ProductsGrid;

   