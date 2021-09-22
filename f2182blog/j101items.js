let items = [
  {
    "time": [
      1.829,
      4.46
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
      4.46,
      8.04
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
      8.04,
      11.92
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
      11.92,
      17.91
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
      17.91,
      19.86
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
      19.86,
      25.98
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
      25.98,
      30.56
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
      30.56,
      36.049
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
      36.049,
      40.84
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
      40.84,
      46.29
    ],
    "en": [
      "In this lab we’ll look at the topic of HSRP and STP synchronization."
    ],
    "ru": [
      "В этой лабораторной работе мы рассмотрим тему синхронизации HSRP и STP."
    ]
  },
  {
    "time": [
      46.29,
      50.43
    ],
    "en": [
      "This applies regardless of what first hop redundancy protocol you’re using, but for"
    ],
    "ru": [
      "Это применимо независимо от того, какой протокол резервирования первого прыжка вы используете, но для"
    ]
  },
  {
    "time": [
      50.43,
      53.55
    ],
    "en": [
      "this lab we’ll use HSRP."
    ],
    "ru": [
      "в этой лабораторной работе мы будем использовать HSRP."
    ]
  },
  {
    "time": [
      53.55,
      60.471
    ],
    "en": [
      "Basically, HSRP and STP synchronization means that the HSRP active should be the STP root"
    ],
    "ru": [
      "По сути, синхронизация HSRP и STP означает, что активным HSRP должен быть корень STP."
    ]
  },
  {
    "time": [
      60.471,
      66.03
    ],
    "en": [
      "bridge, and the HSRP standby should be the STP secondary root bridge."
    ],
    "ru": [
      "мост, а резервный HSRP должен быть вторичным корневым мостом STP."
    ]
  },
  {
    "time": [
      66.03,
      71.68
    ],
    "en": [
      "Why should the HSRP active and the STP root be synchronized or aligned?"
    ],
    "ru": [
      "Почему активный HSRP и корень STP должны быть синхронизированы или согласованы?"
    ]
  },
  {
    "time": [
      71.68,
      79.15
    ],
    "en": [
      "It’s to ensure that traffic from the end hosts follows the most direct path to the default gateway."
    ],
    "ru": [
      "Это необходимо для обеспечения того, чтобы трафик от конечных хостов шел по наиболее прямому пути к шлюзу по умолчанию."
    ]
  },
  {
    "time": [
      79.15,
      86.02
    ],
    "en": [
      "default gateway. If the HSRP active router isn’t the STP root, then traffic from PC1 to DSW1 might"
    ],
    "ru": [
      "шлюз по умолчанию. Если активный маршрутизатор HSRP не является корнем STP, то трафик от ПК1 к DSW1 может"
    ]
  },
  {
    "time": [
      86.02,
      91.40899999999999
    ],
    "en": [
      "not take the direct path to DSW1, it might take a longer path."
    ],
    "ru": [
      "не выбирайте прямой путь к DSW1, это может занять более длинный путь."
    ]
  },
  {
    "time": [
      91.40899999999999,
      95.64
    ],
    "en": [
      "This isn’t a disaster, but it’s obviously not ideal."
    ],
    "ru": [
      "Это не катастрофа, но явно не идеально."
    ]
  },
  {
    "time": [
      95.64,
      100.83
    ],
    "en": [
      "Because STP works by finding the shortest path to the root, ensuring that the HSRP active"
    ],
    "ru": [
      "Поскольку STP работает, находя кратчайший путь к корню, гарантируя, что HSRP активен"
    ]
  },
  {
    "time": [
      100.83,
      107.5
    ],
    "en": [
      "router is synchronized with the STP root means that traffic will follow the most efficient path."
    ],
    "ru": [
      "Маршрутизатор синхронизируется с корнем STP, что означает, что трафик будет идти по наиболее эффективному пути."
    ]
  },
  {
    "time": [
      107.5,
      114.34
    ],
    "en": [
      "path. In this lab, we’ll make DSW1 the HSRP active and STP root for VLAN 10, and make DSW2 the"
    ],
    "ru": [
      "дорожка. В этой лабораторной работе мы сделаем DSW1 активным HSRP и корнем STP для VLAN 10, а DSW2 -"
    ]
  },
  {
    "time": [
      114.34,
      119.85
    ],
    "en": [
      "HSRP active and STP root for VLAN 20."
    ],
    "ru": [
      "Активный HSRP и корень STP для VLAN 20."
    ]
  },
  {
    "time": [
      119.85,
      128.59
    ],
    "en": [
      "Before configuring HSRP and STP, let’s check the current state on DSW1. ENABLE."
    ],
    "ru": [
      "Перед настройкой HSRP и STP давайте проверим текущее состояние на DSW1. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      128.59,
      130.7
    ],
    "en": [
      "ENABLE. SHOW STANDBY BRIEF."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. ПОКАЗАТЬ РЕЗЮМЕ."
    ]
  },
  {
    "time": [
      130.7,
      134.19
    ],
    "en": [
      "Nothing, so HSRP hasn’t been configured yet."
    ],
    "ru": [
      "Ничего, значит, HSRP еще не настроен."
    ]
  },
  {
    "time": [
      134.19,
      136.61
    ],
    "en": [
      "Let’s check spanning tree."
    ],
    "ru": [
      "Давайте проверим остовное дерево."
    ]
  },
  {
    "time": [
      136.61,
      139.95
    ],
    "en": [
      "SHOW SPANNING-TREE VLAN 10."
    ],
    "ru": [
      "ПОКАЗАТЬ SPANNING-TREE VLAN 10."
    ]
  },
  {
    "time": [
      139.95,
      148.87
    ],
    "en": [
      "DSW1 has a root port, G1/0/3 which is connected to DSW2, so it looks like DSW2 is the root bridge, not DSW1."
    ],
    "ru": [
      "DSW1 имеет корневой порт G1 / 0/3, который подключен к DSW2, поэтому похоже, что DSW2 является корневым мостом, а не DSW1."
    ]
  },
  {
    "time": [
      148.87,
      151.7
    ],
    "en": [
      "bridge, not DSW1. How about VLAN 20?"
    ],
    "ru": [
      "мост, а не DSW1. Как насчет VLAN 20?"
    ]
  },
  {
    "time": [
      151.7,
      157.16
    ],
    "en": [
      "SHOW SPANNING-TREE VLAN 20. Same thing here."
    ],
    "ru": [
      "ПОКАЗАТЬ SPANNING-TREE VLAN 20. То же самое и здесь."
    ]
  },
  {
    "time": [
      157.16,
      160.32999999999998
    ],
    "en": [
      "Same thing here. Now I’ll get right into configuring DSW1."
    ],
    "ru": [
      "То же самое и здесь. Теперь я перейду к настройке DSW1."
    ]
  },
  {
    "time": [
      160.32999999999998,
      164.63
    ],
    "en": [
      "CONF T. Let’s configure STP first."
    ],
    "ru": [
      "CONF T. Давайте сначала настроим STP."
    ]
  },
  {
    "time": [
      164.63,
      168.709
    ],
    "en": [
      "SPANNING-TREE VLAN 10 ROOT PRIMARY."
    ],
    "ru": [
      "SPANNING-TREE VLAN 10 ROOT PRIMARY."
    ]
  },
  {
    "time": [
      168.709,
      176.24
    ],
    "en": [
      "That should make DSW1 the root for VLAN 10, now let’s ensure it’s the secondary root for VLAN 20."
    ],
    "ru": [
      "Это должно сделать DSW1 корневым для VLAN 10, теперь давайте убедимся, что это вторичный корень для VLAN 20."
    ]
  },
  {
    "time": [
      176.24,
      178.89
    ],
    "en": [
      "for VLAN 20. SPANNING-TREE VLAN 20 ROOT SECONDARY."
    ],
    "ru": [
      "для VLAN 20. SPANNING-TREE VLAN 20 ROOT SECONDARY."
    ]
  },
  {
    "time": [
      178.89,
      186.07
    ],
    "en": [
      "Okay, let’s check the status now, VLAN 10 first where DSW1 should be the root."
    ],
    "ru": [
      "Хорошо, давайте сейчас проверим статус, сначала VLAN 10, где DSW1 должен быть корневым."
    ]
  },
  {
    "time": [
      186.07,
      189.45
    ],
    "en": [
      "DO SHOW SPANNING-TREE VLAN 10."
    ],
    "ru": [
      "ПОКАЗАТЬ VLAN SPANNING-TREE 10."
    ]
  },
  {
    "time": [
      189.45,
      196.04
    ],
    "en": [
      "Great, DSW1 is the root now as it says up here, and all ports are designated."
    ],
    "ru": [
      "Отлично, DSW1 теперь является корневым, как здесь сказано, и все порты назначены."
    ]
  },
  {
    "time": [
      196.04,
      198.41
    ],
    "en": [
      "And VLAN 20 next."
    ],
    "ru": [
      "А дальше VLAN 20."
    ]
  },
  {
    "time": [
      198.41,
      201.37
    ],
    "en": [
      "DO SHOW SPANNING-TREE VLAN 20."
    ],
    "ru": [
      "ПОКАЗАТЬ VLAN SPANNING-TREE 20."
    ]
  },
  {
    "time": [
      201.37,
      206.87
    ],
    "en": [
      "Now, because we haven’t configured DSW2 yet the ROOT SECONDARY command here actually"
    ],
    "ru": [
      "Теперь, поскольку мы еще не настроили DSW2, команда ROOT SECONDARY здесь на самом деле"
    ]
  },
  {
    "time": [
      206.87,
      213.75
    ],
    "en": [
      "made DSW1’s priority lower than DSW2’s so DSW1 became the root for VLAN 20 also."
    ],
    "ru": [
      "сделал приоритет DSW1 ниже, чем DSW2, поэтому DSW1 стал корневым для VLAN 20."
    ]
  },
  {
    "time": [
      213.75,
      221.14
    ],
    "en": [
      "That’s fine, after we configure DSW2 it will become the root for VLAN 20 again."
    ],
    "ru": [
      "Ничего страшного, после того, как мы настроим DSW2, он снова станет корневым для VLAN 20."
    ]
  },
  {
    "time": [
      221.14,
      229.31
    ],
    "en": [
      "Now let’s configure HSRP here on DSW1, for the VLAN10 SVI first. INTERFACE VLAN 10."
    ],
    "ru": [
      "Теперь давайте настроим HSRP здесь, на DSW1, сначала для VLAN10 SVI. ИНТЕРФЕЙС VLAN 10."
    ]
  },
  {
    "time": [
      229.31,
      234.87
    ],
    "en": [
      "INTERFACE VLAN 10. I didn’t give any specifics in the description about the HSRP configurations, but I’ll"
    ],
    "ru": [
      "ИНТЕРФЕЙС VLAN 10. В описании конфигураций HSRP я не приводил каких-либо подробностей, но я расскажу"
    ]
  },
  {
    "time": [
      234.87,
      238.5
    ],
    "en": [
      "make it version 2. STANDBY VERSION 2."
    ],
    "ru": [
      "сделать версию 2. РЕЗЕРВНАЯ ВЕРСИЯ 2."
    ]
  },
  {
    "time": [
      238.5,
      242.25
    ],
    "en": [
      "STANDBY VERSION 2. I’ll make group 10 for VLAN 10."
    ],
    "ru": [
      "РЕЗЕРВНАЯ ВЕРСИЯ 2. Сделаю группу 10 для VLAN 10."
    ]
  },
  {
    "time": [
      242.25,
      249.849
    ],
    "en": [
      "STANDBY 10 IP, and let’s make the default gateway .254. 10.0.10.254."
    ],
    "ru": [
      "STANDBY 10 IP, и давайте сделаем шлюз по умолчанию .254. 10.0.10.254."
    ]
  },
  {
    "time": [
      249.849,
      256.349
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
      249.849,
      256.349
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
      256.349,
      260.019
    ],
    "en": [
      "STANDBY 10 PRIORITY 105."
    ],
    "ru": [
      "РЕЖИМ РЕЖИМА 10 105."
    ]
  },
  {
    "time": [
      260.019,
      265.069
    ],
    "en": [
      "And enable preemption too, it’s good to have. STANDBY 10 PREEMPT."
    ],
    "ru": [
      "И включить приоритетное обслуживание, это хорошо. РЕЖИМ ОЖИДАНИЯ 10 ПРЕДВАРИТЕЛЬНЫЙ."
    ]
  },
  {
    "time": [
      265.069,
      269.729
    ],
    "en": [
      "STANDBY 10 PREEMPT. Okay, VLAN 20 next. INTERFACE VLAN 20."
    ],
    "ru": [
      "РЕЖИМ ОЖИДАНИЯ 10 ПРЕДВАРИТЕЛЬНЫЙ. Хорошо, дальше VLAN 20. ИНТЕРФЕЙС VLAN 20."
    ]
  },
  {
    "time": [
      269.729,
      275.19
    ],
    "en": [
      "INTERFACE VLAN 20. Let’s enable version 2 here too. STANDBY VERSION 2."
    ],
    "ru": [
      "ИНТЕРФЕЙС VLAN 20. Давайте также включим здесь версию 2. РЕЗЕРВНАЯ ВЕРСИЯ 2."
    ]
  },
  {
    "time": [
      275.19,
      278.969
    ],
    "en": [
      "STANDBY VERSION 2. And then the virtual IP, .254 again."
    ],
    "ru": [
      "РЕЗЕРВНАЯ ВЕРСИЯ 2. И снова виртуальный IP, .254."
    ]
  },
  {
    "time": [
      278.969,
      281.49
    ],
    "en": [
      "STANDBY 20 IP 10.0.20.254."
    ],
    "ru": [
      "РЕЖИМ ОЖИДАНИЯ 20 IP 10.0.20.254."
    ]
  },
  {
    "time": [
      281.49,
      289.759
    ],
    "en": [
      "Note that these HSRP group numbers don’t actually have to match the VLAN number."
    ],
    "ru": [
      "Обратите внимание, что эти номера групп HSRP на самом деле не обязательно должны совпадать с номером VLAN."
    ]
  },
  {
    "time": [
      289.759,
      294.80899999999997
    ],
    "en": [
      "Okay, next I’ll make it’s priority lower than the default of 100."
    ],
    "ru": [
      "Хорошо, теперь я сделаю его приоритет ниже, чем значение по умолчанию, равное 100."
    ]
  },
  {
    "time": [
      294.80899999999997,
      299.819
    ],
    "en": [
      "STANDBY 20 PRIORITY 95. And enable preempt."
    ],
    "ru": [
      "ОЖИДАНИЕ 20 ПРИОРИТЕТ 95. И включить вытеснение."
    ]
  },
  {
    "time": [
      299.819,
      301.31
    ],
    "en": [
      "And enable preempt. STANDBY 20 PREEMPT."
    ],
    "ru": [
      "И включите вытеснение. РЕЖИМ ОЖИДАНИЯ 20 ПРЕДВАРИТЕЛЬНЫЙ."
    ]
  },
  {
    "time": [
      301.31,
      306.87
    ],
    "en": [
      "Okay, that’s all here on DSW1. END."
    ],
    "ru": [
      "Хорошо, это все на DSW1. КОНЕЦ."
    ]
  },
  {
    "time": [
      306.87,
      311.139
    ],
    "en": [
      "END. Now I’ll do similar configurations on DSW2."
    ],
    "ru": [
      "КОНЕЦ. Теперь сделаю аналогичные настройки на DSW2."
    ]
  },
  {
    "time": [
      311.139,
      316.849
    ],
    "en": [
      "CONF T. First, make it the secondary root of VLAN 10."
    ],
    "ru": [
      "CONF T. Сначала сделайте его вторичным корнем VLAN 10."
    ]
  },
  {
    "time": [
      316.849,
      320.669
    ],
    "en": [
      "SPANNING-TREE VLAN 10 ROOT SECONDARY."
    ],
    "ru": [
      "SPANNING-TREE VLAN 10 ROOT SECONDARY."
    ]
  },
  {
    "time": [
      320.669,
      323.52
    ],
    "en": [
      "And the primary root for VLAN 20."
    ],
    "ru": [
      "И основной корень для VLAN 20."
    ]
  },
  {
    "time": [
      323.52,
      326.189
    ],
    "en": [
      "SPANNING-TREE VLAN 20 ROOT PRIMARY."
    ],
    "ru": [
      "SPANNING-TREE VLAN 20 ROOT PRIMARY."
    ]
  },
  {
    "time": [
      326.189,
      329.909
    ],
    "en": [
      "Let’s check the STP status now."
    ],
    "ru": [
      "Давайте теперь проверим статус STP."
    ]
  },
  {
    "time": [
      329.909,
      332.52
    ],
    "en": [
      "Is it the root for VLAN 20?"
    ],
    "ru": [
      "Это рут для VLAN 20?"
    ]
  },
  {
    "time": [
      332.52,
      336.389
    ],
    "en": [
      "DO SHOW SPANNING-TREE VLAN 20."
    ],
    "ru": [
      "ПОКАЗАТЬ VLAN SPANNING-TREE 20."
    ]
  },
  {
    "time": [
      336.389,
      338.719
    ],
    "en": [
      "Yes it is, perfect."
    ],
    "ru": [
      "Да, идеально."
    ]
  },
  {
    "time": [
      338.719,
      342.43
    ],
    "en": [
      "And DSW1 should remain the root for VLAN 10."
    ],
    "ru": [
      "И DSW1 должен оставаться корневым для VLAN 10."
    ]
  },
  {
    "time": [
      342.43,
      345.36
    ],
    "en": [
      "DO SHOW SPANNING-TREE VLAN 10."
    ],
    "ru": [
      "ПОКАЗАТЬ VLAN SPANNING-TREE 10."
    ]
  },
  {
    "time": [
      345.36,
      353.33
    ],
    "en": [
      "Perfect, DSW2’s root port is G1/0/3 which is connected to DSW1."
    ],
    "ru": [
      "Отлично, корневой порт DSW2 - G1 / 0/3, который подключен к DSW1."
    ]
  },
  {
    "time": [
      353.33,
      359.11
    ],
    "en": [
      "Next up, HSRP on DSW2. INTERFACE VLAN 10."
    ],
    "ru": [
      "Далее, HSRP на DSW2. ИНТЕРФЕЙС VLAN 10."
    ]
  },
  {
    "time": [
      359.11,
      363.919
    ],
    "en": [
      "INTERFACE VLAN 10. First let’s make the version match. STANDBY VERSION 2."
    ],
    "ru": [
      "ИНТЕРФЕЙС VLAN 10. Сначала сделаем так, чтобы версия совпадала. РЕЗЕРВНАЯ ВЕРСИЯ 2."
    ]
  },
  {
    "time": [
      363.919,
      369.319
    ],
    "en": [
      "STANDBY VERSION 2. And then configure the same virtual IP, the .254 of the subnet."
    ],
    "ru": [
      "РЕЗЕРВНАЯ ВЕРСИЯ 2. Затем настройте тот же виртуальный IP-адрес подсети .254."
    ]
  },
  {
    "time": [
      369.319,
      374.08
    ],
    "en": [
      "STANDBY 10 IP 10.0.10.254."
    ],
    "ru": [
      "РЕЖИМ ОЖИДАНИЯ 10 IP 10.0.10.254."
    ]
  },
  {
    "time": [
      374.08,
      379.249
    ],
    "en": [
      "And let’s lower the priority here, even though DSW1’s is already higher."
    ],
    "ru": [
      "И давайте снизим здесь приоритет, хотя DSW1 уже выше."
    ]
  },
  {
    "time": [
      379.249,
      383.029
    ],
    "en": [
      "STANDBY 10 PRIORITY 95."
    ],
    "ru": [
      "ОЖИДАНИЕ 10 ПРИОРИТЕТ 95."
    ]
  },
  {
    "time": [
      383.029,
      387.02
    ],
    "en": [
      "And I’ll enable preemption too. STANDBY 10 PREEMPT."
    ],
    "ru": [
      "И я тоже включу приоритетное обслуживание. РЕЖИМ ОЖИДАНИЯ 10 ПРЕДВАРИТЕЛЬНЫЙ."
    ]
  },
  {
    "time": [
      387.02,
      395.219
    ],
    "en": [
      "STANDBY 10 PREEMPT. Okay, that’s all for VLAN 10, now VLAN 20. INTERFACE VLAN 20."
    ],
    "ru": [
      "РЕЖИМ ОЖИДАНИЯ 10 ПРЕДВАРИТЕЛЬНЫЙ. Хорошо, это все для VLAN 10, теперь VLAN 20. ИНТЕРФЕЙС VLAN 20."
    ]
  },
  {
    "time": [
      395.219,
      398.319
    ],
    "en": [
      "INTERFACE VLAN 20. STANDBY VERSION 2."
    ],
    "ru": [
      "ИНТЕРФЕЙС VLAN 20. РЕЗЕРВНАЯ ВЕРСИЯ 2."
    ]
  },
  {
    "time": [
      398.319,
      404.509
    ],
    "en": [
      "STANDBY 20 IP 10.0.20.254."
    ],
    "ru": [
      "РЕЖИМ ОЖИДАНИЯ 20 IP 10.0.20.254."
    ]
  },
  {
    "time": [
      404.509,
      411.289
    ],
    "en": [
      "STANDBY 20 PRIORITY 105. STANDBY 20 PREEMPT."
    ],
    "ru": [
      "РЕЖИМ РЕЖИМА 20 ПРИОРИТЕТ 105. РЕЖИМ РЕЖИМА 20 ПРЕДВАРИТЕЛЬНЫЙ."
    ]
  },
  {
    "time": [
      411.289,
      412.719
    ],
    "en": [
      "STANDBY 20 PREEMPT. END."
    ],
    "ru": [
      "РЕЖИМ ОЖИДАНИЯ 20 ПРЕДВАРИТЕЛЬНЫЙ. КОНЕЦ."
    ]
  },
  {
    "time": [
      412.719,
      415.24
    ],
    "en": [
      "All of the configurations should be good now."
    ],
    "ru": [
      "Теперь все конфигурации должны быть в порядке."
    ]
  },
  {
    "time": [
      415.24,
      423.069
    ],
    "en": [
      "Again, DSW1 should be active in VLAN 10 and STANDBY in VLAN 20, and DSW2 should be the opposite."
    ],
    "ru": [
      "Опять же, DSW1 должен быть активен в VLAN 10 и STANDBY в VLAN 20, а DSW2 должен быть противоположным."
    ]
  },
  {
    "time": [
      423.069,
      426.659
    ],
    "en": [
      "opposite. Active in VLAN 20 and standby in VLAN 10."
    ],
    "ru": [
      "противоположный. Активен в VLAN 20 и в режиме ожидания в VLAN 10."
    ]
  },
  {
    "time": [
      426.659,
      434.49
    ],
    "en": [
      "Let’s check first here on DSW2 if it’s the HSRP active in VLAN 20 and standby in VLAN 10."
    ],
    "ru": [
      "Давайте сначала проверим здесь, на DSW2, активен ли HSRP в VLAN 20 и находится ли он в режиме ожидания в VLAN 10."
    ]
  },
  {
    "time": [
      434.49,
      436.089
    ],
    "en": [
      "VLAN 10. SHOW STANDBY BRIEF."
    ],
    "ru": [
      "VLAN 10. ПОКАЗАТЬ КРАТКОЕ ОПИСАНИЕ РЕЖИМА ОЖИДАНИЯ."
    ]
  },
  {
    "time": [
      436.089,
      439.3
    ],
    "en": [
      "Okay, VLAN 10 looks perfect."
    ],
    "ru": [
      "Хорошо, VLAN 10 выглядит идеально."
    ]
  },
  {
    "time": [
      439.3,
      446.02
    ],
    "en": [
      "The active is 10.0.10.1, which is DSW1, and the standby is local, meaning DSW2."
    ],
    "ru": [
      "Активным является 10.0.10.1, то есть DSW1, а резервным является локальный, то есть DSW2."
    ]
  },
  {
    "time": [
      446.02,
      448.509
    ],
    "en": [
      "VLAN 20 looks good too."
    ],
    "ru": [
      "VLAN 20 тоже выглядит неплохо."
    ]
  },
  {
    "time": [
      448.509,
      452.699
    ],
    "en": [
      "The active is local and standby is 10.0.20.1, DSW1."
    ],
    "ru": [
      "Активный - локальный, а резервный - 10.0.20.1, DSW1."
    ]
  },
  {
    "time": [
      452.699,
      462.869
    ],
    "en": [
      "So it all looks good here on DSW2, but let’s check on DSW1 also just to be sure. SHOW STANDBY BRIEF."
    ],
    "ru": [
      "Так что здесь, на DSW2, все выглядит хорошо, но давайте проверим и DSW1, чтобы убедиться. ПОКАЗАТЬ РЕЗЮМЕ."
    ]
  },
  {
    "time": [
      462.869,
      471.749
    ],
    "en": [
      "SHOW STANDBY BRIEF. Okay, in VLAN 10 the active is local and DSW2 is standby, and the opposite for VLAN 20."
    ],
    "ru": [
      "ПОКАЗАТЬ РЕЗЮМЕ. Хорошо, в VLAN 10 активный объект является локальным, а DSW2 - резервным, а для VLAN 20 - наоборот."
    ]
  },
  {
    "time": [
      471.749,
      477.499
    ],
    "en": [
      "So, we have configured both STP and HSRP as in the instructions."
    ],
    "ru": [
      "Итак, мы настроили и STP, и HSRP, как в инструкции."
    ]
  },
  {
    "time": [
      477.499,
      483.509
    ],
    "en": [
      "This ensures that hosts in VLAN 10 have a direct path to their default gateway, DSW1,"
    ],
    "ru": [
      "Это гарантирует, что хосты в VLAN 10 будут иметь прямой путь к своему шлюзу по умолчанию, DSW1,"
    ]
  },
  {
    "time": [
      483.509,
      489.029
    ],
    "en": [
      "and hosts in VLAN 20 have a direct path to their default gateway, DSW2."
    ],
    "ru": [
      "а хосты в VLAN 20 имеют прямой путь к своему шлюзу по умолчанию, DSW2."
    ]
  },
  {
    "time": [
      489.029,
      495.3
    ],
    "en": [
      "Synchronizing the STP and HSRP configurations like this is a good LAN design principle."
    ],
    "ru": [
      "Подобная синхронизация конфигураций STP и HSRP - хороший принцип построения локальной сети."
    ]
  },
  {
    "time": [
      495.3,
      499.919
    ],
    "en": [
      "Although to be honest I doubt you’ll be asked about it on the CCNA exam, in this course"
    ],
    "ru": [
      "Хотя, честно говоря, я сомневаюсь, что вас спросят об этом на экзамене CCNA в этом курсе."
    ]
  },
  {
    "time": [
      499.919,
      504.179
    ],
    "en": [
      "I always try to give you more information than you need, as long as it’s valuable."
    ],
    "ru": [
      "Я всегда стараюсь дать вам больше информации, чем вам нужно, если она ценна."
    ]
  },
  {
    "time": [
      504.179,
      506.729
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
      506.729,
      506.729
    ],
    "en": [
      "Now let’s take a look at a lab in Boson Software’s NetSim for CCNA."
    ],
    "ru": [
      "Теперь давайте взглянем на лабораторию в NetSim от Boson Software для CCNA."
    ]
  }
]