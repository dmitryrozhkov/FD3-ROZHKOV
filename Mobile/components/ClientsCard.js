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

    changeFio = () => {
        if ( this.changeFioRef&&this.changeIdRef ) {
           let clientId=parseInt(this.changeIdRef.value);
           let changeFio=this.changeFioRef.value;  
             
        clientsEvents.emit('EChangeFioClicked', clientId, changeFio);
     }       
    }

    changeBalance = () => {
        if ( this.changeBalanceRef&&this.changeIdRef ) {
           let clientId=parseInt(this.changeIdRef.value);
           let changeBalance=parseInt(this.changeBalanceRef.value);  
           
        clientsEvents.emit('EChangeBalanceClicked', clientId, changeBalance);
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

    changeIdRef = null;
    setChangeIdRef = (ref) => {
        this.changeIdRef=ref;       
    }

    changeFioRef = null;
    setChangeFioRef = (ref) => {
        this.changeFioRef=ref;       
    }

    changeBalanceRef = null;
    setChangeBalanceRef = (ref) => {
        this.changeBalanceRef=ref;       
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
        if (this.props.cardWorkMode==3) {     
            return (                  
                <div className = 'clientsCard'>
                      <label>ID:</label><br/> 
                      <input type='text' ref={this.setChangeIdRef} /><br/><br/> 
                      <label>Новая фамилия:</label><br/>                                 
                      <input type='text' ref={this.setChangeFioRef} /><br/><br/>                    
                      <button onClick={this.changeFio}>Изменить</button>                                                                                         
                </div>
                    )
        }
        if (this.props.cardWorkMode==4) {     
            return (                  
                <div className = 'clientsCard'>
                      <label>ID:</label><br/> 
                      <input type='text' ref={this.setChangeIdRef} /><br/><br/> 
                      <label>Новый баланс:</label><br/>                                 
                      <input type='text' ref={this.setChangeBalanceRef} /><br/><br/>                     
                      <button onClick={this.changeBalance}>Изменить</button>                                                                                         
                </div>
                    )
        }
    else return null
      }
    }       
  
      export default ClientsCard ;
  
  