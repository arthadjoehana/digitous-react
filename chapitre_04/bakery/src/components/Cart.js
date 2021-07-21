import React from 'react';
import './Cart.css'
class Cart extends React.Component {
    deleteItem = (e) => {
        this.props.removeItem();
        e.preventDefault();
    }
    render(){
        return(
            <div className="item-list">
                <p className="item">
                <span>{this.props.name}</span>
                <span>{this.props.price} € <button onClick={this.deleteItem}>Remove</button></span>
                </p>
            </div>
        )
    }
}
export default Cart;