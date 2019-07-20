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
  lectureTopic: LectureTopic,
  inputs: Array<string>,
};

type DispatchProps = {
 onReceiveInput: (inputs: Array<string>, which?: LectureTopic) => void,
};

type Props = StateProps & DispatchProps;

const LecturePre = ({ lectureTopic, inputs, onReceiveInput }: Props) => {
  let one, two, three, four;
  if (inputs != null) {
    ([one, two, three, four] = inputs);
  }

  return (
    <div>
      <h3><Link to='../../'>Overview</Link>{' > Lecture Prep > '}<Link to='../'>Lecture</Link></h3>

      <Questionnaire>
        <p>What are the goals of the class session going to be?</p>
        <textarea value={one} onChange={e => onReceiveInput([e.target.value, two, three, four], lectureTopic)} />
        <p>What do I already know about this topic?</p>
        <textarea value={two} onChange={e => onReceiveInput([one, e.target.value, three, four], lectureTopic)} />
        <p>How could I best prepare for the class session?</p>
        <textarea value={three} onChange={e => onReceiveInput([one, two, e.target.value, four], lectureTopic)} />
        <p>What questions do I already have about this topic that I want to find out more about?</p>
        <textarea value={four} onChange={e => onReceiveInput([one, two, three, e.target.value], lectureTopic)} />
        <p><button type='submit'>Submit</button></p>
      </Questionnaire>
    </div>
  );
};

const mapStateToProps = (state: State): StateProps => ({
  lectureTopic: state.base.topic,
  inputs: state.inputs[state.base.topic] && state.inputs[state.base.topic].lecturePre,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onReceiveInput: (inputs: Array<string>, which?: LectureTopic) => dispatch(receiveInput(inputs, which, 'lecturePre')),
});

export default connect<Props, {||}, StateProps, DispatchProps, _, _>(mapStateToProps, mapDispatchToProps)(LecturePre);
