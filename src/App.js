import {
    React, 
    useState, 
    useEffect, 
    useRef, 
    useMemo,
} from "react";
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import Main from './components/Main/Main.js'
import './assets/global.css';
import {
    loginWithSpotifyClick, 
    logoutClick, 
} from './auth/AuthContext.js';

const App = () => {
   
    //State-Variables------------------------------------------------------------------------------------------------------------------
    const [token, setToken] = useState(null);
        console.log('token:' + token);
    const [username, setUsername] = useState('musiclover'); 
        console.log('username:' + username)
    const [userID, setUserID] = useState(null); 
        console.log('userID: ' + userID)
    const [loggedIn, setLoggedIn] = useState(false);
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

    useEffect(() => {
        const access_token = localStorage.getItem('access_token');
        console.log('access_token: ' + access_token)
        const display_name = localStorage.getItem('display_name');
        console.log('display_name: ' + display_name)
        const id = localStorage.getItem('id');
        console.log(id)

        console.log('localStorage:');
        console.log(localStorage);
        
        if (access_token) {
          setToken(access_token);
        }
    
        if (display_name === undefined || display_name === null) {
            setUsername('musiclover');  
        } else {
            setUsername(display_name);
        }

        if (id) {
            setUserID(id);
        }

        if(access_token === undefined || access_token === null) {
            setLoggedIn(false);
        } else {
            setLoggedIn(true);
        }
    }, []);


    // Gets the userInput and fires the getData function by onClick on SearchGlass.js
    const handleSearch = () => {
        const term = inputRef.current.value;
        setSearchInput(term);
      };

    // fired onClick by ButtonGrouphoice.js
    const getFilterChoice = (choice) => {
        setChoice(choice);
        handleSearch();
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
        // eslint-disable-next-line 
      }, [choice, data]);

    //Get Data----------------------------------------------------------------------------------------------------------------------------------------

    const searchParameters = useMemo(() =>({ //because of the useCallback function it was neccesssarry to implement the parameters with useMemo
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }), [token]);

    const getData = async () => {
        if (!loggedIn) return;// prevents data fetch before user is loggedin but clicks the buttons
        if (loggedIn && !searchInput) return;
        if (isLoading) return;
        setData([]);
        setIndex(0)
        setIsLoading(true);
        try {
            const response = await fetch(
                `https://api.spotify.com/v1/search?q=${searchInput}&type=track&market=US&offset=${index}&limit=10`, 
                searchParameters
            );
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
        if (isLoading) return;

        setIsLoading(true);
        try {
            const response = await fetch(
                `https://api.spotify.com/v1/search?q=${searchInput}&type=track&market=US&offset=${index}&limit=10`, 
                searchParameters
            );
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

    useEffect(() => {
        const loaderElement = loaderRef.current;
        if (!loaderElement) return;
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !isLoading) {
                fetchMoreData();
            }
        });

        observer.observe(loaderElement); // sets the elementRef initialValue(=> current) to the target of observation. (current is the only poroperty, that useRef has)
        
        return () => {
            if(loaderElement){
                observer.unobserve(loaderElement); //cleanup after fetching the data    
            }
        };
    }, [filteredData]);   

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
                    userID={userID}
                    token={token}
                />
                <Footer />
            </div>
        </div>
    );
}

export default App;