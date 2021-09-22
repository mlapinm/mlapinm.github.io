let items = [
  {
    "time": [
      1.78,
      4.35
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
      4.35,
      7.87
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
      7.87,
      12.03
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
      12.03,
      17.68
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
      17.68,
      19.97
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
      19.97,
      24.65
    ],
    "en": [
      "In this video we will cover standard ACLs, access control lists."
    ],
    "ru": [
      "В этом видео мы рассмотрим стандартные ACL, списки управления доступом."
    ]
  },
  {
    "time": [
      24.65,
      30.88
    ],
    "en": [
      "I’ll be splitting up ACLs into two days, this video and the next one, Day 35, which"
    ],
    "ru": [
      "Я разделю ACL на два дня, это видео и следующий, День 35, который"
    ]
  },
  {
    "time": [
      30.88,
      34.04
    ],
    "en": [
      "will cover another kind of ACL."
    ],
    "ru": [
      "будет охватывать другой вид ACL."
    ]
  },
  {
    "time": [
      34.04,
      38.829
    ],
    "en": [
      "ACLs are in the exam topics under section 5, security fundamentals."
    ],
    "ru": [
      "ACL находятся в экзаменационных темах в разделе 5, основы безопасности."
    ]
  },
  {
    "time": [
      38.829,
      47.149
    ],
    "en": [
      "Specifically, topic 5.6, which says you must be able to configure and verify access control lists."
    ],
    "ru": [
      "В частности, тема 5.6, в которой говорится, что вы должны иметь возможность настраивать и проверять списки управления доступом."
    ]
  },
  {
    "time": [
      47.149,
      55.649
    ],
    "en": [
      "lists. It doesn’t specify IPv4 or IPv6, but for the CCNA you just have to learn IPv4 ACLs."
    ],
    "ru": [
      "списки. В нем не указаны IPv4 или IPv6, но для CCNA вам просто нужно изучить списки ACL IPv4."
    ]
  },
  {
    "time": [
      55.649,
      63.899
    ],
    "en": [
      "Perhaps later I’ll make an extra video introducing IPv6 ACLs, but currently it’s not necessary for the CCNA."
    ],
    "ru": [
      "Возможно, позже я сделаю дополнительный видеоролик о списках ACL IPv6, но в настоящее время это не обязательно для CCNA."
    ]
  },
  {
    "time": [
      63.899,
      67.54
    ],
    "en": [
      "for the CCNA. Here’s what we’ll cover in today’s video."
    ],
    "ru": [
      "для CCNA. Вот что мы расскажем в сегодняшнем видео."
    ]
  },
  {
    "time": [
      67.54,
      69.78
    ],
    "en": [
      "First, what are ACLs?"
    ],
    "ru": [
      "Во-первых, что такое ACL?"
    ]
  },
  {
    "time": [
      69.78,
      72.06
    ],
    "en": [
      "I’ll introduce their basic purpose."
    ],
    "ru": [
      "Я расскажу об их основной цели."
    ]
  },
  {
    "time": [
      72.06,
      77.86
    ],
    "en": [
      "I’ll talk about ACL logic, how they are actually processed by the router."
    ],
    "ru": [
      "Я расскажу о логике ACL, о том, как они фактически обрабатываются маршрутизатором."
    ]
  },
  {
    "time": [
      77.86,
      81.98
    ],
    "en": [
      "I’ll introduce the basic types of ACLs on Cisco routers."
    ],
    "ru": [
      "Я расскажу об основных типах ACL на маршрутизаторах Cisco."
    ]
  },
  {
    "time": [
      81.98,
      88.229
    ],
    "en": [
      "After that I’ll show you how to configure two kinds of ACLs, standard numbered ACLs"
    ],
    "ru": [
      "После этого я покажу вам, как настроить два типа ACL, стандартные нумерованные ACL."
    ]
  },
  {
    "time": [
      88.229,
      91.57
    ],
    "en": [
      "and standard named ACLs."
    ],
    "ru": [
      "и стандартные именованные ACL."
    ]
  },
  {
    "time": [
      91.57,
      96.38
    ],
    "en": [
      "As always, watch until the end of the quiz for a bonus question from Boson ExSim for"
    ],
    "ru": [
      "Как всегда, просмотрите до конца викторины бонусный вопрос от Boson ExSim для"
    ]
  },
  {
    "time": [
      96.38,
      102.40899999999999
    ],
    "en": [
      "CCNA, the best practice exams for the CCNA, and in my opinion the best tool to get ready"
    ],
    "ru": [
      "CCNA, лучшие практические экзамены для CCNA и, на мой взгляд, лучший инструмент для подготовки"
    ]
  },
  {
    "time": [
      102.40899999999999,
      105.77000000000001
    ],
    "en": [
      "for the CCNA exam."
    ],
    "ru": [
      "для экзамена CCNA."
    ]
  },
  {
    "time": [
      105.77000000000001,
      108.78
    ],
    "en": [
      "So, what are ACLs?"
    ],
    "ru": [
      "Итак, что такое ACL?"
    ]
  },
  {
    "time": [
      108.78,
      114.21000000000001
    ],
    "en": [
      "ACLs, Access Control Lists, actually have multiple uses."
    ],
    "ru": [
      "Списки контроля доступа, списки контроля доступа, на самом деле имеют множество применений."
    ]
  },
  {
    "time": [
      114.21000000000001,
      119.61
    ],
    "en": [
      "The name ‘access control’ tells us that they control access to the network."
    ],
    "ru": [
      "Название «контроль доступа» говорит нам, что они контролируют доступ к сети."
    ]
  },
  {
    "time": [
      119.61,
      125.59
    ],
    "en": [
      "For example, Host A should be allowed to access Server A, but Host B should not be allowed"
    ],
    "ru": [
      "Например, хосту A должен быть разрешен доступ к серверу A, но хосту B не должен быть разрешен"
    ]
  },
  {
    "time": [
      125.59,
      135.4
    ],
    "en": [
      "to access Server A. In Day 34, this video, and Day 35 we will focus on ACLs from a security perspective."
    ],
    "ru": [
      "для доступа к серверу A. В день 34, это видео и в день 35 мы сосредоточимся на ACL с точки зрения безопасности."
    ]
  },
  {
    "time": [
      135.4,
      141.23
    ],
    "en": [
      "perspective. So, like I just said, controlling which devices have access to which parts of the network."
    ],
    "ru": [
      "перспектива. Итак, как я только что сказал, контроль того, какие устройства имеют доступ к каким частям сети."
    ]
  },
  {
    "time": [
      141.23,
      147.79
    ],
    "en": [
      "However, although that is the main purpose of ACLs, that’s not the only purpose."
    ],
    "ru": [
      "Однако, хотя это основная цель ACL, это не единственная цель."
    ]
  },
  {
    "time": [
      147.79,
      151.5
    ],
    "en": [
      "Later in the course you’ll see some other uses of ACLs."
    ],
    "ru": [
      "Позже в курсе вы увидите другие варианты использования списков ACL."
    ]
  },
  {
    "time": [
      151.5,
      155.4
    ],
    "en": [
      "But for now, we’ll focus on ACLs from a security perspective, controlling who has"
    ],
    "ru": [
      "Но пока мы сосредоточимся на ACL с точки зрения безопасности, контролируя, кто"
    ]
  },
  {
    "time": [
      155.4,
      158.25
    ],
    "en": [
      "access to different parts of the network."
    ],
    "ru": [
      "доступ к разным частям сети."
    ]
  },
  {
    "time": [
      158.25,
      164.92000000000002
    ],
    "en": [
      "So, when using ACLs in this way, ACLs function as a packet filter, instructing the router"
    ],
    "ru": [
      "Таким образом, при использовании списков управления доступом таким образом, списки управления доступом функционируют как фильтр пакетов, инструктируя маршрутизатор"
    ]
  },
  {
    "time": [
      164.92000000000002,
      169.129
    ],
    "en": [
      "to permit or discard specific traffic."
    ],
    "ru": [
      "разрешить или запретить определенный трафик."
    ]
  },
  {
    "time": [
      169.129,
      174.01
    ],
    "en": [
      "As you know, if a router receives a packet and it has a route to the packet’s destination,"
    ],
    "ru": [
      "Как вы знаете, если маршрутизатор получает пакет и у него есть маршрут к месту назначения пакета,"
    ]
  },
  {
    "time": [
      174.01,
      178.799
    ],
    "en": [
      "it will by default forward the packet according to its routing table."
    ],
    "ru": [
      "по умолчанию он пересылает пакет в соответствии со своей таблицей маршрутизации."
    ]
  },
  {
    "time": [
      178.799,
      182.189
    ],
    "en": [
      "However ACLs let us control that."
    ],
    "ru": [
      "Однако ACL позволяют нам это контролировать."
    ]
  },
  {
    "time": [
      182.189,
      187.489
    ],
    "en": [
      "Even if the router has a route to the destination, the packet might be discarded if the ACL tells"
    ],
    "ru": [
      "Даже если у маршрутизатора есть маршрут к месту назначения, пакет может быть отброшен, если ACL сообщает"
    ]
  },
  {
    "time": [
      187.489,
      190.319
    ],
    "en": [
      "the router to do so."
    ],
    "ru": [
      "маршрутизатор для этого."
    ]
  },
  {
    "time": [
      190.319,
      196.07
    ],
    "en": [
      "ACLs can filter traffic based on the source and destination IP addresses, source and destination"
    ],
    "ru": [
      "ACL могут фильтровать трафик на основе IP-адресов источника и назначения, источника и пункта назначения."
    ]
  },
  {
    "time": [
      196.07,
      199.51
    ],
    "en": [
      "Layer 4 port numbers, etc."
    ],
    "ru": [
      "Номера портов уровня 4 и т. Д."
    ]
  },
  {
    "time": [
      199.51,
      204.94
    ],
    "en": [
      "For the CCNA, we’ll just focus on those two, IP addresses and port numbers, but you"
    ],
    "ru": [
      "В CCNA мы сосредоточимся только на этих двух: IP-адресах и номерах портов, но вы"
    ]
  },
  {
    "time": [
      204.94,
      207.51
    ],
    "en": [
      "can get more advanced with ACLs also."
    ],
    "ru": [
      "также можно продвинуться дальше с ACL."
    ]
  },
  {
    "time": [
      207.51,
      212.5
    ],
    "en": [
      "Okay, I think showing you will make things easier to understand than just explaining."
    ],
    "ru": [
      "Хорошо, я думаю, что если показать вам, то будет легче понять, чем просто объяснить."
    ]
  },
  {
    "time": [
      212.5,
      218.849
    ],
    "en": [
      "So, we have two routers, R1 and R2, with a point-to-point connection."
    ],
    "ru": [
      "Итак, у нас есть два маршрутизатора, R1 и R2, с двухточечным соединением."
    ]
  },
  {
    "time": [
      218.849,
      228.89
    ],
    "en": [
      "The 192.168.1.0/24 network is connected to R1, and I’ve shown a couple PCs in the network, PC1 and PC2."
    ],
    "ru": [
      "Сеть 192.168.1.0/24 подключена к маршрутизатору R1, и я показал пару компьютеров в сети, ПК1 и ПК2."
    ]
  },
  {
    "time": [
      228.89,
      233.7
    ],
    "en": [
      "PC1 and PC2. Notice that, instead of including a switch in the diagram and showing the PCs connected"
    ],
    "ru": [
      "ПК1 и ПК2. Обратите внимание, что вместо включения переключателя на диаграмме и отображения подключенных ПК"
    ]
  },
  {
    "time": [
      233.7,
      237.909
    ],
    "en": [
      "to the switch, I represent the network segment like this."
    ],
    "ru": [
      "Для коммутатора я представляю сегмент сети вот так."
    ]
  },
  {
    "time": [
      237.909,
      240.4
    ],
    "en": [
      "This is common in network diagrams."
    ],
    "ru": [
      "Это обычное дело в сетевых схемах."
    ]
  },
  {
    "time": [
      240.4,
      247.67
    ],
    "en": [
      "In reality, all of the PCs in the 192.168.1.0/24 network are connected to a switch, and the"
    ],
    "ru": [
      "На самом деле все ПК в сети 192.168.1.0/24 подключены к коммутатору, а"
    ]
  },
  {
    "time": [
      247.67,
      254.3
    ],
    "en": [
      "switch is connected to R1, but we don’t actually have to include the switch in this diagram."
    ],
    "ru": [
      "Коммутатор подключен к R1, но на самом деле нам не нужно включать переключатель на эту схему."
    ]
  },
  {
    "time": [
      254.3,
      262.31
    ],
    "en": [
      "diagram. The 192.168.2.0/24 network, with PC3 and PC4, is also connected to R1."
    ],
    "ru": [
      "диаграмма. Сеть 192.168.2.0/24 с ПК3 и ПК4 также подключена к R1."
    ]
  },
  {
    "time": [
      262.31,
      271.65
    ],
    "en": [
      "The 10.0.1.0/24 network, with SRV1, is connected to R2, and the 10.0.2.0/24 network, with SRV2,"
    ],
    "ru": [
      "Сеть 10.0.1.0/24 с SRV1 подключена к R2, а сеть 10.0.2.0/24 с SRV2,"
    ]
  },
  {
    "time": [
      271.65,
      273.40999999999997
    ],
    "en": [
      "is also connected to R2."
    ],
    "ru": [
      "также подключен к R2."
    ]
  },
  {
    "time": [
      273.40999999999997,
      277.759
    ],
    "en": [
      "I’ll use this network to demonstrate how ACLs work."
    ],
    "ru": [
      "Я буду использовать эту сеть, чтобы продемонстрировать, как работают ACL."
    ]
  },
  {
    "time": [
      277.759,
      285.59000000000003
    ],
    "en": [
      "So, without looking at the actual configurations yet, let’s build an ACL so you can see how they work."
    ],
    "ru": [
      "Итак, не глядя пока на фактические конфигурации, давайте создадим ACL, чтобы вы могли увидеть, как они работают."
    ]
  },
  {
    "time": [
      285.59000000000003,
      291.639
    ],
    "en": [
      "they work. We shouldn’t just configure ACLs randomly, we must use them to achieve a certain requirement."
    ],
    "ru": [
      "они работают. Мы не должны просто настраивать списки ACL случайным образом, мы должны использовать их для достижения определенного требования."
    ]
  },
  {
    "time": [
      291.639,
      298.919
    ],
    "en": [
      "For example, let’s say the network policy is that hosts in 192.168.1.0/24 should be"
    ],
    "ru": [
      "Например, допустим, сетевая политика такова, что хосты в 192.168.1.0/24 должны быть"
    ]
  },
  {
    "time": [
      298.919,
      302.37
    ],
    "en": [
      "able to access the 10.0.1.0/24 network."
    ],
    "ru": [
      "возможность доступа к сети 10.0.1.0/24."
    ]
  },
  {
    "time": [
      302.37,
      307.03
    ],
    "en": [
      "They should be able to access files on SRV1, for example."
    ],
    "ru": [
      "Например, они должны иметь доступ к файлам на SRV1."
    ]
  },
  {
    "time": [
      307.03,
      315.56
    ],
    "en": [
      "However, hosts in the 192.168.2.0/24 network should not be able to access 10.0.1.0/24."
    ],
    "ru": [
      "Однако хосты в сети 192.168.2.0/24 не должны иметь доступ к 10.0.1.0/24."
    ]
  },
  {
    "time": [
      315.56,
      323.09
    ],
    "en": [
      "PC3 and PC4, for example, should not be able to access files on SRV1."
    ],
    "ru": [
      "Например, ПК3 и ПК4 не должны иметь доступ к файлам на SRV1."
    ]
  },
  {
    "time": [
      323.09,
      326.75
    ],
    "en": [
      "How can we use ACLs to achieve this?"
    ],
    "ru": [
      "Как мы можем использовать ACL для этого?"
    ]
  },
  {
    "time": [
      326.75,
      332.18
    ],
    "en": [
      "First up, ACLs are configured globally on the router, in global config mode."
    ],
    "ru": [
      "Во-первых, ACL настраиваются глобально на маршрутизаторе в режиме глобальной конфигурации."
    ]
  },
  {
    "time": [
      332.18,
      338.36
    ],
    "en": [
      "ACLs are made up of an ordered sequence of ACEs, access control entries."
    ],
    "ru": [
      "ACL состоят из упорядоченной последовательности ACE, записей управления доступом."
    ]
  },
  {
    "time": [
      338.36,
      344.87
    ],
    "en": [
      "For example, to fulfill our requirement, we could configure ACL 1 like this on R1 or R2."
    ],
    "ru": [
      "Например, чтобы выполнить наше требование, мы могли бы настроить ACL 1 таким образом на R1 или R2."
    ]
  },
  {
    "time": [
      344.87,
      354.44
    ],
    "en": [
      "ACE 1 says if source IP equals 192.168.1.0/24, then permit the packet, let the router forward it."
    ],
    "ru": [
      "ACE 1 сообщает, что если исходный IP-адрес равен 192.168.1.0/24, тогда разрешите пакет, пусть маршрутизатор пересылает его."
    ]
  },
  {
    "time": [
      354.44,
      362.009
    ],
    "en": [
      "it. ACE 2 says if source IP equals 192.168.2.0/24, deny the traffic."
    ],
    "ru": [
      "Это. ACE 2 говорит, что если исходный IP равен 192.168.2.0/24, запретить трафик."
    ]
  },
  {
    "time": [
      362.009,
      366.8
    ],
    "en": [
      "ACE 3 says that all other traffic should be permitted."
    ],
    "ru": [
      "ACE 3 говорит, что весь другой трафик должен быть разрешен."
    ]
  },
  {
    "time": [
      366.8,
      373.36
    ],
    "en": [
      "The order of these entries is very important, but I’ll talk more about that later."
    ],
    "ru": [
      "Порядок этих записей очень важен, но я расскажу об этом позже."
    ]
  },
  {
    "time": [
      373.36,
      378.819
    ],
    "en": [
      "Configuring an ACL in global config mode will not make the ACL take effect."
    ],
    "ru": [
      "Настройка ACL в режиме глобальной конфигурации не приведет к тому, что ACL вступит в силу."
    ]
  },
  {
    "time": [
      378.819,
      383.979
    ],
    "en": [
      "After being created, the ACL must be applied to an interface."
    ],
    "ru": [
      "После создания ACL необходимо применить к интерфейсу."
    ]
  },
  {
    "time": [
      383.979,
      386.88
    ],
    "en": [
      "ACLs are applied either inbound or outbound."
    ],
    "ru": [
      "ACL применяются либо для входящих, либо для исходящих."
    ]
  },
  {
    "time": [
      386.88,
      388.95
    ],
    "en": [
      "Let’s see how that works."
    ],
    "ru": [
      "Посмотрим, как это работает."
    ]
  },
  {
    "time": [
      388.95,
      391.75
    ],
    "en": [
      "Here’s that same ACL as before."
    ],
    "ru": [
      "Вот тот же ACL, что и раньше."
    ]
  },
  {
    "time": [
      391.75,
      394.93
    ],
    "en": [
      "Let’s say we configured it on R1."
    ],
    "ru": [
      "Допустим, мы настроили его на R1."
    ]
  },
  {
    "time": [
      394.93,
      398.51
    ],
    "en": [
      "So it has been created, but it hasn’t been applied yet."
    ],
    "ru": [
      "Итак, он создан, но еще не применен."
    ]
  },
  {
    "time": [
      398.51,
      405.669
    ],
    "en": [
      "Let’s walk through some examples of applying ACL 1 to different interfaces in different directions."
    ],
    "ru": [
      "Давайте рассмотрим несколько примеров применения ACL 1 к разным интерфейсам в разных направлениях."
    ]
  },
  {
    "time": [
      405.669,
      408.18
    ],
    "en": [
      "directions. Once again, here are the requirements."
    ],
    "ru": [
      "направления. Еще раз, вот требования."
    ]
  },
  {
    "time": [
      408.18,
      413.55
    ],
    "en": [
      "Depending on which interface we apply the ACL to, and which direction we apply it in,"
    ],
    "ru": [
      "В зависимости от того, к какому интерфейсу мы применяем ACL и в каком направлении мы его применяем,"
    ]
  },
  {
    "time": [
      413.55,
      418.009
    ],
    "en": [
      "we will either succeed in meeting the requirements or fail."
    ],
    "ru": [
      "мы либо добьемся успеха, либо проиграем."
    ]
  },
  {
    "time": [
      418.009,
      422.74
    ],
    "en": [
      "For example, what if we applied it outbound on G0/2."
    ],
    "ru": [
      "Например, что, если бы мы применили его исходящий на G0 / 2."
    ]
  },
  {
    "time": [
      422.74,
      426.69
    ],
    "en": [
      "That means it will only take effect on traffic exiting G0/2."
    ],
    "ru": [
      "Это означает, что он будет действовать только для трафика, выходящего из G0 / 2."
    ]
  },
  {
    "time": [
      426.69,
      429.77
    ],
    "en": [
      "Does that fulfill the requirements?"
    ],
    "ru": [
      "Соответствует ли это требованиям?"
    ]
  },
  {
    "time": [
      429.77,
      434.47
    ],
    "en": [
      "The answer is no, it doesn’t fulfill the requirement. Why not?"
    ],
    "ru": [
      "Ответ - нет, это не соответствует требованию. Почему нет?"
    ]
  },
  {
    "time": [
      434.47,
      440.479
    ],
    "en": [
      "Why not? Because R1 will only use the ACL to filter traffic exiting G0/2, not entering it."
    ],
    "ru": [
      "Почему нет? Поскольку R1 будет использовать ACL только для фильтрации трафика, выходящего из G0 / 2, но не входящего в него."
    ]
  },
  {
    "time": [
      440.479,
      447.86
    ],
    "en": [
      "If PC3 tries to ping SRV1, when the ping reaches R1 it won’t even check the ACL, because"
    ],
    "ru": [
      "Если ПК3 попытается выполнить эхо-запрос SRV1, когда эхо-запрос достигнет R1, он даже не проверит ACL, потому что"
    ]
  },
  {
    "time": [
      447.86,
      451.49
    ],
    "en": [
      "the traffic is entering G0/2, not exiting it."
    ],
    "ru": [
      "трафик входит в G0 / 2, а не выходит из него."
    ]
  },
  {
    "time": [
      451.49,
      457.01
    ],
    "en": [
      "So, R1 will forward the traffic to R2, which will forward it to SRV1."
    ],
    "ru": [
      "Итак, R1 перенаправит трафик на R2, который направит его на SRV1."
    ]
  },
  {
    "time": [
      457.01,
      463.35
    ],
    "en": [
      "Now, when SRV1 sends the reply to PC3, R1 will check the ACL to decide if the traffic"
    ],
    "ru": [
      "Теперь, когда SRV1 отправляет ответ на ПК3, R1 проверяет ACL, чтобы определить,"
    ]
  },
  {
    "time": [
      463.35,
      467.009
    ],
    "en": [
      "should be forwarded out of G0/2 or not."
    ],
    "ru": [
      "должны быть перенаправлены из G0 / 2 или нет."
    ]
  },
  {
    "time": [
      467.009,
      470.129
    ],
    "en": [
      "It will check the entries of ACL1 in sequence."
    ],
    "ru": [
      "Он будет последовательно проверять записи ACL1."
    ]
  },
  {
    "time": [
      470.129,
      474.51
    ],
    "en": [
      "If source IP = 192.168.1.0/24."
    ],
    "ru": [
      "Если исходный IP = 192.168.1.0/24."
    ]
  },
  {
    "time": [
      474.51,
      479.79
    ],
    "en": [
      "Well, the source is SRV1, so that doesn’t apply."
    ],
    "ru": [
      "Что ж, источник - SRV1, так что это неприменимо."
    ]
  },
  {
    "time": [
      479.79,
      484.127
    ],
    "en": [
      "If source IP = 192.168.2.0/24."
    ],
    "ru": [
      "Если исходный IP = 192.168.2.0/24."
    ]
  },
  {
    "time": [
      484.127,
      488.04
    ],
    "en": [
      "That doesn’t apply either, the source is not in that subnet."
    ],
    "ru": [
      "Это тоже не применимо, источник не находится в этой подсети."
    ]
  },
  {
    "time": [
      488.04,
      496.24
    ],
    "en": [
      "So, R1 reaches the last entry which says permit all other traffic, so it forwards the reply to PC3."
    ],
    "ru": [
      "Итак, R1 достигает последней записи, в которой говорится о разрешении всего остального трафика, поэтому он пересылает ответ на PC3."
    ]
  },
  {
    "time": [
      496.24,
      505.43
    ],
    "en": [
      "to PC3. PC3 was able to access SRV1, even though hosts in 192.168.2.0/24 shouldn’t be able to."
    ],
    "ru": [
      "к ПК3. ПК3 смог получить доступ к SRV1, хотя хосты в 192.168.2.0/24 не могли этого сделать."
    ]
  },
  {
    "time": [
      505.43,
      510.47
    ],
    "en": [
      "Clearly, we didn’t apply this ACL correctly."
    ],
    "ru": [
      "Очевидно, мы неправильно применили этот ACL."
    ]
  },
  {
    "time": [
      510.47,
      514.35
    ],
    "en": [
      "What if we applied the ACL inbound on G0/2?"
    ],
    "ru": [
      "Что, если бы мы применили входящий ACL на G0 / 2?"
    ]
  },
  {
    "time": [
      514.35,
      518.34
    ],
    "en": [
      "That means R1 will check the ACL for all traffic entering G0/2."
    ],
    "ru": [
      "Это означает, что R1 будет проверять ACL для всего трафика, входящего в G0 / 2."
    ]
  },
  {
    "time": [
      518.34,
      525.03
    ],
    "en": [
      "So, if PC3 tries to ping SRV1, R1 will check the ACL."
    ],
    "ru": [
      "Итак, если PC3 попытается пропинговать SRV1, R1 проверит ACL."
    ]
  },
  {
    "time": [
      525.03,
      529.0
    ],
    "en": [
      "Once again, it will check the entries in order, from top to bottom."
    ],
    "ru": [
      "Еще раз, он проверит записи по порядку, сверху вниз."
    ]
  },
  {
    "time": [
      529.0,
      531.16
    ],
    "en": [
      "If source IP = 192.168.1.0/24."
    ],
    "ru": [
      "Если исходный IP = 192.168.1.0/24."
    ]
  },
  {
    "time": [
      531.16,
      538.25
    ],
    "en": [
      "The source isn’t in that subnet, so it checks the next entry."
    ],
    "ru": [
      "Источник не находится в этой подсети, поэтому он проверяет следующую запись."
    ]
  },
  {
    "time": [
      538.25,
      543.1
    ],
    "en": [
      "If source IP = 192.168.2.0/24."
    ],
    "ru": [
      "Если исходный IP = 192.168.2.0/24."
    ]
  },
  {
    "time": [
      543.1,
      551.67
    ],
    "en": [
      "The source is 192.168.2.1, which is in 192.168.2.0/24, so there’s a match!"
    ],
    "ru": [
      "Источник - 192.168.2.1, то есть 192.168.2.0/24, так что совпадение есть!"
    ]
  },
  {
    "time": [
      551.67,
      555.17
    ],
    "en": [
      "That means that R1 will take the specified action, which is deny."
    ],
    "ru": [
      "Это означает, что R1 выполнит указанное действие, которое является отклонением."
    ]
  },
  {
    "time": [
      555.17,
      560.58
    ],
    "en": [
      "So, R1 drops the traffic, it doesn’t forward the packet."
    ],
    "ru": [
      "Итак, R1 отбрасывает трафик, но не пересылает пакет."
    ]
  },
  {
    "time": [
      560.58,
      565.33
    ],
    "en": [
      "Once a router finds a match and takes an action, it stops checking the other entries in the"
    ],
    "ru": [
      "Как только маршрутизатор находит совпадение и выполняет действие, он перестает проверять другие записи в"
    ]
  },
  {
    "time": [
      565.33,
      569.45
    ],
    "en": [
      "ACL, so this ‘permit all other traffic’ is ignored."
    ],
    "ru": [
      "ACL, поэтому этот параметр «разрешить весь другой трафик» игнорируется."
    ]
  },
  {
    "time": [
      569.45,
      576.12
    ],
    "en": [
      "So, does this fulfill our requirements? Yes and no."
    ],
    "ru": [
      "Итак, соответствует ли это нашим требованиям? Да и нет."
    ]
  },
  {
    "time": [
      576.12,
      585.47
    ],
    "en": [
      "Yes and no. 192.168.1.0/24 will be able to access 10.0.1.0/24 no problem, there is no ACL stopping them from communicating."
    ],
    "ru": [
      "Да и нет. 192.168.1.0/24 сможет получить доступ к 10.0.1.0/24 без проблем, нет ACL, мешающего им общаться."
    ]
  },
  {
    "time": [
      585.47,
      595.64
    ],
    "en": [
      "from communicating. Also, hosts in 192.168.2.0/24 are prevented from accessing 10.0.1.0/24, as you just saw"
    ],
    "ru": [
      "от общения. Кроме того, хосты в 192.168.2.0/24 не имеют доступа к 10.0.1.0/24, как вы только что видели."
    ]
  },
  {
    "time": [
      595.64,
      598.44
    ],
    "en": [
      "R1 dropped the traffic from PC3."
    ],
    "ru": [
      "R1 сбросил трафик с ПК3."
    ]
  },
  {
    "time": [
      598.44,
      605.47
    ],
    "en": [
      "However, by applying the ACL inbound on G0/2 we are being too restrictive."
    ],
    "ru": [
      "Однако, применяя входящий ACL на G0 / 2, мы слишком ограничиваем."
    ]
  },
  {
    "time": [
      605.47,
      614.36
    ],
    "en": [
      "This blocks hosts in 192.168.2.0/24 from communicating with all other networks outside of their local LAN."
    ],
    "ru": [
      "Это блокирует хосты в 192.168.2.0/24 от связи со всеми другими сетями за пределами их локальной LAN."
    ]
  },
  {
    "time": [
      614.36,
      619.4
    ],
    "en": [
      "LAN. PC3 and PC4 can communicate with each other, but that’s it."
    ],
    "ru": [
      "LAN. ПК3 и ПК4 могут связываться друг с другом, но это все."
    ]
  },
  {
    "time": [
      619.4,
      623.31
    ],
    "en": [
      "So, this is not the best way to apply this ACL."
    ],
    "ru": [
      "Итак, это не лучший способ применить этот ACL."
    ]
  },
  {
    "time": [
      623.31,
      628.75
    ],
    "en": [
      "There are some other possibilities we could try, such as applying it to R1’s G0/0 or"
    ],
    "ru": [
      "Есть и другие возможности, которые мы могли бы попробовать, например, применить его к G0 / 0 R1 или"
    ]
  },
  {
    "time": [
      628.75,
      634.56
    ],
    "en": [
      "R2’s G0/0, but let’s take a look at the best option."
    ],
    "ru": [
      "R2 - G0 / 0, но давайте посмотрим на лучший вариант."
    ]
  },
  {
    "time": [
      634.56,
      640.18
    ],
    "en": [
      "The best location to place this ACL is outbound on R2’s G0/1 interface."
    ],
    "ru": [
      "Лучшее место для размещения этого ACL - исходящее соединение на интерфейсе R2 G0 / 1."
    ]
  },
  {
    "time": [
      640.18,
      643.17
    ],
    "en": [
      "Let’s see how it works."
    ],
    "ru": [
      "Посмотрим, как это работает."
    ]
  },
  {
    "time": [
      643.17,
      652.3
    ],
    "en": [
      "If PC3 tries to ping SRV1, R2 will check the ACL before forwarding the packet out of its G0/1 interface."
    ],
    "ru": [
      "Если ПК3 пытается выполнить эхо-запрос SRV1, R2 проверит ACL перед пересылкой пакета из своего интерфейса G0 / 1."
    ]
  },
  {
    "time": [
      652.3,
      661.4
    ],
    "en": [
      "G0/1 interface. The first entry says if source IP equals 192.168.1.0/24 then permit, but the source isn’t in that subnet."
    ],
    "ru": [
      "G0 / 1 интерфейс. Первая запись говорит, что если исходный IP-адрес равен 192.168.1.0/24, тогда разрешить, но источник не находится в этой подсети."
    ]
  },
  {
    "time": [
      661.4,
      663.96
    ],
    "en": [
      "subnet. So R2 checks the next entry."
    ],
    "ru": [
      "подсеть. Итак, R2 проверяет следующую запись."
    ]
  },
  {
    "time": [
      663.96,
      669.21
    ],
    "en": [
      "If source IP is in 192.168.2.0/24, then deny."
    ],
    "ru": [
      "Если исходный IP-адрес находится в 192.168.2.0/24, тогда запретите."
    ]
  },
  {
    "time": [
      669.21,
      674.66
    ],
    "en": [
      "The source is in that subnet, so the packet will be denied and R2 will not forward it."
    ],
    "ru": [
      "Источник находится в этой подсети, поэтому пакет будет отклонен, и R2 не будет его пересылать."
    ]
  },
  {
    "time": [
      674.66,
      685.76
    ],
    "en": [
      "So, that satisfies the second requirement, hosts in 192.168.2.0/24 can’t access 10.0.1.0/24."
    ],
    "ru": [
      "Итак, это удовлетворяет второму требованию, хосты в 192.168.2.0/24 не могут получить доступ к 10.0.1.0/24."
    ]
  },
  {
    "time": [
      685.76,
      692.89
    ],
    "en": [
      "What if PC1, in 192.168.1.0/24, tried to ping SRV1?"
    ],
    "ru": [
      "Что, если ПК1 в 192.168.1.0/24 попытался пропинговать SRV1?"
    ]
  },
  {
    "time": [
      692.89,
      698.94
    ],
    "en": [
      "Before forwarding the packet out of its G0/1 interface, R2 will check the ACL."
    ],
    "ru": [
      "Перед пересылкой пакета из интерфейса G0 / 1 R2 проверяет ACL."
    ]
  },
  {
    "time": [
      698.94,
      704.89
    ],
    "en": [
      "If the source IP is in 192.168.1.0/24, then permit."
    ],
    "ru": [
      "Если исходный IP-адрес находится в 192.168.1.0/24, разрешите."
    ]
  },
  {
    "time": [
      704.89,
      713.1
    ],
    "en": [
      "The source is 192.168.1.1, so the packet is permitted and R2 forwards it to SRV1."
    ],
    "ru": [
      "Источник - 192.168.1.1, поэтому пакет разрешен, и R2 пересылает его на SRV1."
    ]
  },
  {
    "time": [
      713.1,
      717.79
    ],
    "en": [
      "Both requirements have been satisfied, and there is no effect on other traffic."
    ],
    "ru": [
      "Оба требования были выполнены, и это не повлияло на другой трафик."
    ]
  },
  {
    "time": [
      717.79,
      724.42
    ],
    "en": [
      "I hope that demonstration helped you understand what an ACL is and how they work."
    ],
    "ru": [
      "Я надеюсь, что эта демонстрация помогла вам понять, что такое ACL и как они работают."
    ]
  },
  {
    "time": [
      724.42,
      727.41
    ],
    "en": [
      "If you’re still a little confused, don’t worry."
    ],
    "ru": [
      "Если вы все еще немного запутались, не волнуйтесь."
    ]
  },
  {
    "time": [
      727.41,
      731.25
    ],
    "en": [
      "Let me explain a little more about some of the things I just mentioned."
    ],
    "ru": [
      "Позвольте мне объяснить немного больше о некоторых вещах, которые я только что упомянул."
    ]
  },
  {
    "time": [
      731.25,
      737.92
    ],
    "en": [
      "So, ACLs are configured in global config mode, but then you must apply it to an interface."
    ],
    "ru": [
      "Итак, ACL настраиваются в режиме глобальной конфигурации, но затем вы должны применить его к интерфейсу."
    ]
  },
  {
    "time": [
      737.92,
      741.87
    ],
    "en": [
      "When applying it to an interface, you specify a direction."
    ],
    "ru": [
      "Применяя его к интерфейсу, вы указываете направление."
    ]
  },
  {
    "time": [
      741.87,
      746.23
    ],
    "en": [
      "This tells the router to either check packets that enter the interface, or check packets"
    ],
    "ru": [
      "Это указывает маршрутизатору либо проверять пакеты, поступающие на интерфейс, либо проверять пакеты."
    ]
  },
  {
    "time": [
      746.23,
      749.27
    ],
    "en": [
      "that exit the interface."
    ],
    "ru": [
      "которые выходят из интерфейса."
    ]
  },
  {
    "time": [
      749.27,
      755.5
    ],
    "en": [
      "ACLs are made up of one or more ACEs, access control entries."
    ],
    "ru": [
      "ACL состоят из одного или нескольких ACE, записей управления доступом."
    ]
  },
  {
    "time": [
      755.5,
      761.92
    ],
    "en": [
      "When the router checks a packet against the ACL, it processes the ACEs in order, from top to bottom."
    ],
    "ru": [
      "Когда маршрутизатор проверяет пакет по ACL, он обрабатывает ACE по порядку, сверху вниз."
    ]
  },
  {
    "time": [
      761.92,
      763.74
    ],
    "en": [
      "top to bottom. I just showed you this."
    ],
    "ru": [
      "сверху вниз. Я только что тебе это показал."
    ]
  },
  {
    "time": [
      763.74,
      771.83
    ],
    "en": [
      "For example here in ACL 1, the router will check if the packet’s source is in 192.168.1.0/24,"
    ],
    "ru": [
      "Например, здесь, в ACL 1, маршрутизатор проверит, находится ли источник пакета в 192.168.1.0/24,"
    ]
  },
  {
    "time": [
      771.83,
      777.68
    ],
    "en": [
      "then it will check if the packet’s source is in 192.168.2.0/24, and if it doesn’t"
    ],
    "ru": [
      "затем он проверит, находится ли источник пакета в 192.168.2.0/24, а если нет"
    ]
  },
  {
    "time": [
      777.68,
      781.27
    ],
    "en": [
      "match either of those it will permit it."
    ],
    "ru": [
      "сопоставьте любой из тех, которые он разрешит."
    ]
  },
  {
    "time": [
      781.27,
      785.89
    ],
    "en": [
      "Another point I briefly mentioned before, if the packet matches one of the entries in"
    ],
    "ru": [
      "Еще один момент, о котором я кратко упоминал ранее, если пакет соответствует одной из записей в"
    ]
  },
  {
    "time": [
      785.89,
      791.5
    ],
    "en": [
      "the ACL, the router takes the action and stops processing the ACL."
    ],
    "ru": [
      "ACL, маршрутизатор выполняет действие и прекращает обработку ACL."
    ]
  },
  {
    "time": [
      791.5,
      795.19
    ],
    "en": [
      "All entries below the matching entry will be ignored."
    ],
    "ru": [
      "Все записи ниже соответствующей записи будут проигнорированы."
    ]
  },
  {
    "time": [
      795.19,
      797.45
    ],
    "en": [
      "Let me show you an example."
    ],
    "ru": [
      "Позвольте мне показать вам пример."
    ]
  },
  {
    "time": [
      797.45,
      800.68
    ],
    "en": [
      "Here we have a router and another ACL."
    ],
    "ru": [
      "Здесь у нас есть роутер и еще один ACL."
    ]
  },
  {
    "time": [
      800.68,
      809.33
    ],
    "en": [
      "The first entry in the ACL says if source IP = 192.168.1.0/24, then permit."
    ],
    "ru": [
      "Первая запись в ACL говорит, что если исходный IP = 192.168.1.0/24, то разрешить."
    ]
  },
  {
    "time": [
      809.33,
      817.44
    ],
    "en": [
      "However the second entry says if source IP = 192.168.0.0/16, then deny."
    ],
    "ru": [
      "Однако вторая запись говорит, что если исходный IP = 192.168.0.0/16, то запретить."
    ]
  },
  {
    "time": [
      817.44,
      823.92
    ],
    "en": [
      "What effect will this have if applied outbound on the G0/0 interface of this router?"
    ],
    "ru": [
      "Какой эффект это будет иметь, если применить исходящий трафик к интерфейсу G0 / 0 этого маршрутизатора?"
    ]
  },
  {
    "time": [
      823.92,
      830.46
    ],
    "en": [
      "If a packet with a source IP of 192.168.1.1 arrives on G0/1, before forwarding the packet"
    ],
    "ru": [
      "Если пакет с IP-адресом источника 192.168.1.1 прибывает на G0 / 1, перед пересылкой пакета"
    ]
  },
  {
    "time": [
      830.46,
      835.01
    ],
    "en": [
      "out of G0/0 the router will check it against the ACL."
    ],
    "ru": [
      "из G0 / 0 маршрутизатор проверит его по ACL."
    ]
  },
  {
    "time": [
      835.01,
      842.62
    ],
    "en": [
      "The source is 192.168.1.1, which matches the first entry, so the router will forward the packet as normal."
    ],
    "ru": [
      "Источник - 192.168.1.1, что соответствует первой записи, поэтому маршрутизатор будет пересылать пакет как обычно."
    ]
  },
  {
    "time": [
      842.62,
      847.43
    ],
    "en": [
      "packet as normal. This second entry will simply be ignored."
    ],
    "ru": [
      "пакет как обычно. Эта вторая запись будет просто проигнорирована."
    ]
  },
  {
    "time": [
      847.43,
      851.47
    ],
    "en": [
      "Now I’ve reversed entries 1 and 2 in ACL 2."
    ],
    "ru": [
      "Теперь я поменял местами записи 1 и 2 в ACL 2."
    ]
  },
  {
    "time": [
      851.47,
      855.94
    ],
    "en": [
      "What will the effect be if the same packet is received by the router?"
    ],
    "ru": [
      "Каков будет эффект, если такой же пакет будет получен маршрутизатором?"
    ]
  },
  {
    "time": [
      855.94,
      860.33
    ],
    "en": [
      "It will once again check ACL 2 before forwarding the packet."
    ],
    "ru": [
      "Он еще раз проверит ACL 2 перед пересылкой пакета."
    ]
  },
  {
    "time": [
      860.33,
      865.2
    ],
    "en": [
      "The first entry tells the router to deny the packet, so it will be discarded, not forwarded"
    ],
    "ru": [
      "Первая запись указывает маршрутизатору отклонить пакет, поэтому он будет отброшен, а не переадресован."
    ]
  },
  {
    "time": [
      865.2,
      867.7
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
      867.7,
      871.21
    ],
    "en": [
      "Entry 2, which tells the router to permit that packet, is ignored."
    ],
    "ru": [
      "Запись 2, которая сообщает маршрутизатору разрешить этот пакет, игнорируется."
    ]
  },
  {
    "time": [
      871.21,
      876.52
    ],
    "en": [
      "So, I think you can see how important the order of the entries in an ACL is."
    ],
    "ru": [
      "Итак, я думаю, вы видите, насколько важен порядок записей в ACL."
    ]
  },
  {
    "time": [
      876.52,
      879.22
    ],
    "en": [
      "Now, here’s one more point about ACLs."
    ],
    "ru": [
      "А теперь еще одно замечание о ACL."
    ]
  },
  {
    "time": [
      879.22,
      885.19
    ],
    "en": [
      "A maximum of one ACL can be applied to a single interface per direction."
    ],
    "ru": [
      "К одному интерфейсу в каждом направлении можно применить не более одного ACL."
    ]
  },
  {
    "time": [
      885.19,
      893.73
    ],
    "en": [
      "So, one inbound ACL is allowed and one outbound ACL is allowed, for a maximum of two ACLs."
    ],
    "ru": [
      "Таким образом, разрешен один входящий ACL и один исходящий ACL, максимум для двух ACL."
    ]
  },
  {
    "time": [
      893.73,
      898.3
    ],
    "en": [
      "If you apply a second ACL to an interface in the same direction as another one, it will"
    ],
    "ru": [
      "Если вы примените второй ACL к интерфейсу в том же направлении, что и другой, он"
    ]
  },
  {
    "time": [
      898.3,
      902.02
    ],
    "en": [
      "replace the previous one."
    ],
    "ru": [
      "заменить предыдущий."
    ]
  },
  {
    "time": [
      902.02,
      909.01
    ],
    "en": [
      "Next up, another important part of ACLs, the ‘implicit deny’. Here’s a question."
    ],
    "ru": [
      "Затем еще одна важная часть ACL - «неявное запрещение». Вот вопрос."
    ]
  },
  {
    "time": [
      909.01,
      912.93
    ],
    "en": [
      "Here’s a question. What happens if a packet doesn’t match any of the entries in an ACL?"
    ],
    "ru": [
      "Вот вопрос. Что произойдет, если пакет не соответствует ни одной записи в ACL?"
    ]
  },
  {
    "time": [
      912.93,
      917.86
    ],
    "en": [
      "So, here’s the same ACL, and the same router."
    ],
    "ru": [
      "Итак, вот тот же список контроля доступа и тот же маршрутизатор."
    ]
  },
  {
    "time": [
      917.86,
      923.19
    ],
    "en": [
      "This time the router receives a packet with source IP 10.0.0.1."
    ],
    "ru": [
      "На этот раз маршрутизатор получает пакет с исходным IP 10.0.0.1."
    ]
  },
  {
    "time": [
      923.19,
      930.47
    ],
    "en": [
      "Before forwarding it out of G0/0, the router checks it against the ACL. 10.0.0.1 doesn’t"
    ],
    "ru": [
      "Перед тем, как перенаправить его из G0 / 0, маршрутизатор проверяет его по ACL. 10.0.0.1 не работает"
    ]
  },
  {
    "time": [
      930.47,
      932.29
    ],
    "en": [
      "match the first entry."
    ],
    "ru": [
      "соответствует первой записи."
    ]
  },
  {
    "time": [
      932.29,
      936.49
    ],
    "en": [
      "And it doesn’t match the second entry either. So, what happens?"
    ],
    "ru": [
      "И это тоже не соответствует второй записи. Итак, что происходит?"
    ]
  },
  {
    "time": [
      936.49,
      941.24
    ],
    "en": [
      "So, what happens? The answer is, the router will deny the packet, it will not forward it."
    ],
    "ru": [
      "Итак, что происходит? Ответ: маршрутизатор отклонит пакет, он не будет его пересылать."
    ]
  },
  {
    "time": [
      941.24,
      944.41
    ],
    "en": [
      "This is what we call the ‘implicit deny’."
    ],
    "ru": [
      "Это то, что мы называем «неявным отрицанием»."
    ]
  },
  {
    "time": [
      944.41,
      949.05
    ],
    "en": [
      "Even though there is no entry in the ACL telling the router to deny the packet, it’s like"
    ],
    "ru": [
      "Несмотря на то, что в ACL нет записи, указывающей маршрутизатору отклонить пакет, это похоже на"
    ]
  },
  {
    "time": [
      949.05,
      955.22
    ],
    "en": [
      "there is an invisible entry at the end, if source IP = any, then deny."
    ],
    "ru": [
      "в конце есть невидимая запись, если исходный IP = любой, то запретить."
    ]
  },
  {
    "time": [
      955.22,
      958.17
    ],
    "en": [
      "This is true for all ACLs."
    ],
    "ru": [
      "Это верно для всех ACL."
    ]
  },
  {
    "time": [
      958.17,
      963.76
    ],
    "en": [
      "To summarize this point, there is an implicit deny at the end of all ACLs."
    ],
    "ru": [
      "Подводя итог этому моменту, в конце всех списков ACL есть неявное отклонение."
    ]
  },
  {
    "time": [
      963.76,
      967.63
    ],
    "en": [
      "This tells the router to deny all traffic that doesn’t match any of the configured"
    ],
    "ru": [
      "Это указывает маршрутизатору отклонить весь трафик, который не соответствует ни одному из настроенных"
    ]
  },
  {
    "time": [
      967.63,
      970.14
    ],
    "en": [
      "entries in the ACL."
    ],
    "ru": [
      "записи в ACL."
    ]
  },
  {
    "time": [
      970.14,
      975.43
    ],
    "en": [
      "Always be aware of the implicit deny when configuring ACLs, or you might deny traffic"
    ],
    "ru": [
      "Всегда помните о неявном отказе при настройке ACL, иначе вы можете запретить трафик"
    ]
  },
  {
    "time": [
      975.43,
      979.61
    ],
    "en": [
      "that you didn’t want to deny."
    ],
    "ru": [
      "что вы не хотели отрицать."
    ]
  },
  {
    "time": [
      979.61,
      984.76
    ],
    "en": [
      "Now that you have an idea of the basic operations of ACLs, let me introduce the different types"
    ],
    "ru": [
      "Теперь, когда у вас есть представление об основных операциях ACL, позвольте мне представить различные типы"
    ]
  },
  {
    "time": [
      984.76,
      990.36
    ],
    "en": [
      "of ACLs you will learn about in today’s video and in Day 35."
    ],
    "ru": [
      "списков ACL, о которых вы узнаете из сегодняшнего видео и в День 35."
    ]
  },
  {
    "time": [
      990.36,
      995.78
    ],
    "en": [
      "There are two main types of ACLs, and those two types have two sub-types."
    ],
    "ru": [
      "Есть два основных типа ACL, и у этих двух типов есть два подтипа."
    ]
  },
  {
    "time": [
      995.78,
      1003.63
    ],
    "en": [
      "The first type are standard ACLs, these match based on source IP address only, so they are quite simple."
    ],
    "ru": [
      "Первый тип - это стандартные списки ACL, они соответствуют только исходному IP-адресу, поэтому они довольно просты."
    ]
  },
  {
    "time": [
      1003.63,
      1008.7
    ],
    "en": [
      "quite simple. The two types of standard ACLs are standard numbered ACLs, which are identified with a"
    ],
    "ru": [
      "довольно просто. Два типа стандартных списков контроля доступа представляют собой стандартные нумерованные списки контроля доступа, которые обозначаются значком."
    ]
  },
  {
    "time": [
      1008.7,
      1011.79
    ],
    "en": [
      "number like 1, 2, etc."
    ],
    "ru": [
      "число, такое как 1, 2 и т. д."
    ]
  },
  {
    "time": [
      1011.79,
      1016.74
    ],
    "en": [
      "And there are also standard named ACLs, which are identified with a name."
    ],
    "ru": [
      "И есть также стандартные именованные ACL, которые идентифицируются по имени."
    ]
  },
  {
    "time": [
      1016.74,
      1023.44
    ],
    "en": [
      "There are also differences in how you configure numbered and named ACLs, but we’ll get to that later."
    ],
    "ru": [
      "Существуют также различия в том, как вы настраиваете нумерованные и именованные списки ACL, но мы вернемся к этому позже."
    ]
  },
  {
    "time": [
      1023.44,
      1028.22
    ],
    "en": [
      "that later. In addition to standard ACLs, there are also extended ACLs."
    ],
    "ru": [
      "это позже. В дополнение к стандартным ACL существуют также расширенные ACL."
    ]
  },
  {
    "time": [
      1028.22,
      1034.08
    ],
    "en": [
      "These are more complex and can match based on source and/or destination IP address, source"
    ],
    "ru": [
      "Они более сложные и могут совпадать в зависимости от IP-адреса источника и / или назначения, источника"
    ]
  },
  {
    "time": [
      1034.08,
      1039.32
    ],
    "en": [
      "and/or destination port numbers, as well as some other things."
    ],
    "ru": [
      "и / или номера порта назначения, а также некоторые другие вещи."
    ]
  },
  {
    "time": [
      1039.32,
      1045.48
    ],
    "en": [
      "Like standard ACLs, there are numbered and named versions of extended ACLs, too."
    ],
    "ru": [
      "Как и стандартные списки контроля доступа, существуют нумерованные и именованные версии расширенных списков контроля доступа."
    ]
  },
  {
    "time": [
      1045.48,
      1050.92
    ],
    "en": [
      "As I said in the beginning of the video, today we’ll focus on standard ACLs."
    ],
    "ru": [
      "Как я сказал в начале видео, сегодня мы сосредоточимся на стандартных ACL."
    ]
  },
  {
    "time": [
      1050.92,
      1059.01
    ],
    "en": [
      "All of the examples so far have been standard ACLs, filtering packets only based on their source IP address."
    ],
    "ru": [
      "Все примеры до сих пор были стандартными ACL, фильтрующими пакеты только на основе их исходного IP-адреса."
    ]
  },
  {
    "time": [
      1059.01,
      1064.47
    ],
    "en": [
      "source IP address. In Day 35 I’ll tell you all about extended ACLs, but now let’s learn some more about"
    ],
    "ru": [
      "исходный IP-адрес. В день 35 я расскажу вам о расширенных списках ACL, а теперь давайте узнаем больше о"
    ]
  },
  {
    "time": [
      1064.47,
      1069.61
    ],
    "en": [
      "standard ACLs and then see how to actually configure them."
    ],
    "ru": [
      "стандартные списки ACL, а затем посмотрите, как их настроить."
    ]
  },
  {
    "time": [
      1069.61,
      1073.52
    ],
    "en": [
      "So let’s get into standard numbered ACLs."
    ],
    "ru": [
      "Итак, давайте перейдем к стандартным нумерованным спискам ACL."
    ]
  },
  {
    "time": [
      1073.52,
      1079.65
    ],
    "en": [
      "As I just mentioned, standard ACLs match traffic based only on the source IP address of the packet."
    ],
    "ru": [
      "Как я только что упомянул, стандартные списки ACL сопоставляют трафик только на основе IP-адреса источника пакета."
    ]
  },
  {
    "time": [
      1079.65,
      1082.88
    ],
    "en": [
      "packet. So, standard ACLs are quite simple."
    ],
    "ru": [
      "пакет. Итак, стандартные ACL довольно просты."
    ]
  },
  {
    "time": [
      1082.88,
      1089.42
    ],
    "en": [
      "The router doesn’t check the destination IP, the source Layer 4 port, the destination port, etc."
    ],
    "ru": [
      "Маршрутизатор не проверяет IP-адрес назначения, исходный порт уровня 4, порт назначения и т. Д."
    ]
  },
  {
    "time": [
      1089.42,
      1096.21
    ],
    "en": [
      "port, etc. It just looks at the source IP address of the packet and decides to forward or block it."
    ],
    "ru": [
      "порт и т. д. Он просто смотрит на исходный IP-адрес пакета и решает переслать или заблокировать его."
    ]
  },
  {
    "time": [
      1096.21,
      1099.0
    ],
    "en": [
      "it. Numbered ACLs are identified with a number."
    ],
    "ru": [
      "Это. Пронумерованные списки ACL обозначаются номером."
    ]
  },
  {
    "time": [
      1099.0,
      1106.32
    ],
    "en": [
      "You can, of course, configure multiple ACLs on a single router, so you need to identify each ACL."
    ],
    "ru": [
      "Конечно, вы можете настроить несколько ACL на одном маршрутизаторе, поэтому вам нужно идентифицировать каждый ACL."
    ]
  },
  {
    "time": [
      1106.32,
      1111.66
    ],
    "en": [
      "each ACL. Numbered ACLs use a number like ACL 1, ACL 2, etc."
    ],
    "ru": [
      "каждый ACL. В пронумерованных списках ACL используются номера вроде ACL 1, ACL 2 и т. Д."
    ]
  },
  {
    "time": [
      1111.66,
      1115.1
    ],
    "en": [
      "There are also named ACLs, which I’ll introduce later."
    ],
    "ru": [
      "Есть также именованные ACL, о которых я расскажу позже."
    ]
  },
  {
    "time": [
      1115.1,
      1117.72
    ],
    "en": [
      "Here’s an important point."
    ],
    "ru": [
      "Вот важный момент."
    ]
  },
  {
    "time": [
      1117.72,
      1122.86
    ],
    "en": [
      "Different types of ACLs have a different range of numbers that can be used."
    ],
    "ru": [
      "Различные типы списков ACL имеют разный диапазон номеров, которые можно использовать."
    ]
  },
  {
    "time": [
      1122.86,
      1129.92
    ],
    "en": [
      "Standard ACLs can use 1 to 99 and 1300 to 1999."
    ],
    "ru": [
      "Стандартные ACL могут использовать от 1 до 99 и от 1300 до 1999."
    ]
  },
  {
    "time": [
      1129.92,
      1135.6
    ],
    "en": [
      "Originally, standard ACLs could only use 1 to 99, meaning you could have a maximum of"
    ],
    "ru": [
      "Первоначально стандартные ACL могли использовать только от 1 до 99, что означало, что у вас могло быть максимум"
    ]
  },
  {
    "time": [
      1135.6,
      1139.45
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
      1135.6,
      1139.45
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
      1139.45,
      1144.25
    ],
    "en": [
      "Later this was expanded to include 1300 to 1999."
    ],
    "ru": [
      "Позже это было расширено, чтобы включить 1300 до 1999 года."
    ]
  },
  {
    "time": [
      1144.25,
      1150.68
    ],
    "en": [
      "So, you can’t configure a standard ACL with the number 100, for example. The number has"
    ],
    "ru": [
      "Таким образом, вы не можете настроить стандартный ACL, например, с номером 100. Номер имеет"
    ]
  },
  {
    "time": [
      1150.68,
      1154.15
    ],
    "en": [
      "to be in one of these ranges."
    ],
    "ru": [
      "находиться в одном из этих диапазонов."
    ]
  },
  {
    "time": [
      1154.15,
      1159.89
    ],
    "en": [
      "Here are a bunch of different ACL types, and the different number ranges that identify them."
    ],
    "ru": [
      "Вот несколько разных типов ACL и различных диапазонов номеров, которые их идентифицируют."
    ]
  },
  {
    "time": [
      1159.89,
      1162.67
    ],
    "en": [
      "them. You don’t have to memorize all of these, of course."
    ],
    "ru": [
      "их. Конечно, вам не обязательно все это запоминать."
    ]
  },
  {
    "time": [
      1162.67,
      1172.04
    ],
    "en": [
      "For now, just remember the standard ACL ranges, 1 to 99 and 1300 to 1999, listed as ‘Standard"
    ],
    "ru": [
      "На данный момент просто запомните стандартные диапазоны ACL от 1 до 99 и с 1300 до 1999, указанные как «Стандартные."
    ]
  },
  {
    "time": [
      1172.04,
      1175.02
    ],
    "en": [
      "IP’ ACLs in this chart."
    ],
    "ru": [
      "ACL IP ’на этой диаграмме."
    ]
  },
  {
    "time": [
      1175.02,
      1179.89
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
      1175.02,
      1179.89
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
      1179.89,
      1184.09
    ],
    "en": [
      "I just wanted to show you that there are lots of different types of ACLs, and each have"
    ],
    "ru": [
      "Я просто хотел показать вам, что существует множество разных типов ACL, и каждый из них имеет"
    ]
  },
  {
    "time": [
      1184.09,
      1185.98
    ],
    "en": [
      "their own range of numbers."
    ],
    "ru": [
      "собственный диапазон чисел."
    ]
  },
  {
    "time": [
      1185.98,
      1191.04
    ],
    "en": [
      "Here’s the basic command to configure a standard numbered ACL."
    ],
    "ru": [
      "Вот основная команда для настройки стандартного нумерованного ACL."
    ]
  },
  {
    "time": [
      1191.04,
      1193.78
    ],
    "en": [
      "ACCESS-LIST, followed by the number."
    ],
    "ru": [
      "СПИСОК ДОСТУПА, за которым следует номер."
    ]
  },
  {
    "time": [
      1193.78,
      1203.5
    ],
    "en": [
      "We’re configuring standard ACLs, so this number must be in the range 1 to 99 or 1300 to 1999."
    ],
    "ru": [
      "Мы настраиваем стандартные списки управления доступом, поэтому это число должно находиться в диапазоне от 1 до 99 или от 1300 до 1999."
    ]
  },
  {
    "time": [
      1203.5,
      1210.92
    ],
    "en": [
      "to 1999. Then you specify either deny or permit, and then the IP address and wildcard mask to match against."
    ],
    "ru": [
      "по 1999. Затем вы указываете либо запретить, либо разрешить, а затем IP-адрес и маску подстановки для сопоставления."
    ]
  },
  {
    "time": [
      1210.92,
      1214.64
    ],
    "en": [
      "against. Hopefully you remember wildcard masks from the EIGRP and OSPF videos."
    ],
    "ru": [
      "против. Надеюсь, вы помните маски с подстановочными знаками из видеороликов EIGRP и OSPF."
    ]
  },
  {
    "time": [
      1214.64,
      1220.17
    ],
    "en": [
      "Don’t try to use a standard subnet mask when configuring ACLs."
    ],
    "ru": [
      "Не пытайтесь использовать стандартную маску подсети при настройке списков контроля доступа."
    ]
  },
  {
    "time": [
      1220.17,
      1225.53
    ],
    "en": [
      "So, this is how you configure a single entry in access-list 1."
    ],
    "ru": [
      "Итак, вот как вы настраиваете одну запись в списке доступа 1."
    ]
  },
  {
    "time": [
      1225.53,
      1226.68
    ],
    "en": [
      "Here are some examples."
    ],
    "ru": [
      "Вот несколько примеров."
    ]
  },
  {
    "time": [
      1226.68,
      1231.49
    ],
    "en": [
      "ACCESS-LIST 1 DENY 1.1.1.1 0.0.0.0."
    ],
    "ru": [
      "ACCESS-LIST 1 DENY 1.1.1.1 0.0.0.0."
    ]
  },
  {
    "time": [
      1231.49,
      1240.11
    ],
    "en": [
      "So, this denies 1.1.1.1/32, meaning only 1.1.1.1, a single host."
    ],
    "ru": [
      "Таким образом, это отрицает 1.1.1.1/32, то есть только 1.1.1.1, один хост."
    ]
  },
  {
    "time": [
      1240.11,
      1248.09
    ],
    "en": [
      "Now, when you specify a /32 mask in an ACL, you don’t actually have to specify the wildcard mask."
    ],
    "ru": [
      "Теперь, когда вы указываете маску / 32 в ACL, вам фактически не нужно указывать маску подстановки."
    ]
  },
  {
    "time": [
      1248.09,
      1254.4
    ],
    "en": [
      "mask. You can just specify 1.1.1.1, and the router will understand that it’s /32."
    ],
    "ru": [
      "маска. Вы можете просто указать 1.1.1.1, и маршрутизатор поймет, что это / 32."
    ]
  },
  {
    "time": [
      1254.4,
      1258.84
    ],
    "en": [
      "So, these are just two different ways of configuring the exact same thing."
    ],
    "ru": [
      "Итак, это всего лишь два разных способа настройки одного и того же."
    ]
  },
  {
    "time": [
      1258.84,
      1263.32
    ],
    "en": [
      "Now, there is one more method of configuring a /32 entry."
    ],
    "ru": [
      "Теперь есть еще один способ настройки записи / 32."
    ]
  },
  {
    "time": [
      1263.32,
      1268.56
    ],
    "en": [
      "It’s considered an old method, but it still works on modern routers."
    ],
    "ru": [
      "Это старый метод, но он все еще работает на современных маршрутизаторах."
    ]
  },
  {
    "time": [
      1268.56,
      1274.11
    ],
    "en": [
      "To specify a single host, you can use the HOST keyword before the IP address."
    ],
    "ru": [
      "Чтобы указать один хост, вы можете использовать ключевое слово HOST перед IP-адресом."
    ]
  },
  {
    "time": [
      1274.11,
      1279.12
    ],
    "en": [
      "Again, in effect this is exactly the same as the previous two, it’s just a different"
    ],
    "ru": [
      "Опять же, по сути, это то же самое, что и предыдущие два, просто другое"
    ]
  },
  {
    "time": [
      1279.12,
      1281.07
    ],
    "en": [
      "way of configuring it."
    ],
    "ru": [
      "способ его настройки."
    ]
  },
  {
    "time": [
      1281.07,
      1285.27
    ],
    "en": [
      "So, all three of these are the same in effect."
    ],
    "ru": [
      "Итак, все три из них по сути одинаковы."
    ]
  },
  {
    "time": [
      1285.27,
      1292.37
    ],
    "en": [
      "Note that the 2nd and 3rd options here can only be used for /32, to specify a single host."
    ],
    "ru": [
      "Обратите внимание, что второй и третий параметры здесь могут использоваться только для / 32, чтобы указать один хост."
    ]
  },
  {
    "time": [
      1292.37,
      1297.53
    ],
    "en": [
      "host. If you’re matching a /24 network, for example, you’ll have to use the 1st option, you have"
    ],
    "ru": [
      "хозяин. Если вы, например, соответствуете сети / 24, вам нужно будет использовать 1-й вариант, у вас есть"
    ]
  },
  {
    "time": [
      1297.53,
      1301.58
    ],
    "en": [
      "to specify the wildcard mask of 0.0.0.255."
    ],
    "ru": [
      "чтобы указать подстановочную маску 0.0.0.255."
    ]
  },
  {
    "time": [
      1301.58,
      1311.63
    ],
    "en": [
      "Okay, so let’s say we used one of those options to configure an entry in ACL 1 that blocks 1.1.1.1/32."
    ],
    "ru": [
      "Хорошо, допустим, мы использовали одну из этих опций для настройки записи в ACL 1, которая блокирует 1.1.1.1/32."
    ]
  },
  {
    "time": [
      1311.63,
      1317.8
    ],
    "en": [
      "blocks 1.1.1.1/32. If we leave the ACL as is, all other traffic will be blocked, too, because of the implicit deny."
    ],
    "ru": [
      "блоки 1.1.1.1/32. Если мы оставим ACL как есть, весь другой трафик также будет заблокирован из-за неявного отказа."
    ]
  },
  {
    "time": [
      1317.8,
      1323.35
    ],
    "en": [
      "deny. So, let’s make another entry in this ACL to permit traffic. Here it is."
    ],
    "ru": [
      "Отрицать. Итак, давайте сделаем еще одну запись в этом ACL, чтобы разрешить трафик. Вот."
    ]
  },
  {
    "time": [
      1323.35,
      1326.98
    ],
    "en": [
      "Here it is. ACCESS-LIST 1 PERMIT ANY."
    ],
    "ru": [
      "Вот. СПИСОК ДОСТУПА 1 РАЗРЕШЕНИЕ ЛЮБОГО."
    ]
  },
  {
    "time": [
      1326.98,
      1330.64
    ],
    "en": [
      "This tells the router to permit all traffic, with any source IP."
    ],
    "ru": [
      "Это указывает маршрутизатору разрешить весь трафик с любым IP-адресом источника."
    ]
  },
  {
    "time": [
      1330.64,
      1333.34
    ],
    "en": [
      "Now, here’s a quiz."
    ],
    "ru": [
      "А теперь тест."
    ]
  },
  {
    "time": [
      1333.34,
      1338.43
    ],
    "en": [
      "The ANY keyword is convenient, but how can we specify an IP address and wildcard mask"
    ],
    "ru": [
      "Ключевое слово ANY удобно, но как мы можем указать IP-адрес и маску подстановки?"
    ]
  },
  {
    "time": [
      1338.43,
      1340.87
    ],
    "en": [
      "that has the same effect?"
    ],
    "ru": [
      "что имеет тот же эффект?"
    ]
  },
  {
    "time": [
      1340.87,
      1347.18
    ],
    "en": [
      "Pause the video and think about it, what IP address and wildcard mask matches all addresses?"
    ],
    "ru": [
      "Поставьте видео на паузу и подумайте, какой IP-адрес и маска подстановки соответствуют всем адресам?"
    ]
  },
  {
    "time": [
      1347.18,
      1359.72
    ],
    "en": [
      "Okay, the answer is 0.0.0.0 255.255.255.255, which is 0.0.0.0/0, and matches all addresses."
    ],
    "ru": [
      "Хорошо, ответ - 0.0.0.0 255.255.255.255, что равно 0.0.0.0/0 и соответствует всем адресам."
    ]
  },
  {
    "time": [
      1359.72,
      1363.46
    ],
    "en": [
      "So, these two options are exactly the same."
    ],
    "ru": [
      "Итак, эти два варианта абсолютно одинаковы."
    ]
  },
  {
    "time": [
      1363.46,
      1367.96
    ],
    "en": [
      "As you can see, ACL configuration can be quite flexible."
    ],
    "ru": [
      "Как видите, конфигурация ACL может быть довольно гибкой."
    ]
  },
  {
    "time": [
      1367.96,
      1373.25
    ],
    "en": [
      "In these examples I’ll use a variety of methods so you can be aware of all of them,"
    ],
    "ru": [
      "В этих примерах я буду использовать различные методы, чтобы вы знали о них все,"
    ]
  },
  {
    "time": [
      1373.25,
      1376.58
    ],
    "en": [
      "but feel free to pick your favorite and just use that."
    ],
    "ru": [
      "но не стесняйтесь выбирать свой любимый и просто использовать его."
    ]
  },
  {
    "time": [
      1376.58,
      1383.31
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
      1376.58,
      1383.31
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
      1383.31,
      1390.91
    ],
    "en": [
      "Finally, here’s one more thing you can configure for an ACL, a remark."
    ],
    "ru": [
      "Наконец, вот еще одна вещь, которую вы можете настроить для ACL, - замечание."
    ]
  },
  {
    "time": [
      1390.91,
      1393.28
    ],
    "en": [
      "This is like an interface description."
    ],
    "ru": [
      "Это похоже на описание интерфейса."
    ]
  },
  {
    "time": [
      1393.28,
      1397.74
    ],
    "en": [
      "It doesn’t have any effect on the ACL, it’s just a description that helps you remember"
    ],
    "ru": [
      "Это не влияет на ACL, это просто описание, которое помогает вам запомнить"
    ]
  },
  {
    "time": [
      1397.74,
      1402.66
    ],
    "en": [
      "the purpose of the ACL when looking at it in the configuration."
    ],
    "ru": [
      "назначение ACL при просмотре его в конфигурации."
    ]
  },
  {
    "time": [
      1402.66,
      1407.28
    ],
    "en": [
      "Note that the command is ACCESS-LIST 1 REMARK, followed by the remark."
    ],
    "ru": [
      "Обратите внимание, что это команда ACCESS-LIST 1 REMARK, за которой следует примечание."
    ]
  },
  {
    "time": [
      1407.28,
      1413.66
    ],
    "en": [
      "The hashtags, or pound symbols, whatever you call them, aren’t a necessary part of the command."
    ],
    "ru": [
      "Хэштеги или символы решетки, как бы вы их ни называли, не являются необходимой частью команды."
    ]
  },
  {
    "time": [
      1413.66,
      1418.21
    ],
    "en": [
      "command. I just use them to make it easier to see when looking at the config."
    ],
    "ru": [
      "команда. Я просто использую их, чтобы их было легче увидеть при просмотре конфигурации."
    ]
  },
  {
    "time": [
      1418.21,
      1423.68
    ],
    "en": [
      "Okay, so I tried actually configuring that ACL, let’s check it out."
    ],
    "ru": [
      "Хорошо, я попытался настроить этот ACL, давай проверим."
    ]
  },
  {
    "time": [
      1423.68,
      1429.86
    ],
    "en": [
      "For both the deny and permit entries I decided to enter the whole IP address and wildcard mask."
    ],
    "ru": [
      "Как для запрещающих, так и для разрешающих записей я решил ввести весь IP-адрес и подстановочную маску."
    ]
  },
  {
    "time": [
      1429.86,
      1434.85
    ],
    "en": [
      "mask. Then I used SHOW ACCESS-LISTS, which displays all ACLs on the router."
    ],
    "ru": [
      "маска. Затем я использовал SHOW ACCESS-LISTS, который отображает все ACL на маршрутизаторе."
    ]
  },
  {
    "time": [
      1434.85,
      1437.25
    ],
    "en": [
      "There are a few things to point out here."
    ],
    "ru": [
      "Здесь следует отметить несколько моментов."
    ]
  },
  {
    "time": [
      1437.25,
      1446.62
    ],
    "en": [
      "First up, notice that the router automatically converted DENY 1.1.1.1 0.0.0.0 to just DENY 1.1.1.1."
    ],
    "ru": [
      "Прежде всего, обратите внимание, что маршрутизатор автоматически преобразовал DENY 1.1.1.1 0.0.0.0 в DENY 1.1.1.1."
    ]
  },
  {
    "time": [
      1446.62,
      1450.26
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
      1446.62,
      1450.26
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
      1450.26,
      1459.45
    ],
    "en": [
      "Also, PERMIT 0.0.0.0 255.255.255.255 was automatically converted to PERMIT ANY."
    ],
    "ru": [
      "отображается только в конфиге."
    ]
  },
  {
    "time": [
      1459.45,
      1462.87
    ],
    "en": [
      "You probably also noticed that the remark isn’t displayed in this command, it’s"
    ],
    "ru": [
      "Наконец, обратите внимание, что каждой записи присвоен номер, указывающий порядок."
    ]
  },
  {
    "time": [
      1462.87,
      1465.07
    ],
    "en": [
      "only displayed in the config."
    ],
    "ru": [
      "Сначала я настроил оператор DENY, и ему было присвоено 10, затем оператору PERMIT было присвоено 20."
    ]
  },
  {
    "time": [
      1465.07,
      1470.05
    ],
    "en": [
      "Finally, notice that each entry is given a number indicating the order."
    ],
    "ru": [
      "было присвоено 20. Помните, что порядок этих записей очень важен."
    ]
  },
  {
    "time": [
      1470.05,
      1475.98
    ],
    "en": [
      "I configured the DENY statement first, and it was assigned 10, then the PERMIT statement was assigned 20."
    ],
    "ru": [
      "Если первая запись PERMIT ANY, весь трафик будет разрешен, а запись DENY 1.1.1.1 будет бесполезной."
    ]
  },
  {
    "time": [
      1475.98,
      1479.68
    ],
    "en": [
      "was assigned 20. Remember, the order of these entries is very important."
    ],
    "ru": [
      "было бы бесполезно. На современных устройствах маршрутизатор должен мешать вам выполнять подобные настройки, но"
    ]
  },
  {
    "time": [
      1479.68,
      1487.99
    ],
    "en": [
      "If the PERMIT ANY entry was first, all traffic would be permitted and the DENY 1.1.1.1 entry would be useless."
    ],
    "ru": [
      "вы все равно должны осознавать, насколько важен порядок."
    ]
  },
  {
    "time": [
      1487.99,
      1492.101
    ],
    "en": [
      "would be useless. On modern devices, the router should prevent you from doing configurations like that, but"
    ],
    "ru": [
      "Хорошо, затем я использовал команду ПОКАЗАТЬ СПИСКИ ДОСТУПА IP."
    ]
  },
  {
    "time": [
      1492.101,
      1495.29
    ],
    "en": [
      "you should still be aware of how important the order is."
    ],
    "ru": [
      "Обратите внимание, что вывод точно такой же, как и для SHOW ACCESS-LISTS."
    ]
  },
  {
    "time": [
      1495.29,
      1499.87
    ],
    "en": [
      "Okay, next I used the command SHOW IP ACCESS-LISTS."
    ],
    "ru": [
      "Как вы видели ранее, существует много видов ACL."
    ]
  },
  {
    "time": [
      1499.87,
      1504.059
    ],
    "en": [
      "Notice that the output is exactly the same as for SHOW ACCESS-LISTS."
    ],
    "ru": [
      "SHOW ACCESS-LISTS отображает все виды, но SHOW IP ACCESS-LISTS отображает только IP ACL,"
    ]
  },
  {
    "time": [
      1504.059,
      1507.56
    ],
    "en": [
      "As you saw before, there are many kinds of ACLs."
    ],
    "ru": [
      "такой, который мы будем настраивать в этих видео."
    ]
  },
  {
    "time": [
      1507.56,
      1514.47
    ],
    "en": [
      "SHOW ACCESS-LISTS displays all kinds, but SHOW IP ACCESS-LISTS displays only IP ACLs,"
    ],
    "ru": [
      "Вы можете использовать любую команду для проверки списков ACL, это не имеет значения."
    ]
  },
  {
    "time": [
      1514.47,
      1517.6
    ],
    "en": [
      "the kind we will be configuring in these videos."
    ],
    "ru": [
      "Наконец, я использовал SHOW RUNNING-CONFIG, затем трубу, а затем INCLUDE ACCESS-LIST."
    ]
  },
  {
    "time": [
      1517.6,
      1521.27
    ],
    "en": [
      "You can use either command to check your ACLs, it doesn’t matter."
    ],
    "ru": [
      "чтобы отображать только те строки в конфигурации, которые включают ACCESS-LIST."
    ]
  },
  {
    "time": [
      1521.27,
      1527.13
    ],
    "en": [
      "Finally, I used SHOW RUNNING-CONFIG, followed by the pipe, and then INCLUDE ACCESS-LIST"
    ],
    "ru": [
      "Еще раз обратите внимание, что записи deny и allow были автоматически изменены маршрутизатором."
    ]
  },
  {
    "time": [
      1527.13,
      1531.62
    ],
    "en": [
      "to only show lines in the config that include ACCESS-LIST."
    ],
    "ru": [
      "роутер. Также на этот раз отображается примечание."
    ]
  },
  {
    "time": [
      1531.62,
      1536.45
    ],
    "en": [
      "Notice once again that the deny and permit entries were automatically changed by the router."
    ],
    "ru": [
      "Помните, я сказал, что вам нужно применить ACL к интерфейсу?"
    ]
  },
  {
    "time": [
      1536.45,
      1539.11
    ],
    "en": [
      "router. Also, the remark is displayed this time."
    ],
    "ru": [
      "Вот команда."
    ]
  },
  {
    "time": [
      1539.11,
      1543.98
    ],
    "en": [
      "Now, remember I said you have to actually apply the ACL to an interface?"
    ],
    "ru": [
      "В режиме конфигурации интерфейса используйте IP ACCESS-GROUP, правильно, это ACCESS-GROUP, а не ACCESS-LIST,"
    ]
  },
  {
    "time": [
      1543.98,
      1545.72
    ],
    "en": [
      "Here is the command."
    ],
    "ru": [
      "затем номер ACL, затем IN или OUT."
    ]
  },
  {
    "time": [
      1545.72,
      1552.93
    ],
    "en": [
      "From interface config mode, use IP ACCESS-GROUP, that’s right, it’s ACCESS-GROUP, not ACCESS-LIST,"
    ],
    "ru": [
      "Теперь давайте рассмотрим реальный пример использования этих конфигураций, который должен помочь вам понять."
    ]
  },
  {
    "time": [
      1552.93,
      1555.69
    ],
    "en": [
      "then the ACL number, then IN or OUT."
    ],
    "ru": [
      "понимать. Вот та же сеть, что и раньше."
    ]
  },
  {
    "time": [
      1555.69,
      1561.15
    ],
    "en": [
      "Now let’s get into a real example of using these configurations, that should help you understand."
    ],
    "ru": [
      "Я приведу некоторые требования, и мы будем использовать списки управления доступом, чтобы ограничить трафик для выполнения этих требований."
    ]
  },
  {
    "time": [
      1561.15,
      1564.07
    ],
    "en": [
      "understand. Here’s the same network as before."
    ],
    "ru": [
      "эти требования. На R1 я настрою стандартные нумерованные списки ACL, как я только что показал вам, а затем представлю"
    ]
  },
  {
    "time": [
      1564.07,
      1570.71
    ],
    "en": [
      "I’ll give some requirements, and we’ll use ACLs to restrict the traffic to fulfill those requirements."
    ],
    "ru": [
      "стандартные именованные списки ACL, и мы настроим их на R2, чтобы вы могли увидеть, как настраивать оба типа."
    ]
  },
  {
    "time": [
      1570.71,
      1575.521
    ],
    "en": [
      "those requirements. On R1 I’ll configure standard numbered ACLs as I just showed you, then I’ll introduce"
    ],
    "ru": [
      "оба типа. Хорошо, сначала вот некоторые требования, которых мы можем достичь, настроив ACL на R1."
    ]
  },
  {
    "time": [
      1575.521,
      1581.78
    ],
    "en": [
      "standard named ACLs and we’ll configure them on R2, so you can see how to configure both types."
    ],
    "ru": [
      "ПК1 должен иметь доступ к сети 192.168.2.0/24, но другие ПК в 192.168.1.0/24 не должны"
    ]
  },
  {
    "time": [
      1581.78,
      1587.57
    ],
    "en": [
      "both types. Okay, first here are some requirements which we can achieve by configuring an ACL on R1."
    ],
    "ru": [
      "иметь доступ к 192.168.2.0/24."
    ]
  },
  {
    "time": [
      1587.57,
      1597.21
    ],
    "en": [
      "PC1 should be able to access the 192.168.2.0/24 network, but other PCs in 192.168.1.0/24 shouldn’t"
    ],
    "ru": [
      "Итак, вот как я настроил и применил ACL для выполнения этих требований."
    ]
  },
  {
    "time": [
      1597.21,
      1599.67
    ],
    "en": [
      "be able to access 192.168.2.0/24."
    ],
    "ru": [
      "Сначала я настроил ACL 1 с записью, разрешающей 192.168.1.1/32."
    ]
  },
  {
    "time": [
      1599.67,
      1606.0
    ],
    "en": [
      "So, here’s how I configured and applied an ACL to fulfill these requirements."
    ],
    "ru": [
      "Это выполнит первое требование, позволяющее ПК1 получить доступ к 192.168.2.0/24."
    ]
  },
  {
    "time": [
      1606.0,
      1612.52
    ],
    "en": [
      "First, I configured ACL 1 with an entry permitting 192.168.1.1/32."
    ],
    "ru": [
      "Затем я настроил запись, запрещающую сеть 192.168.1.0/24."
    ]
  },
  {
    "time": [
      1612.52,
      1619.5
    ],
    "en": [
      "That will achieve the first requirement, allowing PC1 to access 192.168.2.0/24."
    ],
    "ru": [
      "Это выполнит второе требование."
    ]
  },
  {
    "time": [
      1619.5,
      1624.44
    ],
    "en": [
      "Then I configured an entry denying the 192.168.1.0/24 network."
    ],
    "ru": [
      "Их порядок очень важен."
    ]
  },
  {
    "time": [
      1624.44,
      1626.94
    ],
    "en": [
      "This will fulfill the second requirement."
    ],
    "ru": [
      "Если я сначала отклоню 192.168.1.0/24, ПК1 не сможет получить доступ к 192.168.2.0/24, даже"
    ]
  },
  {
    "time": [
      1626.94,
      1629.0
    ],
    "en": [
      "The order of these is very important."
    ],
    "ru": [
      "если я поставлю разрешающий вход ПК1 после запрещающего входа."
    ]
  },
  {
    "time": [
      1629.0,
      1637.93
    ],
    "en": [
      "If I denied 192.168.1.0/24 first, PC1 would not be able to access 192.168.2.0/24, even"
    ],
    "ru": [
      "Помните, что списки ACL обрабатываются в порядке сверху вниз."
    ]
  },
  {
    "time": [
      1637.93,
      1641.929
    ],
    "en": [
      "if I put an entry permitting PC1 after the deny entry."
    ],
    "ru": [
      "Как только совпадение найдено, действие выполняется, и все оставшиеся записи после совпадения"
    ]
  },
  {
    "time": [
      1641.929,
      1645.04
    ],
    "en": [
      "Remember, ACLs are processed in order from top to bottom."
    ],
    "ru": [
      "записи не обрабатываются, они игнорируются."
    ]
  },
  {
    "time": [
      1645.04,
      1650.09
    ],
    "en": [
      "Once a match is found, the action is taken and any remaining entries after the matching"
    ],
    "ru": [
      "Наконец, я настроил разрешить любую запись в конце."
    ]
  },
  {
    "time": [
      1650.09,
      1652.71
    ],
    "en": [
      "entry are not processed, they are ignored."
    ],
    "ru": [
      "Помните о неявном отказе, скрытом в конце каждого ACL."
    ]
  },
  {
    "time": [
      1652.71,
      1656.21
    ],
    "en": [
      "Finally, I configured a permit any entry at the end."
    ],
    "ru": [
      "Если я не добавлю это разрешение в конце, ACL не будет блокировать только ПК в"
    ]
  },
  {
    "time": [
      1656.21,
      1660.32
    ],
    "en": [
      "Remember the implicit deny that is hidden at the end of every ACL."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1660.32,
      1665.35
    ],
    "en": [
      "If I don’t include this permit any at the end, the ACL won’t only block PCs in the"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1665.35,
      1670.01
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
      1665.35,
      1670.01
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
      1670.01,
      1677.98
    ],
    "en": [
      "The only device that will be able to access the 192.168.2.0/24 network would be 192.168.1.1, PC1."
    ],
    "ru": [
      "В наших требованиях не говорится о блокировке всего остального трафика, поэтому мы должны вставить это разрешение."
    ]
  },
  {
    "time": [
      1677.98,
      1682.179
    ],
    "en": [
      "PC1. Every single other device would be blocked."
    ],
    "ru": [
      "разрешить любой. Наконец, я применил ACL к интерфейсу G0 / 2 маршрутизатора R1 с IP ACCESS-GROUP 1 OUT."
    ]
  },
  {
    "time": [
      1682.179,
      1688.19
    ],
    "en": [
      "Our requirements don’t tell us to block all other traffic, so we should insert this permit any."
    ],
    "ru": [
      "Почему исходящий на G0 / 2?"
    ]
  },
  {
    "time": [
      1688.19,
      1694.13
    ],
    "en": [
      "permit any. Finally I applied the ACL to R1’s G0/2 interface with IP ACCESS-GROUP 1 OUT."
    ],
    "ru": [
      "Я мог бы, например, применить его для входящего трафика на G0 / 1."
    ]
  },
  {
    "time": [
      1694.13,
      1696.9
    ],
    "en": [
      "Why outbound on G0/2?"
    ],
    "ru": [
      "Что ж, вот хорошее практическое правило применения стандартных списков контроля доступа к интерфейсам."
    ]
  },
  {
    "time": [
      1696.9,
      1700.33
    ],
    "en": [
      "I could have, for example, applied it inbound on G0/1."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1700.33,
      1706.52
    ],
    "en": [
      "Well, here’s a good rule-of-thumb for applying standard ACLs to interfaces."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1706.52,
      1710.96
    ],
    "en": [
      "Standard ACLs should be applied as close to the destination as possible."
    ],
    "ru": [
      "Стандартные списки ACL следует применять как можно ближе к месту назначения."
    ]
  },
  {
    "time": [
      1710.96,
      1717.13
    ],
    "en": [
      "You may be thinking, what do I mean by ‘destination’, even though standard ACLs only filter by source IP?"
    ],
    "ru": [
      "Вы можете подумать, что я подразумеваю под «местом назначения», даже если стандартные ACL фильтруют только по IP-адресу источника?"
    ]
  },
  {
    "time": [
      1717.13,
      1726.29
    ],
    "en": [
      "IP? Well, in this case we are trying to control access to the 192.168.2.0/24 network, so that is the ‘destination’."
    ],
    "ru": [
      "IP? Что ж, в этом случае мы пытаемся контролировать доступ к сети 192.168.2.0/24, так что это «пункт назначения»."
    ]
  },
  {
    "time": [
      1726.29,
      1732.23
    ],
    "en": [
      "is the ‘destination’. If I applied ACL 1 inbound on R1’s G0/1 interface, it would prevent all PCs in the"
    ],
    "ru": [
      "это «пункт назначения». Если бы я применил входящий ACL 1 к интерфейсу G0 / 1 маршрутизатора R1, это предотвратило бы все ПК в"
    ]
  },
  {
    "time": [
      1732.23,
      1736.87
    ],
    "en": [
      "subnet except R1 from accessing anything outside of the local network."
    ],
    "ru": [
      "подсети, кроме R1, от доступа к чему-либо за пределами локальной сети."
    ]
  },
  {
    "time": [
      1736.87,
      1742.95
    ],
    "en": [
      "However, if I apply it correctly, outbound on G0/2, the ACL only controls traffic that"
    ],
    "ru": [
      "Однако, если я применяю его правильно, исходящий на G0 / 2, ACL контролирует только трафик, который"
    ]
  },
  {
    "time": [
      1742.95,
      1746.87
    ],
    "en": [
      "tries to access the 192.168.2.0/24 network."
    ],
    "ru": [
      "пытается получить доступ к сети 192.168.2.0/24."
    ]
  },
  {
    "time": [
      1746.87,
      1749.47
    ],
    "en": [
      "So, remember this rule-of-thumb."
    ],
    "ru": [
      "Итак, запомните это практическое правило."
    ]
  },
  {
    "time": [
      1749.47,
      1754.41
    ],
    "en": [
      "Standards ACLs should be applied as close to the destination as possible."
    ],
    "ru": [
      "Стандарты ACL следует применять как можно ближе к месту назначения."
    ]
  },
  {
    "time": [
      1754.41,
      1758.0
    ],
    "en": [
      "If you don’t do that, you might block more traffic than you intended."
    ],
    "ru": [
      "Если вы этого не сделаете, вы можете заблокировать больше трафика, чем планировали."
    ]
  },
  {
    "time": [
      1758.0,
      1761.83
    ],
    "en": [
      "Now let’s see how that ACL will work."
    ],
    "ru": [
      "Теперь посмотрим, как будет работать этот ACL."
    ]
  },
  {
    "time": [
      1761.83,
      1764.66
    ],
    "en": [
      "PC1 tries to ping PC3."
    ],
    "ru": [
      "ПК1 пытается отправить эхо-запрос на ПК3."
    ]
  },
  {
    "time": [
      1764.66,
      1767.08
    ],
    "en": [
      "The ping is received by R1."
    ],
    "ru": [
      "Пинг получен R1."
    ]
  },
  {
    "time": [
      1767.08,
      1772.309
    ],
    "en": [
      "It doesn’t check the ACL yet, because we didn’t apply it to the G0/1 interface."
    ],
    "ru": [
      "Он еще не проверяет ACL, потому что мы не применяли его к интерфейсу G0 / 1."
    ]
  },
  {
    "time": [
      1772.309,
      1778.59
    ],
    "en": [
      "R1 looks up the destination in its routing table, and sees it’s connected to the G0/2 interface."
    ],
    "ru": [
      "R1 ищет пункт назначения в своей таблице маршрутизации и видит, что он подключен к интерфейсу G0 / 2."
    ]
  },
  {
    "time": [
      1778.59,
      1786.059
    ],
    "en": [
      "interface. However, ACL 1 is applied outbound on G0/2, so before forwarding the ping it checks ACL 1."
    ],
    "ru": [
      "интерфейс. Однако ACL 1 применяется для исходящего трафика на G0 / 2, поэтому перед пересылкой эхо-запроса он проверяет ACL 1."
    ]
  },
  {
    "time": [
      1786.059,
      1790.02
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
      1786.059,
      1790.02
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
      1790.02,
      1797.75
    ],
    "en": [
      "The ping’s source is PC1, 192.168.1.1, so that’s a match."
    ],
    "ru": [
      "Источник пинга - PC1, 192.168.1.1, так что совпадение."
    ]
  },
  {
    "time": [
      1797.75,
      1802.76
    ],
    "en": [
      "It will take the action, which is to permit the packet, so it forwards it to PC3."
    ],
    "ru": [
      "Он выполнит действие, которое разрешит пакет, и переадресует его на ПК3."
    ]
  },
  {
    "time": [
      1802.76,
      1810.93
    ],
    "en": [
      "PC3 will be able to reply, because there is no ACL blocking the return path from PC3 to PC1."
    ],
    "ru": [
      "ПК3 сможет ответить, потому что нет ACL, блокирующего обратный путь от ПК3 к ПК1."
    ]
  },
  {
    "time": [
      1810.93,
      1813.33
    ],
    "en": [
      "PC1. What if PC2 tries to ping PC3?"
    ],
    "ru": [
      "ПК1. Что, если ПК2 попытается отправить эхо-запрос на ПК3?"
    ]
  },
  {
    "time": [
      1813.33,
      1820.82
    ],
    "en": [
      "R1 receives the ping on G0/1, but it doesn’t check the ACL because it’s not applied to that interface."
    ],
    "ru": [
      "R1 получает эхо-запрос на G0 / 1, но не проверяет ACL, потому что он не применяется к этому интерфейсу."
    ]
  },
  {
    "time": [
      1820.82,
      1824.05
    ],
    "en": [
      "that interface. Once again it checks the routing table and sees that it should forward the packet out"
    ],
    "ru": [
      "этот интерфейс. Еще раз он проверяет таблицу маршрутизации и видит, что он должен переслать пакет."
    ]
  },
  {
    "time": [
      1824.05,
      1830.98
    ],
    "en": [
      "of G0/2, but because ACL 1 is applied outbound on G0/2 it checks ACL 1 first."
    ],
    "ru": [
      "из G0 / 2, но поскольку ACL 1 применяется исходящим к G0 / 2, он сначала проверяет ACL 1."
    ]
  },
  {
    "time": [
      1830.98,
      1836.4470000000001
    ],
    "en": [
      "It checks the top entry first, permit 192.168.1.1/32."
    ],
    "ru": [
      "Сначала он проверяет верхнюю запись, разрешение 192.168.1.1/32."
    ]
  },
  {
    "time": [
      1836.4470000000001,
      1841.52
    ],
    "en": [
      "The source of the ping is 192.168.1.2, so it doesn’t match."
    ],
    "ru": [
      "Источник эхо-запроса - 192.168.1.2, поэтому он не совпадает."
    ]
  },
  {
    "time": [
      1841.52,
      1846.897
    ],
    "en": [
      "Then it checks the next entry, deny 192.168.1.0/24."
    ],
    "ru": [
      "Затем он проверяет следующую запись, отрицая 192.168.1.0/24."
    ]
  },
  {
    "time": [
      1846.897,
      1853.72
    ],
    "en": [
      "PC2’s IP is in this subnet, so it matches this entry and R1 takes the action, which is to deny."
    ],
    "ru": [
      "IP-адрес ПК2 находится в этой подсети, поэтому он соответствует этой записи, и R1 выполняет действие, которое отклоняет."
    ]
  },
  {
    "time": [
      1853.72,
      1855.58
    ],
    "en": [
      "is to deny. It won’t forward the ping to PC3."
    ],
    "ru": [
      "отрицать. Он не пересылает пинг на ПК3."
    ]
  },
  {
    "time": [
      1855.58,
      1861.27
    ],
    "en": [
      "Okay, now let’s move on to standard named ACLs."
    ],
    "ru": [
      "Хорошо, теперь перейдем к стандартным именованным ACL."
    ]
  },
  {
    "time": [
      1861.27,
      1865.96
    ],
    "en": [
      "Standard named ACLs are still standard ACLs, so they match traffic based only on the source"
    ],
    "ru": [
      "Стандартные именованные ACL по-прежнему являются стандартными ACL, поэтому они соответствуют трафику только на основе источника."
    ]
  },
  {
    "time": [
      1865.96,
      1867.97
    ],
    "en": [
      "IP address of the packet."
    ],
    "ru": [
      "IP-адрес пакета."
    ]
  },
  {
    "time": [
      1867.97,
      1872.17
    ],
    "en": [
      "However, instead of a number they are identified with a name."
    ],
    "ru": [
      "Однако вместо числа они отождествляются с именем."
    ]
  },
  {
    "time": [
      1872.17,
      1876.73
    ],
    "en": [
      "You could, for example, name the ACL ‘BLOCK_BOB’."
    ],
    "ru": [
      "Вы можете, например, назвать ACL «BLOCK_BOB»."
    ]
  },
  {
    "time": [
      1876.73,
      1881.7
    ],
    "en": [
      "Standard named ACLs are configured by entering ‘standard named ACL config mode’, and"
    ],
    "ru": [
      "Стандартные именованные списки ACL настраиваются путем входа в «стандартный именованный режим конфигурации ACL» и"
    ]
  },
  {
    "time": [
      1881.7,
      1884.03
    ],
    "en": [
      "then configuring each entry within that mode."
    ],
    "ru": [
      "затем настройте каждую запись в этом режиме."
    ]
  },
  {
    "time": [
      1884.03,
      1887.429
    ],
    "en": [
      "So, a little different than standard numbered ACLs."
    ],
    "ru": [
      "Итак, немного отличается от стандартных нумерованных ACL."
    ]
  },
  {
    "time": [
      1887.429,
      1894.26
    ],
    "en": [
      "Here’s how you enter that config mode, IP ACCESS-LIST STANDARD, followed by the name."
    ],
    "ru": [
      "Вот как вы входите в этот режим конфигурации: СТАНДАРТ СПИСКА ДОСТУПА IP, за которым следует имя."
    ]
  },
  {
    "time": [
      1894.26,
      1897.11
    ],
    "en": [
      "Remember to use IP in front of the command."
    ],
    "ru": [
      "Не забудьте использовать IP перед командой."
    ]
  },
  {
    "time": [
      1897.11,
      1904.1
    ],
    "en": [
      "For standard numbered ACLs the command is ACCESS-LIST, but in this case it’s IP ACCESS-LIST."
    ],
    "ru": [
      "Для стандартных нумерованных списков ACL используется команда ACCESS-LIST, но в данном случае это IP ACCESS-LIST."
    ]
  },
  {
    "time": [
      1904.1,
      1910.21
    ],
    "en": [
      "Then you enter standard named ACL config mode and configure the deny and permit entries."
    ],
    "ru": [
      "Затем вы входите в стандартный именованный режим конфигурации ACL и настраиваете запрещающие и разрешающие записи."
    ]
  },
  {
    "time": [
      1910.21,
      1915.302
    ],
    "en": [
      "Note that you can now specify an entry number before each entry, although you don’t have to."
    ],
    "ru": [
      "Обратите внимание, что теперь вы можете указывать номер записи перед каждой записью, хотя это и не обязательно."
    ]
  },
  {
    "time": [
      1915.302,
      1920.47
    ],
    "en": [
      "to. If you don’t entries will be numbered 10, then 20, then 30, etc, just like in the standard"
    ],
    "ru": [
      "к. Если вы этого не сделаете, записи будут пронумерованы 10, затем 20, затем 30 и т. Д., Как в стандартном"
    ]
  },
  {
    "time": [
      1920.47,
      1922.87
    ],
    "en": [
      "numbered ACLs we configured."
    ],
    "ru": [
      "нумерованные ACL, которые мы настроили."
    ]
  },
  {
    "time": [
      1922.87,
      1926.36
    ],
    "en": [
      "Each entry’s number will be 10 more than the previous one."
    ],
    "ru": [
      "Номер каждой записи будет на 10 больше, чем предыдущий."
    ]
  },
  {
    "time": [
      1926.36,
      1931.29
    ],
    "en": [
      "But with this function, you can manually specify the entry number to control the order of the entries."
    ],
    "ru": [
      "Но с помощью этой функции вы можете вручную указать номер записи, чтобы контролировать порядок записей."
    ]
  },
  {
    "time": [
      1931.29,
      1933.77
    ],
    "en": [
      "entries. So, here’s an example."
    ],
    "ru": [
      "записи. Итак, вот пример."
    ]
  },
  {
    "time": [
      1933.77,
      1939.99
    ],
    "en": [
      "First I create the ACL BLOCK_BOB and enter standard named ACL config mode."
    ],
    "ru": [
      "Сначала я создаю ACL BLOCK_BOB и вхожу в стандартный именованный режим конфигурации ACL."
    ]
  },
  {
    "time": [
      1939.99,
      1944.71
    ],
    "en": [
      "Then I configured a statement denying 1.1.1.1/32."
    ],
    "ru": [
      "Затем я настроил утверждение, запрещающее 1.1.1.1/32."
    ]
  },
  {
    "time": [
      1944.71,
      1949.99
    ],
    "en": [
      "Note that I manually configured the entry number of 5, instead of the default of 10."
    ],
    "ru": [
      "Обратите внимание, что я вручную настроил номер записи 5 вместо значения по умолчанию 10."
    ]
  },
  {
    "time": [
      1949.99,
      1953.25
    ],
    "en": [
      "Then I configured a permit any entry, with an entry number of 10."
    ],
    "ru": [
      "Затем я настроил разрешить любую запись с номером записи 10."
    ]
  },
  {
    "time": [
      1953.25,
      1956.04
    ],
    "en": [
      "I then configured a remark."
    ],
    "ru": [
      "Затем я настроил примечание."
    ]
  },
  {
    "time": [
      1956.04,
      1961.68
    ],
    "en": [
      "This isn’t necessary, of course, but remarks can be helpful when looking at the configuration later."
    ],
    "ru": [
      "Конечно, в этом нет необходимости, но замечания могут быть полезны при рассмотрении конфигурации позже."
    ]
  },
  {
    "time": [
      1961.68,
      1966.809
    ],
    "en": [
      "later. Then I moved to interface configuration mode, and applied the ACL in the same way as before,"
    ],
    "ru": [
      "потом. Затем я перешел в режим настройки интерфейса и применил ACL так же, как и раньше,"
    ]
  },
  {
    "time": [
      1966.809,
      1971.72
    ],
    "en": [
      "IP ACCESS-GROUP, ACL name, and then IN or OUT."
    ],
    "ru": [
      "ГРУППА ДОСТУПА IP, имя ACL, а затем ВХОД или ВЫХОД."
    ]
  },
  {
    "time": [
      1971.72,
      1974.929
    ],
    "en": [
      "Let’s check with some show commands."
    ],
    "ru": [
      "Давайте посмотрим на некоторые команды show."
    ]
  },
  {
    "time": [
      1974.929,
      1977.85
    ],
    "en": [
      "Once again, I used SHOW ACCESS-LISTS."
    ],
    "ru": [
      "Я снова использовал SHOW ACCESS-LISTS."
    ]
  },
  {
    "time": [
      1977.85,
      1983.56
    ],
    "en": [
      "The ACL is shown, and you can see each entry with the entry numbers I manually configured."
    ],
    "ru": [
      "Отображается ACL, и вы можете видеть каждую запись с номерами записей, которые я настроил вручную."
    ]
  },
  {
    "time": [
      1983.56,
      1985.65
    ],
    "en": [
      "Then I checked the running config."
    ],
    "ru": [
      "Затем я проверил работающую конфигурацию."
    ]
  },
  {
    "time": [
      1985.65,
      1990.87
    ],
    "en": [
      "Notice I used a different method of filtering the output, SECTION ACCESS-LIST."
    ],
    "ru": [
      "Обратите внимание, что я использовал другой метод фильтрации вывода, SECTION ACCESS-LIST."
    ]
  },
  {
    "time": [
      1990.87,
      1994.88
    ],
    "en": [
      "This displays just the ACL section of the running config."
    ],
    "ru": [
      "Это отображает только раздел ACL текущей конфигурации."
    ]
  },
  {
    "time": [
      1994.88,
      2000.21
    ],
    "en": [
      "If I used ‘INCLUDE ACCESS-LIST’ like before, it would display the ACL’s name."
    ],
    "ru": [
      "Если бы я использовал «INCLUDE ACCESS-LIST», как раньше, он бы отобразил имя ACL."
    ]
  },
  {
    "time": [
      2000.21,
      2004.799
    ],
    "en": [
      "However, it wouldn’t actually display any of the entries, since those lines of the config"
    ],
    "ru": [
      "Однако на самом деле он не будет отображать какие-либо записи, поскольку эти строки конфигурации"
    ]
  },
  {
    "time": [
      2004.799,
      2010.04
    ],
    "en": [
      "don’t include ACCESS-LIST, even though they are part of an access list."
    ],
    "ru": [
      "не включать ACCESS-LIST, даже если они являются частью списка доступа."
    ]
  },
  {
    "time": [
      2010.04,
      2013.92
    ],
    "en": [
      "When I filter using SECTION, I can view the whole ACL."
    ],
    "ru": [
      "Когда я фильтрую с помощью SECTION, я могу просмотреть весь ACL."
    ]
  },
  {
    "time": [
      2013.92,
      2018.45
    ],
    "en": [
      "You can see each entry including the remark, although interestingly the entry numbers are"
    ],
    "ru": [
      "Вы можете увидеть каждую запись, включая примечание, хотя, что интересно, номера записей"
    ]
  },
  {
    "time": [
      2018.45,
      2020.3
    ],
    "en": [
      "not displayed in the config."
    ],
    "ru": [
      "не отображается в конфиге."
    ]
  },
  {
    "time": [
      2020.3,
      2025.26
    ],
    "en": [
      "Okay, let’s try configuring some standard named ACLs on R2."
    ],
    "ru": [
      "Хорошо, давайте попробуем настроить несколько стандартных именованных списков ACL на R2."
    ]
  },
  {
    "time": [
      2025.26,
      2028.01
    ],
    "en": [
      "So, here are the requirements."
    ],
    "ru": [
      "Итак, вот требования."
    ]
  },
  {
    "time": [
      2028.01,
      2034.0
    ],
    "en": [
      "PCs in 192.168.1.0/24 can’t access 10.0.2.0/24."
    ],
    "ru": [
      "Компьютеры в 192.168.1.0/24 не могут получить доступ к 10.0.2.0/24."
    ]
  },
  {
    "time": [
      2034.0,
      2043.35
    ],
    "en": [
      "PC3 can’t access 10.0.1.0/24, but other PCs in 192.168.2.0/24 can."
    ],
    "ru": [
      "ПК3 не может получить доступ к 10.0.1.0/24, но другие ПК в 192.168.2.0/24 могут."
    ]
  },
  {
    "time": [
      2043.35,
      2051.09
    ],
    "en": [
      "PC1 can access 10.0.1.0/24, but other PCs in 192.168.1.0/24 can’t."
    ],
    "ru": [
      "ПК1 может получить доступ к 10.0.1.0/24, но другие ПК в 192.168.1.0/24 не могут."
    ]
  },
  {
    "time": [
      2051.09,
      2055.34
    ],
    "en": [
      "We’ll need two ACLs to do this properly."
    ],
    "ru": [
      "Для этого нам понадобятся два ACL."
    ]
  },
  {
    "time": [
      2055.34,
      2058.49
    ],
    "en": [
      "If you think you can, try to solve this yourself."
    ],
    "ru": [
      "Если вы думаете, что можете, попробуйте решить эту проблему самостоятельно."
    ]
  },
  {
    "time": [
      2058.49,
      2060.02
    ],
    "en": [
      "But I’ll show you my solution."
    ],
    "ru": [
      "Но я покажу вам свое решение."
    ]
  },
  {
    "time": [
      2060.02,
      2069.8
    ],
    "en": [
      "So, we’ll configure one ACL to control access to 10.0.2.0/24 and apply it outbound on R2’s G0/2."
    ],
    "ru": [
      "Итак, мы настроим один ACL для управления доступом к 10.0.2.0/24 и применим его исходящий к G0 / 2 R2."
    ]
  },
  {
    "time": [
      2069.8,
      2077.75
    ],
    "en": [
      "G0/2. Then we’ll configure another ACL to control access to 10.0.1.0/24 and apply it outbound on R2’s G0/1."
    ],
    "ru": [
      "G0 / 2. Затем мы настроим еще один ACL для управления доступом к 10.0.1.0/24 и применим его исходящий к G0 / 1 R2."
    ]
  },
  {
    "time": [
      2077.75,
      2079.49
    ],
    "en": [
      "on R2’s G0/1. Here’s how I did that."
    ],
    "ru": [
      "на G0 / 1 R2. Вот как я это сделал."
    ]
  },
  {
    "time": [
      2079.49,
      2086.13
    ],
    "en": [
      "Here’s the first ACL, I called it TO_10.0.2.0/24."
    ],
    "ru": [
      "Вот первый ACL, я назвал его TO_10.0.2.0 / 24."
    ]
  },
  {
    "time": [
      2086.13,
      2092.48
    ],
    "en": [
      "First I denied the 192.168.1.0/24 network, but permitted other traffic."
    ],
    "ru": [
      "Сначала я запретил сеть 192.168.1.0/24, но разрешил другой трафик."
    ]
  },
  {
    "time": [
      2092.48,
      2094.54
    ],
    "en": [
      "Then I applied it outbound on G0/2."
    ],
    "ru": [
      "Потом применил исходящий на G0 / 2."
    ]
  },
  {
    "time": [
      2094.54,
      2102.1
    ],
    "en": [
      "So, PC1 and PC2 will be blocked from accessing SRV2, but PC3 and PC4 will be able to."
    ],
    "ru": [
      "Таким образом, ПК1 и ПК2 будут заблокированы для доступа к SRV2, но ПК3 и ПК4 смогут."
    ]
  },
  {
    "time": [
      2102.1,
      2104.94
    ],
    "en": [
      "Okay, that’s the first ACL."
    ],
    "ru": [
      "Хорошо, это первый ACL."
    ]
  },
  {
    "time": [
      2104.94,
      2110.26
    ],
    "en": [
      "I called the second ACL TO_10.0.1.0/24."
    ],
    "ru": [
      "Я назвал второй ACL TO_10.0.1.0 / 24."
    ]
  },
  {
    "time": [
      2110.26,
      2114.58
    ],
    "en": [
      "First I denied PC3, 192.168.2.1."
    ],
    "ru": [
      "Сначала я отказал PC3, 192.168.2.1."
    ]
  },
  {
    "time": [
      2114.58,
      2117.83
    ],
    "en": [
      "Then I permitted the rest of the PCs in PC3’s network."
    ],
    "ru": [
      "Затем я разрешил остальные ПК в сети PC3."
    ]
  },
  {
    "time": [
      2117.83,
      2123.48
    ],
    "en": [
      "I then permitted PC1, but denied the other PCs in PC1’s network."
    ],
    "ru": [
      "Затем я разрешил ПК1, но отказал другим ПК в сети ПК1."
    ]
  },
  {
    "time": [
      2123.48,
      2126.21
    ],
    "en": [
      "Then I permitted all other traffic."
    ],
    "ru": [
      "Затем я разрешил весь остальной трафик."
    ]
  },
  {
    "time": [
      2126.21,
      2131.72
    ],
    "en": [
      "Finally I applied the ACL outbound on the G0/1 interface. And that’s it."
    ],
    "ru": [
      "Наконец, я применил исходящий ACL к интерфейсу G0 / 1. Вот и все."
    ]
  },
  {
    "time": [
      2131.72,
      2135.52
    ],
    "en": [
      "And that’s it. ACL configuration can be flexible sometimes, so there are other ways to configure these"
    ],
    "ru": [
      "Вот и все. Конфигурация ACL иногда может быть гибкой, поэтому есть другие способы настройки этих"
    ]
  },
  {
    "time": [
      2135.52,
      2137.34
    ],
    "en": [
      "ACLs that will work, too."
    ],
    "ru": [
      "ACL тоже будут работать."
    ]
  },
  {
    "time": [
      2137.34,
      2139.2
    ],
    "en": [
      "But this is my solution."
    ],
    "ru": [
      "Но это мое решение."
    ]
  },
  {
    "time": [
      2139.2,
      2144.28
    ],
    "en": [
      "Let’s check those ACLs with SHOW IP ACCESS-LISTS."
    ],
    "ru": [
      "Давайте проверим эти ACL с помощью SHOW IP ACCESS-LISTS."
    ]
  },
  {
    "time": [
      2144.28,
      2150.07
    ],
    "en": [
      "Do you notice something strange about the TO_10.0.1.0/24 ACL?"
    ],
    "ru": [
      "Вы заметили что-то странное в TO_10.0.1.0 / 24 ACL?"
    ]
  },
  {
    "time": [
      2150.07,
      2151.109
    ],
    "en": [
      "Look at the sequence numbers."
    ],
    "ru": [
      "Посмотрите на порядковые номера."
    ]
  },
  {
    "time": [
      2151.109,
      2155.869
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
      2151.109,
      2155.869
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
      2155.869,
      2158.49
    ],
    "en": [
      "And look at the order I configured them."
    ],
    "ru": [
      "И посмотрите, в каком порядке я их настраивал."
    ]
  },
  {
    "time": [
      2158.49,
      2162.93
    ],
    "en": [
      "The sequence numbers match the order I configured the entries, but their actual order in the"
    ],
    "ru": [
      "Порядковые номера соответствуют порядку, в котором я настроил записи, но их фактический порядок в"
    ]
  },
  {
    "time": [
      2162.93,
      2166.5
    ],
    "en": [
      "ACL is totally different. Why is that?"
    ],
    "ru": [
      "ACL - это совсем другое дело. Это почему?"
    ]
  },
  {
    "time": [
      2166.5,
      2171.79
    ],
    "en": [
      "Why is that? This is a very advanced question about the internal operations of Cisco IOS and how ACLs"
    ],
    "ru": [
      "Это почему? Это очень сложный вопрос о внутренних операциях Cisco IOS и о том, как ACL"
    ]
  },
  {
    "time": [
      2171.79,
      2178.33
    ],
    "en": [
      "are processed, you definitely won’t find this on the CCNA exam but let me briefly summarize it."
    ],
    "ru": [
      "обрабатываются, вы определенно не найдете этого на экзамене CCNA, но позвольте мне кратко подвести итог."
    ]
  },
  {
    "time": [
      2178.33,
      2184.41
    ],
    "en": [
      "it. The router may re-order the /32 entries, the entries that match only a single specific host."
    ],
    "ru": [
      "Это. Маршрутизатор может переупорядочить записи / 32, записи, соответствующие только одному конкретному хосту."
    ]
  },
  {
    "time": [
      2184.41,
      2187.57
    ],
    "en": [
      "host. This improves the efficiency of processing the ACL."
    ],
    "ru": [
      "хозяин. Это повышает эффективность обработки ACL."
    ]
  },
  {
    "time": [
      2187.57,
      2191.22
    ],
    "en": [
      "However, it does not change the overall effect of the ACL."
    ],
    "ru": [
      "Однако это не меняет общего эффекта ACL."
    ]
  },
  {
    "time": [
      2191.22,
      2195.47
    ],
    "en": [
      "So, it makes sense for the router to change the order if it helps the router process it"
    ],
    "ru": [
      "Таким образом, для маршрутизатора имеет смысл изменить порядок, если он помогает маршрутизатору обрабатывать его."
    ]
  },
  {
    "time": [
      2195.47,
      2199.1
    ],
    "en": [
      "more efficiently without affecting the outcome."
    ],
    "ru": [
      "более эффективно, не влияя на результат."
    ]
  },
  {
    "time": [
      2199.1,
      2203.77
    ],
    "en": [
      "Note that this is done for both standard named and standard numbered ACLs, it just didn’t"
    ],
    "ru": [
      "Обратите внимание, что это сделано как для стандартных именованных, так и для стандартных нумерованных списков ACL, просто не"
    ]
  },
  {
    "time": [
      2203.77,
      2208.52
    ],
    "en": [
      "apply to the simpler examples I showed for standard numbered ACLs."
    ],
    "ru": [
      "применим к более простым примерам, которые я показал для стандартных нумерованных списков контроля доступа."
    ]
  },
  {
    "time": [
      2208.52,
      2212.8
    ],
    "en": [
      "Also note that I checked in Packet Tracer, and Packet Tracer does not do this."
    ],
    "ru": [
      "Также обратите внимание, что я проверил в Packet Tracer, а Packet Tracer этого не делает."
    ]
  },
  {
    "time": [
      2212.8,
      2218.83
    ],
    "en": [
      "It will simply display the entries in order of sequence number, as you would expect."
    ],
    "ru": [
      "Он просто отобразит записи в порядке порядковых номеров, как и следовало ожидать."
    ]
  },
  {
    "time": [
      2218.83,
      2223.72
    ],
    "en": [
      "Before finishing up, I’ll just walk through one more example of an ACL being processed."
    ],
    "ru": [
      "Прежде чем закончить, я просто рассмотрю еще один пример обрабатываемого ACL."
    ]
  },
  {
    "time": [
      2223.72,
      2228.82
    ],
    "en": [
      "PC2 wants to access server 1, so it pings to test connectivity."
    ],
    "ru": [
      "ПК2 хочет получить доступ к серверу 1, поэтому он выполняет эхо-запрос для проверки возможности подключения."
    ]
  },
  {
    "time": [
      2228.82,
      2234.03
    ],
    "en": [
      "The ping reaches R2, which is directly connected to SRV1’s network."
    ],
    "ru": [
      "Пинг достигает R2, который напрямую подключен к сети SRV1."
    ]
  },
  {
    "time": [
      2234.03,
      2241.34
    ],
    "en": [
      "However, the TO_10.0.1.0/24 ACL is applied outbound to G0/1 so R2 will check the packet"
    ],
    "ru": [
      "Однако ACL TO_10.0.1.0 / 24 применяется для исходящего трафика к G0 / 1, поэтому R2 проверит пакет."
    ]
  },
  {
    "time": [
      2241.34,
      2244.19
    ],
    "en": [
      "against that ACL before forwarding it."
    ],
    "ru": [
      "против этого ACL перед его пересылкой."
    ]
  },
  {
    "time": [
      2244.19,
      2249.32
    ],
    "en": [
      "The source is 192.168.1.2, so it doesn’t match the top entry."
    ],
    "ru": [
      "Источник - 192.168.1.2, поэтому он не соответствует верхней записи."
    ]
  },
  {
    "time": [
      2249.32,
      2252.43
    ],
    "en": [
      "It doesn’t match the next one either, or the next one."
    ],
    "ru": [
      "Он не соответствует ни следующему, ни следующему."
    ]
  },
  {
    "time": [
      2252.43,
      2258.86
    ],
    "en": [
      "However, it matches entry 40, because the source is in the 192.168.1.0/24 network."
    ],
    "ru": [
      "Однако он соответствует записи 40, поскольку источник находится в сети 192.168.1.0/24."
    ]
  },
  {
    "time": [
      2258.86,
      2263.119
    ],
    "en": [
      "So, it denies the packet, it does not forward it to SRV1."
    ],
    "ru": [
      "Таким образом, он отклоняет пакет, он не пересылает его в SRV1."
    ]
  },
  {
    "time": [
      2263.119,
      2267.56
    ],
    "en": [
      "Okay, let’s review and then move on to the quiz."
    ],
    "ru": [
      "Хорошо, давайте еще раз рассмотрим, а затем перейдем к викторине."
    ]
  },
  {
    "time": [
      2267.56,
      2270.49
    ],
    "en": [
      "In this video I covered what ACLs are."
    ],
    "ru": [
      "В этом видео я рассказал, что такое ACL."
    ]
  },
  {
    "time": [
      2270.49,
      2274.55
    ],
    "en": [
      "They are used to identify and control traffic in the network."
    ],
    "ru": [
      "Они используются для идентификации и контроля трафика в сети."
    ]
  },
  {
    "time": [
      2274.55,
      2278.369
    ],
    "en": [
      "I introduced ACL logic, how ACLs are processed."
    ],
    "ru": [
      "Я представил логику ACL, как обрабатываются ACL."
    ]
  },
  {
    "time": [
      2278.369,
      2283.45
    ],
    "en": [
      "The entries in an ACL are processed from top to bottom, and once a matching entry is found"
    ],
    "ru": [
      "Записи в ACL обрабатываются сверху вниз, и как только соответствующая запись найдена"
    ]
  },
  {
    "time": [
      2283.45,
      2287.369
    ],
    "en": [
      "the action is taken and the remaining entries are not processed."
    ],
    "ru": [
      "действие выполняется, а остальные записи не обрабатываются."
    ]
  },
  {
    "time": [
      2287.369,
      2291.77
    ],
    "en": [
      "I introduced the ACL types you need to know for the CCNA."
    ],
    "ru": [
      "Я представил типы ACL, которые вам нужно знать для CCNA."
    ]
  },
  {
    "time": [
      2291.77,
      2299.66
    ],
    "en": [
      "They are standard ACLs and extended ACLs, and each of those can be configured as numbered or named ACLs."
    ],
    "ru": [
      "Это стандартные и расширенные списки ACL, и каждый из них может быть настроен как нумерованный или именованный."
    ]
  },
  {
    "time": [
      2299.66,
      2304.09
    ],
    "en": [
      "or named ACLs. In this video I covered standard ACLs, which are simple and just match traffic based on"
    ],
    "ru": [
      "или именованные ACL. В этом видео я рассмотрел стандартные ACL, которые просты и соответствуют трафику на основе"
    ]
  },
  {
    "time": [
      2304.09,
      2306.23
    ],
    "en": [
      "the source IP address of the packet."
    ],
    "ru": [
      "исходный IP-адрес пакета."
    ]
  },
  {
    "time": [
      2306.23,
      2314.13
    ],
    "en": [
      "I showed two main ways of configuring standard ACLs, standard numbered ACLs and standard named ACLs."
    ],
    "ru": [
      "Я показал два основных способа настройки стандартных ACL, стандартных нумерованных ACL и стандартных именованных ACL."
    ]
  },
  {
    "time": [
      2314.13,
      2318.53
    ],
    "en": [
      "named ACLs. They are both just different ways of configuring standard ACLs."
    ],
    "ru": [
      "именованные ACL. Это просто разные способы настройки стандартных списков контроля доступа."
    ]
  },
  {
    "time": [
      2318.53,
      2322.58
    ],
    "en": [
      "Standard numbered ACLs are configured like this, a series of entries configured in global"
    ],
    "ru": [
      "Стандартные нумерованные ACL настроены следующим образом: набор записей настроен в глобальном"
    ]
  },
  {
    "time": [
      2322.58,
      2326.27
    ],
    "en": [
      "config mode with the ACCESS-LIST command."
    ],
    "ru": [
      "config с помощью команды ACCESS-LIST."
    ]
  },
  {
    "time": [
      2326.27,
      2332.131
    ],
    "en": [
      "For standard named ACLs, you use the IP ACCESS-LIST command to enter standard named ACL config"
    ],
    "ru": [
      "Для стандартных именованных списков ACL используйте команду IP ACCESS-LIST для ввода стандартной именованной конфигурации ACL."
    ]
  },
  {
    "time": [
      2332.131,
      2335.55
    ],
    "en": [
      "mode, and then configure the entries."
    ],
    "ru": [
      "режим, а затем настройте записи."
    ]
  },
  {
    "time": [
      2335.55,
      2340.19
    ],
    "en": [
      "Make sure to watch until the end of today’s quiz for a bonus question from Boson ExSim,"
    ],
    "ru": [
      "Обязательно просмотрите до конца сегодняшнюю викторину, чтобы узнать о бонусном вопросе от Boson ExSim,"
    ]
  },
  {
    "time": [
      2340.19,
      2343.93
    ],
    "en": [
      "the best practice exams for the CCNA, CCNP, and more."
    ],
    "ru": [
      "лучшие практические экзамены на CCNA, CCNP и другие."
    ]
  },
  {
    "time": [
      2343.93,
      2349.21
    ],
    "en": [
      "Okay, let’s go to question 1 of the quiz."
    ],
    "ru": [
      "Хорошо, перейдем к первому вопросу викторины."
    ]
  },
  {
    "time": [
      2349.21,
      2358.65
    ],
    "en": [
      "Which ACL, when applied outbound on R2’s G0/1, permits only PC1 and PC4 to access 10.0.1.0/24?"
    ],
    "ru": [
      "Какой ACL при применении исходящего трафика к G0 / 1 R2 разрешает только ПК1 и ПК4 доступ к 10.0.1.0/24?"
    ]
  },
  {
    "time": [
      2358.65,
      2362.74
    ],
    "en": [
      "Here are four ACLs, which one fulfills that requirement?"
    ],
    "ru": [
      "Вот четыре ACL, какой из них соответствует этому требованию?"
    ]
  },
  {
    "time": [
      2362.74,
      2368.34
    ],
    "en": [
      "Pause the video to think about your answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      2368.34,
      2370.81
    ],
    "en": [
      "The answer is ACL 1."
    ],
    "ru": [
      "Ответ - ACL 1."
    ]
  },
  {
    "time": [
      2370.81,
      2375.04
    ],
    "en": [
      "Entry 10 permits PC1 and entry 20 permits PC4."
    ],
    "ru": [
      "Запись 10 разрешает ПК1, а запись 20 разрешает ПК4."
    ]
  },
  {
    "time": [
      2375.04,
      2377.71
    ],
    "en": [
      "The implicit deny will deny all other traffic."
    ],
    "ru": [
      "Неявный отказ будет запрещать весь другой трафик."
    ]
  },
  {
    "time": [
      2377.71,
      2382.72
    ],
    "en": [
      "So, ACL 1 fulfills the requirements, and the other ACLs do not."
    ],
    "ru": [
      "Итак, ACL 1 удовлетворяет требованиям, а другие ACL - нет."
    ]
  },
  {
    "time": [
      2382.72,
      2386.6
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
      2386.6,
      2392.29
    ],
    "en": [
      "Which interface should the following ACL be applied to, and in which direction, to fulfill the requirement?"
    ],
    "ru": [
      "К какому интерфейсу следует применить следующий ACL и в каком направлении, чтобы выполнить требование?"
    ]
  },
  {
    "time": [
      2392.29,
      2395.75
    ],
    "en": [
      "the requirement? Here’s the ACL, and here’s the requirement."
    ],
    "ru": [
      "требование? Вот список контроля доступа и требования."
    ]
  },
  {
    "time": [
      2395.75,
      2401.87
    ],
    "en": [
      "Pause the video to think about your answer. Here’s the answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом. Вот ответ."
    ]
  },
  {
    "time": [
      2401.87,
      2406.77
    ],
    "en": [
      "Here’s the answer. The interface should be R2’s G0/2 interface, and the direction should be outbound."
    ],
    "ru": [
      "Вот ответ. Интерфейс должен быть интерфейсом G0 / 2 R2, а направление должно быть исходящим."
    ]
  },
  {
    "time": [
      2406.77,
      2413.76
    ],
    "en": [
      "Remember that rule-of-thumb, standard ACLs should be applied as close to the destination as possible."
    ],
    "ru": [
      "Помните, что стандартные списки ACL следует применять как можно ближе к месту назначения."
    ]
  },
  {
    "time": [
      2413.76,
      2419.9
    ],
    "en": [
      "as possible. We are controlling access to 10.0.2.0/24, so that is the destination."
    ],
    "ru": [
      "насколько возможно. Мы контролируем доступ к 10.0.2.0/24, так что это пункт назначения."
    ]
  },
  {
    "time": [
      2419.9,
      2424.08
    ],
    "en": [
      "Therefore the ACL should be applied outbound on R2’s G0/2."
    ],
    "ru": [
      "Следовательно, ACL следует применять для исходящего трафика на G0 / 2 маршрутизатора R2."
    ]
  },
  {
    "time": [
      2424.08,
      2427.83
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
      2427.83,
      2430.48
    ],
    "en": [
      "You issue the following commands on R2."
    ],
    "ru": [
      "Вы вводите следующие команды на R2."
    ]
  },
  {
    "time": [
      2430.48,
      2434.26
    ],
    "en": [
      "Which statement about the effect of the configurations is correct?"
    ],
    "ru": [
      "Какое утверждение о влиянии конфигураций является правильным?"
    ]
  },
  {
    "time": [
      2434.26,
      2436.57
    ],
    "en": [
      "Here are the configurations on R2."
    ],
    "ru": [
      "Вот конфигурации на R2."
    ]
  },
  {
    "time": [
      2436.57,
      2438.04
    ],
    "en": [
      "And here are the options."
    ],
    "ru": [
      "А вот варианты."
    ]
  },
  {
    "time": [
      2438.04,
      2440.66
    ],
    "en": [
      "A, all traffic will be denied."
    ],
    "ru": [
      "A, весь трафик будет запрещен."
    ]
  },
  {
    "time": [
      2440.66,
      2445.55
    ],
    "en": [
      "B, traffic from the 10.0.0.0/24 network will be denied."
    ],
    "ru": [
      "B, трафик из сети 10.0.0.0/24 будет запрещен."
    ]
  },
  {
    "time": [
      2445.55,
      2450.83
    ],
    "en": [
      "C, traffic from the 172.16.0.0/24 network will be denied."
    ],
    "ru": [
      "C, трафик из сети 172.16.0.0/24 будет запрещен."
    ]
  },
  {
    "time": [
      2450.83,
      2457.12
    ],
    "en": [
      "Or D, traffic from the 192.168.0.0/24 network will be denied."
    ],
    "ru": [
      "Или D, трафик из сети 192.168.0.0/24 будет запрещен."
    ]
  },
  {
    "time": [
      2457.12,
      2462.0
    ],
    "en": [
      "Pause the video to think about your answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      2462.0,
      2468.03
    ],
    "en": [
      "The answer is B, traffic from the 10.0.0.0/24 network will be denied."
    ],
    "ru": [
      "Ответ - B, трафик из сети 10.0.0.0/24 будет запрещен."
    ]
  },
  {
    "time": [
      2468.03,
      2472.16
    ],
    "en": [
      "Each interface can only have one ACL applied in each direction."
    ],
    "ru": [
      "К каждому интерфейсу может быть применен только один ACL в каждом направлении."
    ]
  },
  {
    "time": [
      2472.16,
      2478.78
    ],
    "en": [
      "If you apply another ACL to the same interface in the same direction, it will replace the previous one."
    ],
    "ru": [
      "Если вы примените другой ACL к тому же интерфейсу в том же направлении, он заменит предыдущий."
    ]
  },
  {
    "time": [
      2478.78,
      2484.77
    ],
    "en": [
      "previous one. In this case, the last ACL you applied was ACL 10, which denies traffic from 10.0.0.0/24,"
    ],
    "ru": [
      "Предыдущая. В этом случае последним примененным вами ACL был ACL 10, который запрещает трафик от 10.0.0.0/24,"
    ]
  },
  {
    "time": [
      2484.77,
      2487.76
    ],
    "en": [
      "so B is the correct answer."
    ],
    "ru": [
      "так что B - правильный ответ."
    ]
  },
  {
    "time": [
      2487.76,
      2491.76
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
      2491.76,
      2498.17
    ],
    "en": [
      "If this ACL is applied inbound on R1 G0/0, which PCs will be able to ping SRV2?"
    ],
    "ru": [
      "Если этот ACL применяется для входящего трафика на R1 G0 / 0, какие компьютеры смогут пинговать SRV2?"
    ]
  },
  {
    "time": [
      2498.17,
      2500.849
    ],
    "en": [
      "A, PC1 and PC2."
    ],
    "ru": [
      "А, ПК1 и ПК2."
    ]
  },
  {
    "time": [
      2500.849,
      2506.11
    ],
    "en": [
      "B, PC1, PC2, and PC4. C, PC1 only."
    ],
    "ru": [
      "B, ПК1, ПК2 и ПК4. Только C, PC1."
    ]
  },
  {
    "time": [
      2506.11,
      2507.76
    ],
    "en": [
      "C, PC1 only. D, all PCs."
    ],
    "ru": [
      "Только C, PC1. D, все ПК."
    ]
  },
  {
    "time": [
      2507.76,
      2511.44
    ],
    "en": [
      "Or E, PC3 and PC4 only."
    ],
    "ru": [
      "Или только E, PC3 и PC4."
    ]
  },
  {
    "time": [
      2511.44,
      2517.52
    ],
    "en": [
      "Pause the video to think about your answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      2517.52,
      2520.02
    ],
    "en": [
      "The answer is D, all PCs."
    ],
    "ru": [
      "Ответ - D, все ПК."
    ]
  },
  {
    "time": [
      2520.02,
      2526.04
    ],
    "en": [
      "This is because of where the ACL was applied, inbound on R1’s G0/0 interface."
    ],
    "ru": [
      "Это связано с тем, где был применен ACL, входящий в интерфейс G0 / 0 маршрутизатора R1."
    ]
  },
  {
    "time": [
      2526.04,
      2532.93
    ],
    "en": [
      "When the PCs try to ping SRV2, R1 won’t check the ACL as it sends the pings out of G0/0."
    ],
    "ru": [
      "Когда ПК пытаются проверить связь с SRV2, R1 не будет проверять ACL, поскольку он отправляет эхо-запросы из G0 / 0."
    ]
  },
  {
    "time": [
      2532.93,
      2538.28
    ],
    "en": [
      "G0/0. When the reply from SRV2 arrives on R1’s G0/0 interface, it will check the ACL."
    ],
    "ru": [
      "G0 / 0. Когда ответ от SRV2 приходит на интерфейс G0 / 0 маршрутизатора R1, он проверяет ACL."
    ]
  },
  {
    "time": [
      2538.28,
      2544.71
    ],
    "en": [
      "However, the source of the reply will be SRV2’s IP of 10.0.2.100, which will be permitted"
    ],
    "ru": [
      "Однако источником ответа будет IP-адрес SRV2 10.0.2.100, который будет разрешен."
    ]
  },
  {
    "time": [
      2544.71,
      2547.67
    ],
    "en": [
      "by the ‘permit any’ at the end of the ACL."
    ],
    "ru": [
      "с помощью «разрешить любой» в конце ACL."
    ]
  },
  {
    "time": [
      2547.67,
      2551.52
    ],
    "en": [
      "So, all PCs will be able to successfully ping SRV2."
    ],
    "ru": [
      "Таким образом, все компьютеры смогут успешно пинговать SRV2."
    ]
  },
  {
    "time": [
      2551.52,
      2556.19
    ],
    "en": [
      "Okay, let’s go to question 5."
    ],
    "ru": [
      "Хорошо, перейдем к вопросу 5."
    ]
  },
  {
    "time": [
      2556.19,
      2559.52
    ],
    "en": [
      "What happens if a packet doesn’t match any entries of an ACL?"
    ],
    "ru": [
      "Что произойдет, если пакет не соответствует ни одной записи ACL?"
    ]
  },
  {
    "time": [
      2559.52,
      2563.109
    ],
    "en": [
      "A, the packet will be forwarded to the default gateway."
    ],
    "ru": [
      "A, пакет будет перенаправлен на шлюз по умолчанию."
    ]
  },
  {
    "time": [
      2563.109,
      2567.0
    ],
    "en": [
      "B, the packet will be checked using the next available ACL."
    ],
    "ru": [
      "B, пакет будет проверен с использованием следующего доступного ACL."
    ]
  },
  {
    "time": [
      2567.0,
      2569.75
    ],
    "en": [
      "C, the packet will be dropped."
    ],
    "ru": [
      "C, пакет будет отброшен."
    ]
  },
  {
    "time": [
      2569.75,
      2573.7
    ],
    "en": [
      "Or D, the action of the most specific match will be taken."
    ],
    "ru": [
      "Или D, будет выполнено действие наиболее конкретного совпадения."
    ]
  },
  {
    "time": [
      2573.7,
      2578.359
    ],
    "en": [
      "Pause the video to think about your answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      2578.359,
      2581.18
    ],
    "en": [
      "The answer is C, the packet will be dropped."
    ],
    "ru": [
      "Ответ - C, пакет будет отброшен."
    ]
  },
  {
    "time": [
      2581.18,
      2586.03
    ],
    "en": [
      "Every ACL includes an ‘implicit deny’ at the end which will deny all packets that"
    ],
    "ru": [
      "Каждый ACL включает в себя «неявное отклонение» в конце, которое будет отклонять все пакеты, которые"
    ]
  },
  {
    "time": [
      2586.03,
      2588.3
    ],
    "en": [
      "don’t match any of the ACL’s entries."
    ],
    "ru": [
      "не соответствуют ни одной из записей ACL."
    ]
  },
  {
    "time": [
      2588.3,
      2590.49
    ],
    "en": [
      "So, C is the correct answer."
    ],
    "ru": [
      "Итак, C - правильный ответ."
    ]
  },
  {
    "time": [
      2590.49,
      2593.21
    ],
    "en": [
      "Okay, that’s all for the quiz."
    ],
    "ru": [
      "Ладно, это все для викторины."
    ]
  },
  {
    "time": [
      2593.21,
      2598.41
    ],
    "en": [
      "Now let’s take a look at a bonus question from Boson ExSim for CCNA."
    ],
    "ru": [
      "Теперь давайте взглянем на дополнительный вопрос от Boson ExSim для CCNA."
    ]
  },
  {
    "time": [
      2598.41,
      2603.51
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
      2603.51,
      2606.92
    ],
    "en": [
      "Which of the following statements is true regarding ACLs?"
    ],
    "ru": [
      "Какое из следующих утверждений относительно списков ACL верно?"
    ]
  },
  {
    "time": [
      2606.92,
      2608.4
    ],
    "en": [
      "Select the best answer."
    ],
    "ru": [
      "Выберите лучший ответ."
    ]
  },
  {
    "time": [
      2608.4,
      2614.31
    ],
    "en": [
      "A, ACLs are processed from the least specific entry to the most specific entry."
    ],
    "ru": [
      "A, ACL обрабатываются от наименее конкретной записи до наиболее конкретной."
    ]
  },
  {
    "time": [
      2614.31,
      2619.369
    ],
    "en": [
      "B, ACLs are processed from the first entry in the list to the last entry."
    ],
    "ru": [
      "B, ACL обрабатываются от первой записи в списке до последней записи."
    ]
  },
  {
    "time": [
      2619.369,
      2624.54
    ],
    "en": [
      "C, ACLs are processed from the last entry in the list to the first entry."
    ],
    "ru": [
      "C, ACL обрабатываются от последней записи в списке до первой записи."
    ]
  },
  {
    "time": [
      2624.54,
      2630.09
    ],
    "en": [
      "Or D, ACLs are processed from the most specific entry in the list to the least specific entry."
    ],
    "ru": [
      "Или D, списки управления доступом обрабатываются от наиболее конкретной записи в списке до наименее конкретной."
    ]
  },
  {
    "time": [
      2630.09,
      2634.41
    ],
    "en": [
      "Okay, if you just watched the video you should be able to answer this question."
    ],
    "ru": [
      "Хорошо, если вы только что посмотрели видео, вы сможете ответить на этот вопрос."
    ]
  },
  {
    "time": [
      2634.41,
      2638.62
    ],
    "en": [
      "So, pause the video now to think about the answer."
    ],
    "ru": [
      "Итак, остановите видео сейчас, чтобы подумать над ответом."
    ]
  },
  {
    "time": [
      2638.62,
      2642.28
    ],
    "en": [
      "Okay, so let's check."
    ],
    "ru": [
      "Хорошо, давай проверим."
    ]
  },
  {
    "time": [
      2642.28,
      2647.51
    ],
    "en": [
      "As I mentioned in the video, ACLs are processed from top to bottom, and what that means is"
    ],
    "ru": [
      "Как я уже упоминал в видео, списки управления доступом обрабатываются сверху вниз, и это означает, что"
    ]
  },
  {
    "time": [
      2647.51,
      2649.37
    ],
    "en": [
      "from first to last."
    ],
    "ru": [
      "с первого до последнего."
    ]
  },
  {
    "time": [
      2649.37,
      2652.5
    ],
    "en": [
      "So, B should be the correct answer."
    ],
    "ru": [
      "Итак, B должен быть правильным ответом."
    ]
  },
  {
    "time": [
      2652.5,
      2656.54
    ],
    "en": [
      "I'll select B and then click on show answer."
    ],
    "ru": [
      "Я выберу B, а затем нажмите \"Показать ответ\"."
    ]
  },
  {
    "time": [
      2656.54,
      2658.68
    ],
    "en": [
      "And indeed it is correct."
    ],
    "ru": [
      "И действительно, это правильно."
    ]
  },
  {
    "time": [
      2658.68,
      2664.65
    ],
    "en": [
      "So, here's Boson's explanation, quite detailed."
    ],
    "ru": [
      "Итак, вот объяснение Бозона, довольно подробное."
    ]
  },
  {
    "time": [
      2664.65,
      2669.01
    ],
    "en": [
      "You can pause the video now if you want to read Boson's explanations, and I recommend you do."
    ],
    "ru": [
      "Вы можете приостановить видео сейчас, если хотите прочитать объяснения Бозона, и я рекомендую вам это сделать."
    ]
  },
  {
    "time": [
      2669.01,
      2673.869
    ],
    "en": [
      "you do. These explanations are one of the great things about Boson ExSim."
    ],
    "ru": [
      "ты сделаешь. Эти объяснения - одна из замечательных особенностей Boson ExSim."
    ]
  },
  {
    "time": [
      2673.869,
      2680.9
    ],
    "en": [
      "Okay, and there's also a reference to both the chapter in the official cert guide by"
    ],
    "ru": [
      "Хорошо, и есть также ссылка на главу в официальном руководстве по сертификации, написанную"
    ]
  },
  {
    "time": [
      2680.9,
      2687.08
    ],
    "en": [
      "Cisco Press and a link to some Cisco documentation which is available free online."
    ],
    "ru": [
      "Cisco Press и ссылку на некоторую документацию Cisco, которая доступна бесплатно в Интернете."
    ]
  },
  {
    "time": [
      2687.08,
      2689.92
    ],
    "en": [
      "Configuring IP Access Lists: Process ACLs."
    ],
    "ru": [
      "Настройка списков IP-доступа: обработка списков ACL."
    ]
  },
  {
    "time": [
      2689.92,
      2693.09
    ],
    "en": [
      "So, this is another great resource."
    ],
    "ru": [
      "Итак, это еще один отличный ресурс."
    ]
  },
  {
    "time": [
      2693.09,
      2697.24
    ],
    "en": [
      "Okay, so that's Boson ExSim for the CCNA."
    ],
    "ru": [
      "Хорошо, это Boson ExSim для CCNA."
    ]
  },
  {
    "time": [
      2697.24,
      2704.08
    ],
    "en": [
      "These are the practice exams I used to study for my CCNA and CCNP, and I really highly recommend them."
    ],
    "ru": [
      "Это практические экзамены, которые я использовал для подготовки к экзаменам CCNA и CCNP, и я их очень рекомендую."
    ]
  },
  {
    "time": [
      2704.08,
      2710.98
    ],
    "en": [
      "recommend them. So if you want to get a copy of Boson ExSim, please follow the link in the video description."
    ],
    "ru": [
      "рекомендую их. Поэтому, если вы хотите получить копию Boson ExSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      2710.98,
      2713.84
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
      2713.84,
      2717.27
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
      2717.27,
      2721.74
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
      2721.74,
      2723.13
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
      2723.13,
      2727.63
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
      2727.63,
      2732.5
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
      2732.5,
      2736.849
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
      2736.849,
      2739.47
    ],
    "en": [
      "To join, please click the ‘Join’ button under the video."
    ],
    "ru": [
      "Чтобы присоединиться, нажмите кнопку «Присоединиться» под видео."
    ]
  },
  {
    "time": [
      2739.47,
      2747.221
    ],
    "en": [
      "Thank you to Junhong, OJ, Magrathea, TheGunguy, l33america, Njabulo, Benjamin, Tshepiso, Justin,"
    ],
    "ru": [
      "Спасибо Junhong, OJ, Magrathea, TheGunguy, l33america, Njabulo, Benjamin, Tshepiso, Justin,"
    ]
  },
  {
    "time": [
      2747.221,
      2753.529
    ],
    "en": [
      "Prakaash, Nasir, Erlison, Apogee, Marko, Flodo, Daming, Joshua, Jhilmar, Ed, Value, John,"
    ],
    "ru": [
      "Пракааш, Насир, Эрлисон, Апогей, Марко, Флодо, Даминг, Джошуа, Джилмар, Эд, Вэлью, Джон,"
    ]
  },
  {
    "time": [
      2753.529,
      2760.54
    ],
    "en": [
      "Funnydart, Scott, Hassan, Marek, Velvijaykum, C Mohd, Mark, Yousif, Sidi, Boson Software,"
    ],
    "ru": [
      "Фаннидарт, Скотт, Хасан, Марек, Велвиджайкум, Си Мохд, Марк, Юсиф, Сиди, Boson Software,"
    ]
  },
  {
    "time": [
      2760.54,
      2763.339
    ],
    "en": [
      "Devin, Lito, Yonatan, and Vance."
    ],
    "ru": [
      "Девин, Лито, Йонатан и Вэнс."
    ]
  },
  {
    "time": [
      2763.339,
      2768.28
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
      2768.28,
      2772.34
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
      2772.34,
      2775.48
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
      2775.48,
      2781.84
    ],
    "en": [
      "This is the list of JCNP-level members at the time of recording by the way, November 21st 2020."
    ],
    "ru": [
      "Это список участников уровня JCNP на момент записи, кстати, 21 ноября 2020 года."
    ]
  },
  {
    "time": [
      2781.84,
      2789.18
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
      2781.84,
      2789.18
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
      2789.18,
      2790.76
    ],
    "en": [
      "videos. Thank you for watching."
    ],
    "ru": [
      "со всеми, кто учится на CCNA."
    ]
  },
  {
    "time": [
      2790.76,
      2794.73
    ],
    "en": [
      "Please subscribe to the channel, like the video, leave a comment, and share the video"
    ],
    "ru": [
      "Если вы хотите оставить отзыв, проверьте ссылки в описании."
    ]
  },
  {
    "time": [
      2794.73,
      2798.0
    ],
    "en": [
      "with anyone else studying for the CCNA."
    ],
    "ru": [
      "Я также являюсь проверенным издателем Brave и принимаю советы BAT (Basic Attention Token) через браузер Brave."
    ]
  },
  {
    "time": [
      2798.0,
      2800.79
    ],
    "en": [
      "If you want to leave a tip, check the links in the description."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  },
  {
    "time": [
      2800.79,
      2808.16
    ],
    "en": [
      "I'm also a Brave verified publisher and accept BAT, or Basic Attention Token, tips via the Brave browser."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2808.16,
      2808.16
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      ""
    ]
  }
]