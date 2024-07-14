import React from "react";
import "./ResultItem.css";
import AddButton from "../ui/buttons/AddButton/AddButton";
import ItemCard from "../ItemCard/ItemCard";

const ResultItem = ({ 
    track, 
    passTrack,
    isItemSelected
}) => {
    
    return (
        <div className="item">
            <ItemCard track={track}/>
            <AddButton  
                passTrack={passTrack}
                track={track}
                isItemSelected={isItemSelected}
            />
        </div>
    );
}

export default ResultItem;