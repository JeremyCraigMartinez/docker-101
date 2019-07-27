// @flow strict

import React from 'react'; // $FlowFixMe
import { Switch, Route } from 'react-router-dom';

import Main from './main';
import Qa from './qa';
import End from './end';
import Prep from './prep-questionnaire';
import Post from './post-questionnaire';
import FirstThird from './first-third-questionnaire';
import SecondThird from './second-third-questionnaire';

const Course = () => (
  <div>
    <Switch>
      <Route path='/pre' component={Prep} />
      <Route path='/first-third' component={FirstThird} />
      <Route path='/second-third' component={SecondThird} />
      <Route path='/post' component={Post} />
      <Route path='/end' component={End} />
      <Route path='/qa' component={Qa} />
      <Route path='/' component={Main} />
    </Switch>
  </div>
);

export default Course;
