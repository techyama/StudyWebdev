const express = require('express');
const app = express();
const port = 3000;

// サーバー起動
app.listen(port, () => {
    console.log('リクエストをポート3000で待ち受け中...');
});
// Expressが自動で作ってくれるリクエストとレスポンスオブジェクト
// app.use((req, res) => {
    // console.log('リクエストを受け付けました！');
    // 引数で受け取ったオブジェクトをJSON形式で送信できる
    // res.send('<h1>はじめてのWebページ</h1>');
// });

// 上からルーティングを読み込む
// localhost:ポート/cats
app.get('/cats', (req, res) => {
    res.send('GETリクエストにゃー');
});

app.post('/cats', (req, res) => {
    res.send('POSTリクエストにゃー');
});

// localhost:ポート/dogs
app.get('/dogs', (req, res) => {
    res.send('わんわん');
});

// localhost:ポート(ルートパス)
app.get('/', (req, res) => {
    res.send('ここはホームページです');
});

// パスパラメータ
app.get('/r/:param1/:param2', (req, res) => {
    // reqオブジェクトのparamsにパスパラメータを持っている
    const { param1, param2 } = req.params;
    res.send(`パスパラメータ1：${param1}, パスパラメータ2：${param2}`);
});

// クエリストリング
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (q) {
        // reqオブジェクトのqueryにパスパラメータを持っている
        res.send(`クエリストリング：${q}`);
    } else {
        res.send('検索するものが指定されていません！');
    }
    
});

// 設定した以外のパスでリクエストがあったとき(一番下に記述する必要がある)
app.get('*', (req, res) => {
    res.send('そんなパスは知らない！！！');
});


