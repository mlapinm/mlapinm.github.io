let items = [
  {
    "time": [
      1.4,
      3.78
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
      3.78,
      6.91
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
      6.91,
      10.759
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
      10.759,
      16.459
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
      16.459,
      18.17
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
      18.17,
      20.699
    ],
    "en": [
      "In this video we’ll look at WAN architectures."
    ],
    "ru": [
      "В этом видео мы рассмотрим архитектуры WAN."
    ]
  },
  {
    "time": [
      20.699,
      30.749
    ],
    "en": [
      "Specifically, we’ll be covering topic 1.2.d, WAN, and topic 5.5, describe remote access and site-to-site VPNs."
    ],
    "ru": [
      "В частности, мы рассмотрим тему 1.2.d, WAN и тему 5.5, опишем удаленный доступ и VPN типа \"сеть-сеть\"."
    ]
  },
  {
    "time": [
      30.749,
      36.62
    ],
    "en": [
      "and site-to-site VPNs. Both of these exam topics use the term ‘describe’, so we won’t be looking at any actual configurations."
    ],
    "ru": [
      "и VPN типа \"сеть-сеть\". Обе эти темы экзамена используют термин «описать», поэтому мы не будем рассматривать какие-либо фактические конфигурации."
    ]
  },
  {
    "time": [
      36.62,
      42.47
    ],
    "en": [
      "You just need a basic understanding of some common WAN technologies and how they operate."
    ],
    "ru": [
      "Вам просто нужно базовое представление о некоторых распространенных технологиях WAN и о том, как они работают."
    ]
  },
  {
    "time": [
      42.47,
      46.1
    ],
    "en": [
      "Note that we’ll be looking at WANs from the perspective of an enterprise which is"
    ],
    "ru": [
      "Обратите внимание, что мы будем смотреть на глобальные сети с точки зрения предприятия, которое"
    ]
  },
  {
    "time": [
      46.1,
      51.73
    ],
    "en": [
      "the customer of a service provider, not from the perspective of the service provider itself."
    ],
    "ru": [
      "клиент поставщика услуг, а не с точки зрения самого поставщика услуг."
    ]
  },
  {
    "time": [
      51.73,
      58.43
    ],
    "en": [
      "To learn more about the service provider perspective, consider the CCNP service provider certification in the future."
    ],
    "ru": [
      "Чтобы узнать больше о перспективах поставщика услуг, рассмотрите возможность сертификации поставщика услуг CCNP в будущем."
    ]
  },
  {
    "time": [
      58.43,
      61.94
    ],
    "en": [
      "in the future. Here’s what we’ll cover in this video."
    ],
    "ru": [
      "в будущем. Вот что мы расскажем в этом видео."
    ]
  },
  {
    "time": [
      61.94,
      65.85
    ],
    "en": [
      "First I’ll give an introduction to WANs and explain what they are."
    ],
    "ru": [
      "Сначала я расскажу о глобальных сетях и объясню, что это такое."
    ]
  },
  {
    "time": [
      65.85,
      71.44
    ],
    "en": [
      "Then I’ll introduce one type of connection used for WANs, known as leased lines."
    ],
    "ru": [
      "Затем я расскажу об одном типе подключения, используемом для глобальных сетей, известном как выделенные линии."
    ]
  },
  {
    "time": [
      71.44,
      77.28
    ],
    "en": [
      "Then another WAN technology known as MPLS, multi protocol label switching, which provides"
    ],
    "ru": [
      "Затем еще одна технология WAN, известная как MPLS, многопротокольная коммутация меток, которая обеспечивает"
    ]
  },
  {
    "time": [
      77.28,
      81.75
    ],
    "en": [
      "us with a kind of VPN, virtual private network."
    ],
    "ru": [
      "нас с помощью своего рода VPN, виртуальной частной сети."
    ]
  },
  {
    "time": [
      81.75,
      86.49
    ],
    "en": [
      "Then I’ll introduce some options for internet connectivity, and finally explain internet"
    ],
    "ru": [
      "Затем я расскажу о некоторых вариантах подключения к Интернету и, наконец, расскажу об Интернете."
    ]
  },
  {
    "time": [
      86.49,
      91.35
    ],
    "en": [
      "VPNs, which allow us to create virtual private networks over the public Internet."
    ],
    "ru": [
      "VPN, которые позволяют нам создавать виртуальные частные сети через общедоступный Интернет."
    ]
  },
  {
    "time": [
      91.35,
      97.47
    ],
    "en": [
      "So, we’ll cover a lot of topics, but we won’t be going in depth about any of them."
    ],
    "ru": [
      "Итак, мы рассмотрим множество тем, но не будем углубляться ни в одну из них."
    ]
  },
  {
    "time": [
      97.47,
      102.77000000000001
    ],
    "en": [
      "To cover just the topic of MPLS in depth, for example, would require a full course at"
    ],
    "ru": [
      "Например, чтобы подробно осветить только тему MPLS, потребуется пройти полный курс на"
    ]
  },
  {
    "time": [
      102.77000000000001,
      106.36
    ],
    "en": [
      "least as long as this entire CCNA course."
    ],
    "ru": [
      "по крайней мере, пока весь этот курс CCNA."
    ]
  },
  {
    "time": [
      106.36,
      110.77000000000001
    ],
    "en": [
      "For the CCNA exam, all that’s expected is that you have a basic understanding of these"
    ],
    "ru": [
      "Для экзамена CCNA все, что ожидается, - это базовое понимание этих"
    ]
  },
  {
    "time": [
      110.77000000000001,
      113.81
    ],
    "en": [
      "technologies and their purpose."
    ],
    "ru": [
      "технологии и их назначение."
    ]
  },
  {
    "time": [
      113.81,
      118.12
    ],
    "en": [
      "As always, make sure to watch until the end of the video for a bonus practice question"
    ],
    "ru": [
      "Как всегда, обязательно просмотрите видео до конца, чтобы узнать о бонусной практике."
    ]
  },
  {
    "time": [
      118.12,
      124.43
    ],
    "en": [
      "from Boson Software’s ExSim for CCNA, the best practice exams for the CCNA."
    ],
    "ru": [
      "из ExSim от Boson Software для CCNA, лучших практических экзаменов для CCNA."
    ]
  },
  {
    "time": [
      124.43,
      129.22899999999998
    ],
    "en": [
      "Okay let me introduce the concept of WANs first."
    ],
    "ru": [
      "Хорошо, позвольте мне сначала представить концепцию WAN."
    ]
  },
  {
    "time": [
      129.22899999999998,
      134.099
    ],
    "en": [
      "As you know already, WAN stands for Wide Area Network, and the name should give you a good"
    ],
    "ru": [
      "Как вы уже знаете, WAN означает Wide Area Network, и это название должно дать вам хорошее представление."
    ]
  },
  {
    "time": [
      134.099,
      136.45
    ],
    "en": [
      "idea of what a WAN is."
    ],
    "ru": [
      "представление о том, что такое WAN."
    ]
  },
  {
    "time": [
      136.45,
      141.049
    ],
    "en": [
      "A WAN is a network that extends over a large geographic area."
    ],
    "ru": [
      "WAN - это сеть, охватывающая большую географическую область."
    ]
  },
  {
    "time": [
      141.049,
      144.62
    ],
    "en": [
      "For example, between cities, between countries, etc."
    ],
    "ru": [
      "Например, между городами, между странами и т. Д."
    ]
  },
  {
    "time": [
      144.62,
      148.739
    ],
    "en": [
      "So, WANs are used to connect geographically separate LANs."
    ],
    "ru": [
      "Таким образом, глобальные сети используются для подключения географически отдельных локальных сетей."
    ]
  },
  {
    "time": [
      148.739,
      154.219
    ],
    "en": [
      "For example, if a company has an office in New York, an office in Toronto, and an office"
    ],
    "ru": [
      "Например, если у компании есть офис в Нью-Йорке, офис в Торонто и офис"
    ]
  },
  {
    "time": [
      154.219,
      160.299
    ],
    "en": [
      "in London, each of those offices is a LAN, Local Area Network, and the connections between"
    ],
    "ru": [
      "в Лондоне каждый из этих офисов представляет собой локальную сеть, локальную сеть и соединения между"
    ]
  },
  {
    "time": [
      160.299,
      164.09
    ],
    "en": [
      "them form a WAN, Wide Area Network."
    ],
    "ru": [
      "они образуют глобальную сеть WAN."
    ]
  },
  {
    "time": [
      164.09,
      168.969
    ],
    "en": [
      "Although the Internet itself can be considered a WAN, the term WAN is typically used to refer"
    ],
    "ru": [
      "Хотя сам Интернет можно рассматривать как WAN, термин WAN обычно используется для обозначения"
    ]
  },
  {
    "time": [
      168.969,
      175.17000000000002
    ],
    "en": [
      "to an enterprise’s private connections that connect their offices, data centers, and other sites together."
    ],
    "ru": [
      "к частным соединениям предприятия, которые соединяют их офисы, центры обработки данных и другие сайты вместе."
    ]
  },
  {
    "time": [
      175.17000000000002,
      180.64
    ],
    "en": [
      "sites together. So, as I said the Internet can be considered a WAN, but when we say WAN we usually aren’t"
    ],
    "ru": [
      "сайты вместе. Итак, как я уже сказал, Интернет можно рассматривать как WAN, но когда мы говорим WAN, мы обычно не"
    ]
  },
  {
    "time": [
      180.64,
      182.709
    ],
    "en": [
      "referring to the Internet."
    ],
    "ru": [
      "имея в виду Интернет."
    ]
  },
  {
    "time": [
      182.709,
      188.75
    ],
    "en": [
      "Although there is another kind of technology that can be used over the Internet to create private connections."
    ],
    "ru": [
      "Хотя есть и другой вид технологий, которые можно использовать через Интернет для создания частных подключений."
    ]
  },
  {
    "time": [
      188.75,
      194.379
    ],
    "en": [
      "private connections. Over public and shared connections like the Internet, VPNs, Virtual Private Networks,"
    ],
    "ru": [
      "частные подключения. Через общедоступные и общие подключения, такие как Интернет, VPN, виртуальные частные сети,"
    ]
  },
  {
    "time": [
      194.379,
      196.579
    ],
    "en": [
      "can be used to create private connections."
    ],
    "ru": [
      "можно использовать для создания частных подключений."
    ]
  },
  {
    "time": [
      196.579,
      200.799
    ],
    "en": [
      "I’ll show you a few kinds of VPNs in this video."
    ],
    "ru": [
      "В этом видео я покажу вам несколько видов VPN."
    ]
  },
  {
    "time": [
      200.799,
      204.489
    ],
    "en": [
      "Note that there have been many different WAN technologies over the years."
    ],
    "ru": [
      "Обратите внимание, что за прошедшие годы появилось много различных технологий WAN."
    ]
  },
  {
    "time": [
      204.489,
      208.56
    ],
    "en": [
      "Depending on the location, some will be available and some will not be."
    ],
    "ru": [
      "В зависимости от местоположения некоторые из них будут доступны, а некоторые нет."
    ]
  },
  {
    "time": [
      208.56,
      212.51
    ],
    "en": [
      "I won’t cover every possible WAN technology in this video."
    ],
    "ru": [
      "В этом видео я не буду описывать все возможные технологии WAN."
    ]
  },
  {
    "time": [
      212.51,
      219.59
    ],
    "en": [
      "Also, technologies which are considered legacy in one country might still be used in other countries."
    ],
    "ru": [
      "Кроме того, технологии, которые считаются унаследованными в одной стране, могут по-прежнему использоваться в других странах."
    ]
  },
  {
    "time": [
      219.59,
      224.359
    ],
    "en": [
      "countries. Legacy basically means old and no longer used or rarely used."
    ],
    "ru": [
      "страны. Наследие в основном означает старые, которые больше не используются или используются редко."
    ]
  },
  {
    "time": [
      224.359,
      227.66899999999998
    ],
    "en": [
      "Here’s an example of a WAN."
    ],
    "ru": [
      "Вот пример WAN."
    ]
  },
  {
    "time": [
      227.66899999999998,
      231.809
    ],
    "en": [
      "This enterprise has a central data center and some offices."
    ],
    "ru": [
      "У этого предприятия есть центральный центр обработки данных и несколько офисов."
    ]
  },
  {
    "time": [
      231.809,
      235.32999999999998
    ],
    "en": [
      "For the purpose of this video we’re not focusing on the LAN so I won’t show all"
    ],
    "ru": [
      "В этом видео мы не фокусируемся на локальной сети, поэтому я не буду показывать все"
    ]
  },
  {
    "time": [
      235.32999999999998,
      241.389
    ],
    "en": [
      "of the devices in each LAN, but each of these, office A, office B, office C, as well as the"
    ],
    "ru": [
      "устройств в каждой локальной сети, но каждое из них, офис A, офис B, офис C, а также"
    ]
  },
  {
    "time": [
      241.389,
      244.419
    ],
    "en": [
      "data center, is its own LAN."
    ],
    "ru": [
      "дата-центр, есть собственная локальная сеть."
    ]
  },
  {
    "time": [
      244.419,
      249.17
    ],
    "en": [
      "Each office is connected to the data center via a leased line, which is a kind of dedicated"
    ],
    "ru": [
      "Каждый офис подключен к дата-центру через выделенную линию, которая является своего рода выделенной линией."
    ]
  },
  {
    "time": [
      249.17,
      252.019
    ],
    "en": [
      "physical connection between two sites."
    ],
    "ru": [
      "физическое соединение между двумя сайтами."
    ]
  },
  {
    "time": [
      252.019,
      256.31
    ],
    "en": [
      "This is not a shared connection, it’s not connected to the Internet, it’s a private"
    ],
    "ru": [
      "Это не общее соединение, оно не подключено к Интернету, это частное"
    ]
  },
  {
    "time": [
      256.31,
      260.03
    ],
    "en": [
      "connection that the company uses to connect its sites together."
    ],
    "ru": [
      "соединение, которое компания использует для соединения своих сайтов."
    ]
  },
  {
    "time": [
      260.03,
      264.81
    ],
    "en": [
      "By the way, do you know a word for this kind of topology, in which multiple devices connect"
    ],
    "ru": [
      "Кстати, знаете ли вы слово, обозначающее такую ​​топологию, в которой несколько устройств подключаются?"
    ]
  },
  {
    "time": [
      264.81,
      266.94
    ],
    "en": [
      "to one central device?"
    ],
    "ru": [
      "к одному центральному устройству?"
    ]
  },
  {
    "time": [
      266.94,
      272.59000000000003
    ],
    "en": [
      "In the last video I introduced the term star topology, however when talking about WANs"
    ],
    "ru": [
      "В последнем видео я ввел термин звездная топология, однако, говоря о глобальных сетях,"
    ]
  },
  {
    "time": [
      272.59000000000003,
      275.69
    ],
    "en": [
      "a more common term is hub and spoke."
    ],
    "ru": [
      "более общий термин - ступица и спица."
    ]
  },
  {
    "time": [
      275.69,
      281.1
    ],
    "en": [
      "The central site, the data center, is called the hub, and the office sites which all connect"
    ],
    "ru": [
      "Центральный сайт, центр обработки данных, называется концентратором, а офисные сайты, которые все соединяют"
    ]
  },
  {
    "time": [
      281.1,
      283.75
    ],
    "en": [
      "to the hub are called spokes."
    ],
    "ru": [
      "к ступице называются спицами."
    ]
  },
  {
    "time": [
      283.75,
      289.44
    ],
    "en": [
      "One major advantage of a hub-and-spoke topology, as opposed to a full-mesh topology, is that"
    ],
    "ru": [
      "Одним из основных преимуществ топологии «ступица и спица» по сравнению с топологией с полной сеткой является то, что"
    ]
  },
  {
    "time": [
      289.44,
      294.29
    ],
    "en": [
      "it’s easier to centrally control what traffic is allowed and what isn’t."
    ],
    "ru": [
      "проще централизованно контролировать, какой трафик разрешен, а какой нет."
    ]
  },
  {
    "time": [
      294.29,
      299.52
    ],
    "en": [
      "All traffic between offices can be sent to a firewall in the data center, for example,"
    ],
    "ru": [
      "Весь трафик между офисами можно направить на межсетевой экран в центре обработки данных, например,"
    ]
  },
  {
    "time": [
      299.52,
      302.9
    ],
    "en": [
      "and it can control which traffic is allowed and which isn’t."
    ],
    "ru": [
      "и он может контролировать, какой трафик разрешен, а какой нет."
    ]
  },
  {
    "time": [
      302.9,
      306.27
    ],
    "en": [
      "So, remember that term, hub and spoke topology."
    ],
    "ru": [
      "Итак, запомните термин «топология концентратора и луча»."
    ]
  },
  {
    "time": [
      306.27,
      314.229
    ],
    "en": [
      "Now, I have to say that this diagram is actually not exactly an accurate representation of leased lines."
    ],
    "ru": [
      "Теперь я должен сказать, что эта диаграмма на самом деле не совсем точное представление выделенных линий."
    ]
  },
  {
    "time": [
      314.229,
      317.37
    ],
    "en": [
      "leased lines. This is a better representation of what’s actually going on."
    ],
    "ru": [
      "арендованные линии. Это лучшее представление о том, что на самом деле происходит."
    ]
  },
  {
    "time": [
      317.37,
      322.62
    ],
    "en": [
      "Rather than a single physical cable directly connecting each site, each site connects to"
    ],
    "ru": [
      "Вместо одного физического кабеля, напрямую соединяющего каждый сайт, каждый сайт подключается к"
    ]
  },
  {
    "time": [
      322.62,
      326.189
    ],
    "en": [
      "a service provider, which connects the sites together."
    ],
    "ru": [
      "поставщик услуг, который соединяет сайты вместе."
    ]
  },
  {
    "time": [
      326.189,
      330.699
    ],
    "en": [
      "I will introduce leased lines soon, but these connections use serial cables."
    ],
    "ru": [
      "Я скоро представлю выделенные линии, но для этих соединений используются последовательные кабели."
    ]
  },
  {
    "time": [
      330.699,
      336.25
    ],
    "en": [
      "I briefly introduced serial connections in the OSPF section of the course, they use Layer"
    ],
    "ru": [
      "Я кратко представил последовательные соединения в разделе курса OSPF, они используют Layer"
    ]
  },
  {
    "time": [
      336.25,
      341.8
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
      336.25,
      341.8
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
      341.8,
      347.83
    ],
    "en": [
      "However these days WAN connections via Ethernet are more and more common."
    ],
    "ru": [
      "Однако в наши дни WAN-соединения через Ethernet становятся все более распространенными."
    ]
  },
  {
    "time": [
      347.83,
      352.99
    ],
    "en": [
      "Optical fiber connections allow much longer cables than the traditional copper UTP Ethernet"
    ],
    "ru": [
      "Оптоволоконные соединения позволяют использовать гораздо более длинные кабели, чем традиционный медный UTP Ethernet."
    ]
  },
  {
    "time": [
      352.99,
      358.569
    ],
    "en": [
      "cables, so these days WANs using Ethernet fiber optic cables are quite common."
    ],
    "ru": [
      "кабели, поэтому в наши дни WAN, использующие оптоволоконные кабели Ethernet, довольно распространены."
    ]
  },
  {
    "time": [
      358.569,
      365.3
    ],
    "en": [
      "Note that the CCNA focuses on the WAN connection from the perspective of the enterprise, not the service provider."
    ],
    "ru": [
      "Обратите внимание, что CCNA фокусируется на подключении к глобальной сети с точки зрения предприятия, а не поставщика услуг."
    ]
  },
  {
    "time": [
      365.3,
      369.5
    ],
    "en": [
      "the service provider. So we won’t spend much time talking about exactly what’s going on inside of the service"
    ],
    "ru": [
      "поставщик услуг. Так что мы не будем тратить много времени на разговоры о том, что именно происходит внутри службы."
    ]
  },
  {
    "time": [
      369.5,
      374.259
    ],
    "en": [
      "provider network, the gray box in this slide and the previous one."
    ],
    "ru": [
      "сеть провайдера, серый прямоугольник на этом и предыдущем слайде."
    ]
  },
  {
    "time": [
      374.259,
      380.25
    ],
    "en": [
      "If you want to learn more about that, consider the CCNP service provider track in your future studies."
    ],
    "ru": [
      "Если вы хотите узнать об этом больше, рассмотрите возможность отслеживания поставщика услуг CCNP в своих будущих исследованиях."
    ]
  },
  {
    "time": [
      380.25,
      385.639
    ],
    "en": [
      "studies. Now, the Internet can also be used for an enterprise’s WAN connections between sites."
    ],
    "ru": [
      "исследования. Теперь Интернет можно также использовать для корпоративных соединений WAN между сайтами."
    ]
  },
  {
    "time": [
      385.639,
      389.08
    ],
    "en": [
      "However, the Internet itself is not a private network."
    ],
    "ru": [
      "Однако сам Интернет не является частной сетью."
    ]
  },
  {
    "time": [
      389.08,
      394.469
    ],
    "en": [
      "It’s a shared, public network, so sending important data over the Internet unprotected"
    ],
    "ru": [
      "Это общая общедоступная сеть, поэтому важные данные отправляются через Интернет без защиты."
    ]
  },
  {
    "time": [
      394.469,
      396.47
    ],
    "en": [
      "is not a good idea."
    ],
    "ru": [
      "не лучшая идея."
    ]
  },
  {
    "time": [
      396.47,
      400.32
    ],
    "en": [
      "In this case, note that each site has a physical connection to the Internet."
    ],
    "ru": [
      "В этом случае обратите внимание, что каждый сайт имеет физическое подключение к Интернету."
    ]
  },
  {
    "time": [
      400.32,
      406.7
    ],
    "en": [
      "However, to send traffic between sites the company will set up VPNs, virtual private networks."
    ],
    "ru": [
      "Однако для пересылки трафика между сайтами компания создаст виртуальные частные сети VPN."
    ]
  },
  {
    "time": [
      406.7,
      412.11
    ],
    "en": [
      "networks. We’ll cover these in greater detail soon, but basically the packets will be encrypted"
    ],
    "ru": [
      "сети. Вскоре мы рассмотрим их более подробно, но в основном пакеты будут зашифрованы."
    ]
  },
  {
    "time": [
      412.11,
      415.889
    ],
    "en": [
      "so that the contents can only be read by the intended recipients."
    ],
    "ru": [
      "так что содержимое может быть прочитано только предполагаемыми получателями."
    ]
  },
  {
    "time": [
      415.889,
      421.129
    ],
    "en": [
      "Then, the encrypted packet is encapsulated within a new packet and sent."
    ],
    "ru": [
      "Затем зашифрованный пакет инкапсулируется в новый пакет и отправляется."
    ]
  },
  {
    "time": [
      421.129,
      426.43
    ],
    "en": [
      "This means that the original packet will remain protected even when sent over the public Internet."
    ],
    "ru": [
      "Это означает, что исходный пакет останется защищенным даже при отправке через общедоступный Интернет."
    ]
  },
  {
    "time": [
      426.43,
      430.11
    ],
    "en": [
      "Okay, so that was a quick introduction to a few WAN options."
    ],
    "ru": [
      "Хорошо, это было краткое введение в несколько вариантов WAN."
    ]
  },
  {
    "time": [
      430.11,
      436.24
    ],
    "en": [
      "Now let’s take a slightly deeper look at each one, starting with leased lines."
    ],
    "ru": [
      "Теперь давайте более подробно рассмотрим каждую из них, начиная с выделенных линий."
    ]
  },
  {
    "time": [
      436.24,
      441.36
    ],
    "en": [
      "A leased line is a dedicated physical link, typically connecting two sites."
    ],
    "ru": [
      "Выделенная линия - это выделенный физический канал, обычно соединяющий два сайта."
    ]
  },
  {
    "time": [
      441.36,
      446.66
    ],
    "en": [
      "As I mentioned before, they use serial connections with PPP or HDLC encapsulation."
    ],
    "ru": [
      "Как я упоминал ранее, они используют последовательные соединения с инкапсуляцией PPP или HDLC."
    ]
  },
  {
    "time": [
      446.66,
      449.879
    ],
    "en": [
      "So, these aren’t Ethernet links."
    ],
    "ru": [
      "Итак, это не каналы Ethernet."
    ]
  },
  {
    "time": [
      449.879,
      455.419
    ],
    "en": [
      "The layer 2 encapsulation is not Ethernet, but rather PPP or HDLC."
    ],
    "ru": [
      "Инкапсуляция уровня 2 - это не Ethernet, а скорее PPP или HDLC."
    ]
  },
  {
    "time": [
      455.419,
      461.74
    ],
    "en": [
      "There are various standards that provide different speeds, and different standards are available in different countries."
    ],
    "ru": [
      "Существуют различные стандарты, которые обеспечивают разную скорость, и разные стандарты доступны в разных странах."
    ]
  },
  {
    "time": [
      461.74,
      464.71
    ],
    "en": [
      "in different countries. This chart from Wikipedia shows some of the standards."
    ],
    "ru": [
      "в разных странах. На этой диаграмме из Википедии показаны некоторые стандарты."
    ]
  },
  {
    "time": [
      464.71,
      468.979
    ],
    "en": [
      "Now, there are a lot here and I don’t think you need to memorize them all."
    ],
    "ru": [
      "Здесь их много, и я не думаю, что вам нужно их все запоминать."
    ]
  },
  {
    "time": [
      468.979,
      473.3
    ],
    "en": [
      "Of course, if you want you can make flashcards to try to memorize all of these standards"
    ],
    "ru": [
      "Конечно, при желании вы можете сделать карточки, чтобы попытаться запомнить все эти стандарты."
    ]
  },
  {
    "time": [
      473.3,
      478.289
    ],
    "en": [
      "and their speeds, but I think that will be unnecessary for the CCNA exam."
    ],
    "ru": [
      "и их скорость, но я думаю, что для экзамена CCNA это не понадобится."
    ]
  },
  {
    "time": [
      478.289,
      480.499
    ],
    "en": [
      "Let me just point out a few."
    ],
    "ru": [
      "Позвольте мне указать лишь на некоторые из них."
    ]
  },
  {
    "time": [
      480.499,
      486.639
    ],
    "en": [
      "In North America the standard names begin with T, as in T1, T2, and T3."
    ],
    "ru": [
      "В Северной Америке стандартные имена начинаются с буквы Т, как в Т1, Т2 и Т3."
    ]
  },
  {
    "time": [
      486.639,
      491.2
    ],
    "en": [
      "I will include flashcards for these three in the deck I provide, but keep in mind no"
    ],
    "ru": [
      "Я добавлю карточки для этих троих в свою колоду, но имейте в виду, что нет"
    ]
  },
  {
    "time": [
      491.2,
      496.3
    ],
    "en": [
      "one except a few people at Cisco know exactly what will be asked on the exam so it’s up"
    ],
    "ru": [
      "один, за исключением нескольких человек в Cisco, точно знает, что будет спрашивать на экзамене, так что все"
    ]
  },
  {
    "time": [
      496.3,
      499.979
    ],
    "en": [
      "to you if you want to memorize more or not."
    ],
    "ru": [
      "вам, если вы хотите запомнить больше или нет."
    ]
  },
  {
    "time": [
      499.979,
      506.759
    ],
    "en": [
      "In Europe, as well as other regions, the standards begin with E, for example E1, E2, and E3."
    ],
    "ru": [
      "В Европе, а также в других регионах стандарты начинаются с буквы E, например E1, E2 и E3."
    ]
  },
  {
    "time": [
      506.759,
      510.53
    ],
    "en": [
      "Again, I will include flashcards for these three standards."
    ],
    "ru": [
      "Опять же, я добавлю карточки по этим трем стандартам."
    ]
  },
  {
    "time": [
      510.53,
      516.0
    ],
    "en": [
      "Now, as I mentioned before Ethernet WAN technologies are becoming more and more popular, rather"
    ],
    "ru": [
      "Теперь, как я уже упоминал ранее, технологии Ethernet WAN становятся все более популярными."
    ]
  },
  {
    "time": [
      516.0,
      519.27
    ],
    "en": [
      "than these serial leased lines. Why is that?"
    ],
    "ru": [
      "чем эти серийные выделенные линии. Это почему?"
    ]
  },
  {
    "time": [
      519.27,
      524.51
    ],
    "en": [
      "Why is that? It’s because leased lines tend to have a higher cost, higher installation lead time,"
    ],
    "ru": [
      "Это почему? Это связано с тем, что арендованные линии, как правило, имеют более высокую стоимость, более длительное время выполнения заказа,"
    ]
  },
  {
    "time": [
      524.51,
      528.7
    ],
    "en": [
      "meaning it takes a longer time to actually install the line, and they also have slower"
    ],
    "ru": [
      "это означает, что установка линии занимает больше времени, и у них также есть более медленные"
    ]
  },
  {
    "time": [
      528.7,
      531.68
    ],
    "en": [
      "speeds than Ethernet connections provide."
    ],
    "ru": [
      "скорости, чем обеспечивают соединения Ethernet."
    ]
  },
  {
    "time": [
      531.68,
      536.97
    ],
    "en": [
      "Okay let’s move on to another WAN option, MPLS."
    ],
    "ru": [
      "Хорошо, перейдем к другому варианту WAN, MPLS."
    ]
  },
  {
    "time": [
      536.97,
      541.12
    ],
    "en": [
      "MPLS stands for Multi Protocol Label Switching."
    ],
    "ru": [
      "MPLS расшифровывается как Multi Protocol Label Switching."
    ]
  },
  {
    "time": [
      541.12,
      546.37
    ],
    "en": [
      "Similar to the Internet, service providers’ MPLS networks are shared infrastructure because"
    ],
    "ru": [
      "Подобно Интернету, сети MPLS поставщиков услуг представляют собой общую инфраструктуру, потому что"
    ]
  },
  {
    "time": [
      546.37,
      552.09
    ],
    "en": [
      "many customer enterprises connect to and share the same infrastructure to make WAN connections."
    ],
    "ru": [
      "многие предприятия-клиенты подключаются к одной и той же инфраструктуре и используют ее для создания соединений WAN."
    ]
  },
  {
    "time": [
      552.09,
      558.07
    ],
    "en": [
      "However, the label switching in the name of MPLS allows VPNs, virtual private networks,"
    ],
    "ru": [
      "Однако переключение меток в названии MPLS позволяет использовать VPN, виртуальные частные сети,"
    ]
  },
  {
    "time": [
      558.07,
      563.69
    ],
    "en": [
      "to be created over the MPLS infrastructure through the use of labels."
    ],
    "ru": [
      "создаваться поверх инфраструктуры MPLS с использованием меток."
    ]
  },
  {
    "time": [
      563.69,
      567.88
    ],
    "en": [
      "These labels are used to separate the traffic of different customers as it travels over"
    ],
    "ru": [
      "Эти метки используются для разделения трафика разных клиентов, когда он проходит через"
    ]
  },
  {
    "time": [
      567.88,
      573.85
    ],
    "en": [
      "the shared infrastructure, and make sure it doesn’t mix with the traffic of other customers."
    ],
    "ru": [
      "общую инфраструктуру и убедитесь, что она не смешивается с трафиком других клиентов."
    ]
  },
  {
    "time": [
      573.85,
      576.95
    ],
    "en": [
      "There are a few basic terms you should know for MPLS."
    ],
    "ru": [
      "Есть несколько основных терминов, которые вам следует знать о MPLS."
    ]
  },
  {
    "time": [
      576.95,
      580.45
    ],
    "en": [
      "CE router means Customer Edge router."
    ],
    "ru": [
      "Маршрутизатор CE означает маршрутизатор на стороне клиента."
    ]
  },
  {
    "time": [
      580.45,
      585.19
    ],
    "en": [
      "This is the customer’s router that is connected to the next kind of router, PE router, which"
    ],
    "ru": [
      "Это маршрутизатор клиента, который подключен к маршрутизатору следующего типа, маршрутизатору PE, который"
    ]
  },
  {
    "time": [
      585.19,
      587.7
    ],
    "en": [
      "means Provider Edge router."
    ],
    "ru": [
      "означает маршрутизатор Provider Edge."
    ]
  },
  {
    "time": [
      587.7,
      592.07
    ],
    "en": [
      "Finally there are P routers, these are the Provider core routers that are not at the"
    ],
    "ru": [
      "Наконец, есть P-маршрутизаторы, это основные маршрутизаторы Provider, которые не находятся в"
    ]
  },
  {
    "time": [
      592.07,
      596.1
    ],
    "en": [
      "edge of the network and don’t connect to customer routers."
    ],
    "ru": [
      "на границе сети и не подключайтесь к маршрутизаторам клиентов."
    ]
  },
  {
    "time": [
      596.1,
      599.02
    ],
    "en": [
      "This diagram should make it easier to understand."
    ],
    "ru": [
      "Эта диаграмма должна облегчить понимание."
    ]
  },
  {
    "time": [
      599.02,
      603.37
    ],
    "en": [
      "Notice the CE routers are at the edge of the customer networks, and they connect to the"
    ],
    "ru": [
      "Обратите внимание, что маршрутизаторы CE находятся на границе клиентских сетей и подключаются к"
    ]
  },
  {
    "time": [
      603.37,
      607.37
    ],
    "en": [
      "PE routers, the provider edge routers."
    ],
    "ru": [
      "PE-маршрутизаторы, граничные маршрутизаторы провайдера."
    ]
  },
  {
    "time": [
      607.37,
      611.44
    ],
    "en": [
      "Within the provider network there are also P routers which form the internal network"
    ],
    "ru": [
      "В сети провайдера также есть P-роутеры, которые образуют внутреннюю сеть."
    ]
  },
  {
    "time": [
      611.44,
      618.39
    ],
    "en": [
      "infrastructure of the service provider’s network, but don’t connect directly to the customer routers."
    ],
    "ru": [
      "инфраструктуру сети поставщика услуг, но не подключайтесь напрямую к маршрутизаторам клиентов."
    ]
  },
  {
    "time": [
      618.39,
      624.35
    ],
    "en": [
      "customer routers. When the PE routers receive frames from the CE routers, they add a label to the frame."
    ],
    "ru": [
      "клиентские маршрутизаторы. Когда маршрутизаторы PE получают кадры от маршрутизаторов CE, они добавляют к кадру метку."
    ]
  },
  {
    "time": [
      624.35,
      629.62
    ],
    "en": [
      "This label is actually placed in between the Layer 2 Ethernet header and the Layer 3 IP"
    ],
    "ru": [
      "Эта метка фактически помещается между заголовком Ethernet уровня 2 и IP-адресом уровня 3."
    ]
  },
  {
    "time": [
      629.62,
      635.2
    ],
    "en": [
      "header, so sometimes MPLS is called a Layer 2.5 protocol."
    ],
    "ru": [
      "заголовок, поэтому иногда MPLS называют протоколом уровня 2.5."
    ]
  },
  {
    "time": [
      635.2,
      639.58
    ],
    "en": [
      "These labels are then used to make forwarding decisions within the service provider network,"
    ],
    "ru": [
      "Эти метки затем используются для принятия решений о пересылке в сети поставщика услуг,"
    ]
  },
  {
    "time": [
      639.58,
      642.2
    ],
    "en": [
      "not the destination IP."
    ],
    "ru": [
      "не IP-адрес назначения."
    ]
  },
  {
    "time": [
      642.2,
      647.29
    ],
    "en": [
      "In regular IP routing the router checks the destination IP and compares it to its routing"
    ],
    "ru": [
      "При обычной IP-маршрутизации маршрутизатор проверяет IP-адрес назначения и сравнивает его со своей маршрутизацией."
    ]
  },
  {
    "time": [
      647.29,
      650.46
    ],
    "en": [
      "table to decide where to forward the packet."
    ],
    "ru": [
      "таблица, чтобы решить, куда пересылать пакет."
    ]
  },
  {
    "time": [
      650.46,
      652.0
    ],
    "en": [
      "But not in MPLS."
    ],
    "ru": [
      "Но не в MPLS."
    ]
  },
  {
    "time": [
      652.0,
      657.54
    ],
    "en": [
      "MPLS routers use the MPLS label to decide where to forward the packet."
    ],
    "ru": [
      "Маршрутизаторы MPLS используют метку MPLS, чтобы решить, куда пересылать пакет."
    ]
  },
  {
    "time": [
      657.54,
      664.32
    ],
    "en": [
      "Now, the CE routers do not use MPLS, it is only used by the PE and P routers."
    ],
    "ru": [
      "Теперь маршрутизаторы CE не используют MPLS, он используется только маршрутизаторами PE и P."
    ]
  },
  {
    "time": [
      664.32,
      669.65
    ],
    "en": [
      "The CE routers do not have to run MPLS or even be able to run MPLS."
    ],
    "ru": [
      "Маршрутизаторам CE не обязательно запускать MPLS или даже уметь запускать MPLS."
    ]
  },
  {
    "time": [
      669.65,
      675.55
    ],
    "en": [
      "Now, there are a few different kinds of VPNs that can be provided by MPLS."
    ],
    "ru": [
      "Теперь есть несколько различных типов VPN, которые могут быть предоставлены MPLS."
    ]
  },
  {
    "time": [
      675.55,
      684.76
    ],
    "en": [
      "When using a Layer 3 MPLS VPN, the CE and PE routers peer using OSPF for example, to share routing information."
    ],
    "ru": [
      "При использовании MPLS VPN уровня 3 маршрутизаторы CE и PE взаимодействуют друг с другом, используя OSPF, например, для обмена информацией о маршрутизации."
    ]
  },
  {
    "time": [
      684.76,
      689.66
    ],
    "en": [
      "share routing information. Now, it doesn’t have to be OSPF, it could be another routing protocol."
    ],
    "ru": [
      "поделиться информацией о маршрутизации. Теперь это не обязательно должен быть OSPF, это может быть другой протокол маршрутизации."
    ]
  },
  {
    "time": [
      689.66,
      695.04
    ],
    "en": [
      "Or the customer could just write static routes, using the PE routers as the next hop."
    ],
    "ru": [
      "Или заказчик может просто написать статические маршруты, используя маршрутизаторы PE в качестве следующего перехода."
    ]
  },
  {
    "time": [
      695.04,
      698.07
    ],
    "en": [
      "But let’s assume a routing protocol is being used."
    ],
    "ru": [
      "Но предположим, что используется протокол маршрутизации."
    ]
  },
  {
    "time": [
      698.07,
      705.64
    ],
    "en": [
      "For example, in the diagram below office A’s CE will peer with one PE, and office B’s"
    ],
    "ru": [
      "Например, на диаграмме ниже CE офиса A будет взаимодействовать с одним PE, а CE офиса B"
    ]
  },
  {
    "time": [
      705.64,
      708.52
    ],
    "en": [
      "CE will peer with the other PE, like this."
    ],
    "ru": [
      "CE будет взаимодействовать с другим PE, как это."
    ]
  },
  {
    "time": [
      708.52,
      715.11
    ],
    "en": [
      "Then, office A’s CE will learn about office B’s routes via this OSPF peering, and office"
    ],
    "ru": [
      "Затем CE офиса A узнает о маршрутах офиса B через этот пиринг OSPF, а офис"
    ]
  },
  {
    "time": [
      715.11,
      718.69
    ],
    "en": [
      "B’s CE will learn about office A’s routes, too."
    ],
    "ru": [
      "CE B также узнает о маршрутах офиса A."
    ]
  },
  {
    "time": [
      718.69,
      722.0
    ],
    "en": [
      "So, this is a Layer 3 MPLS VPN."
    ],
    "ru": [
      "Итак, это MPLS VPN уровня 3."
    ]
  },
  {
    "time": [
      722.0,
      727.93
    ],
    "en": [
      "The CE routers either form dynamic routing protocol peerings with the PE routers, or"
    ],
    "ru": [
      "Маршрутизаторы CE либо формируют пиринги протокола динамической маршрутизации с маршрутизаторами PE, либо"
    ]
  },
  {
    "time": [
      727.93,
      732.64
    ],
    "en": [
      "they use the PE routers as the next hop of their static routes."
    ],
    "ru": [
      "они используют маршрутизаторы PE в качестве следующего перехода своих статических маршрутов."
    ]
  },
  {
    "time": [
      732.64,
      739.5
    ],
    "en": [
      "A Layer 2 MPLS VPN can also be used, in which the CE and PE routers do not form peerings."
    ],
    "ru": [
      "Также может использоваться MPLS VPN уровня 2, в котором маршрутизаторы CE и PE не образуют пиринговые сети."
    ]
  },
  {
    "time": [
      739.5,
      745.23
    ],
    "en": [
      "So, the entire service provider network is transparent to the CE routers."
    ],
    "ru": [
      "Таким образом, вся сеть поставщика услуг прозрачна для маршрутизаторов CE."
    ]
  },
  {
    "time": [
      745.23,
      750.42
    ],
    "en": [
      "Although the CE routers will physically connect to a PE router, it is in effect like the two"
    ],
    "ru": [
      "Хотя маршрутизаторы CE будут физически подключаться к маршрутизатору PE, в действительности это похоже на два"
    ]
  },
  {
    "time": [
      750.42,
      753.19
    ],
    "en": [
      "CE routers are directly connected."
    ],
    "ru": [
      "Маршрутизаторы CE подключаются напрямую."
    ]
  },
  {
    "time": [
      753.19,
      756.6
    ],
    "en": [
      "Their WAN interfaces will be in the same subnet."
    ],
    "ru": [
      "Их интерфейсы WAN будут в одной подсети."
    ]
  },
  {
    "time": [
      756.6,
      762.78
    ],
    "en": [
      "If a routing protocol is used, the two CE routers will peer directly with each other like this."
    ],
    "ru": [
      "Если используется протокол маршрутизации, два маршрутизатора CE будут взаимодействовать напрямую друг с другом, как это."
    ]
  },
  {
    "time": [
      762.78,
      767.72
    ],
    "en": [
      "like this. In this case, the service provider network is still running MPLS just like before, but"
    ],
    "ru": [
      "нравится. В этом случае сеть поставщика услуг по-прежнему использует MPLS, как и раньше, но"
    ]
  },
  {
    "time": [
      767.72,
      771.94
    ],
    "en": [
      "it’s doing so in a way that it’s like the entire service provider network is just"
    ],
    "ru": [
      "это делается так, будто вся сеть поставщика услуг просто"
    ]
  },
  {
    "time": [
      771.94,
      775.37
    ],
    "en": [
      "a big switch connecting the two CE routers together like this."
    ],
    "ru": [
      "большой коммутатор, соединяющий два маршрутизатора CE вместе вот так."
    ]
  },
  {
    "time": [
      775.37,
      781.06
    ],
    "en": [
      "The CE routers are physically connected to the PE routers, and the entire PE network"
    ],
    "ru": [
      "Маршрутизаторы CE физически подключены к маршрутизаторам PE, и вся сеть PE"
    ]
  },
  {
    "time": [
      781.06,
      785.43
    ],
    "en": [
      "is operating like a big switch connecting the CE routers together."
    ],
    "ru": [
      "работает как большой коммутатор, соединяющий маршрутизаторы CE вместе."
    ]
  },
  {
    "time": [
      785.43,
      792.29
    ],
    "en": [
      "Now, MPLS is a technology that runs in the service provider network, but many different"
    ],
    "ru": [
      "Теперь MPLS - это технология, которая работает в сети поставщика услуг, но много разных"
    ]
  },
  {
    "time": [
      792.29,
      796.7
    ],
    "en": [
      "technologies, many different kinds of connections, can be used to actually connect to the service"
    ],
    "ru": [
      "технологии, много разных видов подключений, могут быть использованы для фактического подключения к сервису"
    ]
  },
  {
    "time": [
      796.7,
      800.43
    ],
    "en": [
      "provider’s MPLS network for WAN service."
    ],
    "ru": [
      "сеть MPLS провайдера для услуги WAN."
    ]
  },
  {
    "time": [
      800.43,
      805.57
    ],
    "en": [
      "In this case office A and office B are connecting via fiber optic Ethernet."
    ],
    "ru": [
      "В этом случае офис A и офис B соединяются через оптоволоконный Ethernet."
    ]
  },
  {
    "time": [
      805.57,
      811.59
    ],
    "en": [
      "Perhaps office C is connecting to the service provider via wireless 4G or 5G."
    ],
    "ru": [
      "Возможно, офис C подключается к поставщику услуг через беспроводной 4G или 5G."
    ]
  },
  {
    "time": [
      811.59,
      819.31
    ],
    "en": [
      "Office D might be connecting via CATV, a cable TV connection as is often used for home Internet access."
    ],
    "ru": [
      "Офис D может подключаться через кабельное телевидение, кабельное телевидение, которое часто используется для домашнего доступа в Интернет."
    ]
  },
  {
    "time": [
      819.31,
      826.29
    ],
    "en": [
      "access. And office E might use a serial connection, a leased line to connect to the service provider’s MPLS infrastructure."
    ],
    "ru": [
      "доступ. А офис E может использовать последовательное соединение, выделенную линию для подключения к инфраструктуре MPLS поставщика услуг."
    ]
  },
  {
    "time": [
      826.29,
      832.03
    ],
    "en": [
      "MPLS infrastructure. So, these sites are connecting to the service provider with a variety of connection types,"
    ],
    "ru": [
      "Инфраструктура MPLS. Итак, эти сайты подключаются к поставщику услуг с помощью различных типов подключения,"
    ]
  },
  {
    "time": [
      832.03,
      837.5
    ],
    "en": [
      "and they will all be able to communicate with each other over the service provider’s MPLS infrastructure."
    ],
    "ru": [
      "и все они смогут обмениваться данными друг с другом через инфраструктуру MPLS поставщика услуг."
    ]
  },
  {
    "time": [
      837.5,
      840.64
    ],
    "en": [
      "infrastructure. Okay, that’s all for MPLS."
    ],
    "ru": [
      "инфраструктура. Хорошо, это все для MPLS."
    ]
  },
  {
    "time": [
      840.64,
      847.45
    ],
    "en": [
      "For the CCNA exam, you should know that MPLS uses labels to forward traffic, not IP addresses."
    ],
    "ru": [
      "Для экзамена CCNA вы должны знать, что MPLS использует метки для пересылки трафика, а не IP-адреса."
    ]
  },
  {
    "time": [
      847.45,
      852.06
    ],
    "en": [
      "You should know the terms CE router, PE router, and P router."
    ],
    "ru": [
      "Вы должны знать термины CE-маршрутизатор, PE-маршрутизатор и P-маршрутизатор."
    ]
  },
  {
    "time": [
      852.06,
      857.97
    ],
    "en": [
      "You should know that Layer 3 MPLS VPNs have CE routers and PE routers forming peerings"
    ],
    "ru": [
      "Вы должны знать, что в сетях MPLS VPN уровня 3 есть маршрутизаторы CE и маршрутизаторы PE, образующие пиринги."
    ]
  },
  {
    "time": [
      857.97,
      864.99
    ],
    "en": [
      "using a routing protocol such as OSPF, whereas in Layer 2 MPLS VPNs it is as if the CE routers"
    ],
    "ru": [
      "используя протокол маршрутизации, такой как OSPF, тогда как в сетях MPLS VPN уровня 2 это как если бы маршрутизаторы CE"
    ]
  },
  {
    "time": [
      864.99,
      867.41
    ],
    "en": [
      "are all directly connected to each other."
    ],
    "ru": [
      "все напрямую связаны друг с другом."
    ]
  },
  {
    "time": [
      867.41,
      874.24
    ],
    "en": [
      "The service provider routers are totally transparent, acting like a big switch connecting the CE routers together."
    ],
    "ru": [
      "Маршрутизаторы поставщика услуг полностью прозрачны и действуют как большой коммутатор, соединяющий маршрутизаторы CE вместе."
    ]
  },
  {
    "time": [
      874.24,
      879.29
    ],
    "en": [
      "routers together. As I mentioned at the beginning of this video, just the topic of MPLS alone would require"
    ],
    "ru": [
      "роутеры вместе. Как я упоминал в начале этого видео, только тема MPLS потребует"
    ]
  },
  {
    "time": [
      879.29,
      885.0
    ],
    "en": [
      "a huge course to cover in depth, but let’s move on now to talk about the Internet."
    ],
    "ru": [
      "огромный курс, который нужно подробно осветить, но давайте перейдем к разговору об Интернете."
    ]
  },
  {
    "time": [
      885.0,
      890.66
    ],
    "en": [
      "Before focusing on Internet VPNs, let’s take a look at Internet connections in general."
    ],
    "ru": [
      "Прежде чем сосредоточиться на интернет-VPN, давайте взглянем на интернет-соединения в целом."
    ]
  },
  {
    "time": [
      890.66,
      894.54
    ],
    "en": [
      "There are countless ways for an enterprise to connect to the Internet."
    ],
    "ru": [
      "У предприятия есть бесчисленное множество способов подключиться к Интернету."
    ]
  },
  {
    "time": [
      894.54,
      900.13
    ],
    "en": [
      "For example, private WAN technologies such as leased lines and MPLS VPNs can be used"
    ],
    "ru": [
      "Например, могут использоваться частные технологии WAN, такие как выделенные линии и MPLS VPN."
    ]
  },
  {
    "time": [
      900.13,
      903.98
    ],
    "en": [
      "to connect to a service provider’s Internet infrastructure."
    ],
    "ru": [
      "для подключения к Интернет-инфраструктуре поставщика услуг."
    ]
  },
  {
    "time": [
      903.98,
      908.81
    ],
    "en": [
      "Although the leased line or MPLS VPN itself is a private network, it can be used as a"
    ],
    "ru": [
      "Хотя выделенная линия или MPLS VPN сама по себе является частной сетью, ее можно использовать как"
    ]
  },
  {
    "time": [
      908.81,
      912.86
    ],
    "en": [
      "means to access the public network that is the Internet."
    ],
    "ru": [
      "означает доступ к общедоступной сети, то есть Интернету."
    ]
  },
  {
    "time": [
      912.86,
      918.51
    ],
    "en": [
      "In addition, technologies such as CATV and DSL, which are commonly used by consumers"
    ],
    "ru": [
      "Кроме того, такие технологии, как CATV и DSL, которые обычно используются потребителями"
    ]
  },
  {
    "time": [
      918.51,
      922.53
    ],
    "en": [
      "for home Internet access, can also be used by an enterprise."
    ],
    "ru": [
      "для домашнего доступа в Интернет, может также использоваться на предприятии."
    ]
  },
  {
    "time": [
      922.53,
      928.29
    ],
    "en": [
      "I’m repeating myself, but for both enterprise and consumer internet access, fiber optic"
    ],
    "ru": [
      "Я повторяюсь, но как для корпоративных, так и для обычных пользователей, оптоволоконный"
    ]
  },
  {
    "time": [
      928.29,
      934.89
    ],
    "en": [
      "ethernet connections are growing in popularity due to the high speeds they provide over long distances."
    ],
    "ru": [
      "Интернет-соединения становятся все популярнее из-за высокой скорости, которую они обеспечивают на больших расстояниях."
    ]
  },
  {
    "time": [
      934.89,
      939.37
    ],
    "en": [
      "distances. But now let’s briefly look at two Internet access technologies that I mentioned above,"
    ],
    "ru": [
      "расстояния. Но теперь давайте кратко рассмотрим две технологии доступа в Интернет, о которых я упоминал выше."
    ]
  },
  {
    "time": [
      939.37,
      943.28
    ],
    "en": [
      "cable Internet and DSL."
    ],
    "ru": [
      "кабельный Интернет и DSL."
    ]
  },
  {
    "time": [
      943.28,
      947.48
    ],
    "en": [
      "First let’s look at DSL, which stands for Digital Subscriber Line."
    ],
    "ru": [
      "Сначала давайте посмотрим на DSL, что означает цифровая абонентская линия."
    ]
  },
  {
    "time": [
      947.48,
      952.95
    ],
    "en": [
      "DSL provides internet connectivity to customers over phone lines, and can share the same phone"
    ],
    "ru": [
      "DSL обеспечивает подключение к Интернету для клиентов по телефонным линиям и может использовать один и тот же телефон"
    ]
  },
  {
    "time": [
      952.95,
      955.66
    ],
    "en": [
      "line that is already installed in most homes."
    ],
    "ru": [
      "линия, которая уже установлена ​​в большинстве домов."
    ]
  },
  {
    "time": [
      955.66,
      960.47
    ],
    "en": [
      "So, this is very convenient for both the service provider and the customer."
    ],
    "ru": [
      "Так что это очень удобно как для поставщика услуг, так и для клиента."
    ]
  },
  {
    "time": [
      960.47,
      964.87
    ],
    "en": [
      "Now, there is one extra device here that I haven’t really talked about in this course"
    ],
    "ru": [
      "Здесь есть одно дополнительное устройство, о котором я особо не говорил в этом курсе."
    ]
  },
  {
    "time": [
      964.87,
      967.83
    ],
    "en": [
      "except for a brief mention in the previous video."
    ],
    "ru": [
      "за исключением краткого упоминания в предыдущем видео."
    ]
  },
  {
    "time": [
      967.83,
      968.98
    ],
    "en": [
      "That is the modem."
    ],
    "ru": [
      "Это модем."
    ]
  },
  {
    "time": [
      968.98,
      975.0
    ],
    "en": [
      "A modem, which stands for modulator-demodulator, is required to convert data into a format"
    ],
    "ru": [
      "Модем, который расшифровывается как модулятор-демодулятор, необходим для преобразования данных в формат"
    ]
  },
  {
    "time": [
      975.0,
      978.19
    ],
    "en": [
      "suitable to be sent over the phone lines."
    ],
    "ru": [
      "подходит для отправки по телефонным линиям."
    ]
  },
  {
    "time": [
      978.19,
      984.69
    ],
    "en": [
      "The modem might be a separate device, as in the diagram, or it might be incorporated into the home router."
    ],
    "ru": [
      "Модем может быть отдельным устройством, как показано на схеме, или может быть встроен в домашний маршрутизатор."
    ]
  },
  {
    "time": [
      984.69,
      989.14
    ],
    "en": [
      "the home router. This connects the network to the service provider over the phone lines."
    ],
    "ru": [
      "домашний роутер. Это подключает сеть к поставщику услуг по телефонным линиям."
    ]
  },
  {
    "time": [
      989.14,
      993.23
    ],
    "en": [
      "But there is another common kind of communication line installed in most homes that can also"
    ],
    "ru": [
      "Но есть еще один распространенный вид коммуникационной линии, установленной в большинстве домов, которая также может"
    ]
  },
  {
    "time": [
      993.23,
      994.77
    ],
    "en": [
      "be used for Internet access."
    ],
    "ru": [
      "использоваться для доступа в Интернет."
    ]
  },
  {
    "time": [
      994.77,
      998.37
    ],
    "en": [
      "Let’s look at that next."
    ],
    "ru": [
      "Давайте посмотрим на это дальше."
    ]
  },
  {
    "time": [
      998.37,
      1002.65
    ],
    "en": [
      "Cable Internet is a similar concept to DSL, although of course if you look at the technical"
    ],
    "ru": [
      "Кабельный Интернет - это концепция, аналогичная DSL, хотя, конечно, если вы посмотрите на технические характеристики"
    ]
  },
  {
    "time": [
      1002.65,
      1005.42
    ],
    "en": [
      "details it is different."
    ],
    "ru": [
      "детали разные."
    ]
  },
  {
    "time": [
      1005.42,
      1012.54
    ],
    "en": [
      "But it provides Internet access via the same CATV, cable television, lines used for TV service."
    ],
    "ru": [
      "Но он обеспечивает доступ в Интернет по тому же кабельному телевидению, кабельному телевидению, линиям, которые используются для телевизионных услуг."
    ]
  },
  {
    "time": [
      1012.54,
      1019.87
    ],
    "en": [
      "service. So, just like DSL, it takes advantage of already-installed lines and provides Internet access over them."
    ],
    "ru": [
      "услуга. Таким образом, как и DSL, он использует преимущества уже установленных линий и обеспечивает доступ в Интернет по ним."
    ]
  },
  {
    "time": [
      1019.87,
      1027.97
    ],
    "en": [
      "Like DSL, a cable modem is required to convert data into a format suitable to be sent over the CATV cables."
    ],
    "ru": [
      "Как и DSL, кабельный модем необходим для преобразования данных в формат, пригодный для передачи по кабелям CATV."
    ]
  },
  {
    "time": [
      1027.97,
      1034.76
    ],
    "en": [
      "the CATV cables. And also like a DSL modem, the cable modem can be a separate device or built into the home router."
    ],
    "ru": [
      "кабели CATV. Как и модем DSL, кабельный модем может быть отдельным устройством или встроен в домашний маршрутизатор."
    ]
  },
  {
    "time": [
      1034.76,
      1039.339
    ],
    "en": [
      "home router. Now, for a home user, having one connection to the Internet isn’t a problem."
    ],
    "ru": [
      "домашний роутер. Теперь для домашнего пользователя одно подключение к Интернету не проблема."
    ]
  },
  {
    "time": [
      1039.339,
      1044.54
    ],
    "en": [
      "It’s a bit annoying if you lose Internet access, but it’s not a disaster."
    ],
    "ru": [
      "Это немного раздражает, если вы теряете доступ к Интернету, но это не катастрофа."
    ]
  },
  {
    "time": [
      1044.54,
      1048.73
    ],
    "en": [
      "However, for many companies Internet access is essential to their operations."
    ],
    "ru": [
      "Однако для многих компаний доступ в Интернет имеет важное значение для их работы."
    ]
  },
  {
    "time": [
      1048.73,
      1054.78
    ],
    "en": [
      "So, it’s best to have redundant Internet connections, and there are a few terms you should know."
    ],
    "ru": [
      "Итак, лучше всего иметь резервные подключения к Интернету, и вам следует знать несколько терминов."
    ]
  },
  {
    "time": [
      1054.78,
      1060.92
    ],
    "en": [
      "should know. First, if you have 1 connection to 1 ISP, it’s called single homed."
    ],
    "ru": [
      "должен знать. Во-первых, если у вас 1 подключение к 1 интернет-провайдеру, это называется однодомным."
    ]
  },
  {
    "time": [
      1060.92,
      1064.02
    ],
    "en": [
      "This is like a standard home Internet connection."
    ],
    "ru": [
      "Это похоже на стандартное домашнее подключение к Интернету."
    ]
  },
  {
    "time": [
      1064.02,
      1069.03
    ],
    "en": [
      "For an enterprise, this is not ideal, because there is no redundancy here."
    ],
    "ru": [
      "Для предприятия это не идеально, потому что здесь нет избыточности."
    ]
  },
  {
    "time": [
      1069.03,
      1073.77
    ],
    "en": [
      "If you have 2 connections to that same ISP, it’s called dual homed."
    ],
    "ru": [
      "Если у вас есть 2 подключения к одному и тому же интернет-провайдеру, это называется двойным подключением."
    ]
  },
  {
    "time": [
      1073.77,
      1077.85
    ],
    "en": [
      "This provides some redundancy, but still not ideal."
    ],
    "ru": [
      "Это обеспечивает некоторую избыточность, но все же не идеально."
    ]
  },
  {
    "time": [
      1077.85,
      1082.59
    ],
    "en": [
      "If you have 1 connection to each of 2 ISPs, it’s called multihomed."
    ],
    "ru": [
      "Если у вас есть 1 подключение к каждому из 2-х интернет-провайдеров, это называется многосетевым."
    ]
  },
  {
    "time": [
      1082.59,
      1087.37
    ],
    "en": [
      "This improves the redundancy because if something happens to 1 ISP, you still have Internet"
    ],
    "ru": [
      "Это улучшает избыточность, потому что если что-то случится с 1 интернет-провайдером, у вас все равно будет Интернет."
    ]
  },
  {
    "time": [
      1087.37,
      1089.87
    ],
    "en": [
      "access via the other one."
    ],
    "ru": [
      "доступ через другой."
    ]
  },
  {
    "time": [
      1089.87,
      1095.24
    ],
    "en": [
      "And finally there is dual multihomed, 2 connections to each of 2 ISPs."
    ],
    "ru": [
      "И, наконец, есть двойное многосетевое соединение, по 2 подключения к каждому из 2 провайдеров."
    ]
  },
  {
    "time": [
      1095.24,
      1097.66
    ],
    "en": [
      "This provides the most redundancy."
    ],
    "ru": [
      "Это обеспечивает максимальную избыточность."
    ]
  },
  {
    "time": [
      1097.66,
      1101.91
    ],
    "en": [
      "Depending on the company, this might not be necessary or worth the cost."
    ],
    "ru": [
      "В зависимости от компании в этом может быть нет необходимости или это не стоит затрат."
    ]
  },
  {
    "time": [
      1101.91,
      1104.82
    ],
    "en": [
      "So, make sure you know these four terms."
    ],
    "ru": [
      "Итак, убедитесь, что вы знаете эти четыре термина."
    ]
  },
  {
    "time": [
      1104.82,
      1108.96
    ],
    "en": [
      "Single homed, dual homed, multihomed, and dual multihomed."
    ],
    "ru": [
      "Одно-, двух-, многосетевые и двух-многосетевые."
    ]
  },
  {
    "time": [
      1108.96,
      1112.05
    ],
    "en": [
      "Okay, that’s enough about Internet access for now."
    ],
    "ru": [
      "Хорошо, на данный момент хватит о доступе к Интернету."
    ]
  },
  {
    "time": [
      1112.05,
      1117.71
    ],
    "en": [
      "Let’s move on to the final topic, Internet VPNs."
    ],
    "ru": [
      "Перейдем к последней теме - VPN в Интернете."
    ]
  },
  {
    "time": [
      1117.71,
      1123.39
    ],
    "en": [
      "Private WAN services such as leased lines and MPLS provide security because each customer’s"
    ],
    "ru": [
      "Частные услуги WAN, такие как выделенные линии и MPLS, обеспечивают безопасность, потому что каждый клиент"
    ]
  },
  {
    "time": [
      1123.39,
      1129.24
    ],
    "en": [
      "traffic is separated by using dedicated physical connections, as in leased lines, or by MPLS"
    ],
    "ru": [
      "трафик разделяется с использованием выделенных физических соединений, как в выделенных линиях, или с помощью MPLS"
    ]
  },
  {
    "time": [
      1129.24,
      1131.24
    ],
    "en": [
      "tags that separate the traffic."
    ],
    "ru": [
      "теги, разделяющие трафик."
    ]
  },
  {
    "time": [
      1131.24,
      1138.44
    ],
    "en": [
      "However, when using the Internet as a WAN to connect sites together, there is no built-in security by default."
    ],
    "ru": [
      "Однако при использовании Интернета в качестве глобальной сети для соединения сайтов между собой встроенная система безопасности по умолчанию отсутствует."
    ]
  },
  {
    "time": [
      1138.44,
      1144.84
    ],
    "en": [
      "security by default. So, to provide secure communications over a shared network like the Internet, VPNs (virtual"
    ],
    "ru": [
      "безопасность по умолчанию. Итак, чтобы обеспечить безопасную связь по общей сети, такой как Интернет, VPN (виртуальные"
    ]
  },
  {
    "time": [
      1144.84,
      1146.66
    ],
    "en": [
      "private networks) are used."
    ],
    "ru": [
      "частные сети)."
    ]
  },
  {
    "time": [
      1146.66,
      1150.35
    ],
    "en": [
      "We will cover two kinds of Internet VPNs."
    ],
    "ru": [
      "Мы рассмотрим два типа интернет-сетей VPN."
    ]
  },
  {
    "time": [
      1150.35,
      1158.03
    ],
    "en": [
      "First, site-to-site VPNs using IPsec, and second, remote-access VPNs using TLS."
    ],
    "ru": [
      "Во-первых, VPN типа \"сеть-сеть\" с использованием IPsec, а во-вторых, VPN с удаленным доступом с использованием TLS."
    ]
  },
  {
    "time": [
      1158.03,
      1163.32
    ],
    "en": [
      "So let’s get right into the first one, site-to-site VPNs using IPsec."
    ],
    "ru": [
      "Итак, давайте перейдем к первому, VPN типа \"сеть-сеть\" с использованием IPsec."
    ]
  },
  {
    "time": [
      1163.32,
      1171.11
    ],
    "en": [
      "A site-to-site VPN is a VPN between two devices and is used to connect two sites together over the Internet."
    ],
    "ru": [
      "VPN типа \"сеть-сеть\" - это сеть VPN между двумя устройствами, которая используется для соединения двух сайтов через Интернет."
    ]
  },
  {
    "time": [
      1171.11,
      1176.18
    ],
    "en": [
      "over the Internet. In the diagram below office A and office B are both connected to the Internet, and we"
    ],
    "ru": [
      "по Интернету. На схеме ниже офис A и офис B подключены к Интернету, и мы"
    ]
  },
  {
    "time": [
      1176.18,
      1181.46
    ],
    "en": [
      "will use a site-to-site VPN between them so that the devices at each office can communicate"
    ],
    "ru": [
      "будет использовать между собой VPN-соединение типа \"сеть-сеть\", чтобы устройства в каждом офисе могли обмениваться данными"
    ]
  },
  {
    "time": [
      1181.46,
      1183.91
    ],
    "en": [
      "securely with each other."
    ],
    "ru": [
      "надежно друг с другом."
    ]
  },
  {
    "time": [
      1183.91,
      1189.65
    ],
    "en": [
      "In a site-to-site VPN, a VPN tunnel is created between the two devices by encapsulating the"
    ],
    "ru": [
      "В VPN типа \"сеть-сеть\" между двумя устройствами создается туннель VPN путем инкапсуляции"
    ]
  },
  {
    "time": [
      1189.65,
      1195.06
    ],
    "en": [
      "original IP packet with a VPN header and a new IP header."
    ],
    "ru": [
      "исходный IP-пакет с заголовком VPN и новым заголовком IP."
    ]
  },
  {
    "time": [
      1195.06,
      1201.07
    ],
    "en": [
      "When using IPsec, the original packet is encrypted before being encapsulated with the new header."
    ],
    "ru": [
      "При использовании IPsec исходный пакет шифруется перед инкапсуляцией с новым заголовком."
    ]
  },
  {
    "time": [
      1201.07,
      1203.49
    ],
    "en": [
      "This is what makes IPsec secure."
    ],
    "ru": [
      "Это то, что делает IPsec безопасным."
    ]
  },
  {
    "time": [
      1203.49,
      1209.231
    ],
    "en": [
      "So, the router will take the original packet, encrypt it so that it can’t be read, add"
    ],
    "ru": [
      "Итак, маршрутизатор возьмет исходный пакет, зашифрует его, чтобы его нельзя было прочитать, добавит"
    ]
  },
  {
    "time": [
      1209.231,
      1215.07
    ],
    "en": [
      "an IPsec VPN header and a new IP header, and then forward it over the Internet."
    ],
    "ru": [
      "заголовок IPsec VPN и новый заголовок IP, а затем перенаправить его через Интернет."
    ]
  },
  {
    "time": [
      1215.07,
      1218.02
    ],
    "en": [
      "Let me demonstrate that process in the diagram."
    ],
    "ru": [
      "Позвольте мне продемонстрировать этот процесс на диаграмме."
    ]
  },
  {
    "time": [
      1218.02,
      1221.79
    ],
    "en": [
      "We have configured an IPsec tunnel between these two routers."
    ],
    "ru": [
      "Мы настроили туннель IPsec между этими двумя маршрутизаторами."
    ]
  },
  {
    "time": [
      1221.79,
      1227.43
    ],
    "en": [
      "The PC at office A wants to send traffic to the PC at office B, so it first sends the"
    ],
    "ru": [
      "ПК в офисе A хочет отправить трафик на ПК в офисе B, поэтому сначала отправляет"
    ]
  },
  {
    "time": [
      1227.43,
      1231.26
    ],
    "en": [
      "unencrypted data to its default gateway, the router."
    ],
    "ru": [
      "незашифрованные данные на свой шлюз по умолчанию, маршрутизатор."
    ]
  },
  {
    "time": [
      1231.26,
      1236.77
    ],
    "en": [
      "The router encrypts the data, and adds a VPN header and new IP header."
    ],
    "ru": [
      "Маршрутизатор шифрует данные и добавляет заголовок VPN и новый заголовок IP."
    ]
  },
  {
    "time": [
      1236.77,
      1242.6
    ],
    "en": [
      "Then the encrypted data in the new packet is sent over the Internet to the other end of the tunnel."
    ],
    "ru": [
      "Затем зашифрованные данные в новом пакете отправляются через Интернет на другой конец туннеля."
    ]
  },
  {
    "time": [
      1242.6,
      1247.25
    ],
    "en": [
      "of the tunnel. The receiving router decrypts the data, and sends it to the destination PC."
    ],
    "ru": [
      "туннеля. Принимающий маршрутизатор расшифровывает данные и отправляет их на ПК назначения."
    ]
  },
  {
    "time": [
      1247.25,
      1251.78
    ],
    "en": [
      "That’s a very basic overview of how IPsec VPNs work."
    ],
    "ru": [
      "Это очень простой обзор того, как работают IPsec VPN."
    ]
  },
  {
    "time": [
      1251.78,
      1254.73
    ],
    "en": [
      "Let’s summarize that process."
    ],
    "ru": [
      "Подведем итоги этого процесса."
    ]
  },
  {
    "time": [
      1254.73,
      1259.74
    ],
    "en": [
      "When the router receives a packet that is to be sent over the VPN, it combines the original"
    ],
    "ru": [
      "Когда маршрутизатор получает пакет, который должен быть отправлен через VPN, он объединяет исходный"
    ]
  },
  {
    "time": [
      1259.74,
      1266.61
    ],
    "en": [
      "packet and a session key, also called an encryption key, and runs them through an encryption formula."
    ],
    "ru": [
      "пакет и ключ сеанса, также называемый ключом шифрования, и запускает их с помощью формулы шифрования."
    ]
  },
  {
    "time": [
      1266.61,
      1271.7
    ],
    "en": [
      "Then the sending device, the router, encapsulates the encrypted packet with a VPN header and"
    ],
    "ru": [
      "Затем отправляющее устройство, маршрутизатор, инкапсулирует зашифрованный пакет с заголовком VPN и"
    ]
  },
  {
    "time": [
      1271.7,
      1273.25
    ],
    "en": [
      "a new IP header."
    ],
    "ru": [
      "новый заголовок IP."
    ]
  },
  {
    "time": [
      1273.25,
      1279.21
    ],
    "en": [
      "The new packet is then sent to the device on the other end of the tunnel, the receiving router."
    ],
    "ru": [
      "Затем новый пакет отправляется устройству на другом конце туннеля, принимающему маршрутизатору."
    ]
  },
  {
    "time": [
      1279.21,
      1285.63
    ],
    "en": [
      "router. This device then decrypts the data to get the original packet, and forwards it to its destination."
    ],
    "ru": [
      "роутер. Затем это устройство расшифровывает данные, чтобы получить исходный пакет, и пересылает его по назначению."
    ]
  },
  {
    "time": [
      1285.63,
      1291.49
    ],
    "en": [
      "destination. Of course, this is an oversimplification of the process, but at this point in your studies that is okay."
    ],
    "ru": [
      "место назначения. Конечно, это чрезмерное упрощение процесса, но на данном этапе учебы это нормально."
    ]
  },
  {
    "time": [
      1291.49,
      1297.92
    ],
    "en": [
      "that is okay. Now, note that in a site-to-site VPN a tunnel is formed only between two tunnel endpoints,"
    ],
    "ru": [
      "это нормально. Теперь обратите внимание, что в VPN типа \"сеть-сеть\" туннель формируется только между двумя конечными точками туннеля,"
    ]
  },
  {
    "time": [
      1297.92,
      1301.48
    ],
    "en": [
      "for example the two routers connected to the Internet."
    ],
    "ru": [
      "например, два маршрутизатора, подключенных к Интернету."
    ]
  },
  {
    "time": [
      1301.48,
      1306.27
    ],
    "en": [
      "All other devices in each site don’t need to create a VPN for themselves."
    ],
    "ru": [
      "Всем остальным устройствам на каждом сайте не нужно создавать VPN для себя."
    ]
  },
  {
    "time": [
      1306.27,
      1310.65
    ],
    "en": [
      "They can send unencrypted data to their site’s router, which will encrypt it and forward"
    ],
    "ru": [
      "Они могут отправлять незашифрованные данные на маршрутизатор своего сайта, который шифрует их и пересылает"
    ]
  },
  {
    "time": [
      1310.65,
      1313.6
    ],
    "en": [
      "it in the tunnel as described above."
    ],
    "ru": [
      "это в туннеле, как описано выше."
    ]
  },
  {
    "time": [
      1313.6,
      1319.57
    ],
    "en": [
      "The next type of VPN we will look at, remote access VPNs, is different."
    ],
    "ru": [
      "Следующий тип VPN, который мы рассмотрим, VPN с удаленным доступом, отличается."
    ]
  },
  {
    "time": [
      1319.57,
      1325.17
    ],
    "en": [
      "Before looking at remote-access VPNs, I want to point out a few limitations of standard IPsec."
    ],
    "ru": [
      "Прежде чем рассматривать VPN с удаленным доступом, я хочу указать на несколько ограничений стандартного IPsec."
    ]
  },
  {
    "time": [
      1325.17,
      1331.27
    ],
    "en": [
      "IPsec. First, IPsec doesn’t support broadcast and multicast traffic, only unicast."
    ],
    "ru": [
      "IPsec. Во-первых, IPsec не поддерживает широковещательный и многоадресный трафик, только одноадресный."
    ]
  },
  {
    "time": [
      1331.27,
      1335.59
    ],
    "en": [
      "This means that routing protocols such as OSPF can’t be used over the tunnels, because"
    ],
    "ru": [
      "Это означает, что протоколы маршрутизации, такие как OSPF, не могут использоваться по туннелям, потому что"
    ]
  },
  {
    "time": [
      1335.59,
      1338.92
    ],
    "en": [
      "routing protocols rely on multicast traffic."
    ],
    "ru": [
      "протоколы маршрутизации полагаются на многоадресный трафик."
    ]
  },
  {
    "time": [
      1338.92,
      1343.56
    ],
    "en": [
      "We can solve this with GRE over IPsec, which we’ll look at next."
    ],
    "ru": [
      "Мы можем решить эту проблему с помощью GRE через IPsec, который мы рассмотрим дальше."
    ]
  },
  {
    "time": [
      1343.56,
      1347.6
    ],
    "en": [
      "Another potential problem for large networks is that configuring a full mesh of tunnels"
    ],
    "ru": [
      "Еще одна потенциальная проблема для больших сетей заключается в том, что настройка полной сети туннелей"
    ]
  },
  {
    "time": [
      1347.6,
      1350.9
    ],
    "en": [
      "between many sites is a labor-intensive task."
    ],
    "ru": [
      "между многими сайтами - это трудоемкая задача."
    ]
  },
  {
    "time": [
      1350.9,
      1355.61
    ],
    "en": [
      "It takes a lot of time and careful planning to configure dozens of VPNs."
    ],
    "ru": [
      "Настройка десятков VPN требует много времени и тщательного планирования."
    ]
  },
  {
    "time": [
      1355.61,
      1358.21
    ],
    "en": [
      "This problem can be solved with Cisco’s DMVPN."
    ],
    "ru": [
      "Эту проблему можно решить с помощью Cisco DMVPN."
    ]
  },
  {
    "time": [
      1358.21,
      1361.68
    ],
    "en": [
      "Let’s briefly look at each of the above solutions."
    ],
    "ru": [
      "Давайте кратко рассмотрим каждое из вышеперечисленных решений."
    ]
  },
  {
    "time": [
      1361.68,
      1365.48
    ],
    "en": [
      "First, GRE over IPsec."
    ],
    "ru": [
      "Во-первых, GRE по IPsec."
    ]
  },
  {
    "time": [
      1365.48,
      1371.681
    ],
    "en": [
      "GRE, which stands for Generic Routing Encapsulation, creates tunnels like IPsec, but it does not"
    ],
    "ru": [
      "GRE, что означает Generic Routing Encapsulation, создает туннели, такие как IPsec, но не"
    ]
  },
  {
    "time": [
      1371.681,
      1375.6
    ],
    "en": [
      "encrypt the original packet, so it is not secure."
    ],
    "ru": [
      "зашифровать исходный пакет, поэтому он небезопасен."
    ]
  },
  {
    "time": [
      1375.6,
      1380.75
    ],
    "en": [
      "However it has the advantage of being able to encapsulate a wide variety of Layer 3 protocols"
    ],
    "ru": [
      "Однако его преимущество заключается в возможности инкапсулировать широкий спектр протоколов уровня 3."
    ]
  },
  {
    "time": [
      1380.75,
      1383.63
    ],
    "en": [
      "as well as broadcast and multicast messages."
    ],
    "ru": [
      "а также широковещательные и многоадресные сообщения."
    ]
  },
  {
    "time": [
      1383.63,
      1391.87
    ],
    "en": [
      "So, to get the flexibility of GRE with the security of IPsec, GRE over IPsec can be used."
    ],
    "ru": [
      "Таким образом, чтобы получить гибкость GRE с безопасностью IPsec, можно использовать GRE поверх IPsec."
    ]
  },
  {
    "time": [
      1391.87,
      1397.14
    ],
    "en": [
      "The original packet will be encapsulated by a GRE header and a new IP header, and then"
    ],
    "ru": [
      "Исходный пакет будет инкапсулирован заголовком GRE и новым заголовком IP, а затем"
    ]
  },
  {
    "time": [
      1397.14,
      1403.05
    ],
    "en": [
      "the GRE packet will be encrypted and encapsulated within an IPsec VPN header and a new IP header."
    ],
    "ru": [
      "пакет GRE будет зашифрован и инкапсулирован в заголовок IPsec VPN и новый заголовок IP."
    ]
  },
  {
    "time": [
      1403.05,
      1405.86
    ],
    "en": [
      "So, here’s the original IP packet."
    ],
    "ru": [
      "Итак, вот исходный IP-пакет."
    ]
  },
  {
    "time": [
      1405.86,
      1410.15
    ],
    "en": [
      "A GRE header and new IP header are added to it."
    ],
    "ru": [
      "К нему добавляются заголовок GRE и новый заголовок IP."
    ]
  },
  {
    "time": [
      1410.15,
      1415.42
    ],
    "en": [
      "Then this new packet is encrypted, and an IPsec header and new IP header are added."
    ],
    "ru": [
      "Затем этот новый пакет зашифровывается, и добавляются заголовок IPsec и новый заголовок IP."
    ]
  },
  {
    "time": [
      1415.42,
      1417.58
    ],
    "en": [
      "We have combined GRE with IPsec."
    ],
    "ru": [
      "Мы объединили GRE с IPsec."
    ]
  },
  {
    "time": [
      1417.58,
      1421.41
    ],
    "en": [
      "That’s all I’ll say about GRE over IPsec for now."
    ],
    "ru": [
      "Это все, что я сейчас скажу о GRE через IPsec."
    ]
  },
  {
    "time": [
      1421.41,
      1423.91
    ],
    "en": [
      "You don’t need to know more than this for the CCNA."
    ],
    "ru": [
      "Для CCNA вам не нужно знать больше."
    ]
  },
  {
    "time": [
      1423.91,
      1430.5
    ],
    "en": [
      "Now, regarding the problem of configuring full-mesh IPsec tunnels, let’s look at DMVPN."
    ],
    "ru": [
      "Теперь, что касается проблемы настройки туннелей IPsec с полной сеткой, давайте посмотрим на DMVPN."
    ]
  },
  {
    "time": [
      1430.5,
      1436.929
    ],
    "en": [
      "DMVPN, which stands for Dynamic Multipoint VPN, is a Cisco-developed solution that allows"
    ],
    "ru": [
      "DMVPN, что означает Dynamic Multipoint VPN, - это разработанное Cisco решение, которое позволяет"
    ]
  },
  {
    "time": [
      1436.929,
      1441.65
    ],
    "en": [
      "routers to dynamically create a full mesh of IPsec tunnels without having to manually"
    ],
    "ru": [
      "маршрутизаторы для динамического создания полной сети туннелей IPsec без необходимости вручную"
    ]
  },
  {
    "time": [
      1441.65,
      1444.059
    ],
    "en": [
      "configure every single tunnel."
    ],
    "ru": [
      "настроить каждый туннель."
    ]
  },
  {
    "time": [
      1444.059,
      1448.8
    ],
    "en": [
      "This is a major oversimplification, but let me demonstrate it in two steps."
    ],
    "ru": [
      "Это серьезное упрощение, но позвольте мне продемонстрировать его в два этапа."
    ]
  },
  {
    "time": [
      1448.8,
      1452.96
    ],
    "en": [
      "First, you configure IPsec tunnels to a hub site."
    ],
    "ru": [
      "Сначала вы настраиваете туннели IPsec на центральный сайт."
    ]
  },
  {
    "time": [
      1452.96,
      1457.47
    ],
    "en": [
      "Notice that the router at the top is the hub, and each spoke router has an IPsec tunnel"
    ],
    "ru": [
      "Обратите внимание, что маршрутизатор вверху является концентратором, и каждый маршрутизатор луча имеет туннель IPsec."
    ]
  },
  {
    "time": [
      1457.47,
      1462.6
    ],
    "en": [
      "to that hub router, but not to the other spoke routers. That’s part 1."
    ],
    "ru": [
      "к этому маршрутизатору концентратора, но не к другим маршрутизаторам луча. Это часть 1."
    ]
  },
  {
    "time": [
      1462.6,
      1468.86
    ],
    "en": [
      "That’s part 1. Then, the hub router gives each router information about how to form an IPsec tunnel with the other routers."
    ],
    "ru": [
      "Это часть 1. Затем концентратор-маршрутизатор предоставляет каждому маршрутизатору информацию о том, как сформировать туннель IPsec с другими маршрутизаторами."
    ]
  },
  {
    "time": [
      1468.86,
      1474.17
    ],
    "en": [
      "other routers. So, we only configured hub-and-spoke tunnels, but the routers were able to form a full mesh"
    ],
    "ru": [
      "другие роутеры. Итак, мы настроили только туннели с концентратором и спицами, но маршрутизаторы смогли сформировать полную сетку."
    ]
  },
  {
    "time": [
      1474.17,
      1476.65
    ],
    "en": [
      "of IPsec tunnels on their own."
    ],
    "ru": [
      "туннелей IPsec самостоятельно."
    ]
  },
  {
    "time": [
      1476.65,
      1482.54
    ],
    "en": [
      "To summarize, DMVPN provides the configuration simplicity of hub-and-spoke, meaning each"
    ],
    "ru": [
      "Подводя итог, можно сказать, что DMVPN обеспечивает простоту конфигурации «звездообразный узел», что означает, что каждый"
    ]
  },
  {
    "time": [
      1482.54,
      1488.429
    ],
    "en": [
      "router only needs one tunnel to be configured, and the efficiency of spoke-to-spoke communication,"
    ],
    "ru": [
      "маршрутизатору требуется только один туннель для настройки, и эффективность связи луча к луче,"
    ]
  },
  {
    "time": [
      1488.429,
      1493.82
    ],
    "en": [
      "because spoke routers can communicate directly without traffic passing through the hub."
    ],
    "ru": [
      "потому что лучевые маршрутизаторы могут обмениваться данными напрямую без трафика, проходящего через концентратор."
    ]
  },
  {
    "time": [
      1493.82,
      1498.23
    ],
    "en": [
      "Some companies might want all traffic to flow through the hub site so that a central firewall"
    ],
    "ru": [
      "Некоторые компании могут захотеть, чтобы весь трафик проходил через центральный сайт, чтобы центральный брандмауэр"
    ]
  },
  {
    "time": [
      1498.23,
      1502.95
    ],
    "en": [
      "can control the traffic, but other companies might want the efficient direct spoke-to-spoke"
    ],
    "ru": [
      "может контролировать трафик, но другим компаниям может потребоваться эффективная прямая связь"
    ]
  },
  {
    "time": [
      1502.95,
      1505.98
    ],
    "en": [
      "communication that a full mesh provides."
    ],
    "ru": [
      "связь, которую обеспечивает полная сетка."
    ]
  },
  {
    "time": [
      1505.98,
      1512.809
    ],
    "en": [
      "Now let’s move on to the other major type of VPN, remote-access VPNs."
    ],
    "ru": [
      "Теперь перейдем к другому основному типу VPN - VPN удаленного доступа."
    ]
  },
  {
    "time": [
      1512.809,
      1516.83
    ],
    "en": [
      "Whereas site-to-site VPNs are used to make a point-to-point connection between two sites"
    ],
    "ru": [
      "В то время как VPN типа \"сеть-сеть\" используются для установления соединения точка-точка между двумя сайтами."
    ]
  },
  {
    "time": [
      1516.83,
      1523.11
    ],
    "en": [
      "over the Internet, remote VPNs are used to allow end devices such as PCs and mobile phones"
    ],
    "ru": [
      "через Интернет используются удаленные виртуальные частные сети, позволяющие конечным устройствам, таким как ПК и мобильные телефоны"
    ]
  },
  {
    "time": [
      1523.11,
      1527.45
    ],
    "en": [
      "to access the company’s internal resources securely over the Internet."
    ],
    "ru": [
      "для безопасного доступа к внутренним ресурсам компании через Интернет."
    ]
  },
  {
    "time": [
      1527.45,
      1533.72
    ],
    "en": [
      "Remote-access VPNs typically use TLS, transport layer security, as opposed to site-to-site"
    ],
    "ru": [
      "VPN с удаленным доступом обычно используют TLS, безопасность транспортного уровня, а не сеть между сайтами."
    ]
  },
  {
    "time": [
      1533.72,
      1536.95
    ],
    "en": [
      "VPNs which typically use IPsec."
    ],
    "ru": [
      "VPN, которые обычно используют IPsec."
    ]
  },
  {
    "time": [
      1536.95,
      1540.53
    ],
    "en": [
      "TLS is also what provides security for HTTPS, HTTP secure."
    ],
    "ru": [
      "TLS также обеспечивает безопасность для HTTPS и HTTP."
    ]
  },
  {
    "time": [
      1540.53,
      1547.69
    ],
    "en": [
      "It was formerly known as SSL, Secure Sockets Layer and developed by Netscape, but it was"
    ],
    "ru": [
      "Ранее он назывался SSL, Secure Sockets Layer и был разработан Netscape, но был"
    ]
  },
  {
    "time": [
      1547.69,
      1551.48
    ],
    "en": [
      "renamed to TLS when it was standardized by the IETF."
    ],
    "ru": [
      "переименован в TLS, когда он был стандартизирован IETF."
    ]
  },
  {
    "time": [
      1551.48,
      1559.24
    ],
    "en": [
      "VPN client software, for example Cisco AnyConnect, is installed on end devices, for example company-provided"
    ],
    "ru": [
      "Клиентское программное обеспечение VPN, например Cisco AnyConnect, устанавливается на конечных устройствах, например, предоставленных компанией."
    ]
  },
  {
    "time": [
      1559.24,
      1563.15
    ],
    "en": [
      "laptops that employees use to work from home."
    ],
    "ru": [
      "ноутбуки, которые сотрудники используют для работы из дома."
    ]
  },
  {
    "time": [
      1563.15,
      1569.86
    ],
    "en": [
      "If you work for a company from home, your device almost certainly has a kind of VPN client software installed."
    ],
    "ru": [
      "Если вы работаете в компании из дома, на вашем устройстве почти наверняка установлено что-то вроде клиентского программного обеспечения VPN."
    ]
  },
  {
    "time": [
      1569.86,
      1574.23
    ],
    "en": [
      "client software installed. These end devices then form secure tunnels to one of the company’s routers or firewalls"
    ],
    "ru": [
      "установленное клиентское программное обеспечение. Эти конечные устройства затем образуют безопасные туннели к одному из маршрутизаторов или межсетевых экранов компании."
    ]
  },
  {
    "time": [
      1574.23,
      1576.99
    ],
    "en": [
      "acting as a TLS server."
    ],
    "ru": [
      "действует как сервер TLS."
    ]
  },
  {
    "time": [
      1576.99,
      1581.72
    ],
    "en": [
      "This allows the end users to securely access resources on the company’s internal network"
    ],
    "ru": [
      "Это позволяет конечным пользователям безопасно получать доступ к ресурсам во внутренней сети компании."
    ]
  },
  {
    "time": [
      1581.72,
      1585.25
    ],
    "en": [
      "without being directly connected to the company network."
    ],
    "ru": [
      "без прямого подключения к сети компании."
    ]
  },
  {
    "time": [
      1585.25,
      1588.79
    ],
    "en": [
      "Here’s a diagram to help you visualize it."
    ],
    "ru": [
      "Вот диаграмма, которая поможет вам это визуализировать."
    ]
  },
  {
    "time": [
      1588.79,
      1593.39
    ],
    "en": [
      "The end devices on the left want to access resources on the company’s server in the"
    ],
    "ru": [
      "Конечные устройства слева хотят получить доступ к ресурсам на сервере компании в"
    ]
  },
  {
    "time": [
      1593.39,
      1595.47
    ],
    "en": [
      "data center on the right."
    ],
    "ru": [
      "дата-центр справа."
    ]
  },
  {
    "time": [
      1595.47,
      1599.8
    ],
    "en": [
      "They all have Cisco AnyConnect installed, and it is also configured on the firewall"
    ],
    "ru": [
      "На всех них установлен Cisco AnyConnect, и он также настроен на брандмауэре."
    ]
  },
  {
    "time": [
      1599.8,
      1601.1
    ],
    "en": [
      "at the data center."
    ],
    "ru": [
      "в дата-центре."
    ]
  },
  {
    "time": [
      1601.1,
      1606.82
    ],
    "en": [
      "So, the devices each form a TLS VPN tunnel to the firewall, and then they are able to"
    ],
    "ru": [
      "Таким образом, каждое устройство формирует туннель TLS VPN к брандмауэру, а затем они могут"
    ]
  },
  {
    "time": [
      1606.82,
      1611.86
    ],
    "en": [
      "securely communicate with the company’s internal servers through the tunnel."
    ],
    "ru": [
      "безопасно общаться с внутренними серверами компании через туннель."
    ]
  },
  {
    "time": [
      1611.86,
      1618.231
    ],
    "en": [
      "Note that, just like IPsec, TLS involves encrypting packets and adding additional headers, but"
    ],
    "ru": [
      "Обратите внимание, что, как и IPsec, TLS включает в себя шифрование пакетов и добавление дополнительных заголовков, но"
    ]
  },
  {
    "time": [
      1618.231,
      1620.99
    ],
    "en": [
      "for the sake of time we’ll skip over those details."
    ],
    "ru": [
      "ради экономии времени мы пропустим эти подробности."
    ]
  },
  {
    "time": [
      1620.99,
      1627.47
    ],
    "en": [
      "So, finally let’s briefly compare site-to-site and remote-access VPNs."
    ],
    "ru": [
      "Итак, наконец, давайте кратко сравним VPN типа \"сеть-сеть\" и VPN с удаленным доступом."
    ]
  },
  {
    "time": [
      1627.47,
      1633.77
    ],
    "en": [
      "Site-to-site VPNs typically use IPsec, and remote-access VPNs typically use TLS."
    ],
    "ru": [
      "VPN типа \"сеть-сеть\" обычно используют IPsec, а виртуальные частные сети удаленного доступа обычно используют TLS."
    ]
  },
  {
    "time": [
      1633.77,
      1638.11
    ],
    "en": [
      "Both of them are protocols that you don’t need to know in detail for the CCNA exam,"
    ],
    "ru": [
      "Оба они являются протоколами, которые вам не нужно знать подробно для экзамена CCNA,"
    ]
  },
  {
    "time": [
      1638.11,
      1644.02
    ],
    "en": [
      "but you should definitely know their names and have a basic understanding of their purposes."
    ],
    "ru": [
      "но вы обязательно должны знать их имена и иметь общее представление об их назначении."
    ]
  },
  {
    "time": [
      1644.02,
      1648.62
    ],
    "en": [
      "Site-to-site VPNs provide service to many devices within the sites they are connecting."
    ],
    "ru": [
      "Сети VPN типа \"сеть-сеть\" предоставляют услуги многим устройствам на сайтах, к которым они подключаются."
    ]
  },
  {
    "time": [
      1648.62,
      1653.76
    ],
    "en": [
      "One IPsec tunnel between two routers or firewalls provides traffic security for all hosts within"
    ],
    "ru": [
      "Один туннель IPsec между двумя маршрутизаторами или межсетевыми экранами обеспечивает безопасность трафика для всех хостов в пределах"
    ]
  },
  {
    "time": [
      1653.76,
      1656.0
    ],
    "en": [
      "the sites they are connecting."
    ],
    "ru": [
      "сайты, к которым они подключаются."
    ]
  },
  {
    "time": [
      1656.0,
      1661.16
    ],
    "en": [
      "On the other hand, remote-access VPNs provide service to the one end device the VPN client"
    ],
    "ru": [
      "С другой стороны, VPN с удаленным доступом предоставляют услуги одному конечному устройству - клиенту VPN."
    ]
  },
  {
    "time": [
      1661.16,
      1663.35
    ],
    "en": [
      "software is installed on."
    ],
    "ru": [
      "программное обеспечение установлено на."
    ]
  },
  {
    "time": [
      1663.35,
      1669.09
    ],
    "en": [
      "Instead of connecting two sites together, they connect one end device to a site."
    ],
    "ru": [
      "Вместо того, чтобы соединять два сайта вместе, они подключают одно конечное устройство к сайту."
    ]
  },
  {
    "time": [
      1669.09,
      1674.7
    ],
    "en": [
      "Site-to-site VPNs are typically used to permanently connect two sites securely over the Internet."
    ],
    "ru": [
      "VPN типа \"сеть-сеть\" обычно используются для постоянного безопасного соединения двух сайтов через Интернет."
    ]
  },
  {
    "time": [
      1674.7,
      1679.85
    ],
    "en": [
      "And remote-access VPNs are typically used to provide on-demand access for end devices"
    ],
    "ru": [
      "И VPN с удаленным доступом обычно используются для предоставления доступа по запросу для конечных устройств."
    ]
  },
  {
    "time": [
      1679.85,
      1686.13
    ],
    "en": [
      "that want to securely access company resources while connected to a network which is not secure."
    ],
    "ru": [
      "которые хотят получить безопасный доступ к ресурсам компании при подключении к небезопасной сети."
    ]
  },
  {
    "time": [
      1686.13,
      1691.059
    ],
    "en": [
      "secure. These two types of VPNs are specifically mentioned in the CCNA exam topics, so make sure you"
    ],
    "ru": [
      "безопасный. Эти два типа VPN специально упоминаются в темах экзамена CCNA, поэтому убедитесь, что вы"
    ]
  },
  {
    "time": [
      1691.059,
      1693.25
    ],
    "en": [
      "know the differences between them."
    ],
    "ru": [
      "знать различия между ними."
    ]
  },
  {
    "time": [
      1693.25,
      1698.64
    ],
    "en": [
      "Okay, before moving on to the quiz let’s review what we covered."
    ],
    "ru": [
      "Хорошо, прежде чем перейти к викторине, давайте еще раз рассмотрим, что мы рассмотрели."
    ]
  },
  {
    "time": [
      1698.64,
      1703.34
    ],
    "en": [
      "This video was just a shallow look at various different WAN technologies."
    ],
    "ru": [
      "Это видео было просто поверхностным взглядом на различные технологии WAN."
    ]
  },
  {
    "time": [
      1703.34,
      1707.96
    ],
    "en": [
      "Each topic in this video is very important for network engineers to understand, but when"
    ],
    "ru": [
      "Каждая тема в этом видео очень важна для понимания сетевых инженеров, но когда"
    ]
  },
  {
    "time": [
      1707.96,
      1712.32
    ],
    "en": [
      "you’re just starting your journey you don’t have to learn all of the details right away,"
    ],
    "ru": [
      "вы только начинаете свой путь, вам не нужно сразу узнавать все детали,"
    ]
  },
  {
    "time": [
      1712.32,
      1715.61
    ],
    "en": [
      "and the CCNA exam doesn’t expect you to know them all."
    ],
    "ru": [
      "и экзамен CCNA не предполагает, что вы их все знаете."
    ]
  },
  {
    "time": [
      1715.61,
      1718.48
    ],
    "en": [
      "So, first I introduced WANs."
    ],
    "ru": [
      "Итак, сначала я представил WAN."
    ]
  },
  {
    "time": [
      1718.48,
      1724.74
    ],
    "en": [
      "Wide Area Networks are used to connect geographically distant LANs, Local Area Networks, together."
    ],
    "ru": [
      "Глобальные сети используются для соединения географически удаленных локальных сетей вместе."
    ]
  },
  {
    "time": [
      1724.74,
      1730.03
    ],
    "en": [
      "For example, to connect two offices together which are located in different cities or countries."
    ],
    "ru": [
      "Например, соединить вместе два офиса, которые находятся в разных городах или странах."
    ]
  },
  {
    "time": [
      1730.03,
      1733.37
    ],
    "en": [
      "Then, we looked at leased lines."
    ],
    "ru": [
      "Затем мы посмотрели на выделенные линии."
    ]
  },
  {
    "time": [
      1733.37,
      1737.6
    ],
    "en": [
      "Leased lines are dedicated physical connections that can be used to connect sites together"
    ],
    "ru": [
      "Выделенные линии - это выделенные физические соединения, которые можно использовать для соединения сайтов вместе."
    ]
  },
  {
    "time": [
      1737.6,
      1739.56
    ],
    "en": [
      "to form a WAN."
    ],
    "ru": [
      "для формирования WAN."
    ]
  },
  {
    "time": [
      1739.56,
      1745.55
    ],
    "en": [
      "For many reasons they are being replaced by newer technologies, but you should still know about them."
    ],
    "ru": [
      "По многим причинам их заменяют более новые технологии, но вы все равно должны знать о них."
    ]
  },
  {
    "time": [
      1745.55,
      1748.13
    ],
    "en": [
      "about them. Then we looked at MPLS VPNs."
    ],
    "ru": [
      "о них. Затем мы посмотрели на MPLS VPN."
    ]
  },
  {
    "time": [
      1748.13,
      1754.69
    ],
    "en": [
      "MPLS allows enterprises to form WANs over a service provider’s MPLS infrastructure."
    ],
    "ru": [
      "MPLS позволяет предприятиям формировать глобальные сети поверх инфраструктуры MPLS поставщика услуг."
    ]
  },
  {
    "time": [
      1754.69,
      1759.1
    ],
    "en": [
      "Although the traffic of many different customers will be passing over this infrastructure,"
    ],
    "ru": [
      "Хотя через эту инфраструктуру будет проходить трафик множества разных клиентов,"
    ]
  },
  {
    "time": [
      1759.1,
      1765.58
    ],
    "en": [
      "the label-switching aspect of MPLS allows secure VPNs to be formed over the shared infrastructure."
    ],
    "ru": [
      "Аспект коммутации меток MPLS позволяет создавать безопасные VPN поверх общей инфраструктуры."
    ]
  },
  {
    "time": [
      1765.58,
      1772.5
    ],
    "en": [
      "If you want to really learn how MPLS works, consider the CCNP service provider track in the future."
    ],
    "ru": [
      "Если вы действительно хотите узнать, как работает MPLS, рассмотрите возможность использования поставщика услуг CCNP в будущем."
    ]
  },
  {
    "time": [
      1772.5,
      1778.94
    ],
    "en": [
      "the future. Then we looked at a few ways to connect to the Internet, for example DSL and cable Internet."
    ],
    "ru": [
      "будущее. Затем мы рассмотрели несколько способов подключения к Интернету, например DSL и кабельный Интернет."
    ]
  },
  {
    "time": [
      1778.94,
      1787.61
    ],
    "en": [
      "And finally Internet VPNs, specifically site-to-site VPNs using IPsec and remote-access VPNs using TLS."
    ],
    "ru": [
      "И, наконец, Интернет-VPN, в частности VPN-соединения типа \"сеть-сеть\" с использованием IPsec и виртуальные частные сети удаленного доступа с использованием TLS."
    ]
  },
  {
    "time": [
      1787.61,
      1791.89
    ],
    "en": [
      "TLS. These provide secure connectivity over the Internet, which is a shared public network"
    ],
    "ru": [
      "TLS. Они обеспечивают безопасное соединение через Интернет, который является общей общедоступной сетью."
    ]
  },
  {
    "time": [
      1791.89,
      1794.46
    ],
    "en": [
      "and not secure by default."
    ],
    "ru": [
      "и по умолчанию небезопасен."
    ]
  },
  {
    "time": [
      1794.46,
      1798.96
    ],
    "en": [
      "Make sure to watch until the end of the quiz for a bonus question from Boson Software’s"
    ],
    "ru": [
      "Обязательно просмотрите до конца викторины, чтобы узнать о бонусном вопросе от Boson Software’s"
    ]
  },
  {
    "time": [
      1798.96,
      1802.93
    ],
    "en": [
      "ExSim for CCNA, the best practice exams for the CCNA."
    ],
    "ru": [
      "ExSim для CCNA, лучшие практические экзамены для CCNA."
    ]
  },
  {
    "time": [
      1802.93,
      1808.17
    ],
    "en": [
      "Okay, let’s go to quiz question 1."
    ],
    "ru": [
      "Хорошо, перейдем к вопросу 1 викторины."
    ]
  },
  {
    "time": [
      1808.17,
      1814.03
    ],
    "en": [
      "Which of the following leased line standards provides 1.544 Mbps of bandwidth?"
    ],
    "ru": [
      "Какой из следующих стандартов выделенных линий обеспечивает пропускную способность 1,544 Мбит / с?"
    ]
  },
  {
    "time": [
      1814.03,
      1820.61
    ],
    "en": [
      "Pause the video now to select the correct answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы выбрать правильный ответ."
    ]
  },
  {
    "time": [
      1820.61,
      1822.54
    ],
    "en": [
      "The answer is B, T1."
    ],
    "ru": [
      "Ответ - B, T1."
    ]
  },
  {
    "time": [
      1822.54,
      1824.84
    ],
    "en": [
      "Here’s that wikipedia chart again."
    ],
    "ru": [
      "Вот снова таблица из Википедии."
    ]
  },
  {
    "time": [
      1824.84,
      1829.21
    ],
    "en": [
      "I doubt that you’ll have to memorize all of these for the CCNA exam, but it doesn’t"
    ],
    "ru": [
      "Я сомневаюсь, что вам придется все это запомнить для экзамена CCNA, но это не так."
    ]
  },
  {
    "time": [
      1829.21,
      1830.86
    ],
    "en": [
      "hurt to be familiar with them."
    ],
    "ru": [
      "больно быть с ними знакомым."
    ]
  },
  {
    "time": [
      1830.86,
      1833.64
    ],
    "en": [
      "Okay, let’s go to quiz question 2."
    ],
    "ru": [
      "Хорошо, перейдем к вопросу 2 викторины."
    ]
  },
  {
    "time": [
      1833.64,
      1841.76
    ],
    "en": [
      "Jeremy’s IT Lab Professional IT Training Inc. uses an MPLS VPN to connect its various offices together."
    ],
    "ru": [
      "Jeremy’s IT Lab Professional IT Training Inc. использует MPLS VPN для соединения своих различных офисов."
    ]
  },
  {
    "time": [
      1841.76,
      1844.72
    ],
    "en": [
      "offices together. Which of the following routers does NOT run MPLS?"
    ],
    "ru": [
      "офисы вместе. Какой из следующих маршрутизаторов НЕ поддерживает MPLS?"
    ]
  },
  {
    "time": [
      1844.72,
      1850.71
    ],
    "en": [
      "Pause the video to select the correct answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы выбрать правильный ответ."
    ]
  },
  {
    "time": [
      1850.71,
      1853.27
    ],
    "en": [
      "The answer is C, CE."
    ],
    "ru": [
      "Ответ - C, CE."
    ]
  },
  {
    "time": [
      1853.27,
      1860.61
    ],
    "en": [
      "In MPLS, PE, provider edge, and P, provider core routers run MPLS to provide MPLS VPN"
    ],
    "ru": [
      "В MPLS, PE, на границе провайдера и P основные маршрутизаторы провайдера используют MPLS для обеспечения MPLS VPN."
    ]
  },
  {
    "time": [
      1860.61,
      1862.94
    ],
    "en": [
      "services for their customers."
    ],
    "ru": [
      "услуги для своих клиентов."
    ]
  },
  {
    "time": [
      1862.94,
      1867.89
    ],
    "en": [
      "However, there is no need for the CE, customer edge, routers to run MPLS."
    ],
    "ru": [
      "Однако нет необходимости, чтобы маршрутизаторы CE, клиентская граница и маршрутизаторы запускали MPLS."
    ]
  },
  {
    "time": [
      1867.89,
      1873.21
    ],
    "en": [
      "Okay, let’s go to question 3."
    ],
    "ru": [
      "Хорошо, перейдем к вопросу 3."
    ]
  },
  {
    "time": [
      1873.21,
      1880.13
    ],
    "en": [
      "Which of the following MPLS VPN types allows CE routers to directly form OSPF peerings with each other?"
    ],
    "ru": [
      "Какой из следующих типов MPLS VPN позволяет маршрутизаторам CE напрямую формировать пиринги OSPF друг с другом?"
    ]
  },
  {
    "time": [
      1880.13,
      1884.49
    ],
    "en": [
      "with each other? Pause the video to select the best answer."
    ],
    "ru": [
      "друг с другом? Поставьте видео на паузу, чтобы выбрать лучший ответ."
    ]
  },
  {
    "time": [
      1884.49,
      1891.19
    ],
    "en": [
      "Okay, the answer is A, Layer 2 MPLS VPN."
    ],
    "ru": [
      "Хорошо, ответ - A, Layer 2 MPLS VPN."
    ]
  },
  {
    "time": [
      1891.19,
      1895.94
    ],
    "en": [
      "Although MPLS is sometimes called a Layer 2.5 protocol because the labels are inserted"
    ],
    "ru": [
      "Хотя MPLS иногда называют протоколом уровня 2.5, потому что метки вставляются"
    ]
  },
  {
    "time": [
      1895.94,
      1902.82
    ],
    "en": [
      "between the Layer 2 and Layer 3 headers, there is no such thing as a Layer 2.5 MPLS VPN."
    ],
    "ru": [
      "Между заголовками Layer 2 и Layer 3 нет такой вещи, как Layer 2.5 MPLS VPN."
    ]
  },
  {
    "time": [
      1902.82,
      1911.15
    ],
    "en": [
      "And in Layer 3 MPLS VPNs, the OSPF peerings would be made with PE routers, not between CE routers."
    ],
    "ru": [
      "А в сетях MPLS VPN уровня 3 пиринги OSPF будут выполняться с маршрутизаторами PE, а не между маршрутизаторами CE."
    ]
  },
  {
    "time": [
      1911.15,
      1917.35
    ],
    "en": [
      "CE routers. In a Layer 2 MPLS VPN, the entire service provider network is transparent to the customer,"
    ],
    "ru": [
      "Маршрутизаторы CE. В Layer 2 MPLS VPN вся сеть поставщика услуг прозрачна для клиента,"
    ]
  },
  {
    "time": [
      1917.35,
      1923.11
    ],
    "en": [
      "and it is as if the service provider network is a switch connecting the two CE routers together."
    ],
    "ru": [
      "и это как если бы сеть поставщика услуг была коммутатором, соединяющим два маршрутизатора CE вместе."
    ]
  },
  {
    "time": [
      1923.11,
      1927.69
    ],
    "en": [
      "together. Okay, let’s go to question 4."
    ],
    "ru": [
      "вместе. Хорошо, перейдем к вопросу 4."
    ]
  },
  {
    "time": [
      1927.69,
      1933.559
    ],
    "en": [
      "Which of the following Internet access technologies takes advantage of already-installed phone lines?"
    ],
    "ru": [
      "Какая из следующих технологий доступа в Интернет использует преимущества уже установленных телефонных линий?"
    ]
  },
  {
    "time": [
      1933.559,
      1937.48
    ],
    "en": [
      "lines? Pause the video to select the best answer."
    ],
    "ru": [
      "линии? Поставьте видео на паузу, чтобы выбрать лучший ответ."
    ]
  },
  {
    "time": [
      1937.48,
      1942.679
    ],
    "en": [
      "Okay, the answer is B, DSL."
    ],
    "ru": [
      "Хорошо, ответ - B, DSL."
    ]
  },
  {
    "time": [
      1942.679,
      1947.25
    ],
    "en": [
      "Digital Subscriber Line provides connectivity to a service provider’s Internet infrastructure"
    ],
    "ru": [
      "Цифровая абонентская линия обеспечивает подключение к интернет-инфраструктуре поставщика услуг."
    ]
  },
  {
    "time": [
      1947.25,
      1952.34
    ],
    "en": [
      "over phone lines, which are typically already installed in most modern homes."
    ],
    "ru": [
      "по телефонным линиям, которые обычно уже установлены в большинстве современных домов."
    ]
  },
  {
    "time": [
      1952.34,
      1957.21
    ],
    "en": [
      "As a bonus, it allows users to access the Internet and use the phone at the same time,"
    ],
    "ru": [
      "В качестве бонуса он позволяет пользователям одновременно выходить в Интернет и пользоваться телефоном,"
    ]
  },
  {
    "time": [
      1957.21,
      1961.78
    ],
    "en": [
      "which was not allowed in previous technologies that used the phone lines for Internet access."
    ],
    "ru": [
      "что было недопустимо в предыдущих технологиях, которые использовали телефонные линии для доступа в Интернет."
    ]
  },
  {
    "time": [
      1961.78,
      1965.74
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
      1965.74,
      1969.95
    ],
    "en": [
      "Which of the following protocols can be used in combination with IPsec to provide more"
    ],
    "ru": [
      "Какие из следующих протоколов можно использовать в сочетании с IPsec, чтобы обеспечить больше"
    ]
  },
  {
    "time": [
      1969.95,
      1974.54
    ],
    "en": [
      "flexibility by allowing multicast traffic to be forwarded in the tunnel?"
    ],
    "ru": [
      "гибкость, позволяя перенаправлять многоадресный трафик в туннель?"
    ]
  },
  {
    "time": [
      1974.54,
      1978.85
    ],
    "en": [
      "Pause the video now to select the best answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы выбрать лучший ответ."
    ]
  },
  {
    "time": [
      1978.85,
      1983.75
    ],
    "en": [
      "Okay, the answer is C, GRE."
    ],
    "ru": [
      "Хорошо, ответ - C, GRE."
    ]
  },
  {
    "time": [
      1983.75,
      1989.1
    ],
    "en": [
      "Generic Routing Encapsulation is more flexible than IPsec because it allows multicast as"
    ],
    "ru": [
      "Универсальная инкапсуляция маршрутизации более гибкая, чем IPsec, поскольку она позволяет выполнять многоадресную рассылку как"
    ]
  },
  {
    "time": [
      1989.1,
      1992.72
    ],
    "en": [
      "well as broadcast packets to be encapsulated and sent in the tunnel."
    ],
    "ru": [
      "а также широковещательные пакеты, которые должны быть инкапсулированы и отправлены в туннель."
    ]
  },
  {
    "time": [
      1992.72,
      1997.929
    ],
    "en": [
      "However, GRE isn’t secure because it doesn’t encrypt the original packet."
    ],
    "ru": [
      "Однако GRE небезопасен, поскольку не шифрует исходный пакет."
    ]
  },
  {
    "time": [
      1997.929,
      2003.9
    ],
    "en": [
      "So, the GRE packet can be encrypted and then encapsulated using IPsec to provide the benefits"
    ],
    "ru": [
      "Таким образом, пакет GRE можно зашифровать, а затем инкапсулировать с помощью IPsec, чтобы получить преимущества."
    ]
  },
  {
    "time": [
      2003.9,
      2006.01
    ],
    "en": [
      "of both IPsec and GRE."
    ],
    "ru": [
      "как IPsec, так и GRE."
    ]
  },
  {
    "time": [
      2006.01,
      2008.09
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
      2008.09,
      2008.09
    ],
    "en": [
      "Now let’s take a look at a bonus question from Boson Software’s ExSim for CCNA."
    ],
    "ru": [
      "Теперь давайте взглянем на дополнительный вопрос от ExSim компании Boson Software для CCNA."
    ]
  }
]