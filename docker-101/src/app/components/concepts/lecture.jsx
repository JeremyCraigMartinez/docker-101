// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom';

import { LectureTable } from '../styled/page';

const Lecture = () => (
  <div>
    <h3>{'Lecture > '}<Link to='./post/'>Lecture Recap</Link></h3>

    <LectureTable>
      <tbody>
        <tr>
          <td>A basic introduction to why we use containers</td>
          <td><iframe title='why containers' width='560' height='315' src='https://www.youtube.com/embed/n-JwAM6XF88' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen /></td>
          <td><p>Notes:</p><textarea name='' id='' cols='30' rows='10' /><button type='submit'>Save</button></td>
        </tr>
        <tr>
          <td>Further introduction</td>
          <td><iframe title='intro' width='560' height='315' src='https://www.youtube.com/embed/ph1pJXdIk8o' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen /></td>
          <td><p>Notes:</p><textarea name='' id='' cols='30' rows='10' /><button type='submit'>Save</button></td>
        </tr>
        <tr>
          <td>Deep dive: containers vs virtual machines</td>
          <td><iframe title='containers vs machines' width='560' height='315' src='https://www.youtube.com/embed/L1ie8negCjc' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen /></td>
          <td><p>Notes:</p><textarea name='' id='' cols='30' rows='10' /><button type='submit'>Save</button></td>
        </tr>
        <tr>
          <td>Deep dive: what is a container?</td>
          <td><iframe title='what is a container' width='560' height='315' src='https://www.youtube.com/embed/EnJ7qX9fkcU' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen /></td>
          <td><p>Notes:</p><textarea name='' id='' cols='30' rows='10' /><button type='submit'>Save</button></td>
        </tr>
        <tr>
          <td>Security</td>
          <td><iframe title='security' width='560' height='315' src='https://www.youtube.com/embed/5NWqLTj8zmE' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen /></td>
          <td><p>Notes:</p><textarea name='' id='' cols='30' rows='10' /><button type='submit'>Save</button></td>
        </tr>
        <tr>
          <td>Docker Layers</td>
          <td><iframe title='security' width='560' height='315' src='https://www.youtube.com/embed/vboY6FTNRuk' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen /></td>
          <td><p>Notes:</p><textarea name='' id='' cols='30' rows='10' /><button type='submit'>Save</button></td>
        </tr>
        <tr>
          <td>Case study: AWS ECS. This is an example of an existing production ready product to deploy containers on</td>
          <td><iframe title='AWS ECS' width='560' height='315' src='https://www.youtube.com/embed/YEvU6uIckDc' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen /></td>
          <td><p>Notes:</p><textarea name='' id='' cols='30' rows='10' /><button type='submit'>Save</button></td>
        </tr>
      </tbody>
    </LectureTable>
    <h2>Resources</h2>
    <ul>
      <li><a target='_blank' rel='noopener noreferrer' href='https://www.docker.com/resources/what-container'>https://www.docker.com/resources/what-container</a></li>
      <li><a target='_blank' rel='noopener noreferrer' href='https://whatis.techtarget.com/definition/Confidentiality-integrity-and-availability-CIA'>https://whatis.techtarget.com/definition/Confidentiality-integrity-and-availability-CIA</a></li>
      <li><a target='_blank' rel='noopener noreferrer' href='https://docs.docker.com/engine/security/security/'>https://docs.docker.com/engine/security/security</a></li>
      <li><a target='_blank' rel='noopener noreferrer' href='https://neuvector.com/container-security/containers-vs-virtual-machines-vms/'>https://neuvector.com/container-security/containers-vs-virtual-machines-vms</a></li>
      <li><a target='_blank' rel='noopener noreferrer' href='https://medium.com/@jessgreb01/digging-into-docker-layers-c22f948ed612'>https://medium.com/@jessgreb01/digging-into-docker-layers-c22f948ed612</a></li>
    </ul>
  </div>
);

export default Lecture;
