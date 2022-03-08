import React from "react";

const PostItem = ({
    post = {
        "avatarImage": "../images/elonprofpic.jpg",
        "userName": "Elon Musk",
        "handle": "elonmusk",
        "time": "23h",
        "caption": "Amazing show about <a href='inspiration4x.html'>@Inspiration4x</a> mission!",
        "storyImage": "../images/inspir4.jpg",
        "storyTitle": "Countdown: Inspriation4 Mission to Space | Netflix Official Site",
        "storyCaption": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all civilian orbital space...",
        "siteLink":"netflix.com",
        "numComments" :"4.2k",
        "numShares": "3.5k",
        "numLikes": "37.5k"
    }
}) => {
    return(
        <div className="list-group-item d-flex justify-content-start background-color-black">
            <div className="d-flex flex-column mt-2">
                <img className="image-prof" src={post.avatarImage}/>
            </div>
            <div className="d-flex flex-column flex-grow-1">
                <div className="row mb-2 mt-2">
                    <span className="d-flex justify-content-start">{post.userName} 
                        <i className="fas fa-check-circle"></i> 
                        <span className="text-muted fw-normal">
                            @{post.handle} - {post.time}
                        </span>
                        <span className="ms-auto"><i className="fas fa-ellipsis-h"></i></span>
                    </span>
                    <span className="no-link-decor" dangerouslySetInnerHTML={ {__html: post.caption} }>
                    </span>
                </div>

                <div className="row border border-rounded border-color-gray ms-1 me-1 mb-3">
                    {/* If the picture has story title or caption, we have to style the image with the title differently */}
                    {post.storyTitle !== "" &&  <img className= "img-fluid ps-0 pe-0 border border-color-gray border-left-0 border-right-0 border-top-only" 
                        src={post.storyImage}/>}
                    {post.storyTitle === "" && <img className= "img-fluid ps-0 pe-0 border border-color-gray border-rounded" 
                        src={post.storyImage}/>}
                    
                    {post.storyTitle !== "" && <p className="mt-0 mb-1 pt-2"> {post.storyTitle} </p>}
                    {post.storyTitle === "" && ''}


                    {post.storyCaption !== "" && <p className="text-muted mb-1"> {post.storyCaption}</p>}
                    {post.storyCaption === "" && ''}


                    {post.siteLink !== "" && <span className="mb-2"> <i className="fas fa-link"></i> {post.siteLink} </span>}
                    {post.siteLink === "" && ''}

                </div>
                <div className="d-flex d-row mb-2 ms-2">
                    <span className="flex-grow-1"><i className="far fa-comment"></i> {post.numComments}</span>
                    <span className="flex-grow-1"><i className="fas fa-retweet"></i> {post.numShares}</span>
                    <span className="flex-grow-1"><i className="far fa-heart"></i> {post.numLikes}</span>
                    <span className="flex-grow-1"><i className="fas fa-sign-out fa-rotate-270"></i></span>
                </div>
            </div>
            
        </div>
    );
}

export default PostItem;