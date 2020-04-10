import React from 'react';

function Apr10ChildComponent(props) {


    return (
        <div>
            <button onClick={()=>{props.greetHandle('child')}}>Greet Parent</button>
        </div>
    );
}

export default Apr10ChildComponent;