import React, {useState} from "react";
import Results from '../Results/Results';
import OwnList from '../OwnList/OwnList';
import './ListWrapper.css';


const ListWrapper = ({dataList}) => {
    const [results, setResults] = useState(dataList);
    const [ownList, setOwnList] = useState([]);
    const [showList, setShowList] = useState(false);

    function passItem (id) { 
        const removeItem = results.filter((item) => item.id !== id );
        setResults(removeItem);

        const itemToPass = results.find(item => item.id === id); /*dosent work with filter, or more cumbersome because it returns an array*/

        setOwnList([itemToPass, ...ownList]); /*adds the removed item to the personal list of user*/
        alert(JSON.stringify(ownList))
    };

    function deleteItem (id) { /*removes an item from the personal list of user and passes it back to Result-List*/
        const removeItem = ownList.filter((item) => item.id !== id );
        const itemToPassBack = ownList.find(item => item.id === id);
        setOwnList(removeItem);
        setResults([...results, itemToPassBack]);
    };

    function removeAll (ownList) { /* clears list of user */
        const currentList = ownList;
        /*const clearedList = [];
        setOwnList(clearedList);
        setResults([...results, currentList]);*/
        alert(currentList.toSource())
    };

    function expandList () {
        setShowList(true);
    }

    return (
        <div className="listWrapper">
            <Results results={results} passItem={passItem} expandList={expandList}/>
            <OwnList ownList={ownList} deleteItem={deleteItem} removeAll={removeAll} />
        </div>
    );
}

export default ListWrapper;