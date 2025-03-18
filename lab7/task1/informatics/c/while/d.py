def is_power_of_two(n):
    if n > 0 and (n & (n - 1)) == 0:
        print("YES")
    else:
        print("NO")

n = int(input())
is_power_of_two(n)
