var objs = [
  {
    "time": [
      1.28,
      3.58
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
      3.58,
      6.99
    ],
    "en": [
      "This is a free, complete course for the CCNA."
    ],
    "ru": [
      "Это бесплатный полный курс CCNA."
    ]
  },
  {
    "time": [
      6.99,
      11.08
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
      11.08,
      16.98
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
      16.98,
      19.34
    ],
    "en": [
      "Thanks for your help."
    ],
    "ru": [
      "Спасибо за вашу помощь."
    ]
  },
  {
    "time": [
      19.34,
      24.0
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
      24.0,
      29.63
    ],
    "en": [
      "which will help you very much in remembering what you've learned. Let’s get started."
    ],
    "ru": [
      "что очень поможет вам запомнить то, что вы узнали. Давайте начнем."
    ]
  },
  {
    "time": [
      29.63,
      35.8
    ],
    "en": [
      "In this video we’ll take a break from IP addresses and take a look at switch interfaces."
    ],
    "ru": [
      "В этом видео мы отвлечемся от IP-адресов и рассмотрим интерфейсы коммутатора."
    ]
  },
  {
    "time": [
      35.8,
      40.999
    ],
    "en": [
      "When we configured IP addresses, I talked about router interfaces a little bit."
    ],
    "ru": [
      "Когда мы настраивали IP-адреса, я немного говорил об интерфейсах маршрутизатора."
    ]
  },
  {
    "time": [
      40.999,
      46.53
    ],
    "en": [
      "For example, we used the ‘show ip interface brief’ command to check the Layer 1 and"
    ],
    "ru": [
      "Например, мы использовали команду «show ip interfacerief», чтобы проверить уровень 1 и"
    ]
  },
  {
    "time": [
      46.53,
      49.48
    ],
    "en": [
      "Layer 2 status of the interfaces."
    ],
    "ru": [
      "Статус уровня 2 интерфейсов."
    ]
  },
  {
    "time": [
      49.48,
      55.699
    ],
    "en": [
      "I also talked about how router interfaces are disabled with the ‘shutdown’ command by default."
    ],
    "ru": [
      "Я также рассказал о том, как интерфейсы маршрутизатора по умолчанию отключаются с помощью команды «выключение»."
    ]
  },
  {
    "time": [
      55.699,
      59.579
    ],
    "en": [
      "This time we’ll take a look at switch interfaces and see how they are different from router"
    ],
    "ru": [
      "На этот раз мы рассмотрим интерфейсы коммутатора и посмотрим, чем они отличаются от маршрутизатора."
    ]
  },
  {
    "time": [
      59.579,
      63.01
    ],
    "en": [
      "interfaces, and also how they are the same."
    ],
    "ru": [
      "интерфейсы, а также то, как они одинаковы."
    ]
  },
  {
    "time": [
      63.01,
      67.969
    ],
    "en": [
      "Specifically, we’re going to talk about configuring Layer 1 characteristics of these"
    ],
    "ru": [
      "В частности, мы поговорим о настройке характеристик уровня 1 этих"
    ]
  },
  {
    "time": [
      67.969,
      72.53
    ],
    "en": [
      "interfaces, such as speed and duplex."
    ],
    "ru": [
      "интерфейсы, такие как скорость и дуплекс."
    ]
  },
  {
    "time": [
      72.53,
      75.27
    ],
    "en": [
      "So let me introduce what we’ll cover in this video."
    ],
    "ru": [
      "Итак, позвольте мне представить, о чем мы расскажем в этом видео."
    ]
  },
  {
    "time": [
      75.27,
      79.64
    ],
    "en": [
      "I’ll talk about interface speed and duplex."
    ],
    "ru": [
      "Поговорим о скорости интерфейса и дуплексе."
    ]
  },
  {
    "time": [
      79.64,
      88.0
    ],
    "en": [
      "Speed refers to the data rate in bits per second, such as 10, 100, or 1000 megabits per second."
    ],
    "ru": [
      "Скорость - это скорость передачи данных в битах в секунду, например 10, 100 или 1000 мегабит в секунду."
    ]
  },
  {
    "time": [
      88.0,
      92.84
    ],
    "en": [
      "Duplex is something I mentioned briefly in a previous video, basically it refers to whether"
    ],
    "ru": [
      "Дуплекс - это то, что я кратко упомянул в предыдущем видео, в основном это относится к тому,"
    ]
  },
  {
    "time": [
      92.84,
      97.0
    ],
    "en": [
      "a device is able to both send AND receive data at the same time."
    ],
    "ru": [
      "устройство может одновременно отправлять и получать данные."
    ]
  },
  {
    "time": [
      97.0,
      103.61
    ],
    "en": [
      "I’ll talk about speed and duplex autonegotiation, which allows two devices to negotiate speed"
    ],
    "ru": [
      "Я расскажу о скорости и дуплексном автосогласовании, которое позволяет двум устройствам согласовывать скорость."
    ]
  },
  {
    "time": [
      103.61,
      107.799
    ],
    "en": [
      "and duplex settings without us having to manually configure them."
    ],
    "ru": [
      "и настройки дуплекса без необходимости настраивать их вручную."
    ]
  },
  {
    "time": [
      107.799,
      110.09
    ],
    "en": [
      "I’ll talk about interface status."
    ],
    "ru": [
      "Поговорим о статусе интерфейса."
    ]
  },
  {
    "time": [
      110.09,
      115.369
    ],
    "en": [
      "I already talked about this in the previous video on configuring router interfaces, but"
    ],
    "ru": [
      "Об этом я уже говорил в предыдущем видео по настройке интерфейсов роутера, но"
    ]
  },
  {
    "time": [
      115.369,
      117.35
    ],
    "en": [
      "I’ll expand upon the topic."
    ],
    "ru": [
      "Я расширю тему."
    ]
  },
  {
    "time": [
      117.35,
      122.27
    ],
    "en": [
      "Finally, I’ll talk about interface counters and errors."
    ],
    "ru": [
      "Наконец, я расскажу о счетчиках интерфейса и ошибках."
    ]
  },
  {
    "time": [
      122.27,
      126.659
    ],
    "en": [
      "Cisco devices keep various counters regarding the traffic that passes through them, such"
    ],
    "ru": [
      "Устройства Cisco хранят различные счетчики трафика, проходящего через них, например"
    ]
  },
  {
    "time": [
      126.659,
      128.92
    ],
    "en": [
      "as how many errors have occurred, etc."
    ],
    "ru": [
      "сколько возникло ошибок и т. д."
    ]
  },
  {
    "time": [
      128.92,
      136.209
    ],
    "en": [
      "I’ll show you how to find and analyze these statistics, and what kinds of errors there are."
    ],
    "ru": [
      "Я покажу вам, как найти и проанализировать эту статистику и какие бывают ошибки."
    ]
  },
  {
    "time": [
      136.209,
      142.37
    ],
    "en": [
      "Also let me review one point about switches that I mentioned in the very first video in this series."
    ],
    "ru": [
      "Также позвольте мне остановиться на одном моменте, касающемся переключателей, который я упомянул в самом первом видео из этой серии."
    ]
  },
  {
    "time": [
      142.37,
      151.02
    ],
    "en": [
      "Up top is a photo of a Cisco ASR 1000-X router, and under it is a Cisco Catalyst 9200 switch."
    ],
    "ru": [
      "Наверху находится фотография маршрутизатора Cisco ASR 1000-X, а под ним - коммутатор Cisco Catalyst 9200."
    ]
  },
  {
    "time": [
      151.02,
      154.569
    ],
    "en": [
      "What’s the big difference that stands out here?"
    ],
    "ru": [
      "Какая здесь большая разница?"
    ]
  },
  {
    "time": [
      154.569,
      157.15
    ],
    "en": [
      "How about the number of interfaces?"
    ],
    "ru": [
      "Как насчет количества интерфейсов?"
    ]
  },
  {
    "time": [
      157.15,
      164.26
    ],
    "en": [
      "The router has 8 SFP interfaces for fiber-optic cables, and then a few RJ45 interfaces for"
    ],
    "ru": [
      "Маршрутизатор имеет 8 интерфейсов SFP для оптоволоконных кабелей, а затем несколько интерфейсов RJ45 для"
    ]
  },
  {
    "time": [
      164.26,
      166.739
    ],
    "en": [
      "the console port and such."
    ],
    "ru": [
      "консольный порт и тому подобное."
    ]
  },
  {
    "time": [
      166.739,
      174.33
    ],
    "en": [
      "The switch, on the other hand, has 4 SFP interfaces, plus FORTY EIGHT RJ45 interfaces."
    ],
    "ru": [
      "Коммутатор, с другой стороны, имеет 4 интерфейса SFP плюс СОРОК ВОСЕМЬ интерфейсов RJ45."
    ]
  },
  {
    "time": [
      174.33,
      178.129
    ],
    "en": [
      "This is because switches are used to connect end hosts to."
    ],
    "ru": [
      "Это связано с тем, что коммутаторы используются для подключения конечных хостов."
    ]
  },
  {
    "time": [
      178.129,
      184.689
    ],
    "en": [
      "This catalyst switch might have 48 PCs connected to the RJ45 ports, and then connect to a router"
    ],
    "ru": [
      "Этот коммутатор-катализатор может иметь 48 компьютеров, подключенных к портам RJ45, а затем подключаться к маршрутизатору."
    ]
  },
  {
    "time": [
      184.689,
      189.12
    ],
    "en": [
      "with the SFP fiber optic ports."
    ],
    "ru": [
      "с оптоволоконными портами SFP."
    ]
  },
  {
    "time": [
      189.12,
      193.87
    ],
    "en": [
      "Next let me introduce the network topology I’ll use for this video."
    ],
    "ru": [
      "Затем позвольте мне представить топологию сети, которую я буду использовать в этом видео."
    ]
  },
  {
    "time": [
      193.87,
      204.04
    ],
    "en": [
      "This is a single LAN, 192.168.1.0/24, with one router, R1, two switches, SW1 and SW2,"
    ],
    "ru": [
      "Это одна LAN, 192.168.1.0/24, с одним маршрутизатором, R1, двумя коммутаторами, SW1 и SW2,"
    ]
  },
  {
    "time": [
      204.04,
      208.099
    ],
    "en": [
      "and four PCs, PC1, 2, 3, and 4."
    ],
    "ru": [
      "и четыре ПК, ПК1, 2, 3 и 4."
    ]
  },
  {
    "time": [
      208.099,
      212.799
    ],
    "en": [
      "In a real network with two switches there would be many more end hosts, but just for"
    ],
    "ru": [
      "В реальной сети с двумя коммутаторами конечных хостов было бы намного больше, но только для"
    ]
  },
  {
    "time": [
      212.799,
      216.86
    ],
    "en": [
      "this demonstration I’ve attached just these four PCs."
    ],
    "ru": [
      "К этой демонстрации я подключил только эти четыре компьютера."
    ]
  },
  {
    "time": [
      216.86,
      222.129
    ],
    "en": [
      "SW1 is the device we’re going to focus on today, configuring its network interfaces,"
    ],
    "ru": [
      "SW1 - это устройство, на котором мы сосредоточимся сегодня, настраивая его сетевые интерфейсы,"
    ]
  },
  {
    "time": [
      222.129,
      229.51
    ],
    "en": [
      "including F0/1, F0/2, F0/3, and F0/4 which are connected, as well as the remaining interfaces"
    ],
    "ru": [
      "включая подключенные F0 / 1, F0 / 2, F0 / 3 и F0 / 4, а также остальные интерфейсы"
    ]
  },
  {
    "time": [
      229.51,
      231.28
    ],
    "en": [
      "which are not connected at the moment."
    ],
    "ru": [
      "которые в данный момент не подключены."
    ]
  },
  {
    "time": [
      231.28,
      236.04
    ],
    "en": [
      "Let’s go right into the CLI of SW1."
    ],
    "ru": [
      "Давайте сразу перейдем к интерфейсу командной строки SW1."
    ]
  },
  {
    "time": [
      236.04,
      239.14
    ],
    "en": [
      "First I use ‘enable’ to enter privileged exec mode."
    ],
    "ru": [
      "Сначала я использую «enable», чтобы войти в привилегированный режим exec."
    ]
  },
  {
    "time": [
      239.14,
      246.849
    ],
    "en": [
      "After entering privileged exec mode, I entered the ‘show ip interface brief’, using shortcuts."
    ],
    "ru": [
      "После входа в привилегированный режим exec я вошел в «показать краткое описание интерфейса IP», используя ярлыки."
    ]
  },
  {
    "time": [
      246.849,
      252.079
    ],
    "en": [
      "As you can see, the four interfaces which are connected to devices, fastethernet 0/1,"
    ],
    "ru": [
      "Как видите, четыре интерфейса, которые подключены к устройствам, fastethernet 0/1,"
    ]
  },
  {
    "time": [
      252.079,
      259.69
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
      252.079,
      259.69
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
      259.69,
      263.59
    ],
    "en": [
      "which is the Layer 2 status, of UP and UP."
    ],
    "ru": [
      "который является статусом уровня 2, UP и UP."
    ]
  },
  {
    "time": [
      263.59,
      266.78
    ],
    "en": [
      "We usually call this up/up."
    ],
    "ru": [
      "Обычно мы называем это up / up."
    ]
  },
  {
    "time": [
      266.78,
      271.86
    ],
    "en": [
      "Keep in mind I haven’t done any configuration on SW1 yet except set the hostname."
    ],
    "ru": [
      "Имейте в виду, что я еще не выполнял никаких настроек на SW1, кроме установки имени хоста."
    ]
  },
  {
    "time": [
      271.86,
      277.36
    ],
    "en": [
      "So already we can see a difference between Cisco routers and switches. What is that?"
    ],
    "ru": [
      "Итак, мы уже видим разницу между маршрутизаторами и коммутаторами Cisco. Что это?"
    ]
  },
  {
    "time": [
      277.36,
      281.05
    ],
    "en": [
      "Well, I mentioned briefly in the Day 8 video,"
    ],
    "ru": [
      "Я кратко упомянул в видео о 8-м дне,"
    ]
  },
  {
    "time": [
      281.05,
      286.2
    ],
    "en": [
      "router interfaces are in an administratively disabled state by default, meaning they have"
    ],
    "ru": [
      "интерфейсы маршрутизатора по умолчанию отключены администратором, что означает, что они имеют"
    ]
  },
  {
    "time": [
      286.2,
      289.09
    ],
    "en": [
      "the ‘shutdown’ command applied."
    ],
    "ru": [
      "применена команда «выключение»."
    ]
  },
  {
    "time": [
      289.09,
      291.68
    ],
    "en": [
      "Switch interfaces, however, are different."
    ],
    "ru": [
      "Однако интерфейсы коммутатора разные."
    ]
  },
  {
    "time": [
      291.68,
      296.73
    ],
    "en": [
      "They don’t have the shutdown command applied, so if you connect them to another device they’ll"
    ],
    "ru": [
      "К ним не применена команда выключения, поэтому, если вы подключите их к другому устройству, они"
    ]
  },
  {
    "time": [
      296.73,
      300.75
    ],
    "en": [
      "usually be in the up/up state with no configuration required."
    ],
    "ru": [
      "обычно находится в рабочем состоянии и не требует настройки."
    ]
  },
  {
    "time": [
      300.75,
      306.3
    ],
    "en": [
      "Now, the IP address is unassigned, and it will remain that way because these are layer"
    ],
    "ru": [
      "Теперь IP-адрес не назначен, и он останется таким, потому что это слой"
    ]
  },
  {
    "time": [
      306.3,
      310.62
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
      306.3,
      310.62
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
      310.62,
      316.34
    ],
    "en": [
      "The concept of multilayer switching, where you actually DO assign IP addresses to switches,"
    ],
    "ru": [
      "Концепция многоуровневой коммутации, при которой вы действительно ДЕЙСТВИТЕЛЬНО назначаете IP-адреса коммутаторам,"
    ]
  },
  {
    "time": [
      316.34,
      318.78
    ],
    "en": [
      "will be for a future lesson."
    ],
    "ru": [
      "будет для будущего урока."
    ]
  },
  {
    "time": [
      318.78,
      322.69
    ],
    "en": [
      "For this lesson, don’t worry about the IP address column."
    ],
    "ru": [
      "В этом уроке не беспокойтесь о столбце IP-адреса."
    ]
  },
  {
    "time": [
      322.69,
      328.389
    ],
    "en": [
      "Now take a look at the other interfaces, keep in mind I’m ignoring the ‘VLAN1’ virtual"
    ],
    "ru": [
      "Теперь взглянем на другие интерфейсы. Имейте в виду, что я игнорирую виртуальную сеть VLAN1."
    ]
  },
  {
    "time": [
      328.389,
      331.8
    ],
    "en": [
      "interface, that will be a topic for another video."
    ],
    "ru": [
      "интерфейс, который будет темой для другого видео."
    ]
  },
  {
    "time": [
      331.8,
      338.55
    ],
    "en": [
      "These other interfaces aren’t connected to any other devices, so their status is down/down."
    ],
    "ru": [
      "Эти другие интерфейсы не подключены к каким-либо другим устройствам, поэтому их состояние понижено / понижено."
    ]
  },
  {
    "time": [
      338.55,
      344.15
    ],
    "en": [
      "Keep in mind, down and down is different than administratively down and down."
    ],
    "ru": [
      "Имейте в виду, что вниз и вниз - это не то же самое, что административно вниз и вниз."
    ]
  },
  {
    "time": [
      344.15,
      349.889
    ],
    "en": [
      "Here’s the show ip interface brief command on a router, notice administratively down"
    ],
    "ru": [
      "Вот краткая команда show ip interface на маршрутизаторе, обратите внимание на административное отключение"
    ]
  },
  {
    "time": [
      349.889,
      353.74
    ],
    "en": [
      "and down, this is because of the ‘shutdown’ command’."
    ],
    "ru": [
      "и вниз, это из-за команды «выключение»."
    ]
  },
  {
    "time": [
      353.74,
      360.03
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
      353.74,
      360.03
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
      360.03,
      366.39
    ],
    "en": [
      "So, to summarize, router interfaces have the shutdown command applied by default, so they"
    ],
    "ru": [
      "Итак, чтобы подвести итог, к интерфейсам маршрутизатора по умолчанию применяется команда выключения, поэтому они"
    ]
  },
  {
    "time": [
      366.39,
      371.61
    ],
    "en": [
      "will be in the administratively down/down state by default."
    ],
    "ru": [
      "по умолчанию будет находиться в административно выключенном / неактивном состоянии."
    ]
  },
  {
    "time": [
      371.61,
      375.85
    ],
    "en": [
      "Switch interfaces do not have the shutdown command applied by default, so they will either"
    ],
    "ru": [
      "Интерфейсы коммутатора не имеют команды выключения по умолчанию, поэтому они либо"
    ]
  },
  {
    "time": [
      375.85,
      384.449
    ],
    "en": [
      "be in the up/up state, if they are connected to another device, or the down/down state, if not connected."
    ],
    "ru": [
      "быть в состоянии включения / выключения, если они подключены к другому устройству, или в состоянии выключения / выключения, если они не подключены."
    ]
  },
  {
    "time": [
      384.449,
      387.69
    ],
    "en": [
      "Now let’s look at another useful command to check on switch interfaces."
    ],
    "ru": [
      "Теперь давайте рассмотрим еще одну полезную команду для проверки интерфейсов коммутатора."
    ]
  },
  {
    "time": [
      387.69,
      391.46
    ],
    "en": [
      "That is ‘show interfaces status’."
    ],
    "ru": [
      "Это «показать статус интерфейсов»."
    ]
  },
  {
    "time": [
      391.46,
      394.83
    ],
    "en": [
      "Let’s look at each field of the output."
    ],
    "ru": [
      "Давайте посмотрим на каждое поле вывода."
    ]
  },
  {
    "time": [
      394.83,
      399.139
    ],
    "en": [
      "First, the port field simply lists each interface."
    ],
    "ru": [
      "Во-первых, в поле порта просто перечислены все интерфейсы."
    ]
  },
  {
    "time": [
      399.139,
      402.59
    ],
    "en": [
      "Next, you might be wondering what this ‘name’ field is."
    ],
    "ru": [
      "Затем вам может быть интересно, что это за поле «name»."
    ]
  },
  {
    "time": [
      402.59,
      405.12
    ],
    "en": [
      "Well, its the description of the interface."
    ],
    "ru": [
      "Ну, это описание интерфейса."
    ]
  },
  {
    "time": [
      405.12,
      409.341
    ],
    "en": [
      "I’m not sure why they called it ‘name’ and not ‘description’, but we’ll configure"
    ],
    "ru": [
      "Не знаю, почему они назвали это «имя», а не «описание», но мы настроим"
    ]
  },
  {
    "time": [
      409.341,
      414.38
    ],
    "en": [
      "descriptions on these interfaces and you’ll see that it appears here."
    ],
    "ru": [
      "описания этих интерфейсов, и вы увидите, что он появляется здесь."
    ]
  },
  {
    "time": [
      414.38,
      416.85
    ],
    "en": [
      "Next is the status field."
    ],
    "ru": [
      "Далее идет поле статуса."
    ]
  },
  {
    "time": [
      416.85,
      421.88
    ],
    "en": [
      "As you can see this is different than the status field of show ip interface brief."
    ],
    "ru": [
      "Как видите, это отличается от поля статуса в show ip interfacerief."
    ]
  },
  {
    "time": [
      421.88,
      427.349
    ],
    "en": [
      "The four connected interfaces show a status of ‘connected, and the unconnected interfaces"
    ],
    "ru": [
      "Четыре подключенных интерфейса показывают статус «подключен», а неподключенные интерфейсы"
    ]
  },
  {
    "time": [
      427.349,
      430.12
    ],
    "en": [
      "show a status of ‘notconnect’."
    ],
    "ru": [
      "показать статус «notconnect»."
    ]
  },
  {
    "time": [
      430.12,
      435.61
    ],
    "en": [
      "There are other possible statuses, we’ll cover them as they come up in the course."
    ],
    "ru": [
      "Возможны и другие статусы, мы будем рассказывать о них по мере их появления в курсе."
    ]
  },
  {
    "time": [
      435.61,
      438.259
    ],
    "en": [
      "Next is the VLAN field."
    ],
    "ru": [
      "Далее идет поле VLAN."
    ]
  },
  {
    "time": [
      438.259,
      444.669
    ],
    "en": [
      "VLANs will get their own video, basically they can be used to divide LANs into smaller LANs."
    ],
    "ru": [
      "Сети VLAN получат собственное видео, в основном их можно использовать для разделения локальных сетей на более мелкие."
    ]
  },
  {
    "time": [
      444.669,
      448.07
    ],
    "en": [
      "As you can see, the default VLAN is 1."
    ],
    "ru": [
      "Как видите, VLAN по умолчанию - 1."
    ]
  },
  {
    "time": [
      448.07,
      453.099
    ],
    "en": [
      "The only one that does not show a VLAN of 1 is F0/2, which shows trunk."
    ],
    "ru": [
      "Единственный, который не показывает VLAN 1, - это F0 / 2, который показывает транк."
    ]
  },
  {
    "time": [
      453.099,
      458.639
    ],
    "en": [
      "I won’t explain trunks now, they’ll be covered in the VLAN video."
    ],
    "ru": [
      "Я не буду сейчас объяснять транки, они будут освещены в видео о VLAN."
    ]
  },
  {
    "time": [
      458.639,
      466.33
    ],
    "en": [
      "Just take note of the fact that the interface connected to the other switch, SW2, is a trunk interface."
    ],
    "ru": [
      "Просто обратите внимание на тот факт, что интерфейс, подключенный к другому коммутатору, SW2, является магистральным интерфейсом."
    ]
  },
  {
    "time": [
      466.33,
      471.59
    ],
    "en": [
      "Next is the duplex field, which as I mentioned before indicates whether the device is capable"
    ],
    "ru": [
      "Далее идет поле дуплекса, которое, как я упоминал ранее, указывает, способно ли устройство"
    ]
  },
  {
    "time": [
      471.59,
      477.41
    ],
    "en": [
      "of both sending and receiving data at the same time, which is known as full-duplex,"
    ],
    "ru": [
      "одновременной отправки и получения данных, что называется полнодуплексным,"
    ]
  },
  {
    "time": [
      477.41,
      481.3
    ],
    "en": [
      "or if its not, which is called half-duplex."
    ],
    "ru": [
      "а если нет, то это называется полудуплексом."
    ]
  },
  {
    "time": [
      481.3,
      486.61
    ],
    "en": [
      "Duplex is auto by default on Cisco switches, meaning it will negotiate with the neighboring"
    ],
    "ru": [
      "По умолчанию на коммутаторах Cisco дуплекс включен автоматически, то есть он будет согласовывать с соседними"
    ]
  },
  {
    "time": [
      486.61,
      490.97
    ],
    "en": [
      "device and use full-duplex if possible."
    ],
    "ru": [
      "устройства и по возможности используйте полнодуплексный режим."
    ]
  },
  {
    "time": [
      490.97,
      496.77
    ],
    "en": [
      "Notice that all of the unconnected interfaces have a duplex of auto, and the connected interfaces"
    ],
    "ru": [
      "Обратите внимание, что все неподключенные интерфейсы имеют дуплекс авто, а подключенные интерфейсы"
    ]
  },
  {
    "time": [
      496.77,
      502.979
    ],
    "en": [
      "have a duplex of ‘a dash full’ Well, the ‘a’ stands for auto, and it means that"
    ],
    "ru": [
      "иметь дуплекс «черта полная». «А» означает «авто», и это означает, что"
    ]
  },
  {
    "time": [
      502.979,
      508.83
    ],
    "en": [
      "it automatically negotiated a duplex of auto with the neighboring device."
    ],
    "ru": [
      "он автоматически согласовал дуплекс авто с соседним устройством."
    ]
  },
  {
    "time": [
      508.83,
      513.08
    ],
    "en": [
      "Next is the speed field, which is also auto by default."
    ],
    "ru": [
      "Далее идет поле скорости, которое по умолчанию тоже автоматическое."
    ]
  },
  {
    "time": [
      513.08,
      519.03
    ],
    "en": [
      "These are fastethernet interfaces, so they are capable of speeds up to 100 megabits per second."
    ],
    "ru": [
      "Это интерфейсы fastethernet, поэтому они способны развивать скорость до 100 мегабит в секунду."
    ]
  },
  {
    "time": [
      519.03,
      524.45
    ],
    "en": [
      "However, they are also capable of operating at 10 megabits per second."
    ],
    "ru": [
      "Однако они также могут работать со скоростью 10 мегабит в секунду."
    ]
  },
  {
    "time": [
      524.45,
      529.03
    ],
    "en": [
      "Auto means they are able to negotiate with the device they are connected to and use the"
    ],
    "ru": [
      "Авто означает, что они могут договариваться с устройством, к которому они подключены, и использовать"
    ]
  },
  {
    "time": [
      529.03,
      532.82
    ],
    "en": [
      "fastest speed both devices are capable of."
    ],
    "ru": [
      "максимальная скорость, на которую способны оба устройства."
    ]
  },
  {
    "time": [
      532.82,
      538.81
    ],
    "en": [
      "This time, we see ‘a DASH 100’, meaning a speed of 100 megabits per second was auto-negotiated"
    ],
    "ru": [
      "На этот раз мы видим \"DASH 100\", что означает автоматическое согласование скорости 100 мегабит в секунду."
    ]
  },
  {
    "time": [
      538.81,
      540.52
    ],
    "en": [
      "with the neighboring device."
    ],
    "ru": [
      "с соседним устройством."
    ]
  },
  {
    "time": [
      540.52,
      544.9
    ],
    "en": [
      "I’ll talk in more detail about auto negotiation soon."
    ],
    "ru": [
      "Я скоро расскажу подробнее об автосогласовании."
    ]
  },
  {
    "time": [
      544.9,
      548.14
    ],
    "en": [
      "Okay, finally is the Type field."
    ],
    "ru": [
      "Хорошо, наконец, поле Тип."
    ]
  },
  {
    "time": [
      548.14,
      554.63
    ],
    "en": [
      "These are all RJ45 interfaces for copper UTP cables, but if they were small form-factor"
    ],
    "ru": [
      "Это все интерфейсы RJ45 для медных кабелей UTP, но если бы они были небольшого форм-фактора"
    ]
  },
  {
    "time": [
      554.63,
      559.57
    ],
    "en": [
      "pluggable, or SFP, modules, you’d see that here instead."
    ],
    "ru": [
      "подключаемые модули или модули SFP, вы бы увидели это здесь."
    ]
  },
  {
    "time": [
      559.57,
      567.01
    ],
    "en": [
      "In this case, we see 10/100BASE-TX, the 10/100 of course referring to the speeds at which"
    ],
    "ru": [
      "В этом случае мы видим 10 / 100BASE-TX, 10/100, конечно, относится к скоростям, на которых"
    ]
  },
  {
    "time": [
      567.01,
      571.12
    ],
    "en": [
      "these interfaces can operate."
    ],
    "ru": [
      "эти интерфейсы могут работать."
    ]
  },
  {
    "time": [
      571.12,
      576.21
    ],
    "en": [
      "Autonegotiation works well so usually you’ll leave it be, but lets go and manually configure"
    ],
    "ru": [
      "Автосогласование работает хорошо, поэтому обычно вы оставляете его в покое, но давайте настроим его вручную."
    ]
  },
  {
    "time": [
      576.21,
      582.85
    ],
    "en": [
      "the speed and duplex of an interface, F0/1 which is connected to R1."
    ],
    "ru": [
      "скорость и дуплекс интерфейса F0 / 1, подключенного к R1."
    ]
  },
  {
    "time": [
      582.85,
      588.01
    ],
    "en": [
      "As you can see, I enter interface config mode, and then use the command speed."
    ],
    "ru": [
      "Как видите, я вхожу в режим настройки интерфейса, а затем использую командную скорость."
    ]
  },
  {
    "time": [
      588.01,
      593.9
    ],
    "en": [
      "I use the context-sensitive help to display the next option, and I can choose between"
    ],
    "ru": [
      "Я использую контекстно-зависимую справку, чтобы отобразить следующий параметр, и могу выбирать между"
    ]
  },
  {
    "time": [
      593.9,
      597.54
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
      593.9,
      597.54
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
      597.54,
      603.88
    ],
    "en": [
      "So, I set the speed to 100, since R1’s interface is a fastethernet interface also."
    ],
    "ru": [
      "Итак, я установил скорость на 100, поскольку интерфейс R1 также является интерфейсом fastethernet."
    ]
  },
  {
    "time": [
      603.88,
      609.15
    ],
    "en": [
      "Then, I use the command ‘duplex’ to set the duplex of the interface."
    ],
    "ru": [
      "Затем я использую команду «дуплекс», чтобы установить дуплексный режим интерфейса."
    ]
  },
  {
    "time": [
      609.15,
      617.35
    ],
    "en": [
      "As the context-sensitive help shows, I can choose between auto, which is the default, or full and half."
    ],
    "ru": [
      "Как показано в контекстно-зависимой справке, я могу выбирать между автоматическим, который используется по умолчанию, или полным и половинным."
    ]
  },
  {
    "time": [
      617.35,
      621.58
    ],
    "en": [
      "Both SW1 and R1 support full duplex, so I choose that."
    ],
    "ru": [
      "И SW1, и R1 поддерживают полный дуплекс, поэтому я выбрал его."
    ]
  },
  {
    "time": [
      621.58,
      628.25
    ],
    "en": [
      "Finally, I configure a description on the interface, indicating that it is connected to R1."
    ],
    "ru": [
      "Наконец, я настраиваю описание интерфейса, указывающее, что он подключен к R1."
    ]
  },
  {
    "time": [
      628.25,
      634.73
    ],
    "en": [
      "Okay, so when I use the ‘show interfaces status’ command once again, you can see"
    ],
    "ru": [
      "Итак, когда я снова использую команду «показать статус интерфейсов», вы увидите"
    ]
  },
  {
    "time": [
      634.73,
      640.2
    ],
    "en": [
      "both the configured description and the configured speed and duplex."
    ],
    "ru": [
      "как настроенное описание, так и настроенная скорость и дуплекс."
    ]
  },
  {
    "time": [
      640.2,
      646.85
    ],
    "en": [
      "Notice the duplex is full, rather than a dash full, and the speed is 100, rather than a"
    ],
    "ru": [
      "Обратите внимание, что дуплекс заполнен, а не на тире, а скорость равна 100, а не"
    ]
  },
  {
    "time": [
      646.85,
      651.7
    ],
    "en": [
      "dash 100, because they are not being autonegotiated any more."
    ],
    "ru": [
      "тире 100, потому что они больше не являются автосогласованными."
    ]
  },
  {
    "time": [
      651.7,
      658.44
    ],
    "en": [
      "Once again, normally you will keep autonegotiation on, but if perhaps there is some problem and"
    ],
    "ru": [
      "Еще раз, обычно вы продолжаете автосогласование, но если, возможно, есть какие-то проблемы и"
    ]
  },
  {
    "time": [
      658.44,
      663.8
    ],
    "en": [
      "its not working, you should know how to manually configure the speed and duplex of an interface."
    ],
    "ru": [
      "это не работает, вы должны знать, как вручную настроить скорость и дуплекс интерфейса."
    ]
  },
  {
    "time": [
      663.8,
      668.05
    ],
    "en": [
      "Now, let me quickly do some configurations for the other connected interfaces off-camera…"
    ],
    "ru": [
      "Теперь позвольте мне быстро выполнить некоторые настройки для других подключенных интерфейсов вне камеры ..."
    ]
  },
  {
    "time": [
      668.05,
      674.73
    ],
    "en": [
      "Okay, so I just configured descriptions on F0/2, 0/3, and 0/4."
    ],
    "ru": [
      "Хорошо, я просто настроил описания на F0 / 2, 0/3 и 0/4."
    ]
  },
  {
    "time": [
      674.73,
      678.85
    ],
    "en": [
      "Now, how about the unused interfaces?"
    ],
    "ru": [
      "А как насчет неиспользуемых интерфейсов?"
    ]
  },
  {
    "time": [
      678.85,
      683.26
    ],
    "en": [
      "Although the fact that switch interfaces are enabled by default is convenient, as you can"
    ],
    "ru": [
      "Хотя то, что интерфейсы переключателей включены по умолчанию, удобно, так как можно"
    ]
  },
  {
    "time": [
      683.26,
      688.82
    ],
    "en": [
      "just plug a device in and use it straight away, it can be a security concern."
    ],
    "ru": [
      "просто подключите устройство и сразу используйте его, это может быть проблемой для безопасности."
    ]
  },
  {
    "time": [
      688.82,
      692.33
    ],
    "en": [
      "Really, you should disable the interfaces."
    ],
    "ru": [
      "Действительно, вы должны отключить интерфейсы."
    ]
  },
  {
    "time": [
      692.33,
      698.001
    ],
    "en": [
      "Fortunately, instead of having to configure each of the 8 interfaces one by one, there"
    ],
    "ru": [
      "К счастью, вместо того, чтобы настраивать каждый из 8 интерфейсов один за другим,"
    ]
  },
  {
    "time": [
      698.001,
      701.82
    ],
    "en": [
      "is a way to configure all 8 interfaces at once."
    ],
    "ru": [
      "это способ настроить все 8 интерфейсов одновременно."
    ]
  },
  {
    "time": [
      701.82,
      705.83
    ],
    "en": [
      "Here’s the command that can save you a lot of time."
    ],
    "ru": [
      "Вот команда, которая поможет вам сэкономить много времени."
    ]
  },
  {
    "time": [
      705.83,
      716.32
    ],
    "en": [
      "From global config mode, type ‘interface range’, and then enter the range like this, f0/5 to 12."
    ],
    "ru": [
      "В режиме глобальной конфигурации введите «interface range», а затем введите диапазон, подобный этому, от f0 / 5 до 12."
    ]
  },
  {
    "time": [
      716.32,
      722.37
    ],
    "en": [
      "This time, instead of interface config mode, I am brought to interface range config mode,"
    ],
    "ru": [
      "На этот раз вместо режима настройки интерфейса я попал в режим настройки диапазона интерфейса,"
    ]
  },
  {
    "time": [
      722.37,
      725.98
    ],
    "en": [
      "and I enter a description, and then shut down the interfaces."
    ],
    "ru": [
      "и я ввожу описание, а затем закрываю интерфейсы."
    ]
  },
  {
    "time": [
      725.98,
      732.27
    ],
    "en": [
      "All at once, I get messages saying the interfaces have changed to administratively down."
    ],
    "ru": [
      "Внезапно я получаю сообщения о том, что интерфейсы отключены административно."
    ]
  },
  {
    "time": [
      732.27,
      739.95
    ],
    "en": [
      "Now, before we check show interfaces status once more, let me show you a cool thing about this command."
    ],
    "ru": [
      "Теперь, прежде чем мы еще раз проверим статус show interfaces, позвольте мне показать вам одну интересную вещь об этой команде."
    ]
  },
  {
    "time": [
      739.95,
      744.16
    ],
    "en": [
      "The interfaces in the range don’t all have to be consecutive."
    ],
    "ru": [
      "Не все интерфейсы в диапазоне должны быть последовательными."
    ]
  },
  {
    "time": [
      744.16,
      752.81
    ],
    "en": [
      "For example, if I later want to enter fastethernet 0/5, 6, 9, 10, 11, and 12, but leave 7 and"
    ],
    "ru": [
      "Например, если я позже захочу ввести fastethernet 0/5, 6, 9, 10, 11 и 12, но оставлю 7 и"
    ]
  },
  {
    "time": [
      752.81,
      763.13
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
      752.81,
      763.13
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
      763.13,
      768.84
    ],
    "en": [
      "Then if I issue ‘no shutdown’, you can see only those interfaces and enabled."
    ],
    "ru": [
      "Затем, если я выдам команду «Без выключения», вы увидите только те интерфейсы, которые включены."
    ]
  },
  {
    "time": [
      768.84,
      772.21
    ],
    "en": [
      "F0/7 and 8 remain down."
    ],
    "ru": [
      "F0 / 7 и 8 остаются внизу."
    ]
  },
  {
    "time": [
      772.21,
      782.91
    ],
    "en": [
      "Okay, so I shutdown interfaces f0/5,6,9,10,11, and 12 again, and here’s the output of show interfaces status again."
    ],
    "ru": [
      "Хорошо, я снова отключил интерфейсы f0 / 5, 6, 9, 10, 11 и 12, и вот результат отображения статуса интерфейсов снова."
    ]
  },
  {
    "time": [
      782.91,
      787.99
    ],
    "en": [
      "Now you can see the description of each interface, and the status is disabled."
    ],
    "ru": [
      "Теперь вы можете увидеть описание каждого интерфейса, и статус отключен."
    ]
  },
  {
    "time": [
      787.99,
      793.0
    ],
    "en": [
      "Once again, this status is different than the status shown in ‘show ip interface brief’,"
    ],
    "ru": [
      "Еще раз, этот статус отличается от статуса, показанного в «show ip interfacerief»,"
    ]
  },
  {
    "time": [
      793.0,
      799.5
    ],
    "en": [
      "which will now be ‘administratively down’, although really they mean the same thing."
    ],
    "ru": [
      "которые теперь будут «административно отключены», хотя на самом деле они означают одно и то же."
    ]
  },
  {
    "time": [
      799.5,
      804.48
    ],
    "en": [
      "Before talking about autonegotiation, I want to explain full and half duplex."
    ],
    "ru": [
      "Прежде чем говорить об автосогласовании, я хочу объяснить полный и полудуплексный режимы."
    ]
  },
  {
    "time": [
      804.48,
      810.62
    ],
    "en": [
      "I have briefly mentioned it a few times, but haven’t explained it in depth yet."
    ],
    "ru": [
      "Я кратко упомянул об этом несколько раз, но еще не объяснил подробно."
    ]
  },
  {
    "time": [
      810.62,
      815.94
    ],
    "en": [
      "Half duplex means that the device cannot send and receive data at the same time."
    ],
    "ru": [
      "Полудуплекс означает, что устройство не может отправлять и получать данные одновременно."
    ]
  },
  {
    "time": [
      815.94,
      820.93
    ],
    "en": [
      "If it is receiving a frame, it must wait before sending a frame."
    ],
    "ru": [
      "Если он получает кадр, он должен подождать перед отправкой кадра."
    ]
  },
  {
    "time": [
      820.93,
      825.13
    ],
    "en": [
      "Full duplex means that the device CAN send and receive data at the same time."
    ],
    "ru": [
      "Полный дуплекс означает, что устройство МОЖЕТ отправлять и получать данные одновременно."
    ]
  },
  {
    "time": [
      825.13,
      827.38
    ],
    "en": [
      "It does not have to wait."
    ],
    "ru": [
      "Не нужно ждать."
    ]
  },
  {
    "time": [
      827.38,
      831.45
    ],
    "en": [
      "Clearly, full duplex is the preferred way to go."
    ],
    "ru": [
      "Ясно, что предпочтительнее использовать полный дуплекс."
    ]
  },
  {
    "time": [
      831.45,
      837.42
    ],
    "en": [
      "In modern networks that use switches, all devices can use full duplex on their interfaces."
    ],
    "ru": [
      "В современных сетях, использующих коммутаторы, все устройства могут использовать полнодуплексный режим на своих интерфейсах."
    ]
  },
  {
    "time": [
      837.42,
      841.08
    ],
    "en": [
      "So, you may be wondering where is half-duplex used?"
    ],
    "ru": [
      "Итак, вам может быть интересно, где используется полудуплекс?"
    ]
  },
  {
    "time": [
      841.08,
      845.94
    ],
    "en": [
      "Well, in modern day networks, almost nowhere."
    ],
    "ru": [
      "Что ж, в современных сетях почти нигде."
    ]
  },
  {
    "time": [
      845.94,
      851.37
    ],
    "en": [
      "But to understand half-duplex let me introduce you to an old type of network device which"
    ],
    "ru": [
      "Но чтобы понять полудуплекс, позвольте мне познакомить вас со старым типом сетевого устройства, которое"
    ]
  },
  {
    "time": [
      851.37,
      854.62
    ],
    "en": [
      "was around before the network switch."
    ],
    "ru": [
      "был до сетевого коммутатора."
    ]
  },
  {
    "time": [
      854.62,
      860.41
    ],
    "en": [
      "The hub is much simpler than a switch, in fact it is simply a repeater."
    ],
    "ru": [
      "Хаб намного проще коммутатора, по сути, это просто повторитель."
    ]
  },
  {
    "time": [
      860.41,
      866.92
    ],
    "en": [
      "Any frame it receives, it floods like a switch does with a broadcast or unknown unicast frame."
    ],
    "ru": [
      "Любой кадр, который он получает, рассылается, как коммутатор с широковещательным или неизвестным одноадресным кадром."
    ]
  },
  {
    "time": [
      866.92,
      874.52
    ],
    "en": [
      "For example, if PC1 wants to send a frame to PC2, it will send the frame out of its network interface,"
    ],
    "ru": [
      "Например, если ПК1 хочет отправить кадр на ПК2, он отправит кадр из своего сетевого интерфейса,"
    ]
  },
  {
    "time": [
      874.52,
      881.48
    ],
    "en": [
      "and after the hub receives it, it will repeat the frame out of its other interfaces, to PC2 and PC3."
    ],
    "ru": [
      "и после того, как концентратор получит его, он будет повторять кадр из других своих интерфейсов на ПК2 и ПК3."
    ]
  },
  {
    "time": [
      881.48,
      887.8
    ],
    "en": [
      "PC3 will recognize that the destination MAC Address is not its own and ignore the frame,"
    ],
    "ru": [
      "ПК3 распознает, что MAC-адрес назначения не является его собственным, и проигнорирует фрейм,"
    ]
  },
  {
    "time": [
      887.8,
      890.4
    ],
    "en": [
      "and PC2 will receive it normally."
    ],
    "ru": [
      "и ПК2 получит его нормально."
    ]
  },
  {
    "time": [
      890.4,
      895.47
    ],
    "en": [
      "Now, what if two PCs try to send frames at the same time?"
    ],
    "ru": [
      "А что, если два компьютера попытаются отправить кадры одновременно?"
    ]
  },
  {
    "time": [
      895.47,
      903.32
    ],
    "en": [
      "In this case, PC1 is trying to send a frame to PC2, and PC3 is trying to send a frame to PC1."
    ],
    "ru": [
      "В этом случае ПК1 пытается отправить кадр на ПК2, а ПК3 пытается отправить кадр на ПК1."
    ]
  },
  {
    "time": [
      903.32,
      907.39
    ],
    "en": [
      "They both send the frames out of their network interfaces,"
    ],
    "ru": [
      "Они оба отправляют кадры из своих сетевых интерфейсов,"
    ]
  },
  {
    "time": [
      907.39,
      910.1
    ],
    "en": [
      "and this is where a problem occurs."
    ],
    "ru": [
      "и здесь возникает проблема."
    ]
  },
  {
    "time": [
      910.1,
      914.83
    ],
    "en": [
      "The hub won’t send one first and then send the other after, it simply tries to flood"
    ],
    "ru": [
      "Хаб не отправляет сначала одно, а потом второе, просто пытается флудить"
    ]
  },
  {
    "time": [
      914.83,
      921.25
    ],
    "en": [
      "both at the same time, and this will result in a collision on the interface, and PC2 won’t"
    ],
    "ru": [
      "одновременно, и это приведет к конфликту интерфейса, и ПК2 не будет"
    ]
  },
  {
    "time": [
      921.25,
      924.06
    ],
    "en": [
      "receive either frame intact."
    ],
    "ru": [
      "получить любую раму в целости и сохранности."
    ]
  },
  {
    "time": [
      924.06,
      928.87
    ],
    "en": [
      "All devices connected to a hub are part of what’s called a collision domain."
    ],
    "ru": [
      "Все устройства, подключенные к концентратору, являются частью так называемого домена конфликтов."
    ]
  },
  {
    "time": [
      928.87,
      935.02
    ],
    "en": [
      "The frames they send could collide with frames any of the other devices connected to the hub send."
    ],
    "ru": [
      "Отправляемые ими кадры могут конфликтовать с кадрами, отправляемыми любым другим устройством, подключенным к концентратору."
    ]
  },
  {
    "time": [
      935.02,
      942.1
    ],
    "en": [
      "To deal with collisions in a half-duplex situation like this, Ethernet devices use a mechanism called ‘CSMA/CD’."
    ],
    "ru": [
      "Чтобы справиться с конфликтами в подобной полудуплексной ситуации, устройства Ethernet используют механизм, называемый «CSMA / CD»."
    ]
  },
  {
    "time": [
      942.1,
      945.26
    ],
    "en": [
      "Let’s check it out."
    ],
    "ru": [
      "Давай проверим."
    ]
  },
  {
    "time": [
      945.26,
      952.22
    ],
    "en": [
      "CSMA/CD stands for ‘carrier sense multiple access with collision detection’."
    ],
    "ru": [
      "CSMA / CD означает «множественный доступ с контролем несущей и обнаружением коллизий»."
    ]
  },
  {
    "time": [
      952.22,
      957.5
    ],
    "en": [
      "It describes how devices avoid collisions in a half-duplex situation, and how they react"
    ],
    "ru": [
      "В нем описывается, как устройства избегают коллизий в полудуплексной ситуации и как они реагируют."
    ]
  },
  {
    "time": [
      957.5,
      959.66
    ],
    "en": [
      "if collisions do occur."
    ],
    "ru": [
      "если столкновения все же происходят."
    ]
  },
  {
    "time": [
      959.66,
      961.88
    ],
    "en": [
      "It works like this."
    ],
    "ru": [
      "Это работает вот так."
    ]
  },
  {
    "time": [
      961.88,
      967.12
    ],
    "en": [
      "Before sending frames, devices listen to the collision domain until they detect that other"
    ],
    "ru": [
      "Перед отправкой кадров устройства прослушивают домен коллизии, пока не обнаружат другой домен."
    ]
  },
  {
    "time": [
      967.12,
      968.93
    ],
    "en": [
      "devices are not sending frames."
    ],
    "ru": [
      "устройства не отправляют кадры."
    ]
  },
  {
    "time": [
      968.93,
      975.06
    ],
    "en": [
      "If a collision does occur, which can still happen because of bad timing and such, the"
    ],
    "ru": [
      "Если столкновение все-таки произойдет, которое все еще может произойти из-за неправильного выбора времени и т. П.,"
    ]
  },
  {
    "time": [
      975.06,
      980.77
    ],
    "en": [
      "device sends a jamming signal to inform the other devices that a collision happened."
    ],
    "ru": [
      "устройство отправляет сигнал глушения, чтобы сообщить другим устройствам, что произошло столкновение."
    ]
  },
  {
    "time": [
      980.77,
      985.71
    ],
    "en": [
      "Each device then waits a random period of time before sending frames agan."
    ],
    "ru": [
      "Затем каждое устройство ожидает случайный период времени перед отправкой кадров снова."
    ]
  },
  {
    "time": [
      985.71,
      990.26
    ],
    "en": [
      "The process then repeats, with each device listening to check if other devices are sending"
    ],
    "ru": [
      "Затем процесс повторяется, и каждое устройство прослушивает, чтобы проверить, отправляют ли другие устройства"
    ]
  },
  {
    "time": [
      990.26,
      993.28
    ],
    "en": [
      "frames before sending their own frames."
    ],
    "ru": [
      "кадры перед отправкой собственных кадров."
    ]
  },
  {
    "time": [
      993.28,
      998.86
    ],
    "en": [
      "Now, that process works, and it was how networks operated for a long time."
    ],
    "ru": [
      "Теперь этот процесс работает, и сети работали так долгое время."
    ]
  },
  {
    "time": [
      998.86,
      1002.18
    ],
    "en": [
      "But switches are more sophisticated than hubs."
    ],
    "ru": [
      "Но коммутаторы сложнее концентраторов."
    ]
  },
  {
    "time": [
      1002.18,
      1008.44
    ],
    "en": [
      "Hubs are simple repeaters which operate at layer 1, repeating whatever signals they receive."
    ],
    "ru": [
      "Концентраторы - это простые повторители, которые работают на уровне 1, повторяя все полученные сигналы."
    ]
  },
  {
    "time": [
      1008.44,
      1015.81
    ],
    "en": [
      "Switches operate at layer 2, using layer 2 addressing, MAC addresses, to send frames to specific hosts."
    ],
    "ru": [
      "Коммутаторы работают на уровне 2, используя адресацию уровня 2, MAC-адреса, для отправки кадров на определенные хосты."
    ]
  },
  {
    "time": [
      1015.81,
      1019.35
    ],
    "en": [
      "They also won’t try to send two frames to the same host at once."
    ],
    "ru": [
      "Они также не будут пытаться отправить два кадра на один и тот же хост одновременно."
    ]
  },
  {
    "time": [
      1019.35,
      1028.44
    ],
    "en": [
      "So, this network which was one collision domain when connected to a hub, is now 1, 2, 3 collision domains."
    ],
    "ru": [
      "Итак, эта сеть, которая была одним доменом коллизии при подключении к концентратору, теперь имеет 1, 2, 3 домена коллизии."
    ]
  },
  {
    "time": [
      1028.44,
      1033.37
    ],
    "en": [
      "Because of the improved functionality of switches over hubs, these devices can now operate in"
    ],
    "ru": [
      "Благодаря улучшенной функциональности коммутаторов через концентраторы, эти устройства теперь могут работать в"
    ]
  },
  {
    "time": [
      1033.37,
      1038.3
    ],
    "en": [
      "full duplex, meaning they don’t have to worry about whether or not other devices are"
    ],
    "ru": [
      "полный дуплекс, то есть им не нужно беспокоиться о том,"
    ]
  },
  {
    "time": [
      1038.3,
      1043.069
    ],
    "en": [
      "sending data at the same time, they can send data freely."
    ],
    "ru": [
      "отправляя данные одновременно, они могут отправлять данные свободно."
    ]
  },
  {
    "time": [
      1043.069,
      1048.11
    ],
    "en": [
      "Although problems like collisions still do occur, they are rare and usually are a sign"
    ],
    "ru": [
      "Хотя такие проблемы, как столкновения, все еще возникают, они редки и обычно являются признаком"
    ]
  },
  {
    "time": [
      1048.11,
      1055.41
    ],
    "en": [
      "of a problem, like a misconfiguration, rather than a regular occurrence like in a half-duplex network."
    ],
    "ru": [
      "проблемы, такой как неправильная конфигурация, а не обычное явление, как в полудуплексной сети."
    ]
  },
  {
    "time": [
      1055.41,
      1058.33
    ],
    "en": [
      "So let’s review half and full duplex once more."
    ],
    "ru": [
      "Итак, давайте еще раз рассмотрим полудуплекс и полудуплекс."
    ]
  },
  {
    "time": [
      1058.33,
      1063.87
    ],
    "en": [
      "In half duplex, the device cannot send and receive data at the same time."
    ],
    "ru": [
      "В полудуплексном режиме устройство не может отправлять и получать данные одновременно."
    ]
  },
  {
    "time": [
      1063.87,
      1068.36
    ],
    "en": [
      "If it is receiving a frame, it must wait before sending a frame."
    ],
    "ru": [
      "Если он получает кадр, он должен подождать перед отправкой кадра."
    ]
  },
  {
    "time": [
      1068.36,
      1072.49
    ],
    "en": [
      "Devices attached to a hub must operate in half duplex."
    ],
    "ru": [
      "Устройства, подключенные к концентратору, должны работать в полудуплексном режиме."
    ]
  },
  {
    "time": [
      1072.49,
      1077.79
    ],
    "en": [
      "In modern networks, you’re probably not going to use a hub, but it’s a possibility."
    ],
    "ru": [
      "В современных сетях вы, вероятно, не собираетесь использовать концентратор, но это возможно."
    ]
  },
  {
    "time": [
      1077.79,
      1084.62
    ],
    "en": [
      "In full duplex, the device can send and receive data at the same time, it does not have to wait."
    ],
    "ru": [
      "В полнодуплексном режиме устройство может отправлять и получать данные одновременно, ему не нужно ждать."
    ]
  },
  {
    "time": [
      1084.62,
      1088.23
    ],
    "en": [
      "Devices attached to a switch can operate in full duplex."
    ],
    "ru": [
      "Устройства, подключенные к коммутатору, могут работать в полнодуплексном режиме."
    ]
  },
  {
    "time": [
      1088.23,
      1094.0
    ],
    "en": [
      "Okay, now that you know what duplex is let’s talk about speed and duplex autonegotiation"
    ],
    "ru": [
      "Хорошо, теперь, когда вы знаете, что такое дуплекс, давайте поговорим о скорости и автосогласовании дуплекса."
    ]
  },
  {
    "time": [
      1094.0,
      1099.88
    ],
    "en": [
      "on interfaces, and this applies to both routers and switches by the way."
    ],
    "ru": [
      "на интерфейсах, причем это относится как к маршрутизаторам, так и к коммутаторам."
    ]
  },
  {
    "time": [
      1099.88,
      1107.29
    ],
    "en": [
      "Interfaces that can run at different speeds, for example 10/100 or 10/100/1000, have default"
    ],
    "ru": [
      "Интерфейсы, которые могут работать на разных скоростях, например 10/100 или 10/100/1000, имеют значение по умолчанию."
    ]
  },
  {
    "time": [
      1107.29,
      1111.75
    ],
    "en": [
      "settings of speed auto and duplex auto."
    ],
    "ru": [
      "настройки скорости авто и дуплексного авто."
    ]
  },
  {
    "time": [
      1111.75,
      1116.02
    ],
    "en": [
      "Interfaces advertise their capabilities to their neighbors, and they negotiate the best"
    ],
    "ru": [
      "Интерфейсы рекламируют свои возможности своим соседям, и они договариваются о лучших"
    ]
  },
  {
    "time": [
      1116.02,
      1118.6
    ],
    "en": [
      "speed and duplex settings they are both capable of."
    ],
    "ru": [
      "скорость и дуплексные настройки, на которые они способны."
    ]
  },
  {
    "time": [
      1118.6,
      1121.52
    ],
    "en": [
      "So, let’s look at an example."
    ],
    "ru": [
      "Итак, давайте посмотрим на пример."
    ]
  },
  {
    "time": [
      1121.52,
      1126.91
    ],
    "en": [
      "Here’s a small network, a switch with three PCs connected."
    ],
    "ru": [
      "Вот небольшая сеть, свитч с тремя подключенными ПК."
    ]
  },
  {
    "time": [
      1126.91,
      1132.02
    ],
    "en": [
      "Connected to G0/1 is a PC with a regular ethernet interface."
    ],
    "ru": [
      "К G0 / 1 подключен ПК с обычным интерфейсом Ethernet."
    ]
  },
  {
    "time": [
      1132.02,
      1139.65
    ],
    "en": [
      "Connected to G0/2 is a PC with a fastethernet interface. and connected to G0/3 is a PC with"
    ],
    "ru": [
      "К G0 / 2 подключен ПК с интерфейсом fastethernet. и к G0 / 3 подключен ПК с"
    ]
  },
  {
    "time": [
      1139.65,
      1142.49
    ],
    "en": [
      "a gigabit ethernet interface."
    ],
    "ru": [
      "гигабитный интерфейс Ethernet."
    ]
  },
  {
    "time": [
      1142.49,
      1147.43
    ],
    "en": [
      "As you probably know by now, an Ethernet interface can run at 10 megabits per second,"
    ],
    "ru": [
      "Как вы, наверное, уже знаете, интерфейс Ethernet может работать со скоростью 10 мегабит в секунду,"
    ]
  },
  {
    "time": [
      1147.43,
      1152.99
    ],
    "en": [
      "a fastethernet interface can run at 10 or 100 megabits per second, and a gigabit ethernet"
    ],
    "ru": [
      "интерфейс fastethernet может работать со скоростью 10 или 100 мегабит в секунду, а гигабитный Ethernet"
    ]
  },
  {
    "time": [
      1152.99,
      1158.65
    ],
    "en": [
      "interface can run at 10, 100, or 1000 gigabits per second."
    ],
    "ru": [
      "интерфейс может работать со скоростью 10, 100 или 1000 гигабит в секунду."
    ]
  },
  {
    "time": [
      1158.65,
      1165.42
    ],
    "en": [
      "So, G0/1 and the PC will negotiate to a speed of 10 megabits per second, and full duplex."
    ],
    "ru": [
      "Итак, G0 / 1 и ПК будут согласовывать скорость 10 мегабит в секунду и полный дуплекс."
    ]
  },
  {
    "time": [
      1165.42,
      1171.42
    ],
    "en": [
      "G0/2 and the PC will negotiate to a speed of 100 and full duplex."
    ],
    "ru": [
      "G0 / 2 и ПК будут согласовывать скорость 100 и полный дуплекс."
    ]
  },
  {
    "time": [
      1171.42,
      1177.42
    ],
    "en": [
      "And g0/3 and the PC will negotiate to speed 1000 and full duplex."
    ],
    "ru": [
      "И g0 / 3, и ПК будут согласовывать скорость 1000 и полнодуплексный режим."
    ]
  },
  {
    "time": [
      1177.42,
      1182.04
    ],
    "en": [
      "The PCs are all able to use the max speed of their network interfaces, and the switch"
    ],
    "ru": [
      "Все ПК могут использовать максимальную скорость своих сетевых интерфейсов, а коммутатор"
    ]
  },
  {
    "time": [
      1182.04,
      1185.59
    ],
    "en": [
      "adjusts the speeds of its interfaces to match."
    ],
    "ru": [
      "регулирует скорости своих интерфейсов, чтобы они соответствовали."
    ]
  },
  {
    "time": [
      1185.59,
      1190.76
    ],
    "en": [
      "In a network like this with all PCs and switches, there’s no reason to use half-duplex, so"
    ],
    "ru": [
      "В такой сети со всеми ПК и коммутаторами нет причин использовать полудуплекс, поэтому"
    ]
  },
  {
    "time": [
      1190.76,
      1192.98
    ],
    "en": [
      "they all negotiate to use full-duplex."
    ],
    "ru": [
      "все они договариваются об использовании полнодуплексного режима."
    ]
  },
  {
    "time": [
      1192.98,
      1197.24
    ],
    "en": [
      "Now, let’s talk about another situation."
    ],
    "ru": [
      "А теперь поговорим о другой ситуации."
    ]
  },
  {
    "time": [
      1197.24,
      1201.17
    ],
    "en": [
      "What if autonegotiation is disabled on the device connected to the switch?"
    ],
    "ru": [
      "Что делать, если на устройстве, подключенном к коммутатору, отключено автосогласование?"
    ]
  },
  {
    "time": [
      1201.17,
      1206.65
    ],
    "en": [
      "So, the switch is trying to autonegotiate, but the other devices don't respond."
    ],
    "ru": [
      "Итак, коммутатор пытается выполнить автосогласование, но другие устройства не отвечают."
    ]
  },
  {
    "time": [
      1206.65,
      1209.72
    ],
    "en": [
      "Well, this is how the switch will respond."
    ],
    "ru": [
      "Ну вот как отреагирует переключатель."
    ]
  },
  {
    "time": [
      1209.72,
      1215.18
    ],
    "en": [
      "For the speed, the switch will try to sense the speed that the other device is operating at."
    ],
    "ru": [
      "Что касается скорости, переключатель будет пытаться определить скорость, с которой работает другое устройство."
    ]
  },
  {
    "time": [
      1215.18,
      1221.06
    ],
    "en": [
      "If it fails to sense the speed, it will use the slowest supported speed, for example 10"
    ],
    "ru": [
      "Если ему не удается определить скорость, он будет использовать самую низкую поддерживаемую скорость, например 10"
    ]
  },
  {
    "time": [
      1221.06,
      1224.84
    ],
    "en": [
      "Mbps on a 10/100/1000 interface."
    ],
    "ru": [
      "Мбит / с на интерфейсе 10/100/1000."
    ]
  },
  {
    "time": [
      1224.84,
      1233.79
    ],
    "en": [
      "Now, as for duplex, if it ends up using a speed of 10 or 100 mbps, the switch will use half duplex."
    ],
    "ru": [
      "Теперь, что касается дуплекса, если он в конечном итоге использует скорость 10 или 100 Мбит / с, коммутатор будет использовать полудуплекс."
    ]
  },
  {
    "time": [
      1233.79,
      1239.06
    ],
    "en": [
      "If the speed is 1000 mbps or greater, it will use full duplex."
    ],
    "ru": [
      "Если скорость составляет 1000 Мбит / с или больше, будет использоваться полный дуплекс."
    ]
  },
  {
    "time": [
      1239.06,
      1241.26
    ],
    "en": [
      "So let’s see how this works."
    ],
    "ru": [
      "Итак, давайте посмотрим, как это работает."
    ]
  },
  {
    "time": [
      1241.26,
      1249.06
    ],
    "en": [
      "In this case, only the switch is using autonegotiation, and the three PCs have manual, fixed speed and duplex settings."
    ],
    "ru": [
      "В этом случае только коммутатор использует автосогласование, а три ПК имеют ручные, фиксированные настройки скорости и дуплексного режима."
    ]
  },
  {
    "time": [
      1249.06,
      1254.73
    ],
    "en": [
      "We’ll also assume that the switch successfully detects the speed that the PCs are using."
    ],
    "ru": [
      "Мы также предположим, что коммутатор успешно определяет скорость, которую используют ПК."
    ]
  },
  {
    "time": [
      1254.73,
      1262.86
    ],
    "en": [
      "The Green PC has a speed of 10 Mbps, so the switch detects that and sets its speed to the same."
    ],
    "ru": [
      "Зеленый ПК имеет скорость 10 Мбит / с, поэтому коммутатор определяет это и устанавливает ту же скорость."
    ]
  },
  {
    "time": [
      1262.86,
      1268.23
    ],
    "en": [
      "Because its speed is 10 Mbps, it sets its speed to half duplex."
    ],
    "ru": [
      "Поскольку его скорость составляет 10 Мбит / с, он устанавливает скорость в полудуплексном режиме."
    ]
  },
  {
    "time": [
      1268.23,
      1273.13
    ],
    "en": [
      "Now, how about G0/2, connected to the Red PC?"
    ],
    "ru": [
      "А как насчет G0 / 2, подключенного к Red PC?"
    ]
  },
  {
    "time": [
      1273.13,
      1279.11
    ],
    "en": [
      "It senses that the PC is using a speed of 1000 mbps, so it uses the same."
    ],
    "ru": [
      "Он определяет, что ПК использует скорость 1000 Мбит / с, поэтому использует то же самое."
    ]
  },
  {
    "time": [
      1279.11,
      1284.3
    ],
    "en": [
      "Because the speed is 1000 Mbps, it uses full duplex."
    ],
    "ru": [
      "Поскольку скорость составляет 1000 Мбит / с, используется полный дуплекс."
    ]
  },
  {
    "time": [
      1284.3,
      1288.9
    ],
    "en": [
      "Now how about G0/3, connected to the blue PC?"
    ],
    "ru": [
      "А как насчет G0 / 3, подключенного к синему ПК?"
    ]
  },
  {
    "time": [
      1288.9,
      1294.5
    ],
    "en": [
      "It senses the speed of 100 mbps, but then what about the duplex?"
    ],
    "ru": [
      "Чувствует скорость 100 мбит / с, а как быть с дуплексом?"
    ]
  },
  {
    "time": [
      1294.5,
      1300.38
    ],
    "en": [
      "The PC is using full duplex, but without autonegotiation the switch cant sense that."
    ],
    "ru": [
      "ПК использует полнодуплексный режим, но без автосогласования коммутатор этого не обнаружит."
    ]
  },
  {
    "time": [
      1300.38,
      1306.4
    ],
    "en": [
      "So, because the speed is 100 Mbps, the switch uses half duplex."
    ],
    "ru": [
      "Итак, поскольку скорость составляет 100 Мбит / с, коммутатор использует полудуплекс."
    ]
  },
  {
    "time": [
      1306.4,
      1312.98
    ],
    "en": [
      "This results in a duplex mismatch, which will cause collisions to occur, resulting in poor network performance."
    ],
    "ru": [
      "Это приводит к несоответствию дуплексного режима, что приводит к возникновению коллизий, что приводит к снижению производительности сети."
    ]
  },
  {
    "time": [
      1312.98,
      1319.61
    ],
    "en": [
      "So, really you should be using autonegotiation on all devices in the network."
    ],
    "ru": [
      "Итак, вам действительно следует использовать автосогласование на всех устройствах в сети."
    ]
  },
  {
    "time": [
      1319.61,
      1323.43
    ],
    "en": [
      "Now let’s take a look at some of the errors that can show up on interfaces that otherwise"
    ],
    "ru": [
      "Теперь давайте посмотрим на некоторые ошибки, которые могут появиться в интерфейсах, которые в противном случае"
    ]
  },
  {
    "time": [
      1323.43,
      1325.68
    ],
    "en": [
      "seem to be working."
    ],
    "ru": [
      "похоже работает."
    ]
  },
  {
    "time": [
      1325.68,
      1331.61
    ],
    "en": [
      "The switch will take count of some of these things and you can view them with the ‘show interfaces’ command."
    ],
    "ru": [
      "Коммутатор будет считать некоторые из этих вещей, и вы можете просмотреть их с помощью команды «show interfaces»."
    ]
  },
  {
    "time": [
      1331.61,
      1335.86
    ],
    "en": [
      "We took a quick look at this command when we were configuring router interfaces, so"
    ],
    "ru": [
      "Мы быстро рассмотрели эту команду, когда настраивали интерфейсы маршрутизатора, поэтому"
    ]
  },
  {
    "time": [
      1335.86,
      1339.58
    ],
    "en": [
      "these things aren’t specific for switch interfaces."
    ],
    "ru": [
      "эти вещи не специфичны для интерфейсов коммутатора."
    ]
  },
  {
    "time": [
      1339.58,
      1344.2
    ],
    "en": [
      "This time, let’s focus on some of these statistics at the bottom."
    ],
    "ru": [
      "На этот раз давайте сосредоточимся на некоторых статистических данных внизу."
    ]
  },
  {
    "time": [
      1344.2,
      1347.37
    ],
    "en": [
      "There are lots of different kinds of counters shown here and you don’t have to know all"
    ],
    "ru": [
      "Здесь показано множество различных счетчиков, и вам не обязательно знать все"
    ]
  },
  {
    "time": [
      1347.37,
      1351.68
    ],
    "en": [
      "of them at this point, so let’s just focus on some."
    ],
    "ru": [
      "из них на данный момент, так что давайте сосредоточимся на некоторых."
    ]
  },
  {
    "time": [
      1351.68,
      1357.3
    ],
    "en": [
      "First up, not errors, but you can see the total number of packets received on the interface,"
    ],
    "ru": [
      "Во-первых, не ошибки, но вы можете увидеть общее количество пакетов, полученных на интерфейсе,"
    ]
  },
  {
    "time": [
      1357.3,
      1360.77
    ],
    "en": [
      "and the total number of bytes in those packets."
    ],
    "ru": [
      "и общее количество байтов в этих пакетах."
    ]
  },
  {
    "time": [
      1360.77,
      1362.48
    ],
    "en": [
      "Next up is runts."
    ],
    "ru": [
      "Далее идут коротышки."
    ]
  },
  {
    "time": [
      1362.48,
      1368.16
    ],
    "en": [
      "These are frames that are smaller than the minimum Ethernet frame size of 64 bytes."
    ],
    "ru": [
      "Это кадры, размер которых меньше минимального размера кадра Ethernet, равного 64 байтам."
    ]
  },
  {
    "time": [
      1368.16,
      1373.33
    ],
    "en": [
      "Beside the runts counter is the giants counter, which counts received frames which are larger"
    ],
    "ru": [
      "Рядом со счетчиком коротышей находится счетчик гигантов, который считает полученные кадры большего размера."
    ]
  },
  {
    "time": [
      1373.33,
      1379.26
    ],
    "en": [
      "than the ethernet maximum frame size of 1518 bytes."
    ],
    "ru": [
      "чем максимальный размер кадра Ethernet 1518 байт."
    ]
  },
  {
    "time": [
      1379.26,
      1384.7
    ],
    "en": [
      "Next up, CRC, which counts frames which failed their CRC check."
    ],
    "ru": [
      "Далее следует CRC, который подсчитывает кадры, не прошедшие проверку CRC."
    ]
  },
  {
    "time": [
      1384.7,
      1392.02
    ],
    "en": [
      "If you remember, the CRC is the cyclic redundancy check done via the FCS, or frame check sequence,"
    ],
    "ru": [
      "Если вы помните, CRC - это проверка циклическим избыточным кодом, выполняемая через FCS, или последовательность проверки кадра,"
    ]
  },
  {
    "time": [
      1392.02,
      1394.32
    ],
    "en": [
      "in the trailer of an ethernet frame."
    ],
    "ru": [
      "в трейлере Ethernet-кадра."
    ]
  },
  {
    "time": [
      1394.32,
      1401.26
    ],
    "en": [
      "It’s used to detect errors, and if an error is detected this counter goes up."
    ],
    "ru": [
      "Он используется для обнаружения ошибок, и если обнаруживается ошибка, этот счетчик увеличивается."
    ]
  },
  {
    "time": [
      1401.26,
      1407.26
    ],
    "en": [
      "Next is frame, which counts frames that have an incorrect or illegal format."
    ],
    "ru": [
      "Далее идет кадр, в котором подсчитываются кадры неправильного или недопустимого формата."
    ]
  },
  {
    "time": [
      1407.26,
      1412.18
    ],
    "en": [
      "Input errors is a total of various counters, including the four I just mentioned."
    ],
    "ru": [
      "Ошибки ввода - это всего несколько счетчиков, в том числе четыре, которые я только что упомянул."
    ]
  },
  {
    "time": [
      1412.18,
      1419.6
    ],
    "en": [
      "Finally, output errors counts frames the switch tried to send, but failed due to an error."
    ],
    "ru": [
      "Наконец, количество ошибок вывода подсчитывает количество кадров, которые коммутатор пытался отправить, но не удалось из-за ошибки."
    ]
  },
  {
    "time": [
      1419.6,
      1426.63
    ],
    "en": [
      "Keep in mind, I’m showing you all of these counters on a switch, but they are the same on a router."
    ],
    "ru": [
      "Имейте в виду, я показываю вам все эти счетчики на коммутаторе, но на маршрутизаторе они одинаковы."
    ]
  },
  {
    "time": [
      1426.63,
      1430.69
    ],
    "en": [
      "Before moving on to today’s quiz, let’s review what we covered."
    ],
    "ru": [
      "Прежде чем перейти к сегодняшней викторине, давайте рассмотрим, что мы рассмотрели."
    ]
  },
  {
    "time": [
      1430.69,
      1433.2
    ],
    "en": [
      "We talked about interface speed and duplex."
    ],
    "ru": [
      "Мы говорили о скорости интерфейса и дуплексе."
    ]
  },
  {
    "time": [
      1433.2,
      1437.57
    ],
    "en": [
      "I explained the concepts of full and half duplex."
    ],
    "ru": [
      "Я объяснил концепции полного и полудуплексного режима."
    ]
  },
  {
    "time": [
      1437.57,
      1442.38
    ],
    "en": [
      "Full duplex is preferred, and in most modern networks all devices will be able to operate"
    ],
    "ru": [
      "Предпочтителен полный дуплекс, и в большинстве современных сетей все устройства смогут работать."
    ]
  },
  {
    "time": [
      1442.38,
      1449.43
    ],
    "en": [
      "in full duplex, so they can send data freely without waiting for other devices to stop sending."
    ],
    "ru": [
      "в полнодуплексном режиме, поэтому они могут свободно отправлять данные, не дожидаясь, пока другие устройства прекратят отправку."
    ]
  },
  {
    "time": [
      1449.43,
      1454.76
    ],
    "en": [
      "We talked about speed and duplex autonegotiation, which allows devices to find the appropriate"
    ],
    "ru": [
      "Мы говорили о скорости и дуплексном автосогласовании, которое позволяет устройствам находить подходящие"
    ]
  },
  {
    "time": [
      1454.76,
      1458.89
    ],
    "en": [
      "speed and duplex settings without manual configuration."
    ],
    "ru": [
      "настройки скорости и дуплекса без ручной настройки."
    ]
  },
  {
    "time": [
      1458.89,
      1463.99
    ],
    "en": [
      "We looked a bit at interfaces status using the ‘show interface status’ command, such"
    ],
    "ru": [
      "Мы немного посмотрели на статус интерфейсов, используя команду «show interface status», например"
    ]
  },
  {
    "time": [
      1463.99,
      1468.2
    ],
    "en": [
      "as the statuses connected, notconnect, and disabled."
    ],
    "ru": [
      "как статусы connected, notconnect и disabled."
    ]
  },
  {
    "time": [
      1468.2,
      1471.43
    ],
    "en": [
      "We’ll look more at this throughout the course."
    ],
    "ru": [
      "Мы рассмотрим это подробнее на протяжении всего курса."
    ]
  },
  {
    "time": [
      1471.43,
      1477.03
    ],
    "en": [
      "Finally, we looked at some interface counters and errors such as runts, which are frames"
    ],
    "ru": [
      "Наконец, мы рассмотрели некоторые интерфейсные счетчики и ошибки, такие как ранты, которые являются фреймами."
    ]
  },
  {
    "time": [
      1477.03,
      1484.37
    ],
    "en": [
      "that don’t meet the minimum size requirements, and giants, which exceed the maximum frame size requirements."
    ],
    "ru": [
      "которые не соответствуют требованиям к минимальному размеру, и гиганты, которые превышают требования к максимальному размеру кадра."
    ]
  },
  {
    "time": [
      1484.37,
      1487.77
    ],
    "en": [
      "Okay, let’s get started on the quiz."
    ],
    "ru": [
      "Хорошо, приступим к викторине."
    ]
  },
  {
    "time": [
      1487.77,
      1491.92
    ],
    "en": [
      "Remember, there will also be flashcards which you can download from the link in the description"
    ],
    "ru": [
      "Помните, что также будут карточки, которые вы можете скачать по ссылке в описании."
    ]
  },
  {
    "time": [
      1491.92,
      1494.51
    ],
    "en": [
      "to help you remember what you learned in this video."
    ],
    "ru": [
      "чтобы помочь вам вспомнить, что вы узнали из этого видео."
    ]
  },
  {
    "time": [
      1494.51,
      1498.14
    ],
    "en": [
      "Let’s go to question 1."
    ],
    "ru": [
      "Перейдем к вопросу 1."
    ]
  },
  {
    "time": [
      1498.14,
      1508.55
    ],
    "en": [
      "There is a duplex mismatch between SW1’s F0/1 interface and SW2’s F0/1 interface, which are connected. Autonegotiation is disabled."
    ],
    "ru": [
      "Существует несоответствие дуплексного режима между интерфейсом F0 / 1 SW1 и интерфейсом F0 / 1 SW2, которые подключены. Автосогласование отключено."
    ]
  },
  {
    "time": [
      1508.55,
      1513.2
    ],
    "en": [
      "What will be the result? A, improved performance."
    ],
    "ru": [
      "Что будет в результате? A, улучшенная производительность."
    ]
  },
  {
    "time": [
      1513.2,
      1515.72
    ],
    "en": [
      "B, collisions will occur."
    ],
    "ru": [
      "B, столкновения произойдут."
    ]
  },
  {
    "time": [
      1515.72,
      1521.63
    ],
    "en": [
      "Or C, SW1 will sense SW2’s duplex setting and adjust to match."
    ],
    "ru": [
      "Или C, SW1 определит настройку дуплекса SW2 и настроится в соответствии с ней."
    ]
  },
  {
    "time": [
      1521.63,
      1527.12
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
      1527.12,
      1530.37
    ],
    "en": [
      "The answer is B, collisions will occur."
    ],
    "ru": [
      "Ответ - B, столкновения будут."
    ]
  },
  {
    "time": [
      1530.37,
      1534.69
    ],
    "en": [
      "The half duplex side is unable to send and receive data at the same time."
    ],
    "ru": [
      "Сторона полудуплекса не может отправлять и получать данные одновременно."
    ]
  },
  {
    "time": [
      1534.69,
      1539.49
    ],
    "en": [
      "However, the full duplex side is unaware of this, and will send data even if the half"
    ],
    "ru": [
      "Однако сторона полнодуплексного режима не знает об этом и будет отправлять данные, даже если половина"
    ]
  },
  {
    "time": [
      1539.49,
      1543.09
    ],
    "en": [
      "duplex side isn’t ready to receive it, causing collisions."
    ],
    "ru": [
      "Сторона дуплекса не готова принять его, что вызывает коллизии."
    ]
  },
  {
    "time": [
      1543.09,
      1545.87
    ],
    "en": [
      "So, B is correct."
    ],
    "ru": [
      "Итак, B правильно."
    ]
  },
  {
    "time": [
      1545.87,
      1550.77
    ],
    "en": [
      "It definitely won’t result in improved performance, in fact performance will probably be much"
    ],
    "ru": [
      "Это определенно не приведет к повышению производительности, на самом деле производительность, вероятно, будет намного выше."
    ]
  },
  {
    "time": [
      1550.77,
      1552.67
    ],
    "en": [
      "worse, so A is incorrect."
    ],
    "ru": [
      "хуже, поэтому A неверен."
    ]
  },
  {
    "time": [
      1552.67,
      1558.481
    ],
    "en": [
      "SW1 won’t be able to sense SW2’s duplex setting without autonegotiation enabled, so"
    ],
    "ru": [
      "SW1 не сможет определить настройку дуплекса SW2 без включения автосогласования, поэтому"
    ]
  },
  {
    "time": [
      1558.481,
      1560.36
    ],
    "en": [
      "C is incorrect too."
    ],
    "ru": [
      "C тоже неверен."
    ]
  },
  {
    "time": [
      1560.36,
      1563.8
    ],
    "en": [
      "Let’s go to question 2."
    ],
    "ru": [
      "Перейдем к вопросу 2."
    ]
  },
  {
    "time": [
      1563.8,
      1568.83
    ],
    "en": [
      "What is used on half-duplex interfaces to detect and avoid collisions?"
    ],
    "ru": [
      "Что используется в полудуплексных интерфейсах для обнаружения и предотвращения коллизий?"
    ]
  },
  {
    "time": [
      1568.83,
      1575.07
    ],
    "en": [
      "A, CSMA/CD, B, CSMA/CA."
    ],
    "ru": [
      "А, CSMA / CD, B, CSMA / CA."
    ]
  },
  {
    "time": [
      1575.07,
      1581.15
    ],
    "en": [
      "C, Autonegotiation, or D, Duplex Auto."
    ],
    "ru": [
      "C, автосогласование, или D, автоматический дуплекс."
    ]
  },
  {
    "time": [
      1581.15,
      1587.54
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
      1587.54,
      1590.71
    ],
    "en": [
      "The answer is a, CSMA/CD."
    ],
    "ru": [
      "Ответ - CSMA / CD."
    ]
  },
  {
    "time": [
      1590.71,
      1597.61
    ],
    "en": [
      "CSMA CD stands for carrier sense multiple access with collision detection."
    ],
    "ru": [
      "CSMA CD означает множественный доступ с контролем несущей и обнаружением коллизий."
    ]
  },
  {
    "time": [
      1597.61,
      1603.13
    ],
    "en": [
      "It describes how devices using half-duplex listen for activity on a network segment,"
    ],
    "ru": [
      "Он описывает, как устройства, использующие полудуплекс, отслеживают активность в сегменте сети,"
    ]
  },
  {
    "time": [
      1603.13,
      1607.37
    ],
    "en": [
      "and then send data only when other devices aren't sending."
    ],
    "ru": [
      "а затем отправлять данные только тогда, когда другие устройства не отправляют."
    ]
  },
  {
    "time": [
      1607.37,
      1611.6
    ],
    "en": [
      "It also describes how a device will react when a collision does occur."
    ],
    "ru": [
      "Он также описывает, как устройство отреагирует на столкновение."
    ]
  },
  {
    "time": [
      1611.6,
      1614.4
    ],
    "en": [
      "So A, CSMA/CD is correct."
    ],
    "ru": [
      "Итак, A, CSMA / CD правильный."
    ]
  },
  {
    "time": [
      1614.4,
      1621.809
    ],
    "en": [
      "B, CSMA/CA, is a similar concept that we’ll cover later in the course that stands for"
    ],
    "ru": [
      "B, CSMA / CA, представляет собой аналогичную концепцию, которую мы рассмотрим позже в курсе, обозначающем"
    ]
  },
  {
    "time": [
      1621.809,
      1625.36
    ],
    "en": [
      "carrier sense multiple access with collision avoidance."
    ],
    "ru": [
      "Множественный доступ с контролем оператора связи с предотвращением столкновений."
    ]
  },
  {
    "time": [
      1625.36,
      1634.559
    ],
    "en": [
      "C, autonegotiation, and D, duplex auto, are unrelated to how a half-duplex interface detects and avoids collisions."
    ],
    "ru": [
      "C (автосогласование) и D (дуплексный автоматический режим) не связаны с тем, как полудуплексный интерфейс обнаруживает и избегает коллизий."
    ]
  },
  {
    "time": [
      1634.559,
      1638.7
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
      1638.7,
      1645.67
    ],
    "en": [
      "Which command shows various counters of errors detected on an interface? A, show interfaces."
    ],
    "ru": [
      "Какая команда показывает различные счетчики ошибок, обнаруженных на интерфейсе? А, покажи интерфейсы."
    ]
  },
  {
    "time": [
      1645.67,
      1649.44
    ],
    "en": [
      "B, show ip interface brief."
    ],
    "ru": [
      "B, покажите краткое описание интерфейса IP."
    ]
  },
  {
    "time": [
      1649.44,
      1652.99
    ],
    "en": [
      "C, show interfaces status."
    ],
    "ru": [
      "C, показать статус интерфейсов."
    ]
  },
  {
    "time": [
      1652.99,
      1656.05
    ],
    "en": [
      "Or D, show interfaces errors."
    ],
    "ru": [
      "Или D, показать ошибки интерфейсов."
    ]
  },
  {
    "time": [
      1656.05,
      1662.15
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
      1662.15,
      1664.64
    ],
    "en": [
      "The answer is A, show interfaces."
    ],
    "ru": [
      "Ответ - A, покажите интерфейсы."
    ]
  },
  {
    "time": [
      1664.64,
      1668.87
    ],
    "en": [
      "Let’s check the output of each command."
    ],
    "ru": [
      "Давайте проверим вывод каждой команды."
    ]
  },
  {
    "time": [
      1668.87,
      1675.43
    ],
    "en": [
      "As you can see, show ip interface brief doesn’t display any counters of errors detected on the interface."
    ],
    "ru": [
      "Как видите, команда show ip interfacerief не отображает счетчиков ошибок, обнаруженных в интерфейсе."
    ]
  },
  {
    "time": [
      1675.43,
      1682.8
    ],
    "en": [
      "It’s a useful command for checking the IP addresses of interfaces, checking if they’re shutdown, etc."
    ],
    "ru": [
      "Это полезная команда для проверки IP-адресов интерфейсов, проверки их отключения и т. Д."
    ]
  },
  {
    "time": [
      1682.8,
      1686.99
    ],
    "en": [
      "Show interfaces status also doesn’t show any error counters."
    ],
    "ru": [
      "Показывать статус интерфейсов также не показывает счетчиков ошибок."
    ]
  },
  {
    "time": [
      1686.99,
      1694.17
    ],
    "en": [
      "It gives some basic information about interfaces such as description, status, duplex and speed."
    ],
    "ru": [
      "Он дает некоторую базовую информацию об интерфейсах, такую ​​как описание, статус, дуплекс и скорость."
    ]
  },
  {
    "time": [
      1694.17,
      1701.17
    ],
    "en": [
      "show interfaces errors isn’t a real command, so an error message appears when I try to enter it."
    ],
    "ru": [
      "Команда show interfaces errors не настоящая, поэтому при попытке ее ввода появляется сообщение об ошибке."
    ]
  },
  {
    "time": [
      1701.17,
      1705.74
    ],
    "en": [
      "Show interfaces displays counters of errors detected on the interface."
    ],
    "ru": [
      "Показать интерфейсы отображает счетчики ошибок, обнаруженных на интерфейсе."
    ]
  },
  {
    "time": [
      1705.74,
      1709.92
    ],
    "en": [
      "In this case I used ‘show interface f0/1."
    ],
    "ru": [
      "В этом случае я использовал «показать интерфейс f0 / 1."
    ]
  },
  {
    "time": [
      1709.92,
      1715.19
    ],
    "en": [
      "Because so much information is given for each interface, you probably won’t use this command"
    ],
    "ru": [
      "Поскольку для каждого интерфейса дается так много информации, вы, вероятно, не будете использовать эту команду"
    ]
  },
  {
    "time": [
      1715.19,
      1721.23
    ],
    "en": [
      "to view all interfaces at once, but rather specify an individual interface to check."
    ],
    "ru": [
      "чтобы просмотреть все интерфейсы сразу, а лучше указать отдельный интерфейс для проверки."
    ]
  },
  {
    "time": [
      1721.23,
      1724.19
    ],
    "en": [
      "The counters are at the bottom of the output."
    ],
    "ru": [
      "Счетчики находятся внизу вывода."
    ]
  },
  {
    "time": [
      1724.19,
      1727.25
    ],
    "en": [
      "So A, show interfaces, is correct."
    ],
    "ru": [
      "Итак, A, покажите интерфейсы, это правильно."
    ]
  },
  {
    "time": [
      1727.25,
      1731.45
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
      1731.45,
      1735.52
    ],
    "en": [
      "Which are examples of errors that might occur on a network interface?"
    ],
    "ru": [
      "Какие примеры ошибок могут возникнуть в сетевом интерфейсе?"
    ]
  },
  {
    "time": [
      1735.52,
      1739.56
    ],
    "en": [
      "A, runts, giants, broadcasts."
    ],
    "ru": [
      "А, коротышки, гиганты, трансляции."
    ]
  },
  {
    "time": [
      1739.56,
      1743.59
    ],
    "en": [
      "B, shorts, longs, oversizes."
    ],
    "ru": [
      "B, шорты, лонг, оверсайз."
    ]
  },
  {
    "time": [
      1743.59,
      1748.63
    ],
    "en": [
      "C, packets, bytes, inputs, outputs."
    ],
    "ru": [
      "C, пакеты, байты, входы, выходы."
    ]
  },
  {
    "time": [
      1748.63,
      1752.67
    ],
    "en": [
      "D, runts, giants, CRC."
    ],
    "ru": [
      "D, коротышки, гиганты, CRC."
    ]
  },
  {
    "time": [
      1752.67,
      1759.08
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
      1759.08,
      1763.73
    ],
    "en": [
      "The answer is D, runts, giants, CRC."
    ],
    "ru": [
      "Ответ - D, коротышки, гиганты, CRC."
    ]
  },
  {
    "time": [
      1763.73,
      1769.39
    ],
    "en": [
      "The names in B and C are not real errors that can occur on an interface."
    ],
    "ru": [
      "Имена в B и C не являются настоящими ошибками, которые могут возникнуть в интерфейсе."
    ]
  },
  {
    "time": [
      1769.39,
      1775.54
    ],
    "en": [
      "In option A, runts and giants are possible errors, but broadcasts are not errors, they"
    ],
    "ru": [
      "В варианте A ранты и гиганты являются возможными ошибками, но трансляции не являются ошибками, они"
    ]
  },
  {
    "time": [
      1775.54,
      1778.679
    ],
    "en": [
      "are part of normal network operations."
    ],
    "ru": [
      "являются частью обычных сетевых операций."
    ]
  },
  {
    "time": [
      1778.679,
      1783.83
    ],
    "en": [
      "So D, runts, giants, CRC, is the correct answer."
    ],
    "ru": [
      "Итак, D, коротышки, гиганты, CRC - правильный ответ."
    ]
  },
  {
    "time": [
      1783.83,
      1792.08
    ],
    "en": [
      "Remember, Runts are frames that are too small, Giants are frames that are too big, and CRC"
    ],
    "ru": [
      "Помните, что Runts - это слишком маленькие фреймы, Giants - слишком большие фреймы и CRC"
    ]
  },
  {
    "time": [
      1792.08,
      1797.62
    ],
    "en": [
      "counts the frames that failed their CRC check, which is done in the frame check sequence"
    ],
    "ru": [
      "подсчитывает кадры, которые не прошли проверку CRC, которая выполняется в последовательности проверки кадров"
    ]
  },
  {
    "time": [
      1797.62,
      1799.74
    ],
    "en": [
      "in the trailer of the ethernet frame."
    ],
    "ru": [
      "в трейлере Ethernet-кадра."
    ]
  },
  {
    "time": [
      1799.74,
      1803.07
    ],
    "en": [
      "Let’s go to question 5."
    ],
    "ru": [
      "Перейдем к вопросу 5."
    ]
  },
  {
    "time": [
      1803.07,
      1809.8
    ],
    "en": [
      "SW1 is trying to autonegotiate interface speed settings with SW2."
    ],
    "ru": [
      "SW1 пытается автоматически согласовать настройки скорости интерфейса с SW2."
    ]
  },
  {
    "time": [
      1809.8,
      1813.1
    ],
    "en": [
      "However, autonegotiation is disabled on SW2’s interface."
    ],
    "ru": [
      "Однако автосогласование отключено на интерфейсе SW2."
    ]
  },
  {
    "time": [
      1813.1,
      1821.01
    ],
    "en": [
      "SW2’s interface is configured with a speed of 100 Mbps and full duplex."
    ],
    "ru": [
      "Интерфейс SW2 настроен на скорость 100 Мбит / с и полнодуплексный режим."
    ]
  },
  {
    "time": [
      1821.01,
      1824.8
    ],
    "en": [
      "What speed and duplex settings will SW1 use?"
    ],
    "ru": [
      "Какие настройки скорости и дуплекса будет использовать SW1?"
    ]
  },
  {
    "time": [
      1824.8,
      1830.09
    ],
    "en": [
      "A, speed 100 megabits per second, duplex full."
    ],
    "ru": [
      "A, скорость 100 мегабит в секунду, дуплекс полный."
    ]
  },
  {
    "time": [
      1830.09,
      1835.15
    ],
    "en": [
      "B, speed 100 megabits per second, duplex half."
    ],
    "ru": [
      "B, скорость 100 мегабит в секунду, дуплекс половина."
    ]
  },
  {
    "time": [
      1835.15,
      1840.1
    ],
    "en": [
      "C, speed 10 megabits per second, duplex full."
    ],
    "ru": [
      "C, скорость 10 мегабит в секунду, дуплекс полный."
    ]
  },
  {
    "time": [
      1840.1,
      1844.88
    ],
    "en": [
      "Or D, Speed 10 megabits per second, duplex half."
    ],
    "ru": [
      "Или D, скорость 10 мегабит в секунду, дуплекс половина."
    ]
  },
  {
    "time": [
      1844.88,
      1850.74
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
      1850.74,
      1856.05
    ],
    "en": [
      "The answer is B, speed 100 megabits per second, duplex half."
    ],
    "ru": [
      "Ответ - B, скорость 100 мегабит в секунду, дуплекс половина."
    ]
  },
  {
    "time": [
      1856.05,
      1861.61
    ],
    "en": [
      "If the remote device has autonegotiation disabled, but it's enabled on the local device, the local"
    ],
    "ru": [
      "Если на удаленном устройстве отключено автосогласование, но оно включено на локальном устройстве, локальное"
    ]
  },
  {
    "time": [
      1861.61,
      1867.34
    ],
    "en": [
      "device will attempt to sense the speed the remote device is using, so SW1 will be able"
    ],
    "ru": [
      "устройство попытается определить скорость, которую использует удаленное устройство, поэтому SW1 сможет"
    ]
  },
  {
    "time": [
      1867.34,
      1872.8
    ],
    "en": [
      "to correctly set its interface speed to 100 megabits per second to match SW2’s."
    ],
    "ru": [
      "чтобы правильно установить скорость его интерфейса на 100 мегабит в секунду, чтобы соответствовать SW2."
    ]
  },
  {
    "time": [
      1872.8,
      1879.461
    ],
    "en": [
      "However, it can't sense the duplex mode of SW2’s interface, so the rule is if the speed"
    ],
    "ru": [
      "Однако он не может определить дуплексный режим интерфейса SW2, поэтому правило таково, если скорость"
    ]
  },
  {
    "time": [
      1879.461,
      1887.38
    ],
    "en": [
      "is 10 or 100 megabits per second, half duplex will be used, otherwise full duplex will be used."
    ],
    "ru": [
      "составляет 10 или 100 мегабит в секунду, будет использоваться полудуплекс, в противном случае будет использоваться полный дуплекс."
    ]
  },
  {
    "time": [
      1887.38,
      1892.679
    ],
    "en": [
      "In this case, half duplex will be used, which will result in a duplex mismatch between the"
    ],
    "ru": [
      "В этом случае будет использоваться полудуплекс, что приведет к несоответствию дуплекса между"
    ]
  },
  {
    "time": [
      1892.679,
      1898.7
    ],
    "en": [
      "two devices, and probably poor performance on the link between them due to collisions."
    ],
    "ru": [
      "два устройства и, вероятно, низкая производительность связи между ними из-за коллизий."
    ]
  },
  {
    "time": [
      1898.7,
      1901.94
    ],
    "en": [
      "Okay, that’s all for the quiz."
    ],
    "ru": [
      "Ладно, это все для викторины."
    ]
  },
  {
    "time": [
      1901.94,
      1907.41
    ],
    "en": [
      "Remember to make use of the supplemental materials for this video, I’ve made a set of flash"
    ],
    "ru": [
      "Не забудьте использовать дополнительные материалы для этого видео, я сделал набор флеш"
    ]
  },
  {
    "time": [
      1907.41,
      1914.77
    ],
    "en": [
      "cards to be used with the flashcard software Anki to help you remember what you learned in the video."
    ],
    "ru": [
      "карты для использования с программным обеспечением для карточек Anki, чтобы помочь вам запомнить то, что вы узнали из видео."
    ]
  },
  {
    "time": [
      1914.77,
      1920.56
    ],
    "en": [
      "Also, there will also be a packet tracer practice lab to give you hands-on practice configuring Cisco devices."
    ],
    "ru": [
      "Кроме того, будет создана практическая лаборатория по отслеживанию пакетов, где вы сможете на практике настроить устройства Cisco."
    ]
  },
  {
    "time": [
      1920.56,
      1921.99
    ],
    "en": [
      "That will be the next video."
    ],
    "ru": [
      "Это будет следующее видео."
    ]
  },
  {
    "time": [
      1921.99,
      1926.45
    ],
    "en": [
      "Good luck with your studies."
    ],
    "ru": [
      "Удачи в учебе."
    ]
  },
  {
    "time": [
      1926.45,
      1928.01
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
      1928.01,
      1931.93
    ],
    "en": [
      "Please subscribe to the channel, like the video, leave a comment, and share the video"
    ],
    "ru": [
      "Пожалуйста, подпишитесь на канал, поставьте лайк видео, оставьте комментарий и поделитесь видео"
    ]
  },
  {
    "time": [
      1931.93,
      1935.26
    ],
    "en": [
      "with anyone else studying for the CCNA."
    ],
    "ru": [
      "со всеми, кто учится на CCNA."
    ]
  },
  {
    "time": [
      1935.26,
      1937.88
    ],
    "en": [
      "If you want to leave a tip, check the links in the description."
    ],
    "ru": [
      "Если вы хотите оставить отзыв, проверьте ссылки в описании."
    ]
  },
  {
    "time": [
      1937.88,
      1945.37
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
      1945.37,
      1945.37
    ],
    "en": [
      "That's all for now."
    ],
    "ru": [
      "На этом пока все."
    ]
  }
]