// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import { Questionnaire } from '../../styled/page';
import { receiveInput } from '../../../actions/inputs';
import type { State } from '../../../reducers/types/reducer-states';
import type { LectureTopic } from '../../../reducers/types';
import type { Dispatch } from '../../../actions/types';

type StateProps = {
  hasAssignment: boolean,
  lectureTopic: LectureTopic,
  inputs: Array<string>,
};

type DispatchProps = {
 onReceiveInput: (inputs: Array<string>, which?: LectureTopic) => void,
};

type Props = StateProps & DispatchProps;

const LecturePost = ({ hasAssignment, lectureTopic, inputs, onReceiveInput }: Props) => {
  let one, two, three, four;
  if (inputs != null) {
    ([one, two, three, four] = inputs);
  }

  return (
    <div>
      {hasAssignment
        ? <h3><Link to='../'>Lecture</Link>{' > Lecture Recap > '}<Link to='../../assignment/pre/'>Assignment Prep</Link></h3>
        : <h3><Link to='../'>Lecture</Link>{' > Lecture Recap'}</h3>
      }
      <Questionnaire>
        <p>What did I hear today that is in conflict with my prior understanding?</p>
        <textarea value={one} onChange={e => onReceiveInput([e.target.value, two, three, four], lectureTopic)} />
        <p>What was today’s class session about?</p>
        <textarea value={two} onChange={e => onReceiveInput([one, e.target.value, three, four], lectureTopic)} />
        <p>How did the ideas of today’s class session relate to previous class sessions?</p>
        <textarea value={three} onChange={e => onReceiveInput([one, two, e.target.value, four], lectureTopic)} />
        <p>What did I find most interesting about class today?</p>
        <textarea value={four} onChange={e => onReceiveInput([one, two, three, e.target.value], lectureTopic)} />
        <p><button type='submit'>Submit</button></p>
      </Questionnaire>
    </div>
  );
};

const mapStateToProps = (state: State): StateProps => ({
  hasAssignment: state.base.subject != null && state.base.subject.week % 2 === 0,
  lectureTopic: state.base.topic,
  inputs: state.inputs[state.base.topic] && state.inputs[state.base.topic].lecturePost,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onReceiveInput: (inputs: Array<string>, which?: LectureTopic) => dispatch(receiveInput(inputs, which, 'lecturePost')),
});

export default connect<Props, {||}, StateProps, DispatchProps, _, _>(mapStateToProps, mapDispatchToProps)(LecturePost);
