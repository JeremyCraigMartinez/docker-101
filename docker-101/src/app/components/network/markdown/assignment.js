// @flow strict

const markdown = () => `## Assignment description

Create three different Docker networks and attach existing containers to each.
- Bridge
- Overlay
- Macvlan

Inspect these networks using \`docker network inspect\`. Write a paper how these networks differ. Provide examples where it would make sense to use one over the other. Are there limitations/security concerns to using any of these networks in production?

## Take Aways:

Have a working knowledge of the differences between Docker networks. You will walk away from this assignment with an in-depth knowledge on when/why to use different types of docker networks.

## Submission instructions
Compress all of the files for this assignment (zip/tar) into one file. For a coding assignment, this only includes the source code written by you. Do not include dependencies like binaries or source code install via a package manager (npm/pip/etc.). Name this file LASTNAME_FIRSTNAME_ASSIGNMENT1.{extension}.

## Grading Information
For coding assignments, these should be testable using only docker (more dependencies may be wrapped in the docker container). Assignments will be graded on an 11 point scale (0-10).

## Peer review
You will be required to submit four peer reviews after each homework assignment. Each peer review is worth 12.5% of your participation grade.

## Submit Assignment
`;

export default markdown;
