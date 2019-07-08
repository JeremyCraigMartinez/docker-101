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

const Images = () => (
  <div>
    <Switch>
      <Route exact path='/images/' component={Main} />
      <Route path='/images/lecture/pre' component={LecturePre} />
      <Route path='/images/lecture/post' component={LecturePost} />
      <Route path='/images/lecture' component={Lecture} />
      <Route path='/images/assignment/pre' component={AssignmentPre} />
      <Route path='/images/assignment/post' component={AssignmentPost} />
      <Route path='/images/assignment' component={Assignment} />
      <Route path='/images/feedback/pre' component={FeedbackPre} />
      <Route path='/images/feedback' component={Feedback} />
    </Switch>
  </div>
);

export default Images;
