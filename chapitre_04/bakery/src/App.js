import React from 'react';
import './App.css';
import Button from './components/Button'
import Add from './components/Add'
import Cart from './components/Cart'
import Pay from './components/Pay'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: "add",
      items: []
    };
  }
  selectAdd =()=> {
    this.setState((prevState) => {
      return {
        ...prevState,
        activeTab: "add"
      };
    });
  }
  selectCart =()=> {
    this.setState((prevState) => {
      return {
        ...prevState,
        activeTab: "cart"
      };
    });
  }
  selectPay =()=> {
    this.setState((prevState) => {
      return {
        ...prevState,
        activeTab: "pay"
      };
    });
  }
  addItem =(item)=> {
    const addItem = this.state.items
    addItem.push(item)
    this.setState((prevState) => {
      return {
        ...prevState,
        items: addItem
      };
    });
    console.log(this.state.items)
  }

 

  renderActiveTab () {
    if (this.state.activeTab === "add"){
      return (
        <div>
          <Add addItem={this.addItem} />
        </div>
      )
    }
    if (this.state.activeTab === "cart"){
      return (
        <div>
          <Cart items={this.state.items} />
        </div>
      )
    }
    if (this.state.activeTab === "pay"){
      return (
        <div>
          <Pay />
        </div>
      )
    }
  }
  render () {
    return (
      <div className="app">
        <div className="tab">
        <Button children="Add" onClick={this.selectAdd} />
        <Button children="Cart" onClick={this.selectCart} />
        <Button children="Pay" onClick={this.selectPay} />
        </div>
        {this.renderActiveTab()}
      </div>
      
      
    )
  }
}

export default App;
