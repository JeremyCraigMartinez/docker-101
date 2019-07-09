// @flow strict

import React, { Component } from 'react'; // $FlowFixMe
import { Switch, Route } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import Main from './main';
import Lecture from './lecture';
import LecturePre from '../general/lecture/pre';
import LecturePost from '../general/lecture/post';
import { selectTopic } from '../../actions/base';
import type { Dispatch } from '../../actions/types';

type DispatchProps = {
  onSelectTopic: () => void,
};

class Concepts extends Component<DispatchProps> {
  componentDidMount() {
    const { onSelectTopic } = this.props;
    onSelectTopic();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/concepts/' component={Main} />
          <Route path='/concepts/lecture/pre' component={LecturePre} />
          <Route path='/concepts/lecture/post' component={LecturePost} />
          <Route path='/concepts/lecture' component={Lecture} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onSelectTopic: () => dispatch(selectTopic('concepts')),
});

export default connect<{||}, {||}, {||}, {||}, _, _>(null, mapDispatchToProps)(Concepts);
