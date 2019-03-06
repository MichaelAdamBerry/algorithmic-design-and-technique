import time 

def euclidean (a, b):
    while b != 0:
        t = b
        b = a % b
        a = t
    return a

def euclideanTests():
    testA = euclidean(28, 16)
    testB = euclidean(28851538, 1183019)
    print('testA ', testA == 4)
    print('test B', testB == 17657)

def perfTest():
    start = time.time()
    euclidean(28851538, 1183019)
    end = time.time()
    res = end - start
    print(format(res, 'f'))


euclideanTests()
perfTest()