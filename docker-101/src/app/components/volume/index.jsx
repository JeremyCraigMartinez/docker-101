// @flow strict

import React, { Component } from 'react'; // $FlowFixMe
import { Switch, Route } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import Main from './main';
import AssignmentPre from '../general/assignments/pre';
import AssignmentPost from '../general/assignments/post';
import FeedbackPre from '../general/feedback/pre';
import LecturePre from '../general/lecture/pre';
import Lecture from './lecture';
import LecturePost from '../general/lecture/post';
import { selectTopic } from '../../actions/base';
import type { Dispatch } from '../../actions/types';

type DispatchProps = {
  onSelectTopic: () => void,
};

class Volume extends Component<DispatchProps> {
  componentDidMount() {
    const { onSelectTopic } = this.props;
    onSelectTopic();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/volume/' component={Main} />
          <Route path='/volume/lecture/pre' component={LecturePre} />
          <Route path='/volume/lecture/post' component={LecturePost} />
          <Route path='/volume/lecture' component={Lecture} />
          <Route path='/volume/assignment/pre' component={AssignmentPre} />
          <Route path='/volume/assignment/post' component={AssignmentPost} />
          <Route path='/volume/feedback/pre' component={FeedbackPre} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onSelectTopic: () => dispatch(selectTopic('volume')),
});

export default connect<{||}, {||}, {||}, {||}, _, _>(null, mapDispatchToProps)(Volume);
