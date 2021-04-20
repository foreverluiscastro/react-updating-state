// Code ClickityClick Component Here
import React, { Component } from 'react'

export default class ClickityClick extends Component {
    constructor() {
        super();

        // Define the initial state:
        this.state = {
            hasBeenClicked: false
        };
    }

    handleClick = () => {
        // Update our state here...
        this.setState({
            hasBeenClicked: true
        }, () => console.log(this.state.hasBeenClicked)) // Prints true
        console.log(this.state.hasBeenClicked); // Prints false
    };
    
    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}
