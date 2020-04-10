import React, {Component} from 'react';

class Apr10Form extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username:'CC',
            comment: 'Cris',
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
    }
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


            </form>
            );
    }
}

export default Apr10Form;