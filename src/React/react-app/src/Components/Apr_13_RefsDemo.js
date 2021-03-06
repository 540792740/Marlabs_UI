import React, {Component} from 'react';

class Apr13RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.username = "React";
        this.inputRef = React.createRef();
        this.cdRef = null;
        this.setCbRef = (element)=> {
            this.cdRef = element;
        }
    }

    componentDidMount() {
        // console.log(this.inputRef)
        this.inputRef.current.focus();
        if(this.cdRef){
            this.cdRef.value = "CD Ref";
            this.cdRef.select();
        }
    }

    clickHandler= ()=>{
        alert(this.inputRef.current.value)
    };

    handleFocus = (event)=>{
        event.target.select();
    };
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setCbRef}/>
                <input type="text" value={this.username}  onFocus={this.handleFocus}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default Apr13RefsDemo;