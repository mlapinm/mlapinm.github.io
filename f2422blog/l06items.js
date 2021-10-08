let objs = [
  {
    "time": [
      0.0,
      4.55934
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
      4.55934,
      8.883745
    ],
    "en": [
      "you can download the lab file from the link in the description"
    ],
    "ru": [
      "скачать лабораторный файл можно по ссылке в описании"
    ]
  },
  {
    "time": [
      8.883745,
      15.59975
    ],
    "en": [
      "in this lab we will be working with two switches switch 1 and switch two"
    ],
    "ru": [
      "в этой лабораторной работе мы будем работать с двумя переключателями, переключателем 1 и переключателем 2."
    ]
  },
  {
    "time": [
      15.59975,
      20.795037
    ],
    "en": [
      "and three pcs pc-1 pc2 and pc 3"
    ],
    "ru": [
      "и три ПК pc-1 pc2 и pc 3"
    ]
  },
  {
    "time": [
      20.795037,
      26.536391
    ],
    "en": [
      "you may notice that the icons of these switches are different than in the previous lab"
    ],
    "ru": [
      "вы можете заметить, что значки этих переключателей отличаются от значков в предыдущей лабораторной работе."
    ]
  },
  {
    "time": [
      26.536391,
      34.089201
    ],
    "en": [
      "these are called multi-layer switches because they can operate at both layer 2 and layer 3 of the OSI model"
    ],
    "ru": [
      "они называются многоуровневыми коммутаторами, потому что они могут работать как на уровне 2, так и на уровне 3 модели OSI."
    ]
  },
  {
    "time": [
      34.089201,
      38.46917
    ],
    "en": [
      "but we won't actually be using their multi-layer capabilities in this lab"
    ],
    "ru": [
      "но на самом деле мы не будем использовать их многоуровневые возможности в этой лабораторной работе."
    ]
  },
  {
    "time": [
      38.46917,
      46.90673
    ],
    "en": [
      "I selected this switch model for another reason which will differentiate this lab from the previous ones slightly in terms of configuration"
    ],
    "ru": [
      "Я выбрал эту модель коммутатора по другой причине, которая немного отличает эту лабораторию от предыдущих с точки зрения конфигурации."
    ]
  },
  {
    "time": [
      46.90673,
      50.847989
    ],
    "en": [
      "however the basic tasks of the lab are the same"
    ],
    "ru": [
      "однако основные задачи лаборатории те же"
    ]
  },
  {
    "time": [
      50.847989,
      58.485622
    ],
    "en": [
      "we will use VLANs to separate these pcs at layer 2 even though they are in the same layer 3 subnet"
    ],
    "ru": [
      "мы будем использовать VLAN для разделения этих компьютеров на уровне 2, даже если они находятся в одной подсети уровня 3"
    ]
  },
  {
    "time": [
      58.485622,
      67.200407
    ],
    "en": [
      "try to complete the lab on your own first then continue watching this video if you have trouble or watch it after to check your solution"
    ],
    "ru": [
      "попробуйте сначала пройти лабораторную работу самостоятельно, а затем продолжайте смотреть это видео, если у вас возникнут проблемы, или просмотрите его после, чтобы проверить свое решение."
    ]
  },
  {
    "time": [
      67.200407,
      74.748145
    ],
    "en": [
      "step one asks us to pin between the computers to test connectivity"
    ],
    "ru": [
      "на первом шаге нас просят закрепить между компьютерами для проверки возможности подключения"
    ]
  },
  {
    "time": [
      74.748145,
      77.018595
    ],
    "en": [
      "these pings should all succeed"
    ],
    "ru": [
      "все эти пинги должны быть успешными"
    ]
  },
  {
    "time": [
      77.018595,
      80.750219
    ],
    "en": [
      "let's just ping from pc1"
    ],
    "ru": [
      "давай просто пингуем с пк1"
    ]
  },
  {
    "time": [
      80.750219,
      84.40899
    ],
    "en": [
      "first I'll ping PC two"
    ],
    "ru": [
      "сначала я пингую комп два"
    ]
  },
  {
    "time": [
      84.40899,
      88.067075
    ],
    "en": [
      "ping 10.0.0.2"
    ],
    "ru": [
      "пинг 10.0.0.2"
    ]
  },
  {
    "time": [
      88.067075,
      90.140269
    ],
    "en": [
      "the ping works"
    ],
    "ru": [
      "пинг работает"
    ]
  },
  {
    "time": [
      90.140269,
      93.193188
    ],
    "en": [
      "next out ping pc3"
    ],
    "ru": [
      "следующий пинг pc3"
    ]
  },
  {
    "time": [
      93.193188,
      95.850549
    ],
    "en": [
      "ping 10.0.0.3"
    ],
    "ru": [
      "пинг 10.0.0.3"
    ]
  },
  {
    "time": [
      95.850549,
      98.711574
    ],
    "en": [
      "it works as well"
    ],
    "ru": [
      "это тоже работает"
    ]
  },
  {
    "time": [
      98.711574,
      106.87117
    ],
    "en": [
      "step two is to assign PC to and PC three to VLAN two"
    ],
    "ru": [
      "Шаг второй - назначить ПК и третий ПК для VLAN 2."
    ]
  },
  {
    "time": [
      106.87117,
      110.251923
    ],
    "en": [
      "again this is done by configuring the switch interfaces"
    ],
    "ru": [
      "опять же, это делается путем настройки интерфейсов коммутатора."
    ]
  },
  {
    "time": [
      110.251923,
      113.105264
    ],
    "en": [
      "let's do switch one first"
    ],
    "ru": [
      "давай сначала переключим один"
    ]
  },
  {
    "time": [
      113.105264,
      121.208965
    ],
    "en": [
      "enable conf t pc 2 is connected to Fast Ethernet 0 3"
    ],
    "ru": [
      "enable conf t ПК 2 подключен к Fast Ethernet 0 3"
    ]
  },
  {
    "time": [
      121.208965,
      124.902216
    ],
    "en": [
      "so interface F 0 3"
    ],
    "ru": [
      "так интерфейс F 0 3"
    ]
  },
  {
    "time": [
      124.902216,
      130.497044
    ],
    "en": [
      "switch port mode access switch port access VLAN 2"
    ],
    "ru": [
      "режим порта коммутатора доступ к порту коммутатора VLAN 2"
    ]
  },
  {
    "time": [
      130.497044,
      132.950304
    ],
    "en": [
      "that's it for PC2"
    ],
    "ru": [
      "это все для ПК2"
    ]
  },
  {
    "time": [
      132.950304,
      135.489322
    ],
    "en": [
      "now let's do the same on switch 2"
    ],
    "ru": [
      "Теперь сделаем то же самое на переключателе 2"
    ]
  },
  {
    "time": [
      135.489322,
      140.885298
    ],
    "en": [
      "enable conf t"
    ],
    "ru": [
      "включить конф т"
    ]
  },
  {
    "time": [
      140.885298,
      148.473154
    ],
    "en": [
      "interface F 0 2 switch port mode access switch port access VLAN 2"
    ],
    "ru": [
      "интерфейс F 0 2 порт коммутатора режим доступа порт коммутатора доступ VLAN 2"
    ]
  },
  {
    "time": [
      148.473154,
      151.017034
    ],
    "en": [
      "ok step 2 is complete"
    ],
    "ru": [
      "хорошо, шаг 2 завершен"
    ]
  },
  {
    "time": [
      151.017034,
      159.81111
    ],
    "en": [
      "step three is to create a trunk connection between switch 1 and switch 2"
    ],
    "ru": [
      "Шаг третий - создать магистральное соединение между коммутатором 1 и коммутатором 2."
    ]
  },
  {
    "time": [
      159.81111,
      165.28844
    ],
    "en": [
      "remember that by default switch ports are access ports in the native VLAN"
    ],
    "ru": [
      "помните, что по умолчанию порты коммутатора являются портами доступа в собственной VLAN"
    ]
  },
  {
    "time": [
      165.28844,
      171.072763
    ],
    "en": [
      "VLAN 1 in order for these switches to carry traffic from VLAN 2 as well"
    ],
    "ru": [
      "VLAN 1, чтобы эти коммутаторы могли передавать трафик из VLAN 2."
    ]
  },
  {
    "time": [
      171.072763,
      174.728609
    ],
    "en": [
      "so that PC 2 and PC 3 can communicate with each other"
    ],
    "ru": [
      "чтобы ПК 2 и ПК 3 могли общаться друг с другом"
    ]
  },
  {
    "time": [
      174.728609,
      176.56515
    ],
    "en": [
      "we need to create a trunk"
    ],
    "ru": [
      "нам нужно создать ствол"
    ]
  },
  {
    "time": [
      176.56515,
      178.840799
    ],
    "en": [
      "let's do switch 1 first"
    ],
    "ru": [
      "давай сначала сделаем переключатель 1"
    ]
  },
  {
    "time": [
      178.840799,
      182.544391
    ],
    "en": [
      "interface f0 1"
    ],
    "ru": [
      "интерфейс f0 1"
    ]
  },
  {
    "time": [
      182.544391,
      185.346055
    ],
    "en": [
      "switch port mode trunk"
    ],
    "ru": [
      "переключатель режима порта магистраль"
    ]
  },
  {
    "time": [
      185.346055,
      186.890595
    ],
    "en": [
      "but it doesn't work"
    ],
    "ru": [
      "но это не работает"
    ]
  },
  {
    "time": [
      186.890595,
      194.225705
    ],
    "en": [
      "command rejected an interface whose trunk encapsulation is auto cannot be configured to trunk mode"
    ],
    "ru": [
      "команда отклонила интерфейс, инкапсуляция магистрали которого установлена ​​автоматически, не может быть настроен в режим магистрали"
    ]
  },
  {
    "time": [
      194.225705,
      196.736821
    ],
    "en": [
      "this didn't happen last lab"
    ],
    "ru": [
      "этого не произошло в последней лаборатории"
    ]
  },
  {
    "time": [
      196.736821,
      199.70376
    ],
    "en": [
      "and actually this is why I chose this switch model"
    ],
    "ru": [
      "и собственно поэтому я выбрал эту модель переключателя"
    ]
  },
  {
    "time": [
      199.70376,
      206.496652
    ],
    "en": [
      "when you make a trunk link packets are encapsulated to label them as part of a particular VLAN"
    ],
    "ru": [
      "при создании магистрального канала пакеты инкапсулируются, чтобы пометить их как часть определенной VLAN"
    ]
  },
  {
    "time": [
      206.496652,
      211.483395
    ],
    "en": [
      "on the switches in the previous lab only one type of encapsulation is available"
    ],
    "ru": [
      "на коммутаторах в предыдущей лабораторной работе доступен только один тип инкапсуляции"
    ]
  },
  {
    "time": [
      211.483395,
      215.530344
    ],
    "en": [
      "so there is no need to configure which type of encapsulation to use"
    ],
    "ru": [
      "поэтому нет необходимости настраивать, какой тип инкапсуляции использовать"
    ]
  },
  {
    "time": [
      215.530344,
      219.607772
    ],
    "en": [
      "however some models support two types of encapsulation"
    ],
    "ru": [
      "однако некоторые модели поддерживают два типа инкапсуляции"
    ]
  },
  {
    "time": [
      219.607772,
      223.577219
    ],
    "en": [
      "one known as ISL which is Cisco proprietary"
    ],
    "ru": [
      "один, известный как ISL, который является собственностью Cisco"
    ]
  },
  {
    "time": [
      223.577219,
      228.288559
    ],
    "en": [
      "and one known as 802.1 Q or dot1q"
    ],
    "ru": [
      "и один, известный как 802.1 Q или dot1q"
    ]
  },
  {
    "time": [
      228.288559,
      229.669872
    ],
    "en": [
      "which is an industry standard"
    ],
    "ru": [
      "что является отраслевым стандартом"
    ]
  },
  {
    "time": [
      229.669872,
      234.516813
    ],
    "en": [
      "dot1q is by far the most common encapsulation type"
    ],
    "ru": [
      "dot1q на сегодняшний день является наиболее распространенным типом инкапсуляции"
    ]
  },
  {
    "time": [
      234.516813,
      237.650697
    ],
    "en": [
      "and lets configure this interface to use dot1q"
    ],
    "ru": [
      "и давайте настроим этот интерфейс для использования dot1q"
    ]
  },
  {
    "time": [
      237.650697,
      241.416636
    ],
    "en": [
      "since we need to configure the encapsulation type to create a trunk"
    ],
    "ru": [
      "поскольку нам нужно настроить тип инкапсуляции для создания магистрали"
    ]
  },
  {
    "time": [
      241.416636,
      244.17984
    ],
    "en": [
      "we do that with this command"
    ],
    "ru": [
      "мы делаем это с помощью этой команды"
    ]
  },
  {
    "time": [
      244.17984,
      249.6192
    ],
    "en": [
      "switch port trunk encapsulation dot1q"
    ],
    "ru": [
      "инкапсуляция соединительной линии порта коммутатора dot1q"
    ]
  },
  {
    "time": [
      249.6192,
      252.557067
    ],
    "en": [
      "now we can make the trunk link"
    ],
    "ru": [
      "теперь мы можем сделать магистраль"
    ]
  },
  {
    "time": [
      252.557067,
      254.98895
    ],
    "en": [
      "switch port mode trunk"
    ],
    "ru": [
      "переключатель режима порта магистраль"
    ]
  },
  {
    "time": [
      254.98895,
      258.766149
    ],
    "en": [
      "now let's do the same commands on switch2"
    ],
    "ru": [
      "теперь давайте сделаем те же команды на switch2"
    ]
  },
  {
    "time": [
      258.766149,
      267.555151
    ],
    "en": [
      "interface f01 switch port trunk encapsulation dot1q"
    ],
    "ru": [
      "интерфейс f01 коммутатор порт магистральная инкапсуляция dot1q"
    ]
  },
  {
    "time": [
      267.555151,
      269.761237
    ],
    "en": [
      "switch port mode trunk"
    ],
    "ru": [
      "переключатель режима порта магистраль"
    ]
  },
  {
    "time": [
      269.761237,
      272.344719
    ],
    "en": [
      "that's all for step 3"
    ],
    "ru": [
      "это все для шага 3"
    ]
  },
  {
    "time": [
      272.344719,
      279.438259
    ],
    "en": [
      "step four is to once again ping to test connectivity"
    ],
    "ru": [
      "Шаг четвертый - еще раз пинговать, чтобы проверить подключение"
    ]
  },
  {
    "time": [
      279.438259,
      282.277329
    ],
    "en": [
      "if everything is configured correctly"
    ],
    "ru": [
      "если все настроено правильно"
    ]
  },
  {
    "time": [
      282.277329,
      285.790465
    ],
    "en": [
      "PC - and PC 3 should be able to pin each other"
    ],
    "ru": [
      "ПК - и ПК 3 должны иметь возможность связывать друг друга"
    ]
  },
  {
    "time": [
      285.790465,
      288.173147
    ],
    "en": [
      "because they are both in VLAN 2"
    ],
    "ru": [
      "потому что они оба находятся в VLAN 2"
    ]
  },
  {
    "time": [
      288.173147,
      290.802586
    ],
    "en": [
      "and we have a trunk connection between the two switches"
    ],
    "ru": [
      "и у нас есть магистральное соединение между двумя коммутаторами"
    ]
  },
  {
    "time": [
      290.802586,
      294.716656
    ],
    "en": [
      "they should not be able to ping PC one or vice versa"
    ],
    "ru": [
      "они не должны иметь возможность пинговать ПК один или наоборот"
    ]
  },
  {
    "time": [
      294.716656,
      298.613961
    ],
    "en": [
      "because PC one is still in the native VLAN VLAN one"
    ],
    "ru": [
      "потому что ПК один все еще находится в собственной VLAN VLAN one"
    ]
  },
  {
    "time": [
      298.613961,
      302.427273
    ],
    "en": [
      "I'll use PC one first"
    ],
    "ru": [
      "Я сначала воспользуюсь ПК"
    ]
  },
  {
    "time": [
      302.427273,
      306.359589
    ],
    "en": [
      "ping 10.0.0.2"
    ],
    "ru": [
      "пинг 10.0.0.2"
    ]
  },
  {
    "time": [
      306.359589,
      309.207317
    ],
    "en": [
      "doesn't work"
    ],
    "ru": [
      "не работает"
    ]
  },
  {
    "time": [
      309.207317,
      314.216827
    ],
    "en": [
      "next ping 10.0.0.3"
    ],
    "ru": [
      "следующий пинг 10.0.0.3"
    ]
  },
  {
    "time": [
      314.216827,
      316.795943
    ],
    "en": [
      "doesn't work as expected"
    ],
    "ru": [
      "не работает как ожидалось"
    ]
  },
  {
    "time": [
      316.795943,
      321.746979
    ],
    "en": [
      "now let's just try a ping between PC 2 and PC three"
    ],
    "ru": [
      "теперь давайте просто попробуем пинг между ПК 2 и ПК 3"
    ]
  },
  {
    "time": [
      321.746979,
      324.311338
    ],
    "en": [
      "I'll go on PC 2"
    ],
    "ru": [
      "Я пойду на ПК 2"
    ]
  },
  {
    "time": [
      324.311338,
      329.38028
    ],
    "en": [
      "ping 10.0.0.3"
    ],
    "ru": [
      "пинг 10.0.0.3"
    ]
  },
  {
    "time": [
      329.38028,
      331.747561
    ],
    "en": [
      "the ping works as expected"
    ],
    "ru": [
      "пинг работает как ожидалось"
    ]
  },
  {
    "time": [
      331.747561,
      333.679999
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
      333.679999,
      341.536251
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
      341.536251,
      346.408613
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
      346.408613,
      351.558455
    ],
    "en": [
      "if you have requests for any specific labs let me know in the comment section"
    ],
    "ru": [
      "если у вас есть запросы по каким-либо конкретным лабораториям, дайте мне знать в разделе комментариев"
    ]
  },
  {
    "time": [
      351.558455,
      357.464676
    ],
    "en": [
      "if you want to support my channel I accept Bitcoin donations via the address in the description"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, я принимаю пожертвования в биткойнах по адресу в описании"
    ]
  },
  {
    "time": [
      357.464676,
      366.394568
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
      366.394568,
      366.394568
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
      366.394568,
      366.394568
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
      366.394568,
      366.394568
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]