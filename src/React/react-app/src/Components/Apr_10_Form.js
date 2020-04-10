import React, {Component} from 'react';

class Apr10Form extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username:'CC'
        }
    }
    handleFormChange=(event)=>{
        this.setState ({
            username:event.target.value
        });
        console.log(event.target.value)
    };
    render() {
        return (
            <form>
                <div>
                    <label>Username : </label>
                    <input type="text" value={this.state.username}
                           onChange={this.handleFormChange}
                    />
                </div>
                <div>


                </div>
            </form>
            );
    }
}

export default Apr10Form;