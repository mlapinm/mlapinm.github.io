let objs = [
  {
    "time": [
      0.0,
      4.381351
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
      4.381351,
      7.711086
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
      7.711086,
      12.269324
    ],
    "en": [
      "this lab will largely be a review of VLANs"
    ],
    "ru": [
      "эта лабораторная работа будет в основном обзором сетей VLAN."
    ]
  },
  {
    "time": [
      12.269324,
      15.095584
    ],
    "en": [
      "but with a couple commands we didn't cover before"
    ],
    "ru": [
      "но с парой команд, которые мы не рассматривали раньше"
    ]
  },
  {
    "time": [
      15.095584,
      16.829985
    ],
    "en": [
      "which you should be familiar with for the test"
    ],
    "ru": [
      "с которым вы должны быть знакомы для теста"
    ]
  },
  {
    "time": [
      16.829985,
      24.114711
    ],
    "en": [
      "as always try to complete the lab on your own first 21.22814 then continue watching this video if you have trouble"
    ],
    "ru": [
      "как всегда, попробуйте сначала пройти лабораторную работу самостоятельно 21.22814, а затем продолжайте смотреть это видео, если у вас возникнут проблемы"
    ]
  },
  {
    "time": [
      24.114711,
      26.588038
    ],
    "en": [
      "or watch it after to check your solution"
    ],
    "ru": [
      "или просмотрите его позже, чтобы проверить свое решение"
    ]
  },
  {
    "time": [
      26.588038,
      31.925287
    ],
    "en": [
      "note that just for the purpose of this video I have pre-configured switch 2 to save time"
    ],
    "ru": [
      "обратите внимание, что специально для этого видео я предварительно настроил переключатель 2, чтобы сэкономить время"
    ]
  },
  {
    "time": [
      31.925287,
      36.104123
    ],
    "en": [
      "this is not the case in the lab file you can download below"
    ],
    "ru": [
      "это не так в лабораторном файле, который вы можете скачать ниже"
    ]
  },
  {
    "time": [
      36.104123,
      40.779842
    ],
    "en": [
      "although in this lab the configurations for each switch happen to be the same"
    ],
    "ru": [
      "хотя в этой лабораторной работе конфигурации для каждого переключателя совпадают"
    ]
  },
  {
    "time": [
      40.779842,
      42.983762
    ],
    "en": [
      "it's good to practice them twice"
    ],
    "ru": [
      "хорошо практиковать их дважды"
    ]
  },
  {
    "time": [
      42.983762,
      48.614783
    ],
    "en": [
      "step one is to set the host names of the switches"
    ],
    "ru": [
      "Шаг первый - установить имена хостов коммутаторов"
    ]
  },
  {
    "time": [
      48.614783,
      62.909658
    ],
    "en": [
      "for most of these labs I've been pre configuring the host names but let's quickly review the command 54.7167 I'll hop on switch one and enable conf t host name switch 1"
    ],
    "ru": [
      "для большинства этих лабораторных работ я предварительно настраивал имена хостов, но давайте быстро рассмотрим команду 54.7167. Я перейду на первый переключатель и включу конфигурирование имени хоста переключателя 1."
    ]
  },
  {
    "time": [
      62.909658,
      67.026076
    ],
    "en": [
      "again for this video I already configured switch 2"
    ],
    "ru": [
      "опять же для этого видео я уже настроил переключатель 2"
    ]
  },
  {
    "time": [
      67.026076,
      69.473172
    ],
    "en": [
      "step 1 is now complete"
    ],
    "ru": [
      "шаг 1 теперь завершен"
    ]
  },
  {
    "time": [
      69.473172,
      76.630643
    ],
    "en": [
      "step two is to create two VLANs on the switches and configure their names"
    ],
    "ru": [
      "Шаг второй - создать две сети VLAN на коммутаторах и настроить их имена."
    ]
  },
  {
    "time": [
      76.630643,
      83.698647
    ],
    "en": [
      "you may remember from previous labs that when you assign a switch interface to a VLAN that doesn't exist"
    ],
    "ru": [
      "вы, возможно, помните из предыдущих лабораторных работ, что когда вы назначаете интерфейс коммутатора для VLAN, которая не существует"
    ]
  },
  {
    "time": [
      83.698647,
      86.303929
    ],
    "en": [
      "the switch automatically creates the VLAN for you"
    ],
    "ru": [
      "коммутатор автоматически создает для вас VLAN"
    ]
  },
  {
    "time": [
      86.303929,
      92.654156
    ],
    "en": [
      "however you can also manually create VLANs and there are situations where you'll have to do that"
    ],
    "ru": [
      "однако вы также можете вручную создавать сети VLAN, и есть ситуации, когда вам придется это сделать"
    ]
  },
  {
    "time": [
      92.654156,
      98.840377
    ],
    "en": [
      "the command you use to create a VLAN is also used to enter VLAN configuration mode"
    ],
    "ru": [
      "команда, которую вы используете для создания VLAN, также используется для входа в режим конфигурации VLAN"
    ]
  },
  {
    "time": [
      98.840377,
      101.967943
    ],
    "en": [
      "which is required to configure the name of a VLAN"
    ],
    "ru": [
      "что требуется для настройки имени VLAN"
    ]
  },
  {
    "time": [
      101.967943,
      105.420704
    ],
    "en": [
      "first let's use the do show VLAN command"
    ],
    "ru": [
      "сначала воспользуемся командой do show VLAN"
    ]
  },
  {
    "time": [
      105.420704,
      116.459729
    ],
    "en": [
      "remember that do is used to allow us to perform commands in global configuration interface configuration or other modes which we would normally have to be in privileged exec mode to use"
    ],
    "ru": [
      "помните, что do используется, чтобы позволить нам выполнять команды в конфигурации интерфейса глобальной конфигурации или в других режимах, которые обычно должны быть в привилегированном режиме exec, чтобы использовать"
    ]
  },
  {
    "time": [
      116.459729,
      120.713308
    ],
    "en": [
      "if you're in privileged exec mode don't include that do"
    ],
    "ru": [
      "если вы находитесь в привилегированном режиме exec, не включайте это"
    ]
  },
  {
    "time": [
      120.713308,
      125.787031
    ],
    "en": [
      "as you can see this gives us a lot of information about the VLANs"
    ],
    "ru": [
      "как видите, это дает нам много информации о VLAN"
    ]
  },
  {
    "time": [
      125.787031,
      131.488062
    ],
    "en": [
      "however for our purposes now let's instead use the do show VLAN brief command"
    ],
    "ru": [
      "однако для наших целей теперь давайте вместо этого будем использовать команду do show VLAN Short"
    ]
  },
  {
    "time": [
      131.488062,
      136.532116
    ],
    "en": [
      "this gives a nice summary of which VLANs we have"
    ],
    "ru": [
      "это дает хорошее представление о том, какие VLAN у нас есть"
    ]
  },
  {
    "time": [
      136.532116,
      140.750763
    ],
    "en": [
      "and which interfaces of the switch are assigned to which VLAN"
    ],
    "ru": [
      "и какие интерфейсы коммутатора назначены какой VLAN"
    ]
  },
  {
    "time": [
      140.750763,
      143.960696
    ],
    "en": [
      "note which VLANs are present by default"
    ],
    "ru": [
      "обратите внимание, какие сети VLAN присутствуют по умолчанию"
    ]
  },
  {
    "time": [
      143.960696,
      149.302416
    ],
    "en": [
      "VLAN 1 twitch all ports or interfaces are assigned by default"
    ],
    "ru": [
      "VLAN 1 дергается, все порты или интерфейсы назначены по умолчанию"
    ]
  },
  {
    "time": [
      149.302416,
      159.831127
    ],
    "en": [
      "also VLANs 1003 1005 which are used for FDDI and token ring 2 things you definitely don't need to worry about for your CCNA"
    ],
    "ru": [
      "также VLAN 1003 1005, которые используются для FDDI и Token Ring 2 вещи, о которых вам определенно не нужно беспокоиться для вашего CCNA"
    ]
  },
  {
    "time": [
      159.831127,
      165.662284
    ],
    "en": [
      "now the command to create VLAN 13 is VLAN 13"
    ],
    "ru": [
      "теперь команда для создания VLAN 13 - это VLAN 13"
    ]
  },
  {
    "time": [
      165.662284,
      169.699744
    ],
    "en": [
      "as you can see this puts us into VLAN configuration mode"
    ],
    "ru": [
      "как видите, это переводит нас в режим конфигурации VLAN"
    ]
  },
  {
    "time": [
      169.699744,
      174.180124
    ],
    "en": [
      "also I'll use the show VLAN brief command"
    ],
    "ru": [
      "также я буду использовать короткую команду show VLAN"
    ]
  },
  {
    "time": [
      174.180124,
      177.182903
    ],
    "en": [
      "and you can see that the VLAN has been created"
    ],
    "ru": [
      "и вы можете видеть, что VLAN была создана"
    ]
  },
  {
    "time": [
      177.182903,
      188.072563
    ],
    "en": [
      "also note that the default VLAN name is VLAN followed by the four-digit VLAN number in this case 0 0 1 3"
    ],
    "ru": [
      "также обратите внимание, что имя VLAN по умолчанию - VLAN, за которым следует четырехзначный номер VLAN в этом случае 0 0 1 3"
    ]
  },
  {
    "time": [
      188.072563,
      202.262893
    ],
    "en": [
      "now let's change the name to management with the command named management 194.76125 ok now let's use the same commands for VLAN 24 VLAN 24"
    ],
    "ru": [
      "теперь давайте изменим имя на управление с помощью команды с именем management 194.76125 хорошо, теперь давайте использовать те же команды для VLAN 24 VLAN 24"
    ]
  },
  {
    "time": [
      202.262893,
      205.206792
    ],
    "en": [
      "name engineering"
    ],
    "ru": [
      "название инженерное дело"
    ]
  },
  {
    "time": [
      205.206792,
      210.496928
    ],
    "en": [
      "and now let's show VLAN briefed again and check"
    ],
    "ru": [
      "а теперь давайте снова покажем проинформированный о VLAN и проверим"
    ]
  },
  {
    "time": [
      210.496928,
      223.456275
    ],
    "en": [
      "we have successfully created VLAN 13 and VLAN 24 with the names management and engineering 218.29557 when you're doing the lab performed the same configurations on switch 2 and that's step 2"
    ],
    "ru": [
      "мы успешно создали VLAN 13 и VLAN 24 с управлением именами и проектированием 218.29557, когда вы выполняете лабораторную работу, выполнили те же настройки на коммутаторе 2, и это шаг 2"
    ]
  },
  {
    "time": [
      223.456275,
      232.873363
    ],
    "en": [
      "step three is to place pc1 & pc2 into VLAN 13 & pc2 and pc 4 into VLAN 24"
    ],
    "ru": [
      "Шаг третий - поместить ПК1 и ПК2 в VLAN 13 и ПК2, а ПК 4 - в VLAN 24."
    ]
  },
  {
    "time": [
      232.873363,
      240.064026
    ],
    "en": [
      "since we're just doing switch 1 for this video I'll put PC 1 into VLAN 13 and PC 2 into VLAN 24"
    ],
    "ru": [
      "поскольку мы просто делаем переключатель 1 для этого видео, я помещу ПК 1 в VLAN 13, а ПК 2 в VLAN 24."
    ]
  },
  {
    "time": [
      240.064026,
      244.729052
    ],
    "en": [
      "first PC 1 which is connected to a Fast Ethernet 02"
    ],
    "ru": [
      "первый ПК 1, подключенный к Fast Ethernet 02"
    ]
  },
  {
    "time": [
      244.729052,
      251.693157
    ],
    "en": [
      "interface f02 switch port access VLAN 13"
    ],
    "ru": [
      "интерфейс f02 коммутатор порт доступа VLAN 13"
    ]
  },
  {
    "time": [
      251.693157,
      256.398697
    ],
    "en": [
      "in the previous labs I also use the command switch port mode access"
    ],
    "ru": [
      "в предыдущих лабораторных работах я также использовал доступ в режиме порта командного переключателя"
    ]
  },
  {
    "time": [
      256.398697,
      261.898656
    ],
    "en": [
      "but you may remember that I said this isn't necessary because the interfaces are in access mode by default"
    ],
    "ru": [
      "но вы можете помнить, что я сказал, что в этом нет необходимости, потому что интерфейсы по умолчанию находятся в режиме доступа"
    ]
  },
  {
    "time": [
      261.898656,
      265.745851
    ],
    "en": [
      "just to prove this I won't use the command for this video"
    ],
    "ru": [
      "просто чтобы доказать это, я не буду использовать команду для этого видео"
    ]
  },
  {
    "time": [
      265.745851,
      274.094956
    ],
    "en": [
      "next for PC 2 interface f03 switch port access VLAN 24"
    ],
    "ru": [
      "далее для интерфейса ПК 2 f03 коммутатор порт доступа VLAN 24"
    ]
  },
  {
    "time": [
      274.094956,
      276.682162
    ],
    "en": [
      "do show VLAN briefed"
    ],
    "ru": [
      "показать проинформированный VLAN"
    ]
  },
  {
    "time": [
      276.682162,
      288.094455
    ],
    "en": [
      "as you can see Fast Ethernet 0 2 which pc 1 is connected to is in VLAN 13 and Fast Ethernet 0 3 which pc 2 is connected to is in VLAN 24"
    ],
    "ru": [
      "как вы можете видеть, Fast Ethernet 0 2, к которому подключен компьютер 1, находится в VLAN 13, а Fast Ethernet 0 3, к которому подключен компьютер 2, находится в VLAN 24"
    ]
  },
  {
    "time": [
      288.094455,
      297.004933
    ],
    "en": [
      "that's all for step 3 289.57954 step four is to configure a trunk link between switch 1 and switch 2"
    ],
    "ru": [
      "это все для шага 3 289.57954 шаг четвертый - настроить магистральный канал между коммутатором 1 и коммутатором 2"
    ]
  },
  {
    "time": [
      297.004933,
      301.206311
    ],
    "en": [
      "they are connected by their fastethernet 0/1 interfaces"
    ],
    "ru": [
      "они связаны своими интерфейсами fastethernet 0/1"
    ]
  },
  {
    "time": [
      301.206311,
      306.938347
    ],
    "en": [
      "so interface f01 switch port mode trunk"
    ],
    "ru": [
      "так интерфейс f01 переключатель режима порта магистраль"
    ]
  },
  {
    "time": [
      306.938347,
      309.703064
    ],
    "en": [
      "that's it let's confirm"
    ],
    "ru": [
      "вот и давайте подтвердим"
    ]
  },
  {
    "time": [
      309.703064,
      317.879553
    ],
    "en": [
      "and you can use this command show interfaces trunk to check which interfaces are in trunking mode"
    ],
    "ru": [
      "и вы можете использовать эту команду show interfaces trunk, чтобы проверить, какие интерфейсы находятся в режиме транкинга."
    ]
  },
  {
    "time": [
      317.879553,
      321.611565
    ],
    "en": [
      "you can see f01 is now trunking"
    ],
    "ru": [
      "вы можете видеть, что f01 теперь транкинговый"
    ]
  },
  {
    "time": [
      321.611565,
      330.106283
    ],
    "en": [
      "the encapsulation is 802.1 q which is the only option on this switch 327.13959 and the native VLAN is 1 which is the default"
    ],
    "ru": [
      "инкапсуляция - 802.1 q, которая является единственной опцией на этом коммутаторе 327.13959, а собственная VLAN - 1, которая является значением по умолчанию."
    ]
  },
  {
    "time": [
      330.106283,
      335.802469
    ],
    "en": [
      "you can also see that all VLANs are allowed on the trunk which is default as well"
    ],
    "ru": [
      "вы также можете видеть, что все VLAN разрешены на магистрали, что также по умолчанию"
    ]
  },
  {
    "time": [
      335.802469,
      344.724188
    ],
    "en": [
      "however vlans 1 13 and 24 are the only ones that are allowed and active in management domain"
    ],
    "ru": [
      "однако vlans 1, 13 и 24 - единственные разрешенные и активные в домене управления."
    ]
  },
  {
    "time": [
      344.724188,
      348.460931
    ],
    "en": [
      "VLAN 1 because it is the native VLAN"
    ],
    "ru": [
      "VLAN 1, потому что это собственная VLAN"
    ]
  },
  {
    "time": [
      348.460931,
      356.961493
    ],
    "en": [
      "and the default VLAN to which all interfaces are assigned 351.83423 the 2 VLANs we created vlan's 13 and 24 also appear"
    ],
    "ru": [
      "и VLAN по умолчанию, которой назначены все интерфейсы, 351.83423 2 VLAN, которые мы создали, vlan 13 и 24 также появляются"
    ]
  },
  {
    "time": [
      356.961493,
      361.008062
    ],
    "en": [
      "let me do the command again to refresh"
    ],
    "ru": [
      "позвольте мне повторить команду, чтобы обновить"
    ]
  },
  {
    "time": [
      361.008062,
      363.774063
    ],
    "en": [
      "show interfaces trunk"
    ],
    "ru": [
      "показать магистраль интерфейсов"
    ]
  },
  {
    "time": [
      363.774063,
      377.996017
    ],
    "en": [
      "as you can see VLANs 1 13 and 24 also appear under VLANs in spanning tree forwarding state and not pruned 374.43307 spanning tree and pruning our topics for another time"
    ],
    "ru": [
      "как вы можете видеть, VLAN 1, 13 и 24 также отображаются в VLAN в состоянии пересылки связующего дерева и не сокращены. 374.43307 связующее дерево и сокращение наших тем на другой раз."
    ]
  },
  {
    "time": [
      377.996017,
      382.979918
    ],
    "en": [
      "Step five is to save the configuration"
    ],
    "ru": [
      "Шаг пятый - сохранить конфигурацию"
    ]
  },
  {
    "time": [
      382.979918,
      387.660156
    ],
    "en": [
      "I haven't included this as a step in every lab but don't forget about it"
    ],
    "ru": [
      "Я не включал это в каждую лабораторную работу, но не забывайте об этом"
    ]
  },
  {
    "time": [
      387.660156,
      390.381626
    ],
    "en": [
      "this time let's use the write to command"
    ],
    "ru": [
      "на этот раз воспользуемся командой записи в"
    ]
  },
  {
    "time": [
      390.381626,
      396.918705
    ],
    "en": [
      "there we go finally let's ping between pcs to check connectivity"
    ],
    "ru": [
      "вот и мы, наконец, давайте пингуем между ПК, чтобы проверить подключение"
    ]
  },
  {
    "time": [
      396.918705,
      404.470974
    ],
    "en": [
      "because I already set up switch 2 PC 1 should be able to ping PC 3 and PC 2 should be able to ping PC 4"
    ],
    "ru": [
      "потому что я уже установил переключатель 2, ПК 1 должен иметь возможность пинговать ПК 3, а ПК 2 должен иметь возможность пинговать ПК 4"
    ]
  },
  {
    "time": [
      404.470974,
      413.021272
    ],
    "en": [
      "so let's go on PC 1 ping 192.168.0.3"
    ],
    "ru": [
      "так что пойдем на ПК 1 пинг 192.168.0.3"
    ]
  },
  {
    "time": [
      413.021272,
      423.227583
    ],
    "en": [
      "ok it works and now on PC 2"
    ],
    "ru": [
      "нормально работает и теперь на ПК 2"
    ]
  },
  {
    "time": [
      423.227583,
      427.773859
    ],
    "en": [
      "ping 192.168.0.4"
    ],
    "ru": [
      "пинг 192.168.0.4"
    ]
  },
  {
    "time": [
      427.773859,
      434.519253
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
      434.519253,
      436.140664
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
      436.140664,
      443.057552
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
      443.057552,
      445.688557
    ],
    "en": [
      "please subscribe for future labs like this"
    ],
    "ru": [
      "пожалуйста, подпишитесь на будущие подобные лаборатории"
    ]
  },
  {
    "time": [
      445.688557,
      448.068989
    ],
    "en": [
      "which will be released weekly"
    ],
    "ru": [
      "который будет выходить еженедельно"
    ]
  },
  {
    "time": [
      448.068989,
      452.680094
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
      452.680094,
      459.953831
    ],
    "en": [
      "if you want to support my channel I accept Bitcoin and etherion donations via the addresses in the description"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, я принимаю пожертвования биткойнами и эфиром по адресам в описании"
    ]
  },
  {
    "time": [
      459.953831,
      463.232987
    ],
    "en": [
      "I am also a brave verified publisher"
    ],
    "ru": [
      "Я также храбрый проверенный издатель"
    ]
  },
  {
    "time": [
      463.232987,
      468.275869
    ],
    "en": [
      "and accept bat or basic attention token donations in the brave browser"
    ],
    "ru": [
      "и принимайте пожертвования летучих мышей или токенов основного внимания в смелом браузере"
    ]
  },
  {
    "time": [
      468.275869,
      468.275869
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
      468.275869,
      468.275869
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
      468.275869,
      468.275869
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]