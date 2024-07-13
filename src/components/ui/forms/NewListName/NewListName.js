import React from "react";
import './NewListName.css'

const NewListName = ({getNewListName, newListName}) => {
    return <input className="newListName" type="text" placeholder="choose name" value={newListName} onChange={getNewListName}></input>
}

export default NewListName;