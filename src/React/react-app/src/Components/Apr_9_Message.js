import React, {Component} from 'react'
/*
class Apr_9_Message extends Component{
    constructor() {
        super();
        this.state = {
            message : 'Welcome Message: Welcome visitor'
        }
    }
    changeMessage(){
        this.setState({
            message: " The New Message"
        })
    }

    render(){
        return(
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={()=>{this.changeMessage()}}>Click it to change</button>
            </div>
        )
    }
}

export default Apr_9_Message;


 */

class Apr_9_Message extends Component{
    render(){
        const {name, dev} = this.props
        return <h1>I am {dev}, working on {name}</h1>
    }
}
export default Apr_9_Message

