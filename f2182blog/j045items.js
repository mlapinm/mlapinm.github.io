let objs = [
  {
    "time": [
      1.51,
      3.81
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
      3.81,
      7.29
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
      7.29,
      10.95
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
      10.95,
      16.59
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
      16.59,
      18.03
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
      18.03,
      22.1
    ],
    "en": [
      "Also, remember to sign up via the link in the description to get all of the lab files"
    ],
    "ru": [
      "Также не забудьте зарегистрироваться по ссылке в описании, чтобы получить все лабораторные файлы."
    ]
  },
  {
    "time": [
      22.1,
      26.73
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
      26.73,
      31.09
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
      31.09,
      34.989
    ],
    "en": [
      "the CCNA, click the link in the video description to check it out."
    ],
    "ru": [
      "CCNA, щелкните ссылку в описании видео, чтобы ознакомиться с ним."
    ]
  },
  {
    "time": [
      34.989,
      40.079
    ],
    "en": [
      "It’s a network simulator like packet tracer, but it’s even better, and it includes over"
    ],
    "ru": [
      "Это сетевой симулятор, похожий на трассировщик пакетов, но он даже лучше и включает в себя более"
    ]
  },
  {
    "time": [
      40.079,
      45.55
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
      40.079,
      45.55
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
      45.55,
      48.139
    ],
    "en": [
      "but also deepen your understanding of the exam topics."
    ],
    "ru": [
      "но также углубите свое понимание экзаменационных тем."
    ]
  },
  {
    "time": [
      48.139,
      53.85
    ],
    "en": [
      "I used it myself when studying for my certifications, so I feel confident about recommending it"
    ],
    "ru": [
      "Я сам использовал его, когда готовился к получению сертификатов, поэтому могу с уверенностью рекомендовать его."
    ]
  },
  {
    "time": [
      53.85,
      55.569
    ],
    "en": [
      "to all of you."
    ],
    "ru": [
      "всем вам."
    ]
  },
  {
    "time": [
      55.569,
      60.1
    ],
    "en": [
      "Watch until the end of this video, we’ll take a look at a lab from NetSim."
    ],
    "ru": [
      "Смотрите до конца этого видео, мы рассмотрим лабораторную работу от NetSim."
    ]
  },
  {
    "time": [
      60.1,
      66.87
    ],
    "en": [
      "If you want to get your own copy of NetSim, please follow the link in the video description."
    ],
    "ru": [
      "Если вы хотите получить собственную копию NetSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      66.87,
      70.35
    ],
    "en": [
      "In this lab we will configure floating static routes."
    ],
    "ru": [
      "В этой лабораторной работе мы настроим плавающие статические маршруты."
    ]
  },
  {
    "time": [
      70.35,
      74.71000000000001
    ],
    "en": [
      "As I explained in the lecture video, floating static routes are configured just like regular"
    ],
    "ru": [
      "Как я объяснил в видео лекции, плавающие статические маршруты настраиваются так же, как и обычные."
    ]
  },
  {
    "time": [
      74.71000000000001,
      80.51
    ],
    "en": [
      "static routes, except you set a higher administrative distance value so that the route is less preferred"
    ],
    "ru": [
      "статические маршруты, за исключением того, что вы устанавливаете более высокое значение административного расстояния, чтобы маршрут был менее предпочтительным"
    ]
  },
  {
    "time": [
      80.51,
      83.28
    ],
    "en": [
      "than a route learned by a dynamic routing protocol."
    ],
    "ru": [
      "чем маршрут, изученный протоколом динамической маршрутизации."
    ]
  },
  {
    "time": [
      83.28,
      88.39
    ],
    "en": [
      "So, although static routes by default have an administrative distance of 5, lower than"
    ],
    "ru": [
      "Таким образом, хотя статические маршруты по умолчанию имеют административное расстояние 5, что меньше, чем"
    ]
  },
  {
    "time": [
      88.39,
      95.91
    ],
    "en": [
      "any dynamic routing protocol, we can make it function as a backup route by making the AD higher."
    ],
    "ru": [
      "любой протокол динамической маршрутизации, мы можем заставить его функционировать как резервный маршрут, повысив AD."
    ]
  },
  {
    "time": [
      95.91,
      105.21000000000001
    ],
    "en": [
      "AD higher. In this network, Enterprise A has two LANs, 10.0.1.0/24 connected to R1 and 10.0.2.0/24"
    ],
    "ru": [
      "AD выше. В этой сети предприятие A имеет две локальные сети: 10.0.1.0/24, подключенные к R1, и 10.0.2.0/24."
    ]
  },
  {
    "time": [
      105.21000000000001,
      110.9
    ],
    "en": [
      "connected to R2, and R1 and R2 are directly connected by fiber optic cabling."
    ],
    "ru": [
      "подключены к R2, а R1 и R2 напрямую подключены оптоволоконным кабелем."
    ]
  },
  {
    "time": [
      110.9,
      118.62
    ],
    "en": [
      "R1 and R2 each have two Internet connections, one to ISP A, with SPR1 and SPR2, meaning"
    ],
    "ru": [
      "R1 и R2 имеют по два подключения к Интернету, одно к провайдеру A, с SPR1 и SPR2, что означает"
    ]
  },
  {
    "time": [
      118.62,
      121.99
    ],
    "en": [
      "Service Provider Router 1 and 2."
    ],
    "ru": [
      "Маршрутизатор поставщика услуг 1 и 2."
    ]
  },
  {
    "time": [
      121.99,
      128.47899999999998
    ],
    "en": [
      "Also a connection to ISP B, here are ISP B R1 and R2."
    ],
    "ru": [
      "Также подключение к ISP B, вот ISP B R1 и R2."
    ]
  },
  {
    "time": [
      128.47899999999998,
      133.5
    ],
    "en": [
      "In this lab we are going to configure floating static routes on R1 and R2 to act as backup"
    ],
    "ru": [
      "В этой лабораторной работе мы собираемся настроить плавающие статические маршруты на маршрутизаторах R1 и R2 в качестве резервных."
    ]
  },
  {
    "time": [
      133.5,
      141.98
    ],
    "en": [
      "routes to allow R1 to reach R2 via ISP A, even if the direct connection between R1 and R2 fails."
    ],
    "ru": [
      "маршруты, чтобы позволить R1 достичь R2 через ISP A, даже если прямое соединение между R1 и R2 не удается."
    ]
  },
  {
    "time": [
      141.98,
      145.81
    ],
    "en": [
      "So, the first step is to check the routing tables of R1 and R2."
    ],
    "ru": [
      "Итак, первым делом нужно проверить таблицы маршрутизации R1 и R2."
    ]
  },
  {
    "time": [
      145.81,
      151.5
    ],
    "en": [
      "I’ll check on R1 first. ENABLE."
    ],
    "ru": [
      "Сначала проверю R1. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      151.5,
      153.299
    ],
    "en": [
      "ENABLE. SHOW IP ROUTE."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. ПОКАЗАТЬ IP-МАРШРУТ."
    ]
  },
  {
    "time": [
      153.299,
      158.9
    ],
    "en": [
      "So, we have connected and local routes for each of R1’s interfaces, a static default"
    ],
    "ru": [
      "Итак, мы подключили локальные маршруты для каждого из интерфейсов R1, статический по умолчанию"
    ]
  },
  {
    "time": [
      158.9,
      170.159
    ],
    "en": [
      "route pointing to 203.0.113.9, which is ISPBR1, and a route to 10.0.2.0/24, learned via R2."
    ],
    "ru": [
      "маршрут, указывающий на 203.0.113.9, который является ISPBR1, и маршрут на 10.0.2.0/24, изученный через R2."
    ]
  },
  {
    "time": [
      170.159,
      173.359
    ],
    "en": [
      "Which routing protocol was used to learn this route?"
    ],
    "ru": [
      "Какой протокол маршрутизации использовался для изучения этого маршрута?"
    ]
  },
  {
    "time": [
      173.359,
      178.11
    ],
    "en": [
      "This O here means OSPF, as you can see in the legend up here."
    ],
    "ru": [
      "Здесь O означает OSPF, как вы можете видеть в легенде здесь."
    ]
  },
  {
    "time": [
      178.11,
      184.379
    ],
    "en": [
      "So, Enterprise A is using OSPF as their IGP, interior gateway protocol."
    ],
    "ru": [
      "Итак, Enterprise A использует OSPF в качестве протокола внутреннего шлюза IGP."
    ]
  },
  {
    "time": [
      184.379,
      189.51
    ],
    "en": [
      "OSPF is by far the most common choice these days, which is why it was selected by Cisco"
    ],
    "ru": [
      "OSPF - безусловно, самый распространенный выбор в наши дни, поэтому он был выбран Cisco."
    ]
  },
  {
    "time": [
      189.51,
      194.549
    ],
    "en": [
      "as the only dynamic routing protocol you need to learn in depth for the new CCNA."
    ],
    "ru": [
      "как единственный протокол динамической маршрутизации, который вам необходимо изучить для нового CCNA."
    ]
  },
  {
    "time": [
      194.549,
      199.269
    ],
    "en": [
      "Now, which route will be used if PC1 tries to access SRV1?"
    ],
    "ru": [
      "Теперь, какой маршрут будет использоваться, если ПК1 попытается получить доступ к SRV1?"
    ]
  },
  {
    "time": [
      199.269,
      209.079
    ],
    "en": [
      "SRV1’s IP address is 10.0.2.1, so the most specific match is this one here to R2, the OSPF route."
    ],
    "ru": [
      "IP-адрес SRV1 - 10.0.2.1, поэтому наиболее точным совпадением здесь является R2, ​​маршрут OSPF."
    ]
  },
  {
    "time": [
      209.079,
      215.579
    ],
    "en": [
      "OSPF route. How about if PC1 tries to access the remote server 1.1.1.1 over the Internet?"
    ],
    "ru": [
      "Маршрут OSPF. Как насчет того, чтобы ПК1 попытался получить доступ к удаленному серверу 1.1.1.1 через Интернет?"
    ]
  },
  {
    "time": [
      215.579,
      219.61
    ],
    "en": [
      "This server isn’t in the network diagram by the way, but it’s somewhere on the Internet."
    ],
    "ru": [
      "Кстати, этого сервера нет на схеме сети, он находится где-то в Интернете."
    ]
  },
  {
    "time": [
      219.61,
      227.599
    ],
    "en": [
      "Well, the only route that matches is the default route, so it will use the default route to ISPB."
    ],
    "ru": [
      "Что ж, единственный подходящий маршрут - это маршрут по умолчанию, поэтому он будет использовать маршрут по умолчанию к ISPB."
    ]
  },
  {
    "time": [
      227.599,
      235.409
    ],
    "en": [
      "ISPB. I will ping to test each of these, but first let’s take a look at R2’s routing table. ENABLE."
    ],
    "ru": [
      "ISPB. Я буду пинговать, чтобы протестировать каждый из них, но сначала давайте взглянем на таблицу маршрутизации R2. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      235.409,
      236.879
    ],
    "en": [
      "ENABLE. SHOW IP ROUTE."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. ПОКАЗАТЬ IP-МАРШРУТ."
    ]
  },
  {
    "time": [
      236.879,
      240.689
    ],
    "en": [
      "So, its route table is similar to R1’s."
    ],
    "ru": [
      "Таким образом, его таблица маршрутов аналогична R1."
    ]
  },
  {
    "time": [
      240.689,
      247.64
    ],
    "en": [
      "Connected and local routes for its interfaces, a static default route to 203.0.113.13, which"
    ],
    "ru": [
      "Подключенные и локальные маршруты для его интерфейсов, статический маршрут по умолчанию к 203.0.113.13, который"
    ]
  },
  {
    "time": [
      247.64,
      256.299
    ],
    "en": [
      "is ISPBR2, and an OSPF route to 10.0.1.0, learned via 10.0.0.1, which is R1."
    ],
    "ru": [
      "ISPBR2, а маршрут OSPF к 10.0.1.0, изученный через 10.0.0.1, который является R1."
    ]
  },
  {
    "time": [
      256.299,
      265.07
    ],
    "en": [
      "So, if PC1 tries to ping SRV1, when SRV1 sends the ICMP echo reply message back to PC1, R2"
    ],
    "ru": [
      "Итак, если ПК1 пытается проверить связь с SRV1, когда SRV1 отправляет сообщение эхо-ответа ICMP обратно на ПК1, R2"
    ]
  },
  {
    "time": [
      265.07,
      269.09
    ],
    "en": [
      "will forward it to R1, it won’t take the path via ISP A."
    ],
    "ru": [
      "перенаправит его на маршрутизатор R1, он не будет проходить через интернет-провайдера A."
    ]
  },
  {
    "time": [
      269.09,
      272.87
    ],
    "en": [
      "Now let’s go on PC1 and try those pings."
    ],
    "ru": [
      "А теперь давайте возьмем PC1 и попробуем эти пинги."
    ]
  },
  {
    "time": [
      272.87,
      277.69
    ],
    "en": [
      "So, I will use simulation mode to view the path traffic takes, but first let me ping"
    ],
    "ru": [
      "Итак, я воспользуюсь режимом моделирования, чтобы посмотреть, как проходит трафик, но сначала позвольте мне проверить связь."
    ]
  },
  {
    "time": [
      277.69,
      286.45
    ],
    "en": [
      "both SRV1 and 1.1.1.1 from PC1 to allow all of the devices in the path to complete the ARP process."
    ],
    "ru": [
      "как SRV1, так и 1.1.1.1 с ПК1, чтобы позволить всем устройствам на пути завершить процесс ARP."
    ]
  },
  {
    "time": [
      286.45,
      299.26
    ],
    "en": [
      "ARP process. First I’ll ping SRV1. Ping 10.0.2.1."
    ],
    "ru": [
      "ARP-процесс. Сначала я пингую SRV1. Пинг 10.0.2.1."
    ]
  },
  {
    "time": [
      299.26,
      313.68
    ],
    "en": [
      "Ping 10.0.2.1. Okay, next I’ll ping the remote server over the Internet. Ping 1.1.1.1."
    ],
    "ru": [
      "Пинг 10.0.2.1. Хорошо, теперь я отправлю эхо-запрос на удаленный сервер через Интернет. Пинг 1.1.1.1."
    ]
  },
  {
    "time": [
      313.68,
      314.72
    ],
    "en": [
      "Ping 1.1.1.1. Okay, looks good."
    ],
    "ru": [
      "Пинг 1.1.1.1. Хорошо, выглядит хорошо."
    ]
  },
  {
    "time": [
      314.72,
      317.04
    ],
    "en": [
      "Now I’ll switch to simulation mode."
    ],
    "ru": [
      "Теперь я перейду в режим моделирования."
    ]
  },
  {
    "time": [
      317.04,
      322.09
    ],
    "en": [
      "And let’s ping SRV1. Ping 10.0.2.1."
    ],
    "ru": [
      "Пингуем SRV1. Пинг 10.0.2.1."
    ]
  },
  {
    "time": [
      322.09,
      331.85
    ],
    "en": [
      "Ping 10.0.2.1. It goes to R1, R2, then SRV1, which sends it back via R2, R1, and then it reaches PC1."
    ],
    "ru": [
      "Пинг 10.0.2.1. Он идет к R1, R2, затем к SRV1, который отправляет его обратно через R2, R1, а затем достигает ПК1."
    ]
  },
  {
    "time": [
      331.85,
      338.76
    ],
    "en": [
      "Okay, I’ll switch back to realtime mode, and cancel the ping using CTRL C. Next I’ll"
    ],
    "ru": [
      "Хорошо, я вернусь в режим реального времени и отключу эхо-запрос, нажав CTRL C. Затем я"
    ]
  },
  {
    "time": [
      338.76,
      347.12
    ],
    "en": [
      "ping the remote router, once again in simulation mode. Ping 1.1.1.1."
    ],
    "ru": [
      "ping удаленный маршрутизатор, еще раз в режиме моделирования. Пинг 1.1.1.1."
    ]
  },
  {
    "time": [
      347.12,
      354.05
    ],
    "en": [
      "Ping 1.1.1.1. Okay, it goes to R1, matches the default route on R1 and is sent to ISPBR1, which sends it"
    ],
    "ru": [
      "Пинг 1.1.1.1. Хорошо, он идет к R1, соответствует маршруту по умолчанию на R1 и отправляется ISPBR1, который отправляет его"
    ]
  },
  {
    "time": [
      354.05,
      356.84000000000003
    ],
    "en": [
      "back to R1, then PC1."
    ],
    "ru": [
      "обратно к R1, затем к ПК1."
    ]
  },
  {
    "time": [
      356.84000000000003,
      362.88
    ],
    "en": [
      "I said 1.1.1.1 is a server somewhere on the Internet, but of course there is no real Internet"
    ],
    "ru": [
      "Я сказал, что 1.1.1.1 - это сервер где-то в Интернете, но, конечно, настоящего Интернета нет"
    ]
  },
  {
    "time": [
      362.88,
      368.77
    ],
    "en": [
      "in Packet Tracer, 1.1.1.1 is just an internal interface on ISPBR1."
    ],
    "ru": [
      "в Packet Tracer 1.1.1.1 - это просто внутренний интерфейс ISPBR1."
    ]
  },
  {
    "time": [
      368.77,
      371.89
    ],
    "en": [
      "It’s called a ‘loopback’ interface."
    ],
    "ru": [
      "Это называется «петлевой» интерфейс."
    ]
  },
  {
    "time": [
      371.89,
      381.87
    ],
    "en": [
      "I’ll talk about loopback interfaces soon in the course, but let me quickly show you on ISPBR1. on ISPBR1. ENABLE."
    ],
    "ru": [
      "Я скоро расскажу о петлевых интерфейсах, но позвольте мне быстро показать вам ISPBR1. по ISPBR1. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      381.87,
      383.99
    ],
    "en": [
      "on ISPBR1. ENABLE. SHOW IP INTERFACE BRIEF."
    ],
    "ru": [
      "по ISPBR1. ВКЛЮЧИТЬ. ПОКАЗАТЬ КРАТКОЕ ОПИСАНИЕ IP-ИНТЕРФЕЙСА."
    ]
  },
  {
    "time": [
      383.99,
      390.49
    ],
    "en": [
      "So, I actually configured two loopback interfaces, loopback0 and loopback1, although I ended"
    ],
    "ru": [
      "Итак, я фактически настроил два интерфейса обратной петли, loopback0 и loopback1, хотя я закончил"
    ]
  },
  {
    "time": [
      390.49,
      392.94
    ],
    "en": [
      "up only using one."
    ],
    "ru": [
      "только с помощью одного."
    ]
  },
  {
    "time": [
      392.94,
      399.86
    ],
    "en": [
      "Similar to the SVIs on a Layer 3 switch, these loopback interface are not physical interfaces,"
    ],
    "ru": [
      "Подобно SVI на коммутаторе уровня 3, этот интерфейс обратной связи не является физическим интерфейсом,"
    ]
  },
  {
    "time": [
      399.86,
      402.96
    ],
    "en": [
      "but virtual interfaces inside of the router."
    ],
    "ru": [
      "но виртуальные интерфейсы внутри роутера."
    ]
  },
  {
    "time": [
      402.96,
      407.62
    ],
    "en": [
      "They have multiple uses which I will explain in a later video, but one convenient use is"
    ],
    "ru": [
      "У них есть несколько применений, которые я объясню в следующем видео, но одно удобное использование -"
    ]
  },
  {
    "time": [
      407.62,
      412.52
    ],
    "en": [
      "for labs like this, to simulate remote destination networks without actually have to set them"
    ],
    "ru": [
      "для таких лабораторий, чтобы моделировать удаленные сети назначения без необходимости их настройки."
    ]
  },
  {
    "time": [
      412.52,
      413.84000000000003
    ],
    "en": [
      "up in the lab."
    ],
    "ru": [
      "в лаборатории."
    ]
  },
  {
    "time": [
      413.84000000000003,
      422.87
    ],
    "en": [
      "So, the ‘remote server’ 1.1.1.1 isn’t actually a server, it’s just a virtual loopback address on ISPBR1."
    ],
    "ru": [
      "Итак, «удаленный сервер» 1.1.1.1 на самом деле не сервер, это просто виртуальный адрес обратной связи на ISPBR1."
    ]
  },
  {
    "time": [
      422.87,
      430.63
    ],
    "en": [
      "address on ISPBR1. Okay, next for step 2 we are tasked with configuring floating static routes on R1 and R2 so that"
    ],
    "ru": [
      "адрес на ISPBR1. Хорошо, на следующем шаге 2 нам нужно настроить плавающие статические маршруты на R1 и R2, чтобы"
    ]
  },
  {
    "time": [
      430.63,
      434.58
    ],
    "en": [
      "PC1 can reach SRV1 if the link between R1 and R2 fails."
    ],
    "ru": [
      "ПК1 может связаться с SRV1, если канал между R1 и R2 не работает."
    ]
  },
  {
    "time": [
      434.58,
      442.15
    ],
    "en": [
      "So, we will configure one floating static route each on R1 and R2, using ISP A as an alternate path."
    ],
    "ru": [
      "Итак, мы настроим по одному плавающему статическому маршруту на R1 и R2, используя ISP A в качестве альтернативного пути."
    ]
  },
  {
    "time": [
      442.15,
      445.93
    ],
    "en": [
      "alternate path. Let’s go on R1 first."
    ],
    "ru": [
      "альтернативный путь. Пойдем сначала по R1."
    ]
  },
  {
    "time": [
      445.93,
      448.86
    ],
    "en": [
      "Enter global config mode to configure the route."
    ],
    "ru": [
      "Войдите в режим глобальной конфигурации, чтобы настроить маршрут."
    ]
  },
  {
    "time": [
      448.86,
      456.65
    ],
    "en": [
      "CONF T. First, write the command as a normal static route, so IP ROUTE, followed by the"
    ],
    "ru": [
      "CONF T. Сначала напишите команду как обычный статический маршрут, поэтому IP ROUTE, а затем"
    ]
  },
  {
    "time": [
      456.65,
      465.99
    ],
    "en": [
      "destination network and mask, so 10.0.2.0 255.255.255.0, then the next-hop address,"
    ],
    "ru": [
      "сеть назначения и маска, поэтому 10.0.2.0 255.255.255.0, затем адрес следующего перехода,"
    ]
  },
  {
    "time": [
      465.99,
      473.31
    ],
    "en": [
      "which is the address of SPR1’s G0/0/0 interface, so 203.0.113.1."
    ],
    "ru": [
      "который является адресом интерфейса G0 / 0/0 SPR1, поэтому 203.0.113.1."
    ]
  },
  {
    "time": [
      473.31,
      475.4
    ],
    "en": [
      "Now I’ll use the question mark."
    ],
    "ru": [
      "Теперь я использую вопросительный знак."
    ]
  },
  {
    "time": [
      475.4,
      477.75
    ],
    "en": [
      "It says ‘distance metric’."
    ],
    "ru": [
      "Там написано «метрика расстояния»."
    ]
  },
  {
    "time": [
      477.75,
      481.889
    ],
    "en": [
      "The word metric might be a little confusing, because this isn’t the metric that dynamic"
    ],
    "ru": [
      "Слово \"метрика\" может немного сбить с толку, потому что это не та динамическая метрика."
    ]
  },
  {
    "time": [
      481.889,
      489.34
    ],
    "en": [
      "routing protocols use to select the best route to a destination, this is the AD, administrative distance."
    ],
    "ru": [
      "протоколы маршрутизации используют для выбора наилучшего маршрута к пункту назначения, это AD, административное расстояние."
    ]
  },
  {
    "time": [
      489.34,
      495.98
    ],
    "en": [
      "So, to make it a floating static route we have to set the AD higher than the route learned via R2."
    ],
    "ru": [
      "Итак, чтобы сделать его плавающим статическим маршрутом, мы должны установить AD выше, чем маршрут, полученный через R2."
    ]
  },
  {
    "time": [
      495.98,
      500.55
    ],
    "en": [
      "via R2. If we don’t do that, the static route will be selected instead of the OSPF route to enter"
    ],
    "ru": [
      "через R2. Если мы этого не сделаем, для входа будет выбран статический маршрут вместо маршрута OSPF."
    ]
  },
  {
    "time": [
      500.55,
      503.52
    ],
    "en": [
      "the route table, which is not what we want."
    ],
    "ru": [
      "таблица маршрутов, чего мы не хотим."
    ]
  },
  {
    "time": [
      503.52,
      508.46
    ],
    "en": [
      "We want the OSPF route to be used by default, and this static route to be a backup."
    ],
    "ru": [
      "Мы хотим, чтобы маршрут OSPF использовался по умолчанию, а этот статический маршрут был резервным."
    ]
  },
  {
    "time": [
      508.46,
      515.13
    ],
    "en": [
      "OSPF has an AD of 110, so let’s go with 111."
    ],
    "ru": [
      "OSPF имеет AD 110, так что давайте перейдем к 111."
    ]
  },
  {
    "time": [
      515.13,
      517.19
    ],
    "en": [
      "Now let’s check the routing table."
    ],
    "ru": [
      "Теперь давайте проверим таблицу маршрутизации."
    ]
  },
  {
    "time": [
      517.19,
      519.52
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
      519.52,
      522.02
    ],
    "en": [
      "Where’s the static route we just configured?"
    ],
    "ru": [
      "Где статический маршрут, который мы только что настроили?"
    ]
  },
  {
    "time": [
      522.02,
      528.39
    ],
    "en": [
      "It’s not here, because we set the AD higher than the OSPF route’s 110, the OSPF route"
    ],
    "ru": [
      "Его здесь нет, потому что мы устанавливаем AD выше, чем 110 маршрута OSPF, маршрут OSPF"
    ]
  },
  {
    "time": [
      528.39,
      531.39
    ],
    "en": [
      "is selected instead of the static route."
    ],
    "ru": [
      "выбран вместо статического маршрута."
    ]
  },
  {
    "time": [
      531.39,
      535.779
    ],
    "en": [
      "Okay, we aren’t done, R2 still needs its floating route or else the return traffic"
    ],
    "ru": [
      "Ладно, мы еще не закончили, R2 все еще нужен плавучий маршрут, иначе обратный трафик"
    ]
  },
  {
    "time": [
      535.779,
      541.78
    ],
    "en": [
      "from SRV1 to PC1 won’t have a backup route if the link between R1 and R2 goes down."
    ],
    "ru": [
      "от SRV1 к ПК1 не будет резервного маршрута, если канал между R1 и R2 выйдет из строя."
    ]
  },
  {
    "time": [
      541.78,
      546.49
    ],
    "en": [
      "So, let’s configure that on R2."
    ],
    "ru": [
      "Итак, давайте настроим это на R2."
    ]
  },
  {
    "time": [
      546.49,
      558.74
    ],
    "en": [
      "CONF T. IP ROUTE 10.0.1.0 255.255.255.0, and the next-hop will be SPR2’s G0/0/0 interface,"
    ],
    "ru": [
      "CONF T. IP ROUTE 10.0.1.0 255.255.255.0, и следующим переходом будет интерфейс G0 / 0/0 SPR2,"
    ]
  },
  {
    "time": [
      558.74,
      564.73
    ],
    "en": [
      "so 203.0.113.5, and let’s set the AD to 111 here as well."
    ],
    "ru": [
      "Итак, 203.0.113.5, и давайте также установим AD на 111."
    ]
  },
  {
    "time": [
      564.73,
      567.83
    ],
    "en": [
      "Okay, let’s check the route table."
    ],
    "ru": [
      "Хорошо, давайте проверим таблицу маршрутов."
    ]
  },
  {
    "time": [
      567.83,
      570.84
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
      570.84,
      574.23
    ],
    "en": [
      "Just like on R1, the route doesn’t appear yet."
    ],
    "ru": [
      "Как и на R1, маршрута пока нет."
    ]
  },
  {
    "time": [
      574.23,
      582.76
    ],
    "en": [
      "Now let’s shut down R2’s G0/2/0 interface and see if that changes. INTERFACE G0/2/0. INTERFACE G0/2/0. SHUTDOWN."
    ],
    "ru": [
      "Теперь давайте отключим интерфейс R2 G0 / 2/0 и посмотрим, изменится ли это. ИНТЕРФЕЙС G0 / 2/0. ИНТЕРФЕЙС G0 / 2/0. НЕИСПРАВНОСТЬ."
    ]
  },
  {
    "time": [
      582.76,
      590.46
    ],
    "en": [
      "INTERFACE G0/2/0. SHUTDOWN. Okay, now the OSPF route is invalid, it can no longer be used to reach 10.0.1.0/24."
    ],
    "ru": [
      "ИНТЕРФЕЙС G0 / 2/0. НЕИСПРАВНОСТЬ. Хорошо, теперь маршрут OSPF недействителен, его больше нельзя использовать для достижения 10.0.1.0/24."
    ]
  },
  {
    "time": [
      590.46,
      594.64
    ],
    "en": [
      "So, let’s check the route table and see if the floating static route was inserted"
    ],
    "ru": [
      "Итак, давайте проверим таблицу маршрутов и посмотрим, был ли вставлен плавающий статический маршрут."
    ]
  },
  {
    "time": [
      594.64,
      597.04
    ],
    "en": [
      "into the table instead."
    ],
    "ru": [
      "вместо этого в таблицу."
    ]
  },
  {
    "time": [
      597.04,
      600.74
    ],
    "en": [
      "DO SHOW IP ROUTE. There it is."
    ],
    "ru": [
      "ПОКАЗАТЬ IP-МАРШРУТ. Вот оно."
    ]
  },
  {
    "time": [
      600.74,
      609.07
    ],
    "en": [
      "There it is. 10.0.1.0/24 via 203.0.113.5, and here you can see the AD of 111."
    ],
    "ru": [
      "Вот оно. 10.0.1.0/24 через 203.0.113.5, и здесь вы можете увидеть AD 111."
    ]
  },
  {
    "time": [
      609.07,
      612.79
    ],
    "en": [
      "Let’s go back on R1 and check."
    ],
    "ru": [
      "Вернемся к R1 и проверим."
    ]
  },
  {
    "time": [
      612.79,
      615.19
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
      615.19,
      619.48
    ],
    "en": [
      "Okay, same on R1, the floating static route now appears in the route table."
    ],
    "ru": [
      "Хорошо, то же самое на R1, теперь плавающий статический маршрут отображается в таблице маршрутов."
    ]
  },
  {
    "time": [
      619.48,
      624.15
    ],
    "en": [
      "So, let’s try that ping from PC1 to SRV1 again."
    ],
    "ru": [
      "Итак, давайте еще раз попробуем пинговать с ПК1 на SRV1."
    ]
  },
  {
    "time": [
      624.15,
      628.32
    ],
    "en": [
      "Once again, I will first ping in realtime mode so that ARP can complete."
    ],
    "ru": [
      "Еще раз, я сначала пингуюсь в режиме реального времени, чтобы ARP мог завершиться."
    ]
  },
  {
    "time": [
      628.32,
      636.79
    ],
    "en": [
      "With this new route, R1, SPR1, SPR2, and R2 will have to use ARP again. Okay, let’s ping."
    ],
    "ru": [
      "С этим новым маршрутом R1, SPR1, SPR2 и R2 должны будут снова использовать ARP. Ладно, пингуем."
    ]
  },
  {
    "time": [
      636.79,
      639.68
    ],
    "en": [
      "Okay, let’s ping. PING 10.0.2.1."
    ],
    "ru": [
      "Ладно, пингуем. ПИНГ 10.0.2.1."
    ]
  },
  {
    "time": [
      639.68,
      642.15
    ],
    "en": [
      "Now, here’s a cool packet tracer trick."
    ],
    "ru": [
      "А теперь вот крутой трюк с трассировщиком пакетов."
    ]
  },
  {
    "time": [
      642.15,
      646.4
    ],
    "en": [
      "Click this button here to fast forward 30 seconds in the simulation, to the point that"
    ],
    "ru": [
      "Нажмите эту кнопку здесь, чтобы перемотать симуляцию на 30 секунд вперед до такой степени, чтобы"
    ]
  },
  {
    "time": [
      646.4,
      648.88
    ],
    "en": [
      "the ping is complete."
    ],
    "ru": [
      "пинг завершен."
    ]
  },
  {
    "time": [
      648.88,
      654.89
    ],
    "en": [
      "If your ping still hasn’t gone through, try the ping again, and fast forward again like this."
    ],
    "ru": [
      "Если ваш пинг по-прежнему не прошел, попробуйте пинг еще раз и снова перемотайте вперед вот так."
    ]
  },
  {
    "time": [
      654.89,
      661.87
    ],
    "en": [
      "like this. The pings are going , so ARP is complete, now let’s switch to simulation mode and ping again."
    ],
    "ru": [
      "нравится. Пинги идут, так что ARP завершен, теперь давайте переключимся в режим имитации и снова пингуем."
    ]
  },
  {
    "time": [
      661.87,
      665.31
    ],
    "en": [
      "ping again. Ping 10.0.2.1."
    ],
    "ru": [
      "пинг снова. Пинг 10.0.2.1."
    ]
  },
  {
    "time": [
      665.31,
      670.029
    ],
    "en": [
      "Looks like the floating static route is working, the ping to SRV1 now uses the backup path"
    ],
    "ru": [
      "Похоже, плавающий статический маршрут работает, пинг до SRV1 теперь использует резервный путь"
    ]
  },
  {
    "time": [
      670.029,
      675.61
    ],
    "en": [
      "via ISP A, and the return traffic does the same."
    ],
    "ru": [
      "через ISP A, и обратный трафик делает то же самое."
    ]
  },
  {
    "time": [
      675.61,
      679.55
    ],
    "en": [
      "Before finishing this lab, I’m going to switch back to realtime mode and show you"
    ],
    "ru": [
      "Прежде чем закончить эту лабораторную работу, я собираюсь вернуться в режим реального времени и показать вам"
    ]
  },
  {
    "time": [
      679.55,
      683.8
    ],
    "en": [
      "another useful tool to check the path traffic takes."
    ],
    "ru": [
      "еще один полезный инструмент для проверки пути движения."
    ]
  },
  {
    "time": [
      683.8,
      688.05
    ],
    "en": [
      "In a real network you can’t just turn on simulation mode like in packet tracer to see"
    ],
    "ru": [
      "В реальной сети вы не можете просто включить режим моделирования, как в пакетном трассировщике, чтобы увидеть"
    ]
  },
  {
    "time": [
      688.05,
      690.06
    ],
    "en": [
      "the path traffic takes."
    ],
    "ru": [
      "путь, по которому проходит трафик."
    ]
  },
  {
    "time": [
      690.06,
      693.59
    ],
    "en": [
      "Instead, you can use the traceroute tool."
    ],
    "ru": [
      "Вместо этого вы можете использовать инструмент traceroute."
    ]
  },
  {
    "time": [
      693.59,
      700.74
    ],
    "en": [
      "In Cisco IOS the command is TRACEROUTE spelled out like this, however on a Windows PC it’s"
    ],
    "ru": [
      "В Cisco IOS команда TRACEROUTE написана следующим образом, однако на ПК с Windows это"
    ]
  },
  {
    "time": [
      700.74,
      707.86
    ],
    "en": [
      "TRACERT, then the destination IP address, which is 10.0.2.1. There it is."
    ],
    "ru": [
      "TRACERT, затем IP-адрес назначения, то есть 10.0.2.1. Вот оно."
    ]
  },
  {
    "time": [
      707.86,
      710.09
    ],
    "en": [
      "There it is. So, what does traceroute do?"
    ],
    "ru": [
      "Вот оно. Итак, что делает traceroute?"
    ]
  },
  {
    "time": [
      710.09,
      716.08
    ],
    "en": [
      "It’s like a ping, except every Layer 3 ‘hop’ along the route to the destination sends a"
    ],
    "ru": [
      "Это похоже на пинг, за исключением того, что каждый «прыжок» уровня 3 на маршруте к пункту назначения отправляет"
    ]
  },
  {
    "time": [
      716.08,
      718.67
    ],
    "en": [
      "message back to the source."
    ],
    "ru": [
      "сообщение обратно к источнику."
    ]
  },
  {
    "time": [
      718.67,
      724.36
    ],
    "en": [
      "First is 10.0.1.254, R1’s G0/1 interface."
    ],
    "ru": [
      "Первый - 10.0.1.254, интерфейс G0 / 1 маршрутизатора R1."
    ]
  },
  {
    "time": [
      724.36,
      730.68
    ],
    "en": [
      "Next 203.0.113.1, SPR1’s G0/0/0 interface."
    ],
    "ru": [
      "Следующий 203.0.113.1, интерфейс G0 / 0/0 SPR1."
    ]
  },
  {
    "time": [
      730.68,
      737.38
    ],
    "en": [
      "Then 192.168.1.2, SPR2’s G0/1/0 interface."
    ],
    "ru": [
      "Затем 192.168.1.2, интерфейс G0 / 1/0 SPR2."
    ]
  },
  {
    "time": [
      737.38,
      748.029
    ],
    "en": [
      "Then 203.0.113.6, R2’s G0/0/0 interface, and finally the reply from 10.0.2.1, SRV1."
    ],
    "ru": [
      "Затем 203.0.113.6, интерфейс R2 G0 / 0/0 и, наконец, ответ от 10.0.2.1, SRV1."
    ]
  },
  {
    "time": [
      748.029,
      754.3
    ],
    "en": [
      "Traceroute is a very useful tool for troubleshooting and making sure traffic is following the intended path."
    ],
    "ru": [
      "Traceroute - очень полезный инструмент для устранения неполадок и проверки того, что трафик идет по намеченному пути."
    ]
  },
  {
    "time": [
      754.3,
      758.66
    ],
    "en": [
      "path. Make sure you’re aware of it for the exam, and try it out in packet tracer labs!"
    ],
    "ru": [
      "дорожка. Убедитесь, что вы знаете об этом перед экзаменом, и опробуйте его в лабораториях по отслеживанию пакетов!"
    ]
  },
  {
    "time": [
      758.66,
      760.93
    ],
    "en": [
      "Okay, that’s all for this lab."
    ],
    "ru": [
      "Ладно, это все для этой лаборатории."
    ]
  },
  {
    "time": [
      760.93,
      765.8389999999999
    ],
    "en": [
      "Next, let’s take a look at a practice lab from Boson NetSim."
    ],
    "ru": [
      "Затем давайте взглянем на практическую лабораторию от Boson NetSim."
    ]
  },
  {
    "time": [
      765.8389999999999,
      771.98
    ],
    "en": [
      "Okay, for today's Boson NetSim practice lab we're doing Static Routes 2."
    ],
    "ru": [
      "Хорошо, для сегодняшней практической лаборатории Boson NetSim мы делаем Static Routes 2."
    ]
  },
  {
    "time": [
      771.98,
      776.71
    ],
    "en": [
      "So there are some OSPF configuration labs in Boson NetSim, but we haven't covered configuration"
    ],
    "ru": [
      "Итак, в Boson NetSim есть несколько лабораторий по настройке OSPF, но мы не рассмотрели конфигурацию."
    ]
  },
  {
    "time": [
      776.71,
      780.48
    ],
    "en": [
      "of OSPF yet so let's do some static routing."
    ],
    "ru": [
      "OSPF пока нет, так что давайте сделаем статическую маршрутизацию."
    ]
  },
  {
    "time": [
      780.48,
      782.39
    ],
    "en": [
      "Here's the lab objective."
    ],
    "ru": [
      "Вот цель лаборатории."
    ]
  },
  {
    "time": [
      782.39,
      788.89
    ],
    "en": [
      "Build a lab network to test new configurations that will be rolled out to a production network."
    ],
    "ru": [
      "Создайте лабораторную сеть для тестирования новых конфигураций, которые будут развернуты в производственной сети."
    ]
  },
  {
    "time": [
      788.89,
      793.75
    ],
    "en": [
      "Configure Router1 and Router2 with static routes so that all devices can ping any other device."
    ],
    "ru": [
      "Настройте Router1 и Router2 со статическими маршрутами, чтобы все устройства могли пинговать любое другое устройство."
    ]
  },
  {
    "time": [
      793.75,
      797.04
    ],
    "en": [
      "device. Okay, so pretty simple lab topology here."
    ],
    "ru": [
      "устройство. Хорошо, здесь довольно простая лабораторная топология."
    ]
  },
  {
    "time": [
      797.04,
      801.59
    ],
    "en": [
      "HostA and HostB, with Router1 and Router2."
    ],
    "ru": [
      "HostA и HostB с Router1 и Router2."
    ]
  },
  {
    "time": [
      801.59,
      803.89
    ],
    "en": [
      "And what's this, S0/0?"
    ],
    "ru": [
      "А это что, S0 / 0?"
    ]
  },
  {
    "time": [
      803.89,
      805.41
    ],
    "en": [
      "This is a serial connection."
    ],
    "ru": [
      "Это последовательное соединение."
    ]
  },
  {
    "time": [
      805.41,
      809.1
    ],
    "en": [
      "So, I haven't covered serial connections in the course, that's because they have been"
    ],
    "ru": [
      "Итак, я не рассматривал серийные соединения в этом курсе, потому что они были"
    ]
  },
  {
    "time": [
      809.1,
      811.79
    ],
    "en": [
      "removed from the exam topics list."
    ],
    "ru": [
      "удален из списка тем экзамена."
    ]
  },
  {
    "time": [
      811.79,
      817.98
    ],
    "en": [
      "So I think you probably won't get any direct questions about serial interfaces on the CCNA,"
    ],
    "ru": [
      "Поэтому я думаю, что вы, вероятно, не получите никаких прямых вопросов о последовательных интерфейсах на CCNA,"
    ]
  },
  {
    "time": [
      817.98,
      821.17
    ],
    "en": [
      "but I still think it's good to know so we'll cover some basic things here."
    ],
    "ru": [
      "но я все еще думаю, что это полезно знать, поэтому мы рассмотрим здесь некоторые основные вещи."
    ]
  },
  {
    "time": [
      821.17,
      826.85
    ],
    "en": [
      "One of those basic things here is the CLOCK RATE command to set the, essentially the speed"
    ],
    "ru": [
      "Одна из таких базовых вещей - команда CLOCK RATE для установки, по сути, скорости"
    ]
  },
  {
    "time": [
      826.85,
      828.56
    ],
    "en": [
      "of this serial interface."
    ],
    "ru": [
      "этого последовательного интерфейса."
    ]
  },
  {
    "time": [
      828.56,
      831.56
    ],
    "en": [
      "Okay, these are other commands you need to know."
    ],
    "ru": [
      "Хорошо, это другие команды, которые вам нужно знать."
    ]
  },
  {
    "time": [
      831.56,
      838.18
    ],
    "en": [
      "These IPCONFIG commands are for the NetSim PCs here, HostA and HostB."
    ],
    "ru": [
      "Эти команды IPCONFIG предназначены для компьютеров NetSim, HostA и HostB."
    ]
  },
  {
    "time": [
      838.18,
      844.279
    ],
    "en": [
      "This command sets the IP address, and this one IPCONFIG /DG sets the default gateway"
    ],
    "ru": [
      "Эта команда устанавливает IP-адрес, а этот IPCONFIG / DG устанавливает шлюз по умолчанию."
    ]
  },
  {
    "time": [
      844.279,
      846.39
    ],
    "en": [
      "address of the PC."
    ],
    "ru": [
      "адрес ПК."
    ]
  },
  {
    "time": [
      846.39,
      852.44
    ],
    "en": [
      "So that would be probably Router1 for HostA and Router2 for HostB."
    ],
    "ru": [
      "Так что, вероятно, это будет Router1 для HostA и Router2 для HostB."
    ]
  },
  {
    "time": [
      852.44,
      859.55
    ],
    "en": [
      "Okay, here are the IP address charts for each device, and the lab tasks."
    ],
    "ru": [
      "Хорошо, вот диаграммы IP-адресов для каждого устройства и лабораторные задания."
    ]
  },
  {
    "time": [
      859.55,
      862.3
    ],
    "en": [
      "So let's get started on task 1."
    ],
    "ru": [
      "Итак, приступим к задаче 1."
    ]
  },
  {
    "time": [
      862.3,
      864.48
    ],
    "en": [
      "Configure Router1 with a host name of Router1."
    ],
    "ru": [
      "Настройте Router1 с именем хоста Router1."
    ]
  },
  {
    "time": [
      864.48,
      873.08
    ],
    "en": [
      "Okay, well we're already in the CLI of Router 1 here, it's open by default. ENABLE."
    ],
    "ru": [
      "Хорошо, мы уже находимся здесь в интерфейсе командной строки маршрутизатора 1, он открыт по умолчанию. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      873.08,
      876.49
    ],
    "en": [
      "ENABLE. CONF T. HOSTNAME Router1."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. HOSTNAME Router1."
    ]
  },
  {
    "time": [
      876.49,
      881.97
    ],
    "en": [
      "Okay, next configure the appropriate IP addresses on the interfaces."
    ],
    "ru": [
      "Хорошо, затем настройте соответствующие IP-адреса на интерфейсах."
    ]
  },
  {
    "time": [
      881.97,
      883.59
    ],
    "en": [
      "Refer to the IP addresses table."
    ],
    "ru": [
      "См. Таблицу IP-адресов."
    ]
  },
  {
    "time": [
      883.59,
      886.52
    ],
    "en": [
      "Okay, let's do that next."
    ],
    "ru": [
      "Хорошо, давайте сделаем это дальше."
    ]
  },
  {
    "time": [
      886.52,
      901.13
    ],
    "en": [
      "So interface FastEthernet0/0, the IP address is 192.168.101.1, /24 mask."
    ],
    "ru": [
      "Итак, интерфейс FastEthernet0 / 0, IP-адрес 192.168.101.1, маска / 24."
    ]
  },
  {
    "time": [
      901.13,
      906.81
    ],
    "en": [
      "Enable the interfaces, it says right at the end of here, so I'll just do that. NO SHUTDOWN."
    ],
    "ru": [
      "Включите интерфейсы, говорится в самом конце, так что я просто сделаю это. НЕТ ОСТАНОВА."
    ]
  },
  {
    "time": [
      906.81,
      909.459
    ],
    "en": [
      "NO SHUTDOWN. Okay next one, interface Serial0/0."
    ],
    "ru": [
      "НЕТ ОСТАНОВА. Хорошо, следующий, интерфейс Serial0 / 0."
    ]
  },
  {
    "time": [
      909.459,
      918.91
    ],
    "en": [
      "IP ADDRESS 192.168.1.1, /24 mask, NO SHUTDOWN."
    ],
    "ru": [
      "IP-АДРЕС 192.168.1.1, маска / 24, БЕЗ ВЫКЛЮЧЕНИЯ."
    ]
  },
  {
    "time": [
      918.91,
      923.8
    ],
    "en": [
      "Now this part here, a DCE cable is connected to Router1."
    ],
    "ru": [
      "Теперь, эта часть, кабель DCE подключен к Router1."
    ]
  },
  {
    "time": [
      923.8,
      928.149
    ],
    "en": [
      "The serial link should have a speed of 64 kilobits per second."
    ],
    "ru": [
      "Последовательный канал должен иметь скорость 64 килобита в секунду."
    ]
  },
  {
    "time": [
      928.149,
      932.42
    ],
    "en": [
      "So this DCE is a concept in serial connections."
    ],
    "ru": [
      "Итак, эта DCE - это концепция последовательных подключений."
    ]
  },
  {
    "time": [
      932.42,
      935.89
    ],
    "en": [
      "One side is DCE, the other side is DTE."
    ],
    "ru": [
      "Одна сторона - это DCE, другая - DTE."
    ]
  },
  {
    "time": [
      935.89,
      939.79
    ],
    "en": [
      "And the DCE side has to set the clock rate."
    ],
    "ru": [
      "А тактовая частота должна быть установлена ​​на стороне DCE."
    ]
  },
  {
    "time": [
      939.79,
      945.769
    ],
    "en": [
      "So we'll use this CLOCK RATE command to set a speed of 64 kilobits per second."
    ],
    "ru": [
      "Итак, мы будем использовать эту команду CLOCK RATE, чтобы установить скорость 64 килобита в секунду."
    ]
  },
  {
    "time": [
      945.769,
      948.5889999999999
    ],
    "en": [
      "CLOCK RATE, here are the options."
    ],
    "ru": [
      "ЧАСЫ, вот варианты."
    ]
  },
  {
    "time": [
      948.5889999999999,
      954.8
    ],
    "en": [
      "So we're looking for 64 thousand. There we go."
    ],
    "ru": [
      "Итак, ищем 64 тысячи. Итак, мы идем."
    ]
  },
  {
    "time": [
      954.8,
      955.8
    ],
    "en": [
      "There we go. Okay so that's step 1."
    ],
    "ru": [
      "Итак, мы идем. Хорошо, это шаг 1."
    ]
  },
  {
    "time": [
      955.8,
      963.34
    ],
    "en": [
      "On Router1 configure a static route so that all devices can ping any other device."
    ],
    "ru": [
      "На Router1 настройте статический маршрут, чтобы все устройства могли пинговать любое другое устройство."
    ]
  },
  {
    "time": [
      963.34,
      974.69
    ],
    "en": [
      "Okay so Router1 has these two connected networks, 192.168.101.0/24 and 192.168.1.0/24."
    ],
    "ru": [
      "Итак, у Router1 есть эти две подключенные сети: 192.168.101.0/24 и 192.168.1.0/24."
    ]
  },
  {
    "time": [
      974.69,
      982.08
    ],
    "en": [
      "So the only network it needs a route to is this network here, 192.168.100.0/24."
    ],
    "ru": [
      "Итак, единственная сеть, к которой ему нужен маршрут, - это сеть 192.168.100.0/24."
    ]
  },
  {
    "time": [
      982.08,
      986.31
    ],
    "en": [
      "We could configure this as a default route, but it doesn't specify that so let's configure"
    ],
    "ru": [
      "Мы могли бы настроить это как маршрут по умолчанию, но он не указывает это, поэтому давайте настроим"
    ]
  },
  {
    "time": [
      986.31,
      988.93
    ],
    "en": [
      "just a route to that subnet."
    ],
    "ru": [
      "просто маршрут к этой подсети."
    ]
  },
  {
    "time": [
      988.93,
      1005.03
    ],
    "en": [
      "IP ROUTE 192.168.100.0, /24 subnet mask, and the next hop will be Router2's Serial0/0 interface. Okay let's check."
    ],
    "ru": [
      "IP-МАРШРУТ 192.168.100.0, маска подсети / 24, и следующим переходом будет интерфейс Serial0 / 0 маршрутизатора 2. Ладно, проверим."
    ]
  },
  {
    "time": [
      1005.03,
      1006.97
    ],
    "en": [
      "Okay let's check. DO SHOW IP ROUTE."
    ],
    "ru": [
      "Ладно, проверим. ПОКАЗАТЬ IP-МАРШРУТ."
    ]
  },
  {
    "time": [
      1006.97,
      1013.8
    ],
    "en": [
      "Oh, it's not up yet because this interface is still down."
    ],
    "ru": [
      "О, это еще не работает, потому что этот интерфейс все еще не работает."
    ]
  },
  {
    "time": [
      1013.8,
      1017.99
    ],
    "en": [
      "Okay, and then we do the same things on Router2, it seems."
    ],
    "ru": [
      "Хорошо, а потом, кажется, мы делаем то же самое на Router2."
    ]
  },
  {
    "time": [
      1017.99,
      1023.279
    ],
    "en": [
      "Yes, except on Router2's side we do not need to configure the CLOCK RATE command because"
    ],
    "ru": [
      "Да, кроме как на стороне Router2, нам не нужно настраивать команду CLOCK RATE, потому что"
    ]
  },
  {
    "time": [
      1023.279,
      1028.65
    ],
    "en": [
      "it said Router1 is the DCE side, Router2 is the DTE side."
    ],
    "ru": [
      "он сказал, что Router1 - это сторона DCE, Router2 - это сторона DTE."
    ]
  },
  {
    "time": [
      1028.65,
      1033.51
    ],
    "en": [
      "So it will receive the clock rate from Router1."
    ],
    "ru": [
      "Таким образом, он получит тактовую частоту от Router1."
    ]
  },
  {
    "time": [
      1033.51,
      1036.26
    ],
    "en": [
      "So let's go into the CLI of Router2."
    ],
    "ru": [
      "Итак, перейдем к интерфейсу командной строки Router2."
    ]
  },
  {
    "time": [
      1036.26,
      1040.77
    ],
    "en": [
      "Click on Router2 here, then console. ENABLE."
    ],
    "ru": [
      "Щелкните здесь Router2, затем console. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      1040.77,
      1052.28
    ],
    "en": [
      "ENABLE. CONF T. HOSTNAME Router2, and then the IP addresses. So, INTERFACE F0/0."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. HOSTNAME Router2, а затем IP-адреса. Итак, ИНТЕРФЕЙС F0 / 0."
    ]
  },
  {
    "time": [
      1052.28,
      1059.049
    ],
    "en": [
      "So, INTERFACE F0/0. 100.1, with /24. Enable it."
    ],
    "ru": [
      "Итак, ИНТЕРФЕЙС F0 / 0. 100.1, с / 24. Включите это."
    ]
  },
  {
    "time": [
      1059.049,
      1069.18
    ],
    "en": [
      "Enable it. INTERFACE SERIAL0/0, IP ADDRESS 192.168.1.2, again /24, NO SHUT."
    ],
    "ru": [
      "Включите это. ИНТЕРФЕЙС SERIAL0 / 0, IP-АДРЕС 192.168.1.2, снова / 24, NO SHUT."
    ]
  },
  {
    "time": [
      1069.18,
      1072.23
    ],
    "en": [
      "Okay, I think that's all we have to do for this step."
    ],
    "ru": [
      "Хорошо, я думаю, это все, что нам нужно сделать для этого шага."
    ]
  },
  {
    "time": [
      1072.23,
      1077.0
    ],
    "en": [
      "Yes, okay and next another static route, this time on R2."
    ],
    "ru": [
      "Да, хорошо, а затем еще один статический маршрут, на этот раз на R2."
    ]
  },
  {
    "time": [
      1077.0,
      1081.29
    ],
    "en": [
      "So we'll configure it to this subnet here."
    ],
    "ru": [
      "Итак, мы настроим его для этой подсети здесь."
    ]
  },
  {
    "time": [
      1081.29,
      1095.6
    ],
    "en": [
      "EXIT, IP ROUTE 192.168.101.0 255.255.255.0 and the next hop is Router1's Serial0/0 interface, 192.168.1.1."
    ],
    "ru": [
      "ВЫХОД, IP-МАРШРУТ 192.168.101.0 255.255.255.0 и следующий переход - это интерфейс Serial0 / 0 маршрутизатора 1, 192.168.1.1."
    ]
  },
  {
    "time": [
      1095.6,
      1101.64
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
      1095.6,
      1101.64
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
      1101.64,
      1103.6
    ],
    "en": [
      "these interfaces are both UP now."
    ],
    "ru": [
      "оба эти интерфейса работают."
    ]
  },
  {
    "time": [
      1103.6,
      1106.02
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
      1106.02,
      1109.51
    ],
    "en": [
      "There it is, okay so connected routes and the static route."
    ],
    "ru": [
      "Итак, подключенные маршруты и статический маршрут."
    ]
  },
  {
    "time": [
      1109.51,
      1117.96
    ],
    "en": [
      "And if we check once more on R1, now they appear, okay."
    ],
    "ru": [
      "И если еще раз проверим на R1, вот они появятся, хорошо."
    ]
  },
  {
    "time": [
      1117.96,
      1126.83
    ],
    "en": [
      "So that is up to step 4, okay next step 5. HostA and HostB."
    ],
    "ru": [
      "Итак, это до шага 4, хорошо, следующий шаг 5. HostA и HostB."
    ]
  },
  {
    "time": [
      1126.83,
      1132.6
    ],
    "en": [
      "HostA and HostB. So let's get into the CLI here, HostA and HostB."
    ],
    "ru": [
      "HostA и HostB. Итак, давайте перейдем к интерфейсу командной строки, HostA и HostB."
    ]
  },
  {
    "time": [
      1132.6,
      1133.6
    ],
    "en": [
      "So what was it?"
    ],
    "ru": [
      "Так что это было?"
    ]
  },
  {
    "time": [
      1133.6,
      1141.1
    ],
    "en": [
      "Configure the IP addresses and default gateway, okay."
    ],
    "ru": [
      "Настройте IP-адреса и шлюз по умолчанию, хорошо."
    ]
  },
  {
    "time": [
      1141.1,
      1147.6
    ],
    "en": [
      "So HostA, let's check first. IPCONFIG /ALL."
    ],
    "ru": [
      "Итак, HostA, давайте сначала проверим. IPCONFIG / ВСЕ."
    ]
  },
  {
    "time": [
      1147.6,
      1150.34
    ],
    "en": [
      "IPCONFIG /ALL. Does not have an IP address."
    ],
    "ru": [
      "IPCONFIG / ВСЕ. Не имеет IP-адреса."
    ]
  },
  {
    "time": [
      1150.34,
      1152.73
    ],
    "en": [
      "and here are the commands we need to use."
    ],
    "ru": [
      "и вот команды, которые нам нужно использовать."
    ]
  },
  {
    "time": [
      1152.73,
      1157.84
    ],
    "en": [
      "So first, to set the IP address, IPCONFIG /IP (address) (mask)."
    ],
    "ru": [
      "Итак, сначала, чтобы установить IP-адрес, IPCONFIG / IP (адрес) (маска)."
    ]
  },
  {
    "time": [
      1157.84,
      1159.56
    ],
    "en": [
      "So let's do that."
    ],
    "ru": [
      "Так что давай сделаем это."
    ]
  },
  {
    "time": [
      1159.56,
      1172.78
    ],
    "en": [
      "IPCONFIG 192.168.101.2 255.255.255.0, and I forgot the /IP."
    ],
    "ru": [
      "IPCONFIG 192.168.101.2 255.255.255.0, и я забыл / IP."
    ]
  },
  {
    "time": [
      1172.78,
      1185.96
    ],
    "en": [
      "Okay, and next the default gateway, IPCONFIG /DG, and that would be this address here on Router1, 192.168.101.1."
    ],
    "ru": [
      "Хорошо, а затем шлюз по умолчанию, IPCONFIG / DG, и это будет этот адрес здесь, на Router1, 192.168.101.1."
    ]
  },
  {
    "time": [
      1185.96,
      1189.5
    ],
    "en": [
      "Router1, 192.168.101.1. And let's check, IPCONFIG /ALL."
    ],
    "ru": [
      "Маршрутизатор1, 192.168.101.1. И проверим, IPCONFIG / ALL."
    ]
  },
  {
    "time": [
      1189.5,
      1195.24
    ],
    "en": [
      "There is the IP address, subnet mask and default gateway, looks good."
    ],
    "ru": [
      "Есть IP-адрес, маска подсети и шлюз по умолчанию, выглядит неплохо."
    ]
  },
  {
    "time": [
      1195.24,
      1203.03
    ],
    "en": [
      "Next on HostB, first check if there are any configurations. Nope, all 0.0.0.0."
    ],
    "ru": [
      "Затем на HostB сначала проверьте, есть ли какие-либо конфигурации. Неа, все 0.0.0.0."
    ]
  },
  {
    "time": [
      1203.03,
      1211.95
    ],
    "en": [
      "Nope, all 0.0.0.0. So IPCONFIG /IP 192.168.100.2, /24 mask."
    ],
    "ru": [
      "Неа, все 0.0.0.0. Итак, IPCONFIG / IP 192.168.100.2, маска / 24."
    ]
  },
  {
    "time": [
      1211.95,
      1223.5
    ],
    "en": [
      "And set the default gateway, that is this address on Router2."
    ],
    "ru": [
      "И установите шлюз по умолчанию, то есть этот адрес на Router2."
    ]
  },
  {
    "time": [
      1223.5,
      1228.17
    ],
    "en": [
      "Okay, on Router1 and Router2 display the routing table, oh we already did that."
    ],
    "ru": [
      "Хорошо, на Router1 и Router2 отобразите таблицу маршрутизации, о, мы уже сделали это."
    ]
  },
  {
    "time": [
      1228.17,
      1229.52
    ],
    "en": [
      "I'll just do it one more time."
    ],
    "ru": [
      "Я просто сделаю это еще раз."
    ]
  },
  {
    "time": [
      1229.52,
      1237.679
    ],
    "en": [
      "There they are, you can see the static routes we configured, yep same here."
    ],
    "ru": [
      "Вот они, вы можете увидеть статические маршруты, которые мы настроили, да то же самое здесь."
    ]
  },
  {
    "time": [
      1237.679,
      1245.39
    ],
    "en": [
      "And verify your configuration by pinging from HostA to HostB, 192.168.100.2, okay."
    ],
    "ru": [
      "И проверьте свою конфигурацию, выполнив эхо-запрос с HostA на HostB, 192.168.100.2, хорошо."
    ]
  },
  {
    "time": [
      1245.39,
      1250.34
    ],
    "en": [
      "Let's hope it works."
    ],
    "ru": [
      "Будем надеяться, что это сработает."
    ]
  },
  {
    "time": [
      1250.34,
      1253.73
    ],
    "en": [
      "Okay, looks good, pings are going through."
    ],
    "ru": [
      "Ладно, выглядит неплохо, пинги проходят."
    ]
  },
  {
    "time": [
      1253.73,
      1260.79
    ],
    "en": [
      "Okay, so this time we actually did the entire lab, so let's see if we did the correct configurations."
    ],
    "ru": [
      "Хорошо, на этот раз мы фактически выполнили всю лабораторную работу, поэтому давайте посмотрим, правильно ли мы настроили."
    ]
  },
  {
    "time": [
      1260.79,
      1265.6
    ],
    "en": [
      "Once you have completed this lab, be sure to check your work by using the grading function."
    ],
    "ru": [
      "По завершении этой лабораторной работы обязательно проверьте свою работу с помощью функции выставления оценок."
    ]
  },
  {
    "time": [
      1265.6,
      1269.15
    ],
    "en": [
      "You can do that by pressing...clicking here, grade lab."
    ],
    "ru": [
      "Вы можете сделать это, нажав ... щелкнув здесь, оценка лаборатории."
    ]
  },
  {
    "time": [
      1269.15,
      1273.74
    ],
    "en": [
      "Okay, let's see if we did it correctly."
    ],
    "ru": [
      "Ладно, посмотрим, правильно ли мы сделали."
    ]
  },
  {
    "time": [
      1273.74,
      1275.98
    ],
    "en": [
      "And we did, you completed the lab successfully."
    ],
    "ru": [
      "И мы сделали, вы успешно выполнили лабораторную работу."
    ]
  },
  {
    "time": [
      1275.98,
      1280.42
    ],
    "en": [
      "Click OK to view the results for the individual devices."
    ],
    "ru": [
      "Щелкните OK, чтобы просмотреть результаты для отдельных устройств."
    ]
  },
  {
    "time": [
      1280.42,
      1283.29
    ],
    "en": [
      "So this is the correct configuration."
    ],
    "ru": [
      "Итак, это правильная конфигурация."
    ]
  },
  {
    "time": [
      1283.29,
      1287.47
    ],
    "en": [
      "If we were missing commands they would be highlighted in red here, if we had extra commands"
    ],
    "ru": [
      "Если бы нам не хватало команд, они были бы здесь выделены красным, если бы у нас были лишние команды"
    ]
  },
  {
    "time": [
      1287.47,
      1290.93
    ],
    "en": [
      "that we didn't need they would be in blue."
    ],
    "ru": [
      "что нам не нужно, они будут синим."
    ]
  },
  {
    "time": [
      1290.93,
      1297.82
    ],
    "en": [
      "So, all white here so looks good."
    ],
    "ru": [
      "Итак, здесь все белое, так что выглядит хорошо."
    ]
  },
  {
    "time": [
      1297.82,
      1301.799
    ],
    "en": [
      "Okay, and if you ever have any trouble during the lab, or even after you finish and you"
    ],
    "ru": [
      "Хорошо, и если у вас возникнут проблемы во время лабораторной работы или даже после того, как вы закончите и вы"
    ]
  },
  {
    "time": [
      1301.799,
      1307.43
    ],
    "en": [
      "want to read some explanations, which I really recommend you do, check the lab solutions here."
    ],
    "ru": [
      "хотите прочитать некоторые объяснения, которые я действительно рекомендую вам сделать, проверьте лабораторные решения здесь."
    ]
  },
  {
    "time": [
      1307.43,
      1314.32
    ],
    "en": [
      "here. They give you step by step walkthroughs of the lab, and some in-detail explanations."
    ],
    "ru": [
      "здесь. Они дают вам пошаговые инструкции по лабораторной работе и некоторые подробные объяснения."
    ]
  },
  {
    "time": [
      1314.32,
      1317.61
    ],
    "en": [
      "Okay so that's Boson NetSim for CCNA."
    ],
    "ru": [
      "Итак, это Boson NetSim для CCNA."
    ]
  },
  {
    "time": [
      1317.61,
      1323.25
    ],
    "en": [
      "If you can I highly recommend picking up a copy, there are over a hundred guided labs"
    ],
    "ru": [
      "Если вы можете, я настоятельно рекомендую взять копию, существует более сотни руководимых лабораторий."
    ]
  },
  {
    "time": [
      1323.25,
      1330.01
    ],
    "en": [
      "covering all of the exam topics in the CCNA, and it's just a really great practice resource for the CCNA."
    ],
    "ru": [
      "охватывающий все темы экзаменов в CCNA, и это просто действительно отличный практический ресурс для CCNA."
    ]
  },
  {
    "time": [
      1330.01,
      1335.88
    ],
    "en": [
      "for the CCNA. So if you want to get a copy, please follow the link in the video description."
    ],
    "ru": [
      "для CCNA. Так что, если вы хотите получить копию, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      1335.88,
      1340.72
    ],
    "en": [
      "Before ending this video I want to take a minute to thank my JCNP-level channel members."
    ],
    "ru": [
      "Прежде чем закончить это видео, я хочу уделить минуту, чтобы поблагодарить участников моего канала уровня JCNP."
    ]
  },
  {
    "time": [
      1340.72,
      1347.14
    ],
    "en": [
      "Thank you to Magrathea, Justin, John, funnydart, Joshua, Scott, Aleksa, Hassan, Gerrard, tibi,"
    ],
    "ru": [
      "Спасибо Магратее, Джастину, Джону, funnydart, Джошуа, Скотту, Алексе, Хасану, Джеррарду, Тиби,"
    ]
  },
  {
    "time": [
      1347.14,
      1354.35
    ],
    "en": [
      "vikram, Joyce, Marek, Samil, velvijaykum, C Mohd, Johan, Mark, Miguel, Yousif, kone,"
    ],
    "ru": [
      "Викрам, Джойс, Марек, Самил, Велвиджайкум, Си Мохд, Йохан, Марк, Мигель, Юсиф, Коне,"
    ]
  },
  {
    "time": [
      1354.35,
      1362.33
    ],
    "en": [
      "Boson Software, the creators of NetSim, Sidi, Devin, Charlesetta, Lito, Yonatan, Mike, Aleksander, and Vance."
    ],
    "ru": [
      "Boson Software, создатели NetSim, Sidi, Devin, Charlesetta, Lito, Yonatan, Mike, Aleksander и Vance."
    ]
  },
  {
    "time": [
      1362.33,
      1366.73
    ],
    "en": [
      "and Vance. Sorry if I pronounced your name incorrectly, but thank you so much for your support."
    ],
    "ru": [
      "и Вэнс. Извините, если я неправильно произнес ваше имя, но большое спасибо за вашу поддержку."
    ]
  },
  {
    "time": [
      1366.73,
      1371.1
    ],
    "en": [
      "These are my JCNP-level channel members as of June 20th, 2020, by the way."
    ],
    "ru": [
      "Кстати, это участники моего канала уровня JCNP по состоянию на 20 июня 2020 года."
    ]
  },
  {
    "time": [
      1371.1,
      1378.78
    ],
    "en": [
      "If you joined recently but your name isn't on the list, don't worry, you'll be in future videos. videos. Thanks again."
    ],
    "ru": [
      "Если вы присоединились недавно, но вашего имени нет в списке, не волнуйтесь, вы будете в следующих видео. видео. Спасибо еще раз."
    ]
  },
  {
    "time": [
      1378.78,
      1380.36
    ],
    "en": [
      "videos. Thanks again. Thank you for watching."
    ],
    "ru": [
      "видео. Спасибо еще раз. Спасибо за просмотр."
    ]
  },
  {
    "time": [
      1380.36,
      1384.26
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
      1384.26,
      1387.6
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
      1387.6,
      1390.309
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
      1390.309,
      1397.76
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
      1397.76,
      1397.76
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]