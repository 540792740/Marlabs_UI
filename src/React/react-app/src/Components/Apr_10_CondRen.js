import React, {Component} from 'react';

class Apr10CondRen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn : true
        };

    }

    // example 1
    // render() {
    //     if(this.state.isLoggedIn){
    //         return(
    //             <div>Welcome React</div>
    //         )
    //     }
    //     else {
    //         return (
    //             <div>
    //                 <div>Welcome React</div>
    //                 <div>Welcome React</div>
    //             </div>
    //         );
    //     }
    // }

    // example 2
    // render() {
    //     let message
    //     if(this.state.isLoggedIn){
    //         message = <div>Welcome React</div>
    //     }else{
    //         message = <div>Welcome Guest</div>
    //     }
    //     return (
    //         <div>
    //             {message}
    //         </div>
    //     );
    // }

    // Example 3
    render() {
        return (
            this.state.isLoggedIn? <div>Welcome React</div> : <div>Welcome Guest</div>
        );
    }
}

export default Apr10CondRen;