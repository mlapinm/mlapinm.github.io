let objs = [
  {
    "time": [
      0.74,
      3.04
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
      3.04,
      6.71
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
      6.71,
      10.139
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
      10.139,
      15.57
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
      15.57,
      17.64
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
      17.64,
      23.289
    ],
    "en": [
      "In this video we’re going to begin a series of videos about OSPF, Open Shortest Path First."
    ],
    "ru": [
      "В этом видео мы собираемся начать серию видеороликов об OSPF, Open Shortest Path First."
    ]
  },
  {
    "time": [
      23.289,
      27.73
    ],
    "en": [
      "It’s the only dynamic routing protocol that is explicitly listed in the exam topics for"
    ],
    "ru": [
      "Это единственный протокол динамической маршрутизации, который явно указан в темах экзамена для"
    ]
  },
  {
    "time": [
      27.73,
      33.23
    ],
    "en": [
      "the CCNA, so we’re going to go quite in depth about how OSPF works compared to the"
    ],
    "ru": [
      "CCNA, поэтому мы собираемся подробно рассказать о том, как работает OSPF по сравнению с"
    ]
  },
  {
    "time": [
      33.23,
      37.73
    ],
    "en": [
      "brief overview given for RIP and EIGRP."
    ],
    "ru": [
      "краткий обзор для RIP и EIGRP."
    ]
  },
  {
    "time": [
      37.73,
      43.12
    ],
    "en": [
      "OSPF is topic 3.4 of the CCNA exam, which states you should be able to ‘Configure"
    ],
    "ru": [
      "OSPF - это тема 3.4 экзамена CCNA, в которой говорится, что вы должны уметь «Настроить"
    ]
  },
  {
    "time": [
      43.12,
      49.71
    ],
    "en": [
      "and verify single area OSPFv2’, with the four sub-topics being neighbor adjacencies,"
    ],
    "ru": [
      "и проверьте одну область OSPFv2 ’с четырьмя подтемами, являющимися соседними соседями,"
    ]
  },
  {
    "time": [
      49.71,
      52.67
    ],
    "en": [
      "point-to-point, broadcast, and router ID."
    ],
    "ru": [
      "точка-точка, широковещательная передача и идентификатор маршрутизатора."
    ]
  },
  {
    "time": [
      52.67,
      55.64
    ],
    "en": [
      "We’ll cover all of these topics and more."
    ],
    "ru": [
      "Мы рассмотрим все эти и многие другие темы."
    ]
  },
  {
    "time": [
      55.64,
      60.57
    ],
    "en": [
      "This first video, however, will focus on some basics of OSPF."
    ],
    "ru": [
      "Однако это первое видео будет посвящено некоторым основам OSPF."
    ]
  },
  {
    "time": [
      60.57,
      65.28
    ],
    "en": [
      "Consider this a high-level introduction to some OSPF concepts and configuration, and"
    ],
    "ru": [
      "Считайте это введением высокого уровня в некоторые концепции и конфигурацию OSPF, и"
    ]
  },
  {
    "time": [
      65.28,
      70.469
    ],
    "en": [
      "then in later lectures we will go lower down into the details of how OSPF works."
    ],
    "ru": [
      "затем в последующих лекциях мы более подробно остановимся на том, как работает OSPF."
    ]
  },
  {
    "time": [
      70.469,
      74.96000000000001
    ],
    "en": [
      "So, let’s see what we’ll cover in this video."
    ],
    "ru": [
      "Итак, давайте посмотрим, что мы расскажем в этом видео."
    ]
  },
  {
    "time": [
      74.96000000000001,
      78.7
    ],
    "en": [
      "First I’ll introduce some of the basic operations of OSPF."
    ],
    "ru": [
      "Сначала я расскажу о некоторых основных операциях OSPF."
    ]
  },
  {
    "time": [
      78.7,
      84.009
    ],
    "en": [
      "This will be just a quick introduction, in the next video we’ll really go in depth."
    ],
    "ru": [
      "Это будет всего лишь краткое введение, а в следующем видео мы подробно рассмотрим его."
    ]
  },
  {
    "time": [
      84.009,
      88.64
    ],
    "en": [
      "Then I’ll talk about OSPF areas, which is a unique feature of OSPF that splits larger"
    ],
    "ru": [
      "Затем я расскажу об областях OSPF, уникальной особенности OSPF, которая позволяет разбивать более крупные"
    ]
  },
  {
    "time": [
      88.64,
      92.009
    ],
    "en": [
      "networks into smaller sections."
    ],
    "ru": [
      "сети на более мелкие участки."
    ]
  },
  {
    "time": [
      92.009,
      98.81
    ],
    "en": [
      "Finally I’ll show you some basic OSPF configurations, like I showed you before for RIP and EIGRP."
    ],
    "ru": [
      "Наконец, я покажу вам некоторые базовые конфигурации OSPF, как я уже показал вам ранее для RIP и EIGRP."
    ]
  },
  {
    "time": [
      98.81,
      104.719
    ],
    "en": [
      "Watch until the end of the video’s quiz for a bonus question from Boson ExSim for CCNA."
    ],
    "ru": [
      "Просмотрите до конца видео викторину, чтобы узнать о бонусном вопросе от Boson ExSim для CCNA."
    ]
  },
  {
    "time": [
      104.719,
      107.929
    ],
    "en": [
      "CCNA. ExSim is a set of practice exams for the CCNA."
    ],
    "ru": [
      "CCNA. ExSim - это набор практических экзаменов для CCNA."
    ]
  },
  {
    "time": [
      107.929,
      113.92099999999999
    ],
    "en": [
      "I used them myself when studying for my CCNA, and also I used ExSim for CCNP too, and I"
    ],
    "ru": [
      "Я использовал их сам, когда учился на CCNA, а также использовал ExSim для CCNP, и я"
    ]
  },
  {
    "time": [
      113.92099999999999,
      117.03
    ],
    "en": [
      "really think ExSim is an essential study tool."
    ],
    "ru": [
      "действительно думаю, что ExSim - важный инструмент обучения."
    ]
  },
  {
    "time": [
      117.03,
      120.1
    ],
    "en": [
      "If you want to get ExSim, follow the link in the video description."
    ],
    "ru": [
      "Если вы хотите получить ExSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      120.1,
      124.829
    ],
    "en": [
      "Okay, let’s get started with OSPF."
    ],
    "ru": [
      "Хорошо, давайте начнем с OSPF."
    ]
  },
  {
    "time": [
      124.829,
      129.95
    ],
    "en": [
      "First up, here’s the same chart of the different kinds of routing protocols I showed you before."
    ],
    "ru": [
      "Во-первых, вот та же таблица различных типов протоколов маршрутизации, которую я вам показывал ранее."
    ]
  },
  {
    "time": [
      129.95,
      133.32
    ],
    "en": [
      "Remember that OSPF is a Link State dynamic routing protocol."
    ],
    "ru": [
      "Помните, что OSPF - это протокол динамической маршрутизации Link State."
    ]
  },
  {
    "time": [
      133.32,
      137.65
    ],
    "en": [
      "You’ll see in this video that it functions quite differently than the distance vector"
    ],
    "ru": [
      "В этом видео вы увидите, что он работает совсем не так, как вектор расстояния."
    ]
  },
  {
    "time": [
      137.65,
      141.28
    ],
    "en": [
      "routing protocols RIP and EIGRP."
    ],
    "ru": [
      "протоколы маршрутизации RIP и EIGRP."
    ]
  },
  {
    "time": [
      141.28,
      146.59
    ],
    "en": [
      "To review, distance vector protocols use ‘routing by rumor’ in which each router shares information"
    ],
    "ru": [
      "Для обзора: протоколы вектора расстояния используют «маршрутизацию по слухам», в которой каждый маршрутизатор обменивается информацией."
    ]
  },
  {
    "time": [
      146.59,
      150.94
    ],
    "en": [
      "about the routes they know and their metric cost to reach each destination."
    ],
    "ru": [
      "о маршрутах, которые они знают, и их метрической стоимости для достижения каждого пункта назначения."
    ]
  },
  {
    "time": [
      150.94,
      156.19
    ],
    "en": [
      "However, the routers don’t have a complete map of the network, they just use the information"
    ],
    "ru": [
      "Однако у маршрутизаторов нет полной карты сети, они просто используют информацию"
    ]
  },
  {
    "time": [
      156.19,
      161.25
    ],
    "en": [
      "their neighboring routers tell them to determine the best route to each destination."
    ],
    "ru": [
      "их соседние маршрутизаторы говорят им определить лучший маршрут к каждому пункту назначения."
    ]
  },
  {
    "time": [
      161.25,
      164.47
    ],
    "en": [
      "Now let’s review how link state protocols function."
    ],
    "ru": [
      "Теперь давайте рассмотрим, как работают протоколы состояния каналов."
    ]
  },
  {
    "time": [
      164.47,
      169.07999999999998
    ],
    "en": [
      "Here’s another slide I showed you in Day 24’s video."
    ],
    "ru": [
      "Вот еще один слайд, который я показал вам в видео 24-го дня."
    ]
  },
  {
    "time": [
      169.07999999999998,
      174.94
    ],
    "en": [
      "When using a link state routing protocol, every router creates a ‘connectivity map’ of the network."
    ],
    "ru": [
      "При использовании протокола маршрутизации состояния канала каждый маршрутизатор создает «карту связности» сети."
    ]
  },
  {
    "time": [
      174.94,
      182.43
    ],
    "en": [
      "of the network. To allow this, each router advertises information about its interfaces (its connected networks) to its neighbors."
    ],
    "ru": [
      "сети. Для этого каждый маршрутизатор объявляет информацию о своих интерфейсах (подключенных сетях) своим соседям."
    ]
  },
  {
    "time": [
      182.43,
      186.54
    ],
    "en": [
      "to its neighbors. These advertisements are passed along to other routers, until all routers in the network"
    ],
    "ru": [
      "своим соседям. Эти объявления передаются другим маршрутизаторам, пока все маршрутизаторы в сети"
    ]
  },
  {
    "time": [
      186.54,
      189.32
    ],
    "en": [
      "develop the same map of the network."
    ],
    "ru": [
      "разработать такую ​​же карту сети."
    ]
  },
  {
    "time": [
      189.32,
      193.83
    ],
    "en": [
      "This is important, all routers have the same complete map of the network."
    ],
    "ru": [
      "Это важно, все маршрутизаторы имеют одинаковую полную карту сети."
    ]
  },
  {
    "time": [
      193.83,
      200.17000000000002
    ],
    "en": [
      "Then, each router independently uses this map to calculate the best routes to each destination."
    ],
    "ru": [
      "Затем каждый маршрутизатор независимо использует эту карту для расчета наилучших маршрутов к каждому пункту назначения."
    ]
  },
  {
    "time": [
      200.17000000000002,
      204.29
    ],
    "en": [
      "Due to this process, Link state protocols use more resources on the router, because"
    ],
    "ru": [
      "Благодаря этому процессу протоколы состояния канала используют больше ресурсов на маршрутизаторе, потому что"
    ]
  },
  {
    "time": [
      204.29,
      206.06
    ],
    "en": [
      "more information is shared."
    ],
    "ru": [
      "больше информации делится."
    ]
  },
  {
    "time": [
      206.06,
      208.5
    ],
    "en": [
      "It’s more demanding on the router."
    ],
    "ru": [
      "Это более требовательно к маршрутизатору."
    ]
  },
  {
    "time": [
      208.5,
      215.15
    ],
    "en": [
      "However, link state protocols tend to be faster in reacting to changes in the network than distance vector protocols."
    ],
    "ru": [
      "Однако протоколы состояния канала обычно быстрее реагируют на изменения в сети, чем протоколы вектора расстояния."
    ]
  },
  {
    "time": [
      215.15,
      218.32
    ],
    "en": [
      "distance vector protocols. So that’s a quick review of link state routing protocols."
    ],
    "ru": [
      "протоколы вектора расстояния. Итак, это краткий обзор протоколов маршрутизации состояния канала."
    ]
  },
  {
    "time": [
      218.32,
      222.52
    ],
    "en": [
      "Now we’ll start to go in depth about how OSPF functions and you’ll get a deeper understanding"
    ],
    "ru": [
      "Теперь мы начнем подробно разбираться в принципах работы OSPF, и вы получите более глубокое понимание."
    ]
  },
  {
    "time": [
      222.52,
      228.69
    ],
    "en": [
      "of what all this means, and see how different it is to RIP and EIGRP, but also you’ll see the similarities."
    ],
    "ru": [
      "того, что все это означает, и посмотрите, насколько он отличается от RIP и EIGRP, но вы также увидите сходство."
    ]
  },
  {
    "time": [
      228.69,
      233.37
    ],
    "en": [
      "see the similarities. So, let’s get started with OSPF."
    ],
    "ru": [
      "увидеть сходство. Итак, приступим к OSPF."
    ]
  },
  {
    "time": [
      233.37,
      236.68
    ],
    "en": [
      "OSPF stands for ‘Open Shortest Path First’."
    ],
    "ru": [
      "OSPF означает «сначала откройте кратчайший путь»."
    ]
  },
  {
    "time": [
      236.68,
      244.49
    ],
    "en": [
      "The OSPF protocol uses the ‘shortest path first’ algorithm, created by Dutch computer scientist Edsger Dijkstra."
    ],
    "ru": [
      "Протокол OSPF использует алгоритм «сначала кратчайший путь», созданный голландским ученым-компьютерщиком Эдсгером Дейкстра."
    ]
  },
  {
    "time": [
      244.49,
      248.33
    ],
    "en": [
      "scientist Edsger Dijkstra. Another name for the algorithm is ‘Dijsktra’s algorithm’, remember that name!"
    ],
    "ru": [
      "ученый Эдсгер Дейкстра. Другое название алгоритма - «алгоритм Дийсктры», запомните это имя!"
    ]
  },
  {
    "time": [
      248.33,
      251.02
    ],
    "en": [
      "It could be an exam question."
    ],
    "ru": [
      "Это может быть экзаменационный вопрос."
    ]
  },
  {
    "time": [
      251.02,
      253.68
    ],
    "en": [
      "There are three versions of OSPF."
    ],
    "ru": [
      "Существует три версии OSPF."
    ]
  },
  {
    "time": [
      253.68,
      255.71
    ],
    "en": [
      "Version 1 was released in 1989."
    ],
    "ru": [
      "Версия 1 была выпущена в 1989 году."
    ]
  },
  {
    "time": [
      255.71,
      259.43
    ],
    "en": [
      "It’s old and not in use anymore."
    ],
    "ru": [
      "Он старый и больше не используется."
    ]
  },
  {
    "time": [
      259.43,
      266.21
    ],
    "en": [
      "Version 2 was released in 1998, and this is typically the version that is used in IP version 4 networks."
    ],
    "ru": [
      "Версия 2 была выпущена в 1998 году и обычно используется в сетях IP версии 4."
    ]
  },
  {
    "time": [
      266.21,
      268.37
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
      266.21,
      268.37
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
      268.37,
      273.55
    ],
    "en": [
      "The version of OSPF in the exam topics list is version 2, so when I talk about OSPF in"
    ],
    "ru": [
      "Версия OSPF в списке тем экзамена - это версия 2, поэтому, когда я говорю об OSPF в"
    ]
  },
  {
    "time": [
      273.55,
      277.3
    ],
    "en": [
      "these videos I will be talking about version 2."
    ],
    "ru": [
      "в этих видео я буду говорить о версии 2."
    ]
  },
  {
    "time": [
      277.3,
      282.08
    ],
    "en": [
      "There is also OSPF version 3, which was developed for IPv6."
    ],
    "ru": [
      "Существует также OSPF версии 3, которая была разработана для IPv6."
    ]
  },
  {
    "time": [
      282.08,
      286.789
    ],
    "en": [
      "It can also be used for IPv4, but version 2 is more common in IPv4 networks."
    ],
    "ru": [
      "Его также можно использовать для IPv4, но версия 2 более распространена в сетях IPv4."
    ]
  },
  {
    "time": [
      286.789,
      291.8
    ],
    "en": [
      "Okay, now a couple general points about OSPF."
    ],
    "ru": [
      "Хорошо, теперь пара общих моментов об OSPF."
    ]
  },
  {
    "time": [
      291.8,
      296.471
    ],
    "en": [
      "Routers store information about the network in LSAs (Link State Advertisements), which"
    ],
    "ru": [
      "Маршрутизаторы хранят информацию о сети в LSA (объявлениях о состоянии канала), которые"
    ]
  },
  {
    "time": [
      296.471,
      301.009
    ],
    "en": [
      "are organized in a structure called the LSDB (Link State Database)."
    ],
    "ru": [
      "организованы в структуру, называемую LSDB (База данных состояний каналов)."
    ]
  },
  {
    "time": [
      301.009,
      305.54
    ],
    "en": [
      "LSA and LSDB are two important terms for OSPF."
    ],
    "ru": [
      "LSA и LSDB - два важных термина для OSPF."
    ]
  },
  {
    "time": [
      305.54,
      310.33
    ],
    "en": [
      "I’ll talk more about them throughout these videos on OSPF."
    ],
    "ru": [
      "Я расскажу о них больше в этих видео на OSPF."
    ]
  },
  {
    "time": [
      310.33,
      315.389
    ],
    "en": [
      "Routers will flood LSAs until all routers in the OSPF area develop the same map of the"
    ],
    "ru": [
      "Маршрутизаторы будут лавинно рассылать LSA до тех пор, пока все маршрутизаторы в зоне OSPF не разработают одну и ту же карту"
    ]
  },
  {
    "time": [
      315.389,
      317.46
    ],
    "en": [
      "network, meaning the same LSDB."
    ],
    "ru": [
      "сеть, то есть тот же LSDB."
    ]
  },
  {
    "time": [
      317.46,
      322.15
    ],
    "en": [
      "So, those are two more important terms, ‘flood’ and ‘area’."
    ],
    "ru": [
      "Итак, это еще два важных термина: «наводнение» и «площадь»."
    ]
  },
  {
    "time": [
      322.15,
      328.21
    ],
    "en": [
      "You already know the term flood, switches do it when they receive a broadcast or unknown unicast frame."
    ],
    "ru": [
      "Вы уже знаете термин «лавинная рассылка», коммутаторы делают это, когда получают широковещательный или неизвестный одноадресный кадр."
    ]
  },
  {
    "time": [
      328.21,
      333.779
    ],
    "en": [
      "unicast frame. In the case of OSPF, it means they send the LSAs to all of their OSPF neighbors."
    ],
    "ru": [
      "одноадресный кадр. В случае OSPF это означает, что они отправляют LSA всем своим соседям OSPF."
    ]
  },
  {
    "time": [
      333.779,
      340.999
    ],
    "en": [
      "OSPF ‘areas’ are a unique aspect of OSPF, and I’ll talk more about them later in this video."
    ],
    "ru": [
      "«Области» OSPF - это уникальный аспект OSPF, и я подробнее расскажу о них позже в этом видео."
    ]
  },
  {
    "time": [
      340.999,
      346.581
    ],
    "en": [
      "video. Let me briefly elaborate on the last two points in the previous slide, about LSAs and the LSDB."
    ],
    "ru": [
      "видео. Позвольте мне кратко остановиться на последних двух пунктах предыдущего слайда, касающихся LSA и LSDB."
    ]
  },
  {
    "time": [
      346.581,
      351.569
    ],
    "en": [
      "LSDB. So, let’s say this network of four routers is running OSPF."
    ],
    "ru": [
      "LSDB. Итак, предположим, что эта сеть из четырех маршрутизаторов работает под управлением OSPF."
    ]
  },
  {
    "time": [
      351.569,
      357.249
    ],
    "en": [
      "All of these routers are OSPF neighbors, they have the same link state database and the network is stable."
    ],
    "ru": [
      "Все эти маршрутизаторы являются соседями OSPF, у них одна и та же база данных состояний каналов, и сеть стабильна."
    ]
  },
  {
    "time": [
      357.249,
      361.68
    ],
    "en": [
      "network is stable. Then, OSPF is enabled on R4’s G1/0 interface."
    ],
    "ru": [
      "сеть стабильная. Затем OSPF включается на интерфейсе G1 / 0 маршрутизатора R4."
    ]
  },
  {
    "time": [
      361.68,
      366.4
    ],
    "en": [
      "So, R4 needs to tell the other routers about this new network segment."
    ],
    "ru": [
      "Таким образом, R4 должен сообщить другим маршрутизаторам об этом новом сегменте сети."
    ]
  },
  {
    "time": [
      366.4,
      372.229
    ],
    "en": [
      "So, R4 creates an LSA to tell its neighbors about the network on G1/0."
    ],
    "ru": [
      "Итак, R4 создает LSA, чтобы сообщить своим соседям о сети на G1 / 0."
    ]
  },
  {
    "time": [
      372.229,
      378.039
    ],
    "en": [
      "An OSPF LSA contains more information than this, and we’ll look deeper later, but some"
    ],
    "ru": [
      "LSA OSPF содержит больше информации, чем эта, и мы рассмотрим ее позже, но некоторые"
    ]
  },
  {
    "time": [
      378.039,
      383.199
    ],
    "en": [
      "of the basic information in an LSA is the RID, the router ID."
    ],
    "ru": [
      "Основной информацией в LSA является RID, идентификатор маршрутизатора."
    ]
  },
  {
    "time": [
      383.199,
      388.689
    ],
    "en": [
      "For this demonstration, R4’s router ID is 4.4.4.4."
    ],
    "ru": [
      "Для этой демонстрации идентификатор маршрутизатора R4 - 4.4.4.4."
    ]
  },
  {
    "time": [
      388.689,
      394.72
    ],
    "en": [
      "None of its physical interfaces have an IP address of 4.4.4.4, so either R4 has a loopback"
    ],
    "ru": [
      "Ни один из его физических интерфейсов не имеет IP-адреса 4.4.4.4, поэтому любой R4 имеет обратную связь."
    ]
  },
  {
    "time": [
      394.72,
      401.919
    ],
    "en": [
      "interface with the IP address 4.4.4.4 or the router ID was manually configured."
    ],
    "ru": [
      "интерфейс с IP-адресом 4.4.4.4 или ID маршрутизатора был настроен вручную."
    ]
  },
  {
    "time": [
      401.919,
      407.27
    ],
    "en": [
      "The network on the G1/0 interface is, of course, included in the LSA, since that’s the main"
    ],
    "ru": [
      "Сеть на интерфейсе G1 / 0, конечно, включена в LSA, поскольку это основной"
    ]
  },
  {
    "time": [
      407.27,
      409.169
    ],
    "en": [
      "purpose of the LSA."
    ],
    "ru": [
      "цель LSA."
    ]
  },
  {
    "time": [
      409.169,
      412.05
    ],
    "en": [
      "R4’s cost is also included."
    ],
    "ru": [
      "Стоимость R4 также включена."
    ]
  },
  {
    "time": [
      412.05,
      417.689
    ],
    "en": [
      "I’ll talk more about OSPF’s metric, called cost, in the next lecture, but this GigabitEthernet"
    ],
    "ru": [
      "В следующей лекции я подробнее расскажу о метрике OSPF, называемой стоимостью, но этот GigabitEthernet"
    ]
  },
  {
    "time": [
      417.689,
      421.199
    ],
    "en": [
      "interface has a cost of 1."
    ],
    "ru": [
      "интерфейс имеет стоимость 1."
    ]
  },
  {
    "time": [
      421.199,
      426.06
    ],
    "en": [
      "The LSA is then flooded throughout the network until all routers receive a copy."
    ],
    "ru": [
      "Затем LSA рассылается по сети, пока все маршрутизаторы не получат копию."
    ]
  },
  {
    "time": [
      426.06,
      428.379
    ],
    "en": [
      "That looks like this."
    ],
    "ru": [
      "Это выглядит так."
    ]
  },
  {
    "time": [
      428.379,
      431.93
    ],
    "en": [
      "This results in all routers in the OSPF area having the same LSDB."
    ],
    "ru": [
      "Это приводит к тому, что все маршрутизаторы в области OSPF имеют один и тот же LSDB."
    ]
  },
  {
    "time": [
      431.93,
      439.559
    ],
    "en": [
      "The LSDB is like this, containing LSAs for all of the different links in the network."
    ],
    "ru": [
      "LSDB похож на этот, он содержит LSA для всех различных каналов в сети."
    ]
  },
  {
    "time": [
      439.559,
      446.099
    ],
    "en": [
      "Now that OSPF has been activated on R4’s G1/0 interface, that new LSA is added to the LSDB."
    ],
    "ru": [
      "Теперь, когда OSPF активирован на интерфейсе G1 / 0 маршрутизатора R4, новый LSA добавляется в LSDB."
    ]
  },
  {
    "time": [
      446.099,
      451.279
    ],
    "en": [
      "LSDB. I’m going to repeat this many times I’m sure, but remember that this LSDB is identical"
    ],
    "ru": [
      "LSDB. Я буду повторять это много раз, я уверен, но помните, что этот LSDB идентичен"
    ]
  },
  {
    "time": [
      451.279,
      454.96
    ],
    "en": [
      "for all routers in the OSPF area."
    ],
    "ru": [
      "для всех маршрутизаторов в зоне OSPF."
    ]
  },
  {
    "time": [
      454.96,
      463.339
    ],
    "en": [
      "Each router then uses the SPF algorithm, Dijkstra’s algorithm, to calculate its best route to 192.168.4.0/24."
    ],
    "ru": [
      "Затем каждый маршрутизатор использует алгоритм SPF, алгоритм Дейкстры, для расчета наилучшего маршрута к 192.168.4.0/24."
    ]
  },
  {
    "time": [
      463.339,
      467.62
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
      463.339,
      467.62
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
      467.62,
      473.44
    ],
    "en": [
      "So, for example, you and I looking at this diagram can see that R2’s best route to"
    ],
    "ru": [
      "Так, например, мы с вами, глядя на эту диаграмму, видим, что лучший маршрут R2 к"
    ]
  },
  {
    "time": [
      473.44,
      478.27
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
      473.44,
      478.27
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
      478.27,
      483.379
    ],
    "en": [
      "Well, R2 is basically looking at the same diagram, so it can calculate that sending"
    ],
    "ru": [
      "Что ж, R2 в основном смотрит на ту же диаграмму, поэтому он может вычислить, что отправка"
    ]
  },
  {
    "time": [
      483.379,
      486.039
    ],
    "en": [
      "traffic via G1/0 is the best route."
    ],
    "ru": [
      "трафик через G1 / 0 - лучший маршрут."
    ]
  },
  {
    "time": [
      486.039,
      492.05
    ],
    "en": [
      "It’s not looking at a visual diagram like we are, of course, but in effect its the same thing."
    ],
    "ru": [
      "Конечно, это не визуальная диаграмма, как мы, но, по сути, то же самое."
    ]
  },
  {
    "time": [
      492.05,
      497.949
    ],
    "en": [
      "thing. Finally, note that each individual LSA has an aging timer, which is 30 minutes by default."
    ],
    "ru": [
      "вещь. Наконец, обратите внимание, что каждый отдельный LSA имеет таймер устаревания, который по умолчанию составляет 30 минут."
    ]
  },
  {
    "time": [
      497.949,
      505.169
    ],
    "en": [
      "The LSA will be flooded again after the timer expires, so once every 30 minutes by default."
    ],
    "ru": [
      "LSA будет снова заполнено лавинной рассылкой по истечении таймера, поэтому по умолчанию каждые 30 минут."
    ]
  },
  {
    "time": [
      505.169,
      506.509
    ],
    "en": [
      "Let me summarize the process."
    ],
    "ru": [
      "Позвольте мне резюмировать процесс."
    ]
  },
  {
    "time": [
      506.509,
      511.71
    ],
    "en": [
      "In OSPF, there are three main steps in the process of sharing LSAs and determining the"
    ],
    "ru": [
      "В OSPF есть три основных этапа в процессе совместного использования LSA и определения"
    ]
  },
  {
    "time": [
      511.71,
      515.5
    ],
    "en": [
      "best route to each destination in the network."
    ],
    "ru": [
      "лучший маршрут к каждому пункту назначения в сети."
    ]
  },
  {
    "time": [
      515.5,
      520.0
    ],
    "en": [
      "Step 1 is to become neighbors with other routers connected to the same segment."
    ],
    "ru": [
      "Шаг 1 - стать соседями с другими маршрутизаторами, подключенными к тому же сегменту."
    ]
  },
  {
    "time": [
      520.0,
      527.35
    ],
    "en": [
      "In the network in the previous slide, for example, R4 was OSPF neighbors with R2 and R3."
    ],
    "ru": [
      "Например, в сети на предыдущем слайде R4 был соседом OSPF с R2 и R3."
    ]
  },
  {
    "time": [
      527.35,
      532.2090000000001
    ],
    "en": [
      "R3. Step 2 is to exchange LSAs with neighbor routers, which you saw in the last slide."
    ],
    "ru": [
      "R3. Шаг 2 - обмен LSA с соседними маршрутизаторами, который вы видели на последнем слайде."
    ]
  },
  {
    "time": [
      532.2090000000001,
      537.38
    ],
    "en": [
      "Then, each router independently calculates its best routes to each destination, and inserts"
    ],
    "ru": [
      "Затем каждый маршрутизатор независимо вычисляет свои лучшие маршруты до каждого пункта назначения и вставляет"
    ]
  },
  {
    "time": [
      537.38,
      539.86
    ],
    "en": [
      "them into the routing table."
    ],
    "ru": [
      "их в таблицу маршрутизации."
    ]
  },
  {
    "time": [
      539.86,
      542.839
    ],
    "en": [
      "I will cover these steps in depth in the next lecture."
    ],
    "ru": [
      "Я подробно расскажу об этих шагах в следующей лекции."
    ]
  },
  {
    "time": [
      542.839,
      546.27
    ],
    "en": [
      "Just keep in mind this basic process of OSPF."
    ],
    "ru": [
      "Просто помните об этом базовом процессе OSPF."
    ]
  },
  {
    "time": [
      546.27,
      555.24
    ],
    "en": [
      "Let’s move on to another fundamental concept of OSPF, which isn’t part of RIP or EIGRP. OSPF areas."
    ],
    "ru": [
      "Давайте перейдем к другой фундаментальной концепции OSPF, которая не является частью RIP или EIGRP. Области OSPF."
    ]
  },
  {
    "time": [
      555.24,
      559.16
    ],
    "en": [
      "OSPF areas. OSPF uses areas to divide up the network."
    ],
    "ru": [
      "Области OSPF. OSPF использует области для разделения сети."
    ]
  },
  {
    "time": [
      559.16,
      565.99
    ],
    "en": [
      "However, small networks can be single-area without any negative effects on network performance."
    ],
    "ru": [
      "Однако небольшие сети могут быть однозонными без каких-либо отрицательных последствий для производительности сети."
    ]
  },
  {
    "time": [
      565.99,
      570.43
    ],
    "en": [
      "For example, this network with four routers is a small network."
    ],
    "ru": [
      "Например, эта сеть с четырьмя маршрутизаторами является небольшой сетью."
    ]
  },
  {
    "time": [
      570.43,
      575.04
    ],
    "en": [
      "When configuring OSPF in a network like this we can use just a single OSPF ‘area’ and"
    ],
    "ru": [
      "При настройке OSPF в такой сети мы можем использовать только одну «область» OSPF и"
    ]
  },
  {
    "time": [
      575.04,
      578.92
    ],
    "en": [
      "there won’t be any degradation of network performance."
    ],
    "ru": [
      "не будет никакого снижения производительности сети."
    ]
  },
  {
    "time": [
      578.92,
      584.23
    ],
    "en": [
      "In larger networks, however, a single-area design can have some negative effects."
    ],
    "ru": [
      "Однако в более крупных сетях конструкция с одной зоной может иметь некоторые негативные последствия."
    ]
  },
  {
    "time": [
      584.23,
      590.31
    ],
    "en": [
      "For example, if the OSPF network had 500 routers with over 1000 subnets instead of 4 routers"
    ],
    "ru": [
      "Например, если в сети OSPF было 500 маршрутизаторов с более чем 1000 подсетями вместо 4 маршрутизаторов."
    ]
  },
  {
    "time": [
      590.31,
      596.19
    ],
    "en": [
      "and just a few subnets, using just a single OSPF area would be a bad idea."
    ],
    "ru": [
      "и всего несколько подсетей, использование только одной области OSPF было бы плохой идеей."
    ]
  },
  {
    "time": [
      596.19,
      600.23
    ],
    "en": [
      "You should divide a large network like that into several smaller areas."
    ],
    "ru": [
      "Вы должны разделить такую ​​большую сеть на несколько меньших участков."
    ]
  },
  {
    "time": [
      600.23,
      605.3
    ],
    "en": [
      "Now, what are some of the negative effects of using a single-area design in a large network?"
    ],
    "ru": [
      "Теперь, каковы некоторые негативные эффекты использования дизайна с одной зоной в большой сети?"
    ]
  },
  {
    "time": [
      605.3,
      612.259
    ],
    "en": [
      "Well, for example the SPF algorithm takes more time to calculate routes in a large network."
    ],
    "ru": [
      "Ну, например, алгоритм SPF требует больше времени для расчета маршрутов в большой сети."
    ]
  },
  {
    "time": [
      612.259,
      618.11
    ],
    "en": [
      "It also requires exponentially more processing power on each router to make calculations."
    ],
    "ru": [
      "Это также требует экспоненциально большей вычислительной мощности на каждом маршрутизаторе для выполнения вычислений."
    ]
  },
  {
    "time": [
      618.11,
      624.5889999999999
    ],
    "en": [
      "Each router sharing a single, huge link state database also takes up more memory on the routers."
    ],
    "ru": [
      "Каждый маршрутизатор, совместно использующий одну огромную базу данных состояний каналов, также занимает больше памяти на маршрутизаторах."
    ]
  },
  {
    "time": [
      624.5889999999999,
      629.56
    ],
    "en": [
      "routers. On top of that, every small change on the network, for example a new interface being"
    ],
    "ru": [
      "роутеры. Вдобавок ко всему, каждое небольшое изменение в сети, например, новый интерфейс"
    ]
  },
  {
    "time": [
      629.56,
      634.58
    ],
    "en": [
      "activated, would caused LSAs to be flooded to all 500 routers, and all of those routers"
    ],
    "ru": [
      "активирован, вызвал бы лавинную рассылку LSA на все 500 маршрутизаторов, и все эти маршрутизаторы"
    ]
  },
  {
    "time": [
      634.58,
      638.149
    ],
    "en": [
      "would have to do the SPF calculation again."
    ],
    "ru": [
      "придется снова выполнить расчет SPF."
    ]
  },
  {
    "time": [
      638.149,
      645.149
    ],
    "en": [
      "By dividing a large OSPF network into several smaller areas, you can avoid the above negative effects."
    ],
    "ru": [
      "Разделив большую сеть OSPF на несколько меньших областей, вы можете избежать вышеуказанных негативных эффектов."
    ]
  },
  {
    "time": [
      645.149,
      650.29
    ],
    "en": [
      "effects. Checking the exam topics once more, notice that only single area OSPF is mentioned."
    ],
    "ru": [
      "эффекты. Еще раз проверив темы экзамена, обратите внимание, что упоминается только одна область OSPF."
    ]
  },
  {
    "time": [
      650.29,
      655.32
    ],
    "en": [
      "So, I will only give a brief overview of OSPF areas and how they work, you don’t need"
    ],
    "ru": [
      "Итак, я дам лишь краткий обзор областей OSPF и того, как они работают, вам не нужно"
    ]
  },
  {
    "time": [
      655.32,
      657.5889999999999
    ],
    "en": [
      "too much detail for the CCNA."
    ],
    "ru": [
      "слишком много деталей для CCNA."
    ]
  },
  {
    "time": [
      657.5889999999999,
      662.22
    ],
    "en": [
      "I’m not going to make a diagram with 500 routers, but here’s an example of a larger"
    ],
    "ru": [
      "Я не собираюсь строить схему с 500 маршрутизаторами, но вот пример большего"
    ]
  },
  {
    "time": [
      662.22,
      663.98
    ],
    "en": [
      "network than the previous one."
    ],
    "ru": [
      "сети, чем предыдущий."
    ]
  },
  {
    "time": [
      663.98,
      667.819
    ],
    "en": [
      "It’s possible to make this one large, single-area network."
    ],
    "ru": [
      "Можно создать одну большую сеть с одной зоной."
    ]
  },
  {
    "time": [
      667.819,
      672.99
    ],
    "en": [
      "All interfaces on all routers are assigned to area 0, also known as the backbone area."
    ],
    "ru": [
      "Все интерфейсы на всех маршрутизаторах назначены области 0, также известной как магистральная область."
    ]
  },
  {
    "time": [
      672.99,
      680.35
    ],
    "en": [
      "You’ll see soon that area 0 is of special importance in OSPF, and it’s called the ‘backbone’ area."
    ],
    "ru": [
      "Скоро вы увидите, что область 0 имеет особое значение в OSPF и называется «магистральной» областью."
    ]
  },
  {
    "time": [
      680.35,
      686.23
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
      680.35,
      686.23
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
      686.23,
      688.269
    ],
    "en": [
      "areas. Here’s how it’s done."
    ],
    "ru": [
      "области. Вот как это делается."
    ]
  },
  {
    "time": [
      688.269,
      694.949
    ],
    "en": [
      "Now, there are some rules and terminology you should know about OSPF areas, I’ll explain them now."
    ],
    "ru": [
      "Итак, есть некоторые правила и терминология, которые вы должны знать о областях OSPF, я сейчас их объясню."
    ]
  },
  {
    "time": [
      694.949,
      696.5889999999999
    ],
    "en": [
      "them now. First up, what is an area?"
    ],
    "ru": [
      "их сейчас. Во-первых, что такое площадь?"
    ]
  },
  {
    "time": [
      696.5889999999999,
      703.399
    ],
    "en": [
      "It’s a set of routers and links that share the same LSDB, link state database."
    ],
    "ru": [
      "Это набор маршрутизаторов и ссылок, которые используют одну и ту же LSDB, базу данных состояний каналов."
    ]
  },
  {
    "time": [
      703.399,
      706.529
    ],
    "en": [
      "Looking at this diagram once more, how many areas are there?"
    ],
    "ru": [
      "Посмотрев еще раз на эту диаграмму, сколько там областей?"
    ]
  },
  {
    "time": [
      706.529,
      710.779
    ],
    "en": [
      "Area 0, Area 1, Area 2, and Area 3."
    ],
    "ru": [
      "Зона 0, Зона 1, Зона 2 и Зона 3."
    ]
  },
  {
    "time": [
      710.779,
      713.18
    ],
    "en": [
      "So, there are four areas."
    ],
    "ru": [
      "Итак, есть четыре направления."
    ]
  },
  {
    "time": [
      713.18,
      716.36
    ],
    "en": [
      "Each of these areas maintains a unique LSDB."
    ],
    "ru": [
      "Каждая из этих областей поддерживает уникальный LSDB."
    ]
  },
  {
    "time": [
      716.36,
      722.829
    ],
    "en": [
      "Next, the backbone area (which is area 0) is an area, a special area, that all other"
    ],
    "ru": [
      "Далее, область позвоночника (которая является областью 0) - это область, особая область, в которой все остальные"
    ]
  },
  {
    "time": [
      722.829,
      724.6
    ],
    "en": [
      "areas must connect to."
    ],
    "ru": [
      "области должны подключаться к."
    ]
  },
  {
    "time": [
      724.6,
      727.949
    ],
    "en": [
      "Let’s check that network diagram again."
    ],
    "ru": [
      "Давайте еще раз проверим эту сетевую диаграмму."
    ]
  },
  {
    "time": [
      727.949,
      734.98
    ],
    "en": [
      "Notice that area 1, area 2, and area 3 all connect to area 0, the backbone area."
    ],
    "ru": [
      "Обратите внимание, что область 1, область 2 и область 3 соединяются с областью 0, областью магистрали."
    ]
  },
  {
    "time": [
      734.98,
      739.009
    ],
    "en": [
      "This kind of network design, for example, is not allowed in OSPF."
    ],
    "ru": [
      "Например, такая конструкция сети не разрешена в OSPF."
    ]
  },
  {
    "time": [
      739.009,
      743.11
    ],
    "en": [
      "Notice that area 1 is not connected to area 0, the backbone area."
    ],
    "ru": [
      "Обратите внимание, что область 1 не связана с областью 0, областью магистрали."
    ]
  },
  {
    "time": [
      743.11,
      745.23
    ],
    "en": [
      "It is only connected to area 2."
    ],
    "ru": [
      "Он связан только с зоной 2."
    ]
  },
  {
    "time": [
      745.23,
      748.44
    ],
    "en": [
      "This is not allowed in OSPF."
    ],
    "ru": [
      "Это запрещено в OSPF."
    ]
  },
  {
    "time": [
      748.44,
      753.279
    ],
    "en": [
      "Next up, routers with all interfaces in the same area are called ‘internal routers’."
    ],
    "ru": [
      "Далее, маршрутизаторы со всеми интерфейсами в одной области называются «внутренними маршрутизаторами»."
    ]
  },
  {
    "time": [
      753.279,
      756.779
    ],
    "en": [
      "So, in this diagram which routers are internal routers?"
    ],
    "ru": [
      "Итак, какие маршрутизаторы на этой диаграмме являются внутренними маршрутизаторами?"
    ]
  },
  {
    "time": [
      756.779,
      762.51
    ],
    "en": [
      "If all of the router’s interfaces are in the same area, it’s an internal router."
    ],
    "ru": [
      "Если все интерфейсы маршрутизатора находятся в одной области, это внутренний маршрутизатор."
    ]
  },
  {
    "time": [
      762.51,
      765.92
    ],
    "en": [
      "This router here is internal to area 0."
    ],
    "ru": [
      "Этот маршрутизатор находится внутри области 0."
    ]
  },
  {
    "time": [
      765.92,
      768.889
    ],
    "en": [
      "These routers are internal routers in area 1."
    ],
    "ru": [
      "Эти маршрутизаторы являются внутренними маршрутизаторами в области 1."
    ]
  },
  {
    "time": [
      768.889,
      772.759
    ],
    "en": [
      "Same for these routers in area 2, and these routers in area 3."
    ],
    "ru": [
      "То же самое для этих маршрутизаторов в области 2 и этих маршрутизаторов в области 3."
    ]
  },
  {
    "time": [
      772.759,
      780.04
    ],
    "en": [
      "So, those are internal routers, routers with all of their interfaces in the same OSPF area."
    ],
    "ru": [
      "Итак, это внутренние маршрутизаторы, маршрутизаторы, все интерфейсы которых находятся в одной области OSPF."
    ]
  },
  {
    "time": [
      780.04,
      785.32
    ],
    "en": [
      "Next up, routers with interfaces in multiple areas are called ‘area border routers’,"
    ],
    "ru": [
      "Далее, маршрутизаторы с интерфейсами в нескольких областях называются «граничными маршрутизаторами»,"
    ]
  },
  {
    "time": [
      785.32,
      789.399
    ],
    "en": [
      "because they are the border between different OSPF areas."
    ],
    "ru": [
      "потому что они являются границей между различными областями OSPF."
    ]
  },
  {
    "time": [
      789.399,
      793.0
    ],
    "en": [
      "In this network, which routers are ABRs?"
    ],
    "ru": [
      "Какие маршрутизаторы являются ABR в этой сети?"
    ]
  },
  {
    "time": [
      793.0,
      797.67
    ],
    "en": [
      "This router, connected to area 0 and area 1, is an ABR."
    ],
    "ru": [
      "Этот маршрутизатор, подключенный к области 0 и области 1, является ABR."
    ]
  },
  {
    "time": [
      797.67,
      802.139
    ],
    "en": [
      "This router, connected to area 0 and area 2, is also an ABR."
    ],
    "ru": [
      "Этот маршрутизатор, подключенный к области 0 и области 2, также является ABR."
    ]
  },
  {
    "time": [
      802.139,
      806.91
    ],
    "en": [
      "And this router, connected to area 0 and area 3, is an ABR."
    ],
    "ru": [
      "И этот маршрутизатор, подключенный к области 0 и области 3, является ABR."
    ]
  },
  {
    "time": [
      806.91,
      814.18
    ],
    "en": [
      "So remember that ABRs, Area Border Routers, are routers with interfaces in multiple OSPF areas."
    ],
    "ru": [
      "Поэтому помните, что ABR (Area Border Routers) - это маршрутизаторы с интерфейсами в нескольких областях OSPF."
    ]
  },
  {
    "time": [
      814.18,
      816.56
    ],
    "en": [
      "areas. One more bit of information about ABRs."
    ],
    "ru": [
      "области. Еще немного информации о ABR."
    ]
  },
  {
    "time": [
      816.56,
      821.78
    ],
    "en": [
      "ABRs maintain a separate LSDB for each area they are connected to."
    ],
    "ru": [
      "ABR поддерживают отдельный LSDB для каждой области, к которой они подключены."
    ]
  },
  {
    "time": [
      821.78,
      826.36
    ],
    "en": [
      "It is recommend that you connect an ABR to a maximum of 2 areas."
    ],
    "ru": [
      "Рекомендуется подключать ABR максимум к 2 областям."
    ]
  },
  {
    "time": [
      826.36,
      829.92
    ],
    "en": [
      "Connecting an ABR to 3+ areas can overburden the router."
    ],
    "ru": [
      "Подключение ABR к 3+ областям может перегрузить маршрутизатор."
    ]
  },
  {
    "time": [
      829.92,
      838.04
    ],
    "en": [
      "So, a design like I show here is good OSPF network design, with each ABR only connected to 2 areas."
    ],
    "ru": [
      "Итак, дизайн, который я показываю здесь, является хорошим дизайном сети OSPF, с каждым ABR, подключенным только к 2 областям."
    ]
  },
  {
    "time": [
      838.04,
      845.279
    ],
    "en": [
      "to 2 areas. Next, routers connected to the backbone area, which as I said before is area 0, are called backbone routers."
    ],
    "ru": [
      "в 2 области. Затем маршрутизаторы, подключенные к магистральной области, которая, как я сказал ранее, является областью 0, называются магистральными маршрутизаторами."
    ]
  },
  {
    "time": [
      845.279,
      847.939
    ],
    "en": [
      "backbone routers. This includes area border routers, by the way."
    ],
    "ru": [
      "магистральные маршрутизаторы. Это, кстати, включает в себя пограничные маршрутизаторы."
    ]
  },
  {
    "time": [
      847.939,
      852.069
    ],
    "en": [
      "So, which routers in this network are backbone routers?"
    ],
    "ru": [
      "Итак, какие маршрутизаторы в этой сети являются магистральными?"
    ]
  },
  {
    "time": [
      852.069,
      857.649
    ],
    "en": [
      "Of course, this router is connected only to area 0, so it is a backbone router."
    ],
    "ru": [
      "Конечно, этот маршрутизатор подключен только к области 0, поэтому он является магистральным маршрутизатором."
    ]
  },
  {
    "time": [
      857.649,
      862.94
    ],
    "en": [
      "It is a backbone router and an internal router, internal to area 0."
    ],
    "ru": [
      "Это магистральный маршрутизатор и внутренний маршрутизатор, внутренний по отношению к области 0."
    ]
  },
  {
    "time": [
      862.94,
      867.399
    ],
    "en": [
      "This router is also a backbone router, on top of being an ABR."
    ],
    "ru": [
      "Этот маршрутизатор также является магистральным маршрутизатором, помимо ABR."
    ]
  },
  {
    "time": [
      867.399,
      870.05
    ],
    "en": [
      "Same for this router, and this router."
    ],
    "ru": [
      "То же самое для этого роутера и этого роутера."
    ]
  },
  {
    "time": [
      870.05,
      875.5
    ],
    "en": [
      "They are both backbone routers and area border routers, ABRs."
    ],
    "ru": [
      "Они являются как магистральными маршрутизаторами, так и пограничными маршрутизаторами, ABR."
    ]
  },
  {
    "time": [
      875.5,
      881.74
    ],
    "en": [
      "Next term, an ‘intra-area route’ is a route to a destination inside the same OSPF area."
    ],
    "ru": [
      "Следующий термин «внутриобластный маршрут» - это маршрут к пункту назначения внутри той же зоны OSPF."
    ]
  },
  {
    "time": [
      881.74,
      886.779
    ],
    "en": [
      "area. For example, from a router in area 1 to a destination that is also in area 1."
    ],
    "ru": [
      "площадь. Например, от маршрутизатора в области 1 до пункта назначения, который также находится в области 1."
    ]
  },
  {
    "time": [
      886.779,
      889.54
    ],
    "en": [
      "Let’s see an example."
    ],
    "ru": [
      "Давайте посмотрим на пример."
    ]
  },
  {
    "time": [
      889.54,
      894.519
    ],
    "en": [
      "For example, if this router learns a route to this subnet, it is considered an intra-area"
    ],
    "ru": [
      "Например, если этот маршрутизатор изучает маршрут к этой подсети, он считается внутризонным."
    ]
  },
  {
    "time": [
      894.519,
      898.279
    ],
    "en": [
      "route, because the destination is in the same area as the router."
    ],
    "ru": [
      "маршрут, потому что пункт назначения находится в той же области, что и маршрутизатор."
    ]
  },
  {
    "time": [
      898.279,
      900.6
    ],
    "en": [
      "Here’s the final term."
    ],
    "ru": [
      "Вот последний срок."
    ]
  },
  {
    "time": [
      900.6,
      906.1
    ],
    "en": [
      "An ‘interarea route’ is a route to a destination in a different OSPF area."
    ],
    "ru": [
      "«Межзональный маршрут» - это маршрут к пункту назначения в другой зоне OSPF."
    ]
  },
  {
    "time": [
      906.1,
      913.33
    ],
    "en": [
      "For example, if a router in area 1 learns a route to a destination in area 2, that is an interarea route."
    ],
    "ru": [
      "Например, если маршрутизатор в области 1 изучает маршрут к пункту назначения в области 2, это маршрут между областями."
    ]
  },
  {
    "time": [
      913.33,
      915.66
    ],
    "en": [
      "an interarea route. Let’s see one more example."
    ],
    "ru": [
      "межрайонный маршрут. Посмотрим еще на один пример."
    ]
  },
  {
    "time": [
      915.66,
      922.8389999999999
    ],
    "en": [
      "If this router in area 1 learns a route to this subnet in area 2, it is considered an interarea route."
    ],
    "ru": [
      "Если этот маршрутизатор в области 1 узнает маршрут к этой подсети в области 2, это считается маршрутом между областями."
    ]
  },
  {
    "time": [
      922.8389999999999,
      926.959
    ],
    "en": [
      "interarea route. The router and the destination are in two different OSPF areas."
    ],
    "ru": [
      "межрайонный маршрут. Маршрутизатор и пункт назначения находятся в двух разных областях OSPF."
    ]
  },
  {
    "time": [
      926.959,
      932.48
    ],
    "en": [
      "So, those are some important OSPF terms regarding OSPF areas."
    ],
    "ru": [
      "Итак, это некоторые важные термины OSPF, касающиеся областей OSPF."
    ]
  },
  {
    "time": [
      932.48,
      936.769
    ],
    "en": [
      "Make sure you learn and understand these, and use the flashcards to remember them."
    ],
    "ru": [
      "Убедитесь, что вы усвоили и поняли их, и запомните их с помощью карточек."
    ]
  },
  {
    "time": [
      936.769,
      943.399
    ],
    "en": [
      "Area, backbone area, internal router, area border router, backbone router, intra-area"
    ],
    "ru": [
      "Область, магистральная область, внутренний маршрутизатор, граничный маршрутизатор области, магистральный маршрутизатор, внутризонный"
    ]
  },
  {
    "time": [
      943.399,
      947.29
    ],
    "en": [
      "route, and interarea route, remember those terms."
    ],
    "ru": [
      "маршрут и межрайонный маршрут, запомните эти термины."
    ]
  },
  {
    "time": [
      947.29,
      952.42
    ],
    "en": [
      "Next up, let’s cover a few additional rules about OSPF areas."
    ],
    "ru": [
      "Теперь давайте рассмотрим несколько дополнительных правил, касающихся областей OSPF."
    ]
  },
  {
    "time": [
      952.42,
      955.85
    ],
    "en": [
      "First up, OSPF areas should be ‘contiguous’."
    ],
    "ru": [
      "Во-первых, области OSPF должны быть «смежными»."
    ]
  },
  {
    "time": [
      955.85,
      957.18
    ],
    "en": [
      "What does that mean?"
    ],
    "ru": [
      "Что это обозначает?"
    ]
  },
  {
    "time": [
      957.18,
      961.94
    ],
    "en": [
      "It means that each individual area should be connected, not divided up."
    ],
    "ru": [
      "Это означает, что каждая отдельная область должна быть соединена, а не разделена."
    ]
  },
  {
    "time": [
      961.94,
      965.75
    ],
    "en": [
      "It’s easier to demonstrate with the network diagram."
    ],
    "ru": [
      "Это проще продемонстрировать с помощью сетевой схемы."
    ]
  },
  {
    "time": [
      965.75,
      969.37
    ],
    "en": [
      "So, this network satisfies that rule."
    ],
    "ru": [
      "Итак, эта сеть удовлетворяет этому правилу."
    ]
  },
  {
    "time": [
      969.37,
      970.569
    ],
    "en": [
      "All areas are contiguous."
    ],
    "ru": [
      "Все районы смежные."
    ]
  },
  {
    "time": [
      970.569,
      975.22
    ],
    "en": [
      "Now let’s look at what it means to be non-contiguous."
    ],
    "ru": [
      "Теперь давайте посмотрим, что значит быть несмежным."
    ]
  },
  {
    "time": [
      975.22,
      977.79
    ],
    "en": [
      "Area 1 is now non-contiguous."
    ],
    "ru": [
      "Зона 1 теперь не является смежной."
    ]
  },
  {
    "time": [
      977.79,
      983.529
    ],
    "en": [
      "Instead of all being connected, half of area 1 is here, and half of area 1 is here."
    ],
    "ru": [
      "Вместо того, чтобы все соединено, половина области 1 здесь, а половина области 1 здесь."
    ]
  },
  {
    "time": [
      983.529,
      987.6
    ],
    "en": [
      "This kind of network design is not allowed in OSPF and will cause problems."
    ],
    "ru": [
      "Такая конструкция сети недопустима в OSPF и вызовет проблемы."
    ]
  },
  {
    "time": [
      987.6,
      991.47
    ],
    "en": [
      "So, instead of having area 1 split up and non-contiguous like this,"
    ],
    "ru": [
      "Итак, вместо того, чтобы разделять и разделять область 1, как это,"
    ]
  },
  {
    "time": [
      991.47,
      996.47
    ],
    "en": [
      "you should make this section on the right a separate area, area 3."
    ],
    "ru": [
      "Вы должны сделать этот раздел справа отдельной областью, областью 3."
    ]
  },
  {
    "time": [
      996.47,
      1001.94
    ],
    "en": [
      "Now all of the areas are contiguous and OSPF can function properly."
    ],
    "ru": [
      "Теперь все области смежны, и OSPF может нормально работать."
    ]
  },
  {
    "time": [
      1001.94,
      1007.83
    ],
    "en": [
      "Next rule, all OSPF areas must have at least one ABR connected to the backbone area."
    ],
    "ru": [
      "Следующее правило: все области OSPF должны иметь по крайней мере один ABR, подключенный к магистральной области."
    ]
  },
  {
    "time": [
      1007.83,
      1011.329
    ],
    "en": [
      "I actually already mentioned this, but it’s worth repeating."
    ],
    "ru": [
      "На самом деле я уже упоминал об этом, но стоит повторить."
    ]
  },
  {
    "time": [
      1011.329,
      1014.079
    ],
    "en": [
      "Let’s look at the network diagram again."
    ],
    "ru": [
      "Давайте еще раз посмотрим на схему сети."
    ]
  },
  {
    "time": [
      1014.079,
      1021.259
    ],
    "en": [
      "So, notice that area 1 has an ABR connected to both area 1 and area 0, area 2 has an ABR"
    ],
    "ru": [
      "Итак, обратите внимание, что область 1 имеет ABR, подключенную как к области 1, так и к области 0, область 2 имеет ABR."
    ]
  },
  {
    "time": [
      1021.259,
      1028.909
    ],
    "en": [
      "connected to both area 2 and area 0, and area 3 also has an ABR connected to both area 3 and area 0."
    ],
    "ru": [
      "соединен как с областью 2, так и с областью 0, а область 3 также имеет ABR, подключенный как к области 3, так и к области 0."
    ]
  },
  {
    "time": [
      1028.909,
      1032.209
    ],
    "en": [
      "and area 0. This is correct OSPF network design."
    ],
    "ru": [
      "и область 0. Это правильный дизайн сети OSPF."
    ]
  },
  {
    "time": [
      1032.209,
      1037.23
    ],
    "en": [
      "As I showed you before, a network like this is not correct OSPF design and will cause"
    ],
    "ru": [
      "Как я показал вам ранее, такая сеть не является правильным дизайном OSPF и вызовет"
    ]
  },
  {
    "time": [
      1037.23,
      1044.059
    ],
    "en": [
      "problems, because area 1 does not have an ABR connected to the backbone area, area 0."
    ],
    "ru": [
      "проблемы, потому что область 1 не имеет ABR, подключенного к области магистрали, области 0."
    ]
  },
  {
    "time": [
      1044.059,
      1049.32
    ],
    "en": [
      "One more rule, OSPF interfaces in the same subnet must be in the same area."
    ],
    "ru": [
      "Еще одно правило: интерфейсы OSPF в одной подсети должны находиться в одной области."
    ]
  },
  {
    "time": [
      1049.32,
      1053.13
    ],
    "en": [
      "If they’re not in the same area, they won’t become OSPF neighbors and won’t exchange"
    ],
    "ru": [
      "Если они не находятся в одном районе, они не станут соседями OSPF и не будут обмениваться"
    ]
  },
  {
    "time": [
      1053.13,
      1056.21
    ],
    "en": [
      "information about the networks they know about."
    ],
    "ru": [
      "информация о сетях, о которых они знают."
    ]
  },
  {
    "time": [
      1056.21,
      1060.07
    ],
    "en": [
      "In a future video I will go more in detail about some other requirements for routers"
    ],
    "ru": [
      "В следующем видео я расскажу подробнее о некоторых других требованиях к роутерам."
    ]
  },
  {
    "time": [
      1060.07,
      1063.85
    ],
    "en": [
      "to become OSPF neighbors, but for now let’s leave it at this one."
    ],
    "ru": [
      "чтобы стать соседями OSPF, а пока оставим это."
    ]
  },
  {
    "time": [
      1063.85,
      1067.19
    ],
    "en": [
      "So, let me demonstrate."
    ],
    "ru": [
      "Итак, позвольте мне продемонстрировать."
    ]
  },
  {
    "time": [
      1067.19,
      1075.539
    ],
    "en": [
      "In this example, these three routers all have an interface in area 0, in the 192.168.1.0/29 subnet."
    ],
    "ru": [
      "В этом примере все эти три маршрутизатора имеют интерфейс в области 0 в подсети 192.168.1.0/29."
    ]
  },
  {
    "time": [
      1075.539,
      1083.51
    ],
    "en": [
      "subnet. This router also has an interface in the 192.168.1.0/29 subnet, but the interface is in area 1, not area 0."
    ],
    "ru": [
      "подсеть. Этот маршрутизатор также имеет интерфейс в подсети 192.168.1.0/29, но интерфейс находится в области 1, а не в области 0."
    ]
  },
  {
    "time": [
      1083.51,
      1088.94
    ],
    "en": [
      "area 0. Even though all four interfaces are in the same subnet and OSPF is enabled on them, the"
    ],
    "ru": [
      "область 0. Несмотря на то, что все четыре интерфейса находятся в одной подсети и на них включен OSPF,"
    ]
  },
  {
    "time": [
      1088.94,
      1093.57
    ],
    "en": [
      "area 1 router will not become OSPF neighbors with the others."
    ],
    "ru": [
      "Маршрутизатор области 1 не станет соседом OSPF с остальными."
    ]
  },
  {
    "time": [
      1093.57,
      1101.64
    ],
    "en": [
      "This time, the area 1 ABR’s interface in the 192.168.1.0/29 subnet is correctly configured in area 0."
    ],
    "ru": [
      "На этот раз интерфейс ABR области 1 в подсети 192.168.1.0/29 правильно настроен в области 0."
    ]
  },
  {
    "time": [
      1101.64,
      1105.19
    ],
    "en": [
      "in area 0. So, all four routers will become OSPF neighbors."
    ],
    "ru": [
      "в области 0. Итак, все четыре маршрутизатора станут соседями OSPF."
    ]
  },
  {
    "time": [
      1105.19,
      1108.6
    ],
    "en": [
      "Here’s a summary of those three rules."
    ],
    "ru": [
      "Вот краткое изложение этих трех правил."
    ]
  },
  {
    "time": [
      1108.6,
      1112.66
    ],
    "en": [
      "Of course, I will cover many more points about OSPF in the next few videos."
    ],
    "ru": [
      "Конечно, в следующих нескольких видеороликах я расскажу о многих других аспектах OSPF."
    ]
  },
  {
    "time": [
      1112.66,
      1117.96
    ],
    "en": [
      "I will go in depth about OSPF neighbors, OSPF LSAs, and other points."
    ],
    "ru": [
      "Я подробно расскажу о соседях OSPF, LSA OSPF и других моментах."
    ]
  },
  {
    "time": [
      1117.96,
      1124.679
    ],
    "en": [
      "But now let’s cover some basic OSPF configurations so we can practice them in the lab video."
    ],
    "ru": [
      "Но теперь давайте рассмотрим некоторые базовые конфигурации OSPF, чтобы мы могли попрактиковаться в них в лабораторном видео."
    ]
  },
  {
    "time": [
      1124.679,
      1130.94
    ],
    "en": [
      "So let’s use the same network topology that we did for RIP and EIGRP, since you’re already familiar with it."
    ],
    "ru": [
      "Итак, давайте использовать ту же топологию сети, которую мы использовали для RIP и EIGRP, поскольку вы уже знакомы с ней."
    ]
  },
  {
    "time": [
      1130.94,
      1135.95
    ],
    "en": [
      "familiar with it. Although it’s important that you understand those rules and terms about OSPF areas, for"
    ],
    "ru": [
      "знаком с ним. Хотя важно понимать эти правила и термины, касающиеся областей OSPF, для"
    ]
  },
  {
    "time": [
      1135.95,
      1141.15
    ],
    "en": [
      "the CCNA you only have to configure single-area OSPF, so all of these router interfaces are"
    ],
    "ru": [
      "CCNA, вам нужно только настроить OSPF для одной области, поэтому все эти интерфейсы маршрутизатора"
    ]
  },
  {
    "time": [
      1141.15,
      1143.32
    ],
    "en": [
      "in OSPF area 0."
    ],
    "ru": [
      "в области OSPF 0."
    ]
  },
  {
    "time": [
      1143.32,
      1150.77
    ],
    "en": [
      "I’ve already configured R2, R3, and R4, so let’s configure OSPF on R1."
    ],
    "ru": [
      "Я уже настроил R2, R3 и R4, поэтому давайте настроим OSPF на R1."
    ]
  },
  {
    "time": [
      1150.77,
      1155.45
    ],
    "en": [
      "Here is the basic OSPF configuration, let’s walk through it."
    ],
    "ru": [
      "Вот базовая конфигурация OSPF, давайте рассмотрим ее."
    ]
  },
  {
    "time": [
      1155.45,
      1160.89
    ],
    "en": [
      "First up, to enter OSPF configuration mode you use the command ROUTER OSPF, followed"
    ],
    "ru": [
      "Сначала, чтобы войти в режим конфигурации OSPF, вы используете команду ROUTER OSPF, а затем"
    ]
  },
  {
    "time": [
      1160.89,
      1163.15
    ],
    "en": [
      "by a process ID."
    ],
    "ru": [
      "по идентификатору процесса."
    ]
  },
  {
    "time": [
      1163.15,
      1168.1
    ],
    "en": [
      "A router can run multiple OSPF processes at once, and this ID is used in the router to"
    ],
    "ru": [
      "Маршрутизатор может запускать несколько процессов OSPF одновременно, и этот идентификатор используется в маршрутизаторе для"
    ]
  },
  {
    "time": [
      1168.1,
      1170.73
    ],
    "en": [
      "identify each of them."
    ],
    "ru": [
      "определить каждого из них."
    ]
  },
  {
    "time": [
      1170.73,
      1174.94
    ],
    "en": [
      "Typically you’ll just use a single OSPF process, so don’t worry about this number,"
    ],
    "ru": [
      "Обычно вы используете только один процесс OSPF, поэтому не беспокойтесь об этом числе,"
    ]
  },
  {
    "time": [
      1174.94,
      1177.059
    ],
    "en": [
      "I chose to use 1."
    ],
    "ru": [
      "Я выбрал 1."
    ]
  },
  {
    "time": [
      1177.059,
      1184.36
    ],
    "en": [
      "If you remember the EIGRP configuration, you used the command ROUTER EIGRP, followed by an AS number."
    ],
    "ru": [
      "Если вы помните конфигурацию EIGRP, вы использовали команду ROUTER EIGRP, за которой следует номер AS."
    ]
  },
  {
    "time": [
      1184.36,
      1189.48
    ],
    "en": [
      "an AS number. For EIGRP routers to become neighbors, their AS number has to match."
    ],
    "ru": [
      "номер AS. Чтобы маршрутизаторы EIGRP стали соседями, их номер AS должен совпадать."
    ]
  },
  {
    "time": [
      1189.48,
      1193.25
    ],
    "en": [
      "However, the OSPF process ID is different."
    ],
    "ru": [
      "Однако идентификатор процесса OSPF отличается."
    ]
  },
  {
    "time": [
      1193.25,
      1196.88
    ],
    "en": [
      "The OSPF process ID is locally significant."
    ],
    "ru": [
      "Идентификатор процесса OSPF имеет значение локально."
    ]
  },
  {
    "time": [
      1196.88,
      1201.42
    ],
    "en": [
      "Routers with different process IDs can become OSPF neighbors."
    ],
    "ru": [
      "Маршрутизаторы с разными идентификаторами процесса могут стать соседями OSPF."
    ]
  },
  {
    "time": [
      1201.42,
      1208.02
    ],
    "en": [
      "Usually I just use process ID 1, but you could for example use process ID 1 on R1 and"
    ],
    "ru": [
      "Обычно я просто использую идентификатор процесса 1, но вы можете, например, использовать идентификатор процесса 1 на R1 и"
    ]
  },
  {
    "time": [
      1208.02,
      1215.03
    ],
    "en": [
      "process ID 2 on R2, and they would still become OSPF neighbors and exchange LSAs."
    ],
    "ru": [
      "процесс ID 2 на R2, и они все равно станут соседями OSPF и обмениваются LSA."
    ]
  },
  {
    "time": [
      1215.03,
      1218.649
    ],
    "en": [
      "Note that this process ID is totally unrelated to the area."
    ],
    "ru": [
      "Обратите внимание, что этот идентификатор процесса не имеет отношения к области."
    ]
  },
  {
    "time": [
      1218.649,
      1222.01
    ],
    "en": [
      "You’ll see next that the area is configured separately."
    ],
    "ru": [
      "Далее вы увидите, что область настраивается отдельно."
    ]
  },
  {
    "time": [
      1222.01,
      1227.549
    ],
    "en": [
      "So, next I attempted to use the network command just like I did in EIGRP."
    ],
    "ru": [
      "Итак, затем я попытался использовать сетевую команду точно так же, как я сделал это в EIGRP."
    ]
  },
  {
    "time": [
      1227.549,
      1231.89
    ],
    "en": [
      "Note that OSPF uses wildcard masks just like in EIGRP."
    ],
    "ru": [
      "Обратите внимание, что OSPF использует маски подстановки, как и в EIGRP."
    ]
  },
  {
    "time": [
      1231.89,
      1235.57
    ],
    "en": [
      "If you need to review them, go back and watch Day 25’s video."
    ],
    "ru": [
      "Если вам нужно их просмотреть, вернитесь и посмотрите видео дня 25."
    ]
  },
  {
    "time": [
      1235.57,
      1238.39
    ],
    "en": [
      "Basically, it’s an inverse subnet mask."
    ],
    "ru": [
      "По сути, это обратная маска подсети."
    ]
  },
  {
    "time": [
      1238.39,
      1243.79
    ],
    "en": [
      "Anyway, I tried to use that command but then the router says ‘Incomplete command’."
    ],
    "ru": [
      "В любом случае, я попытался использовать эту команду, но затем маршрутизатор сообщает «Неполная команда»."
    ]
  },
  {
    "time": [
      1243.79,
      1249.3
    ],
    "en": [
      "That’s because the OSPF network command requires you to specify the area."
    ],
    "ru": [
      "Это потому, что сетевая команда OSPF требует, чтобы вы указали область."
    ]
  },
  {
    "time": [
      1249.3,
      1254.64
    ],
    "en": [
      "So I activated OSPF on all of these interfaces, in area 0."
    ],
    "ru": [
      "Итак, я активировал OSPF на всех этих интерфейсах в области 0."
    ]
  },
  {
    "time": [
      1254.64,
      1262.08
    ],
    "en": [
      "Once again, for the CCNA you only need to configure single-area OSPF, and usually you’ll use area 0."
    ],
    "ru": [
      "Еще раз, для CCNA вам нужно настроить OSPF только для одной области, и обычно вы будете использовать область 0."
    ]
  },
  {
    "time": [
      1262.08,
      1266.76
    ],
    "en": [
      "use area 0. For single area OSPF it’s actually possible to use any area number, but it’s considered"
    ],
    "ru": [
      "использовать область 0. Для OSPF с одной областью на самом деле можно использовать любой номер области, но это считается"
    ]
  },
  {
    "time": [
      1266.76,
      1270.21
    ],
    "en": [
      "best practice to use area 0."
    ],
    "ru": [
      "Лучшая практика для использования области 0."
    ]
  },
  {
    "time": [
      1270.21,
      1277.08
    ],
    "en": [
      "Before moving on, let me review the function of the NETWORK command, it’s just like in RIP and EIGRP."
    ],
    "ru": [
      "Прежде чем продолжить, позвольте мне рассмотреть функцию команды NETWORK, она такая же, как в RIP и EIGRP."
    ]
  },
  {
    "time": [
      1277.08,
      1281.409
    ],
    "en": [
      "RIP and EIGRP. The network commands tells OSPF to look for any interfaces with an IP address contained"
    ],
    "ru": [
      "RIP и EIGRP. Сетевые команды предписывают OSPF искать любые интерфейсы с содержащимся IP-адресом."
    ]
  },
  {
    "time": [
      1281.409,
      1289.08
    ],
    "en": [
      "in the range specified in the network command, and then activate OSPF on the interface in the specified area."
    ],
    "ru": [
      "в диапазоне, указанном в сетевой команде, а затем активируйте OSPF на интерфейсе в указанной области."
    ]
  },
  {
    "time": [
      1289.08,
      1295.09
    ],
    "en": [
      "the specified area. For example, in the first network command I specified 10.0.12.0 with a /28 wildcard"
    ],
    "ru": [
      "указанная область. Например, в первой сетевой команде я указал 10.0.12.0 с подстановочным знаком / 28"
    ]
  },
  {
    "time": [
      1295.09,
      1297.5
    ],
    "en": [
      "mask, in area 0."
    ],
    "ru": [
      "маска, в области 0."
    ]
  },
  {
    "time": [
      1297.5,
      1305.63
    ],
    "en": [
      "R1’s G0/0 interface has an IP address of 10.0.12.1, which is contained in 10.0.12.0/28."
    ],
    "ru": [
      "Интерфейс G0 / 0 маршрутизатора R1 имеет IP-адрес 10.0.12.1, который содержится в 10.0.12.0/28."
    ]
  },
  {
    "time": [
      1305.63,
      1311.95
    ],
    "en": [
      "So, OSPF will be activated on G0/0 in area 0."
    ],
    "ru": [
      "Итак, OSPF будет активирован на G0 / 0 в области 0."
    ]
  },
  {
    "time": [
      1311.95,
      1316.659
    ],
    "en": [
      "When OSPF is activated on the interface, the router will then try to become OSPF neighbors"
    ],
    "ru": [
      "Когда OSPF активирован на интерфейсе, маршрутизатор затем попытается стать соседом OSPF."
    ]
  },
  {
    "time": [
      1316.659,
      1320.25
    ],
    "en": [
      "with other OSPF-activated neighbor routers."
    ],
    "ru": [
      "с другими соседними маршрутизаторами, активированными OSPF."
    ]
  },
  {
    "time": [
      1320.25,
      1324.88
    ],
    "en": [
      "In this case, R1 will become OSPF neighbors with R2 and R3."
    ],
    "ru": [
      "В этом случае R1 станет соседом OSPF с R2 и R3."
    ]
  },
  {
    "time": [
      1324.88,
      1328.37
    ],
    "en": [
      "I’ll explain that process in depth in the next video."
    ],
    "ru": [
      "Я подробно объясню этот процесс в следующем видео."
    ]
  },
  {
    "time": [
      1328.37,
      1333.33
    ],
    "en": [
      "So, just remember that the NETWORK command is simply used to tell the router which interfaces"
    ],
    "ru": [
      "Итак, просто помните, что команда NETWORK просто используется, чтобы сообщить маршрутизатору, какие интерфейсы"
    ]
  },
  {
    "time": [
      1333.33,
      1335.52
    ],
    "en": [
      "to activate OSPF on."
    ],
    "ru": [
      "для активации OSPF."
    ]
  },
  {
    "time": [
      1335.52,
      1338.93
    ],
    "en": [
      "It doesn’t tell the router ‘advertise these networks’."
    ],
    "ru": [
      "Он не сообщает маршрутизатору «рекламирует эти сети»."
    ]
  },
  {
    "time": [
      1338.93,
      1343.149
    ],
    "en": [
      "But we already covered that in the last video, now let’s look at a few other configurations"
    ],
    "ru": [
      "Но мы уже рассмотрели это в последнем видео, а теперь давайте рассмотрим несколько других конфигураций."
    ]
  },
  {
    "time": [
      1343.149,
      1346.44
    ],
    "en": [
      "you can do in OSPF."
    ],
    "ru": [
      "вы можете сделать это в OSPF."
    ]
  },
  {
    "time": [
      1346.44,
      1349.559
    ],
    "en": [
      "First up, the PASSIVE-INTERFACE command."
    ],
    "ru": [
      "Сначала команда PASSIVE-INTERFACE."
    ]
  },
  {
    "time": [
      1349.559,
      1355.23
    ],
    "en": [
      "You already know this command from RIP and EIGRP, it’s totally the same for OSPF."
    ],
    "ru": [
      "Вы уже знаете эту команду из RIP и EIGRP, для OSPF она полностью идентична."
    ]
  },
  {
    "time": [
      1355.23,
      1359.75
    ],
    "en": [
      "The passive-interface command tells the router to stop sending OSPF ‘hello’ messages"
    ],
    "ru": [
      "Команда passive-interface указывает маршрутизатору прекратить отправку сообщений приветствия OSPF."
    ]
  },
  {
    "time": [
      1359.75,
      1362.18
    ],
    "en": [
      "out of the interface."
    ],
    "ru": [
      "вне интерфейса."
    ]
  },
  {
    "time": [
      1362.18,
      1367.16
    ],
    "en": [
      "OSPF uses hello messages to tell other routers about itself, wait for Day 27’s video for"
    ],
    "ru": [
      "OSPF использует приветственные сообщения, чтобы рассказать о себе другим маршрутизаторам. Подождите, пока выйдет видео дня 27,"
    ]
  },
  {
    "time": [
      1367.16,
      1368.909
    ],
    "en": [
      "more details on that."
    ],
    "ru": [
      "подробнее об этом."
    ]
  },
  {
    "time": [
      1368.909,
      1373.22
    ],
    "en": [
      "However, the router will continue to send LSAs informing it’s neighbors about the"
    ],
    "ru": [
      "Однако маршрутизатор будет продолжать отправлять LSA, информируя своих соседей о"
    ]
  },
  {
    "time": [
      1373.22,
      1375.52
    ],
    "en": [
      "subnet configured on the interface."
    ],
    "ru": [
      "подсеть настроена на интерфейсе."
    ]
  },
  {
    "time": [
      1375.52,
      1381.79
    ],
    "en": [
      "So, although R1 won’t send hellos out of G2/0 and try to find OSPF neighbors, it will"
    ],
    "ru": [
      "Таким образом, хотя R1 не будет посылать приветствия из G2 / 0 и пытаться найти соседей OSPF, он будет"
    ]
  },
  {
    "time": [
      1381.79,
      1388.46
    ],
    "en": [
      "still tell its other neighbors about the 172.16.1.0/28 network."
    ],
    "ru": [
      "все еще рассказывают своим соседям о сети 172.16.1.0/28."
    ]
  },
  {
    "time": [
      1388.46,
      1392.24
    ],
    "en": [
      "You should always use this command on interfaces which don’t have any OSPF neighbors."
    ],
    "ru": [
      "Вы всегда должны использовать эту команду на интерфейсах, у которых нет соседей OSPF."
    ]
  },
  {
    "time": [
      1392.24,
      1397.1
    ],
    "en": [
      "It’s a waste to continuously send hello messages out of an interface with no other"
    ],
    "ru": [
      "Бесполезно постоянно отправлять приветственные сообщения из интерфейса, в котором нет других"
    ]
  },
  {
    "time": [
      1397.1,
      1398.45
    ],
    "en": [
      "routers connected to it."
    ],
    "ru": [
      "подключенные к нему роутеры."
    ]
  },
  {
    "time": [
      1398.45,
      1406.85
    ],
    "en": [
      "So, that’s the PASSIVE-INTERFACE command, it’s basically the same as for RIP and EIGRP"
    ],
    "ru": [
      "Итак, это команда PASSIVE-INTERFACE, она в основном такая же, как для RIP и EIGRP."
    ]
  },
  {
    "time": [
      1406.85,
      1412.29
    ],
    "en": [
      "Next up let’s see how to advertise a default route into OSPF, just like I showed you before for RIP."
    ],
    "ru": [
      "Теперь давайте посмотрим, как объявить маршрут по умолчанию в OSPF, как я уже показал вам ранее для RIP."
    ]
  },
  {
    "time": [
      1412.29,
      1416.45
    ],
    "en": [
      "for RIP. So, I’ve added an Internet connection to R1."
    ],
    "ru": [
      "для RIP. Итак, я добавил подключение к Интернету к R1."
    ]
  },
  {
    "time": [
      1416.45,
      1424.33
    ],
    "en": [
      "Then I configured a default route on R1, and the next hop is the ISP’s IP address of 203.0.113.2."
    ],
    "ru": [
      "Затем я настроил маршрут по умолчанию на R1, а следующим переходом будет IP-адрес провайдера 203.0.113.2."
    ]
  },
  {
    "time": [
      1424.33,
      1427.0
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
      1424.33,
      1427.0
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
      1427.0,
      1434.36
    ],
    "en": [
      "Feel free to pause here if you want to check out the other OSPF routes that R1 has learned, too."
    ],
    "ru": [
      "Не стесняйтесь сделать паузу здесь, если вы хотите проверить другие маршруты OSPF, которые также изучил R1."
    ]
  },
  {
    "time": [
      1434.36,
      1441.76
    ],
    "en": [
      "Just like I showed you in RIP, the command to advertise the default route into OSPF is DEFAULT-INFORMATION ORIGINATE."
    ],
    "ru": [
      "Как я показал вам в RIP, команда для объявления маршрута по умолчанию в OSPF - DEFAULT-INFORMATION ORIGINATE."
    ]
  },
  {
    "time": [
      1441.76,
      1445.85
    ],
    "en": [
      "DEFAULT-INFORMATION ORIGINATE. In OSPF this will cause the router to create a new LSA and flood it."
    ],
    "ru": [
      "ИСХОДНАЯ ИНФОРМАЦИЯ ПО УМОЛЧАНИЮ. В OSPF это заставит маршрутизатор создать новый LSA и заполнить его лавинной рассылкой."
    ]
  },
  {
    "time": [
      1445.85,
      1452.779
    ],
    "en": [
      "I checked R2’s routing table, and you can see it added the default route via R1 to its route table."
    ],
    "ru": [
      "Я проверил таблицу маршрутизации R2, и вы можете видеть, что он добавил маршрут по умолчанию через R1 в свою таблицу маршрутов."
    ]
  },
  {
    "time": [
      1452.779,
      1455.97
    ],
    "en": [
      "route table. R3 and R4 would also do the same."
    ],
    "ru": [
      "таблица маршрутов. R3 и R4 также сделают то же самое."
    ]
  },
  {
    "time": [
      1455.97,
      1462.669
    ],
    "en": [
      "Now let’s take a look at the SHOW IP PROTOCOLS command from an OSPF perspective, and we’ll"
    ],
    "ru": [
      "Теперь давайте посмотрим на команду SHOW IP PROTOCOLS с точки зрения OSPF, и мы"
    ]
  },
  {
    "time": [
      1462.669,
      1465.47
    ],
    "en": [
      "check out some other commands as well."
    ],
    "ru": [
      "ознакомьтесь также с некоторыми другими командами."
    ]
  },
  {
    "time": [
      1465.47,
      1468.549
    ],
    "en": [
      "Up top it says ‘routing protocol is ospf 1’."
    ],
    "ru": [
      "Вверху написано, что «протокол маршрутизации - ospf 1»."
    ]
  },
  {
    "time": [
      1468.549,
      1472.69
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
      1468.549,
      1472.69
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
      1472.69,
      1477.65
    ],
    "en": [
      "OSPF also uses a router ID, and the router ID is determined in exactly the same way as"
    ],
    "ru": [
      "OSPF также использует идентификатор маршрутизатора, и идентификатор маршрутизатора определяется точно так же, как"
    ]
  },
  {
    "time": [
      1477.65,
      1481.269
    ],
    "en": [
      "in EIGRP, let’s review it."
    ],
    "ru": [
      "в EIGRP, давайте рассмотрим его."
    ]
  },
  {
    "time": [
      1481.269,
      1486.35
    ],
    "en": [
      "Here is the order of priority when determining the OSPF router ID."
    ],
    "ru": [
      "Вот порядок приоритета при определении идентификатора маршрутизатора OSPF."
    ]
  },
  {
    "time": [
      1486.35,
      1491.99
    ],
    "en": [
      "First up, if you manually configure the router ID, that will become the router ID."
    ],
    "ru": [
      "Во-первых, если вы вручную настроите идентификатор маршрутизатора, он станет идентификатором маршрутизатора."
    ]
  },
  {
    "time": [
      1491.99,
      1497.14
    ],
    "en": [
      "If you don’t manually configure the router ID, the highest IP address on a loopback interface"
    ],
    "ru": [
      "Если вы не настраиваете идентификатор маршрутизатора вручную, наивысший IP-адрес на интерфейсе обратной связи"
    ]
  },
  {
    "time": [
      1497.14,
      1499.64
    ],
    "en": [
      "will become the router ID."
    ],
    "ru": [
      "станет идентификатором маршрутизатора."
    ]
  },
  {
    "time": [
      1499.64,
      1504.35
    ],
    "en": [
      "If the router has no loopback interfaces with an IP address, the highest IP address on a"
    ],
    "ru": [
      "Если маршрутизатор не имеет интерфейсов обратной связи с IP-адресом, наивысший IP-адрес на"
    ]
  },
  {
    "time": [
      1504.35,
      1507.289
    ],
    "en": [
      "physical interface will become the router ID."
    ],
    "ru": [
      "физический интерфейс станет идентификатором маршрутизатора."
    ]
  },
  {
    "time": [
      1507.289,
      1513.87
    ],
    "en": [
      "Currently R1’s router ID is 172.16.1.14, because I haven’t manually configured the"
    ],
    "ru": [
      "В настоящее время идентификатор маршрутизатора R1 - 172.16.1.14, поскольку я не настраивал вручную"
    ]
  },
  {
    "time": [
      1513.87,
      1518.26
    ],
    "en": [
      "router ID, and I also haven’t configured a loopback interface on R1."
    ],
    "ru": [
      "идентификатор маршрутизатора, и я также не настроил интерфейс обратной связи на маршрутизаторе R1."
    ]
  },
  {
    "time": [
      1518.26,
      1522.24
    ],
    "en": [
      "Let’s see how to manually configure the router ID."
    ],
    "ru": [
      "Давайте посмотрим, как вручную настроить идентификатор маршрутизатора."
    ]
  },
  {
    "time": [
      1522.24,
      1526.94
    ],
    "en": [
      "From OSPF configuration mode, use the ROUTER-ID command."
    ],
    "ru": [
      "В режиме конфигурации OSPF используйте команду ROUTER-ID."
    ]
  },
  {
    "time": [
      1526.94,
      1533.53
    ],
    "en": [
      "This is a little different from EIGRP, in EIGRP the command is EIGRP ROUTER-ID, but"
    ],
    "ru": [
      "Это немного отличается от EIGRP, в EIGRP используется команда EIGRP ROUTER-ID, но"
    ]
  },
  {
    "time": [
      1533.53,
      1536.46
    ],
    "en": [
      "in OSPF it’s just ROUTER-ID."
    ],
    "ru": [
      "в OSPF это просто ROUTER-ID."
    ]
  },
  {
    "time": [
      1536.46,
      1543.58
    ],
    "en": [
      "So, I entered a router ID of 1.1.1.1, but then the router displayed this message."
    ],
    "ru": [
      "Итак, я ввел идентификатор маршрутизатора 1.1.1.1, но затем маршрутизатор отобразил это сообщение."
    ]
  },
  {
    "time": [
      1543.58,
      1549.08
    ],
    "en": [
      "Reload or use ‘clear ip ospf process’ command, for this to take effect’."
    ],
    "ru": [
      "Перезагрузите или используйте команду «clear ip ospf process», чтобы это вступило в силу »."
    ]
  },
  {
    "time": [
      1549.08,
      1557.95
    ],
    "en": [
      "So currently, the router ID is still 172.16.1.14, to make 1.1.1.1 take effect we have to either"
    ],
    "ru": [
      "Таким образом, в настоящее время идентификатор маршрутизатора по-прежнему 172.16.1.14, чтобы 1.1.1.1 вступил в силу, мы должны либо"
    ]
  },
  {
    "time": [
      1557.95,
      1562.96
    ],
    "en": [
      "reload the router or use that command to clear the OSPF process and reset it."
    ],
    "ru": [
      "перезагрузите маршрутизатор или используйте эту команду для очистки процесса OSPF и его сброса."
    ]
  },
  {
    "time": [
      1562.96,
      1570.309
    ],
    "en": [
      "I did that, from privileged exec mode I used the command CLEAR IP OSPF PROCESS."
    ],
    "ru": [
      "Я сделал это из привилегированного режима exec, я использовал команду CLEAR IP OSPF PROCESS."
    ]
  },
  {
    "time": [
      1570.309,
      1574.39
    ],
    "en": [
      "This basically resets OSPF on the router."
    ],
    "ru": [
      "Это в основном сбрасывает OSPF на маршрутизаторе."
    ]
  },
  {
    "time": [
      1574.39,
      1578.929
    ],
    "en": [
      "This is a bad idea in a real network, and the router will lose all of its OSPF routes"
    ],
    "ru": [
      "Это плохая идея в реальной сети, и маршрутизатор потеряет все свои маршруты OSPF."
    ]
  },
  {
    "time": [
      1578.929,
      1583.789
    ],
    "en": [
      "for a short time and won’t be able to forward traffic to those destinations."
    ],
    "ru": [
      "на короткое время и не сможет перенаправлять трафик по этим направлениям."
    ]
  },
  {
    "time": [
      1583.789,
      1587.019
    ],
    "en": [
      "In a lab like this, however, it’s not a problem."
    ],
    "ru": [
      "Однако в такой лаборатории это не проблема."
    ]
  },
  {
    "time": [
      1587.019,
      1591.03
    ],
    "en": [
      "As a side note, notice the ‘no’ in square brackets."
    ],
    "ru": [
      "В качестве примечания обратите внимание на «нет» в квадратных скобках."
    ]
  },
  {
    "time": [
      1591.03,
      1595.97
    ],
    "en": [
      "When you see this after entering a command, it means ‘no’ is the default choice."
    ],
    "ru": [
      "Когда вы видите это после ввода команды, это означает, что по умолчанию выбран вариант «Нет»."
    ]
  },
  {
    "time": [
      1595.97,
      1601.7
    ],
    "en": [
      "If you just press enter, the router will assume ‘no’ and not clear the OSPF process."
    ],
    "ru": [
      "Если вы просто нажмете клавишу ввода, маршрутизатор примет ответ «нет» и не очистит процесс OSPF."
    ]
  },
  {
    "time": [
      1601.7,
      1604.85
    ],
    "en": [
      "However I typed ‘yes’, so it was cleared."
    ],
    "ru": [
      "Однако я набрал «да», и это было снято."
    ]
  },
  {
    "time": [
      1604.85,
      1613.04
    ],
    "en": [
      "Then I did SHOW IP PROTOCOLS again and you can see that the router ID is now 1.1.1.1."
    ],
    "ru": [
      "Затем я снова сделал ПОКАЗАТЬ IP-ПРОТОКОЛЫ, и вы видите, что теперь идентификатор маршрутизатора - 1.1.1.1."
    ]
  },
  {
    "time": [
      1613.04,
      1615.61
    ],
    "en": [
      "Now let’s look at the rest of the command."
    ],
    "ru": [
      "Теперь давайте посмотрим на оставшуюся часть команды."
    ]
  },
  {
    "time": [
      1615.61,
      1619.78
    ],
    "en": [
      "Take a look here, ‘It is an autonomous system boundary router’."
    ],
    "ru": [
      "Посмотрите здесь: «Это граничный маршрутизатор автономной системы»."
    ]
  },
  {
    "time": [
      1619.78,
      1626.73
    ],
    "en": [
      "An autonomous system boundary router, or ASBR, is an OSPF router that connects the OSPF network"
    ],
    "ru": [
      "Граничный маршрутизатор автономной системы или ASBR - это маршрутизатор OSPF, который соединяет сеть OSPF."
    ]
  },
  {
    "time": [
      1626.73,
      1628.54
    ],
    "en": [
      "to an external network."
    ],
    "ru": [
      "во внешнюю сеть."
    ]
  },
  {
    "time": [
      1628.54,
      1631.35
    ],
    "en": [
      "R1 is connected to the Internet."
    ],
    "ru": [
      "R1 подключен к Интернету."
    ]
  },
  {
    "time": [
      1631.35,
      1636.899
    ],
    "en": [
      "By using the DEFAULT-INFORMATION ORIGINATE command, R1 becomes an ASBR, it connects the"
    ],
    "ru": [
      "Используя команду DEFAULT-INFORMATION ORIGINATE, R1 становится ASBR, он подключает"
    ]
  },
  {
    "time": [
      1636.899,
      1639.11
    ],
    "en": [
      "OSPF network to the Internet."
    ],
    "ru": [
      "Сеть OSPF в Интернет."
    ]
  },
  {
    "time": [
      1639.11,
      1643.909
    ],
    "en": [
      "So, that’s why we see this output here on R1."
    ],
    "ru": [
      "Итак, вот почему мы видим этот вывод здесь, на R1."
    ]
  },
  {
    "time": [
      1643.909,
      1646.82
    ],
    "en": [
      "Next up, number of areas in this router is 1."
    ],
    "ru": [
      "Далее, количество областей в этом маршрутизаторе равно 1."
    ]
  },
  {
    "time": [
      1646.82,
      1651.69
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
      1646.82,
      1651.69
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
      1651.69,
      1656.21
    ],
    "en": [
      "These are three different types of OSPF areas, it’s not necessary to know about the different"
    ],
    "ru": [
      "Это три разных типа областей OSPF, о разных"
    ]
  },
  {
    "time": [
      1656.21,
      1660.74
    ],
    "en": [
      "types for the CCNA, just wanted to point out that you can see the number of areas this"
    ],
    "ru": [
      "типов для CCNA, просто хотел указать, что вы можете увидеть количество областей,"
    ]
  },
  {
    "time": [
      1660.74,
      1665.24
    ],
    "en": [
      "router is in, just one because this is single-area OSPF."
    ],
    "ru": [
      "Маршрутизатор включен, только один, потому что это OSPF с одной областью."
    ]
  },
  {
    "time": [
      1665.24,
      1669.07
    ],
    "en": [
      "Next, maximum paths is 4."
    ],
    "ru": [
      "Далее, максимальное количество путей - 4."
    ]
  },
  {
    "time": [
      1669.07,
      1676.769
    ],
    "en": [
      "Unlike EIGRP, OSPF doesn’t support unequal-cost load-balancing, but it does support ECMP load-balancing"
    ],
    "ru": [
      "В отличие от EIGRP, OSPF не поддерживает балансировку нагрузки с неравной стоимостью, но поддерживает балансировку нагрузки ECMP."
    ]
  },
  {
    "time": [
      1676.769,
      1680.2
    ],
    "en": [
      "over a maximum of 4 paths by default."
    ],
    "ru": [
      "по умолчанию не более 4 путей."
    ]
  },
  {
    "time": [
      1680.2,
      1687.799
    ],
    "en": [
      "To change the maximum number of paths, use the MAXIMUM-PATHS command just like in RIP and EIGRP."
    ],
    "ru": [
      "Чтобы изменить максимальное количество путей, используйте команду MAXIMUM-PATHS, как в RIP и EIGRP."
    ]
  },
  {
    "time": [
      1687.799,
      1690.4
    ],
    "en": [
      "and EIGRP. Here I changed the number to 8."
    ],
    "ru": [
      "и EIGRP. Здесь я изменил цифру на 8."
    ]
  },
  {
    "time": [
      1690.4,
      1694.669
    ],
    "en": [
      "The ‘routing for networks’ section shows the network commands we used."
    ],
    "ru": [
      "В разделе «Маршрутизация для сетей» показаны сетевые команды, которые мы использовали."
    ]
  },
  {
    "time": [
      1694.669,
      1700.86
    ],
    "en": [
      "To repeat myself, this only determines which interfaces OSPF will be activated on, it doesn’t"
    ],
    "ru": [
      "Повторюсь, это только определяет, на каких интерфейсах будет активирован OSPF, но не"
    ]
  },
  {
    "time": [
      1700.86,
      1704.69
    ],
    "en": [
      "tell OSPF to flood LSAs for these specific networks."
    ],
    "ru": [
      "указать OSPF лавинной рассылкой LSA для этих конкретных сетей."
    ]
  },
  {
    "time": [
      1704.69,
      1710.73
    ],
    "en": [
      "Here’s the passive interface we configured, and here are R1’s neighbors."
    ],
    "ru": [
      "Вот настроенный нами пассивный интерфейс и соседи R1."
    ]
  },
  {
    "time": [
      1710.73,
      1717.029
    ],
    "en": [
      "Notice the router IDs, I configured these loopback interfaces on R2, R3, and R4 and"
    ],
    "ru": [
      "Обратите внимание на идентификаторы маршрутизаторов, я настроил эти интерфейсы обратной связи на R2, R3 и R4 и"
    ]
  },
  {
    "time": [
      1717.029,
      1719.62
    ],
    "en": [
      "their IP addresses became the router IDs."
    ],
    "ru": [
      "их IP-адреса стали идентификаторами маршрутизатора."
    ]
  },
  {
    "time": [
      1719.62,
      1726.66
    ],
    "en": [
      "Finally, down here OSPF’s AD is displayed, the default is 110 as you know."
    ],
    "ru": [
      "Наконец, внизу отображается AD OSPF, по умолчанию, как вы знаете, 110."
    ]
  },
  {
    "time": [
      1726.66,
      1731.67
    ],
    "en": [
      "If you want to change it, the command is the same as for RIP and EIGRP."
    ],
    "ru": [
      "Если вы хотите его изменить, команда такая же, как для RIP и EIGRP."
    ]
  },
  {
    "time": [
      1731.67,
      1736.4
    ],
    "en": [
      "From OSPF configuration mode, just use the command DISTANCE."
    ],
    "ru": [
      "В режиме конфигурации OSPF просто используйте команду DISTANCE."
    ]
  },
  {
    "time": [
      1736.4,
      1742.639
    ],
    "en": [
      "For example, I changed it to 85, so OSPF routes are preferred over EIGRP routes on this router."
    ],
    "ru": [
      "Например, я изменил его на 85, поэтому маршруты OSPF предпочтительнее маршрутов EIGRP на этом маршрутизаторе."
    ]
  },
  {
    "time": [
      1742.639,
      1744.57
    ],
    "en": [
      "That’s all for the lecture."
    ],
    "ru": [
      "Это все для лекции."
    ]
  },
  {
    "time": [
      1744.57,
      1748.539
    ],
    "en": [
      "We covered a lot of information, but lots of it is similar to or the same as what we"
    ],
    "ru": [
      "Мы рассмотрели много информации, но многие из них похожи на то, что мы"
    ]
  },
  {
    "time": [
      1748.539,
      1751.26
    ],
    "en": [
      "learned about RIP and EIGRP."
    ],
    "ru": [
      "узнал про RIP и EIGRP."
    ]
  },
  {
    "time": [
      1751.26,
      1754.5
    ],
    "en": [
      "Of course, there was plenty of new information too."
    ],
    "ru": [
      "Конечно, было много новой информации."
    ]
  },
  {
    "time": [
      1754.5,
      1757.11
    ],
    "en": [
      "Before moving on to the quiz, let’s review what we covered."
    ],
    "ru": [
      "Прежде чем перейти к викторине, давайте рассмотрим, что мы рассмотрели."
    ]
  },
  {
    "time": [
      1757.11,
      1763.7
    ],
    "en": [
      "I gave a basic overview of OSPF operations, including a very brief look at LSAs, which"
    ],
    "ru": [
      "Я дал базовый обзор операций OSPF, включая очень краткий обзор LSA, которые"
    ]
  },
  {
    "time": [
      1763.7,
      1765.789
    ],
    "en": [
      "we will cover in more depth later."
    ],
    "ru": [
      "мы рассмотрим более подробно позже."
    ]
  },
  {
    "time": [
      1765.789,
      1769.09
    ],
    "en": [
      "I introduced OSPF areas."
    ],
    "ru": [
      "Я представил области OSPF."
    ]
  },
  {
    "time": [
      1769.09,
      1777.14
    ],
    "en": [
      "Although the CCNA only requires you to configure single-area OSPF, you still need a basic understanding of OSPF areas."
    ],
    "ru": [
      "Хотя CCNA требует, чтобы вы только сконфигурировали OSPF для одной области, вам все же необходимо базовое понимание областей OSPF."
    ]
  },
  {
    "time": [
      1777.14,
      1782.769
    ],
    "en": [
      "of OSPF areas. Make sure to remember those basic OSPF rules and terms like area border router, ABR, and"
    ],
    "ru": [
      "площадей ОСПП. Обязательно запомните эти основные правила и термины OSPF, такие как граничный маршрутизатор области, ABR и"
    ]
  },
  {
    "time": [
      1782.769,
      1786.659
    ],
    "en": [
      "autonomous system boundary router, ASBR."
    ],
    "ru": [
      "граничный маршрутизатор автономной системы, ASBR."
    ]
  },
  {
    "time": [
      1786.659,
      1790.01
    ],
    "en": [
      "Finally we looked at some basic OSPF configurations."
    ],
    "ru": [
      "Наконец, мы рассмотрели некоторые базовые конфигурации OSPF."
    ]
  },
  {
    "time": [
      1790.01,
      1795.39
    ],
    "en": [
      "Most of these were the same as in RIP and EIGRP, with a few minor differences."
    ],
    "ru": [
      "Большинство из них были такими же, как в RIP и EIGRP, с небольшими отличиями."
    ]
  },
  {
    "time": [
      1795.39,
      1799.3
    ],
    "en": [
      "Make sure to watch until the end of the quiz for a bonus question from Boson ExSim for"
    ],
    "ru": [
      "Обязательно просмотрите до конца викторины бонусный вопрос от Boson ExSim для"
    ]
  },
  {
    "time": [
      1799.3,
      1805.83
    ],
    "en": [
      "CCNA, the best practice exams for the CCNA and the ones I used myself to prepare."
    ],
    "ru": [
      "CCNA, лучшие практические экзамены для CCNA и те, которые я готовил сам."
    ]
  },
  {
    "time": [
      1805.83,
      1809.87
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
      1809.87,
      1813.09
    ],
    "en": [
      "Here’s quiz question 1."
    ],
    "ru": [
      "Вот первый вопрос викторины."
    ]
  },
  {
    "time": [
      1813.09,
      1817.62
    ],
    "en": [
      "Which of the following statements about OSPF are not true? Select two."
    ],
    "ru": [
      "Какие из следующих утверждений об OSPF не соответствуют действительности? Выберите два."
    ]
  },
  {
    "time": [
      1817.62,
      1825.64
    ],
    "en": [
      "Select two. A, In multi-area OSPF networks, all non-backbone areas must have an ABR connected to area 0."
    ],
    "ru": [
      "Выберите два. A. В многозонных сетях OSPF все не магистральные области должны иметь ABR, подключенный к области 0."
    ]
  },
  {
    "time": [
      1825.64,
      1830.059
    ],
    "en": [
      "B, Single-area OSPF must use area 0."
    ],
    "ru": [
      "B: OSPF с одной областью должен использовать область 0."
    ]
  },
  {
    "time": [
      1830.059,
      1836.029
    ],
    "en": [
      "C, Two OSPF routers with different process IDs can become OSPF neighbors."
    ],
    "ru": [
      "C. Два маршрутизатора OSPF с разными идентификаторами процесса могут стать соседями OSPF."
    ]
  },
  {
    "time": [
      1836.029,
      1841.039
    ],
    "en": [
      "D, The OSPF area must be specified in the network command."
    ],
    "ru": [
      "D. Область OSPF должна быть указана в сетевой команде."
    ]
  },
  {
    "time": [
      1841.039,
      1848.65
    ],
    "en": [
      "E, An ASBR connects the internal OSPF network to networks outside of the OSPF domain."
    ],
    "ru": [
      "E, ASBR соединяет внутреннюю сеть OSPF с сетями за пределами домена OSPF."
    ]
  },
  {
    "time": [
      1848.65,
      1853.76
    ],
    "en": [
      "And F, The OSPF process ID must match the area number."
    ],
    "ru": [
      "И F, идентификатор процесса OSPF должен соответствовать номеру области."
    ]
  },
  {
    "time": [
      1853.76,
      1858.929
    ],
    "en": [
      "Pause the video to think about the answers, select two."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над ответами, выберите два."
    ]
  },
  {
    "time": [
      1858.929,
      1865.57
    ],
    "en": [
      "The answers are B and F. Although it is common practice to use area 0 for single-area OSPF,"
    ],
    "ru": [
      "Ответы: B и F. Хотя обычно используется область 0 для OSPF с одной областью,"
    ]
  },
  {
    "time": [
      1865.57,
      1867.99
    ],
    "en": [
      "you can actually use any area."
    ],
    "ru": [
      "вы действительно можете использовать любую область."
    ]
  },
  {
    "time": [
      1867.99,
      1871.46
    ],
    "en": [
      "And the OSPF process ID does not have to match the area number."
    ],
    "ru": [
      "И идентификатор процесса OSPF не обязательно должен совпадать с номером области."
    ]
  },
  {
    "time": [
      1871.46,
      1877.62
    ],
    "en": [
      "In fact, in multi-area OSPF there will be multiple areas operating in a single process,"
    ],
    "ru": [
      "Фактически, в OSPF с несколькими областями будет несколько областей, работающих в одном процессе,"
    ]
  },
  {
    "time": [
      1877.62,
      1881.87
    ],
    "en": [
      "so it’s impossible to match the process ID to all area IDs."
    ],
    "ru": [
      "поэтому невозможно сопоставить идентификатор процесса со всеми идентификаторами области."
    ]
  },
  {
    "time": [
      1881.87,
      1883.549
    ],
    "en": [
      "The other statements are all true."
    ],
    "ru": [
      "Все остальные утверждения верны."
    ]
  },
  {
    "time": [
      1883.549,
      1887.139
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
      1887.139,
      1893.23
    ],
    "en": [
      "You want to activate OSPF on R1’s G0/1 and G0/2 interfaces with a single command."
    ],
    "ru": [
      "Вы хотите активировать OSPF на интерфейсах G0 / 1 и G0 / 2 маршрутизатора R1 с помощью одной команды."
    ]
  },
  {
    "time": [
      1893.23,
      1903.279
    ],
    "en": [
      "G0/1’s IP address is 10.0.12.1/28, and G0/2’s IP address is 10.0.13.1/26."
    ],
    "ru": [
      "IP-адрес G0 / 1 - 10.0.12.1/28, а IP-адрес G0 / 2 - 10.0.13.1/26."
    ]
  },
  {
    "time": [
      1903.279,
      1906.799
    ],
    "en": [
      "Which of the following commands should you use on R1?"
    ],
    "ru": [
      "Какие из следующих команд вы должны использовать на R1?"
    ]
  },
  {
    "time": [
      1906.799,
      1914.28
    ],
    "en": [
      "Here are the commands, A, B, C, and D. Pause the video now to look at the commands and"
    ],
    "ru": [
      "Вот команды: A, B, C и D. Теперь приостановите видео, чтобы просмотреть команды и"
    ]
  },
  {
    "time": [
      1914.28,
      1919.4
    ],
    "en": [
      "find the correct answer."
    ],
    "ru": [
      "найди правильный ответ."
    ]
  },
  {
    "time": [
      1919.4,
      1927.419
    ],
    "en": [
      "The answer is C, NETWORK 10.0.12.0 0.0.1.255 area 0."
    ],
    "ru": [
      "Ответ: C, СЕТЬ 10.0.12.0 0.0.1.255, область 0."
    ]
  },
  {
    "time": [
      1927.419,
      1931.53
    ],
    "en": [
      "This is the only option that contains both IP addresses in its range, so it’s the only"
    ],
    "ru": [
      "Это единственный вариант, который содержит оба IP-адреса в своем диапазоне, поэтому он единственный"
    ]
  },
  {
    "time": [
      1931.53,
      1934.39
    ],
    "en": [
      "one that activates OSPF on both interfaces."
    ],
    "ru": [
      "тот, который активирует OSPF на обоих интерфейсах."
    ]
  },
  {
    "time": [
      1934.39,
      1938.0
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
      1938.0,
      1941.159
    ],
    "en": [
      "Answer the following questions about the OSPF network below."
    ],
    "ru": [
      "Ответьте на следующие вопросы о сети OSPF ниже."
    ]
  },
  {
    "time": [
      1941.159,
      1944.309
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
      1941.159,
      1944.309
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
      1944.309,
      1947.39
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
      1944.309,
      1947.39
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
      1947.39,
      1950.649
    ],
    "en": [
      "And 3, How many ASBRs are there?"
    ],
    "ru": [
      "И 3, сколько существует ASBR?"
    ]
  },
  {
    "time": [
      1950.649,
      1957.62
    ],
    "en": [
      "Pause the video now to answer each of these questions."
    ],
    "ru": [
      "Приостановите видео сейчас, чтобы ответить на каждый из этих вопросов."
    ]
  },
  {
    "time": [
      1957.62,
      1960.34
    ],
    "en": [
      "Okay let’s check each of them."
    ],
    "ru": [
      "Хорошо, давайте проверим каждую из них."
    ]
  },
  {
    "time": [
      1960.34,
      1964.279
    ],
    "en": [
      "How many backbone routers are there? There are 4."
    ],
    "ru": [
      "Сколько существует магистральных маршрутизаторов? Их 4."
    ]
  },
  {
    "time": [
      1964.279,
      1968.009
    ],
    "en": [
      "There are 4. These 4 routers are backbone routers because they all have at least one interface in the"
    ],
    "ru": [
      "Их 4. Эти 4 маршрутизатора являются магистральными, потому что все они имеют как минимум один интерфейс в"
    ]
  },
  {
    "time": [
      1968.009,
      1969.97
    ],
    "en": [
      "backbone area, area 0."
    ],
    "ru": [
      "область позвоночника, область 0."
    ]
  },
  {
    "time": [
      1969.97,
      1974.58
    ],
    "en": [
      "Now, how many ABRs are there? There are 3."
    ],
    "ru": [
      "Итак, сколько существует ABR? Их 3."
    ]
  },
  {
    "time": [
      1974.58,
      1980.75
    ],
    "en": [
      "There are 3. These 3 routers have interfaces in 2 separate areas, so they are ABRs, area border routers."
    ],
    "ru": [
      "Их 3. Эти 3 маршрутизатора имеют интерфейсы в 2 отдельных областях, поэтому они являются ABR, граничными маршрутизаторами области."
    ]
  },
  {
    "time": [
      1980.75,
      1984.0
    ],
    "en": [
      "Finally, how many ASBRs are there?"
    ],
    "ru": [
      "Наконец, сколько существует ASBR?"
    ]
  },
  {
    "time": [
      1984.0,
      1989.73
    ],
    "en": [
      "Just one, This router here connects the OSPF network to the Internet, and likely advertises"
    ],
    "ru": [
      "Только один, этот маршрутизатор здесь подключает сеть OSPF к Интернету и, вероятно, рекламирует"
    ]
  },
  {
    "time": [
      1989.73,
      1992.159
    ],
    "en": [
      "a default route into the OSPF domain."
    ],
    "ru": [
      "маршрут по умолчанию в домен OSPF."
    ]
  },
  {
    "time": [
      1992.159,
      1996.32
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
      1996.32,
      2000.669
    ],
    "en": [
      "Which of the following commands will make R1 an OSPF ASBR?"
    ],
    "ru": [
      "Какая из следующих команд сделает R1 OSPF ASBR?"
    ]
  },
  {
    "time": [
      2000.669,
      2001.75
    ],
    "en": [
      "Here are the options."
    ],
    "ru": [
      "Вот варианты."
    ]
  },
  {
    "time": [
      2001.75,
      2012.98
    ],
    "en": [
      "A, B, C, and D. Pause the video to look at the options and select the best answer."
    ],
    "ru": [
      "A, B, C и D. Приостановите видео, чтобы просмотреть варианты и выбрать лучший ответ."
    ]
  },
  {
    "time": [
      2012.98,
      2018.139
    ],
    "en": [
      "The correct answer is B, which first configures a default route and then advertises it into"
    ],
    "ru": [
      "Правильный ответ - B, который сначала настраивает маршрут по умолчанию, а затем объявляет его в"
    ]
  },
  {
    "time": [
      2018.139,
      2022.639
    ],
    "en": [
      "OSPF using the DEFAULT-INFORMATION ORIGINATE command."
    ],
    "ru": [
      "OSPF с помощью команды DEFAULT-INFORMATION ORIGINATE."
    ]
  },
  {
    "time": [
      2022.639,
      2029.269
    ],
    "en": [
      "Option A simply configures two network commands which activates OSPF on the specified interfaces."
    ],
    "ru": [
      "Вариант A просто настраивает две сетевые команды, которые активируют OSPF на указанных интерфейсах."
    ]
  },
  {
    "time": [
      2029.269,
      2038.47
    ],
    "en": [
      "Option C activates OSPF on ALL interfaces with an IP address, since all IP addresses match 0.0.0.0/0."
    ],
    "ru": [
      "Вариант C активирует OSPF на ВСЕХ интерфейсах с IP-адресом, поскольку все IP-адреса совпадают с 0.0.0.0/0."
    ]
  },
  {
    "time": [
      2038.47,
      2040.21
    ],
    "en": [
      "match 0.0.0.0/0. Option D is not a real command."
    ],
    "ru": [
      "совпадение 0.0.0.0/0. Вариант D - ненастоящая команда."
    ]
  },
  {
    "time": [
      2040.21,
      2044.2
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
      2044.2,
      2048.3
    ],
    "en": [
      "Which command can be used to manually configure the OSPF router ID?"
    ],
    "ru": [
      "Какую команду можно использовать для ручной настройки идентификатора маршрутизатора OSPF?"
    ]
  },
  {
    "time": [
      2048.3,
      2049.819
    ],
    "en": [
      "Here are the commands."
    ],
    "ru": [
      "Вот команды."
    ]
  },
  {
    "time": [
      2049.819,
      2061.77
    ],
    "en": [
      "A, B, C, and D. Pause the video to examine the commands and select the correct answer."
    ],
    "ru": [
      "A, B, C и D. Поставьте видео на паузу, чтобы изучить команды и выбрать правильный ответ."
    ]
  },
  {
    "time": [
      2061.77,
      2069.579
    ],
    "en": [
      "The correct answer is A, ROUTER-ID 1.1.1.1, entered in OSPF configuration mode."
    ],
    "ru": [
      "Правильный ответ - A, ROUTER-ID 1.1.1.1, введенный в режиме конфигурации OSPF."
    ]
  },
  {
    "time": [
      2069.579,
      2079.02
    ],
    "en": [
      "The command to manually configure the EIGRP router ID is EIGRP ROUTER-ID, but for OSPF it’s just ROUTER-ID."
    ],
    "ru": [
      "Команда для ручной настройки идентификатора маршрутизатора EIGRP - это идентификатор EIGRP ROUTER-ID, но для OSPF это просто идентификатор ROUTER-ID."
    ]
  },
  {
    "time": [
      2079.02,
      2082.79
    ],
    "en": [
      "it’s just ROUTER-ID. Option C configures an IP address on a loopback interface."
    ],
    "ru": [
      "это просто ROUTER-ID. Вариант C настраивает IP-адрес на интерфейсе обратной связи."
    ]
  },
  {
    "time": [
      2082.79,
      2087.679
    ],
    "en": [
      "If the router ID isn’t manually configured this IP address might become the OSPF router"
    ],
    "ru": [
      "Если идентификатор маршрутизатора не настроен вручную, этот IP-адрес может стать маршрутизатором OSPF."
    ]
  },
  {
    "time": [
      2087.679,
      2091.61
    ],
    "en": [
      "ID, but it’s different than manually configuring the router ID."
    ],
    "ru": [
      "ID, но это отличается от настройки идентификатора маршрутизатора вручную."
    ]
  },
  {
    "time": [
      2091.61,
      2098.1
    ],
    "en": [
      "That’s all for the quiz, now let’s do a bonus question from Boson ExSim for CCNA."
    ],
    "ru": [
      "Это все для викторины, а теперь давайте зададим дополнительный вопрос от Boson ExSim для CCNA."
    ]
  },
  {
    "time": [
      2098.1,
      2103.41
    ],
    "en": [
      "Okay, here's today's Boson ExSim practice question."
    ],
    "ru": [
      "Хорошо, вот сегодняшний практический вопрос по Boson ExSim."
    ]
  },
  {
    "time": [
      2103.41,
      2106.27
    ],
    "en": [
      "You administer the OSPF network above."
    ],
    "ru": [
      "Вы администрируете сеть OSPF, указанную выше."
    ]
  },
  {
    "time": [
      2106.27,
      2110.35
    ],
    "en": [
      "You issue the DEFAULT-INFORMATION ORIGINATE command on RouterA."
    ],
    "ru": [
      "Вы вводите команду DEFAULT-INFORMATION ORIGINATE на RouterA."
    ]
  },
  {
    "time": [
      2110.35,
      2114.49
    ],
    "en": [
      "Which of the following statements are true? Select 2 choices."
    ],
    "ru": [
      "Какие из следующих утверждений верны? Выберите 2 варианта."
    ]
  },
  {
    "time": [
      2114.49,
      2118.31
    ],
    "en": [
      "Select 2 choices. A, OSPF will advertise RouterA's gateway of last resort."
    ],
    "ru": [
      "Выберите 2 варианта. A, OSPF анонсирует последний шлюз RouterA."
    ]
  },
  {
    "time": [
      2118.31,
      2122.16
    ],
    "en": [
      "B, RouterA will become the OSPF ABR."
    ],
    "ru": [
      "B, RouterA станет OSPF ABR."
    ]
  },
  {
    "time": [
      2122.16,
      2126.64
    ],
    "en": [
      "C, OSPF will summarize all of RouterA's directly connected routes."
    ],
    "ru": [
      "C, OSPF суммирует все маршруты, напрямую подключенные RouterA."
    ]
  },
  {
    "time": [
      2126.64,
      2130.95
    ],
    "en": [
      "D, RouterA will become the OSPF ASBR."
    ],
    "ru": [
      "D, RouterA станет OSPF ASBR."
    ]
  },
  {
    "time": [
      2130.95,
      2135.17
    ],
    "en": [
      "And E, OSPF will redistribute all of RouterA's directly connected routes."
    ],
    "ru": [
      "И E, OSPF перераспределит все маршруты, напрямую подключенные RouterA."
    ]
  },
  {
    "time": [
      2135.17,
      2144.3
    ],
    "en": [
      "Okay, so pause the video here to think about your answer."
    ],
    "ru": [
      "Хорошо, поэтому остановите видео здесь, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      2144.3,
      2146.15
    ],
    "en": [
      "Okay, so let's check the answer."
    ],
    "ru": [
      "Хорошо, давайте проверим ответ."
    ]
  },
  {
    "time": [
      2146.15,
      2148.27
    ],
    "en": [
      "So there are two choices."
    ],
    "ru": [
      "Итак, есть два варианта."
    ]
  },
  {
    "time": [
      2148.27,
      2152.41
    ],
    "en": [
      "We used the DEFAULT-INFORMATION ORIGINATE command, which we just covered in this video"
    ],
    "ru": [
      "Мы использовали команду DEFAULT-INFORMATION ORIGINATE, которую мы только что рассмотрели в этом видео."
    ]
  },
  {
    "time": [
      2152.41,
      2155.359
    ],
    "en": [
      "as well as the previous video on RIP and EIGRP."
    ],
    "ru": [
      "а также предыдущее видео о RIP и EIGRP."
    ]
  },
  {
    "time": [
      2155.359,
      2161.74
    ],
    "en": [
      "So, what this command does is it advertises the router's default route into that routing"
    ],
    "ru": [
      "Итак, эта команда объявляет маршрут маршрутизатора по умолчанию в этой маршрутизации."
    ]
  },
  {
    "time": [
      2161.74,
      2164.589
    ],
    "en": [
      "protocol, OSPF in this case."
    ],
    "ru": [
      "протокол, в данном случае OSPF."
    ]
  },
  {
    "time": [
      2164.589,
      2167.73
    ],
    "en": [
      "So that means A is one of the correct options."
    ],
    "ru": [
      "Это означает, что A - один из правильных вариантов."
    ]
  },
  {
    "time": [
      2167.73,
      2172.41
    ],
    "en": [
      "OSPF will advertise RouterA's gateway of last resort, that is the default route."
    ],
    "ru": [
      "OSPF анонсирует последний шлюз RouterA, то есть маршрут по умолчанию."
    ]
  },
  {
    "time": [
      2172.41,
      2178.49
    ],
    "en": [
      "Okay, next, it's either B or D, is the second correct choice."
    ],
    "ru": [
      "Хорошо, затем, либо B, либо D, это второй правильный выбор."
    ]
  },
  {
    "time": [
      2178.49,
      2185.42
    ],
    "en": [
      "Will RouterA become the OSPF ABR, or will RouterA become the OSPF ASBR?"
    ],
    "ru": [
      "Станет ли RouterA ABR OSPF или RouterA станет OSPF ASBR?"
    ]
  },
  {
    "time": [
      2185.42,
      2188.02
    ],
    "en": [
      "So, an ABR is an Area Border Router."
    ],
    "ru": [
      "Итак, ABR - это пограничный маршрутизатор области."
    ]
  },
  {
    "time": [
      2188.02,
      2194.26
    ],
    "en": [
      "It is an OSPF router that has interfaces in 2 separate OSPF areas, usually area 0, the"
    ],
    "ru": [
      "Это маршрутизатор OSPF, который имеет интерфейсы в 2 отдельных областях OSPF, обычно в области 0,"
    ]
  },
  {
    "time": [
      2194.26,
      2196.869
    ],
    "en": [
      "backbone area, and one other area."
    ],
    "ru": [
      "область позвоночника и еще одна область."
    ]
  },
  {
    "time": [
      2196.869,
      2202.99
    ],
    "en": [
      "Now, an ASBR, Autonomous System Boundary Router, is an OSPF router that is connected to an"
    ],
    "ru": [
      "Теперь ASBR, пограничный маршрутизатор автономной системы, представляет собой маршрутизатор OSPF, который подключен к"
    ]
  },
  {
    "time": [
      2202.99,
      2206.49
    ],
    "en": [
      "external network, outside of the OSPF domain."
    ],
    "ru": [
      "внешняя сеть вне домена OSPF."
    ]
  },
  {
    "time": [
      2206.49,
      2212.52
    ],
    "en": [
      "And it shares information into the OSPF domain about those external networks."
    ],
    "ru": [
      "И он передает информацию об этих внешних сетях в домен OSPF."
    ]
  },
  {
    "time": [
      2212.52,
      2218.92
    ],
    "en": [
      "So that makes D the correct answer, because this default route is probably a route to"
    ],
    "ru": [
      "Это делает D правильным ответом, потому что этот маршрут по умолчанию, вероятно, является маршрутом к"
    ]
  },
  {
    "time": [
      2218.92,
      2224.46
    ],
    "en": [
      "the Internet, for example, and RouterA advertises that default route into the OSPF domain."
    ],
    "ru": [
      "Интернет, например, и RouterA объявляет этот маршрут по умолчанию в домен OSPF."
    ]
  },
  {
    "time": [
      2224.46,
      2225.72
    ],
    "en": [
      "So let's check the answer."
    ],
    "ru": [
      "Так что давайте проверим ответ."
    ]
  },
  {
    "time": [
      2225.72,
      2228.74
    ],
    "en": [
      "Click on 'show answer' down here."
    ],
    "ru": [
      "Нажмите здесь внизу \"показать ответ\"."
    ]
  },
  {
    "time": [
      2228.74,
      2230.95
    ],
    "en": [
      "And we are correct."
    ],
    "ru": [
      "И мы правы."
    ]
  },
  {
    "time": [
      2230.95,
      2234.45
    ],
    "en": [
      "So this is Boson's explanation of this question."
    ],
    "ru": [
      "Итак, это объяснение этого вопроса Бозоном."
    ]
  },
  {
    "time": [
      2234.45,
      2239.9
    ],
    "en": [
      "Not only why A and D are the correct options, but also why B, C, and E are incorrect."
    ],
    "ru": [
      "Не только то, почему A и D - правильные варианты, но также почему B, C и E неправильные."
    ]
  },
  {
    "time": [
      2239.9,
      2244.78
    ],
    "en": [
      "So, pause the video here if you want to read Boson's explanation."
    ],
    "ru": [
      "Итак, остановите видео здесь, если хотите прочитать объяснение Бозона."
    ]
  },
  {
    "time": [
      2244.78,
      2249.99
    ],
    "en": [
      "In addition to Boson's explanation, there is a reference here to Cisco documentation."
    ],
    "ru": [
      "Помимо объяснения Бозона, здесь есть ссылка на документацию Cisco."
    ]
  },
  {
    "time": [
      2249.99,
      2253.06
    ],
    "en": [
      "OSPF Command Reference: default-information originate."
    ],
    "ru": [
      "Справочник команд OSPF: исходная информация по умолчанию."
    ]
  },
  {
    "time": [
      2253.06,
      2256.63
    ],
    "en": [
      "So, Cisco's documentation is a really great study resource."
    ],
    "ru": [
      "Так что документация Cisco - действительно отличный учебный ресурс."
    ]
  },
  {
    "time": [
      2256.63,
      2261.13
    ],
    "en": [
      "If you ever have any doubts about some certain topic, I recommend doing a Google search,"
    ],
    "ru": [
      "Если у вас возникнут какие-либо сомнения по какой-то определенной теме, я рекомендую выполнить поиск в Google,"
    ]
  },
  {
    "time": [
      2261.13,
      2263.54
    ],
    "en": [
      "and Cisco's documentation often comes up."
    ],
    "ru": [
      "и документация Cisco часто всплывает."
    ]
  },
  {
    "time": [
      2263.54,
      2266.57
    ],
    "en": [
      "So, you can use that as an additional study resource."
    ],
    "ru": [
      "Так что вы можете использовать это как дополнительный учебный ресурс."
    ]
  },
  {
    "time": [
      2266.57,
      2272.71
    ],
    "en": [
      "Okay, so if you want to get a copy of Boson ExSim, please follow the link in the video description."
    ],
    "ru": [
      "Итак, если вы хотите получить копию Boson ExSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      2272.71,
      2279.17
    ],
    "en": [
      "description. These are the practice exams I used when I studied for both my CCNA and CCNP, and I highly recommend them."
    ],
    "ru": [
      "описание. Это практические экзамены, которые я использовал, когда готовился к экзаменам CCNA и CCNP, и я их настоятельно рекомендую."
    ]
  },
  {
    "time": [
      2279.17,
      2284.54
    ],
    "en": [
      "recommend them. So once again, follow that link in the video description."
    ],
    "ru": [
      "рекомендую их. Так что еще раз перейдите по этой ссылке в описании видео."
    ]
  },
  {
    "time": [
      2284.54,
      2288.099
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
      2288.099,
      2290.64
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
      2290.64,
      2296.19
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
      2296.19,
      2298.9
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
      2298.9,
      2302.34
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
      2302.34,
      2307.569
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
      2307.569,
      2312.55
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
      2312.55,
      2318.99
    ],
    "en": [
      "Thank you to Venkatesh, kone, Joshua, Jhilmar, Samil, Ed, Value, Magrathea, Justin, John,"
    ],
    "ru": [
      "Спасибо Венкатешу, Коне, Джошуа, Джилмару, Самилу, Эду, Валю, Магратее, Джастину, Джону,"
    ]
  },
  {
    "time": [
      2318.99,
      2327.099
    ],
    "en": [
      "funnydart, Scott, Hassan, Gerrard, Tibi, Joyce, Marek, velvijaykum, C Mohd, Johan, Mark, Miguel,"
    ],
    "ru": [
      "юморидарт, Скотт, Хасан, Джеррард, Тиби, Джойс, Марек, Велвиджайкум, Си Мохд, Йохан, Марк, Мигель,"
    ]
  },
  {
    "time": [
      2327.099,
      2333.54
    ],
    "en": [
      "Yousif, Sidi, Boson Software, Charlesetta, Devin, Lito, Mike, Yonatan, and Vance."
    ],
    "ru": [
      "Юсиф, Сиди, Boson Software, Шарлесетта, Девин, Лито, Майк, Йонатан и Вэнс."
    ]
  },
  {
    "time": [
      2333.54,
      2338.71
    ],
    "en": [
      "Sorry if I pronounced your name incorrectly, but thank you so much for your support."
    ],
    "ru": [
      "Извините, если я неправильно произнес ваше имя, но большое спасибо за вашу поддержку."
    ]
  },
  {
    "time": [
      2338.71,
      2343.23
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
      2343.23,
      2346.25
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
      2346.25,
      2352.75
    ],
    "en": [
      "This is the list of JCNP-level channel members at the time of recording by the way, August 2nd 2020."
    ],
    "ru": [
      "Это список участников канала уровня JCNP на момент записи, кстати, 2 августа 2020 года."
    ]
  },
  {
    "time": [
      2352.75,
      2359.069
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
      2352.75,
      2359.069
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
      2359.069,
      2360.15
    ],
    "en": [
      "videos. Thank you for watching."
    ],
    "ru": [
      "видео. Спасибо за просмотр."
    ]
  },
  {
    "time": [
      2360.15,
      2364.56
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
      2364.56,
      2367.9
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
      2367.9,
      2370.78
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
      2370.78,
      2377.99
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
      2377.99,
      2377.99
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]