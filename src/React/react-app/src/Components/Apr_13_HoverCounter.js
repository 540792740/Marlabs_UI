import React, {Component} from 'react';
import UpdatedComponent from "./Apr_13_WithComponent";

class Apr13HoverCounter extends Component {
    render() {
        const {count, incrementCount} = this.props;
        return (
            <div>
                <h3 onMouseOver={incrementCount}>{this.props.name} Hovered {count} times</h3>
            </div>
        );
    }
}
export default UpdatedComponent(Apr13HoverCounter);
