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

const PostCourseQuestionnaire = ({ inputs, onReceiveInput }: Props) => {
  let one, two, three, four;
  if (inputs != null) {
    ([one, two, three, four] = inputs);
  }

  return (
    <div>
      <h3><Link to='../'>Course Overview</Link>{' > Post-course Questionnaire > '}<Link to='../end/'>Next steps</Link></h3>

      <Questionnaire>
        <p>What have I learned about how I learn in this course that I could use in my future technology courses? In my career?</p>
        <textarea value={one} onChange={e => onReceiveInput([e.target.value, two, three, four])} />
        <p>In what ways is the teaching in this course supportive of my learning? How could I maximize this?</p>
        <textarea value={two} onChange={e => onReceiveInput([one, e.target.value, three, four])} />
        <p>In what ways is the teaching in this course not supportive of my learning? How could I compensate for or change this?</p>
        <textarea value={three} onChange={e => onReceiveInput([one, two, e.target.value, four])} />
        <p>How interested am I in this course? How confident am I in my learning? What could I do to increase my interest and confidence?</p>
        <textarea value={four} onChange={e => onReceiveInput([one, two, three, e.target.value])} />
        <p><button type='submit'>Submit</button></p>
      </Questionnaire>
    </div>
  );
};

const mapStateToProps = (state: State): StateProps => ({
  inputs: state.inputs.coursePost,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onReceiveInput: (inputs: Array<string>) => dispatch(receiveCourseInput(inputs, 'coursePost')),
});

export default connect<Props, {||}, StateProps, DispatchProps, _, _>(mapStateToProps, mapDispatchToProps)(PostCourseQuestionnaire);
