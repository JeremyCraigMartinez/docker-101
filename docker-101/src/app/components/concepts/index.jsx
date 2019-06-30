// @flow strict

import React from 'react'; // $FlowFixMe
import { Switch, Route } from 'react-router-dom';

import Main from './main';
import Lecture from './lecture';
import LecturePre from '../general/lecture/pre';
import LecturePost from '../general/lecture/post';

const Concepts = () => (
  <div>
    <h1>Concepts</h1>

    <Switch>
      <Route exact path='/docker-101/concepts/' component={Main} />
      <Route path='/docker-101/concepts/lecture/pre' component={LecturePre} />
      <Route path='/docker-101/concepts/lecture/post' component={LecturePost} />
      <Route path='/docker-101/concepts/lecture' component={Lecture} />
    </Switch>
  </div>
);

export default Concepts;
