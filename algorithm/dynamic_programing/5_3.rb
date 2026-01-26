# Frog問題を「緩和」を意識した動的計画法（Dynamic programming）で解くRubyコード
# まずはC++で書く

# #include <iostream>
# #include <vector>
# using namespace std;

# template <class T> void chmin(T& a, T b) {
#   if (a > b) {
#     a = b;
#   }
# }

# const long long INF = 1LL << 60; // 十分大きい値とする（ここでは 2^60）

# int main() {
#   // 入力
#   int N;
#   cin >> N;
#   vector<long long> h(N);
#   for (int i = 0; i < N; i++) cin >> h[i];

#   // 初期化（最小化問題なので INF に初期化）
#   vector<long long> dp(N, INF);

#   // 初期条件
#   dp[0] = 0;

#   // ループ
#   for (int i = 1; i < N; ++i) {
#     chmin(dp[i], dp[i -1] + abs(h[i] - h[i - 1]));
#     if (i > 1) {
#       chmin(dp[i], dp[i -2] + abs(h[i] - h[i -2]));
#     }
#   }

#   // 答え
#   cout << dp[N - 1] << endl;
# }

# ここからruby
# 定数定義：十分大きい値（2の60乗）
# Rubyでは　<< はビットシフト演算子。1を60ビット左にシフトすると、2の60乗になる。
INF = 1 << 60

# 入力：足場の数
n = gets.to_i # gets で1行読み込み、to_i で整数に変換

# 入力：各足場の高さ
# gets.split で空白区切りで配列に分割
# map(&:to_i) で各要素を整数に変換（&:to_i は{|x| x.to_i}の省略形）
h = gets.split.map(&:to_i)

# dp配列の初期化
# Array.new(n, INF) でサイズnの配列を作成し、全要素をINFで初期化
dp = Array.new(n, INF)

# 初期条件：0番目の足場のコストは0
dp[0] = 0

# メインループ：1番目からn-1番目の足場まで処理
(1...n).each do |i|
  # 範囲オブジェクト（1...n） は1以上n未満を表す
  # (1..n)とすると1以上n以下になるので注意

  # 緩和1：1つ前の足場から移動する場合
  # (h[i] - h[i - 1]).abs で高さの差の絶対値を計算
  # (dp[i], 新しい値).min で最小値を取得してdp[i]を更新
  dp[i] = [dp[i], dp[i - 1] + (h[i] - h[i - 1]).abs].min

  # 緩和2：2つ前の足場から移動する場合（i > 1 の場合のみ）
  if i > 1
    dp[i] = [dp[i], dp[i - 2] + (h[i] - h[i - 2]).abs].min
  end
end

# 結果出力：最後の足場までの最小コスト
puts dp[n - 1]

# アルゴリズムの解説
# 問題の概要
# カエルがN個の足場を0番目からN-1番目まで移動します。各移動にはコスト（高さの差の絶対値）がかかり、最小コストを求めます。

# 動的計画法の考え方
# 状態定義: dp[i] = i番目の足場に到達するための最小コスト

# 初期条件: dp[0] = 0（スタート地点なのでコスト0）

# 遷移式:

# i番目の足場には2通りの到達方法がある
# 1つ前から: dp[i-1] + |h[i] - h[i-1]|
# 2つ前から: dp[i-2] + |h[i] - h[i-2]|
# この2つの最小値を取る
# 緩和（Relaxation）: より小さいコストが見つかったら更新する

# Ruby特有の文法ポイント
# gets: 標準入力から1行読み込む
# .to_i: 文字列を整数に変換
# .split: 文字列を空白で分割して配列にする
# .map(&:to_i): 配列の各要素に to_i メソッドを適用
# 範囲オブジェクト: (1...n) は1以上n未満、(1..n) は1以上n以下
# 配列の最小値: [a, b].min で2つの値の小さい方を取得

