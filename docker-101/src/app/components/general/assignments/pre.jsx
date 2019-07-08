// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom';

import { Questionnaire } from '../../styled/page';

const AssignmentPre = () => (
  <div>
    <h3><Link to='../../lecture/post/'>Lecture Recap</Link>{' > Assignment Prep > '}<Link to='../'>Assignment</Link></h3>

    <Questionnaire>
      <p>What is the instructor’s goal in having me do this task?</p>
      <textarea />
      <p>What are all the things I need to do to successfully accomplish this task?</p>
      <textarea />
      <p>How much time do I need to complete the task?</p>
      <textarea />
      <p>What resources do I need to complete the task? How will I make sure I have them?</p>
      <textarea />
      <p><button type='submit'>Submit</button></p>
    </Questionnaire>
  </div>
);

export default AssignmentPre;
