# 最近点対問題
# 正の整数Nと、Nこの座標値（xi, yi）（i=0,1, ..., N-1）が与えられる。
# 最も距離が近い2点間の距離を求めよ

import math

# 2点（x1, y1）と（x2, y2）との距離を求める関数
def calc_dist(x1, y1, x2, y2):
    return math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))

def main():
    # 入力データを受け取る
    N = int(input())
    x = []
    y = []
    for i in range(N):
        xi, yi = map(float, input().split())
        x.append(xi)
        y.append(yi)
    
    # 求める値を、十分大きな値で初期化する
    minimum_dist = 1e9
    
    # 探索開始
    for i in range(N):
        for j in range(i + 1, N):
            # (x[i], y[i])と(x[j], y[j])の距離を計算する
            dist_i_j = calc_dist(x[i], y[i], x[j], y[j])
            
            # 暫定最小値　minimum_dist を　dist_i_j と比較
            if dist_i_j < minimum_dist:
                minimum_dist = dist_i_j
    
    # 答えを出力する
    print(minimum_dist)

if __name__ == "__main__":
    main()