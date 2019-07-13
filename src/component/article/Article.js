import React, { Component } from 'react';
import ArticleItem from './ArticleItem';
import { Loader } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as articleActions from '../../module/article/actions'

class Article extends Component {

    static defaultProps = {
        id: null,
        article: null,
    }

    componentDidMount() {
        if (this.props.id) {
            this.props.articleActions.getArticle(this.props.id);
            this.props.articleActions.getLike(this.props.id);
        }
    }

    onClickLike = (articleId) => {
        this.props.articleActions.likeArticle(articleId);
    }

    render() {
        const {
            article,
            isLiked,
        } = this.props;

        return article ? (
            <ArticleItem
                id={article.id}
                image={article.image}
                content={article.content}
                commentCnt={article.commentCnt}
                likeCnt={article.likeCnt}
                createdAt={article.createdAt}
                updatedAt={article.updatedAt}
                userDisplayName={article.userDisplayName}
                userId={article.userId}
                userProfileUrl={article.userProfileUrl}
                displayTimestamp={article.displayTimestamp}
                onClickLike={this.onClickLike}
                isLiked={isLiked}
            />
        ) : (
                <Loader active />
            )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.article.getArticle.isLoading,
        error: state.article.getArticle.error,
        article: state.article.getArticle.article,
        isLiked: state.article.like.isLiked
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        articleActions: bindActionCreators(articleActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);