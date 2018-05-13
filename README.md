# react-redux-starter

Beamery React Starter, is an opinionated way of building a react application. While providing all the necessary tools for development in a cooperative and scalable environment.

### Features:
  - React-Router
  - Redux
      - Sagas
      - Thunk
  - Storybook
  - Jest
  - Proptypes

## Getting Started
- npm install
- npm start

The port is listening on 4000

## Core Concepts
Before starting to work with Beamery React Starter there are a few concepts you should consider:

#### Each file should only have one concern

Making each file with a single concern, makes the code more predictable. That way you can start seeing patterns in file naming, avoid conflicting logic and easier debugging in general; since you can narrow where the problem might came from.

#### Respect Naming

Naming plays a big role in this starter, it’s important that you enforce the correct naming for each concern.

#### Reflect as much as possible on state

Everything that is interactive and not static should be reflected on the state. This way you can guarantee a good application flow, where at each moment you can register the changes that are happening to your application.

#### File Splitting

Avoid having huge files (more than 200 lines === “HUUUUGEE”) , because at one point somebody else is going to work on that file and is not going to take any immediate conclusion out of it. If you are having different concerns on the same file, then you are breaking the first concept of “one concern per file”. When it’s the same concern but the file is to big you start doing file splitting. The main idea is that you create a folder, with the name of the old file, and add an index.js which is the export that contains the imports of the file division you made.

e.g:

Before
```
  - Effects.js
```
After
```
Effects
  - index.js
  - file1.js
  - file2.js
```

This pattern can be replicated at any level of the project.

#### Component Based architecture

This project follows a component based architecture, this means all components are nested in way that they all come from a common base. The idea is that  a component gets splitted into smaller sub components, to deal with application’s specifics. To better understand this, it’s better to explain with an example.

**e.g:**
```
App
  Component A
  |   - index.js
  |   - component.js
  Component B
  |   - index.js
  |   - component.js
  |   Sub-component B
  |     - index.js
  |     - component.js
  - index.js
```
Under this model, our index.js at the app level should contain Component A & Component B. While the index.js at Component B level should contain Sub-component B and so on. The idea is that the components are encapsulated in a way that if I want to use my App Component and all the components that are contained in App Component, I just need to export one file (the index.js at the app folder level).

## How to create a Component

##### 1. Create a folder with the component name in src
##### 2. Create the index.js file inside your component folder
In the index.js you can either have your component directly (case it doesn’t need to connect to the redux store), or if you want to make it more explicit, import and export the component.js into index.js

Case you need to connect to the store use the following boilerplate code.

```
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    action1,
    action2
} from 'store/nameOfTheStateContainer/actions';
import Component from './component';

function mapStateToProps (state) {
    return {
        nameOfTheStateContainer: state.nameOfTheStateContainer
    };
};

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(
            {
                action1: action1,
                action2: action2
            },
            dispatch
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

```
##### 3. create a component.js file in the same directory
You'll component will live here
##### 4. If needed Add typings.js file case you have properties in your component and export it to your component
**e.g**

*typings.js*
```
import PropTypes from 'prop-types';

export const typings = {
    myProps: PropTypes.object.isRequired
};

export const defaultProps = {
  myProps: {}
}
```
*component.js*
```
import React, { PureComponent } from 'react';
import { typings , defaultProps } from './typings';

class Component extends PureComponent {
    static defaultProps = defaultProps
    static propTypes = typings;

    render () {
        return (
            <div>
            </div>
        );
    }
}
```
#### 5. If needed add style.js to style your components and export into your component

## Redux Flow

This project uses Redux as a state manager. The pattern goes as following:

### Sync Code

1. Create action in Action folder
2. BindActions to component
3. Dispatch Actions from component
4. Make the necessary modification in reducer
5. return an imuttable object with the final state change

#### Async using Sagas

