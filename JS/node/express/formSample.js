const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

// 静的ファイルの適用
app.use(express.static(path.join(__dirname, 'public')));
// リクエストボディのパース有効化
// urlencoded
app.use(express.json());
// JSON
app.use(express.urlencoded({ extended: true }));

// viewsディレクトリの設定
app.set('views', path.join(__dirname, 'views'));
// テンプレートエンジンの宣言(EJS)
app.set('view engine', 'ejs');

// サーバー起動
app.listen(port, () => {
    console.log('リクエストをポート3000で待ち受け中...');
});


app.get('/', (req, res) => {
    res.render('form');
});

// GET
app.get('/form', (req, res) => {
    const { name, age } = req.body;
    const message = `${name}です。${age}歳です。`
    res.send(message);
});

// POST
app.post('/form', (req, res) => {
    res.send('POST /form response');
});
