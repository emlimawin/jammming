import React from "react";
import "./ResultItem.css";
import AddButton from "../ui/buttons/AddButton/AddButton";
import ItemCard from "../ItemCard/ItemCard";

const ResultItem = ({ track, passTrack }) => {
    
    return (
        <div className="item">
            <ItemCard track={track}/>
            <AddButton  passTrack={() => passTrack(track.id)}/>
        </div>
    );
}

export default ResultItem;