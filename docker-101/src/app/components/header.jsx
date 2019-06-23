// @flow strict

import React, { Fragment } from 'react';

import Banner from './home/banner';

type Props = {||};

const Header = (props: Props) => (
  <Fragment>
    <div className='column'>
      <header>
        <b><a href='./'>Overview</a></b>
        <a style={{ marginLeft: '1em' }} href='https://github.com/JeremyCraigMartinez/docker-101.git'>Contribute</a>
        <a style={{ marginLeft: '1em' }} href='https://docs.docker.com/'>{'Doc{ker,umentation}'}</a>
        <a style={{ marginLeft: '1em' }} href='https://hub.docker.com/'>The hub</a>
      </header>

      <img style={{ height: '85px' }} alt='docker' src='https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png' />
      <h1>
        101
      </h1>
    </div>
    <Banner />
  </Fragment>
);

export default Header;
