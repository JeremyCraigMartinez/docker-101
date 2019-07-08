// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom';

import { Questionnaire } from '../styled/page';

const CourseQuestionnaire = () => {
  const re = new RegExp('(?:\\?|&)stage=(.*?)(?=&|$)', 'gi');
  const stage = re.exec(window.location.hash) || [];

  let title;
  switch (stage[1]) {
    case '1':
      title = 'Pre-course Questionnaire';
      break;
    case '2':
      title = 'One third Course Questionnaire';
      break;
    default:
      title = 'Pre-course Questionnaire';
      break;
  }

  return (
    <div>
      <h3><Link to='../'>Course Overview</Link>{` > ${title} > `}<Link to='../concepts/'>Containerization Concepts</Link></h3>

      <Questionnaire>
        <p>Why is it important to learn the material in this course?</p>
        <textarea />
        <p>How does success in this course relate to my career goals?</p>
        <textarea />
        <p>How am I going to actively monitor my learning in this course?</p>
        <textarea />
        <p>What do I most want to learn in this course?</p>
        <textarea />
        <p>What do I want to be able to do by the end of this course?</p>
        <textarea />
        <p><button type='submit'>Submit</button></p>
      </Questionnaire>
    </div>
  );
};

export default CourseQuestionnaire;
