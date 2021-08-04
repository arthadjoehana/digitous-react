import React from 'react';
export default class Cards extends React.Component {
    constructor() {
        super();
        this.state = {
            image: "../public/item.png"
        }
    }
    render(){
        return(
            <div productName={this.props.productName} price={this.props.price} onClick={this.props.onClick}>
                <button onClick={this.props.onClick(this.props.productName, this.props.price)}>
                    <img src={this.state.image} alt=""></img>
                </button>
            </div>
        )
    }
}