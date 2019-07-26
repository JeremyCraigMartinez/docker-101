// @flow strict

import React, { Fragment } from 'react'; // $FlowFixMe
import { Link, withRouter } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import { Questionnaire } from '../styled/page';
import { receiveCourseInput } from '../../actions/inputs';
import { nextTopicLastHalf } from '../general/feedback';
import type { State } from '../../reducers/types/reducer-states';
import type { LectureTopic } from '../../reducers/types';
import type { Dispatch } from '../../actions/types';

type StateProps = {
  inputs: Array<string>,
  topic: LectureTopic,
};

type DispatchProps = {
 onReceiveInput: (inputs: Array<string>) => void,
};

type Props = StateProps & DispatchProps & { history: { goBack: () => void } };

const SecondThirdQuestionnaire = ({ inputs, topic, onReceiveInput, history }: Props) => {
  let one, two, three, four, five, six, seven;
  if (inputs != null) {
    ([one, two, three, four, five, six, seven] = inputs);
  }

  return (
    <div>
      <h3>{topic != null && <Fragment><Link onClick={() => history.goBack()}>{`${topic.charAt(0).toUpperCase()}${topic.slice(1)}`}</Link>{' > '}</Fragment>}{'Second-third Questionnaire'}{topic != null ? nextTopicLastHalf[topic]([]) : null}</h3>

      <Questionnaire>
        <p>What will I still remember 5 year from now that I learned in this course?</p>
        <textarea value={one} onChange={e => onReceiveInput([e.target.value, two, three, four, five, six, seven])} />
        <p>What advice would I give a friend about how to learn the most in this course?</p>
        <textarea value={two} onChange={e => onReceiveInput([one, e.target.value, three, four, five, six, seven])} />
        <p>If I were to teach this course, how would I change it?</p>
        <textarea value={three} onChange={e => onReceiveInput([one, two, e.target.value, four, five, six, seven])} />
        <p>What have I learned about how I learn in this course that I could use in my future technology courses? In my career?</p>
        <textarea value={four} onChange={e => onReceiveInput([one, two, three, e.target.value, five, six, seven])} />
        <p>In what ways is the teaching in this course supportive of my learning? How could I maximize this?</p>
        <textarea value={five} onChange={e => onReceiveInput([one, two, three, four, e.target.value, six, seven])} />
        <p>In what ways is the teaching in this course not supportive of my learning? How could I compensate for or change this?</p>
        <textarea value={six} onChange={e => onReceiveInput([one, two, three, four, five, e.target.value, seven])} />
        <p>How interested am I in this course? How confident am I in my learning? What could I do to increase my interest and confidence?</p>
        <textarea value={seven} onChange={e => onReceiveInput([one, two, three, four, five, six, e.target.value])} />
        <p><button type='submit'>Submit</button></p>
      </Questionnaire>
    </div>
  );
};

const mapStateToProps = (state: State): StateProps => ({
  inputs: state.inputs.courseSecondThird,
  topic: state.base.topic,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onReceiveInput: (inputs: Array<string>) => dispatch(receiveCourseInput(inputs, 'courseSecondThird')),
});

export default withRouter(connect<Props, {||}, StateProps, DispatchProps, _, _>(mapStateToProps, mapDispatchToProps)(SecondThirdQuestionnaire));
