// @flow strict

import { topics } from '../lecture';

const markdown = `# Docker Networks

This week we will be covering [Docker networks](https://docs.docker.com/network/). Docker networks are isolated virtual networks for handling multiple docker containers. Using networks you can secure microservices privileges, access, and mimic complex infrastructure on your local machine or in the cloud. Docker networks implements different types of networks which can be leveraged to accomplish different use cases. These include

- [Bridge networks](https://docs.docker.com/network/bridge/)
- [Overlay networks](https://docs.docker.com/network/overlay/)
- [Host networks](https://docs.docker.com/network/host/)
- [Macvlan networks](https://docs.docker.com/network/macvlan)

It is important to understand that these concepts are specific to Docker. While there may be similarities in the implementation, Docker networks are virtual and not to be confused with actual network concepts (i.e. [bridge network](https://docs.docker.com/network/bridge/) vs [bridging](https://en.wikipedia.org/wiki/Bridging_(networking)))

## Lecture topics

${topics.reduce((str, { title }) => (`${str}- ${title}\n`), '')}
`;

export default markdown;
