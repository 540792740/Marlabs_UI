import React, {Component} from "react";
import logo from "../logo.svg";

class ReactVideo extends Component {
    render() {
        const jsx = <p>Hello jxs</p>
        return (
            <div>
                {/*property*/}
                <img src={logo} style={{width:'200px'}}/>

                {/*Basic Expression*/}
                {jsx}
            </div>
        );
    }
}


export default ReactVideo;

