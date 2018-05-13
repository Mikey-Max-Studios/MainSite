import * as requestMakerActions from './types';

export const makeRequestAsyncSagas = () => (
    {
        type: requestMakerActions.MAKE_REQUEST_ASYNC_SAGAS
    }
);

export const makeRequestSuccessSagas = (data) => (
    {
        type: requestMakerActions.MAKE_REQUEST_SUCCESS_SAGAS,
        payload: data
    }
);

export const makeRequestFailedSagas = (data) => (
    {
        type: requestMakerActions.MAKE_REQUEST_FAILED_SAGAS,
        payload: data
    }
);

export const makeRequestAsyncThunk = () => (
    {
        type: requestMakerActions.MAKE_REQUEST_ASYNC_THUNK
    }
);

export const makeRequestSuccessThunk = (data) => (
    {
        type: requestMakerActions.MAKE_REQUEST_SUCCESS_THUNK,
        payload: data
    }
);

export const makeRequestFailedThunk = (data) => (
    {
        type: requestMakerActions.MAKE_REQUEST_FAILED_THUNK,
        payload: data
    }
);
