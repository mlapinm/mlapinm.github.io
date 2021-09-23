let objs = [
  {
    "time": [
      1.209,
      7.53
    ],
    "en": [
      "Welcome to Jeremy’s IT Lab. This is a free, complete course for the CCNA. If you like"
    ],
    "ru": [
      "Добро пожаловать в ИТ-лабораторию Джереми. Это бесплатный полный курс CCNA. Если хочешь"
    ]
  },
  {
    "time": [
      7.53,
      12.67
    ],
    "en": [
      "these videos, please subscribe to follow along with the series. Also, please like and leave"
    ],
    "ru": [
      "эти видео, пожалуйста, подпишитесь, чтобы следить вместе с серией. Также, пожалуйста, поставьте лайк и оставьте"
    ]
  },
  {
    "time": [
      12.67,
      17.25
    ],
    "en": [
      "a comment, and share the video to help spread this free series of videos. Thanks for your"
    ],
    "ru": [
      "комментарий и поделитесь видео, чтобы помочь распространить эту бесплатную серию видео. Спасибо за ваш"
    ]
  },
  {
    "time": [
      17.25,
      21.81
    ],
    "en": [
      "help. Also, remember to sign up via the link in the description to get all of the lab files"
    ],
    "ru": [
      "помощь. Также не забудьте зарегистрироваться по ссылке в описании, чтобы получить все лабораторные файлы."
    ]
  },
  {
    "time": [
      21.81,
      26.579
    ],
    "en": [
      "for this course, so you can try it out yourself in packet tracer."
    ],
    "ru": [
      "для этого курса, так что вы можете попробовать его самостоятельно в пакетном трассировщике."
    ]
  },
  {
    "time": [
      26.579,
      30.589
    ],
    "en": [
      "If you want more labs like these, I highly recommend picking up Boson’s NetSim for"
    ],
    "ru": [
      "Если вам нужно больше подобных лабораторий, я настоятельно рекомендую приобрести Boson's NetSim для"
    ]
  },
  {
    "time": [
      30.589,
      35.98
    ],
    "en": [
      "the CCNA, click the link in the video description to check it out. It’s a network simulator"
    ],
    "ru": [
      "CCNA, щелкните ссылку в описании видео, чтобы ознакомиться с ним. Это сетевой симулятор"
    ]
  },
  {
    "time": [
      35.98,
      40.559
    ],
    "en": [
      "like packet tracer, but it’s even better, and it includes all of these guided labs to"
    ],
    "ru": [
      "как пакетный трассировщик, но он даже лучше, и он включает в себя все эти лабораторные"
    ]
  },
  {
    "time": [
      40.559,
      45.059
    ],
    "en": [
      "not only help you get hands-on practice configuring and troubleshooting, but also deepen your"
    ],
    "ru": [
      "не только поможет вам получить практические навыки настройки и устранения неполадок, но и углубит ваши"
    ]
  },
  {
    "time": [
      45.059,
      50.96
    ],
    "en": [
      "understanding of the exam topics. I used it myself when studying for my certifications,"
    ],
    "ru": [
      "понимание темы экзамена. Я сам использовал его, когда готовился к сертификации,"
    ]
  },
  {
    "time": [
      50.96,
      54.809
    ],
    "en": [
      "so I feel confident about recommending it to all of you. If you want to get your own"
    ],
    "ru": [
      "так что я уверен, что рекомендую его всем вам. Если хочешь обзавестись"
    ]
  },
  {
    "time": [
      54.809,
      58.39
    ],
    "en": [
      "copy of NetSim, please follow the link in the video description."
    ],
    "ru": [
      "копию NetSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      58.39,
      64.71
    ],
    "en": [
      "In today’s video we’ll practice configuring IPv6 static routes in this network to enable"
    ],
    "ru": [
      "В сегодняшнем видео мы попрактикуемся в настройке статических маршрутов IPv6 в этой сети, чтобы включить"
    ]
  },
  {
    "time": [
      64.71,
      71.14
    ],
    "en": [
      "PC1 and PC2 to ping each other via the R1, R3 path, and also configure a backup route"
    ],
    "ru": [
      "ПК1 и ПК2 будут пинговать друг друга по пути R1, R3, а также настроить резервный маршрут"
    ]
  },
  {
    "time": [
      71.14,
      77.619
    ],
    "en": [
      "via R2. The IPv6 addresses on the routers have been preconfigured, but not the PCs,"
    ],
    "ru": [
      "через R2. Адреса IPv6 на маршрутизаторах были предварительно настроены, но не на ПК,"
    ]
  },
  {
    "time": [
      77.619,
      83.15
    ],
    "en": [
      "so we are going to use SLAAC to configure IPv6 addresses on the PCs."
    ],
    "ru": [
      "поэтому мы собираемся использовать SLAAC для настройки адресов IPv6 на ПК."
    ]
  },
  {
    "time": [
      83.15,
      89.399
    ],
    "en": [
      "Before that, we must enable IPv6 routing on each router. If IPv6 routing isn’t enabled,"
    ],
    "ru": [
      "Перед этим мы должны включить маршрутизацию IPv6 на каждом маршрутизаторе. Если маршрутизация IPv6 не включена,"
    ]
  },
  {
    "time": [
      89.399,
      94.131
    ],
    "en": [
      "these routers won’t route IPv6 traffic, and they also won’t send the NDP router"
    ],
    "ru": [
      "эти маршрутизаторы не будут маршрутизировать трафик IPv6, и они также не будут отправлять маршрутизатор NDP"
    ]
  },
  {
    "time": [
      94.131,
      99.36
    ],
    "en": [
      "advertisement messages that are necessary for SLAAC to work. So let’s quickly enable"
    ],
    "ru": [
      "рекламные сообщения, необходимые для работы SLAAC. Итак, давайте быстро включим"
    ]
  },
  {
    "time": [
      99.36,
      104.60900000000001
    ],
    "en": [
      "that on each router, R1 first."
    ],
    "ru": [
      "это на каждом маршрутизаторе, сначала R1."
    ]
  },
  {
    "time": [
      104.60900000000001,
      120.799
    ],
    "en": [
      "ENABLE. CONF T. IPV6 UNICAST-ROUTING. Next R2. ENABLE. CONF T. IPV6 UNICAST-ROUTING."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. IPV6-МАРШРУТИЗАЦИЯ. Далее R2. ВКЛЮЧИТЬ. CONF T. IPV6-МАРШРУТИЗАЦИЯ."
    ]
  },
  {
    "time": [
      120.799,
      128.56
    ],
    "en": [
      "Finally R3. ENABLE. CONF T. IPV6 UNICAST-ROUTING."
    ],
    "ru": [
      "Наконец-то R3. ВКЛЮЧИТЬ. CONF T. IPV6-МАРШРУТИЗАЦИЯ."
    ]
  },
  {
    "time": [
      128.56,
      136.69
    ],
    "en": [
      "Okay, always remember that step when configuring IPv6. Now I’ll go on PC1. From the config"
    ],
    "ru": [
      "Хорошо, всегда помните этот шаг при настройке IPv6. Теперь перейду на ПК1. Из конфига"
    ]
  },
  {
    "time": [
      136.69,
      142.69
    ],
    "en": [
      "tab, I’ll set the default gateway by clicking on ‘automatic’. As you can see, PC1 automatically"
    ],
    "ru": [
      "на вкладке, я установлю шлюз по умолчанию, нажав «автоматический». Как видите, ПК1 автоматически"
    ]
  },
  {
    "time": [
      142.69,
      149.39
    ],
    "en": [
      "set its default gateway. This is a link-local IPv6 address, so it must be R1’s address."
    ],
    "ru": [
      "установить шлюз по умолчанию. Это локальный для канала IPv6-адрес, поэтому он должен быть адресом R1."
    ]
  },
  {
    "time": [
      149.39,
      156.48
    ],
    "en": [
      "It learned it from R1’s NDP router advertisement messages. Next I’ll select PC1’s FastEthernet0"
    ],
    "ru": [
      "Он узнал об этом из рекламных сообщений маршрутизатора R1 NDP. Затем я выберу FastEthernet0 ПК1."
    ]
  },
  {
    "time": [
      156.48,
      161.64
    ],
    "en": [
      "interface, and you can see packet tracer automatically enabled SLAAC for PC1 and it configured an"
    ],
    "ru": [
      "интерфейс, и вы можете видеть, что трассировщик пакетов автоматически включил SLAAC для ПК1 и настроил"
    ]
  },
  {
    "time": [
      161.64,
      167.76
    ],
    "en": [
      "IPv6 address. It learned this network prefix from R1, and the second half, the interface"
    ],
    "ru": [
      "IPv6-адрес. Он узнал этот сетевой префикс от R1, а вторую половину, интерфейс"
    ]
  },
  {
    "time": [
      167.76,
      177.48
    ],
    "en": [
      "ID, was generated using EUI-64. Okay, let’s do the same on PC2. From the config tab, tell"
    ],
    "ru": [
      "ID был создан с использованием EUI-64. Хорошо, давайте сделаем то же самое на ПК2. На вкладке конфигурации укажите"
    ]
  },
  {
    "time": [
      177.48,
      184.13
    ],
    "en": [
      "PC2 to automatically learn its default gateway. There it is, and let’s look at its FastEthernet0"
    ],
    "ru": [
      "ПК2 автоматически узнает свой шлюз по умолчанию. Вот он, и давайте посмотрим на его FastEthernet0"
    ]
  },
  {
    "time": [
      184.13,
      189.59
    ],
    "en": [
      "interface. As you can see, it automatically learned the network prefix from R3 and also"
    ],
    "ru": [
      "интерфейс. Как видите, он автоматически узнал сетевой префикс от R3, а также"
    ]
  },
  {
    "time": [
      189.59,
      197.01
    ],
    "en": [
      "used EUI-64 to generate an interface ID. Later, when I try a ping from PC1 to PC2, I’m going"
    ],
    "ru": [
      "использовал EUI-64 для генерации идентификатора интерфейса. Позже, когда я попробую выполнить эхо-запрос с ПК1 на ПК2, я пойду"
    ]
  },
  {
    "time": [
      197.01,
      201.96
    ],
    "en": [
      "to need to copy this address, but I can’t highlight it here. So, I’ll go to the CLI"
    ],
    "ru": [
      "мне нужно скопировать этот адрес, но я не могу выделить его здесь. Итак, я перейду в интерфейс командной строки."
    ]
  },
  {
    "time": [
      201.96,
      209.84
    ],
    "en": [
      "of PC2, and use the command IPCONFIG to view PC2’s IPv6 address here. Okay, I’ll copy"
    ],
    "ru": [
      "ПК2, и используйте команду IPCONFIG, чтобы просмотреть здесь IPv6-адрес ПК2. Ладно я скопирую"
    ]
  },
  {
    "time": [
      209.84,
      214.15
    ],
    "en": [
      "this address later when I try to ping from PC1 to PC2."
    ],
    "ru": [
      "этот адрес позже, когда я попытаюсь выполнить эхо-запрос с ПК1 на ПК2."
    ]
  },
  {
    "time": [
      214.15,
      220.45
    ],
    "en": [
      "Okay, now let’s get to the main part of this lab, configuring IPv6 static routes."
    ],
    "ru": [
      "Хорошо, теперь перейдем к основной части этой лабораторной работы - настройке статических маршрутов IPv6."
    ]
  },
  {
    "time": [
      220.45,
      226.14
    ],
    "en": [
      "We need to configure routes to allow PC1 and PC2 to ping each other. The path from R1 to"
    ],
    "ru": [
      "Нам нужно настроить маршруты, чтобы ПК1 и ПК2 могли пинговать друг друга. Путь от R1 до"
    ]
  },
  {
    "time": [
      226.14,
      231.06
    ],
    "en": [
      "R3 should be the main path, and the serial connections to R2 should only be used as a"
    ],
    "ru": [
      "R3 должен быть основным путем, а последовательные соединения с R2 следует использовать только как"
    ]
  },
  {
    "time": [
      231.06,
      236.68
    ],
    "en": [
      "backup. So let’s configure routes on R1 first."
    ],
    "ru": [
      "резервное копирование. Итак, давайте сначала настроим маршруты на R1."
    ]
  },
  {
    "time": [
      236.68,
      242.59
    ],
    "en": [
      "So R1 needs two routes to R3’s internal LAN, the main route directly to R3 and a backup"
    ],
    "ru": [
      "Таким образом, маршрутизатору R1 необходимы два маршрута к внутренней локальной сети маршрутизатора R3: основной маршрут напрямую к маршрутизатору R3 и резервный."
    ]
  },
  {
    "time": [
      242.59,
      253.7
    ],
    "en": [
      "route to R2. Let’s configure the main route. IPV6 ROUTE 2001:db8:0:3::/64, that’s the"
    ],
    "ru": [
      "маршрут к R2. Настроим основной маршрут. МАРШРУТ IPV6 2001: db8: 0: 3 :: / 64, это"
    ]
  },
  {
    "time": [
      253.7,
      261.18
    ],
    "en": [
      "destination, now we can enter either the next hop, or both the exit interface and next hop."
    ],
    "ru": [
      "пункт назначения, теперь мы можем ввести либо следующий переход, либо интерфейс выхода и следующий переход."
    ]
  },
  {
    "time": [
      261.18,
      266.219
    ],
    "en": [
      "As I said in the lecture video, on an Ethernet interface you can’t use just the exit interface,"
    ],
    "ru": [
      "Как я уже говорил в видео лекции, на интерфейсе Ethernet нельзя использовать только интерфейс выхода,"
    ]
  },
  {
    "time": [
      266.219,
      272.06
    ],
    "en": [
      "a directly attached static route. You can only use recursive or fully-specified static"
    ],
    "ru": [
      "статический маршрут с прямым подключением. Вы можете использовать только рекурсивные или полностью определенные статические"
    ]
  },
  {
    "time": [
      272.06,
      282.356
    ],
    "en": [
      "routes. I’ll use fully specified routes. G0/1 2001:db8:0:13::2."
    ],
    "ru": [
      "маршруты. Я буду использовать полностью определенные маршруты. G0 / 1 2001: db8: 0: 13 :: 2."
    ]
  },
  {
    "time": [
      282.356,
      289.139
    ],
    "en": [
      "Okay, that’s the main route. Now our backup route via R2. I only enabled IPv6 on the serial"
    ],
    "ru": [
      "Хорошо, это основной маршрут. Теперь наш резервный маршрут через R2. Я включил IPv6 только на последовательном"
    ]
  },
  {
    "time": [
      289.139,
      294.169
    ],
    "en": [
      "interfaces, I didn’t manually configure any IPv6 addresses, so the routers only have"
    ],
    "ru": [
      "интерфейсов, я не настраивал вручную адреса IPv6, поэтому маршрутизаторы имеют только"
    ]
  },
  {
    "time": [
      294.169,
      300.389
    ],
    "en": [
      "link-local addresses. So, I need to know R2’s link-local address to use as the next hop."
    ],
    "ru": [
      "локальные для ссылок адреса. Итак, мне нужно знать локальный адрес ссылки R2, чтобы использовать его в качестве следующего перехода."
    ]
  },
  {
    "time": [
      300.389,
      310.469
    ],
    "en": [
      "I’ll go on R2. DO SHOW IPV6 INTERFACE BRIEF. Okay, there’s the link-local address of"
    ],
    "ru": [
      "Я пойду на R2. ПОКАЗАТЬ КРАТКИЙ ОБЗОР ИНТЕРФЕЙСА IPV6. Хорошо, вот локальный адрес ссылки"
    ]
  },
  {
    "time": [
      310.469,
      320.81
    ],
    "en": [
      "serial0/0/0, I’ll copy it, and return to R1. Now I’ll use the up arrow, delete the"
    ],
    "ru": [
      "serial0 / 0/0, я скопирую его и вернусь к R1. Теперь я использую стрелку вверх и удаляю"
    ]
  },
  {
    "time": [
      320.81,
      328.21
    ],
    "en": [
      "interface and next hop, and now the exit interface is s0/0/0, and I’ll paste R2’s link-local"
    ],
    "ru": [
      "интерфейс и следующий переход, и теперь интерфейс выхода - s0 / 0/0, и я вставлю ссылку-локальную ссылку R2"
    ]
  },
  {
    "time": [
      328.21,
      334.24
    ],
    "en": [
      "address as the next hop. Remember, when using a link-local address as the next hop you have"
    ],
    "ru": [
      "адрес как следующий переход. Помните, что при использовании локального адреса ссылки в качестве следующего перехода"
    ]
  },
  {
    "time": [
      334.24,
      339.5
    ],
    "en": [
      "to use a fully specified route, you have to include the exit-interface, too. But this"
    ],
    "ru": [
      "чтобы использовать полностью определенный маршрут, вы также должны включить интерфейс выхода. Но это"
    ]
  },
  {
    "time": [
      339.5,
      344.659
    ],
    "en": [
      "route isn’t complete yet, we want to make sure this is only used as a backup. How can"
    ],
    "ru": [
      "маршрут еще не завершен, мы хотим убедиться, что он используется только в качестве резервного. Как может"
    ]
  },
  {
    "time": [
      344.659,
      350.93
    ],
    "en": [
      "we do that? We can configure it as a floating static route. So, I will specify the administrative"
    ],
    "ru": [
      "мы это делаем? Мы можем настроить его как плавающий статический маршрут. Итак, уточню административный"
    ]
  },
  {
    "time": [
      350.93,
      357.969
    ],
    "en": [
      "distance here, let’s make it 5. In Cisco IOS a normal static route has an AD of 1,"
    ],
    "ru": [
      "расстояние, давайте сделаем его 5. В Cisco IOS обычный статический маршрут имеет AD 1,"
    ]
  },
  {
    "time": [
      357.969,
      363.909
    ],
    "en": [
      "so we just need to make the AD higher than 1. Okay, let’s check the routing table."
    ],
    "ru": [
      "так что нам просто нужно сделать AD выше 1. Хорошо, давайте проверим таблицу маршрутизации."
    ]
  },
  {
    "time": [
      363.909,
      370.3
    ],
    "en": [
      "DO SHOW IPV6 ROUTE. Okay, so you can only see the route via R3, but let’s check the"
    ],
    "ru": [
      "ПОКАЗАТЬ МАРШРУТ IPV6. Итак, вы можете увидеть маршрут только через R3, но давайте проверим"
    ]
  },
  {
    "time": [
      370.3,
      378.889
    ],
    "en": [
      "running config to make sure R1 has that floating static route. DO SHOW RUN, pipe, INCLUDE IPV6"
    ],
    "ru": [
      "запущенная конфигурация, чтобы убедиться, что у R1 есть этот плавающий статический маршрут. ПОКАЗАТЬ БЕГ, труба, ВКЛЮЧИТЬ IPV6"
    ]
  },
  {
    "time": [
      378.889,
      385.009
    ],
    "en": [
      "ROUTE. Notice I used the pipe with INCLUDE to filter it only to lines that include IPV6"
    ],
    "ru": [
      "МАРШРУТ. Обратите внимание, я использовал канал с INCLUDE, чтобы отфильтровать его только для строк, содержащих IPV6."
    ]
  },
  {
    "time": [
      385.009,
      391.419
    ],
    "en": [
      "ROUTE. Okay, now we can see both of the routes. That’s all for R1. Now, I’m going to configure"
    ],
    "ru": [
      "МАРШРУТ. Хорошо, теперь мы видим оба маршрута. На этом все для R1. Теперь я собираюсь настроить"
    ]
  },
  {
    "time": [
      391.419,
      398.22
    ],
    "en": [
      "R2’s routes next, so let me get the link-local address of R1’s s0/0/0 interface first."
    ],
    "ru": [
      "Затем маршрутизирует маршрутизатор R2, поэтому позвольте мне сначала получить локальный для канала адрес интерфейса s0 / 0/0 маршрутизатора R1."
    ]
  },
  {
    "time": [
      398.22,
      405.46
    ],
    "en": [
      "DO SHOW IPV6 INTERFACE BRIEF. Okay, I’ll copy that to use as the next hop for R2."
    ],
    "ru": [
      "ПОКАЗАТЬ КРАТКИЙ ОБЗОР ИНТЕРФЕЙСА IPV6. Хорошо, я скопирую это, чтобы использовать в качестве следующего шага для R2."
    ]
  },
  {
    "time": [
      405.46,
      414.99
    ],
    "en": [
      "So, let’s go back to R2. R2 needs a route to R1’s LAN and a route to R3’s LAN. I’ll"
    ],
    "ru": [
      "Итак, вернемся к R2. R2 нужен маршрут к локальной сети маршрутизатора R1 и маршрут к локальной сети маршрутизатора R3. Больной"
    ]
  },
  {
    "time": [
      414.99,
      425.669
    ],
    "en": [
      "configure the route to R1’s LAN first. IPV6 ROUTE 2001:db8:0:1::/64 S0/0/0, and now I’ll"
    ],
    "ru": [
      "сначала настройте маршрут к локальной сети маршрутизатора R1. МАРШРУТ IPV6 2001: db8: 0: 1 :: / 64 S0 / 0/0, а теперь я"
    ]
  },
  {
    "time": [
      425.669,
      432.49
    ],
    "en": [
      "paste R1’s link-local address. Okay, next up is the route to R3’s LAN. First I’ll"
    ],
    "ru": [
      "вставьте локальный адрес ссылки R1. Хорошо, дальше идет маршрут к локальной сети R3. Сначала я"
    ]
  },
  {
    "time": [
      432.49,
      440.889
    ],
    "en": [
      "go on R3 and get the link-local address of its S0/0/0 interface. DO SHOW IPV6 INTERFACE"
    ],
    "ru": [
      "перейдите на R3 и получите локальный для канала адрес его интерфейса S0 / 0/0. ПОКАЗАТЬ ИНТЕРФЕЙС IPV6"
    ]
  },
  {
    "time": [
      440.889,
      447.55
    ],
    "en": [
      "BRIEF. There it is, let me copy that. Now I’ll go back to R2 and configure the route."
    ],
    "ru": [
      "КРАТКИЙ. Вот оно, позвольте мне скопировать это. Теперь я вернусь к R2 и настрою маршрут."
    ]
  },
  {
    "time": [
      447.55,
      458.129
    ],
    "en": [
      "IPV6 ROUTE 2001:db8:0:3::/64 s0/0/1, and I’ll paste in R3’s link-local address as the"
    ],
    "ru": [
      "МАРШРУТ IPV6 2001: db8: 0: 3 :: / 64 s0 / 0/1, и я вставлю локальный адрес ссылки R3 в качестве"
    ]
  },
  {
    "time": [
      458.129,
      466.729
    ],
    "en": [
      "next hop. Let’s check R2’s routing table. DO SHOW IPV6 ROUTE. Okay, it’s got the two"
    ],
    "ru": [
      "следующий прыжок. Давайте проверим таблицу маршрутизации R2. ПОКАЗАТЬ МАРШРУТ IPV6. Ладно, есть два"
    ]
  },
  {
    "time": [
      466.729,
      472.659
    ],
    "en": [
      "static routes we just configured, that’s all for R2. But before going to R3, let’s"
    ],
    "ru": [
      "статические маршруты, которые мы только что настроили, это все для R2. Но прежде чем перейти к R3, давайте"
    ]
  },
  {
    "time": [
      472.659,
      480.81
    ],
    "en": [
      "get the link-local address of R2’s S0/0/1 interface. DO SHOW IPV6 INTERFACE BRIEF. Okay,"
    ],
    "ru": [
      "получить локальный адрес канала S0 / 0/1 интерфейса R2. ПОКАЗАТЬ КРАТКИЙ ОБЗОР ИНТЕРФЕЙСА IPV6. Хорошо,"
    ]
  },
  {
    "time": [
      480.81,
      483.56
    ],
    "en": [
      "I’ll copy that address."
    ],
    "ru": [
      "Я скопирую этот адрес."
    ]
  },
  {
    "time": [
      483.56,
      490.009
    ],
    "en": [
      "Finally, let’s configure R3’s routes. First I’ll configure the main route via"
    ],
    "ru": [
      "Наконец, давайте настроим маршруты R3. Сначала я настрою основной маршрут через"
    ]
  },
  {
    "time": [
      490.009,
      505.219
    ],
    "en": [
      "R1. IPV6 ROUTE 2001:db8:0:1::/64 G0/1 2001:db8:0:13::1. Note that you don’t have to use fully specified"
    ],
    "ru": [
      "R1. МАРШРУТ IPV6 2001: db8: 0: 1 :: / 64 G0 / 1 2001: db8: 0: 13 :: 1. Обратите внимание, что вам не обязательно использовать полностью указанные"
    ]
  },
  {
    "time": [
      505.219,
      511.99
    ],
    "en": [
      "routes like I do, you can use just the next hop. Okay, now the backup route via R2. I’ll"
    ],
    "ru": [
      "маршруты, как и я, вы можете использовать только следующий прыжок. Ладно, теперь резервный маршрут через R2. Больной"
    ]
  },
  {
    "time": [
      511.99,
      519.211
    ],
    "en": [
      "use the up arrow, delete the interface and next hop, and now the interface will be S0/0/0,"
    ],
    "ru": [
      "используйте стрелку вверх, удалите интерфейс и следующий переход, и теперь интерфейс будет S0 / 0/0,"
    ]
  },
  {
    "time": [
      519.211,
      526.13
    ],
    "en": [
      "I’ll paste in R2’s link-local address, and finally set the AD to 5. Okay, that’s"
    ],
    "ru": [
      "Я вставляю локальный адрес ссылки R2 и, наконец, устанавливаю AD равным 5. Хорошо, это"
    ]
  },
  {
    "time": [
      526.13,
      531.35
    ],
    "en": [
      "everything, PC1 should be able to ping PC2, and there is a backup route incase the link"
    ],
    "ru": [
      "все, ПК1 должен иметь возможность пинговать ПК2, и есть резервный маршрут на случай ссылки"
    ]
  },
  {
    "time": [
      531.35,
      534.61
    ],
    "en": [
      "between R1 and R3 fails."
    ],
    "ru": [
      "между R1 и R3 не удается."
    ]
  },
  {
    "time": [
      534.61,
      544.79
    ],
    "en": [
      "Let’s try that ping. I’ll go to PC2 first to copy its IP address. Next I’ll go on"
    ],
    "ru": [
      "Давай попробуем этот пинг. Сначала я пойду на ПК2, чтобы скопировать его IP-адрес. Далее я продолжу"
    ]
  },
  {
    "time": [
      544.79,
      554.93
    ],
    "en": [
      "to the CLI of PC1, and let’s try that ping to PC2. PING, and I’ll paste in PC2’s"
    ],
    "ru": [
      "к интерфейсу командной строки ПК1, и давайте попробуем проверить связь с ПК2. PING, и я вставлю PC2"
    ]
  },
  {
    "time": [
      554.93,
      561.71
    ],
    "en": [
      "IP address. Okay, PC1 is able to ping PC2. Let’s try a traceroute to see which path"
    ],
    "ru": [
      "Айпи адрес. Хорошо, ПК1 может пинговать ПК2. Давайте попробуем трассировку, чтобы узнать, какой путь"
    ]
  },
  {
    "time": [
      561.71,
      567.44
    ],
    "en": [
      "it is taking. On a windows PC the command is TRACERT, but if you’re doing this command"
    ],
    "ru": [
      "это берет. На ПК с Windows это команда TRACERT, но если вы выполняете эту команду"
    ]
  },
  {
    "time": [
      567.44,
      573.04
    ],
    "en": [
      "on a Cisco device you’ll have to type it out fully like this, TRACEROUTE. These packet"
    ],
    "ru": [
      "на устройстве Cisco вам нужно будет напечатать его полностью вот так: TRACEROUTE. Эти пакеты"
    ]
  },
  {
    "time": [
      573.04,
      580.88
    ],
    "en": [
      "tracer PCs are like windows PCs, so its just TRACERT, and again I’ll paste PC2’s address."
    ],
    "ru": [
      "Компьютеры с трассировщиком похожи на ПК с Windows, так что это просто TRACERT, и я снова вставлю адрес ПК2."
    ]
  },
  {
    "time": [
      580.88,
      589.22
    ],
    "en": [
      "Okay, it goes to the default gateway, then 13::2, which is R3, and then the destination."
    ],
    "ru": [
      "Хорошо, он переходит к шлюзу по умолчанию, затем к 13 :: 2, который является R3, а затем к месту назначения."
    ]
  },
  {
    "time": [
      589.22,
      597.0
    ],
    "en": [
      "Okay, let’s unplug that cable between R1 and R3. To delete the cable, click this icon"
    ],
    "ru": [
      "Хорошо, давайте отключим кабель между R1 и R3. Чтобы удалить кабель, щелкните этот значок"
    ]
  },
  {
    "time": [
      597.0,
      603.32
    ],
    "en": [
      "in packet tracer, then click the cable. Okay, now it’s deleted. Let’s try that ping"
    ],
    "ru": [
      "в пакетном трассировщике, затем щелкните кабель. Хорошо, теперь он удален. Давай попробуем пинг"
    ]
  },
  {
    "time": [
      603.32,
      611.09
    ],
    "en": [
      "again from PC1. I’ll use the up arrow, and let’s try it. Okay, it works. How about"
    ],
    "ru": [
      "снова с ПК1. Я воспользуюсь стрелкой вверх и попробую. Ладно, работает. Как насчет"
    ]
  },
  {
    "time": [
      611.09,
      619.24
    ],
    "en": [
      "a traceroute? As you can see, the traceroute is having trouble at the second hop, at R2."
    ],
    "ru": [
      "трассировку? Как видите, у traceroute возникли проблемы на втором узле, на R2."
    ]
  },
  {
    "time": [
      619.24,
      624.88
    ],
    "en": [
      "That’s because R2 only has link-local addresses, which aren’t routable. But if we wait a"
    ],
    "ru": [
      "Это потому, что у R2 есть только локальные адреса канала, которые не маршрутизируются. Но если мы подождем"
    ]
  },
  {
    "time": [
      624.88,
      631.04
    ],
    "en": [
      "bit we see a reply from R3, and then the destination PC2. Don’t worry about that, the ping is"
    ],
    "ru": [
      "bit мы видим ответ от R3, а затем от ПК2 назначения. Не беспокойтесь об этом, пинг"
    ]
  },
  {
    "time": [
      631.04,
      635.94
    ],
    "en": [
      "still working, and the PCs have no problems reaching each other. It’s no problem if"
    ],
    "ru": [
      "все еще работает, и у компьютеров нет проблем со связью друг с другом. Нет проблем, если"
    ]
  },
  {
    "time": [
      635.94,
      641.75
    ],
    "en": [
      "PC1 can’t reach every single router in the path to the destination. Okay, in this lab"
    ],
    "ru": [
      "ПК1 не может подключиться к каждому маршрутизатору на пути к месту назначения. Хорошо, в этой лаборатории"
    ]
  },
  {
    "time": [
      641.75,
      646.44
    ],
    "en": [
      "we configured IPv6 static routes. That’s all for this lab."
    ],
    "ru": [
      "мы настроили статические маршруты IPv6. Вот и все для этой лаборатории."
    ]
  },
  {
    "time": [
      646.44,
      653.641
    ],
    "en": [
      "Okay, here's today's Boson NetSim practice lab. This lab is configuring IPv6 2. Here's"
    ],
    "ru": [
      "Хорошо, вот сегодняшняя практическая лаборатория Boson NetSim. В этой лабораторной работе настраивается IPv6 2. Вот"
    ]
  },
  {
    "time": [
      653.641,
      659.93
    ],
    "en": [
      "the objective. Configure a simulated network with IPv6 addresses on physical interfaces"
    ],
    "ru": [
      "Цель. Настроить смоделированную сеть с IPv6-адресами на физических интерфейсах."
    ]
  },
  {
    "time": [
      659.93,
      665.67
    ],
    "en": [
      "and loopback interfaces. Your implementation should enable router interfaces to ping IPv6"
    ],
    "ru": [
      "и интерфейсы обратной связи. Ваша реализация должна разрешить интерфейсам маршрутизатора пинговать IPv6."
    ]
  },
  {
    "time": [
      665.67,
      673.22
    ],
    "en": [
      "addresses across routers and across IPv6 subnets. And you will configure IPv6 addressing and"
    ],
    "ru": [
      "адреса через маршрутизаторы и подсети IPv6. А вы настроите адресацию IPv6 и"
    ]
  },
  {
    "time": [
      673.22,
      680.62
    ],
    "en": [
      "Routing Information Protocol, RIP, for IPv6. So, you will configure RIP for IPv6 in this"
    ],
    "ru": [
      "Протокол маршрутной информации, RIP, для IPv6. Итак, вы настроите RIP для IPv6 в этом"
    ]
  },
  {
    "time": [
      680.62,
      686.14
    ],
    "en": [
      "lab. As I have said before, dynamic routing protocols for IPv6 aren't actually part of"
    ],
    "ru": [
      "лаборатория. Как я уже сказал ранее, протоколы динамической маршрутизации для IPv6 на самом деле не являются частью"
    ]
  },
  {
    "time": [
      686.14,
      690.94
    ],
    "en": [
      "the CCNA exam topics list. But the configuration is actually quite simple, so let's give it"
    ],
    "ru": [
      "список тем экзамена CCNA. Но конфигурация на самом деле довольно проста, поэтому давайте дадим ее"
    ]
  },
  {
    "time": [
      690.94,
      695.95
    ],
    "en": [
      "a try. And you can check down here in the command summary, which commands you need to"
    ],
    "ru": [
      "попытка. И вы можете проверить здесь, в сводке команд, какие команды вам нужно"
    ]
  },
  {
    "time": [
      695.95,
      705.54
    ],
    "en": [
      "know to complete this lab. Okay, here are the lab tasks. Task 1, configure IPv6 addresses."
    ],
    "ru": [
      "знать, чтобы завершить эту лабораторную работу. Хорошо, вот лабораторные задания. Задача 1, настроить IPv6-адреса."
    ]
  },
  {
    "time": [
      705.54,
      712.52
    ],
    "en": [
      "Task 2, enable IPv6 RIP routing, and Task 3 configure IPv6 between Router1 and Router3."
    ],
    "ru": [
      "Задача 2, включите маршрутизацию IPv6 RIP, и Задача 3 настройте IPv6 между Router1 и Router3."
    ]
  },
  {
    "time": [
      712.52,
      718.59
    ],
    "en": [
      "So, for this lab demonstration I actually completed Task 1, I configured IPv6 addresses"
    ],
    "ru": [
      "Итак, для этой лабораторной демонстрации я фактически выполнил задачу 1, я настроил адреса IPv6."
    ]
  },
  {
    "time": [
      718.59,
      726.68
    ],
    "en": [
      "on Router3 and Router4. I configured 2 loopback interfaces, as you can see here in the CLI"
    ],
    "ru": [
      "на Router3 и Router4. Я настроил 2 интерфейса обратной петли, как вы можете видеть здесь, в интерфейсе командной строки."
    ]
  },
  {
    "time": [
      726.68,
      737.86
    ],
    "en": [
      "of Router3, loopback6, I configured IPv6 addresses. And same on Router4, loopback6, IPv6 addresses."
    ],
    "ru": [
      "Router3, loopback6, адреса IPv6 я настроил. То же самое на адресах Router4, loopback6, IPv6."
    ]
  },
  {
    "time": [
      737.86,
      744.19
    ],
    "en": [
      "So finally, just this last step in task 1, step 10. From Router4, try to ping Router3's"
    ],
    "ru": [
      "Итак, наконец, последний шаг в задаче 1, шаг 10. С Router4 попробуйте проверить связь с Router3."
    ]
  },
  {
    "time": [
      744.19,
      756.752
    ],
    "en": [
      "global unicast serial 0/1 IPv6 address. So, that should work, let's try. PING 2001:1:3:1::1."
    ],
    "ru": [
      "глобальный одноадресный последовательный IPv6-адрес 0/1. Итак, это должно сработать, давайте попробуем. ПИНГ 2001: 1: 3: 1 :: 1."
    ]
  },
  {
    "time": [
      756.752,
      763.81
    ],
    "en": [
      "Oh, I am in interface configuration mode. I'll just exit out of there and try that once"
    ],
    "ru": [
      "О, я нахожусь в режиме настройки интерфейса. Я просто выйду оттуда и попробую один раз"
    ]
  },
  {
    "time": [
      763.81,
      772.47
    ],
    "en": [
      "again. Okay, the ping works. And then it says to try to ping Router3's global unicast loopback6"
    ],
    "ru": [
      "опять таки. Ладно, пинг работает. И затем он говорит, чтобы попытаться проверить связь с глобальной петлей одноадресной рассылки Router36."
    ]
  },
  {
    "time": [
      772.47,
      781.58
    ],
    "en": [
      "IPv6 address. So let's try that. I'll change this to a 2. And the ping is not working."
    ],
    "ru": [
      "IPv6-адрес. Итак, давайте попробуем это. Поменяю на 2. И пинг не работает."
    ]
  },
  {
    "time": [
      781.58,
      788.53
    ],
    "en": [
      "So, why is that? Router4 can ping the directly connected interface here, but not the loopback"
    ],
    "ru": [
      "Итак, почему это так? Router4 может пинговать напрямую подключенный интерфейс, но не петлю"
    ]
  },
  {
    "time": [
      788.53,
      794.8
    ],
    "en": [
      "interface in Router3. And the answer as to why that is is pretty simple. SHOW IPV6 ROUTE"
    ],
    "ru": [
      "интерфейс в Router3. И ответ на вопрос, почему это так, довольно прост. ПОКАЗАТЬ МАРШРУТ IPV6"
    ]
  },
  {
    "time": [
      794.8,
      803.19
    ],
    "en": [
      "here on Router4. And there is no route to the 2001:1:3:2 network which Router3's loopback"
    ],
    "ru": [
      "здесь, на Router4. И нет маршрута к сети 2001: 1: 3: 2, в которой шлейф Router3"
    ]
  },
  {
    "time": [
      803.19,
      809.1
    ],
    "en": [
      "interface is in. So Router4 simply doesn't know about that network. So we could configure"
    ],
    "ru": [
      "интерфейс присутствует. Итак, Router4 просто не знает об этой сети. Итак, мы могли настроить"
    ]
  },
  {
    "time": [
      809.1,
      815.13
    ],
    "en": [
      "a static route on Router4 and then a static route on Router3 to Router4's loopback interface."
    ],
    "ru": [
      "статический маршрут на Router4, а затем статический маршрут на Router3 к интерфейсу обратной связи Router4."
    ]
  },
  {
    "time": [
      815.13,
      821.88
    ],
    "en": [
      "But in this lab we are not going to do that, we are going to use RIPng, RIP next generation."
    ],
    "ru": [
      "Но в этой лабораторной работе мы не собираемся этого делать, мы будем использовать RIPng, RIP следующего поколения."
    ]
  },
  {
    "time": [
      821.88,
      828.03
    ],
    "en": [
      "So let's go on to Task 2. On Router3 and Router4, globally enable RIP for IPv6. Name the process"
    ],
    "ru": [
      "Итак, перейдем к задаче 2. На маршрутизаторах Router3 и Router4 глобально включите RIP для IPv6. Назовите процесс"
    ]
  },
  {
    "time": [
      828.03,
      835.63
    ],
    "en": [
      "boson. So we haven't covered RIPng configuration in the course yet, and we won't because it's"
    ],
    "ru": [
      "бозон. Итак, мы еще не рассмотрели конфигурацию RIPng в курсе, и мы не будем, потому что это"
    ]
  },
  {
    "time": [
      835.63,
      841.7
    ],
    "en": [
      "not actually in the exam topics list, but you can check how to do that here. IPV6 ROUTER"
    ],
    "ru": [
      "на самом деле нет в списке тем экзамена, но вы можете узнать, как это сделать, здесь. IPV6 МАРШРУТИЗАТОР"
    ]
  },
  {
    "time": [
      841.7,
      852.37
    ],
    "en": [
      "RIP process-name. So it said to use a process name of boson. IPV6 ROUTER RIP boson. Okay,"
    ],
    "ru": [
      "Имя-процесса RIP. Таким образом, было сказано использовать имя процесса boson. IPV6 ROUTER RIP-бозон. Хорошо,"
    ]
  },
  {
    "time": [
      852.37,
      864.78
    ],
    "en": [
      "and then Router3. IPV6 ROUTER RIP boson. Okay, that's it. Let me just check, DO SHOW IPV6"
    ],
    "ru": [
      "а затем Router3. IPV6 ROUTER RIP-бозон. Ладно, вот и все. Позвольте мне просто проверить, ПОКАЗАТЬ IPV6"
    ]
  },
  {
    "time": [
      864.78,
      874.73
    ],
    "en": [
      "PROTOCOLS. Okay, IPv6 routing protocol is 'rip boson'. That doesn't mean 'rest in peace"
    ],
    "ru": [
      "ПРОТОКОЛЫ. Хорошо, протокол маршрутизации IPv6 - это «рип-бозон». Это не значит, что покойся с миром"
    ]
  },
  {
    "time": [
      874.73,
      883.15
    ],
    "en": [
      "boson', by the way, Boson is alive and well. Okay, step 2. Issue the SHOW IPV6 ROUTE command"
    ],
    "ru": [
      "бозон, кстати, Бозон жив-здоров. Хорошо, шаг 2. Введите команду SHOW IPV6 ROUTE."
    ]
  },
  {
    "time": [
      883.15,
      892.5
    ],
    "en": [
      "on Router3. What RIP routes are being advertised? Why? Okay, DO SHOW IPV6 ROUTE. Okay, I don't"
    ],
    "ru": [
      "на Router3. Какие маршруты RIP объявляются? Почему? Хорошо, ПОКАЗАТЬ МАРШРУТ IPV6. Хорошо я не"
    ]
  },
  {
    "time": [
      892.5,
      899.77
    ],
    "en": [
      "see any RIP routes. Why is that? Well that's because Router4 and also on Router3, we haven't"
    ],
    "ru": [
      "увидеть любые маршруты RIP. Это почему? Это потому, что Router4, а также Router3, у нас нет"
    ]
  },
  {
    "time": [
      899.77,
      906.06
    ],
    "en": [
      "enabled RIPng directly on the interfaces yet. We've enabled RIP, the RIP process, on the"
    ],
    "ru": [
      "включил RIPng прямо на интерфейсах. Мы включили RIP, процесс RIP, на"
    ]
  },
  {
    "time": [
      906.06,
      912.36
    ],
    "en": [
      "router, but it's still not activated on any interfaces. Okay, on Router4 try to ping the"
    ],
    "ru": [
      "маршрутизатор, но он по-прежнему не активирован ни на одном из интерфейсов. Хорошо, на Router4 попробуйте пропинговать"
    ]
  },
  {
    "time": [
      912.36,
      919.37
    ],
    "en": [
      "IPv6 address on Router3's loopback6 interface. Okay, I'll try that but I can tell you now"
    ],
    "ru": [
      "IPv6-адрес на интерфейсе loopback6 Router3. Хорошо, я попробую, но я могу сказать тебе сейчас"
    ]
  },
  {
    "time": [
      919.37,
      928.51
    ],
    "en": [
      "that the ping will not succeed. And indeed it does not because Router3 isn't advertising"
    ],
    "ru": [
      "что пинг не удастся. И действительно, это не так, потому что Router3 не рекламирует"
    ]
  },
  {
    "time": [
      928.51,
      936.78
    ],
    "en": [
      "any RIP routes yet. Okay, so now we are going to enable RIP on the interfaces. So you can"
    ],
    "ru": [
      "каких-либо маршрутов RIP пока нет. Хорошо, теперь мы собираемся включить RIP на интерфейсах. Так что вы можете"
    ]
  },
  {
    "time": [
      936.78,
      943.84
    ],
    "en": [
      "see the command, how to do that up here. IPV6 RIP process-name ENABLE, on the interface."
    ],
    "ru": [
      "см. команду, как это сделать, здесь. IPV6 RIP имя-процесса ENABLE на интерфейсе."
    ]
  },
  {
    "time": [
      943.84,
      957.59
    ],
    "en": [
      "So, on Router4 that is serial0/0 first. IPV6 RIP boson ENABLE. Okay, that was it. And then"
    ],
    "ru": [
      "Итак, на Router4 это сначала serial0 / 0. IPV6 RIP-бозон ВКЛЮЧИТЬ. Ладно, вот и все. А потом"
    ]
  },
  {
    "time": [
      957.59,
      967.32
    ],
    "en": [
      "the loopback6 interface. IPV6 RIP boson ENABLE. Okay that's all for R4. Now let's do it on"
    ],
    "ru": [
      "интерфейс loopback6. IPV6 RIP-бозон ВКЛЮЧИТЬ. Ладно, это все для R4. Теперь давайте сделаем это на"
    ]
  },
  {
    "time": [
      967.32,
      983.36
    ],
    "en": [
      "R3. INTERFACE S0/1. IPv6 RIP boson ENABLE. And on loopback6. Okay, that should be it."
    ],
    "ru": [
      "R3. ИНТЕРФЕЙС S0 / 1. Бозон IPv6 RIP ВКЛЮЧИТЬ. И по шлейфу 6. Хорошо, так и должно быть."
    ]
  },
  {
    "time": [
      983.36,
      989.21
    ],
    "en": [
      "Let's go back to task 2. Allow time for the network to converge. So RIP can be kind of"
    ],
    "ru": [
      "Вернемся к задаче 2. Дайте время сети сойтись. Так что RIP может быть своего рода"
    ]
  },
  {
    "time": [
      989.21,
      993.711
    ],
    "en": [
      "slow, so we gotta wait for them to learn the routes. And then issue the SHOW IPV6 ROUTE"
    ],
    "ru": [
      "медленно, поэтому нам придется подождать, пока они узнают маршруты. А затем выдайте SHOW IPV6 ROUTE"
    ]
  },
  {
    "time": [
      993.711,
      1000.38
    ],
    "en": [
      "command on Router3. Do you see a route from Router3 to Router4's loopback6 interface?"
    ],
    "ru": [
      "команда на Router3. Вы видите маршрут от Router3 к интерфейсу loopback6 Router4?"
    ]
  },
  {
    "time": [
      1000.38,
      1008.55
    ],
    "en": [
      "Hopefully that was enough time, let's check. DO SHOW IPV6 ROUTE. And yes, this should be"
    ],
    "ru": [
      "Надеюсь, времени хватило, давайте проверим. ПОКАЗАТЬ МАРШРУТ IPV6. И да, это должно быть"
    ]
  },
  {
    "time": [
      1008.55,
      1016.91
    ],
    "en": [
      "Router4's loopback6 interface. On Router4, attempt to ping Router3's loopback interface."
    ],
    "ru": [
      "Интерфейс loopback6 маршрутизатора Router4. На Router4 попытайтесь проверить связь с петлевым интерфейсом Router3."
    ]
  },
  {
    "time": [
      1016.91,
      1027.589
    ],
    "en": [
      "Okay let's try that. DO PING 2001:1:3:2::1. Okay, and the ping works. So that means Router4"
    ],
    "ru": [
      "Хорошо, давай попробуем. ПИНГ 2001: 1: 3: 2 :: 1. Ладно, пинг работает. Значит, Router4"
    ]
  },
  {
    "time": [
      1027.589,
      1038.75
    ],
    "en": [
      "also has a route to Router3's loopback interface. And here it is. Right there. Okay, on Router3"
    ],
    "ru": [
      "также имеет маршрут к интерфейсу обратной связи Router3. И вот оно. Прямо там. Хорошо, на Router3"
    ]
  },
  {
    "time": [
      1038.75,
      1043.439
    ],
    "en": [
      "issue the SHOW IPV6 PROTOCOLS command. You should note that Router3 is sending and receiving"
    ],
    "ru": [
      "введите команду SHOW IPV6 PROTOCOLS. Обратите внимание, что Router3 отправляет и принимает"
    ]
  },
  {
    "time": [
      1043.439,
      1048.74
    ],
    "en": [
      "updates on the serial0/1 interface by using the 'rip boson' process. Okay, we saw that"
    ],
    "ru": [
      "обновления интерфейса serial0 / 1 с помощью процесса «rip boson». Хорошо, мы видели это"
    ]
  },
  {
    "time": [
      1048.74,
      1058.12
    ],
    "en": [
      "command earlier but let's check it again now. IPv6 routing protocol is rip boson, and there"
    ],
    "ru": [
      "ранее, но давайте проверим ее еще раз. Протокол маршрутизации IPv6 - это рип-бозон, а там"
    ]
  },
  {
    "time": [
      1058.12,
      1065.46
    ],
    "en": [
      "it is. Note that the loopback6 interface isn't displayed, just the serial interface. Okay,"
    ],
    "ru": [
      "Это. Обратите внимание, что интерфейс loopback6 не отображается, только последовательный интерфейс. Хорошо,"
    ]
  },
  {
    "time": [
      1065.46,
      1073.259
    ],
    "en": [
      "so in task 3 you would go on to configure IPv6 here between Router1 and Router3, but"
    ],
    "ru": [
      "поэтому в задаче 3 вы продолжите настройку IPv6 между Router1 и Router3, но"
    ]
  },
  {
    "time": [
      1073.259,
      1077.509
    ],
    "en": [
      "for today's lab demonstration we'll leave it here. So, if you want to get a copy of"
    ],
    "ru": [
      "для сегодняшней лабораторной демонстрации мы оставим его здесь. Итак, если вы хотите получить копию"
    ]
  },
  {
    "time": [
      1077.509,
      1084.11
    ],
    "en": [
      "Boson NetSim for yourself, please follow the link in the video description."
    ],
    "ru": [
      "Для себя Boson NetSim перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      1084.11,
      1089.37
    ],
    "en": [
      "Before finishing today’s video I want to thank my JCNP-level channel members. To join,"
    ],
    "ru": [
      "Прежде чем закончить сегодняшнее видео, я хочу поблагодарить участников моего канала уровня JCNP. Присоединиться,"
    ]
  },
  {
    "time": [
      1089.37,
      1094.529
    ],
    "en": [
      "please click the ‘Join’ button under the video. Thank you to O J, Magrathea, TheGunguy,"
    ],
    "ru": [
      "нажмите кнопку «Присоединиться» под видео. Спасибо O J, Magrathea, TheGunguy,"
    ]
  },
  {
    "time": [
      1094.529,
      1100.95
    ],
    "en": [
      "l33america, Brandon, Njabulo, Benjamin, Tshepiso, Justin, Nil, Prakaash, Nasir, Erlison, Apogee,"
    ],
    "ru": [
      "l33america, Brandon, Njabulo, Benjamin, Tshepiso, Justin, Nil, Prakaash, Nasir, Erlison, Apogee,"
    ]
  },
  {
    "time": [
      1100.95,
      1107.95
    ],
    "en": [
      "Wasseem, Marko, Flodo, Daming, Joshua, Jhilmar, Samil, Ed, Value, John, Funnydart, Scott,"
    ],
    "ru": [
      "Вассим, Марко, Флодо, Даминг, Джошуа, Джилмар, Самил, Эд, Вэлью, Джон, Фаннидарт, Скотт,"
    ]
  },
  {
    "time": [
      1107.95,
      1114.95
    ],
    "en": [
      "Hassan, Marek, Velvijaykum, C Mohd, Mark, Yousif, Sidi, Boson Software, Devin, Lito,"
    ],
    "ru": [
      "Хасан, Марек, Велвиджайкум, Си Мохд, Марк, Юсиф, Сиди, Boson Software, Девин, Лито,"
    ]
  },
  {
    "time": [
      1114.95,
      1120.019
    ],
    "en": [
      "Yonatan, and Vance. Sorry if I pronounced your name incorrectly, but thank you so much"
    ],
    "ru": [
      "Йонатан и Вэнс. Извините, если я неправильно произнес ваше имя, но большое вам спасибо"
    ]
  },
  {
    "time": [
      1120.019,
      1126.23
    ],
    "en": [
      "for your support. This is the list of JCNP-level members at the time of recording by the way,"
    ],
    "ru": [
      "за вашу поддержку. Кстати, это список участников уровня JCNP на момент записи,"
    ]
  },
  {
    "time": [
      1126.23,
      1131.51
    ],
    "en": [
      "November 8th 2020, if you signed up recently and your name isn’t on here don’t worry,"
    ],
    "ru": [
      "8 ноября 2020 г., если вы зарегистрировались недавно и вашего имени здесь нет, не волнуйтесь,"
    ]
  },
  {
    "time": [
      1131.51,
      1135.15
    ],
    "en": [
      "you’ll be in future videos."
    ],
    "ru": [
      "вы будете в будущих видео."
    ]
  },
  {
    "time": [
      1135.15,
      1140.019
    ],
    "en": [
      "Thank you for watching. Please subscribe to the channel, like the video, leave a comment,"
    ],
    "ru": [
      "Спасибо за просмотр. Подпишитесь на канал, поставьте лайк видео, оставьте комментарий,"
    ]
  },
  {
    "time": [
      1140.019,
      1145.1
    ],
    "en": [
      "and share the video with anyone else studying for the CCNA. If you want to leave a tip,"
    ],
    "ru": [
      "и поделитесь видео со всеми, кто учится на CCNA. Если хочешь оставить чаевые,"
    ]
  },
  {
    "time": [
      1145.1,
      1150.62
    ],
    "en": [
      "check the links in the description. I'm also a Brave verified publisher and accept BAT,"
    ],
    "ru": [
      "проверьте ссылки в описании. Я также проверенный издатель Brave и принимаю BAT,"
    ]
  },
  {
    "time": [
      1150.62,
      1150.62
    ],
    "en": [
      "or Basic Attention Token, tips via the Brave browser. That's all for now."
    ],
    "ru": [
      "или Basic Attention Token, подсказки через браузер Brave. На этом пока все."
    ]
  }
]