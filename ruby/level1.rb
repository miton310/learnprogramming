# 記述式問題（10問）
# 問1：FizzBuzzメソッド
# 1 以上 n 以下の整数について、
# 3 の倍数なら "Fizz"
# 5 の倍数なら "Buzz"
# 15 の倍数なら "FizzBuzz"
# それ以外はその数値
# を配列として返す fizz_buzz(n) メソッドを Ruby で定義してください。
def fizz_buzz(n)
  result = []
  (1..n).each do |i|
    if i % 15 == 0
      result << "FizzBuzz"
    elsif i % 3 == 0
      result << "Fizz"
    elsif i % 5 == 0
      result << "Buzz"
    else
      result << i
    end
  end
  result
end

# map を使って書く場合
def fizz_buzz(n)
  (1..n).map do |i|
    if i % 15 == 0
      "FizzBuzz"
    elsif i % 3 == 0
      "Fizz"
    elsif i % 5 == 0
      "Buzz"
    else
      i
    end
  end
end

# 問2：文字列と式展開
# 変数 name に "Ruby"、version に 3.2 が入っているとします。
# 次のような文字列を作るコードを書いてください。
# "Hello, Ruby 3.2!"
# + 連結ではなく、**式展開（#{}）**を使って書いてください。

name = 'Ruby'
version = 3.2
puts "Hello, #{name} #{version}!"


# 問3：配列とブロック
# 配列 numbers = [1, 2, 3, 4, 5] から、
# 各要素を 2 倍した新しい配列 [2, 4, 6, 8, 10] を作るコードを、
# map メソッドとブロックを使って1行で書いてください。

# 問4：ハッシュとキーワード引数
# キーワード引数 name: と price: を受け取り、
# "商品名: XXX, 価格: YYY円" という文字列を返す describe_product メソッドを定義してください。
# name: "Book", price: 1200 のとき、"商品名: Book, 価格: 1200円" を返すようにしてください。

# 問5：条件分岐とガード
# 整数 n を受け取り、

# 0 より小さい場合 "negative"

# 0 の場合 "zero"

# 0 より大きい場合 "positive"
# という文字列を返す sign(n) メソッドを if / elsif / else を使って定義してください。

# 問6：クラス定義とインスタンスメソッド
# User クラスを定義し、

# name を受け取って初期化（initialize）する

# greet インスタンスメソッドで "Hello, 名前" という文字列を返す

# というクラス定義を書いてください。
# 例：User.new("Alice").greet が "Hello, Alice" を返す。

# 問7：継承
# Animal クラスと、それを継承する Dog クラスを定義してください。

# Animal クラスは speak メソッドで "..." を返す

# Dog クラスは speak メソッドをオーバーライドして "ワン！" を返す

# というコードを書いてください。

# 問8：モジュールと mix-in
# Walkable モジュールを定義し、その中に walk メソッド（戻り値は "I can walk."）を定義してください。
# そのモジュールを Person クラスに mix-in（include）して、
# Person.new.walk で "I can walk." が返るようにしてください。

# 問9：例外処理
# 次のコードは、0 で割ったときにエラーになります。

# ruby
# def divide(a, b)
#   a / b
# end
# ZeroDivisionError が発生したときは "cannot divide by zero" という文字列を返し、
# それ以外のときは割り算の結果を返すように、begin / rescue を使って divide メソッドを書き直してください。

# 問10：Enumerable とブロック
# 配列 words = ["Ruby", "Rails", "RSpec"] から、
# 文字数が 4 以上の要素だけを取り出した配列 ["Ruby", "Rails", "RSpec"]（この例だと全部）を返すコードを、
# select メソッドとブロックを使って1行で書いてください。
# ※ 条件は「文字数が 4 以上」です。