import React, {Component} from 'react'

class Apr_9_Message extends Component{
    constructor() {
        super();
        this.state = {
            message : 'Welcome Message: Welcome visitor'
        }
    }

    render(){
        return(
            <div>
                Welcome <h3>{this.state.message}</h3>
            </div>
        )
    }
}

export default Apr_9_Message;