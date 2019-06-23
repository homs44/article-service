import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import firebase from 'firebase';
import * as authActions from './module/auth/actions'
import { push } from 'connected-react-router'

/**
 * connected-react-router를 사용하기 위해서 history를 직접 만들어야 한다.
 * history.push기능을 redux에서 바로 사용하기 위해 추가
 */
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router'

// module/index.js -> 다음과 같이 index.js는 생략 가능
import { configureStore } from './module'

const history = createBrowserHistory();

// Redux store 생성
const store = configureStore(history);

// Firebase 환경 변수
const firebaseConfig = {
    apiKey: "AIzaSyAZY5lJYtQnbGUTd93s7uYUtWFcb2MrEr8",
    authDomain: "abcd-d4a7b.firebaseapp.com",
    databaseURL: "https://abcd-d4a7b.firebaseio.com",
    projectId: "abcd-d4a7b",
    storageBucket: "abcd-d4a7b.appspot.com",
    messagingSenderId: "439976404381",
    appId: "1:439976404381:web:7679b825f3e66ed1"
};
// Firebase 초기화
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
    store.dispatch(authActions.updateUser(user));
    // if(user){
    //     store.dispatch(push('/'))
    // }else{
    //     store.dispatch(push('/sign-in'))
    // }
})

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
