// @flow strict

import { topics } from '../lecture';

const markdown = `# Containers

This week we will be covering [Docker containers](https://www.docker.com/resources/what-container). These are [Docker](https://www.docker.com)'s solution to containerization. They are run from [Docker images](https://docs.docker.com/v17.09/engine/userguide/storagedriver/imagesandcontainers/) which you either covered last week or will cover next week. If at any point the lecture material is unclear because of references Docker images, be patient, it will be covered soon.

## Lecture topics

${topics.reduce((str, { title }) => (`${str}- ${title}\n`), '')}
`;

export default markdown;
