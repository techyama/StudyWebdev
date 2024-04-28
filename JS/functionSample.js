const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


// 関数の定義
function shout(message) {
    // 処理
    for(let i = 0; i < 3; i++) {
        console.log(message.toUpperCase());
    }
}

// 高階関数
function callTwice(func, message) {
    func(message);
    func(message);
}

// 関数実行
shout('hello world');
callTwice(shout, 'hi, how are you');

// 時差実行
// 3000ミリ秒(3秒後)に実行
setTimeout(() => {
    console.log('やっほー');
}, 3000);

// 指定した間隔で実行
// 3000ミリ秒ごとに実行
// 内部的にIDが発行される
// const id = setInterval(() => {
//     console.log('ばいばい');
// }, 3000);

// setIntervalを停止
// clearInterval(id);


