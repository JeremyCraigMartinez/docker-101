// @flow strict

const imagesOnlyAssignment = 'Images only assignment';
const containerAndImagesAssignment = 'Container vs images assignment';

const markdown = (week: number | null) => `## Assignment description
${week === 3 ? containerAndImagesAssignment : imagesOnlyAssignment}

## Submission instructions
Compress all of the files for this assignment (zip/tar) into one file. For a coding assignment, this only includes the source code written by you. Do not include dependencies like binaries or source code install via a package manager (npm/pip/etc.). Name this file LASTNAME_FIRSTNAME_ASSIGNMENT1.{extension}.

## Grading Information
For coding assignments, these should be testable using only docker (more dependencies may be wrapped in the docker container). Assignments will be graded on an 11 point scale (0-10).

## Peer review
You will be required to submit four peer reviews after each homework assignment. Each peer review is worth 12.5% of your participation grade.

## Submit Assignment
`;

export default markdown;
