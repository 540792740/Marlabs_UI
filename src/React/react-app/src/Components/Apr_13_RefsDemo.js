import React, {Component} from 'react';

class Apr13RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.inputRef)

    }


    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
            </div>
        );
    }
}

export default Apr13RefsDemo;