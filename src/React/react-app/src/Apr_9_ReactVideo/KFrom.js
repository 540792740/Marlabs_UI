import React, {Component} from 'react';
import {Button, Input} from 'antd';

//Create HOC: extend form: add event, data collection and validation
function KFromCreate(Comp){
    return class extends React.Component{
        constructor(props) {
            super(props);

            this.options = {};
            this.state = {};
        }

        handleChange = e =>{
            const {name, value} = e.target;
            console.log(name, value);

            this.setState({[name]:value}, ()=>{
                //Call back function, make sure the value changed and then validate
                this.validateField(name);
            })
        };

        validateField = field =>{
            // 1. Get Rule of validation
            const rules = this.options[field].rules;

            //Any case fail, return false
            const ret = !rules.some(rule =>{
                if(rule.required){
                    if (!this.state[field]){
                        // Fail
                        this.setState({
                            [field + 'Message']: rule.message
                        });
                        return true;
                    }
                }
            });
            if(ret){
               this.setState({
                   [field + 'Message'] : ''
               })
            }
            return ret};

        //Validate all parts
        validate = cb =>{
          // map all parts validation
            const rets = Object.keys(this.options).map(field =>
              this.validateField(field)
          );
            const ret = rets.every(v => v === true);
            cb(ret)
        };

        // Create input decorator
        getFieldDec = (field, option) =>{
            //Save input config
            this.options[field] = option;
            return InputComp => (
                <div>
                    {React.cloneElement(InputComp,{
                        name: field,
                        value: this.state[field] || '',
                        onChange: this.handleChange
                    })}
                </div>
            )
        };
        render(){
            return <Comp getFieldDec = {this.getFieldDec}></Comp>
        }
    }
}

@KFromCreate
class KFrom extends Component {
    onSubmit = ()=>{
        console.log("Submit ******")
    };

    render() {
        const {getFieldDec} = this.props;
        return (
            <div>
                {getFieldDec('Username', {rules:[{required:true, message:"User required"}]
                })( <Input/>)}

                {getFieldDec('Password', {rules:[{required:true, message:"User required"}]
                })( <Input type="password"/>)}

                <Button onClick={this.onSubmit}>Login </Button>
            </div>
        );
    }
}

export default KFrom;
