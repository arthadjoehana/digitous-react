import React from 'react';
class Pay extends React.Component {
    constructor(){
        super();
        this.state = {
            total: 0
        }
    }
    totalPrice =()=> {
        let totalPrice = 0
        this.props.items.map((item)=>(
            totalPrice = totalPrice + parseInt(item.price)
        ))
        console.log(totalPrice)
        this.setState((prevState) => {
            return {
              ...prevState,
              total: totalPrice
            };
        });
        console.log(this.state.total)
    }

    render(){
        return(
            <div>
            <button onClick={this.totalPrice}>
            Total : {this.state.total}
            </button>
            </div>
        )
    }
}
export default Pay;