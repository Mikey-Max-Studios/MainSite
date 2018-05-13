import React, { PureComponent } from 'react';
import {
    props,
    defaultProps
} from './typings';

class Fake extends PureComponent {
    static propTypes= props;
    static defaultProps= defaultProps;

    render () {
        if (this.props.fakeProps) {
            return (
                <div>
                    {'props passed!'}
                </div>
            );
        }
        return (
            <div>
                <p> {'Just A fake component'} </p>
                <p> {`I'm an ugly component btw`} </p>
            </div>
        );
    };
};

export default Fake;
