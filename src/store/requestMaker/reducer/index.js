import { combineReducers } from 'redux';
import sagasReducer from './sagas';
import thunkReducer from './thunk';

const requestMakerReducer = combineReducers({
    sagas: sagasReducer,
    thunk: thunkReducer
});

export default requestMakerReducer;
