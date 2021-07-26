import React from 'react';
import './Add.css'
class Add extends React.Component {
    constructor() {
        super();
        this.state = {
            productName: "",
            price: 1
        };
    }
    updateProductName =(e)=> {
        this.setState((prevState) => {
            return {
              ...prevState,
              productName: e.target.value
            };
        });
    }
    updatePrice =(e)=> {
        this.setState((prevState) => {
            return {
              ...prevState,
              price: e.target.value
            };
        });
    }
    insertItem = (e) => {
        this.props.addItem({
            id: this.props.items.length,
            name: this.state.productName, 
            price: this.state.price
        })
        e.preventDefault();
        this.props.updateTotal()
    }
    render(){
        return(
            <div className="add-item">
            <input type="text" onChange={this.updateProductName}></input>
            <input type="range" min={1} max={10} value={this.state.price} onChange={this.updatePrice}></input>
            <button onClick={this.insertItem}>Add to Cart</button>
            </div>
        )
    }
}
export default Add;