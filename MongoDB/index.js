const mongoose = require('mongoose');

// 接続が成功したかエラーか確認
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('コネクションOK！！！');    
})
.catch(err => {
    console.log('コネクションエラー！！！');
    console.log(err);
});


// スキーマ定義
const movieScema = new mongoose.Schema({
    // スキーマのバリデーション
    title: {
        type: String,
        require: true,
        maxLength: 10
    },
    year: Number,
    score: Number,
    rating: String
});

// モデル定義
// 小文字、複数形に内部的に変換され,moviesモデルとなる(コレクション作成)
const Movie = mongoose.model('Movie', movieScema);

// モデルのインスタンス化
// nodeに入り、 .load 実行ファイル の後に インスタンス名.save() でDBに挿入 
const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });

Movie.insertMany([
    { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.2, rating: 'PG' },
    { title: 'The Iron Gian', year: 1999, score: 9.8, rating: 'R' },
    { title: 'Stand By Me', year: 2012, score: 8.7, rating: 'PG-13' }
]).then(data => {
    console.log('成功！！！');
    console.log(data);
});

