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
