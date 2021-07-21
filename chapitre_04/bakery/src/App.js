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
  removeItem =()=> {
    const removeItem = this.state.items
    delete removeItem[this.state.key]
    this.setState((prevState) => {
      return {
        ...prevState,
        items: removeItem
      };
    });
    console.log(removeItem)
  }
 

  render () {
    if (this.state.activeTab === "add"){
      return (
        <div>
          <div className="tab">
            <Button children="Add" style={{backgroundColor:'blue'}} onClick={this.selectAdd} />
            <Button children="Cart" style={{backgroundColor:'white'}} onClick={this.selectCart} />
            <Button children="Pay" style={{backgroundColor:'white'}} onClick={this.selectPay} />
          </div>
          <Add addItem={this.addItem} />
        </div>
      )
    }
    if (this.state.activeTab === "cart"){
      return (
        <div>
          <div className="tab">
            <Button children="Add" style={{backgroundColor:'white'}} onClick={this.selectAdd} />
            <Button children="Cart" style={{backgroundColor:'blue'}} onClick={this.selectCart} />
            <Button children="Pay" style={{backgroundColor:'white'}} onClick={this.selectPay} />
          </div>
          {this.state.items.map((item) => (
            <Cart key={item.key} name={item.name} price={item.price} removeItem={this.removeItem} />
          ))}
        </div>
      )
    }
    if (this.state.activeTab === "pay"){
      return (
        <div>
          <div className="tab">
            <Button children="Add" style={{backgroundColor:'white'}} onClick={this.selectAdd} />
            <Button children="Cart" style={{backgroundColor:'white'}} onClick={this.selectCart} />
            <Button children="Pay" style={{backgroundColor:'blue'}} onClick={this.selectPay} />
          </div>
          <Pay items={this.state.items} />
        </div>
      )
    }
  }
}

export default App;
