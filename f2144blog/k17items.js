let objs = [
  {
    "time": [
      0.0,
      4.699289
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
      4.699289,
      8.152395
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
      8.152395,
      14.009599
    ],
    "en": [
      "in this lab we will take a look at port security"
    ],
    "ru": [
      "в этой лабораторной работе мы рассмотрим безопасность портов."
    ]
  },
  {
    "time": [
      14.009599,
      23.040544
    ],
    "en": [
      "port security is a security function which can be configured on switch interfaces and controls which MAC addresses are allowed on which interfaces"
    ],
    "ru": [
      "безопасность портов - это функция безопасности, которая может быть настроена на интерфейсах коммутатора и контролирует, какие MAC-адреса разрешены на каких интерфейсах."
    ]
  },
  {
    "time": [
      23.040544,
      32.017483
    ],
    "en": [
      "MAC addresses are 48 bit addresses which are tied to the physical device such as a network interface card on a computer"
    ],
    "ru": [
      "MAC-адреса - это 48-битные адреса, привязанные к физическому устройству, например сетевой карте на компьютере."
    ]
  },
  {
    "time": [
      32.017483,
      39.973917
    ],
    "en": [
      "port security allows us to ensure that only the intended devices are allowed to communicate over a given switchboard"
    ],
    "ru": [
      "безопасность портов позволяет нам гарантировать, что только предполагаемым устройствам разрешено связываться через данный коммутатор"
    ]
  },
  {
    "time": [
      39.973917,
      44.447202
    ],
    "en": [
      "we will do a few labs to practice port security"
    ],
    "ru": [
      "мы проведем несколько лабораторных работ, чтобы попрактиковаться в безопасности портов"
    ]
  },
  {
    "time": [
      44.447202,
      56.580272
    ],
    "en": [
      "in this first lab let's look at and configure some basic functions of port security on two switches switch 1 and switch 2 53.28906 which each have one pc connected to them"
    ],
    "ru": [
      "В этой первой лабораторной работе давайте рассмотрим и настроим некоторые основные функции безопасности портов на двух коммутаторах, коммутаторе 1 и коммутаторе 2 53.28906, к каждому из которых подключен один компьютер."
    ]
  },
  {
    "time": [
      56.580272,
      65.655241
    ],
    "en": [
      "try to complete the lab yourself first then continue watching this video if you have trouble or watch it after to check your solution"
    ],
    "ru": [
      "попробуйте сначала пройти лабораторную работу самостоятельно, а затем продолжайте смотреть это видео, если у вас возникнут проблемы, или просмотрите его после, чтобы проверить свое решение."
    ]
  },
  {
    "time": [
      65.655241,
      75.967893
    ],
    "en": [
      "step1 tells us to find the MAC address of switch 2 by using the CLI of switch one and the reverse"
    ],
    "ru": [
      "step1 говорит нам найти MAC-адрес коммутатора 2 с помощью интерфейса командной строки первого коммутатора и наоборот."
    ]
  },
  {
    "time": [
      75.967893,
      78.431218
    ],
    "en": [
      "so let's go on switch one first"
    ],
    "ru": [
      "так что давайте сначала переключим один"
    ]
  },
  {
    "time": [
      78.431218,
      84.380305
    ],
    "en": [
      "enable use the command show MAC address - table"
    ],
    "ru": [
      "включить используйте команду show MAC address - table"
    ]
  },
  {
    "time": [
      84.380305,
      87.886113
    ],
    "en": [
      "to display the list of known MAC addresses on the switch"
    ],
    "ru": [
      "для отображения списка известных MAC-адресов на коммутаторе"
    ]
  },
  {
    "time": [
      87.886113,
      91.045349
    ],
    "en": [
      "switch one knows one MAC address"
    ],
    "ru": [
      "коммутатор знает один MAC-адрес"
    ]
  },
  {
    "time": [
      91.045349,
      96.694927
    ],
    "en": [
      "it's type is dynamic meaning that we didn't manually configure this MAC address"
    ],
    "ru": [
      "его тип - динамический, что означает, что мы не настраивали этот MAC-адрес вручную."
    ]
  },
  {
    "time": [
      96.694927,
      101.493692
    ],
    "en": [
      "it was learned by receiving a packet on the port displayed here fastethernet 0/1"
    ],
    "ru": [
      "это было изучено путем получения пакета на порт, отображаемый здесь fastethernet 0/1"
    ]
  },
  {
    "time": [
      101.493692,
      104.168739
    ],
    "en": [
      "that's the MAC address of switch 2"
    ],
    "ru": [
      "это MAC-адрес коммутатора 2"
    ]
  },
  {
    "time": [
      104.168739,
      106.370292
    ],
    "en": [
      "now let's go on switch 2"
    ],
    "ru": [
      "теперь давайте перейдем к переключателю 2"
    ]
  },
  {
    "time": [
      106.370292,
      111.772827
    ],
    "en": [
      "enable show MAC address table"
    ],
    "ru": [
      "включить показывать таблицу MAC-адресов"
    ]
  },
  {
    "time": [
      111.772827,
      115.436638
    ],
    "en": [
      "this here is the MAC address of switch 1"
    ],
    "ru": [
      "вот MAC-адрес коммутатора 1"
    ]
  },
  {
    "time": [
      115.436638,
      119.407023
    ],
    "en": [
      "learned dynamically on the fastethernet 0/1 port"
    ],
    "ru": [
      "динамически обучается на порту fastethernet 0/1"
    ]
  },
  {
    "time": [
      119.407023,
      124.908151
    ],
    "en": [
      "step 2 asks us why the MAC addresses of pc1 & pc2"
    ],
    "ru": [
      "шаг 2 спрашивает нас, почему MAC-адреса pc1 и pc2"
    ]
  },
  {
    "time": [
      124.908151,
      129.945294
    ],
    "en": [
      "don't appear in the MAC address table even though switch 1 and switch to appear in each other's tables"
    ],
    "ru": [
      "не отображаются в таблице MAC-адресов, даже если переключатель 1 и переключатель отображаются в таблицах друг друга"
    ]
  },
  {
    "time": [
      129.945294,
      140.832676
    ],
    "en": [
      "if you have studied spanning tree protocol already 134.28383 you know that switches send each other BPD use bridge protocol data units at regular intervals"
    ],
    "ru": [
      "Если вы уже изучили протокол связующего дерева 134.28383, вы знаете, что коммутаторы отправляют друг другу BPD, используйте блоки данных протокола моста через равные промежутки времени"
    ]
  },
  {
    "time": [
      140.832676,
      145.726325
    ],
    "en": [
      "the switches learned each other's MAC addresses via these bpdu packets"
    ],
    "ru": [
      "коммутаторы узнали MAC-адреса друг друга через эти пакеты bpdu"
    ]
  },
  {
    "time": [
      145.726325,
      150.575194
    ],
    "en": [
      "however no traffic has passed from the PCs to the switches yet"
    ],
    "ru": [
      "однако трафик от ПК к коммутаторам еще не прошел"
    ]
  },
  {
    "time": [
      150.575194,
      157.617874
    ],
    "en": [
      "so they are unaware of the PCs MAC addresses at this point"
    ],
    "ru": [
      "поэтому они не знают MAC-адреса ПК на данный момент"
    ]
  },
  {
    "time": [
      157.617874,
      163.540997
    ],
    "en": [
      "step3 tells us to ping between the PCs and then check the MAC address tables of the switches"
    ],
    "ru": [
      "Шаг 3 говорит нам выполнить эхо-запрос между ПК, а затем проверить таблицы MAC-адресов коммутаторов."
    ]
  },
  {
    "time": [
      163.540997,
      173.224295
    ],
    "en": [
      "if we ping between the PCs switch one should have one dynamically learned MAC address on his Fast Ethernet 0 2 port that of PC 1"
    ],
    "ru": [
      "если мы пингуем между коммутаторами ПК, у него должен быть один динамически изученный MAC-адрес на его Fast Ethernet 0 2 порт, что и на ПК 1"
    ]
  },
  {
    "time": [
      173.224295,
      180.232471
    ],
    "en": [
      "and to dynamically learned MAC addresses on his fastethernet 0/1 port 177.64034 those of switch 2 and PC 2"
    ],
    "ru": [
      "и к динамически изученным MAC-адресам на его порту fastethernet 0/1 177.64034 MAC-адреса коммутатора 2 и ПК 2"
    ]
  },
  {
    "time": [
      180.232471,
      195.063391
    ],
    "en": [
      "likewise switch 2 should have one dynamically learned MAC address on his Fast Ethernet 0 to port that of PC 2 and to dynamically learned MAC addresses on its fastethernet 0/1 port 192.59796 those of switch one and pc 1 so I'll go on PC 1"
    ],
    "ru": [
      "аналогично коммутатор 2 должен иметь один динамически изученный MAC-адрес на его Fast Ethernet 0 для порта ПК 2 и для динамически изученных MAC-адресов на его порту fastethernet 0/1 192.59796 адресов коммутатора 1 и ПК 1, поэтому я перейду к ПК 1"
    ]
  },
  {
    "time": [
      195.063391,
      206.507604
    ],
    "en": [
      "and ping PC 2 198.70861 ping 192.168.1.12"
    ],
    "ru": [
      "и ping PC 2 198.70861 ping 192.168.1.12"
    ]
  },
  {
    "time": [
      206.507604,
      210.962676
    ],
    "en": [
      "there we go 208.4092 now let's go on switch 1"
    ],
    "ru": [
      "вот и 208.4092, теперь перейдем к переключателю 1"
    ]
  },
  {
    "time": [
      210.962676,
      215.263024
    ],
    "en": [
      "show MAC address table"
    ],
    "ru": [
      "показать таблицу MAC-адресов"
    ]
  },
  {
    "time": [
      215.263024,
      218.586529
    ],
    "en": [
      "here is the MAC address of switch 2 we saw before"
    ],
    "ru": [
      "вот MAC-адрес коммутатора 2, который мы видели раньше"
    ]
  },
  {
    "time": [
      218.586529,
      224.579024
    ],
    "en": [
      "this other mac address on fastethernet 0/1 must be PC twos"
    ],
    "ru": [
      "этот другой MAC-адрес в fastethernet 0/1 должен быть двойным ПК"
    ]
  },
  {
    "time": [
      224.579024,
      228.828553
    ],
    "en": [
      "and the MAC address on Fast Ethernet 0 2 must be PC ones"
    ],
    "ru": [
      "и MAC-адрес в Fast Ethernet 0 2 должен быть компьютерным"
    ]
  },
  {
    "time": [
      228.828553,
      232.508461
    ],
    "en": [
      "let's check on switch 2 also"
    ],
    "ru": [
      "давайте также проверим переключатель 2"
    ]
  },
  {
    "time": [
      232.508461,
      237.095771
    ],
    "en": [
      "show MAC address table"
    ],
    "ru": [
      "показать таблицу MAC-адресов"
    ]
  },
  {
    "time": [
      237.095771,
      240.169557
    ],
    "en": [
      "here switch ones MAC address"
    ],
    "ru": [
      "здесь переключите один MAC-адрес"
    ]
  },
  {
    "time": [
      240.169557,
      242.472752
    ],
    "en": [
      "this one is also on Fast Ethernet 0 1"
    ],
    "ru": [
      "этот также находится в Fast Ethernet 0 1"
    ]
  },
  {
    "time": [
      242.472752,
      250.006647
    ],
    "en": [
      "so it must be PC ones 244.94482 and this MAC address went on Fast Ethernet 0 2 must be PC twos"
    ],
    "ru": [
      "так что это должны быть ПК 244.94482, и этот MAC-адрес перешел в Fast Ethernet 0 2 должны быть ПК двойки"
    ]
  },
  {
    "time": [
      250.006647,
      257.555683
    ],
    "en": [
      "step four is to enable port security on the switch interfaces connected to PCs"
    ],
    "ru": [
      "Шаг четвертый - включить безопасность портов на интерфейсах коммутатора, подключенных к ПК."
    ]
  },
  {
    "time": [
      257.555683,
      260.565966
    ],
    "en": [
      "so fastethernet 0 2 of each switch"
    ],
    "ru": [
      "так fastethernet 0 2 каждого коммутатора"
    ]
  },
  {
    "time": [
      260.565966,
      269.669942
    ],
    "en": [
      "in this lab we will configure the switches so that switch 1 only accepts traffic from PC 1 on its Fast Ethernet 0 2 interface"
    ],
    "ru": [
      "В этой лабораторной работе мы настроим коммутаторы так, чтобы коммутатор 1 принимал трафик только от ПК 1 на своем интерфейсе Fast Ethernet 0 2."
    ]
  },
  {
    "time": [
      269.669942,
      274.372972
    ],
    "en": [
      "and switch 2 only accepts traffic from PC 2 on its Fast Ethernet 0 2 interface"
    ],
    "ru": [
      "и коммутатор 2 принимает трафик только от ПК 2 на своем интерфейсе Fast Ethernet 0 2."
    ]
  },
  {
    "time": [
      274.372972,
      279.143081
    ],
    "en": [
      "first you must enable it at the interface level"
    ],
    "ru": [
      "сначала вы должны включить его на уровне интерфейса"
    ]
  },
  {
    "time": [
      279.143081,
      281.146321
    ],
    "en": [
      "let's go on switch 1 again"
    ],
    "ru": [
      "давай снова включим выключатель 1"
    ]
  },
  {
    "time": [
      281.146321,
      286.681028
    ],
    "en": [
      "conf t interface f02"
    ],
    "ru": [
      "conf t interface f02"
    ]
  },
  {
    "time": [
      286.681028,
      292.514561
    ],
    "en": [
      "you can enable port security with the command switch port port security"
    ],
    "ru": [
      "вы можете включить безопасность порта с помощью команды switch port port security"
    ]
  },
  {
    "time": [
      292.514561,
      298.154059
    ],
    "en": [
      "but command rejected Fast Ethernet 0 2 is a dynamic port"
    ],
    "ru": [
      "но команда отклонена Fast Ethernet 0 2 - динамический порт"
    ]
  },
  {
    "time": [
      298.154059,
      300.076423
    ],
    "en": [
      "what does this mean"
    ],
    "ru": [
      "Что это значит"
    ]
  },
  {
    "time": [
      300.076423,
      304.979246
    ],
    "en": [
      "well one rule of port security is that it can't be enabled on a trunk port"
    ],
    "ru": [
      "хорошо, одно правило безопасности порта заключается в том, что его нельзя включить на магистральном порту"
    ]
  },
  {
    "time": [
      304.979246,
      307.715738
    ],
    "en": [
      "it can only be enabled on an access port"
    ],
    "ru": [
      "его можно включить только на порте доступа"
    ]
  },
  {
    "time": [
      307.715738,
      312.249528
    ],
    "en": [
      "although this switch port is currently functioning as an access port"
    ],
    "ru": [
      "хотя этот порт коммутатора в настоящее время функционирует как порт доступа"
    ]
  },
  {
    "time": [
      312.249528,
      318.593697
    ],
    "en": [
      "it's actually in dynamic mode 314.07877 meaning that if it were to be connected to a switch port configured as a trunk"
    ],
    "ru": [
      "на самом деле он находится в динамическом режиме 314.07877, что означает, что если бы он был подключен к порту коммутатора, настроенному как магистраль"
    ]
  },
  {
    "time": [
      318.593697,
      320.614636
    ],
    "en": [
      "it would start functioning as a trunk"
    ],
    "ru": [
      "он начал бы функционировать как ствол"
    ]
  },
  {
    "time": [
      320.614636,
      327.059255
    ],
    "en": [
      "the switch board has to be explicitly configured as an access port if you want to enable port security on it"
    ],
    "ru": [
      "плата коммутатора должна быть явно настроена как порт доступа, если вы хотите включить на ней безопасность порта."
    ]
  },
  {
    "time": [
      327.059255,
      330.479739
    ],
    "en": [
      "so switch port mode access"
    ],
    "ru": [
      "так что переключить режим порта доступа"
    ]
  },
  {
    "time": [
      330.479739,
      333.329003
    ],
    "en": [
      "switch port port security"
    ],
    "ru": [
      "безопасность порта порта коммутатора"
    ]
  },
  {
    "time": [
      333.329003,
      334.967179
    ],
    "en": [
      "that's it"
    ],
    "ru": [
      "это оно"
    ]
  },
  {
    "time": [
      334.967179,
      337.153457
    ],
    "en": [
      "let's go on switch to now"
    ],
    "ru": [
      "давай перейдем к сейчас"
    ]
  },
  {
    "time": [
      337.153457,
      342.877647
    ],
    "en": [
      "conf t interface f02"
    ],
    "ru": [
      "conf t interface f02"
    ]
  },
  {
    "time": [
      342.877647,
      345.410618
    ],
    "en": [
      "switch port mode access"
    ],
    "ru": [
      "переключатель режима порта доступа"
    ]
  },
  {
    "time": [
      345.410618,
      348.367851
    ],
    "en": [
      "switch port port security"
    ],
    "ru": [
      "безопасность порта порта коммутатора"
    ]
  },
  {
    "time": [
      348.367851,
      352.069008
    ],
    "en": [
      "that's all you have to do to initially configure port security"
    ],
    "ru": [
      "это все, что вам нужно сделать для первоначальной настройки безопасности порта"
    ]
  },
  {
    "time": [
      352.069008,
      360.922013
    ],
    "en": [
      "Step five first asks us how many MAC addresses are allowed on a port security interface by default"
    ],
    "ru": [
      "На пятом шаге нас сначала спрашивают, сколько MAC-адресов разрешено в интерфейсе безопасности порта по умолчанию."
    ]
  },
  {
    "time": [
      360.922013,
      364.090269
    ],
    "en": [
      "well let's use a show command to find out"
    ],
    "ru": [
      "ну давайте воспользуемся командой show, чтобы узнать"
    ]
  },
  {
    "time": [
      364.090269,
      367.590037
    ],
    "en": [
      "since we're already on switch to let's start here"
    ],
    "ru": [
      "так как мы уже на переходе, давайте начнем здесь"
    ]
  },
  {
    "time": [
      367.590037,
      371.052023
    ],
    "en": [
      "do show port security"
    ],
    "ru": [
      "показывать безопасность порта"
    ]
  },
  {
    "time": [
      371.052023,
      374.375812
    ],
    "en": [
      "look here next to fast ethernet zero 2"
    ],
    "ru": [
      "посмотрите здесь рядом с Fast Ethernet Zero 2"
    ]
  },
  {
    "time": [
      374.375812,
      377.251818
    ],
    "en": [
      "the max secure address count is 1"
    ],
    "ru": [
      "максимальное количество безопасных адресов - 1"
    ]
  },
  {
    "time": [
      377.251818,
      379.574617
    ],
    "en": [
      "remember that for the test"
    ],
    "ru": [
      "запомни это для теста"
    ]
  },
  {
    "time": [
      379.574617,
      383.859935
    ],
    "en": [
      "that is the default number of MAC addresses allowed on the switchboard"
    ],
    "ru": [
      "это количество MAC-адресов по умолчанию, разрешенных на коммутаторе"
    ]
  },
  {
    "time": [
      383.859935,
      389.278041
    ],
    "en": [
      "because this is the default we don't technically have to configure this"
    ],
    "ru": [
      "потому что это значение по умолчанию, нам технически не нужно настраивать это"
    ]
  },
  {
    "time": [
      389.278041,
      394.529272
    ],
    "en": [
      "however it's often a good idea to configure important settings like this just to be sure"
    ],
    "ru": [
      "однако часто бывает полезно настроить такие важные параметры, чтобы быть уверенным"
    ]
  },
  {
    "time": [
      394.529272,
      398.200707
    ],
    "en": [
      "and for our purposes it's good to go through the motions to practice"
    ],
    "ru": [
      "и для наших целей хорошо пройти через движения, чтобы попрактиковаться"
    ]
  },
  {
    "time": [
      398.200707,
      400.627074
    ],
    "en": [
      "so use this command"
    ],
    "ru": [
      "так что используйте эту команду"
    ]
  },
  {
    "time": [
      400.627074,
      407.692691
    ],
    "en": [
      "switch port port security maximum one 404.61179 now let's do it on switch 1 2"
    ],
    "ru": [
      "порт коммутатора безопасность порта максимум один 404.61179 теперь давайте сделаем это на коммутаторе 1 2"
    ]
  },
  {
    "time": [
      407.692691,
      413.597907
    ],
    "en": [
      "switch port port security maximum 1"
    ],
    "ru": [
      "порт коммутатора безопасность порта максимум 1"
    ]
  },
  {
    "time": [
      413.597907,
      415.554281
    ],
    "en": [
      "that's all for step 5"
    ],
    "ru": [
      "это все для шага 5"
    ]
  },
  {
    "time": [
      415.554281,
      420.566403
    ],
    "en": [
      "step six asks us another question"
    ],
    "ru": [
      "Шаг шестой задает нам еще один вопрос"
    ]
  },
  {
    "time": [
      420.566403,
      425.403929
    ],
    "en": [
      "what is the default action in the event of a port security violation"
    ],
    "ru": [
      "каково действие по умолчанию в случае нарушения безопасности порта"
    ]
  },
  {
    "time": [
      425.403929,
      433.673372
    ],
    "en": [
      "of course when we configure port security there has to be some action that the switch takes in the event that the rules we configured are violated"
    ],
    "ru": [
      "конечно, когда мы настраиваем безопасность порта, коммутатор должен выполнять какие-то действия в случае нарушения настроенных нами правил."
    ]
  },
  {
    "time": [
      433.673372,
      436.351025
    ],
    "en": [
      "there are three possibilities"
    ],
    "ru": [
      "есть три возможности"
    ]
  },
  {
    "time": [
      436.351025,
      438.567464
    ],
    "en": [
      "the first is protect"
    ],
    "ru": [
      "первая защита"
    ]
  },
  {
    "time": [
      438.567464,
      443.268101
    ],
    "en": [
      "which drops traffic from any MAC addresses which are not allowed on the port"
    ],
    "ru": [
      "который сбрасывает трафик с любых MAC-адресов, которые не разрешены на порту"
    ]
  },
  {
    "time": [
      443.268101,
      448.258578
    ],
    "en": [
      "that's it it doesn't shut down the interface or display any messages"
    ],
    "ru": [
      "вот и все, он не закрывает интерфейс и не отображает никаких сообщений"
    ]
  },
  {
    "time": [
      448.258578,
      452.163884
    ],
    "en": [
      "it doesn't even increase the violation counter that the switch keeps"
    ],
    "ru": [
      "он даже не увеличивает счетчик нарушений, который поддерживает переключатель"
    ]
  },
  {
    "time": [
      452.163884,
      455.362967
    ],
    "en": [
      "the second option is restrict"
    ],
    "ru": [
      "второй вариант - ограничить"
    ]
  },
  {
    "time": [
      455.362967,
      459.479384
    ],
    "en": [
      "which again drops all traffic from MAC addresses which aren't allowed"
    ],
    "ru": [
      "который снова отбрасывает весь трафик с MAC-адресов, которые не разрешены"
    ]
  },
  {
    "time": [
      459.479384,
      463.852395
    ],
    "en": [
      "it also displays a message on the switch and increases the violation counter on the switch"
    ],
    "ru": [
      "он также отображает сообщение на переключателе и увеличивает счетчик нарушений на переключателе"
    ]
  },
  {
    "time": [
      463.852395,
      468.093768
    ],
    "en": [
      "the third one is shut down"
    ],
    "ru": [
      "третий выключен"
    ]
  },
  {
    "time": [
      468.093768,
      475.972885
    ],
    "en": [
      "which puts the switchboard into an error disabled state effectively shutting down the interface as well as increasing the violation counter"
    ],
    "ru": [
      "который переводит коммутатор в состояние отключения из-за ошибки, эффективно отключая интерфейс, а также увеличивая счетчик нарушений"
    ]
  },
  {
    "time": [
      475.972885,
      480.200904
    ],
    "en": [
      "make sure you know the differences between these three for the test"
    ],
    "ru": [
      "убедитесь, что вы знаете разницу между этими тремя для теста"
    ]
  },
  {
    "time": [
      480.200904,
      485.355473
    ],
    "en": [
      "now as for which one is the default we can use the same command as before"
    ],
    "ru": [
      "Теперь, что касается того, какой из них используется по умолчанию, мы можем использовать ту же команду, что и раньше"
    ]
  },
  {
    "time": [
      485.355473,
      488.480845
    ],
    "en": [
      "do show port security"
    ],
    "ru": [
      "показывать безопасность порта"
    ]
  },
  {
    "time": [
      488.480845,
      493.830381
    ],
    "en": [
      "here at the end under security action it says shutdown"
    ],
    "ru": [
      "здесь, в конце, под действием безопасности написано выключение"
    ]
  },
  {
    "time": [
      493.830381,
      496.035242
    ],
    "en": [
      "so there's our answer"
    ],
    "ru": [
      "так вот наш ответ"
    ]
  },
  {
    "time": [
      496.035242,
      499.762644
    ],
    "en": [
      "the default port security violation action is shut down"
    ],
    "ru": [
      "действие нарушения безопасности порта по умолчанию отключено"
    ]
  },
  {
    "time": [
      499.762644,
      502.717647
    ],
    "en": [
      "another thing to remember for the test"
    ],
    "ru": [
      "еще одна вещь, которую нужно запомнить для теста"
    ]
  },
  {
    "time": [
      502.717647,
      507.384602
    ],
    "en": [
      "again even though this is default let's go through the command to configure it"
    ],
    "ru": [
      "снова, хотя это по умолчанию, давайте рассмотрим команду, чтобы настроить его"
    ]
  },
  {
    "time": [
      507.384602,
      511.645665
    ],
    "en": [
      "switch port port security violation"
    ],
    "ru": [
      "нарушение безопасности порта порта коммутатора"
    ]
  },
  {
    "time": [
      511.645665,
      514.422873
    ],
    "en": [
      "now I'll use the question mark to show you the options"
    ],
    "ru": [
      "теперь я использую вопросительный знак, чтобы показать вам варианты"
    ]
  },
  {
    "time": [
      514.422873,
      522.377044
    ],
    "en": [
      "here are the three options I mentioned earlier protect restrict shutdown 519.33388 let's go with the default of shutdown"
    ],
    "ru": [
      "вот три варианта, о которых я упоминал ранее, защита ограничить выключение 519.33388, давайте оставим выключение по умолчанию"
    ]
  },
  {
    "time": [
      522.377044,
      525.418085
    ],
    "en": [
      "now on switch 2"
    ],
    "ru": [
      "сейчас на переключателе 2"
    ]
  },
  {
    "time": [
      525.418085,
      530.725256
    ],
    "en": [
      "switch port port security violation shutdown"
    ],
    "ru": [
      "выключение нарушения безопасности порта порта коммутатора"
    ]
  },
  {
    "time": [
      530.725256,
      535.754121
    ],
    "en": [
      "the steps are all complete"
    ],
    "ru": [
      "все шаги завершены"
    ]
  },
  {
    "time": [
      535.754121,
      537.849143
    ],
    "en": [
      "but I want to show one more thing"
    ],
    "ru": [
      "но я хочу показать еще одну вещь"
    ]
  },
  {
    "time": [
      537.849143,
      540.805393
    ],
    "en": [
      "let me ping from pc1 to pc2 again"
    ],
    "ru": [
      "позвольте мне снова пинговать с ПК1 на ПК2"
    ]
  },
  {
    "time": [
      540.805393,
      545.294897
    ],
    "en": [
      "ping 192.168.1.12"
    ],
    "ru": [
      "пинг 192.168.1.12"
    ]
  },
  {
    "time": [
      545.294897,
      548.308731
    ],
    "en": [
      "now I'll go on switch 1"
    ],
    "ru": [
      "сейчас я пойду на выключатель 1"
    ]
  },
  {
    "time": [
      548.308731,
      553.169438
    ],
    "en": [
      "and show port security address"
    ],
    "ru": [
      "и показать адрес безопасности порта"
    ]
  },
  {
    "time": [
      553.169438,
      563.979211
    ],
    "en": [
      "as you can see this command shows the MAC address of PC 1 558.08966 which switch one has dynamically added as a secure MAC address on Fast Ethernet 0 2"
    ],
    "ru": [
      "как вы можете видеть, эта команда показывает MAC-адрес ПК 1 558.08966, который коммутатор динамически добавлен в качестве безопасного MAC-адреса в Fast Ethernet 0 2"
    ]
  },
  {
    "time": [
      563.979211,
      566.561802
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
      566.561802,
      572.326026
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
      572.326026,
      581.893449
    ],
    "en": [
      "please subscribe for future labs like this which will be released weekly 577.17055 if you have requests for any specific labs let me know in the comment section"
    ],
    "ru": [
      "пожалуйста, подпишитесь на будущие лаборатории, подобные этой, которые будут выпускаться еженедельно 577.17055, если у вас есть запросы по каким-либо конкретным лабораториям, дайте мне знать в разделе комментариев"
    ]
  },
  {
    "time": [
      581.893449,
      597.311715
    ],
    "en": [
      "if you want to support my channel I accept Bitcoin and etherion donations via the addresses in the description 588.9288 I am also a brave verified publisher and accept bat or basic attention token donations in the brave browser"
    ],
    "ru": [
      "Если вы хотите поддержать мой канал, я принимаю пожертвования биткойнами и эфиром по адресам в описании 588.9288 Я также храбрый проверенный издатель и принимаю пожертвования биткойнов или токенов основного внимания в смелом браузере"
    ]
  },
  {
    "time": [
      597.311715,
      597.311715
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
      597.311715,
      597.311715
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
      597.311715,
      597.311715
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]