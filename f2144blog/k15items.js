let objs = [
  {
    "time": [
      0.0,
      4.547079
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
      4.547079,
      7.964095
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
      7.964095,
      17.951206
    ],
    "en": [
      "in this lab we will use the system configuration dialog to do some basic setup of a router r1 and a switch switch one"
    ],
    "ru": [
      "В этой лабораторной работе мы будем использовать диалоговое окно конфигурации системы, чтобы выполнить базовую настройку маршрутизатора r1 и коммутатора switch one."
    ]
  },
  {
    "time": [
      17.951206,
      29.593011
    ],
    "en": [
      "the system configuration dialog is a basic setup wizard that allows you to perform basic setup of things like the hostname and interface IP addresses of a device"
    ],
    "ru": [
      "диалоговое окно конфигурации системы представляет собой мастер базовой настройки, который позволяет выполнять базовую настройку таких вещей, как имя хоста и IP-адреса интерфейса устройства."
    ]
  },
  {
    "time": [
      29.593011,
      38.656193
    ],
    "en": [
      "although you typically will be doing these things with the commands themselves you should familiarize yourself with the system configuration dialog as well"
    ],
    "ru": [
      "хотя вы обычно будете делать это с самими командами, вам также следует ознакомиться с диалоговым окном конфигурации системы."
    ]
  },
  {
    "time": [
      38.656193,
      57.682979
    ],
    "en": [
      "try to complete the lab yourself first then continue watching this video if you have trouble or watch it after to check your solution 47.0438 our goal is to do some basic configurations on these two devices with the system configuration dialog 55.4966 let's go on r1 first"
    ],
    "ru": [
      "попробуйте сначала выполнить лабораторную работу самостоятельно, а затем продолжите просмотр этого видео, если у вас возникнут проблемы, или просмотрите его позже, чтобы проверить свое решение. 47.0438 наша цель - выполнить некоторые базовые настройки на этих двух устройствах с помощью диалогового окна конфигурации системы 55.4966 давайте сначала перейдем к r1"
    ]
  },
  {
    "time": [
      57.682979,
      65.576508
    ],
    "en": [
      "if this is the first time entering the CLI you will be asked whether you want to enter the system configuration dialog"
    ],
    "ru": [
      "если это первый вход в интерфейс командной строки, вас спросят, хотите ли вы войти в диалоговое окно конфигурации системы."
    ]
  },
  {
    "time": [
      65.576508,
      69.674217
    ],
    "en": [
      "however I have already previously answered no to this"
    ],
    "ru": [
      "однако я уже ранее ответил отрицательно на это"
    ]
  },
  {
    "time": [
      69.674217,
      74.077797
    ],
    "en": [
      "that's no problem I'll type in able to enter privileged exec mode"
    ],
    "ru": [
      "это не проблема, я ввожу возможность войти в привилегированный режим exec"
    ]
  },
  {
    "time": [
      74.077797,
      79.850683
    ],
    "en": [
      "then use the command setup and then answer yes to enter the configuration dialog"
    ],
    "ru": [
      "затем используйте команду setup, а затем ответьте да, чтобы войти в диалоговое окно конфигурации"
    ]
  },
  {
    "time": [
      79.850683,
      90.429979
    ],
    "en": [
      "next we are asked if you want to enter basic management setup which as stated here only configures enough connectivity for management of the system"
    ],
    "ru": [
      "Затем нас спрашивают, хотите ли вы войти в базовую настройку управления, которая, как указано здесь, настраивает только достаточное количество подключений для управления системой."
    ]
  },
  {
    "time": [
      90.429979,
      97.685636
    ],
    "en": [
      "let's go through the extended setup this time although we will only be configuring one interface 95.9823 so let's type no"
    ],
    "ru": [
      "Давайте на этот раз рассмотрим расширенную настройку, хотя мы будем настраивать только один интерфейс 95.9823, поэтому давайте набираем нет"
    ]
  },
  {
    "time": [
      97.685636,
      103.045464
    ],
    "en": [
      "now we are asked if you want to see the current interface summary"
    ],
    "ru": [
      "теперь нас спрашивают, хотите ли вы увидеть текущую сводку интерфейса"
    ]
  },
  {
    "time": [
      103.045464,
      110.465146
    ],
    "en": [
      "the answer in brackets is the default answer so I could just hit enter to continue or type in no to skip it"
    ],
    "ru": [
      "ответ в скобках является ответом по умолчанию, поэтому я могу просто нажать Enter, чтобы продолжить, или введите нет, чтобы пропустить его"
    ]
  },
  {
    "time": [
      110.465146,
      114.309246
    ],
    "en": [
      "I could of course type in yes to I just don't have to"
    ],
    "ru": [
      "Я мог бы, конечно, ввести да, чтобы мне просто не нужно было"
    ]
  },
  {
    "time": [
      114.309246,
      117.366835
    ],
    "en": [
      "I'll hit enter to view the summary"
    ],
    "ru": [
      "Я нажму \"Ввод\", чтобы просмотреть сводку"
    ]
  },
  {
    "time": [
      117.366835,
      124.883897
    ],
    "en": [
      "as you can see there are three Gigabit Ethernet interfaces as well as a VLAN one interface on r1"
    ],
    "ru": [
      "как вы можете видеть, есть три интерфейса Gigabit Ethernet, а также один интерфейс VLAN на r1"
    ]
  },
  {
    "time": [
      124.883897,
      127.958476
    ],
    "en": [
      "now we are asked for the hostname"
    ],
    "ru": [
      "теперь нас спрашивают имя хоста"
    ]
  },
  {
    "time": [
      127.958476,
      132.232732
    ],
    "en": [
      "currently it is router and that is also the default answer"
    ],
    "ru": [
      "в настоящее время это маршрутизатор, и это также ответ по умолчанию"
    ]
  },
  {
    "time": [
      132.232732,
      135.763431
    ],
    "en": [
      "let's change the hostname to r1"
    ],
    "ru": [
      "давайте изменим имя хоста на r1"
    ]
  },
  {
    "time": [
      135.763431,
      146.568767
    ],
    "en": [
      "now we are asked for the enable secret as you may remember and as is written here the enable secret is used to enter privileged exec mode"
    ],
    "ru": [
      "теперь у нас спрашивают секрет включения, как вы, возможно, помните, и, как здесь написано, секрет включения используется для входа в привилегированный режим exec"
    ]
  },
  {
    "time": [
      146.568767,
      148.600481
    ],
    "en": [
      "and is automatically encrypted"
    ],
    "ru": [
      "и автоматически зашифровывается"
    ]
  },
  {
    "time": [
      148.600481,
      152.192444
    ],
    "en": [
      "according to the instructions for this lab"
    ],
    "ru": [
      "согласно инструкциям для этой лаборатории"
    ]
  },
  {
    "time": [
      152.192444,
      159.088584
    ],
    "en": [
      "let's use an enable secret of Cisco with a capital C 156.07317 which is important because these passwords are case sensitive"
    ],
    "ru": [
      "давайте использовать секрет включения Cisco с заглавной буквы C 156.07317, что важно, потому что эти пароли чувствительны к регистру"
    ]
  },
  {
    "time": [
      159.088584,
      163.326876
    ],
    "en": [
      "next the enable password"
    ],
    "ru": [
      "затем включить пароль"
    ]
  },
  {
    "time": [
      163.326876,
      165.917872
    ],
    "en": [
      "CCNA in all caps"
    ],
    "ru": [
      "CCNA заглавными буквами"
    ]
  },
  {
    "time": [
      165.917872,
      169.669834
    ],
    "en": [
      "then the virtual terminal password"
    ],
    "ru": [
      "затем пароль виртуального терминала"
    ]
  },
  {
    "time": [
      169.669834,
      178.281989
    ],
    "en": [
      "we look at accessing the router over a network interface in another lab for now let's just set a password of CCENT in all caps"
    ],
    "ru": [
      "мы рассмотрим доступ к маршрутизатору через сетевой интерфейс в другой лаборатории, а пока давайте просто установим пароль CCENT заглавными буквами"
    ]
  },
  {
    "time": [
      178.281989,
      184.343249
    ],
    "en": [
      "then we are asked if we want to configure SNMP network management"
    ],
    "ru": [
      "затем нас спрашивают, хотим ли мы настроить управление сетью SNMP"
    ]
  },
  {
    "time": [
      184.343249,
      187.244598
    ],
    "en": [
      "I'll hit enter to accept the default of no"
    ],
    "ru": [
      "Я нажму \"Enter\", чтобы принять значение по умолчанию - нет."
    ]
  },
  {
    "time": [
      187.244598,
      189.702281
    ],
    "en": [
      "SNMP will be for later labs"
    ],
    "ru": [
      "SNMP будет использоваться в следующих лабораторных работах"
    ]
  },
  {
    "time": [
      189.702281,
      195.325401
    ],
    "en": [
      "then again as I don't want to configure the VLAN one interface at this time"
    ],
    "ru": [
      "опять же, так как я не хочу настраивать интерфейс VLAN one в настоящее время"
    ]
  },
  {
    "time": [
      195.325401,
      203.042621
    ],
    "en": [
      "now the Gigabit Ethernet 0 0 interface is the one used to connect to switch 1 so let's configure it"
    ],
    "ru": [
      "теперь интерфейс Gigabit Ethernet 0 0 используется для подключения к коммутатору 1, поэтому давайте настроим его"
    ]
  },
  {
    "time": [
      203.042621,
      205.829633
    ],
    "en": [
      "type yes and hit enter"
    ],
    "ru": [
      "введите да и нажмите ввод"
    ]
  },
  {
    "time": [
      205.829633,
      210.696433
    ],
    "en": [
      "the IP address is 192.168.1.1"
    ],
    "ru": [
      "IP-адрес 192.168.1.1"
    ]
  },
  {
    "time": [
      210.696433,
      218.030646
    ],
    "en": [
      "and now we'll accept the default subnet mask of 255.255.255.0 by hitting Enter"
    ],
    "ru": [
      "и теперь мы примем маску подсети по умолчанию 255.255.255.0, нажав Enter"
    ]
  },
  {
    "time": [
      218.030646,
      224.736546
    ],
    "en": [
      "I don't want to configure that gig 0 1 interface or that gig 0 2 interface"
    ],
    "ru": [
      "Я не хочу настраивать этот интерфейс 0 1 или интерфейс 0 2"
    ]
  },
  {
    "time": [
      224.736546,
      228.297716
    ],
    "en": [
      "now we're at the final option"
    ],
    "ru": [
      "теперь мы на последнем варианте"
    ]
  },
  {
    "time": [
      228.297716,
      235.216611
    ],
    "en": [
      "we can cancel this config with 0 redo it with 1 or save the config with 2"
    ],
    "ru": [
      "мы можем отменить эту конфигурацию с помощью 0, повторить ее с помощью 1 или сохранить конфигурацию с помощью 2"
    ]
  },
  {
    "time": [
      235.216611,
      238.790694
    ],
    "en": [
      "let's accept the default answer of 2 by hitting Enter"
    ],
    "ru": [
      "примите ответ по умолчанию - 2, нажав Enter"
    ]
  },
  {
    "time": [
      238.790694,
      240.231867
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
      240.231867,
      244.263425
    ],
    "en": [
      "now let's use show startup config to confirm"
    ],
    "ru": [
      "теперь давайте используем show startup config, чтобы подтвердить"
    ]
  },
  {
    "time": [
      244.263425,
      247.718703
    ],
    "en": [
      "here's our hostname of our one"
    ],
    "ru": [
      "вот наше имя хоста нашего единственного"
    ]
  },
  {
    "time": [
      247.718703,
      253.089857
    ],
    "en": [
      "our encrypted enable secret and our unencrypted enabled password"
    ],
    "ru": [
      "наш зашифрованный ключ включения и наш незашифрованный пароль включения"
    ]
  },
  {
    "time": [
      253.089857,
      258.947676
    ],
    "en": [
      "the IP address of gig 0"
    ],
    "ru": [
      "IP-адрес гига 0"
    ]
  },
  {
    "time": [
      258.947676,
      267.795849
    ],
    "en": [
      "and the password on the vty line which is the virtual terminal mentioned before 264.83408 our ones configuration is complete"
    ],
    "ru": [
      "и пароль на линии vty, которая является виртуальным терминалом, упомянутым перед 264.83408, наша конфигурация завершена"
    ]
  },
  {
    "time": [
      267.795849,
      274.942063
    ],
    "en": [
      "next let's go through the setup dialog for switch 1"
    ],
    "ru": [
      "Далее пройдемся по диалогу настройки переключателя 1"
    ]
  },
  {
    "time": [
      274.942063,
      283.626909
    ],
    "en": [
      "enable setup yes to enter the configuration dialog"
    ],
    "ru": [
      "включить настройку да, чтобы войти в диалоговое окно конфигурации"
    ]
  },
  {
    "time": [
      283.626909,
      288.481873
    ],
    "en": [
      "know as we don't want to enter basic management setup"
    ],
    "ru": [
      "известно, что мы не хотим вводить базовую настройку управления"
    ]
  },
  {
    "time": [
      288.481873,
      292.068849
    ],
    "en": [
      "let's just hit enter to view the interface summary"
    ],
    "ru": [
      "просто нажмите Enter, чтобы просмотреть сводку интерфейса"
    ]
  },
  {
    "time": [
      292.068849,
      303.518577
    ],
    "en": [
      "as you can see there are a lot of interfaces which is expected switches require more interfaces than routers as they're going to be connecting lots of end hosts to them"
    ],
    "ru": [
      "как вы можете видеть, существует множество интерфейсов, и ожидается, что коммутаторам потребуется больше интерфейсов, чем маршрутизаторам, поскольку они будут подключать к ним множество конечных хостов."
    ]
  },
  {
    "time": [
      303.518577,
      307.155561
    ],
    "en": [
      "let's change the hostname to switch 1"
    ],
    "ru": [
      "давайте изменим имя хоста на переключатель 1"
    ]
  },
  {
    "time": [
      307.155561,
      310.770105
    ],
    "en": [
      "and now the same passwords as on r1"
    ],
    "ru": [
      "и теперь те же пароли, что и на r1"
    ]
  },
  {
    "time": [
      310.770105,
      314.950968
    ],
    "en": [
      "Cisco with a capital C for the enable secret"
    ],
    "ru": [
      "Cisco с заглавной C для секрета включения"
    ]
  },
  {
    "time": [
      314.950968,
      320.037908
    ],
    "en": [
      "CCNA in all caps for the enable password"
    ],
    "ru": [
      "CCNA заглавными буквами для пароля включения"
    ]
  },
  {
    "time": [
      320.037908,
      323.940784
    ],
    "en": [
      "and C sent in all caps for the virtual terminal password"
    ],
    "ru": [
      "и C отправил все заглавные буквы для пароля виртуального терминала"
    ]
  },
  {
    "time": [
      323.940784,
      331.686529
    ],
    "en": [
      "enter to accept the default of no as we don't want to configure SNMP at this time"
    ],
    "ru": [
      "введите, чтобы принять значение по умолчанию нет, поскольку мы не хотим настраивать SNMP в настоящее время"
    ]
  },
  {
    "time": [
      331.686529,
      341.658118
    ],
    "en": [
      "now type yes and hit enter to configure the VLAN 1 interface 336.90723 we're going to give the VLAN 1 interface an IP address"
    ],
    "ru": [
      "теперь введите yes и нажмите Enter, чтобы настроить интерфейс VLAN 1. 336.90723 мы собираемся дать интерфейсу VLAN 1 IP-адрес."
    ]
  },
  {
    "time": [
      341.658118,
      347.528874
    ],
    "en": [
      "note that physical switch interfaces or switch ports cannot be given an IP address"
    ],
    "ru": [
      "обратите внимание, что физическим интерфейсам коммутатора или портам коммутатора нельзя присвоить IP-адрес."
    ]
  },
  {
    "time": [
      347.528874,
      352.426624
    ],
    "en": [
      "however you can give an IP address to one VLAN interface"
    ],
    "ru": [
      "однако вы можете дать IP-адрес одному интерфейсу VLAN."
    ]
  },
  {
    "time": [
      352.426624,
      357.287996
    ],
    "en": [
      "which can then be used to connect to the switch for management purposes something we'll do in a later lab"
    ],
    "ru": [
      "который затем можно использовать для подключения к коммутатору в целях управления, что мы сделаем в следующей лабораторной работе."
    ]
  },
  {
    "time": [
      357.287996,
      361.086722
    ],
    "en": [
      "we're going to configure the VLAN 1 interface here"
    ],
    "ru": [
      "мы собираемся настроить интерфейс VLAN 1 здесь"
    ]
  },
  {
    "time": [
      361.086722,
      366.686264
    ],
    "en": [
      "as we're going to need the IP address to receive the response from our one when we ping it in the next step"
    ],
    "ru": [
      "поскольку нам понадобится IP-адрес, чтобы получить ответ от нашего, когда мы пингуем его на следующем шаге"
    ]
  },
  {
    "time": [
      366.686264,
      379.429832
    ],
    "en": [
      "the IP address will be 192.168.1.2 372.56858 hit enter to accept the default subnet mask of 255.255.255.0"
    ],
    "ru": [
      "IP-адрес будет 192.168.1.2 372.56858 нажмите Enter, чтобы принять маску подсети по умолчанию 255.255.255.0"
    ]
  },
  {
    "time": [
      379.429832,
      384.325061
    ],
    "en": [
      "now keep hitting Enter to skip configuration of these interfaces"
    ],
    "ru": [
      "теперь продолжайте нажимать Enter, чтобы пропустить настройку этих интерфейсов"
    ]
  },
  {
    "time": [
      384.325061,
      386.409478
    ],
    "en": [
      "we won't be configuring them for now"
    ],
    "ru": [
      "мы пока не будем их настраивать"
    ]
  },
  {
    "time": [
      386.409478,
      397.432928
    ],
    "en": [
      "type know as we won't be configuring this as a cluster command switch which is beyond the scope of this lab"
    ],
    "ru": [
      "type know, поскольку мы не будем настраивать это как переключатель команд кластера, что выходит за рамки этой лабораторной работы."
    ]
  },
  {
    "time": [
      397.432928,
      405.290424
    ],
    "en": [
      "now hit enter one more time to save the configuration 401.21944 let's type show startup config again to check"
    ],
    "ru": [
      "теперь нажмите Enter еще раз, чтобы сохранить конфигурацию 401.21944, давайте снова введем show startup config, чтобы проверить"
    ]
  },
  {
    "time": [
      405.290424,
      408.424046
    ],
    "en": [
      "there's the hostname of switch one"
    ],
    "ru": [
      "там имя хоста первого переключателя"
    ]
  },
  {
    "time": [
      408.424046,
      412.480064
    ],
    "en": [
      "hour enable secret and password"
    ],
    "ru": [
      "час включить секрет и пароль"
    ]
  },
  {
    "time": [
      412.480064,
      417.703653
    ],
    "en": [
      "our IP address on VLAN 1"
    ],
    "ru": [
      "наш IP-адрес в VLAN 1"
    ]
  },
  {
    "time": [
      417.703653,
      421.658959
    ],
    "en": [
      "and our password on the vty lines"
    ],
    "ru": [
      "и наш пароль в строках VTY"
    ]
  },
  {
    "time": [
      421.658959,
      427.609998
    ],
    "en": [
      "by the way for those wondering vty stands for virtual teletype"
    ],
    "ru": [
      "кстати для тех, кому интересно, vty означает виртуальный телетайп."
    ]
  },
  {
    "time": [
      427.609998,
      431.309725
    ],
    "en": [
      "ok now finally let's ping from switch 1 to r1"
    ],
    "ru": [
      "Хорошо, теперь, наконец, давайте пингуем с переключателя 1 на r1"
    ]
  },
  {
    "time": [
      431.309725,
      439.360195
    ],
    "en": [
      "ping 192.168.1.1 the ping succeeds"
    ],
    "ru": [
      "пинг 192.168.1.1 пинг успешно"
    ]
  },
  {
    "time": [
      439.360195,
      442.567737
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
      442.567737,
      449.187119
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
      449.187119,
      454.215723
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
      454.215723,
      458.842251
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
      458.842251,
      466.027581
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
      466.027581,
      474.482443
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
      474.482443,
      474.482443
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
      474.482443,
      474.482443
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
      474.482443,
      474.482443
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]