// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5-2-11
description: Function.prototype.bind throws TypeError if 'Target' is NULL
---*/


assert.throws(TypeError, function() {
  Function.prototype.bind.call(null);
});
