import React from 'react';
import './NoteSection.style.scss'
import NoteItem from './NoteItem'
import {useSelector} from "react-redux";

function NoteSection(props) {
    const notes = useSelector ( state => state.notes.notes);
    return (
        <div className="NoteSection_container">
            {notes.map((item, index) =>(
                <NoteItem
                    title={item.title}
                    content= {item.content/}>
            ))}
            <NoteItem title="note Title" content= "Note Content"></NoteItem>
            <NoteItem title="note Title" content= "Note Content"></NoteItem>
            <NoteItem title="note Title" content= "Note Content"></NoteItem>
            <NoteItem title="note Title" content= "Note Content"></NoteItem>
            <NoteItem title="note Title" content= "Note Content"></NoteItem>
        </div>
    );
}

export default NoteSection;
