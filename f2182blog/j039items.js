let items = [
  {
    "time": [
      1.43,
      3.929
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
      3.929,
      7.45
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
      7.45,
      11.54
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
      11.54,
      17.68
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
      17.68,
      19.01
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
      19.01,
      23.26
    ],
    "en": [
      "Also, remember to download this practice lab from the link in the description and try it"
    ],
    "ru": [
      "Кроме того, не забудьте загрузить эту практическую лабораторию по ссылке в описании и попробовать ее."
    ]
  },
  {
    "time": [
      23.26,
      26.83
    ],
    "en": [
      "out yourself in packet tracer."
    ],
    "ru": [
      "вытащите себя в пакетный трассировщик."
    ]
  },
  {
    "time": [
      26.83,
      31.24
    ],
    "en": [
      "If you want more labs like these, I highly recommend picking up Boson’s NetSim for"
    ],
    "ru": [
      "Если вам нужно больше подобных лабораторий, я настоятельно рекомендую приобрести Boson's NetSim для"
    ]
  },
  {
    "time": [
      31.24,
      35.19
    ],
    "en": [
      "the CCNA, click the link in the video description to check it out."
    ],
    "ru": [
      "CCNA, щелкните ссылку в описании видео, чтобы ознакомиться с ним."
    ]
  },
  {
    "time": [
      35.19,
      40.25
    ],
    "en": [
      "It’s a network simulator like packet tracer, but it’s even better, and it includes all"
    ],
    "ru": [
      "Это сетевой симулятор, похожий на трассировщик пакетов, но он еще лучше и включает в себя все"
    ]
  },
  {
    "time": [
      40.25,
      45.579
    ],
    "en": [
      "of these guided labs to not only help you get hands-on practice configuring and troubleshooting,"
    ],
    "ru": [
      "из этих лабораторных работ, которые не только помогут вам на практике настроить и устранить неполадки,"
    ]
  },
  {
    "time": [
      45.579,
      48.45
    ],
    "en": [
      "but also deepen your understanding of the exam topics."
    ],
    "ru": [
      "но также углубите свое понимание экзаменационных тем."
    ]
  },
  {
    "time": [
      48.45,
      54.07
    ],
    "en": [
      "I used it myself when studying for my certifications, so I feel confident about recommending it"
    ],
    "ru": [
      "Я сам использовал его, когда готовился к получению сертификатов, поэтому могу с уверенностью рекомендовать его."
    ]
  },
  {
    "time": [
      54.07,
      55.8
    ],
    "en": [
      "to all of you."
    ],
    "ru": [
      "всем вам."
    ]
  },
  {
    "time": [
      55.8,
      60.16
    ],
    "en": [
      "Watch until the end of this video, we’ll take a look at a lab from NetSim."
    ],
    "ru": [
      "Смотрите до конца этого видео, мы рассмотрим лабораторную работу от NetSim."
    ]
  },
  {
    "time": [
      60.16,
      66.07
    ],
    "en": [
      "If you want to get your own copy of NetSim, please follow the link in the video description."
    ],
    "ru": [
      "Если вы хотите получить собственную копию NetSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      66.07,
      69.76
    ],
    "en": [
      "In this lab we will do some basic STP configurations."
    ],
    "ru": [
      "В этой лабораторной работе мы сделаем несколько основных конфигураций STP."
    ]
  },
  {
    "time": [
      69.76,
      75.31
    ],
    "en": [
      "STP runs by default, so you don’t actually have to configure it, however if you just"
    ],
    "ru": [
      "STP работает по умолчанию, поэтому вам не нужно его настраивать, однако, если вы просто"
    ]
  },
  {
    "time": [
      75.31,
      80.549
    ],
    "en": [
      "leave it at the default settings there is no guarantee that traffic will be following the optimal path."
    ],
    "ru": [
      "оставьте настройки по умолчанию, нет гарантии, что трафик будет следовать по оптимальному пути."
    ]
  },
  {
    "time": [
      80.549,
      86.5
    ],
    "en": [
      "the optimal path. So, it’s a good idea to explicitly configure which switch should be the root for each VLAN,"
    ],
    "ru": [
      "оптимальный путь. Поэтому рекомендуется явно указать, какой коммутатор должен быть корневым для каждой VLAN,"
    ]
  },
  {
    "time": [
      86.5,
      91.53
    ],
    "en": [
      "and also set different roots for different VLANs so each VLAN uses different links, balancing"
    ],
    "ru": [
      "а также установить разные корни для разных VLAN, чтобы каждая VLAN использовала разные ссылки, балансируя"
    ]
  },
  {
    "time": [
      91.53,
      94.31
    ],
    "en": [
      "the load of the network traffic."
    ],
    "ru": [
      "загрузка сетевого трафика."
    ]
  },
  {
    "time": [
      94.31,
      100.45
    ],
    "en": [
      "Step 1 in this video is to use the CLI to check the current STP topology, identify the"
    ],
    "ru": [
      "Шаг 1 в этом видео - использовать интерфейс командной строки для проверки текущей топологии STP, определения"
    ]
  },
  {
    "time": [
      100.45,
      105.08
    ],
    "en": [
      "root bridge, and the STP role and state of each port on each switch."
    ],
    "ru": [
      "корневой мост, а также роль и состояние STP каждого порта на каждом коммутаторе."
    ]
  },
  {
    "time": [
      105.08,
      108.799
    ],
    "en": [
      "I’ll start on SW1."
    ],
    "ru": [
      "Начну с SW1."
    ]
  },
  {
    "time": [
      108.799,
      112.799
    ],
    "en": [
      "First let’s get into privileged exec mode. ENABLE."
    ],
    "ru": [
      "Сначала перейдем в привилегированный режим exec. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      112.799,
      117.99000000000001
    ],
    "en": [
      "ENABLE. We only need one show command for this. SHOW SPANNING-TREE."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. Для этого нам понадобится только одна команда show. ПОКАЗАТЬ ДЕРЕВО."
    ]
  },
  {
    "time": [
      117.99000000000001,
      123.28
    ],
    "en": [
      "SHOW SPANNING-TREE. Information is displayed separately for VLAN1 and VLAN2, however because I haven’t done"
    ],
    "ru": [
      "ПОКАЗАТЬ ДЕРЕВО. Информация отображается отдельно для VLAN1 и VLAN2, однако, поскольку я этого не сделал"
    ]
  },
  {
    "time": [
      123.28,
      127.93
    ],
    "en": [
      "any configuration yet their settings will be the same, the same root bridge and the"
    ],
    "ru": [
      "любая конфигурация, но их настройки будут такими же, тот же корневой мост и"
    ]
  },
  {
    "time": [
      127.93,
      132.53
    ],
    "en": [
      "role of each port will be the same also, so let’s just look at VLAN1."
    ],
    "ru": [
      "роль каждого порта также будет одинаковой, поэтому давайте просто посмотрим на VLAN1."
    ]
  },
  {
    "time": [
      132.53,
      138.7
    ],
    "en": [
      "SW1 is not the root bridge, notice the MAC address is different in the Root ID section"
    ],
    "ru": [
      "SW1 не является корневым мостом, обратите внимание, что MAC-адрес отличается в разделе Root ID."
    ]
  },
  {
    "time": [
      138.7,
      141.299
    ],
    "en": [
      "and the Bridge ID section."
    ],
    "ru": [
      "и раздел ID моста."
    ]
  },
  {
    "time": [
      141.299,
      144.36
    ],
    "en": [
      "As for the port roles, you can see them here."
    ],
    "ru": [
      "Что касается ролей портов, вы можете увидеть их здесь."
    ]
  },
  {
    "time": [
      144.36,
      149.26
    ],
    "en": [
      "F0/3 is the root port, so I’m guessing SW2 is the root bridge."
    ],
    "ru": [
      "F0 / 3 - это корневой порт, поэтому я предполагаю, что SW2 - это корневой мост."
    ]
  },
  {
    "time": [
      149.26,
      153.66899999999998
    ],
    "en": [
      "Let’s go on SW2 now to check if that is the case."
    ],
    "ru": [
      "Давайте теперь перейдем к SW2, чтобы проверить, так ли это."
    ]
  },
  {
    "time": [
      153.66899999999998,
      160.599
    ],
    "en": [
      "First enter privileged exec mode. ENABLE. ENABLE. SHOW SPANNING-TREE."
    ],
    "ru": [
      "Сначала войдите в привилегированный режим exec. ВКЛЮЧИТЬ. ВКЛЮЧИТЬ. ПОКАЗАТЬ ДЕРЕВО."
    ]
  },
  {
    "time": [
      160.599,
      165.239
    ],
    "en": [
      "ENABLE. SHOW SPANNING-TREE. In the root ID section, it clearly states ‘this bridge is the root’."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. ПОКАЗАТЬ ДЕРЕВО. В разделе корневого идентификатора четко указано, что «этот мост является корневым»."
    ]
  },
  {
    "time": [
      165.239,
      169.849
    ],
    "en": [
      "You can also see that all of its interfaces are designated ports, in a forwarding state."
    ],
    "ru": [
      "Вы также можете видеть, что все его интерфейсы являются назначенными портами в состоянии пересылки."
    ]
  },
  {
    "time": [
      169.849,
      174.299
    ],
    "en": [
      "This is the case for both VLAN1 and VLAN2."
    ],
    "ru": [
      "Это касается как VLAN1, так и VLAN2."
    ]
  },
  {
    "time": [
      174.299,
      179.449
    ],
    "en": [
      "Without any specific configuration, each VLAN will have the same root, and the port roles"
    ],
    "ru": [
      "Без какой-либо конкретной конфигурации каждая VLAN будет иметь один и тот же корень и роли порта."
    ]
  },
  {
    "time": [
      179.449,
      182.15
    ],
    "en": [
      "will be the same in each VLAN."
    ],
    "ru": [
      "будет одинаковым во всех VLAN."
    ]
  },
  {
    "time": [
      182.15,
      184.519
    ],
    "en": [
      "Next let’s go on SW3."
    ],
    "ru": [
      "Теперь перейдем к SW3."
    ]
  },
  {
    "time": [
      184.519,
      189.43
    ],
    "en": [
      "We know its not the root, but which port do you think is the root port?"
    ],
    "ru": [
      "Мы знаем, что это не корень, но какой порт, по вашему мнению, является корневым?"
    ]
  },
  {
    "time": [
      189.43,
      194.299
    ],
    "en": [
      "It should be F0/2, because it’s directly connected, and all of these connections are"
    ],
    "ru": [
      "Это должно быть F0 / 2, потому что он подключен напрямую, и все эти подключения"
    ]
  },
  {
    "time": [
      194.299,
      203.059
    ],
    "en": [
      "fastethernet, there are no gigabit ethernet connections which have a lower cost. ENABLE. ENABLE. SHOW SPANNING-TREE."
    ],
    "ru": [
      "fastethernet не существует гигабитных Ethernet-соединений, которые имеют более низкую стоимость. ВКЛЮЧИТЬ. ВКЛЮЧИТЬ. ПОКАЗАТЬ ДЕРЕВО."
    ]
  },
  {
    "time": [
      203.059,
      208.56
    ],
    "en": [
      "ENABLE. SHOW SPANNING-TREE. Indeed, F0/2 is the root port, and F0/1 is designated."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. ПОКАЗАТЬ ДЕРЕВО. Действительно, F0 / 2 является корневым портом, а F0 / 1 обозначен."
    ]
  },
  {
    "time": [
      208.56,
      211.72
    ],
    "en": [
      "Finally, let’s check SW4."
    ],
    "ru": [
      "Наконец, давайте проверим SW4."
    ]
  },
  {
    "time": [
      211.72,
      221.01
    ],
    "en": [
      "Its F0/1 interface should be the root port. ENABLE. ENABLE. SHOW SPANNING-TREE."
    ],
    "ru": [
      "Его интерфейс F0 / 1 должен быть корневым портом. ВКЛЮЧИТЬ. ВКЛЮЧИТЬ. ПОКАЗАТЬ ДЕРЕВО."
    ]
  },
  {
    "time": [
      221.01,
      226.89
    ],
    "en": [
      "ENABLE. SHOW SPANNING-TREE. As expected, F0/1 is the root port, also F0/2 is blocking."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. ПОКАЗАТЬ ДЕРЕВО. Как и ожидалось, F0 / 1 является корневым портом, также F0 / 2 блокируется."
    ]
  },
  {
    "time": [
      226.89,
      232.909
    ],
    "en": [
      "The role says ‘alternate’, this means a non-designated port."
    ],
    "ru": [
      "В роли указано «альтернативный», что означает неназначенный порт."
    ]
  },
  {
    "time": [
      232.909,
      239.219
    ],
    "en": [
      "Step 2 is to configure load balancing by making SW1 the primary root for VLAN1 and secondary"
    ],
    "ru": [
      "Шаг 2 - настроить балансировку нагрузки, сделав SW1 первичным корнем для VLAN1 и вторичным."
    ]
  },
  {
    "time": [
      239.219,
      242.68
    ],
    "en": [
      "root for VLAN2, and the opposite on SW2."
    ],
    "ru": [
      "root для VLAN2 и наоборот для SW2."
    ]
  },
  {
    "time": [
      242.68,
      246.53
    ],
    "en": [
      "Let’s return to SW1."
    ],
    "ru": [
      "Вернемся к SW1."
    ]
  },
  {
    "time": [
      246.53,
      254.329
    ],
    "en": [
      "Go to global config mode, CONF T. Let’s configure it as the root for VLAN1."
    ],
    "ru": [
      "Перейдите в режим глобальной конфигурации, CONF T. Давайте настроим его как корень для VLAN1."
    ]
  },
  {
    "time": [
      254.329,
      258.34
    ],
    "en": [
      "SPANNING-TREE VLAN 1 ROOT PRIMARY."
    ],
    "ru": [
      "SPANNING-TREE VLAN 1 ROOT PRIMARY."
    ]
  },
  {
    "time": [
      258.34,
      263.99
    ],
    "en": [
      "Remember to include the VLAN in the command, in Cisco’s PVST+ all configurations are"
    ],
    "ru": [
      "Не забудьте включить VLAN в команду, в Cisco PVST + все конфигурации"
    ]
  },
  {
    "time": [
      263.99,
      266.1
    ],
    "en": [
      "done on a per-VLAN basis."
    ],
    "ru": [
      "выполняется для каждой VLAN."
    ]
  },
  {
    "time": [
      266.1,
      270.72
    ],
    "en": [
      "Next, the secondary root for VLAN2."
    ],
    "ru": [
      "Далее вторичный корень для VLAN2."
    ]
  },
  {
    "time": [
      270.72,
      274.8
    ],
    "en": [
      "SPANNING-TREE VLAN 2 ROOT SECONDARY."
    ],
    "ru": [
      "SPANNING-TREE VLAN 2 ROOT SECONDARY."
    ]
  },
  {
    "time": [
      274.8,
      284.889
    ],
    "en": [
      "Now I’ll hop on to SW2. CONF T. SPANNING-TREE VLAN 1 ROOT SECONDARY."
    ],
    "ru": [
      "Теперь я перейду на SW2. CONF T. SPANNING-TREE VLAN 1 ROOT SECONDARY."
    ]
  },
  {
    "time": [
      284.889,
      289.389
    ],
    "en": [
      "SPANNING-TREE VLAN 2 ROOT PRIMARY. Okay, that’s it."
    ],
    "ru": [
      "SPANNING-TREE VLAN 2 ROOT PRIMARY. Ладно, вот и все."
    ]
  },
  {
    "time": [
      289.389,
      293.62
    ],
    "en": [
      "Okay, that’s it. So, what is the STP role and state of each port now?"
    ],
    "ru": [
      "Ладно, вот и все. Итак, какова сейчас роль и состояние каждого порта в протоколе STP?"
    ]
  },
  {
    "time": [
      293.62,
      301.789
    ],
    "en": [
      "Well, here on SW2, in VLAN2 all ports should be designated, but now on SW1 F0/3 should"
    ],
    "ru": [
      "Ну вот на SW2, в VLAN2 все порты должны быть обозначены, а теперь на SW1 F0 / 3 должен"
    ]
  },
  {
    "time": [
      301.789,
      308.87
    ],
    "en": [
      "be the root port, because it’s directly connected to the new root SW1. Let’s check."
    ],
    "ru": [
      "быть корневым портом, потому что он напрямую подключен к новому корневому SW1. Давайте проверим."
    ]
  },
  {
    "time": [
      308.87,
      311.15
    ],
    "en": [
      "Let’s check. DO SHOW SPANNING-TREE."
    ],
    "ru": [
      "Давайте проверим. ПОКАЗАТЬ ДЕРЕВО."
    ]
  },
  {
    "time": [
      311.15,
      322.139
    ],
    "en": [
      "So, for VLAN2 it is still the root, but for VLAN1 F0/3 is now the root port, as expected."
    ],
    "ru": [
      "Итак, для VLAN2 он по-прежнему является корневым, но для VLAN1 F0 / 3 теперь является корневым портом, как и ожидалось."
    ]
  },
  {
    "time": [
      322.139,
      325.9
    ],
    "en": [
      "The other ports are designated ports in a forwarding state."
    ],
    "ru": [
      "Остальные порты являются назначенными портами в состоянии пересылки."
    ]
  },
  {
    "time": [
      325.9,
      329.05
    ],
    "en": [
      "Let’s go back and check on SW1."
    ],
    "ru": [
      "Вернемся и проверим SW1."
    ]
  },
  {
    "time": [
      329.05,
      338.15
    ],
    "en": [
      "In VLAN1 all ports should be designated, but in VLAN2 F0/3 should still be the root port, like before."
    ],
    "ru": [
      "В VLAN1 все порты должны быть назначены, но в VLAN2 F0 / 3, как и раньше, должен быть корневым портом."
    ]
  },
  {
    "time": [
      338.15,
      340.11
    ],
    "en": [
      "like before. DO SHOW SPANNING-TREE."
    ],
    "ru": [
      "как раньше. ПОКАЗАТЬ ДЕРЕВО."
    ]
  },
  {
    "time": [
      340.11,
      348.46
    ],
    "en": [
      "So, indeed in VLAN2 F0/3 is the root port, F0/1 and F0/2 are designated."
    ],
    "ru": [
      "Итак, действительно в VLAN2 F0 / 3 является корневым портом, обозначены F0 / 1 и F0 / 2."
    ]
  },
  {
    "time": [
      348.46,
      355.889
    ],
    "en": [
      "In VLAN1 however SW1 is now the root bridge, so all ports are designated."
    ],
    "ru": [
      "Однако в VLAN1 SW1 теперь является корневым мостом, поэтому все порты назначены."
    ]
  },
  {
    "time": [
      355.889,
      362.689
    ],
    "en": [
      "In step 3 and step 4 we are going to manipulate a couple STP port settings and see the effects."
    ],
    "ru": [
      "На шагах 3 и 4 мы собираемся изменить пару настроек порта STP и увидеть эффекты."
    ]
  },
  {
    "time": [
      362.689,
      369.5
    ],
    "en": [
      "First up, we will increase the cost of SW4’s F0/2 interface to 100 in VLAN1, and see if"
    ],
    "ru": [
      "Во-первых, мы увеличим стоимость интерфейса F0 / 2 SW4 до 100 в VLAN1 и посмотрим,"
    ]
  },
  {
    "time": [
      369.5,
      371.69
    ],
    "en": [
      "it selects a different root port."
    ],
    "ru": [
      "он выбирает другой корневой порт."
    ]
  },
  {
    "time": [
      371.69,
      377.46
    ],
    "en": [
      "First, let’s confirm that the current root port is F0/2, it should be for VLAN 1."
    ],
    "ru": [
      "Во-первых, давайте подтвердим, что текущий корневой порт - F0 / 2, он должен быть для VLAN 1."
    ]
  },
  {
    "time": [
      377.46,
      381.229
    ],
    "en": [
      "Let’s view the spanning tree for VLAN1 only."
    ],
    "ru": [
      "Давайте рассмотрим связующее дерево только для VLAN1."
    ]
  },
  {
    "time": [
      381.229,
      385.63
    ],
    "en": [
      "SHOW SPANNING-TREE VLAN 1."
    ],
    "ru": [
      "ПОКАЗАТЬ SPANNING-TREE VLAN 1."
    ]
  },
  {
    "time": [
      385.63,
      393.07
    ],
    "en": [
      "Okay, as expected F0/2 is the root port, it has the lowest cost to SW1, the root."
    ],
    "ru": [
      "Хорошо, как и ожидалось, F0 / 2 является корневым портом, он имеет наименьшую стоимость для SW1, корневого порта."
    ]
  },
  {
    "time": [
      393.07,
      395.59000000000003
    ],
    "en": [
      "Let’s change that cost."
    ],
    "ru": [
      "Давайте изменим эту стоимость."
    ]
  },
  {
    "time": [
      395.59000000000003,
      397.699
    ],
    "en": [
      "Before doing so, what do you think will happen?"
    ],
    "ru": [
      "Как вы думаете, что произойдет до этого?"
    ]
  },
  {
    "time": [
      397.699,
      401.53
    ],
    "en": [
      "What is the first criteria in selecting the root port?"
    ],
    "ru": [
      "Каковы первые критерии выбора корневого порта?"
    ]
  },
  {
    "time": [
      401.53,
      407.849
    ],
    "en": [
      "It’s the cost, so increasing the cost to over 5 times the current cost should cause"
    ],
    "ru": [
      "Это стоимость, поэтому увеличение стоимости более чем в 5 раз по сравнению с текущей стоимостью должно вызвать"
    ]
  },
  {
    "time": [
      407.849,
      412.33
    ],
    "en": [
      "SW4 to select a different root port. Let’s try."
    ],
    "ru": [
      "SW4, чтобы выбрать другой корневой порт. Давай попробуем."
    ]
  },
  {
    "time": [
      412.33,
      419.259
    ],
    "en": [
      "Let’s try. The configuration is done from interface config mode, so INTERFACE F0/2."
    ],
    "ru": [
      "Давай попробуем. Конфигурация выполняется в режиме конфигурации интерфейса, поэтому ИНТЕРФЕЙС F0 / 2."
    ]
  },
  {
    "time": [
      419.259,
      423.319
    ],
    "en": [
      "SPANNING-TREE VLAN 1 COST 100."
    ],
    "ru": [
      "SPANNING-TREE VLAN 1 СТОИМОСТЬ 100."
    ]
  },
  {
    "time": [
      423.319,
      427.08
    ],
    "en": [
      "Now let’s view the spanning-tree just for VLAN 1 again."
    ],
    "ru": [
      "Теперь давайте снова рассмотрим связующее дерево только для VLAN 1."
    ]
  },
  {
    "time": [
      427.08,
      430.49
    ],
    "en": [
      "DO SHOW SPANNING-TREE VLAN 1."
    ],
    "ru": [
      "ПОКАЗАТЬ VLAN SPANNING-TREE 1."
    ]
  },
  {
    "time": [
      430.49,
      437.139
    ],
    "en": [
      "Okay, as expected F0/2 is no longer the root port, it has changed to a blocking state,"
    ],
    "ru": [
      "Хорошо, как и ожидалось, F0 / 2 больше не является корневым портом, он перешел в состояние блокировки,"
    ]
  },
  {
    "time": [
      437.139,
      441.389
    ],
    "en": [
      "and now F0/1 is the root port."
    ],
    "ru": [
      "и теперь F0 / 1 - корневой порт."
    ]
  },
  {
    "time": [
      441.389,
      446.889
    ],
    "en": [
      "For step 4 we will increase the priority of SW1’s F0/1 to 240, the highest possible"
    ],
    "ru": [
      "На шаге 4 мы увеличим приоритет F0 / 1 переключателя SW1 до 240, максимально возможного."
    ]
  },
  {
    "time": [
      446.889,
      452.8
    ],
    "en": [
      "priority number, however in STP a lower number is actually treated with higher priority,"
    ],
    "ru": [
      "номер приоритета, однако в STP меньшее число фактически обрабатывается с более высоким приоритетом,"
    ]
  },
  {
    "time": [
      452.8,
      459.43
    ],
    "en": [
      "so really we are lowering the priority to 240, even though the number itself is greater."
    ],
    "ru": [
      "так что на самом деле мы понижаем приоритет до 240, хотя само число больше."
    ]
  },
  {
    "time": [
      459.43,
      463.53
    ],
    "en": [
      "Will this effect SW3’s selection of a root port?"
    ],
    "ru": [
      "Повлияет ли это на выбор корневого порта SW3?"
    ]
  },
  {
    "time": [
      463.53,
      468.539
    ],
    "en": [
      "First up, let’s check SW3’s root port for VLAN1, it should be F0/1."
    ],
    "ru": [
      "Сначала давайте проверим корневой порт SW3 на наличие VLAN1, он должен быть F0 / 1."
    ]
  },
  {
    "time": [
      468.539,
      472.15
    ],
    "en": [
      "Let’s just view VLAN1."
    ],
    "ru": [
      "Давайте просто рассмотрим VLAN1."
    ]
  },
  {
    "time": [
      472.15,
      475.18
    ],
    "en": [
      "DO SHOW SPANNING-TREE VLAN 1."
    ],
    "ru": [
      "ПОКАЗАТЬ VLAN SPANNING-TREE 1."
    ]
  },
  {
    "time": [
      475.18,
      478.58
    ],
    "en": [
      "Indeed, F0/1 is the root port."
    ],
    "ru": [
      "Действительно, F0 / 1 - корневой порт."
    ]
  },
  {
    "time": [
      478.58,
      487.309
    ],
    "en": [
      "Now, if we set the priority of SW1’s F0/1 port to 240, will this affect SW3’s root port selection?"
    ],
    "ru": [
      "Теперь, если мы установим приоритет порта F0 / 1 SW1 на 240, повлияет ли это на выбор корневого порта SW3?"
    ]
  },
  {
    "time": [
      487.309,
      491.539
    ],
    "en": [
      "port selection? What do you think? Actually, it shouldn’t."
    ],
    "ru": [
      "выбор порта? Что вы думаете? На самом деле этого не должно быть."
    ]
  },
  {
    "time": [
      491.539,
      498.389
    ],
    "en": [
      "Actually, it shouldn’t. Sender port ID is actually the last tiebreaker, after port cost and sender bridge ID."
    ],
    "ru": [
      "На самом деле этого не должно быть. Идентификатор порта отправителя фактически является последним устройством разрешения конфликтов после стоимости порта и идентификатора моста отправителя."
    ]
  },
  {
    "time": [
      498.389,
      506.74
    ],
    "en": [
      "Because F0/1 has a lower root cost than F0/2, 19 versus 38, the port priority should have no effect."
    ],
    "ru": [
      "Поскольку F0 / 1 имеет более низкую стоимость корня, чем F0 / 2, 19 против 38, приоритет порта не должен иметь никакого эффекта."
    ]
  },
  {
    "time": [
      506.74,
      511.229
    ],
    "en": [
      "no effect. Let’s go configure that port priority on SW1."
    ],
    "ru": [
      "нет эффекта. Давайте настроим приоритет этого порта на SW1."
    ]
  },
  {
    "time": [
      511.229,
      516.75
    ],
    "en": [
      "Enter interface config mode, INTERFACE F0/1."
    ],
    "ru": [
      "Войдите в режим конфигурации интерфейса, ИНТЕРФЕЙС F0 / 1."
    ]
  },
  {
    "time": [
      516.75,
      521.849
    ],
    "en": [
      "SPANNING-TREE VLAN 1 PORT-PRIORITY 240."
    ],
    "ru": [
      "ПРИОРИТЕТ ПОРТА VLAN 1 SPANNING-TREE 240."
    ]
  },
  {
    "time": [
      521.849,
      525.64
    ],
    "en": [
      "First up let’s view that priority here on SW1."
    ],
    "ru": [
      "Сначала давайте рассмотрим этот приоритет здесь, на SW1."
    ]
  },
  {
    "time": [
      525.64,
      530.029
    ],
    "en": [
      "DO SHOW SPANNING-TREE VLAN 1."
    ],
    "ru": [
      "ПОКАЗАТЬ VLAN SPANNING-TREE 1."
    ]
  },
  {
    "time": [
      530.029,
      537.34
    ],
    "en": [
      "Here for interface F0/1 you can see the priority dot number column, this is the port ID, and"
    ],
    "ru": [
      "Здесь для интерфейса F0 / 1 вы можете увидеть столбец с номером приоритетной точки, это идентификатор порта, и"
    ]
  },
  {
    "time": [
      537.34,
      540.589
    ],
    "en": [
      "the priority has increased to 240."
    ],
    "ru": [
      "приоритет увеличился до 240."
    ]
  },
  {
    "time": [
      540.589,
      544.48
    ],
    "en": [
      "Now let’s check on SW3."
    ],
    "ru": [
      "Теперь посмотрим на SW3."
    ]
  },
  {
    "time": [
      544.48,
      549.22
    ],
    "en": [
      "Use the up arrow to return to the previous command and hit enter."
    ],
    "ru": [
      "Используйте стрелку вверх, чтобы вернуться к предыдущей команде, и нажмите Enter."
    ]
  },
  {
    "time": [
      549.22,
      554.38
    ],
    "en": [
      "As expected, there is no change, F0/1 is still the root port."
    ],
    "ru": [
      "Как и ожидалось, изменений нет, F0 / 1 по-прежнему является корневым портом."
    ]
  },
  {
    "time": [
      554.38,
      560.139
    ],
    "en": [
      "Finally, let’s configure PortFast and BPDU Guard."
    ],
    "ru": [
      "Наконец, давайте настроим PortFast и BPDU Guard."
    ]
  },
  {
    "time": [
      560.139,
      563.269
    ],
    "en": [
      "Before doing so, let’s test portfast."
    ],
    "ru": [
      "Перед тем как сделать это, давайте протестируем Portfast."
    ]
  },
  {
    "time": [
      563.269,
      572.07
    ],
    "en": [
      "I will turn on link lights for this, click options, preferences, and then show link lights here."
    ],
    "ru": [
      "Я включу для этого индикаторы ссылок, щелкну по опциям, настройкам, а затем покажу здесь индикаторы ссылок."
    ]
  },
  {
    "time": [
      572.07,
      577.87
    ],
    "en": [
      "here. Next, let me delete the connection between SW3 and PC1."
    ],
    "ru": [
      "здесь. Затем позвольте мне удалить соединение между SW3 и PC1."
    ]
  },
  {
    "time": [
      577.87,
      584.79
    ],
    "en": [
      "Now I will connect them again, PC1 to SW3’s F0/3 interface."
    ],
    "ru": [
      "Теперь я снова подключу их, ПК1 к интерфейсу F0 / 3 SW3."
    ]
  },
  {
    "time": [
      584.79,
      590.42
    ],
    "en": [
      "After reconnecting the two devices, SW3’s F0/3 interface has to go through the STP listening"
    ],
    "ru": [
      "После повторного подключения двух устройств интерфейс F0 / 3 SW3 должен пройти прослушивание STP."
    ]
  },
  {
    "time": [
      590.42,
      595.5889999999999
    ],
    "en": [
      "and learning states before it can forward traffic again, so the link light will remain"
    ],
    "ru": [
      "и состояния обучения, прежде чем он сможет снова перенаправить трафик, поэтому индикатор соединения останется"
    ]
  },
  {
    "time": [
      595.5889999999999,
      598.1
    ],
    "en": [
      "orange for about 30 seconds."
    ],
    "ru": [
      "оранжевый примерно на 30 секунд."
    ]
  },
  {
    "time": [
      598.1,
      608.04
    ],
    "en": [
      "Let’s go on the CLI and configure both portfast and BPDU guard on F0/3. INTERFACE F0/3."
    ],
    "ru": [
      "Давайте перейдем к интерфейсу командной строки и настроим как portfast, так и защиту BPDU на F0 / 3. ИНТЕРФЕЙС F0 / 3."
    ]
  },
  {
    "time": [
      608.04,
      613.589
    ],
    "en": [
      "INTERFACE F0/3. SPANNING-TREE PORTFAST. SPANNING-TREE BPDUGUARD ENABLE."
    ],
    "ru": [
      "ИНТЕРФЕЙС F0 / 3. ПОРТФЕСТ на колышущемся дереве. SPANNING-TREE BPDUGUARD ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      613.589,
      619.029
    ],
    "en": [
      "SPANNING-TREE BPDUGUARD ENABLE. Okay, that’s it, pretty simple configurations."
    ],
    "ru": [
      "SPANNING-TREE BPDUGUARD ВКЛЮЧИТЬ. Ладно, вот и все, довольно простые конфигурации."
    ]
  },
  {
    "time": [
      619.029,
      624.36
    ],
    "en": [
      "Now that portfast is enabled, I will delete that connection once more, and now let’s"
    ],
    "ru": [
      "Теперь, когда функция portfast включена, я удалю это соединение еще раз, а теперь давайте"
    ]
  },
  {
    "time": [
      624.36,
      629.269
    ],
    "en": [
      "reconnect them again, PC1 to SW3’s F0/3."
    ],
    "ru": [
      "подключите их снова, ПК1 к F0 / 3 SW3."
    ]
  },
  {
    "time": [
      629.269,
      633.91
    ],
    "en": [
      "Notice that it moves immediately to forwarding, the link light is green right away."
    ],
    "ru": [
      "Обратите внимание, что он сразу переходит в режим пересылки, индикатор ссылки сразу же загорается зеленым."
    ]
  },
  {
    "time": [
      633.91,
      640.79
    ],
    "en": [
      "Now, because BPDU guard is enabled, if we connect F0/3 to another switch and a BPDU"
    ],
    "ru": [
      "Теперь, поскольку защита BPDU включена, если мы подключим F0 / 3 к другому коммутатору и BPDU"
    ]
  },
  {
    "time": [
      640.79,
      645.44
    ],
    "en": [
      "is received, the interface should be shut down. Let’s try that."
    ],
    "ru": [
      "получен, интерфейс должен быть выключен. Давай попробуем."
    ]
  },
  {
    "time": [
      645.44,
      650.53
    ],
    "en": [
      "Let’s try that. I’ll delete the connection once more, and this time let’s use a crossover cable to"
    ],
    "ru": [
      "Давай попробуем. Я удалю соединение еще раз, и на этот раз давайте воспользуемся перекрестным кабелем, чтобы"
    ]
  },
  {
    "time": [
      650.53,
      654.6
    ],
    "en": [
      "connect F0/3 to SW4."
    ],
    "ru": [
      "подключите F0 / 3 к SW4."
    ]
  },
  {
    "time": [
      654.6,
      660.98
    ],
    "en": [
      "When SW3 receives a BPDU from SW4 on its F0/3 interface, the interface is shutdown to avoid"
    ],
    "ru": [
      "Когда SW3 получает BPDU от SW4 на своем интерфейсе F0 / 3, интерфейс отключается, чтобы избежать"
    ]
  },
  {
    "time": [
      660.98,
      663.709
    ],
    "en": [
      "a loop, and now the link light is red."
    ],
    "ru": [
      "петля, и теперь индикатор ссылки красный."
    ]
  },
  {
    "time": [
      663.709,
      670.769
    ],
    "en": [
      "Let’s delete that connection again, and use a regular straight through cable to connect to PC1."
    ],
    "ru": [
      "Давайте снова удалим это соединение и воспользуемся обычным прямым кабелем для подключения к ПК1."
    ]
  },
  {
    "time": [
      670.769,
      676.61
    ],
    "en": [
      "to PC1. Now let’s return to the CLI, and to enable this interface that was disabled by BPDU guard,"
    ],
    "ru": [
      "к ПК1. Теперь давайте вернемся к CLI и включим этот интерфейс, который был отключен BPDU Guard,"
    ]
  },
  {
    "time": [
      676.61,
      681.509
    ],
    "en": [
      "I will SHUTDOWN, and then NO SHUTDOWN the interface."
    ],
    "ru": [
      "Я ВЫКЛЮЧАЮ, а затем НЕ ВЫКЛЮЧАЮ интерфейс."
    ]
  },
  {
    "time": [
      681.509,
      685.42
    ],
    "en": [
      "Okay, now F0/3 is back up and running."
    ],
    "ru": [
      "Хорошо, теперь F0 / 3 снова работает."
    ]
  },
  {
    "time": [
      685.42,
      695.73
    ],
    "en": [
      "Okay, since we finished our experiment I’ll just configure the same on SW4. INTERFACE F0/3."
    ],
    "ru": [
      "Хорошо, раз уж мы закончили наш эксперимент, я просто настрою то же самое на SW4. ИНТЕРФЕЙС F0 / 3."
    ]
  },
  {
    "time": [
      695.73,
      700.62
    ],
    "en": [
      "INTERFACE F0/3. SPANNING-TREE PORTFAST. SPANNING-TREE BPDUGUARD ENABLE."
    ],
    "ru": [
      "ИНТЕРФЕЙС F0 / 3. ПОРТФЕСТ на колышущемся дереве. SPANNING-TREE BPDUGUARD ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      700.62,
      704.23
    ],
    "en": [
      "SPANNING-TREE BPDUGUARD ENABLE. Okay, that’s all for this lab."
    ],
    "ru": [
      "SPANNING-TREE BPDUGUARD ВКЛЮЧИТЬ. Ладно, это все для этой лаборатории."
    ]
  },
  {
    "time": [
      704.23,
      708.62
    ],
    "en": [
      "Next up let’s take a look at a lab in Boson NetSim."
    ],
    "ru": [
      "Теперь давайте взглянем на лабораторию в Boson NetSim."
    ]
  },
  {
    "time": [
      708.62,
      716.55
    ],
    "en": [
      "Okay, for today's Boson NetSim lab preview, we are once again doing a lab from NetSim for ENCOR."
    ],
    "ru": [
      "Хорошо, для сегодняшней предварительной лабораторной работы Boson NetSim мы снова проводим лабораторную работу с NetSim для ENCOR."
    ]
  },
  {
    "time": [
      716.55,
      719.06
    ],
    "en": [
      "for ENCOR. This is a CCNP-level lab."
    ],
    "ru": [
      "для ENCOR. Это лаборатория уровня CCNP."
    ]
  },
  {
    "time": [
      719.06,
      725.17
    ],
    "en": [
      "The reason for that is spanning tree configuration isn't actually in the CCNA exam topics list,"
    ],
    "ru": [
      "Причина в том, что конфигурация связующего дерева на самом деле отсутствует в списке тем экзамена CCNA,"
    ]
  },
  {
    "time": [
      725.17,
      729.36
    ],
    "en": [
      "so it's not included in Boson NetSim for CCNA."
    ],
    "ru": [
      "поэтому он не включен в Boson NetSim для CCNA."
    ]
  },
  {
    "time": [
      729.36,
      733.579
    ],
    "en": [
      "However I want to show you a lab anyway, so let's do a CCNP-level lab."
    ],
    "ru": [
      "Однако я все равно хочу показать вам лабораторию, поэтому давайте проведем лабораторию на уровне CCNP."
    ]
  },
  {
    "time": [
      733.579,
      739.91
    ],
    "en": [
      "The one we're going to look at is Spanning Tree Protocol PVST Load Balancing."
    ],
    "ru": [
      "Мы рассмотрим протокол Spanning Tree Protocol PVST Load Balancing."
    ]
  },
  {
    "time": [
      739.91,
      742.83
    ],
    "en": [
      "So you click on the lab here, and then click on 'load lab'."
    ],
    "ru": [
      "Итак, вы нажимаете здесь лабораторию, а затем нажимаете «загрузить лабораторию»."
    ]
  },
  {
    "time": [
      742.83,
      745.07
    ],
    "en": [
      "But I've already done that."
    ],
    "ru": [
      "Но я это уже сделал."
    ]
  },
  {
    "time": [
      745.07,
      747.6
    ],
    "en": [
      "So this is the lab."
    ],
    "ru": [
      "Итак, это лаборатория."
    ]
  },
  {
    "time": [
      747.6,
      753.81
    ],
    "en": [
      "Create a VTP management domain for distribution of VLANs to all switches, and configure a"
    ],
    "ru": [
      "Создайте домен управления VTP для распределения VLAN на все коммутаторы и настройте"
    ]
  },
  {
    "time": [
      753.81,
      758.25
    ],
    "en": [
      "primary and secondary root bridge for the VLANs in the network."
    ],
    "ru": [
      "первичный и вторичный корневой мост для виртуальных локальных сетей в сети."
    ]
  },
  {
    "time": [
      758.25,
      760.85
    ],
    "en": [
      "So this is definitely a CCNP-level lab."
    ],
    "ru": [
      "Так что это определенно лаборатория уровня CCNP."
    ]
  },
  {
    "time": [
      760.85,
      766.85
    ],
    "en": [
      "It's quite challenging, quite extensive, and it's not just about configuration, but Boson"
    ],
    "ru": [
      "Это довольно сложно, довольно обширно, и дело не только в конфигурации, но и в бозоне."
    ]
  },
  {
    "time": [
      766.85,
      771.85
    ],
    "en": [
      "asks you a lot of really good questions to test your understanding of spanning tree protocol."
    ],
    "ru": [
      "задает вам много действительно хороших вопросов, чтобы проверить ваше понимание протокола связующего дерева."
    ]
  },
  {
    "time": [
      771.85,
      775.22
    ],
    "en": [
      "And I think I've said it before, but that's something I really like about NetSim."
    ],
    "ru": [
      "Думаю, я уже говорил об этом раньше, но это то, что мне очень нравится в NetSim."
    ]
  },
  {
    "time": [
      775.22,
      779.86
    ],
    "en": [
      "It's not all about the configuration, it really does test your understanding and help get"
    ],
    "ru": [
      "Дело не только в конфигурации, она действительно проверяет ваше понимание и помогает получить"
    ]
  },
  {
    "time": [
      779.86,
      784.1
    ],
    "en": [
      "you...help you get ready for the exam."
    ],
    "ru": [
      "вы ... помогите подготовиться к экзамену."
    ]
  },
  {
    "time": [
      784.1,
      786.399
    ],
    "en": [
      "So these are commands you need to know."
    ],
    "ru": [
      "Итак, это команды, которые вам нужно знать."
    ]
  },
  {
    "time": [
      786.399,
      791.339
    ],
    "en": [
      "Although this is a CCNP-level exam (*lab), these are actually all commands you already know."
    ],
    "ru": [
      "Хотя это экзамен уровня CCNP (* лабораторная работа), на самом деле это все команды, которые вы уже знаете."
    ]
  },
  {
    "time": [
      791.339,
      800.9
    ],
    "en": [
      "know. SHOW SPANNING-TREE, SHOW VLAN, SPANNING-TREE VLAN ROOT, SPANNING-TREE VLAN PRIORITY, SWITCHPORT MODE, ENCAPSULATION DOT1Q."
    ],
    "ru": [
      "знать. ПОКАЗАТЬ SPANNING-TREE, ПОКАЗАТЬ VLAN, SPANNING-TREE VLAN ROOT, SPANNING-TREE VLAN PRIORITY, SWITCHPORT MODE, ENCAPSULATION DOT1Q."
    ]
  },
  {
    "time": [
      800.9,
      804.01
    ],
    "en": [
      "MODE, ENCAPSULATION DOT1Q. So these are all commands you already know."
    ],
    "ru": [
      "РЕЖИМ, КАПСУЛЯЦИЯ DOT1Q. Итак, это все команды, которые вы уже знаете."
    ]
  },
  {
    "time": [
      804.01,
      807.83
    ],
    "en": [
      "So although this lab might be a challenge, I think it actually is doable for someone"
    ],
    "ru": [
      "Так что, хотя эта лаборатория может быть проблемой, я думаю, что на самом деле это выполнимо для кого-то"
    ]
  },
  {
    "time": [
      807.83,
      810.49
    ],
    "en": [
      "studying for their CCNA."
    ],
    "ru": [
      "учусь на их CCNA."
    ]
  },
  {
    "time": [
      810.49,
      815.91
    ],
    "en": [
      "So, I'm not actually gonna do the configurations in this demonstration, I just want to walk"
    ],
    "ru": [
      "Итак, я на самом деле не собираюсь делать конфигурации в этой демонстрации, я просто хочу пройтись"
    ]
  },
  {
    "time": [
      815.91,
      820.149
    ],
    "en": [
      "through the lab and see what kind of tasks you're asked to do."
    ],
    "ru": [
      "через лабораторию и посмотрите, какие задачи вас просят выполнить."
    ]
  },
  {
    "time": [
      820.149,
      823.31
    ],
    "en": [
      "Task 1 is perform the initial configurations."
    ],
    "ru": [
      "Задача 1 - выполнить начальные настройки."
    ]
  },
  {
    "time": [
      823.31,
      826.44
    ],
    "en": [
      "So these aren't actually spanning-tree configurations."
    ],
    "ru": [
      "Так что на самом деле это не конфигурации связующего дерева."
    ]
  },
  {
    "time": [
      826.44,
      834.779
    ],
    "en": [
      "These are trunk configurations, VTP configurations, and VLAN configurations."
    ],
    "ru": [
      "Это конфигурации магистрали, конфигурации VTP и конфигурации VLAN."
    ]
  },
  {
    "time": [
      834.779,
      839.34
    ],
    "en": [
      "So that's something I really like about this lab, it's not focused entirely on spanning tree."
    ],
    "ru": [
      "Вот что мне действительно нравится в этой лаборатории, она не полностью сосредоточена на связующем дереве."
    ]
  },
  {
    "time": [
      839.34,
      843.149
    ],
    "en": [
      "tree. It helps you review other topics you've studied."
    ],
    "ru": [
      "дерево. Это поможет вам просмотреть другие темы, которые вы изучали."
    ]
  },
  {
    "time": [
      843.149,
      847.949
    ],
    "en": [
      "Okay, plan primary and secondary root bridge configuration."
    ],
    "ru": [
      "Хорошо, спланируйте конфигурацию первичного и вторичного корневого моста."
    ]
  },
  {
    "time": [
      847.949,
      853.29
    ],
    "en": [
      "So in task 2 you're not actually doing any configuration, you're examining the network,"
    ],
    "ru": [
      "Итак, в задаче 2 вы на самом деле не выполняете никакой конфигурации, вы исследуете сеть,"
    ]
  },
  {
    "time": [
      853.29,
      858.09
    ],
    "en": [
      "answering some questions, thinking about what configurations you're going to do, before"
    ],
    "ru": [
      "отвечая на некоторые вопросы, думая о том, какие конфигурации вы собираетесь делать, прежде чем"
    ]
  },
  {
    "time": [
      858.09,
      862.39
    ],
    "en": [
      "you actually implement and verify the configurations in task 3."
    ],
    "ru": [
      "вы фактически реализуете и проверяете конфигурации в задаче 3."
    ]
  },
  {
    "time": [
      862.39,
      865.8389999999999
    ],
    "en": [
      "So what kind of questions are you asked?"
    ],
    "ru": [
      "Итак, какие вопросы вам задают?"
    ]
  },
  {
    "time": [
      865.8389999999999,
      871.02
    ],
    "en": [
      "For example number 1, how is the information provided by the network engineer useful?"
    ],
    "ru": [
      "Например, номер 1, чем полезна информация, предоставленная сетевым инженером?"
    ]
  },
  {
    "time": [
      871.02,
      873.1
    ],
    "en": [
      "So that is in this explanation here."
    ],
    "ru": [
      "Итак, вот это объяснение."
    ]
  },
  {
    "time": [
      873.1,
      878.43
    ],
    "en": [
      "Your network engineer has determined that VLANs 1 though 3 represent half of the traffic"
    ],
    "ru": [
      "Ваш сетевой инженер определил, что сети VLAN с 1 по 3 представляют половину трафика."
    ]
  },
  {
    "time": [
      878.43,
      884.629
    ],
    "en": [
      "and VLANs 4 through 6 represent the other half, so how is this information useful to you?"
    ],
    "ru": [
      "а сети VLAN с 4 по 6 представляют вторую половину, так чем эта информация полезна для вас?"
    ]
  },
  {
    "time": [
      884.629,
      889.769
    ],
    "en": [
      "you? And if you don't know how to answer one of these questions, if you look at the lab solutions"
    ],
    "ru": [
      "Вы? И если вы не знаете, как ответить на один из этих вопросов, взгляните на лабораторные решения."
    ]
  },
  {
    "time": [
      889.769,
      893.19
    ],
    "en": [
      "you can find Boson's explanation."
    ],
    "ru": [
      "вы можете найти объяснение Бозона."
    ]
  },
  {
    "time": [
      893.19,
      895.269
    ],
    "en": [
      "Here is task 2."
    ],
    "ru": [
      "Вот задача 2."
    ]
  },
  {
    "time": [
      895.269,
      901.26
    ],
    "en": [
      "So these are Boson's answers to those questions."
    ],
    "ru": [
      "Итак, это ответы Boson на эти вопросы."
    ]
  },
  {
    "time": [
      901.26,
      905.649
    ],
    "en": [
      "Okay, task 3 is actually implement and verify the configurations."
    ],
    "ru": [
      "Хорошо, задача 3 фактически реализовать и проверить конфигурации."
    ]
  },
  {
    "time": [
      905.649,
      914.889
    ],
    "en": [
      "So, configure the primary and secondary root bridge for different VLANs to ensure load balancing."
    ],
    "ru": [
      "Итак, настройте первичный и вторичный корневой мост для разных VLAN, чтобы обеспечить балансировку нагрузки."
    ]
  },
  {
    "time": [
      914.889,
      920.41
    ],
    "en": [
      "balancing. And task 4, this is something you're not gonna find on most practice labs, certainly not my practice labs."
    ],
    "ru": [
      "балансировка. И задача 4, это то, чего вы не найдете в большинстве практических лабораторий, особенно в моих."
    ]
  },
  {
    "time": [
      920.41,
      921.79
    ],
    "en": [
      "my practice labs. 'Document the network'."
    ],
    "ru": [
      "мои практические лаборатории. «Задокументируйте сеть»."
    ]
  },
  {
    "time": [
      921.79,
      927.68
    ],
    "en": [
      "Look at these questions, how many root ports can each non-root bridge have per STP instance?"
    ],
    "ru": [
      "Посмотрите на эти вопросы, сколько корневых портов может иметь каждый некорневой мост на один экземпляр STP?"
    ]
  },
  {
    "time": [
      927.68,
      930.22
    ],
    "en": [
      "How many designated ports can a non-root switch have?"
    ],
    "ru": [
      "Сколько назначенных портов может иметь некорневой коммутатор?"
    ]
  },
  {
    "time": [
      930.22,
      932.7090000000001
    ],
    "en": [
      "And then here, this one I really like."
    ],
    "ru": [
      "А вот этот, который мне очень нравится."
    ]
  },
  {
    "time": [
      932.7090000000001,
      933.89
    ],
    "en": [
      "Start to document the network."
    ],
    "ru": [
      "Начните документировать сеть."
    ]
  },
  {
    "time": [
      933.89,
      940.189
    ],
    "en": [
      "So, you're going to have to use SHOW commands to find the bridge ID, root bridge ID, root"
    ],
    "ru": [
      "Итак, вам нужно будет использовать команды SHOW, чтобы найти идентификатор моста, идентификатор корневого моста, root"
    ]
  },
  {
    "time": [
      940.189,
      945.28
    ],
    "en": [
      "port, and path cost to root of each of these switches."
    ],
    "ru": [
      "порт и стоимость пути к корневому каталогу каждого из этих коммутаторов."
    ]
  },
  {
    "time": [
      945.28,
      949.82
    ],
    "en": [
      "And then here, use the network diagrams below to document the root bridge, root ports, designated"
    ],
    "ru": [
      "А затем используйте приведенные ниже сетевые схемы, чтобы задокументировать корневой мост, корневые порты, назначенные"
    ]
  },
  {
    "time": [
      949.82,
      952.949
    ],
    "en": [
      "ports, alternate ports, and blocked ports."
    ],
    "ru": [
      "порты, альтернативные порты и заблокированные порты."
    ]
  },
  {
    "time": [
      952.949,
      963.0
    ],
    "en": [
      "And then question 5, what path will a VLAN 1 packet take from ASW1 to R2 via CSW2?"
    ],
    "ru": [
      "И затем вопрос 5, какой путь будет проходить пакет VLAN 1 от ASW1 к R2 через CSW2?"
    ]
  },
  {
    "time": [
      963.0,
      968.1
    ],
    "en": [
      "So again, these are just really good questions to really test your understanding of spanning tree protocol."
    ],
    "ru": [
      "Итак, опять же, это просто действительно хорошие вопросы, чтобы действительно проверить ваше понимание протокола связующего дерева."
    ]
  },
  {
    "time": [
      968.1,
      971.84
    ],
    "en": [
      "tree protocol. And if you ever have problems answering these questions, once again just look at the lab"
    ],
    "ru": [
      "протокол дерева. И если у вас возникнут проблемы с ответом на эти вопросы, еще раз взгляните на лабораторию."
    ]
  },
  {
    "time": [
      971.84,
      978.35
    ],
    "en": [
      "solutions and you can find Boson's explanations here."
    ],
    "ru": [
      "решения, и вы можете найти объяснения Бозона здесь."
    ]
  },
  {
    "time": [
      978.35,
      986.01
    ],
    "en": [
      "For example, these are all the blocking ports and such in these network topologies here, from question 4."
    ],
    "ru": [
      "Например, это все блокирующие порты и тому подобное в этих сетевых топологиях здесь, из вопроса 4."
    ]
  },
  {
    "time": [
      986.01,
      991.29
    ],
    "en": [
      "from question 4. Okay, so if you want to get a copy of NetSim, and I highly recommend you do, as you can"
    ],
    "ru": [
      "из вопроса 4. Итак, если вы хотите получить копию NetSim, и я настоятельно рекомендую вам это сделать, как вы можете"
    ]
  },
  {
    "time": [
      991.29,
      995.6
    ],
    "en": [
      "see these are really great, in-depth practice labs that not only test your knowledge of"
    ],
    "ru": [
      "посмотрите, что это действительно отличные, углубленные практические занятия, которые не только проверяют ваши знания"
    ]
  },
  {
    "time": [
      995.6,
      1002.5
    ],
    "en": [
      "the show commands, the configuration commands, but your knowledge of the topics as a whole."
    ],
    "ru": [
      "команды показа, команды конфигурации, но ваше знание тем в целом."
    ]
  },
  {
    "time": [
      1002.5,
      1007.31
    ],
    "en": [
      "So if you want to get a copy, please follow the link in the video description."
    ],
    "ru": [
      "Так что, если вы хотите получить копию, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      1007.31,
      1008.889
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
      1008.889,
      1012.79
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
      1012.79,
      1016.13
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
      1016.13,
      1019.3389999999999
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
      1019.3389999999999,
      1026.29
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
      1026.29,
      1026.29
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]