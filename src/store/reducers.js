import { combineReducers } from 'redux';

import counterReducer from './counter/reducer';
import requestMakerReducer from './requestMaker/reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    requestMaker: requestMakerReducer
});

export default rootReducer;
