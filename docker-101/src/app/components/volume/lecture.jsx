// @flow strict

import React from 'react';

import Lecture from '../general/lecture';

export const topics = [
  { title: 'Introduction', video: 'VOK06Q4QqvE', secondaryText: null, resource: { link: 'https://docs.docker.com/storage/volumes/' } },
  { title: 'Attaching a volume to a container', video: 'aJy5SS-nXN0', secondaryText: null, resource: null },
  { title: 'Bind mounts', video: 'xR2ApPOF7J8', secondaryText: '. (low volume)', resource: { link: 'https://docs.docker.com/storage/bind-mounts/' } },
  { title: 'Volumes vs bind mounts', video: 'TnJKINLWsx0', secondaryText: '. (low volume)', resource: null },
  { title: 'Tmpfs', video: 'GcTxoFhf0Ks', secondaryText: null, resource: { link: 'https://docs.docker.com/storage/tmpfs/' } }, // TODO(Jeremy): make own recording for TMPFS
  // TODO(Jeremy): add file using some CLI toolset around docker volumes
  { title: 'Deep dive: Dockercon talk', video: 'X_q2l8hotAc', secondaryText: null, resource: null },

];

export default () => <Lecture topics={topics} />;
