import React, {Component} from 'react';

class Apr10Property extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name:'React'
        };
        console.log("LifeCycleChild Constructor")
    }


    // When an instance is created and inserted into the Dom
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleChild getDerivedStateFromProps")
        return null;
    }

    componentDidMount() {
        console.log('LifeCycleChild componentDidMount')
        return null;
    }


    render() {
        console.log('LifeCycleChild render')
        return (
            <div>
                <div>LifeCycleParent</div>
            </div>
        );
    }
}


export default Apr10Property;