import React, {Component} from 'react';
import Apr21Header from "./Apr_21_Header";
import Apr21Footer from "./Apr_21_Footer";

class Apr21Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {name:"Bill"}
    }
    getVal(pr){
        return 'getVal' + pr
    }
    render() {
        setTimeout(()=>{
            this.setState({name:'Alex'})
        },2000);
        return (
            <div>
                {this.state.name}
                <Apr21Header></Apr21Header>
                <Apr21Footer></Apr21Footer>
            </div>
        );
    }
}

export default Apr21Layout;
