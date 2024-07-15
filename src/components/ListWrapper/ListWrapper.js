import React, {
    useState, 
    useMemo, 
    useRef, 
    useEffect, 
    useCallback
} from "react";
import Results from "../Results/Results";
import OwnList from "../OwnList/OwnList";
import "./ListWrapper.css";

const ListWrapper = ({
    filteredData, 
    loaderRef,
    firstFetch, 
    hasMore,
    loggedIn,
    userID,
    accessToken,
}) => {
    //Upliftet State-functionalities that both (Results.js and OwnList.js) share:
    const [ownList, setOwnList] = useState([]);
    const [urisString, setUrisString] = useState('');
    const [newListName, setNewListName] = useState('');
    const newListNameRef = useRef();

    /*adds the removed item to the personal list of user*/
    function passTrack (id) { 
        const trackToPass = filteredData.find(track => track.id === id); 
        if (ownList.includes(trackToPass)) {
            alert('item is already added');
            return;
        }
        setOwnList([trackToPass, ...ownList]); 
    };

    /*removes an item from the personal list of user*/
    function deleteTrack (id) { 
        const removeTrack = ownList.filter((track) => track.id !== id );
        setOwnList(removeTrack);
    };

    /*clears list of user*/
    function removeAll () { 
        const clearedList = [];
        setOwnList(clearedList);
    };

    /*used for conditional styling of AddButton.js */
    const isItemSelected = (item) => {
        return ownList.includes(item);
      };

    //CREATE and pass PLAYLIST--------------------------------------------------------------------------------------------------------------------
    
    /* Gets the current userInput and sets the URIS string*/
    const getNewListName = () => { 
        const term = newListNameRef.current.value;
        if (!loggedIn) {
            alert("please login to use jammmin");
            return;
        } else if (term !== '' && ownList.length === 0) {
            alert('Your list is empty');
            return;
        } else if (term === '' && ownList.length > 0) {
            alert('Please give your list a name');
            return;
        } else if (term !== '' && ownList.length > 0) {
            setNewListName(term);
            const uris = ownList.map(el => el.uri).join(); // Get the URIs of the added songs and convert it to string. 
            setUrisString(uris);  
        }
    };

    const postParams = useMemo(() => ({
           method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        },
        body: JSON.stringify({ 
            name: newListName, 
            public: false 
        }) 
    }), [newListName, accessToken]);

    const postParamsUri = useMemo(() =>({
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        },
    }), [accessToken]);

    const createPlaylist = useCallback(async (uris) =>  {
        try {
            const playlist = await fetch(
                `https://api.spotify.com/v1/users/${userID}/playlists`, 
                postParams
            )
            .then(response => response.json())
            .then(data => {
                 //console.log(data.id);
                 return data;
            })
            await fetch(
                `https://api.spotify.com/v1/playlists/${playlist.id}/tracks?uris=${uris}`, 
                postParamsUri
            ).then(alert("Your list was successfully added!"));
        } catch (error) {
            console.log(error);
            alert('Ups, something went wrong :(!')
        }
    }, [postParams, postParamsUri, userID]); 

    useEffect(() => {
        if (newListName !== '') {
            createPlaylist(urisString); 
        };
    }, [newListName, createPlaylist, urisString]);

    //JSX Code---------------------------------------------------------------------------------------------------------------------------------------

    return (
        <div className="listWrapper">
            <Results 
                filteredData={filteredData} 
                loaderRef={loaderRef}
                firstFetch={firstFetch}
                loggedIn={loggedIn}
                hasMore={hasMore}
                passTrack={passTrack} 
                isItemSelected={isItemSelected}
            />
            <OwnList 
                ownList={ownList} 
                deleteTrack={deleteTrack} 
                removeAll={removeAll} 
                newListNameRef={newListNameRef}
                getNewListName={getNewListName}
            />
        </div>
    );
}

export default ListWrapper;