


def of_s(s):
    return s ** (1/2)



def to_hundred(n):
    k = 100/60
    return k * n




if __name__ == "__main__":

    ls = [0, 10, 20, 30, 40, 50, 60]
    print(ls)

    rs = []
    for e in ls:
        rs += [to_hundred(e)]

    print(rs)

    rs2 = [10 * of_s(to_hundred(60 - e)) for e in range(0, 61 ,10)]
    print(rs2, 0.19**(1/2))


