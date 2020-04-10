import React from 'react';
// import styles from "./Apr_10_appStyle.module.css";

const heading={
    fontSize: '15px',
    color:'blue'
}
function Apr10InlineStyle(props) {
    return (
        <div>
            <h3 style={heading}>Inline</h3>
            <h1 className="error">Error</h1>

            {/*Child module does not work, need to be imported */}
            {/*<h1 className={styles.success}>Success</h1>*/}
        </div>
    );
}

export default Apr10InlineStyle;
