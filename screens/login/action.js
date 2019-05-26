export const signUp = (nickname, email, password, instaId, navigation) => ({
    type: 'SIGN_UP',
    nickname: nickname,
    email: email,
    password: password,
    instaId: instaId,
    navigation: navigation
});

export const signUpSuccess = () => ({
    type: 'SIGN_UP_SUCCESS'
});

export const signUpFailure = () => ({
    type: 'SIGN_UP_FAILURE'
});

export const login = (email, password, navigation) => ({
    type: 'LOGIN',
    email: email,
    password: password,
    navigation: navigation
});

export const loginSuccess = () => ({
    type: 'LOGIN_SUCCESS'
});

export const loginFailure = () => ({
    type: 'LOGIN_FAILURE'
});