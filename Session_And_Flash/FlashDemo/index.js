const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
// フラッシュモジュールインポート
const flash = require('connect-flash');

const sessionOptions = { secret: 'mysecret', resave: false, saveUninitialized: false };
app.use(session(sessionOptions));
// フラッシュの有効化
app.use(flash());

const Farm = require('./models/farm');

mongoose.connect('mongodb://localhost:27017/flashDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDBコネクションOK！！');
    })
    .catch(err => {
        console.log('MongoDBコネクションエラー！！！');
        console.log(err);
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// フラッシュの情報を使用するミドルウェア
app.use((req, res, next) => {
    // localsプロパティ そのライフサイクル(リクエストがあってレスポンスを返すまで)の間だけ保持するデータ
    res.locals.messages = req.flash('success');
    next();
});

// Farm関連
app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms });
});

app.get('/farms/new', (req, res) => {
    res.render('farms/new');
});

app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id);
    res.render('farms/show', { farm });
});

app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    // フラッシュ作成
    req.flash('success', '新しい農場を登録しました');
    res.redirect('/farms');
});

app.listen(3000, () => {
    console.log('ポート3000でリクエスト待受中...');
});