// 【セットA】Chapter 7までの復習・応用（10問）
// Q1. 日付の取得（Chapter 5）
// 現在の日付と時刻を持つ Date オブジェクトを作成し、そこから「年（例: 2025）」だけを取得してコンソールに表示してください。（getFullYear を使用）
const currentDate = new Date(); // 現在の日付と時刻を取得 ex) 2024-06-15T12:34:56.789Z
const currentYear = currentDate.getFullYear(); // 年を取得
console.log(currentYear);

// Q2. 配列の並べ替え（Chapter 5）
// 数値の配列 points = [40, 100, 1, 5, 25] があります。これを**数値の昇順（小さい順）**に並べ替えてコンソールに表示してください。（sort メソッドを使用。注意：デフォルトの sort は文字列として比較してしまう点に気をつけてください）
let points = [40, 100, 1, 5, 25];
points.sort((a, b) => a - b); // 数値の昇順に並べ替え
console.log(points); // 結果を表示 [1, 5, 25, 40, 100]

// Q3. スプレッド構文（Chapter 6）
// 2つの配列 groupA = ["A", "B"] と groupB = ["C", "D"] があります。これらをスプレッド構文 ... を使って結合し、新しい配列 ["A", "B", "C", "D"] を作成してください。

// Q4. オブジェクトのプロパティ操作（Chapter 7）
// 空のオブジェクト user を作成し、後からプロパティ name に "Tanaka"、age に 30 を追加してください。その後、user オブジェクト全体をコンソールに表示してください。

// Q5. 分割代入（Chapter 3, 6）
// オブジェクト book = { title: "JavaScript入門", price: 2500 } があります。このオブジェクトから title と price という変数を分割代入を使って一度に取り出し、それぞれコンソールに表示してください。

// Q6. テンプレートリテラルの計算（Chapter 2）
// 変数 a = 10, b = 20 があります。テンプレートリテラルの中で計算を行い、"合計は30です" という文字列を表示してください。

// Q7. try...catch（Chapter 4）
// 意図的にエラーを発生させるコード（例: 定義されていない関数を呼ぶなど）を try ブロックに書き、エラーが発生したら catch ブロックで "エラーが発生しました" とコンソールに表示するコードを書いてください。

// Q8. 関数式（Chapter 6）
// 変数 multiply に、2つの引数を掛け算して返す**無名関数（関数式）**を代入してください。その後、multiply(3, 4) を実行して結果（12）を表示してください。

// Q9. thisキーワード（Chapter 7, 8）
// オブジェクト person を作成し、プロパティ name: "Ken" と、メソッド sayHello を定義してください。sayHello メソッド内で this.name を使って "Hello, I am Ken" と表示させてください。

// Q10. 配列の検索（find）（Chapter 5）
// オブジェクトの配列 users = [{id: 1, name: "A"}, {id: 2, name: "B"}, {id: 3, name: "C"}] があります。ここから id が 2 のオブジェクトだけを検索して取り出し（find を使用）、そのオブジェクトをコンソールに表示してください。

// 【セットB】Chapter 8〜10（クラス・DOM・非同期）（10問）
// Q11. クラスの定義（Chapter 8）
// Car というクラスを定義してください。

// コンストラクターで brand（メーカー名）を受け取り、プロパティとして保存する。

// drive() というメソッドを持ち、実行すると "{brand} is running." とコンソールに表示する。
// インスタンスを作成して drive() を呼び出してください。

// Q12. 継承（Chapter 8）
// Q11の Car クラスを継承した SuperCar クラスを作成してください。

// drive() メソッドをオーバーライド（上書き）し、"{brand} is running very fast!" と表示するようにしてください。

// Q13. DOM要素の取得（Chapter 9）
// HTMLに <div id="content">Old Text</div> があると仮定します。
// JavaScriptで id="content" の要素を取得し、変数 el に代入するコードを書いてください。（document.getElementById または querySelector）

// Q14. DOMのテキスト変更（Chapter 9）
// Q13で取得した要素 el のテキストの中身を "New Text" に書き換えてください。（textContent または innerText）

// Q15. イベントリスナー（Chapter 9）
// HTMLに <button id="btn">Click</button> があると仮定します。
// このボタンがクリックされたときに、アラートで "Clicked!" と表示するイベントリスナーを追加してください。（addEventListener）

// Q16. DOM要素の生成と追加（Chapter 9）
// 新しい <li> 要素を作成し、そのテキストを "List Item" に設定してから、既存の <ul> 要素（id="list" と仮定）の子要素として追加するコードを書いてください。（createElement, appendChild）

// Q17. タイマー処理（Chapter 10）
// 3秒後（3000ミリ秒後）に "3 seconds passed" とコンソールに表示するコードを書いてください。（setTimeout）

// Q18. JSONの変換（Chapter 5, 10）
// オブジェクト data = { name: "Test", count: 10 } を、JSON文字列に変換してコンソールに表示してください。（JSON.stringify）

// Q19. ローカルストレージ（Chapter 10）
// ローカルストレージに、キー "username"、値 "Ninja" を保存するコードを書いてください。（localStorage.setItem）

// Q20. 非同期処理（Promise）（Chapter 10）
// 「成功しました」という文字列で解決（resolve）する Promise オブジェクトを作成し、その完了後に .then() を使って受け取ったメッセージをコンソールに表示するコードを書いてください。