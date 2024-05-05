const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
// クッキーをリクエストで受け取るためのミドルウェア
app.use(cookieParser('mysecret'));

// クッキーを受け取る
app.get('/greet', (req, res) => {
    const { name = 'anonymous' } = req.cookies;
    res.send(`ようこそ ${name} さん`);
});

// クッキーをセット
app.get('/setname', (req, res) => {
    res.cookie('name', 'tanakajiro');
    res.cookie('animal', 'cat');
    res.send('クッキー送ったよ！！！');
});

// 署名付きクッキーをセット
// 改ざんされるとオブジェクトの存在が消える、または値にfalseが変える
app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true });
    res.send('署名付きクッキーを返したよ！');
});

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send(req.signedCookies);
});

app.listen(3000, () => {
    console.log('待受中...');
});