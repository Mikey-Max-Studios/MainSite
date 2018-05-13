import initialState from './../state';
import * as requestMaker from './../actions/types';

const reducer = {
    [requestMaker.MAKE_REQUEST_ASYNC_SAGAS]: (state, action) => (
        {
            ...state,
            loading: true
        }
    ),
    [requestMaker.MAKE_REQUEST_SUCCESS_SAGAS]: (state, action) => (
        {
            ...state,
            payload: JSON.stringify(action.payload),
            loading: false,
            loaded: true
        }
    ),
    [requestMaker.MAKE_REQUEST_FAILED_SAGAS]: (state, action) => (
        {
            ...state,
            payload: action.payload,
            loading: false,
            loaded: true
        }
    )
};

const sagasReducer = (state = initialState, action) => (
    reducer[action.type]
        ? reducer[action.type](state, action) : state
);

export default sagasReducer;
