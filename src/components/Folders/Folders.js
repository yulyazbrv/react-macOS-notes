import React from "react";
import "./Folders.css"
import folder from "./images/folderYellow.png"
//import folderDark from "./images/folderWhite.png"
import deletedFolder from "./images/deleteYellow2.png"
//import deletedFolderDark from "./images/deleteDark.png"

const Folders = (props) => {
    const {setOpenFolders, setActiveFolder, setActiveNote} = props
    
    return (
        <div className="container-folders">
                <div className="folder" onClick={() => {setActiveFolder("all"); setActiveNote(''); setOpenFolders(false)}}>
                    <img alt="" src={folder}></img>
                    <p>Заметки</p>
                </div>
                <div className="folder" onClick={() => {setActiveFolder("deleted"); setActiveNote(''); setOpenFolders(false)}}>
                    <img alt="" src={deletedFolder}></img>
                    <p>Недавно удаленные</p>
                </div>
        </div>
    )
}

export default Folders