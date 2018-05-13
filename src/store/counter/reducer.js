import initialState from './state';
import * as counterActions from './actions/types';

const reducer = {
    [counterActions.INCREASE_COUNTER]: (state, action) => (
        {
            ...state,
            value: state.value + 1
        }
    ),
    [counterActions.DECREASE_COUNTER]: (state, action) => (
        {
            ...state,
            value: state.value - 1
        }
    )
};

const counterReducer = (state = initialState, action) => (
    reducer[action.type]
        ? reducer[action.type](state, action) : state
);

export default counterReducer;
