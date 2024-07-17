import React from "react";

const LogInOutButton = ({loggedIn, logout, login}) => {
    return (
        <button 
            className={loggedIn ? 'logout' : 'login'} 
            onClick={() => {loggedIn? logout() : login() }}
        >
            {loggedIn ? 'logout' : 'login'}
        </button>  
    )
};

export default LogInOutButton;