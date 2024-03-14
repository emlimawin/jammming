import React from "react";
import './ResultItem.css';
import AddButton from "../ui/AddButton/AddButton";
import ItemCard from "../ItemCard/ItemCard";

const ResultItem = ({ item, passItem }) => {
    
    return (
            <div className="item">
                <ItemCard item={item}/>
                <AddButton  passItem={() => passItem(item.id)}/>
            </div>
    );
}

export default ResultItem;