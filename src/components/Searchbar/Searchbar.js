import React from "react";
import "./Searchbar.css";
import SearchContainer from "../SearchContainer/SearchContainer";

const Searchbar = ({ 
    handleSearch, 
    inputRef, 
    getFilterChoice, 
    username, 
    loggedIn
}) => {

    const salutation ='musiclover';
    
    return (
        <div className="container1">
            <div className="menuWrapper">
                <div className="sowhatWrapper">
                    <h2 className="sowhat">Hey <br></br><span className="musicLover">{loggedIn ? username : salutation}</span></h2>
                    <p>browse Spotify by title or artist. Then join your favorites into a new created list that you can add to your account:</p>
                </div>
                <SearchContainer 
                    handleSearch={handleSearch}
                    inputRef={inputRef} 
                    getFilterChoice={getFilterChoice}
                    loggedIn={loggedIn}
                />
            </div>
        </div>
    );
}

export default Searchbar;