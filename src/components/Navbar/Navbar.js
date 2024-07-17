import React from 'react';
import LogInOutButton from '../ui/buttons/LogInOutButton/LogInOutButton';
import './Navbar.css';

const Navbar = ({login, logout, loggedIn}) => {
  
 return (
    <div className="container2">
      <h1 className="ja"><span>ja</span><span className="mmm">mmm</span><span className="ing">ing</span></h1>
      <LogInOutButton
        login={login} 
        logout={logout} 
        loggedIn={loggedIn}
      />
    </div>
 );
}

export default Navbar;