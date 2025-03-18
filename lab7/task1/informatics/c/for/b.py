import sys

def find_numbers(a: int, b: int, c: int, d: int):
    for num in range(a, b + 1):
        if num % d == c:
            print(num)

if __name__ == "__main__":
    a, b, c, d = map(int, sys.stdin.read().split())
    find_numbers(a, b, c, d)