import React from 'react';
import './NoteItem.style.scss'

const NoteItem ({title, content, onItemClick}) => {
    return (
        <div className="NoteItem_container"
             role="button"
             onClick={onItemClick}
        >
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
}

export default NoteItem;
