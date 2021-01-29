
# use-geolocation-position
[![package version](https://img.shields.io/npm/v/use-geolocation-position.svg?style=flat-square)](https://npmjs.org/package/use-geolocation-position)
[![package downloads](https://img.shields.io/npm/dm/use-geolocation-position.svg?style=flat-square)](https://npmjs.org/package/use-geolocation-position)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/use-geolocation-position.svg?style=flat-square)](https://npmjs.org/package/use-geolocation-position)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> React hook for `geolocation.getCurrentPosition` and `getCurrentPosition.watchPosition`

## Table of Contents

- [Usage](#usage)
- [Install](#install)
- [Contribute](#contribute)
- [License](#License)

## Usage

```js
import React from 'react'

import { useCurrentPosition, useWatchPosition } from 'use-geolocation-position'

export default function App () {
  const currentPosition = useCurrentPosition({
    // Default config
    maximumAge: Infinity,
    timeout: 0,
    enableHighAccuracy: true
  })
  const watchedPosition = useWatchPosition({
    // Default config
    maximumAge: Infinity,
    timeout: 0,
    enableHighAccuracy: true
  })

  return (
    <div className='App'>
      <p>{JSON.stringify(currentPosition, null, 2)}</p>
      <p>{JSON.stringify(watchedPosition, null, 2)}</p>
    </div>
  )
}

```


## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install use-geolocation-position
$ # OR
$ yarn add use-geolocation-position
```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT 
    