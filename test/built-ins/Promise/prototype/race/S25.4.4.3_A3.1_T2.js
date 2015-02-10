// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
es6id: S25.4.4.3_A3.1_T2
    Promise.race must throw TypeError per
    CreatePromiseCapabilityRecord step 8 when
    promiseCapabliity.[[Resolve]] is not callable
author: Sam Mikes
description: Promise.race throws TypeError, even on empty array, when 'this' does not conform to Promise constructor
negative: TypeError
---*/

function BadPromiseConstructor(f) { f(undefined, undefined); }

Promise.race.call(BadPromiseConstructor, []);
