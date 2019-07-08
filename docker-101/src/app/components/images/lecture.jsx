// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import type { State } from '../../reducers/types/reducer-states';
import { LectureTable } from '../styled/page';

type StateProps = { week: number | null };

const Lecture = ({ week }: StateProps) => (
  <div>
    <h3>{'Lecture > '}<Link to='./post/'>Lecture Recap</Link></h3>

    <LectureTable>
      <tbody>
        {(week === 2 || week == null) && <tr>
          <td>Install docker on your machine</td>
          <td>
            <iframe title='mac' width='560' height='315' src='https://www.youtube.com/embed/MU8HUVlJTEY' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
            <iframe title='window' width='560' height='315' src='https://www.youtube.com/embed/ymlWt1MqURY' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
            <iframe title='linux' width='560' height='315' src='https://www.youtube.com/embed/KCckWweNSrM' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
          </td>
        </tr>}
        <tr>
          <td>Introduction</td>
          <td><iframe title='intro' width='560' height='315' src='https://www.youtube.com/embed/hS9bgjrAsBs' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen /></td>
          <td><p>Notes:</p><textarea name='' id='' cols='30' rows='10' /><button type='submit'>Save</button></td>
        </tr>
        <tr>
          <td>{'Images vs Containers. Don\'t worry if some of the container information is unclear, this lecture will be easier to grasp after images and containers have been covered at the end of week three.'}</td>
          <td><iframe title='dockerfile extended' width='560' height='315' src='https://www.youtube.com/embed/j4vk3HP_vow' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen /></td>
          <td><p>Notes:</p><textarea name='' id='' cols='30' rows='10' /><button type='submit'>Save</button></td>
        </tr>
        <tr>
          <td>Building an image</td>
          <td><iframe title='building an image' width='560' height='315' src='https://www.youtube.com/embed/k4K1IAoqOTU' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen /></td>
          <td><p>Notes:</p><textarea name='' id='' cols='30' rows='10' /><button type='submit'>Save</button></td>
        </tr>
        <tr>
          <td>Image layers</td>
          <td><iframe title='image layers' width='560' height='315' src='https://www.youtube.com/embed/ezd1IaMBZmM' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen /></td>
          <td><p>Notes:</p><textarea name='' id='' cols='30' rows='10' /><button type='submit'>Save</button></td>
        </tr>
        <tr>
          <td>Docker hub</td>
          <td><iframe title='docker hub' width='560' height='315' src='https://www.youtube.com/embed/LXeyufIJsLg' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen /></td>
          <td><p>Notes:</p><textarea name='' id='' cols='30' rows='10' /><button type='submit'>Save</button></td>
        </tr>
        <tr>
          <td>Dockerfile</td>
          <td><iframe title='dockerfile' width='560' height='315' src='https://www.youtube.com/embed/0SsiECeL6zg' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen /></td>
          <td><p>Notes:</p><textarea name='' id='' cols='30' rows='10' /><button type='submit'>Save</button></td>
        </tr>
        <tr>
          <td>Dockerfile (extended)</td>
          <td><iframe title='dockerfile extended' width='560' height='315' src='https://www.youtube.com/embed/LQjaJINkQXY' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen /></td>
          <td><p>Notes:</p><textarea name='' id='' cols='30' rows='10' /><button type='submit'>Save</button></td>
        </tr>
      </tbody>
    </LectureTable>
    <h2>Resources</h2>
    <ul>
      <li><a target='_blank' rel='noopener noreferrer' href='https://docs.docker.com/v17.12/install/'>https://docs.docker.com/v17.12/install/</a></li>
      <li><a target='_blank' rel='noopener noreferrer' href='https://docs.docker.com/v17.09/engine/userguide/storagedriver/imagesandcontainers/'>https://docs.docker.com/v17.09/engine/userguide/storagedriver/imagesandcontainers/</a></li>
      <li><a target='_blank' rel='noopener noreferrer' href='https://docs.docker.com/engine/reference/commandline/images/'>https://docs.docker.com/engine/reference/commandline/images/</a></li>
      <li><a target='_blank' rel='noopener noreferrer' href='https://docs.docker.com/engine/reference/builder/'>https://docs.docker.com/engine/reference/builder/</a></li>
      <li><a target='_blank' rel='noopener noreferrer' href='https://hub.docker.com/'>https://hub.docker.com/</a></li>
    </ul>
  </div>
);

const mapStateToProps = (state: State): StateProps => ({
  week: state.base.subject != null ? state.base.subject.week : null,
});

export default connect<StateProps, {||}, StateProps, {||}, _, _>(mapStateToProps)(Lecture);
