import * as counterActions from './types';

export const increaseCounter = () => (
    {
        type: counterActions.INCREASE_COUNTER
    }
);

export const decreaseCounter = () => (
    {
        type: counterActions.DECREASE_COUNTER
    }
);
