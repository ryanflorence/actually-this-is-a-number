Actually, this is a number
==========================

## Inspiration

https://twitter.com/jergason/status/389957291811676160

## Installation

`npm install actually-this-is-a-number`

## Usage

```js
var actuallyThisIsANumber = require('actually-this-is-a-number');
String.prototype.numberify = function() { return actuallyThisIsANumber(this); };

actuallyThisIsANumber('1,000,000'); // 1000000
'1,234,5678.9'.numberify(); // 12345678.9
```

## License & Copyright

MIT

(c) 2013 Ryan Florence

