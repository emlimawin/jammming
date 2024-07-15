import React from "react";
import './SearchGlass.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchGlass = ({ handleSearch, loggedIn }) => {

    function handleClick() {
        if (!loggedIn) {
            alert("please login to use jammmin");
            return;
        } else {
            handleSearch();
        }
    };

    return (
        <button type="button" onClick={handleClick}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon"/>
        </button>
    );
}

export default SearchGlass;