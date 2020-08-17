import React from 'react';
import './App.css';
import Navigationbar from './components/Navbar.js'


class App extends React.Component {
  render(){
    return(
      <div>
        <Navigationbar />
        <p> Hello </p>
      </div>
    ) 
  }
}

export default App;
