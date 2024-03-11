import React, {useState} from "react";
import styles from './OwnList.css';
import HandleNewList from "../HandleNewList/HandleNewList";
import ResultItem from "../ResultList/ResultItem";

const OwnList = () => {
    const [list, setList] = useState([]);

    return (
        <div className="container5">
            <div className="lists-Header">
                <h2 className="lists-h2">Your List</h2>
            </div>
            <ul className="listContainer">
            {list.map((item) => (
                    <ResultItem 
                        key={item.id}
                        item={item} 
                    />
                ))}   
            </ul>
            <HandleNewList />
        </div>
    )
}

export default OwnList;