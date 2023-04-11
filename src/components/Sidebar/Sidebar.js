import React from "react";
import "./Sidebar.css";
import deleteIcon from "./images/deleteYellow2.png";
import editIcon from "./images/makeNote.png";
import editIconDark from "./images/addYellow.png";
import deleteIconDark from "./images/deleteDark.png";

const SideBarForAllNotes = (props) => {
  const { addNote, deleteNote, activeNoteIndex, theme, setTheme } = props;
  return (
    <div className="nav-bar">
      <div
        className="container-delete"
        onClick={() => deleteNote(activeNoteIndex)}
      >
        <img alt="" src={theme === "Light theme" ? deleteIcon : deleteIconDark}></img>
      </div>
      <div className="container-new-note" onClick={addNote}>
        <img alt="" src={theme === "Light theme" ? editIconDark : editIcon}></img>
      </div>
      <div>
        <button
          className={
            theme === "Light theme" ? "theme-button" : "theme-button-dark"
          }
          onClick={() => {
            theme === "Dark theme"
              ? setTheme("Light theme")
              : setTheme("Dark theme");
          }}
        >
          {theme}
        </button>
      </div>
    </div>
  );
}

const SidebarForDeletedNotes = (props) => {
  const { addNote, deleteNote, activeNoteIndex, theme, setTheme, restoreNote } = props;
  return (
    <div className="nav-bar">
      <div
        className="container-delete"
        onClick={() => deleteNote(activeNoteIndex)}
      >
        <img alt="" src={theme === "Light theme" ? deleteIcon : deleteIconDark}></img>
      </div>
      <div className="container-new-note" onClick={addNote}>
        <button 
          className={
            theme === "Light theme" ? "theme-button" : "theme-button-dark"
          }
          onClick={() => restoreNote(activeNoteIndex)}
          >Восстановить</button>
      </div>
      <div>
        <button
          className={
            theme === "Light theme" ? "theme-button" : "theme-button-dark"
          }
          onClick={() => {
            theme === "Dark theme"
              ? setTheme("Light theme")
              : setTheme("Dark theme");
          }}
        >
          {theme}
        </button>
      </div>
    </div>
  );
}

const Sidebar = (props) => {
  const { addNote, deleteNote, activeNoteIndex, theme, setTheme, activeFolder, restoreNote } = props;
  if(activeFolder === "all"){
    return <SideBarForAllNotes addNote={addNote} deleteNote={deleteNote} activeNoteIndex={activeNoteIndex} theme={theme} setTheme={setTheme} />
  }else {
    return <SidebarForDeletedNotes restoreNote={restoreNote} addNote={addNote} deleteNote={deleteNote} activeNoteIndex={activeNoteIndex} theme={theme} setTheme={setTheme} />
  }
};

export default Sidebar;
