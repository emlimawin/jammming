import React from "react";
import styles from './RemoveButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';

const RemoveButton = () => {
    return (
        <button className="removeItem">
            <FontAwesomeIcon icon={faCircleMinus} className="removeItemIcon" />
        </button>
    )
}

export default RemoveButton;