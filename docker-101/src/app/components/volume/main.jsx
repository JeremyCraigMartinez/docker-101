// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import md from '../../helpers/markdown';
import main from './markdown';
import type { LectureTopic } from '../../reducers/types';
import type { State } from '../../reducers/types/reducer-states';

type StateProps = {
  previousTopic: LectureTopic,
};

const Volume = ({ previousTopic }: StateProps) => (
  <div>
    <h3>{previousTopic != null && <Link to={`../${previousTopic}/feedback/`}>{`${previousTopic.charAt(0).toUpperCase()}${previousTopic.slice(1)}`}</Link>}{' > Main > '}<Link to='./lecture/pre/'>Lecture Prep</Link></h3>

    <div dangerouslySetInnerHTML={md.render(main)} />
  </div>
);

const mapStateToProps = (state: State): StateProps => ({
  previousTopic: (state.base.subject && state.base.subject.previousTopic) || state.base.topic,
});

export default connect<StateProps, {||}, StateProps, {||}, _, _>(mapStateToProps)(Volume);
