let items = [
  {
    "time": [
      1.03,
      6.979
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
      6.979,
      12.07
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
      12.07,
      18.8
    ],
    "en": [
      "a comment, and share the video to help spread this free series of videos. Thanks for your help."
    ],
    "ru": [
      "комментарий и поделитесь видео, чтобы помочь распространить эту бесплатную серию видео. Спасибо за вашу помощь."
    ]
  },
  {
    "time": [
      18.8,
      23.93
    ],
    "en": [
      "help. In this video we will return to Layer 3, after spending quite a while in Layer 2 studying"
    ],
    "ru": [
      "помощь. В этом видео мы вернемся к уровню 3, потратив некоторое время на изучение уровня 2."
    ]
  },
  {
    "time": [
      23.93,
      32.029
    ],
    "en": [
      "VLANs, DTP, VTP, Spanning Tree, and EtherChannel. This video will start a series of videos on dynamic"
    ],
    "ru": [
      "Сети VLAN, DTP, VTP, Spanning Tree и EtherChannel. Это видео начнет серию видеороликов о динамических"
    ]
  },
  {
    "time": [
      32.029,
      37.21
    ],
    "en": [
      "routing. ‘Dynamic routing’ is in contrast to ‘static routing’, which we covered"
    ],
    "ru": [
      "маршрутизация. «Динамическая маршрутизация» отличается от «статической маршрутизации», которую мы рассмотрели."
    ]
  },
  {
    "time": [
      37.21,
      43.829
    ],
    "en": [
      "in Day 11 of this course. Static routing involves manually configuring routes to each destination"
    ],
    "ru": [
      "в день 11 этого курса. Статическая маршрутизация предполагает ручную настройку маршрутов к каждому пункту назначения."
    ]
  },
  {
    "time": [
      43.829,
      49.839
    ],
    "en": [
      "with the ‘IP ROUTE’ command. Dynamic routing, on the other hand, involves configuring a"
    ],
    "ru": [
      "с помощью команды «IP ROUTE». С другой стороны, динамическая маршрутизация предполагает настройку"
    ]
  },
  {
    "time": [
      49.839,
      54.489
    ],
    "en": [
      "dynamic routing protocol on the router, and then letting the router take care of finding"
    ],
    "ru": [
      "протокол динамической маршрутизации на маршрутизаторе, а затем пусть маршрутизатор позаботится о поиске"
    ]
  },
  {
    "time": [
      54.489,
      61.48
    ],
    "en": [
      "the best routes to destination networks. It’s called ‘dynamic routing’ because it’s not fixed."
    ],
    "ru": [
      "лучшие маршруты к сетям назначения. Это называется «динамической маршрутизацией», потому что она не фиксирована."
    ]
  },
  {
    "time": [
      61.48,
      66.4
    ],
    "en": [
      "If you add a new LAN, routers will automatically inform each other about how to get to that"
    ],
    "ru": [
      "Если вы добавите новую локальную сеть, маршрутизаторы автоматически сообщат друг другу, как к ней подключиться."
    ]
  },
  {
    "time": [
      66.4,
      72.38
    ],
    "en": [
      "new destination network. If one path to a destination becomes unavailable, the routers"
    ],
    "ru": [
      "новая сеть назначения. Если один путь к пункту назначения становится недоступным, маршрутизаторы"
    ]
  },
  {
    "time": [
      72.38,
      78.56
    ],
    "en": [
      "will automatically start using the next-best path. Over these next few videos we’re going"
    ],
    "ru": [
      "автоматически начнет использовать следующий лучший путь. В следующих нескольких видео мы собираемся"
    ]
  },
  {
    "time": [
      78.56,
      86.08
    ],
    "en": [
      "to cover a large portion of the exam topics list. 3.0, IP Connectivity, accounts for 25%"
    ],
    "ru": [
      "чтобы охватить большую часть списка тем экзамена. 3.0, IP-подключение, составляет 25%"
    ]
  },
  {
    "time": [
      86.08,
      92.049
    ],
    "en": [
      "of the CCNA exam, and we’re going to cover almost all of it, just leaving out 3.5 for"
    ],
    "ru": [
      "экзамена CCNA, и мы собираемся покрыть его почти всю, оставив лишь 3,5 для"
    ]
  },
  {
    "time": [
      92.049,
      97.2
    ],
    "en": [
      "later. We’ve already covered some of the topics in here, for example we’ve covered"
    ],
    "ru": [
      "потом. Мы уже рассмотрели некоторые темы здесь, например, мы рассмотрели"
    ]
  },
  {
    "time": [
      97.2,
      104.89
    ],
    "en": [
      "parts of 3.1, 3.2, and 3.3. My plan is to review some parts we missed from here and"
    ],
    "ru": [
      "части 3.1, 3.2 и 3.3. Я планирую просмотреть некоторые части, которые мы пропустили отсюда, и"
    ]
  },
  {
    "time": [
      104.89,
      109.799
    ],
    "en": [
      "give a general overview of dynamic routing protocols in today’s video, give an overview"
    ],
    "ru": [
      "дать общий обзор протоколов динамической маршрутизации в сегодняшнем видео, дать обзор"
    ]
  },
  {
    "time": [
      109.799,
      115.56
    ],
    "en": [
      "of two routing protocols, RIP and EIGRP, in Day 25, and then spend another two or three"
    ],
    "ru": [
      "двух протоколов маршрутизации, RIP и EIGRP, в День 25, а затем потратить еще два или три"
    ]
  },
  {
    "time": [
      115.56,
      120.539
    ],
    "en": [
      "days to cover OSPF, which is actually the only dynamic routing protocol mentioned in"
    ],
    "ru": [
      "дней, чтобы покрыть OSPF, который фактически является единственным протоколом динамической маршрутизации, упомянутым в"
    ]
  },
  {
    "time": [
      120.539,
      126.99
    ],
    "en": [
      "the exam topics list, in 3.4. However, even though OSPF is the only one mentioned, you"
    ],
    "ru": [
      "список тем экзамена, в 3.4. Однако, хотя OSPF - единственный упомянутый, вы"
    ]
  },
  {
    "time": [
      126.99,
      131.15
    ],
    "en": [
      "still need a basic understanding of other dynamic routing protocols, and need to be"
    ],
    "ru": [
      "по-прежнему необходимо базовое понимание других протоколов динамической маршрутизации и"
    ]
  },
  {
    "time": [
      131.15,
      134.9
    ],
    "en": [
      "able to compare and contrast them to OSPF."
    ],
    "ru": [
      "возможность сравнивать и противопоставлять их OSPF."
    ]
  },
  {
    "time": [
      134.9,
      140.909
    ],
    "en": [
      "Here’s what we’ll cover in today’s video. First I’ll give a general overview of dynamic"
    ],
    "ru": [
      "Вот что мы расскажем в сегодняшнем видео. Сначала я дам общий обзор динамических"
    ]
  },
  {
    "time": [
      140.909,
      145.489
    ],
    "en": [
      "routing protocols, to demonstrate how they function and why they’re usually preferred"
    ],
    "ru": [
      "протоколы маршрутизации, чтобы продемонстрировать, как они работают и почему им обычно отдают предпочтение."
    ]
  },
  {
    "time": [
      145.489,
      150.989
    ],
    "en": [
      "over static routes. There are a few types of dynamic routing protocols, so I will break"
    ],
    "ru": [
      "по статическим маршрутам. Существует несколько типов протоколов динамической маршрутизации, поэтому я остановлюсь на"
    ]
  },
  {
    "time": [
      150.989,
      157.57999999999998
    ],
    "en": [
      "them down. We will then take a brief look at dynamic routing protocol metrics. A protocol’s"
    ],
    "ru": [
      "их вниз. Затем мы кратко рассмотрим метрики протокола динамической маршрутизации. Протокол"
    ]
  },
  {
    "time": [
      157.57999999999998,
      162.519
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
      157.57999999999998,
      162.519
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
      162.519,
      167.32999999999998
    ],
    "en": [
      "spanning tree protocol, and it’s used to determine the best route to a destination."
    ],
    "ru": [
      "протокол связующего дерева, и он используется для определения наилучшего маршрута к месту назначения."
    ]
  },
  {
    "time": [
      167.32999999999998,
      172.269
    ],
    "en": [
      "Finally, we’ll talk about something called ‘administrative distance’, which is another"
    ],
    "ru": [
      "Наконец, мы поговорим о так называемом \"административном расстоянии\", которое является еще одним"
    ]
  },
  {
    "time": [
      172.269,
      177.72
    ],
    "en": [
      "part of determining the best route to a destination. Stick around to the end of today’s quiz"
    ],
    "ru": [
      "часть определения наилучшего маршрута к пункту назначения. Дождитесь конца сегодняшней викторины"
    ]
  },
  {
    "time": [
      177.72,
      183.79
    ],
    "en": [
      "for a bonus question from Boson ExSim for CCNA, the best practice exams for the CCNA,"
    ],
    "ru": [
      "на дополнительный вопрос от Boson ExSim для CCNA, лучшие практические экзамены для CCNA,"
    ]
  },
  {
    "time": [
      183.79,
      189.47
    ],
    "en": [
      "and the ones I used when I studied for my CCNA. If you want to get a copy of ExSim,"
    ],
    "ru": [
      "и те, которые я использовал, когда учился на CCNA. Если вы хотите получить копию ExSim,"
    ]
  },
  {
    "time": [
      189.47,
      193.09
    ],
    "en": [
      "follow the link in the description."
    ],
    "ru": [
      "перейдите по ссылке в описании."
    ]
  },
  {
    "time": [
      193.09,
      197.159
    ],
    "en": [
      "Here is the network topology I’ll use for the beginning of this demonstration. Four"
    ],
    "ru": [
      "Вот топология сети, которую я буду использовать в начале этой демонстрации. Четыре"
    ]
  },
  {
    "time": [
      197.159,
      207.92000000000002
    ],
    "en": [
      "routers, R1, R2, R3, and R4, and there is a LAN connected to R4, 192.168.4.0/24. We’ll"
    ],
    "ru": [
      "маршрутизаторы, R1, R2, R3 и R4, и есть LAN, подключенная к R4, 192.168.4.0/24. Хорошо"
    ]
  },
  {
    "time": [
      207.92000000000002,
      213.209
    ],
    "en": [
      "be focusing mostly on R1’s perspective for now. Without configuring any static routes"
    ],
    "ru": [
      "пока сосредоточимся в основном на перспективах R1. Без настройки каких-либо статических маршрутов"
    ]
  },
  {
    "time": [
      213.209,
      218.159
    ],
    "en": [
      "or dynamic routing protocol, R1’s routing table looks like this, just connected and"
    ],
    "ru": [
      "или протокол динамической маршрутизации, таблица маршрутизации R1 выглядит так: только что подключена и"
    ]
  },
  {
    "time": [
      218.159,
      224.45
    ],
    "en": [
      "local routes which were automatically added when IP addresses were configured on its interfaces."
    ],
    "ru": [
      "локальные маршруты, которые были автоматически добавлены при настройке IP-адресов на его интерфейсах."
    ]
  },
  {
    "time": [
      224.45,
      229.27
    ],
    "en": [
      "Let me take a minute to clarify a few points on the exam topics list. These two routes"
    ],
    "ru": [
      "Позвольте мне уточнить несколько моментов в списке тем экзамена. Эти два маршрута"
    ]
  },
  {
    "time": [
      229.27,
      239.719
    ],
    "en": [
      "here, 10.0.12.0/30 and 10.0.13.0/30, are examples of network routes. A network route is simply"
    ],
    "ru": [
      "здесь 10.0.12.0/30 и 10.0.13.0/30 - это примеры сетевых маршрутов. Сетевой маршрут - это просто"
    ]
  },
  {
    "time": [
      239.719,
      247.61
    ],
    "en": [
      "a route to a network or subnet. In other words, a route with a mask length less than /32."
    ],
    "ru": [
      "маршрут к сети или подсети. Другими словами, маршрут с длиной маски меньше / 32."
    ]
  },
  {
    "time": [
      247.61,
      254.42
    ],
    "en": [
      "For example, if we configure a static route to 192.168.4.0/24, that’s a network route"
    ],
    "ru": [
      "Например, если мы настроим статический маршрут на 192.168.4.0/24, это будет сетевой маршрут."
    ]
  },
  {
    "time": [
      254.42,
      261.64
    ],
    "en": [
      "also. It’s not a route to a single host, but a route to a whole subnet. These two routes,"
    ],
    "ru": [
      "также. Это не маршрут к одному узлу, а маршрут ко всей подсети. Эти два пути,"
    ]
  },
  {
    "time": [
      261.64,
      271.01
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
      261.64,
      271.01
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
      271.01,
      278.15
    ],
    "en": [
      "a specific host, a single address, specified with a /32 mask. These two routes here were"
    ],
    "ru": [
      "и интерфейсы G1 / 0. Чтобы настроить статический маршрут к узлу, используйте IP ROUTE, а затем"
    ]
  },
  {
    "time": [
      278.15,
      284.68
    ],
    "en": [
      "automatically added, and are host routes to the specific addresses configured on R1’s G0/0"
    ],
    "ru": [
      "адрес хоста, затем 255.255.255.255, что является маской / 32. Хорошо, это было просто"
    ]
  },
  {
    "time": [
      284.68,
      291.431
    ],
    "en": [
      "and G1/0 interfaces. To configure a static route to a host, use IP ROUTE, followed by"
    ],
    "ru": [
      "в сторону, чтобы вы поняли эти два термина. Теперь поговорим о динамической маршрутизации."
    ]
  },
  {
    "time": [
      291.431,
      300.65
    ],
    "en": [
      "the host’s address, then 255.255.255.255, which is a /32 mask. Okay, that was just an"
    ],
    "ru": [
      "Вместо настройки статических маршрутов на каждом из этих маршрутизаторов мы можем включить динамический"
    ]
  },
  {
    "time": [
      300.65,
      306.9
    ],
    "en": [
      "aside, so you understand those two terms. Now let’s talk about dynamic routing."
    ],
    "ru": [
      "протокол маршрутизации по ним. Затем R4 «анонсирует» эту сеть 192.168.4.0/24 своему соседу,"
    ]
  },
  {
    "time": [
      306.9,
      310.919
    ],
    "en": [
      "Instead of configuring static routes on each of these routers, we can enable a dynamic"
    ],
    "ru": [
      "R2, говоря: «Вы можете подключиться к этой сети через меня. R2 добавит этот маршрут в свою таблицу маршрутов."
    ]
  },
  {
    "time": [
      310.919,
      319.59
    ],
    "en": [
      "routing protocol on them. Then, R4 will ‘advertise’ this 192.168.4.0/24 network to its neighbor,"
    ],
    "ru": [
      "Затем он объявит то же самое R1, сообщив R1, что он может достичь 192.168.4.0/24."
    ]
  },
  {
    "time": [
      319.59,
      326.64
    ],
    "en": [
      "R2, saying ‘you can reach this network via me. R2 will add that route to its route table."
    ],
    "ru": [
      "через R2. R1 добавит этот маршрут в свою таблицу маршрутов. На самом деле, если вы посмотрите выше этого маршрута,"
    ]
  },
  {
    "time": [
      326.64,
      334.1
    ],
    "en": [
      "It will then advertise the same thing to R1, telling R1 that it can reach 192.168.4.0/24"
    ],
    "ru": [
      "вы можете видеть, что R2 также объявил сеть 10.0.24.0/30 между R2 и R4, R1 и R1"
    ]
  },
  {
    "time": [
      334.1,
      340.83
    ],
    "en": [
      "via R2. R1 will add this route to its route table. Actually, if you look above that route,"
    ],
    "ru": [
      "добавил его в свою таблицу маршрутов. Затем R1, в свою очередь, объявит R3, сообщая R3, что он"
    ]
  },
  {
    "time": [
      340.83,
      348.99
    ],
    "en": [
      "you can see that R2 also advertised the 10.0.24.0/30 network, between R2 and R4, to R1, and R1"
    ],
    "ru": [
      "может достигнуть 192.168.4.0/24 через R1. Он также объявит сеть 10.0.24.0/30, что она"
    ]
  },
  {
    "time": [
      348.99,
      355.241
    ],
    "en": [
      "added it to its route table. R1 will then in turn advertise to R3, telling R3 that it"
    ],
    "ru": [
      "извлечено из R2, а также из сети 10.0.12.0/30 между R1 и R2, но мы просто"
    ]
  },
  {
    "time": [
      355.241,
      364.39
    ],
    "en": [
      "can reach 192.168.4.0/24 via R1. It will also advertise the 10.0.24.0/30 network that it"
    ],
    "ru": [
      "пока сосредоточимся на одной сети."
    ]
  },
  {
    "time": [
      364.39,
      371.181
    ],
    "en": [
      "learned from R2, as well as the 10.0.12.0/30 network between R1 and R2, but we’re just"
    ],
    "ru": [
      "Как насчет того, что произойдет ошибка и интерфейс G0 / 0 R4 выйдет из строя? Остальные роутеры"
    ]
  },
  {
    "time": [
      371.181,
      375.389
    ],
    "en": [
      "focusing on the one network for now."
    ],
    "ru": [
      "автоматически адаптирует и удалит маршрут из своих таблиц маршрутов. Как видите, R1"
    ]
  },
  {
    "time": [
      375.389,
      380.949
    ],
    "en": [
      "How about if there is an error and R4’s G0/0 interface goes down? The other routers"
    ],
    "ru": [
      "удалил маршрут. Это предотвратит постоянную отправку трафика маршрутизатором R1 в тупик."
    ]
  },
  {
    "time": [
      380.949,
      386.49
    ],
    "en": [
      "will automatically adapt and remove the route from their route tables. As you can see, R1"
    ],
    "ru": [
      "Что, если бы такая же ситуация произошла при использовании статической маршрутизации? Я настроил статический маршрут"
    ]
  },
  {
    "time": [
      386.49,
      393.169
    ],
    "en": [
      "has removed the route. This will prevent R1 from continuously sending traffic to a dead-end."
    ],
    "ru": [
      "на R1. Он может без проблем отправлять трафик в сеть R4. Однако что, если то же самое"
    ]
  },
  {
    "time": [
      393.169,
      398.099
    ],
    "en": [
      "What if the same situation happened when using static routing? I configured a static route"
    ],
    "ru": [
      "сбой по ссылке происходит? Поскольку протокол динамической маршрутизации не используется, R1"
    ]
  },
  {
    "time": [
      398.099,
      403.979
    ],
    "en": [
      "on R1. It can send traffic to R4’s network with no problems. However, what if the same"
    ],
    "ru": [
      "не знает, что больше не может подключиться к сети 192.168.4.0. Если он получает пакеты"
    ]
  },
  {
    "time": [
      403.979,
      409.62
    ],
    "en": [
      "failure on the link occurs? Because there is no dynamic routing protocol in use, R1"
    ],
    "ru": [
      "предназначенные для этой сети, он будет продолжать пересылать их на R2, не зная, что R2 может"
    ]
  },
  {
    "time": [
      409.62,
      415.569
    ],
    "en": [
      "is unaware that it can no longer reach the 192.168.4.0 network. If it receives packets"
    ],
    "ru": [
      "больше не доходят до сети. Хорошо, это преимущество динамической маршрутизации, маршрутизатор будет"
    ]
  },
  {
    "time": [
      415.569,
      420.79
    ],
    "en": [
      "destined for that network, it will continue forwarding them to R2, unaware that R2 can"
    ],
    "ru": [
      "удалить недопустимые маршруты. Однако мы действительно должны убедиться, что существует резервный маршрут,"
    ]
  },
  {
    "time": [
      420.79,
      426.08
    ],
    "en": [
      "no longer reach the network. Okay, so that’s a benefit of dynamic routing, the router will"
    ],
    "ru": [
      "поэтому вместо того, чтобы полностью удалить сеть назначения из таблицы маршрутов, она заменяется"
    ]
  },
  {
    "time": [
      426.08,
      431.979
    ],
    "en": [
      "remove invalid routes. However, we really should make sure there is a backup route,"
    ],
    "ru": [
      "со следующим лучшим маршрутом."
    ]
  },
  {
    "time": [
      431.979,
      436.14
    ],
    "en": [
      "so instead of totally removing the destination network from the route table, it is replaced"
    ],
    "ru": [
      "Итак, я добавил еще одно соединение между R3 и R4. Теперь у R1 есть два допустимых пути к R4."
    ]
  },
  {
    "time": [
      436.14,
      438.16
    ],
    "en": [
      "with the next-best route."
    ],
    "ru": [
      "внутренняя сеть. через R2 и через R3. Давайте проверим таблицу маршрутов R1. Вы все еще можете это увидеть"
    ]
  },
  {
    "time": [
      438.16,
      445.83
    ],
    "en": [
      "So, I’ve added another connection between R3 and R4. Now R1 has two valid paths to R4’s"
    ],
    "ru": [
      "имеет маршрут через R2 в своей таблице маршрутов, как говорится через 10.0.12.2. В этом случае то, что"
    ]
  },
  {
    "time": [
      445.83,
      453.39
    ],
    "en": [
      "internal network. via R2, and via R3. Let’s check R1’s route table. You can see it still"
    ],
    "ru": [
      "произойдет, если я отключу интерфейс G0 / 0 маршрутизатора R4 для имитации сбоя?"
    ]
  },
  {
    "time": [
      453.39,
      460.07
    ],
    "en": [
      "has the route via R2 in its route table, as it says via 10.0.12.2. In this case, what"
    ],
    "ru": [
      "Итак, я сделал это, а теперь давайте проверим таблицу маршрутов R1. Как видите, маршрут через"
    ]
  },
  {
    "time": [
      460.07,
      465.24
    ],
    "en": [
      "will happen if I disable R4’s G0/0 interface to simulate a failure?"
    ],
    "ru": [
      "R2 был теперь автоматически заменен маршрутом через R3, говорится через 10.0.13.2. Итак, мы"
    ]
  },
  {
    "time": [
      465.24,
      472.18
    ],
    "en": [
      "So, I did that, and now let’s check R1’s route table. As you can see, the route via"
    ],
    "ru": [
      "потерял предпочтительный маршрут к 192.168.4.0, но трафик все еще может следовать по этому пути. Теперь ваша очередь"
    ]
  },
  {
    "time": [
      472.18,
      480.26
    ],
    "en": [
      "R2 was now automatically replaced with the route via R3, it says via 10.0.13.2. So, we"
    ],
    "ru": [
      "Может возникнуть вопрос, почему маршрут через R2 был предпочтительнее маршрута через R3? Это"
    ]
  },
  {
    "time": [
      480.26,
      487.36
    ],
    "en": [
      "lost the preferred route to 192.168.4.0, but traffic can still follow this path. Now, you"
    ],
    "ru": [
      "потому что это соединение здесь является быстродействующим, а не гигабитным Ethernet. Вы"
    ]
  },
  {
    "time": [
      487.36,
      493.56
    ],
    "en": [
      "may be wondering, why the route via R2 was preferred over the route via R3? That’s"
    ],
    "ru": [
      "уже знаком с концепцией связующего дерева \"корневой стоимости\", которая используется для определения"
    ]
  },
  {
    "time": [
      493.56,
      498.94
    ],
    "en": [
      "because this connection here is a fastethernet connection, not gigabit ethernet. You’re"
    ],
    "ru": [
      "лучший путь к корневому мосту. Что ж, протоколы динамической маршрутизации используют аналогичную концепцию"
    ]
  },
  {
    "time": [
      498.94,
      502.94
    ],
    "en": [
      "already familiar with the spanning-tree concept of ‘root cost’, which is used to determine"
    ],
    "ru": [
      "определить лучший путь к месту назначения. R1 узнал о сети 192.168.4.0/24"
    ]
  },
  {
    "time": [
      502.94,
      508.37
    ],
    "en": [
      "the best path to the root bridge. Well, dynamic routing protocols use a similar concept to"
    ],
    "ru": [
      "как от R2, так и от R3, однако он определил, что путь через R2 лучше, потому что он «стоит» меньше."
    ]
  },
  {
    "time": [
      508.37,
      515.7
    ],
    "en": [
      "determine the best path to a destination. R1 learned about the 192.168.4.0/24 network"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      515.7,
      523.87
    ],
    "en": [
      "from both R2 and R3, however it determined that the path via R2 is superior because it ‘costs’ less."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      523.87,
      529.2
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
      523.87,
      529.2
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
      529.2,
      535.72
    ],
    "en": [
      "purpose. Here are a few key points. Routers can use dynamic routing protocols to advertise"
    ],
    "ru": [
      "устройств. Они образуют «соседство», также известное как «соседские отношения» или «соседство»."
    ]
  },
  {
    "time": [
      535.72,
      539.86
    ],
    "en": [
      "information about their connected routes as well as routes they have learned from other"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      539.86,
      546.58
    ],
    "en": [
      "devices. They form ‘adjacencies’ , also know as ‘neighbor relationships’ or ‘neighborships’"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      546.58,
      552.51
    ],
    "en": [
      "with adjacent routers to exchange this information. For example, in this network R1 will form"
    ],
    "ru": [
      "с соседними маршрутизаторами для обмена этой информацией. Например, в этой сети R1 сформирует"
    ]
  },
  {
    "time": [
      552.51,
      558.78
    ],
    "en": [
      "adjacencies with R2 and R3, its directly connected neighbors. If multiple routes to"
    ],
    "ru": [
      "смежности с R2 и R3, его непосредственно связанными соседями. Если несколько маршрутов к"
    ]
  },
  {
    "time": [
      558.78,
      563.33
    ],
    "en": [
      "a destination are learned, the router determines which route is superior and adds it to the"
    ],
    "ru": [
      "пункт назначения изучен, маршрутизатор определяет, какой маршрут является старшим, и добавляет его в список"
    ]
  },
  {
    "time": [
      563.33,
      568.4
    ],
    "en": [
      "routing table. It uses the ‘metric’ of the route to decide which is superior, and"
    ],
    "ru": [
      "таблица маршрутизации. Он использует «метрику» маршрута, чтобы решить, какой из них лучше, и"
    ]
  },
  {
    "time": [
      568.4,
      573.85
    ],
    "en": [
      "the lower metric is superior. Just like in spanning tree, the lower root cost is superior"
    ],
    "ru": [
      "нижний показатель лучше. Как и в остовном дереве, более низкая стоимость корня лучше"
    ]
  },
  {
    "time": [
      573.85,
      580.45
    ],
    "en": [
      "when determining the root port on a switch. I’ll talk more about metric later."
    ],
    "ru": [
      "при определении корневого порта на коммутаторе. Я подробнее расскажу о метрике позже."
    ]
  },
  {
    "time": [
      580.45,
      585.53
    ],
    "en": [
      "Now lets talk about the different types of dynamic routing protocols. Dynamic routing"
    ],
    "ru": [
      "Теперь поговорим о различных типах протоколов динамической маршрутизации. Динамическая маршрутизация"
    ]
  },
  {
    "time": [
      585.53,
      592.45
    ],
    "en": [
      "protocols can be divided into two main categories, IGP, which stands for Interior Gateway Protocol,"
    ],
    "ru": [
      "Протоколы можно разделить на две основные категории: IGP, что означает протокол внутреннего шлюза,"
    ]
  },
  {
    "time": [
      592.45,
      599.23
    ],
    "en": [
      "and EGP, which stands for Exterior Gateway Protocol. Let’s define those. IGPs are used"
    ],
    "ru": [
      "и EGP, что означает протокол внешнего шлюза. Давайте определимся с ними. IGP используются"
    ]
  },
  {
    "time": [
      599.23,
      604.84
    ],
    "en": [
      "to share routes within a single autonomous system, AS, which is a single organization,"
    ],
    "ru": [
      "для совместного использования маршрутов в единой автономной системе, AS, которая является единой организацией,"
    ]
  },
  {
    "time": [
      604.84,
      612.38
    ],
    "en": [
      "for example a company. EGPs are used to share routes between different autonomous systems."
    ],
    "ru": [
      "например компания. EGP используются для обмена маршрутами между разными автономными системами."
    ]
  },
  {
    "time": [
      612.38,
      619.0
    ],
    "en": [
      "Maybe this diagram will make it easier to understand. Company A, Company B, ISP A, and"
    ],
    "ru": [
      "Возможно, эта диаграмма облегчит понимание. Компания A, Компания B, ISP A и"
    ]
  },
  {
    "time": [
      619.0,
      626.64
    ],
    "en": [
      "ISP B are each their own autonomous system, AS. Within each organization, an IGP is used"
    ],
    "ru": [
      "Каждый ISP B - это отдельная автономная система, AS. Внутри каждой организации используется IGP."
    ]
  },
  {
    "time": [
      626.64,
      631.4
    ],
    "en": [
      "to exchange routing information. However, to exchange routing information between AS’s,"
    ],
    "ru": [
      "для обмена маршрутной информацией. Однако для обмена информацией о маршрутизации между AS"
    ]
  },
  {
    "time": [
      631.4,
      639.08
    ],
    "en": [
      "an EGP is used. The basic purpose of IGPs and EGPs is the same, to share information"
    ],
    "ru": [
      "используется EGP. Основная цель IGP и EGP - обмен информацией."
    ]
  },
  {
    "time": [
      639.08,
      644.6
    ],
    "en": [
      "about routes to destinations. However they function differently. Because this is a CCNA"
    ],
    "ru": [
      "о маршрутах к пунктам назначения. Однако они действуют по-разному. Потому что это CCNA"
    ]
  },
  {
    "time": [
      644.6,
      650.62
    ],
    "en": [
      "course, we will focus mostly on OSPF, which is an IGP, however you will also learn about"
    ],
    "ru": [
      "Конечно, мы сосредоточимся в основном на OSPF, который является IGP, однако вы также узнаете о"
    ]
  },
  {
    "time": [
      650.62,
      655.63
    ],
    "en": [
      "other IGPs and the one EGP that is in use today, to the extent that you need to know"
    ],
    "ru": [
      "другие IGP и один EGP, который используется сегодня, в той степени, в которой вам нужно знать"
    ]
  },
  {
    "time": [
      655.63,
      658.51
    ],
    "en": [
      "them for the exam."
    ],
    "ru": [
      "их для экзамена."
    ]
  },
  {
    "time": [
      658.51,
      663.18
    ],
    "en": [
      "Now let’s break down these categories further. As I mentioned, the two big categories are"
    ],
    "ru": [
      "Теперь давайте разберем эти категории дальше. Как я уже упоминал, есть две большие категории:"
    ]
  },
  {
    "time": [
      663.18,
      670.76
    ],
    "en": [
      "Interior Gateway Protocols, IGPs, and Exterior Gateway Protocols, EGPs. However, you can"
    ],
    "ru": [
      "Протоколы внутреннего шлюза, IGP и протоколы внешнего шлюза, EGP. Однако вы можете"
    ]
  },
  {
    "time": [
      670.76,
      675.96
    ],
    "en": [
      "further break these categories down by the ‘algorithm type’. This refers to the processes"
    ],
    "ru": [
      "далее разбейте эти категории по «типу алгоритма». Это относится к процессам"
    ]
  },
  {
    "time": [
      675.96,
      682.63
    ],
    "en": [
      "used by each protocol to share route information and determine the best route to each destination."
    ],
    "ru": [
      "используется каждым протоколом для обмена информацией о маршруте и определения наилучшего маршрута к каждому пункту назначения."
    ]
  },
  {
    "time": [
      682.63,
      688.28
    ],
    "en": [
      "There is only one type of EGP algorithm, Path Vector. Not only is there only one type of"
    ],
    "ru": [
      "Существует только один тип алгоритма EGP - вектор пути. Есть не только один тип"
    ]
  },
  {
    "time": [
      688.28,
      694.99
    ],
    "en": [
      "EGP algorithm, but there is only one EGP that is used in modern networks. That is BGP, the"
    ],
    "ru": [
      "Алгоритм EGP, но в современных сетях используется только один EGP. Это BGP,"
    ]
  },
  {
    "time": [
      694.99,
      700.65
    ],
    "en": [
      "Border Gateway Protocol. Because it’s not necessary for the CCNA, I won’t talk much"
    ],
    "ru": [
      "Протокол пограничного шлюза. Поскольку это не обязательно для CCNA, я не буду много говорить"
    ]
  },
  {
    "time": [
      700.65,
      705.52
    ],
    "en": [
      "about BGP. I will mention a few important things later, but beyond that you don’t"
    ],
    "ru": [
      "насчет BGP. Я упомяну несколько важных вещей позже, но кроме этого вы не"
    ]
  },
  {
    "time": [
      705.52,
      711.101
    ],
    "en": [
      "need to know BGP for the CCNA. Just make sure you’re aware of the purpose of an EGP, to"
    ],
    "ru": [
      "необходимо знать BGP для CCNA. Просто убедитесь, что вы знаете о цели EGP, чтобы"
    ]
  },
  {
    "time": [
      711.101,
      716.86
    ],
    "en": [
      "share route information between autonomous systems, and know that BGP is the only EGP"
    ],
    "ru": [
      "обмениваться информацией о маршруте между автономными системами и знать, что BGP - единственный EGP"
    ]
  },
  {
    "time": [
      716.86,
      722.2
    ],
    "en": [
      "that is used in modern networks. So, you also don’t need to know the details of how a"
    ],
    "ru": [
      "что используется в современных сетях. Таким образом, вам также не нужно знать подробности того, как"
    ]
  },
  {
    "time": [
      722.2,
      728.76
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
      722.2,
      728.76
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
      728.76,
      733.61
    ],
    "en": [
      "and link state. I’ll repeat, when I say ‘algorithm’ I mean the processes each"
    ],
    "ru": [
      "и состояние ссылки. Повторюсь, когда я говорю «алгоритм», я имею в виду процессы, каждый из которых"
    ]
  },
  {
    "time": [
      733.61,
      739.63
    ],
    "en": [
      "protocol uses to share route information and choose the best route to each destination."
    ],
    "ru": [
      "протокол используется для обмена информацией о маршруте и выбора наилучшего маршрута к каждому пункту назначения."
    ]
  },
  {
    "time": [
      739.63,
      744.61
    ],
    "en": [
      "All routing protocols have the same goal. That is what I just said, to share route information"
    ],
    "ru": [
      "Все протоколы маршрутизации преследуют одну и ту же цель. Я только что сказал, чтобы поделиться информацией о маршруте."
    ]
  },
  {
    "time": [
      744.61,
      750.29
    ],
    "en": [
      "and select the best route to each destination. However, the algorithm used to do so is different"
    ],
    "ru": [
      "и выберите лучший маршрут до каждого пункта назначения. Однако алгоритм, используемый для этого, отличается."
    ]
  },
  {
    "time": [
      750.29,
      757.35
    ],
    "en": [
      "for each routing protocol. There are two distance vector protocols, RIP, the Routing Information"
    ],
    "ru": [
      "для каждого протокола маршрутизации. Существует два протокола вектора расстояния, RIP, информация о маршрутизации."
    ]
  },
  {
    "time": [
      757.35,
      763.82
    ],
    "en": [
      "Protocol, and EIGRP, Enhanced Interior Gateway Routing Protocol. I won’t cover these two"
    ],
    "ru": [
      "Протокол и EIGRP, расширенный протокол маршрутизации внутреннего шлюза. Я не буду рассказывать об этих двоих"
    ]
  },
  {
    "time": [
      763.82,
      768.39
    ],
    "en": [
      "protocols in depth, although I will give you a basic outline of their function so you can"
    ],
    "ru": [
      "протоколы подробно, хотя я дам вам общее представление об их функциях, чтобы вы могли"
    ]
  },
  {
    "time": [
      768.39,
      776.6
    ],
    "en": [
      "compare and contrast them with OSPF. So, RIP and EIGRP are the two distance vector protocols."
    ],
    "ru": [
      "сравните и сопоставьте их с OSPF. Итак, RIP и EIGRP - это два протокола вектора расстояния."
    ]
  },
  {
    "time": [
      776.6,
      784.19
    ],
    "en": [
      "There are also two link state protocols. OSPF, Open Shortest Path First, and IS-IS, Intermediate"
    ],
    "ru": [
      "Также существует два протокола состояния канала. OSPF, сначала откройте кратчайший путь и IS-IS, средний"
    ]
  },
  {
    "time": [
      784.19,
      791.19
    ],
    "en": [
      "System to Intermediate System. Like BGP, I won’t talk about IS-IS much. If you want"
    ],
    "ru": [
      "От системы к промежуточной системе. Как и BGP, я не буду много говорить об IS-IS. Если хочешь"
    ]
  },
  {
    "time": [
      791.19,
      796.79
    ],
    "en": [
      "to learn more about IS-IS, consider looking into the CCNP Service Provider path after"
    ],
    "ru": [
      "Чтобы узнать больше об IS-IS, рассмотрите возможность изучения пути поставщика услуг CCNP после"
    ]
  },
  {
    "time": [
      796.79,
      804.12
    ],
    "en": [
      "the CCNA. OSPF, however, I will spend plenty of time talking about over the next few videos."
    ],
    "ru": [
      "CCNA. OSPF, однако, я уделю много времени обсуждению в следующих нескольких видео."
    ]
  },
  {
    "time": [
      804.12,
      808.67
    ],
    "en": [
      "For now, what I want you to remember is, first of all, the names of each of these routing"
    ],
    "ru": [
      "Сейчас я хочу, чтобы вы запомнили, прежде всего, названия каждого из этих маршрутов."
    ]
  },
  {
    "time": [
      808.67,
      815.671
    ],
    "en": [
      "protocols. Then remember which protocols use which kind of algorithm. RIP and EIGRP use"
    ],
    "ru": [
      "протоколы. Затем запомните, какие протоколы используют какой алгоритм. Использование RIP и EIGRP"
    ]
  },
  {
    "time": [
      815.671,
      822.54
    ],
    "en": [
      "a distance vector algorithm, OSPF and IS-IS use a link state algorithm, and BGP uses a"
    ],
    "ru": [
      "алгоритм вектора расстояния, OSPF и IS-IS используют алгоритм состояния канала, а BGP использует"
    ]
  },
  {
    "time": [
      822.54,
      828.76
    ],
    "en": [
      "path vector algorithm. The flashcards I provide will be very helpful for this. Okay, now I"
    ],
    "ru": [
      "алгоритм вектора пути. В этом мне очень пригодятся карточки, которые я предоставлю. Хорошо, теперь я"
    ]
  },
  {
    "time": [
      828.76,
      833.56
    ],
    "en": [
      "want to outline the characteristics of distance vector and link state protocols."
    ],
    "ru": [
      "хочу обрисовать характеристики протоколов вектора расстояния и состояния канала."
    ]
  },
  {
    "time": [
      833.56,
      838.64
    ],
    "en": [
      "I’ll start with distance vector routing protocols. Once again, the distance vector"
    ],
    "ru": [
      "Я начну с протоколов дистанционно-векторной маршрутизации. Еще раз, вектор расстояния"
    ]
  },
  {
    "time": [
      838.64,
      844.8
    ],
    "en": [
      "protocols we will learn about are RIP and EIGRP. Distance vector protocols were invented"
    ],
    "ru": [
      "протоколы, о которых мы узнаем, - это RIP и EIGRP. Были изобретены протоколы вектора расстояния"
    ]
  },
  {
    "time": [
      844.8,
      851.46
    ],
    "en": [
      "before link state protocols, in the early 1980s. Early examples of distance vector protocols"
    ],
    "ru": [
      "до протоколов состояния канала, в начале 1980-х. Ранние примеры протоколов вектора расстояния"
    ]
  },
  {
    "time": [
      851.46,
      860.33
    ],
    "en": [
      "are RIP and Cisco’s proprietary protocol IGRP, which was later updated to become EIGRP."
    ],
    "ru": [
      "представляют собой RIP и собственный протокол Cisco IGRP, который позже был обновлен и стал EIGRP."
    ]
  },
  {
    "time": [
      860.33,
      864.04
    ],
    "en": [
      "Distance vector protocols operate by sending the following information to their directly"
    ],
    "ru": [
      "Протоколы векторных расстояний работают, отправляя следующую информацию непосредственно своим адресатам."
    ]
  },
  {
    "time": [
      864.04,
      869.37
    ],
    "en": [
      "connected neighbors. their known destination networks, and their metric to reach their"
    ],
    "ru": [
      "подключенные соседи. их известные сети назначения и их метрика для достижения своих"
    ]
  },
  {
    "time": [
      869.37,
      874.54
    ],
    "en": [
      "known destination networks. This method of sharing route information is often called"
    ],
    "ru": [
      "известные сети назначения. Этот метод обмена информацией о маршруте часто называют"
    ]
  },
  {
    "time": [
      874.54,
      879.79
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
      874.54,
      879.79
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
      879.79,
      885.51
    ],
    "en": [
      "network beyond its neighbors. It only knows the information that its neighbors tell it."
    ],
    "ru": [
      "сеть за пределами своих соседей. Он знает только ту информацию, которую сообщают ему его соседи."
    ]
  },
  {
    "time": [
      885.51,
      889.18
    ],
    "en": [
      "This is different than link state routing protocols, in which the router develops a"
    ],
    "ru": [
      "Это отличается от протоколов маршрутизации состояния канала, в которых маршрутизатор разрабатывает"
    ]
  },
  {
    "time": [
      889.18,
      894.29
    ],
    "en": [
      "more complete picture of the network. When using a distance vector protocol, on the other"
    ],
    "ru": [
      "более полное представление о сети. С другой стороны, при использовании протокола вектора расстояния"
    ]
  },
  {
    "time": [
      894.29,
      898.721
    ],
    "en": [
      "hand, all the router knows is the routes its neighbors tells it about, and their metric"
    ],
    "ru": [
      "стороны, все, что знает маршрутизатор, - это маршруты, о которых ему сообщают его соседи, и их метрика."
    ]
  },
  {
    "time": [
      898.721,
      904.44
    ],
    "en": [
      "to reach those destinations. The reason for the name ‘distance vector’ is because"
    ],
    "ru": [
      "чтобы добраться до этих мест. Причина названия «вектор расстояния» в том, что"
    ]
  },
  {
    "time": [
      904.44,
      908.72
    ],
    "en": [
      "the routers only learn the ‘distance’, which is the metric, and the ‘vector’,"
    ],
    "ru": [
      "маршрутизаторы узнают только «расстояние», которое является метрикой, и «вектор»,"
    ]
  },
  {
    "time": [
      908.72,
      914.72
    ],
    "en": [
      "which is the direction to send the traffic, the next-hop router, of each route. Basically,"
    ],
    "ru": [
      "это направление для отправки трафика, маршрутизатор следующего перехода каждого маршрута. По сути,"
    ]
  },
  {
    "time": [
      914.72,
      920.32
    ],
    "en": [
      "distance vector protocols work by sharing their route table, or parts of it, with their neighbors."
    ],
    "ru": [
      "Протоколы векторов расстояния работают, разделяя свою таблицу маршрутов или ее части со своими соседями."
    ]
  },
  {
    "time": [
      920.32,
      927.92
    ],
    "en": [
      "neighbors. So, the example I showed you before of R4 advertising its 192.168.4.0 network is an"
    ],
    "ru": [
      "соседи. Итак, пример, который я показал вам раньше, когда R4 рекламирует свою сеть 192.168.4.0, является"
    ]
  },
  {
    "time": [
      927.92,
      934.05
    ],
    "en": [
      "example of distance vector logic. R4 tells R2, its directly connected neighbor, ‘You"
    ],
    "ru": [
      "пример логики вектора расстояния. R4 сообщает R2, своему напрямую связанному соседу: «Вы"
    ]
  },
  {
    "time": [
      934.05,
      941.38
    ],
    "en": [
      "can reach 192.168.4.0/24 via me. My metric to reach it is 1.’ Don’t worry about the"
    ],
    "ru": [
      "могу получить доступ к 192.168.4.0/24 через меня. Моя метрика для достижения этой цели - 1. Не беспокойтесь о"
    ]
  },
  {
    "time": [
      941.38,
      945.77
    ],
    "en": [
      "metric numbers yet, each routing protocol uses a different type of metric and we will"
    ],
    "ru": [
      "числа метрик, каждый протокол маршрутизации использует свой тип метрики, и мы будем"
    ]
  },
  {
    "time": [
      945.77,
      952.05
    ],
    "en": [
      "cover those soon. Anyway, R2 doesn’t know anything except that it can reach 192.168.4.0/24"
    ],
    "ru": [
      "скоро их накроют. Во всяком случае, R2 ничего не знает, кроме того, что он может достигать 192.168.4.0/24"
    ]
  },
  {
    "time": [
      952.05,
      961.5
    ],
    "en": [
      "via R4, and that R4’s metric is 1. Similarly, R2 then tells R1 the same, except it advertises"
    ],
    "ru": [
      "через R4, и этот показатель R4 равен 1. Точно так же R2 затем сообщает R1 то же самое, за исключением того, что он объявляет"
    ]
  },
  {
    "time": [
      961.5,
      967.221
    ],
    "en": [
      "the metric as 2. Once again, R1 doesn’t have a detailed picture of the network, all"
    ],
    "ru": [
      "показатель равен 2. Опять же, R1 не имеет подробной картины сети, все"
    ]
  },
  {
    "time": [
      967.221,
      973.9
    ],
    "en": [
      "it knows is that it can reach 192.168.4.0/24 via R2, and that R2’s metric to reach it"
    ],
    "ru": [
      "он знает, что он может достичь 192.168.4.0/24 через R2, и что метрика R2 для его достижения"
    ]
  },
  {
    "time": [
      973.9,
      980.88
    ],
    "en": [
      "is 2. And of course, R1 advertises the network to R3, with its own metric to reach the destination"
    ],
    "ru": [
      "равно 2. И, конечно же, R1 объявляет сеть R3 со своей собственной метрикой для достижения пункта назначения."
    ]
  },
  {
    "time": [
      980.88,
      986.53
    ],
    "en": [
      "network. Once again, RIP and EIGRP are the two distance vector routing protocols that"
    ],
    "ru": [
      "сеть. Еще раз, RIP и EIGRP - это два протокола маршрутизации с вектором расстояния, которые"
    ]
  },
  {
    "time": [
      986.53,
      991.41
    ],
    "en": [
      "are used, and we will talk more about them in day 25’s video."
    ],
    "ru": [
      "используются, и мы поговорим о них подробнее в видео 25-го дня."
    ]
  },
  {
    "time": [
      991.41,
      996.77
    ],
    "en": [
      "Next I’ll briefly introduce link state routing protocols. When using a link state routing"
    ],
    "ru": [
      "Далее я кратко расскажу о протоколах маршрутизации состояния канала. При использовании маршрутизации состояния канала"
    ]
  },
  {
    "time": [
      996.77,
      1002.1
    ],
    "en": [
      "protocol, every router creates a ‘connectivity map’ of the network. This map will be the"
    ],
    "ru": [
      "протокол, каждый маршрутизатор создает «карту связности» сети. Эта карта будет"
    ]
  },
  {
    "time": [
      1002.1,
      1008.67
    ],
    "en": [
      "same on each router. To allow this, each router advertises information about its interfaces,"
    ],
    "ru": [
      "то же самое на каждом роутере. Для этого каждый маршрутизатор объявляет информацию о своих интерфейсах,"
    ]
  },
  {
    "time": [
      1008.67,
      1013.57
    ],
    "en": [
      "its connected networks, to its neighbors. These advertisements are passed along to other"
    ],
    "ru": [
      "подключенные сети к своим соседям. Эти рекламные объявления передаются другим"
    ]
  },
  {
    "time": [
      1013.57,
      1018.76
    ],
    "en": [
      "routers, until all routers in the network develop the same map of the network. Then,"
    ],
    "ru": [
      "маршрутизаторы, пока все маршрутизаторы в сети не разработают одну и ту же карту сети. Потом,"
    ]
  },
  {
    "time": [
      1018.76,
      1023.45
    ],
    "en": [
      "each router independently uses this map to calculate the best routes to each destination."
    ],
    "ru": [
      "каждый маршрутизатор независимо использует эту карту для расчета наилучших маршрутов к каждому пункту назначения."
    ]
  },
  {
    "time": [
      1023.45,
      1027.54
    ],
    "en": [
      "I think you can see how this is different than the ‘routing by rumor’ of distance"
    ],
    "ru": [
      "Думаю, вы понимаете, чем это отличается от «маршрутизации по слухам» о расстоянии."
    ]
  },
  {
    "time": [
      1027.54,
      1033.22
    ],
    "en": [
      "vector protocols. In link state protocols, each router gets a whole picture of the network"
    ],
    "ru": [
      "векторные протоколы. В протоколах состояния канала каждый маршрутизатор получает полную картину сети."
    ]
  },
  {
    "time": [
      1033.22,
      1039.12
    ],
    "en": [
      "so that it can calculate the best routes. Link state protocols use more resources, more"
    ],
    "ru": [
      "чтобы он мог рассчитать лучшие маршруты. Протоколы состояния канала используют больше ресурсов, больше"
    ]
  },
  {
    "time": [
      1039.12,
      1044.351
    ],
    "en": [
      "CPU power and memory, on the router, because more information is shared. However, link"
    ],
    "ru": [
      "Мощность процессора и память маршрутизатора, потому что передается больше информации. Однако ссылка"
    ]
  },
  {
    "time": [
      1044.351,
      1048.64
    ],
    "en": [
      "state protocols tend to be faster in reacting to changes in the network than distance vector"
    ],
    "ru": [
      "протоколы состояния, как правило, быстрее реагируют на изменения в сети, чем вектор расстояния"
    ]
  },
  {
    "time": [
      1048.64,
      1056.25
    ],
    "en": [
      "protocols. The two link state protocols in use today are OSPF and IS-IS. I will briefly"
    ],
    "ru": [
      "протоколы. В настоящее время используются два протокола состояния канала: OSPF и IS-IS. Я кратко"
    ]
  },
  {
    "time": [
      1056.25,
      1063.16
    ],
    "en": [
      "mention some things about IS-IS, but as for OSPF, we will go very in depth."
    ],
    "ru": [
      "упомянем кое-что об IS-IS, но что касается OSPF, мы рассмотрим его очень подробно."
    ]
  },
  {
    "time": [
      1063.16,
      1067.3
    ],
    "en": [
      "Now let’s talk about those metrics that I mentioned a few times. A router’s route"
    ],
    "ru": [
      "А теперь поговорим о тех показателях, о которых я упоминал несколько раз. Маршрут маршрутизатора"
    ]
  },
  {
    "time": [
      1067.3,
      1072.86
    ],
    "en": [
      "table contains the best route to each destination network it knows about. If a router using"
    ],
    "ru": [
      "Таблица содержит лучший маршрут к каждой известной сети назначения. Если маршрутизатор, использующий"
    ]
  },
  {
    "time": [
      1072.86,
      1078.04
    ],
    "en": [
      "a dynamic routing protocol learns two different routes to the same destination, how does it"
    ],
    "ru": [
      "протокол динамической маршрутизации изучает два разных маршрута к одному и тому же месту назначения, как это"
    ]
  },
  {
    "time": [
      1078.04,
      1083.89
    ],
    "en": [
      "determine which is ‘best’? As I briefly mentioned before, It uses the metric value"
    ],
    "ru": [
      "определить, какой из них «лучший»? Как я вкратце упоминал ранее, он использует значение метрики"
    ]
  },
  {
    "time": [
      1083.89,
      1089.48
    ],
    "en": [
      "of the routes to determine which is best. A lower metric is considered better. It’s"
    ],
    "ru": [
      "маршрутов, чтобы определить лучший. Более низкий показатель считается лучшим. Его"
    ]
  },
  {
    "time": [
      1089.48,
      1095.15
    ],
    "en": [
      "like the root cost in spanning tree. A lower root cost is considered superior, so the interface"
    ],
    "ru": [
      "как стоимость корня в связующем дереве. Более низкая стоимость корня считается лучшей, поэтому интерфейс"
    ]
  },
  {
    "time": [
      1095.15,
      1101.34
    ],
    "en": [
      "with the lowest root cost will become the root port. For dynamic routing protocols,"
    ],
    "ru": [
      "с наименьшей стоимостью корня станет корневым портом. Для протоколов динамической маршрутизации"
    ]
  },
  {
    "time": [
      1101.34,
      1105.531
    ],
    "en": [
      "the route with the lowest metric is considered best and will be entered in to the routing"
    ],
    "ru": [
      "маршрут с наименьшей метрикой считается лучшим и будет включен в маршрут."
    ]
  },
  {
    "time": [
      1105.531,
      1112.92
    ],
    "en": [
      "table. Each routing protocol uses a different metric to determine which route is the best."
    ],
    "ru": [
      "стол. Каждый протокол маршрутизации использует разные метрики для определения наилучшего маршрута."
    ]
  },
  {
    "time": [
      1112.92,
      1120.571
    ],
    "en": [
      "Here in this slide I showed you before, although R1 learns two paths to 192.168.4.0/24, one"
    ],
    "ru": [
      "Здесь, на этом слайде, я показал вам раньше, хотя R1 изучает два пути к 192.168.4.0/24, один"
    ]
  },
  {
    "time": [
      1120.571,
      1128.23
    ],
    "en": [
      "via R2 and one via R3, only the route via R2 is added to the routing table. This fastethernet"
    ],
    "ru": [
      "через R2 и один через R3, в таблицу маршрутизации добавляется только маршрут через R2. Этот fastethernet"
    ]
  },
  {
    "time": [
      1128.23,
      1133.36
    ],
    "en": [
      "connection here has a higher metric cost than the other gigabit ethernet connections, so"
    ],
    "ru": [
      "соединение здесь имеет более высокую метрическую стоимость, чем другие соединения Gigabit Ethernet, поэтому"
    ]
  },
  {
    "time": [
      1133.36,
      1139.15
    ],
    "en": [
      "this route is less favorable. Now, you might be wondering: What if this was also a gigabit"
    ],
    "ru": [
      "этот маршрут менее благоприятен. Теперь вы можете спросить: а что, если бы это был еще и гигабитный"
    ]
  },
  {
    "time": [
      1139.15,
      1144.01
    ],
    "en": [
      "ethernet connection? Both routes would have the same cost, so which route would be added"
    ],
    "ru": [
      "подключение к сети Ethernet? Оба маршрута будут иметь одинаковую стоимость, поэтому какой маршрут будет добавлен"
    ]
  },
  {
    "time": [
      1144.01,
      1147.03
    ],
    "en": [
      "to the route table? Let’s see what happens."
    ],
    "ru": [
      "в таблицу маршрутов? Давай посмотрим что происходит."
    ]
  },
  {
    "time": [
      1147.03,
      1152.131
    ],
    "en": [
      "I changed the connection between R3 and R4 to be a gigabit ethernet connection like the"
    ],
    "ru": [
      "Я изменил соединение между R3 и R4 на гигабитное соединение Ethernet, подобное"
    ]
  },
  {
    "time": [
      1152.131,
      1159.8
    ],
    "en": [
      "others. Let’s check out R1’s route table. So, BOTH routes have been added to the table."
    ],
    "ru": [
      "другие. Давайте посмотрим на таблицу маршрутов R1. Итак, в таблицу добавлены ОБЕИХ маршрута."
    ]
  },
  {
    "time": [
      1159.8,
      1168.88
    ],
    "en": [
      "via 10.0.13.2, which is R3, and via 10.0.12.2, which is R2. So, if a router learns two (or"
    ],
    "ru": [
      "через 10.0.13.2, который является R3, и через 10.0.12.2, который является R2. Итак, если маршрутизатор узнает два (или"
    ]
  },
  {
    "time": [
      1168.88,
      1174.86
    ],
    "en": [
      "more) routes via the same routing protocol to the same destination, with the same metric,"
    ],
    "ru": [
      "больше) направляет через один и тот же протокол маршрутизации к тому же месту назначения с той же метрикой,"
    ]
  },
  {
    "time": [
      1174.86,
      1180.631
    ],
    "en": [
      "both will be added to the routing table. Traffic will be load-balanced over both routes. Note"
    ],
    "ru": [
      "оба будут добавлены в таблицу маршрутизации. Трафик будет сбалансирован по обоим маршрутам. Примечание"
    ]
  },
  {
    "time": [
      1180.631,
      1186.57
    ],
    "en": [
      "that they must be exactly the same destination, the same network address and same prefix length."
    ],
    "ru": [
      "что они должны быть в точности одним и тем же местом назначения, одним и тем же сетевым адресом и одинаковой длиной префикса."
    ]
  },
  {
    "time": [
      1186.57,
      1192.11
    ],
    "en": [
      "Here’s a larger view. In this case both routes were learned by the dynamic routing"
    ],
    "ru": [
      "Вот увеличенное изображение. В этом случае оба маршрута были изучены динамической маршрутизацией."
    ]
  },
  {
    "time": [
      1192.11,
      1198.51
    ],
    "en": [
      "protocol OSPF, as indicated by the code O next to the routes. They are both to the exact"
    ],
    "ru": [
      "протокол OSPF, на что указывает код O рядом с маршрутами. Они оба точны"
    ]
  },
  {
    "time": [
      1198.51,
      1206.61
    ],
    "en": [
      "same destination, 192.168.4.0/24, and they both have the same metric. The metric value"
    ],
    "ru": [
      "тот же пункт назначения, 192.168.4.0/24, и у них обоих одинаковый показатель. Значение показателя"
    ]
  },
  {
    "time": [
      1206.61,
      1212.39
    ],
    "en": [
      "itself is also displayed in this output. Where is it? It’s here, the second value in these"
    ],
    "ru": [
      "сам также отображается в этом выводе. Где это находится? Это второе значение в этих"
    ]
  },
  {
    "time": [
      1212.39,
      1217.821
    ],
    "en": [
      "square brackets is the metric value of the route. Both routes have a metric of 3, so"
    ],
    "ru": [
      "квадратные скобки - метрическая стоимость маршрута. Оба маршрута имеют метрику 3, поэтому"
    ]
  },
  {
    "time": [
      1217.821,
      1224.31
    ],
    "en": [
      "both were added, and traffic will be load-balanced over both routes. This is called Equal Cost"
    ],
    "ru": [
      "оба были добавлены, и трафик будет сбалансирован по обоим маршрутам. Это называется равной стоимостью."
    ]
  },
  {
    "time": [
      1224.31,
      1231.14
    ],
    "en": [
      "MultiPath, or ECMP, load-balancing. Make sure you remember this term, ECMP, it will come"
    ],
    "ru": [
      "MultiPath, или ECMP, балансировка нагрузки. Убедитесь, что вы помните этот термин, ECMP, он придет"
    ]
  },
  {
    "time": [
      1231.14,
      1237.25
    ],
    "en": [
      "up often in these videos about dynamic routing protocols. As for these values on the left"
    ],
    "ru": [
      "часто встречаются в этих видеороликах о протоколах динамической маршрутизации. Что касается этих значений слева"
    ]
  },
  {
    "time": [
      1237.25,
      1242.15
    ],
    "en": [
      "side of the square brackets, this is another important value called ‘administrative distance’,"
    ],
    "ru": [
      "сторону квадратных скобок, это еще одна важная величина, называемая «административным расстоянием»,"
    ]
  },
  {
    "time": [
      1242.15,
      1248.95
    ],
    "en": [
      "or AD, which I will talk about a few slides later. The OSPF protocol has an AD of 110."
    ],
    "ru": [
      "или AD, о которых я расскажу через несколько слайдов. Протокол OSPF имеет AD 110."
    ]
  },
  {
    "time": [
      1248.95,
      1255.1
    ],
    "en": [
      "Don’t memorize that now, as I said I’ll talk about that again in a few slides."
    ],
    "ru": [
      "Не запоминайте это сейчас, как я уже сказал, я еще раз расскажу об этом на нескольких слайдах."
    ]
  },
  {
    "time": [
      1255.1,
      1261.07
    ],
    "en": [
      "Since I just showed you ECMP, equal cost multipath load-balancing with a dynamic routing protocol,"
    ],
    "ru": [
      "Поскольку я только что показал вам ECMP, равную стоимость многопутевой балансировки нагрузки с протоколом динамической маршрутизации,"
    ]
  },
  {
    "time": [
      1261.07,
      1265.85
    ],
    "en": [
      "I just want to let you know that you can do the same with static routes as well. I disabled"
    ],
    "ru": [
      "Я просто хочу сообщить вам, что вы можете сделать то же самое и со статическими маршрутами. Я отключил"
    ]
  },
  {
    "time": [
      1265.85,
      1273.59
    ],
    "en": [
      "OSPF on R1, and then configured two static routes to 192.168.4.0, one via R2 and one"
    ],
    "ru": [
      "OSPF на маршрутизаторе R1, а затем настроил два статических маршрута на 192.168.4.0, один через R2 и один."
    ]
  },
  {
    "time": [
      1273.59,
      1279.49
    ],
    "en": [
      "via R3. Then, both are added to the routing table, and traffic will be load-balanced over"
    ],
    "ru": [
      "через R3. Затем оба будут добавлены в таблицу маршрутизации, и трафик будет сбалансирован по нагрузке."
    ]
  },
  {
    "time": [
      1279.49,
      1285.28
    ],
    "en": [
      "both routes. Notice that both routes have a metric of 0. Static routes don’t really"
    ],
    "ru": [
      "оба маршрута. Обратите внимание, что оба маршрута имеют метрику 0. Статические маршруты на самом деле не"
    ]
  },
  {
    "time": [
      1285.28,
      1291.82
    ],
    "en": [
      "use the concept of ‘metric’ so you’ll always see 0 here. Notice also that the administrative"
    ],
    "ru": [
      "используйте понятие \"метрика\", чтобы вы всегда видели здесь 0. Также обратите внимание, что административный"
    ]
  },
  {
    "time": [
      1291.82,
      1297.651
    ],
    "en": [
      "distance, AD, value of static routes is 1. As I said, I’ll talk about what AD is in"
    ],
    "ru": [
      "расстояние, AD, значение статических маршрутов равно 1. Как я уже сказал, я расскажу о том, в чем состоит AD."
    ]
  },
  {
    "time": [
      1297.651,
      1302.39
    ],
    "en": [
      "a few slides. For now, let’s return back to the topic of metric."
    ],
    "ru": [
      "несколько слайдов. А пока вернемся к теме метрики."
    ]
  },
  {
    "time": [
      1302.39,
      1307.59
    ],
    "en": [
      "As I already mentioned, each routing protocol uses a different metric. I will go into each"
    ],
    "ru": [
      "Как я уже упоминал, каждый протокол маршрутизации использует разные метрики. Я пойду в каждый"
    ]
  },
  {
    "time": [
      1307.59,
      1313.56
    ],
    "en": [
      "of these in more detail in later videos, but here is a summary to introduce you to each."
    ],
    "ru": [
      "из них более подробно в следующих видео, но вот краткое изложение, чтобы познакомить вас с каждым."
    ]
  },
  {
    "time": [
      1313.56,
      1319.54
    ],
    "en": [
      "RIP uses by far the simplest metric, hop count. Each router in the path to the destination"
    ],
    "ru": [
      "RIP использует самую простую метрику - количество переходов. Каждый маршрутизатор на пути к месту назначения"
    ]
  },
  {
    "time": [
      1319.54,
      1325.96
    ],
    "en": [
      "counts as one ‘hop’, and the total metric is the total number of hops to reach the destination."
    ],
    "ru": [
      "считается одним «прыжком», а общая метрика - это общее количество прыжков до места назначения."
    ]
  },
  {
    "time": [
      1325.96,
      1331.62
    ],
    "en": [
      "One big downside is that links of all speeds are equal, they all count as one hop. A 10"
    ],
    "ru": [
      "Одним большим недостатком является то, что ссылки всех скоростей равны, все они считаются одним прыжком. А 10"
    ]
  },
  {
    "time": [
      1331.62,
      1337.36
    ],
    "en": [
      "megabit per second ethernet link is one hop, and a 10 gigabit per second link is one hop."
    ],
    "ru": [
      "соединение Ethernet с мегабитами в секунду - это один переход, а соединение со скоростью 10 гигабит в секунду - это один переход."
    ]
  },
  {
    "time": [
      1337.36,
      1344.89
    ],
    "en": [
      "So, this is a very primitive way of calculating metric, and is clearly not ideal. EIGRP uses"
    ],
    "ru": [
      "Итак, это очень примитивный способ вычисления метрики, и он явно не идеален. EIGRP использует"
    ]
  },
  {
    "time": [
      1344.89,
      1349.83
    ],
    "en": [
      "the most complicated metric of the IGPs, which is a calculation based on bandwidth and delay"
    ],
    "ru": [
      "самая сложная метрика IGP, которая рассчитывается на основе полосы пропускания и задержки"
    ]
  },
  {
    "time": [
      1349.83,
      1356.37
    ],
    "en": [
      "by default, however with configuration other factors can be calculated as well. One thing"
    ],
    "ru": [
      "по умолчанию, однако с конфигурацией могут быть рассчитаны и другие факторы. Одна вещь"
    ]
  },
  {
    "time": [
      1356.37,
      1360.7
    ],
    "en": [
      "to note is that only the bandwidth of the SLOWEST link in the route is used to calculate"
    ],
    "ru": [
      "Следует отметить, что для расчета"
    ]
  },
  {
    "time": [
      1360.7,
      1366.67
    ],
    "en": [
      "the metric, but the total delay values of all links in the path are used. This ‘delay’"
    ],
    "ru": [
      "метрика, но используются общие значения задержки всех ссылок в пути. Эта «задержка»"
    ]
  },
  {
    "time": [
      1366.67,
      1371.44
    ],
    "en": [
      "value is a little misleading, since by default it’s a value assigned to the interface based"
    ],
    "ru": [
      "значение немного вводит в заблуждение, поскольку по умолчанию это значение, присвоенное интерфейсу на основе"
    ]
  },
  {
    "time": [
      1371.44,
      1376.01
    ],
    "en": [
      "on its bandwidth. Anyway, I’ll talk more about this in the next video when we go in"
    ],
    "ru": [
      "на его пропускной способности. В любом случае, я расскажу об этом подробнее в следующем видео, когда мы войдем"
    ]
  },
  {
    "time": [
      1376.01,
      1383.76
    ],
    "en": [
      "more depth on EIGRP. Next up is OSPF, its metric is called ‘cost’. The cost of each"
    ],
    "ru": [
      "подробнее об EIGRP. Далее идет OSPF, его метрика называется «стоимость». Стоимость каждого"
    ]
  },
  {
    "time": [
      1383.76,
      1387.99
    ],
    "en": [
      "link is calculated based on the bandwidth, and the total bandwidth of the links in the"
    ],
    "ru": [
      "ссылка рассчитывается на основе пропускной способности, а общая пропускная способность ссылок в"
    ]
  },
  {
    "time": [
      1387.99,
      1393.22
    ],
    "en": [
      "route make up the metric of the route. This is a very simple way of calculating metric,"
    ],
    "ru": [
      "route составляют метрику маршрута. Это очень простой способ расчета метрики,"
    ]
  },
  {
    "time": [
      1393.22,
      1398.94
    ],
    "en": [
      "but also clearly better than RIP’s which doesn’t take into account link speed. Finally,"
    ],
    "ru": [
      "но также явно лучше, чем RIP, который не учитывает скорость соединения. Наконец-то,"
    ]
  },
  {
    "time": [
      1398.94,
      1405.16
    ],
    "en": [
      "IS-IS also uses a metric called ‘cost’. However, the cost of each link is not automatically"
    ],
    "ru": [
      "IS-IS также использует метрику под названием «стоимость». Однако стоимость каждой ссылки не определяется автоматически."
    ]
  },
  {
    "time": [
      1405.16,
      1412.54
    ],
    "en": [
      "calculated based on bandwidth. All links have a cost of 10 by default. So, without any configuration,"
    ],
    "ru": [
      "рассчитывается на основе пропускной способности. По умолчанию все ссылки имеют стоимость 10. Итак, без какой-либо конфигурации,"
    ]
  },
  {
    "time": [
      1412.54,
      1418.65
    ],
    "en": [
      "it functions the same as RIP, being a simple hop count metric. Okay, so IS-IS I won’t"
    ],
    "ru": [
      "он работает так же, как RIP, являясь простой метрикой количества переходов. Хорошо, так Я-ЕСТЬ, я не буду"
    ]
  },
  {
    "time": [
      1418.65,
      1422.991
    ],
    "en": [
      "talk about much, but these other three I will give more detail about in future videos. For"
    ],
    "ru": [
      "поговорить о многом, но об этих трех других я расскажу более подробно в следующих видео. Для"
    ]
  },
  {
    "time": [
      1422.991,
      1429.78
    ],
    "en": [
      "now just remember the basics. RIP uses hop count, EIGRP uses a calculation based on bandwidth"
    ],
    "ru": [
      "теперь просто запомните основы. RIP использует количество переходов, EIGRP использует расчет на основе пропускной способности."
    ]
  },
  {
    "time": [
      1429.78,
      1436.42
    ],
    "en": [
      "and delay, and OSPF uses a cost based on bandwidth. The purpose of all of these metrics is the"
    ],
    "ru": [
      "и задержка, а OSPF использует стоимость, основанную на пропускной способности. Цель всех этих показателей -"
    ]
  },
  {
    "time": [
      1436.42,
      1441.86
    ],
    "en": [
      "same, to let the router select the best route to the destination."
    ],
    "ru": [
      "то же самое, чтобы позволить маршрутизатору выбрать лучший маршрут к месту назначения."
    ]
  },
  {
    "time": [
      1441.86,
      1445.45
    ],
    "en": [
      "To briefly demonstrate how the difference in metrics can affect which routes the router"
    ],
    "ru": [
      "Чтобы вкратце продемонстрировать, как разница в показателях может повлиять на маршруты маршрутизатора."
    ]
  },
  {
    "time": [
      1445.45,
      1451.61
    ],
    "en": [
      "selects, let’s look at this diagram again from R1’s perspective, deciding which route"
    ],
    "ru": [
      "выбирает, давайте еще раз посмотрим на эту диаграмму с точки зрения R1, решив, какой маршрут"
    ]
  },
  {
    "time": [
      1451.61,
      1460.1
    ],
    "en": [
      "to 192.168.4.0/24 to select for its route table. If it uses RIP, the metric is hop count."
    ],
    "ru": [
      "на 192.168.4.0/24, чтобы выбрать его в таблице маршрутов. Если он использует RIP, метрикой является количество переходов."
    ]
  },
  {
    "time": [
      1460.1,
      1468.16
    ],
    "en": [
      "Via R2, the hop count is 2. One hop to R2, one hop to R4. Via R3, the hop count is also"
    ],
    "ru": [
      "Через R2, количество переходов равно 2. Один переход к R2, один переход к R4. Через R3 количество переходов также"
    ]
  },
  {
    "time": [
      1468.16,
      1475.03
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
      1468.16,
      1475.03
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
      1475.03,
      1481.07
    ],
    "en": [
      "fastethernet connection. So, both routes will be put into R1’s route table, and R1 will"
    ],
    "ru": [
      "подключение fastethernet. Таким образом, оба маршрута будут помещены в таблицу маршрутов R1, а R1 будет"
    ]
  },
  {
    "time": [
      1481.07,
      1486.98
    ],
    "en": [
      "load balance traffic using both routes, even though one route is slower. However, if OSPF"
    ],
    "ru": [
      "балансировка нагрузки трафика с использованием обоих маршрутов, даже если один маршрут медленнее. Однако если OSPF"
    ]
  },
  {
    "time": [
      1486.98,
      1493.39
    ],
    "en": [
      "is used instead of RIP, which path will be used? Unlike RIP, OSPF’s metric cost does"
    ],
    "ru": [
      "используется вместо RIP, какой путь будет использоваться? В отличие от RIP, метрическая стоимость OSPF"
    ]
  },
  {
    "time": [
      1493.39,
      1499.16
    ],
    "en": [
      "take into account bandwidth. So, the slower connection between R3 and R4 will result in"
    ],
    "ru": [
      "учитывать пропускную способность. Таким образом, более медленное соединение между R3 и R4 приведет к"
    ]
  },
  {
    "time": [
      1499.16,
      1505.2
    ],
    "en": [
      "a higher metric value, making it less favorable. So, only this route will be entered into the"
    ],
    "ru": [
      "более высокое значение показателя, что делает его менее выгодным. Итак, только этот маршрут будет введен в"
    ]
  },
  {
    "time": [
      1505.2,
      1511.66
    ],
    "en": [
      "route table, and R1 will send all traffic destined to the 192.168.4.0/24 network via"
    ],
    "ru": [
      "таблица маршрутов, а R1 будет отправлять весь трафик, предназначенный для сети 192.168.4.0/24, через"
    ]
  },
  {
    "time": [
      1511.66,
      1518.74
    ],
    "en": [
      "R2. RIP views both routes as equal, but OSPF does not. Again, the purpose of all of these"
    ],
    "ru": [
      "R2. RIP рассматривает оба маршрута как равные, а OSPF - нет. Опять же, цель всего этого"
    ]
  },
  {
    "time": [
      1518.74,
      1523.55
    ],
    "en": [
      "metrics is the same, to let the router select the best route to the destination, but some"
    ],
    "ru": [
      "метрики такие же, чтобы позволить маршрутизатору выбрать лучший маршрут к месту назначения, но некоторые"
    ]
  },
  {
    "time": [
      1523.55,
      1528.48
    ],
    "en": [
      "routing protocols might make better decisions than others."
    ],
    "ru": [
      "протоколы маршрутизации могут принимать лучшие решения, чем другие."
    ]
  },
  {
    "time": [
      1528.48,
      1533.29
    ],
    "en": [
      "Now let’s talk about administrative distance, which I briefly mentioned earlier. In most"
    ],
    "ru": [
      "Теперь поговорим об административной дистанции, о которой я вкратце упоминал ранее. В большинстве"
    ]
  },
  {
    "time": [
      1533.29,
      1538.89
    ],
    "en": [
      "cases a company will only use a single IGP for their network – usually OSPF, but sometimes"
    ],
    "ru": [
      "случаях компания будет использовать только один IGP для своей сети - обычно OSPF, но иногда"
    ]
  },
  {
    "time": [
      1538.89,
      1545.81
    ],
    "en": [
      "EIGRP if they only use Cisco equipment. However, in some rare cases they might use two. For"
    ],
    "ru": [
      "EIGRP, если они используют только оборудование Cisco. Однако в некоторых редких случаях они могут использовать два. Для"
    ]
  },
  {
    "time": [
      1545.81,
      1550.04
    ],
    "en": [
      "example, if two companies connect their networks to share information, two different routing"
    ],
    "ru": [
      "Например, если две компании соединяют свои сети для обмена информацией, два разных маршрута"
    ]
  },
  {
    "time": [
      1550.04,
      1555.23
    ],
    "en": [
      "protocols might be in use. You might connect a network running OSPF to a network running"
    ],
    "ru": [
      "протоколы могут использоваться. Вы можете подключить сеть, в которой работает OSPF, к сети, в которой запущен"
    ]
  },
  {
    "time": [
      1555.23,
      1561.45
    ],
    "en": [
      "EIGRP. Metric, which I just showed you, is used to compare routes learned via the same"
    ],
    "ru": [
      "EIGRP. Показатель, который я вам только что показал, используется для сравнения маршрутов, полученных с помощью одного и того же"
    ]
  },
  {
    "time": [
      1561.45,
      1567.35
    ],
    "en": [
      "routing protocol. If a router learns two routes to the same destination via OSPF, it uses"
    ],
    "ru": [
      "протокол маршрутизации. Если маршрутизатор узнает два маршрута к одному и тому же месту назначения через OSPF, он использует"
    ]
  },
  {
    "time": [
      1567.35,
      1572.92
    ],
    "en": [
      "metric to choose which route is better. However, different routing protocols use totally different"
    ],
    "ru": [
      "метрика, чтобы выбрать, какой маршрут лучше. Однако разные протоколы маршрутизации используют совершенно разные"
    ]
  },
  {
    "time": [
      1572.92,
      1580.8
    ],
    "en": [
      "metrics, so they cannot be compared. For example, an OSPF route to 192.168.4.0/24 might have"
    ],
    "ru": [
      "метрики, поэтому их нельзя сравнивать. Например, маршрут OSPF на 192.168.4.0/24 может иметь"
    ]
  },
  {
    "time": [
      1580.8,
      1588.76
    ],
    "en": [
      "a metric of 30, while an EIGRP route to the same destination might have a metric of 33280."
    ],
    "ru": [
      "метрика 30, в то время как маршрут EIGRP к тому же месту назначения может иметь метрику 33280."
    ]
  },
  {
    "time": [
      1588.76,
      1593.309
    ],
    "en": [
      "Which route is better? Which route should the router put in the route table? We can’t"
    ],
    "ru": [
      "Какой маршрут лучше? Какой маршрут маршрутизатор должен занести в таблицу маршрутов? Мы не можем"
    ]
  },
  {
    "time": [
      1593.309,
      1598.55
    ],
    "en": [
      "really answer those questions by looking at the metrics, because OSPF and EIGRP use totally"
    ],
    "ru": [
      "действительно ответьте на эти вопросы, взглянув на показатели, потому что OSPF и EIGRP полностью используют"
    ]
  },
  {
    "time": [
      1598.55,
      1604.88
    ],
    "en": [
      "different metrics. So, the administrative distance, or AD, is used to determine which"
    ],
    "ru": [
      "разные метрики. Таким образом, административное расстояние, или AD, используется для определения того, какой"
    ]
  },
  {
    "time": [
      1604.88,
      1610.4
    ],
    "en": [
      "routing protocol is preferred. A lower AD is preferred, and indicates that the routing"
    ],
    "ru": [
      "протокол маршрутизации является предпочтительным. Более низкий AD является предпочтительным и указывает на то, что маршрутизация"
    ]
  },
  {
    "time": [
      1610.4,
      1615.65
    ],
    "en": [
      "protocol is considered more ‘trustworthy’, meaning more likely to select good routes."
    ],
    "ru": [
      "протокол считается более «заслуживающим доверия», то есть с большей вероятностью выберет хорошие маршруты."
    ]
  },
  {
    "time": [
      1615.65,
      1620.27
    ],
    "en": [
      "As you saw before, RIP’s hop count-based metric system is not very good, so it has"
    ],
    "ru": [
      "Как вы видели ранее, метрическая система RIP на основе подсчета переходов не очень хороша, поэтому в ней есть"
    ]
  },
  {
    "time": [
      1620.27,
      1625.55
    ],
    "en": [
      "a high AD, because it’s not as trustworthy. It might say two routes are equal because"
    ],
    "ru": [
      "высокий AD, потому что он не заслуживает доверия. Можно сказать, что два маршрута равны, потому что"
    ]
  },
  {
    "time": [
      1625.55,
      1632.42
    ],
    "en": [
      "they have the same hop count, although really one route is much worse because of lower bandwidth."
    ],
    "ru": [
      "у них одинаковое количество переходов, хотя на самом деле один маршрут намного хуже из-за меньшей пропускной способности."
    ]
  },
  {
    "time": [
      1632.42,
      1637.2
    ],
    "en": [
      "Ready for some memorization? These are the administrative distances of most common types"
    ],
    "ru": [
      "Готовы к запоминанию? Это административные расстояния наиболее распространенных типов"
    ]
  },
  {
    "time": [
      1637.2,
      1642.99
    ],
    "en": [
      "of routes. I HIGHLY recommend you use the flashcards to remember these. I would be surprised"
    ],
    "ru": [
      "маршрутов. Я НАСТОЯТЕЛЬНО рекомендую вам использовать карточки, чтобы запомнить их. Я был бы удивлен"
    ]
  },
  {
    "time": [
      1642.99,
      1649.001
    ],
    "en": [
      "if you don’t get a question on the exam like ‘Two routes to the 10.0.0.0/24 network"
    ],
    "ru": [
      "если на экзамене вам не будет задан вопрос типа \"Два пути в сеть 10.0.0.0/24\""
    ]
  },
  {
    "time": [
      1649.001,
      1655.27
    ],
    "en": [
      "are learned, one from OSPF and one from EIGRP. Which route will be entered in the route table?’."
    ],
    "ru": [
      "изучаются, один из OSPF и один из EIGRP. Какой маршрут будет занесен в таблицу маршрутов? »."
    ]
  },
  {
    "time": [
      1655.27,
      1661.94
    ],
    "en": [
      "To answer that question, you would need to know that EIGRP has a lower AD, so the EIGRP"
    ],
    "ru": [
      "Чтобы ответить на этот вопрос, вам нужно знать, что EIGRP имеет более низкую AD, поэтому EIGRP"
    ]
  },
  {
    "time": [
      1661.94,
      1667.05
    ],
    "en": [
      "route is preferred and will be entered in the route table. Again, a lower AD number"
    ],
    "ru": [
      "маршрут является предпочтительным и будет занесен в таблицу маршрутов. Опять же, меньшее число AD"
    ]
  },
  {
    "time": [
      1667.05,
      1672.07
    ],
    "en": [
      "is preferred, and will be selected over a higher AD. Keep in mind that these are the"
    ],
    "ru": [
      "является предпочтительным и будет выбран выше более высокого AD. Имейте в виду, что это"
    ]
  },
  {
    "time": [
      1672.07,
      1678.39
    ],
    "en": [
      "values used on Cisco devices, other vendors might rank these differently. So, the most"
    ],
    "ru": [
      "значения, используемые на устройствах Cisco, другие поставщики могут ранжировать их иначе. Итак, самые"
    ]
  },
  {
    "time": [
      1678.39,
      1684.86
    ],
    "en": [
      "preferred routes are those to directly connected networks, they have an AD of 0. Static routes"
    ],
    "ru": [
      "предпочтительные маршруты - это маршруты к напрямую подключенным сетям, для них AD = 0. Статические маршруты"
    ]
  },
  {
    "time": [
      1684.86,
      1692.26
    ],
    "en": [
      "are the next best, they have an AD of 1. Next up are external BGP, also known as eBGP routes,"
    ],
    "ru": [
      "На втором месте стоят AD, равные 1. Далее идут внешние маршруты BGP, также известные как маршруты eBGP,"
    ]
  },
  {
    "time": [
      1692.26,
      1700.06
    ],
    "en": [
      "with an AD of 20. There is another kind of BGP, internal BGP, iBGP, which you’ll see"
    ],
    "ru": [
      "с AD, равным 20. Существует еще один тип BGP, внутренний BGP, iBGP, который вы увидите"
    ]
  },
  {
    "time": [
      1700.06,
      1707.7
    ],
    "en": [
      "later. EIGRP routes have an AD of 90. Next is IGRP, the older version of EIGRP, with"
    ],
    "ru": [
      "потом. Маршруты EIGRP имеют AD 90. Далее идет IGRP, более старая версия EIGRP, с"
    ]
  },
  {
    "time": [
      1707.7,
      1718.76
    ],
    "en": [
      "an AD of 100. OSPF has an AD of 110. IS-IS has an AD of 115, and RIP has an AD of 120."
    ],
    "ru": [
      "AD 100. OSPF имеет AD 110. IS-IS имеет AD 115, а RIP имеет AD 120."
    ]
  },
  {
    "time": [
      1718.76,
      1726.69
    ],
    "en": [
      "So, of the IGPs I showed you, which are RIP, EIGRP, OSPF, and IS-IS, EIGRP is the most"
    ],
    "ru": [
      "Итак, из IGP, которые я вам показал, а именно RIP, EIGRP, OSPF и IS-IS, EIGRP - самый"
    ]
  },
  {
    "time": [
      1726.69,
      1735.02
    ],
    "en": [
      "preferred, it has the lowest AD. However, EIGRP external routes have a higher AD, 170."
    ],
    "ru": [
      "предпочтительно, он имеет самый низкий AD. Однако внешние маршруты EIGRP имеют более высокий AD, 170."
    ]
  },
  {
    "time": [
      1735.02,
      1740.26
    ],
    "en": [
      "These are beyond the scope of the CCNA, but basically they are routes from outside of"
    ],
    "ru": [
      "Они выходят за рамки CCNA, но в основном это маршруты извне"
    ]
  },
  {
    "time": [
      1740.26,
      1748.29
    ],
    "en": [
      "the EIGRP network, that are then advertised into EIGRP. Then internal BGP, iBGP, has an"
    ],
    "ru": [
      "сеть EIGRP, которые затем объявляются в EIGRP. Тогда внутренний BGP, iBGP, имеет"
    ]
  },
  {
    "time": [
      1748.29,
      1755.929
    ],
    "en": [
      "AD of 200. Then one more. Routes with an AD of 255 are unusable. Here’s a quote from"
    ],
    "ru": [
      "200 г. н.э. Потом еще один. Маршруты с AD 255 непригодны. Вот цитата из"
    ]
  },
  {
    "time": [
      1755.929,
      1762.19
    ],
    "en": [
      "Cisco. If the administrative distance is 255, the router does not believe the source of"
    ],
    "ru": [
      "Cisco. Если административное расстояние равно 255, маршрутизатор не верит источнику"
    ]
  },
  {
    "time": [
      1762.19,
      1767.57
    ],
    "en": [
      "that route and does not install the route in the routing table. So, make sure you memorize"
    ],
    "ru": [
      "этот маршрут и не устанавливает маршрут в таблице маршрутизации. Итак, убедитесь, что вы запомнили"
    ]
  },
  {
    "time": [
      1767.57,
      1772.02
    ],
    "en": [
      "these. If you’re not using the flashcards, I really think you should for things like"
    ],
    "ru": [
      "эти. Если вы не используете дидактические карточки, я действительно думаю, что вам следует делать такие вещи, как"
    ]
  },
  {
    "time": [
      1772.02,
      1779.58
    ],
    "en": [
      "this. Without flashcards it might be difficult to memorize these. But if you use the flashcards, it’s quite easy."
    ],
    "ru": [
      "это. Без карточек их было бы трудно запомнить. Но если использовать карточки, это довольно просто."
    ]
  },
  {
    "time": [
      1779.58,
      1785.33
    ],
    "en": [
      "it’s quite easy. Here’s a quick quiz question to demonstrate a point. The following routes to the destination"
    ],
    "ru": [
      "это довольно просто. Вот небольшой вопрос-тест, чтобы продемонстрировать свою точку зрения. Следующие маршруты к месту назначения"
    ]
  },
  {
    "time": [
      1785.33,
      1793.97
    ],
    "en": [
      "network 10.1.1.0/24 are learned. A route with a next hop of 192.168.1.1, learned via RIP,"
    ],
    "ru": [
      "сеть 10.1.1.0/24 изучены. Маршрут со следующим переходом 192.168.1.1, изученный через RIP,"
    ]
  },
  {
    "time": [
      1793.97,
      1800.75
    ],
    "en": [
      "with a metric of 5. A route with a next hop of 192.168.2.1, learned via RIP, with a metric"
    ],
    "ru": [
      "с метрикой 5. Маршрут со следующим переходом 192.168.2.1, изученный через RIP, с метрикой"
    ]
  },
  {
    "time": [
      1800.75,
      1809.82
    ],
    "en": [
      "of 3. And a route with a next hop of 192.168.3.1, learned via OSPF, with a metric of 10. Which"
    ],
    "ru": [
      "из 3. И маршрут со следующим переходом 192.168.3.1, изученный через OSPF, с метрикой 10. Что"
    ]
  },
  {
    "time": [
      1809.82,
      1816.11
    ],
    "en": [
      "route to 10.1.1.0/24 will be added to the route table? Pause the video to think about"
    ],
    "ru": [
      "маршрут до 10.1.1.0/24 будет добавлен в таблицу маршрутов? Поставьте видео на паузу, чтобы подумать"
    ]
  },
  {
    "time": [
      1816.11,
      1826.09
    ],
    "en": [
      "the answer. Okay, so the answer is the OSPF route will be added to the route table. Metric"
    ],
    "ru": [
      "ответ. Итак, ответ - маршрут OSPF будет добавлен в таблицу маршрутов. Метрическая"
    ]
  },
  {
    "time": [
      1826.09,
      1831.34
    ],
    "en": [
      "is used to compare routes learned from the same routing protocol. However, before comparing"
    ],
    "ru": [
      "используется для сравнения маршрутов, полученных из одного и того же протокола маршрутизации. Однако перед сравнением"
    ]
  },
  {
    "time": [
      1831.34,
      1837.42
    ],
    "en": [
      "metrics, AD is used to select the best route. The OSPF route will always take precedence"
    ],
    "ru": [
      "метрики, AD используется для выбора наилучшего маршрута. Маршрут OSPF всегда будет иметь приоритет"
    ]
  },
  {
    "time": [
      1837.42,
      1842.61
    ],
    "en": [
      "over the RIP routes, because it has a lower AD."
    ],
    "ru": [
      "по маршрутам RIP, потому что у него более низкий AD."
    ]
  },
  {
    "time": [
      1842.61,
      1847.2
    ],
    "en": [
      "Looking back at the route table I showed you before, here you can see the AD of 1 for these"
    ],
    "ru": [
      "Оглядываясь на таблицу маршрутов, которую я показал вам ранее, вы можете увидеть AD 1 для этих"
    ]
  },
  {
    "time": [
      1847.2,
      1852.48
    ],
    "en": [
      "static routes. The connected and local routes above them have an AD of 0, but it is not"
    ],
    "ru": [
      "статические маршруты. Связанные и локальные маршруты над ними имеют AD 0, но это не так."
    ]
  },
  {
    "time": [
      1852.48,
      1855.59
    ],
    "en": [
      "displayed in the route table."
    ],
    "ru": [
      "отображается в таблице маршрутов."
    ]
  },
  {
    "time": [
      1855.59,
      1862.04
    ],
    "en": [
      "And another look at this route table with OSPF routes. Here you can see the AD of 110."
    ],
    "ru": [
      "И еще раз взгляните на эту таблицу маршрутов с маршрутами OSPF. Здесь вы можете увидеть 110 г. н.э."
    ]
  },
  {
    "time": [
      1862.04,
      1866.34
    ],
    "en": [
      "Remember that the number on the left inside the square brackets is the AD, and the number"
    ],
    "ru": [
      "Помните, что число слева в квадратных скобках - это AD, а число"
    ]
  },
  {
    "time": [
      1866.34,
      1869.87
    ],
    "en": [
      "on the right is the metric."
    ],
    "ru": [
      "справа метрика."
    ]
  },
  {
    "time": [
      1869.87,
      1875.26
    ],
    "en": [
      "One final point before moving on to the quiz. You can change the AD of a routing protocol,"
    ],
    "ru": [
      "Еще одно замечание перед тем, как перейти к викторине. Вы можете изменить AD протокола маршрутизации,"
    ]
  },
  {
    "time": [
      1875.26,
      1880.25
    ],
    "en": [
      "and I will demonstrate this when we cover OSPF configuration in a later video. If you"
    ],
    "ru": [
      "и я продемонстрирую это, когда мы рассмотрим конфигурацию OSPF в следующем видео. если ты"
    ]
  },
  {
    "time": [
      1880.25,
      1885.45
    ],
    "en": [
      "want OSPF routes to be preferred over EIGRP routes, you can configure the router to do"
    ],
    "ru": [
      "хотите, чтобы маршруты OSPF были предпочтительнее маршрутов EIGRP, вы можете настроить маршрутизатор для выполнения"
    ]
  },
  {
    "time": [
      1885.45,
      1891.98
    ],
    "en": [
      "that. You can also change the AD of a static route. Notice here I used the standard command"
    ],
    "ru": [
      "что. Вы также можете изменить AD статического маршрута. Обратите внимание, здесь я использовал стандартную команду"
    ]
  },
  {
    "time": [
      1891.98,
      1898.49
    ],
    "en": [
      "to configure a static route. IP ROUTE, followed by the destination, the subnet mask, and then"
    ],
    "ru": [
      "для настройки статического маршрута. IP-МАРШРУТ, за которым следует пункт назначения, маска подсети, а затем"
    ]
  },
  {
    "time": [
      1898.49,
      1904.46
    ],
    "en": [
      "the next hop address. However, I used the question mark to check for further options."
    ],
    "ru": [
      "адрес следующего перехода. Однако я использовал вопросительный знак, чтобы проверить, есть ли другие варианты."
    ]
  },
  {
    "time": [
      1904.46,
      1909.37
    ],
    "en": [
      "Here it says ‘distance metric’ for this route. It includes the word ‘metric’,"
    ],
    "ru": [
      "Здесь написано «метрика расстояния» для этого маршрута. В нем есть слово \"метрика\","
    ]
  },
  {
    "time": [
      1909.37,
      1914.6
    ],
    "en": [
      "but don’t confuse this for the metric we talked about earlier. This is administrative distance."
    ],
    "ru": [
      "но не путайте это с показателем, о котором мы говорили ранее. Это административная дистанция."
    ]
  },
  {
    "time": [
      1914.6,
      1921.47
    ],
    "en": [
      "distance. So, I configured the route with an AD of 100. In the output of ‘show ip route’, you"
    ],
    "ru": [
      "расстояние. Итак, я настроил маршрут с AD, равным 100. В выводе «show ip route» вы"
    ]
  },
  {
    "time": [
      1921.47,
      1927.59
    ],
    "en": [
      "can see that the AD is now 100, instead of the default 1 for a normal static route. Now,"
    ],
    "ru": [
      "можно увидеть, что AD теперь 100, вместо 1 по умолчанию для обычного статического маршрута. Теперь,"
    ]
  },
  {
    "time": [
      1927.59,
      1930.51
    ],
    "en": [
      "why would you want to do this?"
    ],
    "ru": [
      "зачем тебе это нужно?"
    ]
  },
  {
    "time": [
      1930.51,
      1935.11
    ],
    "en": [
      "By changing the AD of a static route, you can make it less preferred than routes learned"
    ],
    "ru": [
      "Изменив AD статического маршрута, вы можете сделать его менее предпочтительным, чем изученные маршруты."
    ]
  },
  {
    "time": [
      1935.11,
      1940.08
    ],
    "en": [
      "by a dynamic routing protocol to the same destination. But, you have to make sure that"
    ],
    "ru": [
      "по протоколу динамической маршрутизации к тому же месту назначения. Но вы должны убедиться, что"
    ]
  },
  {
    "time": [
      1940.08,
      1944.8
    ],
    "en": [
      "the static route’s AD is higher than the routing protocol’s AD, or else the static"
    ],
    "ru": [
      "AD статического маршрута выше, чем AD протокола маршрутизации, в противном случае статический"
    ]
  },
  {
    "time": [
      1944.8,
      1950.08
    ],
    "en": [
      "route will still be preferred. This kind of static route is called a ‘floating static"
    ],
    "ru": [
      "маршрут по-прежнему будет предпочтительнее. Такой статический маршрут называется \"плавающим статическим\""
    ]
  },
  {
    "time": [
      1950.08,
      1955.02
    ],
    "en": [
      "route’. The route will be inactive, meaning it won’t be in the routing table, unless"
    ],
    "ru": [
      "маршрут'. Маршрут будет неактивным, то есть его не будет в таблице маршрутизации, если только"
    ]
  },
  {
    "time": [
      1955.02,
      1960.3
    ],
    "en": [
      "the route learned by the dynamic routing protocol is removed. For example, maybe the remote"
    ],
    "ru": [
      "маршрут, полученный протоколом динамической маршрутизации, удаляется. Например, может быть удаленный"
    ]
  },
  {
    "time": [
      1960.3,
      1965.14
    ],
    "en": [
      "router stops advertising it for some reason, or an interface failure causes an adjacency"
    ],
    "ru": [
      "маршрутизатор по какой-то причине перестает сообщать об этом, или сбой интерфейса вызывает смежность"
    ]
  },
  {
    "time": [
      1965.14,
      1969.911
    ],
    "en": [
      "with a neighbor to be lost. You can see here that floating static routes are part of the"
    ],
    "ru": [
      "с соседом потеряться. Вы можете видеть здесь, что плавающие статические маршруты являются частью"
    ]
  },
  {
    "time": [
      1969.911,
      1975.2
    ],
    "en": [
      "exam topics list. Make sure to watch the lab videos and download my packet tracer labs"
    ],
    "ru": [
      "список тем экзамена. Обязательно посмотрите лабораторные видео и скачайте мои лабораторные работы по отслеживанию пакетов."
    ]
  },
  {
    "time": [
      1975.2,
      1977.799
    ],
    "en": [
      "to get practice configuring everything we cover."
    ],
    "ru": [
      "чтобы попрактиковаться в настройке всего, что мы рассмотрим."
    ]
  },
  {
    "time": [
      1977.799,
      1983.97
    ],
    "en": [
      "Okay, so let’s quickly review what we covered in today’s video. I gave you a brief introduction"
    ],
    "ru": [
      "Хорошо, давайте быстро рассмотрим то, что мы рассмотрели в сегодняшнем видео. Я дал вам краткое представление"
    ]
  },
  {
    "time": [
      1983.97,
      1988.87
    ],
    "en": [
      "to dynamic routing protocols. They allow routers to automatically learn routes to different"
    ],
    "ru": [
      "протоколам динамической маршрутизации. Они позволяют маршрутизаторам автоматически изучать маршруты к разным"
    ]
  },
  {
    "time": [
      1988.87,
      1995.01
    ],
    "en": [
      "destinations without having to manually configure static routes. Static routes are useful, but"
    ],
    "ru": [
      "назначения без необходимости вручную настраивать статические маршруты. Статические маршруты полезны, но"
    ]
  },
  {
    "time": [
      1995.01,
      1999.16
    ],
    "en": [
      "in large networks it’s not practical to use only static routes, you would have to"
    ],
    "ru": [
      "в больших сетях нецелесообразно использовать только статические маршруты, вам придется"
    ]
  },
  {
    "time": [
      1999.16,
      2004.61
    ],
    "en": [
      "configure thousands of different routes, which is not a good strategy. We covered the different"
    ],
    "ru": [
      "настраивать тысячи различных маршрутов, что не является хорошей стратегией. Мы рассмотрели разные"
    ]
  },
  {
    "time": [
      2004.61,
      2010.081
    ],
    "en": [
      "types of dynamic routing protocols. First, the big two categories are IGPs, interior"
    ],
    "ru": [
      "типы протоколов динамической маршрутизации. Во-первых, две большие категории - это IGP, внутренние"
    ]
  },
  {
    "time": [
      2010.081,
      2016.63
    ],
    "en": [
      "gateway protocols, used for routing within an organization. Then there are EGPs, exterior"
    ],
    "ru": [
      "протоколы шлюза, используемые для маршрутизации внутри организации. Тогда есть ЭГП, внешние"
    ]
  },
  {
    "time": [
      2016.63,
      2023.09
    ],
    "en": [
      "gateway protocols, used for routing between organizations, for example over the Internet."
    ],
    "ru": [
      "протоколы шлюза, используемые для маршрутизации между организациями, например, через Интернет."
    ]
  },
  {
    "time": [
      2023.09,
      2028.86
    ],
    "en": [
      "The only EGP in use these days is BGP. We can also categorize routing protocols by the"
    ],
    "ru": [
      "Единственный используемый EGP в наши дни - это BGP. Мы также можем классифицировать протоколы маршрутизации по"
    ]
  },
  {
    "time": [
      2028.86,
      2035.49
    ],
    "en": [
      "kind of algorithm they use. There is one type of EGP algorithm, that is path vector. However"
    ],
    "ru": [
      "какой алгоритм они используют. Существует один тип алгоритма EGP - вектор пути. тем не мение"
    ]
  },
  {
    "time": [
      2035.49,
      2042.6
    ],
    "en": [
      "there are two different kinds of IGP algorithms. Distance vector, used by RIP and EIGRP. Also"
    ],
    "ru": [
      "есть два разных типа алгоритмов IGP. Вектор расстояния, используемый RIP и EIGRP. Также"
    ]
  },
  {
    "time": [
      2042.6,
      2049.929
    ],
    "en": [
      "link state, used by OSPF and IS-IS. Then we talked about metrics. Each routing protocol"
    ],
    "ru": [
      "состояние канала, используемое OSPF и IS-IS. Затем мы поговорили о показателях. Каждый протокол маршрутизации"
    ]
  },
  {
    "time": [
      2049.929,
      2055.25
    ],
    "en": [
      "uses a different metric, which is a value used to determine the best route to a destination,"
    ],
    "ru": [
      "использует другую метрику, которая представляет собой значение, используемое для определения наилучшего маршрута к пункту назначения,"
    ]
  },
  {
    "time": [
      2055.25,
      2061.0
    ],
    "en": [
      "within the same routing protocol. However, how do you compare different routing protocols?"
    ],
    "ru": [
      "в рамках одного протокола маршрутизации. Однако как вы сравниваете разные протоколы маршрутизации?"
    ]
  },
  {
    "time": [
      2061.0,
      2066.59
    ],
    "en": [
      "With administrative distance. Use the flashcards to remember the AD of each kind of route and"
    ],
    "ru": [
      "С административной удаленностью. Используйте карточки, чтобы запомнить AD каждого вида маршрута и"
    ]
  },
  {
    "time": [
      2066.59,
      2071.73
    ],
    "en": [
      "routing protocol, I’m sure you’ll need it for the test. I introduced a lot of topics"
    ],
    "ru": [
      "протокол маршрутизации, я уверен, он вам понадобится для теста. Я ввел много тем"
    ]
  },
  {
    "time": [
      2071.73,
      2076.32
    ],
    "en": [
      "in this video, so I want to say that you shouldn’t be worried if you feel you don’t understand"
    ],
    "ru": [
      "в этом видео, поэтому я хочу сказать, что вам не следует беспокоиться, если вы чувствуете, что не понимаете"
    ]
  },
  {
    "time": [
      2076.32,
      2082.72
    ],
    "en": [
      "completely yet. In the next video I will cover RIP and EIGRP, and then the next two or three"
    ],
    "ru": [
      "полностью пока. В следующем видео я расскажу о RIP и EIGRP, а затем в следующих двух или трех"
    ]
  },
  {
    "time": [
      2082.72,
      2088.36
    ],
    "en": [
      "videos after that will cover OSPF. In those videos we will review all of these fundamental"
    ],
    "ru": [
      "видео после этого будут охватывать OSPF. В этих видео мы рассмотрим все эти фундаментальные"
    ]
  },
  {
    "time": [
      2088.36,
      2092.24
    ],
    "en": [
      "topics again, such as administrative distance and metric."
    ],
    "ru": [
      "снова темы, такие как административное расстояние и метрика."
    ]
  },
  {
    "time": [
      2092.24,
      2098.0
    ],
    "en": [
      "Okay let’s move on to today’s quiz. At the end of the quiz there will be a bonus"
    ],
    "ru": [
      "Хорошо, перейдем к сегодняшней викторине. По окончании викторины будет бонус"
    ]
  },
  {
    "time": [
      2098.0,
      2103.66
    ],
    "en": [
      "question from Boson ExSim, the best practice exams for the CCNA. If you’re preparing"
    ],
    "ru": [
      "вопрос от Boson ExSim, экзамены по лучшей практике для CCNA. Если вы готовитесь"
    ]
  },
  {
    "time": [
      2103.66,
      2109.26
    ],
    "en": [
      "for the CCNA exam and you want to make sure you’re really ready, Boson ExSim is, in"
    ],
    "ru": [
      "для экзамена CCNA, и вы хотите убедиться, что действительно готовы, Boson ExSim в"
    ]
  },
  {
    "time": [
      2109.26,
      2113.619
    ],
    "en": [
      "my opinion, the single best thing you can get to prepare yourself for the real exam."
    ],
    "ru": [
      "на мой взгляд, единственное лучшее, что вы можете получить, чтобы подготовиться к настоящему экзамену."
    ]
  },
  {
    "time": [
      2113.619,
      2117.0
    ],
    "en": [
      "Follow the link in the description to get Boson ExSIm."
    ],
    "ru": [
      "Перейдите по ссылке в описании, чтобы получить Boson ExSIm."
    ]
  },
  {
    "time": [
      2117.0,
      2125.13
    ],
    "en": [
      "Here’s quiz question 1. R1 learns four routes to 192.168.1.0/24 through multiple routing"
    ],
    "ru": [
      "Вот вопрос теста 1. R1 изучает четыре маршрута к 192.168.1.0/24 через множественную маршрутизацию."
    ]
  },
  {
    "time": [
      2125.13,
      2133.56
    ],
    "en": [
      "protocols: RIP, EIGRP, OSPF, and IS-IS. Which route/routes will be added to the route table?"
    ],
    "ru": [
      "протоколы: RIP, EIGRP, OSPF и IS-IS. Какой маршрут / маршруты будут добавлены в таблицу маршрутов?"
    ]
  },
  {
    "time": [
      2133.56,
      2142.99
    ],
    "en": [
      "A, the RIP route only. B, the EIGRP route only. C, the OSPF route only. D, the IS-IS"
    ],
    "ru": [
      "A, только RIP-маршрут. B, только маршрут EIGRP. C, только маршрут OSPF. D, IS-IS"
    ]
  },
  {
    "time": [
      2142.99,
      2151.66
    ],
    "en": [
      "route only. E, the RIP and EIGRP routes, because both are distance vector protocols. F, OSPF"
    ],
    "ru": [
      "только маршрут. E, маршруты RIP и EIGRP, потому что оба являются протоколами вектора расстояния. F, OSPF"
    ]
  },
  {
    "time": [
      2151.66,
      2157.95
    ],
    "en": [
      "and IS-IS, because both are link state protocols. Or G, all routes will be added to the routing"
    ],
    "ru": [
      "и IS-IS, потому что оба являются протоколами состояния канала. Или G, все маршруты будут добавлены в маршрутизацию"
    ]
  },
  {
    "time": [
      2157.95,
      2165.8
    ],
    "en": [
      "table. Pause the video to think about your answer."
    ],
    "ru": [
      "стол. Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      2165.8,
      2174.01
    ],
    "en": [
      "The answer is B, only the EIGRP route will be added to the routing table. Why is this? When selecting which route to a certain"
    ],
    "ru": [
      "Ответ - B, в таблицу маршрутизации будет добавлен только маршрут EIGRP. Почему это? При выборе маршрута к определенному"
    ]
  },
  {
    "time": [
      2174.01,
      2179.48
    ],
    "en": [
      "destination to add to the routing table, and routes are learned from multiple routing protocols,"
    ],
    "ru": [
      "пункт назначения для добавления в таблицу маршрутизации, а маршруты извлекаются из нескольких протоколов маршрутизации,"
    ]
  },
  {
    "time": [
      2179.48,
      2184.81
    ],
    "en": [
      "the AD is used to determine which will be added to the routing table. EIGRP has the"
    ],
    "ru": [
      "AD используется для определения того, что будет добавлено в таблицу маршрутизации. EIGRP имеет"
    ]
  },
  {
    "time": [
      2184.81,
      2190.89
    ],
    "en": [
      "lowest AD of the four protocols, so only the EIGRP route will be added to the routing table."
    ],
    "ru": [
      "самый низкий AD из четырех протоколов, поэтому в таблицу маршрутизации будет добавлен только маршрут EIGRP."
    ]
  },
  {
    "time": [
      2190.89,
      2194.81
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
      2194.81,
      2200.42
    ],
    "en": [
      "Which type of routing protocol is also known as ‘routing by rumor’? A, link state."
    ],
    "ru": [
      "Какой тип протокола маршрутизации также известен как «маршрутизация по слухам»? A, состояние ссылки."
    ]
  },
  {
    "time": [
      2200.42,
      2213.22
    ],
    "en": [
      "B, path vector. C, distance vector. Or D, interior gateway. Pause the video to think about your answer."
    ],
    "ru": [
      "B, вектор пути. C, вектор расстояния. Или D, внутренний шлюз. Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      2213.22,
      2217.92
    ],
    "en": [
      "The answer is C, distance vector. Distance vector protocols such as"
    ],
    "ru": [
      "Ответ: C, вектор расстояния. Протоколы вектора расстояния, такие как"
    ]
  },
  {
    "time": [
      2217.92,
      2223.47
    ],
    "en": [
      "RIP and EIGRP operate by telling neighboring routers which routes they know, and their"
    ],
    "ru": [
      "Протоколы RIP и EIGRP сообщают соседним маршрутизаторам, какие маршруты им известны, и их"
    ]
  },
  {
    "time": [
      2223.47,
      2228.85
    ],
    "en": [
      "metrics to reach those networks, this is known as ‘routing by rumor’. A is incorrect"
    ],
    "ru": [
      "метрики для достижения этих сетей, это известно как «маршрутизация по слухам». А неверно"
    ]
  },
  {
    "time": [
      2228.85,
      2234.71
    ],
    "en": [
      "because, when using a link state protocol such as IS-IS or OSPF, each router develops"
    ],
    "ru": [
      "потому что при использовании протокола состояния канала, такого как IS-IS или OSPF, каждый маршрутизатор развивает"
    ]
  },
  {
    "time": [
      2234.71,
      2238.91
    ],
    "en": [
      "a complete map of the network to calculate the best routes, which is different than the"
    ],
    "ru": [
      "полная карта сети для расчета лучших маршрутов, которая отличается от"
    ]
  },
  {
    "time": [
      2238.91,
      2244.14
    ],
    "en": [
      "minimal information a router receives from neighbors when using a distance vector protocol."
    ],
    "ru": [
      "минимальная информация, которую маршрутизатор получает от соседей при использовании протокола вектора расстояния."
    ]
  },
  {
    "time": [
      2244.14,
      2250.17
    ],
    "en": [
      "B, path vector, is a type of EGP, exterior gateway protocol. It’s not covered in the"
    ],
    "ru": [
      "B, вектор пути, является типом EGP, протокола внешнего шлюза. Это не рассматривается в"
    ]
  },
  {
    "time": [
      2250.17,
      2257.15
    ],
    "en": [
      "current CCNA, and operates differently than distance vector. D, interior gateway protocols,"
    ],
    "ru": [
      "текущий CCNA, и работает иначе, чем вектор расстояния. D, протоколы внутреннего шлюза,"
    ]
  },
  {
    "time": [
      2257.15,
      2262.67
    ],
    "en": [
      "or IGP, is a category which includes both distance vector AND link state protocols,"
    ],
    "ru": [
      "или IGP, это категория, которая включает в себя как протоколы вектора расстояния, так и протоколы состояния канала,"
    ]
  },
  {
    "time": [
      2262.67,
      2266.97
    ],
    "en": [
      "so it is incorrect. Let’s go to question 3."
    ],
    "ru": [
      "так это неверно. Перейдем к вопросу 3."
    ]
  },
  {
    "time": [
      2266.97,
      2279.06
    ],
    "en": [
      "R1 learns two routes to 172.16.0.0/16 via RIP, one via 10.0.0.1 and the other via 10.1.0.1."
    ],
    "ru": [
      "R1 изучает два маршрута к 172.16.0.0/16 через RIP, один через 10.0.0.1, а другой через 10.1.0.1."
    ]
  },
  {
    "time": [
      2279.06,
      2285.86
    ],
    "en": [
      "Both routes are 5 hops away. Which route/routes will be entered into the routing table? A,"
    ],
    "ru": [
      "Оба маршрута находятся в 5 прыжках от отеля. Какой маршрут / маршруты будут внесены в таблицу маршрутизации? А,"
    ]
  },
  {
    "time": [
      2285.86,
      2296.13
    ],
    "en": [
      "both routes. B, only the route via 10.0.0.1. C, only the route via 10.1.0.1. Or D, neither"
    ],
    "ru": [
      "оба маршрута. Б, только маршрут через 10.0.0.1. C, только маршрут через 10.1.0.1. Или D, ни то, ни другое"
    ]
  },
  {
    "time": [
      2296.13,
      2306.78
    ],
    "en": [
      "route will be added because RIP’s AD value is too high. Pause the video to think about your answer."
    ],
    "ru": [
      "маршрут будет добавлен, потому что значение AD RIP слишком велико. Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      2306.78,
      2311.61
    ],
    "en": [
      "The answer is A, both routes will be added to the route table. Both routes"
    ],
    "ru": [
      "Ответ - A, оба маршрута будут добавлены в таблицу маршрутов. Оба маршрута"
    ]
  },
  {
    "time": [
      2311.61,
      2319.36
    ],
    "en": [
      "are to the same destination, 172.16.0.0/16. They were learned through the same protocol,"
    ],
    "ru": [
      "находятся в том же пункте назначения, 172.16.0.0/16. Они были изучены по одному и тому же протоколу,"
    ]
  },
  {
    "time": [
      2319.36,
      2324.9
    ],
    "en": [
      "RIP. And they have the same metric, 5. So, because of these conditions, both will be"
    ],
    "ru": [
      "РВАТЬ. И у них одна и та же метрика, 5. Таким образом, из-за этих условий оба будут"
    ]
  },
  {
    "time": [
      2324.9,
      2331.4
    ],
    "en": [
      "added to the routing table and R1 will load-balance traffic over the two routes. As for option"
    ],
    "ru": [
      "добавлен в таблицу маршрутизации, и R1 будет балансировать нагрузку трафика по двум маршрутам. Что касается варианта"
    ]
  },
  {
    "time": [
      2331.4,
      2339.81
    ],
    "en": [
      "D, if R1 also learned a route to 172.16.0.0/16 via another routing protocol such as OSPF,"
    ],
    "ru": [
      "D, если R1 также узнал маршрут к 172.16.0.0/16 через другой протокол маршрутизации, такой как OSPF,"
    ]
  },
  {
    "time": [
      2339.81,
      2345.64
    ],
    "en": [
      "this would be true, because RIP’s AD value is higher than OSPF, so it is less preferred."
    ],
    "ru": [
      "это было бы правдой, потому что значение AD RIP выше, чем OSPF, поэтому оно менее предпочтительно."
    ]
  },
  {
    "time": [
      2345.64,
      2352.06
    ],
    "en": [
      "However, there was no mention of another routing protocol, so D is incorrect. Okay, now let’s"
    ],
    "ru": [
      "Однако не было упоминания о другом протоколе маршрутизации, поэтому D неверен. Хорошо, теперь давай"
    ]
  },
  {
    "time": [
      2352.06,
      2356.41
    ],
    "en": [
      "take a look at a bonus question from Boson ExSim for CCNA."
    ],
    "ru": [
      "взгляните на бонусный вопрос от Boson ExSim для CCNA."
    ]
  },
  {
    "time": [
      2356.41,
      2361.8
    ],
    "en": [
      "Okay, for today's Boson ExSim practice question I got another question that I really like,"
    ],
    "ru": [
      "Хорошо, что касается сегодняшнего практического вопроса о Boson ExSim, у меня есть еще один вопрос, который мне очень нравится,"
    ]
  },
  {
    "time": [
      2361.8,
      2366.9
    ],
    "en": [
      "it's a good question about route selection. Let's get right into it. You issue the SHOW"
    ],
    "ru": [
      "это хороший вопрос о выборе маршрута. Давайте приступим к делу. Вы выпускаете ШОУ"
    ]
  },
  {
    "time": [
      2366.9,
      2371.84
    ],
    "en": [
      "IP ROUTE command on RouterA and receive the following partial output. So, we are shown"
    ],
    "ru": [
      "IP ROUTE на RouterA и получите следующие частичные выходные данные. Итак, нам показывают"
    ]
  },
  {
    "time": [
      2371.84,
      2382.53
    ],
    "en": [
      "four routes, S R D O. S is a static route, R is learned via RIP, D is learned via EIGRP."
    ],
    "ru": [
      "четыре маршрута, S R D O. S - статический маршрут, R изучается через RIP, D изучается через EIGRP."
    ]
  },
  {
    "time": [
      2382.53,
      2389.43
    ],
    "en": [
      "That's right, its D, not E. And O is OSPF. So, they are to four different destinations."
    ],
    "ru": [
      "Правильно, это D, а не E. И O - это OSPF. Итак, они отправляются в четыре разных направления."
    ]
  },
  {
    "time": [
      2389.43,
      2394.59
    ],
    "en": [
      "All of them begin '10.20.0.0', but they have different prefix lengths, so these all count"
    ],
    "ru": [
      "Все они начинаются с '10 .20.0.0 ', но имеют разную длину префикса, поэтому все они считаются"
    ]
  },
  {
    "time": [
      2394.59,
      2402.09
    ],
    "en": [
      "as different destinations. The static route is /22, /24, /26, /28. So these are not the"
    ],
    "ru": [
      "как разные направления. Статический маршрут - / 22, / 24, / 26, / 28. Так что это не"
    ]
  },
  {
    "time": [
      2402.09,
      2409.08
    ],
    "en": [
      "same destination. So that's why, even though the static route has the lowest AD, it's the"
    ],
    "ru": [
      "тот же пункт назначения. Вот почему, несмотря на то, что статический маршрут имеет самый низкий AD, это"
    ]
  },
  {
    "time": [
      2409.08,
      2414.24
    ],
    "en": [
      "most preferred, all of the routes appear in the routing table. Not just the static route."
    ],
    "ru": [
      "наиболее предпочтительно, чтобы все маршруты отображались в таблице маршрутизации. Не только статический маршрут."
    ]
  },
  {
    "time": [
      2414.24,
      2421.43
    ],
    "en": [
      "So, RouterA receives a packet that is destined for 10.20.0.14. Which of the following routes"
    ],
    "ru": [
      "Итак, RouterA получает пакет, предназначенный для 10.20.0.14. Какой из следующих маршрутов"
    ]
  },
  {
    "time": [
      2421.43,
      2428.0
    ],
    "en": [
      "will RouterA use to send the packet? Select the best answer. So, A, the RIP route because"
    ],
    "ru": [
      "будет ли RouterA использовать для отправки пакета? Выберите лучший ответ. Итак, A, RIP-маршрут, потому что"
    ]
  },
  {
    "time": [
      2428.0,
      2433.11
    ],
    "en": [
      "it has the highest administrative distance. B, the OSPF route because it is the route"
    ],
    "ru": [
      "он имеет самую высокую административную удаленность. B, маршрут OSPF, потому что это маршрут"
    ]
  },
  {
    "time": [
      2433.11,
      2438.31
    ],
    "en": [
      "with the longest prefix match. C, the static route because static routes are preferred"
    ],
    "ru": [
      "с самым длинным совпадением префикса. C, статический маршрут, потому что статические маршруты предпочтительнее"
    ]
  },
  {
    "time": [
      2438.31,
      2445.08
    ],
    "en": [
      "over dynamic routes. Or D, the EIGRP route because it has the lowest administrative distance."
    ],
    "ru": [
      "по динамическим маршрутам. Или D, маршрут EIGRP, потому что он имеет наименьшее административное расстояние."
    ]
  },
  {
    "time": [
      2445.08,
      2455.89
    ],
    "en": [
      "Okay, pause the video here to think about your answer. Okay, so let's check the answer."
    ],
    "ru": [
      "Хорошо, остановите видео здесь, чтобы подумать над своим ответом. Хорошо, давайте проверим ответ."
    ]
  },
  {
    "time": [
      2455.89,
      2463.609
    ],
    "en": [
      "So, in today's video I just talked about metric and administrative distance. So, if you receive"
    ],
    "ru": [
      "Итак, в сегодняшнем видео я только что говорил о метрическом и административном расстоянии. Итак, если вы получите"
    ]
  },
  {
    "time": [
      2463.609,
      2469.32
    ],
    "en": [
      "routes from multiple routing protocols to the same destination, you use the administrative"
    ],
    "ru": [
      "маршрутов от нескольких протоколов маршрутизации к одному месту назначения, вы используете административный"
    ]
  },
  {
    "time": [
      2469.32,
      2475.48
    ],
    "en": [
      "distance to select the route. But if you get multiple routes from the same routing protocol,"
    ],
    "ru": [
      "расстояние для выбора маршрута. Но если вы получаете несколько маршрутов из одного и того же протокола маршрутизации,"
    ]
  },
  {
    "time": [
      2475.48,
      2480.68
    ],
    "en": [
      "you use the metric. However, these routes are not to the same destination. These are"
    ],
    "ru": [
      "вы используете метрику. Однако эти маршруты не ведут к одному и тому же пункту назначения. Эти"
    ]
  },
  {
    "time": [
      2480.68,
      2486.43
    ],
    "en": [
      "different destinations, as I just said, because the prefix lengths are different. So, these"
    ],
    "ru": [
      "разные направления, как я только что сказал, потому что длина префиксов разная. Итак, эти"
    ]
  },
  {
    "time": [
      2486.43,
      2492.78
    ],
    "en": [
      "AD and metric numbers are irrelevant. So, what did I tell you in, I believe it was Day"
    ],
    "ru": [
      "AD и метрические числа не имеют значения. Итак, что я вам сказал, я думаю, это был День"
    ]
  },
  {
    "time": [
      2492.78,
      2498.63
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
      2492.78,
      2498.63
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
      2498.63,
      2503.869
    ],
    "en": [
      "destination matches multiple entries in the routing table. And this destination does match"
    ],
    "ru": [
      "пункт назначения соответствует нескольким записям в таблице маршрутизации. И это направление действительно совпадает"
    ]
  },
  {
    "time": [
      2503.869,
      2508.17
    ],
    "en": [
      "all of these entries, so it could use any route. Which one does it use? It uses the"
    ],
    "ru": [
      "все эти записи, поэтому он может использовать любой маршрут. Какой из них он использует? Он использует"
    ]
  },
  {
    "time": [
      2508.17,
      2514.72
    ],
    "en": [
      "most specific match. And 'most specific' means the longest prefix. So that is /28, so it"
    ],
    "ru": [
      "наиболее конкретный матч. А «самый конкретный» означает самый длинный префикс. Итак, это / 28, так что это"
    ]
  },
  {
    "time": [
      2514.72,
      2525.12
    ],
    "en": [
      "should use this OSPF route and send the packet to 192.168.10.1 out of its Serial0/1 interface."
    ],
    "ru": [
      "должен использовать этот маршрут OSPF и отправить пакет на 192.168.10.1 из своего интерфейса Serial0 / 1."
    ]
  },
  {
    "time": [
      2525.12,
      2530.67
    ],
    "en": [
      "So, I think B, 'the OSPF route because it is the route with the longest prefix match',"
    ],
    "ru": [
      "Итак, я думаю, B, «маршрут OSPF, потому что это маршрут с самым длинным совпадением префикса»,"
    ]
  },
  {
    "time": [
      2530.67,
      2537.61
    ],
    "en": [
      "is the correct answer. Let's check. And it is. So, if you didn't quite understand my"
    ],
    "ru": [
      "это правильный ответ. Давайте проверим. И это. Итак, если вы не совсем поняли мою"
    ]
  },
  {
    "time": [
      2537.61,
      2541.45
    ],
    "en": [
      "explanation, here is Boson's explanation. You can pause the video here to read it. This"
    ],
    "ru": [
      "объяснение, вот объяснение Бозона. Вы можете приостановить видео здесь, чтобы прочитать его. Этот"
    ]
  },
  {
    "time": [
      2541.45,
      2547.04
    ],
    "en": [
      "is the great thing about Boson ExSim, is it gives you in-detail explanations. Not just"
    ],
    "ru": [
      "Самое замечательное в Boson ExSim, так это то, что он дает вам подробные объяснения. Не просто"
    ]
  },
  {
    "time": [
      2547.04,
      2553.9
    ],
    "en": [
      "why B is correct, but also why A, C, and D are incorrect. And after that there is a reference"
    ],
    "ru": [
      "почему B правильный, но также почему A, C и D неверны. И после этого идет ссылка"
    ]
  },
  {
    "time": [
      2553.9,
      2558.42
    ],
    "en": [
      "to some Cisco documentation, which is freely available on the Internet, 'Route selection"
    ],
    "ru": [
      "к некоторой документации Cisco, которая находится в свободном доступе в Интернете, «Выбор маршрута"
    ]
  },
  {
    "time": [
      2558.42,
      2564.02
    ],
    "en": [
      "in Cisco routers'. Okay, so that was today's Boson ExSim practice question. If you want"
    ],
    "ru": [
      "в маршрутизаторах Cisco ». Хорошо, это был сегодняшний практический вопрос Boson ExSim. Если хочешь"
    ]
  },
  {
    "time": [
      2564.02,
      2568.27
    ],
    "en": [
      "to get a copy of ExSim, please follow the link in the video description. These are the"
    ],
    "ru": [
      "чтобы получить копию ExSim, перейдите по ссылке в описании видео. Эти"
    ]
  },
  {
    "time": [
      2568.27,
      2573.349
    ],
    "en": [
      "exams I used when I studied for my CCNA and CCNP exams and I really think they helped"
    ],
    "ru": [
      "экзамены, которые я использовал, когда готовился к экзаменам CCNA и CCNP, и я действительно думаю, что они помогли"
    ]
  },
  {
    "time": [
      2573.349,
      2577.62
    ],
    "en": [
      "me pass all of my exams on the first try. So once again, if you want to get a copy of"
    ],
    "ru": [
      "я сдам все экзамены с первого раза. Итак, еще раз, если вы хотите получить копию"
    ]
  },
  {
    "time": [
      2577.62,
      2583.6
    ],
    "en": [
      "ExSim, please follow the link in the video description."
    ],
    "ru": [
      "ExSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      2583.6,
      2588.17
    ],
    "en": [
      "There are supplementary materials for this video. There is a flashcard deck to use with"
    ],
    "ru": [
      "К этому видео есть дополнительные материалы. Есть колода карточек для использования с"
    ]
  },
  {
    "time": [
      2588.17,
      2592.81
    ],
    "en": [
      "the software ‘Anki’. There will also be a packet tracer practice lab so you can get"
    ],
    "ru": [
      "программное обеспечение «Анки». Там же будет практическая лаборатория по отслеживанию пакетов, чтобы вы могли получить"
    ]
  },
  {
    "time": [
      2592.81,
      2598.56
    ],
    "en": [
      "some hands-on practice. That will be in the next video. Sign up for my mailing list via"
    ],
    "ru": [
      "немного практической практики. Об этом будет в следующем видео. Подпишитесь на мой список рассылки через"
    ]
  },
  {
    "time": [
      2598.56,
      2602.4
    ],
    "en": [
      "the link in the description, and I’ll send you all of the flashcards and packet tracer"
    ],
    "ru": [
      "ссылку в описании, и я пришлю вам все карточки и трассировщик пакетов"
    ]
  },
  {
    "time": [
      2602.4,
      2605.85
    ],
    "en": [
      "lab files for the course."
    ],
    "ru": [
      "lab файлы для курса."
    ]
  },
  {
    "time": [
      2605.85,
      2610.66
    ],
    "en": [
      "Before finishing today’s video I want to thank my JCNP-level channel members. Thank"
    ],
    "ru": [
      "Прежде чем закончить сегодняшнее видео, я хочу поблагодарить участников моего канала уровня JCNP. Благодарить"
    ]
  },
  {
    "time": [
      2610.66,
      2617.3
    ],
    "en": [
      "you to John, funnydart, Joshua, Scott, Aleksa, Hassan, Gerrard, Tibi, Vikram, Joyce, Marek,"
    ],
    "ru": [
      "ты Джону, шутник, Джошуа, Скотт, Алекса, Хасан, Джеррард, Тиби, Викрам, Джойс, Марек,"
    ]
  },
  {
    "time": [
      2617.3,
      2623.95
    ],
    "en": [
      "Samil, Velvijaykum, C Mohd, Johan, Mark, Miguel, Yousif, Kone, Boson Software, the creators"
    ],
    "ru": [
      "Самил, Велвиджайкум, Си Мохд, Йохан, Марк, Мигель, Юсиф, Коне, Boson Software, создатели"
    ]
  },
  {
    "time": [
      2623.95,
      2630.369
    ],
    "en": [
      "of ExSim, Sidi, Magrathea, Devin, Charlsetta, Lito, Yonatan, Mike, Aleksander, and Vance."
    ],
    "ru": [
      "из ExSim, Сиди, Магратеи, Девина, Шарлсетты, Лито, Йонатана, Майка, Александра и Вэнса."
    ]
  },
  {
    "time": [
      2630.369,
      2636.271
    ],
    "en": [
      "Sorry if I pronounced your name incorrectly, but thank you so much for your support. One"
    ],
    "ru": [
      "Извините, если я неправильно произнес ваше имя, но большое спасибо за вашу поддержку. Один"
    ]
  },
  {
    "time": [
      2636.271,
      2640.95
    ],
    "en": [
      "of you is still displaying as Channel failed to load, if this is you please let me know"
    ],
    "ru": [
      "из вас по-прежнему отображается как \"Не удалось загрузить канал\". Если это так, дайте мне знать"
    ]
  },
  {
    "time": [
      2640.95,
      2646.09
    ],
    "en": [
      "and I’ll see if YouTube can fix it. This is the list of JCNP-level members at the time"
    ],
    "ru": [
      "и я посмотрю, сможет ли YouTube это исправить. Это список участников уровня JCNP в то время"
    ]
  },
  {
    "time": [
      2646.09,
      2651.72
    ],
    "en": [
      "of recording by the way, June 13th 2020, if you signed up recently and your name isn’t"
    ],
    "ru": [
      "записи, кстати, 13 июня 2020 года, если вы подписались недавно и ваше имя не"
    ]
  },
  {
    "time": [
      2651.72,
      2656.61
    ],
    "en": [
      "on here don’t worry, you’ll be in future videos."
    ],
    "ru": [
      "здесь не волнуйтесь, вы будете в будущих видео."
    ]
  },
  {
    "time": [
      2656.61,
      2661.49
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
      2661.49,
      2666.46
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
      2666.46,
      2672.18
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
      2672.18,
      2672.18
    ],
    "en": [
      "or Basic Attention Token, tips via the Brave browser. That's all for now."
    ],
    "ru": [
      "или Basic Attention Token, подсказки через браузер Brave. На этом пока все."
    ]
  }
]