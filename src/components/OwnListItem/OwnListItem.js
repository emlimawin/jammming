import React from "react";
import RemoveButton from "../ui/buttons/RemoveButton/RemoveButton";
import ItemCard from "../ItemCard/ItemCard";

const OwnListItem = ({ track, deleteTrack }) => {
    
    return (
            <div className="item">
                <ItemCard track={track}/>
                <RemoveButton deleteTrack={() => deleteTrack(track.id)}/>
            </div>
    );
}

export default OwnListItem;