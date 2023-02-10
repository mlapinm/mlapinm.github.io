
import os



def make_nav():
    name = "a1201nav.md"

    path = "D:/programs/b01io/c16wiki/"
    fs = os.listdir(path)
    fs.sort()
    fs = [e for e in fs if ".html" in e]
    fs = [e for e in fs if "index.html" not in e]
    fs = [e for e in fs if "a1201nav" not in e]

    bfs = []
    for e in fs:
        line = '[{}]({})'.format(e, e)
        bfs += [line]


    with open(name, 'w', encoding='utf8') as f:
        wfs = [e+'\n' for e in bfs]
        f.writelines(wfs)



    print(len(fs), fs)
    print(bfs)


if __name__ == "__main__":

    if not 0:
        make_nav()


