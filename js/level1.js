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
function filterEvenNumbers(arr) {
  return [...arr].filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

// 文字列の中に"JavaScript"という単語が含まれているかどうかを判定する関数を書いてください。
function containsJavaScript(str) {
  return str.includes("JavaScript");
}
console.log(containsJavaScript("I love JavaScript!")); // true
console.log(containsJavaScript("I love programming!")); // false

// 配列の中の数値を昇順に並べ替える関数を書いてください。
// hint: sort() をそのまま使うと文字列として比較されるため、[1, 2, 10, 20] が [1, 10, 2, 20] になってしまいます。比較関数を指定することで数値として正しくソートできます。
function sortArrayAscending(arr) {
  return [...arr].sort((a, b) => a - b);
}
console.log(sortArrayAscending([5, 2, 8, 1, 4])); // [1, 2, 4, 5, 8]

// オブジェクトの中の値だけを配列として返す関数を作ってください。
function getObjectKeysValues(obj) {
  return Object.values(obj);
}
const sampleObj1 = {
  name: "Alice",
  age: 30,
  city: "New York"
}
console.log(getObjectKeysValues(sampleObj1)); // ["Alice", 30, "New York"]

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
function containsValue(arr, value) {
  return arr.includes(value);
}
console.log(containsValue([1, 2, 3, 4, 5], 3)); // true
console.log(containsValue([1, 2, 3, 4, 5], 6)); // false

// オブジェクトの中のあるキーの値を返す関数を書いてください。
function getValueByKey(obj, key) {
  return obj[key];
}
const sampleObj2 = {
  name: "Bob",
  age: 25,
  city: "Los Angeles"
}
console.log(getValueByKey(sampleObj2, "age")); // 25

// 配列の要素を逆順にする関数を書いてください。
function reverseArray(arr) {
  return arr.reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
// 元の配列を変更したくない場合は、以下のようにスプレッド演算子を使います。
function reverseArrayCopy(arr) {
  return [...arr].reverse();
}
console.log(reverseArrayCopy([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log([1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5

// 配列の中のすべての要素の合計を返す関数を書いてください。
function sumAllElements(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAllElements([1, 2, 3, 4, 5])); // 15

// 文字列をすべて大文字に変換する関数を書いてください。
function toUpperCaseString(str) {
  return str.toUpperCase();
}
console.log(toUpperCaseString("hello world")); // "HELLO WORLD"

// 基礎レベル（5問）
// 引数の数値を2倍にするアロー関数を書いてください。
const doubleNumber = (num) => num * 2;
console.log(doubleNumber(4)); // 8

// 文字列の中の特定の文字が何回現れるか数える関数を書いてください。
function countCharacter(str, char) {
  let count = 0;
  for (let i = 0; i<str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
console.log(countCharacter("hello world", "l")); // 3

// 配列の中の最大値を返す関数を書いてください。
function getMaxValue(arr) {
  return Math.max(...arr);
}
console.log(getMaxValue([3, 5, 1, 8, 2])); // 8

// 配列の中の奇数だけ抽出して返す関数を書いてください。
function filterOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}
console.log(filterOddNumbers([1, 2, 3, 4, 5, 6])); // [1, 3, 5]

// オブジェクトの全てのキーを取り出して配列にする関数を書いてください。

// 少し上のレベル（5問）
// 文字列の単語数を数える関数を書いてください。

// 配列の中の連続した同じ要素を一つにまとめて返す関数を書いてください。

// 非同期関数で、指定秒数待ってから「完了」と表示する関数を書いてください。

// 2つの配列をマージして重複を除いた配列を返す関数を書いてください。

// オブジェクトの配列から指定したキーの値だけを抽出して配列で返す関数を書いてください。
