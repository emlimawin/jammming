import React from "react";
import styles from './SearchContainer.css';
import SearchInput from "../forms/SearchInput/SearchInput";
import ButtonGroupChoice from "../ui/ButtonGroupChoice/ButtonGroupChoice";


const SearchContainer = () => {
    return (
        <>
            <SearchInput />
            <ButtonGroupChoice />
        </>
    );
}

export default SearchContainer;