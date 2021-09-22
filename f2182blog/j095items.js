let items = [
  {
    "time": [
      1.22,
      3.76
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
      3.76,
      7.33
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
      7.33,
      11.09
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
      11.09,
      16.67
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
      16.67,
      18.47
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
      18.47,
      24.15
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
      24.15,
      28.689
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
      28.689,
      33.97
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
      33.97,
      38.24
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
      38.24,
      42.52
    ],
    "en": [
      "In this video we’ll configure port security on SW1 and SW2."
    ],
    "ru": [
      "В этом видео мы настроим безопасность портов на SW1 и SW2."
    ]
  },
  {
    "time": [
      42.52,
      48.36
    ],
    "en": [
      "We’ll configure it on SW1’s interfaces connected to the PCs, and on SW2’s G0/1"
    ],
    "ru": [
      "Мы настроим его на интерфейсах SW1, подключенных к ПК, и на G0 / 1 SW2."
    ]
  },
  {
    "time": [
      48.36,
      50.98
    ],
    "en": [
      "interface, connected to SW1."
    ],
    "ru": [
      "интерфейс, подключенный к SW1."
    ]
  },
  {
    "time": [
      50.98,
      55.07
    ],
    "en": [
      "Some of the commands I introduced in the lecture video aren’t supported in packet tracer,"
    ],
    "ru": [
      "Некоторые команды, которые я представил в видео лекции, не поддерживаются в пакетном трассировщике,"
    ]
  },
  {
    "time": [
      55.07,
      56.89
    ],
    "en": [
      "but the most important ones are."
    ],
    "ru": [
      "но самые важные из них."
    ]
  },
  {
    "time": [
      56.89,
      60.17
    ],
    "en": [
      "So, first let’s configure SW1."
    ],
    "ru": [
      "Итак, сначала давайте настроим SW1."
    ]
  },
  {
    "time": [
      60.17,
      65.53
    ],
    "en": [
      "On the F0/1, 2, and 3 interfaces we’ll enable port security with the shutdown violation"
    ],
    "ru": [
      "На интерфейсах F0 / 1, 2 и 3 мы включим безопасность порта с нарушением выключения."
    ]
  },
  {
    "time": [
      65.53,
      73.59
    ],
    "en": [
      "mode, 1 MAC address allowed, sticky learning disabled, and an aging time of 1 hour. ENABLE."
    ],
    "ru": [
      "режим, 1 MAC-адрес разрешен, липкое обучение отключено и время устаревания 1 час. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      73.59,
      79.61
    ],
    "en": [
      "ENABLE. CONF T. The port security configuration of each interface will be the same, so let’s"
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. Конфигурация безопасности порта для каждого интерфейса будет одинаковой, поэтому давайте"
    ]
  },
  {
    "time": [
      79.61,
      83.95
    ],
    "en": [
      "do INTERFACE RANGE F0/1 – 3."
    ],
    "ru": [
      "сделать ДИАПАЗОН ИНТЕРФЕЙСА F0 / 1 - 3."
    ]
  },
  {
    "time": [
      83.95,
      90.88
    ],
    "en": [
      "By default, the violation mode is shutdown, and the maximum number of MAC addresses allowed is also 1."
    ],
    "ru": [
      "По умолчанию режим нарушения выключен, и максимальное разрешенное количество MAC-адресов также равно 1."
    ]
  },
  {
    "time": [
      90.88,
      95.64
    ],
    "en": [
      "is also 1. Sticky MAC address learning is also disabled by default, so we don’t have to configure any of those."
    ],
    "ru": [
      "также 1. Прикрепленное изучение MAC-адресов также отключено по умолчанию, поэтому нам не нужно настраивать какие-либо из них."
    ]
  },
  {
    "time": [
      95.64,
      99.06
    ],
    "en": [
      "any of those. Let’s just set the aging time to 1 hour."
    ],
    "ru": [
      "любой из тех. Давайте просто установим время выдержки на 1 час."
    ]
  },
  {
    "time": [
      99.06,
      104.27000000000001
    ],
    "en": [
      "With the default time of 0 minutes, secure MAC addresses will never age out."
    ],
    "ru": [
      "Если время по умолчанию равно 0 минутам, безопасные MAC-адреса никогда не устареют."
    ]
  },
  {
    "time": [
      104.27000000000001,
      110.18
    ],
    "en": [
      "SWITCHPORT PORT-SECURITY AGING TIME, and then enter the time in minutes, 60."
    ],
    "ru": [
      "SWITCHPORT PORT-SECURITY AGING TIME, а затем введите время в минутах, 60."
    ]
  },
  {
    "time": [
      110.18,
      117.61
    ],
    "en": [
      "Now, port security itself isn’t actually enabled yet, so I’ll enable it. SWITCHPORT PORT-SECURITY."
    ],
    "ru": [
      "Сама по себе защита порта еще не включена, поэтому я ее включу. SWITCHPORT PORT-SECURITY."
    ]
  },
  {
    "time": [
      117.61,
      122.479
    ],
    "en": [
      "SWITCHPORT PORT-SECURITY. But the command is rejected, a common mistake when configuring port security."
    ],
    "ru": [
      "SWITCHPORT PORT-SECURITY. Но команда отклоняется, что является частой ошибкой при настройке безопасности порта."
    ]
  },
  {
    "time": [
      122.479,
      126.67
    ],
    "en": [
      "These interfaces have the default administrative mode of DYNAMIC AUTO."
    ],
    "ru": [
      "Эти интерфейсы имеют административный режим по умолчанию ДИНАМИЧЕСКИЙ АВТО."
    ]
  },
  {
    "time": [
      126.67,
      128.91
    ],
    "en": [
      "Let’s check one of them."
    ],
    "ru": [
      "Давайте проверим один из них."
    ]
  },
  {
    "time": [
      128.91,
      133.319
    ],
    "en": [
      "DO SHOW INTERFACES F0/1 SWITCHPORT."
    ],
    "ru": [
      "ПОКАЗАТЬ ИНТЕРФЕЙСЫ ПЕРЕКЛЮЧАТЕЛЬ F0 / 1."
    ]
  },
  {
    "time": [
      133.319,
      138.2
    ],
    "en": [
      "Up here you can see it, administrative mode dynamic auto."
    ],
    "ru": [
      "Здесь вы можете увидеть это, административный режим динамический автоматический."
    ]
  },
  {
    "time": [
      138.2,
      144.64
    ],
    "en": [
      "To enable port security, the interface must be manually configured as an access port or trunk port."
    ],
    "ru": [
      "Чтобы включить безопасность порта, интерфейс необходимо вручную настроить как порт доступа или порт магистрали."
    ]
  },
  {
    "time": [
      144.64,
      148.51
    ],
    "en": [
      "trunk port. So, SWITCHPORT MODE ACCESS."
    ],
    "ru": [
      "магистральный порт. Итак, ДОСТУП В РЕЖИМ SWITCHPORT."
    ]
  },
  {
    "time": [
      148.51,
      151.81
    ],
    "en": [
      "Now let’s try again. SWITCHPORT PORT-SECURITY."
    ],
    "ru": [
      "А теперь попробуем еще раз. SWITCHPORT PORT-SECURITY."
    ]
  },
  {
    "time": [
      151.81,
      153.97
    ],
    "en": [
      "SWITCHPORT PORT-SECURITY. Okay, it should be enabled."
    ],
    "ru": [
      "SWITCHPORT PORT-SECURITY. Хорошо, он должен быть включен."
    ]
  },
  {
    "time": [
      153.97,
      156.52
    ],
    "en": [
      "I’ll check one of the interfaces."
    ],
    "ru": [
      "Я проверю один из интерфейсов."
    ]
  },
  {
    "time": [
      156.52,
      160.31900000000002
    ],
    "en": [
      "DO SHOW PORT-SECURITY INTERFACE F0/1."
    ],
    "ru": [
      "ПОКАЗАТЬ ИНТЕРФЕЙС БЕЗОПАСНОСТИ ПОРТА F0 / 1."
    ]
  },
  {
    "time": [
      160.31900000000002,
      167.65
    ],
    "en": [
      "Okay, port security is enabled and the default setting of the violation mode is shutdown."
    ],
    "ru": [
      "Хорошо, безопасность порта включена, и по умолчанию режим нарушения отключен."
    ]
  },
  {
    "time": [
      167.65,
      170.9
    ],
    "en": [
      "The aging time of 60 minutes I configured is shown here."
    ],
    "ru": [
      "Здесь показано настроенное мной время выдержки 60 минут."
    ]
  },
  {
    "time": [
      170.9,
      175.74
    ],
    "en": [
      "That’s all we need to configure on SW1."
    ],
    "ru": [
      "Это все, что нам нужно настроить на SW1."
    ]
  },
  {
    "time": [
      175.74,
      177.56
    ],
    "en": [
      "So let’s move on to SW2."
    ],
    "ru": [
      "Итак, перейдем к SW2."
    ]
  },
  {
    "time": [
      177.56,
      183.599
    ],
    "en": [
      "We’ll configure port security on G0/1 with the Restrict violation mode, a maximum of"
    ],
    "ru": [
      "Мы настроим безопасность порта на G0 / 1 с режимом нарушения ограничений, максимум"
    ]
  },
  {
    "time": [
      183.599,
      187.84
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
      183.599,
      187.84
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
      187.84,
      192.41
    ],
    "en": [
      "Why 4 addresses, even though there are only 3 PCs in the network currently?"
    ],
    "ru": [
      "Почему 4 адреса, хотя сейчас в сети всего 3 ПК?"
    ]
  },
  {
    "time": [
      192.41,
      200.24
    ],
    "en": [
      "It’s because SW2 will be receiving CDP messages from SW1, so it will learn SW1’s MAC address too."
    ],
    "ru": [
      "Это связано с тем, что SW2 будет получать сообщения CDP от SW1, поэтому он также узнает MAC-адрес SW1."
    ]
  },
  {
    "time": [
      200.24,
      204.209
    ],
    "en": [
      "too. Okay, let’s configure it. ENABLE."
    ],
    "ru": [
      "тоже. Хорошо, давайте настроим. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      204.209,
      207.9
    ],
    "en": [
      "ENABLE. CONF T. INTERFACE G0/1."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. ИНТЕРФЕЙС G0 / 1."
    ]
  },
  {
    "time": [
      207.9,
      212.959
    ],
    "en": [
      "The default port security violation mode is shutdown, so let’s configure restrict mode."
    ],
    "ru": [
      "По умолчанию режим нарушения безопасности порта отключен, поэтому давайте настроим режим ограничения."
    ]
  },
  {
    "time": [
      212.959,
      217.94
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
      217.94,
      220.629
    ],
    "en": [
      "And then the maximum number of addresses."
    ],
    "ru": [
      "А потом максимальное количество адресов."
    ]
  },
  {
    "time": [
      220.629,
      225.16
    ],
    "en": [
      "SWITCHPORT PORT-SECURITY MAXIMUM 4."
    ],
    "ru": [
      "МАКСИМАЛЬНАЯ БЕЗОПАСНОСТЬ ПОРТА SWITCHPORT 4."
    ]
  },
  {
    "time": [
      225.16,
      228.099
    ],
    "en": [
      "And then enable sticky MAC address learning."
    ],
    "ru": [
      "А затем включите изучение закрепленных MAC-адресов."
    ]
  },
  {
    "time": [
      228.099,
      232.55
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
      232.55,
      234.82999999999998
    ],
    "en": [
      "Finally let’s enable port security."
    ],
    "ru": [
      "Наконец, давайте включим защиту порта."
    ]
  },
  {
    "time": [
      234.82999999999998,
      240.269
    ],
    "en": [
      "There is only 1 VLAN in the network, VLAN 1, so I’ll just configure G0/1 as an access"
    ],
    "ru": [
      "В сети только 1 VLAN, VLAN 1, поэтому я просто настрою G0 / 1 как доступ"
    ]
  },
  {
    "time": [
      240.269,
      245.57
    ],
    "en": [
      "port, although trunk is an option too. SWITCHPORT MODE ACCESS."
    ],
    "ru": [
      "порт, хотя транк - тоже вариант. ДОСТУП В РЕЖИМ SWITCHPORT."
    ]
  },
  {
    "time": [
      245.57,
      249.05
    ],
    "en": [
      "SWITCHPORT MODE ACCESS. Now I’ll enable port security. SWITCHPORT PORT-SECURITY."
    ],
    "ru": [
      "ДОСТУП В РЕЖИМ SWITCHPORT. Теперь я включу безопасность порта. SWITCHPORT PORT-SECURITY."
    ]
  },
  {
    "time": [
      249.05,
      252.88
    ],
    "en": [
      "SWITCHPORT PORT-SECURITY. Okay, let’s check those settings."
    ],
    "ru": [
      "SWITCHPORT PORT-SECURITY. Хорошо, давайте проверим эти настройки."
    ]
  },
  {
    "time": [
      252.88,
      256.62
    ],
    "en": [
      "DO SHOW PORT-SECURITY INTERFACE G0/1."
    ],
    "ru": [
      "ПОКАЗАТЬ ИНТЕРФЕЙС БЕЗОПАСНОСТИ ПОРТА G0 / 1."
    ]
  },
  {
    "time": [
      256.62,
      265.37
    ],
    "en": [
      "Okay, port security is enabled, the violation mode is restrict, and the maximum number of addresses is 4."
    ],
    "ru": [
      "Хорошо, защита порта включена, режим нарушения - ограниченный, максимальное количество адресов - 4."
    ]
  },
  {
    "time": [
      265.37,
      268.53
    ],
    "en": [
      "addresses is 4. As for sticky learning, we’ll test that now."
    ],
    "ru": [
      "адресов равно 4. Что касается липкого обучения, мы это сейчас проверим."
    ]
  },
  {
    "time": [
      268.53,
      278.419
    ],
    "en": [
      "I’ll ping from each PC to R1 so that SW1 and SW2 can learn their MAC addresses. PC1 first."
    ],
    "ru": [
      "Я отправлю эхо-запрос с каждого ПК на R1, чтобы SW1 и SW2 могли узнать свои MAC-адреса. Сначала ПК1."
    ]
  },
  {
    "time": [
      278.419,
      287.01
    ],
    "en": [
      "PC1 first. PING 10.0.0.254. Okay, then PC2."
    ],
    "ru": [
      "Сначала ПК1. ПИНГ 10.0.0.254. Хорошо, тогда PC2."
    ]
  },
  {
    "time": [
      287.01,
      295.15999999999997
    ],
    "en": [
      "Okay, then PC2. PING 10.0.0.254. And finally PC3."
    ],
    "ru": [
      "Хорошо, тогда PC2. ПИНГ 10.0.0.254. И, наконец, PC3."
    ]
  },
  {
    "time": [
      295.15999999999997,
      296.53
    ],
    "en": [
      "And finally PC3. PING 10.0.0.254."
    ],
    "ru": [
      "И, наконец, PC3. ПИНГ 10.0.0.254."
    ]
  },
  {
    "time": [
      296.53,
      303.16
    ],
    "en": [
      "Okay, now let’s check on SW2."
    ],
    "ru": [
      "Хорошо, теперь давайте проверим SW2."
    ]
  },
  {
    "time": [
      303.16,
      306.76
    ],
    "en": [
      "DO SHOW PORT-SECURITY INTERFACE G0/1."
    ],
    "ru": [
      "ПОКАЗАТЬ ИНТЕРФЕЙС БЕЗОПАСНОСТИ ПОРТА G0 / 1."
    ]
  },
  {
    "time": [
      306.76,
      314.27
    ],
    "en": [
      "So, the total MAC addresses learned is 4, PCs 1, 2, 3, and SW1."
    ],
    "ru": [
      "Итак, общее количество изученных MAC-адресов - 4, ПК 1, 2, 3 и SW1."
    ]
  },
  {
    "time": [
      314.27,
      316.64
    ],
    "en": [
      "And all 4 of those MAC addresses are sticky."
    ],
    "ru": [
      "И все 4 из этих MAC-адресов липкие."
    ]
  },
  {
    "time": [
      316.64,
      322.19
    ],
    "en": [
      "Let’s check the config of G0/1. DO SHOW RUN."
    ],
    "ru": [
      "Давайте проверим конфигурацию G0 / 1. ПОКАЗАТЬ БЕГ."
    ]
  },
  {
    "time": [
      322.19,
      329.85
    ],
    "en": [
      "DO SHOW RUN. Scroll down to G0/1, and here we can see the MAC addresses of PC1, PC2, PC3, and this one"
    ],
    "ru": [
      "ПОКАЗАТЬ БЕГ. Прокрутите вниз до G0 / 1, и здесь мы увидим MAC-адреса ПК1, ПК2, ПК3 и этого"
    ]
  },
  {
    "time": [
      329.85,
      332.18
    ],
    "en": [
      "here must be SW1."
    ],
    "ru": [
      "здесь должен быть SW1."
    ]
  },
  {
    "time": [
      332.18,
      334.74
    ],
    "en": [
      "And let’s check the MAC address table."
    ],
    "ru": [
      "И давайте проверим таблицу MAC-адресов."
    ]
  },
  {
    "time": [
      334.74,
      336.94
    ],
    "en": [
      "DO SHOW MAC ADDRESS-TABLE."
    ],
    "ru": [
      "ПОКАЗАТЬ АДРЕСНУЮ ТАБЛИЦУ MAC."
    ]
  },
  {
    "time": [
      336.94,
      340.919
    ],
    "en": [
      "Okay, there are the same 4 MAC addresses."
    ],
    "ru": [
      "Хорошо, есть те же 4 MAC-адреса."
    ]
  },
  {
    "time": [
      340.919,
      344.44
    ],
    "en": [
      "Notice the type of STATIC, even though they were dynamically learned."
    ],
    "ru": [
      "Обратите внимание на тип STATIC, даже если они были запрограммированы динамически."
    ]
  },
  {
    "time": [
      344.44,
      347.47
    ],
    "en": [
      "That’s because of sticky learning."
    ],
    "ru": [
      "Это из-за трудного обучения."
    ]
  },
  {
    "time": [
      347.47,
      350.83
    ],
    "en": [
      "And one more command, DO SHOW PORT-SECURITY."
    ],
    "ru": [
      "И еще одна команда: ПОКАЗАТЬ БЕЗОПАСНОСТЬ ПОРТА."
    ]
  },
  {
    "time": [
      350.83,
      359.3
    ],
    "en": [
      "So, G0/1 has a maximum of 4 secure MAC addresses, it currently has learned 4, there are 0 security"
    ],
    "ru": [
      "Итак, G0 / 1 имеет максимум 4 безопасных MAC-адреса, в настоящее время он узнал 4, а безопасности 0."
    ]
  },
  {
    "time": [
      359.3,
      363.84
    ],
    "en": [
      "violations, and the security action is restrict."
    ],
    "ru": [
      "нарушения, и действие безопасности ограничено."
    ]
  },
  {
    "time": [
      363.84,
      366.86
    ],
    "en": [
      "Now let’s trigger some violations and see what happens."
    ],
    "ru": [
      "А теперь давайте вызовем некоторые нарушения и посмотрим, что произойдет."
    ]
  },
  {
    "time": [
      366.86,
      371.18
    ],
    "en": [
      "First, I’ll trigger a violation on SW2."
    ],
    "ru": [
      "Сначала я вызову нарушение на SW2."
    ]
  },
  {
    "time": [
      371.18,
      378.73
    ],
    "en": [
      "To do that, I’ll go on SW1 and configure the VLAN 1 SVI. INTERFACE VLAN1."
    ],
    "ru": [
      "Для этого я перейду на SW1 и настрою SVI VLAN 1. ИНТЕРФЕЙС VLAN1."
    ]
  },
  {
    "time": [
      378.73,
      386.4
    ],
    "en": [
      "INTERFACE VLAN1. IP ADDRESS 10.0.0.10 255.255.255.0. NO SHUTDOWN."
    ],
    "ru": [
      "ИНТЕРФЕЙС VLAN1. IP-АДРЕС 10.0.0.10 255.255.255.0. НЕТ ОСТАНОВА."
    ]
  },
  {
    "time": [
      386.4,
      395.07
    ],
    "en": [
      "NO SHUTDOWN. Okay, so if SW1 tries to ping R1, the source MAC address will be the MAC address of the VLAN 1 SVI."
    ],
    "ru": [
      "НЕТ ОСТАНОВА. Итак, если SW1 попытается проверить связь с R1, MAC-адрес источника будет MAC-адресом SVI VLAN 1."
    ]
  },
  {
    "time": [
      395.07,
      400.96
    ],
    "en": [
      "VLAN 1 SVI. SW2 learned the MAC address of SW1’s G0/1 interface, but it doesn’t know the MAC address"
    ],
    "ru": [
      "VLAN 1 SVI. SW2 узнал MAC-адрес интерфейса G0 / 1 SW1, но не знает MAC-адрес."
    ]
  },
  {
    "time": [
      400.96,
      404.05
    ],
    "en": [
      "of the VLAN 1 SVI."
    ],
    "ru": [
      "сети VLAN 1 SVI."
    ]
  },
  {
    "time": [
      404.05,
      408.37
    ],
    "en": [
      "So let’s try that ping. DO PING 10.0.0.254."
    ],
    "ru": [
      "Итак, давайте попробуем этот пинг. ПИНГ 10.0.0.254."
    ]
  },
  {
    "time": [
      408.37,
      412.13
    ],
    "en": [
      "DO PING 10.0.0.254. Okay, the ping isn’t working."
    ],
    "ru": [
      "ПИНГ 10.0.0.254. Ладно, пинг не работает."
    ]
  },
  {
    "time": [
      412.13,
      418.27
    ],
    "en": [
      "That’s because SW2 is blocking the pings because of the unauthorized source MAC address."
    ],
    "ru": [
      "Это потому, что SW2 блокирует эхо-запросы из-за неавторизованного MAC-адреса источника."
    ]
  },
  {
    "time": [
      418.27,
      421.91
    ],
    "en": [
      "Let’s check on SW2."
    ],
    "ru": [
      "Давайте проверим SW2."
    ]
  },
  {
    "time": [
      421.91,
      425.35
    ],
    "en": [
      "DO SHOW PORT-SECURITY INTERFACE G0/1."
    ],
    "ru": [
      "ПОКАЗАТЬ ИНТЕРФЕЙС БЕЗОПАСНОСТИ ПОРТА G0 / 1."
    ]
  },
  {
    "time": [
      425.35,
      431.669
    ],
    "en": [
      "Okay, notice the port status is still secure-up, but the violation counter has been incremented."
    ],
    "ru": [
      "Хорошо, обратите внимание, что статус порта по-прежнему безопасен, но счетчик нарушений был увеличен."
    ]
  },
  {
    "time": [
      431.669,
      437.98
    ],
    "en": [
      "There haven’t been any syslog messages, that might be an issue with packet tracer."
    ],
    "ru": [
      "Не было никаких сообщений системного журнала, это может быть проблема с трассировщиком пакетов."
    ]
  },
  {
    "time": [
      437.98,
      441.55
    ],
    "en": [
      "By default, a syslog message should be displayed in the console."
    ],
    "ru": [
      "По умолчанию в консоли должно отображаться сообщение системного журнала."
    ]
  },
  {
    "time": [
      441.55,
      444.08
    ],
    "en": [
      "Anyway, that’s the restrict mode."
    ],
    "ru": [
      "В любом случае, это режим ограничения."
    ]
  },
  {
    "time": [
      444.08,
      447.46
    ],
    "en": [
      "Now let’s trigger a violation on SW1."
    ],
    "ru": [
      "Теперь давайте вызовем нарушение на SW1."
    ]
  },
  {
    "time": [
      447.46,
      451.55
    ],
    "en": [
      "To do that, I’ll change the MAC address of PC1."
    ],
    "ru": [
      "Для этого я изменю MAC-адрес ПК1."
    ]
  },
  {
    "time": [
      451.55,
      459.069
    ],
    "en": [
      "To do that in packet tracer, go to the config tab of PC1, click on FastEthernet0, and then"
    ],
    "ru": [
      "Для этого в пакетном трассировщике перейдите на вкладку конфигурации ПК1, щелкните FastEthernet0, а затем"
    ]
  },
  {
    "time": [
      459.069,
      460.99
    ],
    "en": [
      "change the MAC address here."
    ],
    "ru": [
      "измените здесь MAC-адрес."
    ]
  },
  {
    "time": [
      460.99,
      464.68
    ],
    "en": [
      "I’ll change the last ‘1’ to an ‘A’."
    ],
    "ru": [
      "Я заменю последнюю «1» на «А»."
    ]
  },
  {
    "time": [
      464.68,
      468.58
    ],
    "en": [
      "And let’s try to ping R1. PING 10.0.0.254."
    ],
    "ru": [
      "А давайте попробуем пропинговать R1. ПИНГ 10.0.0.254."
    ]
  },
  {
    "time": [
      468.58,
      472.419
    ],
    "en": [
      "PING 10.0.0.254. Okay, it doesn’t work this time."
    ],
    "ru": [
      "ПИНГ 10.0.0.254. Ладно, на этот раз не работает."
    ]
  },
  {
    "time": [
      472.419,
      475.05
    ],
    "en": [
      "Let’s take a look on SW1."
    ],
    "ru": [
      "Давайте посмотрим на SW1."
    ]
  },
  {
    "time": [
      475.05,
      481.381
    ],
    "en": [
      "Okay, here syslog messages have been shown for the F0/1 interface being shutdown, but"
    ],
    "ru": [
      "Хорошо, здесь были показаны сообщения системного журнала для интерфейса F0 / 1, который отключается, но"
    ]
  },
  {
    "time": [
      481.381,
      484.669
    ],
    "en": [
      "no actual port security related syslog messages."
    ],
    "ru": [
      "нет фактических сообщений системного журнала, связанных с безопасностью порта."
    ]
  },
  {
    "time": [
      484.669,
      488.05
    ],
    "en": [
      "Anyway, let’s check the interface."
    ],
    "ru": [
      "В любом случае, давайте проверим интерфейс."
    ]
  },
  {
    "time": [
      488.05,
      491.04
    ],
    "en": [
      "DO SHOW PORT-SECURITY INTERFACE F0/1."
    ],
    "ru": [
      "ПОКАЗАТЬ ИНТЕРФЕЙС БЕЗОПАСНОСТИ ПОРТА F0 / 1."
    ]
  },
  {
    "time": [
      491.04,
      498.21
    ],
    "en": [
      "Okay, the state is secure-shutdown, and the security violation count is 1."
    ],
    "ru": [
      "Хорошо, состояние - безопасное завершение работы, и количество нарушений безопасности равно 1."
    ]
  },
  {
    "time": [
      498.21,
      503.86
    ],
    "en": [
      "Now, errdisable recovery isn’t available in packet tracer so if you want to re-enable"
    ],
    "ru": [
      "Теперь восстановление с отключением из-за ошибки недоступно в пакетном трассировщике, поэтому, если вы хотите снова включить"
    ]
  },
  {
    "time": [
      503.86,
      506.65
    ],
    "en": [
      "the interface, you’ll need to do it manually."
    ],
    "ru": [
      "интерфейса, вам нужно будет сделать это вручную."
    ]
  },
  {
    "time": [
      506.65,
      511.889
    ],
    "en": [
      "Anyway, in this lab we did some basic port security configurations and observed how the"
    ],
    "ru": [
      "В любом случае, в этой лабораторной работе мы выполнили некоторые базовые настройки безопасности портов и наблюдали, как"
    ]
  },
  {
    "time": [
      511.889,
      514.44
    ],
    "en": [
      "shutdown and restrict violation modes work."
    ],
    "ru": [
      "работают режимы отключения и нарушения ограничений."
    ]
  },
  {
    "time": [
      514.44,
      515.899
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
      515.899,
      515.899
    ],
    "en": [
      "Next, let’s take a look at a bonus lab in Boson Software’s NetSim for CCNA."
    ],
    "ru": [
      "Затем давайте взглянем на бонусную лабораторию в NetSim для CCNA от Boson Software."
    ]
  }
]