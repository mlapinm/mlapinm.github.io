let objs = [
  {
    "time": [
      1.36,
      7.04
    ],
    "en": [
      "Welcome to Jeremy’s IT Lab. This is&nbsp; a free, complete course for the CCNA.&nbsp;&nbsp;"
    ],
    "ru": [
      "Добро пожаловать в ИТ-лабораторию Джереми. Это & nbsp; бесплатный полный курс CCNA. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      7.04,
      11.12
    ],
    "en": [
      "If you like these videos, please&nbsp; subscribe to follow along with the series.&nbsp;&nbsp;"
    ],
    "ru": [
      "Если вам нравятся эти видео, пожалуйста, & nbsp; подпишитесь, чтобы следить за этой серией. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      11.12,
      15.2
    ],
    "en": [
      "Also, please like and leave a comment, and share&nbsp; the video to help spread this free series of&nbsp;&nbsp;"
    ],
    "ru": [
      "Кроме того, поставьте лайк и оставьте комментарий, а также поделитесь & nbsp; видео, которое поможет распространить эту бесплатную серию & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      15.2,
      20.0
    ],
    "en": [
      "videos. Thanks for your help. Also, remember&nbsp; to sign up via the link in the description to&nbsp;&nbsp;"
    ],
    "ru": [
      "видео. Спасибо за вашу помощь. Также помните & nbsp; чтобы зарегистрироваться по ссылке в описании на & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      20.0,
      25.68
    ],
    "en": [
      "get all of the lab files for this course, so&nbsp; you can try it out yourself in packet tracer."
    ],
    "ru": [
      "получить все лабораторные файлы для этого курса, так что & nbsp; вы можете попробовать это самостоятельно в пакетном трассировщике."
    ]
  },
  {
    "time": [
      25.68,
      31.28
    ],
    "en": [
      "If you want more labs like these, I highly&nbsp; recommend picking up Boson’s NetSim for the CCNA,&nbsp;&nbsp;"
    ],
    "ru": [
      "Если вам нужно больше подобных лабораторий, я очень & nbsp; рекомендую использовать Boson's NetSim для CCNA, & ​​nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      31.28,
      35.6
    ],
    "en": [
      "click the link in the video description to&nbsp; check it out. It’s a network simulator like&nbsp;&nbsp;"
    ],
    "ru": [
      "щелкните ссылку в описании видео, чтобы & nbsp; проверить это. Это сетевой симулятор, например & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      35.6,
      39.2
    ],
    "en": [
      "packet tracer, but it’s even better,&nbsp; and it includes all of these guided&nbsp;&nbsp;"
    ],
    "ru": [
      "пакетный трассировщик, но он даже лучше, & nbsp; и он включает в себя все эти направляемые & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      39.2,
      43.28
    ],
    "en": [
      "labs to not only help you get hands-on&nbsp; practice configuring and troubleshooting,&nbsp;&nbsp;"
    ],
    "ru": [
      "лаборатории, которые не только помогут вам на практике & nbsp; попрактикуйтесь в настройке и устранении неполадок, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      43.28,
      48.56
    ],
    "en": [
      "but also deepen your understanding of the exam&nbsp; topics. I used it myself when studying for my&nbsp;&nbsp;"
    ],
    "ru": [
      "но также углубить свое понимание экзамена & nbsp; темы. Я сам использовал его, когда учился на & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      48.56,
      53.04
    ],
    "en": [
      "certifications, so I feel confident&nbsp; about recommending it to all of you.&nbsp;&nbsp;"
    ],
    "ru": [
      "сертификаты, поэтому я чувствую себя уверенно & nbsp; о том, чтобы рекомендовать его всем вам. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      53.04,
      59.6
    ],
    "en": [
      "If you want to get your own copy of NetSim,&nbsp; please follow the link in the video description."
    ],
    "ru": [
      "Если вы хотите получить собственную копию NetSim, & nbsp; перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      59.6,
      65.76
    ],
    "en": [
      "In this lab we’ll configure SNMP, Simple Network&nbsp; Management Protocol. As I write at the top of the&nbsp;&nbsp;"
    ],
    "ru": [
      "В этой лабораторной работе мы настроим SNMP, простую сеть & nbsp; Протокол управления. Как я пишу в верхней части & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      65.76,
      71.44
    ],
    "en": [
      "lab instructions, SNMP functionality is very&nbsp; limited in packet tracer, so unfortunately&nbsp;&nbsp;"
    ],
    "ru": [
      "лабораторные инструкции, функциональность SNMP очень & NBSP; ограничен в трассировщике пакетов, поэтому, к сожалению, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      71.44,
      77.52
    ],
    "en": [
      "all we can do is enter a couple commands and&nbsp; then check out a few things on PC1, the NMS.&nbsp;&nbsp;"
    ],
    "ru": [
      "все, что мы можем сделать, это ввести пару команд и & nbsp; затем проверьте несколько вещей на ПК1, NMS. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      77.52,
      82.56
    ],
    "en": [
      "I was hoping to clarify some more things about&nbsp; SNMP configuration since I only briefly skimmed&nbsp;&nbsp;"
    ],
    "ru": [
      "Я надеялся уточнить кое-что о & nbsp; Конфигурация SNMP, поскольку я лишь бегло просмотрел & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      82.56,
      87.28
    ],
    "en": [
      "over it in the lecture video, but we won’t be&nbsp; able to do that. But that’s okay, you don’t&nbsp;&nbsp;"
    ],
    "ru": [
      "над этим в видео лекции, но мы не будем & nbsp; в состоянии сделать это. Но ничего страшного, вы не & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      87.28,
      94.08
    ],
    "en": [
      "actually need to know about SNMP configuration&nbsp; for the CCNA exam so don’t worry about it."
    ],
    "ru": [
      "на самом деле необходимо знать о конфигурации SNMP & nbsp; для экзамена CCNA, так что не беспокойтесь об этом."
    ]
  },
  {
    "time": [
      94.08,
      100.88
    ],
    "en": [
      "Okay let’s do step 1 and configure&nbsp; read-only and read/write communities on R1.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, давайте сделаем шаг 1 и настроим & nbsp; Сообщества только для чтения и чтения / записи на маршрутизаторе R1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      100.88,
      108.24000000000001
    ],
    "en": [
      "ENABLE. CONF T. SNMP-SERVER, and&nbsp; I’ll use the question mark here.&nbsp;&nbsp;"
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. SNMP-СЕРВЕР и & nbsp; Я использую здесь вопросительный знак. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      108.24000000000001,
      112.08
    ],
    "en": [
      "COMMUNITY, that’s the only&nbsp; available command. No HOST command,&nbsp;&nbsp;"
    ],
    "ru": [
      "СООБЩЕСТВО, это единственное & nbsp; доступная команда. Нет команды HOST, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      112.08,
      117.84
    ],
    "en": [
      "so we can’t even specify a server to send traps&nbsp; to. All we can do is configure communities here,&nbsp;&nbsp;"
    ],
    "ru": [
      "поэтому мы даже не можем указать сервер для отправки ловушек & nbsp; к. Все, что мы можем сделать, это настроить здесь сообщества, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      117.84,
      123.68
    ],
    "en": [
      "and then try a few things out on the NMS. So,&nbsp; let’s configure those communities. COMMUNITY&nbsp;&nbsp;"
    ],
    "ru": [
      "а затем попробуйте кое-что на NMS. Итак, & nbsp; давайте настроим эти сообщества. СООБЩЕСТВО & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      123.68,
      133.76
    ],
    "en": [
      "Cisco1 RO, that’s the read-only string. And&nbsp; then COMMUNITY Cisco2 RW, the read/write string."
    ],
    "ru": [
      "Cisco1 RO, это строка только для чтения. И & NBSP; затем COMMUNITY Cisco2 RW, строка чтения / записи."
    ]
  },
  {
    "time": [
      133.76,
      139.28
    ],
    "en": [
      "Okay, that’s all we can do. Now I’ll go on PC1.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, это все, что мы можем сделать. Теперь я пойду на ПК1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      139.28,
      144.56
    ],
    "en": [
      "Click on Desktop, then MIB Browser. This&nbsp; let’s us view the different variables,&nbsp;&nbsp;"
    ],
    "ru": [
      "Щелкните «Рабочий стол», затем «Браузер MIB». Это & nbsp; давайте рассмотрим различные переменные, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      144.56,
      155.28
    ],
    "en": [
      "the OIDs, in the MIB of R1. So, up here enter&nbsp; R1’s IP address, 192.168.1.254. However that’s&nbsp;&nbsp;"
    ],
    "ru": [
      "идентификаторы OID в MIB R1. Итак, введите & nbsp; IP-адрес маршрутизатора R1 192.168.1.254. Однако это & ​​nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      155.28,
      161.2
    ],
    "en": [
      "not all. Click on advanced, and then enter&nbsp; those two communities we just configured.&nbsp;&nbsp;"
    ],
    "ru": [
      "не все. Нажмите «Дополнительно», а затем введите & nbsp; те два сообщества, которые мы только что настроили. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      161.2,
      169.84
    ],
    "en": [
      "Cisco1 for the Read community, and Cisco2 for&nbsp; the Write community. I’ll leave it at SNMPv1, I’m&nbsp;&nbsp;"
    ],
    "ru": [
      "Cisco1 для сообщества чтения и Cisco2 для & nbsp; Сообщество писателей. Я оставлю его на SNMPv1, я & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      169.84,
      177.2
    ],
    "en": [
      "not sure if other versions would work in Packet&nbsp; Tracer. Okay, now let’s explore some OIDs. First,&nbsp;&nbsp;"
    ],
    "ru": [
      "не уверен, что другие версии будут работать с пакетом & nbsp; Трейсер. Хорошо, теперь давайте исследуем некоторые OID. Во-первых, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      177.2,
      184.8
    ],
    "en": [
      "how long has R1 been running, what’s the system&nbsp; uptime? Open the MIB Tree here, router_std MIBs,&nbsp;&nbsp;"
    ],
    "ru": [
      "как долго работает R1, что за система & nbsp; время безотказной работы? Откройте здесь дерево MIB, MIB router_std, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      184.8,
      196.48
    ],
    "en": [
      "iso, org, dod, internet, mgmt, mib-2, system,&nbsp; and then here we can select ‘sysUpTime’. Then,&nbsp;&nbsp;"
    ],
    "ru": [
      "iso, org, dod, internet, mgmt, mib-2, system, & nbsp; а затем здесь мы можем выбрать «sysUpTime». Затем & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      196.48,
      204.07999999999998
    ],
    "en": [
      "look at the top right. Notice the Get operation&nbsp; is already selected, so I’ll just click on GO.&nbsp;&nbsp;"
    ],
    "ru": [
      "посмотрите на верхний правый угол. Обратите внимание на операцию Get & nbsp; уже выбрано, поэтому я просто нажимаю GO. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      204.07999999999998,
      207.92000000000002
    ],
    "en": [
      "And here, you can see the OID,&nbsp; and the value for that OID,&nbsp;&nbsp;"
    ],
    "ru": [
      "Здесь вы можете увидеть OID, & nbsp; и значение этого OID, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      207.92000000000002,
      214.32
    ],
    "en": [
      "this is the current uptime of R1, how long it&nbsp; has been turned on. Let’s check another one,&nbsp;&nbsp;"
    ],
    "ru": [
      "это текущее время безотказной работы R1, как долго оно & nbsp; был включен. Давайте проверим еще один, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      214.32,
      223.2
    ],
    "en": [
      "the sysName variable will tell us R1’s&nbsp; hostname, which as you already know is R1."
    ],
    "ru": [
      "переменная sysName сообщит нам, что R1 & nbsp; имя хоста, которое, как вы уже знаете, R1."
    ]
  },
  {
    "time": [
      223.2,
      230.24
    ],
    "en": [
      "Okay let’s check out some information about R1’s&nbsp; interfaces. From ‘interfaces’, select ‘ifNumber’,&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, давайте посмотрим некоторую информацию о & nbsp; R1. интерфейсы. В разделе «интерфейсы» выберите «ifNumber», & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      230.24,
      238.32
    ],
    "en": [
      "and then send the Get. The value is 4, so R1 has&nbsp; 4 interfaces. Now I’ll expand ‘ifTable’ here,&nbsp;&nbsp;"
    ],
    "ru": [
      "а затем отправьте Get. Значение равно 4, поэтому R1 имеет & nbsp; 4 интерфейса. Теперь я разверну здесь ifTable, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      238.32,
      245.68
    ],
    "en": [
      "and ‘ifEntry’. Let’s click on ‘ifDescr’, and&nbsp; send a Get. Now you can see a description of&nbsp;&nbsp;"
    ],
    "ru": [
      "и ifEntry. Нажмите «ifDescr» и & nbsp; отправить Get. Теперь вы можете увидеть описание & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      245.68,
      251.12
    ],
    "en": [
      "each interface. It has a Vlan1 interface,&nbsp; and three gigabit ethernet interfaces, 0/0,&nbsp;&nbsp;"
    ],
    "ru": [
      "каждый интерфейс. Он имеет интерфейс Vlan1, & nbsp; и три гигабитных интерфейса Ethernet, 0/0, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      251.12,
      260.48
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
      251.12,
      260.48
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
      260.48,
      266.48
    ],
    "en": [
      "these gigabitethernet interfaces are copper,&nbsp; not fiber-optic, interfaces. How about,&nbsp;&nbsp;"
    ],
    "ru": [
      "эти интерфейсы Gigabitethernet являются медными, & nbsp; не оптоволоконный, интерфейсы. Как насчет, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      266.48,
      273.52
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
      266.48,
      273.52
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
      273.52,
      279.52
    ],
    "en": [
      "because it is enabled and connected to SW1. So,&nbsp; there are some other things we could check but&nbsp;&nbsp;"
    ],
    "ru": [
      "потому что он включен и подключен к SW1. Итак, & nbsp; есть еще кое-что, что мы можем проверить, но & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      279.52,
      286.72
    ],
    "en": [
      "I’ll leave it there. Now in step 3 let’s&nbsp; use a Set message to change a value on R1.&nbsp;&nbsp;"
    ],
    "ru": [
      "Я оставлю это здесь. Теперь, на шаге 3, давайте & nbsp; используйте сообщение Set, чтобы изменить значение R1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      286.72,
      293.92
    ],
    "en": [
      "I’ll do a Get once more for the system name.&nbsp; Next, change the operation type to Set.&nbsp;&nbsp;"
    ],
    "ru": [
      "Я сделаю Get еще раз для имени системы. & Nbsp; Затем измените тип операции на Установить. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      293.92,
      298.8
    ],
    "en": [
      "First, we have to select the data type,&nbsp; what kind of data is the host name?&nbsp;&nbsp;"
    ],
    "ru": [
      "Во-первых, нам нужно выбрать тип данных, & nbsp; какие данные представляют собой имя хоста? & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      298.8,
      305.28
    ],
    "en": [
      "It is displayed here, ‘OctetString’.&nbsp; So, select OctetString here. Then&nbsp;&nbsp;"
    ],
    "ru": [
      "Здесь он отображается как OctetString. & Nbsp; Итак, выберите здесь OctetString. Затем & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      305.28,
      312.56
    ],
    "en": [
      "enter a new value. You can change it to whatever&nbsp; you like, I’ll just change it to R11. Hit OK,&nbsp;&nbsp;"
    ],
    "ru": [
      "введите новое значение. Вы можете изменить его на любой & nbsp; хочешь, я просто поменяю на R11. Нажмите \"ОК\", & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      312.56,
      319.92
    ],
    "en": [
      "then click GO to send the Set. As you can see, the&nbsp; value has been changed to R11. Now if I return to&nbsp;&nbsp;"
    ],
    "ru": [
      "затем нажмите GO, чтобы отправить набор. Как видите, & nbsp; значение изменено на R11. Теперь, если я вернусь к & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      319.92,
      326.72
    ],
    "en": [
      "the CLI of the router, and hit enter, you can see&nbsp; the hostname has changed to R11. Let’s check the&nbsp;&nbsp;"
    ],
    "ru": [
      "CLI маршрутизатора и нажмите Enter, вы увидите & nbsp; имя хоста изменилось на R11. Давайте проверим & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      326.72,
      337.2
    ],
    "en": [
      "running config. DO SHOW RUN | INCLUDE HOST.&nbsp; So, it has been changed in the config, also."
    ],
    "ru": [
      "запущенная конфигурация. ПОКАЗАТЬ БЕГ | ВКЛЮЧИТЬ ХОЗЯИН. & Nbsp; Значит, это тоже было изменено в конфиге."
    ]
  },
  {
    "time": [
      337.2,
      343.28
    ],
    "en": [
      "Okay, so that was a brief look at SNMP in Packet&nbsp; Tracer. There’s not much you can do with SNMP in&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, это был краткий обзор SNMP в пакете & nbsp; Трейсер. С протоколом SNMP в & nbsp; & nbsp; мало что можно сделать."
    ]
  },
  {
    "time": [
      343.28,
      347.52
    ],
    "en": [
      "packet tracer, but that’s okay since you don’t&nbsp; actually need to know the configurations for the&nbsp;&nbsp;"
    ],
    "ru": [
      "пакетный трассировщик, но это нормально, поскольку вы не & nbsp; на самом деле нужно знать конфигурации для & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      347.52,
      356.96
    ],
    "en": [
      "CCNA exam. Next let’s take a look at a practice&nbsp; lab in Boson Software’s NetSim for CCNA."
    ],
    "ru": [
      "Экзамен CCNA. Теперь давайте посмотрим на практику & nbsp; лаборатории в NetSim от Boson Software для CCNA."
    ]
  },
  {
    "time": [
      356.96,
      363.52
    ],
    "en": [
      "Okay here's today's Boson NetSim practice lab.&nbsp; As I've said before, SNMP configuration is not&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, вот сегодняшняя практическая лаборатория Boson NetSim. & Nbsp; Как я уже сказал ранее, конфигурация SNMP - это не & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      363.52,
      370.48
    ],
    "en": [
      "on the CCNA exam topics list. So there isn't an&nbsp; SNMP configuration lab in Boson NetSim for CCNA.&nbsp;&nbsp;"
    ],
    "ru": [
      "в списке тем экзамена CCNA. Так что нет & nbsp; Лаборатория настройки SNMP в Boson NetSim для CCNA. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      370.48,
      375.76
    ],
    "en": [
      "There are plenty of labs for the IP services&nbsp; section of the exam, but not for SNMP because&nbsp;&nbsp;"
    ],
    "ru": [
      "Существует множество лабораторий для IP-служб & nbsp; раздел экзамена, но не для SNMP, потому что & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      375.76,
      382.32
    ],
    "en": [
      "it's not on the exam topics list. So, for&nbsp; today's demonstration I will take a lab from&nbsp;&nbsp;"
    ],
    "ru": [
      "его нет в списке тем экзамена. Итак, для & nbsp; сегодняшняя демонстрация Я возьму лабораторию из & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      382.32,
      392.64
    ],
    "en": [
      "NetSim for ENCOR 350-401. This is the core exam of&nbsp; the CCNP Enterprise certification. And they have a&nbsp;&nbsp;"
    ],
    "ru": [
      "NetSim для ENCOR 350-401. Это основной экзамен & nbsp; сертификат CCNP Enterprise. И у них есть & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      392.64,
      397.68
    ],
    "en": [
      "practice lab down here in the security&nbsp; section, configuring network device management.&nbsp;&nbsp;"
    ],
    "ru": [
      "практическая лаборатория здесь, в службе безопасности & nbsp; раздел, настраивающий управление сетевыми устройствами. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      397.68,
      403.2
    ],
    "en": [
      "And that is this lab here. So&nbsp; this lab involves configuring&nbsp;&nbsp;"
    ],
    "ru": [
      "И вот эта лаборатория. Итак, & nbsp; эта лабораторная работа включает настройку & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      403.2,
      408.4
    ],
    "en": [
      "VLANs, which you know, SNMP which you&nbsp; know a little bite, and then TACACS,&nbsp;&nbsp;"
    ],
    "ru": [
      "VLAN, которые вы знаете, SNMP, который вы & nbsp; знать немного прикус, а затем TACACS, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      408.4,
      416.64
    ],
    "en": [
      "which is AAA. That is something I will talk&nbsp; about in the security section of my course.&nbsp;&nbsp;"
    ],
    "ru": [
      "что есть AAA. Об этом я расскажу & nbsp; об этом в разделе безопасности моего курса. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      416.64,
      424.16
    ],
    "en": [
      "Okay, so these are the SNMP commands you need to&nbsp; know. SNMP-SERVER CONTACT, COMMUNITY, HOST, and&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, это команды SNMP, необходимые для & nbsp; знать. КОНТАКТ С СЕРВЕРОМ SNMP, СООБЩЕСТВО, ХОЗЯИН и & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      424.16,
      429.76
    ],
    "en": [
      "LOCATION. So these are commands I already covered.&nbsp; So you should be able to do this lab, even though&nbsp;&nbsp;"
    ],
    "ru": [
      "МЕСТО НАХОЖДЕНИЯ. Я уже рассмотрел эти команды. & Nbsp; Таким образом, вы сможете выполнить эту лабораторную работу, даже если & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      429.76,
      437.52
    ],
    "en": [
      "you're not at the CCNP level yet. Or at least&nbsp; do the SNMP portion, not the TACACS portion.&nbsp;&nbsp;"
    ],
    "ru": [
      "вы еще не на уровне CCNP. Или, по крайней мере, & nbsp; выполняйте часть SNMP, а не часть TACACS. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      437.52,
      441.76
    ],
    "en": [
      "Okay, so let's get on it. I already did task 1&nbsp; beforehand, which is configuring the management&nbsp;&nbsp;"
    ],
    "ru": [
      "Ладно, давай займемся этим. Я уже выполнил задание 1 & nbsp; заранее, который настраивает управление & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      441.76,
      448.88
    ],
    "en": [
      "VLAN, because I want to get straight to task 2,&nbsp; which is configure and verify SNMP on Router1.&nbsp;&nbsp;"
    ],
    "ru": [
      "VLAN, потому что я хочу сразу перейти к задаче 2, & nbsp; который настраивает и проверяет SNMP на Router1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      448.88,
      455.92
    ],
    "en": [
      "And you can see what I did in task 1. So, I&nbsp; added another subinterface here on Router1&nbsp;&nbsp;"
    ],
    "ru": [
      "И вы можете увидеть, что я сделал в задаче 1. Итак, я & nbsp; добавил еще один подинтерфейс здесь, на Router1 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      455.92,
      465.84000000000003
    ],
    "en": [
      "with an IP address. Created VLAN99 on these&nbsp; two switches and gave them IP addresses.&nbsp;&nbsp;"
    ],
    "ru": [
      "с IP-адресом. Создал VLAN99 на этих & nbsp; два переключателя и присвоили им IP-адреса."
    ]
  },
  {
    "time": [
      465.84000000000003,
      472.96
    ],
    "en": [
      "Okay, so let's configure and verify SNMP on&nbsp; Router1. Okay, configure SNMP version 2 for&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, давайте настроим и проверим SNMP на & nbsp; Маршрутизатор 1. Хорошо, настройте SNMP версии 2 для & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      472.96,
      480.64
    ],
    "en": [
      "read-only access using the community string&nbsp; Boson. Okay, so the command for all of these&nbsp;&nbsp;"
    ],
    "ru": [
      "доступ только для чтения с использованием строки сообщества & nbsp; Бозон. Итак, команда для всех этих & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      480.64,
      490.24
    ],
    "en": [
      "is SNMP-SERVER, or it begins like that. And the&nbsp; community is Boson. And it should be read-only.&nbsp;&nbsp;"
    ],
    "ru": [
      "это SNMP-СЕРВЕР, или он так начинается. И & nbsp; сообщество - это Бозон. И он должен быть доступен только для чтения. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      490.24,
      498.0
    ],
    "en": [
      "Now, we don't specify version 2 yet, we specify&nbsp; that in the SNMP-SERVER HOST command I believe.&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь мы еще не указываем версию 2, мы указываем & nbsp; что я верю в команду SNMP-SERVER HOST. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      498.0,
      509.84
    ],
    "en": [
      "So that should be correct. Okay then the contact&nbsp; address, SNMP-SERVER CONACT snmp@boson.com.&nbsp;&nbsp;"
    ],
    "ru": [
      "Так что это должно быть правильно. Хорошо, тогда контакт & nbsp; адрес, SNMP-СЕРВЕР КОНАКТ snmp@boson.com.&nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      509.84,
      519.12
    ],
    "en": [
      "Okay then the location,&nbsp; SNMP-SERVER LOCATION R1_SNMP.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, тогда местоположение, & nbsp; РАСПОЛОЖЕНИЕ SNMP-СЕРВЕРА R1_SNMP. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      519.12,
      523.52
    ],
    "en": [
      "And then I have to configure&nbsp; PC1 to be the trap receiver,&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем мне нужно настроить & nbsp; ПК1 будет приемником ловушек, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      523.52,
      532.96
    ],
    "en": [
      "so that means the NMS, network management station.&nbsp; And to use a community string of snmp_logs.&nbsp;&nbsp;"
    ],
    "ru": [
      "это означает NMS, станцию ​​управления сетью. & nbsp; И использовать строку сообщества snmp_logs. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      532.96,
      540.4
    ],
    "en": [
      "Okay, we haven't configured that community&nbsp; string yet, but alright let's see.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, мы не настроили это сообщество & nbsp; строка пока что, но ладно, давайте посмотрим. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      540.4,
      553.04
    ],
    "en": [
      "SNMP-SERVER HOST 10.10.0.2. We're&nbsp; supposed to use version 2, so...okay&nbsp;&nbsp;"
    ],
    "ru": [
      "SNMP-СЕРВЕР-ХОСТ 10.10.0.2. Мы & nbsp; предполагается использовать версию 2, так что ... хорошо & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      553.04,
      558.72
    ],
    "en": [
      "looks like they do not suport that&nbsp; command. snmp_logs is the community.&nbsp;&nbsp;"
    ],
    "ru": [
      "похоже, что они не поддерживают это & ​​nbsp; команда. snmp_logs - это сообщество. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      558.72,
      568.0
    ],
    "en": [
      "And that's it. Yeah, okay. So on Router1 verify&nbsp; that SNMP is enabled for the correct community&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот и все. Да ладно. Итак, на Router1 проверьте & nbsp; что SNMP включен для правильного сообщества & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      568.0,
      574.88
    ],
    "en": [
      "string. So let's use some other show commands&nbsp; here. SHOW SNMP, and look we can view all of those&nbsp;&nbsp;"
    ],
    "ru": [
      "нить. Итак, давайте воспользуемся другими командами show & nbsp; здесь. ПОКАЖИТЕ SNMP, и посмотрите, мы можем просмотреть все эти & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      574.88,
      584.48
    ],
    "en": [
      "things we just configured. SNMP COMMUNITY. There&nbsp; it is, community name boson and it is read-only.&nbsp;&nbsp;"
    ],
    "ru": [
      "вещи, которые мы только что настроили. СООБЩЕСТВО SNMP. Там & nbsp; это бозон имени сообщества, и он доступен только для чтения. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      584.48,
      588.88
    ],
    "en": [
      "And this looks like it is a default&nbsp; string, I did not configure that.&nbsp;&nbsp;"
    ],
    "ru": [
      "Похоже, это & ​​nbsp; строка, я не настраивал это. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      588.88,
      597.12
    ],
    "en": [
      "Let me see if that's in the configuration. INCLUDE&nbsp; COMMUNITY. No it is not in the configuration,&nbsp;&nbsp;"
    ],
    "ru": [
      "Позвольте мне посмотреть, есть ли это в конфигурации. ВКЛЮЧИТЬ & NBSP; СООБЩЕСТВО. Нет, это не в конфигурации, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      597.12,
      609.92
    ],
    "en": [
      "so this looks like a default community string.&nbsp; Okay, the location. SHOW SNMP LOCATION.&nbsp;&nbsp;"
    ],
    "ru": [
      "так что это выглядит как строка сообщества по умолчанию. & nbsp; Ладно, место. ПОКАЗАТЬ МЕСТОПОЛОЖЕНИЕ SNMP. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      609.92,
      619.2
    ],
    "en": [
      "Okay, that is correct. SHOW SNMP&nbsp; CONTACT. snmp@boson.com, okay.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, это правильно. ПОКАЗАТЬ SNMP & nbsp; КОНТАКТ. snmp@boson.com, хорошо. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      619.2,
      629.04
    ],
    "en": [
      "Verify that SNMP is enabled for the trap receiver&nbsp; with the correct community string. SHOW SNMP HOST.&nbsp;&nbsp;"
    ],
    "ru": [
      "Убедитесь, что протокол SNMP включен для получателя прерываний & nbsp; с правильной строкой сообщества. ПОКАЗАТЬ ХОСТ SNMP. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      629.04,
      636.64
    ],
    "en": [
      "Okay, there it is, 10.10.0.2, PC1.&nbsp; Notice UDP port 162, that is the&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, вот оно, 10.10.0.2, PC1. & Nbsp; Обратите внимание на порт UDP 162, это & ​​nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      636.64,
      645.28
    ],
    "en": [
      "port that the NMS uses to receive SNMP messages.&nbsp; Traps are enabled by default. User, this is the&nbsp;&nbsp;"
    ],
    "ru": [
      "порт, который NMS использует для получения сообщений SNMP. & nbsp; По умолчанию ловушки включены. Пользователь, это & ​​nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      645.28,
      652.48
    ],
    "en": [
      "community. And it says security model version 1,&nbsp; so this might not be working exactly as intended.&nbsp;&nbsp;"
    ],
    "ru": [
      "сообщество. И там говорится, что модель безопасности версии 1, & nbsp; так что это может работать не так, как задумано. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      652.48,
      657.2
    ],
    "en": [
      "Let me check. So I have not finished this lab&nbsp; of course, there's still a lot to configure.&nbsp;&nbsp;"
    ],
    "ru": [
      "Дай мне проверить. Итак, я не закончил эту лабораторную работу & nbsp; конечно, еще многое предстоит настроить. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      657.2,
      665.84
    ],
    "en": [
      "But I will use the grade lab function to see if I&nbsp; configured this SNMP portion correctly. Grade lab.&nbsp;&nbsp;"
    ],
    "ru": [
      "Но я воспользуюсь функцией лаборатории оценок, чтобы проверить, & nbsp; правильно настроил эту часть SNMP. Оценка лаборатории. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      665.84,
      673.12
    ],
    "en": [
      "Okay and let's check out Router1's configuration.&nbsp; Okay, so this is the, this is part of the AAA&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, давайте проверим конфигурацию Router1. & Nbsp; Хорошо, это часть AAA & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      673.12,
      680.64
    ],
    "en": [
      "configuration. TACACS, that's also&nbsp; AAA. And here this login authentication&nbsp;&nbsp;"
    ],
    "ru": [
      "конфигурация. TACACS, это тоже & nbsp; AAA. И вот эта авторизация входа & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      680.64,
      687.68
    ],
    "en": [
      "aaa_authentication. But looks like&nbsp; the SNMP configuration is correct.&nbsp;&nbsp;"
    ],
    "ru": [
      "aaa_authentication. Но похоже, что & nbsp; конфигурация SNMP верна. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      687.68,
      697.68
    ],
    "en": [
      "Here it is. Okay, so that is this short&nbsp; SNMP practice lab. And we can also check&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот. Хорошо, вот и этот короткий & nbsp; Практическая лаборатория SNMP. И мы также можем проверить & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      697.68,
      704.88
    ],
    "en": [
      "out Boson's lab solutions down here.&nbsp; They have good explanations. Let me&nbsp;&nbsp;"
    ],
    "ru": [
      "лабораторные решения Boson здесь. & nbsp; У них есть хорошие объяснения. Позвольте мне & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      704.88,
      710.56
    ],
    "en": [
      "see...here. Configure and verify SNMP on&nbsp; Router1. So basically it just shows the&nbsp;&nbsp;"
    ],
    "ru": [
      "посмотреть здесь. Настройте и проверьте SNMP на & nbsp; Маршрутизатор 1. Так что в основном это просто показывает & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      710.56,
      719.2
    ],
    "en": [
      "commands you have to use with some&nbsp; sample output of the show commands.&nbsp;&nbsp;"
    ],
    "ru": [
      "команды, которые нужно использовать с некоторыми & nbsp; пример вывода команд показа. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      719.2,
      724.0
    ],
    "en": [
      "Okay, so that's a quick look at SNMP, simple&nbsp; network management protocol, configuration&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, это быстрый взгляд на SNMP, простой & nbsp; протокол управления сетью, конфигурация & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      724.0,
      729.12
    ],
    "en": [
      "in Boson NetSim. Once again, this is&nbsp; not part of the CCNA exam topics list.&nbsp;&nbsp;"
    ],
    "ru": [
      "в Boson NetSim. Еще раз, это & ​​nbsp; не входит в список тем экзамена CCNA. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      729.12,
      733.2
    ],
    "en": [
      "So you don't really have to worry about&nbsp; remembering these SNMP commands yet. But&nbsp;&nbsp;"
    ],
    "ru": [
      "Так что вам не нужно беспокоиться о & nbsp; еще не помню эти команды SNMP. Но & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      733.2,
      739.92
    ],
    "en": [
      "once you do go on to your CCNP studies, if you do,&nbsp; you'll definitely need to know them. Okay, so if&nbsp;&nbsp;"
    ],
    "ru": [
      "после того, как вы перейдете к изучению CCNP, если вы это сделаете, & nbsp; вам обязательно нужно их знать. Хорошо, если & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      739.92,
      747.04
    ],
    "en": [
      "you want to get a copy of Boson NetSim for CCNA,&nbsp; please follow the link in the video description."
    ],
    "ru": [
      "вы хотите получить копию Boson NetSim для CCNA, & ​​nbsp; перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      747.04,
      751.84
    ],
    "en": [
      "Before finishing today’s video I want&nbsp; to thank my JCNP-level channel members.&nbsp;&nbsp;"
    ],
    "ru": [
      "Прежде чем закончить сегодняшнее видео, я хочу & nbsp; чтобы поблагодарить участников канала уровня JCNP. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      751.84,
      758.56
    ],
    "en": [
      "To join, please click the ‘Join’ button under the&nbsp; video. Thank you to H W, Brandon, Samil, Aaron,&nbsp;&nbsp;"
    ],
    "ru": [
      "Чтобы присоединиться, нажмите кнопку «Присоединиться» под & nbsp; видео. Спасибо Х.В., Брэндону, Самилу, Аарону, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      758.56,
      764.8
    ],
    "en": [
      "Tech Alameda, Marcel, Magrathea, Kone, Donald, C&nbsp; Mohd, Gustavo, Anthony, Biraj, Junhong, Benjamin,&nbsp;&nbsp;"
    ],
    "ru": [
      "Tech Alameda, Marcel, Magrathea, Kone, Donald, C & nbsp; Мохд, Густаво, Энтони, Бирадж, Джунхонг, Бенджамин, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      764.8,
      770.64
    ],
    "en": [
      "Tshepiso, Justin, Prakaash, Nasir, Erlison,&nbsp; Apogee, Marko, Daming, Jhilmar, Ed, Value,&nbsp;&nbsp;"
    ],
    "ru": [
      "Чеписо, Джастин, Пракааш, Насир, Эрлисон, & NBSP; Апогей, Марко, Даминг, Джилмар, Эд, Вэлью, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      770.64,
      777.28
    ],
    "en": [
      "John, Funnydart, Velvijaykum, Mark, Yousif, Boson&nbsp; Software, Devin, Lito, Yonatan, and Vance. Sorry&nbsp;&nbsp;"
    ],
    "ru": [
      "Джон, Фаннидарт, Велвиджайкум, Марк, Юсиф, Бозон & nbsp; Программное обеспечение, Девин, Лито, Йонатан и Вэнс. К сожалению, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      777.28,
      782.08
    ],
    "en": [
      "if I pronounced your name incorrectly, but&nbsp; thank you so much for your support. This is&nbsp;&nbsp;"
    ],
    "ru": [
      "если я неправильно произнес ваше имя, но & nbsp; Спасибо большое за вашу поддержку. Это & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      782.08,
      788.4
    ],
    "en": [
      "the list of JCNP-level members at the time of&nbsp; recording by the way, February 8th 2021. If&nbsp;&nbsp;"
    ],
    "ru": [
      "список участников уровня JCNP на момент & nbsp; запись, кстати, 8 февраля 2021 года. Если & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      788.4,
      795.2
    ],
    "en": [
      "you signed up recently and your name isn’t on&nbsp; here don’t worry, you’ll be in future videos."
    ],
    "ru": [
      "вы зарегистрировались недавно, и вашего имени нет на & nbsp; здесь не волнуйтесь, вы будете в будущих видео."
    ]
  },
  {
    "time": [
      795.2,
      798.32
    ],
    "en": [
      "Thank you for watching. Please&nbsp; subscribe to the channel,&nbsp;&nbsp;"
    ],
    "ru": [
      "Спасибо за просмотр. Пожалуйста, & nbsp; подписаться на канал, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      798.32,
      804.08
    ],
    "en": [
      "like the video, leave a comment, and share the&nbsp; video with anyone else studying for the CCNA.&nbsp;&nbsp;"
    ],
    "ru": [
      "поставьте лайк видео, оставьте комментарий и поделитесь & nbsp; видео со всеми, кто учится на CCNA. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      804.08,
      809.68
    ],
    "en": [
      "If you want to leave a tip, check the links in the&nbsp; description. I'm also a Brave verified publisher&nbsp;&nbsp;"
    ],
    "ru": [
      "Если вы хотите оставить отзыв, проверьте ссылки в разделе & nbsp; описание. Я также являюсь проверенным издателем Brave & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      809.68,
      809.68
    ],
    "en": [
      "and accept BAT, or Basic Attention Token, tips&nbsp; via the Brave browser. That's all for now."
    ],
    "ru": [
      "и принимаете BAT, или жетон основного внимания, советы & nbsp; через браузер Brave. На этом пока все."
    ]
  }
]