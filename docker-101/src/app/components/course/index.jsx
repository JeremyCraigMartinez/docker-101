// @flow strict

import React from 'react'; // $FlowFixMe
import { Switch, Route } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import Main from './main';
import Prep from './prep-questionnaire';
import Post from './post-questionnaire';
import FirstThird from './first-third-questionnaire';
import SecondThird from './second-third-questionnaire';
import { selectTopic } from '../../actions/base';
import type { Dispatch } from '../../actions/types';

type DispatchProps = {
  onSelectTopic: () => void,
};

class Images extends React.Component<DispatchProps> {
  componentDidMount() {
    const { onSelectTopic } = this.props;
    onSelectTopic();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path='/pre' component={Prep} />
          <Route path='/first-third' component={FirstThird} />
          <Route path='/second-third' component={SecondThird} />
          <Route path='/post' component={Post} />
          <Route path='/' component={Main} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onSelectTopic: () => dispatch(selectTopic('concepts', { week: 1 })),
});

export default connect<{||}, {||}, DispatchProps, {||}, _, _>(null, mapDispatchToProps)(Images);
