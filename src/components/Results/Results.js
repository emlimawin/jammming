import React, {useState} from "react";
import "./Results.css";
import ResultItem from "../ResultItem/ResultItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Results = ({ 
    filteredData, 
    loaderRef,
    hasMore,
    loggedIn,
    firstFetch,
    passTrack, 
    deleteTrack, 
}) => {
    const [menuOpen, setMenueOpen] = useState(true);
    
    function expandList() {
        if (menuOpen) {
            setMenueOpen(false);
        } else {
            setMenueOpen(true);
        }
    };

    return (
        <div className="container6">
            <div className={menuOpen ? "listsHeader" : "listsHeaderClosed"}>
                <h2 className="lists-h2">Results</h2>
                <button onClick={() => expandList()}><FontAwesomeIcon className={menuOpen ? "caretDownOpen" : "caretDown"} icon={faCaretDown} /></button>
            </div>
            <div className={menuOpen ? "resultsWrapper" : "resultsWrapperHidden"}>
                <div className="resultContainer">
                    <ul className="results">
                        {filteredData.map((track, index) => (
                            <div key={track.id + index}>
                                <ResultItem 
                                    key={track.id}
                                    track={track} 
                                    passTrack={passTrack}
                                    deleteTrack={deleteTrack}
                                />
                                {index === filteredData.length - 1 ? (
                                <div ref={loaderRef} className="loaderRef" />
                                ) : null}
                            </div>
                        ))}
                        {!hasMore && loggedIn && filteredData.lengt > 0 ? (<div className="noMoreTracks">You have seen all tracks!</div>) : null}    
                    </ul>
                    {firstFetch && filteredData.length === 0 ? (<div className="nothingFound"><h2>Nothing found!</h2></div>) : null}
                </div>
            </div>
        </div>
    )
}

export default Results;