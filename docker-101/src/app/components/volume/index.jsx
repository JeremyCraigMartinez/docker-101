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

class Volume extends Component<Props> {
  componentDidMount() {
    const { onSelectTopic, week, topic, subpath } = this.props;
    if (topic !== 'volume') onSelectTopic(week + 1, subpath);
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
          <Route path='/volume/assignment' component={Assignment} />
          <Route path='/volume/feedback/pre' component={FeedbackPre} />
          <Route path='/volume/feedback' component={Feedback} />
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
  onSelectTopic: (week, subPath) => dispatch(selectTopic('volume', { week, subPath })),
});

export default connect<Props, {||}, StateProps, DispatchProps, _, _>(mapStateToProps, mapDispatchToProps)(Volume);
