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

const getArticleRequest = createAction(types.GET_ARTICLE_REQUEST);
const getArticleSuccess = createAction(types.GET_ARTICLE_SUCCESS);
const getArticleFailed = createAction(types.GET_ARTICLE_FAILED);
export const getArticle = (articleId) => {
    return (dispatch, getState) => {
        dispatch(getArticleRequest())

        articleAPI.getArticle(articleId)
            .then((doc) => {
                dispatch(getArticleSuccess(doc));
            }).catch((error) => {
                console.log(error);
                dispatch(getArticleFailed(error))
            })
    }
}


/** 
 * 댓글 리스트 가져오기
 */
const getCommentListRequest = createAction(types.GET_COMMENT_LIST_REQUEST)
const getCommentListSuccess = createAction(types.GET_COMMENT_LIST_SUCCESS)
const getCommentListFailed = createAction(types.GET_COMMENT_LIST_FAILED)

export const getCommentList = (articleId, lastItem, count) => {
    return (dispatch, getState) => {

        dispatch(getCommentListRequest())

        articleAPI.getCommentList(articleId, lastItem, count)
            .then((snapshots) => {
                dispatch(getCommentListSuccess({
                    list: snapshots.docs,
                    isConcat: lastItem ? true : false
                }))
            }).catch((error) => {
                console.log(error);
                dispatch(getCommentListFailed(error))
            })
    }
}

/** 
 * 댓글 등록
 */
const addCommentRequest = createAction(types.ADD_COMMENT_REQUEST)
const addCommentSuccess = createAction(types.ADD_COMMENT_SUCCESS)
export const addCommentFailed = createAction(types.ADD_COMMENT_FAILED)

export const addComment = ({ articleId, content }) => {
    return (dispatch, getState) => {
        dispatch(addCommentRequest())
        const state = getState();
        if (!state.auth.user) {
            dispatch(addCommentFailed(new Error('user not found')));
            return;
        }
        const userId = state.auth.user.uid;
        const userDisplayName = state.auth.user.displayName;
        const userProfileUrl = state.auth.user.photoURL;

        articleAPI.addComment({
            userId,
            userDisplayName,
            userProfileUrl,
            content,
            articleId,
        }).then((doc) => {
            dispatch(addCommentSuccess(doc))
        })
            .catch((error) => {
                console.log(error);
                dispatch(addCommentFailed(error))
            })
    }
}


const likeArticleRequest = createAction(types.LIKE_ARTICLE_REQUEST)
const likeArticleSuccess = createAction(types.LIKE_ARTICLE_SUCCESS)
const likeArticleFailed = createAction(types.LIKE_ARTICLE_FAILED)

export const likeArticle = (articleId) => {
    return (dispatch, getState) => {
        dispatch(likeArticleRequest())
        const state = getState();
        if (!state.auth.user) {
            dispatch(likeArticleFailed(new Error('user not found')));
            return;
        }
        const userId = state.auth.user.uid;

        articleAPI.likeArticle(articleId, userId)
            .then((result) => {
                dispatch(likeArticleSuccess(result))
            }).catch((error) => {
                dispatch(likeArticleFailed(error))
            })
    }
}



const getLikeRequest = createAction(types.GET_LIKE_REQUEST)
const getLikeSuccess = createAction(types.GET_LIKE_SUCCESS)
const getLikeFailed = createAction(types.GET_LIKE_FAILED)

export const getLike = (articleId) => {
    return (dispatch, getState) => {
        dispatch(getLikeRequest())
        const state = getState();
        if (!state.auth.user) {
            dispatch(getLikeFailed(new Error('user not found')));
            return;
        }
        const userId = state.auth.user.uid;

        articleAPI.getLike(articleId, userId)
            .then((result) => {
                dispatch(getLikeSuccess(result))
            }).catch((error) => {
                dispatch(getLikeFailed(error))
            })
    }
}

