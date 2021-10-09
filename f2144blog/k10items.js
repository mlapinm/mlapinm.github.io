let objs = [
  {
    "time": [
      0.0,
      5.167103
    ],
    "en": [
      "welcome to this free CCNA packet tracer practice lab"
    ],
    "ru": [
      "добро пожаловать в эту бесплатную практическую лабораторию CCNA Packet Tracer"
    ]
  },
  {
    "time": [
      5.167103,
      8.581871
    ],
    "en": [
      "you can download the lab file from the link in the description"
    ],
    "ru": [
      "Вы можете скачать лабораторный файл по ссылке в описании"
    ]
  },
  {
    "time": [
      8.581871,
      17.262797
    ],
    "en": [
      "in this short lab we will connect to r1 via the console port and configure usernames and passwords"
    ],
    "ru": [
      "в этой короткой лабораторной работе мы подключимся к r1 через консольный порт и настроим имена пользователей и пароли."
    ]
  },
  {
    "time": [
      17.262797,
      21.816759
    ],
    "en": [
      "particularly it's important to know whether usernames and passwords are case sensitive"
    ],
    "ru": [
      "особенно важно знать, чувствительны ли имена пользователей и пароли к регистру"
    ]
  },
  {
    "time": [
      21.816759,
      24.578764
    ],
    "en": [
      "so we'll experiment with that in this lab"
    ],
    "ru": [
      "так что мы поэкспериментируем с этим в этой лаборатории"
    ]
  },
  {
    "time": [
      24.578764,
      30.351296
    ],
    "en": [
      "try to complete the lab on your own first then continue watching this video if you have trouble"
    ],
    "ru": [
      "попробуйте сначала пройти лабораторную работу самостоятельно, а затем продолжайте смотреть это видео, если у вас возникнут проблемы"
    ]
  },
  {
    "time": [
      30.351296,
      32.655499
    ],
    "en": [
      "or watch it after to check your solution"
    ],
    "ru": [
      "или просмотрите его позже, чтобы проверить свое решение"
    ]
  },
  {
    "time": [
      32.655499,
      41.670304
    ],
    "en": [
      "step one is to use PC one to access r1 via the console port"
    ],
    "ru": [
      "Шаг первый - использовать ПК один для доступа к r1 через консольный порт"
    ]
  },
  {
    "time": [
      41.670304,
      47.644722
    ],
    "en": [
      "PC one is already connected to our ones console port so let's click on PC one"
    ],
    "ru": [
      "Первый ПК уже подключен к нашему консольному порту, поэтому давайте щелкнем по ПК."
    ]
  },
  {
    "time": [
      47.644722,
      50.723998
    ],
    "en": [
      "then click desktop and terminal"
    ],
    "ru": [
      "затем щелкните рабочий стол и терминал"
    ]
  },
  {
    "time": [
      50.723998,
      54.948878
    ],
    "en": [
      "accept the default configurations here and now we're on our one"
    ],
    "ru": [
      "примите конфигурации по умолчанию здесь, и теперь мы находимся на нашем"
    ]
  },
  {
    "time": [
      54.948878,
      59.587607
    ],
    "en": [
      "next is to create two users on our one"
    ],
    "ru": [
      "далее нужно создать двух пользователей на нашем"
    ]
  },
  {
    "time": [
      59.587607,
      73.305574
    ],
    "en": [
      "CCNA in lowercase letters with the password Cisco in lowercase letters and CCNP in lowercase with the password Cisco in uppercase 70.20123 so let's go to global config mode"
    ],
    "ru": [
      "CCNA строчными буквами с паролем Cisco строчными буквами и CCNP строчными буквами с паролем Cisco в верхнем регистре 70.20123, поэтому переходим в режим глобальной конфигурации"
    ]
  },
  {
    "time": [
      73.305574,
      83.459327
    ],
    "en": [
      "enable conf t 76.73268 you can create users with this command username CCNA password Cisco"
    ],
    "ru": [
      "enable conf t 76.73268 вы можете создавать пользователей с помощью этой команды имя пользователя CCNA пароль Cisco"
    ]
  },
  {
    "time": [
      83.459327,
      84.968655
    ],
    "en": [
      "that's it"
    ],
    "ru": [
      "это оно"
    ]
  },
  {
    "time": [
      84.968655,
      87.754053
    ],
    "en": [
      "now let's create the second user"
    ],
    "ru": [
      "теперь давайте создадим второго пользователя"
    ]
  },
  {
    "time": [
      87.754053,
      91.783489
    ],
    "en": [
      "username CCNP password Cisco"
    ],
    "ru": [
      "имя пользователя CCNP пароль Cisco"
    ]
  },
  {
    "time": [
      91.783489,
      94.656661
    ],
    "en": [
      "with Cisco being an uppercase this time"
    ],
    "ru": [
      "на этот раз Cisco в верхнем регистре"
    ]
  },
  {
    "time": [
      94.656661,
      99.023858
    ],
    "en": [
      "now if we log out of the router and then access it again"
    ],
    "ru": [
      "теперь, если мы выйдем из роутера, а затем снова получим к нему доступ"
    ]
  },
  {
    "time": [
      99.023858,
      102.202123
    ],
    "en": [
      "we still won't be asked to use a username and password"
    ],
    "ru": [
      "нас по-прежнему не попросят использовать имя пользователя и пароль"
    ]
  },
  {
    "time": [
      102.202123,
      105.847023
    ],
    "en": [
      "we have to tell the console port to require a username and password"
    ],
    "ru": [
      "мы должны указать консольному порту, чтобы он запрашивал имя пользователя и пароль"
    ]
  },
  {
    "time": [
      105.847023,
      107.666403
    ],
    "en": [
      "so let's do that"
    ],
    "ru": [
      "так давай сделаем это"
    ]
  },
  {
    "time": [
      107.666403,
      111.195749
    ],
    "en": [
      "line console 0"
    ],
    "ru": [
      "линия консоли 0"
    ]
  },
  {
    "time": [
      111.195749,
      115.099835
    ],
    "en": [
      "if you remember when we configured the line password on the console"
    ],
    "ru": [
      "если вы помните, когда мы настраивали пароль линии на консоли"
    ]
  },
  {
    "time": [
      115.099835,
      119.456999
    ],
    "en": [
      "we use the command login to make it required to access the console port"
    ],
    "ru": [
      "мы используем команду login, чтобы она требовалась для доступа к консольному порту"
    ]
  },
  {
    "time": [
      119.456999,
      125.718569
    ],
    "en": [
      "this time however we want to instruct the router to use the local user database instead"
    ],
    "ru": [
      "на этот раз, однако, мы хотим проинструктировать маршрутизатор использовать вместо этого локальную базу данных пользователей."
    ]
  },
  {
    "time": [
      125.718569,
      128.192131
    ],
    "en": [
      "that is done with this command"
    ],
    "ru": [
      "это делается с помощью этой команды"
    ]
  },
  {
    "time": [
      128.192131,
      130.333457
    ],
    "en": [
      "login local"
    ],
    "ru": [
      "войти в систему"
    ]
  },
  {
    "time": [
      130.333457,
      132.823914
    ],
    "en": [
      "so that's step 2 and step 3"
    ],
    "ru": [
      "так что это шаг 2 и шаг 3"
    ]
  },
  {
    "time": [
      132.823914,
      139.543822
    ],
    "en": [
      "step 4 is to log out of the router and log in again with each account"
    ],
    "ru": [
      "Шаг 4 - выйти из маршрутизатора и снова войти в систему с каждой учетной записью."
    ]
  },
  {
    "time": [
      139.543822,
      144.113047
    ],
    "en": [
      "we're going to test whether or not the usernames and passwords are case sensitive"
    ],
    "ru": [
      "мы собираемся проверить, чувствительны ли имена пользователей и пароли к регистру"
    ]
  },
  {
    "time": [
      144.113047,
      149.430148
    ],
    "en": [
      "so I'll type end to return to privileged exec mode and then log out"
    ],
    "ru": [
      "поэтому я наберу end, чтобы вернуться в привилегированный режим exec, а затем выйду из системы"
    ]
  },
  {
    "time": [
      149.430148,
      156.124534
    ],
    "en": [
      "let's try the CCNA a user with the password cisco in lower case as we configured"
    ],
    "ru": [
      "давайте попробуем CCNA пользователя с паролем cisco в нижнем регистре, как мы настроили"
    ]
  },
  {
    "time": [
      156.124534,
      160.144318
    ],
    "en": [
      "it works let's log out again"
    ],
    "ru": [
      "это работает давай снова выйдем из системы"
    ]
  },
  {
    "time": [
      160.144318,
      163.104745
    ],
    "en": [
      "now I'll try the username in all caps"
    ],
    "ru": [
      "сейчас попробую имя пользователя заглавными буквами"
    ]
  },
  {
    "time": [
      163.104745,
      169.219869
    ],
    "en": [
      "with the password in lower case again 165.47374 as you can see it lets us log in"
    ],
    "ru": [
      "снова введите пароль в нижнем регистре 165.47374, как видите, это позволяет нам войти в систему"
    ]
  },
  {
    "time": [
      169.219869,
      172.185697
    ],
    "en": [
      "so the username is not case-sensitive"
    ],
    "ru": [
      "поэтому имя пользователя не чувствительно к регистру"
    ]
  },
  {
    "time": [
      172.185697,
      174.951694
    ],
    "en": [
      "now let's check the password"
    ],
    "ru": [
      "теперь давайте проверим пароль"
    ]
  },
  {
    "time": [
      174.951694,
      178.127445
    ],
    "en": [
      "I'll use the CCNA username again"
    ],
    "ru": [
      "Я снова буду использовать имя пользователя CCNA"
    ]
  },
  {
    "time": [
      178.127445,
      181.083492
    ],
    "en": [
      "doesn't matter if you type in a lowercase or uppercase"
    ],
    "ru": [
      "не имеет значения, в нижнем или верхнем регистре вы набираете"
    ]
  },
  {
    "time": [
      181.083492,
      184.278747
    ],
    "en": [
      "but this time I'll type the password in all caps"
    ],
    "ru": [
      "но на этот раз я наберу пароль заглавными буквами"
    ]
  },
  {
    "time": [
      184.278747,
      187.165127
    ],
    "en": [
      "although you can't see the characters as I type"
    ],
    "ru": [
      "хотя вы не можете видеть символы, когда я печатаю"
    ]
  },
  {
    "time": [
      187.165127,
      188.846703
    ],
    "en": [
      "it fails"
    ],
    "ru": [
      "это не удается"
    ]
  },
  {
    "time": [
      188.846703,
      190.869382
    ],
    "en": [
      "I'll try again in case I hit a wrong key"
    ],
    "ru": [
      "Я попробую еще раз, если нажму не ту клавишу"
    ]
  },
  {
    "time": [
      190.869382,
      194.460195
    ],
    "en": [
      "doesn't work"
    ],
    "ru": [
      "не работает"
    ]
  },
  {
    "time": [
      194.460195,
      197.604527
    ],
    "en": [
      "so the password is case-sensitive"
    ],
    "ru": [
      "поэтому пароль чувствителен к регистру"
    ]
  },
  {
    "time": [
      197.604527,
      210.253867
    ],
    "en": [
      "let's quickly try again with the CCNP username again to confirm 202.24125 I'll type the username alternating upper and lower case just to prove the point and I'll type the correct password which is all uppercase"
    ],
    "ru": [
      "давайте быстро попробуем еще раз с именем пользователя CCNP еще раз, чтобы подтвердить 202.24125 Я введу имя пользователя, чередуя верхний и нижний регистр, просто чтобы доказать, что я наберу правильный пароль, который все в верхнем регистре"
    ]
  },
  {
    "time": [
      210.253867,
      212.890302
    ],
    "en": [
      "it works"
    ],
    "ru": [
      "оно работает"
    ]
  },
  {
    "time": [
      212.890302,
      214.259465
    ],
    "en": [
      "log out again"
    ],
    "ru": [
      "выйти снова"
    ]
  },
  {
    "time": [
      214.259465,
      216.625441
    ],
    "en": [
      "this time I'll type the password in lowercase"
    ],
    "ru": [
      "на этот раз я наберу пароль в нижнем регистре"
    ]
  },
  {
    "time": [
      216.625441,
      222.287961
    ],
    "en": [
      "doesn't work so to summarize usernames are not case sensitive"
    ],
    "ru": [
      "не работает, поэтому для суммирования имен пользователей регистр не учитывается"
    ]
  },
  {
    "time": [
      222.287961,
      225.178669
    ],
    "en": [
      "but passwords are case sensitive"
    ],
    "ru": [
      "но пароли чувствительны к регистру"
    ]
  },
  {
    "time": [
      225.178669,
      233.075487
    ],
    "en": [
      "next I'll do one more demonstration even though this isn't part of the lab"
    ],
    "ru": [
      "Далее я проведу еще одну демонстрацию, хотя это не часть лаборатории"
    ]
  },
  {
    "time": [
      233.075487,
      238.387859
    ],
    "en": [
      "let me login again 234.81109 then enable show run"
    ],
    "ru": [
      "позвольте мне снова войти в систему 234.81109, затем включите show run"
    ]
  },
  {
    "time": [
      238.387859,
      240.992207
    ],
    "en": [
      "look at the usernames and passwords here"
    ],
    "ru": [
      "посмотрите имена пользователей и пароли здесь"
    ]
  },
  {
    "time": [
      240.992207,
      245.315422
    ],
    "en": [
      "we're going to add a new user named CCNA with all capitals"
    ],
    "ru": [
      "мы собираемся добавить нового пользователя с именем CCNA со всеми заглавными буквами"
    ]
  },
  {
    "time": [
      245.315422,
      248.912454
    ],
    "en": [
      "if we are correct about user names not being case sensitive"
    ],
    "ru": [
      "если мы правы в том, что имена пользователей не чувствительны к регистру"
    ]
  },
  {
    "time": [
      248.912454,
      253.136537
    ],
    "en": [
      "it should replace the current user rather than actually creating a new user"
    ],
    "ru": [
      "он должен заменить текущего пользователя, а не создавать нового пользователя"
    ]
  },
  {
    "time": [
      253.136537,
      259.516593
    ],
    "en": [
      "conf t user named CCNA password router"
    ],
    "ru": [
      "conf t пользователь с именем CCNA пароль маршрутизатор"
    ]
  },
  {
    "time": [
      259.516593,
      265.766983
    ],
    "en": [
      "do show run as you can see it didn't actually create a new user"
    ],
    "ru": [
      "показывать запуск, поскольку вы можете видеть, что на самом деле он не создавал нового пользователя"
    ]
  },
  {
    "time": [
      265.766983,
      268.576796
    ],
    "en": [
      "it still displays the user name in the lower case"
    ],
    "ru": [
      "он по-прежнему отображает имя пользователя в нижнем регистре"
    ]
  },
  {
    "time": [
      268.576796,
      270.204111
    ],
    "en": [
      "even though I typed in an upper case"
    ],
    "ru": [
      "хотя я набирал в верхнем регистре"
    ]
  },
  {
    "time": [
      270.204111,
      273.428537
    ],
    "en": [
      "but the password is now router instead of Cisco"
    ],
    "ru": [
      "но пароль теперь роутер вместо Cisco"
    ]
  },
  {
    "time": [
      273.428537,
      281.112416
    ],
    "en": [
      "thank you for watching I hope this lab and video have been helpful for you"
    ],
    "ru": [
      "Спасибо за просмотр. Надеюсь, эта лабораторная работа и видео были для вас полезны."
    ]
  },
  {
    "time": [
      281.112416,
      285.802063
    ],
    "en": [
      "please subscribe for future labs like this which will be released weekly"
    ],
    "ru": [
      "пожалуйста, подпишитесь на будущие лабораторные работы, которые будут выпускаться еженедельно"
    ]
  },
  {
    "time": [
      285.802063,
      290.979391
    ],
    "en": [
      "if you have requests for any specific labs let me know in the comment section"
    ],
    "ru": [
      "если у вас есть запросы по каким-либо конкретным лабораториям, дайте мне знать в разделе комментариев"
    ]
  },
  {
    "time": [
      290.979391,
      296.860053
    ],
    "en": [
      "if you want to support my channel I accept Bitcoin donations via the address in the description"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, я принимаю пожертвования в биткойнах по адресу в описании"
    ]
  },
  {
    "time": [
      296.860053,
      300.166829
    ],
    "en": [
      "I am also a brave verified publisher"
    ],
    "ru": [
      "Я также храбрый проверенный издатель"
    ]
  },
  {
    "time": [
      300.166829,
      305.667053
    ],
    "en": [
      "and accept bat or basic attention token donations in the brave browser"
    ],
    "ru": [
      "и принимайте пожертвования летучих мышей или токенов основного внимания в смелом браузере"
    ]
  },
  {
    "time": [
      305.667053,
      305.667053
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
      305.667053,
      305.667053
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
      305.667053,
      305.667053
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]