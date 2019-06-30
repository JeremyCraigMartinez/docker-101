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
    <h1>Images</h1>

    <Switch>
      <Route exact path='/docker-101/images/' component={Main} />
      <Route path='/docker-101/images/lecture/pre' component={LecturePre} />
      <Route path='/docker-101/images/lecture/post' component={LecturePost} />
      <Route path='/docker-101/images/lecture' component={Lecture} />
      <Route path='/docker-101/images/assignment/pre' component={AssignmentPre} />
      <Route path='/docker-101/images/assignment/post' component={AssignmentPost} />
      <Route path='/docker-101/images/assignment' component={Assignment} />
      <Route path='/docker-101/images/feedback/pre' component={FeedbackPre} />
      <Route path='/docker-101/images/feedback' component={Feedback} />
    </Switch>
  </div>
);

export default Images;
