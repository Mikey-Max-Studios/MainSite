import { put, takeEvery } from 'redux-saga/effects';
import * as requestMakerActionsTypes from './actions/types';
import * as requestMakerActions from './actions/actions';

const headers = {
    headers: new Headers({
        'Content-Type': 'application/json'
    }),
    method: 'GET',
    mode: 'cors',
    credentials: 'same-origin'
};

// sagas
function * load (action) {
    try {
        const request = yield fetch(
            'https://pokeapi.co/api/v2/pokemon/2/',
            headers
        );
        const response = yield request.json();
        yield put({
            type: requestMakerActionsTypes.MAKE_REQUEST_SUCCESS_SAGAS,
            payload: response
        });
    } catch (e) {
        yield put({
            type: requestMakerActionsTypes.MAKE_REQUEST_FAILED_SAGAS,
            payload: e
        });
    }
}

export const requestMakerSagas = [
    takeEvery(requestMakerActionsTypes.MAKE_REQUEST_ASYNC_SAGAS, load)
];

// Thunk
export function makeAsyncWithThunk () {
    return dispatch => {
        dispatch(
            requestMakerActions.makeRequestAsyncThunk()
        );

        try {
            fetch(
                'https://pokeapi.co/api/v2/pokemon/2/',
                headers
            )
                .then(res => res.json())
                .then(json => dispatch(
                    requestMakerActions
                        .makeRequestSuccessThunk(json)
                ));
        } catch (e) {
            dispatch(
                requestMakerActions.makeRequestFailedThunk(e)
            );
        }
    };
}
