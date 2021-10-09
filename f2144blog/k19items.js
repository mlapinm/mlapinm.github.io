let objs = [
  {
    "time": [
      0.0,
      4.650826
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
      4.650826,
      8.083105
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
      8.083105,
      16.302715
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
      16.302715,
      21.878361
    ],
    "en": [
      "in this lab we will take another look at port security"
    ],
    "ru": [
      "в этой лабораторной работе мы еще раз рассмотрим безопасность портов."
    ]
  },
  {
    "time": [
      21.878361,
      25.311654
    ],
    "en": [
      "although we will certainly revisit it again"
    ],
    "ru": [
      "хотя мы обязательно вернемся к нему снова"
    ]
  },
  {
    "time": [
      25.311654,
      28.752842
    ],
    "en": [
      "this lab will be the final one in this introductory series"
    ],
    "ru": [
      "эта лабораторная работа будет последней в этой вводной серии"
    ]
  },
  {
    "time": [
      28.752842,
      33.602904
    ],
    "en": [
      "in the previous lab we configured sticky MAC address learning"
    ],
    "ru": [
      "в предыдущей лабораторной работе мы настроили изучение закрепленных MAC-адресов."
    ]
  },
  {
    "time": [
      33.602904,
      44.957764
    ],
    "en": [
      "however this time we will manually configure the MAC addresses of pc1 & pc2 as secure MAC addresses on switch 1 and switch 2 respectively"
    ],
    "ru": [
      "однако на этот раз мы вручную настроим MAC-адреса pc1 и pc2 как безопасные MAC-адреса на коммутаторе 1 и коммутаторе 2 соответственно."
    ]
  },
  {
    "time": [
      44.957764,
      54.819091
    ],
    "en": [
      "step one is to ping from pc1 to pc2 2 generate traffic 52.74062 let's go on pc one"
    ],
    "ru": [
      "Шаг первый - пинговать с pc1 на pc2 2 генерировать трафик 52.74062 давайте перейдем к pc one"
    ]
  },
  {
    "time": [
      54.819091,
      60.786883
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
      60.786883,
      62.431795
    ],
    "en": [
      "there we go"
    ],
    "ru": [
      "вот и мы"
    ]
  },
  {
    "time": [
      62.431795,
      67.360461
    ],
    "en": [
      "step two is to view the MAC address table of switch one"
    ],
    "ru": [
      "Шаг второй - просмотреть таблицу MAC-адресов первого коммутатора."
    ]
  },
  {
    "time": [
      67.360461,
      73.229033
    ],
    "en": [
      "switch one should have dynamically learned the MAC address of PC one on f0 2"
    ],
    "ru": [
      "коммутатор должен был динамически узнать MAC-адрес ПК один на f0 2"
    ]
  },
  {
    "time": [
      73.229033,
      77.807698
    ],
    "en": [
      "and the MAC addresses of switch 2 and PC 2 on f0 1"
    ],
    "ru": [
      "и MAC-адреса коммутатора 2 и ПК 2 на f0 1"
    ]
  },
  {
    "time": [
      77.807698,
      80.037421
    ],
    "en": [
      "let's check on switch 1"
    ],
    "ru": [
      "давай проверим на переключателе 1"
    ]
  },
  {
    "time": [
      80.037421,
      84.784435
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
      84.784435,
      91.764687
    ],
    "en": [
      "as expected there are two MAC addresses on F 0 1 and 1 MAC address on F 0 2"
    ],
    "ru": [
      "как и ожидалось, есть два MAC-адреса на F 0 1 и 1 MAC-адрес на F 0 2"
    ]
  },
  {
    "time": [
      91.764687,
      98.982553
    ],
    "en": [
      "we don't know which of the two addresses on F 0 1 is switch 2 and which is PC 2"
    ],
    "ru": [
      "мы не знаем, какой из двух адресов на F 0 1 является переключателем 2, а какой - ПК 2"
    ]
  },
  {
    "time": [
      98.982553,
      101.054749
    ],
    "en": [
      "but that doesn't matter in this lab"
    ],
    "ru": [
      "но это не имеет значения в этой лаборатории"
    ]
  },
  {
    "time": [
      101.054749,
      103.784198
    ],
    "en": [
      "we just want to know the MAC address of PC 1"
    ],
    "ru": [
      "мы просто хотим знать MAC-адрес ПК 1"
    ]
  },
  {
    "time": [
      103.784198,
      105.141063
    ],
    "en": [
      "which is this"
    ],
    "ru": [
      "что это"
    ]
  },
  {
    "time": [
      105.141063,
      114.395773
    ],
    "en": [
      "step three is to enable port security on switch ones f02 interface"
    ],
    "ru": [
      "Шаг третий - включить безопасность портов на интерфейсе f02 коммутатора"
    ]
  },
  {
    "time": [
      114.395773,
      118.494656
    ],
    "en": [
      "and manually configure PC ones MAC address as a secure MAC address"
    ],
    "ru": [
      "и вручную настроить MAC-адрес ПК как безопасный MAC-адрес"
    ]
  },
  {
    "time": [
      118.494656,
      122.972171
    ],
    "en": [
      "first let me copy the MAC address of PC one"
    ],
    "ru": [
      "сначала позвольте мне скопировать MAC-адрес ПК один"
    ]
  },
  {
    "time": [
      122.972171,
      127.844823
    ],
    "en": [
      "there we go now let's configure the f02 interface"
    ],
    "ru": [
      "поехали, теперь давайте настроим интерфейс f02"
    ]
  },
  {
    "time": [
      127.844823,
      136.651881
    ],
    "en": [
      "conf t interface f0 2 132.50079 remember we have to configure it as an access port first"
    ],
    "ru": [
      "conf t interface f0 2 132.50079 помните, что мы должны сначала настроить его как порт доступа"
    ]
  },
  {
    "time": [
      136.651881,
      142.164891
    ],
    "en": [
      "so switch port mode access switch port port security"
    ],
    "ru": [
      "поэтому переключатель режима порта доступа переключатель порта безопасности порта"
    ]
  },
  {
    "time": [
      142.164891,
      144.377964
    ],
    "en": [
      "okay we've done that before"
    ],
    "ru": [
      "хорошо, мы делали это раньше"
    ]
  },
  {
    "time": [
      144.377964,
      148.910675
    ],
    "en": [
      "now to manually configure a secure MAC address we use this command"
    ],
    "ru": [
      "теперь, чтобы вручную настроить безопасный MAC-адрес, мы используем эту команду"
    ]
  },
  {
    "time": [
      148.910675,
      154.948723
    ],
    "en": [
      "switch port port security MAC address followed by the MAC address we want to configure"
    ],
    "ru": [
      "порт коммутатора безопасность порта MAC-адрес, за которым следует MAC-адрес, который мы хотим настроить"
    ]
  },
  {
    "time": [
      154.948723,
      156.839176
    ],
    "en": [
      "which I will paste right here"
    ],
    "ru": [
      "который я вставлю прямо здесь"
    ]
  },
  {
    "time": [
      156.839176,
      159.017969
    ],
    "en": [
      "there we go"
    ],
    "ru": [
      "вот и мы"
    ]
  },
  {
    "time": [
      159.017969,
      167.008284
    ],
    "en": [
      "next we must repeat the process on switch 2 for PC 2"
    ],
    "ru": [
      "Затем мы должны повторить процесс на переключателе 2 для ПК 2"
    ]
  },
  {
    "time": [
      167.008284,
      173.387574
    ],
    "en": [
      "now the MAC address of PC 2 should already be in the MAC address table of switch 2"
    ],
    "ru": [
      "теперь MAC-адрес ПК 2 уже должен быть в таблице MAC-адресов коммутатора 2"
    ]
  },
  {
    "time": [
      173.387574,
      178.937737
    ],
    "en": [
      "the default aging time of a MAC address in the MAC address table is 5 minutes"
    ],
    "ru": [
      "по умолчанию время устаревания MAC-адреса в таблице MAC-адресов составляет 5 минут."
    ]
  },
  {
    "time": [
      178.937737,
      183.124117
    ],
    "en": [
      "meaning if nothing is heard from that address on the interface for 5 minutes"
    ],
    "ru": [
      "означает, что с этого адреса на интерфейсе ничего не слышно в течение 5 минут"
    ]
  },
  {
    "time": [
      183.124117,
      185.321977
    ],
    "en": [
      "it is cleared from the table"
    ],
    "ru": [
      "это очищено от таблицы"
    ]
  },
  {
    "time": [
      185.321977,
      191.016553
    ],
    "en": [
      "each time a packet from that address is received the timer resets to 5 minutes"
    ],
    "ru": [
      "каждый раз при получении пакета с этого адреса таймер сбрасывается до 5 минут."
    ]
  },
  {
    "time": [
      191.016553,
      195.189264
    ],
    "en": [
      "however let's ping from PC to 2 PC one just in case"
    ],
    "ru": [
      "однако давайте пингуем с ПК на 2 ПК один на всякий случай"
    ]
  },
  {
    "time": [
      195.189264,
      201.171544
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
      201.171544,
      203.253126
    ],
    "en": [
      "there we go"
    ],
    "ru": [
      "вот и мы"
    ]
  },
  {
    "time": [
      203.253126,
      207.177134
    ],
    "en": [
      "now under switch 2"
    ],
    "ru": [
      "теперь под переключателем 2"
    ]
  },
  {
    "time": [
      207.177134,
      215.851521
    ],
    "en": [
      "enable show MAC address table 211.6531 again there are two addresses on the f01 interface"
    ],
    "ru": [
      "включить показать таблицу MAC-адресов 211.6531 снова, есть два адреса на интерфейсе f01"
    ]
  },
  {
    "time": [
      215.851521,
      220.282994
    ],
    "en": [
      "those of switch 1 and pc 1 and 1 on the f02 interface"
    ],
    "ru": [
      "переключателя 1 и ПК 1 и 1 на интерфейсе f02"
    ]
  },
  {
    "time": [
      220.282994,
      221.952112
    ],
    "en": [
      "that of pc 2"
    ],
    "ru": [
      "тот ПК 2"
    ]
  },
  {
    "time": [
      221.952112,
      225.822703
    ],
    "en": [
      "which is the one we're interested in now 224.31131 so I'll copy that"
    ],
    "ru": [
      "который нас сейчас интересует 224.31131, поэтому я скопирую это"
    ]
  },
  {
    "time": [
      225.822703,
      246.147486
    ],
    "en": [
      "ok now let's configure the interface 230.61247 conf t interface f0 2 switch port mode access switch port port security switch port port security MAC address and now I'll paste in PC 2 MAC address"
    ],
    "ru": [
      "хорошо, теперь давайте настроим интерфейс 230.61247 conf t interface f0 2 switch port mode access switch port port security switch port port security MAC address and now I paste in PC 2 MAC address"
    ]
  },
  {
    "time": [
      246.147486,
      248.245714
    ],
    "en": [
      "there we go"
    ],
    "ru": [
      "вот и мы"
    ]
  },
  {
    "time": [
      248.245714,
      253.136939
    ],
    "en": [
      "now let's do a quick ping from pc1 to pc2 to test"
    ],
    "ru": [
      "теперь давайте сделаем быстрый пинг с pc1 на pc2, чтобы проверить"
    ]
  },
  {
    "time": [
      253.136939,
      254.564681
    ],
    "en": [
      "which is step 5"
    ],
    "ru": [
      "что шаг 5"
    ]
  },
  {
    "time": [
      254.564681,
      258.781179
    ],
    "en": [
      "if we configure the correct addresses there should be no problems"
    ],
    "ru": [
      "если настроим правильные адреса, проблем быть не должно"
    ]
  },
  {
    "time": [
      258.781179,
      266.092088
    ],
    "en": [
      "ping 192.168.1.12 it works"
    ],
    "ru": [
      "пинг 192.168.1.12 работает"
    ]
  },
  {
    "time": [
      266.092088,
      273.631862
    ],
    "en": [
      "now on step 6 we're going to try to trigger a port security violation"
    ],
    "ru": [
      "теперь на шаге 6 мы попытаемся вызвать нарушение безопасности порта"
    ]
  },
  {
    "time": [
      273.631862,
      275.772892
    ],
    "en": [
      "let's remove the cables first"
    ],
    "ru": [
      "давайте сначала удалим кабели"
    ]
  },
  {
    "time": [
      275.772892,
      278.772661
    ],
    "en": [
      "which we can do with this tool in packet tracer"
    ],
    "ru": [
      "что мы можем сделать с помощью этого инструмента в пакетном трассировщике"
    ]
  },
  {
    "time": [
      278.772661,
      288.779013
    ],
    "en": [
      "there we go now I'll connect PC one to switch to by clicking on the cable down here"
    ],
    "ru": [
      "Итак, теперь я подключу компьютер, чтобы переключиться на него, нажав на кабель здесь"
    ]
  },
  {
    "time": [
      288.779013,
      295.660237
    ],
    "en": [
      "there we go and now I'll connect PC two to switch one"
    ],
    "ru": [
      "вот и мы, и теперь я подключу два компьютера, чтобы переключить один"
    ]
  },
  {
    "time": [
      295.660237,
      298.935887
    ],
    "en": [
      "there we go"
    ],
    "ru": [
      "вот и мы"
    ]
  },
  {
    "time": [
      298.935887,
      305.211508
    ],
    "en": [
      "step seven is to ping from pc1 to pc2"
    ],
    "ru": [
      "Шаг седьмой - пинг с ПК1 на ПК2"
    ]
  },
  {
    "time": [
      305.211508,
      309.193178
    ],
    "en": [
      "what do you expect will be the result of this ping"
    ],
    "ru": [
      "как вы ожидаете, будет результатом этого пинга"
    ]
  },
  {
    "time": [
      309.193178,
      316.887278
    ],
    "en": [
      "we manually configured the MAC address of PC 1 as a secure MAC address on switch ones f02 interface"
    ],
    "ru": [
      "мы вручную настроили MAC-адрес ПК 1 как безопасный MAC-адрес на интерфейсе f02 коммутатора"
    ]
  },
  {
    "time": [
      316.887278,
      324.741179
    ],
    "en": [
      "and manually configured the MAC address of PC 2 as a secure MAC address on switch twos f02 interface"
    ],
    "ru": [
      "и вручную настроил MAC-адрес ПК 2 в качестве безопасного MAC-адреса на интерфейсе коммутатора 2 f02."
    ]
  },
  {
    "time": [
      324.741179,
      331.986455
    ],
    "en": [
      "remember the default number of secure MAC addresses on the port security enabled interface is 1"
    ],
    "ru": [
      "помните, что по умолчанию количество безопасных MAC-адресов на интерфейсе с включенной защитой порта равно 1"
    ]
  },
  {
    "time": [
      331.986455,
      336.556598
    ],
    "en": [
      "so if we attempt a ping from pc1 to pc2 now"
    ],
    "ru": [
      "поэтому, если мы сейчас попытаемся пинговать с pc1 на pc2"
    ]
  },
  {
    "time": [
      336.556598,
      344.728699
    ],
    "en": [
      "a port security violation should be triggered when the packet with a different MAC address is received on the port security enabled interface"
    ],
    "ru": [
      "нарушение безопасности порта должно быть инициировано, когда пакет с другим MAC-адресом получен на интерфейсе с включенной защитой порта"
    ]
  },
  {
    "time": [
      344.728699,
      347.688827
    ],
    "en": [
      "what exactly will happen"
    ],
    "ru": [
      "что именно произойдет"
    ]
  },
  {
    "time": [
      347.688827,
      354.409897
    ],
    "en": [
      "if you remember from a previous lab the default action in the event of a port security violation is shut down"
    ],
    "ru": [
      "если вы помните из предыдущей лабораторной работы, действие по умолчанию в случае нарушения безопасности порта - отключение"
    ]
  },
  {
    "time": [
      354.409897,
      357.610322
    ],
    "en": [
      "meaning that the switch port will enter an error disabled state"
    ],
    "ru": [
      "это означает, что порт коммутатора войдет в состояние отключения из-за ошибки"
    ]
  },
  {
    "time": [
      357.610322,
      359.437648
    ],
    "en": [
      "effectively shutting it down"
    ],
    "ru": [
      "эффективно выключить его"
    ]
  },
  {
    "time": [
      359.437648,
      362.869803
    ],
    "en": [
      "let's try that ping on PC 1"
    ],
    "ru": [
      "давайте попробуем этот пинг на ПК 1"
    ]
  },
  {
    "time": [
      362.869803,
      371.172863
    ],
    "en": [
      "ping 192.168.1 12 as you can see the ping fails"
    ],
    "ru": [
      "ping 192.168.1 12, как видите, ping не работает"
    ]
  },
  {
    "time": [
      371.172863,
      375.184603
    ],
    "en": [
      "also if you check the port lights on packet tracer"
    ],
    "ru": [
      "также, если вы проверите индикаторы портов на трассировщике пакетов"
    ]
  },
  {
    "time": [
      375.184603,
      379.838564
    ],
    "en": [
      "you'll notice that the port light on the f02 interface of switch 2 has gone red"
    ],
    "ru": [
      "вы заметите, что индикатор порта на интерфейсе f02 коммутатора 2 стал красным"
    ]
  },
  {
    "time": [
      379.838564,
      382.730312
    ],
    "en": [
      "this means it is shut down"
    ],
    "ru": [
      "это означает, что он выключен"
    ]
  },
  {
    "time": [
      382.730312,
      387.893378
    ],
    "en": [
      "however why hasn't the f02 interface of switch 1 been shut down"
    ],
    "ru": [
      "однако почему не был отключен интерфейс f02 переключателя 1"
    ]
  },
  {
    "time": [
      387.893378,
      393.558707
    ],
    "en": [
      "this is because the packet was stopped right at the f02 interface of switch 2"
    ],
    "ru": [
      "это потому, что пакет был остановлен прямо на интерфейсе f02 коммутатора 2"
    ]
  },
  {
    "time": [
      393.558707,
      398.862798
    ],
    "en": [
      "so it never reached PC 2 and thus PC to never sent a reply to the ping"
    ],
    "ru": [
      "поэтому он никогда не достигал ПК 2 и, следовательно, ПК никогда не отправлял ответ на пинг"
    ]
  },
  {
    "time": [
      398.862798,
      403.250929
    ],
    "en": [
      "which would have triggered a port security violation on switch 1"
    ],
    "ru": [
      "что вызвало бы нарушение безопасности порта на коммутаторе 1"
    ]
  },
  {
    "time": [
      403.250929,
      409.919094
    ],
    "en": [
      "step 8 is to reconnect the cables"
    ],
    "ru": [
      "Шаг 8 - переподключить кабели"
    ]
  },
  {
    "time": [
      409.919094,
      412.955113
    ],
    "en": [
      "so I'll remove these cables first"
    ],
    "ru": [
      "так что я сначала сниму эти кабели"
    ]
  },
  {
    "time": [
      412.955113,
      419.582863
    ],
    "en": [
      "there we go now let's connect them as they were originally"
    ],
    "ru": [
      "поехали, теперь давайте соединим их, как они были изначально"
    ]
  },
  {
    "time": [
      419.582863,
      423.604938
    ],
    "en": [
      "pc 1 switch 1"
    ],
    "ru": [
      "шт 1 переключатель 1"
    ]
  },
  {
    "time": [
      423.604938,
      432.569194
    ],
    "en": [
      "there we go and now pc 2 to switch 2 there we go"
    ],
    "ru": [
      "вот и мы, и теперь компьютер 2, чтобы переключить 2, мы идем"
    ]
  },
  {
    "time": [
      432.569194,
      438.091024
    ],
    "en": [
      "you now let's ping from pc1 to pc2"
    ],
    "ru": [
      "Теперь давайте пингуем с ПК1 на ПК2"
    ]
  },
  {
    "time": [
      438.091024,
      440.965717
    ],
    "en": [
      "do you expect a ping too work"
    ],
    "ru": [
      "Вы ожидаете, что пинг тоже сработает?"
    ]
  },
  {
    "time": [
      440.965717,
      445.840699
    ],
    "en": [
      "PC one is once again connected to switch ones f02 interface"
    ],
    "ru": [
      "ПК один снова подключен к коммутатору интерфейс f02"
    ]
  },
  {
    "time": [
      445.840699,
      450.097201
    ],
    "en": [
      "and its MAC address is configured on the interface as a secure address"
    ],
    "ru": [
      "и его MAC-адрес настроен на интерфейсе как безопасный адрес"
    ]
  },
  {
    "time": [
      450.097201,
      451.627587
    ],
    "en": [
      "so it should be fine"
    ],
    "ru": [
      "так что все должно быть в порядке"
    ]
  },
  {
    "time": [
      451.627587,
      458.201929
    ],
    "en": [
      "likewise for PC 2 it is now connected again to switch twos f02 interface"
    ],
    "ru": [
      "аналогично для ПК 2 он теперь снова подключен для переключения интерфейса twos f02"
    ]
  },
  {
    "time": [
      458.201929,
      463.778108
    ],
    "en": [
      "and its MAC address is configured as a secure address on switch twos f02 interface"
    ],
    "ru": [
      "и его MAC-адрес настроен как безопасный адрес на интерфейсе коммутатора 2 f02."
    ]
  },
  {
    "time": [
      463.778108,
      467.340186
    ],
    "en": [
      "let's try that ping on PC one"
    ],
    "ru": [
      "давай попробуем этот пинг на ПК"
    ]
  },
  {
    "time": [
      467.340186,
      471.428797
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
      471.428797,
      475.192785
    ],
    "en": [
      "it doesn't work"
    ],
    "ru": [
      "это не работает"
    ]
  },
  {
    "time": [
      475.192785,
      480.662842
    ],
    "en": [
      "why is that even though we connected the cables back the way they are supposed to be"
    ],
    "ru": [
      "почему, несмотря на то, что мы подключили кабели так, как они должны быть"
    ]
  },
  {
    "time": [
      480.662842,
      485.807246
    ],
    "en": [
      "well switch twos f02 interface is still down"
    ],
    "ru": [
      "ну switch twos интерфейс f02 все еще не работает"
    ]
  },
  {
    "time": [
      485.807246,
      495.116752
    ],
    "en": [
      "it doesn't automatically recover and become enabled again 489.79431 it can be configured to automatically recover from a port security error"
    ],
    "ru": [
      "он не восстанавливается автоматически и не включается снова 489.79431 его можно настроить на автоматическое восстановление после ошибки безопасности порта"
    ]
  },
  {
    "time": [
      495.116752,
      497.525238
    ],
    "en": [
      "but that will be a topic for another lab"
    ],
    "ru": [
      "но это будет тема для другой лаборатории"
    ]
  },
  {
    "time": [
      497.525238,
      500.416335
    ],
    "en": [
      "for now let's do it manually"
    ],
    "ru": [
      "а пока сделаем это вручную"
    ]
  },
  {
    "time": [
      500.416335,
      502.974416
    ],
    "en": [
      "I'll go on switch 2"
    ],
    "ru": [
      "Я пойду на выключатель 2"
    ]
  },
  {
    "time": [
      502.974416,
      507.676155
    ],
    "en": [
      "and first let's check the status of the interface"
    ],
    "ru": [
      "и сначала проверим статус интерфейса"
    ]
  },
  {
    "time": [
      507.676155,
      511.397494
    ],
    "en": [
      "show interface f02"
    ],
    "ru": [
      "показать интерфейс f02"
    ]
  },
  {
    "time": [
      511.397494,
      515.878198
    ],
    "en": [
      "as you can see here the interface is down"
    ],
    "ru": [
      "как вы можете видеть здесь, интерфейс не работает"
    ]
  },
  {
    "time": [
      515.878198,
      518.548093
    ],
    "en": [
      "and it's in an error disabled State"
    ],
    "ru": [
      "и он находится в состоянии отключения из-за ошибки"
    ]
  },
  {
    "time": [
      518.548093,
      522.052855
    ],
    "en": [
      "how do we manually fix this"
    ],
    "ru": [
      "как мы вручную исправить это"
    ]
  },
  {
    "time": [
      522.052855,
      523.681029
    ],
    "en": [
      "it's simple"
    ],
    "ru": [
      "это просто"
    ]
  },
  {
    "time": [
      523.681029,
      534.473503
    ],
    "en": [
      "shutdown no shutdown 527.97717 this will reset the interface and it will no longer be in an error disabled State"
    ],
    "ru": [
      "shutdown no shutdown 527.97717 это приведет к сбросу интерфейса, и он больше не будет находиться в состоянии отключения из-за ошибки"
    ]
  },
  {
    "time": [
      534.473503,
      541.765898
    ],
    "en": [
      "that's how you manually recover an error disabled interface with the command shutdown followed by no shutdown"
    ],
    "ru": [
      "вот как вы вручную восстанавливаете интерфейс с отключенной ошибкой с помощью команды shutdown, а затем no shutdown"
    ]
  },
  {
    "time": [
      541.765898,
      551.429449
    ],
    "en": [
      "finally let's do one last ping from pc1 to pc2"
    ],
    "ru": [
      "наконец, давайте сделаем последний пинг с pc1 на pc2"
    ]
  },
  {
    "time": [
      551.429449,
      553.996027
    ],
    "en": [
      "just to make sure that everything is working right again"
    ],
    "ru": [
      "просто чтобы убедиться, что все снова работает правильно"
    ]
  },
  {
    "time": [
      553.996027,
      557.377987
    ],
    "en": [
      "after we did that little experiment with port security violations"
    ],
    "ru": [
      "после того, как мы провели этот небольшой эксперимент с нарушениями безопасности портов"
    ]
  },
  {
    "time": [
      557.377987,
      566.333083
    ],
    "en": [
      "I'll go on PC one one more time 561.15042 ping 192.168.1.12"
    ],
    "ru": [
      "Зайду еще раз на ПК 561.15042 пинг 192.168.1.12"
    ]
  },
  {
    "time": [
      566.333083,
      569.403244
    ],
    "en": [
      "it works"
    ],
    "ru": [
      "оно работает"
    ]
  },
  {
    "time": [
      569.403244,
      571.030848
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
      571.030848,
      576.920964
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
      576.920964,
      580.158092
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
      580.158092,
      581.897222
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
      581.897222,
      586.600419
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
      586.600419,
      591.854253
    ],
    "en": [
      "if you want to support my channel please consider contributing to my patreon"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, пожалуйста, подумайте о том, чтобы внести свой вклад в мой patreon"
    ]
  },
  {
    "time": [
      591.854253,
      595.367045
    ],
    "en": [
      "patreon comm slash Jeremy's IT lab"
    ],
    "ru": [
      "patreon comm слэш ИТ-лаборатория Джереми"
    ]
  },
  {
    "time": [
      595.367045,
      600.988519
    ],
    "en": [
      "I accept Bitcoin and aetherium donations via the addresses in the description"
    ],
    "ru": [
      "Я принимаю пожертвования биткойнами и эфириумом по адресам в описании"
    ]
  },
  {
    "time": [
      600.988519,
      609.742551
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
      609.742551,
      609.742551
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
      609.742551,
      609.742551
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
      609.742551,
      609.742551
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]