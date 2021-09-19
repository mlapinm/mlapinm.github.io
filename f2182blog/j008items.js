var objs = [
  {
    "time": [
      1.14,
      3.83
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
      3.83,
      11.99
    ],
    "en": [
      "This is a complete course for the CCNA, including everything you need to pass the exam, all 100% free."
    ],
    "ru": [
      "Это полный курс CCNA, включая все необходимое для сдачи экзамена, причем абсолютно бесплатно."
    ]
  },
  {
    "time": [
      11.99,
      15.74
    ],
    "en": [
      "Make sure you stay tuned till the end of the video for the quiz to test your knowledge"
    ],
    "ru": [
      "Следите за новостями до конца видео, чтобы викторина проверила свои знания."
    ]
  },
  {
    "time": [
      15.74,
      18.24
    ],
    "en": [
      "of the material in this video."
    ],
    "ru": [
      "материала в этом видео."
    ]
  },
  {
    "time": [
      18.24,
      23.9
    ],
    "en": [
      "Also, remember to download and use the Anki flashcards with the link in the description,"
    ],
    "ru": [
      "Также не забудьте загрузить и использовать карточки Anki со ссылкой в ​​описании,"
    ]
  },
  {
    "time": [
      23.9,
      29.119
    ],
    "en": [
      "which will help you very much in your studies. Let’s get started."
    ],
    "ru": [
      "что очень поможет вам в учебе. Давайте начнем."
    ]
  },
  {
    "time": [
      29.119,
      35.32
    ],
    "en": [
      "In this fourth lesson, we will finally get started actually configuring some Cisco devices."
    ],
    "ru": [
      "На этом четвертом уроке мы, наконец, приступим к настройке некоторых устройств Cisco."
    ]
  },
  {
    "time": [
      35.32,
      39.5
    ],
    "en": [
      "This lesson is about the Cisco IOS CLI."
    ],
    "ru": [
      "Этот урок посвящен интерфейсу командной строки Cisco IOS."
    ]
  },
  {
    "time": [
      39.5,
      47.629
    ],
    "en": [
      "Cisco IOS is the operating system used on Cisco devices, like Windows on a PC, or macOS on an imac."
    ],
    "ru": [
      "Cisco IOS - это операционная система, используемая на устройствах Cisco, таких как Windows на ПК или macOS на imac."
    ]
  },
  {
    "time": [
      47.629,
      54.199
    ],
    "en": [
      "Keep in mind, Cisco’s IOS is not related to Apple’s iOS for iPhones."
    ],
    "ru": [
      "Имейте в виду, что iOS от Cisco не связана с iOS от Apple для iPhone."
    ]
  },
  {
    "time": [
      54.199,
      57.629
    ],
    "en": [
      "Now, what is a CLI?"
    ],
    "ru": [
      "Итак, что такое CLI?"
    ]
  },
  {
    "time": [
      57.629,
      61.079
    ],
    "en": [
      "CLI stands for command-line interface."
    ],
    "ru": [
      "CLI означает интерфейс командной строки."
    ]
  },
  {
    "time": [
      61.079,
      68.63
    ],
    "en": [
      "It’s the interface you use to configure Cisco devices, like routers, switches, and firewalls."
    ],
    "ru": [
      "Это интерфейс, который вы используете для настройки устройств Cisco, таких как маршрутизаторы, коммутаторы и брандмауэры."
    ]
  },
  {
    "time": [
      68.63,
      72.729
    ],
    "en": [
      "Here’s an image of the Cisco IOS CLI."
    ],
    "ru": [
      "Вот изображение интерфейса командной строки Cisco IOS."
    ]
  },
  {
    "time": [
      72.729,
      76.79
    ],
    "en": [
      "The color scheme can be changed, this is just the default color scheme with the software"
    ],
    "ru": [
      "Цветовую схему можно изменить, это просто цветовая схема по умолчанию с программным обеспечением."
    ]
  },
  {
    "time": [
      76.79,
      79.28
    ],
    "en": [
      "I used when taking this screenshot."
    ],
    "ru": [
      "Я использовал, когда делал этот снимок экрана."
    ]
  },
  {
    "time": [
      79.28,
      85.229
    ],
    "en": [
      "Now, there is also something called a GUI, which means graphical user interface."
    ],
    "ru": [
      "Теперь есть еще что-то, что называется GUI, что означает графический пользовательский интерфейс."
    ]
  },
  {
    "time": [
      85.229,
      92.86
    ],
    "en": [
      "Here’s an example of a Cisco GUI, from Cisco’s ASDM which can be used to configure Cisco's firewalls."
    ],
    "ru": [
      "Вот пример графического интерфейса Cisco из Cisco ASDM, который можно использовать для настройки межсетевых экранов Cisco."
    ]
  },
  {
    "time": [
      92.86,
      99.52
    ],
    "en": [
      "However, we won’t cover GUIs in this course, and most network engineers prefer to use the"
    ],
    "ru": [
      "Однако мы не будем рассматривать графические интерфейсы в этом курсе, и большинство сетевых инженеров предпочитают использовать"
    ]
  },
  {
    "time": [
      99.52,
      102.84
    ],
    "en": [
      "CLI over a GUI."
    ],
    "ru": [
      "CLI через графический интерфейс."
    ]
  },
  {
    "time": [
      102.84,
      108.77
    ],
    "en": [
      "Now, how exactly do you connect to a Cisco device to configure it with the CLI?"
    ],
    "ru": [
      "Теперь, как именно вы подключаетесь к устройству Cisco, чтобы настроить его с помощью интерфейса командной строки?"
    ]
  },
  {
    "time": [
      108.77,
      114.869
    ],
    "en": [
      "There are a couple methods, but I’m going to talk about connecting via the console port."
    ],
    "ru": [
      "Есть несколько способов, но я собираюсь поговорить о подключении через консольный порт."
    ]
  },
  {
    "time": [
      114.869,
      118.68
    ],
    "en": [
      "Connecting to a device via the console port typically involves bringing your laptop to"
    ],
    "ru": [
      "Подключение к устройству через консольный порт обычно включает перенос ноутбука в"
    ]
  },
  {
    "time": [
      118.68,
      123.649
    ],
    "en": [
      "the device and connecting to the console port of the device."
    ],
    "ru": [
      "устройство и подключение к консольному порту устройства."
    ]
  },
  {
    "time": [
      123.649,
      127.93
    ],
    "en": [
      "There are also methods to connect to a device remotely, but we’ll cover that later."
    ],
    "ru": [
      "Существуют также способы удаленного подключения к устройству, но об этом мы поговорим позже."
    ]
  },
  {
    "time": [
      127.93,
      135.15
    ],
    "en": [
      "In any case, when you first configure a device, you have to connect to the console port."
    ],
    "ru": [
      "В любом случае, когда вы впервые настраиваете устройство, вам необходимо подключиться к консольному порту."
    ]
  },
  {
    "time": [
      135.15,
      141.879
    ],
    "en": [
      "This is an image of a Cisco catalyst switch, and notice the two console ports."
    ],
    "ru": [
      "Это изображение коммутатора Cisco Catalyst, обратите внимание на два консольных порта."
    ]
  },
  {
    "time": [
      141.879,
      147.11
    ],
    "en": [
      "one of them is an RJ45 port, just like the switch’s network ports."
    ],
    "ru": [
      "один из них - порт RJ45, как и сетевые порты коммутатора."
    ]
  },
  {
    "time": [
      147.11,
      151.18
    ],
    "en": [
      "The other is a USB mini-b connector."
    ],
    "ru": [
      "Другой - разъем USB mini-b."
    ]
  },
  {
    "time": [
      151.18,
      156.19
    ],
    "en": [
      "You can connect to either of these, but let’s say we’re going to connect to the RJ45 port."
    ],
    "ru": [
      "Вы можете подключиться к любому из них, но предположим, что мы собираемся подключиться к порту RJ45."
    ]
  },
  {
    "time": [
      156.19,
      159.93
    ],
    "en": [
      "You’re going to need the proper cable."
    ],
    "ru": [
      "Вам понадобится подходящий кабель."
    ]
  },
  {
    "time": [
      159.93,
      162.65
    ],
    "en": [
      "This is the kind of cable you will use."
    ],
    "ru": [
      "Именно такой кабель вы будете использовать."
    ]
  },
  {
    "time": [
      162.65,
      169.09
    ],
    "en": [
      "Notice one end has an RJ45 connector, just like the Ethernet UTP cables we looked at."
    ],
    "ru": [
      "Обратите внимание, что на одном конце есть разъем RJ45, как и у кабелей Ethernet UTP, которые мы рассматривали."
    ]
  },
  {
    "time": [
      169.09,
      172.11
    ],
    "en": [
      "The other end is a DB9 connector."
    ],
    "ru": [
      "Другой конец - разъем DB9."
    ]
  },
  {
    "time": [
      172.11,
      177.879
    ],
    "en": [
      "However, most laptops these days no longer have a serial port to plug the cable into,"
    ],
    "ru": [
      "Однако в наши дни у большинства ноутбуков больше нет последовательного порта для подключения кабеля,"
    ]
  },
  {
    "time": [
      177.879,
      185.069
    ],
    "en": [
      "so you’ll probably need an adapter, like this, to connect to a USB port on your laptop."
    ],
    "ru": [
      "так что вам, вероятно, понадобится адаптер, подобный этому, для подключения к USB-порту на вашем ноутбуке."
    ]
  },
  {
    "time": [
      185.069,
      189.459
    ],
    "en": [
      "The actual name of the cable on the left is ‘rollover cable’."
    ],
    "ru": [
      "Фактическое название кабеля слева - «Rollover Cable»."
    ]
  },
  {
    "time": [
      189.459,
      196.43
    ],
    "en": [
      "The name is similar to a crossover cable, but it’s different than an Ethernet UTP crossover cable."
    ],
    "ru": [
      "Название похоже на перекрестный кабель, но отличается от перекрестного кабеля Ethernet UTP."
    ]
  },
  {
    "time": [
      196.43,
      201.19
    ],
    "en": [
      "Like in an Ethernet UTP cable, there are 8 pins on each end that are used."
    ],
    "ru": [
      "Как и в кабеле Ethernet UTP, на каждом конце имеется 8 контактов."
    ]
  },
  {
    "time": [
      201.19,
      212.58
    ],
    "en": [
      "However, they connect like this: pin 1 to pin 8, pin 2 to pin 7, pin 3 to pin 6, pin 4 to"
    ],
    "ru": [
      "Однако они подключаются следующим образом: контакт 1 к контакту 8, контакт 2 к контакту 7, контакт 3 к контакту 6, контакт 4 к контакту"
    ]
  },
  {
    "time": [
      212.58,
      223.78
    ],
    "en": [
      "pin 5, pin 5 to pin 4, pin 6 to pin 3, pin 7 to pin 2, and pin 8 to pin 1."
    ],
    "ru": [
      "штырь 5, штифт 5 к штырю 4, штифт 6 к штырю 3, штифт 7 к штырю 2 и штифт 8 к штырю 1."
    ]
  },
  {
    "time": [
      223.78,
      230.299
    ],
    "en": [
      "So, once you’ve connected your computer to the device, how do you actually access the CLI?"
    ],
    "ru": [
      "Итак, как только вы подключили свой компьютер к устройству, как получить доступ к интерфейсу командной строки?"
    ]
  },
  {
    "time": [
      230.299,
      237.549
    ],
    "en": [
      "Well, you need to use a terminal emulator, this one here, PuTTy, is a popular choice."
    ],
    "ru": [
      "Что ж, вам нужно использовать эмулятор терминала, вот этот PuTTy - популярный выбор."
    ]
  },
  {
    "time": [
      237.549,
      244.489
    ],
    "en": [
      "You can get it at putty.org. select serial, here, and then click open and you should be"
    ],
    "ru": [
      "Вы можете получить его на сайте putty.org. выберите здесь серийный номер, а затем нажмите \"Открыть\", и вы должны быть"
    ]
  },
  {
    "time": [
      244.489,
      247.36
    ],
    "en": [
      "connected to the CLI."
    ],
    "ru": [
      "подключен к CLI."
    ]
  },
  {
    "time": [
      247.36,
      253.2
    ],
    "en": [
      "You should be able to connect with the default settings, but click serial down here, and"
    ],
    "ru": [
      "Вы должны иметь возможность подключиться с настройками по умолчанию, но нажмите здесь серийный номер и"
    ]
  },
  {
    "time": [
      253.2,
      257.77
    ],
    "en": [
      "you can view and edit the default settings for the serial connection."
    ],
    "ru": [
      "вы можете просматривать и редактировать настройки по умолчанию для последовательного соединения."
    ]
  },
  {
    "time": [
      257.77,
      262.02
    ],
    "en": [
      "Note that these settings match the defaults on Cisco devices, so you’ll probably never"
    ],
    "ru": [
      "Обратите внимание, что эти настройки соответствуют настройкам по умолчанию на устройствах Cisco, поэтому вы, вероятно, никогда не"
    ]
  },
  {
    "time": [
      262.02,
      268.16
    ],
    "en": [
      "have to change them, but it’s good to be aware of them, and try to remember them for the test."
    ],
    "ru": [
      "необходимо изменить их, но хорошо знать о них и постараться запомнить их для теста."
    ]
  },
  {
    "time": [
      268.16,
      274.64
    ],
    "en": [
      "The speed, also known as baud rate, is 9,600 bits per second."
    ],
    "ru": [
      "Скорость, также известная как скорость передачи, составляет 9600 бит в секунду."
    ]
  },
  {
    "time": [
      274.64,
      279.89
    ],
    "en": [
      "there are 8 data bits, and 1 stop bit."
    ],
    "ru": [
      "имеется 8 бит данных и 1 стоповый бит."
    ]
  },
  {
    "time": [
      279.89,
      284.8
    ],
    "en": [
      "Understanding data bits and stop bits is outside of the scope of the CCNA, but basically"
    ],
    "ru": [
      "Понимание битов данных и стоповых битов выходит за рамки CCNA, но в основном"
    ]
  },
  {
    "time": [
      284.8,
      292.21
    ],
    "en": [
      "it means that for each 8 bits of data one stop bit is sent, to mark the end of the 8 bits."
    ],
    "ru": [
      "это означает, что для каждых 8 бит данных отправляется один стоповый бит, чтобы отметить конец 8 бит."
    ]
  },
  {
    "time": [
      292.21,
      294.23
    ],
    "en": [
      "Parity is set to none."
    ],
    "ru": [
      "Отсутствует четность."
    ]
  },
  {
    "time": [
      294.23,
      296.68
    ],
    "en": [
      "Parity is used to detect errors."
    ],
    "ru": [
      "Четность используется для обнаружения ошибок."
    ]
  },
  {
    "time": [
      296.68,
      300.46
    ],
    "en": [
      "And finally, flow control is set to none."
    ],
    "ru": [
      "И, наконец, для управления потоком установлено значение «Нет»."
    ]
  },
  {
    "time": [
      300.46,
      304.39
    ],
    "en": [
      "Flow control is exactly what it sounds like, controlling the flow of data from transmitter"
    ],
    "ru": [
      "Управление потоком - это именно то, на что это похоже, управление потоком данных от передатчика"
    ]
  },
  {
    "time": [
      304.39,
      309.43
    ],
    "en": [
      "to receiver, but again you don’t have to worry about the details for the exam."
    ],
    "ru": [
      "приемнику, но, опять же, вам не нужно беспокоиться о деталях экзамена."
    ]
  },
  {
    "time": [
      309.43,
      311.92
    ],
    "en": [
      "Just remember Cisco’s defaults."
    ],
    "ru": [
      "Просто помните настройки Cisco по умолчанию."
    ]
  },
  {
    "time": [
      311.92,
      321.3
    ],
    "en": [
      "Speed of 9600 bits per second, 8 data bits, 1 stop bit, no parity, and no flow control."
    ],
    "ru": [
      "Скорость 9600 бит в секунду, 8 бит данных, 1 стоповый бит, без контроля четности и без управления потоком."
    ]
  },
  {
    "time": [
      321.3,
      327.63
    ],
    "en": [
      "Once you connect to the device, you will be greeted with a screen like this."
    ],
    "ru": [
      "После подключения к устройству вы увидите такой экран."
    ]
  },
  {
    "time": [
      327.63,
      331.8
    ],
    "en": [
      "Since this is the first time booting up the device, I am asked if I would like to enter"
    ],
    "ru": [
      "Поскольку это первая загрузка устройства, меня спрашивают, хочу ли я войти"
    ]
  },
  {
    "time": [
      331.8,
      336.57
    ],
    "en": [
      "the initial configuration dialog, and I answer no."
    ],
    "ru": [
      "диалоговое окно начальной конфигурации, и я отвечаю нет."
    ]
  },
  {
    "time": [
      336.57,
      343.44
    ],
    "en": [
      "Then I pressed the enter key to get started, and I’m now free to type commands into the CLI."
    ],
    "ru": [
      "Затем я нажал клавишу ввода, чтобы начать работу, и теперь я могу вводить команды в интерфейс командной строки."
    ]
  },
  {
    "time": [
      343.44,
      350.25
    ],
    "en": [
      "When you first enter the CLI, you will by default be in what’s called ‘user EXEC mode’."
    ],
    "ru": [
      "Когда вы впервые входите в интерфейс командной строки, вы по умолчанию находитесь в так называемом «пользовательском режиме EXEC»."
    ]
  },
  {
    "time": [
      350.25,
      356.88
    ],
    "en": [
      "User EXEC mode is indicated by the ‘greater than sign’ next to the host name of the device."
    ],
    "ru": [
      "Пользовательский режим EXEC обозначается знаком «больше» рядом с именем хоста устройства."
    ]
  },
  {
    "time": [
      356.88,
      361.31
    ],
    "en": [
      "Note that the default host name for this device is ‘Router’."
    ],
    "ru": [
      "Обратите внимание, что имя хоста по умолчанию для этого устройства - «Маршрутизатор»."
    ]
  },
  {
    "time": [
      361.31,
      366.06
    ],
    "en": [
      "The text displayed here always indicates the hostname of the device."
    ],
    "ru": [
      "Отображаемый здесь текст всегда указывает имя хоста устройства."
    ]
  },
  {
    "time": [
      366.06,
      372.87
    ],
    "en": [
      "All devices have a hostname, and for a Cisco router the default name is Router."
    ],
    "ru": [
      "У всех устройств есть имя хоста, а для маршрутизатора Cisco имя по умолчанию - Router."
    ]
  },
  {
    "time": [
      372.87,
      375.93
    ],
    "en": [
      "User exec mode is very limited."
    ],
    "ru": [
      "Пользовательский режим exec очень ограничен."
    ]
  },
  {
    "time": [
      375.93,
      381.59
    ],
    "en": [
      "Users can look at some things, but can’t make any changes to the configuration."
    ],
    "ru": [
      "Пользователи могут смотреть на некоторые вещи, но не могут вносить изменения в конфигурацию."
    ]
  },
  {
    "time": [
      381.59,
      384.52
    ],
    "en": [
      "Usually you don’t do anything in this mode."
    ],
    "ru": [
      "Обычно в этом режиме вы ничего не делаете."
    ]
  },
  {
    "time": [
      384.52,
      387.18
    ],
    "en": [
      "You also might hear it called just ‘user mode’."
    ],
    "ru": [
      "Вы также можете услышать, что это называется просто «пользовательский режим»."
    ]
  },
  {
    "time": [
      387.18,
      393.38
    ],
    "en": [
      "So, let’s move to a mode with a little more power to make changes to the device."
    ],
    "ru": [
      "Итак, давайте перейдем в режим с чуть большей мощностью, чтобы внести изменения в устройство."
    ]
  },
  {
    "time": [
      393.38,
      400.28
    ],
    "en": [
      "If you enter the ‘enable’ command in user EXEC mode, you will be placed in privileged exec mode."
    ],
    "ru": [
      "Если вы введете команду «enable» в пользовательском режиме EXEC, вы перейдете в привилегированный режим exec."
    ]
  },
  {
    "time": [
      400.28,
      407.37
    ],
    "en": [
      "In privileged exec mode, a pound sign, or hashtag, whatever you want to call it, is displayed."
    ],
    "ru": [
      "В привилегированном режиме exec отображается знак фунта или хэштег, как бы вы его ни называли."
    ]
  },
  {
    "time": [
      407.37,
      415.02
    ],
    "en": [
      "Privileged EXEC mode provides complete access to view the device’s configuration, restart the device, etc."
    ],
    "ru": [
      "Привилегированный режим EXEC обеспечивает полный доступ для просмотра конфигурации устройства, перезапуска устройства и т. Д."
    ]
  },
  {
    "time": [
      415.02,
      419.31
    ],
    "en": [
      "This is not the mode in which you actually change the configuration, however you can"
    ],
    "ru": [
      "Это не тот режим, в котором вы фактически меняете конфигурацию, однако вы можете"
    ]
  },
  {
    "time": [
      419.31,
      426.88
    ],
    "en": [
      "change the time on the device, and also save the current configuration file, among many other things."
    ],
    "ru": [
      "изменить время на устройстве, а также сохранить текущий файл конфигурации, среди прочего."
    ]
  },
  {
    "time": [
      426.88,
      432.62
    ],
    "en": [
      "This is a comparison of the commands available in user EXEC mode, on the left, and privileged"
    ],
    "ru": [
      "Это сравнение команд, доступных в пользовательском режиме EXEC слева и в привилегированном режиме."
    ]
  },
  {
    "time": [
      432.62,
      434.09
    ],
    "en": [
      "EXEC mode, on the right."
    ],
    "ru": [
      "Режим EXEC справа."
    ]
  },
  {
    "time": [
      434.09,
      440.13
    ],
    "en": [
      "Also, I’m taking these screenshots from Cisco Packet Tracer software."
    ],
    "ru": [
      "Кроме того, я делаю эти скриншоты из программного обеспечения Cisco Packet Tracer."
    ]
  },
  {
    "time": [
      440.13,
      442.77
    ],
    "en": [
      "Packet tracer is a network simulator."
    ],
    "ru": [
      "Packet Tracer - симулятор сети."
    ]
  },
  {
    "time": [
      442.77,
      448.56
    ],
    "en": [
      "It is a fantastic resource for the CCNA, but it is limited beyond the CCNA."
    ],
    "ru": [
      "Это фантастический ресурс для CCNA, но он выходит за рамки CCNA."
    ]
  },
  {
    "time": [
      448.56,
      452.65
    ],
    "en": [
      "There are many things which Packet Tracer doesn’t support, so if I were to show these"
    ],
    "ru": [
      "Packet Tracer не поддерживает множество вещей, поэтому, если я покажу эти"
    ]
  },
  {
    "time": [
      452.65,
      458.53
    ],
    "en": [
      "commands on a real device, you would probably see even more commands available here."
    ],
    "ru": [
      "команд на реальном устройстве, вы, вероятно, увидите здесь еще больше команд."
    ]
  },
  {
    "time": [
      458.53,
      463.4
    ],
    "en": [
      "I want to repeat, however, that Packet tracer is an excellent resource for the CCNA and"
    ],
    "ru": [
      "Однако я хочу повторить, что Packet Tracer - отличный ресурс для CCNA и"
    ]
  },
  {
    "time": [
      463.4,
      467.38
    ],
    "en": [
      "you don’t really need to use anything else for your CCNA."
    ],
    "ru": [
      "вам действительно не нужно использовать что-либо еще для вашей CCNA."
    ]
  },
  {
    "time": [
      467.38,
      472.58
    ],
    "en": [
      "One more thing, notice the command I used to view the available commands."
    ],
    "ru": [
      "Еще одна вещь, обратите внимание на команду, которую я использовал для просмотра доступных команд."
    ]
  },
  {
    "time": [
      472.58,
      478.63
    ],
    "en": [
      "You can use a question mark to view the commands that are available to you."
    ],
    "ru": [
      "Вы можете использовать вопросительный знак для просмотра доступных вам команд."
    ]
  },
  {
    "time": [
      478.63,
      482.14
    ],
    "en": [
      "Now I want to show you a convenient feature of the CLI."
    ],
    "ru": [
      "Теперь я хочу показать вам удобную функцию CLI."
    ]
  },
  {
    "time": [
      482.14,
      484.53
    ],
    "en": [
      "That is the tab key."
    ],
    "ru": [
      "Это клавиша табуляции."
    ]
  },
  {
    "time": [
      484.53,
      491.47
    ],
    "en": [
      "In the sample output here, notice the first line says en, the second says enable, and"
    ],
    "ru": [
      "Обратите внимание, что в примере вывода здесь первая строка говорит en, вторая говорит enable и"
    ]
  },
  {
    "time": [
      491.47,
      493.55
    ],
    "en": [
      "then I entered privileged exec mode."
    ],
    "ru": [
      "затем я вошел в привилегированный режим exec."
    ]
  },
  {
    "time": [
      493.55,
      500.11
    ],
    "en": [
      "Well, if you press tab, the CLI will automatically complete the word for you, and display the"
    ],
    "ru": [
      "Что ж, если вы нажмете вкладку, CLI автоматически завершит слово за вас и отобразит"
    ]
  },
  {
    "time": [
      500.11,
      502.39
    ],
    "en": [
      "complete word on a new line."
    ],
    "ru": [
      "полное слово с новой строки."
    ]
  },
  {
    "time": [
      502.39,
      508.34
    ],
    "en": [
      "However, another convenient thing is that you don’t even need to complete the command."
    ],
    "ru": [
      "Однако еще одна удобная вещь - вам даже не нужно выполнять команду."
    ]
  },
  {
    "time": [
      508.34,
      514.82
    ],
    "en": [
      "Here I just typed ‘en’, and hit enter, and I was brought to privileged EXEC mode."
    ],
    "ru": [
      "Здесь я просто набрал \"en\", нажал \"Enter\", и меня перевели в привилегированный режим EXEC."
    ]
  },
  {
    "time": [
      514.82,
      519.66
    ],
    "en": [
      "This can really save you a lot of typing when you’re entering many commands."
    ],
    "ru": [
      "Это действительно может сэкономить вам много времени при вводе большого количества команд."
    ]
  },
  {
    "time": [
      519.66,
      521.94
    ],
    "en": [
      "There are limits to this, however."
    ],
    "ru": [
      "Однако у этого есть пределы."
    ]
  },
  {
    "time": [
      521.94,
      526.0
    ],
    "en": [
      "Although ‘en’ was enough for the router to understand that I meant to use the command"
    ],
    "ru": [
      "Хотя «en» было достаточно, чтобы маршрутизатор понял, что я хотел использовать команду"
    ]
  },
  {
    "time": [
      526.0,
      530.64
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
      526.0,
      530.64
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
      530.64,
      533.58
    ],
    "en": [
      "be entered in user EXEC mode."
    ],
    "ru": [
      "войти в пользовательский режим EXEC."
    ]
  },
  {
    "time": [
      533.58,
      538.75
    ],
    "en": [
      "If I type just ‘e’, however, we are told that it is an ambiguous command."
    ],
    "ru": [
      "Однако если я наберу «е», нам сообщат, что это неоднозначная команда."
    ]
  },
  {
    "time": [
      538.75,
      543.78
    ],
    "en": [
      "That’s because there’s more than one command that begins with e."
    ],
    "ru": [
      "Это потому, что существует несколько команд, начинающихся с e."
    ]
  },
  {
    "time": [
      543.78,
      547.05
    ],
    "en": [
      "How can we view the commands that begin with e?"
    ],
    "ru": [
      "Как мы можем просмотреть команды, начинающиеся с e?"
    ]
  },
  {
    "time": [
      547.05,
      549.28
    ],
    "en": [
      "Well, remember the question mark from before?"
    ],
    "ru": [
      "Ну, помните предыдущий вопросительный знак?"
    ]
  },
  {
    "time": [
      549.28,
      556.05
    ],
    "en": [
      "If I type e, followed by a question mark, it displays the possible commands that begin with e."
    ],
    "ru": [
      "Если я наберу e, а затем поставлю вопросительный знак, отобразятся возможные команды, начинающиеся с e."
    ]
  },
  {
    "time": [
      556.05,
      563.37
    ],
    "en": [
      "There are two, enable and exit, so if I type just ‘e’ and hit enter, the router doesn’t"
    ],
    "ru": [
      "Их два: включить и выйти, поэтому, если я наберу «е» и нажму «Ввод», роутер не"
    ]
  },
  {
    "time": [
      563.37,
      565.47
    ],
    "en": [
      "know which command I want to use."
    ],
    "ru": [
      "знаю, какую команду я хочу использовать."
    ]
  },
  {
    "time": [
      565.47,
      569.23
    ],
    "en": [
      "So, the shortest form of the enable command is ‘en’."
    ],
    "ru": [
      "Итак, самая короткая форма команды включения - «en»."
    ]
  },
  {
    "time": [
      569.23,
      575.14
    ],
    "en": [
      "And, the shortest form of the exit command is ‘ex’."
    ],
    "ru": [
      "И самая короткая форма команды выхода - «ex»."
    ]
  },
  {
    "time": [
      575.14,
      579.27
    ],
    "en": [
      "Now let’s actually make some changes to the router’s configuration."
    ],
    "ru": [
      "Теперь давайте внесем некоторые изменения в конфигурацию маршрутизатора."
    ]
  },
  {
    "time": [
      579.27,
      583.67
    ],
    "en": [
      "To do so, we enter ‘global configuration mode’."
    ],
    "ru": [
      "Для этого мы переходим в «режим глобальной конфигурации»."
    ]
  },
  {
    "time": [
      583.67,
      588.87
    ],
    "en": [
      "The command to enter configuration mode is configure terminal."
    ],
    "ru": [
      "Команда для входа в режим настройки - это настройка терминала."
    ]
  },
  {
    "time": [
      588.87,
      594.84
    ],
    "en": [
      "When in global configuration mode, config is inserted after the hostname."
    ],
    "ru": [
      "В режиме глобальной конфигурации config вставляется после имени хоста."
    ]
  },
  {
    "time": [
      594.84,
      598.47
    ],
    "en": [
      "Once again, you don’t have to type the whole word."
    ],
    "ru": [
      "Еще раз, вам не нужно вводить слово целиком."
    ]
  },
  {
    "time": [
      598.47,
      604.59
    ],
    "en": [
      "Notice I type con, followed by the question mark, and there are two options, configure and connect."
    ],
    "ru": [
      "Обратите внимание, что я ввожу con, за которым следует вопросительный знак, и есть два варианта: настройка и подключение."
    ]
  },
  {
    "time": [
      604.59,
      610.12
    ],
    "en": [
      "So, the shortest possible command for configure is conf, c-o-n-f."
    ],
    "ru": [
      "Итак, самая короткая команда для настройки - это conf, c-o-n-f."
    ]
  },
  {
    "time": [
      610.12,
      618.06
    ],
    "en": [
      "However, terminal is the only option beginning with T, so all I need to type is CONF T to"
    ],
    "ru": [
      "Однако терминал - единственный вариант, начинающийся с T, поэтому все, что мне нужно ввести, это CONF T to"
    ]
  },
  {
    "time": [
      618.06,
      621.09
    ],
    "en": [
      "enter global configuration mode."
    ],
    "ru": [
      "войдите в режим глобальной конфигурации."
    ]
  },
  {
    "time": [
      621.09,
      626.27
    ],
    "en": [
      "From now on, in all of my lab demonstrations and such, I will probably be typing conf t"
    ],
    "ru": [
      "С этого момента во всех моих лабораторных демонстрациях и т. Д. Я, вероятно, буду набирать conf t"
    ]
  },
  {
    "time": [
      626.27,
      629.49
    ],
    "en": [
      "instead of configure terminal."
    ],
    "ru": [
      "вместо настройки терминала."
    ]
  },
  {
    "time": [
      629.49,
      635.57
    ],
    "en": [
      "Try to remember that the full command is configure terminal, but also feel free to use the shortcuts."
    ],
    "ru": [
      "Постарайтесь запомнить, что полная команда - это настройка терминала, но также не стесняйтесь использовать ярлыки."
    ]
  },
  {
    "time": [
      635.57,
      641.56
    ],
    "en": [
      "Now, we don’t want just anyone to be able to make changes to the network configuration,"
    ],
    "ru": [
      "Теперь мы не хотим, чтобы кто-либо мог вносить изменения в конфигурацию сети,"
    ]
  },
  {
    "time": [
      641.56,
      647.18
    ],
    "en": [
      "or even be able to just look at the configuration, because that could be a security risk."
    ],
    "ru": [
      "или даже иметь возможность просто посмотреть на конфигурацию, потому что это может быть угрозой безопасности."
    ]
  },
  {
    "time": [
      647.18,
      652.17
    ],
    "en": [
      "We can protect privileged exec mode with a password, so that if a user enters the ‘enable’"
    ],
    "ru": [
      "Мы можем защитить привилегированный режим exec паролем, чтобы, если пользователь вводит «включить»"
    ]
  },
  {
    "time": [
      652.17,
      657.16
    ],
    "en": [
      "command from user EXEC mode, they are asked for the password."
    ],
    "ru": [
      "из пользовательского режима EXEC, у них запрашивается пароль."
    ]
  },
  {
    "time": [
      657.16,
      662.17
    ],
    "en": [
      "That is done with the command ‘enable password’ in global configuration mode."
    ],
    "ru": [
      "Это делается с помощью команды «включить пароль» в режиме глобальной конфигурации."
    ]
  },
  {
    "time": [
      662.17,
      667.07
    ],
    "en": [
      "First, I want to clarify the use of the question mark."
    ],
    "ru": [
      "Во-первых, я хочу пояснить использование вопросительного знака."
    ]
  },
  {
    "time": [
      667.07,
      671.07
    ],
    "en": [
      "Notice that I used the question mark with no space after password."
    ],
    "ru": [
      "Обратите внимание, что я использовал вопросительный знак без пробела после пароля."
    ]
  },
  {
    "time": [
      671.07,
      673.04
    ],
    "en": [
      "here is the output."
    ],
    "ru": [
      "вот результат."
    ]
  },
  {
    "time": [
      673.04,
      679.05
    ],
    "en": [
      "If you use the question mark with no space, it shows you all possible completions of that word."
    ],
    "ru": [
      "Если вы используете вопросительный знак без пробела, он покажет вам все возможные варианты завершения этого слова."
    ]
  },
  {
    "time": [
      679.05,
      684.24
    ],
    "en": [
      "I already typed the full word password, so it just displays the word again, and there"
    ],
    "ru": [
      "Я уже ввел пароль полностью, так что он просто снова отображает слово, а там"
    ]
  },
  {
    "time": [
      684.24,
      690.7
    ],
    "en": [
      "are no other words that begin with p-a-s-s-w-o-r-d."
    ],
    "ru": [
      "нет других слов, которые начинаются на p-a-s-s-w-o-r-d."
    ]
  },
  {
    "time": [
      690.7,
      695.94
    ],
    "en": [
      "Next I used the question mark again, this time with a space after password."
    ],
    "ru": [
      "Затем я снова использовал вопросительный знак, на этот раз с пробелом после пароля."
    ]
  },
  {
    "time": [
      695.94,
      698.63
    ],
    "en": [
      "Notice the difference in the output."
    ],
    "ru": [
      "Обратите внимание на разницу в выводе."
    ]
  },
  {
    "time": [
      698.63,
      703.59
    ],
    "en": [
      "This time it shows all possible options we could enter next in the command."
    ],
    "ru": [
      "На этот раз он показывает все возможные параметры, которые мы можем ввести следующей в команде."
    ]
  },
  {
    "time": [
      703.59,
      706.79
    ],
    "en": [
      "In this case, I used the middle one."
    ],
    "ru": [
      "В данном случае я использовал средний."
    ]
  },
  {
    "time": [
      706.79,
      710.57
    ],
    "en": [
      "Notice that LINE is in all capital letters."
    ],
    "ru": [
      "Обратите внимание, что СТРОКА написана заглавными буквами."
    ]
  },
  {
    "time": [
      710.57,
      717.74
    ],
    "en": [
      "That means that you don’t actually type LINE, you type a line which will become the password."
    ],
    "ru": [
      "Это означает, что вы на самом деле не набираете LINE, вы набираете строку, которая станет паролем."
    ]
  },
  {
    "time": [
      717.74,
      722.7
    ],
    "en": [
      "I typed CCNA in all capitals as the password."
    ],
    "ru": [
      "В качестве пароля я ввел CCNA заглавными буквами."
    ]
  },
  {
    "time": [
      722.7,
      730.12
    ],
    "en": [
      "Note that Password ARE case-sensitive, so CCNA in capital letters and ccna in lower-case"
    ],
    "ru": [
      "Обратите внимание, что пароль чувствителен к регистру, поэтому CCNA - заглавными буквами, а ccna - строчными буквами."
    ]
  },
  {
    "time": [
      730.12,
      733.65
    ],
    "en": [
      "letters are different passwords."
    ],
    "ru": [
      "буквы разные пароли."
    ]
  },
  {
    "time": [
      733.65,
      737.33
    ],
    "en": [
      "Once again I typed the question mark to check if there are any further options."
    ],
    "ru": [
      "Я снова набрал вопросительный знак, чтобы проверить, есть ли еще какие-нибудь варианты."
    ]
  },
  {
    "time": [
      737.33,
      744.46
    ],
    "en": [
      "This cr means that there are no further options, the only option is to press enter to enter the command."
    ],
    "ru": [
      "Это cr означает, что других параметров нет, единственный вариант - нажать Enter для ввода команды."
    ]
  },
  {
    "time": [
      744.46,
      748.86
    ],
    "en": [
      "I pressed enter, and now the password is set. Let’s test it."
    ],
    "ru": [
      "Я нажал Enter, и теперь пароль установлен. Давай проверим."
    ]
  },
  {
    "time": [
      748.86,
      752.62
    ],
    "en": [
      "So, let’s test out our password."
    ],
    "ru": [
      "Итак, давайте проверим наш пароль."
    ]
  },
  {
    "time": [
      752.62,
      759.11
    ],
    "en": [
      "I type exit to return to privileged EXEC mode. from privileged exec mode, if I type exit"
    ],
    "ru": [
      "Я набираю exit, чтобы вернуться в привилегированный режим EXEC. из привилегированного режима exec, если я наберу exit"
    ]
  },
  {
    "time": [
      759.11,
      764.06
    ],
    "en": [
      "again I am logged out of the device and see the starting screen again."
    ],
    "ru": [
      "Я снова выхожу из системы и снова вижу стартовый экран."
    ]
  },
  {
    "time": [
      764.06,
      765.13
    ],
    "en": [
      "If I press enter here"
    ],
    "ru": [
      "Если я нажму здесь"
    ]
  },
  {
    "time": [
      765.13,
      770.05
    ],
    "en": [
      "I am brought back to user exec mode."
    ],
    "ru": [
      "Я вернулся в пользовательский режим exec."
    ]
  },
  {
    "time": [
      770.05,
      774.69
    ],
    "en": [
      "If I enter the enable command, I am asked for a password."
    ],
    "ru": [
      "Если я введу команду enable, меня попросят ввести пароль."
    ]
  },
  {
    "time": [
      774.69,
      778.63
    ],
    "en": [
      "No password displays here, but I am brought to privileged exec mode."
    ],
    "ru": [
      "Здесь пароль не отображается, но меня переводят в привилегированный режим exec."
    ]
  },
  {
    "time": [
      778.63,
      784.25
    ],
    "en": [
      "That’s because the password does not display as you type it, for security purposes."
    ],
    "ru": [
      "Это связано с тем, что пароль не отображается при вводе в целях безопасности."
    ]
  },
  {
    "time": [
      784.25,
      792.11
    ],
    "en": [
      "Also, note that if you enter the wrong password 3 times , you will be denied access for having ‘bad secrets’."
    ],
    "ru": [
      "Также обратите внимание, что если вы введете неправильный пароль 3 раза, вам будет отказано в доступе из-за наличия «плохих секретов»."
    ]
  },
  {
    "time": [
      792.11,
      797.93
    ],
    "en": [
      "I think everyone has bad secrets of some kind, but in this case it means an incorrect password."
    ],
    "ru": [
      "Я думаю, что у всех есть какие-то плохие секреты, но в данном случае это означает неправильный пароль."
    ]
  },
  {
    "time": [
      797.93,
      802.8
    ],
    "en": [
      "Let’s review what we’ve done so far."
    ],
    "ru": [
      "Давайте посмотрим, что мы уже сделали."
    ]
  },
  {
    "time": [
      802.8,
      807.19
    ],
    "en": [
      "In my experience it was difficult to get used to operating in the CLI when I first started"
    ],
    "ru": [
      "По моему опыту, когда я только начинал, было сложно привыкнуть к работе в интерфейсе командной строки."
    ]
  },
  {
    "time": [
      807.19,
      811.37
    ],
    "en": [
      "learning, so we’ll take it slow and review along the way."
    ],
    "ru": [
      "обучения, поэтому мы будем делать это медленно и попутно проверять."
    ]
  },
  {
    "time": [
      811.37,
      819.05
    ],
    "en": [
      "Also, make sure to check out the next video after you finish this, which will have you doing these same tasks in packet tracer."
    ],
    "ru": [
      "Кроме того, не забудьте посмотреть следующее видео после того, как вы закончите это, в котором вы будете выполнять те же задачи в пакетном трассировщике."
    ]
  },
  {
    "time": [
      819.05,
      823.15
    ],
    "en": [
      "Hands-on practice is absolutely essential to get comfortable with the CLI."
    ],
    "ru": [
      "Практическая практика абсолютно необходима для освоения интерфейса командной строки."
    ]
  },
  {
    "time": [
      823.15,
      828.74
    ],
    "en": [
      "So, I use the enable command to enter privileged exec mode."
    ],
    "ru": [
      "Итак, я использую команду enable для входа в привилегированный режим exec."
    ]
  },
  {
    "time": [
      828.74,
      835.02
    ],
    "en": [
      "From privileged exec mode, I use configure terminal to enter global configuration mode."
    ],
    "ru": [
      "В привилегированном режиме exec я использую терминал настройки для входа в режим глобальной конфигурации."
    ]
  },
  {
    "time": [
      835.02,
      841.56
    ],
    "en": [
      "In global configuration mode, I use the command enable password CCNA to protect privileged"
    ],
    "ru": [
      "В режиме глобальной конфигурации я использую команду enable password CCNA для защиты привилегированных"
    ]
  },
  {
    "time": [
      841.56,
      843.41
    ],
    "en": [
      "exec mode with a password."
    ],
    "ru": [
      "режим exec с паролем."
    ]
  },
  {
    "time": [
      843.41,
      848.23
    ],
    "en": [
      "Remember, this password is case-sensitive."
    ],
    "ru": [
      "Помните, что этот пароль чувствителен к регистру."
    ]
  },
  {
    "time": [
      848.23,
      852.19
    ],
    "en": [
      "Then I type exit to return to privileged exec mode."
    ],
    "ru": [
      "Затем я набираю exit, чтобы вернуться в привилегированный режим exec."
    ]
  },
  {
    "time": [
      852.19,
      855.779
    ],
    "en": [
      "And exit again to return to user exec mode."
    ],
    "ru": [
      "И снова выйдите, чтобы вернуться в пользовательский режим exec."
    ]
  },
  {
    "time": [
      855.779,
      858.06
    ],
    "en": [
      "I type enable again."
    ],
    "ru": [
      "Я снова набираю включить."
    ]
  },
  {
    "time": [
      858.06,
      866.46
    ],
    "en": [
      "then I enter the password, which isn’t displayed as I type it, and I am brought back into privileged EXEC mode."
    ],
    "ru": [
      "затем я ввожу пароль, который не отображается при вводе, и возвращаюсь в привилегированный режим EXEC."
    ]
  },
  {
    "time": [
      866.46,
      870.31
    ],
    "en": [
      "We confirmed the function of the password, but let’s take a look at the configuration"
    ],
    "ru": [
      "Мы подтвердили функцию пароля, но давайте посмотрим на конфигурацию"
    ]
  },
  {
    "time": [
      870.31,
      873.529
    ],
    "en": [
      "file itself to check it."
    ],
    "ru": [
      "файл, чтобы проверить это."
    ]
  },
  {
    "time": [
      873.529,
      878.22
    ],
    "en": [
      "First I want to explain the two configuration files kept on the device."
    ],
    "ru": [
      "Сначала я хочу объяснить два файла конфигурации, которые хранятся на устройстве."
    ]
  },
  {
    "time": [
      878.22,
      883.5
    ],
    "en": [
      "As I said, there are two separate configuration files kept on the device at once."
    ],
    "ru": [
      "Как я уже сказал, на устройстве хранятся сразу два отдельных файла конфигурации."
    ]
  },
  {
    "time": [
      883.5,
      886.13
    ],
    "en": [
      "One is the running-config."
    ],
    "ru": [
      "Один из них - это рабочая конфигурация."
    ]
  },
  {
    "time": [
      886.13,
      890.59
    ],
    "en": [
      "This is the current, active configuration file on the device."
    ],
    "ru": [
      "Это текущий активный файл конфигурации на устройстве."
    ]
  },
  {
    "time": [
      890.59,
      896.21
    ],
    "en": [
      "As you enter commands in the CLI, you edit the active configuration."
    ],
    "ru": [
      "Когда вы вводите команды в CLI, вы редактируете активную конфигурацию."
    ]
  },
  {
    "time": [
      896.21,
      902.64
    ],
    "en": [
      "The startup-config is the configuration file that will be loaded upon restart of the device."
    ],
    "ru": [
      "Start-config - это файл конфигурации, который будет загружен при перезапуске устройства."
    ]
  },
  {
    "time": [
      902.64,
      910.32
    ],
    "en": [
      "If you reload the device, or shut it down and then turn it on later, the startup-config will be loaded."
    ],
    "ru": [
      "Если вы перезагрузите устройство или выключите его, а затем включите позже, загрузится конфигурация запуска."
    ]
  },
  {
    "time": [
      910.32,
      914.3
    ],
    "en": [
      "So let’s take a look at the configuration files."
    ],
    "ru": [
      "Итак, давайте взглянем на файлы конфигурации."
    ]
  },
  {
    "time": [
      914.3,
      921.779
    ],
    "en": [
      "Use the ‘show running-config’ command in global configuration mode to view the running configuration file."
    ],
    "ru": [
      "Используйте команду «show running-config» в режиме глобальной конфигурации, чтобы просмотреть файл текущей конфигурации."
    ]
  },
  {
    "time": [
      921.779,
      927.26
    ],
    "en": [
      "There is lots of data in the file by default, so I only included the output up to the command we entered."
    ],
    "ru": [
      "По умолчанию в файле много данных, поэтому я включил вывод только до введенной нами команды."
    ]
  },
  {
    "time": [
      927.26,
      933.88
    ],
    "en": [
      "Here’s the command, enable password CCNA, in the running-config."
    ],
    "ru": [
      "Вот команда, включите пароль CCNA, в файле running-config."
    ]
  },
  {
    "time": [
      933.88,
      936.339
    ],
    "en": [
      "How about the startup-config?"
    ],
    "ru": [
      "Как насчет конфигурации запуска?"
    ]
  },
  {
    "time": [
      936.339,
      942.18
    ],
    "en": [
      "You can view it with the show startup-config command, however as you can see, at this point"
    ],
    "ru": [
      "Вы можете просмотреть его с помощью команды show startup-config, однако, как видите, на данный момент"
    ]
  },
  {
    "time": [
      942.18,
      946.82
    ],
    "en": [
      "it just displays the message ‘startup-config is not present’."
    ],
    "ru": [
      "он просто отображает сообщение «start-config is not present»."
    ]
  },
  {
    "time": [
      946.82,
      951.68
    ],
    "en": [
      "This is because we haven’t saved the running configuration yet, so every time we restart"
    ],
    "ru": [
      "Это связано с тем, что мы еще не сохранили текущую конфигурацию, поэтому каждый раз при перезапуске"
    ]
  },
  {
    "time": [
      951.68,
      955.88
    ],
    "en": [
      "the router it will load a default configuration, not the startup-configuration."
    ],
    "ru": [
      "маршрутизатор загрузит конфигурацию по умолчанию, а не конфигурацию запуска."
    ]
  },
  {
    "time": [
      955.88,
      960.99
    ],
    "en": [
      "Let’s save the configuration file."
    ],
    "ru": [
      "Сохраним файл конфигурации."
    ]
  },
  {
    "time": [
      960.99,
      967.339
    ],
    "en": [
      "There are actually three ways you can save the running-configuration, to make it the startup-configuration."
    ],
    "ru": [
      "На самом деле есть три способа сохранить текущую конфигурацию, чтобы сделать ее конфигурацией запуска."
    ]
  },
  {
    "time": [
      967.339,
      971.83
    ],
    "en": [
      "All three of these commands are executed from privileged exec mode."
    ],
    "ru": [
      "Все три команды выполняются из привилегированного режима exec."
    ]
  },
  {
    "time": [
      971.83,
      973.92
    ],
    "en": [
      "The first is ‘write’."
    ],
    "ru": [
      "Первый - «писать»."
    ]
  },
  {
    "time": [
      973.92,
      980.82
    ],
    "en": [
      "It says building configuration, and then an OK message to indicate that the configuration was saved."
    ],
    "ru": [
      "В нем говорится о конфигурации сборки, а затем появляется сообщение OK, указывающее, что конфигурация была сохранена."
    ]
  },
  {
    "time": [
      980.82,
      985.99
    ],
    "en": [
      "The second method is write memory, it performs the same function."
    ],
    "ru": [
      "Второй метод - это запись в память, он выполняет ту же функцию."
    ]
  },
  {
    "time": [
      985.99,
      990.79
    ],
    "en": [
      "The third command is copy running-config startup-config."
    ],
    "ru": [
      "Третья команда - скопировать running-config startup-config."
    ]
  },
  {
    "time": [
      990.79,
      996.62
    ],
    "en": [
      "This tells the router to copy the running-config file to the startup-config file, again performing"
    ],
    "ru": [
      "Это указывает маршрутизатору скопировать файл рабочей конфигурации в файл начальной конфигурации, снова выполняя"
    ]
  },
  {
    "time": [
      996.62,
      1000.31
    ],
    "en": [
      "the same function as the previous two commands."
    ],
    "ru": [
      "та же функция, что и предыдущие две команды."
    ]
  },
  {
    "time": [
      1000.31,
      1005.18
    ],
    "en": [
      "Now if I use the show startup-config command again, it displays the same configuration"
    ],
    "ru": [
      "Теперь, если я снова использую команду show startup-config, она отображает ту же конфигурацию."
    ]
  },
  {
    "time": [
      1005.18,
      1008.87
    ],
    "en": [
      "as the show running-config command."
    ],
    "ru": [
      "как команду show running-config."
    ]
  },
  {
    "time": [
      1008.87,
      1013.66
    ],
    "en": [
      "Once again, however, this is only the beginning of the output, there is more below."
    ],
    "ru": [
      "И снова, однако, это только начало вывода, подробнее об этом ниже."
    ]
  },
  {
    "time": [
      1013.66,
      1018.529
    ],
    "en": [
      "We’ll check it out in the packet tracer lab video coming up next."
    ],
    "ru": [
      "Мы проверим это в следующем видео о лаборатории по отслеживанию пакетов."
    ]
  },
  {
    "time": [
      1018.529,
      1023.85
    ],
    "en": [
      "Now, you can see the enable password right here, in plain text."
    ],
    "ru": [
      "Теперь вы можете увидеть пароль включения прямо здесь, в виде обычного текста."
    ]
  },
  {
    "time": [
      1023.85,
      1029.35
    ],
    "en": [
      "This is a security risk, because anyone who simply takes a glance at this password knows"
    ],
    "ru": [
      "Это угроза безопасности, потому что любой, кто просто взглянет на этот пароль, знает"
    ]
  },
  {
    "time": [
      1029.35,
      1034.99
    ],
    "en": [
      "how to get into privileged exec mode, and then global configuration mode to make changes to the device."
    ],
    "ru": [
      "как войти в привилегированный режим exec, а затем в режим глобальной конфигурации для внесения изменений в устройство."
    ]
  },
  {
    "time": [
      1034.99,
      1038.929
    ],
    "en": [
      "Let’s level up the security a bit."
    ],
    "ru": [
      "Давайте немного повысим уровень безопасности."
    ]
  },
  {
    "time": [
      1038.929,
      1046.15
    ],
    "en": [
      "You can do so with the ‘service password-encryption’ command in global configuration mode."
    ],
    "ru": [
      "Вы можете сделать это с помощью команды «service password-encryption» в режиме глобальной конфигурации."
    ]
  },
  {
    "time": [
      1046.15,
      1053.179
    ],
    "en": [
      "Notice I used the short version of configure terminal, conf t, to enter global configuration mode."
    ],
    "ru": [
      "Обратите внимание, что я использовал сокращенную версию терминала настройки, conf t, для входа в режим глобальной конфигурации."
    ]
  },
  {
    "time": [
      1053.179,
      1055.86
    ],
    "en": [
      "Remember that all of these commands have shortcuts."
    ],
    "ru": [
      "Помните, что у всех этих команд есть ярлыки."
    ]
  },
  {
    "time": [
      1055.86,
      1061.36
    ],
    "en": [
      "I’ll usually use the full command for these instructional videos, but in the labs"
    ],
    "ru": [
      "Обычно я использую полную команду для этих обучающих видео, но в лабораторных условиях"
    ]
  },
  {
    "time": [
      1061.36,
      1065.68
    ],
    "en": [
      "when I enter the commands live you’ll see me using the shortcuts a lot."
    ],
    "ru": [
      "когда я ввожу команды вживую, вы увидите, как я часто использую ярлыки."
    ]
  },
  {
    "time": [
      1065.68,
      1071.27
    ],
    "en": [
      "Anyway, the service password-encryption command will encrypt all passwords in a jumble of"
    ],
    "ru": [
      "В любом случае, команда service password-encryption зашифрует все пароли в беспорядке."
    ]
  },
  {
    "time": [
      1071.27,
      1075.85
    ],
    "en": [
      "numbers and letters, so that they cannot be easily read."
    ],
    "ru": [
      "цифры и буквы, чтобы их было трудно прочитать."
    ]
  },
  {
    "time": [
      1075.85,
      1086.62
    ],
    "en": [
      "If I enter the show running-config command again, notice that the password ‘CCNA’ has become 08026F6028."
    ],
    "ru": [
      "Если я снова введу команду show running-config, обратите внимание, что пароль «CCNA» стал 08026F6028."
    ]
  },
  {
    "time": [
      1086.62,
      1092.059
    ],
    "en": [
      "The password itself hasn’t changed, it is still CCNA, only the way it is displayed in"
    ],
    "ru": [
      "Сам пароль не изменился, он по-прежнему CCNA, только так, как он отображается в"
    ]
  },
  {
    "time": [
      1092.059,
      1094.59
    ],
    "en": [
      "the configuration has changed."
    ],
    "ru": [
      "конфигурация изменилась."
    ]
  },
  {
    "time": [
      1094.59,
      1099.73
    ],
    "en": [
      "Also, you may notice that a 7 has appeared before the password."
    ],
    "ru": [
      "Также вы можете заметить, что перед паролем стоит цифра 7."
    ]
  },
  {
    "time": [
      1099.73,
      1105.06
    ],
    "en": [
      "This number ‘7’ indicates the type of encryption used to encrypt the password."
    ],
    "ru": [
      "Это число «7» указывает на тип шифрования, используемый для шифрования пароля."
    ]
  },
  {
    "time": [
      1105.06,
      1110.91
    ],
    "en": [
      "The number 7 means it is using Cisco’s proprietary encryption algorithm, from the service password-encryption"
    ],
    "ru": [
      "Число 7 означает, что он использует собственный алгоритм шифрования Cisco, из службы шифрования паролей."
    ]
  },
  {
    "time": [
      1110.91,
      1116.97
    ],
    "en": [
      "command. Later in this video you will see another number in that place."
    ],
    "ru": [
      "команда. Позже в этом видео вы увидите другое число в этом месте."
    ]
  },
  {
    "time": [
      1116.97,
      1122.47
    ],
    "en": [
      "While using the ‘service password-encryption’ command is more secure than not using it,"
    ],
    "ru": [
      "Хотя использование команды «служебный пароль-шифрование» более безопасно, чем ее неиспользование,"
    ]
  },
  {
    "time": [
      1122.47,
      1125.5
    ],
    "en": [
      "it’s still not very secure."
    ],
    "ru": [
      "это все еще не очень безопасно."
    ]
  },
  {
    "time": [
      1125.5,
      1131.52
    ],
    "en": [
      "In this screenshot I simply searched for a cisco type 7 password cracker on google, found"
    ],
    "ru": [
      "На этом снимке экрана я просто искал взломщик паролей cisco type 7 в Google, нашел"
    ]
  },
  {
    "time": [
      1131.52,
      1137.24
    ],
    "en": [
      "this website, and was able to crack the password in a few seconds."
    ],
    "ru": [
      "этот веб-сайт, и смог взломать пароль за несколько секунд."
    ]
  },
  {
    "time": [
      1137.24,
      1141.17
    ],
    "en": [
      "The good news, though, is that there is a more secure enable password that can be used"
    ],
    "ru": [
      "Хорошая новость заключается в том, что существует более безопасный пароль включения, который можно использовать."
    ]
  },
  {
    "time": [
      1141.17,
      1145.88
    ],
    "en": [
      "on Cisco devices, with a tougher type of encryption."
    ],
    "ru": [
      "на устройствах Cisco с более жестким типом шифрования."
    ]
  },
  {
    "time": [
      1145.88,
      1153.25
    ],
    "en": [
      "The more secure method is to use the enable secret command, instead of the enable password command."
    ],
    "ru": [
      "Более безопасный метод - использовать команду enable secret вместо команды enable password."
    ]
  },
  {
    "time": [
      1153.25,
      1161.0
    ],
    "en": [
      "This time I used a password of Cisco, with an upper-case C. Once again, this is case-sensitive."
    ],
    "ru": [
      "На этот раз я использовал пароль Cisco с заглавными буквами C. И снова здесь учитывается регистр."
    ]
  },
  {
    "time": [
      1161.0,
      1164.27
    ],
    "en": [
      "Then I view the running configuration once more."
    ],
    "ru": [
      "Затем я еще раз просматриваю текущую конфигурацию."
    ]
  },
  {
    "time": [
      1164.27,
      1171.54
    ],
    "en": [
      "However, since I was still in global configuration mode, I typed ‘do’ in front of the command."
    ],
    "ru": [
      "Однако, поскольку я все еще находился в режиме глобальной конфигурации, я набрал «do» перед командой."
    ]
  },
  {
    "time": [
      1171.54,
      1175.76
    ],
    "en": [
      "This is a convenient trick that allows you to execute privileged exec mode commands like"
    ],
    "ru": [
      "Это удобный трюк, который позволяет вам выполнять команды привилегированного режима exec, такие как"
    ]
  },
  {
    "time": [
      1175.76,
      1182.37
    ],
    "en": [
      "show running-config or show startup-config, in other configuration levels."
    ],
    "ru": [
      "show running-config или show startup-config на других уровнях конфигурации."
    ]
  },
  {
    "time": [
      1182.37,
      1191.03
    ],
    "en": [
      "Also notice I used shortcuts, sh instead of show, and run instead of running-config."
    ],
    "ru": [
      "Также обратите внимание, что я использовал ярлыки, sh вместо show и run вместо running-config."
    ]
  },
  {
    "time": [
      1191.03,
      1195.12
    ],
    "en": [
      "Now you can see the enable secret in the running-configuration."
    ],
    "ru": [
      "Теперь вы можете увидеть секрет включения в текущей конфигурации."
    ]
  },
  {
    "time": [
      1195.12,
      1199.01
    ],
    "en": [
      "Notice the number 5 before the encrypted password."
    ],
    "ru": [
      "Обратите внимание на цифру 5 перед зашифрованным паролем."
    ]
  },
  {
    "time": [
      1199.01,
      1204.17
    ],
    "en": [
      "Number 5 indicates MD5 type encryption, which is much more secure than what we got with"
    ],
    "ru": [
      "Число 5 указывает на шифрование типа MD5, которое намного безопаснее, чем то, что мы получили с"
    ]
  },
  {
    "time": [
      1204.17,
      1207.48
    ],
    "en": [
      "the service password-encryption command."
    ],
    "ru": [
      "команда шифрования пароля службы."
    ]
  },
  {
    "time": [
      1207.48,
      1213.21
    ],
    "en": [
      "It can still be cracked, no password is invincible, but its much better."
    ],
    "ru": [
      "Его все еще можно взломать, никакой пароль не является непобедимым, но это намного лучше."
    ]
  },
  {
    "time": [
      1213.21,
      1218.37
    ],
    "en": [
      "Also notice that the enable password command remains, it isn’t replaced."
    ],
    "ru": [
      "Также обратите внимание, что команда включения пароля остается, она не заменяется."
    ]
  },
  {
    "time": [
      1218.37,
      1224.1
    ],
    "en": [
      "However, if both the enable secret and enable password commands are configured, the enable"
    ],
    "ru": [
      "Однако, если настроены и команды enable secret, и enable password, команда enable"
    ]
  },
  {
    "time": [
      1224.1,
      1229.52
    ],
    "en": [
      "password will be ignored, only the enable secret will be valid."
    ],
    "ru": [
      "пароль будет проигнорирован, действителен только секрет включения."
    ]
  },
  {
    "time": [
      1229.52,
      1236.77
    ],
    "en": [
      "One final note, the ‘service password-encryption’ command has NO effect on the enable secret command."
    ],
    "ru": [
      "И последнее замечание: команда «service password-encryption» НЕ влияет на команду enable secret."
    ]
  },
  {
    "time": [
      1236.77,
      1242.62
    ],
    "en": [
      "The enable secret is always encrypted, whether or not you entered the service password-encryption command."
    ],
    "ru": [
      "Секрет включения всегда зашифрован, вне зависимости от того, ввели вы команду шифрования пароля службы или нет."
    ]
  },
  {
    "time": [
      1242.62,
      1247.771
    ],
    "en": [
      "So, really you should always use the enable secret, instead of the enable password, as"
    ],
    "ru": [
      "Итак, на самом деле вы всегда должны использовать секрет включения вместо пароля включения, как"
    ]
  },
  {
    "time": [
      1247.771,
      1251.28
    ],
    "en": [
      "it is more secure."
    ],
    "ru": [
      "это более безопасно."
    ]
  },
  {
    "time": [
      1251.28,
      1257.29
    ],
    "en": [
      "Now I want to show you one more thing in the CLI before we move on to the quiz for today’s video."
    ],
    "ru": [
      "Теперь я хочу показать вам еще одну вещь в интерфейсе командной строки, прежде чем мы перейдем к тесту для сегодняшнего видео."
    ]
  },
  {
    "time": [
      1257.29,
      1262.32
    ],
    "en": [
      "That is, how you cancel, or delete, a command that you entered."
    ],
    "ru": [
      "То есть, как вы отменяете или удаляете введенную вами команду."
    ]
  },
  {
    "time": [
      1262.32,
      1266.71
    ],
    "en": [
      "That is done by typing ‘no’ in front of the command."
    ],
    "ru": [
      "Для этого введите «нет» перед командой."
    ]
  },
  {
    "time": [
      1266.71,
      1272.39
    ],
    "en": [
      "For example, if I type ‘no’ in front of the service password encryption command, future"
    ],
    "ru": [
      "Например, если я введу «нет» перед командой шифрования пароля службы, в будущем"
    ]
  },
  {
    "time": [
      1272.39,
      1274.98
    ],
    "en": [
      "passwords will no longer be encrypted."
    ],
    "ru": [
      "пароли больше не будут зашифрованы."
    ]
  },
  {
    "time": [
      1274.98,
      1281.64
    ],
    "en": [
      "However, as you can see here, passwords which are already encrypted will NOT be decrypted"
    ],
    "ru": [
      "Однако, как вы можете видеть здесь, уже зашифрованные пароли НЕ будут расшифрованы."
    ]
  },
  {
    "time": [
      1281.64,
      1285.049
    ],
    "en": [
      "by disabling service password-encryption."
    ],
    "ru": [
      "отключив сервисное шифрование паролей."
    ]
  },
  {
    "time": [
      1285.049,
      1290.549
    ],
    "en": [
      "If I enter a new password, however, it will be in clear text, NOT encrypted."
    ],
    "ru": [
      "Однако если я введу новый пароль, он будет открытым текстом, НЕ зашифрованным."
    ]
  },
  {
    "time": [
      1290.549,
      1296.24
    ],
    "en": [
      "So, let me summarize the service-password encryption command."
    ],
    "ru": [
      "Итак, позвольте мне резюмировать команду шифрования служебного пароля."
    ]
  },
  {
    "time": [
      1296.24,
      1303.48
    ],
    "en": [
      "If you enable service password-encryption.. current passowords will be encrypted."
    ],
    "ru": [
      "Если вы включите шифрование сервисных паролей .. текущие пароли будут зашифрованы."
    ]
  },
  {
    "time": [
      1303.48,
      1307.0
    ],
    "en": [
      "future passwords will also be encrypted."
    ],
    "ru": [
      "будущие пароли также будут зашифрованы."
    ]
  },
  {
    "time": [
      1307.0,
      1312.74
    ],
    "en": [
      "Once again, however, the enable secret will not be affected, it is always encrypted."
    ],
    "ru": [
      "Еще раз, однако, секрет включения не будет затронут, он всегда зашифрован."
    ]
  },
  {
    "time": [
      1312.74,
      1321.96
    ],
    "en": [
      "If you disable service password-encryption... current passwords will not be decrypted, they will remain encrypted."
    ],
    "ru": [
      "Если вы отключите шифрование сервисных паролей ... текущие пароли не будут расшифрованы, они останутся зашифрованными."
    ]
  },
  {
    "time": [
      1321.96,
      1326.83
    ],
    "en": [
      "Future passwords will not be encrypted, they will remain in clear-text."
    ],
    "ru": [
      "В будущем пароли не будут зашифрованы, они останутся в виде открытого текста."
    ]
  },
  {
    "time": [
      1326.83,
      1331.84
    ],
    "en": [
      "The enable secret will not be effected, once again it is always encrypted."
    ],
    "ru": [
      "Секрет включения не будет применяться, опять же, он всегда зашифрован."
    ]
  },
  {
    "time": [
      1331.84,
      1336.15
    ],
    "en": [
      "Let’s review all of the commands and such we learned in this lesson."
    ],
    "ru": [
      "Давайте рассмотрим все команды и тому подобное, что мы узнали в этом уроке."
    ]
  },
  {
    "time": [
      1336.15,
      1341.39
    ],
    "en": [
      "First, the different modes of the Cisco CLI we looked at today."
    ],
    "ru": [
      "Во-первых, мы рассмотрели различные режимы интерфейса командной строки Cisco."
    ]
  },
  {
    "time": [
      1341.39,
      1347.049
    ],
    "en": [
      "First is user EXEC mode, indicated by the greater than sign."
    ],
    "ru": [
      "Первый - это пользовательский режим EXEC, обозначенный знаком «больше»."
    ]
  },
  {
    "time": [
      1347.049,
      1352.85
    ],
    "en": [
      "Next is privileged exec mode, indicated by a pound, or hashtag."
    ],
    "ru": [
      "Далее идет привилегированный режим exec, обозначенный решеткой или хэштегом."
    ]
  },
  {
    "time": [
      1352.85,
      1360.5
    ],
    "en": [
      "Finally is global configuration mode, indicated by config in brackets, plus the hashtag."
    ],
    "ru": [
      "Наконец, режим глобальной конфигурации, обозначенный config в скобках, плюс хэштег."
    ]
  },
  {
    "time": [
      1360.5,
      1362.72
    ],
    "en": [
      "Now let’s review some commands."
    ],
    "ru": [
      "Теперь давайте рассмотрим некоторые команды."
    ]
  },
  {
    "time": [
      1362.72,
      1367.56
    ],
    "en": [
      "The first is enable, which is used to enter privileged exec mode."
    ],
    "ru": [
      "Первый - enable, который используется для входа в привилегированный режим exec."
    ]
  },
  {
    "time": [
      1367.56,
      1373.51
    ],
    "en": [
      "Next is configure terminal, which is used to enter global configuration mode."
    ],
    "ru": [
      "Далее идет настройка терминала, который используется для входа в режим глобальной конфигурации."
    ]
  },
  {
    "time": [
      1373.51,
      1380.9
    ],
    "en": [
      "Next is enable password, which configures a password to protect privileged exec mode."
    ],
    "ru": [
      "Затем следует включить пароль, который настраивает пароль для защиты привилегированного режима выполнения."
    ]
  },
  {
    "time": [
      1380.9,
      1386.74
    ],
    "en": [
      "The next command is service password-encryption, which encrypts the enable password, as well"
    ],
    "ru": [
      "Следующая команда - это сервисное шифрование пароля, которое также шифрует пароль включения."
    ]
  },
  {
    "time": [
      1386.74,
      1389.98
    ],
    "en": [
      "as other passwords which we can configure on the device."
    ],
    "ru": [
      "как и другие пароли, которые мы можем настроить на устройстве."
    ]
  },
  {
    "time": [
      1389.98,
      1398.02
    ],
    "en": [
      "enable secret, which configures a more secure enable password, which is always encrypted."
    ],
    "ru": [
      "enable secret, который настраивает более безопасный пароль включения, который всегда зашифрован."
    ]
  },
  {
    "time": [
      1398.02,
      1407.97
    ],
    "en": [
      "Next is run (ERRATA: should be 'do'), which is used in front of a privileged exec-level command to let you run it in global configuration mode."
    ],
    "ru": [
      "Затем выполняется run (ERRATA: должно быть «do»), который используется перед привилегированной командой exec-level, чтобы позволить вам запустить ее в режиме глобальной конфигурации."
    ]
  },
  {
    "time": [
      1407.97,
      1414.5
    ],
    "en": [
      "The next command is no, which is used to remove a command which you previously configured."
    ],
    "ru": [
      "Следующая команда - нет, она используется для удаления ранее настроенной команды."
    ]
  },
  {
    "time": [
      1414.5,
      1422.51
    ],
    "en": [
      "Next is show running-config, which displays the current, active configuration file on the device."
    ],
    "ru": [
      "Далее идет команда show running-config, которая отображает текущий активный файл конфигурации на устройстве."
    ]
  },
  {
    "time": [
      1422.51,
      1429.47
    ],
    "en": [
      "Show startup-config displays the saved configuration file which will be loaded if the device is restarted."
    ],
    "ru": [
      "Show startup-config отображает сохраненный файл конфигурации, который будет загружен при перезапуске устройства."
    ]
  },
  {
    "time": [
      1429.47,
      1435.39
    ],
    "en": [
      "Okay, last three, and these are all used to save the current running configuration and"
    ],
    "ru": [
      "Хорошо, последние три, и все они используются для сохранения текущей рабочей конфигурации и"
    ]
  },
  {
    "time": [
      1435.39,
      1438.04
    ],
    "en": [
      "make it the startup configuration."
    ],
    "ru": [
      "сделайте это стартовой конфигурацией."
    ]
  },
  {
    "time": [
      1438.04,
      1445.88
    ],
    "en": [
      "They are… write, write memory, and copy running-config startup-config."
    ],
    "ru": [
      "Это… запись, запись в память и копирование конфигурации запуска, конфигурации запуска."
    ]
  },
  {
    "time": [
      1445.88,
      1453.47
    ],
    "en": [
      "Okay, let’s move on to this video’s quiz, first up, question 1."
    ],
    "ru": [
      "Хорошо, давайте перейдем к тесту по этому видео, прежде всего, к вопросу 1."
    ]
  },
  {
    "time": [
      1453.47,
      1465.61
    ],
    "en": [
      "What kind of cable is used to connect to a Cisco device via the RJ45 console port? A, rollover cable. B, crossover cable."
    ],
    "ru": [
      "Какой кабель используется для подключения к устройству Cisco через консольный порт RJ45? А, опрокидывающийся кабель. B, кроссовый кабель."
    ]
  },
  {
    "time": [
      1465.61,
      1468.919
    ],
    "en": [
      "Or C, USB cable."
    ],
    "ru": [
      "Или C, кабель USB."
    ]
  },
  {
    "time": [
      1468.919,
      1475.57
    ],
    "en": [
      "Pause the video to think about your answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      1475.57,
      1478.01
    ],
    "en": [
      "The answer is A , rollover cable."
    ],
    "ru": [
      "Ответ - А, опрокидывающийся кабель."
    ]
  },
  {
    "time": [
      1478.01,
      1481.33
    ],
    "en": [
      "Let’s check the answers."
    ],
    "ru": [
      "Давай проверим ответы."
    ]
  },
  {
    "time": [
      1481.33,
      1492.65
    ],
    "en": [
      "A crossover cable is used to connect two devices, for example switch and switch, or router and router, or router and PC, etc.) via Ethernet."
    ],
    "ru": [
      "Перекрестный кабель используется для соединения двух устройств (например, коммутатора и коммутатора, или маршрутизатора и маршрутизатора, или маршрутизатора и ПК и т. Д.) Через Ethernet."
    ]
  },
  {
    "time": [
      1492.65,
      1497.79
    ],
    "en": [
      "It is not used to connect to a Cisco device via the RJ45 console port."
    ],
    "ru": [
      "Он не используется для подключения к устройству Cisco через консольный порт RJ45."
    ]
  },
  {
    "time": [
      1497.79,
      1502.07
    ],
    "en": [
      "So b, crossover cable, is incorrect."
    ],
    "ru": [
      "Итак, b, перекрестный кабель, неправильный."
    ]
  },
  {
    "time": [
      1502.07,
      1508.41
    ],
    "en": [
      "This picture shows the wiring on an Ethernet crossover cable…"
    ],
    "ru": [
      "На этом рисунке показана проводка перекрестного кабеля Ethernet…"
    ]
  },
  {
    "time": [
      1508.41,
      1513.5
    ],
    "en": [
      "Although USB cables can be used to connect to the console of a Cisco device, the USB"
    ],
    "ru": [
      "Хотя USB-кабели можно использовать для подключения к консоли устройства Cisco, USB-кабель"
    ]
  },
  {
    "time": [
      1513.5,
      1517.99
    ],
    "en": [
      "console port is separate from the RJ45 console port."
    ],
    "ru": [
      "консольный порт отделен от консольного порта RJ45."
    ]
  },
  {
    "time": [
      1517.99,
      1522.03
    ],
    "en": [
      "So c, USB cable, is incorrect."
    ],
    "ru": [
      "Итак, c, USB-кабель, неправильный."
    ]
  },
  {
    "time": [
      1522.03,
      1529.7
    ],
    "en": [
      "This photo shows the usb and RJ45 console ports on a Cisco switch…."
    ],
    "ru": [
      "На этой фотографии показаны консольные порты USB и RJ45 на коммутаторе Cisco…."
    ]
  },
  {
    "time": [
      1529.7,
      1535.36
    ],
    "en": [
      "A rollover cable is used to connect to the RJ45 console port on a Cisco device."
    ],
    "ru": [
      "Съемный кабель используется для подключения к консольному порту RJ45 на устройстве Cisco."
    ]
  },
  {
    "time": [
      1535.36,
      1539.71
    ],
    "en": [
      "So A, rollover cable, is the correct answer."
    ],
    "ru": [
      "Так что A, переключающий кабель - правильный ответ."
    ]
  },
  {
    "time": [
      1539.71,
      1544.71
    ],
    "en": [
      "This image shows the wiring in a rollover cable, connecting pin 1 on one side to pin"
    ],
    "ru": [
      "На этом изображении показана проводка переключаемого кабеля, соединяющая контакт 1 с одной стороны с контактом."
    ]
  },
  {
    "time": [
      1544.71,
      1551.12
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
      1544.71,
      1551.12
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
      1551.12,
      1554.51
    ],
    "en": [
      "Let’s go to Question 2."
    ],
    "ru": [
      "Перейдем к вопросу 2."
    ]
  },
  {
    "time": [
      1554.51,
      1559.87
    ],
    "en": [
      "You type enable to enter privileged exec mode on your Cisco router, however the password"
    ],
    "ru": [
      "Вы вводите enable, чтобы войти в привилегированный режим exec на вашем маршрутизаторе Cisco, однако пароль"
    ]
  },
  {
    "time": [
      1559.87,
      1562.299
    ],
    "en": [
      "you enter is not accepted."
    ],
    "ru": [
      "вводить не принято."
    ]
  },
  {
    "time": [
      1562.299,
      1564.21
    ],
    "en": [
      "What could be the problem?"
    ],
    "ru": [
      "В чем может быть проблема?"
    ]
  },
  {
    "time": [
      1564.21,
      1568.44
    ],
    "en": [
      "A, service password-encryption is enabled."
    ],
    "ru": [
      "A, шифрование сервисного пароля включено."
    ]
  },
  {
    "time": [
      1568.44,
      1572.95
    ],
    "en": [
      "B, service password-encryption is disabled."
    ],
    "ru": [
      "B, сервисное шифрование паролей отключено."
    ]
  },
  {
    "time": [
      1572.95,
      1576.4
    ],
    "en": [
      "Or C, Caps Lock is on."
    ],
    "ru": [
      "Или C, включен Caps Lock."
    ]
  },
  {
    "time": [
      1576.4,
      1583.46
    ],
    "en": [
      "Pause the video to think about your answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      1583.46,
      1589.26
    ],
    "en": [
      "the answer is C, caps lock is on. Let’s check."
    ],
    "ru": [
      "ответ - C, клавиша Caps Lock включена. Давайте проверим."
    ]
  },
  {
    "time": [
      1589.26,
      1591.85
    ],
    "en": [
      "service password-encryption is irrelevant."
    ],
    "ru": [
      "Сервисное шифрование пароля не имеет значения."
    ]
  },
  {
    "time": [
      1591.85,
      1597.24
    ],
    "en": [
      "It doesn’t change the password itself, only how it is displayed in the configuration."
    ],
    "ru": [
      "Он не меняет сам пароль, только то, как он отображается в конфигурации."
    ]
  },
  {
    "time": [
      1597.24,
      1606.91
    ],
    "en": [
      "So A, service password-encryption is enabled, and B, service password-encryption is disabled, are incorrect."
    ],
    "ru": [
      "Таким образом, A, шифрование пароля службы включено, а B, шифрование пароля службы отключено, неверны."
    ]
  },
  {
    "time": [
      1606.91,
      1611.84
    ],
    "en": [
      "Passwords are case-sensitive, so if caps lock is on it could cause you to enter an incorrect"
    ],
    "ru": [
      "Пароли чувствительны к регистру, поэтому, если включен Caps Lock, вы можете ввести неверный пароль."
    ]
  },
  {
    "time": [
      1611.84,
      1615.95
    ],
    "en": [
      "password even if you think you’re entering it correctly."
    ],
    "ru": [
      "пароль, даже если вы думаете, что вводите его правильно."
    ]
  },
  {
    "time": [
      1615.95,
      1618.94
    ],
    "en": [
      "So C, caps lock is on, is the correct answer."
    ],
    "ru": [
      "Итак, C, Caps Lock включен, это правильный ответ."
    ]
  },
  {
    "time": [
      1618.94,
      1623.75
    ],
    "en": [
      "Let’s go to question 3."
    ],
    "ru": [
      "Перейдем к вопросу 3."
    ]
  },
  {
    "time": [
      1623.75,
      1628.34
    ],
    "en": [
      "What is the most secure method to protect access to privileged EXEC mode?"
    ],
    "ru": [
      "Каков наиболее безопасный метод защиты доступа к привилегированному режиму EXEC?"
    ]
  },
  {
    "time": [
      1628.34,
      1631.59
    ],
    "en": [
      "A, the enable secret command."
    ],
    "ru": [
      "A, команда enable secret."
    ]
  },
  {
    "time": [
      1631.59,
      1635.53
    ],
    "en": [
      "B, the enable password command."
    ],
    "ru": [
      "B, команда включения пароля."
    ]
  },
  {
    "time": [
      1635.53,
      1640.9
    ],
    "en": [
      "Or C, the enable password command, with service password-encryption."
    ],
    "ru": [
      "Или C, команда enable password с шифрованием служебного пароля."
    ]
  },
  {
    "time": [
      1640.9,
      1646.74
    ],
    "en": [
      "Pause the video to think about your answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      1646.74,
      1651.809
    ],
    "en": [
      "The answer is A, the enable secret command. Let’s check."
    ],
    "ru": [
      "Ответ - A, секретная команда включения. Давайте проверим."
    ]
  },
  {
    "time": [
      1651.809,
      1659.13
    ],
    "en": [
      "The enable password command configures a plain-text password, which is not secure as it can be easily read."
    ],
    "ru": [
      "Команда enable password настраивает пароль в виде обычного текста, который небезопасен, так как его легко прочитать."
    ]
  },
  {
    "time": [
      1659.13,
      1665.03
    ],
    "en": [
      "So B, the enable password, is incorrect."
    ],
    "ru": [
      "Итак, B, пароль включения неверен."
    ]
  },
  {
    "time": [
      1665.03,
      1669.69
    ],
    "en": [
      "Using service password-encryption encrypts the enable password to make it more secure,"
    ],
    "ru": [
      "Использование служебного шифрования пароля позволяет шифровать пароль включения, чтобы сделать его более безопасным,"
    ]
  },
  {
    "time": [
      1669.69,
      1672.26
    ],
    "en": [
      "but it is a weak form of encryption."
    ],
    "ru": [
      "но это слабая форма шифрования."
    ]
  },
  {
    "time": [
      1672.26,
      1679.56
    ],
    "en": [
      "So c, enable password with service password-encryption, is incorrect."
    ],
    "ru": [
      "Итак, c, включить пароль с сервисным шифрованием пароля, неверно."
    ]
  },
  {
    "time": [
      1679.56,
      1684.11
    ],
    "en": [
      "The enable secret command configures a password that is automatically encrypted."
    ],
    "ru": [
      "Команда enable secret настраивает пароль, который автоматически шифруется."
    ]
  },
  {
    "time": [
      1684.11,
      1690.81
    ],
    "en": [
      "It uses MD5, a more secure form of encryption than the service password-encryption command."
    ],
    "ru": [
      "Он использует MD5, более безопасную форму шифрования, чем команда шифрования пароля службы."
    ]
  },
  {
    "time": [
      1690.81,
      1694.43
    ],
    "en": [
      "So A, the enable secret command, is the correct answer."
    ],
    "ru": [
      "Так что A, команда enable secret, является правильным ответом."
    ]
  },
  {
    "time": [
      1694.43,
      1698.11
    ],
    "en": [
      "Let’s go to question 4."
    ],
    "ru": [
      "Перейдем к вопросу 4."
    ]
  },
  {
    "time": [
      1698.11,
      1703.059
    ],
    "en": [
      "If both the enable password and the enable secret command are configured, what will happen"
    ],
    "ru": [
      "Если настроены и пароль включения, и команда включения секрета, что произойдет"
    ]
  },
  {
    "time": [
      1703.059,
      1707.2
    ],
    "en": [
      "when you use enable to enter privileged EXEC mode?"
    ],
    "ru": [
      "когда вы используете enable для входа в привилегированный режим EXEC?"
    ]
  },
  {
    "time": [
      1707.2,
      1712.89
    ],
    "en": [
      "A, you must enter the enable password, followed by the enable secret."
    ],
    "ru": [
      "A, вы должны ввести пароль включения, а затем секрет включения."
    ]
  },
  {
    "time": [
      1712.89,
      1717.42
    ],
    "en": [
      "B, you must enter the enable password only."
    ],
    "ru": [
      "B, вы должны ввести только пароль включения."
    ]
  },
  {
    "time": [
      1717.42,
      1721.34
    ],
    "en": [
      "Or C, you must enter the enable secret only."
    ],
    "ru": [
      "Или C, вы должны ввести только секрет включения."
    ]
  },
  {
    "time": [
      1721.34,
      1727.46
    ],
    "en": [
      "Pause the video to think about your answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      1727.46,
      1731.26
    ],
    "en": [
      "The answer is C, you must enter the enable secret only."
    ],
    "ru": [
      "Ответ - C, вы должны ввести только секрет включения."
    ]
  },
  {
    "time": [
      1731.26,
      1736.32
    ],
    "en": [
      "There’s not much else to explain here, the enable secret always takes precedence over"
    ],
    "ru": [
      "Здесь больше нечего объяснять, секрет включения всегда имеет приоритет над"
    ]
  },
  {
    "time": [
      1736.32,
      1740.39
    ],
    "en": [
      "the enable password, and you’ll never be asked to enter both."
    ],
    "ru": [
      "пароль включения, и вас никогда не попросят ввести оба."
    ]
  },
  {
    "time": [
      1740.39,
      1745.22
    ],
    "en": [
      "So C, you must enter the enable secret only, is the correct answer."
    ],
    "ru": [
      "Итак, C, вы должны ввести только секрет включения, это правильный ответ."
    ]
  },
  {
    "time": [
      1745.22,
      1749.73
    ],
    "en": [
      "let’s go to the final question."
    ],
    "ru": [
      "перейдем к последнему вопросу."
    ]
  },
  {
    "time": [
      1749.73,
      1754.7
    ],
    "en": [
      "You enter the conf t command to enter global configuration mode."
    ],
    "ru": [
      "Вы вводите команду conf t, чтобы войти в режим глобальной конфигурации."
    ]
  },
  {
    "time": [
      1754.7,
      1764.1
    ],
    "en": [
      "What is the full-length version of the command? A, configuration time. B, configure terminal."
    ],
    "ru": [
      "Что такое полная версия команды? A, время настройки. B, настройте терминал."
    ]
  },
  {
    "time": [
      1764.1,
      1767.69
    ],
    "en": [
      "Or C, configuration terminal."
    ],
    "ru": [
      "Или C, терминал конфигурации."
    ]
  },
  {
    "time": [
      1767.69,
      1773.66
    ],
    "en": [
      "Pause the video to think about your answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      1773.66,
      1776.5
    ],
    "en": [
      "The answer is B, configure terminal."
    ],
    "ru": [
      "Ответ - B, настройте терминал."
    ]
  },
  {
    "time": [
      1776.5,
      1780.809
    ],
    "en": [
      "Again, no special explanation is necessary here."
    ],
    "ru": [
      "Опять же, никаких особых пояснений здесь не требуется."
    ]
  },
  {
    "time": [
      1780.809,
      1784.11
    ],
    "en": [
      "Even though the shortcuts are great to use to reduce the amount of typing you have to"
    ],
    "ru": [
      "Несмотря на то, что сочетания клавиш удобны для уменьшения количества набора текста, вам нужно"
    ]
  },
  {
    "time": [
      1784.11,
      1791.679
    ],
    "en": [
      "do to enter commands, make sure you still know the full-length versions of the commands!"
    ],
    "ru": [
      "do для ввода команд, убедитесь, что вы все еще знаете полные версии команд!"
    ]
  },
  {
    "time": [
      1791.679,
      1796.4
    ],
    "en": [
      "In addition to the quiz we just did, there are a couple other supplementary materials"
    ],
    "ru": [
      "В дополнение к викторине, которую мы только что прошли, есть еще пара дополнительных материалов."
    ]
  },
  {
    "time": [
      1796.4,
      1799.25
    ],
    "en": [
      "to help you remember what you learned."
    ],
    "ru": [
      "чтобы помочь вам вспомнить, что вы узнали."
    ]
  },
  {
    "time": [
      1799.25,
      1804.15
    ],
    "en": [
      "The first is review flash cards, check the link in the description."
    ],
    "ru": [
      "Первый - это обзор флеш-карт, проверьте ссылку в описании."
    ]
  },
  {
    "time": [
      1804.15,
      1809.83
    ],
    "en": [
      "These flash cards will be extremely helpful when memorizing all of these commands and how they work."
    ],
    "ru": [
      "Эти флэш-карты будут чрезвычайно полезны при запоминании всех этих команд и того, как они работают."
    ]
  },
  {
    "time": [
      1809.83,
      1815.57
    ],
    "en": [
      "In addition, there will also be a packet tracer practice lab, to give you hands-on practice"
    ],
    "ru": [
      "Кроме того, здесь также будет практическая лаборатория по отслеживанию пакетов, чтобы дать вам практическую практику."
    ]
  },
  {
    "time": [
      1815.57,
      1818.48
    ],
    "en": [
      "configuring Cisco devices in the CLI."
    ],
    "ru": [
      "настройка устройств Cisco в CLI."
    ]
  },
  {
    "time": [
      1818.48,
      1824.42
    ],
    "en": [
      "Especially for this video I highly recommend you do the practice lab."
    ],
    "ru": [
      "Специально для этого видео я настоятельно рекомендую вам выполнить практическую работу."
    ]
  },
  {
    "time": [
      1824.42,
      1827.95
    ],
    "en": [
      "It will really help you get used to the CLI."
    ],
    "ru": [
      "Это действительно поможет вам привыкнуть к интерфейсу командной строки."
    ]
  },
  {
    "time": [
      1827.95,
      1829.809
    ],
    "en": [
      "That lab will be in the next video."
    ],
    "ru": [
      "Эта лаборатория будет в следующем видео."
    ]
  },
  {
    "time": [
      1829.809,
      1832.6
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
      1832.6,
      1834.36
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
      1834.36,
      1839.84
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
      1839.84,
      1843.57
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
      1843.57,
      1849.02
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
      1849.02,
      1857.45
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
      1857.45,
      1861.52
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
      1861.52,
      1863.63
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
      1863.63,
      1863.63
    ],
    "en": [
      "That's all for now."
    ],
    "ru": [
      "На этом пока все."
    ]
  }
]