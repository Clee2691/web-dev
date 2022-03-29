import { FIND_ALL_TUITS, DELETE_TUIT, CREATE_TUIT, UPDATE_TUIT } from "../actions/tuits-actions";

const tuits = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_TUITS:
            return action.tuits;
        case UPDATE_TUIT:
            return state.map(
                tuit => tuit._id === action.tuit._id ?
                  action.tuit : tuit);
         
        case 'like-tuit':
            return state.map(tuit => {
                if (tuit._id === action.tuit._id) {
                    if (tuit.liked === true) {
                        tuit.liked = false;
                        tuit.numLikes--;
                    } else {
                        tuit.liked = true;
                        tuit.numLikes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });
        case DELETE_TUIT:
            return state.filter(tuit => tuit._id !== action.tuit._id);
        case CREATE_TUIT:
            return [
                    action.newTuit,
                    ...state,
                ]
        default:
            return(state);
    }

};

export default tuits;