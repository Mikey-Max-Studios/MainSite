import React, { PureComponent } from 'react';
import { typings } from './typings';

class Payload extends PureComponent {
    static propTypes = typings;

    render () {
        if (this.props.requestMaker.sagas.loading || this.props.requestMaker.thunk.loading) {
            return (
                <div>
                    {`I am loading because this request is slow`}
                </div>
            );
        }

        if (this.props.requestMaker.sagas.loaded) {
            return (
                <div>
                    {this.props.requestMaker.sagas.payload}
                </div>
            );
        }

        if (this.props.requestMaker.thunk.loaded) {
            return (
                <div>
                    {this.props.requestMaker.thunk.payload}
                </div>
            );
        }

        return (
            <div>
                {'Request has not been made yet'}
            </div>
        );
    }
}

export default Payload;
