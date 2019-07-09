// @flow strict

import React, { Component } from 'react'; // $FlowFixMe
import { Switch } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import { selectTopic } from '../../actions/base';
import type { Dispatch } from '../../actions/types';

type DispatchProps = {
  onSelectTopic: () => void,
};

class Services extends Component<DispatchProps> {
  componentDidMount() {
    const { onSelectTopic } = this.props;
    onSelectTopic();
  }

  render() {
    return (
      <div>
        <Switch />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onSelectTopic: () => dispatch(selectTopic('services')),
});

export default connect<{||}, {||}, {||}, {||}, _, _>(null, mapDispatchToProps)(Services);
