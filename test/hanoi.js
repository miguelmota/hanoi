const test = require('tape');
const hanoi = require('../hanoi');

test('hanoi', function (t) {
  'use strict';

  t.plan(23);

  t.equal(hanoi(0), 0);
  t.equal(hanoi(1), 1);
  t.equal(hanoi(2), 3);
  t.equal(hanoi(3), 7);
  t.equal(hanoi(4), 15);
  t.equal(hanoi(5), 31);
  t.equal(hanoi(6), 63);
  t.equal(hanoi(7), 127);
  t.equal(hanoi(8), 255);
  t.equal(hanoi(9), 511);
  t.equal(hanoi(Number(4)), 15);
  t.equal(hanoi(new Number(4)), 15);
  t.equal(hanoi(Infinity), Infinity);
  t.equal(hanoi(-Infinity), 0);
  t.equal(hanoi('a'), 0);
  t.equal(hanoi('1'), 0);
  t.equal(hanoi(), 0);
  t.equal(hanoi(-1), 0);
  t.equal(hanoi({}), 0);
  t.equal(hanoi([]), 0);
  t.equal(hanoi(function(){}), 0);
  t.equal(hanoi(true), 0);
  t.equal(hanoi(NaN), 0);
});
