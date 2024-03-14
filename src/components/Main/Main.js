import React, {useState} from "react";
import Searchbar from '../Searchbar/Searchbar';
import ListWrapper from "../ListWrapper/ListWrapper";
import './Main.css';

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

const Main = () => {
    const [filter, setfilter] = useState('');
    const [filteredData, setFilteredData] = useState(fakeData);
    const [input, setInput] = useState('');
    const [inputSearchitem, setInputSearchitem] = useState('');
    const [category, setCategory] = useState('');

    function handleInputChange(e) {
        console.log(input);
        setInput(e.target.value);
    };

    function settleInput(input) { /*function that is called to store the current input when searchglass is clicked*/
        const inputItem = input;
        console.log(inputItem);
    };

    function chooseCategory(value) { /*called, when a specific category-button is selected*/
        setCategory(value)
    }

    return (
        <div className="container3">
            <Searchbar 
                dataList={filteredData} 
                input={input} 
                handleInputChange={handleInputChange} 
                settleInput={settleInput}
                chooseCategory={chooseCategory}
            />
            <ListWrapper 
                dataList={filteredData}
            />
        </div>
    )
}

export default Main;