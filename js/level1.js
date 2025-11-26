// 変数に数字を入れて、その数字を二倍にして返す関数を書いてください。
function double(number) {
  return number * 2;
}
console.log(double(5)); // 10

// 配列の中にある数字の合計を計算する関数を作ってください。
function sumArray(arr) {
  // return arr.reduce((acc, curr) => acc + curr, 0);
  let sum =0;
  for (let i = 0;i < arr.length;i++){
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15

// 文字列を逆順にする関数を作ってください。
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // "olleh"

// オブジェクトを受け取り、その中のキーの一覧を配列で返す関数を書いてください。
// Object.Keys
function getObjectKeys(obj) {
  return Object.keys(obj);
}
const sampleObj = {
  name: "Alice",
  age: 30,
  city: "New York"
}
console.log(getObjectKeys(sampleObj)); // ["name", "age", "city"]

// 非同期処理で、2秒後に"Hello, JavaScript!"と表示する関数を書いてください。
function greetAfterDelay() {
  setTimeout(() => {
    console.log("Hello, JavaScript!");
  }, 2000);
}
greetAfterDelay();

// 配列の中の偶数だけを取り出して新しい配列を返す関数を作ってください。

// 文字列の中に"JavaScript"という単語が含まれているかどうかを判定する関数を書いてください。

// オブジェクトの中の値だけを配列として返す関数を作ってください。

// 2つの数字を引数に取り、その合計をPromiseで返す非同期関数を書いてください。
function sumAsync(a, b) {
  return new Promise((resolve) => {
    resolve(a + b);
  });
}
sumAsync(3, 7).then(result => {
  console.log(result); // 10
})

// 配列の中から特定の値を持つ要素をすべて削除する関数を書いてください。
function removeElement(arr, value) {
  return arr.filter(item => item !== value);
}
console.log(removeElement([1,2, 3, 4, 5, 6], 3));

// 配列の中から重複している要素を除いた新しい配列を作る関数を作ってください。
function removeDuplicates(arr){
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 3, 4, 2, 3, 5])); // [1, 2, 3, 4, 5]

// 関数を作り、引数の数値に3を足して返してください。
function addThree(sum) {
  return sum + 3;
}
console.log(addThree(7)); // 10

// 文字列の長さを返す関数を書いてください。
function getSTringLength(str) {
  return str.length;
}
console.log(getSTringLength("Hello")); // 5

// 配列の一番最初の要素を返す関数を書いてください。
function getFirstElement(arr) {
  return arr[0];
}
console.log(getFirstElement([10, 20, 30, 40])); // 10

// 配列の最後の要素を返す関数を書いてください。
const getLastElement = (arr) => arr[arr.length - 1];
console.log(getLastElement([10, 20, 30, 40])); // 40

// 配列の要素をすべて3倍にして返す関数を書いてください。
function tripleArrayElements(arr) {
  return arr.map(item => item * 3);
}
console.log(tripleArrayElements([1, 2, 3])); // [3, 6, 9]

// 文字列の最初の1文字を大文字にする関数を書いてください。
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter("hello")); // "Hello"

const capitalizeFirstLetter2 = (str) => str.charAt(0).toUpperCase() + str.slice(1);
console.log(capitalizeFirstLetter2("world")); // "World"

// 配列の中に特定の値が含まれているかを判定する関数を書いてください。

// オブジェクトの中のあるキーの値を返す関数を書いてください。

// 配列の要素を逆順にする関数を書いてください。

// 配列の中のすべての要素の合計を返す関数を書いてください。