import React from 'react';
export default class Button extends React.Component {
    render(){
        return(
            <div>
            <button
            style={this.props.style}
            onClick={this.props.onClick}
            >
            {this.props.children}
            </button>  
            </div>
        )
    }
}
