import React,  {useState} from "react";
import './ButtonGroupChoice.css';

const choices = ['Title', 'Author', 'Album', 'All'];

function ChoiceGroup({chooseCategory}) {
    const [active, setActive] = useState(choices[0]);

    return <div className="btn-group">
        {choices.map((choice, i) => (
            <button 
                key={i}
                onClick={() => {setActive(i); chooseCategory()}}
                value={choice}
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