import React from "react";
import './ItemCard.css';

const ItemCard = ({track}) => {

    return (
        <>
            <div className="img-container">
                <img id="img-ResultItem" alt="Song- or Album-Cover" src={(track.album.images.length !== 3) ? '' : track.album.images[2].url}></img>
            </div>
            <table className="itemInfos">
                <tbody>
                    <tr>
                        <th className="categories">Title:</th>
                        <td className="categories-data" id="songTitle">{track.name}</td>
                    </tr>
                    <tr>
                        <th className="categories">Author:</th>
                        <td className="categories-data" id="songAuthor">{track.artists[0].name}</td>
                    </tr>
                    <tr>
                        <th className="categories">Album:</th>
                        <td className="categories-data" id="albumName">{track.album.name}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ItemCard;