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
      items: [],
      total: 0
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
  removeItem =(item)=> {
    const removeItem = this.state.items
    delete removeItem[item.key]
    this.setState((prevState) => {
      return {
        ...prevState,
        items: removeItem
      };
    });
  }
  updateTotal =()=> {
    let totalPrice = 0
    this.state.items.map((item)=>(
      totalPrice = totalPrice + parseInt(item.price)
    ))
    this.setState((prevState) => {
      return {
        ...prevState,
        total: totalPrice
      };
    });
    console.log("total is", totalPrice);
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
          <Add addItem={this.addItem} items={this.state.items} updateTotal={this.updateTotal} />
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
            <Cart removeItem={this.removeItem} key={item.id} id={item.id} name={item.name} price={item.price} />
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
          <Pay items={this.state.items} total={this.state.total} />
        </div>
      )
    }
  }
}

export default App;
