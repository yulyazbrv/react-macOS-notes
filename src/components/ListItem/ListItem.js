import React, { useState, useEffect } from "react";
import "./ListItem.css"

const ListItem = (props) => {
    const {notes, changeNote} = props

    return (
        <div className="container-notes">
            <div className="element-notes">
                <div>Заметки</div>
            </div>
            <input type={"search"} className="search-field" placeholder="Поиск по всем заметкам"></input>
            <div className="list-container">
                {notes.map((row, index) => (
                    <div className="note" key={index} onClick={() => changeNote(index)}>
                        <h3 style={{marginBottom: "0px"}}>{row.name}</h3>
                        <div className="date-with-content">
                            <p style={{marginTop: "0px", marginRight: "5px"}}>{row.date}</p>
                            <p style={{marginTop: "0px", marginBottom: "0px"}}>{row.content}</p>
                        </div>
                    </div>
                ))}
            </div>            
        </div>
    )
}

export default ListItem