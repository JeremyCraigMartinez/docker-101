# Docker 101

Website: https://jeremycraigmartinez.github.io/docker-101/

## Running the code

**These instructions require a unix based operating system**

- Mac OS
- Linux

Instructions:

- Unzip code
- Open terminal and navigate to the directory where the code is
    - `cd /path/to/code`
- [Install nvm](https://github.com/nvm-sh/nvm/blob/master/README.md#installation-and-update)
- Install version of node for project
    - `nvm install 12.3.0`
    - `nvm use`
- Install node dependencies
    - `npm i`
- Start application server
    - `npm start`
- In browser, open `http://localhost:3000`

## Visit website

If you don't feel like running the code locally, visit the code in action at https://jeremycraigmartinez.github.io/docker-101/

## Contents of directory

```bash
$ tree .
.
├── Catalog.md
├── Catalog.pdf
├── README.md
├── flow-typed
│   └── npm
│       ├── redux-thunk_vx.x.x.js
│       ├── redux_v4.x.x.js
│       └── styled-components_v4.x.x.js
├── package-lock.json
├── package.json - https://docs.npmjs.com/files/package.json
├── public - public assets for site
│   ├── assets
│   │   ├── Docker\ 101\ Flow.png
│   │   ├── Example\ Lecture\ Week.png
│   │   └── logo.svg
│   ├── favicon.ico
│   ├── index.css
│   ├── index.html
│   └── manifest.json
└── src - source code
    ├── app - React app
    │   ├── App.jsx
    │   ├── actions
    │   │   ├── base.js
    │   │   ├── inputs.js
    │   │   └── types
    │   │       └── index.js
    │   ├── components
    │   │   ├── concepts
    │   │   │   ├── index.jsx
    │   │   │   ├── lecture.jsx
    │   │   │   ├── main.jsx
    │   │   │   └── markdown
    │   │   │       └── index.js
    │   │   ├── containers
    │   │   │   ├── index.jsx
    │   │   │   ├── lecture.jsx
    │   │   │   ├── main.jsx
    │   │   │   └── markdown
    │   │   │       ├── assignment.js
    │   │   │       └── index.js
    │   │   ├── course
    │   │   │   ├── end.jsx
    │   │   │   ├── first-third-questionnaire.jsx
    │   │   │   ├── index.jsx
    │   │   │   ├── main.jsx
    │   │   │   ├── markdown
    │   │   │   │   └── index.js
    │   │   │   ├── post-questionnaire.jsx
    │   │   │   ├── prep-questionnaire.jsx
    │   │   │   ├── qa.jsx
    │   │   │   └── second-third-questionnaire.jsx
    │   │   ├── footer.jsx
    │   │   ├── general
    │   │   │   ├── assignments
    │   │   │   │   ├── index.jsx
    │   │   │   │   ├── post.jsx
    │   │   │   │   ├── pre.jsx
    │   │   │   │   └── week-three-assignment-description.js
    │   │   │   ├── feedback
    │   │   │   │   ├── index.jsx
    │   │   │   │   ├── markdown
    │   │   │   │   │   └── pre.js
    │   │   │   │   └── pre.jsx
    │   │   │   └── lecture
    │   │   │       ├── index.jsx
    │   │   │       ├── post.jsx
    │   │   │       └── pre.jsx
    │   │   ├── header.jsx
    │   │   ├── home
    │   │   │   └── autonomy-banner.jsx
    │   │   ├── images
    │   │   │   ├── index.jsx
    │   │   │   ├── lecture.jsx
    │   │   │   ├── main.jsx
    │   │   │   └── markdown
    │   │   │       ├── assignment.js
    │   │   │       └── index.js
    │   │   ├── network
    │   │   │   ├── index.jsx
    │   │   │   ├── lecture.jsx
    │   │   │   ├── main.jsx
    │   │   │   └── markdown
    │   │   │       ├── assignment.js
    │   │   │       └── index.js
    │   │   ├── services
    │   │   │   ├── index.jsx
    │   │   │   ├── lecture.jsx
    │   │   │   ├── main.jsx
    │   │   │   └── markdown
    │   │   │       ├── assignment.js
    │   │   │       └── index.js
    │   │   ├── styled
    │   │   │   └── page.js
    │   │   └── volume
    │   │       ├── index.jsx
    │   │       ├── lecture.jsx
    │   │       ├── main.jsx
    │   │       └── markdown
    │   │           ├── assignment.js
    │   │           └── index.js
    │   ├── helpers
    │   │   └── markdown.js
    │   └── reducers
    │       ├── base.js
    │       ├── index.js
    │       ├── inputs.js
    │       └── types
    │           ├── index.js
    │           └── reducer-states.js
    ├── index.jsx
    └── serviceWorker.js

37 directories, 93 files
```

- In the directory `src/` is all of the source code (React app) for the website
- .travis.yml - CI/CD build configuation
- `package.json` - [project description](https://docs.npmjs.com/files/package.json)
