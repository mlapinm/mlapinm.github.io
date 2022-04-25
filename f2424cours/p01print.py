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
        sentence = match[1] + '.' if match else 'qqq'  
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
    "q13101 Introduction to data exploration3m",
    "q13102 Hallie: Fascinating data insights 2m",
    "q13103 Data collection in our world3m",
    "q13104 Determining what data to collect3m",
    "q13105 Discover data formats5m",
    "q13106 Understanding structured data1m",
    "q13107 Know the type of data you're working with4m",
    "q13108 Data table components2m",
    "q13109 Meet wide and long data3m",
    "q13201 Ensuring data integrity1m",
    "q13202 Bias: From questions to conclusions3m",
    "q13203 Biased and unbiased data2m",
    "q13204 Understanding bias in data3m",
    "q13205 Identifying good data sources2m",
    "q13206 What is bad data?2m",
    "q13207 Introduction to data ethics4m",
    "q13208 Optional Refresher: Alex: The importance of data ethics3m",
    "q13209 Introduction to data privacy1m",
    "q13210 Andrew: The ethical use of data2m",
    "q13211 Features of open data4m",
    "q13212 Andrew: Steps for ethical data use3m",
    "q13301 All about databases2m",
    "q13302 Database features3m",
    "q13303 Exploring metadata 3m",
    "q13304 Using metadata as an analyst3m",
    "q13305 Metadata management3m",
    "q13306 Megan: Fun with metadata2m",
    "q13307 Working with more data sources3m",
    "q13308 Importing data from spreadsheets and databases 3m",
    "q13309 Sorting and filtering5m",
    "q13310 Setting up BigQuery, including sandbox and billing options3m",
    "q13311 How to use BigQuery4m",
    "q13312 BigQuery in action6m",
    "q13401 Feel confident in your data53s",
    "q13402 Let's get organized4m",
    "q13403 All about file naming 2m",
    "q13404 Security features in spreadsheets3m",
    "q13501 Managing your presence as a data analyst1m",
    "q13502 Why an online presence is important3m",
    "q13503 Tips for enhancing your online presence3m",
    "q13504 Networking know-how2m",
    "q13505 Benefits of mentorship3m",
    "q13506 Rachel: Mentors are key2m",
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
    text = clear_text(text)
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
    '''
    files with l12
    '''



    list_files0 = os.listdir()
    list_files0 = [e for e in list_files0 if e[:3] == 'l12']
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

def del_quotes(l):
    '''
    del " in files with q12 texts
    '''
    list_files = os.listdir()
    list_files = [e for e in list_files if e[:3] == 'q12']

    k = 0
    text = ''
    text2 = ''
    for e in list_files:
        if k > 0:
            pass
            # break
        with open(e, 'r', encoding='utf-8') as f:
            text = f.read()
            text2 = re.sub(r'"', '\'', text)
        with open(e, 'w', encoding='utf-8') as f:
            f.write(text2)
         
        k += 1

    

    # print(text[:700])
    # print(text2[:700])
    # print(list_files0)
    print('len = ', len(list_files))

def clear_text(text):
    '''
    remove string with: Play video
    '''
    clears_lines = [
        'Play video starting',
        ': добавлено в выделение',
        'Воспроизведите видео, начиная с',
        'Воспроизвести видео, начинающееся'
    ]
    text2 = text
    for e in clears_lines:
        text2 = re.sub(r'\r?\n{}.+\r?\n?'.format(e), ' ', text2)
    text2 = re.sub(r'"', '\\"', text2)
    

    # print(text)
    # print(text2)
    return(text2)

def test_file(name):


    e_name = name + 'e.txt'
    r_name = name + 'r.txt'

    # print(e_name, r_name)
    e_text = ''
    r_text = ''

    with open(e_name, 'r', encoding='utf-8') as f:
        e_text = f.read()
    with open(r_name, 'r', encoding='utf-8') as f:
        r_text = f.read()

    e_text2 = clear_text(e_text)
    r_text2 = clear_text(r_text)


    with open(e_name, 'w', encoding='utf-8') as f:
        # f.write(e_text2)
        pass
    with open(r_name, 'w', encoding='utf-8') as f:
        # f.write(r_text2)
        pass
    

    es = e_text2.split('\n')
    es = [e.strip() for e in es if len(e.strip()) > 0]
    rs = r_text2.split('\n')
    rs = [e.strip() for e in rs if len(e.strip()) > 0]
    print(len(es), len(rs), e_name)

    pass

def test_files(l):

    k = 0

    for e in l:
        if k:
            pass
            # break

        e = e[:e.index(' ')]
        test_file(e)

        k += 1
    print(22)

    pass



if __name__ == "__main__":
    l = l[:2]

    # test_files(l)


    # files_from_list(l)

    make_lists(l)
    # del_quotes(l)
    # make_js()

    # make_script1()


    print(len(l))

