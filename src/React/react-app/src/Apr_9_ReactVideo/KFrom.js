import React, {Component} from 'react';
import {Button, Input} from 'antd';

//Create HOC: extend form: add event, data collection and validation
function KFromCreate(Comp){
    return class extends React.Component{
        render(){
            return <Comp></Comp>
        }
    }
}



@KFromCreate
class KFrom extends Component {
    render() {
        return (
            <div>
                <Input/>
                <Button>Login </Button>
            </div>
        );
    }
}



export default KFrom;
