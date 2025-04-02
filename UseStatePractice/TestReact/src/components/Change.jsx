import React, { Component } from 'react'

class Change extends Component {
    constructor() {
        super()
        this.state = {count:1, number:5}
    }

    increment = () => {
        this.setState({count : this.state.count + 1})
    }
    increment2 = () => {
        this.setState({number : this.state.number + 1})
    }

    render() {
        return (
            <>
                <h1>Welcome, {this.props.name }</h1>
                <h1>Number1: {this.state.count}  </h1>
                <h1>Number2: {this.state.number}  </h1>
                <button onClick={this.increment}>+</button><button onClick={this.increment2}>+</button>
            </>
        )
    }
}

export default Change