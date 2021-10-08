let objs = [
  {
    "time": [
      0.0,
      4.341666
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
      4.341666,
      8.309812
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
      8.309812,
      15.841125
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
      15.841125,
      19.051333
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
      19.051333,
      22.940145
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
      22.940145,
      29.295812
    ],
    "en": [
      "in this lab we will troubleshoot a few problems in the network we configured in the previous lab"
    ],
    "ru": [
      "в этой лабораторной работе мы устраним несколько проблем в сети, которую мы настроили в предыдущей лабораторной работе."
    ]
  },
  {
    "time": [
      29.295812,
      33.025645
    ],
    "en": [
      "there are three issues listed in the instructions"
    ],
    "ru": [
      "в инструкции указаны три проблемы"
    ]
  },
  {
    "time": [
      33.025645,
      34.887478
    ],
    "en": [
      "let's fix them one by one"
    ],
    "ru": [
      "давайте исправим их один за другим"
    ]
  },
  {
    "time": [
      34.887478,
      40.198561
    ],
    "en": [
      "the first issue is that PC 2 cannot ping PC 1"
    ],
    "ru": [
      "первая проблема заключается в том, что ПК 2 не может пинговать ПК 1"
    ]
  },
  {
    "time": [
      40.198561,
      41.726915
    ],
    "en": [
      "let's test it"
    ],
    "ru": [
      "давай проверим это"
    ]
  },
  {
    "time": [
      41.726915,
      44.970811
    ],
    "en": [
      "I'll ping PC 1 from PC to"
    ],
    "ru": [
      "Я пингую ПК 1 с ПК на"
    ]
  },
  {
    "time": [
      44.970811,
      51.223269
    ],
    "en": [
      "ping 192.168.1.1 hundred"
    ],
    "ru": [
      "пинг 192.168.1.1 сотня"
    ]
  },
  {
    "time": [
      51.223269,
      55.785331
    ],
    "en": [
      "ok we get a reply from our default gateway"
    ],
    "ru": [
      "хорошо, мы получаем ответ от нашего шлюза по умолчанию"
    ]
  },
  {
    "time": [
      55.785331,
      58.798561
    ],
    "en": [
      "saying the destination host is unreachable"
    ],
    "ru": [
      "говорит, что целевой хост недоступен"
    ]
  },
  {
    "time": [
      58.798561,
      64.152519
    ],
    "en": [
      "this probably means the default gateway R 2 doesn't have a route to the network"
    ],
    "ru": [
      "это, вероятно, означает, что шлюз по умолчанию R 2 не имеет маршрута к сети"
    ]
  },
  {
    "time": [
      64.152519,
      67.218206
    ],
    "en": [
      "let's investigate on our to"
    ],
    "ru": [
      "давайте исследуем наш"
    ]
  },
  {
    "time": [
      67.218206,
      73.534872
    ],
    "en": [
      "enable show IP route"
    ],
    "ru": [
      "включить показ IP-маршрута"
    ]
  },
  {
    "time": [
      73.534872,
      77.83256
    ],
    "en": [
      "indeed our two only knows local and connected routes"
    ],
    "ru": [
      "действительно, наши двое знают только локальные и связанные маршруты"
    ]
  },
  {
    "time": [
      77.83256,
      80.371995
    ],
    "en": [
      "it's missing the default route out to the Internet"
    ],
    "ru": [
      "отсутствует маршрут по умолчанию в Интернет"
    ]
  },
  {
    "time": [
      80.371995,
      82.193662
    ],
    "en": [
      "we configured in the previous lab"
    ],
    "ru": [
      "мы настроили в предыдущей лабораторной работе"
    ]
  },
  {
    "time": [
      82.193662,
      84.00262
    ],
    "en": [
      "let's fix that"
    ],
    "ru": [
      "давай исправим это"
    ]
  },
  {
    "time": [
      84.00262,
      85.722453
    ],
    "en": [
      "comte"
    ],
    "ru": [
      "граф"
    ]
  },
  {
    "time": [
      85.722453,
      93.698349
    ],
    "en": [
      "IP route oh-oh-oh-oh-oh-oh-oh-oh-oh g 0 0 0"
    ],
    "ru": [
      "IP-маршрут ой-ой-ой-ой-ой-ой-ой-ой-ой г 0 0 0"
    ]
  },
  {
    "time": [
      93.698349,
      98.502599
    ],
    "en": [
      "ok immediately we get a message saying our tunnel interface is up"
    ],
    "ru": [
      "хорошо, сразу же мы получаем сообщение о том, что наш туннельный интерфейс работает"
    ]
  },
  {
    "time": [
      98.502599,
      101.089473
    ],
    "en": [
      "because we now have a route to the destination"
    ],
    "ru": [
      "потому что теперь у нас есть маршрут к месту назначения"
    ]
  },
  {
    "time": [
      101.089473,
      106.711868
    ],
    "en": [
      "and if we wait a few seconds the OSPF neighbor r1 should come up as well"
    ],
    "ru": [
      "и если мы подождем несколько секунд, должен появиться сосед OSPF r1"
    ]
  },
  {
    "time": [
      106.711868,
      112.785764
    ],
    "en": [
      "let's try that ping from PC to again"
    ],
    "ru": [
      "давайте попробуем этот пинг с ПК еще раз"
    ]
  },
  {
    "time": [
      112.785764,
      118.166222
    ],
    "en": [
      "ping 192.168.1.1 hundred"
    ],
    "ru": [
      "пинг 192.168.1.1 сотня"
    ]
  },
  {
    "time": [
      118.166222,
      126.178264
    ],
    "en": [
      "okay the ping works this time"
    ],
    "ru": [
      "хорошо, на этот раз пинг работает"
    ]
  },
  {
    "time": [
      126.178264,
      128.005722
    ],
    "en": [
      "we've solved the first issue"
    ],
    "ru": [
      "мы решили первую проблему"
    ]
  },
  {
    "time": [
      128.005722,
      133.579784
    ],
    "en": [
      "the next problem is that PC for cannot pain pc3"
    ],
    "ru": [
      "следующая проблема заключается в том, что компьютер не может болеть pc3"
    ]
  },
  {
    "time": [
      133.579784,
      135.233617
    ],
    "en": [
      "let's test that out"
    ],
    "ru": [
      "давай проверим это"
    ]
  },
  {
    "time": [
      135.233617,
      138.603533
    ],
    "en": [
      "I'll ping pc 3 from PC for"
    ],
    "ru": [
      "Я пингую pc 3 с ПК для"
    ]
  },
  {
    "time": [
      138.603533,
      143.842241
    ],
    "en": [
      "ping 192.168 3.1 hundred"
    ],
    "ru": [
      "пинг 192.168 3.1 сотки"
    ]
  },
  {
    "time": [
      143.842241,
      151.118365
    ],
    "en": [
      "ok the thing fails"
    ],
    "ru": [
      "хорошо, вещь не работает"
    ]
  },
  {
    "time": [
      151.118365,
      155.501386
    ],
    "en": [
      "this time our default gateway doesn't send destination host unreachable"
    ],
    "ru": [
      "на этот раз наш шлюз по умолчанию не отправляет целевой хост недоступен"
    ]
  },
  {
    "time": [
      155.501386,
      157.986386
    ],
    "en": [
      "so it's probably a different issue"
    ],
    "ru": [
      "так что это, наверное, другая проблема"
    ]
  },
  {
    "time": [
      157.986386,
      161.536281
    ],
    "en": [
      "let's check out our for"
    ],
    "ru": [
      "давай проверим нашу"
    ]
  },
  {
    "time": [
      161.536281,
      166.755073
    ],
    "en": [
      "enable show IP route"
    ],
    "ru": [
      "включить показ IP-маршрута"
    ]
  },
  {
    "time": [
      166.755073,
      170.897969
    ],
    "en": [
      "as you can see our 4 has a default route"
    ],
    "ru": [
      "как вы можете видеть, у наших 4 есть маршрут по умолчанию"
    ]
  },
  {
    "time": [
      170.897969,
      176.051469
    ],
    "en": [
      "so it should be able to reach the 1 and 2.16 8.30 slash 24 network"
    ],
    "ru": [
      "поэтому он должен быть в состоянии достичь сети 1 и 2.16 8.30 slash 24"
    ]
  },
  {
    "time": [
      176.051469,
      178.406615
    ],
    "en": [
      "which is connected to our 3"
    ],
    "ru": [
      "который связан с нашими 3"
    ]
  },
  {
    "time": [
      178.406615,
      180.356823
    ],
    "en": [
      "let's check out our 3"
    ],
    "ru": [
      "давайте посмотрим наши 3"
    ]
  },
  {
    "time": [
      180.356823,
      185.481864
    ],
    "en": [
      "enable show IP route"
    ],
    "ru": [
      "включить показ IP-маршрута"
    ]
  },
  {
    "time": [
      185.481864,
      190.040135
    ],
    "en": [
      "ok our 3 only has connected and local roads"
    ],
    "ru": [
      "хорошо, у наших 3 только соединенные и местные дороги"
    ]
  },
  {
    "time": [
      190.040135,
      193.211551
    ],
    "en": [
      "no AI GRP or even BGP routes"
    ],
    "ru": [
      "нет AI GRP или даже маршрутов BGP"
    ]
  },
  {
    "time": [
      193.211551,
      197.991009
    ],
    "en": [
      "this means that the ping from pc 4 was able to reach pc 3"
    ],
    "ru": [
      "это означает, что эхо-запрос от ПК 4 смог достичь ПК 3"
    ]
  },
  {
    "time": [
      197.991009,
      201.25703
    ],
    "en": [
      "but our 3 couldn't send the reply back"
    ],
    "ru": [
      "но наши трое не смогли отправить ответ"
    ]
  },
  {
    "time": [
      201.25703,
      206.314926
    ],
    "en": [
      "because it doesn't have a route to 192.168.0 slash 24"
    ],
    "ru": [
      "потому что у него нет маршрута к 192.168.0 косая черта 24"
    ]
  },
  {
    "time": [
      206.314926,
      211.073508
    ],
    "en": [
      "the lack of BGP routes isn't relevant to this current issue"
    ],
    "ru": [
      "отсутствие маршрутов BGP не имеет отношения к этой текущей проблеме"
    ]
  },
  {
    "time": [
      211.073508,
      213.195988
    ],
    "en": [
      "so let's look at the EA grpe issue"
    ],
    "ru": [
      "Итак, давайте посмотрим на проблему с EA grpe"
    ]
  },
  {
    "time": [
      213.195988,
      217.406487
    ],
    "en": [
      "show IP erp neighbors"
    ],
    "ru": [
      "показать соседей по IP erp"
    ]
  },
  {
    "time": [
      217.406487,
      219.71832
    ],
    "en": [
      "no neighbors"
    ],
    "ru": [
      "нет соседей"
    ]
  },
  {
    "time": [
      219.71832,
      220.403028
    ],
    "en": [
      "that's a problem"
    ],
    "ru": [
      "это проблема"
    ]
  },
  {
    "time": [
      220.403028,
      223.484986
    ],
    "en": [
      "show IP protocols"
    ],
    "ru": [
      "показать IP-протоколы"
    ]
  },
  {
    "time": [
      223.484986,
      228.128173
    ],
    "en": [
      "can you identify the issue"
    ],
    "ru": [
      "Вы можете определить проблему"
    ]
  },
  {
    "time": [
      228.128173,
      235.814151
    ],
    "en": [
      "under routing for networks 203 OD 1 1 3 8 / 30 is listed"
    ],
    "ru": [
      "под маршрутизацией для сетей 203 OD 1 1 3 8/30 указано"
    ]
  },
  {
    "time": [
      235.814151,
      237.633255
    ],
    "en": [
      "which is fine"
    ],
    "ru": [
      "что нормально"
    ]
  },
  {
    "time": [
      237.633255,
      241.011589
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
      237.633255,
      241.011589
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
      241.011589,
      242.209234
    ],
    "en": [
      "which is fine"
    ],
    "ru": [
      "что нормально"
    ]
  },
  {
    "time": [
      242.209234,
      244.276505
    ],
    "en": [
      "it's a class full / 24 network"
    ],
    "ru": [
      "это сеть класса full / 24"
    ]
  },
  {
    "time": [
      244.276505,
      245.906005
    ],
    "en": [
      "so the prefix length isn't displayed"
    ],
    "ru": [
      "поэтому длина префикса не отображается"
    ]
  },
  {
    "time": [
      245.906005,
      251.899275
    ],
    "en": [
      "but 192.168.0 / 32 is incorrect"
    ],
    "ru": [
      "но 192.168.0 / 32 неверно"
    ]
  },
  {
    "time": [
      251.899275,
      259.09238
    ],
    "en": [
      "r 3 doesn't have any interface in 192.168.0 / 32 Network"
    ],
    "ru": [
      "r 3 не имеет интерфейса в сети 192.168.0 / 32"
    ]
  },
  {
    "time": [
      259.09238,
      264.317109
    ],
    "en": [
      "its G 0 1 interface is 192.168.0.1"
    ],
    "ru": [
      "его интерфейс G 0 1 - 192.168.0.1"
    ]
  },
  {
    "time": [
      264.317109,
      266.610108
    ],
    "en": [
      "let's fix that statement"
    ],
    "ru": [
      "давайте исправим это утверждение"
    ]
  },
  {
    "time": [
      266.610108,
      268.98015
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
      268.98015,
      272.707629
    ],
    "en": [
      "red ER e IG RP 100"
    ],
    "ru": [
      "красный ER e IG RP 100"
    ]
  },
  {
    "time": [
      272.707629,
      280.315733
    ],
    "en": [
      "no network 192.168.0 oh-oh-oh-oh"
    ],
    "ru": [
      "нет сети 192.168.0 ой-ой-ой-ой"
    ]
  },
  {
    "time": [
      280.315733,
      288.124462
    ],
    "en": [
      "network 192.168.0.0 oh-oh-oh 255"
    ],
    "ru": [
      "сеть 192.168.0.0 ой-ой-ой 255"
    ]
  },
  {
    "time": [
      288.124462,
      291.11469
    ],
    "en": [
      "ok immediately the adjacency comes up"
    ],
    "ru": [
      "хорошо, сразу появляется смежность"
    ]
  },
  {
    "time": [
      291.11469,
      294.113565
    ],
    "en": [
      "do show IP route"
    ],
    "ru": [
      "показывать IP-маршрут"
    ]
  },
  {
    "time": [
      294.113565,
      300.590544
    ],
    "en": [
      "okay now R 3 has a route to 192.168.0 / 24"
    ],
    "ru": [
      "хорошо, теперь у R 3 есть маршрут к 192.168.0 / 24"
    ]
  },
  {
    "time": [
      300.590544,
      304.296044
    ],
    "en": [
      "let's try that ping again from pc 4"
    ],
    "ru": [
      "давайте попробуем этот пинг еще раз с пк 4"
    ]
  },
  {
    "time": [
      304.296044,
      310.334023
    ],
    "en": [
      "in 192.168 3.1 hundred"
    ],
    "ru": [
      "в 192,168 3,1 сотки"
    ]
  },
  {
    "time": [
      310.334023,
      315.178585
    ],
    "en": [
      "ok the ping works this time"
    ],
    "ru": [
      "хорошо, на этот раз пинг работает"
    ]
  },
  {
    "time": [
      315.178585,
      322.617064
    ],
    "en": [
      "now the last problem is that hosts in enterprise B cannot ping hosts in enterprise a"
    ],
    "ru": [
      "Теперь последняя проблема заключается в том, что хосты на предприятии B не могут пинговать узлы на предприятии A"
    ]
  },
  {
    "time": [
      322.617064,
      327.94046
    ],
    "en": [
      "that probably has to do with the fact that our 3 still has no BGP routes"
    ],
    "ru": [
      "это, вероятно, связано с тем, что у нашего 3 все еще нет маршрутов BGP"
    ]
  },
  {
    "time": [
      327.94046,
      330.909376
    ],
    "en": [
      "let's go back on our three to investigate"
    ],
    "ru": [
      "давайте вернемся к нашим трём, чтобы исследовать"
    ]
  },
  {
    "time": [
      330.909376,
      336.676772
    ],
    "en": [
      "and show IP BGP summary"
    ],
    "ru": [
      "и показать сводку IP BGP"
    ]
  },
  {
    "time": [
      336.676772,
      347.226355
    ],
    "en": [
      "ok so two of 302 139 in a s 65 thousand one is configured as our neighbor"
    ],
    "ru": [
      "хорошо, так что два из 302 139 в s 65 тысячах один настроен как наш сосед"
    ]
  },
  {
    "time": [
      347.226355,
      348.379813
    ],
    "en": [
      "that's correct"
    ],
    "ru": [
      "это правильно"
    ]
  },
  {
    "time": [
      348.379813,
      352.031792
    ],
    "en": [
      "show IP bgp neighbors"
    ],
    "ru": [
      "показать соседей IP bgp"
    ]
  },
  {
    "time": [
      352.031792,
      359.830896
    ],
    "en": [
      "ok here at the top it says BGP state equals active"
    ],
    "ru": [
      "хорошо, здесь вверху говорится, что состояние BGP равно активному"
    ]
  },
  {
    "time": [
      359.830896,
      362.020979
    ],
    "en": [
      "that sounds like a good thing"
    ],
    "ru": [
      "это звучит как хорошо"
    ]
  },
  {
    "time": [
      362.020979,
      366.379729
    ],
    "en": [
      "but really it means that BGP is actively trying to form an adjacency"
    ],
    "ru": [
      "но на самом деле это означает, что BGP активно пытается сформировать смежность"
    ]
  },
  {
    "time": [
      366.379729,
      369.637624
    ],
    "en": [
      "the state we really want is established"
    ],
    "ru": [
      "государство, которое мы действительно хотим, установлено"
    ]
  },
  {
    "time": [
      369.637624,
      373.623456
    ],
    "en": [
      "the BGP configuration looks fine however"
    ],
    "ru": [
      "однако конфигурация BGP выглядит нормально"
    ]
  },
  {
    "time": [
      373.623456,
      376.390456
    ],
    "en": [
      "so maybe there is something wrong with the interface"
    ],
    "ru": [
      "так что, возможно, что-то не так с интерфейсом"
    ]
  },
  {
    "time": [
      376.390456,
      380.929664
    ],
    "en": [
      "show interface s 0 0 0"
    ],
    "ru": [
      "показать интерфейс s 0 0 0"
    ]
  },
  {
    "time": [
      380.929664,
      385.433435
    ],
    "en": [
      "encapsulation hdl-c"
    ],
    "ru": [
      "инкапсуляция hdl-c"
    ]
  },
  {
    "time": [
      385.433435,
      387.451685
    ],
    "en": [
      "there's a problem"
    ],
    "ru": [
      "есть проблема"
    ]
  },
  {
    "time": [
      387.451685,
      389.601685
    ],
    "en": [
      "it's supposed to be using PPP"
    ],
    "ru": [
      "предполагается использование PPP"
    ]
  },
  {
    "time": [
      389.601685,
      392.175769
    ],
    "en": [
      "as we configured in the last lab"
    ],
    "ru": [
      "как мы настроили в последней лабораторной работе"
    ]
  },
  {
    "time": [
      392.175769,
      394.503414
    ],
    "en": [
      "show run"
    ],
    "ru": [
      "показать бег"
    ]
  },
  {
    "time": [
      394.503414,
      400.782498
    ],
    "en": [
      "indeed PPP isn't configured on the interface"
    ],
    "ru": [
      "действительно PPP не настроен на интерфейсе"
    ]
  },
  {
    "time": [
      400.782498,
      403.712727
    ],
    "en": [
      "if I scroll up a little however"
    ],
    "ru": [
      "если я прокручу немного вверх"
    ]
  },
  {
    "time": [
      403.712727,
      408.145018
    ],
    "en": [
      "you can see the appropriate username and password combination is configured"
    ],
    "ru": [
      "вы можете видеть, что настроена соответствующая комбинация имени пользователя и пароля"
    ]
  },
  {
    "time": [
      408.145018,
      410.177893
    ],
    "en": [
      "so we just have to configure the encapsulation"
    ],
    "ru": [
      "поэтому нам просто нужно настроить инкапсуляцию"
    ]
  },
  {
    "time": [
      410.177893,
      411.874664
    ],
    "en": [
      "and authentication mode"
    ],
    "ru": [
      "и режим аутентификации"
    ]
  },
  {
    "time": [
      411.874664,
      414.332455
    ],
    "en": [
      "coffee/tea"
    ],
    "ru": [
      "кофе чай"
    ]
  },
  {
    "time": [
      414.332455,
      417.352726
    ],
    "en": [
      "interface s 0 0 0"
    ],
    "ru": [
      "интерфейс s 0 0 0"
    ]
  },
  {
    "time": [
      417.352726,
      419.333747
    ],
    "en": [
      "shutdown"
    ],
    "ru": [
      "неисправность"
    ]
  },
  {
    "time": [
      419.333747,
      421.959767
    ],
    "en": [
      "encapsulation PPP"
    ],
    "ru": [
      "инкапсуляция PPP"
    ]
  },
  {
    "time": [
      421.959767,
      425.750517
    ],
    "en": [
      "PPP authentication chap"
    ],
    "ru": [
      "Глава об аутентификации PPP"
    ]
  },
  {
    "time": [
      425.750517,
      427.725121
    ],
    "en": [
      "no shutdown"
    ],
    "ru": [
      "нет выключения"
    ]
  },
  {
    "time": [
      427.725121,
      433.709621
    ],
    "en": [
      "okay let's wait 10 seconds or so for the BGP adjacency to come up"
    ],
    "ru": [
      "хорошо, подождем 10 секунд или около того, пока не появится смежность BGP"
    ]
  },
  {
    "time": [
      433.709621,
      445.717871
    ],
    "en": [
      "okay now let's check the route table"
    ],
    "ru": [
      "хорошо, теперь давайте проверим таблицу маршрутов"
    ]
  },
  {
    "time": [
      445.717871,
      450.693079
    ],
    "en": [
      "do show IP route"
    ],
    "ru": [
      "показывать IP-маршрут"
    ]
  },
  {
    "time": [
      450.693079,
      456.520433
    ],
    "en": [
      "okay now we have all of those BGP routes"
    ],
    "ru": [
      "хорошо, теперь у нас есть все эти маршруты BGP"
    ]
  },
  {
    "time": [
      456.520433,
      460.39962
    ],
    "en": [
      "let's try a ping from PC for two PC one"
    ],
    "ru": [
      "попробуем пинг с ПК на два ПК один"
    ]
  },
  {
    "time": [
      460.39962,
      465.992849
    ],
    "en": [
      "ping 192.168.1.1 hundred"
    ],
    "ru": [
      "пинг 192.168.1.1 сотня"
    ]
  },
  {
    "time": [
      465.992849,
      476.402411
    ],
    "en": [
      "okay the ping works"
    ],
    "ru": [
      "хорошо, пинг работает"
    ]
  },
  {
    "time": [
      476.402411,
      478.676432
    ],
    "en": [
      "we've solved the network issues"
    ],
    "ru": [
      "мы решили проблемы с сетью"
    ]
  },
  {
    "time": [
      478.676432,
      480.423161
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
      480.423161,
      482.874932
    ],
    "en": [
      "thank you for watching"
    ],
    "ru": [
      "Спасибо за просмотр"
    ]
  },
  {
    "time": [
      482.874932,
      486.122785
    ],
    "en": [
      "I hope this lab and video have been helpful for you"
    ],
    "ru": [
      "Надеюсь, эта лабораторная работа и видео были для вас полезны"
    ]
  },
  {
    "time": [
      486.122785,
      490.32616
    ],
    "en": [
      "this is the final video in my CCNA lab series"
    ],
    "ru": [
      "это последнее видео в моей лабораторной серии CCNA"
    ]
  },
  {
    "time": [
      490.32616,
      492.128243
    ],
    "en": [
      "thank you all for your support"
    ],
    "ru": [
      "спасибо всем за вашу поддержку"
    ]
  },
  {
    "time": [
      492.128243,
      497.111743
    ],
    "en": [
      "as of now I have over 1200 subscribers"
    ],
    "ru": [
      "на данный момент у меня более 1200 подписчиков"
    ]
  },
  {
    "time": [
      497.111743,
      497.984118
    ],
    "en": [
      "which is amazing"
    ],
    "ru": [
      "что потрясающе"
    ]
  },
  {
    "time": [
      497.984118,
      499.620368
    ],
    "en": [
      "and the channel keeps growing"
    ],
    "ru": [
      "и канал продолжает расти"
    ]
  },
  {
    "time": [
      499.620368,
      502.469826
    ],
    "en": [
      "I have another project planned"
    ],
    "ru": [
      "У меня запланирован еще один проект"
    ]
  },
  {
    "time": [
      502.469826,
      505.626659
    ],
    "en": [
      "and I will make a video to let you know about it soon"
    ],
    "ru": [
      "и я сделаю видео, чтобы вы узнали об этом в ближайшее время"
    ]
  },
  {
    "time": [
      505.626659,
      507.677367
    ],
    "en": [
      "please subscribe for updates on that"
    ],
    "ru": [
      "пожалуйста, подпишитесь на обновления по этому поводу"
    ]
  },
  {
    "time": [
      507.677367,
      508.940325
    ],
    "en": [
      "and for future content"
    ],
    "ru": [
      "и для будущего контента"
    ]
  },
  {
    "time": [
      508.940325,
      515.924262
    ],
    "en": [
      "if you want to support my channel I accept cryptocurrency donations via the addresses in the description"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, я принимаю пожертвования в криптовалюте по адресам в описании"
    ]
  },
  {
    "time": [
      515.924262,
      524.692116
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
      524.692116,
      524.692116
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
      524.692116,
      524.692116
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
      524.692116,
      524.692116
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]