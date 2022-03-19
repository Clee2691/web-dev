import React from "react";
import TuitListItem from "./TuitListItem";
import { useSelector } from "react-redux";

const selectAllTuits = (state) => state.tuits;

const TuitList = () => {
    const tuits = useSelector(selectAllTuits)
    return(
        <div className='list-group'>
            {
                tuits.map && tuits.map(tuit => {
                    return (
                        <TuitListItem key={tuit._id} tuit={tuit}/>
                    );
                })
            }
        </div>
    );
}

export default TuitList;