const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

// CSSやJSなどの静的ファイルの適用(publicディレクトリ内を適用)
// __dirnameは、このファイルが存在するパスを値として持つ
app.use(express.static(path.join(__dirname, 'public'))); 

// viewsディレクトリの設定
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

app.get('/r/:param', (req, res) => {
    const { param } = req.params;
    res.render('pathParam', {param});
});

app.get('/rand', (req, res) => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const num = Math.floor(Math.random() * 10) + 1;
    // 第二引数にJSON形式でテンプレートに変数を渡せる(キー名とテンプレートで使用する変数名は合わせる)
    res.render('random', {rand: num, nums});
});


// 想定外のパス
app.get('*', (req, res) => {
    res.send('そんなパスは知らない！！！');
});


