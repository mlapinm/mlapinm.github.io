let objs = [
  {
    "time": [
      0.0,
      4.646375
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
      4.646375,
      8.063229
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
      8.063229,
      14.235583
    ],
    "en": [
      "in this lab we will look a bit more at CDP cisco discovery protocol"
    ],
    "ru": [
      "в этой лабораторной работе мы подробнее рассмотрим протокол обнаружения CDP cisco."
    ]
  },
  {
    "time": [
      14.235583,
      20.598249
    ],
    "en": [
      "this should be a fairly short lab looking at one more CDP command which we didn't cover in the last lab"
    ],
    "ru": [
      "это должна быть довольно короткая лабораторная работа, посвященная еще одной команде CDP, которую мы не рассмотрели в последней лабораторной работе."
    ]
  },
  {
    "time": [
      20.598249,
      29.741582
    ],
    "en": [
      "we will use CDP to identify more detailed information about neighboring devices beyond that displayed in the show CDP neighbors command"
    ],
    "ru": [
      "мы будем использовать CDP для определения более подробной информации о соседних устройствах, помимо той, которая отображается в команде show CDP neighbors."
    ]
  },
  {
    "time": [
      29.741582,
      38.560644
    ],
    "en": [
      "step one is to use CDP to identify which interfaces are used to connect the routers and switches"
    ],
    "ru": [
      "Шаг первый - использовать CDP, чтобы определить, какие интерфейсы используются для подключения маршрутизаторов и коммутаторов."
    ]
  },
  {
    "time": [
      38.560644,
      42.684478
    ],
    "en": [
      "we've done this in previous labs so this should be no problem"
    ],
    "ru": [
      "мы делали это в предыдущих лабораторных работах, поэтому проблем быть не должно."
    ]
  },
  {
    "time": [
      42.684478,
      45.119582
    ],
    "en": [
      "let's go on switch one first"
    ],
    "ru": [
      "давай сначала переключимся"
    ]
  },
  {
    "time": [
      45.119582,
      51.100394
    ],
    "en": [
      "enable show CDP neighbors"
    ],
    "ru": [
      "включить показывать соседей CDP"
    ]
  },
  {
    "time": [
      51.100394,
      57.684914
    ],
    "en": [
      "as you can see switch 1 is connected to r1 via the gigabit ethernet zero one interface"
    ],
    "ru": [
      "как вы можете видеть, коммутатор 1 подключен к r1 через интерфейс Gigabit Ethernet zero one"
    ]
  },
  {
    "time": [
      57.684914,
      61.944247
    ],
    "en": [
      "and it's also connected to our ones gigabit ethernet zero one interface"
    ],
    "ru": [
      "и он также подключен к нашему интерфейсу gigabit ethernet zero one"
    ]
  },
  {
    "time": [
      61.944247,
      64.678059
    ],
    "en": [
      "next let's go to r1"
    ],
    "ru": [
      "дальше пойдем к r1"
    ]
  },
  {
    "time": [
      64.678059,
      70.755205
    ],
    "en": [
      "enable show CDP neighbors"
    ],
    "ru": [
      "включить показывать соседей CDP"
    ]
  },
  {
    "time": [
      70.755205,
      77.650601
    ],
    "en": [
      "r1 is connected to switch 1 via the gigabit ethernet zero one interface as we just saw"
    ],
    "ru": [
      "r1 подключен к коммутатору 1 через интерфейс Gigabit Ethernet zero one, как мы только что видели."
    ]
  },
  {
    "time": [
      77.650601,
      82.501143
    ],
    "en": [
      "it's also connected to r2 via the gigabit ethernet 0 0 interface"
    ],
    "ru": [
      "он также подключен к r2 через интерфейс Gigabit Ethernet 0 0"
    ]
  },
  {
    "time": [
      82.501143,
      86.281143
    ],
    "en": [
      "connected to our two's Gigabit Ethernet 0 0 interface"
    ],
    "ru": [
      "подключен к интерфейсу Gigabit Ethernet 0 0 наших двух"
    ]
  },
  {
    "time": [
      86.281143,
      91.343372
    ],
    "en": [
      "next let's go on to r2"
    ],
    "ru": [
      "Далее перейдем к r2"
    ]
  },
  {
    "time": [
      91.343372,
      97.008726
    ],
    "en": [
      "enable show CDP neighbors"
    ],
    "ru": [
      "включить показывать соседей CDP"
    ]
  },
  {
    "time": [
      97.008726,
      103.660372
    ],
    "en": [
      "as we just saw it's connected to r1 via the gigabit ethernet 0 0 interface"
    ],
    "ru": [
      "как мы только что видели, он подключен к r1 через интерфейс Gigabit Ethernet 0 0"
    ]
  },
  {
    "time": [
      103.660372,
      111.692913
    ],
    "en": [
      "and it's connected to switch to via the gigabit ethernet 0 1 interface 108.54483 connected to switch 2 is Gigabit Ethernet 0 1 interface"
    ],
    "ru": [
      "и он подключен к коммутатору через интерфейс Gigabit Ethernet 0 1 108.54483, подключенный к коммутатору 2, является интерфейсом Gigabit Ethernet 0 1"
    ]
  },
  {
    "time": [
      111.692913,
      115.349017
    ],
    "en": [
      "next let's go on switch to to confirm"
    ],
    "ru": [
      "Далее перейдем к переключению на, чтобы подтвердить"
    ]
  },
  {
    "time": [
      115.349017,
      126.926309
    ],
    "en": [
      "enable shows CDP neighbors 120.85335 as you can see it is indeed connected to r2 via the gigabit ethernet 0 1 interface"
    ],
    "ru": [
      "enable показывает соседей CDP 120.85335, поскольку вы можете видеть, что он действительно подключен к r2 через интерфейс Gigabit Ethernet 0 1"
    ]
  },
  {
    "time": [
      126.926309,
      128.851184
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
      128.851184,
      136.282642
    ],
    "en": [
      "step2 actually doesn't require any new commands"
    ],
    "ru": [
      "step2 на самом деле не требует никаких новых команд"
    ]
  },
  {
    "time": [
      136.282642,
      139.994475
    ],
    "en": [
      "I just want to point out something I didn't identify in the previous lab"
    ],
    "ru": [
      "Я просто хочу указать на то, что не обнаружил в предыдущей лабораторной работе."
    ]
  },
  {
    "time": [
      139.994475,
      142.690684
    ],
    "en": [
      "let's look back at switch 1"
    ],
    "ru": [
      "давай оглянемся на переключатель 1"
    ]
  },
  {
    "time": [
      142.690684,
      148.530975
    ],
    "en": [
      "in the results of the show CDP neighbors command there is a platform column"
    ],
    "ru": [
      "в результатах команды show CDP neighbors есть столбец платформы"
    ]
  },
  {
    "time": [
      148.530975,
      150.313704
    ],
    "en": [
      "what does that identify"
    ],
    "ru": [
      "что это идентифицирует"
    ]
  },
  {
    "time": [
      150.313704,
      153.312266
    ],
    "en": [
      "it's the hardware model of the neighboring device"
    ],
    "ru": [
      "это аппаратная модель соседнего устройства"
    ]
  },
  {
    "time": [
      153.312266,
      161.850078
    ],
    "en": [
      "in this case r1 is a C 1900 series router 157.84012 let's go on r1 to identify switch 1 and R 2"
    ],
    "ru": [
      "в данном случае r1 - это маршрутизатор серии C 1900 157.84012, давайте перейдем к r1, чтобы идентифицировать коммутатор 1 и R 2."
    ]
  },
  {
    "time": [
      161.850078,
      170.821766
    ],
    "en": [
      "so R 2 is a C 2900 series router and switch 1 is a 2960 series switch"
    ],
    "ru": [
      "Итак, R 2 - это маршрутизатор серии C 2900, а коммутатор 1 - это коммутатор серии 2960."
    ]
  },
  {
    "time": [
      170.821766,
      176.007682
    ],
    "en": [
      "finally let's go on r2 to identify the model of its neighbor switch 2"
    ],
    "ru": [
      "наконец, давайте перейдем к r2, чтобы определить модель его соседнего коммутатора 2"
    ]
  },
  {
    "time": [
      176.007682,
      181.728766
    ],
    "en": [
      "as you can see it is a 3560 model switch"
    ],
    "ru": [
      "как видите, это переключатель модели 3560"
    ]
  },
  {
    "time": [
      181.728766,
      188.261536
    ],
    "en": [
      "and if you remember the icon used to represent it here in packet tracer 186.01037 means it is a multi-layer switch"
    ],
    "ru": [
      "и если вы помните значок, использованный для его представления в пакетном трассировщике 186.01037, означает, что это многоуровневый коммутатор."
    ]
  },
  {
    "time": [
      188.261536,
      192.056973
    ],
    "en": [
      "multi-layer switches will be a topic for later labs"
    ],
    "ru": [
      "многоуровневые переключатели будут темой для следующих лабораторных работ"
    ]
  },
  {
    "time": [
      192.056973,
      207.882451
    ],
    "en": [
      "finally step three requires a new command which we didn't cover in previous labs 200.92891 actually there are two options 203.79493 we have to identify the iOS version of the neighboring devices"
    ],
    "ru": [
      "наконец, третий шаг требует новой команды, которую мы не рассматривали в предыдущих лабораторных работах. 200.92891 на самом деле есть два варианта 203.79493, которые мы должны определить для iOS-версии соседних устройств."
    ]
  },
  {
    "time": [
      207.882451,
      212.791222
    ],
    "en": [
      "note that you can do this on the device itself with the show version command"
    ],
    "ru": [
      "обратите внимание, что вы можете сделать это на самом устройстве с помощью команды show version"
    ]
  },
  {
    "time": [
      212.791222,
      216.867118
    ],
    "en": [
      "however for practice let's use CDP to find this information"
    ],
    "ru": [
      "однако для практики давайте воспользуемся CDP, чтобы найти эту информацию."
    ]
  },
  {
    "time": [
      216.867118,
      219.819263
    ],
    "en": [
      "let's go on switch one"
    ],
    "ru": [
      "давай перейдем на первый переключатель"
    ]
  },
  {
    "time": [
      219.819263,
      225.603326
    ],
    "en": [
      "now one option is the command show CDP neighbors detail"
    ],
    "ru": [
      "теперь один из вариантов - команда показать детали соседей CDP"
    ]
  },
  {
    "time": [
      225.603326,
      232.267367
    ],
    "en": [
      "clearly this gives more information than the standard show CDP neighbors command"
    ],
    "ru": [
      "очевидно, что это дает больше информации, чем стандартная команда show CDP neighbors."
    ]
  },
  {
    "time": [
      232.267367,
      236.278201
    ],
    "en": [
      "in this case switch one has only one neighbor"
    ],
    "ru": [
      "в этом случае коммутатор имеет только одного соседа"
    ]
  },
  {
    "time": [
      236.278201,
      242.405326
    ],
    "en": [
      "but if a device has many neighbors this command gives information for every neighbor which can be overwhelming"
    ],
    "ru": [
      "но если у устройства много соседей, эта команда дает информацию для каждого соседа, которая может быть подавляющей."
    ]
  },
  {
    "time": [
      242.405326,
      248.334909
    ],
    "en": [
      "if you want to view detailed information about just one device use this command"
    ],
    "ru": [
      "если вы хотите просмотреть подробную информацию только об одном устройстве, используйте эту команду"
    ]
  },
  {
    "time": [
      248.334909,
      255.409721
    ],
    "en": [
      "show CDP entry followed by the name of the neighboring device in this case r1"
    ],
    "ru": [
      "показать запись CDP, за которой следует имя соседнего устройства, в данном случае r1"
    ]
  },
  {
    "time": [
      255.409721,
      260.730721
    ],
    "en": [
      "this displays the same information just for the specified device"
    ],
    "ru": [
      "это отображает ту же информацию только для указанного устройства"
    ]
  },
  {
    "time": [
      260.730721,
      268.465637
    ],
    "en": [
      "now you can find the iOS version of r1 here 264.63595 it's 15.144"
    ],
    "ru": [
      "теперь вы можете найти версию r1 для iOS здесь 264.63595, это 15.144"
    ]
  },
  {
    "time": [
      268.465637,
      270.726053
    ],
    "en": [
      "now let's go on r1"
    ],
    "ru": [
      "теперь пойдем на r1"
    ]
  },
  {
    "time": [
      270.726053,
      276.067282
    ],
    "en": [
      "show CDP entry switch one switch"
    ],
    "ru": [
      "показать переключатель входа CDP один переключатель"
    ]
  },
  {
    "time": [
      276.067282,
      281.411011
    ],
    "en": [
      "run is running version 12.25 FX"
    ],
    "ru": [
      "run работает под управлением версии 12.25 FX"
    ]
  },
  {
    "time": [
      281.411011,
      285.396302
    ],
    "en": [
      "let's also check our ones other neighbor R 2"
    ],
    "ru": [
      "давайте также проверим нашего другого соседа R 2"
    ]
  },
  {
    "time": [
      285.396302,
      288.540552
    ],
    "en": [
      "show CDP entry r2"
    ],
    "ru": [
      "показать запись CDP r2"
    ]
  },
  {
    "time": [
      288.540552,
      292.942072
    ],
    "en": [
      "r2 is running 15.144"
    ],
    "ru": [
      "r2 работает 15.144"
    ]
  },
  {
    "time": [
      292.942072,
      294.324613
    ],
    "en": [
      "same as r1"
    ],
    "ru": [
      "то же, что и r1"
    ]
  },
  {
    "time": [
      294.324613,
      298.287175
    ],
    "en": [
      "finally let's go on r2 to find the version of switch 2"
    ],
    "ru": [
      "наконец, давайте перейдем к r2, чтобы найти версию переключателя 2"
    ]
  },
  {
    "time": [
      298.287175,
      302.833612
    ],
    "en": [
      "show CDP entry switch 2"
    ],
    "ru": [
      "показать переключатель входа CDP 2"
    ]
  },
  {
    "time": [
      302.833612,
      308.484591
    ],
    "en": [
      "switch 2 is running version 12.21"
    ],
    "ru": [
      "коммутатор 2 работает под управлением версии 12.21"
    ]
  },
  {
    "time": [
      308.484591,
      327.321277
    ],
    "en": [
      "now as a bonus I'd like to also demonstrate the show version command I briefly mentioned before 317.53407 this gives a lot of information about the device 320.81534 but for now let's just confirm the iOS versions we learned about via CDP 325.26659 on switch 1 first"
    ],
    "ru": [
      "Теперь в качестве бонуса я хотел бы также продемонстрировать команду show version, которую я кратко упомянул перед 317.53407, это дает много информации об устройстве 320.81534, но пока давайте просто сначала подтвердим версии iOS, о которых мы узнали через CDP 325.26659 на переключателе 1"
    ]
  },
  {
    "time": [
      327.321277,
      334.167547
    ],
    "en": [
      "show version as you can see there's a lot of info here"
    ],
    "ru": [
      "показать версию, как видите, здесь много информации"
    ]
  },
  {
    "time": [
      334.167547,
      337.788777
    ],
    "en": [
      "I recommend looking through it to familiarize yourself with what's here"
    ],
    "ru": [
      "Рекомендую просмотреть, чтобы ознакомиться с тем, что здесь"
    ]
  },
  {
    "time": [
      337.788777,
      345.686777
    ],
    "en": [
      "but let's just check the iOS version as I said 341.11611 switch 1 is running 12 point to 25 FX"
    ],
    "ru": [
      "но давайте просто проверим версию iOS, как я уже сказал, коммутатор 1 341.11611 работает от 12 точек до 25 FX"
    ]
  },
  {
    "time": [
      345.686777,
      348.673402
    ],
    "en": [
      "which is the same as we saw from CDP on our one"
    ],
    "ru": [
      "это то же самое, что мы видели в CDP на нашем"
    ]
  },
  {
    "time": [
      348.673402,
      351.712339
    ],
    "en": [
      "next let's go to our one"
    ],
    "ru": [
      "дальше пойдем к нашему"
    ]
  },
  {
    "time": [
      351.712339,
      359.099568
    ],
    "en": [
      "show version our one is running version 15 point 1 4 & 4"
    ],
    "ru": [
      "показать версию, у нас работает версия 15, пункт 1, 4 и 4"
    ]
  },
  {
    "time": [
      359.099568,
      361.590172
    ],
    "en": [
      "same as we saw from CDP again"
    ],
    "ru": [
      "то же, что мы снова видели из CDP"
    ]
  },
  {
    "time": [
      361.590172,
      364.925277
    ],
    "en": [
      "next are 2"
    ],
    "ru": [
      "следующие 2"
    ]
  },
  {
    "time": [
      364.925277,
      367.469527
    ],
    "en": [
      "show version"
    ],
    "ru": [
      "показать версию"
    ]
  },
  {
    "time": [
      367.469527,
      373.459777
    ],
    "en": [
      "r2 is running version 15 point 1 for M for same as our 1"
    ],
    "ru": [
      "r2 работает с версией 15, пункт 1 для M, как и наш 1"
    ]
  },
  {
    "time": [
      373.459777,
      376.648235
    ],
    "en": [
      "finally switch 2"
    ],
    "ru": [
      "наконец переключатель 2"
    ]
  },
  {
    "time": [
      376.648235,
      379.929068
    ],
    "en": [
      "show version"
    ],
    "ru": [
      "показать версию"
    ]
  },
  {
    "time": [
      379.929068,
      383.768526
    ],
    "en": [
      "it's running version 12 point to one"
    ],
    "ru": [
      "это работает версия 12 указывает на один"
    ]
  },
  {
    "time": [
      383.768526,
      385.834171
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
      385.834171,
      391.803817
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
      391.803817,
      396.695316
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
      396.695316,
      401.323108
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
      401.323108,
      408.496795
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
      408.496795,
      416.886295
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
      416.886295,
      416.886295
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
      416.886295,
      416.886295
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
      416.886295,
      416.886295
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]