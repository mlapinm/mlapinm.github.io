var objs = [
  {
    "time": [
      1.31,
      3.69
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
      3.69,
      7.22
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
      7.22,
      11.27
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
      11.27,
      17.49
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
      17.49,
      20.0
    ],
    "en": [
      "Thanks for your help."
    ],
    "ru": [
      "Спасибо за вашу помощь."
    ]
  },
  {
    "time": [
      20.0,
      24.01
    ],
    "en": [
      "In this lab we’ll get some practice configuring static routes on Cisco routers."
    ],
    "ru": [
      "В этой лабораторной работе мы получим некоторый опыт настройки статических маршрутов на маршрутизаторах Cisco."
    ]
  },
  {
    "time": [
      24.01,
      29.169
    ],
    "en": [
      "Actually, there are going to be two labs for Day 11 of this course."
    ],
    "ru": [
      "Фактически, на 11-й день этого курса будет две лабораторных работы."
    ]
  },
  {
    "time": [
      29.169,
      34.07
    ],
    "en": [
      "This first one, where you will configure static routes, and then the next one where you will"
    ],
    "ru": [
      "Это первый, где вы настроите статические маршруты, а затем следующий, где вы"
    ]
  },
  {
    "time": [
      34.07,
      38.07
    ],
    "en": [
      "troubleshoot an already-configured network that has some problems."
    ],
    "ru": [
      "устраните неполадки в уже настроенной сети, в которой есть некоторые проблемы."
    ]
  },
  {
    "time": [
      38.07,
      44.75
    ],
    "en": [
      "Anyway, in this lab, we want to configure the network to allow PC1 and PC2 to ping eachother."
    ],
    "ru": [
      "В любом случае, в этой лабораторной работе мы хотим настроить сеть, чтобы позволить ПК1 и ПК2 отправлять эхо-запросы друг другу."
    ]
  },
  {
    "time": [
      44.75,
      50.36
    ],
    "en": [
      "I haven’t done any pre-configurations on these devices at all, so we have to go in"
    ],
    "ru": [
      "Я вообще не делал никаких предварительных настроек на этих устройствах, поэтому нам нужно"
    ]
  },
  {
    "time": [
      50.36,
      54.43
    ],
    "en": [
      "and configure the hostnames, IP addresses, etc. first."
    ],
    "ru": [
      "и сначала настройте имена хостов, IP-адреса и т. д."
    ]
  },
  {
    "time": [
      54.43,
      59.51
    ],
    "en": [
      "I chose not to do any preconfigurations so that you can get some extra practice with"
    ],
    "ru": [
      "Я решил не делать никаких предварительных настроек, чтобы вы могли немного попрактиковаться с"
    ]
  },
  {
    "time": [
      59.51,
      65.46
    ],
    "en": [
      "the basics, as repetition is very important in getting used to using the CLI!"
    ],
    "ru": [
      "основы, поскольку повторение очень важно для привыкания к использованию интерфейса командной строки!"
    ]
  },
  {
    "time": [
      65.46,
      70.78
    ],
    "en": [
      "So, let’s do the basic configurations each device as instructed in step 1."
    ],
    "ru": [
      "Итак, давайте выполним базовую настройку каждого устройства, как описано в шаге 1."
    ]
  },
  {
    "time": [
      70.78,
      81.06
    ],
    "en": [
      "I’ll start on PC1 first...click on config, and the first thing we should configure is the gateway here."
    ],
    "ru": [
      "Сначала я начну с ПК1 ... нажмите config, и первое, что мы должны настроить, - это шлюз."
    ]
  },
  {
    "time": [
      81.06,
      85.759
    ],
    "en": [
      "This is the address to which PC1 will forward packets which are destined for a location"
    ],
    "ru": [
      "Это адрес, на который ПК1 будет пересылать пакеты, предназначенные для местоположения."
    ]
  },
  {
    "time": [
      85.759,
      88.2
    ],
    "en": [
      "outside of the local network."
    ],
    "ru": [
      "вне локальной сети."
    ]
  },
  {
    "time": [
      88.2,
      96.829
    ],
    "en": [
      "PC1’s gateway is R1, so I’ll put in R1’s IP address, 192.168.1.254."
    ],
    "ru": [
      "Шлюз ПК1 - R1, поэтому я введу IP-адрес R1, 192.168.1.254."
    ]
  },
  {
    "time": [
      96.829,
      104.24
    ],
    "en": [
      "Next, click on fastethernet0, which is PC1’s network interface, and type in the IP address"
    ],
    "ru": [
      "Затем щелкните fastethernet0, который является сетевым интерфейсом ПК1, и введите IP-адрес."
    ]
  },
  {
    "time": [
      104.24,
      112.479
    ],
    "en": [
      "here, 192.168.1.1, and if you hit tab it automatically fills in the subnet mask for this class C"
    ],
    "ru": [
      "здесь 192.168.1.1, и если вы нажмете вкладку, он автоматически заполнит маску подсети для этого класса C"
    ]
  },
  {
    "time": [
      112.479,
      118.2
    ],
    "en": [
      "address, 255.255.255.0. Then, exit out."
    ],
    "ru": [
      "адрес, 255.255.255.0. Затем выйдите."
    ]
  },
  {
    "time": [
      118.2,
      122.81
    ],
    "en": [
      "Now, don’t worry about configuring the switches."
    ],
    "ru": [
      "Теперь не беспокойтесь о настройке переключателей."
    ]
  },
  {
    "time": [
      122.81,
      128.03
    ],
    "en": [
      "If you want you can go in and turn off unused interfaces, set interface descriptions, etc"
    ],
    "ru": [
      "Если хотите, можете зайти и отключить неиспользуемые интерфейсы, задать описания интерфейсов и т. Д."
    ]
  },
  {
    "time": [
      128.03,
      133.599
    ],
    "en": [
      "for extra practice, but I think you’ll get plenty of practice just by configuring the routers."
    ],
    "ru": [
      "для дополнительной практики, но я думаю, вы получите много практики, просто настроив маршрутизаторы."
    ]
  },
  {
    "time": [
      133.599,
      142.11
    ],
    "en": [
      "So, let’s go on R1 next….from the CLI, I’ll use enable to enter privileged exec mode."
    ],
    "ru": [
      "Итак, давайте перейдем к R1 дальше ... из интерфейса командной строки я воспользуюсь enable, чтобы войти в привилегированный режим exec."
    ]
  },
  {
    "time": [
      142.11,
      145.66
    ],
    "en": [
      "Then, configure terminal to enter global config mode."
    ],
    "ru": [
      "Затем настройте терминал для входа в режим глобальной конфигурации."
    ]
  },
  {
    "time": [
      145.66,
      151.96
    ],
    "en": [
      "Now, let’s set the hostname with this command: HOSTNAME R1."
    ],
    "ru": [
      "Теперь давайте установим имя хоста с помощью этой команды: HOSTNAME R1."
    ]
  },
  {
    "time": [
      151.96,
      154.15
    ],
    "en": [
      "Next I’ll configure the interfaces."
    ],
    "ru": [
      "Далее я настрою интерфейсы."
    ]
  },
  {
    "time": [
      154.15,
      161.079
    ],
    "en": [
      "First, G0/1 which is connected to the internal LAN. INTERFACE G0/1."
    ],
    "ru": [
      "Во-первых, G0 / 1, который подключен к внутренней локальной сети. ИНТЕРФЕЙС G0 / 1."
    ]
  },
  {
    "time": [
      161.079,
      164.079
    ],
    "en": [
      "Let’s set the IP address."
    ],
    "ru": [
      "Зададим IP-адрес."
    ]
  },
  {
    "time": [
      164.079,
      172.24
    ],
    "en": [
      "IP ADDRESS 192.168.1.254 255.255.255.0."
    ],
    "ru": [
      "IP-АДРЕС 192.168.1.254 255.255.255.0."
    ]
  },
  {
    "time": [
      172.24,
      174.269
    ],
    "en": [
      "And how about a description?"
    ],
    "ru": [
      "А как насчет описания?"
    ]
  },
  {
    "time": [
      174.269,
      181.22
    ],
    "en": [
      "DESCRIPTION ## to SW1 ##. Finally, let’s enable it. NO SHUTDOWN."
    ],
    "ru": [
      "ОПИСАНИЕ ## - SW1 ##. Наконец, давайте включим его. НЕТ ОТКЛЮЧЕНИЯ."
    ]
  },
  {
    "time": [
      181.22,
      188.31
    ],
    "en": [
      "Next, the G0/0 interface connected to R2. INTERFACE G0/0."
    ],
    "ru": [
      "Затем интерфейс G0 / 0 подключен к R2. ИНТЕРФЕЙС G0 / 0."
    ]
  },
  {
    "time": [
      188.31,
      191.129
    ],
    "en": [
      "I’ll set the IP address."
    ],
    "ru": [
      "Я установлю IP-адрес."
    ]
  },
  {
    "time": [
      191.129,
      200.58
    ],
    "en": [
      "IP ADDRESS 192.168.12.1 255.255.255.0. Next, the description."
    ],
    "ru": [
      "IP-АДРЕС 192.168.12.1 255.255.255.0. Далее описание."
    ]
  },
  {
    "time": [
      200.58,
      206.439
    ],
    "en": [
      "DESCRIPTION ## to R2 ##. And let’s enable it. NO SHUTDOWN."
    ],
    "ru": [
      "ОПИСАНИЕ ## - R2 ##. И давайте включим это. НЕТ ОТКЛЮЧЕНИЯ."
    ]
  },
  {
    "time": [
      206.439,
      209.459
    ],
    "en": [
      "Okay, let’s check on the interfaces."
    ],
    "ru": [
      "Хорошо, давайте проверим интерфейсы."
    ]
  },
  {
    "time": [
      209.459,
      212.099
    ],
    "en": [
      "DO SHOW IP INTERFACE BRIEF."
    ],
    "ru": [
      "ПОКАЗАТЬ КРАТКОЕ ОПИСАНИЕ IP-ИНТЕРФЕЙСА."
    ]
  },
  {
    "time": [
      212.099,
      215.29
    ],
    "en": [
      "Okay, you can see the IP addresses we configured."
    ],
    "ru": [
      "Хорошо, вы можете увидеть настроенные нами IP-адреса."
    ]
  },
  {
    "time": [
      215.29,
      220.42
    ],
    "en": [
      "G0/1 is up/up, but G0/0 is up/down."
    ],
    "ru": [
      "G0 / 1 - вверх / вверх, но G0 / 0 - вверх / вниз."
    ]
  },
  {
    "time": [
      220.42,
      227.73
    ],
    "en": [
      "That’s not a problem, it’s just because R2’s G0/0 interface is still shutdown."
    ],
    "ru": [
      "Это не проблема, это просто потому, что интерфейс R2 G0 / 0 все еще отключен."
    ]
  },
  {
    "time": [
      227.73,
      241.42
    ],
    "en": [
      "Now let’s go on R2...enter privileged exec mode with ENABLE. Then CONFIGURE TERMINAL. Set the hostname. HOSTNAME R2."
    ],
    "ru": [
      "Теперь перейдем к R2 ... войдите в привилегированный режим exec с помощью ENABLE. Затем НАСТРОЙТЕ ТЕРМИНАЛ. Задайте имя хоста. HOSTNAME R2."
    ]
  },
  {
    "time": [
      241.42,
      249.209
    ],
    "en": [
      "Next I’ll configure G0/0 which is connected to R1. INTERFACE G0/0."
    ],
    "ru": [
      "Затем я настрою G0 / 0, который подключен к R1. ИНТЕРФЕЙС G0 / 0."
    ]
  },
  {
    "time": [
      249.209,
      250.719
    ],
    "en": [
      "Set the IP address."
    ],
    "ru": [
      "Установите IP-адрес."
    ]
  },
  {
    "time": [
      250.719,
      259.62
    ],
    "en": [
      "IP ADDRESS 192.168.12.2 255.255.255.0. Then the description."
    ],
    "ru": [
      "IP-АДРЕС 192.168.12.2 255.255.255.0. Потом описание."
    ]
  },
  {
    "time": [
      259.62,
      265.37
    ],
    "en": [
      "DESCRIPTION ## to R1 ##. Now let’s enable it. NO SHUTDOWN."
    ],
    "ru": [
      "ОПИСАНИЕ ## - R1 ##. Теперь давайте включим его. НЕТ ОТКЛЮЧЕНИЯ."
    ]
  },
  {
    "time": [
      265.37,
      271.83
    ],
    "en": [
      "Okay, now i’ll do the same on G0/1. INTERFACE G0/1."
    ],
    "ru": [
      "Хорошо, теперь я сделаю то же самое на G0 / 1. ИНТЕРФЕЙС G0 / 1."
    ]
  },
  {
    "time": [
      271.83,
      279.32
    ],
    "en": [
      "IP ADDRESSS 192.168.13.2 255.255.255.0."
    ],
    "ru": [
      "IP-АДРЕСЫ 192.168.13.2 255.255.255.0."
    ]
  },
  {
    "time": [
      279.32,
      288.15
    ],
    "en": [
      "DESCRIPTION ## to R3 ##. NO SHUTDOWN. Okay, let’s check on the interfaces."
    ],
    "ru": [
      "ОПИСАНИЕ ## - R3 ##. НЕТ ОТКЛЮЧЕНИЯ. Хорошо, давайте проверим интерфейсы."
    ]
  },
  {
    "time": [
      288.15,
      292.18
    ],
    "en": [
      "DO SHOW IP INTERFACE BRIEF."
    ],
    "ru": [
      "ПОКАЗАТЬ КРАТКОЕ ОПИСАНИЕ IP-ИНТЕРФЕЙСА."
    ]
  },
  {
    "time": [
      292.18,
      298.23
    ],
    "en": [
      "Like we saw on R1 before, this interface is UP/DOWN because R3’s interface is still"
    ],
    "ru": [
      "Как мы видели на R1 ранее, этот интерфейс UP / DOWN, потому что интерфейс R3 все еще"
    ]
  },
  {
    "time": [
      298.23,
      302.97
    ],
    "en": [
      "disabled, but the rest looks okay."
    ],
    "ru": [
      "отключен, но в остальном все в порядке."
    ]
  },
  {
    "time": [
      302.97,
      315.48
    ],
    "en": [
      "Okay next let’s go on R3...enter privileged exec mode with ENABLE. Then CONFIGURE TERMINAL. Set the hostname. HOSTNAME R3."
    ],
    "ru": [
      "Хорошо, теперь давайте перейдем к R3 ... войдите в привилегированный режим exec с помощью ENABLE. Затем НАСТРОЙТЕ ТЕРМИНАЛ. Задайте имя хоста. HOSTNAME R3."
    ]
  },
  {
    "time": [
      315.48,
      323.03
    ],
    "en": [
      "I’ll configure G0/0 which is connected to R2. INTERFACE G0/0."
    ],
    "ru": [
      "Я настрою G0 / 0, который подключен к R2. ИНТЕРФЕЙС G0 / 0."
    ]
  },
  {
    "time": [
      323.03,
      324.45
    ],
    "en": [
      "Set the IP address."
    ],
    "ru": [
      "Установите IP-адрес."
    ]
  },
  {
    "time": [
      324.45,
      333.639
    ],
    "en": [
      "IP ADDRESS 192.168.13.3 255.255.255.0. Then the description."
    ],
    "ru": [
      "IP-АДРЕС 192.168.13.3 255.255.255.0. Потом описание."
    ]
  },
  {
    "time": [
      333.639,
      339.349
    ],
    "en": [
      "DESCRIPTION ## to R2 ##. Finally, enable it. NO SHUTDOWN."
    ],
    "ru": [
      "ОПИСАНИЕ ## - R2 ##. Наконец, включите его. НЕТ ОТКЛЮЧЕНИЯ."
    ]
  },
  {
    "time": [
      339.349,
      344.72
    ],
    "en": [
      "Okay, let’s do the same steps on G0/1. INTERFACE G0/1."
    ],
    "ru": [
      "Хорошо, давайте проделаем те же шаги с G0 / 1. ИНТЕРФЕЙС G0 / 1."
    ]
  },
  {
    "time": [
      344.72,
      353.36
    ],
    "en": [
      "IP ADDRESS 192.168.3.254 255.255.255.0."
    ],
    "ru": [
      "IP-АДРЕС 192.168.3.254 255.255.255.0."
    ]
  },
  {
    "time": [
      353.36,
      358.1
    ],
    "en": [
      "DESCRIPTION ## to SW2 ##. NO SHUTDOWN."
    ],
    "ru": [
      "ОПИСАНИЕ ## - SW2 ##. НЕТ ОТКЛЮЧЕНИЯ."
    ]
  },
  {
    "time": [
      358.1,
      361.58
    ],
    "en": [
      "Let’s check the interfaces status."
    ],
    "ru": [
      "Проверим статус интерфейсов."
    ]
  },
  {
    "time": [
      361.58,
      364.099
    ],
    "en": [
      "DO SHOW IP INTERFACE BRIEF."
    ],
    "ru": [
      "ПОКАЗАТЬ КРАТКОЕ ОПИСАНИЕ IP-ИНТЕРФЕЙСА."
    ]
  },
  {
    "time": [
      364.099,
      368.91
    ],
    "en": [
      "Okay, looks good, and the interfaces we configured are both up/up."
    ],
    "ru": [
      "Хорошо, выглядит хорошо, и интерфейсы, которые мы настроили, работают / работают."
    ]
  },
  {
    "time": [
      368.91,
      384.57
    ],
    "en": [
      "Finally, I’ll configure PC2...click config, then set the gateway here, which should be R3’s IP address. 192.168.3.254."
    ],
    "ru": [
      "Наконец, я настрою ПК2 ... нажмите config, затем установите здесь шлюз, который должен быть IP-адресом маршрутизатора R3. 192.168.3.254."
    ]
  },
  {
    "time": [
      384.57,
      390.05
    ],
    "en": [
      "Then click on fastethernet0, and set the IP address here."
    ],
    "ru": [
      "Затем щелкните fastethernet0 и установите здесь IP-адрес."
    ]
  },
  {
    "time": [
      390.05,
      394.71
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
      390.05,
      394.71
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
      394.71,
      401.47
    ],
    "en": [
      "Okay, so we’ve done the preconfigurations, just some review of basic commands for practice."
    ],
    "ru": [
      "Итак, мы выполнили предварительную настройку, просто краткий обзор основных команд для практики."
    ]
  },
  {
    "time": [
      401.47,
      406.65
    ],
    "en": [
      "Now let’s get to the main point of this lab, configuring static routes."
    ],
    "ru": [
      "Теперь перейдем к основной сути этой лабораторной работы - настройке статических маршрутов."
    ]
  },
  {
    "time": [
      406.65,
      411.31
    ],
    "en": [
      "Before starting, let’s think about what static routes we’ll have to configure."
    ],
    "ru": [
      "Перед тем как начать, давайте подумаем, какие статические маршруты нам нужно настроить."
    ]
  },
  {
    "time": [
      411.31,
      419.289
    ],
    "en": [
      "We need two-way reachability, so PC1’s ping can reach PC2, and then PC2’s reply can reach PC1."
    ],
    "ru": [
      "Нам нужна двусторонняя доступность, чтобы эхо-запрос ПК1 мог достичь ПК2, а затем ответ ПК2 мог достичь ПК1."
    ]
  },
  {
    "time": [
      419.289,
      430.66
    ],
    "en": [
      "R1 is already connected to the 192.168.1.0/24 network, so it just needs a route to 192.168.3.0/24."
    ],
    "ru": [
      "R1 уже подключен к сети 192.168.1.0/24, поэтому ему просто нужен маршрут к 192.168.3.0/24."
    ]
  },
  {
    "time": [
      430.66,
      441.4
    ],
    "en": [
      "Likewise, R3 is already connected to 192.168.3.0/24, so it just needs a route to 192.168.1.0/24."
    ],
    "ru": [
      "Точно так же R3 уже подключен к 192.168.3.0/24, поэтому ему просто нужен маршрут к 192.168.1.0/24."
    ]
  },
  {
    "time": [
      441.4,
      447.699
    ],
    "en": [
      "R2, however, is not connected to either of those networks, so it will need routes to both."
    ],
    "ru": [
      "R2, однако, не подключен ни к одной из этих сетей, поэтому ему потребуются маршруты к обеим."
    ]
  },
  {
    "time": [
      447.699,
      451.69
    ],
    "en": [
      "So, that means a total of four routes need to be configured."
    ],
    "ru": [
      "Таким образом, это означает, что необходимо настроить всего четыре маршрута."
    ]
  },
  {
    "time": [
      451.69,
      456.29
    ],
    "en": [
      "One each on R1 and R3, and two on R2."
    ],
    "ru": [
      "По одному на R1 и R3 и по два на R2."
    ]
  },
  {
    "time": [
      456.29,
      461.68
    ],
    "en": [
      "Let’s go on R1 and configure the first of the routes."
    ],
    "ru": [
      "Перейдем к R1 и настроим первый из маршрутов."
    ]
  },
  {
    "time": [
      461.68,
      468.389
    ],
    "en": [
      "We have to be in global config mode, so I’ll type exit to get out of interface config mode."
    ],
    "ru": [
      "Мы должны находиться в режиме глобальной конфигурации, поэтому я наберу exit, чтобы выйти из режима конфигурации интерфейса."
    ]
  },
  {
    "time": [
      468.389,
      473.819
    ],
    "en": [
      "Configure the route with this command, IP ROUTE, and let’s use the context sensistive"
    ],
    "ru": [
      "Настройте маршрут с помощью этой команды, IP ROUTE, и давайте воспользуемся контекстно-зависимым"
    ]
  },
  {
    "time": [
      473.819,
      475.699
    ],
    "en": [
      "help to check the options."
    ],
    "ru": [
      "помогите проверить варианты."
    ]
  },
  {
    "time": [
      475.699,
      484.069
    ],
    "en": [
      "So, it says destination prefix, meaning the network address, which is 192.168.3.0."
    ],
    "ru": [
      "Итак, он говорит префикс назначения, то есть сетевой адрес, который равен 192.168.3.0."
    ]
  },
  {
    "time": [
      484.069,
      493.43
    ],
    "en": [
      "Use the context-sensitive help again, and next is the mask, which is 255.255.255.0, since it's /24."
    ],
    "ru": [
      "Снова воспользуйтесь контекстно-зависимой справкой, а затем маска 255.255.255.0, так как это / 24."
    ]
  },
  {
    "time": [
      493.43,
      498.689
    ],
    "en": [
      "Next, we can specify the ‘forwarding router’s address’, which is the IP address of the"
    ],
    "ru": [
      "Затем мы можем указать «адрес маршрутизатора пересылки», который является IP-адресом"
    ]
  },
  {
    "time": [
      498.689,
      505.41
    ],
    "en": [
      "next-hop router, or we can specify the exit interface, all of these options are interface types."
    ],
    "ru": [
      "маршрутизатор следующего перехода, или мы можем указать интерфейс выхода, все эти параметры являются типами интерфейса."
    ]
  },
  {
    "time": [
      505.41,
      512.3
    ],
    "en": [
      "I’ll specify the next-hop address of R2, which is 192.168.12.2."
    ],
    "ru": [
      "Я укажу адрес следующего перехода R2, то есть 192.168.12.2."
    ]
  },
  {
    "time": [
      512.3,
      517.25
    ],
    "en": [
      "If I use context-sensitive help again, you can see there is another possible option,"
    ],
    "ru": [
      "Если я снова воспользуюсь контекстной справкой, вы увидите, что есть еще один возможный вариант,"
    ]
  },
  {
    "time": [
      517.25,
      519.209
    ],
    "en": [
      "distance metric for this route."
    ],
    "ru": [
      "метрика расстояния для этого маршрута."
    ]
  },
  {
    "time": [
      519.209,
      524.64
    ],
    "en": [
      "I’ll talk about this option in a later video, but this CR down here means we can just enter"
    ],
    "ru": [
      "Я расскажу об этой опции в следующем видео, но этот CR означает, что мы можем просто ввести"
    ]
  },
  {
    "time": [
      524.64,
      526.7
    ],
    "en": [
      "the command as is."
    ],
    "ru": [
      "команда как есть."
    ]
  },
  {
    "time": [
      526.7,
      530.68
    ],
    "en": [
      "Okay, now let’s check out R1’s routing table."
    ],
    "ru": [
      "Хорошо, теперь давайте проверим таблицу маршрутизации R1."
    ]
  },
  {
    "time": [
      530.68,
      532.84
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
      532.84,
      538.149
    ],
    "en": [
      "There’s the static route we configured, as indicated by the S here."
    ],
    "ru": [
      "Мы настроили статический маршрут, обозначенный здесь буквой S."
    ]
  },
  {
    "time": [
      538.149,
      542.7
    ],
    "en": [
      "You can also see the configured and local routes for R1’s two interfaces."
    ],
    "ru": [
      "Вы также можете увидеть настроенные и локальные маршруты для двух интерфейсов маршрутизатора R1."
    ]
  },
  {
    "time": [
      542.7,
      548.63
    ],
    "en": [
      "Remember, the local route is the actual address configured on the interface, with a /32 mask"
    ],
    "ru": [
      "Помните, что локальный маршрут - это фактический адрес, настроенный на интерфейсе, с маской / 32."
    ]
  },
  {
    "time": [
      548.63,
      553.54
    ],
    "en": [
      "so it specifies just that single address, and then the connected route is the network"
    ],
    "ru": [
      "поэтому он указывает только этот единственный адрес, а затем подключенный маршрут - это сеть"
    ]
  },
  {
    "time": [
      553.54,
      557.55
    ],
    "en": [
      "address of the network the interface is connected to."
    ],
    "ru": [
      "адрес сети, к которой подключен интерфейс."
    ]
  },
  {
    "time": [
      557.55,
      562.57
    ],
    "en": [
      "Okay, R1’s route is done, let’s go on R2."
    ],
    "ru": [
      "Хорошо, маршрут R1 пройден, поехали по R2."
    ]
  },
  {
    "time": [
      562.57,
      567.11
    ],
    "en": [
      "Again, exit to get out of interface configuration mode."
    ],
    "ru": [
      "Снова выйдите, чтобы выйти из режима настройки интерфейса."
    ]
  },
  {
    "time": [
      567.11,
      572.54
    ],
    "en": [
      "Let’s configure the route to 192.168.1.0/24."
    ],
    "ru": [
      "Давайте настроим маршрут на 192.168.1.0/24."
    ]
  },
  {
    "time": [
      572.54,
      582.66
    ],
    "en": [
      "IP ROUTE 192.168.1.0 255.255.255.0, and then just to practice the other option I’ll specify"
    ],
    "ru": [
      "IP-МАРШРУТ 192.168.1.0 255.255.255.0, а затем, чтобы попрактиковаться в другом варианте, я укажу"
    ]
  },
  {
    "time": [
      582.66,
      588.86
    ],
    "en": [
      "the exit interface instead of the next-hop IP address. G0/0."
    ],
    "ru": [
      "интерфейс выхода вместо IP-адреса следующего перехода. G0 / 0."
    ]
  },
  {
    "time": [
      588.86,
      591.56
    ],
    "en": [
      "This message comes up, but you can ignore it."
    ],
    "ru": [
      "Это сообщение появляется, но вы можете его проигнорировать."
    ]
  },
  {
    "time": [
      591.56,
      594.44
    ],
    "en": [
      "It says ‘if not a point-to-point interface."
    ],
    "ru": [
      "В нем говорится: «Если бы не двухточечный интерфейс."
    ]
  },
  {
    "time": [
      594.44,
      600.76
    ],
    "en": [
      "However, this is a point-to-point interface, meaning it connects only to one other device."
    ],
    "ru": [
      "Однако это двухточечный интерфейс, то есть он подключается только к одному другому устройству."
    ]
  },
  {
    "time": [
      600.76,
      605.089
    ],
    "en": [
      "This is different than, for example, many routers connected to a single switch, which"
    ],
    "ru": [
      "Это отличается от, например, множества маршрутизаторов, подключенных к одному коммутатору, который"
    ]
  },
  {
    "time": [
      605.089,
      606.92
    ],
    "en": [
      "we would call a shared segment."
    ],
    "ru": [
      "мы бы назвали общий сегмент."
    ]
  },
  {
    "time": [
      606.92,
      610.71
    ],
    "en": [
      "Anyway, don’t worry about that for now. You can just ignore this message."
    ],
    "ru": [
      "В любом случае, пока об этом не беспокойтесь. Вы можете просто проигнорировать это сообщение."
    ]
  },
  {
    "time": [
      610.71,
      616.6
    ],
    "en": [
      "Okay, next lets configure the route to 192.168.3.0/24."
    ],
    "ru": [
      "Хорошо, теперь давайте настроим маршрут на 192.168.3.0/24."
    ]
  },
  {
    "time": [
      616.6,
      631.04
    ],
    "en": [
      "IP ROUTE 192.168.3.0 255.255.255.0, and this time let’s do the next-hop IP address. 192.168.13.3."
    ],
    "ru": [
      "IP-МАРШРУТ 192.168.3.0 255.255.255.0, и на этот раз давайте займемся IP-адресом следующего перехода. 192.168.13.3."
    ]
  },
  {
    "time": [
      631.04,
      636.42
    ],
    "en": [
      "Okay, let’s check the routing table. DO SHOW IP ROUTE."
    ],
    "ru": [
      "Хорошо, давайте проверим таблицу маршрутизации. ПОКАЗАТЬ IP-МАРШРУТ."
    ]
  },
  {
    "time": [
      636.42,
      643.079
    ],
    "en": [
      "Okay, here are the two static routes, and the connected and local routes for each interface. Looks good."
    ],
    "ru": [
      "Хорошо, вот два статических маршрута, а также подключенные и локальные маршруты для каждого интерфейса. Выглядит неплохо."
    ]
  },
  {
    "time": [
      643.079,
      648.38
    ],
    "en": [
      "Finally, let’s configure R3’s static route."
    ],
    "ru": [
      "Наконец, давайте настроим статический маршрут R3."
    ]
  },
  {
    "time": [
      648.38,
      657.4
    ],
    "en": [
      "Type EXIT to get out of interface config mode, and let’s configure a route to 192.168.1.0/24."
    ],
    "ru": [
      "Введите EXIT, чтобы выйти из режима конфигурации интерфейса, и давайте настроим маршрут к 192.168.1.0/24."
    ]
  },
  {
    "time": [
      657.4,
      669.14
    ],
    "en": [
      "IP ROUTE 192.168.1.0 255.255.255.0 192.168.13.2, setting R2 as the next-hop."
    ],
    "ru": [
      "IP-МАРШРУТ 192.168.1.0 255.255.255.0 192.168.13.2, установка R2 в качестве следующего перехода."
    ]
  },
  {
    "time": [
      669.14,
      671.85
    ],
    "en": [
      "Let’s check the routing table."
    ],
    "ru": [
      "Давайте проверим таблицу маршрутизации."
    ]
  },
  {
    "time": [
      671.85,
      674.029
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
      674.029,
      679.98
    ],
    "en": [
      "Okay, looks good, one static route and the connected and local routes for each interface."
    ],
    "ru": [
      "Хорошо, выглядит хорошо, один статический маршрут и подключенные и локальные маршруты для каждого интерфейса."
    ]
  },
  {
    "time": [
      679.98,
      689.2
    ],
    "en": [
      "Now, let’s go on PC1 and try out that ping...click on desktop, then command prompt."
    ],
    "ru": [
      "Теперь давайте зайдем на ПК1 и попробуем этот пинг ... нажмите на рабочий стол, затем командную строку."
    ]
  },
  {
    "time": [
      689.2,
      691.86
    ],
    "en": [
      "Okay, so this is the moment of truth."
    ],
    "ru": [
      "Хорошо, это момент истины."
    ]
  },
  {
    "time": [
      691.86,
      698.139
    ],
    "en": [
      "The first ping might fail due to ARP, address resolution protocol, but once ARP is finished"
    ],
    "ru": [
      "Первый эхо-запрос может завершиться неудачно из-за ARP, протокола разрешения адресов, но после завершения ARP"
    ]
  },
  {
    "time": [
      698.139,
      709.649
    ],
    "en": [
      "the rest of the pings should work if we configured everything correctly. Let’s try. PING 192.168.3.1."
    ],
    "ru": [
      "остальные пинги должны работать, если мы все настроили правильно. Давай попробуем. ПИНГ 192.168.3.1."
    ]
  },
  {
    "time": [
      709.649,
      721.55
    ],
    "en": [
      "Okay, looks like PC1 is able to reach PC2, and PC2 is able to reach PC1 with its reply."
    ],
    "ru": [
      "Хорошо, похоже, что ПК1 может связаться с ПК2, а ПК2 может достичь ПК1 со своим ответом."
    ]
  },
  {
    "time": [
      721.55,
      723.88
    ],
    "en": [
      "We have successfully configured static routing."
    ],
    "ru": [
      "Мы успешно настроили статическую маршрутизацию."
    ]
  },
  {
    "time": [
      723.88,
      727.35
    ],
    "en": [
      "That’s all for this lab."
    ],
    "ru": [
      "Это все для этой лаборатории."
    ]
  },
  {
    "time": [
      727.35,
      728.92
    ],
    "en": [
      "Thank you for watching."
    ],
    "ru": [
      "Спасибо за просмотр."
    ]
  },
  {
    "time": [
      728.92,
      732.83
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
      732.83,
      736.17
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
      736.17,
      738.85
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
      738.85,
      746.26
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
      746.26,
      746.26
    ],
    "en": [
      "That's all for now."
    ],
    "ru": [
      "На этом пока все."
    ]
  }
]