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
    newListName, 
    createPlaylist,
}) => {
    const [menuOpen, setMenueOpen] = useState(true);

    function expandList() {
        if (menuOpen) {
            setMenueOpen(false);
        } else {
            setMenueOpen(true);
        }
    };

    function createNewList() {   
    if (ownList.length === 0) {
        alert('Your list is empty');
        return;
    } else if (ownList.length > 0 && !newListName) {
        alert('Please give your list a name');
        return;
    } else if (ownList.length > 0 && newListName) {
                    const urisArray = [];
                    const uris = ownList.map(el => el.uri).join(); // Get the URIs of the added songs and convert it to string. 
                    urisArray.push(uris); //push uris-string to UrisArray to create an array, that will be accepted by createPlaylist URL parameter from App.js
                    //console.log(urisArray);
                    createPlaylist(urisArray);  
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
                    getNewListName={getNewListName} 
                    newListName={newListName} 
                    createNewList={createNewList}
                    menuOpen={menuOpen}
                />
             </div> 
        </div>
    )
}

export default OwnList;