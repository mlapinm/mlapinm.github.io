var objs = [
  {
    "time": [
      1.589,
      4.259
    ],
    "en": [
      "Welcome to Jeremy’s IT Lab."
    ],
    "ru": [
      "Добро пожаловать в ИТ-лабораторию Джереми."
    ]
  },
  {
    "time": [
      4.259,
      9.45
    ],
    "en": [
      "This is a free, complete course for the CCNA 200-301."
    ],
    "ru": [
      "Это бесплатный полный курс CCNA 200-301."
    ]
  },
  {
    "time": [
      9.45,
      13.53
    ],
    "en": [
      "If you like these videos, please subscribe to follow along with the series."
    ],
    "ru": [
      "Если вам нравятся эти видео, подпишитесь, чтобы следить за сериалом."
    ]
  },
  {
    "time": [
      13.53,
      20.16
    ],
    "en": [
      "Also, please like and leave a comment, and share the video to help spread this free series of videos."
    ],
    "ru": [
      "Также, пожалуйста, поставьте лайк и оставьте комментарий, а также поделитесь видео, чтобы помочь распространить эту бесплатную серию видео."
    ]
  },
  {
    "time": [
      20.16,
      23.89
    ],
    "en": [
      "Thanks for your help. Let’s get started."
    ],
    "ru": [
      "Спасибо за вашу помощь. Давайте начнем."
    ]
  },
  {
    "time": [
      23.89,
      31.25
    ],
    "en": [
      "In this lab we’ll finally get hands on in the Cisco IOS CLI, the command line interface."
    ],
    "ru": [
      "В этой лабораторной работе мы наконец познакомимся с Cisco IOS CLI, интерфейсом командной строки."
    ]
  },
  {
    "time": [
      31.25,
      35.5
    ],
    "en": [
      "If you’ve already watched the Day 4 lecture video, you should be able to complete these"
    ],
    "ru": [
      "Если вы уже смотрели видео с лекцией, посвященной четвертому дню, у вас должно получиться пройти эти"
    ]
  },
  {
    "time": [
      35.5,
      37.3
    ],
    "en": [
      "tasks on your own."
    ],
    "ru": [
      "задачи по своему усмотрению."
    ]
  },
  {
    "time": [
      37.3,
      43.63
    ],
    "en": [
      "Even if you can, I recommend watching this video after to check and get any additional explanations."
    ],
    "ru": [
      "Даже если вы можете, я рекомендую посмотреть это видео позже, чтобы проверить и получить дополнительные объяснения."
    ]
  },
  {
    "time": [
      43.63,
      50.4
    ],
    "en": [
      "So, we’ve got a small network here with a few PCs, and switch, and a router."
    ],
    "ru": [
      "Итак, у нас есть небольшая сеть с несколькими компьютерами, коммутатором и маршрутизатором."
    ]
  },
  {
    "time": [
      50.4,
      54.02
    ],
    "en": [
      "Our tasks involve some basic configurations on the router and switch."
    ],
    "ru": [
      "В наши задачи входит базовая настройка роутера и коммутатора."
    ]
  },
  {
    "time": [
      54.02,
      57.31
    ],
    "en": [
      "For this video, I will only configure the router."
    ],
    "ru": [
      "Для этого видео я буду настраивать только роутер."
    ]
  },
  {
    "time": [
      57.31,
      61.73
    ],
    "en": [
      "However, I recommend that you go through the steps on both devices."
    ],
    "ru": [
      "Однако я рекомендую вам выполнить действия на обоих устройствах."
    ]
  },
  {
    "time": [
      61.73,
      65.469
    ],
    "en": [
      "Repetition is essential to get used to all of the commands you need to know, so remember"
    ],
    "ru": [
      "Повторение необходимо, чтобы привыкнуть ко всем командам, которые вам нужно знать, поэтому помните"
    ]
  },
  {
    "time": [
      65.469,
      68.829
    ],
    "en": [
      "to configure both devices!"
    ],
    "ru": [
      "настроить оба устройства!"
    ]
  },
  {
    "time": [
      68.829,
      73.459
    ],
    "en": [
      "Step 1 is to set the appropriate hostnames for each device, R1 and SW1."
    ],
    "ru": [
      "Шаг 1 - установить соответствующие имена хостов для каждого устройства, R1 и SW1."
    ]
  },
  {
    "time": [
      73.459,
      79.849
    ],
    "en": [
      "We didn’t cover the command in the main video, but to do so you use the ‘hostname’"
    ],
    "ru": [
      "Мы не рассматривали команду в основном видео, но для этого вы используете \"hostname\""
    ]
  },
  {
    "time": [
      79.849,
      82.92
    ],
    "en": [
      "command in global configuration mode."
    ],
    "ru": [
      "команда в режиме глобальной конфигурации."
    ]
  },
  {
    "time": [
      82.92,
      88.159
    ],
    "en": [
      "Click on the device, and then select CLI to access the command line interface from which"
    ],
    "ru": [
      "Щелкните устройство, а затем выберите CLI, чтобы получить доступ к интерфейсу командной строки, из которого"
    ]
  },
  {
    "time": [
      88.159,
      90.32
    ],
    "en": [
      "we will configure each device."
    ],
    "ru": [
      "настроим каждое устройство."
    ]
  },
  {
    "time": [
      90.32,
      96.029
    ],
    "en": [
      "Now, in the lecture video I explained about how to connect to the console port of a device."
    ],
    "ru": [
      "Теперь в видео лекции я объяснил, как подключиться к консольному порту устройства."
    ]
  },
  {
    "time": [
      96.029,
      101.49
    ],
    "en": [
      "In packet tracer, you can actually do that, connect a PC to the console port of the device,"
    ],
    "ru": [
      "В пакетном трассировщике вы действительно можете это сделать, подключив ПК к консольному порту устройства,"
    ]
  },
  {
    "time": [
      101.49,
      104.88
    ],
    "en": [
      "and then use the PC to do the configurations."
    ],
    "ru": [
      "а затем используйте ПК для настройки."
    ]
  },
  {
    "time": [
      104.88,
      109.85
    ],
    "en": [
      "However, simply clicking on the device itself is much more convenient, so that’s what"
    ],
    "ru": [
      "Однако гораздо удобнее просто нажать на само устройство, вот что"
    ]
  },
  {
    "time": [
      109.85,
      112.279
    ],
    "en": [
      "we’ll be doing for these labs."
    ],
    "ru": [
      "мы будем делать это для этих лабораторий."
    ]
  },
  {
    "time": [
      112.279,
      115.92
    ],
    "en": [
      "Just keep in mind that in real life, you can’t configure the device directly on the device"
    ],
    "ru": [
      "Только учтите, что в реальной жизни настроить устройство прямо на нем нельзя."
    ]
  },
  {
    "time": [
      115.92,
      120.979
    ],
    "en": [
      "itself, you have to connect to it with a computer."
    ],
    "ru": [
      "сам, вы должны подключиться к нему с помощью компьютера."
    ]
  },
  {
    "time": [
      120.979,
      124.909
    ],
    "en": [
      "The current hostname for each device is displayed here."
    ],
    "ru": [
      "Здесь отображается текущее имя хоста для каждого устройства."
    ]
  },
  {
    "time": [
      124.909,
      128.789
    ],
    "en": [
      "As you can see, by default the hostname is router."
    ],
    "ru": [
      "Как видите, по умолчанию имя хоста - router."
    ]
  },
  {
    "time": [
      128.789,
      133.24
    ],
    "en": [
      "To change the hostname, we must enter 'Global configuration' mode."
    ],
    "ru": [
      "Чтобы изменить имя хоста, мы должны войти в режим «Глобальная конфигурация»."
    ]
  },
  {
    "time": [
      133.24,
      137.12
    ],
    "en": [
      "However to get there, we must first enter 'Privileged exec' mode."
    ],
    "ru": [
      "Однако, чтобы попасть туда, мы должны сначала войти в режим «Privileged exec»."
    ]
  },
  {
    "time": [
      137.12,
      140.78
    ],
    "en": [
      "This is achieved by using the 'enable' command."
    ],
    "ru": [
      "Это достигается с помощью команды «включить»."
    ]
  },
  {
    "time": [
      140.78,
      147.329
    ],
    "en": [
      "To demonstrate a shortcut, I will use the 'exit' command to return to the previous exec mode."
    ],
    "ru": [
      "Чтобы продемонстрировать ярлык, я воспользуюсь командой «exit», чтобы вернуться в предыдущий режим выполнения."
    ]
  },
  {
    "time": [
      147.329,
      151.78
    ],
    "en": [
      "Notice that you can enter privileged exec mode by simply typing 'en'."
    ],
    "ru": [
      "Обратите внимание, что вы можете войти в привилегированный режим exec, просто набрав «en»."
    ]
  },
  {
    "time": [
      151.78,
      157.67
    ],
    "en": [
      "You can also type 'en' and then use tab to auto-complete it to 'enable', but this isn't necessary."
    ],
    "ru": [
      "Вы также можете ввести «en», а затем использовать вкладку для автозаполнения до «включить», но это не обязательно."
    ]
  },
  {
    "time": [
      157.67,
      160.26
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
      157.67,
      160.26
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
      160.26,
      166.81
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
      160.26,
      166.81
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
      166.81,
      170.709
    ],
    "en": [
      "This is because there are other potential commands that begin with 'e', which we can"
    ],
    "ru": [
      "Это потому, что есть другие потенциальные команды, начинающиеся с 'e', ​​которые мы можем"
    ]
  },
  {
    "time": [
      170.709,
      174.42
    ],
    "en": [
      "see by tying 'e' and then a question mark."
    ],
    "ru": [
      "см., поставив «е» и поставив вопросительный знак."
    ]
  },
  {
    "time": [
      174.42,
      178.33
    ],
    "en": [
      "As you can see, there are two potential commands; enable, and exit."
    ],
    "ru": [
      "Как видите, есть две возможные команды; включить и выйти."
    ]
  },
  {
    "time": [
      178.33,
      183.03
    ],
    "en": [
      "So, if you just enter 'e', the router doesn't know which command you mean."
    ],
    "ru": [
      "Итак, если вы просто введете «е», маршрутизатор не узнает, какую команду вы имеете в виду."
    ]
  },
  {
    "time": [
      183.03,
      189.079
    ],
    "en": [
      "However, 'enable' is the only command beginning with 'en', so 'en' is all the router needs"
    ],
    "ru": [
      "Однако 'enable' - единственная команда, начинающаяся с 'en', поэтому 'en' - это все, что нужно маршрутизатору."
    ]
  },
  {
    "time": [
      189.079,
      192.109
    ],
    "en": [
      "to know which command you mean."
    ],
    "ru": [
      "чтобы узнать, какую команду вы имеете в виду."
    ]
  },
  {
    "time": [
      192.109,
      196.739
    ],
    "en": [
      "Now that we are in privileged exec mode, we can use the 'configure terminal' command to"
    ],
    "ru": [
      "Теперь, когда мы находимся в привилегированном режиме exec, мы можем использовать команду 'configure terminal', чтобы"
    ]
  },
  {
    "time": [
      196.739,
      199.88
    ],
    "en": [
      "get to 'global configuration' mode."
    ],
    "ru": [
      "перейти в режим «глобальной конфигурации»."
    ]
  },
  {
    "time": [
      199.88,
      204.379
    ],
    "en": [
      "If you want to use shortcuts again as we did with enable and 'en', the shortest version"
    ],
    "ru": [
      "Если вы хотите снова использовать ярлыки, как мы делали с enable и 'en', самая короткая версия"
    ]
  },
  {
    "time": [
      204.379,
      209.11
    ],
    "en": [
      "of the 'configure terminal' command is 'conf t'."
    ],
    "ru": [
      "команды 'configure terminal' - 'conf t'."
    ]
  },
  {
    "time": [
      209.11,
      212.02
    ],
    "en": [
      "From here we can set the hostname of the router."
    ],
    "ru": [
      "Отсюда мы можем установить имя хоста маршрутизатора."
    ]
  },
  {
    "time": [
      212.02,
      214.969
    ],
    "en": [
      "This is done with the hostname command."
    ],
    "ru": [
      "Это делается с помощью команды hostname."
    ]
  },
  {
    "time": [
      214.969,
      218.719
    ],
    "en": [
      "I will enter 'hostname R1'."
    ],
    "ru": [
      "Я введу «имя хоста R1»."
    ]
  },
  {
    "time": [
      218.719,
      223.379
    ],
    "en": [
      "As you can see, the hostname has changed from 'router' to 'R1'."
    ],
    "ru": [
      "Как видите, имя хоста изменилось с «router» на «R1»."
    ]
  },
  {
    "time": [
      223.379,
      229.37
    ],
    "en": [
      "Change the hostname of SW1 as well, and that’s all for step 1."
    ],
    "ru": [
      "Также измените имя хоста SW1, и это все для шага 1."
    ]
  },
  {
    "time": [
      229.37,
      235.639
    ],
    "en": [
      "Step 2 is to set the unencrypted enable password on each router to CCNA."
    ],
    "ru": [
      "Шаг 2 - установить CCNA для незашифрованного пароля включения на каждом маршрутизаторе."
    ]
  },
  {
    "time": [
      235.639,
      242.349
    ],
    "en": [
      "The 'enable password' is used to enter privileged exec mode, which is also called enable mode."
    ],
    "ru": [
      "«Пароль включения» используется для входа в привилегированный режим выполнения, который также называется режимом включения."
    ]
  },
  {
    "time": [
      242.349,
      249.18
    ],
    "en": [
      "Previously we had no password set, so we were able to enter privileged exec mode without any password."
    ],
    "ru": [
      "Раньше у нас не было установленного пароля, поэтому мы могли войти в привилегированный режим exec без какого-либо пароля."
    ]
  },
  {
    "time": [
      249.18,
      255.7
    ],
    "en": [
      "Now we are going to protect privileged exec mode so that only administrators can access it."
    ],
    "ru": [
      "Теперь мы собираемся защитить привилегированный режим exec, чтобы только администраторы могли получить к нему доступ."
    ]
  },
  {
    "time": [
      255.7,
      261.53
    ],
    "en": [
      "The command is simple, and it is done in 'global configuration' mode, which we are already in."
    ],
    "ru": [
      "Команда проста и выполняется в режиме «глобальной конфигурации», в котором мы уже находимся."
    ]
  },
  {
    "time": [
      261.53,
      266.28
    ],
    "en": [
      "Type 'enable password CCNA'. That's it."
    ],
    "ru": [
      "Введите «включить пароль CCNA». Вот и все."
    ]
  },
  {
    "time": [
      266.28,
      269.6
    ],
    "en": [
      "Now let's test it out, which is step 3."
    ],
    "ru": [
      "Теперь давайте проверим это, это шаг 3."
    ]
  },
  {
    "time": [
      269.6,
      274.59
    ],
    "en": [
      "From here I will use the exit command twice, once to bring me back to privileged exec mode"
    ],
    "ru": [
      "Отсюда я дважды воспользуюсь командой exit, один раз, чтобы вернуть меня в привилегированный режим exec."
    ]
  },
  {
    "time": [
      274.59,
      278.45
    ],
    "en": [
      "and then once again to bring me back to user exec mode."
    ],
    "ru": [
      "а затем еще раз, чтобы вернуть меня в пользовательский режим exec."
    ]
  },
  {
    "time": [
      278.45,
      284.59
    ],
    "en": [
      "Now I will use the enable command again, however this time I am asked for a password."
    ],
    "ru": [
      "Теперь я снова воспользуюсь командой enable, но на этот раз меня попросят ввести пароль."
    ]
  },
  {
    "time": [
      284.59,
      290.349
    ],
    "en": [
      "The characters do not appear as I type, however if I type the password 'CCNA' correctly and"
    ],
    "ru": [
      "Символы не отображаются по мере ввода, однако, если я правильно ввожу пароль 'CCNA' и"
    ]
  },
  {
    "time": [
      290.349,
      293.88
    ],
    "en": [
      "press enter I am brought to privileged exec mode."
    ],
    "ru": [
      "нажмите Enter. Я перехожу в привилегированный режим exec."
    ]
  },
  {
    "time": [
      293.88,
      297.5
    ],
    "en": [
      "Now let's see what happens if I fail to enter the correct password."
    ],
    "ru": [
      "Теперь посмотрим, что будет, если я не введу правильный пароль."
    ]
  },
  {
    "time": [
      297.5,
      307.02
    ],
    "en": [
      "I enter the wrong password once, twice, and then three times before being rejected for having 'bad secrets'."
    ],
    "ru": [
      "Я ввожу неправильный пароль один, два и три раза, прежде чем меня отклонят за наличие «плохих секретов»."
    ]
  },
  {
    "time": [
      307.02,
      310.85
    ],
    "en": [
      "Now I will try again with the correct password, and I'm in."
    ],
    "ru": [
      "Теперь я попробую еще раз с правильным паролем, и я в игре."
    ]
  },
  {
    "time": [
      310.85,
      313.99
    ],
    "en": [
      "Step 3 is now complete."
    ],
    "ru": [
      "Шаг 3 завершен."
    ]
  },
  {
    "time": [
      313.99,
      318.59
    ],
    "en": [
      "Step 4 is simply to view the password in the running configuration."
    ],
    "ru": [
      "Шаг 4 - просто просмотреть пароль в текущей конфигурации."
    ]
  },
  {
    "time": [
      318.59,
      325.2
    ],
    "en": [
      "The running configuration is the current active configuration of the router, whether or not you have actually saved it."
    ],
    "ru": [
      "Текущая конфигурация - это текущая активная конфигурация маршрутизатора, независимо от того, сохранили ли вы ее на самом деле."
    ]
  },
  {
    "time": [
      325.2,
      330.55
    ],
    "en": [
      "If you turn off the router without saving the running configuration you will lose any changes."
    ],
    "ru": [
      "Если вы выключите маршрутизатор без сохранения текущей конфигурации, вы потеряете все изменения."
    ]
  },
  {
    "time": [
      330.55,
      335.67
    ],
    "en": [
      "If you want to keep your changes you have to save them to the startup configuration."
    ],
    "ru": [
      "Если вы хотите сохранить свои изменения, вы должны сохранить их в стартовой конфигурации."
    ]
  },
  {
    "time": [
      335.67,
      340.479
    ],
    "en": [
      "To view the running configuration, use the show running-config command from privileged"
    ],
    "ru": [
      "Чтобы просмотреть текущую конфигурацию, используйте команду show running-config из привилегированного"
    ]
  },
  {
    "time": [
      340.479,
      343.4
    ],
    "en": [
      "exec mode, which we are already in."
    ],
    "ru": [
      "exec режим, в котором мы уже находимся."
    ]
  },
  {
    "time": [
      343.4,
      348.74
    ],
    "en": [
      "You can abbreviate it too, for example sh run."
    ],
    "ru": [
      "Вы также можете сократить его, например, sh run."
    ]
  },
  {
    "time": [
      348.74,
      353.05
    ],
    "en": [
      "Enter the command, and you can see the password right here, with the exact command we used"
    ],
    "ru": [
      "Введите команду, и вы увидите пароль прямо здесь, с той же командой, которую мы использовали."
    ]
  },
  {
    "time": [
      353.05,
      357.3
    ],
    "en": [
      "before, 'enable password CCNA'."
    ],
    "ru": [
      "перед этим «включить пароль CCNA»."
    ]
  },
  {
    "time": [
      357.3,
      360.81
    ],
    "en": [
      "As you can see it is not encrypted, it is written in clear text right."
    ],
    "ru": [
      "Как видите, он не зашифрован, он написан открытым текстом справа."
    ]
  },
  {
    "time": [
      360.81,
      363.669
    ],
    "en": [
      "Let’s solve that in step 5."
    ],
    "ru": [
      "Давайте решим это на шаге 5."
    ]
  },
  {
    "time": [
      363.669,
      367.13
    ],
    "en": [
      "So step 4 is now complete."
    ],
    "ru": [
      "Итак, шаг 4 завершен."
    ]
  },
  {
    "time": [
      367.13,
      371.349
    ],
    "en": [
      "Step 5 is to enable password encryption on the devices."
    ],
    "ru": [
      "Шаг 5 - включить шифрование паролей на устройствах."
    ]
  },
  {
    "time": [
      371.349,
      375.84
    ],
    "en": [
      "We can protect passwords by encrypting them to render them unreadable."
    ],
    "ru": [
      "Мы можем защитить пароли, зашифровав их, чтобы сделать их нечитаемыми."
    ]
  },
  {
    "time": [
      375.84,
      384.639
    ],
    "en": [
      "This is done from global configuration mode with the command 'service password-encryption'. Conf t. service password-encryption."
    ],
    "ru": [
      "Это делается из режима глобальной конфигурации с помощью команды «шифрование пароля службы». Конф т. сервисное шифрование паролей."
    ]
  },
  {
    "time": [
      384.639,
      388.199
    ],
    "en": [
      "Okay, that’s all for step 5."
    ],
    "ru": [
      "Хорошо, это все, что касается шага 5."
    ]
  },
  {
    "time": [
      388.199,
      392.77
    ],
    "en": [
      "Step 6 is to once again view the running config."
    ],
    "ru": [
      "Шаг 6 - еще раз просмотреть работающую конфигурацию."
    ]
  },
  {
    "time": [
      392.77,
      397.44
    ],
    "en": [
      "I will use the same command as before, and now lets check the password."
    ],
    "ru": [
      "Я буду использовать ту же команду, что и раньше, а теперь давайте проверим пароль."
    ]
  },
  {
    "time": [
      397.44,
      399.69
    ],
    "en": [
      "However the command doesn't work."
    ],
    "ru": [
      "Однако команда не работает."
    ]
  },
  {
    "time": [
      399.69,
      403.87
    ],
    "en": [
      "That is because we are currently in global configuration mode, and show running-config"
    ],
    "ru": [
      "Это потому, что мы в настоящее время находимся в режиме глобальной конфигурации и показываем running-config"
    ]
  },
  {
    "time": [
      403.87,
      406.34
    ],
    "en": [
      "must be entered from privileged exec mode."
    ],
    "ru": [
      "необходимо войти из привилегированного режима exec."
    ]
  },
  {
    "time": [
      406.34,
      412.15
    ],
    "en": [
      "Now, I could type exit to drop back to privileged exec mode and then enter the command."
    ],
    "ru": [
      "Теперь я мог ввести exit, чтобы вернуться в привилегированный режим exec, а затем ввести команду."
    ]
  },
  {
    "time": [
      412.15,
      416.11
    ],
    "en": [
      "But there is one more way, which I demonstrated in the lecture video."
    ],
    "ru": [
      "Но есть еще один способ, который я продемонстрировал в видео лекции."
    ]
  },
  {
    "time": [
      416.11,
      426.49
    ],
    "en": [
      "If I type 'do' in front of the command, I can enter it from global configuration mode. 'do show running-config'. There we go."
    ],
    "ru": [
      "Если я наберу «do» перед командой, я могу ввести ее из режима глобальной конфигурации. 'показать текущую конфигурацию'. Итак, мы идем."
    ]
  },
  {
    "time": [
      426.49,
      428.199
    ],
    "en": [
      "Let's look at the password."
    ],
    "ru": [
      "Посмотрим на пароль."
    ]
  },
  {
    "time": [
      428.199,
      434.97
    ],
    "en": [
      "You can see here 'enable password', followed by a 7 and then a string of other numbers."
    ],
    "ru": [
      "Вы можете увидеть здесь «включить пароль», за которым следует 7, а затем строка других цифр."
    ]
  },
  {
    "time": [
      434.97,
      438.02
    ],
    "en": [
      "The password has successfully been encrypted."
    ],
    "ru": [
      "Пароль успешно зашифрован."
    ]
  },
  {
    "time": [
      438.02,
      444.289
    ],
    "en": [
      "Although we didn't type this 7 when we entered the command, it refers to the type of encryption used."
    ],
    "ru": [
      "Хотя мы не набирали 7 при вводе команды, это относится к используемому типу шифрования."
    ]
  },
  {
    "time": [
      444.289,
      446.599
    ],
    "en": [
      "There are other types as well."
    ],
    "ru": [
      "Есть и другие типы."
    ]
  },
  {
    "time": [
      446.599,
      451.27
    ],
    "en": [
      "The string of numbers that follow are the password 'CCNA', encrypted to be unreadable"
    ],
    "ru": [
      "Следующая строка цифр представляет собой пароль CCNA, зашифрованный, чтобы его нельзя было прочесть."
    ]
  },
  {
    "time": [
      451.27,
      455.97
    ],
    "en": [
      "so that anyone looking over our shoulder can't read the password."
    ],
    "ru": [
      "так что любой, кто смотрит через наше плечо, не может прочитать пароль."
    ]
  },
  {
    "time": [
      455.97,
      460.47
    ],
    "en": [
      "Keep in mind that the encryption used in the 'service password-encryption' isn't very secure"
    ],
    "ru": [
      "Имейте в виду, что шифрование, используемое в «шифровании пароля службы», не очень надежно."
    ]
  },
  {
    "time": [
      460.47,
      466.48
    ],
    "en": [
      "and can be cracked, but this at least renders the password safe from someone simply glancing over your shoulder."
    ],
    "ru": [
      "и может быть взломан, но это, по крайней мере, обезопасит пароль от того, чтобы кто-то просто взглянул вам через плечо."
    ]
  },
  {
    "time": [
      466.48,
      470.62
    ],
    "en": [
      "Step 6 is now complete."
    ],
    "ru": [
      "Шаг 6 завершен."
    ]
  },
  {
    "time": [
      470.62,
      476.09
    ],
    "en": [
      "Step 7 is to configure a more secure, encrypted enable password of ‘Cisco’."
    ],
    "ru": [
      "Шаг 7 - настроить более безопасный зашифрованный пароль включения «Cisco»."
    ]
  },
  {
    "time": [
      476.09,
      479.34
    ],
    "en": [
      "That can be done with the ‘enable secret’ command."
    ],
    "ru": [
      "Это можно сделать с помощью команды «включить секрет»."
    ]
  },
  {
    "time": [
      479.34,
      487.46
    ],
    "en": [
      "The enable secret uses MD5 encryption, which is more secure than what you get with the service password-encryption command."
    ],
    "ru": [
      "Секрет включения использует шифрование MD5, которое более безопасно, чем то, что вы получаете с помощью команды шифрования пароля службы."
    ]
  },
  {
    "time": [
      487.46,
      494.91
    ],
    "en": [
      "Since we’re already in global configuration mode, let’s enter the command. Enable secret Cisco."
    ],
    "ru": [
      "Поскольку мы уже находимся в режиме глобальной конфигурации, давайте введем команду. Включите секретную Cisco."
    ]
  },
  {
    "time": [
      494.91,
      502.639
    ],
    "en": [
      "Now let’s go on to Step 8, which is to exit back to user EXEC mode and try to login. Exit. Exit."
    ],
    "ru": [
      "Теперь перейдем к шагу 8, который заключается в том, чтобы вернуться в пользовательский режим EXEC и попытаться войти в систему. Выход. Выход."
    ]
  },
  {
    "time": [
      502.639,
      507.569
    ],
    "en": [
      "Okay, now let’s try to get back to privileged EXEC mode. Enable."
    ],
    "ru": [
      "Хорошо, а теперь попробуем вернуться в привилегированный режим EXEC. Давать возможность."
    ]
  },
  {
    "time": [
      507.569,
      513.89
    ],
    "en": [
      "Let’s try our original password of ‘CCNA’….it doesn’t work anymore."
    ],
    "ru": [
      "Давайте попробуем наш исходный пароль «CCNA»… он больше не работает."
    ]
  },
  {
    "time": [
      513.89,
      520.19
    ],
    "en": [
      "How about our newly configured enable secret? Cisco...okay, that works."
    ],
    "ru": [
      "Как насчет нашего недавно настроенного секрета включения? Cisco ... хорошо, работает."
    ]
  },
  {
    "time": [
      520.19,
      525.61
    ],
    "en": [
      "As you can see, if both an enable secret and enable password are configured, only the enable"
    ],
    "ru": [
      "Как видите, если настроены и секретный ключ, и пароль включения, только"
    ]
  },
  {
    "time": [
      525.61,
      527.56
    ],
    "en": [
      "secret can be used."
    ],
    "ru": [
      "секрет можно использовать."
    ]
  },
  {
    "time": [
      527.56,
      531.31
    ],
    "en": [
      "The enable password becomes invalid."
    ],
    "ru": [
      "Пароль включения становится недействительным."
    ]
  },
  {
    "time": [
      531.31,
      539.56
    ],
    "en": [
      "Step 9 is to once again view the passwords in the running configuration. Show running-config. There they are."
    ],
    "ru": [
      "Шаг 9 - еще раз просмотреть пароли в текущей конфигурации. Показать running-config. Там они."
    ]
  },
  {
    "time": [
      539.56,
      544.86
    ],
    "en": [
      "Once again, the enable password with service password-encryption enabled uses type 7 encryption,"
    ],
    "ru": [
      "Еще раз, пароль включения с включенным шифрованием пароля службы использует шифрование типа 7,"
    ]
  },
  {
    "time": [
      544.86,
      547.51
    ],
    "en": [
      "indicated by this 7 here."
    ],
    "ru": [
      "обозначается этим 7 здесь."
    ]
  },
  {
    "time": [
      547.51,
      553.68
    ],
    "en": [
      "The enable secret uses type 5 encryption, which is MD5 encryption."
    ],
    "ru": [
      "Секрет включения использует шифрование типа 5, то есть шифрование MD5."
    ]
  },
  {
    "time": [
      553.68,
      558.31
    ],
    "en": [
      "Step 10 is to save the running configuration to the startup configuration."
    ],
    "ru": [
      "Шаг 10 - сохранить текущую конфигурацию в загрузочной конфигурации."
    ]
  },
  {
    "time": [
      558.31,
      560.78
    ],
    "en": [
      "There are three ways to do this."
    ],
    "ru": [
      "Сделать это можно тремя способами."
    ]
  },
  {
    "time": [
      560.78,
      569.67
    ],
    "en": [
      "One is write...another is write memory...and the third is copy running-config startup-config."
    ],
    "ru": [
      "Один - это запись ... другой - запись в память ... и третий - copy running-config startup-config."
    ]
  },
  {
    "time": [
      569.67,
      576.52
    ],
    "en": [
      "Let’s check if its saved. Show startup-config."
    ],
    "ru": [
      "Проверим, сохранилось ли оно. Показать файл startup-config."
    ]
  },
  {
    "time": [
      576.52,
      581.26
    ],
    "en": [
      "There's the config, and you can see the passwords we configured here."
    ],
    "ru": [
      "Вот конфигурация, и вы можете увидеть здесь пароли, которые мы настроили."
    ]
  },
  {
    "time": [
      581.26,
      587.5
    ],
    "en": [
      "If I scroll through you can see lots of other default settings for the device here."
    ],
    "ru": [
      "Если я прокручу страницу, вы увидите множество других настроек устройства по умолчанию."
    ]
  },
  {
    "time": [
      587.5,
      591.56
    ],
    "en": [
      "Step 10 is now complete."
    ],
    "ru": [
      "Шаг 10 завершен."
    ]
  },
  {
    "time": [
      591.56,
      592.82
    ],
    "en": [
      "Thank you for watching."
    ],
    "ru": [
      "Спасибо за просмотр."
    ]
  },
  {
    "time": [
      592.82,
      594.5
    ],
    "en": [
      "That's all for this video."
    ],
    "ru": [
      "Это все для этого видео."
    ]
  },
  {
    "time": [
      594.5,
      600.06
    ],
    "en": [
      "If you want to show your support, please subscribe to the channel, like the video, leave a comment,"
    ],
    "ru": [
      "Если вы хотите показать свою поддержку, подпишитесь на канал, поставьте лайк видео, оставьте комментарий,"
    ]
  },
  {
    "time": [
      600.06,
      603.45
    ],
    "en": [
      "and share the video with anyone else studying for the CCNA."
    ],
    "ru": [
      "и поделитесь видео со всеми, кто учится на CCNA."
    ]
  },
  {
    "time": [
      603.45,
      609.77
    ],
    "en": [
      "I accept donations via cryptocurrency or Patreon via the links in the description."
    ],
    "ru": [
      "Я принимаю пожертвования через криптовалюту или Patreon по ссылкам в описании."
    ]
  },
  {
    "time": [
      609.77,
      617.58
    ],
    "en": [
      "I'm also a Brave verified publisher and accept BAT, or Basic Attention Token, tips via the Brave browser."
    ],
    "ru": [
      "Я также являюсь проверенным издателем Brave и принимаю советы BAT (Basic Attention Token) через браузер Brave."
    ]
  },
  {
    "time": [
      617.58,
      621.65
    ],
    "en": [
      "Click the link in the description to check out Brave, a fast and sleek browser that pays"
    ],
    "ru": [
      "Щелкните ссылку в описании, чтобы попробовать Brave, быстрый и удобный браузер, который платит"
    ]
  },
  {
    "time": [
      621.65,
      623.84
    ],
    "en": [
      "you to surf the Internet."
    ],
    "ru": [
      "вы бродите по Интернету."
    ]
  },
  {
    "time": [
      623.84,
      623.84
    ],
    "en": [
      "That's all for now."
    ],
    "ru": [
      "На этом пока все."
    ]
  }
]