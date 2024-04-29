// デフォルト引数
function greet(name = 'defaultName') {
    console.log(name);
}

// スプレッド構文
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// 配列の中身を展開する
Math.max(nums);         //配列を渡しているためNaN
Math.max(...nums);      //展開して渡しているため13

// 配列から新しい配列を作成する
const cats = ['tama', 'tora', 'momo'];
const dogs = ['pochi', 'hachi'];

const allPets = [...cats, ...dogs];

// レスト構文(剰余引数)
function raceResult(first, second, ...rest) {
    console.log(`1位は${first}`);
    console.log(`2位は${second}`);
    console.log(`その他は${rest}`);
}

// 分割代入
// 配列の先頭から変数に値を代入できる
const scoreAsc = ['takeshi', 'maki', 'yuki', 'taro'];
const [first, second, ...rest] = scoreAsc;
console.log(first);     //takeshi
console.log(second);    //maki
console.log(rest);      //yuki, taro


// オブジェクトの分割代入
const profiles = {
    firstName: 'Tanaka',
    lastName: 'taro',
    age: 20
}
// プロパティ名と変数名を合わせる必要がある
const { firstName, lastName, age } = profiles;


// パラメータの分割代入
function fullName({ firstName, lastName }) {
    // const {firstName, lastName} = profiles;
    return `${firstName} ${lastName}`;
}
