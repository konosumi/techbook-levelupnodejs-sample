
const assert = require('assert').strict;

function assertCheck(c) {
    assert.deepEqual(c, [1, 2, 3]);
}

assertCheck([1, 2, 3]);
// 数値の3と文字列の3が異なるため、エラーを出力して失敗する
assertCheck([1, 2, '3']);
/*
AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:
+ actual - expected

  [
    1,
    2,
+   '3'
-   3
  ]
*/
