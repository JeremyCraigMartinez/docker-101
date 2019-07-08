// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom';

import { LectureTable } from '../styled/page';

export const topics = [
  { title: 'A basic introduction to why we use containers', secondaryText: '. Don\'t worry if some of the container information is unclear, this lecture will be easier to grasp after images and containers have been covered at the end of week three.', video: 'https://www.youtube.com/embed/n-JwAM6XF88' },
  { title: 'Further introduction', secondaryText: null, video: 'https://www.youtube.com/embed/ph1pJXdIk8o' },
  { title: 'Deep dive: containers vs virtual machines', secondaryText: null, video: 'https://www.youtube.com/embed/L1ie8negCjc' },
  { title: 'Deep dive: what is a container?', secondaryText: null, video: 'https://www.youtube.com/embed/EnJ7qX9fkcU' },
  { title: 'Security', secondaryText: null, video: 'https://www.youtube.com/embed/5NWqLTj8zmE' },
  { title: 'Docker Layers', secondaryText: null, video: 'https://www.youtube.com/embed/vboY6FTNRuk' },
  { title: 'Case study: AWS ECS. This is an example of an existing production ready product to deploy containers on', secondaryText: null, video: 'https://www.youtube.com/embed/eq4wL2MiNqo' },
];

const Lecture = () => (
  <div>
    <h3>{'Lecture > '}<Link to='./post/'>Lecture Recap</Link></h3>

    <LectureTable>
      <tbody>
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
      <li><a target='_blank' rel='noopener noreferrer' href='https://www.docker.com/resources/what-container'>https://www.docker.com/resources/what-container</a></li>
      <li><a target='_blank' rel='noopener noreferrer' href='https://whatis.techtarget.com/definition/Confidentiality-integrity-and-availability-CIA'>https://whatis.techtarget.com/definition/Confidentiality-integrity-and-availability-CIA</a></li>
      <li><a target='_blank' rel='noopener noreferrer' href='https://docs.docker.com/engine/security/security/'>https://docs.docker.com/engine/security/security</a></li>
      <li><a target='_blank' rel='noopener noreferrer' href='https://neuvector.com/container-security/containers-vs-virtual-machines-vms/'>https://neuvector.com/container-security/containers-vs-virtual-machines-vms</a></li>
      <li><a target='_blank' rel='noopener noreferrer' href='https://medium.com/@jessgreb01/digging-into-docker-layers-c22f948ed612'>https://medium.com/@jessgreb01/digging-into-docker-layers-c22f948ed612</a></li>
      <li><a target='_blank' rel='noopener noreferrer' href='https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html'>https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html</a></li>
      <li><a target='_blank' rel='noopener noreferrer' href='https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html'>https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html</a></li>
    </ul>
  </div>
);

export default Lecture;
