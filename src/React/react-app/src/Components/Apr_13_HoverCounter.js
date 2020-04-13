import React, {Component} from 'react';

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
nent(Apr13HoverCounter);
export default UpdatedCompo