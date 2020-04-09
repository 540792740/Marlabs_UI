import React, {Component} from 'react';

class Apr9EventBinding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:"Hello"
        }
    }
    clickHandler = () =>{
        this.setState({
            message: "New Message"
        })
    };
    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={this.clickHandler}>Click</button>
                {/*<button onClick={this.clickHandler.bind(this)}>Click</button>*/}
            </div>
        );
    }
}

export default Apr9EventBinding;