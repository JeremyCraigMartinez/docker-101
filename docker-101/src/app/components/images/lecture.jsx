// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import type { State } from '../../reducers/types/reducer-states';
import { LectureTable } from '../styled/page';

type StateProps = { week: number | null };

export const topics = [
  { title: 'Introduction', secondaryText: null, video: 'https://www.youtube.com/embed/hS9bgjrAsBs' },
  { title: 'Images vs Containers', secondaryText: '. Don\'t worry if some of the container information is unclear, this lecture will be easier to grasp after images and containers have been covered at the end of week three.', video: 'https://www.youtube.com/embed/j4vk3HP_vow' },
  { title: 'Building an image', secondaryText: null, video: 'https://www.youtube.com/embed/k4K1IAoqOTU' },
  { title: 'Image layers', secondaryText: null, video: 'https://www.youtube.com/embed/ezd1IaMBZmM' },
  { title: 'Docker hub', secondaryText: null, video: 'https://www.youtube.com/embed/LXeyufIJsLg' },
  { title: 'Dockerfile', secondaryText: null, video: 'https://www.youtube.com/embed/0SsiECeL6zg' },
  { title: 'Dockerfile (extended)', secondaryText: null, video: 'https://www.youtube.com/embed/LQjaJINkQXY' },
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
            <td><iframe title='dockerfile extended' width='560' height='315' src={video} frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen /></td>
            <td><p>Notes:</p><textarea name='' id='' cols='30' rows='10' /><button type='submit'>Save</button></td>
          </tr>
        ))}
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
