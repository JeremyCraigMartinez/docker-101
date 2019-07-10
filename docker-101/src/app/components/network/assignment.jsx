// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom';

const Assignment = () => (
  <div>
    <h3><Link to='./pre/'>Assignment Prep</Link>{' > Assignment > '}<Link to='./post/'>Assignment Recap</Link></h3>
  </div>
);

export default Assignment;
