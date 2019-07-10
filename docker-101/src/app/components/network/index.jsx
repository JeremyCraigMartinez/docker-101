// @flow strict

import React, { Component } from 'react'; // $FlowFixMe
import { Switch, Route } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import Main from './main';
import AssignmentPre from '../general/assignments/pre';
import AssignmentPost from '../general/assignments/post';
import Assignment from './assignment';
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

class Network extends Component<DispatchProps> {
  componentDidMount() {
    const { onSelectTopic } = this.props;
    onSelectTopic();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/network/' component={Main} />
          <Route path='/network/lecture/pre' component={LecturePre} />
          <Route path='/network/lecture/post' component={LecturePost} />
          <Route path='/network/lecture' component={Lecture} />
          <Route path='/network/assignment/pre' component={AssignmentPre} />
          <Route path='/network/assignment/post' component={AssignmentPost} />
          <Route path='/network/assignment' component={Assignment} />
          <Route path='/network/feedback/pre' component={FeedbackPre} />
          <Route path='/network/feedback' component={Feedback} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onSelectTopic: () => dispatch(selectTopic('network')),
});

export default connect<{||}, {||}, {||}, {||}, _, _>(null, mapDispatchToProps)(Network);
