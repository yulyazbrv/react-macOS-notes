import React, { useState } from "react";
import "./Sidebar.css"
import deleteIcon from "./images/delete.png"
import editIcon from "./images/makeNote.png"
import editIconDark from "./images/makeNoteDark.png"
import deleteIconDark from "./images/deleteDark.png"

const Sidebar = (props) => {
    const {addNote, deleteNote, activeNoteIndex, theme, setTheme} = props
    return(
        <div className="nav-bar">
            <div className="container-delete" onClick={() => deleteNote(activeNoteIndex)}>
                <img src={(theme === 'Light theme') ? deleteIcon: deleteIconDark}></img>
            </div>
            <div className="container-new-note" onClick={addNote}>
                <img src={(theme === 'Light theme') ? editIconDark : editIcon}></img>
            </div>
            <div>
                <button className={(theme === 'Light theme') ? 'theme-button' : 'theme-button-dark'} onClick={() => {(theme === 'Dark theme') ? setTheme('Light theme') : setTheme('Dark theme')}}>{theme}</button>
            </div>
        </div>
    )
}

export default Sidebar