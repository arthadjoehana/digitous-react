import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Counter from "./components/Counter";

import './App.css';
import './styles/global.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };

    
  }
  addFunction=()=> {
    this.setState({
      count: this.state.count+1
    })
  }
  substractFunction=()=> {
    if(this.state.count >0 ) {
      this.setState({
        count: this.state.count-1
      })
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <h1>Counter</h1>
          <Counter count={this.state.count} addFunction={this.addFunction} substractFunction={this.substractFunction} />
        </div>
      </div>
    );
  };
};


export default App;
