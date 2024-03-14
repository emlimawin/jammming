import React from "react";
import './AddButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const AddButton = ({passItem, clicked}) => {
    return (
        <button className="passItem" onClick={passItem}>
            <FontAwesomeIcon icon={faCirclePlus} className="passItemIcon"/>
        </button>
    )
}

export default AddButton;