import React from "react";
import './AddButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const AddButton = ({
    passTrack, 
    track,
    isItemSelected
}) => {
    return (
        <button className="passItem" onClick={() => passTrack(track.id)}>
            <FontAwesomeIcon icon={faCirclePlus} className={!isItemSelected(track) ? "passItemIcon" : "passItemIconClicked"}/>
        </button>
    )
}

export default AddButton;