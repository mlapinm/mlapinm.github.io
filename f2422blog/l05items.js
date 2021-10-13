let objs = [
  {
    "time": [
      21.254581,
      25.270748
    ],
    "en": [
      "Hi and welcome back to the JavaScript games course."
    ],
    "ru": [
      "Привет и добро пожаловать обратно на курс игр на JavaScript."
    ]
  },
  {
    "time": [
      25.270748,
      33.30354
    ],
    "en": [
      "In this tutorial,",
      "we're going to be coding Connect Four As well as focusing on onClick events for this game,"
    ],
    "ru": [
      "В этом руководстве",
      "мы собираемся кодировать Connect Four. Кроме того, мы сосредоточимся на событиях onClick для этой игры,"
    ]
  },
  {
    "time": [
      25.270748,
      33.30354
    ],
    "en": [
      "In this tutorial,",
      "we're going to be coding Connect Four As well as focusing on onClick events for this game,"
    ],
    "ru": [
      "В этом руководстве",
      "мы собираемся кодировать Connect Four. Кроме того, мы сосредоточимся на событиях onClick для этой игры,"
    ]
  },
  {
    "time": [
      25.270748,
      33.30354
    ],
    "en": [
      "In this tutorial,",
      "we're going to be coding Connect Four As well as focusing on onClick events for this game,"
    ],
    "ru": [
      "В этом руководстве",
      "мы собираемся кодировать Connect Four. Кроме того, мы сосредоточимся на событиях onClick для этой игры,"
    ]
  },
  {
    "time": [
      33.30354,
      37.780102
    ],
    "en": [
      "if you haven't watched the two previous tutorials before this,"
    ],
    "ru": [
      "если вы не смотрели два предыдущих урока до этого,"
    ]
  },
  {
    "time": [
      37.780102,
      39.302602
    ],
    "en": [
      "I strongly recommend you do,"
    ],
    "ru": [
      "Я настоятельно рекомендую вам это сделать,"
    ]
  },
  {
    "time": [
      39.302602,
      45.309998
    ],
    "en": [
      "we're going to be using things like query selectors and event listeners that we did cover in the previous ones."
    ],
    "ru": [
      "мы собираемся использовать такие вещи, как селекторы запросов и прослушиватели событий, которые мы рассмотрели в предыдущих."
    ]
  },
  {
    "time": [
      45.309998,
      49.814581
    ],
    "en": [
      "So if you're not comfortable with them,",
      "please watch those videos before attempting this one."
    ],
    "ru": [
      "Так что, если вам с ними некомфортно,",
      "пожалуйста, посмотрите эти видео, прежде чем пытаться это сделать."
    ]
  },
  {
    "time": [
      45.309998,
      49.814581
    ],
    "en": [
      "So if you're not comfortable with them,",
      "please watch those videos before attempting this one."
    ],
    "ru": [
      "Так что, если вам с ними некомфортно,",
      "пожалуйста, посмотрите эти видео, прежде чем пытаться это сделать."
    ]
  },
  {
    "time": [
      45.309998,
      49.814581
    ],
    "en": [
      "So if you're not comfortable with them,",
      "please watch those videos before attempting this one."
    ],
    "ru": [
      "Так что, если вам с ними некомфортно,",
      "пожалуйста, посмотрите эти видео, прежде чем пытаться это сделать."
    ]
  },
  {
    "time": [
      49.814581,
      51.882183
    ],
    "en": [
      "As always, we're gonna do simple styling."
    ],
    "ru": [
      "Как всегда, мы сделаем простой стиль."
    ]
  },
  {
    "time": [
      51.882183,
      55.840433
    ],
    "en": [
      "This is so that you can get the project make your own."
    ],
    "ru": [
      "Это сделано для того, чтобы вы могли создать свой собственный проект."
    ]
  },
  {
    "time": [
      55.840433,
      59.93887
    ],
    "en": [
      "So I'm literally gonna be focusing maybe like max five minutes on the stylesheet."
    ],
    "ru": [
      "Так что я буквально собираюсь сосредоточиться максимум пять минут на таблице стилей."
    ]
  },
  {
    "time": [
      59.93887,
      70.395016
    ],
    "en": [
      "Connect for is a simple grid based game in which you as the user have to drop a chip down into one of the columns to take your place."
    ],
    "ru": [
      "Connect for - это простая игра на основе сетки, в которой вы, как пользователь, должны бросить фишку в один из столбцов, чтобы занять свое место."
    ]
  },
  {
    "time": [
      70.395016,
      72.216828
    ],
    "en": [
      "After you take in your place,"
    ],
    "ru": [
      "После того, как ты займешь свое место,"
    ]
  },
  {
    "time": [
      72.216828,
      74.746183
    ],
    "en": [
      "the second player will take their turn,"
    ],
    "ru": [
      "второй игрок сделает свою очередь,"
    ]
  },
  {
    "time": [
      74.746183,
      76.566391
    ],
    "en": [
      "please bear in mind for this game,"
    ],
    "ru": [
      "пожалуйста, имейте в виду для этой игры,"
    ]
  },
  {
    "time": [
      76.566391,
      79.010766
    ],
    "en": [
      "obviously, we can't really have gravity."
    ],
    "ru": [
      "очевидно, что у нас действительно не может быть гравитации."
    ]
  },
  {
    "time": [
      79.010766,
      83.009683
    ],
    "en": [
      "So we're just going to use the bottom grid as the you know,",
      "bottom grid."
    ],
    "ru": [
      "Итак, мы просто будем использовать нижнюю сетку, как вы знаете,",
      "нижняя сетка."
    ]
  },
  {
    "time": [
      79.010766,
      83.009683
    ],
    "en": [
      "So we're just going to use the bottom grid as the you know,",
      "bottom grid."
    ],
    "ru": [
      "Итак, мы просто будем использовать нижнюю сетку, как вы знаете,",
      "нижняя сетка."
    ]
  },
  {
    "time": [
      79.010766,
      83.009683
    ],
    "en": [
      "So we're just going to use the bottom grid as the you know,",
      "bottom grid."
    ],
    "ru": [
      "Итак, мы просто будем использовать нижнюю сетку, как вы знаете,",
      "нижняя сетка."
    ]
  },
  {
    "time": [
      83.009683,
      88.389973
    ],
    "en": [
      "Meaning that if you want to put a chip in a chip in a space that doesn't have a chip below it,"
    ],
    "ru": [
      "Это означает, что если вы хотите поместить фишку в фишку в пространстве, под которым нет фишки,"
    ]
  },
  {
    "time": [
      88.389973,
      94.979703
    ],
    "en": [
      "you're not going to be able to write so the point of the game is to get four in a row."
    ],
    "ru": [
      "вы не сможете писать, поэтому цель игры - получить четыре подряд."
    ]
  },
  {
    "time": [
      94.979703,
      98.484244
    ],
    "en": [
      "This is either in a column or row but also diagonally."
    ],
    "ru": [
      "Это либо в столбце, либо в строке, но также по диагонали."
    ]
  },
  {
    "time": [
      98.484244,
      99.961453
    ],
    "en": [
      "The first place to do this wins."
    ],
    "ru": [
      "Выигрывает тот, кто сделает это первым."
    ]
  },
  {
    "time": [
      99.961453,
      102.488828
    ],
    "en": [
      "Okay, so let's get going."
    ],
    "ru": [
      "Ладно, поехали."
    ]
  },
  {
    "time": [
      102.488828,
      112.583057
    ],
    "en": [
      "Okay, so first,",
      "let's set up our project with the correct files in our folder."
    ],
    "ru": [
      "Хорошо, сначала",
      "давайте настроим наш проект с правильными файлами в нашей папке."
    ]
  },
  {
    "time": [
      102.488828,
      112.583057
    ],
    "en": [
      "Okay, so first,",
      "let's set up our project with the correct files in our folder."
    ],
    "ru": [
      "Хорошо, сначала",
      "давайте настроим наш проект с правильными файлами в нашей папке."
    ]
  },
  {
    "time": [
      102.488828,
      112.583057
    ],
    "en": [
      "Okay, so first,",
      "let's set up our project with the correct files in our folder."
    ],
    "ru": [
      "Хорошо, сначала",
      "давайте настроим наш проект с правильными файлами в нашей папке."
    ]
  },
  {
    "time": [
      112.583057,
      120.492348
    ],
    "en": [
      "We will have the app j s for our JavaScript index HTML for our HTML code,"
    ],
    "ru": [
      "У нас будет приложение j s для нашего индекса JavaScript HTML для нашего HTML-кода,"
    ]
  },
  {
    "time": [
      120.492348,
      123.107432
    ],
    "en": [
      "and style CSS for our CSS styling."
    ],
    "ru": [
      "и стиль CSS для нашего стиля CSS."
    ]
  },
  {
    "time": [
      123.107432,
      126.381578
    ],
    "en": [
      "In your HTML file,"
    ],
    "ru": [
      "В вашем HTML-файле"
    ]
  },
  {
    "time": [
      126.381578,
      132.035911
    ],
    "en": [
      "add a div with a class name of grid with enough divs inside to make a seven by six grid."
    ],
    "ru": [
      "добавьте div с именем класса grid с достаточным количеством div внутри, чтобы создать сетку размером семь на шесть."
    ]
  },
  {
    "time": [
      132.035911,
      134.269473
    ],
    "en": [
      "So 42 divs."
    ],
    "ru": [
      "Итак, 42 див."
    ]
  },
  {
    "time": [
      134.269473,
      139.274828
    ],
    "en": [
      "We also need to add seven more depth to the bottom with the class name token."
    ],
    "ru": [
      "Нам также нужно добавить еще семь глубин снизу с помощью токена имени класса."
    ]
  },
  {
    "time": [
      139.274828,
      142.755203
    ],
    "en": [
      "This will be the bottom of our grid."
    ],
    "ru": [
      "Это будет нижняя часть нашей сетки."
    ]
  },
  {
    "time": [
      142.755203,
      154.26389
    ],
    "en": [
      "Add a span with the ID current players so we can display the current player to the user like this."
    ],
    "ru": [
      "Добавьте диапазон с идентификатором текущих игроков, чтобы мы могли отображать текущего игрока для пользователя следующим образом."
    ]
  },
  {
    "time": [
      154.26389,
      162.079993
    ],
    "en": [
      "And also one final result so we can see who wins in the event of a win."
    ],
    "ru": [
      "А также один окончательный результат, чтобы мы могли видеть, кто победит в случае победы."
    ]
  },
  {
    "time": [
      162.079993,
      172.084889
    ],
    "en": [
      "Always make sure to link your cell sheet and JavaScript file in the HTML file."
    ],
    "ru": [
      "Всегда обязательно связывайте свой лист ячеек и файл JavaScript в файле HTML."
    ]
  },
  {
    "time": [
      172.084889,
      185.090243
    ],
    "en": [
      "Okay, now flip over to your CSS file and add the following styling to make our list of divs and the div with a class name grid lockback and actual grid,"
    ],
    "ru": [
      "Хорошо, теперь перейдите к вашему файлу CSS и добавьте следующий стиль, чтобы сделать наш список div и div с блокировкой сетки имени класса и фактической сеткой,"
    ]
  },
  {
    "time": [
      185.090243,
      189.597431
    ],
    "en": [
      "we use Flexbox to wrap the divs into a grid square."
    ],
    "ru": [
      "мы используем Flexbox, чтобы обернуть блоки в квадрат сетки."
    ]
  },
  {
    "time": [
      189.597431,
      198.598785
    ],
    "en": [
      "We will also be parsing our player one and player two colors here like this."
    ],
    "ru": [
      "Мы также будем разбирать цвета для первого и второго игроков, вот так."
    ]
  },
  {
    "time": [
      198.598785,
      207.336743
    ],
    "en": [
      "Okay, now flip over to your JavaScript file and add a DOM event listener like this."
    ],
    "ru": [
      "Хорошо, теперь перейдите к своему файлу JavaScript и добавьте прослушиватель событий DOM, подобный этому."
    ]
  },
  {
    "time": [
      207.336743,
      211.337077
    ],
    "en": [
      "All your JavaScript code will be done in the event listener from now on."
    ],
    "ru": [
      "С этого момента весь ваш код JavaScript будет выполняться в прослушивателе событий."
    ]
  },
  {
    "time": [
      211.337077,
      232.808055
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      232.808055,
      240.523117
    ],
    "en": [
      "Okay, so the first thing we are going to do is write a function that will listen out for every time we click a square and our grid."
    ],
    "ru": [
      "Мы начнем с написания цикла по каждому квадрату,"
    ]
  },
  {
    "time": [
      240.523117,
      244.533346
    ],
    "en": [
      "We will start off by writing a loop to loop over each square,"
    ],
    "ru": [
      "затем функция для добавления к нему onClick."
    ]
  },
  {
    "time": [
      244.533346,
      247.503929
    ],
    "en": [
      "then a function to add an onClick to it."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      247.503929,
      256.751074
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      256.751074,
      258.318574
    ],
    "en": [
      "Now let's write some if statements."
    ],
    "ru": [
      "Итак, мы пишем, что если вы нажмете на div и div под ним или на семь квадратов вниз,"
    ]
  },
  {
    "time": [
      258.318574,
      266.32747
    ],
    "en": [
      "So what we are writing here is that if you click on a div and the div below it or seven squares down,"
    ],
    "ru": [
      "имеет название класса «взято», вам разрешено щелкнуть по этому материалу и потребовать его, когда вы возьмете и уйдете."
    ]
  },
  {
    "time": [
      266.32747,
      272.868554
    ],
    "en": [
      "has a class name of taken you are allowed to click on this stuff and claim it as you will take and go."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      272.868554,
      281.80847
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      272.868554,
      281.80847
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      281.80847,
      291.687657
    ],
    "en": [
      "Right so if you can go and if you are playing one at a class name have taken to that square."
    ],
    "ru": [
      "Также добавьте имя класса первого игрока в этот квадрат,"
    ]
  },
  {
    "time": [
      291.687657,
      294.708177
    ],
    "en": [
      "Also add a class name of player one to that square,"
    ],
    "ru": [
      "так что мы можем визуально увидеть, где вы решили разместить свой переход в браузере."
    ]
  },
  {
    "time": [
      294.708177,
      299.707427
    ],
    "en": [
      "so we can visually see where you have chosen to place your go in the browser."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      299.707427,
      310.384844
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      310.384844,
      313.895719
    ],
    "en": [
      "I'll do the same for player two."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      313.895719,
      324.353531
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      324.353531,
      333.69878
    ],
    "en": [
      "If you aren't in a square that is one out from one with the class.",
      "taken an alert saying you can't go here will pop up."
    ],
    "ru": [
      "появилось предупреждение о том, что вы не можете сюда идти.",
      "Если вы не в квадрате, то это один не один в один с классом."
    ]
  },
  {
    "time": [
      324.353531,
      333.69878
    ],
    "en": [
      "If you aren't in a square that is one out from one with the class.",
      "taken an alert saying you can't go here will pop up."
    ],
    "ru": [
      "появилось предупреждение о том, что вы не можете сюда идти.",
      "Если вы не в квадрате, то это один не один в один с классом."
    ]
  },
  {
    "time": [
      324.353531,
      333.69878
    ],
    "en": [
      "If you aren't in a square that is one out from one with the class.",
      "taken an alert saying you can't go here will pop up."
    ],
    "ru": [
      "появилось предупреждение о том, что вы не можете сюда идти.",
      "Если вы не в квадрате, то это один не один в один с классом."
    ]
  },
  {
    "time": [
      333.69878,
      339.021405
    ],
    "en": [
      "Now let's open our browser to see if this works."
    ],
    "ru": [
      "Хорошо, отлично."
    ]
  },
  {
    "time": [
      339.021405,
      343.029551
    ],
    "en": [
      "Okay, great."
    ],
    "ru": [
      "Теперь давайте проверим доску на выигрыш или проигрыш с помощью функции классной доски."
    ]
  },
  {
    "time": [
      343.029551,
      348.027405
    ],
    "en": [
      "Now let's check the board for win or lose with a chalkboard function."
    ],
    "ru": [
      "Во-первых, нам нужно объявить, какая на самом деле выигрышная комбинация находится на нашей доске."
    ]
  },
  {
    "time": [
      348.027405,
      353.038634
    ],
    "en": [
      "First, we need to declare what a winning combination actually is on our board."
    ],
    "ru": [
      "Я действительно нашел их где-то в Интернете."
    ]
  },
  {
    "time": [
      353.038634,
      356.519593
    ],
    "en": [
      "I actually found these somewhere online."
    ],
    "ru": [
      "Итак, я обманул,"
    ]
  },
  {
    "time": [
      356.519593,
      359.47753
    ],
    "en": [
      "So I have cheated,",
      "and I'm passing this on to you."
    ],
    "ru": [
      "и я передаю это вам.",
      "Итак, я обманул,"
    ]
  },
  {
    "time": [
      356.519593,
      359.47753
    ],
    "en": [
      "So I have cheated,",
      "and I'm passing this on to you."
    ],
    "ru": [
      "и я передаю это вам.",
      "Итак, я обманул,"
    ]
  },
  {
    "time": [
      356.519593,
      359.47753
    ],
    "en": [
      "So I have cheated,",
      "and I'm passing this on to you."
    ],
    "ru": [
      "и я передаю это вам.",
      "Итак, я обманул,"
    ]
  },
  {
    "time": [
      359.47753,
      363.12053
    ],
    "en": [
      "So you don't have to figure this out ourselves.",
      "Otherwise, we'll be here all day."
    ],
    "ru": [
      "В противном случае мы будем здесь весь день.",
      "Так что вам не нужно разбираться в этом самим."
    ]
  },
  {
    "time": [
      359.47753,
      363.12053
    ],
    "en": [
      "So you don't have to figure this out ourselves.",
      "Otherwise, we'll be here all day."
    ],
    "ru": [
      "В противном случае мы будем здесь весь день.",
      "Так что вам не нужно разбираться в этом самим."
    ]
  },
  {
    "time": [
      359.47753,
      363.12053
    ],
    "en": [
      "So you don't have to figure this out ourselves.",
      "Otherwise, we'll be here all day."
    ],
    "ru": [
      "В противном случае мы будем здесь весь день.",
      "Так что вам не нужно разбираться в этом самим."
    ]
  },
  {
    "time": [
      363.12053,
      369.125738
    ],
    "en": [
      "Okay, now again,",
      "using a loop, we are essentially plugging in values to the squares on our grid."
    ],
    "ru": [
      "используя цикл, мы, по сути, вставляем значения в квадраты нашей сетки.",
      "Хорошо, теперь снова,"
    ]
  },
  {
    "time": [
      363.12053,
      369.125738
    ],
    "en": [
      "Okay, now again,",
      "using a loop, we are essentially plugging in values to the squares on our grid."
    ],
    "ru": [
      "используя цикл, мы, по сути, вставляем значения в квадраты нашей сетки.",
      "Хорошо, теперь снова,"
    ]
  },
  {
    "time": [
      363.12053,
      369.125738
    ],
    "en": [
      "Okay, now again,",
      "using a loop, we are essentially plugging in values to the squares on our grid."
    ],
    "ru": [
      "используя цикл, мы, по сути, вставляем значения в квадраты нашей сетки.",
      "Хорошо, теперь снова,"
    ]
  },
  {
    "time": [
      369.125738,
      379.784342
    ],
    "en": [
      "This is so we can check if these squares are in a winning array and also contain the class name at playout.",
      "One."
    ],
    "ru": [
      "Один.",
      "Это сделано для того, чтобы мы могли проверить, входят ли эти квадраты в выигрышный массив, а также содержат ли они имя класса при воспроизведении."
    ]
  },
  {
    "time": [
      369.125738,
      379.784342
    ],
    "en": [
      "This is so we can check if these squares are in a winning array and also contain the class name at playout.",
      "One."
    ],
    "ru": [
      "Один.",
      "Это сделано для того, чтобы мы могли проверить, входят ли эти квадраты в выигрышный массив, а также содержат ли они имя класса при воспроизведении."
    ]
  },
  {
    "time": [
      369.125738,
      379.784342
    ],
    "en": [
      "This is so we can check if these squares are in a winning array and also contain the class name at playout.",
      "One."
    ],
    "ru": [
      "Один.",
      "Это сделано для того, чтобы мы могли проверить, входят ли эти квадраты в выигрышный массив, а также содержат ли они имя класса при воспроизведении."
    ]
  },
  {
    "time": [
      379.784342,
      422.769258
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      422.769258,
      424.055591
    ],
    "en": [
      "If the answer is true,"
    ],
    "ru": [
      "Если ответ верный,"
    ]
  },
  {
    "time": [
      422.769258,
      424.055591
    ],
    "en": [
      "If the answer is true,"
    ],
    "ru": [
      "Если ответ верный,"
    ]
  },
  {
    "time": [
      422.769258,
      424.055591
    ],
    "en": [
      "If the answer is true,"
    ],
    "ru": [
      "Если ответ верный,"
    ]
  },
  {
    "time": [
      424.055591,
      430.92557
    ],
    "en": [
      "we want to display player one wins in the inner HTML the span with ID result on our HTML page."
    ],
    "ru": [
      "Хорошо, сделайте то же самое для второго игрока вот так."
    ]
  },
  {
    "time": [
      430.92557,
      436.425924
    ],
    "en": [
      "Okay, do the same for player two like this."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      436.425924,
      458.143589
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      458.143589,
      462.15186
    ],
    "en": [
      "Finally, on each click of the squares in our grid,"
    ],
    "ru": [
      "мы хотим добавить прослушиватель событий и передать функцию контрольной доски."
    ]
  },
  {
    "time": [
      462.15186,
      466.121797
    ],
    "en": [
      "we want to add an event listener and pass through the check board function."
    ],
    "ru": [
      "Это означает, что функция будет запускаться каждый раз, когда вы нажимаете квадрат в сетке."
    ]
  },
  {
    "time": [
      466.121797,
      473.166714
    ],
    "en": [
      "This means the function will run every time you press on a square in the grid."
    ],
    "ru": [
      "Хорошо, вот оно."
    ]
  },
  {
    "time": [
      473.166714,
      478.129693
    ],
    "en": [
      "Okay, there you have it."
    ],
    "ru": [
      "Спасибо за внимание."
    ]
  },
  {
    "time": [
      478.129693,
      479.660839
    ],
    "en": [
      "Thanks for listening."
    ],
    "ru": [
      "Если у вас есть какие-нибудь вопросы,"
    ]
  },
  {
    "time": [
      479.660839,
      481.642922
    ],
    "en": [
      "If you have any questions,"
    ],
    "ru": [
      "пожалуйста, дайте мне знать."
    ]
  },
  {
    "time": [
      481.642922,
      484.664151
    ],
    "en": [
      "please do let me know."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      484.664151,
      484.664151
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]