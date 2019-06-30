// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom';

const Main = () => (
  <div>
    <h3>{'Main > '}<Link to='./lecture/pre/'>Lecture Prep</Link></h3>
  </div>
);

export default Main;
