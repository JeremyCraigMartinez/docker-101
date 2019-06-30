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

const Concepts = () => (
  <div>
    <h1>Concepts</h1>

    <Switch>
      <Route exact path='/concepts/' component={Main} />
      <Route path='/concepts/lecture/pre' component={LecturePre} />
      <Route path='/concepts/lecture/post' component={LecturePost} />
      <Route path='/concepts/lecture' component={Lecture} />
      <Route path='/concepts/assignment/pre' component={AssignmentPre} />
      <Route path='/concepts/assignment/post' component={AssignmentPost} />
      <Route path='/concepts/assignment' component={Assignment} />
      <Route path='/concepts/feedback/pre' component={FeedbackPre} />
      <Route path='/concepts/feedback' component={Feedback} />
    </Switch>
  </div>
);

export default Concepts;
