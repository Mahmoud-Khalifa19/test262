// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
es6id: S25.4.5.1_A2.1_T1
    catch is a method on a Promise
author: Sam Mikes
description: catch is a method on a Promise
---*/

var p = Promise.resolve(3);

if (!(p.catch instanceof Function)) {
    $ERROR("Expected p.catch to be a function");
}

if (p.catch.length !== 1) {
    $ERROR("Expected p.catch to take one argument");
}


