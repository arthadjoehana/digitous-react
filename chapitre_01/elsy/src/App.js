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
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Box icon="local_drink" value={1.5} unit="L" color="#3A85FF" />
          <Box icon="directions_walk" value={3000} unit="steps" color="black" />
          <Box icon="favorite" value={120} unit="bpm" color="red" />
          <Box icon="wb_sunny" value={-10} unit="°C" color="yellow" />
          <p>Heart : {heartMin} </p>
          <p>temperature : {tempMin} </p>
          <p>Steps : {stepsMin} </p>
        </div>
      </div>
    );
  };
};


export default App;
