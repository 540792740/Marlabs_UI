import React from 'react';
import './NoteItem.style.scss'

function NoteItem({title, content}) {
    return (
        <div className="NoteItem_container">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
}

export default NoteItem;
