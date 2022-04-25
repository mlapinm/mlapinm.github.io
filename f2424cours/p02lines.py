# p02times.py
import re
import codecs
import os

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


def clear_text(text):
    '''
    remove string with: Play video
    '''
    clears = [
        'Play video starting',
        ': добавлено в выделение',
        'Воспроизведите видео, начиная с',
        'Воспроизвести видео, начинающееся',
        '\.\.\.'
    ]
    text2 = text
    for e in clears:
        text2 = re.sub(r'\r?\n{}.+\r?\n?'.format(e), ' ', text2)
    for e in clears:
        text2 = re.sub(r'{}'.format(e), ' ', text2)
    text2 = re.sub(r'[^\\]"', '\\"', text2)

    # print(text)
    # print(text2)
    return(text2)

def clear_file(name):
    text = ''
    with open(name, 'r', encoding='utf-8') as f:
        text = f.read()
    text2 = clear_text(text)
    with open(name, 'w', encoding='utf-8') as f:
        f.write(text2)

def is_utf8(name):
    b_text = ''
    with open(name, 'rb') as f:
        b_text = f.read()
    text = ''
    try:
        text = b_text.decode(encoding='utf-8', errors='strict')
    except:
        return False
    return True

def to_utf8(name):
    text = ''
    cods = ['utf-8' ,'ansi']
    cod = cods[0] if is_utf8(name) else cods[1]
    with open(name, 'r', encoding=cod) as f:
        text = f.read()
    with open(name, 'w', encoding='utf-8') as f:
        f.write(text)



def make_files(l):

    names = l


    for e in names:
        make_file(e)

    # print(names)

def get_quantity_strings(name):

    text = ''
    with open(name, 'r', encoding='utf-8') as f:
        text = f.read()
    lines = []
    lines = text.split('\n')

    print(name, len(lines), len(text))

def make_list(name):
    '''
    break file with name to strings without empty string
    write to file "q11*" from "q*"
    '''


    text = ''
    with open(name, 'r', encoding='utf-8') as f:
        text = f.read()

    sentences = []
    text = re.sub(r'([\.\!\?])', r'\1\n', text)
    sentences = re.split(r'[\n]', text)
    sentences = [e.strip() for e in sentences if len(e.strip()) > 0]
    text2 = '\n'.join(sentences)

    if 1:
        with open(name, 'w', encoding='utf-8') as f:
            f.write(text2)


def make_file(name):


    # to_utf8(name)
    # clear_file(name)
    # make_list(name)


    get_quantity_strings(name)

    pass

def get_num(name):
    n = 0
    match = re.search(r'\d+', name)
    n = int(match[0]) if match else 0
    return n
    pass


if __name__ == "__main__":
    l0 = os.listdir()
    l = [e for e in l0 if e[:3] == 'q13' and get_num(e) < 13700]


    make_files(l)
    print(len(l))

