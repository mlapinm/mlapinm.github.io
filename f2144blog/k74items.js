let objs = [
  {
    "time": [
      0.0,
      4.116979
    ],
    "en": [
      "welcome to this free gns3 lab for the CCNA"
    ],
    "ru": [
      "добро пожаловать в эту бесплатную лабораторию gns3 для CCNA"
    ]
  },
  {
    "time": [
      4.116979,
      11.004312
    ],
    "en": [
      "once again because packet tracer doesn't support all of the features necessary for CCNA studies"
    ],
    "ru": [
      "еще раз, потому что трассировщик пакетов не поддерживает все функции, необходимые для исследований CCNA"
    ]
  },
  {
    "time": [
      11.004312,
      14.042499
    ],
    "en": [
      "I have chosen to do this lab in gns3"
    ],
    "ru": [
      "Я решил провести эту лабораторную работу в gns3"
    ]
  },
  {
    "time": [
      14.042499,
      16.053374
    ],
    "en": [
      "rather than just skip the topic"
    ],
    "ru": [
      "а не просто пропустить тему"
    ]
  },
  {
    "time": [
      16.053374,
      19.863707
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
      19.863707,
      24.847978
    ],
    "en": [
      "however you will also need the Cisco IOS image to use for these routers"
    ],
    "ru": [
      "однако вам также понадобится образ Cisco IOS для использования с этими маршрутизаторами."
    ]
  },
  {
    "time": [
      24.847978,
      29.970415
    ],
    "en": [
      "I will include the name of the iOS image I used in the description"
    ],
    "ru": [
      "Я включу имя изображения iOS, которое я использовал в описании."
    ]
  },
  {
    "time": [
      29.970415,
      33.030707
    ],
    "en": [
      "however I cannot legally distribute the file itself"
    ],
    "ru": [
      "однако я не могу законно распространять сам файл"
    ]
  },
  {
    "time": [
      33.030707,
      40.423207
    ],
    "en": [
      "if you like these labs please consider supporting me if you have my patreon or the cryptocurrency options in the description"
    ],
    "ru": [
      "если вам нравятся эти лаборатории, подумайте о поддержке меня, если у вас есть мой патреон или варианты криптовалюты в описании"
    ]
  },
  {
    "time": [
      40.423207,
      45.57629
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
      45.57629,
      49.469436
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
      49.469436,
      54.541894
    ],
    "en": [
      "in this short lab we will look at IP SLA"
    ],
    "ru": [
      "в этой короткой лабораторной работе мы рассмотрим IP SLA."
    ]
  },
  {
    "time": [
      54.541894,
      58.295165
    ],
    "en": [
      "SLA stands for service level agreement"
    ],
    "ru": [
      "SLA означает соглашение об уровне обслуживания"
    ]
  },
  {
    "time": [
      58.295165,
      60.342831
    ],
    "en": [
      "what is an SLA"
    ],
    "ru": [
      "что такое SLA"
    ]
  },
  {
    "time": [
      60.342831,
      64.248497
    ],
    "en": [
      "it's an agreement between a service provider and a client"
    ],
    "ru": [
      "это соглашение между поставщиком услуг и клиентом"
    ]
  },
  {
    "time": [
      64.248497,
      69.041435
    ],
    "en": [
      "for example a guarantee of latency or internet speed"
    ],
    "ru": [
      "например гарантия задержки или скорости интернета"
    ]
  },
  {
    "time": [
      69.041435,
      74.327289
    ],
    "en": [
      "you can configure various IP SLA operations in Cisco IOS"
    ],
    "ru": [
      "вы можете настроить различные операции IP SLA в Cisco IOS"
    ]
  },
  {
    "time": [
      74.327289,
      80.663956
    ],
    "en": [
      "however for the CCNA you just have to be familiar with the ICMP echo operation"
    ],
    "ru": [
      "однако для CCNA вам просто нужно быть знакомым с операцией эха ICMP"
    ]
  },
  {
    "time": [
      80.663956,
      81.705476
    ],
    "en": [
      "aka ping"
    ],
    "ru": [
      "он же пинг"
    ]
  },
  {
    "time": [
      81.705476,
      86.891017
    ],
    "en": [
      "the ICMP echo operation sends pings at regular intervals"
    ],
    "ru": [
      "операция эха ICMP отправляет эхо-запросы через равные промежутки времени"
    ]
  },
  {
    "time": [
      86.891017,
      90.44658
    ],
    "en": [
      "and keeps a count of how many succeed and how many fail"
    ],
    "ru": [
      "и ведет подсчет того, сколько успешных и сколько неудачных"
    ]
  },
  {
    "time": [
      90.44658,
      91.975413
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
      91.975413,
      95.286184
    ],
    "en": [
      "let's hop on our one"
    ],
    "ru": [
      "давай запрыгнем на наш"
    ]
  },
  {
    "time": [
      95.286184,
      100.252121
    ],
    "en": [
      "I will configure the ICMP echo operation to send pings to our two"
    ],
    "ru": [
      "Я настрою операцию эха ICMP, чтобы отправлять пинги нашим двум"
    ]
  },
  {
    "time": [
      100.252121,
      104.473267
    ],
    "en": [
      "coughed II use the following command"
    ],
    "ru": [
      "кашлянул Я использую следующую команду"
    ]
  },
  {
    "time": [
      104.473267,
      108.828517
    ],
    "en": [
      "IP SLA followed by the operation number"
    ],
    "ru": [
      "IP SLA, за которым следует номер операции"
    ]
  },
  {
    "time": [
      108.828517,
      113.709079
    ],
    "en": [
      "you can configure multiple IP SLA operations on the same device"
    ],
    "ru": [
      "вы можете настроить несколько операций IP SLA на одном устройстве"
    ]
  },
  {
    "time": [
      113.709079,
      116.848892
    ],
    "en": [
      "so a number is necessary to identify them"
    ],
    "ru": [
      "поэтому номер необходим, чтобы идентифицировать их"
    ]
  },
  {
    "time": [
      116.848892,
      118.257683
    ],
    "en": [
      "I'll use one"
    ],
    "ru": [
      "Я воспользуюсь одним"
    ]
  },
  {
    "time": [
      118.257683,
      120.781579
    ],
    "en": [
      "and then there are no more options"
    ],
    "ru": [
      "а то вариантов больше нет"
    ]
  },
  {
    "time": [
      120.781579,
      124.250787
    ],
    "en": [
      "now I'm in IP SLA configuration mode"
    ],
    "ru": [
      "сейчас я нахожусь в режиме настройки IP SLA"
    ]
  },
  {
    "time": [
      124.250787,
      127.021642
    ],
    "en": [
      "let's check the options"
    ],
    "ru": [
      "давайте проверим варианты"
    ]
  },
  {
    "time": [
      127.021642,
      131.532975
    ],
    "en": [
      "as you can see there are various kinds of operations that we can use"
    ],
    "ru": [
      "как видите, мы можем использовать различные операции"
    ]
  },
  {
    "time": [
      131.532975,
      134.711579
    ],
    "en": [
      "let's configure an ICM a cooperation"
    ],
    "ru": [
      "давайте настроим ICM сотрудничество"
    ]
  },
  {
    "time": [
      134.711579,
      140.178141
    ],
    "en": [
      "and then enter the destination address of 12.0.0.2"
    ],
    "ru": [
      "а затем введите адрес назначения 12.0.0.2"
    ]
  },
  {
    "time": [
      140.178141,
      145.785245
    ],
    "en": [
      "okay now I'm brought into IPS la Echo configuration mode"
    ],
    "ru": [
      "хорошо, теперь я переведен в режим настройки IPS la Echo"
    ]
  },
  {
    "time": [
      145.785245,
      151.328849
    ],
    "en": [
      "again there are plenty of options here but let's just specify the frequency"
    ],
    "ru": [
      "Опять же, здесь есть много вариантов, но давайте просто укажем частоту"
    ]
  },
  {
    "time": [
      151.328849,
      154.298016
    ],
    "en": [
      "which is how often the pings will be sent to our -"
    ],
    "ru": [
      "как часто пинги будут отправляться на наш -"
    ]
  },
  {
    "time": [
      154.298016,
      158.072016
    ],
    "en": [
      "the instructions say to use a frequency of five"
    ],
    "ru": [
      "в инструкции указано использовать частоту пять"
    ]
  },
  {
    "time": [
      158.072016,
      160.485766
    ],
    "en": [
      "so frequency five"
    ],
    "ru": [
      "так частота пять"
    ]
  },
  {
    "time": [
      160.485766,
      161.725307
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
      161.725307,
      165.517891
    ],
    "en": [
      "now we have to schedule the operation"
    ],
    "ru": [
      "теперь нам нужно запланировать операцию"
    ]
  },
  {
    "time": [
      165.517891,
      168.522932
    ],
    "en": [
      "that is done in global configuration mode"
    ],
    "ru": [
      "это делается в режиме глобальной конфигурации"
    ]
  },
  {
    "time": [
      168.522932,
      174.644849
    ],
    "en": [
      "exit once again the command starts with IP SLA"
    ],
    "ru": [
      "выйти еще раз команда начинается с IP SLA"
    ]
  },
  {
    "time": [
      174.644849,
      179.565078
    ],
    "en": [
      "this time followed by schedule and the operation number one"
    ],
    "ru": [
      "на этот раз следует расписание и операция номер один"
    ]
  },
  {
    "time": [
      179.565078,
      183.324016
    ],
    "en": [
      "next let's specify the start time"
    ],
    "ru": [
      "далее давайте укажем время начала"
    ]
  },
  {
    "time": [
      183.324016,
      192.941766
    ],
    "en": [
      "we could configure it to start after ten minutes for example or start at a specific time like 12 o'clock for example"
    ],
    "ru": [
      "мы могли бы настроить его так, чтобы он запускался, например, через десять минут, или запускался в определенное время, например, в 12 часов."
    ]
  },
  {
    "time": [
      192.941766,
      196.085724
    ],
    "en": [
      "but let's schedule it to start now"
    ],
    "ru": [
      "но давайте запланируем это, чтобы начать сейчас"
    ]
  },
  {
    "time": [
      196.085724,
      200.258911
    ],
    "en": [
      "next let's specify the life"
    ],
    "ru": [
      "далее давайте уточним жизнь"
    ]
  },
  {
    "time": [
      200.258911,
      203.059974
    ],
    "en": [
      "which is how long we want the operation to continue"
    ],
    "ru": [
      "как долго мы хотим, чтобы операция продолжалась"
    ]
  },
  {
    "time": [
      203.059974,
      207.887286
    ],
    "en": [
      "the instructions say to schedule it to continue until manually stopped"
    ],
    "ru": [
      "в инструкциях говорится, что нужно запланировать его продолжение, пока не будет остановлено вручную"
    ]
  },
  {
    "time": [
      207.887286,
      210.487411
    ],
    "en": [
      "so let's use the forever option"
    ],
    "ru": [
      "так что давайте использовать вариант навсегда"
    ]
  },
  {
    "time": [
      210.487411,
      214.245765
    ],
    "en": [
      "r1 will continue sending pings forever"
    ],
    "ru": [
      "r1 будет продолжать посылать пинги вечно"
    ]
  },
  {
    "time": [
      214.245765,
      216.47764
    ],
    "en": [
      "until we remove that configuration"
    ],
    "ru": [
      "пока мы не удалим эту конфигурацию"
    ]
  },
  {
    "time": [
      216.47764,
      221.265411
    ],
    "en": [
      "okay that's all there is to the configuration"
    ],
    "ru": [
      "хорошо, это все, что нужно для конфигурации"
    ]
  },
  {
    "time": [
      221.265411,
      224.293765
    ],
    "en": [
      "there are two main parts"
    ],
    "ru": [
      "есть две основные части"
    ]
  },
  {
    "time": [
      224.293765,
      228.224786
    ],
    "en": [
      "configuring the operation and scheduling the operation"
    ],
    "ru": [
      "настройка операции и планирование операции"
    ]
  },
  {
    "time": [
      228.224786,
      231.896453
    ],
    "en": [
      "let's confirm our configuration"
    ],
    "ru": [
      "давайте подтвердим нашу конфигурацию"
    ]
  },
  {
    "time": [
      231.896453,
      236.404474
    ],
    "en": [
      "exit show IP SLA configuration"
    ],
    "ru": [
      "выход показать конфигурацию IP SLA"
    ]
  },
  {
    "time": [
      236.404474,
      239.657474
    ],
    "en": [
      "there is entry number one"
    ],
    "ru": [
      "есть запись номер один"
    ]
  },
  {
    "time": [
      239.657474,
      243.426245
    ],
    "en": [
      "it's type is ICMP echo"
    ],
    "ru": [
      "это тип эхо ICMP"
    ]
  },
  {
    "time": [
      243.426245,
      247.426495
    ],
    "en": [
      "and there's the target of 12.0.0.2"
    ],
    "ru": [
      "и есть цель 12.0.0.2"
    ]
  },
  {
    "time": [
      247.426495,
      253.172932
    ],
    "en": [
      "also a frequency of five start time already passed"
    ],
    "ru": [
      "также частота в пять раз уже прошла"
    ]
  },
  {
    "time": [
      253.172932,
      255.273265
    ],
    "en": [
      "since we configure its start time now"
    ],
    "ru": [
      "так как мы настраиваем время его начала сейчас"
    ]
  },
  {
    "time": [
      255.273265,
      258.210182
    ],
    "en": [
      "and also life forever"
    ],
    "ru": [
      "а также жизнь навсегда"
    ]
  },
  {
    "time": [
      258.210182,
      262.139245
    ],
    "en": [
      "now let's check the IP SLA statistics"
    ],
    "ru": [
      "теперь давайте проверим статистику IP SLA"
    ]
  },
  {
    "time": [
      262.139245,
      264.249078
    ],
    "en": [
      "to see how many things were successful"
    ],
    "ru": [
      "чтобы увидеть, сколько вещей было успешным"
    ]
  },
  {
    "time": [
      264.249078,
      268.382474
    ],
    "en": [
      "show IP SLA status dicks"
    ],
    "ru": [
      "показать параметры статуса IP SLA"
    ]
  },
  {
    "time": [
      268.382474,
      271.460932
    ],
    "en": [
      "there's the number of successes"
    ],
    "ru": [
      "есть количество успехов"
    ]
  },
  {
    "time": [
      271.460932,
      274.448203
    ],
    "en": [
      "and if I wait for a few seconds"
    ],
    "ru": [
      "и если я подожду несколько секунд"
    ]
  },
  {
    "time": [
      274.448203,
      276.719057
    ],
    "en": [
      "and then enter the command again"
    ],
    "ru": [
      "а затем введите команду еще раз"
    ]
  },
  {
    "time": [
      276.719057,
      278.40789
    ],
    "en": [
      "the number should increase"
    ],
    "ru": [
      "число должно увеличиваться"
    ]
  },
  {
    "time": [
      278.40789,
      283.952244
    ],
    "en": [
      "show IP SLA statistics"
    ],
    "ru": [
      "показать статистику IP SLA"
    ]
  },
  {
    "time": [
      283.952244,
      287.034389
    ],
    "en": [
      "there you can see that the number has increased"
    ],
    "ru": [
      "там видно, что число увеличилось"
    ]
  },
  {
    "time": [
      287.034389,
      289.769848
    ],
    "en": [
      "because pings are being sent every five seconds"
    ],
    "ru": [
      "потому что пинги отправляются каждые пять секунд"
    ]
  },
  {
    "time": [
      289.769848,
      294.780681
    ],
    "en": [
      "also notice the latest RTT appear"
    ],
    "ru": [
      "также обратите внимание, что появляется последний RTT"
    ]
  },
  {
    "time": [
      294.780681,
      297.476139
    ],
    "en": [
      "that's the latest round-trip time"
    ],
    "ru": [
      "это последнее время туда и обратно"
    ]
  },
  {
    "time": [
      297.476139,
      301.748452
    ],
    "en": [
      "which is how long the ping took to go to r2 and come back"
    ],
    "ru": [
      "сколько времени потребовалось пингу, чтобы перейти на r2 и вернуться"
    ]
  },
  {
    "time": [
      301.748452,
      306.337389
    ],
    "en": [
      "now let's shut down our twos g00 interface"
    ],
    "ru": [
      "теперь давайте отключим наш интерфейс twos g00"
    ]
  },
  {
    "time": [
      306.337389,
      309.391723
    ],
    "en": [
      "and then the number of failures should start increasing"
    ],
    "ru": [
      "и тогда количество отказов должно начать расти"
    ]
  },
  {
    "time": [
      309.391723,
      312.652327
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
      312.652327,
      316.73541
    ],
    "en": [
      "interface g00 shutdown"
    ],
    "ru": [
      "интерфейс g00 выключение"
    ]
  },
  {
    "time": [
      316.73541,
      319.693347
    ],
    "en": [
      "now let's go back on our one"
    ],
    "ru": [
      "теперь давайте вернемся к нашему"
    ]
  },
  {
    "time": [
      319.693347,
      324.800305
    ],
    "en": [
      "i'll wait 10 seconds or so to let a few pings be sent"
    ],
    "ru": [
      "Я подожду 10 секунд или около того, чтобы отправить несколько пингов"
    ]
  },
  {
    "time": [
      324.800305,
      338.025972
    ],
    "en": [
      "okay let's check"
    ],
    "ru": [
      "хорошо давай проверим"
    ]
  },
  {
    "time": [
      338.025972,
      341.53618
    ],
    "en": [
      "show IP SLA statistics"
    ],
    "ru": [
      "показать статистику IP SLA"
    ]
  },
  {
    "time": [
      341.53618,
      346.124263
    ],
    "en": [
      "as you can see the number of failures has started increasing"
    ],
    "ru": [
      "как видите, количество отказов начало расти"
    ]
  },
  {
    "time": [
      346.124263,
      352.013408
    ],
    "en": [
      "and the latest RTT indicates no connection busy or time out"
    ],
    "ru": [
      "и последний RTT указывает, что соединение не занято или время ожидания истекло."
    ]
  },
  {
    "time": [
      352.013408,
      355.863763
    ],
    "en": [
      "let's enable our 2's g00 interface now"
    ],
    "ru": [
      "давайте теперь включим интерфейс g00 нашего 2"
    ]
  },
  {
    "time": [
      355.863763,
      359.026742
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
      359.026742,
      365.575054
    ],
    "en": [
      "okay now all wait 10 seconds or so again to let a few more pings be sent from r1 to r2"
    ],
    "ru": [
      "хорошо, теперь все подождите 10 секунд или около того, чтобы дать еще несколько пингов от r1 до r2"
    ]
  },
  {
    "time": [
      365.575054,
      380.129471
    ],
    "en": [
      "okay now let's check the IP SLA statistics once more on our one"
    ],
    "ru": [
      "хорошо, теперь давайте еще раз проверим статистику IP SLA на нашем"
    ]
  },
  {
    "time": [
      380.129471,
      383.226242
    ],
    "en": [
      "the number of successes should have increased"
    ],
    "ru": [
      "количество успехов должно было увеличиться"
    ]
  },
  {
    "time": [
      383.226242,
      387.477867
    ],
    "en": [
      "and we should see a normal latest RTT value"
    ],
    "ru": [
      "и мы должны увидеть нормальное последнее значение RTT"
    ]
  },
  {
    "time": [
      387.477867,
      391.105783
    ],
    "en": [
      "show IP SLA statistics"
    ],
    "ru": [
      "показать статистику IP SLA"
    ]
  },
  {
    "time": [
      391.105783,
      395.267033
    ],
    "en": [
      "there we go the pings are working again"
    ],
    "ru": [
      "вот и пинги снова работают"
    ]
  },
  {
    "time": [
      395.267033,
      397.108533
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
      397.108533,
      401.108741
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
      401.108741,
      404.198428
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
      404.198428,
      411.741636
    ],
    "en": [
      "there are only a few more labs left in my CCNA series but please subscribe to catch my next project"
    ],
    "ru": [
      "В моей серии CCNA осталось всего несколько лабораторий, но, пожалуйста, подпишитесь, чтобы увидеть мой следующий проект"
    ]
  },
  {
    "time": [
      411.741636,
      418.106698
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
      418.106698,
      426.794303
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
      426.794303,
      426.794303
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
      426.794303,
      426.794303
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
      426.794303,
      426.794303
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]