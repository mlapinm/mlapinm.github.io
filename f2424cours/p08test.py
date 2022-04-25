# p08test.py

import re



if __name__ == "__main__":

    text2 = 'abc "d e f" jh'
    print(text2)
    text3 = re.sub(r'"', '\\"', text2)
    with open('p08.txt', 'w', encoding='utf-8') as f:
        f.write(text2)
        f.write('\n')
        f.write(text3)
    print(text2)
