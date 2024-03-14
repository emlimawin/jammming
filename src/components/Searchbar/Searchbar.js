import React from "react";
import './Searchbar.css';
import SearchContainer from "../SearchContainer/SearchContainer";

const Searchbar = ({input, handleInputChange, settleInput, chooseCategory}) => {
    return (
        <div className="container1">
            <div className="menuWrapper">
                <div className="sowhatWrapper">
                    <h2 className="sowhat">Hey <br></br><span className="musicLover">musiclover</span></h2>
                    <p>browse Spotify by title, author or album. Then join your favorites into a new created list that you can add to your account:</p>
                </div>
                <SearchContainer 
                    input={input} 
                    handleInputChange={handleInputChange} 
                    settleInput={settleInput}
                    chooseCategory={chooseCategory}
                />
            </div>
        </div>
    );
}

export default Searchbar;