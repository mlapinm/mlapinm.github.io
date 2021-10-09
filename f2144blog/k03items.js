let objs = [
  {
    "time": [
      0.0,
      7.162907
    ],
    "en": [
      "welcome to this free CCNA packet tracer practice lab 3.15314 you can download the lab file from the link in the description"
    ],
    "ru": [
      "добро пожаловать в эту бесплатную практическую лабораторию CCNA 3.15314, вы можете скачать лабораторный файл по ссылке в описании"
    ]
  },
  {
    "time": [
      7.162907,
      18.869851
    ],
    "en": [
      "in this lab we will be working with one router r1 and one PC PC one 14.12432 we will use PC one to connect to the console port of r1"
    ],
    "ru": [
      "В этой лабораторной работе мы будем работать с одним маршрутизатором r1 и одним ПК ПК 14.12432 мы будем использовать один ПК для подключения к консольному порту r1."
    ]
  },
  {
    "time": [
      18.869851,
      21.118842
    ],
    "en": [
      "and perform configurations from there"
    ],
    "ru": [
      "и выполнить настройки оттуда"
    ]
  },
  {
    "time": [
      21.118842,
      27.184047
    ],
    "en": [
      "we will also set up a password to protect connections from the console port of r1"
    ],
    "ru": [
      "мы также установим пароль для защиты соединений от консольного порта r1"
    ]
  },
  {
    "time": [
      27.184047,
      33.774879
    ],
    "en": [
      "try to complete the lab on your own first 30.53352 and continue watching this video if you have trouble"
    ],
    "ru": [
      "попробуйте сначала пройти лабораторную работу самостоятельно 30.53352 и продолжайте смотреть это видео, если у вас возникнут проблемы"
    ]
  },
  {
    "time": [
      33.774879,
      36.419122
    ],
    "en": [
      "or watch it afterwards to check your solution"
    ],
    "ru": [
      "или посмотрите его потом, чтобы проверить свое решение"
    ]
  },
  {
    "time": [
      36.419122,
      45.152569
    ],
    "en": [
      "step one is to connect PC ones rs-232 port to our ones console port"
    ],
    "ru": [
      "Шаг первый - подключить один порт RS-232 ПК к нашему консольному порту"
    ]
  },
  {
    "time": [
      45.152569,
      54.561567
    ],
    "en": [
      "click on connections in the bottom left corner of the screen 49.17052 this is the console cable as indicated at the bottom of the screen"
    ],
    "ru": [
      "нажмите на соединения в нижнем левом углу экрана. 49.17052 это консольный кабель, как показано внизу экрана."
    ]
  },
  {
    "time": [
      54.561567,
      62.507949
    ],
    "en": [
      "connect it to the rs-232 port of PC one 59.95001 and then to the console port of r1"
    ],
    "ru": [
      "подключите его к порту RS-232 ПК один 59.95001, а затем к консольному порту r1"
    ]
  },
  {
    "time": [
      62.507949,
      64.385472
    ],
    "en": [
      "that's step one"
    ],
    "ru": [
      "это первый шаг"
    ]
  },
  {
    "time": [
      64.385472,
      74.499574
    ],
    "en": [
      "step two is to use the console connection to configure the hostname of r1 from pc1"
    ],
    "ru": [
      "Шаг второй - использовать консольное соединение для настройки имени хоста r1 с pc1"
    ]
  },
  {
    "time": [
      74.499574,
      84.321932
    ],
    "en": [
      "to do so click on PC one click on desktop select terminal and then select ok to accept the default configurations"
    ],
    "ru": [
      "для этого щелкните ПК одним щелчком мыши на рабочем столе выберите терминал, а затем выберите ОК, чтобы принять конфигурации по умолчанию"
    ]
  },
  {
    "time": [
      84.321932,
      90.848294
    ],
    "en": [
      "we're now connected to r1 via PC one and can perform configurations as usual"
    ],
    "ru": [
      "теперь мы подключены к r1 через один ПК и можем выполнять настройки как обычно"
    ]
  },
  {
    "time": [
      90.848294,
      97.999229
    ],
    "en": [
      "now we have to change the hostname of the router to r1 as we've done before in previous labs"
    ],
    "ru": [
      "теперь нам нужно изменить имя хоста маршрутизатора на r1, как мы делали раньше в предыдущих лабораторных работах."
    ]
  },
  {
    "time": [
      97.999229,
      104.726566
    ],
    "en": [
      "unable to enter privileged exec mode 101.20266 conf t enter global configuration mode"
    ],
    "ru": [
      "невозможно войти в привилегированный режим exec 101.20266 conf t войти в режим глобальной конфигурации"
    ]
  },
  {
    "time": [
      104.726566,
      106.476107
    ],
    "en": [
      "hostname r1"
    ],
    "ru": [
      "имя хоста r1"
    ]
  },
  {
    "time": [
      106.476107,
      108.726232
    ],
    "en": [
      "that's it for step two"
    ],
    "ru": [
      "вот и все для второго шага"
    ]
  },
  {
    "time": [
      108.726232,
      116.328196
    ],
    "en": [
      "step three is to set the enable secret of r1 to Cisco"
    ],
    "ru": [
      "Шаг третий - установить для Cisco секретный ключ включения r1."
    ]
  },
  {
    "time": [
      116.328196,
      120.926073
    ],
    "en": [
      "if you remember the enable secret is a password that protects privileged exec mode"
    ],
    "ru": [
      "если вы помните, что секрет включения - это пароль, который защищает привилегированный режим exec"
    ]
  },
  {
    "time": [
      120.926073,
      128.360855
    ],
    "en": [
      "and is encrypted by default 123.2163 it's configured from global configuration mode 126.6641 which we are already in"
    ],
    "ru": [
      "и по умолчанию зашифрован 123.2163, он настроен из режима глобальной конфигурации 126.6641, в котором мы уже находимся"
    ]
  },
  {
    "time": [
      128.360855,
      132.805721
    ],
    "en": [
      "enable secret Cisco 130.72325 step three is now complete"
    ],
    "ru": [
      "включить секрет Cisco 130.72325, шаг третий завершен"
    ]
  },
  {
    "time": [
      132.805721,
      140.763358
    ],
    "en": [
      "step four is to set the console password of r1 to CCNA"
    ],
    "ru": [
      "Шаг четвертый - установить пароль консоли r1 на CCNA"
    ]
  },
  {
    "time": [
      140.763358,
      145.884646
    ],
    "en": [
      "we also have to ensure that it is required to connect to r1 via the console port"
    ],
    "ru": [
      "мы также должны убедиться, что требуется подключение к r1 через консольный порт"
    ]
  },
  {
    "time": [
      145.884646,
      150.675043
    ],
    "en": [
      "to do so we have to enter line configuration mode for the console port"
    ],
    "ru": [
      "для этого мы должны войти в режим конфигурации линии для консольного порта"
    ]
  },
  {
    "time": [
      150.675043,
      156.148803
    ],
    "en": [
      "that is done with the command line console 0 from global configuration mode"
    ],
    "ru": [
      "это делается с помощью консоли 0 командной строки из режима глобальной конфигурации"
    ]
  },
  {
    "time": [
      156.148803,
      159.949766
    ],
    "en": [
      "the zero refers to the number of the port"
    ],
    "ru": [
      "ноль относится к номеру порта"
    ]
  },
  {
    "time": [
      159.949766,
      164.986256
    ],
    "en": [
      "and since there is only one console port there is only line console 0"
    ],
    "ru": [
      "и поскольку есть только один консольный порт, есть только строка console 0"
    ]
  },
  {
    "time": [
      164.986256,
      168.665267
    ],
    "en": [
      "there is no line console 1 2 3 4 etc"
    ],
    "ru": [
      "нет линии консоли 1 2 3 4 и т. д."
    ]
  },
  {
    "time": [
      168.665267,
      174.000063
    ],
    "en": [
      "from here we set the password to CCNA with a very simple command"
    ],
    "ru": [
      "отсюда мы устанавливаем пароль на CCNA с помощью очень простой команды"
    ]
  },
  {
    "time": [
      174.000063,
      176.104199
    ],
    "en": [
      "password CCNA"
    ],
    "ru": [
      "пароль CCNA"
    ]
  },
  {
    "time": [
      176.104199,
      178.683994
    ],
    "en": [
      "now let's try out our password"
    ],
    "ru": [
      "теперь давайте попробуем наш пароль"
    ]
  },
  {
    "time": [
      178.683994,
      182.966503
    ],
    "en": [
      "I'll use the end command to return to privileged exec mode"
    ],
    "ru": [
      "Я воспользуюсь командой end, чтобы вернуться в привилегированный режим exec"
    ]
  },
  {
    "time": [
      182.966503,
      188.895884
    ],
    "en": [
      "and then exit to quit the connection 185.89367 but I'm not asked for a password"
    ],
    "ru": [
      "а затем выйдите, чтобы выйти из соединения 185.89367, но у меня не спрашивают пароль"
    ]
  },
  {
    "time": [
      188.895884,
      195.023131
    ],
    "en": [
      "if I type enable I have to use the password Cisco to access privileged exec mode"
    ],
    "ru": [
      "если я наберу \"включить\", мне нужно будет использовать пароль Cisco для доступа к привилегированному режиму выполнения."
    ]
  },
  {
    "time": [
      195.023131,
      201.141207
    ],
    "en": [
      "but why wasn't I asked to use the password CCNA to connect to the console port again"
    ],
    "ru": [
      "но почему меня не попросили использовать пароль CCNA для повторного подключения к консольному порту"
    ]
  },
  {
    "time": [
      201.141207,
      205.858417
    ],
    "en": [
      "this is because we missed one other command in line configuration mode"
    ],
    "ru": [
      "это потому, что мы пропустили еще одну команду в режиме конфигурации строки"
    ]
  },
  {
    "time": [
      205.858417,
      208.248564
    ],
    "en": [
      "let's return there once more"
    ],
    "ru": [
      "давай вернемся туда еще раз"
    ]
  },
  {
    "time": [
      208.248564,
      211.022927
    ],
    "en": [
      "conf t line con zero"
    ],
    "ru": [
      "conf t line con zero"
    ]
  },
  {
    "time": [
      211.022927,
      219.504948
    ],
    "en": [
      "now we have to use the command login to tell the router that the password must be used to connect to the console"
    ],
    "ru": [
      "теперь мы должны использовать команду login, чтобы сообщить маршрутизатору, что пароль должен использоваться для подключения к консоли"
    ]
  },
  {
    "time": [
      219.504948,
      223.498016
    ],
    "en": [
      "let's try again and exit"
    ],
    "ru": [
      "давай попробуем еще раз и выйдем"
    ]
  },
  {
    "time": [
      223.498016,
      224.464199
    ],
    "en": [
      "and there we go"
    ],
    "ru": [
      "и вот мы идем"
    ]
  },
  {
    "time": [
      224.464199,
      227.866802
    ],
    "en": [
      "now we are asked for the console password of CCNA"
    ],
    "ru": [
      "теперь нас спрашивают пароль консоли CCNA"
    ]
  },
  {
    "time": [
      227.866802,
      233.469493
    ],
    "en": [
      "now finally let's check the running configuration for the password and see if it's encrypted"
    ],
    "ru": [
      "теперь, наконец, давайте проверим текущую конфигурацию для пароля и посмотрим, зашифрован ли он"
    ]
  },
  {
    "time": [
      233.469493,
      238.662364
    ],
    "en": [
      "enable password cisco show run"
    ],
    "ru": [
      "включить пароль cisco show run"
    ]
  },
  {
    "time": [
      238.662364,
      241.440084
    ],
    "en": [
      "the line section is at the bottom of the running config"
    ],
    "ru": [
      "секция строки находится внизу работающей конфигурации"
    ]
  },
  {
    "time": [
      241.440084,
      245.280339
    ],
    "en": [
      "so i'll tap the spacebar a few times to scroll down"
    ],
    "ru": [
      "поэтому я несколько раз коснусь пробела, чтобы прокрутить вниз"
    ]
  },
  {
    "time": [
      245.280339,
      250.591846
    ],
    "en": [
      "there it is line con zero password CCNA"
    ],
    "ru": [
      "там строка с нулевым паролем CCNA"
    ]
  },
  {
    "time": [
      250.591846,
      254.651493
    ],
    "en": [
      "as you can see it is not encrypted 252.54017 that's all for step four"
    ],
    "ru": [
      "как видите, он не зашифрован 252.54017, это все для четвертого шага"
    ]
  },
  {
    "time": [
      254.651493,
      267.735935
    ],
    "en": [
      "Step five is to enable password encryption to protect this console password 262.69548 compte to enter global configuration mode 265.66923 then the same command as before"
    ],
    "ru": [
      "Шаг пятый - включить шифрование пароля для защиты этого пароля 262.69548 консоли, чтобы войти в режим глобальной конфигурации 265.66923, затем выполнить ту же команду, что и раньше."
    ]
  },
  {
    "time": [
      267.735935,
      270.058735
    ],
    "en": [
      "service password encryption"
    ],
    "ru": [
      "шифрование сервисного пароля"
    ]
  },
  {
    "time": [
      270.058735,
      273.006438
    ],
    "en": [
      "let's drop back to privileged exec mode"
    ],
    "ru": [
      "вернемся в привилегированный режим exec"
    ]
  },
  {
    "time": [
      273.006438,
      275.203606
    ],
    "en": [
      "and then use show run to confirm"
    ],
    "ru": [
      "а затем используйте show run, чтобы подтвердить"
    ]
  },
  {
    "time": [
      275.203606,
      280.508029
    ],
    "en": [
      "scroll down to the bottom and you can see the password is now encrypted"
    ],
    "ru": [
      "прокрутите вниз, и вы увидите, что пароль теперь зашифрован"
    ]
  },
  {
    "time": [
      280.508029,
      283.336426
    ],
    "en": [
      "finally let's save the configuration"
    ],
    "ru": [
      "наконец, давайте сохраним конфигурацию"
    ]
  },
  {
    "time": [
      283.336426,
      288.055578
    ],
    "en": [
      "let's use the copy running-config startup config command"
    ],
    "ru": [
      "давайте использовать команду конфигурации запуска copy running-config"
    ]
  },
  {
    "time": [
      288.055578,
      290.352434
    ],
    "en": [
      "shorten to copy run start"
    ],
    "ru": [
      "сократить, чтобы скопировать запуск запуска"
    ]
  },
  {
    "time": [
      290.352434,
      292.819539
    ],
    "en": [
      "that's all for this lab"
    ],
    "ru": [
      "это все для этой лаборатории"
    ]
  },
  {
    "time": [
      292.819539,
      299.131444
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
      299.131444,
      303.715134
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
      303.715134,
      308.742031
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
      308.742031,
      315.017553
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
      315.017553,
      323.729292
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
      323.729292,
      323.729292
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
      323.729292,
      323.729292
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
      323.729292,
      323.729292
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]