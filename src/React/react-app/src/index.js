import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Apr13Contact from "./Components/Apr_13_contact";
import Apr13Users from "./Components/Apr_13_users";
// import Router from "react-router-dom/es/Router";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Apr13NotFound from "./Components/Apr_13_notFound";
// import Switch from "react-router-dom/es/Switch";
const routing = (
    <Router>
        <div>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/users">Users</Link> </li>
                <li> <Link to="/contact">Contact</Link> </li>
            </ul>

            <Switch>

                <Route exact path='/' component={App}></Route>
                <Route exact path='/users' component={Apr13Users}></Route>
                <Route path='/users/:id' component={Apr13Users}></Route>
                <Route path='/contact' component={Apr13Contact}></Route>
                <Route component={Apr13NotFound}></Route>

            </Switch>

        </div>
    </Router>
);


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  routing, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
