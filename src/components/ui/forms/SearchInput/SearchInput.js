import React from "react";
import "./SearchInput.css";
import SearchGlass from "../../buttons/SearchGlass/SearchGlass";

const SearchInput = ({
    handleSearch, 
    inputRef,
    loggedIn 
}) => { 

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
        event.preventDefault();
        }
    };

    return (
        <form className="searchInput">
            <input 
                type="search"  
                ref={inputRef} 
                onKeyDown={handleKeyDown}
                aria-label="searchinput"
                >
            </input >
            <SearchGlass 
                loggedIn={loggedIn}
                handleSearch={handleSearch}
            />
        </form>
    );
}

export default SearchInput;