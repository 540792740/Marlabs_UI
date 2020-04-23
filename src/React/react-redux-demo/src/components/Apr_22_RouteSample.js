import React from 'react';
import {BrowserRouter, Link, Redirect, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from "./store/user.redux";

function Home(){
    return <div>
        <h3>List of Course</h3>
        <ul>
            <li><Link to="/detail/web">Web Architect</Link></li>
            <li><Link to="/detail/python">Python Architect</Link></li>
        </ul>
        Home
    </div>
}
function About(){
    return (
        <div>About
            <h3>Information Center</h3>
            <div>
                <Link to="/about/me">Person Information</Link>
                <Link to="/about/order">Order Tracking</Link>
            </div>
            <Switch>
                <Route path="/about/me" component={()=> <div>Me</div>}/>
                <Route path="/about/order" component={()=> <div>Order</div>}/>
                {/*Default Naigation*/}
                <Redirect to="/about/me"></Redirect>
            </Switch>
        </div>
    )
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

// Private Route
// <P.R. component={about} path="/about"...>
const PrivateRoute = connect(
    state => ({isLogin: state.user.isLogin})
)(
    ({component: Comp, isLogin, ...rest})=> {
        // Verify
        //render: dynamic render
        return(
            <Route {...rest} render={
                props =>
                    isLogin? <Comp></Comp> :
                        <Redirect to={{pathname:"./login",
                            state:{redirect: props.location.pathname}}}>
                        </Redirect>
            }></Route>
        )
    });

//Login Component
const Login = connect(
    state => ({isLogin: state.user.isLogin,
    loading: state.user.loading
    }), {login})(
    function ({location, isLogin, login, loading}){
        const redirect = location.state.redirect || "/";
        if(isLogin){
            return <Redirect to={redirect}></Redirect>
        }
        // Else login page
        return(
            <div>
                <p>Login</p> <hr/>
                <button onClick={login}>Login</button>
            </div>
        )
    });


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
                        <Route path="/detail/:course" component={Detail}></Route>
                        <PrivateRoute path="/about" component={About}></PrivateRoute>
                        <Route path="/login" component={Login}></Route>
                        {/*404 has no path, can be matched*/}
                        <Route component={NoMatch}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Apr22RouteSample;
