// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import type { State } from '../../reducers/types/reducer-states';
import { LectureTable } from '../styled/page';

type StateProps = { week: number | null };

export const topics = [
  { title: 'Images vs Containers', secondaryText: '. Don\'t worry if some of the container information is unclear, this lecture will be easier to grasp after images and containers have been covered at the end of week three.', video: 'https://www.youtube.com/embed/j4vk3HP_vow' },
  { title: 'Executing container commands', secondaryText: null, video: 'https://www.youtube.com/embed/cS0PeVV_QNI' },
  { title: 'Container names and tips', secondaryText: null, video: 'https://www.youtube.com/embed/pr8jZBmcF18' },
  { title: 'Container users', secondaryText: null, video: 'https://www.youtube.com/embed/qUYSX7AyxQk' },
  { title: 'Copying files from a container', secondaryText: null, video: 'https://www.youtube.com/embed/7tGcnOvRQ9o' },
  { title: 'Exposing container ports', secondaryText: null, video: 'https://www.youtube.com/embed/G36I1iqDZig' },
  { title: 'Container hostnames', secondaryText: null, video: 'https://www.youtube.com/embed/0Li9kzb_cJk' },
];

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
        {topics.map(({ title, video, secondaryText }) => (
          <tr key={title}>
            <td>{title}{secondaryText != null ? secondaryText : ''}</td>
            <td><iframe title={title} width='560' height='315' src={video} frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen /></td>
            <td><p>Notes:</p><textarea name='' id='' cols='30' rows='10' /><button type='submit'>Save</button></td>
          </tr>
        ))}
      </tbody>
    </LectureTable>
    <h2>Resources</h2>
    <ul>
      <li><a target='_blank' rel='noopener noreferrer' href='https://docs.docker.com/v17.09/engine/userguide/storagedriver/imagesandcontainers/#container-and-layers'>Docker documentation - container-and-layers</a></li>
      <li><a target='_blank' rel='noopener noreferrer' href='https://docs.docker.com/engine/reference/commandline/docker/'>https://docs.docker.com/engine/reference/commandline/docker/</a></li>
      <li><a target='_blank' rel='noopener noreferrer' href='https://docs.docker.com/engine/reference/commandline/ps/'>https://docs.docker.com/engine/reference/commandline/ps/</a></li>
      <li><a target='_blank' rel='noopener noreferrer' href='https://docs.docker.com/engine/reference/commandline/run/'>https://docs.docker.com/engine/reference/commandline/run/</a></li>
    </ul>
  </div>
);

const mapStateToProps = (state: State): StateProps => ({
  week: state.base.subject != null ? state.base.subject.week : null,
});

export default connect<StateProps, {||}, StateProps, {||}, _, _>(mapStateToProps)(Lecture);
