import React, {Component} from 'react';

class Apr9StateTest extends Component {

    state = {
        counter : 1
    };

    componentDidMount() {

        //Do not do that, does not work
        // this.state.counter += 1;

        // this.setState({counter: this.state.counter + 1})

        //setState(obj)
        //setState(fuc)
        this.setState(prevState=>({
                counter: prevState.counter + 1
        }));

        this.setState(prevState=>({
                counter: prevState.counter + 1
        }));
    }

    render() {
        return (
            <div>
                {this.state.counter}
            </div>
        );
    }
}

export default Apr9StateTest;