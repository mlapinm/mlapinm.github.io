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
        names += [[name, sentence]]

    for e in names:
        with open('{}e.txt'.format(e[0]), 'w', encoding='utf-8') as f:
            f.write(e[1])

        with open('{}r.txt'.format(e[0]), 'w', encoding='utf-8') as f:
            f.write(e[1])



    print(names)
    print(sentence)



    print(text)
    pass

l = [
    'q12101 Introduction to problem-solving and effective questioning.',
    'q12102 Data in action.',
    'q12103 Nikki: The data process works.',
    'q12104 Common problem types.',
    'q12105 Problems in the real world.',
    'q12106 Anmol: From hypothesis to outcome.',
    'q12107 SMART questions.',
    'q12108 Evan: Data opens doors.',
    'q12201 Data and decisions.',
    'q12202 How data empowers decisions.',
    'q12203 Qualitative and quantitative data.',
    'q12204 The big reveal: Sharing your findings.',
    'q12205 Data versus metrics.',
    'q12206 Mathematical thinking.',
    'q12301 The amazing spreadsheet.',
    'q12302 Get to work with spreadsheets.',
    'q12303 Step-by-step in spreadsheets.',
    'q12304 Formulas for success.',
    'q12305 Spreadsheet errors and fixes.',
    'q12306 Functions 101.',
    'q12307 Before solving a problem, understand it.',
    'q12308 Scope of work and structured thinking.',
    'q12308 Scope of work and structured thinking.',
    'q12309 Staying objective.',
    'q12401 Communicating with your team.',
    'q12402 Balancing needs and expectations across your team.',
    'q12403 Focus on what matters.',
    'q12404 Clear communication is key.',
    'q12405 Tips for effective communication.',
    'q12406 Balancing expectations and realistic project goals.',
    'q12407 Sarah: How to communicate with stakeholders.',
    'q12408 The data tradeoff: Speed versus accuracy.',
    'q12409 Think about your process and outcome.',
    'q12410 Meeting best practices.',
    'q12411 Ximena: Joining a new team.',
    'q12412 From conflict to collaboration.',
    'q12413 Nathan: From the U.S. Marine Corps to data analytics.',
    ]

def make_list(name):
    '''
    break file with name to strings without empty string
    write to file "q11*" from "q*"
    '''

    # name2 = re.sub(r'^q','q11', name)
    name2 = name

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

    name2 = re.sub(r'q(\d+.).+$', r'l\1.js', name)


    match = re.search(r'(l\d+.)', name2)
    print(name2, name)

    variable = match[1] if match else 'kk'

    text2 = 'var {} = [\n'.format(variable)
    for e in sentences:
        text2 += '"{}",\n'.format(e)

    text2 += ']'
    return text2

def make_js():
    l = os.listdir()
    l = [e for e in l if re.search(r'^q12\d+', e)]
    # print(l)
    for e in l:
        name = e  # 'q11513e.txt'
        # print(111)

        text = make_js_name(name)
        name2 = name[:name.index('.')] + '.js'
        name2 = 'l' + name2[1:]
        with open(name2, 'w', encoding='utf-8') as f:
            f.write(text)

def make_script1():



    list_files0 = os.listdir()
    list_files0 = [e for e in list_files0 if e[:3] == 'l11']
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

    # files_from_list(l)

    # make_lists(l)
    make_js()

    # make_script1()


    print(len(l))