##### 1. Create ActionAsync, ActionSuccess, ActionFail
```
export const makeRequestAsyncSagas = () => (
    {
        type: requestMakerActions.MAKE_REQUEST_ASYNC_SAGAS
    }
);

export const makeRequestSuccessSagas = (data) => (
    {
        type: requestMakerActions.MAKE_REQUEST_SUCCESS_SAGAS,
        payload: data
    }
);

export const makeRequestFailedSagas = (data) => (
    {
        type: requestMakerActions.MAKE_REQUEST_FAILED_SAGAS,
        payload: data
    }
);
```
##### 2. BindAction Async to component
```
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeRequestAsyncSagas } from 'store/nameOfStateContainer/actions';
import Component from './component';

function mapStateToProps (state) {
    return {
    };
};

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(
            {
                makeRequestSagas: makeRequestAsyncSagas,
            },
            dispatch
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
```
##### 3. dispatch ActionAsync from component
```
import React, { Component } from 'react';

class Component extends Component {
    makeRequest = () => this.props.actions.makeRequestSagas();

    render () {
        return (
            <button
               onClick={this.makeRequest}
            />
        );
    }
}

export default Component;
```
##### 4. Listen ActionAsync in effects.js that triggers a function
```
export const requestMakerSagas = [
    takeEvery(requestMakerActionsTypes.MAKE_REQUEST_ASYNC_SAGAS, load)
];
```
##### 5. from the triggered function in effect.js dispatch ActionSuccess or ActionFail
```
function * load (action) {
    try {
        const request = yield fetch(
            'myurl.com/api/v1/something',
            headers
        );
        const response = yield request.json();
        yield put({
            type: requestMakerActionsTypes.MAKE_REQUEST_SUCCESS_SAGAS,
            payload: response
        });
    } catch (e) {
        yield put({
            type: requestMakerActionsTypes.MAKE_REQUEST_FAILED_SAGAS,
            payload: e
        });
    }
}
```
##### 6. Make necessary sync modification in reducer
```
const reducer = {
    [requestMaker.MAKE_REQUEST_ASYNC_SAGAS]: (state, action) => (
        {
            ...state,
            loading: true
        }
    ),
    [requestMaker.MAKE_REQUEST_SUCCESS_SAGAS]: (state, action) => (
        {
            ...state,
            payload: JSON.stringify(action.payload),
            loading: false,
            loaded: true
        }
    ),
    [requestMaker.MAKE_REQUEST_FAILED_SAGAS]: (state, action) => (
        {
            ...state,
            payload: action.payload,
            loading: false,
            loaded: true
        }
    )
};
```
##### 7. return an imuttable object with the final state change

### Async using Thunk

##### 1. Create Thunk function in effects.js
```
export function makeAsyncWithThunk () {
    return dispatch => {
        dispatch(
            requestMakerActions.makeRequestAsyncThunk()
        );

        try {
            fetch(
                'myurl.com/api/v1/something',
                headers
            )
                .then(res => res.json())
                .then(json => dispatch(
                    requestMakerActions
                        .makeRequestSuccessThunk(json)
                ));
        } catch (e) {
            dispatch(
                requestMakerActions.makeRequestFailedThunk(e)
            );
        }
    };
}
```
##### 2. Create ActionAsync, ActionSuccess, ActionFail in action folder
```
export const makeRequestAsyncThunk = () => (
    {
        type: requestMakerActions.MAKE_REQUEST_ASYNC_THUNK
    }
);

export const makeRequestSuccessThunk = (data) => (
    {
        type: requestMakerActions.MAKE_REQUEST_SUCCESS_THUNK,
        payload: data
    }
);

export const makeRequestFailedThunk = (data) => (
    {
        type: requestMakerActions.MAKE_REQUEST_FAILED_THUNK,
        payload: data
    }
);
```
##### 3. Bind function to component
```
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeAsyncWithThunk } from 'store/nameOfStateContainer/effects';
import Component from './component';

function mapStateToProps (state) {
    return {
    };
};

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(
            {
                makeRequestAsyncThunk: makeAsyncWithThunk,
            },
            dispatch
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
```
##### 4. dispatch function from component
```
import React, { Component } from 'react';

class Component extends Component {
    makeRequest = () => this.props.actions.makeRequestAsyncThunk();

    render () {
        return (
            <button
               onClick={this.makeRequest}
            />
        );
    }
}

export default Component;
```
##### 5. dispatch ActionAsync from function and that subsequently ActionSuccess, ActionFail
##### 6. Make necessary sync modification in reducer
```
const reducer = {
    [requestMaker.MAKE_REQUEST_ASYNC_THUNK]: (state, action) => (
        {
            ...state,
            loading: true
        }
    ),
    [requestMaker.MAKE_REQUEST_SUCCESS_THUNK]: (state, action) => (
        {
            ...state,
            payload: JSON.stringify(action.payload),
            loading: false,
            loaded: true
        }
    ),
    [requestMaker.MAKE_REQUEST_FAILED_THUNK]: (state, action) => (
        {
            ...state,
            payload: action.payload,
            loading: false,
            loaded: true
        }
    )
};
```
##### 7. return an imuttable object with the final state change

## Naming Glossary

#### index.js
this is the file in folder that gets exported to other folders. The logic is that the folder where you’ll be importing this file needs to contain it and not the other way around.

#### component.js
where all your component logic goes. Everything that is not directly related to component logic should not be in this file (connect to redux-store, typings, styles, should not be in this file)

#### style.js
all your styles at the component level (this basically means you are using this to style the component in the same directory).

#### typings.js
all properties must be typed. The common use is to import this file to the component.js file in the same directory, and add it as a static attribute.
