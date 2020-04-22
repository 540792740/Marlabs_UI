import React from 'react';
import './NoteSection.style.scss'
import NoteItem from './NoteItem'
import {useDispatch, useSelector} from "react-redux";
import inputActions from "../Redux/actions/inputActions";

function NoteSection() {
    const notes = useSelector ( state => state.notes.notes);
    const dispatch = useDispatch();
    const onItemClicked = (item, index) =>{
        dispatch(inputActions.setInputId(index));
        dispatch(inputActions.setInputTitle(item.title));
        dispatch(inputActions.setInputContent(item.content))
    };
    if(notes.length === 0){
        return(
            <div className="NoteSection_container_empty">
                <p>There is no notes yet, please add one.</p>
            </div>
        )
    }
    return (
        <div className="NoteSection_container">
            {notes.map((item, index) =>{
                if(item){
                    return (
                        <NoteItem
                            title={item.title}
                            content= {item.content}
                            onItemClicked={() => {
                                onItemClicked(item, index);
                        }}
                    />
                    );
                }
                return null;
            })}
        </div>
    );
}

export default NoteSection;
