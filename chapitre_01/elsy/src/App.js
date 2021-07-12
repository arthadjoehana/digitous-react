import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Steps from "./components/steps/Steps"
import './App.css';

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

class App extends React.Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <Steps />
          <p>Heart : {heartMin} </p>
          <p>temperature : {tempMin} </p>
          <p>Steps : {stepsMin} </p>
        </div>
      </div>
    );
  }
}


export default App;
