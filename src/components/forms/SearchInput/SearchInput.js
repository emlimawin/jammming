import React from "react";
import styles from './SearchInput.css'
import SearchGlass from "../../ui/SearchGlass/SearchGlass";

const SearchInput = () => {
    return (
        <form className="searchInput">
            <input type="search" required></input>
            <SearchGlass />
        </form>
    );
}

export default SearchInput;