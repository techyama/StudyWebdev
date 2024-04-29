// 相対パスでモジュールのインポート
const math = require('./math');
const cats = require('./exportdir');

console.log(math);
console.log('ディレクトリをrequire', cats);


// 分割代入する場合
// const { PI, square } = require('./math');
// console.log(PI);
// console.log(square(9));

