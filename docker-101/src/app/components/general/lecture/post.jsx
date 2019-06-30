// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import type { State } from '../../../reducers/types/reducer-states';

type StateProps = {|
  hasAssignment: boolean,
|};

const LecturePost = ({ hasAssignment }: StateProps) => (
  <div>
    {hasAssignment
      ? <h3>{'Lecture Recap > '}<Link to='../../assignment/pre/'>Assignment Prep</Link></h3>
      : <h3>Lecture Recap</h3>
    }
  </div>
);

const mapStateToProps = (state: State): StateProps => ({
  hasAssignment: state.base.subject != null && state.base.subject.week % 2 === 0,
});

export default connect<StateProps, {||}, StateProps, {||}, _, _>(mapStateToProps)(LecturePost);
