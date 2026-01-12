# 線形探索（Linear Search）
# 配列の中から特定の値を探すアルゴリズム

def main
  # 入力を受け取る
  # gets: 1行読み込み（文字列として取得）
  # split: 文字列をスペースで分割して配列にする
  # map(&:to_i): 配列の各要素を整数に変換する（&:to_iはブロックの省略記法）
  # 多重代入: 左辺の変数に右辺の配列要素を順番に代入
  n, v = gets.split.map(&:to_i)
  
  # 2行目の配列データを読み込み
  # 同様にsplitで分割してmapで整数配列に変換
  a = gets.split.map(&:to_i)

  # 線形探索の開始
  exist = false # boolean型の変数初期化（vが存在するかどうかのフラグ）
  
  # 範囲オブジェクトを使ったループ
  # (0...n): 0からn-1までの範囲（...は末尾を含まない）
  # each: 範囲の各要素に対してブロックを実行
  # |i|: ブロック引数（現在のインデックス）
  (0...n).each do |i|
    if a[i] == v
      exist = true # 見つかったらフラグをtrueに設定
    end
  end

  # 結果を出力
  if exist
    puts "Yes"  # puts: 文字列を出力して改行
  else
    puts "No"
  end
end
# endでメソッド定義終了

# スクリプトが直接実行された場合のみmainを呼び出す
# __FILE__: 現在のファイル名
# $0: 実行されたスクリプト名
main if __FILE__ == $0