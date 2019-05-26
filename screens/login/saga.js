import {loginFailure, loginSuccess, signUpFailure, signUpSuccess} from './action';
import {all, call, put, takeEvery} from 'redux-saga/effects';
import {NavigationActions} from 'react-navigation';

import {setMainNavigation,updateData} from '../../data/action';

import api from '../../api/api';

function navigateToMain(navigation) {
    const navigateAction = NavigationActions.navigate({
        routeName: 'Main',
        index: 0,
        actions: [
            NavigationActions.navigate({routeName: 'Main'})
        ]
    });
    navigation.dispatch(navigateAction);
}

function* signUp(action) {
    try {
        yield call(api, 'POST', '/users/register', {
            nickname: action.nickname,
            email: action.email,
            password: action.password,
            instagramId: action.instaId
        });
        yield call(navigateToMain, action.navigation);
        yield put(signUpSuccess());
    } catch(err) {
        action.navigation.pop();
        yield put(signUpFailure());
        alert('회원가입 실패!');
    }
}

function* login(action) {
    try {
        yield call(api, 'POST', '/users/login', {email: action.email, password: action.password});
        // const data = yield all({
        //     user: call(api, 'GET', '/users/userInfo', {}),
        // });
        // yield put(updateData(data));
        yield put(setMainNavigation(action.navigation));
        yield call(navigateToMain, action.navigation);
        yield put(loginSuccess());
    } catch(err) {
        action.navigation.pop();
        yield put(loginFailure());
        alert('로그인 실패!');
    }
}

function* accountSaga() {
    yield takeEvery('LOGIN', login);
    yield takeEvery('SIGN_UP', signUp);
}

export default accountSaga;