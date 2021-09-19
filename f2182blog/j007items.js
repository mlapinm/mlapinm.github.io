var objs = [
  {
    "time": [
      1.13,
      3.69
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
      3.69,
      8.82
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
      8.82,
      12.81
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
      12.81,
      19.14
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
      19.14,
      22.63
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
      22.63,
      28.169
    ],
    "en": [
      "In this lab we will examine some network traffic using packet tracer’s ‘simulation mode’ feature."
    ],
    "ru": [
      "В этой лабораторной работе мы исследуем некоторый сетевой трафик с помощью функции «режима моделирования» пакетного трассировщика."
    ]
  },
  {
    "time": [
      28.169,
      32.619
    ],
    "en": [
      "But first, let’s take a look at the network diagram."
    ],
    "ru": [
      "Но сначала давайте взглянем на схему сети."
    ]
  },
  {
    "time": [
      32.619,
      41.39
    ],
    "en": [
      "There are two routers, R1 and R2, two switches, SW1 and SW2, and one server and one pc."
    ],
    "ru": [
      "Есть два маршрутизатора, R1 и R2, два коммутатора, SW1 и SW2, а также один сервер и один компьютер."
    ]
  },
  {
    "time": [
      41.39,
      53.42
    ],
    "en": [
      "The G0/0, G0/1, G0/2 and F0/1 labels indicate the network interfaces used to connect the devices."
    ],
    "ru": [
      "Метки G0 / 0, G0 / 1, G0 / 2 и F0 / 1 указывают сетевые интерфейсы, используемые для подключения устройств."
    ]
  },
  {
    "time": [
      53.42,
      60.89
    ],
    "en": [
      "G means gigabit ethernet, so these interfaces operate at a speed of one gigabit per second."
    ],
    "ru": [
      "G означает гигабитный Ethernet, поэтому эти интерфейсы работают со скоростью один гигабит в секунду."
    ]
  },
  {
    "time": [
      60.89,
      69.84
    ],
    "en": [
      "You migth also see it written as Gi, or Gig, but I usually just use G. F means fastethernet,"
    ],
    "ru": [
      "Вы также видите, что это написано как Gi или Gig, но я обычно использую просто G. F означает fastethernet,"
    ]
  },
  {
    "time": [
      69.84,
      74.1
    ],
    "en": [
      "so these interfaces operate at 100 megabits per second."
    ],
    "ru": [
      "поэтому эти интерфейсы работают со скоростью 100 мегабит в секунду."
    ]
  },
  {
    "time": [
      74.1,
      80.6
    ],
    "en": [
      "You might also see it written as Fa, instead of just F. Now these two series of numbers"
    ],
    "ru": [
      "Вы также можете увидеть, что это написано как Fa, а не просто F. Теперь эти две серии чисел"
    ]
  },
  {
    "time": [
      80.6,
      92.14
    ],
    "en": [
      "here, 192.168.1.0/24, and 10.0.0.0/24, are the network addresses."
    ],
    "ru": [
      "здесь 192.168.1.0/24 и 10.0.0.0/24 - это сетевые адреса."
    ]
  },
  {
    "time": [
      92.14,
      95.28
    ],
    "en": [
      "Routers are used to connect different networks."
    ],
    "ru": [
      "Маршрутизаторы используются для подключения разных сетей."
    ]
  },
  {
    "time": [
      95.28,
      99.7
    ],
    "en": [
      "There are two networks displayed here in this diagram, the one on the left here includes"
    ],
    "ru": [
      "На этой диаграмме показаны две сети, одна из которых здесь слева включает"
    ]
  },
  {
    "time": [
      99.7,
      107.819
    ],
    "en": [
      "SRV1, PC1, SW1, SW2, and R1’s G0/0 interface."
    ],
    "ru": [
      "Интерфейс G0 / 0 SRV1, PC1, SW1, SW2 и R1."
    ]
  },
  {
    "time": [
      107.819,
      112.88
    ],
    "en": [
      "They are all in a single network, or subnet, a term you will learn about soon."
    ],
    "ru": [
      "Все они находятся в одной сети или подсети - термин, о котором вы скоро узнаете."
    ]
  },
  {
    "time": [
      112.88,
      124.469
    ],
    "en": [
      "So, that’s the 192.168.1.0/24 network, and the .100 for SRV1 means that its IP address"
    ],
    "ru": [
      "Итак, это сеть 192.168.1.0/24, и .100 для SRV1 означает, что ее IP-адрес"
    ]
  },
  {
    "time": [
      124.469,
      134.83
    ],
    "en": [
      "is 192.168.1.100, and the .1 by R1 means that its address is 192.168.1.1."
    ],
    "ru": [
      "- 192.168.1.100, а .1 на R1 означает, что его адрес - 192.168.1.1."
    ]
  },
  {
    "time": [
      134.83,
      140.5
    ],
    "en": [
      "Wait for the lesson about IP addresses coming up soon for more information on this topic."
    ],
    "ru": [
      "Подождите, пока скоро выйдет урок об IP-адресах, чтобы получить дополнительную информацию по этой теме."
    ]
  },
  {
    "time": [
      140.5,
      148.94
    ],
    "en": [
      "The other network is 10.0.0.0/24, consisting of R1’s G0/1 interface, and R2’s G0/0 interface."
    ],
    "ru": [
      "Другая сеть - 10.0.0.0/24, состоящая из интерфейса G0 / 1 маршрутизатора R1 и интерфейса G0 / 0 маршрутизатора R2."
    ]
  },
  {
    "time": [
      148.94,
      160.47
    ],
    "en": [
      "Notice the .1 and .2, so R1 is 10.0.0.1 and R2 is 10.0.0.2."
    ],
    "ru": [
      "Обратите внимание на .1 и .2, поэтому R1 - это 10.0.0.1, а R2 - это 10.0.0.2."
    ]
  },
  {
    "time": [
      160.47,
      164.81
    ],
    "en": [
      "Hopefully that helps you understand a little bit about how to read a network diagram."
    ],
    "ru": [
      "Надеюсь, это поможет вам немного понять, как читать сетевую диаграмму."
    ]
  },
  {
    "time": [
      164.81,
      170.96
    ],
    "en": [
      "Don’t worry if you have no idea how IP addresses work, or what that /24 next to the network"
    ],
    "ru": [
      "Не волнуйтесь, если вы не знаете, как работают IP-адреса или что это за / 24 рядом с сетью."
    ]
  },
  {
    "time": [
      170.96,
      174.85
    ],
    "en": [
      "addresses means, that will all be explained in a video coming soon."
    ],
    "ru": [
      "адреса означает, что все это будет объяснено в видео, которое выйдет в ближайшее время."
    ]
  },
  {
    "time": [
      174.85,
      178.03
    ],
    "en": [
      "So let’s get started on today’s main topic."
    ],
    "ru": [
      "Итак, приступим к основной теме сегодняшнего дня."
    ]
  },
  {
    "time": [
      178.03,
      184.5
    ],
    "en": [
      "I’m going to use packet tracer’s simulation mode, which you can activate here, in the bottom right."
    ],
    "ru": [
      "Я собираюсь использовать режим имитации пакетного трассировщика, который вы можете активировать здесь, в правом нижнем углу."
    ]
  },
  {
    "time": [
      184.5,
      190.76
    ],
    "en": [
      "Now, I can click through here, and you can see various network traffic being sent around."
    ],
    "ru": [
      "Теперь я могу щелкнуть здесь, и вы можете увидеть разный сетевой трафик, отправляемый по всему миру."
    ]
  },
  {
    "time": [
      190.76,
      194.48
    ],
    "en": [
      "Let’s take a look at some."
    ],
    "ru": [
      "Давайте взглянем на некоторые."
    ]
  },
  {
    "time": [
      194.48,
      200.3
    ],
    "en": [
      "At Device SW2 means that SW2 is the one sending out the data."
    ],
    "ru": [
      "На устройстве SW2 означает, что именно SW2 отправляет данные."
    ]
  },
  {
    "time": [
      200.3,
      202.82
    ],
    "en": [
      "It says type, STP."
    ],
    "ru": [
      "Там написано типа, STP."
    ]
  },
  {
    "time": [
      202.82,
      209.2
    ],
    "en": [
      "STP is the spanning-tree protocol, a layer 2 protocol you’ll learn a lot about in this"
    ],
    "ru": [
      "STP - это протокол связующего дерева, протокол уровня 2, о котором вы многое узнаете в этом"
    ]
  },
  {
    "time": [
      209.2,
      212.26
    ],
    "en": [
      "course. Let's click on it, and"
    ],
    "ru": [
      "курс. Щелкаем по нему и"
    ]
  },
  {
    "time": [
      212.26,
      219.34
    ],
    "en": [
      "notice here the 7 layers of the OSI model, and STP has information in the bottom two layers."
    ],
    "ru": [
      "обратите внимание на 7 уровней модели OSI, и STP содержит информацию на двух нижних уровнях."
    ]
  },
  {
    "time": [
      219.34,
      223.25
    ],
    "en": [
      "Let’s look at the Layer 2 header."
    ],
    "ru": [
      "Давайте посмотрим на заголовок уровня 2."
    ]
  },
  {
    "time": [
      223.25,
      228.96
    ],
    "en": [
      "Notice it says Layer 2: IEEE 802.3 header."
    ],
    "ru": [
      "Обратите внимание, что он говорит «Уровень 2: заголовок IEEE 802.3»."
    ]
  },
  {
    "time": [
      228.96,
      235.02
    ],
    "en": [
      "You might remember that IEEE 802.3 is the standard number for Ethernet, so this is an"
    ],
    "ru": [
      "Возможно, вы помните, что IEEE 802.3 - это стандартный номер для Ethernet, поэтому это"
    ]
  },
  {
    "time": [
      235.02,
      237.15
    ],
    "en": [
      "Ethernet Layer 2 header."
    ],
    "ru": [
      "Заголовок Ethernet уровня 2."
    ]
  },
  {
    "time": [
      237.15,
      240.79
    ],
    "en": [
      "Let’s look at some of the information here."
    ],
    "ru": [
      "Давайте посмотрим здесь на некоторую информацию."
    ]
  },
  {
    "time": [
      240.79,
      244.93
    ],
    "en": [
      "Down here it shows some information about the process, and notice here at number"
    ],
    "ru": [
      "Здесь внизу отображается некоторая информация о процессе, и обратите внимание на номер"
    ]
  },
  {
    "time": [
      244.93,
      250.15
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
      244.93,
      250.15
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
      250.15,
      254.37
    ],
    "en": [
      "There’s the encapsulation process I talked about in the lecture video."
    ],
    "ru": [
      "Это процесс инкапсуляции, о котором я говорил в видео лекции."
    ]
  },
  {
    "time": [
      254.37,
      258.44
    ],
    "en": [
      "Let’s take a look at the Layer 1 info."
    ],
    "ru": [
      "Давайте посмотрим на информацию уровня 1."
    ]
  },
  {
    "time": [
      258.44,
      264.19
    ],
    "en": [
      "Notice that the information is the two interfaces that it sends the frame out of."
    ],
    "ru": [
      "Обратите внимание, что информация - это два интерфейса, из которых он отправляет фрейм."
    ]
  },
  {
    "time": [
      264.19,
      269.42
    ],
    "en": [
      "Information like the physical ports, or interfaces, on a device are Layer 1 information, because"
    ],
    "ru": [
      "Такая информация, как физические порты или интерфейсы на устройстве, является информацией уровня 1, потому что"
    ]
  },
  {
    "time": [
      269.42,
      271.59
    ],
    "en": [
      "it is the physical layer."
    ],
    "ru": [
      "это физический уровень."
    ]
  },
  {
    "time": [
      271.59,
      281.87
    ],
    "en": [
      "Now let’s look at another bit of network traffic, this time AT device R1, and the type is OSPF."
    ],
    "ru": [
      "Теперь давайте посмотрим на другой бит сетевого трафика, на этот раз на устройстве R1, и его тип - OSPF."
    ]
  },
  {
    "time": [
      281.87,
      289.88
    ],
    "en": [
      "OSPF is a layer 3 protocol, it’s used to discover the best paths to different networks."
    ],
    "ru": [
      "OSPF - это протокол уровня 3, он используется для обнаружения лучших путей к разным сетям."
    ]
  },
  {
    "time": [
      289.88,
      293.41
    ],
    "en": [
      "You’ll learn a lot about it, too, in this course."
    ],
    "ru": [
      "В этом курсе вы тоже многое узнаете об этом."
    ]
  },
  {
    "time": [
      293.41,
      303.47
    ],
    "en": [
      "STP only had Layer 2 and Layer 1 information, but OSPF has Layer 3, Layer 2, and Layer 1 information."
    ],
    "ru": [
      "STP имеет информацию только уровня 2 и уровня 1, но OSPF имеет информацию уровня 3, уровня 2 и уровня 1."
    ]
  },
  {
    "time": [
      303.47,
      309.62
    ],
    "en": [
      "Notice in the Layer 3 header, source IP address, and destination IP address."
    ],
    "ru": [
      "Обратите внимание на заголовок уровня 3, исходный IP-адрес и IP-адрес назначения."
    ]
  },
  {
    "time": [
      309.62,
      314.24
    ],
    "en": [
      "Remember, IP addresses are Layer 3 information."
    ],
    "ru": [
      "Помните, что IP-адреса - это информация уровня 3."
    ]
  },
  {
    "time": [
      314.24,
      321.66
    ],
    "en": [
      "Next, to look at some traffic that includes information all the way up to Layer 7, I will go on PC1."
    ],
    "ru": [
      "Затем, чтобы посмотреть на некоторый трафик, который включает информацию вплоть до уровня 7, я перейду к ПК1."
    ]
  },
  {
    "time": [
      321.66,
      330.04
    ],
    "en": [
      "Pc1 is using a protocol called DHCP to automatically receive an IP address."
    ],
    "ru": [
      "Pc1 использует протокол DHCP для автоматического получения IP-адреса."
    ]
  },
  {
    "time": [
      330.04,
      337.24
    ],
    "en": [
      "To generate some DHCP traffic, and DHCP is a layer 7 protocol, I’ll get PC1 to release"
    ],
    "ru": [
      "Чтобы сгенерировать трафик DHCP, а DHCP - это протокол уровня 7, я прошу ПК1 выпустить"
    ]
  },
  {
    "time": [
      337.24,
      341.5
    ],
    "en": [
      "its current IP address, and then renew it."
    ],
    "ru": [
      "свой текущий IP-адрес, а затем обновите его."
    ]
  },
  {
    "time": [
      341.5,
      346.19
    ],
    "en": [
      "When you click on a PC in packet tracer you’ll see this screen."
    ],
    "ru": [
      "Когда вы щелкнете по компьютеру в программе трассировки пакетов, вы увидите этот экран."
    ]
  },
  {
    "time": [
      346.19,
      351.23
    ],
    "en": [
      "Click on desktop, then command prompt, to access the PC’s command prompt, which functions"
    ],
    "ru": [
      "Нажмите на рабочем столе, затем в командной строке, чтобы получить доступ к командной строке ПК, которая функционирует"
    ]
  },
  {
    "time": [
      351.23,
      354.05
    ],
    "en": [
      "like a windows command prompt."
    ],
    "ru": [
      "как командная строка Windows."
    ]
  },
  {
    "time": [
      354.05,
      365.85
    ],
    "en": [
      "Type ipconfig, and you can see the current IP address here…...to release the IP address, type ipconfig /release."
    ],
    "ru": [
      "Введите ipconfig, и вы увидите здесь текущий IP-адрес ... ... чтобы освободить IP-адрес, введите ipconfig / release."
    ]
  },
  {
    "time": [
      365.85,
      369.68
    ],
    "en": [
      "And now you can see already a DHCP message on PC1."
    ],
    "ru": [
      "И теперь вы уже можете видеть сообщение DHCP на ПК1."
    ]
  },
  {
    "time": [
      369.68,
      377.77
    ],
    "en": [
      "I’ll type the next command to, to renew the IP address. It’s ipconfig /renew."
    ],
    "ru": [
      "Я наберу следующую команду, чтобы обновить IP-адрес. Это ipconfig / Renew."
    ]
  },
  {
    "time": [
      377.77,
      382.06
    ],
    "en": [
      "Now let’s check one of these DHCP messages."
    ],
    "ru": [
      "Теперь давайте проверим одно из этих DHCP-сообщений."
    ]
  },
  {
    "time": [
      382.06,
      387.169
    ],
    "en": [
      "Notice information all the way up to Layer 7, except layers 5 and 6."
    ],
    "ru": [
      "Обратите внимание на информацию вплоть до уровня 7, кроме слоев 5 и 6."
    ]
  },
  {
    "time": [
      387.169,
      394.52
    ],
    "en": [
      "That's because in the TCP/IP model, which is the model actually in use, Layers 5, 6,"
    ],
    "ru": [
      "Это потому, что в модели TCP / IP, которая фактически используется, уровни 5, 6,"
    ]
  },
  {
    "time": [
      394.52,
      398.76
    ],
    "en": [
      "and 7 are all combined into a single layer called the application layer, so you’re"
    ],
    "ru": [
      "и 7 объединены в один слой, называемый прикладным, так что вы"
    ]
  },
  {
    "time": [
      398.76,
      407.28
    ],
    "en": [
      "not going to see any layer 5 or 6 information, but you can consider it to be part of the layer 7 information."
    ],
    "ru": [
      "не будет видеть никакой информации уровня 5 или 6, но вы можете считать ее частью информации уровня 7."
    ]
  },
  {
    "time": [
      407.28,
      414.919
    ],
    "en": [
      "Then there is layer 4 information, if you click on it, it says the device encapsulates the PDU into a UDP"
    ],
    "ru": [
      "Затем есть информация уровня 4, если вы нажмете на нее, она говорит, что устройство инкапсулирует PDU в UDP"
    ]
  },
  {
    "time": [
      414.919,
      419.25
    ],
    "en": [
      "segment, remember the Layer 4 PDU is called a segment."
    ],
    "ru": [
      "сегмент, помните, что PDU уровня 4 называется сегментом."
    ]
  },
  {
    "time": [
      419.25,
      423.6
    ],
    "en": [
      "Layer 3, Layer 2, and Layer 1 information is present as well."
    ],
    "ru": [
      "Также присутствует информация уровня 3, уровня 2 и уровня 1."
    ]
  },
  {
    "time": [
      423.6,
      428.99
    ],
    "en": [
      "Now, if I just press the play button in the middle, it will slowly play through all of"
    ],
    "ru": [
      "Теперь, если я просто нажму кнопку воспроизведения посередине, он будет медленно воспроизводить все"
    ]
  },
  {
    "time": [
      428.99,
      432.65
    ],
    "en": [
      "the different messages being sent through the network."
    ],
    "ru": [
      "различные сообщения, отправляемые по сети."
    ]
  },
  {
    "time": [
      432.65,
      442.229
    ],
    "en": [
      "That’s all for this lab, I just wanted to show you the OSI and TCP/IP models at work on a network."
    ],
    "ru": [
      "Это все для этой лабораторной работы, я просто хотел показать вам модели OSI и TCP / IP в работе в сети."
    ]
  },
  {
    "time": [
      442.229,
      447.669
    ],
    "en": [
      "Your understanding of the functions of these layers might still be a little unclear, but trust me,"
    ],
    "ru": [
      "Ваше понимание функций этих слоев все еще может быть немного неясным, но поверьте мне,"
    ]
  },
  {
    "time": [
      447.669,
      451.36
    ],
    "en": [
      "you’ll understand things better as we start to actually learn about these different protocols"
    ],
    "ru": [
      "вы поймете вещи лучше, когда мы начнем фактически узнавать об этих различных протоколах"
    ]
  },
  {
    "time": [
      451.36,
      456.79
    ],
    "en": [
      "that operate at each layer."
    ],
    "ru": [
      "которые работают на каждом слое."
    ]
  },
  {
    "time": [
      456.79,
      457.979
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
      457.979,
      459.74
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
      459.74,
      465.32
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
      465.32,
      468.78
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
      468.78,
      475.02
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
      475.02,
      482.82
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
      482.82,
      482.82
    ],
    "en": [
      "Click the link in the description to check out ...(video cuts off early)"
    ],
    "ru": [
      "Щелкните ссылку в описании, чтобы проверить ... (видео прерывается раньше)"
    ]
  }
]