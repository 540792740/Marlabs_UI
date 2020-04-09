import React from 'react';

//Example 1
// function Apr_9_Greet(){
//     return <h1>Hello React</h1>
// }
// export default Apr_9_Greet;


//Example 2
export const Apr_9_Greet = (props) => <div>
    <h1>Hello {props.name}, My name is : {props.dev}</h1>
    <div>{props.children}</div>
</div>;