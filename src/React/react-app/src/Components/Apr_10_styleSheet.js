import React from 'react';
import './Apr_10_myStyle.css'

function Apr10StyleSheet(props) {
    let className = props.primary ? 'primary': '';

    return (
        <div className={className}>
            styleSheet
        </div>
    );
}

export default Apr10StyleSheet;