import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(`
    <div class="list-group">
        <li class="list-group-item fw-bold border-0">Who to follow</li>
        ${who.map(person => {
            return (WhoToFollowListItem(person));
        }).join('')
        }
    </div>
    `);
}
export default WhoToFollowList;