import React from "react";
import styles from './Results.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const Results = () => {
    return (
        <div className="container6">
            <div className="lists-Header">
                <h2 className="lists-h2">Results</h2>
            </div>
            <div className="resultContainer">
                <ul id="resultList">
                    <li className="item" id="resultListItem">
                        <div className="img-container">
                            <img id="img-ResultItem"></img>
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
                        <button className="addItem"><FontAwesomeIcon icon={faCirclePlus} className="addItemIcon" /></button>
                    </li>
                    <li className="item" id="resultListItem">
                        <div className="img-container">
                            <img id="img-ResultItem"></img>
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
                        <button className="addItem"><FontAwesomeIcon icon={faCirclePlus} className="addItemIcon" /></button>
                    </li>
                    <li className="item" id="resultListItem">
                        <div className="img-container">
                            <img id="img-ResultItem"></img>
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
                        <button className="addItem"><FontAwesomeIcon icon={faCirclePlus} className="addItemIcon" /></button>
                    </li>
                    <li className="item" id="resultListItem">
                        <div className="img-container">
                            <img id="img-ResultItem"></img>
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
                        <button className="addItem"><FontAwesomeIcon icon={faCirclePlus} className="addItemIcon" /></button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Results;