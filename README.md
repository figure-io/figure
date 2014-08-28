Figure Layer
============
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Factory to create figure layers.

Defines a figure `layer` and its associated methods. This layer serves as the foundation for additional graphical layers.



## Installation

``` bash
$ npm install xfig-figure
```

## Usage

To create a new figure layer,

``` javascript
var Figure = require( 'xfig-figure' );

var figure = new Figure();
```

A figure layer has the following methods...


#### figure.create( document[, selection] )

This method creates a new figure layer. `document` should be a `window.document` (natively available in the browser or created on the server using something like [JSDOM](https://github.com/tmpvar/jsdom)). If a `selection` is provided, the method appends a `figure` element to the `selection`. Otherwise the figure is appended to a generic `div` element. To create a new figure layer,

``` javascript
// Append to the `document`:
figure.create( document );

// Append to a selection:
var selection = document.querySelector( '.selector' );

figure.create( document, selection );
``` 

#### figure.root()

This method returns the root `DOMElement` of the figure layer. To get the layer root,

``` javascript
figure.root();
```


#### figure.parent()

This method returns the parent `DOMElement` of the figure layer. If a `selection` was provided to `figure.create()`, the returned element will be the `selection`. To get the layer parent,

``` javascript
figure.parent();
```


#### figure.children()

This method returns the figure layer children. The children are returned in an `object` store. To get the layer children,

``` javascript
figure.children();
```


#### figure.config()

This method returns the figure configuration as a JSON blob. To get the layer configuration,

``` javascript
figure.config();
```




## Examples

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.



[npm-image]: http://img.shields.io/npm/v/xfig-figure.svg
[npm-url]: https://npmjs.org/package/xfig-figure

[travis-image]: http://img.shields.io/travis/figure-io/figure/master.svg
[travis-url]: https://travis-ci.org/figure-io/figure

[coveralls-image]: https://img.shields.io/coveralls/figure-io/figure/master.svg
[coveralls-url]: https://coveralls.io/r/figure-io/figure?branch=master

[dependencies-image]: http://img.shields.io/david/figure-io/figure.svg
[dependencies-url]: https://david-dm.org/figure-io/figure

[dev-dependencies-image]: http://img.shields.io/david/dev/figure-io/figure.svg
[dev-dependencies-url]: https://david-dm.org/dev/figure-io/figure

[github-issues-image]: http://img.shields.io/github/issues/figure-io/figure.svg
[github-issues-url]: https://github.com/figure-io/figure/issues