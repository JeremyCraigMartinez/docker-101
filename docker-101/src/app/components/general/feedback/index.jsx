// @flow strict

/* eslint-disable quote-props */

import React, { Fragment } from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import type { State } from '../../../reducers/types/reducer-states';
import type { LectureTopic } from '../../../reducers/types';

type StateProps = {|
  week: number | 'default',
  topic: LectureTopic,
|};

const nextTopicLastHalf = {
  concepts: null,
  containers: null,
  images: null,
  volume: <Fragment>{' > What next... '}<Link to='../../network/'>Networks</Link>{'? '}<Link to='../../services/'>Services</Link>{'?'}</Fragment>,
  network: <Fragment>{' > What next... '}<Link to='../../volume/'>Volumes</Link>{'? '}<Link to='../../services/'>Services</Link>{'?'}</Fragment>,
  services: <Fragment>{' > What next... '}<Link to='../../volume/'>Volumes</Link>{'? '}<Link to='../../network/'>Networks</Link>{'? '}</Fragment>,
};

const nextOptions = (topic: LectureTopic) => ({
  '2': <Fragment>{' > '}<Link to={topic === 'containers' ? '../../images/' : '../../containers/'}>{topic === 'containers' ? 'Images' : 'Containers'}</Link></Fragment>,
  '3': <Fragment>{' > What next... '}<Link to='../../volume/'>Volumes</Link>{'? '}<Link to='../../network/'>Networks</Link>{'? '}<Link to='../../services/'>Services</Link>{'?'}</Fragment>,
  '4': topic != null ? nextTopicLastHalf[topic] : null,
  '5': topic != null ? nextTopicLastHalf[topic] : null,
  '6': <Fragment>{}</Fragment>,

  default: null,
});

const Feedback = ({ week, topic }: StateProps) => {
  const option = nextOptions(topic)[week];
  return (
    <div>
      <h3><Link to='./pre/'>Feedback Prep</Link>{' > Feedback'}{option}</h3>

      <iframe title='feedback' style={{ minHeight: '1000px', minWidth: '130%' }} src='https://peerfeedback.gatech.edu/app/dashboard' frameBorder='0' />
    </div>
  );
};

const mapStateToProps = (state: State): StateProps => ({
  week: state.base.subject ? state.base.subject.week : 'default',
  topic: state.base.topic,
});

export default connect<StateProps, {||}, StateProps, {||}, _, _>(mapStateToProps)(Feedback);
