





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
