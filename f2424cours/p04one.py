# p02times.py
import re
import codecs
import os
import shutil

import p02lines as pp
import p06js

def make_files(l):
    print(2, l)

    for e in l:
        print(1)
        make_file(*e)

    # print(names)



def make_file(fr_name, to_name):

    shutil.copy(fr_name, to_name)

    step = 2
    if step == 1:


        pp.clear_file(to_name)
        pp.make_list(to_name)

    elif step == 2:
        p06js.make_file(to_name)


    # get_quantity_strings(name)

    pass



if __name__ == "__main__":

    fr_name = 'p00b.txt'
    to_name = 'p00x.txt'
    l = [[fr_name, to_name]]
    make_files(l)
    # print(len(l))
    print(123)

