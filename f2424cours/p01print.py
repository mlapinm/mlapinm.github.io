import re
import os


def make_file(name):
    with open(name, "w", encoding='utf-8') as f:
        f.write(' ')

def make_n_couples_files(n):

    for i in range(n):
        name = 'q{:02}e.txt'.format(i+1)
        make_file(name)
        name = 'q{:02}r.txt'.format(i+1)
        make_file(name)

    pass

def file_list(n):
    text = ''
    for i in range(1, n+1):
        text += 'q{:02} .\n'.format(i)
    with open('p02list.txt', 'w') as f:
        f.write(text)

def text_to_list(text):
    l = re.split(r'[\.\?\!]', text)
    l = [e.strip() for e in l if len(e.strip()) != 0]


    print(l)

def files_from_list(l):

    names = []
    for e in l:
        text = e
        match = re.search(r'(q\d*)', text)
        name = match[1] if match else 'qqq'  
        match = re.search(r'q\d* (.*)$', text)
        sentence = match[1] if match else 'qqq'  
        names += [[name, sentence + '.']]

    for e in names:
        with open('{}e.txt'.format(e[0]), 'w', encoding='utf-8') as f:
            f.write(e[1])

        with open('{}r.txt'.format(e[0]), 'w', encoding='utf-8') as f:
            f.write(e[1])



    print(names)
    print(sentence)



    print(text)
    pass

l = ['q207 Using data to drive successful outcomes', 'q208 Real-world data magic', 'q303 Learning about data phases and tools', 'q304 Stages of the data life cycle', 'q305 Six phases of data analysis', 'q306 Molly: Example of the data process', 'q307 Exploring data analyst tools', 'q403 The ins and outs of core data tools', 'q404 Columns and rows and cells, oh my', 'q405 SQL in action', 'q406 Angie: Everyday struggles when learning new skills', 'q407 Becoming a data viz whiz', 'q408 Lilah: The power of a visualization', "q503 Let's get down to business", 'q504 The job of a data analyst', 'q505 Joey: Path to becoming a data analyst', 'q506 Tony: Supporting careers in data analytics', 'q507 The power of data in business', 'q508 Rachel: Data detectives', 'q509 Understanding data and fairness', 'q510 Alex: Fair and ethical data decisions', 'q511 Data analysts in different industries', 'q512 Samah: Interview best practices', 'q513 Weekly wrap-up']

def make_list(name):
    '''
    break file with name to strings without empty string
    write to file "q11*" from "q*"
    '''

    name2 = re.sub(r'^q','q11', name)

    text = ''
    with open(name, 'r', encoding='utf-8') as f:
        text = f.read()

    sentences = []
    text = re.sub(r'([\.\!\?])', r'\1\n', text)
    sentences = re.split(r'[\n]', text)
    sentences = [e.strip() for e in sentences if len(e.strip()) > 0]
    text2 = '\n'.join(sentences)

    if 1:
        with open(name2, 'w', encoding='utf-8') as f:
            f.write(text2)

def make_lists(l):
    '''
    files from list l 
    break to strings
    '''

    l2 = [e[:e.index(' ')] for e in l]

    for e in l2:
        make_list(e + 'e.txt')
        make_list(e + 'r.txt')


def make_js_name(name):
    text = ''
    with open(name, encoding='utf-8') as f:
        text = f.read()

    sentences = []
    text = re.sub(r'([\.\!\?])', r'\1\n', text)
    sentences = re.split(r'[\n]', text)
    sentences = [e.strip() for e in sentences if len(e.strip()) > 0]

    name2 = re.sub(r'q(\d+).+$', r'l\1.js', name)


    match = re.search(r'(l\d+)', name2)
    variable = match[1] if match else 'kk'

    text2 = 'var {} = [\n'.format(variable)
    for e in sentences:
        text2 += '"{}",\n'.format(e)

    text2 += ']'
    return text2

def make_js():
    l = os.listdir()
    l = [e for e in l if re.search(r'^q11\d+', e)]
    # print(l)
    for e in l:
        name = e  # 'q11513e.txt'
        text = make_js_name(name)
        name2 = name[:name.index('.')] + '.js'
        name2 = 'l' + name2[1:]
        with open(name2, 'w', encoding='utf-8') as f:
            f.write(text)





if __name__ == "__main__":

    # make_lists(l)
    make_js()


    print(123)

