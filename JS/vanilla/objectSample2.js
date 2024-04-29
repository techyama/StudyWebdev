// オブジェクト型の定義
const testScores = {
    ken: 80,
    yuki: 67,
    taro: 89,
    ikki: 77,
    tomoki: 58,
    taka: 90
}

// オブジェクト型のイテレート
for (let student of Object.keys(testScores)) {
    console.log(`${student}さんは${testScores[student]}`);
}