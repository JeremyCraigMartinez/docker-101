// @flow strict

import React, { Fragment } from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom';

import AutonomyBanner from './home/autonomy-banner';

const Header = () => (
  <Fragment>
    <div className='column'>
      <header>
        <b><a href='./'>Overview</a></b>
        <a target='_blank' rel='noopener noreferrer' style={{ marginLeft: '1em' }} href='https://github.com/JeremyCraigMartinez/docker-101.git'>Contribute</a>
        <a target='_blank' rel='noopener noreferrer' style={{ marginLeft: '1em' }} href='https://docs.docker.com/'>{'Doc{ker,umentation}'}</a>
        <a target='_blank' rel='noopener noreferrer' style={{ marginLeft: '1em' }} href='https://hub.docker.com/'>The hub</a>
        <Link className='right' to='/qa/'>Q & A</Link>
      </header>

      <img style={{ height: '85px' }} alt='docker' src='https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png' />
      <h1>
        101
      </h1>
    </div>
    <AutonomyBanner />
  </Fragment>
);

export default Header;
