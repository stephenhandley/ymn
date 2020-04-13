const Assert = require('assert');

const ymn = require('./index');

const blah = ymn({
  yarp: true,
  narp: false,
  garp: false
});

const yarp = blah('yarp');
Assert(yarp);
Assert.equal(yarp, ymn.Yes);

const marp = blah('marp');
Assert(marp);
Assert.equal(marp, ymn.Maybe);

const narp = blah('narp');
Assert(!narp);
Assert.equal(narp, ymn.No);

console.log('a ok');
