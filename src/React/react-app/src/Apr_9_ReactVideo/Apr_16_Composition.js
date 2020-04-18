import React from "react";


// Dialog does not care content and logic
function Dialog(props){
    return(
    <div style={{border: `4px solid ${props.color || 'blue'}`}}>
        {props.children}
        <div className="footer">
            {props.footer}
        </div>
    </div>
    )
}

//Welcome Dialog provide content
// function WelcomeDialog(props){
//     return(
//         <Dialog {...props}>
//             <h3>Welcome</h3>
//             <p>Thanks for your using</p>
//         </Dialog>
//     )
// }

// const Api = {
//     getUser(){
//         return {name:'Jerry', age:20};
//     }
// };

// function Fetcher(props){
//     const user = Api[props.name]();
//     return props.children(user)
// }
//
// function Filter({children, type}) {
//     return(
//         <div>
//            { React.Children.map(children, child=>{
//                 if (child.type !== type){
//                     return;
//                 }
//                 return child
//         })}
//         </div>
//     )
// }

//Change children using RadioGroup
function RadioGroup(props){
    return <div>
        {React.Children.map(props.children, child=>{
            // Clone
            return React.cloneElement(child, {name:props.name});
        })}
    </div>
}

function Radio({children, ...rest}) {
    return(
        <label>
            <input type="radio" {...rest}/>
        </label>
    )
}

function Apr16Composition() {
    return (
        // <WelcomeDialog color="green"></WelcomeDialog>

        //Example 1
        // <Fetcher name="getUser">
        //     {({name, age})=>(
        //         <p>
        //             {name} - {age}
        //         </p>
        //     )}
        // </Fetcher>

        //Example 2 Filter the tag
        // <div>
        //     <Filter type="p">
        //         <h3>React</h3>
        //         <p>React is good</p>
        //         <h3>Vue</h3>
        //         <p>Vue is good</p>
        //     </Filter>
        //
        // </div>

        //Example 3 RadioGroup
        <div>
            <RadioGroup name="mvvm">
                <Radio value="Vue">Vue</Radio>
                <Radio value="React">React</Radio>
                <Radio value="Angular">Angular</Radio>
            </RadioGroup>
        </div>



    )
}

export default Apr16Composition;
