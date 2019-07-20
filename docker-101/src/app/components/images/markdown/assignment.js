// @flow strict

import generalAssignment from '../../general/assignments/week-three-assignment-description';

const containersOnlyAssignment = `Build a hello world application in a language/framework of your choosing using Docker.

This will consist mostly of building a Dockerfile. This Dockerfile should print \`hello world\` to the console via a \`docker run\` command.

Also, publish this image on [Docker hub]( https://hub.docker.com/). This is a free registry, though you will need to create an account.

Along with the source code in your submission, include a README on how to run your docker image (this should pretty much consist of \`docker run <image>\`). In this README, also include a URL to your image in Docker hub.

## Take Aways:

Have a working knowledge of Docker images. You will walk away from this assignment knowing how to construct a docker image from scratch, how to publish this on the free to use Docker hub registry, and how to run a container form this image.
`;

const markdown = (week: number | null) => `## Assignment description
${week === 3 ? generalAssignment : containersOnlyAssignment}

## Submission instructions
Compress all of the files for this assignment (zip/tar) into one file. For a coding assignment, this only includes the source code written by you. Do not include dependencies like binaries or source code install via a package manager (npm/pip/etc.). Name this file LASTNAME_FIRSTNAME_ASSIGNMENT1.{extension}.

## Grading Information
For coding assignments, these should be testable using only docker (more dependencies may be wrapped in the docker container). Assignments will be graded on an 11 point scale (0-10).

## Peer review
You will be required to submit four peer reviews after each homework assignment. Each peer review is worth 12.5% of your participation grade.

## Submit Assignment
`;

export default markdown;
