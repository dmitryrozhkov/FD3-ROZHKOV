import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import ClientsCard from './ClientsCard';

import './MobileCompany.css';
import {clientsEvents} from './events';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fio: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
    cardWorkMode:0,    
    allClients:0,
  };

  componentDidMount = () => {
    clientsEvents.addListener('EAddFioClicked',this.addClientFio);
    clientsEvents.addListener('EDeleteFioClicked',this.deleteClientFio);
    clientsEvents.addListener('EChangeFioClicked',this.changeClientFio);
    clientsEvents.addListener('EChangeBalanceClicked',this.changeClientBalance);
  };

  componentWillUnmount = () => {
    clientsEvents.removeListener('EAddFioClicked', this.addClientFio);
    clientsEvents.removeListener('EDeleteFioClicked',this.deleteClientFio);
    clientsEvents.removeListener('EChangeFioClicked',this.changeClientFio);
    clientsEvents.removeListener('EChangeBalanceClicked',this.changeClientBalance);
  };

  addClientFio = (newId, newFio, newBalance) => {    
    let newListClients = [...this.state.clients]
    newListClients = [...this.state.clients, {id:newId, fio:newFio, balance:newBalance}]
    this.setState({
                  clients:newListClients,
                  cardWorkMode:0,
                  })
  }

  deleteClientFio = (deleteId) => {    
    var strDelete=confirm("Вы действительно хотите удалить клиента ID: "+deleteId+ "?")
        if (strDelete) {
    let listClients = [...this.state.clients]    
    listClients = listClients.filter ((client)=> {
      if (deleteId == client.id)   
        return null      
      else return client
    })
    this.setState({
                  clients:listClients,
                  cardWorkMode:0,
                  })
      }
  }

  changeClientFio = (clientId, newFio) => {    
    let listClients = [...this.state.clients]
    listClients.forEach( (c,i) => {
      if ( c.id==clientId&& c.fio!=newFio ) {       
        let changeClientFio={...c}; // копия хэша изменившегося клиента
        changeClientFio.fio=newFio;        
        listClients[i]=changeClientFio;       
        }
      })    
    this.setState({
      clients:listClients,
      cardWorkMode:0,
      })
  }

  changeClientBalance = (clientId, newBalance) => {   
    let listClients = [...this.state.clients]
    listClients.forEach( (c,i) => {
      if ( c.id==clientId&& c.balance!=newBalance ) {        
       
        let changeClientBalance={...c}; // копия хэша изменившегося клиента
        changeClientBalance.balance=newBalance;        
        listClients[i]=changeClientBalance;        
      }
    })   
    this.setState({
      clients:listClients,
      cardWorkMode:0,
      })
  }

  filterBlockClients = () => {   
    this.setState({           
                allClients:1                  
                  })                     
  }

  filterActiveClients = () => {   
    this.setState({    
                  allClients:2                         
                  })                     
    }

  filterClients = () => {      
    this.setState({      
                 allClients:0                     
                  })
    }

  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  }; 

  addFio = () => {   
    this.setState({                     
                  cardWorkMode:1,                     
                  })                      
  }

  deleteFio = () => {  
    this.setState({                     
                  cardWorkMode:2,                     
                  })                     
  }

  changeFio = () => {  
    this.setState({                     
                  cardWorkMode:3,                     
                  })                     
  }

  changeBalance = () => {  
    this.setState({                     
                  cardWorkMode:4,                     
                  })                     
  }
    
  render() {

    console.log("MobileCompany render");

    if (this.state.allClients==0) {
      var clientsCode=this.state.clients.map( (client) =>       
        <MobileClient key={client.id} info={client} color={this.state.color} />
      );  
    }

    if (this.state.allClients==1) {
    var clientsCode=this.state.clients.map( (client) =>     
      client.balance<=0?
      <MobileClient key={client.id} info={client} color={this.state.color} />:null
    );  
  }

    if (this.state.allClients==2) {
      var clientsCode=this.state.clients.map( (client) =>     
        client.balance>0?
        <MobileClient key={client.id} info={client} color={this.state.color} />:null
    );  
  }

    return (
      <div className="Wrapper">
      <div className='MobileCompany'>
        <input type="button" value="=МТС" onClick={this.setName1} />
        <input type="button" value="=Velcom" onClick={this.setName2} />
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div className='MobileCompanyClients'>
          {clientsCode}
        </div>       
        <input type="button" value="Добавить нового клиента" onClick={this.addFio} /><br/><br/>
        <input type="button" value="Удалить клиента" onClick={this.deleteFio} /><br/><br/>
        <input type="button" value="Изменить фамилию" onClick={this.changeFio} /><br/><br/>
        <input type="button" value="Изменить баланс" onClick={this.changeBalance} /><br/><br/>
        <input type="button" value="Заблокированные клиенты" onClick={this.filterBlockClients} /><br/><br/>
        <input type="button" value="Активные клиенты" onClick={this.filterActiveClients} /><br/><br/>
        <input type="button" value="Все клиенты" onClick={this.filterClients} /><br/><br/>
        </div>
        <ClientsCard  
                       cardWorkMode = {this.state.cardWorkMode}                                          
        />    
      </div>
    );
  

  }

}

export default MobileCompany;