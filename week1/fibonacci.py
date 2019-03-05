import time

def calc_fib(n):
    if n <= 1:
        return n

    return calc_fib(n - 1) + calc_fib(n - 2)


def faster_fib(n):
    fibArr = [0, 1]
    for i in range(2, n + 1):
        num = fibArr[i - 1] + fibArr[i - 2]
        fibArr.append(num)
    return fibArr[n]


z = int(input("calc_fib(z) z = ?"))
print(calc_fib(z))

n = int(input("faster_fib(n) n = ?"))
print(faster_fib(n))


def timeTest(func, n):
    start = time.time()
    func(n)
    end = time.time()
    return (end - start)

t = int(input("fib number:"))
calc_fib_time = timeTest(calc_fib, t)
faster_fib_time = timeTest(faster_fib, t)

print('calc_fib', t, 'takes ', format(calc_fib_time, 'f'  ))
print('faster_fib_time', t, 'takes ', format(faster_fib_time, 'f'))
