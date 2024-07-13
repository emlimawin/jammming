import React, {useState, useEffect} from "react";
import Searchbar from "../Searchbar/Searchbar";
import ListWrapper from "../ListWrapper/ListWrapper";
import "./Main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Main = ({
    username, 
    loggedIn, 
    inputRef,
    handleSearch,
    getFilterChoice, 
    filteredData, 
    loaderRef,
    hasMore,
    firstFetch,
    newListName, 
    getNewListName, 
    createPlaylist
}) => {
    const [showBtn, setShowBtn] = useState("scrollBtnHidden");
    const [hasFired, setHasFired] = useState(false);

    // Adds the Scroll-Top-Button
    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY >= 800 && !hasFired) {
            setHasFired(true);
            setShowBtn("scrollBtn");
            console.log("has fired")
        }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [hasFired]);
    
    // Removes the Scroll-Top-Button
    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY <= 800 && hasFired) {
            setHasFired(false);
            setShowBtn("scrollBtnHidden");
            console.log("cleared state")
        }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [hasFired]);

    // When the user clicks on the button, scroll to the top of the document
    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    } 

    return (
        <div className="container3">
            <Searchbar  
                handleSearch={handleSearch}
                inputRef={inputRef} 
                getFilterChoice={getFilterChoice}
                username={username}
                loggedIn={loggedIn}
                
            />
            <ListWrapper 
                filteredData={filteredData}
                createPlaylist={createPlaylist}
                loaderRef={loaderRef}
                firstFetch={firstFetch}
                newListName={newListName}
                getNewListName={getNewListName}
                hasMore={hasMore}
                loggedIn={loggedIn}
            />
            <button
                onClick={scrollToTop}
                id="scrollBtn"
                className={showBtn}
                title="Go to top"
            >
                <FontAwesomeIcon className="caretScroll" icon={faCaretDown} />
            </button>
        </div>
    )
}

export default Main;