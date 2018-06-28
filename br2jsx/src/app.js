import React from 'react';
import PropTypes from 'prop-types';

import './app.css';

class App extends React.Component {

   static propTypes = {
    text: PropTypes.string.isRequired,
    };

    state = {
      text: this.props.text,
    }

    componentDidMount = () => {
      var newArr = []
      var arr = this.state.text.split(/\Dbr\s?\/?\D/).map((v, i) => {   
      return  newArr.push(v, <br key={i} />)    
      })
       this.setState({text:newArr});             
       };
    
      
      render () {       
       
      return (        
        <div className="text">                  
            {this.state.text}
        </div>
      )
    }
      }    

    export default App;