
import shutil
import os

PATH = 'b54funcs/'

def copy_b24():
    anames = [e for e in os.listdir(PATH)]
    anames = ['astronomy.browser.js']
    anames += [e for e in os.listdir(PATH) if 'b24' in e]

    bpath = r'D:\avi02prog\mlapinm.github.io\f2362boom'

    for e in anames:
        a = PATH + e
        try:
            shutil.copy(a, bpath)
        except:
            print("not copy", a)

    print(anames, len(anames))


def bmain():

    copy_b24()




if __name__ == "__main__":
    bmain()