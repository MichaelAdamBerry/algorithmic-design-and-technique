import time

n = input("array: ")


def naive(arr):
    result = 0
    for el in arr:
        for i in arr:
            if arr.index(el) != arr.index(i) and (i * el) > result:
                result = el * i
    return result


def faster(arr):
    largest = arr[0]
    large = arr[0]
    for el in arr:
        if el > largest:
            largest = el
    for foo in arr:
        if foo > large and arr.index(foo) != arr.index(largest):
            large = foo
    return large * largest


print(naive(n))
print(faster(n))


def timer(func, arr):
    start = time.time()
    func(arr)
    end = time.time()
    result = end - start
    return format(result, "f")


testArr = [111, 44, 33, 78, 9, 2, 2345, 21, 5, 3, 1, 54, 987, 5555, 43, 56565]

print("naive algorithm timed at ", timer(naive, testArr))

print("faster algorithm timed at ", timer(faster, testArr))
