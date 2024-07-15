import React from "react";
import "./HandleNewList.css";
import ClearButton from "../ui/buttons/ClearButton/ClearButton";
import NewListName from "../ui/forms/NewListName/NewListName";
import AddListButton from "../ui/buttons/AddListButton/AddListButton";

const HandleNewList = ({
    removeAll,  
    newListNameRef, 
    getNewListName, 
    menuOpen,
}) => {
    return (
        <div className={menuOpen ? "handleList" : "handleListClosed"}>
            <ClearButton 
                className="clearList"
                removeAll={removeAll}
            />
            <NewListName  
                newListNameRef={newListNameRef}
            />
            <AddListButton 
                className="AddNewList"
                getNewListName={getNewListName}
            />
        </div>
    );
}

export default HandleNewList;