// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom';

import md from '../../helpers/markdown';
import main from './markdown';

const Main = () => (
  <div>
    <h3>{'Overview > '}<Link to='./lecture/pre/'>Lecture Prep</Link></h3>

    <div dangerouslySetInnerHTML={md.render(main)} />
  </div>
);

export default Main;
