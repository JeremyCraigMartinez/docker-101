// @flow strict

import React from 'react';

import Lecture from '../general/lecture';

export const topics = [
  { title: 'Docker compose full overview', video: '4EqysCR3mjo', secondaryText: null, resource: { link: 'https://docs.docker.com/compose/overview/' } },
  { title: 'Docker Swarm introduction', video: 'sg9wNcdMhbU', secondaryText: null, resource: { link: 'https://docs.docker.com/compose/swarm/' } },
  { title: 'Docker Swarm discovery', video: '4t7nej89dk4', secondaryText: null, resource: null },
  { title: 'Docker Swarm scheduling', video: '7B_bX3czq-Y', secondaryText: null, resource: null },
  { title: 'Docker Swarm high availability', video: 'YjlH8ypkXOM', secondaryText: null, resource: null },
  { title: 'Docker Swarm networking', video: 'XemATdk8mY4', secondaryText: null, resource: null },
  { title: 'Docker Swarm volumes', video: 'Zxe0WAzPcjY', secondaryText: null, resource: null },
  { title: 'Install', video: null, secondaryText: null, resource: { link: 'https://docs.docker.com/compose/install/' } },
  { title: 'Compose file reference', video: null, secondaryText: null, resource: { link: 'https://docs.docker.com/compose/compose-file/' } },
  { title: 'Using Compose with Swarm', video: null, secondaryText: null, resource: { link: 'https://docs.docker.com/compose/swarm/' } },
  { title: 'Environment variables in Compose', video: null, secondaryText: null, resource: { link: 'https://docs.docker.com/compose/environment-variables/' } },
  { title: 'Networking in Compose', video: null, secondaryText: null, resource: { link: 'https://docs.docker.com/compose/networking/' } },
  { title: 'Case study: sample applications with compose', video: null, secondaryText: null, resource: { link: 'https://docs.docker.com/compose/samples-for-compose/' } },
];

export default () => <Lecture topics={topics} />;
