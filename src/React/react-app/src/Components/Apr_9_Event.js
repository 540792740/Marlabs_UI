import React, {Component} from 'react';

// class Apr9Event extends Component {
function Apr9Event(){
    function clickHandler(){
        console.log("Button Clicked")
    }
    return (
        <div>
            <button onClick={()=>{clickHandler()}}>Click</button>
        </div>
    )
}

export default Apr9Event;