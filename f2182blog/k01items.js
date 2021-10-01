let objs = [
  {
    "time": [
      0.0,
      5.71078
    ],
    "en": [
      "welcome to this free Cisco CCNA packet tracer practice lab"
    ],
    "ru": [
      "добро пожаловать в эту бесплатную практическую лабораторию Cisco CCNA Packet Tracer"
    ]
  },
  {
    "time": [
      5.71078,
      8.984527
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
      8.984527,
      13.143932
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
      13.143932,
      15.98083
    ],
    "en": [
      "and then continue watching this video if you have any trouble"
    ],
    "ru": [
      "а затем продолжайте смотреть это видео, если у вас возникнут проблемы"
    ]
  },
  {
    "time": [
      15.98083,
      18.800988
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
      18.800988,
      26.869218
    ],
    "en": [
      "in this lab we will be working with two routers r1 and r2"
    ],
    "ru": [
      "в этой лабораторной работе мы будем работать с двумя маршрутизаторами r1 и r2."
    ]
  },
  {
    "time": [
      26.869218,
      38.439468
    ],
    "en": [
      "we will configure basic security on the routers by using the enable password which is used to enter privileged exec mode also known as enable mode"
    ],
    "ru": [
      "мы настроим базовую безопасность на маршрутизаторах, используя пароль включения, который используется для входа в привилегированный режим выполнения, также известный как режим включения"
    ]
  },
  {
    "time": [
      38.439468,
      43.2369
    ],
    "en": [
      "I will only work with one of the routers in this video for the sake of time"
    ],
    "ru": [
      "Я буду работать только с одним из маршрутизаторов в этом видео, чтобы сэкономить время."
    ]
  },
  {
    "time": [
      43.2369,
      49.425341
    ],
    "en": [
      "but I highly recommend that you perform the configurations on both of the routers for practice"
    ],
    "ru": [
      "но я настоятельно рекомендую вам выполнить настройку на обоих маршрутизаторах для практики."
    ]
  },
  {
    "time": [
      49.425341,
      54.978542
    ],
    "en": [
      "repetition is essential to become familiar with the command-line interface or CLI"
    ],
    "ru": [
      "повторение необходимо для знакомства с интерфейсом командной строки или CLI"
    ]
  },
  {
    "time": [
      54.978542,
      66.483025
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
      66.483025,
      71.349879
    ],
    "en": [
      "I will refer to these as the gig 0 0 interfaces"
    ],
    "ru": [
      "Я буду называть их интерфейсами gig 0 0."
    ]
  },
  {
    "time": [
      71.349879,
      74.748849
    ],
    "en": [
      "click on connections in the bottom left"
    ],
    "ru": [
      "нажмите на соединения в левом нижнем углу"
    ]
  },
  {
    "time": [
      74.748849,
      82.948591
    ],
    "en": [
      "and select the cable connected to the gig 0 0 interface on r1 and then r2"
    ],
    "ru": [
      "и выбираем кабель, подключенный к интерфейсу gig 0 0 на r1, а затем на r2"
    ]
  },
  {
    "time": [
      82.948591,
      86.914912
    ],
    "en": [
      "there we have it step one is complete"
    ],
    "ru": [
      "вот и все, шаг первый завершен"
    ]
  },
  {
    "time": [
      86.914912,
      96.296489
    ],
    "en": [
      "step two is to set the host names according to the network diagram"
    ],
    "ru": [
      "Шаг второй - установить имена хостов в соответствии с сетевой диаграммой"
    ]
  },
  {
    "time": [
      96.296489,
      98.657359
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
      98.657359,
      106.811349
    ],
    "en": [
      "click on each router and then select CLI to access the command-line interface from which we will configure each router"
    ],
    "ru": [
      "щелкните каждый маршрутизатор, а затем выберите CLI, чтобы получить доступ к интерфейсу командной строки, из которого мы будем настраивать каждый маршрутизатор"
    ]
  },
  {
    "time": [
      106.811349,
      111.044964
    ],
    "en": [
      "the current host name for each router is displayed here"
    ],
    "ru": [
      "здесь отображается текущее имя хоста для каждого маршрутизатора"
    ]
  },
  {
    "time": [
      111.044964,
      115.359068
    ],
    "en": [
      "as you can see each router is currently named router"
    ],
    "ru": [
      "как вы можете видеть, каждый маршрутизатор в настоящее время называется маршрутизатором"
    ]
  },
  {
    "time": [
      115.359068,
      121.062605
    ],
    "en": [
      "to change the host name of a router we must enter global configuration mode"
    ],
    "ru": [
      "чтобы изменить имя хоста маршрутизатора, мы должны войти в режим глобальной конфигурации"
    ]
  },
  {
    "time": [
      121.062605,
      125.812091
    ],
    "en": [
      "however to get there we must first enter privileged exec mode"
    ],
    "ru": [
      "однако, чтобы попасть туда, мы должны сначала войти в привилегированный режим exec"
    ]
  },
  {
    "time": [
      125.812091,
      129.560357
    ],
    "en": [
      "this is achieved by using the enable command"
    ],
    "ru": [
      "это достигается с помощью команды enable"
    ]
  },
  {
    "time": [
      129.560357,
      136.567287
    ],
    "en": [
      "to demonstrate a shortcut I will use the exit command to return to the previous exec mode"
    ],
    "ru": [
      "чтобы продемонстрировать ярлык, я воспользуюсь командой exit, чтобы вернуться в предыдущий режим выполнения."
    ]
  },
  {
    "time": [
      136.567287,
      142.528383
    ],
    "en": [
      "notice that you can enter privileged exec mode by simply typing en"
    ],
    "ru": [
      "обратите внимание, что вы можете войти в привилегированный режим exec, просто набрав en"
    ]
  },
  {
    "time": [
      142.528383,
      148.283737
    ],
    "en": [
      "you can also type en and then use tab to autocomplete it to enable"
    ],
    "ru": [
      "вы также можете ввести en, а затем использовать вкладку для автозаполнения, чтобы включить"
    ]
  },
  {
    "time": [
      148.283737,
      152.286667
    ],
    "en": [
      "but this isn't necessary en alone is fine"
    ],
    "ru": [
      "но это не обязательно"
    ]
  },
  {
    "time": [
      152.286667,
      155.843063
    ],
    "en": [
      "e however is too short"
    ],
    "ru": [
      "е, однако, слишком короткое"
    ]
  },
  {
    "time": [
      155.843063,
      158.807745
    ],
    "en": [
      "and we are told this is an ambiguous command"
    ],
    "ru": [
      "и нам говорят, что это неоднозначная команда"
    ]
  },
  {
    "time": [
      158.807745,
      163.438917
    ],
    "en": [
      "this is because there are other potential commands that begin with E"
    ],
    "ru": [
      "это потому, что есть другие потенциальные команды, которые начинаются с E"
    ]
  },
  {
    "time": [
      163.438917,
      167.41218
    ],
    "en": [
      "which we can see by typing E and then a question mark"
    ],
    "ru": [
      "что мы можем увидеть, набрав E, а затем вопросительный знак"
    ]
  },
  {
    "time": [
      167.41218,
      173.20304
    ],
    "en": [
      "as you can see there are two potential commands enable and exit"
    ],
    "ru": [
      "как вы можете видеть, есть две возможные команды: включить и выйти"
    ]
  },
  {
    "time": [
      173.20304,
      178.511168
    ],
    "en": [
      "so if you just enter E the router doesn't know which command you mean"
    ],
    "ru": [
      "поэтому, если вы просто введете E, маршрутизатор не знает, какую команду вы имеете в виду"
    ]
  },
  {
    "time": [
      178.511168,
      183.078884
    ],
    "en": [
      "however enable is the only command beginning with en"
    ],
    "ru": [
      "однако enable - единственная команда, начинающаяся с en"
    ]
  },
  {
    "time": [
      183.078884,
      187.293586
    ],
    "en": [
      "so en is all the router needs to know which command you mean"
    ],
    "ru": [
      "так что все, что маршрутизатор должен знать, какую команду вы имеете в виду"
    ]
  },
  {
    "time": [
      187.293586,
      191.265524
    ],
    "en": [
      "now that we are in privileged exec mode"
    ],
    "ru": [
      "теперь, когда мы находимся в привилегированном режиме exec"
    ]
  },
  {
    "time": [
      191.265524,
      196.490612
    ],
    "en": [
      "we can use the configure terminal command to get to global configuration mode"
    ],
    "ru": [
      "мы можем использовать команду configure terminal, чтобы перейти в режим глобальной конфигурации"
    ]
  },
  {
    "time": [
      196.490612,
      206.589185
    ],
    "en": [
      "if you want to use shortcuts again as we did with enable and en the shortest version of the configure terminal command is conf t"
    ],
    "ru": [
      "если вы хотите снова использовать ярлыки, как мы делали с enable и en, самая короткая версия команды configure terminal - conf t"
    ]
  },
  {
    "time": [
      206.589185,
      209.466962
    ],
    "en": [
      "from here we can set the hostname of the router"
    ],
    "ru": [
      "отсюда мы можем установить имя хоста маршрутизатора"
    ]
  },
  {
    "time": [
      209.466962,
      212.633743
    ],
    "en": [
      "this is done with the hostname command"
    ],
    "ru": [
      "это делается с помощью команды hostname"
    ]
  },
  {
    "time": [
      212.633743,
      215.421597
    ],
    "en": [
      "I will enter hostname r1"
    ],
    "ru": [
      "Я введу имя хоста r1"
    ]
  },
  {
    "time": [
      215.421597,
      220.214119
    ],
    "en": [
      "as you can see the hostname has changed from router to r1"
    ],
    "ru": [
      "как вы можете видеть, имя хоста изменилось с маршрутизатора на r1"
    ]
  },
  {
    "time": [
      220.214119,
      223.111688
    ],
    "en": [
      "change the hostname on r2 as well"
    ],
    "ru": [
      "также измените имя хоста на r2"
    ]
  },
  {
    "time": [
      223.111688,
      225.434294
    ],
    "en": [
      "and step two is complete"
    ],
    "ru": [
      "и шаг два завершен"
    ]
  },
  {
    "time": [
      225.434294,
      235.417132
    ],
    "en": [
      "step three is to set the enable password on each router to Cisco"
    ],
    "ru": [
      "Шаг третий - установить пароль включения на каждом маршрутизаторе на Cisco"
    ]
  },
  {
    "time": [
      235.417132,
      243.525971
    ],
    "en": [
      "the enable password is used to enter privileged exec mode which as I mentioned before is also called enable mode"
    ],
    "ru": [
      "пароль включения используется для входа в привилегированный режим exec, который, как я уже упоминал ранее, также называется режимом включения"
    ]
  },
  {
    "time": [
      243.525971,
      246.567062
    ],
    "en": [
      "previously we had no password set"
    ],
    "ru": [
      "раньше у нас не было пароля"
    ]
  },
  {
    "time": [
      246.567062,
      251.091763
    ],
    "en": [
      "so we were able to enter privileged exec mode without any password"
    ],
    "ru": [
      "поэтому мы смогли войти в привилегированный режим exec без пароля"
    ]
  },
  {
    "time": [
      251.091763,
      257.828257
    ],
    "en": [
      "now we are going to protect privileged exec mode so that only administrators can access it"
    ],
    "ru": [
      "теперь мы собираемся защитить привилегированный режим exec, чтобы только администраторы могли получить к нему доступ"
    ]
  },
  {
    "time": [
      257.828257,
      264.527286
    ],
    "en": [
      "the command is simple and it is done in global configuration mode which we are already in"
    ],
    "ru": [
      "команда проста и выполняется в режиме глобальной конфигурации, в котором мы уже находимся"
    ]
  },
  {
    "time": [
      264.527286,
      268.193335
    ],
    "en": [
      "type an able password Cisco"
    ],
    "ru": [
      "введите подходящий пароль Cisco"
    ]
  },
  {
    "time": [
      268.193335,
      269.79656
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
      269.79656,
      274.161426
    ],
    "en": [
      "now let's test it out"
    ],
    "ru": [
      "теперь давайте проверим это"
    ]
  },
  {
    "time": [
      274.161426,
      275.126163
    ],
    "en": [
      "from here I will use the exit command twice"
    ],
    "ru": [
      "отсюда я дважды использую команду выхода"
    ]
  },
  {
    "time": [
      275.126163,
      281.464435
    ],
    "en": [
      "once to bring you back to privileged exec mode and then once again to bring you back to exact mode"
    ],
    "ru": [
      "один раз, чтобы вернуть вас в привилегированный режим exec, а затем еще раз, чтобы вернуть вас в точный режим"
    ]
  },
  {
    "time": [
      281.464435,
      286.123771
    ],
    "en": [
      "now I will use the enable command again"
    ],
    "ru": [
      "теперь я снова воспользуюсь командой enable"
    ]
  },
  {
    "time": [
      286.123771,
      289.254222
    ],
    "en": [
      "however this time I am asked for a password"
    ],
    "ru": [
      "однако на этот раз меня просят ввести пароль"
    ]
  },
  {
    "time": [
      289.254222,
      292.598876
    ],
    "en": [
      "the characters do not appear as I type"
    ],
    "ru": [
      "символы не появляются, когда я печатаю"
    ]
  },
  {
    "time": [
      292.598876,
      296.832131
    ],
    "en": [
      "however if I type the password Cisco correctly and press Enter"
    ],
    "ru": [
      "однако, если я введу пароль Cisco правильно и нажму Enter"
    ]
  },
  {
    "time": [
      296.832131,
      299.327753
    ],
    "en": [
      "I am brought to privileged exec mode now"
    ],
    "ru": [
      "Я переведен в привилегированный режим exec"
    ]
  },
  {
    "time": [
      299.327753,
      303.558942
    ],
    "en": [
      "let's see what happens if I fail to enter the correct password"
    ],
    "ru": [
      "посмотрим, что будет, если я не введу правильный пароль"
    ]
  },
  {
    "time": [
      303.558942,
      312.301938
    ],
    "en": [
      "I entered the wrong password once twice and then three times before being rejected for having bad secrets"
    ],
    "ru": [
      "Я ввел неправильный пароль один раз два раза, а затем три раза, прежде чем меня отклонили из-за наличия плохих секретов."
    ]
  },
  {
    "time": [
      312.301938,
      317.70121
    ],
    "en": [
      "now I will try again with the correct password and I'm in"
    ],
    "ru": [
      "сейчас я попробую еще раз с правильным паролем, и я в"
    ]
  },
  {
    "time": [
      317.70121,
      319.576191
    ],
    "en": [
      "step 3 is now complete"
    ],
    "ru": [
      "шаг 3 теперь завершен"
    ]
  },
  {
    "time": [
      319.576191,
      328.413973
    ],
    "en": [
      "step four is simply to view the password in the running configuration"
    ],
    "ru": [
      "четвертый шаг - просто просмотреть пароль в текущей конфигурации"
    ]
  },
  {
    "time": [
      328.413973,
      332.295558
    ],
    "en": [
      "the running configuration is the current configuration of the router"
    ],
    "ru": [
      "текущая конфигурация - это текущая конфигурация роутера"
    ]
  },
  {
    "time": [
      332.295558,
      334.796099
    ],
    "en": [
      "whether or not you have actually saved it"
    ],
    "ru": [
      "действительно ли вы его сохранили"
    ]
  },
  {
    "time": [
      334.796099,
      340.58297
    ],
    "en": [
      "if you turn off the router without saving the running configuration you will lose any changes"
    ],
    "ru": [
      "если вы выключите роутер без сохранения текущей конфигурации, вы потеряете все изменения"
    ]
  },
  {
    "time": [
      340.58297,
      346.860406
    ],
    "en": [
      "if you want to keep your changes you will save them to what's called the startup configuration"
    ],
    "ru": [
      "если вы хотите сохранить свои изменения, вы сохраните их в так называемой стартовой конфигурации"
    ]
  },
  {
    "time": [
      346.860406,
      348.807184
    ],
    "en": [
      "that will be for another lab"
    ],
    "ru": [
      "это будет для другой лаборатории"
    ]
  },
  {
    "time": [
      348.807184,
      355.919352
    ],
    "en": [
      "to view the running configuration use the show running config command from privileged exec mode"
    ],
    "ru": [
      "для просмотра текущей конфигурации используйте команду show running config из привилегированного режима exec"
    ]
  },
  {
    "time": [
      355.919352,
      357.87534
    ],
    "en": [
      "which we are already in"
    ],
    "ru": [
      "в котором мы уже находимся"
    ]
  },
  {
    "time": [
      357.87534,
      362.475673
    ],
    "en": [
      "you can abbreviate it to for example SH run"
    ],
    "ru": [
      "вы можете сократить его, например, до SH run"
    ]
  },
  {
    "time": [
      362.475673,
      372.238832
    ],
    "en": [
      "enter the command and you can see the password right here with the exact command we used before enable password Cisco"
    ],
    "ru": [
      "введите команду, и вы увидите пароль прямо здесь с той же командой, которую мы использовали перед включением пароля Cisco"
    ]
  },
  {
    "time": [
      372.238832,
      377.189393
    ],
    "en": [
      "step 4 asks if the password is encrypted"
    ],
    "ru": [
      "шаг 4 спрашивает, зашифрован ли пароль"
    ]
  },
  {
    "time": [
      377.189393,
      383.755187
    ],
    "en": [
      "meaning translated into an unreadable code to protect it from being discovered by people who should not know the password"
    ],
    "ru": [
      "смысл переведен в нечитаемый код, чтобы защитить его от обнаружения людьми, которые не должны знать пароль"
    ]
  },
  {
    "time": [
      383.755187,
      391.657839
    ],
    "en": [
      "as you can see it is not encrypted it is written in clear text right here Cisco so the answer is no"
    ],
    "ru": [
      "как вы можете видеть, он не зашифрован, он написан открытым текстом прямо здесь Cisco, поэтому ответ - нет"
    ]
  },
  {
    "time": [
      391.657839,
      394.587015
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
      394.587015,
      400.922847
    ],
    "en": [
      "step 5 is to enable password encryption on the router"
    ],
    "ru": [
      "Шаг 5 - включить шифрование пароля на роутере"
    ]
  },
  {
    "time": [
      400.922847,
      405.607194
    ],
    "en": [
      "we can protect passwords by encrypting them to render them unreadable"
    ],
    "ru": [
      "мы можем защитить пароли, зашифровав их, чтобы сделать их нечитаемыми"
    ]
  },
  {
    "time": [
      405.607194,
      412.512471
    ],
    "en": [
      "this is done from global configuration mode with the command service password - encryption"
    ],
    "ru": [
      "это делается из режима глобальной конфигурации с паролем службы команд - шифрование"
    ]
  },
  {
    "time": [
      412.512471,
      417.102114
    ],
    "en": [
      "I will enter the command and now step 5 is complete"
    ],
    "ru": [
      "Я введу команду, и теперь шаг 5 завершен"
    ]
  },
  {
    "time": [
      417.102114,
      425.920834
    ],
    "en": [
      "step six is to once again view the running-config"
    ],
    "ru": [
      "Шаг шестой - еще раз просмотреть рабочую конфигурацию"
    ]
  },
  {
    "time": [
      425.920834,
      429.500638
    ],
    "en": [
      "I will use the same command as before"
    ],
    "ru": [
      "Я буду использовать ту же команду, что и раньше"
    ]
  },
  {
    "time": [
      429.500638,
      431.38758
    ],
    "en": [
      "and now let's check the password"
    ],
    "ru": [
      "а теперь давайте проверим пароль"
    ]
  },
  {
    "time": [
      431.38758,
      433.878926
    ],
    "en": [
      "however the command doesn't work"
    ],
    "ru": [
      "однако команда не работает"
    ]
  },
  {
    "time": [
      433.878926,
      441.360164
    ],
    "en": [
      "that is because we are currently in global configuration mode and show running config must be entered from privileged exec mode"
    ],
    "ru": [
      "это потому, что мы в настоящее время находимся в режиме глобальной конфигурации, и показать текущую конфигурацию необходимо ввести из привилегированного режима exec"
    ]
  },
  {
    "time": [
      441.360164,
      447.17541
    ],
    "en": [
      "now I could type exit to drop back to privileged exec mode and then enter the command"
    ],
    "ru": [
      "теперь я мог ввести exit, чтобы вернуться в привилегированный режим exec, а затем ввести команду"
    ]
  },
  {
    "time": [
      447.17541,
      449.309423
    ],
    "en": [
      "but there is one more way"
    ],
    "ru": [
      "но есть еще один способ"
    ]
  },
  {
    "time": [
      449.309423,
      452.021168
    ],
    "en": [
      "if I type do in front of the command"
    ],
    "ru": [
      "если я наберу do перед командой"
    ]
  },
  {
    "time": [
      452.021168,
      454.476454
    ],
    "en": [
      "I can enter it from global configuration mode"
    ],
    "ru": [
      "Я могу войти в него из режима глобальной конфигурации"
    ]
  },
  {
    "time": [
      454.476454,
      457.298876
    ],
    "en": [
      "do show running config"
    ],
    "ru": [
      "показать текущую конфигурацию"
    ]
  },
  {
    "time": [
      457.298876,
      458.342046
    ],
    "en": [
      "there we go"
    ],
    "ru": [
      "вот и мы"
    ]
  },
  {
    "time": [
      458.342046,
      459.982219
    ],
    "en": [
      "let's look at the password"
    ],
    "ru": [
      "давайте посмотрим на пароль"
    ]
  },
  {
    "time": [
      459.982219,
      465.91831
    ],
    "en": [
      "you can see here an able password followed by a seven and then a string of other numbers"
    ],
    "ru": [
      "вы можете увидеть здесь действующий пароль, за которым следует семерка, а затем строка других цифр"
    ]
  },
  {
    "time": [
      465.91831,
      468.939648
    ],
    "en": [
      "the password has successfully been encrypted"
    ],
    "ru": [
      "пароль был успешно зашифрован"
    ]
  },
  {
    "time": [
      468.939648,
      472.989782
    ],
    "en": [
      "although we didn't type this 7 when we entered the command"
    ],
    "ru": [
      "хотя мы не набирали эту 7, когда вводили команду"
    ]
  },
  {
    "time": [
      472.989782,
      475.6533
    ],
    "en": [
      "it refers to the type of encryption used"
    ],
    "ru": [
      "это относится к типу используемого шифрования"
    ]
  },
  {
    "time": [
      475.6533,
      479.90062
    ],
    "en": [
      "there are other types as well but that's not something to worry about now"
    ],
    "ru": [
      "есть и другие типы, но сейчас не о чем беспокоиться"
    ]
  },
  {
    "time": [
      479.90062,
      487.49386
    ],
    "en": [
      "the string of numbers that follow are the passwords Cisco encrypted to be unreadable"
    ],
    "ru": [
      "следующая строка цифр - это пароли, зашифрованные Cisco, чтобы их нельзя было прочесть."
    ]
  },
  {
    "time": [
      487.49386,
      490.509759
    ],
    "en": [
      "so that anyone looking over our shoulder can't read the password"
    ],
    "ru": [
      "чтобы кто-либо, оглядываясь через плечо, не мог прочитать пароль"
    ]
  },
  {
    "time": [
      490.509759,
      497.642039
    ],
    "en": [
      "keep in mind that the encryption used in the service password encryption command isn't very secure"
    ],
    "ru": [
      "имейте в виду, что шифрование, используемое в команде шифрования пароля службы, не очень безопасно"
    ]
  },
  {
    "time": [
      497.642039,
      499.134879
    ],
    "en": [
      "and can be cracked"
    ],
    "ru": [
      "и может быть взломан"
    ]
  },
  {
    "time": [
      499.134879,
      503.084779
    ],
    "en": [
      "but this at least renders the password safe from someone simply glancing over your shoulder"
    ],
    "ru": [
      "но это, по крайней мере, обезопасит пароль от того, чтобы кто-то просто взглянул через ваше плечо"
    ]
  },
  {
    "time": [
      503.084779,
      505.605702
    ],
    "en": [
      "step 6 is complete"
    ],
    "ru": [
      "шаг 6 завершен"
    ]
  },
  {
    "time": [
      505.605702,
      512.490304
    ],
    "en": [
      "step seven is to disable password encryption"
    ],
    "ru": [
      "Шаг седьмой - отключить шифрование пароля"
    ]
  },
  {
    "time": [
      512.490304,
      516.513226
    ],
    "en": [
      "we enabled password encryption with the service password encryption command"
    ],
    "ru": [
      "мы включили шифрование пароля с помощью служебной команды шифрования пароля"
    ]
  },
  {
    "time": [
      516.513226,
      521.711706
    ],
    "en": [
      "now we will simply type no followed by the same command"
    ],
    "ru": [
      "теперь мы просто введем no, а затем ту же команду"
    ]
  },
  {
    "time": [
      521.711706,
      524.744416
    ],
    "en": [
      "no service password encryption"
    ],
    "ru": [
      "нет шифрования сервисного пароля"
    ]
  },
  {
    "time": [
      524.744416,
      528.072475
    ],
    "en": [
      "that's it step seven is now complete"
    ],
    "ru": [
      "вот и шаг седьмой теперь завершен"
    ]
  },
  {
    "time": [
      528.072475,
      534.631315
    ],
    "en": [
      "step eight is once again to view the password in the running configuration"
    ],
    "ru": [
      "восьмой шаг - еще раз просмотреть пароль в текущей конфигурации."
    ]
  },
  {
    "time": [
      534.631315,
      537.799186
    ],
    "en": [
      "this time I'll exit down to privileged exec mode"
    ],
    "ru": [
      "на этот раз я выйду в привилегированный режим exec"
    ]
  },
  {
    "time": [
      537.799186,
      541.169135
    ],
    "en": [
      "and type show running config to view the running configuration"
    ],
    "ru": [
      "и введите show running config, чтобы просмотреть текущую конфигурацию."
    ]
  },
  {
    "time": [
      541.169135,
      545.147617
    ],
    "en": [
      "as you can see the password is still encrypted"
    ],
    "ru": [
      "как видите, пароль по-прежнему зашифрован"
    ]
  },
  {
    "time": [
      545.147617,
      548.634791
    ],
    "en": [
      "why is that even though we disabled password encryption"
    ],
    "ru": [
      "почему это несмотря на то, что мы отключили шифрование паролей"
    ]
  },
  {
    "time": [
      548.634791,
      554.448517
    ],
    "en": [
      "well disabling password encryption will prevent future passwords from being encrypted"
    ],
    "ru": [
      "Отключение шифрования паролей предотвратит шифрование будущих паролей"
    ]
  },
  {
    "time": [
      554.448517,
      559.012818
    ],
    "en": [
      "however it does not unencrypted passwords that are already encrypted"
    ],
    "ru": [
      "однако это не незашифрованные пароли, которые уже зашифрованы"
    ]
  },
  {
    "time": [
      559.012818,
      561.617975
    ],
    "en": [
      "so the answer to step eight is yes"
    ],
    "ru": [
      "так что ответ на восьмой шаг - да"
    ]
  },
  {
    "time": [
      561.617975,
      563.608675
    ],
    "en": [
      "the password is encrypted"
    ],
    "ru": [
      "пароль зашифрован"
    ]
  },
  {
    "time": [
      563.608675,
      567.364223
    ],
    "en": [
      "step eight in the lab are both now complete"
    ],
    "ru": [
      "Шаг восьмой в лаборатории оба теперь завершены"
    ]
  },
  {
    "time": [
      567.364223,
      575.830308
    ],
    "en": [
      "thank you for watching I hope this lab and video have been helpful"
    ],
    "ru": [
      "Спасибо за просмотр. Надеюсь, эта лабораторная работа и видео были полезны."
    ]
  },
  {
    "time": [
      575.830308,
      578.369846
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
      578.369846,
      580.203796
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
      580.203796,
      584.907124
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
      584.907124,
      590.288676
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
      590.288676,
      599.054327
    ],
    "en": [
      "I am also a brave verified publisher and accept bat or basic attention token donations in the brave browser thank you"
    ],
    "ru": [
      "Я также храбрый проверенный издатель и принимаю пожертвования летучих мышей или базовых токенов внимания в смелом браузере, спасибо"
    ]
  },
  {
    "time": [
      599.054327,
      599.054327
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
      599.054327,
      599.054327
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
      599.054327,
      599.054327
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]