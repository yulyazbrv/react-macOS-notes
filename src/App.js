import { useState, useEffect } from "react";
import "./App.css";
import ListItem from "./components/ListItem/ListItem";
import Workspace from "./components/Workspace/Workspace";
import Folders from "./components/Folders/Folders";

function App() {
  const [notes, setNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);
  const [activeNote, setActiveNote] = useState("");
  const [activeNoteIndex, setActiveNoteIndex] = useState(null);
  const [theme, setTheme] = useState("Light theme");
  const [activeFolder, setActiveFolder] = useState("all")
  const [openFolders, setOpenFolders] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const notes = localStorage.getItem("notes");
    const deletedNotes = localStorage.getItem("deletedNotes");

    if (notes) {
      setNotes(JSON.parse(notes));
    }
    if (deletedNotes) {
      setDeletedNotes(JSON.parse(deletedNotes));
    }
  }, []);

  useEffect(() => {
    if (notes.length) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);

  useEffect(() => {
    if (deletedNotes.length) {
      localStorage.setItem("deletedNotes", JSON.stringify(deletedNotes));
    }
  }, [deletedNotes]);


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

  const showNote = (noteIndex, arrayNotes) => {
    const currentNote = arrayNotes.find((item, index) => {
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
    const delNotes = notes.filter((item, i) => {
      return i === noteIndex
    })

    setNotes(newNotes);
    setDeletedNotes(deletedNotes.concat(delNotes));
    console.log("del notes", deletedNotes);
    setActiveNote('');
  };

  const changeNote = (e) => {
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
    //setActiveNoteIndex(null)
  }

  const restoreNote = (noteIndex) => {
    const newDeletedNotes = deletedNotes.filter((item, i) => {
      return i !== noteIndex;
    });

    const newNotes = deletedNotes.filter((item, i) => {
      return i === noteIndex;
    });

    setNotes(newNotes)
    setDeletedNotes(newDeletedNotes);
  }

  return (
    <div className="main-container">
      {width > 900 &&
        <Folders
          setOpenFolders={setOpenFolders}
          setActiveFolder={setActiveFolder}
          setActiveNote={setActiveNote}
        ></Folders>
      }

      {openFolders ? <Folders
        setOpenFolders={setOpenFolders}
        openFolders={openFolders}
        setActiveFolder={setActiveFolder}
        setActiveNote={setActiveNote}
      ></Folders> : <ListItem
        width={width} 
        setOpenFolders={setOpenFolders} 
        notes={notes} 
        deletedNotes={deletedNotes} 
        activeFolder={activeFolder} 
        showNote={showNote} 
        theme={theme}
      ></ListItem>}
      
      <Workspace
        restoreNote={restoreNote}
        activeFolder={activeFolder}
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
