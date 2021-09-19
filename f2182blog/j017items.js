var objs = [
  {
    "time": [
      1.199,
      3.57
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
      3.57,
      8.79
    ],
    "en": [
      "This is a free, complete course for the CCNA 200-301."
    ],
    "ru": [
      "Это бесплатный полный курс CCNA 200-301."
    ]
  },
  {
    "time": [
      8.79,
      13.15
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
      13.15,
      19.76
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
      19.76,
      22.09
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
      22.09,
      27.02
    ],
    "en": [
      "In this lab we’ll configure interfaces on a router and two switches."
    ],
    "ru": [
      "В этой лабораторной работе мы настроим интерфейсы на маршрутизаторе и двух коммутаторах."
    ]
  },
  {
    "time": [
      27.02,
      36.37
    ],
    "en": [
      "This is a single LAN, 172.16.0.0/16, connected to R1’s G0/0 interface."
    ],
    "ru": [
      "Это одна LAN, 172.16.0.0/16, подключенная к интерфейсу G0 / 0 маршрутизатора R1."
    ]
  },
  {
    "time": [
      36.37,
      41.66
    ],
    "en": [
      "In the real world, R1 would then connect to other LANs or perhaps the Internet, but we’ll"
    ],
    "ru": [
      "В реальном мире R1 будет подключаться к другим локальным сетям или, возможно, к Интернету, но мы будем"
    ]
  },
  {
    "time": [
      41.66,
      45.93
    ],
    "en": [
      "just configure this small LAN for now. Let’s get started."
    ],
    "ru": [
      "просто сконфигурируйте пока эту маленькую локальную сеть. Давайте начнем."
    ]
  },
  {
    "time": [
      45.93,
      51.72
    ],
    "en": [
      "So, there are six main steps in this lab. 1, configure hostnames."
    ],
    "ru": [
      "Итак, в этой лабораторной работе шесть основных шагов. 1, настройте имена хостов."
    ]
  },
  {
    "time": [
      51.72,
      54.96
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
      51.72,
      54.96
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
      54.96,
      57.86
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
      54.96,
      57.86
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
      57.86,
      61.13
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
      57.86,
      61.13
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
      61.13,
      64.33
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
      61.13,
      64.33
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
      64.33,
      67.31
    ],
    "en": [
      "And 6, save the configurations."
    ],
    "ru": [
      "И 6, сохраните конфигурации."
    ]
  },
  {
    "time": [
      67.31,
      71.609
    ],
    "en": [
      "Instead of going through each step one by one, I’ll go through the steps one device"
    ],
    "ru": [
      "Вместо того, чтобы проходить каждый шаг один за другим, я буду выполнять их на одном устройстве."
    ]
  },
  {
    "time": [
      71.609,
      75.21
    ],
    "en": [
      "at a time, but you can do it in any order you like."
    ],
    "ru": [
      "за раз, но вы можете делать это в любом порядке."
    ]
  },
  {
    "time": [
      75.21,
      82.899
    ],
    "en": [
      "So, let’s go on R1 first. The first step is to configure the hostname."
    ],
    "ru": [
      "Итак, давайте сначала перейдем к R1. Первый шаг - настроить имя хоста."
    ]
  },
  {
    "time": [
      82.899,
      88.369
    ],
    "en": [
      "As you can see, it currently has the default hostname of ‘router’ as indicated by the prompt here."
    ],
    "ru": [
      "Как видите, в настоящее время он имеет имя хоста по умолчанию «router», как указано здесь."
    ]
  },
  {
    "time": [
      88.369,
      91.24
    ],
    "en": [
      "Let’s change it to R1."
    ],
    "ru": [
      "Давайте изменим его на R1."
    ]
  },
  {
    "time": [
      91.24,
      98.7
    ],
    "en": [
      "Use ‘enable’ to enter privileged exec mode, then ‘configure terminal’ to enter global config mode."
    ],
    "ru": [
      "Используйте «enable» для входа в привилегированный режим exec, затем «configure terminal», чтобы войти в режим глобальной конфигурации."
    ]
  },
  {
    "time": [
      98.7,
      106.99
    ],
    "en": [
      "From here simply type hostname R1, and you can see the prompt has changed to indicate the new hostname."
    ],
    "ru": [
      "Отсюда просто введите имя хоста R1, и вы увидите, что приглашение изменилось, чтобы указать новое имя хоста."
    ]
  },
  {
    "time": [
      106.99,
      111.56
    ],
    "en": [
      "Now let’s configure the IP address on its G0/0 interface."
    ],
    "ru": [
      "Теперь давайте настроим IP-адрес на его интерфейсе G0 / 0."
    ]
  },
  {
    "time": [
      111.56,
      117.409
    ],
    "en": [
      "Type ‘interface g0/0’ to enter interface config mode for the interface."
    ],
    "ru": [
      "Введите «interface g0 / 0», чтобы войти в режим конфигурации интерфейса для интерфейса."
    ]
  },
  {
    "time": [
      117.409,
      123.799
    ],
    "en": [
      "Actually, before doing the configuration, let’s confirm the current status of the interface."
    ],
    "ru": [
      "Собственно, прежде чем приступить к настройке, давайте подтвердим текущий статус интерфейса."
    ]
  },
  {
    "time": [
      123.799,
      126.49
    ],
    "en": [
      "Do show ip interface brief."
    ],
    "ru": [
      "Показать краткое описание интерфейса IP."
    ]
  },
  {
    "time": [
      126.49,
      133.62
    ],
    "en": [
      "Remember, ‘do’ let’s me use the show command even though I’m not in privileged exec mode."
    ],
    "ru": [
      "Помните, что «do» позволяет мне использовать команду show, даже если я не нахожусь в привилегированном режиме exec."
    ]
  },
  {
    "time": [
      133.62,
      139.349
    ],
    "en": [
      "Here’s the gigabitethernet0/0 interface, the IP address is unassigned, so the method"
    ],
    "ru": [
      "Вот интерфейс gigabitethernet0 / 0, IP-адрес не назначен, поэтому метод"
    ]
  },
  {
    "time": [
      139.349,
      147.239
    ],
    "en": [
      "is unset, and the status is administratively down because that’s the default setting for router interfaces."
    ],
    "ru": [
      "не задано, и статус административно отключен, поскольку это настройка по умолчанию для интерфейсов маршрутизатора."
    ]
  },
  {
    "time": [
      147.239,
      150.51
    ],
    "en": [
      "Let’s configure it and then check again after."
    ],
    "ru": [
      "Давайте настроим его, а потом еще раз проверим."
    ]
  },
  {
    "time": [
      150.51,
      154.1
    ],
    "en": [
      "So, let’s configure the IP address."
    ],
    "ru": [
      "Итак, давайте настроим IP-адрес."
    ]
  },
  {
    "time": [
      154.1,
      168.54
    ],
    "en": [
      "IP ADDRESS 172.16.255.254, and because the prefix length is /16, the subnet mask will be 255.255.0.0."
    ],
    "ru": [
      "IP-АДРЕС 172.16.255.254, а поскольку длина префикса / 16, маска подсети будет 255.255.0.0."
    ]
  },
  {
    "time": [
      168.54,
      173.64
    ],
    "en": [
      "Okay, now because this interface is connected to another networking device, SW1, I’ll"
    ],
    "ru": [
      "Хорошо, теперь, поскольку этот интерфейс подключен к другому сетевому устройству, SW1, я"
    ]
  },
  {
    "time": [
      173.64,
      177.049
    ],
    "en": [
      "manually configure the speed and duplex."
    ],
    "ru": [
      "вручную настроить скорость и дуплекс."
    ]
  },
  {
    "time": [
      177.049,
      187.02
    ],
    "en": [
      "SPEED 1000, meaning 1000 megabits per second because this is a gigabitethernet interface. Then, duplex full."
    ],
    "ru": [
      "SPEED 1000, что означает 1000 мегабит в секунду, потому что это интерфейс Gigabitethernet. Затем дуплекс полный."
    ]
  },
  {
    "time": [
      187.02,
      191.709
    ],
    "en": [
      "Devices attached to switches can use full duplex, there’s no reason to use half-duplex"
    ],
    "ru": [
      "Устройства, подключенные к коммутаторам, могут использовать полный дуплекс, нет причин использовать полудуплекс."
    ]
  },
  {
    "time": [
      191.709,
      194.8
    ],
    "en": [
      "like a device attached to a hub."
    ],
    "ru": [
      "как устройство, подключенное к концентратору."
    ]
  },
  {
    "time": [
      194.8,
      197.3
    ],
    "en": [
      "Next let’s configure a description."
    ],
    "ru": [
      "Теперь давайте настроим описание."
    ]
  },
  {
    "time": [
      197.3,
      201.53
    ],
    "en": [
      "I’ll indicate that this device (interface) is connected to SW1."
    ],
    "ru": [
      "Я укажу, что это устройство (интерфейс) подключено к SW1."
    ]
  },
  {
    "time": [
      201.53,
      211.97
    ],
    "en": [
      "So, description ## to SW1 ##. Now, the last step is to disable interfaces which are not connected to other devices."
    ],
    "ru": [
      "Итак, описание ## к SW1 ##. Теперь последний шаг - отключить интерфейсы, которые не подключены к другим устройствам."
    ]
  },
  {
    "time": [
      211.97,
      217.049
    ],
    "en": [
      "Because router interfaces are shutdown by default, we don’t have to do that, however"
    ],
    "ru": [
      "Поскольку интерфейсы маршрутизатора отключены по умолчанию, нам не нужно этого делать."
    ]
  },
  {
    "time": [
      217.049,
      223.689
    ],
    "en": [
      "we do have to do the opposite for this interface which is connected to another device, so no shutdown."
    ],
    "ru": [
      "мы должны сделать обратное для этого интерфейса, который подключен к другому устройству, поэтому выключения не требуется."
    ]
  },
  {
    "time": [
      223.689,
      229.77
    ],
    "en": [
      "There we go, now the interface is enabled and let’s check out the status."
    ],
    "ru": [
      "Итак, теперь интерфейс включен, и давайте проверим статус."
    ]
  },
  {
    "time": [
      229.77,
      232.62
    ],
    "en": [
      "Do show ip interface brief."
    ],
    "ru": [
      "Показать краткое описание интерфейса IP."
    ]
  },
  {
    "time": [
      232.62,
      239.93
    ],
    "en": [
      "Okay, you can see the IP address we configured, the method is manual, the status is up, but"
    ],
    "ru": [
      "Хорошо, вы можете увидеть IP-адрес, который мы настроили, метод ручной, статус повышен, но"
    ]
  },
  {
    "time": [
      239.93,
      242.459
    ],
    "en": [
      "the protocol is down."
    ],
    "ru": [
      "протокол не работает."
    ]
  },
  {
    "time": [
      242.459,
      248.65
    ],
    "en": [
      "Although on a real Cisco device I think this should be UP/UP, on packet tracer its down"
    ],
    "ru": [
      "Хотя на реальном устройстве Cisco я думаю, что это должно быть UP / UP, на трассировщике пакетов его вниз"
    ]
  },
  {
    "time": [
      248.65,
      253.409
    ],
    "en": [
      "because I manually configured the speed and duplex on this interface without doing so"
    ],
    "ru": [
      "потому что я вручную настроил скорость и дуплекс на этом интерфейсе, не делая этого"
    ]
  },
  {
    "time": [
      253.409,
      256.66
    ],
    "en": [
      "on SW1’s interface, but we’ll fix that soon."
    ],
    "ru": [
      "на интерфейсе SW1, но мы скоро это исправим."
    ]
  },
  {
    "time": [
      256.66,
      262.29
    ],
    "en": [
      "That’s a downside of using a simulator like packet tracer, sometimes things don’t behave"
    ],
    "ru": [
      "Это обратная сторона использования симулятора, такого как пакетный трассировщик, иногда что-то не работает."
    ]
  },
  {
    "time": [
      262.29,
      265.47
    ],
    "en": [
      "like they should on a real device."
    ],
    "ru": [
      "как и должно быть на реальном устройстве."
    ]
  },
  {
    "time": [
      265.47,
      270.53
    ],
    "en": [
      "Before moving on to SW1, I’ll configure descriptions on R1’s other interfaces to"
    ],
    "ru": [
      "Прежде чем перейти к SW1, я настрою описания на других интерфейсах маршрутизатора R1, чтобы"
    ]
  },
  {
    "time": [
      270.53,
      272.69
    ],
    "en": [
      "indicate that they are not in use."
    ],
    "ru": [
      "указывают, что они не используются."
    ]
  },
  {
    "time": [
      272.69,
      276.83
    ],
    "en": [
      "I’ll use the interface range command."
    ],
    "ru": [
      "Я воспользуюсь командой interface range."
    ]
  },
  {
    "time": [
      276.83,
      281.139
    ],
    "en": [
      "Interface range g0/1 – 2."
    ],
    "ru": [
      "Диапазон интерфейса g0 / 1 - 2."
    ]
  },
  {
    "time": [
      281.139,
      287.85
    ],
    "en": [
      "DESCRIPTION ## not in use ##. Okay, let’s check our config. Do show run."
    ],
    "ru": [
      "ОПИСАНИЕ ## не используется ##. Хорошо, давайте проверим нашу конфигурацию. Сделайте шоу-бег."
    ]
  },
  {
    "time": [
      287.85,
      293.81
    ],
    "en": [
      "Here’s the running config of the device, and here are the configurations of the interface,"
    ],
    "ru": [
      "Вот текущая конфигурация устройства, а вот конфигурации интерфейса,"
    ]
  },
  {
    "time": [
      293.81,
      297.86
    ],
    "en": [
      "including speed, duplex, ip addresses, and descriptions."
    ],
    "ru": [
      "включая скорость, дуплекс, IP-адреса и описания."
    ]
  },
  {
    "time": [
      297.86,
      304.39
    ],
    "en": [
      "Okay, since I’m done configuring, I’ll use END to return to privileged exec mode."
    ],
    "ru": [
      "Хорошо, поскольку я закончил настройку, я использую END, чтобы вернуться в привилегированный режим exec."
    ]
  },
  {
    "time": [
      304.39,
      307.14
    ],
    "en": [
      "Now let’s save the running configuration."
    ],
    "ru": [
      "Теперь сохраним текущую конфигурацию."
    ]
  },
  {
    "time": [
      307.14,
      311.27
    ],
    "en": [
      "There are three Cisco devices in this lab, I’ll use a different method to save the"
    ],
    "ru": [
      "В этой лабораторной работе три устройства Cisco. Я воспользуюсь другим методом, чтобы сохранить"
    ]
  },
  {
    "time": [
      311.27,
      315.0
    ],
    "en": [
      "configuration on each device to show you each one."
    ],
    "ru": [
      "конфигурации на каждом устройстве, чтобы показать вам каждое из них."
    ]
  },
  {
    "time": [
      315.0,
      322.67
    ],
    "en": [
      "Here on R1, I’ll use copy running-config startup-config, and hit enter to confirm."
    ],
    "ru": [
      "Здесь, на R1, я использую copy running-config startup-config и нажимаю Enter для подтверждения."
    ]
  },
  {
    "time": [
      322.67,
      326.0
    ],
    "en": [
      "Now let’s check if it was saved to the startup-config."
    ],
    "ru": [
      "Теперь давайте проверим, был ли он сохранен в startup-config."
    ]
  },
  {
    "time": [
      326.0,
      333.65
    ],
    "en": [
      "Show startup-config….here are the interfaces, and you can see the configuration changes we made."
    ],
    "ru": [
      "Show startup-config…. Вот интерфейсы, и вы можете увидеть изменения конфигурации, которые мы внесли."
    ]
  },
  {
    "time": [
      333.65,
      337.28
    ],
    "en": [
      "Okay, that’s all for R1."
    ],
    "ru": [
      "Ладно, это все для R1."
    ]
  },
  {
    "time": [
      337.28,
      341.75
    ],
    "en": [
      "Before moving on to SW1, I’ll make the only configuration change we need to make on the"
    ],
    "ru": [
      "Прежде чем перейти к SW1, я внесу единственное изменение конфигурации, которое нам нужно внести в"
    ]
  },
  {
    "time": [
      341.75,
      344.86
    ],
    "en": [
      "PCs, configuring their IP addresses."
    ],
    "ru": [
      "ПК, настраивая их IP-адреса."
    ]
  },
  {
    "time": [
      344.86,
      350.56
    ],
    "en": [
      "Let’s go on PC1….Click on config."
    ],
    "ru": [
      "Поехали на ПК1… .Щелкните config."
    ]
  },
  {
    "time": [
      350.56,
      356.69
    ],
    "en": [
      "And notice I pre-configured the gateway, which is R1’s address, because its the router for the network."
    ],
    "ru": [
      "И обратите внимание, что я предварительно настроил шлюз, который является адресом R1, потому что это маршрутизатор для сети."
    ]
  },
  {
    "time": [
      356.69,
      361.91
    ],
    "en": [
      "Now, click on Fastethernet0, which is PC1’s network interface."
    ],
    "ru": [
      "Теперь щелкните Fastethernet0, который является сетевым интерфейсом ПК1."
    ]
  },
  {
    "time": [
      361.91,
      368.03
    ],
    "en": [
      "PC1’s IP address is 172.16.0.1."
    ],
    "ru": [
      "IP-адрес ПК1 - 172.16.0.1."
    ]
  },
  {
    "time": [
      368.03,
      375.52
    ],
    "en": [
      "I hit TAB, and it automatically fills in the appropriate subnet mask 255.255.0.0."
    ],
    "ru": [
      "Я нажимаю TAB, и он автоматически заполняет соответствующую маску подсети 255.255.0.0."
    ]
  },
  {
    "time": [
      375.52,
      379.12
    ],
    "en": [
      "Okay, now I can exit out."
    ],
    "ru": [
      "Хорошо, теперь я могу выйти."
    ]
  },
  {
    "time": [
      379.12,
      384.82
    ],
    "en": [
      "Next is PC2. Click config. Fastethernet0."
    ],
    "ru": [
      "Далее идет PC2. Щелкните config. Fastethernet0."
    ]
  },
  {
    "time": [
      384.82,
      397.76
    ],
    "en": [
      "IP address 172.16.0.2, hit tab and it fills in the subnet mask. Next is PC3...config. Fastethernet0."
    ],
    "ru": [
      "IP-адрес 172.16.0.2, нажмите вкладку, и он заполнит маску подсети. Далее идет PC3 ... config. Fastethernet0."
    ]
  },
  {
    "time": [
      397.76,
      410.3
    ],
    "en": [
      "IP address of 172.16.0.3, hit tab to fill in the subnet mask, and exit. Finally, PC4….config. Fastethernet0."
    ],
    "ru": [
      "IP-адрес 172.16.0.3, нажмите вкладку, чтобы заполнить маску подсети, и выйдите. Наконец, PC4… .config. Fastethernet0."
    ]
  },
  {
    "time": [
      410.3,
      418.71
    ],
    "en": [
      "IP address of 172.16.0.4, hit tab to fill in the subnet mask, and exit."
    ],
    "ru": [
      "IP-адрес 172.16.0.4, нажмите вкладку, чтобы заполнить маску подсети, и выйдите."
    ]
  },
  {
    "time": [
      418.71,
      431.69
    ],
    "en": [
      "Okay, now let’s configure SW1….enable. Conf t. First, the hostname. Hostname SW1."
    ],
    "ru": [
      "Хорошо, теперь давайте настроим SW1… .enable. Конф т. Во-первых, имя хоста. Имя хоста SW1."
    ]
  },
  {
    "time": [
      431.69,
      434.29
    ],
    "en": [
      "Now let’s check out the interfaces."
    ],
    "ru": [
      "Теперь посмотрим на интерфейсы."
    ]
  },
  {
    "time": [
      434.29,
      437.4
    ],
    "en": [
      "Do show interfaces status."
    ],
    "ru": [
      "Показывать статус интерфейсов."
    ]
  },
  {
    "time": [
      437.4,
      442.0
    ],
    "en": [
      "This is a command that works on switches, but not routers, by the way."
    ],
    "ru": [
      "Эта команда, кстати, работает на коммутаторах, но не на маршрутизаторах."
    ]
  },
  {
    "time": [
      442.0,
      446.68
    ],
    "en": [
      "As you can see, all default settings. No descriptions."
    ],
    "ru": [
      "Как видите, все настройки по умолчанию. Описаний нет."
    ]
  },
  {
    "time": [
      446.68,
      452.68
    ],
    "en": [
      "The statuses are connected or not connect, not DISABLED because these are switch interfaces,"
    ],
    "ru": [
      "Статусы подключены или не подключены, а не ОТКЛЮЧЕНО, потому что это интерфейсы коммутатора,"
    ]
  },
  {
    "time": [
      452.68,
      455.1
    ],
    "en": [
      "they are not shutdown by default."
    ],
    "ru": [
      "они не отключаются по умолчанию."
    ]
  },
  {
    "time": [
      455.1,
      458.92
    ],
    "en": [
      "The speed and duplex are auto and auto as well."
    ],
    "ru": [
      "Скорость и дуплекс также автоматические и автоматические."
    ]
  },
  {
    "time": [
      458.92,
      468.77
    ],
    "en": [
      "Okay, let’s configure the G0/1 interface. Interface g0/1. Speed 1000. DUPLEX full."
    ],
    "ru": [
      "Хорошо, давайте настроим интерфейс G0 / 1. Интерфейс g0 / 1. Скорость 1000. ДУПЛЕКС полный."
    ]
  },
  {
    "time": [
      468.77,
      483.75
    ],
    "en": [
      "It’s connected to R1, so DESCRIPTION ## to R1 ##. Thats it! Now G0/2. Interface G0/2. Speed 1000. DUPLEX full."
    ],
    "ru": [
      "Он подключен к R1, поэтому DESCRIPTION ## - R1 ##. Вот и все! Теперь G0 / 2. Интерфейс G0 / 2. Скорость 1000. ДУПЛЕКС полный."
    ]
  },
  {
    "time": [
      483.75,
      493.89
    ],
    "en": [
      "It’s connected to SW2, so DESCRIPTION ## to SW2 ##. Now, as for fastethernet0/1 and 0/2,"
    ],
    "ru": [
      "Он подключен к SW2, поэтому DESCRIPTION ## - SW2 ##. Теперь, что касается fastethernet0 / 1 и 0/2,"
    ]
  },
  {
    "time": [
      493.89,
      498.11
    ],
    "en": [
      "they are connected to end hosts so according to the lab instructions I don’t need to"
    ],
    "ru": [
      "они подключены к конечным хостам, поэтому согласно лабораторным инструкциям мне не нужно"
    ]
  },
  {
    "time": [
      498.11,
      500.0
    ],
    "en": [
      "configure the speed and duplex."
    ],
    "ru": [
      "настроить скорость и дуплекс."
    ]
  },
  {
    "time": [
      500.0,
      504.19
    ],
    "en": [
      "So, I’ll just configure descriptions."
    ],
    "ru": [
      "Итак, я просто настрою описания."
    ]
  },
  {
    "time": [
      504.19,
      508.15
    ],
    "en": [
      "Interface range f0/1 – 2."
    ],
    "ru": [
      "Диапазон интерфейса f0 / 1-2."
    ]
  },
  {
    "time": [
      508.15,
      514.3
    ],
    "en": [
      "DESCRIPTION ## to end hosts ##. Now, as for the rest of the interfaces, I’ll configure"
    ],
    "ru": [
      "ОПИСАНИЕ ## до конечных хостов ##. Теперь, что касается остальных интерфейсов, я настрою"
    ]
  },
  {
    "time": [
      514.3,
      517.08
    ],
    "en": [
      "descriptions and shut them down."
    ],
    "ru": [
      "описания и выключите их."
    ]
  },
  {
    "time": [
      517.08,
      526.58
    ],
    "en": [
      "There are 22 unused fastethernet interfaces, so interface range f0/3 – 24."
    ],
    "ru": [
      "Есть 22 неиспользуемых интерфейса fastethernet, поэтому диапазон интерфейсов f0 / 3 - 24."
    ]
  },
  {
    "time": [
      526.58,
      531.36
    ],
    "en": [
      "DESCRIPTION ## not in use ##. shutdown."
    ],
    "ru": [
      "ОПИСАНИЕ ## не используется ##. неисправность."
    ]
  },
  {
    "time": [
      531.36,
      533.92
    ],
    "en": [
      "Okay, let’s configure the configurations."
    ],
    "ru": [
      "Хорошо, давайте настроим конфигурации."
    ]
  },
  {
    "time": [
      533.92,
      536.39
    ],
    "en": [
      "Do show interface status."
    ],
    "ru": [
      "Показывать статус интерфейса."
    ]
  },
  {
    "time": [
      536.39,
      539.94
    ],
    "en": [
      "Okay, you can see the interfaces we disabled."
    ],
    "ru": [
      "Хорошо, вы можете увидеть отключенные нами интерфейсы."
    ]
  },
  {
    "time": [
      539.94,
      549.32
    ],
    "en": [
      "Again, because I configured the duplex manually on G0/2 it's down at the moment, but will come up when we configure SW2."
    ],
    "ru": [
      "Опять же, поскольку я вручную настроил дуплекс на G0 / 2, он сейчас не работает, но появится, когда мы настроим SW2."
    ]
  },
  {
    "time": [
      549.32,
      552.65
    ],
    "en": [
      "Notice the speed and duplex we manually configured."
    ],
    "ru": [
      "Обратите внимание на скорость и дуплекс, которые мы настроили вручную."
    ]
  },
  {
    "time": [
      552.65,
      554.82
    ],
    "en": [
      "This is also a problem with packet tracer."
    ],
    "ru": [
      "Это также проблема с трассировщиком пакетов."
    ]
  },
  {
    "time": [
      554.82,
      564.11
    ],
    "en": [
      "It says a-1000 and a-full, meaning it autonegotiated the speed of 1000 and duplex of full, which"
    ],
    "ru": [
      "В нем написано a-1000 и a-full, что означает автоматическое согласование скорости 1000 и дуплекса полного, что"
    ]
  },
  {
    "time": [
      564.11,
      567.68
    ],
    "en": [
      "is incorrect because we manually configured it."
    ],
    "ru": [
      "неверно, потому что мы настроили его вручную."
    ]
  },
  {
    "time": [
      567.68,
      575.58
    ],
    "en": [
      "On a real Cisco device, this will say simply 1000 and full, without the A. Anyway, I’ll"
    ],
    "ru": [
      "На реальном устройстве Cisco это будет просто 1000 и полный, без A. В любом случае, я"
    ]
  },
  {
    "time": [
      575.58,
      579.01
    ],
    "en": [
      "type END to return to privileged exec mode."
    ],
    "ru": [
      "введите END, чтобы вернуться в привилегированный режим exec."
    ]
  },
  {
    "time": [
      579.01,
      581.42
    ],
    "en": [
      "Now let’s save the configuration."
    ],
    "ru": [
      "Теперь сохраним конфигурацию."
    ]
  },
  {
    "time": [
      581.42,
      583.59
    ],
    "en": [
      "This time, I’ll use WRITE MEMORY."
    ],
    "ru": [
      "На этот раз я буду использовать ЗАПИСЬ В ПАМЯТЬ."
    ]
  },
  {
    "time": [
      583.59,
      589.08
    ],
    "en": [
      "Okay, let’s check the startup-config. Show startup-config."
    ],
    "ru": [
      "Хорошо, давайте проверим конфигурацию запуска. Показать файл startup-config."
    ]
  },
  {
    "time": [
      589.08,
      593.52
    ],
    "en": [
      "Okay, you can see the changes we made to the interfaces here."
    ],
    "ru": [
      "Хорошо, здесь вы можете увидеть изменения, которые мы внесли в интерфейсы."
    ]
  },
  {
    "time": [
      593.52,
      603.08
    ],
    "en": [
      "Let’s go on to the last device, SW2….enable. Conf t. hostname SW2."
    ],
    "ru": [
      "Перейдем к последнему устройству, SW2… .enable. Конф т. имя хоста SW2."
    ]
  },
  {
    "time": [
      603.08,
      605.86
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
      605.86,
      608.7
    ],
    "en": [
      "Do show interfaces status."
    ],
    "ru": [
      "Показывать статус интерфейсов."
    ]
  },
  {
    "time": [
      608.7,
      611.99
    ],
    "en": [
      "As you can see, all the defaults again."
    ],
    "ru": [
      "Как видите, все снова по умолчанию."
    ]
  },
  {
    "time": [
      611.99,
      620.52
    ],
    "en": [
      "Now the configurations we will make are the same as for SW1, except SW2 has only one active gigabitethernet interface, G0/1."
    ],
    "ru": [
      "Теперь конфигурации, которые мы сделаем, такие же, как для SW1, за исключением того, что SW2 имеет только один активный интерфейс Gigabitethernet, G0 / 1."
    ]
  },
  {
    "time": [
      620.52,
      631.13
    ],
    "en": [
      "So, I’ll run through the configurations. Interface g0/1. Speed 1000. duplex full."
    ],
    "ru": [
      "Итак, я пробегу по настройкам. Интерфейс g0 / 1. Скорость 1000. дуплекс полный."
    ]
  },
  {
    "time": [
      631.13,
      637.83
    ],
    "en": [
      "DESCRIPTION ## to SW1 ##. interface range f0/1 – 2."
    ],
    "ru": [
      "ОПИСАНИЕ ## - SW1 ##. диапазон интерфейса f0 / 1 - 2."
    ]
  },
  {
    "time": [
      637.83,
      644.24
    ],
    "en": [
      "description ## to end hosts ##. Now, let’s shut down the other interfaces all at once."
    ],
    "ru": [
      "description ## для конечных хостов ##. А теперь давайте отключим все остальные интерфейсы сразу."
    ]
  },
  {
    "time": [
      644.24,
      650.14
    ],
    "en": [
      "Interface range g0/2, f0/3 – 24."
    ],
    "ru": [
      "Диапазон интерфейса g0 / 2, f0 / 3 - 24."
    ]
  },
  {
    "time": [
      650.14,
      655.3
    ],
    "en": [
      "description ## not in use ##. shutdown. Now let’s check."
    ],
    "ru": [
      "описание ## не используется ##. неисправность. А теперь проверим."
    ]
  },
  {
    "time": [
      655.3,
      658.34
    ],
    "en": [
      "Do show interfaces status."
    ],
    "ru": [
      "Показывать статус интерфейсов."
    ]
  },
  {
    "time": [
      658.34,
      663.93
    ],
    "en": [
      "Once again, notice the speed of a-1000 and duplex of a-full."
    ],
    "ru": [
      "Еще раз обратите внимание на скорость а-1000 и дуплекс на-фул."
    ]
  },
  {
    "time": [
      663.93,
      669.16
    ],
    "en": [
      "On a real Cisco device, this will be 1000 and full, without the A, because these settings"
    ],
    "ru": [
      "На реальном устройстве Cisco это будет 1000 и полный, без A, потому что эти настройки"
    ]
  },
  {
    "time": [
      669.16,
      672.02
    ],
    "en": [
      "were manually configured, not autonegotiated."
    ],
    "ru": [
      "были настроены вручную, без автосогласования."
    ]
  },
  {
    "time": [
      672.02,
      677.51
    ],
    "en": [
      "Finally, let’s save the configurations. END."
    ],
    "ru": [
      "Наконец, давайте сохраним конфигурации. КОНЕЦ."
    ]
  },
  {
    "time": [
      677.51,
      685.94
    ],
    "en": [
      "This time, I’ll just use ‘WRITE’ to save the configuration. Now let’s check. Show startup-config."
    ],
    "ru": [
      "На этот раз я просто использую «WRITE», чтобы сохранить конфигурацию. А теперь проверим. Показать файл startup-config."
    ]
  },
  {
    "time": [
      685.94,
      688.63
    ],
    "en": [
      "Looks like our configuration changes were applied."
    ],
    "ru": [
      "Похоже, наши изменения конфигурации были применены."
    ]
  },
  {
    "time": [
      688.63,
      692.24
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
      692.24,
      693.81
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
      693.81,
      697.73
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
      697.73,
      701.07
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
      701.07,
      703.92
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
      703.92,
      711.22
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
      711.22,
      711.22
    ],
    "en": [
      "That's all for now."
    ],
    "ru": [
      "На этом пока все."
    ]
  }
]