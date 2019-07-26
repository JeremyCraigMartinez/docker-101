// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import { Questionnaire } from '../../styled/page';
import { receiveLectureInput } from '../../../actions/inputs';
import type { State } from '../../../reducers/types/reducer-states';
import type { LectureTopic } from '../../../reducers/types';
import type { Dispatch } from '../../../actions/types';

type StateProps = {
  lectureTopic: LectureTopic,
  inputs: Array<string>,
};

type DispatchProps = {
 onReceiveInput: (inputs: Array<string>, which: LectureTopic) => void,
};

type Props = StateProps & DispatchProps;

const AssignmentPost = ({ lectureTopic, inputs, onReceiveInput }: Props) => {
  let one, two, three, four;
  if (inputs != null) {
    ([one, two, three, four] = inputs);
  }

  return (
    <div>
      <h3><Link to='../'>Assignment</Link>{' > Assignment Recap > '}<Link to='../../feedback/pre/'>Feedback Prep</Link></h3>

      <Questionnaire>
        <p>To what extent did I successfully accomplish the goals of the task?</p>
        <textarea value={one} onChange={e => onReceiveInput([e.target.value, two, three, four], lectureTopic)} />
        <p>To what extent did I use resources available to me?</p>
        <textarea value={two} onChange={e => onReceiveInput([one, e.target.value, three, four], lectureTopic)} />
        <p>If I were the instructor, what would I identify as strengths of my work and flaws in my work?</p>
        <textarea value={three} onChange={e => onReceiveInput([one, two, e.target.value, four], lectureTopic)} />
        <p>When I do an assignment or task like this again, what do I want to remember to do differently? What worked well for me that I should use next time?</p>
        <textarea value={four} onChange={e => onReceiveInput([one, two, three, e.target.value], lectureTopic)} />
        <p><button type='submit'>Submit</button></p>
      </Questionnaire>
    </div>
  );
};

const mapStateToProps = (state: State): StateProps => ({
  lectureTopic: state.base.topic,
  inputs: state.inputs[state.base.topic] && state.inputs[state.base.topic].assignmentPost,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onReceiveInput: (inputs: Array<string>, which: LectureTopic) => dispatch(receiveLectureInput(inputs, which, 'assignmentPost')),
});

export default connect<Props, {||}, StateProps, DispatchProps, _, _>(mapStateToProps, mapDispatchToProps)(AssignmentPost);
