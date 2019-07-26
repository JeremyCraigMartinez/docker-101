// @flow strict

import React, { Component } from 'react'; // $FlowFixMe
import { Switch, Route } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import Main from './main';
import AssignmentPre from '../general/assignments/pre';
import AssignmentPost from '../general/assignments/post';
import Assignment from '../general/assignments';
import FeedbackPre from '../general/feedback/pre';
import Feedback from '../general/feedback';
import LecturePre from '../general/lecture/pre';
import Lecture from './lecture';
import LecturePost from '../general/lecture/post';
import { selectTopic } from '../../actions/base';
import type { Dispatch } from '../../actions/types';
import type { State } from '../../reducers/types/reducer-states';
import type { LectureTopic } from '../../reducers/types';

type StateProps = {|
  week: number,
  topic: LectureTopic,
  subpath: number,
|};

type DispatchProps = {|
  onSelectTopic: (number, number) => void,
|};

type Props = StateProps & DispatchProps;

class Network extends Component<Props> {
  componentDidMount() {
    const { onSelectTopic, week, topic, subpath } = this.props;
    if (topic !== 'network') onSelectTopic(week + 1, subpath);
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

const mapStateToProps = (state: State): StateProps => ({
  week: state.base.subject ? state.base.subject.week : 4,
  subpath: state.base.subject && state.base.subject.subpath ? state.base.subject.subpath : 1,
  topic: state.base.topic,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onSelectTopic: (week, subPath) => dispatch(selectTopic('network', { week, subPath })),
});

export default connect<Props, {||}, StateProps, DispatchProps, _, _>(mapStateToProps, mapDispatchToProps)(Network);
