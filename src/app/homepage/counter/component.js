import React, { PureComponent } from 'react';
import { typings } from './typings';

class Counter extends PureComponent {
    static propTypes = typings;

    increaseCounter = () => this.props.actions.increase();

    decreaseCounter = () => this.props.actions.decrease();

    render () {
        return (
            <div>
                <p>
                    {this.props.counter.value}
                </p>
                <button
                    onClick={this.increaseCounter}
                >
                    {'increase'}
                </button>
                <button
                    onClick={this.decreaseCounter}
                >
                    {'decrease'}
                </button>
            </div>
        );
    }
}

export default Counter;
