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
                <span>{this.props.price} € <button className="delete-button" onClick={this.deleteItem}>x</button></span>
                </p>
            </div>
        )
    }
}
export default Cart;