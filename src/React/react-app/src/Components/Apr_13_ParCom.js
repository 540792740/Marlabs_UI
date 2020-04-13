import React, {Component} from 'react';
import Apr13RegCom from "./Apr_13_RegCom";
import Apr13ProCom from "./Apr_13_ProCom";

class Apr13ParCom extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'React'
        }
    }
    componentWillUnmount () {
        setInterval(()=>{
            this.setState({
                name:'React'
            })
        }, 2000)
    }

    render() {
        console.log("*******************parent************");
        return (
            <div>
                Parent Component
                <Apr13RegCom name={this.state.name}></Apr13RegCom>
                <Apr13ProCom name={this.state.name}></Apr13ProCom>
            </div>
        );
    }
}

export default Apr13ParCom;