import React from "react";
import styles from './SearchGlass.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchGlass = () => {
    return (
        <button type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon"/>
        </button>
    );
}

export default SearchGlass;