import {
    React, 
    useState, 
    useEffect, 
    useRef, 
    useMemo
} from "react";
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import Main from './components/Main/Main.js'
import './assets/global.css';
import {
    loginWithSpotifyClick, 
    logoutClick, 
    user, 
    loggedIn, 
    userToken, 
    userId
} from './data/AuthContext2.js';

const App = () => {
   
    //State-Variables used in App------------------------------------------------------------------------------------------------------------------
    
    /*loggedIn is a Bolean Value retrieved from AuthContex2.js that gives information which button should be rendered and which function should be executed by the loginbutton*/
    const accessToken = userToken;
    const username = user;
    const userID = userId;
    const [data, setData] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [choice, setChoice] = useState('All');
    const [hasMore, setHasMore] = useState(true);
    const [firstFetch, setFirstFetch] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [index, setIndex] = useState(0);
    const inputRef = useRef();
    const loaderRef = useRef(null); //element used to check if User reached the end of Page...when last element in list becomes visible, the page nows that it has to load more Data
                                  //useRef does not rerender the page. it is here only helping to detect the changes

    // Gets the userInput and fires the getData function
    const handleSearch = () => {
        const term = inputRef.current.value;
        setSearchInput(term);
        console.log('term: ' + term); // the value of the input field
      };

    //fired onClick by Choice-button-Group
    const getFilterChoice = (choice) => {
        setChoice(choice);
        handleSearch();
        console.log(choice)
    };

    //Filter Data-------------------------------------------------------------------------------------------------------------------------------------
    
    const filteredData = useMemo(() => {
        if (choice === "Title") {
          return data.filter((track) =>
            track.name.toLowerCase().includes(searchInput.toLowerCase())
          );
        } else if (choice === "Artist") {
          return data.filter((track) =>
            track.artists[0].name.toLowerCase().includes(searchInput.toLowerCase())
          );
        } else {
          return data;
        }
      }, [choice, data]);

    //Get Data----------------------------------------------------------------------------------------------------------------------------------------

    const searchParameters = useMemo(() =>({ //because of the useCallback function it was neccesssarry to implement the parameters with useMemo
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        }
    }), [accessToken]);

    const getData = async () => {
        if (!loggedIn) return;// prevents data fetch before user is loggedin but clicks the buttons
        if (loggedIn && !searchInput) return;
        if (isLoading) return;
        setData([]);
        setIndex(0)
        setIsLoading(true);
        try {
            const response = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=track&market=US&offset=${index}&limit=10`, searchParameters)
            const data = await response.json();
            data.length > 0 ? setHasMore(true) : setHasMore(false); //to check if end of data-set is reached
            setData(data.tracks.items); 
            setIndex((prev) => prev + 10);  
            setFirstFetch(true); 
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }    
    };

    useEffect(() => {
             getData(); 
    },[searchInput]);

    //Load more Data on Scroll-----------------------------------------------------------------------------------------------------------------------
 
    const fetchMoreData = async () => {
        console.log("fetching more data");
        if (isLoading && !hasMore) return;
        if (isLoading) return

        setIsLoading(true);
        try {
            const response = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=track&market=US&offset=${index}&limit=10`, searchParameters)
            const data = await response.json();
            data.length > 0 ? setHasMore(true) : setHasMore(false); //to check if end of data-set is reached
            setData((prev) => [...prev, ...data.tracks.items]); 
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
            setIndex((prev) => prev + 10);
        }
        
      };

    console.log('index: ' + index) 

    useEffect(() => {
        const loaderElement = loaderRef.current;

        if (!loaderElement) return;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !isLoading) {
                fetchMoreData();
            }
        });

        observer.observe(loaderElement) // sets the elementRef initialValue(=> current) to the target of observation. (current is the only poroperty, that useRef has)
        
        
        return () => {
            if(loaderElement){
                observer.unobserve(loaderElement); //cleanup after fetching the data    
            }
        };
    }, [filteredData]);   

    console.log('filteredData: ');
    console.log(filteredData); 

    //CREATE and pass PLAYLIST-----------------------------------------------------------------------------------------------------------------------
    
    const [newListName, setNewListName] = useState('');
    
    function getNewListName(e) { /* Gets the current userInput */
    //console.log(newListName);
    setNewListName(e.target.value);
    };

    const postParams = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        },
        body: JSON.stringify({ 
            name: newListName, 
            public: false 
        }) 
    };

    const postParamsUri = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        },
        /*body: JSON.stringify({
            uris: [
                uri
            ]
        })*/
    };

    async function createPlaylist(uris) {
        try {
            const playlist = await fetch(
                `https://api.spotify.com/v1/users/${userID}/playlists`, 
                postParams
            )
            .then(response => response.json())
            .then(data => {
                 //console.log(data.id);
                 return data
            })
            
            await fetch(
                `https://api.spotify.com/v1/playlists/${playlist.id}/tracks?uris=${uris}`, 
                postParamsUri
            ).then(alert("Your list was successfully added!"));
        } catch (error) {
            console.log(error);
        }
    }

    //JSX Code---------------------------------------------------------------------------------------------------------------------------------------

    return (
        <div className="layoutWrapper">
            <div className="appLayout">
                <Navbar 
                    login={loginWithSpotifyClick} 
                    loggedIn={loggedIn}
                    logout={logoutClick}
                    />
                <Main   
                    username={username}
                    loggedIn={loggedIn}
                    hasMore={hasMore}
                    inputRef={inputRef}
                    handleSearch={handleSearch}
                    getFilterChoice={getFilterChoice}
                    filteredData={filteredData}
                    loaderRef={loaderRef}
                    isLoading={isLoading}
                    firstFetch={firstFetch}

                    newListName={newListName}
                    getNewListName={getNewListName}
                    createPlaylist={createPlaylist}
                />
                <Footer />
            </div>
        </div>
    );
}

export default App;