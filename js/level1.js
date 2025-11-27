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
// 違う書き方
// function filterEvenNumbers(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

// 文字列の中に"JavaScript"という単語が含まれているかどうかを判定する関数を書いてください。
function containsJavaScript(str) {
  return str.includes("JavaScript") ? true : false;
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

// async/await を使った書き方
async function sumAsync2(a, b) {
  return a + b;
}
async function executeSum() {
  const result = await sumAsync2(3, 7);
  console.log(result); // 10
}
executeSum();

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
function getAllKeys(obj) {
  return Object.keys(obj);
}
const sampleObj3 = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
}
console.log(getAllKeys(sampleObj3)); // ["brand", "model", "year"]
 
// 少し上のレベル（5問）
// 文字列の単語数を数える関数を書いてください。
// trim() - 文字列の前後の空白を削除
// split(/\s+/) - 空白文字で分割（連続する空白も1つとして扱う）
// filter(word => word.length > 0) -  空文字列を除外(0以上の長さの単語だけを残す)
// trim() と filter() は厳密には不要ですが、より正確に単語数を数えるために使っています。
function countWords(str) {
  return str.trim().split(/\s+/).filter(word => word.length > 0).length;
}
console.log(countWords(" Hello   world! This is  JavaScript. ")); // 5

// 配列の中の連続した同じ要素を一つにまとめて返す関数を書いてください。
function removeConsecutiveDuplicate(arr) {
  if (arr.length === 0) return [];
  const result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(removeConsecutiveDuplicate([1, 1, 2, 2, 3, 1, 1, 4]));
// 関数型プログラミング手法を使った別の書き方
function removeConsecutiveDuplicateFP(arr) {
  return arr.filter((item, index) => index === 0 || item !== arr[index - 1]);
}
console.log(removeConsecutiveDuplicateFP([1, 1, 2, 2, 3, 1, 1, 4]));

// 非同期関数で、指定秒数待ってから「finished」と表示する関数を書いてください。
async function waitAndLog(seconds) {
  await new Promise(resolve => setTimeout(resolve, seconds * 1000));
  console.log("finished");
}

// 2つの配列をマージして重複を除いた配列を返す関数を書いてください。
function mergeAndRemoveDuplicates(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}
console.log(mergeAndRemoveDuplicates([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]

// オブジェクトの配列から指定したキーの値だけを抽出して配列で返す関数を書いてください。


// 【初級】文法と基本操作（5問）
// Q1. 数値を2倍にする（アロー関数）
// 引数 n を受け取り、それを2倍にした値を返すアロー関数 double を作成してください。

// Q2. 奇数の抽出
// 数値の配列を受け取り、その中の「奇数だけ」を含む新しい配列を返す関数 filterOdds を作成してください。

// Q3. 最大値の取得
// 数値の配列を受け取り、その中の最大値を返す関数 findMax を作成してください。

// Q4. キーの取得
// オブジェクトを受け取り、そのすべてのキー（プロパティ名）を配列として返す関数 getObjectKeys を作成してください。

// Q5. 文字のカウント
// 文字列 str と、探したい文字 char を引数に取り、その文字が文字列の中に何回現れるかを返す関数 countChar を作成してください。

// 【中級】データ処理とロジック（3問）
// Q6. 重複の排除とマージ
// 2つの配列 arr1 と arr2 を受け取り、それらを結合した上で、重複する要素を取り除いた新しい配列を返す関数 mergeUnique を作成してください。

// Q7. オブジェクト配列からの抽出
// 「ユーザーオブジェクトの配列」（例: [{id: 1, name: "Alice"}, {id: 2, name: "Bob"}]）と、「キー名」（例: "name"）を受け取り、そのキーの値だけを集めた配列（例: ["Alice", "Bob"]）を返す関数 pluck を作成してください。

// Q8. 単語数のカウント
// 英文の文字列を受け取り、そこに含まれる単語の数を返す関数 countWords を作成してください。（区切りはスペースと仮定して構いませんが、連続する空白への対処ができるとベターです）

// 【上級】非同期処理とアルゴリズム（2問）
// Q9. 非同期タイマー
// 引数 seconds（秒数）を受け取り、指定した秒数だけ待機した後にコンソールに「完了」と表示する非同期関数 waitAndLog を作成してください。（Promiseまたはasync/awaitを使用）

// Q10. 連続重複の削除
// 配列を受け取り、**「隣り合って連続している」**重複要素だけを1つにまとめた配列を返す関数 compress を作成してください。
// 例: [1, 2, 2, 3, 1, 1, 1] → [1, 2, 3, 1]
// （Setを使ってすべての重複を消すのではなく、連続部分のみ圧縮するロジックが必要です）