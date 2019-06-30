// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom';

const Lecture = () => (
  <div>
    <h3>{'Lecture > '}<Link to='./post/'>Lecture Recap</Link></h3>

    <iframe title='assignment' width='560' height='315' src='https://www.youtube.com/embed/pGYAg7TMmp0' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
  </div>
);

export default Lecture;
