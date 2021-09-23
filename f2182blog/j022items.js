let objs = [
  {
    "time": [
      1.14,
      3.77
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
      3.77,
      7.439
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
      7.439,
      11.76
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
      11.76,
      18.28
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
      18.28,
      21.099
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
      21.099,
      25.64
    ],
    "en": [
      "This video, unlike the last one, is not going to be practical, meaning that you won’t"
    ],
    "ru": [
      "Это видео, в отличие от предыдущего, не будет практичным, а это значит, что вы не будете"
    ]
  },
  {
    "time": [
      25.64,
      29.439
    ],
    "en": [
      "actually go on and configure a Cisco router or switch."
    ],
    "ru": [
      "на самом деле продолжайте и настройте маршрутизатор или коммутатор Cisco."
    ]
  },
  {
    "time": [
      29.439,
      34.62
    ],
    "en": [
      "Also, most of the information in this video won’t be new, we’ve already covered most"
    ],
    "ru": [
      "Кроме того, большая часть информации в этом видео не будет новой, мы уже рассмотрели большую часть"
    ]
  },
  {
    "time": [
      34.62,
      36.26
    ],
    "en": [
      "of it in previous videos."
    ],
    "ru": [
      "об этом в предыдущих видео."
    ]
  },
  {
    "time": [
      36.26,
      41.87
    ],
    "en": [
      "However, I decided to make this video because I think it’s very important to make sure"
    ],
    "ru": [
      "Однако я решил снять это видео, потому что считаю, что очень важно убедиться, что"
    ]
  },
  {
    "time": [
      41.87,
      48.87
    ],
    "en": [
      "you have a good understanding of the complete process a packet goes through when being sent across networks."
    ],
    "ru": [
      "вы хорошо понимаете весь процесс, через который проходит пакет при передаче по сети."
    ]
  },
  {
    "time": [
      48.87,
      54.399
    ],
    "en": [
      "across networks. Hopefully this video will be a little shorter than the usual ones. Let’s get started."
    ],
    "ru": [
      "по сетям. Надеюсь, это видео будет немного короче обычных. Давайте начнем."
    ]
  },
  {
    "time": [
      54.399,
      57.629
    ],
    "en": [
      "Let’s get started. So, what will we cover in this video?"
    ],
    "ru": [
      "Давайте начнем. Итак, что мы расскажем в этом видео?"
    ]
  },
  {
    "time": [
      57.629,
      63.629
    ],
    "en": [
      "We’ll cover the entire process of sending a packet to a remote destination."
    ],
    "ru": [
      "Мы рассмотрим весь процесс отправки пакета в удаленное место назначения."
    ]
  },
  {
    "time": [
      63.629,
      69.64
    ],
    "en": [
      "This will include things like ARP, encapsulation, de-encapsulation, etc."
    ],
    "ru": [
      "Это будет включать такие вещи, как ARP, инкапсуляция, деинкапсуляция и т. Д."
    ]
  },
  {
    "time": [
      69.64,
      74.94
    ],
    "en": [
      "Of course, there are different levels of depth we can go into when talking about this process,"
    ],
    "ru": [
      "Конечно, есть разные уровни глубины, в которые мы можем войти, когда говорим об этом процессе."
    ]
  },
  {
    "time": [
      74.94,
      81.06
    ],
    "en": [
      "and I won’t give unnecessary details that would only be expected of a CCNP or CCIE,"
    ],
    "ru": [
      "и я не буду сообщать ненужные подробности, которых можно было бы ожидать только от CCNP или CCIE,"
    ]
  },
  {
    "time": [
      81.06,
      87.39
    ],
    "en": [
      "but in this video I hope to give you a solid understanding to get you ready for your CCNA."
    ],
    "ru": [
      "но в этом видео я надеюсь дать вам четкое представление о том, как подготовить вас к CCNA."
    ]
  },
  {
    "time": [
      87.39,
      92.49000000000001
    ],
    "en": [
      "My hope is that this video will help you put all of the pieces together that we learned previously."
    ],
    "ru": [
      "Я надеюсь, что это видео поможет вам соединить воедино все части, которые мы узнали ранее."
    ]
  },
  {
    "time": [
      92.49000000000001,
      99.52000000000001
    ],
    "en": [
      "previously. So, this is the life of a packet, the process a packet goes through when being sent to remote networks."
    ],
    "ru": [
      "ранее. Итак, это срок службы пакета, процесс, через который проходит пакет при отправке в удаленные сети."
    ]
  },
  {
    "time": [
      99.52000000000001,
      104.439
    ],
    "en": [
      "networks. Here’s the network topology we’ll use for this video."
    ],
    "ru": [
      "сети. Вот топология сети, которую мы будем использовать для этого видео."
    ]
  },
  {
    "time": [
      104.439,
      109.31
    ],
    "en": [
      "If you watched day 11’s video, you should recognize this topology, as it’s the same"
    ],
    "ru": [
      "Если вы смотрели видео 11-го дня, вы должны узнать эту топологию, так как она такая же"
    ]
  },
  {
    "time": [
      109.31,
      112.2
    ],
    "en": [
      "one we used to demonstrate static routing."
    ],
    "ru": [
      "тот, который мы использовали для демонстрации статической маршрутизации."
    ]
  },
  {
    "time": [
      112.2,
      125.12
    ],
    "en": [
      "We’ll follow a packet being sent from PC1 in the 192.168.1.0/24 network, to PC4 in the 192.168.4.0/24 network."
    ],
    "ru": [
      "Мы будем следить за пакетом, отправляемым с ПК1 в сети 192.168.1.0/24 на ПК4 в сети 192.168.4.0/24."
    ]
  },
  {
    "time": [
      125.12,
      130.37
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
      125.12,
      130.37
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
      130.37,
      137.37
    ],
    "en": [
      "will follow the same path as in the static routing video, that is from PC1 to R1, R2,"
    ],
    "ru": [
      "будет следовать по тому же пути, что и в видео статической маршрутизации, то есть от ПК1 к R1, R2,"
    ]
  },
  {
    "time": [
      137.37,
      138.72
    ],
    "en": [
      "R4, and then PC4."
    ],
    "ru": [
      "R4, а затем PC4."
    ]
  },
  {
    "time": [
      138.72,
      145.069
    ],
    "en": [
      "This doesn’t have to be the path the packet takes, the path that goes via R3 instead of"
    ],
    "ru": [
      "Это не обязательно должен быть путь, по которому идет пакет, путь, который проходит через R3 вместо"
    ]
  },
  {
    "time": [
      145.069,
      150.19
    ],
    "en": [
      "R2 is valid too, but we’ll stick to the same path as last time."
    ],
    "ru": [
      "R2 тоже действителен, но мы будем придерживаться того же пути, что и в прошлый раз."
    ]
  },
  {
    "time": [
      150.19,
      156.93
    ],
    "en": [
      "Now, since we’re not just looking at Layer 3 in this video, let me add MAC addresses for these devices."
    ],
    "ru": [
      "Теперь, поскольку в этом видео мы рассматриваем не только уровень 3, позвольте мне добавить MAC-адреса для этих устройств."
    ]
  },
  {
    "time": [
      156.93,
      160.4
    ],
    "en": [
      "for these devices. I’ll use 1111 for PC1."
    ],
    "ru": [
      "для этих устройств. Я буду использовать 1111 для ПК1."
    ]
  },
  {
    "time": [
      160.4,
      166.31900000000002
    ],
    "en": [
      "Now, as you know a MAC address is actually 12 hexadecimal characters, but just to save"
    ],
    "ru": [
      "Теперь, как вы знаете, MAC-адрес на самом деле состоит из 12 шестнадцатеричных символов, но просто для экономии"
    ]
  },
  {
    "time": [
      166.31900000000002,
      169.3
    ],
    "en": [
      "space I’ll shorten them to 4."
    ],
    "ru": [
      "пробел сокращу до 4."
    ]
  },
  {
    "time": [
      169.3,
      178.5
    ],
    "en": [
      "R1’s G0/2 interface has a mac address of AAAA, and it’s G0/0 interface has a MAC address of BBBB."
    ],
    "ru": [
      "Интерфейс G0 / 2 маршрутизатора R1 имеет MAC-адрес AAAA, а интерфейс G0 / 0 имеет MAC-адрес BBBB."
    ]
  },
  {
    "time": [
      178.5,
      186.549
    ],
    "en": [
      "address of BBBB. That’s something I didn’t mention before, each interface on a network device has a unique MAC address."
    ],
    "ru": [
      "адрес BBBB. Я об этом раньше не упоминал: каждый интерфейс сетевого устройства имеет уникальный MAC-адрес."
    ]
  },
  {
    "time": [
      186.549,
      191.871
    ],
    "en": [
      "MAC address. Note that SW1’s interfaces also have MAC addresses, however for this video it’s not"
    ],
    "ru": [
      "MAC-адрес. Обратите внимание, что интерфейсы SW1 также имеют MAC-адреса, однако в этом видео это не так."
    ]
  },
  {
    "time": [
      191.871,
      196.68
    ],
    "en": [
      "necessary to know the MAC addresses of the switches so to avoid clutter, I’ll leave"
    ],
    "ru": [
      "необходимо знать MAC-адреса коммутаторов, чтобы избежать беспорядка, я оставлю"
    ]
  },
  {
    "time": [
      196.68,
      198.7
    ],
    "en": [
      "them out of this diagram."
    ],
    "ru": [
      "их из этой диаграммы."
    ]
  },
  {
    "time": [
      198.7,
      209.04
    ],
    "en": [
      "R2 has a MAC address of CCCC on its g0/0 interface, and DDDD on its G0/1 interface."
    ],
    "ru": [
      "У R2 есть MAC-адресCCCC на его интерфейсе g0 / 0 и DDDD на его интерфейсе G0 / 1."
    ]
  },
  {
    "time": [
      209.04,
      218.32999999999998
    ],
    "en": [
      "R4 has a MAC address of EEEE on its G0/1 interface and FFFE on its G0/2 interface."
    ],
    "ru": [
      "R4 имеет MAC-адрес EEEE на своем интерфейсе G0 / 1 и FFFE на своем интерфейсе G0 / 2."
    ]
  },
  {
    "time": [
      218.32999999999998,
      228.92000000000002
    ],
    "en": [
      "I didn’t make it all Fs, because the MAC address of FFFF.FFFF.FFFF, 12 Fs, is the broadcast"
    ],
    "ru": [
      "Я не сделал это все Fs, потому что MAC-адрес FFFF.FFFF.FFFF, 12 Fs, является широковещательным"
    ]
  },
  {
    "time": [
      228.92000000000002,
      234.64
    ],
    "en": [
      "MAC address, so just to avoid confusion I added that E on the end."
    ],
    "ru": [
      "MAC-адрес, поэтому, чтобы избежать путаницы, я добавил букву E в конце."
    ]
  },
  {
    "time": [
      234.64,
      238.87
    ],
    "en": [
      "Finally, PC4 has a MAC address of 4444."
    ],
    "ru": [
      "Наконец, у ПК4 есть MAC-адрес 4444."
    ]
  },
  {
    "time": [
      238.87,
      247.579
    ],
    "en": [
      "Okay, so PC1 wants to send some data to PC4, and its encapsulated in this IP header."
    ],
    "ru": [
      "Итак, ПК1 хочет отправить некоторые данные на ПК4, и они инкапсулируются в этот заголовок IP."
    ]
  },
  {
    "time": [
      247.579,
      258.67
    ],
    "en": [
      "The source is 192.168.1.1, PC1’s IP address, and the destination is 192.168.4.1, PC4’s IP address."
    ],
    "ru": [
      "Источник - 192.168.1.1, IP-адрес ПК1, а место назначения - 192.168.4.1, IP-адрес ПК4."
    ]
  },
  {
    "time": [
      258.67,
      266.52
    ],
    "en": [
      "IP address. Now, because PC1’s IP address is in the 192.168.1.0/24 network, it notices that the"
    ],
    "ru": [
      "Айпи адрес. Теперь, поскольку IP-адрес ПК1 находится в сети 192.168.1.0/24, он замечает, что"
    ]
  },
  {
    "time": [
      266.52,
      273.57
    ],
    "en": [
      "address 192.168.4.1 is in a different network, so it knows that it needs to send the packet"
    ],
    "ru": [
      "адрес 192.168.4.1 находится в другой сети, поэтому он знает, что ему нужно отправить пакет"
    ]
  },
  {
    "time": [
      273.57,
      278.77
    ],
    "en": [
      "to its default gateway, which is R1, something we have already preconfigured."
    ],
    "ru": [
      "на свой шлюз по умолчанию, которым является R1, что мы уже предварительно настроили."
    ]
  },
  {
    "time": [
      278.77,
      285.76
    ],
    "en": [
      "However, in this example PC1 has not sent any traffic yet, so it needs to use ARP, the"
    ],
    "ru": [
      "Однако в этом примере ПК1 еще не отправил трафик, поэтому ему необходимо использовать ARP,"
    ]
  },
  {
    "time": [
      285.76,
      289.63
    ],
    "en": [
      "address resolution protocol, something we covered in a previous video."
    ],
    "ru": [
      "протокол разрешения адресов, который мы рассмотрели в предыдущем видео."
    ]
  },
  {
    "time": [
      289.63,
      294.06
    ],
    "en": [
      "Let’s look at the ARP process once more."
    ],
    "ru": [
      "Давайте еще раз посмотрим на процесс ARP."
    ]
  },
  {
    "time": [
      294.06,
      297.73
    ],
    "en": [
      "So PC1 makes this ARP request packet."
    ],
    "ru": [
      "Итак, ПК1 создает этот пакет запроса ARP."
    ]
  },
  {
    "time": [
      297.73,
      304.65
    ],
    "en": [
      "The source IP is its own IP address and then destination is R1’s G0/2 interface, which"
    ],
    "ru": [
      "Исходный IP-адрес - это его собственный IP-адрес, а затем назначение - это интерфейс G0 / 2 маршрутизатора R1, который"
    ]
  },
  {
    "time": [
      304.65,
      308.63
    ],
    "en": [
      "is the default gateway configured on PC1."
    ],
    "ru": [
      "- шлюз по умолчанию, настроенный на ПК1."
    ]
  },
  {
    "time": [
      308.63,
      311.14
    ],
    "en": [
      "Next is the MAC addresses."
    ],
    "ru": [
      "Далее идут MAC-адреса."
    ]
  },
  {
    "time": [
      311.14,
      316.77
    ],
    "en": [
      "This is a minor point, but note that I put the source IP before the destination IP, but"
    ],
    "ru": [
      "Это второстепенный момент, но обратите внимание, что я помещаю исходный IP-адрес перед IP-адресом назначения, но"
    ]
  },
  {
    "time": [
      316.77,
      319.72
    ],
    "en": [
      "the destination MAC before the source MAC."
    ],
    "ru": [
      "MAC-адрес назначения перед MAC-адресом источника."
    ]
  },
  {
    "time": [
      319.72,
      326.48
    ],
    "en": [
      "That’s because, in the IPv4 header the source IP address comes first, but in the ethernet"
    ],
    "ru": [
      "Это потому, что в заголовке IPv4 сначала идет исходный IP-адрес, а в Ethernet"
    ]
  },
  {
    "time": [
      326.48,
      329.69
    ],
    "en": [
      "header the destination MAC address comes first."
    ],
    "ru": [
      "заголовок MAC-адрес назначения идет первым."
    ]
  },
  {
    "time": [
      329.69,
      332.76
    ],
    "en": [
      "Anyway, just a minor point."
    ],
    "ru": [
      "Во всяком случае, мелочь."
    ]
  },
  {
    "time": [
      332.76,
      338.1
    ],
    "en": [
      "The destination MAC address is the broadcast MAC address of all Fs, because it"
    ],
    "ru": [
      "MAC-адрес назначения - это широковещательный MAC-адрес всех F, потому что он"
    ]
  },
  {
    "time": [
      338.1,
      344.37
    ],
    "en": [
      "doesn’t know the MAC address of R1, so it will send the frame to all hosts on the network."
    ],
    "ru": [
      "не знает MAC-адрес маршрутизатора R1, поэтому он отправит фрейм всем хостам в сети."
    ]
  },
  {
    "time": [
      344.37,
      347.94
    ],
    "en": [
      "Finally the source MAC address is its own MAC address."
    ],
    "ru": [
      "Наконец, MAC-адрес источника - это его собственный MAC-адрес."
    ]
  },
  {
    "time": [
      347.94,
      354.68
    ],
    "en": [
      "So, it sends the frame, which SW1 receives and broadcasts out of all its interfaces"
    ],
    "ru": [
      "Итак, он отправляет фрейм, который SW1 получает и транслирует со всех своих интерфейсов."
    ]
  },
  {
    "time": [
      354.68,
      357.94
    ],
    "en": [
      "except the one it received the frame on."
    ],
    "ru": [
      "кроме той, на которой он получил рамку."
    ]
  },
  {
    "time": [
      357.94,
      364.38
    ],
    "en": [
      "In this example, only PC1 and R1 are connected to SW1, so that means that SW1 will forward"
    ],
    "ru": [
      "В этом примере только ПК1 и R1 подключены к SW1, поэтому это означает, что SW1 будет пересылать"
    ]
  },
  {
    "time": [
      364.38,
      367.97
    ],
    "en": [
      "the frame out of it’s G0/0 interface."
    ],
    "ru": [
      "кадр вне интерфейса G0 / 0."
    ]
  },
  {
    "time": [
      367.97,
      374.94
    ],
    "en": [
      "To translate the meaning of this frame into English, PC1 is saying ‘Hi 192.168.1.254."
    ],
    "ru": [
      "Чтобы перевести значение этого кадра на английский язык, ПК1 говорит: «Привет, 192.168.1.254."
    ]
  },
  {
    "time": [
      374.94,
      378.44
    ],
    "en": [
      "What’s your MAC address?’."
    ],
    "ru": [
      "Какой у вас MAC-адрес? »."
    ]
  },
  {
    "time": [
      378.44,
      382.57
    ],
    "en": [
      "Although I’m not going to really talk about the switches much in this video, note that"
    ],
    "ru": [
      "Хотя я не собираюсь много говорить о переключателях в этом видео, обратите внимание, что"
    ]
  },
  {
    "time": [
      382.57,
      391.12
    ],
    "en": [
      "SW1 learns PC1’s MAC address on its G0/1 interface when the frame arrives on its G0/1 interface."
    ],
    "ru": [
      "SW1 узнает MAC-адрес ПК1 на своем интерфейсе G0 / 1, когда фрейм прибывает на его интерфейс G0 / 1."
    ]
  },
  {
    "time": [
      391.12,
      396.71
    ],
    "en": [
      "interface. When this broadcast frame arrives on R1, it notices that the destination IP is its own"
    ],
    "ru": [
      "интерфейс. Когда этот широковещательный кадр прибывает на R1, он замечает, что IP-адрес назначения является его собственным."
    ]
  },
  {
    "time": [
      396.71,
      402.83
    ],
    "en": [
      "IP, so it creates this ARP reply frame to send back to PC1."
    ],
    "ru": [
      "IP, поэтому он создает этот кадр ответа ARP для отправки обратно на ПК1."
    ]
  },
  {
    "time": [
      402.83,
      409.25
    ],
    "en": [
      "Although the ARP request message was broadcast, because R1 learned PC1’s IP and MAC addresses"
    ],
    "ru": [
      "Хотя сообщение с запросом ARP было широковещательным, поскольку R1 узнал IP и MAC-адреса ПК1"
    ]
  },
  {
    "time": [
      409.25,
      415.47
    ],
    "en": [
      "from the ARP request message, the ARP reply can be sent unicast directly to PC1."
    ],
    "ru": [
      "из сообщения запроса ARP ответ ARP может быть одноадресно отправлен непосредственно на ПК1."
    ]
  },
  {
    "time": [
      415.47,
      418.57
    ],
    "en": [
      "So, that’s what R1 does."
    ],
    "ru": [
      "Итак, это то, что делает R1."
    ]
  },
  {
    "time": [
      418.57,
      429.69
    ],
    "en": [
      "To translate this ARP reply message into english, basically it means Hi 192.168.1.1 This is 192.168.1.254."
    ],
    "ru": [
      "Чтобы перевести это сообщение ответа ARP на английский, в основном это означает Hi 192.168.1.1 Это 192.168.1.254."
    ]
  },
  {
    "time": [
      429.69,
      433.27
    ],
    "en": [
      "My MAC address is aaaa."
    ],
    "ru": [
      "Мой MAC-адрес - aaaa."
    ]
  },
  {
    "time": [
      433.27,
      437.68
    ],
    "en": [
      "Note that SW1 will learn R1’s MAC address from this message, when the frame arrives"
    ],
    "ru": [
      "Обратите внимание, что SW1 узнает MAC-адрес маршрутизатора R1 из этого сообщения при получении кадра."
    ]
  },
  {
    "time": [
      437.68,
      440.08
    ],
    "en": [
      "on its G0/0 interface."
    ],
    "ru": [
      "на его интерфейсе G0 / 0."
    ]
  },
  {
    "time": [
      440.08,
      448.24
    ],
    "en": [
      "So, now PC1 knows the MAC address of its default gateway, so it encapsulates the packet with this ethernet header."
    ],
    "ru": [
      "Итак, теперь ПК1 знает MAC-адрес своего шлюза по умолчанию, поэтому он инкапсулирует пакет с этим заголовком Ethernet."
    ]
  },
  {
    "time": [
      448.24,
      455.27
    ],
    "en": [
      "this ethernet header. Keep in mind, the original packet is not changed, the destination address remains PC4’s IP"
    ],
    "ru": [
      "этот заголовок Ethernet. Имейте в виду, что исходный пакет не изменяется, адресом назначения остается IP-адрес ПК4."
    ]
  },
  {
    "time": [
      455.27,
      458.83
    ],
    "en": [
      "address, NOT R1’s IP address."
    ],
    "ru": [
      "адрес, а НЕ IP-адрес маршрутизатора R1."
    ]
  },
  {
    "time": [
      458.83,
      463.25
    ],
    "en": [
      "Only at Layer 2 is the destination set to R1’s MAC address."
    ],
    "ru": [
      "Только на уровне 2 в качестве пункта назначения устанавливается MAC-адрес маршрутизатора R1."
    ]
  },
  {
    "time": [
      463.25,
      466.47
    ],
    "en": [
      "So, it sends the frame to R1."
    ],
    "ru": [
      "Итак, он отправляет кадр R1."
    ]
  },
  {
    "time": [
      466.47,
      471.22
    ],
    "en": [
      "R1 receives it, and removes the ethernet header."
    ],
    "ru": [
      "R1 получает его и удаляет заголовок Ethernet."
    ]
  },
  {
    "time": [
      471.22,
      474.25
    ],
    "en": [
      "It looks up the destination in its routing table."
    ],
    "ru": [
      "Он ищет пункт назначения в своей таблице маршрутизации."
    ]
  },
  {
    "time": [
      474.25,
      481.07
    ],
    "en": [
      "The most specific match is this entry for the 192.168.4.0/24 network, which specifies"
    ],
    "ru": [
      "Наиболее точным совпадением является эта запись для сети 192.168.4.0/24, которая указывает"
    ]
  },
  {
    "time": [
      481.07,
      485.36
    ],
    "en": [
      "a next hop of 192.168.12.2."
    ],
    "ru": [
      "следующий переход 192.168.12.2."
    ]
  },
  {
    "time": [
      485.36,
      491.24
    ],
    "en": [
      "So, R1 will have to encapsulate this packet with an Ethernet frame with the appropriate"
    ],
    "ru": [
      "Таким образом, R1 должен будет инкапсулировать этот пакет с кадром Ethernet с соответствующим"
    ]
  },
  {
    "time": [
      491.24,
      495.7
    ],
    "en": [
      "MAC address for 192.168.12.2."
    ],
    "ru": [
      "MAC-адрес для 192.168.12.2."
    ]
  },
  {
    "time": [
      495.7,
      500.31
    ],
    "en": [
      "However, R1 doesn’t know R2’s MAC address yet. So,"
    ],
    "ru": [
      "Однако R1 еще не знает MAC-адрес R2. Так,"
    ]
  },
  {
    "time": [
      500.31,
      503.87
    ],
    "en": [
      "how will it learn R2’s MAC address?"
    ],
    "ru": [
      "как он узнает MAC-адрес R2?"
    ]
  },
  {
    "time": [
      503.87,
      506.2
    ],
    "en": [
      "It will use ARP, of course."
    ],
    "ru": [
      "Конечно, он будет использовать ARP."
    ]
  },
  {
    "time": [
      506.2,
      513.06
    ],
    "en": [
      "The source IP address of this ARP request will be R1’s, and the destination will be R2’s."
    ],
    "ru": [
      "Исходным IP-адресом этого ARP-запроса будет R1, а получателем - R2."
    ]
  },
  {
    "time": [
      513.06,
      518.97
    ],
    "en": [
      "R2’s. The destination MAC address is all Fs, the broadcast MAC address, because R1 doesn’t"
    ],
    "ru": [
      "R2. MAC-адрес назначения - это все Fs, широковещательный MAC-адрес, потому что R1 не"
    ]
  },
  {
    "time": [
      518.97,
      527.41
    ],
    "en": [
      "know R2’s MAC address, and the source is bbbb, which is the MAC address of R1’s G0/0 interface."
    ],
    "ru": [
      "знать MAC-адрес R2, а источником является bbbb, который является MAC-адресом интерфейса G0 / 0 маршрутизатора R1."
    ]
  },
  {
    "time": [
      527.41,
      531.8
    ],
    "en": [
      "interface. So, it sends the arp request, and R2 receives it."
    ],
    "ru": [
      "интерфейс. Итак, он отправляет запрос arp, а R2 его получает."
    ]
  },
  {
    "time": [
      531.8,
      539.83
    ],
    "en": [
      "Basically, what this ARP request says is Hi 192.168.12.2, what’s your MAC address?"
    ],
    "ru": [
      "По сути, в этом ARP-запросе указано Hi 192.168.12.2, какой у вас MAC-адрес?"
    ]
  },
  {
    "time": [
      539.83,
      547.21
    ],
    "en": [
      "R2 receives the broadcast, and since the destination IP address matches its own IP address, it"
    ],
    "ru": [
      "R2 принимает широковещательную рассылку, и, поскольку IP-адрес назначения совпадает с его собственным IP-адресом, он"
    ]
  },
  {
    "time": [
      547.21,
      551.05
    ],
    "en": [
      "makes this ARP reply to send to R1."
    ],
    "ru": [
      "заставляет этот ARP-ответ отправить R1."
    ]
  },
  {
    "time": [
      551.05,
      556.21
    ],
    "en": [
      "Once again, because it learned the IP and MAC addresses of R1 from the ARP request,"
    ],
    "ru": [
      "Еще раз, поскольку он узнал IP и MAC-адреса маршрутизатора R1 из запроса ARP,"
    ]
  },
  {
    "time": [
      556.21,
      558.44
    ],
    "en": [
      "it doesn’t have to broadcast the frame."
    ],
    "ru": [
      "он не должен транслировать кадр."
    ]
  },
  {
    "time": [
      558.44,
      569.25
    ],
    "en": [
      "So, it sends this ARP reply back, which basically says hi 192.168.12.1, this is 192.168.12.2."
    ],
    "ru": [
      "Итак, он отправляет этот ответ ARP обратно, который в основном говорит: привет 192.168.12.1, это 192.168.12.2."
    ]
  },
  {
    "time": [
      569.25,
      572.2
    ],
    "en": [
      "My MAC address is cccc."
    ],
    "ru": [
      "Мой MAC-адрес cccc."
    ]
  },
  {
    "time": [
      572.2,
      578.5
    ],
    "en": [
      "Okay, now R1 knows R2’s MAC address, so it can encapsulate the packet with an Ethernet"
    ],
    "ru": [
      "Хорошо, теперь R1 знает MAC-адрес R2, поэтому он может инкапсулировать пакет с помощью Ethernet."
    ]
  },
  {
    "time": [
      578.5,
      584.0
    ],
    "en": [
      "header, inserting R2’s MAC address in the destination field, and the MAC address of"
    ],
    "ru": [
      "заголовок, вставив MAC-адрес R2 в поле назначения и MAC-адрес"
    ]
  },
  {
    "time": [
      584.0,
      590.62
    ],
    "en": [
      "R1’s G0/0 interface in the source field, and it sends it to R2."
    ],
    "ru": [
      "Интерфейс G0 / 0 маршрутизатора R1 в поле источника и отправляет его на маршрутизатор R2."
    ]
  },
  {
    "time": [
      590.62,
      594.23
    ],
    "en": [
      "After receiving the frame, R2 removes the Ethernet header."
    ],
    "ru": [
      "После получения кадра R2 удаляет заголовок Ethernet."
    ]
  },
  {
    "time": [
      594.23,
      599.67
    ],
    "en": [
      "R2 then looks up the destination IP address in its routing table, and the most specific"
    ],
    "ru": [
      "Затем R2 ищет IP-адрес назначения в своей таблице маршрутизации и наиболее точный"
    ]
  },
  {
    "time": [
      599.67,
      610.08
    ],
    "en": [
      "match is this one for 192.168.4.0/24, with a next hop of 192.168.24.4."
    ],
    "ru": [
      "совпадение это для 192.168.4.0/24 со следующим переходом 192.168.24.4."
    ]
  },
  {
    "time": [
      610.08,
      618.68
    ],
    "en": [
      "Although 192.168.24.0/24 is a connected network to R2, it doesn’t know the MAC address of R4."
    ],
    "ru": [
      "Хотя 192.168.24.0/24 является сетью, подключенной к R2, ему неизвестен MAC-адрес R4."
    ]
  },
  {
    "time": [
      618.68,
      621.25
    ],
    "en": [
      "R4. So, you know what’s next."
    ],
    "ru": [
      "R4. Итак, вы знаете, что дальше."
    ]
  },
  {
    "time": [
      621.25,
      625.67
    ],
    "en": [
      "R2 will use ARP to discover R4’s MAC address."
    ],
    "ru": [
      "R2 будет использовать ARP для обнаружения MAC-адреса маршрутизатора R4."
    ]
  },
  {
    "time": [
      625.67,
      631.92
    ],
    "en": [
      "R2 prepares this ARP request frame, using its own IP and MAC addresses for the source,"
    ],
    "ru": [
      "R2 подготавливает этот кадр запроса ARP, используя свои IP и MAC-адреса для источника,"
    ]
  },
  {
    "time": [
      631.92,
      637.99
    ],
    "en": [
      "R4’s IP address as the destination, and the broadcast MAC address, and it forwards"
    ],
    "ru": [
      "IP-адрес R4 в качестве пункта назначения и широковещательный MAC-адрес, и он пересылает"
    ]
  },
  {
    "time": [
      637.99,
      641.42
    ],
    "en": [
      "it out of its G0/1 interface."
    ],
    "ru": [
      "это вне его интерфейса G0 / 1."
    ]
  },
  {
    "time": [
      641.42,
      647.14
    ],
    "en": [
      "With this ARP request, R2 is saying ‘Hi 192.168.24.4."
    ],
    "ru": [
      "В этом ARP-запросе R2 говорит «Привет, 192.168.24.4."
    ]
  },
  {
    "time": [
      647.14,
      649.52
    ],
    "en": [
      "What’s your MAC address?’"
    ],
    "ru": [
      "Какой у вас MAC-адрес? »"
    ]
  },
  {
    "time": [
      649.52,
      656.63
    ],
    "en": [
      "R4 receives the broadcast, and since the destination IP address is its own it creates this ARP"
    ],
    "ru": [
      "R4 принимает широковещательную рассылку, и, поскольку IP-адрес назначения является его собственным, он создает этот ARP"
    ]
  },
  {
    "time": [
      656.63,
      662.94
    ],
    "en": [
      "reply frame to send back to R2, once again it already knows R2’s IP and MAC addresses"
    ],
    "ru": [
      "кадр ответа для отправки обратно на R2, опять же, он уже знает IP и MAC-адреса R2"
    ]
  },
  {
    "time": [
      662.94,
      667.49
    ],
    "en": [
      "because they were used as the source addresses for the ARP request."
    ],
    "ru": [
      "потому что они использовались в качестве исходных адресов для запроса ARP."
    ]
  },
  {
    "time": [
      667.49,
      670.81
    ],
    "en": [
      "It sends the unicast frame back to R2."
    ],
    "ru": [
      "Он отправляет одноадресный кадр обратно на R2."
    ]
  },
  {
    "time": [
      670.81,
      680.24
    ],
    "en": [
      "With this ARP reply, R4 is saying ‘Hi 192.168.24.2. This is 192.168.24.4."
    ],
    "ru": [
      "В этом ARP-ответе R4 говорит: «Привет, 192.168.24.2. Это 192.168.24.4."
    ]
  },
  {
    "time": [
      680.24,
      684.84
    ],
    "en": [
      "This is 192.168.24.4. My MAC address is eeee.’"
    ],
    "ru": [
      "Это 192.168.24.4. Мой MAC-адрес eeee. \""
    ]
  },
  {
    "time": [
      684.84,
      691.62
    ],
    "en": [
      "Now that R2 knows R4’s MAC address, it encapsulates PC1’s packet with an Ethernet header, with"
    ],
    "ru": [
      "Теперь, когда R2 знает MAC-адрес R4, он инкапсулирует пакет ПК1 с заголовком Ethernet с"
    ]
  },
  {
    "time": [
      691.62,
      698.91
    ],
    "en": [
      "a destination MAC address of eeee, which is R4’s g0/1 interface, and a source MAC address"
    ],
    "ru": [
      "MAC-адрес назначения eeee, который является интерфейсом g0 / 1 маршрутизатора R4, и MAC-адрес источника"
    ]
  },
  {
    "time": [
      698.91,
      704.21
    ],
    "en": [
      "of dddd, which is R2’s g0/1 interface."
    ],
    "ru": [
      "dddd, который представляет собой интерфейс R2 g0 / 1."
    ]
  },
  {
    "time": [
      704.21,
      708.88
    ],
    "en": [
      "R4 receives the frame and removes the Ethernet header."
    ],
    "ru": [
      "R4 получает кадр и удаляет заголовок Ethernet."
    ]
  },
  {
    "time": [
      708.88,
      715.44
    ],
    "en": [
      "It looks up 192.168.4.1 in its routing table, and the most specific match is this entry"
    ],
    "ru": [
      "Он ищет 192.168.4.1 в своей таблице маршрутизации, и наиболее точным совпадением является эта запись"
    ]
  },
  {
    "time": [
      715.44,
      722.95
    ],
    "en": [
      "for 192.168.4.0/24, which is directly connected via the G0/2 interface."
    ],
    "ru": [
      "для 192.168.4.0/24, который напрямую подключается через интерфейс G0 / 2."
    ]
  },
  {
    "time": [
      722.95,
      730.3
    ],
    "en": [
      "But, once again R4 doesn’t know PC4’s MAC address yet, so you know what it has to do next."
    ],
    "ru": [
      "Но, опять же, R4 еще не знает MAC-адрес PC4, поэтому вы знаете, что ему делать дальше."
    ]
  },
  {
    "time": [
      730.3,
      734.08
    ],
    "en": [
      "do next. It will use ARP to learn PC4’s MAC address."
    ],
    "ru": [
      "делать дальше. Он будет использовать ARP, чтобы узнать MAC-адрес ПК4."
    ]
  },
  {
    "time": [
      734.08,
      740.22
    ],
    "en": [
      "It prepares this ARP request frame, again the source IP and MAC addresses are its own,"
    ],
    "ru": [
      "Он подготавливает этот кадр запроса ARP, опять же, исходный IP-адрес и MAC-адреса являются его собственными,"
    ]
  },
  {
    "time": [
      740.22,
      748.34
    ],
    "en": [
      "the destination IP address is PC4’s, and the destination MAC is the broadcast MAC address of all F’s."
    ],
    "ru": [
      "IP-адрес назначения - это ПК4, а MAC-адрес назначения - широковещательный MAC-адрес всех F."
    ]
  },
  {
    "time": [
      748.34,
      757.5
    ],
    "en": [
      "of all F’s. It sends this message out of its G0/2 interface, saying Hi 192.168.4.1, what’s your MAC address?"
    ],
    "ru": [
      "всех F. Он отправляет это сообщение из своего интерфейса G0 / 2, говоря: \"Привет, 192.168.4.1, какой у вас MAC-адрес?\""
    ]
  },
  {
    "time": [
      757.5,
      763.31
    ],
    "en": [
      "Note that SW4 will learn R4’s MAC address on its g0/0 interface from the source MAC"
    ],
    "ru": [
      "Обратите внимание, что SW4 узнает MAC-адрес маршрутизатора R4 на своем интерфейсе g0 / 0 из исходного MAC-адреса."
    ]
  },
  {
    "time": [
      763.31,
      766.57
    ],
    "en": [
      "address field of this ethernet frame."
    ],
    "ru": [
      "адресное поле этого кадра Ethernet."
    ]
  },
  {
    "time": [
      766.57,
      771.84
    ],
    "en": [
      "After PC4 receives the frame, it checks the destination IP address."
    ],
    "ru": [
      "После получения кадра ПК4 проверяет IP-адрес назначения."
    ]
  },
  {
    "time": [
      771.84,
      776.72
    ],
    "en": [
      "Since it is its own IP address, it will send an ARP reply."
    ],
    "ru": [
      "Поскольку это его собственный IP-адрес, он отправит ответ ARP."
    ]
  },
  {
    "time": [
      776.72,
      782.79
    ],
    "en": [
      "The ARP reply will be unicast, using PC4’s IP and MAC addresses for the source and R4’s"
    ],
    "ru": [
      "Ответ ARP будет одноадресным с использованием IP- и MAC-адресов ПК4 для источника и маршрутизатора R4."
    ]
  },
  {
    "time": [
      782.79,
      786.39
    ],
    "en": [
      "IP and MAC addresses for the destination."
    ],
    "ru": [
      "IP и MAC-адреса назначения."
    ]
  },
  {
    "time": [
      786.39,
      796.26
    ],
    "en": [
      "It sends the frame out of its network interface, saying ‘Hi 192.168.4.254. This is 192.168.4.1."
    ],
    "ru": [
      "Он отправляет кадр из своего сетевого интерфейса, говоря: «Привет, 192.168.4.254. Это 192.168.4.1."
    ]
  },
  {
    "time": [
      796.26,
      800.11
    ],
    "en": [
      "This is 192.168.4.1. My MAC address is 4444.’"
    ],
    "ru": [
      "Это 192.168.4.1. Мой MAC-адрес - 4444 »."
    ]
  },
  {
    "time": [
      800.11,
      807.41
    ],
    "en": [
      "Note that SW4 learns PC4’s MAC address when it arrives on its G0/1 interface."
    ],
    "ru": [
      "Обратите внимание, что SW4 изучает MAC-адрес ПК4, когда он поступает на его интерфейс G0 / 1."
    ]
  },
  {
    "time": [
      807.41,
      812.64
    ],
    "en": [
      "Now that R4 knows PC4’s MAC address, it adds an ethernet header to the packet, using"
    ],
    "ru": [
      "Теперь, когда R4 знает MAC-адрес ПК4, он добавляет к пакету заголовок Ethernet, используя"
    ]
  },
  {
    "time": [
      812.64,
      820.45
    ],
    "en": [
      "its own MAC address on the G0/2 interface as the source address, and PC4’s MAC address as the destination."
    ],
    "ru": [
      "свой собственный MAC-адрес на интерфейсе G0 / 2 в качестве адреса источника и MAC-адрес ПК4 в качестве адреса назначения."
    ]
  },
  {
    "time": [
      820.45,
      827.31
    ],
    "en": [
      "as the destination. R4 sends the frame to PC4, and finally it has reached its destination."
    ],
    "ru": [
      "как пункт назначения. R4 отправляет кадр на ПК4, и, наконец, он достигает места назначения."
    ]
  },
  {
    "time": [
      827.31,
      830.92
    ],
    "en": [
      "Notice that the original packet hasn’t changed throughout the process."
    ],
    "ru": [
      "Обратите внимание, что исходный пакет не изменился на протяжении всего процесса."
    ]
  },
  {
    "time": [
      830.92,
      839.0
    ],
    "en": [
      "It’s always used the same IP header with a source IP address of 192.168.1.1 and a destination"
    ],
    "ru": [
      "Всегда используется один и тот же заголовок IP с исходным IP-адресом 192.168.1.1 и получателем."
    ]
  },
  {
    "time": [
      839.0,
      843.73
    ],
    "en": [
      "IP address of 192.168.4.1."
    ],
    "ru": [
      "IP-адрес 192.168.4.1."
    ]
  },
  {
    "time": [
      843.73,
      848.63
    ],
    "en": [
      "Also notice that the switches didn’t actually modify the frames at any point."
    ],
    "ru": [
      "Также обратите внимание, что переключатели фактически не изменяли кадры в любой момент."
    ]
  },
  {
    "time": [
      848.63,
      853.68
    ],
    "en": [
      "The switches forwarded the frames and learned the MAC addresses, but they don’t actually"
    ],
    "ru": [
      "Коммутаторы пересылали кадры и запоминали MAC-адреса, но на самом деле они не"
    ]
  },
  {
    "time": [
      853.68,
      858.36
    ],
    "en": [
      "de-encapsulate and then re-encapsulate the packet with a new ethernet header."
    ],
    "ru": [
      "деинкапсулировать, а затем повторно инкапсулировать пакет с новым заголовком Ethernet."
    ]
  },
  {
    "time": [
      858.36,
      864.61
    ],
    "en": [
      "Okay, now let’s say PC4 sends a reply back to PC1, and we’ve configured static routes"
    ],
    "ru": [
      "Хорошо, теперь допустим, что ПК4 отправляет ответ ПК1, и мы настроили статические маршруты."
    ]
  },
  {
    "time": [
      864.61,
      869.89
    ],
    "en": [
      "on the routers so that the traffic follows the same path on the way back to PC1, going"
    ],
    "ru": [
      "на маршрутизаторах, чтобы трафик шел по тому же пути на обратном пути к ПК1,"
    ]
  },
  {
    "time": [
      869.89,
      876.58
    ],
    "en": [
      "via SW4, R4, R2, R1, SW1, and then reaching PC1."
    ],
    "ru": [
      "через SW4, R4, R2, R1, SW1, а затем достигнув ПК1."
    ]
  },
  {
    "time": [
      876.58,
      878.51
    ],
    "en": [
      "What will be different?"
    ],
    "ru": [
      "Что будет по-другому?"
    ]
  },
  {
    "time": [
      878.51,
      882.09
    ],
    "en": [
      "First off, there will be one major difference."
    ],
    "ru": [
      "Во-первых, будет одно существенное отличие."
    ]
  },
  {
    "time": [
      882.09,
      886.38
    ],
    "en": [
      "Since these devices have already gone through the ARP process, there won’t be any need"
    ],
    "ru": [
      "Поскольку эти устройства уже прошли процесс ARP, в этом нет необходимости"
    ]
  },
  {
    "time": [
      886.38,
      891.96
    ],
    "en": [
      "for ARP requests and replies, the packet will simply be forwarded from device to device,"
    ],
    "ru": [
      "для запросов и ответов ARP пакет будет просто перенаправлен с устройства на устройство,"
    ]
  },
  {
    "time": [
      891.96,
      898.15
    ],
    "en": [
      "being de-encapsulated and then re-enapsulated as it is received by and then forwarded by each router."
    ],
    "ru": [
      "деинкапсулируется, а затем повторно инкапсулируется по мере получения и последующей пересылки каждым маршрутизатором."
    ]
  },
  {
    "time": [
      898.15,
      904.33
    ],
    "en": [
      "each router. So, that’s it, just a basic walkthrough of how a packet is forwarded between routers"
    ],
    "ru": [
      "каждый роутер. Итак, это всего лишь базовое пошаговое руководство по пересылке пакета между маршрутизаторами."
    ]
  },
  {
    "time": [
      904.33,
      907.21
    ],
    "en": [
      "to pass it along to its final destination."
    ],
    "ru": [
      "чтобы передать его в конечный пункт назначения."
    ]
  },
  {
    "time": [
      907.21,
      913.17
    ],
    "en": [
      "Now, as for today’s quiz, I’ll do something different than usual."
    ],
    "ru": [
      "Что касается сегодняшней викторины, я сделаю что-нибудь другое, чем обычно."
    ]
  },
  {
    "time": [
      913.17,
      919.15
    ],
    "en": [
      "Instead of having multiple choice questions as usual, we’ll use this same diagram to test your understanding."
    ],
    "ru": [
      "Вместо того, чтобы задавать вопросы с несколькими вариантами ответов, как обычно, мы воспользуемся той же диаграммой, чтобы проверить ваше понимание."
    ]
  },
  {
    "time": [
      919.15,
      924.8389999999999
    ],
    "en": [
      "test your understanding. Let’s get started with the quiz. Here’s question 1."
    ],
    "ru": [
      "проверьте свое понимание. Приступим к викторине. Вот вопрос 1."
    ]
  },
  {
    "time": [
      924.8389999999999,
      928.44
    ],
    "en": [
      "Here’s question 1. PC4 sends a packet to PC1."
    ],
    "ru": [
      "Вот вопрос 1. ПК4 отправляет пакет на ПК1."
    ]
  },
  {
    "time": [
      928.44,
      934.15
    ],
    "en": [
      "What is the destination MAC address when it is sent from PC4’s network interface?"
    ],
    "ru": [
      "Какой MAC-адрес получателя, когда он отправляется с сетевого интерфейса ПК4?"
    ]
  },
  {
    "time": [
      934.15,
      941.32
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
      941.32,
      947.32
    ],
    "en": [
      "The answer is FFFE, which is the MAC address of R4’s G0/2 interface."
    ],
    "ru": [
      "Ответ - FFFE, который является MAC-адресом интерфейса G0 / 2 маршрутизатора R4."
    ]
  },
  {
    "time": [
      947.32,
      954.36
    ],
    "en": [
      "That’s because, to send the packet to PC1, which is in a remote network, PC4 must send"
    ],
    "ru": [
      "Это потому, что для отправки пакета на ПК1, который находится в удаленной сети, ПК4 должен отправить"
    ]
  },
  {
    "time": [
      954.36,
      958.43
    ],
    "en": [
      "the packet to its default gateway, R4, first."
    ],
    "ru": [
      "пакет сначала на свой шлюз по умолчанию, R4."
    ]
  },
  {
    "time": [
      958.43,
      963.02
    ],
    "en": [
      "To do that, it encapsulates the packet with an ethernet header, with its default gateway’s"
    ],
    "ru": [
      "Для этого он инкапсулирует пакет с заголовком Ethernet со своим шлюзом по умолчанию"
    ]
  },
  {
    "time": [
      963.02,
      964.74
    ],
    "en": [
      "MAC address as the destination."
    ],
    "ru": [
      "MAC-адрес в качестве пункта назначения."
    ]
  },
  {
    "time": [
      964.74,
      968.84
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
      968.84,
      973.25
    ],
    "en": [
      "PC4 sends a packet to PC1."
    ],
    "ru": [
      "ПК4 отправляет пакет на ПК1."
    ]
  },
  {
    "time": [
      973.25,
      979.33
    ],
    "en": [
      "What is the source MAC address when it is received on R1’s Gi0/0 interface?"
    ],
    "ru": [
      "Какой MAC-адрес источника, когда он получен на интерфейсе Gi0 / 0 маршрутизатора R1?"
    ]
  },
  {
    "time": [
      979.33,
      986.4
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
      986.4,
      993.82
    ],
    "en": [
      "The answer is CCCC, which is the MAC address of R2’s G0/0 interface."
    ],
    "ru": [
      "Ответ - CCCC, который является MAC-адресом интерфейса G0 / 0 маршрутизатора R2."
    ]
  },
  {
    "time": [
      993.82,
      999.33
    ],
    "en": [
      "When R2 sends the packet to R1 en route to its destination, PC1, it encapsulates the"
    ],
    "ru": [
      "Когда R2 отправляет пакет R1 по пути к его месту назначения, PC1, он инкапсулирует"
    ]
  },
  {
    "time": [
      999.33,
      1004.399
    ],
    "en": [
      "packet with an Ethernet header using its own MAC address as the source MAC address."
    ],
    "ru": [
      "пакет с заголовком Ethernet, использующий собственный MAC-адрес в качестве исходного MAC-адреса."
    ]
  },
  {
    "time": [
      1004.399,
      1008.22
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
      1008.22,
      1012.11
    ],
    "en": [
      "PC4 sends a packet to PC1."
    ],
    "ru": [
      "ПК4 отправляет пакет на ПК1."
    ]
  },
  {
    "time": [
      1012.11,
      1018.07
    ],
    "en": [
      "What is the source MAC address when it is sent from SW1’s Gi0/1 interface?"
    ],
    "ru": [
      "Какой MAC-адрес отправляется с интерфейса Gi0 / 1 SW1?"
    ]
  },
  {
    "time": [
      1018.07,
      1024.95
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
      1024.95,
      1031.02
    ],
    "en": [
      "The answer is AAAA, which is the MAC address of R1’s G0/2 interface."
    ],
    "ru": [
      "Ответ - AAAA, который является MAC-адресом интерфейса G0 / 2 маршрутизатора R1."
    ]
  },
  {
    "time": [
      1031.02,
      1037.12
    ],
    "en": [
      "SW1 doesn’t alter the frame to use its own MAC address, it simply forwards the frame"
    ],
    "ru": [
      "SW1 не изменяет кадр для использования своего собственного MAC-адреса, он просто пересылает кадр"
    ]
  },
  {
    "time": [
      1037.12,
      1041.699
    ],
    "en": [
      "out of the correct interface, or floods it if it doesn’t know the destination."
    ],
    "ru": [
      "из правильного интерфейса или залив его, если он не знает адресата."
    ]
  },
  {
    "time": [
      1041.699,
      1045.49
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
      1045.49,
      1049.68
    ],
    "en": [
      "PC4 sends a packet to PC1."
    ],
    "ru": [
      "ПК4 отправляет пакет на ПК1."
    ]
  },
  {
    "time": [
      1049.68,
      1055.87
    ],
    "en": [
      "What is the destination IP address when it is sent from R4’s Gi0/1 interface?"
    ],
    "ru": [
      "Каков IP-адрес назначения, когда он отправляется с интерфейса Gi0 / 1 маршрутизатора R4?"
    ]
  },
  {
    "time": [
      1055.87,
      1062.8
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
      1062.8,
      1069.27
    ],
    "en": [
      "The answer is 192.168.1.1, which is the IP address of PC1."
    ],
    "ru": [
      "Ответ - 192.168.1.1, это IP-адрес ПК1."
    ]
  },
  {
    "time": [
      1069.27,
      1073.461
    ],
    "en": [
      "Although each router modifies the source and destination MAC addresses in the Ethernet"
    ],
    "ru": [
      "Хотя каждый маршрутизатор изменяет MAC-адреса источника и назначения в Ethernet"
    ]
  },
  {
    "time": [
      1073.461,
      1078.56
    ],
    "en": [
      "header as it forwards the packet, they don’t modify the original packet itself, so the"
    ],
    "ru": [
      "заголовок, поскольку он пересылает пакет, они не изменяют сам исходный пакет, поэтому"
    ]
  },
  {
    "time": [
      1078.56,
      1081.8
    ],
    "en": [
      "destination IP address won’t change."
    ],
    "ru": [
      "IP-адрес назначения не изменится."
    ]
  },
  {
    "time": [
      1081.8,
      1090.47
    ],
    "en": [
      "Since PC4 is sending the packet to PC1, that means the destination will be PC1’s IP address, 192.168.1.1."
    ],
    "ru": [
      "Поскольку ПК4 отправляет пакет на ПК1, это означает, что получателем будет IP-адрес ПК1, 192.168.1.1."
    ]
  },
  {
    "time": [
      1090.47,
      1094.01
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
      1090.47,
      1094.01
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
      1094.01,
      1098.21
    ],
    "en": [
      "PC4 sends a packet to PC1."
    ],
    "ru": [
      "ПК4 отправляет пакет на ПК1."
    ]
  },
  {
    "time": [
      1098.21,
      1104.37
    ],
    "en": [
      "What is the source IP address when it is received on R1’s Gi0/0 interface?"
    ],
    "ru": [
      "Каков IP-адрес источника, когда он получен на интерфейсе Gi0 / 0 маршрутизатора R1?"
    ]
  },
  {
    "time": [
      1104.37,
      1110.49
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
      1110.49,
      1117.13
    ],
    "en": [
      "The answer is 192.168.4.1, which is the IP address of PC4."
    ],
    "ru": [
      "Ответ - 192.168.4.1, это IP-адрес ПК4."
    ]
  },
  {
    "time": [
      1117.13,
      1121.73
    ],
    "en": [
      "As I said in the last question, the original packet is not modified as the routers forward"
    ],
    "ru": [
      "Как я сказал в последнем вопросе, исходный пакет не изменяется при пересылке маршрутизаторами."
    ]
  },
  {
    "time": [
      1121.73,
      1132.02
    ],
    "en": [
      "it to its destination, so through the whole route the source IP address remains PC4’s IP address, 192.168.4.1."
    ],
    "ru": [
      "его к месту назначения, поэтому на протяжении всего маршрута исходный IP-адрес остается IP-адресом ПК4, 192.168.4.1."
    ]
  },
  {
    "time": [
      1132.02,
      1138.8
    ],
    "en": [
      "IP address, 192.168.4.1. Okay, for this video there will once again be supplementary materials to help you practice what you’ve learned."
    ],
    "ru": [
      "IP-адрес 192.168.4.1. Хорошо, к этому видео снова будут дополнительные материалы, которые помогут вам практиковать то, что вы узнали."
    ]
  },
  {
    "time": [
      1138.8,
      1143.15
    ],
    "en": [
      "what you’ve learned. There will be a packet tracer lab in which you use packet tracer’s ‘simulation’"
    ],
    "ru": [
      "что вы узнали. Будет лаборатория пакетного трассировщика, в которой вы будете использовать «симуляцию» пакетного трассировщика."
    ]
  },
  {
    "time": [
      1143.15,
      1148.76
    ],
    "en": [
      "mode to analyze a packet and test your knowledge and understanding. That will be the next video."
    ],
    "ru": [
      "режим для анализа пакета и проверки ваших знаний и понимания. Это будет следующее видео."
    ]
  },
  {
    "time": [
      1148.76,
      1154.29
    ],
    "en": [
      "And that’s it, there won’t be a flashcard deck this video since there wasn’t actually"
    ],
    "ru": [
      "Вот и все, в этом видео не будет флэш-карт, потому что на самом деле не было"
    ]
  },
  {
    "time": [
      1154.29,
      1156.84
    ],
    "en": [
      "any new information in this video."
    ],
    "ru": [
      "любая новая информация в этом видео."
    ]
  },
  {
    "time": [
      1156.84,
      1161.47
    ],
    "en": [
      "However, if there are some new points that you picked up in this video, feel free to"
    ],
    "ru": [
      "Однако, если есть какие-то новые моменты, которые вы уловили в этом видео, не стесняйтесь"
    ]
  },
  {
    "time": [
      1161.47,
      1163.14
    ],
    "en": [
      "make your own flashcards."
    ],
    "ru": [
      "сделайте свои собственные карточки."
    ]
  },
  {
    "time": [
      1163.14,
      1168.42
    ],
    "en": [
      "Actually, even though I make flashcard decks for each video, I also think its a good idea"
    ],
    "ru": [
      "На самом деле, хотя я делаю колоды карточек для каждого видео, я тоже считаю, что это хорошая идея."
    ]
  },
  {
    "time": [
      1168.42,
      1173.79
    ],
    "en": [
      "to make your own flashcards too, if there is anything else you want to remember."
    ],
    "ru": [
      "также сделать свои собственные карточки, если есть что-то еще, что вы хотите запомнить."
    ]
  },
  {
    "time": [
      1173.79,
      1178.23
    ],
    "en": [
      "You can also edit the flashcards I provide, or delete some flashcards if you think some"
    ],
    "ru": [
      "Вы также можете отредактировать предоставленные мной карточки или удалить некоторые карточки, если считаете, что"
    ]
  },
  {
    "time": [
      1178.23,
      1180.56
    ],
    "en": [
      "of them are not necessary."
    ],
    "ru": [
      "из них не нужны."
    ]
  },
  {
    "time": [
      1180.56,
      1185.85
    ],
    "en": [
      "The flashcards are just a tool to help you, so feel free to use them however you think is best."
    ],
    "ru": [
      "Карточки - это всего лишь инструмент, который поможет вам, поэтому не стесняйтесь использовать их так, как считаете нужным."
    ]
  },
  {
    "time": [
      1185.85,
      1188.32
    ],
    "en": [
      "is best. Okay, that’s all for today’s video."
    ],
    "ru": [
      "лучший. Ладно, на сегодня все видео."
    ]
  },
  {
    "time": [
      1188.32,
      1191.88
    ],
    "en": [
      "Good luck with your studies."
    ],
    "ru": [
      "Удачи в учебе."
    ]
  },
  {
    "time": [
      1191.88,
      1192.9
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
      1192.9,
      1197.36
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
      1197.36,
      1200.7
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
      1200.7,
      1203.429
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
      1203.429,
      1210.8
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
      1210.8,
      1210.8
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]