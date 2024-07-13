import React,  { useState } from "react";
import "./ButtonGroupChoice.css";

const choices = ["Title", "Artist", "All"];

const ButtonGroupChoice = ({ 
    getFilterChoice, 
    handleSearch, 
    loggedIn 
}) => {

    const [isActive, setIsActive] = useState(''); /*State to change styling of button if active in classname*/
    const handleClick = (i) => { /*Sets the Styling of Button between Active and not Active */
        if (!loggedIn) {
            alert("please login to use jammmin");
            return;
        } else {
            setIsActive(i);
        }
    }

    return <div className="btn-group">
        {choices.map((choice, i) => (
            <button 
                key={choice}
                onClick={() => {handleClick(i); getFilterChoice(choice); handleSearch()}}
                value={choice}
                className={(isActive === i) & loggedIn ? 'focus' : 'nonfocus'} /*To make sure that only the selected button has the activ styling */
                >
                {choice}
            </button>
        ))}
    </div>
}


export default ButtonGroupChoice;