import React, {Component} from 'react';
import Apr10Property from "./Apr_10_LifeCycleChild";

class Apr10LifeCycleParent extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name:'React'
        };
        console.log("LifeCycleParent Constructor")
    }


    // When an instance is created and inserted into the Dom
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleParent getDerivedStateFromProps")
        return null;
    }

    componentDidMount() {
        console.log('LifeCycleParent componentDidMount')
        return null;
    }


    render() {
        console.log('LifeCycleParent render')
        return (
            <div>
                <div>LifeCycleChild</div>
                <Apr10Property></Apr10Property>
            </div>
        );
    }
}


export default Apr10LifeCycleParent;