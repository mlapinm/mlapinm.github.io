let objs = [
  {
    "time": [
      1.15,
      3.63
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
      3.63,
      6.87
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
      6.87,
      10.82
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
      10.82,
      17.0
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
      17.0,
      19.17
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
      19.17,
      23.269
    ],
    "en": [
      "In this video we will take a look at two dynamic routing protocols that aren’t actually in"
    ],
    "ru": [
      "В этом видео мы рассмотрим два протокола динамической маршрутизации, которых на самом деле нет"
    ]
  },
  {
    "time": [
      23.269,
      27.099
    ],
    "en": [
      "the exam topics list, RIP and EIGRP."
    ],
    "ru": [
      "список тем экзамена, RIP и EIGRP."
    ]
  },
  {
    "time": [
      27.099,
      32.86
    ],
    "en": [
      "So, why am I covering these two topics even though they aren’t on the official exam topics list?"
    ],
    "ru": [
      "Итак, почему я затрагиваю эти две темы, даже если их нет в официальном списке тем экзамена?"
    ]
  },
  {
    "time": [
      32.86,
      37.95
    ],
    "en": [
      "topics list? Well, the main reason is that you might still get a few questions about RIP or EIGRP on"
    ],
    "ru": [
      "список тем? Что ж, основная причина в том, что вы все еще можете получить несколько вопросов о RIP или EIGRP на"
    ]
  },
  {
    "time": [
      37.95,
      40.78
    ],
    "en": [
      "the exam, so it’s best to be prepared."
    ],
    "ru": [
      "экзамен, так что лучше подготовиться."
    ]
  },
  {
    "time": [
      40.78,
      46.75
    ],
    "en": [
      "Cisco’s exam topics list states this: ‘The following topics are general guidelines for"
    ],
    "ru": [
      "Список тем экзаменов Cisco гласит: «Следующие темы являются общими рекомендациями для"
    ]
  },
  {
    "time": [
      46.75,
      49.5
    ],
    "en": [
      "the content likely to be included on the exam."
    ],
    "ru": [
      "контент, который, вероятно, будет включен в экзамен."
    ]
  },
  {
    "time": [
      49.5,
      54.51
    ],
    "en": [
      "However, other related topics may also appear on any specific delivery of the exam.’"
    ],
    "ru": [
      "Однако другие связанные темы также могут появиться в любой конкретной сдаче экзамена »."
    ]
  },
  {
    "time": [
      54.51,
      59.17
    ],
    "en": [
      "So, don’t think that just because something isn’t on the exam topics list, you don’t"
    ],
    "ru": [
      "Так что не думайте, что только потому, что чего-то нет в списке тем экзамена, вы не"
    ]
  },
  {
    "time": [
      59.17,
      61.33
    ],
    "en": [
      "have to know anything about it."
    ],
    "ru": [
      "надо что-нибудь об этом знать."
    ]
  },
  {
    "time": [
      61.33,
      65.87
    ],
    "en": [
      "Of course, we won’t study RIP and EIGRP to the same level of depth that we will study"
    ],
    "ru": [
      "Конечно, мы не будем изучать RIP и EIGRP на том же уровне глубины, который мы будем изучать."
    ]
  },
  {
    "time": [
      65.87,
      70.97
    ],
    "en": [
      "OSPF, which is explicitly listed on the exam topics list, but I’ll use this video to"
    ],
    "ru": [
      "OSPF, который явно указан в списке тем экзамена, но я буду использовать это видео, чтобы"
    ]
  },
  {
    "time": [
      70.97,
      74.75
    ],
    "en": [
      "give an overview of both of RIP and EIGRP."
    ],
    "ru": [
      "дать обзор как RIP, так и EIGRP."
    ]
  },
  {
    "time": [
      74.75,
      78.93
    ],
    "en": [
      "I will show some basic configurations for both, but just the minimum you need to get"
    ],
    "ru": [
      "Я покажу некоторые базовые конфигурации для обоих, но только минимум, который вам нужен, чтобы получить"
    ]
  },
  {
    "time": [
      78.93,
      83.78999999999999
    ],
    "en": [
      "an understanding of how they work, you don’t need to memorize them for the exam."
    ],
    "ru": [
      "понимание того, как они работают, их не нужно запоминать перед экзаменом."
    ]
  },
  {
    "time": [
      83.78999999999999,
      88.33
    ],
    "en": [
      "A lot of the things you learn in this video can also be applied to OSPF, so this should"
    ],
    "ru": [
      "Многие вещи, которые вы узнаете из этого видео, также можно применить к OSPF, так что это должно"
    ]
  },
  {
    "time": [
      88.33,
      92.33
    ],
    "en": [
      "make things easier when I introduce OSPF in Day 26."
    ],
    "ru": [
      "Упростить жизнь, когда я представлю OSPF в День 26."
    ]
  },
  {
    "time": [
      92.33,
      96.38
    ],
    "en": [
      "So, what exactly will we cover today?"
    ],
    "ru": [
      "Итак, что именно мы расскажем сегодня?"
    ]
  },
  {
    "time": [
      96.38,
      105.18
    ],
    "en": [
      "Just as I said, RIP, the Routing Information Protocol, and EIGRP, the Enhanced Interior Gateway Routing Protocol."
    ],
    "ru": [
      "Как я уже сказал, RIP, протокол маршрутной информации, и EIGRP, расширенный протокол маршрутизации внутреннего шлюза."
    ]
  },
  {
    "time": [
      105.18,
      109.12
    ],
    "en": [
      "Gateway Routing Protocol. Stick around to the end of today’s quiz for a bonus question from Boson ExSim for"
    ],
    "ru": [
      "Протокол маршрутизации шлюза. Дождитесь конца сегодняшней викторины, чтобы получить бонусный вопрос от Boson ExSim для"
    ]
  },
  {
    "time": [
      109.12,
      114.64
    ],
    "en": [
      "CCNA, a set of practice exams for the CCNA by Boson Software."
    ],
    "ru": [
      "CCNA, набор практических экзаменов для CCNA от Boson Software."
    ]
  },
  {
    "time": [
      114.64,
      119.369
    ],
    "en": [
      "These are the practice exams I used to prepare for my CCNA a couple years ago, and they are"
    ],
    "ru": [
      "Это практические экзамены, которые я использовал для подготовки к CCNA пару лет назад, и они"
    ]
  },
  {
    "time": [
      119.369,
      123.52
    ],
    "en": [
      "very popular among people getting ready to take their CCNA."
    ],
    "ru": [
      "очень популярен среди людей, готовящихся к сдаче CCNA."
    ]
  },
  {
    "time": [
      123.52,
      127.72
    ],
    "en": [
      "If you’re planning to take your CCNA soon and want to make absolutely sure you’re"
    ],
    "ru": [
      "Если вы планируете в ближайшее время сдать CCNA и хотите быть абсолютно уверены, что"
    ]
  },
  {
    "time": [
      127.72,
      131.819
    ],
    "en": [
      "ready, ExSim is in my opinion the best tool you can use."
    ],
    "ru": [
      "готово, ExSim, на мой взгляд, лучший инструмент, который вы можете использовать."
    ]
  },
  {
    "time": [
      131.819,
      137.049
    ],
    "en": [
      "If you want to get Boson ExSim, follow the link in the video description."
    ],
    "ru": [
      "Если вы хотите получить Boson ExSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      137.049,
      139.349
    ],
    "en": [
      "So let’s get right into RIP."
    ],
    "ru": [
      "Итак, перейдем к RIP."
    ]
  },
  {
    "time": [
      139.349,
      143.659
    ],
    "en": [
      "Some of this stuff I already talked about last video, but let’s review."
    ],
    "ru": [
      "Кое-что из этого я уже говорил в прошлом видео, но давайте вернемся."
    ]
  },
  {
    "time": [
      143.659,
      150.72
    ],
    "en": [
      "RIP stands for Routing Information Protocol, and it is an industry standard protocol, not Cisco proprietary."
    ],
    "ru": [
      "RIP означает протокол информации о маршрутизации и является отраслевым стандартным протоколом, а не проприетарным протоколом Cisco."
    ]
  },
  {
    "time": [
      150.72,
      156.04
    ],
    "en": [
      "Cisco proprietary. It is a distance vector interior gateway protocol, so it uses ‘routing-by-rumour’ logic to"
    ],
    "ru": [
      "Собственность Cisco. Это протокол внутреннего шлюза с вектором расстояния, поэтому он использует логику «маршрутизации по слухам» для"
    ]
  },
  {
    "time": [
      156.04,
      157.43
    ],
    "en": [
      "learn and share routes."
    ],
    "ru": [
      "узнавать и делиться маршрутами."
    ]
  },
  {
    "time": [
      157.43,
      161.65
    ],
    "en": [
      "Watch day 24 again if you want a review of that."
    ],
    "ru": [
      "Посмотрите день 24 еще раз, если хотите еще раз вспомнить об этом."
    ]
  },
  {
    "time": [
      161.65,
      166.76
    ],
    "en": [
      "RIP uses hop count as its metric, each router in the path to the destination counts as one"
    ],
    "ru": [
      "RIP использует количество переходов в качестве метрики, каждый маршрутизатор на пути к месту назначения считается как один"
    ]
  },
  {
    "time": [
      166.76,
      170.459
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
      166.76,
      170.459
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
      170.459,
      176.81
    ],
    "en": [
      "A 10 gigabit connection counts as one hop, and a 10 megabit connection also counts as one hop."
    ],
    "ru": [
      "10-гигабитное соединение считается одним прыжком, а 10-мегабитное соединение также считается одним прыжком."
    ]
  },
  {
    "time": [
      176.81,
      182.209
    ],
    "en": [
      "one hop. And something I didn’t mention last video, the maximum hop count is 15."
    ],
    "ru": [
      "один прыжок. И кое-что, что я не упомянул в прошлом видео, максимальное количество прыжков - 15."
    ]
  },
  {
    "time": [
      182.209,
      187.419
    ],
    "en": [
      "Anything more than that is considered unreachable, and RIP will not insert the route into the routing table."
    ],
    "ru": [
      "Все, что больше этого, считается недостижимым, и RIP не будет вставлять маршрут в таблицу маршрутизации."
    ]
  },
  {
    "time": [
      187.419,
      191.599
    ],
    "en": [
      "routing table. So, clearly RIP cannot be used for very large networks."
    ],
    "ru": [
      "таблица маршрутизации. Таким образом, очевидно, что RIP нельзя использовать для очень больших сетей."
    ]
  },
  {
    "time": [
      191.599,
      196.93
    ],
    "en": [
      "Actually, RIP is almost never used in real networks, but it can possibly be used in small"
    ],
    "ru": [
      "На самом деле, RIP почти никогда не используется в реальных сетях, но его можно использовать в небольших"
    ]
  },
  {
    "time": [
      196.93,
      203.079
    ],
    "en": [
      "networks, and also in lab environments, as a simple IGP that is quick and easy to set up."
    ],
    "ru": [
      "сетей, а также в лабораторных условиях, как простой IGP, который легко и быстро настроить."
    ]
  },
  {
    "time": [
      203.079,
      209.609
    ],
    "en": [
      "up. RIP has three versions, RIP version 1 and version 2, which are used for IPv4."
    ],
    "ru": [
      "вверх. RIP имеет три версии: RIP версии 1 и версии 2, которые используются для IPv4."
    ]
  },
  {
    "time": [
      209.609,
      215.78
    ],
    "en": [
      "There is also RIPng, RIP Next Generation, which is used for IPv6, but which we won’t"
    ],
    "ru": [
      "Существует также RIPng, RIP Next Generation, который используется для IPv6, но мы не будем его использовать."
    ]
  },
  {
    "time": [
      215.78,
      218.489
    ],
    "en": [
      "cover in this course."
    ],
    "ru": [
      "обложка в этом курсе."
    ]
  },
  {
    "time": [
      218.489,
      222.769
    ],
    "en": [
      "RIP uses two message types to learn and share routing information."
    ],
    "ru": [
      "RIP использует два типа сообщений для изучения и обмена информацией о маршрутизации."
    ]
  },
  {
    "time": [
      222.769,
      229.499
    ],
    "en": [
      "The first is the Request message, which asks RIP-enabled neighbor routers to send their routing table."
    ],
    "ru": [
      "Первое - это сообщение запроса, которое просит соседние маршрутизаторы с включенным RIP отправить свою таблицу маршрутизации."
    ]
  },
  {
    "time": [
      229.499,
      233.47
    ],
    "en": [
      "routing table. The second is the response message, which is used to send the local router’s routing"
    ],
    "ru": [
      "таблица маршрутизации. Второе - это ответное сообщение, которое используется для отправки маршрутизации локального маршрутизатора."
    ]
  },
  {
    "time": [
      233.47,
      235.579
    ],
    "en": [
      "table to neighboring routers."
    ],
    "ru": [
      "таблица к соседним роутерам."
    ]
  },
  {
    "time": [
      235.579,
      241.45
    ],
    "en": [
      "By default, RIP-enabled routers will share their routing table every 30 seconds."
    ],
    "ru": [
      "По умолчанию маршрутизаторы с поддержкой RIP будут делиться своей таблицей маршрутизации каждые 30 секунд."
    ]
  },
  {
    "time": [
      241.45,
      249.059
    ],
    "en": [
      "This can cause problems in networks with lots of routers, as these regular updates can clog up the network."
    ],
    "ru": [
      "Это может вызвать проблемы в сетях с большим количеством маршрутизаторов, так как эти регулярные обновления могут засорить сеть."
    ]
  },
  {
    "time": [
      249.059,
      252.739
    ],
    "en": [
      "up the network. Next up, let’s compare RIPv1 and RIPv2."
    ],
    "ru": [
      "вверх по сети. Теперь давайте сравним RIPv1 и RIPv2."
    ]
  },
  {
    "time": [
      252.739,
      255.989
    ],
    "en": [
      "RIPv1 is a very old protocol."
    ],
    "ru": [
      "RIPv1 - очень старый протокол."
    ]
  },
  {
    "time": [
      255.989,
      260.479
    ],
    "en": [
      "Basically, if you’re going to use RIP, don’t use version 1."
    ],
    "ru": [
      "Обычно, если вы собираетесь использовать RIP, не используйте версию 1."
    ]
  },
  {
    "time": [
      260.479,
      267.66
    ],
    "en": [
      "RIPv1 only advertises classful addresses, meaning Class A, Class B, and Class C. I taught"
    ],
    "ru": [
      "RIPv1 рекламирует только классовые адреса, то есть Class A, Class B и Class C. Я учил"
    ]
  },
  {
    "time": [
      267.66,
      272.419
    ],
    "en": [
      "you about classful addressing because it’s important to understand, but in modern networks"
    ],
    "ru": [
      "вы о классной адресации, потому что это важно понимать, но в современных сетях"
    ]
  },
  {
    "time": [
      272.419,
      275.169
    ],
    "en": [
      "the concept is no longer used."
    ],
    "ru": [
      "концепция больше не используется."
    ]
  },
  {
    "time": [
      275.169,
      280.13
    ],
    "en": [
      "Because version 1 only supports classful addresses, it doesn’t support things like VLSM and"
    ],
    "ru": [
      "Поскольку версия 1 поддерживает только классовые адреса, она не поддерживает такие вещи, как VLSM и"
    ]
  },
  {
    "time": [
      280.13,
      282.9
    ],
    "en": [
      "CIDR, which I covered in my subnetting videos."
    ],
    "ru": [
      "CIDR, о котором я рассказывал в своих видео о подсетях."
    ]
  },
  {
    "time": [
      282.9,
      288.55
    ],
    "en": [
      "In fact, when RIPv1 advertises a network to a neighbor, it doesn’t even include the"
    ],
    "ru": [
      "Фактически, когда RIPv1 объявляет сеть соседу, он даже не включает"
    ]
  },
  {
    "time": [
      288.55,
      292.05
    ],
    "en": [
      "subnet mask information in the advertisement."
    ],
    "ru": [
      "информация о маске подсети в объявлении."
    ]
  },
  {
    "time": [
      292.05,
      296.18
    ],
    "en": [
      "If the advertised network is in the class A range, it is assumed to be /8."
    ],
    "ru": [
      "Если объявленная сеть находится в диапазоне класса A, предполагается, что она равна / 8."
    ]
  },
  {
    "time": [
      296.18,
      301.15
    ],
    "en": [
      "It it’s in the class B range, it’s assumed to be /16."
    ],
    "ru": [
      "Если он находится в диапазоне класса B, предполагается, что он равен / 16."
    ]
  },
  {
    "time": [
      301.15,
      305.77
    ],
    "en": [
      "If it’s in the class C range, it’s assumed to be /24."
    ],
    "ru": [
      "Если он находится в диапазоне класса C, предполагается, что это / 24."
    ]
  },
  {
    "time": [
      305.77,
      312.55
    ],
    "en": [
      "Here are some examples of subnets, and how RIPv1 would force them to become classful networks."
    ],
    "ru": [
      "Вот несколько примеров подсетей и того, как RIPv1 заставит их стать классовыми сетями."
    ]
  },
  {
    "time": [
      312.55,
      319.06
    ],
    "en": [
      "networks. 10.1.1.0/24 will become 10.0.0.0, a class A network."
    ],
    "ru": [
      "сети. 10.1.1.0/24 станет 10.0.0.0, сетью класса А."
    ]
  },
  {
    "time": [
      319.06,
      327.09
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
      319.06,
      327.09
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
      327.09,
      335.11
    ],
    "en": [
      "And 192.168.1.4/30 will become 192.168.1.0, a class C network."
    ],
    "ru": [
      "И 192.168.1.4/30 станет 192.168.1.0, сетью класса C."
    ]
  },
  {
    "time": [
      335.11,
      340.689
    ],
    "en": [
      "This is simply not acceptable in modern networks where IPv4 address classes are no longer used"
    ],
    "ru": [
      "Это просто неприемлемо в современных сетях, где классы адресов IPv4 больше не используются."
    ]
  },
  {
    "time": [
      340.689,
      344.56
    ],
    "en": [
      "and have been replaced with CIDR and VLSM."
    ],
    "ru": [
      "и были заменены на CIDR и VLSM."
    ]
  },
  {
    "time": [
      344.56,
      348.69
    ],
    "en": [
      "We need the ability to use subnets, not just the classful networks."
    ],
    "ru": [
      "Нам нужна возможность использовать подсети, а не только классовые сети."
    ]
  },
  {
    "time": [
      348.69,
      358.289
    ],
    "en": [
      "Okay, one more thing about RIPv1, its messages are broadcast to the IP address 255.255.255.255,"
    ],
    "ru": [
      "Хорошо, еще одна вещь о RIPv1, его сообщения транслируются на IP-адрес 255.255.255.255,"
    ]
  },
  {
    "time": [
      358.289,
      362.939
    ],
    "en": [
      "so all routers on the local segment will receive the messages."
    ],
    "ru": [
      "поэтому все маршрутизаторы в локальном сегменте получат сообщения."
    ]
  },
  {
    "time": [
      362.939,
      368.979
    ],
    "en": [
      "Next up, let’s look at RIP version 2, which improves upon version 1 in a few ways."
    ],
    "ru": [
      "Теперь давайте посмотрим на RIP версии 2, которая в некоторых отношениях улучшает версию 1."
    ]
  },
  {
    "time": [
      368.979,
      375.25
    ],
    "en": [
      "First of all, it supports VLSM and CIDR, it doesn’t have to be classful like version 1."
    ],
    "ru": [
      "Во-первых, он поддерживает VLSM и CIDR, он не обязательно должен быть классным, как версия 1."
    ]
  },
  {
    "time": [
      375.25,
      379.78
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
      375.25,
      379.78
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
      379.78,
      385.4
    ],
    "en": [
      "A /30 network will advertised as /30, for example."
    ],
    "ru": [
      "Например, сеть A / 30 будет рекламироваться как / 30."
    ]
  },
  {
    "time": [
      385.4,
      393.78
    ],
    "en": [
      "Another difference is that RIPv2 messages are not broadcast, they are multicast to address 224.0.0.9."
    ],
    "ru": [
      "Другое отличие состоит в том, что сообщения RIPv2 не транслируются, они многоадресно передаются по адресу 224.0.0.9."
    ]
  },
  {
    "time": [
      393.78,
      399.28
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
      393.78,
      399.28
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
      399.28,
      401.77
    ],
    "en": [
      "What exactly is multicast?"
    ],
    "ru": [
      "Что такое многоадресная рассылка?"
    ]
  },
  {
    "time": [
      401.77,
      407.37
    ],
    "en": [
      "You don’t need to know the details at the CCNA level, but here’s a quick comparison."
    ],
    "ru": [
      "Вам не нужно знать подробности на уровне CCNA, но вот небольшое сравнение."
    ]
  },
  {
    "time": [
      407.37,
      411.40999999999997
    ],
    "en": [
      "Broadcast messages are delivered to all devices on the local network, as you have seen many"
    ],
    "ru": [
      "Широковещательные сообщения доставляются на все устройства в локальной сети, как вы уже много раз видели."
    ]
  },
  {
    "time": [
      411.40999999999997,
      414.389
    ],
    "en": [
      "times in this course."
    ],
    "ru": [
      "раз в этом курсе."
    ]
  },
  {
    "time": [
      414.389,
      417.849
    ],
    "en": [
      "Multicast messages, on the other hand, are only received by devices that have joined"
    ],
    "ru": [
      "С другой стороны, многоадресные сообщения принимаются только подключенными устройствами."
    ]
  },
  {
    "time": [
      417.849,
      421.069
    ],
    "en": [
      "that specific multicast group."
    ],
    "ru": [
      "эта конкретная группа многоадресной рассылки."
    ]
  },
  {
    "time": [
      421.069,
      425.54
    ],
    "en": [
      "Just know that basic difference between broadcast and multicast, and you’ll be good."
    ],
    "ru": [
      "Просто знайте эту основную разницу между широковещательной и многоадресной рассылкой, и все будет хорошо."
    ]
  },
  {
    "time": [
      425.54,
      432.06
    ],
    "en": [
      "It’s only at the CCIE level that you need to go really in depth on the topic of multicast."
    ],
    "ru": [
      "Только на уровне CCIE вам нужно действительно углубиться в тему многоадресной рассылки."
    ]
  },
  {
    "time": [
      432.06,
      437.81
    ],
    "en": [
      "Okay, so now I’m going to introduce you to the basic configuration of RIP."
    ],
    "ru": [
      "Хорошо, теперь я собираюсь познакомить вас с базовой конфигурацией RIP."
    ]
  },
  {
    "time": [
      437.81,
      443.629
    ],
    "en": [
      "Although RIP configuration is not actually on the CCNA, I want to introduce it for a couple reasons."
    ],
    "ru": [
      "Хотя конфигурации RIP на самом деле нет в CCNA, я хочу представить ее по нескольким причинам."
    ]
  },
  {
    "time": [
      443.629,
      450.65
    ],
    "en": [
      "couple reasons. First, RIP configuration is very simple, so it acts as a good introduction to dynamic routing configuration."
    ],
    "ru": [
      "пара причин. Во-первых, настройка RIP очень проста, поэтому она служит хорошим введением в настройку динамической маршрутизации."
    ]
  },
  {
    "time": [
      450.65,
      455.759
    ],
    "en": [
      "routing configuration. Second, some of the mechanics are similar to how OSPF configuration works, so it will"
    ],
    "ru": [
      "конфигурация маршрутизации. Во-вторых, некоторые механизмы похожи на то, как работает конфигурация OSPF, поэтому"
    ]
  },
  {
    "time": [
      455.759,
      459.24
    ],
    "en": [
      "make it easier when we go in depth on OSPF later."
    ],
    "ru": [
      "Сделайте это проще, когда мы более подробно рассмотрим OSPF позже."
    ]
  },
  {
    "time": [
      459.24,
      466.34000000000003
    ],
    "en": [
      "So, assuming all of the other routers have already been set up with RIP, let’s just configure R1."
    ],
    "ru": [
      "Итак, предполагая, что все остальные маршрутизаторы уже настроены с RIP, давайте просто настроим R1."
    ]
  },
  {
    "time": [
      466.34000000000003,
      468.09000000000003
    ],
    "en": [
      "configure R1. Here is the basic setup."
    ],
    "ru": [
      "настроить R1. Вот базовая настройка."
    ]
  },
  {
    "time": [
      468.09000000000003,
      473.55
    ],
    "en": [
      "First, enter RIP configuration mode with the command ROUTER RIP."
    ],
    "ru": [
      "Сначала войдите в режим настройки RIP с помощью команды ROUTER RIP."
    ]
  },
  {
    "time": [
      473.55,
      479.069
    ],
    "en": [
      "You can see under that the prompt now says ‘config-router’ instead of just ‘config’."
    ],
    "ru": [
      "Вы можете видеть, что в подсказке теперь написано «config-router», а не просто «config»."
    ]
  },
  {
    "time": [
      479.069,
      485.62
    ],
    "en": [
      "Next, configure the router to use RIP version 2 with the command VERSION 2."
    ],
    "ru": [
      "Затем настройте маршрутизатор на использование RIP версии 2 с помощью команды VERSION 2."
    ]
  },
  {
    "time": [
      485.62,
      491.29
    ],
    "en": [
      "This isn’t necessary, but you should always use version 2 if you’re going to use RIP."
    ],
    "ru": [
      "В этом нет необходимости, но вы всегда должны использовать версию 2, если собираетесь использовать RIP."
    ]
  },
  {
    "time": [
      491.29,
      495.56
    ],
    "en": [
      "Classful IPv4 addressing is a thing of the past, in modern networks we need to be able"
    ],
    "ru": [
      "Классовая адресация IPv4 ушла в прошлое, в современных сетях мы должны иметь возможность"
    ]
  },
  {
    "time": [
      495.56,
      498.16
    ],
    "en": [
      "to use things like VLSM and CIDR."
    ],
    "ru": [
      "использовать такие вещи, как VLSM и CIDR."
    ]
  },
  {
    "time": [
      498.16,
      502.0
    ],
    "en": [
      "Then, use the command NO AUTO-SUMMARY."
    ],
    "ru": [
      "Затем используйте команду NO AUTO-SUMMARY."
    ]
  },
  {
    "time": [
      502.0,
      508.74
    ],
    "en": [
      "Auto-summary is on by default, and it automatically converts the networks the router advertises to classful networks."
    ],
    "ru": [
      "Автоматическое суммирование включено по умолчанию, и оно автоматически преобразует сети, которые объявляет маршрутизатор, в классовые сети."
    ]
  },
  {
    "time": [
      508.74,
      516.97
    ],
    "en": [
      "to classful networks. For example, using classful logic, the 172.16.1.0/28 network attached to R1 is a class B network,"
    ],
    "ru": [
      "классным сетям. Например, используя логику классов, сеть 172.16.1.0/28, подключенная к R1, является сетью класса B,"
    ]
  },
  {
    "time": [
      516.97,
      523.07
    ],
    "en": [
      "so it would be advertised as 172.16.0.0/16."
    ],
    "ru": [
      "поэтому он будет рекламироваться как 172.16.0.0/16."
    ]
  },
  {
    "time": [
      523.07,
      530.47
    ],
    "en": [
      "Always use these two commands when you configure RIP, VERSION 2, followed by NO AUTO-SUMMARY."
    ],
    "ru": [
      "Всегда используйте эти две команды при настройке RIP, ВЕРСИЯ 2, за которой следует NO AUTO-SUMMARY."
    ]
  },
  {
    "time": [
      530.47,
      534.27
    ],
    "en": [
      "Next up we have to use the NETWORK command."
    ],
    "ru": [
      "Далее мы должны использовать команду NETWORK."
    ]
  },
  {
    "time": [
      534.27,
      536.57
    ],
    "en": [
      "First I used NETWORK 10.0.0.0."
    ],
    "ru": [
      "Сначала я использовал СЕТЬ 10.0.0.0."
    ]
  },
  {
    "time": [
      536.57,
      540.16
    ],
    "en": [
      "Now, I have to explain some things about it."
    ],
    "ru": [
      "Теперь я должен кое-что об этом объяснить."
    ]
  },
  {
    "time": [
      540.16,
      545.38
    ],
    "en": [
      "The command itself is classful, it will automatically convert to classful networks."
    ],
    "ru": [
      "Сама команда классная, она автоматически преобразуется в классные сети."
    ]
  },
  {
    "time": [
      545.38,
      553.16
    ],
    "en": [
      "For example, even if you enter the command NETWORK 10.0.12.0, it will be converted to 10.0.0.0."
    ],
    "ru": [
      "Например, даже если вы введете команду NETWORK 10.0.12.0, она будет преобразована в 10.0.0.0."
    ]
  },
  {
    "time": [
      553.16,
      559.38
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
      553.16,
      559.38
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
      559.38,
      565.22
    ],
    "en": [
      "So, after the first 8 bits, all of the other bits will be converted to 0."
    ],
    "ru": [
      "Таким образом, после первых 8 бит все остальные биты будут преобразованы в 0."
    ]
  },
  {
    "time": [
      565.22,
      568.81
    ],
    "en": [
      "Because of this behavior, there is no need to enter a network mask."
    ],
    "ru": [
      "Благодаря такому поведению нет необходимости вводить сетевую маску."
    ]
  },
  {
    "time": [
      568.81,
      571.72
    ],
    "en": [
      "Okay, so what effect does this command actually have?"
    ],
    "ru": [
      "Хорошо, а какой эффект на самом деле имеет эта команда?"
    ]
  },
  {
    "time": [
      571.72,
      581.061
    ],
    "en": [
      "R1’s G0/0 interface is 10.0.12.0/30, and its G1/0 interface is 10.0.13.0/30, but"
    ],
    "ru": [
      "Интерфейс G0 / 0 маршрутизатора R1 - 10.0.12.0/30, а интерфейс G1 / 0 - 10.0.13.0/30, но"
    ]
  },
  {
    "time": [
      581.061,
      584.16
    ],
    "en": [
      "I just entered the command NETWORK 10.0.0.0."
    ],
    "ru": [
      "Я только что ввел команду NETWORK 10.0.0.0."
    ]
  },
  {
    "time": [
      584.16,
      589.56
    ],
    "en": [
      "Let’s look at exactly how the NETWORK command functions."
    ],
    "ru": [
      "Давайте посмотрим, как именно работает команда NETWORK."
    ]
  },
  {
    "time": [
      589.56,
      593.85
    ],
    "en": [
      "The NETWORK command tells the router to look for interfaces with an IP address that is"
    ],
    "ru": [
      "Команда NETWORK указывает маршрутизатору искать интерфейсы с IP-адресом, который"
    ]
  },
  {
    "time": [
      593.85,
      598.88
    ],
    "en": [
      "in the specified range, that is the range specified in the NETWORK command."
    ],
    "ru": [
      "в указанном диапазоне, то есть в диапазоне, указанном в команде NETWORK."
    ]
  },
  {
    "time": [
      598.88,
      604.21
    ],
    "en": [
      "Then it will activate RIP on the interface or interfaces that fall in the range."
    ],
    "ru": [
      "Затем он активирует RIP на интерфейсе или интерфейсах, которые попадают в диапазон."
    ]
  },
  {
    "time": [
      604.21,
      609.21
    ],
    "en": [
      "It will form adjacencies with other connected RIP-enabled neighbors, and advertise the network"
    ],
    "ru": [
      "Он будет формировать смежность с другими подключенными соседями с поддержкой RIP и анонсировать сеть."
    ]
  },
  {
    "time": [
      609.21,
      611.37
    ],
    "en": [
      "prefix of the interface."
    ],
    "ru": [
      "префикс интерфейса."
    ]
  },
  {
    "time": [
      611.37,
      615.66
    ],
    "en": [
      "This is not necessarily the prefix you specified in the network command."
    ],
    "ru": [
      "Это не обязательно префикс, который вы указали в сетевой команде."
    ]
  },
  {
    "time": [
      615.66,
      621.76
    ],
    "en": [
      "This is also how the EIGRP and OSPF NETWORK commands operate, although there are a few differences."
    ],
    "ru": [
      "Таким же образом работают команды EIGRP и OSPF NETWORK, хотя есть несколько отличий."
    ]
  },
  {
    "time": [
      621.76,
      628.16
    ],
    "en": [
      "differences. So, let me walk through it step-by-step here, it will make it easier to pick up EIGRP and OSPF later."
    ],
    "ru": [
      "различия. Итак, позвольте мне пройти здесь шаг за шагом, это упростит использование EIGRP и OSPF позже."
    ]
  },
  {
    "time": [
      628.16,
      634.35
    ],
    "en": [
      "OSPF later. So, we’ve just entered the network 10.0.0.0 command on R1."
    ],
    "ru": [
      "OSPF позже. Итак, мы только что ввели команду network 10.0.0.0 на маршрутизаторе R1."
    ]
  },
  {
    "time": [
      634.35,
      642.32
    ],
    "en": [
      "Because the NETWORK command is classful, 10.0.0.0 is assumed to be 10.0.0.0/8."
    ],
    "ru": [
      "Поскольку команда NETWORK является классной, предполагается, что 10.0.0.0 - это 10.0.0.0/8."
    ]
  },
  {
    "time": [
      642.32,
      648.88
    ],
    "en": [
      "R1 will look for any interfaces with an IP address that matches 10.0.0.0/8."
    ],
    "ru": [
      "R1 будет искать любые интерфейсы с IP-адресом, который соответствует 10.0.0.0/8."
    ]
  },
  {
    "time": [
      648.88,
      654.47
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
      648.88,
      654.47
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
      654.47,
      656.9
    ],
    "en": [
      "needs to be the same."
    ],
    "ru": [
      "должно быть таким же."
    ]
  },
  {
    "time": [
      656.9,
      664.13
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
      656.9,
      664.13
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
      664.13,
      668.63
    ],
    "en": [
      "So, RIP is activated on G0/0 and G1/0."
    ],
    "ru": [
      "Итак, RIP активирован на G0 / 0 и G1 / 0."
    ]
  },
  {
    "time": [
      668.63,
      673.79
    ],
    "en": [
      "R1 then forms adjacencies with its neighbors R2 and R3."
    ],
    "ru": [
      "Затем R1 образует смежности со своими соседями R2 и R3."
    ]
  },
  {
    "time": [
      673.79,
      679.02
    ],
    "en": [
      "R1 will send and receive route information to and from R2 and R3."
    ],
    "ru": [
      "R1 будет отправлять и получать информацию о маршруте к R2 и R3 и от них."
    ]
  },
  {
    "time": [
      679.02,
      688.97
    ],
    "en": [
      "Here’s the important part, R1 advertises 10.0.12.0/30 and 10.0.13.0/30, the network"
    ],
    "ru": [
      "Вот важная часть: R1 объявляет 10.0.12.0/30 и 10.0.13.0/30, сеть"
    ]
  },
  {
    "time": [
      688.97,
      695.5
    ],
    "en": [
      "prefixes of its G0/0 and G1/0 interfaces, to its RIP neighbors, R2 and R3."
    ],
    "ru": [
      "префиксы его интерфейсов G0 / 0 и G1 / 0 для его соседей RIP, R2 и R3."
    ]
  },
  {
    "time": [
      695.5,
      703.57
    ],
    "en": [
      "Even though we used the NETWORK 10.0.0.0 command, R1 doesn’t advertise the 10.0.0.0/8 network."
    ],
    "ru": [
      "Несмотря на то, что мы использовали команду NETWORK 10.0.0.0, R1 не объявляет сеть 10.0.0.0/8."
    ]
  },
  {
    "time": [
      703.57,
      707.63
    ],
    "en": [
      "The NETWORK command doesn’t tell the router which networks to advertise."
    ],
    "ru": [
      "Команда NETWORK не сообщает маршрутизатору, какие сети следует рекламировать."
    ]
  },
  {
    "time": [
      707.63,
      712.02
    ],
    "en": [
      "It tells the router which interfaces to activate RIP on, and then the router will advertise"
    ],
    "ru": [
      "Он сообщает маршрутизатору, на каких интерфейсах активировать RIP, а затем маршрутизатор объявляет"
    ]
  },
  {
    "time": [
      712.02,
      715.16
    ],
    "en": [
      "the network prefix of those interfaces."
    ],
    "ru": [
      "сетевой префикс этих интерфейсов."
    ]
  },
  {
    "time": [
      715.16,
      720.26
    ],
    "en": [
      "Okay, we also configured the NETWORK 172.16.0.0 command."
    ],
    "ru": [
      "Хорошо, мы также настроили команду NETWORK 172.16.0.0."
    ]
  },
  {
    "time": [
      720.26,
      723.56
    ],
    "en": [
      "Let’s run through this as well."
    ],
    "ru": [
      "Давайте пройдемся и через это."
    ]
  },
  {
    "time": [
      723.56,
      732.76
    ],
    "en": [
      "Because the network command is classful, 172.16.0.0 is assumed to be 172.16.0.0/16."
    ],
    "ru": [
      "Поскольку сетевая команда является классовой, предполагается, что 172.16.0.0 - это 172.16.0.0/16."
    ]
  },
  {
    "time": [
      732.76,
      740.44
    ],
    "en": [
      "R1 will look for any interfaces with an IP address that matches 172.16.0.0/16."
    ],
    "ru": [
      "R1 будет искать любые интерфейсы с IP-адресом, который соответствует 172.16.0.0/16."
    ]
  },
  {
    "time": [
      740.44,
      748.12
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
      740.44,
      748.12
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
      748.12,
      753.45
    ],
    "en": [
      "This time there are no RIP neighbors connected to G2/0, so no new adjacencies are formed."
    ],
    "ru": [
      "На этот раз к G2 / 0 не подключены никакие соседи RIP, поэтому новые смежности не формируются."
    ]
  },
  {
    "time": [
      753.45,
      764.09
    ],
    "en": [
      "However, R1 advertises 172.16.1.0/28 (NOT 172.16.0.0/16) to its RIP neighbors."
    ],
    "ru": [
      "Однако R1 объявляет 172.16.1.0/28 (НЕ 172.16.0.0/16) своим соседям RIP."
    ]
  },
  {
    "time": [
      764.09,
      770.36
    ],
    "en": [
      "One more important point: Although there are no RIP neighbors connected to G2/0, R1 will"
    ],
    "ru": [
      "Еще один важный момент: хотя к G2 / 0 не подключены RIP-соседи, R1 будет"
    ]
  },
  {
    "time": [
      770.36,
      773.84
    ],
    "en": [
      "continuously send RIP advertisements out of G2/0."
    ],
    "ru": [
      "непрерывно отправлять рекламные объявления RIP из G2 / 0."
    ]
  },
  {
    "time": [
      773.84,
      778.56
    ],
    "en": [
      "This is unnecessary traffic, so G2/0 should be configured as a passive interface."
    ],
    "ru": [
      "Это ненужный трафик, поэтому G2 / 0 следует настроить как пассивный интерфейс."
    ]
  },
  {
    "time": [
      778.56,
      781.45
    ],
    "en": [
      "Let’s see how to do that."
    ],
    "ru": [
      "Посмотрим, как это сделать."
    ]
  },
  {
    "time": [
      781.45,
      785.69
    ],
    "en": [
      "I used the command PASSIVE-INTERFACE G2/0."
    ],
    "ru": [
      "Я использовал команду ПАССИВНЫЙ ИНТЕРФЕЙС G2 / 0."
    ]
  },
  {
    "time": [
      785.69,
      789.32
    ],
    "en": [
      "This configures G2/0 as a passive interface."
    ],
    "ru": [
      "Это настраивает G2 / 0 как пассивный интерфейс."
    ]
  },
  {
    "time": [
      789.32,
      794.15
    ],
    "en": [
      "Note that the command is done from RIP configuration mode, not directly on the interface itself."
    ],
    "ru": [
      "Обратите внимание, что команда выполняется в режиме настройки RIP, а не непосредственно на самом интерфейсе."
    ]
  },
  {
    "time": [
      794.15,
      798.19
    ],
    "en": [
      "That’s why you need to specify the interface in the command."
    ],
    "ru": [
      "Поэтому в команде нужно указать интерфейс."
    ]
  },
  {
    "time": [
      798.19,
      803.01
    ],
    "en": [
      "The passive-interface command tells the router to stop sending RIP advertisements out of"
    ],
    "ru": [
      "Команда passive-interface указывает маршрутизатору прекратить отправку объявлений RIP из"
    ]
  },
  {
    "time": [
      803.01,
      806.85
    ],
    "en": [
      "the specified interface, which is G2/0 in this case."
    ],
    "ru": [
      "указанный интерфейс, которым в данном случае является G2 / 0."
    ]
  },
  {
    "time": [
      806.85,
      811.55
    ],
    "en": [
      "However, the router will continue to advertise the network prefix of the interface, which"
    ],
    "ru": [
      "Однако маршрутизатор продолжит анонсировать сетевой префикс интерфейса, который"
    ]
  },
  {
    "time": [
      811.55,
      818.57
    ],
    "en": [
      "is 172.16.1.0/28, to its RIP neighbors, R2 and R3."
    ],
    "ru": [
      "172.16.1.0/28, для его соседей RIP, R2 и R3."
    ]
  },
  {
    "time": [
      818.57,
      823.75
    ],
    "en": [
      "It is recommended that you always use this command on interfaces which don’t have any RIP neighbors."
    ],
    "ru": [
      "Рекомендуется всегда использовать эту команду на интерфейсах, у которых нет соседних RIP."
    ]
  },
  {
    "time": [
      823.75,
      831.41
    ],
    "en": [
      "RIP neighbors. EIGRP and OSPF both have the same passive interface functionality, using the same command."
    ],
    "ru": [
      "Покойтесь с соседями. EIGRP и OSPF имеют одинаковые функции пассивного интерфейса с использованием одной и той же команды."
    ]
  },
  {
    "time": [
      831.41,
      839.32
    ],
    "en": [
      "To demonstrate one more function of RIP I added an Internet connection to R1, via it’s G3/0 interface."
    ],
    "ru": [
      "Чтобы продемонстрировать еще одну функцию RIP, я добавил подключение к Интернету к маршрутизатору R1 через его интерфейс G3 / 0."
    ]
  },
  {
    "time": [
      839.32,
      842.15
    ],
    "en": [
      "G3/0 interface. Then I configured a default route pointing to the Internet."
    ],
    "ru": [
      "G3 / 0 интерфейс. Затем я настроил маршрут по умолчанию, указывающий на Интернет."
    ]
  },
  {
    "time": [
      842.15,
      847.01
    ],
    "en": [
      "So, any packets that don’t match any of the other entries in R1’s routing table"
    ],
    "ru": [
      "Итак, любые пакеты, которые не соответствуют ни одной из других записей в таблице маршрутизации R1"
    ]
  },
  {
    "time": [
      847.01,
      849.55
    ],
    "en": [
      "will be sent to the Internet."
    ],
    "ru": [
      "будет отправлено в Интернет."
    ]
  },
  {
    "time": [
      849.55,
      851.84
    ],
    "en": [
      "Here you can see it in the routing table."
    ],
    "ru": [
      "Здесь вы можете увидеть это в таблице маршрутизации."
    ]
  },
  {
    "time": [
      851.84,
      858.45
    ],
    "en": [
      "Gateway of last resort is 203.0.113.2 to network 0.0.0.0."
    ],
    "ru": [
      "Последний шлюз - 203.0.113.2 в сеть 0.0.0.0."
    ]
  },
  {
    "time": [
      858.45,
      863.6
    ],
    "en": [
      "Under it you can see the configured static route to 0.0.0.0/0."
    ],
    "ru": [
      "Под ним вы можете увидеть настроенный статический маршрут до 0.0.0.0/0."
    ]
  },
  {
    "time": [
      863.6,
      869.03
    ],
    "en": [
      "Now, I want to use RIP to tell R2, R3, and R4 about this default route so that they can"
    ],
    "ru": [
      "Теперь я хочу использовать RIP, чтобы сообщить R2, R3 и R4 об этом маршруте по умолчанию, чтобы они могли"
    ]
  },
  {
    "time": [
      869.03,
      871.94
    ],
    "en": [
      "reach the Internet as well."
    ],
    "ru": [
      "выходят также в Интернет."
    ]
  },
  {
    "time": [
      871.94,
      877.41
    ],
    "en": [
      "The command to share this default route into RIP is DEFAULT-INFORMATION ORIGINATE, again"
    ],
    "ru": [
      "Команда для совместного использования этого маршрута по умолчанию в RIP - DEFAULT-INFORMATION ORIGINATE, опять же"
    ]
  },
  {
    "time": [
      877.41,
      880.74
    ],
    "en": [
      "the command is done from RIP configuration mode."
    ],
    "ru": [
      "команда выполняется из режима настройки RIP."
    ]
  },
  {
    "time": [
      880.74,
      886.19
    ],
    "en": [
      "Now that I have entered this command, R1 will advertise the route to R2 and R3, and they"
    ],
    "ru": [
      "Теперь, когда я ввел эту команду, R1 объявит маршрут к R2 и R3, и они"
    ]
  },
  {
    "time": [
      886.19,
      888.41
    ],
    "en": [
      "will then advertise it to R4."
    ],
    "ru": [
      "затем объявит об этом R4."
    ]
  },
  {
    "time": [
      888.41,
      892.81
    ],
    "en": [
      "Let’s just check the routing table of R4."
    ],
    "ru": [
      "Давайте просто проверим таблицу маршрутизации R4."
    ]
  },
  {
    "time": [
      892.81,
      901.08
    ],
    "en": [
      "Notice it says ‘Gateway of last resort is 10.0.34.1 to network 0.0.0.0’, however below"
    ],
    "ru": [
      "Обратите внимание, что там написано: «Шлюз последней инстанции - 10.0.34.1 в сеть 0.0.0.0», однако ниже"
    ]
  },
  {
    "time": [
      901.08,
      908.58
    ],
    "en": [
      "that you can see two routes, one via F2/0 to R3 and one via G0/0 to R2."
    ],
    "ru": [
      "что вы можете видеть два маршрута: один через F2 / 0 на R3 и один через G0 / 0 на R2."
    ]
  },
  {
    "time": [
      908.58,
      912.87
    ],
    "en": [
      "Only one is actually stated up top as being the gateway of last resort, but because both"
    ],
    "ru": [
      "Только один на самом деле заявлен наверху как крайний выход, но потому что оба"
    ]
  },
  {
    "time": [
      912.87,
      917.96
    ],
    "en": [
      "of these routes have the same hop-count, R4 will load-balance traffic over the two routes."
    ],
    "ru": [
      "из этих маршрутов имеет одинаковое количество переходов, R4 будет балансировать нагрузку трафика по двум маршрутам."
    ]
  },
  {
    "time": [
      917.96,
      923.6
    ],
    "en": [
      "I’m repeating myself, but RIP treats all connections equally, as one hop, so even though"
    ],
    "ru": [
      "Я повторяюсь, но RIP обрабатывает все соединения одинаково, как один переход, поэтому даже если"
    ]
  },
  {
    "time": [
      923.6,
      928.85
    ],
    "en": [
      "the connection via R3 is a slower fastethernet connection, RIP considers it equal to the"
    ],
    "ru": [
      "соединение через R3 - более медленное соединение fastethernet, RIP считает его равным"
    ]
  },
  {
    "time": [
      928.85,
      931.97
    ],
    "en": [
      "faster gigabit ethernet connection via R2."
    ],
    "ru": [
      "более быстрое гигабитное Ethernet-соединение через R2."
    ]
  },
  {
    "time": [
      931.97,
      936.88
    ],
    "en": [
      "OSPF also has the same DEFAULT-INFORMATION ORIGINATE command, by the way, to share a"
    ],
    "ru": [
      "OSPF также имеет ту же команду DEFAULT-INFORMATION ORIGINATE, кстати, для совместного использования"
    ]
  },
  {
    "time": [
      936.88,
      938.46
    ],
    "en": [
      "default route with neighbors."
    ],
    "ru": [
      "маршрут по умолчанию с соседями."
    ]
  },
  {
    "time": [
      938.46,
      943.51
    ],
    "en": [
      "We’ll take a look at it again when we learn about OSPF."
    ],
    "ru": [
      "Мы еще рассмотрим его, когда узнаем об OSPF."
    ]
  },
  {
    "time": [
      943.51,
      948.74
    ],
    "en": [
      "Now let’s take a look at a very useful SHOW command, SHOW IP PROTOCOLS."
    ],
    "ru": [
      "Теперь давайте взглянем на очень полезную команду SHOW, SHOW IP PROTOCOLS."
    ]
  },
  {
    "time": [
      948.74,
      954.16
    ],
    "en": [
      "This command can be used for RIP, EIGRP, and OSPF, to check various stats."
    ],
    "ru": [
      "Эту команду можно использовать для RIP, EIGRP и OSPF для проверки различной статистики."
    ]
  },
  {
    "time": [
      954.16,
      958.09
    ],
    "en": [
      "We’ll just run through a few of the things you need to know."
    ],
    "ru": [
      "Мы просто рассмотрим несколько вещей, которые вам нужно знать."
    ]
  },
  {
    "time": [
      958.09,
      963.51
    ],
    "en": [
      "First up, this part here identifies the protocol that is being used, RIP in this case."
    ],
    "ru": [
      "Во-первых, эта часть определяет используемый протокол, в данном случае RIP."
    ]
  },
  {
    "time": [
      963.51,
      968.86
    ],
    "en": [
      "These are some timers that RIP uses to operate, we won’t talk about them for RIP or EIGRP,"
    ],
    "ru": [
      "Это некоторые таймеры, которые RIP использует для работы, мы не будем говорить о них для RIP или EIGRP,"
    ]
  },
  {
    "time": [
      968.86,
      972.53
    ],
    "en": [
      "but will go in depth when we study OSPF."
    ],
    "ru": [
      "но мы углубимся в него, когда изучим OSPF."
    ]
  },
  {
    "time": [
      972.53,
      979.61
    ],
    "en": [
      "Here is some information about the version being used, notice that it’s version 2 as we configured."
    ],
    "ru": [
      "Вот некоторая информация об используемой версии. Обратите внимание, что это версия 2, как мы настроили."
    ]
  },
  {
    "time": [
      979.61,
      987.42
    ],
    "en": [
      "we configured. Automatic network summarization is not in effect, this is because we used the NO AUTO-SUMMARY command earlier."
    ],
    "ru": [
      "мы настроили. Автоматическое суммирование сети не действует, потому что ранее мы использовали команду NO AUTO-SUMMARY."
    ]
  },
  {
    "time": [
      987.42,
      992.04
    ],
    "en": [
      "command earlier. Maximum paths is 4, this refers to ECMP load-balancing."
    ],
    "ru": [
      "команда ранее. Максимальное количество путей - 4, это относится к балансировке нагрузки ECMP."
    ]
  },
  {
    "time": [
      992.04,
      996.9
    ],
    "en": [
      "By default, RIP will insert up to 4 paths to the same destination into the routing table"
    ],
    "ru": [
      "По умолчанию RIP вставляет до 4 путей к одному и тому же месту назначения в таблицу маршрутизации."
    ]
  },
  {
    "time": [
      996.9,
      998.41
    ],
    "en": [
      "if they have the same metric."
    ],
    "ru": [
      "если у них одинаковая метрика."
    ]
  },
  {
    "time": [
      998.41,
      1001.05
    ],
    "en": [
      "However, this can be changed."
    ],
    "ru": [
      "Однако это можно изменить."
    ]
  },
  {
    "time": [
      1001.05,
      1006.76
    ],
    "en": [
      "Here is the command, MAXIMUM-PATHS, followed by a number, 1 to 32."
    ],
    "ru": [
      "Вот команда MAXIMUM-PATHS, за которой следует число от 1 до 32."
    ]
  },
  {
    "time": [
      1006.76,
      1008.88
    ],
    "en": [
      "This is done from RIP configuration mode."
    ],
    "ru": [
      "Это делается в режиме настройки RIP."
    ]
  },
  {
    "time": [
      1008.88,
      1011.51
    ],
    "en": [
      "I put in 8 for example."
    ],
    "ru": [
      "Я например 8 поставил."
    ]
  },
  {
    "time": [
      1011.51,
      1016.89
    ],
    "en": [
      "This command is the same for EIGRP and OSPF also, by the way."
    ],
    "ru": [
      "Кстати, эта команда одинакова и для EIGRP, и для OSPF."
    ]
  },
  {
    "time": [
      1016.89,
      1021.45
    ],
    "en": [
      "Next up, this section here shows the networks we entered with the NETWORK command."
    ],
    "ru": [
      "Далее, в этом разделе показаны сети, в которые мы вошли с помощью команды NETWORK."
    ]
  },
  {
    "time": [
      1021.45,
      1025.61
    ],
    "en": [
      "Once again, these aren’t the actual networks RIP is advertising, the network command just"
    ],
    "ru": [
      "Опять же, это не настоящие сети, которые RIP рекламирует, а команда network просто"
    ]
  },
  {
    "time": [
      1025.61,
      1029.02
    ],
    "en": [
      "identifies which interfaces to activate RIP on."
    ],
    "ru": [
      "определяет, на каких интерфейсах активировать RIP."
    ]
  },
  {
    "time": [
      1029.02,
      1035.78
    ],
    "en": [
      "Here you can see any passive interfaces listed, just G2/0 in this case."
    ],
    "ru": [
      "Здесь вы можете увидеть любые перечисленные пассивные интерфейсы, в данном случае только G2 / 0."
    ]
  },
  {
    "time": [
      1035.78,
      1041.77
    ],
    "en": [
      "Under ‘routing information sources’ you can see R1’s RIP neighbors, 10.0.12.2 which"
    ],
    "ru": [
      "В разделе «источники информации о маршрутизации» вы можете увидеть RIP-соседей маршрутизатора R1, 10.0.12.2, которые"
    ]
  },
  {
    "time": [
      1041.77,
      1046.8
    ],
    "en": [
      "is R2 and 10.0.13.2 which is R3."
    ],
    "ru": [
      "это R2 и 10.0.13.2, который является R3."
    ]
  },
  {
    "time": [
      1046.8,
      1053.23
    ],
    "en": [
      "Finally, distance states the administrative distance of RIP, which is currently the default of 120."
    ],
    "ru": [
      "Наконец, Distance указывает административное расстояние RIP, которое в настоящее время равно 120 по умолчанию."
    ]
  },
  {
    "time": [
      1053.23,
      1058.24
    ],
    "en": [
      "of 120. This can be changed with this command from RIP configuration mode, DISTANCE, followed"
    ],
    "ru": [
      "из 120. Это можно изменить с помощью этой команды из режима конфигурации RIP, DISTANCE, а затем"
    ]
  },
  {
    "time": [
      1058.24,
      1061.75
    ],
    "en": [
      "by a number, 1 to 255."
    ],
    "ru": [
      "числом от 1 до 255."
    ]
  },
  {
    "time": [
      1061.75,
      1066.6
    ],
    "en": [
      "For example, if you want to make RIP routes preferred over EIGRP routes for some reason,"
    ],
    "ru": [
      "Например, если вы по какой-то причине хотите сделать маршруты RIP предпочтительнее маршрутов EIGRP,"
    ]
  },
  {
    "time": [
      1066.6,
      1073.86
    ],
    "en": [
      "you could set it to 85 like I just did, to make RIP’s AD lower than EIGRP’s AD of 90."
    ],
    "ru": [
      "вы можете установить его на 85, как я только что сделал, чтобы сделать AD RIP ниже, чем AD EIGRP, равного 90."
    ]
  },
  {
    "time": [
      1073.86,
      1079.84
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
      1073.86,
      1079.84
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
      1079.84,
      1081.35
    ],
    "en": [
      "Okay, that’s all for RIP."
    ],
    "ru": [
      "Хорошо, это все для RIP."
    ]
  },
  {
    "time": [
      1081.35,
      1086.25
    ],
    "en": [
      "Let’s move on to EIGRP, you’ll see a lot of things are similar to RIP."
    ],
    "ru": [
      "Перейдем к EIGRP, вы увидите, что многие вещи похожи на RIP."
    ]
  },
  {
    "time": [
      1086.25,
      1090.9
    ],
    "en": [
      "EIGRP stands for Enhanced Interior Gateway Routing Protocol."
    ],
    "ru": [
      "EIGRP означает расширенный протокол маршрутизации внутреннего шлюза."
    ]
  },
  {
    "time": [
      1090.9,
      1096.1
    ],
    "en": [
      "It is an improved version of the older IGRP, Interior Gateway Routing Protocol."
    ],
    "ru": [
      "Это улучшенная версия старого протокола маршрутизации внутреннего шлюза IGRP."
    ]
  },
  {
    "time": [
      1096.1,
      1101.66
    ],
    "en": [
      "EIGRP was Cisco proprietary, but Cisco has now published it openly so other vendors can"
    ],
    "ru": [
      "Протокол EIGRP был запатентован Cisco, но теперь Cisco опубликовала его открыто, чтобы другие поставщики могли"
    ]
  },
  {
    "time": [
      1101.66,
      1103.66
    ],
    "en": [
      "implement it on their equipment."
    ],
    "ru": [
      "реализовать это на своем оборудовании."
    ]
  },
  {
    "time": [
      1103.66,
      1108.85
    ],
    "en": [
      "However, my understanding is that Cisco didn’t open up the entire protocol, parts of it remain"
    ],
    "ru": [
      "Однако, насколько я понимаю, Cisco не открыла весь протокол, его части остались"
    ]
  },
  {
    "time": [
      1108.85,
      1113.82
    ],
    "en": [
      "Cisco-proprietary, and I don’t think many vendors have bothered implementing EIGRP."
    ],
    "ru": [
      "Собственность Cisco, и я не думаю, что многие поставщики удосужились внедрить EIGRP."
    ]
  },
  {
    "time": [
      1113.82,
      1118.6
    ],
    "en": [
      "So, practically speaking, it’s still considered a Cisco-only protocol."
    ],
    "ru": [
      "Таким образом, практически говоря, он по-прежнему считается протоколом только для Cisco."
    ]
  },
  {
    "time": [
      1118.6,
      1123.39
    ],
    "en": [
      "It’s considered an ‘advanced’ or ‘hybrid’ distance vector routing protocol."
    ],
    "ru": [
      "Он считается «продвинутым» или «гибридным» протоколом дистанционно-векторной маршрутизации."
    ]
  },
  {
    "time": [
      1123.39,
      1128.33
    ],
    "en": [
      "It improves on the very basic operations of RIP, its fellow distance vector routing protocol."
    ],
    "ru": [
      "Он улучшает самые основные операции RIP, аналогичного протокола векторной маршрутизации на расстоянии."
    ]
  },
  {
    "time": [
      1128.33,
      1132.47
    ],
    "en": [
      "It’s much faster than RIP in reacting to changes in the network."
    ],
    "ru": [
      "Он намного быстрее, чем RIP, реагирует на изменения в сети."
    ]
  },
  {
    "time": [
      1132.47,
      1138.32
    ],
    "en": [
      "It doesn’t have the 15 ‘hop-count’ limit of RIP, so it supports very large networks."
    ],
    "ru": [
      "У него нет ограничения RIP в 15 «счетчиков», поэтому он поддерживает очень большие сети."
    ]
  },
  {
    "time": [
      1138.32,
      1143.6
    ],
    "en": [
      "It sends messages using the multicast address 224.0.0.10."
    ],
    "ru": [
      "Он отправляет сообщения с использованием многоадресного адреса 224.0.0.10."
    ]
  },
  {
    "time": [
      1143.6,
      1151.42
    ],
    "en": [
      "Remember, RIPv1 broadcasts messages, and RIPv2 multicasts them to 224.0.0.9."
    ],
    "ru": [
      "Помните, что RIPv1 рассылает сообщения, а RIPv2 рассылает их на 224.0.0.9."
    ]
  },
  {
    "time": [
      1151.42,
      1156.73
    ],
    "en": [
      "EIGRP multicasts them to 224.0.0.10."
    ],
    "ru": [
      "EIGRP рассылает их по адресу 224.0.0.10."
    ]
  },
  {
    "time": [
      1156.73,
      1161.53
    ],
    "en": [
      "Try to remember these multicast addresses, they could come up as exam questions."
    ],
    "ru": [
      "Попытайтесь запомнить эти адреса многоадресной рассылки, они могут возникнуть как вопросы на экзамене."
    ]
  },
  {
    "time": [
      1161.53,
      1170.77
    ],
    "en": [
      "Finally, one unique feature of EIGRP, EIGRP is the only IGP that can perform unequal-cost load-balancing."
    ],
    "ru": [
      "Наконец, одна уникальная особенность EIGRP, EIGRP - единственный IGP, который может выполнять балансировку нагрузки с неравной стоимостью."
    ]
  },
  {
    "time": [
      1170.77,
      1176.1
    ],
    "en": [
      "load-balancing. By default it performs ECMP load-balancing over 4 paths like RIP, but you can configure"
    ],
    "ru": [
      "Балансировка нагрузки. По умолчанию он выполняет балансировку нагрузки ECMP по 4 путям, например RIP, но вы можете настроить"
    ]
  },
  {
    "time": [
      1176.1,
      1179.63
    ],
    "en": [
      "it to load-balance over multiple paths that don’t have equal cost."
    ],
    "ru": [
      "это для балансировки нагрузки по нескольким путям, которые не имеют одинаковой стоимости."
    ]
  },
  {
    "time": [
      1179.63,
      1183.44
    ],
    "en": [
      "EIGRP will even load-balance them in proportion to their bandwidth."
    ],
    "ru": [
      "EIGRP даже сбалансирует их нагрузку пропорционально их пропускной способности."
    ]
  },
  {
    "time": [
      1183.44,
      1188.65
    ],
    "en": [
      "So, more traffic will be sent over paths with a lower-metric, since they are faster, and"
    ],
    "ru": [
      "Таким образом, больше трафика будет отправлено по путям с более низкой метрикой, поскольку они быстрее, и"
    ]
  },
  {
    "time": [
      1188.65,
      1193.47
    ],
    "en": [
      "less traffic will be sent over paths with a higher metric, since they are the slower paths."
    ],
    "ru": [
      "меньше трафика будет отправлено по путям с более высокой метрикой, поскольку они являются более медленными путями."
    ]
  },
  {
    "time": [
      1193.47,
      1199.39
    ],
    "en": [
      "paths. EIGRP is a great protocol, but because its use is mostly limited only to Cisco devices,"
    ],
    "ru": [
      "пути. EIGRP - отличный протокол, но поскольку его использование в основном ограничено только устройствами Cisco,"
    ]
  },
  {
    "time": [
      1199.39,
      1202.72
    ],
    "en": [
      "it’s not used nearly as much as OSPF is."
    ],
    "ru": [
      "он не используется так часто, как OSPF."
    ]
  },
  {
    "time": [
      1202.72,
      1209.33
    ],
    "en": [
      "That’s why Cisco made OSPF the main focus of the new CCNA when it comes to dynamic routing protocols."
    ],
    "ru": [
      "Вот почему Cisco сделала OSPF основным направлением новой CCNA, когда дело касается протоколов динамической маршрутизации."
    ]
  },
  {
    "time": [
      1209.33,
      1213.559
    ],
    "en": [
      "protocols. Okay, let’s look at the basic configurations of EIGRP."
    ],
    "ru": [
      "протоколы. Хорошо, давайте посмотрим на основные конфигурации EIGRP."
    ]
  },
  {
    "time": [
      1213.559,
      1216.51
    ],
    "en": [
      "Here’s the same network as before."
    ],
    "ru": [
      "Вот та же сеть, что и раньше."
    ]
  },
  {
    "time": [
      1216.51,
      1223.559
    ],
    "en": [
      "I’ve removed the RIP configurations, although you can have both RIP and EIGRP running at the same time."
    ],
    "ru": [
      "Я удалил конфигурации RIP, хотя вы можете одновременно использовать и RIP, и EIGRP."
    ]
  },
  {
    "time": [
      1223.559,
      1227.559
    ],
    "en": [
      "the same time. But that would just be a waste of resources on the routers, so usually there will just"
    ],
    "ru": [
      "в то же время. Но это было бы пустой тратой ресурсов на маршрутизаторах, поэтому обычно"
    ]
  },
  {
    "time": [
      1227.559,
      1230.23
    ],
    "en": [
      "be one IGP running on a router."
    ],
    "ru": [
      "быть одним IGP, работающим на маршрутизаторе."
    ]
  },
  {
    "time": [
      1230.23,
      1240.02
    ],
    "en": [
      "So, enter EIGRP configuration mode with this command, ROUTER EIGRP, followed by an AS, autonomous system, number."
    ],
    "ru": [
      "Итак, войдите в режим конфигурации EIGRP с помощью этой команды ROUTER EIGRP, за которой следует номер автономной системы AS."
    ]
  },
  {
    "time": [
      1240.02,
      1241.46
    ],
    "en": [
      "autonomous system, number. I used 1."
    ],
    "ru": [
      "автономная система, номер. Я использовал 1."
    ]
  },
  {
    "time": [
      1241.46,
      1247.72
    ],
    "en": [
      "The AS number must match between routers or they will not form an adjacency and share route information."
    ],
    "ru": [
      "Номер AS должен совпадать между маршрутизаторами, иначе они не будут формировать смежность и передавать информацию о маршруте."
    ]
  },
  {
    "time": [
      1247.72,
      1254.16
    ],
    "en": [
      "route information. I already configured the same AS number of 1 on R2, 3, and 4, so I had to configure the"
    ],
    "ru": [
      "информация о маршруте. Я уже настроил тот же номер AS 1 на R2, 3 и 4, поэтому мне пришлось настроить"
    ]
  },
  {
    "time": [
      1254.16,
      1256.79
    ],
    "en": [
      "same here on R1."
    ],
    "ru": [
      "то же самое здесь на R1."
    ]
  },
  {
    "time": [
      1256.79,
      1258.99
    ],
    "en": [
      "Next I disabled auto-summary."
    ],
    "ru": [
      "Затем я отключил автосводку."
    ]
  },
  {
    "time": [
      1258.99,
      1264.15
    ],
    "en": [
      "It functions the same as in RIP, it will advertise classful networks instead of the actual network"
    ],
    "ru": [
      "Он работает так же, как в RIP, он будет рекламировать классовые сети вместо реальной сети."
    ]
  },
  {
    "time": [
      1264.15,
      1267.51
    ],
    "en": [
      "prefix configured on its interfaces."
    ],
    "ru": [
      "префикс настроен на его интерфейсах."
    ]
  },
  {
    "time": [
      1267.51,
      1273.36
    ],
    "en": [
      "Auto-summary might be enabled or disabled by default, depending on the router or VIOS version."
    ],
    "ru": [
      "Автоматическое суммирование может быть включено или отключено по умолчанию в зависимости от маршрутизатора или версии VIOS."
    ]
  },
  {
    "time": [
      1273.36,
      1276.05
    ],
    "en": [
      "If it’s enabled, disable it."
    ],
    "ru": [
      "Если он включен, отключите его."
    ]
  },
  {
    "time": [
      1276.05,
      1280.4
    ],
    "en": [
      "Actually on the version I’m using here it is already disabled by default, but I just"
    ],
    "ru": [
      "На самом деле в той версии, которую я использую здесь, она уже отключена по умолчанию, но я просто"
    ]
  },
  {
    "time": [
      1280.4,
      1284.97
    ],
    "en": [
      "wanted to show you that EIGRP also has the auto-summary feature like RIP, and that you"
    ],
    "ru": [
      "хотел показать вам, что EIGRP также имеет функцию автоматического суммирования, такую ​​как RIP, и что вы"
    ]
  },
  {
    "time": [
      1284.97,
      1287.91
    ],
    "en": [
      "should make sure it’s turned off."
    ],
    "ru": [
      "должен убедиться, что он выключен."
    ]
  },
  {
    "time": [
      1287.91,
      1292.63
    ],
    "en": [
      "Then I used the same passive-interface command as I did for RIP."
    ],
    "ru": [
      "Затем я использовал ту же команду пассивного интерфейса, что и для RIP."
    ]
  },
  {
    "time": [
      1292.63,
      1301.53
    ],
    "en": [
      "Next up I used the NETWORK 10.0.0.0 command to activate EIGRP on the G0/0 and G1/0 interfaces."
    ],
    "ru": [
      "Затем я использовал команду NETWORK 10.0.0.0 для активации EIGRP на интерфейсах G0 / 0 и G1 / 0."
    ]
  },
  {
    "time": [
      1301.53,
      1305.72
    ],
    "en": [
      "You can use a mask with EIGRP’s NETWORK command, however it will assume a classful"
    ],
    "ru": [
      "Вы можете использовать маску с командой EIGRP NETWORK, однако она будет предполагать, что"
    ]
  },
  {
    "time": [
      1305.72,
      1308.35
    ],
    "en": [
      "address if you don’t specify the mask."
    ],
    "ru": [
      "адрес, если вы не укажете маску."
    ]
  },
  {
    "time": [
      1308.35,
      1315.32
    ],
    "en": [
      "So, NETWORK 10.0.0.0 is assumed to be 10.0.0.0/8."
    ],
    "ru": [
      "Итак, NETWORK 10.0.0.0 предполагается равным 10.0.0.0/8."
    ]
  },
  {
    "time": [
      1315.32,
      1317.69
    ],
    "en": [
      "This network command functions like RIP’s."
    ],
    "ru": [
      "Эта сетевая команда работает как RIP."
    ]
  },
  {
    "time": [
      1317.69,
      1322.95
    ],
    "en": [
      "You aren’t actually telling the router to advertise the 10.0.0.0/8 network."
    ],
    "ru": [
      "На самом деле вы не говорите маршрутизатору анонсировать сеть 10.0.0.0/8."
    ]
  },
  {
    "time": [
      1322.95,
      1329.3
    ],
    "en": [
      "You are telling it to activate EIGRP on interfaces with an IP address that falls in the 10.0.0.0/8"
    ],
    "ru": [
      "Вы говорите ему активировать EIGRP на интерфейсах с IP-адресом, который попадает в 10.0.0.0/8"
    ]
  },
  {
    "time": [
      1329.3,
      1334.25
    ],
    "en": [
      "range, so any IP address that begins with 10."
    ],
    "ru": [
      "диапазон, поэтому любой IP-адрес, начинающийся с 10."
    ]
  },
  {
    "time": [
      1334.25,
      1341.2
    ],
    "en": [
      "That includes G0/0 and G1/0, so EIGRP is activated on both interfaces."
    ],
    "ru": [
      "Это включает G0 / 0 и G1 / 0, поэтому EIGRP активирован на обоих интерфейсах."
    ]
  },
  {
    "time": [
      1341.2,
      1343.99
    ],
    "en": [
      "If you specify the mask, it looks like this."
    ],
    "ru": [
      "Если указать маску, это выглядит так."
    ]
  },
  {
    "time": [
      1343.99,
      1354.55
    ],
    "en": [
      "This command here, NETWORK 172.16.1.0 0.0.0.15 activates EIGRP on the G2/0 interface."
    ],
    "ru": [
      "Эта команда здесь, NETWORK 172.16.1.0 0.0.0.15, активирует EIGRP на интерфейсе G2 / 0."
    ]
  },
  {
    "time": [
      1354.55,
      1362.24
    ],
    "en": [
      "If this is your first time learning this, you’re probably a little confused right now. now. What’s 0.0.0.15?"
    ],
    "ru": [
      "Если вы впервые изучаете это, возможно, вы сейчас немного запутались. Теперь. Что такое 0.0.0.15?"
    ]
  },
  {
    "time": [
      1362.24,
      1368.78
    ],
    "en": [
      "now. What’s 0.0.0.15? Isn’t the subnet mask for a /28 prefix 255.255.255.240?"
    ],
    "ru": [
      "Теперь. Что такое 0.0.0.15? Разве это не маска подсети для префикса / 28 255.255.255.240?"
    ]
  },
  {
    "time": [
      1368.78,
      1370.96
    ],
    "en": [
      "Well, yes it is."
    ],
    "ru": [
      "Ну да, это так."
    ]
  },
  {
    "time": [
      1370.96,
      1376.78
    ],
    "en": [
      "But EIGRP uses a ‘wildcard mask’ instead of a regular subnet mask."
    ],
    "ru": [
      "Но EIGRP использует «маску подстановки» вместо обычной маски подсети."
    ]
  },
  {
    "time": [
      1376.78,
      1380.46
    ],
    "en": [
      "Let me explain what exactly that means."
    ],
    "ru": [
      "Позвольте мне объяснить, что именно это означает."
    ]
  },
  {
    "time": [
      1380.46,
      1384.67
    ],
    "en": [
      "A wildcard mask is basically an ‘inverted’ subnet mask."
    ],
    "ru": [
      "Подстановочная маска - это, по сути, «инвертированная» маска подсети."
    ]
  },
  {
    "time": [
      1384.67,
      1391.14
    ],
    "en": [
      "All 1s in the subnet mask are 0 in the equivalent wildcard mask, and all 0s in the subnet mask"
    ],
    "ru": [
      "Все единицы в маске подсети равны 0 в эквивалентной маске подстановки, и все 0 в маске подсети."
    ]
  },
  {
    "time": [
      1391.14,
      1393.71
    ],
    "en": [
      "are 1 in the equivalent wildcard mask."
    ],
    "ru": [
      "равны 1 в эквивалентной маске подстановки."
    ]
  },
  {
    "time": [
      1393.71,
      1395.24
    ],
    "en": [
      "Let’s take a look."
    ],
    "ru": [
      "Давайте взглянем."
    ]
  },
  {
    "time": [
      1395.24,
      1398.75
    ],
    "en": [
      "Here’s a subnet mask in binary."
    ],
    "ru": [
      "Вот маска подсети в двоичном формате."
    ]
  },
  {
    "time": [
      1398.75,
      1402.22
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
      1398.75,
      1402.22
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
      1402.22,
      1405.72
    ],
    "en": [
      "If you invert all of the bits, you get this."
    ],
    "ru": [
      "Если вы перевернете все биты, вы получите это."
    ]
  },
  {
    "time": [
      1405.72,
      1408.15
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
      1405.72,
      1408.15
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
      1408.15,
      1415.01
    ],
    "en": [
      "So, that’s the wildcard mask equivalent of /24, 0.0.0.255."
    ],
    "ru": [
      "Итак, это эквивалент маски подстановки / 24, 0.0.0.255."
    ]
  },
  {
    "time": [
      1415.01,
      1421.09
    ],
    "en": [
      "Notice all of the 1s in the subnet mask have become 0, and the 0s in the subnet mask have become 1."
    ],
    "ru": [
      "Обратите внимание, что все единицы в маске подсети стали 0, а нули в маске подсети стали 1."
    ]
  },
  {
    "time": [
      1421.09,
      1429.52
    ],
    "en": [
      "become 1. Here’s another example. 255.255.0.0 becomes 0.0.255.255."
    ],
    "ru": [
      "стать 1. Вот еще один пример. 255.255.0.0 становится 0.0.255.255."
    ]
  },
  {
    "time": [
      1429.52,
      1433.8
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
      1429.52,
      1433.8
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
      1433.8,
      1440.67
    ],
    "en": [
      "And here’s another, 255.0.0.0 becomes 0.255.255.255."
    ],
    "ru": [
      "А вот еще один, 255.0.0.0 становится 0.255.255.255."
    ]
  },
  {
    "time": [
      1440.67,
      1443.51
    ],
    "en": [
      "This is the wildcard mask equivalent of /8."
    ],
    "ru": [
      "Это эквивалент маски подстановки / 8."
    ]
  },
  {
    "time": [
      1443.51,
      1449.38
    ],
    "en": [
      "Okay, so those are easy, now let’s look at something a little more challenging."
    ],
    "ru": [
      "Хорошо, это несложно, теперь давайте посмотрим на кое-что посложнее."
    ]
  },
  {
    "time": [
      1449.38,
      1458.04
    ],
    "en": [
      "In our network, R1’s G2/0 interface has a /28 prefix length, 255.255.255.240 written"
    ],
    "ru": [
      "В нашей сети интерфейс G2 / 0 маршрутизатора R1 имеет длину префикса / 28, записано 255.255.255.240."
    ]
  },
  {
    "time": [
      1458.04,
      1461.2
    ],
    "en": [
      "as a normal subnet mask in dotted decimal."
    ],
    "ru": [
      "как обычная маска подсети в десятичном формате с точками."
    ]
  },
  {
    "time": [
      1461.2,
      1463.76
    ],
    "en": [
      "If you invert the bits, you get this."
    ],
    "ru": [
      "Если вы перевернете биты, то получите вот это."
    ]
  },
  {
    "time": [
      1463.76,
      1468.46
    ],
    "en": [
      "If you write that out in dotted decimal, you get 0.0.0.15."
    ],
    "ru": [
      "Если вы запишете это в десятичном формате с точками, вы получите 0.0.0.15."
    ]
  },
  {
    "time": [
      1468.46,
      1472.51
    ],
    "en": [
      "So, that’s how you write a /28 prefix length using a wildcard mask."
    ],
    "ru": [
      "Итак, вот как вы пишете длину префикса / 28, используя подстановочную маску."
    ]
  },
  {
    "time": [
      1472.51,
      1476.09
    ],
    "en": [
      "Let’s do a few more practice questions."
    ],
    "ru": [
      "Давайте зададим еще несколько практических вопросов."
    ]
  },
  {
    "time": [
      1476.09,
      1483.0
    ],
    "en": [
      "Pause the video now and convert this into a wildcard mask."
    ],
    "ru": [
      "Приостановите видео сейчас и преобразуйте его в маску подстановки."
    ]
  },
  {
    "time": [
      1483.0,
      1492.25
    ],
    "en": [
      "Okay, here’s the answer, 0.0.0.127, that’s a /25 prefix length. Let’s try another."
    ],
    "ru": [
      "Хорошо, вот ответ: 0.0.0.127, длина префикса / 25. Давай попробуем другой."
    ]
  },
  {
    "time": [
      1492.25,
      1500.06
    ],
    "en": [
      "Let’s try another. Pause the video now and convert this subnet mask into a wildcard mask."
    ],
    "ru": [
      "Давай попробуем другой. Приостановите видео сейчас и преобразуйте эту маску подсети в маску подстановки."
    ]
  },
  {
    "time": [
      1500.06,
      1505.32
    ],
    "en": [
      "Okay, here’s the answer. 0.3.255.255."
    ],
    "ru": [
      "Хорошо, вот и ответ. 0.3.255.255."
    ]
  },
  {
    "time": [
      1505.32,
      1509.15
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
      1505.32,
      1509.15
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
      1509.15,
      1512.61
    ],
    "en": [
      "Let’s do one more for now."
    ],
    "ru": [
      "А пока сделаем еще один."
    ]
  },
  {
    "time": [
      1512.61,
      1519.84
    ],
    "en": [
      "Pause the video now and convert this subnet mask into a wildcard mask."
    ],
    "ru": [
      "Приостановите видео сейчас и преобразуйте эту маску подсети в маску подстановки."
    ]
  },
  {
    "time": [
      1519.84,
      1522.0
    ],
    "en": [
      "Okay, here’s the answer."
    ],
    "ru": [
      "Хорошо, вот и ответ."
    ]
  },
  {
    "time": [
      1522.0,
      1529.92
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
      1522.0,
      1529.92
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
      1529.92,
      1533.7
    ],
    "en": [
      "Although I think it’s always important to understand the binary underneath all of it,"
    ],
    "ru": [
      "Хотя я думаю, что всегда важно понимать двоичный код, лежащий в основе всего этого,"
    ]
  },
  {
    "time": [
      1533.7,
      1539.0
    ],
    "en": [
      "a good shorcut is to subtract each octet of the subnet mask from 255."
    ],
    "ru": [
      "хороший способ сокращения - вычесть каждый октет маски подсети из 255."
    ]
  },
  {
    "time": [
      1539.0,
      1546.55
    ],
    "en": [
      "So, with this subnet mask, for example, 255 minus 255 equals 0."
    ],
    "ru": [
      "Итак, с этой маской подсети, например, 255 минус 255 равно 0."
    ]
  },
  {
    "time": [
      1546.55,
      1550.29
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
      1546.55,
      1550.29
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
      1550.29,
      1558.52
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
      1550.29,
      1558.52
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
      1558.52,
      1568.35
    ],
    "en": [
      "So, this /21 subnet mask becomes 0.0.7.255 when written using a wildcard mask."
    ],
    "ru": [
      "Таким образом, эта маска подсети / 21 становится 0.0.7.255 при записи с использованием подстановочной маски."
    ]
  },
  {
    "time": [
      1568.35,
      1572.88
    ],
    "en": [
      "To finish up with wildcard masks, I’ll explain a little bit more about their function."
    ],
    "ru": [
      "Чтобы закончить с масками с подстановочными знаками, я расскажу немного больше об их функциях."
    ]
  },
  {
    "time": [
      1572.88,
      1579.54
    ],
    "en": [
      "A ‘0’ in the wildcard mask means the bits must match, between the interface’s IP address"
    ],
    "ru": [
      "«0» в подстановочной маске означает, что биты между IP-адресами интерфейса должны совпадать."
    ]
  },
  {
    "time": [
      1579.54,
      1581.86
    ],
    "en": [
      "and the EIGRP network command."
    ],
    "ru": [
      "и сетевая команда EIGRP."
    ]
  },
  {
    "time": [
      1581.86,
      1586.16
    ],
    "en": [
      "A ‘1’ in the wildcard mask means the bits don’t have to match."
    ],
    "ru": [
      "«1» в маске подстановки означает, что биты не должны совпадать."
    ]
  },
  {
    "time": [
      1586.16,
      1593.67
    ],
    "en": [
      "So, the IP address on R1’s G2/0 is 172.16.1.14."
    ],
    "ru": [
      "Итак, IP-адрес на G2 / 0 маршрутизатора R1 - 172.16.1.14."
    ]
  },
  {
    "time": [
      1593.67,
      1603.11
    ],
    "en": [
      "I used the EIGRP network command 172.16.1.0, with the following wildcard mask: 0.0.0.15."
    ],
    "ru": [
      "Я использовал сетевую команду EIGRP 172.16.1.0 со следующей маской подстановки: 0.0.0.15."
    ]
  },
  {
    "time": [
      1603.11,
      1607.0
    ],
    "en": [
      "This means that the first 28 bits must match. Do they?"
    ],
    "ru": [
      "Это означает, что первые 28 бит должны совпадать. А они?"
    ]
  },
  {
    "time": [
      1607.0,
      1608.67
    ],
    "en": [
      "Do they? Yes they do."
    ],
    "ru": [
      "А они? Да, это так."
    ]
  },
  {
    "time": [
      1608.67,
      1613.51
    ],
    "en": [
      "So, we have a match, and EIGRP will be activated on the interface."
    ],
    "ru": [
      "Итак, у нас есть совпадение, и на интерфейсе будет активирован EIGRP."
    ]
  },
  {
    "time": [
      1613.51,
      1617.59
    ],
    "en": [
      "Let’s try another one, see if it will match."
    ],
    "ru": [
      "Давай попробуем другой, посмотрим, подойдет ли он."
    ]
  },
  {
    "time": [
      1617.59,
      1621.13
    ],
    "en": [
      "With the same IP address, I used this network command."
    ],
    "ru": [
      "С тем же IP-адресом я использовал эту сетевую команду."
    ]
  },
  {
    "time": [
      1621.13,
      1628.12
    ],
    "en": [
      "Network 172.16.1.0, with a wildcard mask of 0.0.0.7."
    ],
    "ru": [
      "Сеть 172.16.1.0 с подстановочной маской 0.0.0.7."
    ]
  },
  {
    "time": [
      1628.12,
      1632.38
    ],
    "en": [
      "So, this means the first 29 bits must match. Do they?"
    ],
    "ru": [
      "Итак, это означает, что первые 29 бит должны совпадать. А они?"
    ]
  },
  {
    "time": [
      1632.38,
      1634.26
    ],
    "en": [
      "Do they? Actually, they don’t."
    ],
    "ru": [
      "А они? На самом деле нет."
    ]
  },
  {
    "time": [
      1634.26,
      1639.62
    ],
    "en": [
      "This bit here doesn’t match between R1’s G2/0 interface and the NETWORK command."
    ],
    "ru": [
      "Этот бит здесь не соответствует интерфейсу G2 / 0 маршрутизатора R1 и команде NETWORK."
    ]
  },
  {
    "time": [
      1639.62,
      1644.63
    ],
    "en": [
      "So, no match, and EIGRP will not be activated on the interface."
    ],
    "ru": [
      "Итак, совпадения нет, и EIGRP не будет активирован на интерфейсе."
    ]
  },
  {
    "time": [
      1644.63,
      1648.34
    ],
    "en": [
      "Okay, try to figure this out on your own."
    ],
    "ru": [
      "Ладно, попробуй разобраться самостоятельно."
    ]
  },
  {
    "time": [
      1648.34,
      1657.54
    ],
    "en": [
      "With the command NETWORK 172.16.1.8 0.0.0.7, would EIGRP be activated on the interface?"
    ],
    "ru": [
      "Будет ли EIGRP активирован на интерфейсе с помощью команды NETWORK 172.16.1.8 0.0.0.7?"
    ]
  },
  {
    "time": [
      1657.54,
      1665.04
    ],
    "en": [
      "Pause the video now to find the answer. Okay, let’s check."
    ],
    "ru": [
      "Остановите видео сейчас, чтобы найти ответ. Хорошо, давай проверим."
    ]
  },
  {
    "time": [
      1665.04,
      1670.79
    ],
    "en": [
      "Okay, let’s check. We’re using the same wildcard mask as last time, so the first 29 bits have to match."
    ],
    "ru": [
      "Хорошо, давай проверим. Мы используем ту же маску подстановки, что и в прошлый раз, поэтому первые 29 бит должны совпадать."
    ]
  },
  {
    "time": [
      1670.79,
      1672.17
    ],
    "en": [
      "Do they match this time?"
    ],
    "ru": [
      "Они совпадают на этот раз?"
    ]
  },
  {
    "time": [
      1672.17,
      1682.24
    ],
    "en": [
      "Yes they do, the first 29 bits of 172.16.1.14 and the first 29 bits of 172.16.1.8 match."
    ],
    "ru": [
      "Да, совпадают первые 29 бит 172.16.1.14 и первые 29 бит 172.16.1.8."
    ]
  },
  {
    "time": [
      1682.24,
      1687.95
    ],
    "en": [
      "So, we have a match and EIGRP will be activated on the interface."
    ],
    "ru": [
      "Итак, у нас есть совпадение, и на интерфейсе будет активирован EIGRP."
    ]
  },
  {
    "time": [
      1687.95,
      1692.6
    ],
    "en": [
      "Okay, one last practice question for wildcard masks."
    ],
    "ru": [
      "Хорошо, последний практический вопрос для масок с подстановочными знаками."
    ]
  },
  {
    "time": [
      1692.6,
      1700.67
    ],
    "en": [
      "The network command is NETWORK 168.0.0.0 7.255.255.255."
    ],
    "ru": [
      "Сетевая команда - NETWORK 168.0.0.0 7.255.255.255."
    ]
  },
  {
    "time": [
      1700.67,
      1704.8
    ],
    "en": [
      "In this case, would EIGRP be activated on the interface?"
    ],
    "ru": [
      "В этом случае будет ли активирован EIGRP на интерфейсе?"
    ]
  },
  {
    "time": [
      1704.8,
      1712.28
    ],
    "en": [
      "Pause the video now to find the answer. Okay, let’s check."
    ],
    "ru": [
      "Остановите видео сейчас, чтобы найти ответ. Хорошо, давай проверим."
    ]
  },
  {
    "time": [
      1712.28,
      1717.51
    ],
    "en": [
      "Okay, let’s check. With this wildcard mask, only the first 5 bits need to match between the interface IP"
    ],
    "ru": [
      "Хорошо, давай проверим. С этой маской подстановки только первые 5 бит должны совпадать между IP-адресом интерфейса."
    ]
  },
  {
    "time": [
      1717.51,
      1721.01
    ],
    "en": [
      "address and the EIGRP network command."
    ],
    "ru": [
      "адрес и сетевая команда EIGRP."
    ]
  },
  {
    "time": [
      1721.01,
      1726.679
    ],
    "en": [
      "The first five bits of the IP address are 1 0 1 0 1, and the first five bits of the"
    ],
    "ru": [
      "Первые пять бит IP-адреса - это 1 0 1 0 1, а первые пять битов"
    ]
  },
  {
    "time": [
      1726.679,
      1733.0
    ],
    "en": [
      "network command are 1 0 1 0 1 as well, so we once again have a match, and EIGRP will"
    ],
    "ru": [
      "сетевая команда также равна 1 0 1 0 1, так что мы снова имеем совпадение, и EIGRP будет"
    ]
  },
  {
    "time": [
      1733.0,
      1735.39
    ],
    "en": [
      "be activated on the interface."
    ],
    "ru": [
      "быть активированным в интерфейсе."
    ]
  },
  {
    "time": [
      1735.39,
      1742.1
    ],
    "en": [
      "So, in this case I used a /28 wildcard mask, the same prefix length of the network G2/0"
    ],
    "ru": [
      "Итак, в этом случае я использовал маску подстановки / 28, такую ​​же длину префикса сети G2 / 0"
    ]
  },
  {
    "time": [
      1742.1,
      1747.29
    ],
    "en": [
      "is connected to, but as I just demonstrated you can use a variety of wildcard masks to"
    ],
    "ru": [
      "подключен к, но, как я только что продемонстрировал, вы можете использовать различные маски с подстановочными знаками, чтобы"
    ]
  },
  {
    "time": [
      1747.29,
      1750.02
    ],
    "en": [
      "activate EIGRP on the interface."
    ],
    "ru": [
      "активируйте EIGRP на интерфейсе."
    ]
  },
  {
    "time": [
      1750.02,
      1755.08
    ],
    "en": [
      "However, usually you’ll just keep it simple and use the same prefix length as the interface"
    ],
    "ru": [
      "Однако обычно вы просто сохраняете его простоту и используете ту же длину префикса, что и интерфейс."
    ]
  },
  {
    "time": [
      1755.08,
      1757.76
    ],
    "en": [
      "itself, like I did here."
    ],
    "ru": [
      "сам, как и здесь."
    ]
  },
  {
    "time": [
      1757.76,
      1764.549
    ],
    "en": [
      "Or maybe use a /32 wildcard mask and specify the exact IP address on the interface."
    ],
    "ru": [
      "Или, возможно, используйте подстановочную маску / 32 и укажите точный IP-адрес на интерфейсе."
    ]
  },
  {
    "time": [
      1764.549,
      1767.7
    ],
    "en": [
      "How would you write a /32 wildcard mask?"
    ],
    "ru": [
      "Как бы вы написали подстановочную маску / 32?"
    ]
  },
  {
    "time": [
      1767.7,
      1778.14
    ],
    "en": [
      "Well, as you know the subnet mask is 255.255.255.255, so the wildcard mask would be all 0s, 0.0.0.0."
    ],
    "ru": [
      "Ну, как вы знаете, маска подсети 255.255.255.255, поэтому подстановочная маска будет состоять из 0, 0.0.0.0."
    ]
  },
  {
    "time": [
      1778.14,
      1785.94
    ],
    "en": [
      "Anyway, OSPF uses wildcard masks also so we’ll review them again in a future video."
    ],
    "ru": [
      "В любом случае OSPF также использует маски с подстановочными знаками, поэтому мы еще рассмотрим их в следующем видео."
    ]
  },
  {
    "time": [
      1785.94,
      1792.35
    ],
    "en": [
      "Just remember, this command only specifies which interface or interfaces to activate EIGRP on."
    ],
    "ru": [
      "Просто помните, что эта команда только указывает, на каком интерфейсе или интерфейсах активировать EIGRP."
    ]
  },
  {
    "time": [
      1792.35,
      1801.96
    ],
    "en": [
      "EIGRP on. R1 will then advertise the network prefix on that interface, 172.16.1.0/28 in this case."
    ],
    "ru": [
      "EIGRP включен. Затем R1 объявит сетевой префикс на этом интерфейсе, в данном случае 172.16.1.0/28."
    ]
  },
  {
    "time": [
      1801.96,
      1806.57
    ],
    "en": [
      "Let’s take a look at the SHOW IP PROTOCOLS command when EIGRP is running."
    ],
    "ru": [
      "Давайте посмотрим на команду SHOW IP PROTOCOLS, когда EIGRP работает."
    ]
  },
  {
    "time": [
      1806.57,
      1813.61
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
      1806.57,
      1813.61
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
      1813.61,
      1817.21
    ],
    "en": [
      "Remember what I said in the previous video about EIGRP’s metric?"
    ],
    "ru": [
      "Помните, что я говорил в предыдущем видео о метрике EIGRP?"
    ]
  },
  {
    "time": [
      1817.21,
      1822.7
    ],
    "en": [
      "It uses interface bandwidth and delay by default, those are the ‘K1’ and ‘K3’ values"
    ],
    "ru": [
      "По умолчанию он использует полосу пропускания интерфейса и задержку, это значения «K1» и «K3»."
    ]
  },
  {
    "time": [
      1822.7,
      1825.4
    ],
    "en": [
      "that are set to 1 here."
    ],
    "ru": [
      "которые здесь установлены на 1."
    ]
  },
  {
    "time": [
      1825.4,
      1829.97
    ],
    "en": [
      "The bandwidth of the SLOWEST link in the path, plus the sum of the delay values of all the"
    ],
    "ru": [
      "Пропускная способность САМОЙ МЕДЛЕННОЙ ссылки на пути плюс сумма значений задержки всех"
    ]
  },
  {
    "time": [
      1829.97,
      1833.82
    ],
    "en": [
      "links in the path, are used to calculate the metric."
    ],
    "ru": [
      "ссылки в пути, используются для расчета метрики."
    ]
  },
  {
    "time": [
      1833.82,
      1840.84
    ],
    "en": [
      "The other k-values, K2, K4, and K5 are set to 0 by default and are not used to calculate"
    ],
    "ru": [
      "Другие значения k, K2, K4 и K5, по умолчанию установлены на 0 и не используются для расчета"
    ]
  },
  {
    "time": [
      1840.84,
      1845.16
    ],
    "en": [
      "metric, however that can be changed with configuration."
    ],
    "ru": [
      "метрика, однако ее можно изменить с помощью конфигурации."
    ]
  },
  {
    "time": [
      1845.16,
      1847.21
    ],
    "en": [
      "Next up is the router-ID."
    ],
    "ru": [
      "Далее идет идентификатор маршрутизатора."
    ]
  },
  {
    "time": [
      1847.21,
      1854.21
    ],
    "en": [
      "In EIGRP and OSPF, the router has a unique router ID which identifies it within the AS."
    ],
    "ru": [
      "В EIGRP и OSPF маршрутизатор имеет уникальный идентификатор маршрутизатора, который идентифицирует его в AS."
    ]
  },
  {
    "time": [
      1854.21,
      1859.99
    ],
    "en": [
      "Notice that the default on R1 is 172.16.1.14. Why is that?"
    ],
    "ru": [
      "Обратите внимание, что значение по умолчанию на R1 - 172.16.1.14. Это почему?"
    ]
  },
  {
    "time": [
      1859.99,
      1863.83
    ],
    "en": [
      "Why is that? Well, the router ID is determined like this."
    ],
    "ru": [
      "Это почему? Ну а ID роутера определяется так."
    ]
  },
  {
    "time": [
      1863.83,
      1869.1
    ],
    "en": [
      "First up, if the router ID is manually configured, that will be the router ID."
    ],
    "ru": [
      "Во-первых, если идентификатор маршрутизатора настроен вручную, это будет идентификатор маршрутизатора."
    ]
  },
  {
    "time": [
      1869.1,
      1874.45
    ],
    "en": [
      "If the router ID isn’t manually configured, the highest IP address on any of the router’s"
    ],
    "ru": [
      "Если идентификатор маршрутизатора не настроен вручную, наивысший IP-адрес любого из маршрутизаторов"
    ]
  },
  {
    "time": [
      1874.45,
      1878.29
    ],
    "en": [
      "loopback interfaces will be the router ID."
    ],
    "ru": [
      "loopback-интерфейсы будут идентификатором маршрутизатора."
    ]
  },
  {
    "time": [
      1878.29,
      1882.36
    ],
    "en": [
      "Loopback interfaces are virtual interfaces inside the router, I’ll talk about them"
    ],
    "ru": [
      "Loopback-интерфейсы - это виртуальные интерфейсы внутри маршрутизатора, я расскажу о них."
    ]
  },
  {
    "time": [
      1882.36,
      1885.13
    ],
    "en": [
      "more in the OSPF videos."
    ],
    "ru": [
      "больше в видеороликах OSPF."
    ]
  },
  {
    "time": [
      1885.13,
      1890.57
    ],
    "en": [
      "Finally, if there are no loopback interfaces configured, as is the case here, the highest"
    ],
    "ru": [
      "Наконец, если не настроены интерфейсы обратной связи, как здесь, наивысший"
    ]
  },
  {
    "time": [
      1890.57,
      1895.71
    ],
    "en": [
      "IP address on any of the router’s physical interfaces will become the router ID."
    ],
    "ru": [
      "IP-адрес на любом из физических интерфейсов маршрутизатора станет идентификатором маршрутизатора."
    ]
  },
  {
    "time": [
      1895.71,
      1902.24
    ],
    "en": [
      "So, G2/0’s 172.16.1.14 became the router ID."
    ],
    "ru": [
      "Итак, 172.16.1.14 G2 / 0 стал идентификатором маршрутизатора."
    ]
  },
  {
    "time": [
      1902.24,
      1907.48
    ],
    "en": [
      "Note that the router ID isn’t actually an IP address, it’s just a 32-bit number formatted"
    ],
    "ru": [
      "Обратите внимание, что идентификатор маршрутизатора на самом деле не IP-адрес, это всего лишь 32-битное число в формате."
    ]
  },
  {
    "time": [
      1907.48,
      1912.67
    ],
    "en": [
      "like a dotted-decimal IP address, and you can change it to any 32 bit number."
    ],
    "ru": [
      "как десятичный IP-адрес с точками, и вы можете изменить его на любое 32-битное число."
    ]
  },
  {
    "time": [
      1912.67,
      1917.16
    ],
    "en": [
      "Here’s how to configure the EIGRP router-ID."
    ],
    "ru": [
      "Вот как настроить идентификатор маршрутизатора EIGRP."
    ]
  },
  {
    "time": [
      1917.16,
      1924.25
    ],
    "en": [
      "From EIGRP configuration mode, use the command EIGRP ROUTER-ID, followed by the router ID"
    ],
    "ru": [
      "В режиме конфигурации EIGRP используйте команду EIGRP ROUTER-ID, за которой следует идентификатор маршрутизатора."
    ]
  },
  {
    "time": [
      1924.25,
      1929.27
    ],
    "en": [
      "you want to configure, in this case I used 1.1.1.1."
    ],
    "ru": [
      "вы хотите настроить, в данном случае я использовал 1.1.1.1."
    ]
  },
  {
    "time": [
      1929.27,
      1936.02
    ],
    "en": [
      "Now you can see that the router ID changes to 1.1.1.1, since manual configuration takes highest priority."
    ],
    "ru": [
      "Теперь вы можете видеть, что идентификатор маршрутизатора меняется на 1.1.1.1, поскольку ручная настройка имеет наивысший приоритет."
    ]
  },
  {
    "time": [
      1936.02,
      1940.18
    ],
    "en": [
      "highest priority. Okay, next two fields we saw when learning about RIP."
    ],
    "ru": [
      "высший приоритет. Хорошо, следующие два поля, которые мы видели при изучении RIP."
    ]
  },
  {
    "time": [
      1940.18,
      1946.74
    ],
    "en": [
      "Automatic summarization is disabled, as it should be, and EIGRP also performs ECMP load-balancing"
    ],
    "ru": [
      "Автоматическое суммирование отключено, как и должно быть, и EIGRP также выполняет балансировку нагрузки ECMP."
    ]
  },
  {
    "time": [
      1946.74,
      1951.08
    ],
    "en": [
      "over a maximum of 4 paths by default, like RIP."
    ],
    "ru": [
      "по умолчанию не более 4 путей, например RIP."
    ]
  },
  {
    "time": [
      1951.08,
      1957.549
    ],
    "en": [
      "Routing for networks 10.0.0.0 and 172.16.1.0/28."
    ],
    "ru": [
      "Маршрутизация для сетей 10.0.0.0 и 172.16.1.0/28."
    ]
  },
  {
    "time": [
      1957.549,
      1960.34
    ],
    "en": [
      "These are the two NETWORK commands we entered earlier."
    ],
    "ru": [
      "Это две команды СЕТИ, которые мы ввели ранее."
    ]
  },
  {
    "time": [
      1960.34,
      1968.32
    ],
    "en": [
      "G2/0 is configured as a passive interface, there are two neighbors, R2 and R3, and EIGRP"
    ],
    "ru": [
      "G2 / 0 настроен как пассивный интерфейс, есть два соседа, R2 и R3, и EIGRP"
    ]
  },
  {
    "time": [
      1968.32,
      1977.32
    ],
    "en": [
      "has two separate AD values, 90 for internal routes and 170 for external. Remember both numbers."
    ],
    "ru": [
      "имеет два отдельных значения AD: 90 для внутренних маршрутов и 170 для внешних. Запомните оба числа."
    ]
  },
  {
    "time": [
      1977.32,
      1983.09
    ],
    "en": [
      "Remember both numbers. Internal routes are normal EIGRP routes, but external routes are routes from outside EIGRP"
    ],
    "ru": [
      "Запомните оба числа. Внутренние маршруты - это обычные маршруты EIGRP, но внешние маршруты - это маршруты извне EIGRP."
    ]
  },
  {
    "time": [
      1983.09,
      1990.25
    ],
    "en": [
      "which are then inserted into EIGRP, but that’s a more advanced topic for the CCNP level."
    ],
    "ru": [
      "которые затем вставляются в EIGRP, но это более сложная тема для уровня CCNP."
    ]
  },
  {
    "time": [
      1990.25,
      1993.83
    ],
    "en": [
      "Finally I want to show you how EIGRP looks in the routing table."
    ],
    "ru": [
      "Наконец, я хочу показать вам, как EIGRP выглядит в таблице маршрутизации."
    ]
  },
  {
    "time": [
      1993.83,
      2002.42
    ],
    "en": [
      "First, notice that EIGRP routes are indicated with the letter D, not E. Also, check out the metric costs."
    ],
    "ru": [
      "Во-первых, обратите внимание, что маршруты EIGRP обозначаются буквой D, а не E. Также проверьте стоимость метрики."
    ]
  },
  {
    "time": [
      2002.42,
      2012.42
    ],
    "en": [
      "the metric costs. 3072, 3328, 28416, these costs are much higher than you see in OSPF and RIP, and this is"
    ],
    "ru": [
      "метрическая стоимость. 3072, 3328, 28416, эти затраты намного выше, чем вы видите в OSPF и RIP, и это"
    ]
  },
  {
    "time": [
      2012.42,
      2014.6
    ],
    "en": [
      "a very small network."
    ],
    "ru": [
      "очень маленькая сеть."
    ]
  },
  {
    "time": [
      2014.6,
      2017.44
    ],
    "en": [
      "In large networks, these numbers can get much larger."
    ],
    "ru": [
      "В больших сетях эти цифры могут быть намного больше."
    ]
  },
  {
    "time": [
      2017.44,
      2022.71
    ],
    "en": [
      "That’s perhaps a downside of EIGRP, the metrics are harder to understand."
    ],
    "ru": [
      "Возможно, это обратная сторона EIGRP, показатели труднее понять."
    ]
  },
  {
    "time": [
      2022.71,
      2028.0
    ],
    "en": [
      "Okay, that’s all we’ll cover about RIP and EIGRP in this video."
    ],
    "ru": [
      "Хорошо, это все, что мы расскажем о RIP и EIGRP в этом видео."
    ]
  },
  {
    "time": [
      2028.0,
      2033.179
    ],
    "en": [
      "Before moving on to today’s quiz, let’s review what we covered in this video."
    ],
    "ru": [
      "Прежде чем перейти к сегодняшней викторине, давайте рассмотрим то, что мы рассмотрели в этом видео."
    ]
  },
  {
    "time": [
      2033.179,
      2037.64
    ],
    "en": [
      "First, we covered the basics of RIP and its configuration."
    ],
    "ru": [
      "Сначала мы рассмотрели основы RIP и его настройки."
    ]
  },
  {
    "time": [
      2037.64,
      2039.66
    ],
    "en": [
      "Then we did the same for EIGRP."
    ],
    "ru": [
      "Затем мы сделали то же самое для EIGRP."
    ]
  },
  {
    "time": [
      2039.66,
      2044.429
    ],
    "en": [
      "Again, these aren’t listed on the exam topics list, but that doesn’t mean you don’t"
    ],
    "ru": [
      "Опять же, их нет в списке тем экзамена, но это не значит, что вы не"
    ]
  },
  {
    "time": [
      2044.429,
      2046.2
    ],
    "en": [
      "need to know anything about them."
    ],
    "ru": [
      "нужно что-нибудь о них знать."
    ]
  },
  {
    "time": [
      2046.2,
      2053.029
    ],
    "en": [
      "Also, the things you learned in this video will make learning OSPF in the next few videos much easier."
    ],
    "ru": [
      "Кроме того, то, что вы узнали из этого видео, значительно упростит изучение OSPF в следующих нескольких видео."
    ]
  },
  {
    "time": [
      2053.029,
      2058.139
    ],
    "en": [
      "much easier. There is one more thing about EIGRP I want to talk about, its unequal cost load balancing,"
    ],
    "ru": [
      "намного легче. Есть еще одна вещь об EIGRP, о которой я хочу поговорить, это неравномерная балансировка нагрузки по стоимости."
    ]
  },
  {
    "time": [
      2058.139,
      2060.389
    ],
    "en": [
      "but I will cover that in the lab video."
    ],
    "ru": [
      "но я расскажу об этом в лабораторном видео."
    ]
  },
  {
    "time": [
      2060.389,
      2063.979
    ],
    "en": [
      "So be sure to watch that video, it’s coming next."
    ],
    "ru": [
      "Так что обязательно посмотрите это видео, оно будет следующим."
    ]
  },
  {
    "time": [
      2063.979,
      2067.94
    ],
    "en": [
      "Also make sure to stick around until the end of today’s quiz for a bonus question from"
    ],
    "ru": [
      "Также не забудьте остаться до конца сегодняшней викторины, чтобы получить бонусный вопрос от"
    ]
  },
  {
    "time": [
      2067.94,
      2075.879
    ],
    "en": [
      "Boson ExSim, the best practice exams for the CCNA, CCNP, as well as other IT exams."
    ],
    "ru": [
      "Boson ExSim, лучшие практические экзамены для CCNA, CCNP, а также других ИТ-экзаменов."
    ]
  },
  {
    "time": [
      2075.879,
      2079.96
    ],
    "en": [
      "Follow the link in the description to get a copy of ExSim for yourself, in my opinion"
    ],
    "ru": [
      "Перейдите по ссылке в описании, чтобы получить себе копию ExSim, на мой взгляд"
    ]
  },
  {
    "time": [
      2079.96,
      2083.919
    ],
    "en": [
      "it’s the single best tool to make sure you’re ready for the real CCNA exam."
    ],
    "ru": [
      "это единственный лучший инструмент, чтобы убедиться, что вы готовы к настоящему экзамену CCNA."
    ]
  },
  {
    "time": [
      2083.919,
      2087.599
    ],
    "en": [
      "Okay, let’s move on to question 1 of the quiz."
    ],
    "ru": [
      "Хорошо, перейдем к вопросу 1 викторины."
    ]
  },
  {
    "time": [
      2087.599,
      2092.599
    ],
    "en": [
      "R1 and R2 both use RIP to share routes."
    ],
    "ru": [
      "R1 и R2 оба используют RIP для обмена маршрутами."
    ]
  },
  {
    "time": [
      2092.599,
      2098.2
    ],
    "en": [
      "R1 has a default route to the Internet that you want to advertise to R2."
    ],
    "ru": [
      "R1 имеет маршрут по умолчанию в Интернет, который вы хотите объявить R2."
    ]
  },
  {
    "time": [
      2098.2,
      2100.109
    ],
    "en": [
      "Which command should you use?"
    ],
    "ru": [
      "Какую команду использовать?"
    ]
  },
  {
    "time": [
      2100.109,
      2105.63
    ],
    "en": [
      "A, from config-router mode on R1, DEFAULT-INFORMATION ORIGINATE."
    ],
    "ru": [
      "A, из режима config-router на R1, ИНФОРМАЦИЯ ПО УМОЛЧАНИЮ ИСХОДИТ."
    ]
  },
  {
    "time": [
      2105.63,
      2112.84
    ],
    "en": [
      "B, from config-router mode on R1, NETWORK 203.0.113.0."
    ],
    "ru": [
      "B, из режима config-router на R1, СЕТЬ 203.0.113.0."
    ]
  },
  {
    "time": [
      2112.84,
      2122.329
    ],
    "en": [
      "C, from global config mode on R2, IP ROUTE 0.0.0.0 0.0.0.0 10.0.12.1."
    ],
    "ru": [
      "C, из режима глобальной конфигурации на R2, IP ROUTE 0.0.0.0 0.0.0.0 10.0.12.1."
    ]
  },
  {
    "time": [
      2122.329,
      2129.4
    ],
    "en": [
      "D, from config-router mode on R2, DEFAULT-INFORMATION ORIGINATE."
    ],
    "ru": [
      "D, из режима config-router на R2, ИСХОДНАЯ ИНФОРМАЦИЯ ПО УМОЛЧАНИЮ."
    ]
  },
  {
    "time": [
      2129.4,
      2135.869
    ],
    "en": [
      "Pause the video to think about the answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над ответом."
    ]
  },
  {
    "time": [
      2135.869,
      2140.66
    ],
    "en": [
      "The answer is A, default-information originate on R1."
    ],
    "ru": [
      "Ответ - A, информация по умолчанию исходит от R1."
    ]
  },
  {
    "time": [
      2140.66,
      2144.92
    ],
    "en": [
      "This command is used to advertise R1’s default route to its RIP neighbors."
    ],
    "ru": [
      "Эта команда используется для объявления маршрута R1 по умолчанию его соседям RIP."
    ]
  },
  {
    "time": [
      2144.92,
      2151.729
    ],
    "en": [
      "B, the NETWORK command, is used to activate RIP on an interface, not to advertise a default route."
    ],
    "ru": [
      "B, команда NETWORK, используется для активации RIP на интерфейсе, а не для объявления маршрута по умолчанию."
    ]
  },
  {
    "time": [
      2151.729,
      2157.789
    ],
    "en": [
      "route. C, the IP ROUTE command, configures a default route on R2, but it doesn’t cause R1 to"
    ],
    "ru": [
      "маршрут. C, команда IP ROUTE, настраивает маршрут по умолчанию на R2, но не заставляет R1"
    ]
  },
  {
    "time": [
      2157.789,
      2160.499
    ],
    "en": [
      "advertise a default route to R2."
    ],
    "ru": [
      "объявить маршрут по умолчанию к R2."
    ]
  },
  {
    "time": [
      2160.499,
      2166.14
    ],
    "en": [
      "Finally, D is incorrect because we want to advertise the default route from R1 to R2,"
    ],
    "ru": [
      "Наконец, D неверен, потому что мы хотим объявить маршрут по умолчанию от R1 до R2,"
    ]
  },
  {
    "time": [
      2166.14,
      2167.93
    ],
    "en": [
      "not from R2 to R1."
    ],
    "ru": [
      "не с R2 на R1."
    ]
  },
  {
    "time": [
      2167.93,
      2171.02
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
      2171.02,
      2180.609
    ],
    "en": [
      "R1’s G1/0 interface has an IP address of 172.20.20.17 and its G2/0 interface has an"
    ],
    "ru": [
      "Интерфейс G1 / 0 маршрутизатора R1 имеет IP-адрес 172.20.20.17, а его интерфейс G2 / 0 имеет"
    ]
  },
  {
    "time": [
      2180.609,
      2185.03
    ],
    "en": [
      "IP address of 172.26.20.12."
    ],
    "ru": [
      "IP-адрес 172.26.20.12."
    ]
  },
  {
    "time": [
      2185.03,
      2189.779
    ],
    "en": [
      "Which of the following network commands will activate EIGRP on both interfaces?"
    ],
    "ru": [
      "Какая из следующих сетевых команд активирует EIGRP на обоих интерфейсах?"
    ]
  },
  {
    "time": [
      2189.779,
      2193.089
    ],
    "en": [
      "I’ll put up the four network commands here."
    ],
    "ru": [
      "Я разместил здесь четыре сетевых команды."
    ]
  },
  {
    "time": [
      2193.089,
      2203.78
    ],
    "en": [
      "A, B, C, and D. Pause the video and find the correct answer."
    ],
    "ru": [
      "A, B, C и D. Поставьте видео на паузу и найдите правильный ответ."
    ]
  },
  {
    "time": [
      2203.78,
      2213.38
    ],
    "en": [
      "Okay, the answer is A, network 128.0.0.0 127.255.255.255."
    ],
    "ru": [
      "Хорошо, ответ - A, сеть 128.0.0.0 127.255.255.255."
    ]
  },
  {
    "time": [
      2213.38,
      2217.749
    ],
    "en": [
      "I won’t explain all of them, but let’s just take a look at the correct answer."
    ],
    "ru": [
      "Я не буду объяснять их все, но давайте посмотрим на правильный ответ."
    ]
  },
  {
    "time": [
      2217.749,
      2225.49
    ],
    "en": [
      "So, I have written the IP addresses of G1/0 and G2/0 in binary, as well as the EIGRP network"
    ],
    "ru": [
      "Итак, я записал IP-адреса G1 / 0 и G2 / 0 в двоичном формате, а также сеть EIGRP."
    ]
  },
  {
    "time": [
      2225.49,
      2233.289
    ],
    "en": [
      "command, which is NETWORK 128.0.0.0 127.255.255.255."
    ],
    "ru": [
      "команда NETWORK 128.0.0.0 127.255.255.255."
    ]
  },
  {
    "time": [
      2233.289,
      2239.44
    ],
    "en": [
      "Only the first bit of the wildcard mask is 0, so only the first bit has to match."
    ],
    "ru": [
      "Только первый бит маски подстановки равен 0, поэтому должен соответствовать только первый бит."
    ]
  },
  {
    "time": [
      2239.44,
      2244.18
    ],
    "en": [
      "As you can see, the first bit is 1 in the network command and each of the IP addresses,"
    ],
    "ru": [
      "Как видите, первый бит в сетевой команде равен 1, и каждый из IP-адресов,"
    ]
  },
  {
    "time": [
      2244.18,
      2247.66
    ],
    "en": [
      "so this command will activate EIGRP on both interfaces."
    ],
    "ru": [
      "поэтому эта команда активирует EIGRP на обоих интерфейсах."
    ]
  },
  {
    "time": [
      2247.66,
      2251.799
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
      2251.799,
      2256.559
    ],
    "en": [
      "What is the correct order of priority when determining the EIGRP router ID?"
    ],
    "ru": [
      "Каков правильный порядок приоритета при определении идентификатора маршрутизатора EIGRP?"
    ]
  },
  {
    "time": [
      2256.559,
      2263.599
    ],
    "en": [
      "A, highest loopback interface address, highest physical interface address, manual configuration."
    ],
    "ru": [
      "A, наивысший адрес интерфейса обратной связи, наивысший адрес физического интерфейса, ручная настройка."
    ]
  },
  {
    "time": [
      2263.599,
      2270.64
    ],
    "en": [
      "B, highest physical interface address, highest loopback address, manual configuration."
    ],
    "ru": [
      "B, наивысший адрес физического интерфейса, наивысший адрес обратной связи, ручная настройка."
    ]
  },
  {
    "time": [
      2270.64,
      2277.9
    ],
    "en": [
      "C, manual configuration, highest physical interface address, highest loopback address."
    ],
    "ru": [
      "C, ручная настройка, наивысший адрес физического интерфейса, наивысший адрес обратной связи."
    ]
  },
  {
    "time": [
      2277.9,
      2285.53
    ],
    "en": [
      "Or D, manual configuration, highest loopback interface address, highest physical interface address."
    ],
    "ru": [
      "Или D, ручная настройка, наивысший адрес интерфейса обратной петли, наивысший адрес физического интерфейса."
    ]
  },
  {
    "time": [
      2285.53,
      2291.349
    ],
    "en": [
      "address. Pause the video to think about your answer."
    ],
    "ru": [
      "адрес. Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      2291.349,
      2295.739
    ],
    "en": [
      "The answer is D, manual configuration takes top priority."
    ],
    "ru": [
      "Ответ - D, ручная настройка имеет высший приоритет."
    ]
  },
  {
    "time": [
      2295.739,
      2301.13
    ],
    "en": [
      "If the router ID isn’t manually configured, the highest IP address on a loopback interface"
    ],
    "ru": [
      "Если идентификатор маршрутизатора не настроен вручную, наивысший IP-адрес на интерфейсе обратной связи"
    ]
  },
  {
    "time": [
      2301.13,
      2303.74
    ],
    "en": [
      "will become the EIGRP router ID."
    ],
    "ru": [
      "станет идентификатором маршрутизатора EIGRP."
    ]
  },
  {
    "time": [
      2303.74,
      2309.21
    ],
    "en": [
      "Finally, if there are no loopback interfaces, the highest IP address on a physical interface"
    ],
    "ru": [
      "Наконец, если нет интерфейсов обратной связи, наивысший IP-адрес на физическом интерфейсе"
    ]
  },
  {
    "time": [
      2309.21,
      2311.41
    ],
    "en": [
      "will become the EIGRP router ID."
    ],
    "ru": [
      "станет идентификатором маршрутизатора EIGRP."
    ]
  },
  {
    "time": [
      2311.41,
      2317.779
    ],
    "en": [
      "Okay, let’s move on to take a look at a bonus question from Boson ExSim for CCNA."
    ],
    "ru": [
      "Хорошо, давайте перейдем к рассмотрению дополнительного вопроса от Boson ExSim для CCNA."
    ]
  },
  {
    "time": [
      2317.779,
      2324.769
    ],
    "en": [
      "Okay, for today's Boson ExSim practice question we have a question about route selection."
    ],
    "ru": [
      "Хорошо, что касается сегодняшнего практического вопроса Boson ExSim, у нас есть вопрос о выборе маршрута."
    ]
  },
  {
    "time": [
      2324.769,
      2327.239
    ],
    "en": [
      "So let's get right into it."
    ],
    "ru": [
      "Итак, приступим к делу."
    ]
  },
  {
    "time": [
      2327.239,
      2332.68
    ],
    "en": [
      "In which of the following situations does a router use AD values to determine route selection?"
    ],
    "ru": [
      "В какой из следующих ситуаций маршрутизатор использует значения AD для определения выбора маршрута?"
    ]
  },
  {
    "time": [
      2332.68,
      2333.94
    ],
    "en": [
      "selection? Select the best answer."
    ],
    "ru": [
      "выбор? Выберите лучший ответ."
    ]
  },
  {
    "time": [
      2333.94,
      2344.92
    ],
    "en": [
      "Okay, pause the video here to take a look at each of the options and try to select the correct answer."
    ],
    "ru": [
      "Хорошо, остановите видео здесь, чтобы просмотреть каждый из вариантов и попытаться выбрать правильный ответ."
    ]
  },
  {
    "time": [
      2344.92,
      2346.599
    ],
    "en": [
      "correct answer. Okay, hopefully you found it."
    ],
    "ru": [
      "правильный ответ. Хорошо, надеюсь, ты нашел это."
    ]
  },
  {
    "time": [
      2346.599,
      2348.979
    ],
    "en": [
      "So let's go through each of them one by one."
    ],
    "ru": [
      "Итак, давайте пройдемся по каждому из них по очереди."
    ]
  },
  {
    "time": [
      2348.979,
      2354.56
    ],
    "en": [
      "First up, A. When multiple routes to different destination networks are received, and each"
    ],
    "ru": [
      "Сначала A. Когда получено несколько маршрутов к разным сетям назначения, и каждый"
    ]
  },
  {
    "time": [
      2354.56,
      2357.549
    ],
    "en": [
      "of these routes is received from a different routing protocol."
    ],
    "ru": [
      "из этих маршрутов получено от другого протокола маршрутизации."
    ]
  },
  {
    "time": [
      2357.549,
      2361.249
    ],
    "en": [
      "So, I think A is incorrect. Why is that?"
    ],
    "ru": [
      "Итак, я думаю, что А неверен. Это почему?"
    ]
  },
  {
    "time": [
      2361.249,
      2365.609
    ],
    "en": [
      "Why is that? That's because each of the routes is to a different destination network."
    ],
    "ru": [
      "Это почему? Это потому, что каждый из маршрутов ведет к другой сети назначения."
    ]
  },
  {
    "time": [
      2365.609,
      2370.079
    ],
    "en": [
      "So the router doesn't have to choose between them, it will simply put in all of the routes"
    ],
    "ru": [
      "Таким образом, маршрутизатору не нужно выбирать между ними, он просто вставит все маршруты"
    ]
  },
  {
    "time": [
      2370.079,
      2373.66
    ],
    "en": [
      "in the routing table, because they are to different destinations."
    ],
    "ru": [
      "в таблице маршрутизации, потому что они относятся к разным адресатам."
    ]
  },
  {
    "time": [
      2373.66,
      2376.819
    ],
    "en": [
      "So I think A is incorrect. How about B?"
    ],
    "ru": [
      "Поэтому я считаю, что А неверен. Как насчет Б?"
    ]
  },
  {
    "time": [
      2376.819,
      2381.15
    ],
    "en": [
      "How about B? When multiple routes to the same destination network are received, and all of these routes"
    ],
    "ru": [
      "Как насчет Б? Когда получено несколько маршрутов к одной и той же сети назначения, и все эти маршруты"
    ]
  },
  {
    "time": [
      2381.15,
      2384.789
    ],
    "en": [
      "are received from the same routing protocol."
    ],
    "ru": [
      "получены из одного и того же протокола маршрутизации."
    ]
  },
  {
    "time": [
      2384.789,
      2387.059
    ],
    "en": [
      "So B is also incorrect."
    ],
    "ru": [
      "Так что B тоже неверен."
    ]
  },
  {
    "time": [
      2387.059,
      2391.28
    ],
    "en": [
      "So, all of the routes are to the same destination network, so the router is going to have to"
    ],
    "ru": [
      "Итак, все маршруты ведут к одной и той же сети назначения, поэтому маршрутизатору придется"
    ]
  },
  {
    "time": [
      2391.28,
      2394.88
    ],
    "en": [
      "choose which one to put in the routing table."
    ],
    "ru": [
      "выберите, какой из них поместить в таблицу маршрутизации."
    ]
  },
  {
    "time": [
      2394.88,
      2398.609
    ],
    "en": [
      "However all of the routes are from the same routing protocol, so the router won't use"
    ],
    "ru": [
      "Однако все маршруты относятся к одному и тому же протоколу маршрутизации, поэтому маршрутизатор не будет использовать"
    ]
  },
  {
    "time": [
      2398.609,
      2403.109
    ],
    "en": [
      "AD to determine which route, because they all have the same AD."
    ],
    "ru": [
      "AD, чтобы определить, какой маршрут, потому что все они имеют одинаковую AD."
    ]
  },
  {
    "time": [
      2403.109,
      2405.539
    ],
    "en": [
      "Instead it will use the metric value."
    ],
    "ru": [
      "Вместо этого будет использоваться значение показателя."
    ]
  },
  {
    "time": [
      2405.539,
      2408.74
    ],
    "en": [
      "Okay, how about C?"
    ],
    "ru": [
      "Хорошо, а как насчет C?"
    ]
  },
  {
    "time": [
      2408.74,
      2413.22
    ],
    "en": [
      "When multiple routes to different destination networks are received, and all of these routes"
    ],
    "ru": [
      "Когда получено несколько маршрутов к разным сетям назначения, и все эти маршруты"
    ]
  },
  {
    "time": [
      2413.22,
      2416.369
    ],
    "en": [
      "are received from the same routing protocol."
    ],
    "ru": [
      "получены из одного и того же протокола маршрутизации."
    ]
  },
  {
    "time": [
      2416.369,
      2420.96
    ],
    "en": [
      "So, different destination networks again, so C should be incorrect."
    ],
    "ru": [
      "Итак, снова разные сети назначения, поэтому C должно быть неверным."
    ]
  },
  {
    "time": [
      2420.96,
      2426.029
    ],
    "en": [
      "Because once again, just like in A, the router will put all of the routes in the routing"
    ],
    "ru": [
      "Потому что еще раз, как и в A, маршрутизатор поместит все маршруты в маршрутизацию."
    ]
  },
  {
    "time": [
      2426.029,
      2429.249
    ],
    "en": [
      "table because they are to different destinations."
    ],
    "ru": [
      "таблица, потому что они находятся в разных местах назначения."
    ]
  },
  {
    "time": [
      2429.249,
      2431.44
    ],
    "en": [
      "So let's see if D is correct."
    ],
    "ru": [
      "Итак, давайте посмотрим, правильно ли D."
    ]
  },
  {
    "time": [
      2431.44,
      2435.67
    ],
    "en": [
      "When multiple routes to the same destination network are received, so, same network so"
    ],
    "ru": [
      "Когда получено несколько маршрутов к одной и той же сети назначения, значит, одна и та же сеть, поэтому"
    ]
  },
  {
    "time": [
      2435.67,
      2439.96
    ],
    "en": [
      "the router will have to choose which one to put in the routing table."
    ],
    "ru": [
      "маршрутизатор должен будет выбрать, какой из них поместить в таблицу маршрутизации."
    ]
  },
  {
    "time": [
      2439.96,
      2443.579
    ],
    "en": [
      "And each of these routes is received from a different routing protocol."
    ],
    "ru": [
      "И каждый из этих маршрутов получен из разных протоколов маршрутизации."
    ]
  },
  {
    "time": [
      2443.579,
      2448.38
    ],
    "en": [
      "Okay, so different routing protocol, to the same destination network."
    ],
    "ru": [
      "Хорошо, разный протокол маршрутизации в одну и ту же сеть назначения."
    ]
  },
  {
    "time": [
      2448.38,
      2451.821
    ],
    "en": [
      "Because the routing protocol is different the router can't compare the metrics, because"
    ],
    "ru": [
      "Поскольку протокол маршрутизации отличается, маршрутизатор не может сравнивать метрики, потому что"
    ]
  },
  {
    "time": [
      2451.821,
      2454.789
    ],
    "en": [
      "each routing protocol uses a totally different metric."
    ],
    "ru": [
      "каждый протокол маршрутизации использует совершенно разные метрики."
    ]
  },
  {
    "time": [
      2454.789,
      2457.869
    ],
    "en": [
      "So, instead the router will compare the AD values."
    ],
    "ru": [
      "Таким образом, вместо этого маршрутизатор будет сравнивать значения AD."
    ]
  },
  {
    "time": [
      2457.869,
      2461.009
    ],
    "en": [
      "So I think D is the correct answer, let's see."
    ],
    "ru": [
      "Так что я думаю, что D - правильный ответ, давайте посмотрим."
    ]
  },
  {
    "time": [
      2461.009,
      2463.599
    ],
    "en": [
      "There we go, it is."
    ],
    "ru": [
      "Вот и все."
    ]
  },
  {
    "time": [
      2463.599,
      2468.619
    ],
    "en": [
      "And here is Boson's explanation, including a chart of the AD values of different routing"
    ],
    "ru": [
      "А вот объяснение Бозона, включая диаграмму значений AD для различных маршрутов."
    ]
  },
  {
    "time": [
      2468.619,
      2470.15
    ],
    "en": [
      "protocols and types of routes."
    ],
    "ru": [
      "протоколы и типы маршрутов."
    ]
  },
  {
    "time": [
      2470.15,
      2476.619
    ],
    "en": [
      "I covered these in day 24, directly connected, static, EIGRP summary route, I don't think"
    ],
    "ru": [
      "Я рассмотрел их на 24 день, напрямую подключенный, статический, сводный маршрут EIGRP, я не думаю"
    ]
  },
  {
    "time": [
      2476.619,
      2479.999
    ],
    "en": [
      "I mentioned that one. eBGP, and others."
    ],
    "ru": [
      "Я упомянул об этом. eBGP и другие."
    ]
  },
  {
    "time": [
      2479.999,
      2486.359
    ],
    "en": [
      "eBGP, and others. Okay, so if you want further reading on top of Boson's explanation you can check this"
    ],
    "ru": [
      "eBGP и другие. Хорошо, поэтому, если вы хотите продолжить чтение в дополнение к объяснению Бозона, вы можете проверить это"
    ]
  },
  {
    "time": [
      2486.359,
      2489.369
    ],
    "en": [
      "reference here, Cisco: Route Selection in Cisco Routers."
    ],
    "ru": [
      "см. здесь Cisco: выбор маршрута в маршрутизаторах Cisco."
    ]
  },
  {
    "time": [
      2489.369,
      2495.099
    ],
    "en": [
      "So this is a link to free Cisco documentation online which is another great study resource."
    ],
    "ru": [
      "Это ссылка на бесплатную онлайн-документацию Cisco, которая является еще одним отличным учебным ресурсом."
    ]
  },
  {
    "time": [
      2495.099,
      2498.839
    ],
    "en": [
      "Okay, so that's today's Boson ExSim practice question."
    ],
    "ru": [
      "Хорошо, это сегодняшний практический вопрос по Boson ExSim."
    ]
  },
  {
    "time": [
      2498.839,
      2502.39
    ],
    "en": [
      "I highly recommend picking up a copy of Boson ExSim."
    ],
    "ru": [
      "Очень рекомендую взять копию Boson ExSim."
    ]
  },
  {
    "time": [
      2502.39,
      2507.619
    ],
    "en": [
      "I used it myself to study for my CCNA and CCNP and it really helped me pass all of my"
    ],
    "ru": [
      "Я сам использовал его, чтобы подготовиться к экзаменам CCNA и CCNP, и он действительно помог мне сдать все мои"
    ]
  },
  {
    "time": [
      2507.619,
      2509.67
    ],
    "en": [
      "exams on the first try."
    ],
    "ru": [
      "экзамены с первого раза."
    ]
  },
  {
    "time": [
      2509.67,
      2517.359
    ],
    "en": [
      "So if you want to get a copy of Boson ExSim, please follow the link in the video description."
    ],
    "ru": [
      "Поэтому, если вы хотите получить копию Boson ExSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      2517.359,
      2519.819
    ],
    "en": [
      "There are supplementary materials for this video."
    ],
    "ru": [
      "К этому видео есть дополнительные материалы."
    ]
  },
  {
    "time": [
      2519.819,
      2523.13
    ],
    "en": [
      "There is a flashcard deck to use with the software ‘Anki’."
    ],
    "ru": [
      "Существует колода карточек для использования с программным обеспечением «Anki»."
    ]
  },
  {
    "time": [
      2523.13,
      2528.88
    ],
    "en": [
      "There will also be a packet tracer practice lab so you can get some hands-on practice."
    ],
    "ru": [
      "Там также будет практическая лаборатория по отслеживанию пакетов, где вы сможете получить практическую практику."
    ]
  },
  {
    "time": [
      2528.88,
      2531.18
    ],
    "en": [
      "That will be in the next video."
    ],
    "ru": [
      "Об этом будет в следующем видео."
    ]
  },
  {
    "time": [
      2531.18,
      2535.239
    ],
    "en": [
      "I especially recommend watching today’s lab video, since I will cover an aspect of"
    ],
    "ru": [
      "Я особенно рекомендую посмотреть сегодняшнее лабораторное видео, так как я расскажу об одном из аспектов"
    ]
  },
  {
    "time": [
      2535.239,
      2541.5
    ],
    "en": [
      "EIGRP I only briefly mentioned in this video, that is unequal-cost load-balancing."
    ],
    "ru": [
      "EIGRP Я лишь вкратце упомянул в этом видео, это балансировка нагрузки с неравной стоимостью."
    ]
  },
  {
    "time": [
      2541.5,
      2544.95
    ],
    "en": [
      "Sign up for my mailing list via the link in the description, and I’ll send you all of"
    ],
    "ru": [
      "Подпишитесь на мою рассылку по ссылке в описании, и я пришлю вам все"
    ]
  },
  {
    "time": [
      2544.95,
      2550.15
    ],
    "en": [
      "the flashcards and packet tracer lab files for the course."
    ],
    "ru": [
      "дидактические карточки и файлы лаборатории трассировщика пакетов для курса."
    ]
  },
  {
    "time": [
      2550.15,
      2554.849
    ],
    "en": [
      "Before finishing today’s video I want to thank my JCNP-level channel members."
    ],
    "ru": [
      "Прежде чем закончить сегодняшнее видео, я хочу поблагодарить участников моего канала уровня JCNP."
    ]
  },
  {
    "time": [
      2554.849,
      2561.38
    ],
    "en": [
      "Thank you to Ed, Tillman, Value, Magrathea, Justin, John, Funnydart, Scott, Hassan, Gerrard,"
    ],
    "ru": [
      "Спасибо Эду, Тиллману, Валу, Магратее, Джастину, Джону, Фаннидарту, Скотту, Хасану, Джеррарду,"
    ]
  },
  {
    "time": [
      2561.38,
      2568.239
    ],
    "en": [
      "Tibi, Vikram, Joyce, Marek, Velvijaykum, C Mohd, Johan, Mark, Miguel, Yousif, Kone, Boson"
    ],
    "ru": [
      "Тиби, Викрам, Джойс, Марек, Велвиджайкум, Ч. Мохд, Йохан, Марк, Мигель, Юсиф, Коне, Бозон"
    ]
  },
  {
    "time": [
      2568.239,
      2575.089
    ],
    "en": [
      "Software, the makers of ExSim, Sidi, Devin, Charlsetta, Lito, Yonatan, Mike, Aleksander, and Vance."
    ],
    "ru": [
      "Software, создатели ExSim, Sidi, Devin, Charlsetta, Lito, Yonatan, Mike, Aleksander и Vance."
    ]
  },
  {
    "time": [
      2575.089,
      2580.2
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
      2580.2,
      2584.17
    ],
    "en": [
      "One of you is still displaying as Channel failed to load, if this is you please let"
    ],
    "ru": [
      "Один из вас по-прежнему отображается как «Не удалось загрузить канал». Если это так, пожалуйста, позвольте"
    ]
  },
  {
    "time": [
      2584.17,
      2587.18
    ],
    "en": [
      "me know and I’ll see if YouTube can fix it."
    ],
    "ru": [
      "я знаю, и я посмотрю, сможет ли YouTube это исправить."
    ]
  },
  {
    "time": [
      2587.18,
      2592.71
    ],
    "en": [
      "This is the list of JCNP-level members at the time of recording by the way, July 7th"
    ],
    "ru": [
      "Это список участников уровня JCNP на момент записи, кстати, 7 июля."
    ]
  },
  {
    "time": [
      2592.71,
      2600.24
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
      2592.71,
      2600.24
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
      2600.24,
      2601.819
    ],
    "en": [
      "in future videos. Thank you for watching."
    ],
    "ru": [
      "в будущих видео. Спасибо за просмотр."
    ]
  },
  {
    "time": [
      2601.819,
      2605.72
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
      2605.72,
      2609.069
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
      2609.069,
      2611.71
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
      2611.71,
      2619.22
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
      2619.22,
      2619.22
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]