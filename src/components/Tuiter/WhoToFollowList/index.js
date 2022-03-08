import React from "react";

import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json";


const WhoToFollowList = () => {
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