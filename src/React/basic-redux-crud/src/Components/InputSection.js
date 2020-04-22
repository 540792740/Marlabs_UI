import React from 'react';
import './inputSelection.style.scss'
import {useDispatch, useSelector} from "react-redux";
import noteActions from "../Redux/actions/noteActions";
import inputActions from "../Redux/actions/inputActions";

const  InputSection = () => {
    const title = useSelector(state =>state.inputs.title);
    const id = useSelector(state =>state.inputs.id);
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
        else{alert("Fill Empty")}
    };

    const updateNote = () =>{
        if(title && content){
            dispatch(noteActions.updateNote(id,{
                title, content
            }))
        }
        dispatch(inputActions.resetInputs())
    };

    const deleteNote = () =>{
        dispatch(noteActions.deleteNote(id))
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
            <div className="inputSection_container_btnWrapper">
                <button onClick={id === -1 ? addNote : updateNote}>{id === -1 ? "Add Note" : "Update node"}Add Note</button>
                {id !== -1 && <button onClick={deleteNote} style={{marginLeft: '1em',backgroundColor:'red'}}>Delete Note</button>}
            </div>
            </div>

    );
};

export default InputSection;
