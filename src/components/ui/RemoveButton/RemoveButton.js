import React from "react";
import './RemoveButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';

const RemoveButton = ({deleteItem}) => {

    return (
        <button className="removeItem" onClick={deleteItem}>
            <FontAwesomeIcon icon={faCircleMinus} className="removeItemIcon"/>
        </button>
    )
}

export default RemoveButton;