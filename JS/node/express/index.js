const express = require('express');
const app = express();
const port = 3000;


app.use(() => {
    console.log('リクエストを受け付けました！');
});

app.listen(port, () => {
    console.log('リクエストをポート3000で待ち受け中...');
});