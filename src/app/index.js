import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Homepage from './homepage';

class App extends PureComponent {
    render () {
        return (
            <Router>
                <div>
                    <Route
                        path='/'
                        exact
                        render={ () => <Homepage /> }
                    />
                    <Route
                        path='/test'
                        render={ () => <div> {'hello'} </div>}
                    />
                </div>
            </Router>
        );
    }
}
export default App;
