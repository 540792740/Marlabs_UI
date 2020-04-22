import React from 'react';
import './inputSelection.style.scss'
import {useDispatch, useSelector} from "react-redux";
import noteActions from "../Redux/actions/noteActions";
import inputActions from "../Redux/actions/inputActions";

const  InputSection = () => {
    const title = useSelector(state =>state.inputs.title);
    const content = useSelector(state =>state.inputs.content);
    const dispatch = useDispatch();
    const addNote = () =>{
        if(title && content){
            dispatch(noteActions.addNote({
                title,
                content,
            }));
            dispatch(inputActions.resetInputs())
        }
        else{alert("Fill")}
    };

    return (
        <div className="inputSection_container">
            <input type="text"
                   placeholder="Note Title"
                   value={title}
                   onChange={e => dispatch(inputActions.setInputTitle(e.target.value))}
            />
            <textarea
                placeholder="Note Content"
                value={content}
                onChange={e => dispatch(inputActions.setInputContent(e.target.value))}
            ></textarea>
            <button onClick={addNote}>Add Note</button>

        </div>
    );
};

export default InputSection;
