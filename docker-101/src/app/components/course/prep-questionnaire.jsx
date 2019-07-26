// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import { Questionnaire } from '../styled/page';
import { receiveCourseInput } from '../../actions/inputs';
import type { State } from '../../reducers/types/reducer-states';
import type { Dispatch } from '../../actions/types';

type StateProps = {
  inputs: Array<string>,
};

type DispatchProps = {
 onReceiveInput: (inputs: Array<string>) => void,
};

type Props = StateProps & DispatchProps;

const PreCourseQuestionnaire = ({ inputs, onReceiveInput }: Props) => {
  let one, two, three, four, five;
  if (inputs != null) {
    ([one, two, three, four, five] = inputs);
  }

  return (
    <div>
      <h3><Link to='../'>Course Overview</Link>{' > Pre-course Questionnaire > '}<Link to='../concepts/'>Containerization Concepts</Link></h3>

      <Questionnaire>
        <p>Why is it important to learn the material in this course?</p>
        <textarea value={one} onChange={e => onReceiveInput([e.target.value, two, three, four, five])} />
        <p>How does success in this course relate to my career goals?</p>
        <textarea value={two} onChange={e => onReceiveInput([one, e.target.value, three, four, five])} />
        <p>How am I going to actively monitor my learning in this course?</p>
        <textarea value={three} onChange={e => onReceiveInput([one, two, e.target.value, four, five])} />
        <p>What do I most want to learn in this course?</p>
        <textarea value={four} onChange={e => onReceiveInput([one, two, three, e.target.value, five])} />
        <p>What do I want to be able to do by the end of this course?</p>
        <textarea value={five} onChange={e => onReceiveInput([one, two, three, four, e.target.value])} />
        <p><button type='submit'>Submit</button></p>
      </Questionnaire>
    </div>
  );
};

const mapStateToProps = (state: State): StateProps => ({
  inputs: state.inputs.coursePre,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onReceiveInput: (inputs: Array<string>) => dispatch(receiveCourseInput(inputs, 'coursePre')),
});

export default connect<Props, {||}, StateProps, DispatchProps, _, _>(mapStateToProps, mapDispatchToProps)(PreCourseQuestionnaire);
