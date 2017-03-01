// Copyright (C) 2017 Mike Pennisi. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Computed values as accessor property names (string literal containing a line terminator) (Class expression, instance method)
esid: sec-runtime-semantics-classdefinitionevaluation
es6id: 14.5.14
info: |
    [...]
    21. For each ClassElement m in order from methods
        a. If IsStatic of m is false, then
           i. Let status be the result of performing PropertyDefinitionEvaluation
              for m with arguments proto and false.

    12.2.6.7 Runtime Semantics: Evaluation

    [...]

    ComputedPropertyName : [ AssignmentExpression ]

    1. Let exprValue be the result of evaluating AssignmentExpression.
    2. Let propName be ? GetValue(exprValue).
    3. Return ? ToPropertyKey(propName).
---*/

var stringSet;

var C = class {
  get 'line\
Terminator'
() { return 'get string'; }
  set 'line\
Terminator'
(param) { stringSet = param; }
};

assert.sameValue(C.prototype['lineTerminator'], 'get string');

C.prototype['lineTerminator'] = 'set string';
assert.sameValue(stringSet, 'set string');
