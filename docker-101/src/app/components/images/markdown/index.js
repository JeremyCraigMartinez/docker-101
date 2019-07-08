// @flow strict

import { topics } from '../lecture';

const markdown = `# Images

This week we will be covering [Docker images](https://docs.docker.com/v17.09/engine/userguide/storagedriver/imagesandcontainers/). These are part of [Docker](https://www.docker.com)'s solution to containerization. They reselmble prebuilt operating systems (or images) which an isolated environment can be generated (i.e. run) from, which we call a container. [Docker containers](https://www.docker.com/resources/what-container) were either covered last week or will cover next week, depending on which course path you've chosen. If at any point the lecture material is unclear because of references Docker containers, be patient, it will be covered soon.

## Lecture topics

${topics.reduce((str, { title }) => (`${str}- ${title}\n`), '')}
`;

export default markdown;
