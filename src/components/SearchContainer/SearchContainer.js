import React from "react";
import "./SearchContainer.css";
import SearchInput from "../ui/forms/SearchInput/SearchInput";
import ButtonGroupChoice from "../ui/buttons/ButtonGroupChoice/ButtonGroupChoice";
 

const SearchContainer = ({ 
    handleSearch, 
    inputRef, 
    getFilterChoice,
    loggedIn 
}) => {
    return (
        <div className="searchWrapper">
            <SearchInput
                inputRef={inputRef}
                handleSearch={handleSearch}
                loggedIn={loggedIn}
            />
            <ButtonGroupChoice 
                getFilterChoice={getFilterChoice}
                handleSearch={handleSearch}
                loggedIn={loggedIn}
            />
        </div>
    );
}

export default SearchContainer;