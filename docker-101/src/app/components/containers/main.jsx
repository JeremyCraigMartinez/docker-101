// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import md from '../../helpers/markdown';
import main from './markdown';
import type { State } from '../../reducers/types/reducer-states';

type StateProps = {
  week: number,
};

const Main = ({ week }: StateProps) => (
  <div>
    <h3><Link to={week === 2 ? '../concepts/lecture/post/' : '../images/feedback/'}>{week === 2 ? 'Concepts' : 'Images'}</Link>{' > Main > '}<Link to='./lecture/pre/'>Lecture Prep</Link></h3>

    <div dangerouslySetInnerHTML={md.render(main)} />
  </div>
);

const mapStateToProps = (state: State): StateProps => ({
  week: state.base.subject ? state.base.subject.week : 2,
});

export default connect<StateProps, {||}, StateProps, {||}, _, _>(mapStateToProps)(Main);
