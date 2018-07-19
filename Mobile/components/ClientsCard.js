import React from 'react';

import {clientsEvents} from './events';

import './ClientsCard.css';


  class ClientsCard extends React.PureComponent {    
    
    saveFio = () => {
        if ( this.newFioRef&&this.newBalanceRef&&this.newIdRef ) {
           let newId=parseInt(this.newIdRef.value);
           let newFio=this.newFioRef.value;  
           let newBalance=parseInt(this.newBalanceRef.value);   
         
        clientsEvents.emit('EAddFioClicked', newId, newFio, newBalance);
     }       
    }

    deleteFio = () => {
        if ( this.deleteIdRef) {
           let deleteId=parseInt(this.deleteIdRef.value);        
      
        clientsEvents.emit('EDeleteFioClicked', deleteId);
     }       
    }

    newIdRef = null;
    setNewIdRef = (ref) => {
        this.newIdRef=ref;       
    }

    newFioRef = null;
    setNewFioRef = (ref) => {
        this.newFioRef=ref;        
    }

    newBalanceRef = null;
    setNewBalanceRef = (ref) => {
        this.newBalanceRef=ref;    
    }

    deleteIdRef = null;
    setDeleteIdRef = (ref) => {
        this.deleteIdRef=ref;       
    }


    render () {
        console.log("ClientsCard render");

        if (this.props.cardWorkMode==1) {     
            return (                  
                <div className = 'clientsCard'>
                          <label>ID:</label><br/> 
                          <input type='text' ref={this.setNewIdRef} /><br/><br/> 
                          <label>Фамилия:</label><br/>                                 
                          <input type='text' ref={this.setNewFioRef} /><br/><br/>
                          <label>Баланс:</label><br/>                                 
                          <input type='text' ref={this.setNewBalanceRef} /><br/><br/>
                          <button onClick={this.saveFio}>Сохранить</button>
                                                                                             
                </div>
        )
    }
        if (this.props.cardWorkMode==2) {     
            return (                  
                <div className = 'clientsCard'>
                          <label>ID:</label><br/> 
                          <input type='text' ref={this.setDeleteIdRef} /><br/><br/>                         
                          <button onClick={this.deleteFio}>Удалить</button>
                                                                                             
                </div>
        )
    }
    else return null
      }
    }       
  
      export default ClientsCard ;
  
  