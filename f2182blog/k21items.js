let objs = [
  {
    "time": [
      0.0,
      4.303783
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
      4.303783,
      7.763039
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
      7.763039,
      15.320696
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
      15.320696,
      21.30342
    ],
    "en": [
      "this lab uses the same topology as the previous lab number 20"
    ],
    "ru": [
      "в этой лабораторной работе используется та же топология, что и в предыдущей лабораторной работе № 20."
    ]
  },
  {
    "time": [
      21.30342,
      25.130751
    ],
    "en": [
      "whereas lab 20 had you configured various technologies"
    ],
    "ru": [
      "в то время как в лабораторной работе 20 вы настраивали различные технологии"
    ]
  },
  {
    "time": [
      25.130751,
      33.293928
    ],
    "en": [
      "this lab requires you to troubleshoot several configuration errors to restore connectivity between pcs 1 2 3 & 4"
    ],
    "ru": [
      "Эта лабораторная работа требует от вас устранения нескольких ошибок конфигурации для восстановления связи между ПК 1, 2, 3 и 4."
    ]
  },
  {
    "time": [
      33.293928,
      36.438605
    ],
    "en": [
      "troubleshooting is a valuable skill"
    ],
    "ru": [
      "устранение неполадок - ценный навык"
    ]
  },
  {
    "time": [
      36.438605,
      38.591553
    ],
    "en": [
      "and also good practice for the exam"
    ],
    "ru": [
      "а также хорошая практика для экзамена"
    ]
  },
  {
    "time": [
      38.591553,
      43.003835
    ],
    "en": [
      "as you will most likely encounter some sort of troubleshooting lab in your exam"
    ],
    "ru": [
      "так как вы, скорее всего, столкнетесь с какой-то лабораторией по устранению неполадок на своем экзамене"
    ]
  },
  {
    "time": [
      43.003835,
      49.089114
    ],
    "en": [
      "in this video I won't go through the exact troubleshooting method I would use to fix the topology"
    ],
    "ru": [
      "в этом видео я не буду описывать точный метод устранения неполадок, который я бы использовал для исправления топологии."
    ]
  },
  {
    "time": [
      49.089114,
      52.404091
    ],
    "en": [
      "there is somewhat of an art to troubleshooting"
    ],
    "ru": [
      "есть своего рода искусство устранения неполадок"
    ]
  },
  {
    "time": [
      52.404091,
      54.563013
    ],
    "en": [
      "and you can go about it in many ways"
    ],
    "ru": [
      "и вы можете сделать это разными способами"
    ]
  },
  {
    "time": [
      54.563013,
      58.39374
    ],
    "en": [
      "instead I will just show you the configuration errors one by one"
    ],
    "ru": [
      "вместо этого я просто покажу вам ошибки конфигурации одну за другой"
    ]
  },
  {
    "time": [
      58.39374,
      62.271893
    ],
    "en": [
      "however it is important to have some sort of system to troubleshoot"
    ],
    "ru": [
      "однако важно иметь какую-то систему для устранения неполадок"
    ]
  },
  {
    "time": [
      62.271893,
      70.135207
    ],
    "en": [
      "try to complete the lab yourself first then continue watching this video if you can't find and fix all of the configuration errors"
    ],
    "ru": [
      "попробуйте сначала пройти лабораторную работу самостоятельно, а затем продолжайте смотреть это видео, если не можете найти и исправить все ошибки конфигурации."
    ]
  },
  {
    "time": [
      70.135207,
      72.519729
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
      72.519729,
      79.778649
    ],
    "en": [
      "first let's try to ping from pc1 and see if it can reach the other pcs"
    ],
    "ru": [
      "сначала давайте попробуем пинговать с pc1 и посмотрим, сможет ли он добраться до других ПК"
    ]
  },
  {
    "time": [
      79.778649,
      95.666926
    ],
    "en": [
      "ping no.1 dot 12 can't reach PC 2 ping 10.0.0.13 can't reach PC 3"
    ],
    "ru": [
      "ping № 1 точка 12 не может подключиться к ПК 2 ping 10.0.0.13 не может подключиться к ПК 3"
    ]
  },
  {
    "time": [
      95.666926,
      98.885968
    ],
    "en": [
      "and ping 10.0.1.14"
    ],
    "ru": [
      "и пинг 10.0.1.14"
    ]
  },
  {
    "time": [
      98.885968,
      103.211489
    ],
    "en": [
      "can't reach PC 4"
    ],
    "ru": [
      "не могу подключиться к ПК 4"
    ]
  },
  {
    "time": [
      103.211489,
      106.108577
    ],
    "en": [
      "so PC 1 can't reach any of the other pcs"
    ],
    "ru": [
      "поэтому ПК 1 не может связаться ни с одним из других ПК"
    ]
  },
  {
    "time": [
      106.108577,
      109.198458
    ],
    "en": [
      "there are multiple miss configurations in this lab"
    ],
    "ru": [
      "в этой лабораторной работе есть несколько конфигураций пропуска"
    ]
  },
  {
    "time": [
      109.198458,
      110.696752
    ],
    "en": [
      "and they all contribute to that"
    ],
    "ru": [
      "и все они способствуют этому"
    ]
  },
  {
    "time": [
      110.696752,
      112.498723
    ],
    "en": [
      "but let's look at one of them"
    ],
    "ru": [
      "но давайте посмотрим на один из них"
    ]
  },
  {
    "time": [
      112.498723,
      114.90809
    ],
    "en": [
      "I'll go on switch one"
    ],
    "ru": [
      "Я пойду на первый переключатель"
    ]
  },
  {
    "time": [
      114.90809,
      120.592255
    ],
    "en": [
      "password out of CCNA enable"
    ],
    "ru": [
      "пароль вне CCNA включить"
    ]
  },
  {
    "time": [
      120.592255,
      123.811233
    ],
    "en": [
      "if you use the command shell port security"
    ],
    "ru": [
      "если вы используете безопасность порта командной оболочки"
    ]
  },
  {
    "time": [
      123.811233,
      127.708013
    ],
    "en": [
      "notice that the security violation count is not zero"
    ],
    "ru": [
      "обратите внимание, что количество нарушений безопасности не равно нулю"
    ]
  },
  {
    "time": [
      127.708013,
      132.238716
    ],
    "en": [
      "this is because our pings have been triggering port security violations"
    ],
    "ru": [
      "это потому, что наши пинги вызывают нарушения безопасности порта"
    ]
  },
  {
    "time": [
      132.238716,
      137.670854
    ],
    "en": [
      "show run look here under f02"
    ],
    "ru": [
      "показать пробег смотрите здесь под f02"
    ]
  },
  {
    "time": [
      137.670854,
      140.807629
    ],
    "en": [
      "sticky MAC address learning is supposed to be configured"
    ],
    "ru": [
      "должно быть настроено изучение липких MAC-адресов"
    ]
  },
  {
    "time": [
      140.807629,
      147.347392
    ],
    "en": [
      "but instead a secure MAC address of i.i.i.i.i.i is configured"
    ],
    "ru": [
      "но вместо этого настроен безопасный MAC-адрес i.i.i.i.i.i"
    ]
  },
  {
    "time": [
      147.347392,
      149.803832
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
      149.803832,
      163.152371
    ],
    "en": [
      "conf t interface f0 2 no switch port port security MAC address eh-eh-eh-eh eh-eh-eh-eh eh-eh-eh-eh"
    ],
    "ru": [
      "conf t interface f0 2 no switch port port security MAC address eh-eh-eh-eh eh-eh-eh-eh eh-eh-eh-eh"
    ]
  },
  {
    "time": [
      163.152371,
      165.437387
    ],
    "en": [
      "ok that remove the configuration"
    ],
    "ru": [
      "хорошо, удалите конфигурацию"
    ]
  },
  {
    "time": [
      165.437387,
      168.149098
    ],
    "en": [
      "now lets enable sticky mac learning"
    ],
    "ru": [
      "теперь давайте включим липкое обучение Mac"
    ]
  },
  {
    "time": [
      168.149098,
      174.034893
    ],
    "en": [
      "switch port port security MAC address sticky"
    ],
    "ru": [
      "порт коммутатора безопасность порта MAC-адрес залипание"
    ]
  },
  {
    "time": [
      174.034893,
      178.049027
    ],
    "en": [
      "ok now let's try to ping from pc1 again"
    ],
    "ru": [
      "хорошо, теперь давайте попробуем пинговать с pc1 еще раз"
    ]
  },
  {
    "time": [
      178.049027,
      179.279544
    ],
    "en": [
      "just a PC 2"
    ],
    "ru": [
      "просто ПК 2"
    ]
  },
  {
    "time": [
      179.279544,
      184.615155
    ],
    "en": [
      "ping 10.0.1.12"
    ],
    "ru": [
      "пинг 10.0.1.12"
    ]
  },
  {
    "time": [
      184.615155,
      189.050085
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
      189.050085,
      191.246629
    ],
    "en": [
      "but let's go back to switch 1 again"
    ],
    "ru": [
      "но давайте вернемся к переключателю 1 снова"
    ]
  },
  {
    "time": [
      191.246629,
      196.321261
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
      196.321261,
      200.08195
    ],
    "en": [
      "notice that the security violation counter hasn't increased"
    ],
    "ru": [
      "обратите внимание, что счетчик нарушений безопасности не увеличился"
    ]
  },
  {
    "time": [
      200.08195,
      203.972197
    ],
    "en": [
      "so PC one isn't triggering anymore port security violations"
    ],
    "ru": [
      "так что ПК один больше не вызывает нарушения безопасности порта"
    ]
  },
  {
    "time": [
      203.972197,
      205.976522
    ],
    "en": [
      "but there are still problems elsewhere"
    ],
    "ru": [
      "но есть еще проблемы в другом месте"
    ]
  },
  {
    "time": [
      205.976522,
      213.676235
    ],
    "en": [
      "next let's check our inter VLAN routing since PC 1 can't ping PC 2"
    ],
    "ru": [
      "Затем давайте проверим нашу маршрутизацию между VLAN, так как ПК 1 не может пинговать ПК 2"
    ]
  },
  {
    "time": [
      213.676235,
      217.146528
    ],
    "en": [
      "let's go on r1"
    ],
    "ru": [
      "пойдем на r1"
    ]
  },
  {
    "time": [
      217.146528,
      223.224958
    ],
    "en": [
      "password of CCNA enable show run"
    ],
    "ru": [
      "пароль CCNA включить шоу запустить"
    ]
  },
  {
    "time": [
      223.224958,
      226.423513
    ],
    "en": [
      "look at the two sub interfaces of G 00"
    ],
    "ru": [
      "посмотрите на два субинтерфейса G 00"
    ]
  },
  {
    "time": [
      226.423513,
      229.098264
    ],
    "en": [
      "there is one miss configuration on each"
    ],
    "ru": [
      "на каждом есть одна конфигурация пропуска"
    ]
  },
  {
    "time": [
      229.098264,
      234.328624
    ],
    "en": [
      "on the g0 0.13 sub-interface the IP address is incorrect"
    ],
    "ru": [
      "на субинтерфейсе g0 0.13 неверный IP-адрес"
    ]
  },
  {
    "time": [
      234.328624,
      236.59346
    ],
    "en": [
      "it should be 10.0.0.1"
    ],
    "ru": [
      "это должно быть 10.0.0.1"
    ]
  },
  {
    "time": [
      236.59346,
      240.326284
    ],
    "en": [
      "which is the default gateway set on the pcs in VLAN 13"
    ],
    "ru": [
      "который является шлюзом по умолчанию, установленным на ПК в VLAN 13"
    ]
  },
  {
    "time": [
      240.326284,
      242.209312
    ],
    "en": [
      "not 10.0.0.2"
    ],
    "ru": [
      "не 10.0.0.2"
    ]
  },
  {
    "time": [
      242.209312,
      248.137306
    ],
    "en": [
      "also the v/line of the g0 0.24 sub interface is incorrect"
    ],
    "ru": [
      "также строка v / субинтерфейса g0 0.24 неверна"
    ]
  },
  {
    "time": [
      248.137306,
      250.374074
    ],
    "en": [
      "it should be 24 not 2"
    ],
    "ru": [
      "должно быть 24, а не 2"
    ]
  },
  {
    "time": [
      250.374074,
      252.817964
    ],
    "en": [
      "lets fix those errors"
    ],
    "ru": [
      "давайте исправим эти ошибки"
    ]
  },
  {
    "time": [
      252.817964,
      257.605494
    ],
    "en": [
      "conf t interface G 0 0 13"
    ],
    "ru": [
      "conf t interface G 0 0 13"
    ]
  },
  {
    "time": [
      257.605494,
      265.850299
    ],
    "en": [
      "IP address 10.0.0.1 255.255.255.0"
    ],
    "ru": [
      "IP-адрес 10.0.0.1 255.255.255.0"
    ]
  },
  {
    "time": [
      265.850299,
      269.290594
    ],
    "en": [
      "note that you don't have to remove the previous IP address first"
    ],
    "ru": [
      "обратите внимание, что вам не нужно сначала удалять предыдущий IP-адрес"
    ]
  },
  {
    "time": [
      269.290594,
      270.566411
    ],
    "en": [
      "this overrides it"
    ],
    "ru": [
      "это отменяет это"
    ]
  },
  {
    "time": [
      270.566411,
      279.71375
    ],
    "en": [
      "next interface G 0 0 24 encapsulation dot1q 24"
    ],
    "ru": [
      "следующий интерфейс G 0 0 24 инкапсуляция dot1q 24"
    ]
  },
  {
    "time": [
      279.71375,
      282.573719
    ],
    "en": [
      "ok that should fix it"
    ],
    "ru": [
      "хорошо, это должно исправить"
    ]
  },
  {
    "time": [
      282.573719,
      286.108723
    ],
    "en": [
      "now PC one should be able to ping PC 2"
    ],
    "ru": [
      "теперь компьютер должен иметь возможность пинговать ПК 2"
    ]
  },
  {
    "time": [
      286.108723,
      291.852236
    ],
    "en": [
      "there are still problems on switch 2 which will prevent it from reaching PC 3 and PC 4"
    ],
    "ru": [
      "на переключателе 2 все еще есть проблемы, которые не позволяют ему добраться до ПК 3 и ПК 4"
    ]
  },
  {
    "time": [
      291.852236,
      296.217764
    ],
    "en": [
      "however because pc1 & pc2 are connected to the same switch"
    ],
    "ru": [
      "однако, поскольку pc1 и pc2 подключены к одному коммутатору"
    ]
  },
  {
    "time": [
      296.217764,
      299.772586
    ],
    "en": [
      "and we fixed the inter VLAN routing they should be able to reach each other"
    ],
    "ru": [
      "и мы исправили маршрутизацию между VLAN, они должны иметь возможность достигать друг друга"
    ]
  },
  {
    "time": [
      299.772586,
      302.374493
    ],
    "en": [
      "I'll go on PC 1 to try"
    ],
    "ru": [
      "Я пойду на ПК 1, чтобы попробовать"
    ]
  },
  {
    "time": [
      302.374493,
      307.383363
    ],
    "en": [
      "ping 10.0.1.12"
    ],
    "ru": [
      "пинг 10.0.1.12"
    ]
  },
  {
    "time": [
      307.383363,
      309.916392
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
      309.916392,
      313.209041
    ],
    "en": [
      "just to confirm let's try pc3 too"
    ],
    "ru": [
      "просто для подтверждения, давайте попробуем и pc3"
    ]
  },
  {
    "time": [
      313.209041,
      321.924383
    ],
    "en": [
      "ping 10.0.0.13 doesn't work"
    ],
    "ru": [
      "пинг 10.0.0.13 не работает"
    ]
  },
  {
    "time": [
      321.924383,
      326.244596
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
      326.244596,
      331.178486
    ],
    "en": [
      "password of CCNA enable"
    ],
    "ru": [
      "пароль включения CCNA"
    ]
  },
  {
    "time": [
      331.178486,
      335.393006
    ],
    "en": [
      "let's check if the trunk between switch 1 and switch 2 is working"
    ],
    "ru": [
      "проверим, работает ли транк между переключателем 1 и переключателем 2"
    ]
  },
  {
    "time": [
      335.393006,
      338.334925
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
      338.334925,
      340.877128
    ],
    "en": [
      "nothing appears"
    ],
    "ru": [
      "ничего не появляется"
    ]
  },
  {
    "time": [
      340.877128,
      345.446692
    ],
    "en": [
      "that's a problem we could use show run to check but let's try another command"
    ],
    "ru": [
      "это проблема, которую мы могли бы использовать для проверки с помощью show run, но давайте попробуем другую команду"
    ]
  },
  {
    "time": [
      345.446692,
      348.197258
    ],
    "en": [
      "just to get familiar with the various show commands available"
    ],
    "ru": [
      "просто чтобы ознакомиться с различными доступными командами show"
    ]
  },
  {
    "time": [
      348.197258,
      352.122072
    ],
    "en": [
      "show interfaces f01"
    ],
    "ru": [
      "показать интерфейсы f01"
    ]
  },
  {
    "time": [
      352.122072,
      353.524916
    ],
    "en": [
      "switch port"
    ],
    "ru": [
      "порт коммутатора"
    ]
  },
  {
    "time": [
      353.524916,
      357.214212
    ],
    "en": [
      "take a look at all the info here and familiarize yourself with it"
    ],
    "ru": [
      "взгляните на всю информацию здесь и ознакомьтесь с ней"
    ]
  },
  {
    "time": [
      357.214212,
      360.922008
    ],
    "en": [
      "for this lab what we want to look at is here"
    ],
    "ru": [
      "для этой лаборатории то, что мы хотим посмотреть, находится здесь"
    ]
  },
  {
    "time": [
      360.922008,
      364.830995
    ],
    "en": [
      "the administrative and operational mode is static access"
    ],
    "ru": [
      "административно-рабочий режим - статический доступ"
    ]
  },
  {
    "time": [
      364.830995,
      368.122358
    ],
    "en": [
      "meaning it has be configured as an access port"
    ],
    "ru": [
      "это означает, что он был настроен как порт доступа"
    ]
  },
  {
    "time": [
      368.122358,
      369.08853
    ],
    "en": [
      "not a trunk"
    ],
    "ru": [
      "не багажник"
    ]
  },
  {
    "time": [
      369.08853,
      370.726602
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
      370.726602,
      378.433259
    ],
    "en": [
      "conf T interface f01 switch port mode trunk"
    ],
    "ru": [
      "conf T interface f01 switch port mode trunk"
    ]
  },
  {
    "time": [
      378.433259,
      380.737688
    ],
    "en": [
      "okay that solves that"
    ],
    "ru": [
      "хорошо, это решает эту проблему"
    ]
  },
  {
    "time": [
      380.737688,
      383.852604
    ],
    "en": [
      "however one more problem remains on switch 2"
    ],
    "ru": [
      "однако еще одна проблема остается на переключателе 2"
    ]
  },
  {
    "time": [
      383.852604,
      387.314513
    ],
    "en": [
      "do show VLAN brief"
    ],
    "ru": [
      "показать краткое описание VLAN"
    ]
  },
  {
    "time": [
      387.314513,
      397.130159
    ],
    "en": [
      "look here f03 is in VLAN 24 as it should be however the f02 interface is in VLAN 23"
    ],
    "ru": [
      "посмотрите здесь, f03 находится в VLAN 24, как и должно быть, однако интерфейс f02 находится в VLAN 23"
    ]
  },
  {
    "time": [
      397.130159,
      398.726114
    ],
    "en": [
      "which is not correct"
    ],
    "ru": [
      "что не правильно"
    ]
  },
  {
    "time": [
      398.726114,
      401.166776
    ],
    "en": [
      "it should be in VLAN 13"
    ],
    "ru": [
      "он должен быть в VLAN 13"
    ]
  },
  {
    "time": [
      401.166776,
      402.74561
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
      402.74561,
      409.036045
    ],
    "en": [
      "interface f0 2 switch port access VLAN 13"
    ],
    "ru": [
      "интерфейс f0 2 порт коммутатора доступ VLAN 13"
    ]
  },
  {
    "time": [
      409.036045,
      413.245456
    ],
    "en": [
      "okay that's all the misconfigurations"
    ],
    "ru": [
      "хорошо, это все неправильные конфигурации"
    ]
  },
  {
    "time": [
      413.245456,
      417.187762
    ],
    "en": [
      "that should restore full connectivity between the four pcs"
    ],
    "ru": [
      "это должно восстановить полное соединение между четырьмя ПК"
    ]
  },
  {
    "time": [
      417.187762,
      423.813781
    ],
    "en": [
      "it can take some time for a spanning tree to reconverge so things might not work immediately"
    ],
    "ru": [
      "может потребоваться некоторое время, чтобы связующее дерево снова сходилось, поэтому что-то может работать не сразу"
    ]
  },
  {
    "time": [
      423.813781,
      427.564804
    ],
    "en": [
      "if you haven't studied spanning 4 yet don't worry about it yet"
    ],
    "ru": [
      "если вы еще не изучали охват 4, пока не беспокойтесь об этом"
    ]
  },
  {
    "time": [
      427.564804,
      435.108938
    ],
    "en": [
      "but after changes the configuration like we just did it can take some time for the switches to communicate the changes to each other"
    ],
    "ru": [
      "но после изменений конфигурации, как мы только что сделали, коммутаторам может потребоваться некоторое время, чтобы сообщить об изменениях друг другу."
    ]
  },
  {
    "time": [
      435.108938,
      437.725794
    ],
    "en": [
      "and for those changes to take effect across the network"
    ],
    "ru": [
      "и чтобы эти изменения вступили в силу во всей сети"
    ]
  },
  {
    "time": [
      437.725794,
      441.406654
    ],
    "en": [
      "hopefully enough time has passed"
    ],
    "ru": [
      "надеюсь, что прошло достаточно времени"
    ]
  },
  {
    "time": [
      441.406654,
      444.321406
    ],
    "en": [
      "so let's go on pc-1 to tests"
    ],
    "ru": [
      "так что пойдем на pc-1 для тестов"
    ]
  },
  {
    "time": [
      444.321406,
      449.318302
    ],
    "en": [
      "I'll ping PC 2 first although we already tested before and it worked"
    ],
    "ru": [
      "Сначала я пингую ПК 2, хотя мы уже тестировали раньше, и он работал"
    ]
  },
  {
    "time": [
      449.318302,
      456.521528
    ],
    "en": [
      "ping 10.0.1.12 the ping works again"
    ],
    "ru": [
      "пинг 10.0.1.12 пинг снова работает"
    ]
  },
  {
    "time": [
      456.521528,
      462.97534
    ],
    "en": [
      "next let's ping pc3 which didn't work previously because of the misconfigurations on switch 2"
    ],
    "ru": [
      "затем давайте пингуем pc3, который ранее не работал из-за неправильной конфигурации на переключателе 2"
    ]
  },
  {
    "time": [
      462.97534,
      472.392529
    ],
    "en": [
      "ping 10.0.0.13 now the ping works"
    ],
    "ru": [
      "ping 10.0.0.13 теперь пинг работает"
    ]
  },
  {
    "time": [
      472.392529,
      486.134943
    ],
    "en": [
      "and finally I'll ping PC 4 ping 10.0.1.14 it works as well"
    ],
    "ru": [
      "и напоследок пингую ПК 4 пинг 10.0.1.14 он тоже работает"
    ]
  },
  {
    "time": [
      486.134943,
      487.804559
    ],
    "en": [
      "this lab is now complete"
    ],
    "ru": [
      "эта лаборатория завершена"
    ]
  },
  {
    "time": [
      487.804559,
      511.129076
    ],
    "en": [
      "thank you for watching I hope this lab and video have been helpful for you please subscribe for future labs like this which will be released weekly if you have requests for any specific labs let me know in the comment section if you want to support my channel please consider contributing to my patreon"
    ],
    "ru": [
      "спасибо за просмотр. Надеюсь, эта лабораторная работа и видео были для вас полезны. подумайте о том, чтобы внести свой вклад в мой patreon"
    ]
  },
  {
    "time": [
      511.129076,
      514.746918
    ],
    "en": [
      "patreon.com / Jeremy's IT lab"
    ],
    "ru": [
      "patreon.com / ИТ-лаборатория Джереми"
    ]
  },
  {
    "time": [
      514.746918,
      519.843854
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
      519.843854,
      528.633272
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
      528.633272,
      528.633272
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
      528.633272,
      528.633272
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
      528.633272,
      528.633272
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]