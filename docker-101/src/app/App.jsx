// @flow strict

import React from 'react'; // $FlowFixMe
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import Services from './components/services';
import Containers from './components/containers';
import Images from './components/images';
import Concepts from './components/concepts';
import Network from './components/network';
import Volume from './components/volume';
import { AppBody } from './components/styled/page';

export default () => (
  <Router>
    <Header />
    <AppBody className='column'>
      <Switch>
        <Route path='/services' component={Services} />
        <Route path='/containers' component={Containers} />
        <Route path='/images' component={Images} />
        <Route path='/concepts' component={Concepts} />
        <Route path='/network' component={Network} />
        <Route path='/volume' component={Volume} />
      </Switch>
    </AppBody>
  </Router>
);
