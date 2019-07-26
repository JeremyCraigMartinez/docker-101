// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import md from '../../helpers/markdown';
import main from './markdown';
import { selectTopic } from '../../actions/base';
import type { Dispatch } from '../../actions/types';

type DispatchProps = {
  onSelectTopic: () => void,
};

class Main extends React.Component<DispatchProps> {
  componentDidMount() {
    const { onSelectTopic } = this.props;
    onSelectTopic();
  }

  render() {
    return (
      <div>
        <h3>{'Overview > '}<Link to='./pre/'>Pre-course Questionnaire</Link></h3>

        <div dangerouslySetInnerHTML={md.render(main)} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onSelectTopic: () => dispatch(selectTopic('concepts', { week: 1 })),
});

export default connect<{||}, {||}, DispatchProps, {||}, _, _>(null, mapDispatchToProps)(Main);
