// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 11.1.5_4-4-b-2
description: >
    Object literal - No SyntaxError if a data property definition is
    followed by set accessor definition with the same name
includes: [runTestCase.js]
---*/

function testcase() {
  eval("({foo : 1, set foo(x){}});");
  return true;
}
runTestCase(testcase);
