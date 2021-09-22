let items = [
  {
    "time": [
      1.1,
      3.47
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
      3.47,
      6.98
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
      6.98,
      10.89
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
      10.89,
      16.85
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
      16.85,
      18.76
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
      18.76,
      24.95
    ],
    "en": [
      "If you want more labs like this, I highly recommend Boson Software’s NetSim for CCNA."
    ],
    "ru": [
      "Если вам нужно больше подобных лабораторий, я настоятельно рекомендую NetSim от Boson Software для CCNA."
    ]
  },
  {
    "time": [
      24.95,
      29.58
    ],
    "en": [
      "NetSim is a network simulator like Packet Tracer, but it’s far more powerful and contains"
    ],
    "ru": [
      "NetSim - это сетевой симулятор, подобный Packet Tracer, но он гораздо более мощный и содержит"
    ]
  },
  {
    "time": [
      29.58,
      34.989
    ],
    "en": [
      "over 100 detailed guided labs covering the CCNA exam topics."
    ],
    "ru": [
      "более 100 подробных лабораторных работ, охватывающих темы экзамена CCNA."
    ]
  },
  {
    "time": [
      34.989,
      39.659
    ],
    "en": [
      "If you want to get NetSim, follow the link in the description."
    ],
    "ru": [
      "Если вы хотите получить NetSim, перейдите по ссылке в описании."
    ]
  },
  {
    "time": [
      39.659,
      44.859
    ],
    "en": [
      "In this lab we will configure a GRE tunnel between R1 and R2."
    ],
    "ru": [
      "В этой лабораторной работе мы настроим туннель GRE между R1 и R2."
    ]
  },
  {
    "time": [
      44.859,
      49.6
    ],
    "en": [
      "Both routers are connected to a service provider network, but the GRE tunnel will create a"
    ],
    "ru": [
      "Оба маршрутизатора подключены к сети поставщика услуг, но туннель GRE создаст"
    ]
  },
  {
    "time": [
      49.6,
      52.579
    ],
    "en": [
      "virtual direct connection between them."
    ],
    "ru": [
      "виртуальная прямая связь между ними."
    ]
  },
  {
    "time": [
      52.579,
      60.269
    ],
    "en": [
      "Now, all traffic between R1 and R2 will still have to physically pass through the service provider network."
    ],
    "ru": [
      "Теперь весь трафик между R1 и R2 по-прежнему должен будет физически проходить через сеть поставщика услуг."
    ]
  },
  {
    "time": [
      60.269,
      65.61
    ],
    "en": [
      "provider network. However all packets will be encapsulated in additional headers to create a virtual tunnel"
    ],
    "ru": [
      "сеть провайдера. Однако все пакеты будут инкапсулированы в дополнительные заголовки для создания виртуального туннеля."
    ]
  },
  {
    "time": [
      65.61,
      68.12
    ],
    "en": [
      "that the original packets pass through."
    ],
    "ru": [
      "что исходные пакеты проходят."
    ]
  },
  {
    "time": [
      68.12,
      75.789
    ],
    "en": [
      "Now, as I mentioned in the lecture video GRE doesn’t encrypt packets, so it’s not secure on its own."
    ],
    "ru": [
      "Как я уже упоминал в видео-лекции, GRE не шифрует пакеты, поэтому сам по себе небезопасен."
    ]
  },
  {
    "time": [
      75.789,
      80.64
    ],
    "en": [
      "on its own. However the purpose of this video is just to demonstrate how tunnels work, so I picked"
    ],
    "ru": [
      "самостоятельно. Однако цель этого видео - просто продемонстрировать, как работают туннели, поэтому я выбрал"
    ]
  },
  {
    "time": [
      80.64,
      84.71000000000001
    ],
    "en": [
      "GRE because it’s quite simple to configure."
    ],
    "ru": [
      "GRE, потому что его довольно просто настроить."
    ]
  },
  {
    "time": [
      84.71000000000001,
      91.439
    ],
    "en": [
      "So let’s get right into configuring GRE, on R1 first. ENABLE."
    ],
    "ru": [
      "Итак, давайте приступим к настройке GRE сначала на R1. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      91.439,
      97.31
    ],
    "en": [
      "ENABLE. CONF T. To configure a GRE tunnel, we have to make a tunnel interface."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. Чтобы настроить GRE-туннель, мы должны создать туннельный интерфейс."
    ]
  },
  {
    "time": [
      97.31,
      104.869
    ],
    "en": [
      "This is not a physical interface, of course, but a virtual interface like a loopback interface. INTERFACE TUNNEL 0."
    ],
    "ru": [
      "Это, конечно, не физический интерфейс, а виртуальный интерфейс типа loopback-интерфейса. ИНТЕРФЕЙСНЫЙ ТУННЕЛЬ 0."
    ]
  },
  {
    "time": [
      104.869,
      108.31
    ],
    "en": [
      "INTERFACE TUNNEL 0. Okay, I have created the tunnel interface."
    ],
    "ru": [
      "ИНТЕРФЕЙС ТУННЕЛЬ 0. Хорошо, я создал туннельный интерфейс."
    ]
  },
  {
    "time": [
      108.31,
      112.88
    ],
    "en": [
      "Now I just need a few commands to complete the GRE configuration."
    ],
    "ru": [
      "Теперь мне просто нужно несколько команд для завершения настройки GRE."
    ]
  },
  {
    "time": [
      112.88,
      120.49
    ],
    "en": [
      "First, TUNNEL SOURCE, and now we have to specify which physical interface on R1 will be used for the tunnel."
    ],
    "ru": [
      "Сначала TUNNEL SOURCE, а теперь мы должны указать, какой физический интерфейс на R1 будет использоваться для туннеля."
    ]
  },
  {
    "time": [
      120.49,
      126.219
    ],
    "en": [
      "for the tunnel. Well, we should use the interface connected to the service provider, so G0/0/0."
    ],
    "ru": [
      "для туннеля. Что ж, мы должны использовать интерфейс, подключенный к поставщику услуг, поэтому G0 / 0/0."
    ]
  },
  {
    "time": [
      126.219,
      132.36
    ],
    "en": [
      "Next, TUNNEL DESTINATION, and then we have to specify the IP address of the other end"
    ],
    "ru": [
      "Затем TUNNEL DESTINATION, а затем мы должны указать IP-адрес другого конца."
    ]
  },
  {
    "time": [
      132.36,
      134.21
    ],
    "en": [
      "of the tunnel, of R2."
    ],
    "ru": [
      "тоннеля, R2."
    ]
  },
  {
    "time": [
      134.21,
      138.42000000000002
    ],
    "en": [
      "So, I’ll enter R2’s WAN interface’s IP, 200.0.0.2."
    ],
    "ru": [
      "Итак, я введу IP-адрес WAN-интерфейса R2, 200.0.0.2."
    ]
  },
  {
    "time": [
      138.42000000000002,
      146.24
    ],
    "en": [
      "And finally, the virtual tunnel interface itself needs an IP address."
    ],
    "ru": [
      "И, наконец, самому интерфейсу виртуального туннеля нужен IP-адрес."
    ]
  },
  {
    "time": [
      146.24,
      150.69
    ],
    "en": [
      "IP ADDRESS 192.168.1.1 255.255.255.252."
    ],
    "ru": [
      "IP-АДРЕС 192.168.1.1 255.255.255.252."
    ]
  },
  {
    "time": [
      150.69,
      156.24
    ],
    "en": [
      "Okay, that’s all the configuration needed."
    ],
    "ru": [
      "Хорошо, это все, что нужно для настройки."
    ]
  },
  {
    "time": [
      156.24,
      160.19
    ],
    "en": [
      "TUNNEL SOURCE, TUNNEL DESTINATION, and then IP ADDRESS."
    ],
    "ru": [
      "ИСТОЧНИК ТУННЕЛЯ, НАЗНАЧЕНИЕ ТУННЕЛЯ, а затем IP-АДРЕС."
    ]
  },
  {
    "time": [
      160.19,
      163.04
    ],
    "en": [
      "Let’s check the status."
    ],
    "ru": [
      "Давай проверим статус."
    ]
  },
  {
    "time": [
      163.04,
      165.57
    ],
    "en": [
      "DO SHOW IP INTERFACE BRIEF."
    ],
    "ru": [
      "ПОКАЗАТЬ КРАТКОЕ ОПИСАНИЕ IP-ИНТЕРФЕЙСА."
    ]
  },
  {
    "time": [
      165.57,
      170.59
    ],
    "en": [
      "Okay, the Tunnel0 interface is up/down. Why down?"
    ],
    "ru": [
      "Хорошо, интерфейс Tunnel0 включен / отключен. Почему вниз?"
    ]
  },
  {
    "time": [
      170.59,
      175.81
    ],
    "en": [
      "Why down? We’ll investigate that after configuring R2."
    ],
    "ru": [
      "Почему вниз? Мы исследуем это после настройки R2."
    ]
  },
  {
    "time": [
      175.81,
      180.43
    ],
    "en": [
      "So let’s do the same thing on R2. ENABLE."
    ],
    "ru": [
      "Итак, давайте сделаем то же самое на R2. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      180.43,
      184.26
    ],
    "en": [
      "ENABLE. CONF T. INTERFACE TUNNEL 0."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. ИНТЕРФЕЙС ТУННЕЛЬ 0."
    ]
  },
  {
    "time": [
      184.26,
      189.92
    ],
    "en": [
      "TUNNEL SOURCE, and just like on R1 it will be G0/0/0."
    ],
    "ru": [
      "ИСТОЧНИК ТУННЕЛЯ и, как и на R1, будет G0 / 0/0."
    ]
  },
  {
    "time": [
      189.92,
      197.82
    ],
    "en": [
      "TUNNEL DESTINATION, this time it will be the IP address of R1’s WAN interface, 100.0.0.2."
    ],
    "ru": [
      "НАЗНАЧЕНИЕ ТУННЕЛЯ, на этот раз это будет IP-адрес WAN-интерфейса маршрутизатора R1, 100.0.0.2."
    ]
  },
  {
    "time": [
      197.82,
      199.92000000000002
    ],
    "en": [
      "And finally the IP address."
    ],
    "ru": [
      "И, наконец, IP-адрес."
    ]
  },
  {
    "time": [
      199.92000000000002,
      203.2
    ],
    "en": [
      "IP ADDRESS 192.168.1.2 255.255.255.252."
    ],
    "ru": [
      "IP-АДРЕС 192.168.1.2 255.255.255.252."
    ]
  },
  {
    "time": [
      203.2,
      210.25
    ],
    "en": [
      "Okay, that’s all, let’s check the status."
    ],
    "ru": [
      "Ладно, вот и все, давайте проверим статус."
    ]
  },
  {
    "time": [
      210.25,
      212.72
    ],
    "en": [
      "DO SHOW IP INTERFACE BRIEF."
    ],
    "ru": [
      "ПОКАЗАТЬ КРАТКОЕ ОПИСАНИЕ IP-ИНТЕРФЕЙСА."
    ]
  },
  {
    "time": [
      212.72,
      217.59
    ],
    "en": [
      "Okay, there’s the tunnel interface, but it’s still down."
    ],
    "ru": [
      "Хорошо, интерфейс туннеля есть, но он все еще не работает."
    ]
  },
  {
    "time": [
      217.59,
      221.34
    ],
    "en": [
      "Why is that, even though we’ve configured both sides?"
    ],
    "ru": [
      "Почему это так, хотя мы настроили обе стороны?"
    ]
  },
  {
    "time": [
      221.34,
      223.09
    ],
    "en": [
      "Let me show you."
    ],
    "ru": [
      "Позволь мне показать тебе."
    ]
  },
  {
    "time": [
      223.09,
      225.03
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
      225.03,
      230.19
    ],
    "en": [
      "So, R2 doesn’t have a connected route for its tunnel interface of course, because the"
    ],
    "ru": [
      "Итак, у R2, конечно же, нет подключенного маршрута для туннельного интерфейса, потому что"
    ]
  },
  {
    "time": [
      230.19,
      232.4
    ],
    "en": [
      "interface is still down."
    ],
    "ru": [
      "интерфейс все еще не работает."
    ]
  },
  {
    "time": [
      232.4,
      237.29
    ],
    "en": [
      "It has connected routes for its physical interfaces, but we’re missing a critical route."
    ],
    "ru": [
      "Он подключил маршруты для своих физических интерфейсов, но нам не хватает важного маршрута."
    ]
  },
  {
    "time": [
      237.29,
      245.85
    ],
    "en": [
      "R2 doesn’t know how to reach the IP address we specified as the tunnel destination, 100.0.0.2."
    ],
    "ru": [
      "R2 не знает, как получить доступ к IP-адресу, который мы указали в качестве пункта назначения туннеля, 100.0.0.2."
    ]
  },
  {
    "time": [
      245.85,
      252.16
    ],
    "en": [
      "If R2 doesn’t know how to get to 100.0.0.2, it can’t build a GRE tunnel to 100.0.0.2."
    ],
    "ru": [
      "Если R2 не знает, как добраться до 100.0.0.2, он не сможет построить туннель GRE до 100.0.0.2."
    ]
  },
  {
    "time": [
      252.16,
      256.52
    ],
    "en": [
      "So, let’s fix that. EXIT."
    ],
    "ru": [
      "Итак, давайте это исправим. ВЫХОД."
    ]
  },
  {
    "time": [
      256.52,
      259.28
    ],
    "en": [
      "EXIT. I’ll just configure a default route."
    ],
    "ru": [
      "ВЫХОД. Я просто настрою маршрут по умолчанию."
    ]
  },
  {
    "time": [
      259.28,
      267.16
    ],
    "en": [
      "IP ROUTE 0.0.0.0 0.0.0.0 200.0.0.1."
    ],
    "ru": [
      "IP-МАРШРУТ 0.0.0.0 0.0.0.0 200.0.0.1."
    ]
  },
  {
    "time": [
      267.16,
      274.44
    ],
    "en": [
      "Okay, after we have the route to 100.0.0.2, the tunnel interface comes up. Let’s check."
    ],
    "ru": [
      "Хорошо, после того, как у нас есть маршрут к 100.0.0.2, появится интерфейс туннеля. Давайте проверим."
    ]
  },
  {
    "time": [
      274.44,
      277.13
    ],
    "en": [
      "Let’s check. DO SHOW IP ROUTE."
    ],
    "ru": [
      "Давайте проверим. ПОКАЗАТЬ IP-МАРШРУТ."
    ]
  },
  {
    "time": [
      277.13,
      279.15999999999997
    ],
    "en": [
      "Now we have the connected route for the tunnel."
    ],
    "ru": [
      "Теперь у нас есть связанный маршрут для туннеля."
    ]
  },
  {
    "time": [
      279.15999999999997,
      287.97
    ],
    "en": [
      "Let’s try to ping R1’s side. DO PING 192.168.1.1."
    ],
    "ru": [
      "Попробуем пинговать сторону R1. ПИНГ 192.168.1.1."
    ]
  },
  {
    "time": [
      287.97,
      298.93
    ],
    "en": [
      "DO PING 192.168.1.1. Hmm, the ping still isn’t working, even though the interface is up and we have a route."
    ],
    "ru": [
      "ПИНГ 192.168.1.1. Хм, пинг по-прежнему не работает, хотя интерфейс работает и у нас есть маршрут."
    ]
  },
  {
    "time": [
      298.93,
      305.74
    ],
    "en": [
      "Actually the reason for that is that we also have to configure a route on R1 to 200.0.0.2."
    ],
    "ru": [
      "На самом деле причина в том, что мы также должны настроить маршрут на R1 до 200.0.0.2."
    ]
  },
  {
    "time": [
      305.74,
      310.41
    ],
    "en": [
      "Let’s check the routing table on R1."
    ],
    "ru": [
      "Давайте проверим таблицу маршрутизации на R1."
    ]
  },
  {
    "time": [
      310.41,
      313.54
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
      313.54,
      320.79
    ],
    "en": [
      "Only connected routes for its physical interfaces, so it doesn’t know how to get to the tunnel destination, 200.0.0.2."
    ],
    "ru": [
      "Только подключенные маршруты для своих физических интерфейсов, поэтому он не знает, как добраться до пункта назначения туннеля, 200.0.0.2."
    ]
  },
  {
    "time": [
      320.79,
      325.69
    ],
    "en": [
      "destination, 200.0.0.2. I’ll configure a default route here, too. EXIT."
    ],
    "ru": [
      "пункт назначения, 200.0.0.2. Я также настрою маршрут по умолчанию. ВЫХОД."
    ]
  },
  {
    "time": [
      325.69,
      331.92
    ],
    "en": [
      "EXIT. IP ROUTE 0.0.0.0 0.0.0.0 100.0.0.1."
    ],
    "ru": [
      "ВЫХОД. IP-МАРШРУТ 0.0.0.0 0.0.0.0 100.0.0.1."
    ]
  },
  {
    "time": [
      331.92,
      340.5
    ],
    "en": [
      "Okay, now the tunnel interface comes up, and this time a ping from R1 to R2’s tunnel interface should work."
    ],
    "ru": [
      "Хорошо, теперь появляется туннельный интерфейс, и на этот раз должен сработать эхо-запрос от R1 к туннельному интерфейсу R2."
    ]
  },
  {
    "time": [
      340.5,
      344.96
    ],
    "en": [
      "interface should work. DO PING 192.168.1.2."
    ],
    "ru": [
      "интерфейс должен работать. ПИНГ 192.168.1.2."
    ]
  },
  {
    "time": [
      344.96,
      350.87
    ],
    "en": [
      "As usual the first few pings might fail because the ARP process is a bit slow in packet tracer,"
    ],
    "ru": [
      "Как обычно, первые несколько эхо-запросов могут завершиться неудачно, потому что процесс ARP немного медленный в трассировщике пакетов,"
    ]
  },
  {
    "time": [
      350.87,
      353.58
    ],
    "en": [
      "but after ARP completes they will succeed."
    ],
    "ru": [
      "но после завершения ARP они будут успешными."
    ]
  },
  {
    "time": [
      353.58,
      360.37
    ],
    "en": [
      "So, although R1 and R2 aren’t directly connected, they will behave as if they are directly connected"
    ],
    "ru": [
      "Таким образом, хотя R1 и R2 не подключены напрямую, они будут вести себя так, как будто они подключены напрямую."
    ]
  },
  {
    "time": [
      360.37,
      366.43
    ],
    "en": [
      "through the GRE tunnel, and soon you will see what happens when we activate OSPF."
    ],
    "ru": [
      "через туннель GRE, и вскоре вы увидите, что происходит, когда мы активируем OSPF."
    ]
  },
  {
    "time": [
      366.43,
      369.38
    ],
    "en": [
      "But first, let me show you a ping in simulation mode."
    ],
    "ru": [
      "Но сначала позвольте мне показать вам пинг в режиме симуляции."
    ]
  },
  {
    "time": [
      369.38,
      376.55
    ],
    "en": [
      "Okay, I’ll do that ping again. PING 192.168.1.2."
    ],
    "ru": [
      "Хорошо, я сделаю этот пинг еще раз. ПИНГ 192.168.1.2."
    ]
  },
  {
    "time": [
      376.55,
      381.14
    ],
    "en": [
      "PING 192.168.1.2. Okay let’s check the contents of this message that R1 sends."
    ],
    "ru": [
      "ПИНГ 192.168.1.2. Хорошо, давайте проверим содержимое этого сообщения, которое отправляет R1."
    ]
  },
  {
    "time": [
      381.14,
      385.9
    ],
    "en": [
      "Click on outbound PDU details, and let’s scroll down to the bottom."
    ],
    "ru": [
      "Щелкните сведения об исходящем PDU и прокрутите вниз."
    ]
  },
  {
    "time": [
      385.9,
      389.639
    ],
    "en": [
      "So, there’s the ICMP message, the ping."
    ],
    "ru": [
      "Итак, это сообщение ICMP, пинг."
    ]
  },
  {
    "time": [
      389.639,
      398.419
    ],
    "en": [
      "It’s encapsulated with an IP header, source 192.168.1.1 and destination 192.168.1.2, so"
    ],
    "ru": [
      "Он инкапсулирован с заголовком IP, источником 192.168.1.1 и получателем 192.168.1.2, поэтому"
    ]
  },
  {
    "time": [
      398.419,
      401.2
    ],
    "en": [
      "the addresses of the tunnel interfaces."
    ],
    "ru": [
      "адреса туннельных интерфейсов."
    ]
  },
  {
    "time": [
      401.2,
      407.59000000000003
    ],
    "en": [
      "But then on top of that there is a GRE header, and on top of that there is another IP header."
    ],
    "ru": [
      "Но помимо этого есть заголовок GRE и еще один заголовок IP."
    ]
  },
  {
    "time": [
      407.59000000000003,
      415.61
    ],
    "en": [
      "In this outer IP header, the source IP is 100.0.0.2, R1’s G0/0/0 interface, and the"
    ],
    "ru": [
      "В этом внешнем IP-заголовке исходный IP-адрес - 100.0.0.2, интерфейс G0 / 0/0 маршрутизатора R1 и"
    ]
  },
  {
    "time": [
      415.61,
      421.28
    ],
    "en": [
      "destination IP is 200.0.0.2, R2’s G0/0/0 interface."
    ],
    "ru": [
      "IP-адрес назначения - 200.0.0.2, интерфейс R2 G0 / 0/0."
    ]
  },
  {
    "time": [
      421.28,
      424.34
    ],
    "en": [
      "So, we call this a tunnel."
    ],
    "ru": [
      "Итак, мы называем это туннелем."
    ]
  },
  {
    "time": [
      424.34,
      429.73
    ],
    "en": [
      "The original packet from R1’s tunnel interface to R2’s tunnel interface is encapsulated"
    ],
    "ru": [
      "Исходный пакет от туннельного интерфейса маршрутизатора R1 к туннельному интерфейсу маршрутизатора R2 инкапсулируется."
    ]
  },
  {
    "time": [
      429.73,
      434.77
    ],
    "en": [
      "within an additional IP header which is used to transport the original packet over the"
    ],
    "ru": [
      "в дополнительном IP-заголовке, который используется для транспортировки исходного пакета по"
    ]
  },
  {
    "time": [
      434.77,
      437.37
    ],
    "en": [
      "service provider network to reach R2."
    ],
    "ru": [
      "сеть поставщика услуг для достижения R2."
    ]
  },
  {
    "time": [
      437.37,
      443.63
    ],
    "en": [
      "Now, something you can do when R1 and R2 are virtually directly connected like this is"
    ],
    "ru": [
      "Теперь кое-что, что вы можете сделать, когда R1 и R2 подключены практически напрямую, как это"
    ]
  },
  {
    "time": [
      443.63,
      447.3
    ],
    "en": [
      "make them OSPF neighbors to share routes."
    ],
    "ru": [
      "сделайте их соседями OSPF для совместного использования маршрутов."
    ]
  },
  {
    "time": [
      447.3,
      455.44
    ],
    "en": [
      "First let me demonstrate that a ping from PC1 to PC2 doesn’t work. PING 10.0.2.100."
    ],
    "ru": [
      "Сначала позвольте мне продемонстрировать, что эхо-запрос с ПК1 на ПК2 не работает. ПИНГ 10.0.2.100."
    ]
  },
  {
    "time": [
      455.44,
      461.92
    ],
    "en": [
      "PING 10.0.2.100. Let’s wait a bit for all the pings to go through, they should fail."
    ],
    "ru": [
      "ПИНГ 10.0.2.100. Давайте немного подождем, пока пройдут все пинги, они должны провалиться."
    ]
  },
  {
    "time": [
      461.92,
      467.99
    ],
    "en": [
      "But when R1 and R2 become OSPF neighbors they will learn each other’s routes, and PC1"
    ],
    "ru": [
      "Но когда R1 и R2 станут соседями OSPF, они узнают маршруты друг друга, а ПК1"
    ]
  },
  {
    "time": [
      467.99,
      472.83
    ],
    "en": [
      "and PC2 will be able to communicate over the GRE tunnel."
    ],
    "ru": [
      "и ПК2 сможет обмениваться данными через туннель GRE."
    ]
  },
  {
    "time": [
      472.83,
      479.02
    ],
    "en": [
      "So let’s enable OSPF on R1 first. ROUTER OSPF 1."
    ],
    "ru": [
      "Итак, давайте сначала включим OSPF на маршрутизаторе R1. МАРШРУТИЗАТОР OSPF 1."
    ]
  },
  {
    "time": [
      479.02,
      484.87
    ],
    "en": [
      "ROUTER OSPF 1. I’ll enable it on the tunnel interface, but also the G0/0 interface so that it tells"
    ],
    "ru": [
      "МАРШРУТИЗАТОР OSPF 1. Я включу его на туннельном интерфейсе, но также и на интерфейсе G0 / 0, чтобы он сообщал"
    ]
  },
  {
    "time": [
      484.87,
      488.21
    ],
    "en": [
      "R2 about its connected LAN."
    ],
    "ru": [
      "R2 о подключенной ЛВС."
    ]
  },
  {
    "time": [
      488.21,
      490.99
    ],
    "en": [
      "NETWORK 192.168.1.1 0.0.0.0 AREA 0."
    ],
    "ru": [
      "СЕТЬ 192.168.1.1 0.0.0.0 ОБЛАСТЬ 0."
    ]
  },
  {
    "time": [
      490.99,
      499.58
    ],
    "en": [
      "That enables OSPF on the tunnel 0 interface, next G0/0."
    ],
    "ru": [
      "Это включает OSPF на интерфейсе туннеля 0, затем G0 / 0."
    ]
  },
  {
    "time": [
      499.58,
      504.639
    ],
    "en": [
      "NETWORK 10.0.1.1 0.0.0.0 AREA 0."
    ],
    "ru": [
      "СЕТЬ 10.0.1.1 0.0.0.0 ОБЛАСТЬ 0."
    ]
  },
  {
    "time": [
      504.639,
      513.24
    ],
    "en": [
      "And I’ll make G0/0 a passive interface since there are no neighbors connected to it. PASSIVE-INTERFACE G0/0."
    ],
    "ru": [
      "И я сделаю G0 / 0 пассивным интерфейсом, так как к нему не подключены никакие соседи. ПАССИВНЫЙ ИНТЕРФЕЙС G0 / 0."
    ]
  },
  {
    "time": [
      513.24,
      519.4590000000001
    ],
    "en": [
      "PASSIVE-INTERFACE G0/0. Okay now I’ll do the same on R2. ROUTER OSPF 1."
    ],
    "ru": [
      "ПАССИВНЫЙ ИНТЕРФЕЙС G0 / 0. Хорошо, теперь я сделаю то же самое на R2. МАРШРУТИЗАТОР OSPF 1."
    ]
  },
  {
    "time": [
      519.4590000000001,
      525.16
    ],
    "en": [
      "ROUTER OSPF 1. NETWORK 192.168.1.2 0.0.0.0 AREA 0."
    ],
    "ru": [
      "МАРШРУТИЗАТОР OSPF 1. СЕТЬ 192.168.1.2 0.0.0.0 ОБЛАСТЬ 0."
    ]
  },
  {
    "time": [
      525.16,
      530.92
    ],
    "en": [
      "NETWORK 10.0.2.1 0.0.0.0 AREA 0."
    ],
    "ru": [
      "СЕТЬ 10.0.2.1 0.0.0.0 ОБЛАСТЬ 0."
    ]
  },
  {
    "time": [
      530.92,
      538.04
    ],
    "en": [
      "And again I’ll make G0/0 a passive interface here, because there are no OSPF neighbors connected to it."
    ],
    "ru": [
      "И снова я сделаю G0 / 0 пассивным интерфейсом, потому что к нему не подключены соседи OSPF."
    ]
  },
  {
    "time": [
      538.04,
      541.36
    ],
    "en": [
      "connected to it. PASSIVE-INTERFACE G0/0."
    ],
    "ru": [
      "подключен к нему. ПАССИВНЫЙ ИНТЕРФЕЙС G0 / 0."
    ]
  },
  {
    "time": [
      541.36,
      546.899
    ],
    "en": [
      "Okay, and as you can see R1 and R2 have become OSPF neighbors."
    ],
    "ru": [
      "Хорошо, и, как видите, R1 и R2 стали соседями OSPF."
    ]
  },
  {
    "time": [
      546.899,
      549.379
    ],
    "en": [
      "Let’s check the routes."
    ],
    "ru": [
      "Давайте проверим маршруты."
    ]
  },
  {
    "time": [
      549.379,
      551.449
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
      551.449,
      559.459
    ],
    "en": [
      "Okay, it learned a route to 10.0.1.0/24, R1’s LAN, via the tunnel0 interface."
    ],
    "ru": [
      "Хорошо, он узнал маршрут к 10.0.1.0/24, LAN маршрутизатора R1, через интерфейс tunnel0."
    ]
  },
  {
    "time": [
      559.459,
      563.18
    ],
    "en": [
      "And I’ll go back to check on R1 also."
    ],
    "ru": [
      "И я еще вернусь, чтобы проверить R1."
    ]
  },
  {
    "time": [
      563.18,
      565.05
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
      565.05,
      570.43
    ],
    "en": [
      "Okay, it learned a route to 10.0.2.0/24 via the tunnel0 interface."
    ],
    "ru": [
      "Хорошо, он узнал маршрут к 10.0.2.0/24 через интерфейс tunnel0."
    ]
  },
  {
    "time": [
      570.43,
      582.1
    ],
    "en": [
      "Okay, let’s try that ping from PC1 to PC2 again, and this time it should work. PING 10.0.2.100."
    ],
    "ru": [
      "Хорошо, давайте еще раз попробуем пинг с ПК1 на ПК2, и на этот раз все должно сработать. ПИНГ 10.0.2.100."
    ]
  },
  {
    "time": [
      582.1,
      585.46
    ],
    "en": [
      "PING 10.0.2.100. One or two pings might fail, but after that they will work."
    ],
    "ru": [
      "ПИНГ 10.0.2.100. Один или два пинга могут не сработать, но после этого они будут работать."
    ]
  },
  {
    "time": [
      585.46,
      591.689
    ],
    "en": [
      "R1 will encapsulate the packet from PC1 using GRE and send it over the tunnel to R2."
    ],
    "ru": [
      "R1 инкапсулирует пакет от ПК1 с помощью GRE и отправит его через туннель на R2."
    ]
  },
  {
    "time": [
      591.689,
      595.49
    ],
    "en": [
      "Okay, in this video I introduced GRE tunnels."
    ],
    "ru": [
      "Хорошо, в этом видео я представил туннели GRE."
    ]
  },
  {
    "time": [
      595.49,
      600.63
    ],
    "en": [
      "You don’t need to know this for the CCNA exam, but it’s simple to configure and hopefully"
    ],
    "ru": [
      "Вам не нужно знать это для экзамена CCNA, но его легко настроить и, надеюсь,"
    ]
  },
  {
    "time": [
      600.63,
      603.459
    ],
    "en": [
      "helped you understand a little about how tunnels work."
    ],
    "ru": [
      "помогли вам немного понять, как работают туннели."
    ]
  },
  {
    "time": [
      603.459,
      605.73
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
      605.73,
      605.73
    ],
    "en": [
      "Now let’s take a look at a bonus lab in Boson Software’s NetSim for CCNA."
    ],
    "ru": [
      "Теперь давайте взглянем на бонусную лабораторию в NetSim от Boson Software для CCNA."
    ]
  }
]