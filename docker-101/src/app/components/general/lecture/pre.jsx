// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom';

import { Questionnaire } from '../../styled/page';

const LecturePre = () => (
  <div>
    <h3><Link to='../../'>Overview</Link>{' > Lecture Prep > '}<Link to='../'>Lecture</Link></h3>

    <Questionnaire>
      <p>What are the goals of the class session going to be?</p>
      <textarea />
      <p>What do I already know about this topic?</p>
      <textarea />
      <p>How could I best prepare for the class session?</p>
      <textarea />
      <p>What questions do I already have about this topic that I want to find out more about?</p>
      <textarea />
      <p><button type='submit'>Submit</button></p>
    </Questionnaire>
  </div>
);

export default LecturePre;
