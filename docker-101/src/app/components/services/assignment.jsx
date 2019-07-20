// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom';

import md from '../../helpers/markdown';
import markdown from './markdown/assignment';

const Assignment = () => (
  <div>
    <h3><Link to='./pre/'>Assignment Prep</Link>{' > Assignment > '}<Link to='./post/'>Assignment Recap</Link></h3>

    <div dangerouslySetInnerHTML={md.render(markdown)} />

    <form action='/action_page.php'>
      <input type='file' name='pic' accept='image/*' />
      <input type='submit' />
    </form>
  </div>
);

export default Assignment;
