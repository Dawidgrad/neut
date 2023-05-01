import './App.css';
import Note from './Note';
import { AppBar, Tabs, Tab, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';

const ActiveTabContent = styled(Box)`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  padding: 16px;
  margin-top: 16px;
`;

function App() {
  const [notes, setNotes] = useState([]);
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleAddNote = () => {
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
      <AppBar position="static" color='default'>
        <Tabs value={tabValue} onChange={handleTabChange} indicatorColor="primary" textColor="primary" variant="fullWidth">
          <Tab label="Notes" />
          <Tab label="Topics" />
          <Tab label="Settings" />
        </Tabs>
      </AppBar>
      {tabValue === 0 && (
        <ActiveTabContent>
          <div className='buttons-container'>
            <button className='add-note-button' onClick={handleAddNote}>
              Add note
            </button>
          </div>
          <div className='notes-container'>
            {notes.map(note => (
              <Note key={note.id} title={note.title} content={note.content} />
            ))}
          </div>
        </ActiveTabContent>
      )}
      {tabValue === 1 && (
        <ActiveTabContent>
          <h1>Topics</h1>
        </ActiveTabContent>
      )}
      {tabValue === 2 && (
        <ActiveTabContent>
          <h1>Settings</h1>
        </ActiveTabContent>
      )}
      
    </div>
  )
}

export default App;
