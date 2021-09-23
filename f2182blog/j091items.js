let objs = [
  {
    "time": [
      0.94,
      3.42
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
      3.42,
      6.84
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
      6.84,
      10.599
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
      10.599,
      16.42
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
      16.42,
      17.9
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
      17.9,
      21.8
    ],
    "en": [
      "Also, remember to sign up via the link in the description to get all of the lab files"
    ],
    "ru": [
      "Также не забудьте зарегистрироваться по ссылке в описании, чтобы получить все лабораторные файлы."
    ]
  },
  {
    "time": [
      21.8,
      26.67
    ],
    "en": [
      "for this course, so you can try it out yourself in packet tracer."
    ],
    "ru": [
      "для этого курса, так что вы можете попробовать его самостоятельно в пакетном трассировщике."
    ]
  },
  {
    "time": [
      26.67,
      32.129
    ],
    "en": [
      "If you want more labs like these, I highly recommend picking up Boson’s NetSim for the CCNA."
    ],
    "ru": [
      "Если вам нужно больше таких лабораторий, я настоятельно рекомендую приобрести Boson's NetSim для CCNA."
    ]
  },
  {
    "time": [
      32.129,
      36.39
    ],
    "en": [
      "the CCNA. It’s a network simulator with tons of guided labs covering all of the topics you need to"
    ],
    "ru": [
      "CCNA. Это сетевой симулятор с множеством управляемых лабораторных работ по всем темам, которые вам нужно"
    ]
  },
  {
    "time": [
      36.39,
      38.69
    ],
    "en": [
      "know for the CCNA."
    ],
    "ru": [
      "знаю по CCNA."
    ]
  },
  {
    "time": [
      38.69,
      42.64
    ],
    "en": [
      "Click the link in the video description to check it out."
    ],
    "ru": [
      "Щелкните ссылку в описании видео, чтобы посмотреть его."
    ]
  },
  {
    "time": [
      42.64,
      47.39
    ],
    "en": [
      "In this lab we’ll do some basic QoS configurations on R1."
    ],
    "ru": [
      "В этой лабораторной работе мы выполним некоторые базовые настройки QoS на маршрутизаторе R1."
    ]
  },
  {
    "time": [
      47.39,
      52.999
    ],
    "en": [
      "The design and configuration of QoS isn’t actually a CCNA exam topic, so you don’t"
    ],
    "ru": [
      "Дизайн и настройка QoS на самом деле не являются темой экзамена CCNA, поэтому вы не"
    ]
  },
  {
    "time": [
      52.999,
      56.1
    ],
    "en": [
      "have to worry about remembering these configurations for now."
    ],
    "ru": [
      "пока нужно беспокоиться о запоминании этих конфигураций."
    ]
  },
  {
    "time": [
      56.1,
      61.149
    ],
    "en": [
      "But I think doing some basic configurations in a lab will help you understand how QoS"
    ],
    "ru": [
      "Но я думаю, что выполнение некоторых базовых настроек в лабораторных условиях поможет вам понять, как QoS"
    ]
  },
  {
    "time": [
      61.149,
      63.749
    ],
    "en": [
      "works, so let’s do it."
    ],
    "ru": [
      "работает, так что давайте сделаем это."
    ]
  },
  {
    "time": [
      63.749,
      68.34
    ],
    "en": [
      "In this network we have PC1 connected to R1 via SW1."
    ],
    "ru": [
      "В этой сети у нас есть ПК1, подключенный к R1 через SW1."
    ]
  },
  {
    "time": [
      68.34,
      73.18
    ],
    "en": [
      "On the other side there is SRV1 connected to R2 via SW2."
    ],
    "ru": [
      "С другой стороны есть SRV1, подключенный к R2 через SW2."
    ]
  },
  {
    "time": [
      73.18,
      77.82
    ],
    "en": [
      "Although I’ve only shown 1 PC, let’s say there are many more connected to R1 and the"
    ],
    "ru": [
      "Хотя я показал только 1 компьютер, предположим, что к R1 и"
    ]
  },
  {
    "time": [
      77.82,
      79.61
    ],
    "en": [
      "network is getting congested."
    ],
    "ru": [
      "сеть становится перегруженной."
    ]
  },
  {
    "time": [
      79.61,
      86.85
    ],
    "en": [
      "So, we will configure QoS on R1 to ensure the more important traffic receives high-priority treatment."
    ],
    "ru": [
      "Итак, мы настроим QoS на маршрутизаторе R1, чтобы обеспечить приоритетную обработку более важного трафика."
    ]
  },
  {
    "time": [
      86.85,
      95.65
    ],
    "en": [
      "treatment. We will mark HTTPS traffic as AF31 and ensure that it gets a minimum of 10% bandwidth in a priority queue."
    ],
    "ru": [
      "лечение. Мы помечаем HTTPS-трафик как AF31 и гарантируем, что он получит минимум 10% полосы пропускания в очереди с приоритетом."
    ]
  },
  {
    "time": [
      95.65,
      102.11
    ],
    "en": [
      "a priority queue. We will mark HTTP traffic as AF32 and ensure that it gets a minimum of 10% bandwidth, but"
    ],
    "ru": [
      "очередь с приоритетом. Мы помечаем HTTP-трафик как AF32 и гарантируем, что он получит минимум 10% полосы пропускания, но"
    ]
  },
  {
    "time": [
      102.11,
      104.31
    ],
    "en": [
      "it will not be in a priority queue."
    ],
    "ru": [
      "он не будет в очереди с приоритетом."
    ]
  },
  {
    "time": [
      104.31,
      110.75
    ],
    "en": [
      "We will mark ICMP traffic as CS2 and ensure that it gets a minimum of 5% bandwidth."
    ],
    "ru": [
      "Мы помечаем ICMP-трафик как CS2 и гарантируем, что он получит минимум 5% полосы пропускания."
    ]
  },
  {
    "time": [
      110.75,
      116.37
    ],
    "en": [
      "Now, the actual QoS design of a network depends entirely on the network."
    ],
    "ru": [
      "Теперь фактический дизайн QoS сети полностью зависит от сети."
    ]
  },
  {
    "time": [
      116.37,
      122.14
    ],
    "en": [
      "Which traffic needs to be prioritized, how much bandwidth it needs, etc, varies greatly."
    ],
    "ru": [
      "Какой трафик должен быть приоритетным, какая ему требуется пропускная способность и т. Д., Сильно различается."
    ]
  },
  {
    "time": [
      122.14,
      128.06
    ],
    "en": [
      "These values I selected are honestly just random values so I can show you the basic configuration commands."
    ],
    "ru": [
      "Эти значения, которые я выбрал, являются просто случайными значениями, поэтому я могу показать вам основные команды конфигурации."
    ]
  },
  {
    "time": [
      128.06,
      133.7
    ],
    "en": [
      "configuration commands. Giving HTTPS traffic a priority queue, for example, is probably not so common."
    ],
    "ru": [
      "команды конфигурации. Например, предоставление HTTPS-трафику очереди с приоритетом, вероятно, не так уж и распространено."
    ]
  },
  {
    "time": [
      133.7,
      136.71
    ],
    "en": [
      "Usually priority queues are used for voice traffic."
    ],
    "ru": [
      "Обычно приоритетные очереди используются для голосового трафика."
    ]
  },
  {
    "time": [
      136.71,
      141.67000000000002
    ],
    "en": [
      "Anyway, after configuring the QoS rules we will apply them to traffic being forwarded"
    ],
    "ru": [
      "В любом случае, после настройки правил QoS мы применим их к перенаправляемому трафику."
    ]
  },
  {
    "time": [
      141.67000000000002,
      145.04
    ],
    "en": [
      "out of R1’s G0/0/0 interface."
    ],
    "ru": [
      "из интерфейса G0 / 0/0 маршрутизатора R1."
    ]
  },
  {
    "time": [
      145.04,
      153.26
    ],
    "en": [
      "So, when R1 forwards traffic out of G0/0/0 to R2, it will be prioritized according to our configurations."
    ],
    "ru": [
      "Итак, когда R1 перенаправляет трафик из G0 / 0/0 на R2, он будет иметь приоритет в соответствии с нашими конфигурациями."
    ]
  },
  {
    "time": [
      153.26,
      157.69
    ],
    "en": [
      "our configurations. Now, once the traffic reaches R2 that’s a different story."
    ],
    "ru": [
      "наши конфигурации. Теперь, когда трафик достигает R2, это совсем другая история."
    ]
  },
  {
    "time": [
      157.69,
      162.81
    ],
    "en": [
      "Even if R1 marks the packets as high priority, unless R2 is also configured to treat those"
    ],
    "ru": [
      "Даже если R1 помечает пакеты как высокоприоритетные, если R2 также не настроен для обработки этих пакетов."
    ]
  },
  {
    "time": [
      162.81,
      167.48
    ],
    "en": [
      "packets as high priority, it will treat them all equally."
    ],
    "ru": [
      "пакеты имеют высокий приоритет, он будет обрабатывать их все одинаково."
    ]
  },
  {
    "time": [
      167.48,
      175.07
    ],
    "en": [
      "In the CCNA exam topics, it is stated that you must be able to explain the PHB, per-hop behavior, of QoS."
    ],
    "ru": [
      "В темах экзамена CCNA указано, что вы должны быть в состоянии объяснить PHB, поведение QoS на каждом этапе."
    ]
  },
  {
    "time": [
      175.07,
      178.23
    ],
    "en": [
      "behavior, of QoS. Well, this is the per hop behavior."
    ],
    "ru": [
      "поведение QoS. Ну, это поведение для каждого перехода."
    ]
  },
  {
    "time": [
      178.23,
      184.49
    ],
    "en": [
      "We configure QoS on R1 and it will prioritize certain types of traffic over the hop to R2,"
    ],
    "ru": [
      "Мы настраиваем QoS на R1, и он будет отдавать приоритет определенным типам трафика по переходу на R2,"
    ]
  },
  {
    "time": [
      184.49,
      191.209
    ],
    "en": [
      "but then how R2 prioritizes traffic over the next hop depends on the configuration of R2."
    ],
    "ru": [
      "но тогда то, как R2 устанавливает приоритеты трафика на следующем переходе, зависит от конфигурации R2."
    ]
  },
  {
    "time": [
      191.209,
      195.569
    ],
    "en": [
      "You can’t just configure one router to prioritize voice traffic and then expect the rest of"
    ],
    "ru": [
      "Нельзя просто настроить один маршрутизатор на приоритет голосового трафика, а затем ожидать, что остальные"
    ]
  },
  {
    "time": [
      195.569,
      198.19
    ],
    "en": [
      "the network to also prioritize it."
    ],
    "ru": [
      "сеть, чтобы также расставить приоритеты."
    ]
  },
  {
    "time": [
      198.19,
      202.05
    ],
    "en": [
      "You have to configure QoS all across the network, wherever it’s needed."
    ],
    "ru": [
      "Вы должны настроить QoS по всей сети, где бы это ни было."
    ]
  },
  {
    "time": [
      202.05,
      206.44
    ],
    "en": [
      "Okay, I just wanted to make that clear since I didn’t clearly explain the per-hop behavior"
    ],
    "ru": [
      "Хорошо, я просто хотел прояснить это, так как не объяснил четко поведение на переходе"
    ]
  },
  {
    "time": [
      206.44,
      209.4
    ],
    "en": [
      "of QoS in the lecture videos."
    ],
    "ru": [
      "QoS в видео лекций."
    ]
  },
  {
    "time": [
      209.4,
      214.88
    ],
    "en": [
      "To show you the basic QoS configurations, though, we’ll just configure R1."
    ],
    "ru": [
      "Однако, чтобы показать вам основные конфигурации QoS, мы просто настроим R1."
    ]
  },
  {
    "time": [
      214.88,
      220.06
    ],
    "en": [
      "Before configuration, though, let me show you the default markings of traffic being forwarded from R1."
    ],
    "ru": [
      "Однако перед настройкой позвольте мне показать вам маркировку трафика по умолчанию, перенаправляемого с R1."
    ]
  },
  {
    "time": [
      220.06,
      222.47
    ],
    "en": [
      "forwarded from R1. I’ll go on PC1."
    ],
    "ru": [
      "переадресован с R1. Я пойду на ПК1."
    ]
  },
  {
    "time": [
      222.47,
      228.76
    ],
    "en": [
      "First, let me try to ping jeremysitlab.com. PING jeremysitlab.com."
    ],
    "ru": [
      "Сначала позвольте мне попробовать проверить связь с jeremysitlab.com. ПИНГРИТЕ jeremysitlab.com."
    ]
  },
  {
    "time": [
      228.76,
      237.63
    ],
    "en": [
      "PING jeremysitlab.com. So, PC1 will send a DNS query to its DNS server, which is SRV1 at 10.0.0.100, and then it will"
    ],
    "ru": [
      "ПИНГ на jeremysitlab.com. Таким образом, ПК1 отправит DNS-запрос на свой DNS-сервер, SRV1 с номером 10.0.0.100, а затем он"
    ]
  },
  {
    "time": [
      237.63,
      244.739
    ],
    "en": [
      "learn the IP address of jeremysitlab.com, which in this case is also 10.0.0.100, and"
    ],
    "ru": [
      "узнать IP-адрес jeremysitlab.com, который в данном случае также 10.0.0.100, и"
    ]
  },
  {
    "time": [
      244.739,
      247.65
    ],
    "en": [
      "then PC1 will ping SRV1."
    ],
    "ru": [
      "тогда ПК1 отправит эхо-запрос на SRV1."
    ]
  },
  {
    "time": [
      247.65,
      249.69
    ],
    "en": [
      "As you can see, the pings work."
    ],
    "ru": [
      "Как видите, пинги работают."
    ]
  },
  {
    "time": [
      249.69,
      256.22
    ],
    "en": [
      "Now let’s switch to simulation mode, and ping again. PING jeremysitlab.com."
    ],
    "ru": [
      "Теперь давайте переключимся в режим имитации и снова пингуем. ПИНГ на jeremysitlab.com."
    ]
  },
  {
    "time": [
      256.22,
      262.28
    ],
    "en": [
      "PING jeremysitlab.com. In reality PC1 should store the IP address of jeremysitlab.com in its DNS cache, but"
    ],
    "ru": [
      "ПИНГ на jeremysitlab.com. На самом деле ПК1 должен хранить IP-адрес jeremysitlab.com в своем кэше DNS, но"
    ]
  },
  {
    "time": [
      262.28,
      267.05
    ],
    "en": [
      "it seems that doesn’t work in packet tracer, so it sends the DNS query again."
    ],
    "ru": [
      "похоже, что в пакетном трассировщике не работает, поэтому он снова отправляет DNS-запрос."
    ]
  },
  {
    "time": [
      267.05,
      271.81
    ],
    "en": [
      "Anyway, lets go to the point where the ICMP packet is at R1."
    ],
    "ru": [
      "В любом случае, давайте перейдем к точке, где пакет ICMP находится на R1."
    ]
  },
  {
    "time": [
      271.81,
      276.15
    ],
    "en": [
      "And now let’s check that packet, and click on outbound PDU details."
    ],
    "ru": [
      "А теперь давайте проверим этот пакет и нажмем на детали исходящего PDU."
    ]
  },
  {
    "time": [
      276.15,
      280.84000000000003
    ],
    "en": [
      "So, this is the state of the packet as it is going to be forwarded by R1."
    ],
    "ru": [
      "Итак, это состояние пакета, когда он будет пересылаться маршрутизатором R1."
    ]
  },
  {
    "time": [
      280.84000000000003,
      285.12
    ],
    "en": [
      "Notice the DSCP field is written as hexadecimal 00."
    ],
    "ru": [
      "Обратите внимание, что поле DSCP записано как шестнадцатеричное 00."
    ]
  },
  {
    "time": [
      285.12,
      292.68
    ],
    "en": [
      "Technically, two hexadecimal digits is 8 bits, but really the DSCP field is just 6 bits."
    ],
    "ru": [
      "Технически две шестнадцатеричные цифры составляют 8 бит, но на самом деле поле DSCP составляет всего 6 бит."
    ]
  },
  {
    "time": [
      292.68,
      295.6
    ],
    "en": [
      "And in packet tracer, the ECN field isn’t displayed."
    ],
    "ru": [
      "А в трассировщике пакетов поле ECN не отображается."
    ]
  },
  {
    "time": [
      295.6,
      300.82
    ],
    "en": [
      "Anyway, since the field is displayed in hexadecimal here we’ll have to do some conversions later"
    ],
    "ru": [
      "В любом случае, поскольку здесь поле отображается в шестнадцатеричном формате, нам нужно будет выполнить некоторые преобразования позже."
    ]
  },
  {
    "time": [
      300.82,
      305.59
    ],
    "en": [
      "when we check the markings, but for now just notice that the DSCP field isn’t marked,"
    ],
    "ru": [
      "когда мы проверяем маркировку, а пока просто обратите внимание, что поле DSCP не отмечено,"
    ]
  },
  {
    "time": [
      305.59,
      308.6
    ],
    "en": [
      "it’s 0, default forwarding."
    ],
    "ru": [
      "это 0, переадресация по умолчанию."
    ]
  },
  {
    "time": [
      308.6,
      315.06
    ],
    "en": [
      "This is how PCs send their traffic by default, and the switches and routers won’t add any markings by default."
    ],
    "ru": [
      "Именно так ПК по умолчанию отправляют свой трафик, а коммутаторы и маршрутизаторы по умолчанию не добавляют никакой маркировки."
    ]
  },
  {
    "time": [
      315.06,
      320.18
    ],
    "en": [
      "markings by default. For time’s sake I won’t show you HTTP and HTTPS now, but they would also have a"
    ],
    "ru": [
      "маркировка по умолчанию. Ради экономии времени я не буду показывать вам HTTP и HTTPS, но у них также будет"
    ]
  },
  {
    "time": [
      320.18,
      322.07
    ],
    "en": [
      "DSCP value of 0."
    ],
    "ru": [
      "Значение DSCP 0."
    ]
  },
  {
    "time": [
      322.07,
      327.8
    ],
    "en": [
      "Okay, now let’s configure QoS, I’ll go on R1. ENABLE."
    ],
    "ru": [
      "Хорошо, теперь давайте настроим QoS, перейду на R1. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      327.8,
      334.83
    ],
    "en": [
      "ENABLE. CONF T. So, there are three main steps to configure QoS."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. Итак, есть три основных шага для настройки QoS."
    ]
  },
  {
    "time": [
      334.83,
      338.07
    ],
    "en": [
      "First, you have to identify the traffic."
    ],
    "ru": [
      "Во-первых, вы должны определить трафик."
    ]
  },
  {
    "time": [
      338.07,
      342.21
    ],
    "en": [
      "In order to give special treatment for certain kinds of traffic, you have tell the router"
    ],
    "ru": [
      "Чтобы обеспечить особую обработку определенных видов трафика, вы должны сообщить маршрутизатору"
    ]
  },
  {
    "time": [
      342.21,
      346.34000000000003
    ],
    "en": [
      "what kinds of traffic you want to give that special treatment to."
    ],
    "ru": [
      "к какому трафику вы хотите относиться по-особенному."
    ]
  },
  {
    "time": [
      346.34000000000003,
      351.95
    ],
    "en": [
      "To identify traffic in a Cisco IOS QoS configuration, we use class maps."
    ],
    "ru": [
      "Чтобы идентифицировать трафик в конфигурации QoS Cisco IOS, мы используем карты классов."
    ]
  },
  {
    "time": [
      351.95,
      354.4
    ],
    "en": [
      "The command is CLASS-MAP."
    ],
    "ru": [
      "Команда - КЛАСС-КАРТА."
    ]
  },
  {
    "time": [
      354.4,
      362.009
    ],
    "en": [
      "I will call this first class map HTTPS_MAP, since we will use it to match HTTPS traffic."
    ],
    "ru": [
      "Я назову эту карту первого класса HTTPS_MAP, поскольку мы будем использовать ее для сопоставления трафика HTTPS."
    ]
  },
  {
    "time": [
      362.009,
      366.99
    ],
    "en": [
      "Then I will enter MATCH PROTOCOL HTTPS. And that’s it."
    ],
    "ru": [
      "Затем я ввожу протокол MATCH PROTOCOL HTTPS. Вот и все."
    ]
  },
  {
    "time": [
      366.99,
      372.6
    ],
    "en": [
      "And that’s it. So, this class map can be used to identify HTTPS traffic, and now I’ll exit out."
    ],
    "ru": [
      "Вот и все. Итак, эту карту классов можно использовать для определения HTTPS-трафика, и теперь я выйду."
    ]
  },
  {
    "time": [
      372.6,
      377.37
    ],
    "en": [
      "Let’s make another class map. CLASS-MAP HTTP_MAP."
    ],
    "ru": [
      "Давайте сделаем еще одну карту классов. КЛАСС-КАРТА HTTP_MAP."
    ]
  },
  {
    "time": [
      377.37,
      384.169
    ],
    "en": [
      "CLASS-MAP HTTP_MAP. I’ll use this to match HTTP traffic. MATCH PROTOCOL HTTP."
    ],
    "ru": [
      "КЛАСС-КАРТА HTTP_MAP. Я буду использовать это для сопоставления HTTP-трафика. ПРОТОКОЛ МАТЧА HTTP."
    ]
  },
  {
    "time": [
      384.169,
      385.65
    ],
    "en": [
      "MATCH PROTOCOL HTTP. EXIT."
    ],
    "ru": [
      "ПРОТОКОЛ МАТЧА HTTP. ВЫХОД."
    ]
  },
  {
    "time": [
      385.65,
      392.139
    ],
    "en": [
      "And one more, we’ll match ICMP traffic. CLASS-MAP ICMP_MAP."
    ],
    "ru": [
      "И еще одно: сопоставим ICMP-трафик. КЛАСС-КАРТА ICMP_MAP."
    ]
  },
  {
    "time": [
      392.139,
      394.56
    ],
    "en": [
      "CLASS-MAP ICMP_MAP. MATCH PROTOCOL ICMP. EXIT."
    ],
    "ru": [
      "КЛАСС-КАРТА ICMP_MAP. ПРОТОКОЛ МАТЧА ICMP. ВЫХОД."
    ]
  },
  {
    "time": [
      394.56,
      398.169
    ],
    "en": [
      "EXIT. Okay, let’s check those class maps."
    ],
    "ru": [
      "ВЫХОД. Хорошо, давайте проверим эти карты классов."
    ]
  },
  {
    "time": [
      398.169,
      403.4
    ],
    "en": [
      "DO SHOW RUN | SECTION CLASS-MAP."
    ],
    "ru": [
      "ПОКАЗАТЬ БЕГ | РАЗДЕЛ КАРТА КЛАССОВ."
    ]
  },
  {
    "time": [
      403.4,
      406.22
    ],
    "en": [
      "There are the three class maps I configured."
    ],
    "ru": [
      "Я настроил три карты классов."
    ]
  },
  {
    "time": [
      406.22,
      413.389
    ],
    "en": [
      "Notice that, although I only typed CLASS-MAP HTTPS_MAP, CLASS-MAP HTTP_MAP, and CLASS-MAP"
    ],
    "ru": [
      "Обратите внимание: хотя я набрал только CLASS-MAP HTTPS_MAP, CLASS-MAP HTTP_MAP и CLASS-MAP"
    ]
  },
  {
    "time": [
      413.389,
      419.05
    ],
    "en": [
      "ICMP_MAP, the default mode of MATCH-ALL was applied."
    ],
    "ru": [
      "ICMP_MAP, был применен режим по умолчанию MATCH-ALL."
    ]
  },
  {
    "time": [
      419.05,
      423.9
    ],
    "en": [
      "This means that, to match this class map, traffic has to match all of the MATCH statements"
    ],
    "ru": [
      "Это означает, что для соответствия этой карте классов трафик должен соответствовать всем операторам MATCH."
    ]
  },
  {
    "time": [
      423.9,
      425.93
    ],
    "en": [
      "in that class map."
    ],
    "ru": [
      "в этой карте классов."
    ]
  },
  {
    "time": [
      425.93,
      430.68
    ],
    "en": [
      "In this case, each class map only has one MATCH statement, so it doesn’t matter, but"
    ],
    "ru": [
      "В этом случае каждая карта классов имеет только один оператор MATCH, поэтому это не имеет значения, но"
    ]
  },
  {
    "time": [
      430.68,
      435.49
    ],
    "en": [
      "if there are multiple match statements you can also use MATCH-ANY mode, which means traffic"
    ],
    "ru": [
      "если есть несколько операторов соответствия, вы также можете использовать режим MATCH-ANY, что означает трафик"
    ]
  },
  {
    "time": [
      435.49,
      441.68
    ],
    "en": [
      "will match that class map even if it matches only one of the MATCH statements in the class map."
    ],
    "ru": [
      "будет соответствовать этой карте классов, даже если она соответствует только одному из операторов MATCH в карте классов."
    ]
  },
  {
    "time": [
      441.68,
      446.49
    ],
    "en": [
      "map. So you could, for example, make a class map with two match statements, MATCH PROTOCOL"
    ],
    "ru": [
      "карта. Таким образом, вы можете, например, создать карту классов с двумя операторами сопоставления, MATCH PROTOCOL"
    ]
  },
  {
    "time": [
      446.49,
      450.59
    ],
    "en": [
      "HTTPS and MATCH PROTOCOL HTTP."
    ],
    "ru": [
      "HTTPS и MATCH PROTOCOL HTTP."
    ]
  },
  {
    "time": [
      450.59,
      458.4
    ],
    "en": [
      "In that case, if a packet is either an HTTPS packet or an HTTP packet, it would match that class map."
    ],
    "ru": [
      "В этом случае, если пакет является либо пакетом HTTPS, либо пакетом HTTP, он будет соответствовать этой карте классов."
    ]
  },
  {
    "time": [
      458.4,
      460.84000000000003
    ],
    "en": [
      "class map. Anyway, let’s move on."
    ],
    "ru": [
      "карта классов. В любом случае, пойдем дальше."
    ]
  },
  {
    "time": [
      460.84000000000003,
      464.789
    ],
    "en": [
      "So, that’s the first step of QoS configuration."
    ],
    "ru": [
      "Итак, это первый шаг настройки QoS."
    ]
  },
  {
    "time": [
      464.789,
      468.03
    ],
    "en": [
      "Identify the kinds of traffic you want to apply special treatment to."
    ],
    "ru": [
      "Определите типы трафика, к которым вы хотите применить особый режим."
    ]
  },
  {
    "time": [
      468.03,
      474.03
    ],
    "en": [
      "Next, we have to specify what kind of treatment we want to give to each kind of traffic."
    ],
    "ru": [
      "Затем мы должны указать, какой вид обработки мы хотим обработать для каждого типа трафика."
    ]
  },
  {
    "time": [
      474.03,
      476.62
    ],
    "en": [
      "To do that we use policy maps."
    ],
    "ru": [
      "Для этого мы используем карты политик."
    ]
  },
  {
    "time": [
      476.62,
      484.08
    ],
    "en": [
      "The command is POLICY-MAP, and I’ll name it G0/0/0_OUT, since we will later apply this"
    ],
    "ru": [
      "Это команда POLICY-MAP, и я назову ее G0 / 0 / 0_OUT, так как позже мы применим ее"
    ]
  },
  {
    "time": [
      484.08,
      488.949
    ],
    "en": [
      "policy map outbound on the G0/0/0 interface."
    ],
    "ru": [
      "исходящая карта политик на интерфейсе G0 / 0/0."
    ]
  },
  {
    "time": [
      488.949,
      496.33
    ],
    "en": [
      "Then I’ll use CLASS, followed by the name of one of the class maps I just configured, HTTPS_MAP."
    ],
    "ru": [
      "Затем я использую CLASS, за которым следует имя одной из карт классов, которую я только что настроил, HTTPS_MAP."
    ]
  },
  {
    "time": [
      496.33,
      502.87
    ],
    "en": [
      "HTTPS_MAP. Okay, now we can tell R1 what to do with traffic that matches this class map."
    ],
    "ru": [
      "HTTPS_MAP. Хорошо, теперь мы можем сказать R1, что делать с трафиком, который соответствует этой карте классов."
    ]
  },
  {
    "time": [
      502.87,
      507.5
    ],
    "en": [
      "First, SET IP DSCP AF31."
    ],
    "ru": [
      "Сначала установите IP DSCP AF31."
    ]
  },
  {
    "time": [
      507.5,
      513.61
    ],
    "en": [
      "So, it will mark any HTTPS packets with a DSCP value of AF31."
    ],
    "ru": [
      "Таким образом, он будет отмечать любые HTTPS-пакеты значением DSCP AF31."
    ]
  },
  {
    "time": [
      513.61,
      522.779
    ],
    "en": [
      "Then, we’ll give HTTPS a priority queue with at least 10% of the links bandwidth during periods of congestion."
    ],
    "ru": [
      "Затем мы дадим HTTPS приоритетную очередь с не менее 10% пропускной способности ссылок в периоды перегрузки."
    ]
  },
  {
    "time": [
      522.779,
      524.35
    ],
    "en": [
      "periods of congestion. PRIORITY PERCENT 10."
    ],
    "ru": [
      "периоды заторов. ПРИОРИТЕТНЫЙ ПРОЦЕНТ 10."
    ]
  },
  {
    "time": [
      524.35,
      530.01
    ],
    "en": [
      "Okay, that’s all for the HTTPS class. EXIT."
    ],
    "ru": [
      "Хорошо, это все, что касается класса HTTPS. ВЫХОД."
    ]
  },
  {
    "time": [
      530.01,
      535.33
    ],
    "en": [
      "EXIT. Now for HTTP traffic. CLASS HTTP_MAP."
    ],
    "ru": [
      "ВЫХОД. Теперь о HTTP-трафике. КЛАСС HTTP_MAP."
    ]
  },
  {
    "time": [
      535.33,
      540.1
    ],
    "en": [
      "CLASS HTTP_MAP. SET IP DSCP AF32."
    ],
    "ru": [
      "КЛАСС HTTP_MAP. УСТАНОВИТЬ IP DSCP AF32."
    ]
  },
  {
    "time": [
      540.1,
      544.69
    ],
    "en": [
      "And now we’ll give it a minimum bandwidth of 10% during times of congestion, but it"
    ],
    "ru": [
      "А теперь мы дадим ему минимальную пропускную способность 10% во время перегрузки, но он"
    ]
  },
  {
    "time": [
      544.69,
      549.25
    ],
    "en": [
      "won’t be a priority queue. BANDWIDTH PERCENT 10."
    ],
    "ru": [
      "не будет приоритетной очередью. ПРОЦЕНТ ПОЛОСЫ 10."
    ]
  },
  {
    "time": [
      549.25,
      552.73
    ],
    "en": [
      "BANDWIDTH PERCENT 10. EXIT. Finally, ICMP."
    ],
    "ru": [
      "ПРОЦЕНТ ПОЛОСЫ 10. ВЫХОД. Наконец, ICMP."
    ]
  },
  {
    "time": [
      552.73,
      554.459
    ],
    "en": [
      "Finally, ICMP. CLASS ICMP_MAP."
    ],
    "ru": [
      "Наконец, ICMP. КЛАСС ICMP_MAP."
    ]
  },
  {
    "time": [
      554.459,
      559.91
    ],
    "en": [
      "SET IP DSCP CS2."
    ],
    "ru": [
      "УСТАНОВИТЬ IP DSCP CS2."
    ]
  },
  {
    "time": [
      559.91,
      564.88
    ],
    "en": [
      "And we’ll give it 5% of bandwidth. BANDWIDTH PERCENT 5."
    ],
    "ru": [
      "И мы дадим ему 5% пропускной способности. ПРОЦЕНТ ПОЛОСЫ 5."
    ]
  },
  {
    "time": [
      564.88,
      568.0
    ],
    "en": [
      "BANDWIDTH PERCENT 5. EXIT, and EXIT again."
    ],
    "ru": [
      "ПРОЦЕНТ ПОЛОСЫ 5. ВЫХОД и снова ВЫХОД."
    ]
  },
  {
    "time": [
      568.0,
      571.24
    ],
    "en": [
      "Okay let’s check that configuration."
    ],
    "ru": [
      "Хорошо, давайте проверим эту конфигурацию."
    ]
  },
  {
    "time": [
      571.24,
      575.1
    ],
    "en": [
      "DO SHOW RUNNING-CONFIG | SECTION POLICY-MAP."
    ],
    "ru": [
      "ПОКАЗАТЬ РАБОЧУЮ КОНФИГУРАЦИЮ | РАЗДЕЛ ПОЛИТИКА-КАРТА."
    ]
  },
  {
    "time": [
      575.1,
      579.26
    ],
    "en": [
      "So, here’s how this QoS configuration works."
    ],
    "ru": [
      "Итак, вот как работает эта конфигурация QoS."
    ]
  },
  {
    "time": [
      579.26,
      584.66
    ],
    "en": [
      "We haven’t actually applied it outbound on G0/0/0 yet, but after we do it will check"
    ],
    "ru": [
      "На самом деле мы еще не применили его для исходящего трафика на G0 / 0/0, но после того, как мы это сделаем, он проверит"
    ]
  },
  {
    "time": [
      584.66,
      588.73
    ],
    "en": [
      "all traffic that is to be forwarded out of G0/0/0."
    ],
    "ru": [
      "весь трафик, который должен быть перенаправлен из G0 / 0/0."
    ]
  },
  {
    "time": [
      588.73,
      595.38
    ],
    "en": [
      "If its an HTTPS packet, it will mark it as DSCP AF31, and give it a priority queue with"
    ],
    "ru": [
      "Если это пакет HTTPS, он пометит его как DSCP AF31 и предоставит ему приоритетную очередь с"
    ]
  },
  {
    "time": [
      595.38,
      598.6
    ],
    "en": [
      "at least 10% of the link’s bandwidth."
    ],
    "ru": [
      "не менее 10% пропускной способности ссылки."
    ]
  },
  {
    "time": [
      598.6,
      604.83
    ],
    "en": [
      "If it’s an HTTP packet it will mark it as DSCP AF32 and give it a queue with at least"
    ],
    "ru": [
      "Если это HTTP-пакет, он помечает его как DSCP AF32 и ставит в очередь не менее"
    ]
  },
  {
    "time": [
      604.83,
      607.37
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
      604.83,
      607.37
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
      607.37,
      613.85
    ],
    "en": [
      "If it’s ICMP traffic it will mark the packet as DSCP CS2 and give it a queue with at least"
    ],
    "ru": [
      "Если это трафик ICMP, он пометит пакет как DSCP CS2 и предоставит ему очередь с как минимум"
    ]
  },
  {
    "time": [
      613.85,
      616.75
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
      613.85,
      616.75
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
      616.75,
      621.54
    ],
    "en": [
      "All other traffic, not matching any of these, will not be marked and will be forwarded without"
    ],
    "ru": [
      "Весь другой трафик, не соответствующий ни одному из них, не будет отмечен и будет перенаправлен без"
    ]
  },
  {
    "time": [
      621.54,
      624.49
    ],
    "en": [
      "any special QoS treatment."
    ],
    "ru": [
      "любая особая обработка QoS."
    ]
  },
  {
    "time": [
      624.49,
      631.82
    ],
    "en": [
      "Okay, finally let’s apply this policy map using a service policy. INTERFACE G0/0/0."
    ],
    "ru": [
      "Хорошо, давайте, наконец, применим эту карту политик с помощью политики обслуживания. ИНТЕРФЕЙС G0 / 0/0."
    ]
  },
  {
    "time": [
      631.82,
      638.93
    ],
    "en": [
      "INTERFACE G0/0/0. SERVICE-POLICY OUTPUT,and then the policy map’s name, G0/0/0_OUT."
    ],
    "ru": [
      "ИНТЕРФЕЙС G0 / 0/0. ВЫВОД СЛУЖБЫ-ПОЛИТИКИ, а затем имя карты политик, G0 / 0 / 0_OUT."
    ]
  },
  {
    "time": [
      638.93,
      646.83
    ],
    "en": [
      "That’s it, our QoS configuration is complete. END. END. SHOW RUNNING-CONFIG."
    ],
    "ru": [
      "Вот и все, наша настройка QoS завершена. КОНЕЦ. КОНЕЦ. ПОКАЗАТЬ РАБОЧУЮ-КОНФИГУРАЦИЮ."
    ]
  },
  {
    "time": [
      646.83,
      653.6
    ],
    "en": [
      "END. SHOW RUNNING-CONFIG. For review, here are the class maps, identifying the types of traffic we want to match."
    ],
    "ru": [
      "КОНЕЦ. ПОКАЗАТЬ РАБОЧУЮ-КОНФИГУРАЦИЮ. Для обзора вот карты классов, определяющие типы трафика, которые мы хотим сопоставить."
    ]
  },
  {
    "time": [
      653.6,
      658.08
    ],
    "en": [
      "Below them is the policy map, which sets the actions we want to take on the traffic matched"
    ],
    "ru": [
      "Под ними находится карта политик, которая устанавливает действия, которые мы хотим предпринять в отношении совпадающего трафика."
    ]
  },
  {
    "time": [
      658.08,
      659.399
    ],
    "en": [
      "in the class maps."
    ],
    "ru": [
      "в картах классов."
    ]
  },
  {
    "time": [
      659.399,
      666.89
    ],
    "en": [
      "Finally, I used a service policy to apply the policy map outbound on G0/0/0."
    ],
    "ru": [
      "Наконец, я использовал политику обслуживания для применения исходящей карты политик на G0 / 0/0."
    ]
  },
  {
    "time": [
      666.89,
      671.58
    ],
    "en": [
      "Now let’s send some traffic from PC1 to SRV1 and check the markings."
    ],
    "ru": [
      "Теперь давайте отправим трафик с ПК1 на SRV1 и проверим маркировку."
    ]
  },
  {
    "time": [
      671.58,
      673.38
    ],
    "en": [
      "Let me switch to simulation mode."
    ],
    "ru": [
      "Позвольте мне переключиться в режим моделирования."
    ]
  },
  {
    "time": [
      673.38,
      675.959
    ],
    "en": [
      "First, I’ll ping SRV1."
    ],
    "ru": [
      "Сначала я отправлю эхо-запрос на SRV1."
    ]
  },
  {
    "time": [
      675.959,
      683.56
    ],
    "en": [
      "If I use the name jeremysitlab.com it’ll send a DNS request first, so I’ll just use the IP address."
    ],
    "ru": [
      "Если я использую имя jeremysitlab.com, он сначала отправит DNS-запрос, поэтому я просто буду использовать IP-адрес."
    ]
  },
  {
    "time": [
      683.56,
      685.47
    ],
    "en": [
      "the IP address. PING 10.0.0.100."
    ],
    "ru": [
      "IP-адрес. ПИНГ 10.0.0.100."
    ]
  },
  {
    "time": [
      685.47,
      690.399
    ],
    "en": [
      "Let’s bring the packet to R1, and then check."
    ],
    "ru": [
      "Доставим пакет на R1 и проверим."
    ]
  },
  {
    "time": [
      690.399,
      697.52
    ],
    "en": [
      "In the inbound PDU details tab, the DSCP marking is 0, but if we check outbound, which is the"
    ],
    "ru": [
      "На вкладке сведений о входящем PDU маркировка DSCP равна 0, но если мы проверим исходящий, то это будет"
    ]
  },
  {
    "time": [
      697.52,
      704.31
    ],
    "en": [
      "state of the packet as it is forwarded by R1, the marking is now hexadecimal 1 0."
    ],
    "ru": [
      "состояние пакета при его пересылке R1, маркировка теперь шестнадцатеричная 1 0."
    ]
  },
  {
    "time": [
      704.31,
      706.94
    ],
    "en": [
      "Let me open up this document to show the calculations."
    ],
    "ru": [
      "Позвольте мне открыть этот документ, чтобы показать расчеты."
    ]
  },
  {
    "time": [
      706.94,
      715.62
    ],
    "en": [
      "So, we marked it as CS2, and here’s the binary, 010 000, which is 16 in decimal."
    ],
    "ru": [
      "Итак, мы пометили его как CS2, а вот двоичное, 010 000, что составляет 16 в десятичном виде."
    ]
  },
  {
    "time": [
      715.62,
      722.77
    ],
    "en": [
      "In hexadecimal that is 1 0, so that’s why we see 1 0 in the DSCP field in packet tracer."
    ],
    "ru": [
      "В шестнадцатеричном формате это 1 0, поэтому мы видим 1 0 в поле DSCP в программе трассировки пакетов."
    ]
  },
  {
    "time": [
      722.77,
      727.589
    ],
    "en": [
      "Okay, now let’s send some HTTP traffic from PC1 to SRV1."
    ],
    "ru": [
      "Хорошо, теперь давайте отправим HTTP-трафик с ПК1 на SRV1."
    ]
  },
  {
    "time": [
      727.589,
      734.48
    ],
    "en": [
      "I’ll return to realtime mode, then I’ll exit out of the command prompt, and then click on web browser."
    ],
    "ru": [
      "Я вернусь в режим реального времени, затем выйду из командной строки и нажму на веб-браузер."
    ]
  },
  {
    "time": [
      734.48,
      741.2
    ],
    "en": [
      "on web browser. I’ll enter the URL here, HTTP://10.0.0.100."
    ],
    "ru": [
      "в веб-браузере. Я введу здесь URL: HTTP://10.0.0.100."
    ]
  },
  {
    "time": [
      741.2,
      746.31
    ],
    "en": [
      "Now, let me switch back to simulation mode."
    ],
    "ru": [
      "Теперь позвольте мне вернуться в режим моделирования."
    ]
  },
  {
    "time": [
      746.31,
      748.05
    ],
    "en": [
      "Now I’ll hit GO in the browser."
    ],
    "ru": [
      "Теперь я нажимаю GO в браузере."
    ]
  },
  {
    "time": [
      748.05,
      753.31
    ],
    "en": [
      "Okay, let’s bring the packet to R1, and then check again."
    ],
    "ru": [
      "Хорошо, давайте доставим пакет на R1 и снова проверим."
    ]
  },
  {
    "time": [
      753.31,
      756.4590000000001
    ],
    "en": [
      "Inbound PDU details, the marking is 0."
    ],
    "ru": [
      "Детали входящего PDU, маркировка - 0."
    ]
  },
  {
    "time": [
      756.4590000000001,
      759.2
    ],
    "en": [
      "Outbound, and it’s 1c."
    ],
    "ru": [
      "Исходящий, а это 1с."
    ]
  },
  {
    "time": [
      759.2,
      763.18
    ],
    "en": [
      "Okay we marked it as AF32, let’s check the math."
    ],
    "ru": [
      "Хорошо, мы пометили его как AF32, давайте проверим математику."
    ]
  },
  {
    "time": [
      763.18,
      768.329
    ],
    "en": [
      "Here it is in binary, 011 100."
    ],
    "ru": [
      "Вот он в двоичном формате, 011 100."
    ]
  },
  {
    "time": [
      768.329,
      777.92
    ],
    "en": [
      "That’s 28 in decimal, 16+8+4, which is 1c in hexadecimal, and that’s what’s displayed in packet tracer."
    ],
    "ru": [
      "Это 28 в десятичной системе счисления, 16 + 8 + 4, что равно 1c в шестнадцатеричной системе, и это то, что отображается в программе трассировки пакетов."
    ]
  },
  {
    "time": [
      777.92,
      782.649
    ],
    "en": [
      "in packet tracer. Okay, I’ll return to realtime mode."
    ],
    "ru": [
      "в трассировщике пакетов. Хорошо, я вернусь в режим реального времени."
    ]
  },
  {
    "time": [
      782.649,
      784.97
    ],
    "en": [
      "Finally let’s send some HTTPS traffic."
    ],
    "ru": [
      "Наконец, давайте отправим немного HTTPS-трафика."
    ]
  },
  {
    "time": [
      784.97,
      791.529
    ],
    "en": [
      "I’ll go back to the web browser, and add an S after HTTP."
    ],
    "ru": [
      "Я вернусь в веб-браузер и добавлю букву S после HTTP."
    ]
  },
  {
    "time": [
      791.529,
      795.73
    ],
    "en": [
      "Then I’ll switch back to simulation mode and hit GO in the browser."
    ],
    "ru": [
      "Затем я вернусь в режим моделирования и нажму GO в браузере."
    ]
  },
  {
    "time": [
      795.73,
      799.55
    ],
    "en": [
      "Bring the packet to R1, and let’s check."
    ],
    "ru": [
      "Принесите пакет к R1, и давайте проверим."
    ]
  },
  {
    "time": [
      799.55,
      804.66
    ],
    "en": [
      "So, inbound PDU details, the DSCP marking is 0."
    ],
    "ru": [
      "Итак, детали входящего PDU, маркировка DSCP равна 0."
    ]
  },
  {
    "time": [
      804.66,
      810.269
    ],
    "en": [
      "But outbound, R1 has marked it as DSCP 1A, which should be AF31."
    ],
    "ru": [
      "Но исходящий, R1 пометил его как DSCP 1A, который должен быть AF31."
    ]
  },
  {
    "time": [
      810.269,
      812.35
    ],
    "en": [
      "Let’s check the math."
    ],
    "ru": [
      "Давай проверим математику."
    ]
  },
  {
    "time": [
      812.35,
      817.99
    ],
    "en": [
      "So, here’s AF31 in binary, 011 010."
    ],
    "ru": [
      "Итак, вот AF31 в двоичном формате, 011 010."
    ]
  },
  {
    "time": [
      817.99,
      822.85
    ],
    "en": [
      "That’s 26 in decimal, 16 + 8 + 2."
    ],
    "ru": [
      "Это 26 в десятичной системе, 16 + 8 + 2."
    ]
  },
  {
    "time": [
      822.85,
      829.2
    ],
    "en": [
      "Convert that to hexadecimal and you get 1A, and that’s what was displayed in packet tracer."
    ],
    "ru": [
      "Преобразуйте это в шестнадцатеричное, и вы получите 1А, и это то, что отображалось в программе трассировки пакетов."
    ]
  },
  {
    "time": [
      829.2,
      832.91
    ],
    "en": [
      "tracer. Okay, in this lab we took a look at QoS configuration."
    ],
    "ru": [
      "трассировщик. Хорошо, в этой лабораторной работе мы рассмотрели конфигурацию QoS."
    ]
  },
  {
    "time": [
      832.91,
      838.269
    ],
    "en": [
      "Once again, you don’t need to know this for the CCNA exam, but hopefully it was helpful"
    ],
    "ru": [
      "Опять же, вам не нужно знать это для экзамена CCNA, но, надеюсь, это было полезно."
    ]
  },
  {
    "time": [
      838.269,
      841.649
    ],
    "en": [
      "to see some basic QoS configurations."
    ],
    "ru": [
      "чтобы увидеть некоторые базовые конфигурации QoS."
    ]
  },
  {
    "time": [
      841.649,
      847.521
    ],
    "en": [
      "Class maps identify traffic, policy maps specify what actions to take on that traffic, and"
    ],
    "ru": [
      "Карты классов определяют трафик, карты политик указывают, какие действия следует предпринять с этим трафиком, и"
    ]
  },
  {
    "time": [
      847.521,
      850.69
    ],
    "en": [
      "service policies apply the policy maps to interfaces."
    ],
    "ru": [
      "политики обслуживания применяют карты политик к интерфейсам."
    ]
  },
  {
    "time": [
      850.69,
      852.7
    ],
    "en": [
      "That’s all for this lab."
    ],
    "ru": [
      "Вот и все для этой лаборатории."
    ]
  },
  {
    "time": [
      852.7,
      858.68
    ],
    "en": [
      "Usually, we’d take a look at a lab in Boson NetSim next, but since QoS configuration isn’t"
    ],
    "ru": [
      "Обычно мы в следующий раз заглянем в лабораторию в Boson NetSim, но, поскольку конфигурация QoS не"
    ]
  },
  {
    "time": [
      858.68,
      863.32
    ],
    "en": [
      "a CCNA exam topic there are no QoS labs in NetSim for CCNA."
    ],
    "ru": [
      "тема экзамена CCNA. В NetSim для CCNA нет лабораторий QoS."
    ]
  },
  {
    "time": [
      863.32,
      870.25
    ],
    "en": [
      "Plus, I think this lab video has been long enough, so that’s all for now."
    ],
    "ru": [
      "Кроме того, я думаю, что это лабораторное видео было достаточно длинным, так что на этом пока все."
    ]
  },
  {
    "time": [
      870.25,
      875.14
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
      875.14,
      879.56
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
      879.56,
      885.3389999999999
    ],
    "en": [
      "Thank you to Khoa, Justin, Christopher, Sam, Anton, Tebogo, Samil, Anand, Pavel, Abraham,"
    ],
    "ru": [
      "Спасибо Хоа, Джастину, Кристоферу, Сэму, Антону, Тебого, Самилу, Ананду, Павлу, Аврааму,"
    ]
  },
  {
    "time": [
      885.3389999999999,
      891.94
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
      891.94,
      897.01
    ],
    "en": [
      "Gustavo, Prakaash, Nasir, Erlison, Marko, Daming, Ed, John, Funnydart, Velvijaykum,"
    ],
    "ru": [
      "Густаво, Пракааш, Насир, Эрлисон, Марко, Даминг, Эд, Джон, Фаннидарт, Велвиджайкум,"
    ]
  },
  {
    "time": [
      897.01,
      901.55
    ],
    "en": [
      "Mark, Yousif, Boson Software, Devin, Yonatan, and Vance."
    ],
    "ru": [
      "Марк, Юсиф, Boson Software, Девин, Йонатан и Вэнс."
    ]
  },
  {
    "time": [
      901.55,
      906.089
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
      906.089,
      912.8
    ],
    "en": [
      "This is the list of JCNP-level members at the time of recording by the way, April 29th 2021."
    ],
    "ru": [
      "Это список участников уровня JCNP на момент записи, кстати, 29 апреля 2021 года."
    ]
  },
  {
    "time": [
      912.8,
      919.58
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
      912.8,
      919.58
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
      919.58,
      921.16
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
      921.16,
      925.06
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
      925.06,
      928.399
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
      928.399,
      931.04
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
      931.04,
      938.5
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
      938.5,
      938.5
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]