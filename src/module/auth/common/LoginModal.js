import { handleActions } from 'redux-actions';
import * as types from '../../actionTypes';

const initialState = {
    open: false
}

export default handleActions({
    [types.OPEN_LOGIN_MODAL]: (state) => Object.assign({}, state, { open: true }),
    [types.CLOSE_LOGIN_MODAL]: (state) => Object.assign({}, state, { open: false }),
}, initialState)