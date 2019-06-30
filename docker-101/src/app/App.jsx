// @flow strict

import React from 'react';
import { // $FlowFixMe
  BrowserRouter as Router, // $FlowFixMe
  Switch, // $FlowFixMe
  Route, // $FlowFixMe
  Redirect,
} from 'react-router-dom';

import Header from './components/header';
import Services from './components/services';
import Containers from './components/containers';
import Images from './components/images';
import Concepts from './components/concepts';
import Network from './components/network';
import Volume from './components/volume';

export default () => (
  <Router>
    {window.location.pathname.endsWith('/') ? null : <Redirect from={window.location.pathname} to={`${window.location.pathname}/`} />}
    <Header />
    <div className='column'>
      <Switch>
        <Route path='/services' component={Services} />
        <Route path='/containers' component={Containers} />
        <Route path='/images' component={Images} />
        <Route path='/concepts' component={Concepts} />
        <Route path='/network' component={Network} />
        <Route path='/volume' component={Volume} />
      </Switch>
    </div>
  </Router>
);
