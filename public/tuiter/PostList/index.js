import PostItem from "./PostItem.js";
import posts from "./posts.js"

const PostList = () => {
    return(`
        <div class='list-group'>
            ${posts.map(story => {
                return PostItem(story);
            }).join('')
            }
        </div>
    `);
}

export default PostList;