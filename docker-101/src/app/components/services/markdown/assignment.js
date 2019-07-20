// @flow strict

const markdown = () => `## Assignment description

Write a docker-compose file that includes a simple API webserver, static file server (frontend web app), in memory data store (redis), and a relational database. Feel free to reuse images your find on docker hub. This assignment is not concered with any server side code, nginx configs, etc. only the \`docker-compose.yml\` file.

Set up the networks so that
- The nginx server can access the webserver only
- The redis store is only accessible from the webserver
- The relational database is only accessible from the webserver

Publish only the nginx server over port 443. Write a script that proves this limited access between all of the containers orchestrated with docker-compose. This should be a bash script that access containers (i.e. \`docker exec -ti webserver-container host database-container\` should resolve the domain name, however, \`docker exec -ti nginx-container host database-container\` should not)

## Take Aways:

Have a working knowledge on how to use the docker-compose orchestration tool. You will walk away from this assignment with the ability to spin up a production full scale application (full stack) with least privilege network layer access on your local machine. Pretty cool, huh?

## Submission instructions
Compress all of the files for this assignment (zip/tar) into one file. For a coding assignment, this only includes the source code written by you. Do not include dependencies like binaries or source code install via a package manager (npm/pip/etc.). Name this file LASTNAME_FIRSTNAME_ASSIGNMENT1.{extension}.

## Grading Information
For coding assignments, these should be testable using only docker (more dependencies may be wrapped in the docker container). Assignments will be graded on an 11 point scale (0-10).

## Peer review
You will be required to submit four peer reviews after each homework assignment. Each peer review is worth 12.5% of your participation grade.

## Submit Assignment
`;

export default markdown;
