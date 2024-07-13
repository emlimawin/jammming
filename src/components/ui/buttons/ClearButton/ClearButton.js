import React from "react";
import './ClearButton.css';

const ClearButton = ({removeAll}) => {
    return <button className="clear" onClick={removeAll}>Clear</button>
}

export default ClearButton;