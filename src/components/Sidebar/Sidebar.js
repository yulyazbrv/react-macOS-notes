import React, { useState } from "react";
import "./Sidebar.css"
import deleteIcon from "./images/deleteIcon.png"
import editIcon from "./images/editIcon.png"

const Sidebar = (props) => {
    const {addNote, deleteNote, activeNoteIndex} = props
    return(
        <div className="nav-bar">
            <div className="container-delete" onClick={() => deleteNote(activeNoteIndex)}>
                <img src={deleteIcon}></img>
            </div>
            <div className="container-new-note" onClick={addNote}>
                <img src={editIcon}></img>
            </div>
        </div>
    )
}

export default Sidebar