# p02times.py
import re

def clear_text(text):
    '''
    remove string with: Play video
    '''
    clears = [
        #Play video starting
        'Play video starting',
        ': добавлено в выделение',
        'Воспроизведите видео, начиная с'
    ]
    text2 = text
    for e in clears:
        text2 = re.sub(r'\r?\n{}.+\r?\n?'.format(e), ' ', text2)

    # print(text)
    # print(text2)
    return(text2)



text = '''
zero and theta one, and with different choices of the parameters we end up with different straight line
Play video starting at ::31 and follow transcript0:31
fits. So the data which are fit like so, and there's a cost 
'''

text33 = '''
человеческого мозга, иЯ научу тебя и этому.На этом курсе вы узнаете о машинном обучении иполучить реализовать их самостоятельно.Надеюсь, вы зарегистрируетесь на нашем сайте и присоединитесь к нам.
: добавлено в выделение. Нажмите [CTRL + S], чтобы сохранить как заметку
'''

if __name__ == "__main__":

    text = ''
    with open('q22120e.txt', 'r', encoding='utf-8') as f:
        text = f.read()

    text2 = clear_text(text)
    with open('p04.txt', 'w', encoding='utf-8') as f:
        f.write(text2)
    print(123)
