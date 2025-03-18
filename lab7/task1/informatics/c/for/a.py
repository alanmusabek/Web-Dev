import sys

a = int(sys.stdin.readline().strip())
b = int(sys.stdin.readline().strip())

result = [str(i) for i in range(a, b + 1) if i % 2 == 0]

print(" ".join(result))