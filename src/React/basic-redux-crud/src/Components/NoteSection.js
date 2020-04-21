import React from 'react';
import './NoteSection.style.scss'
import NoteItem from './NoteItem'

function NoteSection(props) {
    return (
        <div className="NoteSection_container">
            <NoteItem title="note Title" content= "Note Content"></NoteItem>
            <NoteItem title="note Title" content= "Note Content"></NoteItem>
            <NoteItem title="note Title" content= "Note Content"></NoteItem>
            <NoteItem title="note Title" content= "Note Content"></NoteItem>
            <NoteItem title="note Title" content= "Note Content"></NoteItem>
            <NoteItem title="note Title" content= "Note Content"></NoteItem>
        </div>
    );
}

export default NoteSection;
