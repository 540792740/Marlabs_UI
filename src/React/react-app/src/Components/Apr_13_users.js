import React, {Component} from 'react';
import {Link, Route} from "react-router-dom"

const User = ({match}) => <p>User Component: {match.params.id}</p>;

class Apr13Users extends Component {
    render() {
        // const {} = this.props.match;
        return (
            <div>
                <h3>Users</h3>
                <strong>Select A User</strong>
                <ul>
                    <li><Link to="/users/1">User 1</Link></li>
                    <li><Link to="/users/2">User 2</Link></li>
                    <li><Link to="/users/3">User 3</Link></li>
                </ul>
                <Route path="/users/:id" component={User} ></Route>
            </div>
        );
    }
}

export default Apr13Users;
