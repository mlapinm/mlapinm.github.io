var objs = [
  {
    "time": [
      1.31,
      3.989
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
      3.989,
      11.799
    ],
    "en": [
      "This is a complete course for the CCNA, including everything you need to pass the exam, all 100% free."
    ],
    "ru": [
      "Это полный курс CCNA, включая все необходимое для сдачи экзамена, причем абсолютно бесплатно."
    ]
  },
  {
    "time": [
      11.799,
      15.08
    ],
    "en": [
      "Make sure you stay tuned till the end of the video for the quiz to test your knowledge"
    ],
    "ru": [
      "Следите за новостями до конца видео, чтобы викторина проверила свои знания."
    ]
  },
  {
    "time": [
      15.08,
      17.23
    ],
    "en": [
      "of the material in this video."
    ],
    "ru": [
      "материала в этом видео."
    ]
  },
  {
    "time": [
      17.23,
      22.849
    ],
    "en": [
      "Also, remember to download and use the Anki flashcards with the link in the description,"
    ],
    "ru": [
      "Также не забудьте загрузить и использовать карточки Anki со ссылкой в ​​описании,"
    ]
  },
  {
    "time": [
      22.849,
      27.96
    ],
    "en": [
      "which will help you very much in your studies. Let’s get started."
    ],
    "ru": [
      "что очень поможет вам в учебе. Давайте начнем."
    ]
  },
  {
    "time": [
      27.96,
      31.849
    ],
    "en": [
      "This is the fifth lesson, and now we’re going to get more into the details of how"
    ],
    "ru": [
      "Это пятый урок, и теперь мы подробнее рассмотрим, как"
    ]
  },
  {
    "time": [
      31.849,
      34.6
    ],
    "en": [
      "data travels through a network."
    ],
    "ru": [
      "данные передаются по сети."
    ]
  },
  {
    "time": [
      34.6,
      37.79
    ],
    "en": [
      "This time we’ll focus on Ethernet LAN switching."
    ],
    "ru": [
      "На этот раз мы сосредоточимся на коммутации Ethernet LAN."
    ]
  },
  {
    "time": [
      37.79,
      43.73
    ],
    "en": [
      "So, if we look at this simple network consisting of a few PCs, a switch, and a router, connected"
    ],
    "ru": [
      "Итак, если мы посмотрим на эту простую сеть, состоящую из нескольких компьютеров, коммутатора и маршрутизатора, соединенных между собой"
    ]
  },
  {
    "time": [
      43.73,
      48.55
    ],
    "en": [
      "to the Internet, today we’ll be looking at how data moves around between the switches"
    ],
    "ru": [
      "в Интернет, сегодня мы рассмотрим, как данные перемещаются между коммутаторами"
    ]
  },
  {
    "time": [
      48.55,
      53.08
    ],
    "en": [
      "and the end hosts connected to them, and to their router."
    ],
    "ru": [
      "и конечные хосты, подключенные к ним, и к их маршрутизатору."
    ]
  },
  {
    "time": [
      53.08,
      57.49
    ],
    "en": [
      "How data is sent from the router to other networks will be a topic for another video,"
    ],
    "ru": [
      "Как данные передаются с роутера в другие сети - тема отдельного видео,"
    ]
  },
  {
    "time": [
      57.49,
      62.37
    ],
    "en": [
      "but let’s start small. First let’s review."
    ],
    "ru": [
      "но давайте начнем с малого. Сначала давайте рассмотрим."
    ]
  },
  {
    "time": [
      62.37,
      69.06
    ],
    "en": [
      "This is a slide from Day 3’s video of describing the physical layer of the OSI model."
    ],
    "ru": [
      "Это слайд из видео дня 3 с описанием физического уровня модели OSI."
    ]
  },
  {
    "time": [
      69.06,
      75.729
    ],
    "en": [
      "The physical layer defines physical characteristics of the medium used to transfer data between devices."
    ],
    "ru": [
      "Физический уровень определяет физические характеристики среды, используемой для передачи данных между устройствами."
    ]
  },
  {
    "time": [
      75.729,
      83.25
    ],
    "en": [
      "For example, voltage levels, maximum transmission distances (like Ethernet UTP cables’ 100"
    ],
    "ru": [
      "Например, уровни напряжения, максимальные расстояния передачи (например, кабели Ethernet UTP '100"
    ]
  },
  {
    "time": [
      83.25,
      88.979
    ],
    "en": [
      "meter limit), physical connectors, cable specifications, etc."
    ],
    "ru": [
      "предел метра), физические разъемы, характеристики кабеля и т. д."
    ]
  },
  {
    "time": [
      88.979,
      97.119
    ],
    "en": [
      "Digital bits are converted into electrical (for wired connections) or radio (for wireless connections) signals."
    ],
    "ru": [
      "Цифровые биты преобразуются в электрические (для проводных соединений) или радиосигналы (для беспроводных соединений)."
    ]
  },
  {
    "time": [
      97.119,
      104.079
    ],
    "en": [
      "All of the information in Day 2’s video (cables, pin layouts, etc.) is related to the Physical Layer."
    ],
    "ru": [
      "Вся информация в видео Дня 2 (кабели, схемы контактов и т. Д.) Относится к физическому уровню."
    ]
  },
  {
    "time": [
      104.079,
      109.299
    ],
    "en": [
      "So, we’ve covered a good amount about the physical layer, learning about copper UTP"
    ],
    "ru": [
      "Итак, мы подробно рассмотрели физический уровень, изучив медный UTP."
    ]
  },
  {
    "time": [
      109.299,
      114.78
    ],
    "en": [
      "cables, fiber-optic cables, RJ45 connectors, etc."
    ],
    "ru": [
      "кабели, оптоволоконные кабели, разъемы RJ45 и т. д."
    ]
  },
  {
    "time": [
      114.78,
      121.639
    ],
    "en": [
      "Let’s also review this slide about Layer 2, the data link layer, from Day 3’s video."
    ],
    "ru": [
      "Давайте также рассмотрим этот слайд об уровне 2, уровне канала передачи данных, из видео дня 3."
    ]
  },
  {
    "time": [
      121.639,
      128.459
    ],
    "en": [
      "Layer 2 provides node-to-node connectivity and data transfer, for example PC to switch, or"
    ],
    "ru": [
      "Уровень 2 обеспечивает межузловое соединение и передачу данных, например ПК для переключения, или"
    ]
  },
  {
    "time": [
      128.459,
      132.41
    ],
    "en": [
      "switch to router, or router to router, etc."
    ],
    "ru": [
      "переключиться на маршрутизатор или маршрутизатор на маршрутизатор и т. д."
    ]
  },
  {
    "time": [
      132.41,
      140.48
    ],
    "en": [
      "It defines how data is formatted for transmission over a physical medium (for example, copper UTP cables)."
    ],
    "ru": [
      "Он определяет, как данные форматируются для передачи через физический носитель (например, медные кабели UTP)."
    ]
  },
  {
    "time": [
      140.48,
      145.26
    ],
    "en": [
      "IT detects and possibly corrects Physical Layer errors."
    ],
    "ru": [
      "ИТ-отдел обнаруживает и, возможно, исправляет ошибки физического уровня."
    ]
  },
  {
    "time": [
      145.26,
      150.459
    ],
    "en": [
      "It uses Layer 2 addressing, which is separate from Layer 3 addressing."
    ],
    "ru": [
      "Он использует адресацию уровня 2, которая отличается от адресации уровня 3."
    ]
  },
  {
    "time": [
      150.459,
      156.569
    ],
    "en": [
      "Remember, IP addresses are Layer 3 addresses, not Layer 2."
    ],
    "ru": [
      "Помните, что IP-адреса - это адреса 3-го уровня, а не 2-го."
    ]
  },
  {
    "time": [
      156.569,
      158.189
    ],
    "en": [
      "Switches operate at Layer 2."
    ],
    "ru": [
      "Коммутаторы работают на уровне 2."
    ]
  },
  {
    "time": [
      158.189,
      163.079
    ],
    "en": [
      "So, in this video we’ll be talking about Ethernet LAN switching, and Ethernet involves"
    ],
    "ru": [
      "Итак, в этом видео мы поговорим о коммутации Ethernet LAN, а Ethernet включает"
    ]
  },
  {
    "time": [
      163.079,
      167.54
    ],
    "en": [
      "Layer 1 and Layer 2 of the OSI model."
    ],
    "ru": [
      "Уровень 1 и уровень 2 модели OSI."
    ]
  },
  {
    "time": [
      167.54,
      172.38
    ],
    "en": [
      "Since we’ve already covered the Layer 1 Ethernet standards like UTP cables, this video"
    ],
    "ru": [
      "Поскольку мы уже рассмотрели стандарты Ethernet уровня 1, такие как кабели UTP, это видео"
    ]
  },
  {
    "time": [
      172.38,
      174.44
    ],
    "en": [
      "will be about Layer 2."
    ],
    "ru": [
      "будет о слое 2."
    ]
  },
  {
    "time": [
      174.44,
      180.01
    ],
    "en": [
      "Then, as we continue with this series, we’ll move up the layers of the OSI model, until"
    ],
    "ru": [
      "Затем, продолжая эту серию, мы будем двигаться вверх по уровням модели OSI, пока"
    ]
  },
  {
    "time": [
      180.01,
      184.14
    ],
    "en": [
      "you get a complete image of how data is sent and received over networks."
    ],
    "ru": [
      "вы получите полное представление о том, как данные отправляются и принимаются по сети."
    ]
  },
  {
    "time": [
      184.14,
      190.709
    ],
    "en": [
      "Now, let’s talk about what a LAN, or Local Area Network is."
    ],
    "ru": [
      "Теперь давайте поговорим о том, что такое LAN или локальная сеть."
    ]
  },
  {
    "time": [
      190.709,
      195.11
    ],
    "en": [
      "There are different ways of defining a LAN, and your understanding of a LAN will become"
    ],
    "ru": [
      "Есть разные способы определения LAN, и ваше понимание LAN станет"
    ]
  },
  {
    "time": [
      195.11,
      198.28
    ],
    "en": [
      "more complete as you learn more and more about networking."
    ],
    "ru": [
      "более полным по мере того, как вы узнаете все больше и больше о сети."
    ]
  },
  {
    "time": [
      198.28,
      204.74
    ],
    "en": [
      "But basically, it’s a network contained within a relatively small area, like an office floor,"
    ],
    "ru": [
      "Но в основном это сеть, расположенная на относительно небольшой площади, например, на этаже офиса,"
    ]
  },
  {
    "time": [
      204.74,
      207.28
    ],
    "en": [
      "or your home network."
    ],
    "ru": [
      "или в вашей домашней сети."
    ]
  },
  {
    "time": [
      207.28,
      209.709
    ],
    "en": [
      "Routers are used to connect separate LANs."
    ],
    "ru": [
      "Маршрутизаторы используются для подключения отдельных локальных сетей."
    ]
  },
  {
    "time": [
      209.709,
      214.469
    ],
    "en": [
      "Looking at this diagram, how many LANs do you think there are?"
    ],
    "ru": [
      "Глядя на эту диаграмму, как вы думаете, сколько существует локальных сетей?"
    ]
  },
  {
    "time": [
      214.469,
      220.99
    ],
    "en": [
      "Well, by the definition I’m using, this green network, consisting of three PCs, one"
    ],
    "ru": [
      "Ну, по определению, которое я использую, эта зеленая сеть, состоящая из трех ПК, одного"
    ]
  },
  {
    "time": [
      220.99,
      226.459
    ],
    "en": [
      "switch, and the router interface they are connected to, is one VLAN."
    ],
    "ru": [
      "коммутатор, а интерфейс маршрутизатора, к которому они подключены, составляет одну VLAN."
    ]
  },
  {
    "time": [
      226.459,
      229.73
    ],
    "en": [
      "This red network is also one LAN."
    ],
    "ru": [
      "Эта красная сеть также является одной локальной сетью."
    ]
  },
  {
    "time": [
      229.73,
      233.43
    ],
    "en": [
      "Although there are two switches, it is all one LAN."
    ],
    "ru": [
      "Хотя есть два коммутатора, это все одна LAN."
    ]
  },
  {
    "time": [
      233.43,
      240.239
    ],
    "en": [
      "Switches do not separate LANs, but adding more switches can be used to expand an existing LAN."
    ],
    "ru": [
      "Коммутаторы не разделяют локальные сети, но добавление дополнительных коммутаторов может использоваться для расширения существующей локальной сети."
    ]
  },
  {
    "time": [
      240.239,
      243.53
    ],
    "en": [
      "So these red devices are part of one large LAN."
    ],
    "ru": [
      "Итак, эти красные устройства являются частью одной большой локальной сети."
    ]
  },
  {
    "time": [
      243.53,
      246.749
    ],
    "en": [
      "Now, what do you think about the blue devices?"
    ],
    "ru": [
      "Что вы думаете о синих устройствах?"
    ]
  },
  {
    "time": [
      246.749,
      252.12
    ],
    "en": [
      "There’s the same devices as in the red network, but instead of the switches being connected"
    ],
    "ru": [
      "Здесь те же устройства, что и в красной сети, но вместо переключателей подключаются"
    ]
  },
  {
    "time": [
      252.12,
      255.69
    ],
    "en": [
      "to each other, they are connected to different router interfaces."
    ],
    "ru": [
      "друг к другу они подключены к разным интерфейсам маршрутизатора."
    ]
  },
  {
    "time": [
      255.69,
      261.989
    ],
    "en": [
      "So, that means that they are two separate LANs. one for this switch, it’s end hosts,"
    ],
    "ru": [
      "Итак, это означает, что это две отдельные локальные сети. один для этого коммутатора, это конечные хосты,"
    ]
  },
  {
    "time": [
      261.989,
      268.81
    ],
    "en": [
      "and their router interface, and one for this switch, it’s end hosts, and the router interface they connect to."
    ],
    "ru": [
      "и их интерфейс маршрутизатора, и один для этого коммутатора, это конечные хосты и интерфейс маршрутизатора, к которому они подключаются."
    ]
  },
  {
    "time": [
      268.81,
      274.91
    ],
    "en": [
      "So, in this lesson we’ll look at how traffic is sent and received within LANs like these,"
    ],
    "ru": [
      "Итак, в этом уроке мы рассмотрим, как трафик отправляется и принимается в таких локальных сетях, как эти,"
    ]
  },
  {
    "time": [
      274.91,
      280.71
    ],
    "en": [
      "for example this PC in LAN 2 to another PC in LAN 2."
    ],
    "ru": [
      "например, от этого ПК в LAN 2 к другому ПК в LAN 2."
    ]
  },
  {
    "time": [
      280.71,
      286.65
    ],
    "en": [
      "But, we’ll leave the topic of sending data between LANs for a later video."
    ],
    "ru": [
      "Но мы оставим тему отправки данных между локальными сетями для следующего видео."
    ]
  },
  {
    "time": [
      286.65,
      290.25
    ],
    "en": [
      "Here’s one more bit of review."
    ],
    "ru": [
      "Вот еще один небольшой обзор."
    ]
  },
  {
    "time": [
      290.25,
      295.87
    ],
    "en": [
      "This shows the encapsulation process as data is prepared to be sent over a network."
    ],
    "ru": [
      "Это показывает процесс инкапсуляции, когда данные готовятся к отправке по сети."
    ]
  },
  {
    "time": [
      295.87,
      302.18
    ],
    "en": [
      "At the top, the data prepared by the upper layers of the OSI model is simply called data."
    ],
    "ru": [
      "Вверху данные, подготовленные верхними уровнями модели OSI, просто называются данными."
    ]
  },
  {
    "time": [
      302.18,
      309.09
    ],
    "en": [
      "A layer 4 header is added, and this combination of data and layer 4 header is called a segment."
    ],
    "ru": [
      "Добавляется заголовок уровня 4, и эта комбинация данных и заголовка уровня 4 называется сегментом."
    ]
  },
  {
    "time": [
      309.09,
      313.52
    ],
    "en": [
      "A layer 3 header is added to the segment, and it is now called a packet."
    ],
    "ru": [
      "К сегменту добавляется заголовок уровня 3, и теперь он называется пакетом."
    ]
  },
  {
    "time": [
      313.52,
      321.27
    ],
    "en": [
      "Finally, a Layer 2 header and trailer are added to the packet, and it becomes a frame."
    ],
    "ru": [
      "Наконец, к пакету добавляются заголовок и трейлер уровня 2, и он становится фреймом."
    ]
  },
  {
    "time": [
      321.27,
      325.46
    ],
    "en": [
      "Once again, these different stages of preparing data to be forwarded are called ‘protocol"
    ],
    "ru": [
      "Еще раз, эти различные этапы подготовки данных для пересылки называются «протоколом."
    ]
  },
  {
    "time": [
      325.46,
      331.94
    ],
    "en": [
      "data units, or PDUs. For example, the Layer 2 PDU is a frame."
    ],
    "ru": [
      "блоки данных или PDU. Например, PDU уровня 2 представляет собой фрейм."
    ]
  },
  {
    "time": [
      331.94,
      337.71
    ],
    "en": [
      "Today we’re going to focus on how switches receive and forward frames, specifically Ethernet"
    ],
    "ru": [
      "Сегодня мы сосредоточимся на том, как коммутаторы получают и пересылают кадры, в частности Ethernet."
    ]
  },
  {
    "time": [
      337.71,
      343.22
    ],
    "en": [
      "frames, since it’s the Layer 2 protocol used in virtually every LAN in existence today."
    ],
    "ru": [
      "фреймов, поскольку это протокол уровня 2, используемый практически во всех существующих сегодня ЛВС."
    ]
  },
  {
    "time": [
      343.22,
      347.849
    ],
    "en": [
      "Let’s take a look at the actual contents of this Ethernet header and trailer."
    ],
    "ru": [
      "Давайте посмотрим на фактическое содержимое этого заголовка и трейлера Ethernet."
    ]
  },
  {
    "time": [
      347.849,
      354.76
    ],
    "en": [
      "So, here’s an Ethernet frame, encapsulating the packet with a header and trailer."
    ],
    "ru": [
      "Итак, вот фрейм Ethernet, инкапсулирующий пакет с заголовком и трейлером."
    ]
  },
  {
    "time": [
      354.76,
      359.56
    ],
    "en": [
      "Note that I put the header on the left and the trailer on the right, opposite of the previous slide."
    ],
    "ru": [
      "Обратите внимание, что я поместил заголовок слева, а трейлер справа, напротив предыдущего слайда."
    ]
  },
  {
    "time": [
      359.56,
      361.05
    ],
    "en": [
      "Let’s look at the header."
    ],
    "ru": [
      "Посмотрим на заголовок."
    ]
  },
  {
    "time": [
      361.05,
      366.28
    ],
    "en": [
      "Don’t worry, I’ll cover these in more detail, but here’s a quick rundown."
    ],
    "ru": [
      "Не волнуйтесь, я расскажу об этом более подробно, но вот краткое изложение."
    ]
  },
  {
    "time": [
      366.28,
      368.81
    ],
    "en": [
      "There are five fields in the header."
    ],
    "ru": [
      "В заголовке пять полей."
    ]
  },
  {
    "time": [
      368.81,
      375.26
    ],
    "en": [
      "First, the preamble and SFD, which means start frame delimiter."
    ],
    "ru": [
      "Во-первых, преамбула и SFD, что означает ограничитель начального кадра."
    ]
  },
  {
    "time": [
      375.26,
      380.78
    ],
    "en": [
      "These are used for synchronization and to allow the receiving device to be prepared"
    ],
    "ru": [
      "Они используются для синхронизации и позволяют подготовить принимающее устройство."
    ]
  },
  {
    "time": [
      380.78,
      384.56
    ],
    "en": [
      "to receive the rest of the data in the frame."
    ],
    "ru": [
      "чтобы получить остальные данные в кадре."
    ]
  },
  {
    "time": [
      384.56,
      390.0
    ],
    "en": [
      "Next is the destination, the Layer 2 address to which the frame is being sent."
    ],
    "ru": [
      "Далее идет пункт назначения, адрес уровня 2, на который отправляется фрейм."
    ]
  },
  {
    "time": [
      390.0,
      396.65
    ],
    "en": [
      "Next, there is the source, the Layer 2 address of the device which sent the frame."
    ],
    "ru": [
      "Далее идет источник, адрес уровня 2 устройства, отправившего фрейм."
    ]
  },
  {
    "time": [
      396.65,
      400.72
    ],
    "en": [
      "The final field in the Ethernet header is the type."
    ],
    "ru": [
      "Последнее поле в заголовке Ethernet - это тип."
    ]
  },
  {
    "time": [
      400.72,
      406.389
    ],
    "en": [
      "It indicates the Layer 3 protocol used in the encapsulated Packet, which is almost always"
    ],
    "ru": [
      "Он указывает протокол уровня 3, используемый в инкапсулированном пакете, который почти всегда"
    ]
  },
  {
    "time": [
      406.389,
      412.289
    ],
    "en": [
      "Internet Protocol, or IP, version 4, or IP version 6."
    ],
    "ru": [
      "Интернет-протокол или IP версии 4 или IP версии 6."
    ]
  },
  {
    "time": [
      412.289,
      417.539
    ],
    "en": [
      "However, sometimes this is a length field, indicating the length of the encapsulated"
    ],
    "ru": [
      "Однако иногда это поле длины, указывающее длину инкапсулированного"
    ]
  },
  {
    "time": [
      417.539,
      420.58
    ],
    "en": [
      "data, depending on the version of Ethernet."
    ],
    "ru": [
      "данные в зависимости от версии Ethernet."
    ]
  },
  {
    "time": [
      420.58,
      424.49
    ],
    "en": [
      "Now, the Ethernet trailer has only one field."
    ],
    "ru": [
      "Теперь трейлер Ethernet имеет только одно поле."
    ]
  },
  {
    "time": [
      424.49,
      430.08
    ],
    "en": [
      "That’s the FCS, which stands for frame check sequence."
    ],
    "ru": [
      "Это FCS, что означает последовательность проверки кадров."
    ]
  },
  {
    "time": [
      430.08,
      435.96
    ],
    "en": [
      "It’s used by the receiving device to detect any errors that might have occurred in transmission."
    ],
    "ru": [
      "Он используется принимающим устройством для обнаружения любых ошибок, которые могли произойти при передаче."
    ]
  },
  {
    "time": [
      435.96,
      441.43
    ],
    "en": [
      "Okay, now let’s take a look at these fields in more detail, starting with the preamble"
    ],
    "ru": [
      "Хорошо, а теперь давайте рассмотрим эти поля более подробно, начиная с преамбулы."
    ]
  },
  {
    "time": [
      441.43,
      444.79
    ],
    "en": [
      "and start frame delimiter."
    ],
    "ru": [
      "и начальный разделитель кадров."
    ]
  },
  {
    "time": [
      444.79,
      451.11
    ],
    "en": [
      "Here are the first two fields, the Preamble and SFD, which I like to think of as a set."
    ],
    "ru": [
      "Вот первые два поля, Преамбула и SFD, которые мне нравится думать как о наборе."
    ]
  },
  {
    "time": [
      451.11,
      453.83
    ],
    "en": [
      "Let’s look at the preamble first."
    ],
    "ru": [
      "Давайте сначала посмотрим на преамбулу."
    ]
  },
  {
    "time": [
      453.83,
      456.599
    ],
    "en": [
      "It’s 7 bytes long."
    ],
    "ru": [
      "Его длина - 7 байтов."
    ]
  },
  {
    "time": [
      456.599,
      458.71
    ],
    "en": [
      "How many bits is that?"
    ],
    "ru": [
      "Сколько это бит?"
    ]
  },
  {
    "time": [
      458.71,
      466.35
    ],
    "en": [
      "If you remember, there are 8 bits in 1 byte, so, 7 times 8 is equal to... 56 bits."
    ],
    "ru": [
      "Если вы помните, в 1 байте 8 бит, поэтому 7 умножить на 8 равно ... 56 битам."
    ]
  },
  {
    "time": [
      466.35,
      470.199
    ],
    "en": [
      "It’s a series of alternating 1s and 0s."
    ],
    "ru": [
      "Это серия чередующихся единиц и нулей."
    ]
  },
  {
    "time": [
      470.199,
      478.939
    ],
    "en": [
      "Like this 10101010, which is one byte, seven times."
    ],
    "ru": [
      "Примерно так 10101010, это один байт, семь раз."
    ]
  },
  {
    "time": [
      478.939,
      484.02
    ],
    "en": [
      "The purpose of this is that it allows devices to synchronize their receiver clocks, to make"
    ],
    "ru": [
      "Цель этого состоит в том, что он позволяет устройствам синхронизировать часы своих приемников, чтобы"
    ]
  },
  {
    "time": [
      484.02,
      487.669
    ],
    "en": [
      "sure they’re ready to receive the rest of the frame and the data inside."
    ],
    "ru": [
      "уверен, что они готовы принять остальную часть кадра и данные внутри."
    ]
  },
  {
    "time": [
      487.669,
      492.56
    ],
    "en": [
      "Okay, that’s the preamble, now the SFD."
    ],
    "ru": [
      "Хорошо, это преамбула, теперь ЮФО."
    ]
  },
  {
    "time": [
      492.56,
      496.63
    ],
    "en": [
      "SFD stands for ‘start frame delimiter’."
    ],
    "ru": [
      "SFD означает «ограничитель начального кадра»."
    ]
  },
  {
    "time": [
      496.63,
      500.52
    ],
    "en": [
      "It’s length is 1 byte, or 8 bits."
    ],
    "ru": [
      "Его длина составляет 1 байт или 8 бит."
    ]
  },
  {
    "time": [
      500.52,
      508.669
    ],
    "en": [
      "It’s bit pattern is 10101011, similar to each byte of the preamble but the last bit"
    ],
    "ru": [
      "Это битовая комбинация 10101011, похожая на каждый байт преамбулы, но последний бит"
    ]
  },
  {
    "time": [
      508.669,
      511.83
    ],
    "en": [
      "is a 1, not a 0."
    ],
    "ru": [
      "это 1, а не 0."
    ]
  },
  {
    "time": [
      511.83,
      517.7
    ],
    "en": [
      "It indicates the end of the preamble and the beginning of the rest of the frame."
    ],
    "ru": [
      "Он указывает конец преамбулы и начало остальной части кадра."
    ]
  },
  {
    "time": [
      517.7,
      523.49
    ],
    "en": [
      "Now let’s look at the next two fields, the destination and source fields."
    ],
    "ru": [
      "Теперь давайте посмотрим на следующие два поля: целевое и исходное."
    ]
  },
  {
    "time": [
      523.49,
      528.86
    ],
    "en": [
      "They indicate the devices sending and receiving the frame, like when you send an email both"
    ],
    "ru": [
      "Они указывают устройства, отправляющие и получающие фрейм, например, когда вы отправляете электронное письмо и"
    ]
  },
  {
    "time": [
      528.86,
      534.37
    ],
    "en": [
      "the destination and source email addresses are included in the email, or when you send"
    ],
    "ru": [
      "адрес назначения и исходный адрес электронной почты включены в электронное письмо, или когда вы отправляете"
    ]
  },
  {
    "time": [
      534.37,
      539.44
    ],
    "en": [
      "a letter in the mail, although that’s getting less and less common these days."
    ],
    "ru": [
      "письмо по почте, хотя в наши дни это становится все реже и реже."
    ]
  },
  {
    "time": [
      539.44,
      545.23
    ],
    "en": [
      "The addresses used in Ethernet are the destination and source ‘MAC addresses’."
    ],
    "ru": [
      "Адреса, используемые в Ethernet, являются «MAC-адресами» назначения и источника."
    ]
  },
  {
    "time": [
      545.23,
      549.31
    ],
    "en": [
      "MAC stands for media access control."
    ],
    "ru": [
      "MAC означает контроль доступа к среде."
    ]
  },
  {
    "time": [
      549.31,
      556.14
    ],
    "en": [
      "The MAC address is a 6-byte, or 48-bit, address of the physical device."
    ],
    "ru": [
      "MAC-адрес - это 6-байтовый или 48-битный адрес физического устройства."
    ]
  },
  {
    "time": [
      556.14,
      561.28
    ],
    "en": [
      "This is separate from a logical address like an IP address, the MAC address is actually"
    ],
    "ru": [
      "Это отдельный от логического адреса, такого как IP-адрес, MAC-адрес на самом деле"
    ]
  },
  {
    "time": [
      561.28,
      563.94
    ],
    "en": [
      "assigned to the device when it is made."
    ],
    "ru": [
      "назначается устройству при его изготовлении."
    ]
  },
  {
    "time": [
      563.94,
      569.07
    ],
    "en": [
      "I’ll talk more about MAC addresses in a few slides, but let’s move on to the remaining"
    ],
    "ru": [
      "Я расскажу больше о MAC-адресах на нескольких слайдах, но перейдем к оставшимся"
    ]
  },
  {
    "time": [
      569.07,
      572.339
    ],
    "en": [
      "fields of the Ethernet frame."
    ],
    "ru": [
      "поля кадра Ethernet."
    ]
  },
  {
    "time": [
      572.339,
      578.51
    ],
    "en": [
      "The last field of the Ethernet header is the Type or Length field."
    ],
    "ru": [
      "Последнее поле заголовка Ethernet - это поле типа или длины."
    ]
  },
  {
    "time": [
      578.51,
      582.2
    ],
    "en": [
      "It is 2-bytes, or 16-bits, in length."
    ],
    "ru": [
      "Его длина составляет 2 байта или 16 бит."
    ]
  },
  {
    "time": [
      582.2,
      587.01
    ],
    "en": [
      "It can be used to represent either the type of the encapsulated packet, or the length"
    ],
    "ru": [
      "Его можно использовать для представления либо типа инкапсулированного пакета, либо длины."
    ]
  },
  {
    "time": [
      587.01,
      589.53
    ],
    "en": [
      "of the encapsulated packet."
    ],
    "ru": [
      "инкапсулированного пакета."
    ]
  },
  {
    "time": [
      589.53,
      590.77
    ],
    "en": [
      "What do I mean by that?"
    ],
    "ru": [
      "Что я имею в виду?"
    ]
  },
  {
    "time": [
      590.77,
      601.99
    ],
    "en": [
      "Well, if the value in the field is 1500 or less, that means it is indicating the LENGTH of the encapsulated packet in bytes."
    ],
    "ru": [
      "Что ж, если значение в поле 1500 или меньше, это означает, что оно указывает ДЛИНУ инкапсулированного пакета в байтах."
    ]
  },
  {
    "time": [
      601.99,
      607.86
    ],
    "en": [
      "For example, if the value in this field is 1,400, it means that the encapsulated packet"
    ],
    "ru": [
      "Например, если значение в этом поле - 1,400, это означает, что инкапсулированный пакет"
    ]
  },
  {
    "time": [
      607.86,
      610.33
    ],
    "en": [
      "is 1,400 bytes in length."
    ],
    "ru": [
      "имеет длину 1400 байт."
    ]
  },
  {
    "time": [
      610.33,
      618.43
    ],
    "en": [
      "However, a value of 1,536 or greater in this field indicates the TYPE of the encapsulated"
    ],
    "ru": [
      "Однако значение 1,536 или больше в этом поле указывает ТИП инкапсулированного"
    ]
  },
  {
    "time": [
      618.43,
      625.16
    ],
    "en": [
      "packet, which is usually internet protocol version 4 or version 6, and then the length"
    ],
    "ru": [
      "пакет, который обычно является интернет-протоколом версии 4 или версии 6, а затем длина"
    ]
  },
  {
    "time": [
      625.16,
      628.459
    ],
    "en": [
      "is determined via other methods."
    ],
    "ru": [
      "определяется другими методами."
    ]
  },
  {
    "time": [
      628.459,
      637.85
    ],
    "en": [
      "For example, a value of 0x0800, which is written in hexadecimal, and is equal to 2048 in decimal."
    ],
    "ru": [
      "Например, значение 0x0800, записанное в шестнадцатеричном формате, равно 2048 в десятичном."
    ]
  },
  {
    "time": [
      637.85,
      644.45
    ],
    "en": [
      "The 0x in front of 0800 is used to indicate hexadecimal, by the way."
    ],
    "ru": [
      "Кстати, 0x перед 0800 используется для обозначения шестнадцатеричного числа."
    ]
  },
  {
    "time": [
      644.45,
      650.93
    ],
    "en": [
      "I’ll talk more about hexadecimal in a few slides when I talk in detail about MAC addresses."
    ],
    "ru": [
      "Я расскажу больше о шестнадцатеричной системе счисления на нескольких слайдах, когда подробно расскажу о MAC-адресах."
    ]
  },
  {
    "time": [
      650.93,
      658.05
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
      650.93,
      658.05
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
      658.05,
      662.62
    ],
    "en": [
      "packet is an IPv4 packet."
    ],
    "ru": [
      "Пакет - это пакет IPv4."
    ]
  },
  {
    "time": [
      662.62,
      670.97
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
      662.62,
      670.97
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
      670.97,
      674.97
    ],
    "en": [
      "packet is an IPv6 packet."
    ],
    "ru": [
      "Пакет - это пакет IPv6."
    ]
  },
  {
    "time": [
      674.97,
      679.0
    ],
    "en": [
      "Okay, so those are all of the fields in an Ethernet header."
    ],
    "ru": [
      "Хорошо, это все поля заголовка Ethernet."
    ]
  },
  {
    "time": [
      679.0,
      683.05
    ],
    "en": [
      "Try to remember the lengths of each field..."
    ],
    "ru": [
      "Постарайтесь запомнить длину каждого поля ..."
    ]
  },
  {
    "time": [
      683.05,
      691.41
    ],
    "en": [
      "The preamble is 7 bytes long, the start frame delimiter is 1 byte, the destination is 6"
    ],
    "ru": [
      "Длина преамбулы 7 байтов, разделитель начального кадра - 1 байт, место назначения - 6."
    ]
  },
  {
    "time": [
      691.41,
      700.04
    ],
    "en": [
      "bytes, as is the source, as both are MAC addresses, and the Type, or length, field is 2 bytes."
    ],
    "ru": [
      "байтов, как и источник, поскольку оба являются MAC-адресами, а поле Тип или длина составляет 2 байта."
    ]
  },
  {
    "time": [
      700.04,
      708.61
    ],
    "en": [
      "Now let’s take a brief look at the only field of the Ethernet trailer, the FCS, or frame check sequence."
    ],
    "ru": [
      "Теперь давайте кратко рассмотрим единственное поле трейлера Ethernet, FCS или последовательность проверки кадров."
    ]
  },
  {
    "time": [
      708.61,
      716.6
    ],
    "en": [
      "The only field of the Ethernet trailer is the FCS, which as I mentioned stands for frame check sequence."
    ],
    "ru": [
      "Единственное поле трейлера Ethernet - это FCS, которое, как я уже упоминал, означает последовательность проверки кадров."
    ]
  },
  {
    "time": [
      716.6,
      720.14
    ],
    "en": [
      "It is 4 bytes, or 32-bits in length."
    ],
    "ru": [
      "Его длина составляет 4 байта или 32 бита."
    ]
  },
  {
    "time": [
      720.14,
      728.19
    ],
    "en": [
      "It’s purpose is to detect corrupted data by running a ‘CRC’ algorithm over the received data."
    ],
    "ru": [
      "Его цель - обнаружить поврежденные данные, запустив алгоритм «CRC» для полученных данных."
    ]
  },
  {
    "time": [
      728.19,
      733.149
    ],
    "en": [
      "CRC means cyclic redundancy check."
    ],
    "ru": [
      "CRC означает циклический контроль избыточности."
    ]
  },
  {
    "time": [
      733.149,
      738.11
    ],
    "en": [
      "Cyclic refers to something called ‘cyclic codes', ‘redundancy’ refers to the fact"
    ],
    "ru": [
      "Циклический относится к так называемым «циклическим кодам», «избыточность» относится к факту"
    ]
  },
  {
    "time": [
      738.11,
      743.339
    ],
    "en": [
      "that these 4 bytes at the end of the message enlarge the message without adding any new"
    ],
    "ru": [
      "что эти 4 байта в конце сообщения увеличивают сообщение без добавления новых"
    ]
  },
  {
    "time": [
      743.339,
      749.5
    ],
    "en": [
      "information, so they are redundant, and check refers to the fact that is CHECKS, or verifies,"
    ],
    "ru": [
      "информации, поэтому они являются избыточными, а проверка относится к тому факту, что ПРОВЕРЯЕТ, или проверяет,"
    ]
  },
  {
    "time": [
      749.5,
      750.68
    ],
    "en": [
      "the data for errors."
    ],
    "ru": [
      "данные для ошибок."
    ]
  },
  {
    "time": [
      750.68,
      757.18
    ],
    "en": [
      "Don’t worry about the details of CRC too much, just be aware of the term,"
    ],
    "ru": [
      "Не беспокойтесь о деталях CRC, просто помните о термине,"
    ]
  },
  {
    "time": [
      757.18,
      763.98
    ],
    "en": [
      "and remember that the Ethernet frame’s Frame Check Sequence is a Cyclic Redundancy Check."
    ],
    "ru": [
      "и помните, что последовательность проверки кадров кадра Ethernet является циклической проверкой избыточности."
    ]
  },
  {
    "time": [
      763.98,
      768.11
    ],
    "en": [
      "If you remember that, you should be good for the CCNA."
    ],
    "ru": [
      "Если вы это запомните, вы должны хорошо относиться к CCNA."
    ]
  },
  {
    "time": [
      768.11,
      773.62
    ],
    "en": [
      "Feel free to read around on Wikipedia if you’re curious to learn more about Cyclic Redundancy Checks."
    ],
    "ru": [
      "Не стесняйтесь читать в Википедии, если вам интересно узнать больше о циклических проверках избыточности."
    ]
  },
  {
    "time": [
      773.62,
      780.87
    ],
    "en": [
      "Okay, now we know all of the fields of an Ethernet frame, both the header and the trailer."
    ],
    "ru": [
      "Хорошо, теперь мы знаем все поля кадра Ethernet, как заголовок, так и трейлер."
    ]
  },
  {
    "time": [
      780.87,
      784.45
    ],
    "en": [
      "Try to recall the length of each field again…."
    ],
    "ru": [
      "Попытайтесь снова вспомнить длину каждого поля…."
    ]
  },
  {
    "time": [
      784.45,
      788.05
    ],
    "en": [
      "The Preamble is 7 bytes…."
    ],
    "ru": [
      "Преамбула составляет 7 байтов…."
    ]
  },
  {
    "time": [
      788.05,
      791.85
    ],
    "en": [
      "The Start-frame delimiter is 1 byte…."
    ],
    "ru": [
      "Разделитель начального кадра - 1 байт…."
    ]
  },
  {
    "time": [
      791.85,
      800.329
    ],
    "en": [
      "The destination is 6 bytes... the source is 6 bytes also... the type, or length, field"
    ],
    "ru": [
      "Место назначения - 6 байтов ... источник также 6 байтов ... тип или длина поля"
    ]
  },
  {
    "time": [
      800.329,
      807.45
    ],
    "en": [
      "is 2 bytes...How about the trailer, what’s the length of the frame check sequence?"
    ],
    "ru": [
      "составляет 2 байта ... Как насчет трейлера, какова длина последовательности проверки кадров?"
    ]
  },
  {
    "time": [
      807.45,
      810.019
    ],
    "en": [
      "It is 4 bytes."
    ],
    "ru": [
      "Это 4 байта."
    ]
  },
  {
    "time": [
      810.019,
      815.1
    ],
    "en": [
      "This brings the total size, including header and trailer, to 26 bytes."
    ],
    "ru": [
      "Таким образом, общий размер, включая заголовок и трейлер, составляет 26 байт."
    ]
  },
  {
    "time": [
      815.1,
      819.769
    ],
    "en": [
      "So, there’s an overview of each field of an Ethernet frame."
    ],
    "ru": [
      "Итак, есть обзор каждого поля кадра Ethernet."
    ]
  },
  {
    "time": [
      819.769,
      827.449
    ],
    "en": [
      "However, the fields I really want to focus on in this video are the source and destination MAC address fields."
    ],
    "ru": [
      "Однако поля, на которых я действительно хочу сосредоточиться в этом видео, - это поля MAC-адреса источника и назначения."
    ]
  },
  {
    "time": [
      827.449,
      833.019
    ],
    "en": [
      "I mentioned a little bit about MAC addresses, but let’s dig a little deeper."
    ],
    "ru": [
      "Я немного упомянул об MAC-адресах, но давайте копнем глубже."
    ]
  },
  {
    "time": [
      833.019,
      837.13
    ],
    "en": [
      "So let’s spend a few slides looking into MAC addresses."
    ],
    "ru": [
      "Итак, давайте потратим несколько слайдов на изучение MAC-адресов."
    ]
  },
  {
    "time": [
      837.13,
      843.11
    ],
    "en": [
      "As I mentioned before, a MAC address is a 6-byte, or 48-bit, physical address assigned"
    ],
    "ru": [
      "Как я упоминал ранее, MAC-адрес - это 6-байтовый или 48-битный физический адрес, назначенный"
    ]
  },
  {
    "time": [
      843.11,
      845.85
    ],
    "en": [
      "to the device when it is made."
    ],
    "ru": [
      "к устройству, когда это будет сделано."
    ]
  },
  {
    "time": [
      845.85,
      852.42
    ],
    "en": [
      "This is different than an IP address, which you assign in the CLI when you configure the device."
    ],
    "ru": [
      "Это отличается от IP-адреса, который вы назначаете в интерфейсе командной строки при настройке устройства."
    ]
  },
  {
    "time": [
      852.42,
      859.95
    ],
    "en": [
      "You might also hear the term ‘burned in address', or BIA, to refer to a MAC address."
    ],
    "ru": [
      "Вы также можете услышать термин «записанный адрес» или BIA для обозначения MAC-адреса."
    ]
  },
  {
    "time": [
      859.95,
      865.25
    ],
    "en": [
      "This is because the address is ‘burned-in’ to the device as it is made."
    ],
    "ru": [
      "Это связано с тем, что адрес «вживляется» в устройство в том виде, в котором он был создан."
    ]
  },
  {
    "time": [
      865.25,
      871.62
    ],
    "en": [
      "The MAC address is globally unique, no two devices in the world should have the same MAC address."
    ],
    "ru": [
      "MAC-адрес глобально уникален, никакие два устройства в мире не должны иметь одинаковый MAC-адрес."
    ]
  },
  {
    "time": [
      871.62,
      876.54
    ],
    "en": [
      "Although, there are MAC addresses known as ‘locally-unique’ MAC address, which don’t"
    ],
    "ru": [
      "Хотя существуют MAC-адреса, известные как «локально уникальные» MAC-адреса, которые не"
    ]
  },
  {
    "time": [
      876.54,
      884.54
    ],
    "en": [
      "have to be globally unique throughout the world, however in almost all cases MAC addresses are globally unique."
    ],
    "ru": [
      "должны быть глобально уникальными во всем мире, однако почти во всех случаях MAC-адреса глобально уникальны."
    ]
  },
  {
    "time": [
      884.54,
      890.54
    ],
    "en": [
      "The first 3 bytes of the MAC address are the OUI, which stands for organizationally unique"
    ],
    "ru": [
      "Первые 3 байта MAC-адреса - это OUI, что означает организационно уникальный"
    ]
  },
  {
    "time": [
      890.54,
      895.87
    ],
    "en": [
      "identifier, and it's assigned to the company making the device."
    ],
    "ru": [
      "идентификатор, и он присваивается компании, производящей устройство."
    ]
  },
  {
    "time": [
      895.87,
      903.009
    ],
    "en": [
      "So Cisco, for example, will have various OUIs which only Cisco can use, and other makers will"
    ],
    "ru": [
      "Так, например, Cisco будет иметь различные OUI, которые может использовать только Cisco, а другие производители будут"
    ]
  },
  {
    "time": [
      903.009,
      906.89
    ],
    "en": [
      "have their own OUIs which only they can use."
    ],
    "ru": [
      "имеют свои собственные OUI, которые могут использовать только они."
    ]
  },
  {
    "time": [
      906.89,
      913.779
    ],
    "en": [
      "The last 3 bytes, the second half of the address, are unique to the device itself."
    ],
    "ru": [
      "Последние 3 байта, вторая половина адреса, уникальны для самого устройства."
    ]
  },
  {
    "time": [
      913.779,
      919.25
    ],
    "en": [
      "MAC addresses are written as a series of 12 hexadecimal characters."
    ],
    "ru": [
      "MAC-адреса записываются как последовательность из 12 шестнадцатеричных символов."
    ]
  },
  {
    "time": [
      919.25,
      925.31
    ],
    "en": [
      "For those of you who aren’t sure what hexadecimal is, let’s check it out a little bit."
    ],
    "ru": [
      "Для тех из вас, кто не знает, что такое шестнадцатеричное, давайте немного проверим его."
    ]
  },
  {
    "time": [
      925.31,
      931.29
    ],
    "en": [
      "Before explaining hexadecimal, I want to make sure we all understand how the decimal system works."
    ],
    "ru": [
      "Прежде чем объяснять шестнадцатеричную систему, я хочу убедиться, что мы все понимаем, как работает десятичная система."
    ]
  },
  {
    "time": [
      931.29,
      936.53
    ],
    "en": [
      "I don’t mean to insult anyone’s intelligence, I’m sure you all know how to count, but"
    ],
    "ru": [
      "Я не собираюсь оскорблять чей-либо интеллект, я уверен, что вы все умеете считать, но"
    ]
  },
  {
    "time": [
      936.53,
      941.24
    ],
    "en": [
      "let’s just review the system so we can compare it to hexadecimal."
    ],
    "ru": [
      "Давайте просто рассмотрим систему, чтобы сравнить ее с шестнадцатеричной."
    ]
  },
  {
    "time": [
      941.24,
      950.73
    ],
    "en": [
      "The decimal system uses 10 possible digits, 0,1,2,3,4,5,6,7,8, and 9."
    ],
    "ru": [
      "В десятичной системе используются 10 возможных цифр: 0,1,2,3,4,5,6,7,8 и 9."
    ]
  },
  {
    "time": [
      950.73,
      960.009
    ],
    "en": [
      "So, you start with 0, then 1,2,3,4,5,6,7,8, and 9."
    ],
    "ru": [
      "Итак, вы начинаете с 0, затем с 1, 2, 3, 4, 5, 6, 7, 8 и 9."
    ]
  },
  {
    "time": [
      960.009,
      966.019
    ],
    "en": [
      "This number 9 here represents 9 1s, or 9 times 1."
    ],
    "ru": [
      "Это число 9 здесь означает 9 единиц или 9 умноженных на 1."
    ]
  },
  {
    "time": [
      966.019,
      968.23
    ],
    "en": [
      "Then where do you go from here?"
    ],
    "ru": [
      "Тогда куда вы идете отсюда?"
    ]
  },
  {
    "time": [
      968.23,
      973.31
    ],
    "en": [
      "You have to add another digit, adding a 10s column."
    ],
    "ru": [
      "Вам нужно добавить еще одну цифру, добавив столбец 10."
    ]
  },
  {
    "time": [
      973.31,
      978.13
    ],
    "en": [
      "You probably look at this number and just think ‘10’, but really it means 1 value"
    ],
    "ru": [
      "Вы, вероятно, смотрите на это число и думаете только о «10», но на самом деле это означает 1 значение."
    ]
  },
  {
    "time": [
      978.13,
      982.44
    ],
    "en": [
      "of 10, and 0 values of 1."
    ],
    "ru": [
      "из 10 и 0 значений из 1."
    ]
  },
  {
    "time": [
      982.44,
      986.91
    ],
    "en": [
      "Then 11, is one 1, and 1 1."
    ],
    "ru": [
      "Тогда 11 - это единица 1, а 1 1."
    ]
  },
  {
    "time": [
      986.91,
      995.94
    ],
    "en": [
      "Then you increase the ones column to get 12, 13, 14, 15, 16, 17, 18, and 19."
    ],
    "ru": [
      "Затем вы увеличиваете столбец единиц, чтобы получить 12, 13, 14, 15, 16, 17, 18 и 19."
    ]
  },
  {
    "time": [
      995.94,
      1001.019
    ],
    "en": [
      "Then you can’t increase the ones column anymore, so you add 1 to the 10s column to"
    ],
    "ru": [
      "Затем вы больше не можете увеличивать количество единиц в столбце, поэтому вы добавляете 1 в столбец с десятками, чтобы"
    ]
  },
  {
    "time": [
      1001.019,
      1006.42
    ],
    "en": [
      "get 20, which is 2 tens, and 0 ones."
    ],
    "ru": [
      "получаем 20, что составляет 2 десятка, и 0 единиц."
    ]
  },
  {
    "time": [
      1006.42,
      1012.829
    ],
    "en": [
      "Then 21, 22, etc. all the way to 99."
    ],
    "ru": [
      "Затем 21, 22 и т. Д. До 99."
    ]
  },
  {
    "time": [
      1012.829,
      1017.22
    ],
    "en": [
      "Now both the 10s column and the 1s column are maxed out."
    ],
    "ru": [
      "Теперь оба столбца 10 и 1 исчерпаны."
    ]
  },
  {
    "time": [
      1017.22,
      1022.36
    ],
    "en": [
      "To represent higher numbers, you have to add another column, the 100s column."
    ],
    "ru": [
      "Чтобы представить более высокие числа, вам нужно добавить еще один столбец, столбец 100."
    ]
  },
  {
    "time": [
      1022.36,
      1031.3
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
      1022.36,
      1031.3
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
      1031.3,
      1038.82
    ],
    "en": [
      "Then you follow the same process, to get 101, 102, etc all the way to 999."
    ],
    "ru": [
      "Затем вы следуете тому же процессу, чтобы получить 101, 102 и т. Д. До 999."
    ]
  },
  {
    "time": [
      1038.82,
      1041.56
    ],
    "en": [
      "Then once again, you have to add another column, to make 1000."
    ],
    "ru": [
      "Затем вам снова нужно добавить еще один столбец, чтобы получить 1000."
    ]
  },
  {
    "time": [
      1041.56,
      1044.31
    ],
    "en": [
      "So, that’s how the decimal system works."
    ],
    "ru": [
      "Итак, вот как работает десятичная система."
    ]
  },
  {
    "time": [
      1044.31,
      1046.82
    ],
    "en": [
      "Let’s look at hexadecimal."
    ],
    "ru": [
      "Давайте посмотрим на шестнадцатеричный."
    ]
  },
  {
    "time": [
      1046.82,
      1054.93
    ],
    "en": [
      "While decimal uses 10 possible digits, hexadecimal uses 16 possible digits."
    ],
    "ru": [
      "В то время как десятичное число использует 10 возможных цифр, шестнадцатеричное использует 16 возможных цифр."
    ]
  },
  {
    "time": [
      1054.93,
      1062.48
    ],
    "en": [
      "The first 10 are the same as the decimal system, 0,1,2,3,4,5,6,7,8, and 9."
    ],
    "ru": [
      "Первые 10 совпадают с десятичной системой: 0,1,2,3,4,5,6,7,8 и 9."
    ]
  },
  {
    "time": [
      1062.48,
      1071.7
    ],
    "en": [
      "The other 6 are borrowed from the alphabet, A, B, C, D, E, and F. Although these are the"
    ],
    "ru": [
      "Остальные 6 заимствованы из алфавита: A, B, C, D, E и F. Хотя это"
    ]
  },
  {
    "time": [
      1071.7,
      1076.11
    ],
    "en": [
      "same characters as in the alphabet, they represent numbers here."
    ],
    "ru": [
      "те же символы, что и в алфавите, здесь они обозначают числа."
    ]
  },
  {
    "time": [
      1076.11,
      1089.86
    ],
    "en": [
      "So, hexadecimal A is equivalent to 10 in decimal, B is 11, C is 12, D is 13, E is 14, and F is 15."
    ],
    "ru": [
      "Итак, шестнадцатеричный A эквивалентен 10 в десятичном, B - 11, C - 12, D - 13, E - 14 и F - 15."
    ]
  },
  {
    "time": [
      1089.86,
      1097.55
    ],
    "en": [
      "Here’s a chart showing some decimal numbers, in black, and their hexadecimal equivalents, in red."
    ],
    "ru": [
      "Вот диаграмма, показывающая некоторые десятичные числа черным цветом и их шестнадцатеричные эквиваленты красным цветом."
    ]
  },
  {
    "time": [
      1097.55,
      1104.15
    ],
    "en": [
      "We already saw the hexadecimal numbers up to F, which is equal to decimal 15."
    ],
    "ru": [
      "Мы уже видели шестнадцатеричные числа до F, что равно десятичному 15."
    ]
  },
  {
    "time": [
      1104.15,
      1107.66
    ],
    "en": [
      "Notice how the numbers are written after F."
    ],
    "ru": [
      "Обратите внимание, как числа написаны после F."
    ]
  },
  {
    "time": [
      1107.66,
      1112.41
    ],
    "en": [
      "This hexadecimal number looks like 10, but it isn’t 10."
    ],
    "ru": [
      "Это шестнадцатеричное число выглядит как 10, но это не 10."
    ]
  },
  {
    "time": [
      1112.41,
      1119.92
    ],
    "en": [
      "The second column in hexadecimal represents 16, so this is 1 sixteen, and 0 1s."
    ],
    "ru": [
      "Второй столбец в шестнадцатеричном формате представляет 16, так что это 1 шестнадцать и 0 единиц."
    ]
  },
  {
    "time": [
      1119.92,
      1124.08
    ],
    "en": [
      "So, it’s equivalent to decimal 16."
    ],
    "ru": [
      "Таким образом, это эквивалентно десятичному числу 16."
    ]
  },
  {
    "time": [
      1124.08,
      1134.26
    ],
    "en": [
      "This number looks like 11, but really it’s 1 16 and 1 1, so it’s equivalent to decimal 17."
    ],
    "ru": [
      "Это число выглядит как 11, но на самом деле это 1 16 и 1 1, поэтому оно эквивалентно десятичному 17."
    ]
  },
  {
    "time": [
      1134.26,
      1143.04
    ],
    "en": [
      "hexadecimal 1 2 is decimal 18, hexadecimal 1 3 is decimal 19, hexadecimal 1 4 is decimal"
    ],
    "ru": [
      "шестнадцатеричный 1 2 - десятичный 18, шестнадцатеричный 1 3 - десятичный 19, шестнадцатеричный 1 4 - десятичный"
    ]
  },
  {
    "time": [
      1143.04,
      1154.02
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
      1143.04,
      1154.02
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
      1154.02,
      1159.18
    ],
    "en": [
      "hexadecimal 1 7 is decimal 23, etc."
    ],
    "ru": [
      "шестнадцатеричный 1 7 - десятичный 23 и т. д."
    ]
  },
  {
    "time": [
      1159.18,
      1166.95
    ],
    "en": [
      "Hexadecimal then proceeds 1 8, 1 9, 1 A, 1 B, 1 C, etc."
    ],
    "ru": [
      "Затем в шестнадцатеричном формате выполняется 1 8, 1 9, 1 A, 1 B, 1 C и т. Д."
    ]
  },
  {
    "time": [
      1166.95,
      1171.72
    ],
    "en": [
      "The purpose of all of this is just to give you an introduction to hexadecimal."
    ],
    "ru": [
      "Цель всего этого - дать вам представление о шестнадцатеричной системе счисления."
    ]
  },
  {
    "time": [
      1171.72,
      1177.6
    ],
    "en": [
      "When we cover internet protocol version 6 in a later lesson, we’ll go more in depth."
    ],
    "ru": [
      "Когда мы рассмотрим интернет-протокол версии 6 на следующем уроке, мы рассмотрим более подробно."
    ]
  },
  {
    "time": [
      1177.6,
      1185.26
    ],
    "en": [
      "For now, if you have a general understanding of what hexadecimal is, that’s good enough. Let’s move on."
    ],
    "ru": [
      "На данный момент, если у вас есть общее представление о шестнадцатеричной системе счисления, этого достаточно. Давайте двигаться дальше."
    ]
  },
  {
    "time": [
      1185.26,
      1190.48
    ],
    "en": [
      "So here’s a simple network, just three PCs connected to a switch."
    ],
    "ru": [
      "Итак, вот простая сеть, всего три ПК, подключенных к коммутатору."
    ]
  },
  {
    "time": [
      1190.48,
      1197.12
    ],
    "en": [
      "Notice the interface names for the switch, F0/1, F0/2, and F0/3."
    ],
    "ru": [
      "Обратите внимание на названия интерфейсов для переключателя: F0 / 1, F0 / 2 и F0 / 3."
    ]
  },
  {
    "time": [
      1197.12,
      1202.13
    ],
    "en": [
      "F means fastethernet, so these are 100 megabit per second interfaces."
    ],
    "ru": [
      "F означает fastethernet, так что это интерфейсы со скоростью 100 мегабит в секунду."
    ]
  },
  {
    "time": [
      1202.13,
      1205.76
    ],
    "en": [
      "I’ve also written the MAC address for each PC."
    ],
    "ru": [
      "Я также написал MAC-адрес для каждого ПК."
    ]
  },
  {
    "time": [
      1205.76,
      1210.5
    ],
    "en": [
      "You’re probably not going to see any MAC addresses like these, I’ve just simplified"
    ],
    "ru": [
      "Вы, вероятно, не увидите таких MAC-адресов, я просто упростил"
    ]
  },
  {
    "time": [
      1210.5,
      1213.35
    ],
    "en": [
      "them for this demonstration."
    ],
    "ru": [
      "их для этой демонстрации."
    ]
  },
  {
    "time": [
      1213.35,
      1220.31
    ],
    "en": [
      "Notice each MAC address is a series of 12 hexadecimal digits, separated by periods."
    ],
    "ru": [
      "Обратите внимание, что каждый MAC-адрес представляет собой серию из 12 шестнадцатеричных цифр, разделенных точками."
    ]
  },
  {
    "time": [
      1220.31,
      1225.41
    ],
    "en": [
      "You may also see periods after every other digit, so for example PC1’s MAC address"
    ],
    "ru": [
      "Вы также можете видеть точки после каждой второй цифры, например, MAC-адрес ПК1"
    ]
  },
  {
    "time": [
      1225.41,
      1237.46
    ],
    "en": [
      "would be AA dot AA dot AA dot 00 dot 00 dot 01. But I tend to write them after every fourth character."
    ],
    "ru": [
      "будет AA точка AA точка AA точка 00 точка 00 точка 01. Но я обычно пишу их после каждого четвертого символа."
    ]
  },
  {
    "time": [
      1237.46,
      1244.44
    ],
    "en": [
      "The OUI, or organizationally unique identifier, which is the first half of the MAC address,"
    ],
    "ru": [
      "OUI или организационно уникальный идентификатор, который является первой половиной MAC-адреса,"
    ]
  },
  {
    "time": [
      1244.44,
      1252.02
    ],
    "en": [
      "is AAAAAA for each device, so we know that these PCs are all from the same maker."
    ],
    "ru": [
      "AAAAAA для каждого устройства, поэтому мы знаем, что все эти ПК от одного производителя."
    ]
  },
  {
    "time": [
      1252.02,
      1256.91
    ],
    "en": [
      "The second half of the MAC address of each device, however, is different for each PC,"
    ],
    "ru": [
      "Однако вторая половина MAC-адреса каждого устройства различается для каждого ПК."
    ]
  },
  {
    "time": [
      1256.91,
      1259.83
    ],
    "en": [
      "as the second half identifies the device itself."
    ],
    "ru": [
      "поскольку вторая половина идентифицирует само устройство."
    ]
  },
  {
    "time": [
      1259.83,
      1266.27
    ],
    "en": [
      "Now, let’s say PC1 wants to send some data to PC2."
    ],
    "ru": [
      "Теперь предположим, что ПК1 хочет отправить некоторые данные на ПК2."
    ]
  },
  {
    "time": [
      1266.27,
      1273.03
    ],
    "en": [
      "Due to lack of space I’ve just written an abbreviated form of the destination and source MAC addresses here."
    ],
    "ru": [
      "Из-за нехватки места я только что написал здесь сокращенную форму MAC-адресов назначения и источника."
    ]
  },
  {
    "time": [
      1273.03,
      1278.25
    ],
    "en": [
      "By the way, this kind of frame is called a ‘unicast frame’, a frame destined for"
    ],
    "ru": [
      "Кстати, этот вид фрейма называется «одноадресным фреймом», фрейм, предназначенный для"
    ]
  },
  {
    "time": [
      1278.25,
      1282.2
    ],
    "en": [
      "a single target, PC2 in this case."
    ],
    "ru": [
      "одна цель, в данном случае PC2."
    ]
  },
  {
    "time": [
      1282.2,
      1287.38
    ],
    "en": [
      "There are other kinds of frames, like broadcast frames, which we’ll learn as we go along."
    ],
    "ru": [
      "Существуют и другие виды кадров, например широковещательные, которые мы узнаем по мере продвижения."
    ]
  },
  {
    "time": [
      1287.38,
      1291.61
    ],
    "en": [
      "But for now, remember this term, unicast."
    ],
    "ru": [
      "Но пока запомните этот термин, одноадресная передача."
    ]
  },
  {
    "time": [
      1291.61,
      1297.6
    ],
    "en": [
      "PC1 sends the frame through it’s network interface card, which is connected to SW1,"
    ],
    "ru": [
      "ПК1 отправляет кадр через свою сетевую карту, которая подключена к SW1,"
    ]
  },
  {
    "time": [
      1297.6,
      1300.95
    ],
    "en": [
      "and SW1 receives the frame."
    ],
    "ru": [
      "и SW1 принимает фрейм."
    ]
  },
  {
    "time": [
      1300.95,
      1305.94
    ],
    "en": [
      "After SW1 receives the frame, it looks at the source MAC address field of the frame"
    ],
    "ru": [
      "После того, как SW1 получает кадр, он просматривает поле MAC-адреса источника кадра."
    ]
  },
  {
    "time": [
      1305.94,
      1309.66
    ],
    "en": [
      "and then uses that information to LEARN where PC1 is."
    ],
    "ru": [
      "а затем использует эту информацию, чтобы УЗНАТЬ, где находится ПК1."
    ]
  },
  {
    "time": [
      1309.66,
      1320.29
    ],
    "en": [
      "As you can see here, it adds the MAC address AAAA.AA00.0001 to it’s MAC Address table,"
    ],
    "ru": [
      "Как вы можете видеть здесь, он добавляет MAC-адрес AAAA.AA00.0001 в свою таблицу MAC-адресов,"
    ]
  },
  {
    "time": [
      1320.29,
      1325.27
    ],
    "en": [
      "and it associates that MAC address with its F0/1 interface."
    ],
    "ru": [
      "и связывает этот MAC-адрес со своим интерфейсом F0 / 1."
    ]
  },
  {
    "time": [
      1325.27,
      1331.16
    ],
    "en": [
      "This is known as a ‘dynamically learned’ MAC address, or just ‘dynamic MAC address’,"
    ],
    "ru": [
      "Это называется «динамически изученным» MAC-адресом или просто «динамическим MAC-адресом»."
    ]
  },
  {
    "time": [
      1331.16,
      1337.41
    ],
    "en": [
      "because it wasn’t manually configured on the switch, the switch learned it itself."
    ],
    "ru": [
      "поскольку он не был настроен на коммутаторе вручную, коммутатор обучился этому сам."
    ]
  },
  {
    "time": [
      1337.41,
      1341.86
    ],
    "en": [
      "Every switch will keep a MAC address table like this, and they fill the MAC address table"
    ],
    "ru": [
      "Каждый коммутатор будет вести такую ​​таблицу MAC-адресов, и они заполняют таблицу MAC-адресов."
    ]
  },
  {
    "time": [
      1341.86,
      1347.41
    ],
    "en": [
      "dynamically by looking at the source MAC address of frames it receives."
    ],
    "ru": [
      "динамически, глядя на исходный MAC-адрес получаемых кадров."
    ]
  },
  {
    "time": [
      1347.41,
      1357.85
    ],
    "en": [
      "Since SW1 received a frame from source MAC Address AAAA.AA00.0001 on it’s F0/1 interface,"
    ],
    "ru": [
      "Поскольку SW1 получил кадр с исходного MAC-адреса AAAA.AA00.0001 на своем интерфейсе F0 / 1,"
    ]
  },
  {
    "time": [
      1357.85,
      1364.62
    ],
    "en": [
      "it knows that I can reach that MAC address on that interface, and adds it to the MAC address table."
    ],
    "ru": [
      "он знает, что я могу достичь этого MAC-адреса на этом интерфейсе, и добавляет его в таблицу MAC-адресов."
    ]
  },
  {
    "time": [
      1364.62,
      1370.27
    ],
    "en": [
      "This is a very important concept, so I’ll probably repeat it multiple times."
    ],
    "ru": [
      "Это очень важная концепция, поэтому я, вероятно, повторю ее несколько раз."
    ]
  },
  {
    "time": [
      1370.27,
      1375.25
    ],
    "en": [
      "This is how switches dynamically learn where each device on the network is, by looking"
    ],
    "ru": [
      "Вот как коммутаторы динамически узнают, где находится каждое устройство в сети, просматривая"
    ]
  },
  {
    "time": [
      1375.25,
      1377.89
    ],
    "en": [
      "at the source MAC address of the frame."
    ],
    "ru": [
      "на исходном MAC-адресе кадра."
    ]
  },
  {
    "time": [
      1377.89,
      1380.88
    ],
    "en": [
      "Now, there is one problem."
    ],
    "ru": [
      "Теперь есть одна проблема."
    ]
  },
  {
    "time": [
      1380.88,
      1391.21
    ],
    "en": [
      "The destination of the frame is AAAA.AA00.0002, but SW1 doesn’t know where that is."
    ],
    "ru": [
      "Место назначения кадра - AAAA.AA00.0002, но SW1 не знает, где это."
    ]
  },
  {
    "time": [
      1391.21,
      1397.76
    ],
    "en": [
      "This, by the way, is called an ‘unknown unicast’ frame, a frame for which the switch"
    ],
    "ru": [
      "Это, кстати, называется кадром «неизвестной одноадресной рассылки», кадром, для которого коммутатор"
    ]
  },
  {
    "time": [
      1397.76,
      1402.25
    ],
    "en": [
      "doesn’t have an entry in its MAC Address table."
    ],
    "ru": [
      "не имеет записи в таблице MAC-адресов."
    ]
  },
  {
    "time": [
      1402.25,
      1407.59
    ],
    "en": [
      "Because the switch doesn’t know how to reach the destination, it has only one option."
    ],
    "ru": [
      "Поскольку коммутатор не знает, как добраться до пункта назначения, у него есть только один вариант."
    ]
  },
  {
    "time": [
      1407.59,
      1410.73
    ],
    "en": [
      "That is to FLOOD the frame."
    ],
    "ru": [
      "То есть ЗАЛИТЬ рамку."
    ]
  },
  {
    "time": [
      1410.73,
      1416.43
    ],
    "en": [
      "Flood means to forward the frame out of ALL of its interfaces, except the one it received the packet on."
    ],
    "ru": [
      "Flood означает пересылку кадра из ВСЕХ интерфейсов, кроме того, на котором он получил пакет."
    ]
  },
  {
    "time": [
      1416.43,
      1419.12
    ],
    "en": [
      "So, that would look like this."
    ],
    "ru": [
      "Итак, это будет выглядеть так."
    ]
  },
  {
    "time": [
      1419.12,
      1426.59
    ],
    "en": [
      "SW1 copies the frame and sends it out its F0/2 and F0/3 interfaces."
    ],
    "ru": [
      "SW1 копирует кадр и отправляет его через интерфейсы F0 / 2 и F0 / 3."
    ]
  },
  {
    "time": [
      1426.59,
      1432.71
    ],
    "en": [
      "It doesn’t send it out of its F0/1 interface, because that’s the interface it received the frame on."
    ],
    "ru": [
      "Он не отправляет его из своего интерфейса F0 / 1, потому что это интерфейс, на котором он получил кадр."
    ]
  },
  {
    "time": [
      1432.71,
      1435.15
    ],
    "en": [
      "So, what happens next?"
    ],
    "ru": [
      "Итак, что будет дальше?"
    ]
  },
  {
    "time": [
      1435.15,
      1440.53
    ],
    "en": [
      "Well, PC3 ignores the packet, because the destination MAC address doesn’t match its"
    ],
    "ru": [
      "Что ж, PC3 игнорирует пакет, потому что MAC-адрес назначения не соответствует его"
    ]
  },
  {
    "time": [
      1440.53,
      1443.77
    ],
    "en": [
      "own MAC address, it simply drops the packet."
    ],
    "ru": [
      "собственный MAC-адрес, он просто отбрасывает пакет."
    ]
  },
  {
    "time": [
      1443.77,
      1451.49
    ],
    "en": [
      "PC2, however, receives the packet, and then processes it normally, up the OSI stack."
    ],
    "ru": [
      "ПК2, однако, получает пакет, а затем обрабатывает его в обычном режиме в стеке OSI."
    ]
  },
  {
    "time": [
      1451.49,
      1456.43
    ],
    "en": [
      "However, unless PC2 sends a reply of some sort, it stops there."
    ],
    "ru": [
      "Однако, если ПК2 не отправит какой-либо ответ, он остановится на этом."
    ]
  },
  {
    "time": [
      1456.43,
      1462.53
    ],
    "en": [
      "SW1 never receives a packet from PC2, so it can’t learn PC2’s MAC address and use"
    ],
    "ru": [
      "SW1 никогда не получает пакет от ПК2, поэтому он не может узнать MAC-адрес ПК2 и использовать"
    ]
  },
  {
    "time": [
      1462.53,
      1464.68
    ],
    "en": [
      "it to populate the MAC address table."
    ],
    "ru": [
      "это для заполнения таблицы MAC-адресов."
    ]
  },
  {
    "time": [
      1464.68,
      1470.42
    ],
    "en": [
      "So, let’s say PC1 sends another frame to PC2."
    ],
    "ru": [
      "Итак, допустим, ПК1 отправляет другой кадр на ПК2."
    ]
  },
  {
    "time": [
      1470.42,
      1473.6
    ],
    "en": [
      "Once again, it is received by SW1,"
    ],
    "ru": [
      "Еще раз, он получен SW1,"
    ]
  },
  {
    "time": [
      1473.6,
      1478.9
    ],
    "en": [
      "and it already knows PC1’s MAC address, so it doesn’t have to add it to the MAC address table again."
    ],
    "ru": [
      "и он уже знает MAC-адрес ПК1, поэтому ему не нужно снова добавлять его в таблицу MAC-адресов."
    ]
  },
  {
    "time": [
      1478.9,
      1485.71
    ],
    "en": [
      "However, it still doesn’t know where PC2 is, so it once again floods the frame."
    ],
    "ru": [
      "Однако он по-прежнему не знает, где находится ПК2, поэтому снова заливает фрейм."
    ]
  },
  {
    "time": [
      1485.71,
      1492.05
    ],
    "en": [
      "PC3 drops the frame, and PC2 receives it and processes it normally."
    ],
    "ru": [
      "ПК3 отбрасывает кадр, а ПК2 принимает его и обрабатывает нормально."
    ]
  },
  {
    "time": [
      1492.05,
      1501.92
    ],
    "en": [
      "Now, let’s say PC2 then wants to send some data to PC1, maybe a reply to what PC1 sent to PC2."
    ],
    "ru": [
      "Теперь предположим, что ПК2 затем хочет отправить некоторые данные на ПК1, возможно, ответ на то, что ПК1 отправил на ПК2."
    ]
  },
  {
    "time": [
      1501.92,
      1506.78
    ],
    "en": [
      "Notice the destination and source addresses of the frame are reversed."
    ],
    "ru": [
      "Обратите внимание, что адреса назначения и источника кадра поменялись местами."
    ]
  },
  {
    "time": [
      1506.78,
      1512.76
    ],
    "en": [
      "PC2 sends the frame out of its network interface, and SW1 receives it."
    ],
    "ru": [
      "ПК2 отправляет кадр из своего сетевого интерфейса, а SW1 принимает его."
    ]
  },
  {
    "time": [
      1512.76,
      1518.54
    ],
    "en": [
      "SW1 looks at the source MAC address of the frame, and then adds it to its MAC address"
    ],
    "ru": [
      "SW1 смотрит на исходный MAC-адрес кадра, а затем добавляет его к своему MAC-адресу."
    ]
  },
  {
    "time": [
      1518.54,
      1523.74
    ],
    "en": [
      "table, associating it with the F0/2 interface."
    ],
    "ru": [
      "table, связав его с интерфейсом F0 / 2."
    ]
  },
  {
    "time": [
      1523.74,
      1526.96
    ],
    "en": [
      "This time, however, it doesn’t flood the frame."
    ],
    "ru": [
      "Однако на этот раз кадр не залит."
    ]
  },
  {
    "time": [
      1526.96,
      1535.18
    ],
    "en": [
      "This is known as a KNOWN UNICAST frame, because the destination is already in its MAC address table."
    ],
    "ru": [
      "Это известно как ИЗВЕСТНЫЙ кадр UNICAST, потому что пункт назначения уже находится в его таблице MAC-адресов."
    ]
  },
  {
    "time": [
      1535.18,
      1541.29
    ],
    "en": [
      "Whereas UNKNOWN unicast frames are flooded, known unicast frames are simply forwarded"
    ],
    "ru": [
      "В то время как НЕИЗВЕСТНЫЕ одноадресные кадры рассылаются лавинной рассылкой, известные одноадресные кадры просто пересылаются."
    ]
  },
  {
    "time": [
      1541.29,
      1544.76
    ],
    "en": [
      "to the destination, like this."
    ],
    "ru": [
      "к месту назначения, вот так."
    ]
  },
  {
    "time": [
      1544.76,
      1550.71
    ],
    "en": [
      "And PC1 then processes the frame up the OSI stack, through the de-encapsulation process"
    ],
    "ru": [
      "Затем ПК1 обрабатывает кадр вверх по стеку OSI посредством процесса деинкапсуляции."
    ]
  },
  {
    "time": [
      1550.71,
      1554.62
    ],
    "en": [
      "which we learned about in day 3’s video."
    ],
    "ru": [
      "о чем мы узнали из видео третьего дня."
    ]
  },
  {
    "time": [
      1554.62,
      1558.13
    ],
    "en": [
      "One more point about these dynamic MAC addresses."
    ],
    "ru": [
      "Еще один момент об этих динамических MAC-адресах."
    ]
  },
  {
    "time": [
      1558.13,
      1565.24
    ],
    "en": [
      "On Cisco switches, these MAC addresses are removed from the MAC address table after 5 minutes of inactivity."
    ],
    "ru": [
      "На коммутаторах Cisco эти MAC-адреса удаляются из таблицы MAC-адресов через 5 минут бездействия."
    ]
  },
  {
    "time": [
      1565.24,
      1573.45
    ],
    "en": [
      "So, if PC1 didn’t send any traffic for over 5 minutes, SW1 would remove the MAC address"
    ],
    "ru": [
      "Таким образом, если ПК1 не отправлял трафик более 5 минут, SW1 удалит MAC-адрес."
    ]
  },
  {
    "time": [
      1573.45,
      1576.24
    ],
    "en": [
      "to clean out the MAC address table."
    ],
    "ru": [
      "для очистки таблицы MAC-адресов."
    ]
  },
  {
    "time": [
      1576.24,
      1582.39
    ],
    "en": [
      "Of course, if PC1 sent traffic again, SW1 would dynamically learn its MAC address again."
    ],
    "ru": [
      "Конечно, если ПК1 снова отправит трафик, SW1 снова динамически узнает свой MAC-адрес."
    ]
  },
  {
    "time": [
      1582.39,
      1588.23
    ],
    "en": [
      "Let’s look at another example, this time with two switches."
    ],
    "ru": [
      "Давайте посмотрим на другой пример, на этот раз с двумя переключателями."
    ]
  },
  {
    "time": [
      1588.23,
      1590.64
    ],
    "en": [
      "Notice the MAC address table of each switch."
    ],
    "ru": [
      "Обратите внимание на таблицу MAC-адресов каждого коммутатора."
    ]
  },
  {
    "time": [
      1590.64,
      1597.32
    ],
    "en": [
      "Currently they are empty, so once again we will see the process of MAC address learning and flooding."
    ],
    "ru": [
      "На данный момент они пусты, поэтому мы снова увидим процесс изучения MAC-адресов и лавинной рассылки."
    ]
  },
  {
    "time": [
      1597.32,
      1602.78
    ],
    "en": [
      "So, PC1 wants to send some information to PC3."
    ],
    "ru": [
      "Итак, ПК1 хочет отправить некоторую информацию на ПК3."
    ]
  },
  {
    "time": [
      1602.78,
      1617.34
    ],
    "en": [
      "The source MAC address of the packet is aaaa.aa00.0001, and the destination is aaaa.aa00.0003."
    ],
    "ru": [
      "MAC-адрес источника пакета - aaaa.aa00.0001, а пункт назначения - aaaa.aa00.0003."
    ]
  },
  {
    "time": [
      1617.34,
      1623.5
    ],
    "en": [
      "So, PC1 sends the frame out of its network interface and it arrives at SW1."
    ],
    "ru": [
      "Итак, ПК1 отправляет кадр из своего сетевого интерфейса, и он достигает SW1."
    ]
  },
  {
    "time": [
      1623.5,
      1629.88
    ],
    "en": [
      "SW1 learns PC1’s MAC address from the source address field of the frame, and associates"
    ],
    "ru": [
      "SW1 узнает MAC-адрес ПК1 из поля исходного адреса кадра и связывает"
    ]
  },
  {
    "time": [
      1629.88,
      1633.83
    ],
    "en": [
      "it with the interface on which it was received, F0/1."
    ],
    "ru": [
      "это с интерфейсом, на котором он был получен, F0 / 1."
    ]
  },
  {
    "time": [
      1633.83,
      1638.7
    ],
    "en": [
      "I’ll just say once more, I’m only writing a short version of the MAC address due to"
    ],
    "ru": [
      "Я просто скажу еще раз, я пишу только короткую версию MAC-адреса из-за"
    ]
  },
  {
    "time": [
      1638.7,
      1643.38
    ],
    "en": [
      "the lack of space here, really the frame and the MAC address table would include the whole"
    ],
    "ru": [
      "нехватка места здесь, действительно кадр и таблица MAC-адресов будут включать в себя все"
    ]
  },
  {
    "time": [
      1643.38,
      1646.41
    ],
    "en": [
      "MAC address, of course."
    ],
    "ru": [
      "MAC-адрес, конечно."
    ]
  },
  {
    "time": [
      1646.41,
      1650.5
    ],
    "en": [
      "Once again, a MAC address learned in this way is called a ‘dynamically learned MAC"
    ],
    "ru": [
      "Еще раз, MAC-адрес, полученный таким образом, называется «динамически изученным MAC-адресом»."
    ]
  },
  {
    "time": [
      1650.5,
      1654.3
    ],
    "en": [
      "address, or more often, a ‘dynamic’ mac address."
    ],
    "ru": [
      "адрес или, чаще, «динамический» MAC-адрес."
    ]
  },
  {
    "time": [
      1654.3,
      1661.17
    ],
    "en": [
      "Now, SW1 has learned that PC1 can be reached via it’s F0/1 interface, but it still doesn’t"
    ],
    "ru": [
      "Теперь SW1 узнал, что к ПК1 можно подключиться через его интерфейс F0 / 1, но он все еще не"
    ]
  },
  {
    "time": [
      1661.17,
      1664.02
    ],
    "en": [
      "know where PC3 is."
    ],
    "ru": [
      "знаю, где находится PC3."
    ]
  },
  {
    "time": [
      1664.02,
      1666.28
    ],
    "en": [
      "Do you remember the name for this kind of frame?"
    ],
    "ru": [
      "Вы помните название такой рамы?"
    ]
  },
  {
    "time": [
      1666.28,
      1670.23
    ],
    "en": [
      "It’s called an ‘unknown unicast frame’."
    ],
    "ru": [
      "Это называется «неизвестный одноадресный кадр»."
    ]
  },
  {
    "time": [
      1670.23,
      1674.42
    ],
    "en": [
      "And what does a switch do with an unknown unicast frame?"
    ],
    "ru": [
      "И что делает коммутатор с неизвестным одноадресным кадром?"
    ]
  },
  {
    "time": [
      1674.42,
      1679.9
    ],
    "en": [
      "It floods it out all of its ports, except the one it was received on."
    ],
    "ru": [
      "Он затопляет все его порты, кроме того, на котором он был получен."
    ]
  },
  {
    "time": [
      1679.9,
      1686.99
    ],
    "en": [
      "In this case it will flood the frame out of F0/2 and F0/3, but not F0/1, because it received"
    ],
    "ru": [
      "В этом случае он будет заливать кадр из F0 / 2 и F0 / 3, но не из F0 / 1, потому что он получил"
    ]
  },
  {
    "time": [
      1686.99,
      1688.99
    ],
    "en": [
      "the frame on F0/1."
    ],
    "ru": [
      "кадр на F0 / 1."
    ]
  },
  {
    "time": [
      1688.99,
      1695.4
    ],
    "en": [
      "PC2 drops the frame because the destination MAC Address doesn’t match its own MAC address."
    ],
    "ru": [
      "ПК2 отбрасывает кадр, потому что MAC-адрес назначения не соответствует его собственному MAC-адресу."
    ]
  },
  {
    "time": [
      1695.4,
      1698.29
    ],
    "en": [
      "Now, what will SW2 do?"
    ],
    "ru": [
      "Что теперь будет делать SW2?"
    ]
  },
  {
    "time": [
      1698.29,
      1702.11
    ],
    "en": [
      "Well, the exact same rules apply."
    ],
    "ru": [
      "Что ж, применяются точно такие же правила."
    ]
  },
  {
    "time": [
      1702.11,
      1707.61
    ],
    "en": [
      "Just like SW1 did, it uses the source MAC address field of the frame to dynamically"
    ],
    "ru": [
      "Как и SW1, он использует поле исходного MAC-адреса кадра для динамического"
    ]
  },
  {
    "time": [
      1707.61,
      1713.72
    ],
    "en": [
      "learn PC1’s MAC address and the interface it can use to reach PC1."
    ],
    "ru": [
      "узнать MAC-адрес ПК1 и интерфейс, который он может использовать для подключения к ПК1."
    ]
  },
  {
    "time": [
      1713.72,
      1720.66
    ],
    "en": [
      "Note that, unlike on SW1, PC1 isn’t actually directly connected to the interface SW2 enters in its"
    ],
    "ru": [
      "Обратите внимание, что, в отличие от SW1, ПК1 на самом деле не подключен напрямую к интерфейсу SW2, который входит в его"
    ]
  },
  {
    "time": [
      1720.66,
      1722.75
    ],
    "en": [
      "own MAC address table."
    ],
    "ru": [
      "собственная таблица MAC-адресов."
    ]
  },
  {
    "time": [
      1722.75,
      1728.06
    ],
    "en": [
      "However, this is the interface which SW2 will use to reach PC1."
    ],
    "ru": [
      "Однако это интерфейс, который SW2 будет использовать для подключения к ПК1."
    ]
  },
  {
    "time": [
      1728.06,
      1733.04
    ],
    "en": [
      "That’s the meaning of the interface in the MAC address table, it doesn’t mean the device"
    ],
    "ru": [
      "В этом смысл интерфейса в таблице MAC-адресов, это не означает, что устройство"
    ]
  },
  {
    "time": [
      1733.04,
      1735.58
    ],
    "en": [
      "is directly connected to this interface."
    ],
    "ru": [
      "напрямую подключен к этому интерфейсу."
    ]
  },
  {
    "time": [
      1735.58,
      1742.72
    ],
    "en": [
      "Now, SW2 received a unicast frame, that is a frame destined for a single device, but"
    ],
    "ru": [
      "Теперь SW2 получил одноадресный кадр, то есть кадр, предназначенный для одного устройства, но"
    ]
  },
  {
    "time": [
      1742.72,
      1748.23
    ],
    "en": [
      "it doesn’t know how to reach that device, because its not in its MAC address table."
    ],
    "ru": [
      "он не знает, как связаться с этим устройством, потому что его нет в его таблице MAC-адресов."
    ]
  },
  {
    "time": [
      1748.23,
      1751.44
    ],
    "en": [
      "One last time, what is this kind of frame called?"
    ],
    "ru": [
      "В последний раз, как называется эта рамка?"
    ]
  },
  {
    "time": [
      1751.44,
      1754.8
    ],
    "en": [
      "It’s an unknown unicast frame."
    ],
    "ru": [
      "Это неизвестный одноадресный кадр."
    ]
  },
  {
    "time": [
      1754.8,
      1757.0
    ],
    "en": [
      "And what does the switch do with it?"
    ],
    "ru": [
      "И при чем тут свитч?"
    ]
  },
  {
    "time": [
      1757.0,
      1761.67
    ],
    "en": [
      "It floods it out all interfaces, except the one it was received on."
    ],
    "ru": [
      "Он заполняет все интерфейсы, кроме того, на котором он был получен."
    ]
  },
  {
    "time": [
      1761.67,
      1765.55
    ],
    "en": [
      "So, which interfaces will it send the frame out of?"
    ],
    "ru": [
      "Итак, из каких интерфейсов он будет отправлять фрейм?"
    ]
  },
  {
    "time": [
      1765.55,
      1772.27
    ],
    "en": [
      "Well, it received the frame on F0/3, so it won’t be flooded out of that interface,"
    ],
    "ru": [
      "Что ж, он получил фрейм на F0 / 3, поэтому он не будет вытеснен из этого интерфейса,"
    ]
  },
  {
    "time": [
      1772.27,
      1778.74
    ],
    "en": [
      "but it will be sent out of all other interfaces, F0/1 and F0/2 in this case."
    ],
    "ru": [
      "но он будет отправлен из всех других интерфейсов, в данном случае F0 / 1 и F0 / 2."
    ]
  },
  {
    "time": [
      1778.74,
      1785.16
    ],
    "en": [
      "PC4 drops the frame because the destination MAC address doesn’t match its own."
    ],
    "ru": [
      "ПК4 отбрасывает кадр, потому что MAC-адрес назначения не совпадает с собственным."
    ]
  },
  {
    "time": [
      1785.16,
      1791.96
    ],
    "en": [
      "PC3, however, receives the frame, as the destination MAC address matches its own MAC address."
    ],
    "ru": [
      "PC3, однако, получает кадр, поскольку MAC-адрес назначения совпадает с его собственным MAC-адресом."
    ]
  },
  {
    "time": [
      1791.96,
      1798.44
    ],
    "en": [
      "Let’s say that PC3 is going to send a reply back to PC1."
    ],
    "ru": [
      "Допустим, ПК3 отправит ответ ПК1."
    ]
  },
  {
    "time": [
      1798.44,
      1803.21
    ],
    "en": [
      "Notice the destination and source MAC address fields of the frame are reversed."
    ],
    "ru": [
      "Обратите внимание, что поля MAC-адреса назначения и источника кадра поменяны местами."
    ]
  },
  {
    "time": [
      1803.21,
      1809.35
    ],
    "en": [
      "PC3 sends the frame out of its network interface, and it is received by SW2."
    ],
    "ru": [
      "ПК3 отправляет кадр из своего сетевого интерфейса, и он принимается SW2."
    ]
  },
  {
    "time": [
      1809.35,
      1816.44
    ],
    "en": [
      "SW2 learns PC3’s MAC address, and enters the MAC address and the corresponding interface"
    ],
    "ru": [
      "SW2 узнает MAC-адрес ПК3 и вводит MAC-адрес и соответствующий интерфейс."
    ]
  },
  {
    "time": [
      1816.44,
      1819.33
    ],
    "en": [
      "in its MAC address table."
    ],
    "ru": [
      "в его таблице MAC-адресов."
    ]
  },
  {
    "time": [
      1819.33,
      1824.58
    ],
    "en": [
      "Just so we’re clear, the switch uses the SOURCE MAC ADDRESS field to fill its MAC address"
    ],
    "ru": [
      "На всякий случай, коммутатор использует поле МАС-АДРЕС ИСТОЧНИКА для заполнения своего МАС-адреса."
    ]
  },
  {
    "time": [
      1824.58,
      1829.99
    ],
    "en": [
      "table because, if it receives a frame from that source on the interface, it knows that"
    ],
    "ru": [
      "table, потому что, если он получает кадр из этого источника на интерфейсе, он знает, что"
    ]
  },
  {
    "time": [
      1829.99,
      1835.33
    ],
    "en": [
      "it can reach that MAC address via that interface. So, lets continue."
    ],
    "ru": [
      "он может получить доступ к этому MAC-адресу через этот интерфейс. Итак, продолжим."
    ]
  },
  {
    "time": [
      1835.33,
      1845.35
    ],
    "en": [
      "SW2 already has an entry for the destination MAC Address, aaaa.aa00.0001, in its MAC address"
    ],
    "ru": [
      "SW2 уже имеет запись для MAC-адреса назначения, aaaa.aa00.0001, в своем MAC-адресе."
    ]
  },
  {
    "time": [
      1845.35,
      1848.67
    ],
    "en": [
      "table, so there is no need to flood the frame."
    ],
    "ru": [
      "стол, поэтому заливать раму не нужно."
    ]
  },
  {
    "time": [
      1848.67,
      1853.29
    ],
    "en": [
      "Instead, it is forwarded normally out of the corresponding interface in the MAC address"
    ],
    "ru": [
      "Вместо этого он обычно перенаправляется из соответствующего интерфейса в MAC-адресе."
    ]
  },
  {
    "time": [
      1853.29,
      1856.79
    ],
    "en": [
      "table, which is F0/3."
    ],
    "ru": [
      "таблица, которая является F0 / 3."
    ]
  },
  {
    "time": [
      1856.79,
      1862.22
    ],
    "en": [
      "The frame is received by SW1, which adds an entry for PC3’s MAC address in its MAC address"
    ],
    "ru": [
      "Кадр принимается SW1, который добавляет запись для MAC-адреса ПК3 в свой MAC-адрес."
    ]
  },
  {
    "time": [
      1862.22,
      1867.83
    ],
    "en": [
      "table, with the interface F0/3, since that’s where it received the frame."
    ],
    "ru": [
      "table с интерфейсом F0 / 3, поскольку именно там он получил фрейм."
    ]
  },
  {
    "time": [
      1867.83,
      1873.11
    ],
    "en": [
      "Finally, since SW1 already has an entry for the destination MAC address in its own MAC address"
    ],
    "ru": [
      "Наконец, поскольку SW1 уже имеет запись для MAC-адреса назначения в своем собственном MAC-адресе."
    ]
  },
  {
    "time": [
      1873.11,
      1881.35
    ],
    "en": [
      "table, SW1 forwards the frame out of the corresponding interface, and it reaches its destination, PC1."
    ],
    "ru": [
      "table, SW1 пересылает кадр из соответствующего интерфейса и достигает пункта назначения, PC1."
    ]
  },
  {
    "time": [
      1881.35,
      1884.14
    ],
    "en": [
      "Okay, so that was a lot of information."
    ],
    "ru": [
      "Ладно, информации было много."
    ]
  },
  {
    "time": [
      1884.14,
      1889.27
    ],
    "en": [
      "I was actually planning to cover the Ethernet LAN switching topics in a single video, but"
    ],
    "ru": [
      "На самом деле я планировал осветить темы коммутации Ethernet LAN в одном видео, но"
    ]
  },
  {
    "time": [
      1889.27,
      1891.87
    ],
    "en": [
      "I’ve decided to split it up into two videos."
    ],
    "ru": [
      "Я решил разделить его на два видео."
    ]
  },
  {
    "time": [
      1891.87,
      1897.909
    ],
    "en": [
      "So, let’s move on to the quiz for today’s video, here’s question 1."
    ],
    "ru": [
      "Итак, давайте перейдем к тесту для сегодняшнего видео, вот вопрос 1."
    ]
  },
  {
    "time": [
      1897.909,
      1912.46
    ],
    "en": [
      "Which field of an Ethernet frame provides receiver clock synchronization? A, preamble. B, SFD. C, Type. Or D, FCS."
    ],
    "ru": [
      "Какое поле кадра Ethernet обеспечивает синхронизацию часов приемника? A, преамбула. Б, ЮФО. C, Тип. Или D, FCS."
    ]
  },
  {
    "time": [
      1912.46,
      1918.9
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
      1918.9,
      1923.47
    ],
    "en": [
      "the answer is A, preamble. Lets’ check."
    ],
    "ru": [
      "ответ - A, преамбула. Давайте проверим."
    ]
  },
  {
    "time": [
      1923.47,
      1929.74
    ],
    "en": [
      "The SFD, or Start Frame Delimiter, signifies the end of the Preamble, it is not used to"
    ],
    "ru": [
      "SFD или разделитель начального кадра означает конец преамбулы, он не используется для"
    ]
  },
  {
    "time": [
      1929.74,
      1932.41
    ],
    "en": [
      "provide receiver clock synchronization."
    ],
    "ru": [
      "обеспечить синхронизацию часов приемника."
    ]
  },
  {
    "time": [
      1932.41,
      1936.55
    ],
    "en": [
      "So B, SFD, is incorrect."
    ],
    "ru": [
      "Итак, B, SFD, неверен."
    ]
  },
  {
    "time": [
      1936.55,
      1941.01
    ],
    "en": [
      "The Type field indicates the type of packet encapsulated within the frame."
    ],
    "ru": [
      "Поле Тип указывает тип пакета, инкапсулированного в кадре."
    ]
  },
  {
    "time": [
      1941.01,
      1944.49
    ],
    "en": [
      "So c, Type, is incorrect."
    ],
    "ru": [
      "Итак, c, Type неверен."
    ]
  },
  {
    "time": [
      1944.49,
      1951.27
    ],
    "en": [
      "The FCS, or Frame Check Sequence, is used to detect errors that occurred during transmission."
    ],
    "ru": [
      "FCS, или последовательность проверки кадра, используется для обнаружения ошибок, возникших во время передачи."
    ]
  },
  {
    "time": [
      1951.27,
      1955.26
    ],
    "en": [
      "So d, FCS, is incorrect."
    ],
    "ru": [
      "Итак, d, FCS, неверен."
    ]
  },
  {
    "time": [
      1955.26,
      1964.05
    ],
    "en": [
      "The preamble is a series of 1s and 0s (or 7 bytes of 10101010) which allows the receiving device"
    ],
    "ru": [
      "Преамбула представляет собой последовательность единиц и нулей (или 7 байтов из 10101010), что позволяет принимающему устройству"
    ]
  },
  {
    "time": [
      1964.05,
      1966.46
    ],
    "en": [
      "to synchronize its receive clock."
    ],
    "ru": [
      "синхронизировать часы приема."
    ]
  },
  {
    "time": [
      1966.46,
      1968.94
    ],
    "en": [
      "So A, Preamble, is the correct answer."
    ],
    "ru": [
      "Итак, A, преамбула, это правильный ответ."
    ]
  },
  {
    "time": [
      1968.94,
      1972.49
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
      1972.49,
      1985.19
    ],
    "en": [
      "How long is the physical address of a network device? A, 32 bytes. B, 32 bits. C, 48 bytes."
    ],
    "ru": [
      "Какова длина физического адреса сетевого устройства? A, 32 байта. B, 32 бита. C, 48 байт."
    ]
  },
  {
    "time": [
      1985.19,
      1988.18
    ],
    "en": [
      "Or D, 48 bits."
    ],
    "ru": [
      "Или D, 48 бит."
    ]
  },
  {
    "time": [
      1988.18,
      1994.52
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
      1994.52,
      1997.49
    ],
    "en": [
      "the answer is D, 48 bits."
    ],
    "ru": [
      "ответ - D, 48 бит."
    ]
  },
  {
    "time": [
      1997.49,
      2004.04
    ],
    "en": [
      "Remember, a byte is equal to 8 bits, so 48 bytes is equal to 384 bits."
    ],
    "ru": [
      "Помните, что байт равен 8 битам, поэтому 48 байтов равны 384 битам."
    ]
  },
  {
    "time": [
      2004.04,
      2014.09
    ],
    "en": [
      "The MAC address, which is an address assigned to the physical device, is 48 bits, not bytes, long."
    ],
    "ru": [
      "MAC-адрес, который является адресом, назначенным физическому устройству, имеет длину 48 бит, а не байтов."
    ]
  },
  {
    "time": [
      2014.09,
      2019.43
    ],
    "en": [
      "By the way, an IP address, which we will learn about soon, is 32 bits in length."
    ],
    "ru": [
      "Кстати, IP-адрес, о котором мы скоро узнаем, имеет длину 32 бита."
    ]
  },
  {
    "time": [
      2019.43,
      2023.22
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
      2023.22,
      2050.3
    ],
    "en": [
      "What is the OUI of this MAC address? E8BA.7011.2874. A, E8Ba. B, E8BA.70. C, 7011. Or D, E8BA.7011."
    ],
    "ru": [
      "Что такое OUI этого MAC-адреса? E8BA.7011.2874. А, E8Ba. B, E8BA.70. C, 7011. Или D, E8BA.7011."
    ]
  },
  {
    "time": [
      2050.3,
      2056.0
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
      2056.0,
      2061.25
    ],
    "en": [
      "the answer is B, E8BA.70."
    ],
    "ru": [
      "ответ - B, E8BA.70."
    ]
  },
  {
    "time": [
      2061.25,
      2069.94
    ],
    "en": [
      "The OUI (Organizationally Unique Identifier) is the first half (or 24 bits) of a MAC address."
    ],
    "ru": [
      "OUI (организационно уникальный идентификатор) - это первая половина (или 24 бита) MAC-адреса."
    ]
  },
  {
    "time": [
      2069.94,
      2074.12
    ],
    "en": [
      "It is a unique value assigned to the maker of the device."
    ],
    "ru": [
      "Это уникальное значение, присвоенное производителю устройства."
    ]
  },
  {
    "time": [
      2074.12,
      2080.75
    ],
    "en": [
      "The first half of this MAC address is E8BA.70, so B is the correct answer."
    ],
    "ru": [
      "Первая половина этого MAC-адреса - E8BA.70, поэтому B - правильный ответ."
    ]
  },
  {
    "time": [
      2080.75,
      2085.38
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
      2085.38,
      2095.54
    ],
    "en": [
      "Which field of an Ethernet frame does a switch use to populate its MAC address table? A, preamble. B, length."
    ],
    "ru": [
      "Какое поле кадра Ethernet использует коммутатор для заполнения своей таблицы MAC-адресов? A, преамбула. B, длина."
    ]
  },
  {
    "time": [
      2095.54,
      2098.69
    ],
    "en": [
      "C, Source MAC Address."
    ],
    "ru": [
      "C, MAC-адрес источника."
    ]
  },
  {
    "time": [
      2098.69,
      2102.26
    ],
    "en": [
      "Or D, destination MAC address."
    ],
    "ru": [
      "Или D, MAC-адрес назначения."
    ]
  },
  {
    "time": [
      2102.26,
      2108.8
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
      2108.8,
      2114.53
    ],
    "en": [
      "the answer is C, Source MAC address. Lets’ check."
    ],
    "ru": [
      "ответ - C, MAC-адрес источника. Давайте проверим."
    ]
  },
  {
    "time": [
      2114.53,
      2122.69
    ],
    "en": [
      "The preamble is a series of 1s and 0s (7 bytes of 10101010) which allows the receiving device"
    ],
    "ru": [
      "Преамбула представляет собой последовательность единиц и нулей (7 байтов из 10101010), что позволяет принимающему устройству"
    ]
  },
  {
    "time": [
      2122.69,
      2125.23
    ],
    "en": [
      "to synchronize its receive clock."
    ],
    "ru": [
      "синхронизировать часы приема."
    ]
  },
  {
    "time": [
      2125.23,
      2128.04
    ],
    "en": [
      "It is not used to populate the MAC address table."
    ],
    "ru": [
      "Он не используется для заполнения таблицы MAC-адресов."
    ]
  },
  {
    "time": [
      2128.04,
      2131.61
    ],
    "en": [
      "So A, preamble, is incorrect."
    ],
    "ru": [
      "Итак, преамбула A неверна."
    ]
  },
  {
    "time": [
      2131.61,
      2135.66
    ],
    "en": [
      "The Length field indicates the length of the encapsulated packet."
    ],
    "ru": [
      "Поле длины указывает длину инкапсулированного пакета."
    ]
  },
  {
    "time": [
      2135.66,
      2138.46
    ],
    "en": [
      "It is not used to populate the MAC address table."
    ],
    "ru": [
      "Он не используется для заполнения таблицы MAC-адресов."
    ]
  },
  {
    "time": [
      2138.46,
      2142.79
    ],
    "en": [
      "So b, length, is incorrect."
    ],
    "ru": [
      "Итак, длина b неверна."
    ]
  },
  {
    "time": [
      2142.79,
      2149.23
    ],
    "en": [
      "Although this field does specify a MAC address, it does not help the switch populate its MAC address table."
    ],
    "ru": [
      "Хотя в этом поле указывается MAC-адрес, оно не помогает коммутатору заполнять таблицу MAC-адресов."
    ]
  },
  {
    "time": [
      2149.23,
      2154.4
    ],
    "en": [
      "So d, destination MAC address, is incorrect."
    ],
    "ru": [
      "Итак, d, MAC-адрес назначения, неверен."
    ]
  },
  {
    "time": [
      2154.4,
      2159.28
    ],
    "en": [
      "A switch uses the Source MAC Address field to populate its MAC address table."
    ],
    "ru": [
      "Коммутатор использует поле Source MAC Address для заполнения своей таблицы MAC-адресов."
    ]
  },
  {
    "time": [
      2159.28,
      2164.99
    ],
    "en": [
      "It associates the source MAC address with the interface on which the frame was received."
    ],
    "ru": [
      "Он связывает MAC-адрес источника с интерфейсом, на котором был получен кадр."
    ]
  },
  {
    "time": [
      2164.99,
      2168.99
    ],
    "en": [
      "This allows the switch to learn how to reach other devices on the network."
    ],
    "ru": [
      "Это позволяет коммутатору узнать, как подключиться к другим устройствам в сети."
    ]
  },
  {
    "time": [
      2168.99,
      2172.17
    ],
    "en": [
      "So C, source MAC Address, is the correct answer."
    ],
    "ru": [
      "Итак, C, исходный MAC-адрес, является правильным ответом."
    ]
  },
  {
    "time": [
      2172.17,
      2176.12
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
      2176.12,
      2191.05
    ],
    "en": [
      "What kind of frame does a switch flood out of all interfaces except the one it was received on? A, unknown unicast. B, known unicast. Or C, allcast."
    ],
    "ru": [
      "Какого типа фрейм коммутатор рассылает по всем интерфейсам, кроме того, на котором он был получен? А, одноадресная передача неизвестна. B, известная одноадресная передача. Или C, allcast."
    ]
  },
  {
    "time": [
      2191.05,
      2196.61
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
      2196.61,
      2201.25
    ],
    "en": [
      "the answer is A, unknown unicast. Let’s check."
    ],
    "ru": [
      "ответ - A, одноадресная передача неизвестна. Давайте проверим."
    ]
  },
  {
    "time": [
      2201.25,
      2206.97
    ],
    "en": [
      "A known unicast frame is a frame for which the destination MAC address is already in"
    ],
    "ru": [
      "Известный одноадресный кадр - это кадр, для которого MAC-адрес назначения уже находится в"
    ]
  },
  {
    "time": [
      2206.97,
      2209.88
    ],
    "en": [
      "the switch’s MAC address table."
    ],
    "ru": [
      "таблица MAC-адресов коммутатора."
    ]
  },
  {
    "time": [
      2209.88,
      2215.08
    ],
    "en": [
      "Since it already knows how to reach the destination, there is no need to flood the frame."
    ],
    "ru": [
      "Поскольку он уже знает, как добраться до места назначения, нет необходимости заливать фрейм."
    ]
  },
  {
    "time": [
      2215.08,
      2219.24
    ],
    "en": [
      "So b, known unicast, is incorrect."
    ],
    "ru": [
      "Итак, b, известная одноадресная передача, неверна."
    ]
  },
  {
    "time": [
      2219.24,
      2221.71
    ],
    "en": [
      "Allcast is not a type of Ethernet frame."
    ],
    "ru": [
      "Allcast - это не тип кадра Ethernet."
    ]
  },
  {
    "time": [
      2221.71,
      2225.48
    ],
    "en": [
      "So c, allcast, is incorrect."
    ],
    "ru": [
      "Итак, c, allcast, неверен."
    ]
  },
  {
    "time": [
      2225.48,
      2231.11
    ],
    "en": [
      "An unknown unicast frame is a frame destined for a single host, however the switch doesn’t"
    ],
    "ru": [
      "Неизвестный одноадресный кадр - это кадр, предназначенный для одного хоста, однако коммутатор не"
    ]
  },
  {
    "time": [
      2231.11,
      2236.61
    ],
    "en": [
      "know how to reach the destination so it floods the frame out of all interfaces except the"
    ],
    "ru": [
      "знать, как добраться до места назначения, поэтому он выталкивает фрейм из всех интерфейсов, кроме"
    ]
  },
  {
    "time": [
      2236.61,
      2238.85
    ],
    "en": [
      "one it was received on."
    ],
    "ru": [
      "один был получен."
    ]
  },
  {
    "time": [
      2238.85,
      2244.38
    ],
    "en": [
      "So A, unknown unicast, is the correct answer."
    ],
    "ru": [
      "Итак, A, неизвестная одноадресная передача - правильный ответ."
    ]
  },
  {
    "time": [
      2244.38,
      2251.67
    ],
    "en": [
      "As usual, there are additional supplementary materials to help you understand and remember what you studied."
    ],
    "ru": [
      "Как обычно, есть дополнительные материалы, которые помогут вам понять и запомнить то, что вы изучали."
    ]
  },
  {
    "time": [
      2251.67,
      2258.16
    ],
    "en": [
      "There is a pre-made deck of Anki flashcards to help you review, check the link in the description."
    ],
    "ru": [
      "Существует готовая колода карточек Anki, которые помогут вам просмотреть, проверьте ссылку в описании."
    ]
  },
  {
    "time": [
      2258.16,
      2263.01
    ],
    "en": [
      "There will be a packet tracer lab, but I’ll leave that for after Part 2 of Ethernet LAN"
    ],
    "ru": [
      "Будет лаборатория по отслеживанию пакетов, но я оставлю это после второй части Ethernet LAN."
    ]
  },
  {
    "time": [
      2263.01,
      2268.37
    ],
    "en": [
      "switching, so there won’t be a practice lab for this video specifically."
    ],
    "ru": [
      "переключение, поэтому специально для этого видео не будет практических занятий."
    ]
  },
  {
    "time": [
      2268.37,
      2270.07
    ],
    "en": [
      "Good luck with your studies!"
    ],
    "ru": [
      "Удачи в учебе!"
    ]
  },
  {
    "time": [
      2270.07,
      2272.74
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
      2272.74,
      2277.32
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
      2277.32,
      2280.66
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
      2280.66,
      2283.42
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
      2283.42,
      2290.76
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
      2290.76,
      2290.76
    ],
    "en": [
      "That's all for now."
    ],
    "ru": [
      "На этом пока все."
    ]
  }
]