// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
es6id: S25.4.5_A1.1_T1
    Promise prototype object is an ordinary object
author: Sam Mikes
description: Promise prototype does not have [[PromiseState]] internal slot
negative: TypeError
---*/

Promise.call(Promise.prototype, function () {});
