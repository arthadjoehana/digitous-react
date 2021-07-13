import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import './styles/global.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <h1>Counter</h1>
          <h2>{this.state.count}</h2>
          <button style={{backgroundColor:"green"}}
            onClick={()=> {
              this.setState(num => {
                return {count: num.count + 1}
              })
            }}
          >
          +
          </button>
          <button style={{backgroundColor:"red"}}
            onClick={()=> {
              this.setState(num => {
                return {count: num.count - 1}
              })
            }}
          >
          -
          </button>
        </div>
      </div>
    );
  };
};


export default App;
