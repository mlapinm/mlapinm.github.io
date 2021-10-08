let objs = [
  {
    "time": [
      0.0,
      4.080929
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
      4.080929,
      7.403355
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
      7.403355,
      14.398207
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
      14.398207,
      19.77349
    ],
    "en": [
      "also please subscribe to the channel for more labs like this"
    ],
    "ru": [
      "также подпишитесь на канал, чтобы увидеть больше подобных лабораторий"
    ]
  },
  {
    "time": [
      19.77349,
      23.600814
    ],
    "en": [
      "in this lab we will configure ether channel"
    ],
    "ru": [
      "в этой лабораторной работе мы настроим эфирный канал"
    ]
  },
  {
    "time": [
      23.600814,
      30.140836
    ],
    "en": [
      "ether channel is used to aggregates which interfaces to operate as a single logical interface"
    ],
    "ru": [
      "эфирный канал используется для агрегирования интерфейсов, которые будут работать как единый логический интерфейс."
    ]
  },
  {
    "time": [
      30.140836,
      32.672809
    ],
    "en": [
      "what is the advantage of that"
    ],
    "ru": [
      "в чем преимущество этого"
    ]
  },
  {
    "time": [
      32.672809,
      35.396369
    ],
    "en": [
      "well in the previous couple labs"
    ],
    "ru": [
      "хорошо в предыдущей паре лабораторных работ"
    ]
  },
  {
    "time": [
      35.396369,
      37.21358
    ],
    "en": [
      "we looked at spanning tree protocol"
    ],
    "ru": [
      "мы посмотрели на протокол связующего дерева"
    ]
  },
  {
    "time": [
      37.21358,
      41.119589
    ],
    "en": [
      "as you can tell by the port lights in packet tracer"
    ],
    "ru": [
      "как вы можете судить по индикаторам портов в пакетном трассировщике"
    ]
  },
  {
    "time": [
      41.119589,
      43.722764
    ],
    "en": [
      "only one link is active between each switch"
    ],
    "ru": [
      "только одна ссылка активна между каждым переключателем"
    ]
  },
  {
    "time": [
      43.722764,
      50.67392
    ],
    "en": [
      "we have four fast ethernet links connecting to switch 1 and switch 2 for example"
    ],
    "ru": [
      "у нас есть четыре быстрых канала Ethernet, подключенных, например, к коммутатору 1 и коммутатору 2"
    ]
  },
  {
    "time": [
      50.67392,
      53.328046
    ],
    "en": [
      "but only one link is actually forwarding information"
    ],
    "ru": [
      "но только одна ссылка на самом деле пересылает информацию"
    ]
  },
  {
    "time": [
      53.328046,
      60.438363
    ],
    "en": [
      "those other links still provide redundancy in case the f01 interface fails for example"
    ],
    "ru": [
      "эти другие ссылки по-прежнему обеспечивают избыточность на случай, например, сбоя интерфейса f01"
    ]
  },
  {
    "time": [
      60.438363,
      63.273828
    ],
    "en": [
      "but it would be better if we could make use of them"
    ],
    "ru": [
      "но было бы лучше, если бы мы могли использовать их"
    ]
  },
  {
    "time": [
      63.273828,
      64.692921
    ],
    "en": [
      "let's get started"
    ],
    "ru": [
      "Давайте начнем"
    ]
  },
  {
    "time": [
      64.692921,
      70.491628
    ],
    "en": [
      "the first part is to analyze this topology from a spanning tree perspective"
    ],
    "ru": [
      "первая часть - проанализировать эту топологию с точки зрения связующего дерева."
    ]
  },
  {
    "time": [
      70.491628,
      75.162988
    ],
    "en": [
      "now you can tell all of this by looking at the port lights and packet tracer"
    ],
    "ru": [
      "теперь вы можете сказать все это, посмотрев на индикаторы портов и трассировщик пакетов."
    ]
  },
  {
    "time": [
      75.162988,
      77.379405
    ],
    "en": [
      "but let's use some show commands to confirm"
    ],
    "ru": [
      "но давайте воспользуемся некоторыми командами показа, чтобы подтвердить"
    ]
  },
  {
    "time": [
      77.379405,
      80.281401
    ],
    "en": [
      "which switch is the root bridge"
    ],
    "ru": [
      "какой коммутатор является корневым мостом"
    ]
  },
  {
    "time": [
      80.281401,
      83.82979
    ],
    "en": [
      "well all of switched ones port lights are on so"
    ],
    "ru": [
      "ну, все переключатели портов горят, так что"
    ]
  },
  {
    "time": [
      83.82979,
      84.859132
    ],
    "en": [
      "there's our answer"
    ],
    "ru": [
      "вот наш ответ"
    ]
  },
  {
    "time": [
      84.859132,
      86.830447
    ],
    "en": [
      "let's go on switch one to confirm"
    ],
    "ru": [
      "давай перейдем к переключателю, чтобы подтвердить"
    ]
  },
  {
    "time": [
      86.830447,
      92.440016
    ],
    "en": [
      "enable show spanning tree"
    ],
    "ru": [
      "включить показывать связующее дерево"
    ]
  },
  {
    "time": [
      92.440016,
      95.934528
    ],
    "en": [
      "ok this bridge is the root"
    ],
    "ru": [
      "хорошо, этот мост - корень"
    ]
  },
  {
    "time": [
      95.934528,
      98.796977
    ],
    "en": [
      "so all of the interfaces here are designated"
    ],
    "ru": [
      "так что все интерфейсы здесь обозначены"
    ]
  },
  {
    "time": [
      98.796977,
      99.909085
    ],
    "en": [
      "they're forwarding"
    ],
    "ru": [
      "они пересылают"
    ]
  },
  {
    "time": [
      99.909085,
      103.9787
    ],
    "en": [
      "now how do these other switches choose their route ports"
    ],
    "ru": [
      "теперь, как эти другие коммутаторы выбирают свои порты маршрута"
    ]
  },
  {
    "time": [
      103.9787,
      108.25328
    ],
    "en": [
      "whichever path they select the route cost is the same"
    ],
    "ru": [
      "какой бы путь они ни выбрали, стоимость маршрута одинакова"
    ]
  },
  {
    "time": [
      108.25328,
      111.710219
    ],
    "en": [
      "and the neighboring switches bridge ID is the same"
    ],
    "ru": [
      "И идентификатор моста соседних коммутаторов такой же"
    ]
  },
  {
    "time": [
      111.710219,
      115.067702
    ],
    "en": [
      "so the next career the next criteria"
    ],
    "ru": [
      "так что следующая карьера следующие критерии"
    ]
  },
  {
    "time": [
      115.067702,
      118.81226
    ],
    "en": [
      "and this is very important is the neighbors port ID"
    ],
    "ru": [
      "и это очень важно, это ID порта соседей"
    ]
  },
  {
    "time": [
      118.81226,
      122.388428
    ],
    "en": [
      "the port ID consists of a port priority"
    ],
    "ru": [
      "идентификатор порта состоит из приоритета порта"
    ]
  },
  {
    "time": [
      122.388428,
      124.826342
    ],
    "en": [
      "which is 128 by default"
    ],
    "ru": [
      "что по умолчанию 128"
    ]
  },
  {
    "time": [
      124.826342,
      126.4548
    ],
    "en": [
      "and the port number"
    ],
    "ru": [
      "и номер порта"
    ]
  },
  {
    "time": [
      126.4548,
      130.528813
    ],
    "en": [
      "the lowest port ID wins and is selected as the root port"
    ],
    "ru": [
      "Самый низкий идентификатор порта побеждает и выбирается в качестве корневого порта"
    ]
  },
  {
    "time": [
      130.528813,
      133.93582
    ],
    "en": [
      "keep in mind this is the neighbors I D"
    ],
    "ru": [
      "имейте в виду, это соседи I D"
    ]
  },
  {
    "time": [
      133.93582,
      135.880286
    ],
    "en": [
      "not the local switches port ID"
    ],
    "ru": [
      "не идентификатор порта локального коммутатора"
    ]
  },
  {
    "time": [
      135.880286,
      141.26727
    ],
    "en": [
      "that is why in this topology between switch 1 and switch 2"
    ],
    "ru": [
      "поэтому в этой топологии между коммутатором 1 и коммутатором 2"
    ]
  },
  {
    "time": [
      141.26727,
      146.100081
    ],
    "en": [
      "and between switch three and switch 4 I connected F 0 1 to F 0 for"
    ],
    "ru": [
      "и между переключателем 3 и переключателем 4 я подключил F 0 1 к F 0 для"
    ]
  },
  {
    "time": [
      146.100081,
      148.429492
    ],
    "en": [
      "f 0 2 to F 0 3 etc"
    ],
    "ru": [
      "от f 0 2 до F 0 3 и т. д."
    ]
  },
  {
    "time": [
      148.429492,
      153.788109
    ],
    "en": [
      "instead of F 0 1 to F 0 1 F 0 2 to F 0 2 to demonstrate this"
    ],
    "ru": [
      "вместо F 0 1 на F 0 1 F 0 2 на F 0 2, чтобы продемонстрировать это"
    ]
  },
  {
    "time": [
      153.788109,
      161.176884
    ],
    "en": [
      "from switch tunes perspective switch ones F 0 1 has the lowest port ID"
    ],
    "ru": [
      "из переключателей настраивает перспективные переключатели F 0 1 имеет наименьший идентификатор порта"
    ]
  },
  {
    "time": [
      161.176884,
      166.236771
    ],
    "en": [
      "so it chooses its interface connected to switch ones F 0 1 interface"
    ],
    "ru": [
      "поэтому он выбирает свой интерфейс, подключенный к переключателям F 0 1 interface"
    ]
  },
  {
    "time": [
      166.236771,
      170.562417
    ],
    "en": [
      "which is its own F 0 4 interface as the root port"
    ],
    "ru": [
      "который является собственным интерфейсом F 0 4 в качестве корневого порта"
    ]
  },
  {
    "time": [
      170.562417,
      176.218426
    ],
    "en": [
      "the same goes for switch 4 which also selected its F 0 4 interface"
    ],
    "ru": [
      "то же самое касается переключателя 4, который также выбрал свой интерфейс F 0 4"
    ]
  },
  {
    "time": [
      176.218426,
      181.08024
    ],
    "en": [
      "switch 3 chose its G 0 1 interface"
    ],
    "ru": [
      "переключатель 3 выбрал свой интерфейс G 0 1"
    ]
  },
  {
    "time": [
      181.08024,
      183.839628
    ],
    "en": [
      "which is connected to switch to is G 0 1 interface"
    ],
    "ru": [
      "который подключен для переключения на интерфейс G 0 1"
    ]
  },
  {
    "time": [
      183.839628,
      188.81727
    ],
    "en": [
      "also because switch to SG 0 1 interface has a lower port ID"
    ],
    "ru": [
      "также потому, что коммутатор на интерфейс SG 0 1 имеет более низкий идентификатор порта"
    ]
  },
  {
    "time": [
      188.81727,
      190.883006
    ],
    "en": [
      "then switch to SG 0 2 interface"
    ],
    "ru": [
      "затем переключитесь на интерфейс SG 0 2"
    ]
  },
  {
    "time": [
      190.883006,
      195.778381
    ],
    "en": [
      "so the interfaces across from the reports are designated"
    ],
    "ru": [
      "поэтому интерфейсы напротив отчетов обозначаются"
    ]
  },
  {
    "time": [
      195.778381,
      202.539514
    ],
    "en": [
      "now on the remaining links how did the switches choose which side would block and which side would designate their ports"
    ],
    "ru": [
      "теперь по оставшимся ссылкам, как коммутаторы выбирали, какая сторона будет блокировать, а какая сторона назначит свои порты"
    ]
  },
  {
    "time": [
      202.539514,
      205.096928
    ],
    "en": [
      "that is the route cost"
    ],
    "ru": [
      "это стоимость маршрута"
    ]
  },
  {
    "time": [
      205.096928,
      208.91432
    ],
    "en": [
      "switch 2 is closer to switch 1 than switch 3"
    ],
    "ru": [
      "переключатель 2 ближе к переключателю 1, чем переключатель 3"
    ]
  },
  {
    "time": [
      208.91432,
      214.258742
    ],
    "en": [
      "so it's side of the link is designated and switch 3 side is non designated blocking"
    ],
    "ru": [
      "так что это сторона ссылки обозначена, а сторона переключателя 3 не обозначена блокирующей"
    ]
  },
  {
    "time": [
      214.258742,
      221.509807
    ],
    "en": [
      "and switch 3 is closer to switch 1 then switch 4 is so switch 3 side is designated"
    ],
    "ru": [
      "и переключатель 3 ближе к переключателю 1, затем переключатель 4, поэтому сторона переключателя 3 обозначена"
    ]
  },
  {
    "time": [
      221.509807,
      224.227744
    ],
    "en": [
      "and switched 4 side is non designated or blocking"
    ],
    "ru": [
      "и переключенная 4 сторона не обозначена или блокируется"
    ]
  },
  {
    "time": [
      224.227744,
      229.929762
    ],
    "en": [
      "ok so that was just another review of spanning tree selection process"
    ],
    "ru": [
      "хорошо, это был просто еще один обзор процесса выбора связующего дерева"
    ]
  },
  {
    "time": [
      229.929762,
      232.754456
    ],
    "en": [
      "it also shows the reason we use ether channel"
    ],
    "ru": [
      "он также показывает причину, по которой мы используем эфирный канал"
    ]
  },
  {
    "time": [
      232.754456,
      235.524681
    ],
    "en": [
      "we want to take advantage of these redundant links"
    ],
    "ru": [
      "мы хотим воспользоваться этими избыточными ссылками"
    ]
  },
  {
    "time": [
      235.524681,
      237.168422
    ],
    "en": [
      "and have them all available for use"
    ],
    "ru": [
      "и сделать их все доступными для использования"
    ]
  },
  {
    "time": [
      237.168422,
      239.857924
    ],
    "en": [
      "rather than waiting for the active link to fail"
    ],
    "ru": [
      "вместо того, чтобы ждать, пока активная ссылка не сработает"
    ]
  },
  {
    "time": [
      239.857924,
      247.313797
    ],
    "en": [
      "so our first task is to configure a layer 2 ether channel between switch 1 and switch to"
    ],
    "ru": [
      "поэтому наша первая задача - настроить эфирный канал уровня 2 между коммутатором 1 и переключателем на"
    ]
  },
  {
    "time": [
      247.313797,
      249.843298
    ],
    "en": [
      "using a Cisco proprietary protocol"
    ],
    "ru": [
      "с использованием проприетарного протокола Cisco"
    ]
  },
  {
    "time": [
      249.843298,
      254.55849
    ],
    "en": [
      "that protocol is port aggregation protocol pagp"
    ],
    "ru": [
      "этот протокол является протоколом агрегации портов pagp"
    ]
  },
  {
    "time": [
      254.55849,
      257.758875
    ],
    "en": [
      "let's go on switch 1 and configure it"
    ],
    "ru": [
      "давайте перейдем к переключателю 1 и настроим его"
    ]
  },
  {
    "time": [
      257.758875,
      260.506267
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
      260.506267,
      265.00248
    ],
    "en": [
      "interface range F 0 1 2 4"
    ],
    "ru": [
      "диапазон интерфейса F 0 1 2 4"
    ]
  },
  {
    "time": [
      265.00248,
      269.477378
    ],
    "en": [
      "before I enter the commands I should mention some requirements of ether channel"
    ],
    "ru": [
      "прежде чем я введу команды, я должен упомянуть некоторые требования эфирного канала"
    ]
  },
  {
    "time": [
      269.477378,
      272.994566
    ],
    "en": [
      "regardless of whether using pagp or another method in"
    ],
    "ru": [
      "независимо от того, используется ли pagp или другой метод в"
    ]
  },
  {
    "time": [
      272.994566,
      276.335541
    ],
    "en": [
      "all ports involved must have the same configuration"
    ],
    "ru": [
      "все задействованные порты должны иметь одинаковую конфигурацию"
    ]
  },
  {
    "time": [
      276.335541,
      280.679486
    ],
    "en": [
      "that is the same duplex full or half"
    ],
    "ru": [
      "это тот же дуплекс полный или половинный"
    ]
  },
  {
    "time": [
      280.679486,
      282.966356
    ],
    "en": [
      "the same speed the same native"
    ],
    "ru": [
      "такая же скорость такая же родная"
    ]
  },
  {
    "time": [
      282.966356,
      286.905653
    ],
    "en": [
      "and allowed VLANs in the same switch port mode access or trunk"
    ],
    "ru": [
      "и разрешенные VLAN в том же режиме порта коммутатора или магистрали"
    ]
  },
  {
    "time": [
      286.905653,
      291.027331
    ],
    "en": [
      "both of these switches have the same configuration by default"
    ],
    "ru": [
      "оба этих переключателя по умолчанию имеют одинаковую конфигурацию"
    ]
  },
  {
    "time": [
      291.027331,
      292.215878
    ],
    "en": [
      "so that won't be a problem here"
    ],
    "ru": [
      "так что здесь это не будет проблемой"
    ]
  },
  {
    "time": [
      292.215878,
      294.832204
    ],
    "en": [
      "but keep that in mind for the next troubleshooting lab"
    ],
    "ru": [
      "но имейте это в виду для следующей лабораторной работы по устранению неполадок."
    ]
  },
  {
    "time": [
      294.832204,
      298.803587
    ],
    "en": [
      "so regardless of the ether channel protocol"
    ],
    "ru": [
      "поэтому независимо от протокола эфирного канала"
    ]
  },
  {
    "time": [
      298.803587,
      300.37488
    ],
    "en": [
      "the command begins the same"
    ],
    "ru": [
      "команда начинается так же"
    ]
  },
  {
    "time": [
      300.37488,
      304.576603
    ],
    "en": [
      "channel - group followed by the group number"
    ],
    "ru": [
      "канал - группа, за которой следует номер группы"
    ]
  },
  {
    "time": [
      304.576603,
      309.080503
    ],
    "en": [
      "this is necessary in case you have multiple ether channels on the same switch"
    ],
    "ru": [
      "это необходимо, если у вас есть несколько эфирных каналов на одном коммутаторе."
    ]
  },
  {
    "time": [
      309.080503,
      314.810639
    ],
    "en": [
      "note that this number doesn't have to match the switch on the other end of the ether Cannell"
    ],
    "ru": [
      "обратите внимание, что это число не обязательно должно совпадать с переключателем на другом конце эфирного канала."
    ]
  },
  {
    "time": [
      314.810639,
      316.92692
    ],
    "en": [
      "let's go with one"
    ],
    "ru": [
      "давай с одним"
    ]
  },
  {
    "time": [
      316.92692,
      321.56565
    ],
    "en": [
      "then mode and this is where we determine the protocol used"
    ],
    "ru": [
      "затем режим, и здесь мы определяем используемый протокол"
    ]
  },
  {
    "time": [
      321.56565,
      325.817577
    ],
    "en": [
      "pagp has two options desirable or Auto"
    ],
    "ru": [
      "pagp имеет две опции: желательно или Авто."
    ]
  },
  {
    "time": [
      325.817577,
      329.928416
    ],
    "en": [
      "much like DTP dynamic trunking protocol"
    ],
    "ru": [
      "очень похож на протокол динамического транкинга DTP"
    ]
  },
  {
    "time": [
      329.928416,
      336.443903
    ],
    "en": [
      "desirable will actively form an ether channel if the switch on the other end is using desirable or Auto mode"
    ],
    "ru": [
      "желаемый будет активно формировать эфирный канал, если коммутатор на другом конце использует желаемый или автоматический режим"
    ]
  },
  {
    "time": [
      336.443903,
      342.225468
    ],
    "en": [
      "Auto however will only form an ether channel if the other end is desirable"
    ],
    "ru": [
      "Авто, однако, будет формировать эфирный канал только в том случае, если другой конец желателен."
    ]
  },
  {
    "time": [
      342.225468,
      344.629594
    ],
    "en": [
      "let's go with desirable"
    ],
    "ru": [
      "пойдем с желаемым"
    ]
  },
  {
    "time": [
      344.629594,
      346.797417
    ],
    "en": [
      "okay that's it"
    ],
    "ru": [
      "хорошо, вот и все"
    ]
  },
  {
    "time": [
      346.797417,
      348.413018
    ],
    "en": [
      "do show ether channel summary"
    ],
    "ru": [
      "показывать сводку эфирного канала"
    ]
  },
  {
    "time": [
      348.413018,
      352.726419
    ],
    "en": [
      "there is po1 port channel one"
    ],
    "ru": [
      "есть po1 порт канал один"
    ]
  },
  {
    "time": [
      352.726419,
      354.290931
    ],
    "en": [
      "our new logical interface"
    ],
    "ru": [
      "наш новый логический интерфейс"
    ]
  },
  {
    "time": [
      354.290931,
      357.354809
    ],
    "en": [
      "notice the SD next to it"
    ],
    "ru": [
      "обратите внимание на SD рядом с ним"
    ]
  },
  {
    "time": [
      357.354809,
      360.035875
    ],
    "en": [
      "s indicates a layer two ether Channel"
    ],
    "ru": [
      "s указывает на эфирный канал второго уровня"
    ]
  },
  {
    "time": [
      360.035875,
      361.967711
    ],
    "en": [
      "and D means it is down"
    ],
    "ru": [
      "и D означает, что он не работает"
    ]
  },
  {
    "time": [
      361.967711,
      364.795602
    ],
    "en": [
      "that's because we haven't configured switch to yet"
    ],
    "ru": [
      "это потому, что мы еще не настроили переключение на"
    ]
  },
  {
    "time": [
      364.795602,
      369.751293
    ],
    "en": [
      "here are the ports included in it F 0 1 2 F 0 4"
    ],
    "ru": [
      "вот порты, входящие в него F 0 1 2 F 0 4"
    ]
  },
  {
    "time": [
      369.751293,
      372.440998
    ],
    "en": [
      "and let's configure it as a trunk"
    ],
    "ru": [
      "и давайте настроим его как транк"
    ]
  },
  {
    "time": [
      372.440998,
      373.582562
    ],
    "en": [
      "as for the instructions"
    ],
    "ru": [
      "что касается инструкций"
    ]
  },
  {
    "time": [
      373.582562,
      378.49356
    ],
    "en": [
      "interface port channel 1 switch port mode trunk"
    ],
    "ru": [
      "интерфейсный порт канал 1 режим порта коммутатора магистраль"
    ]
  },
  {
    "time": [
      378.49356,
      384.166939
    ],
    "en": [
      "ok let's do the same configuration on switch 2's end"
    ],
    "ru": [
      "хорошо, давайте сделаем ту же настройку на конце переключателя 2"
    ]
  },
  {
    "time": [
      384.166939,
      386.471973
    ],
    "en": [
      "and then check if the ether channel is working"
    ],
    "ru": [
      "а затем проверьте, работает ли эфирный канал"
    ]
  },
  {
    "time": [
      386.471973,
      391.779909
    ],
    "en": [
      "enable conf T"
    ],
    "ru": [
      "включить conf T"
    ]
  },
  {
    "time": [
      391.779909,
      394.780363
    ],
    "en": [
      "interface range F 0 1 - 4"
    ],
    "ru": [
      "диапазон интерфейса F 0 1 - 4"
    ]
  },
  {
    "time": [
      394.780363,
      399.018276
    ],
    "en": [
      "I'm just going to shut down these interfaces while I work on the ether"
    ],
    "ru": [
      "Я просто отключу эти интерфейсы, пока работаю над эфиром"
    ]
  },
  {
    "time": [
      399.018276,
      400.091246
    ],
    "en": [
      "shut down"
    ],
    "ru": [
      "неисправность"
    ]
  },
  {
    "time": [
      400.091246,
      405.999386
    ],
    "en": [
      "I'll use a different channel group number to show it will work even if it doesn't match with switch one"
    ],
    "ru": [
      "Я буду использовать другой номер группы каналов, чтобы показать, что он будет работать, даже если он не совпадает с первым переключателем."
    ]
  },
  {
    "time": [
      405.999386,
      409.233558
    ],
    "en": [
      "channel group 2 mode"
    ],
    "ru": [
      "режим группы каналов 2"
    ]
  },
  {
    "time": [
      409.233558,
      411.76408
    ],
    "en": [
      "and this time let's go with Auto"
    ],
    "ru": [
      "и на этот раз пойдем с Авто"
    ]
  },
  {
    "time": [
      411.76408,
      413.108071
    ],
    "en": [
      "although desirable would work as well"
    ],
    "ru": [
      "хотя желательно тоже подойдет"
    ]
  },
  {
    "time": [
      413.108071,
      416.269454
    ],
    "en": [
      "now let's make it a trunk"
    ],
    "ru": [
      "теперь давайте сделаем это багажником"
    ]
  },
  {
    "time": [
      416.269454,
      420.136937
    ],
    "en": [
      "interface po2 is pork channel 2"
    ],
    "ru": [
      "интерфейс po2 - свиной канал 2"
    ]
  },
  {
    "time": [
      420.136937,
      425.919068
    ],
    "en": [
      "note on this switch model both is l and dot1q encapsulations are supported"
    ],
    "ru": [
      "Обратите внимание, что в этой модели коммутатора поддерживаются инкапсуляции l и dot1q."
    ]
  },
  {
    "time": [
      425.919068,
      428.070837
    ],
    "en": [
      "so we have to configure the encapsulation first"
    ],
    "ru": [
      "поэтому нам нужно сначала настроить инкапсуляцию"
    ]
  },
  {
    "time": [
      428.070837,
      429.332787
    ],
    "en": [
      "before making a trunk"
    ],
    "ru": [
      "перед изготовлением сундука"
    ]
  },
  {
    "time": [
      429.332787,
      433.341154
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
      433.341154,
      435.115802
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
      435.115802,
      438.441289
    ],
    "en": [
      "ok let's activate the interfaces"
    ],
    "ru": [
      "хорошо, давайте активируем интерфейсы"
    ]
  },
  {
    "time": [
      438.441289,
      441.268771
    ],
    "en": [
      "interface range F 0 1 2 4"
    ],
    "ru": [
      "диапазон интерфейса F 0 1 2 4"
    ]
  },
  {
    "time": [
      441.268771,
      442.600223
    ],
    "en": [
      "no chef"
    ],
    "ru": [
      "нет повара"
    ]
  },
  {
    "time": [
      442.600223,
      445.689905
    ],
    "en": [
      "now let's check if the ether channel is up"
    ],
    "ru": [
      "теперь давайте проверим, работает ли эфирный канал"
    ]
  },
  {
    "time": [
      445.689905,
      448.013284
    ],
    "en": [
      "do show ether channel summary"
    ],
    "ru": [
      "показывать сводку эфирного канала"
    ]
  },
  {
    "time": [
      448.013284,
      452.071266
    ],
    "en": [
      "it's probably a good idea to get familiar with the meanings of these"
    ],
    "ru": [
      "вероятно, неплохо было бы познакомиться со значением этих"
    ]
  },
  {
    "time": [
      452.071266,
      453.867184
    ],
    "en": [
      "flag codes in the output of this command"
    ],
    "ru": [
      "коды флагов в выводе этой команды"
    ]
  },
  {
    "time": [
      453.867184,
      457.878317
    ],
    "en": [
      "but that's just thinking in terms of possible test questions"
    ],
    "ru": [
      "но это просто размышления с точки зрения возможных тестовых вопросов"
    ]
  },
  {
    "time": [
      457.878317,
      461.568385
    ],
    "en": [
      "although in a real scenario you can just see them right here in the output"
    ],
    "ru": [
      "хотя в реальном сценарии вы можете просто увидеть их прямо здесь, на выходе"
    ]
  },
  {
    "time": [
      461.568385,
      463.490721
    ],
    "en": [
      "there it is"
    ],
    "ru": [
      "вот оно"
    ]
  },
  {
    "time": [
      463.490721,
      464.912558
    ],
    "en": [
      "s meaning layer 2"
    ],
    "ru": [
      "s означает слой 2"
    ]
  },
  {
    "time": [
      464.912558,
      467.104485
    ],
    "en": [
      "and you meaning in use"
    ],
    "ru": [
      "и вы имеете в виду в использовании"
    ]
  },
  {
    "time": [
      467.104485,
      472.278023
    ],
    "en": [
      "our next task is to configure a layer 3 ether channel"
    ],
    "ru": [
      "наша следующая задача - настроить эфирный канал 3-го уровня."
    ]
  },
  {
    "time": [
      472.278023,
      474.297342
    ],
    "en": [
      "between switch 2 and switch 3"
    ],
    "ru": [
      "между переключателем 2 и переключателем 3"
    ]
  },
  {
    "time": [
      474.297342,
      478.712195
    ],
    "en": [
      "you will use layer 2 ether channels more than layer 3 but"
    ],
    "ru": [
      "вы будете использовать эфирные каналы уровня 2 больше, чем уровень 3, но"
    ]
  },
  {
    "time": [
      478.712195,
      479.730698
    ],
    "en": [
      "you should know how to make one"
    ],
    "ru": [
      "ты должен знать, как его сделать"
    ]
  },
  {
    "time": [
      479.730698,
      482.468068
    ],
    "en": [
      "let's start here on switch to"
    ],
    "ru": [
      "давайте начнем с перехода на"
    ]
  },
  {
    "time": [
      482.468068,
      487.626979
    ],
    "en": [
      "exit first enable IP routing on the switch"
    ],
    "ru": [
      "сначала выйдите, включите IP-маршрутизацию на коммутаторе"
    ]
  },
  {
    "time": [
      487.626979,
      489.582376
    ],
    "en": [
      "to give it layer 3 capabilities"
    ],
    "ru": [
      "чтобы дать ему возможности уровня 3"
    ]
  },
  {
    "time": [
      489.582376,
      491.148725
    ],
    "en": [
      "IP routing"
    ],
    "ru": [
      "IP-маршрутизация"
    ]
  },
  {
    "time": [
      491.148725,
      493.813011
    ],
    "en": [
      "now let's make the ether channel"
    ],
    "ru": [
      "теперь давайте сделаем эфирный канал"
    ]
  },
  {
    "time": [
      493.813011,
      498.891877
    ],
    "en": [
      "interface range G 0 1 2 to"
    ],
    "ru": [
      "диапазон интерфейса G 0 1 2 до"
    ]
  },
  {
    "time": [
      498.891877,
      502.737908
    ],
    "en": [
      "use the no switch port command first"
    ],
    "ru": [
      "сначала используйте команду no switch port"
    ]
  },
  {
    "time": [
      502.737908,
      504.242353
    ],
    "en": [
      "before making the ether channel"
    ],
    "ru": [
      "перед созданием эфирного канала"
    ]
  },
  {
    "time": [
      504.242353,
      505.985527
    ],
    "en": [
      "this will make the interface layer 3"
    ],
    "ru": [
      "это сделает уровень интерфейса 3"
    ]
  },
  {
    "time": [
      505.985527,
      509.120902
    ],
    "en": [
      "then let's make a static ether channel"
    ],
    "ru": [
      "тогда давайте сделаем статический эфирный канал"
    ]
  },
  {
    "time": [
      509.120902,
      512.820856
    ],
    "en": [
      "channel Group 1 mode on"
    ],
    "ru": [
      "канал группы 1 режим включен"
    ]
  },
  {
    "time": [
      512.820856,
      515.123123
    ],
    "en": [
      "is the command for a static ether Channel"
    ],
    "ru": [
      "это команда для статического эфирного канала"
    ]
  },
  {
    "time": [
      515.123123,
      519.059631
    ],
    "en": [
      "next let's assign an IP address to the interface"
    ],
    "ru": [
      "Затем давайте назначим IP-адрес интерфейсу"
    ]
  },
  {
    "time": [
      519.059631,
      521.608111
    ],
    "en": [
      "interface po1"
    ],
    "ru": [
      "интерфейс po1"
    ]
  },
  {
    "time": [
      521.608111,
      528.734143
    ],
    "en": [
      "IP address 2300 1 255.255.255.0"
    ],
    "ru": [
      "IP-адрес 2300 1 255.255.255.0"
    ]
  },
  {
    "time": [
      528.734143,
      532.717612
    ],
    "en": [
      "ok let's configure a switch 3 side"
    ],
    "ru": [
      "хорошо, давайте настроим сторону коммутатора 3"
    ]
  },
  {
    "time": [
      532.717612,
      536.308021
    ],
    "en": [
      "enable coffee/tea"
    ],
    "ru": [
      "включить кофе / чай"
    ]
  },
  {
    "time": [
      536.308021,
      538.572646
    ],
    "en": [
      "IP routing"
    ],
    "ru": [
      "IP-маршрутизация"
    ]
  },
  {
    "time": [
      538.572646,
      541.565934
    ],
    "en": [
      "interface range G 0 1 2 2"
    ],
    "ru": [
      "диапазон интерфейса G 0 1 2 2"
    ]
  },
  {
    "time": [
      541.565934,
      546.058157
    ],
    "en": [
      "no switch port channel Group 1 mode on"
    ],
    "ru": [
      "нет канала порта коммутатора Режим группы 1 включен"
    ]
  },
  {
    "time": [
      546.058157,
      1382.0
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
      1382.0,
      554.542488
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
      554.542488,
      557.554801
    ],
    "en": [
      "do show ether channel summary"
    ],
    "ru": [
      "показывать сводку эфирного канала"
    ]
  },
  {
    "time": [
      557.554801,
      563.128134
    ],
    "en": [
      "notice that a layer 3 ether channel is indicated by r"
    ],
    "ru": [
      "обратите внимание, что эфирный канал уровня 3 обозначен r"
    ]
  },
  {
    "time": [
      563.128134,
      565.602442
    ],
    "en": [
      "and again there is that you for in use"
    ],
    "ru": [
      "и снова есть то, что вы используете"
    ]
  },
  {
    "time": [
      565.602442,
      570.064461
    ],
    "en": [
      "let's try to ping across the ether channel to switch to"
    ],
    "ru": [
      "давайте попробуем пропинговать эфирный канал, чтобы переключиться на"
    ]
  },
  {
    "time": [
      570.064461,
      1381.0
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
      1381.0,
      574.445821
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
      574.445821,
      578.956048
    ],
    "en": [
      "and it works"
    ],
    "ru": [
      "и это работает"
    ]
  },
  {
    "time": [
      578.956048,
      582.530129
    ],
    "en": [
      "now we have one more ether channel to configure"
    ],
    "ru": [
      "теперь у нас есть еще один эфирный канал для настройки"
    ]
  },
  {
    "time": [
      582.530129,
      586.595889
    ],
    "en": [
      "this time we use an I Triple E standard protocol"
    ],
    "ru": [
      "на этот раз мы используем стандартный протокол I Triple E"
    ]
  },
  {
    "time": [
      586.595889,
      591.003667
    ],
    "en": [
      "that is link aggregation control protocol LACP"
    ],
    "ru": [
      "это протокол управления агрегацией каналов LACP"
    ]
  },
  {
    "time": [
      591.003667,
      593.493191
    ],
    "en": [
      "let's start here on switch 3"
    ],
    "ru": [
      "давай начнем с переключателя 3"
    ]
  },
  {
    "time": [
      593.493191,
      598.561921
    ],
    "en": [
      "interface range F 0 1 2 4"
    ],
    "ru": [
      "диапазон интерфейса F 0 1 2 4"
    ]
  },
  {
    "time": [
      598.561921,
      601.253213
    ],
    "en": [
      "channel group 2 mode"
    ],
    "ru": [
      "режим группы каналов 2"
    ]
  },
  {
    "time": [
      601.253213,
      602.946456
    ],
    "en": [
      "and let's check our options"
    ],
    "ru": [
      "и давайте проверим наши варианты"
    ]
  },
  {
    "time": [
      602.946456,
      607.995821
    ],
    "en": [
      "Elysee pees equivalent of PA gps desirable is active"
    ],
    "ru": [
      "Elysee писает эквивалент PA gps желательно активен"
    ]
  },
  {
    "time": [
      607.995821,
      613.384188
    ],
    "en": [
      "and le psyches equivalent of PA gps auto is passive"
    ],
    "ru": [
      "и ле психический эквивалент PA gps auto пассивен"
    ]
  },
  {
    "time": [
      613.384188,
      615.294392
    ],
    "en": [
      "let's go with active"
    ],
    "ru": [
      "пойдем с активным"
    ]
  },
  {
    "time": [
      615.294392,
      618.534007
    ],
    "en": [
      "interface po2"
    ],
    "ru": [
      "интерфейс po2"
    ]
  },
  {
    "time": [
      618.534007,
      623.116955
    ],
    "en": [
      "again on this switch model we have to configure the encapsulation"
    ],
    "ru": [
      "снова на этой модели коммутатора мы должны настроить инкапсуляцию"
    ]
  },
  {
    "time": [
      623.116955,
      626.038678
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
      626.038678,
      628.543712
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
      628.543712,
      632.134075
    ],
    "en": [
      "ok now let's configure the other end on switch for"
    ],
    "ru": [
      "хорошо, теперь давайте настроим другой конец коммутатора для"
    ]
  },
  {
    "time": [
      632.134075,
      637.035571
    ],
    "en": [
      "enable coffee tea"
    ],
    "ru": [
      "включить кофе чай"
    ]
  },
  {
    "time": [
      637.035571,
      640.518632
    ],
    "en": [
      "interface range F 0 1 2 4"
    ],
    "ru": [
      "диапазон интерфейса F 0 1 2 4"
    ]
  },
  {
    "time": [
      640.518632,
      642.648746
    ],
    "en": [
      "let's set it down for now while we work"
    ],
    "ru": [
      "давай установим это пока мы работаем"
    ]
  },
  {
    "time": [
      642.648746,
      647.641648
    ],
    "en": [
      "shut channel Group 1 mode active"
    ],
    "ru": [
      "закрыть канал Активен режим группы 1"
    ]
  },
  {
    "time": [
      647.641648,
      652.455798
    ],
    "en": [
      "since switch 3 side is active passive would work as well by the way"
    ],
    "ru": [
      "поскольку сторона переключателя 3 активна, пассивная, кстати, тоже будет работать"
    ]
  },
  {
    "time": [
      652.455798,
      655.613372
    ],
    "en": [
      "interface po1"
    ],
    "ru": [
      "интерфейс po1"
    ]
  },
  {
    "time": [
      655.613372,
      659.603122
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
      659.603122,
      663.566365
    ],
    "en": [
      "interface range F 0 1 2 4"
    ],
    "ru": [
      "диапазон интерфейса F 0 1 2 4"
    ]
  },
  {
    "time": [
      663.566365,
      666.075548
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
      666.075548,
      667.978859
    ],
    "en": [
      "okay let's check if all is good"
    ],
    "ru": [
      "хорошо, давай проверим, все ли в порядке"
    ]
  },
  {
    "time": [
      667.978859,
      670.39353
    ],
    "en": [
      "do show ether channel summary"
    ],
    "ru": [
      "показывать сводку эфирного канала"
    ]
  },
  {
    "time": [
      670.39353,
      673.669018
    ],
    "en": [
      "we have a layer two ether channel"
    ],
    "ru": [
      "у нас есть эфирный канал второго уровня"
    ]
  },
  {
    "time": [
      673.669018,
      675.147181
    ],
    "en": [
      "and it is in use"
    ],
    "ru": [
      "и он используется"
    ]
  },
  {
    "time": [
      675.147181,
      677.973916
    ],
    "en": [
      "so we created three ether channels"
    ],
    "ru": [
      "поэтому мы создали три эфирных канала"
    ]
  },
  {
    "time": [
      677.973916,
      680.977022
    ],
    "en": [
      "one layer two ether channel using pagp"
    ],
    "ru": [
      "один слой, два эфирных канала с использованием pagp"
    ]
  },
  {
    "time": [
      680.977022,
      683.898156
    ],
    "en": [
      "one static layer three ether channel"
    ],
    "ru": [
      "один статический слой три эфирных канала"
    ]
  },
  {
    "time": [
      683.898156,
      687.052328
    ],
    "en": [
      "and one layer two ether channel using LACP"
    ],
    "ru": [
      "и двухуровневый эфирный канал с использованием LACP"
    ]
  },
  {
    "time": [
      687.052328,
      689.17158
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
      689.17158,
      693.962056
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
      693.962056,
      696.031512
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
      696.031512,
      700.371375
    ],
    "en": [
      "please subscribe for future labs like this which will be released weekly"
    ],
    "ru": [
      "пожалуйста, подпишитесь на будущие лаборатории, подобные этой, которые будут выпускаться еженедельно"
    ]
  },
  {
    "time": [
      700.371375,
      705.231421
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
      705.231421,
      711.856069
    ],
    "en": [
      "if you want to support my channel I accept Bitcoin and aetherium donations via the addresses in the description"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, я принимаю пожертвования биткойнами и эфириумом по адресам в описании"
    ]
  },
  {
    "time": [
      711.856069,
      720.155593
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
      720.155593,
      720.155593
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
      720.155593,
      720.155593
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
      720.155593,
      720.155593
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]