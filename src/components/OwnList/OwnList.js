import React from "react";
import './OwnList.css';
import HandleNewList from "../HandleNewList/HandleNewList";
import OwnListItem from "../OwnListItem/OwnListItem";

const OwnList = ({ownList, deleteItem, removeAll}) => {

    return (
        <div className="container5">
            <div className="lists-Header">
                <h2 className="lists-h2">Your List</h2>
                <button className="expand"></button>
            </div>
            <ul className="listContainer">
                {ownList.map((item) => (
                        <OwnListItem
                            key={item.id}
                            item={item} 
                            deleteItem={deleteItem}
                        />
                    ))}   
            </ul>
            <HandleNewList removeAll={removeAll}/>
        </div>
    )
}

export default OwnList;