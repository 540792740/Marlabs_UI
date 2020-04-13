import React, {Component} from 'react';

class Apr13HoverCounter extends Component {
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
                <h3 onMouseOver={this.incrementCount}>Hovered {this.state.count} times</h3>
            </div>
        );
    }
}

export default Apr13HoverCounter;