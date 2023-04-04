import React from "react"
import "./Workspace.css"
import Sidebar from "../Sidebar/Sidebar"

const Workspace = (props) => {
    const {activeNote, setActiveNote, addNote, activeNoteIndex, deleteNote, theme, setTheme} = props
    // const handleSubmit = (e) => { 
    //     e.preventDefault();
    //     let text = e.currentTarget.textContent;
    //     setActiveNote(text);
    // }

    return (
        <div className={(theme =='Light theme') ? 'container-editor' : 'container-editor-dark'}>
            <Sidebar deleteNote={deleteNote} addNote={addNote} activeNoteIndex={activeNoteIndex} theme={theme} setTheme={setTheme}></Sidebar>
            <div className="note-pad">
                <div contentEditable="true" text={activeNote} className={(theme === 'Light theme') ? 'editorNote' : 'editorNote-dark'} onInput={(e) =>{setActiveNote(e.currentTarget.textContent)}}>
                </div>
            </div>
        </div>
    )
}

export default Workspace