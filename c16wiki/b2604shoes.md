# b32md.py

import re
import os
import shutil
import markdown


from b022write import read_file, write_file

def md(text):
    '''
    md text to html
    '''
    html = markdown.markdown(text)
    return html

def md_file(name):

    ls = read_file(name, True)

    html0 = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            font-family: Arial;
            font-size: 1.2rem;
            margin: 0;
            box-sizing: border-box;
        }
        p {
            font-family: Arial;
            font-size: 1.1rem;
        }
    </style>
</head>
<body>
'''
    html2 = '''</body>
</html>
'''

    md_text = '\n'.join(ls)

    print(1, ls[0], 2)

    html10 = markdown.markdown(md_text, extensions=['toc'])
    html1 = re.sub(r"(href=\")([^#])", 
        r'target="_blank" \1', html10)
    # html1 = markdown.markdown(md_text)

    html = html0 + html1 + html2

    i_point = name.find('.')
    # re.sub()
    # name2 = name[:i_point]
    name2 = re.sub(r'^([^.]+)\.(\w+)', r'\1.html', name)
    write_file(name2, html.split("\n"))


if __name__ == "__main__":

    if not 0:

        name = "b32file.md"
        md_file(name)
        # print(html)


    if not 1:

        dir = "n01"


    if not 1:

        aname = "b32a.txt"
        bname = "b32b.txt"

        print(0)

