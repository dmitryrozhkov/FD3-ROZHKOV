import React from 'react';
import PropTypes from 'prop-types';


import './app.css';

class App extends React.Component {

  static propTypes = {
    children: PropTypes.string.isRequired,
    };
    
      
      render () {               
        console.log (this.props.children.split('<br />').join('\n'))
      return (        
        <div className="text">
            {this.props.children.split('<br />').join('\n')}
        </div> 
      )
    }
      }    

    export default App;