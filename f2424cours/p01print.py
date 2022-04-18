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
  "q22101 Welcome to Machine Learning!.",
  "q22102 Welcome.",
  "q22103 What is Machine Learning?",
  "q22104 Supervised Learning.",
  "q22105 Unsupervised Learning.",
  "q22118 Model Representation.",
  "q22119 Cost Function.",
  "q22120 Cost Function - Intuition I.",
  "q22121 Cost Function - Intuition I.",
  "q22122 Gradient Descent.",
  "q22123 Gradient Descent Intuition.",
  "q22124 Gradient Descent For Linear Regression.",
  "q22136 Matrices and Vectors.",
  "q22137 Addition and Scalar Multiplication.",
  "q22138 Matrix Vector Multiplication.",
  "q22139 Matrix Matrix Multiplication.",
  "q22140 Matrix Multiplication Properties.",
  "q22141 Inverse and Transpose.",
  "q22201 Multiple Features.",
  "q22202 Gradient Descent for Multiple Variables.",
  "q22203 Gradient Descent in Practice I - Feature Scaling.",
  "q22204 Gradient Descent in Practice II - Learning Rate.",
  "q22205 Features and Polynomial Regression.",
  "q22206 Normal Equation.",
  "q22207 Normal Equation Noninvertibility.",
  "q22208 Working on and Submitting Programming Assignments.",
  "q22228 Basic Operations.",
  "q22229 Moving Data Around.",
  "q22230 Computing on Data.",
  "q22231 Plotting Data.",
  "q22232 Control Statements: for, while, if statement.",
  "q22233 Vectorization.",
  "q22301 Classification.",
  "q22302 Hypothesis Representation.",
  "q22303 Decision Boundary.",
  "q22304 Cost Function.",
  "q22305 Simplified Cost Function and Gradient Descent.",
  "q22306 Advanced Optimization.",
  "q22307 Multiclass Classification: One-vs-all.",
  "q22319 The Problem of Overfitting.",
  "q22320 Cost Function.",
  "q22321 Regularized Linear Regression.",
  "q22322 Regularized Logistic Regression.",
  "q22401 Non-linear Hypotheses.",
  "q22402 Neurons and the Brain.",
  "q22403 Model Representation I.",
  "q22404 Model Representation II.",
  "q22405 Examples and Intuitions I.",
  "q22406 Examples and Intuitions II.",
  "q22407 Multiclass Classification.",
  "q22501 Cost Function.",
  "q22502 Backpropagation Algorithm.",
  "q22503 Backpropagation Intuition.",
  "q22504 Implementation Note: Unrolling Parameters.",
  "q22505 Gradient Checking.",
  "q22506 Random Initialization.",
  "q22507 Putting It Together.",
  "q22508 Autonomous Driving.",
  "q22601 Deciding What to Try Next.",
  "q22602 Evaluating a Hypothesis.",
  "q22603 Model Selection and Train/Validation/Test Sets.",
  "q22604 Diagnosing Bias vs. Variance.",
  "q22605 Regularization and Bias/Variance.",
  "q22606 Learning Curves.",
  "q22607 Deciding What to Do Next Revisited.",
  "q22618 Prioritizing What to Work On.",
  "q22619 Error Analysis.",
  "q22620 Error Metrics for Skewed Classes.",
  "q22621 Trading Off Precision and Recall.",
  "q22622 Data For Machine Learning.",
  "q22701 Optimization Objective.",
  "q22702 Large Margin Intuition.",
  "q22703 Mathematics Behind Large Margin Classification.",
  "q22704 Kernels I.",
  "q22705 Kernels II.",
  "q22706 Using An SVM.",
  "q22801 Unsupervised Learning: Introduction.",
  "q22802 K-Means Algorithm.",
  "q22803 Optimization Objective.",
  "q22804 Random Initialization.",
  "q22805 Choosing the Number of Clusters.",
  "q22901 Problem Motivation.",
  "q22902 Gaussian Distribution.",
  "q22903 Algorithm.",
  "q22904 Developing and Evaluating an Anomaly Detection System.",
  "q22905 Anomaly Detection vs. Supervised Learning.",
  "q22906 Choosing What Features to Use.",
  "q22907 Multivariate Gaussian Distribution.",
  "q22908 Anomaly Detection using the Multivariate Gaussian Distribution.",
  "q22810 Motivation I: Data Compression.",
  "q22811 Motivation II: Visualization.",
  "q22812 Principal Component Analysis Problem Formulation.",
  "q22813 Principal Component Analysis Algorithm.",
  "q22814 Reconstruction from Compressed Representation.",
  "q22815 Choosing the Number of Principal Components.",
  "q22816 Advice for Applying PCA.",
  "q22901 Problem Motivation.",
  "q22902 Gaussian Distribution.",
  "q22903 Algorithm.",
  "q22904 Developing and Evaluating an Anomaly Detection System.",
  "q22905 Anomaly Detection vs. Supervised Learning.",
  "q22906 Choosing What Features to Use.",
  "q22907 Multivariate Gaussian Distribution.",
  "q22908 Anomaly Detection using the Multivariate Gaussian Distribution.",
  "q22914 Problem Formulation.",
  "q22915 Content Based Recommendations.",
  "q22916 Collaborative Filtering.",
  "q22917 Collaborative Filtering Algorithm.",
  "q22918 Vectorization: Low Rank Matrix Factorization.",
  "q22919 Implementational Detail: Mean Normalization.",
  "q22941 Learning With Large Datasets.",
  "q22942 Stochastic Gradient Descent.",
  "q22943 Mini-Batch Gradient Descent.",
  "q22944 Stochastic Gradient Descent Convergence.",
  "q22945 Online Learning.",
  "q22946 Map Reduce and Data Parallelism.",
  "q22947 Lecture Slides.",
  "q22948 Large Scale Machine Learning.",
  "q22961 Problem Description and Pipeline.",
  "q22962 Sliding Windows.",
  "q22963 Getting Lots of Data and Artificial Data.",
  "q22964 Ceiling Analysis: What Part of the Pipeline to Work on Next.",
  "q22965 Summary and Thank You.",
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



if __name__ == "__main__":

    # files_from_list(l)

    # make_lists(l)
    # del_quotes(l)
    # make_js()

    # make_script1()


    print(len(l))

