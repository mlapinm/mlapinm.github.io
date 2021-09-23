let objs = [
  {
    "time": [
      0.919,
      3.25
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
      3.25,
      6.509
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
      6.509,
      10.66
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
      10.66,
      16.75
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
      16.75,
      18.16
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
      18.16,
      21.539
    ],
    "en": [
      "So, today’s topic is another big one."
    ],
    "ru": [
      "Итак, сегодняшняя тема - еще одна большая тема."
    ]
  },
  {
    "time": [
      21.539,
      23.75
    ],
    "en": [
      "Today’s topic is VLANs."
    ],
    "ru": [
      "Сегодняшняя тема - VLAN."
    ]
  },
  {
    "time": [
      23.75,
      29.439
    ],
    "en": [
      "VLAN stands for Virtual LAN, Virtual Local Area Network."
    ],
    "ru": [
      "VLAN означает виртуальную локальную сеть, виртуальную локальную сеть."
    ]
  },
  {
    "time": [
      29.439,
      35.09
    ],
    "en": [
      "It’s very important that you understand VLANs well for your CCNA exam, and certainly"
    ],
    "ru": [
      "Очень важно, чтобы вы хорошо разбирались в виртуальных локальных сетях для сдачи экзамена CCNA, и, конечно же,"
    ]
  },
  {
    "time": [
      35.09,
      37.37
    ],
    "en": [
      "when working as a network engineer."
    ],
    "ru": [
      "при работе сетевым инженером."
    ]
  },
  {
    "time": [
      37.37,
      42.3
    ],
    "en": [
      "So, feel free to ask any questions if you don’t understand."
    ],
    "ru": [
      "Так что не стесняйтесь задавать любые вопросы, если вы не понимаете."
    ]
  },
  {
    "time": [
      42.3,
      45.92
    ],
    "en": [
      "Here are the topics we will cover in today’s video."
    ],
    "ru": [
      "Вот темы, которые мы рассмотрим в сегодняшнем видео."
    ]
  },
  {
    "time": [
      45.92,
      47.859
    ],
    "en": [
      "First, what is a LAN?"
    ],
    "ru": [
      "Во-первых, что такое локальная сеть?"
    ]
  },
  {
    "time": [
      47.859,
      54.57
    ],
    "en": [
      "We know it stands for Local Area Network, but I’ll give you a more specific definition."
    ],
    "ru": [
      "Мы знаем, что это сокращение от Local Area Network, но я дам вам более конкретное определение."
    ]
  },
  {
    "time": [
      54.57,
      61.079
    ],
    "en": [
      "To help understand LANs and VLANs, we will also look at broadcast domains."
    ],
    "ru": [
      "Чтобы лучше понять LAN и VLAN, мы также рассмотрим широковещательные домены."
    ]
  },
  {
    "time": [
      61.079,
      67.369
    ],
    "en": [
      "After looking at LANs and broadcast domains, I will introduce you to VLANs, virtual LANs."
    ],
    "ru": [
      "После изучения локальных сетей и широковещательных доменов я познакомлю вас с виртуальными локальными сетями и виртуальными локальными сетями."
    ]
  },
  {
    "time": [
      67.369,
      70.71000000000001
    ],
    "en": [
      "I will teach you the basics of VLANs, and their purpose."
    ],
    "ru": [
      "Я научу вас основам VLAN и их назначению."
    ]
  },
  {
    "time": [
      70.71000000000001,
      76.56
    ],
    "en": [
      "Finally, we will look at the basics of VLAN configuration on Cisco switches."
    ],
    "ru": [
      "Наконец, мы рассмотрим основы настройки VLAN на коммутаторах Cisco."
    ]
  },
  {
    "time": [
      76.56,
      82.119
    ],
    "en": [
      "By the way, this won’t be the only video on VLANs, the next video, Day 17, will also"
    ],
    "ru": [
      "Кстати, это не единственное видео о VLAN, следующее видео, День 17, также будет"
    ]
  },
  {
    "time": [
      82.119,
      87.979
    ],
    "en": [
      "be on VLANs, so this video will just cover the basics. Let’s get started."
    ],
    "ru": [
      "быть в сетях VLAN, поэтому в этом видео будут рассмотрены только основы. Давайте начнем."
    ]
  },
  {
    "time": [
      87.979,
      90.55
    ],
    "en": [
      "Let’s get started. So, what is a LAN?"
    ],
    "ru": [
      "Давайте начнем. Итак, что такое локальная сеть?"
    ]
  },
  {
    "time": [
      90.55,
      96.34
    ],
    "en": [
      "In a previous video, I said that a LAN is a group of devices (PCs, servers, routers,"
    ],
    "ru": [
      "В предыдущем видео я сказал, что ЛВС - это группа устройств (ПК, серверы, маршрутизаторы,"
    ]
  },
  {
    "time": [
      96.34,
      101.72
    ],
    "en": [
      "switches, etc.) in a single location, for example a home or office."
    ],
    "ru": [
      "переключатели и т. д.) в одном месте, например, дома или в офисе."
    ]
  },
  {
    "time": [
      101.72,
      109.24000000000001
    ],
    "en": [
      "Let’s take a look at a more specific definition: A LAN is a single broadcast domain."
    ],
    "ru": [
      "Давайте посмотрим на более конкретное определение: LAN - это единый широковещательный домен."
    ]
  },
  {
    "time": [
      109.24000000000001,
      114.249
    ],
    "en": [
      "A broadcast domain is the group of devices which will receive a broadcast frame (that"
    ],
    "ru": [
      "Широковещательный домен - это группа устройств, которая получит широковещательный фрейм (который"
    ]
  },
  {
    "time": [
      114.249,
      119.59
    ],
    "en": [
      "is, a frame with a destination MAC of all Fs) sent by any one of the members."
    ],
    "ru": [
      "Это кадр с MAC-адресом назначения из всех F), отправленный любым из участников."
    ]
  },
  {
    "time": [
      119.59,
      123.389
    ],
    "en": [
      "Let’s take a look at a diagram."
    ],
    "ru": [
      "Давайте посмотрим на схему."
    ]
  },
  {
    "time": [
      123.389,
      126.53
    ],
    "en": [
      "So, take a look at this network here."
    ],
    "ru": [
      "Итак, взгляните на эту сеть здесь."
    ]
  },
  {
    "time": [
      126.53,
      129.429
    ],
    "en": [
      "How many broadcast domains do you think there are?"
    ],
    "ru": [
      "Как вы думаете, сколько существует широковещательных доменов?"
    ]
  },
  {
    "time": [
      129.429,
      134.879
    ],
    "en": [
      "Remember, a broadcast domain includes all devices that will receive a broadcast frame."
    ],
    "ru": [
      "Помните, что широковещательный домен включает в себя все устройства, которые получат широковещательный кадр."
    ]
  },
  {
    "time": [
      134.879,
      141.5
    ],
    "en": [
      "So, let’s say PC1 sends a broadcast frame, and remember that a broadcast frame is a frame"
    ],
    "ru": [
      "Итак, допустим, ПК1 отправляет широковещательный кадр, и помните, что широковещательный кадр - это кадр"
    ]
  },
  {
    "time": [
      141.5,
      145.049
    ],
    "en": [
      "with a destination MAC Address of all Fs."
    ],
    "ru": [
      "с MAC-адресом назначения всех Fs."
    ]
  },
  {
    "time": [
      145.049,
      147.5
    ],
    "en": [
      "Which devices will receive the frame?"
    ],
    "ru": [
      "Какие устройства получат фрейм?"
    ]
  },
  {
    "time": [
      147.5,
      155.659
    ],
    "en": [
      "Well, this PC1 sends the frame out towards SW1, and what does a switch do with a broadcast frame?"
    ],
    "ru": [
      "Итак, этот ПК1 отправляет кадр к SW1, и что коммутатор делает с кадром широковещательной передачи?"
    ]
  },
  {
    "time": [
      155.659,
      159.599
    ],
    "en": [
      "frame? It floods it out all interfaces, except the one it was received on."
    ],
    "ru": [
      "Рамка? Он заполняет все интерфейсы, кроме того, на котором он был получен."
    ]
  },
  {
    "time": [
      159.599,
      164.269
    ],
    "en": [
      "So, the frame is sent to PC2 and R1."
    ],
    "ru": [
      "Итак, кадр отправляется на ПК2 и R1."
    ]
  },
  {
    "time": [
      164.269,
      167.0
    ],
    "en": [
      "What does a router do with a broadcast frame?"
    ],
    "ru": [
      "Что маршрутизатор делает с широковещательным фреймом?"
    ]
  },
  {
    "time": [
      167.0,
      168.439
    ],
    "en": [
      "It doesn’t forward it."
    ],
    "ru": [
      "Он его не пересылает."
    ]
  },
  {
    "time": [
      168.439,
      172.049
    ],
    "en": [
      "It will receive the frame, but it won’t send it to other networks."
    ],
    "ru": [
      "Он получит кадр, но не отправит его в другие сети."
    ]
  },
  {
    "time": [
      172.049,
      180.88
    ],
    "en": [
      "So, that means this is one broadcast domain, including PC1, PC2, SW1, and one of R1’s interfaces."
    ],
    "ru": [
      "Итак, это означает, что это один широковещательный домен, включающий ПК1, ПК2, SW1 и один из интерфейсов маршрутизатора R1."
    ]
  },
  {
    "time": [
      180.88,
      184.17
    ],
    "en": [
      "interfaces. So, that’s one broadcast domain."
    ],
    "ru": [
      "интерфейсы. Итак, это один широковещательный домен."
    ]
  },
  {
    "time": [
      184.17,
      186.129
    ],
    "en": [
      "How many are left?"
    ],
    "ru": [
      "Сколько осталось?"
    ]
  },
  {
    "time": [
      186.129,
      190.81
    ],
    "en": [
      "What if PC3 sends a broadcast frame, which devices will receive it?"
    ],
    "ru": [
      "Что, если ПК3 отправит широковещательный кадр, какие устройства его получат?"
    ]
  },
  {
    "time": [
      190.81,
      197.87
    ],
    "en": [
      "SW2 will receive the frame and flood it out of all interfaces, to R1, PC4, and PC5."
    ],
    "ru": [
      "SW2 получит фрейм и рассылает его со всех интерфейсов на R1, PC4 и PC5."
    ]
  },
  {
    "time": [
      197.87,
      201.23
    ],
    "en": [
      "R1, however, will not forward the broadcast frame."
    ],
    "ru": [
      "Однако R1 не будет пересылать широковещательный кадр."
    ]
  },
  {
    "time": [
      201.23,
      211.15
    ],
    "en": [
      "So, that’s the broadcast domain, PC3, PC4, PC5, SW2, and one of R1’s interfaces."
    ],
    "ru": [
      "Итак, это широковещательный домен, PC3, PC4, PC5, SW2 и один из интерфейсов R1."
    ]
  },
  {
    "time": [
      211.15,
      213.79
    ],
    "en": [
      "So far, we have found 2 broadcast domains."
    ],
    "ru": [
      "На данный момент мы нашли 2 широковещательных домена."
    ]
  },
  {
    "time": [
      213.79,
      220.56900000000002
    ],
    "en": [
      "Now, how about if PC6 sends a broadcast frame, which devices will receive it?"
    ],
    "ru": [
      "А как насчет того, чтобы ПК6 отправлял широковещательный кадр, какие устройства его получат?"
    ]
  },
  {
    "time": [
      220.56900000000002,
      225.95
    ],
    "en": [
      "When SW3 receives it, it will flood the frame to PC7, PC8, and R2."
    ],
    "ru": [
      "Когда SW3 получит его, он отправит фрейм на ПК7, ПК8 и R2."
    ]
  },
  {
    "time": [
      225.95,
      228.329
    ],
    "en": [
      "And R2 will not forward the frame."
    ],
    "ru": [
      "И R2 не будет пересылать фрейм."
    ]
  },
  {
    "time": [
      228.329,
      236.31900000000002
    ],
    "en": [
      "So, this is the broadcast domain, including PC6, 7,8, SW3, and one of R2’s interfaces."
    ],
    "ru": [
      "Итак, это широковещательный домен, включающий PC6, 7,8, SW3 и один из интерфейсов R2."
    ]
  },
  {
    "time": [
      236.31900000000002,
      240.64
    ],
    "en": [
      "So, we’ve found three broadcast domains so far."
    ],
    "ru": [
      "Итак, мы нашли три широковещательных домена."
    ]
  },
  {
    "time": [
      240.64,
      243.34
    ],
    "en": [
      "However, there is one more."
    ],
    "ru": [
      "Однако есть еще одно."
    ]
  },
  {
    "time": [
      243.34,
      248.62
    ],
    "en": [
      "What if R1 sends a broadcast frame out of its interface which is connected to R2?"
    ],
    "ru": [
      "Что, если R1 отправит широковещательный кадр из своего интерфейса, который подключен к R2?"
    ]
  },
  {
    "time": [
      248.62,
      251.319
    ],
    "en": [
      "It will be received only by R2."
    ],
    "ru": [
      "Его получит только R2."
    ]
  },
  {
    "time": [
      251.319,
      255.8
    ],
    "en": [
      "However, even though this is a connection with only two devices, it is still"
    ],
    "ru": [
      "Однако, несмотря на то, что это соединение только с двумя устройствами, оно по-прежнему"
    ]
  },
  {
    "time": [
      255.8,
      258.51
    ],
    "en": [
      "technically a broadcast domain."
    ],
    "ru": [
      "технически широковещательный домен."
    ]
  },
  {
    "time": [
      258.51,
      262.94
    ],
    "en": [
      "So, do you understand what a broadcast domain is now?"
    ],
    "ru": [
      "Итак, вы понимаете, что такое широковещательный домен сейчас?"
    ]
  },
  {
    "time": [
      262.94,
      268.2
    ],
    "en": [
      "A broadcast domain is the group of devices which will receive a broadcast frame (with a destination"
    ],
    "ru": [
      "Широковещательный домен - это группа устройств, которая получит широковещательный фрейм (с адресом"
    ]
  },
  {
    "time": [
      268.2,
      273.17
    ],
    "en": [
      "MAC address of all Fs) sent by any one of the members."
    ],
    "ru": [
      "MAC-адрес всех Fs), отправленных любым из участников."
    ]
  },
  {
    "time": [
      273.17,
      280.01
    ],
    "en": [
      "In this network here, there are four broadcast domains, and therefore four LANs."
    ],
    "ru": [
      "В этой сети четыре широковещательных домена и, следовательно, четыре LAN."
    ]
  },
  {
    "time": [
      280.01,
      282.19
    ],
    "en": [
      "Here is a small LAN of a company."
    ],
    "ru": [
      "Вот небольшой LAN компании."
    ]
  },
  {
    "time": [
      282.19,
      289.5
    ],
    "en": [
      "Let’s say there are three main departments in this office, engineering, sales, and human resources."
    ],
    "ru": [
      "Допустим, в этом офисе есть три основных отдела: инженерный, торговый и кадровый."
    ]
  },
  {
    "time": [
      289.5,
      296.39
    ],
    "en": [
      "resources. Also, the company is using the 192.168.1.0/24 network for this LAN."
    ],
    "ru": [
      "Ресурсы. Также компания использует сеть 192.168.1.0/24 для этой локальной сети."
    ]
  },
  {
    "time": [
      296.39,
      300.03
    ],
    "en": [
      "However, this isn’t necessarily the best setup."
    ],
    "ru": [
      "Однако это не обязательно лучший вариант."
    ]
  },
  {
    "time": [
      300.03,
      307.17
    ],
    "en": [
      "For both security and performance purposes, it would be best to split up these into separate subnets."
    ],
    "ru": [
      "Как с точки зрения безопасности, так и с точки зрения производительности, лучше всего разделить их на отдельные подсети."
    ]
  },
  {
    "time": [
      307.17,
      312.61
    ],
    "en": [
      "subnets. For example let’s say a PC in the engineering department sends a broadcast message intended for other"
    ],
    "ru": [
      "подсети. Например, скажем, компьютер в инженерном отделе отправляет широковещательное сообщение, предназначенное для других"
    ]
  },
  {
    "time": [
      312.61,
      314.47
    ],
    "en": [
      "PCs in the engineering department."
    ],
    "ru": [
      "ПК в инженерном отделе."
    ]
  },
  {
    "time": [
      314.47,
      320.08
    ],
    "en": [
      "Since it’s a broadcast message, the switch will flood it out of all interfaces."
    ],
    "ru": [
      "Поскольку это широковещательное сообщение, коммутатор перенаправит его со всех интерфейсов."
    ]
  },
  {
    "time": [
      320.08,
      326.19
    ],
    "en": [
      "So, not only will the PCs in the engineering department receive the broadcast, ALL PCs,"
    ],
    "ru": [
      "Таким образом, трансляцию будут получать не только ПК в инженерном отделе, но и ВСЕ ПК,"
    ]
  },
  {
    "time": [
      326.19,
      329.55
    ],
    "en": [
      "as well as the router, will receive the broadcast."
    ],
    "ru": [
      "так же, как и маршрутизатор, получит широковещательную передачу."
    ]
  },
  {
    "time": [
      329.55,
      334.47
    ],
    "en": [
      "This is a problem, for both security and network performance purposes."
    ],
    "ru": [
      "Это проблема как с точки зрения безопасности, так и с точки зрения производительности сети."
    ]
  },
  {
    "time": [
      334.47,
      340.90999999999997
    ],
    "en": [
      "When it comes to performance, lots of unnecessary broadcast traffic can reduce network performance."
    ],
    "ru": [
      "Когда дело доходит до производительности, большой объем ненужного широковещательного трафика может снизить производительность сети."
    ]
  },
  {
    "time": [
      340.90999999999997,
      344.84000000000003
    ],
    "en": [
      "Whether it’s a broadcast from one end host, or a switch that doesn’t know how to reach the"
    ],
    "ru": [
      "Будь то трансляция от одного конечного хоста или коммутатор, который не знает, как связаться с"
    ]
  },
  {
    "time": [
      344.84000000000003,
      352.33
    ],
    "en": [
      "destination MAC address so it floods the frame, we should minimize unnecessary traffic in our network."
    ],
    "ru": [
      "MAC-адрес назначения, чтобы он переполнял фрейм, мы должны минимизировать ненужный трафик в нашей сети."
    ]
  },
  {
    "time": [
      352.33,
      358.88
    ],
    "en": [
      "our network. As for security, Even within the same office, you want to limit who has access to what."
    ],
    "ru": [
      "наша сеть. Что касается безопасности, даже в одном офисе вы хотите ограничить, кто к чему имеет доступ."
    ]
  },
  {
    "time": [
      358.88,
      363.44
    ],
    "en": [
      "You can apply security policies on a router or firewall."
    ],
    "ru": [
      "Вы можете применять политики безопасности к маршрутизатору или брандмауэру."
    ]
  },
  {
    "time": [
      363.44,
      369.31
    ],
    "en": [
      "Because this is one LAN, PCs can reach each other directly, without traffic passing through the router."
    ],
    "ru": [
      "Поскольку это одна локальная сеть, компьютеры могут связываться друг с другом напрямую, без прохождения трафика через маршрутизатор."
    ]
  },
  {
    "time": [
      369.31,
      375.05
    ],
    "en": [
      "the router. So, even if you configure security policies on the router, they won’t have any effect."
    ],
    "ru": [
      "роутер. Таким образом, даже если вы настроите политики безопасности на маршрутизаторе, они не будут иметь никакого эффекта."
    ]
  },
  {
    "time": [
      375.05,
      379.38
    ],
    "en": [
      "We should separate these hosts so we can apply security policies that determine who can access"
    ],
    "ru": [
      "Мы должны разделить эти хосты, чтобы мы могли применять политики безопасности, определяющие, кто может получить доступ"
    ]
  },
  {
    "time": [
      379.38,
      381.13
    ],
    "en": [
      "what in the network."
    ],
    "ru": [
      "что в сети."
    ]
  },
  {
    "time": [
      381.13,
      385.8
    ],
    "en": [
      "So, let’s split up these departments into separate subnets."
    ],
    "ru": [
      "Итак, давайте разделим эти отделы на отдельные подсети."
    ]
  },
  {
    "time": [
      385.8,
      397.1
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
      385.8,
      397.1
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
      397.1,
      401.8
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
      397.1,
      401.8
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
      401.8,
      405.11
    ],
    "en": [
      "However, there’s one problem."
    ],
    "ru": [
      "Однако есть одна проблема."
    ]
  },
  {
    "time": [
      405.11,
      411.22
    ],
    "en": [
      "The router is going to need an IP address in each subnet, so it will need one interface in each subnet."
    ],
    "ru": [
      "Маршрутизатору потребуется IP-адрес в каждой подсети, поэтому ему потребуется один интерфейс в каждой подсети."
    ]
  },
  {
    "time": [
      411.22,
      416.37
    ],
    "en": [
      "in each subnet. So, let’s replace this single connection between the switch and router with three separate"
    ],
    "ru": [
      "в каждой подсети. Итак, давайте заменим это единственное соединение между коммутатором и маршрутизатором тремя отдельными"
    ]
  },
  {
    "time": [
      416.37,
      419.54
    ],
    "en": [
      "connections, one in each subnet."
    ],
    "ru": [
      "подключения, по одному в каждой подсети."
    ]
  },
  {
    "time": [
      419.54,
      423.82
    ],
    "en": [
      "Actually, there is a more efficient way of doing this, you don’t actually have to use"
    ],
    "ru": [
      "На самом деле, есть более эффективный способ сделать это, на самом деле вам не нужно использовать"
    ]
  },
  {
    "time": [
      423.82,
      430.13
    ],
    "en": [
      "three separate interfaces, but don’t worry about that for now, I will cover that in a future video."
    ],
    "ru": [
      "три отдельных интерфейса, но пока не беспокойтесь об этом, я расскажу об этом в следующем видео."
    ]
  },
  {
    "time": [
      430.13,
      433.45
    ],
    "en": [
      "future video. So, you may think the problem is solved now."
    ],
    "ru": [
      "будущее видео. Итак, вы можете подумать, что проблема решена."
    ]
  },
  {
    "time": [
      433.45,
      440.97
    ],
    "en": [
      "Let’s say this PC in the ENGINEERING department has an IP address of 192.168.1.1, and this"
    ],
    "ru": [
      "Допустим, у этого ПК в ИНЖЕНЕРНОМ отделе IP-адрес 192.168.1.1, а этот"
    ]
  },
  {
    "time": [
      440.97,
      447.93
    ],
    "en": [
      "PC in the SALES department has an IP address of 192.168.1.129."
    ],
    "ru": [
      "ПК в отделе ПРОДАЖ имеет IP-адрес 192.168.1.129."
    ]
  },
  {
    "time": [
      447.93,
      454.25
    ],
    "en": [
      "If PC1 sends some data to PC2, PC1 will recognize that PC2 is in a different subnet than its"
    ],
    "ru": [
      "Если ПК1 отправляет некоторые данные на ПК2, ПК1 распознает, что ПК2 находится в другой подсети, чем его"
    ]
  },
  {
    "time": [
      454.25,
      460.69
    ],
    "en": [
      "own, so it will set the destination MAC address to its default gateway, R1."
    ],
    "ru": [
      "own, поэтому он установит MAC-адрес назначения на свой шлюз по умолчанию, R1."
    ]
  },
  {
    "time": [
      460.69,
      468.19
    ],
    "en": [
      "This is what the frame will look like, Source IP of PC1, destination IP of PC2, source MAC"
    ],
    "ru": [
      "Вот как будет выглядеть кадр: исходный IP-адрес ПК1, целевой IP-адрес ПК2, исходный MAC-адрес"
    ]
  },
  {
    "time": [
      468.19,
      471.96
    ],
    "en": [
      "of PC1, and destination MAC of R1."
    ],
    "ru": [
      "ПК1 и MAC-адрес назначения R1."
    ]
  },
  {
    "time": [
      471.96,
      477.71
    ],
    "en": [
      "PC1 will forward the frame to the switch, which will send it to R1, which will then"
    ],
    "ru": [
      "ПК1 перешлет кадр коммутатору, который отправит его на маршрутизатор R1, который затем"
    ]
  },
  {
    "time": [
      477.71,
      483.33
    ],
    "en": [
      "change the source MAC to its own MAC, and the destination MAC to PC2’s MAC."
    ],
    "ru": [
      "измените MAC-адрес источника на его собственный MAC, а MAC-адрес назначения на MAC-адрес ПК2."
    ]
  },
  {
    "time": [
      483.33,
      489.36
    ],
    "en": [
      "It will then forward the frame back to the switch, which will then forward it to the destination, PC2."
    ],
    "ru": [
      "Затем он пересылает кадр обратно коммутатору, который затем пересылает его в пункт назначения, ПК2."
    ]
  },
  {
    "time": [
      489.36,
      495.37
    ],
    "en": [
      "PC2. Okay, so instead of PC1 being able to send traffic directly to PC2, we forced it to send"
    ],
    "ru": [
      "ПК2. Хорошо, поэтому вместо того, чтобы ПК1 мог отправлять трафик напрямую на ПК2, мы заставили его отправлять"
    ]
  },
  {
    "time": [
      495.37,
      500.06
    ],
    "en": [
      "the traffic through R1 first, where we would have configured some security policies and"
    ],
    "ru": [
      "трафик через R1 сначала, где мы бы настроили некоторые политики безопасности и"
    ]
  },
  {
    "time": [
      500.06,
      504.97
    ],
    "en": [
      "such to control exactly what traffic is allowed to pass between these subnets."
    ],
    "ru": [
      "чтобы точно контролировать, какой трафик разрешен для передачи между этими подсетями."
    ]
  },
  {
    "time": [
      504.97,
      509.78
    ],
    "en": [
      "However, there is still a problem. Here’s the problem."
    ],
    "ru": [
      "Однако проблема все еще существует. Вот в чем проблема."
    ]
  },
  {
    "time": [
      509.78,
      513.879
    ],
    "en": [
      "Here’s the problem. What if the frame is a broadcast or unknown unicast frame?"
    ],
    "ru": [
      "Вот в чем проблема. Что, если кадр является широковещательным или неизвестным одноадресным кадром?"
    ]
  },
  {
    "time": [
      513.879,
      517.729
    ],
    "en": [
      "The switch will flood the frame out of all interfaces."
    ],
    "ru": [
      "Коммутатор вытолкнет фрейм из всех интерфейсов."
    ]
  },
  {
    "time": [
      517.729,
      520.689
    ],
    "en": [
      "For example, here’s a broadcast frame."
    ],
    "ru": [
      "Например, вот кадр трансляции."
    ]
  },
  {
    "time": [
      520.689,
      527.91
    ],
    "en": [
      "The source IP is PC1’s IP, and the destination IP is its subnet’s broadcast address."
    ],
    "ru": [
      "Исходный IP-адрес - это IP-адрес ПК1, а целевой IP-адрес - широковещательный адрес его подсети."
    ]
  },
  {
    "time": [
      527.91,
      532.94
    ],
    "en": [
      "So, this is a broadcast frame intended to the engineering department."
    ],
    "ru": [
      "Итак, это широковещательный кадр, предназначенный для инженерного отдела."
    ]
  },
  {
    "time": [
      532.94,
      539.67
    ],
    "en": [
      "The source MAC is PC1’s, and the destination is the broadcast MAC address of all F’s."
    ],
    "ru": [
      "MAC-адрес источника - это ПК1, а получатель - широковещательный MAC-адрес всех F."
    ]
  },
  {
    "time": [
      539.67,
      540.87
    ],
    "en": [
      "Where is the problem?"
    ],
    "ru": [
      "В чем проблема?"
    ]
  },
  {
    "time": [
      540.87,
      545.92
    ],
    "en": [
      "Well, remember that a switch is only aware up to Layer 2."
    ],
    "ru": [
      "Что ж, помните, что коммутатор осведомлен только до уровня 2."
    ]
  },
  {
    "time": [
      545.92,
      551.49
    ],
    "en": [
      "It looks at Layer 2 information like source and destination MAC addresses only. It doesn’t"
    ],
    "ru": [
      "Он смотрит только на информацию уровня 2, такую ​​как MAC-адреса источника и назначения. Это не"
    ]
  },
  {
    "time": [
      551.49,
      554.05
    ],
    "en": [
      "care about Layer 3, 4, etc."
    ],
    "ru": [
      "заботиться о слоях 3, 4 и т. д."
    ]
  },
  {
    "time": [
      554.05,
      559.85
    ],
    "en": [
      "So, even though there are three separate subnets here the switch doesn’t know that."
    ],
    "ru": [
      "Таким образом, даже несмотря на то, что здесь три отдельные подсети, коммутатор этого не знает."
    ]
  },
  {
    "time": [
      559.85,
      564.62
    ],
    "en": [
      "PC1 will send the frame to the switch, it will see the destination MAC address of all"
    ],
    "ru": [
      "ПК1 отправит кадр на коммутатор, он увидит MAC-адрес назначения всех"
    ]
  },
  {
    "time": [
      564.62,
      566.92
    ],
    "en": [
      "Fs, and then flood the frame."
    ],
    "ru": [
      "Fs, а потом заливать фрейм."
    ]
  },
  {
    "time": [
      566.92,
      572.649
    ],
    "en": [
      "I’ll say it again, this is bad in terms of both network performance and security."
    ],
    "ru": [
      "Повторюсь, это плохо как с точки зрения производительности сети, так и с точки зрения безопасности."
    ]
  },
  {
    "time": [
      572.649,
      578.649
    ],
    "en": [
      "So, I’ve shown you that although we separated the three departments into three subnets,"
    ],
    "ru": [
      "Итак, я показал вам, что, хотя мы разделили три отдела на три подсети,"
    ]
  },
  {
    "time": [
      578.649,
      583.8389999999999
    ],
    "en": [
      "meaning they are separated at Layer 3, they are still in the same broadcast domain, the"
    ],
    "ru": [
      "это означает, что они разделены на уровне 3, они все еще находятся в том же широковещательном домене,"
    ]
  },
  {
    "time": [
      583.8389999999999,
      586.87
    ],
    "en": [
      "same Layer 2 network, or the same LAN."
    ],
    "ru": [
      "та же сеть уровня 2 или та же локальная сеть."
    ]
  },
  {
    "time": [
      586.87,
      592.22
    ],
    "en": [
      "Now, one possible solution is to buy a separate switch for each department."
    ],
    "ru": [
      "Теперь одно из возможных решений - купить отдельный коммутатор для каждого отдела."
    ]
  },
  {
    "time": [
      592.22,
      597.779
    ],
    "en": [
      "However, that is not very flexible, and network equipment isn’t cheap, so buying one or"
    ],
    "ru": [
      "Однако это не очень гибко, а сетевое оборудование стоит недешево, поэтому покупая одно или"
    ]
  },
  {
    "time": [
      597.779,
      603.93
    ],
    "en": [
      "more switches for every single department could be too expensive, especially for a small enterprise."
    ],
    "ru": [
      "больше коммутаторов для каждого отдельного отдела может оказаться слишком дорогим, особенно для небольшого предприятия."
    ]
  },
  {
    "time": [
      603.93,
      607.48
    ],
    "en": [
      "enterprise. However, this is where VLANs come in."
    ],
    "ru": [
      "предприятие. Однако именно здесь на помощь приходят виртуальные локальные сети."
    ]
  },
  {
    "time": [
      607.48,
      613.81
    ],
    "en": [
      "Although these PCs are all in the same LAN, Local Area Network, we can use VLANs, or Virtual"
    ],
    "ru": [
      "Хотя все эти ПК находятся в одной локальной сети, локальной сети, мы можем использовать виртуальные локальные сети или виртуальные сети."
    ]
  },
  {
    "time": [
      613.81,
      617.579
    ],
    "en": [
      "Local Area Networks, to separate them at Layer 2."
    ],
    "ru": [
      "Локальные сети, чтобы разделить их на уровне 2."
    ]
  },
  {
    "time": [
      617.579,
      625.72
    ],
    "en": [
      "We’ll assign the ENGINEERING department to VLAN10, the HR department to VLAN20, and"
    ],
    "ru": [
      "Мы назначим инженерный отдел VLAN10, отдел кадров - VLAN20, а"
    ]
  },
  {
    "time": [
      625.72,
      629.139
    ],
    "en": [
      "the SALES department to VLAN30."
    ],
    "ru": [
      "отдел ПРОДАЖ до VLAN30."
    ]
  },
  {
    "time": [
      629.139,
      632.35
    ],
    "en": [
      "How exactly to we assign these hosts to VLANs?"
    ],
    "ru": [
      "Как именно назначить эти хосты VLAN?"
    ]
  },
  {
    "time": [
      632.35,
      634.819
    ],
    "en": [
      "We configure them on the switch."
    ],
    "ru": [
      "Настраиваем их на свитче."
    ]
  },
  {
    "time": [
      634.819,
      638.249
    ],
    "en": [
      "More specifically, on the switch interfaces."
    ],
    "ru": [
      "Точнее, об интерфейсах коммутатора."
    ]
  },
  {
    "time": [
      638.249,
      643.279
    ],
    "en": [
      "You configure the switch interface to be in a specific VLAN, and then the end host connected"
    ],
    "ru": [
      "Вы настраиваете интерфейс коммутатора так, чтобы он находился в определенной VLAN, а затем подключался конечный хост."
    ]
  },
  {
    "time": [
      643.279,
      646.68
    ],
    "en": [
      "to that interface is part of that VLAN."
    ],
    "ru": [
      "к этому интерфейсу является частью этой VLAN."
    ]
  },
  {
    "time": [
      646.68,
      651.68
    ],
    "en": [
      "The switch will consider each VLAN as a separate LAN, and will not forward traffic between"
    ],
    "ru": [
      "Коммутатор будет рассматривать каждую VLAN как отдельную LAN и не будет пересылать трафик между"
    ]
  },
  {
    "time": [
      651.68,
      656.16
    ],
    "en": [
      "VLANs, including broadcast or unknown unicast traffic."
    ],
    "ru": [
      "VLAN, включая широковещательный или неизвестный одноадресный трафик."
    ]
  },
  {
    "time": [
      656.16,
      662.439
    ],
    "en": [
      "So, if we have set up these VLANs, if PC1 sends this same broadcast frame, after the"
    ],
    "ru": [
      "Итак, если мы настроили эти VLAN, если ПК1 отправляет тот же широковещательный кадр после"
    ]
  },
  {
    "time": [
      662.439,
      668.82
    ],
    "en": [
      "frame arrives at the switch, it will be forwarded to all interfaces IN THE SAME VLAN."
    ],
    "ru": [
      "фрейм поступает на коммутатор, он будет перенаправлен на все интерфейсы В ОДНОЙ VLAN."
    ]
  },
  {
    "time": [
      668.82,
      673.56
    ],
    "en": [
      "Because the broadcast arrived on an interface configured in VLAN10, the switch will only"
    ],
    "ru": [
      "Поскольку широковещательная рассылка прибыла на интерфейс, настроенный в VLAN10, коммутатор будет только"
    ]
  },
  {
    "time": [
      673.56,
      677.949
    ],
    "en": [
      "forward the frame to other interfaces in VLAN10."
    ],
    "ru": [
      "перенаправить кадр на другие интерфейсы в VLAN10."
    ]
  },
  {
    "time": [
      677.949,
      684.5
    ],
    "en": [
      "If PC1 wants sends this same unicast frame to PC2, it will function just like before."
    ],
    "ru": [
      "Если ПК1 хочет отправить этот же одноадресный кадр на ПК2, он будет работать так же, как и раньше."
    ]
  },
  {
    "time": [
      684.5,
      689.29
    ],
    "en": [
      "It sends it to the switch, which sends it to the router, which changes the source and"
    ],
    "ru": [
      "Он отправляет его на коммутатор, который отправляет его на маршрутизатор, который меняет источник и"
    ]
  },
  {
    "time": [
      689.29,
      695.87
    ],
    "en": [
      "destination MAC addresses, and sends it back to the switch, which sends it to the destination."
    ],
    "ru": [
      "MAC-адреса назначения, и отправляет их обратно коммутатору, который отправляет их в пункт назначения."
    ]
  },
  {
    "time": [
      695.87,
      699.29
    ],
    "en": [
      "Notice that the router is used to route between VLANs."
    ],
    "ru": [
      "Обратите внимание, что маршрутизатор используется для маршрутизации между сетями VLAN."
    ]
  },
  {
    "time": [
      699.29,
      702.55
    ],
    "en": [
      "The switch does not perform this 'inter-VLAN routing'."
    ],
    "ru": [
      "Коммутатор не выполняет эту «маршрутизацию между VLAN»."
    ]
  },
  {
    "time": [
      702.55,
      706.14
    ],
    "en": [
      "It must send the traffic through the router."
    ],
    "ru": [
      "Он должен отправлять трафик через маршрутизатор."
    ]
  },
  {
    "time": [
      706.14,
      713.08
    ],
    "en": [
      "Notice, traffic arrives on a VLAN10 interface is forwarded out of a VLAN10 interface."
    ],
    "ru": [
      "Обратите внимание, что трафик, поступающий на интерфейс VLAN10, перенаправляется из интерфейса VLAN10."
    ]
  },
  {
    "time": [
      713.08,
      722.04
    ],
    "en": [
      "Also, traffic that arrives on a VLAN30 interface is forwarded out of a VLAN30 interface. Both in the same VLAN."
    ],
    "ru": [
      "Кроме того, трафик, поступающий на интерфейс VLAN30, перенаправляется из интерфейса VLAN30. Оба в одной VLAN."
    ]
  },
  {
    "time": [
      722.04,
      726.1
    ],
    "en": [
      "A switch will never forward traffic directly between two VLANs like this."
    ],
    "ru": [
      "Коммутатор никогда не будет пересылать трафик напрямую между двумя такими виртуальными локальными сетями."
    ]
  },
  {
    "time": [
      726.1,
      731.889
    ],
    "en": [
      "Well, first of all, the two hosts are in separate subnets, so PC1 itself will send the traffic"
    ],
    "ru": [
      "Во-первых, два хоста находятся в разных подсетях, поэтому ПК1 сам будет отправлять трафик."
    ]
  },
  {
    "time": [
      731.889,
      734.839
    ],
    "en": [
      "to its default gateway, R1."
    ],
    "ru": [
      "на свой шлюз по умолчанию, R1."
    ]
  },
  {
    "time": [
      734.839,
      740.11
    ],
    "en": [
      "However, even if PC1 and PC2 were in the same subnet, the switch wouldn’t forward the"
    ],
    "ru": [
      "Однако, даже если ПК1 и ПК2 находятся в одной подсети, коммутатор не будет пересылать"
    ]
  },
  {
    "time": [
      740.11,
      746.319
    ],
    "en": [
      "traffic from PC1 to PC2, because they are in separate VLANs."
    ],
    "ru": [
      "трафик с ПК1 на ПК2, потому что они находятся в разных VLAN."
    ]
  },
  {
    "time": [
      746.319,
      747.61
    ],
    "en": [
      "Just a bit of review."
    ],
    "ru": [
      "Немного обзора."
    ]
  },
  {
    "time": [
      747.61,
      752.99
    ],
    "en": [
      "VLANs are configured on switches on a per-interface basis."
    ],
    "ru": [
      "VLAN настраиваются на коммутаторах для каждого интерфейса."
    ]
  },
  {
    "time": [
      752.99,
      756.94
    ],
    "en": [
      "VLANs logically separate end hosts at Layer 2."
    ],
    "ru": [
      "VLAN логически разделяют конечные хосты на уровне 2."
    ]
  },
  {
    "time": [
      756.94,
      761.189
    ],
    "en": [
      "Although the hosts in the topology we looked at were physically connected to the same switch,"
    ],
    "ru": [
      "Хотя хосты в рассматриваемой нами топологии были физически подключены к одному и тому же коммутатору,"
    ]
  },
  {
    "time": [
      761.189,
      766.3
    ],
    "en": [
      "and therefore in the same broadcast domain, we used VLANs to logically separate them,"
    ],
    "ru": [
      "и поэтому в том же широковещательном домене мы использовали VLAN для их логического разделения,"
    ]
  },
  {
    "time": [
      766.3,
      769.93
    ],
    "en": [
      "and put them in separate broadcast domains."
    ],
    "ru": [
      "и поместите их в отдельные широковещательные домены."
    ]
  },
  {
    "time": [
      769.93,
      774.3389999999999
    ],
    "en": [
      "Switches do not forward traffic directly between hosts in different VLANs."
    ],
    "ru": [
      "Коммутаторы не пересылают трафик напрямую между хостами в разных VLAN."
    ]
  },
  {
    "time": [
      774.3389999999999,
      778.279
    ],
    "en": [
      "As I showed you, the switch must forward the traffic to a router."
    ],
    "ru": [
      "Как я показал вам, коммутатор должен перенаправлять трафик на маршрутизатор."
    ]
  },
  {
    "time": [
      778.279,
      783.189
    ],
    "en": [
      "Actually, there are a couple other methods of inter-VLAN routing, and I will cover them"
    ],
    "ru": [
      "На самом деле, есть еще пара методов маршрутизации между VLAN, и я расскажу о них."
    ]
  },
  {
    "time": [
      783.189,
      784.91
    ],
    "en": [
      "in a future video."
    ],
    "ru": [
      "в будущем видео."
    ]
  },
  {
    "time": [
      784.91,
      789.55
    ],
    "en": [
      "Finally, let’s take a look at basic VLAN configuration."
    ],
    "ru": [
      "Наконец, давайте взглянем на базовую конфигурацию VLAN."
    ]
  },
  {
    "time": [
      789.55,
      798.14
    ],
    "en": [
      "I’ve added the interface numbers to the diagram, interfaces in VLAN10 are G1/0 through"
    ],
    "ru": [
      "Я добавил номера интерфейсов на диаграмму, интерфейсы в VLAN10 - от G1 / 0 до"
    ]
  },
  {
    "time": [
      798.14,
      809.12
    ],
    "en": [
      "G1/3. Interfaces in VLAN2 are G2/0 through G2/2. And interfaces in VLAN30 are G3/0 through G3/3."
    ],
    "ru": [
      "G1 / 3. Интерфейсы в VLAN2 - от G2 / 0 до G2 / 2. А интерфейсы в VLAN30 - от G3 / 0 до G3 / 3."
    ]
  },
  {
    "time": [
      809.12,
      815.0
    ],
    "en": [
      "G3/3. Let’s go into the CLI and put these interfaces into the proper VLANs."
    ],
    "ru": [
      "G3 / 3. Давайте перейдем к интерфейсу командной строки и поместим эти интерфейсы в соответствующие сети VLAN."
    ]
  },
  {
    "time": [
      815.0,
      820.5889999999999
    ],
    "en": [
      "Before configuration, lets look at the VLANs that exist by default on a switch."
    ],
    "ru": [
      "Перед настройкой давайте посмотрим на VLAN, которые существуют по умолчанию на коммутаторе."
    ]
  },
  {
    "time": [
      820.5889999999999,
      825.059
    ],
    "en": [
      "In this output, you can see I used the command SHOW VLAN BRIEF."
    ],
    "ru": [
      "В этих выходных данных вы можете видеть, что я использовал команду SHOW VLAN BRIEF."
    ]
  },
  {
    "time": [
      825.059,
      830.16
    ],
    "en": [
      "It displays the VLANs that exist on the switch, and which interfaces are in each VLAN."
    ],
    "ru": [
      "Он отображает сети VLAN, существующие на коммутаторе, и интерфейсы в каждой VLAN."
    ]
  },
  {
    "time": [
      830.16,
      834.769
    ],
    "en": [
      "Here, you can see VLAN1, with the name DEFAULT."
    ],
    "ru": [
      "Здесь вы можете увидеть VLAN1 с именем DEFAULT."
    ]
  },
  {
    "time": [
      834.769,
      838.14
    ],
    "en": [
      "This is the VLAN that all interfaces are assigned to by default."
    ],
    "ru": [
      "Это VLAN, которой по умолчанию назначены все интерфейсы."
    ]
  },
  {
    "time": [
      838.14,
      844.82
    ],
    "en": [
      "So, even if you don’t configure any VLANs, all interfaces are in VLAN1 by default."
    ],
    "ru": [
      "Таким образом, даже если вы не настраиваете какие-либо сети VLAN, все интерфейсы по умолчанию находятся в сети VLAN1."
    ]
  },
  {
    "time": [
      844.82,
      852.1
    ],
    "en": [
      "Under ports you can see all of the interfaces on this device, from G0/0 to G3/3."
    ],
    "ru": [
      "Под портами вы можете увидеть все интерфейсы на этом устройстве, от G0 / 0 до G3 / 3."
    ]
  },
  {
    "time": [
      852.1,
      858.91
    ],
    "en": [
      "Under it are four other VLANs, 1002 to 1005, used for FDDI and token ring."
    ],
    "ru": [
      "Под ним находятся четыре другие сети VLAN, с 1002 по 1005, используемые для FDDI и Token Ring."
    ]
  },
  {
    "time": [
      858.91,
      863.41
    ],
    "en": [
      "These are old technologies that you don’t need to know for the CCNA, but feel free to"
    ],
    "ru": [
      "Это старые технологии, которые вам не нужно знать для CCNA, но вы можете"
    ]
  },
  {
    "time": [
      863.41,
      865.529
    ],
    "en": [
      "google them if you’re curious."
    ],
    "ru": [
      "погуглите их, если вам интересно."
    ]
  },
  {
    "time": [
      865.529,
      874.579
    ],
    "en": [
      "VLANS 1 and 1002-1005 exist by default and cannot be deleted, remember that!"
    ],
    "ru": [
      "VLANS 1 и 1002-1005 существуют по умолчанию и не могут быть удалены, помните об этом!"
    ]
  },
  {
    "time": [
      874.579,
      877.43
    ],
    "en": [
      "This is how you assign interfaces to a VLAN."
    ],
    "ru": [
      "Вот как вы назначаете интерфейсы VLAN."
    ]
  },
  {
    "time": [
      877.43,
      885.05
    ],
    "en": [
      "First, I used the interface range command to configure all of the VLAN 10 interfaces at once."
    ],
    "ru": [
      "Во-первых, я использовал команду interface range для одновременной настройки всех интерфейсов VLAN 10."
    ]
  },
  {
    "time": [
      885.05,
      891.07
    ],
    "en": [
      "at once. Use the SWITCHPORT MODE ACCESS command to set the interface as an access port."
    ],
    "ru": [
      "однажды. Используйте команду SWITCHPORT MODE ACCESS, чтобы установить интерфейс как порт доступа."
    ]
  },
  {
    "time": [
      891.07,
      893.16
    ],
    "en": [
      "What is an access port?"
    ],
    "ru": [
      "Что такое порт доступа?"
    ]
  },
  {
    "time": [
      893.16,
      897.84
    ],
    "en": [
      "An access port is a switchport which belongs to a single VLAN, and usually connects to"
    ],
    "ru": [
      "Порт доступа - это порт коммутатора, который принадлежит одной VLAN и обычно подключается к"
    ]
  },
  {
    "time": [
      897.84,
      900.2
    ],
    "en": [
      "end hosts like PCs."
    ],
    "ru": [
      "конечные хосты, такие как ПК."
    ]
  },
  {
    "time": [
      900.2,
      906.1
    ],
    "en": [
      "That’s why it’s called an ACCESS port, it gives the end hosts ACCESS to the network."
    ],
    "ru": [
      "Вот почему он называется портом ДОСТУПА, он дает конечным хостам ДОСТУП к сети."
    ]
  },
  {
    "time": [
      906.1,
      910.64
    ],
    "en": [
      "There is another important type of switchport called a trunk port."
    ],
    "ru": [
      "Существует еще один важный тип порта коммутатора, называемый магистральным портом."
    ]
  },
  {
    "time": [
      910.64,
      914.74
    ],
    "en": [
      "Switchports which carry multiple VLANs are called ‘trunk ports’."
    ],
    "ru": [
      "Порты коммутатора, которые передают несколько сетей VLAN, называются «магистральными портами»."
    ]
  },
  {
    "time": [
      914.74,
      919.79
    ],
    "en": [
      "I will cover trunk ports in depth in the next video, but for today’s video we will focus"
    ],
    "ru": [
      "Я подробно расскажу о портах магистрали в следующем видео, а в сегодняшнем видео мы сосредоточимся"
    ]
  },
  {
    "time": [
      919.79,
      924.129
    ],
    "en": [
      "only on access ports, and take it step-by-step."
    ],
    "ru": [
      "только на портах доступа, и делайте это постепенно."
    ]
  },
  {
    "time": [
      924.129,
      929.579
    ],
    "en": [
      "A switchport connected to an end host should enter access mode by default, however it’s"
    ],
    "ru": [
      "Порт коммутатора, подключенный к конечному хосту, должен перейти в режим доступа по умолчанию, однако он"
    ]
  },
  {
    "time": [
      929.579,
      936.36
    ],
    "en": [
      "always a good idea to explicitly configure the setting and not rely on autonegotiation of port type."
    ],
    "ru": [
      "Всегда рекомендуется явно настраивать параметр и не полагаться на автосогласование типа порта."
    ]
  },
  {
    "time": [
      936.36,
      944.84
    ],
    "en": [
      "of port type. Anyway, the last command after SWITCHPORT MODE ACCESS is SWITCHPORT ACCESS VLAN 10."
    ],
    "ru": [
      "портового типа. В любом случае, последняя команда после SWITCHPORT MODE ACCESS - это SWITCHPORT ACCESS VLAN 10."
    ]
  },
  {
    "time": [
      944.84,
      949.16
    ],
    "en": [
      "This is the command that actually assigns the VLAN to the port."
    ],
    "ru": [
      "Это команда, которая фактически назначает VLAN порту."
    ]
  },
  {
    "time": [
      949.16,
      952.499
    ],
    "en": [
      "Notice the message that appears after this command. %Access"
    ],
    "ru": [
      "Обратите внимание на сообщение, которое появляется после этой команды. %Доступ"
    ]
  },
  {
    "time": [
      952.499,
      957.009
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
      952.499,
      957.009
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
      957.009,
      961.6
    ],
    "en": [
      "Creating vlan 10. Because VLAN10 didn’t exist on the device yet, it was created automatically when we"
    ],
    "ru": [
      "Создание vlan 10. Поскольку VLAN10 еще не существовал на устройстве, он был создан автоматически, когда мы"
    ]
  },
  {
    "time": [
      961.6,
      963.439
    ],
    "en": [
      "assigned the interface to VLAN10."
    ],
    "ru": [
      "назначил интерфейс VLAN10."
    ]
  },
  {
    "time": [
      963.439,
      969.29
    ],
    "en": [
      "I’ll show you how to manually create a VLAN in the next slide."
    ],
    "ru": [
      "На следующем слайде я покажу вам, как вручную создать VLAN."
    ]
  },
  {
    "time": [
      969.29,
      975.389
    ],
    "en": [
      "Next, I again used the interface range command to configure all of the VLAN20 interfaces at once."
    ],
    "ru": [
      "Затем я снова использовал команду interface range для одновременной настройки всех интерфейсов VLAN20."
    ]
  },
  {
    "time": [
      975.389,
      981.3
    ],
    "en": [
      "at once. I used the same SWITCHPORT MODE ACCESS command, then SWITCHPORT ACCESS VLAN 20 to assign the"
    ],
    "ru": [
      "однажды. Я использовал ту же команду SWITCHPORT MODE ACCESS, затем SWITCHPORT ACCESS VLAN 20, чтобы назначить"
    ]
  },
  {
    "time": [
      981.3,
      983.3389999999999
    ],
    "en": [
      "interfaces to VLAN 20."
    ],
    "ru": [
      "взаимодействует с VLAN 20."
    ]
  },
  {
    "time": [
      983.3389999999999,
      990.389
    ],
    "en": [
      "Finally, I did the same for VLAN30, and once again the VLAN was created automatically."
    ],
    "ru": [
      "Наконец, я сделал то же самое для VLAN30, и снова VLAN была создана автоматически."
    ]
  },
  {
    "time": [
      990.389,
      997.06
    ],
    "en": [
      "So, I used the show vlan brief command once again, and here you can see the three VLANs"
    ],
    "ru": [
      "Итак, я снова использовал команду show vlan short, и здесь вы можете увидеть три VLAN."
    ]
  },
  {
    "time": [
      997.06,
      1001.449
    ],
    "en": [
      "we created, and the ports we assigned to each VLAN."
    ],
    "ru": [
      "мы создали, и порты, которые мы назначили для каждой VLAN."
    ]
  },
  {
    "time": [
      1001.449,
      1006.5889999999999
    ],
    "en": [
      "Notice the default names of each VLAN, let’s change those to make it more understandable."
    ],
    "ru": [
      "Обратите внимание на имена по умолчанию для каждой VLAN, давайте изменим их, чтобы сделать их более понятными."
    ]
  },
  {
    "time": [
      1006.5889999999999,
      1012.97
    ],
    "en": [
      "So, I used the VLAN 10 command to enter configuration mode for VLAN 10."
    ],
    "ru": [
      "Итак, я использовал команду VLAN 10 для входа в режим конфигурации для VLAN 10."
    ]
  },
  {
    "time": [
      1012.97,
      1016.56
    ],
    "en": [
      "By the way, this is the command to create a VLAN, also."
    ],
    "ru": [
      "Кстати, это также команда для создания VLAN."
    ]
  },
  {
    "time": [
      1016.56,
      1021.04
    ],
    "en": [
      "But in this case, it was already automatically created when we assigned the interfaces."
    ],
    "ru": [
      "Но в данном случае он уже был автоматически создан при назначении интерфейсов."
    ]
  },
  {
    "time": [
      1021.04,
      1027.63
    ],
    "en": [
      "Next, I assign the name with this simple command, NAME ENGINEERING."
    ],
    "ru": [
      "Затем я назначаю имя с помощью этой простой команды NAME ENGINEERING."
    ]
  },
  {
    "time": [
      1027.63,
      1033.85
    ],
    "en": [
      "Then I do the same for VLAN 20, HR, and vlan 30, SALES."
    ],
    "ru": [
      "Затем я делаю то же самое для VLAN 20, HR и vlan 30, SALES."
    ]
  },
  {
    "time": [
      1033.85,
      1039.15
    ],
    "en": [
      "Finally, I confirmed once more with SHOW VLAN BRIEF."
    ],
    "ru": [
      "Наконец, я еще раз подтвердил SHOW VLAN BRIEF."
    ]
  },
  {
    "time": [
      1039.15,
      1043.959
    ],
    "en": [
      "Notice that the names have been changed to engineering, HR, and sales."
    ],
    "ru": [
      "Обратите внимание, что имена были изменены на «Инженер», «Управление персоналом» и «Продажи»."
    ]
  },
  {
    "time": [
      1043.959,
      1047.82
    ],
    "en": [
      "Okay, so that’s all for the configurations."
    ],
    "ru": [
      "Хорошо, это все, что касается конфигураций."
    ]
  },
  {
    "time": [
      1047.82,
      1055.59
    ],
    "en": [
      "If I use the command PING 255.255.255.255 on PC1, which sends a ping with the destination"
    ],
    "ru": [
      "Если я использую команду PING 255.255.255.255 на ПК1, которая отправляет эхо-запрос с адресом назначения"
    ]
  },
  {
    "time": [
      1055.59,
      1062.88
    ],
    "en": [
      "MAC address of all Fs, the broadcast MAC, the broadcast will only reach hosts in VLAN10."
    ],
    "ru": [
      "MAC-адрес всех F, широковещательный MAC, широковещательная передача будет достигать только хостов в VLAN10."
    ]
  },
  {
    "time": [
      1062.88,
      1070.74
    ],
    "en": [
      "Likewise, if I use the same command on PC2, the broadcast will only reach PCs in VLAN30."
    ],
    "ru": [
      "Аналогичным образом, если я использую ту же команду на ПК2, широковещательная передача будет достигнута только ПК в VLAN30."
    ]
  },
  {
    "time": [
      1070.74,
      1077.46
    ],
    "en": [
      "Okay, so before moving on to today’s quiz let’s review what we covered."
    ],
    "ru": [
      "Итак, прежде чем перейти к сегодняшней викторине, давайте еще раз рассмотрим, что мы рассмотрели."
    ]
  },
  {
    "time": [
      1077.46,
      1082.71
    ],
    "en": [
      "We talked about what a LAN is, and I defined it as a broadcast domain, the group of devices"
    ],
    "ru": [
      "Мы говорили о том, что такое LAN, и я определил ее как широковещательный домен, группу устройств."
    ]
  },
  {
    "time": [
      1082.71,
      1088.08
    ],
    "en": [
      "that will receive a broadcast frame sent by another member in the group."
    ],
    "ru": [
      "который получит широковещательный кадр, отправленный другим членом группы."
    ]
  },
  {
    "time": [
      1088.08,
      1090.33
    ],
    "en": [
      "Then I talked about what a VLAN is."
    ],
    "ru": [
      "Затем я рассказал о том, что такое VLAN."
    ]
  },
  {
    "time": [
      1090.33,
      1098.55
    ],
    "en": [
      "It’s essentially a way to logically split up a Layer 2 broadcast domain, to make multiple separate broadcast domains."
    ],
    "ru": [
      "По сути, это способ логически разделить широковещательный домен уровня 2 для создания нескольких отдельных широковещательных доменов."
    ]
  },
  {
    "time": [
      1098.55,
      1101.43
    ],
    "en": [
      "separate broadcast domains. We also talked about the purpose of VLANs."
    ],
    "ru": [
      "отдельные широковещательные домены. Мы также говорили о назначении VLAN."
    ]
  },
  {
    "time": [
      1101.43,
      1106.07
    ],
    "en": [
      "The two big reasons are network performance and security."
    ],
    "ru": [
      "Две важные причины - это производительность сети и безопасность."
    ]
  },
  {
    "time": [
      1106.07,
      1111.33
    ],
    "en": [
      "VLANs help to reduce unnecessary broadcast traffic, which helps prevent network congestion"
    ],
    "ru": [
      "VLAN помогают уменьшить ненужный широковещательный трафик, что помогает предотвратить перегрузку сети."
    ]
  },
  {
    "time": [
      1111.33,
      1114.64
    ],
    "en": [
      "and therefore improve network performance."
    ],
    "ru": [
      "и, следовательно, улучшить производительность сети."
    ]
  },
  {
    "time": [
      1114.64,
      1120.24
    ],
    "en": [
      "Limiting broadcast and unknown unicast traffic like this also improves network security,"
    ],
    "ru": [
      "Подобное ограничение широковещательного и неизвестного одноадресного трафика также повышает безопасность сети."
    ]
  },
  {
    "time": [
      1120.24,
      1125.42
    ],
    "en": [
      "since these messages won’t be received by devices outside of the VLAN."
    ],
    "ru": [
      "поскольку эти сообщения не будут получены устройствами за пределами VLAN."
    ]
  },
  {
    "time": [
      1125.42,
      1132.1
    ],
    "en": [
      "You should always make sure that network traffic isn’t sent unnecessarily to other devices as much as possible."
    ],
    "ru": [
      "Вы всегда должны следить за тем, чтобы сетевой трафик не отправлялся без надобности на другие устройства в максимально возможной степени."
    ]
  },
  {
    "time": [
      1132.1,
      1136.57
    ],
    "en": [
      "Finally, we looked at how to configure VLANs on Cisco switches."
    ],
    "ru": [
      "Наконец, мы рассмотрели, как настроить VLAN на коммутаторах Cisco."
    ]
  },
  {
    "time": [
      1136.57,
      1143.3
    ],
    "en": [
      "Specifically, we configured access ports on a Cisco switch and assigned them to a specific VLAN."
    ],
    "ru": [
      "В частности, мы настроили порты доступа на коммутаторе Cisco и назначили их определенной VLAN."
    ]
  },
  {
    "time": [
      1143.3,
      1148.14
    ],
    "en": [
      "VLAN. There is still plenty to cover about VLANs, but this should be a good foundation."
    ],
    "ru": [
      "VLAN. Еще многое предстоит рассказать о VLAN, но это должно стать хорошей основой."
    ]
  },
  {
    "time": [
      1148.14,
      1152.26
    ],
    "en": [
      "In day 17’s video we will cover more topics regarding VLANs."
    ],
    "ru": [
      "В видео 17-го дня мы рассмотрим другие темы, касающиеся VLAN."
    ]
  },
  {
    "time": [
      1152.26,
      1156.13
    ],
    "en": [
      "Okay, let’s go on to today’s quiz."
    ],
    "ru": [
      "Хорошо, давайте перейдем к сегодняшней викторине."
    ]
  },
  {
    "time": [
      1156.13,
      1158.03
    ],
    "en": [
      "First up, question 1."
    ],
    "ru": [
      "Прежде всего, вопрос 1."
    ]
  },
  {
    "time": [
      1158.03,
      1162.93
    ],
    "en": [
      "How many broadcast domains are shown in this network diagram?"
    ],
    "ru": [
      "Сколько широковещательных доменов показано на этой сетевой диаграмме?"
    ]
  },
  {
    "time": [
      1162.93,
      1166.94
    ],
    "en": [
      "network diagram? Pause the video and count how many broadcast domains you see."
    ],
    "ru": [
      "Диаграмма сети? Поставьте видео на паузу и посчитайте, сколько широковещательных доменов вы видите."
    ]
  },
  {
    "time": [
      1166.94,
      1172.8
    ],
    "en": [
      "Note that no VLANs have been configured, so all hosts are in the same default VLAN, VLAN1."
    ],
    "ru": [
      "Обратите внимание, что никакие VLAN не были настроены, поэтому все хосты находятся в одной и той же VLAN по умолчанию, VLAN1."
    ]
  },
  {
    "time": [
      1172.8,
      1180.02
    ],
    "en": [
      "Pause the video now."
    ],
    "ru": [
      "Приостановите видео сейчас."
    ]
  },
  {
    "time": [
      1180.02,
      1183.69
    ],
    "en": [
      "Okay, let’s check the answer."
    ],
    "ru": [
      "Хорошо, давай проверим ответ."
    ]
  },
  {
    "time": [
      1183.69,
      1187.38
    ],
    "en": [
      "There are 6 broadcast domains in this network diagram."
    ],
    "ru": [
      "На этой сетевой диаграмме 6 широковещательных доменов."
    ]
  },
  {
    "time": [
      1187.38,
      1193.48
    ],
    "en": [
      "Basically, each router interface and everything connected to it are in one broadcast domain,"
    ],
    "ru": [
      "По сути, каждый интерфейс маршрутизатора и все, что к нему подключено, находится в одном широковещательном домене,"
    ]
  },
  {
    "time": [
      1193.48,
      1195.58
    ],
    "en": [
      "since no VLANs have been configured."
    ],
    "ru": [
      "поскольку сети VLAN не настроены."
    ]
  },
  {
    "time": [
      1195.58,
      1199.39
    ],
    "en": [
      "Let’s go to question 2."
    ],
    "ru": [
      "Перейдем к вопросу 2."
    ]
  },
  {
    "time": [
      1199.39,
      1202.98
    ],
    "en": [
      "How many broadcast domains are shown in this network diagram?"
    ],
    "ru": [
      "Сколько широковещательных доменов показано на этой сетевой диаграмме?"
    ]
  },
  {
    "time": [
      1202.98,
      1205.52
    ],
    "en": [
      "Take note of the configured VLANs."
    ],
    "ru": [
      "Обратите внимание на настроенные сети VLAN."
    ]
  },
  {
    "time": [
      1205.52,
      1214.08
    ],
    "en": [
      "Pause the video to think about your answer. OK, let’s check."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом. Хорошо, давай проверим."
    ]
  },
  {
    "time": [
      1214.08,
      1216.74
    ],
    "en": [
      "OK, let’s check. There are 5 broadcast domains here."
    ],
    "ru": [
      "Хорошо, давай проверим. Здесь 5 широковещательных доменов."
    ]
  },
  {
    "time": [
      1216.74,
      1221.08
    ],
    "en": [
      "One for each of the configured VLANs, and the connection between the two routers is"
    ],
    "ru": [
      "По одному для каждой из настроенных сетей VLAN, и соединение между двумя маршрутизаторами установлено."
    ]
  },
  {
    "time": [
      1221.08,
      1222.87
    ],
    "en": [
      "a broadcast domain as well."
    ],
    "ru": [
      "широковещательный домен."
    ]
  },
  {
    "time": [
      1222.87,
      1226.03
    ],
    "en": [
      "Let’s go to question 3."
    ],
    "ru": [
      "Перейдем к вопросу 3."
    ]
  },
  {
    "time": [
      1226.03,
      1232.25
    ],
    "en": [
      "What happens if you try to assign a switch interface to a VLAN that doesn’t exist?"
    ],
    "ru": [
      "Что произойдет, если вы попытаетесь назначить интерфейс коммутатора несуществующей VLAN?"
    ]
  },
  {
    "time": [
      1232.25,
      1234.72
    ],
    "en": [
      "A, the command will fail."
    ],
    "ru": [
      "A, команда завершится ошибкой."
    ]
  },
  {
    "time": [
      1234.72,
      1237.98
    ],
    "en": [
      "B, the switch will create the VLAN."
    ],
    "ru": [
      "B, коммутатор создаст VLAN."
    ]
  },
  {
    "time": [
      1237.98,
      1243.06
    ],
    "en": [
      "C, the interface will be disabled until you create the VLAN."
    ],
    "ru": [
      "C интерфейс будет отключен, пока вы не создадите VLAN."
    ]
  },
  {
    "time": [
      1243.06,
      1246.9
    ],
    "en": [
      "Or D, all VLANs exist by default."
    ],
    "ru": [
      "Или D, все VLAN существуют по умолчанию."
    ]
  },
  {
    "time": [
      1246.9,
      1253.7
    ],
    "en": [
      "Pause the video to think about your answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      1253.7,
      1258.59
    ],
    "en": [
      "Okay, the answer is B, the switch will create the VLAN."
    ],
    "ru": [
      "Хорошо, ответ - B, коммутатор создаст VLAN."
    ]
  },
  {
    "time": [
      1258.59,
      1263.31
    ],
    "en": [
      "As I showed earlier in this video, if you assign a switch interface to a VLAN that doesn’t"
    ],
    "ru": [
      "Как я показал ранее в этом видео, если вы назначаете интерфейс коммутатора для VLAN, которая не"
    ]
  },
  {
    "time": [
      1263.31,
      1267.11
    ],
    "en": [
      "exist yet, the switch will create the VLAN automatically."
    ],
    "ru": [
      "существуют, коммутатор автоматически создаст VLAN."
    ]
  },
  {
    "time": [
      1267.11,
      1270.9
    ],
    "en": [
      "Let’s go to question 4."
    ],
    "ru": [
      "Перейдем к вопросу 4."
    ]
  },
  {
    "time": [
      1270.9,
      1275.93
    ],
    "en": [
      "If PC3 sends a broadcast message, how many devices will receive it?"
    ],
    "ru": [
      "Если ПК3 отправит широковещательное сообщение, сколько устройств получат его?"
    ]
  },
  {
    "time": [
      1275.93,
      1281.44
    ],
    "en": [
      "Pause the video to think about your answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      1281.44,
      1284.39
    ],
    "en": [
      "Okay, let’s check the answer."
    ],
    "ru": [
      "Хорошо, давай проверим ответ."
    ]
  },
  {
    "time": [
      1284.39,
      1286.54
    ],
    "en": [
      "The answer is 3."
    ],
    "ru": [
      "Ответ - 3."
    ]
  },
  {
    "time": [
      1286.54,
      1290.78
    ],
    "en": [
      "First of all, the switch will receive it, then it will send it out of all interfaces in"
    ],
    "ru": [
      "Прежде всего, коммутатор получит его, затем он отправит его из всех интерфейсов в"
    ]
  },
  {
    "time": [
      1290.78,
      1298.28
    ],
    "en": [
      "VLAN20, so the router and the other PC in VLAN20, making a total of 3 devices."
    ],
    "ru": [
      "VLAN20, то есть маршрутизатор и другой компьютер в VLAN20, всего 3 устройства."
    ]
  },
  {
    "time": [
      1298.28,
      1303.48
    ],
    "en": [
      "If no VLANs were configured, ALL other PCs would receive it, but since we have configured"
    ],
    "ru": [
      "Если бы сети VLAN не были настроены, ВСЕ другие ПК получили бы его, но, поскольку мы настроили"
    ]
  },
  {
    "time": [
      1303.48,
      1307.57
    ],
    "en": [
      "VLANs, only these devices in the same VLAN will receive it."
    ],
    "ru": [
      "VLAN, только эти устройства в той же VLAN получат его."
    ]
  },
  {
    "time": [
      1307.57,
      1312.95
    ],
    "en": [
      "Let’s go to the final question, question 5."
    ],
    "ru": [
      "Перейдем к последнему вопросу, вопросу 5."
    ]
  },
  {
    "time": [
      1312.95,
      1318.02
    ],
    "en": [
      "You create VLANs 10, 20, and 30 on a Cisco switch."
    ],
    "ru": [
      "Вы создаете VLAN 10, 20 и 30 на коммутаторе Cisco."
    ]
  },
  {
    "time": [
      1318.02,
      1324.5
    ],
    "en": [
      "How many VLANs will be displayed in the output of the show vlan brief command? A, 3."
    ],
    "ru": [
      "Сколько виртуальных локальных сетей будет отображаться в выводе команды show vlan Short? А, 3."
    ]
  },
  {
    "time": [
      1324.5,
      1328.41
    ],
    "en": [
      "A, 3. B, 5. C, 8."
    ],
    "ru": [
      "А, 3. Б, 5. В, 8."
    ]
  },
  {
    "time": [
      1328.41,
      1330.08
    ],
    "en": [
      "C, 8. Or D, 10."
    ],
    "ru": [
      "С, 8. Или D, 10."
    ]
  },
  {
    "time": [
      1330.08,
      1335.74
    ],
    "en": [
      "Pause the video to think about your answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      1335.74,
      1337.99
    ],
    "en": [
      "The answer is C, 8."
    ],
    "ru": [
      "Ответ - С, 8."
    ]
  },
  {
    "time": [
      1337.99,
      1340.61
    ],
    "en": [
      "Let’s check it out."
    ],
    "ru": [
      "Давай проверим."
    ]
  },
  {
    "time": [
      1340.61,
      1343.22
    ],
    "en": [
      "As you can see, there are 8 total VLANs."
    ],
    "ru": [
      "Как видите, всего существует 8 виртуальных локальных сетей."
    ]
  },
  {
    "time": [
      1343.22,
      1350.14
    ],
    "en": [
      "VLANs 1, and 1002, 3, 4, and 5 exist by default and cannot be deleted."
    ],
    "ru": [
      "Сети VLAN 1 и 1002, 3, 4 и 5 существуют по умолчанию и не могут быть удалены."
    ]
  },
  {
    "time": [
      1350.14,
      1356.44
    ],
    "en": [
      "So, if you create three additonal VLANs, there will be a total of 8 VLANs on the switch."
    ],
    "ru": [
      "Таким образом, если вы создадите три дополнительных VLAN, всего на коммутаторе будет 8 VLAN."
    ]
  },
  {
    "time": [
      1356.44,
      1360.15
    ],
    "en": [
      "Okay, that’s all for the quiz."
    ],
    "ru": [
      "Ладно, это все для викторины."
    ]
  },
  {
    "time": [
      1360.15,
      1365.78
    ],
    "en": [
      "There will be supplementary materials for this video to help you review and practice what you’ve learned."
    ],
    "ru": [
      "К этому видео будут добавлены дополнительные материалы, которые помогут вам повторить и применить на практике то, что вы узнали."
    ]
  },
  {
    "time": [
      1365.78,
      1369.9
    ],
    "en": [
      "what you’ve learned. There will be a flash card link in the video description which you can use with the flashcard"
    ],
    "ru": [
      "что вы узнали. В описании видео будет ссылка на флэш-карту, которую вы можете использовать с флэш-картой."
    ]
  },
  {
    "time": [
      1369.9,
      1372.62
    ],
    "en": [
      "software Anki to help you review."
    ],
    "ru": [
      "программное обеспечение Anki, чтобы помочь вам в обзоре."
    ]
  },
  {
    "time": [
      1372.62,
      1377.21
    ],
    "en": [
      "There will also be a packet tracer practice lab which you can use to practice the configurations"
    ],
    "ru": [
      "Также будет практическая лаборатория с трассировщиком пакетов, которую вы можете использовать для отработки конфигураций."
    ]
  },
  {
    "time": [
      1377.21,
      1379.2
    ],
    "en": [
      "learned in this video."
    ],
    "ru": [
      "узнал в этом видео."
    ]
  },
  {
    "time": [
      1379.2,
      1382.57
    ],
    "en": [
      "That will be in a separate video."
    ],
    "ru": [
      "Это будет в отдельном видео."
    ]
  },
  {
    "time": [
      1382.57,
      1388.21
    ],
    "en": [
      "Before I wrap up this video, I want to say thank you so much to my JCNP-level channel members,"
    ],
    "ru": [
      "Прежде чем я завершу это видео, я хочу поблагодарить участников моего канала уровня JCNP,"
    ]
  },
  {
    "time": [
      1388.21,
      1395.68
    ],
    "en": [
      "Yonatan, Mike, Aleksander, Vance, Magrathea, Devin, Charlsetta, and Lito."
    ],
    "ru": [
      "Йонатан, Майк, Александр, Вэнс, Магратея, Девин, Шарлсетта и Лито."
    ]
  },
  {
    "time": [
      1395.68,
      1398.76
    ],
    "en": [
      "Sorry if I pronounced any of your names incorrectly!"
    ],
    "ru": [
      "Извините, если я неправильно произнес ваше имя!"
    ]
  },
  {
    "time": [
      1398.76,
      1403.21
    ],
    "en": [
      "But thank you so much for your support."
    ],
    "ru": [
      "Но большое вам спасибо за вашу поддержку."
    ]
  },
  {
    "time": [
      1403.21,
      1404.26
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
      1404.26,
      1408.7
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
      1408.7,
      1412.02
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
      1412.02,
      1414.71
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
      1414.71,
      1422.13
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
      1422.13,
      1422.13
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]