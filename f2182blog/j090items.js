let items = [
  {
    "time": [
      0.64,
      6.669
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
      6.669,
      11.72
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
      11.72,
      17.66
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
      17.66,
      23.4
    ],
    "en": [
      "help. In this video we will continue our study of QoS. Quality of Service. In part 1 we covered"
    ],
    "ru": [
      "помощь. В этом видео мы продолжим изучение QoS. Качество обслуживания. В части 1 мы рассмотрели"
    ]
  },
  {
    "time": [
      23.4,
      28.289
    ],
    "en": [
      "voice VLANs and Power over Ethernet in the first half, and then I briefly introduced"
    ],
    "ru": [
      "голосовые VLAN и Power over Ethernet в первой половине, а затем я кратко представил"
    ]
  },
  {
    "time": [
      28.289,
      34.329
    ],
    "en": [
      "QoS in the second half. Hopefully you understand the purpose of QoS, which is to prioritize"
    ],
    "ru": [
      "QoS во второй половине. Надеюсь, вы понимаете цель QoS, которая заключается в расстановке приоритетов"
    ]
  },
  {
    "time": [
      34.329,
      39.97
    ],
    "en": [
      "certain traffic such as voice and video traffic to reduce the delay, jitter, and loss, and"
    ],
    "ru": [
      "определенный трафик, такой как голосовой и видеотрафик, для уменьшения задержки, дрожания и потерь, а также"
    ]
  },
  {
    "time": [
      39.97,
      45.399
    ],
    "en": [
      "also to ensure it gets the required bandwidth. This time we’ll go more in depth about the"
    ],
    "ru": [
      "также для обеспечения необходимой пропускной способности. На этот раз мы подробнее рассмотрим"
    ]
  },
  {
    "time": [
      45.399,
      52.16
    ],
    "en": [
      "terms in exam topic 4.7, such as classification, marking, queuing, congestion, policing, and"
    ],
    "ru": [
      "термины в теме экзамена 4.7, такие как классификация, маркировка, постановка в очередь, перегрузка, контроль и"
    ]
  },
  {
    "time": [
      52.16,
      58.31
    ],
    "en": [
      "shaping. Note that you don’t need to know QoS design and configuration for the CCNA."
    ],
    "ru": [
      "формирование. Обратите внимание, что вам не нужно знать дизайн и конфигурацию QoS для CCNA."
    ]
  },
  {
    "time": [
      58.31,
      62.67
    ],
    "en": [
      "As long as you understand the topics I introduce in this video, you should be able to answer"
    ],
    "ru": [
      "Если вы понимаете темы, которые я представляю в этом видео, вы сможете ответить"
    ]
  },
  {
    "time": [
      62.67,
      65.16
    ],
    "en": [
      "QoS questions on the CCNA exam."
    ],
    "ru": [
      "Вопросы QoS на экзамене CCNA."
    ]
  },
  {
    "time": [
      65.16,
      72.57
    ],
    "en": [
      "Here’s what we’ll cover in today’s video. First, classification and marking. This is"
    ],
    "ru": [
      "Вот что мы расскажем в сегодняшнем видео. Во-первых, классификация и маркировка. Это"
    ]
  },
  {
    "time": [
      72.57,
      78.049
    ],
    "en": [
      "how routers and switches identify which traffic should be given higher priority. Then we’ll"
    ],
    "ru": [
      "как маршрутизаторы и коммутаторы определяют, какой трафик должен иметь более высокий приоритет. Тогда мы"
    ]
  },
  {
    "time": [
      78.049,
      83.34
    ],
    "en": [
      "cover queuing and congestion management. I already introduced these in the previous video,"
    ],
    "ru": [
      "охватывают очереди и управление перегрузкой. Я уже рассказывал об этом в предыдущем видео,"
    ]
  },
  {
    "time": [
      83.34,
      88.59
    ],
    "en": [
      "but let’s go more in depth. Finally shaping and policing, two ways of controlling the"
    ],
    "ru": [
      "но давайте углубимся. Наконец, формирование и контроль, два способа управления"
    ]
  },
  {
    "time": [
      88.59,
      95.14
    ],
    "en": [
      "rate at which traffic enters or exits an interface. Watch until the end of the video for a bonus"
    ],
    "ru": [
      "скорость, с которой трафик входит или выходит из интерфейса. Смотрите до конца видео, чтобы получить бонус"
    ]
  },
  {
    "time": [
      95.14,
      102.53999999999999
    ],
    "en": [
      "practice question from Boson Software’s ExSim for CCNA, the best practice exams for the CCNA."
    ],
    "ru": [
      "Практический вопрос из ExSim компании Boson Software для CCNA, экзаменов по передовой практике для CCNA."
    ]
  },
  {
    "time": [
      102.53999999999999,
      108.67
    ],
    "en": [
      "the CCNA. Let’s begin with classification. As you know, the purpose of QoS is to give certain"
    ],
    "ru": [
      "CCNA. Начнем с классификации. Как вы знаете, цель QoS - дать определенные"
    ]
  },
  {
    "time": [
      108.67,
      114.93
    ],
    "en": [
      "kinds of network traffic priority over others during times of network congestion. Classification"
    ],
    "ru": [
      "виды приоритета сетевого трафика над другими во время перегрузки сети. Классификация"
    ]
  },
  {
    "time": [
      114.93,
      121.421
    ],
    "en": [
      "organizes network traffic, meaning packets, into traffic classes or categories. So, why"
    ],
    "ru": [
      "организует сетевой трафик, то есть пакеты, по классам или категориям трафика. Итак, почему"
    ]
  },
  {
    "time": [
      121.421,
      128.00900000000001
    ],
    "en": [
      "is that important for QoS? Classification is fundamental to QoS. To give priority to"
    ],
    "ru": [
      "это важно для QoS? Классификация имеет фундаментальное значение для QoS. Отдать приоритет"
    ]
  },
  {
    "time": [
      128.00900000000001,
      133.43
    ],
    "en": [
      "certain types of traffic, you have to identify which types of traffic to give priority to."
    ],
    "ru": [
      "Для определенных типов трафика необходимо определить, каким типам трафика следует отдавать приоритет."
    ]
  },
  {
    "time": [
      133.43,
      139.52
    ],
    "en": [
      "So, how can we classify traffic? There are many methods of classifying traffic. Here"
    ],
    "ru": [
      "Итак, как мы можем классифицировать трафик? Есть много методов классификации трафика. Здесь"
    ]
  },
  {
    "time": [
      139.52,
      145.9
    ],
    "en": [
      "are some examples. You can use an ACL. Traffic permitted by the ACL will be given certain"
    ],
    "ru": [
      "вот несколько примеров. Вы можете использовать ACL. Трафик, разрешенный ACL, будет определен"
    ]
  },
  {
    "time": [
      145.9,
      150.569
    ],
    "en": [
      "treatment, for example it could be treated as high-priority, and other traffic which"
    ],
    "ru": [
      "обработки, например, он может рассматриваться как высокоприоритетный, а другой трафик, который"
    ]
  },
  {
    "time": [
      150.569,
      156.18
    ],
    "en": [
      "is denied by the ACL will not be given that treatment. This is like how we used ACLs for"
    ],
    "ru": [
      "отклонено ACL не будет обрабатываться. Это похоже на то, как мы использовали ACL для"
    ]
  },
  {
    "time": [
      156.18,
      162.29
    ],
    "en": [
      "dynamic NAT. The ACL isn’t being used to actually permit or deny traffic, it’s just"
    ],
    "ru": [
      "динамический NAT. ACL не используется для фактического разрешения или запрета трафика, это просто"
    ]
  },
  {
    "time": [
      162.29,
      170.37
    ],
    "en": [
      "being used to identify certain traffic. There is also NBAR, Network Based Application Recognition."
    ],
    "ru": [
      "используется для идентификации определенного трафика. Существует также NBAR, распознавание сетевых приложений."
    ]
  },
  {
    "time": [
      170.37,
      174.989
    ],
    "en": [
      "Sometimes just looking at the Lower-layer information, such as the TCP or UDP port number"
    ],
    "ru": [
      "Иногда просто просматривайте информацию нижнего уровня, такую ​​как номер порта TCP или UDP."
    ]
  },
  {
    "time": [
      174.989,
      182.01
    ],
    "en": [
      "and IP address, isn’t enough to identify exactly what kind of traffic it is. NBAR performs"
    ],
    "ru": [
      "и IP-адреса недостаточно, чтобы точно определить, что это за трафик. НБАР выполняет"
    ]
  },
  {
    "time": [
      182.01,
      187.22
    ],
    "en": [
      "what’s called a ‘deep packet inspection’ to look beyond the Layer 3 and 4 information"
    ],
    "ru": [
      "так называемая «глубокая проверка пакетов», позволяющая выйти за рамки информации уровней 3 и 4."
    ]
  },
  {
    "time": [
      187.22,
      192.84
    ],
    "en": [
      "all the way up to Layer 7 to identify the specific kind of traffic. However, we won’t"
    ],
    "ru": [
      "вплоть до уровня 7 для определения конкретного типа трафика. Однако мы не будем"
    ]
  },
  {
    "time": [
      192.84,
      198.15
    ],
    "en": [
      "focus on methods like these in this video. In the Layer 2 and Layer 3 headers there are"
    ],
    "ru": [
      "сосредоточьтесь на методах, подобных этим в этом видео. В заголовках Layer 2 и Layer 3 есть"
    ]
  },
  {
    "time": [
      198.15,
      203.739
    ],
    "en": [
      "specific fields used for this purpose, for the purpose of classifying traffic. I mentioned"
    ],
    "ru": [
      "специальные поля, используемые для этой цели, с целью классификации трафика. я упомянул"
    ]
  },
  {
    "time": [
      203.739,
      209.89
    ],
    "en": [
      "them briefly in previous videos, but finally let’s take a look at them. The PCP, priority"
    ],
    "ru": [
      "вкратце о них рассказывалось в предыдущих видео, но, наконец, давайте взглянем на них. PCP, приоритет"
    ]
  },
  {
    "time": [
      209.89,
      216.34
    ],
    "en": [
      "code point, field of the 802.1Q tag can be used to identify high or low priority traffic."
    ],
    "ru": [
      "кодовая точка, поле тега 802.1Q может использоваться для идентификации трафика с высоким или низким приоритетом."
    ]
  },
  {
    "time": [
      216.34,
      221.79
    ],
    "en": [
      "Keep in mind that this field can only be used when there is a dot1q tag, only when a VLAN"
    ],
    "ru": [
      "Имейте в виду, что это поле можно использовать только при наличии тега dot1q, только когда VLAN"
    ]
  },
  {
    "time": [
      221.79,
      227.909
    ],
    "en": [
      "tag is added to the Ethernet header. Then there is the DSCP, Differentiated Services"
    ],
    "ru": [
      "добавляется в заголовок Ethernet. Тогда есть DSCP, дифференцированные услуги"
    ]
  },
  {
    "time": [
      227.909,
      233.7
    ],
    "en": [
      "Code Point, field of the IP header. It can also be used to identify high or lower priority"
    ],
    "ru": [
      "Code Point, поле заголовка IP. Его также можно использовать для определения высокого или низкого приоритета."
    ]
  },
  {
    "time": [
      233.7,
      238.209
    ],
    "en": [
      "traffic. Okay, let’s take a look at each of these."
    ],
    "ru": [
      "движение. Хорошо, давайте посмотрим на каждый из них."
    ]
  },
  {
    "time": [
      238.209,
      245.439
    ],
    "en": [
      "First up, PCP. Here you can see an Ethernet header with a dot1q tag, a VLAN tag. The PCP"
    ],
    "ru": [
      "Во-первых, PCP. Здесь вы можете увидеть заголовок Ethernet с тегом dot1q, тегом VLAN. PCP"
    ]
  },
  {
    "time": [
      245.439,
      251.07
    ],
    "en": [
      "field is in this dot1q tag. Here are the fields of the dot1q tag that I showed you earlier"
    ],
    "ru": [
      "поле находится в этом теге dot1q. Вот поля тега dot1q, которые я вам показал ранее"
    ]
  },
  {
    "time": [
      251.07,
      257.13
    ],
    "en": [
      "in the course, and the PCP field is this 3-bit field here. Note that you might also hear"
    ],
    "ru": [
      "в курсе, а поле PCP является здесь 3-битным полем. Обратите внимание, что вы также можете услышать"
    ]
  },
  {
    "time": [
      257.13,
      262.7
    ],
    "en": [
      "this field referred to as CoS, class of service. Don’t mix it up with the entire concept"
    ],
    "ru": [
      "это поле называется CoS, класс обслуживания. Не путайте это со всей концепцией"
    ]
  },
  {
    "time": [
      262.7,
      271.53
    ],
    "en": [
      "of QoS, CoS just refers to this part of the dot1q tag. Its use is defined by IEEE 802.1p."
    ],
    "ru": [
      "Что касается QoS, CoS относится только к этой части тега dot1q. Его использование определяется IEEE 802.1p."
    ]
  },
  {
    "time": [
      271.53,
      278.40999999999997
    ],
    "en": [
      "So, let’s see how it has been defined. Well, there are 3 bits which gives 8 possible values,"
    ],
    "ru": [
      "Итак, давайте посмотрим, как это было определено. Ну, есть 3 бита, которые дают 8 возможных значений,"
    ]
  },
  {
    "time": [
      278.40999999999997,
      284.83
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
      278.40999999999997,
      284.83
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
      284.83,
      290.7
    ],
    "en": [
      "but I recommend remembering 0 for best effort, 3 for critical applications, 4 for video,"
    ],
    "ru": [
      "но я рекомендую запомнить 0 для максимального усилия, 3 для критически важных приложений, 4 для видео,"
    ]
  },
  {
    "time": [
      290.7,
      298.03
    ],
    "en": [
      "and 5 for voice. Regarding 0, best effort, what does that mean? Best effort delivery"
    ],
    "ru": [
      "и 5 для голоса. Что это значит относительно 0, максимальное усилие? Доставка с максимальными усилиями"
    ]
  },
  {
    "time": [
      298.03,
      303.26
    ],
    "en": [
      "means there is no guarantee that data is delivered or that it meets any QoS standard. It’s"
    ],
    "ru": [
      "означает, что нет гарантии, что данные будут доставлены или соответствуют какому-либо стандарту QoS. Его"
    ]
  },
  {
    "time": [
      303.26,
      308.79
    ],
    "en": [
      "regular traffic, not high-priority. This is the default, by the way, regular traffic will"
    ],
    "ru": [
      "обычный трафик, не приоритетный. Это по умолчанию, кстати, обычный трафик будет"
    ]
  },
  {
    "time": [
      308.79,
      313.99
    ],
    "en": [
      "have a value of ‘0’ in the PCP field. Since we talked about voice traffic a lot"
    ],
    "ru": [
      "имеют значение «0» в поле PCP. Поскольку мы много говорили о голосовом трафике"
    ]
  },
  {
    "time": [
      313.99,
      320.59
    ],
    "en": [
      "in the previous video, let me point out something about 3 and 5. IP phones mark their call signaling"
    ],
    "ru": [
      "в предыдущем видео позвольте мне указать кое-что о 3 и 5. IP-телефоны отмечают свою сигнализацию вызова"
    ]
  },
  {
    "time": [
      320.59,
      327.32
    ],
    "en": [
      "traffic as PCP3. Call signaling traffic is used to establish phone calls. However, when"
    ],
    "ru": [
      "трафик как PCP3. Трафик сигнализации вызова используется для установления телефонных вызовов. Однако когда"
    ]
  },
  {
    "time": [
      327.32,
      332.34000000000003
    ],
    "en": [
      "the call is established, the actual voice traffic itself, the audio packets, is marked"
    ],
    "ru": [
      "звонок установлен, сам фактический голосовой трафик, аудиопакеты, отмечен"
    ]
  },
  {
    "time": [
      332.34000000000003,
      339.611
    ],
    "en": [
      "as PCP5. I put the term mark in bold because it’s another important QoS term. Basically"
    ],
    "ru": [
      "как PCP5. Я выделил этот термин жирным шрифтом, потому что это еще один важный термин QoS. По сути"
    ]
  },
  {
    "time": [
      339.611,
      346.49
    ],
    "en": [
      "to mark traffic is to set the value in the PCP or DSCP fields. Then network devices look"
    ],
    "ru": [
      "для отметки трафика необходимо установить значение в полях PCP или DSCP. Затем сетевые устройства смотрят"
    ]
  },
  {
    "time": [
      346.49,
      351.25
    ],
    "en": [
      "at those markings and use them to classify the traffic as high-priority, low-priority,"
    ],
    "ru": [
      "на этих отметках и используйте их, чтобы классифицировать трафик как высокоприоритетный, низкоприоритетный,"
    ]
  },
  {
    "time": [
      351.25,
      357.51
    ],
    "en": [
      "etc. So, when an IP phone marks its voice traffic as PCP5, it’s because it wants the"
    ],
    "ru": [
      "и т. д. Таким образом, когда IP-телефон отмечает свой голосовой трафик как PCP5, это потому, что он хочет"
    ]
  },
  {
    "time": [
      357.51,
      361.62
    ],
    "en": [
      "routers and switches to classify those packets as high-priority."
    ],
    "ru": [
      "маршрутизаторы и коммутаторы, чтобы классифицировать эти пакеты как высокоприоритетные."
    ]
  },
  {
    "time": [
      361.62,
      368.94
    ],
    "en": [
      "Here’s a simple network with a couple PCs in VLAN10 and IP phones in VLAN20. I want"
    ],
    "ru": [
      "Вот простая сеть с парой компьютеров в VLAN10 и IP-телефонами в VLAN20. я хочу"
    ]
  },
  {
    "time": [
      368.94,
      374.32
    ],
    "en": [
      "to demonstrate a very important point about using PCP to classify traffic. Because the"
    ],
    "ru": [
      "чтобы продемонстрировать очень важный момент об использовании PCP для классификации трафика. Поскольку"
    ]
  },
  {
    "time": [
      374.32,
      379.52
    ],
    "en": [
      "PCP field is found in the dot1q header, it can only be used over the following connection"
    ],
    "ru": [
      "Поле PCP находится в заголовке dot1q, его можно использовать только при следующем подключении"
    ]
  },
  {
    "time": [
      379.52,
      386.06
    ],
    "en": [
      "types. First, the obvious one is trunk links. Traffic sent over a trunk link is tagged with"
    ],
    "ru": [
      "типы. Во-первых, очевидный - это магистральные каналы. Трафик, отправляемый по магистральному каналу, помечается тегом"
    ]
  },
  {
    "time": [
      386.06,
      390.68
    ],
    "en": [
      "dot1q, unless the traffic is in the native VLAN, but let’s assume the native VLAN isn’t"
    ],
    "ru": [
      "dot1q, если трафик не находится в собственной VLAN, но предположим, что собственная VLAN не"
    ]
  },
  {
    "time": [
      390.68,
      396.40999999999997
    ],
    "en": [
      "being used. However, as I explained in the previous video, voice traffic is tagged as"
    ],
    "ru": [
      "быть использованным. Однако, как я объяснил в предыдущем видео, голосовой трафик помечается как"
    ]
  },
  {
    "time": [
      396.40999999999997,
      401.40999999999997
    ],
    "en": [
      "well even over access links. So, assuming the network is configured so that all PCs"
    ],
    "ru": [
      "ну даже по ссылкам доступа. Итак, предполагая, что сеть настроена так, что все ПК"
    ]
  },
  {
    "time": [
      401.40999999999997,
      406.04
    ],
    "en": [
      "and phones can communicate with each other as well as over the external network, which"
    ],
    "ru": [
      "и телефоны могут общаться друг с другом, а также по внешней сети, которая"
    ]
  },
  {
    "time": [
      406.04,
      412.21
    ],
    "en": [
      "of these links are either trunk links or access links with a voice VLAN? Well, the connections"
    ],
    "ru": [
      "из этих ссылок являются либо магистральные каналы, либо каналы доступа с голосовой VLAN? Что ж, связи"
    ]
  },
  {
    "time": [
      412.21,
      417.5
    ],
    "en": [
      "between the phones and the switches are access ports with a voice VLAN. Traffic to and from"
    ],
    "ru": [
      "между телефонами и коммутаторами расположены порты доступа с голосовой VLAN. Трафик туда и обратно"
    ]
  },
  {
    "time": [
      417.5,
      423.18
    ],
    "en": [
      "the phones will be tagged. And these two connections will be trunk links, tagging traffic in VLAN"
    ],
    "ru": [
      "телефоны будут помечены. И эти два соединения будут транковыми, тегирующими трафик в VLAN."
    ]
  },
  {
    "time": [
      423.18,
      430.3
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
      423.18,
      430.3
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
      430.3,
      435.43
    ],
    "en": [
      "to tell other devices to treat the traffic with a certain level of priority. And devices"
    ],
    "ru": [
      "чтобы другие устройства обрабатывали трафик с определенным уровнем приоритета. И устройства"
    ]
  },
  {
    "time": [
      435.43,
      440.65
    ],
    "en": [
      "receiving that marked traffic can classify the traffic as high, medium, low, or whatever"
    ],
    "ru": [
      "получение этого помеченного трафика может классифицировать трафик как высокий, средний, низкий или любой другой"
    ]
  },
  {
    "time": [
      440.65,
      446.86
    ],
    "en": [
      "priority based on the PCP marking. Let me clarify that in this type of network design"
    ],
    "ru": [
      "приоритет на основе маркировки PCP. Разрешите пояснить, что в этом типе дизайна сети"
    ]
  },
  {
    "time": [
      446.86,
      452.03
    ],
    "en": [
      "traffic from the PCs is not tagged with dot1q here, so it can’t have a PCP marking over"
    ],
    "ru": [
      "трафик с ПК здесь не помечен точкой dot1q, поэтому он не может иметь маркировку PCP поверх"
    ]
  },
  {
    "time": [
      452.03,
      459.03
    ],
    "en": [
      "this link. In addition to that, all traffic between R1 and R2, or between R2 and external"
    ],
    "ru": [
      "эта ссылка. Кроме того, весь трафик между R1 и R2 или между R2 и внешним"
    ]
  },
  {
    "time": [
      459.03,
      464.94
    ],
    "en": [
      "destinations will not have a dot1q tag. So, traffic over those links cannot be marked"
    ],
    "ru": [
      "места назначения не будут иметь тега dot1q. Таким образом, трафик по этим ссылкам не может быть отмечен"
    ]
  },
  {
    "time": [
      464.94,
      471.71
    ],
    "en": [
      "with a PCP value, PCP cannot be used to classify traffic. So, that’s a major limitation of"
    ],
    "ru": [
      "со значением PCP нельзя использовать PCP для классификации трафика. Итак, это главное ограничение"
    ]
  },
  {
    "time": [
      471.71,
      478.54
    ],
    "en": [
      "using PCP, a limitation which the Layer 3 classification methods don’t have."
    ],
    "ru": [
      "использование PCP, ограничения, которого нет у методов классификации уровня 3."
    ]
  },
  {
    "time": [
      478.54,
      485.02
    ],
    "en": [
      "So now let’s look at how marking and classification is done at Layer 3. In the IPv4 header there"
    ],
    "ru": [
      "Итак, теперь давайте посмотрим, как выполняется маркировка и классификация на уровне 3. В заголовке IPv4 есть"
    ]
  },
  {
    "time": [
      485.02,
      491.84
    ],
    "en": [
      "is a byte that is referred to as the ToS byte, Type of Service. IPv6 also has a byte called"
    ],
    "ru": [
      "- это байт, который называется байтом ToS, типом службы. IPv6 также имеет байт, называемый"
    ]
  },
  {
    "time": [
      491.84,
      498.91
    ],
    "en": [
      "the traffic class byte used for QoS, but let’s focus on the IPv4 header. It’s this byte"
    ],
    "ru": [
      "байт класса трафика, используемый для QoS, но давайте сосредоточимся на заголовке IPv4. Это этот байт"
    ]
  },
  {
    "time": [
      498.91,
      505.0
    ],
    "en": [
      "here, the second one in the header after the version and IHL fields. The modern use of"
    ],
    "ru": [
      "здесь второй в заголовке после полей версии и МГП. Современное использование"
    ]
  },
  {
    "time": [
      505.0,
      513.21
    ],
    "en": [
      "the ToS byte consists of two fields, DSCP, differentiated services code point, and ECN,"
    ],
    "ru": [
      "байт ToS состоит из двух полей: DSCP, кодовой точки дифференцированных услуг и ECN,"
    ]
  },
  {
    "time": [
      513.21,
      519.15
    ],
    "en": [
      "explicit congestion notification. However, previously this byte was organized differently."
    ],
    "ru": [
      "явное уведомление о перегрузке. Однако ранее этот байт был организован иначе."
    ]
  },
  {
    "time": [
      519.15,
      526.05
    ],
    "en": [
      "Here’s the old use of the ToS byte. Three bits were used for the IPP, IP Precedence,"
    ],
    "ru": [
      "Вот старое использование байта ToS. Три бита использовались для IPP, IP Precedence,"
    ]
  },
  {
    "time": [
      526.05,
      531.28
    ],
    "en": [
      "field. It was used to mark packets according to their priority, like the PCP field in the"
    ],
    "ru": [
      "поле. Он использовался для маркировки пакетов в соответствии с их приоритетом, как поле PCP в"
    ]
  },
  {
    "time": [
      531.28,
      538.13
    ],
    "en": [
      "dot1q header. The remaining 5 bits were mostly defined for some other purpose, but my understanding"
    ],
    "ru": [
      "Заголовок dot1q. Остальные 5 бит были в основном определены для каких-то других целей, но, насколько я понимаю,"
    ]
  },
  {
    "time": [
      538.13,
      544.13
    ],
    "en": [
      "is that they weren’t really used. So, 3 bits once again gives 8 possible values here,"
    ],
    "ru": [
      "в том, что они на самом деле не использовались. Итак, 3 бита снова дают 8 возможных значений,"
    ]
  },
  {
    "time": [
      544.13,
      550.27
    ],
    "en": [
      "just like in the PCP field of the dot1q header. However, the current use of the ToS byte,"
    ],
    "ru": [
      "точно так же, как в поле PCP заголовка dot1q. Однако текущее использование байта ToS,"
    ]
  },
  {
    "time": [
      550.27,
      559.5
    ],
    "en": [
      "the one shown above, is this. 6 bits for DSCP and 2 for ECN. 6 bits in DSCP allows for a"
    ],
    "ru": [
      "тот, что показан выше, это. 6 бит для DSCP и 2 для ECN. 6 битов в DSCP позволяют"
    ]
  },
  {
    "time": [
      559.5,
      568.02
    ],
    "en": [
      "total of 64 values, which gives a lot of flexibility regarding how we can mark and classify traffic in the network."
    ],
    "ru": [
      "всего 64 значения, что дает большую гибкость в отношении того, как мы можем маркировать и классифицировать трафик в сети."
    ]
  },
  {
    "time": [
      568.02,
      574.43
    ],
    "en": [
      "in the network. Before going in depth about DSCP, let’s take a quick look at IPP. The standard IPP"
    ],
    "ru": [
      "в сети. Прежде чем углубляться в DSCP, давайте кратко рассмотрим IPP. Стандартный IPP"
    ]
  },
  {
    "time": [
      574.43,
      580.66
    ],
    "en": [
      "markings are similar to PCP. 6 and 7 are reserved for what’s called ‘network control’"
    ],
    "ru": [
      "маркировка аналогична PCP. 6 и 7 зарезервированы для так называемого «сетевого управления»."
    ]
  },
  {
    "time": [
      580.66,
      586.7
    ],
    "en": [
      "traffic. That refers to traffic like OSPF messages sent between routers. Interactive"
    ],
    "ru": [
      "движение. Это относится к трафику, подобному сообщениям OSPF, передаваемым между маршрутизаторами. Интерактивный"
    ]
  },
  {
    "time": [
      586.7,
      594.46
    ],
    "en": [
      "voice traffic is marked as IPP 5, interactive video traffic is marked as IPP 4, IPP 3 is"
    ],
    "ru": [
      "голосовой трафик обозначен как IPP 5, интерактивный видеотрафик обозначен как IPP 4, IPP 3 -"
    ]
  },
  {
    "time": [
      594.46,
      600.21
    ],
    "en": [
      "used for voice signaling traffic, for setting up and tearing down phone calls. And IPP 0"
    ],
    "ru": [
      "используется для голосовой сигнализации, для установления и прекращения телефонных звонков. И IPP 0"
    ]
  },
  {
    "time": [
      600.21,
      605.63
    ],
    "en": [
      "is used for best effort traffic, regular data traffic without any special requirements."
    ],
    "ru": [
      "используется для трафика с максимальными усилиями, регулярного трафика данных без каких-либо особых требований."
    ]
  },
  {
    "time": [
      605.63,
      612.32
    ],
    "en": [
      "So, with 6 and 7 reserved, only 6 possible values remain. Although 6 is sufficient for"
    ],
    "ru": [
      "Таким образом, если 6 и 7 зарезервированы, остается только 6 возможных значений. Хотя 6 достаточно для"
    ]
  },
  {
    "time": [
      612.32,
      619.0
    ],
    "en": [
      "many networks, the QoS requirements of some more complex networks demand more flexibility."
    ],
    "ru": [
      "Во многих сетях требования QoS некоторых более сложных сетей требуют большей гибкости."
    ]
  },
  {
    "time": [
      619.0,
      624.94
    ],
    "en": [
      "And because IPP only used 3 bits of the ToS byte and the other 5 largely weren’t used,"
    ],
    "ru": [
      "И поскольку IPP использовал только 3 бита байта ToS, а остальные 5 в основном не использовались,"
    ]
  },
  {
    "time": [
      624.94,
      634.0
    ],
    "en": [
      "it was decided that an extra 3 bits would be added to IPP to make DSCP, differentiated services code point."
    ],
    "ru": [
      "Было решено, что к IPP будут добавлены дополнительные 3 бита, чтобы сделать кодовую точку дифференцированных услуг DSCP."
    ]
  },
  {
    "time": [
      634.0,
      642.12
    ],
    "en": [
      "services code point. Now let’s take a look at DSCP. RFC 2474, which was published in 1998, defines the DSCP"
    ],
    "ru": [
      "кодовая точка услуг. Теперь давайте посмотрим на DSCP. RFC 2474, опубликованный в 1998 году, определяет DSCP."
    ]
  },
  {
    "time": [
      642.12,
      649.22
    ],
    "en": [
      "field, and then other ‘DiffServ’, differentiated services, RFCs after it elaborate on the use"
    ],
    "ru": [
      "поле, а затем другие «DiffServ», дифференцированные услуги, RFC после подробного описания использования"
    ]
  },
  {
    "time": [
      649.22,
      657.03
    ],
    "en": [
      "of the field. With IPP updated to DSCP, new standard markings had to be decided upon."
    ],
    "ru": [
      "поля. После обновления IPP до DSCP пришлось принять решение о новой стандартной маркировке."
    ]
  },
  {
    "time": [
      657.03,
      662.79
    ],
    "en": [
      "Why is that? By having generally agreed upon standard markings for different kinds of traffic,"
    ],
    "ru": [
      "Это почему? Согласовав стандартную разметку для различных видов движения,"
    ]
  },
  {
    "time": [
      662.79,
      668.98
    ],
    "en": [
      "QoS design and implementation is simplified, QoS works better between ISPs and enterprises"
    ],
    "ru": [
      "Проектирование и реализация QoS упрощены, QoS лучше работает между интернет-провайдерами и предприятиями"
    ]
  },
  {
    "time": [
      668.98,
      673.13
    ],
    "en": [
      "because they agree upon the markings that will be used, and there are other benefits"
    ],
    "ru": [
      "потому что они согласовывают маркировку, которая будет использоваться, и есть другие преимущества"
    ]
  },
  {
    "time": [
      673.13,
      679.561
    ],
    "en": [
      "too. So, a few sets of industry-standard markings were developed. Before we get into it, let"
    ],
    "ru": [
      "тоже. Итак, было разработано несколько наборов стандартной маркировки. Прежде чем мы перейдем к этому, позвольте"
    ]
  },
  {
    "time": [
      679.561,
      684.48
    ],
    "en": [
      "me say that it might feel a bit overwhelming trying to remember all of these. I will include"
    ],
    "ru": [
      "Я говорю, что это может показаться немного подавляющим, пытаясь вспомнить все это. Я включу"
    ]
  },
  {
    "time": [
      684.48,
      688.68
    ],
    "en": [
      "flashcards to help you memorize them, but really the only ones you need to remember"
    ],
    "ru": [
      "карточки, которые помогут вам запомнить их, но на самом деле единственные, которые вам нужно запомнить"
    ]
  },
  {
    "time": [
      688.68,
      693.51
    ],
    "en": [
      "are some of the more common ones. I’ll point those ones out after I’ve introduced all"
    ],
    "ru": [
      "являются одними из наиболее распространенных. Я укажу на них после того, как расскажу обо всех"
    ]
  },
  {
    "time": [
      693.51,
      700.34
    ],
    "en": [
      "of the markings. So, you should be aware of the following standard markings. First, default"
    ],
    "ru": [
      "маркировки. Итак, вам следует знать о следующих стандартных маркировках. Во-первых, по умолчанию"
    ]
  },
  {
    "time": [
      700.34,
      705.7
    ],
    "en": [
      "forwarding, DF. This is the marking for best effort traffic, which doesn’t have any particular"
    ],
    "ru": [
      "пересылка, DF. Это отметка для трафика с максимальными усилиями, не имеющего особого"
    ]
  },
  {
    "time": [
      705.7,
      712.49
    ],
    "en": [
      "QoS requirements. Then there is EF, Expedited Forwarding. It’s used for traffic that requires"
    ],
    "ru": [
      "Требования QoS. Тогда есть EF, ускоренная пересылка. Он используется для трафика, требующего"
    ]
  },
  {
    "time": [
      712.49,
      719.92
    ],
    "en": [
      "low loss, latency, and jitter, which is usually voice traffic. Next is Assured Forwarding,"
    ],
    "ru": [
      "низкие потери, задержки и джиттер, обычно это голосовой трафик. Далее идет гарантированная пересылка,"
    ]
  },
  {
    "time": [
      719.92,
      726.06
    ],
    "en": [
      "AF. This isn’t one marking, but a set of 12 standard values. Finally there is class"
    ],
    "ru": [
      "AF. Это не одна маркировка, а набор из 12 стандартных значений. Наконец-то есть класс"
    ]
  },
  {
    "time": [
      726.06,
      733.31
    ],
    "en": [
      "selector, CS, which is a set of 8 standard values. CS provides backward compatibility with IPP."
    ],
    "ru": [
      "селектор CS, который представляет собой набор из 8 стандартных значений. CS обеспечивает обратную совместимость с IPP."
    ]
  },
  {
    "time": [
      733.31,
      739.621
    ],
    "en": [
      "with IPP. We won’t cover QoS configuration because it’s not a CCNA exam topic, but let me show"
    ],
    "ru": [
      "с IPP. Мы не будем рассматривать конфигурацию QoS, потому что это не тема экзамена CCNA, но позвольте мне показать"
    ]
  },
  {
    "time": [
      739.621,
      746.07
    ],
    "en": [
      "you this. I configured a ‘class-map’ called TEST. When configuring QoS, class maps are"
    ],
    "ru": [
      "Вы это. Я настроил «карту классов» под названием ТЕСТ. При настройке QoS карты классов"
    ]
  },
  {
    "time": [
      746.07,
      751.68
    ],
    "en": [
      "used to identify which traffic you want to match. I configured a MATCH statement, specifying"
    ],
    "ru": [
      "используется для определения того, какой трафик вы хотите сопоставить. Я настроил оператор MATCH, указав"
    ]
  },
  {
    "time": [
      751.68,
      756.82
    ],
    "en": [
      "that I want to match traffic based on the DSCP value in the IP header. Let’s check"
    ],
    "ru": [
      "что я хочу сопоставить трафик на основе значения DSCP в заголовке IP. Давайте проверим"
    ]
  },
  {
    "time": [
      756.82,
      762.21
    ],
    "en": [
      "out the options. At the top is the choice to simply configure the DSCP value in decimal,"
    ],
    "ru": [
      "из вариантов. Вверху можно просто настроить значение DSCP в десятичном формате,"
    ]
  },
  {
    "time": [
      762.21,
      770.17
    ],
    "en": [
      "from 0 to 63. Then below that are the 12 AF values. Notice on the right it shows the binary,"
    ],
    "ru": [
      "от 0 до 63. Ниже приведены 12 значений AF. Обратите внимание, что справа показан двоичный файл,"
    ]
  },
  {
    "time": [
      770.17,
      779.14
    ],
    "en": [
      "for example AF11 has a binary value of 001 010. Under that there are the CS values. Again,"
    ],
    "ru": [
      "например AF11 имеет двоичное значение 001 010. Под ним находятся значения CS. Опять таки,"
    ]
  },
  {
    "time": [
      779.14,
      784.841
    ],
    "en": [
      "the binary values are displayed on the right. I said there are 8 CS values, but only 7 are"
    ],
    "ru": [
      "двоичные значения отображаются справа. Я сказал, что есть 8 значений CS, но только 7 из них."
    ]
  },
  {
    "time": [
      784.841,
      792.71
    ],
    "en": [
      "shown here. That’s because the other one, CS0, is the same as DF, default forwarding,"
    ],
    "ru": [
      "показано здесь. Это потому, что другой, CS0, совпадает с DF, пересылкой по умолчанию,"
    ]
  },
  {
    "time": [
      792.71,
      800.12
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
      792.71,
      800.12
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
      800.12,
      802.82
    ],
    "en": [
      "these in more detail."
    ],
    "ru": [
      "об этом подробнее."
    ]
  },
  {
    "time": [
      802.82,
      810.64
    ],
    "en": [
      "First up, DF and EF. DF is used for best-effort traffic. The recommended DSCP marking is 0."
    ],
    "ru": [
      "Сначала DF и EF. DF используется для трафика максимального усилия. Рекомендуемая маркировка DSCP - 0."
    ]
  },
  {
    "time": [
      810.64,
      816.92
    ],
    "en": [
      "So, all 6 of these bits will be set to 0. To make things easier to understand as we"
    ],
    "ru": [
      "Итак, все 6 этих битов будут установлены в 0. Чтобы упростить понимание, поскольку мы"
    ]
  },
  {
    "time": [
      816.92,
      821.87
    ],
    "en": [
      "continue, I’ll write the decimal value of each binary bit above. So, standard network"
    ],
    "ru": [
      "продолжить, я запишу десятичное значение каждого двоичного бита выше. Итак, стандартная сеть"
    ]
  },
  {
    "time": [
      821.87,
      828.94
    ],
    "en": [
      "traffic like sending an email or downloading a file will probably have 0 0 0 0 0 0 in the"
    ],
    "ru": [
      "трафик, такой как отправка электронной почты или загрузка файла, вероятно, будет иметь 0 0 0 0 0 0 в"
    ]
  },
  {
    "time": [
      828.94,
      835.27
    ],
    "en": [
      "DSCP field of the IP header, indicating that it doesn’t require any special treatment."
    ],
    "ru": [
      "Поле DSCP заголовка IP, указывающее на то, что оно не требует особой обработки."
    ]
  },
  {
    "time": [
      835.27,
      841.46
    ],
    "en": [
      "Then there is EF, expedited forwarding. EF is used for traffic that requires low loss,"
    ],
    "ru": [
      "Тогда есть EF, ускоренная пересылка. EF используется для трафика, требующего низких потерь,"
    ]
  },
  {
    "time": [
      841.46,
      849.16
    ],
    "en": [
      "latency, and jitter. Typically, voice traffic is marked as EF. The DSCP marking for EF is"
    ],
    "ru": [
      "задержка и джиттер. Обычно голосовой трафик обозначается как EF. Маркировка DSCP для EF:"
    ]
  },
  {
    "time": [
      849.16,
      858.05
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
      849.16,
      858.05
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
      858.05,
      865.64
    ],
    "en": [
      "to remember. DF is used for best-effort traffic, and the DSCP value is 0. EF is used for traffic"
    ],
    "ru": [
      "запомнить. DF используется для трафика максимального усилия, а значение DSCP равно 0. EF используется для трафика."
    ]
  },
  {
    "time": [
      865.64,
      871.69
    ],
    "en": [
      "requiring low-loss, low-latency, and low-jitter, usually voice traffic, and the DSCP value"
    ],
    "ru": [
      "требуются низкие потери, низкая задержка и низкий уровень дрожания, обычно голосовой трафик, и значение DSCP"
    ]
  },
  {
    "time": [
      871.69,
      876.92
    ],
    "en": [
      "is 46. Now things will get a bit more complicated."
    ],
    "ru": [
      "46. ​​Теперь все станет немного сложнее."
    ]
  },
  {
    "time": [
      876.92,
      883.92
    ],
    "en": [
      "So we just looked at default, also called DF, and EF. Now let’s look at AF, assured"
    ],
    "ru": [
      "Итак, мы просто посмотрели на значение по умолчанию, также называемое DF и EF. А теперь давайте посмотрим на AF, уверенный"
    ]
  },
  {
    "time": [
      883.92,
      889.99
    ],
    "en": [
      "forwarding. AF can be a little tricky to understand, but I’ll try to explain it clearly."
    ],
    "ru": [
      "пересылка. AF может быть немного сложным для понимания, но я постараюсь объяснить это ясно."
    ]
  },
  {
    "time": [
      889.99,
      895.42
    ],
    "en": [
      "AF defines four traffic classes. All packets in a class have the same priority. A higher"
    ],
    "ru": [
      "AF определяет четыре класса трафика. Все пакеты в классе имеют одинаковый приоритет. Высшее"
    ]
  },
  {
    "time": [
      895.42,
      900.05
    ],
    "en": [
      "class number means higher priority, their packets will be forwarded with better service"
    ],
    "ru": [
      "номер класса означает более высокий приоритет, их пакеты будут пересылаться с лучшим обслуживанием"
    ]
  },
  {
    "time": [
      900.05,
      905.6
    ],
    "en": [
      "than lower-priority packets. Then, within each class there are three levels of drop"
    ],
    "ru": [
      "чем пакеты с более низким приоритетом. Затем в каждом классе есть три уровня дропа."
    ]
  },
  {
    "time": [
      905.6,
      911.42
    ],
    "en": [
      "precedence. A higher drop precedence means the packet is more likely to drop during congestion"
    ],
    "ru": [
      "приоритет. Более высокий приоритет отбрасывания означает, что пакет с большей вероятностью будет отброшен во время перегрузки."
    ]
  },
  {
    "time": [
      911.42,
      919.279
    ],
    "en": [
      "due to WRED. Now, notice that I’ve set up the 6 DSCP bits a little differently. First"
    ],
    "ru": [
      "из-за WRED. Теперь обратите внимание, что я настроил 6 битов DSCP немного иначе. Первый"
    ]
  },
  {
    "time": [
      919.279,
      924.9
    ],
    "en": [
      "up, in AF this bit on the end is always set to 0. I’m not exactly sure the reason for"
    ],
    "ru": [
      "вверх, в AF этот бит на конце всегда установлен в 0. Я не совсем уверен, в чем причина"
    ]
  },
  {
    "time": [
      924.9,
      931.54
    ],
    "en": [
      "this, it might just be because the designers of AF decided they didn’t need so many values."
    ],
    "ru": [
      "это могло быть просто потому, что разработчики AF решили, что им не нужно так много значений."
    ]
  },
  {
    "time": [
      931.54,
      937.41
    ],
    "en": [
      "These two bits in red represent the drop precedence. And these three bits represent the class."
    ],
    "ru": [
      "Эти два бита красного цвета представляют приоритет отбрасывания. И эти три бита представляют класс."
    ]
  },
  {
    "time": [
      937.41,
      944.06
    ],
    "en": [
      "Now, when we write an AF value, it’s written as AF X Y, with X being the decimal number"
    ],
    "ru": [
      "Теперь, когда мы пишем значение AF, оно записывается как AF X Y, где X - десятичное число."
    ]
  },
  {
    "time": [
      944.06,
      949.5889999999999
    ],
    "en": [
      "of the class and Y being the decimal number of the drop precedence. Let’s take a look"
    ],
    "ru": [
      "класса, а Y - десятичное число приоритета отбрасывания. Давайте взглянем"
    ]
  },
  {
    "time": [
      949.5889999999999,
      951.85
    ],
    "en": [
      "at an example to see how to do it."
    ],
    "ru": [
      "на примере, чтобы увидеть, как это сделать."
    ]
  },
  {
    "time": [
      951.85,
      961.029
    ],
    "en": [
      "So, we have a binary DSCP value of 001 010. As I said, in the AF system we write it as"
    ],
    "ru": [
      "Итак, у нас есть двоичное значение DSCP 001 010. Как я уже сказал, в системе AF мы записываем его как"
    ]
  },
  {
    "time": [
      961.029,
      966.5
    ],
    "en": [
      "AF X Y, with X being the decimal number of the class and Y being the decimal number of"
    ],
    "ru": [
      "AF X Y, где X - десятичное число класса, а Y - десятичное число"
    ]
  },
  {
    "time": [
      966.5,
      973.17
    ],
    "en": [
      "the drop precedence. To do that, we split it up into two parts. Three bits for the class,"
    ],
    "ru": [
      "приоритет отбрасывания. Для этого мы разделили его на две части. Три бита для класса,"
    ]
  },
  {
    "time": [
      973.17,
      978.85
    ],
    "en": [
      "two bits for the drop precedence. So, the decimal of the class is 1, and the decimal"
    ],
    "ru": [
      "два бита для приоритета отбрасывания. Итак, десятичная дробь класса равна 1, а десятичная"
    ]
  },
  {
    "time": [
      978.85,
      985.65
    ],
    "en": [
      "of the drop precedence is also 1. So, this is AF1 1, or AF11, you can call it whichever"
    ],
    "ru": [
      "приоритета отбрасывания также равна 1. Итак, это AF1 1 или AF11, вы можете называть это как угодно"
    ]
  },
  {
    "time": [
      985.65,
      993.07
    ],
    "en": [
      "you like. Now, really this is just a 6-bit DSCP number. If I write the normal 6-bit decimal"
    ],
    "ru": [
      "тебе нравится. На самом деле это всего лишь 6-битное число DSCP. Если я напишу обычную 6-битную десятичную дробь"
    ]
  },
  {
    "time": [
      993.07,
      1002.8389999999999
    ],
    "en": [
      "values up top, 1 2 4 8 16 and 32, we can calculate that this is DSCP 10. So, AF11 is the same"
    ],
    "ru": [
      "значения вверху, 1 2 4 8 16 и 32, мы можем вычислить, что это DSCP 10. Итак, AF11 то же самое"
    ]
  },
  {
    "time": [
      1002.8389999999999,
      1009.96
    ],
    "en": [
      "value as DSCP10. AF is just a set of standard DSCP markings, which is easier to work with"
    ],
    "ru": [
      "значение как DSCP10. AF - это просто набор стандартных разметок DSCP, с которыми проще работать"
    ]
  },
  {
    "time": [
      1009.96,
      1015.529
    ],
    "en": [
      "than simply having 64 DSCP values with no system of standard values."
    ],
    "ru": [
      "чем просто наличие 64 значений DSCP без системы стандартных значений."
    ]
  },
  {
    "time": [
      1015.529,
      1024.621
    ],
    "en": [
      "Let’s do some more practice. Now we have binary 001 100. What AF value is this? This"
    ],
    "ru": [
      "Давай еще попрактикуемся. Теперь у нас есть двоичное 001 100. Что это за значение AF? Этот"
    ]
  },
  {
    "time": [
      1024.621,
      1032.3
    ],
    "en": [
      "time it’s class 1, drop precedence 2. So it’s AF1 2, or AF12. How could you write"
    ],
    "ru": [
      "раз это класс 1, отбросьте приоритет 2. Итак, это AF1 2 или AF12. Как ты мог написать"
    ]
  },
  {
    "time": [
      1032.3,
      1038.62
    ],
    "en": [
      "this as a normal decimal DSCP value? Here are the values of each bit again. In this"
    ],
    "ru": [
      "это как обычное десятичное значение DSCP? Вот снова значения каждого бита. В этом"
    ]
  },
  {
    "time": [
      1038.62,
      1046.59
    ],
    "en": [
      "case, the DSCP value is also written as 12. So, AF12 is the same as DSCP 12."
    ],
    "ru": [
      "В этом случае значение DSCP также записывается как 12. Таким образом, AF12 совпадает с DSCP 12."
    ]
  },
  {
    "time": [
      1046.59,
      1053.05
    ],
    "en": [
      "Here’s another one. Try to figure it out on your own, what AF value is this? Also,"
    ],
    "ru": [
      "Вот еще один. Попробуйте разобраться самостоятельно, какое это значение AF? Также,"
    ]
  },
  {
    "time": [
      1053.05,
      1057.89
    ],
    "en": [
      "how could we write it as a normal decimal DSCP value? Try to figure it out without me"
    ],
    "ru": [
      "как мы могли записать его как обычное десятичное значение DSCP? Попробуй разобраться без меня"
    ]
  },
  {
    "time": [
      1057.89,
      1063.34
    ],
    "en": [
      "showing you the value of each binary bit. Okay, let’s check. Here are the values of"
    ],
    "ru": [
      "показывая вам значение каждого двоичного бита. Хорошо, давай проверим. Вот значения"
    ]
  },
  {
    "time": [
      1063.34,
      1072.94
    ],
    "en": [
      "each bit. This is AF2 3, or AF23. Written as a normal DSCP value it is DSCP 22. Hopefully"
    ],
    "ru": [
      "каждый бит. Это AF2 3 или AF23. Написанное как обычное значение DSCP, это DSCP 22. Надеюсь,"
    ]
  },
  {
    "time": [
      1072.94,
      1078.8
    ],
    "en": [
      "you were able to figure that out. If not that’s fine, let’s practice a couple more times."
    ],
    "ru": [
      "вы смогли это понять. Если нет, то давайте еще пару раз попрактикуемся."
    ]
  },
  {
    "time": [
      1078.8,
      1086.21
    ],
    "en": [
      "This time we have a binary DSCP value of 011 100. What AF value is this, and how is it"
    ],
    "ru": [
      "На этот раз у нас есть двоичное значение DSCP 011 100. Что это за значение AF и как оно"
    ]
  },
  {
    "time": [
      1086.21,
      1093.059
    ],
    "en": [
      "written as a normal DSCP value? Let’s check. Here are the values of each bit. So, this"
    ],
    "ru": [
      "записано как обычное значение DSCP? Давайте проверим. Вот значения каждого бита. Итак, это"
    ]
  },
  {
    "time": [
      1093.059,
      1104.79
    ],
    "en": [
      "is AF3 2, or AF32. Written as a normal DSCP value, it is DSCP 28. So, AF32 is the same as DSCP 28."
    ],
    "ru": [
      "это AF3 2 или AF32. Записанное как обычное значение DSCP, это DSCP 28. Итак, AF32 совпадает с DSCP 28."
    ]
  },
  {
    "time": [
      1104.79,
      1110.7
    ],
    "en": [
      "as DSCP 28. Okay, here’s one more for practice. Again, what’s the AF value, and how can you write"
    ],
    "ru": [
      "как DSCP 28. Хорошо, вот еще один для практики. Опять же, каково значение AF и как можно написать"
    ]
  },
  {
    "time": [
      1110.7,
      1117.88
    ],
    "en": [
      "it as a normal DSCP value? Let’s check. So, a class of 4 and a drop precedence of"
    ],
    "ru": [
      "это как нормальное значение DSCP? Давайте проверим. Итак, класс 4 и приоритет отбрасывания"
    ]
  },
  {
    "time": [
      1117.88,
      1128.24
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
      1117.88,
      1128.24
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
      1128.24,
      1136.19
    ],
    "en": [
      "is equivalent to DSCP 38. By the way, within AF, 43 is the highest value. There is no class"
    ],
    "ru": [
      "эквивалентно DSCP 38. Между прочим, в AF 43 - это максимальное значение. Нет класса"
    ]
  },
  {
    "time": [
      1136.19,
      1143.29
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
      1136.19,
      1143.29
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
      1143.29,
      1148.11
    ],
    "en": [
      "values. If you want a quick way to calculate it without writing out the binary every time,"
    ],
    "ru": [
      "ценности. Если вы хотите быстро вычислить его, не записывая каждый раз двоичный файл,"
    ]
  },
  {
    "time": [
      1148.11,
      1156.6
    ],
    "en": [
      "here’s the formula. 8X plus 2Y, again the class is X and the drop precedence is Y. The"
    ],
    "ru": [
      "вот формула. 8X плюс 2Y, снова класс X и приоритет отбрасывания Y."
    ]
  },
  {
    "time": [
      1156.6,
      1161.85
    ],
    "en": [
      "reason for this is that 8 is the lowest value of the ‘X’ portion, and 2 is the lowest"
    ],
    "ru": [
      "Причина этого в том, что 8 - самое низкое значение части \"X\", а 2 - самое низкое."
    ]
  },
  {
    "time": [
      1161.85,
      1168.6
    ],
    "en": [
      "value of the ‘Y’ portion. So to calculate it it’s 8X plus 2Y. It’s always best to"
    ],
    "ru": [
      "значение части «Y». Итак, чтобы рассчитать это, это 8X плюс 2Y. Всегда лучше"
    ]
  },
  {
    "time": [
      1168.6,
      1174.23
    ],
    "en": [
      "understand the binary underneath it all, whether you’re learning IPv4 addresses, subnetting,"
    ],
    "ru": [
      "понимать двоичный код, лежащий в основе всего этого, независимо от того, изучаете ли вы IPv4-адреса, разбиение на подсети,"
    ]
  },
  {
    "time": [
      1174.23,
      1180.38
    ],
    "en": [
      "IPv6, matching with ACLs, QoS, whatever. But after understanding the binary, it’s also"
    ],
    "ru": [
      "IPv6, соответствие ACL, QoS, что угодно. Но после понимания двоичного кода он также"
    ]
  },
  {
    "time": [
      1180.38,
      1184.72
    ],
    "en": [
      "nice to have some shortcuts like this, 8X plus 2Y."
    ],
    "ru": [
      "приятно иметь такие ярлыки, 8X плюс 2Y."
    ]
  },
  {
    "time": [
      1184.72,
      1191.88
    ],
    "en": [
      "So, here’s a summary of all of the AF values. 4 classes with 3 drop precedence values each."
    ],
    "ru": [
      "Итак, вот сводка всех значений AF. 4 класса с 3 значениями приоритета отбрасывания в каждом."
    ]
  },
  {
    "time": [
      1191.88,
      1198.52
    ],
    "en": [
      "So, within these AF values traffic marked as AF41 gets the best treatment. It’s in"
    ],
    "ru": [
      "Таким образом, в пределах этих значений AF трафик, помеченный как AF41, получает лучшую обработку. Это в"
    ]
  },
  {
    "time": [
      1198.52,
      1204.501
    ],
    "en": [
      "the highest priority class, but has the lowest drop precedence. On the other hand, traffic"
    ],
    "ru": [
      "класс наивысшего приоритета, но имеет самый низкий приоритет отбрасывания. С другой стороны, трафик"
    ]
  },
  {
    "time": [
      1204.501,
      1210.15
    ],
    "en": [
      "marked as AF13 gets the worst treatment, being in the lowest priority class with the highest"
    ],
    "ru": [
      "помеченный как AF13, подвергается наихудшему лечению, так как относится к классу с наименьшим приоритетом с наивысшим"
    ]
  },
  {
    "time": [
      1210.15,
      1215.45
    ],
    "en": [
      "drop precedence. I will include flashcards for all of these to test that you can convert"
    ],
    "ru": [
      "отказаться от приоритета. Я добавлю карточки для всего этого, чтобы вы могли их преобразовать."
    ]
  },
  {
    "time": [
      1215.45,
      1221.54
    ],
    "en": [
      "them from the AF values to the regular DSCP values. I’m not expecting you to memorize"
    ],
    "ru": [
      "их из значений AF в обычные значения DSCP. Я не жду, что ты запомнишь"
    ]
  },
  {
    "time": [
      1221.54,
      1226.85
    ],
    "en": [
      "them, but you should be able to calculate the DSCP value of a given AF value."
    ],
    "ru": [
      "их, но вы должны иметь возможность вычислить значение DSCP для данного значения AF."
    ]
  },
  {
    "time": [
      1226.85,
      1234.42
    ],
    "en": [
      "Okay, that’s all for AF. I hope my explanation was clear. If not, feel free to ask questions."
    ],
    "ru": [
      "Ладно, это все для AF. Надеюсь, мое объяснение было ясным. Если нет, не стесняйтесь задавать вопросы."
    ]
  },
  {
    "time": [
      1234.42,
      1240.5
    ],
    "en": [
      "Finally, let’s look at CS. Fortunately, CS is actually quite simple."
    ],
    "ru": [
      "Наконец, давайте посмотрим на CS. К счастью, CS на самом деле довольно прост."
    ]
  },
  {
    "time": [
      1240.5,
      1248.4
    ],
    "en": [
      "CS, class selector, defines eight DSCP values for backward compatibility with IPP. How does"
    ],
    "ru": [
      "CS, селектор классов, определяет восемь значений DSCP для обратной совместимости с IPP. Как"
    ]
  },
  {
    "time": [
      1248.4,
      1255.15
    ],
    "en": [
      "that backward compatibility work? The three bits that were added for DSCP are set to 0,"
    ],
    "ru": [
      "что обратная совместимость работает? Три бита, которые были добавлены для DSCP, установлены в 0,"
    ]
  },
  {
    "time": [
      1255.15,
      1261.53
    ],
    "en": [
      "and the original IPP bits are used to make 8 possible values. So, here’s the DSCP field"
    ],
    "ru": [
      "а исходные биты IPP используются для получения 8 возможных значений. Итак, вот поле DSCP"
    ]
  },
  {
    "time": [
      1261.53,
      1267.54
    ],
    "en": [
      "again. Notice that the three bits on the right are set to 0, and the three bits on the left,"
    ],
    "ru": [
      "опять таки. Обратите внимание, что три бита справа установлены в 0, а три бита слева,"
    ]
  },
  {
    "time": [
      1267.54,
      1274.3
    ],
    "en": [
      "the original IP precedence bits, can be either 0 or 1. Here are the decimal values of those"
    ],
    "ru": [
      "исходные биты приоритета IP могут быть 0 или 1. Вот десятичные значения этих"
    ]
  },
  {
    "time": [
      1274.3,
      1282.59
    ],
    "en": [
      "three bits, 1 2 and 4. So, IPP gives us values from 0 through 7. The equivalent values in"
    ],
    "ru": [
      "три бита, 1 2 и 4. Итак, IPP дает нам значения от 0 до 7. Эквивалентные значения в"
    ]
  },
  {
    "time": [
      1282.59,
      1291.65
    ],
    "en": [
      "CS are CS0, CS1, CS2, 3, 4, 5, 6, and 7. Very simple. Now, you should also know the decimal"
    ],
    "ru": [
      "CS - это CS0, CS1, CS2, 3, 4, 5, 6 и 7. Очень просто. Теперь вам также следует знать десятичную дробь"
    ]
  },
  {
    "time": [
      1291.65,
      1297.4
    ],
    "en": [
      "DSCP value of these. Although CS is a way of organizing the DSCP field into a set of"
    ],
    "ru": [
      "DSCP значение этих. Хотя CS - это способ организации поля DSCP в набор"
    ]
  },
  {
    "time": [
      1297.4,
      1304.28
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
      1297.4,
      1304.28
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
      1304.28,
      1313.19
    ],
    "en": [
      "just 8 multiplied by the CS number. CS0 is 0, CS1 is 8, CS2 is 16, CS3 is 24, CS4 is"
    ],
    "ru": [
      "просто 8 умножить на число CS. CS0 - 0, CS1 - 8, CS2 - 16, CS3 - 24, CS4 -"
    ]
  },
  {
    "time": [
      1313.19,
      1323.66
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
      1313.19,
      1323.66
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
      1323.66,
      1332.14
    ],
    "en": [
      "Okay, so we’ve got DF, EF, AF, and CS. How are we supposed to take those values and actually"
    ],
    "ru": [
      "Итак, у нас есть DF, EF, AF и CS. Как мы должны воспринимать эти ценности и на самом деле"
    ]
  },
  {
    "time": [
      1332.14,
      1338.64
    ],
    "en": [
      "use them? RFC 4954 was developed with the help of Cisco to bring all of these values"
    ],
    "ru": [
      "используй их? RFC 4954 был разработан с помощью Cisco, чтобы привести все эти ценности"
    ]
  },
  {
    "time": [
      1338.64,
      1344.64
    ],
    "en": [
      "together and standardize their use. Many specific recommendations are given in the RFC, but"
    ],
    "ru": [
      "вместе и стандартизировать их использование. Многие конкретные рекомендации приведены в RFC, но"
    ]
  },
  {
    "time": [
      1344.64,
      1350.48
    ],
    "en": [
      "here are a few key ones. Voice traffic is marked as EF, because it requires very low"
    ],
    "ru": [
      "вот несколько ключевых. Голосовой трафик помечен как EF, потому что он требует очень низкого"
    ]
  },
  {
    "time": [
      1350.48,
      1357.16
    ],
    "en": [
      "delay, jitter, and loss. Interactive video should be marked as AF4x, meaning AF41, 2,"
    ],
    "ru": [
      "задержка, дрожание и потеря. Интерактивное видео должно быть помечено как AF4x, то есть AF41, 2,"
    ]
  },
  {
    "time": [
      1357.16,
      1365.57
    ],
    "en": [
      "or 3. Streaming video is marked as AF3x, high priority data is AF2x, and best effort data"
    ],
    "ru": [
      "или 3. Потоковое видео помечено как AF3x, данные с высоким приоритетом - AF2x, а данные с максимальным приоритетом"
    ]
  },
  {
    "time": [
      1365.57,
      1371.78
    ],
    "en": [
      "is marked as DF, a DSCP value of 0. There are many more recommendations given within"
    ],
    "ru": [
      "помечен как DF, значение DSCP равно 0. Есть еще много рекомендаций, приведенных в"
    ]
  },
  {
    "time": [
      1371.78,
      1377.501
    ],
    "en": [
      "the RFC, do a google search for it if you’re interested. However, in the end it’s up"
    ],
    "ru": [
      "RFC, поищите его в Google, если вам интересно. Однако в конце концов все кончено."
    ]
  },
  {
    "time": [
      1377.501,
      1383.179
    ],
    "en": [
      "to the engineer designing the QoS policy of the network which traffic will get which markings."
    ],
    "ru": [
      "инженеру, разрабатывающему политику QoS сети, какой трафик получит какие маркировки."
    ]
  },
  {
    "time": [
      1383.179,
      1385.37
    ],
    "en": [
      "These are just standard recommendations."
    ],
    "ru": [
      "Это просто стандартные рекомендации."
    ]
  },
  {
    "time": [
      1385.37,
      1392.31
    ],
    "en": [
      "Okay, let’s move on to take a quick look at the topic of trust boundaries. The trust"
    ],
    "ru": [
      "Хорошо, давайте перейдем к теме границ доверия. Доверие"
    ]
  },
  {
    "time": [
      1392.31,
      1396.83
    ],
    "en": [
      "boundary of a network defines where devices trust and don’t trust the QoS markings of"
    ],
    "ru": [
      "граница сети определяет, где устройства доверяют и не доверяют маркировке QoS"
    ]
  },
  {
    "time": [
      1396.83,
      1402.25
    ],
    "en": [
      "received messages. If the markings are trusted, that means the device will forward the message"
    ],
    "ru": [
      "полученные сообщения. Если отметкам доверяют, это означает, что устройство перешлет сообщение."
    ]
  },
  {
    "time": [
      1402.25,
      1406.92
    ],
    "en": [
      "without changing the markings. But if the markings aren’t trusted, the device will"
    ],
    "ru": [
      "без изменения маркировки. Но если маркировке не доверять, устройство"
    ]
  },
  {
    "time": [
      1406.92,
      1412.42
    ],
    "en": [
      "change the markings according to the configured policy. So, for example let’s say the trust"
    ],
    "ru": [
      "изменить маркировку в соответствии с настроенной политикой. Так, например, доверие"
    ]
  },
  {
    "time": [
      1412.42,
      1420.82
    ],
    "en": [
      "boundary is here, at SW1. Phone1 sends a message marked as EF and CoS5 to SW1. Note that CoS"
    ],
    "ru": [
      "граница здесь, на SW1. Phone1 отправляет сообщение, помеченное как EF и CoS5, на SW1. Обратите внимание, что CoS"
    ]
  },
  {
    "time": [
      1420.82,
      1427.94
    ],
    "en": [
      "is referring to the PCP field in the dot1q header. You may hear it called CoS5 or PCP5,"
    ],
    "ru": [
      "относится к полю PCP в заголовке dot1q. Вы можете услышать, что это называется CoS5 или PCP5,"
    ]
  },
  {
    "time": [
      1427.94,
      1434.12
    ],
    "en": [
      "you should be familiar with both terms. Anyway, SW1 doesn’t trust the markings from phone1"
    ],
    "ru": [
      "вы должны быть знакомы с обоими терминами. В любом случае SW1 не доверяет маркировке с phone1."
    ]
  },
  {
    "time": [
      1434.12,
      1439.41
    ],
    "en": [
      "because it’s from outside of the trust boundary. So perhaps it changes the DSCP marking to"
    ],
    "ru": [
      "потому что это извне границы доверия. Так что, возможно, он меняет маркировку DSCP на"
    ]
  },
  {
    "time": [
      1439.41,
      1446.24
    ],
    "en": [
      "DF and the CoS marking to 0, before forwarding it to R1, which forwards it on to R2, with"
    ],
    "ru": [
      "DF и маркировка CoS на 0, прежде чем пересылать ее на R1, который пересылает ее на R2, с"
    ]
  },
  {
    "time": [
      1446.24,
      1452.53
    ],
    "en": [
      "just the DF marking because there is no dot1q header. Now, this configuration isn’t ideal."
    ],
    "ru": [
      "только маркировка DF, потому что нет заголовка dot1q. Эта конфигурация не идеальна."
    ]
  },
  {
    "time": [
      1452.53,
      1456.549
    ],
    "en": [
      "Usually it’s best to trust the markings from an IP phone because we want its traffic"
    ],
    "ru": [
      "Обычно лучше доверять маркировке IP-телефона, потому что нам нужен его трафик."
    ]
  },
  {
    "time": [
      1456.549,
      1458.23
    ],
    "en": [
      "to be high priority anyway."
    ],
    "ru": [
      "в любом случае иметь высокий приоритет."
    ]
  },
  {
    "time": [
      1458.23,
      1463.26
    ],
    "en": [
      "If an IP phone is connected to the switchport, it is recommended to move the trust boundary"
    ],
    "ru": [
      "Если к порту коммутатора подключен IP-телефон, рекомендуется переместить границу доверия."
    ]
  },
  {
    "time": [
      1463.26,
      1468.809
    ],
    "en": [
      "to the IP phone. This is done via configuration on the switch port connected to the IP phone,"
    ],
    "ru": [
      "к IP-телефону. Это делается через конфигурацию порта коммутатора, подключенного к IP-телефону,"
    ]
  },
  {
    "time": [
      1468.809,
      1475.929
    ],
    "en": [
      "by the way, not directly on the phone itself. So, if a tech-savvy user is able to mark their"
    ],
    "ru": [
      "кстати, прямо не на самом телефоне. Итак, если технически подкованный пользователь может отметить свои"
    ]
  },
  {
    "time": [
      1475.929,
      1480.299
    ],
    "en": [
      "PC’s traffic with a high-priority marking to get faster service, the marking will be"
    ],
    "ru": [
      "Трафик ПК с высокоприоритетной маркировкой для более быстрого обслуживания, маркировка будет"
    ]
  },
  {
    "time": [
      1480.299,
      1485.79
    ],
    "en": [
      "changed according to the configured policy. But traffic sent from the phone itself will"
    ],
    "ru": [
      "изменено в соответствии с настроенной политикой. Но трафик, отправленный с самого телефона, будет"
    ]
  },
  {
    "time": [
      1485.79,
      1492.48
    ],
    "en": [
      "be trusted by the switch. In this case, if phone1 sends an EF and CoS5-marked message"
    ],
    "ru": [
      "коммутатор доверяет. В этом случае, если phone1 отправляет сообщение с пометкой EF и CoS5"
    ]
  },
  {
    "time": [
      1492.48,
      1499.24
    ],
    "en": [
      "SW1 will trust those markings and not change them. On the other hand, if PC2 for example"
    ],
    "ru": [
      "SW1 будет доверять этой маркировке и не менять ее. С другой стороны, если ПК2 например"
    ]
  },
  {
    "time": [
      1499.24,
      1504.48
    ],
    "en": [
      "sends an EF-marked packet, the switch should not trust that, and for example it might change"
    ],
    "ru": [
      "отправляет пакет с пометкой EF, коммутатор не должен доверять этому, и, например, он может измениться"
    ]
  },
  {
    "time": [
      1504.48,
      1513.01
    ],
    "en": [
      "the EF marking, DSCP 46, to DF, DSCP 0. We don’t want data applications on the PC being"
    ],
    "ru": [
      "маркировка EF, DSCP 46, на DF, DSCP 0. Мы не хотим, чтобы приложения для обработки данных на ПК"
    ]
  },
  {
    "time": [
      1513.01,
      1517.54
    ],
    "en": [
      "treated with the same priority as the voice traffic from the phones. Okay, that’s all"
    ],
    "ru": [
      "обрабатывается с таким же приоритетом, как и голосовой трафик с телефонов. Ладно это все"
    ]
  },
  {
    "time": [
      1517.54,
      1522.121
    ],
    "en": [
      "for trust boundaries. You don’t need to know how to configure them for the exam, but"
    ],
    "ru": [
      "для границ доверия. Вам не нужно знать, как их настраивать для экзамена, но"
    ]
  },
  {
    "time": [
      1522.121,
      1525.799
    ],
    "en": [
      "just be aware of the concept of trust boundaries and how they work."
    ],
    "ru": [
      "просто помните о концепции границ доверия и о том, как они работают."
    ]
  },
  {
    "time": [
      1525.799,
      1530.78
    ],
    "en": [
      "Okay, that’s all for classification and marking. Now let’s move on to queuing and"
    ],
    "ru": [
      "Ладно, это все по классификации и маркировке. Теперь перейдем к очереди и"
    ]
  },
  {
    "time": [
      1530.78,
      1535.8
    ],
    "en": [
      "congestion management. I already introduced it in the previous video, but there’s a"
    ],
    "ru": [
      "управление перегрузками. Я уже рассказывал об этом в предыдущем видео, но есть"
    ]
  },
  {
    "time": [
      1535.8,
      1541.45
    ],
    "en": [
      "bit more to be covered for the CCNA. For review, when a network device receives traffic at"
    ],
    "ru": [
      "немного больше, чтобы быть покрытым для CCNA. Для обзора, когда сетевое устройство получает трафик на"
    ]
  },
  {
    "time": [
      1541.45,
      1546.05
    ],
    "en": [
      "a faster rate than it can forward the traffic out of the appropriate interface, packets"
    ],
    "ru": [
      "быстрее, чем он может перенаправить трафик из соответствующего интерфейса, пакеты"
    ]
  },
  {
    "time": [
      1546.05,
      1550.54
    ],
    "en": [
      "are placed in that interface’s queue as they wait to be forwarded. When the queue"
    ],
    "ru": [
      "помещаются в очередь этого интерфейса в ожидании пересылки. Когда очередь"
    ]
  },
  {
    "time": [
      1550.54,
      1555.04
    ],
    "en": [
      "becomes full, packets that don’t fit in the queue are dropped, and this is called"
    ],
    "ru": [
      "становится заполненным, пакеты, не помещающиеся в очередь, отбрасываются, и это называется"
    ]
  },
  {
    "time": [
      1555.04,
      1563.809
    ],
    "en": [
      "tail drop. RED and WRED, which I already introduced, drop packets early to avoid tail drop. Here’s"
    ],
    "ru": [
      "опускание хвоста. RED и WRED, которые я уже представил, отбрасывают пакеты раньше, чтобы избежать выпадения хвоста. Вот"
    ]
  },
  {
    "time": [
      1563.809,
      1569.55
    ],
    "en": [
      "the image I showed last video. The router is forwarding packets in an FIFO manner, but"
    ],
    "ru": [
      "изображение я показал в прошлом видео. Маршрутизатор пересылает пакеты в режиме FIFO, но"
    ]
  },
  {
    "time": [
      1569.55,
      1575.76
    ],
    "en": [
      "the queue gets full and packets start getting dropped. RED or WRED could help avoid this"
    ],
    "ru": [
      "очередь заполняется, и пакеты начинают сбрасываться. КРАСНЫЙ или WRED могут помочь избежать этого"
    ]
  },
  {
    "time": [
      1575.76,
      1578.23
    ],
    "en": [
      "by dropping packets earlier."
    ],
    "ru": [
      "отбрасывая пакеты раньше."
    ]
  },
  {
    "time": [
      1578.23,
      1585.12
    ],
    "en": [
      "However, an essential part of QoS is the use of multiple queues, not just a single queue."
    ],
    "ru": [
      "Однако важной частью QoS является использование нескольких очередей, а не только одной очереди."
    ]
  },
  {
    "time": [
      1585.12,
      1590.24
    ],
    "en": [
      "And this is where classification really plays a role. The device can match traffic based"
    ],
    "ru": [
      "И здесь классификация действительно играет роль. Устройство может соответствовать трафику на основе"
    ]
  },
  {
    "time": [
      1590.24,
      1595.559
    ],
    "en": [
      "on various factors, for the example the DSCP marking in the IP header, but also many other"
    ],
    "ru": [
      "от различных факторов, например, маркировки DSCP в IP-заголовке, а также многих других"
    ]
  },
  {
    "time": [
      1595.559,
      1600.82
    ],
    "en": [
      "things, and then place the traffic in the appropriate queue. However, the device is"
    ],
    "ru": [
      "вещи, а затем поместите трафик в соответствующую очередь. Однако устройство"
    ]
  },
  {
    "time": [
      1600.82,
      1606.04
    ],
    "en": [
      "only able to forward one frame out of an interface at once, so a scheduler is used to decide"
    ],
    "ru": [
      "может перенаправить только один кадр из интерфейса за раз, поэтому планировщик используется для решения"
    ]
  },
  {
    "time": [
      1606.04,
      1612.179
    ],
    "en": [
      "which queue traffic is forwarded from next. Prioritization allows the scheduler to give"
    ],
    "ru": [
      "трафик какой очереди перенаправляется из следующей. Приоритезация позволяет планировщику дать"
    ]
  },
  {
    "time": [
      1612.179,
      1617.23
    ],
    "en": [
      "certain queues more priority than others. So, this is where the power of QoS really"
    ],
    "ru": [
      "определенные очереди имеют больший приоритет, чем другие. Итак, вот где действительно сила QoS"
    ]
  },
  {
    "time": [
      1617.23,
      1623.49
    ],
    "en": [
      "becomes clear. Here’s that same example as before, however this time let’s say the"
    ],
    "ru": [
      "становится ясно. Вот тот же пример, что и раньше, но на этот раз допустим"
    ]
  },
  {
    "time": [
      1623.49,
      1627.7
    ],
    "en": [
      "router’s interface forwarding the traffic has been configured with multiple queues."
    ],
    "ru": [
      "Интерфейс маршрутизатора, перенаправляющий трафик, был настроен с несколькими очередями."
    ]
  },
  {
    "time": [
      1627.7,
      1633.99
    ],
    "en": [
      "Here’s how it works. Ingress traffic is received by the router. Ingress just means"
    ],
    "ru": [
      "Вот как это работает. Маршрутизатор принимает входящий трафик. Ingress просто означает"
    ]
  },
  {
    "time": [
      1633.99,
      1639.63
    ],
    "en": [
      "incoming traffic, traffic entering the router. Then it performs routing, meaning it decides"
    ],
    "ru": [
      "входящий трафик, трафик, входящий в роутер. Затем он выполняет маршрутизацию, то есть решает"
    ]
  },
  {
    "time": [
      1639.63,
      1645.28
    ],
    "en": [
      "which interface to send it out of, as well as other things like NAT if necessary. Then"
    ],
    "ru": [
      "с какого интерфейса его отправлять, а также другие вещи, например NAT, если это необходимо. потом"
    ]
  },
  {
    "time": [
      1645.28,
      1650.53
    ],
    "en": [
      "it classifies the traffic and places it into the appropriate queue. In this case there"
    ],
    "ru": [
      "он классифицирует трафик и помещает его в соответствующую очередь. В этом случае есть"
    ]
  },
  {
    "time": [
      1650.53,
      1655.59
    ],
    "en": [
      "are four queues and traffic is classified and placed in a queue depending on, for example,"
    ],
    "ru": [
      "четыре очереди, и трафик классифицируется и помещается в очередь в зависимости, например, от"
    ]
  },
  {
    "time": [
      1655.59,
      1660.919
    ],
    "en": [
      "the DSCP marking. Then the scheduler decides how much traffic to send from each queue,"
    ],
    "ru": [
      "маркировка DSCP. Затем планировщик решает, сколько трафика отправить из каждой очереди,"
    ]
  },
  {
    "time": [
      1660.919,
      1667.03
    ],
    "en": [
      "in which order, and the router forwards the traffic, one packet at a time. This is an"
    ],
    "ru": [
      "в каком порядке маршрутизатор пересылает трафик, по одному пакету за раз. Это"
    ]
  },
  {
    "time": [
      1667.03,
      1671.929
    ],
    "en": [
      "oversimplification, but its basically how it works. After the router decides which interface"
    ],
    "ru": [
      "чрезмерное упрощение, но в основном это работает. После того, как роутер решит, какой интерфейс"
    ]
  },
  {
    "time": [
      1671.929,
      1678.64
    ],
    "en": [
      "to forward the packet out of, it is classified, queued, scheduled, and then transmitted."
    ],
    "ru": [
      "для пересылки пакета он классифицируется, ставится в очередь, планируется и затем передается."
    ]
  },
  {
    "time": [
      1678.64,
      1684.289
    ],
    "en": [
      "A common scheduling method is weighted round-robin. round robin means that packets are taken from"
    ],
    "ru": [
      "Распространенным методом планирования является циклический взвешенный алгоритм. циклический означает, что пакеты берутся из"
    ]
  },
  {
    "time": [
      1684.289,
      1689.58
    ],
    "en": [
      "each queue in order, cyclically. And weighted means that more data is taken from high priority"
    ],
    "ru": [
      "каждую очередь по порядку, циклически. А взвешенный означает, что больше данных берется из высокоприоритетных"
    ]
  },
  {
    "time": [
      1689.58,
      1694.64
    ],
    "en": [
      "queues each time the scheduler reaches that queue, so those queues get higher output."
    ],
    "ru": [
      "очереди каждый раз, когда планировщик достигает этой очереди, поэтому эти очереди получают более высокий выход."
    ]
  },
  {
    "time": [
      1694.64,
      1702.18
    ],
    "en": [
      "Next, here’s a term you definitely should know. CBWFQ, class-based weighted fair queuing,"
    ],
    "ru": [
      "Далее, вот термин, который вам обязательно стоит знать. CBWFQ, взвешенная справедливая организация очереди на основе классов,"
    ]
  },
  {
    "time": [
      1702.18,
      1707.26
    ],
    "en": [
      "is a popular method of scheduling, using a weighted round-robin scheduler while guaranteeing"
    ],
    "ru": [
      "- популярный метод планирования, использующий взвешенный циклический планировщик и гарантирующий"
    ]
  },
  {
    "time": [
      1707.26,
      1712.7
    ],
    "en": [
      "each queue a certain percentage of the interface’s bandwidth during times of congestion. So,"
    ],
    "ru": [
      "каждая очередь занимает определенный процент пропускной способности интерфейса во время перегрузки. Так,"
    ]
  },
  {
    "time": [
      1712.7,
      1720.169
    ],
    "en": [
      "let’s put these together. Here’s the process again. Classify the traffic, place it in queues,"
    ],
    "ru": [
      "давайте соберем их вместе. И снова процесс. Классифицируйте трафик, ставьте в очереди,"
    ]
  },
  {
    "time": [
      1720.169,
      1725.5
    ],
    "en": [
      "schedule it, and transmit. The device is using a weighted round robin scheduler, sending"
    ],
    "ru": [
      "Запланируйте это и передайте. Устройство использует взвешенный циклический планировщик, отправляя"
    ]
  },
  {
    "time": [
      1725.5,
      1730.809
    ],
    "en": [
      "a certain amount of traffic from each queue in cycles. On top of that, each queue gets"
    ],
    "ru": [
      "определенный объем трафика из каждой очереди циклически. Вдобавок к этому каждая очередь получает"
    ]
  },
  {
    "time": [
      1730.809,
      1736.14
    ],
    "en": [
      "a guaranteed minimum amount of bandwidth, even when the queues are congested. So, this"
    ],
    "ru": [
      "гарантированный минимальный объем полосы пропускания, даже когда очереди перегружены. Итак, это"
    ]
  },
  {
    "time": [
      1736.14,
      1740.84
    ],
    "en": [
      "is getting a lot more advanced than just a single output queue. But it’s still not"
    ],
    "ru": [
      "становится намного более продвинутым, чем простая очередь вывода. Но это все еще не так"
    ]
  },
  {
    "time": [
      1740.84,
      1747.43
    ],
    "en": [
      "ideal. Specifically it’s not ideal for voice and video traffic. Even if the traffic receives"
    ],
    "ru": [
      "идеальный. В частности, он не идеален для голосового и видеотрафика. Даже если трафик получает"
    ]
  },
  {
    "time": [
      1747.43,
      1752.22
    ],
    "en": [
      "a guaranteed minimum amount of bandwidth, round-robin can add delay and jitter because"
    ],
    "ru": [
      "гарантированный минимальный объем полосы пропускания, циклический перебор может добавить задержку и джиттер, потому что"
    ]
  },
  {
    "time": [
      1752.22,
      1758.34
    ],
    "en": [
      "even the high-priority voice and video queues have to wait their turn in the scheduler."
    ],
    "ru": [
      "даже очереди голосовых и видео с высоким приоритетом должны ждать своей очереди в планировщике."
    ]
  },
  {
    "time": [
      1758.34,
      1765.549
    ],
    "en": [
      "To solve that, we can configure LLQ, low latency queuing. LLQ designates one, or more, queues"
    ],
    "ru": [
      "Чтобы решить эту проблему, мы можем настроить LLQ, организацию очереди с низкой задержкой. LLQ обозначает одну или несколько очередей"
    ]
  },
  {
    "time": [
      1765.549,
      1771.22
    ],
    "en": [
      "as strict priority queues. Strict priority means that if there is traffic in the queue,"
    ],
    "ru": [
      "как очереди со строгим приоритетом. Строгий приоритет означает, что если в очереди есть трафик,"
    ]
  },
  {
    "time": [
      1771.22,
      1776.2
    ],
    "en": [
      "the scheduler will always take the next packet from that queue, until it is empty. This is"
    ],
    "ru": [
      "планировщик всегда будет брать следующий пакет из этой очереди, пока он не станет пустым. Это"
    ]
  },
  {
    "time": [
      1776.2,
      1781.12
    ],
    "en": [
      "very effective for reducing the delay and jitter of voice and video traffic. As soon"
    ],
    "ru": [
      "очень эффективен для уменьшения задержки и дрожания голосового и видеотрафика. Как только"
    ]
  },
  {
    "time": [
      1781.12,
      1786.74
    ],
    "en": [
      "as traffic enters the priority queue, the scheduler will forward that traffic. So, here’s"
    ],
    "ru": [
      "когда трафик попадает в приоритетную очередь, планировщик будет перенаправлять этот трафик. Итак, вот"
    ]
  },
  {
    "time": [
      1786.74,
      1792.201
    ],
    "en": [
      "that same diagram, but this time the top queue is a strict priority queue. Currently there"
    ],
    "ru": [
      "та же диаграмма, но на этот раз верхняя очередь - это очередь со строгим приоритетом. В настоящее время там"
    ]
  },
  {
    "time": [
      1792.201,
      1796.76
    ],
    "en": [
      "is traffic in the queue, so the scheduler will send all of that traffic before continuing"
    ],
    "ru": [
      "- это трафик в очереди, поэтому планировщик отправит весь этот трафик, прежде чем продолжить"
    ]
  },
  {
    "time": [
      1796.76,
      1801.59
    ],
    "en": [
      "the weighted round-robin scheduling of the other queues. But there’s a potential problem"
    ],
    "ru": [
      "взвешенное циклическое планирование других очередей. Но есть потенциальная проблема"
    ]
  },
  {
    "time": [
      1801.59,
      1807.27
    ],
    "en": [
      "here. LLQ has the downside of potentially starving other queues if there is always traffic"
    ],
    "ru": [
      "здесь. Обратной стороной LLQ является потенциальное голодание других очередей, если всегда есть трафик."
    ]
  },
  {
    "time": [
      1807.27,
      1812.11
    ],
    "en": [
      "in the designated strict priority queue. The other queues might never get a turn to send"
    ],
    "ru": [
      "в назначенной очереди со строгим приоритетом. Другие очереди могут никогда не получить очередь отправлять"
    ]
  },
  {
    "time": [
      1812.11,
      1817.15
    ],
    "en": [
      "traffic. Policing, which I will cover in the next slide, can control the amount of traffic"
    ],
    "ru": [
      "движение. Полицейская служба, о которой я расскажу на следующем слайде, может контролировать объем трафика."
    ]
  },
  {
    "time": [
      1817.15,
      1822.24
    ],
    "en": [
      "allowed in the strict priority queue so that it can’t take all of the link’s bandwidth."
    ],
    "ru": [
      "разрешено в очереди со строгим приоритетом, чтобы не использовать всю пропускную способность канала."
    ]
  },
  {
    "time": [
      1822.24,
      1827.05
    ],
    "en": [
      "Okay, so in this section we expanded on the idea of queuing introduced in the previous"
    ],
    "ru": [
      "Итак, в этом разделе мы расширили идею организации очереди, представленную в предыдущем разделе."
    ]
  },
  {
    "time": [
      1827.05,
      1833.309
    ],
    "en": [
      "video and examined the use of multiple queues. A router classifies traffic, for example by"
    ],
    "ru": [
      "видео и изучили использование нескольких очередей. Маршрутизатор классифицирует трафик, например, по"
    ]
  },
  {
    "time": [
      1833.309,
      1838.99
    ],
    "en": [
      "looking at the DSCP value, then places it in the appropriate queue. The scheduler, for"
    ],
    "ru": [
      "глядя на значение DSCP, затем помещает его в соответствующую очередь. Планировщик для"
    ]
  },
  {
    "time": [
      1838.99,
      1844.57
    ],
    "en": [
      "example using weighted round-robin logic, forwards packets from each queue in a cycle."
    ],
    "ru": [
      "пример с использованием взвешенной циклической логики, пересылает пакеты из каждой очереди в цикле."
    ]
  },
  {
    "time": [
      1844.57,
      1849.6
    ],
    "en": [
      "With the addition of LLQ, a strict priority queue can be used to immediately forward high"
    ],
    "ru": [
      "С добавлением LLQ можно использовать очередь со строгим приоритетом для немедленной пересылки"
    ]
  },
  {
    "time": [
      1849.6,
      1855.21
    ],
    "en": [
      "priority packets. And by the way, within each of these queues congestion prevention tools"
    ],
    "ru": [
      "приоритетные пакеты. И, кстати, в каждой из этих очередей инструменты предотвращения перегрузки"
    ]
  },
  {
    "time": [
      1855.21,
      1861.45
    ],
    "en": [
      "like RED or WRED can be used to avoid tail drop if that queue becomes full."
    ],
    "ru": [
      "например RED или WRED, можно использовать, чтобы избежать опускания хвоста, если эта очередь заполняется."
    ]
  },
  {
    "time": [
      1861.45,
      1868.411
    ],
    "en": [
      "Okay, here are the final topics for today, shaping and policing. At the CCNA level you"
    ],
    "ru": [
      "Хорошо, вот последние темы на сегодня, формирование и контроль. На уровне CCNA вы"
    ]
  },
  {
    "time": [
      1868.411,
      1873.09
    ],
    "en": [
      "basically just have to understand what these two QoS functions do, so I’ll summarize"
    ],
    "ru": [
      "в основном просто нужно понять, что делают эти две функции QoS, поэтому я резюмирую"
    ]
  },
  {
    "time": [
      1873.09,
      1879.7
    ],
    "en": [
      "them in one slide. Traffic shaping and policing are both used to control the rate of traffic."
    ],
    "ru": [
      "их на одном слайде. Как формирование трафика, так и контроль используются для управления скоростью трафика."
    ]
  },
  {
    "time": [
      1879.7,
      1884.34
    ],
    "en": [
      "In the previous examples of queuing and scheduling we assumed that the interfaces are operating"
    ],
    "ru": [
      "В предыдущих примерах организации очередей и планирования мы предполагали, что интерфейсы работают."
    ]
  },
  {
    "time": [
      1884.34,
      1890.481
    ],
    "en": [
      "at full capacity, or beyond full capacity which is why packets need to be queued. However"
    ],
    "ru": [
      "на полную мощность или сверх ее, поэтому пакеты необходимо ставить в очередь. тем не мение"
    ]
  },
  {
    "time": [
      1890.481,
      1894.84
    ],
    "en": [
      "there are situations in which it is desirable to limit the rate of traffic to below the"
    ],
    "ru": [
      "бывают ситуации, когда желательно ограничить скорость трафика ниже"
    ]
  },
  {
    "time": [
      1894.84,
      1900.9
    ],
    "en": [
      "actual maximum capacity of the link. Shaping buffers traffic in a queue if the traffic"
    ],
    "ru": [
      "фактическая максимальная емкость ссылки. Формирование буферизует трафик в очереди, если трафик"
    ]
  },
  {
    "time": [
      1900.9,
      1906.461
    ],
    "en": [
      "rate goes over the configured rate. So, this is the same concept I just demonstrated, however"
    ],
    "ru": [
      "скорость превышает настроенную скорость. Итак, это та же самая концепция, которую я только что продемонстрировал, однако"
    ]
  },
  {
    "time": [
      1906.461,
      1910.97
    ],
    "en": [
      "instead of the actual capacity of the link being the limiting factor, it’s a maximum"
    ],
    "ru": [
      "вместо фактической пропускной способности ссылки, которая является ограничивающим фактором, это максимум"
    ]
  },
  {
    "time": [
      1910.97,
      1917.429
    ],
    "en": [
      "traffic rate configured on the link. Policing isn’t as polite as shaping. It drops traffic"
    ],
    "ru": [
      "скорость трафика настроена на ссылке. Работа полиции не такая вежливая, как формирование. Это снижает трафик"
    ]
  },
  {
    "time": [
      1917.429,
      1923.82
    ],
    "en": [
      "if the traffic rate goes over the configured rate. However there is some flexibility. Burst"
    ],
    "ru": [
      "если скорость трафика превышает настроенную скорость. Однако есть некоторая гибкость. Лопаться"
    ]
  },
  {
    "time": [
      1923.82,
      1928.48
    ],
    "en": [
      "traffic over the configured rate is allowed for a short period of time. This accommodates"
    ],
    "ru": [
      "трафик с заданной скоростью разрешен в течение короткого периода времени. Это вмещает"
    ]
  },
  {
    "time": [
      1928.48,
      1934.28
    ],
    "en": [
      "data applications which are ‘bursty’ in nature. Instead of a constant stream of data,"
    ],
    "ru": [
      "приложения для обработки данных, которые по своей природе являются \"нестабильными\". Вместо постоянного потока данных"
    ]
  },
  {
    "time": [
      1934.28,
      1939.18
    ],
    "en": [
      "they tend to send data in bursts. Just like the policed data rate, the amount of burst"
    ],
    "ru": [
      "они, как правило, отправляют данные пакетами. Как и при контролируемой скорости передачи данных, количество пакетов"
    ]
  },
  {
    "time": [
      1939.18,
      1944.77
    ],
    "en": [
      "traffic allowed is also configurable. And in both cases, classification can be used"
    ],
    "ru": [
      "разрешенный трафик также настраивается. И в обоих случаях можно использовать классификацию"
    ]
  },
  {
    "time": [
      1944.77,
      1949.929
    ],
    "en": [
      "to allow for different rates for different kinds of traffic. Now, why would you want"
    ],
    "ru": [
      "чтобы учесть разные ставки для разных видов трафика. Теперь, зачем тебе"
    ]
  },
  {
    "time": [
      1949.929,
      1955.27
    ],
    "en": [
      "to limit the rate traffic is sent or received? To demonstrate one common case, here’s a"
    ],
    "ru": [
      "ограничить скорость отправки или получения трафика? Чтобы продемонстрировать один общий случай, вот"
    ]
  },
  {
    "time": [
      1955.27,
      1962.04
    ],
    "en": [
      "sample network. A customer router is connected to an ISP, Internet Service Provider, router."
    ],
    "ru": [
      "образец сети. Клиентский маршрутизатор подключен к интернет-провайдеру, интернет-провайдеру, маршрутизатору."
    ]
  },
  {
    "time": [
      1962.04,
      1967.08
    ],
    "en": [
      "The customer configures shaping outbound on the G0/0 interface of the router, and the"
    ],
    "ru": [
      "Заказчик настраивает формирование исходящего трафика на интерфейсе G0 / 0 маршрутизатора, а"
    ]
  },
  {
    "time": [
      1967.08,
      1973.289
    ],
    "en": [
      "ISP configures policing inbound on the G0/0 interface of the ISP router. Can you think"
    ],
    "ru": [
      "Интернет-провайдер настраивает ограничение входящего трафика на интерфейсе G0 / 0 маршрутизатора Интернет-провайдера. Ты можешь думать"
    ]
  },
  {
    "time": [
      1973.289,
      1978.86
    ],
    "en": [
      "of a reason why this might be done? Although the physical interfaces are gigabit ethernet,"
    ],
    "ru": [
      "причины, по которой это может быть сделано? Хотя физические интерфейсы являются гигабитными Ethernet,"
    ]
  },
  {
    "time": [
      1978.86,
      1985.75
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
      1978.86,
      1985.75
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
      1985.75,
      1991.15
    ],
    "en": [
      "So the ISP says, you paid for a 300 megabit per second connection, so I’m going to police"
    ],
    "ru": [
      "Интернет-провайдер говорит, что вы заплатили за соединение со скоростью 300 мегабит в секунду, поэтому я пойду в полицию."
    ]
  },
  {
    "time": [
      1991.15,
      1997.07
    ],
    "en": [
      "incoming traffic to 300 megabits per second. The customer then decides, if I send traffic"
    ],
    "ru": [
      "входящий трафик до 300 мегабит в секунду. Затем клиент решает, отправляю ли я трафик"
    ]
  },
  {
    "time": [
      1997.07,
      2002.64
    ],
    "en": [
      "faster than 300 megabits per second it will be dropped by the ISP, so I will shape the"
    ],
    "ru": [
      "быстрее, чем 300 мегабит в секунду, он будет сброшен интернет-провайдером, поэтому я сформирую"
    ]
  },
  {
    "time": [
      2002.64,
      2008.39
    ],
    "en": [
      "outgoing traffic to 300 megabits per second. There are various possible uses for shaping"
    ],
    "ru": [
      "исходящий трафик до 300 мегабит в секунду. Существуют различные варианты использования формовки."
    ]
  },
  {
    "time": [
      2008.39,
      2012.36
    ],
    "en": [
      "and policing, but this is a common use of these tools."
    ],
    "ru": [
      "и полиции, но это обычное использование этих инструментов."
    ]
  },
  {
    "time": [
      2012.36,
      2017.6
    ],
    "en": [
      "Okay, that was a lot of material to cover. Let’s review what we covered before moving"
    ],
    "ru": [
      "Хорошо, это было много материала для освещения. Давайте рассмотрим, что мы рассмотрели, прежде чем переехать"
    ]
  },
  {
    "time": [
      2017.6,
      2024.32
    ],
    "en": [
      "on to the quiz. First, we covered classification and marking. Classification means identifying"
    ],
    "ru": [
      "перейти к викторине. Сначала мы рассмотрели классификацию и маркировку. Классификация означает идентификацию"
    ]
  },
  {
    "time": [
      2024.32,
      2028.58
    ],
    "en": [
      "different kinds of traffic so that you can then treat it with an appropriate level of"
    ],
    "ru": [
      "различные виды трафика, чтобы вы могли обработать его с соответствующим уровнем"
    ]
  },
  {
    "time": [
      2028.58,
      2033.539
    ],
    "en": [
      "priority. Marking refers to setting the values of certain fields in the Layer 2 and Layer"
    ],
    "ru": [
      "приоритет. Маркировка относится к установке значений определенных полей в Layer 2 и Layer."
    ]
  },
  {
    "time": [
      2033.539,
      2040.47
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
      2033.539,
      2040.47
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
      2040.47,
      2046.91
    ],
    "en": [
      "byte in the IP header, including IP Precedence and differentiated services code point. I"
    ],
    "ru": [
      "байт в заголовке IP, включая приоритет IP и кодовую точку дифференцированных услуг. я"
    ]
  },
  {
    "time": [
      2046.91,
      2052.609
    ],
    "en": [
      "also introduced the concept of trust boundaries. I then expanded on queuing and congestion"
    ],
    "ru": [
      "также ввела понятие доверительных границ. Затем я подробно остановился на очередях и заторах."
    ]
  },
  {
    "time": [
      2052.609,
      2057.98
    ],
    "en": [
      "management, which I introduced in the last video. I introduced the concept of multiples"
    ],
    "ru": [
      "управление, которое я представил в прошлом видео. Я ввел понятие кратных"
    ]
  },
  {
    "time": [
      2057.98,
      2066.109
    ],
    "en": [
      "queues, weighted round-robin scheduling, CBWFQ, and LLQ. Marking a packet as EF, for example,"
    ],
    "ru": [
      "очереди, взвешенное циклическое планирование, CBWFQ и LLQ. Отметка пакета как EF, например,"
    ]
  },
  {
    "time": [
      2066.109,
      2071.44
    ],
    "en": [
      "doesn’t actually do anything on its own. You have to configure tools like CBWFQ and"
    ],
    "ru": [
      "на самом деле ничего не делает сам по себе. Вам необходимо настроить такие инструменты, как CBWFQ и"
    ]
  },
  {
    "time": [
      2071.44,
      2077.95
    ],
    "en": [
      "LLQ to make the devices treat those packets as high priority. Finally I introduced shaping"
    ],
    "ru": [
      "LLQ, чтобы устройства обрабатывали эти пакеты как высокоприоритетные. Наконец я представил шейпинг"
    ]
  },
  {
    "time": [
      2077.95,
      2083.539
    ],
    "en": [
      "and policing, which are both tools to control the rate traffic is sent or received. Watch"
    ],
    "ru": [
      "и контроль, которые являются инструментами для управления скоростью отправки или получения трафика. Смотреть"
    ]
  },
  {
    "time": [
      2083.539,
      2088.24
    ],
    "en": [
      "until the end of the quiz for a bonus practice question from Boson Software’s ExSim for"
    ],
    "ru": [
      "до конца викторины на вопрос о бонусной практике от ExSim компании Boson Software для"
    ]
  },
  {
    "time": [
      2088.24,
      2092.569
    ],
    "en": [
      "CCNA. Okay, let’s go to quiz question 1."
    ],
    "ru": [
      "CCNA. Хорошо, перейдем к вопросу 1 викторины."
    ]
  },
  {
    "time": [
      2092.569,
      2096.169
    ],
    "en": [
      "SLIDE30 Which of the following CoS markings are consistent"
    ],
    "ru": [
      "SLIDE30 Какая из следующих маркировок CoS соответствует"
    ]
  },
  {
    "time": [
      2096.169,
      2105.64
    ],
    "en": [
      "with standard practice? Select three. Okay, pause the video now to select the correct answers."
    ],
    "ru": [
      "со стандартной практикой? Выберите три. Хорошо, остановите видео сейчас, чтобы выбрать правильные ответы."
    ]
  },
  {
    "time": [
      2105.64,
      2113.749
    ],
    "en": [
      "answers. The answers are B, CoS 0 for best effort. D, CoS 5 for voice. And E, CoS 4 for video."
    ],
    "ru": [
      "ответы. Ответы: B, CoS 0 для максимального усилия. D, CoS 5 для голоса. И E, CoS 4 для видео."
    ]
  },
  {
    "time": [
      2113.749,
      2118.95
    ],
    "en": [
      "Here’s that chart again showing the PCP values, which is another name for the CoS"
    ],
    "ru": [
      "Вот эта диаграмма, снова показывающая значения PCP, что является еще одним названием CoS."
    ]
  },
  {
    "time": [
      2118.95,
      2123.999
    ],
    "en": [
      "values, and their traffic types. In your networks you don’t have to follow this marking scheme,"
    ],
    "ru": [
      "значения и их типы трафика. В своих сетях вам не нужно следовать этой схеме маркировки,"
    ]
  },
  {
    "time": [
      2123.999,
      2128.66
    ],
    "en": [
      "but this is standard practice. Okay, let’s go to question 2."
    ],
    "ru": [
      "но это стандартная практика. Хорошо, перейдем к вопросу 2."
    ]
  },
  {
    "time": [
      2128.66,
      2131.95
    ],
    "en": [
      "SLIDE31 What bit pattern would you find in the DSCP"
    ],
    "ru": [
      "SLIDE31 Какой битовый шаблон вы найдете в DSCP?"
    ]
  },
  {
    "time": [
      2131.95,
      2138.93
    ],
    "en": [
      "field of a packet marked as EF? Pause the video now to think about the answer."
    ],
    "ru": [
      "поле пакета, помеченного как EF? Поставьте видео на паузу, чтобы подумать над ответом."
    ]
  },
  {
    "time": [
      2138.93,
      2149.41
    ],
    "en": [
      "Okay, the answer is D, 101 110. Here it is, showing the decimal value of each bit. EF,"
    ],
    "ru": [
      "Хорошо, ответ - D, 101 110. Вот он, показывает десятичное значение каждого бита. EF,"
    ]
  },
  {
    "time": [
      2149.41,
      2154.54
    ],
    "en": [
      "which is used for traffic requiring low delay, jitter, and loss, has a decimal DSCP value"
    ],
    "ru": [
      "который используется для трафика, требующего низкой задержки, дрожания и потерь, имеет десятичное значение DSCP"
    ]
  },
  {
    "time": [
      2154.54,
      2161.769
    ],
    "en": [
      "of 46, so the bit pattern is 101 110. Okay, let’s go to question 3."
    ],
    "ru": [
      "из 46, поэтому битовая комбинация равна 101 110. Хорошо, перейдем к вопросу 3."
    ]
  },
  {
    "time": [
      2161.769,
      2164.809
    ],
    "en": [
      "SLIDE32 Which of the following AF markings provides"
    ],
    "ru": [
      "SLIDE32 Какая из следующих маркировок автофокуса обеспечивает"
    ]
  },
  {
    "time": [
      2164.809,
      2172.299
    ],
    "en": [
      "the best service? Pause the video now to think about the answer."
    ],
    "ru": [
      "лучший сервис? Поставьте видео на паузу, чтобы подумать над ответом."
    ]
  },
  {
    "time": [
      2172.299,
      2179.65
    ],
    "en": [
      "The answer is B, AF41. Here is the table of AF markings again. AF41 is in the highest"
    ],
    "ru": [
      "Ответ - B, AF41. Вот снова таблица маркировки AF. AF41 находится в высшем"
    ]
  },
  {
    "time": [
      2179.65,
      2186.29
    ],
    "en": [
      "priority class and it has the lowest drop precedence. AF43 is also in the high priority"
    ],
    "ru": [
      "приоритетный класс и имеет самый низкий приоритет отбрасывания. AF43 также имеет высокий приоритет"
    ]
  },
  {
    "time": [
      2186.29,
      2194.069
    ],
    "en": [
      "queue, but it has a higher drop precedence. AF51 and AF61 are not real AF markings, AF"
    ],
    "ru": [
      "очереди, но у нее более высокий приоритет отбрасывания. AF51 и AF61 не являются настоящими маркировками AF, AF"
    ]
  },
  {
    "time": [
      2194.069,
      2200.609
    ],
    "en": [
      "only uses classes 1, 2, 3, and 4. Okay, let’s go to quiz question 4."
    ],
    "ru": [
      "используются только классы 1, 2, 3 и 4. Хорошо, перейдем к вопросу 4 викторины."
    ]
  },
  {
    "time": [
      2200.609,
      2203.479
    ],
    "en": [
      "SLIDE33 Which of the following statements represents"
    ],
    "ru": [
      "SLIDE33 Какое из следующих утверждений представляет"
    ]
  },
  {
    "time": [
      2203.479,
      2210.52
    ],
    "en": [
      "general best practice regarding QoS? Pause the video now to think about the answer."
    ],
    "ru": [
      "общая передовая практика в отношении QoS? Поставьте видео на паузу, чтобы подумать над ответом."
    ]
  },
  {
    "time": [
      2210.52,
      2218.53
    ],
    "en": [
      "Okay, the answer is A, trust markings from IP phones, don’t trust markings from PCs."
    ],
    "ru": [
      "Хорошо, ответ - A, маркировка доверия с IP-телефонов, а не маркировка доверия с ПК."
    ]
  },
  {
    "time": [
      2218.53,
      2224.66
    ],
    "en": [
      "IP phones will typically mark their voice traffic as EF and CoS5, and those markings"
    ],
    "ru": [
      "IP-телефоны обычно помечают свой голосовой трафик как EF и CoS5, и эти отметки"
    ]
  },
  {
    "time": [
      2224.66,
      2230.219
    ],
    "en": [
      "should be trusted because voice traffic requires low delay, jitter, and loss. Markings from"
    ],
    "ru": [
      "следует доверять, потому что голосовой трафик требует низкой задержки, дрожания и потерь. Маркировка от"
    ]
  },
  {
    "time": [
      2230.219,
      2235.599
    ],
    "en": [
      "PCs should not be trusted, though. Traffic from data applications on PCs should be marked"
    ],
    "ru": [
      "Однако ПК нельзя доверять. Трафик от приложений для передачи данных на ПК должен быть отмечен"
    ]
  },
  {
    "time": [
      2235.599,
      2240.019
    ],
    "en": [
      "as low priority so that it doesn’t fill up the high priority queues reserved for voice"
    ],
    "ru": [
      "с низким приоритетом, чтобы не заполнять очереди с высоким приоритетом, зарезервированные для голосовых"
    ]
  },
  {
    "time": [
      2240.019,
      2247.41
    ],
    "en": [
      "traffic. Now, apps like Zoom or WebEx used on a PC do need high priority service, but"
    ],
    "ru": [
      "движение. Теперь такие приложения, как Zoom или WebEx, используемые на ПК, действительно нуждаются в высокоприоритетном обслуживании, но"
    ]
  },
  {
    "time": [
      2247.41,
      2253.819
    ],
    "en": [
      "we can mark those packets at the switch or router. Okay, let’s go to question 5."
    ],
    "ru": [
      "мы можем пометить эти пакеты на коммутаторе или маршрутизаторе. Хорошо, перейдем к вопросу 5."
    ]
  },
  {
    "time": [
      2253.819,
      2257.099
    ],
    "en": [
      "SLIDE34 Which of the following creates a strict priority"
    ],
    "ru": [
      "СЛАЙД 34 Что из перечисленного создает строгий приоритет?"
    ]
  },
  {
    "time": [
      2257.099,
      2273.91
    ],
    "en": [
      "queue for data that requires low delay, jitter, and loss? Pause the video now to think about the answer."
    ],
    "ru": [
      "очередь для данных, требующих низкой задержки, дрожания и потерь? Поставьте видео на паузу, чтобы подумать над ответом."
    ]
  },
  {
    "time": [
      2273.91,
      2278.069
    ],
    "en": [
      "the answer. there are packets in that queue the scheduler will always forward them next, before traffic"
    ],
    "ru": [
      "ответ. в этой очереди есть пакеты, планировщик всегда будет пересылать их следующими, перед трафиком"
    ]
  },
  {
    "time": [
      2278.069,
      2283.22
    ],
    "en": [
      "in the other queues. Okay, that’s all for the quiz. Now let’s take a look at a bonus"
    ],
    "ru": [
      "в других очередях. Ладно, это все для викторины. А теперь взглянем на бонус"
    ]
  },
  {
    "time": [
      2283.22,
      167.29500000000002
    ],
    "en": [
      "question in Boson Software’s ExSim for CCNA."
    ],
    "ru": [
      "вопрос в ExSim от Boson Software для CCNA."
    ]
  },
  {
    "time": [
      167.29500000000002,
      2398.325
    ],
    "en": [
      "Okay, the answer is B, LLQ. Low latency queuing creates a strict priority queue, meaning if"
    ],
    "ru": [
      "Хорошо, ответ - B, LLQ. Организация очереди с низкой задержкой создает очередь со строгим приоритетом, что означает, что если"
    ]
  },
  {
    "time": [
      2398.325,
      2401.16
    ],
    "en": [
      "There are supplementary materials for this"
    ],
    "ru": [
      "Для этого есть дополнительные материалы."
    ]
  },
  {
    "time": [
      2401.16,
      2406.79
    ],
    "en": [
      "video. There is a flashcard deck to use with the software ‘Anki’. There will also be"
    ],
    "ru": [
      "видео. Существует колода карточек для использования с программным обеспечением «Anki». Также будет"
    ]
  },
  {
    "time": [
      2406.79,
      2412.7
    ],
    "en": [
      "a packet tracer practice lab so you can get some hands-on practice. Now, QoS configuration"
    ],
    "ru": [
      "практическая лаборатория по отслеживанию пакетов, чтобы вы могли получить практическую практику. Теперь настройка QoS"
    ]
  },
  {
    "time": [
      2412.7,
      2417.67
    ],
    "en": [
      "isn’t actually part of the CCNA exam and we didn’t cover it in this video. But I"
    ],
    "ru": [
      "на самом деле не является частью экзамена CCNA, и мы не рассматривали его в этом видео. Но я"
    ]
  },
  {
    "time": [
      2417.67,
      2422.539
    ],
    "en": [
      "think it will be beneficial to see how it’s configured, so I’ll do a quick demo. That"
    ],
    "ru": [
      "Думаю, будет полезно посмотреть, как он настроен, поэтому сделаю небольшую демонстрацию. Что"
    ]
  },
  {
    "time": [
      2422.539,
      2427.769
    ],
    "en": [
      "will be in the next video. Sign up for my mailing list via the link in the description,"
    ],
    "ru": [
      "будет в следующем видео. Подпишитесь на мою рассылку по ссылке в описании,"
    ]
  },
  {
    "time": [
      2427.769,
      2432.64
    ],
    "en": [
      "and I’ll send you all of the flashcards and packet tracer lab files for the course."
    ],
    "ru": [
      "и я пришлю вам все дидактические карточки и лабораторные файлы по трассировщику пакетов для этого курса."
    ]
  },
  {
    "time": [
      2432.64,
      2435.849
    ],
    "en": [
      "SLIDE36 Before finishing today’s video I want to"
    ],
    "ru": [
      "SLIDE36 Прежде чем закончить сегодняшнее видео, я хочу"
    ]
  },
  {
    "time": [
      2435.849,
      2441.119
    ],
    "en": [
      "thank my JCNP-level channel members. To join, please click the ‘Join’ button under the"
    ],
    "ru": [
      "спасибо моим участникам канала уровня JCNP. Чтобы присоединиться, нажмите кнопку «Присоединиться» под"
    ]
  },
  {
    "time": [
      2441.119,
      2447.019
    ],
    "en": [
      "video. Thank you to Justin, Christopher, Sam, Anton, Tebogo, Samil, Anand, Pavel, Abraham,"
    ],
    "ru": [
      "видео. Спасибо Джастину, Кристоферу, Сэму, Антону, Тебого, Самилу, Ананду, Павлу, Аврааму,"
    ]
  },
  {
    "time": [
      2447.019,
      2452.41
    ],
    "en": [
      "Serge, Njoku, Viktor, Roger, Raj, Kenneth, Seamus, Brandon, Marcel, Kone, Donald, C Mohd,"
    ],
    "ru": [
      "Серж, Нджоку, Виктор, Роджер, Радж, Кеннет, Симус, Брэндон, Марсель, Коне, Дональд, Си Мохд,"
    ]
  },
  {
    "time": [
      2452.41,
      2456.969
    ],
    "en": [
      "Gustavo, Benjamin, Prakaash, Nasir, Erlison, Marko, Daming, Ed, John, Funnydart, Velvijaykum,"
    ],
    "ru": [
      "Густаво, Бенджамин, Пракааш, Насир, Эрлисон, Марко, Даминг, Эд, Джон, Фаннидарт, Велвиджайкум,"
    ]
  },
  {
    "time": [
      2456.969,
      2467.69
    ],
    "en": [
      "Mark, Yousif, Boson Software, Devin , Yonatan, and Vance. Sorry if I pronounced your name"
    ],
    "ru": [
      "Марк, Юсиф, Boson Software, Девин, Йонатан и Вэнс. Извини, если я произнес твое имя"
    ]
  },
  {
    "time": [
      2467.69,
      2473.609
    ],
    "en": [
      "incorrectly, but thank you so much for your support. This is the list of JCNP-level members"
    ],
    "ru": [
      "неправильно, но большое спасибо за вашу поддержку. Это список участников уровня JCNP."
    ]
  },
  {
    "time": [
      2473.609,
      2479.589
    ],
    "en": [
      "at the time of recording by the way, April 25th 2021. If you signed up recently and your"
    ],
    "ru": [
      "на момент записи, кстати, 25 апреля 2021 года. Если вы подписались недавно и ваш"
    ]
  },
  {
    "time": [
      2479.589,
      2484.809
    ],
    "en": [
      "name isn’t on here don’t worry, you’ll be in future videos."
    ],
    "ru": [
      "имени здесь нет, не волнуйтесь, вы будете в следующих видео."
    ]
  },
  {
    "time": [
      2484.809,
      2489.69
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
      2489.69,
      2494.63
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
      2494.63,
      2500.38
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
      2500.38,
      2500.38
    ],
    "en": [
      "or Basic Attention Token, tips via the Brave browser. That's all for now."
    ],
    "ru": [
      "или Basic Attention Token, подсказки через браузер Brave. На этом пока все."
    ]
  }
]