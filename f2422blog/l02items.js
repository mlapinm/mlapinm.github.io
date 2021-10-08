let objs = [
  {
    "time": [
      0.0,
      5.510029
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
      5.510029,
      9.114439
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
      9.114439,
      16.887107
    ],
    "en": [
      "in this lab like the previous one we will be working with two routers r1 and r2"
    ],
    "ru": [
      "В этой лабораторной работе, как и в предыдущей, мы будем работать с двумя маршрутизаторами r1 и r2."
    ]
  },
  {
    "time": [
      16.887107,
      24.713424
    ],
    "en": [
      "this time we will configure both an enable password and an enable secret and contrast the two"
    ],
    "ru": [
      "на этот раз мы настроим как пароль включения, так и секрет включения и сопоставим два"
    ]
  },
  {
    "time": [
      24.713424,
      30.910102
    ],
    "en": [
      "again I will only work with one of the routers in this video for the sake of time"
    ],
    "ru": [
      "Опять же, я буду работать только с одним из маршрутизаторов в этом видео, чтобы сэкономить время"
    ]
  },
  {
    "time": [
      30.910102,
      35.799987
    ],
    "en": [
      "but I recommend that you perform the configurations on both of the routers for practice"
    ],
    "ru": [
      "но я рекомендую вам выполнить настройку на обоих маршрутизаторах для практики."
    ]
  },
  {
    "time": [
      35.799987,
      38.084682
    ],
    "en": [
      "even though it's not necessary for this lab"
    ],
    "ru": [
      "даже если это не обязательно для этой лаборатории"
    ]
  },
  {
    "time": [
      38.084682,
      44.175245
    ],
    "en": [
      "also some of the steps here are things we've already done in the previous lab"
    ],
    "ru": [
      "также некоторые из шагов, которые мы уже сделали в предыдущей лабораторной работе"
    ]
  },
  {
    "time": [
      44.175245,
      46.075025
    ],
    "en": [
      "this is on purpose"
    ],
    "ru": [
      "это специально"
    ]
  },
  {
    "time": [
      46.075025,
      53.080736
    ],
    "en": [
      "I don't know about you but for me doing something just once isn't sufficient for me to feel confident that I can remember it"
    ],
    "ru": [
      "Не знаю, как вы, но для меня, сделав что-то один раз, недостаточно, чтобы я был уверен, что могу это запомнить"
    ]
  },
  {
    "time": [
      53.080736,
      57.118296
    ],
    "en": [
      "see if you can complete the lab yourself first"
    ],
    "ru": [
      "сначала посмотри, сможешь ли ты пройти лабораторию самостоятельно"
    ]
  },
  {
    "time": [
      57.118296,
      63.254319
    ],
    "en": [
      "and then continue watching this video if you have any trouble or watch it afterwards to check your solution"
    ],
    "ru": [
      "а затем продолжайте смотреть это видео, если у вас возникнут проблемы, или просмотрите его позже, чтобы проверить свое решение."
    ]
  },
  {
    "time": [
      63.254319,
      73.870997
    ],
    "en": [
      "step one is to connect the two routers by their Gigabit Ethernet 0 0 interfaces"
    ],
    "ru": [
      "Шаг первый - соединить два маршрутизатора через их интерфейсы Gigabit Ethernet 0 0."
    ]
  },
  {
    "time": [
      73.870997,
      78.039791
    ],
    "en": [
      "to do this click on the connections in the bottom left corner"
    ],
    "ru": [
      "для этого нажмите на соединения в нижнем левом углу"
    ]
  },
  {
    "time": [
      78.039791,
      85.498783
    ],
    "en": [
      "select the cable and attach it to the gig 0 0 interface on r1 and then on r2"
    ],
    "ru": [
      "выберите кабель и подключите его к интерфейсу gig 0 0 на r1, а затем на r2"
    ]
  },
  {
    "time": [
      85.498783,
      88.081214
    ],
    "en": [
      "that's all there is to step 1"
    ],
    "ru": [
      "это все, что нужно сделать для шага 1"
    ]
  },
  {
    "time": [
      88.081214,
      96.757249
    ],
    "en": [
      "step 2 is to set the hostname of each router according to the network diagram"
    ],
    "ru": [
      "Шаг 2 - установить имя хоста каждого маршрутизатора в соответствии с сетевой схемой."
    ]
  },
  {
    "time": [
      96.757249,
      99.349985
    ],
    "en": [
      "that is to r1 and r2"
    ],
    "ru": [
      "то есть к r1 и r2"
    ]
  },
  {
    "time": [
      99.349985,
      104.960144
    ],
    "en": [
      "let's click on our one and select CLI to access the command-line interface"
    ],
    "ru": [
      "нажмите на наш и выберите CLI для доступа к интерфейсу командной строки"
    ]
  },
  {
    "time": [
      104.960144,
      109.00315
    ],
    "en": [
      "again we can see that the routers hostname is currently router"
    ],
    "ru": [
      "снова мы видим, что имя хоста маршрутизатора в настоящее время - router"
    ]
  },
  {
    "time": [
      109.00315,
      114.124844
    ],
    "en": [
      "to set the hostname we have to be in global configuration mode"
    ],
    "ru": [
      "чтобы установить имя хоста, мы должны быть в режиме глобальной конфигурации"
    ]
  },
  {
    "time": [
      114.124844,
      116.841509
    ],
    "en": [
      "currently we are in exec mode"
    ],
    "ru": [
      "в настоящее время мы находимся в режиме exec"
    ]
  },
  {
    "time": [
      116.841509,
      121.29031
    ],
    "en": [
      "as indicated by the greater than sign next to the current router name"
    ],
    "ru": [
      "на что указывает знак \"больше\" рядом с текущим именем маршрутизатора"
    ]
  },
  {
    "time": [
      121.29031,
      126.732595
    ],
    "en": [
      "alt ipn or an able to enter privileged exec mode"
    ],
    "ru": [
      "alt ipn или возможность войти в привилегированный режим exec"
    ]
  },
  {
    "time": [
      126.732595,
      133.594869
    ],
    "en": [
      "this is indicated by the pound sign or hash tag whatever you want to call it next to the host name"
    ],
    "ru": [
      "на это указывает знак решетки или хэш-тег, как вы хотите его назвать, рядом с именем хоста"
    ]
  },
  {
    "time": [
      133.594869,
      140.845422
    ],
    "en": [
      "from here I'll type compte or configure terminal to reach global configuration mode"
    ],
    "ru": [
      "отсюда я наберу compte или настрою терминал, чтобы перейти в режим глобальной конфигурации"
    ]
  },
  {
    "time": [
      140.845422,
      147.324613
    ],
    "en": [
      "from here I'll use the host name r1 command to change the host name to r1"
    ],
    "ru": [
      "отсюда я буду использовать команду имени хоста r1, чтобы изменить имя хоста на r1"
    ]
  },
  {
    "time": [
      147.324613,
      151.745561
    ],
    "en": [
      "you can see immediately that the host name has changed to r1"
    ],
    "ru": [
      "сразу видно, что имя хоста изменилось на r1"
    ]
  },
  {
    "time": [
      151.745561,
      154.373796
    ],
    "en": [
      "step 2 is now complete"
    ],
    "ru": [
      "шаг 2 теперь завершен"
    ]
  },
  {
    "time": [
      154.373796,
      161.972024
    ],
    "en": [
      "step three is to set the enable password to Cisco"
    ],
    "ru": [
      "Шаг третий - установить пароль включения для Cisco"
    ]
  },
  {
    "time": [
      161.972024,
      164.776344
    ],
    "en": [
      "this is the same step as in the previous lab"
    ],
    "ru": [
      "это тот же шаг, что и в предыдущей лабораторной работе"
    ]
  },
  {
    "time": [
      164.776344,
      168.174473
    ],
    "en": [
      "since we are already in global configuration mode"
    ],
    "ru": [
      "поскольку мы уже находимся в режиме глобальной конфигурации"
    ]
  },
  {
    "time": [
      168.174473,
      173.718627
    ],
    "en": [
      "I just have to enter an able password Cisco to set the enable password"
    ],
    "ru": [
      "Мне просто нужно ввести действующий пароль Cisco, чтобы установить пароль включения"
    ]
  },
  {
    "time": [
      173.718627,
      175.70937
    ],
    "en": [
      "that's step three"
    ],
    "ru": [
      "это шаг третий"
    ]
  },
  {
    "time": [
      175.70937,
      183.144987
    ],
    "en": [
      "step four is new to this lab now"
    ],
    "ru": [
      "Шаг четвертый - новый для этой лаборатории"
    ]
  },
  {
    "time": [
      183.144987,
      187.017516
    ],
    "en": [
      "we must set the enable secret to CCNA"
    ],
    "ru": [
      "мы должны установить секрет включения в CCNA"
    ]
  },
  {
    "time": [
      187.017516,
      189.709976
    ],
    "en": [
      "what is an enable secret"
    ],
    "ru": [
      "что такое секрет включения"
    ]
  },
  {
    "time": [
      189.709976,
      194.661524
    ],
    "en": [
      "well you may recall that the enable password is not encrypted by default"
    ],
    "ru": [
      "ну, вы можете вспомнить, что пароль включения по умолчанию не зашифрован"
    ]
  },
  {
    "time": [
      194.661524,
      198.858348
    ],
    "en": [
      "that means it is stored in clear text in the configuration"
    ],
    "ru": [
      "это означает, что он хранится в виде открытого текста в конфигурации"
    ]
  },
  {
    "time": [
      198.858348,
      202.373922
    ],
    "en": [
      "to confirm this I'll use the do show run command"
    ],
    "ru": [
      "чтобы подтвердить это, я воспользуюсь командой do show run"
    ]
  },
  {
    "time": [
      202.373922,
      207.519519
    ],
    "en": [
      "remember that that do allows us to use commands in global configuration mode"
    ],
    "ru": [
      "помните, что do позволяет нам использовать команды в режиме глобальной конфигурации"
    ]
  },
  {
    "time": [
      207.519519,
      210.931248
    ],
    "en": [
      "that we would normally have to be in privileged exec mode to use"
    ],
    "ru": [
      "что обычно мы должны находиться в привилегированном режиме exec, чтобы использовать"
    ]
  },
  {
    "time": [
      210.931248,
      215.469001
    ],
    "en": [
      "as you can see the enable password is right there in clear text"
    ],
    "ru": [
      "как вы можете видеть, пароль для включения находится прямо там в виде открытого текста"
    ]
  },
  {
    "time": [
      215.469001,
      219.331723
    ],
    "en": [
      "enable password Cisco not very secure"
    ],
    "ru": [
      "включить пароль Cisco не очень безопасно"
    ]
  },
  {
    "time": [
      219.331723,
      224.997642
    ],
    "en": [
      "the enable secret is a more secure password because it is encrypted by default"
    ],
    "ru": [
      "секрет включения - более безопасный пароль, потому что по умолчанию он зашифрован."
    ]
  },
  {
    "time": [
      224.997642,
      229.270424
    ],
    "en": [
      "use the enable secret command to create it"
    ],
    "ru": [
      "используйте команду enable secret, чтобы создать его"
    ]
  },
  {
    "time": [
      229.270424,
      231.943415
    ],
    "en": [
      "enable secret CCNA"
    ],
    "ru": [
      "включить секретный CCNA"
    ]
  },
  {
    "time": [
      231.943415,
      234.461481
    ],
    "en": [
      "step 4 is now complete"
    ],
    "ru": [
      "шаг 4 теперь завершен"
    ]
  },
  {
    "time": [
      234.461481,
      240.695522
    ],
    "en": [
      "Step five asks us to return to exec mode"
    ],
    "ru": [
      "Шаг пятый просит нас вернуться в режим exec"
    ]
  },
  {
    "time": [
      240.695522,
      243.772826
    ],
    "en": [
      "and try to enter privileged exec mode once again"
    ],
    "ru": [
      "и попробуйте еще раз войти в привилегированный режим exec"
    ]
  },
  {
    "time": [
      243.772826,
      248.182503
    ],
    "en": [
      "I'll type exit twice to return to exec mode"
    ],
    "ru": [
      "Я дважды наберу exit, чтобы вернуться в режим exec"
    ]
  },
  {
    "time": [
      248.182503,
      252.636177
    ],
    "en": [
      "now I'll use the enable command to enter privileged exec mode"
    ],
    "ru": [
      "теперь я воспользуюсь командой enable, чтобы войти в привилегированный режим exec"
    ]
  },
  {
    "time": [
      252.636177,
      254.982523
    ],
    "en": [
      "and I am asked for a password"
    ],
    "ru": [
      "и меня просят ввести пароль"
    ]
  },
  {
    "time": [
      254.982523,
      257.067089
    ],
    "en": [
      "which one should I enter"
    ],
    "ru": [
      "в какой из них я должен войти"
    ]
  },
  {
    "time": [
      257.067089,
      260.376841
    ],
    "en": [
      "let's try the enable password of Cisco"
    ],
    "ru": [
      "давайте попробуем включить пароль Cisco"
    ]
  },
  {
    "time": [
      260.376841,
      264.322007
    ],
    "en": [
      "again the characters are not shown as I type"
    ],
    "ru": [
      "снова символы не отображаются, когда я печатаю"
    ]
  },
  {
    "time": [
      264.322007,
      271.082343
    ],
    "en": [
      "I tried Cisco three times and it doesn't seem to work"
    ],
    "ru": [
      "Я трижды пробовал Cisco, но, похоже, не работает"
    ]
  },
  {
    "time": [
      271.082343,
      278.984926
    ],
    "en": [
      "let's use the enable command again and this time try the enable secret CCNA"
    ],
    "ru": [
      "давайте снова воспользуемся командой enable и на этот раз попробуем включить секретный CCNA"
    ]
  },
  {
    "time": [
      278.984926,
      282.324785
    ],
    "en": [
      "as you can see the enable secret works"
    ],
    "ru": [
      "как вы можете видеть, включение секретных работ"
    ]
  },
  {
    "time": [
      282.324785,
      284.42278
    ],
    "en": [
      "this is important to remember"
    ],
    "ru": [
      "это важно помнить"
    ]
  },
  {
    "time": [
      284.42278,
      289.269375
    ],
    "en": [
      "if you create both an enable password and an enable secret"
    ],
    "ru": [
      "если вы создаете как пароль включения, так и секрет включения"
    ]
  },
  {
    "time": [
      289.269375,
      292.850575
    ],
    "en": [
      "although both will be stored in the running config"
    ],
    "ru": [
      "хотя оба будут сохранены в текущей конфигурации"
    ]
  },
  {
    "time": [
      292.850575,
      297.518544
    ],
    "en": [
      "only the enable secret can be used to enter privileged exec mode"
    ],
    "ru": [
      "только ключ включения может использоваться для входа в привилегированный режим exec"
    ]
  },
  {
    "time": [
      297.518544,
      300.351229
    ],
    "en": [
      "the enable password is effectively useless"
    ],
    "ru": [
      "пароль включения бесполезен"
    ]
  },
  {
    "time": [
      300.351229,
      302.458449
    ],
    "en": [
      "that's step 5"
    ],
    "ru": [
      "это шаг 5"
    ]
  },
  {
    "time": [
      302.458449,
      308.391684
    ],
    "en": [
      "step 6 asks us to view the running configuration"
    ],
    "ru": [
      "шаг 6 просит нас просмотреть текущую конфигурацию"
    ]
  },
  {
    "time": [
      308.391684,
      311.602004
    ],
    "en": [
      "we're already in privileged exec mode"
    ],
    "ru": [
      "мы уже в привилегированном режиме exec"
    ]
  },
  {
    "time": [
      311.602004,
      314.621621
    ],
    "en": [
      "so I'll just type the show running config command"
    ],
    "ru": [
      "поэтому я просто наберу команду show running config"
    ]
  },
  {
    "time": [
      314.621621,
      318.702385
    ],
    "en": [
      "as you can see the enable password is still in plain text"
    ],
    "ru": [
      "как вы можете видеть, пароль включения по-прежнему отображается в виде обычного текста"
    ]
  },
  {
    "time": [
      318.702385,
      320.946094
    ],
    "en": [
      "enable password Cisco"
    ],
    "ru": [
      "включить пароль Cisco"
    ]
  },
  {
    "time": [
      320.946094,
      325.689186
    ],
    "en": [
      "however our enable secret of ccna has been encrypted"
    ],
    "ru": [
      "однако наш секрет включения ccna был зашифрован"
    ]
  },
  {
    "time": [
      325.689186,
      331.850682
    ],
    "en": [
      "it now says enable secret five followed by an unintelligible string of characters"
    ],
    "ru": [
      "теперь он говорит включить секрет 5, за которым следует неразборчивая строка символов"
    ]
  },
  {
    "time": [
      331.850682,
      335.685431
    ],
    "en": [
      "the five indicates the type of encryption"
    ],
    "ru": [
      "пять указывает тип шифрования"
    ]
  },
  {
    "time": [
      335.685431,
      337.735784
    ],
    "en": [
      "don't worry about that for now"
    ],
    "ru": [
      "не беспокойся об этом сейчас"
    ]
  },
  {
    "time": [
      337.735784,
      346.321022
    ],
    "en": [
      "just notice that the enable secret has been encrypted without using the service password encryption command that we used in the previous lab"
    ],
    "ru": [
      "просто обратите внимание, что секрет включения был зашифрован без использования команды шифрования пароля службы, которую мы использовали в предыдущей лабораторной работе."
    ]
  },
  {
    "time": [
      346.321022,
      348.699647
    ],
    "en": [
      "that's step six"
    ],
    "ru": [
      "это шаг шестой"
    ]
  },
  {
    "time": [
      348.699647,
      357.243784
    ],
    "en": [
      "step seven asks us to enable password encryption"
    ],
    "ru": [
      "Шаг седьмой просит нас включить шифрование пароля"
    ]
  },
  {
    "time": [
      357.243784,
      361.530169
    ],
    "en": [
      "if you remember this is done in global configuration mode"
    ],
    "ru": [
      "если вы помните, это делается в режиме глобальной конфигурации"
    ]
  },
  {
    "time": [
      361.530169,
      364.190258
    ],
    "en": [
      "so I'll type conf t get their"
    ],
    "ru": [
      "так что я наберу conf t и получу их"
    ]
  },
  {
    "time": [
      364.190258,
      367.300459
    ],
    "en": [
      "next service password encryption"
    ],
    "ru": [
      "шифрование пароля следующей службы"
    ]
  },
  {
    "time": [
      367.300459,
      369.038546
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
      369.038546,
      371.118877
    ],
    "en": [
      "now let's check the running config"
    ],
    "ru": [
      "теперь давайте проверим работающую конфигурацию"
    ]
  },
  {
    "time": [
      371.118877,
      372.848643
    ],
    "en": [
      "do show run"
    ],
    "ru": [
      "показывать бег"
    ]
  },
  {
    "time": [
      372.848643,
      375.118001
    ],
    "en": [
      "now both passwords are encrypted"
    ],
    "ru": [
      "теперь оба пароля зашифрованы"
    ]
  },
  {
    "time": [
      375.118001,
      379.213029
    ],
    "en": [
      "notice however that the enable secret has not changed"
    ],
    "ru": [
      "обратите внимание, однако, что секрет включения не изменился"
    ]
  },
  {
    "time": [
      379.213029,
      381.990927
    ],
    "en": [
      "because it is already encrypted by default"
    ],
    "ru": [
      "потому что он уже зашифрован по умолчанию"
    ]
  },
  {
    "time": [
      381.990927,
      386.712587
    ],
    "en": [
      "also notice that the enable secret uses type five encryption"
    ],
    "ru": [
      "также обратите внимание, что секрет включения использует шифрование пятого типа"
    ]
  },
  {
    "time": [
      386.712587,
      390.288956
    ],
    "en": [
      "and that the enable password uses type seven encryption"
    ],
    "ru": [
      "и что пароль включения использует шифрование седьмого типа"
    ]
  },
  {
    "time": [
      390.288956,
      396.325782
    ],
    "en": [
      "you can tell just by looking at the strings that follow that the encryption algorithms are different"
    ],
    "ru": [
      "Вы можете сказать, просто взглянув на следующие строки, что алгоритмы шифрования разные."
    ]
  },
  {
    "time": [
      396.325782,
      398.651033
    ],
    "en": [
      "that's step seven"
    ],
    "ru": [
      "это шаг седьмой"
    ]
  },
  {
    "time": [
      398.651033,
      405.546017
    ],
    "en": [
      "step eight of this lab asks us to save the configuration of the routers"
    ],
    "ru": [
      "на восьмом этапе лабораторной работы нас просят сохранить конфигурацию маршрутизаторов."
    ]
  },
  {
    "time": [
      405.546017,
      407.568926
    ],
    "en": [
      "something we didn't do in the previous lab"
    ],
    "ru": [
      "то, что мы не делали в предыдущей лабораторной работе"
    ]
  },
  {
    "time": [
      407.568926,
      415.521154
    ],
    "en": [
      "basically what we want to do is copy the current running configuration to what is called the startup configuration"
    ],
    "ru": [
      "в основном то, что мы хотим сделать, это скопировать текущую рабочую конфигурацию в так называемую стартовую конфигурацию."
    ]
  },
  {
    "time": [
      415.521154,
      418.194104
    ],
    "en": [
      "first let's compare the two"
    ],
    "ru": [
      "сначала давайте сравним два"
    ]
  },
  {
    "time": [
      418.194104,
      422.103355
    ],
    "en": [
      "I'll exit to privileged exec mode and type show run"
    ],
    "ru": [
      "Я выйду в привилегированный режим exec и наберу show run"
    ]
  },
  {
    "time": [
      422.103355,
      424.919231
    ],
    "en": [
      "this is the current running configuration"
    ],
    "ru": [
      "это текущая рабочая конфигурация"
    ]
  },
  {
    "time": [
      424.919231,
      431.585528
    ],
    "en": [
      "you can scroll down one line at a time with the enter key or blocks at a time with the spacebar"
    ],
    "ru": [
      "вы можете прокручивать вниз одну строку за раз с помощью клавиши ввода или блоки за раз с помощью клавиши пробела"
    ]
  },
  {
    "time": [
      431.585528,
      437.676567
    ],
    "en": [
      "notice that the enable password and enable secret we created are here"
    ],
    "ru": [
      "обратите внимание, что созданный нами пароль включения и секрет включения находятся здесь"
    ]
  },
  {
    "time": [
      437.676567,
      441.875875
    ],
    "en": [
      "now let's type show startup config"
    ],
    "ru": [
      "теперь давайте введем show startup config"
    ]
  },
  {
    "time": [
      441.875875,
      445.417804
    ],
    "en": [
      "it says startup config is not present"
    ],
    "ru": [
      "он говорит, что конфигурация запуска отсутствует"
    ]
  },
  {
    "time": [
      445.417804,
      447.692901
    ],
    "en": [
      "this is because this is a new router"
    ],
    "ru": [
      "это потому что это новый роутер"
    ]
  },
  {
    "time": [
      447.692901,
      449.721087
    ],
    "en": [
      "and we haven't saved anything on it"
    ],
    "ru": [
      "и мы ничего не сэкономили на этом"
    ]
  },
  {
    "time": [
      449.721087,
      454.174775
    ],
    "en": [
      "now there are two ways to save the current configuration"
    ],
    "ru": [
      "теперь есть два способа сохранить текущую конфигурацию"
    ]
  },
  {
    "time": [
      454.174775,
      459.694103
    ],
    "en": [
      "the first one is copy running-config startup config"
    ],
    "ru": [
      "первый - копировать конфигурацию запуска running-config"
    ]
  },
  {
    "time": [
      459.694103,
      463.153016
    ],
    "en": [
      "or copy run start for a shorter version if you prefer"
    ],
    "ru": [
      "или скопируйте начало запуска для более короткой версии, если хотите"
    ]
  },
  {
    "time": [
      463.153016,
      469.308725
    ],
    "en": [
      "it's self-explanatory but this command copies the running config to the startup config"
    ],
    "ru": [
      "это говорит само за себя, но эта команда копирует текущую конфигурацию в конфигурацию запуска"
    ]
  },
  {
    "time": [
      469.308725,
      473.45887
    ],
    "en": [
      "I'll enter the command and press ENTER to confirm"
    ],
    "ru": [
      "Я ввожу команду и нажимаю ENTER для подтверждения"
    ]
  },
  {
    "time": [
      473.45887,
      477.903188
    ],
    "en": [
      "now if we use the show startup config command"
    ],
    "ru": [
      "теперь, если мы воспользуемся командой show startup config"
    ]
  },
  {
    "time": [
      477.903188,
      480.925312
    ],
    "en": [
      "it is identical to the current running config"
    ],
    "ru": [
      "он идентичен текущей запущенной конфигурации"
    ]
  },
  {
    "time": [
      480.925312,
      485.789167
    ],
    "en": [
      "now there is another even simpler way to do the same thing"
    ],
    "ru": [
      "теперь есть еще один более простой способ сделать то же самое"
    ]
  },
  {
    "time": [
      485.789167,
      487.996812
    ],
    "en": [
      "that is with the write to command"
    ],
    "ru": [
      "то есть с командой записи"
    ]
  },
  {
    "time": [
      487.996812,
      492.978607
    ],
    "en": [
      "that's it you can even shorten it to just WR"
    ],
    "ru": [
      "вот и все, вы можете даже сократить его до WR"
    ]
  },
  {
    "time": [
      492.978607,
      498.731602
    ],
    "en": [
      "copy running-config startup config and write both do the same thing"
    ],
    "ru": [
      "скопируйте конфигурацию запуска running-config и напишите, оба делают то же самое"
    ]
  },
  {
    "time": [
      498.731602,
      500.443004
    ],
    "en": [
      "so use whichever you prefer"
    ],
    "ru": [
      "так что используйте то, что вы предпочитаете"
    ]
  },
  {
    "time": [
      500.443004,
      504.723301
    ],
    "en": [
      "now the final step is to reload the router"
    ],
    "ru": [
      "теперь последний шаг - перезагрузить роутер"
    ]
  },
  {
    "time": [
      504.723301,
      507.280191
    ],
    "en": [
      "I will do this with the reload command"
    ],
    "ru": [
      "Я сделаю это с помощью команды перезагрузки"
    ]
  },
  {
    "time": [
      507.280191,
      512.969688
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
      512.969688,
      516.822981
    ],
    "en": [
      "now you can see that the hostname is still r1"
    ],
    "ru": [
      "теперь вы можете видеть, что имя хоста по-прежнему r1"
    ]
  },
  {
    "time": [
      516.822981,
      520.965983
    ],
    "en": [
      "this proves that we successfully saved our changes"
    ],
    "ru": [
      "это доказывает, что мы успешно сохранили наши изменения"
    ]
  },
  {
    "time": [
      520.965983,
      524.536626
    ],
    "en": [
      "I'll use the enable command to enter privileged exec mode"
    ],
    "ru": [
      "Я воспользуюсь командой enable, чтобы войти в привилегированный режим exec"
    ]
  },
  {
    "time": [
      524.536626,
      527.372019
    ],
    "en": [
      "and as you can see I'm asked for a password"
    ],
    "ru": [
      "и, как видите, у меня спрашивают пароль"
    ]
  },
  {
    "time": [
      527.372019,
      530.84509
    ],
    "en": [
      "this also proves that we successfully saved our changes to the configuration"
    ],
    "ru": [
      "это также доказывает, что мы успешно сохранили наши изменения в конфигурации"
    ]
  },
  {
    "time": [
      530.84509,
      536.374761
    ],
    "en": [
      "I enter the enable secret of CCNA and now I'm in privileged exec mode"
    ],
    "ru": [
      "Я ввожу секрет включения CCNA и теперь нахожусь в привилегированном режиме exec"
    ]
  },
  {
    "time": [
      536.374761,
      541.075903
    ],
    "en": [
      "finally I'll type show startup config just to confirm"
    ],
    "ru": [
      "наконец, я наберу show startup config, чтобы подтвердить"
    ]
  },
  {
    "time": [
      541.075903,
      543.617492
    ],
    "en": [
      "as you can see our changes are still there"
    ],
    "ru": [
      "как видите, наши изменения все еще там"
    ]
  },
  {
    "time": [
      543.617492,
      546.751275
    ],
    "en": [
      "step 8 and this lab are now complete"
    ],
    "ru": [
      "шаг 8 и эта лабораторная работа завершена"
    ]
  },
  {
    "time": [
      546.751275,
      554.280742
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
      554.280742,
      557.120203
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
      557.120203,
      559.154288
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
      559.154288,
      564.24762
    ],
    "en": [
      "if you have requests for any specific labs let me know in the comments section"
    ],
    "ru": [
      "если у вас есть запросы по каким-либо конкретным лабораториям, дайте мне знать в разделе комментариев"
    ]
  },
  {
    "time": [
      564.24762,
      571.071954
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
      571.071954,
      578.955912
    ],
    "en": [
      "I am also a brave verified publisher and accept a bat or basic attention token donations in the brave browser"
    ],
    "ru": [
      "Я также являюсь храбрым проверенным издателем и принимаю пожертвования битой или базовым токеном внимания в храбром браузере."
    ]
  },
  {
    "time": [
      578.955912,
      578.955912
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
      578.955912,
      578.955912
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
      578.955912,
      578.955912
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]