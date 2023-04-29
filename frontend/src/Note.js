import React from 'react';
import './Note.css';

const Note = ({ title, content }) => {
    return (
        <div className="note">
            <input
                type="text"
                className="note-title"
                value={title}
                placeholder="Title"
                readOnly
            />
            <textarea
                className="note-content"
                value={content}
                placeholder="Take a note..."
                readOnly
            />
        </div>
    );
}

export default Note;