import React from "react";
import './SearchInput.css'
import SearchGlass from "../../ui/SearchGlass/SearchGlass";

const SearchInput = ({input, handleInputChange, settleInput}) => {
    return (
        <form className="searchInput">
            <input 
                type="search" 
                value={input} 
                onChange={handleInputChange} 
                required>
            </input >
            <SearchGlass onCLick={settleInput} />
        </form>
    );
}

export default SearchInput;