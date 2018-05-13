import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from 'App.js';

const appDashboard = singleSpaReact({
    React,
    ReactDOM,
    domElementGetter,
    rootComponent: App
});

export function bootstrap (props) {
    return appDashboard.bootstrap(props);
}

export function mount (props) {
    return appDashboard.mount(props);
}

export function unmount (props) {
    return appDashboard.unmount(props);
}

function domElementGetter () {
    // Make sure there is a div for us to render into
    let el = document.getElementById('app-dashboard');
    if (!el) {
        el = document.createElement('div');
        el.id = 'app-dashboard';
        document.body.appendChild(el);
    }

    return el;
}

window.bmr = window.bmr || {};
window.bmr.appDashboard = appDashboard;
