n = int(input("Введите количество элементов массива: "))
array = list(map(int, input("Введите элементы массива через пробел: ").split()))

positive_count = sum(1 for x in array if x > 0)

print(positive_count)
