let objs = [
  {
    "time": [
      0.0,
      4.785616
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
      4.785616,
      8.262735
    ],
    "en": [
      "you can download the lab file from the link in the description"
    ],
    "ru": [
      "скачать лабораторный файл можно по ссылке в описании"
    ]
  },
  {
    "time": [
      8.262735,
      13.799046
    ],
    "en": [
      "in this lab we will review the creation of a local user database on the router"
    ],
    "ru": [
      "в этой лабораторной работе мы рассмотрим создание локальной базы данных пользователей на маршрутизаторе."
    ]
  },
  {
    "time": [
      13.799046,
      16.305568
    ],
    "en": [
      "and introduced the banner function"
    ],
    "ru": [
      "и представил функцию баннера"
    ]
  },
  {
    "time": [
      16.305568,
      20.578399
    ],
    "en": [
      "this will be a fairly short lab but try to complete it on your own first"
    ],
    "ru": [
      "это будет довольно короткая лабораторная работа, но сначала попробуйте выполнить ее самостоятельно."
    ]
  },
  {
    "time": [
      20.578399,
      25.807395
    ],
    "en": [
      "and then continue watching this video if you have trouble or watch it after to check your solution"
    ],
    "ru": [
      "а затем продолжайте просмотр этого видео, если у вас возникнут проблемы, или просмотрите его позже, чтобы проверить свое решение."
    ]
  },
  {
    "time": [
      25.807395,
      33.388313
    ],
    "en": [
      "step one is to use PC one to connect to r1 via the console port"
    ],
    "ru": [
      "Шаг первый - использовать ПК один для подключения к r1 через консольный порт"
    ]
  },
  {
    "time": [
      33.388313,
      35.850812
    ],
    "en": [
      "they're already connected by a cable"
    ],
    "ru": [
      "они уже подключены кабелем"
    ]
  },
  {
    "time": [
      35.850812,
      45.349398
    ],
    "en": [
      "so let's click on PC one desktop terminal and press ok to accept the default configurations"
    ],
    "ru": [
      "поэтому давайте нажмем на ПК один настольный терминал и нажмите ОК, чтобы принять конфигурации по умолчанию"
    ]
  },
  {
    "time": [
      45.349398,
      49.941079
    ],
    "en": [
      "step two is to create two users on r1"
    ],
    "ru": [
      "Шаг второй - создать двух пользователей на r1"
    ]
  },
  {
    "time": [
      49.941079,
      53.36842
    ],
    "en": [
      "last time we created user accounts with passwords"
    ],
    "ru": [
      "в прошлый раз мы создавали учетные записи пользователей с паролями"
    ]
  },
  {
    "time": [
      53.36842,
      55.760241
    ],
    "en": [
      "this time we will use secrets"
    ],
    "ru": [
      "на этот раз мы будем использовать секреты"
    ]
  },
  {
    "time": [
      55.760241,
      59.7377
    ],
    "en": [
      "same as with the enable password and enable secret"
    ],
    "ru": [
      "так же, как с паролем включения и секретом включения"
    ]
  },
  {
    "time": [
      59.7377,
      63.44439
    ],
    "en": [
      "passwords are not encrypted but secrets are encrypted by default"
    ],
    "ru": [
      "пароли не зашифрованы, но секреты зашифрованы по умолчанию"
    ]
  },
  {
    "time": [
      63.44439,
      73.883946
    ],
    "en": [
      "enable conf t username CCNA secret Cisco with a capital C"
    ],
    "ru": [
      "enable conf t имя пользователя CCNA secret Cisco с большой буквы"
    ]
  },
  {
    "time": [
      73.883946,
      79.015255
    ],
    "en": [
      "remember that user name isn't case sensitive but the password or secret is"
    ],
    "ru": [
      "помните, что имя пользователя не чувствительно к регистру, но пароль или секрет"
    ]
  },
  {
    "time": [
      79.015255,
      85.373474
    ],
    "en": [
      "next user username CCNP secret Cisco"
    ],
    "ru": [
      "следующий пользователь имя пользователя CCNP секрет Cisco"
    ]
  },
  {
    "time": [
      85.373474,
      90.523496
    ],
    "en": [
      "I'll quickly type do show run to check that their encrypted"
    ],
    "ru": [
      "Я быстро наберу do show run, чтобы убедиться, что они зашифрованы."
    ]
  },
  {
    "time": [
      90.523496,
      95.760803
    ],
    "en": [
      "as you can see they are encrypted by default"
    ],
    "ru": [
      "как видите, по умолчанию они зашифрованы"
    ]
  },
  {
    "time": [
      95.760803,
      102.234008
    ],
    "en": [
      "step 3 is to set the console port to use the local database to authenticate users"
    ],
    "ru": [
      "Шаг 3 - настроить консольный порт для использования локальной базы данных для аутентификации пользователей."
    ]
  },
  {
    "time": [
      102.234008,
      107.375732
    ],
    "en": [
      "line console 0 login local"
    ],
    "ru": [
      "строка консоли 0 логин локальный"
    ]
  },
  {
    "time": [
      107.375732,
      108.498419
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
      108.498419,
      117.90453
    ],
    "en": [
      "step 4 is to set a message of the day banner of welcome to packet racer"
    ],
    "ru": [
      "Шаг 4 - установить приветственное сообщение дня для пакетного гонщика"
    ]
  },
  {
    "time": [
      117.90453,
      121.129215
    ],
    "en": [
      "and a login banner of authorized users only"
    ],
    "ru": [
      "и баннер для входа только авторизованных пользователей"
    ]
  },
  {
    "time": [
      121.129215,
      126.5625
    ],
    "en": [
      "banners are messages that display before or after users log in"
    ],
    "ru": [
      "баннеры - это сообщения, которые отображаются до или после входа пользователя в систему."
    ]
  },
  {
    "time": [
      126.5625,
      130.78868
    ],
    "en": [
      "in this case the message of the day banner will be displayed above the login banner"
    ],
    "ru": [
      "в этом случае сообщение баннера дня будет отображаться над баннером входа в систему"
    ]
  },
  {
    "time": [
      130.78868,
      133.959567
    ],
    "en": [
      "and both will be displayed before our user logs in"
    ],
    "ru": [
      "и оба будут отображаться до того, как наш пользователь войдет в систему"
    ]
  },
  {
    "time": [
      133.959567,
      140.799292
    ],
    "en": [
      "so exit to make the banner of the day we use this command"
    ],
    "ru": [
      "так что выйдите, чтобы сделать знамя дня, мы используем эту команду"
    ]
  },
  {
    "time": [
      140.799292,
      146.400326
    ],
    "en": [
      "banner motd then I'll use the question mark to show the next option"
    ],
    "ru": [
      "banner motd, тогда я воспользуюсь вопросительным знаком, чтобы показать следующий вариант"
    ]
  },
  {
    "time": [
      146.400326,
      155.173746
    ],
    "en": [
      "as you can see we need to enter a delimited character to indicate the start and end of the message"
    ],
    "ru": [
      "как видите, нам нужно ввести символ с разделителями, чтобы указать начало и конец сообщения"
    ]
  },
  {
    "time": [
      155.173746,
      161.638417
    ],
    "en": [
      "if you type the message directly it will think that the first character is the delimiting character"
    ],
    "ru": [
      "если вы наберете сообщение напрямую, оно подумает, что первый символ - это ограничивающий символ"
    ]
  },
  {
    "time": [
      161.638417,
      164.300974
    ],
    "en": [
      "and it will be excluded from the message itself"
    ],
    "ru": [
      "и он будет исключен из самого сообщения"
    ]
  },
  {
    "time": [
      164.300974,
      167.71324
    ],
    "en": [
      "you can use whatever you want but I'll use an asterisk"
    ],
    "ru": [
      "вы можете использовать все, что хотите, но я буду использовать звездочку"
    ]
  },
  {
    "time": [
      167.71324,
      171.674127
    ],
    "en": [
      "asterisk welcome to packet tracer asterisk"
    ],
    "ru": [
      "звездочка добро пожаловать в пакет трассировщик звездочка"
    ]
  },
  {
    "time": [
      171.674127,
      176.862234
    ],
    "en": [
      "okay now the same process for the log in banner"
    ],
    "ru": [
      "Хорошо, теперь тот же процесс для баннера входа в систему"
    ]
  },
  {
    "time": [
      176.862234,
      185.731055
    ],
    "en": [
      "banner login asterisk authorized users only asterisk"
    ],
    "ru": [
      "баннер логин звездочка только авторизованные пользователи звездочка"
    ]
  },
  {
    "time": [
      185.731055,
      188.190605
    ],
    "en": [
      "now we've set up the two banners"
    ],
    "ru": [
      "теперь мы установили два баннера"
    ]
  },
  {
    "time": [
      188.190605,
      192.963624
    ],
    "en": [
      "finally let's log out and see if our messages work"
    ],
    "ru": [
      "наконец, давайте выйдем из системы и посмотрим, работают ли наши сообщения"
    ]
  },
  {
    "time": [
      192.963624,
      199.083479
    ],
    "en": [
      "and logout there we go"
    ],
    "ru": [
      "и выйдите из системы, мы идем"
    ]
  },
  {
    "time": [
      199.083479,
      203.762561
    ],
    "en": [
      "before we log in you can see our message of the day and then our log in banner"
    ],
    "ru": [
      "прежде чем мы войдем в систему, вы можете увидеть наше сообщение дня, а затем наш баннер для входа в систему"
    ]
  },
  {
    "time": [
      203.762561,
      210.085158
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
      210.085158,
      213.339962
    ],
    "en": [
      "please subscribe for future labs like this"
    ],
    "ru": [
      "пожалуйста, подпишитесь на будущие подобные лаборатории"
    ]
  },
  {
    "time": [
      213.339962,
      215.212534
    ],
    "en": [
      "which will be released weekly"
    ],
    "ru": [
      "который будет выходить еженедельно"
    ]
  },
  {
    "time": [
      215.212534,
      219.725183
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
      219.725183,
      226.868826
    ],
    "en": [
      "if you want to support my channel I accept Bitcoin and aetherium donations via the addresses in the description"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, я принимаю пожертвования биткойнами и эфириумом по адресам в описании"
    ]
  },
  {
    "time": [
      226.868826,
      235.635523
    ],
    "en": [
      "I am also a brave verified publisher and accept bat or basic attention token donations in the brave browser"
    ],
    "ru": [
      "Я также храбрый проверенный издатель и принимаю пожертвования летучих мышей или базовых токенов внимания в смелом браузере."
    ]
  },
  {
    "time": [
      235.635523,
      235.635523
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
      235.635523,
      235.635523
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
      235.635523,
      235.635523
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]