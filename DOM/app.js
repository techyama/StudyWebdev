// 要素の取得方法
// ID要素を取得
const id = document.getElementById('h1heading');

// 要素をCSSセレクター形式で取得
// 初めに見つかった要素
const select = document.querySelector('input[type=checkbox]');
// 要素の全て
const selectAll = document.querySelectorAll('.done');


// 要素の操作
// 見えてるもの
document.getElementById('h1heading').innerText = 'DOMSample';

// コード
document.getElementById('h1heading').textContent;

// HTMLタグごと代入できる
document.getElementById('h1heading').innerHTML = '<h1>DOMSample</h1>';


// 属性の値の取得
const attr = document.querySelector('input[type="text"]');
const value = attr.getAttribute('value');

// 属性の値の操作
attr.setAttribute('value', 'test');


// スタイルの操作
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const targets = document.querySelectorAll('h1 span');
for(let i = 0; i < colors.length; i++) {
    targets[i].style.color = colors[i];
}


// 便利なクラスリスト
const classAddElem = document.querySelector('input[type="text"]');
// クラスを追加
classAddElem.classList.add('purple');
// 更にクラスを追加
classAddElem.classList.add('text');

// クラスの適用を反転させる
// 有効から無効
classAddElem.classList.toggle('text');
// 無効から有効
classAddElem.classList.toggle('text');


// 親、子、兄弟要素の取得
const node = document.querySelector('h1');
// 親要素
node.parentElement;
// 子要素
node.children;
// 次のタグ
node.nextSibling;
// 次の要素
node.nextElementSibling;
// 前の要素
node.previousElementSibling;

// 要素の操作
// 新しい要素の作成
const newH3 = document.createElement('h3');
newH3.innerText = '新規要素参上！！！';

// 子要素に追加
document.body.appendChild(newH3);

// 子要素を削除
// const remH3 = document.parentElement(newH3);
// document.body.removeChild(remH3);
// 自分自身を削除
// document.body.remove(remH3);
