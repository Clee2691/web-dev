import React from "react";

import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const selectAllFollows = (state) => state.who;

const WhoToFollowList = () => {
    const who = useSelector(selectAllFollows);
    return(
    <div className="list-group">
        <li className="list-group-item fw-bold border-0">Who to follow</li>
        {
            who.map(who => {
                return (
                    <WhoToFollowListItem who={who}/>
                );
            })
        }
    </div>
    );
}
export default WhoToFollowList;