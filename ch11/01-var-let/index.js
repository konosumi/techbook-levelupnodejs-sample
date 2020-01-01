
// varは同名の変数が再定義できる
var x = 1;
var x = 2;

// letは同名の変数が再定義できない
let y = 1;
let y = 2;
// SyntaxError: Identifier 'y' has already been declared

// varはブロックスコープを飛び越える
if (true) {
    var x = 1;
  }
  console.log('var x = ', x);
  // var x =  1
  
  // letはブロックスコープを飛び越えない
  if (true) {
    let y = 1;
  }
  console.log('let y = ', y);
  // ReferenceError: y is not defined
