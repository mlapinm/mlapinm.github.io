let objs = [
  {
    "time": [
      1.23,
      3.82
    ],
    "en": [
      "Welcome to Jeremy’s IT Lab."
    ],
    "ru": [
      "Добро пожаловать в ИТ-лабораторию Джереми."
    ]
  },
  {
    "time": [
      3.82,
      7.279
    ],
    "en": [
      "This is a free, complete course for the CCNA."
    ],
    "ru": [
      "Это бесплатный полный курс CCNA."
    ]
  },
  {
    "time": [
      7.279,
      11.3
    ],
    "en": [
      "If you like these videos, please subscribe to follow along with the series."
    ],
    "ru": [
      "Если вам нравятся эти видео, подпишитесь, чтобы следить за сериалом."
    ]
  },
  {
    "time": [
      11.3,
      17.0
    ],
    "en": [
      "Also, please like and leave a comment, and share the video to help spread this free series of videos."
    ],
    "ru": [
      "Также, пожалуйста, поставьте лайк и оставьте комментарий, а также поделитесь видео, чтобы помочь распространить эту бесплатную серию видео."
    ]
  },
  {
    "time": [
      17.0,
      18.25
    ],
    "en": [
      "of videos. Thanks for your help."
    ],
    "ru": [
      "видео. Спасибо за вашу помощь."
    ]
  },
  {
    "time": [
      18.25,
      22.539
    ],
    "en": [
      "Also, remember to sign up via the link in the description to get all of the lab files"
    ],
    "ru": [
      "Также не забудьте зарегистрироваться по ссылке в описании, чтобы получить все лабораторные файлы."
    ]
  },
  {
    "time": [
      22.539,
      27.27
    ],
    "en": [
      "for this course, so you can try it out yourself in packet tracer."
    ],
    "ru": [
      "для этого курса, так что вы можете попробовать его самостоятельно в пакетном трассировщике."
    ]
  },
  {
    "time": [
      27.27,
      31.5
    ],
    "en": [
      "If you want more labs like these, I highly recommend picking up Boson’s NetSim for"
    ],
    "ru": [
      "Если вам нужно больше подобных лабораторий, я настоятельно рекомендую приобрести Boson's NetSim для"
    ]
  },
  {
    "time": [
      31.5,
      35.35
    ],
    "en": [
      "the CCNA, click the link in the video description to check it out."
    ],
    "ru": [
      "CCNA, щелкните ссылку в описании видео, чтобы ознакомиться с ним."
    ]
  },
  {
    "time": [
      35.35,
      40.14
    ],
    "en": [
      "It’s a network simulator like packet tracer, but it’s even better, and it includes all"
    ],
    "ru": [
      "Это сетевой симулятор, похожий на трассировщик пакетов, но он еще лучше и включает в себя все"
    ]
  },
  {
    "time": [
      40.14,
      45.44
    ],
    "en": [
      "of these guided labs to not only help you get hands-on practice configuring and troubleshooting,"
    ],
    "ru": [
      "из этих лабораторных работ, которые не только помогут вам на практике настроить и устранить неполадки,"
    ]
  },
  {
    "time": [
      45.44,
      48.39
    ],
    "en": [
      "but also deepen your understanding of the exam topics."
    ],
    "ru": [
      "но также углубите свое понимание экзаменационных тем."
    ]
  },
  {
    "time": [
      48.39,
      53.79
    ],
    "en": [
      "I used it myself when studying for my certifications, so I feel confident about recommending it"
    ],
    "ru": [
      "Я сам использовал его, когда готовился к получению сертификатов, поэтому могу с уверенностью рекомендовать его."
    ]
  },
  {
    "time": [
      53.79,
      55.329
    ],
    "en": [
      "to all of you."
    ],
    "ru": [
      "всем вам."
    ]
  },
  {
    "time": [
      55.329,
      60.77
    ],
    "en": [
      "If you want to get your own copy of NetSim, please follow the link in the video description."
    ],
    "ru": [
      "Если вы хотите получить собственную копию NetSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      60.77,
      67.76
    ],
    "en": [
      "Also watch until the end of this video for a bonus look at an OSPF lab in Boson NetSim."
    ],
    "ru": [
      "Также просмотрите до конца этого видео, чтобы получить бонусный взгляд на лабораторию OSPF в Boson NetSim."
    ]
  },
  {
    "time": [
      67.76,
      72.07
    ],
    "en": [
      "In this lab we’ll do a bit of OSPF configuration and troubleshooting."
    ],
    "ru": [
      "В этой лабораторной работе мы немного займемся настройкой OSPF и устранением неполадок."
    ]
  },
  {
    "time": [
      72.07,
      75.5
    ],
    "en": [
      "Most of this network is pre-configured, except for a few things."
    ],
    "ru": [
      "Большая часть этой сети предварительно настроена, за исключением нескольких вещей."
    ]
  },
  {
    "time": [
      75.5,
      77.73
    ],
    "en": [
      "However, there are a few misconfigurations."
    ],
    "ru": [
      "Однако есть несколько неправильных настроек."
    ]
  },
  {
    "time": [
      77.73,
      83.88
    ],
    "en": [
      "So, let’s complete the configurations and then troubleshoot the misconfigurations."
    ],
    "ru": [
      "Итак, давайте завершим настройку, а затем устраним ошибки."
    ]
  },
  {
    "time": [
      83.88,
      87.81
    ],
    "en": [
      "By the way, because there is troubleshooting in this lab I highly recommend trying it out"
    ],
    "ru": [
      "Кстати, поскольку в этой лабораторной работе есть поиск и устранение неисправностей, я настоятельно рекомендую попробовать."
    ]
  },
  {
    "time": [
      87.81,
      90.83
    ],
    "en": [
      "yourself before watching this video."
    ],
    "ru": [
      "перед просмотром этого видео."
    ]
  },
  {
    "time": [
      90.83,
      95.88
    ],
    "en": [
      "If you see my solutions to the problems you won’t have the opportunity to figure things out yourself."
    ],
    "ru": [
      "Если вы увидите мои решения проблем, у вас не будет возможности разобраться во всем самостоятельно."
    ]
  },
  {
    "time": [
      95.88,
      99.74000000000001
    ],
    "en": [
      "out yourself. Okay, let’s get started."
    ],
    "ru": [
      "из себя. Ладно, приступим."
    ]
  },
  {
    "time": [
      99.74000000000001,
      105.15
    ],
    "en": [
      "First up in step 1, we have to configure this serial connection between R1 and R2, and then"
    ],
    "ru": [
      "Сначала на шаге 1 мы должны настроить это последовательное соединение между R1 и R2, а затем"
    ]
  },
  {
    "time": [
      105.15,
      108.46000000000001
    ],
    "en": [
      "configure OSPF on both routers."
    ],
    "ru": [
      "настроить OSPF на обоих маршрутизаторах."
    ]
  },
  {
    "time": [
      108.46000000000001,
      114.64
    ],
    "en": [
      "Note that R2 already has OSPF enabled on its G0/0 interface, but not the serial interface."
    ],
    "ru": [
      "Обратите внимание, что в R2 уже включен OSPF на интерфейсе G0 / 0, но не на последовательном интерфейсе."
    ]
  },
  {
    "time": [
      114.64,
      121.4
    ],
    "en": [
      "I’ll configure R1 first. ENABLE."
    ],
    "ru": [
      "Сначала я настрою R1. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      121.4,
      123.78
    ],
    "en": [
      "ENABLE. First I’ll check the interfaces."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. Сначала проверю интерфейсы."
    ]
  },
  {
    "time": [
      123.78,
      126.42
    ],
    "en": [
      "SHOW IP INTERFACE BRIEF."
    ],
    "ru": [
      "ПОКАЗАТЬ КРАТКОЕ ОПИСАНИЕ IP-ИНТЕРФЕЙСА."
    ]
  },
  {
    "time": [
      126.42,
      131.64
    ],
    "en": [
      "Okay, so G0/0 is already configured, but S0/0/0 is not."
    ],
    "ru": [
      "Итак, G0 / 0 уже настроен, а S0 / 0/0 - нет."
    ]
  },
  {
    "time": [
      131.64,
      134.26
    ],
    "en": [
      "I’ll configure it now."
    ],
    "ru": [
      "Я настрою его сейчас."
    ]
  },
  {
    "time": [
      134.26,
      138.81
    ],
    "en": [
      "CONF T. INTERFACE S0/0/0."
    ],
    "ru": [
      "CONF T. ИНТЕРФЕЙС S0 / 0/0."
    ]
  },
  {
    "time": [
      138.81,
      140.629
    ],
    "en": [
      "First the IP address."
    ],
    "ru": [
      "Сначала IP-адрес."
    ]
  },
  {
    "time": [
      140.629,
      147.44
    ],
    "en": [
      "IP ADDRESS 192.168.12.1 255.255.255.252."
    ],
    "ru": [
      "IP-АДРЕС 192.168.12.1 255.255.255.252."
    ]
  },
  {
    "time": [
      147.44,
      152.159
    ],
    "en": [
      "Now, the instructions say to set a clock rate of 128 kilobits."
    ],
    "ru": [
      "Теперь в инструкции сказано установить тактовую частоту 128 килобит."
    ]
  },
  {
    "time": [
      152.159,
      154.45
    ],
    "en": [
      "kilobits. We have to do that on the DCE side."
    ],
    "ru": [
      "килобит. Мы должны сделать это со стороны DCE."
    ]
  },
  {
    "time": [
      154.45,
      158.29
    ],
    "en": [
      "Let’s check if R1 is the DCE."
    ],
    "ru": [
      "Давайте проверим, является ли R1 АКД."
    ]
  },
  {
    "time": [
      158.29,
      163.23
    ],
    "en": [
      "DO SHOW CONTROLLERS S0/0/0."
    ],
    "ru": [
      "ПОКАЗАТЬ КОНТРОЛЛЕРЫ S0 / 0/0."
    ]
  },
  {
    "time": [
      163.23,
      172.87
    ],
    "en": [
      "As you can see, R1 is the DCE, so let’s set the clock rate. CLOCK RATE 128000."
    ],
    "ru": [
      "Как видите, R1 - это DCE, поэтому давайте установим тактовую частоту. ЧАСЫ 128000."
    ]
  },
  {
    "time": [
      172.87,
      176.4
    ],
    "en": [
      "CLOCK RATE 128000. Finally I’ll enable the interface. NO SHUTDOWN."
    ],
    "ru": [
      "ЧАСЫ 128000. Наконец, я включаю интерфейс. НЕТ ОСТАНОВА."
    ]
  },
  {
    "time": [
      176.4,
      183.68
    ],
    "en": [
      "NO SHUTDOWN. Okay, now I’ll configure R2’s end. ENABLE."
    ],
    "ru": [
      "НЕТ ОСТАНОВА. Хорошо, теперь я настрою конец R2. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      183.68,
      186.69
    ],
    "en": [
      "ENABLE. SHOW IP INTERFACE BRIEF."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. ПОКАЗАТЬ КРАТКОЕ ОПИСАНИЕ IP-ИНТЕРФЕЙСА."
    ]
  },
  {
    "time": [
      186.69,
      193.25
    ],
    "en": [
      "Like R1, its G0/0 interface is already configured, but not the serial interface."
    ],
    "ru": [
      "Как и R1, его интерфейс G0 / 0 уже настроен, но не последовательный интерфейс."
    ]
  },
  {
    "time": [
      193.25,
      196.5
    ],
    "en": [
      "CONF T. INTERFACE S0/0/0."
    ],
    "ru": [
      "CONF T. ИНТЕРФЕЙС S0 / 0/0."
    ]
  },
  {
    "time": [
      196.5,
      205.139
    ],
    "en": [
      "IP ADDRESS 192.168.12.2 255.255.255.252."
    ],
    "ru": [
      "IP-АДРЕС 192.168.12.2 255.255.255.252."
    ]
  },
  {
    "time": [
      205.139,
      211.939
    ],
    "en": [
      "We already know this is the DTE end, since R1 is the DCE end, but let’s check anyway."
    ],
    "ru": [
      "Мы уже знаем, что это конец DTE, поскольку R1 - конец DCE, но давайте все равно проверим."
    ]
  },
  {
    "time": [
      211.939,
      216.95
    ],
    "en": [
      "DO SHOW CONTROLLERS S0/0/0."
    ],
    "ru": [
      "ПОКАЗАТЬ КОНТРОЛЛЕРЫ S0 / 0/0."
    ]
  },
  {
    "time": [
      216.95,
      218.909
    ],
    "en": [
      "Indeed it is the DTE end."
    ],
    "ru": [
      "На самом деле это конец DTE."
    ]
  },
  {
    "time": [
      218.909,
      223.82999999999998
    ],
    "en": [
      "Okay, let’s enable the interface. NO SHUTDOWN."
    ],
    "ru": [
      "Хорошо, давайте включим интерфейс. НЕТ ОСТАНОВА."
    ]
  },
  {
    "time": [
      223.82999999999998,
      226.92000000000002
    ],
    "en": [
      "NO SHUTDOWN. Now let’s enable OSPF on the interfaces."
    ],
    "ru": [
      "НЕТ ОСТАНОВА. Теперь давайте включим OSPF на интерфейсах."
    ]
  },
  {
    "time": [
      226.92000000000002,
      231.26
    ],
    "en": [
      "First here on R2, let me see if OSPF is running."
    ],
    "ru": [
      "Сначала на R2, позвольте мне посмотреть, работает ли OSPF."
    ]
  },
  {
    "time": [
      231.26,
      234.34
    ],
    "en": [
      "DO SHOW IP PROTOCOLS."
    ],
    "ru": [
      "ПОКАЗАТЬ ПРОТОКОЛЫ IP."
    ]
  },
  {
    "time": [
      234.34,
      239.4
    ],
    "en": [
      "Okay, OSPF is running, and it’s enabled on the G0/0 interface."
    ],
    "ru": [
      "Хорошо, OSPF запущен, и он включен на интерфейсе G0 / 0."
    ]
  },
  {
    "time": [
      239.4,
      246.219
    ],
    "en": [
      "Since I’m already on the S0/0/0 interface, I’ll just enable OSPF directly here."
    ],
    "ru": [
      "Поскольку я уже использую интерфейс S0 / 0/0, я просто включу OSPF прямо здесь."
    ]
  },
  {
    "time": [
      246.219,
      250.34
    ],
    "en": [
      "IP OSPF 1 AREA 0."
    ],
    "ru": [
      "IP OSPF 1 ОБЛАСТЬ 0."
    ]
  },
  {
    "time": [
      250.34,
      254.769
    ],
    "en": [
      "By the way, in a real network I’d recommend being consistent about either enabling OSPF"
    ],
    "ru": [
      "Между прочим, в реальной сети я бы рекомендовал быть последовательным при включении OSPF"
    ]
  },
  {
    "time": [
      254.769,
      260.91
    ],
    "en": [
      "directly on the interface, or using the NETWORK command from OSPF config mode."
    ],
    "ru": [
      "непосредственно на интерфейсе или с помощью команды NETWORK из режима конфигурации OSPF."
    ]
  },
  {
    "time": [
      260.91,
      266.35
    ],
    "en": [
      "Now both configuration methods are mixed on R2, but it’s not a big deal in a lab like this."
    ],
    "ru": [
      "Теперь оба метода настройки смешаны на R2, но в такой лаборатории это не имеет большого значения."
    ]
  },
  {
    "time": [
      266.35,
      271.75
    ],
    "en": [
      "this. Okay, now I’ll enable OSPF on R1."
    ],
    "ru": [
      "это. Хорошо, теперь я включу OSPF на R1."
    ]
  },
  {
    "time": [
      271.75,
      274.31
    ],
    "en": [
      "First let’s check if OSPF is enabled."
    ],
    "ru": [
      "Сначала давайте проверим, включен ли OSPF."
    ]
  },
  {
    "time": [
      274.31,
      278.18
    ],
    "en": [
      "DO SHOW IP PROTOCOLS. Okay, it isn’t."
    ],
    "ru": [
      "ПОКАЗАТЬ ПРОТОКОЛЫ IP. Ладно, это не так."
    ]
  },
  {
    "time": [
      278.18,
      281.95
    ],
    "en": [
      "Okay, it isn’t. Again, I’m already on the interface so let’s enable it here."
    ],
    "ru": [
      "Ладно, это не так. Опять же, я уже нахожусь в интерфейсе, поэтому давайте включим его здесь."
    ]
  },
  {
    "time": [
      281.95,
      286.2
    ],
    "en": [
      "IP OSPF 1 AREA 0."
    ],
    "ru": [
      "IP OSPF 1 ОБЛАСТЬ 0."
    ]
  },
  {
    "time": [
      286.2,
      290.64
    ],
    "en": [
      "And I’ll do the same on G0/0. INTERFACE G0/0."
    ],
    "ru": [
      "И я сделаю то же самое на G0 / 0. ИНТЕРФЕЙС G0 / 0."
    ]
  },
  {
    "time": [
      290.64,
      293.57
    ],
    "en": [
      "INTERFACE G0/0. IP OSPF 1 AREA 0."
    ],
    "ru": [
      "ИНТЕРФЕЙС G0 / 0. IP OSPF 1 ОБЛАСТЬ 0."
    ]
  },
  {
    "time": [
      293.57,
      296.31
    ],
    "en": [
      "Let’s check the interfaces."
    ],
    "ru": [
      "Проверим интерфейсы."
    ]
  },
  {
    "time": [
      296.31,
      301.7
    ],
    "en": [
      "DO SHOW IP OSPF INTERFACE S0/0/0."
    ],
    "ru": [
      "ПОКАЗАТЬ ИНТЕРФЕЙС IP OSPF S0 / 0/0."
    ]
  },
  {
    "time": [
      301.7,
      305.06
    ],
    "en": [
      "Notice the network type of point-to-point is enabled by default."
    ],
    "ru": [
      "Обратите внимание, что тип сети «точка-точка» включен по умолчанию."
    ]
  },
  {
    "time": [
      305.06,
      311.13
    ],
    "en": [
      "That’s because this is a serial interface, using the HDLC encapsulation."
    ],
    "ru": [
      "Это потому, что это последовательный интерфейс, использующий инкапсуляцию HDLC."
    ]
  },
  {
    "time": [
      311.13,
      316.61
    ],
    "en": [
      "Also notice that there is no mention of DR or BDR, because as you know the OSPF point-to-point"
    ],
    "ru": [
      "Также обратите внимание, что здесь нет упоминания о DR или BDR, потому что, как вы знаете, точка-точка OSPF"
    ]
  },
  {
    "time": [
      316.61,
      321.14
    ],
    "en": [
      "network type doesn’t use the concept of DR and BDR."
    ],
    "ru": [
      "Тип сети не использует концепции DR и BDR."
    ]
  },
  {
    "time": [
      321.14,
      325.52
    ],
    "en": [
      "The default Hello and Dead timers are 10 and 40 seconds, as expected."
    ],
    "ru": [
      "Как и ожидалось, таймеры Hello и Dead по умолчанию составляют 10 и 40 секунд."
    ]
  },
  {
    "time": [
      325.52,
      329.03
    ],
    "en": [
      "Okay, let’s check G0/0."
    ],
    "ru": [
      "Хорошо, давайте проверим G0 / 0."
    ]
  },
  {
    "time": [
      329.03,
      333.53
    ],
    "en": [
      "DO SHOW IP OSPF INTERFACE G0/0."
    ],
    "ru": [
      "ПОКАЗАТЬ ИНТЕРФЕЙС IP OSPF G0 / 0."
    ]
  },
  {
    "time": [
      333.53,
      340.24
    ],
    "en": [
      "Because this is an Ethernet interface, the default network type is broadcast, and R1 is the DR."
    ],
    "ru": [
      "Поскольку это интерфейс Ethernet, тип сети по умолчанию - широковещательная, а R1 - это DR."
    ]
  },
  {
    "time": [
      340.24,
      344.22
    ],
    "en": [
      "is the DR. Because there are no other routers connected to this interface, there is no BDR."
    ],
    "ru": [
      "это ДР. Поскольку к этому интерфейсу не подключены другие маршрутизаторы, нет BDR."
    ]
  },
  {
    "time": [
      344.22,
      348.76
    ],
    "en": [
      "Okay, finally let’s see if R1 is learning OSPF routes."
    ],
    "ru": [
      "Хорошо, наконец, давайте посмотрим, изучает ли R1 маршруты OSPF."
    ]
  },
  {
    "time": [
      348.76,
      350.69
    ],
    "en": [
      "DO SHOW IP ROUTE."
    ],
    "ru": [
      "ПОКАЗАТЬ IP-МАРШРУТ."
    ]
  },
  {
    "time": [
      350.69,
      360.16
    ],
    "en": [
      "So, R1 has learned two routes from OSPF, to the 192.168.34.0/30 network between R3 and"
    ],
    "ru": [
      "Итак, R1 узнал два маршрута от OSPF к сети 192.168.34.0/30 между R3 и"
    ]
  },
  {
    "time": [
      360.16,
      367.03
    ],
    "en": [
      "R4, and the 192.168.245.0/29 network between R2, R4, and R5."
    ],
    "ru": [
      "R4 и сеть 192.168.245.0/29 между R2, R4 и R5."
    ]
  },
  {
    "time": [
      367.03,
      373.58
    ],
    "en": [
      "There are some missing routes, so let’s move on to the troubleshooting section to fix the network."
    ],
    "ru": [
      "Есть некоторые отсутствующие маршруты, поэтому давайте перейдем к разделу устранения неполадок, чтобы исправить сеть."
    ]
  },
  {
    "time": [
      373.58,
      380.04
    ],
    "en": [
      "fix the network. First up, in step 2 it says that only R3 has a route to 10.0.2.0/24."
    ],
    "ru": [
      "исправить сеть. Во-первых, на шаге 2 говорится, что только R3 имеет маршрут к 10.0.2.0/24."
    ]
  },
  {
    "time": [
      380.04,
      384.56
    ],
    "en": [
      "Well, as we just saw R1 indeed does not have a route to the network."
    ],
    "ru": [
      "Что ж, как мы только что видели, R1 действительно не имеет маршрута к сети."
    ]
  },
  {
    "time": [
      384.56,
      390.28
    ],
    "en": [
      "What could prevent the other routers from learning a route to 10.0.2.0/24?"
    ],
    "ru": [
      "Что может помешать другим маршрутизаторам изучить маршрут к 10.0.2.0/24?"
    ]
  },
  {
    "time": [
      390.28,
      394.90999999999997
    ],
    "en": [
      "For example, perhaps R3 and R4 aren’t successfully forming an OSPF adjacency."
    ],
    "ru": [
      "Например, возможно, R3 и R4 не образуют смежность OSPF."
    ]
  },
  {
    "time": [
      394.90999999999997,
      401.12
    ],
    "en": [
      "Let’s check, I’ll go on R4. ENABLE."
    ],
    "ru": [
      "Давай проверим, пойду на R4. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      401.12,
      404.43
    ],
    "en": [
      "ENABLE. SHOW IP OSPF NEIGHBOR."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. ПОКАЗАТЬ IP OSPF СОСЕДА."
    ]
  },
  {
    "time": [
      404.43,
      409.43
    ],
    "en": [
      "As you can see here, R3 and R4 do have a full OSPF adjacency."
    ],
    "ru": [
      "Как вы можете видеть здесь, R3 и R4 действительно имеют полную смежность OSPF."
    ]
  },
  {
    "time": [
      409.43,
      416.34000000000003
    ],
    "en": [
      "Is R4 learning a route to 10.0.2.0/24? SHOW IP ROUTE."
    ],
    "ru": [
      "R4 изучает маршрут к 10.0.2.0/24? ПОКАЗАТЬ IP-МАРШРУТ."
    ]
  },
  {
    "time": [
      416.34000000000003,
      417.34000000000003
    ],
    "en": [
      "SHOW IP ROUTE. It isn’t."
    ],
    "ru": [
      "ПОКАЗАТЬ IP-МАРШРУТ. Это не так."
    ]
  },
  {
    "time": [
      417.34000000000003,
      419.68
    ],
    "en": [
      "So, think back to the lecture video."
    ],
    "ru": [
      "Итак, вспомните видео с лекцией."
    ]
  },
  {
    "time": [
      419.68,
      425.82
    ],
    "en": [
      "What could cause R4 to fail to learn a route from R3, even though they have a full OSPF adjacency?"
    ],
    "ru": [
      "Что могло привести к тому, что R4 не смог узнать маршрут от R3, даже если у них есть полная смежность OSPF?"
    ]
  },
  {
    "time": [
      425.82,
      429.05
    ],
    "en": [
      "adjacency? Let’s check the network type."
    ],
    "ru": [
      "смежность? Проверим тип сети."
    ]
  },
  {
    "time": [
      429.05,
      432.14
    ],
    "en": [
      "SHOW IP OSPF INTERFACE G0/1."
    ],
    "ru": [
      "ПОКАЗАТЬ ИНТЕРФЕЙС IP OSPF G0 / 1."
    ]
  },
  {
    "time": [
      432.14,
      437.11
    ],
    "en": [
      "R4’s G0/1 interface is using the default broadcast network type."
    ],
    "ru": [
      "Интерфейс G0 / 1 R4 использует тип широковещательной сети по умолчанию."
    ]
  },
  {
    "time": [
      437.11,
      443.35
    ],
    "en": [
      "How about on R3? ENABLE."
    ],
    "ru": [
      "Как насчет R3? ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      443.35,
      445.96
    ],
    "en": [
      "ENABLE. SHOW IP OSPF INTERFACE G0/1."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. ПОКАЗАТЬ ИНТЕРФЕЙС IP OSPF G0 / 1."
    ]
  },
  {
    "time": [
      445.96,
      451.44
    ],
    "en": [
      "So, R3’s G0/1 is using the point-to-point network type."
    ],
    "ru": [
      "Итак, G0 / 1 маршрутизатора R3 использует тип сети «точка-точка»."
    ]
  },
  {
    "time": [
      451.44,
      455.36
    ],
    "en": [
      "For a point-to-point connection between two routers like this it’s no problem to use"
    ],
    "ru": [
      "Для такого соединения точка-точка между двумя маршрутизаторами не проблема использовать"
    ]
  },
  {
    "time": [
      455.36,
      460.2
    ],
    "en": [
      "the point-to-point network type, even though it’s not the default on Ethernet interfaces."
    ],
    "ru": [
      "тип сети \"точка-точка\", даже если он не используется по умолчанию для интерфейсов Ethernet."
    ]
  },
  {
    "time": [
      460.2,
      463.92
    ],
    "en": [
      "However, when there is a mismatch like this problems will occur."
    ],
    "ru": [
      "Однако при таком несоответствии возникнут проблемы."
    ]
  },
  {
    "time": [
      463.92,
      469.02
    ],
    "en": [
      "I’ll remove the point-to-point configuration here on R3."
    ],
    "ru": [
      "Я удалю конфигурацию точка-точка здесь, на R3."
    ]
  },
  {
    "time": [
      469.02,
      473.24
    ],
    "en": [
      "CONF T. INTERFACE G0/1."
    ],
    "ru": [
      "CONF T. ИНТЕРФЕЙС G0 / 1."
    ]
  },
  {
    "time": [
      473.24,
      476.45
    ],
    "en": [
      "NO IP OSPF NETWORK POINT-TO-POINT."
    ],
    "ru": [
      "ОТСУТСТВИЕ ТОЧКИ ТОЧКИ СЕТИ IP OSPF."
    ]
  },
  {
    "time": [
      476.45,
      486.18
    ],
    "en": [
      "Okay, let’s see if R4 has learned the route. SHOW IP ROUTE."
    ],
    "ru": [
      "Хорошо, посмотрим, узнал ли R4 маршрут. ПОКАЗАТЬ IP-МАРШРУТ."
    ]
  },
  {
    "time": [
      486.18,
      489.75
    ],
    "en": [
      "SHOW IP ROUTE. There it is, 10.0.2.0/24."
    ],
    "ru": [
      "ПОКАЗАТЬ IP-МАРШРУТ. Вот оно, 10.0.2.0/24."
    ]
  },
  {
    "time": [
      489.75,
      494.84
    ],
    "en": [
      "To test if OSPF is working for this part of the network, I’ll try a ping from PC1 to"
    ],
    "ru": [
      "Чтобы проверить, работает ли OSPF для этой части сети, я попробую выполнить эхо-запрос с ПК1 на"
    ]
  },
  {
    "time": [
      494.84,
      512.48
    ],
    "en": [
      "PC2, it should work. PING 10.0.2.1."
    ],
    "ru": [
      "ПК2, должно работать. ПИНГ 10.0.2.1."
    ]
  },
  {
    "time": [
      512.48,
      518.979
    ],
    "en": [
      "PING 10.0.2.1. Okay, the ping works, so R1, R2, R3, and R4 seem to be operating fine."
    ],
    "ru": [
      "ПИНГ 10.0.2.1. Хорошо, пинг работает, значит, R1, R2, R3 и R4 работают нормально."
    ]
  },
  {
    "time": [
      518.979,
      526.31
    ],
    "en": [
      "Now let’s check step 3, which states that R2 and R4 won’t become OSPF neighbors with R5."
    ],
    "ru": [
      "Теперь давайте проверим шаг 3, который утверждает, что R2 и R4 не станут соседями OSPF с R5."
    ]
  },
  {
    "time": [
      526.31,
      533.649
    ],
    "en": [
      "R5. We just checked R4’s neighbor table and R5 wasn’t there, so let’s check on R2."
    ],
    "ru": [
      "R5. Мы только что проверили таблицу соседей R4, но R5 там не было, поэтому давайте проверим R2."
    ]
  },
  {
    "time": [
      533.649,
      536.24
    ],
    "en": [
      "DO SHOW IP OSPF NEIGHBOR."
    ],
    "ru": [
      "ПОКАЗАТЬ IP OSPF СОСЕДА."
    ]
  },
  {
    "time": [
      536.24,
      539.97
    ],
    "en": [
      "Indeed, only R1 and R4 appear."
    ],
    "ru": [
      "Действительно, появляются только R1 и R4."
    ]
  },
  {
    "time": [
      539.97,
      547.87
    ],
    "en": [
      "Let’s check some of the settings on the interfaces in the 192.168.245.0/29 subnet."
    ],
    "ru": [
      "Давайте проверим некоторые настройки интерфейсов в подсети 192.168.245.0/29."
    ]
  },
  {
    "time": [
      547.87,
      555.019
    ],
    "en": [
      "Here on R2, DO SHOW IP OSPF INTERFACE G0/0."
    ],
    "ru": [
      "Здесь, на R2, ПОКАЗАТЬ ИНТЕРФЕЙС IP OSPF G0 / 0."
    ]
  },
  {
    "time": [
      555.019,
      561.75
    ],
    "en": [
      "The IP address is correctly in the subnet, in area 0, and the timers are default."
    ],
    "ru": [
      "IP-адрес правильно указан в подсети, в области 0, и таймеры установлены по умолчанию."
    ]
  },
  {
    "time": [
      561.75,
      564.83
    ],
    "en": [
      "Those are some basic settings that could cause problems."
    ],
    "ru": [
      "Это некоторые базовые настройки, которые могут вызвать проблемы."
    ]
  },
  {
    "time": [
      564.83,
      569.689
    ],
    "en": [
      "Next I’ll check R4 again."
    ],
    "ru": [
      "Затем я снова проверю R4."
    ]
  },
  {
    "time": [
      569.689,
      573.16
    ],
    "en": [
      "SHOW IP OSPF INTERFACE G0/0."
    ],
    "ru": [
      "ПОКАЗАТЬ ИНТЕРФЕЙС IP OSPF G0 / 0."
    ]
  },
  {
    "time": [
      573.16,
      579.66
    ],
    "en": [
      "R4’s interface is in the subnet, is in area 0 and the timers are default."
    ],
    "ru": [
      "Интерфейс R4 находится в подсети, в области 0, и таймеры установлены по умолчанию."
    ]
  },
  {
    "time": [
      579.66,
      590.3389999999999
    ],
    "en": [
      "R2 and R4 seem fine, so perhaps the problem is on R5. Let’s check. Let’s check. ENABLE."
    ],
    "ru": [
      "R2 и R4 кажутся нормальными, так что, возможно, проблема в R5. Давайте проверим. Давайте проверим. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      590.3389999999999,
      594.39
    ],
    "en": [
      "Let’s check. ENABLE. SHOW IP OSPF INTERFACE G0/0."
    ],
    "ru": [
      "Давайте проверим. ВКЛЮЧИТЬ. ПОКАЗАТЬ ИНТЕРФЕЙС IP OSPF G0 / 0."
    ]
  },
  {
    "time": [
      594.39,
      598.0
    ],
    "en": [
      "The interface is in the correct subnet, in area 0."
    ],
    "ru": [
      "Интерфейс находится в правильной подсети, в области 0."
    ]
  },
  {
    "time": [
      598.0,
      600.69
    ],
    "en": [
      "However, look at the timers."
    ],
    "ru": [
      "Однако посмотрите на таймеры."
    ]
  },
  {
    "time": [
      600.69,
      604.319
    ],
    "en": [
      "Hello timer of 5 and Dead timer of 20."
    ],
    "ru": [
      "Привет таймер 5 и мертвый таймер 20."
    ]
  },
  {
    "time": [
      604.319,
      609.74
    ],
    "en": [
      "These don’t match R2 and R4, so R5 won’t become OSPF neighbors with them."
    ],
    "ru": [
      "Они не соответствуют R2 и R4, поэтому R5 не станет их соседом OSPF."
    ]
  },
  {
    "time": [
      609.74,
      614.449
    ],
    "en": [
      "Let’s return R5’s timer to the default settings."
    ],
    "ru": [
      "Вернем таймер R5 к настройкам по умолчанию."
    ]
  },
  {
    "time": [
      614.449,
      618.3
    ],
    "en": [
      "CONF T. INTERFACE G0/0."
    ],
    "ru": [
      "CONF T. ИНТЕРФЕЙС G0 / 0."
    ]
  },
  {
    "time": [
      618.3,
      621.55
    ],
    "en": [
      "NO IP OSPF HELLO-INTERVAL."
    ],
    "ru": [
      "НЕТ IP OSPF HELLO-INTERVAL."
    ]
  },
  {
    "time": [
      621.55,
      623.81
    ],
    "en": [
      "NO IP OSPF DEAD-INTERVAL."
    ],
    "ru": [
      "ОТСУТСТВИЕ МЕРТВОГО ИНТЕРВАЛА IP OSPF."
    ]
  },
  {
    "time": [
      623.81,
      629.41
    ],
    "en": [
      "Okay, now I’ll click this arrow here to skip the simulation forward 30 seconds, and"
    ],
    "ru": [
      "Хорошо, теперь я нажму здесь на эту стрелку, чтобы пропустить симуляцию на 30 секунд вперед, и"
    ]
  },
  {
    "time": [
      629.41,
      632.43
    ],
    "en": [
      "now let’s check R5’s neighbor table."
    ],
    "ru": [
      "Теперь давайте проверим таблицу соседей R5."
    ]
  },
  {
    "time": [
      632.43,
      635.2090000000001
    ],
    "en": [
      "DO SHOW IP OSPF NEIGHBOR."
    ],
    "ru": [
      "ПОКАЗАТЬ IP OSPF СОСЕДА."
    ]
  },
  {
    "time": [
      635.2090000000001,
      641.529
    ],
    "en": [
      "Okay, now R5 is OSPF neighbors with R2 and R4."
    ],
    "ru": [
      "Хорошо, теперь R5 является соседом OSPF с R2 и R4."
    ]
  },
  {
    "time": [
      641.529,
      646.95
    ],
    "en": [
      "The next problem is that PC1 and PC2 can’t ping external server 8.8.8.8."
    ],
    "ru": [
      "Следующая проблема заключается в том, что ПК1 и ПК2 не могут проверить связь с внешним сервером 8.8.8.8."
    ]
  },
  {
    "time": [
      646.95,
      654.13
    ],
    "en": [
      "So, R5 is connected to the Internet and should advertise a default route to the other routers."
    ],
    "ru": [
      "Итак, R5 подключен к Интернету и должен объявлять маршрут по умолчанию другим маршрутизаторам."
    ]
  },
  {
    "time": [
      654.13,
      658.769
    ],
    "en": [
      "But when checking the routing table of each other router, I never saw a default route."
    ],
    "ru": [
      "Но при проверке таблицы маршрутизации друг друга я никогда не видел маршрута по умолчанию."
    ]
  },
  {
    "time": [
      658.769,
      672.6
    ],
    "en": [
      "To confirm, I’ll try a ping from PC1. PING 8.8.8.8."
    ],
    "ru": [
      "Для подтверждения попробую выполнить эхо-запрос с ПК1. ПИНГ 8.8.8.8."
    ]
  },
  {
    "time": [
      672.6,
      673.87
    ],
    "en": [
      "PING 8.8.8.8. The ping doesn’t work."
    ],
    "ru": [
      "ПИНГ 8.8.8.8. Пинг не работает."
    ]
  },
  {
    "time": [
      673.87,
      675.759
    ],
    "en": [
      "So, what’s the problem?"
    ],
    "ru": [
      "Так в чем проблема?"
    ]
  },
  {
    "time": [
      675.759,
      678.92
    ],
    "en": [
      "Let’s see if R5 is advertising its default route."
    ],
    "ru": [
      "Посмотрим, объявляет ли R5 свой маршрут по умолчанию."
    ]
  },
  {
    "time": [
      678.92,
      683.17
    ],
    "en": [
      "I’ll go back on R5."
    ],
    "ru": [
      "Я вернусь на R5."
    ]
  },
  {
    "time": [
      683.17,
      687.3389999999999
    ],
    "en": [
      "DO SHOW RUNNING-CONFIG | SECTION OSPF."
    ],
    "ru": [
      "ПОКАЗАТЬ РАБОЧУЮ КОНФИГУРАЦИЮ | РАЗДЕЛ OSPF."
    ]
  },
  {
    "time": [
      687.3389999999999,
      693.259
    ],
    "en": [
      "The DEFAULT-INFORMATION ORIGINATE command is configured, so R5 should be sending a Type"
    ],
    "ru": [
      "Команда DEFAULT-INFORMATION ORIGINATE настроена, поэтому R5 должен отправлять тип"
    ]
  },
  {
    "time": [
      693.259,
      697.37
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
      693.259,
      697.37
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
      697.37,
      701.63
    ],
    "en": [
      "But perhaps R5 doesn’t have a default route? Let’s check."
    ],
    "ru": [
      "Но, может быть, у R5 нет маршрута по умолчанию? Давайте проверим."
    ]
  },
  {
    "time": [
      701.63,
      703.42
    ],
    "en": [
      "Let’s check. DO SHOW IP ROUTE."
    ],
    "ru": [
      "Давайте проверим. ПОКАЗАТЬ IP-МАРШРУТ."
    ]
  },
  {
    "time": [
      703.42,
      706.129
    ],
    "en": [
      "Okay, there’s the problem."
    ],
    "ru": [
      "Ладно, вот в чем проблема."
    ]
  },
  {
    "time": [
      706.129,
      710.56
    ],
    "en": [
      "There is no default route to advertise. I’ll configure one."
    ],
    "ru": [
      "Нет маршрута по умолчанию для рекламы. Я настрою один."
    ]
  },
  {
    "time": [
      710.56,
      711.939
    ],
    "en": [
      "I’ll configure one. EXIT."
    ],
    "ru": [
      "Я настрою один. ВЫХОД."
    ]
  },
  {
    "time": [
      711.939,
      718.85
    ],
    "en": [
      "IP ROUTE 0.0.0.0 0.0.0.0 203.0.113.2."
    ],
    "ru": [
      "IP-МАРШРУТ 0.0.0.0 0.0.0.0 203.0.113.2."
    ]
  },
  {
    "time": [
      718.85,
      725.49
    ],
    "en": [
      "Okay, now R5 should create that Type 5 LSA and share it with the other routers, so PC1"
    ],
    "ru": [
      "Хорошо, теперь R5 должен создать LSA типа 5 и поделиться им с другими маршрутизаторами, поэтому ПК1"
    ]
  },
  {
    "time": [
      725.49,
      728.35
    ],
    "en": [
      "and PC2 should be able to ping the external server."
    ],
    "ru": [
      "и ПК2 должен иметь возможность проверять связь с внешним сервером."
    ]
  },
  {
    "time": [
      728.35,
      734.339
    ],
    "en": [
      "I’ll go check R1’s route table."
    ],
    "ru": [
      "Пойду проверю таблицу маршрутов R1."
    ]
  },
  {
    "time": [
      734.339,
      737.18
    ],
    "en": [
      "DO SHOW IP ROUTE."
    ],
    "ru": [
      "ПОКАЗАТЬ IP-МАРШРУТ."
    ]
  },
  {
    "time": [
      737.18,
      739.629
    ],
    "en": [
      "There it is, it learned the default route from R5."
    ],
    "ru": [
      "Вот он, он узнал маршрут по умолчанию от R5."
    ]
  },
  {
    "time": [
      739.629,
      751.12
    ],
    "en": [
      "So, I’ll just try a ping from PC1. PING 8.8.8.8."
    ],
    "ru": [
      "Итак, я просто попробую проверить связь с ПК1. ПИНГ 8.8.8.8."
    ]
  },
  {
    "time": [
      751.12,
      756.279
    ],
    "en": [
      "PING 8.8.8.8. Okay, PC1 can ping the external server."
    ],
    "ru": [
      "ПИНГ 8.8.8.8. Хорошо, ПК1 может проверить связь с внешним сервером."
    ]
  },
  {
    "time": [
      756.279,
      759.29
    ],
    "en": [
      "Finally let’s check the LSDB."
    ],
    "ru": [
      "Наконец, давайте проверим LSDB."
    ]
  },
  {
    "time": [
      759.29,
      763.47
    ],
    "en": [
      "Remember that all routers in the area will have the same LSDB, so it doesn’t matter"
    ],
    "ru": [
      "Помните, что у всех маршрутизаторов в области будет один и тот же LSDB, поэтому это не имеет значения."
    ]
  },
  {
    "time": [
      763.47,
      765.019
    ],
    "en": [
      "which router you check on."
    ],
    "ru": [
      "какой роутер вы проверяете."
    ]
  },
  {
    "time": [
      765.019,
      769.439
    ],
    "en": [
      "I’ll check on R1."
    ],
    "ru": [
      "Я проверю R1."
    ]
  },
  {
    "time": [
      769.439,
      772.2090000000001
    ],
    "en": [
      "DO SHOW IP OSPF DATABASE."
    ],
    "ru": [
      "ПОКАЗАТЬ БАЗУ ДАННЫХ IP OSPF."
    ]
  },
  {
    "time": [
      772.2090000000001,
      780.589
    ],
    "en": [
      "So, these router link states are Type 1, each router advertises its own router LSA."
    ],
    "ru": [
      "Итак, эти состояния канала маршрутизатора относятся к Типу 1, каждый маршрутизатор объявляет свой собственный LSA маршрутизатора."
    ]
  },
  {
    "time": [
      780.589,
      788.35
    ],
    "en": [
      "The Network link states are Type 2, the DR of each multi-access network generates this kind of LSA."
    ],
    "ru": [
      "Состояния сетевого канала относятся к типу 2, DR каждой сети с множественным доступом генерирует такой вид LSA."
    ]
  },
  {
    "time": [
      788.35,
      794.41
    ],
    "en": [
      "kind of LSA. Finally there is one Type 5 AS External LSA, sharing the default route from R5."
    ],
    "ru": [
      "вид LSA. Наконец, есть один внешний LSA AS типа 5, использующий маршрут по умолчанию от R5."
    ]
  },
  {
    "time": [
      794.41,
      799.689
    ],
    "en": [
      "There are many more LSA types than this, but for your CCNA just know these three types."
    ],
    "ru": [
      "Существует гораздо больше типов LSA, но для вашей CCNA просто знайте эти три типа."
    ]
  },
  {
    "time": [
      799.689,
      802.38
    ],
    "en": [
      "Okay, that’s all for this lab."
    ],
    "ru": [
      "Ладно, это все для этой лаборатории."
    ]
  },
  {
    "time": [
      802.38,
      806.769
    ],
    "en": [
      "Now let’s move on to take a look at a lab in Boson NetSim for CCNA."
    ],
    "ru": [
      "Теперь давайте посмотрим на лабораторию в Boson NetSim для CCNA."
    ]
  },
  {
    "time": [
      806.769,
      811.98
    ],
    "en": [
      "Okay, here's today's Boson NetSim practice lab, OSPF Routes."
    ],
    "ru": [
      "Хорошо, вот сегодняшняя практическая лаборатория Boson NetSim, маршруты OSPF."
    ]
  },
  {
    "time": [
      811.98,
      815.42
    ],
    "en": [
      "So, this is a fairly short and simple lab."
    ],
    "ru": [
      "Итак, это довольно короткая и простая лабораторная работа."
    ]
  },
  {
    "time": [
      815.42,
      820.119
    ],
    "en": [
      "As I've said in the past, there is quite a variety of labs in Boson NetSim."
    ],
    "ru": [
      "Как я уже говорил ранее, в Boson NetSim есть множество лабораторий."
    ]
  },
  {
    "time": [
      820.119,
      823.4590000000001
    ],
    "en": [
      "Some of them are larger, more complex, more difficult."
    ],
    "ru": [
      "Некоторые из них крупнее, сложнее, труднее."
    ]
  },
  {
    "time": [
      823.4590000000001,
      825.92
    ],
    "en": [
      "And some of them are simpler, like this one."
    ],
    "ru": [
      "И некоторые из них попроще, например, этот."
    ]
  },
  {
    "time": [
      825.92,
      827.17
    ],
    "en": [
      "So here is the objective."
    ],
    "ru": [
      "Итак, вот цель."
    ]
  },
  {
    "time": [
      827.17,
      832.29
    ],
    "en": [
      "Learn the commands needed to test an OSPF configuration, pretty simple."
    ],
    "ru": [
      "Изучить команды, необходимые для тестирования конфигурации OSPF, довольно просто."
    ]
  },
  {
    "time": [
      832.29,
      833.85
    ],
    "en": [
      "Here are the commands you need to know."
    ],
    "ru": [
      "Вот команды, которые вам нужно знать."
    ]
  },
  {
    "time": [
      833.85,
      836.54
    ],
    "en": [
      "These are all commands you already know."
    ],
    "ru": [
      "Это все команды, которые вы уже знаете."
    ]
  },
  {
    "time": [
      836.54,
      838.74
    ],
    "en": [
      "The IP addresses of each device."
    ],
    "ru": [
      "IP-адреса каждого устройства."
    ]
  },
  {
    "time": [
      838.74,
      840.41
    ],
    "en": [
      "And the lab tasks."
    ],
    "ru": [
      "И лабораторные задания."
    ]
  },
  {
    "time": [
      840.41,
      845.699
    ],
    "en": [
      "There are only six short steps in this lab, so let's go through all of them."
    ],
    "ru": [
      "В этой лабораторной работе всего шесть коротких шагов, поэтому давайте рассмотрим их все."
    ]
  },
  {
    "time": [
      845.699,
      852.119
    ],
    "en": [
      "Step 1, configure Router1 with the appropriate host name, IP addresses, and also Router1"
    ],
    "ru": [
      "Шаг 1, настройте Router1 с соответствующим именем хоста, IP-адресами, а также Router1"
    ]
  },
  {
    "time": [
      852.119,
      857.569
    ],
    "en": [
      "should be the DCE side of the serial connection between Router1 and Router2."
    ],
    "ru": [
      "должен быть стороной DCE последовательного соединения между Router1 и Router2."
    ]
  },
  {
    "time": [
      857.569,
      859.269
    ],
    "en": [
      "So let's configure that."
    ],
    "ru": [
      "Итак, давайте настроим это."
    ]
  },
  {
    "time": [
      859.269,
      865.199
    ],
    "en": [
      "I'm already in the CLI of Router1, as you can see here. ENABLE."
    ],
    "ru": [
      "Я уже нахожусь в интерфейсе командной строки Router1, как вы можете видеть здесь. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      865.199,
      869.449
    ],
    "en": [
      "ENABLE. CONF T. HOSTNAME Router1."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. HOSTNAME Router1."
    ]
  },
  {
    "time": [
      869.449,
      875.82
    ],
    "en": [
      "Then the IP addresses, so let's check the chart here. First, FastEthernet0/0."
    ],
    "ru": [
      "Затем IP-адреса, поэтому давайте проверим здесь диаграмму. Во-первых, FastEthernet0 / 0."
    ]
  },
  {
    "time": [
      875.82,
      882.64
    ],
    "en": [
      "First, FastEthernet0/0. IP address ... 101.1 /24."
    ],
    "ru": [
      "Во-первых, FastEthernet0 / 0. IP-адрес ... 101.1 / 24."
    ]
  },
  {
    "time": [
      882.64,
      884.5
    ],
    "en": [
      "And I'll enable it."
    ],
    "ru": [
      "И я его включу."
    ]
  },
  {
    "time": [
      884.5,
      894.749
    ],
    "en": [
      "Then the serial interface."
    ],
    "ru": [
      "Потом последовательный интерфейс."
    ]
  },
  {
    "time": [
      894.749,
      900.92
    ],
    "en": [
      "Now the lab instructions say that this is the DCE side, but we should check just in case."
    ],
    "ru": [
      "Теперь в лабораторных инструкциях написано, что это сторона DCE, но на всякий случай стоит проверить."
    ]
  },
  {
    "time": [
      900.92,
      905.559
    ],
    "en": [
      "case. DO SHOW CONTROLLERS S0/0."
    ],
    "ru": [
      "кейс. ПОКАЗАТЬ КОНТРОЛЛЕРЫ S0 / 0."
    ]
  },
  {
    "time": [
      905.559,
      907.679
    ],
    "en": [
      "And it says right here, DCE cable."
    ],
    "ru": [
      "И прямо здесь написано, кабель DCE."
    ]
  },
  {
    "time": [
      907.679,
      909.67
    ],
    "en": [
      "So this is the DCE side."
    ],
    "ru": [
      "Итак, это сторона DCE."
    ]
  },
  {
    "time": [
      909.67,
      919.34
    ],
    "en": [
      "So let's set that clock rate of 64 kilobits per second, which is 64 thousand bits."
    ],
    "ru": [
      "Итак, давайте установим тактовую частоту 64 килобита в секунду, что составляет 64 тысячи бит."
    ]
  },
  {
    "time": [
      919.34,
      923.291
    ],
    "en": [
      "Okay, and enable the interface."
    ],
    "ru": [
      "Хорошо, и включите интерфейс."
    ]
  },
  {
    "time": [
      923.291,
      925.36
    ],
    "en": [
      "Okay that's all for task 1."
    ],
    "ru": [
      "Хорошо, это все для задачи 1."
    ]
  },
  {
    "time": [
      925.36,
      928.499
    ],
    "en": [
      "Next, task 2 is to do the same on Router2."
    ],
    "ru": [
      "Затем задача 2 - сделать то же самое на Router2."
    ]
  },
  {
    "time": [
      928.499,
      933.999
    ],
    "en": [
      "So, to open the CLI of Router2, I click on it here on the right and click on 'console'"
    ],
    "ru": [
      "Итак, чтобы открыть интерфейс командной строки Router2, я нажимаю на него справа и нажимаю на «консоль»."
    ]
  },
  {
    "time": [
      933.999,
      937.55
    ],
    "en": [
      "to open a console connection. ENABLE."
    ],
    "ru": [
      ", чтобы открыть консольное соединение. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      937.55,
      941.97
    ],
    "en": [
      "ENABLE. CONF T. HOSTNAME Router2."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. HOSTNAME Router2."
    ]
  },
  {
    "time": [
      941.97,
      951.62
    ],
    "en": [
      "And then the IP addresses. First, FastEthernet0/0."
    ],
    "ru": [
      "А потом IP-адреса. Во-первых, FastEthernet0 / 0."
    ]
  },
  {
    "time": [
      951.62,
      953.13
    ],
    "en": [
      "First, FastEthernet0/0. NO SHUT."
    ],
    "ru": [
      "Во-первых, FastEthernet0 / 0. НЕТ ЗАКРЫТИЯ."
    ]
  },
  {
    "time": [
      953.13,
      955.769
    ],
    "en": [
      "And then the serial interface."
    ],
    "ru": [
      "А потом последовательный интерфейс."
    ]
  },
  {
    "time": [
      955.769,
      958.029
    ],
    "en": [
      "I'll just check that this is DTE."
    ],
    "ru": [
      "Я просто проверю, что это DTE."
    ]
  },
  {
    "time": [
      958.029,
      964.879
    ],
    "en": [
      "It should be, because Router1 was DCE, but let's make sure."
    ],
    "ru": [
      "Должно быть, потому что Router1 был DCE, но давайте убедимся."
    ]
  },
  {
    "time": [
      964.879,
      967.999
    ],
    "en": [
      "Yes it is, DTE cable."
    ],
    "ru": [
      "Да, кабель DTE."
    ]
  },
  {
    "time": [
      967.999,
      975.779
    ],
    "en": [
      "Okay, so let's configure the IP address."
    ],
    "ru": [
      "Хорошо, давайте настроим IP-адрес."
    ]
  },
  {
    "time": [
      975.779,
      977.879
    ],
    "en": [
      "And enable the interface."
    ],
    "ru": [
      "И включите интерфейс."
    ]
  },
  {
    "time": [
      977.879,
      987.13
    ],
    "en": [
      "Okay, let me just make sure that Router2 can ping the other end, Router1. Okay, no problem."
    ],
    "ru": [
      "Хорошо, позвольте мне просто убедиться, что Router2 может пинговать другой конец, Router1. Хорошо, без проблем."
    ]
  },
  {
    "time": [
      987.13,
      990.95
    ],
    "en": [
      "Okay, no problem. So that is task 2. Next, task 3."
    ],
    "ru": [
      "Хорошо, без проблем. Итак, это задача 2. Затем задача 3."
    ]
  },
  {
    "time": [
      990.95,
      995.369
    ],
    "en": [
      "Next, task 3. On Router1 display the routing table and review the routes displayed."
    ],
    "ru": [
      "Затем, задача 3. На Router1 отобразите таблицу маршрутизации и просмотрите отображаемые маршруты."
    ]
  },
  {
    "time": [
      995.369,
      997.5889999999999
    ],
    "en": [
      "DO SHOW IP ROUTE."
    ],
    "ru": [
      "ПОКАЗАТЬ IP-МАРШРУТ."
    ]
  },
  {
    "time": [
      997.5889999999999,
      1006.32
    ],
    "en": [
      "Okay, it's got connected routes for its connected networks, and no OSPF routes."
    ],
    "ru": [
      "Хорошо, у него есть подключенные маршруты для подключенных сетей и нет маршрутов OSPF."
    ]
  },
  {
    "time": [
      1006.32,
      1008.48
    ],
    "en": [
      "Okay, so that's task 3."
    ],
    "ru": [
      "Хорошо, это задача 3."
    ]
  },
  {
    "time": [
      1008.48,
      1014.36
    ],
    "en": [
      "Task 4, configure Router1 and Router2 with OSPF so that all devices can ping any other device."
    ],
    "ru": [
      "Задача 4: настройте Router1 и Router2 с OSPF, чтобы все устройства могли пинговать любое другое устройство."
    ]
  },
  {
    "time": [
      1014.36,
      1018.85
    ],
    "en": [
      "device. Use process ID 1 and area 0."
    ],
    "ru": [
      "устройство. Используйте идентификатор процесса 1 и область 0."
    ]
  },
  {
    "time": [
      1018.85,
      1025.589
    ],
    "en": [
      "Okay, so first on Router1. ROUTER OSPF 1."
    ],
    "ru": [
      "Хорошо, сначала на Router1. МАРШРУТИЗАТОР OSPF 1."
    ]
  },
  {
    "time": [
      1025.589,
      1031.87
    ],
    "en": [
      "ROUTER OSPF 1. I'll advertise the FastEthernet0/0 network..."
    ],
    "ru": [
      "МАРШРУТИЗАТОР OSPF 1. Я прорекламирую сеть FastEthernet0 / 0 ..."
    ]
  },
  {
    "time": [
      1031.87,
      1040.74
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
      1031.87,
      1040.74
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
      1040.74,
      1042.92
    ],
    "en": [
      "And then the serial0/0 interface."
    ],
    "ru": [
      "А затем интерфейс serial0 / 0."
    ]
  },
  {
    "time": [
      1042.92,
      1050.169
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
      1042.92,
      1050.169
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
      1050.169,
      1055.58
    ],
    "en": [
      "Okay, that's all for Router1. Next up Router2."
    ],
    "ru": [
      "Хорошо, это все для Router1. Затем Router2."
    ]
  },
  {
    "time": [
      1055.58,
      1058.96
    ],
    "en": [
      "Next up Router2. Same deal. ROUTER OSPF 1."
    ],
    "ru": [
      "Затем Router2. Та же сделка. МАРШРУТИЗАТОР OSPF 1."
    ]
  },
  {
    "time": [
      1058.96,
      1062.0
    ],
    "en": [
      "ROUTER OSPF 1. First, FastEthernet0/0..."
    ],
    "ru": [
      "МАРШРУТИЗАТОР OSPF 1. Во-первых, FastEthernet0 / 0 ..."
    ]
  },
  {
    "time": [
      1062.0,
      1067.809
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
      1062.0,
      1067.809
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
      1067.809,
      1077.36
    ],
    "en": [
      "And then the serial0/0 interface. AREA 0."
    ],
    "ru": [
      "А затем интерфейс serial0 / 0. ПЛОЩАДЬ 0."
    ]
  },
  {
    "time": [
      1077.36,
      1082.59
    ],
    "en": [
      "AREA 0. Okay, so Router1 and Router2 should become OSPF neighbors."
    ],
    "ru": [
      "ОБЛАСТЬ 0. Итак, Router1 и Router2 должны стать соседями OSPF."
    ]
  },
  {
    "time": [
      1082.59,
      1089.76
    ],
    "en": [
      "Let's check the neighbor table here on Router2. Okay, INIT state."
    ],
    "ru": [
      "Давайте проверим таблицу соседей здесь, на Router2. Хорошо, состояние INIT."
    ]
  },
  {
    "time": [
      1089.76,
      1090.76
    ],
    "en": [
      "Okay, INIT state. Still INIT."
    ],
    "ru": [
      "Хорошо, состояние INIT. Еще ИНИТ."
    ]
  },
  {
    "time": [
      1090.76,
      1092.7
    ],
    "en": [
      "I'm going to watch this process."
    ],
    "ru": [
      "Я буду наблюдать за этим процессом."
    ]
  },
  {
    "time": [
      1092.7,
      1098.54
    ],
    "en": [
      "So we're in EXSTART now. EXCHANGE."
    ],
    "ru": [
      "Итак, мы сейчас в EXSTART. ОБМЕН."
    ]
  },
  {
    "time": [
      1098.54,
      1101.81
    ],
    "en": [
      "EXCHANGE. Let's see if we can see the LOADING to FULL transition."
    ],
    "ru": [
      "ОБМЕН. Посмотрим, сможем ли мы увидеть переход ЗАГРУЗКА в ПОЛНЫЙ."
    ]
  },
  {
    "time": [
      1101.81,
      1105.179
    ],
    "en": [
      "Some of these transitions are pretty quick so we might not see them."
    ],
    "ru": [
      "Некоторые из этих переходов выполняются довольно быстро, поэтому мы можем их не увидеть."
    ]
  },
  {
    "time": [
      1105.179,
      1111.289
    ],
    "en": [
      "Okay, it went pretty quickly from LOADING to FULL, so we missed LOADING."
    ],
    "ru": [
      "Хорошо, он довольно быстро перешел из ЗАГРУЗКИ в ПОЛНУЮ, поэтому мы пропустили ЗАГРУЗКУ."
    ]
  },
  {
    "time": [
      1111.289,
      1113.09
    ],
    "en": [
      "There it is, FULL state."
    ],
    "ru": [
      "Вот оно, ПОЛНОЕ состояние."
    ]
  },
  {
    "time": [
      1113.09,
      1119.289
    ],
    "en": [
      "So, that is task 4. Next, task 5."
    ],
    "ru": [
      "Итак, это задача 4. Далее задача 5."
    ]
  },
  {
    "time": [
      1119.289,
      1120.289
    ],
    "en": [
      "Next, task 5. Display the routing table."
    ],
    "ru": [
      "Далее задание 5. Вывести таблицу маршрутизации."
    ]
  },
  {
    "time": [
      1120.289,
      1124.299
    ],
    "en": [
      "It says on Router1, but I'll check here on Router2 first."
    ],
    "ru": [
      "Там написано на Router1, но сначала я проверю здесь, на Router2."
    ]
  },
  {
    "time": [
      1124.299,
      1125.89
    ],
    "en": [
      "DO SHOW IP ROUTE."
    ],
    "ru": [
      "ПОКАЗАТЬ IP-МАРШРУТ."
    ]
  },
  {
    "time": [
      1125.89,
      1131.63
    ],
    "en": [
      "Okay, it is learning the 192.168.101.0 network here."
    ],
    "ru": [
      "Хорошо, здесь он изучает сеть 192.168.101.0."
    ]
  },
  {
    "time": [
      1131.63,
      1134.169
    ],
    "en": [
      "You can see it in the routing table."
    ],
    "ru": [
      "Вы можете увидеть это в таблице маршрутизации."
    ]
  },
  {
    "time": [
      1134.169,
      1135.69
    ],
    "en": [
      "Let's check on Router1."
    ],
    "ru": [
      "Проверим на Router1."
    ]
  },
  {
    "time": [
      1135.69,
      1138.19
    ],
    "en": [
      "DO SHOW IP ROUTE."
    ],
    "ru": [
      "ПОКАЗАТЬ IP-МАРШРУТ."
    ]
  },
  {
    "time": [
      1138.19,
      1147.01
    ],
    "en": [
      "Okay, and Router1 is learning Router2's network, 192.168.100.0 /24."
    ],
    "ru": [
      "Хорошо, и Router1 изучает сеть Router2, 192.168.100.0 / 24."
    ]
  },
  {
    "time": [
      1147.01,
      1150.13
    ],
    "en": [
      "Okay, and then the final step."
    ],
    "ru": [
      "Хорошо, а затем последний шаг."
    ]
  },
  {
    "time": [
      1150.13,
      1153.549
    ],
    "en": [
      "Verify your configuration by pinging from HostA to HostB."
    ],
    "ru": [
      "Проверьте свою конфигурацию, выполнив эхо-запрос с HostA на HostB."
    ]
  },
  {
    "time": [
      1153.549,
      1154.549
    ],
    "en": [
      "Alright, let's do that."
    ],
    "ru": [
      "Хорошо, давай сделаем это."
    ]
  },
  {
    "time": [
      1154.549,
      1158.74
    ],
    "en": [
      "I'll open up the CLI of HostA."
    ],
    "ru": [
      "Я открою интерфейс командной строки HostA."
    ]
  },
  {
    "time": [
      1158.74,
      1165.76
    ],
    "en": [
      "And let's do that ping. PING 192.168.100.2."
    ],
    "ru": [
      "И давайте сделаем этот пинг. ПИНГ 192.168.100.2."
    ]
  },
  {
    "time": [
      1165.76,
      1167.71
    ],
    "en": [
      "PING 192.168.100.2. Okay, we get a reply."
    ],
    "ru": [
      "ПИНГ 192.168.100.2. Хорошо, мы получили ответ."
    ]
  },
  {
    "time": [
      1167.71,
      1174.45
    ],
    "en": [
      "So, it says here, once you have completed this lab, be sure to check your work by using the grading function."
    ],
    "ru": [
      "Итак, здесь говорится, что после завершения этой лабораторной работы обязательно проверьте свою работу с помощью функции выставления оценок."
    ]
  },
  {
    "time": [
      1174.45,
      1177.11
    ],
    "en": [
      "the grading function. So that is up here, grade lab."
    ],
    "ru": [
      "функция оценки. Так что это здесь, классная лаборатория."
    ]
  },
  {
    "time": [
      1177.11,
      1183.84
    ],
    "en": [
      "If you click it, it will tell us hopefully, yes we completed the lab successfully."
    ],
    "ru": [
      "Если вы нажмете на нее, мы будем надеяться, что мы успешно завершили лабораторную работу."
    ]
  },
  {
    "time": [
      1183.84,
      1187.83
    ],
    "en": [
      "So here are the configurations of each device."
    ],
    "ru": [
      "Итак, вот конфигурации каждого устройства."
    ]
  },
  {
    "time": [
      1187.83,
      1190.8
    ],
    "en": [
      "If we were missing commands they would be highlighted in red."
    ],
    "ru": [
      "Если бы нам не хватало команд, они были бы выделены красным."
    ]
  },
  {
    "time": [
      1190.8,
      1194.519
    ],
    "en": [
      "If we had any extra, unneeded commands they would be highlighted in blue."
    ],
    "ru": [
      "Если бы у нас были какие-то лишние, ненужные команды, они были бы выделены синим цветом."
    ]
  },
  {
    "time": [
      1194.519,
      1199.13
    ],
    "en": [
      "But we got everything right."
    ],
    "ru": [
      "Но мы все сделали правильно."
    ]
  },
  {
    "time": [
      1199.13,
      1204.0
    ],
    "en": [
      "If you ever have any troubles during the lab you can check Boson's lab solutions down here"
    ],
    "ru": [
      "Если у вас когда-нибудь возникнут проблемы во время лаборатории, вы можете проверить лабораторные решения Boson здесь."
    ]
  },
  {
    "time": [
      1204.0,
      1208.519
    ],
    "en": [
      "which walk you through and give you explanations of each step."
    ],
    "ru": [
      "которые проведут вас и объяснят каждый шаг."
    ]
  },
  {
    "time": [
      1208.519,
      1213.289
    ],
    "en": [
      "Okay, so that's all for this Boson NetSim practice lab."
    ],
    "ru": [
      "Хорошо, вот и все для этой практической лаборатории Boson NetSim."
    ]
  },
  {
    "time": [
      1213.289,
      1220.649
    ],
    "en": [
      "If you want to get a copy of Boson NetSim for CCNA, follow the link in the video description."
    ],
    "ru": [
      "Если вы хотите получить копию Boson NetSim for CCNA, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      1220.649,
      1226.24
    ],
    "en": [
      "Before finishing today’s video I want to thank my JCNP-level channel members."
    ],
    "ru": [
      "Прежде чем закончить сегодняшнее видео, я хочу поблагодарить участников моего канала уровня JCNP."
    ]
  },
  {
    "time": [
      1226.24,
      1229.72
    ],
    "en": [
      "Recently I’ve noticed an increase in the number of channel members, and I’m so thankful"
    ],
    "ru": [
      "Недавно я заметил, что количество участников канала увеличилось, и я очень благодарен"
    ]
  },
  {
    "time": [
      1229.72,
      1234.49
    ],
    "en": [
      "to all of you, both JCNA and JCNP-level members."
    ],
    "ru": [
      "всем вам, как членам уровня JCNA, так и JCNP."
    ]
  },
  {
    "time": [
      1234.49,
      1239.46
    ],
    "en": [
      "Previously I read out the names of all the JCNP-level members one by one, but the list"
    ],
    "ru": [
      "Раньше я зачитывал имена всех участников уровня JCNP один за другим, но список"
    ]
  },
  {
    "time": [
      1239.46,
      1242.99
    ],
    "en": [
      "is getting longer so I’ll just leave the list up here."
    ],
    "ru": [
      "становится длиннее, поэтому я оставлю список здесь."
    ]
  },
  {
    "time": [
      1242.99,
      1249.76
    ],
    "en": [
      "Your support helps me keep making and releasing these videos every week, I’m really grateful for your support."
    ],
    "ru": [
      "Ваша поддержка помогает мне продолжать снимать и выпускать эти видео каждую неделю. Я очень благодарен за вашу поддержку."
    ]
  },
  {
    "time": [
      1249.76,
      1255.6
    ],
    "en": [
      "for your support. This is the list of JCNP-level members at the time of recording by the way, August 29th"
    ],
    "ru": [
      "за вашу поддержку. Это список участников уровня JCNP на момент записи, кстати, 29 августа."
    ]
  },
  {
    "time": [
      1255.6,
      1263.649
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
      1255.6,
      1263.649
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
      1263.649,
      1265.22
    ],
    "en": [
      "in future videos. Thank you for watching."
    ],
    "ru": [
      "в будущих видео. Спасибо за просмотр."
    ]
  },
  {
    "time": [
      1265.22,
      1269.13
    ],
    "en": [
      "Please subscribe to the channel, like the video, leave a comment, and share the video"
    ],
    "ru": [
      "Пожалуйста, подпишитесь на канал, поставьте лайк видео, оставьте комментарий и поделитесь видео"
    ]
  },
  {
    "time": [
      1269.13,
      1272.47
    ],
    "en": [
      "with anyone else studying for the CCNA."
    ],
    "ru": [
      "со всеми, кто учится на CCNA."
    ]
  },
  {
    "time": [
      1272.47,
      1275.679
    ],
    "en": [
      "If you want to leave a tip, check the links in the description."
    ],
    "ru": [
      "Если вы хотите оставить отзыв, проверьте ссылки в описании."
    ]
  },
  {
    "time": [
      1275.679,
      1282.62
    ],
    "en": [
      "I'm also a Brave verified publisher and accept BAT, or Basic Attention Token, tips via the Brave browser."
    ],
    "ru": [
      "Я также являюсь проверенным издателем Brave и принимаю советы BAT (Basic Attention Token) через браузер Brave."
    ]
  },
  {
    "time": [
      1282.62,
      1282.62
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]