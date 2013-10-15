var actuallyThisIsANumber = require('./index');

console.assert(actuallyThisIsANumber('1,000,000') === 1000000);
console.assert(actuallyThisIsANumber('1,000,000.1') === 1000000.1);
