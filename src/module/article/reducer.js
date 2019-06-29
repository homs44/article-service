import { combineReducers } from "redux";
import addArticle from './addArticle';
import articleList from './articleList';

export default combineReducers({
    addArticle,
    articleList,
})