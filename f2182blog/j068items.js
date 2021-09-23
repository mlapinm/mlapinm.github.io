let objs = [
  {
    "time": [
      1.53,
      4.12
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
      4.12,
      7.8
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
      7.8,
      11.58
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
      11.58,
      17.31
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
      17.31,
      19.36
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
      19.36,
      26.06
    ],
    "en": [
      "In this video we will cover two Layer 2 discovery protocols, CDP and LLDP."
    ],
    "ru": [
      "В этом видео мы рассмотрим два протокола обнаружения уровня 2, CDP и LLDP."
    ]
  },
  {
    "time": [
      26.06,
      30.41
    ],
    "en": [
      "You might not have heard of a Layer 2 discovery protocol before, but I’ll explain what they"
    ],
    "ru": [
      "Возможно, вы раньше не слышали о протоколе обнаружения уровня 2, но я объясню, что они"
    ]
  },
  {
    "time": [
      30.41,
      33.16
    ],
    "en": [
      "are in this video."
    ],
    "ru": [
      "есть в этом видео."
    ]
  },
  {
    "time": [
      33.16,
      40.17
    ],
    "en": [
      "CDP and LLDP are exam topic 2.3, which says you must be able to configure and verify Layer"
    ],
    "ru": [
      "CDP и LLDP - это тема экзамена 2.3, в которой говорится, что вы должны уметь настраивать и проверять уровень."
    ]
  },
  {
    "time": [
      40.17,
      44.11
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
      40.17,
      44.11
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
      44.11,
      50.37
    ],
    "en": [
      "CDP and LLDP are important topics for the CCNA, but there’s not as much information"
    ],
    "ru": [
      "CDP и LLDP - важные темы для CCNA, но информации не так много."
    ]
  },
  {
    "time": [
      50.37,
      55.129
    ],
    "en": [
      "to absorb compared to topics like ACLs, IPv6, and OSPF."
    ],
    "ru": [
      "поглощать по сравнению с такими темами, как ACL, IPv6 и OSPF."
    ]
  },
  {
    "time": [
      55.129,
      58.829
    ],
    "en": [
      "So, hopefully this video will be a little easier to get through."
    ],
    "ru": [
      "Так что, надеюсь, это видео будет немного легче для восприятия."
    ]
  },
  {
    "time": [
      58.829,
      62.66
    ],
    "en": [
      "Here’s what we’ll cover in this video."
    ],
    "ru": [
      "Вот что мы расскажем в этом видео."
    ]
  },
  {
    "time": [
      62.66,
      66.93
    ],
    "en": [
      "First I’ll give a brief overview of Layer 2 discovery protocols."
    ],
    "ru": [
      "Сначала я дам краткий обзор протоколов обнаружения уровня 2."
    ]
  },
  {
    "time": [
      66.93,
      70.149
    ],
    "en": [
      "Then I’ll cover Cisco Discovery Protocol, CDP."
    ],
    "ru": [
      "Затем я расскажу о протоколе Cisco Discovery Protocol, CDP."
    ]
  },
  {
    "time": [
      70.149,
      74.979
    ],
    "en": [
      "Finally I’ll cover Link Layer Discovery Protocol, LLDP."
    ],
    "ru": [
      "Наконец, я расскажу о протоколе обнаружения канального уровня, LLDP."
    ]
  },
  {
    "time": [
      74.979,
      83.52
    ],
    "en": [
      "CDP and LLDP are very similar in terms of function and configuration, but there are some key differences."
    ],
    "ru": [
      "CDP и LLDP очень похожи по функциям и конфигурации, но есть некоторые ключевые различия."
    ]
  },
  {
    "time": [
      83.52,
      90.74
    ],
    "en": [
      "some key differences. Watch until the end of today’s video for a bonus practice question from Boson Software’s ExSim for CCNA."
    ],
    "ru": [
      "некоторые ключевые отличия. Просмотрите до конца сегодняшнее видео, чтобы узнать о бонусном практическом вопросе от ExSim компании Boson Software для CCNA."
    ]
  },
  {
    "time": [
      90.74,
      96.14
    ],
    "en": [
      "ExSim for CCNA. ExSim simulates the style and difficulty of the real CCNA exam better than any other practice"
    ],
    "ru": [
      "ExSim для CCNA. ExSim имитирует стиль и сложность настоящего экзамена CCNA лучше, чем любая другая практика."
    ]
  },
  {
    "time": [
      96.14,
      100.74000000000001
    ],
    "en": [
      "exams, and I highly recommend ExSim to anyone preparing for the CCNA."
    ],
    "ru": [
      "экзамены, и я очень рекомендую ExSim всем, кто готовится к CCNA."
    ]
  },
  {
    "time": [
      100.74000000000001,
      106.929
    ],
    "en": [
      "Let’s get started with a brief intro to Layer 2 discovery protocols."
    ],
    "ru": [
      "Давайте начнем с краткого введения в протоколы обнаружения уровня 2."
    ]
  },
  {
    "time": [
      106.929,
      113.02000000000001
    ],
    "en": [
      "Layer 2 discovery protocols such as CDP and LLDP share information with, and discover"
    ],
    "ru": [
      "Протоколы обнаружения уровня 2, такие как CDP и LLDP, обмениваются информацией и обнаруживают"
    ]
  },
  {
    "time": [
      113.02000000000001,
      117.07
    ],
    "en": [
      "information about, neighboring (connected) devices."
    ],
    "ru": [
      "информация о соседних (подключенных) устройствах."
    ]
  },
  {
    "time": [
      117.07,
      121.619
    ],
    "en": [
      "They are called ‘Layer 2’ discovery protocols because the protocols themselves operate at"
    ],
    "ru": [
      "Они называются протоколами обнаружения «Уровня 2», потому что сами протоколы работают на"
    ]
  },
  {
    "time": [
      121.619,
      124.59
    ],
    "en": [
      "Layer 2, they don’t use IP addresses."
    ],
    "ru": [
      "Уровень 2, они не используют IP-адреса."
    ]
  },
  {
    "time": [
      124.59,
      129.8
    ],
    "en": [
      "We’ll look at some Wireshark captures later, and you’ll see that there are no IP packets"
    ],
    "ru": [
      "Позже мы рассмотрим некоторые захваты Wireshark, и вы увидите, что IP-пакетов нет."
    ]
  },
  {
    "time": [
      129.8,
      134.93
    ],
    "en": [
      "inside of the frames sent by CDP and LLDP."
    ],
    "ru": [
      "внутри кадров, отправленных CDP и LLDP."
    ]
  },
  {
    "time": [
      134.93,
      140.01
    ],
    "en": [
      "Although they are Layer 2 discovery protocols, they can be used to share layer 3 information"
    ],
    "ru": [
      "Хотя это протоколы обнаружения уровня 2, их можно использовать для обмена информацией уровня 3."
    ]
  },
  {
    "time": [
      140.01,
      143.17000000000002
    ],
    "en": [
      "such as IP addresses too."
    ],
    "ru": [
      "например, IP-адреса тоже."
    ]
  },
  {
    "time": [
      143.17000000000002,
      149.44
    ],
    "en": [
      "The shared information includes host name, IP address, device type, etc."
    ],
    "ru": [
      "Общая информация включает имя хоста, IP-адрес, тип устройства и т. Д."
    ]
  },
  {
    "time": [
      149.44,
      156.019
    ],
    "en": [
      "CDP is a Cisco proprietary protocol, developed by Cisco for Cisco devices."
    ],
    "ru": [
      "CDP - это проприетарный протокол Cisco, разработанный Cisco для устройств Cisco."
    ]
  },
  {
    "time": [
      156.019,
      161.75
    ],
    "en": [
      "LLDP is an industry standard protocol, IEEE 802.1AB."
    ],
    "ru": [
      "LLDP - это протокол промышленного стандарта IEEE 802.1AB."
    ]
  },
  {
    "time": [
      161.75,
      167.299
    ],
    "en": [
      "So, if your network uses only Cisco devices CDP is fine."
    ],
    "ru": [
      "Итак, если ваша сеть использует только устройства Cisco, CDP вполне подойдет."
    ]
  },
  {
    "time": [
      167.299,
      173.459
    ],
    "en": [
      "However if there is a mix of vendors, for example Cisco routers, Juniper switches, and"
    ],
    "ru": [
      "Однако, если есть несколько поставщиков, например маршрутизаторы Cisco, коммутаторы Juniper и"
    ]
  },
  {
    "time": [
      173.459,
      179.349
    ],
    "en": [
      "Palo Alto firewalls, you will have to use LLDP if you want to use a Layer 2 discovery"
    ],
    "ru": [
      "Брандмауэры Пало-Альто, вам придется использовать LLDP, если вы хотите использовать обнаружение уровня 2"
    ]
  },
  {
    "time": [
      179.349,
      180.92
    ],
    "en": [
      "protocol in your network."
    ],
    "ru": [
      "протокол в вашей сети."
    ]
  },
  {
    "time": [
      180.92,
      185.86
    ],
    "en": [
      "However, because these protocols share information about the devices in the network, they can"
    ],
    "ru": [
      "Однако, поскольку эти протоколы обмениваются информацией об устройствах в сети, они могут"
    ]
  },
  {
    "time": [
      185.86,
      189.87
    ],
    "en": [
      "be considered a security risk and are often not used."
    ],
    "ru": [
      "считаются угрозой безопасности и часто не используются."
    ]
  },
  {
    "time": [
      189.87,
      195.69
    ],
    "en": [
      "It’s up to the network engineer or admin to decide if they want to use them in the network or not."
    ],
    "ru": [
      "Сетевой инженер или администратор должен решить, хотят ли они использовать их в сети или нет."
    ]
  },
  {
    "time": [
      195.69,
      200.35
    ],
    "en": [
      "network or not. At my workplace, for example, we always disable these protocols, but I’m sure many networks"
    ],
    "ru": [
      "сеть или нет. Например, на моем рабочем месте мы всегда отключаем эти протоколы, но я уверен, что многие сети"
    ]
  },
  {
    "time": [
      200.35,
      202.5
    ],
    "en": [
      "make use of them."
    ],
    "ru": [
      "использовать их."
    ]
  },
  {
    "time": [
      202.5,
      208.739
    ],
    "en": [
      "To demonstrate how these protocols work, here are two devices, R1 and SW1, directly connected."
    ],
    "ru": [
      "Чтобы продемонстрировать, как работают эти протоколы, два устройства, R1 и SW1, подключены напрямую."
    ]
  },
  {
    "time": [
      208.739,
      215.82999999999998
    ],
    "en": [
      "R1 will periodically send frames to SW1, telling it information like R1’s hostname, device"
    ],
    "ru": [
      "R1 будет периодически отправлять кадры в SW1, сообщая ему такую ​​информацию, как имя хоста R1, устройство"
    ]
  },
  {
    "time": [
      215.82999999999998,
      219.66
    ],
    "en": [
      "type, interface ID, IP address, etc."
    ],
    "ru": [
      "тип, идентификатор интерфейса, IP-адрес и т. д."
    ]
  },
  {
    "time": [
      219.66,
      224.61
    ],
    "en": [
      "SW1 will do the same, periodically sending frames to R1."
    ],
    "ru": [
      "SW1 будет делать то же самое, периодически отправляя кадры на R1."
    ]
  },
  {
    "time": [
      224.61,
      230.65
    ],
    "en": [
      "Note that SW1 doesn’t include an IP address in the information it sends to R1, because it’s a switch."
    ],
    "ru": [
      "Обратите внимание, что SW1 не включает IP-адрес в информацию, которую он отправляет на R1, потому что это коммутатор."
    ]
  },
  {
    "time": [
      230.65,
      235.86
    ],
    "en": [
      "it’s a switch. Its interface doesn’t have an IP address."
    ],
    "ru": [
      "это переключатель. Его интерфейс не имеет IP-адреса."
    ]
  },
  {
    "time": [
      235.86,
      239.269
    ],
    "en": [
      "So let’s move on to talk about CDP specifically."
    ],
    "ru": [
      "Итак, давайте перейдем конкретно к CDP."
    ]
  },
  {
    "time": [
      239.269,
      243.4
    ],
    "en": [
      "To repeat, CDP is a Cisco proprietary protocol."
    ],
    "ru": [
      "Повторюсь, CDP - это проприетарный протокол Cisco."
    ]
  },
  {
    "time": [
      243.4,
      246.22
    ],
    "en": [
      "It is enabled on Cisco devices by default."
    ],
    "ru": [
      "По умолчанию он включен на устройствах Cisco."
    ]
  },
  {
    "time": [
      246.22,
      252.74
    ],
    "en": [
      "For example Cisco routers, Cisco switches, Cisco firewalls, Cisco IP phones, etc."
    ],
    "ru": [
      "Например, маршрутизаторы Cisco, коммутаторы Cisco, межсетевые экраны Cisco, IP-телефоны Cisco и т. Д."
    ]
  },
  {
    "time": [
      252.74,
      256.37
    ],
    "en": [
      "All of these devices have CDP enabled by default."
    ],
    "ru": [
      "На всех этих устройствах по умолчанию включен CDP."
    ]
  },
  {
    "time": [
      256.37,
      265.86
    ],
    "en": [
      "CDP messages are periodically sent to multicast MAC address 0100 0CCC CCCC."
    ],
    "ru": [
      "Сообщения CDP периодически отправляются на многоадресный MAC-адрес 0100 0CCCCC."
    ]
  },
  {
    "time": [
      265.86,
      268.05
    ],
    "en": [
      "Remember that MAC address, it will be in the flashcards."
    ],
    "ru": [
      "Помните, что MAC-адрес будет на карточках."
    ]
  },
  {
    "time": [
      268.05,
      277.08
    ],
    "en": [
      "I know the MAC addresses used by different protocols such as CDP, STP, PVST, HSRP, VRRP,"
    ],
    "ru": [
      "Я знаю MAC-адреса, используемые различными протоколами, такими как CDP, STP, PVST, HSRP, VRRP,"
    ]
  },
  {
    "time": [
      277.08,
      279.94
    ],
    "en": [
      "etc are difficult to memorize."
    ],
    "ru": [
      "и т. д. трудно запомнить."
    ]
  },
  {
    "time": [
      279.94,
      283.03
    ],
    "en": [
      "The Anki flashcards are very helpful for this."
    ],
    "ru": [
      "Карточки Anki очень помогают в этом."
    ]
  },
  {
    "time": [
      283.03,
      288.47
    ],
    "en": [
      "You can add a specific tag to these MAC address cards, and use the tag to review those specific"
    ],
    "ru": [
      "Вы можете добавить конкретный тег к этим картам MAC-адресов и использовать этот тег для просмотра этих конкретных"
    ]
  },
  {
    "time": [
      288.47,
      290.58
    ],
    "en": [
      "cards whenever you want."
    ],
    "ru": [
      "карты, когда захотите."
    ]
  },
  {
    "time": [
      290.58,
      295.57
    ],
    "en": [
      "This will help you remember all of these MAC addresses, and which is used for which protocol."
    ],
    "ru": [
      "Это поможет вам запомнить все эти MAC-адреса и то, для какого протокола используется."
    ]
  },
  {
    "time": [
      295.57,
      302.75
    ],
    "en": [
      "Anyway, if you want to learn Anki functions like that do a Google search, let’s continue with CDP."
    ],
    "ru": [
      "В любом случае, если вы хотите изучить такие функции Anki, выполните поиск в Google, давайте продолжим с CDP."
    ]
  },
  {
    "time": [
      302.75,
      307.11
    ],
    "en": [
      "with CDP. Because the messages use a multicast MAC address you might think the message is forwarded to"
    ],
    "ru": [
      "с CDP. Поскольку сообщения используют многоадресный MAC-адрес, вы можете подумать, что сообщение пересылается на"
    ]
  },
  {
    "time": [
      307.11,
      309.86
    ],
    "en": [
      "multiple devices, but it isn’t."
    ],
    "ru": [
      "несколько устройств, но это не так."
    ]
  },
  {
    "time": [
      309.86,
      315.03
    ],
    "en": [
      "When a device receives a CDP message, it processes and discards the message."
    ],
    "ru": [
      "Когда устройство получает сообщение CDP, оно обрабатывает и отбрасывает сообщение."
    ]
  },
  {
    "time": [
      315.03,
      317.389
    ],
    "en": [
      "It does not forward it to other devices."
    ],
    "ru": [
      "Он не пересылает его на другие устройства."
    ]
  },
  {
    "time": [
      317.389,
      323.24
    ],
    "en": [
      "So, only directly connected neighbors can become CDP neighbors."
    ],
    "ru": [
      "Таким образом, только непосредственно подключенные соседи могут стать соседями CDP."
    ]
  },
  {
    "time": [
      323.24,
      328.82
    ],
    "en": [
      "By default, CDP messages are sent once every 60 seconds, out of all interfaces which are"
    ],
    "ru": [
      "По умолчанию сообщения CDP отправляются каждые 60 секунд из всех интерфейсов, которые"
    ]
  },
  {
    "time": [
      328.82,
      331.13
    ],
    "en": [
      "in an up state."
    ],
    "ru": [
      "в рабочем состоянии."
    ]
  },
  {
    "time": [
      331.13,
      336.38
    ],
    "en": [
      "These are the messages that contain the information like host name, IP address, etc, that I summarized"
    ],
    "ru": [
      "Это сообщения, которые содержат такую ​​информацию, как имя хоста, IP-адрес и т. Д., Которые я резюмировал."
    ]
  },
  {
    "time": [
      336.38,
      343.169
    ],
    "en": [
      "in the previous When a device receives these CDP messages from a neighboring device, it"
    ],
    "ru": [
      "в предыдущем Когда устройство получает эти сообщения CDP от соседнего устройства, оно"
    ]
  },
  {
    "time": [
      343.169,
      347.49
    ],
    "en": [
      "adds an entry for the device in its CDP neighbor table."
    ],
    "ru": [
      "добавляет запись для устройства в его таблицу соседей CDP."
    ]
  },
  {
    "time": [
      347.49,
      352.729
    ],
    "en": [
      "If a neighbor is disconnected, there is a default CDP holdtime of 180 seconds."
    ],
    "ru": [
      "Если сосед отключен, время удержания CDP по умолчанию составляет 180 секунд."
    ]
  },
  {
    "time": [
      352.729,
      358.8
    ],
    "en": [
      "So, if a message isn’t received from a neighbor for 180 seconds, the neighbor is removed from"
    ],
    "ru": [
      "Таким образом, если сообщение не получено от соседа в течение 180 секунд, сосед удаляется из"
    ]
  },
  {
    "time": [
      358.8,
      361.21
    ],
    "en": [
      "the CDP neighbor table."
    ],
    "ru": [
      "таблица соседей CDP."
    ]
  },
  {
    "time": [
      361.21,
      365.509
    ],
    "en": [
      "This makes sure the CDP neighbor table doesn’t have entries from old neighbors which used"
    ],
    "ru": [
      "Это гарантирует, что в таблице соседей CDP нет записей от старых соседей, которые использовали"
    ]
  },
  {
    "time": [
      365.509,
      368.24
    ],
    "en": [
      "to be connected, but no longer are."
    ],
    "ru": [
      "быть подключенным, но больше не существует."
    ]
  },
  {
    "time": [
      368.24,
      372.289
    ],
    "en": [
      "CDP version 2 messages are sent by default."
    ],
    "ru": [
      "Сообщения CDP версии 2 отправляются по умолчанию."
    ]
  },
  {
    "time": [
      372.289,
      378.32
    ],
    "en": [
      "There are two versions of CDP, version 1 and version 2, but version 2 is used by default."
    ],
    "ru": [
      "Существует две версии CDP: версия 1 и версия 2, но по умолчанию используется версия 2."
    ]
  },
  {
    "time": [
      378.32,
      383.509
    ],
    "en": [
      "CDP version 1 is very old so you’ll probably never need to use it."
    ],
    "ru": [
      "CDP версии 1 очень старая, поэтому вам, вероятно, никогда не понадобится ее использовать."
    ]
  },
  {
    "time": [
      383.509,
      388.1
    ],
    "en": [
      "You don’t need to know the differences between version 1 and version 2, but basically version"
    ],
    "ru": [
      "Вам не нужно знать различия между версией 1 и версией 2, но в основном версия"
    ]
  },
  {
    "time": [
      388.1,
      393.94
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
      388.1,
      393.94
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
      393.94,
      400.65999999999997
    ],
    "en": [
      "Okay let’s get right into the CLI to see exactly what information is shared by CDP."
    ],
    "ru": [
      "Хорошо, давайте перейдем к интерфейсу командной строки и посмотрим, какая именно информация передается CDP."
    ]
  },
  {
    "time": [
      400.65999999999997,
      405.55
    ],
    "en": [
      "To demonstrate CDP, as well as LLDP later, I’ll use this network."
    ],
    "ru": [
      "Чтобы продемонстрировать CDP, а также LLDP позже, я буду использовать эту сеть."
    ]
  },
  {
    "time": [
      405.55,
      412.42
    ],
    "en": [
      "Two routers and two multilayer switches, although I’m not using any Layer 3 functions on the switches."
    ],
    "ru": [
      "Два маршрутизатора и два многоуровневых коммутатора, хотя я не использую никаких функций уровня 3 на коммутаторах."
    ]
  },
  {
    "time": [
      412.42,
      418.19
    ],
    "en": [
      "switches. Before looking at the CDP neighbor table, here are a few other basic CDP show commands."
    ],
    "ru": [
      "переключатели. Прежде чем взглянуть на таблицу соседей CDP, рассмотрим еще несколько основных команд show CDP."
    ]
  },
  {
    "time": [
      418.19,
      425.75
    ],
    "en": [
      "SHOW CDP tells us the CDP timer, 60 seconds by default, the CDP holdtime, 180 seconds"
    ],
    "ru": [
      "SHOW CDP сообщает нам таймер CDP, по умолчанию 60 секунд, время удержания CDP 180 секунд"
    ]
  },
  {
    "time": [
      425.75,
      432.8
    ],
    "en": [
      "by default, and it also shows which version of CDP is being used, version 2 by default."
    ],
    "ru": [
      "по умолчанию, а также показывает, какая версия CDP используется, по умолчанию версия 2."
    ]
  },
  {
    "time": [
      432.8,
      436.93
    ],
    "en": [
      "Note that if CDP isn’t enabled on the device, you’ll get a message like this when you"
    ],
    "ru": [
      "Обратите внимание: если на устройстве не включен CDP, вы получите подобное сообщение, когда"
    ]
  },
  {
    "time": [
      436.93,
      441.78
    ],
    "en": [
      "try to use the SHOW CDP command: CDP is not enabled."
    ],
    "ru": [
      "попробуйте использовать команду SHOW CDP: CDP не включен."
    ]
  },
  {
    "time": [
      441.78,
      446.41
    ],
    "en": [
      "Okay, next I used the command SHOW CDP TRAFFIC."
    ],
    "ru": [
      "Хорошо, затем я использовал команду SHOW CDP TRAFFIC."
    ]
  },
  {
    "time": [
      446.41,
      454.22
    ],
    "en": [
      "This command tells us how many CDP packets, how many CDP advertisements, the device has sent and received."
    ],
    "ru": [
      "Эта команда сообщает нам, сколько пакетов CDP, сколько рекламных объявлений CDP было отправлено и получено устройством."
    ]
  },
  {
    "time": [
      454.22,
      461.1
    ],
    "en": [
      "sent and received. At the time that I used this command, R1 had sent 105 CDP messages and received 112 CDP"
    ],
    "ru": [
      "отправлено и получено. В то время, когда я использовал эту команду, R1 отправил 105 сообщений CDP и получил 112 сообщений CDP."
    ]
  },
  {
    "time": [
      461.1,
      466.5
    ],
    "en": [
      "messages, and all of those messages were CDP version 2 messages."
    ],
    "ru": [
      "messages, и все эти сообщения были сообщениями CDP версии 2."
    ]
  },
  {
    "time": [
      466.5,
      473.889
    ],
    "en": [
      "Finally, you can use the SHOW CDP INTERFACE command, which gives some basic information about each interface."
    ],
    "ru": [
      "Наконец, вы можете использовать команду SHOW CDP INTERFACE, которая дает базовую информацию о каждом интерфейсе."
    ]
  },
  {
    "time": [
      473.889,
      478.009
    ],
    "en": [
      "about each interface. You can also specify a certain interface when entering the command, but if you just enter"
    ],
    "ru": [
      "о каждом интерфейсе. Вы также можете указать определенный интерфейс при вводе команды, но если вы просто введете"
    ]
  },
  {
    "time": [
      478.009,
      482.32
    ],
    "en": [
      "SHOW CDP INTERFACE you’ll get information about all interfaces."
    ],
    "ru": [
      "ПОКАЗАТЬ ИНТЕРФЕЙС CDP, вы получите информацию обо всех интерфейсах."
    ]
  },
  {
    "time": [
      482.32,
      486.639
    ],
    "en": [
      "Here you can see the info for G0/0."
    ],
    "ru": [
      "Здесь вы можете увидеть информацию о G0 / 0."
    ]
  },
  {
    "time": [
      486.639,
      493.909
    ],
    "en": [
      "You can see the same CDP message timer and holdtime as above, but what does ‘encapsulation ARPA’ mean?"
    ],
    "ru": [
      "Вы можете увидеть тот же таймер сообщения CDP и время удержания, что и выше, но что означает «инкапсуляция ARPA»?"
    ]
  },
  {
    "time": [
      493.909,
      496.389
    ],
    "en": [
      "ARPA’ mean? ARPA is actually a type of Ethernet encapsulation."
    ],
    "ru": [
      "ARPA 'значит? ARPA на самом деле является разновидностью инкапсуляции Ethernet."
    ]
  },
  {
    "time": [
      496.389,
      500.86
    ],
    "en": [
      "I haven’t talked about the different types of Ethernet in this course, I’m pretty sure"
    ],
    "ru": [
      "Я не говорил о различных типах Ethernet в этом курсе, я почти уверен"
    ]
  },
  {
    "time": [
      500.86,
      505.01
    ],
    "en": [
      "that’s beyond the scope of the CCNA, but I just wanted to point that out because I’m"
    ],
    "ru": [
      "это выходит за рамки CCNA, но я просто хотел указать на это, потому что я"
    ]
  },
  {
    "time": [
      505.01,
      507.65
    ],
    "en": [
      "sure some of you would be wondering about it."
    ],
    "ru": [
      "конечно, некоторым из вас это интересно."
    ]
  },
  {
    "time": [
      507.65,
      512.49
    ],
    "en": [
      "This type of Ethernet is also known as Ethernet 2, so if you want to learn more try a Google"
    ],
    "ru": [
      "Этот тип Ethernet также известен как Ethernet 2, поэтому, если вы хотите узнать больше, попробуйте Google"
    ]
  },
  {
    "time": [
      512.49,
      514.91
    ],
    "en": [
      "search for Ethernet 2."
    ],
    "ru": [
      "найдите Ethernet 2."
    ]
  },
  {
    "time": [
      514.91,
      521.0
    ],
    "en": [
      "Okay, finally down here you can see a basic summary of how many interfaces are CDP-enabled,"
    ],
    "ru": [
      "Хорошо, наконец, здесь вы можете увидеть базовую сводку того, сколько интерфейсов поддерживает CDP,"
    ]
  },
  {
    "time": [
      521.0,
      525.11
    ],
    "en": [
      "and how many interfaces are in an up state and a down state."
    ],
    "ru": [
      "и сколько интерфейсов находятся в активном и неактивном состоянии."
    ]
  },
  {
    "time": [
      525.11,
      534.07
    ],
    "en": [
      "So, remember these three commands, SHOW CDP, SHOW CDP TRAFFIC, and SHOW CDP INTERFACE."
    ],
    "ru": [
      "Итак, запомните эти три команды: SHOW CDP, SHOW CDP TRAFFIC и SHOW CDP INTERFACE."
    ]
  },
  {
    "time": [
      534.07,
      537.14
    ],
    "en": [
      "Finally let’s look at the CDP neighbor table."
    ],
    "ru": [
      "Наконец, давайте посмотрим на таблицу соседей CDP."
    ]
  },
  {
    "time": [
      537.14,
      541.96
    ],
    "en": [
      "Here it is, on R1 I used the command SHOW CDP NEIGHBORS to view it."
    ],
    "ru": [
      "Вот он, на R1 я использовал команду SHOW CDP NEIGHBORS, чтобы просмотреть его."
    ]
  },
  {
    "time": [
      541.96,
      544.98
    ],
    "en": [
      "Let’s look at what you can learn from this command."
    ],
    "ru": [
      "Давайте посмотрим, чему вы можете научиться с помощью этой команды."
    ]
  },
  {
    "time": [
      544.98,
      550.71
    ],
    "en": [
      "First, the ‘device ID’ column lists the host name of each of R1’s CDP neighbors."
    ],
    "ru": [
      "Во-первых, в столбце «ID устройства» указывается имя хоста каждого из соседей R1 CDP."
    ]
  },
  {
    "time": [
      550.71,
      556.79
    ],
    "en": [
      "So, R1 has received CDP messages from SW1 and R2."
    ],
    "ru": [
      "Итак, R1 получил сообщения CDP от SW1 и R2."
    ]
  },
  {
    "time": [
      556.79,
      559.48
    ],
    "en": [
      "Next is the ‘local interface’ column."
    ],
    "ru": [
      "Далее идет столбец «локальный интерфейс»."
    ]
  },
  {
    "time": [
      559.48,
      563.08
    ],
    "en": [
      "This states the interface on the local device, on R1."
    ],
    "ru": [
      "Это указывает интерфейс на локальном устройстве на R1."
    ]
  },
  {
    "time": [
      563.08,
      568.29
    ],
    "en": [
      "So, if we didn’t have a proper network diagram and wanted to know which devices are connected"
    ],
    "ru": [
      "Итак, если у нас не было правильной схемы сети и мы хотели знать, какие устройства подключены"
    ]
  },
  {
    "time": [
      568.29,
      572.1
    ],
    "en": [
      "to which interface on R1, we can use this command."
    ],
    "ru": [
      "к какому интерфейсу на R1 мы можем использовать эту команду."
    ]
  },
  {
    "time": [
      572.1,
      579.98
    ],
    "en": [
      "SW1 is connected to R1’s G0/0 interface, and R2 is connected to R1’s G0/1 interface,"
    ],
    "ru": [
      "SW1 подключен к интерфейсу G0 / 0 маршрутизатора R1, а R2 подключен к интерфейсу G0 / 1 маршрутизатора R1,"
    ]
  },
  {
    "time": [
      579.98,
      583.56
    ],
    "en": [
      "as shown in the network diagram below."
    ],
    "ru": [
      "как показано на схеме сети ниже."
    ]
  },
  {
    "time": [
      583.56,
      585.79
    ],
    "en": [
      "Next is the holdtime column."
    ],
    "ru": [
      "Далее идет столбец времени удержания."
    ]
  },
  {
    "time": [
      585.79,
      592.1
    ],
    "en": [
      "This will reset to 180 each time R1 receives a CDP message from the neighbor."
    ],
    "ru": [
      "Это будет сбрасываться на 180 каждый раз, когда R1 получает сообщение CDP от соседа."
    ]
  },
  {
    "time": [
      592.1,
      597.82
    ],
    "en": [
      "With the default timers, it should count down to 120, then R1 will receive a CDP message"
    ],
    "ru": [
      "С таймерами по умолчанию он должен отсчитывать до 120, затем R1 получит сообщение CDP."
    ]
  },
  {
    "time": [
      597.82,
      602.2
    ],
    "en": [
      "and reset it to 180, and that cycle will repeat."
    ],
    "ru": [
      "и сбросьте его на 180, и этот цикл повторится."
    ]
  },
  {
    "time": [
      602.2,
      608.17
    ],
    "en": [
      "If this timer reaches 0, the neighbor will be removed from the CDP neighbor table."
    ],
    "ru": [
      "Если этот таймер достигает 0, сосед будет удален из таблицы соседей CDP."
    ]
  },
  {
    "time": [
      608.17,
      610.39
    ],
    "en": [
      "Next is the ‘capability’ column."
    ],
    "ru": [
      "Далее идет столбец «Возможности»."
    ]
  },
  {
    "time": [
      610.39,
      614.28
    ],
    "en": [
      "This helps you identify what kind of device you are connected to."
    ],
    "ru": [
      "Это поможет вам определить, к какому типу устройства вы подключены."
    ]
  },
  {
    "time": [
      614.28,
      618.61
    ],
    "en": [
      "For example, SW1 has the letters R, S, and I."
    ],
    "ru": [
      "Например, SW1 имеет буквы R, S и I."
    ]
  },
  {
    "time": [
      618.61,
      620.7
    ],
    "en": [
      "What do these codes mean?"
    ],
    "ru": [
      "Что означают эти коды?"
    ]
  },
  {
    "time": [
      620.7,
      622.92
    ],
    "en": [
      "You can check up here."
    ],
    "ru": [
      "Вы можете проверить здесь."
    ]
  },
  {
    "time": [
      622.92,
      626.98
    ],
    "en": [
      "First off, let me point out that I means IGMP."
    ],
    "ru": [
      "Прежде всего, позвольте мне указать, что я имею в виду IGMP."
    ]
  },
  {
    "time": [
      626.98,
      632.34
    ],
    "en": [
      "This is related to multicast and is beyond the CCNA, don’t worry about it for now."
    ],
    "ru": [
      "Это связано с многоадресной рассылкой и выходит за рамки CCNA, пока не беспокойтесь об этом."
    ]
  },
  {
    "time": [
      632.34,
      637.15
    ],
    "en": [
      "Then, R means router and S means switch."
    ],
    "ru": [
      "Тогда R означает маршрутизатор, а S означает коммутатор."
    ]
  },
  {
    "time": [
      637.15,
      641.44
    ],
    "en": [
      "Switch is obvious, SW1 is a switch, but why router?"
    ],
    "ru": [
      "Свитч очевиден, SW1 свитч, а почему роутер?"
    ]
  },
  {
    "time": [
      641.44,
      646.35
    ],
    "en": [
      "It’s because this is a multilayer switch, so it has routing capabilities."
    ],
    "ru": [
      "Это потому, что это многоуровневый коммутатор, поэтому у него есть возможности маршрутизации."
    ]
  },
  {
    "time": [
      646.35,
      649.89
    ],
    "en": [
      "That’s why it’s listed as both a router and a switch."
    ],
    "ru": [
      "Вот почему он указан как маршрутизатор и коммутатор."
    ]
  },
  {
    "time": [
      649.89,
      652.5
    ],
    "en": [
      "Now, how about R2?"
    ],
    "ru": [
      "А как насчет R2?"
    ]
  },
  {
    "time": [
      652.5,
      655.63
    ],
    "en": [
      "It has R and B in its capability column."
    ],
    "ru": [
      "У него есть R и B в столбце возможностей."
    ]
  },
  {
    "time": [
      655.63,
      661.17
    ],
    "en": [
      "Once again, R stands for router, which is expected because R2 is a router."
    ],
    "ru": [
      "Еще раз, R обозначает маршрутизатор, что вполне ожидаемо, потому что R2 является маршрутизатором."
    ]
  },
  {
    "time": [
      661.17,
      664.65
    ],
    "en": [
      "And B means ‘source route bridge’."
    ],
    "ru": [
      "А B означает «мост маршрута от источника»."
    ]
  },
  {
    "time": [
      664.65,
      670.19
    ],
    "en": [
      "This is another thing that isn’t necessary for the CCNA, so don’t worry about memorizing it."
    ],
    "ru": [
      "Это еще одна вещь, в которой нет необходимости для CCNA, поэтому не беспокойтесь о ее запоминании."
    ]
  },
  {
    "time": [
      670.19,
      675.76
    ],
    "en": [
      "So, I recommend just remembering R for router and S for switch."
    ],
    "ru": [
      "Поэтому я рекомендую просто запомнить R для маршрутизатора и S для коммутатора."
    ]
  },
  {
    "time": [
      675.76,
      678.13
    ],
    "en": [
      "Next is the ‘platform’ column."
    ],
    "ru": [
      "Далее идет столбец «платформа»."
    ]
  },
  {
    "time": [
      678.13,
      681.21
    ],
    "en": [
      "This displays the model of the neighboring device."
    ],
    "ru": [
      "Это отображает модель соседнего устройства."
    ]
  },
  {
    "time": [
      681.21,
      688.41
    ],
    "en": [
      "As you know, Cisco has various models of routers, switches, firewalls, etc, and the model will be displayed here."
    ],
    "ru": [
      "Как вы знаете, у Cisco есть различные модели маршрутизаторов, коммутаторов, межсетевых экранов и т. Д., И эта модель будет отображаться здесь."
    ]
  },
  {
    "time": [
      688.41,
      694.44
    ],
    "en": [
      "be displayed here. However, for these lessons I use virtual devices running in GNS3, and as you can see nothing"
    ],
    "ru": [
      "отображаться здесь. Однако для этих уроков я использую виртуальные устройства, работающие в GNS3, и, как вы видите, ничего не видно."
    ]
  },
  {
    "time": [
      694.44,
      697.72
    ],
    "en": [
      "is displayed here, since they aren’t physical devices."
    ],
    "ru": [
      "отображается здесь, поскольку они не являются физическими устройствами."
    ]
  },
  {
    "time": [
      697.72,
      703.2
    ],
    "en": [
      "So, let’s refer to Packet Tracer which actually does display information here."
    ],
    "ru": [
      "Итак, давайте обратимся к Packet Tracer, который действительно отображает здесь информацию."
    ]
  },
  {
    "time": [
      703.2,
      709.55
    ],
    "en": [
      "For example, in the Packet Tracer network I made, R1 was connected to a C2900 series"
    ],
    "ru": [
      "Например, в сети Packet Tracer, которую я сделал, R1 был подключен к серии C2900."
    ]
  },
  {
    "time": [
      709.55,
      715.18
    ],
    "en": [
      "router, R2, and a catalyst 2960 series switch, SW1."
    ],
    "ru": [
      "маршрутизатор R2 и коммутатор серии Catalyst 2960 SW1."
    ]
  },
  {
    "time": [
      715.18,
      718.67
    ],
    "en": [
      "Okay, last column is ‘port ID’."
    ],
    "ru": [
      "Хорошо, последний столбец - «идентификатор порта»."
    ]
  },
  {
    "time": [
      718.67,
      721.15
    ],
    "en": [
      "This tells you the port ID on the neighboring device."
    ],
    "ru": [
      "Это сообщает вам идентификатор порта на соседнем устройстве."
    ]
  },
  {
    "time": [
      721.15,
      728.94
    ],
    "en": [
      "So, R1 is connected to SW1’s G0/0 interface and R2’s G0/0 interface."
    ],
    "ru": [
      "Итак, R1 подключен к интерфейсу G0 / 0 SW1 и интерфейсу G0 / 0 R2."
    ]
  },
  {
    "time": [
      728.94,
      732.35
    ],
    "en": [
      "Make sure you know the difference between the ‘local interface’ field, the interface"
    ],
    "ru": [
      "Убедитесь, что вы знаете разницу между полем «локальный интерфейс» и интерфейсом."
    ]
  },
  {
    "time": [
      732.35,
      737.88
    ],
    "en": [
      "on this device, and the ‘port ID’ field, the interface on the neighboring device."
    ],
    "ru": [
      "на этом устройстве, а поле «ID порта» - интерфейс на соседнем устройстве."
    ]
  },
  {
    "time": [
      737.88,
      743.23
    ],
    "en": [
      "Okay, those are all of the fields of SHOW CDP NEIGHBORS, but there is more information"
    ],
    "ru": [
      "Хорошо, это все поля SHOW CDP NEIGHBORS, но есть дополнительная информация"
    ]
  },
  {
    "time": [
      743.23,
      746.92
    ],
    "en": [
      "you can learn via CDP."
    ],
    "ru": [
      "вы можете узнать через CDP."
    ]
  },
  {
    "time": [
      746.92,
      753.58
    ],
    "en": [
      "To view that additional information you can use this command: SHOW CDP NEIGHBORS DETAIL."
    ],
    "ru": [
      "Чтобы просмотреть эту дополнительную информацию, вы можете использовать эту команду: ПОКАЗАТЬ ДЕТАЛИ СОСЕДЕЙ CDP."
    ]
  },
  {
    "time": [
      753.58,
      757.82
    ],
    "en": [
      "As you can see, more information is displayed for each neighbor."
    ],
    "ru": [
      "Как видите, для каждого соседа отображается больше информации."
    ]
  },
  {
    "time": [
      757.82,
      761.06
    ],
    "en": [
      "For example, here’s SW1’s entry."
    ],
    "ru": [
      "Например, вот запись SW1."
    ]
  },
  {
    "time": [
      761.06,
      764.86
    ],
    "en": [
      "Some of the information you can see here that you couldn’t see with the regular SHOW CDP"
    ],
    "ru": [
      "Часть информации, которую вы можете увидеть здесь, вы не могли увидеть с помощью обычного SHOW CDP"
    ]
  },
  {
    "time": [
      764.86,
      771.88
    ],
    "en": [
      "NEIGHBORS command is the software version, the version of IOS, running on the neighbor device."
    ],
    "ru": [
      "Команда NEIGHBORS - это версия программного обеспечения, версия IOS, работающая на соседнем устройстве."
    ]
  },
  {
    "time": [
      771.88,
      776.44
    ],
    "en": [
      "device. Because SW1 is a switch, you can also see VTP information here."
    ],
    "ru": [
      "устройство. Поскольку SW1 является коммутатором, вы также можете увидеть здесь информацию о VTP."
    ]
  },
  {
    "time": [
      776.44,
      780.11
    ],
    "en": [
      "This is something CDP can do but LLDP can’t."
    ],
    "ru": [
      "CDP может это сделать, а LLDP - нет."
    ]
  },
  {
    "time": [
      780.11,
      787.96
    ],
    "en": [
      "VTP is a Cisco proprietary protocol, so only Cisco’s CDP can share information about it."
    ],
    "ru": [
      "VTP - это проприетарный протокол Cisco, поэтому только Cisco CDP может обмениваться информацией о нем."
    ]
  },
  {
    "time": [
      787.96,
      794.21
    ],
    "en": [
      "it. You can also see the native VLAN of SW1’s interface, currently it’s the default of 1."
    ],
    "ru": [
      "Это. Вы также можете увидеть собственную VLAN интерфейса SW1, в настоящее время она установлена ​​по умолчанию 1."
    ]
  },
  {
    "time": [
      794.21,
      797.79
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
      794.21,
      797.79
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
      797.79,
      805.86
    ],
    "en": [
      "So, with these last two fields CDP helps identify any mismatches of native VLAN or interface duplex."
    ],
    "ru": [
      "Таким образом, с этими двумя последними полями CDP помогает идентифицировать любые несоответствия собственной VLAN или дуплекса интерфейса."
    ]
  },
  {
    "time": [
      805.86,
      813.14
    ],
    "en": [
      "duplex. Actually, if a mismatch is found CDP will display messages on the device to let you know."
    ],
    "ru": [
      "дуплекс. Фактически, если обнаружено несоответствие, CDP будет отображать сообщения на устройстве, чтобы вы знали."
    ]
  },
  {
    "time": [
      813.14,
      815.38
    ],
    "en": [
      "know. Next here’s R2’s entry."
    ],
    "ru": [
      "знать. Далее запись R2."
    ]
  },
  {
    "time": [
      815.38,
      819.83
    ],
    "en": [
      "I just wanted to point out that you can see R2’s IP address here, 10.0.0.2."
    ],
    "ru": [
      "Я просто хотел указать, что здесь вы можете увидеть IP-адрес R2, 10.0.0.2."
    ]
  },
  {
    "time": [
      819.83,
      826.89
    ],
    "en": [
      "SW1 doesn’t have any IP addresses, so none were displayed above, but the SHOW CDP NEIGHBORS"
    ],
    "ru": [
      "SW1 не имеет IP-адресов, поэтому они не отображались выше, но SHOW CDP NEIGHBORS"
    ]
  },
  {
    "time": [
      826.89,
      830.99
    ],
    "en": [
      "DETAIL command lets you view the neighbor’s IP address."
    ],
    "ru": [
      "Команда DETAIL позволяет просмотреть IP-адрес соседа."
    ]
  },
  {
    "time": [
      830.99,
      836.68
    ],
    "en": [
      "Now, if the device has a lot of CDP neighbors the output of this command can get quite long."
    ],
    "ru": [
      "Теперь, если у устройства много соседей CDP, вывод этой команды может быть довольно длинным."
    ]
  },
  {
    "time": [
      836.68,
      843.63
    ],
    "en": [
      "However, there is another command which lets you view this detailed information for just a single neighbor."
    ],
    "ru": [
      "Однако есть еще одна команда, которая позволяет вам просматривать эту подробную информацию только для одного соседа."
    ]
  },
  {
    "time": [
      843.63,
      851.1
    ],
    "en": [
      "a single neighbor. That is this command, SHOW CDP ENTRY, followed by the neighbor’s host name, I used R2 in this case."
    ],
    "ru": [
      "одинокий сосед. Это команда SHOW CDP ENTRY, за которой следует имя хоста соседа, в данном случае я использовал R2."
    ]
  },
  {
    "time": [
      851.1,
      858.17
    ],
    "en": [
      "this case. The output here is exactly the same as in SHOW CDP NEIGHBORS DETAIL, but it only shows the specified neighbor."
    ],
    "ru": [
      "Это дело. Вывод здесь точно такой же, как и в SHOW CDP NEIGHBORS DETAIL, но показывает только указанного соседа."
    ]
  },
  {
    "time": [
      858.17,
      861.98
    ],
    "en": [
      "the specified neighbor. Here’s a brief summary of each of the commands I just showed you."
    ],
    "ru": [
      "указанного соседа. Вот краткое изложение каждой из команд, которые я вам только что показал."
    ]
  },
  {
    "time": [
      861.98,
      868.48
    ],
    "en": [
      "I won’t go over them individually, feel free to pause the video here if you want to review them."
    ],
    "ru": [
      "Я не буду рассматривать их по отдельности, не стесняйтесь приостановить видео здесь, если хотите просмотреть их."
    ]
  },
  {
    "time": [
      868.48,
      873.221
    ],
    "en": [
      "review them. Because CDP is enabled by default, if you want to use CDP in your network you don’t"
    ],
    "ru": [
      "просмотрите их. Поскольку CDP включен по умолчанию, если вы хотите использовать CDP в своей сети, вы не должны"
    ]
  },
  {
    "time": [
      873.221,
      878.29
    ],
    "en": [
      "have to do any configuration, you can just use these SHOW commands."
    ],
    "ru": [
      "необходимо выполнить любую конфигурацию, вы можете просто использовать эти команды SHOW."
    ]
  },
  {
    "time": [
      878.29,
      883.27
    ],
    "en": [
      "But now let’s take a look at some basic CDP configurations."
    ],
    "ru": [
      "Но теперь давайте взглянем на некоторые основные конфигурации CDP."
    ]
  },
  {
    "time": [
      883.27,
      890.43
    ],
    "en": [
      "As I just said, CDP is globally enabled by default, Cisco devices have CDP activated by default."
    ],
    "ru": [
      "Как я только что сказал, CDP глобально включен по умолчанию, на устройствах Cisco CDP активирован по умолчанию."
    ]
  },
  {
    "time": [
      890.43,
      894.39
    ],
    "en": [
      "by default. Each interface also has CDP enabled by default."
    ],
    "ru": [
      "по умолчанию. Для каждого интерфейса также по умолчанию включен CDP."
    ]
  },
  {
    "time": [
      894.39,
      901.66
    ],
    "en": [
      "If you want to enable or disable CDP globally, use the CDP RUN command from global config mode."
    ],
    "ru": [
      "Если вы хотите включить или отключить CDP глобально, используйте команду CDP RUN из режима глобальной конфигурации."
    ]
  },
  {
    "time": [
      901.66,
      908.45
    ],
    "en": [
      "mode. Use CDP RUN to enable it, which is default, or NO CDP RUN to disable it."
    ],
    "ru": [
      "режим. Используйте CDP RUN, чтобы включить его, что по умолчанию, или NO CDP RUN, чтобы отключить его."
    ]
  },
  {
    "time": [
      908.45,
      914.74
    ],
    "en": [
      "To enable CDP on an interface, which is the default state, use CDP ENABLE, and use NO"
    ],
    "ru": [
      "Чтобы включить CDP на интерфейсе, который является состоянием по умолчанию, используйте CDP ENABLE и используйте NO."
    ]
  },
  {
    "time": [
      914.74,
      918.0
    ],
    "en": [
      "in front of the command to disable it."
    ],
    "ru": [
      "перед командой, чтобы отключить его."
    ]
  },
  {
    "time": [
      918.0,
      921.41
    ],
    "en": [
      "These commands are done from interface config mode."
    ],
    "ru": [
      "Эти команды выполняются в режиме конфигурации интерфейса."
    ]
  },
  {
    "time": [
      921.41,
      926.98
    ],
    "en": [
      "You can configure the CDP timer, how often CDP messages are sent, with the CDP TIMER"
    ],
    "ru": [
      "Вы можете настроить таймер CDP и частоту отправки сообщений CDP с помощью ТАЙМЕРА CDP."
    ]
  },
  {
    "time": [
      926.98,
      929.6
    ],
    "en": [
      "command from global config mode."
    ],
    "ru": [
      "команда из режима глобальной конфигурации."
    ]
  },
  {
    "time": [
      929.6,
      933.74
    ],
    "en": [
      "You can also configure the holdtime with CDP HOLDTIME."
    ],
    "ru": [
      "Вы также можете настроить время удержания с помощью CDP HOLDTIME."
    ]
  },
  {
    "time": [
      933.74,
      940.36
    ],
    "en": [
      "And you can enable CDP version 2, which is the default state, with CDP ADVERTISE-V2,"
    ],
    "ru": [
      "И вы можете включить CDP версии 2, которая является состоянием по умолчанию, с помощью CDP ADVERTISE-V2,"
    ]
  },
  {
    "time": [
      940.36,
      944.55
    ],
    "en": [
      "or use NO in front of the command to disable it and use version 1."
    ],
    "ru": [
      "или используйте NO перед командой, чтобы отключить ее и использовать версию 1."
    ]
  },
  {
    "time": [
      944.55,
      949.09
    ],
    "en": [
      "You’ll probably never use that last command, but I included it anyway."
    ],
    "ru": [
      "Вы, вероятно, никогда не воспользуетесь этой последней командой, но я все равно включил ее."
    ]
  },
  {
    "time": [
      949.09,
      954.42
    ],
    "en": [
      "So, these are the CDP configuration commands you should know for the CCNA."
    ],
    "ru": [
      "Итак, это команды настройки CDP, которые вам следует знать для CCNA."
    ]
  },
  {
    "time": [
      954.42,
      964.01
    ],
    "en": [
      "CDP RUN, CDP ENABLE, CDP TIMER, CDP HOLDTIME, and CDP ADVERTISE-V2."
    ],
    "ru": [
      "CDP RUN, CDP ENABLE, CDP TIMER, CDP HOLDTIME и CDP ADVERTISE-V2."
    ]
  },
  {
    "time": [
      964.01,
      968.67
    ],
    "en": [
      "Finally let’s move on to LLDP, Link Layer Discovery Protocol."
    ],
    "ru": [
      "Наконец, перейдем к LLDP, протоколу обнаружения канального уровня."
    ]
  },
  {
    "time": [
      968.67,
      975.18
    ],
    "en": [
      "LLDP is an industry standard protocol, so many different vendors implement it on their devices."
    ],
    "ru": [
      "LLDP - это протокол промышленного стандарта, поэтому многие поставщики реализуют его на своих устройствах."
    ]
  },
  {
    "time": [
      975.18,
      981.83
    ],
    "en": [
      "devices. CDP was the original, and LLDP was later invented to have an industry standard version."
    ],
    "ru": [
      "устройств. Первоначальным был CDP, а позже был изобретен протокол LLDP, имеющий стандартную отраслевую версию."
    ]
  },
  {
    "time": [
      981.83,
      987.02
    ],
    "en": [
      "It is usually disabled on Cisco devices by default, so it must be manually enabled."
    ],
    "ru": [
      "Обычно он отключен на устройствах Cisco по умолчанию, поэтому его необходимо включить вручную."
    ]
  },
  {
    "time": [
      987.02,
      992.33
    ],
    "en": [
      "A device can run CDP and LLDP at the same time, so you don’t have to choose between"
    ],
    "ru": [
      "Устройство может запускать CDP и LLDP одновременно, поэтому вам не нужно выбирать между"
    ]
  },
  {
    "time": [
      992.33,
      995.75
    ],
    "en": [
      "them, although usually you’ll just use one."
    ],
    "ru": [
      "их, хотя обычно вы просто используете один."
    ]
  },
  {
    "time": [
      995.75,
      998.4
    ],
    "en": [
      "Here’s another MAC address to remember."
    ],
    "ru": [
      "Вот еще один MAC-адрес, который следует запомнить."
    ]
  },
  {
    "time": [
      998.4,
      1006.81
    ],
    "en": [
      "LLDP messages are periodically sent to multicast MAC address 0180 C200 000E."
    ],
    "ru": [
      "Сообщения LLDP периодически отправляются на многоадресный MAC-адрес 0180 C200 000E."
    ]
  },
  {
    "time": [
      1006.81,
      1010.93
    ],
    "en": [
      "Again, use the flashcards to remember that one."
    ],
    "ru": [
      "Опять же, используйте карточки, чтобы запомнить это."
    ]
  },
  {
    "time": [
      1010.93,
      1012.98
    ],
    "en": [
      "This is the same as for CDP."
    ],
    "ru": [
      "Это то же самое, что и для CDP."
    ]
  },
  {
    "time": [
      1012.98,
      1017.95
    ],
    "en": [
      "When a device receives an LLDP message, it processes and discards the message."
    ],
    "ru": [
      "Когда устройство получает сообщение LLDP, оно обрабатывает и отбрасывает сообщение."
    ]
  },
  {
    "time": [
      1017.95,
      1020.05
    ],
    "en": [
      "It does not forward it to other devices."
    ],
    "ru": [
      "Он не пересылает его на другие устройства."
    ]
  },
  {
    "time": [
      1020.05,
      1025.81
    ],
    "en": [
      "So, only directly connected devices can become LLDP neighbors."
    ],
    "ru": [
      "Таким образом, соседями по LLDP могут быть только устройства, подключенные напрямую."
    ]
  },
  {
    "time": [
      1025.81,
      1033.579
    ],
    "en": [
      "By default, LLDP messages are sent once every 30 seconds, this is half the time of CDP’s default 60 seconds."
    ],
    "ru": [
      "По умолчанию сообщения LLDP отправляются каждые 30 секунд, это половина времени, установленного CDP по умолчанию в 60 секунд."
    ]
  },
  {
    "time": [
      1033.579,
      1037.8
    ],
    "en": [
      "default 60 seconds. LLDP’s default holdtime is 120 seconds."
    ],
    "ru": [
      "по умолчанию 60 секунд. По умолчанию время удержания LLDP составляет 120 секунд."
    ]
  },
  {
    "time": [
      1037.8,
      1041.89
    ],
    "en": [
      "LLDP also has an additional timer called the ‘reinitialization delay’."
    ],
    "ru": [
      "LLDP также имеет дополнительный таймер, называемый «задержкой повторной инициализации»."
    ]
  },
  {
    "time": [
      1041.89,
      1047.819
    ],
    "en": [
      "I don’t think you need to know this for the CCNA, but here’s a very brief explanation."
    ],
    "ru": [
      "Я не думаю, что вам нужно знать это для CCNA, но вот очень краткое объяснение."
    ]
  },
  {
    "time": [
      1047.819,
      1053.67
    ],
    "en": [
      "If LLDP is enabled, either globally or on a specific interface, this timer will delay"
    ],
    "ru": [
      "Если LLDP включен, глобально или на определенном интерфейсе, этот таймер задержит"
    ]
  },
  {
    "time": [
      1053.67,
      1058.88
    ],
    "en": [
      "the actual initialization of LLDP, and the timer is 2 seconds by default."
    ],
    "ru": [
      "фактическая инициализация LLDP, а таймер по умолчанию составляет 2 секунды."
    ]
  },
  {
    "time": [
      1058.88,
      1063.88
    ],
    "en": [
      "I believe the purpose of this timer is to help in cases of ‘flapping’, when LLDP"
    ],
    "ru": [
      "Я считаю, что цель этого таймера - помочь в случае \"хлопанья\", когда LLDP"
    ]
  },
  {
    "time": [
      1063.88,
      1066.99
    ],
    "en": [
      "is rapidly enabled or disabled for some reason."
    ],
    "ru": [
      "по какой-то причине быстро включается или выключается."
    ]
  },
  {
    "time": [
      1066.99,
      1072.77
    ],
    "en": [
      "So, the device won’t send LLDP messages out of its interfaces immediately when LLDP"
    ],
    "ru": [
      "Таким образом, устройство не будет отправлять сообщения LLDP из своих интерфейсов немедленно, когда LLDP"
    ]
  },
  {
    "time": [
      1072.77,
      1077.66
    ],
    "en": [
      "is enabled, it will wait for the initialization timer to expire."
    ],
    "ru": [
      "включен, он будет ждать истечения таймера инициализации."
    ]
  },
  {
    "time": [
      1077.66,
      1081.93
    ],
    "en": [
      "As I said, you probably don’t have to know that for the CCNA, but you’ll see that timer"
    ],
    "ru": [
      "Как я уже сказал, вам, вероятно, не нужно знать это для CCNA, но вы увидите этот таймер"
    ]
  },
  {
    "time": [
      1081.93,
      1089.37
    ],
    "en": [
      "in the output of the commands I’m going to show you, so I wanted to give a brief explanation."
    ],
    "ru": [
      "в выводе команд я собираюсь показать вам, поэтому я хотел дать краткое объяснение."
    ]
  },
  {
    "time": [
      1089.37,
      1094.24
    ],
    "en": [
      "Because LLDP is disabled by default, before checking out the SHOW commands let’s see"
    ],
    "ru": [
      "Поскольку протокол LLDP отключен по умолчанию, перед тем, как проверять команды SHOW, давайте посмотрим"
    ]
  },
  {
    "time": [
      1094.24,
      1098.45
    ],
    "en": [
      "the configuration commands you should know for LLDP."
    ],
    "ru": [
      "команды настройки, которые вы должны знать для LLDP."
    ]
  },
  {
    "time": [
      1098.45,
      1105.76
    ],
    "en": [
      "To review, LLDP is usually globally disabled by default, and it’s also disabled on each interface by default."
    ],
    "ru": [
      "Напомним, что протокол LLDP по умолчанию отключен глобально, а также отключен по умолчанию для каждого интерфейса."
    ]
  },
  {
    "time": [
      1105.76,
      1112.2
    ],
    "en": [
      "interface by default. So, to enable LLDP you need to enable it globally and then enable it on each interface."
    ],
    "ru": [
      "интерфейс по умолчанию. Итак, чтобы включить LLDP, вам необходимо включить его глобально, а затем включить для каждого интерфейса."
    ]
  },
  {
    "time": [
      1112.2,
      1117.68
    ],
    "en": [
      "You’ll see that the interface configuration is a little different than CDP."
    ],
    "ru": [
      "Вы увидите, что конфигурация интерфейса немного отличается от конфигурации CDP."
    ]
  },
  {
    "time": [
      1117.68,
      1121.26
    ],
    "en": [
      "To enable it globally use LLDP RUN."
    ],
    "ru": [
      "Чтобы включить его глобально, используйте LLDP RUN."
    ]
  },
  {
    "time": [
      1121.26,
      1126.65
    ],
    "en": [
      "This is the same as CDP, just replace the word CDP with LLDP."
    ],
    "ru": [
      "Это то же самое, что и CDP, просто замените слово CDP на LLDP."
    ]
  },
  {
    "time": [
      1126.65,
      1131.54
    ],
    "en": [
      "If you want to disable it again after, use NO in front of the command."
    ],
    "ru": [
      "Если вы хотите снова отключить его, используйте NO перед командой."
    ]
  },
  {
    "time": [
      1131.54,
      1134.17
    ],
    "en": [
      "Now the interface configurations."
    ],
    "ru": [
      "Теперь о настройках интерфейса."
    ]
  },
  {
    "time": [
      1134.17,
      1142.14
    ],
    "en": [
      "To enable LLDP transmissions, tx, on an interface, use LLDP TRANSMIT on the interface."
    ],
    "ru": [
      "Чтобы разрешить передачу LLDP, tx на интерфейсе, используйте LLDP TRANSMIT на интерфейсе."
    ]
  },
  {
    "time": [
      1142.14,
      1145.8
    ],
    "en": [
      "This causes the interface to start sending LLDP messages."
    ],
    "ru": [
      "Это заставляет интерфейс начать отправку сообщений LLDP."
    ]
  },
  {
    "time": [
      1145.8,
      1151.2
    ],
    "en": [
      "However, it won’t receive LLDP messages, it will simply discard them."
    ],
    "ru": [
      "Однако он не будет получать сообщения LLDP, он просто их отбрасывает."
    ]
  },
  {
    "time": [
      1151.2,
      1157.79
    ],
    "en": [
      "To enable LLDP in the receive direction, rx, use the LLDP RECEIVE command on the interface."
    ],
    "ru": [
      "Чтобы включить LLDP в направлении приема, rx, используйте команду LLDP RECEIVE на интерфейсе."
    ]
  },
  {
    "time": [
      1157.79,
      1165.74
    ],
    "en": [
      "So, CDP had only one command, CDP ENABLE which enables the interface to both send and receive CDP messages."
    ],
    "ru": [
      "Итак, у CDP была только одна команда, CDP ENABLE, которая позволяет интерфейсу как отправлять, так и получать сообщения CDP."
    ]
  },
  {
    "time": [
      1165.74,
      1170.2
    ],
    "en": [
      "CDP messages. In LLDP, you need to use two separate commands."
    ],
    "ru": [
      "Сообщения CDP. В LLDP вам нужно использовать две отдельные команды."
    ]
  },
  {
    "time": [
      1170.2,
      1172.93
    ],
    "en": [
      "But still, the configuration is quite simple."
    ],
    "ru": [
      "Но все же настройка довольно простая."
    ]
  },
  {
    "time": [
      1172.93,
      1176.57
    ],
    "en": [
      "Now let’s see how to configure each LLDP timer."
    ],
    "ru": [
      "Теперь давайте посмотрим, как настроить каждый таймер LLDP."
    ]
  },
  {
    "time": [
      1176.57,
      1183.88
    ],
    "en": [
      "The timer used to send messages is configured with LLDP TIMER, then the timer in seconds."
    ],
    "ru": [
      "Таймер, используемый для отправки сообщений, настраивается с помощью LLDP TIMER, затем таймер в секундах."
    ]
  },
  {
    "time": [
      1183.88,
      1189.67
    ],
    "en": [
      "The LLDP holdtime is configured with LLDP HOLDTIME, then the holdtime in seconds."
    ],
    "ru": [
      "Время удержания LLDP настраивается с помощью LLDP HOLDTIME, затем время удержания в секундах."
    ]
  },
  {
    "time": [
      1189.67,
      1195.25
    ],
    "en": [
      "Finally, you can configure the LLDP reinitialization timer, which I briefly mentioned earlier,"
    ],
    "ru": [
      "Наконец, вы можете настроить таймер повторной инициализации LLDP, о котором я кратко упоминал ранее,"
    ]
  },
  {
    "time": [
      1195.25,
      1199.08
    ],
    "en": [
      "with LLDP REINIT, then the timer in seconds."
    ],
    "ru": [
      "с LLDP REINIT, затем таймер в секундах."
    ]
  },
  {
    "time": [
      1199.08,
      1203.92
    ],
    "en": [
      "So, these commands are all fairly similar to the CDP commands, the biggest difference"
    ],
    "ru": [
      "Итак, все эти команды довольно похожи на команды CDP, самая большая разница"
    ]
  },
  {
    "time": [
      1203.92,
      1206.24
    ],
    "en": [
      "is the interface configuration."
    ],
    "ru": [
      "это конфигурация интерфейса."
    ]
  },
  {
    "time": [
      1206.24,
      1210.89
    ],
    "en": [
      "Make sure you enable both TRANSMIT and RECEIVE, unless for some reason you want the interface"
    ],
    "ru": [
      "Убедитесь, что вы включили как ПЕРЕДАЧА, так и ПОЛУЧИТЬ, если по какой-либо причине вы не хотите, чтобы интерфейс"
    ]
  },
  {
    "time": [
      1210.89,
      1216.51
    ],
    "en": [
      "to only be able to send or receive, not send and receive, LLDP messages."
    ],
    "ru": [
      "чтобы иметь возможность только отправлять или получать, но не отправлять и получать сообщения LLDP."
    ]
  },
  {
    "time": [
      1216.51,
      1223.61
    ],
    "en": [
      "So, I’ve enabled LLDP on all of these devices with the command LLDP RUN from global config"
    ],
    "ru": [
      "Итак, я включил LLDP на всех этих устройствах с помощью команды LLDP RUN из глобальной конфигурации."
    ]
  },
  {
    "time": [
      1223.61,
      1228.8
    ],
    "en": [
      "mode, and LLDP TRANSMIT and RECEIVE on all interfaces."
    ],
    "ru": [
      "режим, а также LLDP TRANSMIT и RECEIVE на всех интерфейсах."
    ]
  },
  {
    "time": [
      1228.8,
      1232.74
    ],
    "en": [
      "They are now running both CDP and LLDP."
    ],
    "ru": [
      "Сейчас они используют как CDP, так и LLDP."
    ]
  },
  {
    "time": [
      1232.74,
      1238.04
    ],
    "en": [
      "Usually LLDP would be used in a multi-vendor network, not just Cisco, but this setup is"
    ],
    "ru": [
      "Обычно LLDP используется в сети с несколькими поставщиками, а не только в Cisco, но эта настройка"
    ]
  },
  {
    "time": [
      1238.04,
      1242.87
    ],
    "en": [
      "good enough for our purposes, to demonstrate how LLDP works on Cisco devices."
    ],
    "ru": [
      "Достаточно хорошо для наших целей, чтобы продемонстрировать, как LLDP работает на устройствах Cisco."
    ]
  },
  {
    "time": [
      1242.87,
      1250.64
    ],
    "en": [
      "So, let’s check out some LLDP show commands, the LLDP versions of the ones I used for CDP."
    ],
    "ru": [
      "Итак, давайте проверим некоторые команды показа LLDP, версии LLDP тех, которые я использовал для CDP."
    ]
  },
  {
    "time": [
      1250.64,
      1257.36
    ],
    "en": [
      "First, SHOW LLDP gives the same information as SHOW CDP does for CDP."
    ],
    "ru": [
      "Во-первых, SHOW LLDP предоставляет ту же информацию, что и SHOW CDP для CDP."
    ]
  },
  {
    "time": [
      1257.36,
      1262.53
    ],
    "en": [
      "It shows that LLDP is enabled, and displays each of the LLDP timers, which are currently"
    ],
    "ru": [
      "Он показывает, что LLDP включен, и отображает каждый из таймеров LLDP, которые в настоящее время"
    ]
  },
  {
    "time": [
      1262.53,
      1267.1
    ],
    "en": [
      "at the default settings of 30, 120, and 2 seconds."
    ],
    "ru": [
      "при настройках по умолчанию 30, 120 и 2 секунды."
    ]
  },
  {
    "time": [
      1267.1,
      1273.43
    ],
    "en": [
      "Then SHOW LLDP TRAFFIC, similar to SHOW CDP TRAFFIC, shows statistics about how many LLDP"
    ],
    "ru": [
      "Затем SHOW LLDP TRAFFIC, аналогично SHOW CDP TRAFFIC, показывает статистику о том, сколько LLDP"
    ]
  },
  {
    "time": [
      1273.43,
      1276.15
    ],
    "en": [
      "frames were sent and received."
    ],
    "ru": [
      "кадры были отправлены и получены."
    ]
  },
  {
    "time": [
      1276.15,
      1282.01
    ],
    "en": [
      "In this case I used the command quickly after enabling LLDP, only 4 frames have been sent"
    ],
    "ru": [
      "В этом случае я использовал команду быстро после включения LLDP, было отправлено только 4 кадра"
    ]
  },
  {
    "time": [
      1282.01,
      1285.93
    ],
    "en": [
      "and only 3 have been received by R1."
    ],
    "ru": [
      "и только 3 были получены R1."
    ]
  },
  {
    "time": [
      1285.93,
      1288.87
    ],
    "en": [
      "Then I used SHOW LLDP INTERFACE."
    ],
    "ru": [
      "Затем я использовал SHOW LLDP INTERFACE."
    ]
  },
  {
    "time": [
      1288.87,
      1293.511
    ],
    "en": [
      "This shows whether TRANSMIT and RECEIVE are enabled or disabled on each interface, as"
    ],
    "ru": [
      "Это показывает, включены или отключены ПЕРЕДАЧА и ПРИЕМ на каждом интерфейсе, так как"
    ]
  },
  {
    "time": [
      1293.511,
      1297.039
    ],
    "en": [
      "well as the current Tx and Rx state."
    ],
    "ru": [
      "а также текущее состояние Tx и Rx."
    ]
  },
  {
    "time": [
      1297.039,
      1301.46
    ],
    "en": [
      "For example, for G0/0 both Tx and Rx are enabled."
    ],
    "ru": [
      "Например, для G0 / 0 включены и Tx, и Rx."
    ]
  },
  {
    "time": [
      1301.46,
      1308.32
    ],
    "en": [
      "The Tx state is IDLE, it’s waiting before it sends the next LLDP frame to SW1."
    ],
    "ru": [
      "Состояние Tx - IDLE, он ожидает перед отправкой следующего кадра LLDP в SW1."
    ]
  },
  {
    "time": [
      1308.32,
      1310.82
    ],
    "en": [
      "And the Rx state is WAIT FOR FRAME."
    ],
    "ru": [
      "И состояние Rx - WAIT FOR FRAME."
    ]
  },
  {
    "time": [
      1310.82,
      1314.83
    ],
    "en": [
      "It’s waiting to receive the next LLDP frame from SW1."
    ],
    "ru": [
      "Ожидается получение следующего кадра LLDP от SW1."
    ]
  },
  {
    "time": [
      1314.83,
      1319.45
    ],
    "en": [
      "Okay, so those commands are very similar to their CDP equivalents, although there are"
    ],
    "ru": [
      "Итак, эти команды очень похожи на их эквиваленты CDP, хотя есть"
    ]
  },
  {
    "time": [
      1319.45,
      1321.11
    ],
    "en": [
      "some differences in the output."
    ],
    "ru": [
      "некоторые отличия в выводе."
    ]
  },
  {
    "time": [
      1321.11,
      1325.03
    ],
    "en": [
      "Now let’s check out R1’s LLDP neighbor table."
    ],
    "ru": [
      "Теперь давайте посмотрим на таблицу соседей LLDP маршрутизатора R1."
    ]
  },
  {
    "time": [
      1325.03,
      1332.32
    ],
    "en": [
      "Here’s R1’s LLDP neighbor table, the command is SHOW LLDP NEIGHBORS."
    ],
    "ru": [
      "Вот таблица соседей LLDP маршрутизатора R1, команда - SHOW LLDP NEIGHBORS."
    ]
  },
  {
    "time": [
      1332.32,
      1337.09
    ],
    "en": [
      "First up, the device ID, the host name, of each neighbor is displayed."
    ],
    "ru": [
      "Сначала отображается идентификатор устройства, имя хоста каждого соседа."
    ]
  },
  {
    "time": [
      1337.09,
      1339.02
    ],
    "en": [
      "Then the local interface."
    ],
    "ru": [
      "Потом локальный интерфейс."
    ]
  },
  {
    "time": [
      1339.02,
      1345.49
    ],
    "en": [
      "Just like in SHOW CDP NEIGHBORS, this is the interface of the local device, R1 in this case."
    ],
    "ru": [
      "Как и в SHOW CDP NEIGHBORS, это интерфейс локального устройства, в данном случае R1."
    ]
  },
  {
    "time": [
      1345.49,
      1347.1
    ],
    "en": [
      "case. Then the hold time."
    ],
    "ru": [
      "кейс. Затем время выдержки."
    ]
  },
  {
    "time": [
      1347.1,
      1350.3
    ],
    "en": [
      "This is a little different than in SHOW CDP NEIGHBORS."
    ],
    "ru": [
      "Это немного отличается от SHOW CDP NEIGHBORS."
    ]
  },
  {
    "time": [
      1350.3,
      1355.22
    ],
    "en": [
      "In SHOW CDP NEIGHBORS, you could watch the timer count down from 180, and then reset"
    ],
    "ru": [
      "В SHOW CDP NEIGHBORS вы можете смотреть, как таймер отсчитывает от 180 до сброса."
    ]
  },
  {
    "time": [
      1355.22,
      1358.75
    ],
    "en": [
      "to 180 when a CDP message is received."
    ],
    "ru": [
      "на 180 при получении сообщения CDP."
    ]
  },
  {
    "time": [
      1358.75,
      1365.43
    ],
    "en": [
      "However SHOW LLDP NEIGHBORS simply displays the holdtime that is configured on this device, 120 seconds."
    ],
    "ru": [
      "Однако SHOW LLDP NEIGHBORS просто отображает время удержания, настроенное на этом устройстве, 120 секунд."
    ]
  },
  {
    "time": [
      1365.43,
      1370.8
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
      1365.43,
      1370.8
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
      1370.8,
      1372.93
    ],
    "en": [
      "Then the capability column."
    ],
    "ru": [
      "Затем столбец возможностей."
    ]
  },
  {
    "time": [
      1372.93,
      1374.77
    ],
    "en": [
      "The output here is a little odd."
    ],
    "ru": [
      "Результат здесь немного странный."
    ]
  },
  {
    "time": [
      1374.77,
      1382.88
    ],
    "en": [
      "SW1 shows nothing, and R2 shows R. R means router, which you would expect from R2, because it’s a router."
    ],
    "ru": [
      "SW1 ничего не показывает, а R2 показывает R. R означает маршрутизатор, чего и следовало ожидать от R2, потому что это маршрутизатор."
    ]
  },
  {
    "time": [
      1382.88,
      1386.92
    ],
    "en": [
      "it’s a router. However, why doesn’t the switch capability display for SW1?"
    ],
    "ru": [
      "это роутер. Однако почему не отображается возможность переключения для SW1?"
    ]
  },
  {
    "time": [
      1386.92,
      1390.46
    ],
    "en": [
      "Actually, there is no ‘SWITCH’ capability code."
    ],
    "ru": [
      "На самом деле кода возможности «ПЕРЕКЛЮЧИТЬ» не существует."
    ]
  },
  {
    "time": [
      1390.46,
      1394.33
    ],
    "en": [
      "Instead, LLDP uses B for Bridge."
    ],
    "ru": [
      "Вместо этого LLDP использует B для моста."
    ]
  },
  {
    "time": [
      1394.33,
      1398.21
    ],
    "en": [
      "Remember I told you, in the spanning tree lessons, that sometimes the word ‘bridge’"
    ],
    "ru": [
      "Помните, я говорил вам на уроках по остовному дереву, что иногда слово «мост»"
    ]
  },
  {
    "time": [
      1398.21,
      1400.4
    ],
    "en": [
      "is used instead of switch?"
    ],
    "ru": [
      "используется вместо переключателя?"
    ]
  },
  {
    "time": [
      1400.4,
      1402.47
    ],
    "en": [
      "Well here’s another case of that."
    ],
    "ru": [
      "Что ж, вот еще один такой случай."
    ]
  },
  {
    "time": [
      1402.47,
      1406.13
    ],
    "en": [
      "However, B isn’t displaying for SW1."
    ],
    "ru": [
      "Однако B не отображается для SW1."
    ]
  },
  {
    "time": [
      1406.13,
      1410.73
    ],
    "en": [
      "I think this is just because I’m running these virtual devices in GNS3, it isn’t"
    ],
    "ru": [
      "Я думаю, это просто потому, что я запускаю эти виртуальные устройства в GNS3, а не"
    ]
  },
  {
    "time": [
      1410.73,
      1416.34
    ],
    "en": [
      "detecting that SW1 is an active switch, but in the next when we look at SHOW LLDP NEIGHBORS"
    ],
    "ru": [
      "обнаружив, что SW1 является активным коммутатором, но в следующем, когда мы посмотрим на SHOW LLDP NEIGHBORS"
    ]
  },
  {
    "time": [
      1416.34,
      1420.26
    ],
    "en": [
      "DETAIL you will see this bridge code for SW1."
    ],
    "ru": [
      "ПОДРОБНЕЕ вы увидите этот код моста для SW1."
    ]
  },
  {
    "time": [
      1420.26,
      1425.96
    ],
    "en": [
      "Okay, and just like in SHOW CDP NEIGHBORS, the last column is the port ID, the interface"
    ],
    "ru": [
      "Хорошо, и, как и в SHOW CDP NEIGHBORS, последний столбец - это идентификатор порта, интерфейс"
    ]
  },
  {
    "time": [
      1425.96,
      1428.02
    ],
    "en": [
      "ID of the neighboring device."
    ],
    "ru": [
      "ID соседнего устройства."
    ]
  },
  {
    "time": [
      1428.02,
      1434.58
    ],
    "en": [
      "R1 is connected to SW1’s G0/0 interface and R2’s G0/0 interface."
    ],
    "ru": [
      "R1 подключен к интерфейсу G0 / 0 SW1 и интерфейсу G0 / 0 R2."
    ]
  },
  {
    "time": [
      1434.58,
      1440.12
    ],
    "en": [
      "So, this command is very similar to SHOW CDP NEIGHBORS, but there are a few differences."
    ],
    "ru": [
      "Итак, эта команда очень похожа на SHOW CDP NEIGHBORS, но есть несколько отличий."
    ]
  },
  {
    "time": [
      1440.12,
      1445.46
    ],
    "en": [
      "Okay, here’s SHOW LLDP NEIGHBORS DETAIL on R1."
    ],
    "ru": [
      "Хорошо, вот ПОКАЗАТЬ ДЕТАЛИ СОСЕДЕЙ LLDP на R1."
    ]
  },
  {
    "time": [
      1445.46,
      1451.22
    ],
    "en": [
      "The output is too long to show on one screen, so R2’s entry is cut off a little at the bottom."
    ],
    "ru": [
      "Вывод слишком длинный для отображения на одном экране, поэтому запись R2 немного обрезана внизу."
    ]
  },
  {
    "time": [
      1451.22,
      1453.72
    ],
    "en": [
      "bottom. Let’s check out SW1’s entry."
    ],
    "ru": [
      "Нижний. Давайте посмотрим на запись SW1."
    ]
  },
  {
    "time": [
      1453.72,
      1458.67
    ],
    "en": [
      "It gives us additional information like the operating system version running on SW1."
    ],
    "ru": [
      "Он дает нам дополнительную информацию, например версию операционной системы, работающей на SW1."
    ]
  },
  {
    "time": [
      1458.67,
      1461.51
    ],
    "en": [
      "We can also see the ‘time remaining’."
    ],
    "ru": [
      "Мы также можем видеть «оставшееся время»."
    ]
  },
  {
    "time": [
      1461.51,
      1465.4
    ],
    "en": [
      "This is the holdtime, if you want to actually see it counting down for each neighbor you"
    ],
    "ru": [
      "Это время удержания, если вы действительно хотите увидеть, как идет обратный отсчет для каждого соседа, которого вы"
    ]
  },
  {
    "time": [
      1465.4,
      1469.09
    ],
    "en": [
      "have to use the DETAIL version of the command."
    ],
    "ru": [
      "необходимо использовать ПОДРОБНУЮ версию команды."
    ]
  },
  {
    "time": [
      1469.09,
      1471.34
    ],
    "en": [
      "And here is the main thing I want to show you."
    ],
    "ru": [
      "И вот главное, что я хочу вам показать."
    ]
  },
  {
    "time": [
      1471.34,
      1479.98
    ],
    "en": [
      "CDP had one field for the device’s capabilities, but LLDP has two when you use SHOW LLDP NEIGHBORS DETAIL."
    ],
    "ru": [
      "CDP имеет одно поле для возможностей устройства, но LLDP имеет два, когда вы используете SHOW LLDP NEIGHBORS DETAIL."
    ]
  },
  {
    "time": [
      1479.98,
      1485.1
    ],
    "en": [
      "DETAIL. ‘System capabilities’ and ‘enabled capabilities’."
    ],
    "ru": [
      "ДЕТАЛИ. «Возможности системы» и «задействованные возможности»."
    ]
  },
  {
    "time": [
      1485.1,
      1491.67
    ],
    "en": [
      "If you look at system capabilities, you can see B and R. B is for bridge, meaning switch."
    ],
    "ru": [
      "Если вы посмотрите на возможности системы, вы увидите, что B и R. B означает мост, то есть переключатель."
    ]
  },
  {
    "time": [
      1491.67,
      1493.4
    ],
    "en": [
      "And R is for Router."
    ],
    "ru": [
      "А R - это маршрутизатор."
    ]
  },
  {
    "time": [
      1493.4,
      1498.32
    ],
    "en": [
      "So, this is what you would expect, because SW1 is a multilayer switch."
    ],
    "ru": [
      "Итак, это то, что вы ожидаете, потому что SW1 - многоуровневый коммутатор."
    ]
  },
  {
    "time": [
      1498.32,
      1501.48
    ],
    "en": [
      "It has the functions of both a router and a switch."
    ],
    "ru": [
      "Он выполняет функции как маршрутизатора, так и коммутатора."
    ]
  },
  {
    "time": [
      1501.48,
      1508.22
    ],
    "en": [
      "However, in this case the ‘enabled capabilities’ field simply displays ‘not advertised’,"
    ],
    "ru": [
      "Однако в этом случае в поле «включенные возможности» просто отображается «не рекламируется»,"
    ]
  },
  {
    "time": [
      1508.22,
      1511.93
    ],
    "en": [
      "so none of SW1’s capabilities are enabled."
    ],
    "ru": [
      "поэтому ни одна из возможностей SW1 не задействована."
    ]
  },
  {
    "time": [
      1511.93,
      1517.809
    ],
    "en": [
      "If we use the IP ROUTING command on SW1, SW1’s router functionality will be enabled and the"
    ],
    "ru": [
      "Если мы используем команду IP ROUTING на SW1, функция маршрутизатора SW1 будет включена и"
    ]
  },
  {
    "time": [
      1517.809,
      1522.78
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
      1517.809,
      1522.78
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
      1522.78,
      1527.84
    ],
    "en": [
      "However, I think the reason ‘B’ isn’t displayed next to ‘enabled capabilities’"
    ],
    "ru": [
      "Однако я думаю, что причина \"B\" не отображается рядом с \"включенными возможностями\"."
    ]
  },
  {
    "time": [
      1527.84,
      1535.27
    ],
    "en": [
      "is simply because SW1 is a virtual device running in GNS3, it’s not recognized as an active switch."
    ],
    "ru": [
      "просто потому, что SW1 - это виртуальное устройство, работающее в GNS3, оно не распознается как активный коммутатор."
    ]
  },
  {
    "time": [
      1535.27,
      1541.26
    ],
    "en": [
      "an active switch. You don’t have to worry about these details, but I just wanted to explain why it’s displaying like this."
    ],
    "ru": [
      "активный переключатель. Вам не нужно беспокоиться об этих деталях, но я просто хотел объяснить, почему они отображаются именно так."
    ]
  },
  {
    "time": [
      1541.26,
      1547.25
    ],
    "en": [
      "like this. Note that this command doesn’t display VTP information like SHOW CDP NEIGHBORS DETAIL did."
    ],
    "ru": [
      "нравится. Обратите внимание, что эта команда не отображает информацию о VTP, как SHOW CDP NEIGHBORS DETAIL."
    ]
  },
  {
    "time": [
      1547.25,
      1555.82
    ],
    "en": [
      "did. VTP is a Cisco-proprietary protocol, so only Cisco’s proprietary CDP can display info about VTP."
    ],
    "ru": [
      "делал. VTP - это проприетарный протокол Cisco, поэтому только собственный протокол Cisco CDP может отображать информацию о VTP."
    ]
  },
  {
    "time": [
      1555.82,
      1559.059
    ],
    "en": [
      "about VTP. The industry-standard LLDP can’t."
    ],
    "ru": [
      "про ВТП. Стандартный протокол LLDP не может."
    ]
  },
  {
    "time": [
      1559.059,
      1563.83
    ],
    "en": [
      "Okay, just like for CDP there is a command you can use to view the exact same output"
    ],
    "ru": [
      "Хорошо, как и для CDP, есть команда, которую вы можете использовать для просмотра того же вывода"
    ]
  },
  {
    "time": [
      1563.83,
      1570.9
    ],
    "en": [
      "as SHOW LLDP NEIGHBORS DETAIL, but for a single neighbor instead of all neighbors."
    ],
    "ru": [
      "как SHOW LLDP NEIGHBORS DETAIL, но для одного соседа, а не для всех соседей."
    ]
  },
  {
    "time": [
      1570.9,
      1576.55
    ],
    "en": [
      "That command is SHOW LLDP ENTRY, followed by the neighbor’s host name."
    ],
    "ru": [
      "Это команда SHOW LLDP ENTRY, за которой следует имя хоста соседа."
    ]
  },
  {
    "time": [
      1576.55,
      1582.08
    ],
    "en": [
      "By the way, before using this command I enabled IP ROUTING on SW1, and now you can see ‘R’,"
    ],
    "ru": [
      "Кстати, перед тем, как использовать эту команду, я включил IP-МАРШРУТИЗАТОР на SW1, и теперь вы можете увидеть «R»,"
    ]
  },
  {
    "time": [
      1582.08,
      1587.39
    ],
    "en": [
      "for Router, is displayed next to ‘enabled capabilities’ for SW1."
    ],
    "ru": [
      "для маршрутизатора отображается рядом с «включенными возможностями» для SW1."
    ]
  },
  {
    "time": [
      1587.39,
      1592.23
    ],
    "en": [
      "Here’s the same SHOW command summary as before, but this time for LLDP."
    ],
    "ru": [
      "Вот та же сводка команд SHOW, что и раньше, но на этот раз для LLDP."
    ]
  },
  {
    "time": [
      1592.23,
      1596.96
    ],
    "en": [
      "The commands are the same, just replace the word CDP with LLDP."
    ],
    "ru": [
      "Команды такие же, просто замените слово CDP на LLDP."
    ]
  },
  {
    "time": [
      1596.96,
      1603.71
    ],
    "en": [
      "The output for these commands is similar to the output for CDP, but as you saw already"
    ],
    "ru": [
      "Вывод этих команд аналогичен выводам для CDP, но, как вы уже видели"
    ]
  },
  {
    "time": [
      1603.71,
      1606.14
    ],
    "en": [
      "there are a few differences."
    ],
    "ru": [
      "есть несколько отличий."
    ]
  },
  {
    "time": [
      1606.14,
      1610.14
    ],
    "en": [
      "Pause the video if you want to review these commands, but let’s move on."
    ],
    "ru": [
      "Приостановите видео, если хотите просмотреть эти команды, но давайте продолжим."
    ]
  },
  {
    "time": [
      1610.14,
      1616.88
    ],
    "en": [
      "Let’s briefly look at a couple Wireshark captures, one for CDP and one for LLDP."
    ],
    "ru": [
      "Давайте кратко рассмотрим пару захватов Wireshark, один для CDP, а другой для LLDP."
    ]
  },
  {
    "time": [
      1616.88,
      1622.68
    ],
    "en": [
      "First, this is a CDP message sent from R1 to SW1."
    ],
    "ru": [
      "Во-первых, это сообщение CDP, отправленное от R1 к SW1."
    ]
  },
  {
    "time": [
      1622.68,
      1630.12
    ],
    "en": [
      "Notice the CDP destination MAC address, 0100.0CCC.CCCC."
    ],
    "ru": [
      "Обратите внимание на MAC-адрес назначения CDP, 0100.0CCC.CCCC."
    ]
  },
  {
    "time": [
      1630.12,
      1640.43
    ],
    "en": [
      "But notice that Wireshark describes this destination MAC as CDP/VTP/DTP/PagP/UDLD."
    ],
    "ru": [
      "Но обратите внимание, что Wireshark описывает этот MAC-адрес назначения как CDP / VTP / DTP / PagP / UDLD."
    ]
  },
  {
    "time": [
      1640.43,
      1647.07
    ],
    "en": [
      "That’s because this same multicast MAC address is actually used for multiple protocols, not just CDP."
    ],
    "ru": [
      "Это потому, что один и тот же многоадресный MAC-адрес фактически используется для нескольких протоколов, а не только для CDP."
    ]
  },
  {
    "time": [
      1647.07,
      1651.44
    ],
    "en": [
      "just CDP. Now, here’s the actual CDP information."
    ],
    "ru": [
      "просто CDP. А теперь вот актуальная информация CDP."
    ]
  },
  {
    "time": [
      1651.44,
      1654.89
    ],
    "en": [
      "You can see here that CDP version 2 is being used."
    ],
    "ru": [
      "Вы можете видеть здесь, что используется CDP версии 2."
    ]
  },
  {
    "time": [
      1654.89,
      1660.55
    ],
    "en": [
      "The TTL, time to live, is actually the CDP holdtime."
    ],
    "ru": [
      "TTL, время жить, на самом деле является временем удержания CDP."
    ]
  },
  {
    "time": [
      1660.55,
      1666.25
    ],
    "en": [
      "Here are some other fields such as the device ID, this is being sent from R1, the version,"
    ],
    "ru": [
      "Вот некоторые другие поля, такие как идентификатор устройства, он отправляется с R1, версия,"
    ]
  },
  {
    "time": [
      1666.25,
      1668.9
    ],
    "en": [
      "platform, addresses, and port ID."
    ],
    "ru": [
      "платформа, адреса и идентификатор порта."
    ]
  },
  {
    "time": [
      1668.9,
      1674.07
    ],
    "en": [
      "I could expand each of these fields in Wireshark to view more details, but then the capture"
    ],
    "ru": [
      "Я мог бы развернуть каждое из этих полей в Wireshark, чтобы просмотреть более подробную информацию, но затем захват"
    ]
  },
  {
    "time": [
      1674.07,
      1676.26
    ],
    "en": [
      "wouldn’t fit on one screen,."
    ],
    "ru": [
      "не поместится на одном экране."
    ]
  },
  {
    "time": [
      1676.26,
      1681.35
    ],
    "en": [
      "So I just expanded the capabilities field, and you can see there is a ‘1’ for ‘Router’"
    ],
    "ru": [
      "Итак, я просто расширил поле возможностей, и вы можете видеть, что есть «1» для «Маршрутизатор»."
    ]
  },
  {
    "time": [
      1681.35,
      1686.01
    ],
    "en": [
      "and ‘Source Route Bridge’, those are the capabilities of R1."
    ],
    "ru": [
      "и «Source Route Bridge» - это возможности R1."
    ]
  },
  {
    "time": [
      1686.01,
      1691.47
    ],
    "en": [
      "Finally, notice that there is no IP packet inside of this Ethernet frame."
    ],
    "ru": [
      "Наконец, обратите внимание, что внутри этого кадра Ethernet нет IP-пакета."
    ]
  },
  {
    "time": [
      1691.47,
      1697.76
    ],
    "en": [
      "These Layer 2 discovery protocols don’t use IP addresses, only MAC addresses."
    ],
    "ru": [
      "Эти протоколы обнаружения уровня 2 не используют IP-адреса, только MAC-адреса."
    ]
  },
  {
    "time": [
      1697.76,
      1703.76
    ],
    "en": [
      "And here’s an LLDP frame capture, this time a message that SW1 sent to R1."
    ],
    "ru": [
      "А вот захват кадра LLDP, на этот раз сообщение, которое SW1 отправил R1."
    ]
  },
  {
    "time": [
      1703.76,
      1711.17
    ],
    "en": [
      "First up, here’s the destination MAC address I showed you earlier, 0180.C200.000E."
    ],
    "ru": [
      "Во-первых, вот MAC-адрес назначения, который я показал вам ранее, 0180.C200.000E."
    ]
  },
  {
    "time": [
      1711.17,
      1714.88
    ],
    "en": [
      "And here’s the actual LLDP information."
    ],
    "ru": [
      "А вот и актуальная информация о LLDP."
    ]
  },
  {
    "time": [
      1714.88,
      1721.39
    ],
    "en": [
      "The time to live, TTL, is the LLDP holdtime of 120 seconds, and you can see the system"
    ],
    "ru": [
      "Время жизни, TTL, - это время удержания LLDP в 120 секунд, и вы можете увидеть систему"
    ]
  },
  {
    "time": [
      1721.39,
      1725.87
    ],
    "en": [
      "name, the host name, of the device which sent this message, SW1."
    ],
    "ru": [
      "name, имя хоста устройства, отправившего это сообщение, SW1."
    ]
  },
  {
    "time": [
      1725.87,
      1729.51
    ],
    "en": [
      "Here’s the LLDP capabilities field."
    ],
    "ru": [
      "Вот поле возможностей LLDP."
    ]
  },
  {
    "time": [
      1729.51,
      1736.4
    ],
    "en": [
      "Just like we saw before, SW1’s capabilities are Bridge and Router, but its only enabled capability is router."
    ],
    "ru": [
      "Как мы видели ранее, SW1 поддерживает мост и маршрутизатор, но его единственная доступная функция - маршрутизатор."
    ]
  },
  {
    "time": [
      1736.4,
      1741.1
    ],
    "en": [
      "capability is router. Okay, you don’t have to look into these captures in too much detail, I just wanted"
    ],
    "ru": [
      "возможность - маршрутизатор. Хорошо, не стоит вдаваться в подробности этих снимков, я просто хотел"
    ]
  },
  {
    "time": [
      1741.1,
      1747.67
    ],
    "en": [
      "to show you some real examples of CDP and LLDP messages."
    ],
    "ru": [
      "чтобы показать вам несколько реальных примеров сообщений CDP и LLDP."
    ]
  },
  {
    "time": [
      1747.67,
      1752.31
    ],
    "en": [
      "Before moving on to the quiz let’s review what we studied in today’s video."
    ],
    "ru": [
      "Прежде чем перейти к викторине, давайте рассмотрим то, что мы изучали в сегодняшнем видео."
    ]
  },
  {
    "time": [
      1752.31,
      1756.72
    ],
    "en": [
      "First I gave a brief intro to Layer 2 discovery protocols and their purpose."
    ],
    "ru": [
      "Сначала я сделал краткое введение в протоколы обнаружения уровня 2 и их назначение."
    ]
  },
  {
    "time": [
      1756.72,
      1761.0
    ],
    "en": [
      "Basically, they enable directly connected neighbors to share various information with"
    ],
    "ru": [
      "По сути, они позволяют напрямую подключенным соседям обмениваться различной информацией с"
    ]
  },
  {
    "time": [
      1761.0,
      1767.09
    ],
    "en": [
      "each other such as host name, device type, IP address, software version, etc."
    ],
    "ru": [
      "друг друга, такие как имя хоста, тип устройства, IP-адрес, версия программного обеспечения и т. д."
    ]
  },
  {
    "time": [
      1767.09,
      1771.12
    ],
    "en": [
      "They can be very useful and convenient, but remember that they can also be considered"
    ],
    "ru": [
      "Они могут быть очень полезными и удобными, но помните, что их тоже можно считать"
    ]
  },
  {
    "time": [
      1771.12,
      1775.3
    ],
    "en": [
      "a security risk because of the information they share with connected devices."
    ],
    "ru": [
      "угроза безопасности из-за информации, которую они передают подключенным устройствам."
    ]
  },
  {
    "time": [
      1775.3,
      1780.91
    ],
    "en": [
      "So, many network admins choose to disable them in their networks."
    ],
    "ru": [
      "Поэтому многие сетевые администраторы предпочитают отключать их в своих сетях."
    ]
  },
  {
    "time": [
      1780.91,
      1785.97
    ],
    "en": [
      "Then I introduced CDP, Cisco’s Layer 2 discovery protocol."
    ],
    "ru": [
      "Затем я представил CDP, протокол обнаружения Cisco уровня 2."
    ]
  },
  {
    "time": [
      1785.97,
      1791.86
    ],
    "en": [
      "After that I introduced LLDP, which was developed after CDP as an industry standard alternative."
    ],
    "ru": [
      "После этого я представил LLDP, который был разработан после CDP в качестве альтернативы отраслевому стандарту."
    ]
  },
  {
    "time": [
      1791.86,
      1798.7
    ],
    "en": [
      "LLDP is supported by many vendors, so if your network uses a mix of Cisco, Juniper, Palo"
    ],
    "ru": [
      "LLDP поддерживается многими поставщиками, поэтому, если в вашей сети используется сочетание Cisco, Juniper, Palo"
    ]
  },
  {
    "time": [
      1798.7,
      1804.83
    ],
    "en": [
      "Alto, Fortinet, whatever, you’ll have to use LLDP, not CDP."
    ],
    "ru": [
      "Alto, Fortinet, что угодно, вам придется использовать LLDP, а не CDP."
    ]
  },
  {
    "time": [
      1804.83,
      1809.16
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
      1809.16,
      1815.3
    ],
    "en": [
      "ExSim for CCNA, the best practice exams for the CCNA, and the practice exams I used to"
    ],
    "ru": [
      "ExSim для CCNA, лучшие практические экзамены для CCNA и практические экзамены, которые я использовал"
    ]
  },
  {
    "time": [
      1815.3,
      1817.53
    ],
    "en": [
      "prepare for my CCNA exam."
    ],
    "ru": [
      "подготовиться к экзамену CCNA."
    ]
  },
  {
    "time": [
      1817.53,
      1822.95
    ],
    "en": [
      "Okay, let’s move on to the quiz. Here’s question 1."
    ],
    "ru": [
      "Хорошо, перейдем к викторине. Вот вопрос 1."
    ]
  },
  {
    "time": [
      1822.95,
      1827.82
    ],
    "en": [
      "Here’s question 1. Which of the following commands show the configured CDP timers? Select two."
    ],
    "ru": [
      "Вот вопрос 1. Какая из следующих команд показывает настроенные таймеры CDP? Выберите два."
    ]
  },
  {
    "time": [
      1827.82,
      1829.79
    ],
    "en": [
      "Select two. A, SHOW CDP."
    ],
    "ru": [
      "Выберите два. A, ПОКАЗАТЬ CDP."
    ]
  },
  {
    "time": [
      1829.79,
      1832.44
    ],
    "en": [
      "B, SHOW CDP TRAFFIC."
    ],
    "ru": [
      "B, ПОКАЗАТЬ ДВИЖЕНИЕ CDP."
    ]
  },
  {
    "time": [
      1832.44,
      1834.58
    ],
    "en": [
      "C, SHOW CDP INTERFACE."
    ],
    "ru": [
      "C, ПОКАЗАТЬ ИНТЕРФЕЙС CDP."
    ]
  },
  {
    "time": [
      1834.58,
      1837.83
    ],
    "en": [
      "Or D, SHOW CDP NEIGHBORS."
    ],
    "ru": [
      "Или D, ПОКАЖИТЕ СОСЕДЕЙ CDP."
    ]
  },
  {
    "time": [
      1837.83,
      1843.75
    ],
    "en": [
      "Pause the video to think about your answers, select two."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своими ответами, выберите два."
    ]
  },
  {
    "time": [
      1843.75,
      1850.24
    ],
    "en": [
      "The answers are A and C. Both of these commands show the configured CDP message time and holdtime."
    ],
    "ru": [
      "Ответы: A и C. Обе эти команды показывают настроенное время сообщения CDP и время удержания."
    ]
  },
  {
    "time": [
      1850.24,
      1855.88
    ],
    "en": [
      "D, SHOW CDP NEIGHBORS does show the current holdtime counting down as the device waits"
    ],
    "ru": [
      "D, SHOW CDP NEIGHBORS показывает текущее время удержания в обратном порядке, пока устройство ожидает"
    ]
  },
  {
    "time": [
      1855.88,
      1861.68
    ],
    "en": [
      "for a CDP message from its neighbor, but it doesn’t show the actual configured holdtime."
    ],
    "ru": [
      "для сообщения CDP от своего соседа, но оно не показывает фактическое настроенное время удержания."
    ]
  },
  {
    "time": [
      1861.68,
      1866.29
    ],
    "en": [
      "It also doesn’t display the CDP message timer, so it’s not one of the best answers."
    ],
    "ru": [
      "Также он не отображает таймер сообщения CDP, так что это не лучший ответ."
    ]
  },
  {
    "time": [
      1866.29,
      1870.72
    ],
    "en": [
      "Okay, let’s go to question 2."
    ],
    "ru": [
      "Хорошо, перейдем к вопросу 2."
    ]
  },
  {
    "time": [
      1870.72,
      1875.57
    ],
    "en": [
      "Which of the following commands represent the default CDP state? Select two."
    ],
    "ru": [
      "Какая из следующих команд представляет состояние CDP по умолчанию? Выберите два."
    ]
  },
  {
    "time": [
      1875.57,
      1877.72
    ],
    "en": [
      "Select two. A, NO CDP RUN."
    ],
    "ru": [
      "Выберите два. A, CDP НЕ ЗАПУСКАЕТСЯ."
    ]
  },
  {
    "time": [
      1877.72,
      1880.29
    ],
    "en": [
      "B, CDP HOLDTIME 120."
    ],
    "ru": [
      "B, ВРЕМЯ УДЕРЖАНИЯ CDP 120."
    ]
  },
  {
    "time": [
      1880.29,
      1884.09
    ],
    "en": [
      "C, CDP ENABLE, from interface config mode."
    ],
    "ru": [
      "C, CDP ENABLE, из режима конфигурации интерфейса."
    ]
  },
  {
    "time": [
      1884.09,
      1887.04
    ],
    "en": [
      "Or D, CDP TIMER 60."
    ],
    "ru": [
      "Или D, ТАЙМЕР CDP 60."
    ]
  },
  {
    "time": [
      1887.04,
      1892.87
    ],
    "en": [
      "Pause the video to think about your answers, select two."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своими ответами, выберите два."
    ]
  },
  {
    "time": [
      1892.87,
      1900.43
    ],
    "en": [
      "The answers are C and D. CDP ENABLE enables CDP on an interface, which is the default state."
    ],
    "ru": [
      "Ответы: C и D. CDP ENABLE включает CDP на интерфейсе, что является состоянием по умолчанию."
    ]
  },
  {
    "time": [
      1900.43,
      1904.76
    ],
    "en": [
      "state. D sets the CDP message timer to 60 seconds, which is the default."
    ],
    "ru": [
      "штат. D устанавливает таймер сообщения CDP на 60 секунд, что является значением по умолчанию."
    ]
  },
  {
    "time": [
      1904.76,
      1912.429
    ],
    "en": [
      "A, NO CDP RUN, disables CDP on the router, and that is not the default state, CDP is enabled by default."
    ],
    "ru": [
      "A, NO CDP RUN, отключает CDP на маршрутизаторе, и это не состояние по умолчанию, CDP включен по умолчанию."
    ]
  },
  {
    "time": [
      1912.429,
      1918.99
    ],
    "en": [
      "enabled by default. B, CDP HOLDTIME 120 sets the hold time to 120 seconds, which is not the default."
    ],
    "ru": [
      "включен по умолчанию. B, CDP HOLDTIME 120 устанавливает время удержания на 120 секунд, что не является значением по умолчанию."
    ]
  },
  {
    "time": [
      1918.99,
      1921.84
    ],
    "en": [
      "The default CDP holdtime is 180 seconds."
    ],
    "ru": [
      "По умолчанию время удержания CDP составляет 180 секунд."
    ]
  },
  {
    "time": [
      1921.84,
      1924.05
    ],
    "en": [
      "So, A and B are incorrect."
    ],
    "ru": [
      "Итак, A и B неверны."
    ]
  },
  {
    "time": [
      1924.05,
      1928.17
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
      1928.17,
      1932.45
    ],
    "en": [
      "You issue the show lldp entry SW1 command on R1."
    ],
    "ru": [
      "Вы вводите команду SW1 show lldp entry на маршрутизаторе R1."
    ]
  },
  {
    "time": [
      1932.45,
      1936.66
    ],
    "en": [
      "R1’s neighbor SW1 is a multilayer switch."
    ],
    "ru": [
      "Соседний узел SW1 маршрутизатора R1 является многоуровневым коммутатором."
    ]
  },
  {
    "time": [
      1936.66,
      1940.62
    ],
    "en": [
      "What do you expect to see in the ‘system capabilities’ field of the output?"
    ],
    "ru": [
      "Что вы ожидаете увидеть в выходном поле «Возможности системы»?"
    ]
  },
  {
    "time": [
      1940.62,
      1942.37
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
      1942.37,
      1947.43
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
      1947.43,
      1954.87
    ],
    "en": [
      "The answer is B, System Capabilities: B,R. B is for bridge, which is another word for switch."
    ],
    "ru": [
      "Ответ - B, Возможности системы: B, R. B означает мост, что по-другому означает переключатель."
    ]
  },
  {
    "time": [
      1954.87,
      1956.79
    ],
    "en": [
      "switch. R is for router."
    ],
    "ru": [
      "выключатель. R - это маршрутизатор."
    ]
  },
  {
    "time": [
      1956.79,
      1961.82
    ],
    "en": [
      "Because SW1 is a multilayer switch, it has the functionalities of both a switch and a router."
    ],
    "ru": [
      "Поскольку SW1 является многоуровневым коммутатором, он выполняет функции коммутатора и маршрутизатора."
    ]
  },
  {
    "time": [
      1961.82,
      1968.799
    ],
    "en": [
      "router. S, as shown in options C and D, means switch in CDP, but it does not mean switch in LLDP."
    ],
    "ru": [
      "роутер. S, как показано в вариантах C и D, означает переключение в CDP, но не означает переключение в LLDP."
    ]
  },
  {
    "time": [
      1968.799,
      1973.72
    ],
    "en": [
      "Okay, let’s go to question 4."
    ],
    "ru": [
      "Хорошо, перейдем к вопросу 4."
    ]
  },
  {
    "time": [
      1973.72,
      1977.98
    ],
    "en": [
      "Which of the following statements about LLDP are true? Select two."
    ],
    "ru": [
      "Какие из следующих утверждений о LLDP верны? Выберите два."
    ]
  },
  {
    "time": [
      1977.98,
      1979.41
    ],
    "en": [
      "Select two. Here are the options."
    ],
    "ru": [
      "Выберите два. Вот варианты."
    ]
  },
  {
    "time": [
      1979.41,
      1984.89
    ],
    "en": [
      "Pause the video now, read each option, and select the two correct choices."
    ],
    "ru": [
      "Приостановите видео сейчас, прочтите каждый вариант и выберите два правильных варианта."
    ]
  },
  {
    "time": [
      1984.89,
      1993.87
    ],
    "en": [
      "Okay, the correct answers are B and F. When configuring LLDP, unlike CDP, you must enable"
    ],
    "ru": [
      "Хорошо, правильные ответы - B и F. При настройке LLDP, в отличие от CDP, вы должны включить"
    ]
  },
  {
    "time": [
      1993.87,
      1998.61
    ],
    "en": [
      "TRANSMIT, Tx, and RECEIVE, Rx, separately on each interface."
    ],
    "ru": [
      "TRANSMIT, Tx и RECEIVE, Rx отдельно для каждого интерфейса."
    ]
  },
  {
    "time": [
      1998.61,
      2001.55
    ],
    "en": [
      "So, B is correct."
    ],
    "ru": [
      "Итак, B правильно."
    ]
  },
  {
    "time": [
      2001.55,
      2007.63
    ],
    "en": [
      "And LLDP can be used to learn the OS version of a neighboring device, so F is also correct."
    ],
    "ru": [
      "Кроме того, LLDP можно использовать для изучения версии ОС соседнего устройства, поэтому F также является правильным."
    ]
  },
  {
    "time": [
      2007.63,
      2011.179
    ],
    "en": [
      "The other options are incorrect statements about LLDP."
    ],
    "ru": [
      "Другие варианты - неправильные утверждения о LLDP."
    ]
  },
  {
    "time": [
      2011.179,
      2016.16
    ],
    "en": [
      "LLDP is an industry standard protocol, so A is incorrect."
    ],
    "ru": [
      "LLDP - это протокол промышленного стандарта, поэтому A неверно."
    ]
  },
  {
    "time": [
      2016.16,
      2019.37
    ],
    "en": [
      "Its default message timer is 30 seconds, so C is incorrect."
    ],
    "ru": [
      "Его таймер сообщений по умолчанию составляет 30 секунд, поэтому C неверен."
    ]
  },
  {
    "time": [
      2019.37,
      2025.26
    ],
    "en": [
      "It can’t be used to learn the OSPF settings of a neighbor, so D is incorrect."
    ],
    "ru": [
      "Его нельзя использовать для изучения настроек OSPF соседа, поэтому D неверен."
    ]
  },
  {
    "time": [
      2025.26,
      2029.76
    ],
    "en": [
      "And it can’t be used to learn the VTP settings of a neighbor, although CDP can be used to"
    ],
    "ru": [
      "И его нельзя использовать для изучения настроек VTP соседа, хотя CDP можно использовать для"
    ]
  },
  {
    "time": [
      2029.76,
      2031.98
    ],
    "en": [
      "do that, so E is incorrect."
    ],
    "ru": [
      "сделайте это, поэтому E неверен."
    ]
  },
  {
    "time": [
      2031.98,
      2036.96
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
      2036.96,
      2040.98
    ],
    "en": [
      "Which interface on R2 is SW2 connected to?"
    ],
    "ru": [
      "К какому интерфейсу на R2 подключен SW2?"
    ]
  },
  {
    "time": [
      2040.98,
      2045.97
    ],
    "en": [
      "Is it G0/0, G0/1, G0/2, or G0/3?"
    ],
    "ru": [
      "Это G0 / 0, G0 / 1, G0 / 2 или G0 / 3?"
    ]
  },
  {
    "time": [
      2045.97,
      2053.679
    ],
    "en": [
      "Pause the video to examine R2’s CDP neighbor table and select the correct answer."
    ],
    "ru": [
      "Приостановите видео, чтобы изучить таблицу соседей CDP R2 и выбрать правильный ответ."
    ]
  },
  {
    "time": [
      2053.679,
      2056.57
    ],
    "en": [
      "The correct answer is G0/1."
    ],
    "ru": [
      "Правильный ответ - G0 / 1."
    ]
  },
  {
    "time": [
      2056.57,
      2060.25
    ],
    "en": [
      "It is shown here, in the local interface column of the output."
    ],
    "ru": [
      "Он показан здесь, в столбце локального интерфейса выходных данных."
    ]
  },
  {
    "time": [
      2060.25,
      2063.78
    ],
    "en": [
      "This shows the interface on R2 that SW2 is connected to."
    ],
    "ru": [
      "Это показывает интерфейс на R2, к которому подключен SW2."
    ]
  },
  {
    "time": [
      2063.78,
      2066.429
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
      2066.429,
      2071.62
    ],
    "en": [
      "Now let’s try a bonus question from Boson Software’s ExSim for CCNA."
    ],
    "ru": [
      "Теперь давайте попробуем получить бонусный вопрос от ExSim компании Boson Software для CCNA."
    ]
  },
  {
    "time": [
      2071.62,
      2077.43
    ],
    "en": [
      "Okay here's today's Boson ExSim practice question."
    ],
    "ru": [
      "Хорошо, вот сегодняшний вопрос по практике Boson ExSim."
    ]
  },
  {
    "time": [
      2077.43,
      2082.7
    ],
    "en": [
      "You issue the following command on your router. SHOW CDP NEIGHBORS."
    ],
    "ru": [
      "Вы вводите следующую команду на своем маршрутизаторе. ПОКАЗАТЬ СОСЕДЕЙ CDP."
    ]
  },
  {
    "time": [
      2082.7,
      2087.22
    ],
    "en": [
      "SHOW CDP NEIGHBORS. Which of the following information will be displayed? Select 4 choices."
    ],
    "ru": [
      "ПОКАЗАТЬ СОСЕДЕЙ CDP. Какая из следующей информации будет отображаться? Выберите 4 варианта."
    ]
  },
  {
    "time": [
      2087.22,
      2090.5
    ],
    "en": [
      "Select 4 choices. A, the IP address of the neighboring device."
    ],
    "ru": [
      "Выберите 4 варианта. A, IP-адрес соседнего устройства."
    ]
  },
  {
    "time": [
      2090.5,
      2095.23
    ],
    "en": [
      "B, the interface on the neighboring device that is connected to RouterA."
    ],
    "ru": [
      "B, интерфейс соседнего устройства, подключенного к RouterA."
    ]
  },
  {
    "time": [
      2095.23,
      2099.23
    ],
    "en": [
      "C, The device ID of the neighboring device."
    ],
    "ru": [
      "C, идентификатор соседнего устройства."
    ]
  },
  {
    "time": [
      2099.23,
      2103.4
    ],
    "en": [
      "D, the software version running on the neighboring device."
    ],
    "ru": [
      "D - версия программного обеспечения на соседнем устройстве."
    ]
  },
  {
    "time": [
      2103.4,
      2108.7
    ],
    "en": [
      "E, the interface on RouterA that is connected to the neighboring device."
    ],
    "ru": [
      "E, интерфейс на RouterA, подключенный к соседнему устройству."
    ]
  },
  {
    "time": [
      2108.7,
      2113.6
    ],
    "en": [
      "Or F, the capabilities and product number of the neighboring device."
    ],
    "ru": [
      "Или F - возможности и номер продукта соседнего устройства."
    ]
  },
  {
    "time": [
      2113.6,
      2119.98
    ],
    "en": [
      "Okay, pause the video now to think about your answer. Select 4 choices."
    ],
    "ru": [
      "Хорошо, останови видео сейчас, чтобы подумать над своим ответом. Выберите 4 варианта."
    ]
  },
  {
    "time": [
      2119.98,
      2123.63
    ],
    "en": [
      "Select 4 choices. Okay, let's check."
    ],
    "ru": [
      "Выберите 4 варианта. Хорошо, давай проверим."
    ]
  },
  {
    "time": [
      2123.63,
      2127.94
    ],
    "en": [
      "Let's go through one by one and see which answers are correct."
    ],
    "ru": [
      "Давайте пройдемся по порядку и посмотрим, какие ответы верны."
    ]
  },
  {
    "time": [
      2127.94,
      2131.76
    ],
    "en": [
      "So A, the IP address of the neighboring device."
    ],
    "ru": [
      "Итак, A, IP-адрес соседнего устройства."
    ]
  },
  {
    "time": [
      2131.76,
      2135.85
    ],
    "en": [
      "I think that is not displayed by SHOW CDP NEIGHBORS."
    ],
    "ru": [
      "Я думаю, что SHOW CDP NEIGHBORS не отображает."
    ]
  },
  {
    "time": [
      2135.85,
      2140.78
    ],
    "en": [
      "To view that you have to use SHOW CDP NEIGHBORS DETAIL, so A is not correct."
    ],
    "ru": [
      "Чтобы увидеть, что вы должны использовать SHOW CDP NEIGHBORS DETAIL, A неверно."
    ]
  },
  {
    "time": [
      2140.78,
      2147.66
    ],
    "en": [
      "B, the interface on the neighboring device that is connected to RouterA. That is correct."
    ],
    "ru": [
      "B, интерфейс соседнего устройства, подключенного к RouterA. Это правильно."
    ]
  },
  {
    "time": [
      2147.66,
      2149.89
    ],
    "en": [
      "That is correct. You can see that with SHOW CDP NEIGHBORS."
    ],
    "ru": [
      "Это правильно. Вы можете убедиться в этом с помощью SHOW CDP NEIGHBORS."
    ]
  },
  {
    "time": [
      2149.89,
      2153.76
    ],
    "en": [
      "C, the device ID of the neighboring device."
    ],
    "ru": [
      "C, идентификатор соседнего устройства."
    ]
  },
  {
    "time": [
      2153.76,
      2157.97
    ],
    "en": [
      "You can also see that, that is the host name of the neighboring device."
    ],
    "ru": [
      "Вы также можете видеть, что это имя хоста соседнего устройства."
    ]
  },
  {
    "time": [
      2157.97,
      2163.28
    ],
    "en": [
      "D, the software version running on the neighboring device."
    ],
    "ru": [
      "D - версия программного обеспечения на соседнем устройстве."
    ]
  },
  {
    "time": [
      2163.28,
      2166.78
    ],
    "en": [
      "I think you cannot see that in SHOW CDP NEIGHBORS."
    ],
    "ru": [
      "Я думаю, вы не можете увидеть это в SHOW CDP NEIGHBORS."
    ]
  },
  {
    "time": [
      2166.78,
      2171.58
    ],
    "en": [
      "Once again, you have to use SHOW CDP NEIGHBORS DETAIL to view the software version, the operating"
    ],
    "ru": [
      "Еще раз, вы должны использовать SHOW CDP NEIGHBORS DETAIL для просмотра версии программного обеспечения, операционной"
    ]
  },
  {
    "time": [
      2171.58,
      2174.33
    ],
    "en": [
      "system version of the neighboring device."
    ],
    "ru": [
      "системная версия соседнего устройства."
    ]
  },
  {
    "time": [
      2174.33,
      2179.83
    ],
    "en": [
      "Okay, E, the interface on RouterA that is connected to the neighboring device."
    ],
    "ru": [
      "Хорошо, E, интерфейс на RouterA, который подключен к соседнему устройству."
    ]
  },
  {
    "time": [
      2179.83,
      2183.6
    ],
    "en": [
      "You can see that with SHOW CDP NEIGHBORS."
    ],
    "ru": [
      "Вы можете убедиться в этом с помощью SHOW CDP NEIGHBORS."
    ]
  },
  {
    "time": [
      2183.6,
      2184.6
    ],
    "en": [
      "And how about F?"
    ],
    "ru": [
      "А как насчет F?"
    ]
  },
  {
    "time": [
      2184.6,
      2190.67
    ],
    "en": [
      "The capabilities, which is like router, switch, etc, and product number, this is the model"
    ],
    "ru": [
      "Возможности, такие как маршрутизатор, коммутатор и т. Д., И номер продукта, это модель"
    ]
  },
  {
    "time": [
      2190.67,
      2195.29
    ],
    "en": [
      "of the device, of the neighboring device."
    ],
    "ru": [
      "устройства, соседнего устройства."
    ]
  },
  {
    "time": [
      2195.29,
      2196.7
    ],
    "en": [
      "And yes you can."
    ],
    "ru": [
      "И да, вы можете."
    ]
  },
  {
    "time": [
      2196.7,
      2199.23
    ],
    "en": [
      "So I think these are the four choices."
    ],
    "ru": [
      "Так что я думаю, что это четыре варианта."
    ]
  },
  {
    "time": [
      2199.23,
      2205.13
    ],
    "en": [
      "You cannot see the IP address of the neighboring device or the software version of the neighboring device."
    ],
    "ru": [
      "Вы не можете увидеть IP-адрес соседнего устройства или версию программного обеспечения соседнего устройства."
    ]
  },
  {
    "time": [
      2205.13,
      2208.65
    ],
    "en": [
      "device. To view those two you have to use SHOW CDP NEIGHBORS DETAIL."
    ],
    "ru": [
      "устройство. Для просмотра этих двух вы должны использовать ПОКАЗАТЬ ДЕТАЛИ СОСЕДЕЙ CDP."
    ]
  },
  {
    "time": [
      2208.65,
      2214.63
    ],
    "en": [
      "Okay, so to check my answer I will click down here, show answer."
    ],
    "ru": [
      "Хорошо, чтобы проверить свой ответ, я нажму здесь, покажу ответ."
    ]
  },
  {
    "time": [
      2214.63,
      2216.21
    ],
    "en": [
      "And that is correct."
    ],
    "ru": [
      "И это правильно."
    ]
  },
  {
    "time": [
      2216.21,
      2218.76
    ],
    "en": [
      "So, here is Boson's explanation."
    ],
    "ru": [
      "Итак, вот объяснение Бозона."
    ]
  },
  {
    "time": [
      2218.76,
      2220.26
    ],
    "en": [
      "I'll scroll through it."
    ],
    "ru": [
      "Я пролистаю его."
    ]
  },
  {
    "time": [
      2220.26,
      2227.28
    ],
    "en": [
      "You can pause the video to read their explanation, and I really recommend you do."
    ],
    "ru": [
      "Вы можете приостановить видео, чтобы прочитать их объяснение, и я очень рекомендую вам это сделать."
    ]
  },
  {
    "time": [
      2227.28,
      2232.04
    ],
    "en": [
      "Boson gives great explanations, not just why each correct answer is correct, but also why"
    ],
    "ru": [
      "Бозон дает прекрасные объяснения не только почему каждый правильный ответ правильный, но и почему"
    ]
  },
  {
    "time": [
      2232.04,
      2234.35
    ],
    "en": [
      "each incorrect answer is incorrect."
    ],
    "ru": [
      "каждый неправильный ответ неверен."
    ]
  },
  {
    "time": [
      2234.35,
      2236.451
    ],
    "en": [
      "So they are a great resource to improve your understanding."
    ],
    "ru": [
      "Так что они являются отличным ресурсом для улучшения вашего понимания."
    ]
  },
  {
    "time": [
      2236.451,
      2245.79
    ],
    "en": [
      "Okay, and at the bottom there are a few references to the official cert guide by Wendell Odom."
    ],
    "ru": [
      "Хорошо, и внизу есть несколько ссылок на официальное руководство по сертификатам Венделла Одома."
    ]
  },
  {
    "time": [
      2245.79,
      2249.05
    ],
    "en": [
      "This is a great book for studying for the CCNA."
    ],
    "ru": [
      "Это отличная книга для изучения CCNA."
    ]
  },
  {
    "time": [
      2249.05,
      2254.71
    ],
    "en": [
      "And also some Cisco documentation about CDP which is free to read online."
    ],
    "ru": [
      "А также некоторую документацию Cisco по CDP, которую можно бесплатно прочитать в Интернете."
    ]
  },
  {
    "time": [
      2254.71,
      2261.41
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
      2261.41,
      2265.44
    ],
    "en": [
      "If you want to get ExSim, please follow the link in the video description."
    ],
    "ru": [
      "Если вы хотите получить ExSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      2265.44,
      2269.13
    ],
    "en": [
      "These are by far the best practice exams for the CCNA."
    ],
    "ru": [
      "Это, безусловно, лучшие практические экзамены для CCNA."
    ]
  },
  {
    "time": [
      2269.13,
      2274.39
    ],
    "en": [
      "Once again, follow that link in the video description."
    ],
    "ru": [
      "Еще раз перейдите по этой ссылке в описании видео."
    ]
  },
  {
    "time": [
      2274.39,
      2277.34
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
      2277.34,
      2279.76
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
      2279.76,
      2285.09
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
      2285.09,
      2287.65
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
      2287.65,
      2291.22
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
      2291.22,
      2296.27
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
      2296.27,
      2300.609
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
      2300.609,
      2303.47
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
      2303.47,
      2309.664
    ],
    "en": [
      "Thank you to Magrathea, Samil, Aaron, Junhong, Njabulo, Benjamin, Tshepiso, Justin, Prakaash,"
    ],
    "ru": [
      "Спасибо Магратее, Самилу, Аарону, Джунхонгу, Нджабуло, Бенджамину, Чеписо, Джастину, Пракаашу,"
    ]
  },
  {
    "time": [
      2309.664,
      2317.468
    ],
    "en": [
      "Nasir, Erlison, Apogee, Marko, Daming, Joshua, Jhilmar, Ed, Value, John, Funnydart, Velvijaykum,"
    ],
    "ru": [
      "Насир, Эрлисон, Апогей, Марко, Даминг, Джошуа, Джилмар, Эд, Вэлью, Джон, Фаннидарт, Велвиджайкум,"
    ]
  },
  {
    "time": [
      2317.468,
      2323.713
    ],
    "en": [
      "C Mohd, Mark, Yousif, Boson Software, Devin, Lito, Yonatan, and Vance."
    ],
    "ru": [
      "К. Мохд, Марк, Юсиф, Boson Software, Девин, Лито, Йонатан и Вэнс."
    ]
  },
  {
    "time": [
      2323.713,
      2328.57
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
      2328.57,
      2334.79
    ],
    "en": [
      "This is the list of JCNP-level members at the time of recording by the way, December 13th 2020."
    ],
    "ru": [
      "Это список участников уровня JCNP на момент записи, кстати, 13 декабря 2020 года."
    ]
  },
  {
    "time": [
      2334.79,
      2339.869
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
      2334.79,
      2339.869
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
      2339.869,
      2343.16
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
      2343.16,
      2347.2
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
      2347.2,
      2350.4
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
      2350.4,
      2352.9
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
      2352.9,
      2360.75
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
      2360.75,
      2360.75
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]