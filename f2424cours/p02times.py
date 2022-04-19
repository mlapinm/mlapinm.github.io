# p02times.py
import re

def clear_text(text):
    '''
    remove string with: Play video
    '''
    clears = [
        'Play video starting',
        ': добавлено в выделение'
    ]
    text2 = text
    for e in clears:
        text2 = re.sub(r'\r?\n{}.+\r?\n?'.format(e), ' ', text2)

    # print(text)
    # print(text2)
    return(text2)



text = '''
centroid, just take one quarter of that. And now Mu2 is going to be an n-dimensional vector. Because each of these example x1, x5, x6, x10
Play video starting at :8:52 and follow transcript8:52
each of them were an n-dimensional vector, and I'm going to add up these things and, you know, divide by four because I have four points assigned to this cluster centroid, I end up with my move centroid step,
Play video starting at :9:3 and follow transcript9:03
for my cluster centroid mu-2. This has the effect of moving mu-2 to the average of the four points listed here.
'''

text33 = '''
человеческого мозга, иЯ научу тебя и этому.На этом курсе вы узнаете о машинном обучении иполучить реализовать их самостоятельно.Надеюсь, вы зарегистрируетесь на нашем сайте и присоединитесь к нам.
: добавлено в выделение. Нажмите [CTRL + S], чтобы сохранить как заметку
'''

if __name__ == "__main__":

    clear_text(text)
    print(123)
