let items = [
  {
    "time": [
      1.02,
      3.49
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
      3.49,
      6.82
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
      6.82,
      10.86
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
      10.86,
      16.87
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
      16.87,
      17.96
    ],
    "en": [
      "of videos. Thanks for your help."
    ],
    "ru": [
      "видео. Спасибо за вашу помощь."
    ]
  },
  {
    "time": [
      17.96,
      22.32
    ],
    "en": [
      "Also, remember to download this practice lab from the link in the description and try it"
    ],
    "ru": [
      "Кроме того, не забудьте загрузить эту практическую лабораторию по ссылке в описании и попробовать ее."
    ]
  },
  {
    "time": [
      22.32,
      25.37
    ],
    "en": [
      "out yourself in packet tracer."
    ],
    "ru": [
      "вытащите себя в пакетный трассировщик."
    ]
  },
  {
    "time": [
      25.37,
      31.42
    ],
    "en": [
      "In this lab we will practice subnetting using VLSM, variable-length subnet masks."
    ],
    "ru": [
      "В этой лабораторной работе мы попрактикуемся в разделении на подсети с использованием VLSM, масок подсети переменной длины."
    ]
  },
  {
    "time": [
      31.42,
      35.94
    ],
    "en": [
      "This will be very similar to the end of day 15’s lecture video, you will subnet a class"
    ],
    "ru": [
      "Это будет очень похоже на видео лекции в конце 15-го дня, вы объедините класс в подсеть"
    ]
  },
  {
    "time": [
      35.94,
      39.29
    ],
    "en": [
      "C network into 5 subnets of different sizes."
    ],
    "ru": [
      "Cеть сеть на 5 подсетей разного размера."
    ]
  },
  {
    "time": [
      39.29,
      44.0
    ],
    "en": [
      "So, I highly recommend that you try to complete this lab first, before watching this video"
    ],
    "ru": [
      "Поэтому я настоятельно рекомендую вам сначала выполнить эту лабораторную работу, прежде чем смотреть это видео."
    ]
  },
  {
    "time": [
      44.0,
      46.77
    ],
    "en": [
      "to check your answers."
    ],
    "ru": [
      "чтобы проверить свои ответы."
    ]
  },
  {
    "time": [
      46.77,
      53.59
    ],
    "en": [
      "We are required to subnet the 192.168.5.0/24 network to provide sufficient addressing for"
    ],
    "ru": [
      "Нам необходимо подсеть сеть 192.168.5.0/24, чтобы обеспечить достаточную адресацию для"
    ]
  },
  {
    "time": [
      53.59,
      59.14
    ],
    "en": [
      "each LAN, as well as the point-to-point connection between R1 and R2."
    ],
    "ru": [
      "каждая LAN, а также соединение точка-точка между R1 и R2."
    ]
  },
  {
    "time": [
      59.14,
      64.32
    ],
    "en": [
      "We will follow the same process that I introduced in Day 15’s lecture video."
    ],
    "ru": [
      "Мы будем следовать тому же процессу, который я представил в видео лекции для Дня 15."
    ]
  },
  {
    "time": [
      64.32,
      69.02
    ],
    "en": [
      "Assign the largest subnet at the start of the address space, and then the second largest,"
    ],
    "ru": [
      "Назначьте самую большую подсеть в начале адресного пространства, а затем вторую по величине,"
    ]
  },
  {
    "time": [
      69.02,
      71.71000000000001
    ],
    "en": [
      "etc, until you have assigned each subnet."
    ],
    "ru": [
      "и т.д., пока вы не назначите каждую подсеть."
    ]
  },
  {
    "time": [
      71.71000000000001,
      81.549
    ],
    "en": [
      "So, that means we will assign subnets in this order: LAN2, LAN1, LAN3, LAN4, and finally the point-to-point link."
    ],
    "ru": [
      "Итак, это означает, что мы назначим подсети в следующем порядке: LAN2, LAN1, LAN3, LAN4 и, наконец, двухточечный канал."
    ]
  },
  {
    "time": [
      81.549,
      86.499
    ],
    "en": [
      "the point-to-point link. The instructions also say to assign the first usable address to the PC in each LAN, and"
    ],
    "ru": [
      "связь точка-точка. В инструкциях также говорится о назначении первого используемого адреса ПК в каждой локальной сети и"
    ]
  },
  {
    "time": [
      86.499,
      89.029
    ],
    "en": [
      "the last usable address to the router."
    ],
    "ru": [
      "последний используемый адрес маршрутизатора."
    ]
  },
  {
    "time": [
      89.029,
      93.469
    ],
    "en": [
      "Finally, we should configure static routes so that hosts in each LAN can reach hosts"
    ],
    "ru": [
      "Наконец, мы должны настроить статические маршруты, чтобы хосты в каждой локальной сети могли достигать хостов."
    ]
  },
  {
    "time": [
      93.469,
      95.869
    ],
    "en": [
      "in the other LANs."
    ],
    "ru": [
      "в других локальных сетях."
    ]
  },
  {
    "time": [
      95.869,
      97.509
    ],
    "en": [
      "So let’s get started with LAN2."
    ],
    "ru": [
      "Итак, приступим к LAN2."
    ]
  },
  {
    "time": [
      97.509,
      102.189
    ],
    "en": [
      "I hope you’ve already solved this lab and are just watching this video to check, since"
    ],
    "ru": [
      "Надеюсь, вы уже выполнили эту лабораторную работу и просто смотрите это видео, чтобы проверить, поскольку"
    ]
  },
  {
    "time": [
      102.189,
      106.85900000000001
    ],
    "en": [
      "I won’t go step-by-step through each calculation like in the lecture video."
    ],
    "ru": [
      "Я не буду выполнять пошаговые инструкции по каждому расчету, как в видео-лекции."
    ]
  },
  {
    "time": [
      106.85900000000001,
      110.649
    ],
    "en": [
      "Let me tab out to this document where I’ve calculated all of the answers."
    ],
    "ru": [
      "Позвольте мне перейти к этому документу, где я рассчитал все ответы."
    ]
  },
  {
    "time": [
      110.649,
      115.459
    ],
    "en": [
      "So, for LAN2 we must use a /25 prefix length."
    ],
    "ru": [
      "Итак, для LAN2 мы должны использовать длину префикса / 25."
    ]
  },
  {
    "time": [
      115.459,
      122.179
    ],
    "en": [
      "LAN2 only requires 64 hosts, and as I’ve written below a /25 prefix length allows for"
    ],
    "ru": [
      "LAN2 требует только 64 хоста, и, как я уже писал ниже, длина префикса / 25 позволяет"
    ]
  },
  {
    "time": [
      122.179,
      129.75
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
      122.179,
      129.75
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
      129.75,
      133.33
    ],
    "en": [
      "because we have to subtract 2 for the network and broadcast addresses."
    ],
    "ru": [
      "потому что мы должны вычесть 2 для сетевых и широковещательных адресов."
    ]
  },
  {
    "time": [
      133.33,
      143.73
    ],
    "en": [
      "So, LAN2’s network address is 192.168.5.0, and its broadcast address is 192.168.5.127,"
    ],
    "ru": [
      "Итак, сетевой адрес LAN2 - 192.168.5.0, а его широковещательный адрес - 192.168.5.127,"
    ]
  },
  {
    "time": [
      143.73,
      149.68
    ],
    "en": [
      "both /25. Let’s assign the addresses to PC2 and R1."
    ],
    "ru": [
      "оба / 25. Назначим адреса ПК2 и R1."
    ]
  },
  {
    "time": [
      149.68,
      156.59
    ],
    "en": [
      "Let me go on R1 first. First, enter privileged exec mode with ENABLE."
    ],
    "ru": [
      "Позвольте мне сначала перейти на R1. Сначала войдите в привилегированный режим exec с помощью ENABLE."
    ]
  },
  {
    "time": [
      156.59,
      160.69
    ],
    "en": [
      "Then, enter global config mode with CONFIGURE TERMINAL."
    ],
    "ru": [
      "Затем войдите в режим глобальной конфигурации, нажав КОНФИГУРАЦИОННЫЙ ТЕРМИНАЛ."
    ]
  },
  {
    "time": [
      160.69,
      168.94
    ],
    "en": [
      "R1’s Gigabitethernet0/1 interface is in LAN2, so INTERFACE G0/1 to configure it."
    ],
    "ru": [
      "Интерфейс Gigabitethernet0 / 1 маршрутизатора R1 находится в LAN2, поэтому ИНТЕРФЕЙС G0 / 1 для его настройки."
    ]
  },
  {
    "time": [
      168.94,
      176.4
    ],
    "en": [
      "The broadcast address is 192.168.5.127, so let’s configure R1’s IP address as one"
    ],
    "ru": [
      "Широковещательный адрес - 192.168.5.127, поэтому давайте настроим IP-адрес маршрутизатора R1 как единый."
    ]
  },
  {
    "time": [
      176.4,
      179.02
    ],
    "en": [
      "below it, the last usable address."
    ],
    "ru": [
      "под ним - последний доступный адрес."
    ]
  },
  {
    "time": [
      179.02,
      191.16
    ],
    "en": [
      "IP ADDRESS 192.168.5.126, and for a /25 prefix length the subnet mask will be 255.255.255.128."
    ],
    "ru": [
      "IP-АДРЕС 192.168.5.126, а для длины префикса / 25 маска подсети будет 255.255.255.128."
    ]
  },
  {
    "time": [
      191.16,
      194.82
    ],
    "en": [
      "Also, let’s enable the interface with NO SHUTDOWN."
    ],
    "ru": [
      "Также давайте включим интерфейс без ВЫКЛЮЧЕНИЯ."
    ]
  },
  {
    "time": [
      194.82,
      198.07
    ],
    "en": [
      "Let’s confirm our configuration."
    ],
    "ru": [
      "Подтвердим нашу конфигурацию."
    ]
  },
  {
    "time": [
      198.07,
      202.89
    ],
    "en": [
      "DO SHOW IP INTERFACE G0/1."
    ],
    "ru": [
      "ПОКАЗАТЬ IP-ИНТЕРФЕЙС G0 / 1."
    ]
  },
  {
    "time": [
      202.89,
      209.47
    ],
    "en": [
      "The ‘SHOW IP INTERFACE’ command shows various information about the interface, primarily layer 3 information."
    ],
    "ru": [
      "Команда «SHOW IP INTERFACE» показывает различную информацию об интерфейсе, в первую очередь информацию уровня 3."
    ]
  },
  {
    "time": [
      209.47,
      213.54
    ],
    "en": [
      "layer 3 information. You can see here that the IP address has been configured correctly."
    ],
    "ru": [
      "информация уровня 3. Здесь вы можете увидеть, что IP-адрес настроен правильно."
    ]
  },
  {
    "time": [
      213.54,
      219.31900000000002
    ],
    "en": [
      "You may notice the broadcast address of 255.255.255.255."
    ],
    "ru": [
      "Вы можете заметить широковещательный адрес 255.255.255.255."
    ]
  },
  {
    "time": [
      219.31900000000002,
      226.71
    ],
    "en": [
      "This address basically functions the same as the subnet broadcast address of 192.168.5.127,"
    ],
    "ru": [
      "Этот адрес в основном функционирует так же, как широковещательный адрес подсети 192.168.5.127,"
    ]
  },
  {
    "time": [
      226.71,
      229.03
    ],
    "en": [
      "and it can be used for any network."
    ],
    "ru": [
      "и его можно использовать в любой сети."
    ]
  },
  {
    "time": [
      229.03,
      233.86
    ],
    "en": [
      "When we configure other IP addresses and use this SHOW IP INTERFACE command, those other"
    ],
    "ru": [
      "Когда мы настраиваем другие IP-адреса и используем эту команду SHOW IP INTERFACE, остальные"
    ]
  },
  {
    "time": [
      233.86,
      238.17000000000002
    ],
    "en": [
      "interfaces will display the same broadcast address too."
    ],
    "ru": [
      "интерфейсы также будут отображать тот же широковещательный адрес."
    ]
  },
  {
    "time": [
      238.17000000000002,
      245.29
    ],
    "en": [
      "Keep in mind, if a host sends a broadcast to 255.255.255.255, it won't be sent to ALL"
    ],
    "ru": [
      "Имейте в виду, что если хост отправляет широковещательную рассылку на 255.255.255.255, она не будет отправлена ​​на ВСЕ"
    ]
  },
  {
    "time": [
      245.29,
      251.38
    ],
    "en": [
      "networks, it will still stay in the local subnet, and a router will NOT route it to other networks."
    ],
    "ru": [
      "сети, он все равно останется в локальной подсети, и маршрутизатор НЕ будет направлять его в другие сети."
    ]
  },
  {
    "time": [
      251.38,
      258.88
    ],
    "en": [
      "other networks. The subnet broadcast address however, 192.168.5.127 in this case, can be used by hosts in other"
    ],
    "ru": [
      "другие сети. Однако широковещательный адрес подсети, в данном случае 192.168.5.127, может использоваться хостами в других"
    ]
  },
  {
    "time": [
      258.88,
      262.8
    ],
    "en": [
      "subnets to send a broadcast to this subnet."
    ],
    "ru": [
      "подсети для отправки широковещательной рассылки в эту подсеть."
    ]
  },
  {
    "time": [
      262.8,
      267.6
    ],
    "en": [
      "Anyway I think I’ll explain that in a lecture video in the future, so don’t worry about it."
    ],
    "ru": [
      "В любом случае, я думаю, что объясню это в видео лекции в будущем, так что не беспокойтесь об этом."
    ]
  },
  {
    "time": [
      267.6,
      270.5
    ],
    "en": [
      "I just wanted to explain it since you can see it here."
    ],
    "ru": [
      "Я просто хотел объяснить это, так как вы можете увидеть это здесь."
    ]
  },
  {
    "time": [
      270.5,
      278.129
    ],
    "en": [
      "Okay, now let’s configure PC2. Click on config, then first set the default gateway"
    ],
    "ru": [
      "Хорошо, теперь давайте настроим ПК2. Нажмите на config, затем сначала установите шлюз по умолчанию"
    ]
  },
  {
    "time": [
      278.129,
      290.11
    ],
    "en": [
      "to R1, 192.168.5.126. Then, click on fastethernet0, and set the IP address and subnet mask."
    ],
    "ru": [
      "к R1, 192.168.5.126. Затем щелкните fastethernet0 и установите IP-адрес и маску подсети."
    ]
  },
  {
    "time": [
      290.11,
      299.40999999999997
    ],
    "en": [
      "The first usable address is 192.168.5.1. After you enter it you can press tab, and notice it tries to fill in"
    ],
    "ru": [
      "Первый используемый адрес - 192.168.5.1. После того, как вы введете его, вы можете нажать вкладку и заметить, что он пытается заполнить"
    ]
  },
  {
    "time": [
      299.40999999999997,
      305.259
    ],
    "en": [
      "the subnet mask for me, however since this isn’t a classful network, it’s a subnet,"
    ],
    "ru": [
      "маска подсети для меня, однако, поскольку это не классовая сеть, это подсеть,"
    ]
  },
  {
    "time": [
      305.259,
      311.72
    ],
    "en": [
      "let me change the last octet to 128. Okay, that’s all for this subnet."
    ],
    "ru": [
      "позвольте мне изменить последний октет на 128. Хорошо, это все для этой подсети."
    ]
  },
  {
    "time": [
      311.72,
      314.789
    ],
    "en": [
      "The second largest subnet is LAN1."
    ],
    "ru": [
      "Вторая по величине подсеть - LAN1."
    ]
  },
  {
    "time": [
      314.789,
      317.85
    ],
    "en": [
      "Let me go back to my document and let’s look at LAN1."
    ],
    "ru": [
      "Вернемся к моему документу и посмотрим на LAN1."
    ]
  },
  {
    "time": [
      317.85,
      322.69
    ],
    "en": [
      "So, for LAN1 we will use a /26 subnet mask."
    ],
    "ru": [
      "Итак, для LAN1 мы будем использовать маску подсети / 26."
    ]
  },
  {
    "time": [
      322.69,
      329.559
    ],
    "en": [
      "LAN1 requires 45 hosts, and a /26 subnet mask allows 62."
    ],
    "ru": [
      "LAN1 требует 45 хостов, а маска подсети / 26 позволяет 62."
    ]
  },
  {
    "time": [
      329.559,
      339.65999999999997
    ],
    "en": [
      "The network address is the next address after LAN2’s broadcast address, so it's 192.168.5.128/26."
    ],
    "ru": [
      "Сетевой адрес - это следующий адрес после широковещательного адреса LAN2, поэтому это 192.168.5.128/26."
    ]
  },
  {
    "time": [
      339.65999999999997,
      346.34000000000003
    ],
    "en": [
      "The broadcast address, with all host bits set to 1, is 192.168.5.191."
    ],
    "ru": [
      "Широковещательный адрес со всеми битами хоста, установленными в 1, равен 192.168.5.191."
    ]
  },
  {
    "time": [
      346.34000000000003,
      349.259
    ],
    "en": [
      "Let’s configure the router and the PC."
    ],
    "ru": [
      "Настроим роутер и компьютер."
    ]
  },
  {
    "time": [
      349.259,
      360.409
    ],
    "en": [
      "I’ll go back to R1 first. Let’s configure the G0/0 interface with the last usable address. INTERFACE G0/0."
    ],
    "ru": [
      "Сначала я вернусь к R1. Давайте настроим интерфейс G0 / 0 с последним используемым адресом. ИНТЕРФЕЙС G0 / 0."
    ]
  },
  {
    "time": [
      360.409,
      373.659
    ],
    "en": [
      "INTERFACE G0/0. IP ADDRESSS 192.168.5.190 255.255.255.192, which is the subnet mask for a /26 prefix length."
    ],
    "ru": [
      "ИНТЕРФЕЙС G0 / 0. IP-АДРЕСЫ 192.168.5.190 255.255.255.192, которая является маской подсети для длины префикса / 26."
    ]
  },
  {
    "time": [
      373.659,
      378.86
    ],
    "en": [
      "Enable the interface with NO SHUTDOWN, and let’s check."
    ],
    "ru": [
      "Включите интерфейс с NO SHUTDOWN, и давайте проверим."
    ]
  },
  {
    "time": [
      378.86,
      382.83
    ],
    "en": [
      "DO SHOW IP INTERFACE G0/0."
    ],
    "ru": [
      "ПОКАЗАТЬ IP-ИНТЕРФЕЙС G0 / 0."
    ]
  },
  {
    "time": [
      382.83,
      390.729
    ],
    "en": [
      "The IP address is correct, and you can see the same broadcast address 255.255.255.255."
    ],
    "ru": [
      "IP-адрес правильный, и вы видите тот же широковещательный адрес 255.255.255.255."
    ]
  },
  {
    "time": [
      390.729,
      394.669
    ],
    "en": [
      "Next let’s configure PC1."
    ],
    "ru": [
      "Теперь давайте настроим ПК1."
    ]
  },
  {
    "time": [
      394.669,
      401.699
    ],
    "en": [
      "Click on config, set the gateway to 192.168.5.190."
    ],
    "ru": [
      "Нажмите на config, установите шлюз на 192.168.5.190."
    ]
  },
  {
    "time": [
      401.699,
      410.11
    ],
    "en": [
      "Then click on fastethernet0, set the ip address to 192.168.5.129, hit tab, and then change the"
    ],
    "ru": [
      "Затем щелкните fastethernet0, установите IP-адрес 192.168.5.129, нажмите вкладку и затем измените"
    ]
  },
  {
    "time": [
      410.11,
      414.43
    ],
    "en": [
      "last octet to 192, for the /26 prefix length."
    ],
    "ru": [
      "последний октет равен 192 для длины префикса / 26."
    ]
  },
  {
    "time": [
      414.43,
      418.069
    ],
    "en": [
      "That’s all for LAN1."
    ],
    "ru": [
      "Это все для LAN1."
    ]
  },
  {
    "time": [
      418.069,
      419.68
    ],
    "en": [
      "Next up is LAN3."
    ],
    "ru": [
      "Далее идет LAN3."
    ]
  },
  {
    "time": [
      419.68,
      421.729
    ],
    "en": [
      "Let’s go back to that document."
    ],
    "ru": [
      "Вернемся к этому документу."
    ]
  },
  {
    "time": [
      421.729,
      429.43
    ],
    "en": [
      "So, for LAN3 we will use a /28 prefix length, which allows for 14 hosts, exactly the number"
    ],
    "ru": [
      "Итак, для LAN3 мы будем использовать длину префикса / 28, что позволяет использовать 14 хостов, ровно столько, сколько нужно."
    ]
  },
  {
    "time": [
      429.43,
      432.029
    ],
    "en": [
      "we need for LAN3."
    ],
    "ru": [
      "нам нужен для LAN3."
    ]
  },
  {
    "time": [
      432.029,
      437.12
    ],
    "en": [
      "Keep in mind, in real networking you want to leave some extra room for future growth,"
    ],
    "ru": [
      "Имейте в виду, что в реальных сетях вы хотите оставить дополнительное пространство для будущего роста,"
    ]
  },
  {
    "time": [
      437.12,
      441.58
    ],
    "en": [
      "but when taking a test do EXACTLY as the instructions say."
    ],
    "ru": [
      "но при сдаче теста делайте ТОЧНО, как сказано в инструкции."
    ]
  },
  {
    "time": [
      441.58,
      451.28
    ],
    "en": [
      "The network address is the next address after LAN1’s broadcast address, so it’s 192.168.5.192/28."
    ],
    "ru": [
      "Сетевой адрес - это следующий адрес после широковещательного адреса LAN1, поэтому это 192.168.5.192/28."
    ]
  },
  {
    "time": [
      451.28,
      455.9
    ],
    "en": [
      "The broadcast address is 192.168.5.207."
    ],
    "ru": [
      "Широковещательный адрес 192.168.5.207."
    ]
  },
  {
    "time": [
      455.9,
      463.089
    ],
    "en": [
      "Let’s go configure R2. Enable. Enable. Conf t."
    ],
    "ru": [
      "Пойдем настраивать R2. Давать возможность. Давать возможность. Конф т."
    ]
  },
  {
    "time": [
      463.089,
      465.069
    ],
    "en": [
      "Enable. Conf t. Interface g0/0."
    ],
    "ru": [
      "Давать возможность. Конф т. Интерфейс g0 / 0."
    ]
  },
  {
    "time": [
      465.069,
      468.729
    ],
    "en": [
      "Let’s configure the last usable address here."
    ],
    "ru": [
      "Давайте настроим здесь последний используемый адрес."
    ]
  },
  {
    "time": [
      468.729,
      481.869
    ],
    "en": [
      "IP ADDRESS 192.168.5.206 255.255.255.240, which is the subnet mask for a /28 network."
    ],
    "ru": [
      "IP-АДРЕС 192.168.5.206 255.255.255.240, который является маской подсети для сети / 28."
    ]
  },
  {
    "time": [
      481.869,
      486.469
    ],
    "en": [
      "Enable the interface with NO SHUTDOWN, and let’s confirm."
    ],
    "ru": [
      "Включите интерфейс с NO SHUTDOWN, и давайте подтвердим."
    ]
  },
  {
    "time": [
      486.469,
      491.21
    ],
    "en": [
      "DO SHOW IP INTERFACE g0/0."
    ],
    "ru": [
      "ПОКАЗАТЬ IP-ИНТЕРФЕЙС g0 / 0."
    ]
  },
  {
    "time": [
      491.21,
      493.469
    ],
    "en": [
      "So, the IP address is correct."
    ],
    "ru": [
      "Итак, IP-адрес правильный."
    ]
  },
  {
    "time": [
      493.469,
      499.699
    ],
    "en": [
      "Next let’s configure PC3. Click on config."
    ],
    "ru": [
      "Теперь давайте настроим PC3. Щелкните config."
    ]
  },
  {
    "time": [
      499.699,
      504.259
    ],
    "en": [
      "Click on config. Set the gateway address to 192.168.5.206."
    ],
    "ru": [
      "Щелкните config. Установите адрес шлюза 192.168.5.206."
    ]
  },
  {
    "time": [
      504.259,
      511.749
    ],
    "en": [
      "Click on fastethernet0, IP address of 192.168.5.193."
    ],
    "ru": [
      "Щелкните fastethernet0, IP-адрес 192.168.5.193."
    ]
  },
  {
    "time": [
      511.749,
      515.33
    ],
    "en": [
      "Hit tab, and then change the last octet here to 240."
    ],
    "ru": [
      "Нажмите вкладку, а затем измените последний октет на 240."
    ]
  },
  {
    "time": [
      515.33,
      520.58
    ],
    "en": [
      "Okay, that’s all for LAN3. Next is LAN4."
    ],
    "ru": [
      "Ладно, это все для LAN3. Далее идет LAN4."
    ]
  },
  {
    "time": [
      520.58,
      528.76
    ],
    "en": [
      "Next is LAN4. Let’s go back to that document. So, for LAN4 we will actually use a /28 also."
    ],
    "ru": [
      "Далее идет LAN4. Вернемся к этому документу. Итак, для LAN4 мы также будем использовать / 28."
    ]
  },
  {
    "time": [
      528.76,
      536.76
    ],
    "en": [
      "LAN4 requires only 9 hosts, so a /29 prefix length, which allows only 6 hosts, would be too small."
    ],
    "ru": [
      "LAN4 требует только 9 хостов, поэтому длина префикса / 29, которая допускает только 6 хостов, была бы слишком маленькой."
    ]
  },
  {
    "time": [
      536.76,
      546.73
    ],
    "en": [
      "too small. The network address is 192.168.5.208, and broadcast address is 192.168.5.223."
    ],
    "ru": [
      "слишком маленький. Сетевой адрес - 192.168.5.208, широковещательный адрес - 192.168.5.223."
    ]
  },
  {
    "time": [
      546.73,
      554.52
    ],
    "en": [
      "Now let’s go back to R2 and configure it’s G0/1 interface. Interface g0/1."
    ],
    "ru": [
      "Теперь вернемся к R2 и настроим его интерфейс G0 / 1. Интерфейс g0 / 1."
    ]
  },
  {
    "time": [
      554.52,
      564.13
    ],
    "en": [
      "Interface g0/1. Ip address 192.168.5.222 255.255.255.240."
    ],
    "ru": [
      "Интерфейс g0 / 1. IP-адрес 192.168.5.222 255.255.255.240."
    ]
  },
  {
    "time": [
      564.13,
      567.57
    ],
    "en": [
      "Enable the interface with NO SHUTDOWN."
    ],
    "ru": [
      "Включите интерфейс без ВЫКЛЮЧЕНИЯ."
    ]
  },
  {
    "time": [
      567.57,
      572.13
    ],
    "en": [
      "And let’s check, DO SHOW IP INTERFACE G0/1."
    ],
    "ru": [
      "И давайте проверим, ПОКАЗАТЬ IP-ИНТЕРФЕЙС G0 / 1."
    ]
  },
  {
    "time": [
      572.13,
      575.91
    ],
    "en": [
      "Okay, the IP address looks correct."
    ],
    "ru": [
      "Хорошо, IP-адрес выглядит правильным."
    ]
  },
  {
    "time": [
      575.91,
      580.77
    ],
    "en": [
      "Let’s go to PC4. config."
    ],
    "ru": [
      "Поехали на ПК4. config."
    ]
  },
  {
    "time": [
      580.77,
      586.8
    ],
    "en": [
      "Set the gateway to R2’s address, 192.168.5.222."
    ],
    "ru": [
      "Установите шлюз на адрес R2 192.168.5.222."
    ]
  },
  {
    "time": [
      586.8,
      595.9
    ],
    "en": [
      "fastethernet0, set the IP address to the first usable address, 192.168.5.209, hit tab, and"
    ],
    "ru": [
      "fastethernet0, установите IP-адрес на первый используемый адрес, 192.168.5.209, нажмите вкладку и"
    ]
  },
  {
    "time": [
      595.9,
      599.52
    ],
    "en": [
      "change the last octet of the subnet mask to 240."
    ],
    "ru": [
      "измените последний октет маски подсети на 240."
    ]
  },
  {
    "time": [
      599.52,
      602.75
    ],
    "en": [
      "That’s all for LAN4."
    ],
    "ru": [
      "Это все для LAN4."
    ]
  },
  {
    "time": [
      602.75,
      607.66
    ],
    "en": [
      "The last subnet we have to assign is the point-to-point connection between R1 and R2."
    ],
    "ru": [
      "Последняя подсеть, которую мы должны назначить, - это соединение точка-точка между R1 и R2."
    ]
  },
  {
    "time": [
      607.66,
      616.52
    ],
    "en": [
      "Let’s go back to the document. So, we can use a /30 or /31, I’m going to go with /30,"
    ],
    "ru": [
      "Вернемся к документу. Итак, мы можем использовать / 30 или / 31, я собираюсь использовать / 30,"
    ]
  },
  {
    "time": [
      616.52,
      620.28
    ],
    "en": [
      "I just think it’s the safe option to go with on a Cisco test."
    ],
    "ru": [
      "Я просто думаю, что это безопасный вариант для тестирования Cisco."
    ]
  },
  {
    "time": [
      620.28,
      630.52
    ],
    "en": [
      "So, the network address is 192.168.5.224, and broadcast address is 192.168.5.227."
    ],
    "ru": [
      "Итак, сетевой адрес 192.168.5.224, а широковещательный адрес 192.168.5.227."
    ]
  },
  {
    "time": [
      630.52,
      635.82
    ],
    "en": [
      "We’ll use the first usable address for R1, and last usable address for R2."
    ],
    "ru": [
      "Мы будем использовать первый пригодный адрес для R1 и последний используемый адрес для R2."
    ]
  },
  {
    "time": [
      635.82,
      639.72
    ],
    "en": [
      "In fact, those are the only two usable addresses."
    ],
    "ru": [
      "Фактически, это единственные два используемых адреса."
    ]
  },
  {
    "time": [
      639.72,
      646.15
    ],
    "en": [
      "Let’s go on R1. Interface g0/0/0."
    ],
    "ru": [
      "Поехали по R1. Интерфейс g0 / 0/0."
    ]
  },
  {
    "time": [
      646.15,
      656.42
    ],
    "en": [
      "Interface g0/0/0. Ip address 192.168.5.225 255.255.255.252."
    ],
    "ru": [
      "Интерфейс g0 / 0/0. IP-адрес 192.168.5.225 255.255.255.252."
    ]
  },
  {
    "time": [
      656.42,
      660.83
    ],
    "en": [
      "Enable the interface with NO SHUTDOWN. Let’s check it."
    ],
    "ru": [
      "Включите интерфейс без ВЫКЛЮЧЕНИЯ. Давай проверим."
    ]
  },
  {
    "time": [
      660.83,
      665.51
    ],
    "en": [
      "Let’s check it. DO SHOW IP INTERFACE G0/0/0."
    ],
    "ru": [
      "Давай проверим. ПОКАЗАТЬ IP-ИНТЕРФЕЙС G0 / 0/0."
    ]
  },
  {
    "time": [
      665.51,
      666.9
    ],
    "en": [
      "Okay, the address looks good."
    ],
    "ru": [
      "Хорошо, адрес выглядит неплохо."
    ]
  },
  {
    "time": [
      666.9,
      672.86
    ],
    "en": [
      "Now let’s go on R2. interface g0/0/0."
    ],
    "ru": [
      "Теперь перейдем к R2. интерфейс g0 / 0/0."
    ]
  },
  {
    "time": [
      672.86,
      681.9
    ],
    "en": [
      "IP ADDRESS 192.168.5.226 255.255.255.252."
    ],
    "ru": [
      "IP-АДРЕС 192.168.5.226 255.255.255.252."
    ]
  },
  {
    "time": [
      681.9,
      684.1
    ],
    "en": [
      "And enable it with NO SHUTDOWN."
    ],
    "ru": [
      "И включите его БЕЗ ВЫКЛЮЧЕНИЯ."
    ]
  },
  {
    "time": [
      684.1,
      685.97
    ],
    "en": [
      "And finally let's confirm."
    ],
    "ru": [
      "И напоследок подтвердим."
    ]
  },
  {
    "time": [
      685.97,
      689.78
    ],
    "en": [
      "DO SHOW IP INTERFACE G0/0/0."
    ],
    "ru": [
      "ПОКАЗАТЬ IP-ИНТЕРФЕЙС G0 / 0/0."
    ]
  },
  {
    "time": [
      689.78,
      692.97
    ],
    "en": [
      "Okay, no problems here."
    ],
    "ru": [
      "Ладно, здесь нет проблем."
    ]
  },
  {
    "time": [
      692.97,
      698.57
    ],
    "en": [
      "Now, the last step is to configure static routes on each router."
    ],
    "ru": [
      "Теперь последний шаг - настройка статических маршрутов на каждом маршрутизаторе."
    ]
  },
  {
    "time": [
      698.57,
      701.11
    ],
    "en": [
      "Each router has three connected networks."
    ],
    "ru": [
      "Каждый маршрутизатор имеет три подключенные сети."
    ]
  },
  {
    "time": [
      701.11,
      708.95
    ],
    "en": [
      "Those are the point-to-point link, and LAN1 and LAN2 for R1, or LAN3 and LAN4 for R2."
    ],
    "ru": [
      "Это прямая связь, а также LAN1 и LAN2 для R1 или LAN3 и LAN4 для R2."
    ]
  },
  {
    "time": [
      708.95,
      713.32
    ],
    "en": [
      "So, we’ll have to configure two static routes for each router."
    ],
    "ru": [
      "Итак, нам нужно настроить два статических маршрута для каждого маршрутизатора."
    ]
  },
  {
    "time": [
      713.32,
      719.03
    ],
    "en": [
      "First, let’s configure the routes to LAN1 and LAN2 here on R2."
    ],
    "ru": [
      "Во-первых, давайте настроим маршруты к LAN1 и LAN2 здесь, на R2."
    ]
  },
  {
    "time": [
      719.03,
      724.46
    ],
    "en": [
      "Exit, to go back to global config mode. First, LAN1."
    ],
    "ru": [
      "Выйти, чтобы вернуться в режим глобальной конфигурации. Во-первых, LAN1."
    ]
  },
  {
    "time": [
      724.46,
      738.91
    ],
    "en": [
      "First, LAN1. IP ROUTE, then LAN1’s network address, 192.168.5.128 255.255.255.192, then let me use the question mark here."
    ],
    "ru": [
      "Во-первых, LAN1. IP-МАРШРУТ, затем сетевой адрес LAN1, 192.168.5.128 255.255.255.192, затем позвольте мне использовать здесь вопросительный знак."
    ]
  },
  {
    "time": [
      738.91,
      743.54
    ],
    "en": [
      "mark here. Note that you can either specify the exit interface of this router, or the IP address"
    ],
    "ru": [
      "отметьте здесь. Обратите внимание, что вы можете указать выходной интерфейс этого маршрутизатора или IP-адрес."
    ]
  },
  {
    "time": [
      743.54,
      744.78
    ],
    "en": [
      "of the next hop."
    ],
    "ru": [
      "следующего прыжка."
    ]
  },
  {
    "time": [
      744.78,
      751.6
    ],
    "en": [
      "I’ll go with the next hop, 192.168.5.225. Okay, that’s it."
    ],
    "ru": [
      "Я выберу следующий переход, 192.168.5.225. Ладно, вот и все."
    ]
  },
  {
    "time": [
      751.6,
      754.72
    ],
    "en": [
      "Okay, that’s it. Next, to LAN2, same thing."
    ],
    "ru": [
      "Ладно, вот и все. Далее, в LAN2, то же самое."
    ]
  },
  {
    "time": [
      754.72,
      766.94
    ],
    "en": [
      "IP ROUTE 192.168.5.0 255.255.255.128, and then the next hop of 192.168.5.225."
    ],
    "ru": [
      "IP-МАРШРУТ 192.168.5.0 255.255.255.128, а затем следующий переход 192.168.5.225."
    ]
  },
  {
    "time": [
      766.94,
      769.84
    ],
    "en": [
      "Let’s check the route table."
    ],
    "ru": [
      "Давайте проверим таблицу маршрутов."
    ]
  },
  {
    "time": [
      769.84,
      777.18
    ],
    "en": [
      "DO SHOW IP ROUTE. Okay, you can see the connected and local routes here, and then the two static"
    ],
    "ru": [
      "ПОКАЗАТЬ IP-МАРШРУТ. Хорошо, здесь вы можете увидеть подключенный и локальный маршруты, а затем два статических"
    ]
  },
  {
    "time": [
      777.18,
      778.93
    ],
    "en": [
      "routes we just configured."
    ],
    "ru": [
      "маршруты, которые мы только что настроили."
    ]
  },
  {
    "time": [
      778.93,
      784.49
    ],
    "en": [
      "Let’s go on R1 and configure the routes to LAN3 and LAN4."
    ],
    "ru": [
      "Давайте перейдем к R1 и настроим маршруты к LAN3 и LAN4."
    ]
  },
  {
    "time": [
      784.49,
      788.58
    ],
    "en": [
      "First, exit to return to global config mode."
    ],
    "ru": [
      "Сначала выйдите, чтобы вернуться в режим глобальной конфигурации."
    ]
  },
  {
    "time": [
      788.58,
      792.32
    ],
    "en": [
      "So, the route to LAN 3, first."
    ],
    "ru": [
      "Итак, сначала путь к LAN 3."
    ]
  },
  {
    "time": [
      792.32,
      804.02
    ],
    "en": [
      "IP ROUTE 192.168.5.192 255.255.255.240, then the next hop of 192.168.5.226."
    ],
    "ru": [
      "IP-МАРШРУТ 192.168.5.192 255.255.255.240, затем следующий переход 192.168.5.226."
    ]
  },
  {
    "time": [
      804.02,
      808.18
    ],
    "en": [
      "Okay, now to LAN4."
    ],
    "ru": [
      "Хорошо, теперь к LAN4."
    ]
  },
  {
    "time": [
      808.18,
      818.83
    ],
    "en": [
      "IP ROUTE 192.168.5.208 255.255.255.240 192.168.5.226."
    ],
    "ru": [
      "IP-МАРШРУТ 192.168.5.208 255.255.255.240 192.168.5.226."
    ]
  },
  {
    "time": [
      818.83,
      821.26
    ],
    "en": [
      "Let’s check the route table."
    ],
    "ru": [
      "Давайте проверим таблицу маршрутов."
    ]
  },
  {
    "time": [
      821.26,
      823.74
    ],
    "en": [
      "DO SHOW IP ROUTE."
    ],
    "ru": [
      "ПОКАЗАТЬ IP-МАРШРУТ."
    ]
  },
  {
    "time": [
      823.74,
      827.79
    ],
    "en": [
      "Okay, looks like R1 has all of the routes it should."
    ],
    "ru": [
      "Хорошо, похоже, у R1 есть все необходимые маршруты."
    ]
  },
  {
    "time": [
      827.79,
      835.1
    ],
    "en": [
      "Let’s just try a ping from PC1 to another PC, let’s try PC4, to make sure our routes work."
    ],
    "ru": [
      "Давайте просто попробуем выполнить эхо-запрос с ПК1 на другой ПК, давайте попробуем ПК4, чтобы убедиться, что наши маршруты работают."
    ]
  },
  {
    "time": [
      835.1,
      842.4
    ],
    "en": [
      "work. Really, you should try to ping all other PCs but I’ll just show one. Okay, so from"
    ],
    "ru": [
      "Работа. На самом деле, вам стоит попробовать проверить связь со всеми другими компьютерами, но я покажу только один. Хорошо, так что из"
    ]
  },
  {
    "time": [
      842.4,
      847.29
    ],
    "en": [
      "PC1’s CLI, let’s ping to PC4."
    ],
    "ru": [
      "Интерфейс командной строки ПК1, давайте пингуем на ПК4."
    ]
  },
  {
    "time": [
      847.29,
      856.02
    ],
    "en": [
      "PING 192.168.5.209...now, because the ARP process hasn’t completed yet there may be"
    ],
    "ru": [
      "PING 192.168.5.209 ... сейчас, поскольку процесс ARP еще не завершен, возможно,"
    ]
  },
  {
    "time": [
      856.02,
      864.42
    ],
    "en": [
      "a few failures, but if I keep talking you should see that PC1 can now reach PC4."
    ],
    "ru": [
      "несколько сбоев, но если я продолжу говорить, вы увидите, что ПК1 теперь может подключиться к ПК4."
    ]
  },
  {
    "time": [
      864.42,
      871.52
    ],
    "en": [
      "Okay, so we have successfully subnetted and configured a network, and then configured"
    ],
    "ru": [
      "Итак, мы успешно разбили подсети и настроили сеть, а затем настроили"
    ]
  },
  {
    "time": [
      871.52,
      873.65
    ],
    "en": [
      "static routes to provide reachability."
    ],
    "ru": [
      "статические маршруты для обеспечения доступности."
    ]
  },
  {
    "time": [
      873.65,
      878.05
    ],
    "en": [
      "That’s all for this lab."
    ],
    "ru": [
      "Вот и все для этой лаборатории."
    ]
  },
  {
    "time": [
      878.05,
      879.62
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
      879.62,
      883.53
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
      883.53,
      886.87
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
      886.87,
      890.07
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
      890.07,
      896.96
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
      896.96,
      896.96
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]