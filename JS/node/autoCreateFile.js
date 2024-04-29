// ディレクトリやファイルを自動生成するスクリプト
// fsモジュールの代入
const fs = require('fs');
// コマンドライン引数から新規ディレクトリ名を取得（無ければProject）
const dirName = process.argv[2] || 'Project';


// 非同期で作成
// ディレクトリ作成
fs.mkdirSync(dirName);
// 空のファイル作成
fs.writeFileSync(`${dirName}/index.html`, '');
fs.writeFileSync(`${dirName}/app.js`, '');
fs.writeFileSync(`${dirName}/styles.css`, '');
