Embed a gist from Github with React.

Used by **[illuminsight](https://www.illuminsight.com)**, **[Ptorx](https://ptorx.com)** and other **[Xyfir](https://www.xyfir.com)** projects.

[![npm version](https://badge.fury.io/js/react-github-gist.svg)](https://badge.fury.io/js/react-github-gist)
[![Build Status](https://travis-ci.org/xyfir/react-github-gist.svg?branch=master)](https://travis-ci.org/xyfir/react-github-gist)

Due to its simplicity, this project should not need frequent updates.

```tsx
import { ReactGithubGist } from 'react-github-gist';
import React from 'react';

const Gist = () => (
  <ReactGithubGist
    // Gist to render
    gist="GithubUser/GistIdentifier23a110196cc3ec113"
    // Optionally render only a single file
    file="file.md"
  />
);
```
