
const WhoToFollowListItem = (who) => {
    return (`
    <div class="list-group-item border border-color-gray">
        <div class="d-flex flex-row justify-content-start">
            <div>
                <img class="avatar-images" src=${who.avatarIcon}>
            </div>
            <div class="ms-2 me-2 fw-bold">
                ${who.userName} <span class="fas fa-check-circle"></span><br>
                <div class="fw-normal">
                    @${who.handle}
                </div>
            </div>
            <div class="d-flex align-items-center ms-auto">
                <button class="btn btn-primary btn-block rounded-pill border-0">Follow</button>
            </div>
        </div>
    </div>
    `);
}
export default WhoToFollowListItem;