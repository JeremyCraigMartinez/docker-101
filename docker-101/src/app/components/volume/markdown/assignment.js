// @flow strict

const markdown = () => `## Assignment description

Write a Dockerfile that runs a script (in any language/framework you wish). This script should read/manipulate a file at /tmp/file.txt. It takes a command line argument \`--increment\` or \`--print\` which will either increment the number found in this file.

On your host machine, create this file.txt file, and initialize it to one character: 0. Mount this file to a container and run the script within this container. Now run this script on a timer so it writes to this file every 5 seconds.

At the same time, run another container that prints this (same file) every 5 seconds. Run these scripts for 30 seconds. One container should be manipulating this file and the second should be printing it. Output should look like (without the parenthesis):

- 0 (initially)
- 1 (@ 5 seconds)
- 2 (@ 10 seconds)
- 3 (@ 15 seconds)
- 4 (@ 20 seconds)
- ...

## Take Aways:

Have a working knowledge of docker volumes. You will walk away from this assignment with the ability to persist data from a running container. This assignment illustrates how you can mount a local filesystem and leverage a container (packaged with dependencies) to manipulate and persist a file system.

## Submission instructions
Compress all of the files for this assignment (zip/tar) into one file. For a coding assignment, this only includes the source code written by you. Do not include dependencies like binaries or source code install via a package manager (npm/pip/etc.). Name this file LASTNAME_FIRSTNAME_ASSIGNMENT1.{extension}.

## Grading Information
For coding assignments, these should be testable using only docker (more dependencies may be wrapped in the docker container). Assignments will be graded on an 11 point scale (0-10).

## Peer review
You will be required to submit four peer reviews after each homework assignment. Each peer review is worth 12.5% of your participation grade.

## Submit Assignment
`;

export default markdown;
