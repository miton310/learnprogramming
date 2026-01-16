# フィボナッチ数列を求める再帰関数
def fibonacci(n)
  # ベースケース
  return 0 if n == 0
  return 1 if n == 1

  # 再帰呼び出し
  fibonacci(n - 1) + fibonacci(n - 2)
end

puts fibonacci(0)  # 0が出力されます
puts fibonacci(1)  # 1が出力されます
puts fibonacci(5)  # 5が出力されます
puts fibonacci(6)  # 8が出力されます

puts fibonacci(10) # 55が出力されます