# ユーグリッドの互除法による最大公約数の計算
def gcd(m,n)
  # ベースケース（再帰の終了条件）
  return m if n == 0

  # 再帰関数
  gcd(n, m % n)
end

puts gcd(51, 15); # 3が出力されます
puts gcd(15, 51); # 3が出力されます