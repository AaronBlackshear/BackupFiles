import React, { Component } from 'react';

class Test extends Component {
    constructor(props){
        super(props)

    }

    render() {

        return (
            <div className="test">
                <h1>Hello there, {this.props.prop}</h1>
            </div>
        )
    }
}

export default Test;