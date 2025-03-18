def power(a: float, n: int) -> float:
    return a ** n

if __name__ == "__main__":
    a, n = map(float, input().split())
    n = int(n)
    print(power(a, n))