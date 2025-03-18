def min_of_four(a: int, b: int, c: int, d: int) -> int:
    return min(a, b, c, d)

if __name__ == "__main__":
    numbers = list(map(int, input().split()))
    print(min_of_four(*numbers))