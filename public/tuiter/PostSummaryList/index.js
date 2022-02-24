import PostSumaryItem from "./PostSummaryItem.js";
import post from "./post.js";

const PostSummaryList = () => {
    return(`
        <div class='list-group'>
            ${post.map(aPost => {
                return PostSumaryItem(aPost);
            }).join('')
            }
        </div>
    `);
}

export default PostSummaryList;