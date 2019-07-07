// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom';

import { LectureTable } from '../styled/page';

const Lecture = () => (
  <div>
    <h3>{'Lecture > '}<Link to='./post/'>Lecture Recap</Link></h3>

    <LectureTable>
      <tbody>
      </tbody>
    </LectureTable>
    <h2>Resources</h2>
    <ul>
    </ul>
  </div>
);

export default Lecture;
