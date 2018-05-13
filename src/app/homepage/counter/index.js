import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    increaseCounter,
    decreaseCounter
} from 'store/counter/actions/actions';
import Counter from './component';

function mapStateToProps (state) {
    return {
        counter: state.counter
    };
};

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(
            {
                increase: increaseCounter,
                decrease: decreaseCounter
            },
            dispatch
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
