// @flow strict

import React from 'react'; // $FlowFixMe
import { Switch, Route } from 'react-router-dom';

import Main from './main';
import Assignment from './assignment';
import Feedback from './feedback';
import Lecture from './lecture';
import AssignmentPre from '../general/assignments/pre';
import AssignmentPost from '../general/assignments/post';
import FeedbackPre from '../general/feedback/pre';
import LecturePre from '../general/lecture/pre';
import LecturePost from '../general/lecture/post';

const Containers = () => (
  <div>
    <h1>Containers</h1>

    <Switch>
      <Route exact path='/containers/' component={Main} />
      <Route path='/containers/lecture/pre' component={LecturePre} />
      <Route path='/containers/lecture/post' component={LecturePost} />
      <Route path='/containers/lecture' component={Lecture} />
      <Route path='/containers/assignment/pre' component={AssignmentPre} />
      <Route path='/containers/assignment/post' component={AssignmentPost} />
      <Route path='/containers/assignment' component={Assignment} />
      <Route path='/containers/feedback/pre' component={FeedbackPre} />
      <Route path='/containers/feedback' component={Feedback} />
    </Switch>
  </div>
);

export default Containers;
