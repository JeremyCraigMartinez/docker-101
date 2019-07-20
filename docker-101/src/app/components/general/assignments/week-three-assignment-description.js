// @flow strict

const description = `Write a paper exploring the differences between images and containers. Describe what is happening at the filesystem layer what the difference between

- A \`COPY\` command in and Dockerfile \`COPY /tmp /tmp\`
- Mounting a volume at this location in a container \`docker run -v /tmp:/tmp\`

What happens if you do both of these? COPY a directory to the image, then mount a directory over that directory.
`;

export default description;
