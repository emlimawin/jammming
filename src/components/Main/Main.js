import React from "react";
import Results from '../Results/Results';
import OwnList from '../OwnList/OwnList';
import Searchbar from "../Searchbar/Searchbar";

import styles from './Main.css'

const Main = () => {
    return (
        <div className="container3">
            <Searchbar />
            <Results />
            <OwnList />
        </div>
    )
}

export default Main;