import React from 'react';
import { render } from 'react-dom';
import App from 'app';
import configureStore from 'store';
import registerServiceWorker from 'registerServiceWorker';
import { Provider } from 'react-redux';

render(
    <Provider store={configureStore()}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
