import React, {useEffect} from "react";
import TuitListItem from "./TuitListItem";
import { useSelector, useDispatch } from "react-redux";

import { findAllTuits } from "../../../actions/tuits-actions";

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
 
    const dispatch = useDispatch();

    useEffect(() => findAllTuits(dispatch), []);
     
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