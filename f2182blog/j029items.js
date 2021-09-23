let objs = [
  {
    "time": [
      0.11,
      2.679
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
      2.679,
      6.2
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
      6.2,
      10.36
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
      10.36,
      16.07
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
      16.07,
      17.36
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
      17.36,
      21.69
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
      21.69,
      25.1
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
      25.1,
      31.17
    ],
    "en": [
      "In this lab we will practice some basic VLAN configurations, specifically configuring access"
    ],
    "ru": [
      "В этой лабораторной работе мы попрактикуемся в некоторых основных конфигурациях VLAN, в частности, в настройке доступа."
    ]
  },
  {
    "time": [
      31.17,
      37.01
    ],
    "en": [
      "ports on a Cisco switch, which is what was covered in day 16’s lecture video."
    ],
    "ru": [
      "портов на коммутаторе Cisco, о чем рассказывалось в видео-лекции 16-го дня."
    ]
  },
  {
    "time": [
      37.01,
      41.901
    ],
    "en": [
      "As I said in that video, an access port belongs to a single VLAN, and a switch won’t forward"
    ],
    "ru": [
      "Как я сказал в этом видео, порт доступа принадлежит одной VLAN, и коммутатор не пересылает"
    ]
  },
  {
    "time": [
      41.901,
      47.22
    ],
    "en": [
      "frames between VLANs directly, it must send it to a router first."
    ],
    "ru": [
      "кадры между VLAN напрямую, он должен сначала отправить их на маршрутизатор."
    ]
  },
  {
    "time": [
      47.22,
      50.66
    ],
    "en": [
      "This network here is very much like the one I used for the demonstration in the lecture"
    ],
    "ru": [
      "Эта сеть очень похожа на ту, которую я использовал для демонстрации на лекции."
    ]
  },
  {
    "time": [
      50.66,
      53.3
    ],
    "en": [
      "video, featuring three VLANs."
    ],
    "ru": [
      "видео с тремя виртуальными локальными сетями."
    ]
  },
  {
    "time": [
      53.3,
      61.1
    ],
    "en": [
      "VLAN10, the engineering department, VLAN20, the HR department, and VLAN30, the sales department."
    ],
    "ru": [
      "VLAN10 - инженерный отдел, VLAN20 - отдел кадров и VLAN30 - отдел продаж."
    ]
  },
  {
    "time": [
      61.1,
      65.5
    ],
    "en": [
      "Let’s get started with step 1."
    ],
    "ru": [
      "Начнем с шага 1."
    ]
  },
  {
    "time": [
      65.5,
      70.701
    ],
    "en": [
      "First up, we must configure the correct IP address and subnet mask on each PC, and we"
    ],
    "ru": [
      "Сначала мы должны настроить правильный IP-адрес и маску подсети на каждом ПК, и мы"
    ]
  },
  {
    "time": [
      70.701,
      75.38
    ],
    "en": [
      "must set the gateway address as the last usable address of the subnet."
    ],
    "ru": [
      "должен установить адрес шлюза как последний используемый адрес подсети."
    ]
  },
  {
    "time": [
      75.38,
      81.24
    ],
    "en": [
      "We will later configure that address on R1, as it will be the default gateway for each subnet."
    ],
    "ru": [
      "Позже мы настроим этот адрес на R1, поскольку он будет шлюзом по умолчанию для каждой подсети."
    ]
  },
  {
    "time": [
      81.24,
      90.119
    ],
    "en": [
      "subnet. So, let’s go on PC1 first. From the config tab, let’s enter the gateway address first."
    ],
    "ru": [
      "подсеть. Итак, сначала займемся ПК1. На вкладке конфигурации сначала введите адрес шлюза."
    ]
  },
  {
    "time": [
      90.119,
      96.24000000000001
    ],
    "en": [
      "The last usable address for PC1’s subnet is 10.0.0.62, so that will be the default"
    ],
    "ru": [
      "Последний используемый адрес для подсети ПК1 - 10.0.0.62, поэтому он будет использоваться по умолчанию."
    ]
  },
  {
    "time": [
      96.24000000000001,
      99.34
    ],
    "en": [
      "gateway of the subnet, R1’s address."
    ],
    "ru": [
      "шлюз подсети, адрес R1."
    ]
  },
  {
    "time": [
      99.34,
      108.34
    ],
    "en": [
      "Next, click on the network interface here, and set the IP address of 10.0.0.1, hit tab, and"
    ],
    "ru": [
      "Затем щелкните здесь сетевой интерфейс и установите IP-адрес 10.0.0.1, нажмите вкладку и"
    ]
  },
  {
    "time": [
      108.34,
      115.9
    ],
    "en": [
      "then adjust the subnet mask to 255.255.255.192, because it’s a /26 subnet."
    ],
    "ru": [
      "затем измените маску подсети на 255.255.255.192, потому что это подсеть / 26."
    ]
  },
  {
    "time": [
      115.9,
      118.45
    ],
    "en": [
      "Okay, that’s all for PC1."
    ],
    "ru": [
      "Хорошо, это все для ПК1."
    ]
  },
  {
    "time": [
      118.45,
      121.22
    ],
    "en": [
      "I’ll quickly run through the other PCs now."
    ],
    "ru": [
      "Я быстро пробегу по другим компьютерам."
    ]
  },
  {
    "time": [
      121.22,
      133.84
    ],
    "en": [
      "PC2 is next. Go to the config tab, gateway address of 10.0.0.62. Go to the network interface,"
    ],
    "ru": [
      "PC2 следующий. Перейдите на вкладку config, адрес шлюза 10.0.0.62. Зайдите в сетевой интерфейс,"
    ]
  },
  {
    "time": [
      133.84,
      141.96
    ],
    "en": [
      "IP address of 10.0.0.2, and subnet mask of 255.255.255.192."
    ],
    "ru": [
      "IP-адрес 10.0.0.2 и маска подсети 255.255.255.192."
    ]
  },
  {
    "time": [
      141.96,
      152.53
    ],
    "en": [
      "Okay, that’s all for the VLAN10 PCs, next VLAN20. So, I’ll go on PC3. Config."
    ],
    "ru": [
      "Хорошо, это все для ПК VLAN10, следующий VLAN20. Итак, я пойду на PC3. Конфиг."
    ]
  },
  {
    "time": [
      152.53,
      158.65
    ],
    "en": [
      "Set the gateway address of 10.0.0.126, the last usable address of the subnet."
    ],
    "ru": [
      "Установите адрес шлюза 10.0.0.126, последний используемый адрес подсети."
    ]
  },
  {
    "time": [
      158.65,
      170.1
    ],
    "en": [
      "Then, configure the network interface, address of 10.0.0.65, subnet mask 255.255.255.192."
    ],
    "ru": [
      "Затем настройте сетевой интерфейс, адрес 10.0.0.65, маску подсети 255.255.255.192."
    ]
  },
  {
    "time": [
      170.1,
      179.56
    ],
    "en": [
      "Okay, now let’s go to PC4. Config, gateway address of 10.0.0.126, then let’s configure"
    ],
    "ru": [
      "Хорошо, теперь перейдем к PC4. Конфигурация, адрес шлюза 10.0.0.126, затем давайте настроим"
    ]
  },
  {
    "time": [
      179.56,
      189.88
    ],
    "en": [
      "fastethernet0. IP address of 10.0.0.66, subnet mask of 255.255.255.192."
    ],
    "ru": [
      "fastethernet0. IP-адрес 10.0.0.66, маска подсети 255.255.255.192."
    ]
  },
  {
    "time": [
      189.88,
      193.06
    ],
    "en": [
      "Okay, those are the PCs in VLAN20."
    ],
    "ru": [
      "Хорошо, это ПК в VLAN20."
    ]
  },
  {
    "time": [
      193.06,
      201.54
    ],
    "en": [
      "Finally, let’s configure PC5 and PC6 in VLAN30. PC5 first."
    ],
    "ru": [
      "Наконец, давайте настроим ПК5 и ПК6 в VLAN30. Сначала PC5."
    ]
  },
  {
    "time": [
      201.54,
      209.86
    ],
    "en": [
      "In the config tab, set the gateway address to 10.0.0.190, which is the last usable address of the subnet."
    ],
    "ru": [
      "На вкладке конфигурации установите адрес шлюза на 10.0.0.190, который является последним используемым адресом подсети."
    ]
  },
  {
    "time": [
      209.86,
      221.44
    ],
    "en": [
      "Then, set PC5’s IP address to 10.0.0.129, and subnet mask of 255.255.255.192."
    ],
    "ru": [
      "Затем установите IP-адрес ПК5 на 10.0.0.129 и маску подсети 255.255.255.192."
    ]
  },
  {
    "time": [
      221.44,
      235.14
    ],
    "en": [
      "Okay, finally let’s go on PC6. Set the gateway address of 10.0.0.190, and PC6’s IP address is 10.0.0.130,"
    ],
    "ru": [
      "Хорошо, наконец-то перейдем к PC6. Установите адрес шлюза 10.0.0.190, а IP-адрес ПК6 - 10.0.0.130,"
    ]
  },
  {
    "time": [
      235.14,
      242.3
    ],
    "en": [
      "and the subnet mask is once again 255.255.255.192, or /26."
    ],
    "ru": [
      "и маска подсети снова 255.255.255.192 или / 26."
    ]
  },
  {
    "time": [
      242.3,
      248.83
    ],
    "en": [
      "Okay, so we’ve configured all of the PCs, that’s step 1 complete."
    ],
    "ru": [
      "Итак, мы настроили все компьютеры, шаг 1 завершен."
    ]
  },
  {
    "time": [
      248.83,
      255.0
    ],
    "en": [
      "Step 2 is to make three connections between R1 and SW1, and configure one interface on"
    ],
    "ru": [
      "Шаг 2 - установить три соединения между R1 и SW1 и настроить один интерфейс на"
    ]
  },
  {
    "time": [
      255.0,
      256.69
    ],
    "en": [
      "R1 for each VLAN."
    ],
    "ru": [
      "R1 для каждой VLAN."
    ]
  },
  {
    "time": [
      256.69,
      262.61
    ],
    "en": [
      "So, I’ll click down here for the connections, and select a straight through cable."
    ],
    "ru": [
      "Итак, я нажму здесь, чтобы просмотреть подключения, и выберу прямой кабель."
    ]
  },
  {
    "time": [
      262.61,
      271.46
    ],
    "en": [
      "I’ve already put the interface labels on the network diagram, SW1’s G0/1 to R1 G0/0, etc."
    ],
    "ru": [
      "Я уже разместил метки интерфейсов на схеме сети, от G0 / 1 SW1 до R1 G0 / 0 и т. Д."
    ]
  },
  {
    "time": [
      271.46,
      273.65999999999997
    ],
    "en": [
      "So, let’s do that."
    ],
    "ru": [
      "Итак, давай сделаем это."
    ]
  },
  {
    "time": [
      273.65999999999997,
      291.6
    ],
    "en": [
      "SW1 G0/1 to R1 G0/0. Next is SW1 G1/1 to R1 G0/1. And then SW1 G2/1 to R1 G0/2."
    ],
    "ru": [
      "От SW1 G0 / 1 до R1 G0 / 0. Далее идет от SW1 G1 / 1 до R1 G0 / 1. А затем с SW1 G2 / 1 на R1 G0 / 2."
    ]
  },
  {
    "time": [
      291.6,
      299.789
    ],
    "en": [
      "Okay, we’ve made three connections, now let’s configure R1. Hop on to the CLI,"
    ],
    "ru": [
      "Хорошо, мы сделали три подключения, теперь давайте настроим R1. Переходите к интерфейсу командной строки,"
    ]
  },
  {
    "time": [
      299.789,
      302.74
    ],
    "en": [
      "and then enter privileged exec mode with ENABLE."
    ],
    "ru": [
      "а затем войдите в привилегированный режим exec, нажав ENABLE."
    ]
  },
  {
    "time": [
      302.74,
      306.689
    ],
    "en": [
      "And then, global config mode with CONFIGURE TERMINAL."
    ],
    "ru": [
      "И затем, глобальный режим конфигурации с КОНФИГУРАЦИЕЙ ТЕРМИНАЛА."
    ]
  },
  {
    "time": [
      306.689,
      320.639
    ],
    "en": [
      "Okay, I’ll configure G0/0 for VLAN10, G0/1 for VLAN20, and G0/2 for VLAN30. So, INTERFACE G0/0."
    ],
    "ru": [
      "Хорошо, я настрою G0 / 0 для VLAN10, G0 / 1 для VLAN20 и G0 / 2 для VLAN30. Итак, ИНТЕРФЕЙС G0 / 0."
    ]
  },
  {
    "time": [
      320.639,
      325.92
    ],
    "en": [
      "So, INTERFACE G0/0. We must assign the same IP addresses that we configured as the gateway addresses for each PC."
    ],
    "ru": [
      "Итак, ИНТЕРФЕЙС G0 / 0. Мы должны назначить те же IP-адреса, которые мы настроили в качестве адресов шлюза для каждого ПК."
    ]
  },
  {
    "time": [
      325.92,
      336.64
    ],
    "en": [
      "each PC. Here in VLAN10, that is IP ADDRESS 10.0.0.62 255.255.255.192."
    ],
    "ru": [
      "каждый ПК. Здесь, в VLAN10, это IP-АДРЕС 10.0.0.62 255.255.255.192."
    ]
  },
  {
    "time": [
      336.64,
      340.889
    ],
    "en": [
      "Then, enable the interface with NO SHUTDOWN."
    ],
    "ru": [
      "Затем включите интерфейс без ВЫКЛЮЧЕНИЯ."
    ]
  },
  {
    "time": [
      340.889,
      347.539
    ],
    "en": [
      "Okay, next up G0/1. INTERFACE G0/1."
    ],
    "ru": [
      "Хорошо, следующий G0 / 1. ИНТЕРФЕЙС G0 / 1."
    ]
  },
  {
    "time": [
      347.539,
      360.7
    ],
    "en": [
      "INTERFACE G0/1. The gateway address for VLAN20 is IP ADDRESS 10.0.0.126 255.255.255.192. NO SHUTDOWN."
    ],
    "ru": [
      "ИНТЕРФЕЙС G0 / 1. Адрес шлюза для VLAN20: IP-АДРЕС 10.0.0.126 255.255.255.192. НЕТ ОТКЛЮЧЕНИЯ."
    ]
  },
  {
    "time": [
      360.7,
      366.5
    ],
    "en": [
      "NO SHUTDOWN. Okay, now G0/2. INTERFACE G0/2."
    ],
    "ru": [
      "НЕТ ОТКЛЮЧЕНИЯ. Хорошо, теперь G0 / 2. ИНТЕРФЕЙС G0 / 2."
    ]
  },
  {
    "time": [
      366.5,
      379.32
    ],
    "en": [
      "INTERFACE G0/2. The gateway address for VLAN30 is IP ADDRESS 10.0.0.190 255.255.255.192. NO SHUTDOWN."
    ],
    "ru": [
      "ИНТЕРФЕЙС G0 / 2. Адрес шлюза для VLAN30: IP-АДРЕС 10.0.0.190 255.255.255.192. НЕТ ОТКЛЮЧЕНИЯ."
    ]
  },
  {
    "time": [
      379.32,
      382.819
    ],
    "en": [
      "NO SHUTDOWN. Okay, let’s confirm with a quick show command."
    ],
    "ru": [
      "НЕТ ОСТАНОВА. Хорошо, давайте подтвердим с помощью быстрой команды show."
    ]
  },
  {
    "time": [
      382.819,
      386.53
    ],
    "en": [
      "DO SHOW IP INTERFACE BRIEF."
    ],
    "ru": [
      "ПОКАЗАТЬ КРАТКОЕ ОПИСАНИЕ IP-ИНТЕРФЕЙСА."
    ]
  },
  {
    "time": [
      386.53,
      392.479
    ],
    "en": [
      "There are the three gateway address we configured for each VLAN, looks good."
    ],
    "ru": [
      "Мы настроили три адреса шлюза для каждой VLAN, выглядит хорошо."
    ]
  },
  {
    "time": [
      392.479,
      396.84000000000003
    ],
    "en": [
      "For step 3, let’s configure SW1’s interfaces."
    ],
    "ru": [
      "Для шага 3 давайте настроим интерфейсы SW1."
    ]
  },
  {
    "time": [
      396.84000000000003,
      405.24
    ],
    "en": [
      "Go on to the CLI of SW1. ENABLE. And then CONFIGURE TERMINAL."
    ],
    "ru": [
      "Перейдите к интерфейсу командной строки SW1. ВКЛЮЧИТЬ. А затем НАСТРОЙТЕ ТЕРМИНАЛ."
    ]
  },
  {
    "time": [
      405.24,
      411.58
    ],
    "en": [
      "Okay, now let’s configure the three VLAN10 interfaces at once like this: INTERFACE RANGE"
    ],
    "ru": [
      "Хорошо, теперь давайте настроим сразу три интерфейса VLAN10 следующим образом: ДИАПАЗОН ИНТЕРФЕЙСА"
    ]
  },
  {
    "time": [
      411.58,
      419.719
    ],
    "en": [
      "G0/1 COMMA F3/1 COMMA F4/1."
    ],
    "ru": [
      "G0 / 1 ЗАПЯТАЯ F3 / 1 ЗАПЯТАЯ F4 / 1."
    ]
  },
  {
    "time": [
      419.719,
      422.939
    ],
    "en": [
      "Now we are configuring all three interfaces at once."
    ],
    "ru": [
      "Теперь настраиваем сразу все три интерфейса."
    ]
  },
  {
    "time": [
      422.939,
      430.66
    ],
    "en": [
      "Let’s configure the interfaces as access ports with this command: SWITCHPORT MODE ACCESS"
    ],
    "ru": [
      "Давайте настроим интерфейсы как порты доступа с помощью этой команды: SWITCHPORT MODE ACCESS"
    ]
  },
  {
    "time": [
      430.66,
      435.36
    ],
    "en": [
      "It should enter that mode by default, but it’s best to manually configure it."
    ],
    "ru": [
      "Он должен войти в этот режим по умолчанию, но лучше настроить его вручную."
    ]
  },
  {
    "time": [
      435.36,
      440.779
    ],
    "en": [
      "Remember, an access port belongs to a single VLAN, as opposed to trunk ports which we will"
    ],
    "ru": [
      "Помните, что порт доступа принадлежит одной VLAN, а не магистральным портам, которые мы будем"
    ]
  },
  {
    "time": [
      440.779,
      443.599
    ],
    "en": [
      "cover in Day 17’s lecture video."
    ],
    "ru": [
      "обложка в видео лекции Дня 17."
    ]
  },
  {
    "time": [
      443.599,
      451.05
    ],
    "en": [
      "Next, let’s assign the VLAN, SWITCHPORT ACCESS VLAN 10. Okay, that’s it."
    ],
    "ru": [
      "Затем давайте назначим VLAN, SWITCHPORT ACCESS VLAN 10. Хорошо, вот и все."
    ]
  },
  {
    "time": [
      451.05,
      454.49
    ],
    "en": [
      "Okay, that’s it. Let’s go on to VLAN20."
    ],
    "ru": [
      "Ладно, вот и все. Перейдем к VLAN20."
    ]
  },
  {
    "time": [
      454.49,
      464.9
    ],
    "en": [
      "INTERFACE RANGE G1/1 COMMA F5/1 COMMA F6/1. SWITCHPORT MODE ACCESS."
    ],
    "ru": [
      "ДИАПАЗОН ИНТЕРФЕЙСА G1 / 1 ЗАПЯТА F5 / 1 ЗАПЯТА F6 / 1. ДОСТУП В РЕЖИМ SWITCHPORT."
    ]
  },
  {
    "time": [
      464.9,
      468.0
    ],
    "en": [
      "SWITCHPORT MODE ACCESS. SWITCHPORT ACCESS VLAN 20."
    ],
    "ru": [
      "ДОСТУП В РЕЖИМ SWITCHPORT. ДОСТУП К КОММУТАЦИОННОМУ ПОРТУ VLAN 20."
    ]
  },
  {
    "time": [
      468.0,
      471.8
    ],
    "en": [
      "Okay, finally let’s do VLAN30."
    ],
    "ru": [
      "Хорошо, наконец-то займемся VLAN30."
    ]
  },
  {
    "time": [
      471.8,
      481.6
    ],
    "en": [
      "INTERFACE RANGE G2/1 COMMA F7/1 COMMA F8/1. SWITCHPORT MODE ACCESS."
    ],
    "ru": [
      "ДИАПАЗОН ИНТЕРФЕЙСА G2 / 1 ЗАПЯТА F7 / 1 ЗАПЯТА F8 / 1. ДОСТУП В РЕЖИМ SWITCHPORT."
    ]
  },
  {
    "time": [
      481.6,
      484.3
    ],
    "en": [
      "SWITCHPORT MODE ACCESS. SWITCHPORT ACCESS VLAN 30."
    ],
    "ru": [
      "ДОСТУП В РЕЖИМ SWITCHPORT. ДОСТУП К КОММУТАЦИОННОМУ ПОРТУ VLAN 30."
    ]
  },
  {
    "time": [
      484.3,
      486.509
    ],
    "en": [
      "Let’s check it out."
    ],
    "ru": [
      "Давай проверим."
    ]
  },
  {
    "time": [
      486.509,
      494.889
    ],
    "en": [
      "DO SHOW VLAN BRIEF. Okay, our VLANs were created and the interfaces were assigned to the correct VLANs."
    ],
    "ru": [
      "ПОКАЗАТЬ КРАТКОЕ ОПИСАНИЕ VLAN. Хорошо, наши VLAN были созданы, и интерфейсы были назначены правильным VLAN."
    ]
  },
  {
    "time": [
      494.889,
      501.179
    ],
    "en": [
      "the correct VLANs. But, let’s also change the VLAN names now. VLAN 10."
    ],
    "ru": [
      "правильные сети VLAN. Но давайте теперь также изменим имена VLAN. VLAN 10."
    ]
  },
  {
    "time": [
      501.179,
      506.68
    ],
    "en": [
      "VLAN 10. NAME ENGINEERING. VLAN 20."
    ],
    "ru": [
      "VLAN 10. NAME ENGINEERING. VLAN 20."
    ]
  },
  {
    "time": [
      506.68,
      510.809
    ],
    "en": [
      "VLAN 20. NAME HR. VLAN 30."
    ],
    "ru": [
      "VLAN 20. ИМЯ HR. VLAN 30."
    ]
  },
  {
    "time": [
      510.809,
      513.099
    ],
    "en": [
      "VLAN 30. NAME SALES."
    ],
    "ru": [
      "VLAN 30. ИМЯ ПРОДАЖ."
    ]
  },
  {
    "time": [
      513.099,
      515.5
    ],
    "en": [
      "And let’s check once more."
    ],
    "ru": [
      "И давайте еще раз проверим."
    ]
  },
  {
    "time": [
      515.5,
      518.24
    ],
    "en": [
      "DO SHOW VLAN BRIEF."
    ],
    "ru": [
      "ПОКАЗАТЬ КРАТКОЕ ОПИСАНИЕ VLAN."
    ]
  },
  {
    "time": [
      518.24,
      520.81
    ],
    "en": [
      "Okay, the names have been changed."
    ],
    "ru": [
      "Хорошо, имена изменены."
    ]
  },
  {
    "time": [
      520.81,
      524.99
    ],
    "en": [
      "That’s all for step 3."
    ],
    "ru": [
      "Это все для шага 3."
    ]
  },
  {
    "time": [
      524.99,
      532.12
    ],
    "en": [
      "Finally let’s test connectivity, I’ll do some pings from PC1. Okay, go on to the CLI"
    ],
    "ru": [
      "Наконец, давайте проверим подключение, я выполню эхо-запросы с ПК1. Хорошо, перейдите к интерфейсу командной строки"
    ]
  },
  {
    "time": [
      532.12,
      536.519
    ],
    "en": [
      "of PC1, and first I’ll ping to complete the ARP process."
    ],
    "ru": [
      "ПК1, и сначала я сделаю эхо-запрос, чтобы завершить процесс ARP."
    ]
  },
  {
    "time": [
      536.519,
      541.16
    ],
    "en": [
      "Let’s ping to PC3, in VLAN 20"
    ],
    "ru": [
      "Пингуем к ПК3 в VLAN 20"
    ]
  },
  {
    "time": [
      541.16,
      556.569
    ],
    "en": [
      "PING 10.0.0.65. Okay, so we can reach PC3."
    ],
    "ru": [
      "ПИНГ 10.0.0.65. Итак, мы можем связаться с ПК3."
    ]
  },
  {
    "time": [
      556.569,
      560.31
    ],
    "en": [
      "Next, let's ping PC5 in VLAN 30."
    ],
    "ru": [
      "Затем давайте пингуем PC5 в VLAN 30."
    ]
  },
  {
    "time": [
      560.31,
      574.06
    ],
    "en": [
      "PING 10.0.0.129. Okay, we can reach PC5 as well."
    ],
    "ru": [
      "ПИНГ 10.0.0.129. Хорошо, мы можем достичь и ПК5."
    ]
  },
  {
    "time": [
      574.06,
      585.56
    ],
    "en": [
      "Now let’s go in simulation mode, and ping PC3 again. Okay, let's do that ping. PING 10.0.0.65."
    ],
    "ru": [
      "Теперь перейдем в режим моделирования и снова отправим эхо-запрос PC3. Хорошо, давай сделаем этот пинг. ПИНГ 10.0.0.65."
    ]
  },
  {
    "time": [
      585.56,
      595.41
    ],
    "en": [
      "Okay, so PC1 sends the ping to SW1, then it goes to R1, then back to SW1, then to PC3,"
    ],
    "ru": [
      "Итак, ПК1 отправляет эхо-запрос на SW1, затем он идет на R1, затем обратно на SW1, затем на ПК3,"
    ]
  },
  {
    "time": [
      595.41,
      597.3389999999999
    ],
    "en": [
      "and the return follows the same path."
    ],
    "ru": [
      "и возврат идет по тому же пути."
    ]
  },
  {
    "time": [
      597.3389999999999,
      603.67
    ],
    "en": [
      "So, R1 is doing the inter-vlan routing for us because it has one interface in each VLAN."
    ],
    "ru": [
      "Итак, R1 выполняет для нас маршрутизацию между vlan, потому что у него есть один интерфейс в каждой VLAN."
    ]
  },
  {
    "time": [
      603.67,
      606.779
    ],
    "en": [
      "Okay, let’s do one more test."
    ],
    "ru": [
      "Хорошо, давай сделаем еще один тест."
    ]
  },
  {
    "time": [
      606.779,
      614.51
    ],
    "en": [
      "I’ll ping VLAN10’s broadcast IP, which is 10.0.0.63, and let’s see if the broadcast only goes"
    ],
    "ru": [
      "Я отправлю эхо-запрос на широковещательный IP-адрес VLAN10, который равен 10.0.0.63, и посмотрим, идет ли широковещательная передача"
    ]
  },
  {
    "time": [
      614.51,
      619.15
    ],
    "en": [
      "to devices in VLAN10, as it should. Let’s try."
    ],
    "ru": [
      "к устройствам в VLAN10, как и положено. Давай попробуем."
    ]
  },
  {
    "time": [
      619.15,
      621.92
    ],
    "en": [
      "Let’s try. PING 10.0.0.63."
    ],
    "ru": [
      "Давай попробуем. ПИНГ 10.0.0.63."
    ]
  },
  {
    "time": [
      621.92,
      630.379
    ],
    "en": [
      "Okay, there we go, it is sent to SW1, which then forwards it only to R1 and PC2."
    ],
    "ru": [
      "Хорошо, поехали, он отправляется на SW1, который затем пересылает его только на R1 и PC2."
    ]
  },
  {
    "time": [
      630.379,
      636.11
    ],
    "en": [
      "Okay, in this lab we did basic configuration of access ports on a Cisco switch."
    ],
    "ru": [
      "Хорошо, в этой лабораторной работе мы выполнили базовую настройку портов доступа на коммутаторе Cisco."
    ]
  },
  {
    "time": [
      636.11,
      640.149
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
      640.149,
      641.72
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
      641.72,
      645.63
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
      645.63,
      648.97
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
      648.97,
      652.18
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
      652.18,
      659.06
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
      659.06,
      659.06
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]