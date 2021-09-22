let items = [
  {
    "time": [
      0.48,
      7.04
    ],
    "en": [
      "Welcome to Jeremy’s IT Lab. This is a free,&nbsp; complete course for the CCNA. If you like these&nbsp;&nbsp;"
    ],
    "ru": [
      "Добро пожаловать в ИТ-лабораторию Джереми. Это бесплатный & nbsp; полный курс CCNA. Если вам нравятся эти & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      7.04,
      12.48
    ],
    "en": [
      "videos, please subscribe to follow along with the&nbsp; series. Also, please like and leave a comment,&nbsp;&nbsp;"
    ],
    "ru": [
      "видео, подпишитесь, чтобы следить вместе с & nbsp; серии. Также поставьте лайк и оставьте комментарий, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      12.48,
      17.68
    ],
    "en": [
      "and share the video to help spread this&nbsp; free series of videos. Thanks for your help."
    ],
    "ru": [
      "и поделитесь видео, чтобы помочь распространить этот & nbsp; бесплатная серия видеороликов. Спасибо за вашу помощь."
    ]
  },
  {
    "time": [
      17.68,
      22.96
    ],
    "en": [
      "In this video we will cover DHCP,&nbsp; Dynamic Host Configuration Protocol.&nbsp;&nbsp;"
    ],
    "ru": [
      "В этом видео мы рассмотрим DHCP, & nbsp; Протокол динамической конфигурации хоста. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      22.96,
      28.8
    ],
    "en": [
      "Just like DNS, DHCP is a protocol that you’re&nbsp; certainly using every day, even if you’re not&nbsp;&nbsp;"
    ],
    "ru": [
      "Как и DNS, DHCP - это протокол, которым вы & nbsp; конечно, использую каждый день, даже если вы не & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      28.8,
      37.36
    ],
    "en": [
      "aware of it. DHCP allows DHCP clients, usually end&nbsp; devices like PCs, phones, etc, to automatically&nbsp;&nbsp;"
    ],
    "ru": [
      "знают об этом. DHCP позволяет клиентам DHCP, обычно заканчивающимся & nbsp; устройства, такие как компьютеры, телефоны и т. д., для автоматического & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      37.36,
      44.48
    ],
    "en": [
      "learn which IP address to use from a DHCP server,&nbsp; instead of us having to manually configure it.&nbsp;&nbsp;"
    ],
    "ru": [
      "узнать, какой IP-адрес использовать от DHCP-сервера, & nbsp; вместо того, чтобы настраивать его вручную. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      44.48,
      49.76
    ],
    "en": [
      "However DHCP allows devices to learn much more&nbsp; than just their IP address, as you’ll see in this&nbsp;&nbsp;"
    ],
    "ru": [
      "Однако DHCP позволяет устройствам узнавать гораздо больше & nbsp; чем просто их IP-адрес, как вы увидите в & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      49.76,
      58.24
    ],
    "en": [
      "video. DHCP is part of exam topics 4.3, explain&nbsp; the role of DHCP and DNS within the network,&nbsp;&nbsp;"
    ],
    "ru": [
      "видео. DHCP является частью экзаменационных тем 4.3, объясните & nbsp; роль DHCP и DNS в сети, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      58.24,
      66.08
    ],
    "en": [
      "and 4.6, configure and verify DHCP client and&nbsp; relay. Actually DHCP is also mentioned in section&nbsp;&nbsp;"
    ],
    "ru": [
      "и 4.6, настройте и проверьте DHCP-клиент и & nbsp; реле. Собственно DHCP также упоминается в разделе & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      66.08,
      73.36
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
      66.08,
      73.36
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
      73.36,
      78.88
    ],
    "en": [
      "Here’s what we’ll cover in this video. First&nbsp; I’ll outline the basic purpose of DHCP,&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот что мы расскажем в этом видео. Первый & nbsp; Я опишу основное назначение DHCP, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      78.88,
      84.88
    ],
    "en": [
      "and why we use it. Then I’ll introduce the&nbsp; basic functions of DHCP, specifically the&nbsp;&nbsp;"
    ],
    "ru": [
      "и почему мы его используем. Затем я расскажу о & nbsp; основные функции DHCP, в частности & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      84.88,
      91.12
    ],
    "en": [
      "four-message exchange that clients use&nbsp; to get an IP address from a DHCP server.&nbsp;&nbsp;"
    ],
    "ru": [
      "обмен четырьмя сообщениями, который используют клиенты & nbsp; чтобы получить IP-адрес от DHCP-сервера. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      91.12,
      98.16
    ],
    "en": [
      "Then I’ll show you how to configure DHCP in&nbsp; Cisco IOS. A Cisco router can be a DHCP server,&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем я покажу вам, как настроить DHCP в & nbsp; Cisco IOS. Маршрутизатор Cisco может быть DHCP-сервером, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      98.16,
      104.4
    ],
    "en": [
      "a DHCP client, or something called a ‘DHCP&nbsp; relay agent’. I’ll show you how to configure&nbsp;&nbsp;"
    ],
    "ru": [
      "клиент DHCP или нечто, называемое «DHCP & nbsp; агент ретрансляции. Я покажу вам, как настроить & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      104.4,
      109.36
    ],
    "en": [
      "all of those. Make sure to watch until&nbsp; the end of the video for a bonus practice&nbsp;&nbsp;"
    ],
    "ru": [
      "все из тех. Обязательно смотрите до & nbsp; конец видео для бонусной практики & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      109.36,
      116.96000000000001
    ],
    "en": [
      "question from Boson Software’s ExSim for&nbsp; CCNA, the best practice exams for the CCNA."
    ],
    "ru": [
      "вопрос от ExSim компании Boson Software для & nbsp; CCNA, лучшие практические экзамены для CCNA."
    ]
  },
  {
    "time": [
      116.96000000000001,
      124.48
    ],
    "en": [
      "Here’s a brief overview of DHCP. DHCP is used to&nbsp; allow hosts to automatically and dynamically learn&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот краткий обзор DHCP. DHCP используется для & nbsp; разрешить хостам автоматически и динамически изучать & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      124.48,
      128.48
    ],
    "en": [
      "various aspects of their network&nbsp; configuration such as IP address,&nbsp;&nbsp;"
    ],
    "ru": [
      "различные аспекты их сети & nbsp; конфигурация, такая как IP-адрес, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      128.48,
      135.36
    ],
    "en": [
      "subnet mask, default gateway, DNS server,&nbsp; etc, without manual and static configuration.&nbsp;&nbsp;"
    ],
    "ru": [
      "маска подсети, шлюз по умолчанию, DNS-сервер, & nbsp; и т. д., без ручной и статической настройки. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      135.36,
      141.44
    ],
    "en": [
      "It is an essential part of modern networks, I’m&nbsp; certain you’re using it everyday. For example,&nbsp;&nbsp;"
    ],
    "ru": [
      "Это неотъемлемая часть современных сетей, я & nbsp; уверен, что вы используете его каждый день. Например, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      141.44,
      146.96
    ],
    "en": [
      "when you connect a phone to WiFi, do you ask the&nbsp; network admin, whoever’s running the network,&nbsp;&nbsp;"
    ],
    "ru": [
      "когда вы подключаете телефон к WiFi, спрашиваете ли вы, & nbsp; администратор сети, кто бы ни управлял сетью, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      146.96,
      154.32
    ],
    "en": [
      "which IP address, subnet mask, default gateway,&nbsp; etc, the phone or laptop should use? Probably not,&nbsp;&nbsp;"
    ],
    "ru": [
      "какой IP-адрес, маска подсети, шлюз по умолчанию, & nbsp; и т. д. телефон или ноутбук следует использовать? Наверное, нет, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      154.32,
      159.04
    ],
    "en": [
      "we all expect that once we connect to WiFi&nbsp; we’ll automatically have access to the network&nbsp;&nbsp;"
    ],
    "ru": [
      "мы все ожидаем, что после подключения к Wi-Fi & nbsp; мы автоматически получим доступ к сети & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      159.04,
      164.88
    ],
    "en": [
      "and the Internet. It’s probably the same in your&nbsp; home network. If you connect your PC to your&nbsp;&nbsp;"
    ],
    "ru": [
      "и Интернет. Вероятно, то же самое и в вашем & nbsp; Домашняя сеть. Если вы подключите компьютер к & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      164.88,
      170.32
    ],
    "en": [
      "home router, you probably don’t need to manually&nbsp; configure your PC’s IP address, default gateway,&nbsp;&nbsp;"
    ],
    "ru": [
      "домашний маршрутизатор, вероятно, вам не нужно вручную & nbsp; настройте IP-адрес вашего ПК, шлюз по умолчанию, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      170.32,
      177.36
    ],
    "en": [
      "etc. Of course, you can do that if you want, and&nbsp; some of you probably do. In a small network manual&nbsp;&nbsp;"
    ],
    "ru": [
      "и т. д. Конечно, вы можете это сделать, если хотите, и & nbsp; некоторые из вас, вероятно, знают. В небольшом руководстве по сети & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      177.36,
      184.88
    ],
    "en": [
      "configuration isn’t such a difficult task. However&nbsp; in large networks DHCP’s role is very important.&nbsp;&nbsp;"
    ],
    "ru": [
      "настройка - не такая уж сложная задача. Однако & nbsp; в больших сетях роль DHCP очень важна."
    ]
  },
  {
    "time": [
      184.88,
      192.4
    ],
    "en": [
      "Note that DHCP is typically used for ‘client’&nbsp; devices such as workstations, PCs, phones, etc.&nbsp;&nbsp;"
    ],
    "ru": [
      "Обратите внимание, что DHCP обычно используется для «клиента» & nbsp; такие устройства, как рабочие станции, ПК, телефоны и т. д. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      192.4,
      197.28
    ],
    "en": [
      "Devices such as routers, servers,&nbsp; etc, are usually manually configured.&nbsp;&nbsp;"
    ],
    "ru": [
      "Такие устройства, как маршрутизаторы, серверы и т. Д. и т. д., обычно настраиваются вручную. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      197.28,
      201.84
    ],
    "en": [
      "This is because they need to have a fixed&nbsp; IP address to perform their function.&nbsp;&nbsp;"
    ],
    "ru": [
      "Это потому, что им нужен фиксированный & nbsp; IP-адрес для выполнения своей функции. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      201.84,
      207.52
    ],
    "en": [
      "If the default gateway of the network kept&nbsp; changing it would obviously not be ideal.&nbsp;&nbsp;"
    ],
    "ru": [
      "Если шлюз сети по умолчанию оставлен & nbsp; его изменение, очевидно, было бы не лучшим решением. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      207.52,
      212.8
    ],
    "en": [
      "In small networks (such as home networks) the&nbsp; router typically acts as the DHCP server for&nbsp;&nbsp;"
    ],
    "ru": [
      "В небольших сетях (таких как домашние сети) & nbsp; маршрутизатор обычно действует как DHCP-сервер для & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      212.8,
      218.56
    ],
    "en": [
      "hosts in the LAN. If you have a router in your&nbsp; home, it’s probably acting as the DHCP server&nbsp;&nbsp;"
    ],
    "ru": [
      "хосты в локальной сети. Если у вас есть маршрутизатор в & nbsp; home, он, вероятно, действует как DHCP-сервер & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      218.56,
      224.4
    ],
    "en": [
      "for all of your devices. However in larger&nbsp; networks, such as a large enterprise network,&nbsp;&nbsp;"
    ],
    "ru": [
      "для всех ваших устройств. Однако в больших & nbsp; сети, такие как крупная корпоративная сеть, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      224.4,
      230.24
    ],
    "en": [
      "the DHCP server is usually&nbsp; a Windows or Linux server."
    ],
    "ru": [
      "DHCP-сервер обычно & nbsp; сервер Windows или Linux."
    ]
  },
  {
    "time": [
      230.24,
      234.8
    ],
    "en": [
      "Now I’ll give a brief demonstration&nbsp; of DHCP’s function using my own PC,&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь я проведу краткую демонстрацию & nbsp; функции DHCP на моем собственном ПК, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      234.8,
      240.88
    ],
    "en": [
      "which is running Windows 10. If your PC is&nbsp; running Windows, I recommend following along.&nbsp;&nbsp;"
    ],
    "ru": [
      "который работает под управлением Windows 10. Если ваш компьютер & nbsp; под управлением Windows я рекомендую выполнить следующие действия. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      240.88,
      246.48
    ],
    "en": [
      "This is the ‘network and sharing center’, which&nbsp; can be accessed from the control panel. I’m going&nbsp;&nbsp;"
    ],
    "ru": [
      "Это «центр сети и совместного использования», который & nbsp; можно получить с панели управления. Я иду & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      246.48,
      253.76
    ],
    "en": [
      "to select my PC’s Ethernet0 connection, which is&nbsp; connected to my home router via an Ethernet cable."
    ],
    "ru": [
      "чтобы выбрать соединение Ethernet0 моего ПК, т. е. & nbsp; подключен к моему домашнему маршрутизатору через кабель Ethernet."
    ]
  },
  {
    "time": [
      253.76,
      259.28
    ],
    "en": [
      "This is what you’ll see after opening it. Here&nbsp; I select the properties of my PC’s Ethernet&nbsp;&nbsp;"
    ],
    "ru": [
      "Это то, что вы увидите после его открытия. Здесь & nbsp; Я выбираю свойства Ethernet моего ПК & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      259.28,
      266.96
    ],
    "en": [
      "connection, Ethernet0. Then the properties are&nbsp; displayed. I select the IPv4 properties here.&nbsp;&nbsp;"
    ],
    "ru": [
      "подключение, Ethernet0. Тогда свойства & nbsp; отображается. Я выбираю здесь свойства IPv4. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      266.96,
      274.0
    ],
    "en": [
      "This window opens up. Here I can confirm that&nbsp; my PC is using DHCP. Here it says ‘obtain an&nbsp;&nbsp;"
    ],
    "ru": [
      "Это окно открывается. Здесь я могу подтвердить, что & nbsp; мой компьютер использует DHCP. Здесь говорится: «Получите & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      274.0,
      280.64
    ],
    "en": [
      "IP address automatically’. And down here it&nbsp; says ‘obtain DNS server address automatically’.&nbsp;&nbsp;"
    ],
    "ru": [
      "IP-адрес автоматически ». И вот это & ​​nbsp; говорит «получить адрес DNS-сервера автоматически». & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      280.64,
      283.92
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
      280.64,
      283.92
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
      283.92,
      291.04
    ],
    "en": [
      "to learn which IP address, subnet mask,&nbsp; default gateway, and DNS server it should use."
    ],
    "ru": [
      "чтобы узнать, какой IP-адрес, маска подсети и & nbsp; шлюз по умолчанию и DNS-сервер, который он должен использовать."
    ]
  },
  {
    "time": [
      291.04,
      297.12
    ],
    "en": [
      "Let’s take a look at what was automatically&nbsp; configured. I used the IPCONFIG /ALL command,&nbsp;&nbsp;"
    ],
    "ru": [
      "Давайте посмотрим, что было автоматически & nbsp; настроен. Я использовал команду IPCONFIG / ALL, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      297.12,
      303.28
    ],
    "en": [
      "which you already know. First off, notice&nbsp; that it tells us that DHCP is enabled.&nbsp;&nbsp;"
    ],
    "ru": [
      "который вы уже знаете. Прежде всего, обратите внимание на & nbsp; что он сообщает нам, что DHCP включен. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      303.28,
      307.44
    ],
    "en": [
      "If I had manually configured my PC’s&nbsp; IP address in the previous menu,&nbsp;&nbsp;"
    ],
    "ru": [
      "Если бы я вручную настроил & nbsp; IP-адрес в предыдущем меню, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      307.44,
      312.8
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
      307.44,
      312.8
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
      312.8,
      322.24
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
      312.8,
      322.24
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
      322.24,
      328.24
    ],
    "en": [
      "It means that this PC was previously&nbsp; assigned this IP address by the DHCP server.&nbsp;&nbsp;"
    ],
    "ru": [
      "Это означает, что этот компьютер ранее был & nbsp; назначил этот IP-адрес DHCP-сервером. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      328.24,
      334.64
    ],
    "en": [
      "Then, when it asked the server for an IP address&nbsp; again, it asked to receive the same address again.&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем, когда он запросил у сервера IP-адрес & nbsp; И снова он попросил снова получить тот же адрес. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      334.64,
      339.76
    ],
    "en": [
      "If this address was no longer available, my PC&nbsp; would have been assigned a different address.&nbsp;&nbsp;"
    ],
    "ru": [
      "Если этот адрес больше не был доступен, мой компьютер & nbsp; был бы назначен другой адрес. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      339.76,
      346.32
    ],
    "en": [
      "However, the address was available, so my PC got&nbsp; its preferred IP address. Here’s an important part&nbsp;&nbsp;"
    ],
    "ru": [
      "Однако адрес был доступен, поэтому мой компьютер получил & nbsp; его предпочтительный IP-адрес. Вот важная часть & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      346.32,
      353.76
    ],
    "en": [
      "of DHCP, the lease time. IPCONFIG /ALL displays&nbsp; what time the lease was obtained, and what time&nbsp;&nbsp;"
    ],
    "ru": [
      "DHCP, время аренды. IPCONFIG / ALL отображает & nbsp; в какое время была получена аренда и в какое время & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      353.76,
      361.84
    ],
    "en": [
      "it will expire. What exactly does this mean?&nbsp; DHCP servers ‘lease’ IP addresses to clients.&nbsp;&nbsp;"
    ],
    "ru": [
      "он истечет. Что именно это означает? & Nbsp; DHCP-серверы «сдают в аренду» IP-адреса клиентам. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      361.84,
      366.96
    ],
    "en": [
      "These leases are usually not permanent, and the&nbsp; client must give up the IP address at the end of&nbsp;&nbsp;"
    ],
    "ru": [
      "Эти договоры аренды обычно не являются постоянными, и & nbsp; клиент должен отказаться от IP-адреса в конце & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      366.96,
      373.6
    ],
    "en": [
      "the lease. A client can also release the address&nbsp; before the lease is up, if it no longer needs it.&nbsp;&nbsp;"
    ],
    "ru": [
      "аренда. Клиент также может освободить адрес & nbsp; до истечения срока аренды, если она больше не нужна. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      373.6,
      378.64
    ],
    "en": [
      "Now, I said ‘usually’ not permanent, because&nbsp; it is possible to configure the DHCP server&nbsp;&nbsp;"
    ],
    "ru": [
      "Я сказал «обычно» не навсегда, потому что & nbsp; можно настроить DHCP-сервер & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      378.64,
      385.28
    ],
    "en": [
      "to permanently assign IP addresses. However,&nbsp; it’s almost always best to set a lease time.&nbsp;&nbsp;"
    ],
    "ru": [
      "для постоянного присвоения IP-адресов. Однако & nbsp; почти всегда лучше установить время аренды. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      385.28,
      390.56
    ],
    "en": [
      "For example, think about a cafe that provides&nbsp; WiFi network access to its customers.&nbsp;&nbsp;"
    ],
    "ru": [
      "Например, представьте себе кафе, в котором & nbsp; Доступ к сети Wi-Fi для своих клиентов. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      390.56,
      395.44
    ],
    "en": [
      "If the IP address leases were permanent,&nbsp; every time a new customer comes into the cafe&nbsp;&nbsp;"
    ],
    "ru": [
      "Если аренда IP-адреса была постоянной, & nbsp; каждый раз, когда в кафе заходит новый клиент & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      395.44,
      400.8
    ],
    "en": [
      "and connects to the WiFi, the customer’s devices&nbsp; would be permanently assigned IP addresses,&nbsp;&nbsp;"
    ],
    "ru": [
      "и подключается к Wi-Fi, устройства клиента & nbsp; будут постоянно назначены IP-адреса, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      400.8,
      407.28
    ],
    "en": [
      "unless the client device releases it. Or how about&nbsp; an airport that provides WiFi? I think you can see&nbsp;&nbsp;"
    ],
    "ru": [
      "если клиентское устройство не выпустит его. Или как насчет & nbsp; аэропорт, который предоставляет Wi-Fi? Я думаю, вы можете увидеть & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      407.28,
      413.6
    ],
    "en": [
      "why it’s best to limit the lease time, to preserve&nbsp; the available IP addresses. If the customer stays&nbsp;&nbsp;"
    ],
    "ru": [
      "почему лучше ограничить срок аренды, чтобы сохранить & nbsp; доступные IP-адреса. Если клиент останется & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      413.6,
      418.96
    ],
    "en": [
      "longer than the lease time, their device will&nbsp; simply automatically request a new IP address,&nbsp;&nbsp;"
    ],
    "ru": [
      "дольше, чем срок аренды, их устройство & nbsp; просто автоматически запросить новый IP-адрес, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      418.96,
      424.64
    ],
    "en": [
      "but if they stop using the network the IP&nbsp; addresses will be free for someone else to use.&nbsp;&nbsp;"
    ],
    "ru": [
      "но если они перестанут использовать сеть, IP & nbsp; адреса будут свободны для использования кем-то другим. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      424.64,
      430.4
    ],
    "en": [
      "Okay, here at the bottom we can see some&nbsp; other info my PC learned from the DHCP server.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, здесь внизу мы можем увидеть некоторые & nbsp; другая информация, полученная моим компьютером от DHCP-сервера. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      430.4,
      436.8
    ],
    "en": [
      "The default gateway, DHCP server,&nbsp; and DNS server are all 192.168.0.1,&nbsp;&nbsp;"
    ],
    "ru": [
      "Шлюз по умолчанию, DHCP-сервер, & nbsp; и DNS-сервер - все 192.168.0.1, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      436.8,
      441.28
    ],
    "en": [
      "which is my home router. This&nbsp; is common in home networks,&nbsp;&nbsp;"
    ],
    "ru": [
      "это мой домашний роутер. Это & nbsp; часто встречается в домашних сетях, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      441.28,
      446.8
    ],
    "en": [
      "the home router provides all of these&nbsp; services to devices on the local network."
    ],
    "ru": [
      "домашний маршрутизатор предоставляет все эти & nbsp; сервисы для устройств в локальной сети."
    ]
  },
  {
    "time": [
      446.8,
      451.76
    ],
    "en": [
      "I want to demonstrate the process that a DHCP&nbsp; client goes through to get an IP address from&nbsp;&nbsp;"
    ],
    "ru": [
      "Я хочу продемонстрировать процесс, с помощью которого DHCP & nbsp; клиент получает IP-адрес от & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      451.76,
      458.08
    ],
    "en": [
      "a DHCP server, but first I need to make my PC&nbsp; release its IP address, so it can ask the server&nbsp;&nbsp;"
    ],
    "ru": [
      "DHCP-сервер, но сначала мне нужно сделать мой компьютер & nbsp; освободить свой IP-адрес, чтобы он мог запросить у сервера & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      458.08,
      466.24
    ],
    "en": [
      "again. The command in the Windows command prompt&nbsp; to release the DHCP-learned IP address is IPCONFIG&nbsp;&nbsp;"
    ],
    "ru": [
      "опять таки. Команда в командной строке Windows & nbsp; для освобождения IP-адреса, полученного с помощью DHCP, является IPCONFIG & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      466.24,
      473.76
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
      466.24,
      473.76
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
      473.76,
      481.44
    ],
    "en": [
      "just happened. My PC sent a DHCP Release message&nbsp; to the DHCP server, my router, telling it that the&nbsp;&nbsp;"
    ],
    "ru": [
      "только что случилось. Мой компьютер отправил сообщение об освобождении DHCP & nbsp; к DHCP-серверу, моему маршрутизатору, сообщив ему, что & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      481.44,
      490.4
    ],
    "en": [
      "IP address isn’t needed anymore. So, 192.168.0.167&nbsp; is now free to assign to another client."
    ],
    "ru": [
      "IP-адрес больше не нужен. Итак, 192.168.0.167 & nbsp; теперь можно назначить другому клиенту."
    ]
  },
  {
    "time": [
      490.4,
      494.96
    ],
    "en": [
      "I used Wireshark to capture&nbsp; that DHCP release message.&nbsp;&nbsp;"
    ],
    "ru": [
      "Я использовал Wireshark для захвата & nbsp; это сообщение об освобождении DHCP. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      494.96,
      500.64
    ],
    "en": [
      "For the CCNA you should focus on learning the four&nbsp; message process used to lease an IP address from&nbsp;&nbsp;"
    ],
    "ru": [
      "Для CCNA вам следует сосредоточиться на изучении четырех & nbsp; процесс сообщения, используемый для аренды IP-адреса у & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      500.64,
      507.68
    ],
    "en": [
      "a DHCP server, which I will show you next. But&nbsp; let’s look at the DHCP release message anyway.&nbsp;&nbsp;"
    ],
    "ru": [
      "DHCP-сервер, который я покажу вам дальше. Но & nbsp; в любом случае давайте посмотрим на сообщение об освобождении DHCP. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      507.68,
      513.92
    ],
    "en": [
      "Of course, the message is an Ethernet frame so&nbsp; here’s the Ethernet header. An IPv4 header is&nbsp;&nbsp;"
    ],
    "ru": [
      "Конечно, сообщение представляет собой кадр Ethernet, поэтому & nbsp; вот заголовок Ethernet. Заголовок IPv4: & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      513.92,
      524.72
    ],
    "en": [
      "inside, from source IP address 192.168.0.167, the&nbsp; PC, to destination IP 192.168.0.1, the router.&nbsp;&nbsp;"
    ],
    "ru": [
      "внутри, с IP-адреса источника 192.168.0.167, & nbsp; ПК, на IP-адрес назначения 192.168.0.1, маршрутизатор."
    ]
  },
  {
    "time": [
      524.72,
      532.88
    ],
    "en": [
      "Inside is a UDP header, and notice the&nbsp; ports. Source port 68, destination port 67.&nbsp;&nbsp;"
    ],
    "ru": [
      "Внутри находится заголовок UDP, и обратите внимание на & nbsp; порты. Исходный порт 68, конечный порт 67. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      532.88,
      542.48
    ],
    "en": [
      "DHCP servers use UDP port 67 and DHCP clients use&nbsp; UDP port 68. So, the source port is 68 because&nbsp;&nbsp;"
    ],
    "ru": [
      "Серверы DHCP используют порт 67 UDP, а клиенты DHCP используют & nbsp; UDP-порт 68. Итак, исходный порт - 68, потому что & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      542.48,
      551.12
    ],
    "en": [
      "it’s the DHCP client, and the destination&nbsp; port is 67 because it’s the DHCP server.&nbsp;&nbsp;"
    ],
    "ru": [
      "это клиент DHCP, а пункт назначения & nbsp; порт - 67, потому что это DHCP-сервер. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      551.12,
      556.32
    ],
    "en": [
      "This is different than DNS, for example, in&nbsp; which only the port of the server is decided&nbsp;&nbsp;"
    ],
    "ru": [
      "Это отличается от DNS, например, в & nbsp; который определяется только портом сервера & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      556.32,
      562.48
    ],
    "en": [
      "and the client uses a random ephemeral port.&nbsp; Finally, inside of the UDP segment we have the&nbsp;&nbsp;"
    ],
    "ru": [
      "а клиент использует случайный временный порт. & nbsp; Наконец, внутри сегмента UDP у нас есть & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      562.48,
      570.32
    ],
    "en": [
      "DHCP release message. The client IP is indicated&nbsp; here. And notice these ‘options’ down here.&nbsp;&nbsp;"
    ],
    "ru": [
      "Сообщение об освобождении DHCP. Указывается IP-адрес клиента & nbsp; здесь. И обратите внимание на эти «параметры» здесь. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      570.32,
      577.12
    ],
    "en": [
      "DHCP has various options used for different&nbsp; purposes. For example option 53, at the top,&nbsp;&nbsp;"
    ],
    "ru": [
      "DHCP имеет различные параметры, используемые для разных & nbsp; целей. Например, вариант 53 вверху, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      577.12,
      583.6
    ],
    "en": [
      "indicates what kind of DHCP message it is. And&nbsp; before moving on, let me point out my favorite&nbsp;&nbsp;"
    ],
    "ru": [
      "указывает, что это за сообщение DHCP. И & NBSP; прежде чем продолжить, позвольте мне указать на мои любимые & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      583.6,
      590.72
    ],
    "en": [
      "part of DHCP messages, the magic cookie. Do a&nbsp; Google search if you want to learn about that one."
    ],
    "ru": [
      "часть сообщений DHCP, волшебный файл cookie. Сделайте & nbsp; Поищите в Google, если хотите узнать об этом."
    ]
  },
  {
    "time": [
      590.72,
      595.44
    ],
    "en": [
      "Now that I’ve released the IP address of&nbsp; my PC, let’s take a look at how my PC can&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь, когда я опубликовал IP-адрес & nbsp; мой компьютер, давайте посмотрим, как мой компьютер может & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      595.44,
      603.04
    ],
    "en": [
      "get an IP address from the DHCP server. From the&nbsp; Windows command prompt I used the command IPCONFIG&nbsp;&nbsp;"
    ],
    "ru": [
      "получить IP-адрес от DHCP-сервера. Из & nbsp; Командная строка Windows. Я использовал команду IPCONFIG & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      603.04,
      610.56
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
      603.04,
      610.56
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
      610.56,
      615.84
    ],
    "en": [
      "This process involves four&nbsp; messages, let me introduce them now."
    ],
    "ru": [
      "Этот процесс включает четыре & nbsp; сообщения, позвольте мне представить их сейчас."
    ]
  },
  {
    "time": [
      615.84,
      622.96
    ],
    "en": [
      "The first message is the DHCP Discover message.&nbsp; It is a broadcast message from the client.&nbsp;&nbsp;"
    ],
    "ru": [
      "Первое сообщение - это сообщение DHCP Discover. & Nbsp; Это широковещательное сообщение от клиента. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      622.96,
      628.0
    ],
    "en": [
      "Basically, it’s asking if there are any DHCP&nbsp; servers in the local network, telling them it&nbsp;&nbsp;"
    ],
    "ru": [
      "По сути, он спрашивает, есть ли какие-нибудь DHCP & nbsp; серверов в локальной сети, сообщая им, что & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      628.0,
      636.08
    ],
    "en": [
      "needs an IP address. Let’s use Wireshark to take&nbsp; a look at the DHCP Discover message my PC sent."
    ],
    "ru": [
      "нужен IP-адрес. Давайте воспользуемся Wireshark, чтобы взять & nbsp; посмотрите на сообщение DHCP Discover, которое отправил мой компьютер."
    ]
  },
  {
    "time": [
      636.08,
      642.88
    ],
    "en": [
      "Here it is. Here’s the Ethernet header. Notice&nbsp; the destination broadcast MAC address of all Fs.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот. Вот заголовок Ethernet. Уведомление & nbsp; широковещательный MAC-адрес назначения для всех Fs. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      642.88,
      649.12
    ],
    "en": [
      "My PC doesn’t know the IP address or MAC address&nbsp; of the DHCP server. In fact it doesn’t even know&nbsp;&nbsp;"
    ],
    "ru": [
      "Мой компьютер не знает IP-адрес или MAC-адрес & nbsp; DHCP-сервера. Фактически он даже не знает & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      649.12,
      655.76
    ],
    "en": [
      "if there is a DHCP server on the network, so&nbsp; it has no choice but to broadcast the message.&nbsp;&nbsp;"
    ],
    "ru": [
      "если в сети есть DHCP-сервер, то & nbsp; у него нет другого выбора, кроме как транслировать сообщение. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      655.76,
      662.08
    ],
    "en": [
      "Here’s the IPv4 header. Notice&nbsp; the source IP address of 0.0.0.0.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот заголовок IPv4. Уведомление & nbsp; исходный IP-адрес 0.0.0.0. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      662.08,
      670.24
    ],
    "en": [
      "Basically, this means my PC doesn’t have an IP&nbsp; address yet. The destination is 255.255.255.255,&nbsp;&nbsp;"
    ],
    "ru": [
      "По сути, это означает, что у моего компьютера нет IP-адреса & nbsp; адреса пока нет. Пункт назначения - 255.255.255.255, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      670.24,
      675.28
    ],
    "en": [
      "so it’s a broadcast message. Once again,&nbsp; since this is a message from the DHCP&nbsp;&nbsp;"
    ],
    "ru": [
      "так что это широковещательное сообщение. И снова & nbsp; поскольку это сообщение от DHCP & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      675.28,
      683.6
    ],
    "en": [
      "client to the server, the source port is UDP&nbsp; 68 and the destination is UDP 67. And here’s&nbsp;&nbsp;"
    ],
    "ru": [
      "клиент к серверу, исходный порт - UDP & nbsp; 68, а пункт назначения - UDP 67. А вот и & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      683.6,
      689.6
    ],
    "en": [
      "the actual DHCP message. You don’t need to know&nbsp; the contents of any of these messages in detail,&nbsp;&nbsp;"
    ],
    "ru": [
      "фактическое сообщение DHCP. Вам не нужно знать & nbsp; подробное содержание любого из этих сообщений, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      689.6,
      697.52
    ],
    "en": [
      "just know their basic purpose. But here are a few&nbsp; of the fields. First off, the ‘Bootp flags’ field.&nbsp;"
    ],
    "ru": [
      "просто знайте их основное предназначение. Но вот несколько & nbsp; полей. Во-первых, поле «Bootp flags». & Nbsp;"
    ]
  },
  {
    "time": [
      697.52,
      703.76
    ],
    "en": [
      "Bootp is actually the predecessor of DHCP, but&nbsp; you don’t need to learn Bootp for the CCNA.&nbsp;&nbsp;"
    ],
    "ru": [
      "Bootp на самом деле является предшественником DHCP, но & nbsp; вам не нужно изучать Bootp для CCNA. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      703.76,
      710.8
    ],
    "en": [
      "I just want to point out the value of ‘unicast’&nbsp; here, represented by 0000. This may seem odd, the&nbsp;&nbsp;"
    ],
    "ru": [
      "Я просто хочу указать на ценность «одноадресной» & nbsp; здесь обозначается 0000. Это может показаться странным, но & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      710.8,
      717.84
    ],
    "en": [
      "message is broadcast but this field says unicast.&nbsp; I’ll explain it when we look at the next message.&nbsp;&nbsp;"
    ],
    "ru": [
      "сообщение транслируется, но в этом поле указано одноадресная передача. & nbsp; Я объясню это, когда мы перейдем к следующему сообщению. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      717.84,
      723.28
    ],
    "en": [
      "Then we can see here that the client IP&nbsp; address is 0.0.0.0, since my PC doesn’t have&nbsp;&nbsp;"
    ],
    "ru": [
      "Здесь мы видим, что IP-адрес клиента & nbsp; адрес 0.0.0.0, так как на моем компьютере нет & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      723.28,
      729.76
    ],
    "en": [
      "an IP address yet. The client MAC is also&nbsp; displayed here. And here are the options,&nbsp;&nbsp;"
    ],
    "ru": [
      "IP-адрес еще нет. Клиентский MAC-адрес также & nbsp; отображается здесь. А вот варианты, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      729.76,
      735.28
    ],
    "en": [
      "notice they are different than the ones used in&nbsp; the DHCP Release message we looked at before.&nbsp;&nbsp;"
    ],
    "ru": [
      "обратите внимание, они отличаются от используемых в & nbsp; сообщение о выпуске DHCP, которое мы рассмотрели ранее. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      735.28,
      741.52
    ],
    "en": [
      "Let me just point out this option, Requested&nbsp; IP Address. Because my PC previously had the IP&nbsp;&nbsp;"
    ],
    "ru": [
      "Позвольте мне просто указать на этот вариант: Запрошено & nbsp; Айпи адрес. Поскольку у моего ПК раньше был IP & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      741.52,
      749.52
    ],
    "en": [
      "address 192.168.0.167, it requested that address&nbsp; again. If the address is available, the server&nbsp;&nbsp;"
    ],
    "ru": [
      "адрес 192.168.0.167, он запросил этот адрес & nbsp; опять таки. Если адрес доступен, сервер & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      749.52,
      756.8
    ],
    "en": [
      "might grant it that same IP address again. But if&nbsp; it’s not, my PC would get a different IP address.&nbsp;&nbsp;"
    ],
    "ru": [
      "может снова предоставить ему тот же IP-адрес. Но если & nbsp; это не так, мой компьютер получит другой IP-адрес. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      756.8,
      759.92
    ],
    "en": [
      "If this is the first time my PC is using DHCP&nbsp;&nbsp;"
    ],
    "ru": [
      "Если мой компьютер впервые использует DHCP, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      759.92,
      765.84
    ],
    "en": [
      "it won’t request an IP address like this, it&nbsp; will simply leave it up to the server to decide."
    ],
    "ru": [
      "он не запрашивает такой IP-адрес, он & nbsp; просто оставит это на усмотрение сервера."
    ]
  },
  {
    "time": [
      765.84,
      772.64
    ],
    "en": [
      "The next message is the DHCP Offer message, it is&nbsp; sent from the DHCP server to the client, offering&nbsp;&nbsp;"
    ],
    "ru": [
      "Следующее сообщение - это сообщение DHCP Offer, & nbsp; отправлено с DHCP-сервера клиенту, предлагая & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      772.64,
      780.4
    ],
    "en": [
      "an address for the client to use, as well as other&nbsp; information like default gateway, DNS server, etc."
    ],
    "ru": [
      "адрес для использования клиентом, а также другие & nbsp; такая информация, как шлюз по умолчанию, DNS-сервер и т. д."
    ]
  },
  {
    "time": [
      780.4,
      785.2
    ],
    "en": [
      "So let’s check out the DHCP&nbsp; Offer my router sent to my PC.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, давайте посмотрим на DHCP & nbsp; Предложите мой маршрутизатор, отправленный на мой компьютер. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      785.2,
      790.4
    ],
    "en": [
      "First off, notice the Offer is sent as a&nbsp; unicast frame to the client’s MAC address,&nbsp;&nbsp;"
    ],
    "ru": [
      "Прежде всего, обратите внимание, что Предложение отправлено как & nbsp; одноадресный кадр на MAC-адрес клиента, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      790.4,
      794.8
    ],
    "en": [
      "since the server learned the client’s&nbsp; MAC address from the Discover message.&nbsp;&nbsp;"
    ],
    "ru": [
      "поскольку сервер узнал & nbsp; MAC-адрес из сообщения Discover. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      794.8,
      801.12
    ],
    "en": [
      "It’s also unicast at Layer 3, the destination&nbsp; is the IP address being offered to the client.&nbsp;&nbsp;"
    ],
    "ru": [
      "Это также одноадресная передача на уровне 3, пункте назначения & nbsp; IP-адрес, предлагаемый клиенту. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      801.12,
      804.96
    ],
    "en": [
      "This time the source and destination port&nbsp; number are reversed, since it’s a message&nbsp;&nbsp;"
    ],
    "ru": [
      "На этот раз порт источника и назначения & nbsp; номера поменяны местами, так как это сообщение & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      804.96,
      812.64
    ],
    "en": [
      "from the server to the client. The source&nbsp; is UDP 67 and the destination is UDP 68.&nbsp;&nbsp;"
    ],
    "ru": [
      "от сервера к клиенту. Источник & nbsp; UDP 67, а пункт назначения - UDP 68. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      812.64,
      818.4
    ],
    "en": [
      "And here’s the Offer message. Let’s look at&nbsp; this field again, ‘Bootp flags’. Once again,&nbsp;&nbsp;"
    ],
    "ru": [
      "А вот сообщение с предложением. Давайте посмотрим на & nbsp; это снова поле «Bootp flags». И снова & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      818.4,
      827.44
    ],
    "en": [
      "it says unicast. When my PC sent the DHCP Discover&nbsp; message this field was also set to 0000, unicast.&nbsp;&nbsp;"
    ],
    "ru": [
      "это говорит одноадресная передача. Когда мой компьютер отправил DHCP Discover & nbsp; сообщение в этом поле также было установлено значение 0000, одноадресная. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      827.44,
      832.8
    ],
    "en": [
      "This means that the server will send its messages&nbsp; using unicast, as I just showed you above.&nbsp;&nbsp;"
    ],
    "ru": [
      "Это означает, что сервер будет отправлять свои сообщения & nbsp; с использованием одноадресной передачи, как я только что показал вам выше. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      832.8,
      838.32
    ],
    "en": [
      "However, that’s not always the case. The DHCP&nbsp; Offer message can be sent to the client using&nbsp;&nbsp;"
    ],
    "ru": [
      "Однако это не всегда так. DHCP & nbsp; Сообщение с предложением можно отправить клиенту с помощью & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      838.32,
      844.8
    ],
    "en": [
      "either broadcast or unicast. It depends on the&nbsp; client. In this case my PC told the router to send&nbsp;&nbsp;"
    ],
    "ru": [
      "либо широковещательная, либо одноадресная. Это зависит от & nbsp; клиент. В этом случае мой компьютер сказал маршрутизатору отправить & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      844.8,
      851.44
    ],
    "en": [
      "the Offer using unicast, so it did. If my PC told&nbsp; the router to send the Offer using broadcast, the&nbsp;&nbsp;"
    ],
    "ru": [
      "Предложение с использованием одноадресной рассылки, так оно и было. Если мой компьютер сообщил & nbsp; маршрутизатор для отправки предложения с использованием широковещательной рассылки, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      851.44,
      860.48
    ],
    "en": [
      "destination MAC of this message would be all F’s&nbsp; and the destination IP would be 255.255.255.255.&nbsp;&nbsp;"
    ],
    "ru": [
      "MAC-адрес назначения этого сообщения будет состоять из всех F & nbsp; а IP-адрес назначения будет 255.255.255.255. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      860.48,
      866.08
    ],
    "en": [
      "At this point in the DHCP process, the&nbsp; client’s IP address isn’t actually configured.&nbsp;&nbsp;"
    ],
    "ru": [
      "На этом этапе процесса DHCP параметр & nbsp; IP-адрес клиента на самом деле не настроен. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      866.08,
      871.12
    ],
    "en": [
      "Some clients won’t accept unicast messages before&nbsp; their IP address is actually configured, so that’s&nbsp;&nbsp;"
    ],
    "ru": [
      "Некоторые клиенты не принимают одноадресные сообщения до & nbsp; их IP-адрес действительно настроен, так что & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      871.12,
      877.84
    ],
    "en": [
      "why sometimes broadcast must be used instead of&nbsp; unicast. And finally here are the options. For&nbsp;&nbsp;"
    ],
    "ru": [
      "почему иногда необходимо использовать трансляцию вместо & nbsp; одноадресная передача. И, наконец, вот варианты. Для & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      877.84,
      885.12
    ],
    "en": [
      "example option 51 indicates the lease time, option&nbsp; 6 is ‘domain name server’ that’s the DNS server,&nbsp;&nbsp;"
    ],
    "ru": [
      "в примере вариант 51 указывает срок аренды, параметр & nbsp; 6 - это «сервер доменного имени», то есть DNS-сервер, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      885.12,
      891.04
    ],
    "en": [
      "and option 3 is ‘router’, which tells the client&nbsp; the default gateway. By the way, you don’t have&nbsp;&nbsp;"
    ],
    "ru": [
      "и вариант 3 - «маршрутизатор», который сообщает клиенту & nbsp; шлюз по умолчанию. Кстати, у вас нет & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      891.04,
      898.32
    ],
    "en": [
      "to memorize these option numbers, definitely not&nbsp; at the CCNA level, I’m just pointing them out."
    ],
    "ru": [
      "для запоминания этих номеров опций, определенно не & nbsp; на уровне CCNA я просто указываю на них."
    ]
  },
  {
    "time": [
      898.32,
      904.32
    ],
    "en": [
      "Okay, the next message is the DHCP Request&nbsp; message. It is sent from the DHCP client&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, следующее сообщение - запрос DHCP & nbsp; сообщение. Он отправляется DHCP-клиентом & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      904.32,
      909.6
    ],
    "en": [
      "to the server, telling the server that it&nbsp; wants to use the IP address it was offered.&nbsp;&nbsp;"
    ],
    "ru": [
      "к серверу, сообщая серверу, что он & nbsp; хочет использовать предложенный IP-адрес. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      909.6,
      914.16
    ],
    "en": [
      "This is important, there may be multiple&nbsp; DHCP servers on the local network,&nbsp;&nbsp;"
    ],
    "ru": [
      "Это важно, их может быть несколько & nbsp; DHCP-серверы в локальной сети, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      914.16,
      918.96
    ],
    "en": [
      "and all of them will reply to the&nbsp; client’s Discover message with an Offer.&nbsp;&nbsp;"
    ],
    "ru": [
      "и все они ответят на & nbsp; сообщение клиента \"Обнаружение\" с предложением. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      918.96,
      922.88
    ],
    "en": [
      "So, the client has to tell which&nbsp; server it is accepting the offer from&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, клиент должен указать, какие & nbsp; сервер принимает предложение от & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      922.88,
      931.12
    ],
    "en": [
      "and request to use that IP address. Typically, the&nbsp; client will accept the first Offer it receives."
    ],
    "ru": [
      "и запросить использование этого IP-адреса. Обычно & nbsp; клиент примет первое полученное Предложение."
    ]
  },
  {
    "time": [
      931.12,
      934.4
    ],
    "en": [
      "Let’s look at that Request message in Wireshark.&nbsp;&nbsp;"
    ],
    "ru": [
      "Давайте посмотрим на это сообщение запроса в Wireshark. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      934.4,
      939.6
    ],
    "en": [
      "The destination MAC is all Fs, so this&nbsp; is once again a broadcast message.&nbsp;&nbsp;"
    ],
    "ru": [
      "MAC-адрес назначения - это все буквы F, поэтому здесь & nbsp; снова является широковещательным сообщением. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      939.6,
      944.08
    ],
    "en": [
      "If there are multiple DHCP servers on the&nbsp; network, all of them will receive this&nbsp;&nbsp;"
    ],
    "ru": [
      "Если на & nbsp; сети, все они получат это & ​​nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      944.08,
      950.72
    ],
    "en": [
      "message. One of the later fields will indicate&nbsp; which server the PC accepted the offer from.&nbsp;&nbsp;"
    ],
    "ru": [
      "сообщение. В одном из последних полей будет указано & nbsp; с какого сервера ПК принял предложение. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      950.72,
      957.68
    ],
    "en": [
      "The source IP is still 0.0.0.0, since the offered&nbsp; IP address hasn’t actually been configured yet.&nbsp;&nbsp;"
    ],
    "ru": [
      "Исходный IP-адрес по-прежнему 0.0.0.0, поскольку предлагаемый & nbsp; IP-адрес еще не настроен. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      957.68,
      965.36
    ],
    "en": [
      "The destination is broadcast, 255.255.255.255.&nbsp; Since it’s a message from the client to the&nbsp;&nbsp;"
    ],
    "ru": [
      "Пункт назначения - широковещательный, 255.255.255.255. & Nbsp; Поскольку это сообщение от клиента к & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      965.36,
      973.28
    ],
    "en": [
      "server, the source port is UDP 68 and the&nbsp; destination is UDP 67. And here’s the request&nbsp;&nbsp;"
    ],
    "ru": [
      "сервер, исходный порт - UDP 68, а порт & nbsp; пункт назначения - UDP 67. А вот и запрос & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      973.28,
      979.28
    ],
    "en": [
      "message. Here’s the flags field again, telling&nbsp; the server to send its messages using unicast,&nbsp;&nbsp;"
    ],
    "ru": [
      "сообщение. Вот снова поле флагов, говорящее о том, что & nbsp; сервер для отправки своих сообщений с использованием одноадресной рассылки, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      979.28,
      985.92
    ],
    "en": [
      "even though the client itself uses broadcast. And&nbsp; here are the options for this Request message.&nbsp;&nbsp;"
    ],
    "ru": [
      "хотя сам клиент использует широковещательную рассылку. И & NBSP; вот варианты этого сообщения с запросом. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      985.92,
      991.28
    ],
    "en": [
      "Notice that the server’s IP address is&nbsp; indicated using option 54. If there are&nbsp;&nbsp;"
    ],
    "ru": [
      "Обратите внимание, что IP-адрес сервера & nbsp; указывается с помощью опции 54. Если есть & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      991.28,
      998.8
    ],
    "en": [
      "multiple DHCP servers on the local network, this&nbsp; is how the client says which server it selected."
    ],
    "ru": [
      "несколько DHCP-серверов в локальной сети, это & ​​nbsp; так клиент говорит, какой сервер он выбрал."
    ]
  },
  {
    "time": [
      998.8,
      1005.28
    ],
    "en": [
      "Now the final message in the process, the DHCP&nbsp; Ack, acknowledgement. This is sent from the server&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь последнее сообщение в процессе - DHCP & nbsp; Хорошо, благодарность. Он отправляется с сервера & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1005.28,
      1011.52
    ],
    "en": [
      "to the client, confirming that the client may&nbsp; use the requested IP address. Once this message&nbsp;&nbsp;"
    ],
    "ru": [
      "клиенту, подтверждая, что он может & nbsp; использовать запрошенный IP-адрес. Как только это сообщение & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1011.52,
      1017.76
    ],
    "en": [
      "is received the client finally configures&nbsp; the IP address on its network interface."
    ],
    "ru": [
      "получен клиент, наконец, настраивает & nbsp; IP-адрес в его сетевом интерфейсе."
    ]
  },
  {
    "time": [
      1017.76,
      1020.8
    ],
    "en": [
      "Here’s that Ack message in Wireshark.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот это сообщение подтверждения в Wireshark. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1020.8,
      1026.0
    ],
    "en": [
      "Notice that these messages from the server to the&nbsp; client are once again sent to unicast addresses,&nbsp;&nbsp;"
    ],
    "ru": [
      "Обратите внимание, что эти сообщения от сервера к & nbsp; клиенты снова отправляются на одноадресные адреса, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1026.0,
      1032.16
    ],
    "en": [
      "not broadcast. Let me point out once&nbsp; again that the server uses UDP port 67,&nbsp;&nbsp;"
    ],
    "ru": [
      "не транслируется. Позвольте мне указать один раз & nbsp; еще раз, что сервер использует порт 67 UDP, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1032.16,
      1039.2
    ],
    "en": [
      "so that’s the source port, and the client uses&nbsp; UDP port 68, so that’s the destination port.&nbsp;&nbsp;"
    ],
    "ru": [
      "так что это исходный порт, а клиент использует & nbsp; UDP-порт 68, так что это порт назначения. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1039.2,
      1045.04
    ],
    "en": [
      "And here’s the Ack message. The Bootp flags field&nbsp; once again indicates unicast, because the client&nbsp;&nbsp;"
    ],
    "ru": [
      "А вот и сообщение \"Подтверждение\". Поле Bootp flags & nbsp; еще раз указывает на одноадресную передачу, потому что клиент & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1045.04,
      1052.88
    ],
    "en": [
      "requested unicast messages. Just like the DHCP&nbsp; Offer message, the DHCP Ack message can be either&nbsp;&nbsp;"
    ],
    "ru": [
      "запрошенные одноадресные сообщения. Как и DHCP & nbsp; Сообщение предложения, сообщение DHCP Ack может быть & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1052.88,
      1059.28
    ],
    "en": [
      "broadcast or unicast, depending on what the client&nbsp; requests. And these are the options for this Ack&nbsp;&nbsp;"
    ],
    "ru": [
      "широковещательная или одноадресная передача, в зависимости от того, что клиент & nbsp; Запросы. И вот варианты этого Ack & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1059.28,
      1066.32
    ],
    "en": [
      "message. There are many different DHCP options, if&nbsp; you want to check out a list, the DHCP Wikipedia&nbsp;&nbsp;"
    ],
    "ru": [
      "сообщение. Есть много разных вариантов DHCP, если & nbsp; вы хотите проверить список, DHCP Wikipedia & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1066.32,
      1071.2
    ],
    "en": [
      "page lists a bunch of them, and a quick Google&nbsp; search will give you many explanations of&nbsp;&nbsp;"
    ],
    "ru": [
      "на странице перечислены несколько из них, а также быстрый & nbsp; поиск даст вам множество объяснений & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1071.2,
      1079.04
    ],
    "en": [
      "their various functions. But that’s just&nbsp; extra, not necessary for the CCNA exam."
    ],
    "ru": [
      "их различные функции. Но это просто & nbsp; дополнительно, не обязательно для экзамена CCNA."
    ]
  },
  {
    "time": [
      1079.04,
      1086.24
    ],
    "en": [
      "Here’s a quick summary of that process. A common&nbsp; way to remember the messages is D-O-R-A, DORA,&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот краткое описание этого процесса. Обычный & nbsp; способ запоминания сообщений - D-O-R-A, DORA, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1086.24,
      1092.32
    ],
    "en": [
      "for Discover, Offer, Request, and Ack. Make&nbsp; sure you know which messages are sent from&nbsp;&nbsp;"
    ],
    "ru": [
      "для обнаружения, предложения, запроса и подтверждения. Сделайте & nbsp; Вы точно знаете, какие сообщения отправляются с & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1092.32,
      1098.8
    ],
    "en": [
      "client to server, server to client, and also which&nbsp; messages must be sent broadcast and which can be&nbsp;&nbsp;"
    ],
    "ru": [
      "клиент к серверу, сервер к клиенту, а также который & nbsp; сообщения должны быть отправлены по рассылке и могут быть & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1098.8,
      1105.52
    ],
    "en": [
      "sent either broadcast or unicast. Also, here’s&nbsp; the Release message I showed first, it’s sent&nbsp;&nbsp;"
    ],
    "ru": [
      "отправил либо широковещательную, либо одноадресную рассылку. Кроме того, здесь & nbsp; сообщение о выпуске, которое я показал первым, оно отправлено & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1105.52,
      1112.56
    ],
    "en": [
      "unicast from the client to the server. There are&nbsp; actually many more DHCP message types than these,&nbsp;&nbsp;"
    ],
    "ru": [
      "одноадресная передача от клиента к серверу. Есть & nbsp; на самом деле типов сообщений DHCP гораздо больше, чем этих, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1112.56,
      1118.64
    ],
    "en": [
      "but if you know these message&nbsp; types you’ll be ready for the CCNA."
    ],
    "ru": [
      "но если вы знаете эти сообщения & nbsp; типы, которые вы будете готовы к CCNA."
    ]
  },
  {
    "time": [
      1118.64,
      1122.96
    ],
    "en": [
      "Next let me introduce the concept of DHCP Relay.&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь позвольте мне представить концепцию DHCP Relay. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1122.96,
      1128.08
    ],
    "en": [
      "Some network engineers might choose to&nbsp; configure each router to act as the DHCP server&nbsp;&nbsp;"
    ],
    "ru": [
      "Некоторые сетевые инженеры могут выбрать & nbsp; настроить каждый маршрутизатор для работы в качестве DHCP-сервера & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1128.08,
      1135.36
    ],
    "en": [
      "for its connected LANs. However, large enterprises&nbsp; often choose to use a centralized DHCP server,&nbsp;&nbsp;"
    ],
    "ru": [
      "для подключенных к нему локальных сетей. Однако крупные предприятия & nbsp; часто выбирают централизованный DHCP-сервер, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1135.36,
      1141.76
    ],
    "en": [
      "which will assign IP addresses to DHCP clients&nbsp; in all subnets throughout the enterprise network.&nbsp;&nbsp;"
    ],
    "ru": [
      "который будет назначать IP-адреса DHCP-клиентам & nbsp; во всех подсетях корпоративной сети. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1141.76,
      1148.16
    ],
    "en": [
      "If the server is centralized, it won’t receive&nbsp; the DHCP clients’ broadcast DHCP messages.&nbsp;&nbsp;"
    ],
    "ru": [
      "Если сервер централизованный, он не получит & nbsp; DHCP-клиенты рассылают DHCP-сообщения. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1148.16,
      1154.8
    ],
    "en": [
      "Remember, broadcast messages don’t leave the local&nbsp; subnet, routers don’t forward them. However to&nbsp;&nbsp;"
    ],
    "ru": [
      "Помните, широковещательные сообщения не покидают местный & nbsp; подсети, маршрутизаторы их не пересылают. Однако & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1154.8,
      1161.68
    ],
    "en": [
      "fix this you can configure a router to act as a&nbsp; ‘DHCP relay agent’. If you do that, the router&nbsp;&nbsp;"
    ],
    "ru": [
      "исправить это, вы можете настроить маршрутизатор, чтобы он работал как & nbsp; «Агент DHCP-ретрансляции». Если вы это сделаете, маршрутизатор & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1161.68,
      1169.6
    ],
    "en": [
      "will forward the clients’ broadcast DHCP messages&nbsp; to the remote DHCP server as unicast messages.&nbsp;&nbsp;"
    ],
    "ru": [
      "пересылает широковещательные сообщения DHCP клиентов & nbsp; на удаленный DHCP-сервер в виде одноадресных сообщений. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1169.6,
      1176.88
    ],
    "en": [
      "Let me use this network to demonstrate. PC1&nbsp; is a DHCP client, so it will broadcast a DHCP&nbsp;&nbsp;"
    ],
    "ru": [
      "Позвольте мне использовать эту сеть для демонстрации. PC1 & nbsp; является клиентом DHCP, поэтому он будет транслировать DHCP & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1176.88,
      1183.68
    ],
    "en": [
      "Discover message to ask DHCP servers on the&nbsp; local network to assign it an IP address.&nbsp;&nbsp;"
    ],
    "ru": [
      "Обнаружить сообщение для запроса DHCP-серверов на & nbsp; в локальной сети, чтобы назначить ему IP-адрес. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1183.68,
      1191.44
    ],
    "en": [
      "However, in this case R1 isn’t a DHCP server.&nbsp; SRV1 is the central DHCP server for this network,&nbsp;&nbsp;"
    ],
    "ru": [
      "Однако в этом случае R1 не является DHCP-сервером. & Nbsp; SRV1 является центральным DHCP-сервером для этой сети, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1191.44,
      1198.4
    ],
    "en": [
      "so R1 will need to forward any&nbsp; DHCP messages from PC1 to SRV1."
    ],
    "ru": [
      "поэтому R1 нужно будет переслать любые & nbsp; Сообщения DHCP от ПК1 до SRV1."
    ]
  },
  {
    "time": [
      1198.4,
      1206.96
    ],
    "en": [
      "Let me demonstrate that visually. SRV1 is a&nbsp; DHCP server, and R1 is a DHCP relay agent.&nbsp;&nbsp;"
    ],
    "ru": [
      "Позвольте мне продемонстрировать это наглядно. SRV1 - это & ​​nbsp; DHCP-сервер, а R1 - агент DHCP-ретрансляции. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1206.96,
      1215.44
    ],
    "en": [
      "PC1 broadcasts a DHCP Discover message to get an&nbsp; IP address. R1, a DHCP relay agent, relays the&nbsp;&nbsp;"
    ],
    "ru": [
      "ПК1 передает сообщение DHCP Discover, чтобы получить & nbsp; Айпи адрес. R1, агент ретрансляции DHCP, ретранслирует & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1215.44,
      1222.56
    ],
    "en": [
      "message to SRV1. Notice that the source address&nbsp; changes to the address of R1’s G0/1 interface,&nbsp;&nbsp;"
    ],
    "ru": [
      "сообщение для SRV1. Обратите внимание, что исходный адрес & nbsp; изменяет адрес интерфейса G0 / 1 маршрутизатора R1, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1222.56,
      1229.04
    ],
    "en": [
      "and the destination is SRV1’s IP&nbsp; address. So, it is a unicast message.&nbsp;&nbsp;"
    ],
    "ru": [
      "а местом назначения является IP-адрес SRV1 & nbsp; адрес. Итак, это одноадресное сообщение. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1229.04,
      1235.36
    ],
    "en": [
      "Then SRV1 replies with the DHCP Offer, sending&nbsp; it to the address of R1’s G0/1 interface,&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем SRV1 отвечает предложением DHCP, отправляя & nbsp; на адрес интерфейса G0 / 1 маршрутизатора R1, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1235.36,
      1243.44
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
      1235.36,
      1243.44
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
      1243.44,
      1251.04
    ],
    "en": [
      "and the message is either sent unicast to PC1 or&nbsp; broadcast. Then PC1 broadcasts a request message,&nbsp;&nbsp;"
    ],
    "ru": [
      "и сообщение либо отправляется одноадресно на ПК1, либо & nbsp; транслировать. Затем ПК1 передает сообщение запроса & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1251.04,
      1259.6
    ],
    "en": [
      "and R1 relays it to SRV1. Finally SRV1 replies&nbsp; with a DHCP Ack, and R1 forwards that to PC1,&nbsp;&nbsp;"
    ],
    "ru": [
      "а R1 передает его на SRV1. Наконец, SRV1 отвечает & nbsp; с подтверждением DHCP, и R1 перенаправляет его на ПК1, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1259.6,
      1266.32
    ],
    "en": [
      "which configures the IP address it was&nbsp; assigned, for example 192.168.1.100.&nbsp;&nbsp;"
    ],
    "ru": [
      "который настраивает IP-адрес, который был & nbsp; присвоено, например 192.168.1.100. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1266.32,
      1271.2
    ],
    "en": [
      "So, that’s a quick overview of how DHCP&nbsp; relay agents work. It’s quite easy to&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, это краткий обзор того, как DHCP & nbsp; релейные агенты работают. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1271.2,
      1277.04
    ],
    "en": [
      "configure a DHCP relay agent, you just need&nbsp; one command, and I’ll show you how to do it.&nbsp;&nbsp;"
    ],
    "ru": [
      "настроить агент ретрансляции DHCP, вам просто нужно & nbsp; одну команду, и я покажу вам, как это сделать. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1277.04,
      1282.64
    ],
    "en": [
      "In the next section I’ll show you how to configure&nbsp; DHCP. First, I’ll show you how to configure a&nbsp;&nbsp;"
    ],
    "ru": [
      "В следующем разделе я покажу вам, как настроить & nbsp; DHCP. Сначала я покажу вам, как настроить & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1282.64,
      1290.16
    ],
    "en": [
      "Cisco router as a DHCP server, and then how to&nbsp; configure a Cisco router as a DHCP relay agent.&nbsp;&nbsp;"
    ],
    "ru": [
      "Маршрутизатор Cisco в качестве DHCP-сервера, а затем как & nbsp; настроить маршрутизатор Cisco в качестве агента ретрансляции DHCP. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1290.16,
      1296.56
    ],
    "en": [
      "Finally I’ll show you how to configure&nbsp; a Cisco router as a DHCP client."
    ],
    "ru": [
      "Наконец, я покажу вам, как настроить & nbsp; маршрутизатор Cisco в качестве DHCP-клиента."
    ]
  },
  {
    "time": [
      1296.56,
      1302.16
    ],
    "en": [
      "So, let me show you how to configure a&nbsp; Cisco router to function as a DHCP server.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, позвольте мне показать вам, как настроить & nbsp; Маршрутизатор Cisco для работы в качестве DHCP-сервера. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1302.16,
      1310.68
    ],
    "en": [
      "Let’s use these two devices here, R1 and PC1. Here&nbsp; are the commands. First up, you can use the IP&nbsp;&nbsp;"
    ],
    "ru": [
      "Давайте воспользуемся этими двумя устройствами, R1 и PC1. Здесь & nbsp; это команды. Во-первых, вы можете использовать IP & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1310.68,
      1318.32
    ],
    "en": [
      "DCHP EXCLUDED-ADDRESS command to specify a range&nbsp; of addresses that WON’T be given to DHCP clients.&nbsp;&nbsp;"
    ],
    "ru": [
      "DCHP EXCLUDED-ADDRESS, чтобы указать диапазон & nbsp; адресов, которые НЕ будут передаваться DHCP-клиентам. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1318.32,
      1322.8
    ],
    "en": [
      "These are addresses you want to reserve,&nbsp; perhaps for network devices or servers in&nbsp;&nbsp;"
    ],
    "ru": [
      "Это адреса, которые вы хотите зарезервировать, & nbsp; возможно, для сетевых устройств или серверов в & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1322.8,
      1328.88
    ],
    "en": [
      "the local subnet. The first address in the command&nbsp; is the low end of the range, and then the second&nbsp;&nbsp;"
    ],
    "ru": [
      "локальная подсеть. Первый адрес в команде & nbsp; - нижний предел диапазона, а затем второй & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1328.88,
      1338.8
    ],
    "en": [
      "is the top of the range. So, this reserves all&nbsp; addresses from 192.168.1.1 through 192.168.1.10.&nbsp;&nbsp;"
    ],
    "ru": [
      "это вершина диапазона. Таким образом, это резервирует все & nbsp; адреса с 192.168.1.1 по 192.168.1.10. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1338.8,
      1344.16
    ],
    "en": [
      "This command isn’t necessary, but it’s a good idea&nbsp; to reserve some addresses which can be statically&nbsp;&nbsp;"
    ],
    "ru": [
      "В этой команде нет необходимости, но это хорошая идея. зарезервировать несколько адресов, которые могут быть статически & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1344.16,
      1351.92
    ],
    "en": [
      "assigned to servers, network devices, or whatever.&nbsp; Then use the command IP DHCP POOL, followed by&nbsp;&nbsp;"
    ],
    "ru": [
      "назначены серверам, сетевым устройствам и т. д. & nbsp; Затем используйте команду IP DHCP POOL, а затем & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1351.92,
      1360.56
    ],
    "en": [
      "the pool name, to create a DHCP pool. What is a&nbsp; DHCP pool? It’s basically a subnet of addresses&nbsp;&nbsp;"
    ],
    "ru": [
      "имя пула, чтобы создать пул DHCP. Что такое & nbsp; Пул DHCP? По сути, это подсеть адресов & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1360.56,
      1368.0
    ],
    "en": [
      "that can be assigned to DHCP clients, as well as&nbsp; other info such as DNS server and default gateway.&nbsp;&nbsp;"
    ],
    "ru": [
      "которые могут быть назначены DHCP-клиентам, а также & nbsp; другая информация, например DNS-сервер и шлюз по умолчанию. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1368.0,
      1375.36
    ],
    "en": [
      "You should create a separate DHCP pool for each&nbsp; network the router is acting as a DHCP server for.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вы должны создать отдельный пул DHCP для каждого & nbsp; сеть, для которой маршрутизатор выполняет роль DHCP-сервера. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1375.36,
      1383.68
    ],
    "en": [
      "In this case R1 is only acting as the DHCP server&nbsp; for 192.168.1.0/24, so I only need to create one&nbsp;&nbsp;"
    ],
    "ru": [
      "В этом случае R1 действует только как DHCP-сервер & nbsp; для 192.168.1.0/24, поэтому мне нужно создать только один & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1383.68,
      1390.0
    ],
    "en": [
      "pool. Here’s where you actually configure the&nbsp; range of addresses to be assigned to clients.&nbsp;&nbsp;"
    ],
    "ru": [
      "бассейн. Здесь вы на самом деле настраиваете & nbsp; диапазон адресов, назначаемых клиентам. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1390.0,
      1395.68
    ],
    "en": [
      "The command is NETWORK, followed by the network&nbsp; address and then either the network mask or prefix&nbsp;&nbsp;"
    ],
    "ru": [
      "Команда - СЕТЬ, за которой следует сеть & nbsp; адрес, а затем либо маску сети, либо префикс & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1395.68,
      1404.88
    ],
    "en": [
      "length. So, you can write /24 or 255.255.255.0,&nbsp; either works. So, I told R1 to assign addresses&nbsp;&nbsp;"
    ],
    "ru": [
      "длина. Итак, вы можете написать / 24 или 255.255.255.0, & nbsp; либо работает. Итак, я сказал R1 назначить адреса & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1404.88,
      1412.32
    ],
    "en": [
      "from 192.168.1.0/24 to clients, although it&nbsp; won’t assign the addresses I reserved above.&nbsp;&nbsp;"
    ],
    "ru": [
      "с 192.168.1.0/24 клиентам, хотя это & ​​nbsp; не будет назначать адреса, которые я зарезервировал выше. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1412.32,
      1416.72
    ],
    "en": [
      "Then you can configure the DNS server&nbsp; that clients in the network should use.&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем вы можете настроить DNS-сервер & nbsp; что клиенты в сети должны использовать. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1416.72,
      1425.84
    ],
    "en": [
      "So, in this case R1 would tell PC1 to use Google’s&nbsp; DNS server at 8.8.8.8 for its DNS queries.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, в этом случае R1 скажет ПК1 использовать Google & nbsp; DNS-сервер 8.8.8.8 для своих DNS-запросов. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1425.84,
      1432.0
    ],
    "en": [
      "You can also configure the domain name of the&nbsp; network. In this case R1 will tell PC1 that it&nbsp;&nbsp;"
    ],
    "ru": [
      "Вы также можете настроить доменное имя для & nbsp; сеть. В этом случае R1 сообщит ПК1, что он & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1432.0,
      1438.16
    ],
    "en": [
      "is part of the domain ‘jeremysitlab.com’.&nbsp; Then there’s the DEFAULT-ROUTER command.&nbsp;&nbsp;"
    ],
    "ru": [
      "является частью домена jeremysitlab.com. & nbsp; Затем есть команда DEFAULT-ROUTER. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1438.16,
      1446.16
    ],
    "en": [
      "What’s this? It’s the default gateway. So, R1 will&nbsp; tell clients to use its address, 192.168.1.1, as&nbsp;&nbsp;"
    ],
    "ru": [
      "Что это? Это шлюз по умолчанию. Итак, R1 будет & nbsp; указать клиентам использовать его адрес 192.168.1.1 как & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1446.16,
      1454.96
    ],
    "en": [
      "their default gateway. You can also configure the&nbsp; lease time. I specified 0 5 30, which is 0 days,&nbsp;&nbsp;"
    ],
    "ru": [
      "их шлюз по умолчанию. Вы также можете настроить & nbsp; Время аренды. Я указал 0 5 30, что составляет 0 дней, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1454.96,
      1461.6
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
      1454.96,
      1461.6
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
      1461.6,
      1468.72
    ],
    "en": [
      "not recommended. So, when PC1 comes online&nbsp; and sends its DHCP Discover message, perhaps&nbsp;&nbsp;"
    ],
    "ru": [
      "не рекомендуется. Итак, когда ПК1 выйдет в сеть & nbsp; и отправляет свое сообщение DHCP Discover, возможно, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1468.72,
      1476.08
    ],
    "en": [
      "it will be assigned .11, the first available&nbsp; address since .1 through .10 are reserved."
    ],
    "ru": [
      "ему будет присвоен .11, первый доступный & nbsp; адреса с .1 по .10 зарезервированы."
    ]
  },
  {
    "time": [
      1476.08,
      1482.4
    ],
    "en": [
      "Let’s confirm. Here’s a really useful command&nbsp; on a Cisco router acting as a DHCP server,&nbsp;&nbsp;"
    ],
    "ru": [
      "Подтвердим. Вот действительно полезная команда & nbsp; на маршрутизаторе Cisco, выступающем в качестве DHCP-сервера, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1482.4,
      1490.64
    ],
    "en": [
      "SHOW IP DHCP BINDING. It shows all of the DHCP&nbsp; clients that are currently assigned IP addresses.&nbsp;&nbsp;"
    ],
    "ru": [
      "ПОКАЗАТЬ ПРИВЯЗКУ IP DHCP. Он показывает все DHCP & nbsp; клиенты, которым в настоящее время назначены IP-адреса. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1490.64,
      1498.88
    ],
    "en": [
      "Here’s PC1, with an IP address of 192.168.1.11.&nbsp; Its MAC address is also displayed, and the&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот ПК1 с IP-адресом 192.168.1.11. & Nbsp; Также отображается его MAC-адрес, и значок & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1498.88,
      1505.44
    ],
    "en": [
      "lease expiration date and time, and the binding&nbsp; type. DHCP bindings can be manually configured,&nbsp;&nbsp;"
    ],
    "ru": [
      "дата и время истечения срока аренды, а также привязка & NBSP; тип. Привязки DHCP можно настроить вручную, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1505.44,
      1510.48
    ],
    "en": [
      "but we didn’t do that in this&nbsp; case. So let’s check on PC1.&nbsp;&nbsp;"
    ],
    "ru": [
      "но мы этого не делали в & nbsp; кейс. Итак, давайте проверим на ПК1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1510.48,
      1518.08
    ],
    "en": [
      "Here’s the domain name, jeremysitlab.com. Here’s&nbsp; the IP address and subnet mask it was assigned.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот доменное имя jeremysitlab.com. Вот & nbsp; назначенный IP-адрес и маска подсети. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1518.08,
      1522.4
    ],
    "en": [
      "Here we can see when the lease was&nbsp; obtained and when it will expire.&nbsp;&nbsp;"
    ],
    "ru": [
      "Здесь мы можем увидеть, когда аренда была & nbsp; получены и когда истечет срок его действия. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1522.4,
      1528.64
    ],
    "en": [
      "Notice that the lease period is 5 hours and 30&nbsp; minutes, as I configured. The lease expiration&nbsp;&nbsp;"
    ],
    "ru": [
      "Обратите внимание, что срок аренды составляет 5 часов 30 & nbsp; минут, как я настроил. Истечение срока аренды & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1528.64,
      1534.8
    ],
    "en": [
      "times on PC1 and R1 are different, but that’s&nbsp; just because I didn’t configure the time zone.&nbsp;&nbsp;"
    ],
    "ru": [
      "время на ПК1 и R1 разное, но это & ​​nbsp; просто потому, что я не настраивал часовой пояс. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1534.8,
      1538.48
    ],
    "en": [
      "And finally we can see the&nbsp; default gateway, DHCP server,&nbsp;&nbsp;"
    ],
    "ru": [
      "И, наконец, мы можем увидеть & nbsp; шлюз по умолчанию, DHCP-сервер, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1538.48,
      1545.6
    ],
    "en": [
      "and DNS server. So, we successfully&nbsp; configured R1 as a DHCP server."
    ],
    "ru": [
      "и DNS-сервер. Итак, мы успешно & nbsp; настроил R1 как DHCP-сервер."
    ]
  },
  {
    "time": [
      1545.6,
      1552.0
    ],
    "en": [
      "Now, how about DHCP relay agent configuration?&nbsp; Here’s that same network as before,&nbsp;&nbsp;"
    ],
    "ru": [
      "А как насчет настройки агента ретрансляции DHCP? & Nbsp; Вот та же сеть, что и раньше, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1552.0,
      1559.68
    ],
    "en": [
      "SRV1 is a DHCP server and R1 will be a&nbsp; DHCP relay agent after we configure it.&nbsp;&nbsp;"
    ],
    "ru": [
      "SRV1 - это DHCP-сервер, а R1 - это & ​​nbsp; Агент ретрансляции DHCP после его настройки. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1559.68,
      1565.28
    ],
    "en": [
      "To configure it as a relay agent, first enter&nbsp; interface config mode for the interface connected&nbsp;&nbsp;"
    ],
    "ru": [
      "Чтобы настроить его в качестве агента ретрансляции, сначала введите & nbsp; режим конфигурации интерфейса для подключенного интерфейса & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1565.28,
      1573.68
    ],
    "en": [
      "to the client devices. PC1 is connected to R1’s&nbsp; g0/1, so we will configure that interface. Then&nbsp;&nbsp;"
    ],
    "ru": [
      "на клиентские устройства. ПК1 подключен к & nbsp; g0 / 1, поэтому мы настроим этот интерфейс. Затем & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1573.68,
      1581.12
    ],
    "en": [
      "all you need is one command, IP HELPER-ADDRESS,&nbsp; followed by the IP address of the DHCP server.&nbsp;&nbsp;"
    ],
    "ru": [
      "все, что вам нужно, это одна команда, IP HELPER-ADDRESS, & nbsp; за которым следует IP-адрес DHCP-сервера. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1581.12,
      1585.84
    ],
    "en": [
      "Of course, make sure R1 actually&nbsp; has a route to the DHCP server.&nbsp;&nbsp;"
    ],
    "ru": [
      "Конечно, убедитесь, что R1 действительно & nbsp; имеет маршрут к DHCP-серверу. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1585.84,
      1592.56
    ],
    "en": [
      "If it doesn’t have a route, configure a static&nbsp; route or use a dynamic routing protocol like OSPF.&nbsp;&nbsp;"
    ],
    "ru": [
      "Если у него нет маршрута, настройте статический & nbsp; маршрутизировать или использовать протокол динамической маршрутизации, например OSPF. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1592.56,
      1598.96
    ],
    "en": [
      "After configuring that I checked the interface&nbsp; with SHOW IP INTERFACE G0/1. Notice that the&nbsp;&nbsp;"
    ],
    "ru": [
      "После настройки я проверил интерфейс & nbsp; с ПОКАЗАТЬ IP-ИНТЕРФЕЙС G0 / 1. Обратите внимание, что & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1598.96,
      1607.12
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
      1598.96,
      1607.12
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
      1607.12,
      1616.64
    ],
    "en": [
      "to do to configure a router as a DHCP relay agent.&nbsp; IP HELPER-ADDRESS, then the DHCP server address."
    ],
    "ru": [
      "сделать, чтобы настроить маршрутизатор в качестве агента ретрансляции DHCP. & nbsp; IP HELPER-ADDRESS, затем адрес DHCP-сервера."
    ]
  },
  {
    "time": [
      1616.64,
      1621.44
    ],
    "en": [
      "Okay, one last thing you need to be able to&nbsp; configure for the CCNA. A Cisco router can&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, и последнее, что вам нужно, чтобы & nbsp; настроить для CCNA. Маршрутизатор Cisco может & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1621.44,
      1628.56
    ],
    "en": [
      "be a DHCP client, meaning it can use DHCP to&nbsp; configure the IP address of its interfaces.&nbsp;&nbsp;"
    ],
    "ru": [
      "быть клиентом DHCP, то есть он может использовать DHCP для & nbsp; настроить IP-адрес его интерфейсов. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1628.56,
      1632.96
    ],
    "en": [
      "This is rare, as I mentioned earlier usually&nbsp; network devices will be configured with a&nbsp;&nbsp;"
    ],
    "ru": [
      "Это редко, как я уже упоминал ранее, обычно & nbsp; сетевые устройства будут настроены с помощью & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1632.96,
      1640.08
    ],
    "en": [
      "fixed IP address. However here’s how you&nbsp; can do it. Let’s make R2 a DHCP client&nbsp;&nbsp;"
    ],
    "ru": [
      "фиксированный IP-адрес. Однако вот как вы & nbsp; может сделать это. Давайте сделаем R2 клиентом DHCP & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1640.08,
      1649.28
    ],
    "en": [
      "on its G0/1 interface. From interface config&nbsp; mode for G0/1, use the command IP ADDRESS DHCP.&nbsp;&nbsp;"
    ],
    "ru": [
      "на его интерфейсе G0 / 1. Из конфигурации интерфейса & nbsp; в режиме G0 / 1 используйте команду IP-АДРЕС DHCP. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1649.28,
      1657.76
    ],
    "en": [
      "That’s it, now R2 will broadcast a DHCP Discover&nbsp; message and get an IP address from SRV1. Indeed&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот и все, теперь R2 будет транслировать DHCP Discover & nbsp; сообщение и получите IP-адрес от SRV1. Действительно & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1657.76,
      1666.88
    ],
    "en": [
      "it did, I checked with SHOW IP INTERFACE G0/1.&nbsp; It states clearly, ‘address determined by DHCP’.&nbsp;&nbsp;"
    ],
    "ru": [
      "да, я проверил с SHOW IP INTERFACE G0 / 1. & nbsp; В нем четко указано, «адрес определяется DHCP». & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1666.88,
      1674.8
    ],
    "en": [
      "Note that its G0/0 interface is still&nbsp; manually configured, its not a DHCP client."
    ],
    "ru": [
      "Обратите внимание, что его интерфейс G0 / 0 по-прежнему & nbsp; настраивается вручную, это не DHCP-клиент."
    ]
  },
  {
    "time": [
      1674.8,
      1677.84
    ],
    "en": [
      "Here’s a summary of the commands&nbsp; we covered in this video.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот краткое описание команд & nbsp; мы рассмотрели в этом видео. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1677.84,
      1680.4
    ],
    "en": [
      "A couple commands for the Windows command prompt,&nbsp;&nbsp;"
    ],
    "ru": [
      "Пара команд для командной строки Windows, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1680.4,
      1688.64
    ],
    "en": [
      "then Cisco IOS commands to configure a DHCP&nbsp; server, a DHCP relay agent, and a DHCP client.&nbsp;&nbsp;"
    ],
    "ru": [
      "затем команды Cisco IOS для настройки DHCP & nbsp; сервер, агент ретрансляции DHCP и клиент DHCP."
    ]
  },
  {
    "time": [
      1688.64,
      1693.92
    ],
    "en": [
      "If you don’t remember any of these commands, go&nbsp; back in the video to review. You can also get&nbsp;&nbsp;"
    ],
    "ru": [
      "Если вы не помните ни одну из этих команд, перейдите & nbsp; вернуться в видео для обзора. Вы также можете получить & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1693.92,
      1700.72
    ],
    "en": [
      "practice with some of these commands in today’s&nbsp; practice lab, which will be in the next video."
    ],
    "ru": [
      "попрактикуйтесь с некоторыми из этих команд в сегодняшней & nbsp; практическая лаборатория, о которой будет в следующем видео."
    ]
  },
  {
    "time": [
      1700.72,
      1705.28
    ],
    "en": [
      "Before moving on to the quiz, let’s&nbsp; review what we covered in this video.&nbsp;&nbsp;"
    ],
    "ru": [
      "Прежде чем перейти к викторине, давайте & nbsp; просмотрите то, что мы рассмотрели в этом видео. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1705.28,
      1710.96
    ],
    "en": [
      "First, I introduced the purpose of DHCP. It&nbsp; allows devices to automatically learn various&nbsp;&nbsp;"
    ],
    "ru": [
      "Сначала я рассказал о назначении DHCP. Это & nbsp; позволяет устройствам автоматически изучать различные & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1710.96,
      1717.52
    ],
    "en": [
      "configuration parameters, such as their IP&nbsp; address, subnet mask, default gateway, etc.&nbsp;&nbsp;"
    ],
    "ru": [
      "параметры конфигурации, такие как их IP & nbsp; адрес, маска подсети, шлюз по умолчанию и т. д. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1717.52,
      1724.48
    ],
    "en": [
      "I introduced the basic functions of DHCP. Make&nbsp; sure you remember DORA, Discover, Offer, Request,&nbsp;&nbsp;"
    ],
    "ru": [
      "Я познакомил вас с основными функциями DHCP. Сделайте & nbsp; обязательно помните DORA, Discover, Offer, Request, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1724.48,
      1731.76
    ],
    "en": [
      "and Ack. You should also know the basic&nbsp; purpose and functions of a DHCP relay agent.&nbsp;&nbsp;"
    ],
    "ru": [
      "и Ack. Вы также должны знать основные & nbsp; назначение и функции агента ретрансляции DHCP. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1731.76,
      1736.0
    ],
    "en": [
      "Finally I showed you how to&nbsp; configure DHCP in Cisco IOS.&nbsp;&nbsp;"
    ],
    "ru": [
      "Наконец, я показал вам, как & nbsp; настроить DHCP в Cisco IOS. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1736.0,
      1742.72
    ],
    "en": [
      "First, how to configure a Cisco router as a DHCP&nbsp; server, then a DHCP relay agent, and finally a&nbsp;&nbsp;"
    ],
    "ru": [
      "Во-первых, как настроить маршрутизатор Cisco как DHCP & nbsp; сервер, затем агент ретрансляции DHCP и, наконец, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1742.72,
      1749.12
    ],
    "en": [
      "DHCP client. Make sure to watch until the end&nbsp; of the quiz for a bonus question from Boson&nbsp;&nbsp;"
    ],
    "ru": [
      "DHCP-клиент. Обязательно досмотрите до конца & nbsp; викторины на бонусный вопрос от Boson & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1749.12,
      1758.64
    ],
    "en": [
      "Software’s ExSim for CCNA, the best practice exams&nbsp; for the CCNA. Okay, let’s go to quiz question 1."
    ],
    "ru": [
      "ExSim программного обеспечения для CCNA, экзамены по передовой практике & nbsp; для CCNA. Хорошо, перейдем к вопросу 1 викторины."
    ]
  },
  {
    "time": [
      1758.64,
      1764.72
    ],
    "en": [
      "What is the correct order of messages when a&nbsp; DHCP client gets an IP address from a server?&nbsp;&nbsp;"
    ],
    "ru": [
      "Каков правильный порядок сообщений, когда & nbsp; DHCP-клиент получает IP-адрес от сервера? & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1764.72,
      1771.68
    ],
    "en": [
      "Here are the options. Pause the&nbsp; video to think about the answer."
    ],
    "ru": [
      "Вот варианты. Приостановите & nbsp; видео, чтобы подумать над ответом."
    ]
  },
  {
    "time": [
      1771.68,
      1778.48
    ],
    "en": [
      "The answer is B, Discover, Offer, Request, Ack.&nbsp; If you’re having trouble remembering the order,&nbsp;&nbsp;"
    ],
    "ru": [
      "Ответ: B, Discover, Offer, Request, Ack. & Nbsp; Если вам не удается запомнить заказ, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1778.48,
      1785.44
    ],
    "en": [
      "remember D-O-R-A, DORA.&nbsp; Okay, let’s go to question 2."
    ],
    "ru": [
      "помните D-O-R-A, DORA. & nbsp; Хорошо, перейдем к вопросу 2."
    ]
  },
  {
    "time": [
      1785.44,
      1790.64
    ],
    "en": [
      "Which of the following Windows command prompt&nbsp; commands will cause a PC to broadcast a DHCP&nbsp;&nbsp;"
    ],
    "ru": [
      "Какая из следующих команд Windows & nbsp; команды заставят ПК транслировать DHCP & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1790.64,
      1798.48
    ],
    "en": [
      "Discover message? Here are the options.&nbsp; Pause the video to think about the answer."
    ],
    "ru": [
      "Обнаружить сообщение? Вот варианты. Поставьте видео на паузу, чтобы подумать над ответом."
    ]
  },
  {
    "time": [
      1798.48,
      1806.32
    ],
    "en": [
      "The answer is D, IPCONFIG /RENEW. This will&nbsp; cause the PC to send a DHCP Discover message&nbsp;&nbsp;"
    ],
    "ru": [
      "Ответ - D, IPCONFIG / RENEW. Это & nbsp; заставить ПК отправлять сообщение DHCP Discover & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1806.32,
      1810.56
    ],
    "en": [
      "to get an IP address from any&nbsp; DHCP servers it can reach.&nbsp;&nbsp;"
    ],
    "ru": [
      "чтобы получить IP-адрес с любого & nbsp; Доступные DHCP-серверы. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1810.56,
      1816.48
    ],
    "en": [
      "C, IPCONFIG /RELEASE will make the&nbsp; PC send a DHCP Release message,&nbsp;&nbsp;"
    ],
    "ru": [
      "C, IPCONFIG / RELEASE сделает & nbsp; ПК отправляет сообщение об освобождении DHCP, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1816.48,
      1826.32
    ],
    "en": [
      "to release its current IP address. A and B are&nbsp; not real commands. Okay, let’s go to question 3."
    ],
    "ru": [
      "чтобы освободить его текущий IP-адрес. A и B - это & ​​nbsp; не настоящие команды. Хорошо, перейдем к вопросу 3."
    ]
  },
  {
    "time": [
      1826.32,
      1833.68
    ],
    "en": [
      "Examine the following DHCP Offer message that&nbsp; SRV1 sent to R2. What destination IP address&nbsp;&nbsp;"
    ],
    "ru": [
      "Изучите следующее сообщение о предложении DHCP, которое & nbsp; SRV1 отправлен на R2. Какой IP-адрес назначения & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1833.68,
      1842.96
    ],
    "en": [
      "did SRV1 send it to? Here are the options.&nbsp; Pause the video to select the correct answer."
    ],
    "ru": [
      "это SRV1 отправил? Вот варианты. Поставьте видео на паузу, чтобы выбрать правильный ответ."
    ]
  },
  {
    "time": [
      1842.96,
      1850.32
    ],
    "en": [
      "The answer is D, 255.255.255.255. How can&nbsp; we know this from this output, even though&nbsp;&nbsp;"
    ],
    "ru": [
      "Ответ - D, 255.255.255.255. Как можно & nbsp; мы знаем это из этого вывода, хотя & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1850.32,
      1858.16
    ],
    "en": [
      "I didn’t show the IP header? It’s here, the&nbsp; broadcast flag in the Bootp flags field is set.&nbsp;&nbsp;"
    ],
    "ru": [
      "Я не показывал заголовок IP? Здесь & nbsp; установлен флаг широковещания в поле Bootp flags. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1858.16,
      1863.52
    ],
    "en": [
      "In the previous examples, this field was unicast,&nbsp; so the server would send unicast messages to the&nbsp;&nbsp;"
    ],
    "ru": [
      "В предыдущих примерах это поле было одноадресным, & nbsp; чтобы сервер отправлял одноадресные сообщения на & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1863.52,
      1870.56
    ],
    "en": [
      "client. However in this case it is broadcast, so&nbsp; the server will broadcast messages to the client.&nbsp;&nbsp;"
    ],
    "ru": [
      "клиент. Однако в этом случае он транслируется, поэтому & nbsp; сервер будет транслировать сообщения клиенту. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1870.56,
      1880.48
    ],
    "en": [
      "Therefore, the destination IP address is&nbsp; 255.255.255.255. Okay, let’s go to question 4."
    ],
    "ru": [
      "Следовательно, IP-адрес назначения & nbsp; 255.255.255.255. Хорошо, перейдем к вопросу 4."
    ]
  },
  {
    "time": [
      1880.48,
      1887.52
    ],
    "en": [
      "Which of the following DHCP messages can be sent&nbsp; using unicast? (select all that apply) Here are&nbsp;&nbsp;"
    ],
    "ru": [
      "Какие из следующих сообщений DHCP можно отправлять & nbsp; используя одноадресную передачу? (выберите все подходящие варианты) Вот & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1887.52,
      1892.88
    ],
    "en": [
      "the options. Note that this includes messages&nbsp; that can be sent either unicast or broadcast,&nbsp;&nbsp;"
    ],
    "ru": [
      "варианты. Обратите внимание, что сюда входят сообщения & nbsp; которые могут быть отправлены как одноадресной, так и широковещательной, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1892.88,
      1902.0
    ],
    "en": [
      "as well as messages that are always sent unicast.&nbsp; Okay, pause the video to think about the answers."
    ],
    "ru": [
      "а также сообщения, которые всегда отправляются в одноадресном режиме. & nbsp; Хорошо, останови видео, чтобы подумать над ответами."
    ]
  },
  {
    "time": [
      1902.0,
      1910.4
    ],
    "en": [
      "The answers are A, DHCP Ack, C,&nbsp; DHCP Release, and E, DHCP Offer.&nbsp;&nbsp;"
    ],
    "ru": [
      "Ответы: A, DHCP Ack, C, & nbsp; Выпуск DHCP и E, предложение DHCP. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1910.4,
      1914.72
    ],
    "en": [
      "A and E are messages sent from&nbsp; the DHCP server to the client,&nbsp;&nbsp;"
    ],
    "ru": [
      "A и E - это сообщения, отправленные от & nbsp; DHCP-сервер клиенту, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1914.72,
      1920.8
    ],
    "en": [
      "and they can be sent using unicast if the&nbsp; client indicates it in the ‘bootp flags’ field.&nbsp;&nbsp;"
    ],
    "ru": [
      "и их можно отправлять с помощью одноадресной рассылки, если & nbsp; клиент указывает это в поле «bootp flags». & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1920.8,
      1928.56
    ],
    "en": [
      "C is sent by a DHCP client to its DHCP server, to&nbsp; tell the server it no longer needs its IP address.&nbsp;&nbsp;"
    ],
    "ru": [
      "C отправляется DHCP-клиентом своему DHCP-серверу на & nbsp; сообщить серверу, что ему больше не нужен IP-адрес. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1928.56,
      1938.16
    ],
    "en": [
      "It is sent unicast. B and D are always broadcast&nbsp; messages. Okay, let’s go to question 5."
    ],
    "ru": [
      "Он отправляется одноадресной рассылкой. B и D всегда транслируются & nbsp; Сообщения. Хорошо, перейдем к вопросу 5."
    ]
  },
  {
    "time": [
      1938.16,
      1944.4
    ],
    "en": [
      "In which of the following situations would you&nbsp; configure a router as a DHCP relay agent? Here&nbsp;&nbsp;"
    ],
    "ru": [
      "В какой из следующих ситуаций вы бы & nbsp; настроить маршрутизатор в качестве агента ретрансляции DHCP? Здесь & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1944.4,
      1954.16
    ],
    "en": [
      "are the options. Read them carefully, and&nbsp; select the best answer. Pause the video now."
    ],
    "ru": [
      "варианты. Прочтите их внимательно и & nbsp; выберите лучший ответ. Приостановите видео сейчас."
    ]
  },
  {
    "time": [
      1954.16,
      1960.88
    ],
    "en": [
      "Okay the answer is A, when the router is&nbsp; not a DHCP server, there are DHCP clients&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, ответ - A, когда маршрутизатор & nbsp; не DHCP-сервер, есть DHCP-клиенты & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1960.88,
      1966.72
    ],
    "en": [
      "in the router’s connected LAN, and there is&nbsp; no other DHCP server in the connected LAN.&nbsp;&nbsp;"
    ],
    "ru": [
      "в подключенной локальной сети маршрутизатора, и есть & nbsp; в подключенной локальной сети нет другого DHCP-сервера. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1966.72,
      1973.04
    ],
    "en": [
      "B, C, and D do not require the router to&nbsp; be a DHCP relay agent. Okay, that’s all&nbsp;&nbsp;"
    ],
    "ru": [
      "B, C и D не требуют, чтобы маршрутизатор & nbsp; быть агентом ретрансляции DHCP. Хорошо, это все & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1973.04,
      1980.96
    ],
    "en": [
      "for the quiz. Now let’s take a look at a bonus&nbsp; question in Boson Software’s ExSim for CCNA."
    ],
    "ru": [
      "для викторины. Теперь давайте посмотрим на бонус & nbsp; вопрос в ExSim от Boson Software для CCNA."
    ]
  },
  {
    "time": [
      1980.96,
      1984.8
    ],
    "en": [
      "Okay here's today's Boson ExSim practice question.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, вот сегодняшний вопрос о практике Boson ExSim. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1984.8,
      1990.24
    ],
    "en": [
      "You are the administrator for the network&nbsp; shown above. DHCP services for the network&nbsp;&nbsp;"
    ],
    "ru": [
      "Вы являетесь администратором сети & nbsp; показано выше. Службы DHCP для сети & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1990.24,
      1997.44
    ],
    "en": [
      "are provided by the DHCP server on NetworkB.&nbsp; DHCP services are not running on the routers.&nbsp;&nbsp;"
    ],
    "ru": [
      "предоставляются DHCP-сервером в сети B. & nbsp; Службы DHCP не работают на маршрутизаторах. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1997.44,
      2001.68
    ],
    "en": [
      "Which of the following commands should you&nbsp; issue to enable clients on NetworkA to receive&nbsp;&nbsp;"
    ],
    "ru": [
      "Какую из следующих команд следует & nbsp; проблема, позволяющая клиентам в NetworkA получать & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2001.68,
      2008.4
    ],
    "en": [
      "IP addresses from the DHCP server? Select the&nbsp; best answer. Okay, so these are the options.&nbsp;&nbsp;"
    ],
    "ru": [
      "IP-адреса от DHCP-сервера? Выберите & nbsp; лучший ответ. Хорошо, вот варианты. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2008.4,
      2014.48
    ],
    "en": [
      "IP HELPER-ADDRESS commands, so which router&nbsp; should you use the command on, and what should&nbsp;&nbsp;"
    ],
    "ru": [
      "IP HELPER-ADDRESS команды, так что маршрутизатор & nbsp; следует ли использовать команду и что следует & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2014.48,
      2024.96
    ],
    "en": [
      "be the IP address you enter in the command? Okay,&nbsp; pause the video now to think about your answer.&nbsp;&nbsp;"
    ],
    "ru": [
      "быть IP-адресом, который вы вводите в команде? Хорошо, & nbsp; приостановите видео сейчас, чтобы обдумать свой ответ. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2024.96,
      2031.68
    ],
    "en": [
      "Okay let's check. So, these clients&nbsp; here in NetworkA are DHCP clients,&nbsp;&nbsp;"
    ],
    "ru": [
      "Ладно, проверим. Итак, эти клиенты & nbsp; здесь, в NetworkA, находятся клиенты DHCP, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2031.68,
      2037.12
    ],
    "en": [
      "or they want to be DHCP clients. So they&nbsp; need to access the DHCP server here.&nbsp;&nbsp;"
    ],
    "ru": [
      "или они хотят быть клиентами DHCP. Итак, они & nbsp; здесь необходимо получить доступ к DHCP-серверу. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2037.12,
      2044.96
    ],
    "en": [
      "So they will broadcast DHCP Discover messages&nbsp; which RouterA will receive. Now, RouterA is not&nbsp;&nbsp;"
    ],
    "ru": [
      "Таким образом, они будут транслировать сообщения DHCP Discover & nbsp; который получит RouterA. Теперь RouterA - это не & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2044.96,
      2054.16
    ],
    "en": [
      "a DHCP server, but we have to configure it as a&nbsp; DHCP relay agent. So, among the answers, C, D,&nbsp;&nbsp;"
    ],
    "ru": [
      "DHCP-сервер, но мы должны настроить его как & nbsp; Агент ретрансляции DHCP. Итак, среди ответов C, D, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2054.16,
      2061.44
    ],
    "en": [
      "and F have you issuing the command on RouterA.&nbsp; So the correct answer is one of these three.&nbsp;&nbsp;"
    ],
    "ru": [
      "и F вы вводите команду на RouterA. & nbsp; Итак, правильный ответ - один из этих трех. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2061.44,
      2067.84
    ],
    "en": [
      "Okay, so what should be the IP address? The&nbsp; command is IP HELPER-ADDRESS, and then the IP&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, каким должен быть IP-адрес? & Nbsp; команда - это СПРАВКА-АДРЕС IP, а затем IP & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2067.84,
      2078.4
    ],
    "en": [
      "address of the DHCP server. So that is 10.10.3.5,&nbsp; therefore the answer should be F. So let's check.&nbsp;&nbsp;"
    ],
    "ru": [
      "адрес DHCP-сервера. Итак, это 10.10.3.5, & nbsp; поэтому ответ должен быть F. Итак, давайте проверим. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2078.4,
      2085.68
    ],
    "en": [
      "And that is correct. So, you can&nbsp; read Boson's explanation down here,&nbsp;&nbsp;"
    ],
    "ru": [
      "И это правильно. Итак, вы можете & nbsp; прочтите объяснение Бозона здесь, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2085.68,
      2097.36
    ],
    "en": [
      "including some explanation about the IP&nbsp; HELPER-ADDRESS command, it's not only for DHCP.&nbsp;&nbsp;"
    ],
    "ru": [
      "включая некоторые пояснения об IP & nbsp; Команда HELPER-ADDRESS, она не только для DHCP. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2097.36,
      2102.16
    ],
    "en": [
      "Okay and that's Boson's explanation, and they&nbsp; have a reference here to some Cisco documentation&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, это объяснение Бозона, и они & nbsp; здесь есть ссылка на некоторую документацию Cisco & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2102.16,
      2107.44
    ],
    "en": [
      "about the IP HELPER-ADDRESS command.&nbsp;&nbsp;"
    ],
    "ru": [
      "о команде IP HELPER-ADDRESS. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2107.44,
      2112.16
    ],
    "en": [
      "Okay so that's Boson ExSim for the CCNA.&nbsp; These are without a doubt the best practice&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, это Boson ExSim для CCNA. & Nbsp; Это, без сомнения, лучшая практика & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2112.16,
      2116.88
    ],
    "en": [
      "exams for the CCNA, and they're the&nbsp; ones I used to get my certification.&nbsp;&nbsp;"
    ],
    "ru": [
      "экзамены на CCNA, и они & nbsp; те, которые я использовал для получения сертификата. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2116.88,
      2123.12
    ],
    "en": [
      "If you want to get Boson ExSim, follow&nbsp; the link in the video description."
    ],
    "ru": [
      "Если вы хотите получить Boson ExSim, подпишитесь на & nbsp; ссылка в описании видео."
    ]
  },
  {
    "time": [
      2123.12,
      2126.32
    ],
    "en": [
      "There are supplementary materials for this video.&nbsp;&nbsp;"
    ],
    "ru": [
      "К этому видео есть дополнительные материалы. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2126.32,
      2130.48
    ],
    "en": [
      "There is a flashcard deck to use with&nbsp; the software ‘Anki’. There will also&nbsp;&nbsp;"
    ],
    "ru": [
      "Существует колода карточек для использования с & nbsp; программное обеспечение «Анки». Также будет & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2130.48,
      2134.64
    ],
    "en": [
      "be a packet tracer practice lab so&nbsp; you can get some hands-on practice.&nbsp;&nbsp;"
    ],
    "ru": [
      "быть практической лабораторией по отслеживанию пакетов, чтобы & nbsp; вы можете попрактиковаться. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2134.64,
      2140.08
    ],
    "en": [
      "That will be in the next video. Sign up for my&nbsp; mailing list via the link in the description,&nbsp;&nbsp;"
    ],
    "ru": [
      "Об этом будет в следующем видео. Подпишитесь на мою & nbsp; список рассылки по ссылке в описании & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2140.08,
      2146.32
    ],
    "en": [
      "and I’ll send you all of the flashcards&nbsp; and packet tracer lab files for the course."
    ],
    "ru": [
      "и я пришлю вам все карточки & nbsp; и лабораторные файлы программы трассировки пакетов для курса."
    ]
  },
  {
    "time": [
      2146.32,
      2152.16
    ],
    "en": [
      "Before finishing today’s video I want to&nbsp; thank my JCNP-level channel members. To join,&nbsp;&nbsp;"
    ],
    "ru": [
      "Прежде чем закончить сегодняшнее видео, я хочу & nbsp; спасибо моим участникам канала уровня JCNP. Чтобы присоединиться, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2152.16,
      2159.12
    ],
    "en": [
      "please click the ‘Join’ button under the video.&nbsp; Thank you to Brandon, Samil, Aaron, Tech Alameda,&nbsp;&nbsp;"
    ],
    "ru": [
      "нажмите кнопку «Присоединиться» под видео. & nbsp; Спасибо Брэндону, Самилу, Аарону, Тех Аламеда, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2159.12,
      2165.52
    ],
    "en": [
      "Marcel, Magrathea, Kone, Donald, C Mohd,&nbsp; Gustavo, Anthony, Biraj, Junhong, Njabulo,&nbsp;&nbsp;"
    ],
    "ru": [
      "Марсель, Магратея, Коне, Дональд, К. Мохд, & nbsp; Густаво, Энтони, Бирадж, Джунхонг, Нджабуло, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2165.52,
      2172.0
    ],
    "en": [
      "Benjamin, Tshepiso, Justin, Prakaash, Nasir,&nbsp; Erlison, Apogee, Marko, Daming, Jhilmar, Ed,&nbsp;&nbsp;"
    ],
    "ru": [
      "Бенджамин, Чеписо, Джастин, Пракааш, Насир, & NBSP; Эрлисон, Апогей, Марко, Даминг, Джилмар, Эд, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2172.0,
      2179.84
    ],
    "en": [
      "Value, John, Funnydart, Velvijaykum, Mark, Yousif,&nbsp; Boson Software, Devin, Lito, Yonatan, and Vance.&nbsp;&nbsp;"
    ],
    "ru": [
      "Валю, Джон, Фаннидарт, Велвиджайкум, Марк, Юсиф, & nbsp; Boson Software, Девин, Лито, Йонатан и Вэнс. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2179.84,
      2185.04
    ],
    "en": [
      "Sorry if I pronounced your name incorrectly,&nbsp; but thank you so much for your support.&nbsp;&nbsp;"
    ],
    "ru": [
      "Извините, если я неправильно произнес ваше имя, & nbsp; но большое спасибо за вашу поддержку. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2185.04,
      2192.64
    ],
    "en": [
      "This is the list of JCNP-level members at the&nbsp; time of recording by the way, January 24th 2021.&nbsp;&nbsp;"
    ],
    "ru": [
      "Это список участников уровня JCNP на & nbsp; время записи, кстати, 24 января 2021 г. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2192.64,
      2200.32
    ],
    "en": [
      "If you signed up recently and your name isn’t&nbsp; on here don’t worry, you’ll be in future videos."
    ],
    "ru": [
      "Если вы зарегистрировались недавно и ваше имя не & nbsp; здесь не волнуйтесь, вы будете в будущих видео."
    ]
  },
  {
    "time": [
      2200.32,
      2203.44
    ],
    "en": [
      "Thank you for watching. Please&nbsp; subscribe to the channel,&nbsp;&nbsp;"
    ],
    "ru": [
      "Спасибо за просмотр. Пожалуйста, & nbsp; подписаться на канал, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2203.44,
      2209.2
    ],
    "en": [
      "like the video, leave a comment, and share the&nbsp; video with anyone else studying for the CCNA.&nbsp;&nbsp;"
    ],
    "ru": [
      "поставьте лайк видео, оставьте комментарий и поделитесь & nbsp; видео со всеми, кто учится на CCNA. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2209.2,
      2214.8
    ],
    "en": [
      "If you want to leave a tip, check the links in the&nbsp; description. I'm also a Brave verified publisher&nbsp;&nbsp;"
    ],
    "ru": [
      "Если вы хотите оставить отзыв, проверьте ссылки в разделе & nbsp; описание. Я также являюсь проверенным издателем Brave & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2214.8,
      2214.8
    ],
    "en": [
      "and accept BAT, or Basic Attention Token, tips&nbsp; via the Brave browser. That's all for now."
    ],
    "ru": [
      "и принимаете BAT, или жетон основного внимания, советы & nbsp; через браузер Brave. На этом пока все."
    ]
  }
]