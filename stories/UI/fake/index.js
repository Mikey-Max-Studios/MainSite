import React from 'react';
import { storiesOf } from '@storybook/react';

import Fake from 'UI/fake';

storiesOf('Fake UI component', module)
    .add('default view', () => (
        <Fake />
    ))
    .add('fake props passed', () => (
        <Fake fakeProps={'value'} />
    ));
