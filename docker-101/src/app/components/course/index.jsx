// @flow strict

import React from 'react'; // $FlowFixMe
import { Switch, Route } from 'react-router-dom';

import Main from './main';
import Prep from './prep-questionnaire';

const Images = () => (
  <div>
    <Switch>
      <Route path='/pre' component={Prep} />
      <Route path='/' component={Main} />
    </Switch>
  </div>
);

export default Images;
