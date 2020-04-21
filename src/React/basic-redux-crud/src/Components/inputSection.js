import React from 'react';
import './inputSelection.style.scss'

function InputSection(props) {
    return (
        <div className="inputSection_container">
            <input type="text" placeholder="Note Title"/>
            <textarea placeholder="Note Content"></textarea>
            <button>Add Note</button>

        </div>
    );
}

export default InputSection;
