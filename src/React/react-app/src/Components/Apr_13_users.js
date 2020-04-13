import React, {Component} from 'react';

class Apr13Users extends Component {
    render() {
        const{params} = this.props.match;
        return (
            <div>
                <h3>Users</h3>
                <p>iD:{params.id}</p>
            </div>
        );
    }
}

export default Apr13Users;