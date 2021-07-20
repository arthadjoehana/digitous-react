import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userConnected: false
    }
  }
  render () {
    if (this.state.userConnected) {
      return (
        <div>
         
        </div>
      )
    } else {
      return (
        <div>
         
        </div>
      )
    }
    
  }
}

export default App;
