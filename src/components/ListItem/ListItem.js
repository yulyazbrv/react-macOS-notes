import React, { useState } from "react";
import "./ListItem.css";
import backYellow from "./images/BackYellow.png"

const BackComponent = (props) => {
  const {setOpenFolders,width} = props 
  

  const showFolders = () => {
    setOpenFolders(true);
  }

  if(width < 900) {
    return (<img onClick={showFolders} alt="" src={backYellow}></img>)
  } 
}
const AllListItem = (props) => {
  const { width, setOpenFolders, notes, showNote, theme, parseContent } = props
  const [searchValue, setSearchValue] = useState("")
  
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
        <BackComponent width={width} setOpenFolders={setOpenFolders}></BackComponent>
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
            onClick={() => showNote(index, filteredNotes)}
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

const DeletedListItem = (props) => {
  const { width, setOpenFolders, deletedNotes, showNote, theme, parseContent } = props;
  const [searchValue, setSearchValue] = useState("");
  
  const filteredDeletedNotes = deletedNotes.filter((note) => {
    console.log("note.anme", note.name);
    return note.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div
      className={
        theme === "Light theme" ? "container-notes" : "container-notes-dark"
      }
    >
      <div className="element-notes">
        <BackComponent width={width} setOpenFolders={setOpenFolders}></BackComponent>
        <p
          className={theme === "Light theme" ? "name-note" : "name-note-dark"}
          style={{ fontWeight: "700", opacity: "1" }}
        >
          Недавно удаленные
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
        {filteredDeletedNotes.map((row, index) => (
          <div
            className={theme === "Light theme" ? "note" : "note-dark"}
            key={index}
            onClick={() => showNote(index, filteredDeletedNotes)}
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
}

const ListItem = (props) => {
  const { width, setOpenFolders, deletedNotes,  notes, showNote, theme, activeFolder } = props;

  const parseContent = (text) => {
    return (text.length > 14) ?  text.replace(text.slice(8), "...") : text
  }

  if (activeFolder === "all") {
    return <AllListItem width={width} setOpenFolders={setOpenFolders} notes={notes} showNote={showNote} theme={theme} parseContent={parseContent}></AllListItem>
  } else {
    return <DeletedListItem width={width} setOpenFolders={setOpenFolders} deletedNotes={deletedNotes} showNote={showNote} theme={theme} parseContent={parseContent}></DeletedListItem>
  }
}

export default ListItem;