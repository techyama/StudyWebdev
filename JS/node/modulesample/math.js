
const add = (x, y) => x + y;

const PI = 3.14159;

const square = x => x * x;

// 明示的にエクスポートしたもののみ他のファイルで使用可
// ショートカット変数exportsにmodule.exportsが既に含まれているので省略もできる
exports.add = add;
exports.PI = PI;
exports.square = square;

// オブジェクト型でエクスポートもできる
// exports = {
//     add: add,
//     PI: PI,
//     square: square
// }
