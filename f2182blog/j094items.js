let items = [
  {
    "time": [
      0.789,
      3.199
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
      3.199,
      6.759
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
      6.759,
      10.58
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
      10.58,
      16.34
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
      16.34,
      18.38
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
      18.38,
      21.73
    ],
    "en": [
      "In this video we will talk about port security."
    ],
    "ru": [
      "В этом видео мы поговорим о безопасности портов."
    ]
  },
  {
    "time": [
      21.73,
      26.52
    ],
    "en": [
      "Port security is a security feature on Cisco switches that allows you to control what source"
    ],
    "ru": [
      "Безопасность портов - это функция безопасности коммутаторов Cisco, которая позволяет вам контролировать, какой источник"
    ]
  },
  {
    "time": [
      26.52,
      31.25
    ],
    "en": [
      "MAC addresses are allowed on a switch port, as well as how many MAC addresses are allowed"
    ],
    "ru": [
      "MAC-адреса разрешены на порту коммутатора, а также количество разрешенных MAC-адресов."
    ]
  },
  {
    "time": [
      31.25,
      32.91
    ],
    "en": [
      "on a switch port."
    ],
    "ru": [
      "на порту коммутатора."
    ]
  },
  {
    "time": [
      32.91,
      38.59
    ],
    "en": [
      "It’s covered in exam topic 5.7, which says you must be able to configure Layer 2 security"
    ],
    "ru": [
      "Он рассматривается в теме экзамена 5.7, в которой говорится, что вы должны иметь возможность настраивать безопасность уровня 2."
    ]
  },
  {
    "time": [
      38.59,
      44.63
    ],
    "en": [
      "features, including DHCP snooping, ARP inspection, and port security."
    ],
    "ru": [
      "функции, включая отслеживание DHCP, проверку ARP и безопасность портов."
    ]
  },
  {
    "time": [
      44.63,
      50.4
    ],
    "en": [
      "Those other two, DHCP snooping and ARP inspection, will be covered in the next few videos."
    ],
    "ru": [
      "Эти два других, отслеживание DHCP и проверка ARP, будут рассмотрены в следующих нескольких видеороликах."
    ]
  },
  {
    "time": [
      50.4,
      53.76
    ],
    "en": [
      "But for this video, we’ll focus on port security."
    ],
    "ru": [
      "Но в этом видео мы сосредоточимся на безопасности портов."
    ]
  },
  {
    "time": [
      53.76,
      56.57
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
      56.57,
      60.55
    ],
    "en": [
      "First, I’ll introduce what port security is."
    ],
    "ru": [
      "Сначала я расскажу, что такое безопасность портов."
    ]
  },
  {
    "time": [
      60.55,
      62.73
    ],
    "en": [
      "But knowing what it is isn’t enough."
    ],
    "ru": [
      "Но знать, что это такое, недостаточно."
    ]
  },
  {
    "time": [
      62.73,
      68.42
    ],
    "en": [
      "I’ll also explain why we use port security, what security benefits it offers."
    ],
    "ru": [
      "Я также объясню, почему мы используем систему безопасности портов и какие преимущества она дает."
    ]
  },
  {
    "time": [
      68.42,
      72.58
    ],
    "en": [
      "And I’ll show you various port security configuration commands, too."
    ],
    "ru": [
      "И я также покажу вам различные команды настройки безопасности порта."
    ]
  },
  {
    "time": [
      72.58,
      77.26
    ],
    "en": [
      "As always, watch until the end of the video for an awesome bonus question from Boson Software’s"
    ],
    "ru": [
      "Как всегда, просмотрите видео до конца, чтобы получить замечательный бонусный вопрос от компании Boson Software."
    ]
  },
  {
    "time": [
      77.26,
      84.02
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
      84.02,
      85.89
    ],
    "en": [
      "First up, what is port security?"
    ],
    "ru": [
      "Во-первых, что такое безопасность порта?"
    ]
  },
  {
    "time": [
      85.89,
      90.26
    ],
    "en": [
      "Well, it’s a security feature of Cisco switches."
    ],
    "ru": [
      "Ну, это функция безопасности коммутаторов Cisco."
    ]
  },
  {
    "time": [
      90.26,
      95.799
    ],
    "en": [
      "It allows you to control which source MAC address, or addresses, are allowed to enter a switchport."
    ],
    "ru": [
      "Это позволяет вам контролировать, какой исходный MAC-адрес или адреса могут входить в порт коммутатора."
    ]
  },
  {
    "time": [
      95.799,
      100.049
    ],
    "en": [
      "a switchport. So, it’s configured on a per-interface basis."
    ],
    "ru": [
      "коммутатор. Итак, он настраивается для каждого интерфейса."
    ]
  },
  {
    "time": [
      100.049,
      105.49000000000001
    ],
    "en": [
      "By the way, throughout this video I’ll probably be using both terms, port and interface, but"
    ],
    "ru": [
      "Кстати, в этом видео я, вероятно, буду использовать и термины, и порт, и интерфейс, но"
    ]
  },
  {
    "time": [
      105.49000000000001,
      107.09
    ],
    "en": [
      "I mean the same thing."
    ],
    "ru": [
      "Я имею в виду то же самое."
    ]
  },
  {
    "time": [
      107.09,
      114.07
    ],
    "en": [
      "So, if a frame with an unauthorized source MAC address enters the port, an action will be taken."
    ],
    "ru": [
      "Таким образом, если в порт поступает кадр с неавторизованным MAC-адресом источника, будет выполнено действие."
    ]
  },
  {
    "time": [
      114.07,
      118.25
    ],
    "en": [
      "be taken. There are a few possible actions that you can configure, but the default action is to"
    ],
    "ru": [
      "быть взятым. Есть несколько возможных действий, которые вы можете настроить, но действие по умолчанию:"
    ]
  },
  {
    "time": [
      118.25,
      120.99
    ],
    "en": [
      "place the interface in an err-disabled state."
    ],
    "ru": [
      "перевести интерфейс в состояние с отключенной ошибкой."
    ]
  },
  {
    "time": [
      120.99,
      124.99
    ],
    "en": [
      "In effect, this is like shutting down the interface."
    ],
    "ru": [
      "По сути, это похоже на выключение интерфейса."
    ]
  },
  {
    "time": [
      124.99,
      130.179
    ],
    "en": [
      "Traffic will no longer be sent or received by that interface. Let me demonstrate."
    ],
    "ru": [
      "Этот интерфейс больше не будет отправлять и получать трафик. Позвольте мне продемонстрировать."
    ]
  },
  {
    "time": [
      130.179,
      134.5
    ],
    "en": [
      "Let me demonstrate. PC1 is connected to SW1’s G0/1 interface."
    ],
    "ru": [
      "Позвольте мне продемонстрировать. ПК1 подключен к интерфейсу G0 / 1 SW1."
    ]
  },
  {
    "time": [
      134.5,
      138.079
    ],
    "en": [
      "PC1’s MAC address is A.A.A."
    ],
    "ru": [
      "MAC-адрес ПК1 - A.A.A."
    ]
  },
  {
    "time": [
      138.079,
      142.421
    ],
    "en": [
      "As you know, MAC addresses are actually 12 hexadecimal characters, but I’ll shorten"
    ],
    "ru": [
      "Как вы знаете, MAC-адреса на самом деле состоят из 12 шестнадцатеричных символов, но я буду сокращать"
    ]
  },
  {
    "time": [
      142.421,
      145.409
    ],
    "en": [
      "them here to make it easier to read."
    ],
    "ru": [
      "их здесь, чтобы их было легче читать."
    ]
  },
  {
    "time": [
      145.409,
      152.91899999999998
    ],
    "en": [
      "The user of PC1 brought in his personal laptop to work, that’s PC2, and it has a MAC address of B.B.B."
    ],
    "ru": [
      "Пользователь ПК1 принес на работу свой персональный ноутбук, то есть ПК2, и у него MAC-адрес B.B.B."
    ]
  },
  {
    "time": [
      152.91899999999998,
      159.72
    ],
    "en": [
      "of B.B.B. The network admin has configured port security on SW1’s G0/1 interface, so it will only"
    ],
    "ru": [
      "компании B.B.B. Сетевой администратор настроил безопасность порта на интерфейсе G0 / 1 SW1, поэтому он будет только"
    ]
  },
  {
    "time": [
      159.72,
      166.549
    ],
    "en": [
      "allow frames with a source MAC address of A.A.A to enter the G0/1 interface."
    ],
    "ru": [
      "разрешить кадрам с MAC-адресом источника A.A.A входить в интерфейс G0 / 1."
    ]
  },
  {
    "time": [
      166.549,
      173.209
    ],
    "en": [
      "When PC1 sends a frame, SW1 will check the source MAC address and see that it is A.A.A,"
    ],
    "ru": [
      "Когда ПК1 отправляет кадр, SW1 проверяет исходный MAC-адрес и видит, что это A.A.A,"
    ]
  },
  {
    "time": [
      173.209,
      176.78
    ],
    "en": [
      "so it will forward it to the destination as normal."
    ],
    "ru": [
      "поэтому он будет пересылать его по назначению как обычно."
    ]
  },
  {
    "time": [
      176.78,
      182.67
    ],
    "en": [
      "But the user unplugs the cable from PC1 and then connects it to the laptop, PC2."
    ],
    "ru": [
      "Но пользователь отключает кабель от ПК1, а затем подключает его к ноутбуку ПК2."
    ]
  },
  {
    "time": [
      182.67,
      185.23
    ],
    "en": [
      "What will happen when PC2 sends a frame?"
    ],
    "ru": [
      "Что произойдет, когда ПК2 отправит фрейм?"
    ]
  },
  {
    "time": [
      185.23,
      193.75
    ],
    "en": [
      "Well, SW1 will check the source MAC address and notice that it is B.B.B, but only A.A.A should be allowed."
    ],
    "ru": [
      "Что ж, SW1 проверит MAC-адрес источника и заметит, что это B.B.B, но должен быть разрешен только A.A.A."
    ]
  },
  {
    "time": [
      193.75,
      198.26
    ],
    "en": [
      "should be allowed. So, SW1 will place G0/1 in an err-disabled state."
    ],
    "ru": [
      "должно быть разрешено. Таким образом, SW1 переведет G0 / 1 в состояние отключения из-за ошибки."
    ]
  },
  {
    "time": [
      198.26,
      202.309
    ],
    "en": [
      "It won’t send or receive data until you enable the interface again."
    ],
    "ru": [
      "Он не будет отправлять и получать данные, пока вы снова не включите интерфейс."
    ]
  },
  {
    "time": [
      202.309,
      207.169
    ],
    "en": [
      "Now, as I said there are a few possible actions that can be taken and I’ll explain the others"
    ],
    "ru": [
      "Как я уже сказал, есть несколько возможных действий, которые можно предпринять, а остальные я объясню."
    ]
  },
  {
    "time": [
      207.169,
      211.819
    ],
    "en": [
      "later, but for now let’s assume the default action of shutdown."
    ],
    "ru": [
      "позже, а пока давайте предположим, что действие по умолчанию - выключение."
    ]
  },
  {
    "time": [
      211.819,
      217.079
    ],
    "en": [
      "So, noticing that his laptop isn’t able to communicate over the network, the user"
    ],
    "ru": [
      "Итак, заметив, что его ноутбук не может обмениваться данными по сети, пользователь"
    ]
  },
  {
    "time": [
      217.079,
      222.09
    ],
    "en": [
      "unplugs the cable from his laptop and connects it back to PC1."
    ],
    "ru": [
      "отсоединяет кабель от своего ноутбука и снова подключает его к ПК1."
    ]
  },
  {
    "time": [
      222.09,
      224.36
    ],
    "en": [
      "What happens when PC1 sends a frame?"
    ],
    "ru": [
      "Что происходит, когда ПК1 отправляет фрейм?"
    ]
  },
  {
    "time": [
      224.36,
      231.87
    ],
    "en": [
      "Well, the interface is still err-disabled, so PC1 is also unable to communicate over the network."
    ],
    "ru": [
      "Что ж, интерфейс по-прежнему отключен из-за ошибок, поэтому ПК1 также не может обмениваться данными по сети."
    ]
  },
  {
    "time": [
      231.87,
      236.16
    ],
    "en": [
      "the network. There are two ways to enable an interface that has been disabled by port security, but"
    ],
    "ru": [
      "сеть. Есть два способа включить интерфейс, который был отключен защитой порта, но"
    ]
  },
  {
    "time": [
      236.16,
      238.139
    ],
    "en": [
      "I’ll cover those later."
    ],
    "ru": [
      "Я расскажу об этом позже."
    ]
  },
  {
    "time": [
      238.139,
      242.73
    ],
    "en": [
      "Okay let’s cover a few more points about port security."
    ],
    "ru": [
      "Хорошо, давайте рассмотрим еще несколько моментов о безопасности порта."
    ]
  },
  {
    "time": [
      242.73,
      249.219
    ],
    "en": [
      "When you enable port security on an interface with the default settings, one MAC address is allowed."
    ],
    "ru": [
      "Когда вы включаете защиту порта на интерфейсе с настройками по умолчанию, разрешается один MAC-адрес."
    ]
  },
  {
    "time": [
      249.219,
      252.629
    ],
    "en": [
      "is allowed. You can configure the allowed MAC address manually if you want."
    ],
    "ru": [
      "позволено. Вы можете настроить разрешенный MAC-адрес вручную, если хотите."
    ]
  },
  {
    "time": [
      252.629,
      256.92
    ],
    "en": [
      "But if you don’t configure it manually, the switch will allow the first source MAC"
    ],
    "ru": [
      "Но если вы не настроите его вручную, коммутатор разрешит первый исходный MAC-адрес."
    ]
  },
  {
    "time": [
      256.92,
      259.59
    ],
    "en": [
      "address that enters the interface."
    ],
    "ru": [
      "адрес, который входит в интерфейс."
    ]
  },
  {
    "time": [
      259.59,
      264.25
    ],
    "en": [
      "That MAC address will be allowed on the interface, but all others will be unauthorized."
    ],
    "ru": [
      "Этот MAC-адрес будет разрешен на интерфейсе, но все остальные будут неавторизованными."
    ]
  },
  {
    "time": [
      264.25,
      268.58
    ],
    "en": [
      "However, you can change the maximum number of MAC addresses allowed."
    ],
    "ru": [
      "Однако вы можете изменить максимально допустимое количество MAC-адресов."
    ]
  },
  {
    "time": [
      268.58,
      274.27
    ],
    "en": [
      "Here’s one situation in which you should increase the number of MAC addresses allowed on the port."
    ],
    "ru": [
      "Вот одна ситуация, в которой вам следует увеличить количество MAC-адресов, разрешенных для порта."
    ]
  },
  {
    "time": [
      274.27,
      280.38
    ],
    "en": [
      "on the port. Phone1 is directly connected to SW1, and PC1 is connected to phone1."
    ],
    "ru": [
      "в порту. Phone1 напрямую подключен к SW1, а ПК1 подключен к phone1."
    ]
  },
  {
    "time": [
      280.38,
      284.9
    ],
    "en": [
      "The default port security setting, which allows one MAC address, isn’t going to work in"
    ],
    "ru": [
      "Настройка безопасности порта по умолчанию, которая позволяет использовать один MAC-адрес, не будет работать в"
    ]
  },
  {
    "time": [
      284.9,
      290.26
    ],
    "en": [
      "this situation, because both PC1 and phone1 are going to send traffic using their own"
    ],
    "ru": [
      "в этой ситуации, потому что и ПК1, и телефон1 будут отправлять трафик, используя свои собственные"
    ]
  },
  {
    "time": [
      290.26,
      294.11
    ],
    "en": [
      "MAC address as the source, so that’s two MAC addresses."
    ],
    "ru": [
      "MAC-адрес в качестве источника, так что это два MAC-адреса."
    ]
  },
  {
    "time": [
      294.11,
      300.94
    ],
    "en": [
      "So, in this case let’s say we configured SW1’s G0/1 interface to allow two MAC addresses."
    ],
    "ru": [
      "Итак, в этом случае предположим, что мы настроили интерфейс G0 / 1 SW1 для разрешения двух MAC-адресов."
    ]
  },
  {
    "time": [
      300.94,
      307.16
    ],
    "en": [
      "But we didn’t configure them manually, we will let SW1 dynamically learn which two MAC addresses to allow."
    ],
    "ru": [
      "Но мы не настраивали их вручную, мы позволим SW1 динамически узнавать, какие два MAC-адреса разрешить."
    ]
  },
  {
    "time": [
      307.16,
      315.68
    ],
    "en": [
      "addresses to allow. So, if phone1 sends a frame SW1 will add it to the list of allowed MAC addresses and forward it as normal."
    ],
    "ru": [
      "адреса разрешить. Таким образом, если phone1 отправляет кадр, SW1 добавит его в список разрешенных MAC-адресов и перешлет его как обычно."
    ]
  },
  {
    "time": [
      315.68,
      322.41
    ],
    "en": [
      "it as normal. Then if PC1 sends a frame, SW1 will also add that one to the list and it will be forwarded."
    ],
    "ru": [
      "это как обычно. Затем, если ПК1 отправляет кадр, SW1 также добавит его в список, и он будет перенаправлен."
    ]
  },
  {
    "time": [
      322.41,
      327.74
    ],
    "en": [
      "But now SW1’s G0/1 interface has reached its maximum number of allowed MAC addresses,"
    ],
    "ru": [
      "Но теперь интерфейс G0 / 1 SW1 достиг максимального количества разрешенных MAC-адресов,"
    ]
  },
  {
    "time": [
      327.74,
      330.25
    ],
    "en": [
      "since we configured it as 2."
    ],
    "ru": [
      "поскольку мы настроили его как 2."
    ]
  },
  {
    "time": [
      330.25,
      334.94
    ],
    "en": [
      "If the interface is connected to another device and it sends a frame, SW1 will shut down the"
    ],
    "ru": [
      "Если интерфейс подключен к другому устройству и отправляет фрейм, SW1 отключит"
    ]
  },
  {
    "time": [
      334.94,
      338.85
    ],
    "en": [
      "interface because the source MAC address isn’t authorized."
    ],
    "ru": [
      "интерфейс, потому что исходный MAC-адрес не авторизован."
    ]
  },
  {
    "time": [
      338.85,
      342.17
    ],
    "en": [
      "Okay, in this introduced two main points."
    ],
    "ru": [
      "Ладно, здесь введены два основных момента."
    ]
  },
  {
    "time": [
      342.17,
      347.341
    ],
    "en": [
      "First, the default number of allowed MAC addresses is one when you enable port security, but"
    ],
    "ru": [
      "Во-первых, количество разрешенных MAC-адресов по умолчанию равно единице, когда вы включаете защиту порта, но"
    ]
  },
  {
    "time": [
      347.341,
      349.71
    ],
    "en": [
      "you can configure it to allow more."
    ],
    "ru": [
      "вы можете настроить его, чтобы разрешить больше."
    ]
  },
  {
    "time": [
      349.71,
      355.40999999999997
    ],
    "en": [
      "Second, the allowed MAC addresses can be manually configured or dynamically learned."
    ],
    "ru": [
      "Во-вторых, разрешенные MAC-адреса могут быть настроены вручную или динамически изучены."
    ]
  },
  {
    "time": [
      355.40999999999997,
      360.53
    ],
    "en": [
      "In this example, both were dynamically learned, but for example we could have manually configured"
    ],
    "ru": [
      "В этом примере оба были изучены динамически, но, например, мы могли бы вручную настроить"
    ]
  },
  {
    "time": [
      360.53,
      369.37
    ],
    "en": [
      "SW1 to allow C.C.C on G0/1, and then allow it to dynamically learn A.A.A when PC1 sends a frame."
    ],
    "ru": [
      "SW1, чтобы разрешить C.C.C на G0 / 1, а затем разрешить ему динамически изучать A.A.A, когда ПК1 отправляет кадр."
    ]
  },
  {
    "time": [
      369.37,
      374.41
    ],
    "en": [
      "a frame. So, if more than one MAC address is allowed, they don’t all have to be manually configured"
    ],
    "ru": [
      "рамка. Таким образом, если разрешено более одного MAC-адреса, их не нужно настраивать вручную."
    ]
  },
  {
    "time": [
      374.41,
      380.05
    ],
    "en": [
      "or all have to be dynamically learned, a combination is possible."
    ],
    "ru": [
      "или все должны быть динамически изучены, возможна комбинация."
    ]
  },
  {
    "time": [
      380.05,
      384.78
    ],
    "en": [
      "You can probably imagine how port security could be useful, but let me briefly explain."
    ],
    "ru": [
      "Вы, наверное, можете себе представить, чем может быть полезна защита портов, но позвольте мне кратко объяснить."
    ]
  },
  {
    "time": [
      384.78,
      391.51
    ],
    "en": [
      "It’s useful because it allows network admins to control which devices are allowed to access the network."
    ],
    "ru": [
      "Это полезно, потому что позволяет сетевым администраторам контролировать, каким устройствам разрешен доступ к сети."
    ]
  },
  {
    "time": [
      391.51,
      396.74
    ],
    "en": [
      "the network. Someone can’t just plug an unauthorized device into a switchport and gain access to the network."
    ],
    "ru": [
      "сеть. Кто-то не может просто подключить неавторизованное устройство к коммутатору и получить доступ к сети."
    ]
  },
  {
    "time": [
      396.74,
      400.0
    ],
    "en": [
      "the network. However, MAC address spoofing is a simple task."
    ],
    "ru": [
      "сеть. Однако подмена MAC-адреса - простая задача."
    ]
  },
  {
    "time": [
      400.0,
      404.56
    ],
    "en": [
      "It’s easy to configure a device to send frames with a different source MAC address."
    ],
    "ru": [
      "Настроить устройство для отправки кадров с другим исходным MAC-адресом несложно."
    ]
  },
  {
    "time": [
      404.56,
      408.9
    ],
    "en": [
      "So, be aware that port security isn’t a perfect solution in this regard."
    ],
    "ru": [
      "Так что имейте в виду, что безопасность портов не является идеальным решением в этом отношении."
    ]
  },
  {
    "time": [
      408.9,
      414.4
    ],
    "en": [
      "But, rather than manually specifying the MAC addresses allowed on each port, port security’s"
    ],
    "ru": [
      "Но вместо того, чтобы вручную указывать MAC-адреса, разрешенные для каждого порта, безопасность порта"
    ]
  },
  {
    "time": [
      414.4,
      420.21
    ],
    "en": [
      "ability to limit the number of MAC addresses allowed on an interface is often more useful."
    ],
    "ru": [
      "возможность ограничить количество MAC-адресов, разрешенных на интерфейсе, часто бывает более полезной."
    ]
  },
  {
    "time": [
      420.21,
      427.24
    ],
    "en": [
      "For example, think back to the DHCP starvation attack carried out in the day 48 lab video."
    ],
    "ru": [
      "Например, вспомните атаку голодания DHCP, проведенную в лабораторном видео на 48-й день."
    ]
  },
  {
    "time": [
      427.24,
      432.78
    ],
    "en": [
      "The attacker spoofed thousands of fake MAC addresses, and the DHCP server assigned IP"
    ],
    "ru": [
      "Злоумышленник подделал тысячи поддельных MAC-адресов, а DHCP-сервер присвоил IP-адрес."
    ]
  },
  {
    "time": [
      432.78,
      438.0
    ],
    "en": [
      "addresses to those fake MAC addresses, exhausting the DHCP pool."
    ],
    "ru": [
      "адресов к этим поддельным MAC-адресам, истощая пул DHCP."
    ]
  },
  {
    "time": [
      438.0,
      442.85
    ],
    "en": [
      "But not just that, switches can’t learn an infinite number of MAC addresses, so the"
    ],
    "ru": [
      "Но не только это: коммутаторы не могут запоминать бесконечное количество MAC-адресов, поэтому"
    ]
  },
  {
    "time": [
      442.85,
      447.73
    ],
    "en": [
      "switch’s MAC address table can also become full due to such an attack."
    ],
    "ru": [
      "Таблица MAC-адресов коммутатора также может заполниться из-за такой атаки."
    ]
  },
  {
    "time": [
      447.73,
      453.87
    ],
    "en": [
      "Then the switch can no longer learn new MAC addresses, and it will flood every packet it receives."
    ],
    "ru": [
      "Тогда коммутатор больше не сможет запоминать новые MAC-адреса и будет лавинно перенаправлять каждый полученный пакет."
    ]
  },
  {
    "time": [
      453.87,
      458.05
    ],
    "en": [
      "it receives. Using port security to limit the number of MAC addresses allowed on an interface can"
    ],
    "ru": [
      "он получает. Использование безопасности порта для ограничения количества MAC-адресов, разрешенных на интерфейсе, может"
    ]
  },
  {
    "time": [
      458.05,
      460.94
    ],
    "en": [
      "protect against such attacks."
    ],
    "ru": [
      "защитить от таких атак."
    ]
  },
  {
    "time": [
      460.94,
      465.71
    ],
    "en": [
      "Both aspects of port security are useful: controlling which MAC addresses are allowed"
    ],
    "ru": [
      "Оба аспекта безопасности порта полезны: контроль разрешенных MAC-адресов."
    ]
  },
  {
    "time": [
      465.71,
      470.841
    ],
    "en": [
      "and controlling how many MAC addresses are allowed, so we’ll continue to look at both aspects."
    ],
    "ru": [
      "и контроль количества разрешенных MAC-адресов, поэтому мы продолжим рассматривать оба аспекта."
    ]
  },
  {
    "time": [
      470.841,
      473.06
    ],
    "en": [
      "aspects. Let’s move on."
    ],
    "ru": [
      "аспекты. Давайте двигаться дальше."
    ]
  },
  {
    "time": [
      473.06,
      480.26
    ],
    "en": [
      "Now, before going deeper into other areas of port security, let’s cover the most basic configurations."
    ],
    "ru": [
      "Теперь, прежде чем углубляться в другие области безопасности портов, давайте рассмотрим самые основные конфигурации."
    ]
  },
  {
    "time": [
      480.26,
      485.15
    ],
    "en": [
      "configurations. Port security is enabled directly on the interface, so I enter interface configuration mode for"
    ],
    "ru": [
      "конфигурации. Безопасность порта включается непосредственно на интерфейсе, поэтому я вхожу в режим настройки интерфейса для"
    ]
  },
  {
    "time": [
      485.15,
      489.139
    ],
    "en": [
      "G0/1 and try the command SWITCHPORT PORT-SECURITY."
    ],
    "ru": [
      "G0 / 1 и попробуйте команду SWITCHPORT PORT-SECURITY."
    ]
  },
  {
    "time": [
      489.139,
      495.71
    ],
    "en": [
      "However, it’s rejected with a message saying that gigabitethernet0/1 is a dynamic port."
    ],
    "ru": [
      "Однако он отклоняется с сообщением о том, что gigabitethernet0 / 1 является динамическим портом."
    ]
  },
  {
    "time": [
      495.71,
      497.13
    ],
    "en": [
      "What does that mean?"
    ],
    "ru": [
      "Что это обозначает?"
    ]
  },
  {
    "time": [
      497.13,
      502.71
    ],
    "en": [
      "To check I used SHOW INTERFACES G0/1 SWITCHPORT. and here’s the answer."
    ],
    "ru": [
      "Для проверки я использовал SHOW INTERFACES G0 / 1 SWITCHPORT. и вот ответ."
    ]
  },
  {
    "time": [
      502.71,
      508.639
    ],
    "en": [
      "By default, switchports have an administrative mode of dynamic auto, that’s the DTP command"
    ],
    "ru": [
      "По умолчанию порты коммутатора имеют административный режим динамического авто, то есть команду DTP."
    ]
  },
  {
    "time": [
      508.639,
      513.789
    ],
    "en": [
      "SWITCHPORT MODE DYNAMIC AUTO, I covered that earlier in the course."
    ],
    "ru": [
      "РЕЖИМ SWITCHPORT ДИНАМИЧЕСКИЙ АВТО, я уже говорил об этом ранее в курсе."
    ]
  },
  {
    "time": [
      513.789,
      518.759
    ],
    "en": [
      "Port security can be enabled on access ports or trunk ports, but they must be statically"
    ],
    "ru": [
      "Безопасность порта может быть включена на портах доступа или магистральных портах, но они должны быть статическими."
    ]
  },
  {
    "time": [
      518.759,
      521.249
    ],
    "en": [
      "configured as access or trunk."
    ],
    "ru": [
      "настроен как доступ или транк."
    ]
  },
  {
    "time": [
      521.249,
      524.229
    ],
    "en": [
      "Dynamic auto and dynamic desirable are not allowed."
    ],
    "ru": [
      "Динамический авто и желательно динамический недопустимы."
    ]
  },
  {
    "time": [
      524.229,
      530.61
    ],
    "en": [
      "So, I used SWITCHPORT MODE ACCESS to configure it as a static access port."
    ],
    "ru": [
      "Итак, я использовал SWITCHPORT MODE ACCESS, чтобы настроить его как статический порт доступа."
    ]
  },
  {
    "time": [
      530.61,
      536.43
    ],
    "en": [
      "Then I used SHOW INTERFACES G0/1 SWITCHPORT again to check, and the administrative mode"
    ],
    "ru": [
      "Затем я снова использовал SHOW INTERFACES G0 / 1 SWITCHPORT для проверки и административный режим"
    ]
  },
  {
    "time": [
      536.43,
      541.92
    ],
    "en": [
      "is now static access, so the SWITCHPORT PORT-SECURITY command should work."
    ],
    "ru": [
      "теперь статический доступ, поэтому команда SWITCHPORT PORT-SECURITY должна работать."
    ]
  },
  {
    "time": [
      541.92,
      547.4
    ],
    "en": [
      "And indeed it does, so port security is now enabled on G0/1."
    ],
    "ru": [
      "И это действительно так, поэтому безопасность порта теперь включена на G0 / 1."
    ]
  },
  {
    "time": [
      547.4,
      551.62
    ],
    "en": [
      "When you use just this command, port security is enabled with the default settings."
    ],
    "ru": [
      "Когда вы используете только эту команду, безопасность порта включается с настройками по умолчанию."
    ]
  },
  {
    "time": [
      551.62,
      555.439
    ],
    "en": [
      "Let’s check out those default settings."
    ],
    "ru": [
      "Давайте проверим эти настройки по умолчанию."
    ]
  },
  {
    "time": [
      555.439,
      560.68
    ],
    "en": [
      "The command SHOW PORT-SECURITY INTERFACE, followed by the interface name, is very useful."
    ],
    "ru": [
      "Команда SHOW PORT-SECURITY INTERFACE, за которой следует имя интерфейса, очень полезна."
    ]
  },
  {
    "time": [
      560.68,
      562.73
    ],
    "en": [
      "Let’s see what it shows."
    ],
    "ru": [
      "Посмотрим, что это показывает."
    ]
  },
  {
    "time": [
      562.73,
      568.45
    ],
    "en": [
      "First, port security is enabled, and the port status is secure-up."
    ],
    "ru": [
      "Во-первых, безопасность порта включена, и статус порта безопасен."
    ]
  },
  {
    "time": [
      568.45,
      573.37
    ],
    "en": [
      "Secure-up just means port security is enabled, and the interface is up."
    ],
    "ru": [
      "Secure-up просто означает, что безопасность порта включена, а интерфейс работает."
    ]
  },
  {
    "time": [
      573.37,
      576.97
    ],
    "en": [
      "The default violation mode is shutdown, as I said before."
    ],
    "ru": [
      "Как я уже сказал, режим нарушения по умолчанию - выключение."
    ]
  },
  {
    "time": [
      576.97,
      581.829
    ],
    "en": [
      "If an unauthorized frame enters the interface, it will be err-disabled."
    ],
    "ru": [
      "Если в интерфейс попадает неавторизованный фрейм, он будет отключен из-за ошибки."
    ]
  },
  {
    "time": [
      581.829,
      584.62
    ],
    "en": [
      "Here are some default settings regarding the timers."
    ],
    "ru": [
      "Вот некоторые настройки таймеров по умолчанию."
    ]
  },
  {
    "time": [
      584.62,
      590.18
    ],
    "en": [
      "The aging time of 0 minutes means that the addresses will never age out, there is no timer."
    ],
    "ru": [
      "Время старения 0 минут означает, что адреса никогда не устареют, таймера нет."
    ]
  },
  {
    "time": [
      590.18,
      592.809
    ],
    "en": [
      "timer. But I’ll explain these later."
    ],
    "ru": [
      "таймер. Но я объясню это позже."
    ]
  },
  {
    "time": [
      592.809,
      595.91
    ],
    "en": [
      "Here we can see information about the MAC addresses."
    ],
    "ru": [
      "Здесь мы можем увидеть информацию об MAC-адресах."
    ]
  },
  {
    "time": [
      595.91,
      601.779
    ],
    "en": [
      "The maximum is 1, currently it knows 0, 0 have been manually configured, and there are"
    ],
    "ru": [
      "Максимум 1, в настоящее время он знает, что 0, 0 были настроены вручную, и есть"
    ]
  },
  {
    "time": [
      601.779,
      606.22
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
      601.779,
      606.22
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
      606.22,
      611.61
    ],
    "en": [
      "SW1 hasn’t received any traffic on this interface yet, so the last source address"
    ],
    "ru": [
      "SW1 еще не получил никакого трафика на этом интерфейсе, поэтому последний адрес источника"
    ]
  },
  {
    "time": [
      611.61,
      614.829
    ],
    "en": [
      "is all 0s, with VLAN number 0."
    ],
    "ru": [
      "все нули с номером VLAN 0."
    ]
  },
  {
    "time": [
      614.829,
      619.889
    ],
    "en": [
      "Finally, there have been no violations so this counter here is at 0."
    ],
    "ru": [
      "Наконец, нарушений не было, поэтому этот счетчик равен 0."
    ]
  },
  {
    "time": [
      619.889,
      625.49
    ],
    "en": [
      "Now I sent a ping from PC1 to R1, let’s see what happens to the output of this command."
    ],
    "ru": [
      "Теперь я отправил эхо-запрос с ПК1 на маршрутизатор R1, давайте посмотрим, что произойдет с выводом этой команды."
    ]
  },
  {
    "time": [
      625.49,
      629.319
    ],
    "en": [
      "I’ve highlighted the two places that have changed."
    ],
    "ru": [
      "Я выделил два места, которые изменились."
    ]
  },
  {
    "time": [
      629.319,
      635.36
    ],
    "en": [
      "Total MAC addresses has changed from 0 to 1, because SW1 learned PC1’s MAC address."
    ],
    "ru": [
      "Общее количество MAC-адресов изменилось с 0 на 1, поскольку SW1 узнал MAC-адрес ПК1."
    ]
  },
  {
    "time": [
      635.36,
      642.059
    ],
    "en": [
      "Note that the maximum is also 1, so SW1 won’t be able learn any more MAC addresses on the interface."
    ],
    "ru": [
      "Обратите внимание, что максимальное значение также равно 1, поэтому SW1 не сможет узнать больше MAC-адресов на интерфейсе."
    ]
  },
  {
    "time": [
      642.059,
      650.36
    ],
    "en": [
      "interface. Also, the last source address has changed to PC1’s MAC address, and the VLAN is 1, the default VLAN."
    ],
    "ru": [
      "интерфейс. Кроме того, последний адрес источника изменился на MAC-адрес ПК1, а VLAN - 1, VLAN по умолчанию."
    ]
  },
  {
    "time": [
      650.36,
      655.019
    ],
    "en": [
      "the default VLAN. Now let’s bring back PC2, and connect the cable to it instead."
    ],
    "ru": [
      "VLAN по умолчанию. Теперь вернемся к ПК2 и подключим к нему кабель."
    ]
  },
  {
    "time": [
      655.019,
      660.529
    ],
    "en": [
      "What will happen when PC2 tries to ping R1? Here’s what happens."
    ],
    "ru": [
      "Что произойдет, когда ПК2 попытается пропинговать R1? Вот что происходит."
    ]
  },
  {
    "time": [
      660.529,
      667.05
    ],
    "en": [
      "Here’s what happens. From the top of the output, the port status has changed from secure-up to secure-shutdown."
    ],
    "ru": [
      "Вот что происходит. В верхней части выходных данных статус порта изменился с безопасного на безопасное отключение."
    ]
  },
  {
    "time": [
      667.05,
      674.22
    ],
    "en": [
      "By the way, if you check SHOW INTERFACES STATUS, you will the status err-disabled that I mentioned earlier."
    ],
    "ru": [
      "Кстати, если вы отметите SHOW INTERFACES STATUS, вы получите статус err-disabled, о котором я упоминал ранее."
    ]
  },
  {
    "time": [
      674.22,
      678.129
    ],
    "en": [
      "earlier. But in the SHOW PORT-SECURITY INTERFACE command, it says secure-shutdown."
    ],
    "ru": [
      "ранее. Но в команде SHOW PORT-SECURITY INTERFACE написано secure-shutdown."
    ]
  },
  {
    "time": [
      678.129,
      682.829
    ],
    "en": [
      "Also, the total MAC addresses count has reset to 0."
    ],
    "ru": [
      "Кроме того, общее количество MAC-адресов сброшено до 0."
    ]
  },
  {
    "time": [
      682.829,
      688.189
    ],
    "en": [
      "So, it dynamically learned PC1’s MAC address as a secure MAC address, but after the port"
    ],
    "ru": [
      "Таким образом, он динамически узнал MAC-адрес ПК1 как безопасный MAC-адрес, но после того, как порт"
    ]
  },
  {
    "time": [
      688.189,
      690.999
    ],
    "en": [
      "was shutdown it was cleared."
    ],
    "ru": [
      "был выключен очистился."
    ]
  },
  {
    "time": [
      690.999,
      695.43
    ],
    "en": [
      "The last source address is PC2’s MAC address, B.B.B."
    ],
    "ru": [
      "Последний адрес источника - это MAC-адрес ПК2, B.B.B."
    ]
  },
  {
    "time": [
      695.43,
      698.259
    ],
    "en": [
      "And the security violation count is now 1."
    ],
    "ru": [
      "И количество нарушений безопасности теперь равно 1."
    ]
  },
  {
    "time": [
      698.259,
      704.129
    ],
    "en": [
      "Okay, so let’s see how to re-enable an interface that has been disabled by port security."
    ],
    "ru": [
      "Хорошо, давайте посмотрим, как повторно включить интерфейс, который был отключен безопасностью порта."
    ]
  },
  {
    "time": [
      704.129,
      709.22
    ],
    "en": [
      "Okay, here’s how to manually re-enable the interface."
    ],
    "ru": [
      "Хорошо, вот как снова включить интерфейс вручную."
    ]
  },
  {
    "time": [
      709.22,
      714.899
    ],
    "en": [
      "But before entering any commands, you should first disconnect the unauthorized device."
    ],
    "ru": [
      "Но перед вводом каких-либо команд следует предварительно отключить неавторизованное устройство."
    ]
  },
  {
    "time": [
      714.899,
      719.999
    ],
    "en": [
      "After disconnecting the unauthorized device, you should then enter the commands on the interface."
    ],
    "ru": [
      "После отключения неавторизованного устройства вы должны ввести команды в интерфейсе."
    ]
  },
  {
    "time": [
      719.999,
      727.41
    ],
    "en": [
      "interface. SHUTDOWN, which puts it in administratively disabled mode, and then the NO SHUTDOWN to re-enable it."
    ],
    "ru": [
      "интерфейс. SHUTDOWN, который переводит его в административно отключенный режим, а затем NO SHUTDOWN, чтобы снова включить его."
    ]
  },
  {
    "time": [
      727.41,
      730.86
    ],
    "en": [
      "re-enable it. Let’s check out SHOW PORT-SECURITY INTERFACE."
    ],
    "ru": [
      "снова включите его. Давайте посмотрим на ПОКАЗАТЬ ИНТЕРФЕЙС БЕЗОПАСНОСТИ ПОРТА."
    ]
  },
  {
    "time": [
      730.86,
      733.699
    ],
    "en": [
      "The port status is back to secure-up."
    ],
    "ru": [
      "Статус порта вернулся к безопасному."
    ]
  },
  {
    "time": [
      733.699,
      739.1
    ],
    "en": [
      "The last source address, which was PC2’s MAC address before, has been erased."
    ],
    "ru": [
      "Последний адрес источника, который ранее был MAC-адресом ПК2, был удален."
    ]
  },
  {
    "time": [
      739.1,
      744.8
    ],
    "en": [
      "And at the bottom, the security violation count actually was reset too when the interface came back up."
    ],
    "ru": [
      "И внизу, счетчик нарушений безопасности тоже был сброшен, когда интерфейс снова заработал."
    ]
  },
  {
    "time": [
      744.8,
      750.0889999999999
    ],
    "en": [
      "came back up. So, with the default violation mode, shutdown, this security violation count shouldn’t"
    ],
    "ru": [
      "вернулся. Таким образом, с режимом нарушения по умолчанию, выключением, это количество нарушений безопасности не должно"
    ]
  },
  {
    "time": [
      750.0889999999999,
      751.54
    ],
    "en": [
      "go higher than 1."
    ],
    "ru": [
      "подняться выше 1."
    ]
  },
  {
    "time": [
      751.54,
      759.07
    ],
    "en": [
      "Now, there’s another way to re-enable an err-disabled interface, that is ErrDisable recovery."
    ],
    "ru": [
      "Теперь есть еще один способ снова включить интерфейс с отключенной ошибкой - это восстановление с помощью ErrDisable."
    ]
  },
  {
    "time": [
      759.07,
      765.49
    ],
    "en": [
      "recovery. It causes err-disabled interfaces to be automatically re-enabled after a certain period of time."
    ],
    "ru": [
      "восстановление. Это вызывает автоматическое повторное включение интерфейсов с отключенной ошибкой через определенный период времени."
    ]
  },
  {
    "time": [
      765.49,
      769.889
    ],
    "en": [
      "There are actually various reasons an interface can enter an err-disabled state."
    ],
    "ru": [
      "На самом деле существуют различные причины, по которым интерфейс может перейти в состояние отключения из-за ошибки."
    ]
  },
  {
    "time": [
      769.889,
      774.949
    ],
    "en": [
      "I used the command SHOW ERRDISABLE RECOVERY, which lists all of them."
    ],
    "ru": [
      "Я использовал команду SHOW ERRDISABLE RECOVERY, в которой перечислены все из них."
    ]
  },
  {
    "time": [
      774.949,
      780.939
    ],
    "en": [
      "There are so many that I had to omit a lot of them, the output doesn’t fit on one screen."
    ],
    "ru": [
      "Их так много, что мне пришлось пропустить многие из них, вывод не умещается на одном экране."
    ]
  },
  {
    "time": [
      780.939,
      788.56
    ],
    "en": [
      "On the left is each err-disable reason, and on the right it will show whether or not err-disable recovery is enabled."
    ],
    "ru": [
      "Слева указана каждая причина отключения из-за ошибки, а справа показано, включено ли восстановление с отключением из-за ошибки."
    ]
  },
  {
    "time": [
      788.56,
      795.829
    ],
    "en": [
      "recovery is enabled. By default, it is disabled for all reasons, so err-disabled interfaces will not be automatically recovered."
    ],
    "ru": [
      "восстановление включено. По умолчанию он отключен по всем причинам, поэтому интерфейсы с отключенными ошибками не восстанавливаются автоматически."
    ]
  },
  {
    "time": [
      795.829,
      802.209
    ],
    "en": [
      "recovered. The one we’re looking for is psecure-violation, that means port-security violation."
    ],
    "ru": [
      "выздоровел. То, что мы ищем, - это нарушение безопасности порта, то есть нарушение безопасности порта."
    ]
  },
  {
    "time": [
      802.209,
      804.8
    ],
    "en": [
      "Notice the default timer is 300 seconds."
    ],
    "ru": [
      "Обратите внимание, что таймер по умолчанию составляет 300 секунд."
    ]
  },
  {
    "time": [
      804.8,
      811.94
    ],
    "en": [
      "So, every 5 minutes by default, all err-disabled interfaces will re-enabled, but only if err-disable"
    ],
    "ru": [
      "Таким образом, каждые 5 минут по умолчанию все интерфейсы с отключенным err-отключением будут повторно включены, но только если err-disable"
    ]
  },
  {
    "time": [
      811.94,
      816.2
    ],
    "en": [
      "recovery has been enabled for the cause of the interface’s disablement."
    ],
    "ru": [
      "восстановление было включено по причине отключения интерфейса."
    ]
  },
  {
    "time": [
      816.2,
      820.47
    ],
    "en": [
      "So, let’s enable it for port security violations."
    ],
    "ru": [
      "Итак, давайте включим его для нарушений безопасности портов."
    ]
  },
  {
    "time": [
      820.47,
      822.9590000000001
    ],
    "en": [
      "Here’s how to enable it."
    ],
    "ru": [
      "Вот как это сделать."
    ]
  },
  {
    "time": [
      822.9590000000001,
      830.66
    ],
    "en": [
      "The command is ERRDISABLE RECOVERY CAUSE, followed by the cause, which is PSECURE-VIOLATION in this case."
    ],
    "ru": [
      "Команда - ERRDISABLE RECOVERY CAUSE, за которой следует причина, которой в данном случае является PSECURE-VIOLATION."
    ]
  },
  {
    "time": [
      830.66,
      836.11
    ],
    "en": [
      "in this case. And just to demonstrate the command, I shortened the timer with ERRDISABLE RECOVERY INTERVAL,"
    ],
    "ru": [
      "в этом случае. И чтобы продемонстрировать команду, я сократил таймер на ERRDISABLE RECOVERY INTERVAL,"
    ]
  },
  {
    "time": [
      836.11,
      838.87
    ],
    "en": [
      "and then specified 180 seconds."
    ],
    "ru": [
      "а потом указал 180 секунд."
    ]
  },
  {
    "time": [
      838.87,
      842.529
    ],
    "en": [
      "Here’s SHOW ERRDISABLE RECOVERY again."
    ],
    "ru": [
      "Вот снова ПОКАЗАТЬ ОШИБКУ ВОССТАНОВЛЕНИЯ."
    ]
  },
  {
    "time": [
      842.529,
      847.489
    ],
    "en": [
      "Notice that the psecure-violation recovery timer is now enabled, and the timer interval"
    ],
    "ru": [
      "Обратите внимание, что таймер восстановления после нарушения безопасности теперь включен, а интервал таймера"
    ]
  },
  {
    "time": [
      847.489,
      851.11
    ],
    "en": [
      "is 180 seconds, as configured."
    ],
    "ru": [
      "составляет 180 секунд, как настроено."
    ]
  },
  {
    "time": [
      851.11,
      856.62
    ],
    "en": [
      "And just to demonstrate I caused G0/1 to become errdisabled again, and you can see that it"
    ],
    "ru": [
      "И просто для демонстрации я снова отключил G0 / 1 из-за ошибки, и вы можете видеть, что это"
    ]
  },
  {
    "time": [
      856.62,
      861.639
    ],
    "en": [
      "will be enabled at the next timeout, and there are 149 seconds left."
    ],
    "ru": [
      "будет включен в следующий тайм-аут, и осталось 149 секунд."
    ]
  },
  {
    "time": [
      861.639,
      866.889
    ],
    "en": [
      "So, this is a useful feature, but it’s useless if you don’t remove the device that caused"
    ],
    "ru": [
      "Итак, это полезная функция, но она бесполезна, если вы не удалите устройство, вызвавшее"
    ]
  },
  {
    "time": [
      866.889,
      869.499
    ],
    "en": [
      "the interface to enter the err-disabled state."
    ],
    "ru": [
      "интерфейс для входа в состояние отключения из-за ошибки."
    ]
  },
  {
    "time": [
      869.499,
      872.929
    ],
    "en": [
      "So, that will always be step 1."
    ],
    "ru": [
      "Итак, это всегда будет шаг 1."
    ]
  },
  {
    "time": [
      872.929,
      877.39
    ],
    "en": [
      "Disconnect the unauthorized device, and then either manually re-enable the interface, or"
    ],
    "ru": [
      "Отключите неавторизованное устройство, а затем либо вручную повторно включите интерфейс, либо"
    ]
  },
  {
    "time": [
      877.39,
      881.6
    ],
    "en": [
      "let errdisable recovery do it for you automatically."
    ],
    "ru": [
      "пусть восстановление после сбоя сделает это за вас автоматически."
    ]
  },
  {
    "time": [
      881.6,
      885.019
    ],
    "en": [
      "What will happen if you don’t disconnect the unauthorized device?"
    ],
    "ru": [
      "Что будет, если вы не отключите неавторизованное устройство?"
    ]
  },
  {
    "time": [
      885.019,
      890.01
    ],
    "en": [
      "Well, if you manually configured the secure MAC address, the interface will simply become"
    ],
    "ru": [
      "Что ж, если вы вручную настроили безопасный MAC-адрес, интерфейс просто станет"
    ]
  },
  {
    "time": [
      890.01,
      895.19
    ],
    "en": [
      "disabled again when it receives another frame from the unauthorized device."
    ],
    "ru": [
      "снова отключается, когда он получает другой кадр от неавторизованного устройства."
    ]
  },
  {
    "time": [
      895.19,
      899.489
    ],
    "en": [
      "But if you let the switch dynamically learn the previous secure MAC address, it is cleared"
    ],
    "ru": [
      "Но если вы позволите коммутатору динамически запоминать предыдущий безопасный MAC-адрес, он будет очищен."
    ]
  },
  {
    "time": [
      899.489,
      902.009
    ],
    "en": [
      "when the interface is disabled."
    ],
    "ru": [
      "когда интерфейс отключен."
    ]
  },
  {
    "time": [
      902.009,
      906.72
    ],
    "en": [
      "When the interface is re-enabled, the unauthorized device’s MAC address might become the new"
    ],
    "ru": [
      "При повторном включении интерфейса MAC-адрес неавторизованного устройства может стать новым."
    ]
  },
  {
    "time": [
      906.72,
      911.709
    ],
    "en": [
      "secure MAC address on the interface, which is obviously not a good situation."
    ],
    "ru": [
      "безопасный MAC-адрес на интерфейсе, что явно не очень хорошо."
    ]
  },
  {
    "time": [
      911.709,
      915.929
    ],
    "en": [
      "So, remember to disconnect the unauthorized device."
    ],
    "ru": [
      "Итак, не забудьте отключить неавторизованное устройство."
    ]
  },
  {
    "time": [
      915.929,
      919.73
    ],
    "en": [
      "Okay, now let’s talk about those violation modes."
    ],
    "ru": [
      "Хорошо, теперь давайте поговорим об этих режимах нарушения."
    ]
  },
  {
    "time": [
      919.73,
      927.019
    ],
    "en": [
      "I just showed you the default mode, shutdown, and how to re-enable an interface shutdown by port security."
    ],
    "ru": [
      "Я только что показал вам режим по умолчанию, выключение и как снова включить выключение интерфейса с помощью безопасности порта."
    ]
  },
  {
    "time": [
      927.019,
      930.889
    ],
    "en": [
      "by port security. But there are three different violation modes that determine what the switch will do if"
    ],
    "ru": [
      "по безопасности порта. Но есть три различных режима нарушения, которые определяют, что переключатель будет делать, если"
    ]
  },
  {
    "time": [
      930.889,
      935.769
    ],
    "en": [
      "an unauthorized frame enters an interface configured with port security."
    ],
    "ru": [
      "неавторизованный фрейм попадает в интерфейс, настроенный для защиты порта."
    ]
  },
  {
    "time": [
      935.769,
      938.269
    ],
    "en": [
      "The first is the default, shutdown."
    ],
    "ru": [
      "Первый - выключение по умолчанию."
    ]
  },
  {
    "time": [
      938.269,
      943.569
    ],
    "en": [
      "It effectively shuts down the port by placing it in an err-disabled state if an unauthorized"
    ],
    "ru": [
      "Он эффективно отключает порт, переводя его в состояние отключения из-за ошибки, если неавторизованный"
    ]
  },
  {
    "time": [
      943.569,
      946.029
    ],
    "en": [
      "frame enters the port."
    ],
    "ru": [
      "фрейм поступает в порт."
    ]
  },
  {
    "time": [
      946.029,
      953.3389999999999
    ],
    "en": [
      "It will also generate a Syslog and/or SNMP message to let you know that port security disabled the interface."
    ],
    "ru": [
      "Он также будет генерировать сообщение системного журнала и / или SNMP, чтобы вы знали, что безопасность порта отключила интерфейс."
    ]
  },
  {
    "time": [
      953.3389999999999,
      959.81
    ],
    "en": [
      "disabled the interface. However, after the interface is down it won’t continue generating messages even if the unauthorized"
    ],
    "ru": [
      "отключил интерфейс. Однако после того, как интерфейс не работает, он не будет продолжать генерировать сообщения, даже если неавторизованный"
    ]
  },
  {
    "time": [
      959.81,
      963.189
    ],
    "en": [
      "device continues trying to send traffic."
    ],
    "ru": [
      "устройство продолжает попытки отправить трафик."
    ]
  },
  {
    "time": [
      963.189,
      967.759
    ],
    "en": [
      "Only one message is generated to say that the port was disabled."
    ],
    "ru": [
      "Создается только одно сообщение о том, что порт отключен."
    ]
  },
  {
    "time": [
      967.759,
      972.24
    ],
    "en": [
      "The violation counter is set to 1 when the interface is disabled, although it will be"
    ],
    "ru": [
      "Счетчик нарушений устанавливается на 1, когда интерфейс отключен, хотя он будет"
    ]
  },
  {
    "time": [
      972.24,
      976.639
    ],
    "en": [
      "reset to 0 when the interface is re-enabled, as you saw before."
    ],
    "ru": [
      "сбрасывается в 0 при повторном включении интерфейса, как вы видели ранее."
    ]
  },
  {
    "time": [
      976.639,
      980.309
    ],
    "en": [
      "Okay, the next violation mode is restrict."
    ],
    "ru": [
      "Хорошо, следующий режим нарушения - ограниченный."
    ]
  },
  {
    "time": [
      980.309,
      983.899
    ],
    "en": [
      "The switch will discard traffic from unauthorized MAC addresses."
    ],
    "ru": [
      "Коммутатор отбрасывает трафик с неавторизованных MAC-адресов."
    ]
  },
  {
    "time": [
      983.899,
      987.43
    ],
    "en": [
      "However, the interface is not disabled."
    ],
    "ru": [
      "Однако интерфейс не отключен."
    ]
  },
  {
    "time": [
      987.43,
      992.129
    ],
    "en": [
      "Devices with authorized MAC addresses will still be able to use the interface."
    ],
    "ru": [
      "Устройства с авторизованными MAC-адресами по-прежнему смогут использовать интерфейс."
    ]
  },
  {
    "time": [
      992.129,
      999.279
    ],
    "en": [
      "The switch generates a syslog and/or SNMP message each time an unauthorized MAC address is detected."
    ],
    "ru": [
      "Коммутатор генерирует сообщение системного журнала и / или SNMP каждый раз, когда обнаруживается неавторизованный MAC-адрес."
    ]
  },
  {
    "time": [
      999.279,
      1003.42
    ],
    "en": [
      "is detected. And the violation counter is incremented by 1 for each unauthorized frame."
    ],
    "ru": [
      "обнаружен. Счетчик нарушений увеличивается на 1 для каждого неавторизованного кадра."
    ]
  },
  {
    "time": [
      1003.42,
      1008.629
    ],
    "en": [
      "Okay, that’s restrict mode, now the last one. Protect mode."
    ],
    "ru": [
      "Хорошо, это ограниченный режим, теперь последний. Защитный режим."
    ]
  },
  {
    "time": [
      1008.629,
      1015.249
    ],
    "en": [
      "Protect mode. Like restrict mode, the switch discards traffic from unauthorized MAC addresses, and the interface is not disabled."
    ],
    "ru": [
      "Защитный режим. Как и в режиме ограничения, коммутатор отбрасывает трафик с неавторизованных MAC-адресов, и интерфейс не отключается."
    ]
  },
  {
    "time": [
      1015.249,
      1021.17
    ],
    "en": [
      "is not disabled. However, it does not generate syslog or SNMP messages for unauthorized traffic."
    ],
    "ru": [
      "не отключен. Однако он не генерирует сообщения системного журнала или SNMP для неавторизованного трафика."
    ]
  },
  {
    "time": [
      1021.17,
      1024.12
    ],
    "en": [
      "And it doesn’t increment the violation counter either."
    ],
    "ru": [
      "И это тоже не увеличивает счетчик нарушений."
    ]
  },
  {
    "time": [
      1024.12,
      1027.03
    ],
    "en": [
      "It just silently discards unauthorized traffic."
    ],
    "ru": [
      "Он просто молча отбрасывает неавторизованный трафик."
    ]
  },
  {
    "time": [
      1027.03,
      1032.61
    ],
    "en": [
      "Okay, so we already saw the shutdown mode, let’s look at the other two."
    ],
    "ru": [
      "Итак, мы уже видели режим выключения, давайте посмотрим на два других."
    ]
  },
  {
    "time": [
      1032.61,
      1035.87
    ],
    "en": [
      "Here’s the restrict violation mode."
    ],
    "ru": [
      "Вот режим ограничения ограничений."
    ]
  },
  {
    "time": [
      1035.87,
      1042.16
    ],
    "en": [
      "I’m starting from a fresh port-security configuration, so first I enable port-security."
    ],
    "ru": [
      "Я начинаю с новой конфигурации безопасности порта, поэтому сначала включаю безопасность порта."
    ]
  },
  {
    "time": [
      1042.16,
      1048.21
    ],
    "en": [
      "This time, I manually authorized PC1’s MAC address with SWITCHPORT PORT-SECURITY MAC-ADDRESS,"
    ],
    "ru": [
      "На этот раз я вручную авторизовал MAC-адрес ПК1 с помощью MAC-ADDRESS PORT-SECURITY SWITCHPORT,"
    ]
  },
  {
    "time": [
      1048.21,
      1050.18
    ],
    "en": [
      "followed by PC1’s MAC address."
    ],
    "ru": [
      "за которым следует MAC-адрес ПК1."
    ]
  },
  {
    "time": [
      1050.18,
      1053.88
    ],
    "en": [
      "And here’s how to enable restrict mode."
    ],
    "ru": [
      "А вот как включить ограниченный режим."
    ]
  },
  {
    "time": [
      1053.88,
      1057.48
    ],
    "en": [
      "SWITCHPORT PORT-SECURITY VIOLATION RESTRICT."
    ],
    "ru": [
      "ОГРАНИЧЕНИЕ НА НАРУШЕНИЕ БЕЗОПАСНОСТИ ПОРТА SWITCHPORT."
    ]
  },
  {
    "time": [
      1057.48,
      1063.12
    ],
    "en": [
      "Then I tried to ping R1 from PC2, and I got a bunch of syslog messages like this, which"
    ],
    "ru": [
      "Затем я попытался выполнить эхо-запрос R1 с ПК2 и получил кучу таких сообщений системного журнала, которые"
    ]
  },
  {
    "time": [
      1063.12,
      1070.14
    ],
    "en": [
      "tells us that a security violation occurred, caused by PC2’s MAC address, on the G0/1 interface."
    ],
    "ru": [
      "сообщает нам, что произошло нарушение безопасности, вызванное MAC-адресом ПК2 на интерфейсе G0 / 1."
    ]
  },
  {
    "time": [
      1070.14,
      1073.77
    ],
    "en": [
      "interface. Let’s check SHOW PORT-SECURITY INTERFACE."
    ],
    "ru": [
      "интерфейс. Давайте проверим ПОКАЗАТЬ ИНТЕРФЕЙС БЕЗОПАСНОСТИ ПОРТА."
    ]
  },
  {
    "time": [
      1073.77,
      1077.71
    ],
    "en": [
      "First, notice the violation mode of restrict."
    ],
    "ru": [
      "Во-первых, обратите внимание на нарушение режима ограничения."
    ]
  },
  {
    "time": [
      1077.71,
      1082.74
    ],
    "en": [
      "And you can see that the violation count has gone to twelve because I tried to send traffic from PC2."
    ],
    "ru": [
      "И вы можете видеть, что количество нарушений увеличилось до двенадцати, потому что я пытался отправить трафик с ПК2."
    ]
  },
  {
    "time": [
      1082.74,
      1087.5
    ],
    "en": [
      "from PC2. However, the port status is secure-up, not secure-shutdown."
    ],
    "ru": [
      "с ПК2. Однако статус порта - защищенный, а не безопасное завершение работы."
    ]
  },
  {
    "time": [
      1087.5,
      1093.07
    ],
    "en": [
      "So, if I were to connect the cable back to PC1, it would still be able to send traffic,"
    ],
    "ru": [
      "Итак, если бы я снова подключил кабель к ПК1, он все равно мог бы отправлять трафик,"
    ]
  },
  {
    "time": [
      1093.07,
      1098.51
    ],
    "en": [
      "no problem, because the interface is still up and PC1’s MAC address is authorized."
    ],
    "ru": [
      "нет проблем, потому что интерфейс все еще работает и MAC-адрес ПК1 авторизован."
    ]
  },
  {
    "time": [
      1098.51,
      1101.47
    ],
    "en": [
      "Okay, that’s the restrict violation mode."
    ],
    "ru": [
      "Хорошо, это режим нарушения ограничений."
    ]
  },
  {
    "time": [
      1101.47,
      1104.71
    ],
    "en": [
      "And here’s the last one, protect."
    ],
    "ru": [
      "А вот и последний, защищай."
    ]
  },
  {
    "time": [
      1104.71,
      1110.89
    ],
    "en": [
      "We’re starting with a fresh configuration again for this example, so make sure to enable port security."
    ],
    "ru": [
      "Мы снова начинаем с новой конфигурации для этого примера, поэтому не забудьте включить защиту порта."
    ]
  },
  {
    "time": [
      1110.89,
      1114.82
    ],
    "en": [
      "port security. I once again manually authorized PC1’s MAC address."
    ],
    "ru": [
      "безопасность порта. Я снова вручную авторизовал MAC-адрес ПК1."
    ]
  },
  {
    "time": [
      1114.82,
      1119.51
    ],
    "en": [
      "And then I configured SWITCHPORT PORT-SECURITY VIOLATION PROTECT."
    ],
    "ru": [
      "И затем я настроил ЗАЩИТУ ОТ НАРУШЕНИЯ БЕЗОПАСНОСТИ ПОРТА SWITCHPORT."
    ]
  },
  {
    "time": [
      1119.51,
      1121.93
    ],
    "en": [
      "And then sent some traffic from PC2."
    ],
    "ru": [
      "А затем отправил некоторый трафик с ПК2."
    ]
  },
  {
    "time": [
      1121.93,
      1127.15
    ],
    "en": [
      "PC2’s pings failed, but there were no syslog messages on SW1."
    ],
    "ru": [
      "Эхо-запрос PC2 не прошел, но сообщений системного журнала на SW1 не было."
    ]
  },
  {
    "time": [
      1127.15,
      1129.73
    ],
    "en": [
      "Let’s check this command again."
    ],
    "ru": [
      "Давайте еще раз проверим эту команду."
    ]
  },
  {
    "time": [
      1129.73,
      1136.05
    ],
    "en": [
      "The port status is secure-up, the violation mode is protect, and the violation counter is 0."
    ],
    "ru": [
      "Статус порта - защищенный, режим нарушения - защищенный, счетчик нарушений - 0."
    ]
  },
  {
    "time": [
      1136.05,
      1143.99
    ],
    "en": [
      "is 0. So, SW1 discarded the traffic from PC2, but didn’t display any syslog messages or increment the violation count."
    ],
    "ru": [
      "равен 0. Таким образом, SW1 отклонил трафик от ПК2, но не отображал никаких сообщений системного журнала и не увеличивал счетчик нарушений."
    ]
  },
  {
    "time": [
      1143.99,
      1146.78
    ],
    "en": [
      "the violation count. That’s the protect violation mode."
    ],
    "ru": [
      "количество нарушений. Это режим нарушения защиты."
    ]
  },
  {
    "time": [
      1146.78,
      1151.86
    ],
    "en": [
      "OK, here’s that summary of the violation modes again."
    ],
    "ru": [
      "Хорошо, вот еще раз сводка режимов нарушения."
    ]
  },
  {
    "time": [
      1151.86,
      1157.31
    ],
    "en": [
      "These are how you control what the switch does when a port-security violation occurs."
    ],
    "ru": [
      "Вот как вы управляете действиями коммутатора при нарушении защиты порта."
    ]
  },
  {
    "time": [
      1157.31,
      1161.28
    ],
    "en": [
      "You should definitely learn the actions taken by each violation mode, and remember that"
    ],
    "ru": [
      "Вы обязательно должны изучить действия, предпринимаемые каждым режимом нарушения, и помнить, что"
    ]
  },
  {
    "time": [
      1161.28,
      1164.26
    ],
    "en": [
      "shutdown is the default mode."
    ],
    "ru": [
      "выключение - это режим по умолчанию."
    ]
  },
  {
    "time": [
      1164.26,
      1169.83
    ],
    "en": [
      "Okay, moving down to the next part of the SHOW PORT-SECURITY INTERFACE command, let’s"
    ],
    "ru": [
      "Хорошо, перейдем к следующей части команды SHOW PORT-SECURITY INTERFACE, давайте"
    ]
  },
  {
    "time": [
      1169.83,
      1172.85
    ],
    "en": [
      "check out secure MAC address aging."
    ],
    "ru": [
      "проверьте устаревание безопасного MAC-адреса."
    ]
  },
  {
    "time": [
      1172.85,
      1177.33
    ],
    "en": [
      "By the way, MAC addresses dynamically learned or statically configured on a port-security"
    ],
    "ru": [
      "Кстати, MAC-адреса изучаются динамически или статически настраиваются на порте-безопасности."
    ]
  },
  {
    "time": [
      1177.33,
      1181.58
    ],
    "en": [
      "enabled port are called secure MAC addresses."
    ],
    "ru": [
      "включенный порт называется безопасным MAC-адресом."
    ]
  },
  {
    "time": [
      1181.58,
      1184.92
    ],
    "en": [
      "By default, secure MAC addresses will not age out."
    ],
    "ru": [
      "По умолчанию безопасные MAC-адреса не устаревают."
    ]
  },
  {
    "time": [
      1184.92,
      1189.6
    ],
    "en": [
      "There is no timer, they are permanent unless you manually delete the learned MAC address"
    ],
    "ru": [
      "Таймера нет, они работают постоянно, если вы вручную не удалите изученный MAC-адрес."
    ]
  },
  {
    "time": [
      1189.6,
      1192.31
    ],
    "en": [
      "or the port is disabled and then re-enabled."
    ],
    "ru": [
      "или порт отключен, а затем снова включен."
    ]
  },
  {
    "time": [
      1192.31,
      1196.18
    ],
    "en": [
      "That’s what the aging time of 0 minutes means."
    ],
    "ru": [
      "Вот что означает время выдержки 0 минут."
    ]
  },
  {
    "time": [
      1196.18,
      1201.15
    ],
    "en": [
      "However, you can configure this timer with the command SWITCHPORT PORT-SECURITY AGING"
    ],
    "ru": [
      "Однако вы можете настроить этот таймер с помощью команды SWITCHPORT PORT-SECURITY AGING."
    ]
  },
  {
    "time": [
      1201.15,
      1204.2
    ],
    "en": [
      "TIME, and then the time in minutes."
    ],
    "ru": [
      "ВРЕМЯ, а затем время в минутах."
    ]
  },
  {
    "time": [
      1204.2,
      1209.31
    ],
    "en": [
      "If you do configure an aging time, the default aging type is absolute."
    ],
    "ru": [
      "Если вы все же настраиваете время устаревания, тип устаревания по умолчанию будет абсолютным."
    ]
  },
  {
    "time": [
      1209.31,
      1211.26
    ],
    "en": [
      "Let me explain what that means."
    ],
    "ru": [
      "Позвольте мне объяснить, что это значит."
    ]
  },
  {
    "time": [
      1211.26,
      1216.95
    ],
    "en": [
      "Absolute aging means that, after the secure MAC address is learned, the aging timer starts"
    ],
    "ru": [
      "Абсолютное устаревание означает, что после изучения безопасного MAC-адреса запускается таймер устаревания."
    ]
  },
  {
    "time": [
      1216.95,
      1221.93
    ],
    "en": [
      "and the MAC address is removed after the timer expires, even if the switch continues receiving"
    ],
    "ru": [
      "и MAC-адрес удаляется по истечении таймера, даже если коммутатор продолжает получать"
    ]
  },
  {
    "time": [
      1221.93,
      1226.18
    ],
    "en": [
      "frames from that source MAC address while it is counting down."
    ],
    "ru": [
      "кадры с этого исходного MAC-адреса, пока идет обратный отсчет."
    ]
  },
  {
    "time": [
      1226.18,
      1231.76
    ],
    "en": [
      "However, after the MAC address ages out it can then immediately be re-learned if another"
    ],
    "ru": [
      "Однако после того, как MAC-адрес устареет, его можно сразу же повторно узнать, если другой"
    ]
  },
  {
    "time": [
      1231.76,
      1235.45
    ],
    "en": [
      "frame with that source MAC is received."
    ],
    "ru": [
      "фрейм с этим исходным MAC получен."
    ]
  },
  {
    "time": [
      1235.45,
      1238.12
    ],
    "en": [
      "The other aging type is inactivity."
    ],
    "ru": [
      "Другой тип старения - это бездействие."
    ]
  },
  {
    "time": [
      1238.12,
      1241.18
    ],
    "en": [
      "This is like regular MAC address aging."
    ],
    "ru": [
      "Это похоже на устаревание обычного MAC-адреса."
    ]
  },
  {
    "time": [
      1241.18,
      1245.67
    ],
    "en": [
      "After the MAC address is learned the aging timer starts, but it is reset every time a"
    ],
    "ru": [
      "После того, как MAC-адрес известен, таймер старения запускается, но он сбрасывается каждый раз, когда"
    ]
  },
  {
    "time": [
      1245.67,
      1248.86
    ],
    "en": [
      "frame from that source MAC address is received."
    ],
    "ru": [
      "получен кадр с этого исходного MAC-адреса."
    ]
  },
  {
    "time": [
      1248.86,
      1255.47
    ],
    "en": [
      "So, if the switch keeps receiving frames from that MAC address, it will never be aged out."
    ],
    "ru": [
      "Таким образом, если коммутатор продолжает получать кадры с этого MAC-адреса, он никогда не устареет."
    ]
  },
  {
    "time": [
      1255.47,
      1262.63
    ],
    "en": [
      "You can configure the aging type with SWITCHPORT PORT-SECURITY AGING TYPE, and then absolute or inactivity."
    ],
    "ru": [
      "Вы можете настроить тип устаревания с помощью SWITCHPORT PORT-SECURITY AGING TYPE, а затем абсолютное или бездействие."
    ]
  },
  {
    "time": [
      1262.63,
      1268.67
    ],
    "en": [
      "or inactivity. Now, by default only dynamically-learned secure MAC addresses will age out."
    ],
    "ru": [
      "или бездействие. Теперь по умолчанию будут устаревать только динамически полученные безопасные MAC-адреса."
    ]
  },
  {
    "time": [
      1268.67,
      1275.26
    ],
    "en": [
      "If you configure a MAC with SWITCHPORT PORT-SECURITY MAC-ADDRESS, which I showed you earlier, it won’t age out."
    ],
    "ru": [
      "Если вы сконфигурируете MAC с SWITCHPORT PORT-SECURITY MAC-ADDRESS, который я показал вам ранее, он не устареет."
    ]
  },
  {
    "time": [
      1275.26,
      1281.08
    ],
    "en": [
      "won’t age out. The command will remain in the running-config and the MAC will remain in the MAC address table."
    ],
    "ru": [
      "не стареет. Команда останется в рабочей конфигурации, а MAC-адрес останется в таблице MAC-адресов."
    ]
  },
  {
    "time": [
      1281.08,
      1286.11
    ],
    "en": [
      "table. But with the command SWITCHPORT PORT-SECURITY AGING STATIC, you can make the switch age"
    ],
    "ru": [
      "стол. Но с помощью команды SWITCHPORT PORT-SECURITY AGING STATIC вы можете сделать коммутатор устаревшим."
    ]
  },
  {
    "time": [
      1286.11,
      1289.14
    ],
    "en": [
      "out static secure MAC addresses, too."
    ],
    "ru": [
      "статические безопасные MAC-адреса тоже."
    ]
  },
  {
    "time": [
      1289.14,
      1293.24
    ],
    "en": [
      "The command will be removed from the running config and the address will be removed from"
    ],
    "ru": [
      "Команда будет удалена из запущенной конфигурации, а адрес будет удален из"
    ]
  },
  {
    "time": [
      1293.24,
      1297.14
    ],
    "en": [
      "the MAC address table if it ages out."
    ],
    "ru": [
      "таблица MAC-адресов, если она устарела."
    ]
  },
  {
    "time": [
      1297.14,
      1298.85
    ],
    "en": [
      "Let me show you those commands in the CLI."
    ],
    "ru": [
      "Позвольте мне показать вам эти команды в интерфейсе командной строки."
    ]
  },
  {
    "time": [
      1298.85,
      1305.42
    ],
    "en": [
      "I configured an aging time of 30 minutes, aging type of inactivity, and enabled aging"
    ],
    "ru": [
      "Я настроил время старения 30 минут, тип бездействия старения и включил старение"
    ]
  },
  {
    "time": [
      1305.42,
      1308.58
    ],
    "en": [
      "of static secure MAC addresses."
    ],
    "ru": [
      "статических безопасных MAC-адресов."
    ]
  },
  {
    "time": [
      1308.58,
      1315.52
    ],
    "en": [
      "Then I checked SHOW PORT-SECURITY INTERFACE G0/1 again, and you can see the output has changed now."
    ],
    "ru": [
      "Затем я снова проверил SHOW PORT-SECURITY INTERFACE G0 / 1, и теперь вы видите, что вывод изменился."
    ]
  },
  {
    "time": [
      1315.52,
      1321.47
    ],
    "en": [
      "changed now. Aging time 30 minutes, aging type inactivity, and securestatic address aging enabled."
    ],
    "ru": [
      "изменилось сейчас. Время старения 30 минут, неактивность типа старения и старение защищенного статического адреса включено."
    ]
  },
  {
    "time": [
      1321.47,
      1325.74
    ],
    "en": [
      "Okay, that’s all you really need to know about the timers."
    ],
    "ru": [
      "Хорошо, это все, что вам действительно нужно знать о таймерах."
    ]
  },
  {
    "time": [
      1325.74,
      1332.61
    ],
    "en": [
      "But before moving on to the next topic, let me show you one more useful command. SHOW PORT-SECURITY."
    ],
    "ru": [
      "Но прежде чем перейти к следующей теме, позвольте мне показать вам еще одну полезную команду. ПОКАЗАТЬ ПОРТ-БЕЗОПАСНОСТЬ."
    ]
  },
  {
    "time": [
      1332.61,
      1337.83
    ],
    "en": [
      "SHOW PORT-SECURITY. It displays which interfaces have port security enabled, the max and current number of secure"
    ],
    "ru": [
      "ПОКАЗАТЬ ПОРТ-БЕЗОПАСНОСТЬ. Он отображает, для каких интерфейсов включена защита портов, максимальное и текущее количество защищенных портов."
    ]
  },
  {
    "time": [
      1337.83,
      1344.01
    ],
    "en": [
      "addresses on those interfaces, their security violation count, and their security action."
    ],
    "ru": [
      "адреса на этих интерфейсах, их количество нарушений безопасности и их действия по обеспечению безопасности."
    ]
  },
  {
    "time": [
      1344.01,
      1348.69
    ],
    "en": [
      "In this case, I only have port security enabled on one port, but if you have it enabled on"
    ],
    "ru": [
      "В этом случае у меня включена защита порта только на одном порту, но если она у вас включена,"
    ]
  },
  {
    "time": [
      1348.69,
      1354.32
    ],
    "en": [
      "many this is a useful command to get an overview of your port security enabled interfaces."
    ],
    "ru": [
      "many это полезная команда для получения обзора интерфейсов с включенной защитой вашего порта."
    ]
  },
  {
    "time": [
      1354.32,
      1361.66
    ],
    "en": [
      "Next, here’s the last major topic of the video, sticky secure MAC addresses."
    ],
    "ru": [
      "Далее, последняя основная тема видео - закрепленные безопасные MAC-адреса."
    ]
  },
  {
    "time": [
      1361.66,
      1365.57
    ],
    "en": [
      "Sticky secure MAC address learning can be enabled with the following command."
    ],
    "ru": [
      "Прикрепленное обучение безопасного MAC-адреса можно включить с помощью следующей команды."
    ]
  },
  {
    "time": [
      1365.57,
      1369.5
    ],
    "en": [
      "SWITCHPORT PORT-SECURITY MAC-ADDRESS STICKY."
    ],
    "ru": [
      "МАК-АДРЕС БЕЗОПАСНОСТИ ПОРТА SWITCHPORT ЗАКРЫТ."
    ]
  },
  {
    "time": [
      1369.5,
      1375.08
    ],
    "en": [
      "When enabled, dynamically-learned secure MAC addresses will be added to the running config like this."
    ],
    "ru": [
      "Если этот параметр включен, динамически изученные безопасные MAC-адреса будут добавлены в текущую конфигурацию, как это."
    ]
  },
  {
    "time": [
      1375.08,
      1380.71
    ],
    "en": [
      "like this. So, if you look in the running config you’ll see a command like this automatically added,"
    ],
    "ru": [
      "нравится. Итак, если вы посмотрите на текущую конфигурацию, вы увидите, что такая команда добавляется автоматически,"
    ]
  },
  {
    "time": [
      1380.71,
      1386.07
    ],
    "en": [
      "SWITCHPORT PORT-SECURITY MAC-ADDRESS STICKY, and then the learned MAC address."
    ],
    "ru": [
      "SWITCHPORT PORT-SECURITY MAC-ADDRESS STICKY, а затем полученный MAC-адрес."
    ]
  },
  {
    "time": [
      1386.07,
      1392.13
    ],
    "en": [
      "These sticky secure MAC addresses will never age out, even if you enable static secure MAC address aging."
    ],
    "ru": [
      "Эти липкие безопасные MAC-адреса никогда не устареют, даже если вы включите старение статических безопасных MAC-адресов."
    ]
  },
  {
    "time": [
      1392.13,
      1397.37
    ],
    "en": [
      "MAC address aging. However, because they are added to the running-config, not the startup-config, you’ll need to save"
    ],
    "ru": [
      "Устаревание MAC-адреса. Однако, поскольку они добавляются в рабочую конфигурацию, а не в конфигурацию запуска, вам необходимо сохранить"
    ]
  },
  {
    "time": [
      1397.37,
      1402.12
    ],
    "en": [
      "the running-config to the startup-config to make them truly permanent, for example with"
    ],
    "ru": [
      "текущую конфигурацию в конфигурацию запуска, чтобы сделать их действительно постоянными, например, с помощью"
    ]
  },
  {
    "time": [
      1402.12,
      1404.73
    ],
    "en": [
      "the WRITE MEMORY command."
    ],
    "ru": [
      "команда WRITE MEMORY."
    ]
  },
  {
    "time": [
      1404.73,
      1411.28
    ],
    "en": [
      "If you don’t do that, they will be lost if the switch restarts, or is turned off and then on again."
    ],
    "ru": [
      "Если вы этого не сделаете, они будут потеряны при перезапуске переключателя или при выключении и повторном включении."
    ]
  },
  {
    "time": [
      1411.28,
      1416.62
    ],
    "en": [
      "then on again. When you issue the SWITCHPORT PORT-SECURITY MAC-ADDRESS sticky command, all current dynamically-learned"
    ],
    "ru": [
      "затем снова. Когда вы вводите команду закрепления MAC-ADDRESS SWITCHPORT PORT-SECURITY, все текущие динамически изученные"
    ]
  },
  {
    "time": [
      1416.62,
      1420.85
    ],
    "en": [
      "secure MAC addresses will be converted to sticky secure MAC addresses."
    ],
    "ru": [
      "безопасные MAC-адреса будут преобразованы в липкие безопасные MAC-адреса."
    ]
  },
  {
    "time": [
      1420.85,
      1424.47
    ],
    "en": [
      "So, they will be added to the running config."
    ],
    "ru": [
      "Итак, они будут добавлены в работающий конфиг."
    ]
  },
  {
    "time": [
      1424.47,
      1426.29
    ],
    "en": [
      "The opposite is true, too."
    ],
    "ru": [
      "Верно и обратное."
    ]
  },
  {
    "time": [
      1426.29,
      1430.56
    ],
    "en": [
      "If you remove sticky learning, sticky secure MAC addresses will be converted to regular"
    ],
    "ru": [
      "Если вы удалите липкое обучение, липкие безопасные MAC-адреса будут преобразованы в обычные."
    ]
  },
  {
    "time": [
      1430.56,
      1432.5
    ],
    "en": [
      "dynamic secure MAC addresses."
    ],
    "ru": [
      "динамические безопасные MAC-адреса."
    ]
  },
  {
    "time": [
      1432.5,
      1436.31
    ],
    "en": [
      "Okay, let’s check it out in the CLI."
    ],
    "ru": [
      "Хорошо, давайте проверим это в интерфейсе командной строки."
    ]
  },
  {
    "time": [
      1436.31,
      1440.6
    ],
    "en": [
      "So, as always I enabled port-security first."
    ],
    "ru": [
      "Итак, как всегда, я сначала включил защиту порта."
    ]
  },
  {
    "time": [
      1440.6,
      1447.94
    ],
    "en": [
      "Then I issued SWITCHPORT PORT-SECURITY MAC-ADDRESS STICKY, and sent a ping from PC1 to R1."
    ],
    "ru": [
      "Затем я выдал SWITCHPORT PORT-SECURITY MAC-ADDRESS STICKY и отправил эхо-запрос с ПК1 на R1."
    ]
  },
  {
    "time": [
      1447.94,
      1455.09
    ],
    "en": [
      "I then checked the G0/1 interface in the running-config, and as you can see an extra command was added."
    ],
    "ru": [
      "Затем я проверил интерфейс G0 / 1 в рабочей конфигурации, и, как вы можете видеть, была добавлена ​​дополнительная команда."
    ]
  },
  {
    "time": [
      1455.09,
      1459.38
    ],
    "en": [
      "SWITCHPORT PORT-SECURITY MAC-ADDRESS STICKY, and then PC1’s MAC address."
    ],
    "ru": [
      "КЛЕЙ MAC-АДРЕС БЕЗОПАСНОСТИ ПОРТА SWITCHPORT, а затем MAC-адрес ПК1."
    ]
  },
  {
    "time": [
      1459.38,
      1465.97
    ],
    "en": [
      "I didn’t configure that command, it was added automatically when PC1’s frame entered the interface."
    ],
    "ru": [
      "Я не настраивал эту команду, она добавлялась автоматически, когда фрейм ПК1 входил в интерфейс."
    ]
  },
  {
    "time": [
      1465.97,
      1472.1
    ],
    "en": [
      "the interface. So, sticky MAC addresses are basically a way of configuring static secure MAC addresses,"
    ],
    "ru": [
      "интерфейс. Итак, липкие MAC-адреса - это в основном способ настройки статических безопасных MAC-адресов,"
    ]
  },
  {
    "time": [
      1472.1,
      1474.15
    ],
    "en": [
      "without actually having to manually configure them"
    ],
    "ru": [
      "без необходимости вручную настраивать их"
    ]
  },
  {
    "time": [
      1474.15,
      1481.71
    ],
    "en": [
      "Okay, before moving on to review and the quiz, let me briefly mention the MAC address table."
    ],
    "ru": [
      "Хорошо, прежде чем перейти к обзору и тесту, позвольте мне вкратце упомянуть таблицу MAC-адресов."
    ]
  },
  {
    "time": [
      1481.71,
      1486.95
    ],
    "en": [
      "Secure MAC addresses will be added to the MAC address table like any other MAC address."
    ],
    "ru": [
      "Безопасные MAC-адреса будут добавлены в таблицу MAC-адресов, как и любой другой MAC-адрес."
    ]
  },
  {
    "time": [
      1486.95,
      1492.36
    ],
    "en": [
      "Sticky and static secure MAC addresses will have a type of static, and regular dynamically-learned"
    ],
    "ru": [
      "Прикрепленные и статические безопасные MAC-адреса будут иметь тип статического и регулярного динамического обучения."
    ]
  },
  {
    "time": [
      1492.36,
      1497.37
    ],
    "en": [
      "secure MAC addresses that aren’t sticky will have a type of dynamic."
    ],
    "ru": [
      "безопасные MAC-адреса, которые не являются закрепленными, будут иметь тип динамического типа."
    ]
  },
  {
    "time": [
      1497.37,
      1503.25
    ],
    "en": [
      "And you can view all secure MAC addresses in the table with SHOW MAC ADDRESS-TABLE SECURE."
    ],
    "ru": [
      "И вы можете просмотреть все безопасные MAC-адреса в таблице с помощью SHOW MAC ADDRESS-TABLE SECURE."
    ]
  },
  {
    "time": [
      1503.25,
      1509.49
    ],
    "en": [
      "I used the command, and here is PC1’s MAC address from the previous sticky MAC address example."
    ],
    "ru": [
      "Я использовал эту команду, и вот MAC-адрес ПК1 из предыдущего примера с закрепленным MAC-адресом."
    ]
  },
  {
    "time": [
      1509.49,
      1513.49
    ],
    "en": [
      "example. Notice the type of static, even though I didn’t actually statically configure it myself."
    ],
    "ru": [
      "пример. Обратите внимание на тип статики, хотя я на самом деле не настраивал его статически."
    ]
  },
  {
    "time": [
      1513.49,
      1516.03
    ],
    "en": [
      "It was dynamically learned."
    ],
    "ru": [
      "Это было динамически изучено."
    ]
  },
  {
    "time": [
      1516.03,
      1519.46
    ],
    "en": [
      "Here’s a summary of the commands we covered in this video."
    ],
    "ru": [
      "Вот краткое изложение команд, которые мы рассмотрели в этом видео."
    ]
  },
  {
    "time": [
      1519.46,
      1521.18
    ],
    "en": [
      "Lots of new commands!"
    ],
    "ru": [
      "Множество новых команд!"
    ]
  },
  {
    "time": [
      1521.18,
      1525.73
    ],
    "en": [
      "You’ll definitely want to experiment with these commands in a lab."
    ],
    "ru": [
      "Вы определенно захотите поэкспериментировать с этими командами в лабораторных условиях."
    ]
  },
  {
    "time": [
      1525.73,
      1529.73
    ],
    "en": [
      "Follow my packet tracer lab, and also try making your own."
    ],
    "ru": [
      "Следуйте за моей лабораторией по отслеживанию пакетов, а также попробуйте сделать свою собственную."
    ]
  },
  {
    "time": [
      1529.73,
      1534.94
    ],
    "en": [
      "If you don’t remember any of these commands, go back in the video to review."
    ],
    "ru": [
      "Если вы не помните ни одну из этих команд, вернитесь к видео для просмотра."
    ]
  },
  {
    "time": [
      1534.94,
      1538.8
    ],
    "en": [
      "Before moving on to the quiz, let’s review what we learned."
    ],
    "ru": [
      "Прежде чем перейти к викторине, давайте рассмотрим то, что мы узнали."
    ]
  },
  {
    "time": [
      1538.8,
      1542.69
    ],
    "en": [
      "First I gave an intro to port security, and explained its basic function."
    ],
    "ru": [
      "Сначала я рассказал о безопасности портов и объяснил их основные функции."
    ]
  },
  {
    "time": [
      1542.69,
      1548.04
    ],
    "en": [
      "Basically, it allows you to control what source MAC addresses, and how many source MAC addresses,"
    ],
    "ru": [
      "По сути, он позволяет вам контролировать, какие исходные MAC-адреса и сколько исходных MAC-адресов,"
    ]
  },
  {
    "time": [
      1548.04,
      1550.38
    ],
    "en": [
      "are allowed to enter a switch interface."
    ],
    "ru": [
      "разрешено входить в интерфейс коммутатора."
    ]
  },
  {
    "time": [
      1550.38,
      1555.0
    ],
    "en": [
      "I also briefly explained why we should use port security."
    ],
    "ru": [
      "Я также вкратце объяснил, почему мы должны использовать защиту портов."
    ]
  },
  {
    "time": [
      1555.0,
      1559.69
    ],
    "en": [
      "First of all, it allows us to prevent unauthorized devices from accessing the network."
    ],
    "ru": [
      "Прежде всего, это позволяет нам предотвратить доступ к сети неавторизованных устройств."
    ]
  },
  {
    "time": [
      1559.69,
      1564.41
    ],
    "en": [
      "And secondly, it helps defend against attacks such as the DHCP exhaustion attack I showed"
    ],
    "ru": [
      "А во-вторых, он помогает защититься от атак, таких как атака исчерпания DHCP, которую я показал."
    ]
  },
  {
    "time": [
      1564.41,
      1571.46
    ],
    "en": [
      "in a previous video, in which thousands of spoofed MAC addresses are used to send DHCP discover messages."
    ],
    "ru": [
      "в предыдущем видео, в котором тысячи поддельных MAC-адресов используются для отправки сообщений обнаружения DHCP."
    ]
  },
  {
    "time": [
      1571.46,
      1578.24
    ],
    "en": [
      "discover messages. Then, while explaining various aspects of port security, I also showed you how to configure it."
    ],
    "ru": [
      "обнаруживать сообщения. Затем, объясняя различные аспекты безопасности порта, я также показал вам, как ее настроить."
    ]
  },
  {
    "time": [
      1578.24,
      1582.47
    ],
    "en": [
      "it. Make sure to watch until the end of the quiz for a bonus question from Boson Software’s"
    ],
    "ru": [
      "Это. Обязательно просмотрите до конца викторины, чтобы узнать о бонусном вопросе от Boson Software’s"
    ]
  },
  {
    "time": [
      1582.47,
      1586.08
    ],
    "en": [
      "ExSim, my recommended practice exams for the CCNA."
    ],
    "ru": [
      "ExSim, я рекомендую практические экзамены для CCNA."
    ]
  },
  {
    "time": [
      1586.08,
      1591.28
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
      1591.28,
      1593.73
    ],
    "en": [
      "Examine the show command output below."
    ],
    "ru": [
      "Изучите выходные данные команды show ниже."
    ]
  },
  {
    "time": [
      1593.73,
      1597.06
    ],
    "en": [
      "How many secure MAC addresses were dynamically learned on the interface?"
    ],
    "ru": [
      "Сколько безопасных MAC-адресов было динамически изучено на интерфейсе?"
    ]
  },
  {
    "time": [
      1597.06,
      1603.49
    ],
    "en": [
      "Pause the video now to examine the output and select the best answer."
    ],
    "ru": [
      "Приостановите видео сейчас, чтобы изучить результат и выбрать лучший ответ."
    ]
  },
  {
    "time": [
      1603.49,
      1608.23
    ],
    "en": [
      "Okay, the answer is C, 3."
    ],
    "ru": [
      "Хорошо, ответ - C, 3."
    ]
  },
  {
    "time": [
      1608.23,
      1613.2
    ],
    "en": [
      "So, according to the output 4 total MAC addresses have been learned on the interface."
    ],
    "ru": [
      "Итак, согласно выходным данным, всего 4 MAC-адреса были изучены на интерфейсе."
    ]
  },
  {
    "time": [
      1613.2,
      1616.83
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
      1613.2,
      1616.83
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
      1616.83,
      1620.61
    ],
    "en": [
      "There are 3 sticky MAC addresses, what about them?"
    ],
    "ru": [
      "Есть 3 липких MAC-адреса, что с ними?"
    ]
  },
  {
    "time": [
      1620.61,
      1624.8
    ],
    "en": [
      "Although sticky MAC addresses are inserted into the running config like a static MAC"
    ],
    "ru": [
      "Хотя липкие MAC-адреса вставляются в текущую конфигурацию как статический MAC"
    ]
  },
  {
    "time": [
      1624.8,
      1631.09
    ],
    "en": [
      "address, and their type in the MAC address table is STATIC, they are actually dynamically learned."
    ],
    "ru": [
      "адреса, а их тип в таблице MAC-адресов - СТАТИЧЕСКИЙ, они фактически изучаются динамически."
    ]
  },
  {
    "time": [
      1631.09,
      1636.36
    ],
    "en": [
      "learned. So those 3 sticky MAC addresses were dynamically learned, and the answer is C, 3."
    ],
    "ru": [
      "научился. Итак, эти 3 закрепленных MAC-адреса были изучены динамически, и ответ - C, 3."
    ]
  },
  {
    "time": [
      1636.36,
      1640.3
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
      1640.3,
      1644.79
    ],
    "en": [
      "Which of the following occur when a port-security violation occurs in restrict mode?"
    ],
    "ru": [
      "Что из следующего происходит, когда нарушение безопасности порта происходит в ограниченном режиме?"
    ]
  },
  {
    "time": [
      1644.79,
      1652.62
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
      1644.79,
      1652.62
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
      1652.62,
      1662.5
    ],
    "en": [
      "Okay, the best answers are B, unauthorized traffic is discarded, and E, the violation counter is incremented."
    ],
    "ru": [
      "Хорошо, лучшие ответы: B, неавторизованный трафик отбрасывается, и E, счетчик нарушений увеличивается."
    ]
  },
  {
    "time": [
      1662.5,
      1666.62
    ],
    "en": [
      "counter is incremented. In addition, a syslog message and SNMP trap will be sent."
    ],
    "ru": [
      "счетчик увеличивается. Кроме того, будет отправлено сообщение системного журнала и прерывание SNMP."
    ]
  },
  {
    "time": [
      1666.62,
      1671.93
    ],
    "en": [
      "However, an SNMP Get message, as in D, will not be sent."
    ],
    "ru": [
      "Однако сообщение SNMP Get, как в D, не будет отправлено."
    ]
  },
  {
    "time": [
      1671.93,
      1676.99
    ],
    "en": [
      "GET messages are sent from the SNMP manager to the agent, not the agent to the manager."
    ],
    "ru": [
      "Сообщения GET отправляются от менеджера SNMP к агенту, а не от агента к менеджеру."
    ]
  },
  {
    "time": [
      1676.99,
      1682.21
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
      1682.21,
      1683.8
    ],
    "en": [
      "Examine the following output."
    ],
    "ru": [
      "Изучите следующий вывод."
    ]
  },
  {
    "time": [
      1683.8,
      1688.96
    ],
    "en": [
      "What will SW1 do when an unauthorized frame arrives on G0/1?"
    ],
    "ru": [
      "Что будет делать SW1, когда на G0 / 1 поступит неавторизованный фрейм?"
    ]
  },
  {
    "time": [
      1688.96,
      1694.94
    ],
    "en": [
      "Pause the video now to examine the output and select the best answer."
    ],
    "ru": [
      "Приостановите видео сейчас, чтобы изучить результат и выбрать лучший ответ."
    ]
  },
  {
    "time": [
      1694.94,
      1701.9
    ],
    "en": [
      "Okay, the best answer is A, unauthorized traffic will be dropped."
    ],
    "ru": [
      "Хорошо, лучший ответ - A, неавторизованный трафик будет отброшен."
    ]
  },
  {
    "time": [
      1701.9,
      1706.65
    ],
    "en": [
      "The violation mode is protect, which means that all unauthorized frames will be dropped."
    ],
    "ru": [
      "Режим нарушения защищен, что означает, что все неавторизованные кадры будут отброшены."
    ]
  },
  {
    "time": [
      1706.65,
      1710.58
    ],
    "en": [
      "However, the interface won’t be err-disabled."
    ],
    "ru": [
      "Однако интерфейс не будет отключен по ошибке."
    ]
  },
  {
    "time": [
      1710.58,
      1712.8
    ],
    "en": [
      "Authorized frames will still be forwarded."
    ],
    "ru": [
      "Авторизованные кадры все равно будут пересылаться."
    ]
  },
  {
    "time": [
      1712.8,
      1718.58
    ],
    "en": [
      "No syslog or SNMP messages will be sent, and the violation count won’t be incremented either."
    ],
    "ru": [
      "Сообщения системного журнала или SNMP отправляться не будут, а также не будет увеличиваться счетчик нарушений."
    ]
  },
  {
    "time": [
      1718.58,
      1722.96
    ],
    "en": [
      "either. Okay, let’s go to question 4."
    ],
    "ru": [
      "или. Хорошо, перейдем к вопросу 4."
    ]
  },
  {
    "time": [
      1722.96,
      1727.5
    ],
    "en": [
      "Which of the following will re-enable an interface that was disabled by port security?"
    ],
    "ru": [
      "Что из перечисленного приведет к повторному включению интерфейса, который был отключен безопасностью порта?"
    ]
  },
  {
    "time": [
      1727.5,
      1729.9
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
      1727.5,
      1729.9
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
      1729.9,
      1737.87
    ],
    "en": [
      "Okay, pause the video now to select the two best answers."
    ],
    "ru": [
      "Хорошо, приостановите видео, чтобы выбрать два лучших ответа."
    ]
  },
  {
    "time": [
      1737.87,
      1744.53
    ],
    "en": [
      "The best answers are A, SHUTDOWN and NO SHUTDOWN on the interface, and B, ERRDISABLE RECOVERY"
    ],
    "ru": [
      "Лучшие ответы: A, SHUTDOWN и NO SHUTDOWN на интерфейсе, и B, ERRDISABLE RECOVERY."
    ]
  },
  {
    "time": [
      1744.53,
      1748.33
    ],
    "en": [
      "CAUSE PSECURE-VIOLATION in global config mode."
    ],
    "ru": [
      "ПРИЧИНА НАРУШЕНИЯ БЕЗОПАСНОСТИ в режиме глобальной конфигурации."
    ]
  },
  {
    "time": [
      1748.33,
      1751.95
    ],
    "en": [
      "Either of these will work to re-enable the interface."
    ],
    "ru": [
      "Любой из них будет работать для повторного включения интерфейса."
    ]
  },
  {
    "time": [
      1751.95,
      1759.39
    ],
    "en": [
      "C, unplugging the unauthorized device, is incorrect because that alone will not re-enable the interface."
    ],
    "ru": [
      "C, отключение неавторизованного устройства, неверно, потому что одно это не приведет к повторному включению интерфейса."
    ]
  },
  {
    "time": [
      1759.39,
      1765.0
    ],
    "en": [
      "the interface. Note that, you should unplug the unauthorized device before the steps in A or B, but disconnecting"
    ],
    "ru": [
      "интерфейс. Обратите внимание, что вы должны отключить неавторизованное устройство перед действиями в A или B, но отключив"
    ]
  },
  {
    "time": [
      1765.0,
      1767.76
    ],
    "en": [
      "the device itself won’t re-enable the interface."
    ],
    "ru": [
      "само устройство не активирует интерфейс повторно."
    ]
  },
  {
    "time": [
      1767.76,
      1773.22
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
      1773.22,
      1775.4
    ],
    "en": [
      "Examine the following output."
    ],
    "ru": [
      "Изучите следующий вывод."
    ]
  },
  {
    "time": [
      1775.4,
      1780.65
    ],
    "en": [
      "What will happen when the switchport port-security command is issued on G0/1?"
    ],
    "ru": [
      "Что произойдет, если команда switchport port-security будет выдана на G0 / 1?"
    ]
  },
  {
    "time": [
      1780.65,
      1786.28
    ],
    "en": [
      "Pause the video now to examine the output and select the correct answer."
    ],
    "ru": [
      "Приостановите видео сейчас, чтобы изучить результат и выбрать правильный ответ."
    ]
  },
  {
    "time": [
      1786.28,
      1792.07
    ],
    "en": [
      "Okay, the answer is a, the command will be accepted."
    ],
    "ru": [
      "Хорошо, ответ - команда будет принята."
    ]
  },
  {
    "time": [
      1792.07,
      1797.81
    ],
    "en": [
      "The administrative mode of G0/1 is static access, so port security can be enabled."
    ],
    "ru": [
      "Административный режим G0 / 1 - статический доступ, поэтому можно включить защиту порта."
    ]
  },
  {
    "time": [
      1797.81,
      1804.67
    ],
    "en": [
      "However, if it was the default administrative mode of dynamic auto, the command would be rejected."
    ],
    "ru": [
      "Однако, если это был административный режим по умолчанию - динамический автоматический, команда будет отклонена."
    ]
  },
  {
    "time": [
      1804.67,
      1809.59
    ],
    "en": [
      "rejected. Port security can be configured on access ports or trunk ports, but they must be statically"
    ],
    "ru": [
      "отклоненный. Безопасность порта можно настроить на портах доступа или магистральных портах, но они должны быть статическими."
    ]
  },
  {
    "time": [
      1809.59,
      1813.54
    ],
    "en": [
      "configured with SWITCHPORT MODE ACCESS or SWITCHPORT MODE TRUNK."
    ],
    "ru": [
      "сконфигурирован с ДОСТУПОМ К РЕЖИМУ ПЕРЕКЛЮЧЕНИЯ или СТАНДАРТНЫМ РЕЖИМОМ ПЕРЕКЛЮЧЕНИЯ."
    ]
  },
  {
    "time": [
      1813.54,
      1816.36
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
      1816.36,
      1980.64
    ],
    "en": [
      "Now let’s take a look at a bonus question in Boson Software’s ExSim for CCNA."
    ],
    "ru": [
      "Теперь давайте рассмотрим дополнительный вопрос в ExSim от Boson Software для CCNA."
    ]
  },
  {
    "time": [
      1980.64,
      1984.06
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
      1984.06,
      1988.1
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
      1988.1,
      1992.72
    ],
    "en": [
      "There will also be a packet tracer practice lab, so you can get hands-on practice."
    ],
    "ru": [
      "Там же будет практическая лаборатория по отслеживанию пакетов, где вы сможете получить практическую практику."
    ]
  },
  {
    "time": [
      1992.72,
      1996.309
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
      1996.309,
      2000.83
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
      2000.83,
      2005.28
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
      2005.28,
      2011.68
    ],
    "en": [
      "Thank you to Samil, C Mohd, Scott, Martin, Khoa, Christopher, Tebogo, Anand, Pavel, Abraham,"
    ],
    "ru": [
      "Спасибо Samil, C Mohd, Scott, Martin, Khoa, Christopher, Tebogo, Anand, Pavel, Abraham,"
    ]
  },
  {
    "time": [
      2011.68,
      2018.36
    ],
    "en": [
      "Serge, Njoku, Viktor, Roger, Suki, Kenneth, Seamus, Brandon, Marcel, Kone, Donald, Gustavo,"
    ],
    "ru": [
      "Серж, Ньоку, Виктор, Роджер, Сьюки, Кеннет, Симус, Брэндон, Марсель, Коне, Дональд, Густаво,"
    ]
  },
  {
    "time": [
      2018.36,
      2024.48
    ],
    "en": [
      "Prakaash, Nasir, Erlison, Marko, Daming, Ed, John, Funnydart, Velvijaykum, Yousif, Boson"
    ],
    "ru": [
      "Пракааш, Насир, Эрлисон, Марко, Даминг, Эд, Джон, Фаннидарт, Велвиджайкум, Юсиф, Бозон"
    ]
  },
  {
    "time": [
      2024.48,
      2027.07
    ],
    "en": [
      "Software, Devin, Yonatan, and Vance."
    ],
    "ru": [
      "Программное обеспечение, Девин, Йонатан и Вэнс."
    ]
  },
  {
    "time": [
      2027.07,
      2032.44
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
      2032.44,
      2039.62
    ],
    "en": [
      "This is the list of JCNP-level members at the time of recording by the way, May 26th 2021."
    ],
    "ru": [
      "Это список участников уровня JCNP на момент записи, кстати, 26 мая 2021 года."
    ]
  },
  {
    "time": [
      2039.62,
      2045.2
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
      2039.62,
      2045.2
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
      2045.2,
      2048.29
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
      2048.29,
      2052.2
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
      2052.2,
      2055.53
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
      2055.53,
      2058.38
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
      2058.38,
      2065.62
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
      2065.62,
      2065.62
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]