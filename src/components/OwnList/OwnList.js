import React, {useState} from "react";
import "./OwnList.css";
import HandleNewList from "../HandleNewList/HandleNewList";
import OwnListItem from "../OwnListItem/OwnListItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const OwnList = ({
    ownList, 
    deleteTrack, 
    removeAll, 
    getNewListName, 
    newListNameRef, 
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
        <div className="container5">
            <div className="listsHeader">
                <h2 className="lists-h2">Your List</h2>
                <button onClick={expandList}><FontAwesomeIcon className={menuOpen ? "caretDownOpen" : "caretDown"} icon={faCaretDown} /></button>
            </div>
            <div className={"ownListWrapper"}> 
                <div className={menuOpen ? "listContainer" : "listContainerHidden"}>
                    <ul className="ownListItems">
                        {ownList.map((track) => (
                                <OwnListItem
                                    key={track.id}
                                    track={track} 
                                    deleteTrack={deleteTrack}
                                />
                            ))}   
                    </ul>
                </div>
                <HandleNewList 
                    removeAll={removeAll} 
                    menuOpen={menuOpen}
                    newListNameRef={newListNameRef}
                    getNewListName={getNewListName}
                />
             </div> 
        </div>
    )
}

export default OwnList;