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
      this.state.text.split(/<br\s*\/?>/).forEach((v, i) => {   
        if (i>0) {newArr.push(<br key={i} />)
        newArr.push(v)}                    
        else newArr.push(v)    
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