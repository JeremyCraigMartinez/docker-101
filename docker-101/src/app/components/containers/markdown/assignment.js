// @flow strict

import generalAssignment from '../../general/assignments/week-three-assignment-description';

const containersOnlyAssignment = `Using an image you find on docker hub, pull down and run a container. In this assignment we will step through the command set that is available for manipulating containers.

Write a script that does the following things to an existing container:
- Lists all running containers
- Lists all containers (stopped and running)
- Install docker onto a running container
- Print the difference in the filesystem with the container you install docker on
- Using this same container, publish this container as a new image
- Stop this container
- Rename the container
- Restart the container
- Copy a file from the host onto the container
- Copy a file from the container onto the host

## Take Aways:

Have a working knowledge on containers. After this assignment, you will know how to manipulate and alter containers with the available command set found in the [documentation](https://docs.docker.com/engine/reference/commandline/container/)
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
