import React,  {useState, useEffect} from "react";
import styles from './ButtonGroupChoice.css';

const choices = ['Title', 'Author', 'Album', 'All'];

function ChoiceGroup() {
    const [active, setActive] = useState(choices[0]);

    return <div className="btn-group">
        {choices.map((choice, i) => (
            <button 
                onClick={() => setActive(i)}
                className={i === active ? 'focus' : 'nonfocus'}
                >
                {choice}
            </button>
        ))}
    </div>
}

const ButtonGroupChoice = () => {
    return (
        <ChoiceGroup/>
    );
}

export default ButtonGroupChoice;