import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "./components/box/Box";
import './App.css';
import './styles/global.css';

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000
    };
  }
  onHeartChange =(e)=> {
    this.setState((prevState) => {
      return {
        ...prevState,
        heart: e.target.value
      };
    });
    this.calculateWater();
  }
  onStepsChange =(e)=> {
    this.setState((prevState) => {
      return {
        ...prevState,
        steps: e.target.value
      };
    });
    this.calculateWater();
  }
  onTemperatureChange =(e)=> {
    this.setState((prevState) => {
      return {
        ...prevState,
        temperature: e.target.value
      };
    });
    this.calculateWater();
  }
  calculateWater =()=> {
    let drinkWater = 1.5
    let x = 0
    let y = 0
    let z = 0
    if (this.state.temperature > 20) {
      let multiplier = this.state.temperature - 20
      x = multiplier*0.02
    }
    if (this.state.heart > 120) {
      let multiplier = this.state.heart - 120
      y = multiplier*0.0008
    }
    if (this.state.steps > 10000) {
      let multiplier = this.state.steps - 10000
      z = multiplier*0.00002
    }
    drinkWater = drinkWater + x + y + z
    this.setState((prevState) => {
      return {
        ...prevState,
        water: drinkWater
      };
    });
  }

  render() {

    return (
      <div className="container-fluid">
        <div className="row">
          <Box icon="local_drink" color="#3A85FF" value={this.state.water} unit="L" />
          <Box icon="directions_walk" color="black" onChange={this.onStepsChange} value={this.state.steps} unit="steps" min={stepsMin} max={stepsMax} />
          <Box icon="favorite" color="red" onChange={this.onHeartChange} value={this.state.heart} unit="bpm" min={heartMin} max={heartMax} />
          <Box icon="wb_sunny" color="yellow" onChange={this.onTemperatureChange} value={this.state.temperature} unit="°C" min={tempMin} max={tempMax} />
        </div>
      </div>
    );
  };
};


export default App;
