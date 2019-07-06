import { handleActions } from 'redux-actions';
import * as types from '../actionTypes';

const initialState = {
    isLoading: false,
    error: null,
}

export default handleActions({
    [types.GET_LIKE_REQUEST]: (state) => Object.assign({}, state, { isLoading: true }),
    [types.GET_LIKE_SUCCESS]: (state, action) => Object.assign({}, state, { isLoading: false }),
    [types.GET_LIKE_FAILED]: (state, action) => Object.assign({}, state, { isLoading: false, error: action.payload }),
}, initialState)