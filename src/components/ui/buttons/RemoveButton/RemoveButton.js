import React from "react";
import './RemoveButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';

const RemoveButton = ({deleteTrack}) => {

    return (
        <button className="removeItem" onClick={deleteTrack}>
            <FontAwesomeIcon icon={faCircleMinus} className="removeItemIcon"/>
        </button>
    )
}

export default RemoveButton;