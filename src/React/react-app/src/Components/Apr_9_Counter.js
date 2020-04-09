import React, {Component} from 'react';

class Apr9Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count:0
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        },
            () =>{
                console.log("Callback : " + this.state.count)
            }
        );
        console.log(this.state.count)

    }

    render() {
        return (
            <div>
                <button onClick={() =>this.increment()}>Increment</button>
                <div>Count = {this.state.count}</div>

            </div>
        );
    }
}


export default Apr9Counter;