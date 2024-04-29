const button1 = document.querySelector('#button1');
// クリック時のイベント
button1.onclick = function() {
    console.log('クリックした！');
    console.log('hogehoge');
}

const button2 = document.querySelector('#button2');
function scream() {
    console.log('マウスオーバーしたあああああ！');
}
// 関数を代入
button2.onmouseenter = scream;


// ユーザーの入力や操作に反応する
const button3 = document.querySelector('#button3');
function angry() {
    console.log('くそおおおおお！');
}


// 一つのイベントに複数の関数を設定できる
button3.addEventListener('click', function() {
    alert('クリック！');
})
button3.addEventListener('click', angry);

// ボタンをクリックしたら文字色を変更する
const button4 = document.querySelector('#button4');
const text = document.querySelector('#buttonText');
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

button4.addEventListener('click', function () {
    const newColor = makeRandColor();
    text.setAttribute('style', `color: ${newColor};`);
    text.innerText = newColor;
});


// キーボードイベント
const keyboard = document.querySelector('input[type="text"]');
keyboard.addEventListener('keydown', function(e) {
    console.log(e);
});

keyboard.addEventListener('keyup', function() {
    console.log('keyup');
});


// フォームイベント
const form = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

// ツイート追加
const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetsContainer.append(newTweet);
};

form.addEventListener('submit', function(e) {
    // デフォルトの動作を停止する
    e.preventDefault();
    const usernameInput = form.elements.username;
    const tweetInput = form.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);

    // 初期化処理
    usernameInput.value = '';
    tweetInput.value = '';
});


// イベントデリゲーション
// 親要素にイベントハンドラを設定する
tweetsContainer.addEventListener('click', function(e) {
    if (e.target.nodeName === 'LI' || e.target.nodeName === 'B') {
        e.target.closest('LI').remove();
    }
})

