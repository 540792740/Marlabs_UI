import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'

function Home(params){
    return <div>
        <h3>List of Course</h3>
        <ul>
            <li><Link to="/detail/web">Web Architect</Link></li>
            <li><Link to="/detail/python">Python Architect</Link></li>
        </ul>
        Home
    </div>
}
function About(params){
    return <div>About
        <h3>Information Center</h3>
        <div>
            <Link to="about/me">Person Information</Link>
            <Link to="about/order">Order Tracking</Link>
        </div>
        <Switch>
            <Route path="about/me" component={()=>(<div>Me</div>)}></Route>
            <Route path="about/order" component={()=>(<div>Order</div>)}></Route>
        </Switch>
    </div>
}
function Detail(props){
    // 1. history: nav
    // 2. match: information
    // 3. location: url information
    console.log(props);
    return <div>Current Course: {props.match.params.course}
    <button onClick={props.history.goBack}>Back</button>
    </div>
}
function NoMatch({location}){
    return <div>404, {location.pathname} does not exist</div>
}


function Apr22RouteSample(props) {
    return (
        <div>
            <BrowserRouter>
                <div>
                    {/*Navigation Link*/}
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                    </div>
                    {/*Can only be matched one by using Switch*/}
                    <Switch>
                        {/*Router: router is component*/}
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/detail/:course" component={Detail}></Route>
                        {/*404 has no path, can be matched*/}
                        <Route component={NoMatch}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Apr22RouteSample;
