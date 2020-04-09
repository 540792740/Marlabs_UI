import React from "react";

const Hello = () =>{
    // return (
    //     <div>
    //         <h1>Hello React from Apr_9_Hello.js</h1>
    //     </div>
    return React.createElement('div', {id:'name',className:'styles'},
        React.createElement('h3', null, 'Hello React from Apr_9_Hello.js')
    )

};

export default Hello