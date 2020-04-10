import React, {Component} from 'react';

class Apr9Counter extends Component {
    constructor() {
        super();
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
        this.setState(prevState=>{
                console.log("Callback : " + prevState.count);
                return {count:prevState.count + 1}
                });
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