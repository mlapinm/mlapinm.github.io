let items = [
  {
    "time": [
      1.04,
      7.14
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
      7.14,
      12.099
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
      12.099,
      18.47
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
      18.47,
      23.93
    ],
    "en": [
      "help. Today we will finish our studies of OSPF for this course. Already we’ve covered OSPF"
    ],
    "ru": [
      "помощь. Сегодня мы закончим изучение OSPF для этого курса. Мы уже рассмотрели OSPF"
    ]
  },
  {
    "time": [
      23.93,
      30.59
    ],
    "en": [
      "in much greater depth than RIP and EIGRP. If you continue your studies to the CCNP and"
    ],
    "ru": [
      "гораздо глубже, чем RIP и EIGRP. Если вы продолжите учебу в CCNP и"
    ]
  },
  {
    "time": [
      30.59,
      36.3
    ],
    "en": [
      "CCIE level, you’ll see that there is much, much more depth to OSPF. However, for the"
    ],
    "ru": [
      "На уровне CCIE вы увидите, что OSPF намного глубже. Однако для"
    ]
  },
  {
    "time": [
      36.3,
      42.36
    ],
    "en": [
      "purpose of this CCNA course we’ll finish up our studies with this video. Once more,"
    ],
    "ru": [
      "Цель этого курса CCNA Мы завершим наши занятия этим видео. Еще раз,"
    ]
  },
  {
    "time": [
      42.36,
      48.1
    ],
    "en": [
      "here is exam topic 3.4, which covers OSPF. After today’s video, you’ll be more than"
    ],
    "ru": [
      "вот тема экзамена 3.4, которая охватывает OSPF. После сегодняшнего видео у вас будет больше, чем"
    ]
  },
  {
    "time": [
      48.1,
      55.44
    ],
    "en": [
      "ready to take on OSPF questions on the CCNA exam. So let’s get started."
    ],
    "ru": [
      "готовы ответить на вопросы OSPF на экзамене CCNA. Итак, приступим."
    ]
  },
  {
    "time": [
      55.44,
      61.31
    ],
    "en": [
      "First let’s look at what we’ll cover in this video. First up, OSPF network types."
    ],
    "ru": [
      "Сначала давайте посмотрим, что мы расскажем в этом видео. Во-первых, типы сетей OSPF."
    ]
  },
  {
    "time": [
      61.31,
      65.97
    ],
    "en": [
      "These refer to the different kinds of connections between OSPF routers, and how those connections"
    ],
    "ru": [
      "Они относятся к различным типам соединений между маршрутизаторами OSPF и к тому, как эти соединения"
    ]
  },
  {
    "time": [
      65.97,
      73.42
    ],
    "en": [
      "influence OSPF’s behavior. Next up we will cover OSPF neighbor and adjacency requirements."
    ],
    "ru": [
      "влиять на поведение OSPF. Далее мы рассмотрим требования к соседям OSPF и смежности."
    ]
  },
  {
    "time": [
      73.42,
      78.13
    ],
    "en": [
      "In day 2 we covered the process routers use to become OSPF neighbors, however we didn’t"
    ],
    "ru": [
      "Во второй день мы рассмотрели, как технологические маршрутизаторы могут стать соседями OSPF, но не стали"
    ]
  },
  {
    "time": [
      78.13,
      83.299
    ],
    "en": [
      "actually look at the requirements for a successful neighbor adjacency. Then we’ll take a look"
    ],
    "ru": [
      "собственно, посмотрите требования для успешного соседства. Тогда мы посмотрим"
    ]
  },
  {
    "time": [
      83.299,
      88.85
    ],
    "en": [
      "at a few of the LSA, Link State Advertisement, types. There are many, but you only need to"
    ],
    "ru": [
      "в некоторых типах LSA, Link State Advertising. Их много, но нужно только"
    ]
  },
  {
    "time": [
      88.85,
      94.34
    ],
    "en": [
      "be aware of a few for the CCNA. Make sure to stick around until the end of the quiz"
    ],
    "ru": [
      "имейте в виду несколько для CCNA. Не забудьте остаться до конца викторины"
    ]
  },
  {
    "time": [
      94.34,
      101.69
    ],
    "en": [
      "for a bonus question from Boson ExSim for CCNA, the best practice exams for the CCNA."
    ],
    "ru": [
      "за дополнительный вопрос от Boson ExSim для CCNA, лучшие практические экзамены для CCNA."
    ]
  },
  {
    "time": [
      101.69,
      105.869
    ],
    "en": [
      "Before we get into those topics I want to take a minute to explain loopback interfaces"
    ],
    "ru": [
      "Прежде чем мы перейдем к этим темам, я хочу уделить минутку, чтобы объяснить интерфейсы обратной связи."
    ]
  },
  {
    "time": [
      105.869,
      111.38
    ],
    "en": [
      "a little bit. In previous videos I’ve mentioned them, and you’ve already practiced configuring"
    ],
    "ru": [
      "немного. В предыдущих видео я упоминал их, а вы уже попрактиковались в настройке"
    ]
  },
  {
    "time": [
      111.38,
      117.71000000000001
    ],
    "en": [
      "them in the past few lab videos, but let me explain them a little more. A loopback interface"
    ],
    "ru": [
      "их в нескольких последних лабораторных видео, но позвольте мне объяснить их немного подробнее. Петлевой интерфейс"
    ]
  },
  {
    "time": [
      117.71000000000001,
      123.78
    ],
    "en": [
      "is a virtual interface in the router. You already know that. It is always up/up (unless"
    ],
    "ru": [
      "это виртуальный интерфейс в роутере. Вы это уже знаете. Он всегда вверх / вверх (если только"
    ]
  },
  {
    "time": [
      123.78,
      129.67
    ],
    "en": [
      "you manually shut it down). So, this means that the status of a loopback interface isn’t"
    ],
    "ru": [
      "вы вручную выключили его). Таким образом, это означает, что статус интерфейса обратной петли не"
    ]
  },
  {
    "time": [
      129.67,
      135.239
    ],
    "en": [
      "dependent on a physical interface. Physical interfaces can have hardware problems and"
    ],
    "ru": [
      "зависит от физического интерфейса. Физические интерфейсы могут иметь проблемы с оборудованием и"
    ]
  },
  {
    "time": [
      135.239,
      141.049
    ],
    "en": [
      "fail, however that can’t happen to a loopback interface unless the router itself fails."
    ],
    "ru": [
      "сбой, однако это не может произойти с интерфейсом обратной связи, если только сам маршрутизатор не откажет."
    ]
  },
  {
    "time": [
      141.049,
      148.079
    ],
    "en": [
      "So, it provides a consistent IP address that can be used to reach and identify the router."
    ],
    "ru": [
      "Таким образом, он предоставляет согласованный IP-адрес, который можно использовать для доступа к маршрутизатору и его идентификации."
    ]
  },
  {
    "time": [
      148.079,
      153.969
    ],
    "en": [
      "Sometimes you need to send traffic directly to a router. Let’s says R1 has no loopback"
    ],
    "ru": [
      "Иногда вам нужно направить трафик прямо на роутер. Допустим, у R1 нет петли."
    ]
  },
  {
    "time": [
      153.969,
      161.31
    ],
    "en": [
      "interface at the moment, and R4 receives a packet destined for R1 at 10.0.13.1, the IP"
    ],
    "ru": [
      "интерфейс в данный момент, и R4 получает пакет, предназначенный для R1 на 10.0.13.1, IP"
    ]
  },
  {
    "time": [
      161.31,
      167.609
    ],
    "en": [
      "address of its G1/0 interface. It might forward it to R1 like this."
    ],
    "ru": [
      "адрес его интерфейса G1 / 0. Он может переслать его R1 вот так."
    ]
  },
  {
    "time": [
      167.609,
      173.26
    ],
    "en": [
      "What if R1’s G1/0 interface goes down for some reason? If R4 receives a packet destined"
    ],
    "ru": [
      "Что, если интерфейс G1 / 0 маршрутизатора R1 по какой-то причине выйдет из строя? Если R4 получает пакет, предназначенный"
    ]
  },
  {
    "time": [
      173.26,
      180.33
    ],
    "en": [
      "for R1 at 10.0.13.1, it will not be able to send the packet to R1."
    ],
    "ru": [
      "для R1 с 10.0.13.1 он не сможет отправить пакет на R1."
    ]
  },
  {
    "time": [
      180.33,
      187.309
    ],
    "en": [
      "How about if R1 has a loopback interface, 1.1.1.1, and that is used to identify R1 instead"
    ],
    "ru": [
      "Как насчет того, если R1 имеет интерфейс обратной связи, 1.1.1.1, и он вместо этого используется для идентификации R1?"
    ]
  },
  {
    "time": [
      187.309,
      194.599
    ],
    "en": [
      "of 10.0.13.1? Even if a physical interface fails, when R4 receives a packet destined"
    ],
    "ru": [
      "из 10.0.13.1? Даже если физический интерфейс выходит из строя, когда R4 получает пакет, предназначенный"
    ]
  },
  {
    "time": [
      194.599,
      200.989
    ],
    "en": [
      "for R1’s loopback interface it will still be able to send the packet to R1. So, that’s"
    ],
    "ru": [
      "для интерфейса обратной связи маршрутизатора R1 он по-прежнему сможет отправить пакет на маршрутизатор R1. Так вот"
    ]
  },
  {
    "time": [
      200.989,
      205.839
    ],
    "en": [
      "why it’s a good idea to configure a loopback interface on a router. It provides an interface"
    ],
    "ru": [
      "почему на маршрутизаторе рекомендуется настроить интерфейс обратной петли. Он предоставляет интерфейс"
    ]
  },
  {
    "time": [
      205.839,
      213.079
    ],
    "en": [
      "with an IP address that is always up, and can consistently be used to identify and reach the router."
    ],
    "ru": [
      "с IP-адресом, который всегда активен и может постоянно использоваться для идентификации и доступа к маршрутизатору."
    ]
  },
  {
    "time": [
      213.079,
      218.34
    ],
    "en": [
      "the router. Now let’s move on to look at the different OSPF network types. The OSPF network type"
    ],
    "ru": [
      "роутер. Теперь перейдем к рассмотрению различных типов сетей OSPF. Тип сети OSPF"
    ]
  },
  {
    "time": [
      218.34,
      224.089
    ],
    "en": [
      "refers to the type of connection between OSPF neighbors, and the type influences how OSPF"
    ],
    "ru": [
      "относится к типу соединения между соседями OSPF, и тип влияет на то, как OSPF"
    ]
  },
  {
    "time": [
      224.089,
      229.719
    ],
    "en": [
      "behaves in some ways. The most common type of connection in modern networks is Ethernet,"
    ],
    "ru": [
      "ведет себя некоторым образом. Самый распространенный тип подключения в современных сетях - Ethernet,"
    ]
  },
  {
    "time": [
      229.719,
      236.579
    ],
    "en": [
      "of course. There are three main OSPF network types. The first is the Broadcast network"
    ],
    "ru": [
      "конечно. Существует три основных типа сетей OSPF. Первый - это сеть вещания."
    ]
  },
  {
    "time": [
      236.579,
      244.749
    ],
    "en": [
      "type, which is enabled by default on Ethernet and FDDI interfaces. FDDI is an old technology"
    ],
    "ru": [
      "type, который по умолчанию включен на интерфейсах Ethernet и FDDI. FDDI - это старая технология"
    ]
  },
  {
    "time": [
      244.749,
      249.019
    ],
    "en": [
      "and you don’t need to spend time learning about it. However, I will include it in the"
    ],
    "ru": [
      "и вам не нужно тратить время на изучение этого. Однако я включу его в"
    ]
  },
  {
    "time": [
      249.019,
      253.799
    ],
    "en": [
      "flashcards for OSPF network types, you might want to remember this one fact about it for"
    ],
    "ru": [
      "карточки для типов сетей OSPF, возможно, вы захотите запомнить этот факт для"
    ]
  },
  {
    "time": [
      253.799,
      261.88
    ],
    "en": [
      "the exam, that the OSPF broadcast network type is used by default. The next is the Point-to-point"
    ],
    "ru": [
      "экзамен, что по умолчанию используется тип широковещательной сети OSPF. Далее идет точка-точка."
    ]
  },
  {
    "time": [
      261.88,
      268.35
    ],
    "en": [
      "network type, which is enabled by default on PPP and HDLC interfaces. You don’t need"
    ],
    "ru": [
      "тип сети, который по умолчанию включен на интерфейсах PPP и HDLC. Вам не нужно"
    ]
  },
  {
    "time": [
      268.35,
      274.27
    ],
    "en": [
      "to learn PPP and HDLC in depth for the current CCNA exam, but I will mention them briefly"
    ],
    "ru": [
      "чтобы подробно изучить PPP и HDLC для текущего экзамена CCNA, но я кратко их упомяну"
    ]
  },
  {
    "time": [
      274.27,
      280.90999999999997
    ],
    "en": [
      "later in this video. The last main network type is Non-broadcast. It is enabled by default"
    ],
    "ru": [
      "позже в этом видео. Последний основной тип сети - нешироковещательный. По умолчанию он включен"
    ]
  },
  {
    "time": [
      280.90999999999997,
      286.95
    ],
    "en": [
      "on Frame Relay and X.25 interfaces. Again, you don’t need to learn about these interface"
    ],
    "ru": [
      "на интерфейсах Frame Relay и X.25. Опять же, вам не нужно изучать этот интерфейс."
    ]
  },
  {
    "time": [
      286.95,
      291.31
    ],
    "en": [
      "types for the exam, but I will include them in the flashcards for this video regarding"
    ],
    "ru": [
      "типы для экзамена, но я включу их в карточки для этого видео, касающиеся"
    ]
  },
  {
    "time": [
      291.31,
      299.18
    ],
    "en": [
      "OSPF network types. Take a look at the OSPF exam topics again. 3.4b mentions the Point-to-point"
    ],
    "ru": [
      "Типы сетей OSPF. Взгляните еще раз на темы экзаменов OSPF. 3.4b упоминает двухточечный"
    ]
  },
  {
    "time": [
      299.18,
      305.79
    ],
    "en": [
      "network type, and 3.4c mentions the Broadcast network type. So, those are the network types"
    ],
    "ru": [
      "тип сети, а 3.4c упоминает тип сети широковещательной передачи. Итак, это типы сетей"
    ]
  },
  {
    "time": [
      305.79,
      307.49
    ],
    "en": [
      "we will focus on now."
    ],
    "ru": [
      "мы сосредоточимся на сейчас."
    ]
  },
  {
    "time": [
      307.49,
      314.06
    ],
    "en": [
      "First up, the broadcast network type. As I just mentioned, this network type is enabled"
    ],
    "ru": [
      "Во-первых, тип широковещательной сети. Как я уже упоминал, этот тип сети включен"
    ]
  },
  {
    "time": [
      314.06,
      321.19
    ],
    "en": [
      "on Ethernet and FDDI interfaces by default. For this course, our main focus is Ethernet,"
    ],
    "ru": [
      "на интерфейсах Ethernet и FDDI по умолчанию. В этом курсе мы уделяем основное внимание Ethernet,"
    ]
  },
  {
    "time": [
      321.19,
      325.4
    ],
    "en": [
      "and in the previous videos all of the OSPF connections we’ve looked at have used the"
    ],
    "ru": [
      "и в предыдущих видео все соединения OSPF, которые мы рассмотрели, использовали"
    ]
  },
  {
    "time": [
      325.4,
      331.02
    ],
    "en": [
      "Broadcast network type, because they are all Ethernet connections. In the network diagram"
    ],
    "ru": [
      "Тип широковещательной сети, потому что все они являются соединениями Ethernet. На схеме сети"
    ]
  },
  {
    "time": [
      331.02,
      336.39
    ],
    "en": [
      "above, these are all Ethernet connections, remember ‘G’ means ‘Gigabit Ethernet’,"
    ],
    "ru": [
      "выше, это все соединения Ethernet, помните, что «G» означает «Gigabit Ethernet»,"
    ]
  },
  {
    "time": [
      336.39,
      339.96
    ],
    "en": [
      "and therefore these connections between the routers are all using the Broadcast network"
    ],
    "ru": [
      "и, следовательно, все эти соединения между маршрутизаторами используют широковещательную сеть."
    ]
  },
  {
    "time": [
      339.96,
      346.701
    ],
    "en": [
      "type. Now let’s cover a few characteristics of the Broadcast network type. First up, routers"
    ],
    "ru": [
      "тип. Теперь давайте рассмотрим несколько характеристик типа сети вещания. Во-первых, маршрутизаторы"
    ]
  },
  {
    "time": [
      346.701,
      351.95
    ],
    "en": [
      "dynamically discover neighbors by sending and listening for OSPF Hello messages using"
    ],
    "ru": [
      "динамически обнаруживать соседей, отправляя и прослушивая сообщения приветствия OSPF, используя"
    ]
  },
  {
    "time": [
      351.95,
      358.89
    ],
    "en": [
      "the multicast address 224.0.0.5. You already know this from the previous video when I showed"
    ],
    "ru": [
      "адрес многоадресной рассылки 224.0.0.5. Вы уже знаете это из предыдущего видео, когда я показывал"
    ]
  },
  {
    "time": [
      358.89,
      364.7
    ],
    "en": [
      "you how OSPF routers become neighbors. However, not all network types dynamically discover"
    ],
    "ru": [
      "вы как маршрутизаторы OSPF становятся соседями. Однако не все типы сетей динамически обнаруживают"
    ]
  },
  {
    "time": [
      364.7,
      369.72
    ],
    "en": [
      "neighbors like this. We won’t cover this network type, but with the ‘Non-broadcast’"
    ],
    "ru": [
      "соседям это нравится. Мы не будем рассматривать этот тип сети, но с \"Non-Broadcast\""
    ]
  },
  {
    "time": [
      369.72,
      377.99
    ],
    "en": [
      "network type you must manually configure neighbors. Okay, next point. A DR, designated router,"
    ],
    "ru": [
      "тип сети необходимо вручную настроить соседей. Хорошо, следующий пункт. DR, обозначенный маршрутизатор,"
    ]
  },
  {
    "time": [
      377.99,
      384.78
    ],
    "en": [
      "and BDR, backup designated router, must be elected on each subnet. However in cases like"
    ],
    "ru": [
      "и BDR, резервный назначенный маршрутизатор, должен быть выбран в каждой подсети. Однако в таких случаях, как"
    ]
  },
  {
    "time": [
      384.78,
      392.19
    ],
    "en": [
      "the G1/0 interface of R1, R3, R4, and R5 where there are no OSPF neighbors, there is just"
    ],
    "ru": [
      "интерфейс G1 / 0 для R1, R3, R4 и R5, где нет соседей OSPF, есть просто"
    ]
  },
  {
    "time": [
      392.19,
      399.9
    ],
    "en": [
      "a DR, no BDR. Routers which aren’t the DR or BDR for the subnet become a ‘DROther’."
    ],
    "ru": [
      "DR, без BDR. Маршрутизаторы, которые не являются DR или BDR для подсети, становятся «DROther»."
    ]
  },
  {
    "time": [
      399.9,
      405.901
    ],
    "en": [
      "I’ve heard a few ways to pronounce that, but I say ‘D R Other’. So, let’s look"
    ],
    "ru": [
      "Я слышал несколько способов произнести это, но я говорю «D R Other». Итак, давайте посмотрим"
    ]
  },
  {
    "time": [
      405.901,
      413.33
    ],
    "en": [
      "at the network above. Each subnet needs a DR. These subnets are easy, there are no OSPF"
    ],
    "ru": [
      "в сети выше. Каждой подсети нужен DR. Эти подсети простые, нет OSPF"
    ]
  },
  {
    "time": [
      413.33,
      420.67
    ],
    "en": [
      "neighbors so each router becomes the DR for the subnet. How about the 192.168.1.0/30 subnet"
    ],
    "ru": [
      "соседей, поэтому каждый маршрутизатор становится DR для подсети. Как насчет подсети 192.168.1.0/30"
    ]
  },
  {
    "time": [
      420.67,
      427.43
    ],
    "en": [
      "between R1 and R2? In the next slide I’ll show you how the DR is elected, but let’s"
    ],
    "ru": [
      "между R1 и R2? На следующем слайде я покажу вам, как избирается ДР, но давайте"
    ]
  },
  {
    "time": [
      427.43,
      437.47
    ],
    "en": [
      "say R2 is the DR. So, R1 becomes the BDR for the segment. How about the 192.168.2.0/29"
    ],
    "ru": [
      "скажем, R2 - это DR. Таким образом, R1 становится BDR для сегмента. Как насчет 192.168.2.0/29"
    ]
  },
  {
    "time": [
      437.47,
      447.18
    ],
    "en": [
      "subnet that R2, R3, R4, and R5 connect to? For example, R5 might be the DR, R4 the BDR,"
    ],
    "ru": [
      "подсеть, к которой подключаются R2, ​​R3, R4 и R5? Например, R5 может быть DR, R4 - BDR,"
    ]
  },
  {
    "time": [
      447.18,
      453.74
    ],
    "en": [
      "and then R2 and R3 become DROthers. You’re probably wondering how these elections work,"
    ],
    "ru": [
      "а затем R2 и R3 становятся DROthers. Вам, наверное, интересно, как проходят эти выборы,"
    ]
  },
  {
    "time": [
      453.74,
      458.99
    ],
    "en": [
      "and what the purpose of the DR and BDR is. Well, let’s get into it."
    ],
    "ru": [
      "и какова цель DR и BDR. Что ж, давай займемся этим."
    ]
  },
  {
    "time": [
      458.99,
      466.33
    ],
    "en": [
      "So, here’s how the DR and BDR are elected. There is an order of priority. First up, the"
    ],
    "ru": [
      "Итак, вот как выбираются DR и BDR. Есть порядок приоритета. Во-первых,"
    ]
  },
  {
    "time": [
      466.33,
      471.97
    ],
    "en": [
      "router with the highest OSPF interface priority in the subnet becomes the DR for the segment."
    ],
    "ru": [
      "маршрутизатор с наивысшим приоритетом интерфейса OSPF в подсети становится DR для сегмента."
    ]
  },
  {
    "time": [
      471.97,
      477.15
    ],
    "en": [
      "However, all interfaces have the same priority by default, so then the routers compare their"
    ],
    "ru": [
      "Однако по умолчанию все интерфейсы имеют одинаковый приоритет, поэтому маршрутизаторы сравнивают свои"
    ]
  },
  {
    "time": [
      477.15,
      484.51
    ],
    "en": [
      "OSPF router IDs. The router with the highest OSPF router ID wins. ’First place’ in"
    ],
    "ru": [
      "Идентификаторы маршрутизатора OSPF. Маршрутизатор с наивысшим идентификатором маршрутизатора OSPF побеждает. \"Первое место\" в"
    ]
  },
  {
    "time": [
      484.51,
      490.43
    ],
    "en": [
      "the election becomes the DR for the subnet, and ‘second place’ becomes the BDR. The"
    ],
    "ru": [
      "выборы становятся DR для подсети, а «второе место» становится BDR. В"
    ]
  },
  {
    "time": [
      490.43,
      496.95
    ],
    "en": [
      "default OSPF interface priority is 1 on all interfaces. So as I said, by default the router"
    ],
    "ru": [
      "по умолчанию приоритет интерфейса OSPF равен 1 на всех интерфейсах. Итак, как я уже сказал, по умолчанию роутер"
    ]
  },
  {
    "time": [
      496.95,
      501.36
    ],
    "en": [
      "with the highest router ID will become the DR for the segment."
    ],
    "ru": [
      "с наивысшим идентификатором маршрутизатора станет DR для сегмента."
    ]
  },
  {
    "time": [
      501.36,
      509.71
    ],
    "en": [
      "Here’s some partial output from SHOW IP OSPF INTERFACE G0/0 on R5. Notice the router"
    ],
    "ru": [
      "Вот некоторые частичные выходные данные SHOW IP OSPF INTERFACE G0 / 0 на R5. Обратите внимание на маршрутизатор"
    ]
  },
  {
    "time": [
      509.71,
      515.569
    ],
    "en": [
      "ID. I configured a loopback interface on each router, and the IP address of the loopback"
    ],
    "ru": [
      "Я БЫ. Я настроил интерфейс обратной связи на каждом маршрутизаторе и IP-адрес петли."
    ]
  },
  {
    "time": [
      515.569,
      523.399
    ],
    "en": [
      "interface became the router ID. State DR, and the priority is the default of 1. R5 has"
    ],
    "ru": [
      "интерфейс стал идентификатором маршрутизатора. Состояние DR, приоритет по умолчанию 1. R5 имеет"
    ]
  },
  {
    "time": [
      523.399,
      530.0889999999999
    ],
    "en": [
      "the highest router ID of the routers connected to the 192.168.2.0/29 subnet, so it became"
    ],
    "ru": [
      "наивысший идентификатор маршрутизатора среди маршрутизаторов, подключенных к подсети 192.168.2.0/29, поэтому он стал"
    ]
  },
  {
    "time": [
      530.0889999999999,
      538.1
    ],
    "en": [
      "the DR. Down here the DR, R5 itself, and BDR, R4, for the segment are listed, including"
    ],
    "ru": [
      "DR. Здесь внизу перечислены DR, сам R5 и BDR, R4 для сегмента, включая"
    ]
  },
  {
    "time": [
      538.1,
      543.379
    ],
    "en": [
      "their router IDs and the interface IP address in the subnet."
    ],
    "ru": [
      "их идентификаторы маршрутизатора и IP-адрес интерфейса в подсети."
    ]
  },
  {
    "time": [
      543.379,
      548.009
    ],
    "en": [
      "And here’s the same output for R2. The main difference I want to point out is the state"
    ],
    "ru": [
      "И вот тот же результат для R2. Основное отличие, которое я хочу отметить, - это состояние"
    ]
  },
  {
    "time": [
      548.009,
      554.99
    ],
    "en": [
      "of DROTHER. Now, what if I want to make R2 the DR for the segment instead of R5? Let’s"
    ],
    "ru": [
      "ДРОТЕРА. А что, если я хочу сделать R2 сегментом DR вместо R5? Давайте"
    ]
  },
  {
    "time": [
      554.99,
      559.069
    ],
    "en": [
      "see how to change the OSPF interface priority."
    ],
    "ru": [
      "узнайте, как изменить приоритет интерфейса OSPF."
    ]
  },
  {
    "time": [
      559.069,
      564.61
    ],
    "en": [
      "The command to change the OSPF priority of an interface is IP OSPF PRIORITY, followed"
    ],
    "ru": [
      "Команда для изменения приоритета OSPF интерфейса - это IP OSPF PRIORITY, за которой следует"
    ]
  },
  {
    "time": [
      564.61,
      573.681
    ],
    "en": [
      "by the priority, with a range of 0 to 255. I changed it to the maximum, 255, on R2. As"
    ],
    "ru": [
      "по приоритету в диапазоне от 0 до 255. Я изменил его на максимальное, 255, на R2. В качестве"
    ]
  },
  {
    "time": [
      573.681,
      580.49
    ],
    "en": [
      "a side note, if you set the OSPF interface priority to 0, the router CANNOT be the DR/BDR"
    ],
    "ru": [
      "примечание: если вы установите приоритет интерфейса OSPF на 0, маршрутизатор НЕ МОЖЕТ быть DR / BDR"
    ]
  },
  {
    "time": [
      580.49,
      586.72
    ],
    "en": [
      "for the subnet, no matter what. So, let’s check if R2 has become the DR for the segment."
    ],
    "ru": [
      "для подсети, несмотря ни на что. Итак, давайте проверим, стал ли R2 DR для сегмента."
    ]
  },
  {
    "time": [
      586.72,
      593.8
    ],
    "en": [
      "That’s strange. R2’s state is still DROTHER, even though it has the highest priority. Why"
    ],
    "ru": [
      "Это странно. Состояние R2 по-прежнему DROTHER, хотя у него наивысший приоритет. Почему"
    ]
  },
  {
    "time": [
      593.8,
      599.91
    ],
    "en": [
      "is that? It’s because the DR/BDR election is ‘non-preemptive’. You’ll learn more"
    ],
    "ru": [
      "в том, что? Причина в том, что выборы DR / BDR являются \"не упреждающими\". Вы узнаете больше"
    ]
  },
  {
    "time": [
      599.91,
      605.559
    ],
    "en": [
      "about ‘preemption’ in Day 29 when we learn about First-Hop Redundancy Protocols. But"
    ],
    "ru": [
      "о «приоритетном обслуживании» в День 29, когда мы узнаем о протоколах резервирования с первым переходом. Но"
    ]
  },
  {
    "time": [
      605.559,
      611.1
    ],
    "en": [
      "what ‘non-preemptive’ means is that once the DR/BDR are selected they will keep their"
    ],
    "ru": [
      "что \"без упреждения\" означает, что после выбора DR / BDR они сохранят свои"
    ]
  },
  {
    "time": [
      611.1,
      618.8
    ],
    "en": [
      "role until OSPF is reset, the interface fails/is shut down, etc. So, although this is a bad"
    ],
    "ru": [
      "роль до тех пор, пока OSPF не будет сброшен, интерфейс выйдет из строя / не выключится и т. д. Итак, хотя это плохой"
    ]
  },
  {
    "time": [
      618.8,
      626.0
    ],
    "en": [
      "idea to do in a live network, I’ll go reset the OSPF process on R5 and let’s see what happens."
    ],
    "ru": [
      "Идея сделать в действующей сети, я сброшу процесс OSPF на R5 и посмотрим, что произойдет."
    ]
  },
  {
    "time": [
      626.0,
      633.74
    ],
    "en": [
      "happens. So, I reset the OSPF process on R5, and you can see that all of its neighbors went DOWN."
    ],
    "ru": [
      "бывает. Итак, я сбрасываю процесс OSPF на R5, и вы можете видеть, что все его соседи перешли в состояние ВЫКЛЮЧЕНИЯ."
    ]
  },
  {
    "time": [
      633.74,
      639.54
    ],
    "en": [
      "Then R2 and R4 returned to the FULL state, but not R3. There’s an important reason"
    ],
    "ru": [
      "Затем R2 и R4 вернулись в состояние FULL, но не R3. Есть важная причина"
    ]
  },
  {
    "time": [
      639.54,
      645.55
    ],
    "en": [
      "for that, you’ll learn soon. Then I used the SHOW IP OSPF NEIGHBOR command to view"
    ],
    "ru": [
      "об этом вы скоро узнаете. Затем я использовал команду SHOW IP OSPF NEIGHBOR для просмотра"
    ]
  },
  {
    "time": [
      645.55,
      650.92
    ],
    "en": [
      "the neighbor state of R5’s neighbors. Look here, there are two important points about"
    ],
    "ru": [
      "соседнее состояние соседей R5. Послушайте, есть два важных момента о"
    ]
  },
  {
    "time": [
      650.92,
      659.22
    ],
    "en": [
      "OSPF we can learn by analyzing this section. First, R4 became the DR, not R2. R2 became"
    ],
    "ru": [
      "OSPF мы можем узнать, проанализировав этот раздел. Во-первых, DR стал R4, а не R2. R2 стал"
    ]
  },
  {
    "time": [
      659.22,
      666.43
    ],
    "en": [
      "the BDR. What can we learn from that? We can learn that when the DR goes down, the BDR"
    ],
    "ru": [
      "BDR. Что мы можем извлечь из этого? Мы можем узнать, что когда DR выходит из строя, BDR"
    ]
  },
  {
    "time": [
      666.43,
      674.309
    ],
    "en": [
      "becomes the new DR. Then an election is held for the next BDR. R4, which was the BDR, instantly"
    ],
    "ru": [
      "становится новым DR. Затем проводятся выборы следующего BDR. R4, который был BDR, мгновенно"
    ]
  },
  {
    "time": [
      674.309,
      679.3
    ],
    "en": [
      "stepped up to be the new DR, and then an election was held between the other routers for the"
    ],
    "ru": [
      "вступил в должность нового DR, а затем были проведены выборы между другими маршрутизаторами для"
    ]
  },
  {
    "time": [
      679.3,
      688.959
    ],
    "en": [
      "next BDR. R2 has the highest priority, 255, so it became the BDR. Okay, next point. R3"
    ],
    "ru": [
      "следующий БДР. R2 имеет наивысший приоритет, 255, поэтому он стал BDR. Хорошо, следующий пункт. R3"
    ]
  },
  {
    "time": [
      688.959,
      696.88
    ],
    "en": [
      "is a DROther, and is stable in the 2-way state. R5 became a DROther also, by the way. What"
    ],
    "ru": [
      "является DROther и стабилен в двустороннем состоянии. Кстати, R5 тоже стал DROther. Какие"
    ]
  },
  {
    "time": [
      696.88,
      702.42
    ],
    "en": [
      "can we learn from this? We can learn that DROthers will only move to the FULL state"
    ],
    "ru": [
      "мы можем извлечь из этого урок? Мы можем узнать, что DROthers будут переходить только в состояние FULL."
    ]
  },
  {
    "time": [
      702.42,
      709.691
    ],
    "en": [
      "with the DR and BDR of the subnet. The neighbor state with other DROthers will be 2-way. This"
    ],
    "ru": [
      "с DR и BDR подсети. Соседство с другими DROthers будет двусторонним. Этот"
    ]
  },
  {
    "time": [
      709.691,
      715.3389999999999
    ],
    "en": [
      "gives us a hint to the purpose of the DR and BDR, which I’ll cover in the next slide."
    ],
    "ru": [
      "дает нам подсказку о назначении DR и BDR, о которых я расскажу на следующем слайде."
    ]
  },
  {
    "time": [
      715.3389999999999,
      721.41
    ],
    "en": [
      "But remember these two points, that the BDR becomes the DR if the current DR is removed,"
    ],
    "ru": [
      "Но помните эти два момента, что BDR становится DR, если текущий DR удаляется,"
    ]
  },
  {
    "time": [
      721.41,
      726.999
    ],
    "en": [
      "even if it doesn’t have the highest priority. Also that DROthers don’t form full adjacencies"
    ],
    "ru": [
      "даже если у него нет наивысшего приоритета. Также, что DROthers не образуют полных смежностей."
    ]
  },
  {
    "time": [
      726.999,
      732.04
    ],
    "en": [
      "with other DROthers, they remain in the 2-way state."
    ],
    "ru": [
      "с другими DROthers они остаются в двустороннем состоянии."
    ]
  },
  {
    "time": [
      732.04,
      737.779
    ],
    "en": [
      "To repeat, in the broadcast network type, routers will only form a full OSPF adjacency"
    ],
    "ru": [
      "Повторюсь, в широковещательной сети маршрутизаторы образуют только полную смежность OSPF."
    ]
  },
  {
    "time": [
      737.779,
      744.72
    ],
    "en": [
      "with the DR and BDR of the segment. Therefore, routers only exchange LSAs with the DR and"
    ],
    "ru": [
      "с DR и BDR сегмента. Следовательно, маршрутизаторы обмениваются LSA только с DR и"
    ]
  },
  {
    "time": [
      744.72,
      752.5
    ],
    "en": [
      "BDR. DROthers will not exchange LSAs with each other. Remember that, in the 2-way state,"
    ],
    "ru": [
      "BDR. DROther не обмениваются друг с другом LSA. Помните, что в двухстороннем состоянии"
    ]
  },
  {
    "time": [
      752.5,
      757.11
    ],
    "en": [
      "routers haven’t shared LSAs with each other yet. All routers will still have the same"
    ],
    "ru": [
      "маршрутизаторы еще не предоставили общий доступ к LSA друг другу. Все роутеры по-прежнему будут иметь одинаковые"
    ]
  },
  {
    "time": [
      757.11,
      763.16
    ],
    "en": [
      "LSDB, but this reduces the amount of LSAs flooding the network. Let’s see an example."
    ],
    "ru": [
      "LSDB, но это уменьшает количество LSA, наводняющих сеть. Давайте посмотрим на пример."
    ]
  },
  {
    "time": [
      763.16,
      769.35
    ],
    "en": [
      "If 6 routers are connected to the same segment and they all share LSAs with each other, it"
    ],
    "ru": [
      "Если 6 маршрутизаторов подключены к одному сегменту и все они совместно используют LSA друг с другом, он"
    ]
  },
  {
    "time": [
      769.35,
      775.139
    ],
    "en": [
      "will end up like this. A whole lot of LSAs flooding and congesting the network. How about"
    ],
    "ru": [
      "закончится вот так. Множество LSA наводняют и перегружают сеть. Как насчет"
    ]
  },
  {
    "time": [
      775.139,
      778.829
    ],
    "en": [
      "if we use a DR and BDR?"
    ],
    "ru": [
      "если использовать DR и BDR?"
    ]
  },
  {
    "time": [
      778.829,
      784.029
    ],
    "en": [
      "If routers only exchange LSAs with the DR and BDR, as you can see the number of LSAs"
    ],
    "ru": [
      "Если маршрутизаторы обмениваются только LSA с DR и BDR, как вы можете видеть количество LSA"
    ]
  },
  {
    "time": [
      784.029,
      789.639
    ],
    "en": [
      "flooding around the network is reduced. To be honest, on modern routers it’s probably"
    ],
    "ru": [
      "уменьшено затопление сети. Если честно, на современных роутерах наверняка"
    ]
  },
  {
    "time": [
      789.639,
      795.61
    ],
    "en": [
      "not a big deal in most cases, but it still does help reduce unnecessary network traffic."
    ],
    "ru": [
      "в большинстве случаев это не имеет большого значения, но все же помогает уменьшить ненужный сетевой трафик."
    ]
  },
  {
    "time": [
      795.61,
      800.8389999999999
    ],
    "en": [
      "By the way, when routers need to send messages to the DR and BDR they use multicast address"
    ],
    "ru": [
      "Кстати, когда маршрутизаторам нужно отправлять сообщения на DR и BDR, они используют многоадресный адрес."
    ]
  },
  {
    "time": [
      800.8389999999999,
      809.059
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
      800.8389999999999,
      809.059
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
      809.059,
      816.13
    ],
    "en": [
      "Here’s a quick review of the OSPF neighbor process. Remember that I said that these first"
    ],
    "ru": [
      "Вот краткий обзор соседнего процесса OSPF. Помните, я сказал, что эти первые"
    ]
  },
  {
    "time": [
      816.13,
      821.189
    ],
    "en": [
      "steps involve becoming neighbors? So, when routers reach this point in the process, they"
    ],
    "ru": [
      "шаги предполагают становление соседями? Итак, когда маршрутизаторы достигают этой точки в процессе, они"
    ]
  },
  {
    "time": [
      821.189,
      827.699
    ],
    "en": [
      "are OSPF neighbors. Connections between two DROthers stop at this point. Routers will"
    ],
    "ru": [
      "являются соседями OSPF. На этом связь между двумя DROthers прекращается. Маршрутизаторы будут"
    ]
  },
  {
    "time": [
      827.699,
      834.329
    ],
    "en": [
      "only continue on to exchange LSAs and form a full OSPF adjacency with the DR and BDR."
    ],
    "ru": [
      "продолжайте только обмениваться LSA и формировать полную смежность OSPF с DR и BDR."
    ]
  },
  {
    "time": [
      834.329,
      840.0
    ],
    "en": [
      "So, to summarize, this means that the DR and BDR form a full adjacency with ALL routers"
    ],
    "ru": [
      "Итак, вкратце, это означает, что DR и BDR образуют полную смежность со ВСЕМИ маршрутизаторами."
    ]
  },
  {
    "time": [
      840.0,
      847.86
    ],
    "en": [
      "in the subnet, including the DROthers. And DROthers will form a FULL adjacency only with the DR/BDR."
    ],
    "ru": [
      "в подсети, включая DROthers. И DROthers образуют ПОЛНУЮ смежность только с DR / BDR."
    ]
  },
  {
    "time": [
      847.86,
      855.69
    ],
    "en": [
      "the DR/BDR. I showed you this command, SHOW IP OSPF INTERFACE BRIEF, before. Here I did it on R3, which"
    ],
    "ru": [
      "DR / BDR. Я уже показывал вам эту команду, SHOW IP OSPF INTERFACE BRIEF, раньше. Вот сделал на R3, который"
    ]
  },
  {
    "time": [
      855.69,
      863.079
    ],
    "en": [
      "is a DROther. Notice the neighbor count on its G0/0 interface. F indicates the number"
    ],
    "ru": [
      "является DROther. Обратите внимание на количество соседей на его интерфейсе G0 / 0. F указывает номер"
    ]
  },
  {
    "time": [
      863.079,
      871.32
    ],
    "en": [
      "of full adjacencies, and C indicates the total count of neighbors. So, R3 has two Full adjacencies,"
    ],
    "ru": [
      "полных смежностей, а C указывает общее количество соседей. Итак, R3 имеет две полные смежности,"
    ]
  },
  {
    "time": [
      871.32,
      879.05
    ],
    "en": [
      "with R2 and R4. But it has three total neighbors, R2, R4 and R5."
    ],
    "ru": [
      "с R2 и R4. Но у него всего три соседа: R2, R4 и R5."
    ]
  },
  {
    "time": [
      879.05,
      886.17
    ],
    "en": [
      "For more detail, here is SHOW IP OSPF INTERFACE G0/0 on R3. It gives the same information"
    ],
    "ru": [
      "Для получения дополнительных сведений см. ПОКАЗАТЬ ИНТЕРФЕЙС IP OSPF G0 / 0 на маршрутизаторе R3. Он дает ту же информацию"
    ]
  },
  {
    "time": [
      886.17,
      892.639
    ],
    "en": [
      "here, ‘Neighbor Count is 3’, that’s R3’s total number of OSPF neighbors. ‘Adjacent"
    ],
    "ru": [
      "здесь «Neighbor Count is 3» - это общее количество соседей OSPF маршрутизатора R3. 'Соседний"
    ]
  },
  {
    "time": [
      892.639,
      898.47
    ],
    "en": [
      "neighbor count is 2’, those are the neighbors R3 has formed a Full adjacency with. And below"
    ],
    "ru": [
      "количество соседей равно 2 ’, это соседи, с которыми R3 сформировал полную смежность. И ниже"
    ]
  },
  {
    "time": [
      898.47,
      906.29
    ],
    "en": [
      "it, its two adjacent neighbors are listed. R2, the BDR, and R4, the DR. Okay, that’s"
    ],
    "ru": [
      "в нем перечислены два его соседних соседа. R2, BDR и R4, DR. Хорошо, это"
    ]
  },
  {
    "time": [
      906.29,
      909.519
    ],
    "en": [
      "enough for the Broadcast network type for now, let’s move on."
    ],
    "ru": [
      "пока достаточно для типа сети Broadcast, пойдем дальше."
    ]
  },
  {
    "time": [
      909.519,
      915.54
    ],
    "en": [
      "Now let’s take a look at the ‘point-to-point’ network type. Notice that I changed the connection"
    ],
    "ru": [
      "Теперь давайте посмотрим на тип сети \"точка-точка\". Обратите внимание, что я изменил соединение"
    ]
  },
  {
    "time": [
      915.54,
      922.13
    ],
    "en": [
      "between R1 and R2 to a ‘serial’ connection. I will give a very brief overview of serial"
    ],
    "ru": [
      "между R1 и R2 к «последовательному» соединению. Дам очень краткий обзор серийника"
    ]
  },
  {
    "time": [
      922.13,
      926.189
    ],
    "en": [
      "connections in the next slide, but first let me introduce the basics of the point-to-point"
    ],
    "ru": [
      "подключений на следующем слайде, но сначала позвольте мне познакомить вас с основами двухточечной"
    ]
  },
  {
    "time": [
      926.189,
      934.35
    ],
    "en": [
      "connection type. This network type is enabled on serial interfaces using the PPP or HDLC"
    ],
    "ru": [
      "тип соединения. Этот тип сети включен на последовательных интерфейсах с использованием PPP или HDLC."
    ]
  },
  {
    "time": [
      934.35,
      941.629
    ],
    "en": [
      "encapsulations by default. PPP and HDLC are both Layer 2 encapsulations, similar to Ethernet,"
    ],
    "ru": [
      "инкапсуляции по умолчанию. PPP и HDLC - это инкапсуляции уровня 2, аналогичные Ethernet,"
    ]
  },
  {
    "time": [
      941.629,
      947.011
    ],
    "en": [
      "except they are used on serial connections. Same as the Broadcast network type, routers"
    ],
    "ru": [
      "за исключением того, что они используются для последовательных подключений. То же, что и тип широковещательной сети, маршрутизаторы"
    ]
  },
  {
    "time": [
      947.011,
      953.129
    ],
    "en": [
      "dynamically discover neighbors by sending/listening for OSPF Hello messages using multicast address"
    ],
    "ru": [
      "динамически обнаруживать соседей путем отправки / прослушивания сообщений приветствия OSPF с использованием многоадресного адреса"
    ]
  },
  {
    "time": [
      953.129,
      962.589
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
      953.129,
      962.589
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
      962.589,
      967.42
    ],
    "en": [
      "As the network type name implies, these encapsulations are used for ‘point-to-point’ connections"
    ],
    "ru": [
      "Как следует из названия типа сети, эти инкапсуляции используются для соединений «точка-точка»."
    ]
  },
  {
    "time": [
      967.42,
      974.6
    ],
    "en": [
      "between two routers. Therefore there is no point in electing a DR and BDR. The two routers"
    ],
    "ru": [
      "между двумя маршрутизаторами. Поэтому нет смысла выбирать DR и BDR. Два маршрутизатора"
    ]
  },
  {
    "time": [
      974.6,
      979.67
    ],
    "en": [
      "will form a Full adjacency with each other, without the need to elect a DR and BDR."
    ],
    "ru": [
      "образуют полную смежность друг с другом без необходимости выбирать DR и BDR."
    ]
  },
  {
    "time": [
      979.67,
      985.949
    ],
    "en": [
      "Okay, let me give a very brief overview of serial connections. I say very brief, because"
    ],
    "ru": [
      "Хорошо, позвольте мне дать очень краткий обзор последовательных подключений. Я говорю очень кратко, потому что"
    ]
  },
  {
    "time": [
      985.949,
      991.549
    ],
    "en": [
      "serial connections are an old technology which isn’t very common anymore. They still exist,"
    ],
    "ru": [
      "последовательные соединения - это старая технология, которая сейчас не очень распространена. Они все еще существуют,"
    ]
  },
  {
    "time": [
      991.549,
      996.17
    ],
    "en": [
      "but Ethernet is much more dominant. In fact, serial connections have been removed from"
    ],
    "ru": [
      "но Ethernet намного преобладает. Фактически, последовательные соединения были удалены из"
    ]
  },
  {
    "time": [
      996.17,
      1002.54
    ],
    "en": [
      "the exam topics except for the OSPF ‘point-to-point’ network type. So, although you won’t be"
    ],
    "ru": [
      "темы экзамена, за исключением типа сети OSPF «точка-точка». Итак, хотя вы не будете"
    ]
  },
  {
    "time": [
      1002.54,
      1008.739
    ],
    "en": [
      "tested directly on knowledge of serial interfaces, you should have a basic understanding of them."
    ],
    "ru": [
      "протестированы непосредственно на знание последовательных интерфейсов, вы должны иметь их базовое представление."
    ]
  },
  {
    "time": [
      1008.739,
      1013.449
    ],
    "en": [
      "This photo shows some serial interfaces and cables. Notice that both the ports and the"
    ],
    "ru": [
      "На этой фотографии показаны некоторые последовательные интерфейсы и кабели. Обратите внимание, что и порты, и"
    ]
  },
  {
    "time": [
      1013.449,
      1017.29
    ],
    "en": [
      "cables are different than Ethernet cables."
    ],
    "ru": [
      "кабели отличаются от кабелей Ethernet."
    ]
  },
  {
    "time": [
      1017.29,
      1023.239
    ],
    "en": [
      "To explain serial connections, I’ll show you how I configure R1’s S2/0 interface."
    ],
    "ru": [
      "Чтобы объяснить последовательные соединения, я покажу вам, как я настраиваю интерфейс S2 / 0 маршрутизатора R1."
    ]
  },
  {
    "time": [
      1023.239,
      1027.43
    ],
    "en": [
      "You don’t need a deep understanding of this material, but at least know the basics I introduce"
    ],
    "ru": [
      "Вам не нужно глубоко разбираться в этом материале, но, по крайней мере, вы должны знать основы, которые я представляю."
    ]
  },
  {
    "time": [
      1027.43,
      1034.829
    ],
    "en": [
      "here. First up, one side of a serial connection functions as DCE, which stands for Data Communications"
    ],
    "ru": [
      "здесь. Во-первых, одна сторона последовательного соединения функционирует как DCE, что означает обмен данными."
    ]
  },
  {
    "time": [
      1034.829,
      1040.92
    ],
    "en": [
      "Equipment. The other side functions as DTE, which stands for Data Terminal Equipment."
    ],
    "ru": [
      "Оборудование. Другая сторона функционирует как DTE, что расшифровывается как Data Terminal Equipment."
    ]
  },
  {
    "time": [
      1040.92,
      1049.04
    ],
    "en": [
      "Why is this significant? Well, on serial connections, the DCE side needs to specify the clock rate,"
    ],
    "ru": [
      "Почему это важно? Что ж, для последовательных подключений на стороне DCE необходимо указать тактовую частоту,"
    ]
  },
  {
    "time": [
      1049.04,
      1055.39
    ],
    "en": [
      "which is the speed, of the connection. So, in this case R1 has the DCE side of the cable"
    ],
    "ru": [
      "которая является скоростью соединения. Итак, в этом случае R1 имеет сторону DCE кабеля."
    ]
  },
  {
    "time": [
      1055.39,
      1060.54
    ],
    "en": [
      "and therefore needs to tell R2 what speed the connection will operate at. The command"
    ],
    "ru": [
      "и поэтому необходимо сообщить R2, с какой скоростью будет работать соединение. Команда"
    ]
  },
  {
    "time": [
      1060.54,
      1065.311
    ],
    "en": [
      "is ‘clock rate’, and then you can see some standard values that can be used. All"
    ],
    "ru": [
      "это «тактовая частота», а затем вы можете увидеть некоторые стандартные значения, которые можно использовать. Все"
    ]
  },
  {
    "time": [
      1065.311,
      1071.01
    ],
    "en": [
      "of these are in bits per second, by the way. I configured a clock rate of 64000 bits per"
    ],
    "ru": [
      "из них, кстати, в битах в секунду. Я настроил тактовую частоту 64000 бит на"
    ]
  },
  {
    "time": [
      1071.01,
      1078.71
    ],
    "en": [
      "second, aka 64 kilobits per second, added an IP address, and used NO SHUTDOWN. Here’s"
    ],
    "ru": [
      "во-вторых, он же 64 килобита в секунду, добавлен IP-адрес и используется NO SHUTDOWN. Вот"
    ]
  },
  {
    "time": [
      1078.71,
      1084.44
    ],
    "en": [
      "an important point. Ethernet interfaces use the SPEED command to configure the interface’s"
    ],
    "ru": [
      "важный момент. Интерфейсы Ethernet используют команду SPEED для настройки интерфейса"
    ]
  },
  {
    "time": [
      1084.44,
      1089.34
    ],
    "en": [
      "operating speed. Serial interfaces use the CLOCK RATE command."
    ],
    "ru": [
      "рабочая скорость. Последовательные интерфейсы используют команду CLOCK RATE."
    ]
  },
  {
    "time": [
      1089.34,
      1097.081
    ],
    "en": [
      "Let’s continue. I checked the interface with SHOW INTERFACE S2/0. Notice that the"
    ],
    "ru": [
      "Давай продолжим. Я проверил интерфейс с SHOW INTERFACE S2 / 0. Обратите внимание, что"
    ]
  },
  {
    "time": [
      1097.081,
      1104.21
    ],
    "en": [
      "encapsulation is HDLC. On Cisco routers, the default encapsulation on a serial interface"
    ],
    "ru": [
      "инкапсуляция - HDLC. На маршрутизаторах Cisco инкапсуляция по умолчанию на последовательном интерфейсе"
    ]
  },
  {
    "time": [
      1104.21,
      1112.36
    ],
    "en": [
      "is HDLC. Actually, it’s Cisco’s own version called ‘cHDLC’, Cisco HDLC, but it displays"
    ],
    "ru": [
      "это HDLC. На самом деле это собственная версия Cisco под названием «cHDLC», Cisco HDLC, но она отображает"
    ]
  },
  {
    "time": [
      1112.36,
      1119.21
    ],
    "en": [
      "as just ‘HDLC’ in the CLI. Once again, this is a Layer 2 encapsulation, like Ethernet,"
    ],
    "ru": [
      "как просто \"HDLC\" в интерфейсе командной строки. Еще раз, это инкапсуляция уровня 2, такая как Ethernet,"
    ]
  },
  {
    "time": [
      1119.21,
      1125.19
    ],
    "en": [
      "except it’s used on serial connections. Here’s the structure of an HDLC frame, taken"
    ],
    "ru": [
      "за исключением того, что он используется для последовательных подключений. Вот структура кадра HDLC, сделанная"
    ]
  },
  {
    "time": [
      1125.19,
      1129.74
    ],
    "en": [
      "from Wikipedia. You don’t need to learn this, but pause the video if you want to take"
    ],
    "ru": [
      "из Википедии. Вам не нужно этому учиться, но поставьте видео на паузу, если хотите"
    ]
  },
  {
    "time": [
      1129.74,
      1135.85
    ],
    "en": [
      "a look. One thing to note is that there is no MAC address field. So, MAC addresses actually"
    ],
    "ru": [
      "взгляд. Следует отметить, что здесь нет поля MAC-адреса. Итак, MAC-адреса на самом деле"
    ]
  },
  {
    "time": [
      1135.85,
      1141.561
    ],
    "en": [
      "aren’t used. I mentioned the PPP encapsulation too, let’s see how to configure the router"
    ],
    "ru": [
      "не используются. Я тоже упомянул инкапсуляцию PPP, давайте посмотрим, как настроить маршрутизатор"
    ]
  },
  {
    "time": [
      1141.561,
      1150.11
    ],
    "en": [
      "to use that encapsulation instead. Simply use the ENCAPSULATION PPP command on the interface."
    ],
    "ru": [
      "вместо этого использовать эту инкапсуляцию. Просто используйте команду ENCAPSULATION PPP на интерфейсе."
    ]
  },
  {
    "time": [
      1150.11,
      1154.19
    ],
    "en": [
      "Note that if you change the encapsulation, it must match on both ends or the interface"
    ],
    "ru": [
      "Обратите внимание, что если вы измените инкапсуляцию, она должна совпадать на обоих концах или на интерфейсе."
    ]
  },
  {
    "time": [
      1154.19,
      1159.49
    ],
    "en": [
      "will go down. If they use two different encapsulations it’s like they are speaking two different"
    ],
    "ru": [
      "спустится. Если они используют две разные инкапсуляции, это как если бы они говорили на двух разных"
    ]
  },
  {
    "time": [
      1159.49,
      1166.46
    ],
    "en": [
      "languages, they won’t be able to communicate. I did SHOW INTERFACE S2/0 again, and you can"
    ],
    "ru": [
      "языков, они не смогут общаться. Я снова сделал SHOW INTERFACE S2 / 0, и вы можете"
    ]
  },
  {
    "time": [
      1166.46,
      1174.27
    ],
    "en": [
      "see the encapsulation has changed to PPP. I did the same on R2, by the way, so the interface is up."
    ],
    "ru": [
      "см. инкапсуляция изменилась на PPP. Я, кстати, сделал то же самое на R2, так что интерфейс работает."
    ]
  },
  {
    "time": [
      1174.27,
      1181.0
    ],
    "en": [
      "is up. Here’s the configuration I did on R1. The SERIAL RESTART-DELAY 0 command was there by"
    ],
    "ru": [
      "вверх. Вот конфигурация, которую я сделал на R1. Команда SERIAL RESTART-DELAY 0 была там."
    ]
  },
  {
    "time": [
      1181.0,
      1187.23
    ],
    "en": [
      "default, so I only configured the clock rate, encapsulation, and IP address. And here it"
    ],
    "ru": [
      "по умолчанию, поэтому я настроил только тактовую частоту, инкапсуляцию и IP-адрес. И вот это"
    ]
  },
  {
    "time": [
      1187.23,
      1193.46
    ],
    "en": [
      "is on R2, with no CLOCK RATE command because it is the DTE end."
    ],
    "ru": [
      "находится на R2, без команды CLOCK RATE, потому что это конец DTE."
    ]
  },
  {
    "time": [
      1193.46,
      1197.92
    ],
    "en": [
      "Now you’re probably wondering, how can I tell which side is DCE and which is DTE? Well,"
    ],
    "ru": [
      "Теперь вы, наверное, задаетесь вопросом, как я могу определить, на чьей стороне находится DCE, а где - DTE? Хорошо,"
    ]
  },
  {
    "time": [
      1197.92,
      1205.45
    ],
    "en": [
      "to show you I had to recreate this connection in Packet Tracer. GNS3, which I use to make"
    ],
    "ru": [
      "чтобы показать вам, мне пришлось воссоздать это соединение в Packet Tracer. GNS3, который я использую для создания"
    ]
  },
  {
    "time": [
      1205.45,
      1210.16
    ],
    "en": [
      "these lectures, doesn’t handle physical, Layer 1, things like this well, so both sides"
    ],
    "ru": [
      "эти лекции, не справляются с физическими проблемами, уровнем 1 и подобными вещами, поэтому обе стороны"
    ]
  },
  {
    "time": [
      1210.16,
      1217.03
    ],
    "en": [
      "display as DCE. Anyway, the command to view it is SHOW CONTROLLERS, followed by the interface"
    ],
    "ru": [
      "отображать как DCE. В любом случае, команда для просмотра - SHOW CONTROLLERS, за которой следует интерфейс."
    ]
  },
  {
    "time": [
      1217.03,
      1226.17
    ],
    "en": [
      "ID. As you can see R1 is the DCE side, and it has the clock rate of 64,000 bits I configured."
    ],
    "ru": [
      "Я БЫ. Как вы можете видеть, R1 - это сторона DCE, и он имеет тактовую частоту 64000 бит, которую я настроил."
    ]
  },
  {
    "time": [
      1226.17,
      1231.75
    ],
    "en": [
      "I used the same command on R2, and you can see it is the DTE side, and it has detected"
    ],
    "ru": [
      "Я использовал ту же команду на R2, и вы можете видеть, что это сторона DTE, и она обнаружила"
    ]
  },
  {
    "time": [
      1231.75,
      1236.31
    ],
    "en": [
      "the Tx, transmit, and Rx, receive clocks from R1."
    ],
    "ru": [
      "Tx, передача и Rx, принимают тактовые импульсы от R1."
    ]
  },
  {
    "time": [
      1236.31,
      1242.61
    ],
    "en": [
      "So, that’s a very basic overview of serial connections. Here’s a summary of what you"
    ],
    "ru": [
      "Итак, это очень простой обзор последовательных подключений. Вот краткое изложение того, что вы"
    ]
  },
  {
    "time": [
      1242.61,
      1249.3
    ],
    "en": [
      "should know. The default encapsulation on a serial interface is HDLC. You can configure"
    ],
    "ru": [
      "должен знать. Инкапсуляция по умолчанию для последовательного интерфейса - HDLC. Вы можете настроить"
    ]
  },
  {
    "time": [
      1249.3,
      1256.17
    ],
    "en": [
      "them to use PPP encapsulation instead with this command: ENCAPSULATION PPP. If you change"
    ],
    "ru": [
      "вместо этого использовать инкапсуляцию PPP с помощью этой команды: ENCAPSULATION PPP. Если вы измените"
    ]
  },
  {
    "time": [
      1256.17,
      1261.65
    ],
    "en": [
      "the encapsulation on one side, remember to change it on the other too! One side of the"
    ],
    "ru": [
      "инкапсуляция с одной стороны, не забудьте поменять и ее с другой стороны! Одна сторона"
    ]
  },
  {
    "time": [
      1261.65,
      1268.43
    ],
    "en": [
      "connection is DCE and the other is DTE. You can identify which side is DCE and which is"
    ],
    "ru": [
      "подключение - DCE, а другое - DTE. Вы можете определить, какая сторона DCE, а какая -"
    ]
  },
  {
    "time": [
      1268.43,
      1275.46
    ],
    "en": [
      "DTE with this command: SHOW CONTROLLERS, followed by the interface ID. Finally, remember to"
    ],
    "ru": [
      "DTE с помощью этой команды: SHOW CONTROLLERS, за которой следует идентификатор интерфейса. Наконец, не забудьте"
    ]
  },
  {
    "time": [
      1275.46,
      1280.95
    ],
    "en": [
      "configure the clock rate, the speed of the connection, on the DCE side with this command:"
    ],
    "ru": [
      "настройте тактовую частоту, скорость соединения на стороне DCE с помощью этой команды:"
    ]
  },
  {
    "time": [
      1280.95,
      1284.42
    ],
    "en": [
      "CLOCK RATE, followed by the clock rate in bits per second."
    ],
    "ru": [
      "CLOCK RATE, за которым следует тактовая частота в битах в секунду."
    ]
  },
  {
    "time": [
      1284.42,
      1290.17
    ],
    "en": [
      "Let’s return to the OSPF point-to-point network type. Here’s the output of SHOW"
    ],
    "ru": [
      "Вернемся к типу двухточечной сети OSPF. Вот результат SHOW"
    ]
  },
  {
    "time": [
      1290.17,
      1298.0
    ],
    "en": [
      "IP OSPF NEIGHBOR on R2. Notice that R2 has a full adjacency with R1, but instead of DR,"
    ],
    "ru": [
      "IP OSPF NEIGHBOR на R2. Обратите внимание, что R2 имеет полную смежность с R1, но вместо DR,"
    ]
  },
  {
    "time": [
      1298.0,
      1303.76
    ],
    "en": [
      "BDR, or DROTHER, a dash is displayed. This is because the point-to-point network type"
    ],
    "ru": [
      "BDR или DROTHER отображается прочерк. Это потому, что тип сети точка-точка"
    ]
  },
  {
    "time": [
      1303.76,
      1308.56
    ],
    "en": [
      "doesn’t use DRs or BDRs, as I mentioned before."
    ],
    "ru": [
      "не использует DR или BDR, как я упоминал ранее."
    ]
  },
  {
    "time": [
      1308.56,
      1313.77
    ],
    "en": [
      "Final point on this topic, you can manually configure the network type an interface uses."
    ],
    "ru": [
      "И наконец, вы можете вручную настроить тип сети, который использует интерфейс."
    ]
  },
  {
    "time": [
      1313.77,
      1320.03
    ],
    "en": [
      "The command is IP OSPF NETWORK, followed by the network type. You might notice one more"
    ],
    "ru": [
      "Это команда IP OSPF NETWORK, за которой следует тип сети. Вы могли бы заметить еще один"
    ]
  },
  {
    "time": [
      1320.03,
      1325.28
    ],
    "en": [
      "type that I haven’t mentioned, that is the ‘point-to-multipoint’ network type. It’s"
    ],
    "ru": [
      "тип, который я не упомянул, это тип сети «точка-многоточка». Его"
    ]
  },
  {
    "time": [
      1325.28,
      1330.0
    ],
    "en": [
      "more of a ‘sub-type’. You don’t need to learn about it for the CCNA, but feel free"
    ],
    "ru": [
      "больше «подтипа». Вам не нужно узнавать об этом для CCNA, но не стесняйтесь"
    ]
  },
  {
    "time": [
      1330.0,
      1335.04
    ],
    "en": [
      "to do a Google search if you’re curious. So, why would you change the OSPF network"
    ],
    "ru": [
      "выполнить поиск в Google, если вам интересно. Итак, зачем вам менять сеть OSPF"
    ]
  },
  {
    "time": [
      1335.04,
      1340.11
    ],
    "en": [
      "type? For example, if two routers are directly connected with an Ethernet link, like in the"
    ],
    "ru": [
      "тип? Например, если два маршрутизатора напрямую подключены к каналу Ethernet, как в"
    ]
  },
  {
    "time": [
      1340.11,
      1346.15
    ],
    "en": [
      "diagram below, there is no need for a DR/BDR. You can configure the point-to-point network"
    ],
    "ru": [
      "На диаграмме ниже нет необходимости в DR / BDR. Вы можете настроить двухточечную сеть"
    ]
  },
  {
    "time": [
      1346.15,
      1351.46
    ],
    "en": [
      "type in this case, although you don’t have to. Note that not all network types work on"
    ],
    "ru": [
      "введите в этом случае, хотя вам не обязательно. Обратите внимание, что не все типы сетей работают на"
    ]
  },
  {
    "time": [
      1351.46,
      1357.341
    ],
    "en": [
      "all link types. For example, a serial link cannot use the broadcast network type. This"
    ],
    "ru": [
      "все типы ссылок. Например, последовательное соединение не может использовать тип широковещательной сети. Этот"
    ]
  },
  {
    "time": [
      1357.341,
      1362.04
    ],
    "en": [
      "is because serial links don’t support Layer 2 broadcast frames, which is necessary for"
    ],
    "ru": [
      "потому что последовательные каналы не поддерживают широковещательные кадры уровня 2, что необходимо для"
    ]
  },
  {
    "time": [
      1362.04,
      1363.93
    ],
    "en": [
      "the broadcast network type."
    ],
    "ru": [
      "тип широковещательной сети."
    ]
  },
  {
    "time": [
      1363.93,
      1370.55
    ],
    "en": [
      "Okay here’s a chart for quick review. One thing I didn’t bring up yet in this video"
    ],
    "ru": [
      "Хорошо, вот таблица для быстрого просмотра. Одна вещь, которую я еще не затронул в этом видео"
    ]
  },
  {
    "time": [
      1370.55,
      1376.05
    ],
    "en": [
      "is that point-to-point networks use the same default timers as broadcast networks. The"
    ],
    "ru": [
      "в том, что в сетях точка-точка используются те же таймеры по умолчанию, что и в широковещательных сетях. В"
    ]
  },
  {
    "time": [
      1376.05,
      1381.59
    ],
    "en": [
      "default Hello timer is 10 seconds and the default Dead timer is 40 seconds. You don’t"
    ],
    "ru": [
      "Таймер приветствия по умолчанию составляет 10 секунд, а таймер отключения по умолчанию - 40 секунд. Ты не"
    ]
  },
  {
    "time": [
      1381.59,
      1385.49
    ],
    "en": [
      "have to learn this network type, but just for your information the non-broadcast network"
    ],
    "ru": [
      "необходимо изучить этот тип сети, но для вашей информации нешироковещательная сеть"
    ]
  },
  {
    "time": [
      1385.49,
      1394.45
    ],
    "en": [
      "type uses a default Hello timer of 30 seconds and Dead timer of 120 seconds. Okay, let’s move on."
    ],
    "ru": [
      "type использует таймер приветствия по умолчанию, равный 30 секундам, и таймер отключения, равный 120 секундам. Ладно, пойдем дальше."
    ]
  },
  {
    "time": [
      1394.45,
      1400.17
    ],
    "en": [
      "move on. Now let’s move on to look at some requirements of OSPF neighbor relationships. Usually, routers"
    ],
    "ru": [
      "двигаться дальше. Теперь давайте перейдем к рассмотрению некоторых требований к взаимоотношениям между соседями OSPF. Обычно роутеры"
    ]
  },
  {
    "time": [
      1400.17,
      1404.22
    ],
    "en": [
      "will become OSPF neighbors without issue, but I will introduce a few of the problems"
    ],
    "ru": [
      "без проблем станут соседями OSPF, но я расскажу о некоторых проблемах"
    ]
  },
  {
    "time": [
      1404.22,
      1410.71
    ],
    "en": [
      "that can occur. I already mentioned some of these in previous videos, but let’s review."
    ],
    "ru": [
      "что может произойти. Я уже упоминал о некоторых из них в предыдущих видео, но давайте вернемся к ним."
    ]
  },
  {
    "time": [
      1410.71,
      1416.09
    ],
    "en": [
      "First requirement, the area number must match for two routers to become OSPF neighbors."
    ],
    "ru": [
      "Первое требование: номер области должен совпадать, чтобы два маршрутизатора стали соседями OSPF."
    ]
  },
  {
    "time": [
      1416.09,
      1423.12
    ],
    "en": [
      "We’ll use this small topology of two routers to demonstrate. Here’s R1’s OSPF config."
    ],
    "ru": [
      "Для демонстрации мы будем использовать эту небольшую топологию из двух маршрутизаторов. Вот конфигурация OSPF маршрутизатора R1."
    ]
  },
  {
    "time": [
      1423.12,
      1432.07
    ],
    "en": [
      "OSPF is enabled on G0/0 in area 0. However, R2’s G0/0 is in area 1. When I enter SHOW"
    ],
    "ru": [
      "OSPF включен на G0 / 0 в области 0. Однако G0 / 0 R2 находится в области 1. Когда я вхожу в SHOW"
    ]
  },
  {
    "time": [
      1432.07,
      1439.27
    ],
    "en": [
      "IP OSPF NEIGHBOR on both devices, they have no OSPF neighbors. Let’s fix the issue."
    ],
    "ru": [
      "IP OSPF NEIGHBOR на обоих устройствах, у них нет соседей OSPF. Давайте исправим проблему."
    ]
  },
  {
    "time": [
      1439.27,
      1446.35
    ],
    "en": [
      "I changed the network command on R2 to use area 0. As you can see, they successfully became OSPF neighbors."
    ],
    "ru": [
      "Я изменил сетевую команду на R2, чтобы использовать область 0. Как видите, они успешно стали соседями OSPF."
    ]
  },
  {
    "time": [
      1446.35,
      1452.25
    ],
    "en": [
      "became OSPF neighbors. So, that’s the first rule. For two routers to become OSPF neighbors, they must be in"
    ],
    "ru": [
      "стали соседями OSPF. Итак, это первое правило. Чтобы два маршрутизатора стали соседями OSPF, они должны находиться в"
    ]
  },
  {
    "time": [
      1452.25,
      1458.81
    ],
    "en": [
      "the same area. But we already covered that before. Next rule. The interfaces must be"
    ],
    "ru": [
      "та же площадь. Но мы уже говорили об этом раньше. Следующее правило. Интерфейсы должны быть"
    ]
  },
  {
    "time": [
      1458.81,
      1467.48
    ],
    "en": [
      "in the same subnet to become OSPF neighbors. We covered this one before too, but let me demonstrate it."
    ],
    "ru": [
      "в той же подсети, чтобы стать соседями OSPF. Мы уже рассказывали об этом раньше, но позвольте мне продемонстрировать это."
    ]
  },
  {
    "time": [
      1467.48,
      1473.7
    ],
    "en": [
      "demonstrate it. Notice that R1 and R2’s G0/0 interfaces are now in different subnets. I activated"
    ],
    "ru": [
      "продемонстрировать это. Обратите внимание, что интерфейсы G0 / 0 R1 и R2 теперь находятся в разных подсетях. Я активировал"
    ]
  },
  {
    "time": [
      1473.7,
      1481.02
    ],
    "en": [
      "OSPF on both of the interfaces. But when I check for OSPF neighbors, they don’t come up."
    ],
    "ru": [
      "OSPF на обоих интерфейсах. Но когда я проверяю соседей OSPF, они не приходят."
    ]
  },
  {
    "time": [
      1481.02,
      1485.75
    ],
    "en": [
      "I once again configured R2’s interface in the same subnet as R1, and also made sure"
    ],
    "ru": [
      "Я снова настроил интерфейс R2 в той же подсети, что и R1, а также убедился, что"
    ]
  },
  {
    "time": [
      1485.75,
      1492.49
    ],
    "en": [
      "to edit the network command so that OSPF is once again activated on G0/0. Now R1 and R2"
    ],
    "ru": [
      "отредактировать сетевую команду, чтобы OSPF снова активировался на G0 / 0. Теперь R1 и R2"
    ]
  },
  {
    "time": [
      1492.49,
      1495.64
    ],
    "en": [
      "are OSPF neighbors again."
    ],
    "ru": [
      "снова являются соседями OSPF."
    ]
  },
  {
    "time": [
      1495.64,
      1501.62
    ],
    "en": [
      "Next up, here’s one we haven’t covered yet. The OSPF process must not be shutdown."
    ],
    "ru": [
      "Далее, вот один, который мы еще не рассмотрели. Запрещается завершать процесс OSPF."
    ]
  },
  {
    "time": [
      1501.62,
      1506.96
    ],
    "en": [
      "You can actually ‘shutdown’ the OSPF process on the router like an interface. This disables"
    ],
    "ru": [
      "Фактически вы можете «выключить» процесс OSPF на маршрутизаторе как интерфейс. Это отключает"
    ]
  },
  {
    "time": [
      1506.96,
      1512.66
    ],
    "en": [
      "OSPF operation, without removing the OSPF configurations. Let’s check it out."
    ],
    "ru": [
      "Работа OSPF без удаления конфигураций OSPF. Давай проверим."
    ]
  },
  {
    "time": [
      1512.66,
      1520.15
    ],
    "en": [
      "Here’s how to do it. From OSPF configuration mode on R2, I used the SHUTDOWN command. Then"
    ],
    "ru": [
      "Вот как это сделать. В режиме конфигурации OSPF на R2 я использовал команду SHUTDOWN. потом"
    ]
  },
  {
    "time": [
      1520.15,
      1525.51
    ],
    "en": [
      "a message is displayed indicating that its neighbor R1 has gone from FULL to DOWN, and"
    ],
    "ru": [
      "отображается сообщение, указывающее, что его сосед R1 перешел из состояния ПОЛНЫЙ в состояние ВНИЗ, и"
    ]
  },
  {
    "time": [
      1525.51,
      1532.11
    ],
    "en": [
      "no neighbors are displayed in SHOW IP OSPF NEIGHBOR. Then I enable OSPF again with NO"
    ],
    "ru": [
      "в SHOW IP OSPF NEIGHBOR соседи не отображаются. Затем я снова включаю OSPF с NO"
    ]
  },
  {
    "time": [
      1532.11,
      1539.82
    ],
    "en": [
      "SHUTDOWN, A message indicates the neighbor is back up, and you can see it in SHOW IP OSPF NEIGHBOR."
    ],
    "ru": [
      "SHUTDOWN, сообщение указывает, что сосед готов к работе, и вы можете увидеть это в SHOW IP OSPF NEIGHBOR."
    ]
  },
  {
    "time": [
      1539.82,
      1544.49
    ],
    "en": [
      "OSPF NEIGHBOR. That one won’t be a problem unless you manually shutdown the OSPF process, so usually it’s"
    ],
    "ru": [
      "СОСЕД ОСПФ. Это не будет проблемой, если вы вручную не завершите процесс OSPF, поэтому обычно"
    ]
  },
  {
    "time": [
      1544.49,
      1550.0
    ],
    "en": [
      "not a problem. Next requirement, the OSPF router IDs must be unique."
    ],
    "ru": [
      "не проблема. Следующее требование: идентификаторы маршрутизатора OSPF должны быть уникальными."
    ]
  },
  {
    "time": [
      1550.0,
      1556.87
    ],
    "en": [
      "Let’s see how that works. I haven’t configured the router IDs of R1 and R2, and I also haven’t"
    ],
    "ru": [
      "Посмотрим, как это работает. Я не настроил идентификаторы маршрутизаторов для R1 и R2, и я также не"
    ]
  },
  {
    "time": [
      1556.87,
      1561.94
    ],
    "en": [
      "configured any loopback interfaces, so each router has selected its G0/0 IP address as"
    ],
    "ru": [
      "настроил любые интерфейсы обратной связи, поэтому каждый маршрутизатор выбрал свой IP-адрес G0 / 0 как"
    ]
  },
  {
    "time": [
      1561.94,
      1573.65
    ],
    "en": [
      "its router ID, 192.168.1.1 for R1 and 192.168.1.2 for R2. So, I configured 192.168.1.1 as R2’s"
    ],
    "ru": [
      "его идентификатор маршрутизатора 192.168.1.1 для R1 и 192.168.1.2 для R2. Итак, я настроил 192.168.1.1 как R2"
    ]
  },
  {
    "time": [
      1573.65,
      1578.69
    ],
    "en": [
      "router ID, the same as R1’s. As I have shown you before, you need to reload the router"
    ],
    "ru": [
      "идентификатор маршрутизатора, такой же, как у маршрутизатора R1. Как я уже показал вам раньше, вам нужно перезагрузить роутер."
    ]
  },
  {
    "time": [
      1578.69,
      1587.01
    ],
    "en": [
      "or use CLEAR IP OSPF PROCESS for the new router ID to take effect. So I used CLEAR IP OSPF"
    ],
    "ru": [
      "или используйте CLEAR IP OSPF PROCESS, чтобы новый идентификатор маршрутизатора вступил в силу. Итак, я использовал CLEAR IP OSPF"
    ]
  },
  {
    "time": [
      1587.01,
      1592.58
    ],
    "en": [
      "PROCESS. Immediately the neighbor goes down because I cleared the OSPF process. But then,"
    ],
    "ru": [
      "ПРОЦЕСС. Сразу же сосед выходит из строя, потому что я очистил процесс OSPF. Но потом,"
    ]
  },
  {
    "time": [
      1592.58,
      1597.91
    ],
    "en": [
      "instead of the neighbor coming back up, this message is displayed. ‘OSPF detected duplicate"
    ],
    "ru": [
      "это сообщение отображается вместо того, чтобы сосед вернулся. ‘OSPF обнаружил дубликат"
    ]
  },
  {
    "time": [
      1597.91,
      1606.34
    ],
    "en": [
      "router-id 192.168.1.1 from 192.168.1.1 on interface GigabitEthernet0/0, and then the"
    ],
    "ru": [
      "router-id 192.168.1.1 из 192.168.1.1 на интерфейсе GigabitEthernet0 / 0, а затем"
    ]
  },
  {
    "time": [
      1606.34,
      1612.55
    ],
    "en": [
      "neighbor stays down. So, let’s fix this. I removed the manually configured router ID"
    ],
    "ru": [
      "сосед остается внизу. Итак, давайте это исправим. Я удалил вручную настроенный идентификатор маршрутизатора"
    ]
  },
  {
    "time": [
      1612.55,
      1618.11
    ],
    "en": [
      "with NO ROUTER-ID. Note that you don’t actually have to specify the router ID when removing"
    ],
    "ru": [
      "БЕЗ МАРШРУТИЗАТОРА. Обратите внимание, что на самом деле вам не нужно указывать идентификатор маршрутизатора при удалении"
    ]
  },
  {
    "time": [
      1618.11,
      1626.2
    ],
    "en": [
      "the command. NO ROUTER-ID has the same effect as NO ROUTER-ID 192.168.1.1, both remove the"
    ],
    "ru": [
      "команда. NO ROUTER-ID имеет тот же эффект, что и NO ROUTER-ID 192.168.1.1, оба удаляют"
    ]
  },
  {
    "time": [
      1626.2,
      1632.93
    ],
    "en": [
      "command. This time, without having to reset the OSPF process R2’s router ID returns"
    ],
    "ru": [
      "команда. На этот раз, без перезагрузки процесса OSPF, идентификатор маршрутизатора R2 возвращается"
    ]
  },
  {
    "time": [
      1632.93,
      1641.13
    ],
    "en": [
      "to 192.168.1.2 and the neighbor comes up again. Why didn’t I have to use CLEAR IP OSPF PROCESS?"
    ],
    "ru": [
      "на 192.168.1.2, и сосед снова подходит. Почему мне не пришлось использовать CLEAR IP OSPF PROCESS?"
    ]
  },
  {
    "time": [
      1641.13,
      1646.76
    ],
    "en": [
      "I actually didn’t expect this, but I realized that it’s because R2 had no other OSPF neighbors"
    ],
    "ru": [
      "На самом деле я этого не ожидал, но понял, что это потому, что у R2 не было других соседей по OSPF."
    ]
  },
  {
    "time": [
      1646.76,
      1653.98
    ],
    "en": [
      "at the time, so the router was free to change R2’s router ID without worrying about it effecting other neighbors."
    ],
    "ru": [
      "в то время, поэтому маршрутизатор мог изменить идентификатор маршрутизатора R2, не беспокоясь о том, что это повлияет на других соседей."
    ]
  },
  {
    "time": [
      1653.98,
      1660.9
    ],
    "en": [
      "effecting other neighbors. So, watch out for duplicate router IDs. Next requirement, the Hello and Dead timers must"
    ],
    "ru": [
      "воздействуя на других соседей. Так что остерегайтесь повторяющихся идентификаторов маршрутизаторов. Следующее требование, таймеры Hello и Dead должны"
    ]
  },
  {
    "time": [
      1660.9,
      1666.86
    ],
    "en": [
      "match. In both of the network types we looked at today, Broadcast and Point-to-Point, the"
    ],
    "ru": [
      "соответствие. В обоих типах сетей, которые мы рассмотрели сегодня, широковещательных и двухточечных,"
    ]
  },
  {
    "time": [
      1666.86,
      1672.87
    ],
    "en": [
      "defaults are 10 seconds and 40 seconds. But you can manually change these settings."
    ],
    "ru": [
      "по умолчанию - 10 секунд и 40 секунд. Но вы можете изменить эти настройки вручную."
    ]
  },
  {
    "time": [
      1672.87,
      1677.26
    ],
    "en": [
      "The Hello and Dead timers are configured directly on the interface. Here’s how to configure"
    ],
    "ru": [
      "Таймеры Hello и Dead настраиваются непосредственно в интерфейсе. Вот как настроить"
    ]
  },
  {
    "time": [
      1677.26,
      1685.169
    ],
    "en": [
      "the Hello timer. IP OSPF HELLO-INTERVAL, followed by the interval in seconds. I set it to 5."
    ],
    "ru": [
      "таймер Hello. IP OSPF HELLO-INTERVAL, за которым следует интервал в секундах. Я выставил 5."
    ]
  },
  {
    "time": [
      1685.169,
      1692.361
    ],
    "en": [
      "Then the Dead timer. IP OSPF DEAD-INTERVAL, and I set it to 20. As you can see, the neighbor"
    ],
    "ru": [
      "Затем Мертвый таймер. IP OSPF DEAD-INTERVAL, и я выставил его на 20. Как видите, сосед"
    ]
  },
  {
    "time": [
      1692.361,
      1698.37
    ],
    "en": [
      "then goes down. Note that I changed both values, the Hello timer and the Dead timer, but even"
    ],
    "ru": [
      "затем идет вниз. Обратите внимание, что я изменил оба значения, таймер Hello и таймер Dead, но даже"
    ]
  },
  {
    "time": [
      1698.37,
      1704.87
    ],
    "en": [
      "if you only change one the neighbor will still go down. So, let’s fix this. I used NO IP"
    ],
    "ru": [
      "если вы измените только один, сосед все равно выйдет из строя. Итак, давайте это исправим. Я не использовал IP"
    ]
  },
  {
    "time": [
      1704.87,
      1712.11
    ],
    "en": [
      "OSPF HELLO-INTERVAL and NO IP OSPF DEAD-INTERVAL to return the timers to their default values."
    ],
    "ru": [
      "OSPF HELLO-INTERVAL и NO IP OSPF DEAD-INTERVAL для возврата таймеров к их значениям по умолчанию."
    ]
  },
  {
    "time": [
      1712.11,
      1715.61
    ],
    "en": [
      "Notice the method I used to return them to their defaults, it’s the same as for the"
    ],
    "ru": [
      "Обратите внимание на метод, который я использовал, чтобы вернуть их к значениям по умолчанию, он такой же, как и для"
    ]
  },
  {
    "time": [
      1715.61,
      1722.63
    ],
    "en": [
      "router ID. I didn’t have to actually specify NO IP OSPF HELLO-INTERVAL 5 or DEAD-INTERVAL"
    ],
    "ru": [
      "ID маршрутизатора. Мне не нужно было указывать NO IP OSPF HELLO-INTERVAL 5 или DEAD-INTERVAL."
    ]
  },
  {
    "time": [
      1722.63,
      1728.29
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
      1722.63,
      1728.29
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
      1728.29,
      1729.87
    ],
    "en": [
      "neighbor is back up."
    ],
    "ru": [
      "сосед вернулся."
    ]
  },
  {
    "time": [
      1729.87,
      1736.75
    ],
    "en": [
      "So, remember to check the Hello and Dead intervals if you’re having trouble with OSPF adjacencies."
    ],
    "ru": [
      "Поэтому не забудьте проверить интервалы Hello и Dead, если у вас возникли проблемы с смежностями OSPF."
    ]
  },
  {
    "time": [
      1736.75,
      1742.14
    ],
    "en": [
      "Next up, authentication settings must match. What does that mean? Well, you can configure"
    ],
    "ru": [
      "Далее, настройки аутентификации должны совпадать. Что это обозначает? Ну можно настроить"
    ]
  },
  {
    "time": [
      1742.14,
      1746.51
    ],
    "en": [
      "an OSPF password, and then the router will only become neighbors with routers that have"
    ],
    "ru": [
      "пароль OSPF, и тогда маршрутизатор станет соседом только с маршрутизаторами, у которых есть"
    ]
  },
  {
    "time": [
      1746.51,
      1751.59
    ],
    "en": [
      "a matching OSPF password. Let’s take a look."
    ],
    "ru": [
      "соответствующий пароль OSPF. Давайте взглянем."
    ]
  },
  {
    "time": [
      1751.59,
      1758.99
    ],
    "en": [
      "The OSPF password is configured directly on the interface too. I used IP OSPF AUTHENTICATION-KEY,"
    ],
    "ru": [
      "Пароль OSPF также настраивается прямо на интерфейсе. Я использовал IP OSPF AUTHENTICATION-KEY,"
    ]
  },
  {
    "time": [
      1758.99,
      1764.13
    ],
    "en": [
      "followed by a password of ‘jeremy’. Note that this doesn’t actually enable OSPF authentication"
    ],
    "ru": [
      "за которым следует пароль «Джереми». Обратите внимание, что на самом деле это не включает аутентификацию OSPF."
    ]
  },
  {
    "time": [
      1764.13,
      1769.75
    ],
    "en": [
      "on the interface. The password is configured, but we need to enable OSPF authentication."
    ],
    "ru": [
      "на интерфейсе. Пароль настроен, но нам нужно включить аутентификацию OSPF."
    ]
  },
  {
    "time": [
      1769.75,
      1776.56
    ],
    "en": [
      "So, I used IP OSPF AUTHENTICATION to enable it on the interface. Then the neighbor goes"
    ],
    "ru": [
      "Итак, я использовал АУТЕНТИФИКАЦИЮ IP OSPF, чтобы включить ее на интерфейсе. Потом идет сосед"
    ]
  },
  {
    "time": [
      1776.56,
      1782.69
    ],
    "en": [
      "down, because R1 isn’t providing R2 a matching password. Actually, I haven’t configured"
    ],
    "ru": [
      "вниз, потому что R1 не предоставляет R2 подходящий пароль. На самом деле я не настраивал"
    ]
  },
  {
    "time": [
      1782.69,
      1789.27
    ],
    "en": [
      "OSPF authentication on R1 yet, so it’s not providing R2 with any OSPF password. So, to"
    ],
    "ru": [
      "Аутентификация OSPF на маршрутизаторе R1 еще не используется, поэтому он не предоставляет маршрутизатору R2 никаких паролей OSPF. Итак, чтобы"
    ]
  },
  {
    "time": [
      1789.27,
      1793.92
    ],
    "en": [
      "fix this we could either configure the same authentication settings on R1, or remove the"
    ],
    "ru": [
      "исправить это, мы могли либо настроить те же параметры аутентификации на R1, либо удалить"
    ]
  },
  {
    "time": [
      1793.92,
      1801.26
    ],
    "en": [
      "authentication from R2. I removed them from R2, and now the neighbor is back up again."
    ],
    "ru": [
      "аутентификация от R2. Я удалил их из R2, и теперь сосед снова работает."
    ]
  },
  {
    "time": [
      1801.26,
      1807.94
    ],
    "en": [
      "Okay, there are two more things to mention. Number 7 is that the IP MTU settings on the"
    ],
    "ru": [
      "Хорошо, нужно упомянуть еще две вещи. Номер 7 - это то, что настройки IP MTU на"
    ]
  },
  {
    "time": [
      1807.94,
      1814.11
    ],
    "en": [
      "interfaces must match. The IP MTU is the maximum size of an IP packet that will be sent out"
    ],
    "ru": [
      "интерфейсы должны совпадать. IP MTU - это максимальный размер IP-пакета, который будет отправлен."
    ]
  },
  {
    "time": [
      1814.11,
      1821.0
    ],
    "en": [
      "of the interface. The default is usually 1500 bytes, but it can be configured. Note that"
    ],
    "ru": [
      "интерфейса. По умолчанию обычно 1500 байт, но это можно настроить. Обратите внимание, что"
    ]
  },
  {
    "time": [
      1821.0,
      1825.94
    ],
    "en": [
      "this requirement and the next one are special, even if the settings don’t match, the neighbors"
    ],
    "ru": [
      "это и следующее требование являются особенными, даже если настройки не совпадают, соседи"
    ]
  },
  {
    "time": [
      1825.94,
      1832.98
    ],
    "en": [
      "can become OSPF neighbors, but OSPF won’t function properly. Let’s see."
    ],
    "ru": [
      "могут стать соседями OSPF, но OSPF не будет работать должным образом. Давайте посмотрим."
    ]
  },
  {
    "time": [
      1832.98,
      1839.11
    ],
    "en": [
      "You can configure the IP MTU of an interface with this command: IP MTU, followed by the"
    ],
    "ru": [
      "Вы можете настроить IP MTU интерфейса с помощью этой команды: IP MTU, за которой следует"
    ]
  },
  {
    "time": [
      1839.11,
      1846.26
    ],
    "en": [
      "MTU in bytes. I changed it to 1400 on R2’s G0/0, so it doesn’t match with the default"
    ],
    "ru": [
      "MTU в байтах. Я изменил его на 1400 на R2 G0 / 0, поэтому он не соответствует значению по умолчанию."
    ]
  },
  {
    "time": [
      1846.26,
      1853.49
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
      1846.26,
      1853.49
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
      1853.49,
      1860.49
    ],
    "en": [
      "actually remained neighbors. Then I reset the OSPF process on R2. I waited a minute,"
    ],
    "ru": [
      "собственно остались соседи. Затем я сбрасываю процесс OSPF на R2. Я подождал минуту,"
    ]
  },
  {
    "time": [
      1860.49,
      1864.97
    ],
    "en": [
      "but no message came indicating that the neighbors had reached the full state. I checked the"
    ],
    "ru": [
      "но не пришло сообщение о том, что соседи достигли полного состояния. Я проверил"
    ]
  },
  {
    "time": [
      1864.97,
      1871.11
    ],
    "en": [
      "neighbor table again, and it was stuck in the EXSTART state. After waiting a few minutes,"
    ],
    "ru": [
      "таблица соседей снова, и она застряла в состоянии EXSTART. Подождав несколько минут,"
    ]
  },
  {
    "time": [
      1871.11,
      1875.95
    ],
    "en": [
      "a few more messages were displayed, and these kept on repeating by the way. So, clearly"
    ],
    "ru": [
      "было отображено еще несколько сообщений, и они, кстати, продолжали повторяться. Итак, ясно"
    ]
  },
  {
    "time": [
      1875.95,
      1882.83
    ],
    "en": [
      "OSPF isn’t functioning properly. I used NO IP MTU to return the MTU to the default"
    ],
    "ru": [
      "OSPF не работает должным образом. Я использовал NO IP MTU, чтобы вернуть MTU по умолчанию"
    ]
  },
  {
    "time": [
      1882.83,
      1887.22
    ],
    "en": [
      "value, and then finally R1 and R2 reached the FULL state."
    ],
    "ru": [
      "значение, а затем, наконец, R1 и R2 достигли состояния FULL."
    ]
  },
  {
    "time": [
      1887.22,
      1892.25
    ],
    "en": [
      "So, if your OSPF neighbors are having trouble reaching the FULL state make sure to check"
    ],
    "ru": [
      "Итак, если ваши соседи OSPF не могут достичь состояния FULL, обязательно проверьте"
    ]
  },
  {
    "time": [
      1892.25,
      1898.58
    ],
    "en": [
      "the MTU settings. Okay, last one. The OSPF network type must match. Let’s see what"
    ],
    "ru": [
      "настройки MTU. Хорошо, последний. Тип сети OSPF должен совпадать. Посмотрим, что"
    ]
  },
  {
    "time": [
      1898.58,
      1900.19
    ],
    "en": [
      "happens if they don’t."
    ],
    "ru": [
      "случается, если они этого не делают."
    ]
  },
  {
    "time": [
      1900.19,
      1905.86
    ],
    "en": [
      "So, to demonstrate this problem I configured a loopback interface on R2 with an IP address,"
    ],
    "ru": [
      "Итак, чтобы продемонстрировать эту проблему, я настроил интерфейс обратной связи на R2 с IP-адресом,"
    ]
  },
  {
    "time": [
      1905.86,
      1911.53
    ],
    "en": [
      "and advertised it to R1. Then I changed the network type on R2’s G0/0 to point-to-point."
    ],
    "ru": [
      "и объявил об этом R1. Затем я изменил тип сети на маршрутизаторе R2 G0 / 0 на двухточечный."
    ]
  },
  {
    "time": [
      1911.53,
      1919.02
    ],
    "en": [
      "R1’s G0/0 is still using the default broadcast network type. A message is displayed saying"
    ],
    "ru": [
      "G0 / 0 маршрутизатора R1 все еще использует тип широковещательной сети по умолчанию. Отображается сообщение, говорящее"
    ]
  },
  {
    "time": [
      1919.02,
      1924.27
    ],
    "en": [
      "the neighbor went down, but then it went right back to the FULL state. R1 even displays as"
    ],
    "ru": [
      "сосед вышел из строя, но затем снова вернулся в состояние ПОЛНЫЙ. R1 даже отображается как"
    ]
  },
  {
    "time": [
      1924.27,
      1930.37
    ],
    "en": [
      "FULL in SHOW IP OSPF NEIGHBOR. So what’s the problem? Let’s see on R1."
    ],
    "ru": [
      "ПОЛНЫЙ в SHOW IP OSPF NEIGHBOR. Так в чем проблема? Посмотрим на R1."
    ]
  },
  {
    "time": [
      1930.37,
      1937.37
    ],
    "en": [
      "Here’s R1. R2 appears in the neighbor table in the FULL state, so you might think OSPF"
    ],
    "ru": [
      "Вот R1. R2 отображается в таблице соседей в состоянии FULL, поэтому вы можете подумать, что OSPF"
    ]
  },
  {
    "time": [
      1937.37,
      1943.46
    ],
    "en": [
      "is working fine. But look at the routing table. R2’s loopback address should be in R1’s"
    ],
    "ru": [
      "работает нормально. Но посмотрите на таблицу маршрутизации. Адрес обратной связи R2 должен быть в адресе R1."
    ]
  },
  {
    "time": [
      1943.46,
      1949.38
    ],
    "en": [
      "routing table, but it’s not. This is what will happen when the OSPF network type doesn’t"
    ],
    "ru": [
      "таблица маршрутизации, но это не так. Вот что произойдет, если тип сети OSPF не"
    ]
  },
  {
    "time": [
      1949.38,
      1953.69
    ],
    "en": [
      "match. It can be tricky to troubleshoot because the neighbor state is Full, so it can seem"
    ],
    "ru": [
      "соответствие. Устранение неполадок может быть сложным, поскольку состояние соседа - полное, поэтому может показаться, что"
    ]
  },
  {
    "time": [
      1953.69,
      1958.67
    ],
    "en": [
      "like everything is working fine. Make sure to watch out for that when troubleshooting OSPF."
    ],
    "ru": [
      "вроде все нормально работает. Обязательно следите за этим при устранении неполадок OSPF."
    ]
  },
  {
    "time": [
      1958.67,
      1964.601
    ],
    "en": [
      "OSPF. Okay, I’ll leave it there. There is of course more we can get into, but I’ve given you"
    ],
    "ru": [
      "OSPF. Хорошо, я оставлю это здесь. Мы, конечно, можем еще кое-что рассказать, но я дал вам"
    ]
  },
  {
    "time": [
      1964.601,
      1970.26
    ],
    "en": [
      "plenty for the CCNA. Make sure to remember these requirements. You don’t have to memorize"
    ],
    "ru": [
      "много для CCNA. Обязательно запомните эти требования. Вам не нужно запоминать"
    ]
  },
  {
    "time": [
      1970.26,
      1974.7
    ],
    "en": [
      "them as a list, but make sure that if you see these problems on a router you are able"
    ],
    "ru": [
      "их в виде списка, но убедитесь, что если вы видите эти проблемы на маршрутизаторе, вы можете"
    ]
  },
  {
    "time": [
      1974.7,
      1978.16
    ],
    "en": [
      "to identify and fix them."
    ],
    "ru": [
      "выявить и исправить их."
    ]
  },
  {
    "time": [
      1978.16,
      1983.19
    ],
    "en": [
      "The final topic for today’s video is LSA types. These aren’t specifically mentioned"
    ],
    "ru": [
      "Последняя тема сегодняшнего видео - типы LSA. Они не упоминаются отдельно"
    ]
  },
  {
    "time": [
      1983.19,
      1987.09
    ],
    "en": [
      "the exam topics list, so I’m just going to spend a few minutes giving you a brief"
    ],
    "ru": [
      "список тем экзамена, поэтому я потрачу несколько минут на то, чтобы"
    ]
  },
  {
    "time": [
      1987.09,
      1992.69
    ],
    "en": [
      "overview of some basic LSA types. To do so, I’ve taken this topology from earlier and"
    ],
    "ru": [
      "обзор некоторых основных типов LSA. Для этого я взял эту топологию ранее и"
    ]
  },
  {
    "time": [
      1992.69,
      1998.94
    ],
    "en": [
      "modified it, adding an Internet link on R4. R4 has a default route to the Internet, and"
    ],
    "ru": [
      "изменил его, добавив интернет-ссылку на R4. R4 имеет маршрут в Интернет по умолчанию, и"
    ]
  },
  {
    "time": [
      1998.94,
      2003.78
    ],
    "en": [
      "I use DEFAULT-INFORMATION ORIGINATE to make it advertise it to the other routers. So,"
    ],
    "ru": [
      "Я использую DEFAULT-INFORMATION ORIGINATE, чтобы он объявлял его другим маршрутизаторам. Так,"
    ]
  },
  {
    "time": [
      2003.78,
      2011.91
    ],
    "en": [
      "let’s talk about LSAs. As you already know, the OSPF LSDB is made up of LSAs. All routers"
    ],
    "ru": [
      "поговорим о LSA. Как вы уже знаете, LSDB OSPF состоит из LSA. Все роутеры"
    ]
  },
  {
    "time": [
      2011.91,
      2018.68
    ],
    "en": [
      "in the same OSPF area share the same LSDB. There are 11 types of LSA, but there are only"
    ],
    "ru": [
      "в той же области OSPF используют один и тот же LSDB. Существует 11 типов LSA, но есть только"
    ]
  },
  {
    "time": [
      2018.68,
      2026.07
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
      2018.68,
      2026.07
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
      2026.07,
      2034.13
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
      2026.07,
      2034.13
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
      2034.13,
      2040.18
    ],
    "en": [
      "type. First up is type 1, the router LSA. Every router running OSPF generates this type of"
    ],
    "ru": [
      "тип. Первым идет тип 1, LSA маршрутизатора. Каждый маршрутизатор, работающий под управлением OSPF, генерирует этот тип"
    ]
  },
  {
    "time": [
      2040.18,
      2047.11
    ],
    "en": [
      "LSA. The router LSA identifies the router using its router ID. The router LSA also lists"
    ],
    "ru": [
      "LSA. LSA маршрутизатора идентифицирует маршрутизатор по его идентификатору. LSA маршрутизатора также перечисляет"
    ]
  },
  {
    "time": [
      2047.11,
      2054.399
    ],
    "en": [
      "networks attached to the router’s OSPF-activated interfaces. Next up, the type 2 aka network"
    ],
    "ru": [
      "сети, подключенные к интерфейсам маршрутизатора, активированным OSPF. Далее, тип 2, он же сеть"
    ]
  },
  {
    "time": [
      2054.399,
      2062.01
    ],
    "en": [
      "LSA. It is generated by the DR of each ‘multi-access’ network. An example of a multi-access network"
    ],
    "ru": [
      "LSA. Он генерируется DR каждой сети «множественного доступа». Пример сети с множественным доступом"
    ]
  },
  {
    "time": [
      2062.01,
      2068.23
    ],
    "en": [
      "is an Ethernet network using the broadcast network type. This type of LSA lists the routers"
    ],
    "ru": [
      "представляет собой сеть Ethernet, использующую тип широковещательной сети. В этом типе LSA перечислены маршрутизаторы."
    ]
  },
  {
    "time": [
      2068.23,
      2075.57
    ],
    "en": [
      "which are attached to the multi-access network. Last type for today, the type 5 aka AS-external"
    ],
    "ru": [
      "которые подключены к сети с множественным доступом. Последний тип на сегодня, тип 5 он же AS-external"
    ]
  },
  {
    "time": [
      2075.57,
      2082.429
    ],
    "en": [
      "LSA. This type of LSA is generated by ASBRs to describe routes to destinations outside"
    ],
    "ru": [
      "LSA. Этот тип LSA генерируется ASBR для описания маршрутов к пунктам назначения за пределами"
    ]
  },
  {
    "time": [
      2082.429,
      2085.69
    ],
    "en": [
      "of the autonomous system, the OSPF domain."
    ],
    "ru": [
      "автономной системы, домен OSPF."
    ]
  },
  {
    "time": [
      2085.69,
      2093.53
    ],
    "en": [
      "Here’s a look at the LSDB on R1, using the command SHOW IP OSPF DATABASE. Note that it"
    ],
    "ru": [
      "Посмотрите на LSDB на маршрутизаторе R1 с помощью команды SHOW IP OSPF DATABASE. Обратите внимание, что это"
    ]
  },
  {
    "time": [
      2093.53,
      2097.57
    ],
    "en": [
      "doesn’t actually matter which router I use the command on, the output will be the same"
    ],
    "ru": [
      "на самом деле не имеет значения, на каком маршрутизаторе я использую команду, вывод будет таким же"
    ]
  },
  {
    "time": [
      2097.57,
      2103.36
    ],
    "en": [
      "because all routers in the area have the same LSDB. Notice that each router has generated"
    ],
    "ru": [
      "потому что все маршрутизаторы в этой области имеют одинаковый LSDB. Обратите внимание, что каждый маршрутизатор сгенерировал"
    ]
  },
  {
    "time": [
      2103.36,
      2110.619
    ],
    "en": [
      "a Type 1 Router LSA identifying itself. This view doesn’t show the contents of each LSA,"
    ],
    "ru": [
      "Маршрутизатор LSA типа 1 идентифицирует себя. В этом представлении не отображается содержание каждого LSA,"
    ]
  },
  {
    "time": [
      2110.619,
      2115.25
    ],
    "en": [
      "but each of these router LSAs contains information about the networks each router is connected"
    ],
    "ru": [
      "но каждый из этих LSA маршрутизатора содержит информацию о сетях, к которым подключен каждый маршрутизатор."
    ]
  },
  {
    "time": [
      2115.25,
      2123.87
    ],
    "en": [
      "to. Notice that there is only one Type 2 Network LSA, generated by R4 for the 192.168.2.0/29"
    ],
    "ru": [
      "к. Обратите внимание, что существует только один сетевой LSA типа 2, сгенерированный R4 для 192.168.2.0/29."
    ]
  },
  {
    "time": [
      2123.87,
      2131.69
    ],
    "en": [
      "subnet. Even though R1, R3, and R5 are DRs on their G1/0 interfaces, no other routers"
    ],
    "ru": [
      "подсеть. Несмотря на то, что R1, R3 и R5 являются DR на своих интерфейсах G1 / 0, никакие другие маршрутизаторы"
    ]
  },
  {
    "time": [
      2131.69,
      2137.61
    ],
    "en": [
      "are connected to the interfaces so no Type 2 LSA is generated. Finally, notice that a"
    ],
    "ru": [
      "подключены к интерфейсам, поэтому LSA типа 2 не генерируется. Наконец, обратите внимание, что"
    ]
  },
  {
    "time": [
      2137.61,
      2144.05
    ],
    "en": [
      "Type 5 AS-External LSA is generated by R4. It is sharing its default route to the Internet"
    ],
    "ru": [
      "AS-External LSA типа 5 генерируется маршрутизатором R4. Он передает свой маршрут по умолчанию в Интернет."
    ]
  },
  {
    "time": [
      2144.05,
      2149.77
    ],
    "en": [
      "with the other routers. Okay, that’s all about LSAs. Once again, they aren’t explicitly"
    ],
    "ru": [
      "с другими маршрутизаторами. Хорошо, это все о LSA. Опять же, они явно не"
    ]
  },
  {
    "time": [
      2149.77,
      2154.12
    ],
    "en": [
      "stated in the exam topics list, but I just wanted to give you a basic introduction to"
    ],
    "ru": [
      "указано в списке тем экзамена, но я просто хотел дать вам базовое введение в"
    ]
  },
  {
    "time": [
      2154.12,
      2157.71
    ],
    "en": [
      "some of the basic LSA types you will encounter."
    ],
    "ru": [
      "некоторые из основных типов LSA, с которыми вы столкнетесь."
    ]
  },
  {
    "time": [
      2157.71,
      2164.23
    ],
    "en": [
      "I told you we were going to cover OSPF in much more detail than RIP and EIGRP, and over"
    ],
    "ru": [
      "Я сказал вам, что мы собираемся охватить OSPF более подробно, чем RIP и EIGRP, и т. Д."
    ]
  },
  {
    "time": [
      2164.23,
      2170.24
    ],
    "en": [
      "these past three days we definitely did that. OSPF is a major topic on the exam, so make"
    ],
    "ru": [
      "за последние три дня мы определенно сделали это. OSPF - основная тема экзамена, поэтому сделайте"
    ]
  },
  {
    "time": [
      2170.24,
      2174.59
    ],
    "en": [
      "sure you understand the material in these videos. Watch them multiple times if you have"
    ],
    "ru": [
      "убедитесь, что вы понимаете материал этих видео. Посмотрите их несколько раз, если у вас есть"
    ]
  },
  {
    "time": [
      2174.59,
      2179.24
    ],
    "en": [
      "to, and feel free to ask questions in the comment section. Now let’s review what we"
    ],
    "ru": [
      "к, и не стесняйтесь задавать вопросы в разделе комментариев. Теперь давайте рассмотрим, что мы"
    ]
  },
  {
    "time": [
      2179.24,
      2185.43
    ],
    "en": [
      "covered in today’s video and then move on to the quiz. First we covered the OSPF network"
    ],
    "ru": [
      "рассматриваются в сегодняшнем видео, а затем переходите к викторине. Сначала мы рассмотрели сеть OSPF"
    ]
  },
  {
    "time": [
      2185.43,
      2192.18
    ],
    "en": [
      "types, focusing on the two you need to know for the CCNA, Broadcast and Point-to-Point."
    ],
    "ru": [
      "типов, сосредоточив внимание на двух, которые вам нужно знать для CCNA, Broadcast и Point-to-Point."
    ]
  },
  {
    "time": [
      2192.18,
      2196.11
    ],
    "en": [
      "Because Ethernet connections are dominant in modern networks, most of the time you’ll"
    ],
    "ru": [
      "Поскольку в современных сетях преобладают соединения Ethernet, в большинстве случаев вы будете"
    ]
  },
  {
    "time": [
      2196.11,
      2201.31
    ],
    "en": [
      "be using the Broadcast network type. But also be familiar with the Point-to-Point type,"
    ],
    "ru": [
      "использовать тип сети вещания. Но также будьте знакомы с типом Point-to-Point,"
    ]
  },
  {
    "time": [
      2201.31,
      2206.47
    ],
    "en": [
      "and the basics of serial interfaces that I introduced in this video. Then I introduced"
    ],
    "ru": [
      "и основы последовательных интерфейсов, которые я представил в этом видео. Затем я представил"
    ]
  },
  {
    "time": [
      2206.47,
      2212.66
    ],
    "en": [
      "some requirements for OSPF neighbors and adjacencies. You don’t have to memorize the list of them,"
    ],
    "ru": [
      "некоторые требования для соседей и смежности OSPF. Не нужно запоминать их список,"
    ]
  },
  {
    "time": [
      2212.66,
      2218.23
    ],
    "en": [
      "but make sure you can identify them all and fix any problems. Finally I briefly introduced"
    ],
    "ru": [
      "но убедитесь, что вы можете идентифицировать их все и исправить любые проблемы. Наконец я кратко представил"
    ]
  },
  {
    "time": [
      2218.23,
      2225.97
    ],
    "en": [
      "the three most basic OSPF LSA types. Type 1, the Router LSA. Type 2, the Network LSA."
    ],
    "ru": [
      "три самых основных типа LSA OSPF. Тип 1, LSA маршрутизатора. Тип 2, сетевая LSA."
    ]
  },
  {
    "time": [
      2225.97,
      2231.76
    ],
    "en": [
      "And Type 5, the AS-External LSA. Make sure to watch until the end of the quiz for a bonus"
    ],
    "ru": [
      "И тип 5, AS-External LSA. Обязательно досмотрите до конца викторины, чтобы получить бонус"
    ]
  },
  {
    "time": [
      2231.76,
      2238.82
    ],
    "en": [
      "question from Boson ExSim for CCNA, my favorite set of practice exams for the CCNA. Now here’s"
    ],
    "ru": [
      "вопрос от Boson ExSim для CCNA, моего любимого набора практических экзаменов для CCNA. Теперь вот"
    ]
  },
  {
    "time": [
      2238.82,
      2242.11
    ],
    "en": [
      "question 1 of the quiz."
    ],
    "ru": [
      "вопрос 1 викторины."
    ]
  },
  {
    "time": [
      2242.11,
      2246.99
    ],
    "en": [
      "Which option states a characteristic of the OSPF point-to-point network type that is different"
    ],
    "ru": [
      "В каком варианте указывается характеристика типа сети точка-точка OSPF, которая отличается"
    ]
  },
  {
    "time": [
      2246.99,
      2255.74
    ],
    "en": [
      "than the OSPF broadcast network type? A, DR and BDR elections are held. B, DR and BDR"
    ],
    "ru": [
      "чем тип широковещательной сети OSPF? Выборы A, DR и BDR проводятся. B, DR и BDR"
    ]
  },
  {
    "time": [
      2255.74,
      2262.93
    ],
    "en": [
      "elections are not held. C, Neighbors are dynamically discovered. Or D, neighbors are not dynamically"
    ],
    "ru": [
      "выборы не проводятся. C, Соседи обнаруживаются динамически. Или D, соседи не динамически"
    ]
  },
  {
    "time": [
      2262.93,
      2270.28
    ],
    "en": [
      "discovered. Pause the video to think about your answer."
    ],
    "ru": [
      "обнаруженный. Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      2270.28,
      2276.39
    ],
    "en": [
      "The answer is B. In the OSPF point-to-point network type, DR and BDR elections are not"
    ],
    "ru": [
      "Ответ: Б. В типе сети OSPF точка-точка выборы DR и BDR не выполняются."
    ]
  },
  {
    "time": [
      2276.39,
      2281.97
    ],
    "en": [
      "held. C, neighbors are dynamically discovered, is a correct statement about the point-to-point"
    ],
    "ru": [
      "держал. C, соседи обнаруживаются динамически, это правильное утверждение о двухточечном соединении."
    ]
  },
  {
    "time": [
      2281.97,
      2286.67
    ],
    "en": [
      "network type, but it is also true about the broadcast network type, so it is incorrect."
    ],
    "ru": [
      "тип сети, но это также верно и для типа широковещательной сети, поэтому это неверно."
    ]
  },
  {
    "time": [
      2286.67,
      2290.67
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
      2290.67,
      2297.36
    ],
    "en": [
      "There is an OSPF broadcast network with 5 connected routers. R1 is the DR on its G0/0"
    ],
    "ru": [
      "Имеется широковещательная сеть OSPF с 5 подключенными маршрутизаторами. R1 - это DR на своем G0 / 0"
    ]
  },
  {
    "time": [
      2297.36,
      2305.2
    ],
    "en": [
      "interface. How many FULL OSPF adjacencies does R1 have on the interface? A, 1 with the"
    ],
    "ru": [
      "интерфейс. Сколько FULL OSPF-смежностей на интерфейсе R1? A, 1 с"
    ]
  },
  {
    "time": [
      2305.2,
      2315.16
    ],
    "en": [
      "BDR. B, 2 with the DR and BDR. C, 4 with all neighbors. D, 5 with all routers connected"
    ],
    "ru": [
      "BDR. Б, 2 с ДР и БДР. Ц, 4 со всеми соседями. D, 5 со всеми подключенными маршрутизаторами"
    ]
  },
  {
    "time": [
      2315.16,
      2323.0
    ],
    "en": [
      "to the segment. Pause the video to think about your answer."
    ],
    "ru": [
      "в сегмент. Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      2323.0,
      2328.09
    ],
    "en": [
      "The answer is C. The DR forms a FULL adjacency with all neighbors in the broadcast network"
    ],
    "ru": [
      "Ответ: C. DR формирует ПОЛНУЮ смежность со всеми соседями в широковещательной сети."
    ]
  },
  {
    "time": [
      2328.09,
      2333.69
    ],
    "en": [
      "segment, so C is correct. It doesn’t form a neighbor relationship at all with itself,"
    ],
    "ru": [
      "сегмент, поэтому C правильный. Он вообще не формирует соседские отношения с самим собой,"
    ]
  },
  {
    "time": [
      2333.69,
      2340.31
    ],
    "en": [
      "so B and D are incorrect. A is incorrect because it identifies only one of R1’s fully adjacent"
    ],
    "ru": [
      "так что B и D неверны. A неверен, потому что он определяет только один из полностью смежных R1"
    ]
  },
  {
    "time": [
      2340.31,
      2346.43
    ],
    "en": [
      "neighbors, not all four. Let’s go to question 3."
    ],
    "ru": [
      "соседи, не все четверо. Перейдем к вопросу 3."
    ]
  },
  {
    "time": [
      2346.43,
      2351.96
    ],
    "en": [
      "Which of the following are requirements for routers to become OSPF neighbors? Select two."
    ],
    "ru": [
      "Какие из перечисленных требований необходимы для того, чтобы маршрутизаторы стали соседями OSPF? Выберите два."
    ]
  },
  {
    "time": [
      2351.96,
      2361.8
    ],
    "en": [
      "A, Hello and Dead timers must match. B, OSPF Process IDs must match. C, OSPF Router IDs"
    ],
    "ru": [
      "Таймеры A, Hello и Dead должны совпадать. B, идентификаторы процессов OSPF должны совпадать. C, идентификаторы маршрутизатора OSPF"
    ]
  },
  {
    "time": [
      2361.8,
      2371.31
    ],
    "en": [
      "must match. D, Interfaces must be in the same area. E, Interfaces must be in different areas."
    ],
    "ru": [
      "должны совпадать. D, интерфейсы должны находиться в одной области. E, интерфейсы должны быть в разных областях."
    ]
  },
  {
    "time": [
      2371.31,
      2382.35
    ],
    "en": [
      "Or F, interfaces must be in different subnets. Pause the video to think about your answers, select two."
    ],
    "ru": [
      "Или F, интерфейсы должны находиться в разных подсетях. Поставьте видео на паузу, чтобы подумать над своими ответами, выберите два."
    ]
  },
  {
    "time": [
      2382.35,
      2388.28
    ],
    "en": [
      "select two. The answers are A and D. For two routers to become OSPF neighbors, the Hello and Dead"
    ],
    "ru": [
      "выберите два. Ответы: A и D. Чтобы два маршрутизатора стали соседями OSPF, Hello и Dead"
    ]
  },
  {
    "time": [
      2388.28,
      2394.63
    ],
    "en": [
      "timers on their interfaces must match. They also must be in the same area. For reference,"
    ],
    "ru": [
      "таймеры на их интерфейсах должны совпадать. Они также должны находиться в одной зоне. Для справки,"
    ]
  },
  {
    "time": [
      2394.63,
      2399.54
    ],
    "en": [
      "here are the requirements for OSPF neighbors as shown earlier in the video. Okay, let’s"
    ],
    "ru": [
      "вот требования к соседям OSPF, как показано ранее в видео. Хорошо давай"
    ]
  },
  {
    "time": [
      2399.54,
      2402.99
    ],
    "en": [
      "go to question 4."
    ],
    "ru": [
      "переходите к вопросу 4."
    ]
  },
  {
    "time": [
      2402.99,
      2408.79
    ],
    "en": [
      "Which of the following OSPF LSA types is generated only by the DR of a multi-access network,"
    ],
    "ru": [
      "Какой из следующих типов LSA OSPF генерируется только DR сети с множественным доступом,"
    ]
  },
  {
    "time": [
      2408.79,
      2419.04
    ],
    "en": [
      "such as the broadcast network type? A, type 1. B, type 2. C, type 3. Or D, type 5. Pause"
    ],
    "ru": [
      "типа широковещательной сети? A, тип 1. B, тип 2. C, тип 3. Или D, тип 5. Пауза"
    ]
  },
  {
    "time": [
      2419.04,
      2425.23
    ],
    "en": [
      "the video to think about your answer."
    ],
    "ru": [
      "видео, чтобы обдумать свой ответ."
    ]
  },
  {
    "time": [
      2425.23,
      2432.5
    ],
    "en": [
      "The answer is B, type 2. Type 2 is the ‘Network’ LSA, and is generated by the DR of each multi-access"
    ],
    "ru": [
      "Ответ - B, тип 2. Тип 2 - это «Network» LSA, который генерируется DR каждого множественного доступа."
    ]
  },
  {
    "time": [
      2432.5,
      2438.71
    ],
    "en": [
      "network. It lists the routers which are attached to the multi-access network. A, Type 1, is"
    ],
    "ru": [
      "сеть. В нем перечислены маршрутизаторы, подключенные к сети с множественным доступом. A, тип 1, является"
    ]
  },
  {
    "time": [
      2438.71,
      2446.731
    ],
    "en": [
      "the Router LSA type. D, Type 5, is the AS-External LSA type. C, Type 3, is one I didn’t mention"
    ],
    "ru": [
      "тип LSA маршрутизатора. D, тип 5, является типом AS-External LSA. C, тип 3, я не упоминал"
    ]
  },
  {
    "time": [
      2446.731,
      2453.33
    ],
    "en": [
      "in this video. It’s called the ‘Summary’ LSA type. Okay, let’s move on to question 5."
    ],
    "ru": [
      "в этом видео. Он называется типом LSA «Сводка». Хорошо, перейдем к вопросу 5."
    ]
  },
  {
    "time": [
      2453.33,
      2461.5
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
      2453.33,
      2461.5
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
      2461.5,
      2468.66
    ],
    "en": [
      "segment and R3 is the BDR. All routers on the segment have the default OSPF priority."
    ],
    "ru": [
      "сегмент, а R3 - это BDR. Все маршрутизаторы в сегменте имеют приоритет OSPF по умолчанию."
    ]
  },
  {
    "time": [
      2468.66,
      2475.5
    ],
    "en": [
      "You issue the ip ospf priority 100 command on R1’s G0/0 to make it the DR. Which of"
    ],
    "ru": [
      "Вы вводите команду ip ospf priority 100 на G0 / 0 маршрутизатора R1, чтобы сделать его DR. Какой из"
    ]
  },
  {
    "time": [
      2475.5,
      2480.0
    ],
    "en": [
      "the following statements are true about the network after you issue the command? Select"
    ],
    "ru": [
      "следующие утверждения о сети верны после того, как вы введете команду? Выбирать"
    ]
  },
  {
    "time": [
      2480.0,
      2490.39
    ],
    "en": [
      "two. A, R1 is the DR. B, R1 is the BDR. C, R1 is still a DROther because its priority"
    ],
    "ru": [
      "два. A, R1 - это ДР. B, R1 - это BDR. C, R1 по-прежнему DROther, потому что его приоритет"
    ]
  },
  {
    "time": [
      2490.39,
      2497.84
    ],
    "en": [
      "isn’t high enough. D, if you issue the clear ip ospf process command on R4, R1 will become"
    ],
    "ru": [
      "недостаточно высоко. D, если вы выполните команду clear ip ospf process на R4, R1 станет"
    ]
  },
  {
    "time": [
      2497.84,
      2505.48
    ],
    "en": [
      "the BDR. E, if you issue the clear ip ospf process command on R4, R1 will become the"
    ],
    "ru": [
      "BDR. E, если вы выполните команду clear ip ospf process на R4, R1 станет"
    ]
  },
  {
    "time": [
      2505.48,
      2512.75
    ],
    "en": [
      "DR. And F, the DR and BDR of the network are unchanged. Pause the video to think about"
    ],
    "ru": [
      "DR. И F, DR и BDR сети неизменны. Поставьте видео на паузу, чтобы подумать"
    ]
  },
  {
    "time": [
      2512.75,
      2518.63
    ],
    "en": [
      "your answers, select two."
    ],
    "ru": [
      "свои ответы выберите два."
    ]
  },
  {
    "time": [
      2518.63,
      2524.97
    ],
    "en": [
      "The answers are D and F. The default OSPF priority is 1 on all interfaces, so after"
    ],
    "ru": [
      "Ответы: D и F. Приоритет OSPF по умолчанию равен 1 на всех интерфейсах, поэтому после"
    ]
  },
  {
    "time": [
      2524.97,
      2531.06
    ],
    "en": [
      "entering the command R1’s G0/0 interface has the highest priority, therefore C is incorrect."
    ],
    "ru": [
      "ввод интерфейса G0 / 0 команды R1 имеет наивысший приоритет, поэтому C неверен."
    ]
  },
  {
    "time": [
      2531.06,
      2537.51
    ],
    "en": [
      "It’s still a DROther, but priority isn’t the problem. The DR and BDR will not automatically"
    ],
    "ru": [
      "Это все еще DROther, но проблема не в приоритете. DR и BDR не будут автоматически"
    ]
  },
  {
    "time": [
      2537.51,
      2544.07
    ],
    "en": [
      "give up their positions, so R1 will not become the DR or BDR. Therefore A and B are incorrect,"
    ],
    "ru": [
      "сдадут свои позиции, поэтому R1 не станет DR или BDR. Следовательно, A и B неверны,"
    ]
  },
  {
    "time": [
      2544.07,
      2551.17
    ],
    "en": [
      "and F is correct. If you issue the CLEAR IP OSPF PROCESS command on R4, the current BDR,"
    ],
    "ru": [
      "и F правильно. Если вы выполните команду CLEAR IP OSPF PROCESS на R4, текущий BDR,"
    ]
  },
  {
    "time": [
      2551.17,
      2557.87
    ],
    "en": [
      "R3, will automatically become the DR, not R1. Therefore E is incorrect. However, if"
    ],
    "ru": [
      "R3 автоматически станет DR, а не R1. Следовательно, E неверно. Однако если"
    ]
  },
  {
    "time": [
      2557.87,
      2564.02
    ],
    "en": [
      "you issue that command, when R3 becomes the new DR, an election is held for the new BDR."
    ],
    "ru": [
      "вы вводите эту команду, когда R3 становится новым DR, проводятся выборы для нового BDR."
    ]
  },
  {
    "time": [
      2564.02,
      2569.59
    ],
    "en": [
      "Since R1 has the highest priority, it will become the new BDR for the segment. So D is"
    ],
    "ru": [
      "Поскольку R1 имеет наивысший приоритет, он станет новым BDR для сегмента. Итак, D"
    ]
  },
  {
    "time": [
      2569.59,
      2577.02
    ],
    "en": [
      "correct. That’s all for the quiz. Let’s move on to a bonus question in Boson ExSim for CCNA."
    ],
    "ru": [
      "верный. Это все для викторины. Перейдем к бонусному вопросу в Boson ExSim для CCNA."
    ]
  },
  {
    "time": [
      2577.02,
      2585.09
    ],
    "en": [
      "for CCNA. Okay, here's today's Boson ExSim practice question. You issue the SHOW IP OSPF INTERFACE"
    ],
    "ru": [
      "для CCNA. Хорошо, вот сегодняшний практический вопрос по Boson ExSim. Вы запускаете SHOW IP OSPF INTERFACE"
    ]
  },
  {
    "time": [
      2585.09,
      2590.67
    ],
    "en": [
      "FASTETHERNET 0/1 command on Router1 and receive the following output. Here is the output of"
    ],
    "ru": [
      "FASTETHERNET 0/1 на маршрутизаторе Router1 и получите следующий вывод. Вот результат"
    ]
  },
  {
    "time": [
      2590.67,
      2595.691
    ],
    "en": [
      "the command, and here's the question. Which of the following statements is correct? Select"
    ],
    "ru": [
      "команда, и вот вопрос. Какое из следующих утверждений верно? Выбирать"
    ]
  },
  {
    "time": [
      2595.691,
      2607.38
    ],
    "en": [
      "the best answer. Okay, pause the video now. Read each of the statements, and select the best answer."
    ],
    "ru": [
      "лучший ответ. Хорошо, поставь видео на паузу. Прочтите каждое из утверждений и выберите лучший ответ."
    ]
  },
  {
    "time": [
      2607.38,
      2613.99
    ],
    "en": [
      "best answer. Okay, let's check. So, I believe the correct answer is D. First let me explain the incorrect"
    ],
    "ru": [
      "лучший ответ. Хорошо, давай проверим. Итак, я считаю, что правильный ответ - D. Сначала позвольте мне объяснить неправильный"
    ]
  },
  {
    "time": [
      2613.99,
      2620.28
    ],
    "en": [
      "options and then I'll go on to D. First up, A says Router1 is the DR for the segment."
    ],
    "ru": [
      "варианты, а затем я перейду к D. Во-первых, A говорит, что Router1 является DR для сегмента."
    ]
  },
  {
    "time": [
      2620.28,
      2629.23
    ],
    "en": [
      "Well it says right here, Router1's state is DROTHER. So that's incorrect. B, Router1 is"
    ],
    "ru": [
      "Здесь сказано, что состояние Router1 - DROTHER. Так что это неправильно. B, Router1 - это"
    ]
  },
  {
    "time": [
      2629.23,
      2635.78
    ],
    "en": [
      "connected to a point-to-multipoint network. It says here that the network type is BROADCAST,"
    ],
    "ru": [
      "подключен к многоточечной сети. Здесь говорится, что тип сети - ТРАНСЛЯЦИЯ,"
    ]
  },
  {
    "time": [
      2635.78,
      2642.96
    ],
    "en": [
      "so that's incorrect. C, Router1 is configured with incorrect timer settings. You can see"
    ],
    "ru": [
      "так что это неправильно. C, Router1 настроен с неверными настройками таймера. Ты можешь видеть"
    ]
  },
  {
    "time": [
      2642.96,
      2649.39
    ],
    "en": [
      "the timers here, they are the defaults. Also, Router1 has five OSPF neighbors, so I don't"
    ],
    "ru": [
      "здесь таймеры - значения по умолчанию. Кроме того, у Router1 пять соседей OSPF, поэтому я не"
    ]
  },
  {
    "time": [
      2649.39,
      2655.26
    ],
    "en": [
      "think there is any problem with Router1's timer settings. E, the BDR has a priority"
    ],
    "ru": [
      "думаю, что есть какие-то проблемы с настройками таймера Router1. E, BDR имеет приоритет"
    ]
  },
  {
    "time": [
      2655.26,
      2662.98
    ],
    "en": [
      "higher than 50. You can see here that Router1's priority is 50 and it's a DROTHER. But the"
    ],
    "ru": [
      "выше 50. Здесь вы можете видеть, что приоритет Router1 равен 50, и это DROTHER. Но"
    ]
  },
  {
    "time": [
      2662.98,
      2668.54
    ],
    "en": [
      "BDR doesn't necessarily have a priority higher than 50. It might have the same priority as"
    ],
    "ru": [
      "BDR не обязательно имеет приоритет выше 50. Он может иметь тот же приоритет, что и"
    ]
  },
  {
    "time": [
      2668.54,
      2679.25
    ],
    "en": [
      "Router1, 50, but a higher router ID. So E is incorrect. Now, why do I think D is correct?"
    ],
    "ru": [
      "Router1, 50, но с более высоким идентификатором маршрутизатора. Итак, E неверен. Итак, почему я считаю D правильным?"
    ]
  },
  {
    "time": [
      2679.25,
      2685.76
    ],
    "en": [
      "The key to this question is knowing the difference between an OSPF neighbor adjacency. Sometimes"
    ],
    "ru": [
      "Ключом к этому вопросу является знание разницы между смежностью соседей OSPF. Иногда"
    ]
  },
  {
    "time": [
      2685.76,
      2690.22
    ],
    "en": [
      "those words are used to mean the same thing, but technically speaking in OSPF they are"
    ],
    "ru": [
      "эти слова означают одно и то же, но технически говоря в OSPF они"
    ]
  },
  {
    "time": [
      2690.22,
      2698.92
    ],
    "en": [
      "different. Look here in the output. Neighbor count is 5, adjacent neighbor count is 2."
    ],
    "ru": [
      "другой. Посмотрите здесь в выводе. Число соседей - 5, число соседних соседей - 2."
    ]
  },
  {
    "time": [
      2698.92,
      2705.92
    ],
    "en": [
      "So, although Router1 has 5 OSPF neighbors, only 2 of those are adjacencies, full adjacencies"
    ],
    "ru": [
      "Итак, хотя Router1 имеет 5 соседей OSPF, только 2 из них являются смежностями, полными смежностями."
    ]
  },
  {
    "time": [
      2705.92,
      2713.66
    ],
    "en": [
      "in the OSPF FULL neighbor state. This number 5 includes not only the FULL adjacencies with"
    ],
    "ru": [
      "в состоянии соседа OSPF FULL. В число 5 входят не только ПОЛНЫЕ примыкания с"
    ]
  },
  {
    "time": [
      2713.66,
      2721.59
    ],
    "en": [
      "the DR and BDR, but also Router1's DROTHER neighbors. Remember, a DROTHER will only reach"
    ],
    "ru": [
      "DR и BDR, а также соседей DROTHER Router1. Помните, ДРОТЕР достигнет только"
    ]
  },
  {
    "time": [
      2721.59,
      2728.79
    ],
    "en": [
      "the 2-way state with another DROTHER. So, to summarize Router1 is a DROTHER in this"
    ],
    "ru": [
      "двухстороннее состояние с другим DROTHER. Итак, подведем итог, Router1 - это DROTHER в этом"
    ]
  },
  {
    "time": [
      2728.79,
      2735.369
    ],
    "en": [
      "OSPF broadcast network. And DROTHERs can only establish adjacencies with the DR and BDR,"
    ],
    "ru": [
      "Широковещательная сеть OSPF. А DROTHER могут устанавливать смежности только с DR и BDR,"
    ]
  },
  {
    "time": [
      2735.369,
      2740.97
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
      2735.369,
      2740.97
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
      2740.97,
      2749.33
    ],
    "en": [
      "between a neighbor and a full OSPF adjacency. So, I'll click on show answer, and the answer"
    ],
    "ru": [
      "обратите внимание, что он включает ссылку на некоторую документацию Cisco о SHOW IP OSPF"
    ]
  },
  {
    "time": [
      2749.33,
      2756.6
    ],
    "en": [
      "is correct. Okay, pause the video now if you want to read Boson's explanation here. Also"
    ],
    "ru": [
      "Команда ИНТЕРФЕЙС. И эта документация Cisco, как я уже сказал, доступна бесплатно в Интернете."
    ]
  },
  {
    "time": [
      2756.6,
      2761.92
    ],
    "en": [
      "notice that it includes a reference to some Cisco documentation about the SHOW IP OSPF"
    ],
    "ru": [
      "и это еще один отличный учебный ресурс. Итак, если вы хотите получить копию Boson ExSim,"
    ]
  },
  {
    "time": [
      2761.92,
      2767.83
    ],
    "en": [
      "INTERFACE command. And this Cisco documentation, as I have said before, is available free online"
    ],
    "ru": [
      "перейдите по ссылке в описании видео. Как я уже сказал, это практика"
    ]
  },
  {
    "time": [
      2767.83,
      2774.17
    ],
    "en": [
      "and it's another great study resource. Okay, so if you want to get a copy of Boson ExSim,"
    ],
    "ru": [
      "экзамены, которые я использовал, когда учился как на CCNA, так и на CCNP, и я их очень рекомендую. Так"
    ]
  },
  {
    "time": [
      2774.17,
      2778.74
    ],
    "en": [
      "please follow the link in the video description. As I've already said, these are the practice"
    ],
    "ru": [
      "еще раз, перейдите по этой ссылке в описании видео."
    ]
  },
  {
    "time": [
      2778.74,
      2784.481
    ],
    "en": [
      "exams I used when studying for both my CCNA and CCNP, and I highly recommend them. So"
    ],
    "ru": [
      "К этому видео есть дополнительные материалы. Есть колода карточек для использования с"
    ]
  },
  {
    "time": [
      2784.481,
      2788.99
    ],
    "en": [
      "once again, follow that link in the video description."
    ],
    "ru": [
      "программное обеспечение «Анки». Там же будет практическая лаборатория по отслеживанию пакетов, чтобы вы могли получить"
    ]
  },
  {
    "time": [
      2788.99,
      2793.97
    ],
    "en": [
      "There are supplementary materials for this video. There is a flashcard deck to use with"
    ],
    "ru": [
      "немного практической практики. Об этом будет в следующем видео. Подпишитесь на мой список рассылки через"
    ]
  },
  {
    "time": [
      2793.97,
      2798.42
    ],
    "en": [
      "the software ‘Anki’. There will also be a packet tracer practice lab so you can get"
    ],
    "ru": [
      "ссылку в описании, и я пришлю вам все карточки и трассировщик пакетов"
    ]
  },
  {
    "time": [
      2798.42,
      2803.69
    ],
    "en": [
      "some hands-on practice. That will be in the next video. Sign up for my mailing list via"
    ],
    "ru": [
      "lab файлы для курса."
    ]
  },
  {
    "time": [
      2803.69,
      2807.35
    ],
    "en": [
      "the link in the description, and I’ll send you all of the flashcards and packet tracer"
    ],
    "ru": [
      "Прежде чем закончить сегодняшнее видео, я хочу поблагодарить участников моего канала уровня JCNP. В последнее время"
    ]
  },
  {
    "time": [
      2807.35,
      2810.7
    ],
    "en": [
      "lab files for the course."
    ],
    "ru": [
      "Я заметил рост числа участников канала и очень благодарен"
    ]
  },
  {
    "time": [
      2810.7,
      2815.791
    ],
    "en": [
      "Before finishing today’s video I want to thank my JCNP-level channel members. Recently"
    ],
    "ru": [
      "все вы, как члены уровня JCNA, так и JCNP. Раньше я зачитывал имена всех"
    ]
  },
  {
    "time": [
      2815.791,
      2819.29
    ],
    "en": [
      "I’ve noticed an increase in the number of channel members, and I’m so thankful to"
    ],
    "ru": [
      "Члены уровня JCNP один за другим, но список становится все длиннее, поэтому я просто оставлю"
    ]
  },
  {
    "time": [
      2819.29,
      2825.8
    ],
    "en": [
      "all of you, both JCNA and JCNP-level members. Previously I read out the names of all the"
    ],
    "ru": [
      "список здесь. Ваша поддержка помогает мне продолжать снимать и выпускать эти видео каждую неделю, поэтому"
    ]
  },
  {
    "time": [
      2825.8,
      2830.3
    ],
    "en": [
      "JCNP-level members one by one, but the list is getting longer so I’ll just leave the"
    ],
    "ru": [
      "Я очень благодарен за вашу поддержку. Это список участников уровня JCNP в то время"
    ]
  },
  {
    "time": [
      2830.3,
      2836.05
    ],
    "en": [
      "list up here. Your support helps me keep making and releasing these videos every week, so"
    ],
    "ru": [
      "записи, кстати, 23 августа 2020 года, если вы подписались недавно и ваше имя не"
    ]
  },
  {
    "time": [
      2836.05,
      2840.869
    ],
    "en": [
      "I’m really grateful for your support. This is the list of JCNP-level members at the time"
    ],
    "ru": [
      "здесь не волнуйтесь, вы будете в будущих видео."
    ]
  },
  {
    "time": [
      2840.869,
      2846.359
    ],
    "en": [
      "of recording by the way, August 23rd 2020, if you signed up recently and your name isn’t"
    ],
    "ru": [
      "Спасибо за просмотр. Подпишитесь на канал, поставьте лайк видео, оставьте комментарий,"
    ]
  },
  {
    "time": [
      2846.359,
      2851.88
    ],
    "en": [
      "on here don’t worry, you’ll be in future videos."
    ],
    "ru": [
      "и поделитесь видео со всеми, кто учится на CCNA. Если хочешь оставить чаевые,"
    ]
  },
  {
    "time": [
      2851.88,
      2856.75
    ],
    "en": [
      "Thank you for watching. Please subscribe to the channel, like the video, leave a comment,"
    ],
    "ru": [
      "проверьте ссылки в описании. Я также проверенный издатель Brave и принимаю BAT,"
    ]
  },
  {
    "time": [
      2856.75,
      2861.64
    ],
    "en": [
      "and share the video with anyone else studying for the CCNA. If you want to leave a tip,"
    ],
    "ru": [
      "или Basic Attention Token, подсказки через браузер Brave. На этом пока все."
    ]
  },
  {
    "time": [
      2861.64,
      2867.44
    ],
    "en": [
      "check the links in the description. I'm also a Brave verified publisher and accept BAT,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2867.44,
      2867.44
    ],
    "en": [
      "or Basic Attention Token, tips via the Brave browser. That's all for now."
    ],
    "ru": [
      ""
    ]
  }
]