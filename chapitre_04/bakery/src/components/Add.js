import React from 'react';
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
    insertItem = () => {
        this.props.addItem({
            name: this.state.productName, 
            price: this.state.price})
    }
    render(){
        return(
            <div>
            <input type="text" onChange={this.updateProductName}></input>
            <input type="range" min={1} max={10} onChange={this.updatePrice}></input>
            <button onClick={this.insertItem}>Add to Cart</button>
            </div>
        )
    }
}
export default Add;