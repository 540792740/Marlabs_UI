import React from 'react';
import './inputSelection.style.scss'
import {useDispatch} from "react-redux";

function InputSection(props) {
    const dispatch = useDispatch;
    return (
        <div className="inputSection_container">
            <input type="text" placeholder="Note Title"/>
            <textarea placeholder="Note Content"></textarea>
            <button>Add Note</button>

        </div>
    );
}

export default InputSection;
