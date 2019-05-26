import { combineReducers } from 'redux';

import accountReducer from '../screens/login/reducer';
import dataReducer from '../data/reducer';

const rootReducer = combineReducers({
    data: dataReducer,
    account: accountReducer
});

export default rootReducer;