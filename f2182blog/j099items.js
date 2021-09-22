let items = [
  {
    "time": [
      1.319,
      3.699
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
      3.699,
      7.09
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
      7.09,
      10.95
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
      10.95,
      16.4
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
      16.4,
      18.44
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
      18.44,
      24.439
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
      24.439,
      28.949
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
      28.949,
      34.05
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
      34.05,
      38.36
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
      38.36,
      42.44
    ],
    "en": [
      "In this lab we’ll practice some of the dynamic ARP inspection configurations we looked at"
    ],
    "ru": [
      "В этой лабораторной работе мы попрактикуемся в некоторых конфигурациях динамической проверки ARP, которые мы рассмотрели."
    ]
  },
  {
    "time": [
      42.44,
      44.29
    ],
    "en": [
      "in the lecture video."
    ],
    "ru": [
      "в видео лекции."
    ]
  },
  {
    "time": [
      44.29,
      49.23
    ],
    "en": [
      "Unfortunately, packet tracer doesn’t support all of the DAI commands we covered, but we"
    ],
    "ru": [
      "К сожалению, пакетный трассировщик не поддерживает все рассмотренные нами команды DAI, но мы"
    ]
  },
  {
    "time": [
      49.23,
      51.36
    ],
    "en": [
      "can still set up the basics."
    ],
    "ru": [
      "еще можно настроить основы."
    ]
  },
  {
    "time": [
      51.36,
      57.829
    ],
    "en": [
      "Before that, we’ll configure R1 as a DHCP server and also enable DHCP snooping on SW1"
    ],
    "ru": [
      "Перед этим мы настроим R1 как DHCP-сервер, а также включим отслеживание DHCP на SW1."
    ]
  },
  {
    "time": [
      57.829,
      59.51
    ],
    "en": [
      "and SW2 for review."
    ],
    "ru": [
      "и SW2 для проверки."
    ]
  },
  {
    "time": [
      59.51,
      67.85
    ],
    "en": [
      "So, let’s get right into step 1 and configure R1 as a DHCP server. ENABLE."
    ],
    "ru": [
      "Итак, перейдем к шагу 1 и настроим R1 как DHCP-сервер. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      67.85,
      72.87
    ],
    "en": [
      "ENABLE. CONF T. First, I’ll configure the range of excluded addresses, since it’s configured"
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. Сначала я настрою диапазон исключенных адресов, так как он настроен"
    ]
  },
  {
    "time": [
      72.87,
      80.75
    ],
    "en": [
      "separately from the DHCP pool."
    ],
    "ru": [
      "отдельно от пула DHCP."
    ]
  },
  {
    "time": [
      80.75,
      83.87
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
      83.87,
      85.75
    ],
    "en": [
      "Okay, now the pool."
    ],
    "ru": [
      "Хорошо, теперь бассейн."
    ]
  },
  {
    "time": [
      85.75,
      88.97
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
      88.97,
      98.02000000000001
    ],
    "en": [
      "First, the address range. NETWORK 192.168.1.0 255.255.255.0."
    ],
    "ru": [
      "Во-первых, диапазон адресов. СЕТЬ 192.168.1.0 255.255.255.0."
    ]
  },
  {
    "time": [
      98.02000000000001,
      103.78
    ],
    "en": [
      "NETWORK 192.168.1.0 255.255.255.0. And then I’ll configure R1 as the default gateway. DEFAULT-ROUTER 192.168.1.1."
    ],
    "ru": [
      "СЕТЬ 192.168.1.0 255.255.255.0. Затем я настрою R1 в качестве шлюза по умолчанию. МАРШРУТИЗАТОР ПО УМОЛЧАНИЮ 192.168.1.1."
    ]
  },
  {
    "time": [
      103.78,
      108.369
    ],
    "en": [
      "DEFAULT-ROUTER 192.168.1.1. Okay, that’s all I’ll configure on R1."
    ],
    "ru": [
      "МАРШРУТИЗАТОР ПО УМОЛЧАНИЮ 192.168.1.1. Хорошо, это все, что я настрою на R1."
    ]
  },
  {
    "time": [
      108.369,
      113.689
    ],
    "en": [
      "Next up, I’ll configure DHCP snooping on SW1 and SW2."
    ],
    "ru": [
      "Затем я настрою отслеживание DHCP на SW1 и SW2."
    ]
  },
  {
    "time": [
      113.689,
      119.90899999999999
    ],
    "en": [
      "I don’t specify the exact settings you should use, so let’s just configure the basics."
    ],
    "ru": [
      "Я не указываю точные настройки, которые вам следует использовать, поэтому давайте настроим основные."
    ]
  },
  {
    "time": [
      119.90899999999999,
      127.01
    ],
    "en": [
      "Enable it, and configure the appropriate trusted ports. SW1 first. SW1 first. ENABLE."
    ],
    "ru": [
      "Включите его и настройте соответствующие доверенные порты. Сначала SW1. Сначала SW1. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      127.01,
      131.09
    ],
    "en": [
      "SW1 first. ENABLE. CONF T. IP DHCP SNOOPING."
    ],
    "ru": [
      "Сначала SW1. ВКЛЮЧИТЬ. CONF T. IP DHCP SNOOPING."
    ]
  },
  {
    "time": [
      131.09,
      135.36
    ],
    "en": [
      "That command enables it globally, but it also needs to be enabled per VLAN."
    ],
    "ru": [
      "Эта команда включает ее глобально, но ее также необходимо включить для каждой VLAN."
    ]
  },
  {
    "time": [
      135.36,
      139.47
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
      139.47,
      142.22
    ],
    "en": [
      "And then I’ll remove option 82."
    ],
    "ru": [
      "Затем я удалю вариант 82."
    ]
  },
  {
    "time": [
      142.22,
      145.8
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
      145.8,
      152.36
    ],
    "en": [
      "Finally, I’ll configure G0/2 as a trusted port. INTERFACE G0/2."
    ],
    "ru": [
      "Наконец, я настрою G0 / 2 как доверенный порт. ИНТЕРФЕЙС G0 / 2."
    ]
  },
  {
    "time": [
      152.36,
      156.7
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
      156.7,
      162.86
    ],
    "en": [
      "EXIT. Now, as for G0/1 it could be either trusted or untrusted."
    ],
    "ru": [
      "ВЫХОД. Теперь, что касается G0 / 1, ему можно было доверять или нет."
    ]
  },
  {
    "time": [
      162.86,
      167.34
    ],
    "en": [
      "Untrusted is more secure since it could catch any DHCP messages that might have slipped"
    ],
    "ru": [
      "Недоверенный более безопасен, так как он может перехватывать любые сообщения DHCP, которые могли проскользнуть"
    ]
  },
  {
    "time": [
      167.34,
      171.52
    ],
    "en": [
      "past SW2, perhaps due to a misconfiguration."
    ],
    "ru": [
      "Прошлый SW2, возможно, из-за неправильной конфигурации."
    ]
  },
  {
    "time": [
      171.52,
      174.35
    ],
    "en": [
      "But it also takes more processing power on SW1."
    ],
    "ru": [
      "Но это также требует большей вычислительной мощности SW1."
    ]
  },
  {
    "time": [
      174.35,
      183.37
    ],
    "en": [
      "I’ll leave it as untrusted as I recommended in the DHCP snooping videos. Okay, now SW2."
    ],
    "ru": [
      "Я оставлю его ненадежным, как я рекомендовал в видеороликах по отслеживанию DHCP. Хорошо, теперь SW2."
    ]
  },
  {
    "time": [
      183.37,
      185.26
    ],
    "en": [
      "Okay, now SW2. ENABLE."
    ],
    "ru": [
      "Хорошо, теперь SW2. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      185.26,
      188.36
    ],
    "en": [
      "CONF T. IP DHCP SNOOPING."
    ],
    "ru": [
      "CONF T. IP DHCP SNOOPING."
    ]
  },
  {
    "time": [
      188.36,
      192.23
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
      192.23,
      194.45
    ],
    "en": [
      "And remove option 82."
    ],
    "ru": [
      "И удалите вариант 82."
    ]
  },
  {
    "time": [
      194.45,
      198.67000000000002
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
      198.67000000000002,
      201.62
    ],
    "en": [
      "And then I’ll trust G0/1."
    ],
    "ru": [
      "И тогда я буду доверять G0 / 1."
    ]
  },
  {
    "time": [
      201.62,
      206.8
    ],
    "en": [
      "INTERFACE G0/1 IP DHCP SNOOPING TRUST. EXIT."
    ],
    "ru": [
      "ИНТЕРФЕЙС G0 / 1 IP DHCP SNOOPING TRUST. ВЫХОД."
    ]
  },
  {
    "time": [
      206.8,
      209.92000000000002
    ],
    "en": [
      "EXIT. Okay that’s all for DHCP snooping."
    ],
    "ru": [
      "ВЫХОД. Хорошо, это все, что касается отслеживания DHCP."
    ]
  },
  {
    "time": [
      209.92000000000002,
      214.68
    ],
    "en": [
      "Since I’m on SW2, I’ll configure DAI here first."
    ],
    "ru": [
      "Поскольку я использую SW2, сначала я настрою здесь DAI."
    ]
  },
  {
    "time": [
      214.68,
      217.19
    ],
    "en": [
      "IP ARP INSPECTION VLAN 1."
    ],
    "ru": [
      "ПРОВЕРКА IP ARP VLAN 1."
    ]
  },
  {
    "time": [
      217.19,
      219.9
    ],
    "en": [
      "Okay, it’s enabled for VLAN 1."
    ],
    "ru": [
      "Хорошо, он включен для VLAN 1."
    ]
  },
  {
    "time": [
      219.9,
      225.69
    ],
    "en": [
      "Now, the instructions say to enable all additional validation checks, so I’ll do that now."
    ],
    "ru": [
      "Теперь в инструкциях говорится, что нужно включить все дополнительные проверки, так что я сделаю это сейчас."
    ]
  },
  {
    "time": [
      225.69,
      231.28
    ],
    "en": [
      "IP ARP INSPECTION VALIDATE, and let me check the options."
    ],
    "ru": [
      "ПРОВЕРКА ПРОВЕРКИ ARP IP, и позвольте мне проверить параметры."
    ]
  },
  {
    "time": [
      231.28,
      235.57999999999998
    ],
    "en": [
      "As I demonstrated in the lecture video, to enable all three checks you have to enter"
    ],
    "ru": [
      "Как я продемонстрировал в видео лекции, чтобы включить все три проверки, вам нужно ввести"
    ]
  },
  {
    "time": [
      235.57999999999998,
      240.01
    ],
    "en": [
      "them in a single command, although the order doesn’t matter."
    ],
    "ru": [
      "их в одной команде, хотя порядок не имеет значения."
    ]
  },
  {
    "time": [
      240.01,
      243.11
    ],
    "en": [
      "So, DST-MAC, IP, SRC-MAC."
    ],
    "ru": [
      "Итак, DST-MAC, IP, SRC-MAC."
    ]
  },
  {
    "time": [
      243.11,
      247.25
    ],
    "en": [
      "Okay, I’ll confirm in the running config later."
    ],
    "ru": [
      "Хорошо, я подтвердю в текущей конфигурации позже."
    ]
  },
  {
    "time": [
      247.25,
      255.57
    ],
    "en": [
      "Now I’ll trust SW2’s G0/1 interface since it’s connected to SW1. INTERFACE G0/1."
    ],
    "ru": [
      "Теперь я буду доверять интерфейсу G0 / 1 SW2, поскольку он подключен к SW1. ИНТЕРФЕЙС G0 / 1."
    ]
  },
  {
    "time": [
      255.57,
      258.28
    ],
    "en": [
      "INTERFACE G0/1. IP ARP INSPECTION TRUST."
    ],
    "ru": [
      "ИНТЕРФЕЙС G0 / 1. ДОВЕРИЕ ПРОВЕРКИ IP ARP."
    ]
  },
  {
    "time": [
      258.28,
      262.83
    ],
    "en": [
      "Okay that’s all, so I’ll use END to return to privileged exec mode."
    ],
    "ru": [
      "Хорошо, вот и все, я использую END, чтобы вернуться в привилегированный режим exec."
    ]
  },
  {
    "time": [
      262.83,
      267.41
    ],
    "en": [
      "Let’s check the configuration. SHOW RUN."
    ],
    "ru": [
      "Давайте проверим конфигурацию. ПОКАЗАТЬ БЕГ."
    ]
  },
  {
    "time": [
      267.41,
      273.65999999999997
    ],
    "en": [
      "SHOW RUN. Right here at the top, we can see the DAI configuration, and the DHCP snooping configuration."
    ],
    "ru": [
      "ПОКАЗАТЬ БЕГ. Прямо здесь вверху мы видим конфигурацию DAI и конфигурацию отслеживания DHCP."
    ]
  },
  {
    "time": [
      273.65999999999997,
      280.06
    ],
    "en": [
      "And if I look down at G0/1, it is trusted for both DHCP snooping and DAI."
    ],
    "ru": [
      "И если я посмотрю на G0 / 1, он будет надежным как для отслеживания DHCP, так и для DAI."
    ]
  },
  {
    "time": [
      280.06,
      282.95
    ],
    "en": [
      "Now let’s check a DAI show command."
    ],
    "ru": [
      "Теперь давайте проверим команду DAI show."
    ]
  },
  {
    "time": [
      282.95,
      285.63
    ],
    "en": [
      "SHOW IP ARP INSPECTION INTERFACES."
    ],
    "ru": [
      "ПОКАЗАТЬ ИНТЕРФЕЙСЫ ПРОВЕРКИ IP ARP."
    ]
  },
  {
    "time": [
      285.63,
      293.21
    ],
    "en": [
      "Okay, notice that all interfaces are untrusted by default, only G0/1 is trusted because we configured it."
    ],
    "ru": [
      "Хорошо, обратите внимание, что все интерфейсы по умолчанию недоверены, только G0 / 1 является доверенным, потому что мы его настроили."
    ]
  },
  {
    "time": [
      293.21,
      295.85
    ],
    "en": [
      "configured it. However, there is a difference here."
    ],
    "ru": [
      "настроил это. Однако здесь есть разница."
    ]
  },
  {
    "time": [
      295.85,
      302.36
    ],
    "en": [
      "Rate limiting is enabled at 15 packets per second on the untrusted ports, but on the trusted port too."
    ],
    "ru": [
      "Ограничение скорости включено на уровне 15 пакетов в секунду на ненадежных портах, но и на доверенном порте тоже."
    ]
  },
  {
    "time": [
      302.36,
      305.71
    ],
    "en": [
      "trusted port too. This is different than what I showed in the lecture video."
    ],
    "ru": [
      "доверенный порт тоже. Это отличается от того, что я показал в видео лекции."
    ]
  },
  {
    "time": [
      305.71,
      310.31
    ],
    "en": [
      "According to Cisco’s documentation, as well as my own physical and virtual switches that"
    ],
    "ru": [
      "Согласно документации Cisco, а также моим собственным физическим и виртуальным коммутаторам, которые"
    ]
  },
  {
    "time": [
      310.31,
      315.35
    ],
    "en": [
      "I tested it on, rate limiting should not be enabled on trusted ports by default."
    ],
    "ru": [
      "Я тестировал это, ограничение скорости по умолчанию не должно быть включено на доверенных портах."
    ]
  },
  {
    "time": [
      315.35,
      322.56
    ],
    "en": [
      "So, I’m not sure if this is an error in packet tracer or perhaps it’s due to a different IOS version."
    ],
    "ru": [
      "Итак, я не уверен, является ли это ошибкой в ​​трассировщике пакетов или, возможно, это связано с другой версией IOS."
    ]
  },
  {
    "time": [
      322.56,
      327.28
    ],
    "en": [
      "IOS version. But as I said, Cisco documentation states that rate limiting should be disabled by default"
    ],
    "ru": [
      "Версия для iOS. Но, как я уже сказал, в документации Cisco указано, что ограничение скорости должно быть отключено по умолчанию."
    ]
  },
  {
    "time": [
      327.28,
      332.7
    ],
    "en": [
      "on trusted ports, and my own testing on multiple switches had the same results, so I think"
    ],
    "ru": [
      "на доверенных портах, и мое собственное тестирование на нескольких коммутаторах дало те же результаты, поэтому я думаю"
    ]
  },
  {
    "time": [
      332.7,
      334.63
    ],
    "en": [
      "this is an error in packet tracer."
    ],
    "ru": [
      "это ошибка в трассировщике пакетов."
    ]
  },
  {
    "time": [
      334.63,
      336.99
    ],
    "en": [
      "Anyway, let’s move on to SW1."
    ],
    "ru": [
      "В любом случае, перейдем к SW1."
    ]
  },
  {
    "time": [
      336.99,
      340.48
    ],
    "en": [
      "I’ll do the same DAI configurations."
    ],
    "ru": [
      "Я сделаю те же конфигурации DAI."
    ]
  },
  {
    "time": [
      340.48,
      343.92
    ],
    "en": [
      "IP ARP INSPECTION VLAN 1."
    ],
    "ru": [
      "ПРОВЕРКА IP ARP VLAN 1."
    ]
  },
  {
    "time": [
      343.92,
      350.96
    ],
    "en": [
      "IP ARP INSPECTION VALIDATE DST-MAC, IP, SRC-MAC."
    ],
    "ru": [
      "ПРОВЕРКА IP ARP ПРОВЕРЬТЕ DST-MAC, IP, SRC-MAC."
    ]
  },
  {
    "time": [
      350.96,
      357.29
    ],
    "en": [
      "In SW1’s case, I’ll configure both G0/1 and G0/2 as trusted ports."
    ],
    "ru": [
      "В случае SW1 я настрою и G0 / 1, и G0 / 2 как доверенные порты."
    ]
  },
  {
    "time": [
      357.29,
      359.8
    ],
    "en": [
      "INTERFACE RANGE G0/1 – 2."
    ],
    "ru": [
      "ДИАПАЗОН ИНТЕРФЕЙСА G0 / 1-2."
    ]
  },
  {
    "time": [
      359.8,
      363.27
    ],
    "en": [
      "IP ARP INSPECTION TRUST. END."
    ],
    "ru": [
      "ДОВЕРИЕ ПРОВЕРКИ IP ARP. КОНЕЦ."
    ]
  },
  {
    "time": [
      363.27,
      366.46
    ],
    "en": [
      "END. Let’s check the config. SHOW RUN."
    ],
    "ru": [
      "КОНЕЦ. Давайте проверим конфигурацию. ПОКАЗАТЬ БЕГ."
    ]
  },
  {
    "time": [
      366.46,
      373.03
    ],
    "en": [
      "SHOW RUN. There’s the DAI and DHCP snooping configs, let’s look at the interfaces."
    ],
    "ru": [
      "ПОКАЗАТЬ БЕГ. Есть конфиги DAI и DHCP snooping, давайте посмотрим на интерфейсы."
    ]
  },
  {
    "time": [
      373.03,
      380.36
    ],
    "en": [
      "Notice G0/2 is trusted for both DAI and DHCP snooping, but G0/1 is trusted only for DAI."
    ],
    "ru": [
      "Обратите внимание, что G0 / 2 является доверенным как для DAI, так и для отслеживания DHCP, но G0 / 1 является доверенным только для DAI."
    ]
  },
  {
    "time": [
      380.36,
      384.92
    ],
    "en": [
      "That’s just how I set up the network, but there are other options too."
    ],
    "ru": [
      "Вот как я настраиваю сеть, но есть и другие варианты."
    ]
  },
  {
    "time": [
      384.92,
      390.45
    ],
    "en": [
      "The most important thing is to make sure that the interface connected to the router, G0/2,"
    ],
    "ru": [
      "Самое главное - убедиться, что интерфейс, подключенный к роутеру, G0 / 2,"
    ]
  },
  {
    "time": [
      390.45,
      396.521
    ],
    "en": [
      "is trusted for both DAI and DHCP snooping, but G0/1 could be trusted or untrusted, that"
    ],
    "ru": [
      "является доверенным и для отслеживания DAI, и для DHCP, но G0 / 1 может быть доверенным или ненадежным, что"
    ]
  },
  {
    "time": [
      396.521,
      398.3
    ],
    "en": [
      "choice is up to you."
    ],
    "ru": [
      "выбор за вами."
    ]
  },
  {
    "time": [
      398.3,
      406.23
    ],
    "en": [
      "Finally, let’s see if the PCs can successfully get IP addresses via DHCP and then ping the default gateway."
    ],
    "ru": [
      "Наконец, давайте посмотрим, могут ли ПК успешно получить IP-адреса через DHCP, а затем проверить связь со шлюзом по умолчанию."
    ]
  },
  {
    "time": [
      406.23,
      413.84000000000003
    ],
    "en": [
      "default gateway. So, I’ll go into PC1 and change this gateway setting from static to DHCP, and that should"
    ],
    "ru": [
      "шлюз по умолчанию. Итак, я перейду на ПК1 и изменю этот параметр шлюза со статического на DHCP, и это должно"
    ]
  },
  {
    "time": [
      413.84000000000003,
      419.63
    ],
    "en": [
      "automatically change the FastEthernet0 setting to DHCP too, and it does."
    ],
    "ru": [
      "автоматически измените настройку FastEthernet0 на DHCP, и это произойдет."
    ]
  },
  {
    "time": [
      419.63,
      422.61
    ],
    "en": [
      "Now I’ll do that on PC2."
    ],
    "ru": [
      "Теперь сделаю это на ПК2."
    ]
  },
  {
    "time": [
      422.61,
      426.08
    ],
    "en": [
      "Change from static to DHCP."
    ],
    "ru": [
      "Измените статический на DHCP."
    ]
  },
  {
    "time": [
      426.08,
      428.23
    ],
    "en": [
      "And on PC3, too."
    ],
    "ru": [
      "И на ПК3 тоже."
    ]
  },
  {
    "time": [
      428.23,
      431.4
    ],
    "en": [
      "Change from static to DHCP."
    ],
    "ru": [
      "Измените статический на DHCP."
    ]
  },
  {
    "time": [
      431.4,
      434.99
    ],
    "en": [
      "Now I’ll go into the CLI of PC1."
    ],
    "ru": [
      "Теперь я перейду к интерфейсу командной строки PC1."
    ]
  },
  {
    "time": [
      434.99,
      441.8
    ],
    "en": [
      "And here we can see its IP address, so it has successfully gotten an IP address via DHCP."
    ],
    "ru": [
      "И здесь мы видим его IP-адрес, значит, он успешно получил IP-адрес через DHCP."
    ]
  },
  {
    "time": [
      441.8,
      444.33
    ],
    "en": [
      "DHCP. Let’s see if it’s allowed to ping."
    ],
    "ru": [
      "DHCP. Посмотрим, разрешено ли пинговать."
    ]
  },
  {
    "time": [
      444.33,
      449.639
    ],
    "en": [
      "If not, there is likely a problem with DAI. I’ll ping R1."
    ],
    "ru": [
      "Если нет, скорее всего, проблема с DAI. Я пингую R1."
    ]
  },
  {
    "time": [
      449.639,
      453.22
    ],
    "en": [
      "I’ll ping R1. PING 192.168.1.1."
    ],
    "ru": [
      "Я пингую R1. ПИНГ 192.168.1.1."
    ]
  },
  {
    "time": [
      453.22,
      455.59000000000003
    ],
    "en": [
      "Okay it works, looks good."
    ],
    "ru": [
      "Ладно работает, хорошо выглядит."
    ]
  },
  {
    "time": [
      455.59000000000003,
      463.23
    ],
    "en": [
      "So, in this lab we configured DHCP, DHCP snooping, and then dynamic ARP inspection."
    ],
    "ru": [
      "Итак, в этой лабораторной работе мы настроили DHCP, отслеживание DHCP, а затем динамическую проверку ARP."
    ]
  },
  {
    "time": [
      463.23,
      468.26
    ],
    "en": [
      "As I said at the beginning, unfortunately not all commands are supported in packet tracer,"
    ],
    "ru": [
      "Как я сказал в начале, к сожалению, не все команды поддерживаются в пакетном трассировщике,"
    ]
  },
  {
    "time": [
      468.26,
      469.889
    ],
    "en": [
      "but you can still practice the basics."
    ],
    "ru": [
      "но вы все еще можете практиковать основы."
    ]
  },
  {
    "time": [
      469.889,
      472.199
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
      472.199,
      472.199
    ],
    "en": [
      "Now let’s take a look at a lab in Boson Software’s NetSim for CCNA."
    ],
    "ru": [
      "Теперь давайте взглянем на лабораторию в NetSim от Boson Software для CCNA."
    ]
  }
]