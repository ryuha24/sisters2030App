import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer';
import accountSaga from './screens/login/saga';

import { RootStack } from './navigation/CommonNavigator'

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleWare)
);
sagaMiddleWare.run(accountSaga);

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<RootStack />
			</Provider>
		);
	}
}

