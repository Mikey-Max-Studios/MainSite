import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeRequestAsyncSagas } from 'store/requestMaker/actions/actions';
import { makeAsyncWithThunk } from 'store/requestMaker/effects';
import RequestMaker from './component';

function mapStateToProps (state) {
    return {
    };
};

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(
            {
                makeRequestSagas: makeRequestAsyncSagas,
                makeRequestThunk: makeAsyncWithThunk
            },
            dispatch
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestMaker);
