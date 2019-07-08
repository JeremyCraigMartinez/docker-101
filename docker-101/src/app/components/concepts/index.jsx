// @flow strict

import React from 'react'; // $FlowFixMe
import { Switch, Route } from 'react-router-dom';

import Main from './main';
import Lecture from './lecture';
import LecturePre from '../general/lecture/pre';
import LecturePost from '../general/lecture/post';

const Concepts = () => (
  <div>
    <Switch>
      <Route exact path='/concepts/' component={Main} />
      <Route path='/concepts/lecture/pre' component={LecturePre} />
      <Route path='/concepts/lecture/post' component={LecturePost} />
      <Route path='/concepts/lecture' component={Lecture} />
    </Switch>
  </div>
);

export default Concepts;
