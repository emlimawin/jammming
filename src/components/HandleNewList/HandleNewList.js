import React from "react";
import styles from './HandleNewList.css'
import ClearButton from "../ui/ClearButton/ClearButton";
import NewListName from "../forms/NewListName/NewListName";
import AddListButton from "../ui/AddListButton/AddListButton";

const HandleNewList = ({removeAll}) => {
    return (
        <div className="handleList">
            <div className="clearList">
                <ClearButton removeAll={removeAll}/>
            </div>
            <div className="AddNewList">
                <NewListName />
                <AddListButton />
            </div>
        </div>
    );
}

export default HandleNewList;