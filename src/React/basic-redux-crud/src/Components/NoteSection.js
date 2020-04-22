import React from 'react';
import './NoteSection.style.scss'
import NoteItem from './NoteItem'
import {useSelector} from "react-redux";

function NoteSection() {
    const notes = useSelector ( state => state.notes.notes);

    const onItemClicked = (item) =>{

    }
    if(notes.length === 0){
        return(
            <div className="NoteSection_container_empty">
                <p>There is no notes yet, please add one.</p>
            </div>
        )
    }
    return (
        <div className="NoteSection_container">
            {notes.map((item, index) =>(
                <NoteItem
                    title={item.title}
                    content= {item.content}
                    onItemClicked={() => {

                    }}
                />
            ))}
            {/*<NoteItem title="note Title" content= "Note Content"></NoteItem>*/}
            {/*<NoteItem title="note Title" content= "Note Content"></NoteItem>*/}
            {/*<NoteItem title="note Title" content= "Note Content"></NoteItem>*/}
            {/*<NoteItem title="note Title" content= "Note Content"></NoteItem>*/}
            {/*<NoteItem title="note Title" content= "Note Content"></NoteItem>*/}
        </div>
    );
}

export default NoteSection;
