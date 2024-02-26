import React from "react";
import styles from './Searchbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Searchbar = () => {
    return (
        <div className="container1">
            <h2 className="sowhat">Hey <br></br><span className="musicLover">musiclover</span></h2>
            <p>browse Spotify by title, author, album or genre and add your favorites to a new or existing list:</p>
            <form className="searchInput">
                <input type="text"></input>
                <button type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon"/>
                </button>
            </form>
            <div className="btn-group">
                <button className="" id="searchChoice">Title</button>
                <button className="" id="searchChoice">Author</button>
                <button className="" id="searchChoice">Album</button>
                <button className="" id="searchChoice">All</button>
            </div>
        </div>
    );
}

export default Searchbar;