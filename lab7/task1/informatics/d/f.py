n = int(input("Введите количество элементов массива: "))
array = list(map(int, input("Введите элементы массива через пробел: ").split()))

count = 0
for i in range(1, n - 1):
    if array[i] > array[i - 1] and array[i] > array[i + 1]:
        count += 1

print(count)
