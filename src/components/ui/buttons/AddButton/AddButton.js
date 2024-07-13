import React, {useState} from "react";
import './AddButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const AddButton = ({passTrack, clicked}) => {
    return (
        <button className="passItem" onClick={passTrack}>
            <FontAwesomeIcon icon={faCirclePlus} className={!clicked ? "passItemIcon" : "passItemIconClicked"}/>
        </button>
    )
}

export default AddButton;