import { useState } from 'react';
import './App.css';
import ListItem from './components/ListItem/ListItem';
import Workspace from './components/Workspace/Workspace';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [notes, setNotes] = useState([]); 
  const [activeNote, setActiveNote] = useState('')
  const [activeNoteIndex, setActiveNoteIndex] = useState(null)
  const [theme, setTheme] = useState('Dark theme');

  const parsedNoteName = (text) => {
    console.log("Active note ", activeNote);
    var spaceCode = text.indexOf('\n')
    return text.substr(0, spaceCode);
  }

  const parsedNoteContent = (text) => {
    var spaceCode = text.indexOf('\n')
    return text.substr(spaceCode);
  }

  const addNote = () => {
    if(activeNote.length === 0) {
      setNotes([...notes, { name: 'Новая заметка', date: new Date().toLocaleDateString(), content:'...'}]);
    }
    else{
      setNotes([...notes, { name: parsedNoteName(activeNote), date: new Date().toLocaleDateString(), content: parsedNoteContent(activeNote)}]);
    }
    console.log("NOTES ", notes);
  }

  const changeNote = (noteIndex) => {
    const currentNote = notes.find((item,index) => {
      return index === noteIndex
    })
    if(currentNote){
      //setActiveNote('');
      setActiveNoteIndex(noteIndex)

      console.log("Active note1 " , activeNote);
      setActiveNote(currentNote.name)
      console.log("Active note2 " , activeNote);
      //setActiveNoteIndex(null);
      console.log("CurrentNote", JSON.stringify(currentNote));
    }
  }

  const deleteNote = (noteIndex) => {
    const newNotes = notes.filter((item, i) => {
      return i !== noteIndex;
    });
    setNotes(newNotes);
  }

  return (
      <div className='main-container'>
        <ListItem notes={notes} changeNote={changeNote} theme={theme}></ListItem>
        <Workspace theme={theme} setTheme={setTheme} activeNoteIndex={activeNoteIndex} deleteNote={deleteNote} addNote={addNote} activeNote={activeNote} setActiveNote={setActiveNote}></Workspace>
      </div>
  );
}

export default App;
