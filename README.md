# node-nike [![Build Status](https://secure.travis-ci.org/ralucas/node-nike.png?branch=master)](http://travis-ci.org/ralucas/node-nike)

Nike API module

## Getting Started
Install the module with: `npm install node-nike`

```javascript
var Nike = require('node-nike');

var nike = new Nike(apiToken);

nike.get(endpoint, type, params)
  .then(function(data) {
      //do something with that data 
   })
```

## Documentation
Totally unofficial node wrapper to the nike api.

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2015 Richard Lucas. Licensed under the MIT license.
