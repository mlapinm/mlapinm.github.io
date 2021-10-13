let objs = [
  {
    "time": [
      9.758638,
      10.737981
    ],
    "en": [
      "Hi, everyone,"
    ],
    "ru": [
      "Всем привет,"
    ]
  },
  {
    "time": [
      10.737981,
      15.27111
    ],
    "en": [
      "we are now at game six out of seven of our JavaScript games course."
    ],
    "ru": [
      "Сейчас мы находимся на шестой игре из семи нашего курса игр на JavaScript."
    ]
  },
  {
    "time": [
      15.27111,
      24.501608
    ],
    "en": [
      "We only have one more grid based game to make after this until you have at seven fully functioning JavaScript games for your portfolio."
    ],
    "ru": [
      "У нас есть только одна игра на основе сетки, которую нужно сделать после этого, пока у вас не будет семи полнофункциональных игр на JavaScript для вашего портфолио."
    ]
  },
  {
    "time": [
      24.501608,
      25.979159
    ],
    "en": [
      "In this tutorial,"
    ],
    "ru": [
      "В этом руководстве"
    ]
  },
  {
    "time": [
      25.979159,
      34.500475
    ],
    "en": [
      "we're going to make Frogger in which we're going to be looking at every single function that you have learnt before in the previous five games."
    ],
    "ru": [
      "мы собираемся сделать Frogger, в котором мы рассмотрим каждую функцию, которую вы изучили ранее в предыдущих пяти играх."
    ]
  },
  {
    "time": [
      34.500475,
      39.295213
    ],
    "en": [
      "So yeah, if you haven't watched the previous videos definitely do that now before watching this one."
    ],
    "ru": [
      "Так что да, если вы не смотрели предыдущие видео, обязательно сделайте это сейчас, прежде чем смотреть это."
    ]
  },
  {
    "time": [
      39.295213,
      44.248116
    ],
    "en": [
      "But we are going to be taking them that extra level so making them do more complicated things."
    ],
    "ru": [
      "Но мы собираемся взять их на этот дополнительный уровень, чтобы они могли делать более сложные вещи."
    ]
  },
  {
    "time": [
      44.248116,
      46.750587
    ],
    "en": [
      "As always minimal styling,"
    ],
    "ru": [
      "Как всегда минималистичный стиль,"
    ]
  },
  {
    "time": [
      46.750587,
      51.261744
    ],
    "en": [
      "I've gone max five minutes doing the styling on this."
    ],
    "ru": [
      "Я потратил максимум пять минут на создание этого стиля."
    ]
  },
  {
    "time": [
      51.261744,
      62.963217
    ],
    "en": [
      "So Frogger is a simple Bass game in which you as the user and frog style at the bottom of the grid and have two obstacles to pass to get your home,"
    ],
    "ru": [
      "Итак, Frogger - это простая игра на бас-гитаре, в которой вы как пользователь и лягушка играете в нижней части сетки и имеете два препятствия, которые нужно пройти, чтобы добраться до дома."
    ]
  },
  {
    "time": [
      62.963217,
      66.456437
    ],
    "en": [
      "which is at the top of the grid based game."
    ],
    "ru": [
      "который находится в верхней части игры, основанной на сетке."
    ]
  },
  {
    "time": [
      66.456437,
      73.94494
    ],
    "en": [
      "The first obstacle is a road in which little cars are going from one side of the other new race car to avoid them like this."
    ],
    "ru": [
      "Первое препятствие - это дорога, по которой маленькие машинки едут по одну сторону от другой новой гоночной машины, чтобы так их избежать."
    ]
  },
  {
    "time": [
      73.94494,
      75.47002
    ],
    "en": [
      "Once you avoid that,"
    ],
    "ru": [
      "Как только вы этого избежите,"
    ]
  },
  {
    "time": [
      75.47002,
      77.984101
    ],
    "en": [
      "that is the second hurdle of the river."
    ],
    "ru": [
      "это второе препятствие на реке."
    ]
  },
  {
    "time": [
      77.984101,
      80.977639
    ],
    "en": [
      "This is basically flipped on its head."
    ],
    "ru": [
      "Это в основном перевернутое с ног на голову."
    ]
  },
  {
    "time": [
      80.977639,
      82.462423
    ],
    "en": [
      "So instead of avoiding things in it,"
    ],
    "ru": [
      "Поэтому вместо того, чтобы избегать чего-либо в нем,"
    ]
  },
  {
    "time": [
      82.462423,
      84.467593
    ],
    "en": [
      "you have to jump on things in it."
    ],
    "ru": [
      "в нем нужно прыгать."
    ]
  },
  {
    "time": [
      84.467593,
      87.467457
    ],
    "en": [
      "So you're gonna have to jump on the logs in the river."
    ],
    "ru": [
      "Так что тебе придется прыгать по бревнам в реке."
    ]
  },
  {
    "time": [
      87.467457,
      89.484623
    ],
    "en": [
      "In order to get to the home."
    ],
    "ru": [
      "Чтобы добраться до дома."
    ]
  },
  {
    "time": [
      89.484623,
      95.990178
    ],
    "en": [
      "What's cool about this is actually one of the frog is on the log is gonna have to move with the log until it can jump off."
    ],
    "ru": [
      "Что круто в этом, на самом деле одна из лягушек на бревне должна двигаться вместе с бревном, пока не сможет спрыгнуть."
    ]
  },
  {
    "time": [
      95.990178,
      97.489045
    ],
    "en": [
      "So that's gonna be really fun to build."
    ],
    "ru": [
      "Так что это будет действительно весело."
    ]
  },
  {
    "time": [
      97.489045,
      99.999362
    ],
    "en": [
      "I'm really excited to walk you through this."
    ],
    "ru": [
      "Я очень рад провести вас через это."
    ]
  },
  {
    "time": [
      99.999362,
      103.4946
    ],
    "en": [
      "So yeah, let's get going."
    ],
    "ru": [
      "Так что да, поехали."
    ]
  },
  {
    "time": [
      103.4946,
      112.005961
    ],
    "en": [
      "So first, let's set up a project with the correct files in our folder."
    ],
    "ru": [
      "Итак, сначала давайте настроим проект с правильными файлами в нашей папке."
    ]
  },
  {
    "time": [
      112.005961,
      115.497253
    ],
    "en": [
      "We have the app j s for our JavaScript,"
    ],
    "ru": [
      "У нас есть приложение j s для нашего JavaScript,"
    ]
  },
  {
    "time": [
      115.497253,
      118.49646
    ],
    "en": [
      "index, HTML for our HTML code,"
    ],
    "ru": [
      "index, HTML для нашего HTML-кода,"
    ]
  },
  {
    "time": [
      118.49646,
      121.997571
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
      121.997571,
      127.012968
    ],
    "en": [
      "Let's start with the HTML by adding some HTML boilerplate,"
    ],
    "ru": [
      "Начнем с HTML, добавив шаблон HTML,"
    ]
  },
  {
    "time": [
      127.012968,
      133.483126
    ],
    "en": [
      "we will add a title of Fraga for our project that will not visually render in the browser,"
    ],
    "ru": [
      "мы добавим заголовок Fraga для нашего проекта, который не будет визуально отображаться в браузере,"
    ]
  },
  {
    "time": [
      133.483126,
      134.991199
    ],
    "en": [
      "but show up on the tab."
    ],
    "ru": [
      "но появляются на вкладке."
    ]
  },
  {
    "time": [
      134.991199,
      142.690791
    ],
    "en": [
      "We next need to link our stylesheet using a link tag like this to the correct file using an href"
    ],
    "ru": [
      "Затем нам нужно связать нашу таблицу стилей с помощью тега ссылки, подобного этому, с правильным файлом, используя href"
    ]
  },
  {
    "time": [
      142.690791,
      145.284713
    ],
    "en": [
      "and link our JavaScript file again using source"
    ],
    "ru": [
      "и снова свяжем наш файл JavaScript, используя исходный код"
    ]
  },
  {
    "time": [
      145.284713,
      151.388341
    ],
    "en": [
      "and the correct file name of app j s where we saw our JavaScript code."
    ],
    "ru": [
      "и правильное имя файла приложения j s, в котором мы видели наш код JavaScript."
    ]
  },
  {
    "time": [
      151.388341,
      161.888839
    ],
    "en": [
      "Now we have that let's do some basic visualization of the grid and add a start and pause button for the game."
    ],
    "ru": [
      "Теперь у нас есть это, давайте сделаем базовую визуализацию сетки и добавим кнопки запуска и паузы для игры."
    ]
  },
  {
    "time": [
      161.888839,
      167.373329
    ],
    "en": [
      "And an h3 tag let us know how much time we have left or whether we have won or lost."
    ],
    "ru": [
      "А тег h3 сообщает нам, сколько времени у нас осталось, выиграли мы или проиграли."
    ]
  },
  {
    "time": [
      167.373329,
      188.895415
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
      188.895415,
      195.934599
    ],
    "en": [
      "Let's add the Start button and h3 tags to give them unique IDs instead of class names."
    ],
    "ru": [
      "Давайте добавим кнопку «Пуск» и теги h3, чтобы дать им уникальные идентификаторы вместо имен классов."
    ]
  },
  {
    "time": [
      195.934599,
      200.434916
    ],
    "en": [
      "I am also going to hard code the time left to display was 20."
    ],
    "ru": [
      "Я также собираюсь жестко запрограммировать время, оставшееся до отображения, равнялось 20."
    ]
  },
  {
    "time": [
      200.434916,
      221.437274
    ],
    "en": [
      "Okay, now let's flip over to our CSS file."
    ],
    "ru": [
      "Хорошо, теперь давайте перейдем к нашему файлу CSS."
    ]
  },
  {
    "time": [
      221.437274,
      229.445687
    ],
    "en": [
      "Add the following styling to make our list of divs and the HTML look like an actual grid."
    ],
    "ru": [
      "Добавьте следующий стиль, чтобы наш список div и HTML выглядел как настоящая сетка."
    ]
  },
  {
    "time": [
      229.445687,
      233.442875
    ],
    "en": [
      "What we are doing here is making the divs wrapper rechab using Flexbox."
    ],
    "ru": [
      "То, что мы делаем здесь, - это переопределение оболочки divs с помощью Flexbox."
    ]
  },
  {
    "time": [
      233.442875,
      237.425188
    ],
    "en": [
      "Each div inside a div with a class name grid,"
    ],
    "ru": [
      "Каждый div внутри div с сеткой имен классов,"
    ]
  },
  {
    "time": [
      237.425188,
      244.879972
    ],
    "en": [
      "we are assigning a height and width of 20 pixels because under an 80 divided by nine is 20."
    ],
    "ru": [
      "мы назначаем высоту и ширину 20 пикселей, потому что при делении 80 на девять получается 20."
    ]
  },
  {
    "time": [
      244.879972,
      246.89165
    ],
    "en": [
      "And we want a nine by nine grid."
    ],
    "ru": [
      "И нам нужна сетка девять на девять."
    ]
  },
  {
    "time": [
      246.89165,
      254.683237
    ],
    "en": [
      "So now right click your index HTML file to open it in the browser."
    ],
    "ru": [
      "Итак, теперь щелкните правой кнопкой мыши свой индексный HTML-файл, чтобы открыть его в браузере."
    ]
  },
  {
    "time": [
      254.683237,
      257.178384
    ],
    "en": [
      "And this is what we will see."
    ],
    "ru": [
      "И вот что мы увидим."
    ]
  },
  {
    "time": [
      257.178384,
      263.16369
    ],
    "en": [
      "Now let's assign colors to our ending block,"
    ],
    "ru": [
      "Теперь давайте назначим цвета нашему конечному блоку,"
    ]
  },
  {
    "time": [
      263.16369,
      265.979654
    ],
    "en": [
      "starting block and our frog"
    ],
    "ru": [
      "стартовый блок и наша лягушка"
    ]
  },
  {
    "time": [
      265.979654,
      281.361082
    ],
    "en": [
      "flip back to your HTML file and hard code these in to the fifth div down on the fifth from the bottom."
    ],
    "ru": [
      "вернитесь к своему HTML-файлу и жестко запрограммируйте их на пятый div вниз на пятый снизу."
    ]
  },
  {
    "time": [
      281.361082,
      288.890402
    ],
    "en": [
      "This is what it should now look like in your browser."
    ],
    "ru": [
      "Вот как это должно теперь выглядеть в вашем браузере."
    ]
  },
  {
    "time": [
      288.890402,
      297.370946
    ],
    "en": [
      "Okay, now let's add some functionality to the frog that we have hard coded,"
    ],
    "ru": [
      "Хорошо, теперь давайте добавим некоторые функции лягушке, которые мы жестко запрограммировали,"
    ]
  },
  {
    "time": [
      297.370946,
      301.405096
    ],
    "en": [
      "not hard coded, but we'll add to our HTML using JavaScript."
    ],
    "ru": [
      "не жестко запрограммирован, но мы добавим его в наш HTML с помощью JavaScript."
    ]
  },
  {
    "time": [
      301.405096,
      305.38335
    ],
    "en": [
      "Flip over to your app js file and add an event listener like this."
    ],
    "ru": [
      "Перейдите к файлу js вашего приложения и добавьте прослушиватель событий, подобный этому."
    ]
  },
  {
    "time": [
      305.38335,
      312.881105
    ],
    "en": [
      "Okay, all our code will be done in this event listener."
    ],
    "ru": [
      "Хорошо, весь наш код будет выполнен в этом прослушивателе событий."
    ]
  },
  {
    "time": [
      312.881105,
      320.884053
    ],
    "en": [
      "Now let's pick our elements from my HTML file using constants and query selectors like this."
    ],
    "ru": [
      "Теперь давайте выберем наши элементы из моего HTML-файла, используя такие константы и селекторы запросов."
    ]
  },
  {
    "time": [
      320.884053,
      326.919563
    ],
    "en": [
      "Know how we use query selector all for the divs inside a div with the class name grid."
    ],
    "ru": [
      "Знайте, как мы используем селектор запросов для всех div внутри div с сеткой имен классов."
    ]
  },
  {
    "time": [
      326.919563,
      334.419064
    ],
    "en": [
      "This is because we want all the divs in there and also see how we use dot for class names and hashes for picking out ideas."
    ],
    "ru": [
      "Это потому, что мы хотим, чтобы все div были там, а также видели, как мы используем точку для имен классов и хеши для выбора идей."
    ]
  },
  {
    "time": [
      334.419064,
      387.676388
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
      387.676388,
      390.663554
    ],
    "en": [
      "So now if I want to show the frog my grid,"
    ],
    "ru": [
      "Итак, теперь, если я хочу показать лягушке свою сетку,"
    ]
  },
  {
    "time": [
      390.663554,
      397.167907
    ],
    "en": [
      "I can simply add the class name of frog to a square and the grid of index 76 using JavaScript like this."
    ],
    "ru": [
      "Я могу просто добавить имя класса лягушки в квадрат и сетку индекса 76, используя JavaScript, подобный этому."
    ]
  },
  {
    "time": [
      397.167907,
      402.680062
    ],
    "en": [
      "Now flip over to my browser,"
    ],
    "ru": [
      "Теперь перейдите в мой браузер,"
    ]
  },
  {
    "time": [
      402.680062,
      415.184824
    ],
    "en": [
      "hit refresh, and okay now add a timer ID and leave it as that for now."
    ],
    "ru": [
      "нажмите «Обновить», и хорошо, теперь добавьте идентификатор таймера и оставьте его пока что."
    ]
  },
  {
    "time": [
      415.184824,
      422.171241
    ],
    "en": [
      "This is here for our countdown that we will build later."
    ],
    "ru": [
      "Это отсчет времени, который мы построим позже."
    ]
  },
  {
    "time": [
      422.171241,
      428.69378
    ],
    "en": [
      "The first we are going to do is make a frog move when you press on your keyboard."
    ],
    "ru": [
      "Сначала мы сделаем так, чтобы лягушка шевельнулась, когда вы нажимаете на клавиатуру."
    ]
  },
  {
    "time": [
      428.69378,
      434.713871
    ],
    "en": [
      "For this, you need to know the key codes to your keyboard up down left and right buttons,"
    ],
    "ru": [
      "Для этого вам необходимо знать коды клавиш на клавиатуре вверх вниз, левая и правая кнопки,"
    ]
  },
  {
    "time": [
      434.713871,
      438.193463
    ],
    "en": [
      "you can easily Google or the key codes to your entire keyboard."
    ],
    "ru": [
      "вы можете легко Google или коды клавиш для всей вашей клавиатуры."
    ]
  },
  {
    "time": [
      438.193463,
      441.692375
    ],
    "en": [
      "For now, I'm just going to tell you the key codes for the ones we want."
    ],
    "ru": [
      "А пока я просто расскажу вам коды клавиш для тех, которые нам нужны."
    ]
  },
  {
    "time": [
      441.692375,
      447.649608
    ],
    "en": [
      "We are going to write the function and pass it through an E or an event"
    ],
    "ru": [
      "Мы собираемся написать функцию и передать ее через E или событие"
    ]
  },
  {
    "time": [
      447.649608,
      455.197998
    ],
    "en": [
      "we're going to remove the frog from whatever current squared is in"
    ],
    "ru": [
      "мы собираемся удалить лягушку из любого квадрата тока"
    ]
  },
  {
    "time": [
      455.197998,
      461.520787
    ],
    "en": [
      "and then using event and keycodes decide which way the frog is going to go using switch cases."
    ],
    "ru": [
      "а затем, используя события и коды клавиш, решите, в какую сторону пойдет лягушка, используя корпуса переключателей."
    ]
  },
  {
    "time": [
      461.520787,
      466.513214
    ],
    "en": [
      "So in this case, if key 37 is pressed,"
    ],
    "ru": [
      "Итак, в этом случае, если нажата клавиша 37,"
    ]
  },
  {
    "time": [
      466.513214,
      469.532375
    ],
    "en": [
      "so are left on your keyboard."
    ],
    "ru": [
      "так что остаются на вашей клавиатуре."
    ]
  },
  {
    "time": [
      469.532375,
      473.50759
    ],
    "en": [
      "And if the current index is divisible by the width with a remainder,"
    ],
    "ru": [
      "И если текущий индекс делится на ширину с остатком,"
    ]
  },
  {
    "time": [
      473.50759,
      475.514733
    ],
    "en": [
      "we're the frog left one space."
    ],
    "ru": [
      "мы лягушка оставили одно место."
    ]
  },
  {
    "time": [
      475.514733,
      484.027522
    ],
    "en": [
      "Do you see the key 38 so the up arrow moving the frog a whole width back visually displaying as if it was going up one square,"
    ],
    "ru": [
      "Вы видите клавишу 38, так что стрелка вверх, перемещающая лягушку на всю ширину назад, визуально отображается, как если бы она поднималась на один квадрат,"
    ]
  },
  {
    "time": [
      484.027522,
      489.542533
    ],
    "en": [
      "then for keys 39 or our right and key 40 are down."
    ],
    "ru": [
      "то для ключей 39 или наша правая и ключ 40 опущены."
    ]
  },
  {
    "time": [
      489.542533,
      550.684415
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
      550.684415,
      564.501785
    ],
    "en": [
      "Then we draw the frog on each key press we also want to check if the frog has done anything that would result in winning or losing"
    ],
    "ru": [
      "Затем мы рисуем лягушку при каждом нажатии клавиши, мы также хотим проверить, сделала ли лягушка что-нибудь, что привело бы к выигрышу или проигрышу."
    ]
  },
  {
    "time": [
      564.501785,
      569.25793
    ],
    "en": [
      "let's put in these functions that we will write in a bit."
    ],
    "ru": [
      "давайте добавим эти функции, которые мы немного напишем."
    ]
  },
  {
    "time": [
      569.25793,
      576.057295
    ],
    "en": [
      "So if you try and move your probe now these functions will not work as they did not observe some will break your code so just bear that in mind."
    ],
    "ru": [
      "Поэтому, если вы попытаетесь переместить зонд сейчас, эти функции не будут работать, поскольку они не заметили, что некоторые из них сломают ваш код, так что просто имейте это в виду."
    ]
  },
  {
    "time": [
      576.057295,
      581.747681
    ],
    "en": [
      "Okay, now let's get to rendering the first obstacle the frog needs to cross"
    ],
    "ru": [
      "Хорошо, теперь давайте перейдем к визуализации первого препятствия, которое лягушка должна преодолеть."
    ]
  },
  {
    "time": [
      581.747681,
      586.848633
    ],
    "en": [
      "so that will be the road with cause that needs to be avoided."
    ],
    "ru": [
      "так что это будет путь с причинами, которого нужно избегать."
    ]
  },
  {
    "time": [
      586.848633,
      590.839109
    ],
    "en": [
      "Then the second obstacle which is a river with some logs,"
    ],
    "ru": [
      "Затем второе препятствие - река с бревнами,"
    ]
  },
  {
    "time": [
      590.839109,
      604.273735
    ],
    "en": [
      "frogs needs to jump on to cross you will see here and my finished game that the cars moving left are actually just on a loop being rendered and three squares 123 and then repeat."
    ],
    "ru": [
      "лягушкам нужно прыгнуть, чтобы пересечься, вы увидите здесь и в моей законченной игре, что автомобили, движущиеся влево, на самом деле находятся только в рендеринге цикла и трех квадратов 123, а затем повторяются."
    ]
  },
  {
    "time": [
      604.273735,
      605.680787
    ],
    "en": [
      "Same for the card game right."
    ],
    "ru": [
      "То же самое и с карточной игрой."
    ]
  },
  {
    "time": [
      605.680787,
      620.978202
    ],
    "en": [
      "And even the logs are on this loop just a loop of five squares random instead goes through HTML and other following class names your days making sure to start from the 19th down or for JavaScript sake index 18."
    ],
    "ru": [
      "И даже журналы находятся в этом цикле, просто цикл из пяти случайных квадратов вместо этого проходит через HTML и другие следующие имена классов, которые вы используете, чтобы убедиться, что они начинаются с 19-го вниз или для индекса JavaScript 18."
    ]
  },
  {
    "time": [
      620.978202,
      641.985685
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
      641.985685,
      647.470946
    ],
    "en": [
      "And the same for the road."
    ],
    "ru": [
      "То же самое и с дорогой."
    ]
  },
  {
    "time": [
      647.470946,
      654.586592
    ],
    "en": [
      "So diff 46, but index 45"
    ],
    "ru": [
      "Итак, diff 46, но индекс 45"
    ]
  },
  {
    "time": [
      654.586592,
      659.684256
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
      659.684256,
      668.197703
    ],
    "en": [
      "And now flip over is your CSS file and add some colors so we know what is road call river,",
      "or loc."
    ],
    "ru": [
      "А теперь переверните ваш файл CSS и добавьте несколько цветов, чтобы мы знали, что такое река дорожных вызовов,",
      "или loc."
    ]
  },
  {
    "time": [
      659.684256,
      668.197703
    ],
    "en": [
      "And now flip over is your CSS file and add some colors so we know what is road call river,",
      "or loc."
    ],
    "ru": [
      "А теперь переверните ваш файл CSS и добавьте несколько цветов, чтобы мы знали, что такое река дорожных вызовов,",
      "или loc."
    ]
  },
  {
    "time": [
      659.684256,
      668.197703
    ],
    "en": [
      "And now flip over is your CSS file and add some colors so we know what is road call river,",
      "or loc."
    ],
    "ru": [
      "А теперь переверните ваш файл CSS и добавьте несколько цветов, чтобы мы знали, что такое река дорожных вызовов,",
      "или loc."
    ]
  },
  {
    "time": [
      668.197703,
      682.126251
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
      682.126251,
      685.114188
    ],
    "en": [
      "Now Save and refresh the browser."
    ],
    "ru": [
      "Теперь сохраните и обновите браузер."
    ]
  },
  {
    "time": [
      685.114188,
      691.086773
    ],
    "en": [
      "And there we go, we can see a road here river,"
    ],
    "ru": [
      "И вот мы идем, мы видим здесь дорогу река,"
    ]
  },
  {
    "time": [
      691.086773,
      694.110787
    ],
    "en": [
      "some logs and some cars."
    ],
    "ru": [
      "несколько бревен и несколько машин."
    ]
  },
  {
    "time": [
      694.110787,
      698.11192
    ],
    "en": [
      "Now back in our JavaScript file,"
    ],
    "ru": [
      "Теперь вернемся в наш файл JavaScript,"
    ]
  },
  {
    "time": [
      698.11192,
      702.625344
    ],
    "en": [
      "let's write a function that will make all the divs with a class name of car left,"
    ],
    "ru": [
      "давайте напишем функцию, которая сделает все div с именем класса car, оставшимся,"
    ]
  },
  {
    "time": [
      702.625344,
      706.617612
    ],
    "en": [
      "go left, and the divs of class name car right,",
      "go right."
    ],
    "ru": [
      "идите налево, а divs имени класса car направо,",
      "направо."
    ]
  },
  {
    "time": [
      702.625344,
      706.617612
    ],
    "en": [
      "go left, and the divs of class name car right,",
      "go right."
    ],
    "ru": [
      "идите налево, а divs имени класса car направо,",
      "направо."
    ]
  },
  {
    "time": [
      702.625344,
      706.617612
    ],
    "en": [
      "go left, and the divs of class name car right,",
      "go right."
    ],
    "ru": [
      "идите налево, а divs имени класса car направо,",
      "направо."
    ]
  },
  {
    "time": [
      706.617612,
      713.127975
    ],
    "en": [
      "First, let's pick out these debts from HTML and add that to the top of our project."
    ],
    "ru": [
      "Во-первых, давайте выберем эти долги из HTML и добавим их в начало нашего проекта."
    ]
  },
  {
    "time": [
      713.127975,
      718.907294
    ],
    "en": [
      "We might as well add the others to"
    ],
    "ru": [
      "Мы могли бы также добавить других в"
    ]
  },
  {
    "time": [
      718.907294,
      740.026726
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
      740.026726,
      743.434254
    ],
    "en": [
      "now let's write a function called auto move cars"
    ],
    "ru": [
      "теперь давайте напишем функцию под названием auto move cars"
    ]
  },
  {
    "time": [
      743.434254,
      752.397134
    ],
    "en": [
      "in this function where we use arrow functions that will allow us to give a name to individual devs from all our devs called cause left and passing through a function,"
    ],
    "ru": [
      "в этой функции, где мы используем стрелочные функции, которые позволят нам дать имя отдельным разработчикам из всех наших разработчиков, называемых причиной слева и проходящей через функцию,"
    ]
  },
  {
    "time": [
      752.397134,
      755.055728
    ],
    "en": [
      "we will do this using for each"
    ],
    "ru": [
      "мы сделаем это, используя для каждого"
    ]
  },
  {
    "time": [
      755.055728,
      758.997836
    ],
    "en": [
      "so for each Doom that has a class name,"
    ],
    "ru": [
      "поэтому для каждого Doom, у которого есть имя класса,"
    ]
  },
  {
    "time": [
      758.997836,
      763.017382
    ],
    "en": [
      "cause left pass through a function called move car left,"
    ],
    "ru": [
      "вызвать левый проход через функцию, называемую переместить машину влево,"
    ]
  },
  {
    "time": [
      763.017382,
      766.501781
    ],
    "en": [
      "that will make the day go left and the same for cars right."
    ],
    "ru": [
      "что заставит день пойти налево, и то же самое для машин направо."
    ]
  },
  {
    "time": [
      766.501781,
      777.026135
    ],
    "en": [
      "Okay, now let's write that move car left function that technically is just going to rerender three days every second,"
    ],
    "ru": [
      "Хорошо, теперь давайте напишем эту функцию перемещения машины влево, которая технически будет перерисовывать три дня каждую секунду,"
    ]
  },
  {
    "time": [
      777.026135,
      784.017382
    ],
    "en": [
      "we use a switch for this and pass through the car left we got from the function automotive costs."
    ],
    "ru": [
      "мы используем для этого переключатель и проезжаем через автомобиль, оставшийся от функции автомобильных затрат."
    ]
  },
  {
    "time": [
      784.017382,
      814.858176
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
      814.858176,
      819.472643
    ],
    "en": [
      "Now for the common good,",
      "right on the same logic as above."
    ],
    "ru": [
      "Теперь для общего блага,",
      "точно по той же логике, что и выше."
    ]
  },
  {
    "time": [
      814.858176,
      819.472643
    ],
    "en": [
      "Now for the common good,",
      "right on the same logic as above."
    ],
    "ru": [
      "Теперь для общего блага,",
      "точно по той же логике, что и выше."
    ]
  },
  {
    "time": [
      814.858176,
      819.472643
    ],
    "en": [
      "Now for the common good,",
      "right on the same logic as above."
    ],
    "ru": [
      "Теперь для общего блага,",
      "точно по той же логике, что и выше."
    ]
  },
  {
    "time": [
      819.472643,
      844.927904
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
      844.927904,
      849.934185
    ],
    "en": [
      "Now let's do the exact same for the logs."
    ],
    "ru": [
      "Теперь сделаем то же самое с журналами."
    ]
  },
  {
    "time": [
      849.934185,
      854.806452
    ],
    "en": [
      "One loop three, rendering five devs every second"
    ],
    "ru": [
      "Один цикл три, рендеринг пяти разработчиков каждую секунду"
    ]
  },
  {
    "time": [
      854.806452,
      975.54432
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
      975.54432,
      979.058923
    ],
    "en": [
      "Okay,",
      "now let's write all this function."
    ],
    "ru": [
      "Хорошо,",
      "теперь давайте напишем всю эту функцию."
    ]
  },
  {
    "time": [
      975.54432,
      979.058923
    ],
    "en": [
      "Okay,",
      "now let's write all this function."
    ],
    "ru": [
      "Хорошо,",
      "теперь давайте напишем всю эту функцию."
    ]
  },
  {
    "time": [
      975.54432,
      979.058923
    ],
    "en": [
      "Okay,",
      "now let's write all this function."
    ],
    "ru": [
      "Хорошо,",
      "теперь давайте напишем всю эту функцию."
    ]
  },
  {
    "time": [
      979.058923,
      981.072188
    ],
    "en": [
      "So if the time runs out,"
    ],
    "ru": [
      "Так что, если время истечет,"
    ]
  },
  {
    "time": [
      981.072188,
      982.550102
    ],
    "en": [
      "or is equal to zero,"
    ],
    "ru": [
      "или равно нулю,"
    ]
  },
  {
    "time": [
      982.550102,
      987.564456
    ],
    "en": [
      "or two using these two parallel lines means or,"
    ],
    "ru": [
      "или два с использованием этих двух параллельных линий означает или,"
    ]
  },
  {
    "time": [
      987.564456,
      993.55246
    ],
    "en": [
      "or the square the frog is currently and contains a C one class name to call,"
    ],
    "ru": [
      "или квадрат, в котором сейчас находится лягушка, и содержащий одно имя класса C для вызова,"
    ]
  },
  {
    "time": [
      993.55246,
      996.057925
    ],
    "en": [
      "or l five class name."
    ],
    "ru": [
      "или l пять названий класса."
    ]
  },
  {
    "time": [
      996.057925,
      997.57593
    ],
    "en": [
      "So blue and engaging river,"
    ],
    "ru": [
      "Такая синяя и завораживающая река,"
    ]
  },
  {
    "time": [
      997.57593,
      1001.567154
    ],
    "en": [
      "or l four class name,",
      "which again is a river it loses."
    ],
    "ru": [
      "или l четыре имени класса,",
      "который снова становится рекой, которую он теряет."
    ]
  },
  {
    "time": [
      997.57593,
      1001.567154
    ],
    "en": [
      "or l four class name,",
      "which again is a river it loses."
    ],
    "ru": [
      "или l четыре имени класса,",
      "который снова становится рекой, которую он теряет."
    ]
  },
  {
    "time": [
      997.57593,
      1001.567154
    ],
    "en": [
      "or l four class name,",
      "which again is a river it loses."
    ],
    "ru": [
      "или l четыре имени класса,",
      "который снова становится рекой, которую он теряет."
    ]
  },
  {
    "time": [
      1001.567154,
      1005.115862
    ],
    "en": [
      "Again, we display the reducing message,"
    ],
    "ru": [
      "Снова мы отображаем сообщение о сокращении,"
    ]
  },
  {
    "time": [
      1005.115862,
      1011.140828
    ],
    "en": [
      "remove the frog, clear the timer from the countdown and stop the frog movie."
    ],
    "ru": [
      "уберите лягушку, сбросьте таймер с обратного отсчета и остановите фильм о лягушке."
    ]
  },
  {
    "time": [
      1011.140828,
      1030.692347
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
      1030.692347,
      1035.699694
    ],
    "en": [
      "Now the final functionality we need to give our game is make sure that the frog is on the log."
    ],
    "ru": [
      "Теперь последняя функция, которую нам нужно дать нашей игре, - это убедиться, что лягушка находится в журнале."
    ]
  },
  {
    "time": [
      1035.699694,
      1038.195794
    ],
    "en": [
      "So when it's on the log and moves with the log,"
    ],
    "ru": [
      "Итак, когда он находится в журнале и движется вместе с журналом,"
    ]
  },
  {
    "time": [
      1038.195794,
      1047.229762
    ],
    "en": [
      "so in the river, or the frog is in the squares index of bigger than or equal to 27,",
      "and smaller to 35."
    ],
    "ru": [
      "так что в реке, или лягушка находится в квадрате с индексом больше или равным 27,",
      "и меньше до 35."
    ]
  },
  {
    "time": [
      1038.195794,
      1047.229762
    ],
    "en": [
      "so in the river, or the frog is in the squares index of bigger than or equal to 27,",
      "and smaller to 35."
    ],
    "ru": [
      "так что в реке, или лягушка находится в квадрате с индексом больше или равным 27,",
      "и меньше до 35."
    ]
  },
  {
    "time": [
      1038.195794,
      1047.229762
    ],
    "en": [
      "so in the river, or the frog is in the squares index of bigger than or equal to 27,",
      "and smaller to 35."
    ],
    "ru": [
      "так что в реке, или лягушка находится в квадрате с индексом больше или равным 27,",
      "и меньше до 35."
    ]
  },
  {
    "time": [
      1047.229762,
      1048.715476
    ],
    "en": [
      "Move the frog left,"
    ],
    "ru": [
      "Переместите лягушку влево,"
    ]
  },
  {
    "time": [
      1048.715476,
      1055.707902
    ],
    "en": [
      "it doesn't matter that we actually including the river does in here as well as the frog automatically loses if it goes in there."
    ],
    "ru": [
      "не имеет значения, что мы на самом деле включаем сюда реку, так как лягушка автоматически проигрывает, если идет туда."
    ]
  },
  {
    "time": [
      1055.707902,
      1059.229036
    ],
    "en": [
      "So don't worry about that.",
      "That's fine."
    ],
    "ru": [
      "Так что не беспокойтесь об этом.",
      "Хорошо."
    ]
  },
  {
    "time": [
      1055.707902,
      1059.229036
    ],
    "en": [
      "So don't worry about that.",
      "That's fine."
    ],
    "ru": [
      "Так что не беспокойтесь об этом.",
      "Хорошо."
    ]
  },
  {
    "time": [
      1055.707902,
      1059.229036
    ],
    "en": [
      "So don't worry about that.",
      "That's fine."
    ],
    "ru": [
      "Так что не беспокойтесь об этом.",
      "Хорошо."
    ]
  },
  {
    "time": [
      1059.229036,
      1064.880487
    ],
    "en": [
      "Okay.",
      "Do the same."
    ],
    "ru": [
      "Хорошо.",
      "Повторяй."
    ]
  },
  {
    "time": [
      1059.229036,
      1064.880487
    ],
    "en": [
      "Okay.",
      "Do the same."
    ],
    "ru": [
      "Хорошо.",
      "Повторяй."
    ]
  },
  {
    "time": [
      1059.229036,
      1064.880487
    ],
    "en": [
      "Okay.",
      "Do the same."
    ],
    "ru": [
      "Хорошо.",
      "Повторяй."
    ]
  },
  {
    "time": [
      1064.880487,
      1068.360691
    ],
    "en": [
      "The Right."
    ],
    "ru": [
      "Право."
    ]
  },
  {
    "time": [
      1068.360691,
      1085.914795
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
      1085.914795,
      1090.423049
    ],
    "en": [
      "Okay, now we need to invoke all of our functions to happen every second,"
    ],
    "ru": [
      "Хорошо, теперь нам нужно вызывать все наши функции, чтобы они выполнялись каждую секунду,"
    ]
  },
  {
    "time": [
      1090.423049,
      1092.42704
    ],
    "en": [
      "every second year,"
    ],
    "ru": [
      "раз в два года,"
    ]
  },
  {
    "time": [
      1092.42704,
      1094.441326
    ],
    "en": [
      "we need to move a car or log,"
    ],
    "ru": [
      "нам нужно переместить машину или бревно,"
    ]
  },
  {
    "time": [
      1094.441326,
      1097.121597
    ],
    "en": [
      "make sure to move the frog if it's on a log,"
    ],
    "ru": [
      "не забудьте переместить лягушку, если она на бревне,"
    ]
  },
  {
    "time": [
      1097.121597,
      1104.613071
    ],
    "en": [
      "and evoke lose if it's standing in a square that a car is going into it let's call this function move piece."
    ],
    "ru": [
      "и вызвать проигрыш, если он стоит в квадрате, в который въезжает машина, назовем эту функцию движущейся фигурой."
    ]
  },
  {
    "time": [
      1104.613071,
      1107.133117
    ],
    "en": [
      "Note we need to pass loose in there."
    ],
    "ru": [
      "Обратите внимание, что нам нужно пройти туда свободно."
    ]
  },
  {
    "time": [
      1107.133117,
      1109.630169
    ],
    "en": [
      "And in our moving frog function."
    ],
    "ru": [
      "И в нашей функции движущейся лягушки."
    ]
  },
  {
    "time": [
      1109.630169,
      1111.649398
    ],
    "en": [
      "If we don't have it here,"
    ],
    "ru": [
      "Если у нас его здесь нет,"
    ]
  },
  {
    "time": [
      1111.649398,
      1114.154409
    ],
    "en": [
      "cause we'll be able to pass through our frog willy nilly."
    ],
    "ru": [
      "Потому что мы сможем пройти через нашу лягушку волей-неволей."
    ]
  },
  {
    "time": [
      1114.154409,
      1124.380554
    ],
    "en": [
      "You also use our logic to make our current time go down by one every second"
    ],
    "ru": [
      "Вы также используете нашу логику, чтобы наше текущее время уменьшалось на единицу каждую секунду."
    ]
  },
  {
    "time": [
      1124.380554,
      1129.826019
    ],
    "en": [
      "and update the time left div in our HTML to show this to our user."
    ],
    "ru": [
      "и обновим оставшееся время div в нашем HTML, чтобы показать это нашему пользователю."
    ]
  },
  {
    "time": [
      1129.826019,
      1139.441892
    ],
    "en": [
      "Finally, we need to pass through the movies function into a countdown that goes down every second."
    ],
    "ru": [
      "Наконец, нам нужно передать функцию фильмов в обратный отсчет, который идет вниз каждую секунду."
    ]
  },
  {
    "time": [
      1139.441892,
      1143.948967
    ],
    "en": [
      "We do this by adding an event listener to a start button."
    ],
    "ru": [
      "Мы делаем это, добавляя прослушиватель событий к кнопке запуска."
    ]
  },
  {
    "time": [
      1143.948967,
      1148.47459
    ],
    "en": [
      "We will also be making the button double up was a pause button which is quite cool."
    ],
    "ru": [
      "Мы также сделаем двойную кнопку паузы, что довольно круто."
    ]
  },
  {
    "time": [
      1148.47459,
      1152.468672
    ],
    "en": [
      "So on click, we do an if else statement."
    ],
    "ru": [
      "Итак, при щелчке мы выполняем оператор if else."
    ]
  },
  {
    "time": [
      1152.468672,
      1155.980713
    ],
    "en": [
      "By using set interval like this,"
    ],
    "ru": [
      "Используя такой интервал,"
    ]
  },
  {
    "time": [
      1155.980713,
      1163.479103
    ],
    "en": [
      "we are making sure the move pieces function is invoked every second until the timer ID equals zero."
    ],
    "ru": [
      "мы следим за тем, чтобы функция перемещения частей вызывалась каждую секунду, пока идентификатор таймера не станет равным нулю."
    ]
  },
  {
    "time": [
      1163.479103,
      1168.485067
    ],
    "en": [
      "We also want to make sure that the frog can only move when the game has started."
    ],
    "ru": [
      "Мы также хотим убедиться, что лягушка может двигаться только после начала игры."
    ]
  },
  {
    "time": [
      1168.485067,
      1174.971234
    ],
    "en": [
      "So we add in our event listener to start the move frog move frog function we were above here."
    ],
    "ru": [
      "Итак, мы добавляем в наш прослушиватель событий, чтобы запустить функцию move frog move frog, о которой мы говорили выше."
    ]
  },
  {
    "time": [
      1174.971234,
      1181.473117
    ],
    "en": [
      "As you can see, something's not working."
    ],
    "ru": [
      "Как видите, что-то не работает."
    ]
  },
  {
    "time": [
      1181.473117,
      1182.962278
    ],
    "en": [
      "Let's have a look."
    ],
    "ru": [
      "Давайте посмотрим."
    ]
  },
  {
    "time": [
      1182.962278,
      1194.72679
    ],
    "en": [
      "That's because I need to use document query selector all because we're selecting all the divs let's change that here and here."
    ],
    "ru": [
      "Это потому, что мне нужно использовать селектор запросов документов, потому что мы выбираем все div, давайте изменим это здесь и здесь."
    ]
  },
  {
    "time": [
      1194.72679,
      1205.213502
    ],
    "en": [
      "Okay, we need to change this."
    ],
    "ru": [
      "Хорошо, нам нужно это изменить."
    ]
  },
  {
    "time": [
      1205.213502,
      1210.228672
    ],
    "en": [
      "And there you have it your very own Frogger game."
    ],
    "ru": [
      "И вот у вас есть ваша собственная игра Frogger."
    ]
  },
  {
    "time": [
      1210.228672,
      1212.198491
    ],
    "en": [
      "How'd you like my tutorial?"
    ],
    "ru": [
      "Как вам мой учебник?"
    ]
  },
  {
    "time": [
      1212.198491,
      1215.224885
    ],
    "en": [
      "Feel free to comment if you'd like some more information,"
    ],
    "ru": [
      "Не стесняйтесь комментировать, если вам нужна дополнительная информация,"
    ]
  },
  {
    "time": [
      1215.224885,
      1217.231212
    ],
    "en": [
      "or if I haven't explained something very well."
    ],
    "ru": [
      "или если я что-то не очень хорошо объяснил."
    ]
  },
  {
    "time": [
      1217.231212,
      1223.718491
    ],
    "en": [
      "Please do subscribe for more videos are really into making grid based games at the moment and pure JavaScript."
    ],
    "ru": [
      "Пожалуйста, подпишитесь, чтобы увидеть больше видео, посвященных созданию игр на основе сетки на данный момент и на чистом JavaScript."
    ]
  },
  {
    "time": [
      1223.718491,
      1225.231529
    ],
    "en": [
      "So if you can think of any cool ones,"
    ],
    "ru": [
      "Итак, если вы можете придумать какие-нибудь крутые,"
    ]
  },
  {
    "time": [
      1225.231529,
      1228.212799
    ],
    "en": [
      "let me know and I'll try have a go at it."
    ],
    "ru": [
      "дайте мне знать, и я попробую."
    ]
  },
  {
    "time": [
      1228.212799,
      1229.726881
    ],
    "en": [
      "Thank you."
    ],
    "ru": [
      "Спасибо."
    ]
  },
  {
    "time": [
      1229.726881,
      1229.726881
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]