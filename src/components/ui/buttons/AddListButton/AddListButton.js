import React from "react";
import './AddListButton.css';

const AddListButton = ({ getNewListName }) => {
    return <button className="addToSFList" onClick={getNewListName}>Add List</button>
}

export default AddListButton;