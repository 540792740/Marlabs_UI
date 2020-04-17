import React from "react";


// Dialog does not care content and logic
function Dialog(props){
    return(
    <div style={{border:'4px solid blue'}}>
        {props.children}
    </div>
    )
}

//Welcome Dialog provide content
function WelcomeDialog(){
    return(
        <Dialog>
            <h3>Welcome</h3>
            <p>Thanks for your using</p>
        </Dialog>
    )
}

function Apr16Conposition(props) {
    return (
        <WelcomeDialog></WelcomeDialog>
    );
}

export default Apr16Conposition;
