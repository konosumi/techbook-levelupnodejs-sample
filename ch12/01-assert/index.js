
const assert = require('assert').strict;

assert.deepEqual([[1, 2, 3]], [[1, 2, 3]]);

// 数値の3と文字列の3が異なるため、エラーを出力して失敗する
assert.deepEqual([[1, 2, 3]], [[1, 2, '3']]);
/*
AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:
+ actual - expected

  [
    [
      1,
      2,
+     3
-     '3'
    ]
  ]
*/
