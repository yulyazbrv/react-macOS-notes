import { useState } from "react";
import "./App.css";
import ListItem from "./components/ListItem/ListItem";
import Workspace from "./components/Workspace/Workspace";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState("");
  const [activeNoteIndex, setActiveNoteIndex] = useState(null);
  const [theme, setTheme] = useState("Light theme");

  const parsedNoteName = (text) => {
    var spaceCode = text.indexOf("\n");
    return text.substr(0, spaceCode);
  };

  const parsedNoteContent = (text) => {
    var spaceCode = text.indexOf("\n");
    return text.substr(spaceCode);
  };

  const addNote = () => {
    if (activeNote.length === 0) {
      setNotes([
        ...notes,
        {
          name: "Новая заметка",
          date: new Date().toLocaleDateString(),
          content: "...",
        },
      ]);
    } else {
      setNotes([
        ...notes,
        {
          name: parsedNoteName(activeNote),
          date: new Date().toLocaleDateString(),
          content: parsedNoteContent(activeNote),
        },
      ]);
    }
    setActiveNoteIndex(null)
    setActiveNote('')
    console.log("NOTES ", notes);
  };

  const showNote = (noteIndex) => {
    const currentNote = notes.find((item, index) => {
      return index === noteIndex;
    });
    if (currentNote) {
      setActiveNoteIndex(noteIndex)
      setActiveNote(`${currentNote.name}${currentNote.content}`);
    }
  };

  const deleteNote = (noteIndex) => {
    const newNotes = notes.filter((item, i) => {
      return i !== noteIndex;
    });
    setNotes(newNotes);
    setActiveNote('');
  };

  const changeNote = (e) => {
    console.log("e", e);
    const newNotes = notes.map((item, index) => {
      if (index === activeNoteIndex) {
        return {name: parsedNoteName(e),
                date: new Date().toLocaleDateString(),
                content: parsedNoteContent(e)}
      }
      else{
        return item
      }
    })
    setNotes(newNotes)
    setActiveNoteIndex(null)
  }

  return (
    <div className="main-container">
      <ListItem notes={notes} showNote={showNote} theme={theme}></ListItem>
      <Workspace
        theme={theme}
        setTheme={setTheme}
        activeNoteIndex={activeNoteIndex}
        deleteNote={deleteNote}
        addNote={addNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        changeNote={changeNote}
      ></Workspace>
    </div>
  );
}

export default App;
