let maximum = parseInt(prompt('数値を入力してください'));

while (!maximum) {
    maximum = parseInt(prompt('エラー！有効な数値を入力してください'));
}

// 1から入力された数値の範囲内でランダムな値を決める
const targetNum = Math.floor(Math.random() * maximum) + 1
let count = 1;

let guess = prompt('1つ数値を決めました。入力して当ててみてください');

// qが入力されたら終了
if (guess === 'q') {
    console.log('終了します');
} else {
    // 正誤判定
    while (parseInt(guess) !== targetNum) {
        // インクリメント
        count++;
        // 入力された値が大きい場合
        if (guess > targetNum) {
            guess = parseInt(prompt('その数字より小さいです。もう一度入力してください'));
        // 入力された値が小さい場合
        } else {
            guess = parseInt(prompt('その数字より大きいです。もう一度入力してください'));
        }
    }
    
    console.log(`正解です！あなたは${count}回で当てました！`);
}



