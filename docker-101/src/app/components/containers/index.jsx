// @flow strict

import React, { Component } from 'react'; // $FlowFixMe
import { Switch, Route } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import Main from './main';
import Assignment from '../general/assignments';
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

class Containers extends Component<DispatchProps> {
  componentDidMount() {
    const { onSelectTopic } = this.props;
    onSelectTopic();
  }

  render() {
    return (
      <div>
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
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onSelectTopic: () => dispatch(selectTopic('containers')),
});

export default connect<{||}, {||}, {||}, {||}, _, _>(null, mapDispatchToProps)(Containers);
