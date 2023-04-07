import React, { useState } from "react";
import "./ListItem.css";

const ListItem = (props) => {
  const { notes, showNote, theme } = props;
  const [searchValue, setSearchValue] = useState("");
  const parseContent = (text) => {
    return (text.length > 14) ?  text.replace(text.slice(14), "...") : text
  }

  const filteredNotes = notes.filter((note) => {
    return note.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div
      className={
        theme === "Light theme" ? "container-notes" : "container-notes-dark"
      }
    >
      <div className="element-notes">
        <p
          className={theme === "Light theme" ? "name-note" : "name-note-dark"}
          style={{ fontWeight: "700", opacity: "1" }}
        >
          Заметки
        </p>
      </div>
      <input
        type="search"
        className={
          theme === "Light theme" ? "search-field" : "search-field-dark"
        }
        placeholder="Поиск по заметкам"
        onChange={(e) => setSearchValue(e.target.value)}
      ></input>
      <div
        className={
          theme === "Light theme" ? "list-container" : "list-container-dark"
        }
      >
        {filteredNotes.map((row, index) => (
          <div
            className={theme === "Light theme" ? "note" : "note-dark"}
            key={index}
            onClick={() => showNote(index)}
          >
            <p
              className={
                theme === "Light theme" ? "name-note" : "name-note-dark"
              }
              style={{ marginBottom: "0px", fontWeight: "700" }}
            >
              {parseContent(row.name)}
            </p>
            <div className="date-with-content">
              <p
                className={
                  theme === "Light theme" ? "name-note" : "name-note-dark"
                }
                style={{ marginTop: "0px", marginRight: "5px" }}
              >
                {row.date}
              </p>
              <p
                className={
                  theme === "Light theme" ? "name-note" : "name-note-dark"
                }
                style={{ marginTop: "0px", marginBottom: "0px" }}
              >
                {parseContent(row.content)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListItem;