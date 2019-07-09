// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom'; // $FlowFixMe

import { LectureTable } from '../../styled/page';

type Props = {
  topics: Array<{
    title: string,
    video: string,
    secondaryText: string | null,
    resource: {
      link: string,
      text?: string,
    } | null,
  }>;
};

const Lecture = ({ topics }: Props) => (
  <div>
    <h3><Link to='./pre/'>Lecture Prep</Link>{' > Lecture > '}<Link to='./post/'>Lecture Recap</Link></h3>

    <LectureTable>
      <tbody>
        {topics.map(({ title, video, secondaryText }) => (
          <tr key={title}>
            <td>{title}{secondaryText != null ? secondaryText : ''}</td>
            <td><iframe title={title} width='560' height='315' src={`https://www.youtube.com/embed/${video}`} frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen /></td>
            <td><p>Notes:</p><textarea name='' id='' cols='30' rows='10' /><button type='submit'>Save</button></td>
          </tr>
        ))}
      </tbody>
    </LectureTable>
    <h2>Resources</h2>
    <ul>
      {topics.map(({ resource, title }) => (resource
        ? <li key={title}>
          <a target='_blank' rel='noopener noreferrer' href={resource.link}>{resource.text != null ? resource.text : resource.link}</a>
        </li>
        : null
      ))}
    </ul>
  </div>
);

export default Lecture;
