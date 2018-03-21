import React, { Component } from 'react';

class Child extends Component{

    render(){
        return(
            <div>
                <h1>
                    Child!
                </h1>
                <h2>My name is {this.props.name}</h2>
                <h3>{+this.props.num}</h3>
                <button onClick={this.props.add}>Add One</button>
                <button onClick={this.props.minus}>Subtract One</button>
            </div>
        )
    }
}

export default Child;