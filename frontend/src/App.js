import './App.css';
import Note from './Note';
import { AppBar, Tabs, Tab, Box, ClickAwayListener } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState, useRef } from 'react';

const ActiveTabContent = styled(Box)`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 16px;
`;

function App() {
  const [notes, setNotes] = useState([]);
  const [tabValue, setTabValue] = useState(0);
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');

  const topicInputRef = useRef();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleAddNote = () => {
    if (topic.trim() === '' && description.trim() === '') return;

    setNotes([
      ...notes,
      {
        id: new Date().getTime(),
        title: topic,
        content: description,
      }
    ]);

    setTopic('');
    setDescription('');
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAddNote();
    }
  };

  return (
    <div className="App">
      <AppBar position="static" color='default'>
        <Tabs className="custom-tabs" value={tabValue} onChange={handleTabChange} indicatorColor="primary" textColor="primary" variant="fullWidth">
          <Tab className="custom-tab" label="Notes" />
          <Tab className="custom-tab" label="Topics" />
          <Tab className="custom-tab" label="Settings" />
        </Tabs>
      </AppBar>
      {tabValue === 0 && (
        <ActiveTabContent>
          <div className='input-container'>
            <ClickAwayListener onClickAway={handleAddNote}>
              <form action="">
                <input
                  inputRef={topicInputRef}
                  label="Topic"
                  placeholder='Topic'
                  value={topic}
                  onChange={e => setTopic(e.target.value)}
                  fullWidth
                  margin='normal'
                />
                <input
                  label="Description"
                  placeholder='Write a note...'
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  fullWidth
                  multiline
                  rows={4}
                  margin='normal'
                  onKeyDown={handleEnterKeyPress}
                />
              </form>
            </ClickAwayListener>
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
