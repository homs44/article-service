import React, { Component } from 'react';
import ArticleItem from './ArticleItem';
import { Loader } from 'semantic-ui-react';

class Article extends Component {

    static defaultProps = {
        id: null,
        article: null,
    }

    render() {
        const {
            article,
        } = this.props;

        return article ? (
            <ArticleItem />
        ) : (
                <Loader active/>
            )
    }
}

export default Article;