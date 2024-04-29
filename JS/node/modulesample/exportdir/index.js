// ディレクトリをエクスポートする際には、内部的にindex.jsを読み込む
const tama = require('./tama');
const tora = require('./tora');
const momo = require('./momo');

const allCats = [tama, tora, momo];
console.log(allCats);

module.exports = allCats;
