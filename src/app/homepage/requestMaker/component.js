import React, { PureComponent } from 'react';
import { typings } from './typings';
import Payload from './payload';

class RequestMaker extends PureComponent {
    static propTypes = typings;

    makeRequestSagas = () => this.props.actions.makeRequestSagas();

    makeThunkRequest = () => this.props.actions.makeRequestThunk();

    render () {
        return (
            <div>
                <button
                    onClick={this.makeRequestSagas}
                >
                    {'Make request with Sagas'}
                </button>
                <button
                    onClick={this.makeThunkRequest}
                >
                    {'Make request with thunk'}
                </button>
                <Payload />
            </div>
        );
    }
}

export default RequestMaker;
