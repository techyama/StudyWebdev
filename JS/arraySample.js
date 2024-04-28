// 配列の定義
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const students = [
    {
        name: 'yuki',
        score: 88
    },
    {
        name: 'taichi',
        score: 79
    },
    {
        name: 'takeru',
        score: 65
    }
];

// forEach
numbers.forEach(function (element) {
    console.log(element);
})

students.forEach(function (student) {
    console.log(`${student.name}は${student.score}点でした。`);
})

// map
const doubles = numbers.map(function(num) {
    return num * 2;
})

const name = students.map(function(student) {
    return student.name;
})

// アロー関数
// const add = function(x, y) {
//     return x + y;
// }
const add = (x, y) => {
    // 暗黙的にリターンされるので、下記でも可(式が一つの場合のみ)
    return x + y;
    // x + y;
}

const newStudents = students.map(student => {
    return `${student.name} - ${student.score}`;
})

// テストした値で新しい配列を作る
const newNumbers = numbers.filter(num => num < 10);

// 受け取ったパラメータから一つの値を返す
// 第一引数：累積値、第二引数：要素
// reduceで合計値
const sum = numbers.reduce((total, number) => total + number);

// reduceで最大値
const max = students.reduce((bestStudent, student) => {
    if (bestStudent.score < student.score) {
        return student;
    }
    return bestStudent;
})