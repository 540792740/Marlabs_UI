import React from 'react';

// class Apr9Event extends Component {
function Apr9Event(){
    function clickHandler(para){

        console.log(para);
        console.log("Button Clicked" )

    }
    return (
        <div>
            <input type="text"  id={"x"}/>
            <button onClick={()=>{clickHandler(document.getElementById("x").value)}}>Click</button>
        </div>


    )
}

export default Apr9Event;