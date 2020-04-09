import React, {Component} from 'react';

class Apr9Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }
    increment() {
        //Example 1
        // this.setState({
        //     count: this.state.count + 1
        // },
        //     () =>{
        //         console.log("Callback : " + this.state.count)
        //     }
        // );

        //Example 2
        this.setState(prevState=>({
            count:prevState.count + 1
                }), () =>{
                    console.log("Callback : " + this.state.count)
                    }
                );

        console.log(this.state.count)

    }
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (
            <div>
                <button onClick={() =>this.incrementFive()}>Increment</button>
                <div>Count = {this.state.count}</div>
            </div>
        );
    }
}


export default Apr9Counter;