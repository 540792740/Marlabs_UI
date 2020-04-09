import React, {Component} from 'react'

// example 1
/*
class Apr_9_Welcome extends Component{
    render(){
        return <h1>Hello from from Apr_9_Welcome.js</h1>
    }
}
export default Apr_9_Welcome
*/

// example 2

class Apr_9_Welcome extends Component{
    render(){
        return(
    <div>
        <h3>Hello {this.props.name}, My name is : {this.props.dev}</h3>
        <div>{this.props.children}</div>
    </div>
    )}
}
export default Apr_9_Welcome;