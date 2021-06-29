import React from 'react';
import { storiesOf } from '@storybook/react';

import { Example }  from '../components/Example';

const stories = storiesOf('Example', module);

stories.add('Example', () => {
    return (<Example />);
});