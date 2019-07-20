// @flow strict

import React, { Component } from 'react'; // $FlowFixMe
import { Switch, Route } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import Main from './main';
import AssignmentPre from '../general/assignments/pre';
import AssignmentPost from '../general/assignments/post';
import Assignment from '../general/assignments';
import FeedbackPre from '../general/feedback/pre';
import Feedback from './feedback';
import LecturePre from '../general/lecture/pre';
import Lecture from './lecture';
import LecturePost from '../general/lecture/post';
import { selectTopic } from '../../actions/base';
import type { Dispatch } from '../../actions/types';

type DispatchProps = {
  onSelectTopic: () => void,
};

class Services extends Component<DispatchProps> {
  componentDidMount() {
    const { onSelectTopic } = this.props;
    onSelectTopic();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/services/' component={Main} />
          <Route path='/services/lecture/pre' component={LecturePre} />
          <Route path='/services/lecture/post' component={LecturePost} />
          <Route path='/services/lecture' component={Lecture} />
          <Route path='/services/assignment/pre' component={AssignmentPre} />
          <Route path='/services/assignment/post' component={AssignmentPost} />
          <Route path='/services/assignment' component={Assignment} />
          <Route path='/services/feedback/pre' component={FeedbackPre} />
          <Route path='/services/feedback' component={Feedback} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onSelectTopic: () => dispatch(selectTopic('services')),
});

export default connect<{||}, {||}, {||}, {||}, _, _>(null, mapDispatchToProps)(Services);
