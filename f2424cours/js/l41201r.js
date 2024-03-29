var l41201r = [
"Installing Django on PythonAnywhere16m.",
"Здравствуйте, и добро пожаловать на демонстрацию для Django для всех.",
"Это для установки Django на PythonAnywhere.",
"В некотором смысле, мы просто начнем.",
"Это немного сложно, потому что есть учебник о том, как написать первое приложение Django.",
"Существует учебник о том, как настроить Django.org на PythonAnywhere.",
"И ни один из них не идеально подходит.",
"То, что у меня есть, это задание, которое проводит вас через серию вещей, которые ложат некоторые необходимые вещи для этого класса.",
"Итак, первое, что мы сделаем, это у вас должна быть учетная запись PythonAnywhere.",
"И вы должны иметь возможность войти в учетную запись PythonAnywhere и вы сможете куда-то добраться.",
"Итак, это мой доктор Чак, это мой счет, который я использую, я использую, чтобы быть студентом в этом.",
"Есть и другие учетные записи, которые у меня есть для производства, но это один из моих студенческих аккаунтов.",
"И поэтому первое, что вы собираетесь сделать, это вы собираетесь использовать консоль и , вы собираетесь запустить оболочку Bash.",
"Так что это на самом деле Linux.",
"И я люблю PythonAnywhere, мне нравится тот факт, что мы изучаем Linux.",
"Надеюсь, вы просто получите немного больше комфорта с Linux, как мы идем.",
"Но здесь вы собираетесь сделать много командной строки системы.",
"Итак, мы собираемся сделать mkdir виртуальную среду.",
"Вы можете сделать этот Python 3.7 или Python 3.8.",
"Чем позже Python, тем лучше.",
"Это займет некоторое время, потому что он собирается создать так называемую виртуальную среду , которая позволяет вам иметь собственную версию Python, ваш собственный набор установленных библиотек Python.",
"И виртуальные среды - замечательная вещь в Python.",
"Потому что тогда вам не нужно спрашивать владельца этой системы, , которая является PythonAnywhere, эй, не могли бы вы обновить Python?",
"Оказывается, вы можете обновить Python самостоятельно.",
"Так что мы будем сидеть и пусть это, о, туда мы идем, он сразу же убежал и [ЗВУК], он сразу же убежал.",
"Так что давайте сделаем следующее.",
"Следующее, что я знаю, занимает много времени.",
"Следующим шагом является установка Django.",
"Теперь это пип, он устанавливает программное обеспечение.",
"Так что он собирается загрузить кучу программного обеспечения, и затем он собирается установить это программное обеспечение.",
"И он устанавливает его в нашей среде django3, верно?",
"И поэтому это не установка для всей системы, это просто установка для нас.",
"И поэтому вы привыкнете к идее, что вам нужно работать над Django, в соответствующей среде Django.",
"В этой ситуации мы используем Django 3.0.",
"На время записи этого Django 3.0.2 вышел.",
"Django 3 довольно мило.",
"Так что мы просто посидим и посмотрим это некоторое время.",
"Так что он закончен, и теперь у нас он установлен.",
"Теперь есть команда, которая ввернет нас в, Это лишнее сейчас, потому что мы уже в ней.",
"Но работайте над Django 3 и убедитесь, что вы в нем.",
"Затем следующее, что нужно сделать, это захватить эту команду и убедитесь, что ваша версия Django правильная.",
"Если это говорит 3.0.2 или более поздней, то жизнь хороша, и у вас есть ваш Django работает.",
"Теперь я хочу, чтобы вы установили некоторые примеры кода в классе.",
"Я начну это и объясню, что происходит.",
"Итак, это GitHub, и это код, который я поддерживаю, и я могу обновить этот код, и я могу отправить его вам.",
"И так это много примеров кода.",
"Поэтому, если вы перейдете в dj4e, вкладку я нажимаю клавишу Tab, чтобы сделать завершение там, здесь есть куча файлов.",
"И это пример кода, который мы собираемся пройти в классе.",
"И поэтому нам нужно добавить требования.",
"pip, опять же, является менеджером зависимостей.",
"Есть файл requirements.",
"txt, в котором говорится: «Эй, нам нужна целая куча библиотек».",
"И поэтому давайте установим эти библиотеки.",
"Теперь, в ваших первых приложениях Python, вам не понадобятся все эти библиотеки.",
"Но я хочу, чтобы они были установлены в вашу виртуальную среду на раннем этапе , чтобы по мере того, как мы будем продолжать, вы не добавляете такую функцию, как социальная аутентификация, которая является этим маленьким приложением прямо там, как социальная аутентификация, а затем, упс, нам пришлось установить вещь.",
"Поэтому я хочу, чтобы все эти вещи были установлены в начале.",
"И это займет немного времени, так что мы просто немного остановимся.",
"Хорошо, так что закончилось.",
"И теперь то, что мы хотим сделать, это запустить команду manage.",
"py check.",
"Вы собираетесь много запускать эту команду.",
"И мы на самом деле в приложении Django.",
"И эта проверка Python manage.",
"py читает ваши файлы и эти файлы, которые указывают на другие файлы, ищет синтаксические ошибки.",
"И это хороший способ проверить здравомыслие вашего приложения.",
"Потому что, если он не пройдет эту проверку manage.",
"py, она не начнется.",
"Мы даже не пытались запустить это приложение и разместить его в Интернете.",
"На данный момент это то, что мы делаем.",
"Так что не беспокойтесь об этом сообщении, мы перейдем к нему позже.",
"Можно сказать, что python3 управляет makemigrations.",
"И в этом будет сказано, что никаких изменений не обнаружено.",
"И тогда мы собираемся сделать некоторые, мы собираемся запустить миграцию, и это создаст кучу таблиц базы данных.",
"Не беспокойся об этом.",
"Итак, мы закончили там.",
"Теперь мы собираемся фактически забрать в приложении Django.",
"Мы собираемся в основном сделать новый Django, мы собираемся сделать папку.",
"Итак, мы собираемся вернуться в наш домашний каталог, cd ~ говорит вернуться в домашний каталог.",
"И мы собираемся сделать каталог под названием django_projects.",
"Это так, что вы можете иметь больше одного из них.",
"Мы собираемся войти в этот каталог, cd django_projects.",
"И тогда мы собираемся начать проект моего тестового сайта.",
"Теперь это действительно создало целую кучу файлов на моем тестовом сайте, хорошо?",
"Теперь нам нужно отредактировать один файл.",
"Я собираюсь отредактировать этот файл.",
"Теперь у меня есть целая вещь о том, как редактировать файлы в PythonAnywhere.",
"Я сделаю это трудным способом, я сделаю это так, как вы, вероятно, это сделаете, и это использовать этот экран «Файлы».",
"Упс, мне нужно вернуться и получить свою оболочку, поболтаться, Консоль > Открыть ссылку в новой вкладке.",
"Вы обнаружите, что захотите, вернитесь на консоль.",
"Итак, вот я, я хочу отредактировать некоторые файлы, поэтому я могу зайти в django_project> mysite, mysite.",
"А затем settings.py - это файл, который он говорит мне отредактировать.",
"Так что он говорит мой сайт/мой сайт, это немного странно, что имя удваивается.",
"Вы должны спуститься к 28 строке и сказать добавить цитату, звезда, цитату.",
"И это связано с защитой того, какие системы могут разговаривать с этим веб-сервером, и мы просто скажем, что любой может это сделать.",
"Не устанавливайте это в false, забудьте это предупреждение, это ложь.",
"Мы не в производстве, мы в разработке.",
"Итак, мы должны сказать «Сохранить», чтобы сохранить наш файл, хорошо?",
"Так что давайте вернемся, мы должны были это сделать.",
"Вот различные способы редактирования файла.",
"Вы можете использовать nano в командной строке, и это круто.",
"Я просто использовал этот номер один для этого.",
"vi это действительно круто, но мы этого не сделаем.",
"Хорошо, теперь нам нужно убедить PythonAnywhere запустить приложение, хорошо?",
"И так, что находится под другой вкладкой, , которая находится под, я собираюсь открыть это в новой вкладке.",
"Итак, теперь у меня есть эти файлы, на самом деле мне больше не нужна эта вкладка, Я должен, oops, Я должен сказать, python3 manage.py проверить здесь просто, чтобы быть творческим.",
"Да, это хорошо.",
"Так что вы всегда хотите сделать python3.",
"Я на сайте, фактический веб-сайт, на котором есть manage.py, python.",
"На самом деле, вам больше не нужно говорить python3, это после 2020 года.",
"Таким образом, вы можете сказать python, python manage.py проверить.",
"Вы увидите, что я набираю python3 все время, потому что старые привычки сильно умирают во время перехода от Python 2 к Python 3.",
"Так что это хорошо, , что предполагает, что это приложение в django_projects находится в хорошей форме.",
"Итак, теперь мне нужно взглянуть на эту настройку веб-приложения.",
"И что здесь происходит, так это способ PythonAnywhere взять код в этой папке и запустить его и дать вам веб-адрес для этого.",
"И первое, что ты должен сделать, это настроить это.",
"И это правильно настроено.",
"Вы должны указать на папку, в которой есть этот manage.py.",
"И если я пойду на консоль и напечатаю pwd, распечатаю рабочий каталог, вы увидите дом, Django, Mysite доктора Чака.",
"И это файл, который имеет папку, в которой есть manage.py.",
"Таким образом, эти две вещи должны быть правильные.",
"Этот код здесь тоже должен быть правильным.",
"Когда ты это увидишь, он начнет очень большой.",
"Бросьте все это, выбросьте образец.",
"Я даю вам весь код, чтобы положить туда.",
"И снова, это все настроить какой сайт.",
"И затем, мы также должны установить виртуальную среду в этой веб-вкладке, должны вернуться к веб-вкладке.",
"Мы должны установить эту виртуальную среду.",
"И я хочу, чтобы это было, ты должен пойти и изменить название.",
"Не делайте то же самое, что и я, это для моей виртуальной среды.",
"Так что он проверяет, да, есть хорошая виртуальная среда.",
"Таким образом, у вас есть этот исходный код, рабочий каталог, конфигурационный файл WSGI и виртуальная среда настроены правильно.",
"Мы вернемся к этому.",
"Это журналы ошибок.",
"И если все пойдет хорошо в этот момент, давайте перепроверим задание.",
"Нажми перезагрузку, это то, что написано.",
"Поэтому каждый раз, когда вы меняете свой код, вы должны сообщить PythonAnywhere, поэтому это занимает немного.",
"И если все пойдет хорошо, я открою этот URL в новой вкладке.",
"И это сработало, отладка правда.",
"Пожалуйста, оставьте debug true, или иначе этот курс будет действительно утомительным для вас, хорошо?",
"Итак, это первый шаг, но потом у нас есть немного больше работы.",
"Мы добавим приложение для опросов.",
"Итак, мы собираемся вернуться к этому, Я уже в той папке, я в той папке.",
"И тогда я собираюсь запустить приложение, упс, вернуться, Я собираюсь построить приложение.",
"Это способ создать кучу исходного кода.",
"Так что одна из вещей о Django заключается в том, что он поставляется с включенными батареями.",
"И в этом конкретном случае он пишет кучу кода в папке с именем опросы, хорошо?",
"И вот это сейчас в опросах.",
"И затем мы идем продолжить на нашем, теперь мы собираемся забрать в этом учебнике Django.",
"Итак, мы сказали, что опросы startapp, мы сделали это.",
"И мы собираемся отредактировать файл polls/views.py.",
"И мы собираемся скопировать этот код здесь, Откройте новую вкладку, и django_projects > mysite > опросы > views.py.",
"Так что я собираюсь положить туда код из учебника, хорошо?",
"Таким образом, этот код находится в учебнике, возвращаясь к учебнику.",
"Он говорит, что создайте файл с именем urls.py в той же папке и помещен в этот код, поэтому я скопирую это.",
"Поэтому я собираюсь создать новый файл здесь, urls.py, Новый файл.",
"Давайте положим эту штуку туда и сохраним этот файл.",
"Затем мы вернемся назад, а затем мы идем в мой сайт.",
"Таким образом, polls/urls.py является приложением, mysite предназначен для всего сайта.",
"И поэтому я возьму и этот код.",
"Этот файл уже существует, поэтому мы идем mysite > mysite > настройки.",
"Это единственная папка, в которой есть settings.py.",
"Я не должен был редактировать настройки, я должен был редактировать URL-адреса. И это выглядит довольно хорошо, мы просто добавим строку.",
"Ну, на самом деле мы должны сделать все это, потому что мы должны импортировать incвключать.",
"Так что этот небольшой импорт включают, эта маленькая часть здесь была там.",
"Так что я скопировал это.",
"Это все, конечно, комментарии.",
"Таким образом, все эти файлы просто Python.",
"Это установка переменной, называемой urlpatters, в массив, а путь - это вещь, которая возвращает объект.",
"И поэтому вы можете пойти прочитать все, и вы должны прочитать всю документацию.",
"А потом я сохраню это, а потом вернемся.",
"Теперь, каждый раз, когда вы видите здесь, когда он говорит, что python3 управляет runserver, вы хотите сделать проверку python3.",
"Это как делать все, кроме запуска сервера, за исключением запуска сервера.",
"И снова, вы можете получить ошибки здесь и прочитать эти ошибки.",
"Это следы.",
"Они скажут: «О, запятая не найдена».",
"Позвольте мне сделать ошибку, чтобы вы увидели, что произойдет.",
"Я не совершаю ошибок.",
"Вернись и заходим в этот файл.",
"Давай забудем скобку, хорошо?",
"Давайте сохраним его.",
"Шокирует.",
"Видишь?",
"Итак, когда я сделал проверку manage.py python3, она взорвется.",
"И это говорит мне, что что-то вроде фанки вокруг линии 22 urls.py, посмотрите.",
"Я имею в виду, мой редактор даже сказал мне это, так что мы идем.",
"Так что я исправляю это резервное копирование и говорю «сохранить».",
"А теперь я возвращаюсь и набираю, кстати, вы можете нажать стрелку вверх и вы можете запустить команду снова.",
"python3 manage.",
"py не находит проблем.",
"Итак, что мы делаем, чтобы протестировать наше приложение?",
"Мы идем в веб-приложение.",
"Теперь, у нас есть эти ребята, , мы не должны их менять, они все настроены снова.",
"Итак, мы нажмем кнопку «Перезагрузка», займём немного времени.",
"Позвольте мне перейти к нашему фактическому приложению.",
"Это похоже на неудачу, но это не так, , потому что оказывается, что этот маленький код, который вы запускаете, сидит на опросах.",
"И это код, который вы запустили.",
"Таким образом, на данный момент вы выполнили задание У меня там немного странных ошибок.",
"Итак, мы прошли через это.",
"Это было не так уж плохо.",
"Получение вещей часто является самым трудным битом, но , надеюсь, через некоторое время вы будете работать.",
"И тогда мы начнем добавлять вещи в наше приложение.",
"Надеюсь, это было полезно.",
"Ура!",
]