import React from "react";
import RemoveButton from "../ui/RemoveButton/RemoveButton";
import ItemCard from "../ItemCard/ItemCard";

const OwnListItem = ({ item, deleteItem }) => {
    
    return (
            <div className="item">
                <ItemCard item={item}/>
                <RemoveButton deleteItem={() => deleteItem(item.id)}/>
            </div>
    );
}

export default OwnListItem;