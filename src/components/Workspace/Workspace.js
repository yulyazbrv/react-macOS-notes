import React from "react";
import "./Workspace.css";
import Sidebar from "../Sidebar/Sidebar";

const Workspace = (props) => {
  const {
    activeNote,
    setActiveNote,
    addNote,
    activeNoteIndex,
    deleteNote,
    theme,
    setTheme,
    changeNote,
    activeFolder,
    restoreNote
  } = props;

  return (
    <div
      className={
        theme === "Light theme" ? "container-editor" : "container-editor-dark"
      }
    >
      <Sidebar
        deleteNote={deleteNote}
        addNote={addNote}
        activeNoteIndex={activeNoteIndex}
        theme={theme}
        setTheme={setTheme}
        activeFolder={activeFolder}
        restoreNote={restoreNote}
      ></Sidebar>
      <div className="note-pad">
        <div
          id="contentEditable-div"
          contentEditable="true"
          className={theme === "Light theme" ? "editorNote" : "editorNote-dark"}
          dangerouslySetInnerHTML={{__html: activeNote}}
          onBlur={(e) => {
            if(activeNoteIndex !== null){
                changeNote(e.currentTarget.innerHTML);
            }else{
                setActiveNote(e.currentTarget.innerHTML)
            }
          }}
        ></div>
      </div>
    </div>
  );
};

export default Workspace;