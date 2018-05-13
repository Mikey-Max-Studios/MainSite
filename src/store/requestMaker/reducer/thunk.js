import initialState from './../state';
import * as requestMaker from './../actions/types';

const reducer = {
    [requestMaker.MAKE_REQUEST_ASYNC_THUNK]: (state, action) => (
        {
            ...state,
            loading: true
        }
    ),
    [requestMaker.MAKE_REQUEST_SUCCESS_THUNK]: (state, action) => (
        {
            ...state,
            payload: JSON.stringify(action.payload),
            loading: false,
            loaded: true
        }
    ),
    [requestMaker.MAKE_REQUEST_FAILED_THUNK]: (state, action) => (
        {
            ...state,
            payload: action.payload,
            loading: false,
            loaded: true
        }
    )
};

const thunkReducer = (state = initialState, action) => (
    reducer[action.type]
        ? reducer[action.type](state, action) : state
);

export default thunkReducer;
