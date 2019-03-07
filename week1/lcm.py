import time
import random


def lcm(a, b):
    if a % b == 0:
        return b
    if b % a == 0:
        return a
    v = 1

    if a < b:
        c = a
    else:
        c = b

    r = False

    mults = {"aMults": [a], "bMults": [b]}

    while r == False:
        if a * c in mults["bMults"]:
            v = a * c
            r = True
        else:
            mults["aMults"].append(a * c)
        if b * c in mults["aMults"]:
            v = b * c
            r = True
        else:
            mults["bMults"].append(b * c)
        c = c + 1
    return v


def perfTest(pair):
    print("pair is ", pair)
    a, b = pair
    start = time.time()
    val = lcm(a, b)
    end = time.time()
    print(val)
    print(format(end - start, "f"))


def generateTests():
    i = 10
    while i > 0:
        c = random.randint(1, 30)
        d = random.randint(1, 30)
        perfTest([c, d])
        i = i - 1


generateTests()
