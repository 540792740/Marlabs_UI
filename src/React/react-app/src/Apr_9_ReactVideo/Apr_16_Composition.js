import React from "react";


// Dialog does not care content and logic
function Dialog(props){
    return(
    <div style={{border: `4px solid ${props.color || 'blue'}`}}>
        {props.children}
    </div>
    )
}

//Welcome Dialog provide content
function WelcomeDialog(props){
    return(
        <Dialog {...props}>
            <h3>Welcome</h3>
            <p>Thanks for your using</p>
        </Dialog>
    )
}

function Apr16Composition() {
    return (
        <WelcomeDialog color="green"></WelcomeDialog>
    );
}

export default Apr16Composition;
