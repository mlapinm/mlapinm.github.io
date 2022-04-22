# p02times.py
import re
import codecs
import os

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


def clear_text(text):
    '''
    remove string with: Play video
    '''
    clears = [
        'Play video starting',
        ': добавлено в выделение',
        'Воспроизведите видео, начиная с',
        'Воспроизвести видео, начинающееся'
    ]
    text2 = text
    for e in clears:
        text2 = re.sub(r'\r?\n{}.+\r?\n?'.format(e), ' ', text2)

    # print(text)
    # print(text2)
    return(text2)

def clear_file(name):
    text = ''
    with open(name, 'r') as f:
        text = f.read()
    text2 = clear_text(text)
    with open(name, 'w') as f:
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
    l = [e for e in l0 if e[:3] == 'q22' and get_num(e) < 22200]


    make_files(l)
    print(len(l))

