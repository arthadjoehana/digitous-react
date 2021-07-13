import React from "react";
import './Counter.module.css';




class Counter extends React.Component {

  render() {
    return (
      <div className="counter col-sm-12 col-6">
        <h2>{this.props.count}</h2>
          <button style={{backgroundColor:"green"}}
            onClick={this.props.addFunction}
          >
          +
          </button>
          <button style={{backgroundColor:"red"}}
            onClick={this.props.substractFunction}
          >
          -
          </button>
      </div>
    );
  }
}


export default Counter;