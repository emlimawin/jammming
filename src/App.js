import React from "react";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main'
import './assets/global.css';

const App = () => {
    return (
        <div className="appLayout">
            <Navbar />
            <Main />
            <Footer />
        </div>
    );
}

export default App;