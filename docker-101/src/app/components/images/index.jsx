// @flow strict

import React, { Component } from 'react'; // $FlowFixMe
import { Switch, Route } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import Main from './main';
import Assignment from '../general/assignments';
import Feedback from '../general/feedback';
import Lecture from './lecture';
import AssignmentPre from '../general/assignments/pre';
import AssignmentPost from '../general/assignments/post';
import FeedbackPre from '../general/feedback/pre';
import LecturePre from '../general/lecture/pre';
import LecturePost from '../general/lecture/post';
import { selectTopic } from '../../actions/base';
import type { Dispatch } from '../../actions/types';
import type { State } from '../../reducers/types/reducer-states';
import type { LectureTopic } from '../../reducers/types';

type StateProps = {|
  week: number,
  topic: LectureTopic,
|};

type DispatchProps = {|
  onSelectTopic: (number, number) => void,
|};

type Props = StateProps & DispatchProps;

class Images extends Component<Props> {
  componentDidMount() {
    const { onSelectTopic, week, topic } = this.props;
    if (topic !== 'images') {
      if (week === 1 || week === 3) onSelectTopic(2, 1);
      else onSelectTopic(3, 2);
    }
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

const mapStateToProps = (state: State): StateProps => ({
  week: state.base.subject ? state.base.subject.week : 1,
  topic: state.base.topic,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onSelectTopic: (week, subPath) => dispatch(selectTopic('images', { week, subPath })),
});

export default connect<Props, {||}, StateProps, DispatchProps, _, _>(mapStateToProps, mapDispatchToProps)(Images);
