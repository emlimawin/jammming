import React from "react";
import './Results.css';
import ResultItem from "../ResultItem/ResultItem";

const Results = ({ results, passItem, deleteItem, expandList }) => {

    return (
        <div className="container6">
            <div className="lists-Header">
                <h2 className="lists-h2">Results</h2>
                <button className="expand" onClick={() => expandList()}></button>
            </div>
            <ul className="resultContainer">
                {results.map((item) => (
                    <ResultItem 
                        key={item.id}
                        item={item} 
                        passItem={passItem}
                        deleteItem={deleteItem}
                    />
                ))}     
            </ul>
        </div>
    )
}

export default Results;