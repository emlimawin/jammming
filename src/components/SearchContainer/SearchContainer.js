import React from "react";
import './SearchContainer.css';
import SearchInput from "../forms/SearchInput/SearchInput";
import ButtonGroupChoice from "../ui/ButtonGroupChoice/ButtonGroupChoice";
 

const SearchContainer = ({input, handleInputChange, settleInput, chooseCategory}) => {
    return (
        <div className="searchWrapper">
            <SearchInput 
                input={input} 
                handleInputChange={handleInputChange} 
                settleInput={settleInput}
            />
            <ButtonGroupChoice 
                chooseCategory={chooseCategory}
            />
        </div>
    );
}

export default SearchContainer;