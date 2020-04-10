import React, {Component} from 'react';

class Apr9State extends Component {

    state ={
        date: new Date()
    };

    componentDidMount() {
        this.timer = setInterval(()=>{
            this.setState({
                date:new Date()
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}

export default Apr9State;