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
        <Route path='/docker-101/services' component={Services} />
        <Route path='/docker-101/containers' component={Containers} />
        <Route path='/docker-101/images' component={Images} />
        <Route path='/docker-101/concepts' component={Concepts} />
        <Route path='/docker-101/network' component={Network} />
        <Route path='/docker-101/volume' component={Volume} />
        <Redirect from='/' to='/docker-101' />
      </Switch>
    </div>
  </Router>
);
