# Siren Client Fns 🚨

## WARNING: in development, there are edge cases uncoevered, it is not ready for production

[![Build Status](https://travis-ci.org/fabioelizandro/siren-client-fns.svg?branch=master)](https://travis-ci.org/fabioelizandro/siren-client-fns)

`siren-client-fns` is siren client written in a functional style

## How to use

### Getting a template action

```js
const fetch = require('node-fetch');
const siren = require('./siren');
const sirenClient = siren(fetch);
const url = 'http://example.com/my-siren-endpoint';

const templateAction = await sirenClient.resource(url)
    .then(sirenClient.followEntity(['my-sub-entiy']))
    .then(sirenClient.actionTemplate('my-action'));
```

