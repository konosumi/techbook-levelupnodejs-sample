
const assert = require('assert').strict;

assertCheck([1, 2, 3]);
// 数値の3と文字列の3が異なるため、エラーを出力して失敗する
assertCheck([1, 2, '3']);

function assertCheck(c) {
    assert.deepEqual(c, [1, 2, 3]);
}

/*
assert.js:89
  throw new AssertionError(obj);
  ^

AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:
+ actual - expected

  [
    1,
    2,
+   '3'
-   3
  ]
*/
