// @flow strict

import React, { Component } from 'react'; // $FlowFixMe
import { Switch, Route } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import Main from './main';
import Assignment from './assignment';
import Feedback from './feedback';
import Lecture from './lecture';
import AssignmentPre from '../general/assignments/pre';
import AssignmentPost from '../general/assignments/post';
import FeedbackPre from '../general/feedback/pre';
import LecturePre from '../general/lecture/pre';
import LecturePost from '../general/lecture/post';
import { selectTopic } from '../../actions/base';
import type { Dispatch } from '../../actions/types';

type DispatchProps = {
  onSelectTopic: () => void,
};

class Images extends Component<DispatchProps> {
  componentDidMount() {
    const { onSelectTopic } = this.props;
    onSelectTopic();
  }

  render() {
    return (
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
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onSelectTopic: () => dispatch(selectTopic('images')),
});

export default connect<{||}, {||}, {||}, {||}, _, _>(null, mapDispatchToProps)(Images);
