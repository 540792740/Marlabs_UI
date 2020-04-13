import React, {Component} from 'react';

class Apr13RegCom extends Component {
    render() {
        console.log("Regular Component")
        return (
            <div>
                Regular Component:  {this.props.name}
            </div>
        );
    }
}

export default Apr13RegCom;