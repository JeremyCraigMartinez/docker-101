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
  visited: Array<LectureTopic>,
|};

export const nextTopicLastHalf = {
  concepts: (visited: Array<LectureTopic>) => null, // eslint-disable-line no-unused-vars
  containers: (visited: Array<LectureTopic>) => null, // eslint-disable-line no-unused-vars
  images: (visited: Array<LectureTopic>) => null, // eslint-disable-line no-unused-vars
  volume: (visited: Array<LectureTopic>) => <Fragment>{' > What next... '}{!visited.includes('network') && <Fragment><Link to='../../network/'>Networks</Link>{'? '}</Fragment>}{!visited.includes('services') && <Fragment><Link to='../../services/'>Services</Link>{'?'}</Fragment>}</Fragment>,
  network: (visited: Array<LectureTopic>) => <Fragment>{' > What next... '}{!visited.includes('volume') && <Fragment><Link to='../../volume/'>Volumes</Link>{'? '}</Fragment>}{!visited.includes('services') && <Fragment><Link to='../../services/'>Services</Link>{'?'}</Fragment>}</Fragment>,
  services: (visited: Array<LectureTopic>) => <Fragment>{' > What next... '}{!visited.includes('volume') && <Fragment><Link to='../../volume/'>Volumes</Link>{'? '}</Fragment>}{!visited.includes('network') && <Fragment><Link to='../../network/'>Networks</Link>{'? '}</Fragment>}</Fragment>,
};

const nextOptions = (topic: LectureTopic, visited: Array<LectureTopic>) => ({
  '2': <Fragment>{' > '}<Link to='../../first-third/'>First-third course evaluation</Link></Fragment>,
  '3': <Fragment>{' > What next... '}<Link to='../../volume/'>Volumes</Link>{'? '}<Link to='../../network/'>Networks</Link>{'? '}<Link to='../../services/'>Services</Link>{'?'}</Fragment>,
  '4': <Fragment>{' > '}<Link to='../../second-third/'>Second-third course evaluation</Link></Fragment>,
  '5': topic != null ? nextTopicLastHalf[topic](visited) : null,
  '6': <Fragment>{' > '}<Link to='../../post/'>Post-course evaluation</Link></Fragment>,

  default: null,
});

const Feedback = ({ week, topic, visited }: StateProps) => {
  const option = nextOptions(topic, visited)[week];
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
  visited: state.base.visited,
});

export default connect<StateProps, {||}, StateProps, {||}, _, _>(mapStateToProps)(Feedback);
