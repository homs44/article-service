import { combineReducers } from "redux";
import addArticle from './addArticle';
import articleList from './articleList';
import getArticle from './getArticle';
import getCommentList from './getCommentList';
import addComment from './addComment';
import getLike from './getLike';
import likeArticle from './likeArticle';
import like from './like';

export default combineReducers({
    addArticle,
    articleList,
    getArticle,
    getCommentList,
    addComment,
    like,
    getLike,
    likeArticle
})