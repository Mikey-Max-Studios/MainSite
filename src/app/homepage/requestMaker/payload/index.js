import { connect } from 'react-redux';
import Payload from './component';

function mapStateToProps (state) {
    return {
        requestMaker: state.requestMaker
    };
};

export default connect(mapStateToProps)(Payload);
