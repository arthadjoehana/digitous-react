import React from 'react';
class Cart extends React.Component {
    render(){
        return(
            <div>
                Your shopping cart
                <ul>
                {this.props.items.map((item) =>(
                    <li>{item.name} {item.price} €</li>
                ))}
                </ul>
                
            </div>
        )
    }
}
export default Cart;