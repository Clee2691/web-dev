import React from "react";
import { useDispatch } from "react-redux";
import { deleteTuit, updateTuit } from "../../../actions/tuits-actions";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();

    return(
        <div className="list-group-item d-flex justify-content-start background-color-black">
            <div className="d-flex flex-column mt-2">
                <img className="image-prof" src={tuit.avatarImage}/>
            </div>
            <div className="d-flex flex-column flex-grow-1">
                <div className="row mb-2 mt-2">
                    <span className="d-flex justify-content-start">{tuit.userName} 
                        <i className="fas fa-check-circle"></i> 
                        <span className="text-muted fw-normal">
                            @{tuit.handle} - {tuit.time}
                        </span>
                        <span className="ms-auto"><i className="fa fa-remove" onClick={()=> deleteTuit(dispatch, tuit)}></i></span>
                    </span>
                    <span className="no-link-decor" dangerouslySetInnerHTML={ {__html: tuit.caption} }>
                    </span>
                </div>

                <div className="row border border-rounded border-color-gray ms-1 me-1 mb-3">
                    {/* If the picture has story title or caption, we have to style the image with the title differently */}
                    {tuit.storyTitle !== "" &&  <img className= "img-fluid ps-0 pe-0 border border-color-gray border-left-0 border-right-0 border-top-only" 
                        src={tuit.storyImage}/>}
                    {tuit.storyTitle === "" && <img className= "img-fluid ps-0 pe-0 border border-color-gray border-rounded" 
                        src={tuit.storyImage}/>}
                    
                    {tuit.storyTitle !== "" && <p className="mt-0 mb-1 pt-2"> {tuit.storyTitle} </p>}
                    {tuit.storyTitle === "" && ''}


                    {tuit.storyCaption !== "" && <p className="text-muted mb-1"> {tuit.storyCaption}</p>}
                    {tuit.storyCaption === "" && ''}

                    {tuit.siteLink !== "" && <span className="mb-2"> <i className="fas fa-link"></i> {tuit.siteLink} </span>}
                    {tuit.siteLink === "" && ''}
                </div>
                <div className="d-flex d-row mb-2 ms-2">
                    <span className="flex-grow-1"><i className="far fa-comment"></i> {tuit.numComments}</span>
                    <span className="flex-grow-1"><i className="fas fa-retweet"></i> {tuit.numShares}</span>
                    <span className="flex-grow-1">
                        Likes: {tuit.numLikes}
                        <i onClick={() => updateTuit(dispatch, {
                        ...tuit,
                        numLikes: tuit.numLikes + 1
                        })} className="far fa-thumbs-up ms-2 me-2"></i>
                        Dislikes: {tuit.dislikes}
                        <i onClick={() => updateTuit(dispatch, {
                        ...tuit,
                        dislikes: tuit.dislikes + 1
                        })} className="far fa-thumbs-down ms-2">
                        </i>
                    </span>
                    <span className="flex-grow-1"><i className="fas fa-sign-out fa-rotate-270"></i></span>
                </div>
            </div>
            
        </div>
    );
}

export default TuitListItem;