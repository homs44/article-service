import { handleActions } from 'redux-actions';
import * as types from '../actionTypes';

const initialState = {
    isLoading: false,
    error: null,
}

export default handleActions({
    [types.LIKE_ARTICLE_REQUEST]: (state) => Object.assign({}, state, { isLoading: true }),
    [types.LIKE_ARTICLE_SUCCESS]: (state, action) => Object.assign({}, state, { isLoading: false }),
    [types.LIKE_ARTICLE_FAILED]: (state, action) => Object.assign({}, state, { isLoading: false, error: action.payload }),
}, initialState)