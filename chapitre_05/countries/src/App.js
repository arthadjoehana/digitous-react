import React from "react"
import Button from './components/Button.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      capital: '',
      flag: '',
      population: '',
      region: '',
    }
  }
  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/name/france")
    .then((res) => res.json())
    .then((data)=> {
      this.setState({
        name: data[0].name,
        capital: data[0].capital,
        flag: data[0].flag,
        population: data[0].population,
        region: data[0].region,
      })
    })
  }
  getCountry(country) {
    fetch("https://restcountries.eu/rest/v2/name/" + country)
    .then((res) => res.json())
    .then((data)=> {
      this.setState({
        name: data[0].name,
        capital: data[0].capital,
        flag: data[0].flag,
        population: data[0].population,
        region: data[0].region,
      })
    })
  }
  render() {
    return(
      <div className='container'>
        <Button  className='btn' children='France' onClick={this.getCountry} />
        <Button className='btn' children='Brazil' onClick={this.getCountry} />
        <Button className='btn' children='Croatia' onClick={this.getCountry} />
        <p>name={this.state.name}</p>
        <p>capital={this.state.capital}</p>
        <img style={{maxWidth: '50px'}} src={this.state.flag} alt=""></img>
        <p>population={this.state.population}</p>
        <p>region={this.state.region}</p>
      </div>
    )
  }
}
export default App;
