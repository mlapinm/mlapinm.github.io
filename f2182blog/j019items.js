var objs = [
  {
    "time": [
      1.329,
      3.639
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
      3.639,
      6.87
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
      6.87,
      10.9
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
      10.9,
      16.71
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
      16.71,
      18.76
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
      18.76,
      23.57
    ],
    "en": [
      "Also, remember to download and use the Anki flashcards with the link in the description,"
    ],
    "ru": [
      "Также не забудьте загрузить и использовать карточки Anki со ссылкой в ​​описании,"
    ]
  },
  {
    "time": [
      23.57,
      28.22
    ],
    "en": [
      "which will help you very much in remembering what you have learned. Let’s get started."
    ],
    "ru": [
      "что очень поможет вам запомнить то, что вы узнали. Давайте начнем."
    ]
  },
  {
    "time": [
      28.22,
      33.94
    ],
    "en": [
      "So, Day 10’s video was quite technical, looking at the details of an IP version 4"
    ],
    "ru": [
      "Итак, видео Дня 10 было довольно техническим, рассматривая детали IP версии 4."
    ]
  },
  {
    "time": [
      33.94,
      41.38
    ],
    "en": [
      "header which is used to encapsulate a Layer 4 segment, and then is encapsulated within an Ethernet frame."
    ],
    "ru": [
      "заголовок, который используется для инкапсуляции сегмента уровня 4, а затем инкапсулируется в кадр Ethernet."
    ]
  },
  {
    "time": [
      41.38,
      48.29
    ],
    "en": [
      "In this video we’ll get a little bit more practical, and begin to see how routers forward traffic between different networks."
    ],
    "ru": [
      "В этом видео мы станем немного практичнее и начнем видеть, как маршрутизаторы пересылают трафик между разными сетями."
    ]
  },
  {
    "time": [
      48.29,
      51.58
    ],
    "en": [
      "Remember, that’s the role of a router."
    ],
    "ru": [
      "Помните, что это роль маршрутизатора."
    ]
  },
  {
    "time": [
      51.58,
      54.47
    ],
    "en": [
      "Switches forward traffic WITHIN a LAN."
    ],
    "ru": [
      "Переключает пересылку трафика ВНУТРИ ЛВС."
    ]
  },
  {
    "time": [
      54.47,
      56.699
    ],
    "en": [
      "Routers forward traffic BETWEEN LANs."
    ],
    "ru": [
      "Маршрутизаторы пересылают трафик МЕЖДУ ЛВС."
    ]
  },
  {
    "time": [
      56.699,
      60.699
    ],
    "en": [
      "So, let’s take a look at what we’ll cover in this video."
    ],
    "ru": [
      "Итак, давайте посмотрим, что мы расскажем в этом видео."
    ]
  },
  {
    "time": [
      60.699,
      64.229
    ],
    "en": [
      "We’ll cover the IP routing process."
    ],
    "ru": [
      "Мы рассмотрим процесс IP-маршрутизации."
    ]
  },
  {
    "time": [
      64.229,
      68.65
    ],
    "en": [
      "Starting from the end host that wants to send a packet to an end host in another network,"
    ],
    "ru": [
      "Начиная с конечного хоста, который хочет отправить пакет конечному хосту в другой сети,"
    ]
  },
  {
    "time": [
      68.65,
      75.49
    ],
    "en": [
      "I’ll give you an overview of the routing process, specifically as it applies to IP, the Internet Protocol."
    ],
    "ru": [
      "Я дам вам обзор процесса маршрутизации, особенно в том, что касается IP, интернет-протокола."
    ]
  },
  {
    "time": [
      75.49,
      79.83
    ],
    "en": [
      "We’ll examine the routing table on a Cisco router."
    ],
    "ru": [
      "Мы исследуем таблицу маршрутизации на маршрутизаторе Cisco."
    ]
  },
  {
    "time": [
      79.83,
      85.74
    ],
    "en": [
      "Routers keep a routing table, which stores a list of known destinations, and how to get there."
    ],
    "ru": [
      "Маршрутизаторы хранят таблицу маршрутизации, в которой хранится список известных пунктов назначения и информация о том, как туда добраться."
    ]
  },
  {
    "time": [
      85.74,
      89.95
    ],
    "en": [
      "It’s important to be very familiar with the routing table, as you’ll be using the"
    ],
    "ru": [
      "Важно хорошо знать таблицу маршрутизации, поскольку вы будете использовать"
    ]
  },
  {
    "time": [
      89.95,
      93.67
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
      89.95,
      93.67
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
      93.67,
      100.73
    ],
    "en": [
      "Also, we’ll look at how to configure static routes, which are routes you manually configure on a router."
    ],
    "ru": [
      "Кроме того, мы рассмотрим, как настроить статические маршруты, то есть маршруты, которые вы настраиваете вручную на маршрутизаторе."
    ]
  },
  {
    "time": [
      100.73,
      104.64
    ],
    "en": [
      "Here’s the network topology we’ll be using in this video."
    ],
    "ru": [
      "Вот топология сети, которую мы будем использовать в этом видео."
    ]
  },
  {
    "time": [
      104.64,
      108.57
    ],
    "en": [
      "Let me give you a quick run-through of the topology."
    ],
    "ru": [
      "Позвольте мне дать вам краткий обзор топологии."
    ]
  },
  {
    "time": [
      108.57,
      111.52
    ],
    "en": [
      "There are two LANs I’ve illustrated here."
    ],
    "ru": [
      "Я проиллюстрировал здесь две локальные сети."
    ]
  },
  {
    "time": [
      111.52,
      117.46
    ],
    "en": [
      "This one, connected to R1, is the 192.168.1.0/24 network."
    ],
    "ru": [
      "Этот, подключенный к R1, представляет собой сеть 192.168.1.0/24."
    ]
  },
  {
    "time": [
      117.46,
      130.92
    ],
    "en": [
      "PC1 has an IP address of 192.168.1.1, and R1 has an IP address of 192.168.1.254 on its G0/2 interface."
    ],
    "ru": [
      "ПК1 имеет IP-адрес 192.168.1.1, а R1 имеет IP-адрес 192.168.1.254 на своем интерфейсе G0 / 2."
    ]
  },
  {
    "time": [
      130.92,
      137.34
    ],
    "en": [
      "There is also this LAN, connected to R4, the 192.168.4.0/24 network."
    ],
    "ru": [
      "Также есть эта LAN, подключенная к R4, сеть 192.168.4.0/24."
    ]
  },
  {
    "time": [
      137.34,
      151.23
    ],
    "en": [
      "PC4 has an IP address of 192.168.1.4, and R4 has an IP address of 192.168.1.254 on its G0/2 interface."
    ],
    "ru": [
      "ПК4 имеет IP-адрес 192.168.1.4, а R4 имеет IP-адрес 192.168.1.254 на своем интерфейсе G0 / 2."
    ]
  },
  {
    "time": [
      151.23,
      157.34
    ],
    "en": [
      "Those are the LANs, but these four routers represent not a LAN, but rather a WAN, which"
    ],
    "ru": [
      "Это локальные сети, но эти четыре маршрутизатора представляют собой не локальную сеть, а, скорее, глобальную сеть, которая"
    ]
  },
  {
    "time": [
      157.34,
      160.28
    ],
    "en": [
      "stands for Wide Area Network."
    ],
    "ru": [
      "расшифровывается как Wide Area Network."
    ]
  },
  {
    "time": [
      160.28,
      165.08
    ],
    "en": [
      "These routers could be kilometers apart, connected by single mode fiber."
    ],
    "ru": [
      "Эти маршрутизаторы могут находиться на расстоянии нескольких километров друг от друга, соединенных одномодовым оптоволокном."
    ]
  },
  {
    "time": [
      165.08,
      170.9
    ],
    "en": [
      "Basically, the definition of a WAN is a network that spreads over a large area."
    ],
    "ru": [
      "По сути, определение WAN - это сеть, которая распространяется на большую территорию."
    ]
  },
  {
    "time": [
      170.9,
      174.4
    ],
    "en": [
      "Let’s look at the IP addresses."
    ],
    "ru": [
      "Посмотрим на IP-адреса."
    ]
  },
  {
    "time": [
      174.4,
      187.6
    ],
    "en": [
      "Between R1 and R2 is the 192.16.12.0/24 network, between R2 and R4 is the 192.168.24.0/24 network,"
    ],
    "ru": [
      "Между R1 и R2 находится сеть 192.16.12.0/24, между R2 и R4 - сеть 192.168.24.0/24,"
    ]
  },
  {
    "time": [
      187.6,
      200.96
    ],
    "en": [
      "between R1 and R3 is the 192.168.13.0/24 network, and between R3 and R4 is the 192.168.34.0/24 network."
    ],
    "ru": [
      "между R1 и R3 находится сеть 192.168.13.0/24, а между R3 и R4 - сеть 192.168.34.0/24."
    ]
  },
  {
    "time": [
      200.96,
      205.04
    ],
    "en": [
      "I numbered the networks like this to make it easy to understand for this demonstration,"
    ],
    "ru": [
      "Я пронумеровал сети таким образом, чтобы облегчить понимание этой демонстрации,"
    ]
  },
  {
    "time": [
      205.04,
      209.879
    ],
    "en": [
      "but you’re probably not going to find networks numbered like this in the real world."
    ],
    "ru": [
      "но вы, вероятно, не найдете сетей с таким номером в реальном мире."
    ]
  },
  {
    "time": [
      209.879,
      214.75
    ],
    "en": [
      "But when you’re doing labs, its helpful to make the IP addresses simple to understand."
    ],
    "ru": [
      "Но когда вы выполняете лабораторные работы, полезно сделать IP-адреса простыми для понимания."
    ]
  },
  {
    "time": [
      214.75,
      220.53
    ],
    "en": [
      "So, PC1 wants to send this packet to PC4."
    ],
    "ru": [
      "Итак, ПК1 хочет отправить этот пакет на ПК4."
    ]
  },
  {
    "time": [
      220.53,
      228.239
    ],
    "en": [
      "Notice that the source IP address is 192.168.1.1, PC1’s IP address, and the destination IP"
    ],
    "ru": [
      "Обратите внимание, что IP-адрес источника - 192.168.1.1, IP-адрес ПК1 и IP-адрес назначения."
    ]
  },
  {
    "time": [
      228.239,
      234.31
    ],
    "en": [
      "address is 192.168.4.1, PC4’s IP address."
    ],
    "ru": [
      "адрес 192.168.4.1, IP-адрес ПК4."
    ]
  },
  {
    "time": [
      234.31,
      236.65
    ],
    "en": [
      "What does PC1 do from here?"
    ],
    "ru": [
      "Что здесь делает ПК1?"
    ]
  },
  {
    "time": [
      236.65,
      243.769
    ],
    "en": [
      "First, it asks itself this question, Is the destination IP address in the same network?"
    ],
    "ru": [
      "Во-первых, он задает себе вопрос: находится ли IP-адрес назначения в той же сети?"
    ]
  },
  {
    "time": [
      243.769,
      248.29
    ],
    "en": [
      "Well, PC1’s IP address is 192.168.1.1/24."
    ],
    "ru": [
      "Итак, IP-адрес ПК1 - 192.168.1.1/24."
    ]
  },
  {
    "time": [
      248.29,
      257.519
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
      248.29,
      257.519
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
      257.519,
      261.87
    ],
    "en": [
      "portion of the address. How about PC4?"
    ],
    "ru": [
      "часть адреса. А как насчет PC4?"
    ]
  },
  {
    "time": [
      261.87,
      269.99
    ],
    "en": [
      "Its address is 192.168.4.1/24, so 192.168.4 is the network portion."
    ],
    "ru": [
      "Его адрес 192.168.4.1/24, поэтому 192.168.4 - сетевая часть."
    ]
  },
  {
    "time": [
      269.99,
      275.4
    ],
    "en": [
      "So, the answer is NO, these two end hosts are in different networks."
    ],
    "ru": [
      "Итак, ответ - НЕТ, эти два конечных хоста находятся в разных сетях."
    ]
  },
  {
    "time": [
      275.4,
      279.52
    ],
    "en": [
      "Because of this, PC1 can’t forward the packet directly to PC4."
    ],
    "ru": [
      "Из-за этого ПК1 не может пересылать пакет непосредственно на ПК4."
    ]
  },
  {
    "time": [
      279.52,
      285.719
    ],
    "en": [
      "So, because the destination is in a different network, a different LAN, routing logic tells"
    ],
    "ru": [
      "Итак, поскольку пункт назначения находится в другой сети, в другой локальной сети, логика маршрутизации сообщает"
    ]
  },
  {
    "time": [
      285.719,
      289.62
    ],
    "en": [
      "PC1 to send the packet to the ‘default gateway’."
    ],
    "ru": [
      "ПК1 для отправки пакета на «шлюз по умолчанию»."
    ]
  },
  {
    "time": [
      289.62,
      294.839
    ],
    "en": [
      "The default gateway is the device to which the host, in this case PC1, will forward data"
    ],
    "ru": [
      "Шлюз по умолчанию - это устройство, на которое хост, в данном случае PC1, будет пересылать данные."
    ]
  },
  {
    "time": [
      294.839,
      297.889
    ],
    "en": [
      "that is destined for another network."
    ],
    "ru": [
      "это предназначено для другой сети."
    ]
  },
  {
    "time": [
      297.889,
      300.87
    ],
    "en": [
      "What do you think PC1’s default gateway is?"
    ],
    "ru": [
      "Как вы думаете, какой шлюз по умолчанию используется для ПК1?"
    ]
  },
  {
    "time": [
      300.87,
      304.009
    ],
    "en": [
      "The answer is R1."
    ],
    "ru": [
      "Ответ - R1."
    ]
  },
  {
    "time": [
      304.009,
      311.74
    ],
    "en": [
      "Routers are the devices used to connect separate networks, for example R1 connects the 192.168.1.0/24,"
    ],
    "ru": [
      "Маршрутизаторы - это устройства, используемые для подключения отдельных сетей, например, R1 подключает 192.168.1.0/24,"
    ]
  },
  {
    "time": [
      311.74,
      320.96
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
      311.74,
      320.96
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
      320.96,
      325.789
    ],
    "en": [
      "So, to reach other networks, an end host will send the packet to its network’s router,"
    ],
    "ru": [
      "Итак, чтобы достичь других сетей, конечный хост отправит пакет на маршрутизатор своей сети,"
    ]
  },
  {
    "time": [
      325.789,
      329.979
    ],
    "en": [
      "the default gateway, which is R1 in this case."
    ],
    "ru": [
      "шлюз по умолчанию, в данном случае R1."
    ]
  },
  {
    "time": [
      329.979,
      336.599
    ],
    "en": [
      "Now R1 has the packet, and its R1’s responsibility to forward it to the next device."
    ],
    "ru": [
      "Теперь R1 имеет пакет, а его R1 отвечает за его пересылку следующему устройству."
    ]
  },
  {
    "time": [
      336.599,
      343.18
    ],
    "en": [
      "After receiving the packet, R1 will compare the packet’s destination IP address to the routing table."
    ],
    "ru": [
      "После получения пакета R1 сравнит IP-адрес назначения пакета с таблицей маршрутизации."
    ]
  },
  {
    "time": [
      343.18,
      347.919
    ],
    "en": [
      "As I said in the introduction to this video, each router keeps a routing table, which stores"
    ],
    "ru": [
      "Как я сказал во введении к этому видео, каждый маршрутизатор ведет таблицу маршрутизации, в которой хранятся"
    ]
  },
  {
    "time": [
      347.919,
      351.539
    ],
    "en": [
      "a list of destinations, and how to reach the destination."
    ],
    "ru": [
      "список пунктов назначения и способ добраться до пункта назначения."
    ]
  },
  {
    "time": [
      351.539,
      359.74
    ],
    "en": [
      "Assuming R1 already has an entry in its routing table for the 192.168.4.0/24 network, the entry"
    ],
    "ru": [
      "Предполагая, что R1 уже имеет запись в своей таблице маршрутизации для сети 192.168.4.0/24, запись"
    ]
  },
  {
    "time": [
      359.74,
      363.37
    ],
    "en": [
      "will look something like this…."
    ],
    "ru": [
      "будет выглядеть примерно так…."
    ]
  },
  {
    "time": [
      363.37,
      370.009
    ],
    "en": [
      "First is the destination, which is the 192.168.4.0/24 network."
    ],
    "ru": [
      "Во-первых, это пункт назначения, которым является сеть 192.168.4.0/24."
    ]
  },
  {
    "time": [
      370.009,
      377.629
    ],
    "en": [
      "Next is the ‘next hop’, the next destination in the path to the 192.168.4.0/24 network,"
    ],
    "ru": [
      "Далее идет «следующий переход», следующий пункт назначения на пути к сети 192.168.4.0/24,"
    ]
  },
  {
    "time": [
      377.629,
      384.449
    ],
    "en": [
      "the final destination, and also the interface out of which R1 will send the packet."
    ],
    "ru": [
      "конечный пункт назначения, а также интерфейс, из которого R1 отправит пакет."
    ]
  },
  {
    "time": [
      384.449,
      390.69
    ],
    "en": [
      "In this case, R1 could reach the network either by sending it to R2 or R3, but let’s say"
    ],
    "ru": [
      "В этом случае R1 может подключиться к сети, отправив его на R2 или R3, но, скажем,"
    ]
  },
  {
    "time": [
      390.69,
      396.18
    ],
    "en": [
      "we configured it to send it via R2, as you can tell by both the next-hop address"
    ],
    "ru": [
      "мы настроили его для отправки через R2, как вы можете судить по адресу следующего перехода"
    ]
  },
  {
    "time": [
      396.18,
      403.029
    ],
    "en": [
      "of 192.168.12.2, and the exit interface on R1, g0/0."
    ],
    "ru": [
      "из 192.168.12.2, а интерфейс выхода на R1, g0 / 0."
    ]
  },
  {
    "time": [
      403.029,
      407.84
    ],
    "en": [
      "We’ll take a look at configuring routes, as well as take a look at a real routing table"
    ],
    "ru": [
      "Мы рассмотрим настройку маршрутов, а также взглянем на настоящую таблицу маршрутизации."
    ]
  },
  {
    "time": [
      407.84,
      410.419
    ],
    "en": [
      "on a Cisco router, in a few minutes."
    ],
    "ru": [
      "на маршрутизаторе Cisco за несколько минут."
    ]
  },
  {
    "time": [
      410.419,
      418.089
    ],
    "en": [
      "So, R1 will forward the packet to the next router on the route to the destination, which is R2."
    ],
    "ru": [
      "Таким образом, R1 перешлет пакет следующему маршрутизатору на маршруте к месту назначения, которым является R2."
    ]
  },
  {
    "time": [
      418.089,
      425.74
    ],
    "en": [
      "So, now R2 has the packet, and it’s R2’s responsibility to forward the packet to the next device."
    ],
    "ru": [
      "Итак, теперь у R2 есть пакет, и R2 отвечает за пересылку пакета следующему устройству."
    ]
  },
  {
    "time": [
      425.74,
      431.06
    ],
    "en": [
      "It will follow the same process as R1, It will compare the packet’s destination IP"
    ],
    "ru": [
      "Он будет следовать тому же процессу, что и R1, он будет сравнивать IP-адрес назначения пакета."
    ]
  },
  {
    "time": [
      431.06,
      435.889
    ],
    "en": [
      "address to the routing table and then, assuming it already has an entry in its routing table"
    ],
    "ru": [
      "адрес к таблице маршрутизации, а затем, предполагая, что он уже имеет запись в своей таблице маршрутизации"
    ]
  },
  {
    "time": [
      435.889,
      440.41
    ],
    "en": [
      "for the destination, It might look something like this."
    ],
    "ru": [
      "для пункта назначения это может выглядеть примерно так."
    ]
  },
  {
    "time": [
      440.41,
      452.099
    ],
    "en": [
      "The destination is 192.168.4.0/24, the next hop address is 192.168.24.4, R4’s IP address,"
    ],
    "ru": [
      "Пункт назначения - 192.168.4.0/24, адрес следующего перехода - 192.168.24.4, IP-адрес R4,"
    ]
  },
  {
    "time": [
      452.099,
      457.539
    ],
    "en": [
      "and the exit interface is g0/1, which is connected to R4."
    ],
    "ru": [
      "а интерфейс выхода - g0 / 1, который подключен к R4."
    ]
  },
  {
    "time": [
      457.539,
      463.46
    ],
    "en": [
      "After looking up the route in the routing table, R2 forwards the packet to R4."
    ],
    "ru": [
      "После поиска маршрута в таблице маршрутизации R2 пересылает пакет R4."
    ]
  },
  {
    "time": [
      463.46,
      469.749
    ],
    "en": [
      "Now R4 has the packet, and it is R4’s responsibility to forward the packet to the next device."
    ],
    "ru": [
      "Теперь у R4 есть пакет, и R4 несет ответственность за пересылку пакета следующему устройству."
    ]
  },
  {
    "time": [
      469.749,
      475.01
    ],
    "en": [
      "It will follow the same process as both R1 and R2, it will compare the packet’s destination"
    ],
    "ru": [
      "Он будет следовать тому же процессу, что и R1 и R2, он будет сравнивать место назначения пакета."
    ]
  },
  {
    "time": [
      475.01,
      477.729
    ],
    "en": [
      "IP address to the routing table."
    ],
    "ru": [
      "IP-адрес в таблице маршрутизации."
    ]
  },
  {
    "time": [
      477.729,
      483.029
    ],
    "en": [
      "In R4’s case, the entry in the table will look something like this."
    ],
    "ru": [
      "В случае R4 запись в таблице будет выглядеть примерно так."
    ]
  },
  {
    "time": [
      483.029,
      488.27
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
      483.029,
      488.27
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
      488.27,
      498.479
    ],
    "en": [
      "That’s because R4 has an IP address of 192.168.4.254/24 configured on its G0/2 interface, so it knows"
    ],
    "ru": [
      "Это потому, что R4 имеет IP-адрес 192.168.4.254/24, настроенный на его интерфейсе G0 / 2, поэтому он знает"
    ]
  },
  {
    "time": [
      498.479,
      505.5
    ],
    "en": [
      "the 192.168.4.0/24 network is directly connected to that interface."
    ],
    "ru": [
      "сеть 192.168.4.0/24 напрямую подключена к этому интерфейсу."
    ]
  },
  {
    "time": [
      505.5,
      512.58
    ],
    "en": [
      "It forwards the packet out of that interface, and SW4 passes it on to PC4, the final destination."
    ],
    "ru": [
      "Он пересылает пакет из этого интерфейса, а SW4 передает его на ПК4, конечный пункт назначения."
    ]
  },
  {
    "time": [
      512.58,
      517.33
    ],
    "en": [
      "Now, this has been a very simple overview of how this process works."
    ],
    "ru": [
      "Это был очень простой обзор того, как работает этот процесс."
    ]
  },
  {
    "time": [
      517.33,
      521.58
    ],
    "en": [
      "Notice that I didn’t mention MAC addresses, or Layer 2 at all."
    ],
    "ru": [
      "Обратите внимание, что я вообще не упомянул MAC-адреса или уровень 2."
    ]
  },
  {
    "time": [
      521.58,
      524.02
    ],
    "en": [
      "This is just a Layer 3 overview of this process."
    ],
    "ru": [
      "Это всего лишь обзор этого процесса на уровне 3."
    ]
  },
  {
    "time": [
      524.02,
      529.57
    ],
    "en": [
      "I will make a dedicated video called ‘Life of a Packet’, in which I follow this same"
    ],
    "ru": [
      "Я сделаю специальный видеоролик под названием «Life of a Packet», в котором я буду следить за тем же"
    ]
  },
  {
    "time": [
      529.57,
      535.33
    ],
    "en": [
      "process, but go in depth about not just Layer 3, but also Layer 2."
    ],
    "ru": [
      "процесс, но подробно рассмотрим не только уровень 3, но и уровень 2."
    ]
  },
  {
    "time": [
      535.33,
      541.91
    ],
    "en": [
      "You may have noticed that, during this whole process, the source and destination IP addresses have not changed."
    ],
    "ru": [
      "Вы могли заметить, что в течение всего этого процесса исходный и целевой IP-адреса не изменились."
    ]
  },
  {
    "time": [
      541.91,
      545.94
    ],
    "en": [
      "That is not the case for the MAC addresses, so you’ll see that the process is a little"
    ],
    "ru": [
      "Это не относится к MAC-адресам, поэтому вы увидите, что процесс немного"
    ]
  },
  {
    "time": [
      545.94,
      548.71
    ],
    "en": [
      "more complex than I showed you here."
    ],
    "ru": [
      "сложнее, чем я показал вам здесь."
    ]
  },
  {
    "time": [
      548.71,
      552.45
    ],
    "en": [
      "But this basic overview should be enough for you to understand the rest of this video."
    ],
    "ru": [
      "Но этого базового обзора должно быть достаточно, чтобы вы могли понять остальную часть этого видео."
    ]
  },
  {
    "time": [
      552.45,
      556.03
    ],
    "en": [
      "Let’s finally go on to the CLI of a Cisco router."
    ],
    "ru": [
      "Наконец, перейдем к интерфейсу командной строки маршрутизатора Cisco."
    ]
  },
  {
    "time": [
      556.03,
      560.91
    ],
    "en": [
      "So, we’re on the CLI of PC1."
    ],
    "ru": [
      "Итак, мы находимся в интерфейсе командной строки PC1."
    ]
  },
  {
    "time": [
      560.91,
      564.01
    ],
    "en": [
      "Actually, this isn’t a PC."
    ],
    "ru": [
      "На самом деле это не компьютер."
    ]
  },
  {
    "time": [
      564.01,
      570.07
    ],
    "en": [
      "Rather than taking the time to set up a virtual PC in GNS3, I just used a Cisco router and"
    ],
    "ru": [
      "Вместо того, чтобы тратить время на настройку виртуального ПК в GNS3, я просто использовал маршрутизатор Cisco и"
    ]
  },
  {
    "time": [
      570.07,
      572.19
    ],
    "en": [
      "changed the icon to a PC."
    ],
    "ru": [
      "поменял иконку на ПК."
    ]
  },
  {
    "time": [
      572.19,
      577.21
    ],
    "en": [
      "So, we can use this to learn about the Cisco CLI, too."
    ],
    "ru": [
      "Итак, мы можем использовать это, чтобы узнать о Cisco CLI."
    ]
  },
  {
    "time": [
      577.21,
      584.65
    ],
    "en": [
      "So I used the command ‘show ip route’ from privileged exec mode, and it displays the routing table."
    ],
    "ru": [
      "Поэтому я использовал команду «show ip route» из привилегированного режима exec, и она отображает таблицу маршрутизации."
    ]
  },
  {
    "time": [
      584.65,
      589.25
    ],
    "en": [
      "Down here under the codes at the top two routes are displayed."
    ],
    "ru": [
      "Здесь внизу под кодами отображаются два верхних маршрута."
    ]
  },
  {
    "time": [
      589.25,
      596.78
    ],
    "en": [
      "This may seem like three routes, but this line at the top, 192.168.1.0/24 is variably"
    ],
    "ru": [
      "Может показаться, что это три маршрута, но эта строка вверху, 192.168.1.0/24, имеет переменную"
    ]
  },
  {
    "time": [
      596.78,
      601.52
    ],
    "en": [
      "subnetted, 2 subnets, 2 masks, isn’t a route."
    ],
    "ru": [
      "подсети, 2 подсети, 2 маски, не является маршрутом."
    ]
  },
  {
    "time": [
      601.52,
      609.02
    ],
    "en": [
      "This lists the classful address, and what class is 192.168.1.0/24?"
    ],
    "ru": [
      "Здесь перечислены классовые адреса, а какой класс - 192.168.1.0/24?"
    ]
  },
  {
    "time": [
      609.02,
      615.26
    ],
    "en": [
      "It’s a class C address. Underneath are the two routes that fit within that class."
    ],
    "ru": [
      "Это адрес класса C. Ниже представлены два маршрута, которые соответствуют этому классу."
    ]
  },
  {
    "time": [
      615.26,
      617.49
    ],
    "en": [
      "If you don’t understand this all yet, just wait."
    ],
    "ru": [
      "Если вы этого еще не понимаете, просто подождите."
    ]
  },
  {
    "time": [
      617.49,
      624.46
    ],
    "en": [
      "We will talk about subnetting, classful, and classless networks a few videos later."
    ],
    "ru": [
      "Мы поговорим о подсетях, классовых и бесклассовых сетях через несколько видеороликов."
    ]
  },
  {
    "time": [
      624.46,
      627.74
    ],
    "en": [
      "For now, just realize that this top line isn’t a route."
    ],
    "ru": [
      "А пока просто поймите, что эта верхняя линия не является маршрутом."
    ]
  },
  {
    "time": [
      627.74,
      634.371
    ],
    "en": [
      "Okay, so we’ve got two routes, and these two letters on the left, C and L, display"
    ],
    "ru": [
      "Итак, у нас есть два маршрута, и эти две буквы слева, C и L, отображают"
    ]
  },
  {
    "time": [
      634.371,
      635.5
    ],
    "en": [
      "the type of route."
    ],
    "ru": [
      "тип маршрута."
    ]
  },
  {
    "time": [
      635.5,
      637.33
    ],
    "en": [
      "What do they mean?"
    ],
    "ru": [
      "Что они имеют в виду?"
    ]
  },
  {
    "time": [
      637.33,
      640.89
    ],
    "en": [
      "Well, let’s look them up in the list up top."
    ],
    "ru": [
      "Что ж, давайте поищем их в списке вверху."
    ]
  },
  {
    "time": [
      640.89,
      646.55
    ],
    "en": [
      "L stands for Local, and C stands for connected. What’s the difference?"
    ],
    "ru": [
      "L означает локальный, а C означает подключенный. Какая разница?"
    ]
  },
  {
    "time": [
      646.55,
      649.68
    ],
    "en": [
      "Well, let’s look at this Connected route first."
    ],
    "ru": [
      "Что ж, давайте сначала посмотрим на этот подключенный маршрут."
    ]
  },
  {
    "time": [
      649.68,
      655.49
    ],
    "en": [
      "It’s a route to 192.168.1.0/24."
    ],
    "ru": [
      "Это путь к 192.168.1.0/24."
    ]
  },
  {
    "time": [
      655.49,
      666.94
    ],
    "en": [
      "The IP address configured on PC1’s interface is 192.168.1.1/24, so 192.168.1.0/24 the network"
    ],
    "ru": [
      "На интерфейсе ПК1 настроен IP-адрес 192.168.1.1/24, поэтому 192.168.1.0/24 сеть"
    ]
  },
  {
    "time": [
      666.94,
      673.41
    ],
    "en": [
      "address, the address with a host portion of all 0s. /24 means that the first three octets"
    ],
    "ru": [
      "адрес, адрес с частью хоста всех нулей. / 24 означает, что первые три октета"
    ]
  },
  {
    "time": [
      673.41,
      678.09
    ],
    "en": [
      "are the network portion, and the last octet is the host portion."
    ],
    "ru": [
      "- сетевая часть, а последний октет - это часть хоста."
    ]
  },
  {
    "time": [
      678.09,
      682.62
    ],
    "en": [
      "Set the host portion to 0, and that’s the network address."
    ],
    "ru": [
      "Установите для хоста значение 0, и это будет сетевой адрес."
    ]
  },
  {
    "time": [
      682.62,
      698.93
    ],
    "en": [
      "There are probably lots of other hosts on this network, maybe with addresses like 192.168.1.2/24, 192.168.1.3/24, 192.168.1.4/24. etc."
    ],
    "ru": [
      "В этой сети, вероятно, есть много других хостов, возможно, с адресами типа 192.168.1.2/24, 192.168.1.3/24, 192.168.1.4/24. и т.п."
    ]
  },
  {
    "time": [
      698.93,
      705.04
    ],
    "en": [
      "All of them are part of the 192.168.1.0/24 network, because the network portion of their"
    ],
    "ru": [
      "Все они являются частью сети 192.168.1.0/24, потому что сетевая часть их"
    ]
  },
  {
    "time": [
      705.04,
      706.82
    ],
    "en": [
      "address is the same."
    ],
    "ru": [
      "адрес такой же."
    ]
  },
  {
    "time": [
      706.82,
      714.34
    ],
    "en": [
      "So, PC1 knows it can reach any host on the 192.168.1.0/24 network via its network"
    ],
    "ru": [
      "Итак, ПК1 знает, что может подключиться к любому хосту в сети 192.168.1.0/24 через свою сеть."
    ]
  },
  {
    "time": [
      714.34,
      722.0
    ],
    "en": [
      "interface, which is gigabitethernet0/0 on this Cisco router which I’m using to simulate a PC."
    ],
    "ru": [
      "интерфейс, который является gigabitethernet0 / 0 на этом маршрутизаторе Cisco, который я использую для моделирования ПК."
    ]
  },
  {
    "time": [
      722.0,
      724.12
    ],
    "en": [
      "Next up is the local route."
    ],
    "ru": [
      "Далее идет местный маршрут."
    ]
  },
  {
    "time": [
      724.12,
      731.06
    ],
    "en": [
      "Look at this one, 192.168.1.1, which is the exact address on PC1’s interface, but this"
    ],
    "ru": [
      "Посмотрите на этот 192.168.1.1, который является точным адресом интерфейса ПК1, но это"
    ]
  },
  {
    "time": [
      731.06,
      733.92
    ],
    "en": [
      "time with a /32 mask."
    ],
    "ru": [
      "время с маской / 32."
    ]
  },
  {
    "time": [
      733.92,
      736.71
    ],
    "en": [
      "We haven’t seen a /32 mask before."
    ],
    "ru": [
      "Раньше мы не видели маски / 32."
    ]
  },
  {
    "time": [
      736.71,
      742.91
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
      736.71,
      742.91
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
      742.91,
      744.99
    ],
    "en": [
      "Well, that is correct."
    ],
    "ru": [
      "Что ж, это правильно."
    ]
  },
  {
    "time": [
      744.99,
      756.28
    ],
    "en": [
      "You could say this is a route to the 192.168.1.1/32 network, and there is only one address in the network, 192.168.1.1."
    ],
    "ru": [
      "Можно сказать, что это маршрут к сети 192.168.1.1/32, и в сети есть только один адрес 192.168.1.1."
    ]
  },
  {
    "time": [
      756.28,
      763.12
    ],
    "en": [
      "This is how you identify a single, specific address, by using a /32 mask."
    ],
    "ru": [
      "Вот как вы идентифицируете один конкретный адрес с помощью маски / 32."
    ]
  },
  {
    "time": [
      763.12,
      769.31
    ],
    "en": [
      "so, to recap, the connected route indicates the network to which the interface is attached,"
    ],
    "ru": [
      "Итак, напомним, подключенный маршрут указывает на сеть, к которой подключен интерфейс,"
    ]
  },
  {
    "time": [
      769.31,
      775.6
    ],
    "en": [
      "and the local route indicates the actual address configured on the interface, with a /32 mask."
    ],
    "ru": [
      "а локальный маршрут указывает фактический адрес, настроенный на интерфейсе, с маской / 32."
    ]
  },
  {
    "time": [
      775.6,
      781.71
    ],
    "en": [
      "So, that means that you already know how to configure two types of routes on a Cisco router."
    ],
    "ru": [
      "Итак, это означает, что вы уже знаете, как настроить два типа маршрутов на маршрутизаторе Cisco."
    ]
  },
  {
    "time": [
      781.71,
      787.06
    ],
    "en": [
      "If you configure an IP address on an interface and enable the interface, the connected and"
    ],
    "ru": [
      "Если вы настраиваете IP-адрес на интерфейсе и включаете интерфейс, подключенные и"
    ]
  },
  {
    "time": [
      787.06,
      790.44
    ],
    "en": [
      "local routes of that interface are added."
    ],
    "ru": [
      "добавляются локальные маршруты этого интерфейса."
    ]
  },
  {
    "time": [
      790.44,
      798.06
    ],
    "en": [
      "However, this PC doesn’t have a route to the intended destination, 192.168.4.1."
    ],
    "ru": [
      "Однако у этого ПК нет маршрута к намеченному пункту назначения, 192.168.4.1."
    ]
  },
  {
    "time": [
      798.06,
      800.84
    ],
    "en": [
      "Actually, that’s not a problem."
    ],
    "ru": [
      "Собственно, это не проблема."
    ]
  },
  {
    "time": [
      800.84,
      806.33
    ],
    "en": [
      "An end host like a PC doesn’t need to know the route to every destination."
    ],
    "ru": [
      "Конечному хосту, например ПК, не нужно знать маршрут к каждому пункту назначения."
    ]
  },
  {
    "time": [
      806.33,
      811.16
    ],
    "en": [
      "All it needs is a default gateway to which it can send any traffic destined for a location"
    ],
    "ru": [
      "Все, что ему нужно, это шлюз по умолчанию, на который он может отправлять любой трафик, предназначенный для определенного местоположения."
    ]
  },
  {
    "time": [
      811.16,
      814.07
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
      814.07,
      819.55
    ],
    "en": [
      "On a Cisco router, the default gateway is known as the ‘gateway of last resort’,"
    ],
    "ru": [
      "На маршрутизаторе Cisco шлюз по умолчанию известен как «шлюз последней инстанции»,"
    ]
  },
  {
    "time": [
      819.55,
      822.23
    ],
    "en": [
      "and as it says here, it is not set yet."
    ],
    "ru": [
      "и, как здесь сказано, он еще не установлен."
    ]
  },
  {
    "time": [
      822.23,
      829.98
    ],
    "en": [
      "So, let’s configure the default gateway on our PC, which as I said before is actually a Cisco router."
    ],
    "ru": [
      "Итак, давайте настроим шлюз по умолчанию на нашем ПК, который, как я уже сказал, на самом деле является маршрутизатором Cisco."
    ]
  },
  {
    "time": [
      829.98,
      834.92
    ],
    "en": [
      "To configure the default gateway, also known as the gateway of last resort, on a Cisco"
    ],
    "ru": [
      "Чтобы настроить шлюз по умолчанию, также известный как шлюз последней инстанции, на Cisco"
    ]
  },
  {
    "time": [
      834.92,
      839.41
    ],
    "en": [
      "router, you have to configure what’s called a ‘default route’."
    ],
    "ru": [
      "маршрутизатора, вам необходимо настроить так называемый «маршрут по умолчанию»."
    ]
  },
  {
    "time": [
      839.41,
      844.26
    ],
    "en": [
      "A default route is a route that matches ALL possible destinations."
    ],
    "ru": [
      "Маршрут по умолчанию - это маршрут, который соответствует ВСЕМ возможным пунктам назначения."
    ]
  },
  {
    "time": [
      844.26,
      851.0
    ],
    "en": [
      "However, it is used only if a more specific route match isn’t found in the routing table."
    ],
    "ru": [
      "Однако он используется только в том случае, если более точное соответствие маршрута не найдено в таблице маршрутизации."
    ]
  },
  {
    "time": [
      851.0,
      855.8
    ],
    "en": [
      "When a router looks up a route to a destination in its routing table, it looks for the most"
    ],
    "ru": [
      "Когда маршрутизатор ищет маршрут к пункту назначения в своей таблице маршрутизации, он ищет наиболее"
    ]
  },
  {
    "time": [
      855.8,
      859.6
    ],
    "en": [
      "specific match, and chooses that route."
    ],
    "ru": [
      "конкретный матч, и выбирает этот маршрут."
    ]
  },
  {
    "time": [
      859.6,
      863.5
    ],
    "en": [
      "The default route is the LEAST SPECIFIC possible route."
    ],
    "ru": [
      "Маршрут по умолчанию - НАИМЕНЕЕ КОНКРЕТНЫЙ возможный маршрут."
    ]
  },
  {
    "time": [
      863.5,
      864.97
    ],
    "en": [
      "What does that mean?"
    ],
    "ru": [
      "Что это обозначает?"
    ]
  },
  {
    "time": [
      864.97,
      872.41
    ],
    "en": [
      "Well, it uses an IP address of 0.0.0.0, and a mask of 0.0.0.0."
    ],
    "ru": [
      "Ну, он использует IP-адрес 0.0.0.0 и маску 0.0.0.0."
    ]
  },
  {
    "time": [
      872.41,
      882.27
    ],
    "en": [
      "So, To set the default route or gateway of last resort, configure a route to 0.0.0.0/0."
    ],
    "ru": [
      "Итак, чтобы установить маршрут по умолчанию или последний шлюз, настройте маршрут на 0.0.0.0/0."
    ]
  },
  {
    "time": [
      882.27,
      884.52
    ],
    "en": [
      "Think about what that means."
    ],
    "ru": [
      "Подумайте, что это значит."
    ]
  },
  {
    "time": [
      884.52,
      893.22
    ],
    "en": [
      "The /0 means that there is no ‘network portion’ of the address, no fixed part of the address that can’t change."
    ],
    "ru": [
      "/ 0 означает, что нет «сетевой части» адреса, нет фиксированной части адреса, которая не может быть изменена."
    ]
  },
  {
    "time": [
      893.22,
      905.39
    ],
    "en": [
      "So that means 0.0.0.0/0 covers the range of address from 0.0.0.0 through 255.255.255.255,"
    ],
    "ru": [
      "Это означает, что 0.0.0.0/0 охватывает диапазон адресов от 0.0.0.0 до 255.255.255.255,"
    ]
  },
  {
    "time": [
      905.39,
      909.37
    ],
    "en": [
      "which is ALL possible addresses."
    ],
    "ru": [
      "это ВСЕ возможные адреса."
    ]
  },
  {
    "time": [
      909.37,
      913.36
    ],
    "en": [
      "Let me give a little explanation that might help you understand this."
    ],
    "ru": [
      "Позвольте мне дать небольшое объяснение, которое может помочь вам понять это."
    ]
  },
  {
    "time": [
      913.36,
      920.25
    ],
    "en": [
      "Here is the 192.168.1.0/24 network, like the destination of that connected route in the"
    ],
    "ru": [
      "Вот сеть 192.168.1.0/24, как и пункт назначения этого подключенного маршрута в"
    ]
  },
  {
    "time": [
      920.25,
      922.529
    ],
    "en": [
      "routing table we just looked at."
    ],
    "ru": [
      "таблица маршрутизации, которую мы только что рассмотрели."
    ]
  },
  {
    "time": [
      922.529,
      929.1
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
      922.529,
      929.1
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
      929.1,
      934.589
    ],
    "en": [
      "This mask means that these first three octets are fixed, they can’t change."
    ],
    "ru": [
      "Эта маска означает, что эти первые три октета фиксированы и не могут быть изменены."
    ]
  },
  {
    "time": [
      934.589,
      939.42
    ],
    "en": [
      "However, this part, which isn’t covered by the mask, is not fixed."
    ],
    "ru": [
      "Однако эта часть, не закрытая маской, не фиксируется."
    ]
  },
  {
    "time": [
      939.42,
      949.12
    ],
    "en": [
      "It could be 192.168.1.1, 192.168.1.2, 192.168.1.3, etc."
    ],
    "ru": [
      "Это может быть 192.168.1.1, 192.168.1.2, 192.168.1.3 и т. Д."
    ]
  },
  {
    "time": [
      949.12,
      963.56
    ],
    "en": [
      "So, 192.168.1.0/24 matches all addresses from 192.168.1.0 through 192.168.1.255."
    ],
    "ru": [
      "Итак, 192.168.1.0/24 соответствует всем адресам от 192.168.1.0 до 192.168.1.255."
    ]
  },
  {
    "time": [
      963.56,
      971.63
    ],
    "en": [
      "So, how about 192.168.1.1/32, the destination of that local route we saw in the routing table?"
    ],
    "ru": [
      "Итак, как насчет 192.168.1.1/32, пункта назначения того локального маршрута, который мы видели в таблице маршрутизации?"
    ]
  },
  {
    "time": [
      971.63,
      978.0
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
      971.63,
      978.0
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
      978.0,
      982.58
    ],
    "en": [
      "ALL bits in ALL octets of the address are covered by the mask."
    ],
    "ru": [
      "ВСЕ биты во ВСЕХ октетах адреса покрываются маской."
    ]
  },
  {
    "time": [
      982.58,
      984.29
    ],
    "en": [
      "What does that mean?"
    ],
    "ru": [
      "Что это обозначает?"
    ]
  },
  {
    "time": [
      984.29,
      986.95
    ],
    "en": [
      "All bits are FIXED, they can’t change."
    ],
    "ru": [
      "Все биты ИСПРАВЛЕНЫ, они не могут быть изменены."
    ]
  },
  {
    "time": [
      986.95,
      997.24
    ],
    "en": [
      "So, that means that 192.168.1.1/32 matches ONLY a single address, 192.168.1.1."
    ],
    "ru": [
      "Это означает, что 192.168.1.1/32 соответствует ТОЛЬКО одному адресу 192.168.1.1."
    ]
  },
  {
    "time": [
      997.24,
      1003.0
    ],
    "en": [
      "That’s why the /32 mask is used to specify the exact address configured on the interface"
    ],
    "ru": [
      "Вот почему маска / 32 используется для указания точного адреса, настроенного на интерфейсе."
    ]
  },
  {
    "time": [
      1003.0,
      1004.92
    ],
    "en": [
      "in the local route."
    ],
    "ru": [
      "по местному маршруту."
    ]
  },
  {
    "time": [
      1004.92,
      1012.27
    ],
    "en": [
      "Now, for the opposite of that very specific /32 address, how about 0.0.0.0/0?"
    ],
    "ru": [
      "А как насчет 0.0.0.0/0, противоположного этому очень специфическому адресу / 32?"
    ]
  },
  {
    "time": [
      1012.27,
      1020.24
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
      1012.27,
      1020.24
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
      1020.24,
      1024.839
    ],
    "en": [
      "covered by the mask, they are all not fixed."
    ],
    "ru": [
      "покрытые маской, все они не закреплены."
    ]
  },
  {
    "time": [
      1024.839,
      1037.209
    ],
    "en": [
      "That means that 0.0.0.0/0 matches 0.0.0.0 through 255.255.255.255, which is ALL possible addresses."
    ],
    "ru": [
      "Это означает, что 0.0.0.0/0 совпадает с 0.0.0.0 по 255.255.255.255, то есть ВСЕ возможные адреса."
    ]
  },
  {
    "time": [
      1037.209,
      1041.949
    ],
    "en": [
      "I think you can see why I called this the ‘least specific’ route."
    ],
    "ru": [
      "Думаю, вы понимаете, почему я назвал этот маршрут «наименее конкретным»."
    ]
  },
  {
    "time": [
      1041.949,
      1047.829
    ],
    "en": [
      "It doesn’t specify a single address, it includes ALL possible addresses."
    ],
    "ru": [
      "Он не указывает один адрес, он включает ВСЕ возможные адреса."
    ]
  },
  {
    "time": [
      1047.829,
      1052.38
    ],
    "en": [
      "So, let’s get to actually configuring this default route."
    ],
    "ru": [
      "Итак, приступим к настройке этого маршрута по умолчанию."
    ]
  },
  {
    "time": [
      1052.38,
      1056.58
    ],
    "en": [
      "To do so, we have to learn how to configure a ‘static route’."
    ],
    "ru": [
      "Для этого нам нужно научиться настраивать «статический маршрут»."
    ]
  },
  {
    "time": [
      1056.58,
      1061.82
    ],
    "en": [
      "Basically, a static route is a route you manually configure yourself."
    ],
    "ru": [
      "По сути, статический маршрут - это маршрут, который вы настраиваете вручную."
    ]
  },
  {
    "time": [
      1061.82,
      1066.2
    ],
    "en": [
      "This is different than the connected and local routes we saw before, which are automatically"
    ],
    "ru": [
      "Это отличается от подключенных и локальных маршрутов, которые мы видели ранее, которые автоматически"
    ]
  },
  {
    "time": [
      1066.2,
      1071.99
    ],
    "en": [
      "added to the routing table when we configure an IP address on an interface and enable it."
    ],
    "ru": [
      "добавляется в таблицу маршрутизации, когда мы настраиваем IP-адрес на интерфейсе и включаем его."
    ]
  },
  {
    "time": [
      1071.99,
      1075.57
    ],
    "en": [
      "Here’s the command to configure a static route."
    ],
    "ru": [
      "Вот команда для настройки статического маршрута."
    ]
  },
  {
    "time": [
      1075.57,
      1082.85
    ],
    "en": [
      "It’s IP ROUTE, followed by the destination address, the mask for the destination address,"
    ],
    "ru": [
      "Это IP-МАРШРУТ, за которым следует адрес назначения, маска для адреса назначения,"
    ]
  },
  {
    "time": [
      1082.85,
      1086.009
    ],
    "en": [
      "and then the next-hop IP address."
    ],
    "ru": [
      "а затем IP-адрес следующего перехода."
    ]
  },
  {
    "time": [
      1086.009,
      1091.36
    ],
    "en": [
      "So here, I used the configure terminal command to enter global config mode, and then used"
    ],
    "ru": [
      "Итак, здесь я использовал команду настройки терминала для входа в режим глобальной конфигурации, а затем использовал"
    ]
  },
  {
    "time": [
      1091.36,
      1096.75
    ],
    "en": [
      "the IP route command to configure PC1’s default route to R1."
    ],
    "ru": [
      "команда IP route для настройки маршрута ПК1 по умолчанию к R1."
    ]
  },
  {
    "time": [
      1096.75,
      1104.72
    ],
    "en": [
      "Here is the destination address, here is the mask, and here is the next hop IP address, which is R1’s"
    ],
    "ru": [
      "Вот адрес назначения, вот маска, а вот IP-адрес следующего перехода, то есть R1"
    ]
  },
  {
    "time": [
      1104.72,
      1112.45
    ],
    "en": [
      "So, from global config mode I used DO SHOW IP ROUTE to check the routing table once more,"
    ],
    "ru": [
      "Итак, из режима глобальной конфигурации я использовал DO SHOW IP ROUTE, чтобы еще раз проверить таблицу маршрутизации,"
    ]
  },
  {
    "time": [
      1112.45,
      1122.899
    ],
    "en": [
      "and first off, you can see it says ‘gateway of last resort is 192.168.1.254 to network 0.0.0.0."
    ],
    "ru": [
      "и, во-первых, вы можете увидеть, что он говорит: «Последний шлюз - 192.168.1.254 для сети 0.0.0.0."
    ]
  },
  {
    "time": [
      1122.899,
      1126.919
    ],
    "en": [
      "The default route also appears down here with the other routes."
    ],
    "ru": [
      "Маршрут по умолчанию также отображается здесь вместе с другими маршрутами."
    ]
  },
  {
    "time": [
      1126.919,
      1129.679
    ],
    "en": [
      "Notice that the code on the left is different."
    ],
    "ru": [
      "Обратите внимание, что код слева отличается."
    ]
  },
  {
    "time": [
      1129.679,
      1132.37
    ],
    "en": [
      "We have an S and an asterisk."
    ],
    "ru": [
      "У нас есть буква S и звездочка."
    ]
  },
  {
    "time": [
      1132.37,
      1135.82
    ],
    "en": [
      "Let’s look up top again to see what these mean."
    ],
    "ru": [
      "Давайте еще раз посмотрим наверх, чтобы увидеть, что они означают."
    ]
  },
  {
    "time": [
      1135.82,
      1140.999
    ],
    "en": [
      "S means static, which as I just explained before is a route we manually configure on"
    ],
    "ru": [
      "S означает статический, который, как я только что объяснил ранее, является маршрутом, который мы вручную настраиваем на"
    ]
  },
  {
    "time": [
      1140.999,
      1147.5
    ],
    "en": [
      "the device, rather than one automatically added like the local and connected routes in the table."
    ],
    "ru": [
      "устройство, а не автоматически добавленное, как локальные и подключенные маршруты в таблице."
    ]
  },
  {
    "time": [
      1147.5,
      1151.98
    ],
    "en": [
      "The asterisk means it is a ‘candidate default’ route."
    ],
    "ru": [
      "Звездочка означает, что это маршрут «кандидата по умолчанию»."
    ]
  },
  {
    "time": [
      1151.98,
      1156.18
    ],
    "en": [
      "The fact that we can see it is added as the gateway of last resort means it isn’t just"
    ],
    "ru": [
      "Тот факт, что мы видим, что он добавлен в качестве шлюза последней инстанции, означает, что это не просто"
    ]
  },
  {
    "time": [
      1156.18,
      1162.54
    ],
    "en": [
      "a candidate, it was selected as the default route, but its still labeled as a candidate default route."
    ],
    "ru": [
      "кандидата, он был выбран в качестве маршрута по умолчанию, но все еще помечен как маршрут кандидата по умолчанию."
    ]
  },
  {
    "time": [
      1162.54,
      1169.85
    ],
    "en": [
      "Okay, so looking back at our topology, since PC1 now has a default gateway configured,"
    ],
    "ru": [
      "Итак, оглядываясь назад на нашу топологию, поскольку на ПК1 теперь настроен шлюз по умолчанию,"
    ]
  },
  {
    "time": [
      1169.85,
      1174.539
    ],
    "en": [
      "known as a gateway of last resort on a Cisco router, it sends the packet to the default"
    ],
    "ru": [
      "известный как шлюз последней инстанции на маршрутизаторе Cisco, он отправляет пакет по умолчанию"
    ]
  },
  {
    "time": [
      1174.539,
      1177.2
    ],
    "en": [
      "gateway as I showed before."
    ],
    "ru": [
      "шлюз, как я показал ранее."
    ]
  },
  {
    "time": [
      1177.2,
      1182.87
    ],
    "en": [
      "Just a reminder, PC1 isn’t actually a PC, it’s a Cisco router."
    ],
    "ru": [
      "Напоминаем, что ПК1 на самом деле не ПК, это маршрутизатор Cisco."
    ]
  },
  {
    "time": [
      1182.87,
      1187.559
    ],
    "en": [
      "Since I’m just using it to ping, I didn’t bother setting up a virtual PC, it’s easier"
    ],
    "ru": [
      "Так как я использую его только для пинга, я не стал утруждать себя настройкой виртуального ПК, это проще"
    ]
  },
  {
    "time": [
      1187.559,
      1189.62
    ],
    "en": [
      "to just use a router to ping."
    ],
    "ru": [
      "просто использовать роутер для пинга."
    ]
  },
  {
    "time": [
      1189.62,
      1195.059
    ],
    "en": [
      "So, since R1 has the packet now, let’s take a look at its routing table to see what it"
    ],
    "ru": [
      "Итак, поскольку у R1 теперь есть пакет, давайте взглянем на его таблицу маршрутизации, чтобы узнать, что он"
    ]
  },
  {
    "time": [
      1195.059,
      1198.07
    ],
    "en": [
      "will do with the packet."
    ],
    "ru": [
      "сделаю с пакетом."
    ]
  },
  {
    "time": [
      1198.07,
      1203.58
    ],
    "en": [
      "So I used SHOW IP ROUTE on R1, and there’s the routing table."
    ],
    "ru": [
      "Итак, я использовал SHOW IP ROUTE на R1, и вот таблица маршрутизации."
    ]
  },
  {
    "time": [
      1203.58,
      1216.45
    ],
    "en": [
      "Because R1 is connected to three networks, 192.168.1.0/24, 192.168.12.0/24, and 192.168.13.0/24,"
    ],
    "ru": [
      "Поскольку R1 подключен к трем сетям: 192.168.1.0/24, 192.168.12.0/24 и 192.168.13.0/24,"
    ]
  },
  {
    "time": [
      1216.45,
      1220.179
    ],
    "en": [
      "it has connected routes for each of those networks, as well as the local routes for"
    ],
    "ru": [
      "он подключил маршруты для каждой из этих сетей, а также локальные маршруты для"
    ]
  },
  {
    "time": [
      1220.179,
      1222.73
    ],
    "en": [
      "the IP addresses configured on its interfaces."
    ],
    "ru": [
      "IP-адреса, настроенные на его интерфейсах."
    ]
  },
  {
    "time": [
      1222.73,
      1225.409
    ],
    "en": [
      "However, there’s a problem."
    ],
    "ru": [
      "Однако есть проблема."
    ]
  },
  {
    "time": [
      1225.409,
      1234.409
    ],
    "en": [
      "The packet’s destination is 192.168.4.1, in the 192.168.4.0/24 network, but its not"
    ],
    "ru": [
      "Адресатом пакета является 192.168.4.1 в сети 192.168.4.0/24, но не"
    ]
  },
  {
    "time": [
      1234.409,
      1236.7
    ],
    "en": [
      "in the routing table."
    ],
    "ru": [
      "в таблице маршрутизации."
    ]
  },
  {
    "time": [
      1236.7,
      1242.649
    ],
    "en": [
      "If this were a switch receiving a frame with an unknown destination MAC address, what would it do?"
    ],
    "ru": [
      "Если бы этот коммутатор получил кадр с неизвестным MAC-адресом назначения, что бы он сделал?"
    ]
  },
  {
    "time": [
      1242.649,
      1246.299
    ],
    "en": [
      "It would flood the frame out of all of its interfaces."
    ],
    "ru": [
      "Это вылило бы фрейм из всех его интерфейсов."
    ]
  },
  {
    "time": [
      1246.299,
      1252.499
    ],
    "en": [
      "How about in this case, what will a router do when it receives a packet with an unknown destination IP address?"
    ],
    "ru": [
      "Как насчет того, что в этом случае будет делать маршрутизатор, когда он получит пакет с неизвестным IP-адресом назначения?"
    ]
  },
  {
    "time": [
      1252.499,
      1254.989
    ],
    "en": [
      "Well, it won’t flood it."
    ],
    "ru": [
      "Ну не флудит."
    ]
  },
  {
    "time": [
      1254.989,
      1257.4
    ],
    "en": [
      "It will simply drop the packet."
    ],
    "ru": [
      "Он просто сбросит пакет."
    ]
  },
  {
    "time": [
      1257.4,
      1259.49
    ],
    "en": [
      "Let me review that point."
    ],
    "ru": [
      "Позвольте мне повторить этот момент."
    ]
  },
  {
    "time": [
      1259.49,
      1265.779
    ],
    "en": [
      "Switches flood frames with unknown destinations, meaning destinations not in the MAC address table."
    ],
    "ru": [
      "Переключает кадры лавинной рассылки с неизвестными адресатами, то есть адресатами, не указанными в таблице MAC-адресов."
    ]
  },
  {
    "time": [
      1265.779,
      1270.58
    ],
    "en": [
      "Routers, however, drop packets with unknown destination IP addresses."
    ],
    "ru": [
      "Однако маршрутизаторы отбрасывают пакеты с неизвестными IP-адресами назначения."
    ]
  },
  {
    "time": [
      1270.58,
      1275.419
    ],
    "en": [
      "So, unless we configure a route on R1, this ping will not succeed."
    ],
    "ru": [
      "Таким образом, если мы не настроим маршрут на R1, этот пинг не будет успешным."
    ]
  },
  {
    "time": [
      1275.419,
      1284.71
    ],
    "en": [
      "So, let’s configure a static route on R1 aimed for the 192.168.4.0/24 network."
    ],
    "ru": [
      "Итак, давайте настроим статический маршрут на маршрутизаторе R1 для сети 192.168.4.0/24."
    ]
  },
  {
    "time": [
      1284.71,
      1287.919
    ],
    "en": [
      "This time I’ll show you a slight variation of the command."
    ],
    "ru": [
      "На этот раз я покажу вам небольшой вариант команды."
    ]
  },
  {
    "time": [
      1287.919,
      1298.59
    ],
    "en": [
      "ip route, followed by the destination IP address, the mask, and the exit interface. What’s different? Its this."
    ],
    "ru": [
      "ip route, за которым следует IP-адрес назначения, маска и интерфейс выхода. Что по-другому? Это это."
    ]
  },
  {
    "time": [
      1298.59,
      1300.789
    ],
    "en": [
      "Last time we configured the next hop address."
    ],
    "ru": [
      "В прошлый раз мы настроили адрес следующего перехода."
    ]
  },
  {
    "time": [
      1300.789,
      1306.57
    ],
    "en": [
      "This time, instead of specifying an IP address as the next hop, we just specify the exit"
    ],
    "ru": [
      "На этот раз вместо того, чтобы указывать IP-адрес в качестве следующего перехода, мы просто указываем выход"
    ]
  },
  {
    "time": [
      1306.57,
      1311.71
    ],
    "en": [
      "interface, the interface out of which R1 should send the packet."
    ],
    "ru": [
      "интерфейс, интерфейс, из которого R1 должен отправить пакет."
    ]
  },
  {
    "time": [
      1311.71,
      1314.86
    ],
    "en": [
      "If we do it on R1, it will look like this."
    ],
    "ru": [
      "Если мы сделаем это на R1, это будет выглядеть так."
    ]
  },
  {
    "time": [
      1314.86,
      1326.1
    ],
    "en": [
      "ip route, followed by 192.168.4.0, the destination IP address, then 255.255.255.0, the mask,"
    ],
    "ru": [
      "ip route, за которым следует 192.168.4.0, IP-адрес назначения, затем 255.255.255.0, маска,"
    ]
  },
  {
    "time": [
      1326.1,
      1330.639
    ],
    "en": [
      "finally gigabitethernet0/0, the exit interface."
    ],
    "ru": [
      "наконец, gigabitethernet0 / 0, интерфейс выхода."
    ]
  },
  {
    "time": [
      1330.639,
      1338.269
    ],
    "en": [
      "Okay, so after configuring the route I used ‘do show ip route’ on R1 to view the routing table."
    ],
    "ru": [
      "Хорошо, поэтому после настройки маршрута я использовал «do show ip route» на R1 для просмотра таблицы маршрутизации."
    ]
  },
  {
    "time": [
      1338.269,
      1340.58
    ],
    "en": [
      "Here’s the route we configured."
    ],
    "ru": [
      "Вот настроенный нами маршрут."
    ]
  },
  {
    "time": [
      1340.58,
      1343.419
    ],
    "en": [
      "You may notice an interesting difference here."
    ],
    "ru": [
      "Вы можете заметить здесь интересную разницу."
    ]
  },
  {
    "time": [
      1343.419,
      1351.57
    ],
    "en": [
      "Because we configured an exit interface instead of a next-hop IP address, it says 192.168.4.0/24"
    ],
    "ru": [
      "Поскольку мы настроили интерфейс выхода вместо IP-адреса следующего перехода, он говорит 192.168.4.0/24"
    ]
  },
  {
    "time": [
      1351.57,
      1356.1
    ],
    "en": [
      "is directly connected to the gigabitethernet 0/0 interface."
    ],
    "ru": [
      "напрямую подключен к интерфейсу gigabitethernet 0/0."
    ]
  },
  {
    "time": [
      1356.1,
      1359.16
    ],
    "en": [
      "The code still says S for static though."
    ],
    "ru": [
      "Тем не менее, код по-прежнему говорит S для статики."
    ]
  },
  {
    "time": [
      1359.16,
      1363.27
    ],
    "en": [
      "You can use either way to configure, later in the course I’ll show you some cases where"
    ],
    "ru": [
      "Вы можете использовать любой способ настройки, позже в ходе курса я покажу вам некоторые случаи, когда"
    ]
  },
  {
    "time": [
      1363.27,
      1367.529
    ],
    "en": [
      "you will want to use one way instead of the other, but for now you can just use either"
    ],
    "ru": [
      "вы захотите использовать один способ вместо другого, но пока вы можете просто использовать либо"
    ]
  },
  {
    "time": [
      1367.529,
      1372.15
    ],
    "en": [
      "the next-hop IP address or the exit interface."
    ],
    "ru": [
      "IP-адрес следующего перехода или интерфейс выхода."
    ]
  },
  {
    "time": [
      1372.15,
      1376.169
    ],
    "en": [
      "Notice how this static route isn’t added as the gateway of last resort, because it"
    ],
    "ru": [
      "Обратите внимание, что этот статический маршрут не добавлен в качестве шлюза последней инстанции, потому что он"
    ]
  },
  {
    "time": [
      1376.169,
      1383.69
    ],
    "en": [
      "is for a specific network, not for 0.0.0.0/0 which matches all networks."
    ],
    "ru": [
      "предназначен для конкретной сети, а не для 0.0.0.0/0, который соответствует всем сетям."
    ]
  },
  {
    "time": [
      1383.69,
      1389.269
    ],
    "en": [
      "Okay, now R1 has a route in its routing table for the destination."
    ],
    "ru": [
      "Хорошо, теперь R1 имеет маршрут в своей таблице маршрутизации для пункта назначения."
    ]
  },
  {
    "time": [
      1389.269,
      1399.02
    ],
    "en": [
      "The destination of this packet is 192.168.4.1, which is included in the 192.168.4.0/24 network."
    ],
    "ru": [
      "Адресатом этого пакета является 192.168.4.1, который включен в сеть 192.168.4.0/24."
    ]
  },
  {
    "time": [
      1399.02,
      1402.389
    ],
    "en": [
      "We don’t need a route to the exact destination."
    ],
    "ru": [
      "Нам не нужен маршрут к точному пункту назначения."
    ]
  },
  {
    "time": [
      1402.389,
      1410.559
    ],
    "en": [
      "Because 192.168.4.1 is included in the 192.168.4.0/24 range, it’s fine, it matches."
    ],
    "ru": [
      "Поскольку 192.168.4.1 входит в диапазон 192.168.4.0/24, это нормально, оно совпадает."
    ]
  },
  {
    "time": [
      1410.559,
      1415.549
    ],
    "en": [
      "So, R1 forwards the packet to R2."
    ],
    "ru": [
      "Итак, R1 пересылает пакет R2."
    ]
  },
  {
    "time": [
      1415.549,
      1420.33
    ],
    "en": [
      "You can probably guess that there will be a problem here, though...R2 also doesn’t"
    ],
    "ru": [
      "Вы, наверное, догадались, что здесь будет проблема ... R2 тоже не"
    ]
  },
  {
    "time": [
      1420.33,
      1423.73
    ],
    "en": [
      "have a route that matches 192.168.4.1."
    ],
    "ru": [
      "иметь маршрут, соответствующий 192.168.4.1."
    ]
  },
  {
    "time": [
      1423.73,
      1435.559
    ],
    "en": [
      "So, I went ahead and configured a route on R2, ip route 192.168.4.0 255.255.255.0, and"
    ],
    "ru": [
      "Итак, я пошел дальше и настроил маршрут на R2, ip route 192.168.4.0 255.255.255.0 и"
    ]
  },
  {
    "time": [
      1435.559,
      1444.179
    ],
    "en": [
      "this time specified the next-hop IP address of 192.168.24.4, which is R4’s IP address."
    ],
    "ru": [
      "на этот раз был указан IP-адрес следующего перехода 192.168.24.4, который является IP-адресом маршрутизатора R4."
    ]
  },
  {
    "time": [
      1444.179,
      1445.809
    ],
    "en": [
      "You can see the route here."
    ],
    "ru": [
      "Посмотреть маршрут можно здесь."
    ]
  },
  {
    "time": [
      1445.809,
      1454.02
    ],
    "en": [
      "Let’s focus on this part at the end, via 192.168.24.4."
    ],
    "ru": [
      "Давайте сосредоточимся на этой части в конце, через 192.168.24.4."
    ]
  },
  {
    "time": [
      1454.02,
      1460.809
    ],
    "en": [
      "So, R2 receives the packet with the destination 192.168.4.1 and looks up the most specific"
    ],
    "ru": [
      "Итак, R2 получает пакет с адресом 192.168.4.1 и ищет наиболее конкретный"
    ]
  },
  {
    "time": [
      1460.809,
      1463.08
    ],
    "en": [
      "match in its routing table."
    ],
    "ru": [
      "совпадение в его таблице маршрутизации."
    ]
  },
  {
    "time": [
      1463.08,
      1472.8
    ],
    "en": [
      "It finds this entry for 192.168.4.0/24, and it says via 192.168.24.4."
    ],
    "ru": [
      "Он находит эту запись для 192.168.4.0/24 и говорит через 192.168.24.4."
    ]
  },
  {
    "time": [
      1472.8,
      1474.92
    ],
    "en": [
      "What does R2 do next?"
    ],
    "ru": [
      "Что делает R2 дальше?"
    ]
  },
  {
    "time": [
      1474.92,
      1480.96
    ],
    "en": [
      "Well, it then looks up the most specific match for 192.168.24.4."
    ],
    "ru": [
      "Затем он ищет наиболее точное совпадение для 192.168.24.4."
    ]
  },
  {
    "time": [
      1480.96,
      1486.889
    ],
    "en": [
      "That is this route here, which is a directly connected route on gigabitethernet0/1, so"
    ],
    "ru": [
      "Вот этот маршрут здесь, который является прямым подключенным маршрутом на gigabitethernet0 / 1, поэтому"
    ]
  },
  {
    "time": [
      1486.889,
      1489.69
    ],
    "en": [
      "it will forward the packet out of that interface."
    ],
    "ru": [
      "он перенаправит пакет из этого интерфейса."
    ]
  },
  {
    "time": [
      1489.69,
      1495.909
    ],
    "en": [
      "So, R2 sends the packet to R4. What happens next?"
    ],
    "ru": [
      "Итак, R2 отправляет пакет R4. Что произойдет дальше?"
    ]
  },
  {
    "time": [
      1495.909,
      1499.789
    ],
    "en": [
      "We haven’t configured any static routes on R4, will that be a problem?"
    ],
    "ru": [
      "Мы не настроили статические маршруты на R4, это будет проблемой?"
    ]
  },
  {
    "time": [
      1499.789,
      1502.539
    ],
    "en": [
      "Let’s check the routing table on R4."
    ],
    "ru": [
      "Давайте проверим таблицу маршрутизации на R4."
    ]
  },
  {
    "time": [
      1502.539,
      1506.19
    ],
    "en": [
      "Here’s R4’s routing table."
    ],
    "ru": [
      "Вот таблица маршрутизации R4."
    ]
  },
  {
    "time": [
      1506.19,
      1516.669
    ],
    "en": [
      "Because R4’s G0/2 interface has an IP address of 192.168.4.254 configured, the 192.168.4.0/24"
    ],
    "ru": [
      "Поскольку интерфейс G0 / 2 маршрутизатора R4 имеет настроенный IP-адрес 192.168.4.254, 192.168.4.0/24"
    ]
  },
  {
    "time": [
      1516.669,
      1521.08
    ],
    "en": [
      "network has automatically been added to its routing table as a connected route."
    ],
    "ru": [
      "сеть была автоматически добавлена ​​в свою таблицу маршрутизации как связанный маршрут."
    ]
  },
  {
    "time": [
      1521.08,
      1529.12
    ],
    "en": [
      "So, R4 sends the packet out of its G0/2 interface, and SW4 forwards it to PC4."
    ],
    "ru": [
      "Итак, R4 отправляет пакет из своего интерфейса G0 / 2, а SW4 пересылает его на ПК4."
    ]
  },
  {
    "time": [
      1529.12,
      1534.909
    ],
    "en": [
      "Let’s actually try that ping form PC1 to PC4 and see if it works now!"
    ],
    "ru": [
      "Давайте попробуем проверить связь с ПК1 на ПК4 и посмотрим, работает ли он сейчас!"
    ]
  },
  {
    "time": [
      1534.909,
      1542.889
    ],
    "en": [
      "So, I use the command ping 192.168.4.1 on PC1 to send a ping to PC4."
    ],
    "ru": [
      "Итак, я использую команду ping 192.168.4.1 на ПК1, чтобы отправить пинг на ПК4."
    ]
  },
  {
    "time": [
      1542.889,
      1550.71
    ],
    "en": [
      "However, as you can see, the ping fails, success rate is 0 percent, 0 out of 5."
    ],
    "ru": [
      "Однако, как вы можете видеть, пинг не проходит, вероятность успеха составляет 0 процентов, 0 из 5."
    ]
  },
  {
    "time": [
      1550.71,
      1558.46
    ],
    "en": [
      "PC1 has a default gateway, all of the routers along the way know how to reach PC4, so what’s the problem?"
    ],
    "ru": [
      "У ПК1 есть шлюз по умолчанию, все маршрутизаторы на пути знают, как подключиться к ПК4, так в чем проблема?"
    ]
  },
  {
    "time": [
      1558.46,
      1561.49
    ],
    "en": [
      "The problem is one-way reachability."
    ],
    "ru": [
      "Проблема в односторонней доступности."
    ]
  },
  {
    "time": [
      1561.49,
      1562.83
    ],
    "en": [
      "What does that mean?"
    ],
    "ru": [
      "Что это обозначает?"
    ]
  },
  {
    "time": [
      1562.83,
      1567.24
    ],
    "en": [
      "Well, the packet from PC1 was able to reach PC4."
    ],
    "ru": [
      "Итак, пакет от ПК1 смог достичь ПК4."
    ]
  },
  {
    "time": [
      1567.24,
      1575.1
    ],
    "en": [
      "R1, R2, and R4 all have routes to the 192.168.4.0/24 network."
    ],
    "ru": [
      "У R1, R2 и R4 есть маршруты к сети 192.168.4.0/24."
    ]
  },
  {
    "time": [
      1575.1,
      1582.98
    ],
    "en": [
      "However, to send a reply back PC4 sends packets with a source address of 192.168.4.1 and a"
    ],
    "ru": [
      "Однако для отправки ответа ПК4 отправляет пакеты с адресом источника 192.168.4.1 и"
    ]
  },
  {
    "time": [
      1582.98,
      1586.68
    ],
    "en": [
      "destination address of 192.168.1.1."
    ],
    "ru": [
      "адрес назначения 192.168.1.1."
    ]
  },
  {
    "time": [
      1586.68,
      1588.92
    ],
    "en": [
      "Can you see the problem?"
    ],
    "ru": [
      "Вы видите проблему?"
    ]
  },
  {
    "time": [
      1588.92,
      1594.83
    ],
    "en": [
      "R4 and R2 have no route to reach the 192.168.1.0/24 network."
    ],
    "ru": [
      "R4 и R2 не имеют маршрута для достижения сети 192.168.1.0/24."
    ]
  },
  {
    "time": [
      1594.83,
      1599.789
    ],
    "en": [
      "R1 can reach it of course, since its a connected network, but let’s take a quick look at"
    ],
    "ru": [
      "R1, конечно, может связаться с ним, так как это подключенная сеть, но давайте быстро взглянем на"
    ]
  },
  {
    "time": [
      1599.789,
      1603.19
    ],
    "en": [
      "the routing table of R2 and R4 again."
    ],
    "ru": [
      "таблица маршрутизации R2 и R4 снова."
    ]
  },
  {
    "time": [
      1603.19,
      1610.69
    ],
    "en": [
      "Here’s R4’s routing table….no route to 192.168.1.0/24."
    ],
    "ru": [
      "Вот таблица маршрутизации R4… нет маршрута к 192.168.1.0/24."
    ]
  },
  {
    "time": [
      1610.69,
      1617.759
    ],
    "en": [
      "And here’s R2’s routing table..also no route to 192.168.1.0/24."
    ],
    "ru": [
      "А вот таблица маршрутизации R2… тоже нет маршрута к 192.168.1.0/24."
    ]
  },
  {
    "time": [
      1617.759,
      1621.45
    ],
    "en": [
      "Not to mention, I also haven’t configured the default gateway on PC4."
    ],
    "ru": [
      "Не говоря уже о том, что я также не настроил шлюз по умолчанию на ПК4."
    ]
  },
  {
    "time": [
      1621.45,
      1624.989
    ],
    "en": [
      "I’ll quickly run through the configurations."
    ],
    "ru": [
      "Я быстро пробегу по настройкам."
    ]
  },
  {
    "time": [
      1624.989,
      1630.509
    ],
    "en": [
      "Okay, so I configured the default route on PC4 like I did on PC1."
    ],
    "ru": [
      "Хорошо, поэтому я настроил маршрут по умолчанию на ПК4, как и на ПК1."
    ]
  },
  {
    "time": [
      1630.509,
      1635.989
    ],
    "en": [
      "Same as for PC1, I’m just using another Cisco router instead of an actual PC."
    ],
    "ru": [
      "Как и в случае с ПК1, я просто использую другой маршрутизатор Cisco вместо настоящего ПК."
    ]
  },
  {
    "time": [
      1635.989,
      1640.049
    ],
    "en": [
      "You can see the static route I configured, and it has been selected as the gateway of"
    ],
    "ru": [
      "Вы можете увидеть статический маршрут, который я настроил, и он был выбран в качестве шлюза"
    ]
  },
  {
    "time": [
      1640.049,
      1642.429
    ],
    "en": [
      "last resort, the default gateway."
    ],
    "ru": [
      "в крайнем случае, шлюз по умолчанию."
    ]
  },
  {
    "time": [
      1642.429,
      1645.779
    ],
    "en": [
      "Here’s R4’s routing table."
    ],
    "ru": [
      "Вот таблица маршрутизации R4."
    ]
  },
  {
    "time": [
      1645.779,
      1651.88
    ],
    "en": [
      "You can see the static route I configured to the 192.168.1.0/24 network, and the next-hop"
    ],
    "ru": [
      "Вы можете увидеть статический маршрут, который я настроил для сети 192.168.1.0/24, и следующий переход"
    ]
  },
  {
    "time": [
      1651.88,
      1655.6
    ],
    "en": [
      "IP address is R2’s address."
    ],
    "ru": [
      "IP-адрес - это адрес R2."
    ]
  },
  {
    "time": [
      1655.6,
      1657.679
    ],
    "en": [
      "And finally R2’s routing table."
    ],
    "ru": [
      "И, наконец, таблица маршрутизации R2."
    ]
  },
  {
    "time": [
      1657.679,
      1663.92
    ],
    "en": [
      "Here’s the static route I configured to the 192.168.1.0/24 network, with a next-hop"
    ],
    "ru": [
      "Вот статический маршрут, который я настроил к сети 192.168.1.0/24, со следующим переходом"
    ]
  },
  {
    "time": [
      1663.92,
      1669.62
    ],
    "en": [
      "IP address of 192.168.12.1, R1’s IP address."
    ],
    "ru": [
      "IP-адрес 192.168.12.1, IP-адрес маршрутизатора R1."
    ]
  },
  {
    "time": [
      1669.62,
      1671.84
    ],
    "en": [
      "Okay, let’s try that ping once more."
    ],
    "ru": [
      "Хорошо, давай попробуем пинг еще раз."
    ]
  },
  {
    "time": [
      1671.84,
      1675.25
    ],
    "en": [
      "We should have two-way reachability now."
    ],
    "ru": [
      "Теперь у нас должна быть двусторонняя доступность."
    ]
  },
  {
    "time": [
      1675.25,
      1682.499
    ],
    "en": [
      "Okay, now that we have configured static routes in both directions, you can see that the ping succeeds."
    ],
    "ru": [
      "Хорошо, теперь, когда мы настроили статические маршруты в обоих направлениях, вы можете видеть, что пинг прошел успешно."
    ]
  },
  {
    "time": [
      1682.499,
      1688.029
    ],
    "en": [
      "Before reviewing and moving on to the quiz, let me clarify one point I mentioned before."
    ],
    "ru": [
      "Прежде чем рассматривать и переходить к викторине, позвольте мне прояснить один момент, о котором я упоминал ранее."
    ]
  },
  {
    "time": [
      1688.029,
      1693.029
    ],
    "en": [
      "Earlier I mentioned that, when a router looks up a destination IP address in its routing"
    ],
    "ru": [
      "Ранее я упоминал, что, когда маршрутизатор ищет IP-адрес назначения в своей маршрутизации,"
    ]
  },
  {
    "time": [
      1693.029,
      1697.279
    ],
    "en": [
      "table, it looks for the most specific matching route."
    ],
    "ru": [
      "таблица, он ищет наиболее точный совпадающий маршрут."
    ]
  },
  {
    "time": [
      1697.279,
      1698.45
    ],
    "en": [
      "What does that mean?"
    ],
    "ru": [
      "Что это обозначает?"
    ]
  },
  {
    "time": [
      1698.45,
      1702.869
    ],
    "en": [
      "Well, most specific means the longest prefix length."
    ],
    "ru": [
      "Что ж, наиболее конкретный означает самую длинную длину префикса."
    ]
  },
  {
    "time": [
      1702.869,
      1707.109
    ],
    "en": [
      "For example, /32 is more specific than /24."
    ],
    "ru": [
      "Например, / 32 более конкретен, чем / 24."
    ]
  },
  {
    "time": [
      1707.109,
      1710.659
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
      1707.109,
      1710.659
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
      1710.659,
      1714.2
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
      1710.659,
      1714.2
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
      1714.2,
      1718.2
    ],
    "en": [
      "And /8 is more specific than /0."
    ],
    "ru": [
      "И / 8 более конкретен, чем / 0."
    ]
  },
  {
    "time": [
      1718.2,
      1722.01
    ],
    "en": [
      "Here I’ve added one more link to our topology between R1 and R4."
    ],
    "ru": [
      "Здесь я добавил еще одну ссылку на нашу топологию между R1 и R4."
    ]
  },
  {
    "time": [
      1722.01,
      1735.6
    ],
    "en": [
      "It’s the 192.168.14.0/24 network, with R1’s address being 192.168.14.1 and R4’s 192.168.14.4."
    ],
    "ru": [
      "Это сеть 192.168.14.0/24 с адресом R1 192.168.14.1 и 192.168.14.4 R4."
    ]
  },
  {
    "time": [
      1735.6,
      1739.789
    ],
    "en": [
      "I also configured some extra routes, lets check the route table."
    ],
    "ru": [
      "Я также настроил несколько дополнительных маршрутов, давайте проверим таблицу маршрутов."
    ]
  },
  {
    "time": [
      1739.789,
      1743.119
    ],
    "en": [
      "So, here’s R1’s routing table now."
    ],
    "ru": [
      "Итак, вот таблица маршрутизации R1."
    ]
  },
  {
    "time": [
      1743.119,
      1745.619
    ],
    "en": [
      "You can pause the video to take a look if you want."
    ],
    "ru": [
      "Вы можете приостановить видео, чтобы посмотреть, если хотите."
    ]
  },
  {
    "time": [
      1745.619,
      1753.129
    ],
    "en": [
      "Let’s say I issue the command ‘ping 192.168.4.1’ on R1."
    ],
    "ru": [
      "Допустим, я выдаю команду ping 192.168.4.1 на маршрутизаторе R1."
    ]
  },
  {
    "time": [
      1753.129,
      1758.289
    ],
    "en": [
      "Before thinking about which is the MOST SPECIFIC matching route, how many routes actually match"
    ],
    "ru": [
      "Прежде чем подумать о том, какой маршрут САМЫЙ КОНКРЕТНЫЙ соответствует, сколько маршрутов на самом деле соответствует"
    ]
  },
  {
    "time": [
      1758.289,
      1766.1
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
      1758.289,
      1766.1
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
      1766.1,
      1768.96
    ],
    "en": [
      "Okay. Well, here’s one."
    ],
    "ru": [
      "Хорошо. Ну вот один."
    ]
  },
  {
    "time": [
      1768.96,
      1776.62
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
      1768.96,
      1776.62
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
      1776.62,
      1783.429
    ],
    "en": [
      "it is also the most specific match. 192.168.4.0/24 also matches."
    ],
    "ru": [
      "это также наиболее конкретное совпадение. 192.168.4.0/24 также совпадает."
    ]
  },
  {
    "time": [
      1783.429,
      1789.71
    ],
    "en": [
      "Although the last octet is different, .0 and .1, because that octet isn’t covered by"
    ],
    "ru": [
      "Хотя последний октет отличается, .0 и .1, потому что этот октет не охвачен"
    ]
  },
  {
    "time": [
      1789.71,
      1795.039
    ],
    "en": [
      "the mask, it doesn’t matter if it changes, it still matches 192.168.4.1."
    ],
    "ru": [
      "маска, не имеет значения, если она изменится, она все равно соответствует 192.168.4.1."
    ]
  },
  {
    "time": [
      1795.039,
      1799.539
    ],
    "en": [
      "Now, there is one more match, did you find it?"
    ],
    "ru": [
      "Есть еще одно совпадение, вы его нашли?"
    ]
  },
  {
    "time": [
      1799.539,
      1804.769
    ],
    "en": [
      "It’s this one, 192.0.0.0/8."
    ],
    "ru": [
      "Вот этот, 192.0.0.0/8."
    ]
  },
  {
    "time": [
      1804.769,
      1810.779
    ],
    "en": [
      "We haven’t yet seen a class C address like this with a /8 mask, but it follows the same logic."
    ],
    "ru": [
      "Мы еще не видели такого адреса класса C с маской / 8, но он следует той же логике."
    ]
  },
  {
    "time": [
      1810.779,
      1815.309
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
      1810.779,
      1815.309
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
      1815.309,
      1819.89
    ],
    "en": [
      "The other three octets can vary, and they will still match."
    ],
    "ru": [
      "Остальные три октета могут отличаться, и они все равно будут совпадать."
    ]
  },
  {
    "time": [
      1819.89,
      1825.159
    ],
    "en": [
      "So, 192.168.4.1 does match 192.0.0.0/8."
    ],
    "ru": [
      "Итак, 192.168.4.1 соответствует 192.0.0.0/8."
    ]
  },
  {
    "time": [
      1825.159,
      1833.48
    ],
    "en": [
      "However, as I said, 192.168.4.1 is the most specific route, since it has the longest prefix"
    ],
    "ru": [
      "Однако, как я уже сказал, 192.168.4.1 - наиболее конкретный маршрут, поскольку у него самый длинный префикс."
    ]
  },
  {
    "time": [
      1833.48,
      1844.759
    ],
    "en": [
      "length, /32, so in this case the router will choose that route. Here’s another example. Ping 192.168.4.254."
    ],
    "ru": [
      "length, / 32, поэтому в этом случае маршрутизатор выберет этот маршрут. Вот еще один пример. Пинг 192.168.4.254."
    ]
  },
  {
    "time": [
      1844.759,
      1853.64
    ],
    "en": [
      "This time, there are just two matches, 192.168.4.0/24 and 192.0.0.0/8."
    ],
    "ru": [
      "На этот раз совпадений всего два: 192.168.4.0/24 и 192.0.0.0/8."
    ]
  },
  {
    "time": [
      1853.64,
      1856.68
    ],
    "en": [
      "Which route will the router choose? It will choose"
    ],
    "ru": [
      "Какой маршрут выберет роутер? Он выберет"
    ]
  },
  {
    "time": [
      1856.68,
      1862.95
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
      1856.68,
      1862.95
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
      1862.95,
      1866.649
    ],
    "en": [
      "Okay, once again that was a lot of material to cover."
    ],
    "ru": [
      "Ладно, опять же, было много материала, который нужно было осветить."
    ]
  },
  {
    "time": [
      1866.649,
      1871.729
    ],
    "en": [
      "If there’s anything you don’t understand, try watching those parts of the video again,"
    ],
    "ru": [
      "Если вы чего-то не понимаете, попробуйте еще раз просмотреть эти части видео."
    ]
  },
  {
    "time": [
      1871.729,
      1874.97
    ],
    "en": [
      "or feel free to ask questions in the comments."
    ],
    "ru": [
      "или смело задавайте вопросы в комментариях."
    ]
  },
  {
    "time": [
      1874.97,
      1879.039
    ],
    "en": [
      "If your question is something I will answer soon in another video, I may just tell you"
    ],
    "ru": [
      "Если на ваш вопрос я отвечу в ближайшее время в другом видео, я могу просто сказать вам"
    ]
  },
  {
    "time": [
      1879.039,
      1882.389
    ],
    "en": [
      "to wait, but I try to respond to every comment!"
    ],
    "ru": [
      "ждать, но я стараюсь отвечать на каждый комментарий!"
    ]
  },
  {
    "time": [
      1882.389,
      1886.83
    ],
    "en": [
      "Anyway, before moving on to the quiz, lets review what we covered in this video."
    ],
    "ru": [
      "В любом случае, прежде чем перейти к викторине, давайте рассмотрим то, что мы рассмотрели в этом видео."
    ]
  },
  {
    "time": [
      1886.83,
      1892.809
    ],
    "en": [
      "We covered the IP routing process, showing how routers look up destination IP addresses"
    ],
    "ru": [
      "Мы рассмотрели процесс IP-маршрутизации, показав, как маршрутизаторы ищут IP-адреса назначения."
    ]
  },
  {
    "time": [
      1892.809,
      1898.039
    ],
    "en": [
      "in their routing tables to find the next hop in the route to the destination."
    ],
    "ru": [
      "в своих таблицах маршрутизации, чтобы найти следующий переход в маршруте к пункту назначения."
    ]
  },
  {
    "time": [
      1898.039,
      1902.85
    ],
    "en": [
      "speaking of routing tables, I also introduced the routing table on Cisco routers."
    ],
    "ru": [
      "Говоря о таблицах маршрутизации, я также представил таблицу маршрутизации на маршрутизаторах Cisco."
    ]
  },
  {
    "time": [
      1902.85,
      1907.129
    ],
    "en": [
      "There’s still more to talk about regarding the routing table, but don’t worry there"
    ],
    "ru": [
      "Есть еще кое-что, о чем можно поговорить о таблице маршрутизации, но не беспокойтесь об этом."
    ]
  },
  {
    "time": [
      1907.129,
      1910.769
    ],
    "en": [
      "will be plenty more videos about routing coming up!"
    ],
    "ru": [
      "будет еще много видео о маршрутизации!"
    ]
  },
  {
    "time": [
      1910.769,
      1914.44
    ],
    "en": [
      "We also looked at configuring static routes, using this command."
    ],
    "ru": [
      "Мы также рассмотрели настройку статических маршрутов с помощью этой команды."
    ]
  },
  {
    "time": [
      1914.44,
      1921.269
    ],
    "en": [
      "IP ROUTE, followed by the destination IP address, the mask, and then either the next-hop address"
    ],
    "ru": [
      "IP-МАРШРУТ, за которым следует IP-адрес назначения, маска, а затем либо адрес следующего перехода."
    ]
  },
  {
    "time": [
      1921.269,
      1923.009
    ],
    "en": [
      "or the exit interface."
    ],
    "ru": [
      "или интерфейс выхода."
    ]
  },
  {
    "time": [
      1923.009,
      1927.009
    ],
    "en": [
      "Okay, let’s move on to today’s quiz."
    ],
    "ru": [
      "Хорошо, перейдем к сегодняшней викторине."
    ]
  },
  {
    "time": [
      1927.009,
      1931.929
    ],
    "en": [
      "In addition to the quiz, remember to check out the flashcards with the link in the description,"
    ],
    "ru": [
      "В дополнение к викторине не забудьте проверить карточки со ссылкой в ​​описании,"
    ]
  },
  {
    "time": [
      1931.929,
      1934.169
    ],
    "en": [
      "they will help you remember what you’ve learned in this video."
    ],
    "ru": [
      "они помогут вам вспомнить, что вы узнали из этого видео."
    ]
  },
  {
    "time": [
      1934.169,
      1938.109
    ],
    "en": [
      "Let’s get started with question 1."
    ],
    "ru": [
      "Начнем с вопроса 1."
    ]
  },
  {
    "time": [
      1938.109,
      1951.629
    ],
    "en": [
      "The IP address configured on a router interface will appear in the routing table as what kind of route? A, static. B, connected. C, local. Or D, internal."
    ],
    "ru": [
      "IP-адрес, настроенный на интерфейсе маршрутизатора, появится в таблице маршрутизации в качестве маршрута? А, статический. Б, подключено. C, местный. Или D, внутренний."
    ]
  },
  {
    "time": [
      1951.629,
      1957.419
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
      1957.419,
      1960.259
    ],
    "en": [
      "The answer is C, Local."
    ],
    "ru": [
      "Ответ - C, местный."
    ]
  },
  {
    "time": [
      1960.259,
      1965.98
    ],
    "en": [
      "As you can see here, Local addresses use a /32 mask, which specifies the exact address"
    ],
    "ru": [
      "Как вы можете видеть здесь, локальные адреса используют маску / 32, которая указывает точный адрес."
    ]
  },
  {
    "time": [
      1965.98,
      1968.649
    ],
    "en": [
      "configured on the interface."
    ],
    "ru": [
      "настроен на интерфейсе."
    ]
  },
  {
    "time": [
      1968.649,
      1973.11
    ],
    "en": [
      "Connected addresses represent the network that the local address is part of."
    ],
    "ru": [
      "Подключенные адреса представляют сеть, частью которой является локальный адрес."
    ]
  },
  {
    "time": [
      1973.11,
      1978.07
    ],
    "en": [
      "Static addresses are manually configured addresses, unlike connected and local addresses which"
    ],
    "ru": [
      "Статические адреса настраиваются вручную, в отличие от подключенных и локальных адресов, которые"
    ]
  },
  {
    "time": [
      1978.07,
      1983.679
    ],
    "en": [
      "are automatically added when you configure an IP address on an interface and enable it."
    ],
    "ru": [
      "автоматически добавляются, когда вы настраиваете IP-адрес на интерфейсе и включаете его."
    ]
  },
  {
    "time": [
      1983.679,
      1986.989
    ],
    "en": [
      "Internal is not a type of route you can find in the routing table."
    ],
    "ru": [
      "Внутренний - это не тот тип маршрута, который вы можете найти в таблице маршрутизации."
    ]
  },
  {
    "time": [
      1986.989,
      1989.69
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
      1989.69,
      1994.71
    ],
    "en": [
      "Which command configures a default route on a Cisco router?"
    ],
    "ru": [
      "Какая команда настраивает маршрут по умолчанию на маршрутизаторе Cisco?"
    ]
  },
  {
    "time": [
      1994.71,
      2003.99
    ],
    "en": [
      "Pause the video to examine each option and determine the correct answer."
    ],
    "ru": [
      "Приостановите видео, чтобы изучить каждый вариант и определить правильный ответ."
    ]
  },
  {
    "time": [
      2003.99,
      2014.109
    ],
    "en": [
      "The answer is A, IP ROUTE 0.0.0.0 0.0.0.0 10.1.1.254."
    ],
    "ru": [
      "Ответ: A, IP ROUTE 0.0.0.0 0.0.0.0 10.1.1.254."
    ]
  },
  {
    "time": [
      2014.109,
      2019.259
    ],
    "en": [
      "Default routes are configured as static routes with this syntax: IP ROUTE, followed by the"
    ],
    "ru": [
      "Маршруты по умолчанию настроены как статические маршруты с таким синтаксисом: IP ROUTE, за которым следует"
    ]
  },
  {
    "time": [
      2019.259,
      2027.23
    ],
    "en": [
      "destination IP address, the mask, and then the next-hop IP or exit interface."
    ],
    "ru": [
      "IP-адрес назначения, маска, а затем IP-адрес следующего перехода или интерфейс выхода."
    ]
  },
  {
    "time": [
      2027.23,
      2034.609
    ],
    "en": [
      "Specifying a destination address of 0.0.0.0 with a mask of 0.0.0.0 matches all routes,"
    ],
    "ru": [
      "Указание адреса назначения 0.0.0.0 с маской 0.0.0.0 соответствует всем маршрутам,"
    ]
  },
  {
    "time": [
      2034.609,
      2039.559
    ],
    "en": [
      "thus making it a default route that the device uses only if a packet’s destination address"
    ],
    "ru": [
      "таким образом, делая его маршрутом по умолчанию, который устройство использует, только если адрес назначения пакета"
    ]
  },
  {
    "time": [
      2039.559,
      2042.789
    ],
    "en": [
      "doesn’t match anything else in the routing table."
    ],
    "ru": [
      "ничего не соответствует в таблице маршрутизации."
    ]
  },
  {
    "time": [
      2042.789,
      2046.999
    ],
    "en": [
      "You can’t specify a prefix length with a / in this command, you have to write out the"
    ],
    "ru": [
      "Вы не можете указать длину префикса с помощью / в этой команде, вы должны написать"
    ]
  },
  {
    "time": [
      2046.999,
      2049.03
    ],
    "en": [
      "mask in dotted decimal format."
    ],
    "ru": [
      "маска в десятичном формате с точками."
    ]
  },
  {
    "time": [
      2049.03,
      2052.99
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
      2052.99,
      2057.419
    ],
    "en": [
      "Which is an accurate statement about the behavior of routers and switches?"
    ],
    "ru": [
      "Какое точное утверждение о поведении маршрутизаторов и коммутаторов?"
    ]
  },
  {
    "time": [
      2057.419,
      2063.84
    ],
    "en": [
      "A, Routers flood packets with an unknown destination IP address, switches flood frames with an"
    ],
    "ru": [
      "A, маршрутизаторы лавинно рассылают пакеты с неизвестным IP-адресом назначения, переключают лавинные кадры с"
    ]
  },
  {
    "time": [
      2063.84,
      2066.679
    ],
    "en": [
      "unknown destination MAC address."
    ],
    "ru": [
      "неизвестный MAC-адрес назначения."
    ]
  },
  {
    "time": [
      2066.679,
      2076.0
    ],
    "en": [
      "B, Routers drop packets with an unknown destination IP address, switches drop frames with an unknown destination MAC address."
    ],
    "ru": [
      "B, Маршрутизаторы отбрасывают пакеты с неизвестным IP-адресом назначения, переключает отбрасывание кадров с неизвестным MAC-адресом назначения."
    ]
  },
  {
    "time": [
      2076.0,
      2082.65
    ],
    "en": [
      "C, Routers drop packets with an unknown destination IP address, switches flood frames with an"
    ],
    "ru": [
      "C, маршрутизаторы отбрасывают пакеты с неизвестным IP-адресом назначения, переключает фреймы лавинной рассылки с"
    ]
  },
  {
    "time": [
      2082.65,
      2084.62
    ],
    "en": [
      "unknown destination MAC address."
    ],
    "ru": [
      "неизвестный MAC-адрес назначения."
    ]
  },
  {
    "time": [
      2084.62,
      2091.61
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
      2091.61,
      2097.26
    ],
    "en": [
      "The answer is C, Routers drop packets with an unknown destination IP address, but switches"
    ],
    "ru": [
      "Ответ - C, маршрутизаторы отбрасывают пакеты с неизвестным IP-адресом назначения, но переключаются"
    ]
  },
  {
    "time": [
      2097.26,
      2100.66
    ],
    "en": [
      "flood frames with an unknown destination MAC address."
    ],
    "ru": [
      "лавинная рассылка кадров с неизвестным MAC-адресом назначения."
    ]
  },
  {
    "time": [
      2100.66,
      2105.88
    ],
    "en": [
      "However, you can configure a gateway of last resort on a router, which tells the route"
    ],
    "ru": [
      "Однако вы можете настроить шлюз последней инстанции на маршрутизаторе, который сообщает маршрут"
    ]
  },
  {
    "time": [
      2105.88,
      2109.92
    ],
    "en": [
      "where to forward packets that don’t match any other address in the routing table."
    ],
    "ru": [
      "куда пересылать пакеты, не совпадающие ни с одним другим адресом в таблице маршрутизации."
    ]
  },
  {
    "time": [
      2109.92,
      2113.94
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
      2113.94,
      2118.06
    ],
    "en": [
      "Which two types of addresses are automatically added to the routing table when you configure"
    ],
    "ru": [
      "Какие два типа адресов автоматически добавляются в таблицу маршрутизации при настройке"
    ]
  },
  {
    "time": [
      2118.06,
      2121.24
    ],
    "en": [
      "an IP address on an interface and enable it?"
    ],
    "ru": [
      "IP-адрес интерфейса и включить его?"
    ]
  },
  {
    "time": [
      2121.24,
      2124.31
    ],
    "en": [
      "A, connected and static."
    ],
    "ru": [
      "А, связный и статический."
    ]
  },
  {
    "time": [
      2124.31,
      2127.36
    ],
    "en": [
      "B, local and static."
    ],
    "ru": [
      "Б, местный и статический."
    ]
  },
  {
    "time": [
      2127.36,
      2130.02
    ],
    "en": [
      "C, default and local."
    ],
    "ru": [
      "C, по умолчанию и локально."
    ]
  },
  {
    "time": [
      2130.02,
      2133.18
    ],
    "en": [
      "D, connected and local."
    ],
    "ru": [
      "D, подключенный и местный."
    ]
  },
  {
    "time": [
      2133.18,
      2139.48
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
      2139.48,
      2142.87
    ],
    "en": [
      "The answer is D, connected and local."
    ],
    "ru": [
      "Ответ - D, связанный и локальный."
    ]
  },
  {
    "time": [
      2142.87,
      2148.18
    ],
    "en": [
      "As I mentioned in the explanation for question 1, a local route is the actual IP address"
    ],
    "ru": [
      "Как я уже упоминал в объяснении вопроса 1, локальный маршрут - это фактический IP-адрес."
    ]
  },
  {
    "time": [
      2148.18,
      2154.09
    ],
    "en": [
      "configured on the interface, and a connected route is the network the interface is a member of."
    ],
    "ru": [
      "настроен на интерфейсе, а подключенный маршрут - это сеть, членом которой является интерфейс."
    ]
  },
  {
    "time": [
      2154.09,
      2157.07
    ],
    "en": [
      "Let’s go to question 5."
    ],
    "ru": [
      "Перейдем к вопросу 5."
    ]
  },
  {
    "time": [
      2157.07,
      2163.92
    ],
    "en": [
      "Which interface will be used to forward a packet with a destination IP address of 10.1.1.1?"
    ],
    "ru": [
      "Какой интерфейс будет использоваться для пересылки пакета с IP-адресом назначения 10.1.1.1?"
    ]
  },
  {
    "time": [
      2163.92,
      2171.78
    ],
    "en": [
      "Pause the video to take a look at R1’s routing table and find the correct answer."
    ],
    "ru": [
      "Остановите видео, чтобы взглянуть на таблицу маршрутизации маршрутизатора R1 и найти правильный ответ."
    ]
  },
  {
    "time": [
      2171.78,
      2177.36
    ],
    "en": [
      "Okay, the correct answer is gigabitethernet0/3."
    ],
    "ru": [
      "Хорошо, правильный ответ - gigabitethernet0 / 3."
    ]
  },
  {
    "time": [
      2177.36,
      2189.24
    ],
    "en": [
      "The most specific match for the destination 10.1.1.1 is this route, 10.1.1.0/24 via 192.168.14.4."
    ],
    "ru": [
      "Наиболее точным совпадением для пункта назначения 10.1.1.1 является этот маршрут, 10.1.1.0/24 через 192.168.14.4."
    ]
  },
  {
    "time": [
      2189.24,
      2195.41
    ],
    "en": [
      "If you then look up the most specific match for 192.168.14.4, you’ll find this route"
    ],
    "ru": [
      "Если затем вы найдете наиболее точное соответствие для 192.168.14.4, вы найдете этот маршрут"
    ]
  },
  {
    "time": [
      2195.41,
      2204.69
    ],
    "en": [
      "to 192.168.14.0/24, which specifies that the packet will be forwarded out of the gigabitethernet0/3 interface."
    ],
    "ru": [
      "на 192.168.14.0/24, который указывает, что пакет будет перенаправлен из интерфейса gigabitethernet0 / 3."
    ]
  },
  {
    "time": [
      2204.69,
      2209.04
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
      2209.04,
      2213.55
    ],
    "en": [
      "Remember to use the supplementary materials to help you remember what you’ve studied."
    ],
    "ru": [
      "Не забывайте использовать дополнительные материалы, которые помогут вам вспомнить, что вы изучали."
    ]
  },
  {
    "time": [
      2213.55,
      2217.31
    ],
    "en": [
      "There will be Anki flashcards to help you review what you’ve studied."
    ],
    "ru": [
      "Будут представлены карточки Anki, которые помогут вам повторить то, что вы изучали."
    ]
  },
  {
    "time": [
      2217.31,
      2220.91
    ],
    "en": [
      "There will also be a packet tracer practice lab so you can get some hands-on practice"
    ],
    "ru": [
      "Там также будет практическая лаборатория по отслеживанию пакетов, чтобы вы могли получить практическую подготовку."
    ]
  },
  {
    "time": [
      2220.91,
      2223.72
    ],
    "en": [
      "configuring static routes on Cisco routers."
    ],
    "ru": [
      "настройка статических маршрутов на маршрутизаторах Cisco."
    ]
  },
  {
    "time": [
      2223.72,
      2226.14
    ],
    "en": [
      "Good luck with your studies."
    ],
    "ru": [
      "Удачи в учебе."
    ]
  },
  {
    "time": [
      2226.14,
      2229.91
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
      2229.91,
      2233.82
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
      2233.82,
      2237.16
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
      2237.16,
      2239.99
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
      2239.99,
      2247.25
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
      2247.25,
      2247.25
    ],
    "en": [
      "That's all for now."
    ],
    "ru": [
      "На этом пока все."
    ]
  }
]