// @flow strict

import { topics } from '../lecture';

const markdown = `# Docker Compose

This week we will be covering [Docker Compose](https://docs.docker.com/compose/overview/). Docker compose is a tool for defining and running multi-container Docker applications.

If you are coming up on this topic after having covered [Docker networks](../networks) and [Docker volumes](../volumes), then this is the time to apply those skills! If you are tackling this topic first, then you will have a working knowledge of these tools when you watch those lecture videos.

docker-compose will quickly become your best friend for mimicking a production environment locally on your machine. You can manage you application server, nginx server, frontend application, database and redis store all with one command. Using docker to build and deploy you application locally and in production will ensure that there are no surprises between development and production.

## Lecture topics

${topics.reduce((str, { title }) => (`${str}- ${title}\n`), '')}
`;

export default markdown;
