import React from "react";
import styles from './ClearButton.css';

const ClearButton = ({removeAll}) => {
    return <button className="clear" onClick={removeAll}>Clear</button>
}

export default ClearButton;