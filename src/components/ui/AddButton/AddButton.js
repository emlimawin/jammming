import React from "react";
import styles from './AddButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const AddButton = ({passItem}) => {
    return (
        <button className="passItem">
            <FontAwesomeIcon icon={faCirclePlus} className="passItemIcon" onClick={passItem}/>
        </button>
    )
}

export default AddButton;