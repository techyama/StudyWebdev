// プレイヤー情報をオブジェクト型で保持する
const p1  = {
    score: document.querySelector('#p1Score'),
    button: document.querySelector('#p1Button')
}

const p2  = {
    score: document.querySelector('#p2Score'),
    button: document.querySelector('#p2Button')
}


// 各要素のオブジェクト代入
// 勝利点数
const winningScoreSelect = document.querySelector('#winningScore');
const resetButton = document.querySelector('#reset');

let winningScore = 3;


// イベントハンドラ設定
// プレイヤー1
p1.button.addEventListener('click', function() {
    updateScore(p1, p2);
});

// プレイヤー2
p2.button.addEventListener('click', function() {
    updateScore(p2, p1);
});

// 勝ち点変更時
winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
});

// リセットボタン
resetButton.addEventListener('click', reset);


// 関数
// スコア更新
function updateScore(player, opponent) {
    // ゲーム終了判定
    if (parseInt(player.score.innerText) < winningScore) {
        const nextPoint = parseInt(player.score.innerText) + 1;
        player.score.innerText = nextPoint;
        if (nextPoint === winningScore) {
            player.score.classList.add('winner');
            player.button.disabled = true;
            opponent.score.classList.add('loser');
            opponent.button.disabled = true;
        }
    }
}

// スコアリセット
function reset() {
    p1.score.innerText = 0;
    p2.score.innerText = 0;
    p1.score.classList.remove('winner', 'loser');
    p2.score.classList.remove('winner', 'loser');
    p1.button.disabled = false;
    p2.button.disabled = false;
}

