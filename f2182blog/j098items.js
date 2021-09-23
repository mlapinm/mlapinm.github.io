let objs = [
  {
    "time": [
      2.09,
      4.48
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
      4.48,
      7.88
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
      7.88,
      11.79
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
      11.79,
      17.76
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
      17.76,
      19.53
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
      19.53,
      23.27
    ],
    "en": [
      "In this video we’ll cover Dynamic ARP Inspection."
    ],
    "ru": [
      "В этом видео мы рассмотрим динамическую проверку ARP."
    ]
  },
  {
    "time": [
      23.27,
      29.18
    ],
    "en": [
      "Dynamic ARP Inspection, also called DAI, is covered in exam topic 5.7, which says you"
    ],
    "ru": [
      "Динамическая проверка ARP, также называемая DAI, рассматривается в теме экзамена 5.7, в которой говорится, что вы"
    ]
  },
  {
    "time": [
      29.18,
      36.72
    ],
    "en": [
      "must be able to configure Layer 2 security features, including DHCP snooping, DAI, and port security."
    ],
    "ru": [
      "должен иметь возможность настраивать функции безопасности уровня 2, включая отслеживание DHCP, DAI и безопасность портов."
    ]
  },
  {
    "time": [
      36.72,
      42.12
    ],
    "en": [
      "port security. We covered DHCP snooping and port security in the previous two videos, so this video"
    ],
    "ru": [
      "безопасность порта. Мы рассмотрели отслеживание DHCP и безопасность портов в двух предыдущих видео, поэтому это видео"
    ]
  },
  {
    "time": [
      42.12,
      45.46
    ],
    "en": [
      "will finish up topic 5.7."
    ],
    "ru": [
      "завершу тему 5.7."
    ]
  },
  {
    "time": [
      45.46,
      49.98
    ],
    "en": [
      "Dynamic ARP inspection is a security feature of switches which inspects ARP messages in"
    ],
    "ru": [
      "Динамическая проверка ARP - это функция безопасности коммутаторов, которая проверяет сообщения ARP в"
    ]
  },
  {
    "time": [
      49.98,
      54.66
    ],
    "en": [
      "a similar manner to how DHCP snooping inspects DHCP messages."
    ],
    "ru": [
      "аналогично тому, как отслеживание DHCP проверяет сообщения DHCP."
    ]
  },
  {
    "time": [
      54.66,
      59.41
    ],
    "en": [
      "So, this video will follow a similar structure to the previous video."
    ],
    "ru": [
      "Итак, это видео будет иметь структуру, аналогичную предыдущему видео."
    ]
  },
  {
    "time": [
      59.41,
      62.35
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
      62.35,
      65.53
    ],
    "en": [
      "First, what is dynamic ARP inspection?"
    ],
    "ru": [
      "Во-первых, что такое динамическая проверка ARP?"
    ]
  },
  {
    "time": [
      65.53,
      69.17
    ],
    "en": [
      "I’ll give a brief overview, and then introduce how it works."
    ],
    "ru": [
      "Я сделаю краткий обзор, а затем расскажу, как это работает."
    ]
  },
  {
    "time": [
      69.17,
      74.57900000000001
    ],
    "en": [
      "I’ll show you what attacks it can be used to prevent, and then how to configure it as"
    ],
    "ru": [
      "Я покажу вам, какие атаки можно использовать для предотвращения, а затем как настроить его как"
    ]
  },
  {
    "time": [
      74.57900000000001,
      78.219
    ],
    "en": [
      "we look into more details of its operations."
    ],
    "ru": [
      "мы рассмотрим более подробную информацию о его деятельности."
    ]
  },
  {
    "time": [
      78.219,
      82.439
    ],
    "en": [
      "Watch until the end of the video for a bonus practice question from Boson Software’s"
    ],
    "ru": [
      "Просмотрите до конца видео вопрос о бонусной практике от Boson Software"
    ]
  },
  {
    "time": [
      82.439,
      88.7
    ],
    "en": [
      "ExSim for CCNA, my recommended practice exams for the CCNA."
    ],
    "ru": [
      "ExSim для CCNA, мои рекомендуемые практические экзамены для CCNA."
    ]
  },
  {
    "time": [
      88.7,
      92.88
    ],
    "en": [
      "Before dynamic ARP inspection, let’s quickly review ARP itself."
    ],
    "ru": [
      "Перед динамической проверкой ARP давайте быстро рассмотрим сам ARP."
    ]
  },
  {
    "time": [
      92.88,
      98.35900000000001
    ],
    "en": [
      "ARP is used to learn the MAC address of another device with a known IP address."
    ],
    "ru": [
      "ARP используется для изучения MAC-адреса другого устройства с известным IP-адресом."
    ]
  },
  {
    "time": [
      98.35900000000001,
      105.689
    ],
    "en": [
      "For example, a PC will use ARP to learn the MAC address of its default gateway to communicate with external networks."
    ],
    "ru": [
      "Например, ПК будет использовать ARP, чтобы узнать MAC-адрес своего шлюза по умолчанию для связи с внешними сетями."
    ]
  },
  {
    "time": [
      105.689,
      110.09899999999999
    ],
    "en": [
      "with external networks. It will also use ARP to learn the MAC address of any other device on the local network."
    ],
    "ru": [
      "с внешними сетями. Он также будет использовать ARP для изучения MAC-адреса любого другого устройства в локальной сети."
    ]
  },
  {
    "time": [
      110.09899999999999,
      116.65899999999999
    ],
    "en": [
      "Typically it’s a two message exchange, consisting of an ARP request and then a reply."
    ],
    "ru": [
      "Обычно это обмен двумя сообщениями, состоящий из запроса ARP и ответа."
    ]
  },
  {
    "time": [
      116.65899999999999,
      118.96000000000001
    ],
    "en": [
      "Let’s look at an example."
    ],
    "ru": [
      "Давайте посмотрим на пример."
    ]
  },
  {
    "time": [
      118.96000000000001,
      126.229
    ],
    "en": [
      "For example, PC1 wants to send a DNS query to the DNS server at 8.8.8.8."
    ],
    "ru": [
      "Например, ПК1 хочет отправить DNS-запрос на DNS-сервер на 8.8.8.8."
    ]
  },
  {
    "time": [
      126.229,
      133.28
    ],
    "en": [
      "It thinks, 8.8.8.8 is outside of my local network, so I should send the frame to my default gateway, 192.168.1.1."
    ],
    "ru": [
      "Он думает, что 8.8.8.8 находится за пределами моей локальной сети, поэтому я должен отправить фрейм на свой шлюз по умолчанию, 192.168.1.1."
    ]
  },
  {
    "time": [
      133.28,
      141.239
    ],
    "en": [
      "default gateway, 192.168.1.1. However, PC1 doesn’t know the MAC address of 192.168.1.1, which is R1."
    ],
    "ru": [
      "шлюз по умолчанию, 192.168.1.1. Однако ПК1 не знает MAC-адрес 192.168.1.1, который является R1."
    ]
  },
  {
    "time": [
      141.239,
      147.64
    ],
    "en": [
      "So, it will broadcast this ARP request message, destined for R1’s IP address."
    ],
    "ru": [
      "Таким образом, он будет транслировать это сообщение запроса ARP, предназначенное для IP-адреса маршрутизатора R1."
    ]
  },
  {
    "time": [
      147.64,
      152.769
    ],
    "en": [
      "Every device in the LAN will receive the message, because the destination MAC address is the"
    ],
    "ru": [
      "Каждое устройство в локальной сети получит сообщение, потому что MAC-адрес назначения является"
    ]
  },
  {
    "time": [
      152.769,
      155.53
    ],
    "en": [
      "broadcast MAC address of all Fs."
    ],
    "ru": [
      "широковещательный MAC-адрес всех Fs."
    ]
  },
  {
    "time": [
      155.53,
      159.609
    ],
    "en": [
      "Let’s look at that ARP request in wireshark."
    ],
    "ru": [
      "Давайте посмотрим на этот ARP-запрос в wirehark."
    ]
  },
  {
    "time": [
      159.609,
      165.01
    ],
    "en": [
      "The ARP message is encapsulated in an Ethernet frame of course, but there is no IP header."
    ],
    "ru": [
      "Сообщение ARP, конечно, инкапсулируется в кадр Ethernet, но IP-заголовок отсутствует."
    ]
  },
  {
    "time": [
      165.01,
      170.18
    ],
    "en": [
      "So, in the previous slide when I wrote ‘source IP’ and ‘destination IP’ for the ARP"
    ],
    "ru": [
      "Итак, на предыдущем слайде, когда я написал «исходный IP-адрес» и «целевой IP-адрес» для ARP"
    ]
  },
  {
    "time": [
      170.18,
      175.68
    ],
    "en": [
      "message, I’m actually referring to these fields in the ARP message itself."
    ],
    "ru": [
      "сообщение, я на самом деле имею в виду эти поля в самом сообщении ARP."
    ]
  },
  {
    "time": [
      175.68,
      180.629
    ],
    "en": [
      "Specifically the sender IP address, which is the source IP address, and the target IP"
    ],
    "ru": [
      "В частности, IP-адрес отправителя, который является исходным IP-адресом, и целевой IP-адрес."
    ]
  },
  {
    "time": [
      180.629,
      184.819
    ],
    "en": [
      "address, which is the destination IP address."
    ],
    "ru": [
      "адрес, который является IP-адресом назначения."
    ]
  },
  {
    "time": [
      184.819,
      189.54
    ],
    "en": [
      "ARP messages are only broadcast within the local network, not sent by routers to external"
    ],
    "ru": [
      "Сообщения ARP передаются только в локальной сети, а не маршрутизаторами на внешние"
    ]
  },
  {
    "time": [
      189.54,
      194.23
    ],
    "en": [
      "networks, so there’s no need to encapsulate the ARP message in an IP header."
    ],
    "ru": [
      "сетей, поэтому нет необходимости инкапсулировать сообщение ARP в заголовок IP."
    ]
  },
  {
    "time": [
      194.23,
      200.859
    ],
    "en": [
      "Keep these fields in mind, sender MAC and IP address, as well as target MAC and IP address,"
    ],
    "ru": [
      "Помните об этих полях, MAC и IP-адрес отправителя, а также целевой MAC и IP-адрес,"
    ]
  },
  {
    "time": [
      200.859,
      205.6
    ],
    "en": [
      "they can play a role in the dynamic ARP inspection process."
    ],
    "ru": [
      "они могут играть роль в процессе динамической проверки ARP."
    ]
  },
  {
    "time": [
      205.6,
      211.319
    ],
    "en": [
      "Because its IP address was in the ARP message’s target IP address field, R1 will then send"
    ],
    "ru": [
      "Поскольку его IP-адрес был в поле целевого IP-адреса сообщения ARP, маршрутизатор R1 отправит"
    ]
  },
  {
    "time": [
      211.319,
      218.12
    ],
    "en": [
      "an ARP reply to PC1 so that PC1 can learn R1’s MAC address and add an entry for R1"
    ],
    "ru": [
      "ответ ARP на ПК1, чтобы ПК1 мог узнать MAC-адрес маршрутизатора R1 и добавить запись для маршрутизатора R1"
    ]
  },
  {
    "time": [
      218.12,
      220.099
    ],
    "en": [
      "in its ARP table."
    ],
    "ru": [
      "в своей таблице ARP."
    ]
  },
  {
    "time": [
      220.099,
      226.26
    ],
    "en": [
      "Note that R1 also added an entry for PC1 in its own ARP table when it received the original"
    ],
    "ru": [
      "Обратите внимание, что R1 также добавил запись для ПК1 в свою собственную таблицу ARP, когда получил исходный"
    ]
  },
  {
    "time": [
      226.26,
      231.739
    ],
    "en": [
      "ARP request from PC1, so R1 doesn’t need to send an ARP request if it wants to send"
    ],
    "ru": [
      "Запрос ARP от ПК1, поэтому маршрутизатору R1 не нужно отправлять запрос ARP, если он хочет отправить"
    ]
  },
  {
    "time": [
      231.739,
      233.48
    ],
    "en": [
      "a frame to PC1."
    ],
    "ru": [
      "рама к ПК1."
    ]
  },
  {
    "time": [
      233.48,
      237.34
    ],
    "en": [
      "Here’s that ARP reply in Wireshark."
    ],
    "ru": [
      "Вот этот ответ ARP в Wireshark."
    ]
  },
  {
    "time": [
      237.34,
      245.299
    ],
    "en": [
      "The sender IP and MAC fields are R1’s addresses, and the destination IP and MAC fields are PC1’s addresses."
    ],
    "ru": [
      "Поля IP и MAC отправителя - это адреса R1, а поля IP и MAC назначения - это адреса PC1."
    ]
  },
  {
    "time": [
      245.299,
      247.89
    ],
    "en": [
      "PC1’s addresses. Pause the video if you want to check out the message."
    ],
    "ru": [
      "Адреса ПК1. Поставьте видео на паузу, если хотите просмотреть сообщение."
    ]
  },
  {
    "time": [
      247.89,
      255.889
    ],
    "en": [
      "So, PC1 is now able to insert R1’s MAC address as the destination MAC of its DNS query, and"
    ],
    "ru": [
      "Итак, ПК1 теперь может вставить MAC-адрес маршрутизатора R1 в качестве MAC-адреса назначения своего DNS-запроса и"
    ]
  },
  {
    "time": [
      255.889,
      259.72
    ],
    "en": [
      "then send the message to R1 which will forward it over the Internet."
    ],
    "ru": [
      "затем отправьте сообщение R1, который перешлет его через Интернет."
    ]
  },
  {
    "time": [
      259.72,
      264.02
    ],
    "en": [
      "So, that’s the basic ARP process."
    ],
    "ru": [
      "Итак, это основной процесс ARP."
    ]
  },
  {
    "time": [
      264.02,
      269.18
    ],
    "en": [
      "But there is also something called gratuitous ARP, which I introduced briefly in another video."
    ],
    "ru": [
      "Но есть также так называемый бесплатный ARP, о котором я кратко рассказал в другом видео."
    ]
  },
  {
    "time": [
      269.18,
      276.27
    ],
    "en": [
      "video. A gratuitous ARP message is an ARP reply that is sent without receiving an ARP request."
    ],
    "ru": [
      "видео. Бесплатное сообщение ARP - это ответ ARP, который отправляется без получения запроса ARP."
    ]
  },
  {
    "time": [
      276.27,
      279.96
    ],
    "en": [
      "It is sent to the broadcast MAC address, all Fs."
    ],
    "ru": [
      "Он отправляется на широковещательный MAC-адрес, все Fs."
    ]
  },
  {
    "time": [
      279.96,
      282.87
    ],
    "en": [
      "Note that standard ARP replies are not broadcast."
    ],
    "ru": [
      "Обратите внимание, что стандартные ответы ARP не транслируются."
    ]
  },
  {
    "time": [
      282.87,
      288.75
    ],
    "en": [
      "They are unicast messages sent to the device that sent the ARP request."
    ],
    "ru": [
      "Это одноадресные сообщения, отправленные на устройство, отправившее запрос ARP."
    ]
  },
  {
    "time": [
      288.75,
      292.93
    ],
    "en": [
      "Gratuitous ARP allows other devices on the local network to learn the MAC address of"
    ],
    "ru": [
      "Бесплатный ARP позволяет другим устройствам в локальной сети узнать MAC-адрес"
    ]
  },
  {
    "time": [
      292.93,
      298.729
    ],
    "en": [
      "the device that sent the gratuitous ARP, and they don’t have to send ARP requests."
    ],
    "ru": [
      "устройство, которое отправило бесплатный ARP, и им не нужно отправлять запросы ARP."
    ]
  },
  {
    "time": [
      298.729,
      304.02
    ],
    "en": [
      "This depends on the device maker, but some devices automatically send gratuitous ARP"
    ],
    "ru": [
      "Это зависит от производителя устройства, но некоторые устройства автоматически отправляют бесплатный ARP."
    ]
  },
  {
    "time": [
      304.02,
      311.389
    ],
    "en": [
      "messages when an interface is enabled, IP address is changed, MAC address is changed, etc."
    ],
    "ru": [
      "сообщения при включении интерфейса, изменении IP-адреса, изменении MAC-адреса и т. д."
    ]
  },
  {
    "time": [
      311.389,
      316.639
    ],
    "en": [
      "etc. So, for example if PC2’s network interface is enabled it might send this gratuitous ARP"
    ],
    "ru": [
      "и т. д. Так, например, если сетевой интерфейс ПК2 включен, он может отправлять этот бесплатный ARP"
    ]
  },
  {
    "time": [
      316.639,
      320.49
    ],
    "en": [
      "reply, and it is flooded in the local network."
    ],
    "ru": [
      "ответ, и он заливается в локальную сеть."
    ]
  },
  {
    "time": [
      320.49,
      325.37
    ],
    "en": [
      "Now the other devices will add an ARP entry for PC2 in their ARP tables, and the switches"
    ],
    "ru": [
      "Теперь другие устройства добавят запись ARP для ПК2 в свои таблицы ARP, а переключатели"
    ]
  },
  {
    "time": [
      325.37,
      328.81
    ],
    "en": [
      "also add entries for PC2 in their MAC address tables."
    ],
    "ru": [
      "также добавьте записи для ПК2 в их таблицы MAC-адресов."
    ]
  },
  {
    "time": [
      328.81,
      334.18
    ],
    "en": [
      "We’ll come back to the concept of gratuitous ARP when we cover an attack involving it,"
    ],
    "ru": [
      "Мы вернемся к концепции бесплатного ARP, когда рассмотрим атаку с его участием,"
    ]
  },
  {
    "time": [
      334.18,
      335.84000000000003
    ],
    "en": [
      "but now let’s move on."
    ],
    "ru": [
      "а теперь пойдем дальше."
    ]
  },
  {
    "time": [
      335.84000000000003,
      339.25
    ],
    "en": [
      "Okay, let’s move on to Dynamic ARP Inspection."
    ],
    "ru": [
      "Хорошо, перейдем к динамической проверке ARP."
    ]
  },
  {
    "time": [
      339.25,
      345.84000000000003
    ],
    "en": [
      "DAI is a feature of switches that is used to filter ARP messages received on untrusted ports."
    ],
    "ru": [
      "DAI - это функция коммутаторов, которая используется для фильтрации сообщений ARP, полученных на ненадежных портах."
    ]
  },
  {
    "time": [
      345.84000000000003,
      347.65
    ],
    "en": [
      "ports. It only filters ARP messages."
    ],
    "ru": [
      "порты. Он фильтрует только сообщения ARP."
    ]
  },
  {
    "time": [
      347.65,
      350.61
    ],
    "en": [
      "All other messages will be unaffected."
    ],
    "ru": [
      "На все остальные сообщения это не повлияет."
    ]
  },
  {
    "time": [
      350.61,
      354.87
    ],
    "en": [
      "Just like DHCP snooping, all ports are untrusted by default."
    ],
    "ru": [
      "Как и при отслеживании DHCP, все порты по умолчанию не являются доверенными."
    ]
  },
  {
    "time": [
      354.87,
      360.69
    ],
    "en": [
      "Typically, all ports connected to other network devices, for example switches or routers,"
    ],
    "ru": [
      "Обычно все порты, подключенные к другим сетевым устройствам, например коммутаторам или маршрутизаторам,"
    ]
  },
  {
    "time": [
      360.69,
      366.229
    ],
    "en": [
      "should be configured as trusted, while interfaces connected to end hosts should remain untrusted."
    ],
    "ru": [
      "должны быть настроены как доверенные, а интерфейсы, подключенные к конечным хостам, должны оставаться ненадежными."
    ]
  },
  {
    "time": [
      366.229,
      373.84
    ],
    "en": [
      "So, in this network that means we should configure these interfaces as trusted, but leave these interfaces as untrusted."
    ],
    "ru": [
      "Итак, в этой сети это означает, что мы должны настроить эти интерфейсы как доверенные, но оставить эти интерфейсы как ненадежные."
    ]
  },
  {
    "time": [
      373.84,
      379.949
    ],
    "en": [
      "interfaces as untrusted. Now, SW2’s interface connected to SW1 could also be left as untrusted because it is a"
    ],
    "ru": [
      "интерфейсы как ненадежные. Теперь интерфейс SW2, подключенный к SW1, также можно оставить как ненадежный, потому что это"
    ]
  },
  {
    "time": [
      379.949,
      382.43
    ],
    "en": [
      "downlink leading toward the end hosts."
    ],
    "ru": [
      "нисходящий канал, ведущий к конечным хостам."
    ]
  },
  {
    "time": [
      382.43,
      384.19
    ],
    "en": [
      "Either design will work."
    ],
    "ru": [
      "Любой дизайн будет работать."
    ]
  },
  {
    "time": [
      384.19,
      389.27
    ],
    "en": [
      "In Cisco’s documentation they recommend that all interfaces connected to switches,"
    ],
    "ru": [
      "В документации Cisco рекомендуется, чтобы все интерфейсы, подключенные к коммутаторам,"
    ]
  },
  {
    "time": [
      389.27,
      394.78
    ],
    "en": [
      "routers, etc. are configured as trusted, so that’s why I made the interface trusted."
    ],
    "ru": [
      "маршрутизаторы и т. д. настроены как доверенные, поэтому я сделал интерфейс надежным."
    ]
  },
  {
    "time": [
      394.78,
      401.08
    ],
    "en": [
      "Here’s how DAI works, and you’ll see it’s basically the same as DHCP snooping."
    ],
    "ru": [
      "Вот как работает DAI, и вы увидите, что это в основном то же самое, что и отслеживание DHCP."
    ]
  },
  {
    "time": [
      401.08,
      403.789
    ],
    "en": [
      "PC1 sends an ARP request."
    ],
    "ru": [
      "ПК1 отправляет запрос ARP."
    ]
  },
  {
    "time": [
      403.789,
      409.04
    ],
    "en": [
      "Because it arrives on an untrusted port, SW1 uses DAI to inspect it."
    ],
    "ru": [
      "Поскольку он поступает на ненадежный порт, SW1 использует DAI для его проверки."
    ]
  },
  {
    "time": [
      409.04,
      413.5
    ],
    "en": [
      "It determines the message is OK, so it forwards it to SW2."
    ],
    "ru": [
      "Он определяет, что сообщение в порядке, и пересылает его SW2."
    ]
  },
  {
    "time": [
      413.5,
      418.52
    ],
    "en": [
      "In this case SW2 doesn’t inspect it, because it receives the message on a trusted interface,"
    ],
    "ru": [
      "В этом случае SW2 не проверяет его, потому что он получает сообщение через доверенный интерфейс,"
    ]
  },
  {
    "time": [
      418.52,
      422.389
    ],
    "en": [
      "so it forwards it to R1, which sends the reply."
    ],
    "ru": [
      "поэтому он пересылает его R1, который отправляет ответ."
    ]
  },
  {
    "time": [
      422.389,
      429.5
    ],
    "en": [
      "This message isn’t inspected by SW2 or SW1, because they receive it on trusted interfaces."
    ],
    "ru": [
      "Это сообщение не проверяется SW2 или SW1, потому что они получают его через доверенные интерфейсы."
    ]
  },
  {
    "time": [
      429.5,
      435.34
    ],
    "en": [
      "This time PC2 sends an ARP message, but SW1 inspects it and decides to discard the message"
    ],
    "ru": [
      "На этот раз ПК2 отправляет сообщение ARP, но SW1 проверяет его и решает отклонить сообщение."
    ]
  },
  {
    "time": [
      435.34,
      437.9
    ],
    "en": [
      "because it violates the rules of DAI."
    ],
    "ru": [
      "потому что это нарушает правила DAI."
    ]
  },
  {
    "time": [
      437.9,
      444.259
    ],
    "en": [
      "I’ll explain exactly how DAI determines if a message is okay or not later, but now"
    ],
    "ru": [
      "Я объясню, как именно DAI определяет, приемлемо ли сообщение или нет, позже, но сейчас"
    ]
  },
  {
    "time": [
      444.259,
      446.849
    ],
    "en": [
      "let me show you an ARP-based attack."
    ],
    "ru": [
      "позвольте мне показать вам атаку на основе ARP."
    ]
  },
  {
    "time": [
      446.849,
      453.08
    ],
    "en": [
      "So, this is the ARP poisoning attack, which I briefly mentioned in a previous video."
    ],
    "ru": [
      "Итак, это атака отравления ARP, о которой я кратко упоминал в предыдущем видео."
    ]
  },
  {
    "time": [
      453.08,
      459.11
    ],
    "en": [
      "Similar to DHCP poisoning, ARP poisoning involves an attacker manipulating targets’ ARP tables"
    ],
    "ru": [
      "Подобно отравлению DHCP, отравление ARP предполагает, что злоумышленник манипулирует таблицами ARP целей."
    ]
  },
  {
    "time": [
      459.11,
      462.189
    ],
    "en": [
      "so traffic is sent to the attacker."
    ],
    "ru": [
      "таким образом трафик направляется злоумышленнику."
    ]
  },
  {
    "time": [
      462.189,
      468.979
    ],
    "en": [
      "To do this, the attacker can send gratuitous ARP messages using another device’s IP address."
    ],
    "ru": [
      "Для этого злоумышленник может бесплатно отправлять ARP-сообщения, используя IP-адрес другого устройства."
    ]
  },
  {
    "time": [
      468.979,
      474.219
    ],
    "en": [
      "Another option is to send replies to the targets’ legitimate ARP request messages, but I’ll"
    ],
    "ru": [
      "Другой вариант - отправить ответы на сообщения с законными запросами ARP, но я"
    ]
  },
  {
    "time": [
      474.219,
      477.53
    ],
    "en": [
      "use gratuitous ARP for this demonstration."
    ],
    "ru": [
      "используйте бесплатный ARP для этой демонстрации."
    ]
  },
  {
    "time": [
      477.53,
      481.979
    ],
    "en": [
      "Other devices will receive the gratuitous ARP and update their ARP tables, causing them"
    ],
    "ru": [
      "Другие устройства получат бесплатный ARP и обновят свои таблицы ARP, в результате чего они"
    ]
  },
  {
    "time": [
      481.979,
      486.86
    ],
    "en": [
      "to send traffic to the attacker instead of the legitimate destination."
    ],
    "ru": [
      "для отправки трафика злоумышленнику вместо законного пункта назначения."
    ]
  },
  {
    "time": [
      486.86,
      494.93
    ],
    "en": [
      "For example, the attacker PC2 sends a GARP message using the IP address of the default gateway, R1."
    ],
    "ru": [
      "Например, ПК2 злоумышленника отправляет сообщение GARP, используя IP-адрес шлюза по умолчанию, R1."
    ]
  },
  {
    "time": [
      494.93,
      498.33
    ],
    "en": [
      "gateway, R1. It is flooded through the network, and all devices receive it."
    ],
    "ru": [
      "шлюз, R1. Он разливается по сети, и все устройства его получают."
    ]
  },
  {
    "time": [
      498.33,
      506.47
    ],
    "en": [
      "So, they update their ARP tables to map PC2’s MAC address to the IP address 192.168.1.1."
    ],
    "ru": [
      "Таким образом, они обновляют свои таблицы ARP, чтобы сопоставить MAC-адрес ПК2 с IP-адресом 192.168.1.1."
    ]
  },
  {
    "time": [
      506.47,
      513.45
    ],
    "en": [
      "By the way, R1 doesn’t update its ARP table, because 192.168.1.1 is its own IP address."
    ],
    "ru": [
      "Кстати, R1 не обновляет свою таблицу ARP, потому что 192.168.1.1 - это его собственный IP-адрес."
    ]
  },
  {
    "time": [
      513.45,
      520.38
    ],
    "en": [
      "Now, if PC1 wants to send this packet to an external network, it is sent to PC2 first."
    ],
    "ru": [
      "Теперь, если ПК1 хочет отправить этот пакет во внешнюю сеть, он сначала отправляется на ПК2."
    ]
  },
  {
    "time": [
      520.38,
      527.94
    ],
    "en": [
      "PC2 can save a copy of the message for future inspection and then forward it to the legitimate default gateway, R1."
    ],
    "ru": [
      "ПК2 может сохранить копию сообщения для будущей проверки, а затем переслать ее на законный шлюз по умолчанию, R1."
    ]
  },
  {
    "time": [
      527.94,
      532.65
    ],
    "en": [
      "default gateway, R1. It’s possible that PC2 could also manipulate the information in the packet."
    ],
    "ru": [
      "шлюз по умолчанию, R1. Возможно, что ПК2 также может манипулировать информацией в пакете."
    ]
  },
  {
    "time": [
      532.65,
      538.12
    ],
    "en": [
      "So, this is how ARP can be used to perform a man in the middle attack, similar to the"
    ],
    "ru": [
      "Вот как можно использовать ARP для атаки человека в середине, аналогично"
    ]
  },
  {
    "time": [
      538.12,
      542.26
    ],
    "en": [
      "DHCP poisoning attack shown in the previous video."
    ],
    "ru": [
      "Атака с отравлением DHCP, показанная в предыдущем видео."
    ]
  },
  {
    "time": [
      542.26,
      546.1
    ],
    "en": [
      "Now let’s see how DAI can protect against this kind of attack."
    ],
    "ru": [
      "Теперь давайте посмотрим, как DAI может защитить от такого рода атак."
    ]
  },
  {
    "time": [
      546.1,
      550.7
    ],
    "en": [
      "First, here’s a summary of how DAI works."
    ],
    "ru": [
      "Во-первых, вот краткое описание того, как работает DAI."
    ]
  },
  {
    "time": [
      550.7,
      556.42
    ],
    "en": [
      "DAI inspects the sender MAC and sender IP fields of ARP messages received on untrusted"
    ],
    "ru": [
      "DAI проверяет поля MAC и IP отправителя сообщений ARP, полученных в ненадежных"
    ]
  },
  {
    "time": [
      556.42,
      561.82
    ],
    "en": [
      "ports and checks if there is a matching entry in the DHCP snooping binding table."
    ],
    "ru": [
      "порты и проверяет, есть ли соответствующая запись в таблице привязки отслеживания DHCP."
    ]
  },
  {
    "time": [
      561.82,
      568.17
    ],
    "en": [
      "So, I showed you in the previous video that DHCP snooping creates a binding table, and"
    ],
    "ru": [
      "Итак, я показал вам в предыдущем видео, что отслеживание DHCP создает таблицу привязки и"
    ]
  },
  {
    "time": [
      568.17,
      573.97
    ],
    "en": [
      "as you can see the MAC addresses and IP addresses of DHCP clients are entered here."
    ],
    "ru": [
      "как вы можете видеть, здесь вводятся MAC-адреса и IP-адреса клиентов DHCP."
    ]
  },
  {
    "time": [
      573.97,
      580.66
    ],
    "en": [
      "So, DAI checks ARP messages and if there is a matching entry in the DHCP snooping table,"
    ],
    "ru": [
      "Итак, DAI проверяет сообщения ARP, и если в таблице отслеживания DHCP есть соответствующая запись,"
    ]
  },
  {
    "time": [
      580.66,
      583.02
    ],
    "en": [
      "the ARP message is forwarded normally."
    ],
    "ru": [
      "сообщение ARP пересылается нормально."
    ]
  },
  {
    "time": [
      583.02,
      584.74
    ],
    "en": [
      "DAI trusts the message."
    ],
    "ru": [
      "DAI доверяет сообщению."
    ]
  },
  {
    "time": [
      584.74,
      592.53
    ],
    "en": [
      "However, if there isn’t a matching entry in the DHCP snooping binding table the ARP message is discarded."
    ],
    "ru": [
      "Однако, если в таблице привязки отслеживания DHCP нет соответствующей записи, сообщение ARP отбрасывается."
    ]
  },
  {
    "time": [
      592.53,
      599.7
    ],
    "en": [
      "message is discarded. Note that this check only occurs on untrusted ports, DAI doesn’t inspect messages received on trusted ports."
    ],
    "ru": [
      "сообщение отброшено. Обратите внимание, что эта проверка выполняется только на ненадежных портах, DAI не проверяет сообщения, полученные на доверенных портах."
    ]
  },
  {
    "time": [
      599.7,
      601.78
    ],
    "en": [
      "on trusted ports. They are forwarded as normal."
    ],
    "ru": [
      "на доверенных портах. Они пересылаются как обычно."
    ]
  },
  {
    "time": [
      601.78,
      607.79
    ],
    "en": [
      "However, just like in DHCP snooping all ports are untrusted by default, so you have to manually"
    ],
    "ru": [
      "Однако, как и при отслеживании DHCP, все порты по умолчанию не являются доверенными, поэтому вам придется вручную"
    ]
  },
  {
    "time": [
      607.79,
      610.38
    ],
    "en": [
      "specify which ports are trusted."
    ],
    "ru": [
      "укажите, какие порты являются доверенными."
    ]
  },
  {
    "time": [
      610.38,
      618.35
    ],
    "en": [
      "So, DAI operations are usually reliant on DHCP snooping, but actually there is another option."
    ],
    "ru": [
      "Итак, операции DAI обычно зависят от отслеживания DHCP, но на самом деле есть и другой вариант."
    ]
  },
  {
    "time": [
      618.35,
      625.78
    ],
    "en": [
      "option. ARP ACLs can be manually configured to map IP addresses and MAC addresses for DAI to check."
    ],
    "ru": [
      "вариант. Списки управления доступом ARP можно настроить вручную для сопоставления IP-адресов и MAC-адресов для проверки DAI."
    ]
  },
  {
    "time": [
      625.78,
      629.5
    ],
    "en": [
      "check. This can be useful for hosts that don’t use DHCP."
    ],
    "ru": [
      "проверить. Это может быть полезно для хостов, которые не используют DHCP."
    ]
  },
  {
    "time": [
      629.5,
      635.41
    ],
    "en": [
      "If they don’t use DHCP, they won’t have an entry in the DHCP snooping table, so DAI"
    ],
    "ru": [
      "Если они не используют DHCP, у них не будет записи в таблице отслеживания DHCP, поэтому DAI"
    ]
  },
  {
    "time": [
      635.41,
      638.92
    ],
    "en": [
      "will just drop all ARP messages they try to send."
    ],
    "ru": [
      "просто отбрасывает все сообщения ARP, которые они пытаются отправить."
    ]
  },
  {
    "time": [
      638.92,
      642.57
    ],
    "en": [
      "You can configure ARP ACLs for these specific hosts."
    ],
    "ru": [
      "Вы можете настроить ARP ACL для этих конкретных хостов."
    ]
  },
  {
    "time": [
      642.57,
      646.1
    ],
    "en": [
      "Or all hosts if you want, but that’s a lot of manual work."
    ],
    "ru": [
      "Или все хосты, если хотите, но это большая ручная работа."
    ]
  },
  {
    "time": [
      646.1,
      650.19
    ],
    "en": [
      "I’ll show you how to configure ARP ACLs later."
    ],
    "ru": [
      "Я покажу вам, как настроить ARP ACL позже."
    ]
  },
  {
    "time": [
      650.19,
      655.83
    ],
    "en": [
      "In addition to the sender MAC and sender IP fields, DAI can be configured to perform more"
    ],
    "ru": [
      "Помимо полей MAC и IP отправителя, DAI может быть настроен для выполнения большего количества операций."
    ]
  },
  {
    "time": [
      655.83,
      658.67
    ],
    "en": [
      "in-depth checks, but these are optional."
    ],
    "ru": [
      "углубленные проверки, но они не являются обязательными."
    ]
  },
  {
    "time": [
      658.67,
      661.57
    ],
    "en": [
      "I’ll briefly introduce them later."
    ],
    "ru": [
      "Я кратко их представлю позже."
    ]
  },
  {
    "time": [
      661.57,
      667.77
    ],
    "en": [
      "And like DHCP snooping, DAI also supports rate-limiting to prevent attackers from overwhelming"
    ],
    "ru": [
      "И, как и отслеживание DHCP, DAI также поддерживает ограничение скорости, чтобы злоумышленники не"
    ]
  },
  {
    "time": [
      667.77,
      669.54
    ],
    "en": [
      "the switch with ARP messages."
    ],
    "ru": [
      "переключатель с сообщениями ARP."
    ]
  },
  {
    "time": [
      669.54,
      676.39
    ],
    "en": [
      "I didn’t mention this in the last video, but DHCP snooping and DAI both require work"
    ],
    "ru": [
      "Я не упоминал об этом в прошлом видео, но для отслеживания DHCP и DAI требуется работа."
    ]
  },
  {
    "time": [
      676.39,
      678.31
    ],
    "en": [
      "from the switch’s CPU."
    ],
    "ru": [
      "от процессора коммутатора."
    ]
  },
  {
    "time": [
      678.31,
      683.05
    ],
    "en": [
      "So, even if the attacker’s messages are blocked they can still overload the switch"
    ],
    "ru": [
      "Таким образом, даже если сообщения злоумышленника заблокированы, он все равно может перегрузить коммутатор."
    ]
  },
  {
    "time": [
      683.05,
      686.66
    ],
    "en": [
      "CPU by sending a ton of ARP messages."
    ],
    "ru": [
      "CPU, отправив тонну сообщений ARP."
    ]
  },
  {
    "time": [
      686.66,
      691.36
    ],
    "en": [
      "If the attacker tries to do that, rate limiting will just disable the interface, so it’s"
    ],
    "ru": [
      "Если злоумышленник попытается это сделать, ограничение скорости просто отключит интерфейс, поэтому он"
    ]
  },
  {
    "time": [
      691.36,
      694.85
    ],
    "en": [
      "a useful mitigation technique."
    ],
    "ru": [
      "полезный метод смягчения последствий."
    ]
  },
  {
    "time": [
      694.85,
      698.21
    ],
    "en": [
      "Now let’s move on to DAI configuration."
    ],
    "ru": [
      "Теперь перейдем к настройке DAI."
    ]
  },
  {
    "time": [
      698.21,
      702.65
    ],
    "en": [
      "First up, the basic commands to enable it and configure trusted ports."
    ],
    "ru": [
      "Во-первых, основные команды для его включения и настройки доверенных портов."
    ]
  },
  {
    "time": [
      702.65,
      710.44
    ],
    "en": [
      "First, use IP ARP INSPECTION VLAN, followed by the VLAN number, to enable DAI on a VLAN."
    ],
    "ru": [
      "Сначала используйте IP ARP INSPECTION VLAN, за которым следует номер VLAN, чтобы включить DAI в VLAN."
    ]
  },
  {
    "time": [
      710.44,
      713.22
    ],
    "en": [
      "In this network I’m using VLAN 1 only."
    ],
    "ru": [
      "В этой сети я использую только VLAN 1."
    ]
  },
  {
    "time": [
      713.22,
      718.48
    ],
    "en": [
      "However, if there are multiple VLANs, you should enable DAI for each VLAN."
    ],
    "ru": [
      "Однако при наличии нескольких VLAN следует включить DAI для каждой VLAN."
    ]
  },
  {
    "time": [
      718.48,
      725.66
    ],
    "en": [
      "If you don’t, only ARP messages in the specified VLAN, VLAN 1 in this case, will be inspected."
    ],
    "ru": [
      "Если вы этого не сделаете, будут проверяться только сообщения ARP в указанной VLAN, в данном случае VLAN 1."
    ]
  },
  {
    "time": [
      725.66,
      734.17
    ],
    "en": [
      "Then I configured SW2’s G0/0 and G0/1 interfaces as trusted ports with the command IP ARP INSPECTION TRUST."
    ],
    "ru": [
      "Затем я настроил интерфейсы G0 / 0 и G0 / 1 SW2 как доверенные порты с помощью команды IP ARP INSPECTION TRUST."
    ]
  },
  {
    "time": [
      734.17,
      740.76
    ],
    "en": [
      "TRUST. And that’s it, those are the basic commands to enable DAI and configure trusted ports."
    ],
    "ru": [
      "ДОВЕРЯТЬ. Вот и все, это основные команды для включения DAI и настройки доверенных портов."
    ]
  },
  {
    "time": [
      740.76,
      746.43
    ],
    "en": [
      "Then I did the same configurations on SW1, but only made its G0/0 interface trusted."
    ],
    "ru": [
      "Затем я проделал те же настройки на SW1, но только сделал его интерфейс G0 / 0 доверенным."
    ]
  },
  {
    "time": [
      746.43,
      753.6
    ],
    "en": [
      "Now, you might have noticed a difference between DHCP snooping configuration and DAI configuration."
    ],
    "ru": [
      "Теперь вы могли заметить разницу между конфигурацией отслеживания DHCP и конфигурацией DAI."
    ]
  },
  {
    "time": [
      753.6,
      761.36
    ],
    "en": [
      "DHCP requires two commands to enable it, IP DHCP SNOOPING and IP DHCP SNOOPING VLAN."
    ],
    "ru": [
      "Для DHCP требуются две команды: IP DHCP SNOOPING и IP DHCP SNOOPING VLAN."
    ]
  },
  {
    "time": [
      761.36,
      765.21
    ],
    "en": [
      "So, enable it globally and then enable it per VLAN."
    ],
    "ru": [
      "Итак, включите его глобально, а затем включите для каждой VLAN."
    ]
  },
  {
    "time": [
      765.21,
      772.61
    ],
    "en": [
      "DAI is different, you only have to enable it per VLAN with the command IP ARP INSPECTION VLAN."
    ],
    "ru": [
      "DAI отличается, вам нужно только включить его для каждой VLAN с помощью команды IP ARP INSPECTION VLAN."
    ]
  },
  {
    "time": [
      772.61,
      776.71
    ],
    "en": [
      "VLAN. Honestly I’m not sure the reason for this difference, but that’s how it works."
    ],
    "ru": [
      "VLAN. Честно говоря, я не понимаю причину этой разницы, но вот как это работает."
    ]
  },
  {
    "time": [
      776.71,
      783.7
    ],
    "en": [
      "Okay let’s check out one of the DAI show commands, SHOW IP ARP INSPECTION INTERFACES."
    ],
    "ru": [
      "Хорошо, давайте посмотрим на одну из команд DAI show, SHOW IP ARP INSPECTION INTERFACES."
    ]
  },
  {
    "time": [
      783.7,
      787.95
    ],
    "en": [
      "First, you can see the trust state of each interface."
    ],
    "ru": [
      "Во-первых, вы можете увидеть состояние доверия каждого интерфейса."
    ]
  },
  {
    "time": [
      787.95,
      792.65
    ],
    "en": [
      "On SW1 only G0/0 is trusted, as I configured."
    ],
    "ru": [
      "На SW1 доверяют только G0 / 0, как я настроил."
    ]
  },
  {
    "time": [
      792.65,
      796.34
    ],
    "en": [
      "This column shows us the DAI rate limiting settings."
    ],
    "ru": [
      "В этом столбце показаны настройки ограничения скорости DAI."
    ]
  },
  {
    "time": [
      796.34,
      803.07
    ],
    "en": [
      "There are a few differences between DHCP snooping rate limiting and DAI rate limiting."
    ],
    "ru": [
      "Есть несколько различий между ограничением скорости отслеживания DHCP и ограничением скорости DAI."
    ]
  },
  {
    "time": [
      803.07,
      807.73
    ],
    "en": [
      "DAI rate limiting is enabled on untrusted ports by default with a rate of 15 packets"
    ],
    "ru": [
      "Ограничение скорости DAI включено на ненадежных портах по умолчанию со скоростью 15 пакетов."
    ]
  },
  {
    "time": [
      807.73,
      812.67
    ],
    "en": [
      "per second, but it is disabled on trusted ports by default."
    ],
    "ru": [
      "в секунду, но по умолчанию он отключен на доверенных портах."
    ]
  },
  {
    "time": [
      812.67,
      820.7
    ],
    "en": [
      "In the case of DHCP snooping, rate limiting is disabled on all interfaces, trusted and untrusted, by default."
    ],
    "ru": [
      "В случае отслеживания DHCP ограничение скорости отключено по умолчанию для всех интерфейсов, доверенных и ненадежных."
    ]
  },
  {
    "time": [
      820.7,
      823.58
    ],
    "en": [
      "untrusted, by default. And this column shows us one more difference."
    ],
    "ru": [
      "по умолчанию ненадежный. И этот столбец показывает нам еще одно отличие."
    ]
  },
  {
    "time": [
      823.58,
      827.32
    ],
    "en": [
      "DHCP snooping rate limiting is configured like this."
    ],
    "ru": [
      "Ограничение скорости отслеживания DHCP настраивается следующим образом."
    ]
  },
  {
    "time": [
      827.32,
      829.31
    ],
    "en": [
      "X packets per second."
    ],
    "ru": [
      "X пакетов в секунду."
    ]
  },
  {
    "time": [
      829.31,
      834.38
    ],
    "en": [
      "However DAI has a feature called the burst interval which allows you to configure rate"
    ],
    "ru": [
      "Однако у DAI есть функция, называемая интервалом пакета, которая позволяет вам настраивать скорость"
    ]
  },
  {
    "time": [
      834.38,
      837.81
    ],
    "en": [
      "limiting like X packets per Y seconds."
    ],
    "ru": [
      "ограничение типа X пакетов за Y секунд."
    ]
  },
  {
    "time": [
      837.81,
      842.35
    ],
    "en": [
      "So, the interval being measured doesn’t have to be one second, which provides more"
    ],
    "ru": [
      "Таким образом, измеряемый интервал не обязательно должен составлять одну секунду, что дает больше"
    ]
  },
  {
    "time": [
      842.35,
      846.7
    ],
    "en": [
      "flexibility with how you can control the rate of ARP messages on the interface."
    ],
    "ru": [
      "гибкость в том, как вы можете контролировать скорость сообщений ARP на интерфейсе."
    ]
  },
  {
    "time": [
      846.7,
      852.93
    ],
    "en": [
      "Okay, since I just brought up DAI rate limiting let’s see how to configure it."
    ],
    "ru": [
      "Хорошо, раз уж я только что поднял ограничение скорости DAI, давайте посмотрим, как его настроить."
    ]
  },
  {
    "time": [
      852.93,
      856.88
    ],
    "en": [
      "Let’s configure DAI rate limiting on SW1."
    ],
    "ru": [
      "Давайте настроим ограничение скорости DAI на SW1."
    ]
  },
  {
    "time": [
      856.88,
      865.6
    ],
    "en": [
      "First, on G0/1 and 2 I used IP ARP INSPECTION LIMIT RATE 25, that means 25 packets, and"
    ],
    "ru": [
      "Во-первых, на G0 / 1 и 2 я использовал IP ARP INSPECTION LIMIT RATE 25, что означает 25 пакетов, и"
    ]
  },
  {
    "time": [
      865.6,
      869.01
    ],
    "en": [
      "then BURST INTERVAL 2, that means 2 seconds."
    ],
    "ru": [
      "затем BURST INTERVAL 2, что означает 2 секунды."
    ]
  },
  {
    "time": [
      869.01,
      876.38
    ],
    "en": [
      "So, I changed the rate from 15 packets per second to 25 packets per 2 seconds."
    ],
    "ru": [
      "Итак, я изменил скорость с 15 пакетов в секунду до 25 пакетов в 2 секунды."
    ]
  },
  {
    "time": [
      876.38,
      878.92
    ],
    "en": [
      "Note that the burst interval is optional."
    ],
    "ru": [
      "Обратите внимание, что интервал между пакетами не является обязательным."
    ]
  },
  {
    "time": [
      878.92,
      882.51
    ],
    "en": [
      "If you don’t specify it, the default is 1 second."
    ],
    "ru": [
      "Если вы не укажете его, значение по умолчанию - 1 секунда."
    ]
  },
  {
    "time": [
      882.51,
      891.1
    ],
    "en": [
      "To demonstrate, on G0/3 I configured IP ARP INSPECTION LIMIT RATE 10, without specifying the burst interval."
    ],
    "ru": [
      "Чтобы продемонстрировать, на G0 / 3 я настроил ОГРАНИЧИТЕЛЬНУЮ СКОРОСТЬ ПРОВЕРКИ IP ARP 10 без указания интервала передачи пакетов."
    ]
  },
  {
    "time": [
      891.1,
      893.42
    ],
    "en": [
      "the burst interval. And here you can see the results."
    ],
    "ru": [
      "интервал между пакетами. И здесь вы можете увидеть результаты."
    ]
  },
  {
    "time": [
      893.42,
      900.88
    ],
    "en": [
      "For G0/1 and 2 it’s 25 packets per 2 seconds, and for G0/3 it’s 10 packets per second."
    ],
    "ru": [
      "Для G0 / 1 и 2 это 25 пакетов в 2 секунды, а для G0 / 3 - 10 пакетов в секунду."
    ]
  },
  {
    "time": [
      900.88,
      905.55
    ],
    "en": [
      "So, that’s how DAI rate limiting is configured."
    ],
    "ru": [
      "Итак, вот как настраивается ограничение скорости DAI."
    ]
  },
  {
    "time": [
      905.55,
      911.91
    ],
    "en": [
      "If ARP messages are received faster than the specified rate, the interface will be err-disabled."
    ],
    "ru": [
      "Если сообщения ARP принимаются быстрее указанной скорости, интерфейс будет отключен из-за ошибок."
    ]
  },
  {
    "time": [
      911.91,
      916.97
    ],
    "en": [
      "Let me emphasize that, rate limiting limits the rate that ARP messages are received on"
    ],
    "ru": [
      "Позвольте мне подчеркнуть, что ограничение скорости ограничивает скорость получения сообщений ARP."
    ]
  },
  {
    "time": [
      916.97,
      919.95
    ],
    "en": [
      "an interface, not sent by an interface."
    ],
    "ru": [
      "интерфейс, не отправляемый интерфейсом."
    ]
  },
  {
    "time": [
      919.95,
      926.11
    ],
    "en": [
      "Anyway, interfaces disabled by ARP inspection can be re-enabled manually with SHUTDOWN and"
    ],
    "ru": [
      "В любом случае интерфейсы, отключенные проверкой ARP, можно снова включить вручную с помощью SHUTDOWN и"
    ]
  },
  {
    "time": [
      926.11,
      930.69
    ],
    "en": [
      "NO SHUTDOWN on the interface, or with err-disable recovery."
    ],
    "ru": [
      "NO SHUTDOWN на интерфейсе или с восстановлением с отключением из-за ошибки."
    ]
  },
  {
    "time": [
      930.69,
      935.41
    ],
    "en": [
      "The command is ERRDISABLE RECOVERY CAUSE ARP-INSPECTION."
    ],
    "ru": [
      "Команда: ERRDISABLE RECOVERY CAUSE ARP-INSPECTION."
    ]
  },
  {
    "time": [
      935.41,
      940.75
    ],
    "en": [
      "I configured err-disable recovery on SW1, and as you can see it is enabled when I check"
    ],
    "ru": [
      "Я настроил err-disable recovery на SW1, и, как вы можете видеть, он включен, когда я проверяю"
    ]
  },
  {
    "time": [
      940.75,
      942.67
    ],
    "en": [
      "with SHOW ERRDISABLE RECOVERY."
    ],
    "ru": [
      "с SHOW ERRDISABLE RECOVERY."
    ]
  },
  {
    "time": [
      942.67,
      947.17
    ],
    "en": [
      "Okay, that’s all for DAI rate limiting."
    ],
    "ru": [
      "Хорошо, это все, что касается ограничения скорости DAI."
    ]
  },
  {
    "time": [
      947.17,
      951.08
    ],
    "en": [
      "Now let me introduce those additional checks I mentioned before."
    ],
    "ru": [
      "Теперь позвольте мне представить те дополнительные проверки, о которых я упоминал ранее."
    ]
  },
  {
    "time": [
      951.08,
      956.02
    ],
    "en": [
      "By default, DAI checks the sender MAC and IP addresses, to see if there is a matching"
    ],
    "ru": [
      "По умолчанию DAI проверяет MAC- и IP-адреса отправителя на предмет соответствия"
    ]
  },
  {
    "time": [
      956.02,
      959.85
    ],
    "en": [
      "entry in the DHCP snooping binding table or not."
    ],
    "ru": [
      "запись в таблице привязки отслеживания DHCP или нет."
    ]
  },
  {
    "time": [
      959.85,
      966.44
    ],
    "en": [
      "However, additional checks can be performed by configuring the IP ARP INSPECTION VALIDATE command."
    ],
    "ru": [
      "Однако можно выполнить дополнительные проверки, настроив команду IP ARP INSPECTION VALIDATE."
    ]
  },
  {
    "time": [
      966.44,
      971.36
    ],
    "en": [
      "command. The three options are destination MAC, IP, and source MAC."
    ],
    "ru": [
      "команда. Три варианта: MAC-адрес назначения, IP-адрес и MAC-адрес источника."
    ]
  },
  {
    "time": [
      971.36,
      972.9
    ],
    "en": [
      "How exactly do these work?"
    ],
    "ru": [
      "Как именно они работают?"
    ]
  },
  {
    "time": [
      972.9,
      980.73
    ],
    "en": [
      "I think Cisco’s explanations are quite straightforward and easy to understand, so I’ll just paste them here."
    ],
    "ru": [
      "Я думаю, что объяснения Cisco довольно просты и понятны, поэтому я просто вставлю их сюда."
    ]
  },
  {
    "time": [
      980.73,
      985.08
    ],
    "en": [
      "them here. Destination MAC validates ARP responses by checking the destination MAC address in the"
    ],
    "ru": [
      "их здесь. MAC-адрес назначения проверяет ответы ARP, проверяя MAC-адрес назначения в"
    ]
  },
  {
    "time": [
      985.08,
      989.67
    ],
    "en": [
      "Ethernet header against the target MAC address in the ARP message."
    ],
    "ru": [
      "Заголовок Ethernet против целевого MAC-адреса в сообщении ARP."
    ]
  },
  {
    "time": [
      989.67,
      992.07
    ],
    "en": [
      "If they are different, the frame is dropped."
    ],
    "ru": [
      "Если они разные, рамка сбрасывается."
    ]
  },
  {
    "time": [
      992.07,
      997.86
    ],
    "en": [
      "IP validation looks for invalid or unexpected IP addresses which shouldn’t be found in"
    ],
    "ru": [
      "Проверка IP ищет недопустимые или неожиданные IP-адреса, которые не должны быть найдены в"
    ]
  },
  {
    "time": [
      997.86,
      1007.42
    ],
    "en": [
      "ARP messages, such as 0.0.0.0, 255.255.255.255, and multicast IP addresses."
    ],
    "ru": [
      "Сообщения ARP, такие как 0.0.0.0, 255.255.255.255 и многоадресные IP-адреса."
    ]
  },
  {
    "time": [
      1007.42,
      1012.66
    ],
    "en": [
      "These IP addresses shouldn’t belong to a host, so they are considered invalid."
    ],
    "ru": [
      "Эти IP-адреса не должны принадлежать хосту, поэтому они считаются недействительными."
    ]
  },
  {
    "time": [
      1012.66,
      1017.72
    ],
    "en": [
      "The sender IP address is checked in both ARP request and reply messages, but the target"
    ],
    "ru": [
      "IP-адрес отправителя проверяется как в сообщениях запроса ARP, так и в ответных сообщениях, но цель"
    ]
  },
  {
    "time": [
      1017.72,
      1021.12
    ],
    "en": [
      "IP address is checked only in ARP replies."
    ],
    "ru": [
      "IP-адрес проверяется только в ответах ARP."
    ]
  },
  {
    "time": [
      1021.12,
      1026.74
    ],
    "en": [
      "Finally, source MAC validation checks the source MAC of the Ethernet header and compares"
    ],
    "ru": [
      "Наконец, проверка MAC-адреса источника проверяет исходный MAC-адрес заголовка Ethernet и сравнивает"
    ]
  },
  {
    "time": [
      1026.74,
      1029.549
    ],
    "en": [
      "it to the sender MAC in the ARP message."
    ],
    "ru": [
      "это к MAC-адресу отправителя в сообщении ARP."
    ]
  },
  {
    "time": [
      1029.549,
      1034.35
    ],
    "en": [
      "If they don’t match, the message is considered invalid and is dropped."
    ],
    "ru": [
      "Если они не совпадают, сообщение считается недействительным и удаляется."
    ]
  },
  {
    "time": [
      1034.35,
      1039.199
    ],
    "en": [
      "To clarify those, here is that ARP reply message I showed earlier."
    ],
    "ru": [
      "Чтобы прояснить это, вот то ответное сообщение ARP, которое я показал ранее."
    ]
  },
  {
    "time": [
      1039.199,
      1043.299
    ],
    "en": [
      "These validation checks look at the source and destination MAC addresses in the Ethernet"
    ],
    "ru": [
      "Эти проверки проверяют MAC-адреса источника и назначения в сети Ethernet."
    ]
  },
  {
    "time": [
      1043.299,
      1047.86
    ],
    "en": [
      "header, and also at these fields in the ARP message itself."
    ],
    "ru": [
      "заголовок, а также в этих полях в самом сообщении ARP."
    ]
  },
  {
    "time": [
      1047.86,
      1052.64
    ],
    "en": [
      "In this case, the source and destination in the Ethernet header match the sender and target"
    ],
    "ru": [
      "В этом случае источник и назначение в заголовке Ethernet соответствуют отправителю и цели."
    ]
  },
  {
    "time": [
      1052.64,
      1059.76
    ],
    "en": [
      "MAC addresses in the ARP message, so the message is valid for the destination MAC and source MAC checks."
    ],
    "ru": [
      "MAC-адреса в сообщении ARP, поэтому сообщение действительно для MAC-адресов назначения и MAC-адресов источника."
    ]
  },
  {
    "time": [
      1059.76,
      1066.59
    ],
    "en": [
      "MAC checks. The sender and target IP addresses in the ARP message are also valid, so it passes that check too."
    ],
    "ru": [
      "MAC проверяет. Отправитель и целевой IP-адреса в сообщении ARP также действительны, поэтому он также проходит эту проверку."
    ]
  },
  {
    "time": [
      1066.59,
      1070.83
    ],
    "en": [
      "check too. Note that these checks are done in addition to the standard DAI check, which looks at"
    ],
    "ru": [
      "проверить тоже. Обратите внимание, что эти проверки выполняются в дополнение к стандартной проверке DAI, которая рассматривает"
    ]
  },
  {
    "time": [
      1070.83,
      1076.44
    ],
    "en": [
      "the sender MAC and IP addresses and compares them to the DHCP snooping binding table."
    ],
    "ru": [
      "MAC- и IP-адреса отправителя и сравнивают их с таблицей привязки отслеживания DHCP."
    ]
  },
  {
    "time": [
      1076.44,
      1083.09
    ],
    "en": [
      "So, if these checks are configured an ARP message must pass all of the checks to be considered valid."
    ],
    "ru": [
      "Таким образом, если эти проверки настроены, сообщение ARP должно пройти все проверки, чтобы считаться действительным."
    ]
  },
  {
    "time": [
      1083.09,
      1088.059
    ],
    "en": [
      "considered valid. There’s an important point to mention about configuring those additional checks."
    ],
    "ru": [
      "считается действительным. Следует упомянуть важный момент о настройке этих дополнительных проверок."
    ]
  },
  {
    "time": [
      1088.059,
      1096.31
    ],
    "en": [
      "I configured, in order, IP ARP INSPECTION VALIDATE DST-MAC, then IP, then SRC-MAC, and"
    ],
    "ru": [
      "Я настроил по порядку: IP ARP INSPECTION VALIDATE DST-MAC, затем IP, затем SRC-MAC и"
    ]
  },
  {
    "time": [
      1096.31,
      1099.56
    ],
    "en": [
      "checked with SHOW RUN | INCLUDE VALIDATE."
    ],
    "ru": [
      "проверил с SHOW RUN | ВКЛЮЧИТЕ ПРОВЕРКУ."
    ]
  },
  {
    "time": [
      1099.56,
      1102.84
    ],
    "en": [
      "So, what do you think was displayed?"
    ],
    "ru": [
      "Как вы думаете, что было отображено?"
    ]
  },
  {
    "time": [
      1102.84,
      1106.32
    ],
    "en": [
      "Only VALIDATE SRC-MAC was displayed."
    ],
    "ru": [
      "Отображался только VALIDATE SRC-MAC."
    ]
  },
  {
    "time": [
      1106.32,
      1114.289
    ],
    "en": [
      "First I configured VALIDATE DST-MAC, but when I configured VALIDATE IP, it overwrote the previous command."
    ],
    "ru": [
      "Сначала я настроил VALIDATE DST-MAC, но когда я настроил VALIDATE IP, он перезаписал предыдущую команду."
    ]
  },
  {
    "time": [
      1114.289,
      1118.59
    ],
    "en": [
      "previous command. Then when I configured VALIDATE SRC-MAC, it overwrote IP."
    ],
    "ru": [
      "предыдущая команда. Затем, когда я настроил VALIDATE SRC-MAC, он перезаписал IP."
    ]
  },
  {
    "time": [
      1118.59,
      1123.33
    ],
    "en": [
      "So, if you want to enable all three checks, you should configure it like this."
    ],
    "ru": [
      "Итак, если вы хотите включить все три проверки, вам следует настроить это следующим образом."
    ]
  },
  {
    "time": [
      1123.33,
      1127.929
    ],
    "en": [
      "IP ARP INSPECTION VALIDATE IP SRC-MAC DST-MAC."
    ],
    "ru": [
      "ПРОВЕРКА IP ARP ПРОВЕРЬТЕ IP SRC-MAC DST-MAC."
    ]
  },
  {
    "time": [
      1127.929,
      1132.679
    ],
    "en": [
      "I checked again, and now you can see all three."
    ],
    "ru": [
      "Я проверил еще раз, и теперь вы видите все три."
    ]
  },
  {
    "time": [
      1132.679,
      1138.059
    ],
    "en": [
      "To summarize, you must enter all of the validation checks you want in a single command."
    ],
    "ru": [
      "Подводя итог, вы должны ввести все необходимые проверки в одной команде."
    ]
  },
  {
    "time": [
      1138.059,
      1144.49
    ],
    "en": [
      "You can specify one, two, or all three, and the order isn’t significant, it doesn’t matter."
    ],
    "ru": [
      "Вы можете указать один, два или все три, и порядок не имеет значения."
    ]
  },
  {
    "time": [
      1144.49,
      1148.5
    ],
    "en": [
      "matter. Okay, those are the optional validation checks that can be configured."
    ],
    "ru": [
      "иметь значение. Хорошо, это необязательные проверки, которые можно настроить."
    ]
  },
  {
    "time": [
      1148.5,
      1151.909
    ],
    "en": [
      "Now there is one more topic I want to cover, ARP ACLs."
    ],
    "ru": [
      "Теперь есть еще одна тема, которую я хочу затронуть, - списки управления доступом ARP."
    ]
  },
  {
    "time": [
      1151.909,
      1157.82
    ],
    "en": [
      "Now, I’m pretty sure the topic of ARP ACLs and their configuration is beyond the scope"
    ],
    "ru": [
      "Теперь я почти уверен, что тема списков управления доступом ARP и их настройки выходит за рамки"
    ]
  },
  {
    "time": [
      1157.82,
      1159.32
    ],
    "en": [
      "of the CCNA exam."
    ],
    "ru": [
      "экзамена CCNA."
    ]
  },
  {
    "time": [
      1159.32,
      1165.08
    ],
    "en": [
      "So, I will just give a quick example of how they work and then we’ll finish up the video."
    ],
    "ru": [
      "Итак, я просто приведу краткий пример того, как они работают, а затем мы закончим видео."
    ]
  },
  {
    "time": [
      1165.08,
      1167.69
    ],
    "en": [
      "I won’t go into the details here."
    ],
    "ru": [
      "Я не буду здесь вдаваться в подробности."
    ]
  },
  {
    "time": [
      1167.69,
      1171.279
    ],
    "en": [
      "Here is SW2’s DHCP snooping binding table."
    ],
    "ru": [
      "Вот таблица привязки отслеживания DHCP SW2."
    ]
  },
  {
    "time": [
      1171.279,
      1181.12
    ],
    "en": [
      "SRV1 has a static IP address, 192.168.1.100, so it doesn’t have an entry in SW2’s DHCP snooping binding table."
    ],
    "ru": [
      "SRV1 имеет статический IP-адрес 192.168.1.100, поэтому для него нет записи в таблице привязки отслеживания DHCP SW2."
    ]
  },
  {
    "time": [
      1181.12,
      1186.059
    ],
    "en": [
      "snooping binding table. So, what will happen when SRV1 tries to send an ARP request?"
    ],
    "ru": [
      "таблица привязки отслеживания. Итак, что произойдет, когда SRV1 попытается отправить запрос ARP?"
    ]
  },
  {
    "time": [
      1186.059,
      1189.13
    ],
    "en": [
      "It will be dropped, with an error message like this."
    ],
    "ru": [
      "Он будет удален с таким сообщением об ошибке."
    ]
  },
  {
    "time": [
      1189.13,
      1193.82
    ],
    "en": [
      "It says 1 invalid ARP request on G0/2 in VLAN1."
    ],
    "ru": [
      "Он говорит, что 1 недопустимый запрос ARP на G0 / 2 в VLAN1."
    ]
  },
  {
    "time": [
      1193.82,
      1199.85
    ],
    "en": [
      "That’s because SRV1 doesn’t have an entry in SW2’s DHCP snooping binding table."
    ],
    "ru": [
      "Это потому, что SRV1 не имеет записи в таблице привязки отслеживания DHCP SW2."
    ]
  },
  {
    "time": [
      1199.85,
      1207.7
    ],
    "en": [
      "So, to fix this let’s configure an ARP ACL to permit SRV1. Here’s the configuration."
    ],
    "ru": [
      "Итак, чтобы исправить это, давайте настроим ARP ACL, чтобы разрешить SRV1. Вот конфигурация."
    ]
  },
  {
    "time": [
      1207.7,
      1213.049
    ],
    "en": [
      "Here’s the configuration. ARP ACCESS-LIST, followed by a name, to create the ARP ACL."
    ],
    "ru": [
      "Вот конфигурация. ARP ACCESS-LIST, за которым следует имя, чтобы создать ARP ACL."
    ]
  },
  {
    "time": [
      1213.049,
      1222.2
    ],
    "en": [
      "Then I configured PERMIT IP HOST 192.168.1.100 MAC HOST, followed by SRV1’s MAC address."
    ],
    "ru": [
      "Затем я настроил РАЗРЕШИТЬ IP-ХОСТ 192.168.1.100 MAC HOST, а затем MAC-адрес SRV1."
    ]
  },
  {
    "time": [
      1222.2,
      1229.059
    ],
    "en": [
      "But, creating the ARP ACL alone doesn’t help, we have to apply it for it to take effect."
    ],
    "ru": [
      "Но создание ARP ACL само по себе не помогает, мы должны применить его, чтобы он вступил в силу."
    ]
  },
  {
    "time": [
      1229.059,
      1237.0
    ],
    "en": [
      "The command is IP ARP INSPECTION FILTER, the ACL name, VLAN, and the VLAN number."
    ],
    "ru": [
      "Команда: IP ARP INSPECTION FILTER, имя ACL, VLAN и номер VLAN."
    ]
  },
  {
    "time": [
      1237.0,
      1241.259
    ],
    "en": [
      "Okay, we created the ARP ACL and then applied it."
    ],
    "ru": [
      "Хорошо, мы создали ARP ACL и применили его."
    ]
  },
  {
    "time": [
      1241.259,
      1247.03
    ],
    "en": [
      "This time when SRV1 tries to send an ARP request, SW2 forwards it even though there is no entry"
    ],
    "ru": [
      "На этот раз, когда SRV1 пытается отправить запрос ARP, SW2 пересылает его, даже если записи нет."
    ]
  },
  {
    "time": [
      1247.03,
      1249.509
    ],
    "en": [
      "in the DHCP snooping binding table."
    ],
    "ru": [
      "в таблице привязки отслеживания DHCP."
    ]
  },
  {
    "time": [
      1249.509,
      1253.299
    ],
    "en": [
      "That’s because of the ARP ACL we configured."
    ],
    "ru": [
      "Это из-за настроенного нами ARP ACL."
    ]
  },
  {
    "time": [
      1253.299,
      1259.309
    ],
    "en": [
      "Here’s one last show command before we finish, SHOW IP ARP INSPECTION."
    ],
    "ru": [
      "Перед тем, как мы закончим, последняя команда show - SHOW IP ARP INSPECTION."
    ]
  },
  {
    "time": [
      1259.309,
      1264.5
    ],
    "en": [
      "It gives a summary of the DAI configuration as well as statistics about how many ARP messages"
    ],
    "ru": [
      "Он дает сводку конфигурации DAI, а также статистику о том, сколько сообщений ARP"
    ]
  },
  {
    "time": [
      1264.5,
      1267.19
    ],
    "en": [
      "have been forwarded and dropped."
    ],
    "ru": [
      "были переадресованы и сброшены."
    ]
  },
  {
    "time": [
      1267.19,
      1270.95
    ],
    "en": [
      "Let me just point out a few fields, you don’t have to know all of them."
    ],
    "ru": [
      "Позвольте мне выделить несколько полей, вам необязательно знать их все."
    ]
  },
  {
    "time": [
      1270.95,
      1277.679
    ],
    "en": [
      "First, notice that source MAC, destination MAC, and IP address validation are enabled."
    ],
    "ru": [
      "Во-первых, обратите внимание, что включена проверка MAC-адреса источника, MAC-адреса назначения и IP-адреса."
    ]
  },
  {
    "time": [
      1277.679,
      1283.23
    ],
    "en": [
      "I enabled them on SW1 before, but I enabled them on SW2 also."
    ],
    "ru": [
      "Раньше я включал их на SW1, но я также включил их на SW2."
    ]
  },
  {
    "time": [
      1283.23,
      1291.57
    ],
    "en": [
      "Here we can see that DAI is configured and operational in VLAN1, and the ACL ARP-ACL-1 is in effect."
    ],
    "ru": [
      "Здесь мы видим, что DAI настроен и работает в VLAN1, а ACL ARP-ACL-1 действует."
    ]
  },
  {
    "time": [
      1291.57,
      1298.73
    ],
    "en": [
      "is in effect. Now, this is a detail beyond the scope of the CCNA, but notice the static ACL field at the end."
    ],
    "ru": [
      "действует. Это деталь, выходящая за рамки CCNA, но обратите внимание на статическое поле ACL в конце."
    ]
  },
  {
    "time": [
      1298.73,
      1306.149
    ],
    "en": [
      "at the end. If static ACL is set to yes, the implicit deny at the end of the ARP ACL will take effect."
    ],
    "ru": [
      "в конце. Если для статического ACL задано значение «да», неявное отклонение в конце ARP ACL вступит в силу."
    ]
  },
  {
    "time": [
      1306.149,
      1311.83
    ],
    "en": [
      "Like regular IP ACLs, ARP ACLs also have an implicit deny."
    ],
    "ru": [
      "Как и обычные списки контроля доступа IP, списки контроля доступа ARP также имеют неявное отклонение."
    ]
  },
  {
    "time": [
      1311.83,
      1315.85
    ],
    "en": [
      "But if you don’t enable the static setting, the implicit deny will be ignored."
    ],
    "ru": [
      "Но если вы не включите статический параметр, неявное отклонение будет проигнорировано."
    ]
  },
  {
    "time": [
      1315.85,
      1322.35
    ],
    "en": [
      "I didn’t configure it as a static ACL, so in my example the implicit deny is ignored."
    ],
    "ru": [
      "Я не настраивал его как статический ACL, поэтому в моем примере неявный отказ игнорируется."
    ]
  },
  {
    "time": [
      1322.35,
      1325.7
    ],
    "en": [
      "But what will happen if the implicit deny takes effect?"
    ],
    "ru": [
      "Но что произойдет, если неявное отрицание вступит в силу?"
    ]
  },
  {
    "time": [
      1325.7,
      1330.87
    ],
    "en": [
      "It will cause all ARP messages not permitted by the ARP ACL to be denied."
    ],
    "ru": [
      "Это приведет к тому, что все сообщения ARP, не разрешенные ARP ACL, будут отклонены."
    ]
  },
  {
    "time": [
      1330.87,
      1335.47
    ],
    "en": [
      "So, in effect this means that only the ARP ACL will be checked."
    ],
    "ru": [
      "Фактически это означает, что будет проверяться только ARP ACL."
    ]
  },
  {
    "time": [
      1335.47,
      1339.539
    ],
    "en": [
      "The DHCP snooping table will not be checked."
    ],
    "ru": [
      "Таблица отслеживания DHCP не проверяется."
    ]
  },
  {
    "time": [
      1339.539,
      1344.48
    ],
    "en": [
      "Usually we leave this setting as No, and as I said it’s just an interesting detail that’s"
    ],
    "ru": [
      "Обычно мы оставляем для этого параметра значение Нет, и, как я уже сказал, это просто интересная деталь,"
    ]
  },
  {
    "time": [
      1344.48,
      1348.429
    ],
    "en": [
      "beyond the scope of the CCNA, so let’s keep going."
    ],
    "ru": [
      "выходит за рамки CCNA, так что давайте продолжим."
    ]
  },
  {
    "time": [
      1348.429,
      1354.11
    ],
    "en": [
      "Here you can see some statistics about how many ARP messages have been forwarded and dropped."
    ],
    "ru": [
      "Здесь вы можете увидеть некоторую статистику о том, сколько сообщений ARP было перенаправлено и отброшено."
    ]
  },
  {
    "time": [
      1354.11,
      1359.509
    ],
    "en": [
      "dropped. Notice 4 messages have been dropped, and all 4 are DHCP drops."
    ],
    "ru": [
      "упавший. Обратите внимание, что 4 сообщения были отброшены, и все 4 сообщения являются отброшенными DHCP."
    ]
  },
  {
    "time": [
      1359.509,
      1364.691
    ],
    "en": [
      "That means messages dropped because there wasn’t a matching entry in the DHCP snooping table."
    ],
    "ru": [
      "Это означает, что сообщения отброшены из-за отсутствия соответствующей записи в таблице отслеживания DHCP."
    ]
  },
  {
    "time": [
      1364.691,
      1370.139
    ],
    "en": [
      "table. That’s because I tried to ping from SRV1 before configuring the ARP ACL."
    ],
    "ru": [
      "стол. Это потому, что я пытался выполнить эхо-запрос от SRV1 перед настройкой ARP ACL."
    ]
  },
  {
    "time": [
      1370.139,
      1374.25
    ],
    "en": [
      "However, here you can see 1 ACL permit."
    ],
    "ru": [
      "Однако здесь вы можете увидеть 1 разрешение ACL."
    ]
  },
  {
    "time": [
      1374.25,
      1380.13
    ],
    "en": [
      "This is when SW2 permitted SRV1’s ARP message after I configured the ARP ACL."
    ],
    "ru": [
      "Это когда SW2 разрешил сообщение ARP SRV1 после того, как я настроил ARP ACL."
    ]
  },
  {
    "time": [
      1380.13,
      1386.169
    ],
    "en": [
      "SRV1’s ARP request message was permitted and counted here."
    ],
    "ru": [
      "Сообщение с запросом ARP SRV1 было разрешено и засчитано здесь."
    ]
  },
  {
    "time": [
      1386.169,
      1389.759
    ],
    "en": [
      "Here is a summary of the new commands we looked at in this video."
    ],
    "ru": [
      "Вот краткое изложение новых команд, которые мы рассмотрели в этом видео."
    ]
  },
  {
    "time": [
      1389.759,
      1395.19
    ],
    "en": [
      "As always, go back in the video to review if you don’t remember any of these commands."
    ],
    "ru": [
      "Как всегда, вернитесь к видео и проверьте, не помните ли вы какую-либо из этих команд."
    ]
  },
  {
    "time": [
      1395.19,
      1399.429
    ],
    "en": [
      "Also make sure to practice these commands in a lab, for example my packet tracer lab"
    ],
    "ru": [
      "Также не забудьте попрактиковаться в этих командах в лаборатории, например в моей лаборатории трассировщика пакетов."
    ]
  },
  {
    "time": [
      1399.429,
      1401.33
    ],
    "en": [
      "in the next video."
    ],
    "ru": [
      "в следующем видео."
    ]
  },
  {
    "time": [
      1401.33,
      1406.73
    ],
    "en": [
      "Hands-on practice is an essential part of studying for the CCNA."
    ],
    "ru": [
      "Практика - важная часть обучения на CCNA."
    ]
  },
  {
    "time": [
      1406.73,
      1410.33
    ],
    "en": [
      "Before moving on to the quiz, here’s a quick review of what we covered."
    ],
    "ru": [
      "Прежде чем перейти к викторине, сделаем небольшой обзор того, что мы рассмотрели."
    ]
  },
  {
    "time": [
      1410.33,
      1413.1
    ],
    "en": [
      "I introduced what Dynamic ARP Inspection is."
    ],
    "ru": [
      "Я рассказал, что такое Dynamic ARP Inspection."
    ]
  },
  {
    "time": [
      1413.1,
      1419.03
    ],
    "en": [
      "It’s a switch security feature similar to DHCP snooping that inspects ARP messages and"
    ],
    "ru": [
      "Это функция безопасности коммутатора, аналогичная отслеживанию DHCP, которая проверяет сообщения ARP и"
    ]
  },
  {
    "time": [
      1419.03,
      1421.23
    ],
    "en": [
      "then decides to forward or drop the message."
    ],
    "ru": [
      "затем решает переслать или отбросить сообщение."
    ]
  },
  {
    "time": [
      1421.23,
      1427.24
    ],
    "en": [
      "I introduced how it works and what attacks it prevents, primarily ARP poisoning which"
    ],
    "ru": [
      "Я рассказал, как это работает и какие атаки предотвращает, в первую очередь отравление ARP, которое"
    ]
  },
  {
    "time": [
      1427.24,
      1430.44
    ],
    "en": [
      "can be used to perform a man-in-the-middle attack."
    ],
    "ru": [
      "может использоваться для атаки «злоумышленник посередине»."
    ]
  },
  {
    "time": [
      1430.44,
      1436.559
    ],
    "en": [
      "I also showed you how to configure DAI, while covering various details about its operations."
    ],
    "ru": [
      "Я также показал вам, как настроить DAI, затронув при этом различные детали его работы."
    ]
  },
  {
    "time": [
      1436.559,
      1441.809
    ],
    "en": [
      "Honestly, in this video I probably gave you more information about DAI than you need to"
    ],
    "ru": [
      "Честно говоря, в этом видео я, вероятно, дал вам больше информации о DAI, чем вам нужно."
    ]
  },
  {
    "time": [
      1441.809,
      1447.49
    ],
    "en": [
      "know for the CCNA, but I’d rather give you more information than not enough."
    ],
    "ru": [
      "знаю о CCNA, но я скорее дам вам больше информации, чем недостаточно."
    ]
  },
  {
    "time": [
      1447.49,
      1451.649
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
      1451.649,
      1456.419
    ],
    "en": [
      "ExSim for CCNA, my recommended practice exams for the CCNA."
    ],
    "ru": [
      "ExSim для CCNA, мои рекомендуемые практические экзамены для CCNA."
    ]
  },
  {
    "time": [
      1456.419,
      1461.12
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
      1461.12,
      1465.83
    ],
    "en": [
      "You issue the IP ARP INSPECTION VLAN 1 command on SW1."
    ],
    "ru": [
      "Вы вводите команду IP ARP INSPECTION VLAN 1 на SW1."
    ]
  },
  {
    "time": [
      1465.83,
      1470.71
    ],
    "en": [
      "Which of the following statements is true about SW1 after issuing the command?"
    ],
    "ru": [
      "Какое из следующих утверждений относительно SW1 верно после выполнения команды?"
    ]
  },
  {
    "time": [
      1470.71,
      1477.299
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
      1477.299,
      1482.539
    ],
    "en": [
      "The answer is A, all interfaces in VLAN 1 are untrusted."
    ],
    "ru": [
      "Ответ - A, все интерфейсы в VLAN 1 недоверены."
    ]
  },
  {
    "time": [
      1482.539,
      1489.89
    ],
    "en": [
      "Just like in DHCP snooping, when DAI is first enabled all interfaces will be in an untrusted state by default."
    ],
    "ru": [
      "Как и при отслеживании DHCP, при первом включении DAI все интерфейсы по умолчанию будут в ненадежном состоянии."
    ]
  },
  {
    "time": [
      1489.89,
      1494.12
    ],
    "en": [
      "state by default. So, to trust specific ports you’ll have to configure them manually."
    ],
    "ru": [
      "состояние по умолчанию. Итак, чтобы доверять определенным портам, вам придется настраивать их вручную."
    ]
  },
  {
    "time": [
      1494.12,
      1498.279
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
      1498.279,
      1501.309
    ],
    "en": [
      "The following commands are configured on SW1."
    ],
    "ru": [
      "Следующие команды настроены на SW1."
    ]
  },
  {
    "time": [
      1501.309,
      1505.559
    ],
    "en": [
      "Which of the following statements is true after the commands have been issued?"
    ],
    "ru": [
      "Какое из следующих утверждений верно после того, как команды были введены?"
    ]
  },
  {
    "time": [
      1505.559,
      1509.759
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
      1509.759,
      1518.33
    ],
    "en": [
      "Okay, the answer is C, DAI validation is only enabled for destination MAC addresses."
    ],
    "ru": [
      "Хорошо, ответ - C, проверка DAI включена только для MAC-адресов назначения."
    ]
  },
  {
    "time": [
      1518.33,
      1523.429
    ],
    "en": [
      "When configuring these optional DAI validation checks, to configure multiple checks you should"
    ],
    "ru": [
      "При настройке этих дополнительных проверок достоверности DAI, чтобы настроить несколько проверок, вы должны"
    ]
  },
  {
    "time": [
      1523.429,
      1526.009
    ],
    "en": [
      "configure them all in a single command."
    ],
    "ru": [
      "настроить их все с помощью одной команды."
    ]
  },
  {
    "time": [
      1526.009,
      1529.299
    ],
    "en": [
      "Otherwise, only the last command entered will take effect."
    ],
    "ru": [
      "В противном случае вступит в силу только последняя введенная команда."
    ]
  },
  {
    "time": [
      1529.299,
      1534.619
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
      1534.619,
      1539.129
    ],
    "en": [
      "Which of the following are true about DAI rate limiting? (select two)."
    ],
    "ru": [
      "Что из следующего верно относительно ограничения скорости DAI? (выберите два)."
    ]
  },
  {
    "time": [
      1539.129,
      1544.46
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
      1539.129,
      1544.46
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
      1544.46,
      1552.7
    ],
    "en": [
      "Okay, the answers are B, it is enabled on untrusted ports by default, and D, it is enabled"
    ],
    "ru": [
      "Хорошо, ответы: B, он включен на ненадежных портах по умолчанию, и D, он включен"
    ]
  },
  {
    "time": [
      1552.7,
      1556.539
    ],
    "en": [
      "at a rate of 15 packets per second by default."
    ],
    "ru": [
      "по умолчанию со скоростью 15 пакетов в секунду."
    ]
  },
  {
    "time": [
      1556.539,
      1562.99
    ],
    "en": [
      "Unlike DHCP snooping rate limiting, for DAI rate limiting is enabled at a rate of 15 packets"
    ],
    "ru": [
      "В отличие от ограничения скорости отслеживания DHCP, ограничение скорости DAI включено на уровне 15 пакетов."
    ]
  },
  {
    "time": [
      1562.99,
      1567.299
    ],
    "en": [
      "per second on all untrusted ports by default."
    ],
    "ru": [
      "в секунду на всех ненадежных портах по умолчанию."
    ]
  },
  {
    "time": [
      1567.299,
      1573.039
    ],
    "en": [
      "Another difference between DHCP snooping and DAI is that DAI allows you to configure a"
    ],
    "ru": [
      "Еще одно различие между отслеживанием DHCP и DAI заключается в том, что DAI позволяет настраивать"
    ]
  },
  {
    "time": [
      1573.039,
      1579.789
    ],
    "en": [
      "burst interval, so the rate limit can be calculated like 50 packets over three seconds, for example."
    ],
    "ru": [
      "интервал между пакетами, поэтому ограничение скорости можно рассчитать, например, как 50 пакетов за три секунды."
    ]
  },
  {
    "time": [
      1579.789,
      1584.909
    ],
    "en": [
      "DHCP snooping only allows you to configure the packet rate per 1 second."
    ],
    "ru": [
      "Отслеживание DHCP позволяет настраивать только скорость передачи пакетов в 1 секунду."
    ]
  },
  {
    "time": [
      1584.909,
      1588.769
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
      1588.769,
      1594.85
    ],
    "en": [
      "DAI inspects the sender IP and MAC addresses to determine whether an ARP packet should"
    ],
    "ru": [
      "DAI проверяет IP- и MAC-адреса отправителя, чтобы определить, должен ли пакет ARP"
    ]
  },
  {
    "time": [
      1594.85,
      1597.159
    ],
    "en": [
      "be forwarded or dropped."
    ],
    "ru": [
      "быть переадресован или сброшен."
    ]
  },
  {
    "time": [
      1597.159,
      1602.369
    ],
    "en": [
      "Which of the following does it check the sender IP and MAC against? (select two)."
    ],
    "ru": [
      "По какому из перечисленных ниже он проверяет IP-адрес и MAC-адрес отправителя? (выберите два)."
    ]
  },
  {
    "time": [
      1602.369,
      1606.61
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
      1602.369,
      1606.61
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
      1606.61,
      1615.22
    ],
    "en": [
      "Okay, the answers are B, DHCP snooping binding table, and D, ARP ACLs."
    ],
    "ru": [
      "Хорошо, ответы: B, таблица привязки отслеживания DHCP и D, списки управления доступом ARP."
    ]
  },
  {
    "time": [
      1615.22,
      1621.08
    ],
    "en": [
      "When DHCP snooping is enabled, the DHCP snooping binding table is automatically built as hosts"
    ],
    "ru": [
      "Когда отслеживание DHCP включено, таблица привязки отслеживания DHCP автоматически создается как хосты."
    ]
  },
  {
    "time": [
      1621.08,
      1624.509
    ],
    "en": [
      "lease IP addresses from DHCP servers."
    ],
    "ru": [
      "арендовать IP-адреса у DHCP-серверов."
    ]
  },
  {
    "time": [
      1624.509,
      1628.61
    ],
    "en": [
      "So, DAI uses that table to check ARP messages."
    ],
    "ru": [
      "Итак, DAI использует эту таблицу для проверки сообщений ARP."
    ]
  },
  {
    "time": [
      1628.61,
      1635.6
    ],
    "en": [
      "However, for hosts that don’t use DHCP, ARP ACLs can be manually configured to permit their ARP messages."
    ],
    "ru": [
      "Однако для хостов, которые не используют DHCP, списки управления доступом ARP можно настроить вручную, чтобы разрешить их сообщения ARP."
    ]
  },
  {
    "time": [
      1635.6,
      1639.82
    ],
    "en": [
      "their ARP messages. Okay, let’s go to question 5."
    ],
    "ru": [
      "их сообщения ARP. Хорошо, перейдем к вопросу 5."
    ]
  },
  {
    "time": [
      1639.82,
      1646.789
    ],
    "en": [
      "Which of the following commands limit ARP messages to a maximum average of 15 per second? (select two)."
    ],
    "ru": [
      "Какая из следующих команд ограничивает максимальное среднее количество сообщений ARP 15 в секунду? (выберите два)."
    ]
  },
  {
    "time": [
      1646.789,
      1650.82
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
      1646.789,
      1650.82
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
      1650.82,
      1659.95
    ],
    "en": [
      "Okay, the answers are A, IP ARP INSPECTION LIMIT RATE 15 and C, IP ARP INSPECTION LIMIT"
    ],
    "ru": [
      "Хорошо, ответы: A, ПРЕДЕЛ ИНСПЕКЦИИ IP ARP 15 и C, ПРЕДЕЛ ИНСПЕКЦИИ IP ARP."
    ]
  },
  {
    "time": [
      1659.95,
      1663.889
    ],
    "en": [
      "RATE 45 BURST INTERVAL 3."
    ],
    "ru": [
      "ИНТЕРВАЛ СКОРОСТИ 45 3."
    ]
  },
  {
    "time": [
      1663.889,
      1669.529
    ],
    "en": [
      "Both of them will limit ARP messages received on the interface to an average of 15 per second."
    ],
    "ru": [
      "Оба они ограничивают количество сообщений ARP, получаемых на интерфейсе, в среднем до 15 в секунду."
    ]
  },
  {
    "time": [
      1669.529,
      1676.47
    ],
    "en": [
      "However, 45 packets over three seconds allows for short bursts of a higher rate, for example"
    ],
    "ru": [
      "Тем не менее, 45 пакетов за три секунды допускают короткие всплески с более высокой скоростью, например"
    ]
  },
  {
    "time": [
      1676.47,
      1683.32
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
      1676.47,
      1683.32
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
      1683.32,
      1688.919
    ],
    "en": [
      "that. However the 15 packets over 1 second setting monitors each second and strictly makes sure"
    ],
    "ru": [
      "что. Однако настройка 15 пакетов за 1 секунду контролирует каждую секунду и строго следит за тем, чтобы"
    ]
  },
  {
    "time": [
      1688.919,
      1691.1
    ],
    "en": [
      "the rate never goes over 15."
    ],
    "ru": [
      "ставка никогда не превышает 15."
    ]
  },
  {
    "time": [
      1691.1,
      1693.989
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
      1693.989,
      1693.989
    ],
    "en": [
      "Now let’s take a look at a bonus question in Boson Software’s ExSim for CCNA."
    ],
    "ru": [
      "Теперь давайте рассмотрим дополнительный вопрос в ExSim от Boson Software для CCNA."
    ]
  }
]