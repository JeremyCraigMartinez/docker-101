// @flow strict

import React from 'react';

import Lecture from '../general/lecture';

export const topics = [
  { title: 'Introduction', video: 'C12Ba74i4YI', secondaryText: null, resource: { link: 'https://docs.docker.com/network/' } },
  { title: 'Docker network options', video: 'Yr6-2ddhLVo', secondaryText: null, resource: { link: 'https://docs.docker.com/network/network-tutorial-standalone/' } },
  { title: 'Bridge network tools', video: 'Js_140tDlVI', secondaryText: null, resource: { link: 'https://docs.docker.com/network/network-tutorial-host/' } },
  { title: 'Overlay', video: 'nGSNULpHHZc', secondaryText: null, resource: { link: 'https://docs.docker.com/network/network-tutorial-overlay/' } },
  { title: 'Macvlan', video: 'AH2eSNCB-tc', secondaryText: null, resource: { link: 'https://docs.docker.com/network/network-tutorial-macvlan/' } },
  { title: 'Complete overview/recap', video: '2vcLgcH_hDI', secondaryText: null, resource: null },
];

export default () => <Lecture topics={topics} />;
