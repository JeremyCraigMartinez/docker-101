// @flow strict

import { topics } from '../lecture';

const markdown = `# Docker Volumes

This week we will be covering [Docker volumes](https://docs.docker.com/storage/volumes/). Docker volumes are useful for sharing filesystem from container to container and host to container. I tend to think of volumes as a lightweight version of a [mounted filesystem in Linux](https://www.thegeekstuff.com/2013/01/mount-umount-examples) (though this may not be entirely accurate). Volumes in Docker can be implemented in a few different ways. While it's useful to understand each type, it will typically suffice to stick to one method for most of your use cases.

## Lecture topics

${topics.reduce((str, { title }) => (`${str}- ${title}\n`), '')}
`;

export default markdown;
