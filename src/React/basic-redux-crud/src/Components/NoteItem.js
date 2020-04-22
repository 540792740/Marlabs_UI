import React from 'react';
import './NoteItem.style.scss'

const NoteItem  =  ({title, content, onItemClicked}) => {
    return (
        <div className="NoteItem_container"
             role="button"
             onClick={onItemClicked}
        >
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
};

export default NoteItem;
