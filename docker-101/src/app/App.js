// @flow strict

import React from 'react';
import Header from './components/header';
import { AppBody } from './components/styled/page';

export default () => (
  <div>
    <Header foo={'bar'} />
    <AppBody>

    </AppBody>
  </div>
);
