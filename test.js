var assert = require('assert');

console.log("hello")
while(new Date().getTime() < now + 2000){ }
console.log("world")

describe('String#split', function(){
  it('should return an array', function(){
    assert(Array.isArray('a,b,c'.split(',')));
  });
});
