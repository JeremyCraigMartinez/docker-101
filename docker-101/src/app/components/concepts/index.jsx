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
      <Route exact path='/docker-101/concepts/' component={Main} />
      <Route path='/docker-101/concepts/lecture/pre' component={LecturePre} />
      <Route path='/docker-101/concepts/lecture/post' component={LecturePost} />
      <Route path='/docker-101/concepts/lecture' component={Lecture} />
      <Route path='/docker-101/concepts/assignment/pre' component={AssignmentPre} />
      <Route path='/docker-101/concepts/assignment/post' component={AssignmentPost} />
      <Route path='/docker-101/concepts/assignment' component={Assignment} />
      <Route path='/docker-101/concepts/feedback/pre' component={FeedbackPre} />
      <Route path='/docker-101/concepts/feedback' component={Feedback} />
    </Switch>
  </div>
);

export default Concepts;
