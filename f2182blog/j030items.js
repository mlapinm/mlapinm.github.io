let objs = [
  {
    "time": [
      2.05,
      4.59
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
      4.59,
      8.0
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
      8.0,
      12.25
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
      12.25,
      18.4
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
      18.4,
      20.4
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
      20.4,
      26.84
    ],
    "en": [
      "In this video we will continue with the topic of VLANs, Virtual Local Area Networks."
    ],
    "ru": [
      "В этом видео мы продолжим тему VLAN, виртуальных локальных сетей."
    ]
  },
  {
    "time": [
      26.84,
      32.94
    ],
    "en": [
      "In the last video, Day 16, we covered the absolute basics of VLANs, what a VLAN is,"
    ],
    "ru": [
      "В последнем видео, День 16, мы рассмотрели абсолютные основы VLAN, что такое VLAN,"
    ]
  },
  {
    "time": [
      32.94,
      37.079
    ],
    "en": [
      "what their purpose is, and the most basic VLAN configurations."
    ],
    "ru": [
      "какова их цель и основные конфигурации VLAN."
    ]
  },
  {
    "time": [
      37.079,
      42.859
    ],
    "en": [
      "However, that’s not really enough information, there is still more basic knowledge you need"
    ],
    "ru": [
      "Однако на самом деле этой информации недостаточно, вам нужно еще больше базовых знаний."
    ]
  },
  {
    "time": [
      42.859,
      44.84
    ],
    "en": [
      "to be able to understand and use VLANs."
    ],
    "ru": [
      "чтобы понимать и использовать сети VLAN."
    ]
  },
  {
    "time": [
      44.84,
      49.089
    ],
    "en": [
      "That’s what we’ll cover in today’s video."
    ],
    "ru": [
      "Об этом мы расскажем в сегодняшнем видео."
    ]
  },
  {
    "time": [
      49.089,
      52.109
    ],
    "en": [
      "So let’s take a look at what we’ll cover, exactly."
    ],
    "ru": [
      "Итак, давайте посмотрим, что именно мы рассмотрим."
    ]
  },
  {
    "time": [
      52.109,
      56.85
    ],
    "en": [
      "This will be a fairly long video I think, but let’s take it step by step."
    ],
    "ru": [
      "Думаю, это будет довольно длинное видео, но давайте рассмотрим его шаг за шагом."
    ]
  },
  {
    "time": [
      56.85,
      59.39
    ],
    "en": [
      "First of all, what is a trunk port?"
    ],
    "ru": [
      "Прежде всего, что такое магистральный порт?"
    ]
  },
  {
    "time": [
      59.39,
      62.379
    ],
    "en": [
      "I mentioned trunk ports briefly in the last video."
    ],
    "ru": [
      "Я кратко упомянул порты магистрали в последнем видео."
    ]
  },
  {
    "time": [
      62.379,
      68.19
    ],
    "en": [
      "Whereas an access port belongs to a single VLAN, trunk ports carry traffic from multiple"
    ],
    "ru": [
      "В то время как порт доступа принадлежит одной VLAN, магистральные порты несут трафик от нескольких"
    ]
  },
  {
    "time": [
      68.19,
      70.53999999999999
    ],
    "en": [
      "VLANs on a single interface."
    ],
    "ru": [
      "VLAN на едином интерфейсе."
    ]
  },
  {
    "time": [
      70.53999999999999,
      73.9
    ],
    "en": [
      "Next, what is the purpose of trunk ports?"
    ],
    "ru": [
      "Далее, какова цель магистральных портов?"
    ]
  },
  {
    "time": [
      73.9,
      76.68
    ],
    "en": [
      "How are they actually used?"
    ],
    "ru": [
      "Как они на самом деле используются?"
    ]
  },
  {
    "time": [
      76.68,
      80.84
    ],
    "en": [
      "Next I will talk about 802.1Q encapsulation."
    ],
    "ru": [
      "Далее я расскажу об инкапсуляции 802.1Q."
    ]
  },
  {
    "time": [
      80.84,
      86.39
    ],
    "en": [
      "This is an additonal tag added to an Ethernet frame which is used to identify which VLAN"
    ],
    "ru": [
      "Это дополнительный тег, добавляемый к кадру Ethernet, который используется для определения того, какая VLAN"
    ]
  },
  {
    "time": [
      86.39,
      88.32
    ],
    "en": [
      "traffic belongs to on a trunk."
    ],
    "ru": [
      "трафик принадлежит транку."
    ]
  },
  {
    "time": [
      88.32,
      94.52000000000001
    ],
    "en": [
      "Next, we’ll go into trunk port configuration, it’s not so complicated, you only need to"
    ],
    "ru": [
      "Далее мы перейдем к настройке магистрального порта, это не так сложно, вам нужно только"
    ]
  },
  {
    "time": [
      94.52000000000001,
      96.6
    ],
    "en": [
      "learn a few more commands."
    ],
    "ru": [
      "выучите еще несколько команд."
    ]
  },
  {
    "time": [
      96.6,
      100.08
    ],
    "en": [
      "Finally, we’ll cover ‘router on a stick’."
    ],
    "ru": [
      "Наконец, мы рассмотрим «маршрутизатор на палке»."
    ]
  },
  {
    "time": [
      100.08,
      104.7
    ],
    "en": [
      "It’s a bit of an odd name, but this is something you really need to know for your CCNA."
    ],
    "ru": [
      "Это немного странное имя, но это то, что вам действительно нужно знать для вашего CCNA."
    ]
  },
  {
    "time": [
      104.7,
      109.89
    ],
    "en": [
      "It’s a more efficient way of performing inter-VLAN routing, an alternative to using"
    ],
    "ru": [
      "Это более эффективный способ выполнения маршрутизации между VLAN, альтернатива использованию"
    ]
  },
  {
    "time": [
      109.89,
      112.82
    ],
    "en": [
      "a separate router interface for every VLAN."
    ],
    "ru": [
      "отдельный интерфейс маршрутизатора для каждой VLAN."
    ]
  },
  {
    "time": [
      112.82,
      116.22
    ],
    "en": [
      "So, let’s get started."
    ],
    "ru": [
      "Итак, приступим."
    ]
  },
  {
    "time": [
      116.22,
      121.23
    ],
    "en": [
      "For a quick review, here is the network topology used in the last video."
    ],
    "ru": [
      "Для быстрого обзора вот топология сети, использованная в последнем видео."
    ]
  },
  {
    "time": [
      121.23,
      123.94
    ],
    "en": [
      "There is a single switch, and three VLANs."
    ],
    "ru": [
      "Есть один коммутатор и три VLAN."
    ]
  },
  {
    "time": [
      123.94,
      133.7
    ],
    "en": [
      "All of the switch interfaces are access ports which belong to a single VLAN, either VLAN10, VLAN20, or VLAN30."
    ],
    "ru": [
      "Все интерфейсы коммутатора являются портами доступа, которые принадлежат одной VLAN, VLAN10, VLAN20 или VLAN30."
    ]
  },
  {
    "time": [
      133.7,
      138.5
    ],
    "en": [
      "VLAN20, or VLAN30. Three interfaces are used to connect to the router, one for each VLAN."
    ],
    "ru": [
      "VLAN20 или VLAN30. Для подключения к маршрутизатору используются три интерфейса, по одному для каждой VLAN."
    ]
  },
  {
    "time": [
      138.5,
      142.17000000000002
    ],
    "en": [
      "For this video, let’s use a different network topology."
    ],
    "ru": [
      "Для этого видео давайте воспользуемся другой топологией сети."
    ]
  },
  {
    "time": [
      142.17000000000002,
      147.17000000000002
    ],
    "en": [
      "Here’s the network topology we’ll start with for this lesson."
    ],
    "ru": [
      "Вот топология сети, с которой мы начнем в этом уроке."
    ]
  },
  {
    "time": [
      147.17000000000002,
      149.94
    ],
    "en": [
      "This time, there are two switches used."
    ],
    "ru": [
      "На этот раз используются два переключателя."
    ]
  },
  {
    "time": [
      149.94,
      156.25
    ],
    "en": [
      "Note that VLAN10, the VLAN for the engineering department, is split between the two switches."
    ],
    "ru": [
      "Обратите внимание, что VLAN10, VLAN для инженерного отдела, разделена между двумя коммутаторами."
    ]
  },
  {
    "time": [
      156.25,
      162.03
    ],
    "en": [
      "This is very common, as departments in a company aren’t always split up exactly by location."
    ],
    "ru": [
      "Это очень распространенное явление, поскольку отделы компании не всегда разделяются точно по местоположению."
    ]
  },
  {
    "time": [
      162.03,
      167.2
    ],
    "en": [
      "You might have some engineers on one floor of the building, for example, and some on another floor."
    ],
    "ru": [
      "Например, у вас могут быть инженеры на одном этаже здания, а некоторые - на другом."
    ]
  },
  {
    "time": [
      167.2,
      170.82
    ],
    "en": [
      "on another floor. We are still using only access ports."
    ],
    "ru": [
      "на другом этаже. Мы по-прежнему используем только порты доступа."
    ]
  },
  {
    "time": [
      170.82,
      177.6
    ],
    "en": [
      "There are two links between SW1 and SW2, one for VLAN10, and one for VLAN30."
    ],
    "ru": [
      "Между SW1 и SW2 есть два канала: один для VLAN10 и один для VLAN30."
    ]
  },
  {
    "time": [
      177.6,
      182.63
    ],
    "en": [
      "There must be a link in VLAN10 between the two switches because VLAN10 PCs are connected"
    ],
    "ru": [
      "Между двумя коммутаторами должна быть ссылка в VLAN10, потому что ПК VLAN10 подключены"
    ]
  },
  {
    "time": [
      182.63,
      192.45
    ],
    "en": [
      "to both SW1 and SW2, and also because the PCs connected to SW1 need to be able to reach R1 via SW2."
    ],
    "ru": [
      "как к SW1, так и к SW2, а также потому, что ПК, подключенные к SW1, должны иметь доступ к R1 через SW2."
    ]
  },
  {
    "time": [
      192.45,
      197.87
    ],
    "en": [
      "R1 via SW2. As for the link in VLAN30, it is necessary because PCs in VLAN30 also need to be"
    ],
    "ru": [
      "R1 через SW2. Что касается ссылки в VLAN30, она необходима, потому что ПК в VLAN30 также должны быть"
    ]
  },
  {
    "time": [
      197.87,
      201.54
    ],
    "en": [
      "able to reach R1 via SW2."
    ],
    "ru": [
      "может подключиться к R1 через SW2."
    ]
  },
  {
    "time": [
      201.54,
      205.48
    ],
    "en": [
      "There is no link in VLAN20 between SW1 and SW2."
    ],
    "ru": [
      "В VLAN20 нет связи между SW1 и SW2."
    ]
  },
  {
    "time": [
      205.48,
      210.49
    ],
    "en": [
      "This is because there are no PCs in VLAN20 connected to SW1."
    ],
    "ru": [
      "Это связано с тем, что в VLAN20 нет компьютеров, подключенных к SW1."
    ]
  },
  {
    "time": [
      210.49,
      218.73
    ],
    "en": [
      "PCs in VLAN20 can still reach PCs connected to SW1, R1 will perform the inter-VLAN routing."
    ],
    "ru": [
      "ПК в VLAN20 все еще могут подключаться к ПК, подключенным к SW1, R1 будет выполнять маршрутизацию между VLAN."
    ]
  },
  {
    "time": [
      218.73,
      221.05
    ],
    "en": [
      "Let me demonstrate that inter-VLAN routing."
    ],
    "ru": [
      "Позвольте мне продемонстрировать эту маршрутизацию между VLAN."
    ]
  },
  {
    "time": [
      221.05,
      229.46
    ],
    "en": [
      "Let’s say this PC in VLAN20 wants to send traffic to one of the VLAN10 PCs connected to SW1."
    ],
    "ru": [
      "Допустим, этот компьютер в VLAN20 хочет отправить трафик на один из компьютеров VLAN10, подключенных к SW1."
    ]
  },
  {
    "time": [
      229.46,
      234.4
    ],
    "en": [
      "to SW1. It will send the frame with a destination MAC address of R1, its default gateway."
    ],
    "ru": [
      "к SW1. Он отправит кадр с MAC-адресом назначения R1, его шлюзом по умолчанию."
    ]
  },
  {
    "time": [
      234.4,
      238.26
    ],
    "en": [
      "R1 then forwards it back to SW2."
    ],
    "ru": [
      "Затем R1 пересылает его обратно в SW2."
    ]
  },
  {
    "time": [
      238.26,
      244.5
    ],
    "en": [
      "Note that this traffic arrived at SW2 on the VLAN10 interface, the traffic is now in VLAN10,"
    ],
    "ru": [
      "Обратите внимание, что этот трафик прибыл в SW2 на интерфейсе VLAN10, теперь трафик находится в VLAN10,"
    ]
  },
  {
    "time": [
      244.5,
      250.48
    ],
    "en": [
      "so it forwards it to SW1 on the VLAN10 connection between them, and then SW1 forwards the traffic"
    ],
    "ru": [
      "поэтому он перенаправляет его на SW1 в соединении VLAN10 между ними, а затем SW1 перенаправляет трафик"
    ]
  },
  {
    "time": [
      250.48,
      252.37
    ],
    "en": [
      "to the destination PC."
    ],
    "ru": [
      "на целевой компьютер."
    ]
  },
  {
    "time": [
      252.37,
      259.19
    ],
    "en": [
      "So, you can see that, even though there isn’t a VLAN20 connection between SW2 and SW1, the"
    ],
    "ru": [
      "Итак, вы можете видеть, что, даже если нет соединения VLAN20 между SW2 и SW1,"
    ]
  },
  {
    "time": [
      259.19,
      267.479
    ],
    "en": [
      "PC in VLAN20 can still send traffic to the PC in VLAN10, because the router performs inter-VLAN routing."
    ],
    "ru": [
      "ПК в VLAN20 все еще может отправлять трафик на ПК в VLAN10, поскольку маршрутизатор выполняет маршрутизацию между VLAN."
    ]
  },
  {
    "time": [
      267.479,
      273.38
    ],
    "en": [
      "inter-VLAN routing. In a small network with few VLANs, it is possible to use a separate interface for each VLAN"
    ],
    "ru": [
      "маршрутизация между VLAN. В небольшой сети с несколькими VLAN можно использовать отдельный интерфейс для каждой VLAN."
    ]
  },
  {
    "time": [
      273.38,
      277.4
    ],
    "en": [
      "when connecting switches to switches, and switches to routers."
    ],
    "ru": [
      "при подключении коммутаторов к коммутаторам, а коммутаторов к маршрутизаторам."
    ]
  },
  {
    "time": [
      277.4,
      282.129
    ],
    "en": [
      "However, when the number of VLANs increases, this is not viable."
    ],
    "ru": [
      "Однако когда количество VLAN увеличивается, это становится нежизнеспособным."
    ]
  },
  {
    "time": [
      282.129,
      288.99
    ],
    "en": [
      "It will result in wasted interfaces, and often routers won’t have enough interfaces for each VLAN."
    ],
    "ru": [
      "Это приведет к неэффективному использованию интерфейсов, и часто маршрутизаторам не хватает интерфейсов для каждой VLAN."
    ]
  },
  {
    "time": [
      288.99,
      295.419
    ],
    "en": [
      "each VLAN. You can use 'trunk ports' to carry traffic from multiple VLANs over a single interface."
    ],
    "ru": [
      "каждая VLAN. Вы можете использовать «магистральные порты» для передачи трафика из нескольких VLAN через один интерфейс."
    ]
  },
  {
    "time": [
      295.419,
      300.46
    ],
    "en": [
      "Once again, these are different than access ports, which belong to a single VLAN only."
    ],
    "ru": [
      "Еще раз, они отличаются от портов доступа, которые принадлежат только одной VLAN."
    ]
  },
  {
    "time": [
      300.46,
      304.999
    ],
    "en": [
      "Let’s take a quick look at how trunk ports work."
    ],
    "ru": [
      "Давайте быстро посмотрим, как работают магистральные порты."
    ]
  },
  {
    "time": [
      304.999,
      310.82
    ],
    "en": [
      "So, now I’ve replaced those separate connections for each VLAN, with a single connection"
    ],
    "ru": [
      "Итак, теперь я заменил эти отдельные подключения для каждой VLAN одним подключением."
    ]
  },
  {
    "time": [
      310.82,
      314.81
    ],
    "en": [
      "between SW1 and SW2, and SW2 and R1."
    ],
    "ru": [
      "между SW1 и SW2, а также SW2 и R1."
    ]
  },
  {
    "time": [
      314.81,
      319.36
    ],
    "en": [
      "However, to make it more clear, let’s add those colors back."
    ],
    "ru": [
      "Однако, чтобы было понятнее, давайте снова добавим эти цвета."
    ]
  },
  {
    "time": [
      319.36,
      324.029
    ],
    "en": [
      "Okay, so now you can see which VLANs are allowed on each trunk."
    ],
    "ru": [
      "Хорошо, теперь вы можете видеть, какие VLAN разрешены на каждой транке."
    ]
  },
  {
    "time": [
      324.029,
      330.919
    ],
    "en": [
      "Remember, these are single physical connections, but traffic from multiple VLANs is allowed over each trunk."
    ],
    "ru": [
      "Помните, что это одиночные физические соединения, но трафик из нескольких VLAN разрешен по каждой магистрали."
    ]
  },
  {
    "time": [
      330.919,
      338.779
    ],
    "en": [
      "over each trunk. Let’s say this PC in VLAN10 wants to send some data to this other PC in VLAN 10."
    ],
    "ru": [
      "по каждому стволу. Допустим, этот компьютер в VLAN 10 хочет отправить некоторые данные на этот другой компьютер в VLAN 10."
    ]
  },
  {
    "time": [
      338.779,
      342.819
    ],
    "en": [
      "It sends the traffic to SW2, which then sends it to SW1."
    ],
    "ru": [
      "Он отправляет трафик в SW2, который затем отправляет его в SW1."
    ]
  },
  {
    "time": [
      342.819,
      345.59000000000003
    ],
    "en": [
      "Now here’s a question."
    ],
    "ru": [
      "А теперь вопрос."
    ]
  },
  {
    "time": [
      345.59000000000003,
      349.939
    ],
    "en": [
      "How does SW1 know which VLAN the traffic belongs to?"
    ],
    "ru": [
      "Как SW1 узнает, к какой VLAN принадлежит трафик?"
    ]
  },
  {
    "time": [
      349.939,
      355.689
    ],
    "en": [
      "Both VLANs 10 and 30 are allowed on the interface the traffic was received on, but how does"
    ],
    "ru": [
      "Обе сети VLAN 10 и 30 разрешены на интерфейсе, на котором был получен трафик, но как это сделать?"
    ]
  },
  {
    "time": [
      355.689,
      359.139
    ],
    "en": [
      "SW1 know which VLAN it belongs to?"
    ],
    "ru": [
      "SW1 знает, к какой VLAN он принадлежит?"
    ]
  },
  {
    "time": [
      359.139,
      362.199
    ],
    "en": [
      "The answer is VLAN tagging."
    ],
    "ru": [
      "Ответ - тегирование VLAN."
    ]
  },
  {
    "time": [
      362.199,
      365.889
    ],
    "en": [
      "Switches will ‘tag’ all frames that they send over a trunk link."
    ],
    "ru": [
      "Коммутаторы будут «помечать» все кадры, которые они отправляют по магистральному каналу."
    ]
  },
  {
    "time": [
      365.889,
      369.56
    ],
    "en": [
      "This allows the receiving switch to know which VLAN the frame belongs to."
    ],
    "ru": [
      "Это позволяет принимающему коммутатору знать, к какой VLAN принадлежит кадр."
    ]
  },
  {
    "time": [
      369.56,
      374.8
    ],
    "en": [
      "In fact, another name for a trunk port is a ‘tagged’ port, and another name for"
    ],
    "ru": [
      "Фактически, другое имя для магистрального порта - это «помеченный» порт, а другое имя для"
    ]
  },
  {
    "time": [
      374.8,
      378.559
    ],
    "en": [
      "an access port is an ‘untagged’ port."
    ],
    "ru": [
      "порт доступа - это «немаркированный» порт."
    ]
  },
  {
    "time": [
      378.559,
      382.68
    ],
    "en": [
      "Frames sent over access ports aren’t tagged, they don’t need to be tagged because the"
    ],
    "ru": [
      "Кадры, отправленные через порты доступа, не помечаются, их не нужно маркировать, потому что"
    ]
  },
  {
    "time": [
      382.68,
      385.779
    ],
    "en": [
      "interface belongs to a single VLAN."
    ],
    "ru": [
      "интерфейс принадлежит одной VLAN."
    ]
  },
  {
    "time": [
      385.779,
      391.309
    ],
    "en": [
      "If a frame arrives on a switchport in VLAN10, the switch knows the frame is in VLAN10."
    ],
    "ru": [
      "Если кадр поступает в порт коммутатора в VLAN10, коммутатор знает, что кадр находится в VLAN10."
    ]
  },
  {
    "time": [
      391.309,
      395.699
    ],
    "en": [
      "Let’s talk about those VLAN tags."
    ],
    "ru": [
      "Давайте поговорим об этих тегах VLAN."
    ]
  },
  {
    "time": [
      395.699,
      404.789
    ],
    "en": [
      "There are two main trunking protocols: ISL (Inter-Switch Link) and IEEE 802.1Q. Usually,"
    ],
    "ru": [
      "Существует два основных транкинговых протокола: ISL (Inter-Switch Link) и IEEE 802.1Q. Как правило,"
    ]
  },
  {
    "time": [
      404.789,
      409.05
    ],
    "en": [
      "we call 802.1Q ‘dot1q’."
    ],
    "ru": [
      "мы называем 802.1Q «dot1q»."
    ]
  },
  {
    "time": [
      409.05,
      415.389
    ],
    "en": [
      "ISL is an old Cisco proprietary protocol, created before the industry standard IEEE"
    ],
    "ru": [
      "ISL - это старый проприетарный протокол Cisco, созданный до отраслевого стандарта IEEE."
    ]
  },
  {
    "time": [
      415.389,
      422.809
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
      415.389,
      422.809
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
      422.809,
      428.1
    ],
    "en": [
      "Electrical and Electronics Engineers). Remember the IEEE?"
    ],
    "ru": [
      "Инженеры по электротехнике и электронике). Помните IEEE?"
    ]
  },
  {
    "time": [
      428.1,
      430.98
    ],
    "en": [
      "Remember the IEEE? How about IEEE 802.3?"
    ],
    "ru": [
      "Помните IEEE? Как насчет IEEE 802.3?"
    ]
  },
  {
    "time": [
      430.98,
      435.02
    ],
    "en": [
      "That’s Ethernet, another industry standard protocol."
    ],
    "ru": [
      "Это Ethernet, еще один протокол промышленного стандарта."
    ]
  },
  {
    "time": [
      435.02,
      437.979
    ],
    "en": [
      "You will probably NEVER use ISL in the real world."
    ],
    "ru": [
      "Вы, вероятно, НИКОГДА не будете использовать ISL в реальном мире."
    ]
  },
  {
    "time": [
      437.979,
      441.969
    ],
    "en": [
      "Even modern Cisco equipment doesn’t support it."
    ],
    "ru": [
      "Его не поддерживает даже современное оборудование Cisco."
    ]
  },
  {
    "time": [
      441.969,
      445.28
    ],
    "en": [
      "For the CCNA, you only need to learn dot1q."
    ],
    "ru": [
      "Для CCNA вам нужно только изучить dot1q."
    ]
  },
  {
    "time": [
      445.28,
      451.26
    ],
    "en": [
      "You should know what ISL is, but you don’t have to study it like dot1q."
    ],
    "ru": [
      "Вы должны знать, что такое ISL, но вам не нужно изучать его, как dot1q."
    ]
  },
  {
    "time": [
      451.26,
      456.449
    ],
    "en": [
      "Okay here’s an old slide, back from Day 5 on Ethernet switching."
    ],
    "ru": [
      "Хорошо, вот старый слайд из Дня 5 о коммутации Ethernet."
    ]
  },
  {
    "time": [
      456.449,
      460.289
    ],
    "en": [
      "Do you remember the fields of the Ethernet header and trailer?"
    ],
    "ru": [
      "Вы помните поля заголовка и трейлера Ethernet?"
    ]
  },
  {
    "time": [
      460.289,
      464.649
    ],
    "en": [
      "If you don’t, I recommend going back to check out Day 5’s video, I won’t waste"
    ],
    "ru": [
      "Если вы этого не сделаете, я рекомендую вернуться, чтобы посмотреть видео дня 5, я не буду тратить зря"
    ]
  },
  {
    "time": [
      464.649,
      466.939
    ],
    "en": [
      "time explaining it all again here."
    ],
    "ru": [
      "время, чтобы снова все это объяснить."
    ]
  },
  {
    "time": [
      466.939,
      472.62
    ],
    "en": [
      "However, the reason I am showing this is because the dot1q tag is actually inserted between"
    ],
    "ru": [
      "Однако я показываю это потому, что тег dot1q фактически вставлен между"
    ]
  },
  {
    "time": [
      472.62,
      474.649
    ],
    "en": [
      "two fields of the Ethernet header."
    ],
    "ru": [
      "два поля заголовка Ethernet."
    ]
  },
  {
    "time": [
      474.649,
      478.05
    ],
    "en": [
      "So, here’s just the Ethernet header."
    ],
    "ru": [
      "Итак, вот только заголовок Ethernet."
    ]
  },
  {
    "time": [
      478.05,
      484.409
    ],
    "en": [
      "Dot1q inserts a 4-byte, or 32-bit field between two fields of this Ethernet header."
    ],
    "ru": [
      "Dot1q вставляет 4-байтовое или 32-битное поле между двумя полями этого заголовка Ethernet."
    ]
  },
  {
    "time": [
      484.409,
      487.199
    ],
    "en": [
      "Let’s take a look."
    ],
    "ru": [
      "Давайте взглянем."
    ]
  },
  {
    "time": [
      487.199,
      492.589
    ],
    "en": [
      "As you can see here, the dot1q tag is inserted between the source MAC address and the type"
    ],
    "ru": [
      "Как вы можете видеть здесь, тег dot1q вставлен между исходным MAC-адресом и типом"
    ]
  },
  {
    "time": [
      492.589,
      495.479
    ],
    "en": [
      "or length fields of the Ethernet header."
    ],
    "ru": [
      "или поля длины заголовка Ethernet."
    ]
  },
  {
    "time": [
      495.479,
      498.8
    ],
    "en": [
      "Let’s go over some basics."
    ],
    "ru": [
      "Давайте рассмотрим некоторые основы."
    ]
  },
  {
    "time": [
      498.8,
      505.3
    ],
    "en": [
      "As I just said, the 802.1Q tag is inserted between the Source and Type/Length fields"
    ],
    "ru": [
      "Как я только что сказал, тег 802.1Q вставляется между полями Source и Type / Length."
    ]
  },
  {
    "time": [
      505.3,
      507.83
    ],
    "en": [
      "of the Ethernet frame."
    ],
    "ru": [
      "кадра Ethernet."
    ]
  },
  {
    "time": [
      507.83,
      511.659
    ],
    "en": [
      "The tag is 4 bytes, or 32 bits, in length."
    ],
    "ru": [
      "Тег имеет длину 4 байта или 32 бита."
    ]
  },
  {
    "time": [
      511.659,
      514.74
    ],
    "en": [
      "The tag consists of two main fields."
    ],
    "ru": [
      "Тег состоит из двух основных полей."
    ]
  },
  {
    "time": [
      514.74,
      523.349
    ],
    "en": [
      "Those are the Tag Protocol Identifier, TPID, and the Tag Control Information, TCI."
    ],
    "ru": [
      "Это идентификатор протокола тегов, TPID и информация управления тегами, TCI."
    ]
  },
  {
    "time": [
      523.349,
      526.28
    ],
    "en": [
      "The TCI itself consists of three sub-fields."
    ],
    "ru": [
      "Сам TCI состоит из трех подполей."
    ]
  },
  {
    "time": [
      526.28,
      531.24
    ],
    "en": [
      "Let’s quickly take a look at each field of the dot1q tag."
    ],
    "ru": [
      "Давайте быстро взглянем на каждое поле тега dot1q."
    ]
  },
  {
    "time": [
      531.24,
      537.399
    ],
    "en": [
      "Here’s a diagram of the dot1q tag format, thanks to wikipedia."
    ],
    "ru": [
      "Вот диаграмма формата тега dot1q, спасибо Википедии."
    ]
  },
  {
    "time": [
      537.399,
      543.54
    ],
    "en": [
      "Notice that it can be divided into two halves, the TPID and TCI I mentioned before."
    ],
    "ru": [
      "Обратите внимание, что его можно разделить на две половины: TPID и TCI, о которых я упоминал ранее."
    ]
  },
  {
    "time": [
      543.54,
      552.43
    ],
    "en": [
      "Also, the TCI can be divided into three sub fields, the PCP, DEI, and VID."
    ],
    "ru": [
      "Кроме того, TCI можно разделить на три подполя: PCP, DEI и VID."
    ]
  },
  {
    "time": [
      552.43,
      557.16
    ],
    "en": [
      "Okay first up lets look at the TPID field."
    ],
    "ru": [
      "Хорошо, сначала давайте посмотрим на поле TPID."
    ]
  },
  {
    "time": [
      557.16,
      565.58
    ],
    "en": [
      "The field is 16 bits, or 2 bytes, in length, taking up half of the 802.1Q tag’s length."
    ],
    "ru": [
      "Поле имеет длину 16 бит или 2 байта, занимая половину длины тега 802.1Q."
    ]
  },
  {
    "time": [
      565.58,
      571.4
    ],
    "en": [
      "The TPID is ALWAYS set to a value of 0x8100."
    ],
    "ru": [
      "TPID ВСЕГДА устанавливается на значение 0x8100."
    ]
  },
  {
    "time": [
      571.4,
      581.329
    ],
    "en": [
      "Remember, 0x just means hexadecimal, so the actual value in the field is 8 1 0 0, four hexadecimal digits."
    ],
    "ru": [
      "Помните, что 0x означает только шестнадцатеричное число, поэтому фактическое значение в поле - 8 1 0 0, четыре шестнадцатеричных цифры."
    ]
  },
  {
    "time": [
      581.329,
      588.8
    ],
    "en": [
      "digits. Each hexadecimal digit is 4 bits, so 4 x 4 is 16, the total length of the field."
    ],
    "ru": [
      "цифры. Каждая шестнадцатеричная цифра составляет 4 бита, поэтому 4 x 4 равно 16, общей длине поля."
    ]
  },
  {
    "time": [
      588.8,
      594.819
    ],
    "en": [
      "This value of 8 1 0 0 indicates that the frame is dot1q-tagged."
    ],
    "ru": [
      "Это значение 8 1 0 0 указывает, что кадр имеет теги dot1q."
    ]
  },
  {
    "time": [
      594.819,
      600.66
    ],
    "en": [
      "As I just showed you, the dot1q tag comes after the source MAC field of the Ethernet frame."
    ],
    "ru": [
      "Как я только что показал, тег dot1q идет после поля MAC-адреса источника кадра Ethernet."
    ]
  },
  {
    "time": [
      600.66,
      604.16
    ],
    "en": [
      "frame. This is where the TYPE field is usually located."
    ],
    "ru": [
      "Рамка. Здесь обычно находится поле TYPE."
    ]
  },
  {
    "time": [
      604.16,
      609.769
    ],
    "en": [
      "When the switch sees this value of 8 1 0 0 here, it knows it’s a dot1q-tagged frame."
    ],
    "ru": [
      "Когда коммутатор видит здесь значение 8 1 0 0, он знает, что это кадр с тегами dot1q."
    ]
  },
  {
    "time": [
      609.769,
      614.93
    ],
    "en": [
      "Okay, that’s all for the TPID field."
    ],
    "ru": [
      "Хорошо, это все, что касается поля TPID."
    ]
  },
  {
    "time": [
      614.93,
      621.94
    ],
    "en": [
      "Next up let’s look at the first field of the TCI, which is the PCP, or Priority Code Point."
    ],
    "ru": [
      "Теперь давайте посмотрим на первое поле TCI, которое является PCP или точкой кода приоритета."
    ]
  },
  {
    "time": [
      621.94,
      624.67
    ],
    "en": [
      "Point. The field is 3 bits in length."
    ],
    "ru": [
      "Точка. Поле имеет длину 3 бита."
    ]
  },
  {
    "time": [
      624.67,
      631.93
    ],
    "en": [
      "It is used for Class of Service, CoS, which prioritizes important traffic in congested networks."
    ],
    "ru": [
      "Он используется для класса обслуживания, CoS, который определяет приоритет важного трафика в перегруженных сетях."
    ]
  },
  {
    "time": [
      631.93,
      639.31
    ],
    "en": [
      "networks. Don’t worry about this field too much, just know the name and that it is used for CoS."
    ],
    "ru": [
      "сети. Не беспокойтесь об этом поле слишком много, просто знайте имя и то, что оно используется для CoS."
    ]
  },
  {
    "time": [
      639.31,
      643.779
    ],
    "en": [
      "Next up is the DEI, Drop Eligible Indicator."
    ],
    "ru": [
      "Далее идет DEI, индикатор соответствия требованиям."
    ]
  },
  {
    "time": [
      643.779,
      647.04
    ],
    "en": [
      "This field is just a single bit in length."
    ],
    "ru": [
      "Это поле имеет длину всего один бит."
    ]
  },
  {
    "time": [
      647.04,
      651.4110000000001
    ],
    "en": [
      "It is used to indicate frames that can be dropped if the network is congested, which"
    ],
    "ru": [
      "Он используется для обозначения кадров, которые могут быть отброшены, если сеть перегружена, что"
    ]
  },
  {
    "time": [
      651.4110000000001,
      655.35
    ],
    "en": [
      "makes sure more important network traffic gets through."
    ],
    "ru": [
      "обеспечивает прохождение более важного сетевого трафика."
    ]
  },
  {
    "time": [
      655.35,
      659.501
    ],
    "en": [
      "Once again, you don’t really need to worry about this field too much for your CCNA, just"
    ],
    "ru": [
      "Еще раз, вам не нужно слишком беспокоиться об этом поле для вашего CCNA, просто"
    ]
  },
  {
    "time": [
      659.501,
      661.92
    ],
    "en": [
      "know the name and it’s basic purpose."
    ],
    "ru": [
      "знать имя и его основную цель."
    ]
  },
  {
    "time": [
      661.92,
      668.97
    ],
    "en": [
      "Okay, finally is a very important field, the VID, or VLAN ID field."
    ],
    "ru": [
      "Хорошо, наконец, это очень важное поле, поле VID или VLAN ID."
    ]
  },
  {
    "time": [
      668.97,
      671.329
    ],
    "en": [
      "It is 12 bits in length."
    ],
    "ru": [
      "Его длина составляет 12 бит."
    ]
  },
  {
    "time": [
      671.329,
      675.92
    ],
    "en": [
      "It is the field that actually identifies the VLAN the frame belongs to, so you could say"
    ],
    "ru": [
      "Это поле, которое фактически идентифицирует VLAN, к которой принадлежит фрейм, так что вы могли бы сказать"
    ]
  },
  {
    "time": [
      675.92,
      680.48
    ],
    "en": [
      "this is the most important field of the dot1q tag."
    ],
    "ru": [
      "это самое важное поле тега dot1q."
    ]
  },
  {
    "time": [
      680.48,
      686.46
    ],
    "en": [
      "Because this field is 12 bits in length, that means there are 4096 total VLANs, because"
    ],
    "ru": [
      "Поскольку это поле имеет длину 12 бит, это означает, что всего 4096 виртуальных локальных сетей, поскольку"
    ]
  },
  {
    "time": [
      686.46,
      690.38
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
      686.46,
      690.38
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
      690.38,
      697.889
    ],
    "en": [
      "However, the first and last VLANs, 0 and 4095, are reserved and can’t be used."
    ],
    "ru": [
      "Однако первая и последняя VLAN 0 и 4095 зарезервированы и не могут использоваться."
    ]
  },
  {
    "time": [
      697.889,
      704.51
    ],
    "en": [
      "Therefore, the actual range of VLANs that can be used is 1 to 4094."
    ],
    "ru": [
      "Следовательно, фактический диапазон используемых VLAN составляет от 1 до 4094."
    ]
  },
  {
    "time": [
      704.51,
      709.47
    ],
    "en": [
      "By the way, Cisco’s proprietary ISL, which is an alternative protocol for VLAN tagging"
    ],
    "ru": [
      "Кстати, проприетарный ISL Cisco, альтернативный протокол для тегирования VLAN."
    ]
  },
  {
    "time": [
      709.47,
      715.889
    ],
    "en": [
      "over trunk connections, also uses a VLAN range of 1 to 4094."
    ],
    "ru": [
      "по магистральным соединениям также использует диапазон VLAN от 1 до 4094."
    ]
  },
  {
    "time": [
      715.889,
      720.36
    ],
    "en": [
      "As I mentioned before, however, you don’t really need to know ISL, it’s almost been"
    ],
    "ru": [
      "Однако, как я упоминал ранее, вам не обязательно знать ISL, это почти"
    ]
  },
  {
    "time": [
      720.36,
      724.399
    ],
    "en": [
      "completely replaced by the industry standard dot1q."
    ],
    "ru": [
      "полностью заменен на отраслевой стандарт dot1q."
    ]
  },
  {
    "time": [
      724.399,
      729.0
    ],
    "en": [
      "So, those are the fields of the dot1q tag."
    ],
    "ru": [
      "Итак, это поля тега dot1q."
    ]
  },
  {
    "time": [
      729.0,
      735.089
    ],
    "en": [
      "Take a look at this diagram, do you remember the names of each section and their basic function?"
    ],
    "ru": [
      "Взгляните на эту диаграмму, вы помните названия каждой секции и их основную функцию?"
    ]
  },
  {
    "time": [
      735.089,
      739.449
    ],
    "en": [
      "function? If you want to read a little bit about dot1q, I recommend checking out the wikipedia page"
    ],
    "ru": [
      "функция? Если вы хотите немного почитать о dot1q, я рекомендую заглянуть на страницу википедии."
    ]
  },
  {
    "time": [
      739.449,
      741.97
    ],
    "en": [
      "for a solid overview of it."
    ],
    "ru": [
      "для прочного обзора."
    ]
  },
  {
    "time": [
      741.97,
      746.899
    ],
    "en": [
      "Okay let me talk about the VLAN ranges a little bit more."
    ],
    "ru": [
      "Хорошо, позвольте мне поговорить о диапазонах VLAN немного подробнее."
    ]
  },
  {
    "time": [
      746.899,
      753.86
    ],
    "en": [
      "The range of VLANs, which as I mentioned is 1 to 4094, is divided into two sections."
    ],
    "ru": [
      "Диапазон VLAN, который, как я уже упоминал, составляет от 1 до 4094, разделен на две части."
    ]
  },
  {
    "time": [
      753.86,
      761.05
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
      753.86,
      761.05
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
      761.05,
      764.97
    ],
    "en": [
      "from 1006 to 4094."
    ],
    "ru": [
      "с 1006 по 4094."
    ]
  },
  {
    "time": [
      764.97,
      769.92
    ],
    "en": [
      "Some older devices cannot use the extended VLAN range, however it’s safe to expect"
    ],
    "ru": [
      "Некоторые старые устройства не могут использовать расширенный диапазон VLAN, однако можно с уверенностью ожидать"
    ]
  },
  {
    "time": [
      769.92,
      773.519
    ],
    "en": [
      "that modern switches will support the extended VLAN range."
    ],
    "ru": [
      "что современные коммутаторы будут поддерживать расширенный диапазон VLAN."
    ]
  },
  {
    "time": [
      773.519,
      778.269
    ],
    "en": [
      "I work with Cisco switches a lot in my job, and I’ve never encountered a switch that"
    ],
    "ru": [
      "Я много работаю с коммутаторами Cisco в своей работе, и я никогда не встречал коммутаторов, которые"
    ]
  },
  {
    "time": [
      778.269,
      783.11
    ],
    "en": [
      "doesn’t support the entire range, from 1 to 4094."
    ],
    "ru": [
      "не поддерживает весь диапазон от 1 до 4094."
    ]
  },
  {
    "time": [
      783.11,
      787.76
    ],
    "en": [
      "Just be aware that some older switches might not support the extended range."
    ],
    "ru": [
      "Просто имейте в виду, что некоторые старые коммутаторы могут не поддерживать расширенный диапазон."
    ]
  },
  {
    "time": [
      787.76,
      792.44
    ],
    "en": [
      "Okay, so let’s look at this diagram once again."
    ],
    "ru": [
      "Хорошо, давайте еще раз взглянем на эту диаграмму."
    ]
  },
  {
    "time": [
      792.44,
      798.829
    ],
    "en": [
      "So, this PC in VLAN10 wants to send traffic to this other PC in VLAN10."
    ],
    "ru": [
      "Итак, этот ПК в VLAN10 хочет отправить трафик на этот другой ПК в VLAN10."
    ]
  },
  {
    "time": [
      798.829,
      804.22
    ],
    "en": [
      "The traffic goes to SW2, which then forwards it to SW1, with a tag indicating that the"
    ],
    "ru": [
      "Трафик идет к SW2, который затем перенаправляет его к SW1 с тегом, указывающим, что"
    ]
  },
  {
    "time": [
      804.22,
      806.519
    ],
    "en": [
      "traffic belongs to VLAN10."
    ],
    "ru": [
      "трафик принадлежит VLAN10."
    ]
  },
  {
    "time": [
      806.519,
      814.31
    ],
    "en": [
      "SW1 receives the frame, and because the destination is also in VLAN10, it will forward the traffic to the destination."
    ],
    "ru": [
      "SW1 принимает фрейм, и, поскольку пункт назначения также находится в VLAN10, он перенаправляет трафик в пункт назначения."
    ]
  },
  {
    "time": [
      814.31,
      820.25
    ],
    "en": [
      "to the destination. Remember, a standard layer 2 switch like this will only forward traffic in the same VLAN,"
    ],
    "ru": [
      "к месту назначения. Помните, что стандартный коммутатор уровня 2, подобный этому, будет пересылать трафик только в той же VLAN,"
    ]
  },
  {
    "time": [
      820.25,
      825.97
    ],
    "en": [
      "it will not forward traffic between VLANs."
    ],
    "ru": [
      "он не будет пересылать трафик между VLAN."
    ]
  },
  {
    "time": [
      825.97,
      828.87
    ],
    "en": [
      "Let me introduce another concept of dot1q."
    ],
    "ru": [
      "Позвольте мне представить еще одну концепцию dot1q."
    ]
  },
  {
    "time": [
      828.87,
      832.439
    ],
    "en": [
      "Dot1q has a feature called the NATIVE VLAN."
    ],
    "ru": [
      "Dot1q имеет функцию, называемую ИСХОДНОЙ VLAN."
    ]
  },
  {
    "time": [
      832.439,
      836.939
    ],
    "en": [
      "Cisco’s ISL does not have this feature, by the way."
    ],
    "ru": [
      "Между прочим, Cisco ISL не имеет этой функции."
    ]
  },
  {
    "time": [
      836.939,
      842.56
    ],
    "en": [
      "The native VLAN is VLAN 1 by default on all trunk ports, however this can be manually"
    ],
    "ru": [
      "Собственная VLAN - это VLAN 1 по умолчанию на всех магистральных портах, однако это можно сделать вручную."
    ]
  },
  {
    "time": [
      842.56,
      844.05
    ],
    "en": [
      "configured on each trunk port."
    ],
    "ru": [
      "настроен на каждом магистральном порту."
    ]
  },
  {
    "time": [
      844.05,
      848.949
    ],
    "en": [
      "It’s important to remember that this has to be configured on each trunk port separately, it’s not"
    ],
    "ru": [
      "Важно помнить, что это нужно настраивать для каждого магистрального порта отдельно, это не"
    ]
  },
  {
    "time": [
      848.949,
      851.589
    ],
    "en": [
      "a global configuration on the switch."
    ],
    "ru": [
      "глобальная конфигурация на коммутаторе."
    ]
  },
  {
    "time": [
      851.589,
      855.66
    ],
    "en": [
      "Now, what exactly does the native VLAN do?"
    ],
    "ru": [
      "Теперь, что именно делает собственная VLAN?"
    ]
  },
  {
    "time": [
      855.66,
      860.86
    ],
    "en": [
      "The switch does not add an 802.1Q tag to frames in the native VLAN."
    ],
    "ru": [
      "Коммутатор не добавляет тег 802.1Q к кадрам в собственной VLAN."
    ]
  },
  {
    "time": [
      860.86,
      865.069
    ],
    "en": [
      "It will forward the frame normally, without adding the dot1q tag to it."
    ],
    "ru": [
      "Он будет пересылать кадр в обычном режиме, без добавления к нему тега dot1q."
    ]
  },
  {
    "time": [
      865.069,
      871.25
    ],
    "en": [
      "So, what does the receiving switch do when it receives this untagged frame on a trunk port?"
    ],
    "ru": [
      "Итак, что делает принимающий коммутатор, когда он получает этот немаркированный кадр на магистральный порт?"
    ]
  },
  {
    "time": [
      871.25,
      875.449
    ],
    "en": [
      "port? When a switch receives an untagged frame on a trunk port, it assumes the frame belongs"
    ],
    "ru": [
      "порт? Когда коммутатор получает нетегированный кадр на магистральный порт, он предполагает, что этот кадр принадлежит"
    ]
  },
  {
    "time": [
      875.449,
      876.73
    ],
    "en": [
      "to the native VLAN."
    ],
    "ru": [
      "к собственной VLAN."
    ]
  },
  {
    "time": [
      876.73,
      881.68
    ],
    "en": [
      "So, it’s very important that the native VLAN matches between switches!"
    ],
    "ru": [
      "Поэтому очень важно, чтобы собственная VLAN соответствовала коммутаторам!"
    ]
  },
  {
    "time": [
      881.68,
      888.2090000000001
    ],
    "en": [
      "Switches will still forward traffic if there is a native VLAN mismatch, but problems may occur."
    ],
    "ru": [
      "Коммутаторы по-прежнему будут пересылать трафик, если есть несоответствие собственной VLAN, но могут возникнуть проблемы."
    ]
  },
  {
    "time": [
      888.2090000000001,
      891.43
    ],
    "en": [
      "occur. Let’s look at an example."
    ],
    "ru": [
      "происходить. Давайте посмотрим на пример."
    ]
  },
  {
    "time": [
      891.43,
      895.54
    ],
    "en": [
      "This time, let’s say I’ve configured the native VLAN to be VLAN10 on the trunk link"
    ],
    "ru": [
      "На этот раз предположим, что я настроил собственную VLAN как VLAN10 на магистральном канале."
    ]
  },
  {
    "time": [
      895.54,
      897.93
    ],
    "en": [
      "between SW1 and SW2."
    ],
    "ru": [
      "между SW1 и SW2."
    ]
  },
  {
    "time": [
      897.93,
      901.51
    ],
    "en": [
      "Let’s follow some traffic on the same path as usual."
    ],
    "ru": [
      "Давайте продолжим движение по тому же маршруту, как обычно."
    ]
  },
  {
    "time": [
      901.51,
      905.999
    ],
    "en": [
      "This PC sends the traffic to SW2."
    ],
    "ru": [
      "Этот компьютер отправляет трафик в SW2."
    ]
  },
  {
    "time": [
      905.999,
      911.49
    ],
    "en": [
      "It will send the traffic to SW1, but because it is in the native VLAN, VLAN10, it won’t"
    ],
    "ru": [
      "Он будет отправлять трафик в SW1, но поскольку он находится в собственной VLAN, VLAN10, он не будет"
    ]
  },
  {
    "time": [
      911.49,
      914.54
    ],
    "en": [
      "tag it as being in VLAN10."
    ],
    "ru": [
      "пометьте его как находящееся в VLAN10."
    ]
  },
  {
    "time": [
      914.54,
      920.25
    ],
    "en": [
      "The untagged frame arrives at SW1, which assumes that the traffic belongs to VLAN10, so it"
    ],
    "ru": [
      "Нетегированный кадр поступает в SW1, который предполагает, что трафик принадлежит VLAN10, поэтому он"
    ]
  },
  {
    "time": [
      920.25,
      923.8389999999999
    ],
    "en": [
      "forwards it to the destination."
    ],
    "ru": [
      "пересылает его к месту назначения."
    ]
  },
  {
    "time": [
      923.8389999999999,
      928.58
    ],
    "en": [
      "This time, let’s look at if there is a native VLAN mismatch configuration."
    ],
    "ru": [
      "На этот раз давайте посмотрим, есть ли несоответствие конфигурации собственной VLAN."
    ]
  },
  {
    "time": [
      928.58,
      933.3389999999999
    ],
    "en": [
      "On SW2’s interface I’ve configured VLAN10 as the native VLAN."
    ],
    "ru": [
      "На интерфейсе SW2 я настроил VLAN10 как собственный VLAN."
    ]
  },
  {
    "time": [
      933.3389999999999,
      939.259
    ],
    "en": [
      "However, on SW1’s interface I’ve configured VLAN30 as the native VLAN."
    ],
    "ru": [
      "Однако на интерфейсе SW1 я настроил VLAN30 как собственный VLAN."
    ]
  },
  {
    "time": [
      939.259,
      941.99
    ],
    "en": [
      "Let’s see what happens."
    ],
    "ru": [
      "Давай посмотрим что происходит."
    ]
  },
  {
    "time": [
      941.99,
      945.5
    ],
    "en": [
      "Up to the point the traffic reaches SW1, it’s the same."
    ],
    "ru": [
      "До точки, когда трафик достигает SW1, это то же самое."
    ]
  },
  {
    "time": [
      945.5,
      950.22
    ],
    "en": [
      "However, when SW1 receives the frame this is what it will think."
    ],
    "ru": [
      "Однако когда SW1 получает кадр, он подумает именно об этом."
    ]
  },
  {
    "time": [
      950.22,
      951.92
    ],
    "en": [
      "This frame has no VLAN tag."
    ],
    "ru": [
      "Этот кадр не имеет тега VLAN."
    ]
  },
  {
    "time": [
      951.92,
      954.47
    ],
    "en": [
      "Therefore, it must belong to VLAN30."
    ],
    "ru": [
      "Следовательно, он должен принадлежать VLAN30."
    ]
  },
  {
    "time": [
      954.47,
      957.899
    ],
    "en": [
      "But, the destination is in VLAN10, not VLAN30."
    ],
    "ru": [
      "Но пункт назначения находится в VLAN10, а не в VLAN30."
    ]
  },
  {
    "time": [
      957.899,
      960.069
    ],
    "en": [
      "So, I won’t forward the frame."
    ],
    "ru": [
      "Итак, я не буду пересылать фрейм."
    ]
  },
  {
    "time": [
      960.069,
      966.29
    ],
    "en": [
      "So, I think you can see why it is important that the native VLAN configuration matches between switches."
    ],
    "ru": [
      "Итак, я думаю, вы понимаете, почему важно, чтобы конфигурация собственной VLAN соответствовала коммутаторам."
    ]
  },
  {
    "time": [
      966.29,
      971.72
    ],
    "en": [
      "between switches. Let’s look at another reason why it’s important for the native VLANs to match."
    ],
    "ru": [
      "между переключателями. Давайте рассмотрим еще одну причину, по которой важно, чтобы собственные сети VLAN совпадали."
    ]
  },
  {
    "time": [
      971.72,
      978.029
    ],
    "en": [
      "This time, this PC in VLAN10 wants to reach this PC in VLAN30."
    ],
    "ru": [
      "На этот раз этот ПК в VLAN10 хочет подключиться к этому ПК в VLAN30."
    ]
  },
  {
    "time": [
      978.029,
      984.309
    ],
    "en": [
      "The PC sends the frame to SW2, which forwards it to SW1 with a tag of VLAN30, since it’s"
    ],
    "ru": [
      "ПК отправляет кадр в SW2, который пересылает его в SW1 с тегом VLAN30, поскольку он"
    ]
  },
  {
    "time": [
      984.309,
      987.23
    ],
    "en": [
      "not the native VLAN of SW2."
    ],
    "ru": [
      "не родной VLAN SW2."
    ]
  },
  {
    "time": [
      987.23,
      991.649
    ],
    "en": [
      "However, VLAN30 is the native VLAN of SW1."
    ],
    "ru": [
      "Однако VLAN30 является собственной VLAN SW1."
    ]
  },
  {
    "time": [
      991.649,
      996.68
    ],
    "en": [
      "When this frame tagged with VLAN30 arrives, it will simply discard the frame, and will"
    ],
    "ru": [
      "Когда приходит этот фрейм с тегом VLAN30, он просто отбрасывает фрейм и"
    ]
  },
  {
    "time": [
      996.68,
      999.62
    ],
    "en": [
      "not forward it to the destination."
    ],
    "ru": [
      "не пересылать его по назначению."
    ]
  },
  {
    "time": [
      999.62,
      1004.58
    ],
    "en": [
      "Because it expects all traffic in VLAN 30 to be untagged on the trunk interface, it"
    ],
    "ru": [
      "Поскольку ожидается, что весь трафик в VLAN 30 не будет помечен на магистральном интерфейсе, он"
    ]
  },
  {
    "time": [
      1004.58,
      1008.69
    ],
    "en": [
      "will consider the frame to be an error, and not forward it."
    ],
    "ru": [
      "будет рассматривать кадр как ошибку и не пересылать его."
    ]
  },
  {
    "time": [
      1008.69,
      1012.86
    ],
    "en": [
      "So once again, make sure the native VLAN matches on each switch!"
    ],
    "ru": [
      "Итак, еще раз убедитесь, что собственная VLAN соответствует на каждом коммутаторе!"
    ]
  },
  {
    "time": [
      1012.86,
      1017.48
    ],
    "en": [
      "Okay, let’s finally get into the configuration of trunk ports."
    ],
    "ru": [
      "Итак, давайте, наконец, перейдем к настройке магистральных портов."
    ]
  },
  {
    "time": [
      1017.48,
      1021.939
    ],
    "en": [
      "I’ve added the interface numbers to the diagram to make it easier to understand."
    ],
    "ru": [
      "Я добавил номера интерфейсов на диаграмму, чтобы облегчить понимание."
    ]
  },
  {
    "time": [
      1021.939,
      1031.14
    ],
    "en": [
      "So, we will be configuring G0/0 on SW1, and G0/0 and G0/1 on SW2 as trunk ports."
    ],
    "ru": [
      "Итак, мы настроим G0 / 0 на SW1 и G0 / 0 и G0 / 1 на SW2 в качестве магистральных портов."
    ]
  },
  {
    "time": [
      1031.14,
      1035.91
    ],
    "en": [
      "Let’s go on SW1 first."
    ],
    "ru": [
      "Давайте сначала займемся SW1."
    ]
  },
  {
    "time": [
      1035.91,
      1042.95
    ],
    "en": [
      "First let’s look at the most basic trunk configuration, manually configuring the interface as a trunk."
    ],
    "ru": [
      "Сначала давайте рассмотрим самую базовую конфигурацию магистрали, вручную настроив интерфейс как магистраль."
    ]
  },
  {
    "time": [
      1042.95,
      1048.81
    ],
    "en": [
      "as a trunk. After entering interface configuration mode, use this command, SWITCHPORT MODE TRUNK to"
    ],
    "ru": [
      "как багажник. После входа в режим настройки интерфейса используйте эту команду SWITCHPORT MODE TRUNK для"
    ]
  },
  {
    "time": [
      1048.81,
      1051.9
    ],
    "en": [
      "manually configure the interface as a trunk."
    ],
    "ru": [
      "вручную настроить интерфейс как транк."
    ]
  },
  {
    "time": [
      1051.9,
      1055.99
    ],
    "en": [
      "However, in this case we got an error message."
    ],
    "ru": [
      "Однако в этом случае мы получили сообщение об ошибке."
    ]
  },
  {
    "time": [
      1055.99,
      1062.63
    ],
    "en": [
      "Command rejected, an interface whose trunk encapsulation is ‘AUTO’ can not be configured to ‘trunk’ mode."
    ],
    "ru": [
      "Команда отклонена, интерфейс с инкапсуляцией магистрали «АВТО» не может быть настроен на режим «магистрали»."
    ]
  },
  {
    "time": [
      1062.63,
      1064.65
    ],
    "en": [
      "to ‘trunk’ mode. This is a little tricky."
    ],
    "ru": [
      "в «магистральный» режим. Это немного сложно."
    ]
  },
  {
    "time": [
      1064.65,
      1068.22
    ],
    "en": [
      "Many modern switches do not support Cisco’s ISL at all."
    ],
    "ru": [
      "Многие современные коммутаторы вообще не поддерживают Cisco ISL."
    ]
  },
  {
    "time": [
      1068.22,
      1071.13
    ],
    "en": [
      "They only support dot1q."
    ],
    "ru": [
      "Они поддерживают только dot1q."
    ]
  },
  {
    "time": [
      1071.13,
      1078.85
    ],
    "en": [
      "Even though ISL is a proprietary Cisco protocol, even Cisco switches are moving toward supporting only dot1q."
    ],
    "ru": [
      "Несмотря на то, что ISL является проприетарным протоколом Cisco, даже коммутаторы Cisco движутся в сторону поддержки только dot1q."
    ]
  },
  {
    "time": [
      1078.85,
      1084.83
    ],
    "en": [
      "only dot1q. However, switches that do support both dot1q and ISL (like the one I’m using in this"
    ],
    "ru": [
      "только dot1q. Однако коммутаторы, которые поддерживают как dot1q, так и ISL (например, тот, который я использую в этом"
    ]
  },
  {
    "time": [
      1084.83,
      1089.62
    ],
    "en": [
      "example) have a trunk encapsulation of ‘Auto’ by default."
    ],
    "ru": [
      "пример) по умолчанию имеет инкапсуляцию магистрали «Авто»."
    ]
  },
  {
    "time": [
      1089.62,
      1095.4
    ],
    "en": [
      "To manually configure the interface as a trunk port, you must first set the encapsulation"
    ],
    "ru": [
      "Чтобы вручную настроить интерфейс как магистральный порт, необходимо сначала установить инкапсуляцию."
    ]
  },
  {
    "time": [
      1095.4,
      1098.9
    ],
    "en": [
      "to 802.1Q or ISL."
    ],
    "ru": [
      "к 802.1Q или ISL."
    ]
  },
  {
    "time": [
      1098.9,
      1104.54
    ],
    "en": [
      "On switches that only support dot1q, this is not necessary."
    ],
    "ru": [
      "На коммутаторах, которые поддерживают только dot1q, в этом нет необходимости."
    ]
  },
  {
    "time": [
      1104.54,
      1108.76
    ],
    "en": [
      "After you set the encapsulation type, you can then configure the interface as a trunk."
    ],
    "ru": [
      "После установки типа инкапсуляции вы можете настроить интерфейс как магистральный."
    ]
  },
  {
    "time": [
      1108.76,
      1112.55
    ],
    "en": [
      "So, let’s see how to set the encapsulation type."
    ],
    "ru": [
      "Итак, давайте посмотрим, как установить тип инкапсуляции."
    ]
  },
  {
    "time": [
      1112.55,
      1117.28
    ],
    "en": [
      "You use the SWITCHPORT TRUNK ENCAPSULATION command."
    ],
    "ru": [
      "Используйте команду SWITCHPORT TRUNK ENCAPSULATION."
    ]
  },
  {
    "time": [
      1117.28,
      1120.31
    ],
    "en": [
      "I used the question mark to see the options."
    ],
    "ru": [
      "Я использовал вопросительный знак, чтобы увидеть варианты."
    ]
  },
  {
    "time": [
      1120.31,
      1124.2
    ],
    "en": [
      "There are dot1q, isl, and negotiate."
    ],
    "ru": [
      "Есть dot1q, isl иgotiate."
    ]
  },
  {
    "time": [
      1124.2,
      1127.65
    ],
    "en": [
      "Negotiate sets it to AUTO mode, so we cant choose that."
    ],
    "ru": [
      "Negotiate устанавливает его в режим AUTO, поэтому мы не можем его выбрать."
    ]
  },
  {
    "time": [
      1127.65,
      1132.5
    ],
    "en": [
      "I will talk more about AUTO mode in the next lecture video, by the way, so if you have"
    ],
    "ru": [
      "Я, кстати, подробнее расскажу о режиме АВТО в следующем видео лекции, так что если у вас есть"
    ]
  },
  {
    "time": [
      1132.5,
      1134.78
    ],
    "en": [
      "questions I will answer them there."
    ],
    "ru": [
      "вопросы я отвечу на них там."
    ]
  },
  {
    "time": [
      1134.78,
      1142.41
    ],
    "en": [
      "I set the encapsulation to dot1q, and then this time the SWITCHPORT MODE TRUNK command is accepted."
    ],
    "ru": [
      "Я установил инкапсуляцию на dot1q, а затем на этот раз принята команда SWITCHPORT MODE TRUNK."
    ]
  },
  {
    "time": [
      1142.41,
      1148.05
    ],
    "en": [
      "is accepted. On switches that only support dot1q, you will ONLY need the switchport mode trunk command,"
    ],
    "ru": [
      "принято. На коммутаторах, которые поддерживают только dot1q, вам понадобится ТОЛЬКО команда магистрали режима switchport,"
    ]
  },
  {
    "time": [
      1148.05,
      1153.66
    ],
    "en": [
      "but on some switches you will need to set the encapsulation first."
    ],
    "ru": [
      "но на некоторых коммутаторах вам нужно сначала установить инкапсуляцию."
    ]
  },
  {
    "time": [
      1153.66,
      1158.19
    ],
    "en": [
      "I used the SHOW INTERFACES TRUNK command to confirm."
    ],
    "ru": [
      "Я использовал команду SHOW INTERFACES TRUNK для подтверждения."
    ]
  },
  {
    "time": [
      1158.19,
      1161.52
    ],
    "en": [
      "First up, the trunk interfaces are listed here."
    ],
    "ru": [
      "Прежде всего, здесь перечислены магистральные интерфейсы."
    ]
  },
  {
    "time": [
      1161.52,
      1166.2
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
      1161.52,
      1166.2
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
      1166.2,
      1170.95
    ],
    "en": [
      "In the next lecture we will look at how a port can automatically become a trunk without"
    ],
    "ru": [
      "В следующей лекции мы рассмотрим, как порт может автоматически стать транком без"
    ]
  },
  {
    "time": [
      1170.95,
      1174.39
    ],
    "en": [
      "configuration, but we’ll forget about that for the moment."
    ],
    "ru": [
      "конфигурации, но мы пока забудем об этом."
    ]
  },
  {
    "time": [
      1174.39,
      1180.71
    ],
    "en": [
      "Encapsulation is dot1q as we configured, status is trunking, and the native VLAN, which I"
    ],
    "ru": [
      "Инкапсуляция - dot1q, как мы настроили, статус - транкинг, и собственная VLAN, которую я"
    ]
  },
  {
    "time": [
      1180.71,
      1184.62
    ],
    "en": [
      "mentioned before, is the default of 1."
    ],
    "ru": [
      "упоминалось ранее, по умолчанию - 1."
    ]
  },
  {
    "time": [
      1184.62,
      1188.3
    ],
    "en": [
      "Under that, the VLANs allowed on the trunk are displayed."
    ],
    "ru": [
      "Под ним отображаются VLAN, разрешенные на магистрали."
    ]
  },
  {
    "time": [
      1188.3,
      1193.77
    ],
    "en": [
      "By the default, ALL VLANs, 1 to 4094, are allowed on the trunk."
    ],
    "ru": [
      "По умолчанию ВСЕ VLAN, от 1 до 4094, разрешены на магистрали."
    ]
  },
  {
    "time": [
      1193.77,
      1198.55
    ],
    "en": [
      "However, for security purposes, we might want to limit which VLANs can be forwarded on the"
    ],
    "ru": [
      "Однако в целях безопасности мы можем ограничить количество виртуальных локальных сетей, которые могут перенаправляться на"
    ]
  },
  {
    "time": [
      1198.55,
      1203.33
    ],
    "en": [
      "trunk, so we’ll look at that configuration next."
    ],
    "ru": [
      "магистраль, поэтому мы рассмотрим эту конфигурацию дальше."
    ]
  },
  {
    "time": [
      1203.33,
      1207.93
    ],
    "en": [
      "Next up is VLANs allowed and active in management domain."
    ],
    "ru": [
      "Далее следует разрешенные и активные VLAN в домене управления."
    ]
  },
  {
    "time": [
      1207.93,
      1215.3
    ],
    "en": [
      "This includes the default VLAN of 1, as well as VLANs 10 and 30, which I already configured on this switch."
    ],
    "ru": [
      "Это включает в себя VLAN по умолчанию 1, а также VLAN 10 и 30, которые я уже настроил на этом коммутаторе."
    ]
  },
  {
    "time": [
      1215.3,
      1222.59
    ],
    "en": [
      "on this switch. Note that, although VLAN1, which exists by default, appears here, VLANs 1002 to 1005,"
    ],
    "ru": [
      "на этом переключателе. Обратите внимание, что, хотя VLAN1, которая существует по умолчанию, отображается здесь, VLAN с 1002 по 1005,"
    ]
  },
  {
    "time": [
      1222.59,
      1226.22
    ],
    "en": [
      "which I showed you in the previous lecture video, do not."
    ],
    "ru": [
      "который я показал вам в предыдущем видео лекции, нет."
    ]
  },
  {
    "time": [
      1226.22,
      1231.93
    ],
    "en": [
      "As I mentioned before, don’t worry about those VLANs, they’re not really used in modern networks."
    ],
    "ru": [
      "Как я упоминал ранее, не беспокойтесь об этих VLAN, они на самом деле не используются в современных сетях."
    ]
  },
  {
    "time": [
      1231.93,
      1237.04
    ],
    "en": [
      "modern networks. The last field of the SHOW INTERFACES TRUNK command is ‘Vlans in spanning tree forwarding"
    ],
    "ru": [
      "современные сети. Последнее поле команды SHOW INTERFACES TRUNK - «Vlan в перенаправлении связующего дерева»."
    ]
  },
  {
    "time": [
      1237.04,
      1239.17
    ],
    "en": [
      "state and not pruned’."
    ],
    "ru": [
      "состояние, а не обрезка »."
    ]
  },
  {
    "time": [
      1239.17,
      1246.95
    ],
    "en": [
      "I’ll talk about this in a future lecture, we don’t know about spanning tree and VLAN pruning yet."
    ],
    "ru": [
      "Я расскажу об этом в следующей лекции, мы еще не знаем о связующем дереве и сокращении VLAN."
    ]
  },
  {
    "time": [
      1246.95,
      1251.06
    ],
    "en": [
      "pruning yet. Here is the command to configure the VLANs allowed on a trunk."
    ],
    "ru": [
      "обрезки пока нет. Вот команда для настройки VLAN, разрешенных на магистрали."
    ]
  },
  {
    "time": [
      1251.06,
      1255.64
    ],
    "en": [
      "SWITCHPORT TRUNK ALLOWED VLAN, and then there are some options."
    ],
    "ru": [
      "SWITCHPORT TRUNK ALLOWED VLAN, а затем есть несколько вариантов."
    ]
  },
  {
    "time": [
      1255.64,
      1259.25
    ],
    "en": [
      "WORD allows you to simply configure the list of VLANs allowed."
    ],
    "ru": [
      "WORD позволяет вам просто настроить список разрешенных VLAN."
    ]
  },
  {
    "time": [
      1259.25,
      1261.58
    ],
    "en": [
      "Let’s see how that works."
    ],
    "ru": [
      "Посмотрим, как это работает."
    ]
  },
  {
    "time": [
      1261.58,
      1268.52
    ],
    "en": [
      "So, I used the command SWITCHPORT TRUNK ALLOWED VLAN 10 comma 30."
    ],
    "ru": [
      "Итак, я использовал команду SWITCHPORT TRUNK ALLOWED VLAN 10 comma 30."
    ]
  },
  {
    "time": [
      1268.52,
      1276.72
    ],
    "en": [
      "Notice that the SHOW INTERFACES TRUNK command now only shows VLANs 10 and 30 as being allowed on the trunk."
    ],
    "ru": [
      "Обратите внимание, что команда SHOW INTERFACES TRUNK теперь показывает только VLAN 10 и 30 как разрешенные на магистрали."
    ]
  },
  {
    "time": [
      1276.72,
      1279.61
    ],
    "en": [
      "on the trunk. Now let’s take a look at the ADD option."
    ],
    "ru": [
      "на багажнике. Теперь давайте посмотрим на опцию ДОБАВИТЬ."
    ]
  },
  {
    "time": [
      1279.61,
      1283.55
    ],
    "en": [
      "This allows you to add allowed VLANs to the currently existing list."
    ],
    "ru": [
      "Это позволяет добавлять разрешенные VLAN в существующий в настоящее время список."
    ]
  },
  {
    "time": [
      1283.55,
      1289.86
    ],
    "en": [
      "Currently VLANs 10 and 30 are allowed, let’s say I also want to add 20, even though no"
    ],
    "ru": [
      "В настоящее время разрешены VLAN 10 и 30, скажем, я хочу добавить еще 20, хотя"
    ]
  },
  {
    "time": [
      1289.86,
      1293.99
    ],
    "en": [
      "hosts in VLAN20 are connected to SW1."
    ],
    "ru": [
      "хосты в VLAN20 подключены к SW1."
    ]
  },
  {
    "time": [
      1293.99,
      1299.69
    ],
    "en": [
      "This time I used the command SWITCHPORT TRUNK ALLOWED VLAN ADD 20."
    ],
    "ru": [
      "На этот раз я использовал команду SWITCHPORT TRUNK ALLOWED VLAN ADD 20."
    ]
  },
  {
    "time": [
      1299.69,
      1305.59
    ],
    "en": [
      "The SHOW INTERFACES TRUNK command now shows vlans 10,20, and 30 as allowed, so 20 was"
    ],
    "ru": [
      "Команда SHOW INTERFACES TRUNK теперь показывает vlans 10, 20 и 30 как разрешенные, поэтому 20 было"
    ]
  },
  {
    "time": [
      1305.59,
      1308.2
    ],
    "en": [
      "added to the list."
    ],
    "ru": [
      "добавлен в список."
    ]
  },
  {
    "time": [
      1308.2,
      1313.49
    ],
    "en": [
      "Note that, because I haven’t actually created VLAN20 on this switch, VLAN20 still isn’t"
    ],
    "ru": [
      "Обратите внимание, что, поскольку я фактически не создал VLAN20 на этом коммутаторе, VLAN20 все еще не"
    ]
  },
  {
    "time": [
      1313.49,
      1319.25
    ],
    "en": [
      "displayed in the VLANs allowed and active in management domain section."
    ],
    "ru": [
      "отображается в разрешенных и активных VLAN в разделе домена управления."
    ]
  },
  {
    "time": [
      1319.25,
      1322.2
    ],
    "en": [
      "Next up I’ll show you the ‘remove’ option."
    ],
    "ru": [
      "Далее я покажу вам вариант «удалить»."
    ]
  },
  {
    "time": [
      1322.2,
      1326.55
    ],
    "en": [
      "VLAN20 isn’t necessary on this trunk, so let’s remove it."
    ],
    "ru": [
      "VLAN20 не нужен на этом транке, поэтому давайте его удалим."
    ]
  },
  {
    "time": [
      1326.55,
      1331.29
    ],
    "en": [
      "I used the command SWITCHPORT TRUNK ALLOWED VLAN REMOVE 20."
    ],
    "ru": [
      "Я использовал команду SWITCHPORT TRUNK ALLOWED VLAN REMOVE 20."
    ]
  },
  {
    "time": [
      1331.29,
      1337.0
    ],
    "en": [
      "Now, as you can see, VLAN20 has been removed from the list of allowed VLANs, leaving only"
    ],
    "ru": [
      "Теперь, как видите, VLAN20 удален из списка разрешенных VLAN, оставив только"
    ]
  },
  {
    "time": [
      1337.0,
      1341.15
    ],
    "en": [
      "VLANs 10 and 30."
    ],
    "ru": [
      "VLAN 10 и 30."
    ]
  },
  {
    "time": [
      1341.15,
      1343.17
    ],
    "en": [
      "Next up lets look at the ALL option."
    ],
    "ru": [
      "Далее давайте посмотрим на вариант ВСЕ."
    ]
  },
  {
    "time": [
      1343.17,
      1348.21
    ],
    "en": [
      "I think this one is fairly obvious, but lets take a look anyway."
    ],
    "ru": [
      "Я думаю, что это довольно очевидно, но давайте все равно взглянем."
    ]
  },
  {
    "time": [
      1348.21,
      1352.84
    ],
    "en": [
      "This time I used the command SWITCHPORT TRUNK ALLOWED VLAN ALL."
    ],
    "ru": [
      "На этот раз я использовал команду SWITCHPORT TRUNK ALLOWED VLAN ALL."
    ]
  },
  {
    "time": [
      1352.84,
      1355.59
    ],
    "en": [
      "Now all VLANs are allowed on the trunk."
    ],
    "ru": [
      "Теперь все VLAN разрешены на магистрали."
    ]
  },
  {
    "time": [
      1355.59,
      1361.86
    ],
    "en": [
      "This is the same as the default state, as all VLANs are allowed by default."
    ],
    "ru": [
      "Это то же самое, что и состояние по умолчанию, поскольку все VLAN разрешены по умолчанию."
    ]
  },
  {
    "time": [
      1361.86,
      1364.72
    ],
    "en": [
      "Next up lets look at the EXCEPT option."
    ],
    "ru": [
      "Далее давайте посмотрим на опцию EXCEPT."
    ]
  },
  {
    "time": [
      1364.72,
      1367.79
    ],
    "en": [
      "It allows all VLANS except the ones you specify."
    ],
    "ru": [
      "Он разрешает все VLANS, кроме указанных вами."
    ]
  },
  {
    "time": [
      1367.79,
      1371.34
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
      1371.34,
      1378.73
    ],
    "en": [
      "I used the command SWITCHPORT TRUNK ALLOWED VLAN EXCEPT 1 to 5, comma 10."
    ],
    "ru": [
      "Я использовал команду SWITCHPORT TRUNK ALLOWED VLAN EXCEPT 1-5, запятую 10."
    ]
  },
  {
    "time": [
      1378.73,
      1388.42
    ],
    "en": [
      "As you can see it allows all VLANs except those, so 6 to 9, and 11 to 4094…"
    ],
    "ru": [
      "Как видите, он разрешает все VLAN, кроме этих, так что с 6 по 9 и с 11 по 4094…"
    ]
  },
  {
    "time": [
      1388.42,
      1395.52
    ],
    "en": [
      "Okay, finally let’s look at the NONE option, which is also pretty easy to understand."
    ],
    "ru": [
      "Хорошо, давайте, наконец, рассмотрим вариант NONE, который тоже довольно легко понять."
    ]
  },
  {
    "time": [
      1395.52,
      1401.84
    ],
    "en": [
      "This time I used the command SWITCHPORT TRUNK ALLOWED VLAN NONE, and as you can see no VLANs"
    ],
    "ru": [
      "На этот раз я использовал команду SWITCHPORT TRUNK ALLOWED VLAN NONE, и, как вы можете видеть, нет VLAN."
    ]
  },
  {
    "time": [
      1401.84,
      1403.78
    ],
    "en": [
      "are allowed on the trunk."
    ],
    "ru": [
      "разрешены на стволе."
    ]
  },
  {
    "time": [
      1403.78,
      1408.19
    ],
    "en": [
      "This effectively allows no traffic to pass over the trunk, so now let’s do the actual"
    ],
    "ru": [
      "Это фактически не позволяет трафику проходить по магистрали, так что теперь давайте займемся фактическим"
    ]
  },
  {
    "time": [
      1408.19,
      1411.0
    ],
    "en": [
      "settings we want for this network."
    ],
    "ru": [
      "настройки, которые мы хотим для этой сети."
    ]
  },
  {
    "time": [
      1411.0,
      1413.42
    ],
    "en": [
      "Here’s the diagram once more."
    ],
    "ru": [
      "Вот еще раз диаграмма."
    ]
  },
  {
    "time": [
      1413.42,
      1417.95
    ],
    "en": [
      "SW1 has hosts in VLAN 10 and VLAN 30 connected to it."
    ],
    "ru": [
      "SW1 имеет хосты в VLAN 10 и VLAN 30, подключенные к нему."
    ]
  },
  {
    "time": [
      1417.95,
      1424.01
    ],
    "en": [
      "No hosts in VLAN20 are connected, so there’s no need to allow VLAN20 on the trunk between SW1 and SW2."
    ],
    "ru": [
      "Хосты в VLAN20 не подключены, поэтому нет необходимости разрешать VLAN20 на магистрали между SW1 и SW2."
    ]
  },
  {
    "time": [
      1424.01,
      1429.36
    ],
    "en": [
      "SW1 and SW2. So, let’s set the allowed VLANs to 10 and 30 like we did before."
    ],
    "ru": [
      "SW1 и SW2. Итак, давайте установим разрешенные VLAN на 10 и 30, как мы делали раньше."
    ]
  },
  {
    "time": [
      1429.36,
      1432.49
    ],
    "en": [
      "Okay, there we go."
    ],
    "ru": [
      "Хорошо, поехали."
    ]
  },
  {
    "time": [
      1432.49,
      1436.64
    ],
    "en": [
      "Now the only VLANs allowed on the trunk are VLANs 10 and 30."
    ],
    "ru": [
      "Теперь на магистрали разрешены только VLAN 10 и 30."
    ]
  },
  {
    "time": [
      1436.64,
      1441.5
    ],
    "en": [
      "The reason to do this is for security purposes, to make sure only traffic in the necessary"
    ],
    "ru": [
      "Причина в том, чтобы сделать это в целях безопасности, чтобы убедиться, что трафик только в необходимых"
    ]
  },
  {
    "time": [
      1441.5,
      1443.84
    ],
    "en": [
      "VLANs can use that connection."
    ],
    "ru": [
      "Сети VLAN могут использовать это соединение."
    ]
  },
  {
    "time": [
      1443.84,
      1449.95
    ],
    "en": [
      "Also, for network performance purposes, this avoids unncessary traffic, because broadcasts"
    ],
    "ru": [
      "Кроме того, для повышения производительности сети это позволяет избежать лишнего трафика, поскольку широковещательные передачи"
    ]
  },
  {
    "time": [
      1449.95,
      1453.55
    ],
    "en": [
      "and such in other VLANs won’t be sent over the trunk."
    ],
    "ru": [
      "и такое в других VLAN не будет передаваться по магистрали."
    ]
  },
  {
    "time": [
      1453.55,
      1457.92
    ],
    "en": [
      "Now, I said I’d show you how to change the native VLAN."
    ],
    "ru": [
      "Я сказал, что покажу вам, как изменить собственный VLAN."
    ]
  },
  {
    "time": [
      1457.92,
      1463.96
    ],
    "en": [
      "For security purposes, it is best to change the native VLAN to an unused VLAN."
    ],
    "ru": [
      "В целях безопасности лучше заменить собственную виртуальную локальную сеть на неиспользуемую."
    ]
  },
  {
    "time": [
      1463.96,
      1468.03
    ],
    "en": [
      "Network security will be explained more in-depth later in the course."
    ],
    "ru": [
      "Сетевая безопасность будет объяснена более подробно позже в этом курсе."
    ]
  },
  {
    "time": [
      1468.03,
      1472.6
    ],
    "en": [
      "This video is already getting long so I won’t explain the detailed reasons, but again it’s"
    ],
    "ru": [
      "Это видео уже набирает обороты, поэтому я не буду подробно объяснять причины, но, опять же, это"
    ]
  },
  {
    "time": [
      1472.6,
      1478.02
    ],
    "en": [
      "about limiting unnecessary traffic in the network, and controlling what traffic is allowed."
    ],
    "ru": [
      "об ограничении ненужного трафика в сети и контроле разрешенного трафика."
    ]
  },
  {
    "time": [
      1478.02,
      1482.99
    ],
    "en": [
      "Also, remember to make the native VLAN match between switches."
    ],
    "ru": [
      "Кроме того, не забудьте сопоставить собственные VLAN между коммутаторами."
    ]
  },
  {
    "time": [
      1482.99,
      1486.65
    ],
    "en": [
      "Now let’s look at how to change the native VLAN."
    ],
    "ru": [
      "Теперь давайте посмотрим, как изменить собственный VLAN."
    ]
  },
  {
    "time": [
      1486.65,
      1493.47
    ],
    "en": [
      "The command to change the native VLAN is SWITCHPORT TRUNK NATIVE VLAN, followed by the VLAN number."
    ],
    "ru": [
      "Команда для изменения собственной VLAN - это SWITCHPORT TRUNK NATIVE VLAN, за которым следует номер VLAN."
    ]
  },
  {
    "time": [
      1493.47,
      1496.95
    ],
    "en": [
      "I chose an unused VLAN, 1001."
    ],
    "ru": [
      "Я выбрал неиспользуемый VLAN, 1001."
    ]
  },
  {
    "time": [
      1496.95,
      1504.2
    ],
    "en": [
      "As you can see, the native VLAN has now been changed to 1001."
    ],
    "ru": [
      "Как видите, собственная VLAN теперь изменена на 1001."
    ]
  },
  {
    "time": [
      1504.2,
      1508.82
    ],
    "en": [
      "After configuring this trunk port, I did the SHOW VLAN BRIEF command."
    ],
    "ru": [
      "После настройки этого транкового порта я выполнил команду SHOW VLAN BRIEF."
    ]
  },
  {
    "time": [
      1508.82,
      1514.68
    ],
    "en": [
      "Notice that G0/0 is not listed anywhere. Not in VLAN10 or VLAN30,"
    ],
    "ru": [
      "Обратите внимание, что G0 / 0 нигде не указан. Не в VLAN10 или VLAN30,"
    ]
  },
  {
    "time": [
      1514.68,
      1518.42
    ],
    "en": [
      "even though those are the VLANs allowed on the trunk."
    ],
    "ru": [
      "даже если это те VLAN, разрешенные на магистрали."
    ]
  },
  {
    "time": [
      1518.42,
      1524.3
    ],
    "en": [
      "This is because the SHOW VLAN BRIEF command shows the access ports assigned to each VLAN,"
    ],
    "ru": [
      "Это связано с тем, что команда SHOW VLAN BRIEF показывает порты доступа, назначенные каждой VLAN,"
    ]
  },
  {
    "time": [
      1524.3,
      1526.92
    ],
    "en": [
      "not the trunk ports that allow each VLAN."
    ],
    "ru": [
      "не магистральные порты, которые разрешают каждую VLAN."
    ]
  },
  {
    "time": [
      1526.92,
      1532.36
    ],
    "en": [
      "Use the SHOW INTERFACES TRUNK command instead to confirm trunk ports."
    ],
    "ru": [
      "Вместо этого используйте команду SHOW INTERFACES TRUNK для подтверждения портов магистрали."
    ]
  },
  {
    "time": [
      1532.36,
      1536.8
    ],
    "en": [
      "Now that we’ve seen the configurations on SW1, I’ll quickly do the configurations"
    ],
    "ru": [
      "Теперь, когда мы ознакомились с настройками SW1, я быстро выполню настройки."
    ]
  },
  {
    "time": [
      1536.8,
      1539.45
    ],
    "en": [
      "on SW2 as well."
    ],
    "ru": [
      "на SW2 тоже."
    ]
  },
  {
    "time": [
      1539.45,
      1545.14
    ],
    "en": [
      "On SW2’s G0/0 interface, we must allow VLANs 10 and 30."
    ],
    "ru": [
      "На интерфейсе G0 / 0 SW2 мы должны разрешить VLAN 10 и 30."
    ]
  },
  {
    "time": [
      1545.14,
      1551.5
    ],
    "en": [
      "On SW2’s G0/1 interface, however, we must allow VLAN 20 as well."
    ],
    "ru": [
      "Однако на интерфейсе G0 / 1 SW2 мы также должны разрешить VLAN 20."
    ]
  },
  {
    "time": [
      1551.5,
      1558.2
    ],
    "en": [
      "Here are the configurations for SW2’s G0/0 interface, the interface connected to SW1."
    ],
    "ru": [
      "Вот конфигурации для интерфейса G0 / 0 SW2, интерфейса, подключенного к SW1."
    ]
  },
  {
    "time": [
      1558.2,
      1562.02
    ],
    "en": [
      "These are the same as before, so I won’t go through each one."
    ],
    "ru": [
      "Они такие же, как и раньше, поэтому я не буду подробно останавливаться на каждом из них."
    ]
  },
  {
    "time": [
      1562.02,
      1566.5
    ],
    "en": [
      "You can pause the video if you want to take a look at them to review."
    ],
    "ru": [
      "Вы можете приостановить видео, если хотите просмотреть их для просмотра."
    ]
  },
  {
    "time": [
      1566.5,
      1570.44
    ],
    "en": [
      "Now let’s move on to G0/1, which is connected to R1."
    ],
    "ru": [
      "Теперь перейдем к G0 / 1, который подключен к R1."
    ]
  },
  {
    "time": [
      1570.44,
      1573.72
    ],
    "en": [
      "Okay, here are the configurations."
    ],
    "ru": [
      "Хорошо, вот конфигурации."
    ]
  },
  {
    "time": [
      1573.72,
      1580.55
    ],
    "en": [
      "Almost identical to G0/0, except I allowed VLAN20 in addition to VLAN 10 and 30."
    ],
    "ru": [
      "Практически идентичен G0 / 0, за исключением того, что я разрешил VLAN20 в дополнение к VLAN 10 и 30."
    ]
  },
  {
    "time": [
      1580.55,
      1587.26
    ],
    "en": [
      "Now, both G0/0 and G0/1 are displayed in the output of the SHOW INTERFACES TRUNK command."
    ],
    "ru": [
      "Теперь и G0 / 0, и G0 / 1 отображаются в выводе команды SHOW INTERFACES TRUNK."
    ]
  },
  {
    "time": [
      1587.26,
      1592.38
    ],
    "en": [
      "So, that’s all for the switch configurations for this lesson."
    ],
    "ru": [
      "Итак, это все, что касается конфигураций коммутаторов для этого урока."
    ]
  },
  {
    "time": [
      1592.38,
      1595.66
    ],
    "en": [
      "However, you may be wondering about the router."
    ],
    "ru": [
      "Однако вам может быть интересно узнать о маршрутизаторе."
    ]
  },
  {
    "time": [
      1595.66,
      1600.1
    ],
    "en": [
      "In the previous lecture, we used three separate interfaces for the connection from SW2 to"
    ],
    "ru": [
      "В предыдущей лекции мы использовали три отдельных интерфейса для подключения SW2 к"
    ]
  },
  {
    "time": [
      1600.1,
      1605.79
    ],
    "en": [
      "R1, and assigned a separate IP address to each one on R1."
    ],
    "ru": [
      "R1, и каждому на R1 назначен отдельный IP-адрес."
    ]
  },
  {
    "time": [
      1605.79,
      1610.32
    ],
    "en": [
      "Each one served as the default gateway address for the PCs in each VLAN."
    ],
    "ru": [
      "Каждый из них служил адресом шлюза по умолчанию для ПК в каждой VLAN."
    ]
  },
  {
    "time": [
      1610.32,
      1615.02
    ],
    "en": [
      "However, now we are using only one physical connection between the two devices."
    ],
    "ru": [
      "Однако сейчас мы используем только одно физическое соединение между двумя устройствами."
    ]
  },
  {
    "time": [
      1615.02,
      1618.79
    ],
    "en": [
      "So, we must use ‘subinterfaces’ on R1."
    ],
    "ru": [
      "Итак, мы должны использовать «субинтерфейсы» на R1."
    ]
  },
  {
    "time": [
      1618.79,
      1621.96
    ],
    "en": [
      "Let’s take a look."
    ],
    "ru": [
      "Давайте взглянем."
    ]
  },
  {
    "time": [
      1621.96,
      1625.25
    ],
    "en": [
      "First of all, look at the title of the slide."
    ],
    "ru": [
      "Прежде всего, посмотрите на заголовок слайда."
    ]
  },
  {
    "time": [
      1625.25,
      1628.57
    ],
    "en": [
      "ROUTER ON A STICK, also written as ROAS."
    ],
    "ru": [
      "МАРШРУТИЗАТОР НА ПАЛКЕ, также обозначаемый как ROAS."
    ]
  },
  {
    "time": [
      1628.57,
      1633.5
    ],
    "en": [
      "It’s a bit of a strange name, but it’s the name used for this method of inter-VLAN"
    ],
    "ru": [
      "Это немного странное имя, но именно оно используется для этого метода межсетевого взаимодействия VLAN."
    ]
  },
  {
    "time": [
      1633.5,
      1638.46
    ],
    "en": [
      "routing, as there is only a single physical interface connecting the router and the switch,"
    ],
    "ru": [
      "маршрутизация, поскольку существует только один физический интерфейс, соединяющий маршрутизатор и коммутатор,"
    ]
  },
  {
    "time": [
      1638.46,
      1642.19
    ],
    "en": [
      "and it looks like a ‘stick’ on the network topology diagram."
    ],
    "ru": [
      "и это выглядит как «палка» на схеме топологии сети."
    ]
  },
  {
    "time": [
      1642.19,
      1649.52
    ],
    "en": [
      "So, in this case that one physical interface being used on R1 to connect to SW2 is G0/0."
    ],
    "ru": [
      "Итак, в этом случае один физический интерфейс, используемый на R1 для подключения к SW2, - это G0 / 0."
    ]
  },
  {
    "time": [
      1649.52,
      1653.08
    ],
    "en": [
      "It’s connected to G0/1 on SW2."
    ],
    "ru": [
      "Он подключен к G0 / 1 на SW2."
    ]
  },
  {
    "time": [
      1653.08,
      1659.54
    ],
    "en": [
      "But, we can actually divide this one physical interface into three separate subinterfaces,"
    ],
    "ru": [
      "Но на самом деле мы можем разделить этот физический интерфейс на три отдельных подинтерфейса,"
    ]
  },
  {
    "time": [
      1659.54,
      1664.5
    ],
    "en": [
      "which will allow us to perform inter-VLAN routing with only one physical interface."
    ],
    "ru": [
      "что позволит нам выполнять маршрутизацию между VLAN только с одним физическим интерфейсом."
    ]
  },
  {
    "time": [
      1664.5,
      1667.68
    ],
    "en": [
      "So, it would look like this."
    ],
    "ru": [
      "Итак, это будет выглядеть так."
    ]
  },
  {
    "time": [
      1667.68,
      1678.5
    ],
    "en": [
      "G0/0.10 for VLAN10, G0/0.20 for VLAN20, and G0/0.30 for VLAN30."
    ],
    "ru": [
      "G0 / 0.10 для VLAN10, G0 / 0.20 для VLAN20 и G0 / 0.30 для VLAN30."
    ]
  },
  {
    "time": [
      1678.5,
      1684.51
    ],
    "en": [
      "These three logical subinterfaces are really one physical interface, G0/0 which is connected"
    ],
    "ru": [
      "Эти три логических подинтерфейса на самом деле являются одним физическим интерфейсом G0 / 0, который подключен"
    ]
  },
  {
    "time": [
      1684.51,
      1691.86
    ],
    "en": [
      "to SW2’s G0/1 interface, but they can operate like three separate interfaces."
    ],
    "ru": [
      "к интерфейсу G0 / 1 SW2, но они могут работать как три отдельных интерфейса."
    ]
  },
  {
    "time": [
      1691.86,
      1698.81
    ],
    "en": [
      "Before we look at the router configurations, note that we don’t need to do any additional configurations on SW2."
    ],
    "ru": [
      "Прежде чем мы рассмотрим конфигурации маршрутизатора, обратите внимание, что нам не нужно делать никаких дополнительных настроек на SW2."
    ]
  },
  {
    "time": [
      1698.81,
      1705.19
    ],
    "en": [
      "configurations on SW2. We already configured G0/1 as a trunk, and made sure that VLANs 10, 20, and 30 are allowed."
    ],
    "ru": [
      "конфигурации на SW2. Мы уже настроили G0 / 1 как магистраль и убедились, что разрешены VLAN 10, 20 и 30."
    ]
  },
  {
    "time": [
      1705.19,
      1711.23
    ],
    "en": [
      "That’s all you need to do on the switch, configure the interface like a regular trunk."
    ],
    "ru": [
      "Это все, что вам нужно сделать на коммутаторе, настроить интерфейс как обычный транк."
    ]
  },
  {
    "time": [
      1711.23,
      1715.71
    ],
    "en": [
      "Now let’s look at the router configurations."
    ],
    "ru": [
      "Теперь давайте посмотрим на конфигурации маршрутизатора."
    ]
  },
  {
    "time": [
      1715.71,
      1717.33
    ],
    "en": [
      "Here are the configurations."
    ],
    "ru": [
      "Вот конфигурации."
    ]
  },
  {
    "time": [
      1717.33,
      1723.08
    ],
    "en": [
      "First, make sure the interface is enabled with ‘no shutdown’, as router interfaces"
    ],
    "ru": [
      "Во-первых, убедитесь, что интерфейс включен без выключения, так как интерфейсы маршрутизатора"
    ]
  },
  {
    "time": [
      1723.08,
      1726.06
    ],
    "en": [
      "are disabled by default."
    ],
    "ru": [
      "по умолчанию отключены."
    ]
  },
  {
    "time": [
      1726.06,
      1728.7
    ],
    "en": [
      "Next up is the first subinterface."
    ],
    "ru": [
      "Далее идет первый подинтерфейс."
    ]
  },
  {
    "time": [
      1728.7,
      1732.79
    ],
    "en": [
      "Notice how to enter subinterface configuration mode."
    ],
    "ru": [
      "Обратите внимание, как войти в режим конфигурации подинтерфейса."
    ]
  },
  {
    "time": [
      1732.79,
      1736.41
    ],
    "en": [
      "Interface g0/0 DOT 10."
    ],
    "ru": [
      "Интерфейс g0 / 0 DOT 10."
    ]
  },
  {
    "time": [
      1736.41,
      1740.86
    ],
    "en": [
      "This subinterface number does not have to match the VLAN number."
    ],
    "ru": [
      "Этот номер субинтерфейса не обязательно должен совпадать с номером VLAN."
    ]
  },
  {
    "time": [
      1740.86,
      1746.23
    ],
    "en": [
      "However it is highly recommended that they do match, to make it easier to understand."
    ],
    "ru": [
      "Однако настоятельно рекомендуется, чтобы они совпадали, чтобы облегчить понимание."
    ]
  },
  {
    "time": [
      1746.23,
      1751.4
    ],
    "en": [
      "If each subinterface’s number matches the VLAN number, it’s easy to see which subinterface"
    ],
    "ru": [
      "Если номер каждого субинтерфейса совпадает с номером VLAN, легко увидеть, какой субинтерфейс"
    ]
  },
  {
    "time": [
      1751.4,
      1754.69
    ],
    "en": [
      "is used for each VLAN."
    ],
    "ru": [
      "используется для каждой VLAN."
    ]
  },
  {
    "time": [
      1754.69,
      1760.27
    ],
    "en": [
      "The next command after that is ENCAPSULATION DOT1Q, followed by the VLAN number, which"
    ],
    "ru": [
      "Следующая команда после этого - ENCAPSULATION DOT1Q, за которой следует номер VLAN, который"
    ]
  },
  {
    "time": [
      1760.27,
      1762.54
    ],
    "en": [
      "is 10 in this case."
    ],
    "ru": [
      "в данном случае равно 10."
    ]
  },
  {
    "time": [
      1762.54,
      1767.76
    ],
    "en": [
      "This tells the router to treat any arriving frames tagged with the specified VLAN number"
    ],
    "ru": [
      "Это указывает маршрутизатору обрабатывать любые поступающие кадры, помеченные указанным номером VLAN."
    ]
  },
  {
    "time": [
      1767.76,
      1771.39
    ],
    "en": [
      "as if they arrived on this sub interface."
    ],
    "ru": [
      "как если бы они прибыли на этот вспомогательный интерфейс."
    ]
  },
  {
    "time": [
      1771.39,
      1779.62
    ],
    "en": [
      "If a frame arrives tagged with VLAN10, R1 will behave as if it arrived on interface G0/0.10."
    ],
    "ru": [
      "Если приходит кадр с тегом VLAN10, R1 будет вести себя так, как если бы он прибыл на интерфейс G0 / 0.10."
    ]
  },
  {
    "time": [
      1779.62,
      1785.51
    ],
    "en": [
      "G0/0.10. It will also tag all frames leaving this subinterface with VLAN10 using dot1q."
    ],
    "ru": [
      "G0 / 0.10. Он также пометит все кадры, покидающие этот подинтерфейс, с помощью VLAN10, используя dot1q."
    ]
  },
  {
    "time": [
      1785.51,
      1793.64
    ],
    "en": [
      "Finally, after the encapsulation dot1q command, simply assign the IP address to the subinterface."
    ],
    "ru": [
      "Наконец, после команды encapsulation dot1q просто назначьте IP-адрес субинтерфейсу."
    ]
  },
  {
    "time": [
      1793.64,
      1796.87
    ],
    "en": [
      "Once again, I have assigned the last usable address of the subnet."
    ],
    "ru": [
      "Я снова назначил последний пригодный для использования адрес подсети."
    ]
  },
  {
    "time": [
      1796.87,
      1800.53
    ],
    "en": [
      "And that’s all for this subinterface."
    ],
    "ru": [
      "И это все, что касается подинтерфейса."
    ]
  },
  {
    "time": [
      1800.53,
      1803.79
    ],
    "en": [
      "Then I did the same thing with the other two subinterfaces."
    ],
    "ru": [
      "Затем я проделал то же самое с двумя другими субинтерфейсами."
    ]
  },
  {
    "time": [
      1803.79,
      1809.96
    ],
    "en": [
      "Again, I made the subinterface and VLAN numbers match, and configured the last usable IP address"
    ],
    "ru": [
      "Опять же, я сделал совпадение номеров субинтерфейса и VLAN и настроил последний используемый IP-адрес."
    ]
  },
  {
    "time": [
      1809.96,
      1815.37
    ],
    "en": [
      "of each subnet as the IP address of the subinterface."
    ],
    "ru": [
      "каждой подсети как IP-адрес подинтерфейса."
    ]
  },
  {
    "time": [
      1815.37,
      1820.01
    ],
    "en": [
      "If you confirm with the SHOW IP INTERFACE BRIEF command, you can see that each of the"
    ],
    "ru": [
      "Если вы подтвердите с помощью команды SHOW IP INTERFACE BRIEF, вы увидите, что каждый из"
    ]
  },
  {
    "time": [
      1820.01,
      1825.22
    ],
    "en": [
      "subinterfaces appears, as well as the physical interface, although the physical interface"
    ],
    "ru": [
      "появляются субинтерфейсы, а также физический интерфейс, хотя физический интерфейс"
    ]
  },
  {
    "time": [
      1825.22,
      1829.56
    ],
    "en": [
      "itself has no IP address assigned to it."
    ],
    "ru": [
      "сам по себе не имеет назначенного IP-адреса."
    ]
  },
  {
    "time": [
      1829.56,
      1831.92
    ],
    "en": [
      "And here is the routing table."
    ],
    "ru": [
      "А вот и таблица маршрутизации."
    ]
  },
  {
    "time": [
      1831.92,
      1836.02
    ],
    "en": [
      "Notice the connected and local routes are added just like when IP addresses are added"
    ],
    "ru": [
      "Обратите внимание, что подключенный и локальный маршруты добавляются так же, как и при добавлении IP-адресов."
    ]
  },
  {
    "time": [
      1836.02,
      1839.15
    ],
    "en": [
      "to regular physical interfaces."
    ],
    "ru": [
      "к обычным физическим интерфейсам."
    ]
  },
  {
    "time": [
      1839.15,
      1846.6
    ],
    "en": [
      "When R1 sends frames out of these subinterfaces, it adds the VLAN tag configured on the subinterface."
    ],
    "ru": [
      "Когда R1 отправляет кадры из этих субинтерфейсов, он добавляет тег VLAN, настроенный на субинтерфейсе."
    ]
  },
  {
    "time": [
      1846.6,
      1854.22
    ],
    "en": [
      "For example, if a packet arrives destined for the 192.168.1.64/26 subnet, it will send"
    ],
    "ru": [
      "Например, если приходит пакет, предназначенный для подсети 192.168.1.64/26, он отправит"
    ]
  },
  {
    "time": [
      1854.22,
      1858.6
    ],
    "en": [
      "the packet out of it’s G0/0 interface tagged with VLAN20."
    ],
    "ru": [
      "пакет из интерфейса G0 / 0 с тегом VLAN20."
    ]
  },
  {
    "time": [
      1858.6,
      1864.82
    ],
    "en": [
      "Okay, let’s review the important points about router on a stick."
    ],
    "ru": [
      "Хорошо, давайте рассмотрим важные моменты, касающиеся маршрутизатора на флешке."
    ]
  },
  {
    "time": [
      1864.82,
      1872.18
    ],
    "en": [
      "ROAS is used to route between multiple VLANs using a single interface on the router and switch."
    ],
    "ru": [
      "ROAS используется для маршрутизации между несколькими VLAN с использованием единого интерфейса на маршрутизаторе и коммутаторе."
    ]
  },
  {
    "time": [
      1872.18,
      1876.13
    ],
    "en": [
      "switch. The switch interface is configured as a regular trunk."
    ],
    "ru": [
      "выключатель. Интерфейс коммутатора настроен как обычный транк."
    ]
  },
  {
    "time": [
      1876.13,
      1879.83
    ],
    "en": [
      "The router interface is configured using subinterfaces."
    ],
    "ru": [
      "Интерфейс маршрутизатора настраивается с помощью подинтерфейсов."
    ]
  },
  {
    "time": [
      1879.83,
      1885.07
    ],
    "en": [
      "You configure the VLAN tag and IP address on each subinterface."
    ],
    "ru": [
      "Вы настраиваете тег VLAN и IP-адрес на каждом подинтерфейсе."
    ]
  },
  {
    "time": [
      1885.07,
      1889.77
    ],
    "en": [
      "The router will behave as if frames arriving with a certain VLAN tag have arrived on the"
    ],
    "ru": [
      "Маршрутизатор будет вести себя так, как будто кадры, поступающие с определенным тегом VLAN, прибыли на"
    ]
  },
  {
    "time": [
      1889.77,
      1892.99
    ],
    "en": [
      "subinterface configured with that VLAN tag."
    ],
    "ru": [
      "подинтерфейс, настроенный с помощью этого тега VLAN."
    ]
  },
  {
    "time": [
      1892.99,
      1902.25
    ],
    "en": [
      "Finally, the router will tag frames sent out of each subinterface with the VLAN tag configured on the subinterface."
    ],
    "ru": [
      "Наконец, маршрутизатор пометит кадры, отправленные из каждого подинтерфейса, с помощью тега VLAN, настроенного на подинтерфейсе."
    ]
  },
  {
    "time": [
      1902.25,
      1906.32
    ],
    "en": [
      "on the subinterface. Now that we have configured the router, let’s return to this diagram to see how interVLAN"
    ],
    "ru": [
      "на субинтерфейсе. Теперь, когда мы настроили маршрутизатор, давайте вернемся к этой диаграмме, чтобы увидеть, как interVLAN"
    ]
  },
  {
    "time": [
      1906.32,
      1910.06
    ],
    "en": [
      "routing works with these subinterfaces."
    ],
    "ru": [
      "маршрутизация работает с этими подынтерфейсами."
    ]
  },
  {
    "time": [
      1910.06,
      1915.77
    ],
    "en": [
      "This PC in VLAN10 is trying to reach this PC in VLAN30."
    ],
    "ru": [
      "Этот ПК в VLAN10 пытается связаться с этим ПК в VLAN30."
    ]
  },
  {
    "time": [
      1915.77,
      1918.06
    ],
    "en": [
      "The frame is sent to SW2."
    ],
    "ru": [
      "Кадр отправляется в SW2."
    ]
  },
  {
    "time": [
      1918.06,
      1924.81
    ],
    "en": [
      "SW2 sends the frame on its G0/1 interface to R1, tagging it as being in VLAN10."
    ],
    "ru": [
      "SW2 отправляет кадр на своем интерфейсе G0 / 1 на R1, помечая его как находящийся в VLAN10."
    ]
  },
  {
    "time": [
      1924.81,
      1932.88
    ],
    "en": [
      "R1 receives it on its G0/0 interface, identifying it as arriving on the G0/0.10 subinterface"
    ],
    "ru": [
      "R1 получает его на свой интерфейс G0 / 0, идентифицируя его как поступивший на субинтерфейс G0 / 0.10."
    ]
  },
  {
    "time": [
      1932.88,
      1935.91
    ],
    "en": [
      "because of the VLAN10 tag."
    ],
    "ru": [
      "из-за тега VLAN10."
    ]
  },
  {
    "time": [
      1935.91,
      1947.12
    ],
    "en": [
      "The destination is in the subnet 192.168.1.128/26, which is connected to R1’s G0/0.30 subinterface,"
    ],
    "ru": [
      "Пункт назначения находится в подсети 192.168.1.128/26, которая подключена к субинтерфейсу G0 / 0.30 маршрутизатора R1,"
    ]
  },
  {
    "time": [
      1947.12,
      1951.07
    ],
    "en": [
      "so it sends the frame out of its G0/0 interface."
    ],
    "ru": [
      "поэтому он отправляет кадр из своего интерфейса G0 / 0."
    ]
  },
  {
    "time": [
      1951.07,
      1957.12
    ],
    "en": [
      "It tags it as VLAN30 because that is what was configured on the G0/0.30 subinterface."
    ],
    "ru": [
      "Он помечает его как VLAN30, потому что это то, что было настроено на подинтерфейсе G0 / 0.30."
    ]
  },
  {
    "time": [
      1957.12,
      1962.49
    ],
    "en": [
      "SW2 then forwards it to SW1, tagging it as VLAN30 over the trunk."
    ],
    "ru": [
      "Затем SW2 пересылает его на SW1, помечая его как VLAN30 по магистрали."
    ]
  },
  {
    "time": [
      1962.49,
      1965.53
    ],
    "en": [
      "SW1 then forwards the frame to the destination."
    ],
    "ru": [
      "Затем SW1 пересылает кадр по назначению."
    ]
  },
  {
    "time": [
      1965.53,
      1970.45
    ],
    "en": [
      "Okay, let’s quickly review before moving on to today’s quiz."
    ],
    "ru": [
      "Хорошо, давайте быстро рассмотрим, прежде чем перейти к сегодняшней викторине."
    ]
  },
  {
    "time": [
      1970.45,
      1976.34
    ],
    "en": [
      "I think I say this after every video these days, but there was a lot of information in this video."
    ],
    "ru": [
      "Думаю, в наши дни я говорю это после каждого видео, но в этом видео было много информации."
    ]
  },
  {
    "time": [
      1976.34,
      1981.09
    ],
    "en": [
      "this video. Please rewatch certain parts of the video if you need to, and use the supplementary"
    ],
    "ru": [
      "это видео. Пожалуйста, пересмотрите определенные части видео, если вам нужно, и используйте дополнительные"
    ]
  },
  {
    "time": [
      1981.09,
      1985.25
    ],
    "en": [
      "materials to help you practice and review as well."
    ],
    "ru": [
      "материалы, которые помогут вам попрактиковаться и повторить."
    ]
  },
  {
    "time": [
      1985.25,
      1989.03
    ],
    "en": [
      "First off, we answered the question WHAT IS A TRUNK PORT?"
    ],
    "ru": [
      "Прежде всего, мы ответили на вопрос, ЧТО ТАКОЕ ПОРТ БАГАЖНИКА?"
    ]
  },
  {
    "time": [
      1989.03,
      1994.6
    ],
    "en": [
      "It’s a switch interface that carries traffic over multiple VLANs."
    ],
    "ru": [
      "Это интерфейс коммутатора, который передает трафик по нескольким VLAN."
    ]
  },
  {
    "time": [
      1994.6,
      1997.81
    ],
    "en": [
      "We also answered what the purpose of a trunk port is."
    ],
    "ru": [
      "Мы также ответили, для чего нужен магистральный порт."
    ]
  },
  {
    "time": [
      1997.81,
      2003.11
    ],
    "en": [
      "It allows switches to forward traffic from multiple VLANs over a single physical interface,"
    ],
    "ru": [
      "Это позволяет коммутаторам перенаправлять трафик из нескольких VLAN через один физический интерфейс,"
    ]
  },
  {
    "time": [
      2003.11,
      2007.61
    ],
    "en": [
      "instead of having to use a separate physical interface for every single VLAN."
    ],
    "ru": [
      "вместо того, чтобы использовать отдельный физический интерфейс для каждой отдельной VLAN."
    ]
  },
  {
    "time": [
      2007.61,
      2014.05
    ],
    "en": [
      "I also introduced 802.1Q encapsulation, which is a tag inserted into the Ethernet frame"
    ],
    "ru": [
      "Я также представил инкапсуляцию 802.1Q, которая представляет собой тег, вставленный в кадр Ethernet."
    ]
  },
  {
    "time": [
      2014.05,
      2019.33
    ],
    "en": [
      "and is used to identify which VLAN the frame belongs to when sent over a trunk port."
    ],
    "ru": [
      "и используется для определения, к какой VLAN принадлежит кадр при отправке через магистральный порт."
    ]
  },
  {
    "time": [
      2019.33,
      2024.63
    ],
    "en": [
      "I showed how to configure trunk ports on a Cisco switch, including the encapsulation"
    ],
    "ru": [
      "Я показал, как настроить транковые порты на коммутаторе Cisco, включая инкапсуляцию."
    ]
  },
  {
    "time": [
      2024.63,
      2027.7
    ],
    "en": [
      "type, allowed VLANs, and native VLAN."
    ],
    "ru": [
      "тип, разрешенные VLAN и собственный VLAN."
    ]
  },
  {
    "time": [
      2027.7,
      2033.21
    ],
    "en": [
      "Finally, I showed you how to configure ROUTER ON A STICK, which involves configuring multiple"
    ],
    "ru": [
      "Наконец, я показал вам, как настроить МАРШРУТИЗАТОР НА ПАЛКЕ, что включает в себя настройку нескольких"
    ]
  },
  {
    "time": [
      2033.21,
      2038.9
    ],
    "en": [
      "subinterfaces on a single physical interface, which again allows for traffic from multiple"
    ],
    "ru": [
      "подынтерфейсы на одном физическом интерфейсе, что опять же позволяет передавать трафик от нескольких"
    ]
  },
  {
    "time": [
      2038.9,
      2044.83
    ],
    "en": [
      "VLANs and subnets to be routed without having to use a separate physical interface for each one."
    ],
    "ru": [
      "Маршрутизация VLAN и подсетей без использования отдельного физического интерфейса для каждой из них."
    ]
  },
  {
    "time": [
      2044.83,
      2047.32
    ],
    "en": [
      "one. It’s like a trunk port on a router."
    ],
    "ru": [
      "один. Это как магистральный порт на маршрутизаторе."
    ]
  },
  {
    "time": [
      2047.32,
      2052.21
    ],
    "en": [
      "Finally, let’s move on to today’s quiz."
    ],
    "ru": [
      "Наконец, перейдем к сегодняшней викторине."
    ]
  },
  {
    "time": [
      2052.21,
      2054.879
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
      2054.879,
      2062.81
    ],
    "en": [
      "You want to configure SW1 to send VLAN10 frames untagged over its GigabitEthernet0/1 interface, a trunk."
    ],
    "ru": [
      "Вы хотите настроить SW1 для отправки кадров VLAN10 без тегов через его интерфейс GigabitEthernet0 / 1, транк."
    ]
  },
  {
    "time": [
      2062.81,
      2064.62
    ],
    "en": [
      "a trunk. Which command is appropriate?"
    ],
    "ru": [
      "ствол. Какая команда подходит?"
    ]
  },
  {
    "time": [
      2064.62,
      2069.379
    ],
    "en": [
      "A, encapsulaton dot1q 10."
    ],
    "ru": [
      "А, инкапсуляция dot1q 10."
    ]
  },
  {
    "time": [
      2069.379,
      2073.86
    ],
    "en": [
      "B, switchport trunk allowed vlan 10."
    ],
    "ru": [
      "B, транк switchport разрешен vlan 10."
    ]
  },
  {
    "time": [
      2073.86,
      2077.909
    ],
    "en": [
      "C, switchport trunk allowed vlan add 10."
    ],
    "ru": [
      "C, магистраль коммутатора позволяет добавить vlan 10."
    ]
  },
  {
    "time": [
      2077.909,
      2082.5
    ],
    "en": [
      "D, switchport trunk native vlan 10."
    ],
    "ru": [
      "D, switchport магистраль родной vlan 10."
    ]
  },
  {
    "time": [
      2082.5,
      2089.38
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
      2089.38,
      2093.659
    ],
    "en": [
      "The answer is D, switchport trunk native VLAN10."
    ],
    "ru": [
      "Ответ - D, магистральный порт коммутатора, собственный VLAN10."
    ]
  },
  {
    "time": [
      2093.659,
      2101.64
    ],
    "en": [
      "A, encapsulation dot1q 10 is used on a router subinterface to specify which VLAN it belongs to."
    ],
    "ru": [
      "A, инкапсуляция dot1q 10 используется на подинтерфейсе маршрутизатора, чтобы указать, к какой VLAN он принадлежит."
    ]
  },
  {
    "time": [
      2101.64,
      2106.07
    ],
    "en": [
      "to. B and C are used to modify the VLANs allowed on the trunk."
    ],
    "ru": [
      "к. B и C используются для изменения VLAN, разрешенных на магистрали."
    ]
  },
  {
    "time": [
      2106.07,
      2113.43
    ],
    "en": [
      "D is used to specify the native VLAN, and traffic in the native VLAN is sent untagged over the trunk."
    ],
    "ru": [
      "D используется для указания собственной VLAN, а трафик в собственной VLAN отправляется по магистрали без тегов."
    ]
  },
  {
    "time": [
      2113.43,
      2117.32
    ],
    "en": [
      "over the trunk. Next let’s go to question 2."
    ],
    "ru": [
      "над багажником. Теперь перейдем к вопросу 2."
    ]
  },
  {
    "time": [
      2117.32,
      2123.12
    ],
    "en": [
      "After modifying the VLANs allowed on a trunk interface, you want to return it to the default state."
    ],
    "ru": [
      "После изменения VLAN, разрешенных на магистральном интерфейсе, вы хотите вернуть его в состояние по умолчанию."
    ]
  },
  {
    "time": [
      2123.12,
      2125.13
    ],
    "en": [
      "state. Which command will do this?"
    ],
    "ru": [
      "штат. Какая команда это сделает?"
    ]
  },
  {
    "time": [
      2125.13,
      2129.26
    ],
    "en": [
      "A, switchport trunk allowed vlan default."
    ],
    "ru": [
      "A, транк switchport разрешен по умолчанию для vlan."
    ]
  },
  {
    "time": [
      2129.26,
      2133.87
    ],
    "en": [
      "B, switchport trunk allowed vlan all."
    ],
    "ru": [
      "B, транк switchport разрешил vlan все."
    ]
  },
  {
    "time": [
      2133.87,
      2138.47
    ],
    "en": [
      "C, switchport trunk allowed vlan none."
    ],
    "ru": [
      "C, транк коммутатора разрешен без vlan."
    ]
  },
  {
    "time": [
      2138.47,
      2145.87
    ],
    "en": [
      "Or D, switchport trunk allowed vlan 1 and 1001 to 1005."
    ],
    "ru": [
      "Или D, транк коммутатора разрешен с vlan 1 и с 1001 по 1005."
    ]
  },
  {
    "time": [
      2145.87,
      2152.5
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
      2152.5,
      2157.07
    ],
    "en": [
      "The answer is B, switchport trunk allowed VLAN all."
    ],
    "ru": [
      "Ответ - B, транк порта коммутатора разрешен всем VLAN."
    ]
  },
  {
    "time": [
      2157.07,
      2162.85
    ],
    "en": [
      "By default all VLANs are allowed on a trunk port, so switchport trunk allowed vlan all"
    ],
    "ru": [
      "По умолчанию все VLAN разрешены на магистральном порте, поэтому магистраль порта коммутатора разрешает vlan все."
    ]
  },
  {
    "time": [
      2162.85,
      2165.11
    ],
    "en": [
      "will return it to the default state."
    ],
    "ru": [
      "вернет его в состояние по умолчанию."
    ]
  },
  {
    "time": [
      2165.11,
      2171.49
    ],
    "en": [
      "Answer D, by the way, lists the VLANs that exist on a Cisco switch by default, but that’s"
    ],
    "ru": [
      "Ответ D, кстати, перечисляет VLAN, которые существуют на коммутаторе Cisco по умолчанию, но это"
    ]
  },
  {
    "time": [
      2171.49,
      2174.43
    ],
    "en": [
      "different than the VLANs allowed on a trunk by default."
    ],
    "ru": [
      "отличные от VLAN, разрешенных по умолчанию для магистрали."
    ]
  },
  {
    "time": [
      2174.43,
      2178.6
    ],
    "en": [
      "Okat, let's go to question 3."
    ],
    "ru": [
      "Хорошо, перейдем к вопросу 3."
    ]
  },
  {
    "time": [
      2178.6,
      2183.3
    ],
    "en": [
      "You try to configure an interface on a Cisco switch as a trunk port with the command switchport"
    ],
    "ru": [
      "Вы пытаетесь настроить интерфейс на коммутаторе Cisco в качестве магистрального порта с помощью команды switchport"
    ]
  },
  {
    "time": [
      2183.3,
      2187.02
    ],
    "en": [
      "mode trunk, but the command is rejected."
    ],
    "ru": [
      "режим транк, но команда отклонена."
    ]
  },
  {
    "time": [
      2187.02,
      2189.65
    ],
    "en": [
      "Which command might fix this issue?"
    ],
    "ru": [
      "Какая команда может исправить эту проблему?"
    ]
  },
  {
    "time": [
      2189.65,
      2193.36
    ],
    "en": [
      "A, switch port mode trunk."
    ],
    "ru": [
      "A, переключатель режима порта магистрали."
    ]
  },
  {
    "time": [
      2193.36,
      2199.14
    ],
    "en": [
      "B, switchport trunk encapsulation 802.1q."
    ],
    "ru": [
      "B, инкапсуляция магистрали коммутатора 802.1q."
    ]
  },
  {
    "time": [
      2199.14,
      2204.81
    ],
    "en": [
      "C, switchport trunk encapsulation dot1q."
    ],
    "ru": [
      "C, инкапсуляция магистрали коммутатора dot1q."
    ]
  },
  {
    "time": [
      2204.81,
      2209.15
    ],
    "en": [
      "Or D, switchport trunk encapsulation auto."
    ],
    "ru": [
      "Или D, автоматическая инкапсуляция магистрали коммутатора."
    ]
  },
  {
    "time": [
      2209.15,
      2215.12
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
      2215.12,
      2220.02
    ],
    "en": [
      "The answer is C, switchport trunk encapsulation dot1q."
    ],
    "ru": [
      "Ответ - C, инкапсуляция магистрали коммутатора dot1q."
    ]
  },
  {
    "time": [
      2220.02,
      2226.481
    ],
    "en": [
      "On Cisco switches that support both 802.1Q and ISL encapsulations for trunk ports, if"
    ],
    "ru": [
      "На коммутаторах Cisco, которые поддерживают инкапсуляцию 802.1Q и ISL для магистральных портов, если"
    ]
  },
  {
    "time": [
      2226.481,
      2230.83
    ],
    "en": [
      "you want to manually configure the interface as a trunk you have to manually specify the"
    ],
    "ru": [
      "вы хотите вручную настроить интерфейс как транк, вам необходимо вручную указать"
    ]
  },
  {
    "time": [
      2230.83,
      2236.57
    ],
    "en": [
      "encapsulation type with SWITCHPORT TRUNK ENCAPSULATION DOT1Q."
    ],
    "ru": [
      "тип инкапсуляции с SWITCHPORT TRUNK ENCAPSULATION DOT1Q."
    ]
  },
  {
    "time": [
      2236.57,
      2240.74
    ],
    "en": [
      "You could use ISL instead, but ISL is almost never used."
    ],
    "ru": [
      "Вместо этого вы можете использовать ISL, но ISL почти никогда не используется."
    ]
  },
  {
    "time": [
      2240.74,
      2244.89
    ],
    "en": [
      "Okay, let’s go to question 4."
    ],
    "ru": [
      "Хорошо, перейдем к вопросу 4."
    ]
  },
  {
    "time": [
      2244.89,
      2253.21
    ],
    "en": [
      "Which field of the 802.1Q tag identifies the VLAN ID of the frame? A, TPID."
    ],
    "ru": [
      "Какое поле тега 802.1Q определяет идентификатор VLAN кадра? А, TPID."
    ]
  },
  {
    "time": [
      2253.21,
      2258.51
    ],
    "en": [
      "A, TPID. B, VID. C, TCI."
    ],
    "ru": [
      "А, TPID. B, VID. C, TCI."
    ]
  },
  {
    "time": [
      2258.51,
      2260.98
    ],
    "en": [
      "C, TCI. Or D, VLN."
    ],
    "ru": [
      "C, TCI. Или Д, ВЛН."
    ]
  },
  {
    "time": [
      2260.98,
      2266.82
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
      2266.82,
      2269.46
    ],
    "en": [
      "The answer is B, VID."
    ],
    "ru": [
      "Ответ - B, VID."
    ]
  },
  {
    "time": [
      2269.46,
      2277.46
    ],
    "en": [
      "VID stands for VLAN ID, it is 12 bits long and identifies the VLAN number."
    ],
    "ru": [
      "VID обозначает VLAN ID, он имеет длину 12 бит и определяет номер VLAN."
    ]
  },
  {
    "time": [
      2277.46,
      2285.33
    ],
    "en": [
      "TPID stands for tag protocol identifier, and uses a hexadecimal value of 8100 to identify"
    ],
    "ru": [
      "TPID означает идентификатор протокола тега и использует шестнадцатеричное значение 8100 для идентификации."
    ]
  },
  {
    "time": [
      2285.33,
      2289.27
    ],
    "en": [
      "the frame as 802.1Q-tagged."
    ],
    "ru": [
      "фрейм помечен как 802.1Q."
    ]
  },
  {
    "time": [
      2289.27,
      2296.81
    ],
    "en": [
      "PCP stands for priority code point and is used for class of service, not to tag the VLAN ID."
    ],
    "ru": [
      "PCP обозначает точку кода приоритета и используется для класса обслуживания, а не для маркировки идентификатора VLAN."
    ]
  },
  {
    "time": [
      2296.81,
      2301.72
    ],
    "en": [
      "VLAN ID. D, VLN, is not a real field of the 802.1Q tag."
    ],
    "ru": [
      "Идентификатор VLAN. D, VLN, не является реальным полем тега 802.1Q."
    ]
  },
  {
    "time": [
      2301.72,
      2307.62
    ],
    "en": [
      "Let’s go to the last question, question 5."
    ],
    "ru": [
      "Перейдем к последнему вопросу, вопросу 5."
    ]
  },
  {
    "time": [
      2307.62,
      2314.02
    ],
    "en": [
      "You configured switchport trunk allowed vlan add 10 on an interface, but VLAN10 doesn’t"
    ],
    "ru": [
      "Вы настроили магистраль коммутатора, позволяющую добавлять vlan 10 на интерфейс, но VLAN10 этого не делает."
    ]
  },
  {
    "time": [
      2314.02,
      2322.23
    ],
    "en": [
      "appear in the Vlans allowed and active in management domain section of the show interfaces trunk command output."
    ],
    "ru": [
      "появляются в разделе Vlan allowed and active in management domain выходных данных команды show interfaces trunk."
    ]
  },
  {
    "time": [
      2322.23,
      2323.53
    ],
    "en": [
      "trunk command output. What might be the reason?"
    ],
    "ru": [
      "Вывод команды магистрали. В чем может быть причина?"
    ]
  },
  {
    "time": [
      2323.53,
      2328.12
    ],
    "en": [
      "A, VLAN10 doesn’t exist on the switch."
    ],
    "ru": [
      "О: VLAN10 не существует на коммутаторе."
    ]
  },
  {
    "time": [
      2328.12,
      2331.08
    ],
    "en": [
      "B, the command is invalid."
    ],
    "ru": [
      "B, команда недействительна."
    ]
  },
  {
    "time": [
      2331.08,
      2339.62
    ],
    "en": [
      "C, the command should be switchport trunk allowed vlan 10. or D, vlan10 is reserved"
    ],
    "ru": [
      "C, команда должна быть switchport trunk allowed vlan 10. или D, vlan10 зарезервирован"
    ]
  },
  {
    "time": [
      2339.62,
      2341.9
    ],
    "en": [
      "and cannot be used."
    ],
    "ru": [
      "и не может быть использован."
    ]
  },
  {
    "time": [
      2341.9,
      2347.76
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
      2347.76,
      2352.49
    ],
    "en": [
      "The answer is A, VLAN10 doesn’t exist on the switch."
    ],
    "ru": [
      "Ответ - A, VLAN10 не существует на коммутаторе."
    ]
  },
  {
    "time": [
      2352.49,
      2357.46
    ],
    "en": [
      "If a VLAN doesn’t exist on the switch, even if it is allowed on the trunk, it won’t"
    ],
    "ru": [
      "Если на коммутаторе нет VLAN, даже если она разрешена на магистрали, она не будет"
    ]
  },
  {
    "time": [
      2357.46,
      2364.33
    ],
    "en": [
      "appear in the 'Vlans allowed and active in management domain' section of the show interfaces trunk command output."
    ],
    "ru": [
      "появляются в разделе «Vlan allowed and active in management domain» выходных данных команды show interfaces trunk."
    ]
  },
  {
    "time": [
      2364.33,
      2367.13
    ],
    "en": [
      "trunk command output. That’s all for the quiz."
    ],
    "ru": [
      "Вывод команды магистрали. Это все для викторины."
    ]
  },
  {
    "time": [
      2367.13,
      2372.59
    ],
    "en": [
      "Okay, so as always there will be supplementary materials for this video."
    ],
    "ru": [
      "Хорошо, как всегда, к этому видео будут дополнительные материалы."
    ]
  },
  {
    "time": [
      2372.59,
      2376.62
    ],
    "en": [
      "There will be flash cards to use with the software ANKI, to help you remember things"
    ],
    "ru": [
      "Будут флэш-карты для использования с программным обеспечением ANKI, чтобы помочь вам запоминать вещи."
    ]
  },
  {
    "time": [
      2376.62,
      2379.2
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
      2379.2,
      2383.5
    ],
    "en": [
      "There will also be a packet tracer practice lab so you can practice the configurations"
    ],
    "ru": [
      "Также будет практическая лаборатория пакетного трассировщика, чтобы вы могли попрактиковаться в настройках."
    ]
  },
  {
    "time": [
      2383.5,
      2385.61
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
      2385.61,
      2389.24
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
      2389.24,
      2395.79
    ],
    "en": [
      "Before finishing this video, I want to think all of my JCNP-level channel members."
    ],
    "ru": [
      "Прежде чем закончить это видео, я хочу подумать обо всех участниках моего канала уровня JCNP."
    ]
  },
  {
    "time": [
      2395.79,
      2405.5
    ],
    "en": [
      "Thank you to Charlsetta, Lito, Yonatan, Mike, Aleksander, Vance, Yousif, Samil, Boson Software,"
    ],
    "ru": [
      "Спасибо Charlsetta, Lito, Yonatan, Mike, Aleksander, Vance, Yousif, Samil, Boson Software,"
    ]
  },
  {
    "time": [
      2405.5,
      2407.95
    ],
    "en": [
      "Sidi, Magrathea, and Devin."
    ],
    "ru": [
      "Сиди, Магратея и Девин."
    ]
  },
  {
    "time": [
      2407.95,
      2414.38
    ],
    "en": [
      "Sorry if I pronounced your names incorrectly, but thank you so much for your support."
    ],
    "ru": [
      "Извините, если я неправильно произнес ваши имена, но большое спасибо за вашу поддержку."
    ]
  },
  {
    "time": [
      2414.38,
      2420.75
    ],
    "en": [
      "Extra shoutout to Boson software, I absolutely love their ExSim practice exams and NetSim"
    ],
    "ru": [
      "Дополнительный привет программному обеспечению Boson, мне очень нравятся их практические экзамены ExSim и NetSim."
    ]
  },
  {
    "time": [
      2420.75,
      2427.27
    ],
    "en": [
      "network simulator, check out the links in the video description for their products."
    ],
    "ru": [
      "сетевой симулятор, ознакомьтесь с ссылками в видео-описании их продуктов."
    ]
  },
  {
    "time": [
      2427.27,
      2428.85
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
      2428.85,
      2432.75
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
      2432.75,
      2436.1
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
      2436.1,
      2438.7
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
      2438.7,
      2446.2
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
      2446.2,
      2446.2
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]