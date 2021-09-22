let items = [
  {
    "time": [
      0.9,
      3.28
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
      3.28,
      6.47
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
      6.47,
      10.349
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
      10.349,
      16.11
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
      16.11,
      17.279
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
      17.279,
      21.359
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
      21.359,
      26.18
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
      26.18,
      30.359
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
      30.359,
      34.42
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
      34.42,
      39.18
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
      39.18,
      44.12
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
      44.12,
      46.94
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
      46.94,
      52.72
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
      52.72,
      54.3
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
      54.3,
      60.27
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
      60.27,
      63.69
    ],
    "en": [
      "In this lab we will go through the configurations covered in the lecture video."
    ],
    "ru": [
      "В этой лабораторной работе мы рассмотрим конфигурации, описанные в видео лекции."
    ]
  },
  {
    "time": [
      63.69,
      65.519
    ],
    "en": [
      "Let’s get right into it."
    ],
    "ru": [
      "Давайте приступим к делу."
    ]
  },
  {
    "time": [
      65.519,
      72.11
    ],
    "en": [
      "First, in step 1 we will ping an external server, 8.8.8.8 from these two PCs, as well"
    ],
    "ru": [
      "Во-первых, на шаге 1 мы также будем пинговать внешний сервер 8.8.8.8 с этих двух компьютеров."
    ]
  },
  {
    "time": [
      72.11,
      73.88
    ],
    "en": [
      "as check their default gateway."
    ],
    "ru": [
      "так же проверьте их шлюз по умолчанию."
    ]
  },
  {
    "time": [
      73.88,
      86.18
    ],
    "en": [
      "I’ll do the ping from PC1 first. PING 8.8.8.8."
    ],
    "ru": [
      "Сначала я сделаю пинг с ПК1. ПИНГ 8.8.8.8."
    ]
  },
  {
    "time": [
      86.18,
      88.46000000000001
    ],
    "en": [
      "PING 8.8.8.8. Okay, the ping works."
    ],
    "ru": [
      "ПИНГ 8.8.8.8. Ладно, пинг работает."
    ]
  },
  {
    "time": [
      88.46000000000001,
      91.52
    ],
    "en": [
      "Now let’s check PC1’s default gateway."
    ],
    "ru": [
      "Теперь давайте проверим шлюз ПК1 по умолчанию."
    ]
  },
  {
    "time": [
      91.52,
      97.37
    ],
    "en": [
      "On a PC you can use this command, IPCONFIG, to check the IP settings."
    ],
    "ru": [
      "На ПК вы можете использовать эту команду IPCONFIG для проверки настроек IP."
    ]
  },
  {
    "time": [
      97.37,
      104.21000000000001
    ],
    "en": [
      "So, R1’s (*PC1's) default gateway address is 10.0.1.253, which is R1."
    ],
    "ru": [
      "Итак, адрес шлюза R1 (* PC1) по умолчанию - 10.0.1.253, то есть R1."
    ]
  },
  {
    "time": [
      104.21000000000001,
      108.6
    ],
    "en": [
      "Now let’s check on PC2."
    ],
    "ru": [
      "Теперь проверим на ПК2."
    ]
  },
  {
    "time": [
      108.6,
      117.86
    ],
    "en": [
      "First I’ll ping the server. PING 8.8.8.8."
    ],
    "ru": [
      "Сначала я проверю связь с сервером. ПИНГ 8.8.8.8."
    ]
  },
  {
    "time": [
      117.86,
      120.8
    ],
    "en": [
      "PING 8.8.8.8. Okay, we’re getting replies."
    ],
    "ru": [
      "ПИНГ 8.8.8.8. Хорошо, мы получаем ответы."
    ]
  },
  {
    "time": [
      120.8,
      125.979
    ],
    "en": [
      "So, what’s PC2’s default gateway? Let’s check. Let’s check. IPCONFIG."
    ],
    "ru": [
      "Итак, какой шлюз по умолчанию у ПК2? Давайте проверим. Давайте проверим. IPCONFIG."
    ]
  },
  {
    "time": [
      125.979,
      129.95
    ],
    "en": [
      "Let’s check. IPCONFIG. It’s R1, so it’s the same as PC1."
    ],
    "ru": [
      "Давайте проверим. IPCONFIG. Это R1, поэтому он такой же, как PC1."
    ]
  },
  {
    "time": [
      129.95,
      132.94
    ],
    "en": [
      "Now, let me do something I didn’t do on PC1."
    ],
    "ru": [
      "А теперь позвольте мне сделать то, чего я не делал на ПК1."
    ]
  },
  {
    "time": [
      132.94,
      136.2
    ],
    "en": [
      "I’ll do a traceroute to 8.8.8.8."
    ],
    "ru": [
      "Я сделаю трассировку до 8.8.8.8."
    ]
  },
  {
    "time": [
      136.2,
      141.689
    ],
    "en": [
      "I’ve shown you this once before I think, it’s a very useful command."
    ],
    "ru": [
      "Я показал вам это однажды, прежде чем подумать, что это очень полезная команда."
    ]
  },
  {
    "time": [
      141.689,
      150.719
    ],
    "en": [
      "On PCs the command is ‘tracert’, but be aware that in Cisco IOS it’s ‘traceroute’, spelled out fully."
    ],
    "ru": [
      "На ПК используется команда «tracert», но имейте в виду, что в Cisco IOS это «traceroute», прописанная полностью."
    ]
  },
  {
    "time": [
      150.719,
      160.93
    ],
    "en": [
      "spelled out fully. So, TRACERT 8.8.8.8, and you can confirm that the first hop is 10.0.1.253, before it reaches"
    ],
    "ru": [
      "прописано полностью. Итак, TRACERT 8.8.8.8, и вы можете подтвердить, что первый переход - 10.0.1.253, прежде чем он достигнет"
    ]
  },
  {
    "time": [
      160.93,
      168.62
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
      160.93,
      168.62
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
      168.62,
      176.09
    ],
    "en": [
      "Next up in step 2 we are told to configure HSRP version 2 on R1 and R2."
    ],
    "ru": [
      "Далее на шаге 2 нам предлагается настроить HSRP версии 2 на R1 и R2."
    ]
  },
  {
    "time": [
      176.09,
      182.059
    ],
    "en": [
      "We should make sure R1 is the active router, raise its priority, lower R2’s priority,"
    ],
    "ru": [
      "Мы должны убедиться, что R1 является активным маршрутизатором, повысить его приоритет, снизить приоритет R2,"
    ]
  },
  {
    "time": [
      182.059,
      183.95
    ],
    "en": [
      "and also enable preemption."
    ],
    "ru": [
      "а также включить приоритетное обслуживание."
    ]
  },
  {
    "time": [
      183.95,
      190.049
    ],
    "en": [
      "Let’s go on R1. ENABLE."
    ],
    "ru": [
      "Поехали по R1. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      190.049,
      200.419
    ],
    "en": [
      "ENABLE. CONF T. Remember, FHRPs like HSRP are configured directly on the interface, G0/0 in this case. INTERFACE G0/0."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. Помните, что FHRP, такие как HSRP, настраиваются непосредственно на интерфейсе, в данном случае G0 / 0. ИНТЕРФЕЙС G0 / 0."
    ]
  },
  {
    "time": [
      200.419,
      205.209
    ],
    "en": [
      "INTERFACE G0/0. First, let’s enable HSRP version 2."
    ],
    "ru": [
      "ИНТЕРФЕЙС G0 / 0. Во-первых, давайте включим HSRP версии 2."
    ]
  },
  {
    "time": [
      205.209,
      210.56
    ],
    "en": [
      "The command is STANDBY VERSION 2."
    ],
    "ru": [
      "Команда - РЕЗЕРВНАЯ ВЕРСИЯ 2."
    ]
  },
  {
    "time": [
      210.56,
      212.489
    ],
    "en": [
      "Next I’ll configure the virtual IP."
    ],
    "ru": [
      "Затем я настрою виртуальный IP."
    ]
  },
  {
    "time": [
      212.489,
      218.53
    ],
    "en": [
      "I didn’t mention this in the lecture video, but notice that you can configure the IP,"
    ],
    "ru": [
      "Я не упоминал об этом в видео лекции, но обратите внимание, что вы можете настроить IP,"
    ]
  },
  {
    "time": [
      218.53,
      223.639
    ],
    "en": [
      "preemption, priority, etc without specifying the group number."
    ],
    "ru": [
      "приоритетное обслуживание, приоритет и т. д. без указания номера группы."
    ]
  },
  {
    "time": [
      223.639,
      228.76
    ],
    "en": [
      "If you do this, the router will automatically use a group number of 0."
    ],
    "ru": [
      "Если вы сделаете это, маршрутизатор автоматически будет использовать номер группы 0."
    ]
  },
  {
    "time": [
      228.76,
      233.95
    ],
    "en": [
      "The STANDBY VERSION command, however, applies to all groups, you don’t need to specify the group number."
    ],
    "ru": [
      "Однако команда STANDBY VERSION применяется ко всем группам, вам не нужно указывать номер группы."
    ]
  },
  {
    "time": [
      233.95,
      238.279
    ],
    "en": [
      "the group number. I like to match the group number with the VLAN number, so I’m going to configure a"
    ],
    "ru": [
      "номер группы. Мне нравится сопоставлять номер группы с номером VLAN, поэтому я собираюсь настроить"
    ]
  },
  {
    "time": [
      238.279,
      240.629
    ],
    "en": [
      "group number of 1."
    ],
    "ru": [
      "номер группы 1."
    ]
  },
  {
    "time": [
      240.629,
      245.969
    ],
    "en": [
      "I haven’t done any VLAN configuration on the switches, so everything is in VLAN 1."
    ],
    "ru": [
      "Я не выполнял никаких настроек VLAN на коммутаторах, поэтому все находится в VLAN 1."
    ]
  },
  {
    "time": [
      245.969,
      249.339
    ],
    "en": [
      "You can use whatever group number you want, though."
    ],
    "ru": [
      "Однако вы можете использовать любой номер группы, какой захотите."
    ]
  },
  {
    "time": [
      249.339,
      254.079
    ],
    "en": [
      "First I’ll configure the virtual IP and get HSRP actually running."
    ],
    "ru": [
      "Сначала я настрою виртуальный IP-адрес и фактически запустил HSRP."
    ]
  },
  {
    "time": [
      254.079,
      260.66
    ],
    "en": [
      "STANDBY 1 IP 10.0.1.254. Next, the priority."
    ],
    "ru": [
      "РЕЖИМ ОЖИДАНИЯ 1 IP 10.0.1.254. Далее приоритет."
    ]
  },
  {
    "time": [
      260.66,
      262.67
    ],
    "en": [
      "Next, the priority. STANDBY 1 PRIORITY 200."
    ],
    "ru": [
      "Далее приоритет. ПРИОРИТЕТ ОЖИДАНИЯ 1 200."
    ]
  },
  {
    "time": [
      262.67,
      265.13
    ],
    "en": [
      "The default is 100."
    ],
    "ru": [
      "По умолчанию 100."
    ]
  },
  {
    "time": [
      265.13,
      269.12
    ],
    "en": [
      "Finally I’ll enable preemption. STANDBY 1 PREEMPT."
    ],
    "ru": [
      "Наконец, я включу приоритетное прерывание. РЕЖИМ ОЖИДАНИЯ 1 ПРЕДВАРИТЕЛЬНЫЙ."
    ]
  },
  {
    "time": [
      269.12,
      274.77
    ],
    "en": [
      "STANDBY 1 PREEMPT. Okay, that’s all for now on R1."
    ],
    "ru": [
      "РЕЖИМ ОЖИДАНИЯ 1 ПРЕДВАРИТЕЛЬНЫЙ. Ладно, пока на R1 все."
    ]
  },
  {
    "time": [
      274.77,
      279.789
    ],
    "en": [
      "Now I’ll configure R2. ENABLE."
    ],
    "ru": [
      "Теперь я настрою R2. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      279.789,
      282.47
    ],
    "en": [
      "ENABLE. CONF T. INTERFACE G0/0."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. ИНТЕРФЕЙС G0 / 0."
    ]
  },
  {
    "time": [
      282.47,
      288.58
    ],
    "en": [
      "Okay, I’m going to leave it at HSRP version 1 for now, to show you what happens when there"
    ],
    "ru": [
      "Хорошо, я пока оставлю его в HSRP версии 1, чтобы показать вам, что происходит, когда"
    ]
  },
  {
    "time": [
      288.58,
      290.24
    ],
    "en": [
      "is a version mismatch."
    ],
    "ru": [
      "несоответствие версии."
    ]
  },
  {
    "time": [
      290.24,
      293.37
    ],
    "en": [
      "Let’s configure the priority."
    ],
    "ru": [
      "Настроим приоритет."
    ]
  },
  {
    "time": [
      293.37,
      296.33
    ],
    "en": [
      "STANDBY 1 PRIORITY 50."
    ],
    "ru": [
      "ПРИОРИТЕТ ОЖИДАНИЯ 1 50."
    ]
  },
  {
    "time": [
      296.33,
      300.12
    ],
    "en": [
      "Now the virtual IP, same as on R1."
    ],
    "ru": [
      "Теперь виртуальный IP, такой же, как на R1."
    ]
  },
  {
    "time": [
      300.12,
      305.46
    ],
    "en": [
      "STANDBY 1 IP 10.0.1.254."
    ],
    "ru": [
      "РЕЖИМ ОЖИДАНИЯ 1 IP 10.0.1.254."
    ]
  },
  {
    "time": [
      305.46,
      311.24
    ],
    "en": [
      "Now I’m going to click this arrow here in packet tracer to fast forward 30 seconds."
    ],
    "ru": [
      "Теперь я собираюсь щелкнуть эту стрелку здесь, в программе трассировки пакетов, чтобы перемотать вперед на 30 секунд."
    ]
  },
  {
    "time": [
      311.24,
      316.569
    ],
    "en": [
      "If I return to R2, you can see all of these messages about a duplicate address."
    ],
    "ru": [
      "Если я вернусь к R2, вы увидите все эти сообщения о повторяющемся адресе."
    ]
  },
  {
    "time": [
      316.569,
      323.09
    ],
    "en": [
      "That’s because both R1 and R2 think they are the active router. Why is that?"
    ],
    "ru": [
      "Это потому, что и R1, и R2 считают себя активным маршрутизатором. Это почему?"
    ]
  },
  {
    "time": [
      323.09,
      326.229
    ],
    "en": [
      "Why is that? It’s because of the version mismatch."
    ],
    "ru": [
      "Это почему? Это из-за несовпадения версий."
    ]
  },
  {
    "time": [
      326.229,
      331.23
    ],
    "en": [
      "Because there is a version mismatch, they aren’t able to negotiate an active and standby,"
    ],
    "ru": [
      "Из-за несоответствия версий они не могут согласовать активный и резервный,"
    ]
  },
  {
    "time": [
      331.23,
      334.099
    ],
    "en": [
      "they both claim to be the active router."
    ],
    "ru": [
      "они оба заявляют, что являются активным маршрутизатором."
    ]
  },
  {
    "time": [
      334.099,
      341.45
    ],
    "en": [
      "To fix this, I’ll configure version 2 here on R2. STANDBY VERSION 2."
    ],
    "ru": [
      "Чтобы исправить это, я настрою версию 2 здесь, на R2. РЕЗЕРВНАЯ ВЕРСИЯ 2."
    ]
  },
  {
    "time": [
      341.45,
      344.1
    ],
    "en": [
      "STANDBY VERSION 2. Now I’ll click those arrows again."
    ],
    "ru": [
      "РЕЗЕРВНАЯ ВЕРСИЯ 2. Теперь я снова нажму на эти стрелки."
    ]
  },
  {
    "time": [
      344.1,
      346.47
    ],
    "en": [
      "And now I’ll check back on R2."
    ],
    "ru": [
      "А теперь еще раз проверю R2."
    ]
  },
  {
    "time": [
      346.47,
      349.02
    ],
    "en": [
      "So, the messages have stopped."
    ],
    "ru": [
      "Итак, сообщения прекратились."
    ]
  },
  {
    "time": [
      349.02,
      352.53
    ],
    "en": [
      "Let’s check DO SHOW STANDBY."
    ],
    "ru": [
      "Давайте проверим ДОПОЛНИТЕЛЬНО В РЕЖИМЕ ОЖИДАНИЯ."
    ]
  },
  {
    "time": [
      352.53,
      355.93
    ],
    "en": [
      "Okay, state is standby."
    ],
    "ru": [
      "Хорошо, состояние ожидания."
    ]
  },
  {
    "time": [
      355.93,
      361.49
    ],
    "en": [
      "And down here you can see that the active router is 10.0.1.253, which is R1."
    ],
    "ru": [
      "Здесь внизу вы видите активный маршрутизатор 10.0.1.253, то есть R1."
    ]
  },
  {
    "time": [
      361.49,
      367.819
    ],
    "en": [
      "So, now that the versions match everything seems to be working fine."
    ],
    "ru": [
      "Итак, теперь, когда версии совпадают, все вроде работает нормально."
    ]
  },
  {
    "time": [
      367.819,
      377.59
    ],
    "en": [
      "Next up, in step 3 I’ll configure the new VIP as the default gateway of PC1 and PC2. PC1 first."
    ],
    "ru": [
      "Затем, на шаге 3, я настрою новый VIP как шлюз по умолчанию для ПК1 и ПК2. Сначала ПК1."
    ]
  },
  {
    "time": [
      377.59,
      382.939
    ],
    "en": [
      "PC1 first. Click on ‘config’, then set the default gateway here."
    ],
    "ru": [
      "Сначала ПК1. Щелкните «config», затем установите здесь шлюз по умолчанию."
    ]
  },
  {
    "time": [
      382.939,
      385.81
    ],
    "en": [
      "Now I’ll do the same on PC2."
    ],
    "ru": [
      "Теперь сделаю то же самое на ПК2."
    ]
  },
  {
    "time": [
      385.81,
      392.379
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
      385.81,
      392.379
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
      392.379,
      400.74
    ],
    "en": [
      "From here on PC2 I’ll try a ping again. PING 8.8.8.8."
    ],
    "ru": [
      "Отсюда, на ПК2, я снова попробую выполнить эхо-запрос. ПИНГ 8.8.8.8."
    ]
  },
  {
    "time": [
      400.74,
      403.28
    ],
    "en": [
      "PING 8.8.8.8. Okay, the ping works."
    ],
    "ru": [
      "ПИНГ 8.8.8.8. Ладно, пинг работает."
    ]
  },
  {
    "time": [
      403.28,
      405.9
    ],
    "en": [
      "And let’s check the ARP table."
    ],
    "ru": [
      "И давайте проверим таблицу ARP."
    ]
  },
  {
    "time": [
      405.9,
      413.509
    ],
    "en": [
      "On PCs the command is ARP -A. There it is, 10.0.1.254."
    ],
    "ru": [
      "На ПК это команда ARP -A. Вот оно, 10.0.1.254."
    ]
  },
  {
    "time": [
      413.509,
      422.5
    ],
    "en": [
      "Notice the HSRP version 2 virtual MAC address, 0000 0C9F F001."
    ],
    "ru": [
      "Обратите внимание на виртуальный MAC-адрес HSRP версии 2, 0000 0C9F F001."
    ]
  },
  {
    "time": [
      422.5,
      424.77
    ],
    "en": [
      "Now let me show you another interesting point."
    ],
    "ru": [
      "А теперь позвольте мне показать вам еще один интересный момент."
    ]
  },
  {
    "time": [
      424.77,
      433.09
    ],
    "en": [
      "Let’s try a traceroute again. TRACERT 8.8.8.8."
    ],
    "ru": [
      "Давайте снова попробуем трассировку. TRACERT 8.8.8.8."
    ]
  },
  {
    "time": [
      433.09,
      440.6
    ],
    "en": [
      "TRACERT 8.8.8.8. Notice that the first hop address is 10.0.1.253, the IP address of R1’s G0/0 interface, not"
    ],
    "ru": [
      "TRACERT 8.8.8.8. Обратите внимание, что адрес первого перехода - 10.0.1.253, IP-адрес интерфейса G0 / 0 маршрутизатора R1, а не"
    ]
  },
  {
    "time": [
      440.6,
      443.49
    ],
    "en": [
      "the virtual IP address."
    ],
    "ru": [
      "виртуальный IP-адрес."
    ]
  },
  {
    "time": [
      443.49,
      448.499
    ],
    "en": [
      "Even though the virtual IP is configured as the default gateway, R1 replies to the traceroute"
    ],
    "ru": [
      "Несмотря на то, что виртуальный IP-адрес настроен как шлюз по умолчанию, R1 отвечает на traceroute"
    ]
  },
  {
    "time": [
      448.499,
      452.43
    ],
    "en": [
      "using the interface IP address instead of the virtual IP address."
    ],
    "ru": [
      "использование IP-адреса интерфейса вместо виртуального IP-адреса."
    ]
  },
  {
    "time": [
      452.43,
      462.08
    ],
    "en": [
      "So, traceroute is a useful tool to check that the correct gateway is being used in a situation like this."
    ],
    "ru": [
      "Итак, traceroute - полезный инструмент для проверки того, что в такой ситуации используется правильный шлюз."
    ]
  },
  {
    "time": [
      462.08,
      464.789
    ],
    "en": [
      "like this. Next up, let’s turn off R1."
    ],
    "ru": [
      "нравится. Далее выключим R1."
    ]
  },
  {
    "time": [
      464.789,
      469.22
    ],
    "en": [
      "But before that, we must make sure to save the config!"
    ],
    "ru": [
      "Но перед этим надо обязательно сохранить конфиг!"
    ]
  },
  {
    "time": [
      469.22,
      478.08
    ],
    "en": [
      "Here on R1 I’ll type END to return to privileged exec mode, and then WRITE to save the running config."
    ],
    "ru": [
      "Здесь, на R1, я набираю END, чтобы вернуться в привилегированный режим exec, а затем WRITE, чтобы сохранить текущую конфигурацию."
    ]
  },
  {
    "time": [
      478.08,
      482.719
    ],
    "en": [
      "config. If you forget to save the config, it will be lost when R1 restarts."
    ],
    "ru": [
      "config. Если вы забудете сохранить конфигурацию, она будет потеряна при перезапуске R1."
    ]
  },
  {
    "time": [
      482.719,
      483.949
    ],
    "en": [
      "Now let’s turn off R1."
    ],
    "ru": [
      "А теперь выключим R1."
    ]
  },
  {
    "time": [
      483.949,
      492.029
    ],
    "en": [
      "To do so, click on the ‘physical’ tab here, and you can flip the power switch here."
    ],
    "ru": [
      "Для этого нажмите здесь вкладку «Physical», и вы можете щелкнуть здесь выключателем питания."
    ]
  },
  {
    "time": [
      492.029,
      497.16
    ],
    "en": [
      "Now I’ll click the arrows to fast forward 30 seconds so R2 can become the active router,"
    ],
    "ru": [
      "Теперь я нажимаю стрелки, чтобы перемотать на 30 секунд вперед, чтобы R2 мог стать активным маршрутизатором,"
    ]
  },
  {
    "time": [
      497.16,
      508.74
    ],
    "en": [
      "and now let’s try a ping from PC1. PING 8.8.8.8."
    ],
    "ru": [
      "а теперь попробуем пинг с ПК1. ПИНГ 8.8.8.8."
    ]
  },
  {
    "time": [
      508.74,
      512.159
    ],
    "en": [
      "PING 8.8.8.8. Okay, the ping works, so we know R2 must be acting as"
    ],
    "ru": [
      "ПИНГ 8.8.8.8. Хорошо, ping работает, поэтому мы знаем, что R2 должен действовать как"
    ]
  },
  {
    "time": [
      512.159,
      522.71
    ],
    "en": [
      "the default gateway, R1 is turned off, but let’s try a traceroute anyway to be sure. TRACERT 8.8.8.8."
    ],
    "ru": [
      "шлюз по умолчанию, R1 выключен, но давайте все равно попробуем traceroute, чтобы убедиться. TRACERT 8.8.8.8."
    ]
  },
  {
    "time": [
      522.71,
      530.76
    ],
    "en": [
      "TRACERT 8.8.8.8. Okay, this time the first hop is displayed as 10.0.1.252, R2’s IP address, even though"
    ],
    "ru": [
      "TRACERT 8.8.8.8. Хорошо, на этот раз первый переход отображается как 10.0.1.252, IP-адрес R2, хотя"
    ]
  },
  {
    "time": [
      530.76,
      536.72
    ],
    "en": [
      "the virtual IP used as the default gateway is .254."
    ],
    "ru": [
      "виртуальный IP-адрес, используемый в качестве шлюза по умолчанию, - 0,254."
    ]
  },
  {
    "time": [
      536.72,
      540.53
    ],
    "en": [
      "Finally, let’s turn on R1 again."
    ],
    "ru": [
      "Наконец, давайте снова включим R1."
    ]
  },
  {
    "time": [
      540.53,
      544.06
    ],
    "en": [
      "Go back to R1, and flip the power switch."
    ],
    "ru": [
      "Вернитесь к R1 и нажмите выключатель питания."
    ]
  },
  {
    "time": [
      544.06,
      547.58
    ],
    "en": [
      "I’ll press the arrows again to skip forward."
    ],
    "ru": [
      "Я снова нажму стрелки, чтобы перейти вперед."
    ]
  },
  {
    "time": [
      547.58,
      555.85
    ],
    "en": [
      "Now, without checking the CLI of R1 or R2 to see the state, I’ll try a ping and traceroute from PC1."
    ],
    "ru": [
      "Теперь, не проверяя CLI R1 или R2, чтобы увидеть состояние, я попробую выполнить ping и traceroute с ПК1."
    ]
  },
  {
    "time": [
      555.85,
      560.52
    ],
    "en": [
      "from PC1. We enabled preemption, so R1 should take back the active router role."
    ],
    "ru": [
      "с ПК1. Мы включили приоритетное прерывание, поэтому R1 должен вернуть активную роль маршрутизатора."
    ]
  },
  {
    "time": [
      560.52,
      570.48
    ],
    "en": [
      "Let’s try the ping first. PING 8.8.8.8."
    ],
    "ru": [
      "Давайте сначала попробуем пинг. ПИНГ 8.8.8.8."
    ]
  },
  {
    "time": [
      570.48,
      572.37
    ],
    "en": [
      "PING 8.8.8.8. Okay, it works."
    ],
    "ru": [
      "ПИНГ 8.8.8.8. Ладно, работает."
    ]
  },
  {
    "time": [
      572.37,
      584.66
    ],
    "en": [
      "Now traceroute, let’s see if R1’s or R2’s IP address is displayed as the first hop. TRACERT 8.8.8.8."
    ],
    "ru": [
      "Теперь traceroute, давайте посмотрим, отображается ли IP-адрес R1 или R2 в качестве первого перехода. TRACERT 8.8.8.8."
    ]
  },
  {
    "time": [
      584.66,
      593.78
    ],
    "en": [
      "TRACERT 8.8.8.8. It is R1’s IP address of 10.0.1.253, so R1 has become the active router once again."
    ],
    "ru": [
      "TRACERT 8.8.8.8. Это IP-адрес R1 10.0.1.253, поэтому R1 снова стал активным маршрутизатором."
    ]
  },
  {
    "time": [
      593.78,
      596.12
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
      596.12,
      600.67
    ],
    "en": [
      "Next let’s take a look at a bonus lab in Boson NetSim for CCNA."
    ],
    "ru": [
      "Теперь давайте взглянем на бонусную лабораторию в Boson NetSim для CCNA."
    ]
  },
  {
    "time": [
      600.67,
      604.73
    ],
    "en": [
      "Okay, here's today's Boson NetSim lab preview."
    ],
    "ru": [
      "Хорошо, вот превью сегодняшней лабораторной работы Boson NetSim."
    ]
  },
  {
    "time": [
      604.73,
      610.39
    ],
    "en": [
      "As I said in the video, FHRP configuration isn't part of the CCNA exam anymore."
    ],
    "ru": [
      "Как я сказал в видео, конфигурация FHRP больше не является частью экзамена CCNA."
    ]
  },
  {
    "time": [
      610.39,
      613.98
    ],
    "en": [
      "So, it's actually not in NetSim for CCNA."
    ],
    "ru": [
      "Так что его на самом деле нет в NetSim для CCNA."
    ]
  },
  {
    "time": [
      613.98,
      624.34
    ],
    "en": [
      "But I still want to show you an HSRP lab, so I have selected a lab from the ENCOR, CCNP ENCOR 350-401 NetSim."
    ],
    "ru": [
      "Но я все же хочу показать вам лабораторию HSRP, поэтому я выбрал лабораторию из ENCOR, CCNP ENCOR 350-401 NetSim."
    ]
  },
  {
    "time": [
      624.34,
      628.31
    ],
    "en": [
      "ENCOR 350-401 NetSim. So, NetSim for CCNP ENCOR."
    ],
    "ru": [
      "ENCOR 350-401 NetSim. Итак, NetSim для CCNP ENCOR."
    ]
  },
  {
    "time": [
      628.31,
      633.52
    ],
    "en": [
      "And FHRP configuration is an exam topic on the CCNP, and as you can see there are plenty"
    ],
    "ru": [
      "Конфигурация FHRP - это тема экзамена на CCNP, и, как видите, существует множество"
    ]
  },
  {
    "time": [
      633.52,
      638.5
    ],
    "en": [
      "of labs for FHRPs in NetSim for CCNP."
    ],
    "ru": [
      "лабораторий для FHRP в NetSim для CCNP."
    ]
  },
  {
    "time": [
      638.5,
      645.84
    ],
    "en": [
      "Starting here, 'Configuring Hot Standby Router Protocol', all the way down to here, 'Troubleshooting GLBP'."
    ],
    "ru": [
      "Начиная с «Настройка протокола горячего резервирования маршрутизатора», вплоть до «Устранение неполадок GLBP»."
    ]
  },
  {
    "time": [
      645.84,
      652.08
    ],
    "en": [
      "GLBP'. So I counted, in total there are 19 labs covering HSRP, VRRP, and GLBP."
    ],
    "ru": [
      "ГЛБП '. Итак, я подсчитал, что всего существует 19 лабораторий, посвященных HSRP, VRRP и GLBP."
    ]
  },
  {
    "time": [
      652.08,
      656.9
    ],
    "en": [
      "So, all the configuration practice you need for FHRPs."
    ],
    "ru": [
      "Итак, вся практика настройки, которая вам понадобится для FHRP."
    ]
  },
  {
    "time": [
      656.9,
      663.14
    ],
    "en": [
      "Okay, the lab I've selected for today is this one, configuring hot standby router protocol."
    ],
    "ru": [
      "Итак, лаборатория, которую я выбрал на сегодня, - это настройка протокола маршрутизатора горячего резервирования."
    ]
  },
  {
    "time": [
      663.14,
      667.3
    ],
    "en": [
      "So let's check it out."
    ],
    "ru": [
      "Так что давайте это проверим."
    ]
  },
  {
    "time": [
      667.3,
      668.32
    ],
    "en": [
      "This is the lab topology."
    ],
    "ru": [
      "Это топология лаборатории."
    ]
  },
  {
    "time": [
      668.32,
      673.35
    ],
    "en": [
      "Pretty simple, we got four switches, access switches, distribution switches."
    ],
    "ru": [
      "Довольно просто, у нас есть четыре переключателя, переключатели доступа, переключатели распределения."
    ]
  },
  {
    "time": [
      673.35,
      674.63
    ],
    "en": [
      "And then two routers."
    ],
    "ru": [
      "А потом два роутера."
    ]
  },
  {
    "time": [
      674.63,
      679.43
    ],
    "en": [
      "And we're going to configure HSRP on these routers."
    ],
    "ru": [
      "И мы собираемся настроить HSRP на этих маршрутизаторах."
    ]
  },
  {
    "time": [
      679.43,
      682.14
    ],
    "en": [
      "These are the commands you need to know."
    ],
    "ru": [
      "Это команды, которые вам нужно знать."
    ]
  },
  {
    "time": [
      682.14,
      687.54
    ],
    "en": [
      "The STANDBY commands we covered in the lecture, and the ones we just saw."
    ],
    "ru": [
      "Команды STANDBY, которые мы рассмотрели в лекции, и те, которые мы только что видели."
    ]
  },
  {
    "time": [
      687.54,
      690.45
    ],
    "en": [
      "The IP addresses on each device."
    ],
    "ru": [
      "IP-адреса на каждом устройстве."
    ]
  },
  {
    "time": [
      690.45,
      693.99
    ],
    "en": [
      "And the lab tasks, there are four main tasks in this lab."
    ],
    "ru": [
      "И лабораторные задачи, в этой лабораторной работе четыре основных задачи."
    ]
  },
  {
    "time": [
      693.99,
      696.83
    ],
    "en": [
      "Task 1, verify basic connectivity."
    ],
    "ru": [
      "Задача 1, проверьте базовое подключение."
    ]
  },
  {
    "time": [
      696.83,
      699.56
    ],
    "en": [
      "Task 2, configure HSRP."
    ],
    "ru": [
      "Задача 2, настроить HSRP."
    ]
  },
  {
    "time": [
      699.56,
      703.05
    ],
    "en": [
      "Task 3, verify HSRP configuration."
    ],
    "ru": [
      "Задача 3, проверьте конфигурацию HSRP."
    ]
  },
  {
    "time": [
      703.05,
      706.74
    ],
    "en": [
      "And task 4, assign HSRP priorities and preempt."
    ],
    "ru": [
      "И задача 4: назначить приоритеты HSRP и вытеснить."
    ]
  },
  {
    "time": [
      706.74,
      712.04
    ],
    "en": [
      "So, for this lab preview let's just do task 1 and task 2."
    ],
    "ru": [
      "Итак, для предварительного просмотра лабораторной работы давайте просто выполним задачу 1 и задачу 2."
    ]
  },
  {
    "time": [
      712.04,
      713.59
    ],
    "en": [
      "So first up, task 1."
    ],
    "ru": [
      "Итак, сначала задача 1."
    ]
  },
  {
    "time": [
      713.59,
      718.18
    ],
    "en": [
      "It says this task involves verifying the connectivity of the devices on the network."
    ],
    "ru": [
      "В нем говорится, что эта задача включает проверку возможности подключения устройств в сети."
    ]
  },
  {
    "time": [
      718.18,
      721.38
    ],
    "en": [
      "Okay, so here's step 1."
    ],
    "ru": [
      "Хорошо, вот шаг 1."
    ]
  },
  {
    "time": [
      721.38,
      728.74
    ],
    "en": [
      "Verify all non-HSRP IP addresses on each device by using the proper SHOW command and the IP addresses table."
    ],
    "ru": [
      "Проверьте все IP-адреса, отличные от HSRP, на каждом устройстве, используя соответствующую команду SHOW и таблицу IP-адресов."
    ]
  },
  {
    "time": [
      728.74,
      731.03
    ],
    "en": [
      "addresses table. Alright, so let's check."
    ],
    "ru": [
      "таблица адресов. Хорошо, давай проверим."
    ]
  },
  {
    "time": [
      731.03,
      735.39
    ],
    "en": [
      "So, the CLI of Router1 is already open."
    ],
    "ru": [
      "Итак, интерфейс командной строки Router1 уже открыт."
    ]
  },
  {
    "time": [
      735.39,
      737.84
    ],
    "en": [
      "So I will check it out."
    ],
    "ru": [
      "Так что проверю."
    ]
  },
  {
    "time": [
      737.84,
      745.49
    ],
    "en": [
      "SHOW IP INTERFACE BRIEF. FastEthernet0/0, looks good."
    ],
    "ru": [
      "ПОКАЗАТЬ КРАТКОЕ ОПИСАНИЕ IP-ИНТЕРФЕЙСА. FastEthernet0 / 0, выглядит неплохо."
    ]
  },
  {
    "time": [
      745.49,
      748.15
    ],
    "en": [
      "FastEthernet0/0, looks good. And 0/1 looks good also."
    ],
    "ru": [
      "FastEthernet0 / 0, выглядит неплохо. И 0/1 тоже неплохо выглядит."
    ]
  },
  {
    "time": [
      748.15,
      754.59
    ],
    "en": [
      "Okay, let's check out Router2."
    ],
    "ru": [
      "Хорошо, давайте проверим Router2."
    ]
  },
  {
    "time": [
      754.59,
      761.72
    ],
    "en": [
      "FastEthernet0/0 is correct, and FastEthernet0/1 is correct as well."
    ],
    "ru": [
      "FastEthernet0 / 0 правильный, FastEthernet0 / 1 также правильный."
    ]
  },
  {
    "time": [
      761.72,
      763.44
    ],
    "en": [
      "Now let's check out the switches."
    ],
    "ru": [
      "Теперь посмотрим на переключатели."
    ]
  },
  {
    "time": [
      763.44,
      768.19
    ],
    "en": [
      "Oh, I'm getting an update for NetSim, I will not download that now."
    ],
    "ru": [
      "О, я получаю обновление для NetSim, сейчас не буду его загружать."
    ]
  },
  {
    "time": [
      768.19,
      773.72
    ],
    "en": [
      "Okay, ASW1, it has an IP address in VLAN1."
    ],
    "ru": [
      "Хорошо, ASW1, у него есть IP-адрес в VLAN1."
    ]
  },
  {
    "time": [
      773.72,
      777.32
    ],
    "en": [
      "SHOW IP INTERFACE BRIEF."
    ],
    "ru": [
      "ПОКАЗАТЬ КРАТКОЕ ОПИСАНИЕ IP-ИНТЕРФЕЙСА."
    ]
  },
  {
    "time": [
      777.32,
      784.7
    ],
    "en": [
      "And the address is correct. How about ASW2?"
    ],
    "ru": [
      "И адрес правильный. А как насчет ASW2?"
    ]
  },
  {
    "time": [
      784.7,
      787.78
    ],
    "en": [
      "How about ASW2? The address is correct."
    ],
    "ru": [
      "А как насчет ASW2? Адрес правильный."
    ]
  },
  {
    "time": [
      787.78,
      793.48
    ],
    "en": [
      "Okay, next the distribution switches. ENABLE."
    ],
    "ru": [
      "Хорошо, дальше переключатели распределения. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      793.48,
      800.01
    ],
    "en": [
      "ENABLE. SHOW IP INTERFACE BRIEF. VLAN1, looks good."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. ПОКАЗАТЬ КРАТКОЕ ОПИСАНИЕ IP-ИНТЕРФЕЙСА. VLAN1, выглядит неплохо."
    ]
  },
  {
    "time": [
      800.01,
      804.85
    ],
    "en": [
      "VLAN1, looks good. FastEthernet3,4,5 look good."
    ],
    "ru": [
      "VLAN1, выглядит неплохо. FastEthernet3,4,5 неплохо смотрятся."
    ]
  },
  {
    "time": [
      804.85,
      814.99
    ],
    "en": [
      "And HSRP, I guess we will configure later. Next one, DSW2."
    ],
    "ru": [
      "А HSRP, наверное, настроим позже. Следующий, DSW2."
    ]
  },
  {
    "time": [
      814.99,
      818.24
    ],
    "en": [
      "Next one, DSW2. The VLAN1 address is correct."
    ],
    "ru": [
      "Следующий, DSW2. Адрес VLAN1 правильный."
    ]
  },
  {
    "time": [
      818.24,
      822.98
    ],
    "en": [
      "And FastEthernet3,4 and 5 are correct also."
    ],
    "ru": [
      "И верны также FastEthernet3,4 и 5."
    ]
  },
  {
    "time": [
      822.98,
      826.92
    ],
    "en": [
      "Okay, last up, the two clients, the two PCs."
    ],
    "ru": [
      "Хорошо, наконец, два клиента, два компьютера."
    ]
  },
  {
    "time": [
      826.92,
      831.61
    ],
    "en": [
      "So, to check the IP address here let's use IPCONFIG."
    ],
    "ru": [
      "Итак, чтобы проверить здесь IP-адрес, воспользуемся IPCONFIG."
    ]
  },
  {
    "time": [
      831.61,
      836.62
    ],
    "en": [
      "IP address 3.30, looks good."
    ],
    "ru": [
      "IP-адрес 3.30, выглядит неплохо."
    ]
  },
  {
    "time": [
      836.62,
      841.08
    ],
    "en": [
      "The default gateway is 3.3, which is correct."
    ],
    "ru": [
      "Шлюз по умолчанию - 3.3, что правильно."
    ]
  },
  {
    "time": [
      841.08,
      846.8
    ],
    "en": [
      "And I guess later we will change this to use the HSRP address as the default gateway."
    ],
    "ru": [
      "И я предполагаю, что позже мы изменим это, чтобы использовать адрес HSRP в качестве шлюза по умолчанию."
    ]
  },
  {
    "time": [
      846.8,
      852.94
    ],
    "en": [
      "Okay, finally I'll check on Client2. IPCONFIG."
    ],
    "ru": [
      "Ладно, наконец-то проверю Client2. IPCONFIG."
    ]
  },
  {
    "time": [
      852.94,
      856.35
    ],
    "en": [
      "IPCONFIG. IP address 3.30, or sorry, 3.40."
    ],
    "ru": [
      "IPCONFIG. IP-адрес 3.30, извините, 3.40."
    ]
  },
  {
    "time": [
      856.35,
      862.08
    ],
    "en": [
      "Okay, and default gateway 3.2. Looks good."
    ],
    "ru": [
      "Ладно, и шлюз по умолчанию 3.2. Выглядит неплохо."
    ]
  },
  {
    "time": [
      862.08,
      867.48
    ],
    "en": [
      "Looks good. Okay, so step 2, verify that Client1 can ping DSW1's VLAN1 interface."
    ],
    "ru": [
      "Выглядит неплохо. Итак, шаг 2, убедитесь, что Client1 может проверить связь с интерфейсом VLAN1 DSW1."
    ]
  },
  {
    "time": [
      867.48,
      873.7
    ],
    "en": [
      "Okay, I'll go back to Client1. 172.16.3.3."
    ],
    "ru": [
      "Хорошо, я вернусь к Client1. 172.16.3.3."
    ]
  },
  {
    "time": [
      873.7,
      879.23
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
      873.7,
      879.23
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
      879.23,
      886.79
    ],
    "en": [
      "And how about Client2, can it ping DSW2's VLAN1 interface? PING 172.16.3.2."
    ],
    "ru": [
      "А как насчет Client2, может ли он пинговать интерфейс VLAN1 DSW2? ПИНГ 172.16.3.2."
    ]
  },
  {
    "time": [
      886.79,
      891.84
    ],
    "en": [
      "PING 172.16.3.2. Okay, looks good."
    ],
    "ru": [
      "ПИНГ 172.16.3.2. Хорошо, выглядит хорошо."
    ]
  },
  {
    "time": [
      891.84,
      904.52
    ],
    "en": [
      "And then verify that Client1 and Client2 can ping Router1's FastEthernet0/0 interface. Okay, PING 172.16.253.2."
    ],
    "ru": [
      "Затем убедитесь, что Client1 и Client2 могут пинговать интерфейс FastEthernet0 / 0 маршрутизатора Router1. Хорошо, PING 172.16.253.2."
    ]
  },
  {
    "time": [
      904.52,
      907.2
    ],
    "en": [
      "Okay, PING 172.16.253.2. Okay, looks good."
    ],
    "ru": [
      "Хорошо, PING 172.16.253.2. Хорошо, выглядит хорошо."
    ]
  },
  {
    "time": [
      907.2,
      917.14
    ],
    "en": [
      "I'll do the same back on Client1. Okay."
    ],
    "ru": [
      "Я сделаю то же самое на Client1. Хорошо."
    ]
  },
  {
    "time": [
      917.14,
      923.4
    ],
    "en": [
      "Okay. Router1's FastEthernet0/0 interface, oh it's not labelled here."
    ],
    "ru": [
      "Хорошо. Интерфейс FastEthernet0 / 0 Router1, о, он здесь не помечен."
    ]
  },
  {
    "time": [
      923.4,
      927.2
    ],
    "en": [
      "Okay, well we can ping it so, it's not a problem."
    ],
    "ru": [
      "Хорошо, мы можем пинговать его, это не проблема."
    ]
  },
  {
    "time": [
      927.2,
      931.26
    ],
    "en": [
      "Actually let me use CDP to see what's connected here."
    ],
    "ru": [
      "На самом деле позвольте мне использовать CDP, чтобы посмотреть, что здесь связано."
    ]
  },
  {
    "time": [
      931.26,
      935.23
    ],
    "en": [
      "This is a command we'll cover later in the course. SHOW CDP NEIGHBORS."
    ],
    "ru": [
      "Эту команду мы рассмотрим позже в курсе. ПОКАЗАТЬ СОСЕДЕЙ CDP."
    ]
  },
  {
    "time": [
      935.23,
      941.75
    ],
    "en": [
      "SHOW CDP NEIGHBORS. Okay, so FastEthernet0/0 is the one connected to DSW1, here."
    ],
    "ru": [
      "ПОКАЗАТЬ СОСЕДЕЙ CDP. Итак, FastEthernet0 / 0 подключен к DSW1."
    ]
  },
  {
    "time": [
      941.75,
      947.46
    ],
    "en": [
      "And FastEthernet0/1 is the one connected to DSW2, got it."
    ],
    "ru": [
      "А FastEthernet0 / 1 это тот, который подключился к DSW2, понял."
    ]
  },
  {
    "time": [
      947.46,
      949.0
    ],
    "en": [
      "Okay, that's task 1."
    ],
    "ru": [
      "Хорошо, это задача 1."
    ]
  },
  {
    "time": [
      949.0,
      950.63
    ],
    "en": [
      "We verified basic connectivity."
    ],
    "ru": [
      "Мы проверили базовое подключение."
    ]
  },
  {
    "time": [
      950.63,
      955.19
    ],
    "en": [
      "Task 2, configure HSRP."
    ],
    "ru": [
      "Задача 2, настроить HSRP."
    ]
  },
  {
    "time": [
      955.19,
      962.75
    ],
    "en": [
      "So on DSW1 and DSW2, create an HSRP group with a group number of 3 and an IP address of 172.16.3.1."
    ],
    "ru": [
      "Итак, на DSW1 и DSW2 создайте группу HSRP с номером группы 3 и IP-адресом 172.16.3.1."
    ]
  },
  {
    "time": [
      962.75,
      967.81
    ],
    "en": [
      "of 172.16.3.1. Okay, so this is something a little different."
    ],
    "ru": [
      "из 172.16.3.1. Хорошо, это немного другое."
    ]
  },
  {
    "time": [
      967.81,
      974.62
    ],
    "en": [
      "The distribution switches are going to be the default gateways for the clients, for the subnet."
    ],
    "ru": [
      "Коммутаторы распределения будут шлюзами по умолчанию для клиентов подсети."
    ]
  },
  {
    "time": [
      974.62,
      978.61
    ],
    "en": [
      "the subnet. So instead of configuring HSRP on the routers, like I said earlier, we're actually going"
    ],
    "ru": [
      "подсеть. Поэтому вместо настройки HSRP на маршрутизаторах, как я сказал ранее, мы фактически собираемся"
    ]
  },
  {
    "time": [
      978.61,
      984.86
    ],
    "en": [
      "to configure it the distribution switches, and you can do that on Layer 3 switches."
    ],
    "ru": [
      "для настройки коммутаторов распределения, и вы можете сделать это на коммутаторах уровня 3."
    ]
  },
  {
    "time": [
      984.86,
      987.53
    ],
    "en": [
      "Okay good, so this will be something a little different."
    ],
    "ru": [
      "Хорошо, так что это будет немного по-другому."
    ]
  },
  {
    "time": [
      987.53,
      991.04
    ],
    "en": [
      "Okay, so here on DSW1."
    ],
    "ru": [
      "Итак, здесь, на DSW1."
    ]
  },
  {
    "time": [
      991.04,
      995.65
    ],
    "en": [
      "CONF T. And what is the interface?"
    ],
    "ru": [
      "CONF T. А интерфейс какой?"
    ]
  },
  {
    "time": [
      995.65,
      996.65
    ],
    "en": [
      "It's VLAN 1, right?"
    ],
    "ru": [
      "Это VLAN 1, верно?"
    ]
  },
  {
    "time": [
      996.65,
      999.33
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
      999.33,
      1003.19
    ],
    "en": [
      "Yeah, everything's in VLAN 1."
    ],
    "ru": [
      "Да, все в VLAN 1."
    ]
  },
  {
    "time": [
      1003.19,
      1006.92
    ],
    "en": [
      "Or, DO SHOW IP INTERFACE BRIEF."
    ],
    "ru": [
      "Или ПОКАЖИТЕ КРАТКОЕ ОПИСАНИЕ IP-ИНТЕРФЕЙСА."
    ]
  },
  {
    "time": [
      1006.92,
      1008.7
    ],
    "en": [
      "Do that once more."
    ],
    "ru": [
      "Сделай это еще раз."
    ]
  },
  {
    "time": [
      1008.7,
      1010.94
    ],
    "en": [
      "Yeah, VLAN 1, okay."
    ],
    "ru": [
      "Да, VLAN 1, хорошо."
    ]
  },
  {
    "time": [
      1010.94,
      1014.77
    ],
    "en": [
      "So, INTERFACE VLAN 1."
    ],
    "ru": [
      "Итак, ИНТЕРФЕЙС VLAN 1."
    ]
  },
  {
    "time": [
      1014.77,
      1017.28
    ],
    "en": [
      "STANDBY, and we're using group number 3."
    ],
    "ru": [
      "STANDBY, а мы используем группу номер 3."
    ]
  },
  {
    "time": [
      1017.28,
      1025.709
    ],
    "en": [
      "So, STANDBY 3 IP 172.16.3.1. And that's it."
    ],
    "ru": [
      "Итак, STANDBY 3 IP 172.16.3.1. Вот и все."
    ]
  },
  {
    "time": [
      1025.709,
      1029.03
    ],
    "en": [
      "And that's it. Next, DSW2, same thing."
    ],
    "ru": [
      "Вот и все. Далее, DSW2, тоже самое."
    ]
  },
  {
    "time": [
      1029.03,
      1033.11
    ],
    "en": [
      "CONF T. INTERFACE VLAN 1."
    ],
    "ru": [
      "CONF T. ИНТЕРФЕЙС VLAN 1."
    ]
  },
  {
    "time": [
      1033.11,
      1041.6
    ],
    "en": [
      "STANDBY 3 IP 172.16.3.1."
    ],
    "ru": [
      "РЕЖИМ ОЖИДАНИЯ 3 IP 172.16.3.1."
    ]
  },
  {
    "time": [
      1041.6,
      1047.089
    ],
    "en": [
      "Okay, next workstations and access layer switches should use the newly configured HSRP IP address"
    ],
    "ru": [
      "Хорошо, следующие рабочие станции и коммутаторы уровня доступа должны использовать недавно настроенный IP-адрес HSRP."
    ]
  },
  {
    "time": [
      1047.089,
      1049.28
    ],
    "en": [
      "as their default gateway."
    ],
    "ru": [
      "в качестве шлюза по умолчанию."
    ]
  },
  {
    "time": [
      1049.28,
      1054.24
    ],
    "en": [
      "On Client1 and Client2, configure the default gateway to be 172.16.3.1."
    ],
    "ru": [
      "На Client1 и Client2 настройте шлюз по умолчанию на 172.16.3.1."
    ]
  },
  {
    "time": [
      1054.24,
      1061.0
    ],
    "en": [
      "Okay, so to do this we have to use a special command for NetSim."
    ],
    "ru": [
      "Итак, для этого мы должны использовать специальную команду для NetSim."
    ]
  },
  {
    "time": [
      1061.0,
      1064.39
    ],
    "en": [
      "That is this, IPCONFIG /DG."
    ],
    "ru": [
      "Это IPCONFIG / DG."
    ]
  },
  {
    "time": [
      1064.39,
      1069.12
    ],
    "en": [
      "That is not a Cisco command, that is a command used on PCs in NetSim."
    ],
    "ru": [
      "Это не команда Cisco, это команда, используемая на ПК в NetSim."
    ]
  },
  {
    "time": [
      1069.12,
      1079.5
    ],
    "en": [
      "So, IPCONFIG /DG 172.16.3.1. Okay, and Client2."
    ],
    "ru": [
      "Итак, IPCONFIG / DG 172.16.3.1. Хорошо, и Client2."
    ]
  },
  {
    "time": [
      1079.5,
      1082.68
    ],
    "en": [
      "Okay, and Client2. IPCONFIG /DG 172.16.3.1."
    ],
    "ru": [
      "Хорошо, и Client2. IPCONFIG / DG 172.16.3.1."
    ]
  },
  {
    "time": [
      1082.68,
      1092.86
    ],
    "en": [
      "And let me just check with IPCONFIG. Yep, looks good."
    ],
    "ru": [
      "И позвольте мне просто проверить с помощью IPCONFIG. Ага, выглядит хорошо."
    ]
  },
  {
    "time": [
      1092.86,
      1099.96
    ],
    "en": [
      "Yep, looks good. Okay next, on ASW1 and ASW2, configure the default gateway to be 172.16.3.1."
    ],
    "ru": [
      "Ага, выглядит хорошо. Хорошо, затем на ASW1 и ASW2 настройте шлюз по умолчанию на 172.16.3.1."
    ]
  },
  {
    "time": [
      1099.96,
      1103.24
    ],
    "en": [
      "Okay, so this is again something I haven't covered in the course."
    ],
    "ru": [
      "Хорошо, это снова то, о чем я не рассказывал в курсе."
    ]
  },
  {
    "time": [
      1103.24,
      1108.24
    ],
    "en": [
      "So, ASW1 and ASW2 are Layer 2 switches."
    ],
    "ru": [
      "Итак, ASW1 и ASW2 - это коммутаторы уровня 2."
    ]
  },
  {
    "time": [
      1108.24,
      1112.44
    ],
    "en": [
      "However, even on Layer 2 switches they are able to have one IP address."
    ],
    "ru": [
      "Однако даже на коммутаторах уровня 2 они могут иметь один IP-адрес."
    ]
  },
  {
    "time": [
      1112.44,
      1118.48
    ],
    "en": [
      "Sorry about that, one IP address for management, so you can connect to that IP address and"
    ],
    "ru": [
      "К сожалению, один IP-адрес для управления, поэтому вы можете подключиться к этому IP-адресу и"
    ]
  },
  {
    "time": [
      1118.48,
      1120.9
    ],
    "en": [
      "access the CLI of the device."
    ],
    "ru": [
      "получить доступ к интерфейсу командной строки устройства."
    ]
  },
  {
    "time": [
      1120.9,
      1125.3
    ],
    "en": [
      "I will explain this later in the course."
    ],
    "ru": [
      "Я объясню это позже в курсе."
    ]
  },
  {
    "time": [
      1125.3,
      1126.87
    ],
    "en": [
      "But they don't have a routing table."
    ],
    "ru": [
      "Но у них нет таблицы маршрутизации."
    ]
  },
  {
    "time": [
      1126.87,
      1135.46
    ],
    "en": [
      "So, to specify the default gateway you can't configure a default route, you have to use this command."
    ],
    "ru": [
      "Итак, чтобы указать шлюз по умолчанию, вы не можете настроить маршрут по умолчанию, вы должны использовать эту команду."
    ]
  },
  {
    "time": [
      1135.46,
      1142.48
    ],
    "en": [
      "this command. IP DEFAULT-GATEWAY, and then put in the IP address, 172.16.3.1."
    ],
    "ru": [
      "эту команду. IP-ШЛЮЗ ПО УМОЛЧАНИЮ, а затем введите IP-адрес 172.16.3.1."
    ]
  },
  {
    "time": [
      1142.48,
      1147.49
    ],
    "en": [
      "Okay, and I will do the same on ASW2."
    ],
    "ru": [
      "Хорошо, и я сделаю то же самое на ASW2."
    ]
  },
  {
    "time": [
      1147.49,
      1159.1
    ],
    "en": [
      "CONF T...oops, CONF T. IPCONFIG, nope, that is the PCs. IP DEFAULT-GATEWAY 172.16.3.1."
    ],
    "ru": [
      "CONF T ... ой, CONF T. IPCONFIG, нет, это ПК. ШЛЮЗ ПО УМОЛЧАНИЮ IP 172.16.3.1."
    ]
  },
  {
    "time": [
      1159.1,
      1160.6
    ],
    "en": [
      "IP DEFAULT-GATEWAY 172.16.3.1. There it is."
    ],
    "ru": [
      "ШЛЮЗ ПО УМОЛЧАНИЮ IP 172.16.3.1. Вот оно."
    ]
  },
  {
    "time": [
      1160.6,
      1167.23
    ],
    "en": [
      "Okay, so next we would go on to verify our HSRP configuration and do some more advanced configuration"
    ],
    "ru": [
      "Хорошо, теперь мы перейдем к проверке нашей конфигурации HSRP и выполним более расширенную настройку."
    ]
  },
  {
    "time": [
      1167.23,
      1169.65
    ],
    "en": [
      "like priorities and preemption."
    ],
    "ru": [
      "нравятся приоритеты и упреждение."
    ]
  },
  {
    "time": [
      1169.65,
      1170.76
    ],
    "en": [
      "But we'll end it here."
    ],
    "ru": [
      "Но на этом мы закончим."
    ]
  },
  {
    "time": [
      1170.76,
      1177.41
    ],
    "en": [
      "Now, just out of curiosity I want to grade the lab and see if we did the configurations correctly."
    ],
    "ru": [
      "Теперь, просто из любопытства, я хочу оценить лабораторию и посмотреть, правильно ли мы сделали конфигурации."
    ]
  },
  {
    "time": [
      1177.41,
      1181.06
    ],
    "en": [
      "correctly. It won't say that we completed the entire lab correctly because haven't finished it"
    ],
    "ru": [
      "правильно. Это не говорит о том, что мы выполнили всю лабораторию правильно, потому что еще не закончили."
    ]
  },
  {
    "time": [
      1181.06,
      1183.09
    ],
    "en": [
      "yet, but let's see how we did."
    ],
    "ru": [
      "пока, но посмотрим, как мы это сделали."
    ]
  },
  {
    "time": [
      1183.09,
      1185.17
    ],
    "en": [
      "So click on 'grade lab' here."
    ],
    "ru": [
      "Так что нажмите здесь \"лаборатория оценок\"."
    ]
  },
  {
    "time": [
      1185.17,
      1187.42
    ],
    "en": [
      "And as expected, 'you missed one or more commands in the lab'."
    ],
    "ru": [
      "И, как и ожидалось, «вы пропустили одну или несколько команд в лаборатории»."
    ]
  },
  {
    "time": [
      1187.42,
      1190.72
    ],
    "en": [
      "That's okay, we didn't finish it yet."
    ],
    "ru": [
      "Ничего страшного, мы еще не закончили."
    ]
  },
  {
    "time": [
      1190.72,
      1193.25
    ],
    "en": [
      "So Client1 and Client2, the configuration is correct."
    ],
    "ru": [
      "Итак, Client1 и Client2, конфигурация правильная."
    ]
  },
  {
    "time": [
      1193.25,
      1197.52
    ],
    "en": [
      "So that means we configured the default gateway correctly."
    ],
    "ru": [
      "Это означает, что мы правильно настроили шлюз по умолчанию."
    ]
  },
  {
    "time": [
      1197.52,
      1200.35
    ],
    "en": [
      "ASW1 and ASW2, same."
    ],
    "ru": [
      "ASW1 и ASW2, то же самое."
    ]
  },
  {
    "time": [
      1200.35,
      1202.23
    ],
    "en": [
      "The configurations are correct."
    ],
    "ru": [
      "Конфигурации правильные."
    ]
  },
  {
    "time": [
      1202.23,
      1207.19
    ],
    "en": [
      "So that means our...here, IP DEFAULT-GATEWAY command was correct."
    ],
    "ru": [
      "Значит, наша ... здесь команда IP DEFAULT-GATEWAY была правильной."
    ]
  },
  {
    "time": [
      1207.19,
      1212.33
    ],
    "en": [
      "DSW1 and DSW2, we are missing commands."
    ],
    "ru": [
      "DSW1 и DSW2, нам не хватает команд."
    ]
  },
  {
    "time": [
      1212.33,
      1215.19
    ],
    "en": [
      "Yeah, priority and preemption."
    ],
    "ru": [
      "Ага, приоритет и упреждение."
    ]
  },
  {
    "time": [
      1215.19,
      1222.02
    ],
    "en": [
      "However, the STANDBY 3 IP command is correct, so that means we did that step correctly."
    ],
    "ru": [
      "Однако команда STANDBY 3 IP верна, значит, мы выполнили этот шаг правильно."
    ]
  },
  {
    "time": [
      1222.02,
      1225.86
    ],
    "en": [
      "Okay, so that's a quick look at Boson NetSim."
    ],
    "ru": [
      "Хорошо, это быстрый взгляд на Boson NetSim."
    ]
  },
  {
    "time": [
      1225.86,
      1228.93
    ],
    "en": [
      "Not for CCNA this time, but for CCNP."
    ],
    "ru": [
      "На этот раз не для CCNA, а для CCNP."
    ]
  },
  {
    "time": [
      1228.93,
      1235.61
    ],
    "en": [
      "So if you want to get a copy of Boson NetSim, please follow the link in the video description."
    ],
    "ru": [
      "Поэтому, если вы хотите получить копию Boson NetSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      1235.61,
      1240.17
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
      1240.17,
      1244.19
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
      1244.19,
      1250.76
    ],
    "en": [
      "Thank you to Tshepiso, Justin, Loki, TheGunguy, Nil, Alex, Prakaash, Nasir, Erlison, Magrathea,"
    ],
    "ru": [
      "Спасибо Tshepiso, Justin, Loki, TheGunguy, Nil, Alex, Prakaash, Nasir, Erlison, Magrathea,"
    ]
  },
  {
    "time": [
      1250.76,
      1258.6
    ],
    "en": [
      "Apogee, Wasseem, Marko, Florian, Daming, Venkatesh, Kone, Joshua, Jhilmar, Samil, Ed, Value, John,"
    ],
    "ru": [
      "Апогей, Вассим, Марко, Флориан, Даминг, Венкатеш, Коне, Джошуа, Джилмар, Самил, Эд, Вэлли, Джон,"
    ]
  },
  {
    "time": [
      1258.6,
      1265.84
    ],
    "en": [
      "Funnydart, Scott, Hassan, Gerrard, Joyce, Marek, Velvijaykum, C Mohd, Johan, Mark, Yousif,"
    ],
    "ru": [
      "Фаннидарт, Скотт, Хасан, Джеррард, Джойс, Марек, Велвиджайкум, Си Мохд, Йохан, Марк, Юсиф,"
    ]
  },
  {
    "time": [
      1265.84,
      1273.059
    ],
    "en": [
      "Sidi, Boson Software, Charlesetta, Devin, Lito, Yonatan, and Vance."
    ],
    "ru": [
      "Сиди, Boson Software, Шарлесетта, Девин, Лито, Йонатан и Вэнс."
    ]
  },
  {
    "time": [
      1273.059,
      1278.38
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
      1278.38,
      1282.32
    ],
    "en": [
      "One of you is still displaying as Channel failed to load, if this is you please let"
    ],
    "ru": [
      "Один из вас по-прежнему отображается как «Не удалось загрузить канал». Если это так, пожалуйста, позвольте"
    ]
  },
  {
    "time": [
      1282.32,
      1285.69
    ],
    "en": [
      "me know and I’ll see if YouTube can fix it."
    ],
    "ru": [
      "я знаю, и я посмотрю, сможет ли YouTube это исправить."
    ]
  },
  {
    "time": [
      1285.69,
      1290.29
    ],
    "en": [
      "This is the list of JCNP-level members at the time of recording by the way, September"
    ],
    "ru": [
      "Это список участников уровня JCNP на момент записи, кстати, сентябрь"
    ]
  },
  {
    "time": [
      1290.29,
      1295.84
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
      1290.29,
      1295.84
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
      1295.84,
      1297.7
    ],
    "en": [
      "be in future videos."
    ],
    "ru": [
      "Пожалуйста, подпишитесь на канал, поставьте лайк видео, оставьте комментарий и поделитесь видео"
    ]
  },
  {
    "time": [
      1297.7,
      1301.309
    ],
    "en": [
      "Thank you for watching."
    ],
    "ru": [
      "со всеми, кто учится на CCNA."
    ]
  },
  {
    "time": [
      1301.309,
      1305.23
    ],
    "en": [
      "Please subscribe to the channel, like the video, leave a comment, and share the video"
    ],
    "ru": [
      "Если вы хотите оставить отзыв, проверьте ссылки в описании."
    ]
  },
  {
    "time": [
      1305.23,
      1308.56
    ],
    "en": [
      "with anyone else studying for the CCNA."
    ],
    "ru": [
      "Я также являюсь проверенным издателем Brave и принимаю советы BAT (Basic Attention Token) через браузер Brave."
    ]
  },
  {
    "time": [
      1308.56,
      1311.78
    ],
    "en": [
      "If you want to leave a tip, check the links in the description."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  },
  {
    "time": [
      1311.78,
      1318.72
    ],
    "en": [
      "I'm also a Brave verified publisher and accept BAT, or Basic Attention Token, tips via the Brave browser."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1318.72,
      1318.72
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      ""
    ]
  }
]