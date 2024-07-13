import React from "react";
import './AddListButton.css';

const AddListButton = ({createNewList}) => {
    return <button className="addToSFList" onClick={createNewList}>Add List</button>
}

export default AddListButton;