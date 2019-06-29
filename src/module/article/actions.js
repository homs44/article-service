import { createAction } from 'redux-actions';
import * as articleAPI from '../../api/articleAPI';
import * as types from '../actionTypes';
import { push } from 'connected-react-router';

/** 
 * 게시글 등록
 */
const addArticleRequest = createAction(types.ADD_ARTICLE_REQUEST)
const addArticleSuccess = createAction(types.ADD_ARTICLE_SUCCESS)
export const addArticleFailed = createAction(types.ADD_ARTICLE_FAILED)

export const addArticle = ({ file, content }) => {
    return (dispatch, getState) => {
        dispatch(addArticleRequest())
        const state = getState();
        if (!state.auth.user) {
            dispatch(addArticleFailed(new Error('user not found')));
            return;
        }
        const userId = state.auth.user.uid;
        const userDisplayName = state.auth.user.displayName;
        const userProfileUrl = state.auth.user.photoURL;

        articleAPI.addArticle({
            file,
            content,
            userId,
            userDisplayName,
            userProfileUrl
        }).then(() => {
            dispatch(addArticleSuccess())
            dispatch(push('/'))
        }).catch((error) => {
            dispatch(addArticleFailed(error))
        })
    }
}


/** 
 * 게시글 리스트 가져오기
 */
const getArtticleListRequest = createAction(types.GET_ARTICLE_LIST_REQUEST)
const getArtticleListSuccess = createAction(types.GET_ARTICLE_LIST_SUCCESS)
const getArtticleListFailed = createAction(types.GET_ARTICLE_LIST_FAILED)

export const getArticleList = (lastItem, count) => {
    return (dispatch, getState) => {
        dispatch(getArtticleListRequest())

        articleAPI.getArticleList(lastItem, count)
            .then((snapshots) => {
                dispatch(getArtticleListSuccess({
                    list: snapshots.docs,
                    isConcat: lastItem ? true : false
                }))
            }).catch((error) => {
                console.log(error);
                dispatch(getArtticleListFailed(error))
            })
    }
}