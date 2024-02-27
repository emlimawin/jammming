import React from "react";
import Listitems from '../Listitems/Listitems';
import styles from './OwnList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';



const OwnList = () => {
    return (
        <div className="container5">
            <div className="lists-Header">
                <h2 className="lists-h2">Your List</h2>
            </div>
            <div className="listContainer">
                <ul id="list">
                    <li className="item" id="ownlistItem">
                        <div className="img-container">
                            <img id="img-listItem"></img>
                        </div>
                        <table className="itemInfos">
                            <tr>
                                <th className="categories">Title:</th>
                                <td className="categories-data" id="">inpuppppppppppppppppp</td>
                            </tr>
                            <tr>
                                <th className="categories">Author:</th>
                                <td className="categories-data" id="">inputpppppppppppppppppppppppp</td>
                            </tr>
                            <tr>
                                <th className="categories">Album:</th>
                                <td className="categories-data" id="">input</td>
                            </tr>
                        </table>
                        <button className="removeItem"><FontAwesomeIcon icon={faCircleMinus} className="removeItemIcon" /></button>
                    </li>
                </ul>
            </div>
            <div className="handleList">
                <div className="clearList">
                    <button className="clear">Clear</button>
                </div>
                <div className="AddNewList">
                    <input className="newListName" type="text" placeholder="choose name" required></input>
                    <button className="addToSFList">Add List</button>
                </div>
            </div>
        </div>
    )
}

export default OwnList;