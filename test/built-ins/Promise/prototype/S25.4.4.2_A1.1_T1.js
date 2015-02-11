// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
es6id: S25.4.4.2_A1.1_T1
    Promise prototype object exists, is object, not enumerable, writable,
    or configurable
author: Sam Mikes
description: Promise prototype exists
---*/

if (Promise.prototype === undefined) {
    $ERROR("Expected Promise.prototype to be defined.");
}

if (!(Promise.prototype instanceof Object)) {
    $ERROR("Expected Promise.prototype to be an object.");
}

