// オブジェクト型の定義
const person = {
    age: 22,
    firstName: 'Taro',
    lastName: 'Yamada'
}

// 大カッコでの値の指定
person['age'];
person['firstName'];
// ドットでの値の指定
person.age;
person.firstName;


// 値の更新
person.age = 50;

// 新しいキー値の挿入
person.sex = 'male';
