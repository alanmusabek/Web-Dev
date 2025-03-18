import math

def perfect_squares(a: int, b: int):
    start = math.ceil(math.sqrt(a))
    end = math.floor(math.sqrt(b))
    
    for i in range(start, end + 1):
        print(i * i, end=' ')

a = int(input())
b = int(input())

perfect_squares(a, b)
