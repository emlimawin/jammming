import React from "react";
import "./HandleNewList.css";
import ClearButton from "../ui/buttons/ClearButton/ClearButton";
import NewListName from "../ui/forms/NewListName/NewListName";
import AddListButton from "../ui/buttons/AddListButton/AddListButton";

const HandleNewList = ({
    removeAll, 
    getNewListName, 
    newListName, 
    createNewList, 
    menuOpen
}) => {
    return (
        <div className={menuOpen ? "handleList" : "handleListClosed"}>
            <ClearButton 
                className="clearList"
                removeAll={removeAll}
            />
            <NewListName 
                getNewListName={getNewListName} 
                newListName={newListName}
            />
            <AddListButton 
                className="AddNewList"
                createNewList={createNewList}
            />
        </div>
    );
}

export default HandleNewList;