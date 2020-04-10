import React, {Component} from 'react';

class Apr10Form extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username:'Hi, ',
            comment: 'I work in ',
            phone:'Google'

        }
    }
    handleFormChange=(event)=>{
        this.setState ({
            username:event.target.value
        });
        console.log(event.target.value)
    };

    handleCommonChange =(event)=>{
        this.setState ({
            comment:event.target.value
        }, ()=>{
            console.log(this.state.comment)

        });

    };
    handlePhoneChange =(event)=> {
        this.setState({
            phone: event.target.value
        }, () => {
            console.log(this.state.phone)

        });
    };

    handleSubmit =(event)=> {
        alert(`${this.state.username} ${this.state.comment} ${this.state.phone} `);
        event.preventDefault();
        };
    render() {
        // this.refs.a.getInputDom
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username : </label>
                    <input type="text" value={this.state.username}
                           onChange={this.handleFormChange}
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comment} onChange={this.handleCommonChange} cols="30" rows="10"></textarea>
                </div>
                <div>
                    <label>Phones</label>
                    <select value={this.state.phone} onChange={this.handlePhoneChange}>
                        <option value="Sumsung">Samngsung</option>
                        <option value="LG">LG</option>
                        <option value="Google">Google</option>
                        <option value="Facebook">Facebook</option>
                    </select>
                </div>
                <button type="submit">Submit</button>

            </form>
            );
    }
}

export default Apr10Form;