let items = [
  {
    "time": [
      1.829,
      4.16
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
      4.16,
      7.64
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
      7.64,
      11.639
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
      11.639,
      17.64
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
      17.64,
      20.66
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
      20.66,
      24.189
    ],
    "en": [
      "This video will once again cover the topic of VLANs.."
    ],
    "ru": [
      "В этом видео снова рассматривается тема виртуальных локальных сетей."
    ]
  },
  {
    "time": [
      24.189,
      28.41
    ],
    "en": [
      "Although we’ve already covered the most important basics about VLANs, there are still"
    ],
    "ru": [
      "Хотя мы уже рассмотрели наиболее важные основы виртуальных локальных сетей,"
    ]
  },
  {
    "time": [
      28.41,
      32.47
    ],
    "en": [
      "a few more things you should know about VLANs for your CCNA."
    ],
    "ru": [
      "еще несколько вещей, которые вам следует знать о VLAN для вашей CCNA."
    ]
  },
  {
    "time": [
      32.47,
      37.229
    ],
    "en": [
      "This is going to be a long video again, so let’s get right into it."
    ],
    "ru": [
      "Это снова будет длинное видео, так что давайте перейдем к нему."
    ]
  },
  {
    "time": [
      37.229,
      40.19
    ],
    "en": [
      "First off, here are the topics that will be covered in this video."
    ],
    "ru": [
      "Во-первых, вот темы, которые будут рассмотрены в этом видео."
    ]
  },
  {
    "time": [
      40.19,
      45.37
    ],
    "en": [
      "First off, a little addition to the previous video, I will show you how to use the concept"
    ],
    "ru": [
      "Во-первых, небольшое дополнение к предыдущему видео, я покажу вам, как использовать концепцию."
    ]
  },
  {
    "time": [
      45.37,
      51.41
    ],
    "en": [
      "of a native VLAN on a router when using router on a stick for inter-VLAN routing."
    ],
    "ru": [
      "собственной VLAN на маршрутизаторе при использовании маршрутизатора на флешке для маршрутизации между VLAN."
    ]
  },
  {
    "time": [
      51.41,
      56.629
    ],
    "en": [
      "Next up, we will look at a few wireshark captures to see the dot1q tag."
    ],
    "ru": [
      "Далее мы рассмотрим несколько снимков wirehark, чтобы увидеть тег dot1q."
    ]
  },
  {
    "time": [
      56.629,
      60.93
    ],
    "en": [
      "Wireshark is a great tool for network engineers, so I plan to use it at various points in this"
    ],
    "ru": [
      "Wireshark - отличный инструмент для сетевых инженеров, поэтому я планирую использовать его на разных этапах этого"
    ]
  },
  {
    "time": [
      60.93,
      64.299
    ],
    "en": [
      "series to help you understand these topics."
    ],
    "ru": [
      "серия, которая поможет вам разобраться в этих темах."
    ]
  },
  {
    "time": [
      64.299,
      69.45
    ],
    "en": [
      "After that we’ll look at the final method of inter-VLAN routing, which is Layer 3 switching,"
    ],
    "ru": [
      "После этого мы рассмотрим последний метод маршрутизации между VLAN, который представляет собой коммутацию уровня 3,"
    ]
  },
  {
    "time": [
      69.45,
      71.48
    ],
    "en": [
      "also known as multilayer switching."
    ],
    "ru": [
      "также называется многослойной коммутацией."
    ]
  },
  {
    "time": [
      71.48,
      77.96000000000001
    ],
    "en": [
      "I’ve always told you that switches are Layer 2 devices and don’t use IP addresses, however"
    ],
    "ru": [
      "Я всегда говорил вам, что коммутаторы являются устройствами уровня 2 и не используют IP-адреса, однако"
    ]
  },
  {
    "time": [
      77.96000000000001,
      85.51
    ],
    "en": [
      "many modern switches are actually Layer 3 capable as well, and I’ll talk about that in today’s video."
    ],
    "ru": [
      "многие современные коммутаторы также поддерживают уровень 3, и я расскажу об этом в сегодняшнем видео."
    ]
  },
  {
    "time": [
      85.51,
      90.17
    ],
    "en": [
      "in today’s video. Next up are two topics which have actually been removed from the CCNA exam topics list."
    ],
    "ru": [
      "в сегодняшнем видео. Далее идут две темы, которые фактически были удалены из списка тем экзамена CCNA."
    ]
  },
  {
    "time": [
      90.17,
      96.89
    ],
    "en": [
      "DTP, the dynamic trunking protocol, and VTP, VLAN trunking protocol."
    ],
    "ru": [
      "DTP, протокол динамического транкинга, и VTP, протокол транкинга VLAN."
    ]
  },
  {
    "time": [
      96.89,
      101.2
    ],
    "en": [
      "I was planning to cover these in this video, but due to the length of the video I’ll"
    ],
    "ru": [
      "Я планировал осветить это в этом видео, но из-за длины видео я"
    ]
  },
  {
    "time": [
      101.2,
      103.61
    ],
    "en": [
      "reserve a separate video for them."
    ],
    "ru": [
      "зарезервируйте для них отдельное видео."
    ]
  },
  {
    "time": [
      103.61,
      107.729
    ],
    "en": [
      "Although these have both been removed from the exam topics list, I think it will probably"
    ],
    "ru": [
      "Хотя обе они были удалены из списка тем экзамена, я думаю, что, вероятно,"
    ]
  },
  {
    "time": [
      107.729,
      113.0
    ],
    "en": [
      "be important for you to understand these topics at least at a basic level for your CCNA, and"
    ],
    "ru": [
      "важно понимать эти темы хотя бы на базовом уровне для вашей CCNA, и"
    ]
  },
  {
    "time": [
      113.0,
      116.89
    ],
    "en": [
      "you may actually see some questions about them in your exam even though they have been"
    ],
    "ru": [
      "вы можете увидеть некоторые вопросы о них на экзамене, даже если они были"
    ]
  },
  {
    "time": [
      116.89,
      118.84
    ],
    "en": [
      "removed from the topics list."
    ],
    "ru": [
      "удален из списка тем."
    ]
  },
  {
    "time": [
      118.84,
      124.06
    ],
    "en": [
      "However, I will give just a basic overview of each, there is no need to go in depth."
    ],
    "ru": [
      "Тем не менее, я дам только базовый обзор каждого, нет необходимости вдаваться в подробности."
    ]
  },
  {
    "time": [
      124.06,
      128.63
    ],
    "en": [
      "Before getting started, I want to say make sure that you stick around to the end of today’s"
    ],
    "ru": [
      "Прежде чем начать, я хочу сказать, что вы не торопитесь до конца сегодняшнего"
    ]
  },
  {
    "time": [
      128.63,
      134.28
    ],
    "en": [
      "quiz, from now on I’ll be featuring one BONUS question from Boson ExSim, Boson’s"
    ],
    "ru": [
      "викторина, с этого момента я буду предлагать один БОНУС-вопрос от Boson ExSim, Boson’s"
    ]
  },
  {
    "time": [
      134.28,
      136.73
    ],
    "en": [
      "set of practice exams for the CCNA."
    ],
    "ru": [
      "набор практических экзаменов для CCNA."
    ]
  },
  {
    "time": [
      136.73,
      138.48
    ],
    "en": [
      "Look forward to that."
    ],
    "ru": [
      "С нетерпением жду этого."
    ]
  },
  {
    "time": [
      138.48,
      144.82999999999998
    ],
    "en": [
      "If you want to get a copy of Boson ExSim for yourself, by the way, follow the link in the video description."
    ],
    "ru": [
      "Если вы хотите получить себе копию Boson ExSim, кстати, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      144.82999999999998,
      149.87
    ],
    "en": [
      "video description. No other practice exams help you get ready for the real exam like Boson ExSim, so if"
    ],
    "ru": [
      "описание видео. Никакие другие практические экзамены не помогут вам подготовиться к настоящему экзамену, как Boson ExSim, поэтому, если"
    ]
  },
  {
    "time": [
      149.87,
      155.92000000000002
    ],
    "en": [
      "you can I highly recommend getting and using it to prepare for your exam."
    ],
    "ru": [
      "вы можете Я настоятельно рекомендую получить и использовать его для подготовки к экзамену."
    ]
  },
  {
    "time": [
      155.92000000000002,
      161.47
    ],
    "en": [
      "So let’s move on to the first point, using the Native VLAN feature on a router."
    ],
    "ru": [
      "Итак, перейдем к первому пункту, используя функцию Native VLAN на маршрутизаторе."
    ]
  },
  {
    "time": [
      161.47,
      166.209
    ],
    "en": [
      "I said in the previous lecture video that best practice is to set the native VLAN to"
    ],
    "ru": [
      "В предыдущем видео лекции я сказал, что лучше всего настроить для собственной VLAN значение"
    ]
  },
  {
    "time": [
      166.209,
      171.01
    ],
    "en": [
      "an unused VLAN, as the native VLAN feature can cause some security issues."
    ],
    "ru": [
      "неиспользуемая VLAN, поскольку встроенная функция VLAN может вызвать некоторые проблемы с безопасностью."
    ]
  },
  {
    "time": [
      171.01,
      175.209
    ],
    "en": [
      "I will talk more about network security later in the course, by the way."
    ],
    "ru": [
      "Кстати, я подробнее расскажу о сетевой безопасности позже."
    ]
  },
  {
    "time": [
      175.209,
      181.239
    ],
    "en": [
      "However, if you want to use the native VLAN feature, let’s see how to use it on a router."
    ],
    "ru": [
      "Однако, если вы хотите использовать встроенную функцию VLAN, давайте посмотрим, как использовать ее на маршрутизаторе."
    ]
  },
  {
    "time": [
      181.239,
      184.29
    ],
    "en": [
      "The native VLAN feature does have one benefit."
    ],
    "ru": [
      "У встроенной функции VLAN есть одно преимущество."
    ]
  },
  {
    "time": [
      184.29,
      188.47
    ],
    "en": [
      "Because frames in the native VLAN aren’t tagged, it’s more efficient, each frame"
    ],
    "ru": [
      "Поскольку кадры в собственной VLAN не помечаются, более эффективно каждый кадр"
    ]
  },
  {
    "time": [
      188.47,
      194.319
    ],
    "en": [
      "is smaller so it allows the device to send more frames per second."
    ],
    "ru": [
      "меньше, поэтому позволяет устройству отправлять больше кадров в секунду."
    ]
  },
  {
    "time": [
      194.319,
      201.4
    ],
    "en": [
      "In the previous video, I set the native VLAN to 1001 on SW1’s G0/0 interface, and SW2’s"
    ],
    "ru": [
      "В предыдущем видео я установил для собственной VLAN значение 1001 на интерфейсе G0 / 0 SW1 и SW2"
    ]
  },
  {
    "time": [
      201.4,
      204.01
    ],
    "en": [
      "G0/0 and G0/1 interfaces."
    ],
    "ru": [
      "Интерфейсы G0 / 0 и G0 / 1."
    ]
  },
  {
    "time": [
      204.01,
      211.98
    ],
    "en": [
      "So, just for this demonstration let’s set them back to a used VLAN, VLAN10 on all trunks."
    ],
    "ru": [
      "Итак, просто для этой демонстрации давайте вернем их к используемой VLAN, VLAN10 на всех магистралях."
    ]
  },
  {
    "time": [
      211.98,
      218.14
    ],
    "en": [
      "There are 2 methods of configuring the native VLAN on a router, let’s take a quick look at both."
    ],
    "ru": [
      "Существует 2 метода настройки собственной VLAN на маршрутизаторе, давайте кратко рассмотрим оба."
    ]
  },
  {
    "time": [
      218.14,
      226.15
    ],
    "en": [
      "at both. First up, you can use the command ENCAPSULATION DOT1Q, followed by the vlan-id, followed by NATIVE."
    ],
    "ru": [
      "на обоих. Сначала вы можете использовать команду ENCAPSULATION DOT1Q, за которой следует vlan-id, а затем NATIVE."
    ]
  },
  {
    "time": [
      226.15,
      230.53
    ],
    "en": [
      "NATIVE. This tells the router that this subinterface belongs to the native VLAN, and it will function"
    ],
    "ru": [
      "РОДНЫЕ. Это сообщает маршрутизатору, что этот подинтерфейс принадлежит к собственной VLAN, и он будет работать."
    ]
  },
  {
    "time": [
      230.53,
      233.44
    ],
    "en": [
      "just like the native VLAN on a switch."
    ],
    "ru": [
      "точно так же, как собственная VLAN на коммутаторе."
    ]
  },
  {
    "time": [
      233.44,
      238.2
    ],
    "en": [
      "It will assume untagged frame belong to the native VLAN, and frames sent in the native"
    ],
    "ru": [
      "Предполагается, что немаркированный кадр принадлежит собственной VLAN, а кадры, отправленные в собственном VLAN."
    ]
  },
  {
    "time": [
      238.2,
      240.69
    ],
    "en": [
      "VLAN will not be tagged."
    ],
    "ru": [
      "VLAN не будут помечены."
    ]
  },
  {
    "time": [
      240.69,
      245.24099999999999
    ],
    "en": [
      "The second option is to not use a subinterface at all, but just configure the IP address"
    ],
    "ru": [
      "Второй вариант - вообще не использовать подинтерфейс, а просто настроить IP-адрес."
    ]
  },
  {
    "time": [
      245.24099999999999,
      249.61
    ],
    "en": [
      "for the native VLAN on the physical interface of the router."
    ],
    "ru": [
      "для собственной VLAN на физическом интерфейсе маршрутизатора."
    ]
  },
  {
    "time": [
      249.61,
      253.51
    ],
    "en": [
      "The ENCAPSULATION DOT1Q command is not necessary in this case."
    ],
    "ru": [
      "В этом случае команда ENCAPSULATION DOT1Q не требуется."
    ]
  },
  {
    "time": [
      253.51,
      256.609
    ],
    "en": [
      "Okay, let’s look at each option."
    ],
    "ru": [
      "Хорошо, давайте рассмотрим каждый вариант."
    ]
  },
  {
    "time": [
      256.609,
      260.989
    ],
    "en": [
      "First, I will configure the first option. Here it is."
    ],
    "ru": [
      "Сначала настрою первый вариант. Вот."
    ]
  },
  {
    "time": [
      260.989,
      268.86
    ],
    "en": [
      "Here it is. On the g0/0.10 interface, I configured ENCAPSULATION DOT1Q 10 NATIVE."
    ],
    "ru": [
      "Вот. На интерфейсе g0 / 0.10 я настроил ENCAPSULATION DOT1Q 10 NATIVE."
    ]
  },
  {
    "time": [
      268.86,
      275.379
    ],
    "en": [
      "Note that this is the complete topology from the previous lecture video, so the IP address is already configured."
    ],
    "ru": [
      "Обратите внимание, что это полная топология из предыдущего видео лекции, поэтому IP-адрес уже настроен."
    ]
  },
  {
    "time": [
      275.379,
      280.99
    ],
    "en": [
      "is already configured. The only change is that I added NATIVE to the encapsulation dot1q command."
    ],
    "ru": [
      "уже настроен. Единственное изменение состоит в том, что я добавил NATIVE к команде инкапсуляции dot1q."
    ]
  },
  {
    "time": [
      280.99,
      287.449
    ],
    "en": [
      "Let’s take this opportunity to look at a wireshark capture to demonstrate the native VLAN."
    ],
    "ru": [
      "Давайте воспользуемся этой возможностью, чтобы взглянуть на запись wirehark, чтобы продемонстрировать собственную виртуальную локальную сеть."
    ]
  },
  {
    "time": [
      287.449,
      299.379
    ],
    "en": [
      "VLAN. This PC in VLAN20 has an IP address of 192.168.1.65, and this PC in VLAN10 has an IP address of 192.168.1.1."
    ],
    "ru": [
      "VLAN. Этот компьютер в VLAN20 имеет IP-адрес 192.168.1.65, а этот компьютер в VLAN10 имеет IP-адрес 192.168.1.1."
    ]
  },
  {
    "time": [
      299.379,
      305.03
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
      299.379,
      305.03
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
      305.03,
      309.189
    ],
    "en": [
      "Wireshark will capture all frames on this connection, in both directions, so we can"
    ],
    "ru": [
      "Wireshark захватит все кадры в этом соединении в обоих направлениях, поэтому мы можем"
    ]
  },
  {
    "time": [
      309.189,
      311.639
    ],
    "en": [
      "take a look at what traffic is passing through."
    ],
    "ru": [
      "посмотрите, через какой трафик проходит."
    ]
  },
  {
    "time": [
      311.639,
      317.619
    ],
    "en": [
      "Let’s send that ping. We will first look at the capture of the ICMP echo request message"
    ],
    "ru": [
      "Давай пошлем этот пинг. Сначала мы рассмотрим захват сообщения эхо-запроса ICMP."
    ]
  },
  {
    "time": [
      317.619,
      320.819
    ],
    "en": [
      "as it goes from SW2 to R1."
    ],
    "ru": [
      "как идет от SW2 к R1."
    ]
  },
  {
    "time": [
      320.819,
      325.96
    ],
    "en": [
      "It will be in VLAN20, and it’s being sent to R1 for inter-VLAN routing."
    ],
    "ru": [
      "Он будет в VLAN20 и будет отправлен на маршрутизатор R1 для маршрутизации между VLAN."
    ]
  },
  {
    "time": [
      325.96,
      332.69
    ],
    "en": [
      "Here’s the wireshark capture for the ICMP echo request as it goes from SW2 to R1."
    ],
    "ru": [
      "Вот запись wirehark для эхо-запроса ICMP, когда он идет от SW2 к R1."
    ]
  },
  {
    "time": [
      332.69,
      336.93
    ],
    "en": [
      "First off, you can see the source and destination IP addresses here."
    ],
    "ru": [
      "Во-первых, здесь вы можете увидеть IP-адреса источника и назначения."
    ]
  },
  {
    "time": [
      336.93,
      343.55899999999997
    ],
    "en": [
      "Now let’s look at the Ethernet header encapsulating the IP packet. Specifically, look here."
    ],
    "ru": [
      "Теперь давайте посмотрим на заголовок Ethernet, инкапсулирующий IP-пакет. В частности, смотрите здесь."
    ]
  },
  {
    "time": [
      343.55899999999997,
      351.52
    ],
    "en": [
      "Specifically, look here. Type: 802.1Q virtual LAN, and notice the hexadecimal 8100 value here."
    ],
    "ru": [
      "В частности, смотрите здесь. Введите: 802.1Q virtual LAN и обратите внимание на шестнадцатеричное значение 8100 здесь."
    ]
  },
  {
    "time": [
      351.52,
      357.03
    ],
    "en": [
      "I said in the previous video that dot1q is inserted after the source MAC address field,"
    ],
    "ru": [
      "В предыдущем видео я сказал, что точка dot1q вставляется после поля MAC-адреса источника,"
    ]
  },
  {
    "time": [
      357.03,
      360.12
    ],
    "en": [
      "and that is where the TYPE field usually goes."
    ],
    "ru": [
      "и это то место, где обычно находится поле TYPE."
    ]
  },
  {
    "time": [
      360.12,
      364.729
    ],
    "en": [
      "This here is the ‘TPID’ field of the dot1q tag."
    ],
    "ru": [
      "Это поле TPID тега dot1q."
    ]
  },
  {
    "time": [
      364.729,
      369.619
    ],
    "en": [
      "Under it, these are the rest of the fields of the 802.1Q tag."
    ],
    "ru": [
      "Под ним находятся остальные поля тега 802.1Q."
    ]
  },
  {
    "time": [
      369.619,
      373.12
    ],
    "en": [
      "First is the PCP, priority code point."
    ],
    "ru": [
      "Во-первых, это PCP, код приоритета."
    ]
  },
  {
    "time": [
      373.12,
      378.34
    ],
    "en": [
      "It has a value of 0, so no special priority is given to this frame."
    ],
    "ru": [
      "Он имеет значение 0, поэтому этому кадру не дается особого приоритета."
    ]
  },
  {
    "time": [
      378.34,
      382.169
    ],
    "en": [
      "Under it is the DEI, drop eligible indicator."
    ],
    "ru": [
      "Под ним находится индикатор соответствия критериям DEI."
    ]
  },
  {
    "time": [
      382.169,
      388.259
    ],
    "en": [
      "Again, a value of 0, so it won’t be dropped during times of network congestion."
    ],
    "ru": [
      "Опять же, значение 0, поэтому оно не будет сброшено во время перегрузки сети."
    ]
  },
  {
    "time": [
      388.259,
      394.05899999999997
    ],
    "en": [
      "Next is the most important field, the VLAN ID, which is 20, as you would expect."
    ],
    "ru": [
      "Далее следует самое важное поле - идентификатор VLAN, который, как и следовало ожидать, равен 20."
    ]
  },
  {
    "time": [
      394.05899999999997,
      398.99
    ],
    "en": [
      "The PC that sent the ping is in VLAN 20, and it’s not the native VLAN so that’s why"
    ],
    "ru": [
      "Компьютер, отправивший эхо-запрос, находится в VLAN 20, а не в собственной VLAN, поэтому"
    ]
  },
  {
    "time": [
      398.99,
      400.99
    ],
    "en": [
      "this frame is tagged."
    ],
    "ru": [
      "этот фрейм помечен."
    ]
  },
  {
    "time": [
      400.99,
      405.99
    ],
    "en": [
      "Finally, under that is the normal TYPE field of the Ethernet header, indicating that an"
    ],
    "ru": [
      "Наконец, под ним находится обычное поле TYPE заголовка Ethernet, указывающее, что"
    ]
  },
  {
    "time": [
      405.99,
      409.08
    ],
    "en": [
      "IPv4 packet is encapsulated."
    ],
    "ru": [
      "Пакет IPv4 инкапсулирован."
    ]
  },
  {
    "time": [
      409.08,
      416.539
    ],
    "en": [
      "It normally comes after the SOURCE MAC ADDRESS field, but now the dot1q tag is between them."
    ],
    "ru": [
      "Обычно он идет после поля ИСТОЧНИК MAC-АДРЕС, но теперь тег dot1q находится между ними."
    ]
  },
  {
    "time": [
      416.539,
      421.929
    ],
    "en": [
      "Next let’s look at the ICMP echo request going from R1 back to SW2."
    ],
    "ru": [
      "Теперь давайте посмотрим, как эхо-запрос ICMP возвращается от R1 к SW2."
    ]
  },
  {
    "time": [
      421.929,
      426.689
    ],
    "en": [
      "It will now be in VLAN10, because the destination is in VLAN10."
    ],
    "ru": [
      "Теперь он будет в VLAN10, потому что пункт назначения находится в VLAN10."
    ]
  },
  {
    "time": [
      426.689,
      434.479
    ],
    "en": [
      "VLAN10 is configured as the native VLAN on both R1 and SW2, so let’s see what’s different."
    ],
    "ru": [
      "VLAN10 настроена как собственная VLAN как на R1, так и на SW2, поэтому давайте посмотрим, в чем разница."
    ]
  },
  {
    "time": [
      434.479,
      440.849
    ],
    "en": [
      "Here’s the exact same ICMP echo request, the exact same layer 3 packet, as it is sent"
    ],
    "ru": [
      "Вот тот же эхо-запрос ICMP, точно такой же пакет уровня 3, который отправляется"
    ]
  },
  {
    "time": [
      440.849,
      444.749
    ],
    "en": [
      "from R1 to SW2. What’s different?"
    ],
    "ru": [
      "от R1 до SW2. Что по-другому?"
    ]
  },
  {
    "time": [
      444.749,
      449.129
    ],
    "en": [
      "What’s different? It has been encapsulated with a new Ethernet header, but this Ethernet header doesn’t"
    ],
    "ru": [
      "Что по-другому? Он был инкапсулирован с новым заголовком Ethernet, но этот заголовок Ethernet не"
    ]
  },
  {
    "time": [
      449.129,
      451.059
    ],
    "en": [
      "have a dot1q tag."
    ],
    "ru": [
      "есть тег dot1q."
    ]
  },
  {
    "time": [
      451.059,
      453.729
    ],
    "en": [
      "This is the native VLAN function at work."
    ],
    "ru": [
      "Это собственная функция VLAN в действии."
    ]
  },
  {
    "time": [
      453.729,
      459.8
    ],
    "en": [
      "Both R1 and SW2 understand that untagged frames belong to VLAN10, so there is no need to tag"
    ],
    "ru": [
      "И R1, и SW2 понимают, что немаркированные кадры принадлежат VLAN10, поэтому тегировать не нужно."
    ]
  },
  {
    "time": [
      459.8,
      463.379
    ],
    "en": [
      "each frame with dot1q."
    ],
    "ru": [
      "каждый кадр с dot1q."
    ]
  },
  {
    "time": [
      463.379,
      467.889
    ],
    "en": [
      "That ICMP echo request will continue to the destination, untagged all the way because"
    ],
    "ru": [
      "Этот эхо-запрос ICMP будет продолжен до места назначения без тегов, потому что"
    ]
  },
  {
    "time": [
      467.889,
      472.8
    ],
    "en": [
      "VLAN10 is configured as the native VLAN on all devices."
    ],
    "ru": [
      "VLAN10 настроен как собственный VLAN на всех устройствах."
    ]
  },
  {
    "time": [
      472.8,
      478.30899999999997
    ],
    "en": [
      "When this PC in VLAN10 sends the ICMP echo reply, it will be untagged until it reaches"
    ],
    "ru": [
      "Когда этот компьютер в VLAN10 отправляет эхо-ответ ICMP, он не будет помечен, пока не достигнет"
    ]
  },
  {
    "time": [
      478.30899999999997,
      485.49
    ],
    "en": [
      "R1, which will then tag it in VLAN20, and send it back to the PC that sent the request."
    ],
    "ru": [
      "R1, который затем пометит его в VLAN20 и отправит обратно на ПК, отправивший запрос."
    ]
  },
  {
    "time": [
      485.49,
      488.77
    ],
    "en": [
      "Now let’s take a quick look at the second method of configuring the native VLAN on a"
    ],
    "ru": [
      "Теперь давайте кратко рассмотрим второй метод настройки собственной VLAN на"
    ]
  },
  {
    "time": [
      488.77,
      494.27
    ],
    "en": [
      "router, which is simply configuring the IP address on the router’s physical interface,"
    ],
    "ru": [
      "маршрутизатор, который просто настраивает IP-адрес на физическом интерфейсе маршрутизатора,"
    ]
  },
  {
    "time": [
      494.27,
      499.28
    ],
    "en": [
      "no need for a subinterface or the encapsulation dot1q command."
    ],
    "ru": [
      "нет необходимости в подинтерфейсе или команде инкапсуляции dot1q."
    ]
  },
  {
    "time": [
      499.28,
      500.74
    ],
    "en": [
      "Here is how to configure it."
    ],
    "ru": [
      "Вот как это настроить."
    ]
  },
  {
    "time": [
      500.74,
      505.419
    ],
    "en": [
      "First, I used ‘NO INTERFACE G0/0.10’."
    ],
    "ru": [
      "Сначала я использовал «NO INTERFACE G0 / 0.10»."
    ]
  },
  {
    "time": [
      505.419,
      507.419
    ],
    "en": [
      "This deletes the subinterface."
    ],
    "ru": [
      "Это удаляет подинтерфейс."
    ]
  },
  {
    "time": [
      507.419,
      513.729
    ],
    "en": [
      "Then, I entered interface configuration mode from G0/0, and simply configured the appropriate"
    ],
    "ru": [
      "Затем я вошел в режим настройки интерфейса из G0 / 0 и просто настроил соответствующий"
    ]
  },
  {
    "time": [
      513.729,
      517.4
    ],
    "en": [
      "IP address on the interface."
    ],
    "ru": [
      "IP-адрес на интерфейсе."
    ]
  },
  {
    "time": [
      517.4,
      525.17
    ],
    "en": [
      "To help you visualize it, here is the output of SHOW RUNNING-CONFIG for G0/0 and its subinterfaces."
    ],
    "ru": [
      "Чтобы помочь вам визуализировать это, вот результат SHOW RUNNING-CONFIG для G0 / 0 и его подынтерфейсов."
    ]
  },
  {
    "time": [
      525.17,
      531.35
    ],
    "en": [
      "First off, these commands here on the physical interface are there by default, I didn’t configure them."
    ],
    "ru": [
      "Во-первых, эти команды здесь, в физическом интерфейсе, есть по умолчанию, я их не настраивал."
    ]
  },
  {
    "time": [
      531.35,
      535.47
    ],
    "en": [
      "configure them. The physical interface is configured normally with an IP address."
    ],
    "ru": [
      "настроить их. Физический интерфейс обычно настраивается с IP-адресом."
    ]
  },
  {
    "time": [
      535.47,
      539.35
    ],
    "en": [
      "This will be used for the native VLAN, VLAN10."
    ],
    "ru": [
      "Это будет использоваться для собственной VLAN, VLAN10."
    ]
  },
  {
    "time": [
      539.35,
      544.68
    ],
    "en": [
      "The other subinterfaces are just like we configured them in the previous video, with the encapsulation"
    ],
    "ru": [
      "Остальные субинтерфейсы такие же, как мы настроили их в предыдущем видео, с инкапсуляцией"
    ]
  },
  {
    "time": [
      544.68,
      548.41
    ],
    "en": [
      "dot1q command and their own IP address."
    ],
    "ru": [
      "dot1q и собственный IP-адрес."
    ]
  },
  {
    "time": [
      548.41,
      551.31
    ],
    "en": [
      "This will function just like the first option we saw."
    ],
    "ru": [
      "Это будет работать так же, как и первый вариант, который мы видели."
    ]
  },
  {
    "time": [
      551.31,
      560.74
    ],
    "en": [
      "SW2 will send VLAN10 packets in untagged frames to R1, and R1 will send them in untagged frames also."
    ],
    "ru": [
      "SW2 будет отправлять пакеты VLAN10 в немаркированных кадрах на R1, а R1 также будет отправлять их в немаркированных кадрах."
    ]
  },
  {
    "time": [
      560.74,
      565.36
    ],
    "en": [
      "frames also. As I said before, it is recommended that you just change the native VLAN to an unused VLAN"
    ],
    "ru": [
      "кадры тоже. Как я уже сказал, рекомендуется просто изменить собственную VLAN на неиспользуемую VLAN."
    ]
  },
  {
    "time": [
      565.36,
      570.09
    ],
    "en": [
      "for security purposes, but if you want to use the native VLAN, it’s important to know"
    ],
    "ru": [
      "в целях безопасности, но если вы хотите использовать собственный VLAN, важно знать"
    ]
  },
  {
    "time": [
      570.09,
      574.24
    ],
    "en": [
      "how to do it on a router, so these are two methods you can use."
    ],
    "ru": [
      "как это сделать на маршрутизаторе, поэтому вы можете использовать эти два метода."
    ]
  },
  {
    "time": [
      574.24,
      577.3
    ],
    "en": [
      "You might also need to know this for your exam, by the way."
    ],
    "ru": [
      "Кстати, вам может понадобиться это знать для экзамена."
    ]
  },
  {
    "time": [
      577.3,
      580.68
    ],
    "en": [
      "Here’s the network diagram once again."
    ],
    "ru": [
      "Вот еще раз схема сети."
    ]
  },
  {
    "time": [
      580.68,
      583.68
    ],
    "en": [
      "We have one router, and two switches."
    ],
    "ru": [
      "У нас есть один роутер и два свитча."
    ]
  },
  {
    "time": [
      583.68,
      587.7
    ],
    "en": [
      "Or I should say, two Layer 2 switches."
    ],
    "ru": [
      "Или, я бы сказал, два переключателя уровня 2."
    ]
  },
  {
    "time": [
      587.7,
      591.64
    ],
    "en": [
      "This is the icon we’ve been using for regular Layer 2 switches."
    ],
    "ru": [
      "Это значок, который мы использовали для обычных переключателей уровня 2."
    ]
  },
  {
    "time": [
      591.64,
      595.13
    ],
    "en": [
      "But let me introduce you to another type of switch."
    ],
    "ru": [
      "Но позвольте познакомить вас с переключателем другого типа."
    ]
  },
  {
    "time": [
      595.13,
      602.04
    ],
    "en": [
      "This is the icon I will use for what is called a Layer 3 switch, also known as a multilayer switch."
    ],
    "ru": [
      "Это значок, который я буду использовать для так называемого переключателя уровня 3, также известного как многослойный переключатель."
    ]
  },
  {
    "time": [
      602.04,
      606.63
    ],
    "en": [
      "switch. From now on I will use either term, Layer 3 switch or multilayer switch."
    ],
    "ru": [
      "выключатель. С этого момента я буду использовать любой термин, коммутатор уровня 3 или многоуровневый коммутатор."
    ]
  },
  {
    "time": [
      606.63,
      608.87
    ],
    "en": [
      "You should know both."
    ],
    "ru": [
      "Вы должны знать и то, и другое."
    ]
  },
  {
    "time": [
      608.87,
      614.36
    ],
    "en": [
      "By the way, these are the official Cisco icons for a layer 2 switch and a layer 3 switch,"
    ],
    "ru": [
      "Кстати, это официальные значки Cisco для коммутатора уровня 2 и коммутатора уровня 3,"
    ]
  },
  {
    "time": [
      614.36,
      620.03
    ],
    "en": [
      "but I think the ones I use in my videos look cleaner and more modern."
    ],
    "ru": [
      "но я думаю, что те, которые я использую в своих видео, выглядят чище и современнее."
    ]
  },
  {
    "time": [
      620.03,
      624.2
    ],
    "en": [
      "First let’s review exactly what a multilayer switch does."
    ],
    "ru": [
      "Сначала давайте точно посмотрим, что делает многослойный коммутатор."
    ]
  },
  {
    "time": [
      624.2,
      628.83
    ],
    "en": [
      "A multilayer switch is capable of both switching AND routing."
    ],
    "ru": [
      "Многоуровневый коммутатор поддерживает как коммутацию, так и маршрутизацию."
    ]
  },
  {
    "time": [
      628.83,
      631.13
    ],
    "en": [
      "It is Layer 3 aware."
    ],
    "ru": [
      "Он осведомлен о Уровне 3."
    ]
  },
  {
    "time": [
      631.13,
      636.59
    ],
    "en": [
      "A regular layer 2 switch is NOT layer 3 aware, it doesn’t think at all about IP addresses"
    ],
    "ru": [
      "Обычный коммутатор уровня 2 НЕ осведомлен об уровне 3, он вообще не думает об IP-адресах."
    ]
  },
  {
    "time": [
      636.59,
      639.12
    ],
    "en": [
      "or anything above Layer 2."
    ],
    "ru": [
      "или что-нибудь выше уровня 2."
    ]
  },
  {
    "time": [
      639.12,
      643.65
    ],
    "en": [
      "It only cares about Layer 2 information like MAC addresses."
    ],
    "ru": [
      "Он заботится только об информации уровня 2, такой как MAC-адреса."
    ]
  },
  {
    "time": [
      643.65,
      647.76
    ],
    "en": [
      "You can assign IP addresses to its interfaces like a router."
    ],
    "ru": [
      "Вы можете назначать IP-адреса его интерфейсам, как маршрутизатору."
    ]
  },
  {
    "time": [
      647.76,
      652.48
    ],
    "en": [
      "Previously we haven’t assigned any IP addresses to switches, only routers."
    ],
    "ru": [
      "Раньше мы не назначали никаких IP-адресов коммутаторам, только маршрутизаторам."
    ]
  },
  {
    "time": [
      652.48,
      659.43
    ],
    "en": [
      "With a Layer 3 switch, you can configure ‘routed ports’, which function like an interface on a router."
    ],
    "ru": [
      "С помощью коммутатора уровня 3 вы можете настроить «маршрутизируемые порты», которые работают как интерфейс на маршрутизаторе."
    ]
  },
  {
    "time": [
      659.43,
      665.3
    ],
    "en": [
      "on a router. Not just physical interfaces, but you can also create virtual interfaces for each VLAN,"
    ],
    "ru": [
      "на роутере. Не только физические интерфейсы, но вы также можете создавать виртуальные интерфейсы для каждой VLAN,"
    ]
  },
  {
    "time": [
      665.3,
      667.88
    ],
    "en": [
      "and assign IP addresses to those interfaces."
    ],
    "ru": [
      "и назначить этим интерфейсам IP-адреса."
    ]
  },
  {
    "time": [
      667.88,
      672.9
    ],
    "en": [
      "These are not separate physical interfaces, but virtual interfaces in the"
    ],
    "ru": [
      "Это не отдельные физические интерфейсы, а виртуальные интерфейсы в"
    ]
  },
  {
    "time": [
      672.9,
      678.45
    ],
    "en": [
      "software of the switch that can be used to route traffic at Layer 3."
    ],
    "ru": [
      "программное обеспечение коммутатора, которое можно использовать для маршрутизации трафика на уровне 3."
    ]
  },
  {
    "time": [
      678.45,
      683.55
    ],
    "en": [
      "You can configure routes, like static routes, on a multilayer switch, just like a router."
    ],
    "ru": [
      "Вы можете настроить маршруты, такие как статические маршруты, на многоуровневом коммутаторе, как в маршрутизаторе."
    ]
  },
  {
    "time": [
      683.55,
      688.34
    ],
    "en": [
      "Finally, it can be used for inter-VLAN routing."
    ],
    "ru": [
      "Наконец, его можно использовать для маршрутизации между VLAN."
    ]
  },
  {
    "time": [
      688.34,
      691.85
    ],
    "en": [
      "So far, we have looked at two methods of inter-VLAN routing."
    ],
    "ru": [
      "До сих пор мы рассматривали два метода маршрутизации между VLAN."
    ]
  },
  {
    "time": [
      691.85,
      698.87
    ],
    "en": [
      "The first one, in day 16’s video, was using one connection for each VLAN between the router and switch."
    ],
    "ru": [
      "Первый, в видео 16-го дня, использовал одно соединение для каждой VLAN между маршрутизатором и коммутатором."
    ]
  },
  {
    "time": [
      698.87,
      705.3
    ],
    "en": [
      "and switch. This works, but if you have many VLANs you probably won’t have enough interfaces on your router."
    ],
    "ru": [
      "и переключатель. Это работает, но если у вас много VLAN, у вас, вероятно, не будет достаточно интерфейсов на вашем маршрутизаторе."
    ]
  },
  {
    "time": [
      705.3,
      710.42
    ],
    "en": [
      "your router. The second method was router on a stick, which uses a single trunk connection which carries"
    ],
    "ru": [
      "ваш роутер. Второй метод - маршрутизатор на флешке, использующий единственное магистральное соединение, по которому"
    ]
  },
  {
    "time": [
      710.42,
      715.63
    ],
    "en": [
      "traffic from all VLANs between the switch and router for inter-VLAN routing."
    ],
    "ru": [
      "трафик из всех VLAN между коммутатором и маршрутизатором для маршрутизации между VLAN."
    ]
  },
  {
    "time": [
      715.63,
      720.91
    ],
    "en": [
      "This is efficient in terms of the number of interfaces, just one, but in a busy network"
    ],
    "ru": [
      "Это эффективно с точки зрения количества интерфейсов, всего один, но в загруженной сети."
    ]
  },
  {
    "time": [
      720.91,
      725.59
    ],
    "en": [
      "all of the traffic going to the router and back to the switch can cause network congestion."
    ],
    "ru": [
      "весь трафик, идущий к маршрутизатору и обратно к коммутатору, может вызвать перегрузку сети."
    ]
  },
  {
    "time": [
      725.59,
      730.97
    ],
    "en": [
      "So, in large networks, a multilayer switch is the preferred method of inter-VLAN routing."
    ],
    "ru": [
      "Таким образом, в больших сетях многоуровневый коммутатор является предпочтительным методом маршрутизации между VLAN."
    ]
  },
  {
    "time": [
      730.97,
      733.53
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
      733.53,
      742.21
    ],
    "en": [
      "Here is the topology again, now let’s replace SW2 with a multilayer switch. There we go."
    ],
    "ru": [
      "Вот снова топология, теперь давайте заменим SW2 на многоуровневый коммутатор. Итак, мы идем."
    ]
  },
  {
    "time": [
      742.21,
      744.3
    ],
    "en": [
      "There we go. And now let’s make one more change."
    ],
    "ru": [
      "Итак, мы идем. А теперь сделаем еще одно изменение."
    ]
  },
  {
    "time": [
      744.3,
      750.95
    ],
    "en": [
      "I’ve replaced the trunk link between SW2 and R1 with a point-to-point Layer 3 link,"
    ],
    "ru": [
      "Я заменил магистральный канал между SW2 и R1 на двухточечный канал уровня 3,"
    ]
  },
  {
    "time": [
      750.95,
      754.38
    ],
    "en": [
      "we will no longer run VLANs across this."
    ],
    "ru": [
      "мы больше не будем использовать VLAN через это."
    ]
  },
  {
    "time": [
      754.38,
      760.57
    ],
    "en": [
      "I’ll talk about this link later and assign IP addresses to R1’s G0/0 interface and"
    ],
    "ru": [
      "Я расскажу об этой ссылке позже и назначу IP-адреса интерфейсу G0 / 0 маршрутизатора R1 и"
    ]
  },
  {
    "time": [
      760.57,
      768.0
    ],
    "en": [
      "SW2’s G0/1 interface. But for now let’s focus on the inter-VLAN routing done on SW2."
    ],
    "ru": [
      "Интерфейс G0 / 1 SW2. Но пока давайте сосредоточимся на маршрутизации между VLAN, выполненной на SW2."
    ]
  },
  {
    "time": [
      768.0,
      772.66
    ],
    "en": [
      "on SW2. For review, when we used router on a stick for inter-VLAN routing, traffic being routed"
    ],
    "ru": [
      "на SW2. Для обзора, когда мы использовали маршрутизатор на флешке для маршрутизации между VLAN, маршрутизируемый трафик"
    ]
  },
  {
    "time": [
      772.66,
      780.36
    ],
    "en": [
      "between VLANs was sent to R1 first, and then sent back to SW2, and then forwarded to the destination."
    ],
    "ru": [
      "между виртуальными локальными сетями сначала отправлялся на R1, затем отправлялся обратно на SW2, а затем пересылался в пункт назначения."
    ]
  },
  {
    "time": [
      780.36,
      786.09
    ],
    "en": [
      "destination. For example, if this PC in VLAN20 wants to ping this PC in VLAN10, the traffic would"
    ],
    "ru": [
      "место назначения. Например, если этот компьютер в VLAN20 хочет отправить эхо-запрос на этот компьютер в VLAN10, трафик будет"
    ]
  },
  {
    "time": [
      786.09,
      788.46
    ],
    "en": [
      "follow a path like this."
    ],
    "ru": [
      "иди по такому пути."
    ]
  },
  {
    "time": [
      788.46,
      797.47
    ],
    "en": [
      "From the PC to SW2, from SW2 to R1, tagged in VLAN20, from R1 to SW2, tagged in VLAN10,"
    ],
    "ru": [
      "От ПК к SW2, от SW2 к R1, с тегами в VLAN20, от R1 до SW2, с тегами в VLAN10,"
    ]
  },
  {
    "time": [
      797.47,
      802.11
    ],
    "en": [
      "from SW2 to SW1, tagged in VLAN10, and finally to the destination."
    ],
    "ru": [
      "от SW2 к SW1, с тегами в VLAN10 и, наконец, до пункта назначения."
    ]
  },
  {
    "time": [
      802.11,
      805.98
    ],
    "en": [
      "However, SW2 is a multilayer switch."
    ],
    "ru": [
      "Однако SW2 - это многослойный переключатель."
    ]
  },
  {
    "time": [
      805.98,
      809.93
    ],
    "en": [
      "It doesn’t have to send the traffic to R1 for inter-VLAN routing."
    ],
    "ru": [
      "Нет необходимости отправлять трафик на маршрутизатор R1 для маршрутизации между VLAN."
    ]
  },
  {
    "time": [
      809.93,
      814.03
    ],
    "en": [
      "It can do that with something called ‘Switch Virtual Interfaces’."
    ],
    "ru": [
      "Это можно сделать с помощью так называемого «Switch Virtual Interfaces»."
    ]
  },
  {
    "time": [
      814.03,
      821.5
    ],
    "en": [
      "SVIs (or Switch Virtual Interfaces) are the virtual interfaces you can assign IP addresses to"
    ],
    "ru": [
      "SVI (или виртуальные интерфейсы коммутатора) - это виртуальные интерфейсы, которым вы можете назначать IP-адреса."
    ]
  },
  {
    "time": [
      821.5,
      824.529
    ],
    "en": [
      "i n a multilayer switch."
    ],
    "ru": [
      "в многослойном переключателе."
    ]
  },
  {
    "time": [
      824.529,
      830.279
    ],
    "en": [
      "Configure each PC to use the SVI (NOT the router) as their gateway address."
    ],
    "ru": [
      "Настройте каждый ПК на использование SVI (НЕ маршрутизатора) в качестве адреса шлюза."
    ]
  },
  {
    "time": [
      830.279,
      834.89
    ],
    "en": [
      "When using router on a stick, the router was used as the PC’s gateway."
    ],
    "ru": [
      "При использовании маршрутизатора на флешке маршрутизатор использовался в качестве шлюза ПК."
    ]
  },
  {
    "time": [
      834.89,
      838.36
    ],
    "en": [
      "This time, we will use the switch’s SVIs instead."
    ],
    "ru": [
      "На этот раз мы будем использовать SVI коммутатора."
    ]
  },
  {
    "time": [
      838.36,
      843.58
    ],
    "en": [
      "To send traffic to different subnets/VLANs, the PCs will send traffic to the switch, and"
    ],
    "ru": [
      "Для отправки трафика в разные подсети / VLAN компьютеры будут отправлять трафик на коммутатор и"
    ]
  },
  {
    "time": [
      843.58,
      847.87
    ],
    "en": [
      "the switch will route the traffic."
    ],
    "ru": [
      "коммутатор направит трафик."
    ]
  },
  {
    "time": [
      847.87,
      851.49
    ],
    "en": [
      "These are the SVIs I configured on SW2."
    ],
    "ru": [
      "Это SVI, которые я настроил на SW2."
    ]
  },
  {
    "time": [
      851.49,
      856.44
    ],
    "en": [
      "These are the same IP addresses I configured on R1 when doing router on a stick, the last"
    ],
    "ru": [
      "Это те же IP-адреса, которые я настроил на R1 при выполнении маршрутизатора на флешке, последний"
    ]
  },
  {
    "time": [
      856.44,
      858.8
    ],
    "en": [
      "usable IP address in each subnet."
    ],
    "ru": [
      "используемый IP-адрес в каждой подсети."
    ]
  },
  {
    "time": [
      858.8,
      863.291
    ],
    "en": [
      "So, these are already configured on each PC as their gateway addresses, so there’s no"
    ],
    "ru": [
      "Итак, они уже настроены на каждом ПК в качестве адресов шлюза, поэтому нет"
    ]
  },
  {
    "time": [
      863.291,
      867.22
    ],
    "en": [
      "need to change the PC configurations."
    ],
    "ru": [
      "необходимо изменить конфигурацию ПК."
    ]
  },
  {
    "time": [
      867.22,
      871.94
    ],
    "en": [
      "Now let’s take a look at the path the traffic between these two PCs takes this time."
    ],
    "ru": [
      "Теперь давайте посмотрим, как на этот раз проходит трафик между этими двумя компьютерами."
    ]
  },
  {
    "time": [
      871.94,
      874.23
    ],
    "en": [
      "The frame arrives at SW2."
    ],
    "ru": [
      "Кадр поступает в SW2."
    ]
  },
  {
    "time": [
      874.23,
      878.78
    ],
    "en": [
      "The destination is in the 192.168.1.0/26 subnet."
    ],
    "ru": [
      "Пункт назначения находится в подсети 192.168.1.0/26."
    ]
  },
  {
    "time": [
      878.78,
      885.53
    ],
    "en": [
      "SW2 now has its own routing table, so it looks up the destination in the routing table, and"
    ],
    "ru": [
      "SW2 теперь имеет свою собственную таблицу маршрутизации, поэтому он ищет пункт назначения в таблице маршрутизации и"
    ]
  },
  {
    "time": [
      885.53,
      889.14
    ],
    "en": [
      "sees that the destination is connected to its VLAN10 SVI."
    ],
    "ru": [
      "видит, что пункт назначения подключен к его VLAN10 SVI."
    ]
  },
  {
    "time": [
      889.14,
      892.28
    ],
    "en": [
      "So, the traffic is now routed to VLAN10."
    ],
    "ru": [
      "Итак, трафик теперь направляется в VLAN10."
    ]
  },
  {
    "time": [
      892.28,
      897.62
    ],
    "en": [
      "If SW2 doesn’t have the destination MAC address in its MAC address table, it will"
    ],
    "ru": [
      "Если SW2 не имеет MAC-адреса назначения в таблице MAC-адресов, он"
    ]
  },
  {
    "time": [
      897.62,
      900.5
    ],
    "en": [
      "flood the frame to all VLAN10 interfaces."
    ],
    "ru": [
      "залить фрейм на все интерфейсы VLAN10."
    ]
  },
  {
    "time": [
      900.5,
      906.19
    ],
    "en": [
      "But, let’s assume it has already learned the MAC address, so it forwards it to SW1"
    ],
    "ru": [
      "Но, предположим, он уже узнал MAC-адрес, поэтому он перенаправляет его в SW1."
    ]
  },
  {
    "time": [
      906.19,
      909.07
    ],
    "en": [
      "over its trunk interface, tagged as VLAN10."
    ],
    "ru": [
      "через свой магистральный интерфейс, помеченный как VLAN10."
    ]
  },
  {
    "time": [
      909.07,
      912.63
    ],
    "en": [
      "SW1 then forwards it to the destination."
    ],
    "ru": [
      "Затем SW1 пересылает его по назначению."
    ]
  },
  {
    "time": [
      912.63,
      918.35
    ],
    "en": [
      "Now, what if the hosts want to reach destinations outside of the LAN?"
    ],
    "ru": [
      "А что, если хосты хотят достичь пунктов назначения за пределами локальной сети?"
    ]
  },
  {
    "time": [
      918.35,
      923.76
    ],
    "en": [
      "For example, I’ve added a cloud connected to R1 to represent the Internet."
    ],
    "ru": [
      "Например, я добавил облако, подключенное к R1, для представления Интернета."
    ]
  },
  {
    "time": [
      923.76,
      928.8
    ],
    "en": [
      "Because SW2 is their default gateway, any packets destined outside of their subnet will"
    ],
    "ru": [
      "Поскольку SW2 является их шлюзом по умолчанию, любые пакеты, отправленные за пределы их подсети, будут"
    ]
  },
  {
    "time": [
      928.8,
      931.32
    ],
    "en": [
      "be sent to SW2."
    ],
    "ru": [
      "быть отправлено в SW2."
    ]
  },
  {
    "time": [
      931.32,
      938.03
    ],
    "en": [
      "But our previous router on a stick configurations for the connection between SW2 and R1 will no longer work."
    ],
    "ru": [
      "Но наши предыдущие конфигурации маршрутизатора на флешке для соединения между SW2 и R1 больше не будут работать."
    ]
  },
  {
    "time": [
      938.03,
      943.71
    ],
    "en": [
      "no longer work. In addition to configuring virtual interfaces, SVIs, on multilayer switches, we can also"
    ],
    "ru": [
      "больше не работает. Помимо настройки виртуальных интерфейсов, SVI, на многоуровневых коммутаторах, мы также можем"
    ]
  },
  {
    "time": [
      943.71,
      949.59
    ],
    "en": [
      "configure their physical interfaces to operate like a router interface, rather than a switchport."
    ],
    "ru": [
      "настроить свои физические интерфейсы для работы как интерфейс маршрутизатора, а не коммутатора."
    ]
  },
  {
    "time": [
      949.59,
      957.27
    ],
    "en": [
      "a switchport. So, we can assign the subnet 192.168.1.192/30 for this point-to-point link between SW2 and"
    ],
    "ru": [
      "коммутатор. Итак, мы можем назначить подсеть 192.168.1.192/30 для этого соединения точка-точка между SW2 и"
    ]
  },
  {
    "time": [
      957.27,
      967.23
    ],
    "en": [
      "R1, with SW2’s G0/1 interface having an IP address of 192.168.1.193, and R1’s G0/0"
    ],
    "ru": [
      "R1 с интерфейсом G0 / 1 SW2, имеющим IP-адрес 192.168.1.193, и G0 / 0 маршрутизатора R1"
    ]
  },
  {
    "time": [
      967.23,
      972.5
    ],
    "en": [
      "interface having an IP address of 192.168.1.194."
    ],
    "ru": [
      "интерфейс с IP-адресом 192.168.1.194."
    ]
  },
  {
    "time": [
      972.5,
      978.72
    ],
    "en": [
      "Then, we configure a default route on SW2 pointing toward R1, so all traffic destined"
    ],
    "ru": [
      "Затем мы настраиваем маршрут по умолчанию на SW2, указывающий на R1, поэтому весь трафик предназначен для"
    ]
  },
  {
    "time": [
      978.72,
      981.72
    ],
    "en": [
      "outside of the LAN will be sent to R1."
    ],
    "ru": [
      "за пределами LAN будут отправлены на R1."
    ]
  },
  {
    "time": [
      981.72,
      987.67
    ],
    "en": [
      "I already covered static routes, including default routes, in previous videos, so I won’t"
    ],
    "ru": [
      "Я уже рассмотрел статические маршруты, включая маршруты по умолчанию, в предыдущих видео, поэтому я не буду"
    ]
  },
  {
    "time": [
      987.67,
      992.16
    ],
    "en": [
      "explain the concept in depth again, but I will show you the configurations once more."
    ],
    "ru": [
      "еще раз подробно объясните концепцию, но я еще раз покажу вам конфигурации."
    ]
  },
  {
    "time": [
      992.16,
      997.56
    ],
    "en": [
      "So, let’s do that, let’s get into the configurations, starting first with the point-to-point"
    ],
    "ru": [
      "Итак, давайте сделаем это, давайте перейдем к настройкам, начнем сначала с двухточечной"
    ]
  },
  {
    "time": [
      997.56,
      1004.75
    ],
    "en": [
      "link between SW2 and R1, and then the SVIs on SW2."
    ],
    "ru": [
      "соединение между SW2 и R1, а затем SVI на SW2."
    ]
  },
  {
    "time": [
      1004.75,
      1012.94
    ],
    "en": [
      "First off, remove R1’s router on a stick configurations and configure that new IP address on G0/0."
    ],
    "ru": [
      "Прежде всего, удалите маршрутизатор маршрутизатора R1 на флешке и настройте этот новый IP-адрес на G0 / 0."
    ]
  },
  {
    "time": [
      1012.94,
      1021.29
    ],
    "en": [
      "on G0/0. First off, I delete each subinterface with this command, NO INTERFACE G0/0.10, .20, and .30."
    ],
    "ru": [
      "на G0 / 0. Во-первых, я удаляю каждый подинтерфейс с помощью этой команды NO INTERFACE G0 / 0.10, .20 и .30."
    ]
  },
  {
    "time": [
      1021.29,
      1030.11
    ],
    "en": [
      "Then, I use the command DEFAULT INTERFACE G0/0, to reset G0/0 to it’s default settings."
    ],
    "ru": [
      "Затем я использую команду ИНТЕРФЕЙС ПО УМОЛЧАНИЮ G0 / 0, чтобы сбросить G0 / 0 до настроек по умолчанию."
    ]
  },
  {
    "time": [
      1030.11,
      1035.329
    ],
    "en": [
      "After that, I used SHOW IP INTERFACE BRIEF to check the interfaces."
    ],
    "ru": [
      "После этого я использовал SHOW IP INTERFACE BRIEF для проверки интерфейсов."
    ]
  },
  {
    "time": [
      1035.329,
      1039.63
    ],
    "en": [
      "Notice the status of the subinterfaces, it says DELETED."
    ],
    "ru": [
      "Обратите внимание на статус подынтерфейсов, он говорит УДАЛЕНО."
    ]
  },
  {
    "time": [
      1039.63,
      1043.769
    ],
    "en": [
      "Although we have successfully deleted the subinterfaces, they will remain here with"
    ],
    "ru": [
      "Хотя мы успешно удалили подынтерфейсы, они останутся здесь с"
    ]
  },
  {
    "time": [
      1043.769,
      1046.869
    ],
    "en": [
      "a ‘deleted’ status unless we reload the router."
    ],
    "ru": [
      "статус «удален», если мы не перезагрузим маршрутизатор."
    ]
  },
  {
    "time": [
      1046.869,
      1051.12
    ],
    "en": [
      "That’s no problem though, so I’ll just leave them."
    ],
    "ru": [
      "Но это не проблема, так что я просто оставлю их."
    ]
  },
  {
    "time": [
      1051.12,
      1056.6
    ],
    "en": [
      "Then I simply enter interface configuration mode for G0/0 and configure the new IP address,"
    ],
    "ru": [
      "Затем я просто вхожу в режим настройки интерфейса для G0 / 0 и настраиваю новый IP-адрес,"
    ]
  },
  {
    "time": [
      1056.6,
      1059.169
    ],
    "en": [
      "with a /30 subnet mask."
    ],
    "ru": [
      "с маской подсети / 30."
    ]
  },
  {
    "time": [
      1059.169,
      1067.88
    ],
    "en": [
      "I use SHOW IP INTERFACE BRIEF again, and you can see that the new IP address has been successfully configured."
    ],
    "ru": [
      "Я снова использую SHOW IP INTERFACE BRIEF, и вы видите, что новый IP-адрес был успешно настроен."
    ]
  },
  {
    "time": [
      1067.88,
      1071.24
    ],
    "en": [
      "configured. Now let’s look at the switch’s side of the point-to-point connection."
    ],
    "ru": [
      "настроен. Теперь давайте посмотрим на двухточечное соединение со стороны переключателя."
    ]
  },
  {
    "time": [
      1071.24,
      1078.16
    ],
    "en": [
      "First, I reset the G0/1 interface to its default setting with the DEFAULT INTERFACE command,"
    ],
    "ru": [
      "Сначала я сбрасываю интерфейс G0 / 1 к настройкам по умолчанию с помощью команды DEFAULT INTERFACE,"
    ]
  },
  {
    "time": [
      1078.16,
      1083.73
    ],
    "en": [
      "because it was configured as a trunk for router on a stick because of the previous lab."
    ],
    "ru": [
      "потому что он был настроен как магистраль для маршрутизатора на флешке из-за предыдущей лабораторной работы."
    ]
  },
  {
    "time": [
      1083.73,
      1089.45
    ],
    "en": [
      "Next up is a very important command, one you must not forget. IP ROUTING."
    ],
    "ru": [
      "Далее идет очень важная команда, которую вы не должны забывать. IP-МАРШРУТИЗАЦИЯ."
    ]
  },
  {
    "time": [
      1089.45,
      1095.919
    ],
    "en": [
      "IP ROUTING. This command enables Layer 3 routing on the switch, it lets it build its own routing table like a router."
    ],
    "ru": [
      "IP-МАРШРУТИЗАЦИЯ. Эта команда включает маршрутизацию уровня 3 на коммутаторе, она позволяет ему создавать свою собственную таблицу маршрутизации, как маршрутизатор."
    ]
  },
  {
    "time": [
      1095.919,
      1100.799
    ],
    "en": [
      "like a router. If you forget this command, your inter-VLAN routing will not work."
    ],
    "ru": [
      "как роутер. Если вы забудете эту команду, ваша маршрутизация между VLAN не будет работать."
    ]
  },
  {
    "time": [
      1100.799,
      1106.119
    ],
    "en": [
      "Next up is another important command, NO SWITCHPORT on the interface."
    ],
    "ru": [
      "Далее идет еще одна важная команда NO SWITCHPORT на интерфейсе."
    ]
  },
  {
    "time": [
      1106.119,
      1112.789
    ],
    "en": [
      "This is the command that changes the interface from a Layer 2 switchport to a Layer 3 routed port."
    ],
    "ru": [
      "Это команда, которая изменяет интерфейс с порта коммутатора уровня 2 на маршрутизируемый порт уровня 3."
    ]
  },
  {
    "time": [
      1112.789,
      1115.929
    ],
    "en": [
      "port. Now you will be able to assign an IP address to it."
    ],
    "ru": [
      "порт. Теперь вы можете назначить ему IP-адрес."
    ]
  },
  {
    "time": [
      1115.929,
      1125.549
    ],
    "en": [
      "So, I assigned 192.168.1.193/30, and used show IP interface brief, and as you can see"
    ],
    "ru": [
      "Итак, я назначил 192.168.1.193/30 и использовал краткое описание интерфейса IP, и, как вы можете видеть,"
    ]
  },
  {
    "time": [
      1125.549,
      1129.539
    ],
    "en": [
      "the IP address is assigned to it just like a router interface."
    ],
    "ru": [
      "IP-адрес назначается ему как интерфейсу маршрутизатора."
    ]
  },
  {
    "time": [
      1129.539,
      1134.13
    ],
    "en": [
      "Last up is the default route pointing to R1."
    ],
    "ru": [
      "Последним идет маршрут по умолчанию, указывающий на R1."
    ]
  },
  {
    "time": [
      1134.13,
      1142.83
    ],
    "en": [
      "As I’ve already shown you in a previous video, the command is IP ROUTE 0.0.0.0 0.0.0.0,"
    ],
    "ru": [
      "Как я уже показал вам в предыдущем видео, это команда IP ROUTE 0.0.0.0 0.0.0.0,"
    ]
  },
  {
    "time": [
      1142.83,
      1150.169
    ],
    "en": [
      "followed by the next hop, in this case 192.168.1.194, which is R1."
    ],
    "ru": [
      "за которым следует следующий переход, в данном случае 192.168.1.194, который является R1."
    ]
  },
  {
    "time": [
      1150.169,
      1156.07
    ],
    "en": [
      "I then used SHOW IP ROUTE to confirm, and you can see that SW2 now has a routing table,"
    ],
    "ru": [
      "Затем я использовал SHOW IP ROUTE для подтверждения, и вы можете видеть, что SW2 теперь имеет таблицу маршрутизации,"
    ]
  },
  {
    "time": [
      1156.07,
      1162.499
    ],
    "en": [
      "with a default route pointing to R1, and connected and local routes for the routed interface we configured."
    ],
    "ru": [
      "с маршрутом по умолчанию, указывающим на R1, и подключенными и локальными маршрутами для маршрутизируемого интерфейса, который мы настроили."
    ]
  },
  {
    "time": [
      1162.499,
      1164.889
    ],
    "en": [
      "we configured. And one additional command you can use to"
    ],
    "ru": [
      "мы настроили. И еще одна команда, которую вы можете использовать для"
    ]
  },
  {
    "time": [
      1164.889,
      1171.799
    ],
    "en": [
      "confirm is SHOW INTERFACES STATUS, which I showed in a previous video on Ethernet switching."
    ],
    "ru": [
      "Подтвердите это ПОКАЗАТЬ СОСТОЯНИЕ ИНТЕРФЕЙСОВ, которое я показал в предыдущем видео о коммутации Ethernet."
    ]
  },
  {
    "time": [
      1171.799,
      1177.59
    ],
    "en": [
      "Notice that, in the VLAN column, instead of a VLAN number G0/1 displays ‘ROUTED’."
    ],
    "ru": [
      "Обратите внимание, что в столбце VLAN вместо номера VLAN G0 / 1 отображается «ROUTED»."
    ]
  },
  {
    "time": [
      1177.59,
      1183.24
    ],
    "en": [
      "Okay, now let’s move on to configure those SVIs on SW2."
    ],
    "ru": [
      "Хорошо, теперь перейдем к настройке этих SVI на SW2."
    ]
  },
  {
    "time": [
      1183.24,
      1186.789
    ],
    "en": [
      "SVI configuration is very simple."
    ],
    "ru": [
      "Конфигурация SVI очень проста."
    ]
  },
  {
    "time": [
      1186.789,
      1189.97
    ],
    "en": [
      "Here are the configurations for SW2."
    ],
    "ru": [
      "Вот конфигурации для SW2."
    ]
  },
  {
    "time": [
      1189.97,
      1197.65
    ],
    "en": [
      "Use the command INTERFACE VLAN10, for example, to create an SVI for VLAN10 and configure it."
    ],
    "ru": [
      "Используйте команду INTERFACE VLAN10, например, чтобы создать SVI для VLAN10 и настроить его."
    ]
  },
  {
    "time": [
      1197.65,
      1201.809
    ],
    "en": [
      "it. Then assign an IP address, and use NO SHUTDOWN to enable it."
    ],
    "ru": [
      "Это. Затем назначьте IP-адрес и используйте NO SHUTDOWN, чтобы включить его."
    ]
  },
  {
    "time": [
      1201.809,
      1208.119
    ],
    "en": [
      "SVIs are shutdown but default, so remember to use the NO SHUTDOWN command to enable them."
    ],
    "ru": [
      "SVI отключены, но по умолчанию, поэтому не забудьте использовать команду NO SHUTDOWN, чтобы включить их."
    ]
  },
  {
    "time": [
      1208.119,
      1216.88
    ],
    "en": [
      "I repeated the process for VLAN20 and VLAN30, and that’s all there is to configuring SVIs, very simple."
    ],
    "ru": [
      "Я повторил процесс для VLAN20 и VLAN30, и это все, что нужно для настройки SVI, очень просто."
    ]
  },
  {
    "time": [
      1216.88,
      1223.19
    ],
    "en": [
      "very simple. Now, just to demonstrate one problem you might encounter, I created another SVI for a VLAN"
    ],
    "ru": [
      "очень простой. Теперь, чтобы продемонстрировать одну проблему, с которой вы можете столкнуться, я создал другой SVI для VLAN."
    ]
  },
  {
    "time": [
      1223.19,
      1231.309
    ],
    "en": [
      "that doesn’t exist on the switch, VLAN40, and assigned an IP address, 40.40.40.40/24."
    ],
    "ru": [
      "который не существует на коммутаторе, VLAN40, и ему назначен IP-адрес, 40.40.40.40/24."
    ]
  },
  {
    "time": [
      1231.309,
      1235.21
    ],
    "en": [
      "I also made sure to enable it with NO SHUTDOWN."
    ],
    "ru": [
      "Я также удостоверился, что включил его БЕЗ ВЫКЛЮЧЕНИЯ."
    ]
  },
  {
    "time": [
      1235.21,
      1240.799
    ],
    "en": [
      "However, look at the SVI itself. It is DOWN/DOWN."
    ],
    "ru": [
      "Однако посмотрите на сам SVI. Это ВНИЗ / ВНИЗ."
    ]
  },
  {
    "time": [
      1240.799,
      1241.87
    ],
    "en": [
      "It is DOWN/DOWN. Why is that?"
    ],
    "ru": [
      "Это ВНИЗ / ВНИЗ. Это почему?"
    ]
  },
  {
    "time": [
      1241.87,
      1245.809
    ],
    "en": [
      "Well, it's because the VLAN doesn’t exist on the switch."
    ],
    "ru": [
      "Это потому, что на коммутаторе нет VLAN."
    ]
  },
  {
    "time": [
      1245.809,
      1250.659
    ],
    "en": [
      "Let’s take a look at the conditions required for an SVI to be UP/UP."
    ],
    "ru": [
      "Давайте посмотрим на условия, необходимые для того, чтобы SVI был ВВЕРХ / ВВЕРХ."
    ]
  },
  {
    "time": [
      1250.659,
      1254.36
    ],
    "en": [
      "First, the VLAN must exist on the switch."
    ],
    "ru": [
      "Во-первых, на коммутаторе должна существовать VLAN."
    ]
  },
  {
    "time": [
      1254.36,
      1261.21
    ],
    "en": [
      "In this case, we haven’t created VLAN40 on the switch, so the SVI won’t become UP/UP."
    ],
    "ru": [
      "В этом случае мы не создали VLAN40 на коммутаторе, поэтому SVI не станет UP / UP."
    ]
  },
  {
    "time": [
      1261.21,
      1267.59
    ],
    "en": [
      "When you assign an access port to a VLAN, if the VLAN doesn’t yet exist the switch"
    ],
    "ru": [
      "Когда вы назначаете порт доступа для VLAN, если эта VLAN еще не существует, коммутатор"
    ]
  },
  {
    "time": [
      1267.59,
      1269.669
    ],
    "en": [
      "will automatically create the VLAN."
    ],
    "ru": [
      "автоматически создаст VLAN."
    ]
  },
  {
    "time": [
      1269.669,
      1277.929
    ],
    "en": [
      "However, if you create an SVI for a VLAN that doesn’t exist yet, the switch WILL NOT automatically create the VLAN."
    ],
    "ru": [
      "Однако, если вы создаете SVI для еще не существующей VLAN, коммутатор НЕ БУДЕТ автоматически создавать VLAN."
    ]
  },
  {
    "time": [
      1277.929,
      1284.2
    ],
    "en": [
      "create the VLAN. Second, the switch must have at least one access port in the VLAN in an up/up state,"
    ],
    "ru": [
      "создать VLAN. Во-вторых, коммутатор должен иметь хотя бы один порт доступа в VLAN в состоянии up / up,"
    ]
  },
  {
    "time": [
      1284.2,
      1290.61
    ],
    "en": [
      "and/or one trunk port that allows the VLAN that is in an up/up state."
    ],
    "ru": [
      "и / или один магистральный порт, который разрешает работу VLAN в активном / активном состоянии."
    ]
  },
  {
    "time": [
      1290.61,
      1296.22
    ],
    "en": [
      "For example, in the topology we’re using here, SW2 has hosts connected in VLAN10 and"
    ],
    "ru": [
      "Например, в используемой здесь топологии SW2 имеет узлы, подключенные к VLAN10 и"
    ]
  },
  {
    "time": [
      1296.22,
      1300.47
    ],
    "en": [
      "VLAN20, so their SVIs can go up."
    ],
    "ru": [
      "VLAN20, поэтому их SVI могут увеличиваться."
    ]
  },
  {
    "time": [
      1300.47,
      1307.299
    ],
    "en": [
      "There are no connected hosts in VLAN30, however it has a trunk port, G0/0, which allows VLAN30"
    ],
    "ru": [
      "В VLAN30 нет подключенных хостов, но есть магистральный порт G0 / 0, который позволяет использовать VLAN30."
    ]
  },
  {
    "time": [
      1307.299,
      1313.549
    ],
    "en": [
      "over it, so VLAN30’s SVI is up as well. Okay, next rule."
    ],
    "ru": [
      "поверх него, так что SVI VLAN30 также работает. Хорошо, следующее правило."
    ]
  },
  {
    "time": [
      1313.549,
      1316.59
    ],
    "en": [
      "Okay, next rule. The VLAN must not be shutdown."
    ],
    "ru": [
      "Хорошо, следующее правило. VLAN нельзя отключать."
    ]
  },
  {
    "time": [
      1316.59,
      1321.309
    ],
    "en": [
      "Note that this is NOT the SVI, but the VLAN itself."
    ],
    "ru": [
      "Обратите внимание, что это НЕ SVI, а сама VLAN."
    ]
  },
  {
    "time": [
      1321.309,
      1327.38
    ],
    "en": [
      "You can enter VLAN configuration mode, and disable the VLAN with the SHUTDOWN command."
    ],
    "ru": [
      "Вы можете войти в режим конфигурации VLAN и отключить VLAN с помощью команды SHUTDOWN."
    ]
  },
  {
    "time": [
      1327.38,
      1332.549
    ],
    "en": [
      "If you do this, the SVI for that VLAN can’t become UP/UP."
    ],
    "ru": [
      "Если вы сделаете это, SVI для этой VLAN не сможет перейти в режим UP / UP."
    ]
  },
  {
    "time": [
      1332.549,
      1336.749
    ],
    "en": [
      "Note that, I think you can’t do this command in packet tracer, so you’ll need a real"
    ],
    "ru": [
      "Обратите внимание: я думаю, вы не можете выполнить эту команду в пакетном трассировщике, поэтому вам понадобится настоящий"
    ]
  },
  {
    "time": [
      1336.749,
      1339.869
    ],
    "en": [
      "Cisco switch if you want to try this one out."
    ],
    "ru": [
      "Коммутатор Cisco, если вы хотите попробовать это."
    ]
  },
  {
    "time": [
      1339.869,
      1345.779
    ],
    "en": [
      "Finally, if the SVI itself is shutdown, it obviously won’t be up/up, so make sure to"
    ],
    "ru": [
      "Наконец, если сам SVI выключен, очевидно, что он не будет работать / работать, поэтому обязательно"
    ]
  },
  {
    "time": [
      1345.779,
      1353.009
    ],
    "en": [
      "use the NO SHUTDOWN command after you create an SVI, because they are shutdown by default."
    ],
    "ru": [
      "используйте команду NO SHUTDOWN после создания SVI, потому что они отключены по умолчанию."
    ]
  },
  {
    "time": [
      1353.009,
      1357.559
    ],
    "en": [
      "I used the SHOW IP ROUTE command again, and you can see connected and local routes have"
    ],
    "ru": [
      "Я снова использовал команду SHOW IP ROUTE, и вы можете увидеть, что подключенные и локальные маршруты имеют"
    ]
  },
  {
    "time": [
      1357.559,
      1363.289
    ],
    "en": [
      "been added to the route table for the SVIs we created, all shown as directly connected"
    ],
    "ru": [
      "были добавлены в таблицу маршрутов для созданных нами SVI, все они показаны как подключенные напрямую"
    ]
  },
  {
    "time": [
      1363.289,
      1366.169
    ],
    "en": [
      "to the SVI for each VLAN."
    ],
    "ru": [
      "к SVI для каждой VLAN."
    ]
  },
  {
    "time": [
      1366.169,
      1370.419
    ],
    "en": [
      "Okay, so our configurations are all done."
    ],
    "ru": [
      "Итак, наши настройки готовы."
    ]
  },
  {
    "time": [
      1370.419,
      1375.85
    ],
    "en": [
      "The next video will be a practice lab, so you can get some hands-on practice doing these configurations."
    ],
    "ru": [
      "Следующее видео будет практической лабораторной работой, так что вы сможете получить практическую практику, выполняя эти конфигурации."
    ]
  },
  {
    "time": [
      1375.85,
      1380.62
    ],
    "en": [
      "configurations. If you have trouble remembering the commands, I highly recommend doing practice labs, and"
    ],
    "ru": [
      "конфигурации. Если у вас проблемы с запоминанием команд, я настоятельно рекомендую выполнить практические задания и"
    ]
  },
  {
    "time": [
      1380.62,
      1384.389
    ],
    "en": [
      "doing them multiple times, until you feel confident."
    ],
    "ru": [
      "делать их несколько раз, пока не почувствуете себя уверенно."
    ]
  },
  {
    "time": [
      1384.389,
      1392.509
    ],
    "en": [
      "So, if one of our PCs wants to reach a destination outside of the LAN, it will be sent to SW2,"
    ],
    "ru": [
      "Итак, если один из наших ПК хочет достичь пункта назначения за пределами локальной сети, он будет отправлен в SW2,"
    ]
  },
  {
    "time": [
      1392.509,
      1396.87
    ],
    "en": [
      "which will send it to R1, which will take care of it from there."
    ],
    "ru": [
      "который отправит его R1, который позаботится об этом оттуда."
    ]
  },
  {
    "time": [
      1396.87,
      1401.32
    ],
    "en": [
      "Note that we didn’t actually configure any routes on R1 in this lab, I’m just focusing"
    ],
    "ru": [
      "Обратите внимание, что на самом деле мы не настраивали маршруты на R1 в этой лабораторной работе, я просто сосредотачиваюсь на"
    ]
  },
  {
    "time": [
      1401.32,
      1404.97
    ],
    "en": [
      "on inter-VLAN routing at this point."
    ],
    "ru": [
      "о маршрутизации между VLAN на этом этапе."
    ]
  },
  {
    "time": [
      1404.97,
      1409.49
    ],
    "en": [
      "If one of our PCs wants to reach a destination in the LAN, but in a different subnet and"
    ],
    "ru": [
      "Если один из наших ПК хочет достичь пункта назначения в локальной сети, но в другой подсети и"
    ]
  },
  {
    "time": [
      1409.49,
      1416.299
    ],
    "en": [
      "VLAN, SW2 will do the inter-VLAN routing without having to send the traffic to R1."
    ],
    "ru": [
      "VLAN, SW2 будет выполнять маршрутизацию между VLAN без необходимости отправлять трафик на R1."
    ]
  },
  {
    "time": [
      1416.299,
      1422.86
    ],
    "en": [
      "Okay, before moving on to the quiz let’s review what we covered in today’s video."
    ],
    "ru": [
      "Хорошо, прежде чем перейти к викторине, давайте рассмотрим то, что мы рассмотрели в сегодняшнем видео."
    ]
  },
  {
    "time": [
      1422.86,
      1425.99
    ],
    "en": [
      "I showed you two ways of configuring the native VLAN on a router."
    ],
    "ru": [
      "Я показал вам два способа настройки собственной VLAN на маршрутизаторе."
    ]
  },
  {
    "time": [
      1425.99,
      1430.96
    ],
    "en": [
      "Usually, it’s best to just set the native VLAN to an unused VLAN, but if you want to"
    ],
    "ru": [
      "Обычно лучше всего настроить собственную VLAN на неиспользуемую VLAN, но если вы хотите"
    ]
  },
  {
    "time": [
      1430.96,
      1435.739
    ],
    "en": [
      "use the native VLAN feature, you should know how to configure it on a router."
    ],
    "ru": [
      "используйте встроенную функцию VLAN, вы должны знать, как ее настроить на маршрутизаторе."
    ]
  },
  {
    "time": [
      1435.739,
      1441.159
    ],
    "en": [
      "We looked at some wireshark captures, both a dot1q-tagged frame, and one that was untagged"
    ],
    "ru": [
      "Мы рассмотрели несколько снимков wirehark, как кадра с тегами dot1q, так и кадра без тегов."
    ]
  },
  {
    "time": [
      1441.159,
      1443.369
    ],
    "en": [
      "because it was in the native VLAN."
    ],
    "ru": [
      "потому что это было в родной VLAN."
    ]
  },
  {
    "time": [
      1443.369,
      1448.48
    ],
    "en": [
      "Finally, I showed you the final method of inter-VLAN routing, using a type of switch"
    ],
    "ru": [
      "Наконец, я показал вам последний метод маршрутизации между VLAN с использованием типа коммутатора"
    ]
  },
  {
    "time": [
      1448.48,
      1454.94
    ],
    "en": [
      "I hadn’t talked about before, a Layer 3 switch, also known as a multilayer switch."
    ],
    "ru": [
      "Раньше я не говорил о коммутаторе уровня 3, также известном как многослойный коммутатор."
    ]
  },
  {
    "time": [
      1454.94,
      1461.35
    ],
    "en": [
      "By configuring SVIs, switch virtual interfaces, on a multilayer switch, you can route between"
    ],
    "ru": [
      "Настраивая SVI, переключать виртуальные интерфейсы на многоуровневом коммутаторе, вы можете выполнять маршрутизацию между"
    ]
  },
  {
    "time": [
      1461.35,
      1465.299
    ],
    "en": [
      "subnets and VLANs without having to send the traffic to a router."
    ],
    "ru": [
      "подсети и VLAN без необходимости отправлять трафик на маршрутизатор."
    ]
  },
  {
    "time": [
      1465.299,
      1469.409
    ],
    "en": [
      "It’s like having a mini router within the switch."
    ],
    "ru": [
      "Это как мини-роутер внутри коммутатора."
    ]
  },
  {
    "time": [
      1469.409,
      1475.5
    ],
    "en": [
      "These last two topics, DTP and VTP, will be left for the next lecture video."
    ],
    "ru": [
      "Эти последние две темы, DTP и VTP, останутся для следующего видео лекции."
    ]
  },
  {
    "time": [
      1475.5,
      1478.96
    ],
    "en": [
      "Let’s move on to today’s quiz."
    ],
    "ru": [
      "Переходим к сегодняшней викторине."
    ]
  },
  {
    "time": [
      1478.96,
      1483.41
    ],
    "en": [
      "As I mentioned at the beginning of the video, I’m happy to announce that, after my usual"
    ],
    "ru": [
      "Как я уже упоминал в начале видео, я рад сообщить, что после обычного"
    ]
  },
  {
    "time": [
      1483.41,
      1488.269
    ],
    "en": [
      "quiz, a few simple questions to help you review what we’ve learned, I will be featuring"
    ],
    "ru": [
      "викторина, несколько простых вопросов, которые помогут вам повторить то, что мы узнали, я расскажу"
    ]
  },
  {
    "time": [
      1488.269,
      1495.279
    ],
    "en": [
      "one question from Boson’s ExSim, which is a fantastic set of practice exams for the CCNA."
    ],
    "ru": [
      "один вопрос от ExSim компании Boson, который представляет собой фантастический набор практических экзаменов для CCNA."
    ]
  },
  {
    "time": [
      1495.279,
      1500.919
    ],
    "en": [
      "CCNA. I used Boson ExSim for my CCNA and CCNP, and I really think they were what allowed me to"
    ],
    "ru": [
      "CCNA. Я использовал Boson ExSim для своих CCNA и CCNP, и я действительно думаю, что они позволили мне"
    ]
  },
  {
    "time": [
      1500.919,
      1503.84
    ],
    "en": [
      "pass all of my exams on the first try."
    ],
    "ru": [
      "сдать все экзамены с первой попытки."
    ]
  },
  {
    "time": [
      1503.84,
      1507.36
    ],
    "en": [
      "If you want to pick up a copy of ExSim, check the link in the description."
    ],
    "ru": [
      "Если вы хотите забрать копию ExSim, проверьте ссылку в описании."
    ]
  },
  {
    "time": [
      1507.36,
      1512.929
    ],
    "en": [
      "Let’s go on to question 1 of today’s quiz."
    ],
    "ru": [
      "Перейдем к вопросу 1 сегодняшней викторины."
    ]
  },
  {
    "time": [
      1512.929,
      1519.73
    ],
    "en": [
      "Which TWO answers are valid options to configure the native VLAN on a router in a ROAS configuration?"
    ],
    "ru": [
      "Какие ДВА ответа являются допустимыми вариантами для настройки собственной VLAN на маршрутизаторе в конфигурации ROAS?"
    ]
  },
  {
    "time": [
      1519.73,
      1524.45
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
      1519.73,
      1524.45
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
      1524.45,
      1530.0
    ],
    "en": [
      "Instead of reading out each answer, I’ll just let you take a look at each set of commands. Here we go."
    ],
    "ru": [
      "Вместо того, чтобы зачитывать каждый ответ, я просто позволю вам взглянуть на каждый набор команд. Вот так."
    ]
  },
  {
    "time": [
      1530.0,
      1541.35
    ],
    "en": [
      "A, B, C, and D. Pause the video to think about your answer, remember there are two valid"
    ],
    "ru": [
      "A, B, C и D. Остановите видео, чтобы подумать над своим ответом, помните, что есть два действительных"
    ]
  },
  {
    "time": [
      1541.35,
      1548.65
    ],
    "en": [
      "options., so select two."
    ],
    "ru": [
      "варианты., так что выберите два."
    ]
  },
  {
    "time": [
      1548.65,
      1556.83
    ],
    "en": [
      "The answer is B and C. B uses the ENCAPSULATION DOT1Q NATIVE command on the subinterface,"
    ],
    "ru": [
      "Ответ - B и C. B использует команду ENCAPSULATION DOT1Q NATIVE на субинтерфейсе,"
    ]
  },
  {
    "time": [
      1556.83,
      1560.889
    ],
    "en": [
      "this is one option for configuring the native VLAN on a router."
    ],
    "ru": [
      "это один из вариантов настройки собственной VLAN на маршрутизаторе."
    ]
  },
  {
    "time": [
      1560.889,
      1565.859
    ],
    "en": [
      "The other option is C, to simply configure the IP address on the physical interface,"
    ],
    "ru": [
      "Другой вариант - C, чтобы просто настроить IP-адрес на физическом интерфейсе,"
    ]
  },
  {
    "time": [
      1565.859,
      1568.369
    ],
    "en": [
      "rather than the subinterface."
    ],
    "ru": [
      "а не субинтерфейс."
    ]
  },
  {
    "time": [
      1568.369,
      1572.059
    ],
    "en": [
      "In that case, you do not need the ENCAPSULATION DOT1Q command."
    ],
    "ru": [
      "В этом случае вам не нужна команда ENCAPSULATION DOT1Q."
    ]
  },
  {
    "time": [
      1572.059,
      1576.119
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
      1576.119,
      1584.129
    ],
    "en": [
      "You create an SVI for VLAN225 on SW1, assign an IP address, and enable it with no shutdown,"
    ],
    "ru": [
      "Вы создаете SVI для VLAN225 на SW1, назначаете IP-адрес и включаете его без выключения,"
    ]
  },
  {
    "time": [
      1584.129,
      1587.169
    ],
    "en": [
      "but the interface remains down/down."
    ],
    "ru": [
      "но интерфейс остается выключенным / выключенным."
    ]
  },
  {
    "time": [
      1587.169,
      1596.21
    ],
    "en": [
      "Which TWO options might be causing this? (select two) A, VLAN225 doesn’t exist on the switch."
    ],
    "ru": [
      "Какие ДВА варианта могут вызвать это? (выберите два) A, VLAN225 не существует на коммутаторе."
    ]
  },
  {
    "time": [
      1596.21,
      1603.22
    ],
    "en": [
      "B, you didn’t issue the SWITCHPORT MODE TRUNK command on VLAN225’s SVI."
    ],
    "ru": [
      "B, вы не вводили команду SWITCHPORT MODE TRUNK на SVI VLAN225."
    ]
  },
  {
    "time": [
      1603.22,
      1611.35
    ],
    "en": [
      "C, You didn’t issue the SWITCHPORT ACCESS VLAN 225 command on VLAN225’s SVI."
    ],
    "ru": [
      "C. Вы не выполнили команду SWITCHPORT ACCESS VLAN 225 на SVI VLAN225."
    ]
  },
  {
    "time": [
      1611.35,
      1616.5
    ],
    "en": [
      "Or D, No interfaces in VLAN225 are up/up."
    ],
    "ru": [
      "Или D, ни один из интерфейсов в VLAN225 не работает / работает."
    ]
  },
  {
    "time": [
      1616.5,
      1622.7
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
      1622.7,
      1632.109
    ],
    "en": [
      "The answer is A and D. In order for an SVI to be up/up, the VLAN must exist on the switch, and it must have either an"
    ],
    "ru": [
      "Ответ - A и D. Для того, чтобы SVI работал, на коммутаторе должна существовать VLAN, и он должен иметь либо"
    ]
  },
  {
    "time": [
      1632.109,
      1638.33
    ],
    "en": [
      "access interface in the VLAN that is up/up, or a trunk interface that allows the VLAN that is up/up."
    ],
    "ru": [
      "интерфейс доступа в VLAN, которая активна / активна, или интерфейс магистрали, который разрешает VLAN, которая активна / активна."
    ]
  },
  {
    "time": [
      1638.33,
      1644.08
    ],
    "en": [
      "that is up/up. You don’t need to issue the switchport mode trunk or switchport access vlan commands."
    ],
    "ru": [
      "что вверх / вверх. Вам не нужно вводить команды для магистрального режима switchport или vlan для доступа к коммутатору."
    ]
  },
  {
    "time": [
      1644.08,
      1648.83
    ],
    "en": [
      "Let’s go to question 3, which will be the last quiz question before we take a look at"
    ],
    "ru": [
      "Давайте перейдем к вопросу 3, который будет последним вопросом викторины, прежде чем мы рассмотрим"
    ]
  },
  {
    "time": [
      1648.83,
      1654.24
    ],
    "en": [
      "a sample question from Boson ExSim for CCNA."
    ],
    "ru": [
      "образец вопроса от Boson ExSim для CCNA."
    ]
  },
  {
    "time": [
      1654.24,
      1661.09
    ],
    "en": [
      "Which command is used to configure a switch interface as a routed port? A, no switchport."
    ],
    "ru": [
      "Какая команда используется для настройки интерфейса коммутатора как маршрутизируемого порта? А, без коммутатора."
    ]
  },
  {
    "time": [
      1661.09,
      1668.989
    ],
    "en": [
      "A, no switchport. B, IP Address, followed by the IP address and Subnet mask. C, ip routing."
    ],
    "ru": [
      "А, без коммутатора. B, IP-адрес, затем IP-адрес и маска подсети. C, IP маршрутизация."
    ]
  },
  {
    "time": [
      1668.989,
      1672.539
    ],
    "en": [
      "C, ip routing. Or D, switchport mode route."
    ],
    "ru": [
      "C, IP маршрутизация. Или D, маршрут в режиме коммутационного порта."
    ]
  },
  {
    "time": [
      1672.539,
      1678.369
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
      1678.369,
      1681.559
    ],
    "en": [
      "The answer is A, no switchport."
    ],
    "ru": [
      "Ответ - А, без коммутатора."
    ]
  },
  {
    "time": [
      1681.559,
      1687.409
    ],
    "en": [
      "This configures the interface as a routed port, and allows you to configure an IP address on the interface."
    ],
    "ru": [
      "Это настраивает интерфейс как маршрутизируемый порт и позволяет настроить IP-адрес на интерфейсе."
    ]
  },
  {
    "time": [
      1687.409,
      1693.929
    ],
    "en": [
      "on the interface. C, ip routing, is used to enable IP routing on the switch, but it doesn’t set an individual"
    ],
    "ru": [
      "на интерфейсе. C, IP-маршрутизация, используется для включения IP-маршрутизации на коммутаторе, но не устанавливает индивидуальный"
    ]
  },
  {
    "time": [
      1693.929,
      1697.83
    ],
    "en": [
      "interface as a routed port."
    ],
    "ru": [
      "интерфейс как маршрутизируемый порт."
    ]
  },
  {
    "time": [
      1697.83,
      1701.659
    ],
    "en": [
      "Let's go on to today's Boson ExSim practice question."
    ],
    "ru": [
      "Перейдем к сегодняшнему вопросу о практике Boson ExSim."
    ]
  },
  {
    "time": [
      1701.659,
      1707.59
    ],
    "en": [
      "You issue the following commands on a Catalyst 2950 switch. CONFIGURE TERMINAL."
    ],
    "ru": [
      "Вы вводите следующие команды на коммутаторе Catalyst 2950. НАСТРОИТЬ ТЕРМИНАЛ."
    ]
  },
  {
    "time": [
      1707.59,
      1710.289
    ],
    "en": [
      "CONFIGURE TERMINAL. INTERFACE FASTETHERNET 0/7."
    ],
    "ru": [
      "НАСТРОИТЬ ТЕРМИНАЛ. ИНТЕРФЕЙС FASTETHERNET 0/7."
    ]
  },
  {
    "time": [
      1710.289,
      1715.2
    ],
    "en": [
      "SWITCHPORT TRUNK ENCAPSULATION DOT1Q. SWITCHPORT MODE TRUNK."
    ],
    "ru": [
      "ПЕРЕКЛЮЧАТЕЛЬ КАПСУЛЯЦИЯ ЛИНИИ DOT1Q. РЕЖИМ SWITCHPORT TRUNK."
    ]
  },
  {
    "time": [
      1715.2,
      1718.289
    ],
    "en": [
      "SWITCHPORT MODE TRUNK. SWITCHPORT TRUNK NATIVE VLAN 44."
    ],
    "ru": [
      "РЕЖИМ SWITCHPORT TRUNK. СОБСТВЕННЫЙ VLAN для канала SWITCHPORT 44."
    ]
  },
  {
    "time": [
      1718.289,
      1724.419
    ],
    "en": [
      "Which of the following statements is true regarding VLAN traffic when it is sent over port FastEthernet0/7?"
    ],
    "ru": [
      "Какое из следующих утверждений верно относительно трафика VLAN, когда он отправляется через порт FastEthernet0 / 7?"
    ]
  },
  {
    "time": [
      1724.419,
      1726.059
    ],
    "en": [
      "port FastEthernet0/7? Select the best answer."
    ],
    "ru": [
      "порт FastEthernet0 / 7? Выберите лучший ответ."
    ]
  },
  {
    "time": [
      1726.059,
      1728.019
    ],
    "en": [
      "Okay, let's check each option."
    ],
    "ru": [
      "Хорошо, давайте проверим каждый вариант."
    ]
  },
  {
    "time": [
      1728.019,
      1731.059
    ],
    "en": [
      "A, VLAN 1 traffic will be untagged."
    ],
    "ru": [
      "A, трафик VLAN 1 не будет помечен."
    ]
  },
  {
    "time": [
      1731.059,
      1735.389
    ],
    "en": [
      "B, VLAN 44 traffic will be untagged."
    ],
    "ru": [
      "B, трафик VLAN 44 будет немаркирован."
    ]
  },
  {
    "time": [
      1735.389,
      1738.559
    ],
    "en": [
      "C, all VLAN traffic will be tagged."
    ],
    "ru": [
      "C, весь трафик VLAN будет помечен."
    ]
  },
  {
    "time": [
      1738.559,
      1742.71
    ],
    "en": [
      "Or D, all VLAN traffic will be untagged."
    ],
    "ru": [
      "Или D, весь трафик VLAN будет немаркирован."
    ]
  },
  {
    "time": [
      1742.71,
      1749.54
    ],
    "en": [
      "Please pause the video to think about your answer."
    ],
    "ru": [
      "Пожалуйста, приостановите видео, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      1749.54,
      1758.059
    ],
    "en": [
      "Okay, so I think the correct answer is B, because you issued the SWITCHPORT TRUNK NATIVE VLAN 44 command."
    ],
    "ru": [
      "Хорошо, я думаю, что правильный ответ - B, потому что вы выполнили команду SWITCHPORT TRUNK NATIVE VLAN 44."
    ]
  },
  {
    "time": [
      1758.059,
      1762.529
    ],
    "en": [
      "VLAN 44 command. Traffic in the native VLAN will not be tagged when it is sent over a trunk interface."
    ],
    "ru": [
      "Команда VLAN 44. Трафик в собственной VLAN не будет помечен, когда он отправляется через магистральный интерфейс."
    ]
  },
  {
    "time": [
      1762.529,
      1768.7
    ],
    "en": [
      "So, I think VLAN 44 traffic will be untagged. Let's check."
    ],
    "ru": [
      "Так что, думаю, трафик VLAN 44 будет немаркированным. Давайте проверим."
    ]
  },
  {
    "time": [
      1768.7,
      1770.37
    ],
    "en": [
      "Let's check. Click 'show answer' down here."
    ],
    "ru": [
      "Давайте проверим. Нажмите здесь внизу \"показать ответ\"."
    ]
  },
  {
    "time": [
      1770.37,
      1774.929
    ],
    "en": [
      "And as you can see, B is in fact the correct answer."
    ],
    "ru": [
      "И, как видите, B на самом деле правильный ответ."
    ]
  },
  {
    "time": [
      1774.929,
      1778.539
    ],
    "en": [
      "Let's check out Boson's explanation a little bit."
    ],
    "ru": [
      "Давайте немного проверим объяснение Бозона."
    ]
  },
  {
    "time": [
      1778.539,
      1783.59
    ],
    "en": [
      "Traffic from VLAN 44 will be untagged when it is sent over port FastEthernet0/7."
    ],
    "ru": [
      "Трафик из VLAN 44 будет немаркирован при отправке через порт FastEthernet0 / 7."
    ]
  },
  {
    "time": [
      1783.59,
      1788.72
    ],
    "en": [
      "VLAN 44 traffic is untagged because it has been configured as the native VLAN by the"
    ],
    "ru": [
      "Трафик VLAN 44 не помечен, поскольку он был настроен как собственная VLAN"
    ]
  },
  {
    "time": [
      1788.72,
      1792.36
    ],
    "en": [
      "SWITCHPORT TRUNK NATIVE VLAN 44 command."
    ],
    "ru": [
      "SWITCHPORT TRUNK NATIVE VLAN 44 команда."
    ]
  },
  {
    "time": [
      1792.36,
      1794.919
    ],
    "en": [
      "By default, the native VLAN is VLAN 1."
    ],
    "ru": [
      "По умолчанию собственная VLAN - это VLAN 1."
    ]
  },
  {
    "time": [
      1794.919,
      1801.289
    ],
    "en": [
      "So, by default A would be the correct answer, but we changed it to 44."
    ],
    "ru": [
      "Итак, по умолчанию A будет правильным ответом, но мы изменили его на 44."
    ]
  },
  {
    "time": [
      1801.289,
      1806.74
    ],
    "en": [
      "You can issue the SWITCHPORT TRUNK NATIVE VLAN (vlan-id) command to change the native VLAN."
    ],
    "ru": [
      "Вы можете выполнить команду SWITCHPORT TRUNK NATIVE VLAN (vlan-id), чтобы изменить собственную VLAN."
    ]
  },
  {
    "time": [
      1806.74,
      1812.409
    ],
    "en": [
      "VLAN. Okay, here are explanations for why the incorrect options are incorrect."
    ],
    "ru": [
      "VLAN. Хорошо, вот объяснения, почему неправильные параметры неверны."
    ]
  },
  {
    "time": [
      1812.409,
      1816.44
    ],
    "en": [
      "It also says you can issue the SHOW INTERFACES TRUNK command to display the list of ports"
    ],
    "ru": [
      "В нем также говорится, что вы можете выполнить команду SHOW INTERFACES TRUNK, чтобы отобразить список портов."
    ]
  },
  {
    "time": [
      1816.44,
      1821.299
    ],
    "en": [
      "that are configured for trunking, the native VLAN for each port, and list of currently"
    ],
    "ru": [
      "которые настроены для транкинга, собственная VLAN для каждого порта и список текущих"
    ]
  },
  {
    "time": [
      1821.299,
      1824.409
    ],
    "en": [
      "allowed VLANs for each trunk port."
    ],
    "ru": [
      "разрешенные VLAN для каждого транкового порта."
    ]
  },
  {
    "time": [
      1824.409,
      1828.909
    ],
    "en": [
      "And here is an example, down here, after we have changed the native VLAN to 44."
    ],
    "ru": [
      "А вот пример здесь, после того, как мы изменили собственный VLAN на 44."
    ]
  },
  {
    "time": [
      1828.909,
      1833.72
    ],
    "en": [
      "Okay, there are also references here, to Cisco's official cert guide."
    ],
    "ru": [
      "Хорошо, здесь также есть ссылки на официальное руководство по сертификации Cisco."
    ]
  },
  {
    "time": [
      1833.72,
      1840.519
    ],
    "en": [
      "This is volume 1, chapter 8, about Ethernet virtual LANs, VLANs."
    ],
    "ru": [
      "Это том 1, глава 8, о виртуальных локальных сетях Ethernet, VLAN."
    ]
  },
  {
    "time": [
      1840.519,
      1842.429
    ],
    "en": [
      "And some Cisco documentation."
    ],
    "ru": [
      "И немного документации Cisco."
    ]
  },
  {
    "time": [
      1842.429,
      1847.039
    ],
    "en": [
      "I will leave links to these in the description of the video, so if you want some further"
    ],
    "ru": [
      "Я оставлю ссылки на них в описании видео, так что если вы хотите еще"
    ]
  },
  {
    "time": [
      1847.039,
      1854.059
    ],
    "en": [
      "reading about VLAN trunks, dot1q, please check those links in the description for further reading."
    ],
    "ru": [
      "читая о соединительных линиях VLAN, dot1q, пожалуйста, проверьте эти ссылки в описании для дальнейшего чтения."
    ]
  },
  {
    "time": [
      1854.059,
      1858.139
    ],
    "en": [
      "reading. Okay, so that's all for today's Boson ExSim practice question."
    ],
    "ru": [
      "чтение. Итак, это все, что касается сегодняшнего практического вопроса о Boson ExSim."
    ]
  },
  {
    "time": [
      1858.139,
      1862.119
    ],
    "en": [
      "If you want to get a copy of Boson ExSim, and I highly recommend you do, they are fantastic"
    ],
    "ru": [
      "Если вы хотите получить копию Boson ExSim, и я очень рекомендую вам это сделать, они фантастические"
    ]
  },
  {
    "time": [
      1862.119,
      1866.849
    ],
    "en": [
      "practice exams, please follow the link in the video description."
    ],
    "ru": [
      "практические экзамены, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      1866.849,
      1871.07
    ],
    "en": [
      "As usual, there will be supplementary materials for this video."
    ],
    "ru": [
      "Как обычно, к этому видео будут добавлены дополнительные материалы."
    ]
  },
  {
    "time": [
      1871.07,
      1874.45
    ],
    "en": [
      "There will be a review flashcard deck to use with the software ‘Anki’."
    ],
    "ru": [
      "Будет выпущена обзорная колода карточек для использования с программным обеспечением «Anki»."
    ]
  },
  {
    "time": [
      1874.45,
      1878.529
    ],
    "en": [
      "Download the deck from the link in the description."
    ],
    "ru": [
      "Скачайте колоду по ссылке в описании."
    ]
  },
  {
    "time": [
      1878.529,
      1884.32
    ],
    "en": [
      "There will also be a packet tracer practice lab to help you practice the configurations from this video."
    ],
    "ru": [
      "Также будет проведена практическая лаборатория с трассировщиком пакетов, которая поможет вам попрактиковаться в настройках из этого видео."
    ]
  },
  {
    "time": [
      1884.32,
      1888.169
    ],
    "en": [
      "from this video. That will be in a separate video."
    ],
    "ru": [
      "из этого видео. Это будет в отдельном видео."
    ]
  },
  {
    "time": [
      1888.169,
      1893.999
    ],
    "en": [
      "Before finishing this video, I want to give a shoutout to all of my JCNP-level channel members."
    ],
    "ru": [
      "Прежде чем закончить это видео, я хочу поблагодарить всех участников моего канала уровня JCNP."
    ]
  },
  {
    "time": [
      1893.999,
      1899.979
    ],
    "en": [
      "members. Thank you to C Mohd, Johan, And then I’m sorry, but the next person displays only as"
    ],
    "ru": [
      "члены. Спасибо C Mohd, Johan. Мне очень жаль, но следующий человек отображается только как"
    ]
  },
  {
    "time": [
      1899.979,
      1901.409
    ],
    "en": [
      "Channel failed to load."
    ],
    "ru": [
      "Не удалось загрузить канал."
    ]
  },
  {
    "time": [
      1901.409,
      1906.059
    ],
    "en": [
      "If this is you, please let me know and I will try to ask YouTube to fix it."
    ],
    "ru": [
      "Если это вы, дайте мне знать, и я попытаюсь попросить YouTube исправить это."
    ]
  },
  {
    "time": [
      1906.059,
      1916.159
    ],
    "en": [
      "Okay, continuing on, thank you to Mark, Aleksa, Miguel, Yousif, Samil, Boson Software (the creators of ExSim), Sidi,"
    ],
    "ru": [
      "Хорошо, продолжаем, спасибо Марку, Алексе, Мигелю, Юсифу, Самилу, Boson Software (создателям ExSim), Сиди,"
    ]
  },
  {
    "time": [
      1916.159,
      1923.94
    ],
    "en": [
      "Magrathea, Devin, Charlsetta, Lito, Yonatan, Mike, Aleksander, and Vance."
    ],
    "ru": [
      "Магратея, Девин, Шарлсетта, Лито, Йонатан, Майк, Александр и Вэнс."
    ]
  },
  {
    "time": [
      1923.94,
      1930.12
    ],
    "en": [
      "Sorry if I pronounced your name wrong, but thank you so much for your support."
    ],
    "ru": [
      "Извините, если я неправильно произнесла ваше имя, но большое спасибо за вашу поддержку."
    ]
  },
  {
    "time": [
      1930.12,
      1932.32
    ],
    "en": [
      "Thank you for watching."
    ],
    "ru": [
      "Спасибо за просмотр."
    ]
  },
  {
    "time": [
      1932.32,
      1936.23
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
      1936.23,
      1939.57
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
      1939.57,
      1941.929
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
      1941.929,
      1949.889
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
      1949.889,
      1949.889
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]