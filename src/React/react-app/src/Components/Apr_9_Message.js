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
                Welcome Visitor
            </div>
        )
    }
}

export default Apr_9_Message;