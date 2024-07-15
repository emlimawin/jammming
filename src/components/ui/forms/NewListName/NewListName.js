import React from "react";
import './NewListName.css'

const NewListName = ({ newListNameRef }) => {
    return <input className="newListName" type="text" placeholder="choose name" ref={newListNameRef}></input>
}

export default NewListName;