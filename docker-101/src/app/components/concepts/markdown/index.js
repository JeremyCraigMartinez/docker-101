// @flow strict

import { topics } from '../lecture';

const markdown = `# Containerization Concepts

This week we will be covering containerization from a high level.

## Lecture topics

${topics.reduce((str, { title }) => (`${str}- ${title}\n`), '')}
`;

export default markdown;
