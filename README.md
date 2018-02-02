# Siren Client Fns 🚨

## WARNING: in development, there are edge cases uncoevered, it is not ready for production

[![Build Status](https://travis-ci.org/fabioelizandro/siren-client-fns.svg?branch=master)](https://travis-ci.org/fabioelizandro/siren-client-fns)
[![Maintainability](https://api.codeclimate.com/v1/badges/1d94bce96534d3c50f76/maintainability)](https://codeclimate.com/github/fabioelizandro/siren-client-fns/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1d94bce96534d3c50f76/test_coverage)](https://codeclimate.com/github/fabioelizandro/siren-client-fns/test_coverage)

`siren-client-fns` is siren client written in a functional style

## How to use

### Getting a template action

```js
const fetch = require('node-fetch');
const siren = require('siren-client-fns');
const sirenClient = siren(fetch);
const url = 'http://example.com/my-siren-endpoint';

const templateAction = await sirenClient.resource(url)
    .then(sirenClient.followEntity(['my-sub-entiy']))
    .then(sirenClient.actionTemplate('my-action'));
```
