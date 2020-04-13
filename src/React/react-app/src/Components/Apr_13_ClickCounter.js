import React, {Component} from 'react';

class Apr13ClickCounter extends Component {
    constructor(props) {
        super(props);
        this.state={
            count:0
        }

    }
    incrementCount = () => {
        this.setState(prevState=>{
            return{count:prevState.count + 1}
        })
    };

    render() {
        return (
            <div>

                <button onClick={this.incrementCount}> Clicked {this.state.count}</button>
            </div>
        );
    }
}

export default Apr13ClickCounter;