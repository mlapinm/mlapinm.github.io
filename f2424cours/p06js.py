# p02times.py
import re
import codecs
import os
import shutil

import p02lines as pp

def make_files(l):


    for e in l:

        make_file(e)

    # print(names)

def make_js_text(text, name2):
    text2 = ''
    sentences = re.split(r'[\n]', text)
    sentences = [e.strip() for e in sentences if len(e.strip()) > 0]

    match = re.search(r'(l\d+.)', name2)

    variable = match[1] if match else 'kk'

    text2 = 'var {} = [\n'.format(variable)
    for e in sentences:
        text2 += '"{}",\n'.format(e)

    text2 += ']'
    return text2


def make_file(name):


    text = ''
    with open(name, 'r', encoding='utf-8') as f:
        text = f.read()


    name2 = name[:name.index('.')] + '.js'
    name2 = 'l' + name2[1:]

    text2 = make_js_text(text, name2=name2)

    with open(name2, 'w', encoding='utf-8') as f:
        f.write(text2)







    pass

def make_script1():
    '''
    files with l12
    '''



    list_files0 = os.listdir()
    list_files0 = [e for e in list_files0 if e[:3] == 'l22']
    list_files = [re.sub(r'.js$', '', e) for e in list_files0]

    text_include = ""
    for e in list_files0:

        text_include += f'<script src=\"js/{e}\"></script>\n'

    text = ''
    for i, e in enumerate(list_files):

        with open(list_files0[i], 'r', encoding='utf-8') as f:
            sentence = f.readline()
            sentence = f.readline()
            sentence = sentence.strip().strip(',').strip('"')
            
        text += f'items[{i}] = [{e}, \'{e}\', \'{sentence}\']\n'



    # print(len(list_files), list_files[:3])
    print(text_include)
    print(text)
    # print(name)

    pass



if __name__ == "__main__":
    l = os.listdir()
    l = [e for e in l if e[:3] == 'q22' and pp.get_num(e) < 22200]

    print(l)
    # make_files(l)

    make_script1()
    # print(len(l))
    print(123)

