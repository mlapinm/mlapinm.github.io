let items = [
  {
    "time": [
      1.329,
      3.75
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
      3.75,
      7.24
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
      7.24,
      11.11
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
      11.11,
      16.86
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
      16.86,
      18.74
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
      18.74,
      24.449
    ],
    "en": [
      "If you want more labs like this, I highly recommend Boson Software’s NetSim for CCNA."
    ],
    "ru": [
      "Если вам нужно больше подобных лабораторий, я настоятельно рекомендую NetSim от Boson Software для CCNA."
    ]
  },
  {
    "time": [
      24.449,
      28.88
    ],
    "en": [
      "NetSim is a network simulator like Packet Tracer, but it’s far more powerful and contains"
    ],
    "ru": [
      "NetSim - это сетевой симулятор, подобный Packet Tracer, но он гораздо более мощный и содержит"
    ]
  },
  {
    "time": [
      28.88,
      33.809
    ],
    "en": [
      "over 100 detailed guided labs covering the CCNA exam topics."
    ],
    "ru": [
      "более 100 подробных лабораторных работ, охватывающих темы экзамена CCNA."
    ]
  },
  {
    "time": [
      33.809,
      38.29
    ],
    "en": [
      "If you want to get NetSim, follow the link in the description."
    ],
    "ru": [
      "Если вы хотите получить NetSim, перейдите по ссылке в описании."
    ]
  },
  {
    "time": [
      38.29,
      43.28
    ],
    "en": [
      "In this video we’ll configure DHCP snooping on SW1 and SW2."
    ],
    "ru": [
      "В этом видео мы настроим отслеживание DHCP на SW1 и SW2."
    ]
  },
  {
    "time": [
      43.28,
      48.56
    ],
    "en": [
      "This is the same topology as in the lecture video, so you should be able to do this lab on your own."
    ],
    "ru": [
      "Это та же топология, что и в видео-лекции, поэтому вы сможете выполнить эту лабораторную работу самостоятельно."
    ]
  },
  {
    "time": [
      48.56,
      56.58
    ],
    "en": [
      "on your own. Let’s get right into it by configuring R1 as a DHCP server for this local network. ENABLE."
    ],
    "ru": [
      "самостоятельно. Давайте займемся этим, настроив R1 как DHCP-сервер для этой локальной сети. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      56.58,
      64.229
    ],
    "en": [
      "ENABLE. CONF T. Let’s exclude 192.168.1.1 to 192.168.1.9 from the pool."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. Давайте исключим 192.168.1.1–192.168.1.9 из пула."
    ]
  },
  {
    "time": [
      64.229,
      69.57
    ],
    "en": [
      "Remember, this part of the configuration is done outside of the DHCP pool."
    ],
    "ru": [
      "Помните, что эта часть настройки выполняется вне пула DHCP."
    ]
  },
  {
    "time": [
      69.57,
      77.36
    ],
    "en": [
      "IP DHCP EXCLUDED-ADDRESS 192.168.1.1 192.168.1.9."
    ],
    "ru": [
      "ИСКЛЮЧЕННЫЙ АДРЕС IP DHCP 192.168.1.1 192.168.1.9."
    ]
  },
  {
    "time": [
      77.36,
      79.96000000000001
    ],
    "en": [
      "Okay, now I’ll configure the pool."
    ],
    "ru": [
      "Хорошо, теперь настрою пул."
    ]
  },
  {
    "time": [
      79.96000000000001,
      84.98
    ],
    "en": [
      "IP DHCP POOL POOL1."
    ],
    "ru": [
      "ПУЛ IP DHCP POOL1."
    ]
  },
  {
    "time": [
      84.98,
      94.68
    ],
    "en": [
      "I’ll configure the 192.168.1.0/24 subnet. NETWORK 192.168.1.0 255.255.255.0."
    ],
    "ru": [
      "Я настрою подсеть 192.168.1.0/24. СЕТЬ 192.168.1.0 255.255.255.0."
    ]
  },
  {
    "time": [
      94.68,
      99.87
    ],
    "en": [
      "NETWORK 192.168.1.0 255.255.255.0. And then configure R1 as the default gateway. DEFAULT-ROUTER 192.168.1.1."
    ],
    "ru": [
      "СЕТЬ 192.168.1.0 255.255.255.0. А затем настройте R1 как шлюз по умолчанию. МАРШРУТИЗАТОР ПО УМОЛЧАНИЮ 192.168.1.1."
    ]
  },
  {
    "time": [
      99.87,
      105.96000000000001
    ],
    "en": [
      "DEFAULT-ROUTER 192.168.1.1. Okay, that’s all the configuration needed on R1."
    ],
    "ru": [
      "МАРШРУТИЗАТОР ПО УМОЛЧАНИЮ 192.168.1.1. Хорошо, это все, что нужно для настройки R1."
    ]
  },
  {
    "time": [
      105.96000000000001,
      110.0
    ],
    "en": [
      "Next let’s configure DHCP snooping on SW1 and SW2."
    ],
    "ru": [
      "Затем давайте настроим отслеживание DHCP на SW1 и SW2."
    ]
  },
  {
    "time": [
      110.0,
      114.3
    ],
    "en": [
      "I’ll go on SW1 first. ENABLE."
    ],
    "ru": [
      "Я сначала перейду на SW1. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      114.3,
      122.049
    ],
    "en": [
      "ENABLE. CONF T. First, enable DHCP snooping globally. IP DHCP SNOOPING."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. Во-первых, включите отслеживание DHCP глобально. ОБСЛУЖИВАНИЕ IP DHCP."
    ]
  },
  {
    "time": [
      122.049,
      126.0
    ],
    "en": [
      "IP DHCP SNOOPING. But, that isn’t enough to actually enable DHCP snooping."
    ],
    "ru": [
      "ОБСЛУЖИВАНИЕ IP DHCP. Но этого недостаточно для включения отслеживания DHCP."
    ]
  },
  {
    "time": [
      126.0,
      129.86
    ],
    "en": [
      "We need to tell SW1 which VLANs to enable it for."
    ],
    "ru": [
      "Нам нужно указать SW1, для каких виртуальных локальных сетей включить его."
    ]
  },
  {
    "time": [
      129.86,
      136.1
    ],
    "en": [
      "Only VLAN 1 is being used in this network, so IP DHCP SNOOPING VLAN 1."
    ],
    "ru": [
      "В этой сети используется только VLAN 1, поэтому IP DHCP SNOOPING VLAN 1."
    ]
  },
  {
    "time": [
      136.1,
      138.959
    ],
    "en": [
      "Okay, now VLAN 1 is active."
    ],
    "ru": [
      "Хорошо, теперь VLAN 1 активен."
    ]
  },
  {
    "time": [
      138.959,
      144.48
    ],
    "en": [
      "However, all interfaces are untrusted, so DHCP won’t be able to operate properly."
    ],
    "ru": [
      "Однако все интерфейсы не являются доверенными, поэтому DHCP не сможет работать должным образом."
    ]
  },
  {
    "time": [
      144.48,
      151.79
    ],
    "en": [
      "Let’s configure G0/2, connected to R1, as a trusted port. INTERFACE G0/2."
    ],
    "ru": [
      "Давайте настроим G0 / 2, подключенный к R1, как доверенный порт. ИНТЕРФЕЙС G0 / 2."
    ]
  },
  {
    "time": [
      151.79,
      156.0
    ],
    "en": [
      "INTERFACE G0/2. IP DHCP SNOOPING TRUST. EXIT."
    ],
    "ru": [
      "ИНТЕРФЕЙС G0 / 2. ДОВЕРИЕ ОБСЛУЖИВАНИЯ IP DHCP. ВЫХОД."
    ]
  },
  {
    "time": [
      156.0,
      159.14
    ],
    "en": [
      "EXIT. Okay, that’s all for SW1 for now."
    ],
    "ru": [
      "ВЫХОД. Хорошо, на этом пока все по SW1."
    ]
  },
  {
    "time": [
      159.14,
      163.59
    ],
    "en": [
      "There’s one command I left out, but we’ll come back to it later."
    ],
    "ru": [
      "Я упустил одну команду, но мы вернемся к ней позже."
    ]
  },
  {
    "time": [
      163.59,
      169.349
    ],
    "en": [
      "Now I’ll do the exact same configurations on SW2. ENABLE."
    ],
    "ru": [
      "Теперь я сделаю точно такие же настройки на SW2. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      169.349,
      172.599
    ],
    "en": [
      "ENABLE. CONF T. IP DHCP SNOOPING."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. IP DHCP SNOOPING."
    ]
  },
  {
    "time": [
      172.599,
      176.48
    ],
    "en": [
      "IP DHCP SNOOPING VLAN 1."
    ],
    "ru": [
      "IP DHCP SNOOPING VLAN 1."
    ]
  },
  {
    "time": [
      176.48,
      182.14
    ],
    "en": [
      "G0/1 is the uplink leading toward R1, so INTERFACE G0/1."
    ],
    "ru": [
      "G0 / 1 - это восходящий канал, ведущий к R1, поэтому ИНТЕРФЕЙС G0 / 1."
    ]
  },
  {
    "time": [
      182.14,
      185.48
    ],
    "en": [
      "IP DHCP SNOOPING TRUST."
    ],
    "ru": [
      "ДОВЕРИЕ ОБСЛУЖИВАНИЯ IP DHCP."
    ]
  },
  {
    "time": [
      185.48,
      190.05
    ],
    "en": [
      "Okay, now let’s try to get an IP address on PC1."
    ],
    "ru": [
      "Хорошо, теперь давайте попробуем получить IP-адрес на ПК1."
    ]
  },
  {
    "time": [
      190.05,
      193.43
    ],
    "en": [
      "To do that I’ll use the command IPCONFIG /RENEW."
    ],
    "ru": [
      "Для этого я воспользуюсь командой IPCONFIG / RENEW."
    ]
  },
  {
    "time": [
      193.43,
      198.48
    ],
    "en": [
      "But, it’s going to fail. Why is that?"
    ],
    "ru": [
      "Но он потерпит неудачу. Это почему?"
    ]
  },
  {
    "time": [
      198.48,
      204.19
    ],
    "en": [
      "Why is that? The correct interfaces are configured as trusted, and PC1 isn’t doing MAC address spoofing"
    ],
    "ru": [
      "Это почему? Правильные интерфейсы настроены как доверенные, и ПК1 не выполняет подмену MAC-адресов."
    ]
  },
  {
    "time": [
      204.19,
      205.7
    ],
    "en": [
      "or anything like that."
    ],
    "ru": [
      "или что-нибудь в этом роде."
    ]
  },
  {
    "time": [
      205.7,
      209.88
    ],
    "en": [
      "Well, let’s check by switching to simulation mode."
    ],
    "ru": [
      "Что ж, давайте проверим, перейдя в режим моделирования."
    ]
  },
  {
    "time": [
      209.88,
      211.07
    ],
    "en": [
      "And then do IPCONFIG /RENEW again."
    ],
    "ru": [
      "А затем снова выполните IPCONFIG / RENEW."
    ]
  },
  {
    "time": [
      211.07,
      221.02
    ],
    "en": [
      "The DHCP message goes to SW2 and then SW1, and then it stops there. Why?"
    ],
    "ru": [
      "Сообщение DHCP идет к SW2, а затем к SW1, и на этом оно останавливается. Почему?"
    ]
  },
  {
    "time": [
      221.02,
      226.709
    ],
    "en": [
      "Why? Let’s check this message here, as it was received by SW1."
    ],
    "ru": [
      "Почему? Давайте проверим это сообщение здесь, так как оно было получено SW1."
    ]
  },
  {
    "time": [
      226.709,
      234.62
    ],
    "en": [
      "Down at the bottom of the Inbound PDU details, you can see the DHCP Agent Information Option. That’s the problem."
    ],
    "ru": [
      "Внизу под деталями Inbound PDU вы можете увидеть опцию информации агента DHCP. Это проблема."
    ]
  },
  {
    "time": [
      234.62,
      237.95
    ],
    "en": [
      "That’s the problem. SW2 added this option to PC1’s message."
    ],
    "ru": [
      "Это проблема. SW2 добавил эту опцию в сообщение ПК1."
    ]
  },
  {
    "time": [
      237.95,
      242.39
    ],
    "en": [
      "SW1 received it on an untrusted port, so it discarded it."
    ],
    "ru": [
      "SW1 получил его через ненадежный порт, поэтому он его отбросил."
    ]
  },
  {
    "time": [
      242.39,
      246.53
    ],
    "en": [
      "Let’s go back to realtime mode now, and fix that."
    ],
    "ru": [
      "Давайте вернемся в режим реального времени и исправим это."
    ]
  },
  {
    "time": [
      246.53,
      254.5
    ],
    "en": [
      "On SW1 first, I’ll configure NO IP DHCP SNOOPING INFORMATION OPTION."
    ],
    "ru": [
      "Сначала на SW1 я настрою НЕ ОПЦИЯ ИНФОРМАЦИИ ОБ ОБСУЖДЕНИИ IP DHCP."
    ]
  },
  {
    "time": [
      254.5,
      259.409
    ],
    "en": [
      "By the way, you can see the syslog messages here for when SW1 dropped the DHCP message."
    ],
    "ru": [
      "Кстати, здесь вы можете увидеть сообщения системного журнала, когда SW1 сбросил сообщение DHCP."
    ]
  },
  {
    "time": [
      259.409,
      265.68
    ],
    "en": [
      "Notice it says option82 value on untrusted port, so that’s why it was dropped."
    ],
    "ru": [
      "Обратите внимание, что на ненадежном порте указано значение option82, поэтому оно было отброшено."
    ]
  },
  {
    "time": [
      265.68,
      269.58
    ],
    "en": [
      "And then I’ll configure the same on SW2 also."
    ],
    "ru": [
      "Затем я настрою то же самое и на SW2."
    ]
  },
  {
    "time": [
      269.58,
      273.55899999999997
    ],
    "en": [
      "NO IP DHCP SNOOPING INFORMATION OPTION."
    ],
    "ru": [
      "НЕТ ВАРИАНТА ИНФОРМАЦИИ ДЛЯ ОБСЛУЖИВАНИЯ IP DHCP."
    ]
  },
  {
    "time": [
      273.55899999999997,
      279.3
    ],
    "en": [
      "I’ve explained why we need to use this command in the lecture video so I won’t go over it again."
    ],
    "ru": [
      "Я объяснил, почему нам нужно использовать эту команду в видео лекции, поэтому я не буду повторять ее снова."
    ]
  },
  {
    "time": [
      279.3,
      284.669
    ],
    "en": [
      "it again. Just remember that it’s necessary if the switch isn’t acting as a DHCP relay agent."
    ],
    "ru": [
      "это снова. Просто помните, что это необходимо, если коммутатор не действует как агент ретрансляции DHCP."
    ]
  },
  {
    "time": [
      284.669,
      292.509
    ],
    "en": [
      "Okay, let’s try that again on PC1. IPCONFIG /RENEW."
    ],
    "ru": [
      "Хорошо, давай попробуем еще раз на ПК1. IPCONFIG / ОБНОВЛЕНИЕ."
    ]
  },
  {
    "time": [
      292.509,
      298.5
    ],
    "en": [
      "IPCONFIG /RENEW. Okay, this time it works and PC1 was able to get an IP address."
    ],
    "ru": [
      "IPCONFIG / ОБНОВЛЕНИЕ. Хорошо, на этот раз все работает, и ПК1 смог получить IP-адрес."
    ]
  },
  {
    "time": [
      298.5,
      301.699
    ],
    "en": [
      "So, in this lab we configured DHCP snooping."
    ],
    "ru": [
      "Итак, в этой лабораторной работе мы настроили отслеживание DHCP."
    ]
  },
  {
    "time": [
      301.699,
      304.22
    ],
    "en": [
      "It’s fairly simple to configure."
    ],
    "ru": [
      "Настроить довольно просто."
    ]
  },
  {
    "time": [
      304.22,
      308.909
    ],
    "en": [
      "The only thing that can be tricky is remembering to disable option 82."
    ],
    "ru": [
      "Единственное, что может быть сложно, - это не забыть отключить опцию 82."
    ]
  },
  {
    "time": [
      308.909,
      311.569
    ],
    "en": [
      "As you can see, it can cause problems if you don’t."
    ],
    "ru": [
      "Как видите, если вы этого не сделаете, это может вызвать проблемы."
    ]
  },
  {
    "time": [
      311.569,
      314.279
    ],
    "en": [
      "Okay, that’s all for this lab."
    ],
    "ru": [
      "Ладно, это все для этой лаборатории."
    ]
  },
  {
    "time": [
      314.279,
      314.279
    ],
    "en": [
      "Now let’s take a look at a lab in Boson Software’s NetSim for CCNA."
    ],
    "ru": [
      "Теперь давайте взглянем на лабораторию в NetSim от Boson Software для CCNA."
    ]
  }
]