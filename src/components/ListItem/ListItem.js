import React, { useState, useEffect } from "react";
import "./ListItem.css"

const ListItem = (props) => {
    const {notes, changeNote, theme} = props

    return (
        <div className={(theme =='Light theme') ? 'container-notes' : 'container-notes-dark'}>
            <div className="element-notes">
                <p className={(theme =='Light theme') ? 'name-note' : 'name-note-dark'} style={{fontWeight: "700", opacity: "1"}}>Заметки</p>
            </div>
            <input type={"search"} className={(theme =='Light theme') ? 'search-field' : 'search-field-dark'} placeholder="Поиск по заметкам"></input>
            <div className={(theme =='Light theme') ? 'list-container' : 'list-container-dark'}>
                {notes.map((row, index) => (
                    <div className={(theme =='Light theme') ? 'note' : 'note-dark'} key={index} onClick={() => changeNote(index)}>
                        <p className={(theme =='Light theme') ? 'name-note' : 'name-note-dark'} style={{marginBottom: "0px", fontWeight: "700"}}>{row.name}</p>
                        <div className="date-with-content">
                            <p className={(theme =='Light theme') ? 'name-note' : 'name-note-dark'} style={{marginTop: "0px", marginRight: "5px"}}>{row.date}</p>
                            <p className={(theme =='Light theme') ? 'name-note' : 'name-note-dark'} style={{marginTop: "0px", marginBottom: "0px"}}>{row.content}</p>
                        </div>
                    </div>
                ))}
            </div>            
        </div>
    )
}

export default ListItem