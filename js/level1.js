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
function pluck(arr, key) {
  return arr.map(obj => obj[key])
}
const users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 }
];
console.log(pluck(users, "name")); // ["Alice", "Bob", "Charlie"]

// 【初級】文法と基本操作（5問）
// Q1. 数値を2倍にする（アロー関数）
// 引数 n を受け取り、それを2倍にした値を返すアロー関数 double を作成してください。
const double = (n) => n * 2;
console.log(double(5)); // 10

// Q2. 奇数の抽出
// 数値の配列を受け取り、その中の「奇数だけ」を含む新しい配列を返す関数 filterOdds を作成してください。
function filterOdds(arr) {
  return arr.filter(num => num % 2 !== 0);
}
console.log(filterOdds([1, 2, 3, 4, 5, 6])); // [1, 3, 5]

// Q3. 最大値の取得
// 数値の配列を受け取り、その中の最大値を返す関数 findMax を作成してください。
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([3, 5, 1, 8, 2])); // 8

// Q4. キーの取得
// オブジェクトを受け取り、そのすべてのキー（プロパティ名）を配列として返す関数 getObjectKeys を作成してください。
function getObjectKeys(obj) {
  return Object.keys(obj);
}
const sampleObj4 = {
  name: "Alice",
  age: 30,
  city: "New York"
}
console.log(getObjectKeys(sampleObj4)); // ["name", "age", "city"]

