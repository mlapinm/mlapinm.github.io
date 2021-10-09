let objs = [
  {
    "time": [
      0.0,
      5.668263
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
      5.668263,
      7.530295
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
      7.530295,
      19.955083
    ],
    "en": [
      "in this lab we will be working with two switches switch 1 and switch 2 and 4 pcs pc-1 pc2 pc 3 and PC 4"
    ],
    "ru": [
      "В этой лабораторной работе мы будем работать с двумя переключателями, переключателем 1 и переключателем 2 и 4 шт. ПК-1, ПК2, ПК 3 и ПК 4."
    ]
  },
  {
    "time": [
      19.955083,
      23.576648
    ],
    "en": [
      "we will assign these computers to VLANs"
    ],
    "ru": [
      "мы назначим эти компьютеры VLAN"
    ]
  },
  {
    "time": [
      23.576648,
      36.698614
    ],
    "en": [
      "VLANs or virtual lands are used to isolate computers at layer 2 29.89855 if you look at the network diagram you will notice that these 4 computers are in the same layer 3 network"
    ],
    "ru": [
      "VLAN или виртуальные земли используются для изоляции компьютеров на уровне 2 29.89855, если вы посмотрите на схему сети, вы заметите, что эти 4 компьютера находятся в одной сети уровня 3."
    ]
  },
  {
    "time": [
      36.698614,
      41.113068
    ],
    "en": [
      "that 1.0.0.0 / 24 network"
    ],
    "ru": [
      "что 1.0.0.0 / 24 сеть"
    ]
  },
  {
    "time": [
      41.113068,
      46.203877
    ],
    "en": [
      "we will use VLANs to separate them into two groups of two"
    ],
    "ru": [
      "мы будем использовать VLAN, чтобы разделить их на две группы по два"
    ]
  },
  {
    "time": [
      46.203877,
      49.452383
    ],
    "en": [
      "try to complete the lab yourself first"
    ],
    "ru": [
      "сначала попробуйте пройти лабораторию самостоятельно"
    ]
  },
  {
    "time": [
      49.452383,
      54.960541
    ],
    "en": [
      "and then continue watching this video if you have trouble or watch it afterwards to check your solution"
    ],
    "ru": [
      "а затем продолжайте смотреть это видео, если у вас возникнут проблемы, или просмотрите его позже, чтобы проверить свое решение."
    ]
  },
  {
    "time": [
      54.960541,
      61.258982
    ],
    "en": [
      "step one is to ping between the computers to check connectivity"
    ],
    "ru": [
      "Шаг первый - выполнить эхо-запрос между компьютерами, чтобы проверить подключение"
    ]
  },
  {
    "time": [
      61.258982,
      68.315315
    ],
    "en": [
      "let's do this on pc one 63.50488 I'll ping PC to first"
    ],
    "ru": [
      "давайте сделаем это на ПК 63.50488 Я пингую сначала ПК"
    ]
  },
  {
    "time": [
      68.315315,
      73.348651
    ],
    "en": [
      "pin 1.0.0.2 to the pin works"
    ],
    "ru": [
      "пин 1.0.0.2 к пину работает"
    ]
  },
  {
    "time": [
      73.348651,
      75.237043
    ],
    "en": [
      "next PC 3"
    ],
    "ru": [
      "следующий ПК 3"
    ]
  },
  {
    "time": [
      75.237043,
      79.868242
    ],
    "en": [
      "ping 10.0.0.3 the ping works again"
    ],
    "ru": [
      "пинг 10.0.0.3 пинг снова работает"
    ]
  },
  {
    "time": [
      79.868242,
      84.805856
    ],
    "en": [
      "next PC four 81.92165 ping 10.0.0.4"
    ],
    "ru": [
      "следующий ПК четыре 81.92165 пинг 10.0.0.4"
    ]
  },
  {
    "time": [
      84.805856,
      87.948724
    ],
    "en": [
      "all of our pings worked as expected"
    ],
    "ru": [
      "все наши пинги работали, как ожидалось"
    ]
  },
  {
    "time": [
      87.948724,
      90.151799
    ],
    "en": [
      "that's all for step 1"
    ],
    "ru": [
      "это все для шага 1"
    ]
  },
  {
    "time": [
      90.151799,
      98.563526
    ],
    "en": [
      "step two is to assign pc1 & pc2 vlan1"
    ],
    "ru": [
      "Шаг второй - назначить pc1 и pc2 vlan1"
    ]
  },
  {
    "time": [
      98.563526,
      107.466508
    ],
    "en": [
      "and PC to and PC four to VLAN two 102.02136 this is done by configuring the switch interfaces they are connected too"
    ],
    "ru": [
      "и ПК к и ПК четыре к VLAN два 102.02136 это делается путем настройки интерфейсов коммутатора, к которым они также подключены"
    ]
  },
  {
    "time": [
      107.466508,
      109.825902
    ],
    "en": [
      "let's do this on switch one first"
    ],
    "ru": [
      "давай сделаем это сначала на первом переключателе"
    ]
  },
  {
    "time": [
      109.825902,
      115.507132
    ],
    "en": [
      "so we'll be assigning pc-1 to VLAN 1 and PC 2 to VLAN 2"
    ],
    "ru": [
      "поэтому мы назначим pc-1 для VLAN 1 и ПК 2 для VLAN 2"
    ]
  },
  {
    "time": [
      115.507132,
      120.950041
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
      120.950041,
      133.489507
    ],
    "en": [
      "PC one is connected to Fast Ethernet 0 2 so interface f0 2 127.79925 now I will enter the command switch port mode access"
    ],
    "ru": [
      "Первый ПК подключен к Fast Ethernet 0 2, поэтому интерфейс f0 2 127.79925 теперь я перейду в режим доступа к порту переключения команд."
    ]
  },
  {
    "time": [
      133.489507,
      139.613778
    ],
    "en": [
      "switch ports connected to end hosts like a PC should be configured as access ports"
    ],
    "ru": [
      "порты коммутатора, подключенные к конечным хостам, таким как ПК, должны быть настроены как порты доступа"
    ]
  },
  {
    "time": [
      139.613778,
      149.843853
    ],
    "en": [
      "switch ports are in access mode by default but I like to explicitly configure this 146.09588 next we will assign it to VLAN 1"
    ],
    "ru": [
      "Порты коммутатора по умолчанию находятся в режиме доступа, но мне нравится явно настраивать этот 146.09588, а затем мы назначим его VLAN 1"
    ]
  },
  {
    "time": [
      149.843853,
      153.592921
    ],
    "en": [
      "switch port access VLAN 1"
    ],
    "ru": [
      "порт коммутатора доступа VLAN 1"
    ]
  },
  {
    "time": [
      153.592921,
      162.657601
    ],
    "en": [
      "next is PC 2 which is connected to Fast Ethernet 0 3 interface f0 3"
    ],
    "ru": [
      "далее идет ПК 2, который подключен к интерфейсу Fast Ethernet 0 3 f0 3"
    ]
  },
  {
    "time": [
      162.657601,
      168.177257
    ],
    "en": [
      "switch port mode access 165.73751 switch port access VLAN 2"
    ],
    "ru": [
      "доступ в режиме порта коммутатора 165.73751 доступ к порту коммутатора VLAN 2"
    ]
  },
  {
    "time": [
      168.177257,
      171.559603
    ],
    "en": [
      "as you can see the switch creates VLAN 2 for us"
    ],
    "ru": [
      "как видите, коммутатор создает для нас VLAN 2"
    ]
  },
  {
    "time": [
      171.559603,
      173.887035
    ],
    "en": [
      "because we hadn't created it before"
    ],
    "ru": [
      "потому что мы не создавали его раньше"
    ]
  },
  {
    "time": [
      173.887035,
      178.713979
    ],
    "en": [
      "let's check the running config to confirm our configuration"
    ],
    "ru": [
      "давайте проверим работающую конфигурацию, чтобы подтвердить нашу конфигурацию"
    ]
  },
  {
    "time": [
      178.713979,
      182.634992
    ],
    "en": [
      "do show run on"
    ],
    "ru": [
      "шоу, беги дальше"
    ]
  },
  {
    "time": [
      182.634992,
      187.162208
    ],
    "en": [
      "both interfaces you can see the switch port mode access command"
    ],
    "ru": [
      "на обоих интерфейсах вы можете увидеть команду доступа к режиму порта коммутатора"
    ]
  },
  {
    "time": [
      187.162208,
      192.903867
    ],
    "en": [
      "and on Fast Ethernet 0 3 you can see it is assigned to VLAN two"
    ],
    "ru": [
      "а на Fast Ethernet 0 3 вы можете видеть, что он назначен на VLAN два"
    ]
  },
  {
    "time": [
      192.903867,
      202.708909
    ],
    "en": [
      "but why don't we see our switch port access via an one command on Fast Ethernet 0 2 198.76762 this is because of what's called the native VLAN"
    ],
    "ru": [
      "но почему мы не видим доступ к порту нашего коммутатора через одну команду в Fast Ethernet 0 2 198.76762, это из-за того, что называется собственной VLAN"
    ]
  },
  {
    "time": [
      202.708909,
      210.761517
    ],
    "en": [
      "in normal VLANs the switch tags the packet from that VLAN to identify it as belonging to that VLAN"
    ],
    "ru": [
      "в обычных VLAN коммутатор помечает пакет из этой VLAN, чтобы идентифицировать его как принадлежащий этой VLAN."
    ]
  },
  {
    "time": [
      210.761517,
      215.037345
    ],
    "en": [
      "the native VLAN however doesn't need to be tagged"
    ],
    "ru": [
      "однако собственная VLAN не требует тегирования"
    ]
  },
  {
    "time": [
      215.037345,
      219.555577
    ],
    "en": [
      "and any packets that are untagged are assumed to belong to that VLAN"
    ],
    "ru": [
      "и любые пакеты, которые не помечены, считаются принадлежащими этой VLAN."
    ]
  },
  {
    "time": [
      219.555577,
      224.905294
    ],
    "en": [
      "and VLAN 1 is the default native VLAN on Cisco switches"
    ],
    "ru": [
      "а VLAN 1 - это собственная VLAN по умолчанию на коммутаторах Cisco."
    ]
  },
  {
    "time": [
      224.905294,
      230.697352
    ],
    "en": [
      "because of this by default all interfaces belong to VLAN one"
    ],
    "ru": [
      "из-за этого по умолчанию все интерфейсы принадлежат VLAN one"
    ]
  },
  {
    "time": [
      230.697352,
      238.956898
    ],
    "en": [
      "if you try to explicitly configure an interface as VLAN one 235.06166 it won't even show up in the configuration as you can see here"
    ],
    "ru": [
      "если вы попытаетесь явно настроить интерфейс как VLAN one 235.06166, он даже не будет отображаться в конфигурации, как вы можете видеть здесь"
    ]
  },
  {
    "time": [
      238.956898,
      245.163209
    ],
    "en": [
      "note that the native VLAN can be changed and for security purposes it often is"
    ],
    "ru": [
      "обратите внимание, что собственная VLAN может быть изменена, и в целях безопасности она часто"
    ]
  },
  {
    "time": [
      245.163209,
      248.080379
    ],
    "en": [
      "but for this lab we will keep it as is"
    ],
    "ru": [
      "но для этой лаборатории мы оставим все как есть"
    ]
  },
  {
    "time": [
      248.080379,
      251.615847
    ],
    "en": [
      "next let's hop over to switch two"
    ],
    "ru": [
      "следующий давай перепрыгнем, чтобы переключить два"
    ]
  },
  {
    "time": [
      251.615847,
      261.626809
    ],
    "en": [
      "enable conf T interface f02 257.82405 let's do the exact same thing as with pc1 & pc2"
    ],
    "ru": [
      "enable conf T interface f02 257.82405 давайте сделаем то же самое, что и с pc1 и pc2"
    ]
  },
  {
    "time": [
      261.626809,
      264.183612
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
      264.183612,
      267.462302
    ],
    "en": [
      "switch port access VLAN one"
    ],
    "ru": [
      "порт коммутатора доступа VLAN один"
    ]
  },
  {
    "time": [
      267.462302,
      270.913277
    ],
    "en": [
      "interface f03"
    ],
    "ru": [
      "интерфейс f03"
    ]
  },
  {
    "time": [
      270.913277,
      275.750091
    ],
    "en": [
      "switch port mode access switch port access VLAN two"
    ],
    "ru": [
      "режим порта коммутатора доступ к порту коммутатора доступ VLAN два"
    ]
  },
  {
    "time": [
      275.750091,
      280.273484
    ],
    "en": [
      "there we go let's check the running config on switch two as well"
    ],
    "ru": [
      "Итак, давайте проверим работающую конфигурацию на втором переключателе"
    ]
  },
  {
    "time": [
      280.273484,
      282.954998
    ],
    "en": [
      "do show run"
    ],
    "ru": [
      "показывать бег"
    ]
  },
  {
    "time": [
      282.954998,
      286.709803
    ],
    "en": [
      "again we see the same thing as on switch one"
    ],
    "ru": [
      "снова мы видим то же самое, что и на первом переключателе"
    ]
  },
  {
    "time": [
      286.709803,
      288.803406
    ],
    "en": [
      "step two is now complete"
    ],
    "ru": [
      "шаг два теперь завершен"
    ]
  },
  {
    "time": [
      288.803406,
      299.253312
    ],
    "en": [
      "step three is to attempt to ping between PC one and PC3 and PC two and PC four"
    ],
    "ru": [
      "Шаг третий - попытаться выполнить эхо-запрос между ПК 1 и ПК3, а также ПК 2 и ПК 4"
    ]
  },
  {
    "time": [
      299.253312,
      306.477165
    ],
    "en": [
      "so we're going to attempt to ping between computers in the same VLAN 303.43147 let's hop on PC one first"
    ],
    "ru": [
      "поэтому мы собираемся попытаться выполнить эхо-запрос между компьютерами в одной и той же VLAN. 303.43147, давайте сначала подключимся к ПК."
    ]
  },
  {
    "time": [
      306.477165,
      313.821203
    ],
    "en": [
      "ping 10.0.0.3 the pings are successful"
    ],
    "ru": [
      "ping 10.0.0.3 пинги успешны"
    ]
  },
  {
    "time": [
      313.821203,
      316.617918
    ],
    "en": [
      "next let's hop on PC2"
    ],
    "ru": [
      "Далее, давайте прыгнем на ПК2"
    ]
  },
  {
    "time": [
      316.617918,
      321.868637
    ],
    "en": [
      "ping 10.0.0.4"
    ],
    "ru": [
      "пинг 10.0.0.4"
    ]
  },
  {
    "time": [
      321.868637,
      327.358279
    ],
    "en": [
      "our pings fail"
    ],
    "ru": [
      "наши пинги терпят неудачу"
    ]
  },
  {
    "time": [
      327.358279,
      328.606538
    ],
    "en": [
      "why is that"
    ],
    "ru": [
      "это почему"
    ]
  },
  {
    "time": [
      328.606538,
      331.557225
    ],
    "en": [
      "pc1 & pc2 same VLAN"
    ],
    "ru": [
      "pc1 и pc2 тот же VLAN"
    ]
  },
  {
    "time": [
      331.557225,
      333.244937
    ],
    "en": [
      "and their pings worked"
    ],
    "ru": [
      "и их пинги работали"
    ]
  },
  {
    "time": [
      333.244937,
      337.168459
    ],
    "en": [
      "PC 2 and PC 4 are in the same VLAN as well"
    ],
    "ru": [
      "ПК 2 и ПК 4 также находятся в одной VLAN"
    ]
  },
  {
    "time": [
      337.168459,
      340.232972
    ],
    "en": [
      "so why can't we ping between them"
    ],
    "ru": [
      "так почему мы не можем пинговать между ними"
    ]
  },
  {
    "time": [
      340.232972,
      343.245626
    ],
    "en": [
      "remember what I said about the native VLAN"
    ],
    "ru": [
      "помните, что я говорил о родном VLAN"
    ]
  },
  {
    "time": [
      343.245626,
      349.989904
    ],
    "en": [
      "the fastethernet 0/1 interfaces of switch 1 and switch 2 are assigned to the native VLAN"
    ],
    "ru": [
      "интерфейсы fastethernet 0/1 коммутатора 1 и коммутатора 2 назначены собственной VLAN"
    ]
  },
  {
    "time": [
      349.989904,
      352.547552
    ],
    "en": [
      "which is VLAN 1 by default"
    ],
    "ru": [
      "который по умолчанию является VLAN 1"
    ]
  },
  {
    "time": [
      352.547552,
      356.139634
    ],
    "en": [
      "so only traffic from VLAN 1 can pass through them"
    ],
    "ru": [
      "поэтому через них может проходить только трафик из VLAN 1"
    ]
  },
  {
    "time": [
      356.139634,
      358.481089
    ],
    "en": [
      "we'll fix that in step 4"
    ],
    "ru": [
      "мы исправим это на шаге 4"
    ]
  },
  {
    "time": [
      358.481089,
      369.364215
    ],
    "en": [
      "step four is to configure the interfaces connecting switch 1 and switch two as trunk interfaces"
    ],
    "ru": [
      "Шаг четвертый - настроить интерфейсы, соединяющие коммутатор 1 и коммутатор 2 в качестве магистральных интерфейсов."
    ]
  },
  {
    "time": [
      369.364215,
      374.500603
    ],
    "en": [
      "in order to allow traffic from multiple VLANs to pass between the two switches"
    ],
    "ru": [
      "чтобы разрешить трафик из нескольких VLAN проходить между двумя коммутаторами"
    ]
  },
  {
    "time": [
      374.500603,
      379.464989
    ],
    "en": [
      "we must configure their fastethernet 0/1 interfaces as trunk interfaces"
    ],
    "ru": [
      "мы должны настроить их интерфейсы fastethernet 0/1 как магистральные интерфейсы"
    ]
  },
  {
    "time": [
      379.464989,
      382.512166
    ],
    "en": [
      "let's do that on switch one first"
    ],
    "ru": [
      "давай сделаем это на первом переключателе"
    ]
  },
  {
    "time": [
      382.512166,
      388.177883
    ],
    "en": [
      "interface f01"
    ],
    "ru": [
      "интерфейс f01"
    ]
  },
  {
    "time": [
      388.177883,
      390.308118
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
      390.308118,
      393.017568
    ],
    "en": [
      "next switch two"
    ],
    "ru": [
      "следующий переключатель два"
    ]
  },
  {
    "time": [
      393.017568,
      400.091967
    ],
    "en": [
      "interface f01 switch port mode trunk"
    ],
    "ru": [
      "интерфейс f01 коммутатор режим порта магистраль"
    ]
  },
  {
    "time": [
      400.091967,
      402.685414
    ],
    "en": [
      "that's it for step 4"
    ],
    "ru": [
      "это все для шага 4"
    ]
  },
  {
    "time": [
      402.685414,
      408.675267
    ],
    "en": [
      "Step five is to once again ping between the computers"
    ],
    "ru": [
      "Шаг пятый - еще раз проверить связь между компьютерами."
    ]
  },
  {
    "time": [
      408.675267,
      418.142776
    ],
    "en": [
      "if we correctly configured everything we should be able to ping between PC one and PC3 and between PC two and PC four"
    ],
    "ru": [
      "если мы правильно настроили все, мы сможем пинговать между ПК 1 и ПК3 и между ПК 2 и ПК 4"
    ]
  },
  {
    "time": [
      418.142776,
      420.085872
    ],
    "en": [
      "but the other pings should fail"
    ],
    "ru": [
      "но другие эхо-запросы должны завершиться ошибкой"
    ]
  },
  {
    "time": [
      420.085872,
      423.099286
    ],
    "en": [
      "let's start from PC one again"
    ],
    "ru": [
      "давайте снова начнем с ПК"
    ]
  },
  {
    "time": [
      423.099286,
      426.223408
    ],
    "en": [
      "first let's ping PC two"
    ],
    "ru": [
      "сначала давайте пингуем компьютер два"
    ]
  },
  {
    "time": [
      426.223408,
      433.229358
    ],
    "en": [
      "as expected the pings failed"
    ],
    "ru": [
      "как и ожидалось, пинг не прошел"
    ]
  },
  {
    "time": [
      433.229358,
      436.847325
    ],
    "en": [
      "next PC three which should succeed"
    ],
    "ru": [
      "следующие три ПК, которые должны быть успешными"
    ]
  },
  {
    "time": [
      436.847325,
      442.422032
    ],
    "en": [
      "as expected the ping succeeded"
    ],
    "ru": [
      "как и ожидалось, пинг прошел успешно"
    ]
  },
  {
    "time": [
      442.422032,
      446.282995
    ],
    "en": [
      "finally PC four"
    ],
    "ru": [
      "наконец ПК четыре"
    ]
  },
  {
    "time": [
      446.282995,
      450.903521
    ],
    "en": [
      "again the pings failed"
    ],
    "ru": [
      "снова пинги не удались"
    ]
  },
  {
    "time": [
      450.903521,
      454.171055
    ],
    "en": [
      "let's ping from PC2 as well"
    ],
    "ru": [
      "давай пингуем и с ПК2"
    ]
  },
  {
    "time": [
      454.171055,
      458.516593
    ],
    "en": [
      "ping PC one"
    ],
    "ru": [
      "пинг ПК один"
    ]
  },
  {
    "time": [
      458.516593,
      461.397392
    ],
    "en": [
      "the pings failed"
    ],
    "ru": [
      "пинг не удался"
    ]
  },
  {
    "time": [
      461.397392,
      468.484928
    ],
    "en": [
      "PC three the pings failed"
    ],
    "ru": [
      "ПК три не удалось выполнить команду ping"
    ]
  },
  {
    "time": [
      468.484928,
      473.227537
    ],
    "en": [
      "finally PC4 the ping succeeded"
    ],
    "ru": [
      "наконец-то PC4 пинг прошел успешно"
    ]
  },
  {
    "time": [
      473.227537,
      481.223136
    ],
    "en": [
      "as you can see we have successfully isolated the computers between VLANs 478.25822 even though they're on the same layer 3 Network"
    ],
    "ru": [
      "как видите, мы успешно изолировали компьютеры между VLAN 478.25822, даже если они находятся в одной сети уровня 3."
    ]
  },
  {
    "time": [
      481.223136,
      483.214602
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
      483.214602,
      491.074798
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
      491.074798,
      501.069858
    ],
    "en": [
      "please subscribe for future labs like this which will be released weekly 495.89011 if you have requests for any specific labs let me know in the comment section"
    ],
    "ru": [
      "пожалуйста, подпишитесь на будущие лаборатории, подобные этой, которые будут выпускаться еженедельно 495.89011, если у вас есть запросы по каким-либо конкретным лабораториям, дайте мне знать в разделе комментариев"
    ]
  },
  {
    "time": [
      501.069858,
      507.576312
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
      507.576312,
      507.576312
    ],
    "en": [
      "I am also a brave verified publisher and accept bat or basic attention token donations in the brave browser 515.88 515.88 515.88"
    ],
    "ru": [
      "Я также храбрый проверенный издатель и принимаю пожертвования летучих мышей или токенов основного внимания в смелом браузере 515.88 515.88 515.88"
    ]
  }
]