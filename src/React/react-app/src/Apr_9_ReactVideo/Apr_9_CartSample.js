import React, {Component} from 'react';

class Apr9CartSample extends Component {

    //Initialize always in constructor
    constructor(props) {
        super(props);
        this.title = "title";
        this.state = {
            goods:[
                {id:1, text:'Web full stack'},
                {id:2, text:'Web UI'}
            ]

        };
    }

    render() {
        // const title = this.props.title ? <h1>this.props.title</h1>: null;


        return (
            <div>
                {/*Conditional Rendering*/}
                {this.title &&  <h3>{this.title}</h3>}

                {/*List Rendering*/}
                <ul>
                    {this.state.goods.map(good=>
                        <li key = {good.id}> {good.text}</li>
                    )}
                </ul>

            </div>
        );
    }
}

Apr9CartSample.propTypes = {};

export default Apr9CartSample;