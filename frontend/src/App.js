import './App.css';
import Note from './Note';
import React, { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    setNotes([
      ...notes,
      {
        id: new Date().getTime(),
        title: 'New note',
        content: 'This is a new note.'
      }
    ]);
  };

  return (
    <div className="App">
      <div className='buttons-container'>
        <button className='add-note-button' onClick={addNote}>
          Add note
        </button>
      </div>
      <div className='notes-container'>
        {notes.map(note => (
          <Note key={note.id} title={note.title} content={note.content} />
        ))}
      </div>
    </div>
  )
}

export default App;
