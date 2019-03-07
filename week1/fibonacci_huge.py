import sys
import time
import random


def get_period(m):
    count = 1
    sequence = [0, 1]
    found = False
    while not found:
        num = (sequence[count] + sequence[count - 1]) % m
        sequence.append(num)
        count = count + 1
        if sequence[count] == 1 and sequence[count - 1] == 0:
            return count - 1


def test_get_period():
    two = get_period(2)
    three = get_period(3)
    thousand = get_period(1000)
    print(two == 3)
    print(three == 8)
    print(thousand)


def get_fibonacci_huge(n, m):
    remainder = n % get_period(m)
    first = 0
    sec = 1
    res = remainder
    while remainder > 1:
        res = (first + sec) % m
        first = sec
        sec = res
        remainder = remainder - 1
    return res % m


def perfTest(n, m):
    print(get_fibonacci_huge(n, m))
    start = time.time()
    get_fibonacci_huge(n, m)
    end = time.time()
    print(format(end - start, "f"))


def generateTests():
    i = 10
    while i > 0:
        a = random.randint(1, 1000000000000000000)
        b = random.randint(1, 100000)
        print("testing .....", a, b)
        perfTest(a, b)
        i = i - 1


generateTests()
