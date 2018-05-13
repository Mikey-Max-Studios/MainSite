import PropTypes from 'prop-types';

const initialState = {
    loading: false,
    loaded: false,
    payload: undefined
};

initialState.PropTypes = {
    loading: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
    payload: PropTypes.object
};

export default initialState;
