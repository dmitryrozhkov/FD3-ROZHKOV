import React from 'react';

import './app.css';

class App extends React.Component {
    
      
      render () {       

      return (        
        <div className="text">
            {this.props.text}
        </div> 
      )
    }
      }    

    export default App;