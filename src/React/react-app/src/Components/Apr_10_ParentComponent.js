import React, {Component} from 'react';
import Apr10ChildComponent from "./Apr_10_childComponent";

class Apr10ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state= {
            parentName: 'Parent'
        };
        this.greetParent = this.greetParent.bind(this);
    }
    greetParent(childValue){
        alert(`Hello ${this.state.parentName} from ${childValue}`)
    }
    render() {
        return (
            <div>
                <Apr10ChildComponent greetHandle={this.greetParent}></Apr10ChildComponent>
            </div>
        );
    }
}

export default Apr10ParentComponent;