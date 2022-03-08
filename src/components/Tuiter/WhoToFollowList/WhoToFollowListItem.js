import React from "react";

const WhoToFollowListItem = ({
    
    who = {
        avatarIcon: './images/nasa.jpg',
        userName: 'NASA',
        handle: 'NASA',
    }
    
}) => {
    return (
    <div class="list-group-item border border-color-gray">
        <div class="d-flex flex-row justify-content-start">
            <div>
                <img className="avatar-images" src={who.avatarIcon} width="48"/>
            </div>
            <div class="ms-2 me-2 fw-bold">
                {who.userName} <span className="fas fa-check-circle"></span><br/>
                <div class="fw-normal">
                    @{who.handle}
                </div>
            </div>
            <div className="d-flex align-items-center ms-auto">
                <button className="btn btn-primary btn-block rounded-pill border-0">Follow</button>
            </div>
        </div>
    </div>
    );
}
export default WhoToFollowListItem;