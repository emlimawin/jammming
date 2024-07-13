import React from 'react';
import './Navbar.css';

const Navbar = ({login, logout, loggedIn}) => {
  
 return (
    <div className="container2">
      <h1 className="ja"><span>ja</span><span className="mmm">mmm</span><span className="ing">ing</span></h1>
      <button className={loggedIn ? 'logout' : 'login'} onClick={() => {loggedIn? logout() : login() }}>{loggedIn ? 'logout' : 'login'}</button>
    </div>
 );
}

export default Navbar;