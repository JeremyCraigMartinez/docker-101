// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom'; // $FlowFixMe

import md from '../../../helpers/markdown';
import pre from './markdown/pre';

const FeedbackPre = () => (
  <div>
    <h3><Link to='../../assignment/post/'>Assignment Recap</Link>{' > Feedback Prep > '}<Link to='../'>Feedback</Link></h3>

    <div dangerouslySetInnerHTML={md.render(pre)} />
  </div>
);

export default FeedbackPre;
