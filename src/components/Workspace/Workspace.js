import React from "react"
import "./Workspace.css"
import Sidebar from "../Sidebar/Sidebar"

const Workspace = (props) => {
    const {activeNote, setActiveNote, addNote, activeNoteIndex, deleteNote} = props
    // const handleSubmit = (e) => { 
    //     e.preventDefault();
    //     let text = e.currentTarget.textContent;
    //     setActiveNote(text);
    // }

    return (
        <div className="container-editor">
            <Sidebar deleteNote={deleteNote} addNote={addNote} activeNoteIndex={activeNoteIndex}></Sidebar>
            <div className="note-pad">
                <div contentEditable="true" text={activeNote} className="editorNote" onInput={(e) =>{setActiveNote(e.currentTarget.textContent)}}>
                </div>
            </div>
        </div>
    )
}

export default Workspace