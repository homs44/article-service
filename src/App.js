import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignInPage from './page/auth/SignInPage'
import SignInWithEmailPage from './page/auth/SignInWithEmailPage'
import SignUpWithEmailPage from './page/auth/SignUpWithEmailPage'
import Header from './component/header/Header'
import ArticleListPage from './page/article/ArticleListPage';
import ArticlePage from './page/article/ArticlePage';
import AddArticlePage from './page/article/AddArticlePage';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={ArticleListPage} />
          <Route path="/sign-in" exact component={SignInPage} />
          <Route path="/sign-in/email" component={SignInWithEmailPage} />
          <Route path="/sign-up/email" component={SignUpWithEmailPage} />
          <Route path="/add-article" component={AddArticlePage} />
          <Route path="/articles/:articleId" component={ArticlePage} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
