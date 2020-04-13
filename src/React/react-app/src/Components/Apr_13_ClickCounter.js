import React, {Component} from 'react';
import UpdatedComponent from './Apr_13_WithComponent'

class Apr13ClickCounter extends Component {
    render() {
        const {count, incrementCount} = this.props;
        return (
            <div>
                <button onClick={incrementCount}> {this.props.name} Clicked {count} times </button>
            </div>
        );
    }
}

export default UpdatedComponent(Apr13ClickCounter);