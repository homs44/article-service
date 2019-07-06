import { handleActions } from 'redux-actions';
import * as types from '../actionTypes';

const initialState = {
    isLiked: false
}

export default handleActions({
    [types.LIKE_ARTICLE_SUCCESS]: (state, action) => {
        const { isLiked } = action.payload;
        return Object.assign({}, state, {
            isLiked,
        })
    },
    [types.GET_LIKE_SUCCESS]: (state, action) => {
        const { isLiked } = action.payload;
        return Object.assign({}, state, {
            isLiked,
        })
    },

}, initialState)