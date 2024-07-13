import React, {useState} from "react";
import Results from "../Results/Results";
import OwnList from "../OwnList/OwnList";
import "./ListWrapper.css";

const ListWrapper = ({
    filteredData, 
    loaderRef,
    firstFetch, 
    hasMore,
    loggedIn,
    newListName, 
    getNewListName, 
    createPlaylist
}) => {
    //Upliftet State-functionalities that both (Results and OwnList) share
    const [ownList, setOwnList] = useState([]);
    const [clicked, setClicked] = useState(false);
    //const [choosenItems, setChoosenItems] = useState([])

    function passTrack (id) { 
        const trackToPass = filteredData.find(track => track.id === id); 
        if (ownList.includes(trackToPass)) {
            alert('item is already added');
            return;
        }
        if (!clicked) {
            setClicked(true);
        }
        //setChoosenItems([trackToPass, ...choosenItems]);
        setOwnList([trackToPass, ...ownList]); /*adds the removed item to the personal list of user*/
    };
    console.log(clicked)

    function deleteTrack (id) { /*removes an item from the personal list of user*/
        const removeTrack = ownList.filter((track) => track.id !== id );
        if (clicked) {
            setClicked(false);
        }
        setOwnList(removeTrack);
    };

    function removeAll () { /*clears list of user*/
        const clearedList = [];
        setOwnList(clearedList);
    };

    return (
        <div className="listWrapper">
            <Results 
                filteredData={filteredData} 
                loaderRef={loaderRef}
                firstFetch={firstFetch}
                loggedIn={loggedIn}
                hasMore={hasMore}
                passTrack={passTrack} 
                clicked={clicked}
            />
            <OwnList 
                ownList={ownList} 
                deleteTrack={deleteTrack} 
                removeAll={removeAll} 
                newListName={newListName} 
                getNewListName={getNewListName} 
                createPlaylist={createPlaylist}
            />
        </div>
    );
}

export default ListWrapper;