// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import md from '../../helpers/markdown';
import markdown from './markdown/assignment';
import type { State } from '../../reducers/types/reducer-states';

type StateProps = {
  week: number | null,
};

const Assignment = ({ week }: StateProps) => (
  <div>
    <h3><Link to='./pre/'>Assignment Prep</Link>{' > Assignment > '}<Link to='./post/'>Assignment Recap</Link></h3>

    <div dangerouslySetInnerHTML={md.render(markdown(week))} />

    <form action='/action_page.php'>
      <input type='file' name='pic' accept='image/*' />
      <input type='submit' />
    </form>
  </div>
);

const mapStateToProps = (state: State): StateProps => ({
  week: state.base.subject != null ? state.base.subject.week : null,
});

export default connect<StateProps, {||}, StateProps, {||}, _, _>(mapStateToProps)(Assignment);
