// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import { Questionnaire } from '../../styled/page';
import type { State } from '../../../reducers/types/reducer-states';

type StateProps = {|
  hasAssignment: boolean,
|};

const LecturePost = ({ hasAssignment }: StateProps) => (
  <div>
    {hasAssignment
      ? <h3><Link to='../'>Lecture</Link>{' > Lecture Recap > '}<Link to='../../assignment/pre/'>Assignment Prep</Link></h3>
      : <h3><Link to='../'>Lecture</Link>{' > Lecture Recap'}</h3>
    }
    <Questionnaire>
      <p>What did I hear today that is in conflict with my prior understanding?</p>
      <textarea />
      <p>What was today’s class session about?</p>
      <textarea />
      <p>How did the ideas of today’s class session relate to previous class sessions?</p>
      <textarea />
      <p>What did I find most interesting about class today?</p>
      <textarea />
      <p><button type='submit'>Submit</button></p>
    </Questionnaire>
  </div>
);

const mapStateToProps = (state: State): StateProps => ({
  hasAssignment: state.base.subject != null && state.base.subject.week % 2 === 0,
});

export default connect<StateProps, {||}, StateProps, {||}, _, _>(mapStateToProps)(LecturePost);