// Q5. 文字のカウント
// 文字列 str と、探したい文字 char を引数に取り、その文字が文字列の中に何回現れるかを返す関数 countChar を作成してください。
function countChar(str, char) {
  // includes
  let count = 0;
  for (let i =0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
console.log(countChar("heLlo worLd", "l")); // 3
// 別の書き方
// function countChar(arr, char) {
//   return arr.split('').filter(c => c === char).length;
// }}
// console.log(countChar("heLLo world", "l")); // 1

//さらに別の書き方
// const countChar = (str, char) => str.split('').reduce((acc, curr) => curr === char ? acc + 1 : acc, 0);
// console.log(countChar("heLLo world", "l")); // 1

// 【中級】データ処理とロジック（3問）
// Q6. 重複の排除とマージ
// 2つの配列 arr1 と arr2 を受け取り、それらを結合した上で、重複する要素を取り除いた新しい配列を返す関数 mergeUnique を作成してください。
function mergeUnique(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}
console.log(mergeUnique([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]
// 別の書き方
// function mergeUnique(arr1, arr2) {
//   const combined = arr1.concat(arr2); // 配列を結合
//   const uniqueArray = [];
//   for (let i = 0; i < combined.length; i++) {  // 結合した配列をループ
//     if (!uniqueArray.includes(combined[i])) {  // 1個ずつ確認して、まだuniqueArrayに含まれていなければ追加
//       uniqueArray.push(combined[i]);
//     }
//   }
//   return uniqueArray;
// }

// Q7. オブジェクト配列からの抽出
// 「ユーザーオブジェクトの配列」（例: [{id: 1, name: "Alice"}, {id: 2, name: "Bob"}]）と、「キー名」（例: "name"）を受け取り、そのキーの値だけを集めた配列（例: ["Alice", "Bob"]）を返す関数 pluck を作成してください。
function pluck(arr, key) {
  return arr.map(obj => obj[key]);
}
console.log(pluck([
  { id: 1, name: "Alice"},
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
]));
// 出力: ["Alice", "Bob", "Charlie"]

// Q8. 単語数のカウント
// 英文の文字列を受け取り、そこに含まれる単語の数を返す関数 countWords を作成してください。（区切りはスペースと仮定して構いませんが、連続する空白への対処ができるとベターです）
function countWords(str) {
  return str.trim().split(/\s+/).length; // trim()で前後の空白を削除し、正規表現\s+で連続する空白も1つとして分割
}
console.log(countWords(" Hello   world! This is  JavaScript. ")); // 5

// 【上級】非同期処理とアルゴリズム（2問）
// Q9. 非同期タイマー
// 引数 seconds（秒数）を受け取り、指定した秒数だけ待機した後にコンソールに「完了」と表示する非同期関数 waitAndLog を作成してください。（Promiseまたはasync/awaitを使用）
async function waitAndLog(seconds) {
  await new Promise(resolve => setTimeout(resolve, seconds * 1000));
  console.log("完了");
}
// 実際の使用例:
// 注文処理: ユーザー確認 → 在庫確認 → 決済 → 注文確定
async function processOrder(userId, productId) {
  try {
    // 1. ユーザー情報取得
    const user = await fetch(`/api/users/${userId}`).then(r => r.json());
    
    // 2. 在庫確認
    const stock = await fetch(`/api/products/${productId}/stock`).then(r => r.json());
    
    if (stock.quantity < 1) {
      throw new Error('在庫切れ');
    }
    
    // 3. 決済処理
    const payment = await fetch('/api/payment', {
      method: 'POST',
      body: JSON.stringify({ userId, amount: stock.price })
    }).then(r => r.json());
    
    // 4. 注文確定
    const order = await fetch('/api/orders', {
      method: 'POST',
      body: JSON.stringify({ userId, productId, paymentId: payment.id })
    }).then(r => r.json());
    
    return order;
  } catch (error) {
    console.error('注文処理エラー:', error);
    throw error;
  }
}

// Q10. 連続重複の削除
// 配列を受け取り、**「隣り合って連続している」**重複要素だけを1つにまとめた配列を返す関数 compress を作成してください。
// 例: [1, 2, 2, 3, 1, 1, 1] → [1, 2, 3, 1]
// （Setを使ってすべての重複を消すのではなく、連続部分のみ圧縮するロジックが必要です）
function compress(arr) {
  return arr.filter((item, index) => index === 0 || item !== arr[index - 1]);  // 最初の要素はそのまま、以降は前の要素と異なる場合のみ保持
}
console.log(compress([1, 2, 2, 3, 1, 1, 1])); // [1, 2, 3, 1]

// 第1段階：基本文法とデータ型
// Q1. 変数の宣言と型
// let を使って変数 price に数値 100 を代入し、変数 isAvailable に true を代入するコードを書いてください。
// その後、typeof 演算子を使って price の型をコンソールに表示してください。
let price = 100;
let isAvailable = true;
console.log(typeof price); // "number"

// Q2. 文字列の操作
// 定数 firstName に "Taro"、lastName に "Yamada" を定義し、テンプレート文字列（バッククォート）を使って "My name is Taro Yamada." という文字列を作成しコンソールに表示してください。
const firstName = "Taro";
const lastName  = "Yamada";
console.log(`My name is ${firstName} ${lastName}.`); // "My name is Taro Yamada."

// Q3. 配列の作成と参照
// "apple", "banana", "orange" の3つの要素を持つ配列 fruits を作成し、2番目の要素（banana）をコンソールに表示してください。
const fruits = ["apple", "banana", "orange"];
console.log(fruits[1]); // "banana"

// 第2段階：演算子と条件分岐
// Q4. 厳密な比較
// 変数 num に 文字列の "10" が入っています。if 文を使って、num が数値の 10 と**厳密に等しい（型も値も同じ）**場合にのみ "Equal" と表示し、そうでない場合は "Not Equal" と表示するコードを書いてください。
let num = "10";
num === 10 ? console.log("Equal") : console.log("Not Equal");

// Q5. 条件演算子（三項演算子）
// 変数 score が80以上なら "Pass"、それ以外なら "Fail" という文字列を変数 result に代入するコードを、if文を使わずに**条件演算子（? :）**で1行で書いてください。
let score = 75;
const result = score >= 80 ? "Pass" : "Fail";
console.log(result); // "Fail"

// 第3段階：ループと制御
// Q6. for文によるループ
// for 文を使って、1から10までの数値を順番にコンソールに表示するコードを書いてください。
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Q7. 配列の合計（for...of）
// 数値の配列 numbers = [10, 20, 30] があります。for...of 文を使って、この配列の要素の合計値を計算し、最後にコンソールに表示するコードを書いてください。
const numbers = [10, 20, 30];
let total = 0;
for (const num of numbers) {
  total += num;
}
console.log(total); // 60

// Q8. switch文
// 変数 rank（値は "A", "B", "C" のいずれか）の値に応じて、"Great", "Good", "Bad" をコンソールに表示する switch 文を書いてください。
let rank = "B";
switch (rank) {
  case "A":
    console.log("Great");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Bad");
    break;
  default:
    console.log("Unknown rank");
}

// Q9. 論理演算子のショートカット
// 変数 user が null または undefined のとき、デフォルト値として "Guest" を変数 userName に代入するコードを、論理和演算子 || を使って書いてください。（例: const userName = ...）
const userName = user || "Guest";
console.log(userName); // "Guest"

// Q10. FizzBuzz
// 1から20までの数値を順に表示しますが、3の倍数のときは "Fizz"、5の倍数のときは "Buzz"、両方の倍数（15など）のときは "FizzBuzz" と表示するコードを書いてください。（for 文と if 文の組み合わせ）
const fizzBuzz = () => {
  for (let i = 1; i <= 20; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz();

// 三項演算子を使った書き方:
// function fizzBuzz() {
//   for (let i = 1; i <= 20; i++) {
//     console.log(
//       i % 15 === 0 ? 'FizzBuzz' :
//       i % 3 === 0 ? 'Fizz' :
//       i % 5 === 0 ? 'Buzz' :
//       i
//     );
//   }
// }

// 第1段階：文字列と数値の操作（Chapter 5）
// Q1. 文字列の加工
// 変数 str に " JavaScript "（前後に空白あり）が入っています。

// 前後の空白を取り除く

// すべて小文字に変換する
// この2つの処理をメソッドチェーン（つなげて記述）で行い、結果の文字列 "javascript" をコンソールに表示してください。

// Q2. 部分文字列の取得
// 文字列 "2025-12-31" から、最初の4文字（年）だけを切り出してコンソールに表示するコードを書いてください。（substring または slice を使用）

// Q3. 数値の四捨五入
// 変数 pi = 3.14159 があります。この数値を小数点以下2桁になるように四捨五入して、文字列 "3.14" をコンソールに表示してください。（toFixed または Math.round を使用）

// 第2段階：配列のメソッド（Chapter 5）
// Q4. 配列への追加と削除
// 配列 colors = ["red", "green"] があります。

// 末尾に "blue" を追加する

// 先頭の "red" を削除する
// この操作を行った後の配列をコンソールに表示してください。（push, shift などを使用）

// Q5. 配列の結合（文字列化）
// 配列 path = ["home", "user", "documents"] を、スラッシュ / で結合してひとつの文字列 "home/user/documents" にしてコンソールに表示してください。（join を使用）

// Q6. 配列の検索
// 配列 members = ["Alice", "Bob", "Charlie"] の中に "Bob" が含まれているかどうかを判定し、含まれていれば true、いなければ false をコンソールに表示してください。（includes を使用）

// 第3段階：関数とスコープ（Chapter 6）
// Q7. アロー関数の定義
// 引数として「底辺 (base)」と「高さ (height)」を受け取り、三角形の面積（底辺×高さ÷2）を計算して戻り値として返すアロー関数 calcTriangleArea を作成してください。
// また、base=10, height=5 で呼び出した結果（25）をコンソールに表示してください。

// Q8. デフォルト引数
// 名前を受け取って挨拶をする関数 greet(name) を作成してください。引数が渡されなかった場合は、自動的に "Guest" という名前を使って "Hello, Guest!" と表示するようにデフォルト引数を設定してください。

// 第4段階：少し応用（Chapter 5, 6）
// Q9. 配列の変換（map）
// 数値の配列 nums = [1, 2, 3, 4] があります。map メソッドを使って、すべての要素を2倍にした新しい配列 [2, 4, 6, 8] を作成し、コンソールに表示してください。

// Q10. 配列の絞り込み（filter）
// 数値の配列 scores = [50, 80, 40, 90, 75] から、60点以上のスコアだけを取り出した新しい配列を作成し、コンソールに表示してください。（filter を使用）

