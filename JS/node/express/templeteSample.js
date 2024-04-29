const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

// viewsディレクトリの設定
// __dirnameは、このファイルが存在するパスを値として持つ
app.set('views', path.join(__dirname, 'views'));

// テンプレートエンジンの宣言(EJS)
app.set('view engine', 'ejs');


// サーバー起動
app.listen(port, () => {
    console.log('リクエストをポート3000で待ち受け中...');
});




// ルートパス
app.get('/', (req, res) => {
    // デフォルトで/viewsを見に行くため記述不要
    // 拡張子ejsをapp.setでセットしているので記述不要
    res.render('home');
});

// 想定外のパス
app.get('*', (req, res) => {
    res.send('そんなパスは知らない！！！');
});


