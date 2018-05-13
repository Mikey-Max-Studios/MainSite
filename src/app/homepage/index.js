import React, { PureComponent } from 'react';
import Counter from './counter';
import RequestMaker from './requestMaker';

class Homepage extends PureComponent {
    render () {
        return (
            <div>
                <Counter />
                <RequestMaker />
            </div>
        );
    }
}
export default Homepage;
