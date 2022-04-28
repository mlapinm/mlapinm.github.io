# p08test.py

import re

def make_file(name):

    with open(name, 'w', encoding='utf-8') as f:
        # f.write('')
        pass

    print(name)


    pass

if __name__ == "__main__":
    l = [
        '11',
        '12',
        '21',
        '22',
        '31',
        '32',
        '41',
        '42',
        '51',
        '52',
        '',
        '',
        '',
    ]
    l = [e for e in l if len(e.strip())> 0]
    for e in l:
        name = 'd{}.txt'.format(e)
        make_file(name)





    print(l)
