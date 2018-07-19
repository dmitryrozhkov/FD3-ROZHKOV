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
  };

  componentDidMount = () => {
    clientsEvents.addListener('EAddFioClicked',this.addClientFio);
    clientsEvents.addListener('EDeleteFioClicked',this.deleteClientFio);    
  };

  componentWillUnmount = () => {
    clientsEvents.removeListener('EAddFioClicked', this.addClientFio);
    clientsEvents.removeListener('EDeleteFioClicked',this.deleteClientFio);    
  };

  addClientFio = (newId, newFio, newBalance) => {
    console.log (newFio)
    let newListClients = [...this.state.clients]
    newListClients = [...this.state.clients, {id:newId, fio:newFio, balance:newBalance}]
    this.setState({
                  clients:newListClients,
                  cardWorkMode:0,
                  })
  }

  deleteClientFio = (deleteId) => {
    console.log (deleteId)
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
  
  render() {

    console.log("MobileCompany render");

    var clientsCode=this.state.clients.map( client =>
      <MobileClient key={client.id} info={client}  />
    );

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
        <input type="button" value="Удалить клиента" onClick={this.deleteFio} />
        </div>
        <ClientsCard  
                       cardWorkMode = {this.state.cardWorkMode}
                                          
        />    
      </div>
    );
  

  }

}

export default MobileCompany;
