import React, {useState} from "react";
import styles from './Results.css';
import ResultItem from "../ResultList/ResultItem";

const fakeData = [
    {
        author: "boards of canada",
        title: "kid for today",
        album: "in a beautiful place out in the country",
        id: "4t"
    },
    {
        author: "rolling stones",
        title: "under my thumb",
        album: "aftermath",
        id: "5r"
    },

    {
        title:"Come together",
        author: "Beatles",
        album: "Abbey Road",
        id: "9z"
    },
    {
        title:"Howl",
        author: "Rival Consoles",
        album: "Howl",
        id: "3o"
    }
]

const Results = () => {
    const [list, setList] = useState(fakeData);

    function passItem (id) { 
        const removeItem = list.filter((item) => item.id !== id );
        setList(removeItem);
        console.log(id)
    };
    
    return (
        <div className="container6">
            <div className="lists-Header">
                <h2 className="lists-h2">Results</h2>
            </div>
            <ul className="resultContainer">
                {fakeData.map((item) => (
                    <ResultItem 
                        key={item.id}
                        item={item} 
                        passItem={passItem}
                    />
                ))}     
            </ul>
        </div>
    )
}

export default Results;