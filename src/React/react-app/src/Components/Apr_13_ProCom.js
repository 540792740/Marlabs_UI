import React, {Component} from 'react';

class Apr13ProCom extends Component {
    render() {
        console.log("Pure Component");
        return (
            <div>
                Pure Component: {this.props.name}
            </div>
        );
    }
}

export default Apr13ProCom;