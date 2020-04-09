import React from 'react';

//Example 1
// function Apr_9_Greet(){
//     return <h1>Hello React</h1>
// }
// export default Apr_9_Greet;


//Example 2
// export const Apr_9_Greet = (props) => <div>
//     <h3>Hello {props.name}, My name is : {props.dev}</h3>
//     <div>{props.children}</div>
// </div>;

// Example 3
const Apr_9_Greet = (props) =>{
    const {name, dev} = props;
    return(
        <div>
            <h3>I am {dev}, working{name}</h3>
        </div>
    )
};
export default Apr_9_Greet;
