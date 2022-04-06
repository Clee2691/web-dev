import * as service from '../services/tuits-service';

export const CREATE_TUIT = 'CREATE_TUIT';
export const FIND_ALL_TUITS = 'FIND_ALL_TUITS';
export const UPDATE_TUIT = 'UPDATE_TUIT';
export const DELETE_TUIT = 'DELETE_TUIT';

export const createTuit = async (dispatch, tuit) => {
    const createdTuit = {
        "avatarImage": "../tuiter/images/reactjs.png",
        "userName": "ReactJS",
        "handle": "ReactJS",
        "time": "2h",
        "caption": tuit,
        "storyImage": "../tuiter/images/reactjs.png",
        "storyTitle": "",
        "storyCaption": "",
        "siteLink": "",
        "numComments" :123,
        "numShares": 456,
        "numLikes": 789,
        "dislikes": 0,
    };
    const newTuit = await service.createTuit(createdTuit);
    dispatch({
        type:CREATE_TUIT,
        newTuit
    })
}
export const findAllTuits = async (dispatch) => {
    const tuits = await service.findAllTuits();
    dispatch({
      type: FIND_ALL_TUITS,
      tuits
    });
}
export const updateTuit = async (dispatch, tuit) => {
    const status = await service.updateTuit(tuit);
    dispatch({
      type: UPDATE_TUIT,
      tuit
    });
   

}
export const deleteTuit = async (dispatch, tuit) => {
    const response = await service.deleteTuit(tuit);
    dispatch({
      type: DELETE_TUIT,
      tuit
    })
   
}