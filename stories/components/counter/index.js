import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import Counter from 'app/homepage/counter';
import configureStore from 'store';

storiesOf('Counter component', module)
    .addDecorator(story => <Provider store={configureStore()}>{story()}</Provider>)
    .add('default view', () => (
        <Counter />
    ));
