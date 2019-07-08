// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom';

import { Questionnaire } from '../../styled/page';

const AssignmentPost = () => (
  <div>
    <h3><Link to='../'>Assignment</Link>{' > Assignment Recap > '}<Link to='../../feedback/pre/'>Feedback Prep</Link></h3>

    <Questionnaire>
      <p>To what extent did I successfully accomplish the goals of the task?</p>
      <textarea />
      <p>To what extent did I use resources available to me?</p>
      <textarea />
      <p>If I were the instructor, what would I identify as strengths of my work and flaws in my work?</p>
      <textarea />
      <p>When I do an assignment or task like this again, what do I want to remember to do differently? What worked well for me that I should use next time?</p>
      <textarea />
      <p><button type='submit'>Submit</button></p>
    </Questionnaire>
  </div>
);

export default AssignmentPost;
