import React from "react"
import Button from './components/Button.js'
import Card from './components/Card.js'

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
    country = this.state.name.toLocaleLowerCase()
    fetch("https://restcountries.eu/rest/v2/name/")
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
        <div>
          <Button className='btn' children='France' onClick={()=> this.getCountry("france")} />
          <Button className='btn' children='Brazil' onClick={()=> this.getCountry("brazil")} />
          <Button className='btn' children='Croatia' onClick={()=> this.getCountry("croatia")} />
          <p>name={this.state.name}</p>
          <p>capital={this.state.capital}</p>
          <img style={{maxWidth: '50px'}} src={this.state.flag} alt=""></img>
          <p>population={this.state.population}</p>
          <p>region={this.state.region}</p>
        </div>
        <Card countryInfo={{...this.state}} />
      </div>
    )
  }
}
export default App;
