import React from "react";
import styles from './Searchbar.css';
import SearchContainer from "../SearchContainer/SearchContainer";

const Searchbar = () => {
    return (
        <div className="container1">
            <div className="menuWrapper">
                <h2 className="sowhat">Hey <br></br><span className="musicLover">musiclover</span></h2>
                <p>browse Spotify by title, author or album. Then join your favorites into a new created list that you can add to your account:</p>
                <SearchContainer />
            </div>
        </div>
    );
}

export default Searchbar;