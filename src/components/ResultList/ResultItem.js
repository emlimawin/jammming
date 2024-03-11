import React, { useState } from "react";
import styles from './ResultItem.css';
import AddButton from "../ui/AddButton/AddButton";
import RemoveButton from "../ui/RemoveButton/RemoveButton";

const ResultItem = ({item, passItem}) => {
    
    return (
            <div className="item">
                <div className="img-container">
                    <img id="img-ResultItem" alt="Song- or Album-Cover" source={item.image}></img>
                </div>
                <table className="itemInfos">
                    <tbody>
                        <tr>
                            <th className="categories">Title:</th>
                            <td className="categories-data" id="songTitle">{item.title}</td>
                        </tr>
                        <tr>
                            <th className="categories">Author:</th>
                            <td className="categories-data" id="songAuthor">{item.author}</td>
                        </tr>
                        <tr>
                            <th className="categories">Album:</th>
                            <td className="categories-data" id="albumName">{item.album}</td>
                        </tr>
                    </tbody>
                </table>
                <AddButton passItem={() => passItem(item.id)}/>
                <RemoveButton />
            </div>
    );
}

export default ResultItem;