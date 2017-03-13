// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Caitlin Potter <caitp@igalia.com>
esid: pending
description: >
  Generator is not resumed after a return type completion.
  Returning promise
info: |
  AsyncGeneratorResumeNext:
  If completion.[[Type]] is return, and generator.[[AsyncGeneratorState]] is
  "suspendedYield", generator is resumed and immediately closes the generator
  and returns completion.
flags: [async]
---*/

var g = async function*() {
  yield 1;
  throw new Test262Error('Generator must not be resumed.');
};

var it = g();
var resolve;
var promise = new Promise(function(resolver) {
  resolve = resolver;
});
it.next().then(function(ret) {
  assert.sameValue(ret.value, 1, 'Initial yield');
  assert.sameValue(ret.done, false, 'Initial yield');

  it.return(promise).then(function(ret) {
    assert.sameValue(ret.value, 'unwrapped-value', 'AsyncGeneratorResolve(generator, resultValue, true)');
    assert.sameValue(ret.done, true, 'AsyncGeneratorResolve(generator, resultValue, true)');

    it.next().then(function(ret) {
      assert.sameValue(ret.value, undefined, 'Generator is closed');
      assert.sameValue(ret.done, true, 'Generator is closed');
    }).then($DONE, $DONE);
    
  }).catch($DONE);

  resolve('unwrapped-value');
}).catch($DONE);
