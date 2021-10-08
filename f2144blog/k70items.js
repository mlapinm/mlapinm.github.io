let objs = [
  {
    "time": [
      0.0,
      4.103395
    ],
    "en": [
      "welcome to this free CCNA packet tracer practice lab"
    ],
    "ru": [
      "добро пожаловать в эту бесплатную практическую лабораторию CCNA Packet Tracer"
    ]
  },
  {
    "time": [
      4.103395,
      8.103645
    ],
    "en": [
      "you can download the lab file from the link in the description"
    ],
    "ru": [
      "Вы можете скачать лабораторный файл по ссылке в описании"
    ]
  },
  {
    "time": [
      8.103645,
      16.11202
    ],
    "en": [
      "if you like these labs please consider supporting me via my patreon or the cryptocurrency options in the description"
    ],
    "ru": [
      "если вам нравятся эти лаборатории, пожалуйста, подумайте о поддержке меня через мой патреон или варианты криптовалюты в описании"
    ]
  },
  {
    "time": [
      16.11202,
      20.326708
    ],
    "en": [
      "also please subscribe to the channel for more labs like this"
    ],
    "ru": [
      "также подпишитесь на канал, чтобы увидеть больше подобных лабораторных работ"
    ]
  },
  {
    "time": [
      20.326708,
      23.577812
    ],
    "en": [
      "and share these videos with anyone else studying for the CCNA"
    ],
    "ru": [
      "и поделитесь этими видео со всеми, кто учится на CCNA"
    ]
  },
  {
    "time": [
      23.577812,
      28.265478
    ],
    "en": [
      "in this lab we will troubleshoot HS RP"
    ],
    "ru": [
      "в этой лабораторной работе мы будем устранять неполадки HS RP"
    ]
  },
  {
    "time": [
      28.265478,
      32.734312
    ],
    "en": [
      "the correct configuration should be identical to the previous lab"
    ],
    "ru": [
      "правильная конфигурация должна быть идентична предыдущей лабораторной работе"
    ]
  },
  {
    "time": [
      32.734312,
      36.239437
    ],
    "en": [
      "however a couple of miss configurations have been made"
    ],
    "ru": [
      "однако была сделана пара конфигураций промахов"
    ]
  },
  {
    "time": [
      36.239437,
      39.197207
    ],
    "en": [
      "I'll open up r1 here"
    ],
    "ru": [
      "Я открою r1 здесь"
    ]
  },
  {
    "time": [
      39.197207,
      44.553373
    ],
    "en": [
      "and you can see it's displaying the same error message over and over again"
    ],
    "ru": [
      "и вы можете видеть, что он снова и снова отображает одно и то же сообщение об ошибке"
    ]
  },
  {
    "time": [
      44.553373,
      51.901498
    ],
    "en": [
      "we are also told in the instructions that are to doesn't retake its role as the active router for VLAN 20"
    ],
    "ru": [
      "в инструкциях также говорится, что не следует возвращать свою роль активного маршрутизатора для VLAN 20."
    ]
  },
  {
    "time": [
      51.901498,
      54.094727
    ],
    "en": [
      "after recovering from a failure"
    ],
    "ru": [
      "после восстановления после сбоя"
    ]
  },
  {
    "time": [
      54.094727,
      57.197269
    ],
    "en": [
      "let's take a look at this error message"
    ],
    "ru": [
      "давайте посмотрим на это сообщение об ошибке"
    ]
  },
  {
    "time": [
      57.197269,
      62.004352
    ],
    "en": [
      "duplicate address 10 10 10 1"
    ],
    "ru": [
      "дублирующийся адрес 10 10 10 1"
    ]
  },
  {
    "time": [
      62.004352,
      66.005436
    ],
    "en": [
      "that's the virtual IP address used for VLAN 10"
    ],
    "ru": [
      "это виртуальный IP-адрес, используемый для VLAN 10"
    ]
  },
  {
    "time": [
      66.005436,
      68.982768
    ],
    "en": [
      "this error message can often occur"
    ],
    "ru": [
      "это сообщение об ошибке может часто появляться"
    ]
  },
  {
    "time": [
      68.982768,
      72.135893
    ],
    "en": [
      "when there are miss configurations between the two routers"
    ],
    "ru": [
      "когда между двумя маршрутизаторами есть неправильные конфигурации"
    ]
  },
  {
    "time": [
      72.135893,
      75.805038
    ],
    "en": [
      "that caused them not to recognize each other as an active standby pair"
    ],
    "ru": [
      "что заставило их не распознавать друг друга как активную резервную пару"
    ]
  },
  {
    "time": [
      75.805038,
      79.075018
    ],
    "en": [
      "so both routers claimed to be the active router"
    ],
    "ru": [
      "поэтому оба маршрутизатора заявили, что они являются активными маршрутизаторами"
    ]
  },
  {
    "time": [
      79.075018,
      81.727518
    ],
    "en": [
      "thus resulting in a duplicate address"
    ],
    "ru": [
      "что приводит к дублированию адреса"
    ]
  },
  {
    "time": [
      81.727518,
      87.667934
    ],
    "en": [
      "in this case pcs in VLAN 10 will still be able to use the virtual IP address"
    ],
    "ru": [
      "в этом случае компьютеры в VLAN 10 по-прежнему смогут использовать виртуальный IP-адрес."
    ]
  },
  {
    "time": [
      87.667934,
      91.721372
    ],
    "en": [
      "however whether they go via r1 or r2"
    ],
    "ru": [
      "однако независимо от того, проходят ли они через r1 или r2"
    ]
  },
  {
    "time": [
      91.721372,
      95.151038
    ],
    "en": [
      "depends on which replies to the ARP requests faster"
    ],
    "ru": [
      "зависит от того, какие ответы на запросы ARP быстрее"
    ]
  },
  {
    "time": [
      95.151038,
      100.526163
    ],
    "en": [
      "just to make it easier to work I'll stop these messages from being displayed"
    ],
    "ru": [
      "просто чтобы облегчить работу, я остановлю отображение этих сообщений"
    ]
  },
  {
    "time": [
      100.526163,
      105.656497
    ],
    "en": [
      "enable terminal no monitor"
    ],
    "ru": [
      "включить терминал без монитора"
    ]
  },
  {
    "time": [
      105.656497,
      110.446559
    ],
    "en": [
      "if I didn't do that the messages would keep appearing every few seconds"
    ],
    "ru": [
      "если бы я этого не сделал, сообщения будут появляться каждые несколько секунд"
    ]
  },
  {
    "time": [
      110.446559,
      112.267497
    ],
    "en": [
      "and make things difficult to see"
    ],
    "ru": [
      "и сделать вещи трудными для просмотра"
    ]
  },
  {
    "time": [
      112.267497,
      115.750142
    ],
    "en": [
      "let's check the HSR P configuration"
    ],
    "ru": [
      "давайте проверим конфигурацию HSR P"
    ]
  },
  {
    "time": [
      115.750142,
      118.84835
    ],
    "en": [
      "show standby"
    ],
    "ru": [
      "показать режим ожидания"
    ]
  },
  {
    "time": [
      118.84835,
      121.499933
    ],
    "en": [
      "and since the error message is for VLAN 10"
    ],
    "ru": [
      "и поскольку сообщение об ошибке предназначено для VLAN 10"
    ]
  },
  {
    "time": [
      121.499933,
      123.931329
    ],
    "en": [
      "I'll just show G 0 1"
    ],
    "ru": [
      "Я просто покажу G 0 1"
    ]
  },
  {
    "time": [
      123.931329,
      125.954475
    ],
    "en": [
      "the interface for VLAN 10"
    ],
    "ru": [
      "интерфейс для VLAN 10"
    ]
  },
  {
    "time": [
      125.954475,
      129.551433
    ],
    "en": [
      "hour 1 is claiming to be the active"
    ],
    "ru": [
      "час 1 претендует на то, чтобы быть активным"
    ]
  },
  {
    "time": [
      129.551433,
      131.790162
    ],
    "en": [
      "which it should be in our configuration"
    ],
    "ru": [
      "который должен быть в нашей конфигурации"
    ]
  },
  {
    "time": [
      131.790162,
      135.101704
    ],
    "en": [
      "you can see the priority is 110"
    ],
    "ru": [
      "Вы можете видеть, что приоритет 110"
    ]
  },
  {
    "time": [
      135.101704,
      137.786621
    ],
    "en": [
      "let's check on our to"
    ],
    "ru": [
      "давай проверим наш"
    ]
  },
  {
    "time": [
      137.786621,
      144.500621
    ],
    "en": [
      "enable terminal no monitor"
    ],
    "ru": [
      "включить терминал без монитора"
    ]
  },
  {
    "time": [
      144.500621,
      148.935267
    ],
    "en": [
      "show standby g 0 2"
    ],
    "ru": [
      "показать режим ожидания g 0 2"
    ]
  },
  {
    "time": [
      148.935267,
      153.255204
    ],
    "en": [
      "so R 2 is also claiming to be the active router"
    ],
    "ru": [
      "поэтому R 2 также претендует на роль активного маршрутизатора"
    ]
  },
  {
    "time": [
      153.255204,
      155.107892
    ],
    "en": [
      "what's causing this"
    ],
    "ru": [
      "что вызывает это"
    ]
  },
  {
    "time": [
      155.107892,
      158.007058
    ],
    "en": [
      "let's look at the two side-by-side"
    ],
    "ru": [
      "давайте посмотрим на два бок о бок"
    ]
  },
  {
    "time": [
      158.007058,
      164.255246
    ],
    "en": [
      "did you notice the problem"
    ],
    "ru": [
      "вы заметили проблему?"
    ]
  },
  {
    "time": [
      164.255246,
      167.932433
    ],
    "en": [
      "R 2 is using version 2 as a chit"
    ],
    "ru": [
      "R 2 использует версию 2 как чит"
    ]
  },
  {
    "time": [
      167.932433,
      169.460912
    ],
    "en": [
      "however R 1 is not"
    ],
    "ru": [
      "однако R 1 не"
    ]
  },
  {
    "time": [
      169.460912,
      171.320475
    ],
    "en": [
      "it's still using version 1"
    ],
    "ru": [
      "он все еще использует версию 1"
    ]
  },
  {
    "time": [
      171.320475,
      174.132496
    ],
    "en": [
      "let's fix that on our one"
    ],
    "ru": [
      "давайте исправим это на нашем"
    ]
  },
  {
    "time": [
      174.132496,
      177.688871
    ],
    "en": [
      "compte"
    ],
    "ru": [
      "compte"
    ]
  },
  {
    "time": [
      177.688871,
      179.5171
    ],
    "en": [
      "interface G 0 1"
    ],
    "ru": [
      "интерфейс G 0 1"
    ]
  },
  {
    "time": [
      179.5171,
      182.346516
    ],
    "en": [
      "standby version 2"
    ],
    "ru": [
      "резервная версия 2"
    ]
  },
  {
    "time": [
      182.346516,
      189.177662
    ],
    "en": [
      "ok I'll wait here for 10 seconds or so to let them work things out and then let's check if r2 is the standby"
    ],
    "ru": [
      "хорошо, я подожду здесь 10 секунд или около того, чтобы они поработали, а затем давайте проверим, является ли r2 резервным"
    ]
  },
  {
    "time": [
      189.177662,
      200.977641
    ],
    "en": [
      "okay hopefully that's enough time"
    ],
    "ru": [
      "хорошо, надеюсь, достаточно времени"
    ]
  },
  {
    "time": [
      200.977641,
      202.689453
    ],
    "en": [
      "let's check out our to"
    ],
    "ru": [
      "давай проверим наш"
    ]
  },
  {
    "time": [
      202.689453,
      207.819703
    ],
    "en": [
      "show standby g02"
    ],
    "ru": [
      "показать режим ожидания g02"
    ]
  },
  {
    "time": [
      207.819703,
      211.998828
    ],
    "en": [
      "there we go state is standby"
    ],
    "ru": [
      "там мы идем состояние ожидания"
    ]
  },
  {
    "time": [
      211.998828,
      215.964391
    ],
    "en": [
      "I'll try a traceroute from pc1 to the external server"
    ],
    "ru": [
      "Я попробую трассировку с pc1 на внешний сервер"
    ]
  },
  {
    "time": [
      215.964391,
      219.439578
    ],
    "en": [
      "just to confirm it takes the path via r1"
    ],
    "ru": [
      "просто чтобы подтвердить, что он идет по пути через r1"
    ]
  },
  {
    "time": [
      219.439578,
      225.320057
    ],
    "en": [
      "trace route 1500 one"
    ],
    "ru": [
      "проследить маршрут 1500 один"
    ]
  },
  {
    "time": [
      225.320057,
      235.669536
    ],
    "en": [
      "perfect it's going via r1 at ten ten ten -"
    ],
    "ru": [
      "идеально, это идет через r1 в десять десять десять -"
    ]
  },
  {
    "time": [
      235.669536,
      238.448828
    ],
    "en": [
      "so we solved the problem here on r1"
    ],
    "ru": [
      "Итак, мы решили проблему здесь, на r1"
    ]
  },
  {
    "time": [
      238.448828,
      243.04337
    ],
    "en": [
      "I'll enable the syslog messages on r1 and r2 again"
    ],
    "ru": [
      "Я снова включу сообщения системного журнала на r1 и r2"
    ]
  },
  {
    "time": [
      243.04337,
      245.596099
    ],
    "en": [
      "since those error messages should have stopped"
    ],
    "ru": [
      "поскольку эти сообщения об ошибках должны были прекратиться"
    ]
  },
  {
    "time": [
      245.596099,
      247.406411
    ],
    "en": [
      "on r1 first"
    ],
    "ru": [
      "на r1 сначала"
    ]
  },
  {
    "time": [
      247.406411,
      252.520328
    ],
    "en": [
      "end terminal monitor"
    ],
    "ru": [
      "конечный терминал монитор"
    ]
  },
  {
    "time": [
      252.520328,
      256.524245
    ],
    "en": [
      "okay now let's do the same on r2"
    ],
    "ru": [
      "хорошо, теперь давайте сделаем то же самое на r2"
    ]
  },
  {
    "time": [
      256.524245,
      261.574911
    ],
    "en": [
      "and terminal monitor"
    ],
    "ru": [
      "и терминальный монитор"
    ]
  },
  {
    "time": [
      261.574911,
      265.961682
    ],
    "en": [
      "okay now let's investigate what's up on VLAN 20"
    ],
    "ru": [
      "Хорошо, теперь давайте разберемся, что происходит в VLAN 20"
    ]
  },
  {
    "time": [
      265.961682,
      270.33087
    ],
    "en": [
      "show standby gig 0 1"
    ],
    "ru": [
      "показать ждущий концерт 0 1"
    ]
  },
  {
    "time": [
      270.33087,
      275.696516
    ],
    "en": [
      "so R 2 is currently the active router for VLAN 20"
    ],
    "ru": [
      "поэтому R 2 в настоящее время является активным маршрутизатором для VLAN 20"
    ]
  },
  {
    "time": [
      275.696516,
      280.646411
    ],
    "en": [
      "but we're told in the lab instructions that it doesn't retake its role as active router"
    ],
    "ru": [
      "но в лабораторных инструкциях нам сказано, что он не восстанавливает свою роль активного маршрутизатора."
    ]
  },
  {
    "time": [
      280.646411,
      282.408973
    ],
    "en": [
      "when it recovers from a failure"
    ],
    "ru": [
      "когда он восстанавливается после сбоя"
    ]
  },
  {
    "time": [
      282.408973,
      286.354098
    ],
    "en": [
      "actually I don't even need to troubleshoot anything here"
    ],
    "ru": [
      "на самом деле мне даже не нужно ничего устранять здесь"
    ]
  },
  {
    "time": [
      286.354098,
      288.971431
    ],
    "en": [
      "if you come across a problem like this"
    ],
    "ru": [
      "если вы столкнетесь с такой проблемой"
    ]
  },
  {
    "time": [
      288.971431,
      291.415931
    ],
    "en": [
      "the issue is preemption"
    ],
    "ru": [
      "проблема в упреждении"
    ]
  },
  {
    "time": [
      291.415931,
      293.773639
    ],
    "en": [
      "actually it says right here"
    ],
    "ru": [
      "на самом деле он говорит прямо здесь"
    ]
  },
  {
    "time": [
      293.773639,
      295.233514
    ],
    "en": [
      "preemption disabled"
    ],
    "ru": [
      "приоритетное отключение"
    ]
  },
  {
    "time": [
      295.233514,
      302.186118
    ],
    "en": [
      "if preemption is disabled the active router won't take back its role as the active router"
    ],
    "ru": [
      "если приоритетное отключение отключено, активный маршрутизатор не вернет себе роль активного маршрутизатора."
    ]
  },
  {
    "time": [
      302.186118,
      304.25116
    ],
    "en": [
      "if it fails and then recovers"
    ],
    "ru": [
      "если это не удается, а затем восстанавливается"
    ]
  },
  {
    "time": [
      304.25116,
      306.041243
    ],
    "en": [
      "it will become the standby router"
    ],
    "ru": [
      "он станет резервным маршрутизатором"
    ]
  },
  {
    "time": [
      306.041243,
      310.962368
    ],
    "en": [
      "the configuration instructions say that preemption should be enabled however"
    ],
    "ru": [
      "в инструкциях по настройке сказано, что приоритетное прерывание должно быть включено, однако"
    ]
  },
  {
    "time": [
      310.962368,
      312.210764
    ],
    "en": [
      "so let's do that"
    ],
    "ru": [
      "так давай сделаем это"
    ]
  },
  {
    "time": [
      312.210764,
      314.112305
    ],
    "en": [
      "coffee tea"
    ],
    "ru": [
      "кофе чай"
    ]
  },
  {
    "time": [
      314.112305,
      316.632264
    ],
    "en": [
      "interface g0 1"
    ],
    "ru": [
      "интерфейс g0 1"
    ]
  },
  {
    "time": [
      316.632264,
      320.38641
    ],
    "en": [
      "standby 20 preempt"
    ],
    "ru": [
      "режим ожидания 20 вытесн."
    ]
  },
  {
    "time": [
      320.38641,
      323.85566
    ],
    "en": [
      "do show standby G 0 1"
    ],
    "ru": [
      "показывать режим ожидания G 0 1"
    ]
  },
  {
    "time": [
      323.85566,
      327.035097
    ],
    "en": [
      "there we go preemption enabled"
    ],
    "ru": [
      "Включено приоритетное прерывание"
    ]
  },
  {
    "time": [
      327.035097,
      329.309201
    ],
    "en": [
      "that's all for this lab"
    ],
    "ru": [
      "это все для этой лаборатории"
    ]
  },
  {
    "time": [
      329.309201,
      336.32368
    ],
    "en": [
      "thank you for watching I hope this lab and video have been helpful for you"
    ],
    "ru": [
      "Спасибо за просмотр. Надеюсь, эта лабораторная работа и видео были для вас полезны."
    ]
  },
  {
    "time": [
      336.32368,
      340.855035
    ],
    "en": [
      "please subscribe for future labs like this which will be released weekly"
    ],
    "ru": [
      "пожалуйста, подпишитесь на будущие лабораторные работы, которые будут выпускаться еженедельно"
    ]
  },
  {
    "time": [
      340.855035,
      345.807826
    ],
    "en": [
      "if you have requests for any specific labs let me know in the comments section"
    ],
    "ru": [
      "если у вас есть запросы по каким-либо конкретным лабораториям, дайте мне знать в разделе комментариев"
    ]
  },
  {
    "time": [
      345.807826,
      353.114471
    ],
    "en": [
      "if you want to support my channel I accept Bitcoin and aetherium donations via the addresses in the description"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, я принимаю пожертвования в биткойнах и эфириуме по адресам в описании"
    ]
  },
  {
    "time": [
      353.114471,
      361.722909
    ],
    "en": [
      "I am also a brave verified publisher and accept bat or basic attention token donations in the brave browser"
    ],
    "ru": [
      "Я также храбрый проверенный издатель и принимаю пожертвования летучих мышей или базовых токенов внимания в смелом браузере."
    ]
  },
  {
    "time": [
      361.722909,
      361.722909
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
      361.722909,
      361.722909
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
      361.722909,
      361.722909
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]