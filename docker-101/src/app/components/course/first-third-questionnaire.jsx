// @flow strict

import React, { Fragment } from 'react'; // $FlowFixMe
import { Link, withRouter } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import { Questionnaire } from '../styled/page';
import { receiveCourseInput } from '../../actions/inputs';
import type { State } from '../../reducers/types/reducer-states';
import type { Dispatch } from '../../actions/types';
import type { LectureTopic } from '../../reducers/types';

type StateProps = {
  inputs: Array<string>,
  topic: LectureTopic,
};

type DispatchProps = {
 onReceiveInput: (inputs: Array<string>) => void,
};

type Props = StateProps & DispatchProps & { history: { goBack: () => void } };

const FirstThirdQuestionnaire = ({ inputs, topic, history, onReceiveInput }: Props) => {
  let one, two, three, four, five, six, seven, eight;
  if (inputs != null) {
    ([one, two, three, four, five, six, seven, eight] = inputs);
  }

  return (
    <div>
      <h3>{topic != null && <Fragment><Link onClick={() => history.goBack()}>{`${topic.charAt(0).toUpperCase()}${topic.slice(1)}`}</Link>{' > '}</Fragment>}{'First-third Questionnaire'}<Fragment>{' > '}<Link to={topic === 'containers' ? '../images/' : '../containers/'}>{topic === 'containers' ? 'Images' : 'Containers'}</Link></Fragment></h3>

      <Questionnaire>
        <p>Why is it important to learn the material in this course?</p>
        <textarea value={one} onChange={e => onReceiveInput([e.target.value, two, three, four, five, six, seven, eight])} />
        <p>How does success in this course relate to my career goals?</p>
        <textarea value={two} onChange={e => onReceiveInput([one, e.target.value, three, four, five, six, seven, eight])} />
        <p>How am I going to actively monitor my learning in this course?</p>
        <textarea value={three} onChange={e => onReceiveInput([one, two, e.target.value, four, five, six, seven, eight])} />
        <p>What do I most want to learn in this course?</p>
        <textarea value={four} onChange={e => onReceiveInput([one, two, three, e.target.value, five, six, seven, eight])} />
        <p>What do I want to be able to do by the end of this course?</p>
        <textarea value={five} onChange={e => onReceiveInput([one, two, three, four, e.target.value, six, seven, eight])} />
        <p>In what ways is the teaching in this course supportive of my learning? How could I maximize this?</p>
        <textarea value={six} onChange={e => onReceiveInput([one, two, three, four, five, e.target.value, seven, eight])} />
        <p>In what ways is the teaching in this course not supportive of my learning? How could I compensate for or change this?</p>
        <textarea value={seven} onChange={e => onReceiveInput([one, two, three, four, five, six, e.target.value, eight])} />
        <p>How interested am I in this course? How confident am I in my learning? What could I do to increase my interest and confidence?</p>
        <textarea value={eight} onChange={e => onReceiveInput([one, two, three, four, five, six, seven, e.target.value])} />
        <p><button type='submit'>Submit</button></p>
      </Questionnaire>
    </div>
  );
};

const mapStateToProps = (state: State): StateProps => ({
  inputs: state.inputs.courseFirstThird,
  topic: state.base.topic,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onReceiveInput: (inputs: Array<string>) => dispatch(receiveCourseInput(inputs, 'courseFirstThird')),
});

export default withRouter(connect<Props, {||}, StateProps, DispatchProps, _, _>(mapStateToProps, mapDispatchToProps)(FirstThirdQuestionnaire));
