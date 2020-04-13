import React, {Component} from 'react';

class Apr13Contact extends Component {
    onSubmit = () =>{
        this.props.history.push("/")
};

    render() {
        return (
            <div>
                <form>
                    <input type="name" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <button onClick={this.onSubmit}>Submit</button>


                </form>
            </div>
        );
    }
}

export default Apr13Contact;