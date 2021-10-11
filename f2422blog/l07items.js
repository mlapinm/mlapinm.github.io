let objs = [
  {
    "time": [
      42.625707,
      46.603478
    ],
    "en": [
      "Welcome back to the JavaScript games course."
    ],
    "ru": [
      "Добро пожаловать на курс игр на JavaScript."
    ]
  },
  {
    "time": [
      46.603478,
      52.607665
    ],
    "en": [
      "Today we're going to be teaching you how to make your own Nakia 3310 snake,"
    ],
    "ru": [
      "Сегодня мы собираемся научить вас сделать свою собственную змею Nakia 3310,"
    ]
  },
  {
    "time": [
      52.607665,
      65.649457
    ],
    "en": [
      "for those of you have never owned a Nokia 3310 snake is a simple grid base game in which the snake or array is going to be tasting a little apple on the screen."
    ],
    "ru": [
      "для тех из вас, у кого никогда не было Nokia 3310 snake, это простая базовая игра с сеткой, в которой змейка или массив будет пробовать маленькое яблоко на экране."
    ]
  },
  {
    "time": [
      65.649457,
      67.779913
    ],
    "en": [
      "So you're going to be controlling the snake it's been going like this,"
    ],
    "ru": [
      "Итак, вы собираетесь контролировать змею, это происходит вот так,"
    ]
  },
  {
    "time": [
      67.779913,
      71.49835
    ],
    "en": [
      "it's going to be on a timer,",
      "obviously, it's going to keep going."
    ],
    "ru": [
      "это будет по таймеру,",
      "очевидно, это будет продолжаться."
    ]
  },
  {
    "time": [
      67.779913,
      71.49835
    ],
    "en": [
      "it's going to be on a timer,",
      "obviously, it's going to keep going."
    ],
    "ru": [
      "это будет по таймеру,",
      "очевидно, это будет продолжаться."
    ]
  },
  {
    "time": [
      67.779913,
      71.49835
    ],
    "en": [
      "it's going to be on a timer,",
      "obviously, it's going to keep going."
    ],
    "ru": [
      "это будет по таймеру,",
      "очевидно, это будет продолжаться."
    ]
  },
  {
    "time": [
      71.49835,
      72.926558
    ],
    "en": [
      "So we were just going to control it."
    ],
    "ru": [
      "Так что мы просто собирались контролировать это."
    ]
  },
  {
    "time": [
      72.926558,
      75.428058
    ],
    "en": [
      "And once it gets the apple,"
    ],
    "ru": [
      "И как только он получит яблоко,"
    ]
  },
  {
    "time": [
      75.428058,
      78.637641
    ],
    "en": [
      "it's going to give you points but it's also going to speed up in time."
    ],
    "ru": [
      "это принесет вам очки, но со временем ускорится."
    ]
  },
  {
    "time": [
      78.637641,
      80.731974
    ],
    "en": [
      "So that's going to be quite cool to build,"
    ],
    "ru": [
      "Так что будет неплохо построить,"
    ]
  },
  {
    "time": [
      80.731974,
      85.508744
    ],
    "en": [
      "we're going to be using a lot of set intervals and clear intervals as well for this game."
    ],
    "ru": [
      "мы собираемся использовать много установленных интервалов и чистых интервалов в этой игре."
    ]
  },
  {
    "time": [
      85.508744,
      89.381035
    ],
    "en": [
      "We   are now on game four out of seven of this course."
    ],
    "ru": [
      "Сейчас мы находимся на четвертой игре из семи на этом курсе."
    ]
  },
  {
    "time": [
      89.381035,
      94.416306
    ],
    "en": [
      "In this game, you're going to be learning how to use key codes,"
    ],
    "ru": [
      "В этой игре вы научитесь использовать коды клавиш,"
    ]
  },
  {
    "time": [
      94.416306,
      97.416763
    ],
    "en": [
      "which are really cool.",
      "I'll talk about them later,"
    ],
    "ru": [
      "которые действительно крутые.",
      "Я расскажу о них позже,"
    ]
  },
  {
    "time": [
      94.416306,
      97.416763
    ],
    "en": [
      "which are really cool.",
      "I'll talk about them later,"
    ],
    "ru": [
      "которые действительно крутые.",
      "Я расскажу о них позже,"
    ]
  },
  {
    "time": [
      94.416306,
      97.416763
    ],
    "en": [
      "which are really cool.",
      "I'll talk about them later,"
    ],
    "ru": [
      "которые действительно крутые.",
      "Я расскажу о них позже,"
    ]
  },
  {
    "time": [
      97.416763,
      99.336138
    ],
    "en": [
      "as well as pop and shift,"
    ],
    "ru": [
      "а также поп и сдвиг,"
    ]
  },
  {
    "time": [
      99.336138,
      105.547783
    ],
    "en": [
      "push and going over functions that we've previously learned in the four previous games."
    ],
    "ru": [
      "функции push и перехода, которые мы уже изучили в четырех предыдущих играх."
    ]
  },
  {
    "time": [
      105.547783,
      107.295492
    ],
    "en": [
      "So key codes are pretty awesome."
    ],
    "ru": [
      "Так что коды клавиш довольно крутые."
    ]
  },
  {
    "time": [
      107.295492,
      111.799763
    ],
    "en": [
      "A key code is literally the code associated with the ones on your keyboard."
    ],
    "ru": [
      "Код клавиши - это буквально код, связанный с кодами на вашей клавиатуре."
    ]
  },
  {
    "time": [
      111.799763,
      115.674096
    ],
    "en": [
      "So for example, if I want to say start the game by pressing,"
    ],
    "ru": [
      "Так, например, если я хочу сказать, запустите игру, нажав,"
    ]
  },
  {
    "time": [
      115.674096,
      119.182908
    ],
    "en": [
      "I don't know the G on your keyboard,",
      "we can do that."
    ],
    "ru": [
      "Я не знаю буквы G на твоей клавиатуре,",
      "мы можем это сделать."
    ]
  },
  {
    "time": [
      115.674096,
      119.182908
    ],
    "en": [
      "I don't know the G on your keyboard,",
      "we can do that."
    ],
    "ru": [
      "Я не знаю буквы G на твоей клавиатуре,",
      "мы можем это сделать."
    ]
  },
  {
    "time": [
      115.674096,
      119.182908
    ],
    "en": [
      "I don't know the G on your keyboard,",
      "we can do that."
    ],
    "ru": [
      "Я не знаю буквы G на твоей клавиатуре,",
      "мы можем это сделать."
    ]
  },
  {
    "time": [
      119.182908,
      120.149803
    ],
    "en": [
      "That's pretty cool."
    ],
    "ru": [
      "Это круто."
    ]
  },
  {
    "time": [
      120.149803,
      125.646741
    ],
    "en": [
      "I'm going to be going into that and a lot more detail in the game along with switch cases."
    ],
    "ru": [
      "Я собираюсь рассказать об этом и о многом другом в игре, а также о чехлах для переключателей."
    ]
  },
  {
    "time": [
      125.646741,
      127.625324
    ],
    "en": [
      "So if you're interested in that,"
    ],
    "ru": [
      "Итак, если вам это интересно,"
    ]
  },
  {
    "time": [
      127.625324,
      139.495032
    ],
    "en": [
      "please stop my video and let's get going to start a project."
    ],
    "ru": [
      "пожалуйста, остановите мое видео, и давайте приступим к проекту."
    ]
  },
  {
    "time": [
      139.495032,
      142.630782
    ],
    "en": [
      "Let's first make sure we have the right files in our folder."
    ],
    "ru": [
      "Давайте сначала убедимся, что в нашей папке есть нужные файлы."
    ]
  },
  {
    "time": [
      142.630782,
      145.180927
    ],
    "en": [
      "You can see here I've already made an index,"
    ],
    "ru": [
      "Вы можете видеть здесь, что я уже сделал индекс,"
    ]
  },
  {
    "time": [
      145.180927,
      150.25249
    ],
    "en": [
      "HTML file, app js file and style sheet called style CSS."
    ],
    "ru": [
      "HTML-файл, js-файл приложения и таблица стилей, называемая стилем CSS."
    ]
  },
  {
    "time": [
      150.25249,
      160.619136
    ],
    "en": [
      "The first thing we need to do is set our HTML template making sure to add the following script tag to talk to our JavaScript file."
    ],
    "ru": [
      "Первое, что нам нужно сделать, это настроить наш HTML-шаблон, убедившись, что добавлен следующий тег скрипта для взаимодействия с нашим файлом JavaScript."
    ]
  },
  {
    "time": [
      160.619136,
      165.362761
    ],
    "en": [
      "Next, we need to add a link to our CSS file like so."
    ],
    "ru": [
      "Затем нам нужно добавить ссылку на наш файл CSS вот так."
    ]
  },
  {
    "time": [
      165.362761,
      172.751343
    ],
    "en": [
      "I'm going to go ahead and add a button tag with a class name of start to our HTML file."
    ],
    "ru": [
      "Я собираюсь добавить тег кнопки с именем класса start в наш HTML-файл."
    ]
  },
  {
    "time": [
      172.751343,
      179.630384
    ],
    "en": [
      "This class name will allow us to pick out this specific element later in our JavaScript file."
    ],
    "ru": [
      "Это имя класса позволит нам позже выбрать этот конкретный элемент в нашем файле JavaScript."
    ]
  },
  {
    "time": [
      179.630384,
      187.611259
    ],
    "en": [
      "I am now going to add a div with a class name score to it for the same purpose."
    ],
    "ru": [
      "Теперь я собираюсь добавить к нему div с оценкой имени класса для той же цели."
    ]
  },
  {
    "time": [
      187.611259,
      189.635384
    ],
    "en": [
      "Once we have written our JavaScript code,"
    ],
    "ru": [
      "После того, как мы написали наш код JavaScript,"
    ]
  },
  {
    "time": [
      189.635384,
      196.628509
    ],
    "en": [
      "the score of our game will appear between the two span tags here and overwrite the zero I am writing now."
    ],
    "ru": [
      "счет нашей игры появится здесь между двумя тегами span и перезапишет ноль, который я пишу сейчас."
    ]
  },
  {
    "time": [
      196.628509,
      201.084675
    ],
    "en": [
      "Now let's make all good."
    ],
    "ru": [
      "А теперь давайте сделаем все хорошо."
    ]
  },
  {
    "time": [
      201.084675,
      206.588092
    ],
    "en": [
      "Now to make the grid we need to decide how many squares a snake game should have."
    ],
    "ru": [
      "Теперь, чтобы создать сетку, нам нужно решить, сколько квадратов должно быть в игре со змейкой."
    ]
  },
  {
    "time": [
      206.588092,
      208.122175
    ],
    "en": [
      "This is totally up to you,"
    ],
    "ru": [
      "Это полностью зависит от вас,"
    ]
  },
  {
    "time": [
      208.122175,
      211.602259
    ],
    "en": [
      "you can make the game as big small or awkward as you want."
    ],
    "ru": [
      "вы можете сделать игру настолько большой, маленькой или неудобной, насколько захотите."
    ]
  },
  {
    "time": [
      211.602259,
      215.613259
    ],
    "en": [
      "For the sake of ease,",
      "I'm going to make my grid 10 by 10 squares,"
    ],
    "ru": [
      "Для удобства,",
      "Я собираюсь сделать свою сетку 10 на 10 квадратов,"
    ]
  },
  {
    "time": [
      211.602259,
      215.613259
    ],
    "en": [
      "For the sake of ease,",
      "I'm going to make my grid 10 by 10 squares,"
    ],
    "ru": [
      "Для удобства,",
      "Я собираюсь сделать свою сетку 10 на 10 квадратов,"
    ]
  },
  {
    "time": [
      211.602259,
      215.613259
    ],
    "en": [
      "For the sake of ease,",
      "I'm going to make my grid 10 by 10 squares,"
    ],
    "ru": [
      "Для удобства,",
      "Я собираюсь сделать свою сетку 10 на 10 квадратов,"
    ]
  },
  {
    "time": [
      215.613259,
      219.619738
    ],
    "en": [
      "meaning I need a total of 100 squats."
    ],
    "ru": [
      "То есть мне нужно всего 100 приседаний."
    ]
  },
  {
    "time": [
      219.619738,
      227.109634
    ],
    "en": [
      "Now let's make our grid actually look like a grid by flipping over to our stylesheet and adding some stuff."
    ],
    "ru": [
      "Теперь давайте сделаем нашу сетку похожей на сетку, перейдя к нашей таблице стилей и добавив кое-что."
    ]
  },
  {
    "time": [
      227.109634,
      230.491842
    ],
    "en": [
      "Using dot grid, I am looking for a class name called grid."
    ],
    "ru": [
      "Используя точечную сетку, я ищу имя класса, называемое сеткой."
    ]
  },
  {
    "time": [
      230.491842,
      233.501613
    ],
    "en": [
      "This is what the dot essentially means class name,"
    ],
    "ru": [
      "Это то, что точка по сути означает имя класса,"
    ]
  },
  {
    "time": [
      233.501613,
      243.879717
    ],
    "en": [
      "engaging make my grid 200 pixels by 200 pixels and make sure that does fit into this grid by using display flex and flex wrap."
    ],
    "ru": [
      "Сделайте мою сетку 200 пикселей на 200 пикселей и убедитесь, что она вписывается в эту сетку, используя гибкость дисплея и гибкую обертку."
    ]
  },
  {
    "time": [
      243.879717,
      250.116842
    ],
    "en": [
      "Now we're going to give each of the divs and our grid a height and width of 20 pixels."
    ],
    "ru": [
      "Теперь мы собираемся присвоить каждому из div и нашей сетке высоту и ширину 20 пикселей."
    ]
  },
  {
    "time": [
      250.116842,
      254.217842
    ],
    "en": [
      "This is simply so that they fit into our 200 by 200 pixel grid,"
    ],
    "ru": [
      "Это просто так, чтобы они вписывались в нашу сетку 200 на 200 пикселей,"
    ]
  },
  {
    "time": [
      254.217842,
      256.416925
    ],
    "en": [
      "making sure there's only 10 of them each way."
    ],
    "ru": [
      "убедившись, что их всего по 10 штук в каждую сторону."
    ]
  },
  {
    "time": [
      256.416925,
      261.9053
    ],
    "en": [
      "Now let's add a snake class and make it blue."
    ],
    "ru": [
      "Теперь давайте добавим класс змейки и сделаем его синим."
    ]
  },
  {
    "time": [
      261.9053,
      267.939217
    ],
    "en": [
      "flip back to the HTML file and hard coded in here just so we can see how that will look."
    ],
    "ru": [
      "вернуться к HTML-файлу и жестко закодировать здесь, чтобы мы могли увидеть, как это будет выглядеть."
    ]
  },
  {
    "time": [
      267.939217,
      272.809217
    ],
    "en": [
      "And voila, any div with a class there was a snake now we'll be blue."
    ],
    "ru": [
      "И вуаля, в любом div с классом была змея, теперь мы будем синими."
    ]
  },
  {
    "time": [
      272.809217,
      274.794196
    ],
    "en": [
      "Let's do the same for Apple."
    ],
    "ru": [
      "Сделаем то же самое с Apple."
    ]
  },
  {
    "time": [
      274.794196,
      290.44132
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
      290.44132,
      293.773174
    ],
    "en": [
      "Now let's get to writing some JavaScript and making our game work."
    ],
    "ru": [
      "Теперь давайте перейдем к написанию JavaScript и заставим нашу игру работать."
    ]
  },
  {
    "time": [
      293.773174,
      299.810341
    ],
    "en": [
      "Add an event listener like so from now on all our code will be in this event listener."
    ],
    "ru": [
      "Добавьте прослушиватель событий таким образом, теперь весь наш код будет в этом прослушивателе событий."
    ]
  },
  {
    "time": [
      299.810341,
      306.450111
    ],
    "en": [
      "Now we need to pick up the elements from our html5 by class name as I mentioned before,"
    ],
    "ru": [
      "Теперь нам нужно выбрать элементы из нашего html5 по имени класса, как я упоминал ранее,"
    ]
  },
  {
    "time": [
      306.450111,
      309.965611
    ],
    "en": [
      "for this we will use document query selectors."
    ],
    "ru": [
      "для этого мы будем использовать селекторы запросов документов."
    ]
  },
  {
    "time": [
      309.965611,
      318.482466
    ],
    "en": [
      "What we are telling the file to do is select all the devs in a div with class name of grid and call them squares for the file."
    ],
    "ru": [
      "Что мы говорим файлу, так это выбрать всех разработчиков в div с именем класса grid и называть их квадратами для файла."
    ]
  },
  {
    "time": [
      318.482466,
      328.734861
    ],
    "en": [
      "We will also select the span element and call it the score display and select the button with a class name of start."
    ],
    "ru": [
      "Мы также выберем элемент span, назовем его дисплеем партитуры и нажмем кнопку с именем класса start."
    ]
  },
  {
    "time": [
      328.734861,
      332.752799
    ],
    "en": [
      "Note that dot here it's for class name and call it start button."
    ],
    "ru": [
      "Обратите внимание, что точка здесь для имени класса и назовите ее кнопкой запуска."
    ]
  },
  {
    "time": [
      332.752799,
      337.258924
    ],
    "en": [
      "Now we just need to set the width."
    ],
    "ru": [
      "Теперь нам просто нужно установить ширину."
    ]
  },
  {
    "time": [
      337.258924,
      348.369236
    ],
    "en": [
      "So our JavaScript file knows as we have not told it yet our current index so the first div in our grid,"
    ],
    "ru": [
      "Итак, наш файл JavaScript знает, поскольку мы еще не сказали ему наш текущий индекс, поэтому первый div в нашей сетке,"
    ]
  },
  {
    "time": [
      348.369236,
      350.500027
    ],
    "en": [
      "it is important to know that by writing zero,"
    ],
    "ru": [
      "важно знать, что, написав ноль,"
    ]
  },
  {
    "time": [
      350.500027,
      359.771714
    ],
    "en": [
      "I mean it's the first I guess item what element is just that the computer starts counting when there's a race involved."
    ],
    "ru": [
      "Я имею в виду, что это первый элемент, который я предполагаю, какой элемент - это просто то, что компьютер начинает считать, когда идет гонка."
    ]
  },
  {
    "time": [
      359.771714,
      365.301151
    ],
    "en": [
      "So now let's set up our apple index at zero for the time being."
    ],
    "ru": [
      "Итак, давайте пока установим наш индекс яблока на ноль."
    ]
  },
  {
    "time": [
      365.301151,
      373.496484
    ],
    "en": [
      "Now let's draw our snake as you can imagine,"
    ],
    "ru": [
      "Теперь давайте нарисуем нашу змею так, как вы можете себе представить,"
    ]
  },
  {
    "time": [
      373.496484,
      379.00738
    ],
    "en": [
      "we will need to differentiate between what is the head and what is the tail."
    ],
    "ru": [
      "нам нужно будет различать, что такое голова, а что хвост."
    ]
  },
  {
    "time": [
      379.00738,
      389.026547
    ],
    "en": [
      "From now on all devs have a value of two will be the head and all devs with a value of zero will be the tail."
    ],
    "ru": [
      "Отныне все разработчики, имеющие значение два, будут главой, а все разработчики с нулевым значением будут хвостом."
    ]
  },
  {
    "time": [
      389.026547,
      396.980463
    ],
    "en": [
      "For body parts we will use ones on this array will now be our snake"
    ],
    "ru": [
      "Для частей тела, которые мы будем использовать в этом массиве, теперь будет наша змея."
    ]
  },
  {
    "time": [
      396.980463,
      402.725483
    ],
    "en": [
      "direction we're going to stay as one meaning that the snake should always go wander down the array."
    ],
    "ru": [
      "направление, которое мы собираемся оставаться единым, означает, что змея всегда должна блуждать по массиву."
    ]
  },
  {
    "time": [
      402.725483,
      409.007858
    ],
    "en": [
      "And then we used to stick the score speed interval time"
    ],
    "ru": [
      "А потом мы использовали время для интервала скорости счета"
    ]
  },
  {
    "time": [
      409.007858,
      419.088858
    ],
    "en": [
      "and it's okay now let's make a snake move across the board using key codes."
    ],
    "ru": [
      "и все в порядке, теперь давайте заставим змею двигаться по доске, используя коды клавиш."
    ]
  },
  {
    "time": [
      419.088858,
      423.300024
    ],
    "en": [
      "Each key on your keyboard has a key code assigned to it."
    ],
    "ru": [
      "Каждой клавише на клавиатуре назначен код клавиши."
    ]
  },
  {
    "time": [
      423.300024,
      430.954419
    ],
    "en": [
      "We will write a function called control and pass to e4 event in order to make a snake move up and down,",
      "left and right."
    ],
    "ru": [
      "Мы напишем функцию под названием control и перейдем к событию e4, чтобы змея двигалась вверх и вниз,",
      "Лево и право."
    ]
  },
  {
    "time": [
      423.300024,
      430.954419
    ],
    "en": [
      "We will write a function called control and pass to e4 event in order to make a snake move up and down,",
      "left and right."
    ],
    "ru": [
      "Мы напишем функцию под названием control и перейдем к событию e4, чтобы змея двигалась вверх и вниз,",
      "Лево и право."
    ]
  },
  {
    "time": [
      423.300024,
      430.954419
    ],
    "en": [
      "We will write a function called control and pass to e4 event in order to make a snake move up and down,",
      "left and right."
    ],
    "ru": [
      "Мы напишем функцию под названием control и перейдем к событию e4, чтобы змея двигалась вверх и вниз,",
      "Лево и право."
    ]
  },
  {
    "time": [
      430.954419,
      433.92769
    ],
    "en": [
      "Depending on what key you press on your keyboard."
    ],
    "ru": [
      "В зависимости от того, какую клавишу вы нажимаете на клавиатуре."
    ]
  },
  {
    "time": [
      433.92769,
      441.772794
    ],
    "en": [
      "We will first make sure how to remove all class lists of snake between each move."
    ],
    "ru": [
      "Сначала мы убедимся, как удалять все списки классов змейки между каждым ходом."
    ]
  },
  {
    "time": [
      441.772794,
      446.352335
    ],
    "en": [
      "This will take a split second but will prevent our snake from appearing to be left behind."
    ],
    "ru": [
      "Это займет долю секунды, но не позволит нашей змее остаться позади."
    ]
  },
  {
    "time": [
      446.352335,
      453.351106
    ],
    "en": [
      "Now we will write an if statement stating if we press the right arrow button on our keyboard,"
    ],
    "ru": [
      "Теперь мы напишем оператор if, указывающий, если мы нажмем кнопку со стрелкой вправо на клавиатуре,"
    ]
  },
  {
    "time": [
      453.351106,
      459.229063
    ],
    "en": [
      "the snake will go right or in other words downward space in our grid array."
    ],
    "ru": [
      "змея пойдет вправо или, другими словами, вниз в нашем сеточном массиве."
    ]
  },
  {
    "time": [
      459.229063,
      469.755188
    ],
    "en": [
      "Now let's do the same for the up arrow making sure our snake goes into the 10th position back from its current position in the array."
    ],
    "ru": [
      "Теперь давайте сделаем то же самое со стрелкой вверх, убедившись, что наша змейка переместилась на 10-ю позицию назад от ее текущей позиции в массиве."
    ]
  },
  {
    "time": [
      469.755188,
      477.096833
    ],
    "en": [
      "As this is what we set our width to the result of this snake would appear to be up one whole row"
    ],
    "ru": [
      "Поскольку это то, что мы устанавливаем для нашей ширины, результат этой змейки будет отображаться на одну целую строку"
    ]
  },
  {
    "time": [
      477.096833,
      487.357145
    ],
    "en": [
      "Now let's finish off by writing the same for the left arrow button and the down arrow one."
    ],
    "ru": [
      "Теперь давайте закончим, написав то же самое для кнопки со стрелкой влево и кнопки со стрелкой вниз."
    ]
  },
  {
    "time": [
      487.357145,
      520.595707
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
      520.595707,
      527.355561
    ],
    "en": [
      "Finally, let's add an event listener every time a key is pressed to execute the function control"
    ],
    "ru": [
      "Наконец, давайте добавим прослушиватель событий каждый раз, когда нажимается клавиша для выполнения элемента управления функцией."
    ]
  },
  {
    "time": [
      527.355561,
      533.346309
    ],
    "en": [
      "now we have assigned key codes to our snake movements."
    ],
    "ru": [
      "теперь мы присвоили ключевые коды нашим змеиным движениям."
    ]
  },
  {
    "time": [
      533.346309,
      539.305809
    ],
    "en": [
      "Let's write a function to start the game and make our snake move at a certain speed around our grid."
    ],
    "ru": [
      "Давайте напишем функцию, чтобы запустить игру и заставить нашу змейку двигаться с определенной скоростью по нашей сетке."
    ]
  },
  {
    "time": [
      539.305809,
      541.679204
    ],
    "en": [
      "Using an arrow function,"
    ],
    "ru": [
      "Используя стрелочную функцию,"
    ]
  },
  {
    "time": [
      541.679204,
      546.940329
    ],
    "en": [
      "we are going to make sure that each index of the current snake row is taken into consideration."
    ],
    "ru": [
      "мы собираемся убедиться, что учитывается каждый индекс текущей строки змейки."
    ]
  },
  {
    "time": [
      546.940329,
      554.176849
    ],
    "en": [
      "We do this using for each then we remove all class names of snake from the devs."
    ],
    "ru": [
      "Мы делаем это, используя для каждого, затем удаляем все имена классов snake из разработчиков."
    ]
  },
  {
    "time": [
      554.176849,
      558.383224
    ],
    "en": [
      "The current snake array is currently in at the start of this function,"
    ],
    "ru": [
      "Текущий массив змейки в настоящее время находится в начале этой функции,"
    ]
  },
  {
    "time": [
      558.383224,
      562.667037
    ],
    "en": [
      "there is no class name of snake in any other days in our current snake."
    ],
    "ru": [
      "в нашей текущей snake нет имени класса snake ни в какие другие дни."
    ]
  },
  {
    "time": [
      562.667037,
      568.776203
    ],
    "en": [
      "We also have the apple class like sir from the dev that is the apple index."
    ],
    "ru": [
      "У нас также есть класс яблока, например, сэр, из разработчика, который является индексом яблока."
    ]
  },
  {
    "time": [
      568.776203,
      575.228537
    ],
    "en": [
      "What I am doing here is essentially resetting everything the interval the score everything."
    ],
    "ru": [
      "То, что я здесь делаю, по сути сбрасывает все, интервал и счет."
    ]
  },
  {
    "time": [
      575.228537,
      580.251702
    ],
    "en": [
      "Once this reset we are going to randomly generate an apple you will write this function"
    ],
    "ru": [
      "После этого сброса мы собираемся случайным образом сгенерировать яблоко, вы напишите эту функцию"
    ]
  },
  {
    "time": [
      580.251702,
      585.756432
    ],
    "en": [
      "now we write what we want to happen when we start the game."
    ],
    "ru": [
      "теперь мы пишем, что мы хотим, чтобы произошло при запуске игры."
    ]
  },
  {
    "time": [
      585.756432,
      588.741869
    ],
    "en": [
      "So direction is equal one for the snake to go right,"
    ],
    "ru": [
      "Так что направление для змеи равно одному, чтобы идти вправо,"
    ]
  },
  {
    "time": [
      588.741869,
      592.076139
    ],
    "en": [
      "we set an interval the time we define our snake,"
    ],
    "ru": [
      "мы устанавливаем интервал времени, когда определяем нашу змейку,"
    ]
  },
  {
    "time": [
      592.076139,
      597.580931
    ],
    "en": [
      "give it a start position and our class name to the devs the snake correct is currently in."
    ],
    "ru": [
      "дайте ему начальную позицию и имя нашего класса разработчикам, в которых сейчас находится правильная змея."
    ]
  },
  {
    "time": [
      597.580931,
      610.107202
    ],
    "en": [
      "Now we need to pass through the interval of time and a function we will write called move outcomes."
    ],
    "ru": [
      "Теперь нам нужно пройти через интервал времени и функцию, которую мы напишем, под названием результаты хода."
    ]
  },
  {
    "time": [
      610.107202,
      618.619639
    ],
    "en": [
      "This function will deal with any and all outcomes for our decisions to move the snake,"
    ],
    "ru": [
      "Эта функция будет иметь дело с любыми исходами наших решений по перемещению змеи,"
    ]
  },
  {
    "time": [
      618.619639,
      622.078473
    ],
    "en": [
      "it will deal with collisions when's school setting."
    ],
    "ru": [
      "он будет иметь дело с столкновениями в школьной обстановке."
    ]
  },
  {
    "time": [
      622.078473,
      629.071702
    ],
    "en": [
      "Let's plant what the snake needs to do by writing out like so."
    ],
    "ru": [
      "Давайте посадим то, что нужно делать змее, написав вот так."
    ]
  },
  {
    "time": [
      629.071702,
      647.415868
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
      647.415868,
      653.411618
    ],
    "en": [
      "To deal with a snake hitting a water or itself we are going to write an if statement in our move outcomes function."
    ],
    "ru": [
      "Чтобы справиться со змеей, ударяющейся о воду или саму себя, мы собираемся написать оператор if в нашей функции результатов перемещения."
    ]
  },
  {
    "time": [
      653.411618,
      659.437493
    ],
    "en": [
      "First of all, it's important to see that we are dealing with the snake's head at the moment."
    ],
    "ru": [
      "Прежде всего, важно понять, что в данный момент мы имеем дело с головой змеи."
    ]
  },
  {
    "time": [
      659.437493,
      664.283243
    ],
    "en": [
      "And we are using width to figure out where on the grid the snake head is."
    ],
    "ru": [
      "И мы используем ширину, чтобы выяснить, где на сетке находится голова змеи."
    ]
  },
  {
    "time": [
      664.283243,
      672.632576
    ],
    "en": [
      "We need to do this to figure out when the snake head is in any of the squares at the bottom of our grid"
    ],
    "ru": [
      "Нам нужно сделать это, чтобы выяснить, когда голова змеи находится в любом из квадратов в нижней части нашей сетки."
    ]
  },
  {
    "time": [
      672.632576,
      679.268138
    ],
    "en": [
      "or indicated by the two parallel lines or on the right side of our grid and so on."
    ],
    "ru": [
      "или обозначен двумя параллельными линиями или на правой стороне нашей сетки и так далее."
    ]
  },
  {
    "time": [
      679.268138,
      738.434867
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
      738.434867,
      746.423388
    ],
    "en": [
      "last statement is an if statement for if the snake goes into itself."
    ],
    "ru": [
      "последний оператор - это оператор if, если змея входит в себя."
    ]
  },
  {
    "time": [
      746.423388,
      751.424742
    ],
    "en": [
      "Oops we need another or here."
    ],
    "ru": [
      "Ой, нам нужен другой или здесь."
    ]
  },
  {
    "time": [
      751.424742,
      755.940346
    ],
    "en": [
      "Right so if any of the above happened,"
    ],
    "ru": [
      "Правильно, если что-то из вышеперечисленного произошло,"
    ]
  },
  {
    "time": [
      755.940346,
      757.426117
    ],
    "en": [
      "the following was returned."
    ],
    "ru": [
      "следующее было возвращено."
    ]
  },
  {
    "time": [
      757.426117,
      759.947513
    ],
    "en": [
      "we clear the interval."
    ],
    "ru": [
      "очищаем интервал."
    ]
  },
  {
    "time": [
      759.947513,
      765.43895
    ],
    "en": [
      "Now we need to define what exactly is the tail."
    ],
    "ru": [
      "Теперь нам нужно определить, что именно является хвостом."
    ]
  },
  {
    "time": [
      765.43895,
      769.392117
    ],
    "en": [
      "We do so right by writing this constant and using"
    ],
    "ru": [
      "Мы делаем это правильно, записывая эту константу и используя"
    ]
  },
  {
    "time": [
      769.392117,
      779.221825
    ],
    "en": [
      "now let's remove the classroom of snake from the tail and give a direction to just the head of the snake."
    ],
    "ru": [
      "Теперь давайте удалим класс змеи из хвоста и зададим направление только голове змеи."
    ]
  },
  {
    "time": [
      779.221825,
      798.540366
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
      798.540366,
      806.143616
    ],
    "en": [
      "Let's deal with what happens when the head of the current snake gets into a square that contains a class named Apple with an if statement."
    ],
    "ru": [
      "Давайте разберемся, что происходит, когда голова текущей змеи попадает в квадрат, содержащий класс с именем Apple с оператором if."
    ]
  },
  {
    "time": [
      806.143616,
      812.059949
    ],
    "en": [
      "Once again, we start with removing the apple class name for a clean slate,"
    ],
    "ru": [
      "Еще раз, мы начинаем с удаления имени класса Apple для чистого листа,"
    ]
  },
  {
    "time": [
      812.059949,
      817.068282
    ],
    "en": [
      "then adding a class to the newly added tail of the snake making it appear to grow longer."
    ],
    "ru": [
      "затем добавляем класс к недавно добавленному хвосту змеи, чтобы он казался длиннее."
    ]
  },
  {
    "time": [
      817.068282,
      834.47124
    ],
    "en": [
      "Again, we will add our random Apple function here when we write it to generate a new Apple once this one is gone,"
    ],
    "ru": [
      "Опять же, мы добавим сюда нашу случайную функцию Apple, когда мы напишем ее, чтобы сгенерировать новую Apple, когда эта функция исчезнет,"
    ]
  },
  {
    "time": [
      834.47124,
      836.988282
    ],
    "en": [
      "and add one to the score."
    ],
    "ru": [
      "и прибавьте единицу к счету."
    ]
  },
  {
    "time": [
      836.988282,
      844.478969
    ],
    "en": [
      "Now let's display that new score in the HTML of our score display and clear the interval time."
    ],
    "ru": [
      "Теперь давайте отобразим этот новый счет в HTML-коде нашего дисплея счета и очистим интервал времени."
    ]
  },
  {
    "time": [
      844.478969,
      850.24199
    ],
    "en": [
      "Finally, let's multiply the new interval time by the speed as our sphere to 0.9."
    ],
    "ru": [
      "Наконец, давайте умножим новый интервал времени на скорость нашей сферы до 0,9."
    ]
  },
  {
    "time": [
      850.24199,
      854.601656
    ],
    "en": [
      "This will decrease the interval of time each time this is updated."
    ],
    "ru": [
      "Это будет уменьшать интервал времени при каждом обновлении."
    ]
  },
  {
    "time": [
      854.601656,
      858.614385
    ],
    "en": [
      "Lastly, let's reset the interval and close the if statement."
    ],
    "ru": [
      "Наконец, давайте сбросим интервал и закроем оператор if."
    ]
  },
  {
    "time": [
      858.614385,
      866.712927
    ],
    "en": [
      "Let's not forget to re add the class name of snake at the end of our move outcomes function."
    ],
    "ru": [
      "Не забудьте еще раз добавить имя класса snake в конец нашей функции результатов перемещения."
    ]
  },
  {
    "time": [
      866.712927,
      871.180885
    ],
    "en": [
      "Right then we've been coding for a while."
    ],
    "ru": [
      "Прямо тогда мы какое-то время занимались кодированием."
    ]
  },
  {
    "time": [
      871.180885,
      873.205823
    ],
    "en": [
      "Let's see if this works."
    ],
    "ru": [
      "Посмотрим, работает ли это."
    ]
  },
  {
    "time": [
      873.205823,
      876.391822
    ],
    "en": [
      "So far, we have written a start game function."
    ],
    "ru": [
      "Пока что мы написали функцию запуска игры."
    ]
  },
  {
    "time": [
      876.391822,
      880.746258
    ],
    "en": [
      "So now let's link it to the start button on our HTML page with an event listener."
    ],
    "ru": [
      "Итак, теперь давайте свяжем его с кнопкой запуска на нашей HTML-странице с прослушивателем событий."
    ]
  },
  {
    "time": [
      880.746258,
      882.86055
    ],
    "en": [
      "So on click on the start button,"
    ],
    "ru": [
      "Итак, щелкнув по кнопке «Пуск»,"
    ]
  },
  {
    "time": [
      882.86055,
      885.510446
    ],
    "en": [
      "we want to invoke the start game function."
    ],
    "ru": [
      "мы хотим вызвать функцию запуска игры."
    ]
  },
  {
    "time": [
      885.510446,
      889.027675
    ],
    "en": [
      "And it works."
    ],
    "ru": [
      "И это работает."
    ]
  },
  {
    "time": [
      889.027675,
      894.036091
    ],
    "en": [
      "some reason the left arrow button is not working."
    ],
    "ru": [
      "почему-то не работает кнопка со стрелкой влево."
    ]
  },
  {
    "time": [
      894.036091,
      898.517737
    ],
    "en": [
      "And here is why we are missing an equals sign."
    ],
    "ru": [
      "И вот почему нам не хватает знака равенства."
    ]
  },
  {
    "time": [
      898.517737,
      901.525946
    ],
    "en": [
      "Oops."
    ],
    "ru": [
      "Ой."
    ]
  },
  {
    "time": [
      901.525946,
      906.057925
    ],
    "en": [
      "Okay, now finally,",
      "let's address that generate random Apple function we have been talking about."
    ],
    "ru": [
      "Хорошо, теперь наконец,",
      "давайте обратимся к этой генерации случайной функции Apple, о которой мы говорили."
    ]
  },
  {
    "time": [
      901.525946,
      906.057925
    ],
    "en": [
      "Okay, now finally,",
      "let's address that generate random Apple function we have been talking about."
    ],
    "ru": [
      "Хорошо, теперь наконец,",
      "давайте обратимся к этой генерации случайной функции Apple, о которой мы говорили."
    ]
  },
  {
    "time": [
      901.525946,
      906.057925
    ],
    "en": [
      "Okay, now finally,",
      "let's address that generate random Apple function we have been talking about."
    ],
    "ru": [
      "Хорошо, теперь наконец,",
      "давайте обратимся к этой генерации случайной функции Apple, о которой мы говорили."
    ]
  },
  {
    "time": [
      906.057925,
      914.593987
    ],
    "en": [
      "So with that, we use math random to generate a random number based on the squares length."
    ],
    "ru": [
      "Таким образом, мы используем математический случай для генерации случайного числа на основе длины квадратов."
    ]
  },
  {
    "time": [
      914.593987,
      918.107175
    ],
    "en": [
      "This means the apple can pop up anywhere on our grid,"
    ],
    "ru": [
      "Это означает, что яблоко может появиться в любом месте нашей сетки,"
    ]
  },
  {
    "time": [
      918.107175,
      925.630029
    ],
    "en": [
      "we use math floor to round down the number to the nearest integer to make sure the random square is below or including the 100th Square."
    ],
    "ru": [
      "мы используем математический пол, чтобы округлить число до ближайшего целого числа, чтобы убедиться, что случайный квадрат меньше или включает сотый квадрат."
    ]
  },
  {
    "time": [
      925.630029,
      933.112821
    ],
    "en": [
      "We will use while to make sure that the Apple does not appear in any day that already has a class name snake."
    ],
    "ru": [
      "Мы будем использовать while, чтобы убедиться, что Apple не появляется ни в один день, в котором уже есть имя класса snake."
    ]
  },
  {
    "time": [
      933.112821,
      948.1298
    ],
    "en": [
      "And that's it."
    ],
    "ru": [
      "Вот и все."
    ]
  },
  {
    "time": [
      933.112821,
      948.1298
    ],
    "en": [
      "And that's it."
    ],
    "ru": [
      "Вот и все."
    ]
  },
  {
    "time": [
      948.1298,
      955.150925
    ],
    "en": [
      "Let's get rid of the hard coded classes in our HTML."
    ],
    "ru": [
      "Давайте избавимся от жестко запрограммированных классов в нашем HTML."
    ]
  },
  {
    "time": [
      955.150925,
      961.390945
    ],
    "en": [
      "And there we go, we now have a fully functioning game up snake."
    ],
    "ru": [
      "И вот, теперь у нас есть полностью функционирующая змейка."
    ]
  },
  {
    "time": [
      961.390945,
      971.16207
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
      971.16207,
      971.16207
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]